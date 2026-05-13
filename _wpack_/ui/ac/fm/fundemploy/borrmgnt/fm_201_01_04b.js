/*amd /ui/ac/fm/fundemploy/borrmgnt/fm_201_01_04b.xml 50373 910f45be3ab0f317d935b0fe6605b640e41c8a81f98eae4148fa6584ae2c8eb2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'borrLedgNo',name:'차입원장번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'borrKndCd',name:'차입종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'borrClntNo',name:'차입거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rpayclscd',name:'상환구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_draftCheckCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'draftStsCd',name:'상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftCheckClsCd',name:'01:실물어음,03:당좌수표',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_draftCheck',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'지급수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDd',name:'어음일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'요청금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'발생전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctCd',name:'발생계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'발생계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'발생적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'발생귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'발생귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankCd',name:'지급은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'지급계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnEmpNo',name:'확정사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'지급전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'지급환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'지급금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'결제원금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'지급통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueSlipNo',name:'만기전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addupDivsCd',name:'합산분할코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refPayNo',name:'참조지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firmBankYn',name:'펌뱅킹여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckAmt',name:'어음수표금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtDt',name:'발행일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'writeDt',name:'e새로작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'납기일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueBankCd',name:'발급은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'증빙개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt2',name:'회계처리일자2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId2',name:'등록자ID2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm2',name:'등록자명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errYn',name:'오류여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_draftBorr',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_draftBorr_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'borrKndCd',name:'차입종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrLedgNo',name:'차입원장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrClntNo',name:'차입거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrDt',name:'차입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrAmt',name:'차입금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'borrRamt',name:'차입잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'intRt',name:'금리',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'intAmt',name:'이자금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'intPayMthdCd',name:'이자지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftNo',name:'어음번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptBankbookNo',name:'입금통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'은행계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'borrSlipNo',name:'차입전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ddCntCd',name:'일수코드',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_deleteDraftBorrCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNumber',name:'차입전표번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDraftCheck',action:'/ac.fm.paymgnt.notepay.RetrieveDraftCheckContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_draftCheckCondition","key":"IN_DS1"},{"id":"ds_draftCheck","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_draftCheck","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDraftCheck_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDraftBorr',action:'/ac.fm.fundemploy.borrmgnt.RetrieveDraftBorrowingListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_draftBorr","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_draftBorr","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDraftBorr_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_createDraftBorr',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_draftBorr","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_createDraftBorr_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteDraftBorr',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_deleteDraftBorrCondition","key":"OUT_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_deleteDraftBorr_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.NEW = "01"; // 신규
scwin.PREPARESTS = "00"; // 준비
scwin.RESERVESTS = "10"; // 보류
scwin.WAITSTS = "20"; // 대기
scwin.DECIDESTS = "30"; // 결정
scwin.DECISIONSTS = "40"; // 확정
scwin.COMPLETE = "50"; // 완료

scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.pos_groupCode = "";
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FM047",
    compID: "lc_intPayMthdCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableObjects($p, [btn_srchBorrClntNo, btn_borrClntNo, btn_acctDeptCd, btn_rcptBankbookNo, ed_borrDt, img_dueDt]);
  $c.gus.cfDisableObjects($p, [ed_txt_bankAcntNo, ed_txt_borrClntNm, ed_ddCntCd, ed_txt_acctDeptNm]);
  $p.setTimeout(function () {
    ed_txt_draftNo.focus();
  }, {
    "delay": 50
  });
  lc_intPayMthdCd.setSelectedIndex(0);
  $c.gus.cfDisableKeyData($p);
  ed_stDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_endDt.setValue(scwin.g_sCurrDate);
  $c.gus.cfDisableObjects($p, [btn_borrClntNo, btn_acctDeptCd, btn_rcptBankbookNo, ed_ddCntCd, img_dueDt, btn_AutoCreate]);
  $c.gus.cfDisableObjects($p, [btn_Update, btn_Save, btn_Delete, btn_AutoCreate]);
  $p.setTimeout(function () {
    ed_srchBorrClntNo.focus();
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    if (!$c.gus.cfIsAfterDate($p, ds_condition.get("stDt"), ds_condition.get("endDt"))) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
      return false;
    }
    ds_draftBorr.removeAll();
    ds_condition.set("borrKndCd", "05");
    $c.sbm.execute($p, sbm_retrieveDraftBorr);
  } catch (e) {
    console.log("f_Retrieve :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieveDraftBorr_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_draftBorr.getRowCount()));
    if (ds_draftBorr.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    } else {
      ds_draftBorr.sort("borrLedgNo", 0); //SortExpr borrLedgNo
      scwin.gr_draftBorr_onrowindexchange(scwin.pos_groupCode); //ds_draftBorr.setRowPosition(0);
      $c.gus.cfGoPrevPosition($p, gr_draftBorr, scwin.pos_groupCode);
    }
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfEnableObjects($p, [btn_New, btn_Update, btn_Delete]);
    $c.gus.cfDisableObjects($p, [btn_Save, btn_AutoCreate]);
  } catch (e) {
    console.log("sbm_retrieveDraftBorr_submitdone " + e);
  }
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, table1, [ed_stDt, ed_endDt]);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  ed_stDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd").substring(0, 6) + "01");
  ed_endDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openSlipNo = function (e) {
  let sSlipNo = ed_txt_borrSlipNo.getValue();
  // 전표 POPUP
  if (!(sSlipNo == null || sSlipNo == "")) $c.gus.cfShowSlipInfo($p, sSlipNo);
};

//-------------------------------------------------------------------------
// 수표번호 자동생성
//-------------------------------------------------------------------------
scwin.f_AutoCreate = function () {
  //TODO 구조변경으로 콜백함수에서 처리
  scwin.f_DraftCheck_Retrieve();
};

//-------------------------------------------------------------------------
// 어음수표번호 조회
//-------------------------------------------------------------------------
scwin.f_DraftCheck_Retrieve = async function () {
  try {
    ds_draftCheckCondition.set("draftStsCd", scwin.NEW);
    ds_draftCheckCondition.set("draftCheckClsCd", "01");
    $c.sbm.execute($p, sbm_retrieveDraftCheck);
  } catch (e) {
    console.log("f_DraftCheck_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 수표번호 자동생성 콜백(ASIS f_AutoCreate())
//-------------------------------------------------------------------------
scwin.sbm_retrieveDraftCheck_submitdone = async function (e) {
  try {
    let i = 0;
    let cnt = 0;
    if (ds_draftCheck.getRowCount() == 0) {
      await $c.win.alert($p, "실물어음이 존재하지 않습니다");
      return false;
    }
    for (i = 0; i < ds_draftCheck.getRowCount(); i++) {
      ds_draftBorr.setCellData(ds_draftBorr.getRowPosition(), "draftNo", ds_draftCheck.getCellData(i, "draftCheckNo"));
      break;
    }
  } catch (e) {
    console.log("sbm_retrieveDraftCheck_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 차입기관(조회)
//-------------------------------------------------------------------------
scwin.udc_srchBorrClntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_srchBorrClntNo, ed_txt_srchBorrClntNm, '11');
};

//-------------------------------------------------------------------------
// 차입기관찾기(조회)
//-------------------------------------------------------------------------
scwin.udc_srchBorrClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('11', ed_srchBorrClntNo, ed_txt_srchBorrClntNm, 'F');
};

//-------------------------------------------------------------------------
// 차입기관
//-------------------------------------------------------------------------
scwin.udc_borrClntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_borrClntNo, ed_txt_borrClntNm, '1');
};

//-------------------------------------------------------------------------
// 차입기관찾기
//-------------------------------------------------------------------------
scwin.udc_borrClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_borrClntNo, ed_txt_borrClntNm, 'F');
};

//-------------------------------------------------------------------------
// 부서
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_txt_acctDeptNm, '3');
};

//-------------------------------------------------------------------------
// 부서찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_acctDeptCd, ed_txt_acctDeptNm, 'F');
};

//-------------------------------------------------------------------------
// 입금계좌
//-------------------------------------------------------------------------
scwin.udc_rcptBankbook_onblurCodeEvent = function (e) {
  scwin.f_CheckBankBookPopUp(ed_rcptBankbookNo, ed_txt_bankAcntNo);
};

//-------------------------------------------------------------------------
// 입금계좌찾기
//-------------------------------------------------------------------------
scwin.udc_rcptBankbook_onclickEvent = function (e) {
  scwin.f_BankBookPopUp('F');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckBankBookPopUp = function (orgObjCd, orgObjNm) {
  try {
    if (orgObjCd.getValue() != orgObjCd.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_BankBookPopUp("T");
    } else {
      orgObjCd.setValue("");
      orgObjCd.hidVal = "";
    }
  } catch (e) {
    console.log("f_CheckBankBookPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 출금 통장조회 POPUP호출.
//-------------------------------------------------------------------------
scwin.f_BankBookPopUp = function (sFlag) {
  try {
    let i_bankbookno = ed_rcptBankbookNo.getValue();
    i_bankbookno = i_bankbookno.trim();

    //rtnList = cfCommonPopUp('retrieveBankBookCdInfo',i_bankbookno,'',sFlag,null,null,null,null,null,null,null,null,null); // 거래처
    udc_rcptBankbook.setSelectId('retrieveBankBookCdInfo');
    udc_rcptBankbook.cfCommonPopUp(scwin.udc_rcptBankbook_callBackFunc // 콜백 함수
    , i_bankbookno // 화면에서의 ??? Code Element의 Value
    , '' // 화면에서의 ??? Name Element의 Value
    , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
    , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서
    , null // 보여주는 각 컬럼들의 폭
    , null // 컬럼중에서 숨기는 컬럼 지정
    , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의 사용자 정의 폭
    , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
    , null // 윈도우 위치 Y좌표
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , null // 전체검색허용여부	("F")
    , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
    );
  } catch (e) {
    console.log("f_BankBookPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 입금계좌 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_rcptBankbook_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      ed_rcptBankbookNo.setValue(rtnList[0]); //통장번호
      ed_txt_bankAcntNo.setValue(rtnList[4]); // 계좌번호
      ed_rcptBankbookNo.hidVal = rtnList[0];
    } else {
      ed_rcptBankbookNo.setValue(""); //통장번호
      ed_txt_bankAcntNo.setValue(""); // 계좌번호
      ed_rcptBankbookNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_rcptBankbook_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  try {
    if (orgObjCd.getValue() != orgObjCd.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!(orgObjNm == null)) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
      orgObjCd.hidVal = "";
    }
  } catch (e) {
    console.log("f_CheckPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sPopupCls) {
  try {
    let code = txtCode.getValue();
    let name = "";
    if (txtName == null) {
      name = "";
    } else {
      name = txtName.getValue();
    }
    switch (select_code) {
      // 차입기관 PopUp 호출
      case '1':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sPopupCls,null,null,null,null,null,null,null,null,null); // 차입기관
        udc_borrClntNo.setSelectId('retrieveBorrowingInst');
        udc_borrClntNo.cfCommonPopUp(scwin.udc_borrClntNo_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sPopupCls // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 차입기관 PopUp 호출(조회)
      case '11':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sPopupCls,null,null,null,null,null,null,null,null,null); // 차입기관
        udc_srchBorrClntNo.setSelectId('retrieveBorrowingInst');
        udc_srchBorrClntNo.cfCommonPopUp(scwin.udc_srchBorrClntNo_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sPopupCls // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case '3':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sPopupCls,null,null,null,null,null,null,null,null,null,null,null,null,null); // 관리부서
        udc_acctDeptCd.setSelectId('retrieveAcctDeptCdInfo');
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sPopupCls // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 차입기관 팝업 콜백(1) 조회
//-------------------------------------------------------------------------
scwin.udc_srchBorrClntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_srchBorrClntNo.setValue(rtnList[0]); // 코드
      ed_txt_srchBorrClntNm.setValue(rtnList[1]); // 코드명
      ed_srchBorrClntNo.hidVal = rtnList[0]; // HIDDEN 코드값
    } else {
      ed_srchBorrClntNo.setValue("");
      ed_txt_srchBorrClntNm.setValue("");
      ed_srchBorrClntNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_srchBorrClntNo_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 차입기관 팝업 콜백(2) 입력
//-------------------------------------------------------------------------
scwin.udc_borrClntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_borrClntNo.setValue(rtnList[0]); // 코드
      ed_txt_borrClntNm.setValue(rtnList[1]); // 코드명
      ed_borrClntNo.hidVal = rtnList[0]; // HIDDEN 코드값
    } else {
      ed_borrClntNo.setValue("");
      ed_txt_borrClntNm.setValue("");
      ed_borrClntNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_borrClntNo_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 부서 팝업 콜백(3) 입력
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_acctDeptCd.setValue(rtnList[0]); // 코드
      ed_txt_acctDeptNm.setValue(rtnList[1]); // 코드명
      ed_acctDeptCd.hidVal = rtnList[0]; // HIDDEN 코드값
    } else {
      ed_acctDeptCd.setValue("");
      ed_txt_acctDeptNm.setValue("");
      ed_acctDeptCd.hidVal = "";
    }
  } catch (e) {
    console.log("udc_acctDeptCd_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 신규입력
//-------------------------------------------------------------------------
scwin.f_addRow = function () {
  try {
    let row = $c.data.insertRow($p, $p.getComponentById("gr_draftBorr"));
    ds_draftBorr.setRowPosition(row);
    $c.gus.cfGoPrevPosition($p, gr_draftBorr, row);
    ds_draftBorr.setCellData(row, "borrKndCd", "05");
    ed_stDt.setValue("");
    ed_endDt.setValue("");
    $c.gus.cfEnableKeyData($p);
    $c.gus.cfEnableObjects($p, [btn_borrClntNo, btn_acctDeptCd, btn_rcptBankbookNo, ed_borrDt, img_dueDt, btn_AutoCreate]);
    $c.gus.cfDisableObjects($p, [ed_txt_bankAcntNo, ed_txt_borrClntNm, ed_ddCntCd, ed_txt_acctDeptNm]);
    $c.gus.cfDisableObjects($p, [btn_New, btn_Update, btn_Delete]);
    $c.gus.cfEnableObjects($p, [btn_Save, btn_AutoCreate]);
    $p.setTimeout(function () {
      ed_txt_draftNo.focus();
    }, {
      "delay": 50
    });
    lc_intPayMthdCd.setSelectedIndex(0);
  } catch (e) {
    console.log("f_addRow : " + e);
  }
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  try {
    if (ds_draftBorr.getRowCount() <= 0) {
      $c.win.alert($p, MSG_CM_ERR_003);
      return false;
    }
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableObjects($p, [btn_borrClntNo, btn_acctDeptCd, btn_rcptBankbookNo, ed_ddCntCd, ed_intRt, ed_intAmt, ed_borrDt, img_dueDt, ed_txt_acctDeptNm]);
    $c.gus.cfEnableObjects($p, [lc_intPayMthdCd]);
    $c.gus.cfDisableObjects($p, [btn_New, btn_Update, btn_Delete, btn_AutoCreate]);
    $c.gus.cfEnableObjects($p, [btn_Save]);
  } catch (e) {
    console.log("f_Update : " + e);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  try {
    if (ds_draftBorr.getModifiedIndex().length == 0) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "자료"));
      return false;
    }
    let ret = await $c.gus.cfValidate($p, [ed_txt_draftNo, ed_borrClntNo, ed_borrDt, ed_borrAmt]);
    if (!ret) {
      return false;
    }
    for (i = 0; i < ds_draftBorr.getRowCount(); i++) {
      if (ds_draftBorr.getRowStatus(i) == "C") {
        if (ds_draftBorr.getCellData(i, "borrAmt") == "0") {
          ds_draftBorr.setRowPosition(i);
          await $c.gus.cfAlertMsg($p, "금액은(는) 1 이상으로 입력하십시오.");
          ed_borrAmt.focus();
          return false;
        }
      }
    }
    let ret2 = await $c.gus.cfValidate($p, [ed_rcptBankbookNo, ed_acctDeptCd, ed_rcptBankbookNo]);
    if (!ret2) {
      return false;
    } else {
      if (!$c.gus.cfIsAfterDate($p, ed_stDt.getValue(), ed_endDt.getValue())) {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
        return false;
      }
      if (ds_draftBorr.getRowStatus(ds_draftBorr.getRowPosition()) == "C") {
        sbm_createDraftBorr.action = "/ac.fm.fundemploy.borrmgnt.ProcessDraftBorrowingRegistCMD.do";
      } else {
        sbm_createDraftBorr.action = "/ac.fm.fundemploy.borrmgnt.UpdateDraftBorrowingCMD.do";
      }
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        scwin.pos_groupCode = ds_draftBorr.getRowPosition();
        $c.sbm.execute($p, sbm_createDraftBorr);
      }
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};

//-------------------------------------------------------------------------
// 저장콜백
//------------------------------------------------------------------------
scwin.sbm_createDraftBorr_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfEnableObjects($p, [btn_New, btn_Update, btn_Save, btn_Delete]);
  } catch (e) {
    console.log("sbm_createDraftBorr_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  try {
    let sSlipNo = "";
    if (ds_draftBorr.getRowCount() <= 0) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_004, "자료"));
      return false;
    } else {
      let ret = await $c.gus.cfValidate($p, [gr_draftBorr]);
      if (!ret) {
        return false;
      }
      if (await $c.win.confirm($p, MSG_CM_CRM_004)) {
        sSlipNo = ds_draftBorr.getCellData(ds_draftBorr.getRowPosition(), "borrSlipNo");
        ds_deleteDraftBorrCondition.set("slipNumber", sSlipNo);
        ds_draftBorr.deleteRows(ds_draftBorr.getRowPosition());
        sbm_deleteDraftBorr.action = "/ac.fm.fundemploy.borrmgnt.ProcessDraftBorrowingDeleteCMD.do";
        $c.sbm.execute($p, sbm_deleteDraftBorr);
      }
    }
  } catch (e) {
    console.log("f_Delete : " + e);
  }
};

//-------------------------------------------------------------------------
// 삭제콜백
//------------------------------------------------------------------------
scwin.sbm_deleteDraftBorr_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
    scwin.pos_groupCode = 0;
    scwin.f_Retrieve();
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfEnableObjects($p, [btn_New, btn_Update, btn_Delete]);
    $c.gus.cfDisableObjects($p, [btn_Save]);
  } catch (e) {
    console.log("sbm_deleteDraftBorr_submitdone : " + e);
  }
};
scwin.ds_draftBorr_oncelldatachange = function (info) {
  try {
    let colid = info.colID;
    let row = info.rowIndex;
    if (colid == "stDt" || colid == "endDt") {
      if (!(ds_draftBorr.getCellData(row, "stDt") == null || ds_draftBorr.getCellData(row, "stDt") == "" || ds_draftBorr.getCellData(row, "endDt") == null || ds_draftBorr.getCellData(row, "endDt") == "")) {
        if (ds_draftBorr.getCellData(row, "stDt").trimAll().length == 8 && ds_draftBorr.getCellData(row, "endDt").trimAll().length == 8) {
          ds_draftBorr.setCellData(row, "ddCntCd", $c.date.diffDate($p, ds_draftBorr.getCellData(row, "stDt").trimAll(), ds_draftBorr.getCellData(row, "endDt").trimAll()) + 1);
        }
      } else {
        ds_draftBorr.setCellData(row, "ddCntCd", 0);
      }
    } else if (colid == "borrAmt" || colid == "intRt") {
      ds_draftBorr.setCellData(row, "intAmt", Math.floor(0.01 * ds_draftBorr.getCellData(row, "borrAmt") * ds_draftBorr.getCellData(row, "intRt") * ds_draftBorr.getCellData(row, "ddCntCd") / 365));
    }
  } catch (e) {
    console.log("ds_draftBorr_oncelldatachange : " + e);
  }
};
scwin.gr_draftBorr_onrowindexchange = function (rowIndex, oldRow) {
  if (ds_draftBorr.getRowStatus(rowIndex) == "R") {
    $c.gus.cfDisableKeyData($p);
  } else if (ds_draftBorr.getRowStatus(rowIndex) == "C") {
    $c.gus.cfEnableKeyData($p);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'table1',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차입기관 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_srchBorrClntNo',nameId:'ed_txt_srchBorrClntNm',maxlengthCode:'6',allowCharCode:'0-9',code:'borrClntNo',refDataCollection:'ds_condition',selectID:'retrieveBorrowingInst',id:'udc_srchBorrClntNo',validTitle:'청구(수금)부서',mandatoryCode:'true',btnId:'btn_srchBorrClntNo','ev:onblurCodeEvent':'scwin.udc_srchBorrClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_srchBorrClntNo_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차입일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_condition',refEdDt:'endDt',refStDt:'stDt',style:'',edFromId:'ed_srchStDt',edToId:'ed_srchEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_draftBorr',focusMode:'row',id:'gr_draftBorr',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'17',visibleRowNumFix:'true',readOnly:'true',resize:'true',columnMove:'true','ev:onrowindexchange':'scwin.gr_draftBorr_onrowindexchange',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'차입번호',width:'90',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'어음번호',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'차입일자',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'만기일자',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'금액',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'지급이자',width:'100',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'borrLedgNo',inputType:'text',removeBorderStyle:'false',width:'90',textAlign:'center'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'draftNo',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'borrDt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'dueDt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'borrAmt',inputType:'text',textAlign:'right',width:'100',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'intAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'어음번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_txt_draftNo',class:'',objType:'data',mandatory:'true',ref:'data:ds_draftBorr.draftNo',title:'어음번호'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_AutoCreate',type:'button',class:'btn',objType:'data','ev:onclick':'scwin.f_AutoCreate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'어음수표번호자동채번'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차입기관',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_borrClntNo',nameId:'ed_txt_borrClntNm',maxlengthCode:'6',allowCharCode:'0-9',code:'borrClntNo',name:'clntNm',refDataCollection:'ds_draftBorr',selectID:'retrieveBorrowingInst',id:'udc_borrClntNo',validTitle:'차입기관',mandatoryCode:'true',btnId:'btn_borrClntNo',objTypeName:'data',objTypeCode:'data','ev:onblurCodeEvent':'scwin.udc_borrClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_borrClntNo_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_acctDeptCd',nameId:'ed_txt_acctDeptNm',maxlengthCode:'5',allowCharCode:'0-9',code:'acctDeptCd',name:'acctDeptNm',refDataCollection:'ds_draftBorr',selectID:'retrieveAcctDeptCdInfo',id:'udc_acctDeptCd',validTitle:'부서',mandatoryCode:'true',btnId:'btn_acctDeptCd',objTypeName:'data',objTypeCode:'data','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차입일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ed_borrDt',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM/dd',ref:'data:ds_draftBorr.borrDt',title:'차입일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이자기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'form-group',class:'form-group'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'stDt',objTypeTo:'data',refDataMap:'ds_draftBorr',edFromId:'ed_stDt',edToId:'ed_endDt',style:'',objTypeFrom:'data',id:'img_dueDt',refEdDt:'endDt'}},{T:1,N:'xf:input',A:{ref:'data:ds_draftBorr.ddCntCd',maxlength:'3',dataType:'number',displayFormat:'#,##0',style:'width:50px;',id:'ed_ddCntCd',placeholder:'',allowChar:'0-9',class:'tar',objType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_borrAmt',style:'width: 150px;',objType:'data',mandatory:'true',allowChar:'0-9',maxlength:'18',dataType:'number',displayFormat:'#,##0',ref:'data:ds_draftBorr.borrAmt',title:'금액'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'금리종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',objType:'data',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_intPayMthdCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_draftBorr.intPayMthdCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이율/이자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_intRt',style:'width: 150px;',objType:'data',allowChar:'0123456789.',maxlength:'3.2',dataType:'float',displayFormat:'#,###.#0',ref:'data:ds_draftBorr.intRt',title:'이율'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_intAmt',style:'width: 200px;',objType:'data',allowChar:'0-9',maxlength:'18',dataType:'number',displayFormat:'#,##0',ref:'data:ds_draftBorr.intAmt',title:'이자'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입금계좌',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_rcptBankbookNo',nameId:'ed_txt_bankAcntNo',maxlengthCode:'5',allowCharCode:'0-9',code:'rcptBankbookNo',name:'bankAcntNo',refDataCollection:'ds_draftBorr',selectID:'retrieveBankBookCdInfo',id:'udc_rcptBankbook',validTitle:'입금계좌',mandatoryCode:'true',btnId:'btn_rcptBankbookNo',objTypeName:'data',objTypeCode:'data','ev:onblurCodeEvent':'scwin.udc_rcptBankbook_onblurCodeEvent','ev:onclickEvent':'scwin.udc_rcptBankbook_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'underline txt-blue',id:'ed_txt_borrSlipNo',style:'width: 200px;','ev:onclick':'scwin.f_openSlipNo',ref:'data:ds_draftBorr.borrSlipNo',title:'전표번호',readOnly:'true'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_New',style:'',type:'button','ev:onclick':'scwin.f_addRow',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'btn_Update',style:'',type:'button','ev:onclick':'scwin.f_Update',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.f_Delete',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})