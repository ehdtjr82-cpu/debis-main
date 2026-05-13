/*amd /ui/ac/fm/collmoneymgnt/rcptmgnt/fm_502_05_01b.xml 37008 b428da28a273a97612d73d8211492ad7e58685e1cf1e9a055970ec9a3a4319db */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchBankAccount'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'txnDtFrom',name:'입금시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnDtTo',name:'입금종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'procCls',name:'처리구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcptDca',name:'가상계좌번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankAcctList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'체크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctTxday',name:'거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptPrcsDtm',name:'입금처리시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docmSeq',name:'전문일련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jeokyo',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inoutGubun',name:'입출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txAmt',name:'거래금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'txCurBal',name:'잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'branch',name:'취급점',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hisHandReg',name:'수기등록여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hisHandRegday',name:'수기등록일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrNo',name:'가수금번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'사업부명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclClsCd',name:'취소구분코드',dataType:'number'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_searchBankAccount',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchBankAccount","key":"IN_DS1"},{"id":"ds_bankAcctList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_bankAcctList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchBankAccount_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_createSusRecv',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_bankAcctList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_createSusRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveSusRecv',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_bankAcctList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveSusRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cancelSusRecv',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_bankAcctList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_cancelSusRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteSusRecv',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_bankAcctList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_deleteSusRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deletecancelSusRecv',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_bankAcctList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_deletecancelSusRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_savePayDecide',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_bankAcctList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_savePayDecide_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 거래일자의 초기날짜를 구한다.
//-------------------------------------------------------------------------
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01";
scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.

scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId;
scwin.loginCoCd = $c.data.getMemInfo($p, "coCd");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.loginCoCd) ? '' : scwin.loginCoCd; // 소속 자회사
scwin.pos_groupCode = 0;
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "FM098",
    compID: "acb_bankCd",
    opt: {
      "range": "2,1"
    }
  }, {
    grpCd: "FM065",
    compID: "acb_procCls"
  }];
  $c.data.setCommonCode($p, codeOptions);

  //ASIS 히든,showfalse 그리드 필드정보
  /*
  그리드 hidden true로
  gr_bankAcctList.setColumnVisible("bankCd", false);
  gr_bankAcctList.setColumnVisible("crn", false);
  gr_bankAcctList.setColumnVisible("busiNm", false);*/
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  ed_FromDate.setValue(scwin.strFromDate);
  ed_ToDate.setValue(scwin.strToDate);
  $c.gus.cfDisableKey($p);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    if (!$c.gus.cfIsAfterDate($p, ed_FromDate.getValue(), ed_ToDate.getValue())) {
      await $c.win.alert($p, "조회 시작일자는 종료일자보다 이전 날짜 이어야 합니다.");
      ed_FromDate.focus();
      return false;
      ;
    }

    // 필수 조회조건 입력 여부 Check
    let ret = await $c.gus.cfValidate($p, [ed_FromDate, ed_ToDate]);
    if (!ret) {
      return false;
    }
    sbm_searchBankAccount.action = "/ac.fm.collmoneymgnt.rcptmgnt.RetrieveBankAccountTransactionContents2CMD.do";
    ds_bankAcctList.removeAll();
    $c.sbm.execute($p, sbm_searchBankAccount);
  } catch (e) {
    console.log("f_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_searchBankAccount_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_bankAcctList.getRowCount()));
    if (ds_bankAcctList.getRowCount() == 0) {
      await $c.win.alert($p, MSG_CM_WRN_002);
    } else {
      $c.gus.cfGoPrevPosition($p, gr_bankAcctList, 0); //첫번째 row 포지션이동
    }
  } catch (e) {
    console.log("sbm_searchBankAccount_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 그리드 셀클릭
//-------------------------------------------------------------------------
scwin.gr_bankAcctList_oncellclick = function (rowIndex, columnIndex, columnId) {
  let colid = columnId;
  let row = rowIndex;
  if (colid == "slipNo") {
    if (!(ds_bankAcctList.getCellData(row, colid) == null || ds_bankAcctList.getCellData(row, colid) == "")) {
      $c.gus.cfShowSlipInfo($p, ds_bankAcctList.getCellData(row, "slipNo"));
    }
  }
};

//-------------------------------------------------------------------------
// 거래처코드
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '2');
};

//-------------------------------------------------------------------------
// 거래처명
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurNameEvent = function (e) {
  //    scwin.f_openPopUpNm('2', ed_clntNo, ed_clntNm,'T');
};

//-------------------------------------------------------------------------
// 거래처찾기
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_clntNo, ed_clntNm, 'F');
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
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, "T");
    } else {
      if (!orgObjNm == null) {
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
// 1:검색->은행 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (select_code, txtCode, txtName, sFlag) {
  try {
    let code = '';
    let name = '';
    let param = '';
    code = txtCode.getValue();
    name = txtName.getValue();
    switch (select_code) {
      /*
      //ASIS 미사용
      // 은행코드 PopUp 호출
      case '1' :
      sCmdName = "retrieveBankCdInfo"
      rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 은행
      break;
      */
      // 사업자번호 PopUp 호출  --> 거래처번호 조회	
      case '2':
        param = ",,," + scwin.vLoginCoCd;
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null,null,"F",null,null); // 거래처
        udc_clntNo.setSelectId('retrieveClntList');
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , 'F' // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 거래처 PopUp 콜백
//-------------------------------------------------------------------------
scwin.udc_clntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_clntNo.setValue(rtnList[0]); // 코드값
      ed_clntNm.setValue(rtnList[1]); // 코드명
      ed_clntNo.hidVal = rtnList[0]; // 코드값
    } else {
      ed_clntNo.setValue("");
      ed_clntNm.setValue("");
      ed_clntNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_clntNo_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    const options = {
      fileName: "자동가수처리조회.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,
      sheetName: "자동가수처리" //엑셀내 시트명 지정필요시
      ,
      bodyWordwrap: true // 줄바꿈
    };
    const infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_bankAcctList, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// 자동가수처리 화면에서  처리 버튼 클릭시 실행되는 함수
//-------------------------------------------------------------------------
scwin.f_Create = async function () {
  try {
    sbm_createSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.RegistAutoSuspenseReceivableSlipProcess2CMD.do";
    $c.sbm.execute($p, sbm_createSusRecv);
  } catch (e) {
    console.log("f_Create : " + e);
  }
};

//-------------------------------------------------------------------------
// 자동가수처리 화면에서  처리 버튼 클릭시 실행되는 함수 콜백
//-------------------------------------------------------------------------
scwin.sbm_createSusRecv_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 자동가수처리 화면에서  처리 버튼 클릭시 실행되는 함수
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  try {
    let checkCount = 0;
    let i = 0;
    for (i = 0; i < ds_bankAcctList.getRowCount(); i++) {
      if (ds_bankAcctList.getCellData(i, "num") == "T" && ds_bankAcctList.getCellData(i, "delYn") == 1) {
        await $c.win.alert($p, "삭제된 가수금은 가수금으로 등록 할 수 없습니다.삭제 취소후 등록하시기 바랍니다.");
        return false;
      }
      if (ds_bankAcctList.getCellData(i, "num") == "T") {
        if (ds_bankAcctList.getCellData(i, "susRecvInitamtOutbrNo").trim() != "") {
          await $c.win.alert($p, "가수등록된 가수금은 가수등록 하실 수 없습니다.가수취소후 등록하시기 바랍니다.");
          return false;
        }
      }
      if (ds_bankAcctList.getCellData(i, "num") == "T") {
        checkCount++;
      }
    }

    // 선택여부 확인
    if (checkCount <= 0) {
      await $c.win.alert($p, "선택하신 사항이 없습니다.");
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      sbm_saveSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.RegistSuspenseReceivableSlipProcess2CMD.do";
      scwin.pos_groupCode = ds_bankAcctList.getRowPosition();
      $c.sbm.execute($p, sbm_saveSusRecv);
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};

//-------------------------------------------------------------------------
// 자동가수처리 화면에서  처리 버튼 클릭시 실행되는 함수 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveSusRecv_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    scwin.f_Retrieve();
    return; //onFail
  }
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 자동가수처리 화면에서  취소 버튼 클릭시 실행되는 함수
//-------------------------------------------------------------------------
scwin.f_Cancel = async function () {
  try {
    let checkCount = 0;
    let i = 0;
    for (i = 0; i < ds_bankAcctList.getRowCount(); i++) {
      if (ds_bankAcctList.getCellData(i, "num") == "T" && ds_bankAcctList.getCellData(i, "delYn") == 1) {
        await $c.win.alert($p, "삭제된 가수금은 가수취소 대상이 아닙니다.</br>선택하신 항목을 확인하시기 바랍니다.");
        return false;
      }
      if (ds_bankAcctList.getCellData(i, "num") == "T") {
        if (ds_bankAcctList.getCellData(i, "susRecvInitamtOutbrNo").trim() == "") {
          await $c.win.alert($p, "가수취소는 가수등록이 된 입금내역만 가능합니다.</br>선택하신 항목을 확인하시기 바랍니다.");
          return false;
        }
      }
      if (ds_bankAcctList.getCellData(i, "num") == "T") {
        checkCount++;
      }
    }

    // 선택여부 확인
    if (checkCount <= 0) {
      await $c.win.alert($p, "선택하신 사항이 없습니다.");
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      sbm_cancelSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.CancelSuspenseReceivableSlipProcess2CMD.do";
      scwin.pos_groupCode = ds_bankAcctList.getRowPosition();
      $c.sbm.execute($p, sbm_cancelSusRecv);
    }
  } catch (e) {
    console.log("f_Cancel : " + e);
  }
};

//-------------------------------------------------------------------------
// 자동가수처리 화면에서  취소 버튼 클릭시 실행되는 함수 콜백
//-------------------------------------------------------------------------
scwin.sbm_cancelSusRecv_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    scwin.f_Retrieve();
    return; //onFail
  }
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 자동가수처리 화면에서  삭제  버튼 클릭시 실행되는 함수
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  try {
    let checkCount = 0;
    let i = 0;
    for (i = 0; i < ds_bankAcctList.getRowCount(); i++) {
      if (ds_bankAcctList.getCellData(i, "num") == "T") {
        if (ds_bankAcctList.getCellData(i, "susRecvInitamtOutbrNo").trim() != "") {
          await $c.win.alert($p, "가수등록된 가수금은 삭제 하실 수 없습니다.가수취소후 삭제하시기 바랍니다.");
          return false;
        }
      }
      if (ds_bankAcctList.getCellData(i, "num") == "T" && ds_bankAcctList.getCellData(i, "delYn") == 1) {
        await $c.win.alert($p, "삭제취소 대상이 아닙니다.</br>선택하신 항목을 확인하시기 바랍니다.");
        return false;
      }
      if (ds_bankAcctList.getCellData(i, "num") == "T") {
        checkCount++;
      }
    }

    // 선택여부 확인
    if (checkCount <= 0) {
      await $c.win.alert($p, "선택하신 사항이 없습니다.");
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      sbm_deleteSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.DeleteBankAccountTransactionContents2CMD.do";
      scwin.pos_groupCode = ds_bankAcctList.getRowPosition();
      $c.sbm.execute($p, sbm_deleteSusRecv);
    }
  } catch (e) {
    console.log("f_Delete : " + e);
  }
};

//-------------------------------------------------------------------------
// 자동가수처리 화면에서  삭제  버튼 클릭시 실행되는 콜백
//-------------------------------------------------------------------------
scwin.sbm_deleteSusRecv_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    scwin.f_Retrieve();
    return; //onFail
  }
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 자동가수처리 화면에서  삭제취소  버튼 클릭시 실행되는 함수
//-------------------------------------------------------------------------
scwin.f_Cancel_Delete = async function () {
  try {
    let checkCount = 0;
    let i = 0;
    for (i = 0; i < ds_bankAcctList.getRowCount(); i++) {
      if (ds_bankAcctList.getCellData(i, "num") == "T" && ds_bankAcctList.getCellData(i, "delYn") == 0) {
        await $c.win.alert($p, "삭제취소 대상이 아닙니다.</br>선택하신 항목을 확인하시기 바랍니다.");
        return false;
      }
      if (ds_bankAcctList.getCellData(i, "num") == "T") {
        checkCount++;
      }
    }

    // 선택여부 확인
    if (checkCount <= 0) {
      await $c.win.alert($p, "선택하신 사항이 없습니다.");
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      sbm_deletecancelSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.CancelBankAccountTransactionContentsDelete2CMD.do";
      scwin.pos_groupCode = ds_bankAcctList.getRowPosition();
      $c.sbm.execute($p, sbm_deletecancelSusRecv);
    }
  } catch (e) {
    console.log("f_Cancel_Delete : " + e);
  }
};

