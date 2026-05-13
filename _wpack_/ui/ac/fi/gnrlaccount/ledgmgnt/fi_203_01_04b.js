/*amd /ui/ac/fi/gnrlaccount/ledgmgnt/fi_203_01_04b.xml 23229 80d1c516887e492497641f96d2703d861aed4dd77fb2e91fa3b005c5e186edb2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/jquery-1.8.3.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://code.jquery.com/ui/1.9.2/jquery-ui.min.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/jquery.dynatree.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'http://newdevdebis.dongwon.com/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_203_01_04b
// 이름     : 일계표
// 경로     : 재무회계/일반회계/원장관리/
// 사용계정 : 내부
// 파라미터 :
//            IN  :
//            OUT :
//
// 비고     : 
//           레포트 화면
//           
// 레포트   : fi_203_01_04p.ozr
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

scwin.acctDeptCd = ""; // 회계부서코드
scwin.acctDeptNm = ""; // 회계부서명

scwin.ed_coCd_hidVal = ""; // 히든값
scwin.ed_postAcctDeptCd_hidVal = ""; // 히든값
scwin.txtCoClsCd = ""; // 회사구분

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

  // 회계부서코드/명
  let acctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
  let acctDeptNm = $c.data.getMemInfo($p, "acctDeptNm");
  scwin.acctDeptCd = acctDeptCd;
  scwin.acctDeptNm = acctDeptNm;
  console.log("▶▶ acctDeptCd : " + scwin.acctDeptCd + "   acctDeptNm : " + scwin.acctDeptNm);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");

  // 2025-10-14 : 작성일자 포커스 위치 이동
  $p.setTimeout(function () {
    //날짜셋팅
    var today = $c.date.getServerDateTime($p, "yyyyMMdd"); // 오늘일자 가져오기
    var firstDay = $c.date.getServerDateTime($p, "yyyyMM") + "01";
    ed_postDtSt.setValue(firstDay);
    ed_postDtEnd.setValue(today);

    // KYU_ISSUE : asis 에서는 부여안함
    // ed_postAcctDeptCd.setValue(scwin.acctDeptCd);
    // ed_postAcctDeptNm.setValue(scwin.acctDeptNm) ;

    scwin.f_setCompanyInfo();
    if (!$c.gus.cfIsNull($p, ed_postAcctDeptCd.getValue())) scwin.f_openPopUp('1', 'T');
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

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
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');

  // KYU_ORDER
  // if('T' == scwin.vAdminYn  ||  !scwin.isSubCompany   ) { // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
  // 	$c.gus.cfEnableObjects([ed_coCd,ed_coNm,btn_coCd ]);    
  // }else {
  // 	$c.gus.cfDisableObjects([ed_coCd,ed_coNm,btn_coCd  ]);
  // }
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 회사코드 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};

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
// 회계부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_postAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

//-------------------------------------------------------------------------
// 회계부서 focus out
//-------------------------------------------------------------------------
scwin.udc_postAcctDeptCd_onblurCodeEvent = function (e) {
  // console.log("----- udc_postAcctDeptCd_onblurCodeEvent");
  // language=JavaScript for=ed_postAcctDeptCd event=OnKillFocus()>
  scwin.f_checkPopEd(ed_postAcctDeptCd, ed_postAcctDeptNm, '1');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  console.log("=== f_PopUpCompanyInfo ( pWinCloseTF[ " + pWinCloseTF + " ]");

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
//   1:회계부서
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ] 1:회계부서)");
  // var rtnList = new Array();
  switch (flag) {
    case '1':
      // 회계부서
      var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      console.log("  회계부서popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6',ed_postAcctDeptCd.text.trim(),txt_postAcctDeptNm.value,check,null,null,null,null,param,null,null,null,null);
      udc_postAcctDeptCd.cfCommonPopUp(scwin.udc_postAcctDeptCd_callBackFunc, ed_postAcctDeptCd.getValue().trim(), ed_postAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
  }
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
    if (rtnList[0] == "N/A") return;
    if (scwin.ed_coCd_hidVal != rtnList[0]) {
      scwin.f_initObj();
    }
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
  console.log("  --------------- 팝업 scwin.txtCoClsCd [" + scwin.txtCoClsCd + "]");
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStarted == true) {
    // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)
    console.log("  ==-==-== 자회사 여부에 따른 회사코드팝업 활성/비활성 처리 (최초 1회)");

    // KYU_ORDER
    if ('T' == scwin.vAdminYn || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
    }
    scwin.isStarted = false;
  }
};

//-------------------------------------------------------------------------
// 회계처리부서 초기화
//-------------------------------------------------------------------------
scwin.f_initObj = function () {
  console.log("=== f_initObj (ghll)");
  $c.gus.cfInitObjects($p, [ed_postAcctDeptCd, ed_postAcctDeptNm]); // 회계처리부서
};

//-------------------------------------------------------------------------
// 회계부서조회 callBackFunc (1)
//-------------------------------------------------------------------------
scwin.udc_postAcctDeptCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_postAcctDeptCd_callBackFunc (회계부서조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    scwin.f_resultPopEd(ed_postAcctDeptCd, ed_postAcctDeptNm, rtnList, '1');
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//  flag : 신규 추가. 어떤 팝업을 호출했는지 구분
//  1:발행부서,3:계정,4:귀속부서,6:카드번호,7:사업자,8:사원,9:정산처,10:거래처,11:상대계정,12:매출입,13:지점,14:차량별실적,15:요청거래처
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)  rtnList [" + rtnList + "]  flag [" + flag + "]  1:회계부서 ");
  console.log("    ed_postAcctDeptCd_hidVal [" + scwin.ed_postAcctDeptCd_hidVal + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 2026-02-02 : 코드 지정된 상태에서 팝업 열고 닫기 눌렀을 때 hidVal 잔존 문제
      // 히든값 분기처리
      switch (flag) {
        case '1':
          scwin.ed_postAcctDeptCd_hidVal = "";
          break;
        // 회계부서
        default:
          break;
      }
      return;
    }
    // strCd.Text = rtnList[0];	// 코드
    // strNm.value = rtnList[1];	// 명
    // strCd.hidVal = rtnList[0];  // 히든값

    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_postAcctDeptCd_hidVal = rtnList[0];
        break;
      // 회계부서
      default:
        break;
    }
  } else {
    // strCd.Text = "";
    // strNm.value = "";
    // strCd.hidVal = "";
    strCd.setValue("");
    strNm.setValue("");

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_postAcctDeptCd_hidVal = "";
        break;
      // 회계부서
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
// 팝업체크 - 코드값 변경시 자동검색
//   flag : 팝업 플래그
//-------------------------------------------------------------------------
//   1:회계부서
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  console.log("===== f_checkPopEd 팝업체크 srtCd[" + strCd.getValue() + "] strNm[" + strNm.getValue() + "] flag[" + flag + "]");
  console.log("  ed_postAcctDeptCd_hidVal [" + scwin.ed_postAcctDeptCd_hidVal + "]");

  // if (strCd.text.trim() == strCd.hidVal)
  //     return;
  if (flag == '1' && strCd.getValue().trim() == scwin.ed_postAcctDeptCd_hidVal // 회계부서
  ) {
    // KYU_TEST : 히든 비교시 코드가 null 이 아니어야 함. (코드 null 일 때 명 null 처리)
    if (strCd.getValue() != "") {
      // 2026-02-02 : 코드 지정된 상태에서 팝업 열고 닫기 눌렀을 때 hidVal 잔존 문제
      // 히든값 분기처리
      switch (flag) {
        case '1':
          scwin.ed_postAcctDeptCd_hidVal = "";
          break;
        // 회계부서
        default:
          break;
      }
      return;
    }
  }

  // strNm.value="";

  // 명 초기화
  switch (flag) {
    case '1':
      ed_postAcctDeptNm.setValue("");
      break;
    // 회계부서
    default:
      break;
  }

  // strCd.hidVal="";

  // 히든값 초기화
  switch (flag) {
    case '1':
      scwin.ed_postAcctDeptCd_hidVal = "";
      break;
    // 회계부서
    default:
      break;
  }

  // if(strCd.text.trim()!="") {
  // 	f_openPopUp(flag,'T');

  if (strCd.getValue().trim() != "") {
    // 팝업 로딩
    switch (flag) {
      case '1':
        scwin.f_openPopUp(flag, 'T');
        break;
      // 회계부서
      default:
        break;
    }
  }
};

// @@ ====== 레포트 ============================================================================ //

//-------------------------------------------------------------------------
// 일계표 발행
//-------------------------------------------------------------------------
scwin.f_OzReport = async function (e) {
  // if (!$c.gus.cfValidate([ed_coCd, ed_postDtSt, ed_postDtEnd, ed_postAcctDeptCd])) {
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ed_postDtSt, ed_postDtEnd, ed_postAcctDeptCd]);
  if (!ret) return;
  if (!$c.gus.cfIsAfterDate($p, ed_postDtSt.getValue().trim(), ed_postDtEnd.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_postDtSt.focus();
    return false;
  }

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  // var odiParam = new ODIParam("fi_203_01_04p") ;
  // odiParam.add("sysPath", "dbl.ac.fi.gnrlaccount.ledgmgnt") ;
  // odiParam.add("postDtSt",ed_postDtSt.getValue().trim());
  // odiParam.add("postDtEnd",ed_postDtEnd.getValue().trim());
  // odiParam.add("postAcctDeptCd",ed_postAcctDeptCd.getValue().trim());
  // odiParam.add("postAcctDeptNm",ed_postAcctDeptNm.getValue().trim()) ;
  // odiParam.add("coCd",ed_coCd.getValue().trim()) ;
  // odiParam.add("coClsCd",scwin.txtCoClsCd.trim()) ;

  // //alert(odiParam.getParameterValues() );
  // // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // var formParam = new FormParam() ;
  // //formParam.add("form1","폼1") ;

  // // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // var viewerParam = new ViewerParam();
  // //viewerParam.add("viewer.showtree","false"); // 트리 표시
  // viewerParam.add("viewer.zoom","100");
  // viewerParam.add("viewer.useprogressbar","false");		//PROGRESSBAR 안보이게....
  // viewerParam.add("print.mode","print"); // 인쇄 옵션창 표시 없이 바로 출력

  // // cfOZEmbedPreview("ozFrame", "myozviewer", "/ac/fi/gnrlaccount/ledgmgnt/fi_203_01_04p.ozr", odiParam, viewerParam, formParam);
  // $c.gus.cfOZPreview("/ac/fi/gnrlaccount/ledgmgnt/fi_203_01_04p.ozr", odiParam, viewerParam, formParam);

  let data = {
    reportName: "/ac/fi/gnrlaccount/ledgmgnt/fi_203_01_04p.ozr",
    odiName: "fi_203_01_04p",
    odiParam: {
      //  sysPath        : "dbl.ac.fi.gnrlaccount.ledgmgnt",
      //  postDtSt       : ed_postDtSt.getValue().trim()
      // ,postDtEnd      : ed_postDtEnd.getValue().trim()
      // ,postAcctDeptCd : ed_postAcctDeptCd.getValue().trim()
      // ,postAcctDeptNm : ed_postAcctDeptNm.getValue().trim()
      // ,coCd           : ed_coCd.getValue().trim()
      // ,coClsCd        : scwin.txtCoClsCd.trim()
      sysPath: "dbl.ac.fi.gnrlaccount.ledgmgnt",
      postDtSt: ed_postDtSt.getValue().trim(),
      postDtEnd: ed_postDtEnd.getValue().trim(),
      postAcctDeptCd: ed_postAcctDeptCd.getValue().trim(),
      postAcctDeptNm: ed_postAcctDeptNm.getValue().trim(),
      coCd: ed_coCd.getValue().trim(),
      coClsCd: scwin.txtCoClsCd.trim()
    },
    viewerParam: {
      viewer: 100 // 배율 설정
      ,
      useprogressbar: false // 프로그레스바 쓸지 말지
      // ,mode           : "print"  // 인쇄 옵션창 표시 없이 바로 출력  (모드 쓰지말 것!!)
    },
    formParam: {}
  };
  console.log("   data [" + JSON.stringify(data) + "]");
  wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfopopup',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'',nameId:'ed_coNm',style:'',btnId:'btn_coCd',id:'udc_coCd',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'3',objTypeName:'data',maxlengthName:'50',objTypeCode:'data','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회계일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar1',refEdDt:'',edFromId:'ed_postDtSt',edToId:'ed_postDtEnd',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회계처리부서 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_postAcctDeptCd',codeId:'ed_postAcctDeptCd','ev:onblurCodeEvent':'scwin.udc_postAcctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_postAcctDeptCd_onclickEvent',id:'udc_postAcctDeptCd',maxlengthCode:'5',maxlengthName:'50',nameId:'ed_postAcctDeptNm',objTypeCode:'data',objTypeName:'data',popupID:'retrieveAcctDeptCdInfo6popup',popupTitle:'',selectID:'retrieveAcctDeptCdInfo6',style:'',validTitle:'회계처리부서',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_OzReport',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'ozFrame',class:'ozWrap'},E:[{T:1,N:'w2:iframe',A:{frameModal:'false',scopeExternal:'false',src:'/ui/cm/zz/ozreportComp.xml',style:'',id:'wfm_ozReport',processMsgFrame:'false'}}]}]}]}]}]}]})