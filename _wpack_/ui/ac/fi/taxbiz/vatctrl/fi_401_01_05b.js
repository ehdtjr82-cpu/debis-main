/*amd /ui/ac/fi/taxbiz/vatctrl/fi_401_01_05b.xml 23431 745accf1f1add6e9a8223d42a5f0e89a70df7ba96e64dd6527f7d8787aed3be7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'declarYr',name:'신고년도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatQuartYyClsCd',name:'부가세분기구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptCd',name:'부가세관리귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptNm',name:'부가세신고귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crnNm',name:'사업자등록번호명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stYm',name:'시작년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endYm',name:'종료년월',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_401_01_05b
// 이름     : 신용카드매출전표수취명세서
// 경로     : 재무회계/세무/부가세조정/
// 사용계정 : 내부
// 파라미터 :
//            IN  :
//            OUT :
//
// 비고     : 
//           레포트 화면
//           ds_search 미사용으로 보임
//           
// 레포트   : fi_401_01_05.ozr
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

scwin.ed_coCd_hidVal = ""; // 히든값
scwin.ed_vatDeclarAcctDeptCd_hidVal = "";
scwin.txtCoClsCd = ""; // 회사구분

scwin.isSubCompany = false; // 자회사여부

scwin.txt_stYm = "";
scwin.txt_endYm = "";
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

  // 공통코드 : onPageLoad 에 위치
  const codeOptions = [{
    grpCd: "FI013",
    compID: "lc_vatQuartYyClsCd",
    opt: {
      "range": "1,01"
    }
  } // 부가세분기구분
  ];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");

  // 2025-10-14 : 작성일자 포커스 위치 이동
  $p.setTimeout(function () {
    // f_Header();
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
  lc_vatQuartYyClsCd.setSelectedIndex(0);

  //날짜셋팅
  var thisYr = $c.date.getServerDateTime($p, "yyyy"); // 오늘일자 가져오기

  ica_declarYr.setValue(thisYr);
  ed_vatDeclarAcctDeptCd.focus();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  console.log("=== f_setCompanyInfo (자회사 회계 시스템 설정)");

  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  console.log("  ▲△ openCompanyPopup  [호출전]");
  scwin.f_PopUpCompanyInfo('T'); // 속도 지연 문제
  console.log("  △▲ openCompanyPopup  [호출후]");

  // KYU_ORDER
  // if('T' == scwin.vAdminYn  ||  !scwin.isSubCompany   ) { // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
  // 	$c.gus.cfEnableObjects([ed_coCd,ed_coNm,btn_coCd ]);    
  // }else {
  // 	$c.gus.cfDisableObjects([ed_coCd,ed_coNm,btn_coCd  ]);   
  // }
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
// 부가세신고부서 focus out
//-------------------------------------------------------------------------
scwin.udc_vatDeclarAcctDeptCd_onblurCodeEvent = function (e) {
  // <!-- 공통코드 -->
  // language=JavaScript for=ed_vatDeclarAcctDeptCd event=OnKillFocus()>
  if (ed_vatDeclarAcctDeptCd.getValue().trim() == scwin.ed_vatDeclarAcctDeptCd_hidVal) return;
  ed_vatDeclarAcctDeptNm.setValue("");
  ed_vatDeclarCrn.setValue("");
  scwin.ed_vatDeclarAcctDeptCd_hidVal = "";
  if (ed_vatDeclarAcctDeptCd.getValue().trim() != "") scwin.f_openPopUp('', 'T');
};

//-------------------------------------------------------------------------
// 증빙일자 focus out
//-------------------------------------------------------------------------
scwin.ica_declarYr_onblur = function (e) {
  console.log("----- ica_declarYr_onblur (증빙일자 focus out)");
  // <!-- 증빙일자가 변경될 경우 부가세귀속부서도 변경되도록 함.(부가세귀속부서이력관리에 따라 추가) -->
  // language=JavaScript for=ed_spplyYr event=OnKillFocus()>
  if (ed_vatDeclarAcctDeptCd.getValue() == null || ed_vatDeclarAcctDeptCd.getValue() == "") {
    scwin.ed_vatDeclarAcctDeptCd_hidVal = "";
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    ed_vatDeclarCrn.setValue("");
  } else {
    scwin.f_openPopUp('', 'T');
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
// 부가세신고부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_vatDeclarAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('', 'F');
};

//-------------------------------------------------------------------------
// 팝업 @@
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ]   '':부가세신고부서");

  // 부가세신고부서조회
  var param = ",,," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + "," + ica_declarYr.getValue().substring(0, 4);
  console.log("  부가세신고부서 popup  param [" + param + "]");

  // rtnList = cfCommonPopUp('retrieveVatDeclarAcctDeptCd',ed_vatDeclarAcctDeptCd.text.trim(),txt_vatDeclarAcctDeptNm.value,check,null,null,null,null,param,null,null,null,null);
  udc_vatDeclarAcctDeptCd.cfCommonPopUp(scwin.udc_vatDeclarAcctDeptCd_callBackFunc, ed_vatDeclarAcctDeptCd.getValue().trim(), ed_vatDeclarAcctDeptNm.getValue(), check /* 3 */, null, null, null, null, param, 1000, 520, null, null);
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
      // KYU_NEW : 2026-01-30 아무값도 안왔을 때 처리
      scwin.f_initObj();
      return;
    }
    if (scwin.ed_coCd_hidVal != rtnList[0]) scwin.f_initObj();
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    scwin.ed_coCd_hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분    
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명 
    scwin.ed_coCd_hidVal = ""; // 히든값
    scwin.txtCoClsCd = ""; // 회사구분    
  }
  console.log("  scwin.txtCoClsCd [" + scwin.txtCoClsCd + "]");
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }

  // KYU_ORDER 
  if (scwin.isStarted == true) {
    // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)
    if ('T' == scwin.vAdminYn || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
    }
    scwin.isStarted = false; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)
  }
};

