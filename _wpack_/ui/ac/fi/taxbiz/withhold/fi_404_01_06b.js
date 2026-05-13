/*amd /ui/ac/fi/taxbiz/withhold/fi_404_01_06b.xml 21570 e5f375d4fc0c4d634cce844728a16cc81b04d85d171c0f2779a42b7d4ec1d4c1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'지급년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dofficeCd',name:'구청코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dofficeNm',name:'구청명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_404_01_06b
// 이름     : 사업소세신고서발행
// 경로     : 재무회계/세무/원천세/
// 사용계정 : 내부
// 파라미터 :
//            IN  :
//            OUT :
//
// 비고     : 
//           레포트 화면
//           
// 레포트   : fi_404_01_06p.ozr
// 업로드   :
// 다운로드 : 
// 호출     :
//            
//==================================================================================================================

// 로그인사용자 정보
scwin.vLoginCoCd = ""; // 소속 자회사 
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.privAdmin = ""; // 어드민권한
scwin.userId = ""; // 사용자ID
scwin.vCoCd = ""; // 회사코드
scwin.vCoClsCd = ""; // 소속회사종류 : 회계_회사구분('CO035' : 0:동부 EXPRESS)

scwin.vAdminYn = ""; // 어드민여부
scwin.userEmpNo = ""; // 사용자번호

scwin.isSubCompany = false; // 자회사여부

scwin.txtCoCd = "";
scwin.txtCoClsCd = "";
scwin.ed_coCd_hidVal = ""; // 히든값
scwin.ed_dofficeCd_hidVal = ""; // 구청코드 히든

scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)

scwin.onpageload = function () {
  console.log("====== onpageload ==================");

  // 회원정보를 json 데이터로 모두 받음
  let memJson = $c.data.getMemInfo($p);

  // 로그인 정보 추출
  let coCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd");
  let coClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd");
  let userHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드
  let userId = $c.data.getMemInfo($p, "userId");
  let privAdmin = $c.data.getMemInfo($p, "privAdmin");
  let empNo = $c.data.getMemInfo($p, "empNo");
  scwin.vLoginCoCd = coCd;
  scwin.vLoginCoClsCd = coClsCd;
  scwin.vUserHomeClsCd = userHomeClsCd;
  scwin.vCoCd = coCd;
  scwin.vCoClsCd = coClsCd;
  scwin.userId = userId;
  scwin.vAdminYn = privAdmin;
  scwin.userEmpNo = empNo;
  console.log("▶▶ vLoginCoCd : " + scwin.vLoginCoCd + "   loginCoClsCd : " + scwin.vLoginCoClsCd);
  console.log("▶▶ vCoCd      : " + scwin.vCoCd + "   vCoClsCd : " + scwin.vCoClsCd);
  console.log("▶▶ userId     : " + scwin.userId + "   userEmpNo : " + scwin.userEmpNo);
  console.log("▶▶ vUserHomeClsCd : " + scwin.vUserHomeClsCd + "   vAdminYn : " + scwin.vAdminYn);
  //    console.log("▶▶ memJson : "+ JSON.stringify(memJson));
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    // f_createHeader();
    scwin.f_Setting();
    scwin.f_setCompanyInfo();
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 조회조건 셋팅
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  // ed_closeYm.text = <%=DDate.getDate().substring(0,6)%>;
  var today = $c.date.getServerDateTime($p, "yyyyMMdd");
  ica_closeYm.setValue(today);
  ica_closeYm.focus();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  console.log("=== f_setCompanyInfo");

  // 사용자 구분이 자회사('SA')인 경우
  if (scwin.vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.isSubCompany = true;
  } else {
    // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
    scwin.vCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vCoCd);
  scwin.txtCoClsCd = scwin.vCoClsCd;
  scwin.f_PopUpCompanyInfo('T');

  // KYU_ORDER : 회사팝업 콜백으로 이동
  // if(txtCoClsCd.value > '<%=ACConstants.CO_CLS_CD_DONGBU%>')  {  	// 자회사 회계 시스템
  // 	isSubCompany = true;
  // }else{
  // 	isSubCompany = false;
  // }

  // if('T' == '<%=privAdmin%>'  ||  !isSubCompany   ) { // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
  // 	cfEnableObjects([ed_coCd,txt_coNm,img_company ]);
  // }else {
  // 	cfDisableObjects([ed_coCd,txt_coNm,img_company  ]);
  // }
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 enable 처리  // 미사용
//-------------------------------------------------------------------------
scwin.f_enableCompanyInfo = function () {
  if ('T' == scwin.vAdminYn || !scwin.isSubCompany) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
    // cfEnableObjects([ed_coCd,txt_coNm,img_company1 ]);
    $c.gus.cfEnableObjects($p, [ed_coCd_cond, ed_coNm_cond, btn_company1]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd_cond, ed_coNm_cond, btn_company1]);
  }
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 회사코드 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};

//-------------------------------------------------------------------------
// 구청코드 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_dofficeCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  // var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  // 								,ed_coCd.text, txt_coNm.value
  // 								,pWinCloseTF,null,null,null,null
  // 								,null,null,null,null,null);
  // KYU_TEST : 회사코드 코드 null일 때 팝업 안뜨게 처리 : 2026-01-19
  let pNoDataCloseTF = pWinCloseTF;
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, pNoDataCloseTF);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ]   구청코드)");

  // 구청코드
  var param = "1," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
  console.log("  구청코드popup  param [" + param + "]");

  // rtnList = cfCommonPopUp('retrieveDOfficeCdInfo',ed_dofficeCd.text.trim(),txt_dofficeNm.value,check,null,null,null,null,param,null,null,null,null);
  udc_dofficeCd.cfCommonPopUp(scwin.udc_dofficeCd_callBackFunc, ed_dofficeCd.getValue().trim(), ed_dofficeNm.getValue(), check, null, null, null, null, param, null, null, null, null);
  // f_resultPopEd(ed_dofficeCd,txt_dofficeNm,rtnList);

  // if ( rtnList != null) {
  // 	if (rtnList[0] == "N/A") return;

  // 	ed_coCd.text = rtnList[3];
  // 	txtCoClsCd.value = rtnList[4];
  // }
};

// @@ ====== 팝업 callBackFunc ================================================================= //

//-------------------------------------------------------------------------
// 회사코드조회 callBackFunc
//-------------------------------------------------------------------------
scwin.udc_coCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_coCd_callBackFunc (회사코드조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");

  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    // KYU_NEW
    scwin.ed_coCd_hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분    
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명 
    // KYU_NEW
    scwin.ed_coCd_hidVal = ""; // 히든값
    scwin.txtCoClsCd = ""; // 회사구분    
  }

  // KYU_ORDER : 회사팝업 콜백으로 이동 (팝업 리턴 시간차) - 자회사여부는 계속 바뀌어야 함
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템  0
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  console.log("  scwin.txtCoClsCd [" + scwin.txtCoClsCd + "]  isSubCompany [" + scwin.isSubCompany + "]  isStarted [" + scwin.isStarted + "]");
  if (scwin.isStarted == true)
    // 최초 이벤트 여부 (자회사 여부를 최초 한번만 실행-팝업 리턴 시간차)
    {
      console.log("  ==-==-== 자회사 여부에 따른 회사코드팝업 활성/비활성 처리 (최초 1회)");

      // KYU_ORDER : 회사팝업 콜백으로 이동 (팝업 리턴 시간차)
      if ('T' == scwin.vAdminYn || scwin.isSubCompany != true) {
        // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
        $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
        console.log("  ==--== 활성 (회사코드) - 자회사 아님");
      } else {
        $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
        console.log("  ==--== 비활성 (회사코드) - 자회사");
      }
      scwin.isStarted = false; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)
    }
};

//-------------------------------------------------------------------------
// 구청코드조회 callBackFunc
//-------------------------------------------------------------------------
scwin.udc_dofficeCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_dofficeCd_callBackFunc (구청코드조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  scwin.f_resultPopEd(ed_dofficeCd, ed_dofficeNm, rtnList, '1');

  // KYU_ORDER  f_resultPopEd 안으로
  // if ( rtnList != null) {
  // 	if (rtnList[0] == "N/A") return;

  // 	ed_coCd.text = rtnList[3];
  // 	txtCoClsCd.value = rtnList[4];
  // }
};

//-------------------------------------------------------------------------
// 팝업결과
//  flag : 신규 추가. 어떤 팝업을 호출했는지 구분
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)   flag [" + flag + "]  1:구청코드)");

  // if (rtnList != null ) {
  // 	if (rtnList[0] == "N/A") {
  // 			return;
  // 		}
  // 		strCd.Text = rtnList[0];	// 코드
  // 		strNm.value = rtnList[1];	// 명
  // 		strCd.hidVal = rtnList[0];  // 히든값
  // }else{
  // 	strCd.Text = "";
  // 	strNm.value = "";
  // 	strCd.hidVal = "";
  // }

  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 2026-02-02 : 코드 지정된 상태에서 팝업 열고 닫기 눌렀을 때 hidVal 잔존 문제
      // 히든값 분기처리
      switch (flag) {
        case '1':
          scwin.ed_dofficeCd_hidVal = "";
          break;
        // 구청코드
        default:
          break;
      }
      return;
    }
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_dofficeCd_hidVal = rtnList[0];
        break;
      // 구청코드
      default:
        break;
    }
  } else {
    strCd.setValue("");
    strNm.setValue("");

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_dofficeCd_hidVal = "";
        break;
      // 구청코드
      default:
        break;
    }
  }

  // KYU_ORDER  f_resultPopEd 안으로 들어옴
  if (rtnList != null) {
    // if (rtnList[0] == "N/A") return;

    ed_coCd.setValue(rtnList[3]);
    scwin.txtCoClsCd = rtnList[4];
  }
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 회사코드 focus out
//-------------------------------------------------------------------------
scwin.udc_coCd_onblurCodeEvent = function (e) {
  // <!-- 회사코드 입력시  -->
  // language=JavaScript for=ed_coCd event=OnKillFocus()> 
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 구청코드 focus out
//-------------------------------------------------------------------------
scwin.udc_dofficeCd_onblurCodeEvent = function (e) {
  // <script language=JavaScript for=ed_dofficeCd event=OnKillFocus()>
  if (ed_dofficeCd.getValue().trim() == scwin.ed_dofficeCd_hidVal) return;
  ed_dofficeNm.setValue("");
  scwin.ed_dofficeCd_hidVal = "";
  if (ed_dofficeCd.getValue().trim() != "") scwin.f_openPopUp('1', 'T');
};

// @@ ====== 레포트 ============================================================================ //

//-------------------------------------------------------------------------
// 사업소세신고서발행
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  console.log("=== f_OzReport");

  // KYU_NEW : 회사코드 점검 추가 (asis 없음)
  // if (!cfValidate([ed_closeYm]))
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_closeYm]);
  if (!ret) return false;
  if (ica_closeYm.getValue().length < 6) {
    await $c.win.alert($p, "지급년월은 6자리수만큼 입력하십시오.");
    ica_closeYm.focus();
    return false;
  }

  // // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  // 	var odiParam = new ODIParam("fi_404_01_06p") ;
  // 	odiParam.add("sysPath", "dbl.ac.fi.taxbiz.withhold") ;

  // 	odiParam.add("closeYm",ed_closeYm.text.trim());
  // 	odiParam.add("dofficeCd",ed_dofficeCd.text.trim());
  // 	odiParam.add("dofficeNm",txt_dofficeNm.value.trim());
  // 	odiParam.add("coCd",ed_coCd.text.trim());
  // 	odiParam.add("coClsCd",txtCoClsCd.value.trim());

  // 	//alert(odiParam.getParameterValues()); 

  // 	// 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // 	var formParam = new FormParam() ;
  // 	//formParam.add("form1","폼1") ; 

  // 	// OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // 	var viewerParam = new ViewerParam();
  // 	//viewerParam.add("viewer.showtree","false"); // 트리 표시
  // 	viewerParam.add("viewer.zoom","100");
  // 	viewerParam.add("viewer.useprogressbar","false");		//PROGRESSBAR 안보이게....
  // 	viewerParam.add("print.mode","print"); // 인쇄 옵션창 표시 없이 바로 출력

  // 	//                iframe     viewer        OZR 경로 및 파일명  ODI파라미터 뷰어파라미터       폼파라미터
  // 	 cfOZEmbedPreview("ozFrame", "myozviewer", "/ac/fi/taxbiz/withhold/fi_404_01_06p.ozr", odiParam, viewerParam, formParam);

  let data = {
    odiName: "fi_404_01_06p",
    reportName: "/ac/fi/taxbiz/withhold/fi_404_01_06p.ozr",
    odiParam: {
      sysPath: "dbl.ac.fi.taxbiz.withhold",
      closeYm: ica_closeYm.getValue().trim(),
      dofficeCd: ed_dofficeCd.getValue().trim(),
      dofficeNm: ed_dofficeNm.getValue().trim(),
      coCd: ed_coCd.getValue(),
      coClsCd: scwin.txtCoClsCd
    },
    viewerParam: {
      viewer: 100 // 배율 설정
      ,
      useprogressbar: false // 프로그레스바 쓸지 말지
      // ,mode           : "print"  // 인쇄 옵션창 표시 없이 바로 출력
    },
    formParam: {}
  };
  console.log("  사업소세신고서발행 data [" + JSON.stringify(data) + "]");
  wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfopopup',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',nameId:'ed_coNm',style:'',id:'udc_coCd',btnId:'btn_coCd',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'3',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td',objType:'data'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_closeYm',style:'',mandatory:'true',objType:'data',ref:'data:ds_search.closeYm',displayFormat:'yyyy/MM',title:'지급년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구청코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_dofficeCd',nameId:'ed_dofficeNm',popupID:'retrieveDOfficeCdInfopopup',selectID:'retrieveDOfficeCdInfo',style:'',validTitle:'구청코드',btnId:'btn_dofficeCd',id:'udc_dofficeCd','ev:onclickEvent':'scwin.udc_dofficeCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_dofficeCd_onblurCodeEvent',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',refDataCollection:'ds_search',code:'dofficeCd',name:'dofficeNm',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_ozReport',style:'',type:'button','ev:onclick':'scwin.f_OzReport'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''}}]}]}]}]}]}]})