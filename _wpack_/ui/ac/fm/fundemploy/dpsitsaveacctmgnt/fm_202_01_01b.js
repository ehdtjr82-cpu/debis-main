/*amd /ui/ac/fm/fundemploy/dpsitsaveacctmgnt/fm_202_01_01b.xml 73263 50df557cecc8b5935253fab7520b965ab7d7268cedac9c88e54dac72741b56b0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dpsitSaveAcctKndCd',name:'예적금거래종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dpsitSaveAcctTxnStsCd',name:'예적금거래상태코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dpsitSaveAcctKnd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'col2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'col3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'col4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'col5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'col6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'col7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'col8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'col9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'col10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_dpsitSave',repeatNode:'map',saveRemovedData:'true',style:'','ev:onrowpositionchange':'scwin.ds_dpsitSave_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'dpsitSaveAcctNo',name:'예적금번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dpsitSaveAcctKndCd',name:'예적금종류코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dpsitSaveAcctTxnStsCd',name:'예적금거래상태코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptCd',name:'귀속부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptNm',name:'귀속부서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bankbookNo',name:'통장번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bankNm',name:'통장명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bankAcntNo',name:'계좌번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'entryDt',name:'가입일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dueDt',name:'만기일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'canclDt',name:'해약일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pstpnDueDt',name:'연기만기일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtAmt',name:'계약금액',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ramt',name:'잔액',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',id:'paymtAmt',name:'불입금액',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',id:'paymtCnt',name:'불입횟수',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtIntRt',name:'계약이자율',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',id:'corTaxRt',name:'법인세율',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',id:'entryDestCd',name:'가입목적코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'taxDeductCd',name:'세금공제코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'intCalnCd',name:'이자계산코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'intClsCd',name:'이자구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'refDpsitSaveAcctNo',name:'참조예적금번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'delYn',name:'삭제여부',defaultValue:'0'}},{T:1,N:'w2:column',A:{dataType:'text',id:'newTerminationClsCd',name:'삭제여부',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankcd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCdNm',name:'은행코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dpsitSaveAcctKnd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list','ev:oncelldatachange':'scwin.ds_txnContents_oncelldatachange','ev:oninsertrow':'scwin.ds_txnContents_oninsertrow','ev:onrowpositionchange':'scwin.ds_txnContents_onrowpositionchange',id:'ds_txnContents',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'selYn',name:'선택여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dpsitSaveAcctNo',name:'예적금번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dpsitSaveAcctSeq',name:'예적금순번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dpsitSaveAcctTxnClsCd',name:'예적금거래구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'txnDt',name:'거래일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'stDt',name:'시작일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'endDt',name:'종료일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'payBankbookNo',name:'통장번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bankbookNo',name:'통장번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'intRt',name:'이자율'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cmis',name:'수수료'}},{T:1,N:'w2:column',A:{dataType:'text',id:'txnAmt',name:'거래금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipNo',name:'전표번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'delYn',name:'삭제여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptCd',name:'부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dpsitSaveAcctKndCd',name:'부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtAmt',name:'계약금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'paymtAmt',name:'불입금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'refDpsitSaveAcctNo',name:'참조예적금번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtIntRt',name:'이자 이율'}},{T:1,N:'w2:column',A:{dataType:'text',id:'corTaxRt',name:'법인세율'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list','ev:oncelldatachange':'scwin.ds_txnContents_oncelldatachange','ev:oninsertrow':'scwin.ds_txnContents_oninsertrow','ev:onrowpositionchange':'scwin.ds_txnContents_onrowpositionchange',id:'ds_txnContentsTemp',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'selYn',name:'선택여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dpsitSaveAcctNo',name:'예적금번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dpsitSaveAcctSeq',name:'예적금순번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dpsitSaveAcctTxnClsCd',name:'예적금거래구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'txnDt',name:'거래일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'stDt',name:'시작일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'endDt',name:'종료일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'payBankbookNo',name:'통장번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bankbookNo',name:'통장번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'intRt',name:'이자율'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cmis',name:'수수료'}},{T:1,N:'w2:column',A:{dataType:'text',id:'txnAmt',name:'거래금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipNo',name:'전표번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'delYn',name:'삭제여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptCd',name:'부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dpsitSaveAcctKndCd',name:'부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtAmt',name:'계약금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'paymtAmt',name:'불입금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'refDpsitSaveAcctNo',name:'참조예적금번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtIntRt',name:'이자 이율'}},{T:1,N:'w2:column',A:{dataType:'text',id:'corTaxRt',name:'법인세율'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_bankcd',action:'/ac.fm.stdinfomgnt.RetrieveBankCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_bankcd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.fundemploy.dpsitsaveacctmgnt.RetrieveDepositSavingAccountLedgerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_dpsitSave","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_dpsitSave","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_dpsitSave","key":"IN_DS1"},{"action":"modified","id":"ds_txnContents","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_dpsitSaveAcctKnd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_dpsitSaveAcctKnd","key":"IN_DS1"}',target:'data:json,{"id":"ds_dpsitSaveAcctKnd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_dpsitSaveAcctKnd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.userInfo = $c.data.getMemInfo($p);
scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.PAYMENT = "01";
scwin.IMP_INT = "02";
scwin.COR_TAX = "04";
scwin.DUE_TERMINATION_TXN = "05";
scwin.MIDDLE_TERMINATION_TXN = "06";
scwin.DUE_TERMINATION = "02";
scwin.MIDDLE_TERMINATION = "03";
scwin.pos_groupCode = "0";
scwin.saveFlag = "0"; //저장모드
scwin.insertFlag = "0"; // 신규모드

scwin.hidDpsitSaveAcctNo = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  const codeOptions = [
  // { grpCd : "ZZ010", compID : "lc_userClsCd_param,lc_userClsCd, gr_dpsitSave:userClsCd" },
  {
    grpCd: "FM005",
    compID: "lc_srchdpsitSaveAcctKndCd,lc_dpsitSaveAcctKndCd, gr_dpsitSave:dpsitSaveAcctKndCd"
  }, {
    grpCd: "FM006",
    compID: "lc_srchdpsitSaveAcctTxnStsCd,lc_dpsitSaveAcctTxnStsCd, gr_dpsitSave:dpsitSaveAcctTxnStsCd"
  }, {
    grpCd: "FM054",
    compID: "lc_entryDestCd"
  }, {
    grpCd: "FM055",
    compID: "lc_taxDeductCd"
  }, {
    grpCd: "FM057",
    compID: "lc_intClsCd"
  }, {
    grpCd: "FM053",
    compID: "lc_intCalnCd"
  }];
  $c.data.setCommonCode($p, codeOptions);

  // scwin.f_QueryConditionCreate();
  // scwin.f_CreateHeader();
  scwin.f_bankcd_Retrieve();
  // scwin.f_AppTabMenuTitle();
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_Update, btn_Save, btn_Delete]);
  $c.gus.cfDisableObjects($p, [btn_acctDeptCd_search, btn_bankbookNo_search, lc_dpsitSaveAcctTxnStsCd, btn_disuse]);
  ica_stDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ica_endDt.setValue(scwin.g_sCurrDate);
  lc_bankCd.focus();
};

//-------------------------------------------------------------------------
// Tab Menu / URL 설정
//-------------------------------------------------------------------------
scwin.f_AppTabMenuTitle = function () {
  for (i = 0; i < tab_mxTab_page.length; i++) {
    lay_tab_mxTab_Title(i).innerHTML = TAB_TITLE_LIST[i];
    eval("document.all.iFrame" + i).src = TAB_URL_LIST[i];
  }
  // 첫번째 Tab Menu 활성화
  $c.gus.cfViewTab($p, 0);
};

//-------------------------------------------------------------------------
// Tab Menu 선택시 처리
//-------------------------------------------------------------------------
scwin.f_selectTabMenu = function (idx) {
  $c.gus.cfViewTab($p, idx);
};

//-------------------------------------------------------------------------
//그리드 높이 늘리기
//-------------------------------------------------------------------------
scwin.f_grdHeiht = function (size) {
  var ContentFrame = document.all["iFrame0"];
  var ContentFrame1 = document.all["iFrame1"];
  var ContentTable = document.all["table_id"];
  var ContentTable2 = document.all["table_id2"];
  var strHeight = ContentFrame.style.height;
  var strHeight1 = ContentFrame1.style.height;
  var strTableHeight = ContentTable.style.height;
  var strTableTop = ContentTable2.style.top;
  var intHeight = parseInt(strHeight.replace("px", ""));
  var intHeight1 = parseInt(strHeight1.replace("px", ""));
  var intTableHeight = parseInt(strTableHeight.replace("px", ""));
  var intTableTop = parseInt(strTableTop.replace("px", ""));
  intHeight = intHeight + size;
  intHeight1 = intHeight1 + size;
  intTableHeight = intTableHeight + size;
  intTableTop = intTableTop + size;
  if (intHeight > 0) {
    ContentFrame.style.height = intHeight + "px";
    ContentFrame1.style.height = intHeight1 + "px";
    ContentTable.style.height = intTableHeight + "px";
    ContentTable2.style.top = intTableTop + "px";
  }
  iFrame0.scwin.f_grdHeiht(size);
  iFrame1.scwin.f_grdHeiht(size);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_CreateHeader = function () {};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  console.log("============f_Create===========");
  // ds_dpsitSave.AddRow();
  let row;
  row = ds_dpsitSave.insertRow();
  ds_dpsitSave.setRowPosition(row);
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableObjects($p, [btn_acctDeptCd_search, btn_bankbookNo_search]);
  $c.gus.cfDisableObjects($p, [ed_bankAcntNo, ed_acctDeptNm, ed_acctCd, ed_acctNm, ed_paymtCnt, ed_ramt, ed_refDpsitSaveAcctNo, lc_dpsitSaveAcctTxnStsCd, btn_disuse]);
  lc_dpsitSaveAcctKndCd.setSelectedIndex(0);
  lc_dpsitSaveAcctTxnStsCd.setSelectedIndex(0);
  lc_entryDestCd.setSelectedIndex(0);
  lc_taxDeductCd.setSelectedIndex(0);
  lc_intClsCd.setSelectedIndex(0);
  lc_intCalnCd.setSelectedIndex(0);
  $c.gus.cfEnableBtnOnly($p, [btn_Save]);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
  ds_txnContents.setJSON([]);
  // ds_dpsitSave.getRowPosition() = ds_dpsitSave.CountRow;
  scwin.pos_groupcode = ds_dpsitSave.getRowPosition();
  scwin.insertFlag = "1";
  gr_dpsitSave.setFocusedCell(ds_dpsitSave.getRowPosition(), 0);
};

//-------------------------------------------------------------------------
// 조회조건
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  console.log("============f_Retrieve===========");
  if (!$c.gus.cfIsAfterDate($p, ica_stDt.getValue(), ica_endDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ica_stDt.focus();
    return;
  }

  //거래내역 초기 세팅
  // tac_tabControl1.setSelectedTabIndex(0);

  // if ($c.gus.cfValidate([ica_stDt]) == true && $c.gus.cfValidate([ica_stDt]) == true)
  // {
  scwin.insertFlag = "0";
  // ds_condition.UseChangeInfo = false;
  // tr_retrieve.post();
  $c.sbm.execute($p, sbm_retrieve);
  // }
};

//-------------------------------------------------------------------------
// 해지후신규
//-------------------------------------------------------------------------
scwin.f_TerminationAfterCreate = async function () {
  if (ds_dpsitSave.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return false;
  }
  if (ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "dpsitSaveAcctTxnStsCd") == scwin.DUE_TERMINATION || ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "dpsitSaveAcctTxnStsCd") == scwin.MIDDLE_TERMINATION) {
    await $c.win.alert($p, "이미 해지된 내역입니다.");
    return false;
  }
  let sDpsitSaveAcctNo = "";
  sDpsitSaveAcctNo = ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "dpsitSaveAcctNo");
  ds_dpsitSave.setCellData(ds_dpsitSave.getRowPosition(), "dpsitSaveAcctTxnStsCd", scwin.DUE_TERMINATION);
  // ds_dpsitSave.ResetStatus();
  ds_dpsitSave.modifyAllStatus("R");

  // ds_dpsitSave.Importdata(ds_dpsitSave.ExportData(ds_dpsitSave.getRowPosition(),1,true));
  // ds_dpsitSave.setRowJSON(rowIndex, rowData, overwrite)

  var rowpos = ds_dpsitSave.getRowPosition() + 1;
  ds_dpsitSave.setRowJSON(rowpos, ds_dpsitSave.getRowJSON(ds_dpsitSave.getRowPosition()));
  ds_dpsitSave.setCellData(rowpos, "dpsitSaveAcctNo", "");
  ds_dpsitSave.setCellData(rowpos, "dpsitSaveAcctTxnStsCd", scwin.PAYMENT);
  ds_dpsitSave.setCellData(rowpos, "refDpsitSaveAcctNo", sDpsitSaveAcctNo);
  ds_dpsitSave.setCellData(rowpos, "newTerminationClsCd", "1");

  // gr_dpsitSave.setFocusedCell(rowpos, 0);

  $c.gus.cfDisableObjects($p, [lc_dpsitSaveAcctKndCd, lc_dpsitSaveAcctTxnStsCd, ed_acctDeptCd, ed_acctDeptNm, ed_bankbookNo, ed_bankAcntNo, ica_entryDt, ica_dueDt, ica_canclDt, ed_ctrtAmt, ed_paymtAmt, ed_paymtCnt, ed_ramt, ed_acctCd, lc_entryDestCd, lc_taxDeductCd, lc_intCalnCd, lc_intClsCd, ica_pstpnDueDt, ed_ctrtIntRt, ed_corTaxRt, btn_disuse]);
  $c.gus.cfEnableObjects($p, [ica_entryDt, ica_dueDt, ica_canclDt, ed_bankbookNo, ed_corTaxRt, ed_ctrtAmt, ed_ctrtIntRt, ed_paymtAmt, ica_pstpnDueDt, btn_bankbookNo_search]);
  $c.gus.cfEnableBtnOnly($p, [btn_Save]);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);

  // ds_txnContentsTemp.setJSON(tac_tabControl1.getWindow(0).ds_txnContents.getAllJSON());

  // scwin.f_TerminationAfterCreate_ds_txnContents_add 으로 옮김.....................start
  // tac_tabControl1.getWindow(0).ds_txnContents.setJSON([]);
  // let row ;
  // row = tac_tabControl1.getWindow(0).ds_txnContents.insertRow();
  // tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "dpsitSaveAcctNo", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(),"dpsitSaveAcctNo") );
  // tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "dpsitSaveAcctSeq", tac_tabControl1.getWindow(0).ds_txnContents.getRowCount()) ;
  // tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "acctDeptCd", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(),"acctDeptCd") );
  // tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "dpsitSaveAcctKndCd", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(),"dpsitSaveAcctKndCd") );
  // tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "dpsitSaveAcctTxnClsCd", scwin.PAYMENT) ;
  // tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "txnAmt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(),"paymtAmt") );
  // tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "txnDt", scwin.g_sCurrDate);
  // tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "ctrtAmt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(),"ctrtAmt") );

  // ds_dpsitSave.setCellData(rowpos, "paymtAmt", "0");
  // ds_dpsitSave.setCellData(rowpos, "ramt", "0");

  // tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "intRt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(),"ctrtIntRt") );
  // tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "payBankbookNo", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(),"bankBookNo") );
  // tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "ctrtIntRt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(),"ctrtIntRt") );
  // tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "corTaxRt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(),"corTaxRt") );	
  // tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "stDt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(),"entryDt") );
  // tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "endDt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(),"dueDt") );
  // tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "refDpsitSaveAcctNo", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(),"refDpsitSaveAcctNo") );
  // tac_tabControl1.getWindow(0).gr_txnContents.setColumnReadOnly("payBankbookNo", true);
  // scwin.f_TerminationAfterCreate_ds_txnContents_add 으로 옮김.....................end

  scwin.insertFlag = "2"; //신규후 해지모드

  gr_dpsitSave.setFocusedCell(rowpos, 0);
  console.log("============scwin.insertFlag 1=" + scwin.insertFlag);
};
scwin.f_TerminationAfterCreate_ds_txnContents_add = function () {
  tac_tabControl1.getWindow(0).ds_txnContents.setJSON([]);
  let row = tac_tabControl1.getWindow(0).ds_txnContents.insertRow();
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "dpsitSaveAcctNo", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "dpsitSaveAcctNo"));
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "dpsitSaveAcctSeq", tac_tabControl1.getWindow(0).ds_txnContents.getRowCount());
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "acctDeptCd", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "acctDeptCd"));
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "dpsitSaveAcctKndCd", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "dpsitSaveAcctKndCd"));
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "dpsitSaveAcctTxnClsCd", scwin.PAYMENT);
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "txnAmt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "ramt"));
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "txnDt", scwin.g_sCurrDate);
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "ctrtAmt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "ctrtAmt"));
  ds_dpsitSave.setCellData(ds_dpsitSave.getRowPosition(), "paymtAmt", "0");
  ds_dpsitSave.setCellData(ds_dpsitSave.getRowPosition(), "ramt", "0");
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "intRt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "ctrtIntRt"));
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "payBankbookNo", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition() - 1, "bankbookNo"));
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "ctrtIntRt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "ctrtIntRt"));
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "corTaxRt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "corTaxRt"));
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "stDt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "entryDt"));
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "endDt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "dueDt"));
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "refDpsitSaveAcctNo", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "refDpsitSaveAcctNo"));
  tac_tabControl1.getWindow(0).gr_txnContents.setColumnReadOnly("payBankbookNo", true);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_bankcd_Retrieve = function () {
  // ds_bankcd.DataID = "/ac.fm.stdinfomgnt.RetrieveBankCMD.do";
  // ds_bankcd.Reset();
  $c.sbm.execute($p, sbm_bankcd);
};

//-------------------------------------------------------------------------
// 그리드 추가
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  if (ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "dpsitSaveAcctTxnStsCd") == scwin.DUE_TERMINATION || ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "dpsitSaveAcctTxnStsCd") == scwin.MIDDLE_TERMINATION) {
    await $c.win.alert($p, "이미 해지된 예적금원장내역입니다");
    return;
  }
  let row;
  row = tac_tabControl1.getWindow(0).ds_txnContents.insertRow();
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "dpsitSaveAcctNo", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "dpsitSaveAcctNo"));
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "acctDeptCd", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "acctDeptCd"));
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "dpsitSaveAcctKndCd", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "dpsitSaveAcctKndCd"));
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "dpsitSaveAcctSeq", tac_tabControl1.getWindow(0).ds_txnContents.getRowCount());
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "dpsitSaveAcctTxnClsCd", "01");
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "txnDt", scwin.g_sCurrDate);
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "txnAmt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "paymtAmt"));
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "paymtAmt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "paymtAmt"));
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "ctrtIntRt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "ctrtIntRt"));
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "corTaxRt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "corTaxRt"));
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "stDt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "entryDt"));
  tac_tabControl1.getWindow(0).ds_txnContents.setCellData(row, "endDt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "dueDt"));
  if (!(ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "refDpsitSaveAcctNo") == "" || ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "refDpsitSaveAcctNo") == "") && tac_tabControl1.getWindow(0).ds_txnContents.getCellData(row, "dpsitSaveAcctTxnClsCd") == scwin.PAYMENT && ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "newTerminationClsCd") == 1) {
    // iFrame0.gr_txnContents.ColumnProp("payBankbookNo", "Edit") = "None" ;
    tac_tabControl1.getWindow(0).gr_txnContents.setColumnReadOnly("payBankbookNo", true);
  } else {
    // iFrame0.gr_txnContents.ColumnProp("payBankbookNo", "Edit") = "Numeric" ;
    tac_tabControl1.getWindow(0).gr_txnContents.setColumnReadOnly("payBankbookNo", false);
  }
  tac_tabControl1.getWindow(0).gr_txnContents.setFocusedCell(row, 0);
};

//-------------------------------------------------------------------------
// 그리드 취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  // tac_tabControl1.getWindow(0).Undo(tac_tabControl1.getWindow(0).getRowPosition());
  $c.data.undoRow($p, tac_tabControl1.getWindow(0).ds_txnContents, "Y");
};

///-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  $c.gus.cfDisableKey($p);
  // $c.gus.cfDisableObjects([btn_acctDeptCd_search,
  //                     btn_bankbookNo_search,
  $c.gus.cfDisableObjects($p, [lc_dpsitSaveAcctKndCd, lc_dpsitSaveAcctTxnStsCd, ed_acctDeptCd, ed_acctDeptNm, btn_acctDeptCd_search, ed_bankbookNo, ed_bankAcntNo, btn_bankbookNo_search, ica_entryDt, ica_dueDt, ica_canclDt, ed_ctrtAmt, ed_paymtAmt, ed_paymtCnt, ed_ramt, ed_acctCd, lc_entryDestCd, lc_taxDeductCd, lc_intCalnCd, lc_intClsCd]);
  $c.gus.cfEnableObjects($p, [ica_pstpnDueDt, ed_ctrtIntRt, ed_corTaxRt]);

  //Grid Disable 속성을 Enable로 변경한다.
  $c.gus.cfDisableBtn($p, [btn_Create, btn_Update, btn_Delete]);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let cnt1 = 0;
  let cnt2 = 0;
  let cnt = 0;
  let i = 0;
  let iCumul1 = 0;
  let iCumul2 = 0;
  if (ds_dpsitSave.getModifiedIndex().length == 0 && tac_tabControl1.getWindow(0).ds_txnContents.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }

  // if (!$c.gus.cfValidate([lc_dpsitSaveAcctKndCd,ed_acctCd,ed_acctDeptCd,ed_bankbookNo,ica_entryDt,ica_dueDt,ed_ctrtAmt,tac_tabControl1.getWindow(0).gr_txnContents])) {
  //     return false;
  // }
  let ret = await $c.gus.cfValidate($p, [lc_dpsitSaveAcctKndCd, ed_acctCd, ed_acctDeptCd, ed_bankbookNo, ica_entryDt, ica_dueDt, ed_ctrtAmt]);
  if (!ret) {
    return;
  }

  // 금액은 0 보다 작으면 안됩니다.
  if (ed_ctrtAmt.getValue() <= 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_013, "계약금액", "1"));
    return;
  }
  let tempdata = "";
  // $c.gus.cfCopyDataSetHeader(tac_tabControl1.getWindow(0), ds_txnContents);
  // ds_txnContents.ClearData();
  ds_txnContents.setJSON([]);
  for (i = 0; i < tac_tabControl1.getWindow(0).ds_txnContents.getRowCount(); i++) {
    if (tac_tabControl1.getWindow(0).ds_txnContents.getRowStatus(i) != "R" && (tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "slipNo") == null || tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "slipNo") == "")) {
      cnt++;
      if (tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "dpsitSaveAcctTxnClsCd") == scwin.PAYMENT) {
        cnt1++;
      } else {
        cnt2++;
      }
      tac_tabControl1.getWindow(0).ds_txnContents.setCellData(i, "bankbookNo", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "bankbookNo"));
      if (ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "newTerminationClsCd") == 0) {
        if (tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "dpsitSaveAcctTxnClsCd") != scwin.COR_TAX) {
          if (tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "payBankbookNo") == null || tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "payBankbookNo") == "") {
            await $c.win.alert($p, "통장번호를 입력하셔야 합니다.");
            return;
          }
        }
      } else {
        if (tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "dpsitSaveAcctTxnClsCd") == scwin.DUE_TERMINATION_TXN || tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "dpsitSaveAcctTxnClsCd") == scwin.PAYMENT) {
          if (tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "dpsitSaveAcctTxnClsCd") == scwin.DUE_TERMINATION_TXN) {
            iCumul1 = iCumul1 + 1;
          }
          if (tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "dpsitSaveAcctTxnClsCd") == scwin.PAYMENT) {
            iCumul2 = iCumul2 + 1;
          }
        } else if (tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "dpsitSaveAcctTxnClsCd") == scwin.IMP_INT) {
          if (tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "payBankbookNo") == null || tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "payBankbookNo") == "") {
            await $c.win.alert($p, "통장번호를 입력하셔야 합니다.");
            return false;
          }
        }
      }
    }
  }
  if (ds_dpsitSave.getModifiedIndex().length == 0 && cnt <= 0) {
    await $c.win.alert($p, "저장할 자료가 존재하지 않습니다.");
    return;
  }
  if (tac_tabControl1.getWindow(0).ds_txnContents.getRowCount() > 0) {
    if (ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "newTerminationClsCd") == 1) {
      if (!(iCumul2 == 1)) {
        await $c.win.alert($p, "거래구분 불입은 필수입력내역입니다.");
        return;
      }
    } else {
      if (cnt1 > 0 && cnt2 > 0) {
        await $c.win.alert($p, "거래구분이 납입인경우는 이외의 구분을 선택을 할수 없습니다.");
        return;
      }
    }
  } else {
    await $c.win.alert($p, "거래내역을 입력하십시오");
    return;
  }

  // if ( ds_poorAcctRecv.getRowStatus(i) != "R" && ds_poorAcctRecv.getCellData(i,"modYn") == "T" ){
  // ds_txnContents.setCellData(rowIndex, columnInfo, data)
  // ds_txnContents.getCellData(rowIndex, columnInfo)
  // for( i=0 ; i < tac_tabControl1.getWindow(0).ds_txnContents.getRowCount(); i++)
  // ( tac_tabControl1.getWindow(0).ds_txnContents.getRowStatus(i) != "R"

  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmResult) {
    for (i = 0; i < tac_tabControl1.getWindow(0).ds_txnContents.getRowCount(); i++) {
      console.log("===tac_tabControl1.getWindow(0).ds_txnContents.getRowStatus(i)=" + tac_tabControl1.getWindow(0).ds_txnContents.getRowStatus(i));
      if (tac_tabControl1.getWindow(0).ds_txnContents.getRowStatus(i) != "R" && (tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "slipNo") == null || tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "slipNo") == "")) {
        tac_tabControl1.getWindow(0).ds_txnContents.setCellData(i, "bankbookNo", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "bankbookNo"));
        if (ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "newTerminationClsCd") == 0) {
          if (tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "dpsitSaveAcctTxnClsCd") != scwin.COR_TAX) {
            if (tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "dpsitSaveAcctTxnClsCd") == scwin.DUE_TERMINATION_TXN || tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "dpsitSaveAcctTxnClsCd") == scwin.MIDDLE_TERMINATION_TXN) {
              if (tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "dpsitSaveAcctTxnClsCd") == scwin.MIDDLE_TERMINATION_TXN) {
                ds_dpsitSave.setCellData(ds_dpsitSave.getRowPosition(), "dpsitSaveAcctTxnStsCd", scwin.MIDDLE_TERMINATION);
              } else {
                ds_dpsitSave.setCellData(ds_dpsitSave.getRowPosition(), "dpsitSaveAcctTxnStsCd", scwin.DUE_TERMINATION);
              }
              ds_dpsitSave.setCellData(ds_dpsitSave.getRowPosition(), "canclDt", tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "txnDt"));
            }
          }
        }
        // tempdata = tempdata + tac_tabControl1.getWindow(0).ds_txnContents.ExportData(i,1,true);
        // tempdata = tempdata + tac_tabControl1.getWindow(0).ds_txnContents.getRowJSON(i);
        ds_txnContents.setRowJSON(i, tac_tabControl1.getWindow(0).ds_txnContents.getRowJSON(i));
      }
    }

    // ds_txnContents.Importdata(tempdata);
    // ds_txnContents.setJSON(tempdata);
    scwin.saveFlag = "1";
    scwin.pos_groupCode = ds_dpsitSave.getRowPosition();
    // tr_save.Action = "/ac.fm.fundemploy.dpsitsaveacctmgnt.RegistDepositSavingAccountLedgerCMD.do";
    // tr_save.post();	  	
    sbm_save.action = "/ac.fm.fundemploy.dpsitsaveacctmgnt.RegistDepositSavingAccountLedgerCMD.do";
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (select_code, orgObjCd, orgObjNm, sFlag) {
  var code = "";
  var name = "";
  if (orgObjCd != "") {
    code = orgObjCd.getValue();
  }
  if (orgObjNm != "") {
    name = orgObjNm.getValue();
  }
  switch (select_code) {
    // 차입기관 PopUp 호출
    // case '1' :
    //     sCmdName = "retrieveBankInfo";
    //     rtnList = $c.gus.cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null); // 차입기관
    //     break;
    // // 차입번호 PopUp 호출
    // case '2' :
    //     sCmdName = "retrieveBorrLedgNoInfo";
    //     rtnList = $c.gus.cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null); // 차입번호
    //     break;
    // 부서 PopUp 호출
    case '3':
      var param = ",,,0,";
      // sCmdName = "retrieveAcctDeptCdInfo";
      await udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, code, name, sFlag, null, null, null, null, param, null, null, null, null, null, null, null, null); // 관리부서
      break;
    // 부서 PopUp 호출
    // case '4' :
    //     sCmdName = "retrieveAcctCdInfo";
    //     rtnList = $c.gus.cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null); // 부서
    //     break;
  }
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_acctDeptCd, ed_acctDeptNm, rtnList);
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList) {
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    orgObjCd.setValue(rtnList[0]); // 코드값
    orgObjNm.setValue(rtnList[1]); // 코드명
    orgObjCd.options.hidVal = rtnList[0]; // HIDDEN 코드값
    orgObjNm.options.hidVal = rtnList[1]; // HIDDEN 코드명
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
    orgObjCd.options.hidVal = "";
    orgObjNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.options.hidVal) {
      return;
    } else {
      orgObjCd.setValue("");
    }
  }
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjCd.getValue().trim() != "" || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 출금 통장조회 POPUP호출
//-------------------------------------------------------------------------
scwin.f_BankBookPopUp = async function (sFlag) {
  var rtnList = new Array();
  var i_bankbookno = ed_bankbookNo.getValue();
  var acctKndCd = lc_dpsitSaveAcctKndCd.getValue();
  if (acctKndCd == '06') {
    acctKndCd = '11';
  }

  // rtnList = $c.gus.cfCommonPopUp('retrieveBankBookCdInfo'
  await udc_bankBookCdInfo.cfCommonPopUp(scwin.udc_bankBookCdInfo_callBackFunc, i_bankbookno, '', sFlag, null, null, null, null, ",,," + acctKndCd, null, null, null, null); // 거래처
};
scwin.udc_bankBookCdInfo_callBackFunc = function (rtnList) {
  scwin.f_resultBankbookPopUp(ed_bankbookNo, ed_bankAcntNo, rtnList);
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultBankbookPopUp = function (orgObjCd, orgObjNm, rtnList) {
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    orgObjCd.setValue(rtnList[0]); // 코드값
    orgObjNm.setValue(rtnList[4]); // 코드명
    orgObjCd.options.hidVal = rtnList[0]; // HIDDEN 코드값
    orgObjNm.options.hidVal = rtnList[4]; // HIDDEN 코드명
    ds_dpsitSave.setCellData(ds_dpsitSave.getRowPosition(), "bankNm", rtnList[2]); // 통장명
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
    orgObjCd.options.hidVal = "";
    orgObjNm.options.hidVal = "";
    ds_dpsitSave.setCellData(ds_dpsitSave.getRowPosition(), "bankNm", ""); // 통장명
  }
};
scwin.f_CheckBankbookPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  }
  if (orgObjCd.getValue().trim() != "") {
    orgObjCd.setValue(orgObjCd.getValue().trim());
    orgObjNm.setValue(orgObjNm.getValue().trim());
    scwin.f_BankBookPopUp("T");
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
    ds_dpsitSave.setCellData(ds_dpsitSave.getRowPosition(), "bankNm", ""); // 통장명
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
// scwin.f_CheckBankbookPopUp = function(orgObjCd, orgObjNm) {
//     if (orgObjCd.value != orgObjCd.hidVal){
//         orgObjNm.value = "";
//     }
//     if (orgObjCd.Text.trim() != "" ) {
//         scwin.f_BankBookPopUp('T');
//     } else {
//         orgObjCd.Text = "";
//         orgObjNm.value = "";
//     }
// };

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  let i = 0;
  let k = 0;
  let cnt = 0;
  let arr = new Array();
  let tempdata = "";

  // let rowCnt = ;
  // spanTotal.setLabel(rowCnt);
  // if( rowCnt == 0 ){
  // 	$c.win.alert(MSG_CM_ERR_003);

  if (ds_dpsitSave.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
    return;
  } else {
    let iAllCnt = 1;
    let iSelCnt = 1;
    for (i = 0; i < tac_tabControl1.getWindow(0).ds_txnContents.getRowCount(); i++) {
      if (i > 0 && tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i - 1, "slipNo") != tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "slipNo")) {
        iAllCnt = iAllCnt + 1;
      }
      if (tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "selYn") != 0) {
        cnt++;
        k++;
        arr[k] = i;
        if (k - 1 <= 0) {
          l = 1;
        } else {
          l = k - 1;
        }
        if (tac_tabControl1.getWindow(0).ds_txnContents.getCellData(arr[k], "slipNo") != tac_tabControl1.getWindow(0).ds_txnContents.getCellData(arr[l], "slipNo")) {
          iSelCnt = iSelCnt + 1;
        }
      }
    }
    if (cnt <= 0) {
      await $c.win.alert($p, "삭제할 자료가 존재하지않습니다");
      return;
    }
    let confirmResult = await $c.win.confirm($p, "삭제하시겠습니까?");
    if (confirmResult) {
      for (i = 0; i < tac_tabControl1.getWindow(0).ds_txnContents.getRowCount(); i++) {
        if (tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "selYn") != 0) {
          tac_tabControl1.getWindow(0).ds_txnContents.setCellData(i, "delYn", "1");
        }
        if (tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "dpsitSaveAcctTxnClsCd") == scwin.DUE_TERMINATION_TXN || tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "dpsitSaveAcctTxnClsCd") == scwin.MIDDLE_TERMINATION_TXN) {
          ds_dpsitSave.setCellData(ds_dpsitSave.getRowPosition(), "dpsitSaveAcctTxnStsCd", "01"); // 진행
          ds_dpsitSave.setCellData(ds_dpsitSave.getRowPosition(), "canclDt", "");
        }
      }
      if (iSelCnt == iAllCnt) {
        ds_dpsitSave.setCellData(ds_dpsitSave.getRowPosition(), "delYn", "1");
      } else {
        ds_dpsitSave.setCellData(ds_dpsitSave.getRowPosition(), "delYn", "0");
      }
      $c.gus.cfCopyDataSetHeader($p, tac_tabControl1.getWindow(0).ds_txnContents, ds_txnContents);
      ds_txnContents.setJSON([]);
      for (i = 0; i < tac_tabControl1.getWindow(0).ds_txnContents.getRowCount(); i++) {
        if (tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "selYn") != 0) {
          if (ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "delYn") == 0 && tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "dpsitSaveAcctTxnClsCd") == scwin.PAYMENT) {
            ds_dpsitSave.setCellData(ds_dpsitSave.getRowPosition(), "ramt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "ramt") - tac_tabControl1.getWindow(0).ds_txnContents.getCellData(i, "txnAmt"));
            ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "paymtCnt", ds_dpsitSave.getCellData(ds_dpsitSave.getRowPosition(), "paymtCnt") - 1);
          }
          // tempdata = tempdata + tac_tabControl1.getWindow(0).ds_txnContents.ExportData(i,1,true);
          ds_txnContents.setRowJSON(i, tac_tabControl1.getWindow(0).ds_txnContents.getRowJSON(i));
        }
      }
      scwin.pos_groupCode = ds_dpsitSave.getRowPosition();
      // ds_txnContents.Importdata(tempdata);
      // tr_save.Action = "/ac.fm.fundemploy.dpsitsaveacctmgnt.DeleteDepositSavingAccountLedgerCMD.do";
      // tr_save.post();
      sbm_save.action = "/ac.fm.fundemploy.dpsitsaveacctmgnt.DeleteDepositSavingAccountLedgerCMD.do";
      $c.sbm.execute($p, sbm_save);
    }
  }
};

//-------------------------------------------------------------------------
// Key Press 이벤트 처리 : Enter Key Event시 조회한다.
//-------------------------------------------------------------------------
scwin.f_KeyPress = function (keyIdx) {
  //Enter Key Event시에만 조회 함수 호출 
  if (window.event != null && window.event.keyCode != 13 && window.event.Type != "click") return;

  //사원번호에서 enter key 쳤을 경우에 조회 
  if (keyIdx == 1) scwin.f_Retrieve();
};
scwin.sbm_retrieve_submitdone = function (e) {
  let rowCnt = ds_dpsitSave.getRowCount();
  spanTotal.setLabel(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_ERR_003);
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableBtn($p, [btn_Update, btn_Save, btn_Delete]);
    // tac_tabControl1.getWindow(0).ClearData();
    // iFrame1.ds_UncollectedProfit.ClearData();      
    tac_tabControl1.getWindow(0).ds_txnContents.setJSON([]);
    tac_tabControl1.getWindow(1).ds_UncollectedProfit.setJSON([]);
  } else {
    gr_dpsitSave.setFocusedCell(scwin.pos_groupCode, 0);
    scwin.hidDpsitSaveAcctNo = ds_dpsitSave.getCellData(0, "dpsitSaveAcctNo");
    tac_tabControl1.getWindow(0).scwin.f_Retrieve();
    tac_tabControl1.getWindow(1).scwin.f_Retrieve();
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfEnableObjects($p, [btn_disuse]);
    $c.gus.cfEnableAllBtn($p);
    // 저장전의 위치로 이동시킨다.
    // $c.gus.cfGoPrevPosition(ds_dpsitSave, 0);
  }
  scwin.insertFlag = "0";
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.saveFlag = "0";
  scwin.insertFlag = "0";
  scwin.f_Retrieve();
};
scwin.sbm_dpsitSaveAcctKnd_submitdone = function (e) {
  let rowCnt = ds_dpsitSaveAcctKnd.getRowCount();
  if (rowCnt > 0) {
    ed_acctCd.setValue(ds_dpsitSaveAcctKnd.getCellData(0, "col1"));
    ed_acctNm.setValue(ds_dpsitSaveAcctKnd.getCellData(0, "col3"));
  }
};
scwin.lc_dpsitSaveAcctKndCd_onchange = function (info) {
  dma_dpsitSaveAcctKnd.set("sysCd", "CommonEBC");
  dma_dpsitSaveAcctKnd.set("queryId", "retrieveBorrowKindInfo");
  dma_dpsitSaveAcctKnd.set("param1", "FM005");
  dma_dpsitSaveAcctKnd.set("param2", info.newValue);
  $c.sbm.execute($p, sbm_dpsitSaveAcctKnd);
};
scwin.ds_dpsitSave_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  // let SysStatus = ds_user.getRowStatus(row);
  // var userClsCd = ds_user.getCellData(row,'userClsCd');

  console.log("======ds_dpsitSave_onrowpositionchange======scwin.insertFlag 1=" + scwin.insertFlag);

  // if( row >= 0 ){

  scwin.hidDpsitSaveAcctNo = ds_dpsitSave.getCellData(row, "dpsitSaveAcctNo");
  // iFrame1.f_Retrieve();
  // iFrame0.f_Retrieve();
  tac_tabControl1.getWindow(1).scwin.f_Retrieve();
  if (scwin.insertFlag == "2") {
    scwin.f_TerminationAfterCreate_ds_txnContents_add();
  } else {
    tac_tabControl1.getWindow(0).scwin.f_Retrieve();
    if (scwin.insertFlag != "0" && scwin.saveFlag == "0") {
      if (ds_dpsitSave.getRowStatusValue(row) != 0) {
        $c.gus.cfEnableKeyData($p);
        $c.gus.cfDisableObjects($p, [ed_bankAcntNo, ed_acctDeptNm, ed_acctCd, ed_acctNm, ed_paymtCnt, ed_ramt, ed_refDpsitSaveAcctNo, lc_dpsitSaveAcctTxnStsCd, btn_disuse]);
        $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Create, btn_Delete]);
        $c.gus.cfEnableBtnOnly($p, [btn_Save]);
        $c.gus.cfDisableObjects($p, [btn_disuse]);
        // $c.gus.cfDisableObjects([btn_rowAdd,btn_rowCancel,btn_disuse]);
        // $c.gus.cfEnableObjects([btn_rowAdd,btn_rowCancel]);
        tac_tabControl1.getWindow(0).scwin.rowBtnEnable();
      } else {
        $c.gus.cfDisableKeyData($p);
        // $c.gus.cfDisableObjects([btn_rowAdd,btn_rowCancel,btn_disuse]);
        tac_tabControl1.getWindow(0).scwin.rowBtnDisable();
        $c.gus.cfDisableObjects($p, [btn_disuse]);
        $c.gus.cfDisableBtnOnly($p, [btn_Update, btn_Create, btn_Delete, btn_Save]);
      }
    } else {
      scwin.hidDpsitSaveAcctNo = ds_dpsitSave.getCellData(row, "dpsitSaveAcctNo");
      $c.gus.cfDisableKeyData($p);
      // $c.gus.cfEnableObjects([btn_rowAdd,btn_rowCancel]);
      tac_tabControl1.getWindow(0).scwin.rowBtnEnable();
      $c.gus.cfEnableObjects($p, [btn_disuse]);
      $c.gus.cfEnableBtnOnly($p, [btn_Update, btn_Create, btn_Delete]);
      $c.gus.cfEnableObjects($p, [btn_Save]);
    }
  }
};
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp("3", ed_acctDeptCd, ed_acctDeptNm, "F");
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, "3", "CD");
};
scwin.udc_bankBookCdInfo_onclickEvent = function (e) {
  scwin.f_BankBookPopUp("F");
};
scwin.udc_bankBookCdInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckBankbookPopUp(ed_bankbookNo, ed_bankAcntNo, "", "CD");
};
scwin.btn_search1_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'은행 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bankCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_condition.bankCd',visibleRowNum:'20',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_bankcd'},E:[{T:1,N:'xf:label',A:{ref:'bankNm'}},{T:1,N:'xf:value',A:{ref:'bankCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예적금종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchdpsitSaveAcctKndCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_condition.dpsitSaveAcctKndCd',chooseOptionLabel:'전체',visibleRowNum:'10'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'가입일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'stDt',refDataMap:'dma_condition',style:'',id:'udc_fromToCalendar3',refEdDt:'endDt',edFromId:'ica_stDt',edToId:'ica_endDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchdpsitSaveAcctTxnStsCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',sortOption:'value',ref:'data:dma_condition.dpsitSaveAcctTxnStsCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_dpsitSave',focusMode:'row',id:'gr_dpsitSave',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'17',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'30'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'예적금번호',width:'80',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'상태',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'은행',width:'140',sortable:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'종류',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'가입일자',width:'80',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'만기일자',width:'80',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'dpsitSaveAcctNo',inputType:'text',removeBorderStyle:'false',width:'80'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'dpsitSaveAcctTxnStsCd',inputType:'select',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankNm',inputType:'text',removeBorderStyle:'false',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'dpsitSaveAcctKndCd',inputType:'select',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'entryDt',inputType:'text',style:'',textAlign:'center',value:'',width:'80',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDt',inputType:'text',style:'',value:'',width:'80',displayFormat:'yyyy/MM/dd',dataType:'date',textAlign:'center'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예적금종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dpsitSaveAcctKndCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_dpsitSave.dpsitSaveAcctKndCd','ev:onchange':'scwin.lc_dpsitSaveAcctKndCd_onchange',objType:'data',visibleRowNum:'10'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정과목',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_acctCd',class:'',objType:'data'}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_acctNm',class:'',objType:'data'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_acctDeptCd_search',code:'acctDeptCd',codeId:'ed_acctDeptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent',id:'udc_acctDeptCdInfo',maxlengthCode:'5',name:'acctDeptNm',nameId:'ed_acctDeptNm',popupID:'',refDataCollection:'ds_dpsitSave',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'부서',mandatoryCode:'true',objTypeName:'data',objTypeCode:'data',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dpsitSaveAcctTxnStsCd',style:'width: 120px;',submenuSize:'fixed',ref:'data:ds_dpsitSave.dpsitSaveAcctTxnStsCd',objType:'data',sortOption:'value'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'통장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_bankbookNo_search',code:'bankbookNo',codeId:'ed_bankbookNo',id:'udc_bankBookCdInfo',maxlengthCode:'5',name:'bankAcntNo',nameId:'ed_bankAcntNo',popupID:'',refDataCollection:'ds_dpsitSave',selectID:'retrieveBankBookCdInfo',style:'',validTitle:'통장',mandatoryCode:'true',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_bankBookCdInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bankBookCdInfo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'불입횟수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_paymtCnt',style:'width: 100px;',maxlength:'3',ref:'data:ds_dpsitSave.paymtCnt',objType:'data',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_ctrtIntRt',style:'width: 100px;',ref:'data:ds_dpsitSave.ctrtIntRt',objType:'data',dataType:'number',displayFormat:'#,###.##',maxlength:'7'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'법인세율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_corTaxRt',style:'width: 100px;',ref:'data:ds_dpsitSave.corTaxRt',objType:'data',displayFormat:'#.##',maxlength:'4',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'가입일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_entryDt',style:'',ref:'data:ds_dpsitSave.entryDt',delimiter:'/',objType:'data',mandatory:'true',title:'가입일자'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'만기일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_dueDt',style:'',ref:'data:ds_dpsitSave.dueDt',delimiter:'/',objType:'data',mandatory:'true',title:'만기일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_ctrtAmt',style:'width: 150px;',ref:'data:ds_dpsitSave.ctrtAmt',dataType:'number',displayFormat:'#,###,###,###',objType:'data',mandatory:'true',title:'계약금액'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'불입금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_paymtAmt',style:'width: 150px;',ref:'data:ds_dpsitSave.paymtAmt',displayFormat:'#,###,###,##0',objType:'data',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'잔액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_ramt',style:'width: 150px;',ref:'data:ds_dpsitSave.ramt',displayFormat:'#,###,###,###',objType:'data',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'참조예적금번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_refDpsitSaveAcctNo',style:'width: 150px;',ref:'data:ds_dpsitSave.refDpsitSaveAcctNo',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'해지일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_canclDt',style:'',ref:'data:ds_dpsitSave.canclDt',delimiter:'/',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'연장만기일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_pstpnDueDt',style:'',ref:'data:ds_dpsitSave.pstpnDueDt',delimiter:'/',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'가입목적',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_entryDestCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_dpsitSave.entryDestCd',objType:'data',sortOption:'value'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세금공제',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_taxDeductCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_dpsitSave.taxDeductCd',objType:'data',sortOption:'value'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이자구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_intClsCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_dpsitSave.intClsCd',objType:'data',sortOption:'value'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이자계산',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_intCalnCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_dpsitSave.intCalnCd',objType:'data',sortOption:'value'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',class:'wq_tab',id:'tac_tabControl1',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs3',label:'거래내역',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs4',label:'미수수익',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content3',style:'',src:'/ui/ac/fm/fundemploy/dpsitsaveacctmgnt/fm_202_01_02b.xml'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'Content',style:'line-height:28px;height: 30px;text-align:center;width: 100%;'}}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content4',style:'',src:'/ui/ac/fm/fundemploy/dpsitsaveacctmgnt/fm_202_01_03b.xml'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'info-list'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'예적금종류 “정기예금(단기)” 선택시 통장의 통장종류는 “01 정기예금”이어야 합니다. (통장관리 화면 확인)',class:'txt-dot txt-red'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'예적금종류 “정기예금(장기)” 선택시 통장의 통장종류는 “11 장기성예금”이어야 합니다. (통장관리 화면 확인) ',class:'txt-dot txt-red'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_disuse',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.f_TerminationAfterCreate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'해지후신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',style:'',type:'button',userAuth:'C',objType:'bCreate','ev:onclick':'scwin.f_Create'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'btn_Update',style:'',type:'button',userAuth:'U',objType:'bUpdate','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button',objType:'bSave','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button',userAuth:'D',objType:'bDelete','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})