//-------------------------------------------------------------------------
// 부가세신고가세신고부서 초기화
//-------------------------------------------------------------------------
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_vatDeclarAcctDeptCd, ed_vatDeclarAcctDeptNm, ed_vatDeclarCrn]); //  부가세 신고 부서

  // KYU_NEW
  scwin.ed_vatDeclarAcctDeptCd_hidVal = ""; // 부가세신고부서 히든값
};

//-------------------------------------------------------------------------
// 부가세관리부서조회 callBackFunc
//-------------------------------------------------------------------------
scwin.udc_vatDeclarAcctDeptCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_vatDeclarAcctDeptCd_callBackFunc (부가세관리부서조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // KYU_NEW : 2026-01-30 아무값도 안왔을 때 처리
      scwin.f_initObj();
      return;
    }
    ed_vatDeclarAcctDeptCd.setValue(rtnList[2]); // 부가세부서코드
    ed_vatDeclarAcctDeptNm.setValue(rtnList[3]); // 부가세부서명
    ed_vatDeclarCrn.setValue(rtnList[5]); // 부가세사업자번호
    scwin.ed_vatDeclarAcctDeptCd_hidVal = rtnList[2]; //히든값
  } else {
    ed_vatDeclarAcctDeptCd.setValue(""); // 부가세부서코드
    ed_vatDeclarAcctDeptNm.setValue(""); // 부가세부서명
    ed_vatDeclarCrn.setValue(""); // 부가세사업자번호
    scwin.ed_vatDeclarAcctDeptCd_hidVal = ""; //히든값
  }
};

// @@ ====== 레포트 ============================================================================ //

//-------------------------------------------------------------------------
// 날짜셋팅 : 부가세분기구분코드에 따라
//-------------------------------------------------------------------------
scwin.f_DateSetting = function () {
  console.log("=== f_DateSetting (날자셋팅)");
  var imsi_date = "";
  if (lc_vatQuartYyClsCd.getValue() == "1") {
    imsi_date = "0101";
  } else if (lc_vatQuartYyClsCd.getValue() == "2") {
    imsi_date = "0401";
  } else if (lc_vatQuartYyClsCd.getValue() == "3") {
    imsi_date = "0701";
  } else if (lc_vatQuartYyClsCd.getValue() == "4") {
    imsi_date = "1001";
  }
  imsi_date = ica_declarYr.getValue().trim() + imsi_date;
  scwin.txt_stYm = imsi_date;
  scwin.txt_endYm = imsi_date.toDate().after(0, 3, -1).format("YYYYMMDD");
  console.log(" txt_stYm [" + scwin.txt_stYm + "]  txt_endYm [" + scwin.txt_endYm + "]");
  ds_search.set("stYm", scwin.txt_stYm);
  ds_search.set("endYm", scwin.txt_endYm);
};