//-------------------------------------------------------------------------
// 자동가수처리 화면에서  삭제취소  버튼 클릭시 실행되는 함수 콜백
//-------------------------------------------------------------------------
scwin.sbm_deletecancelSusRecv_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    scwin.f_Retrieve();
    return; //onFail
  }
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 자동가수처리 화면에서  처리 버튼 클릭시 실행되는 함수
//-------------------------------------------------------------------------
scwin.f_batch = async function () {
  try {
    if (scwin.userId == "hades119") {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        sbm_savePayDecide.action = "/ac.fm.collmoneymgnt.rcptmgnt.RegistAutoSuspenseReceivableSlipProcess2CMD.do";
        $c.sbm.execute($p, sbm_savePayDecide);
      }
    } else {
      await $c.win.alert($p, "권한이 없습니다.");
    }
  } catch (e) {
    console.log("f_batch : " + e);
  }
};

//-------------------------------------------------------------------------
// 자동가수처리 화면에서  처리 버튼 클릭시 실행되는 함수 콜백
//-------------------------------------------------------------------------
scwin.sbm_savePayDecide_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입금일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromTo',refDataMap:'ds_searchBankAccount',refEdDt:'txnDtTo',refStDt:'txnDtFrom',style:'',edFromId:'ed_FromDate',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',edToId:'ed_ToDate',titleFrom:'거래일자',titleTo:'거래일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'은행코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_bankCd',objType:'data',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:ds_searchBankAccount.bankCd',disabled:'false',displayMode:'value delim label',searchTarget:'both',visibleRowNum:'25'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_procCls',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:ds_searchBankAccount.procCls',disabled:'false',displayMode:'value delim label',searchTarget:'both'}}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_clntNo',validExpCode:'',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'10',editTypeCode:'select',nameId:'ed_clntNm',id:'udc_clntNo',mandatoryName:'false',editTypeName:'select',maxlengthName:'50',refDataCollection:'ds_searchBankAccount',code:'clntNo',selectID:'retrieveClntList','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',validTitle:'거래처번호',objTypeName:'key',btnId:'btn_clntNo',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'가상계좌번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_rcptDca',objType:'data',style:'width: 150px;',ref:'data:ds_searchBankAccount.rcptDca',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrd',gridID:'gr_bankAcctList',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_bankAcctList',readOnly:'true',resize:'true',columnMove:'true',id:'gr_bankAcctList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_bankAcctList_oncellclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankCd',inputType:'text',style:'',value:'금융기관코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'입금일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'입금시간',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'입금자명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'가상계좌번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'금액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'거래처번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'거래처명',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'crn',style:'',id:'column58',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'busiNm',style:'',id:'column55',value:'사업자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'가수번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column49',value:'전표번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'num',inputType:'checkbox',style:'',value:'',width:'50',trueValue:'T',falseValue:'F',valueType:'other',checkAlways:'true',fixColumnWidth:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankCd',inputType:'text',style:'',value:'',width:'120',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctTxday',inputType:'text',style:'',value:'',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rcptPrcsDtm',inputType:'text',style:'',value:'',width:'100',textAlign:'center',displayFormat:'##:##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'jeokyo',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNo',inputType:'text',style:'',value:'',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'txAmt',id:'txAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'busiNm',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'susRecvInitamtOutbrNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'link',style:'',id:'slipNo',value:'',displayMode:'label',textAlign:'center',class:'linktype'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column43',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum(\'txAmt\')',displayFormat:'#,##0',textAlign:'right',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가수등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Cancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_batch',style:'',type:'button','ev:onclick':'scwin.f_batch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자동가수(A)'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Cancel_Delete',style:'',type:'button','ev:onclick':'scwin.f_Cancel_Delete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})