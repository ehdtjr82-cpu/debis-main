/*amd /ui/ac/fm/stdinfomgnt/fm_100_05_01b.xml 32113 91ffee449d4432ff52d27c8bd580e7b0ec9a8133d6646ece2ef2006d19d929f9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_slipNoMessage'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_withDrawBank'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bankbookNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankAcntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookKndNm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_withDraw'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hidbankbookNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnSeq',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcptWithdrawClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnDt',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'summary',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnAmt',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnAmtFcrc',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'exchRt',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmDt',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnStsCd',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankAcntNo',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookKndNm',name:'name18',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payNo',name:'name19',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commiSsion',name:'name20',dataType:'text'}},{T:1,N:'w2:key',A:{id:'firmBankYn',name:'name21',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_deposit',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'입금통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidbankbookNo',name:'임시통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnSeq',name:'거래순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rcptWithdrawClsCd',name:'입출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnDt',name:'거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnAmt',name:'입금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'txnAmtFcrc',name:'입금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnStsCd',name:'거래상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookKndNm',name:'통장종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commiSsion',name:'수수료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'firmBankYn',name:'펌뱅킹여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'name22',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fm.stdinfomgnt.RegistBankbookTransferCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_withDraw","key":"IN_DS1"},{"id":"ds_deposit","key":"IN_DS2"},{"id":"dma_slipNoMessage","key":"OUT_DS1"}]',target:'data:json,{"id":"dma_slipNoMessage","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fm_100_05_01b
// 이름     : 통장이체
// 경로     : 회계/자금관리/기준정보관리/
// 작 성 자 : 오영재
// 작 업 일 : 2025-11-27
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.txtCoClsCd = "";
scwin.checkRow;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.isSubCompany = false;
scwin.hid_bankbookNo;
scwin.dateStr = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.onpageload = function () {
  scwin.f_Reset();
};
scwin.onUdcCompleted = function () {
  scwin.f_setCompanyInfo();
  ed_bankbookNo.focus();
  ds_deposit.setRowPosition(0);
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  //debugger;
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
  if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm]);
  }
};

//-------------------------------------------------------------------------
// 회사코드 입력시
//-------------------------------------------------------------------------
scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명
    scwin.txtCoClsCd = rtnList[1]; // 회사구분
  } else {
    ed_coNm.setValue("");
    ed_coCd.setValue("");
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};
scwin.f_Reset = function (e) {
  console.log('f_reset');
  //ds_withDrawBank.ClearData();
  //ds_withDraw.ClearData();
  //f_Header();
  dma_withDrawBank.setEmptyValue();
  dma_withDraw.setEmptyValue();
  $c.gus.cfDisableKey($p);
  // 수수료에 대한 초기화를 한다.
  ed_commiSsion.setValue("");
  ed_txnAmt.setValue("");
  ed_txnDt.setValue(scwin.dateStr);
  ds_deposit.removeAll();
  ds_deposit.insertRow();

  //lc_firmBankYn.Index = 0;
  lc_firmBankYn.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 출금 통장조회 POPUP호출
//-------------------------------------------------------------------------
scwin.f_BankBookPopUp = function (flag) {
  //var rtnList = new Array();
  /*
  var i_bankbookno = ed_bankbookNo.getValue().trim();
   if (flag == "ALL") {
      i_bankbookno = "";
  } else {
      i_bankbookno = i_bankbookno.trim();
  }
  */
  ed_coCd.setValue(scwin.vLoginCoCd);
  var param = ",,,,," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
  udc_bankbookNo.cfCommonPopUp(scwin.udc_bankbookNo_callBackFunc, ed_bankbookNo.getValue(), '', "T", null, null, null, null, param, null, null, null, null); // 거래처
};
scwin.udc_bankbookNo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;

    //debugger;

    dma_withDrawBank.set("bankbookNo", rtnList[0]); //통장번호
    dma_withDrawBank.set("bankCd", rtnList[1]); //통장코드
    dma_withDrawBank.set("bankbookNm", rtnList[2]); //통장명
    dma_withDrawBank.set("acctDeptCd", rtnList[3]); //관리부서코드
    dma_withDrawBank.set("bankAcntNo", rtnList[4]); //통장계좌번호
    dma_withDrawBank.set("bankbookKndNm", rtnList[8]); //통장종류코드명
    ed_acctDeptNm.setValue(rtnList[7]); //관리부서명
    scwin.hid_bankbookNo = rtnList[0];
    dma_withDraw.set("acctDeptCd", rtnList[3]); //관리부서코드
  } else {
    dma_withDrawBank.set("bankbookNo", "");
    dma_withDrawBank.set("bankCd", "");
    dma_withDrawBank.set("bankbookNm", "");
    dma_withDrawBank.set("acctDeptCd", "");
    dma_withDrawBank.set("bankAcntNo", "");
    dma_withDrawBank.set("bankbookKndNm", "");
    ed_acctDeptNm.setValue("");
    scwin.hid_bankbookNo = "";
  }
};