//-------------------------------------------------------------------------
// 신용카드매출전표수취명세서 발행
//-------------------------------------------------------------------------
scwin.f_OzReport = async function (e) {
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_declarYr, lc_vatQuartYyClsCd]);
  if (!ret) return false;
  if (ica_declarYr.getValue().length < 4) {
    await $c.win.alert($p, "기간은 4자리수만큼 입력하십시오.");
    ica_declarYr.focus();
    return false;
  }
  scwin.f_DateSetting();

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  // 매출일경우
  // var odiParam = new ODIParam("fi_401_01_05p") ;
  // odiParam.add("sysPath", "dbl.ac.fi.taxbiz.vatctrl") ;

  // odiParam.add("declarYr",ed_declarYr.text.trim());
  // odiParam.add("vatQuartYyClsCd",ds_search.NameValue(1,"vatQuartYyClsCd"));
  // odiParam.add("vatDeclarAcctDeptCd",ed_vatDeclarAcctDeptCd.text.trim());
  // odiParam.add("vatDeclarAcctDeptNm",txt_vatDeclarAcctDeptNm.value.trim()) ;
  // odiParam.add("stYm",txt_stYm.value.trim());
  // odiParam.add("endYm",txt_endYm.value.trim());
  // odiParam.add("coCd",ed_coCd.text);
  // odiParam.add("coClsCd",txtCoClsCd.value);

  //alert(odiParam.getParameterValues());

  // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // var formParam = new FormParam() ;

  // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // var viewerParam = new ViewerParam();

  // viewerParam.add("viewer.zoom","100");
  // viewerParam.add("viewer.useprogressbar","false");		//PROGRESSBAR 안보이게....
  // viewerParam.add("print.mode","print"); // 인쇄 옵션창 표시 없이 바로 출력

  // //                iframe     viewer        OZR 경로 및 파일명  ODI파라미터 뷰어파라미터       폼파라미터
  // cfOZEmbedPreview("ozFrame", "myozviewer", "/ac/fi/taxbiz/vatctrl/fi_401_01_05p.ozr", odiParam, viewerParam, formParam);

  let data = {
    odiName: "fi_401_01_05p",
    reportName: "/ac/fi/taxbiz/vatctrl/fi_401_01_05p.ozr",
    odiParam: {
      sysPath: "dbl.ac.fi.taxbiz.vatctrl",
      declarYr: ica_declarYr.getValue().trim(),
      vatQuartYyClsCd: ds_search.get("vatQuartYyClsCd"),
      vatDeclarAcctDeptCd: ed_vatDeclarAcctDeptCd.getValue().trim(),
      vatDeclarAcctDeptNm: ed_vatDeclarAcctDeptNm.getValue().trim(),
      stYm: scwin.txt_stYm.trim(),
      endYm: scwin.txt_endYm.trim(),
      coCd: ed_coCd.getValue(),
      coClsCd: scwin.txtCoClsCd
    },
    viewerParam: {
      viewer: 100 // 배율 설정
      ,
      useprogressbar: true // 프로그레스바 쓸지 말지
      // ,mode           : "print"  // 인쇄 옵션창 표시 없이 바로 출력
    },
    formParam: {}
  };
  console.log("  신용카드매출전표수취명세서 data [" + JSON.stringify(data) + "]");
  wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfopopup',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'',nameId:'ed_coNm',style:'',btnId:'btn_coCd',id:'udc_coCd',allowCharCode:'0-9',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent',validTitle:'회사코드',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w100',id:'ica_declarYr',placeholder:'',style:'',mandatory:'true','ev:onblur':'scwin.ica_declarYr_onblur',objType:'data',ref:'data:ds_search.declarYr',title:'기간',allowChar:'0-9',maxlength:'4'}},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_vatQuartYyClsCd',style:'',submenuSize:'auto',objType:'data',ref:'data:ds_search.vatQuartYyClsCd',title:'부가세분기구분코드'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세신고부서 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_vatDeclarAcctDeptCd',nameId:'ed_vatDeclarAcctDeptNm',popupID:'retrieveVatDeclarAcctDeptCdpopup',popupTitle:'',selectID:'retrieveVatDeclarAcctDeptCd',style:'',btnId:'btn_vatDeclarAcctDeptCd',id:'udc_vatDeclarAcctDeptCd',maxlengthCode:'5',allowCharCode:'0-9',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_vatDeclarAcctDeptCd_onblurCodeEvent',mandatoryCode:'true',refDataCollection:'ds_search',code:'vatDeclarAcctDeptCd',name:'vatDeclarAcctDeptNm','ev:onclickEvent':'scwin.udc_vatDeclarAcctDeptCd_onclickEvent',skipOnBlurCodeValueEmpty:'N',validTitle:'부가세신고부서'}},{T:1,N:'xf:input',A:{class:' w150',id:'ed_vatDeclarCrn',style:'',objType:'data',allowChar:'0-9'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_OzReport',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'ozFrame',class:'ozWrap'},E:[{T:1,N:'w2:iframe',A:{src:'/ui/cm/zz/ozreportComp.xml',style:'',id:'wfm_ozReport'}}]}]}]}]}]}]})