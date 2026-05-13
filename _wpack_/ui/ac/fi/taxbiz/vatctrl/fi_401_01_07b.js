/*amd /ui/ac/fi/taxbiz/vatctrl/fi_401_01_07b.xml 40826 1dd7ad17502440768d5bde0d820601cd134500e7e2738dce5c7e079668b1cbfb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'spplyYr',name:'공급연도',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'vatQuartYyCls',name:'부가세분기구분',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptCd',name:'부가세관리귀속부서',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'vatDeclarAcctDeptNm',name:'부가세신고귀속부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자등록번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'crnNm',name:'사업자등록번호명',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'postYn',name:'회계처리여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'zeroTaxClsCd',name:'영세율구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vat',saveRemovedData:'true','ev:ondataload':'scwin.ds_vat_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'번호',dataType:'number'}},{T:1,N:'w2:column',A:{id:'recverCrn',name:'공급받는자사업자등록번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'busiNmCmpy',name:'사업자상호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'supplyAmt1',name:'공급금액(분기1개월)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'supplyAmt2',name:'공급금액(분기2개월)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'supplyAmt3',name:'공급금액(분기3개월)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'checkYn',name:'체크여부',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'suppySum',name:'합계',dataType:'number',defaultValue:'0'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.vatctrl.RetrieveValueAddedTaxZeroTaxTabulationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_vat","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_vat","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중...','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_401_01_07b
// 이름     : 부가세영세율집계표
// 경로     : 재무회계/일반회계/세무/부가세조정/
// 사용계정 : 내부
// 파라미터 :
//            IN  :
//            OUT :
//
// 비고     :
//            ▶ 그리드의 체크박스 값이 check_yn 이 "F" 로 넘어옴  (ds컬럼 속성 세팅 필요)
//
// 레포트   : fi_401_01_07p.ozr (확인원) 팝업
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

scwin.isSubCompany = false;
scwin.ed_coCd_hidVal = ""; // 회사코드 히든
scwin.ed_vatDeclarAcctDeptCd_hidVal = ""; // 부가세관리부서 히든

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

  // 공통코드 : onPageLoad 에 위치
  const codeOptions = [{
    grpCd: "FI013",
    compID: "lc_vatQuartYyCls",
    opt: {
      "range": "1,01"
    }
  } // 부가세분기구분
  , {
    grpCd: "FI008",
    compID: "lc_postYn"
  } // 가결구분
  , {
    grpCd: "FI004",
    compID: "lc_zeroTaxClsCd"
  } // 영세율
  ];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  console.log("  -- -- 회계처리여부 전체 (-1) 추가  --------------------------");
  // 회계처리여부(가결구분)은  전체가 -1.
  dlt_commonCodeFI008.insertRow(0);
  dlt_commonCodeFI008.setCellData(0, "cd", "-1");
  dlt_commonCodeFI008.setCellData(0, "cdNm", "전체");

  // 회계처리여부(가결구분)은  전체가 -1.
  // dlt_commonCodeFI008.insertRow(0);
  // dlt_commonCodeFI008.setCellData(0,"cd","-1")
  // dlt_commonCodeFI008.setCellData(0,"cdNm","전체");
  // lc_postYn.setSelectedIndex(0);

  // 인덱스 대신 value 로 초기값 지정
  // lc_postYn.index=0;  // 전체
  lc_postYn.setValue(-1);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");

  // 2025-10-14 : 작성일자 포커스 위치 이동
  $p.setTimeout(function () {
    scwin.f_OnLoad();
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// f_OnLoad
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  console.log("=== f_OnLoad (자회사 설정후 사업부 조회해야 함)");

  // cbx_printCheck.checkAll(true);
  cbx_printCheck.setValue(1); // 인쇄옵션 체크

  scwin.f_Setting();
  scwin.f_VatQuartYyCls();
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 재조회 (초기화)
//-------------------------------------------------------------------------
scwin.f_SearchClear = function () {
  $c.gus.cfInitObjects($p, searchTable);
  scwin.f_Setting();
};

//-------------------------------------------------------------------------
// 조회조건 셋팅
//-------------------------------------------------------------------------
scwin.f_Setting = function () {
  cbx_printCheck.setValue(1); // 인쇄옵션 체크

  lc_vatQuartYyCls.setSelectedIndex(0); // 부가세분기구분
  // lc_postYn.setSelectedIndex(0);          // 가결구분
  lc_zeroTaxClsCd.setSelectedIndex(0); // 영세율

  ica_spplyYr.setValue($c.date.getServerDateTime($p, "yyyy"));
  ica_spplyYr.focus();
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

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 조회(부가세영세율집계표)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("====== f_Retrieve ==================");
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_spplyYr, lc_zeroTaxClsCd]);
  if (!ret) return false;
  if (ica_spplyYr.getValue().length < 4) {
    await $c.win.alert($p, "기간은(는) 4자리수만큼 입력하십시오.");
    ica_spplyYr.focus();
    return false;
  }

  // ds_search.UseChangeInfo = false;
  // tr_search.Action="/ac.fi.taxbiz.vatctrl.RetrieveValueAddedTaxZeroTaxTabulationCMD.do";
  // tr_search.post();

  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회(부가세영세율집계표) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = function (e) {
  console.log("▷▷ sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // language=JavaScript for=ds_vat event=OnLoadCompleted(rowCnt)>
  var temp = ds_vat.getRowCount();
  ed_totalRows.setValue(temp);
  if (temp == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {}

  // gr_vat.ColumnProp('checkYn','HeadCheck')="false";
  gr_vat.setHeaderValue("headCheck", false); // 그리드 헤더 체크 풀기
  // gr_vat.setCellChecked(false);  // 전체 체크박스 해제
};

// @@ ====== 그리드 / DS ======================================================================= //

//-------------------------------------------------------------------------
// 데이타셋 정렬 및 번호(num) 지정
//-------------------------------------------------------------------------
scwin.ds_vat_ondataload = function () {
  console.log("----- ds_vat_ondataload");
  // <!-- 부가세목록 DataSet -->
  // <object id="ds_vat" classid="<%=DGauceCLSID.DATASET%>">
  // 	<param name=SortExpr          value="+busiNmCmpy">
  ds_vat.sort("busiNmCmpy", 0);

  // 번호 컬럼 지정
  var li_newRow = 0;
  for (i = 0; i < ds_vat.getTotalRow(); i++) {
    li_newRow = i + 1;
    ds_vat.setCellData(i, "num", li_newRow);
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
// 부가세관리부서코드 focus out
//-------------------------------------------------------------------------
scwin.udc_vatDeclarAcctDeptCd_onblurCodeEvent = function (e) {
  console.log("----- * 부가세관리 focus out : ed_vatDeclarAcctDeptCd_hidVal [" + scwin.ed_vatDeclarAcctDeptCd_hidVal + " ]");
  // language=JavaScript for=ed_vatDeclarAcctDeptCd event=OnKillFocus()>
  if (ed_vatDeclarAcctDeptCd.getValue().trim() == scwin.ed_vatDeclarAcctDeptCd_hidVal)
    // if (ed_vatDeclarAcctDeptCd.getValue().trim() != "")
    return;

  // console.log("  ed_vatDeclarCrn clear");
  ed_vatDeclarAcctDeptNm.setValue("");
  ed_vatDeclarCrn.setValue("");
  scwin.ed_vatDeclarAcctDeptCd_hidVal = "";
  if (ed_vatDeclarAcctDeptCd.getValue().trim() != "") scwin.f_openPopUp('', 'T');
};

//-------------------------------------------------------------------------
// 증빙일자 focus out
//-------------------------------------------------------------------------
scwin.ica_spplyYr_onblur = function (e) {
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

//-------------------------------------------------------------------------
// 부가세분기구분 변경
//-------------------------------------------------------------------------
scwin.lc_vatQuartYyCls_onchange = function (info) {
  // <!-- 기간변경시 LuxeCombo -->
  // language=JavaScript for=lc_vatQuartYyCls event=OnSelChange2()>
  scwin.f_VatQuartYyCls();
};

//-------------------------------------------------------------------------
// 기간 변경시 : 부가세분기구분코드에 따라
//-------------------------------------------------------------------------
scwin.f_VatQuartYyCls = function () {
  var imsi_date = "";
  if (lc_vatQuartYyCls.getValue() == "1") {
    imsi_date = "0101";
  } else if (lc_vatQuartYyCls.getValue() == "2") {
    imsi_date = "0401";
  } else if (lc_vatQuartYyCls.getValue() == "3") {
    imsi_date = "0701";
  } else if (lc_vatQuartYyCls.getValue() == "4") {
    imsi_date = "1001";
  }
  imsi_date = ica_spplyYr.getValue().trim() + imsi_date;

  // gr_vat.ColumnProp('supplyAmt1', 'Name') = imsi_date.toDate().after(0,0,0).format("MM월");
  // gr_vat.ColumnProp('supplyAmt2', 'Name') = imsi_date.toDate().after(0,1,0).format("MM월");
  // gr_vat.ColumnProp('supplyAmt3', 'Name') = imsi_date.toDate().after(0,2,0).format("MM월");

  var title1 = imsi_date.toDate().after(0, 0, 0).format("MM월");
  var title2 = imsi_date.toDate().after(0, 1, 0).format("MM월");
  var title3 = imsi_date.toDate().after(0, 2, 0).format("MM월");
  gr_vat.setHeaderValue("supplyMonth1", title1);
  gr_vat.setHeaderValue("supplyMonth2", title2);
  gr_vat.setHeaderValue("supplyMonth3", title3);
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
// 부가세신고부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_vatDeclarAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('', 'F');
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ]   '':부가세신고부서");

  // var rtnList = new Array();
  // 부가세신고부서조회
  var param = ",,," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + "," + ica_spplyYr.getValue().substring(0, 4);
  console.log("  부가세신고부서 popup  param [" + param + "]");

  // rtnList = cfCommonPopUp('retrieveVatDeclarAcctDeptCd',ed_vatDeclarAcctDeptCd.text.trim(),txt_vatDeclarAcctDeptNm.value,check,null,null,null,null,param,null,null,null,null);
  udc_vatDeclarAcctDeptCd.cfCommonPopUp(scwin.udc_vatDeclarAcctDeptCd_callBackFunc, ed_vatDeclarAcctDeptCd.getValue().trim(), ed_vatDeclarAcctDeptNm.getValue(), check, null, null, null, null, param, 1000, 520, null, null);
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
    scwin.isStarted = false; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)
  }
};

//-------------------------------------------------------------------------
// 부가세관리부서 초기화
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
  udc_vatDeclarAcctDeptCd;
  // KYU_TEST
  scwin.f_resultPopEd(ed_vatDeclarAcctDeptCd, ed_vatDeclarAcctDeptNm, rtnList, '1');
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
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

//-------------------------------------------------------------------------
// 팝업결과
//  flag : 신규 추가. 어떤 팝업을 호출했는지 구분
//  1:부가세관리부서
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)   flag [" + flag + "]  1:부가세관리부서)");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // KYU_NEW : 2026-01-30 아무값도 안왔을 때 처리
      scwin.f_initObj();
      return;
    }

    // strCd.Text = rtnList[0];    // 코드
    // strNm.value = rtnList[1];   // 명
    // strCd.hidVal = rtnList[0];  // 히든값

    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_vatDeclarAcctDeptCd_hidVal = rtnList[0];
        break;
      // 부가세관리부서
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
        scwin.ed_vatDeclarAcctDeptCd_hidVal = "";
        break;
      // 부가세관리부서
      default:
        break;
    }
  }
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  // var objGridName = eval("gr_vat");
  // if (cfConfirmMsg("Excel로 다운로드 하시겠습니까?")) {
  // 	cfGridToExcel(objGridName, "부가세영세율집계표","부가세영세율집계표.xls",8+16);
  // }

  if (ds_vat.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  var sheetTitle = '부가세영세율집계표';
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    let options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle
    };
    $c.data.downloadGridViewExcel($p, gr_vat, options);
  }
};

// @@ ====== 레포트 ============================================================================ //

//-------------------------------------------------------------------------
//  openPopup 팝업 오픈
//-------------------------------------------------------------------------
scwin.openPopup = async function (data, width, height) {
  if (width == null || width == "") width = 700;
  if (height == null || height == "") height = 950;
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: width,
    height: height,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// 확인원 발행
//-------------------------------------------------------------------------
scwin.f_OzReport = async function (e) {
  console.log("=== f_OzReport (확인원 발행)");

  // if(ds_vat.isUpdated==false){
  var delChk = ds_vat.getMatchedIndex("checkYn", "T", true);
  if (delChk.length == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_056, "데이타"));
    return;
  }
  var param = "";
  var ds_vat_length = "";
  for (i = 0; i < ds_vat.getTotalRow(); i++) {
    // if(ds_vat.RowStatus(i)==3 && ds_vat.NameValue(i,"checkYn")=="T"){  //  0: Normal, 1: Insert, 2: Delete, 3: Update, 4: Logical
    if (ds_vat.getRowStatus(i) == "U" && ds_vat.getCellData(i, "checkYn") == "T") {
      // R:초기상태, U:갱신, C:삽입, D:삭제, V:삽입 후 삭제
      ds_vat_length = ds_vat.getCellData(i, "recverCrn");
      if (ds_vat_length.length == 10) {
        param = param + ds_vat.getCellData(i, "recverCrn") + "   ";
      } else {
        param = param + ds_vat.getCellData(i, "recverCrn");
      }
    }
  }
  // var odiParam = new ODIParam("fi_401_01_07p");

  // odiParam.add("recverCrn"   , param.substring(0));
  // odiParam.add("zeroTaxClsCd", lc_zeroTaxClsCd.getValue().trim());   // 영세율
  // odiParam.add("postYn"      , lc_postYn.getValue().trim());         // 가결구분
  // odiParam.add("vatDeclarAcctDeptCd", ed_vatDeclarAcctDeptCd.getValue().trim());  // 부가세신고부서
  // odiParam.add("spplyYr"            , ica_spplyYr.getValue().trim());  // 기간
  // odiParam.add("coCd"               , ed_coCd.getValue());
  // odiParam.add("coClsCd"            , scwin.txtCoClsCd.trim());
  // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // var formParam = new FormParam();
  // //formParam.add("form1","폼1");
  // // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // var viewerParam = new ViewerParam();
  // viewerParam.add("viewer.zoom","100");
  // viewerParam.add("viewer.useprogressbar","false");		//PROGRESSBAR 안보이게....

  // cfOZReport("chb_printCheck", "chb_previewCheck", "/ac/fi/taxbiz/vatctrl/fi_401_01_07p.ozr", odiParam, viewerParam, formParam);

  let data = {
    odiName: "fi_401_01_07p",
    reportName: "/ac/fi/taxbiz/vatctrl/fi_401_01_07p.ozr",
    odiParam: {
      //  sysPath             : "dbl.ac.fi.taxbiz.withhold"
      recverCrn: param.substring(0),
      zeroTaxClsCd: lc_zeroTaxClsCd.getValue().trim(),
      postYn: lc_postYn.getValue().trim(),
      vatDeclarAcctDeptCd: ed_vatDeclarAcctDeptCd.getValue().trim(),
      spplyYr: ica_spplyYr.getValue().trim(),
      coCd: ed_coCd.getValue(),
      coClsCd: scwin.txtCoClsCd.trim()
    },
    viewerParam: {
      viewer: 100 // 배율 설정
      ,
      useprogressbar: true // 프로그레스바 쓸지 말지
      // ,mode           : "print"  // 인쇄 옵션창 표시 없이 바로 출력
    },
    formParam: {}
  };

  // 미리보기 체크인
  if (cbx_previewCheck.getValue() == "1") {
    console.log("  확인원발행 - 미리보기 data [" + JSON.stringify(data) + "]");

    // wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
    scwin.openPopup(data);
  } else if (cbx_printCheck.getValue() == "1")
    // 인쇄옵션 체크
    {
      let opts = {
        type: 'print',
        // viewer, print, download
        printMode: 'view' // silent, view
      };

      // 인쇄옵션
      $c.ext.printOzReport($p, data, opts);
    } else
    // 미리보기, 인쇄옵션 둘 다 체크아웃 - pdf 다운로드
    {
      let opts = {
        filename: 'fi_401_01_07p',
        exportMode: 'view'
      };
      $c.ext.downloadOzReport($p, data, opts);
    }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'searchTable',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:60.00px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:60.00px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:60.00px;'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfopopup',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',validTitle:'회사코드',nameId:'ed_coNm',style:'',id:'udc_coCd',btnId:'btn_coCd','ev:onclickEvent':'scwin.udc_coCd_onclickEvent',allowCharCode:'0-9',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',refDataCollection:'ds_search',code:'coCd','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세신고부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_vatDeclarAcctDeptCd',selectID:'retrieveVatDeclarAcctDeptCd',popupID:'retrieveVatDeclarAcctDeptCdpopup',validTitle:'부가세신고부서',nameId:'ed_vatDeclarAcctDeptNm',style:'',btnId:'btn_vatDeclarAcctDeptCd',id:'udc_vatDeclarAcctDeptCd',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',objTypeName:'data',maxlengthName:'50','ev:onclickEvent':'scwin.udc_vatDeclarAcctDeptCd_onclickEvent',code:'vatDeclarAcctDeptCd',name:'vatDeclarAcctDeptNm',refDataCollection:'ds_search','ev:onblurCodeEvent':'scwin.udc_vatDeclarAcctDeptCd_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N'}},{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_vatDeclarCrn',class:'',objType:'data',ref:'data:ds_search.crn',title:'부가세신고사업자번호',allowChar:'0-9'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:set'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'','ev:onblur':'scwin.ica_spplyYr_onblur',id:'ica_spplyYr',mandatory:'true',ref:'data:ds_search.spplyYr',style:'width: 60px;',allowChar:'0-9',title:'기간',maxlength:'4'}},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled','ev:onchange':'scwin.lc_vatQuartYyCls_onchange',id:'lc_vatQuartYyCls',ref:'data:ds_search.vatQuartYyCls',style:'width: 100px;',submenuSize:'fixed',title:'부가세분기구분코드'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'가결구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',chooseOptionLabel:'-1',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_postYn',ref:'data:ds_search.postYn',style:'width: 100px;',submenuSize:'fixed',title:'가결구분'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'영세율 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_zeroTaxClsCd',ref:'data:ds_search.zeroTaxClsCd',style:'width: 100px;',submenuSize:'fixed',title:'영세율구분'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_SearchClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_Excel',gridID:'gr_vat',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_vat',focusMode:'cell',id:'gr_vat',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'headCheck',value:'',displayMode:'label',fixColumnWidth:'true',checkboxLabel:' '}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column62',value:' ',displayMode:'label',fixColumnWidth:'true',hidden:'false',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'사업자명',width:'400'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supplyMonth1',inputType:'text',style:'',value:'01월',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supplyMonth2',inputType:'text',style:'',value:'02월',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supplyMonth3',inputType:'text',style:'',value:'03월',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'합계',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'checkYn',value:'',displayMode:'label',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'num',value:'',displayMode:'label',readOnly:'true',dataType:'number',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNmCmpy',inputType:'text',style:'',value:'',width:'400',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supplyAmt1',inputType:'text',style:'',value:'',width:'200',dataType:'number',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supplyAmt2',inputType:'text',style:'',value:'',width:'200',dataType:'number',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supplyAmt3',inputType:'text',style:'',value:'',width:'200',dataType:'number',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supplySum',inputType:'expression',style:'',value:'',width:'200',dataType:'number',textAlign:'right',displayFormat:'#,##0',expression:'Number(display(\'supplyAmt1\')) + Number(display(\'supplyAmt2\')) + Number(display(\'supplyAmt3\'))',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column69',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'400',inputType:'text',style:'',id:'column68',value:'총계',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',style:'',id:'column67',value:'',displayMode:'label',dataType:'number',expression:'sum(\'supplyAmt1\')',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',style:'',id:'column66',value:'',displayMode:'label',dataType:'number',expression:'sum(\'supplyAmt2\')',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',style:'',id:'column65',value:'',displayMode:'label',dataType:'number',expression:'sum(\'supplyAmt3\')',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',style:'',id:'column64',value:'',displayMode:'label',dataType:'number',expression:'sum(\'supplySum\')',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_printCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_ozprint',style:'',type:'button','ev:onclick':'scwin.f_OzReport',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인원발행'}]}]}]}]}]}]}]}]}]})