//-------------------------------------------------------------------------
// 출금 통장에 대한 Focus 이동시 발생함.
//-------------------------------------------------------------------------
scwin.udc_bankbookNo_onblurCodeEvent = function (e) {
  if (ed_bankbookNo.getValue().trim() == scwin.hid_bankbookNo) {
    return;
  } else if (ed_bankbookNo.getValue().trim() == "") {
    dma_withDrawBank.set("bankbookNo", "");
    dma_withDrawBank.set("bankCd", "");
    dma_withDrawBank.set("bankbookNm", "");
    dma_withDrawBank.set("acctDeptCd", "");
    dma_withDrawBank.set("bankAcntNo", "");
    dma_withDrawBank.set("bankbookKndNm", "");
    ed_acctDeptNm.setValue("");
    scwin.hid_bankbookNo = "";
    return;
  }
  if (ed_bankbookNo.getValue().trim() != "") {
    /*
    ed_clntNm 통장명
    ed_bankAcntNo 통장계좌번호
    ed_acctDeptCd 관리부서 
    ed_acctDeptNm 관리부서명
    */
    scwin.f_CheckPopUp(ed_bankbookNo, ed_bankbookKndNm, ed_clntNm, ed_bankAcntNo, ed_acctDeptCd, ed_acctDeptNm);
  }
};
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, orgObjNm2, orgObjNm3, orgObjNm4, orgObjNm5) {
  if (orgObjCd.getValue().trim() != "") {
    scwin.f_BankBookPopUp("NO");
  } else {
    orgObjCd.setValue("");
    //orgObjNm.Index = -1;
    orgObjNm2.setValue("");
    orgObjNm3.setValue("");
    orgObjNm4.setValue("");
    orgObjNm5.setValue("");
  }
};

//-------------------------------------------------------------------------
// 입금 통장조회 POPUP호출
//-------------------------------------------------------------------------
scwin.f_BankBookPopUpDeposit = function (row, colid, flag) {
  var i_bankbookno = ds_deposit.getCellData(row, "bankbookNo");
  if (flag == "ALL") {
    i_bankbookno = "";
  }

  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  if (scwin.txtCoClsCd.value > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);

  // 부서조회    
  var param = "," + "," + "," + "," + "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",";
  //udc_bankbookNo 를 공용 udc 처럼 사용
  udc_deposit_bankbookNo.setSelectId("retrieveBankBookCdInfo");
  udc_deposit_bankbookNo.cfCommonPopUp(scwin.udc_deposit_bankbookNo_callBackFunc, i_bankbookno, '', "T", null, null, null, null, param, null, null, null, null); // 거래처
};
scwin.udc_deposit_bankbookNo_callBackFunc = function (rtnList) {
  console.log(rtnList);
  let row = ds_deposit.getRowPosition();
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_deposit.setCellData(row, "bankbookNo", rtnList[0]); //통장번호
    ds_deposit.setCellData(row, "bankCd", rtnList[1]); //통장코드
    ds_deposit.setCellData(row, "clntNm", rtnList[2]); //통장명
    ds_deposit.setCellData(row, "acctDeptCd", rtnList[3]); //관리부서코드
    ds_deposit.setCellData(row, "bankAcntNo", rtnList[4]); //통장계좌번호
    ds_deposit.setCellData(row, "bankbookKndNm", rtnList[5]); //통장종류코드
    ds_deposit.setCellData(row, "acctDeptNm", rtnList[7]); // 관리부서명
    ds_deposit.setCellData(row, "hidbankbookNo", rtnList[0]); // popup 비교용 통장번호
  } else {
    ds_deposit.setCellData(row, "bankbookNo", "");
    ds_deposit.setCellData(row, "bankCd", "");
    ds_deposit.setCellData(row, "clntNm", "");
    ds_deposit.setCellData(row, "acctDeptCd", "");
    ds_deposit.setCellData(row, "bankAcntNo", "");
    ds_deposit.setCellData(row, "bankbookKndNm", "");
    ds_deposit.setCellData(row, "acctDeptNm", "");
    ds_deposit.setCellData(row, "hidbankbookNo", ""); // popup 비교용 통장번호
  }
};

