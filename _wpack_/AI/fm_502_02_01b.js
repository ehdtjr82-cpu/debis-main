/*amd /AI/fm_502_02_01b.xml 82636 9914b9bc3291212971a1f6f4081ea8cd5135e1e3f8f596d84478df1ca17a2308 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchBankAccount'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'txnDtFrom',name:'거래시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnDtTo',name:'거래종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookCls',name:'통장구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnCls',name:'거래구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'procCls',name:'처리구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchStDate',name:'부서검색시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchEndDate',name:'부서검색종료일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_addBankAccount'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchStDate',name:'부서검색시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchEndDate',name:'부서검색종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'통화코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankAcctList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'금융기관코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctTxday',name:'거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inoutGubun',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jeokyo',name:'입금자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctTxdaySeq',name:'일련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txAmtFcrc',name:'금액(외화)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txCurBal',name:'잔액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currCd',name:'통화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branch',name:'취급점',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hisHandReg',name:'수기등록여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hisHandRegday',name:'수기등록일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrNo',name:'가수번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cancelYn',name:'취소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excelData',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankCd',name:'금융기관코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctTxday',name:'거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inoutGubun',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jeokyo',name:'입금자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctTxdaySeq',name:'일련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txAmt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txAmtFcrc',name:'금액(외화)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txCurBal',name:'잔액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currCd',name:'통화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branch',name:'취급점',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hisHandReg',name:'수기등록여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hisHandRegday',name:'수기등록일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrNo',name:'가수번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cancelYn',name:'취소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'통장번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excelOrgin',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'text1',name:'text1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text2',name:'text2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text3',name:'text3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text4',name:'text4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text5',name:'text5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text6',name:'text6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text7',name:'text7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text8',name:'text8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text9',name:'text9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text10',name:'text10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excelTemp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'text1',name:'text1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text2',name:'text2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text3',name:'text3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text4',name:'text4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text5',name:'text5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text6',name:'text6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text7',name:'text7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text8',name:'text8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text9',name:'text9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text10',name:'text10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankCombo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'코드약어',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankbookCombo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'계좌번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_searchBankAccount',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'txnDtFrom',name:'거래시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnDtTo',name:'거래종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookCls',name:'통장구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnCls',name:'거래구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procCls',name:'처리구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchStDate',name:'부서검색시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchEndDate',name:'부서검색종료일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_addBankAccount',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchStDate',name:'부서검색시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchEndDate',name:'부서검색종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchBankAccount',action:'/ac.fm.collmoneymgnt.rcptmgnt.RetrieveBankAccountTransactionContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchBankAccount","key":"IN_DS1"},{"id":"ds_bankAcctList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_bankAcctList","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_searchBankAccount_submitdone','ev:submiterror':'scwin.sbm_searchBankAccount_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_savePayDecide',action:'/ac.fm.collmoneymgnt.rcptmgnt.RegistAutoSuspenseReceivableSlipProcess2CMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchBankAccount","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_savePayDecide_submitdone','ev:submiterror':'scwin.sbm_savePayDecide_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveSusRecv',action:'/ac.fm.collmoneymgnt.rcptmgnt.RegistSuspenseReceivableSlipProcessCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_bankAcctList","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveSusRecv_submitdone','ev:submiterror':'scwin.sbm_saveSusRecv_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_cancelSusRecv',action:'/ac.fm.collmoneymgnt.rcptmgnt.CancelSuspenseReceivableSlipProcessCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_bankAcctList","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_cancelSusRecv_submitdone','ev:submiterror':'scwin.sbm_cancelSusRecv_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_deleteSusRecv',action:'/ac.fm.collmoneymgnt.rcptmgnt.DeleteBankAccountTransactionContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_bankAcctList","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_deleteSusRecv_submitdone','ev:submiterror':'scwin.sbm_deleteSusRecv_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_deletecancelSusRecv',action:'/ac.fm.collmoneymgnt.rcptmgnt.CancelBankAccountTransactionContentsDeleteCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_bankAcctList","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_deletecancelSusRecv_submitdone','ev:submiterror':'scwin.sbm_deletecancelSusRecv_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveExcel',action:'/ac.fm.collmoneymgnt.rcptmgnt.CreateBankAccountTransactionContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_excelData","key":"IN_DS1"},{"id":"dma_addBankAccount","key":"IN_DS2"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveExcel_submitdone','ev:submiterror':'scwin.sbm_saveExcel_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveExcelForeign',action:'/ac.fm.collmoneymgnt.rcptmgnt.ForeignCreateBankAccountTransactionContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_excelData","key":"IN_DS1"},{"id":"dma_addBankAccount","key":"IN_DS2"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_saveExcelForeign_submitdone','ev:submiterror':'scwin.sbm_saveExcelForeign_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_bankCombo',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_bankCombo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_bankCombo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_bankCombo_submitdone','ev:submiterror':'scwin.sbm_bankCombo_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_bankbookCombo',action:'/ac.fm.stdinfomgnt.RetrieveBankbookListBySubCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_searchBankAccount","key":"IN_DS1"},{"id":"ds_bankbookCombo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_bankbookCombo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_bankbookCombo_submitdone','ev:submiterror':'scwin.sbm_bankbookCombo_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.userid = "";
scwin.vLoginCoCd = "";
scwin.vLoginCoClsCd = "";
scwin.vUserHomeClsCd = "";
scwin.isSubCompany = false;
scwin.pos_groupCode = 0;
scwin.vCurDate = "";
scwin.strFromDate = "";
scwin.strToDate = "";
scwin.txtCoClsCd = "";
scwin.CO_CLS_CD_DONGBU = "0";
scwin.CO_CD_DONGBU = "001";
scwin.SUBSIDIARY_USER_HOME_CLS_CD = "SA";
scwin.onpageload = async function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strFromDate = scwin.vCurDate.substring(0, 6) + "01";
  scwin.strToDate = scwin.vCurDate;
  scwin.userid = $c.ses.getUserId();
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, $c.ses.getCoCd()) ? "" : $c.ses.getCoCd();
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, $c.ses.getCoClsCd()) ? "" : $c.ses.getCoClsCd();
  scwin.vUserHomeClsCd = $c.ses.getUserHomeClsCd();
  $c.gus.cfDisableKey($p);
  let codeOptions = [{
    grpCd: "FM064",
    compID: "lc_bankbookCls"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = async function () {
  udc_Date.setInitDate(scwin.strFromDate, scwin.strToDate);
  lc_bankbookCls.setSelectedIndex(0);
  scwin.f_loadBankCombo();
  scwin.f_setCompanyInfo();
  gr_Tmp_UpExcel.setColumnVisible("currCd", false);
  gr_Tmp_UpExcel.setColumnVisible("txAmt", true);
  gr_Tmp_UpExcel.setColumnVisible("txAmtFcrc", false);
};
scwin.f_loadBankCombo = async function () {
  await $c.sbm.execute($p, sbm_bankCombo);
  lc_bankCombo.setSelectedIndex(-1);
};
scwin.f_ProcessBinding = function () {
  dma_searchBankAccount.set("txnDtFrom", ica_FromDate.getValue());
  dma_searchBankAccount.set("txnDtTo", ica_ToDate.getValue());
  dma_searchBankAccount.set("bankbookCls", lc_bankbookCls.getValue());
  dma_searchBankAccount.set("bankbookNo", txt_bankbookNo.getValue());
  dma_searchBankAccount.set("txnCls", lc_txnCls.getValue());
  dma_searchBankAccount.set("procCls", lc_procCls.getValue());
  dma_searchBankAccount.set("coCd", ed_coCd.getValue());
  dma_searchBankAccount.set("coClsCd", scwin.txtCoClsCd);
  dma_searchBankAccount.set("queryDeptSearchStDate", ica_FromDate.getValue());
  dma_searchBankAccount.set("queryDeptSearchEndDate", ica_ToDate.getValue());
};
scwin.f_ProcessBindingAdd = function () {
  dma_addBankAccount.set("coCd", ed_coCd.getValue());
  dma_addBankAccount.set("queryDeptSearchStDate", ica_FromDate.getValue());
  dma_addBankAccount.set("queryDeptSearchEndDate", ica_ToDate.getValue());
  dma_addBankAccount.set("acctNo", lc_bankbookCombo.getValue());
  let selIdx = lc_bankbookCombo.getSelectedIndex();
  if (selIdx >= 0) {
    dma_addBankAccount.set("crcCd", ds_bankbookCombo.getCellData(selIdx, "crcCd"));
  }
};
scwin.f_Retrieve = async function () {
  if (!$c.gus.cfIsAfterDate($p, ica_FromDate.getValue(), ica_ToDate.getValue())) {
    await $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자보다 이전 날짜 이어야 합니다.");
    ica_FromDate.setFocus();
    return;
  }
  let chk = await $c.gus.cfValidate($p, [ed_coCd, ica_FromDate, ica_ToDate]);
  if (!chk) {
    return;
  }
  scwin.f_ProcessBinding();
  if (lc_bankbookCls.getValue() == "01") {
    sbm_searchBankAccount.action = "/ac.fm.collmoneymgnt.rcptmgnt.RetrieveBankAccountTransactionContentsCMD.do";
  }
  if (lc_bankbookCls.getValue() == "02") {
    sbm_searchBankAccount.action = "/ac.fm.collmoneymgnt.rcptmgnt.RetrieveForeignCurrencyBankAccountTransactionContentsCMD.do";
  }
  await $c.sbm.execute($p, sbm_searchBankAccount);
};
scwin.f_openPopUp = async function (select_code) {
  if (select_code == "1") {
    let chk = await $c.gus.cfValidate($p, [ed_coCd]);
    if (!chk) {
      return;
    }
  }
  switch (select_code) {
    case "1":
      txt_bankbookNm.setValue("");
      let code = txt_bankbookNo.getValue();
      let param = ",,,,," + ed_coCd.getValue();
      let rtnList = await $c.gus.cfCommonPopUp($p, "retrieveBankBookCdInfo", code, "", "T", null, null, null, null, param, null, null, null, null);
      if (rtnList != null) {
        txt_bankbookNo.setValue(rtnList[0]);
        txt_bankbookNm.setValue(rtnList[2]);
        scwin.txt_bankbookNo_hidVal = rtnList[0];
      } else {
        txt_bankbookNo.setValue("");
        scwin.txt_bankbookNo_hidVal = "";
      }
      break;
    default:
      await $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};
scwin.txt_bankbookNo_hidVal = "";
scwin.f_CheckPopUp = async function (orgObjCdId, orgObjNmId, select_code) {
  let orgObjCd = WebSquare.util.getComponentById(orgObjCdId);
  let orgObjNm = WebSquare.util.getComponentById(orgObjNmId);
  let cdVal = orgObjCd.getValue();
  let hidVal = scwin.txt_bankbookNo_hidVal;
  if (cdVal == hidVal) {
    if (cdVal.trim() == "") {
      orgObjNm.setValue("");
      orgObjCd.setValue("");
      scwin.txt_bankbookNo_hidVal = "";
    }
    return;
  }
  if (cdVal.trim() != "") {
    await scwin.f_openPopUp(select_code);
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    scwin.txt_bankbookNo_hidVal = "";
  }
};
scwin.f_Save = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_coCd]);
  if (!chk) return;
  let checkCount = 0;
  for (let i = 0; i < ds_bankAcctList.getRowCount(); i++) {
    if (ds_bankAcctList.getCellData(i, "num") == "T" && ds_bankAcctList.getCellData(i, "inoutGubun") == "1") {
      await $c.gus.cfAlertMsg($p, "출금은 가수금으로 등록 할 수 없습니다.\n선택하신 항목을 확인하시기 바랍니다.");
      return;
    }
    if (ds_bankAcctList.getCellData(i, "num") == "T" && ds_bankAcctList.getCellData(i, "delYn") == "1") {
      await $c.gus.cfAlertMsg($p, "삭제된 가수금은 가수금으로 등록 할 수 없습니다.삭제 취소후 등록하시기 바랍니다.");
      return;
    }
    if (ds_bankAcctList.getCellData(i, "num") == "T") {
      if (ds_bankAcctList.getCellData(i, "susRecvInitamtOutbrNo").trim() != "") {
        await $c.gus.cfAlertMsg($p, "가수등록된 가수금은 가수등록 하실 수 없습니다.가수취소후 등록하시기 바랍니다.");
        return;
      }
    }
    if (ds_bankAcctList.getCellData(i, "num") == "T") {
      checkCount++;
    }
  }
  if (checkCount <= 0) {
    await $c.gus.cfAlertMsg($p, "선택하신 사항이 없습니다.");
    return;
  }
  let confirmChk = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmChk) {
    if (lc_bankbookCls.getValue() == "01") {
      sbm_saveSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.RegistSuspenseReceivableSlipProcessCMD.do";
    }
    if (lc_bankbookCls.getValue() == "02") {
      sbm_saveSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.RegistForeignCurrencySuspenseReceivableSlipProcessCMD.do";
    }
    scwin.pos_groupCode = ds_bankAcctList.getRowPosition();
    await $c.sbm.execute($p, sbm_saveSusRecv);
  }
};
scwin.f_batch = async function () {
  if (scwin.userid == "hades119") {
    let confirmChk = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirmChk) {
      scwin.f_ProcessBinding();
      sbm_savePayDecide.action = "/ac.fm.collmoneymgnt.rcptmgnt.RegistAutoSuspenseReceivableSlipProcessCMD.do";
      await $c.sbm.execute($p, sbm_savePayDecide);
    }
  } else {
    await $c.win.alert($p, "권한이 없습니다.");
  }
};
scwin.f_Forbatch = async function () {
  if (scwin.userid == "hades119") {
    let confirmChk = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirmChk) {
      scwin.f_ProcessBinding();
      sbm_savePayDecide.action = "/ac.fm.collmoneymgnt.rcptmgnt.RegistAutoForeignCurrencySuspenseReceivableSlipProcessCMD.do";
      await $c.sbm.execute($p, sbm_savePayDecide);
    }
  } else {
    await $c.win.alert($p, "권한이 없습니다.");
  }
};
scwin.f_Cancel = async function () {
  let checkCount = 0;
  for (let i = 0; i < ds_bankAcctList.getRowCount(); i++) {
    if (ds_bankAcctList.getCellData(i, "num") == "T" && ds_bankAcctList.getCellData(i, "inoutGubun") == "1") {
      await $c.gus.cfAlertMsg($p, "출금은 가수취소 대상이 아닙니다.\n선택하신 항목을 확인하시기 바랍니다.");
      return;
    }
    if (ds_bankAcctList.getCellData(i, "num") == "T" && ds_bankAcctList.getCellData(i, "delYn") == "1") {
      await $c.gus.cfAlertMsg($p, "삭제된 가수금은 가수취소 대상이 아닙니다.\n선택하신 항목을 확인하시기 바랍니다.");
      return;
    }
    if (ds_bankAcctList.getCellData(i, "num") == "T") {
      if (ds_bankAcctList.getCellData(i, "susRecvInitamtOutbrNo").trim() == "") {
        await $c.gus.cfAlertMsg($p, "가수취소는 가수등록이 된 입금내역만 가능합니다.\n선택하신 항목을 확인하시기 바랍니다.");
        return;
      }
    }
    if (ds_bankAcctList.getCellData(i, "num") == "T") {
      checkCount++;
    }
  }
  if (checkCount <= 0) {
    await $c.gus.cfAlertMsg($p, "선택하신 사항이 없습니다.");
    return;
  }
  let confirmChk = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmChk) {
    if (lc_bankbookCls.getValue() == "01") {
      sbm_cancelSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.CancelSuspenseReceivableSlipProcessCMD.do";
    }
    if (lc_bankbookCls.getValue() == "02") {
      sbm_cancelSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.CancelForeignCurrencySuspenseReceivableSlipProcessCMD.do";
    }
    scwin.pos_groupCode = ds_bankAcctList.getRowPosition();
    await $c.sbm.execute($p, sbm_cancelSusRecv);
  }
};
scwin.f_Delete = async function () {
  let checkCount = 0;
  for (let i = 0; i < ds_bankAcctList.getRowCount(); i++) {
    if (ds_bankAcctList.getCellData(i, "num") == "T" && ds_bankAcctList.getCellData(i, "inoutGubun") == "1") {
      await $c.gus.cfAlertMsg($p, "출금은 삭제 처리 할 수  없습니다.\n선택하신 항목을 확인하시기 바랍니다.");
      return;
    }
    if (ds_bankAcctList.getCellData(i, "num") == "T") {
      if (ds_bankAcctList.getCellData(i, "susRecvInitamtOutbrNo").trim() != "") {
        await $c.gus.cfAlertMsg($p, "가수등록된 가수금은 삭제 하실 수 없습니다.가수취소후 삭제하시기 바랍니다.");
        return;
      }
    }
    if (ds_bankAcctList.getCellData(i, "num") == "T" && ds_bankAcctList.getCellData(i, "delYn") == "1") {
      await $c.gus.cfAlertMsg($p, "삭제 대상이 아닙니다.\n선택하신 항목을 확인하시기 바랍니다.");
      return;
    }
    if (ds_bankAcctList.getCellData(i, "num") == "T") {
      checkCount++;
    }
  }
  if (checkCount <= 0) {
    await $c.gus.cfAlertMsg($p, "선택하신 사항이 없습니다.");
    return;
  }
  let confirmChk = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmChk) {
    if (lc_bankbookCls.getValue() == "01") {
      sbm_deleteSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.DeleteBankAccountTransactionContentsCMD.do";
    }
    if (lc_bankbookCls.getValue() == "02") {
      sbm_deleteSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.DeleteForeignCurrencyBankAccountTransactionContentsCMD.do";
    }
    scwin.pos_groupCode = ds_bankAcctList.getRowPosition();
    await $c.sbm.execute($p, sbm_deleteSusRecv);
  }
};
scwin.f_Cancel_Delete = async function () {
  let checkCount = 0;
  for (let i = 0; i < ds_bankAcctList.getRowCount(); i++) {
    if (ds_bankAcctList.getCellData(i, "num") == "T" && ds_bankAcctList.getCellData(i, "delYn") == "0") {
      await $c.gus.cfAlertMsg($p, "삭제취소 대상이 아닙니다.\n선택하신 항목을 확인하시기 바랍니다.");
      return;
    }
    if (ds_bankAcctList.getCellData(i, "num") == "T") {
      checkCount++;
    }
  }
  if (checkCount <= 0) {
    await $c.gus.cfAlertMsg($p, "선택하신 사항이 없습니다.");
    return;
  }
  let confirmChk = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmChk) {
    if (lc_bankbookCls.getValue() == "01") {
      sbm_deletecancelSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.CancelBankAccountTransactionContentsDeleteCMD.do";
    }
    if (lc_bankbookCls.getValue() == "02") {
      sbm_deletecancelSusRecv.action = "/ac.fm.collmoneymgnt.rcptmgnt.CancelForeignCurrencyBankAccountTransactionContentsDeleteCMD.do";
    }
    scwin.pos_groupCode = ds_bankAcctList.getRowPosition();
    await $c.sbm.execute($p, sbm_deletecancelSusRecv);
  }
};
scwin.f_Excel = async function () {
  let confirmChk = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (confirmChk) {
    $c.data.downloadGridViewExcel($p, gr_bankAcctList, {
      fileName: "자동가수처리조회.xlsx",
      sheetName: "자동가수처리"
    });
  }
};
scwin.f_Upload1 = function () {
  ds_excelOrgin.removeAll();
  ds_excelTemp.removeAll();
  ds_excelData.removeAll();
  // TODO: fileUploadGDS 기반 엑셀 파일 로딩 → ds_excelOrgin에 데이터 적재 (GAUCE cfDrmUploadFile 대체 필요)
  $c.gus.cfProgressWinOpen($p);
  $p.setTimeout(function () {
    scwin.f_upload();
  }, {
    "delay": 1000
  });
};
scwin.f_upload = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_coCd]);
  if (!chk) {
    return;
  }
  if (lc_bankCombo.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "은행을 선택해주세요.");
    return;
  }
  if (ds_excelOrgin.getRowCount() == 0) {
    $c.gus.cfProgressWinClose($p);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  ds_excelTemp.removeAll();
  for (let r = 0; r < ds_excelOrgin.getRowCount(); r++) {
    ds_excelTemp.insertRow(r);
    for (let c = 1; c <= 10; c++) {
      ds_excelTemp.setCellData(r, "text" + c, ds_excelOrgin.getCellData(r, "text" + c));
    }
  }
  let selIdx = lc_bankbookCombo.getSelectedIndex();
  let crcCd = "";
  if (selIdx >= 0) {
    crcCd = ds_bankbookCombo.getCellData(selIdx, "crcCd");
  }
  if (crcCd == "KRW") {
    scwin.f_reloadExcelByBank();
  } else {
    scwin.f_reloadExcelByBankForeign();
  }
};
scwin.f_checkDigit = function (str) {
  if (/^[0-9].*$/.test(str)) {
    return true;
  } else {
    return false;
  }
};
scwin.f_reloadExcelByBank = async function () {
  if (ds_excelTemp.getRowCount() > 0) {
    let dataCnt = 0;
    let bankCd = lc_bankCombo.getValue();
    let bankNm = lc_bankCombo.getText();
    let excelCol = scwin.f_getBankColInfo(bankCd);
    if (excelCol == null) {
      $c.gus.cfProgressWinClose($p);
      await $c.gus.cfAlertMsg($p, "엑셀업로드 처리가능하지 않은 은행입니다.");
      return;
    }
    if (bankCd == "100000EY") {
      let dataStartIndex = Number(excelCol[0]) - 1;
      let colAcctTxday = "text" + excelCol[1];
      let colTxGubun = "text" + excelCol[2];
      let colTxAmt = "text" + excelCol[3];
      let colTxCurBal = "text" + excelCol[4];
      let colJeokyo = "text" + excelCol[5];
      let acctNo = "";
      for (let i = 0; i < ds_excelTemp.getRowCount(); i++) {
        if (ds_excelTemp.getCellData(i, "text1") != "" && i + 1 >= dataStartIndex) {
          let inoutGubun = "";
          let txGubun = ds_excelTemp.getCellData(i, colTxGubun).trim();
          let txAmt = ds_excelTemp.getCellData(i, colTxAmt).trim().replace(/,/g, "");
          let txCurBal = ds_excelTemp.getCellData(i, colTxCurBal).trim().replace(/,/g, "");
          let acctTxday = ds_excelTemp.getCellData(i, colAcctTxday).trim().substring(0, 10).replace(/\./g, "").substring(0, 10).replace(/\./g, "").substring(0, 10).replace(/-/g, "").replace(/\//gi, "");
          let jeokyo = ds_excelTemp.getCellData(i, colJeokyo).trim();
          if (txGubun == "출금") {
            inoutGubun = "1";
          } else if (txGubun == "입금") {
            inoutGubun = "2";
          }
          if (!scwin.f_checkDigit(txAmt)) {
            $c.gus.cfProgressWinClose($p);
            await $c.gus.cfAlertMsg($p, "입출금 금액에 숫자가 아닌 형식이 있습니다. \n또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) \n엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (i + 2) + "행)");
            break;
          }
          if (!scwin.f_checkDigit(txCurBal)) {
            $c.gus.cfProgressWinClose($p);
            await $c.gus.cfAlertMsg($p, "잔액에 숫자가 아닌 형식이 있습니다. \n또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) \n엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (i + 2) + "행)");
            break;
          }
          if (!scwin.f_checkDigit(acctTxday)) {
            $c.gus.cfProgressWinClose($p);
            await $c.gus.cfAlertMsg($p, "날짜형식이 잘못되었습니다. \n또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) \n엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (i + 2) + "행)");
            break;
          }
          if (inoutGubun != "") {
            let newRow = ds_excelData.insertRow(ds_excelData.getRowCount());
            ds_excelData.setCellData(newRow, "bankCd", bankCd);
            ds_excelData.setCellData(newRow, "txAmt", txAmt);
            ds_excelData.setCellData(newRow, "inoutGubun", inoutGubun);
            ds_excelData.setCellData(newRow, "txCurBal", txCurBal);
            ds_excelData.setCellData(newRow, "acctTxday", acctTxday);
            ds_excelData.setCellData(newRow, "jeokyo", jeokyo);
            dataCnt++;
          }
        }
      }
    } else {
      let acctNoIndex = Number(excelCol[0]) - 1;
      let dataStartIndex = Number(excelCol[1]) - 1;
      let colAcctNo = "text" + excelCol[2];
      let colAcctTxday = "text" + excelCol[3];
      let colTxAmt1 = "text" + excelCol[4];
      let colTxAmt2 = "text" + excelCol[5];
      let colTxCurBal = "text" + excelCol[6];
      let colJeokyo = "text" + excelCol[7];
      let acctNo = "";
      for (let i = 0; i < ds_excelTemp.getRowCount(); i++) {
        if (ds_excelTemp.getCellData(i, "text1") != "" && i + 1 >= dataStartIndex) {
          let inoutGubun = "";
          let txAmt = 0;
          let txAmt1 = ds_excelTemp.getCellData(i, colTxAmt1).trim().replace(/,/g, "");
          let txAmt2 = ds_excelTemp.getCellData(i, colTxAmt2).trim().replace(/,/g, "");
          let txCurBal = ds_excelTemp.getCellData(i, colTxCurBal).trim().replace(/,/g, "");
          let acctTxday = ds_excelTemp.getCellData(i, colAcctTxday).trim().substring(0, 10).replace(/\./g, "").substring(0, 10).replace(/\./g, "").substring(0, 10).replace(/-/g, "").replace(/\//gi, "");
          let jeokyo = ds_excelTemp.getCellData(i, colJeokyo).trim();
          if (Number(txAmt1) != 0) {
            inoutGubun = "1";
            txAmt = txAmt1;
          } else if (Number(txAmt2) != 0) {
            inoutGubun = "2";
            txAmt = txAmt2;
          }
          if (!scwin.f_checkDigit(txAmt)) {
            $c.gus.cfProgressWinClose($p);
            await $c.gus.cfAlertMsg($p, "입출금 금액에 숫자가 아닌 형식이 있습니다. \n또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) \n엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (i + 2) + "행)");
            break;
          }
          if (!scwin.f_checkDigit(txCurBal)) {
            $c.gus.cfProgressWinClose($p);
            await $c.gus.cfAlertMsg($p, "잔액에 숫자가 아닌 형식이 있습니다. \n또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) \n엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (i + 2) + "행)");
            break;
          }
          if (!scwin.f_checkDigit(acctTxday)) {
            $c.gus.cfProgressWinClose($p);
            await $c.gus.cfAlertMsg($p, "날짜형식이 잘못되었습니다. \n또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) \n엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (i + 2) + "행)");
            break;
          }
          if (inoutGubun != "") {
            let newRow = ds_excelData.insertRow(ds_excelData.getRowCount());
            ds_excelData.setCellData(newRow, "bankCd", bankCd);
            ds_excelData.setCellData(newRow, "txAmt", txAmt);
            ds_excelData.setCellData(newRow, "inoutGubun", inoutGubun);
            ds_excelData.setCellData(newRow, "txCurBal", txCurBal);
            ds_excelData.setCellData(newRow, "acctTxday", acctTxday);
            ds_excelData.setCellData(newRow, "jeokyo", jeokyo);
            dataCnt++;
          }
        }
      }
    }
  }
  $c.gus.cfProgressWinClose($p);
  if (ds_excelData.getRowCount() > 0) {
    await $c.gus.cfAlertMsg($p, "업로드가 완료되었습니다.");
  }
  // TODO: ex_totalRows 총건수 표시 (body에 해당 textbox id 필요)
};
scwin.f_reloadExcelByBankForeign = async function () {
  if (ds_excelTemp.getRowCount() > 0) {
    let dataCnt = 0;
    let bankCd = lc_bankCombo.getValue();
    let bankNm = lc_bankCombo.getText();
    let excelCol = scwin.f_getBankColInfoForeign(bankCd);
    if (excelCol == null) {
      $c.gus.cfProgressWinClose($p);
      await $c.gus.cfAlertMsg($p, "엑셀업로드 처리가능하지 않은 은행입니다.");
      return;
    }
    if (bankCd == "10000003" || bankCd == "10000081") {
      let acctNoIndex = Number(excelCol[0]) - 1;
      let dataStartIndex = Number(excelCol[1]) - 1;
      let colAcctNo = "text" + excelCol[2];
      let colAcctTxday = "text" + excelCol[3];
      let colTxAmt1 = "text" + excelCol[4];
      let colTxAmt2 = "text" + excelCol[5];
      let colTxCurBal = "text" + excelCol[6];
      let colJeokyo = "text" + excelCol[7];
      let colCurrCd = "text" + excelCol[8];
      let acctNo = "";
      for (let i = 0; i < ds_excelTemp.getRowCount(); i++) {
        if (ds_excelTemp.getCellData(i, "text1") != "" && i + 1 >= dataStartIndex) {
          let inoutGubun = "";
          let txAmtFcrc = 0;
          let txAmt1 = ds_excelTemp.getCellData(i, colTxAmt1).trim().replace(/,/g, "");
          let txAmt2 = ds_excelTemp.getCellData(i, colTxAmt2).trim().replace(/,/g, "");
          let txCurBal = ds_excelTemp.getCellData(i, colTxCurBal).trim().replace(/,/g, "");
          let acctTxday = ds_excelTemp.getCellData(i, colAcctTxday).trim().substring(0, 10).replace(/\./g, "").substring(0, 10).replace(/\./g, "").substring(0, 10).replace(/-/g, "").replace(/\//gi, "");
          let jeokyo = ds_excelTemp.getCellData(i, colJeokyo).trim();
          let currCd = ds_excelTemp.getCellData(i, colCurrCd).trim();
          if (Number(txAmt1) != 0) {
            inoutGubun = "1";
            txAmtFcrc = txAmt1;
          } else if (Number(txAmt2) != 0) {
            inoutGubun = "2";
            txAmtFcrc = txAmt2;
          }
          if (!scwin.f_checkDigit(txAmtFcrc)) {
            $c.gus.cfProgressWinClose($p);
            await $c.gus.cfAlertMsg($p, "입출금 금액에 숫자가 아닌 형식이 있습니다. \n또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) \n엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (i + 2) + "행)");
            break;
          }
          if (!scwin.f_checkDigit(txCurBal)) {
            $c.gus.cfProgressWinClose($p);
            await $c.gus.cfAlertMsg($p, "잔액에 숫자가 아닌 형식이 있습니다. \n또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) \n엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (i + 2) + "행)");
            break;
          }
          if (!scwin.f_checkDigit(acctTxday)) {
            $c.gus.cfProgressWinClose($p);
            await $c.gus.cfAlertMsg($p, "날짜형식이 잘못되었습니다. \n또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) \n엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (i + 2) + "행)");
            break;
          }
          if (inoutGubun != "") {
            let newRow = ds_excelData.insertRow(ds_excelData.getRowCount());
            ds_excelData.setCellData(newRow, "bankCd", bankCd);
            ds_excelData.setCellData(newRow, "txAmtFcrc", txAmtFcrc);
            ds_excelData.setCellData(newRow, "inoutGubun", inoutGubun);
            ds_excelData.setCellData(newRow, "txCurBal", txCurBal);
            ds_excelData.setCellData(newRow, "acctTxday", acctTxday);
            ds_excelData.setCellData(newRow, "jeokyo", jeokyo);
            ds_excelData.setCellData(newRow, "currCd", currCd);
            dataCnt++;
          }
        }
      }
    } else if (bankCd == "100000AB") {
      let acctNoIndex = Number(excelCol[0]) - 1;
      let dataStartIndex = Number(excelCol[2]) - 1;
      let acctNo = "";
      for (let i = 0; i < ds_excelTemp.getRowCount(); i++) {
        let inoutGubun = "";
        let txAmtFcrc = 0;
        let txAmt1 = ds_excelTemp.getCellData(i, "text5").trim().replace(/,/g, "");
        let txAmt2 = ds_excelTemp.getCellData(i, "text6").trim().replace(/,/g, "");
        let txCurBal = ds_excelTemp.getCellData(i, "text8").trim().replace(/,/g, "");
        let acctTxday = ds_excelTemp.getCellData(i, "text2").trim().substring(0, 10).replace("/", "").substring(0, 10).replace("/", "").substring(0, 10).replace("/", "").replace("/", "");
        let jeokyo = ds_excelTemp.getCellData(i, "text4").trim();
        let currCd = "USD";
        let year = acctTxday.slice(-4);
        let month = ds_excelTemp.getCellData(i, "text2").trim().substring(0, 2).replace("/", "");
        let day = ds_excelTemp.getCellData(i, "text2").trim().slice(-7).replace("/", "").slice(-6, -4).replace("/", "");
        acctTxday = year + ("00" + month.toString()).slice(-2) + ("00" + day.toString()).slice(-2);
        if (Number(txAmt1) != 0) {
          inoutGubun = "1";
          txAmtFcrc = txAmt1;
        } else if (Number(txAmt2) != 0) {
          inoutGubun = "2";
          txAmtFcrc = txAmt2;
        }
        if (!scwin.f_checkDigit(txAmtFcrc)) {
          $c.gus.cfProgressWinClose($p);
          await $c.gus.cfAlertMsg($p, "입출금 금액에 숫자가 아닌 형식이 있습니다. \n또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) \n엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (i + 2) + "행)");
          break;
        }
        if (!scwin.f_checkDigit(txCurBal)) {
          $c.gus.cfProgressWinClose($p);
          await $c.gus.cfAlertMsg($p, "잔액에 숫자가 아닌 형식이 있습니다. \n또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) \n엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (i + 2) + "행)");
          break;
        }
        if (!scwin.f_checkDigit(acctTxday)) {
          $c.gus.cfProgressWinClose($p);
          await $c.gus.cfAlertMsg($p, "날짜형식이 잘못되었습니다. \n또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) \n엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (i + 2) + "행)");
          break;
        }
        if (inoutGubun != "") {
          let newRow = ds_excelData.insertRow(ds_excelData.getRowCount());
          ds_excelData.setCellData(newRow, "bankCd", bankCd);
          ds_excelData.setCellData(newRow, "txAmtFcrc", txAmtFcrc);
          ds_excelData.setCellData(newRow, "inoutGubun", inoutGubun);
          ds_excelData.setCellData(newRow, "txCurBal", txCurBal);
          ds_excelData.setCellData(newRow, "acctTxday", acctTxday);
          ds_excelData.setCellData(newRow, "jeokyo", jeokyo);
          ds_excelData.setCellData(newRow, "currCd", currCd);
          dataCnt++;
        }
      }
    } else {
      let acctNoIndex = Number(excelCol[0]) - 1;
      let dataStartIndex = Number(excelCol[1]) - 1;
      let colAcctNo = "text" + excelCol[2];
      let colAcctTxday = "text" + excelCol[3];
      let colInoutGubun = "text" + excelCol[4];
      let colTxAmtFcrc = "text" + excelCol[5];
      let colTxCurBal = "text" + excelCol[6];
      let colJeokyo = "text" + excelCol[7];
      let colCurrCd = "text" + excelCol[8];
      let acctNo = "";
      for (let i = 0; i < ds_excelTemp.getRowCount(); i++) {
        if (ds_excelTemp.getCellData(i, "text1") != "" && i + 1 >= dataStartIndex) {
          let txAmtFcrc = ds_excelTemp.getCellData(i, colTxAmtFcrc).trim().replace(/,/g, "");
          let txCurBal = ds_excelTemp.getCellData(i, colTxCurBal).trim().replace(/,/g, "");
          let acctTxday = ds_excelTemp.getCellData(i, colAcctTxday).trim().substring(0, 10).replace(/\./g, "").substring(0, 10).replace(/\./g, "").substring(0, 10).replace(/-/g, "").replace(/\//gi, "");
          let jeokyo = ds_excelTemp.getCellData(i, colJeokyo).trim().replace(/\?/g, "");
          let currCd = ds_excelTemp.getCellData(i, colCurrCd).trim();
          let inoutGubun = ds_excelTemp.getCellData(i, colInoutGubun).trim().replace(/\?/g, "");
          let inoutlength = inoutGubun.length;
          let inoutGubunCheck = inoutGubun.substring(inoutlength - 2, inoutlength);
          if (inoutGubunCheck == "출금") {
            inoutGubun = "1";
          } else if (inoutGubunCheck == "입금") {
            inoutGubun = "2";
          }
          if (!scwin.f_checkDigit(txAmtFcrc)) {
            $c.gus.cfProgressWinClose($p);
            await $c.gus.cfAlertMsg($p, "입출금 금액에 숫자가 아닌 형식이 있습니다. \n또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) \n엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (i + 2) + "행)");
            break;
          }
          if (!scwin.f_checkDigit(txCurBal)) {
            $c.gus.cfProgressWinClose($p);
            await $c.gus.cfAlertMsg($p, "잔액에 숫자가 아닌 형식이 있습니다. \n또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) \n엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (i + 2) + "행)");
            break;
          }
          if (!scwin.f_checkDigit(acctTxday)) {
            $c.gus.cfProgressWinClose($p);
            await $c.gus.cfAlertMsg($p, "날짜형식이 잘못되었습니다. \n또는 계좌번호를 확인해주세요(원화/외화 통화코드 확인) \n엑셀파일 확인 후 다시 올려주세요. (엑셀파일 " + (i + 2) + "행)");
            break;
          }
          if (inoutGubun != "") {
            let newRow = ds_excelData.insertRow(ds_excelData.getRowCount());
            ds_excelData.setCellData(newRow, "bankCd", bankCd);
            ds_excelData.setCellData(newRow, "txAmtFcrc", txAmtFcrc);
            ds_excelData.setCellData(newRow, "inoutGubun", inoutGubun);
            ds_excelData.setCellData(newRow, "txCurBal", txCurBal);
            ds_excelData.setCellData(newRow, "acctTxday", acctTxday);
            ds_excelData.setCellData(newRow, "jeokyo", jeokyo);
            ds_excelData.setCellData(newRow, "currCd", currCd);
            dataCnt++;
          }
        }
      }
    }
  }
  $c.gus.cfProgressWinClose($p);
  if (ds_excelData.getRowCount() > 0) {
    await $c.gus.cfAlertMsg($p, "업로드가 완료되었습니다.");
  }
  // TODO: ex_totalRows 총건수 표시
};
scwin.f_getBankColInfo = function (bankCd) {
  let excelCol;
  if (bankCd == "10000004") {
    if (scwin.vLoginCoCd == "004") {
      excelCol = [1, 8, 1, 2, 5, 6, 7, 4];
    } else {
      excelCol = [2, 7, 1, 2, 5, 6, 7, 4];
    }
  } else if (bankCd == "10000020") {
    excelCol = [2, 5, 1, 2, 5, 6, 7, 4];
  } else if (bankCd == "10000081") {
    excelCol = [4, 8, 2, 1, 5, 4, 6, 2];
  } else if (bankCd == "10000088") {
    excelCol = [2, 3, 2, 1, 4, 3, 6, 5];
  } else if (bankCd == "10000005") {
    excelCol = [3, 7, 1, 2, 7, 6, 8, 3];
  } else if (bankCd == "10000003") {
    excelCol = [3, 7, 1, 2, 3, 4, 5, 6];
  } else if (bankCd == "10000002") {
    excelCol = [9, 15, 1, 1, 3, 4, 5, 2];
  } else if (bankCd == "10000012") {
    excelCol = [6, 11, 3, 2, 3, 4, 5, 7];
  } else if (bankCd == "100000EY") {
    excelCol = [2, 1, 3, 4, 5, 6];
  } else {
    return null;
  }
  return excelCol;
};
scwin.f_getBankColInfoForeign = function (bankCd) {
  let excelCol;
  if (bankCd == "10000004") {
    excelCol = [2, 6, 1, 1, 2, 4, 5, 6, 3];
  } else if (bankCd == "10000003") {
    excelCol = [3, 5, 1, 2, 5, 4, 6, 7, 3];
  } else if (bankCd == "10000081") {
    excelCol = [4, 8, 1, 1, 6, 5, 7, 3, 4];
  } else if (bankCd == "100000AB") {
    excelCol = [1, 2, 1, 2, 6, 5, 8, 4, 0];
  } else {
    return null;
  }
  return excelCol;
};
scwin.f_saveExcel = async function () {
  if (ds_excelData.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, "업로드된 내역이 없습니다.");
    return;
  }
  if (lc_bankbookCombo.getValue() == "") {
    await $c.win.alert($p, "계좌번호를 선택해주세요.");
    return;
  }
  let confirmChk = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmChk) {
    for (let i = 0; i < ds_excelData.getRowCount(); i++) {
      ds_excelData.setCellData(i, "regId", scwin.userid);
      ds_excelData.setCellData(i, "modId", scwin.userid);
    }
    scwin.f_ProcessBindingAdd();
    scwin.pos_groupCode = ds_excelData.getRowPosition();
    let selIdx = lc_bankbookCombo.getSelectedIndex();
    let crcCd = "";
    if (selIdx >= 0) {
      crcCd = ds_bankbookCombo.getCellData(selIdx, "crcCd");
    }
    if (crcCd == "KRW") {
      await $c.sbm.execute($p, sbm_saveExcel);
    } else {
      await $c.sbm.execute($p, sbm_saveExcelForeign);
    }
  }
};
scwin.f_CheckFileExt = function (ext, path) {
  ext = ext.toUpperCase();
  path = path.toUpperCase();
  let elen = ext.length;
  let flen = path.length;
  return ext == path.substring(flen - elen, flen);
};
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  let rtnList = await $c.gus.cfCommonPopUp($p, "retrieveDongbuGroupCompanyInfo", ed_coCd.getValue(), txt_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (scwin.ed_coCd_hidVal != rtnList[0]) {
      scwin.f_initObj();
    }
    ed_coCd.setValue(rtnList[0]);
    txt_coNm.setValue(rtnList[5]);
    scwin.ed_coCd_hidVal = rtnList[0];
    scwin.txtCoClsCd = rtnList[1];
  } else {
    ed_coCd.setValue("");
    txt_coNm.setValue("");
    scwin.ed_coCd_hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > scwin.CO_CLS_CD_DONGBU) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};
scwin.ed_coCd_hidVal = "";
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [txt_bankbookNo, txt_bankbookNm]);
};
scwin.f_setCompanyInfo = async function () {
  if (scwin.vUserHomeClsCd != scwin.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = scwin.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = scwin.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  await scwin.f_PopUpCompanyInfo("T");
  scwin.f_enableCompanyInfo();
};
scwin.f_enableCompanyInfo = function () {
  // TODO: privAdmin 값은 서버에서 가져와야 함
  let privAdmin = "F";
  if (privAdmin == "T" || !scwin.isSubCompany) {
    $c.gus.cfEnableObjects($p, [ed_coCd, txt_coNm]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, txt_coNm]);
  }
};
scwin.f_set_bankbookCombo = async function () {
  let chk = await $c.gus.cfValidate($p, [ica_FromDate, ica_ToDate]);
  if (!chk) {
    return;
  }
  scwin.f_ProcessBinding();
  ds_bankbookCombo.removeAll();
  await $c.sbm.execute($p, sbm_bankbookCombo);
};
scwin.sbm_searchBankAccount_submitdone = async function (e) {
  let rowCnt = ds_bankAcctList.getRowCount();
  // TODO: totalRows 총건수 표시

  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_searchBankAccount_submiterror = async function (e) {
  await $c.gus.cfAlertMsg($p, e.errorMsg);
};
scwin.sbm_saveSusRecv_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await scwin.f_Retrieve();
};
scwin.sbm_saveSusRecv_submiterror = async function (e) {
  await $c.gus.cfAlertMsg($p, e.errorMsg);
  await scwin.f_Retrieve();
};
scwin.sbm_cancelSusRecv_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await scwin.f_Retrieve();
};
scwin.sbm_cancelSusRecv_submiterror = async function (e) {
  await $c.gus.cfAlertMsg($p, e.errorMsg);
  await scwin.f_Retrieve();
};
scwin.sbm_deleteSusRecv_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await scwin.f_Retrieve();
};
scwin.sbm_deleteSusRecv_submiterror = async function (e) {
  await $c.gus.cfAlertMsg($p, e.errorMsg);
  await scwin.f_Retrieve();
};
scwin.sbm_deletecancelSusRecv_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  await scwin.f_Retrieve();
};
scwin.sbm_deletecancelSusRecv_submiterror = async function (e) {
  await $c.gus.cfAlertMsg($p, e.errorMsg);
  await scwin.f_Retrieve();
};
scwin.sbm_saveExcel_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  ds_excelData.removeAll();
  await scwin.f_Retrieve();
};
scwin.sbm_saveExcel_submiterror = async function (e) {
  await $c.gus.cfAlertMsg($p, e.errorMsg);
  ds_excelData.removeAll();
  await scwin.f_Retrieve();
};
scwin.sbm_saveExcelForeign_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  ds_excelData.removeAll();
  await scwin.f_Retrieve();
};
scwin.sbm_saveExcelForeign_submiterror = async function (e) {
  await $c.gus.cfAlertMsg($p, e.errorMsg);
  ds_excelData.removeAll();
  await scwin.f_Retrieve();
};
scwin.sbm_savePayDecide_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
};
scwin.sbm_savePayDecide_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_bankCombo_submitdone = function (e) {};
scwin.sbm_bankCombo_submiterror = function (e) {};
scwin.sbm_bankbookCombo_submitdone = function (e) {
  let rowCnt = ds_bankbookCombo.getRowCount();
  if (rowCnt == 0) {
    lc_bankbookCombo.removeAll();
    lc_bankbookCombo.addItem("없음", "");
    lc_bankbookCombo.setSelectedIndex(0);
  } else {
    lc_bankbookCombo.removeAll();
    for (let i = 0; i < ds_bankbookCombo.getRowCount(); i++) {
      let crcCd = ds_bankbookCombo.getCellData(i, "crcCd");
      let bankAcntNo = ds_bankbookCombo.getCellData(i, "bankAcntNo");
      lc_bankbookCombo.addItem(bankAcntNo, bankAcntNo);
    }
    let selIdx = lc_bankbookCombo.getSelectedIndex();
    if (selIdx >= 0 && selIdx < ds_bankbookCombo.getRowCount()) {
      let crcCd = ds_bankbookCombo.getCellData(selIdx, "crcCd");
      if (crcCd == "KRW") {
        gr_Tmp_UpExcel.setColumnVisible("currCd", false);
        gr_Tmp_UpExcel.setColumnVisible("txAmtFcrc", false);
        gr_Tmp_UpExcel.setColumnVisible("txAmt", true);
      } else {
        gr_Tmp_UpExcel.setColumnVisible("currCd", true);
        gr_Tmp_UpExcel.setColumnVisible("txAmtFcrc", true);
        gr_Tmp_UpExcel.setColumnVisible("txAmt", false);
      }
    }
  }
};
scwin.sbm_bankbookCombo_submiterror = function (e) {};
scwin.gr_bankAcctList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    if (columnId == "num") {
      if (ds_bankAcctList.getCellData(rowIndex, "inoutGubun") == "2") {
        if (ds_bankAcctList.getCellData(rowIndex, "num") == "T") {
          ds_bankAcctList.setCellData(rowIndex, "num", "T");
        } else {
          ds_bankAcctList.setCellData(rowIndex, "num", "F");
        }
      } else {
        ds_bankAcctList.setCellData(rowIndex, "num", "F");
      }
    }
    if (columnId == "slipNo") {
      if (ds_bankAcctList.getCellData(rowIndex, "slipNo") != "") {
        $c.gus.cfShowSlipInfo($p, ds_bankAcctList.getCellData(rowIndex, "slipNo"));
      }
    }
  }
};
scwin.gr_bankAcctList_onheaderclick = function (columnIndex, columnId) {
  if (columnId == "num") {
    let allChecked = true;
    for (let i = 0; i < ds_bankAcctList.getRowCount(); i++) {
      if (ds_bankAcctList.getCellData(i, "num") != "T") {
        allChecked = false;
        break;
      }
    }
    if (!allChecked) {
      for (let i = 0; i < ds_bankAcctList.getRowCount(); i++) {
        if (ds_bankAcctList.getCellData(i, "inoutGubun") == "2") {
          ds_bankAcctList.setCellData(i, "num", "T");
        } else {
          ds_bankAcctList.setCellData(i, "num", "F");
        }
      }
    } else {
      for (let i = 0; i < ds_bankAcctList.getRowCount(); i++) {
        ds_bankAcctList.setCellData(i, "num", "F");
      }
    }
  }
};
scwin.lc_bankCombo_onchange = function (e) {
  scwin.f_set_bankbookCombo();
};
scwin.lc_bankbookCombo_onchange = function (e) {
  let selIdx = lc_bankbookCombo.getSelectedIndex();
  if (selIdx >= 0 && selIdx < ds_bankbookCombo.getRowCount()) {
    let crcCd = ds_bankbookCombo.getCellData(selIdx, "crcCd");
    if (crcCd == "KRW") {
      gr_Tmp_UpExcel.setColumnVisible("currCd", false);
      gr_Tmp_UpExcel.setColumnVisible("txAmtFcrc", false);
      gr_Tmp_UpExcel.setColumnVisible("txAmt", true);
    } else {
      gr_Tmp_UpExcel.setColumnVisible("currCd", true);
      gr_Tmp_UpExcel.setColumnVisible("txAmtFcrc", true);
      gr_Tmp_UpExcel.setColumnVisible("txAmt", false);
    }
  }
};
scwin.udc_co_onblurCode = async function () {
  txt_coNm.setValue("");
  await scwin.f_PopUpCompanyInfo("T");
};
scwin.udc_bankbook_onblurCode = async function () {
  await scwin.f_CheckPopUp("txt_bankbookNo", "txt_bankbookNm", "1");
};
scwin.trigger2_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.trigger3_onclick = function (e) {
  scwin.f_batch();
};
scwin.trigger4_onclick = function (e) {
  scwin.f_Forbatch();
};
scwin.trigger15_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.trigger16_onclick = function (e) {
  scwin.f_Save();
};
scwin.trigger17_onclick = function (e) {
  scwin.f_Cancel_Delete();
};
scwin.trigger18_onclick = function (e) {
  scwin.f_Delete();
};
scwin.trigger24_onclick = function (e) {
  scwin.f_saveExcel();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_co',codeId:'ed_coCd',nameId:'txt_coNm',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_Date',edFromId:'ica_FromDate',edToId:'ica_ToDate',refDataMap:'',refEdDt:'',refStDt:'',style:''}},{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통장구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bankbookCls',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_searchBankAccount.bankbookCls'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통장번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_bankbook',codeId:'txt_bankbookNo',nameId:'txt_bankbookNm',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_txnCls',style:'width: 84px;',submenuSize:'fixed',ref:'data:ds_searchBankAccount.txnCls'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'처리구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_procCls',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_searchBankAccount.procCls'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'trigger2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'통장입출금내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{rowNumWidth:'50',visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_bankAcctList',style:'',autoFit:'none',id:'gr_bankAcctList',visibleRowNum:'5',class:'wq_gvw',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'num',value:'',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bankCd',value:'금융기관코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctTxday',value:'거래일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inoutGubun',value:'구분',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'jeokyo',value:'입금자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctNo',value:'계좌번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'bankbookNm',value:'통장번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctTxdaySeq',value:'일련번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'txAmt',value:'금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'txAmtFcrc',value:'금액(외화)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'txCurBal',value:'잔액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'currCd',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'branch',value:'취급점',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'hisHandReg',value:'수기등록여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'hisHandRegday',value:'수기등록일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'susRecvInitamtOutbrNo',value:'가수번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'거래처번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cancelYn',value:'취소',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'delYn',value:'삭제여부',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'등록자ID',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDtm',value:'등록일시',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modId',value:'수정자ID',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modDtm',value:'수정일시',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'coCd',value:'회사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'coClsCd',value:'회사구분코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'num',value:'',displayMode:'label',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bankCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctTxday',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inoutGubun',value:'',displayMode:'label',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'출금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'jeokyo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'bankbookNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctTxdaySeq',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'text',style:'',id:'txAmt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'text',style:'',id:'txAmtFcrc',value:'',displayMode:'label',readOnly:'true',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'text',style:'',id:'txCurBal',value:'',displayMode:'label',readOnly:'true',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'110',inputType:'text',style:'',id:'currCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'branch',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'hisHandReg',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'hisHandRegday',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'susRecvInitamtOutbrNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label',readOnly:'true',class:'underline'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cancelYn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'delYn',value:'',displayMode:'label',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'regDtm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'modId',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'modDtm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'coCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'coClsCd',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column24',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'expression',style:'',id:'column22',value:'',displayMode:'label',expression:'sum(\'txAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'expression',style:'',id:'column21',value:'',displayMode:'label',expression:'sum(\'txAmtFcrc\')',dataType:'float',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'text',style:'',id:'column102',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'110',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column132',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column129',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column126',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column123',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column120',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column117',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column114',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column111',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column108',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'trigger3',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자동(원화)'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'trigger4',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자동(외화)'}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'trigger15',type:'button',class:'btn white'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록취소'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'trigger16',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가수등록'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'trigger17',type:'button',class:'btn white'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제취소'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'trigger18',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'엑셀UPLOAD내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'은행 :',style:'',tagname:'span'}},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bankCombo',style:'width:100px;',submenuSize:'auto'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계좌 :',style:'',tagname:'span'}},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bankbookCombo',style:'width:100px;',submenuSize:'auto',ref:'data:ds_addBankAccount.acctNo'}}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'ds_excelData',id:'gr_Tmp_UpExcel',rowNumWidth:'50',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bankCd',inputType:'text',style:'',value:'금융기관코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctTxday',inputType:'text',style:'',value:'거래일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inoutGubun',inputType:'text',style:'',value:'구분',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'jeokyo',inputType:'text',style:'',value:'입금자명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNo',inputType:'text',style:'',value:'계좌번호',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankbookNm',inputType:'text',style:'',value:'통장번호',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctTxdaySeq',inputType:'text',style:'',value:'일련번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txAmt',inputType:'text',style:'',value:'금액',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txAmtFcrc',inputType:'text',style:'',value:'금액(외화)',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txCurBal',inputType:'text',style:'',value:'잔액',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currCd',inputType:'text',style:'',value:'통화',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'branch',inputType:'text',style:'',value:'취급점',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hisHandReg',inputType:'text',style:'',value:'수기등록여부',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hisHandRegday',inputType:'text',style:'',value:'수기등록일',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'susRecvInitamtOutbrNo',inputType:'text',style:'',value:'가수번호',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'delYn',inputType:'text',style:'',value:'삭제여부',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cancelYn',inputType:'text',style:'',value:'취소',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',style:'',value:'등록자ID',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'등록일시',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modId',inputType:'text',style:'',value:'수정자ID',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modDtm',inputType:'text',style:'',value:'수정일시',width:'100',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bankCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctTxday',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inoutGubun',inputType:'text',style:'',value:'',width:'100',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'출금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'jeokyo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNo',inputType:'text',style:'',value:'',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankbookNm',inputType:'text',style:'',value:'',width:'130',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctTxdaySeq',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'150',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txAmtFcrc',inputType:'text',style:'',textAlign:'right',value:'',width:'150',readOnly:'true',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'txCurBal',inputType:'text',style:'',textAlign:'right',value:'',width:'150',readOnly:'true',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currCd',inputType:'text',style:'',textAlign:'center',value:'',width:'110',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'branch',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hisHandReg',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hisHandRegday',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'susRecvInitamtOutbrNo',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'delYn',inputType:'text',style:'',value:'',width:'70',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'cancelYn',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modId',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modDtm',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',textAlign:'right',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',textAlign:'right',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column102',inputType:'text',style:'',textAlign:'right',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column99',inputType:'text',style:'',textAlign:'right',value:'',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column96',inputType:'text',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column93',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column90',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column87',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column126',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column123',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column120',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column117',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column114',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column111',inputType:'text',style:'',value:'',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'trigger24',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]}]})