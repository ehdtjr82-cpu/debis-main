/*amd /AI/fi_201_01_09b.xml 61619 6f5d9da3ecdfd6c373a3400ee4742709c0a3e52083c235cc143f94c0d64930da */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_txn'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCd',name:'전표귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptNm',name:'전표귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'작성사원번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_exchRtSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'기준일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exchRtSearch'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDt',name:'기준일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txncontents',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnNo',name:'거래번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnContSeq',name:'거래내역순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'증빙구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'공제구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'관리거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'관리거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnNm',name:'사업자등록명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnDt',name:'거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',name:'관리사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDt',name:'관리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',name:'관리기간시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',name:'관리기간종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'부가세신고코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',name:'부가세신고명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatCrn',name:'부가세사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchCrn',name:'가맹점사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchNm',name:'가맹점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDistYn',name:'계정배부여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNo',name:'카드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNm',name:'카드이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmAcctDeptCd',name:'정산귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmAcctDeptNm',name:'정산귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClntNo',name:'정산거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClntNm',name:'정산거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termMgntYn',name:'기간관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empMgntYn',name:'사원관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtMgntYn',name:'일자관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizMgntYn',name:'사업자관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'부가세여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNoYn',name:'카드번호여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchNoYn',name:'가맹점번호여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsYn',name:'공제구분여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'limitAmt',name:'한도금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardKndCd',name:'카드종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'비용구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntYn',name:'거래처관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'전표귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'전표귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회계_회사구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'소속자회사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxClsCd',name:'영세구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidac'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'txnNo',name:'거래번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnContSeq',name:'거래내역순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'evidEchAcctSeq',name:'증빙별계정순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'비용구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidClsCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'COL1',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL2',name:'명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL9',name:'COL9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipNo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exchRt'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdExchRt',name:'기준환율',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_getMaxCloseYm'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CloseYm',name:'마감년월',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.gnrlaccount.slipmgnt.ProcessSubsidiarySellSlipCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_txn","key":"IN_DS1"},{"id":"ds_txncontents","key":"IN_DS2"},{"id":"ds_evidac","key":"IN_DS3"},{"id":"ds_slipNo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_slipNo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_exchRt',action:'/ac.fm.stdinfomgnt.RetrieveExchangeRateCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_exchRtSearch","key":"IN_DS1"},{"id":"ds_exchRt","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_exchRt","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_exchRt_submitdone','ev:submiterror':'scwin.sbm_exchRt_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_getMaxCloseYm_submitdone','ev:submiterror':'scwin.sbm_getMaxCloseYm_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_evidClsCd',action:'/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=retrieveEvidInfo&param3=PCHS',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_evidClsCd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_evidClsCd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_evidClsCd_submitdone','ev:submiterror':'scwin.sbm_evidClsCd_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.state = "Y";
scwin.delflag = "N";
scwin.slipKndCd = "";
scwin.userHomeClsCd = "";
scwin.vCoCd = "";
scwin.slipKndNm = "경비전표";
scwin.slipDt = "";
scwin.vAcctYn = "";
scwin.vUpperAcctDeptCd = "";
scwin.vBizDomCd = "";
scwin.varCostClsCd = "";
scwin.gBizDomCdClsCd = "";
scwin.rltSeq = 0;
scwin.rowCopyYn = 0;
scwin.vCopyYn = 0;
scwin.vCoClsCd = "";
scwin.vUserHomeClsCd = "";
scwin.isSubCompany = false;
scwin.acctDeptCdSub = "00698";
scwin.acctDeptNmSub = "인천북항 (타법인)";
scwin.txt_rltSeq = "";
scwin.txt_vatYn = "";
scwin.txt_frchNoYn = "";
scwin.txt_deductClsYn = "";
scwin.txt_limitAmt = "";
scwin.txt_frchCrn = "";
scwin.txt_frchNm = "";
scwin.txt_termMgntYn = "";
scwin.txt_clntMgntYn = "";
scwin.txt_dtMgntYn = "";
scwin.txt_bizMgntYn = "";
scwin.txt_amt = "";
scwin.txt_empMgntYn = "";
scwin.txt_costClsCd = "";
scwin.txt_acctClsCd = "";
scwin.txt_bizDomCd = "";
scwin.txt_evidClsNm = "";
scwin.txtCoCd = "";
scwin.txtCoClsCd = "";
scwin.certiNo = "";
scwin.crn = "";
scwin.crnNm = "";
scwin.spplyAmt = "";
scwin.vat = "";
scwin.bilgClntNo = "";
scwin.bilgClntNm = "";
scwin.summary = "";
scwin.spplyDt = "";
scwin.acctYn = "";
scwin.KOREA_WON = "KRW";
scwin.SUBSIDIARY_USER_HOME_CLS_CD = "SA";
scwin.CO_CD_DONGBU = "000";
scwin.CO_CLS_CD_DONGBU = "0";
scwin.strToDate = "";
scwin.hidVal_slipAcctDeptCd = "";
scwin.hidVal_crn = "";
scwin.hidVal_acctCd = "";
scwin.hidVal_acctDeptCd = "";
scwin.hidVal_vatDeclarAcctDeptCd = "";
scwin.hidVal_mgntEmpNo = "";
scwin.hidVal_mgntClntNo = "";
scwin.txt_vatCrn = "";
scwin.onpageload = async function () {
  scwin.params = $c.data.getParameter($p);
  scwin.certiNo = scwin.params && scwin.params["certiNo"] ? scwin.params["certiNo"] : "";
  scwin.crn = scwin.params && scwin.params["crn"] ? scwin.params["crn"] : "";
  scwin.crnNm = scwin.params && scwin.params["crnNm"] ? scwin.params["crnNm"] : "";
  scwin.spplyAmt = scwin.params && scwin.params["spplyAmt"] ? scwin.params["spplyAmt"] : "";
  scwin.vat = scwin.params && scwin.params["vat"] ? scwin.params["vat"] : "";
  scwin.bilgClntNo = scwin.params && scwin.params["bilgClntNo"] ? scwin.params["bilgClntNo"] : "";
  scwin.bilgClntNm = scwin.params && scwin.params["bilgClntNm"] ? scwin.params["bilgClntNm"] : "";
  scwin.summary = scwin.params && scwin.params["summary"] ? scwin.params["summary"] : "";
  scwin.spplyDt = scwin.params && scwin.params["spplyDt"] ? scwin.params["spplyDt"] : "";
  scwin.slipDt = scwin.params && scwin.params["slipDt"] ? scwin.params["slipDt"] : "";
  scwin.vAcctYn = scwin.params && scwin.params["acctYn"] ? scwin.params["acctYn"] : "";
  scwin.slipKndCd = $c.ses.getConstant("SLIPKNDCD_SUB_COMPANY_SELL") || "";
  scwin.userHomeClsCd = $c.ses.getUserHomeClsCd() || "";
  scwin.vCoCd = $c.ses.getCoCd() || "";
  scwin.vCoClsCd = $c.ses.getCoClsCd() || "";
  scwin.vUserHomeClsCd = $c.ses.getUserHomeClsCd() || "";
  scwin.strToDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.f_Set("INIT");
};
scwin.onUdcCompleted = async function () {
  await scwin.f_OnLoad();
};
scwin.f_Set = async function (mode) {
  if (mode == "INIT") {
    // TODO: initial mode setup
  }
};
scwin.f_OnLoad = async function () {
  scwin.state = "Y";
  await scwin.f_Header();
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtnOnly($p, [bSave]);
  $c.gus.cfDisableObjects($p, [udc_crn]);
  $c.gus.cfDisableObjects($p, [ed_spplyAmtFcrc, ed_exchRt]);
  await $c.sbm.execute($p, sbm_evidClsCd);
  scwin.f_checkPopEd_slipAcctDept();
  await scwin.f_AddRow();
  ed_slipDt.setValue(scwin.slipDt);
  await scwin.getMaxCloseYm();
  lc_crcCd.setValue(scwin.KOREA_WON);
  scwin.f_setCompanyInfo();
};
scwin.getMaxCloseYm = async function () {
  await $c.sbm.execute($p, sbm_getMaxCloseYm);
};
scwin.f_Header = async function () {
  dma_txn.set("slipDt", scwin.slipDt);
  dma_txn.set("slipAcctDeptCd", $c.ses.getAcctDeptCd() || "");
  dma_txn.set("slipAcctDeptNm", $c.ses.getAcctDeptNm() || "");
  dma_txn.set("drawEmpNo", $c.ses.getEmpNo() || "");
  dma_txn.set("drawAcctDeptCd", scwin.acctDeptCdSub);
  dma_txn.set("certiNo", scwin.certiNo);
  dma_exchRtSearch.set("crcCd", "");
  dma_exchRtSearch.set("stdDt", "");
  dma_search2.set("coCd", scwin.vCoCd);
  ed_slipAcctDeptCd.setValue(dma_txn.get("slipAcctDeptCd"));
  txt_slipAcctDeptNm.setValue(dma_txn.get("slipAcctDeptNm"));
};
scwin.f_setCompanyInfo = function () {
  if (scwin.vUserHomeClsCd == scwin.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.isSubCompany = true;
  } else {
    scwin.vCoCd = scwin.CO_CD_DONGBU;
    scwin.vCoClsCd = scwin.CO_CLS_CD_DONGBU;
  }
  scwin.txtCoCd = scwin.vCoCd;
  scwin.txtCoClsCd = scwin.vCoClsCd;
};
scwin.f_CheckRow = function (flag) {
  scwin.state = "Y";
  scwin.delflag = "Y";
  let rowPos = ds_txncontents.getRowPosition();
  if (flag == "DEL") {
    for (let j = ds_evidac.getRowCount() - 1; j >= 0; j--) {
      if (ds_txncontents.getCellData(rowPos, "rltSeq") == ds_evidac.getCellData(j, "rltSeq")) {
        ds_evidac.removeRow(j);
      }
    }
    ds_txncontents.removeRow(rowPos);
  } else {
    for (let j = ds_evidac.getRowCount() - 1; j >= 0; j--) {
      if (ds_txncontents.getCellData(rowPos, "rltSeq") == ds_evidac.getCellData(j, "rltSeq")) {
        ds_evidac.undoRow(j);
      }
    }
    ds_txncontents.undoRow(rowPos);
  }
  scwin.f_EnableYn(ds_txncontents.getRowCount());
  $c.gus.cfEnableObjects($p, [udc_crn]);
  ds_txncontents.setRowPosition(ds_txncontents.getRowCount() - 1);
};
scwin.f_DeleteRow = function () {
  scwin.f_CheckRow("DEL");
};
scwin.f_CancelRow = function () {
  scwin.f_CheckRow("CANCEL");
};
scwin.f_EnableYn = function (str) {
  if (str == 1) {
    $c.gus.cfEnableObjects($p, [ed_slipDt, udc_slipAcctDept]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_slipDt, udc_slipAcctDept]);
  }
};
scwin.f_AddRow = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_slipDt, ed_slipAcctDeptCd]);
  if (!chk) return;
  if (ds_txncontents.getRowCount() > 0) {
    if ((await scwin.f_Validation()) != true) return;
  }
  scwin.f_Add();
};
scwin.f_CopyRow = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_slipDt, ed_slipAcctDeptCd]);
  if (!chk) return;
  if (ds_txncontents.getRowCount() > 0) {
    if ((await scwin.f_Validation()) != true) return;
  }
  scwin.rowCopyYn = 1;
  let rowPos = ds_txncontents.getRowPosition();
  let newIdx = ds_txncontents.insertRow(ds_txncontents.getRowCount());
  let colInfos = ds_txncontents.getColumnInfo();
  for (let c = 0; c < colInfos.length; c++) {
    let colId = colInfos[c].id;
    ds_txncontents.setCellData(newIdx, colId, ds_txncontents.getCellData(rowPos, colId));
  }
  ds_txncontents.setRowPosition(ds_txncontents.getRowCount() - 1);
};
scwin.f_Add = function () {
  scwin.state = "N";
  scwin.delflag = "N";
  let lastRow = ds_txncontents.getRowCount() - 1;
  if (lastRow >= 0) {
    let lastRltSeq = ds_txncontents.getCellData(lastRow, "rltSeq");
    if (lastRltSeq != 0 && lastRltSeq != null && lastRltSeq != "") {
      scwin.rltSeq = parseInt(lastRltSeq) + 1;
    } else {
      scwin.rltSeq = scwin.rltSeq + 1;
    }
  } else {
    scwin.rltSeq = scwin.rltSeq + 1;
  }
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableBtnOnly($p, [bSave]);
  $c.gus.cfDisableObjects($p, [ed_vatAmt, udc_mgntEmp]);
  $c.gus.cfDisableObjects($p, [udc_crn]);
  $c.gus.cfEnableObjects($p, [udc_acctDept]);
  let newIdx;
  if (ds_txncontents.getRowCount() <= 0) {
    newIdx = ds_txncontents.insertRow(0);
  } else {
    newIdx = ds_txncontents.insertRow(ds_txncontents.getRowPosition() + 1);
  }
  scwin.f_EnableYn(ds_txncontents.getRowCount());
  lc_evidClsCd.setSelectedIndex(0);
  lc_crcCd.setValue("KRW");
  scwin.txt_vatYn = "1";
  scwin.txt_rltSeq = scwin.rltSeq;
  ds_txncontents.setCellData(newIdx, "rltSeq", scwin.rltSeq);
  ed_slipAcctDeptCd.setValue(scwin.acctDeptCdSub);
  txt_slipAcctDeptNm.setValue(scwin.acctDeptNmSub);
  ds_txncontents.setCellData(newIdx, "crn", scwin.crn);
  ds_txncontents.setCellData(newIdx, "crnNm", scwin.crnNm);
  ds_txncontents.setCellData(newIdx, "spplyAmt", scwin.spplyAmt);
  ds_txncontents.setCellData(newIdx, "vatAmt", scwin.vat);
  ds_txncontents.setCellData(newIdx, "acctDeptCd", scwin.acctDeptCdSub);
  ds_txncontents.setCellData(newIdx, "acctDeptNm", scwin.acctDeptNmSub);
  ds_txncontents.setCellData(newIdx, "vatDeclarAcctDeptCd", scwin.acctDeptCdSub);
  ds_txncontents.setCellData(newIdx, "vatDeclarAcctDeptNm", scwin.acctDeptNmSub);
  ds_txncontents.setCellData(newIdx, "vatCrn", "1218157774");
  ds_txncontents.setCellData(newIdx, "mgntClntNo", scwin.bilgClntNo);
  ds_txncontents.setCellData(newIdx, "mgntClntNm", scwin.bilgClntNm);
  ds_txncontents.setCellData(newIdx, "summary", scwin.summary);
  ds_txncontents.setCellData(newIdx, "txnDt", scwin.spplyDt);
  ed_crn.setValue(scwin.crn);
  txt_crnNm.setValue(scwin.crnNm);
  ed_spplyAmt.setValue(scwin.spplyAmt);
  ed_vatAmt.setValue(scwin.vat);
  ed_acctDeptCd.setValue(scwin.acctDeptCdSub);
  txt_acctDeptNm.setValue(scwin.acctDeptNmSub);
  ed_vatDeclarAcctDeptCd.setValue(scwin.acctDeptCdSub);
  txt_vatDeclarAcctDeptNm.setValue(scwin.acctDeptNmSub);
  ed_mgntClntNo.setValue(scwin.bilgClntNo);
  txt_mgntClntNm.setValue(scwin.bilgClntNm);
  txt_summary.setValue(scwin.summary);
  ed_txnDt.setValue(scwin.spplyDt);
  if (scwin.vAcctYn == "Y") {
    ed_acctCd.setValue("4101250");
    txt_acctNm.setValue("항만안전관리매출");
    scwin.txt_costClsCd = "01";
    scwin.txt_acctClsCd = "4";
    ds_txncontents.setCellData(newIdx, "acctCd", "4101250");
    ds_txncontents.setCellData(newIdx, "acctNm", "항만안전관리매출");
    ds_txncontents.setCellData(newIdx, "costClsCd", "01");
    ds_txncontents.setCellData(newIdx, "acctClsCd", "4");
  } else {
    ed_acctCd.setValue("4101010");
    txt_acctNm.setValue("일반매출");
    scwin.txt_costClsCd = "01";
    scwin.txt_acctClsCd = "4";
    ds_txncontents.setCellData(newIdx, "acctCd", "4101010");
    ds_txncontents.setCellData(newIdx, "acctNm", "일반매출");
    ds_txncontents.setCellData(newIdx, "costClsCd", "01");
    ds_txncontents.setCellData(newIdx, "acctClsCd", "4");
  }
  let vatAmtVal = ed_vatAmt.getValue();
  if (vatAmtVal == "0" || vatAmtVal == "") {
    lc_evidClsCd.setValue("20");
  }
  scwin.hidVal_slipAcctDeptCd = ed_slipAcctDeptCd.getValue();
  scwin.hidVal_crn = ed_crn.getValue();
  scwin.hidVal_acctCd = ed_acctCd.getValue();
  scwin.hidVal_acctDeptCd = ed_acctDeptCd.getValue();
  scwin.hidVal_vatDeclarAcctDeptCd = ed_vatDeclarAcctDeptCd.getValue();
  scwin.hidVal_mgntClntNo = ed_mgntClntNo.getValue();
  scwin.f_SetGridFormat();
};
scwin.f_Save = async function () {
  if (ds_txncontents.getRowCount() == 0) {
    await $c.win.alert($p, "데이타가 없습니다.");
    return;
  }
  if (ds_txncontents.isUpdated() == false && dma_txn.isUpdated() == false) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (!(await scwin.f_Validation())) return;
  for (let i = 0; i < ds_txncontents.getRowCount(); i++) {
    let spplayAmt = 0;
    let dcAmt = 0;
    let evidSum = 0;
    let vatAmt = 0;
    for (let j = 0; j < ds_evidac.getRowCount(); j++) {
      if (ds_txncontents.getCellData(i, "rltSeq") == ds_evidac.getCellData(j, "rltSeq")) {
        evidSum = evidSum + Number(ds_evidac.getCellData(j, "amt"));
        spplayAmt = ds_txncontents.getCellData(i, "spplyAmt");
        vatAmt = ds_txncontents.getCellData(i, "vatAmt");
      }
    }
  }
  let chkGrid = await $c.gus.cfValidate($p, [gr_txncontents]);
  if (chkGrid) {
    let chkConfirm = await $c.win.confirm($p, "발행하시겠습니까?");
    if (chkConfirm == true) {
      for (let i = 0; i < ds_txncontents.getRowCount(); i++) {
        if (ds_evidac.getRowCount() == 0) {
          ds_txncontents.setCellData(i, "acctDistYn", "0");
        } else {
          let found = false;
          for (let j = 0; j < ds_evidac.getRowCount(); j++) {
            if (ds_txncontents.getCellData(i, "rltSeq") == ds_evidac.getCellData(j, "rltSeq")) {
              ds_txncontents.setCellData(i, "acctDistYn", "1");
              found = true;
              break;
            }
          }
          if (!found) {
            ds_txncontents.setCellData(i, "acctDistYn", "0");
          }
        }
        ds_txncontents.setCellData(i, "coClsCd", scwin.vCoClsCd);
        ds_txncontents.setCellData(i, "coCd", scwin.vCoCd);
      }
      let lastRow = ds_txncontents.getRowCount() - 1;
      ds_txncontents.setCellData(lastRow, "slipKndCd", scwin.slipKndCd);
      if (scwin.vCoClsCd != "0" && $c.gus.cfIsNull($p, scwin.vCoCd)) {
        await $c.gus.cfAlertMsg($p, "MSG_CM_ERR_002", ["자회사인 경우는 귀속부서에 회사코드"]);
        return;
      }
      dma_txn.set("slipKndCd", scwin.slipKndCd);
      ds_txncontents.setCellData(lastRow, "deductClsCd", "2");
      await $c.sbm.execute($p, sbm_save);
    }
  }
  scwin.varCostClsCd = "";
};
scwin.f_HiddenCheck = async function (compObj, hidValKey, msg) {
  let val = compObj.getValue().trim();
  if (val == "") return true;
  if (val != scwin[hidValKey]) {
    await $c.gus.cfAlertMsg($p, "MSG_CM_ERR_038", [msg]);
    compObj.setFocus();
    return false;
  } else {
    return true;
  }
};
scwin.f_Validation = async function () {
  scwin.f_BizCheck();
  let chk = await $c.gus.cfValidate($p, [lc_evidClsCd, ed_slipDt, ed_slipAcctDeptCd, ed_acctCd, ed_acctDeptCd, txt_summary, ed_spplyAmt, ed_vatAmt, ed_crn, ed_mgntEmpNo, ed_txnDt, txt_crnNm, ed_vatDeclarAcctDeptCd, ed_mgntClntNo]);
  if (!chk) return false;
  if (!(await scwin.f_HiddenCheckSync(ed_slipAcctDeptCd, "hidVal_slipAcctDeptCd", "발행부서"))) return false;
  if (!(await scwin.f_HiddenCheckSync(ed_crn, "hidVal_crn", "사업자번호"))) return false;
  if (!(await scwin.f_HiddenCheckSync(ed_acctCd, "hidVal_acctCd", "계정"))) return false;
  if (!(await scwin.f_HiddenCheckSync(ed_acctDeptCd, "hidVal_acctDeptCd", "귀속부서"))) return false;
  if (!(await scwin.f_HiddenCheckSync(ed_vatDeclarAcctDeptCd, "hidVal_vatDeclarAcctDeptCd", "부가세신고부서"))) return false;
  if (!(await scwin.f_HiddenCheckSync(ed_mgntEmpNo, "hidVal_mgntEmpNo", "사원번호"))) return false;
  if (!(await scwin.f_HiddenCheckSync(ed_mgntClntNo, "hidVal_mgntClntNo", "거래처"))) return false;
  if (lc_evidClsCd.getValue() == "10") {
    let chk2 = await $c.gus.cfValidate($p, [ed_mgntEmpNo]);
    if (!chk2) return false;
  }
  let amt = 0;
  amt = Number(Number(ed_spplyAmt.getValue().trim()) + Number(ed_vatAmt.getValue().trim()));
  if (Number(amt) > Number(scwin.txt_limitAmt)) {
    await $c.gus.cfAlertMsg($p, "MSG_CM_ERR_048", ["금액(공급금액+부가세액)", "한도액(" + scwin.txt_limitAmt + ") "]);
    ed_spplyAmt.setFocus();
    return false;
  }
  if (scwin.txt_costClsCd == "") {
    await $c.gus.cfAlertMsg($p, "MSG_CM_WRN_018", ["부서에 따른 비용구분코드", "비용구분코드를 등록"]);
    ed_acctDeptCd.setFocus();
    return false;
  }
  if (scwin.txt_costClsCd == "01" && scwin.txt_acctClsCd.trim() != "4") {
    await $c.gus.cfAlertMsg($p, "MSG_CM_ERR_055", ["부서와 계정"]);
    ed_acctCd.setFocus();
    return false;
  }
  return true;
};
scwin.f_HiddenCheckSync = async function (compObj, hidValKey, msg) {
  let val = compObj.getValue().trim();
  if (val == "") return true;
  if (val != scwin[hidValKey]) {
    await $c.gus.cfAlertMsg($p, "MSG_CM_ERR_038", [msg]);
    compObj.setFocus();
    return false;
  } else {
    return true;
  }
};
scwin.f_openPopUp = async function (flag, check, isCdYn) {
  let rtnList = null;
  switch (flag) {
    case '1':
      let param1 = ed_slipDt.getValue().trim() + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;
      udc_slipAcctDept.ilCommonPopUp(scwin.callback_slipAcctDept, ed_slipAcctDeptCd.getValue().trim(), txt_slipAcctDeptNm.getValue(), check, null, null, null, null, param1, null, null, null, null);
      break;
    case '3':
      if (ed_acctDeptCd.getValue() == "") {
        await $c.gus.cfAlertMsg($p, "MSG_CM_ERR_002", ["귀속부서"]);
        ed_acctDeptCd.setFocus();
        return;
      }
      let param3 = "T," + ed_slipDt.getValue().trim() + ",4,,,," + scwin.txt_bizDomCd;
      let pSqlId3 = "retrieveAcctCdInfo";
      udc_acct.ilCommonPopUp(scwin.callback_acctCd, ed_acctCd.getValue().trim(), txt_acctNm.getValue(), check, null, null, null, null, param3, null, null, null, null);
      break;
    case '4':
      let param4 = "," + ed_slipDt.getValue().trim() + ",0,," + scwin.vCoCd + "," + scwin.vCoClsCd;
      udc_acctDept.ilCommonPopUp(scwin.callback_acctDeptCd, ed_acctDeptCd.getValue().trim(), txt_acctDeptNm.getValue(), check, null, null, null, null, param4, null, null, null, null);
      break;
    case '7':
      let param7 = '';
      let selectID7 = 'retrieveCrnInfo';
      udc_crn.ilCommonPopUp(scwin.callback_crn, ed_crn.getValue().trim(), txt_crnNm.getValue(), check, null, null, null, null, param7, null, null, null, null);
      break;
    case '8':
      let param8 = scwin.vCoCd + "," + scwin.vCoClsCd;
      udc_mgntEmp.ilCommonPopUp(scwin.callback_mgntEmpNo, ed_mgntEmpNo.getValue().trim(), txt_mgntEmpNm.getValue(), check, null, null, null, null, param8, null, null, null, null);
      break;
    case '10':
      let param10 = ",,," + scwin.vCoCd;
      udc_mgntClnt.ilCommonPopUp(scwin.callback_mgntClntNo, ed_mgntClntNo.getValue().trim(), txt_mgntClntNm.getValue(), check, null, null, null, null, param10, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.callback_slipAcctDept = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_slipAcctDeptCd, txt_slipAcctDeptNm);
  if (rtnList != null) {
    scwin.hidVal_slipAcctDeptCd = rtnList[0];
    $c.gus.cfEnableObjects($p, [udc_acct, udc_acctDept]);
    if (scwin.vBizDomCd == null || scwin.vBizDomCd == "") {
      if (rtnList[3] == "210" || rtnList[3] == "220") {
        scwin.gBizDomCdClsCd = "1";
      } else {
        scwin.gBizDomCdClsCd = "0";
      }
    } else {
      if (!(ed_acctCd.getValue() == null || ed_acctCd.getValue() == "")) {
        await $c.gus.cfAlertMsg($p, "발행부서를 수정할 경우에는 계정코드를 재입력하셔야 합니다.");
        ed_acctCd.setValue("");
        scwin.hidVal_acctCd = "";
        txt_acctNm.setValue("");
      }
    }
    scwin.vUpperAcctDeptCd = rtnList[2];
    scwin.vBizDomCd = rtnList[3];
  }
  scwin.f_SetGridFormat();
};
scwin.callback_acctCd = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_acctCd.setValue(rtnList[0]);
    txt_acctNm.setValue(rtnList[1]);
    scwin.hidVal_acctCd = rtnList[0];
    scwin.txt_acctClsCd = rtnList[2];
    scwin.f_AcctCd(rtnList[7], rtnList[6], rtnList[8], rtnList[5]);
  } else {
    ed_acctCd.setValue("");
    txt_acctNm.setValue("");
    scwin.hidVal_acctCd = "";
    scwin.txt_acctClsCd = "";
  }
};
scwin.callback_acctDeptCd = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_acctDeptCd.setValue(rtnList[0]);
    txt_acctDeptNm.setValue(rtnList[1]);
    scwin.hidVal_acctDeptCd = rtnList[0];
    $c.gus.cfEnableObjects($p, [udc_vatDeclarAcctDept]);
    scwin.txt_costClsCd = "" + rtnList[9];
    scwin.txt_bizDomCd = "" + rtnList[3];
    scwin.f_VatDeclarAcctDeptCd('2');
  } else {
    ed_acctDeptCd.setValue("");
    txt_acctDeptNm.setValue("");
    scwin.hidVal_acctDeptCd = "";
    scwin.txt_costClsCd = "";
    scwin.txt_bizDomCd = "";
  }
};
scwin.callback_crn = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_crn.setValue(rtnList[0]);
    txt_crnNm.setValue(rtnList[1]);
    scwin.hidVal_crn = rtnList[0];
    if (scwin.txt_frchNoYn == "1") {
      scwin.txt_frchCrn = ed_crn.getValue().trim();
      scwin.txt_frchNm = txt_crnNm.getValue().trim();
    } else {
      scwin.txt_frchCrn = "";
      scwin.txt_frchNm = "";
    }
  } else {
    ed_crn.setValue("");
    txt_crnNm.setValue("");
    scwin.hidVal_crn = "";
  }
};
scwin.callback_mgntEmpNo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_mgntEmpNo, txt_mgntEmpNm);
  if (rtnList != null) {
    scwin.hidVal_mgntEmpNo = rtnList[0];
  }
};
scwin.callback_mgntClntNo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_mgntClntNo, txt_mgntClntNm);
  if (rtnList != null) {
    scwin.hidVal_mgntClntNo = rtnList[0];
  }
};
scwin.f_VatDeclarAcctDeptCd = async function (str) {
  if (ed_acctDeptCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "MSG_CM_ERR_002", ["귀속부서"]);
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_acctDeptCd.setFocus();
    return;
  }
  let param = "";
  let sqlID = "";
  let check = "";
  let popTemp = "";
  if (str == "1") {
    param = "," + ed_acctDeptCd.getValue() + ",1," + scwin.vCoCd + "," + scwin.vCoClsCd + "," + ed_txnDt.getValue().substring(0, 4);
    check = "F";
    sqlID = "retrieveVatDeclarAcctDeptCd";
    popTemp = "";
  } else if (str == "2") {
    param = "," + ed_acctDeptCd.getValue() + "," + scwin.vCoCd + "," + scwin.vCoClsCd + "," + ed_txnDt.getValue().substring(0, 4);
    check = "T";
    ed_vatDeclarAcctDeptCd.setValue("");
    sqlID = "retrieveVatDeclarAcctDeptCdAcctDeptCd";
    popTemp = "ZZ";
  } else if (str == "3") {
    param = "," + ed_acctDeptCd.getValue() + ",1," + scwin.vCoCd + "," + scwin.vCoClsCd + "," + ed_txnDt.getValue().substring(0, 4);
    check = "T";
    sqlID = "retrieveVatDeclarAcctDeptCd";
    popTemp = "";
  }
  udc_vatDeclarAcctDept.ilCommonPopUp(scwin.callback_vatDeclarAcctDeptCd, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check, null, null, null, null, param, null, null, null, null);
};
scwin.callback_vatDeclarAcctDeptCd = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_vatDeclarAcctDeptCd.setValue(rtnList[2]);
    txt_vatDeclarAcctDeptNm.setValue(rtnList[3]);
    scwin.txt_vatCrn = rtnList[5];
    scwin.hidVal_vatDeclarAcctDeptCd = rtnList[2];
  } else {
    ed_vatDeclarAcctDeptCd.setValue("");
    txt_vatDeclarAcctDeptNm.setValue("");
    scwin.txt_vatCrn = "";
    scwin.hidVal_vatDeclarAcctDeptCd = "";
  }
};
scwin.f_checkPopEd = function (compCd, compNm, hidValKey, flag) {
  if (compCd.getValue().trim() == scwin[hidValKey]) return;
  compNm.setValue("");
  scwin[hidValKey] = "";
  if (compCd.getValue().trim() != "") scwin.f_openPopUp(flag, 'T');
};
scwin.f_checkPopEd_slipAcctDept = function () {
  scwin.hidVal_slipAcctDeptCd = "";
  scwin.f_checkPopEd(ed_slipAcctDeptCd, txt_slipAcctDeptNm, "hidVal_slipAcctDeptCd", '1');
};
scwin.f_resultPopEd = function (compCd, compNm, hidValKey, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    compCd.setValue(rtnList[0]);
    compNm.setValue(rtnList[1]);
    scwin[hidValKey] = rtnList[0];
  } else {
    compCd.setValue("");
    compNm.setValue("");
    scwin[hidValKey] = "";
  }
};
scwin.f_EvidClsCd = function (r_bizMgntYn, r_vatYn, r_cardNoYn, r_frchNoYn, r_deductClsYn, r_limitAmt) {
  scwin.txt_bizMgntYn = r_bizMgntYn;
  if (lc_crcCd.getValue() == scwin.KOREA_WON) {
    scwin.txt_vatYn = r_vatYn;
  } else {
    scwin.txt_vatYn = "0";
  }
  scwin.txt_frchNoYn = r_frchNoYn;
  scwin.txt_deductClsYn = r_deductClsYn;
  scwin.txt_limitAmt = r_limitAmt;
  if (r_vatYn == "1") {
    $c.gus.cfEnableObjects($p, [ed_vatAmt]);
  } else {
    ed_vatAmt.setValue("0");
    $c.gus.cfDisableObjects($p, [ed_vatAmt]);
  }
  if (r_frchNoYn == "1" && r_bizMgntYn == "1" || r_frchNoYn == "0" && r_bizMgntYn == "1") {
    scwin.txt_frchCrn = ed_crn.getValue().trim();
    scwin.txt_frchNm = txt_crnNm.getValue().trim();
    $c.gus.cfEnableObjects($p, [udc_crn]);
  }
  if (r_frchNoYn == "1" && r_bizMgntYn == "0") {
    scwin.txt_frchCrn = ed_crn.getValue().trim();
    $c.gus.cfEnableObjects($p, [ed_crn, txt_crnNm]);
  }
  if (r_frchNoYn == "0" && r_bizMgntYn == "0") {
    ed_crn.setValue("");
    txt_crnNm.setValue("");
    scwin.txt_frchCrn = "";
    scwin.txt_frchNm = "";
    $c.gus.cfDisableObjects($p, [udc_crn]);
  }
};
scwin.f_BizCheck = function () {
  let r_bizMgntYn = scwin.txt_bizMgntYn;
  let r_frchNoYn = scwin.txt_frchNoYn;
  let r_crnLen = ed_crn.getValue().length;
  if (r_frchNoYn == "1" && r_bizMgntYn == "1" || r_frchNoYn == "0" && r_bizMgntYn == "1") {
    // TODO: validExp="사업자번호:yes"
  }
  if (r_frchNoYn == "1" && r_bizMgntYn == "0") {
    if (r_crnLen == 13) {
      // TODO: validExp="사업자번호:yes:ssn"
    } else if (r_crnLen == 10) {
      // TODO: validExp="사업자번호:yes:csn"
    }
  }
  if (r_frchNoYn == "0" && r_bizMgntYn == "0") {
    // TODO: validExp="사업자번호:no"
  }
};
scwin.f_AcctCd = function (r_empMgntYn, r_termMgntYn, r_dtMgntYn, r_clntMgntYn) {
  scwin.txt_empMgntYn = r_empMgntYn;
  scwin.txt_termMgntYn = r_termMgntYn;
  scwin.txt_dtMgntYn = r_dtMgntYn;
  scwin.txt_clntMgntYn = r_clntMgntYn;
  if (r_empMgntYn == "1") {
    $c.gus.cfEnableObjects($p, [udc_mgntEmp]);
  } else {
    ed_mgntEmpNo.setValue("");
    txt_mgntEmpNm.setValue("");
    $c.gus.cfDisableObjects($p, [udc_mgntEmp]);
  }
};
scwin.f_SetGridFormat = function () {
  gr_txncontents.refresh();
};
scwin.setAmt = function () {
  if (scwin.txt_vatYn == "1") {
    ed_vatAmt.setValue(Math.round(Number(ed_spplyAmt.getValue().trim()) * 0.1));
  } else {
    ed_vatAmt.setValue(0);
  }
};
scwin.setSupplyAmt = function () {
  if (scwin.txt_vatYn == "1") {
    ed_spplyAmt.setValue(Math.floor(Number(ed_vatAmt.getValue().trim()) * 10));
  }
};
scwin.SetCrnNm = function () {
  if (scwin.txt_frchNoYn == "1") {
    scwin.txt_frchNm = txt_crnNm.getValue().trim();
  }
};
scwin.f_CrnNm = function (row) {
  if (txt_crnNm.getValue() == "" && typeof ds_txncontents.getCellData(row, "frchNm") != "undefined") {
    txt_crnNm.setValue(ds_txncontents.getCellData(row, "frchNm"));
  }
};
scwin.f_BizCheckFocus = async function () {
  if (ed_crn.getValue() != "") {
    let chk = await $c.gus.cfValidate($p, [ed_crn]);
    if (!chk) {
      return false;
    }
  }
  return true;
};
scwin.f_CheckComboData = async function (objCombo, comboTitle) {
  let val = objCombo.getValue();
  if (val == "" || val == null) {
    await $c.gus.cfAlertMsg($p, "MSG_CM_ERR_038", [comboTitle + "코드"]);
    objCombo.setFocus();
  }
};
scwin.crcCdChange = async function () {
  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == scwin.KOREA_WON) {
    $c.gus.cfDisableObjects($p, [ed_spplyAmtFcrc]);
    $c.gus.cfEnableObjects($p, [ed_spplyAmt, ed_vatAmt]);
    ed_exchRt.setValue(0);
    ed_spplyAmtFcrc.setValue(0);
  } else {
    $c.gus.cfEnableObjects($p, [ed_spplyAmtFcrc]);
    $c.gus.cfDisableObjects($p, [ed_spplyAmt, ed_vatAmt]);
    ed_vatAmt.setValue(0);
    await $c.sbm.execute($p, sbm_exchRt);
  }
};
scwin.ed_spplyAmt_onblur = function (e) {
  scwin.setAmt();
};
scwin.ed_vatAmt_onblur = function (e) {
  scwin.setSupplyAmt();
};
scwin.lc_evidClsCd_onblur = async function (e) {
  await scwin.f_CheckComboData(lc_evidClsCd, "증빙종류");
};
scwin.ed_spplyAmtFcrc_onblur = function (e) {
  if (scwin.vCopyYn == 0) {
    ed_spplyAmt.setValue(Math.floor(Number(ed_spplyAmtFcrc.getValue().trim()) * Number(ed_exchRt.getValue().trim())));
  }
};
scwin.ed_exchRt_onblur = function (e) {
  if (scwin.vCopyYn == 0) {
    ed_spplyAmt.setValue(Math.floor(Number(ed_spplyAmtFcrc.getValue().trim()) * Number(ed_exchRt.getValue().trim())));
  }
};
scwin.lc_crcCd_onchange = async function (e) {
  await scwin.crcCdChange();
  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == scwin.KOREA_WON) {
    $c.gus.cfDisableObjects($p, [ed_spplyAmtFcrc, ed_exchRt]);
    $c.gus.cfEnableObjects($p, [ed_spplyAmt]);
  } else {
    $c.gus.cfEnableObjects($p, [ed_spplyAmtFcrc, ed_exchRt]);
    $c.gus.cfDisableObjects($p, [ed_spplyAmt]);
  }
};
scwin.sbm_exchRt_submitdone = function (e) {
  if (ds_exchRt.getRowCount() > 0) {
    ed_exchRt.setValue(ds_exchRt.getCellData(0, "stdExchRt"));
  }
  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == scwin.KOREA_WON) {
    $c.gus.cfDisableObjects($p, [ed_spplyAmtFcrc]);
  } else {
    $c.gus.cfEnableObjects($p, [ed_spplyAmtFcrc]);
  }
  ed_spplyAmtFcrc.setFocus();
};
scwin.sbm_exchRt_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_save_submitdone = async function (e) {
  if (ds_slipNo.getRowCount() > 0 && ds_slipNo.getCellData(0, "slipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_slipNo.getCellData(0, "slipNo"));
  }
  scwin.state = "Y";
  scwin.delflag = "N";
  ds_txncontents.removeAll();
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableAllBtn($p);
  scwin.slipDt = ed_slipDt.getValue();
  await scwin.f_OnLoad();
  $c.gus.cfEnableObjects($p, [ed_slipDt, udc_slipAcctDept]);
  scwin.rltSeq = 0;
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_getMaxCloseYm_submitdone = function (e) {
  let thisYm = scwin.strToDate;
  if (ds_getMaxCloseYm.getRowCount() > 0) {
    let closeYmVal = ds_getMaxCloseYm.getCellData(0, "CloseYm");
    if (closeYmVal != thisYm.substr(0, 6)) {
      let closeYm = closeYmVal;
      let lastDay = closeYm.substr(0, 4) + "/" + closeYm.substr(4, 2) + "/" + new Date(closeYm.substr(0, 4), closeYm.substr(4, 2), 0).getDate();
      ed_slipDt.setValue(scwin.slipDt);
    } else {
      ed_slipDt.setValue(scwin.slipDt);
    }
  }
};
scwin.sbm_getMaxCloseYm_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_evidClsCd_submitdone = function (e) {
  if (ds_evidClsCd.getRowCount() > 0) {
    let choices = [];
    for (let i = 0; i < ds_evidClsCd.getRowCount(); i++) {
      choices.push({
        label: ds_evidClsCd.getCellData(i, "COL2"),
        value: ds_evidClsCd.getCellData(i, "COL1")
      });
    }
    // TODO: Set lc_evidClsCd choices from ds_evidClsCd data
  }
};
scwin.sbm_evidClsCd_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_txncontents_onrowpositionchange = function (rowIndex, oldRowIndex) {
  if (rowIndex < 0) return;
  let row = rowIndex;
  scwin.f_EvidClsCd(ds_txncontents.getCellData(row, "bizMgntYn"), ds_txncontents.getCellData(row, "vatYn"), ds_txncontents.getCellData(row, "cardNoYn"), ds_txncontents.getCellData(row, "frchNoYn"), ds_txncontents.getCellData(row, "deductClsYn"), ds_txncontents.getCellData(row, "limitAmt"));
  scwin.f_AcctCd(ds_txncontents.getCellData(row, "empMgntYn"), ds_txncontents.getCellData(row, "termMgntYn"), ds_txncontents.getCellData(row, "dtMgntYn"), ds_txncontents.getCellData(row, "clntMgntYn"));
  $c.gus.cfDisableObjects($p, [txt_acctNm, txt_acctDeptNm, txt_vatDeclarAcctDeptNm, txt_mgntEmpNm, txt_mgntClntNm]);
  scwin.f_CrnNm(row);
  scwin.hidVal_slipAcctDeptCd = dma_txn.get("slipAcctDeptCd");
  scwin.hidVal_crn = ds_txncontents.getCellData(row, "crn");
  scwin.hidVal_acctCd = ds_txncontents.getCellData(row, "acctCd");
  scwin.hidVal_acctDeptCd = ds_txncontents.getCellData(row, "acctDeptCd");
  scwin.hidVal_vatDeclarAcctDeptCd = ds_txncontents.getCellData(row, "vatDeclarAcctDeptCd");
  scwin.hidVal_mgntEmpNo = ds_txncontents.getCellData(row, "mgntEmpNo");
  scwin.hidVal_mgntClntNo = ds_txncontents.getCellData(row, "mgntClntNo");
  ed_slipAcctDeptCd.setValue(dma_txn.get("slipAcctDeptCd"));
  ed_crn.setValue(ds_txncontents.getCellData(row, "crn"));
  txt_crnNm.setValue(ds_txncontents.getCellData(row, "crnNm"));
  ed_acctCd.setValue(ds_txncontents.getCellData(row, "acctCd"));
  txt_acctNm.setValue(ds_txncontents.getCellData(row, "acctNm"));
  ed_acctDeptCd.setValue(ds_txncontents.getCellData(row, "acctDeptCd"));
  txt_acctDeptNm.setValue(ds_txncontents.getCellData(row, "acctDeptNm"));
  ed_vatDeclarAcctDeptCd.setValue(ds_txncontents.getCellData(row, "vatDeclarAcctDeptCd"));
  txt_vatDeclarAcctDeptNm.setValue(ds_txncontents.getCellData(row, "vatDeclarAcctDeptNm"));
  ed_mgntEmpNo.setValue(ds_txncontents.getCellData(row, "mgntEmpNo"));
  txt_mgntEmpNm.setValue(ds_txncontents.getCellData(row, "mgntEmpNm"));
  ed_mgntClntNo.setValue(ds_txncontents.getCellData(row, "mgntClntNo"));
  txt_mgntClntNm.setValue(ds_txncontents.getCellData(row, "mgntClntNm"));
  ed_spplyAmt.setValue(ds_txncontents.getCellData(row, "spplyAmt"));
  ed_vatAmt.setValue(ds_txncontents.getCellData(row, "vatAmt"));
  ed_txnDt.setValue(ds_txncontents.getCellData(row, "txnDt"));
  txt_summary.setValue(ds_txncontents.getCellData(row, "summary"));
  ed_spplyAmtFcrc.setValue(ds_txncontents.getCellData(row, "spplyAmtFcrc"));
  ed_exchRt.setValue(ds_txncontents.getCellData(row, "exchRt"));
  lc_crcCd.setValue(ds_txncontents.getCellData(row, "crcCd"));
  lc_evidClsCd.setValue(ds_txncontents.getCellData(row, "evidClsCd"));
  lc_zeroTaxClsCd.setValue(ds_txncontents.getCellData(row, "zeroTaxClsCd"));
};
scwin.ed_slipAcctDeptCd_onblur = function (e) {
  scwin.f_checkPopEd(ed_slipAcctDeptCd, txt_slipAcctDeptNm, "hidVal_slipAcctDeptCd", '1');
};
scwin.ed_acctCd_onblur = function (e) {
  scwin.f_checkPopEd(ed_acctCd, txt_acctNm, "hidVal_acctCd", '3');
};
scwin.ed_acctDeptCd_onblur = function (e) {
  scwin.f_checkPopEd(ed_acctDeptCd, txt_acctDeptNm, "hidVal_acctDeptCd", '4');
};
scwin.ed_vatDeclarAcctDeptCd_onblur = function (e) {
  if (ed_vatDeclarAcctDeptCd.getValue().trim() == scwin.hidVal_vatDeclarAcctDeptCd) return;
  txt_vatDeclarAcctDeptNm.setValue("");
  scwin.txt_vatCrn = "";
  scwin.hidVal_vatDeclarAcctDeptCd = "";
  if (ed_vatDeclarAcctDeptCd.getValue().trim() != "") scwin.f_VatDeclarAcctDeptCd('3');
};
scwin.ed_crn_onblur = function (e) {
  if (ed_crn.getValue().trim() == scwin.hidVal_crn) return;
  if (scwin.txt_frchNoYn == "1") {
    scwin.txt_frchCrn = ed_crn.getValue().trim();
  } else {
    scwin.txt_frchCrn = "";
  }
  if (scwin.txt_clntMgntYn != "1" && scwin.txt_frchNoYn == "1") {
    scwin.hidVal_crn = ed_crn.getValue().trim();
  } else {
    txt_crnNm.setValue("");
    scwin.hidVal_crn = "";
    if (ed_crn.getValue().trim() != "") scwin.f_openPopUp('7', 'T');
  }
};
scwin.ed_mgntEmpNo_onblur = function (e) {
  scwin.f_checkPopEd(ed_mgntEmpNo, txt_mgntEmpNm, "hidVal_mgntEmpNo", '8');
};
scwin.ed_mgntClntNo_onblur = function (e) {
  scwin.f_checkPopEd(ed_mgntClntNo, txt_mgntClntNm, "hidVal_mgntClntNo", '10');
};
scwin.lc_evidClsCd_onchange = function (e) {
  let selectedVal = lc_evidClsCd.getValue();
  let row = -1;
  for (let i = 0; i < ds_evidClsCd.getRowCount(); i++) {
    if (ds_evidClsCd.getCellData(i, "COL1") == selectedVal) {
      row = i;
      break;
    }
  }
  if (row >= 0) {
    scwin.txt_evidClsNm = ds_evidClsCd.getCellData(row, "COL2");
    let curRowPos = ds_txncontents.getRowPosition();
    if (curRowPos >= 0) {
      ds_txncontents.setCellData(curRowPos, "evidClsNm", scwin.txt_evidClsNm);
    }
    scwin.f_EvidClsCd(ds_evidClsCd.getCellData(row, "COL3"), ds_evidClsCd.getCellData(row, "COL4"), ds_evidClsCd.getCellData(row, "COL5"), ds_evidClsCd.getCellData(row, "COL6"), ds_evidClsCd.getCellData(row, "COL7"), ds_evidClsCd.getCellData(row, "COL9"));
  }
  if (selectedVal == "10") {
    // TODO: ed_mgntClntNo mandatory=true
  } else {
    // TODO: ed_mgntClntNo mandatory=false
  }
  if (selectedVal == "20") {
    $c.gus.cfEnableObjects($p, [lc_zeroTaxClsCd]);
    lc_zeroTaxClsCd.setSelectedIndex(0);
  } else {
    lc_zeroTaxClsCd.setValue("");
    $c.gus.cfDisableObjects($p, [lc_zeroTaxClsCd]);
  }
};
scwin.ed_txnDt_onblur = function (e) {
  if (ed_vatDeclarAcctDeptCd.getValue() == null || ed_vatDeclarAcctDeptCd.getValue() == "") {
    scwin.hidVal_vatDeclarAcctDeptCd = '';
    ed_vatDeclarAcctDeptCd.setValue('');
    txt_vatDeclarAcctDeptNm.setValue('');
    scwin.txt_vatCrn = '';
  } else {
    scwin.f_VatDeclarAcctDeptCd('2');
  }
};
scwin.txt_crnNm_onblur = function (e) {
  scwin.SetCrnNm();
};
scwin.bSave_onclick = function (e) {
  scwin.f_Save();
};
scwin.udc_slipAcctDept_onblurCode = function (e) {
  scwin.f_checkPopEd(ed_slipAcctDeptCd, txt_slipAcctDeptNm, "hidVal_slipAcctDeptCd", '1');
};
scwin.udc_slipAcctDept_onClick = function (e) {
  scwin.f_openPopUp('1', 'F');
};
scwin.udc_crn_onblurCode = function (e) {
  scwin.ed_crn_onblur(e);
};
scwin.udc_crn_onClick = function (e) {
  scwin.f_openPopUp('7', 'F');
};
scwin.udc_mgntEmp_onblurCode = function (e) {
  scwin.f_checkPopEd(ed_mgntEmpNo, txt_mgntEmpNm, "hidVal_mgntEmpNo", '8');
};
scwin.udc_mgntEmp_onClick = function (e) {
  scwin.f_openPopUp('8', 'F');
};
scwin.udc_acctDept_onblurCode = function (e) {
  scwin.f_checkPopEd(ed_acctDeptCd, txt_acctDeptNm, "hidVal_acctDeptCd", '4');
};
scwin.udc_acctDept_onClick = function (e) {
  scwin.f_openPopUp('4', 'F');
};
scwin.udc_vatDeclarAcctDept_onblurCode = function (e) {
  scwin.ed_vatDeclarAcctDeptCd_onblur(e);
};
scwin.udc_vatDeclarAcctDept_onClick = function (e) {
  scwin.f_VatDeclarAcctDeptCd('1');
};
scwin.udc_mgntClnt_onblurCode = function (e) {
  scwin.f_checkPopEd(ed_mgntClntNo, txt_mgntClntNm, "hidVal_mgntClntNo", '10');
};
scwin.udc_mgntClnt_onClick = function (e) {
  scwin.f_openPopUp('10', 'F');
};
scwin.udc_acct_onblurCode = function (e) {
  scwin.f_checkPopEd(ed_acctCd, txt_acctNm, "hidVal_acctCd", '3');
};
scwin.udc_acct_onClick = function (e) {
  scwin.f_openPopUp('3', 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_slipDt',style:'',ref:'data:ds_exchRtSearch.stdDt',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'발행부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_slipAcctDeptCd',validTitle:'',nameId:'txt_slipAcctDeptNm',id:'udc_slipAcctDept',style:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'증빙종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 150px;',allOption:'false',id:'lc_evidClsCd',class:'',direction:'auto',ref:'data:ds_txncontents.evidClsCd'}},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 150px;',allOption:'false',id:'lc_zeroTaxClsCd',class:'',direction:'auto',ref:'data:ds_txncontents.zeroTaxClsCd'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_crn',nameId:'txt_crnNm',popupID:'',selectID:'',id:'udc_crn',style:'',validTitle:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'통화코드/환율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 150px;',allOption:'false',id:'lc_crcCd',class:'',direction:'auto',ref:'data:ds_exchRtSearch.crcCd',mandatory:'true'}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_exchRt',class:'tar',ref:'data:ds_txncontents.exchRt',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'외화금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_exchRt',style:'width:200px;',ref:'data:ds_txncontents.exchRt',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계산서일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_txnDt',style:'',ref:'data:ds_txncontents.txnDt',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공급금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_spplyAmt',style:'width:200px;',ref:'data:ds_txncontents.spplyAmt',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_vatAmt',style:'width: 302px;',ref:'data:ds_txncontents.vatAmt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사원번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_mgntEmpNo',nameId:'txt_mgntEmpNm',popupID:'',selectID:'',id:'udc_mgntEmp',style:'',validTitle:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'txt_acctDeptNm',popupID:'',selectID:'',id:'udc_acctDept',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부가세신고부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_vatDeclarAcctDeptCd',selectID:'',popupID:'',validTitle:'',nameId:'txt_vatDeclarAcctDeptNm',id:'udc_vatDeclarAcctDept',style:''}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_vatDeclarAcctDeptCd',class:'',ref:'data:ds_txncontents.vatDeclarAcctDeptCd',mandatory:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_mgntClntNo',nameId:'txt_mgntClntNm',popupID:'',selectID:'',id:'udc_mgntClnt',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctCd',nameId:'txt_acctNm',popupID:'',selectID:'',id:'udc_acct',style:'',validTitle:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_summary',style:'',ref:'data:ds_txncontents.summary'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td  bl0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',dataList:'ds_txncontents',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_txncontents',visibleRowNum:'10',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'row',value:'증빙',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'evidClsNm',value:'계산서일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'txnDt',value:'계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctCd',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctNm',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'공급가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'spplyAmt',value:'부가세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vatAmt',value:'적요',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'row',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'evidClsNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'txnDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'spplyAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vatAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'spplyAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column40',value:'',displayMode:'label',expression:'sum(\'vatAmt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-dot txt-red',id:'',label:'차변계정은 외상매출금-일반으로 생성되고, 채권도 생성됨. ',style:''}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'bSave',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표발행'}]}]}]}]}]}]}]}]}]})