/** 
scwin.gr_deposit_oncellclick = function (rowIndex, columnIndex, columnId) {
    console.log("columnId =>" + columnId);
    if ( columnId == "bankbookNo" ) {
        scwin.f_BankBookPopUpDeposit(rowIndex,columnId,"ALL");
    }
};
*/

//-------------------------------------------------------------------------
// 그리드 추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  //ds_deposit.AddRow();
  ds_deposit.insertRow();
  ds_deposit.setCellData(ds_deposit.getTotalRow() - 1, 'txnAmt', 0);
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  let ret;
  // 필수입력 항목에 대한 내역을 CHECK한다.
  //ret = await $c.gus.cfValidate([ ed_bankbookNo,ed_bankbookKndNm,ed_clntNm,ed_bankAcntNo,ed_acctDeptCd,ed_acctDeptNm,
  //                    ed_txnAmt,ed_commiSsion,ed_txnDt,ed_summary,gr_deposit,lc_firmBankYn ]); 
  ret = await $c.gus.cfValidate($p, [ed_bankbookNo, ed_bankbookKndNm, ed_clntNm, ed_bankAcntNo, ed_acctDeptCd, ed_acctDeptNm, ed_txnAmt, ed_txnDt, ed_summary]);

  //validation 문제로 calendar 는 일단!!! 제외
  //ed_txnDt, gr_deposit 그리드도 일단!! 제외
  if (!ret) return;

  //if(ds_withDraw.getModifiedIndex().length==false && ds_deposit.getModifiedIndex().length==false){
  if (dma_withDraw.getModifiedData().length == 0 && ds_deposit.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["통장이체"]);
    return;
  }

  // 출금 통장과 입금 통장이 동일한지 확인한다.
  for (var i = 0; i < ds_deposit.getRowCount(); i++) {
    if (ds_deposit.getCellData(i, "bankbookNo") == dma_withDrawBank.get("bankbookNo")) {
      $c.gus.cfAlertMsg($p, "출금 통장과 입금통장은 동일 할 수 없습니다.");
      ds_deposit.setRowPosition(i);
      return;
    }
  }

  // Grid의 필수 입력 항목에 대해서 Check 한다.
  //ret = await $c.gus.cfValidate([gr_deposit]);
  //if (!ret) {
  //    return false;
  //}

  var gridChkErrFlag = false;
  for (var gIdx = 0; gIdx < gr_deposit.getTotalRow(); gIdx++) {
    if (!ds_deposit.getCellData(gIdx, 'bankbookNo') || ds_deposit.getCellData(gIdx, 'bankbookNo').trim() == "") {
      //입금액
      await $c.gus.cfAlertMsg($p, '입금통장의 ' + (gIdx + 1) + '번째 데이터에서 입금통장번호은(는) 필수 입력 항목입니다.');
      gridChkErrFlag = true;
      gr_deposit.setFocusedCell(gIdx, 'bankbookNo', true);
      gr_deposit.setfo;
      return;
    }
    if (ds_deposit.getCellData(gIdx, 'txnAmt') < 1) {
      //입금액
      await $c.gus.cfAlertMsg($p, '입금통장의 ' + (gIdx + 1) + '번째 데이터에서 입금액은(는) 1 이상으로 입력하십시오.');
      gridChkErrFlag = true;
      gr_deposit.setFocusedCell(gIdx, 'txnAmt', true);
      return;
    }
  }
  if (gridChkErrFlag) {
    return;
  }
  var j;
  var amt1;
  var amt2 = 0;

  //debugger;
  dma_withDraw.set("bankbookNo", dma_withDrawBank.get("bankbookNo")); // 통장번호
  dma_withDraw.set("bankbookKndNm", dma_withDrawBank.get("bankbookKndNm")); // 통장종류를 넘긴다.
  dma_withDraw.set("confirmDt", dma_withDraw.get("txnDt"));

  // 거래상태코드 에 대해서 진행으로 하드코딩한다.
  dma_withDraw.set("txnStsCd", ACConstants.BANKBOOK_TXN_STS_CD);
  amt1 = parseInt(ed_txnAmt.getValue());
  for (j = 0; j < ds_deposit.getRowCount(); j++) {
    // 입금내역 DataSet에 입금일을 입력한다.
    ds_deposit.setCellData(j, "txnDt", ed_txnDt.getValue());
    ds_deposit.setCellData(j, "confirmDt", ed_txnDt.getValue());

    // 거래상태코드 에 대해서 진행으로 하드코딩한다.
    ds_deposit.setCellData(j, "txnStsCd", ACConstants.BANKBOOK_TXN_STS_CD);
    ds_deposit.setCellData(j, "summary", "이체에 따른 입금");
    ds_deposit.setCellData(j, "commiSsion", ed_commiSsion.getValue());
    amt2 = parseInt(amt2) + parseInt(ds_deposit.getCellData(j, "txnAmt"));
    ds_deposit.setCellData(j, "firmBankYn", lc_firmBankYn.getValue());
  }
  ret = amt1 != amt2;
  if (ret) {
    $c.gus.cfAlertMsg($p, "입금액은 출금액과 동일해야 합니다.\n입.출금액을 확인하시기 바랍니다.");
    return;
  }
  ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    //tr_save.Post();   
    //alert("값부터 보자");
    $c.sbm.execute($p, sbm_save);
    $c.gus.cfEnableAllBtn($p);
  }
};
scwin.udc_bankbookNo_onclickEvent = function (e) {
  scwin.f_BankBookPopUp('ALL');
};
scwin.f_CancelRow = function (e) {
  ds_deposit.removeRow(ds_deposit.getRowPosition());
  ds_deposit.reform();
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    var slipNo = e.responseJSON.OUT_DS1[0].slipNo;
    //$c.gus.cfAlertMsg(dma_slipNoMessage.get("slipNo") + "번호로 전표처리 되었습니다.");
    $c.gus.cfAlertMsg($p, slipNo + "번호로 전표처리 되었습니다.");
    scwin.f_Reset();
  }
};
scwin.sbm_save_submiterror = function (e) {
  //cfShowError(tr_save);
  //$c.gus.cfAlertMsg(e.responseJSON.resultDataSet[1].Msg);
};

/*
scwin.depositBankNo = function(cellInfo) {
    debugger;

      // cellInfo를 바탕으로 조건에 따라 다른 inputType을 반환
  if (cellInfo.row.status === 'active') {
    return "button";
  } else {
    return "text";
  }
}
*/
scwin.gr_deposit_onafteredit = function (rowIndex, columnIndex, value) {
  var row = rowIndex;
  var colId = gr_deposit.getColumnID(columnIndex);
  if (colId == 'txnAmt') {
    //입금액 변경시
    if (!ds_deposit.getCellData(rowIndex, colId)) {
      ds_deposit.setCellData(rowIndex, colId, 0);
    }
  }
  if (colId == "bankbookNo") {
    if (ds_deposit.getCellData(rowIndex, 'hidbankbookNo') == value) {
      return;
    } else if (!value) {
      // 바뀐 값이 "" null undefined
      ds_deposit.setCellData(row, "bankbookNo", "");
      ds_deposit.setCellData(row, "bankCd", "");
      ds_deposit.setCellData(row, "clntNm", "");
      ds_deposit.setCellData(row, "acctDeptCd", "");
      ds_deposit.setCellData(row, "bankAcntNo", "");
      ds_deposit.setCellData(row, "bankbookKndNm", "");
      ds_deposit.setCellData(row, "acctDeptNm", "");
      ds_deposit.setCellData(row, "hidbankbookNo", ""); // popup 비교용 통장번호
    } else {
      scwin.f_BankBookPopUpDeposit(rowIndex, columnIndex, "No");
    }
  }
};
scwin.gridView_imageClickFunc = function (rowIndex, colId, nowValue) {
  scwin.f_BankBookPopUpDeposit(rowIndex, colId, "ALL");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출금통장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'sch-box col7',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{code:'bankbookNo',codeId:'ed_bankbookNo','ev:onclickEvent':'scwin.udc_bankbookNo_onclickEvent',id:'udc_bankbookNo',mandatoryCode:'true',name:'bankbookNm',nameId:'ed_bankbookNm',popupID:'retrieveBankBookCdInfoPopup',refDataCollection:'dma_withDrawBank',selectID:'retrieveBankBookCdInfo',style:'',validTitle:'통장번호',hideName:'true',objTypeCode:'data',objTypeName:'data',btnId:'btn_bankbookNo','ev:onblurCodeEvent':'scwin.udc_bankbookNo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N'}},{T:1,N:'xf:input',A:{class:'form-control',disabled:'true',id:'ed_bankbookKndNm',objType:'key',placeholder:'',readOnly:'true',ref:'data:dma_withDrawBank.bankbookKndNm',style:''}},{T:1,N:'xf:input',A:{class:'form-control',disabled:'true',id:'ed_clntNm',maxlength:'30',objType:'key',placeholder:'',readOnly:'true',ref:'data:dma_withDrawBank.bankbookNm',style:''}},{T:1,N:'xf:input',A:{class:'form-control',disabled:'true',id:'ed_bankAcntNo',maxlength:'20',objType:'key',placeholder:'',readOnly:'true',ref:'data:dma_withDrawBank.bankAcntNo',style:''}},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',btnId:'btn_company',class:'',codeId:'ed_coCd',mandatoryCode:'true',maxlengthCode:'3',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'data',popupID:'',style:';display:none;',validExpCode:'회사코드:yes',id:'udc_dongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent',code:'coCd',refDataCollection:'dma_withDraw',selectID:'retrieveDongbuGroupCompanyInfo',name:'coNm',hideName:'true'}},{T:1,N:'xf:input',A:{class:'form-control w120',disabled:'true',id:'ed_acctDeptCd',maxlength:'30',objType:'key',placeholder:'',readOnly:'true',ref:'data:dma_withDrawBank.acctDeptCd',style:''}},{T:1,N:'xf:input',A:{class:'form-control w120',disabled:'true',id:'ed_acctDeptNm',maxlength:'30',objType:'key',placeholder:'',readOnly:'true',ref:'data:dma_withDrawBank.acctDeptNm',style:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control tar col2 w150',id:'ed_txnAmt',placeholder:'',style:'',mandatory:'true',objType:'data',maxlength:'12',displayFormat:'#,###',allowChar:'0-9',invalidMessage:'출금액',ref:'data:dma_withDraw.txnAmt',dataType:'number','ev:onblur':'scwin.ed_txnAmt_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수수료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control tar col2 w150',id:'ed_commiSsion',placeholder:'',style:'',objType:'data',maxlength:'7',displayFormat:'#,###',allowChar:'0-9',invalidMessage:'수수료',mandatory:'true',ref:'data:dma_withDraw.commiSsion',dataType:'number','ev:onblur':'scwin.ed_commiSsion_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출금일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ed_txnDt',style:'',displayFormat:'yyyy/MM/dd',mandatory:'true',objType:'data',ref:'data:dma_withDraw.txnDt',title:'출금일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'펌뱅킹여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'lc_firmBankYn',chooseOption:'',style:'width:148px; height:21px; ',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'data:dma_withDraw.firmBankYn',invalidMessage:'펌뱅킹여부',mandatory:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control col4',id:'ed_summary',placeholder:'',style:'',mandatory:'true',objType:'data',maxlength:'30',invalidMessage:'적요',ref:'data:dma_withDraw.summary'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_deposit',focusMode:'row',id:'gr_deposit',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_deposit_oncellclick','ev:onafteredit':'scwin.gr_deposit_onafteredit',gridName:'입금통장',validExp:'bankbookNo:입금통장번호:yes,clntNm:은행지점:yes,bankAcntNo:계좌번호:yes,txnAmt:입금액:yes:minLength=1&maxByteLength=12',rowStatusVisible:'true',sortable:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'150',value:'입금통장번호',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'150',value:'은행지점',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'150',value:'계좌번호',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'150',value:'귀속부서',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'입금액',width:'150',class:'txt-red',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankbookNo',inputType:'textImage',removeBorderStyle:'false',width:'150',mandatory:'true',imageClickFunction:'scwin.gridView_imageClickFunc',maxLength:'5',maxByteLength:'8'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNm',inputType:'text',removeBorderStyle:'false',width:'150',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankAcntNo',inputType:'text',removeBorderStyle:'false',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctDeptNm',inputType:'text',removeBorderStyle:'false',width:'150',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txnAmt',inputType:'text',style:'',value:'',width:'150',textAlign:'right',mandatory:'true',dataType:'number',displayFormat:'#,###',allowChar:'0-9',maxLength:'12'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''}},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',EngYn:'N',btnRowDelYn:'N',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',rowAddFunction:'scwin.f_AddRow',cancelFunction:'scwin.f_CancelRow'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'display: none;height: 100px;'},E:[{T:1,N:'w2:udc_comCode',A:{code:'bankbookNo',codeId:'ed_deposit_bankbookNo','ev:onblurCodeEvent':'scwin.udc_bankbookNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bankbookNo_onclickEvent',id:'udc_deposit_bankbookNo',mandatoryCode:'true',name:'bankbookNm',nameId:'ed_deposit_bankbookNm',popupID:'retrieveDepositBankBookCdInfoPopup',selectID:'retrieveBankBookCdInfo',style:'',validTitle:'통장번호',refDataCollection:'ds_deposit',objTypeCode:'data',objTypeName:'data'}}]}]}]}]})