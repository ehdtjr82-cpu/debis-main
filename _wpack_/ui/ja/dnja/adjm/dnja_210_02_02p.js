/*amd /ui/ja/dnja/adjm/dnja_210_02_02p.xml 36152 637567d9f1a5ee06eb29f84437bc735985b042acaa9636599e12bf85c98b8a5d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commonList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaClsCd',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaPatternCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcrcBilgAmt',name:'name19',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commonRetriveList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sellVatNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsNm',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_purchaseEvidence',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'curRow',name:'name19'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chk',name:'checkbox'}},{T:1,N:'w2:column',A:{dataType:'text',id:'button',name:'건별처리;Popup'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsClntNo',name:'매입처'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vehclNo',name:'차량번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsClntNm',name:'매입처명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'certiNo',name:'거래명세서;번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsIntendDt',name:'매입;예정일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'busiNo',name:'사업자번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyAmt',name:'공급금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vat',name:'부가세'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sumAmt',name:'합계금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'evidKndClsCd',name:'증빙구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'taxnClsCd',name:'과세구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipDt',name:'전표일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyDt',name:'공급일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'summary',name:'적요'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsAmtFcrc',name:'매입금액외화'}},{T:1,N:'w2:column',A:{dataType:'text',id:'recptYn',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsDeptCd',name:'매입부서;코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsDeptNm',name:'매입부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipNo',name:'전표번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'setoffSlipNo',name:'상계전표번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'drawEmpNo',name:'작성자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'drawAcctDeptCd',name:'작성부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'adjmDept',name:'정산부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsVatNo',name:'name18'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selpchItemCd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selpchItemNm',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmk',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modId',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptCd',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctCd',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crcCd',name:'name7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'amt',name:'name8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'amtFcrc',name:'name9'}},{T:1,N:'w2:column',A:{dataType:'text',id:'exchRt',name:'name10'}},{T:1,N:'w2:column',A:{dataType:'text',id:'opntAcctCd',name:'name11'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntClntNo',name:'name12'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipCloseYm',name:'name13'}},{T:1,N:'w2:column',A:{dataType:'text',id:'taxCloseYm',name:'name14'}},{T:1,N:'w2:column',A:{dataType:'text',id:'repstNm',name:'name15'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sellVatNo',name:'name16'}},{T:1,N:'w2:column',A:{dataType:'text',id:'choice',name:'name17'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col46',name:'name46',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseEvidenceResult',saveRemovedData:'true','ev:ondataload':'scwin.ds_purchaseEvidenceResult_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pchsVatNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsNm',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_createTaxInvoice',action:'/ja.dnja.adjm.SaveDaeseongPurchaseBillIndivisualListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_purchaseEvidence","key":"IN_DS1"},{"id":"ds_purchaseEvidenceResult","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_purchaseEvidenceResult","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteTaxInvoice',action:'/ja.dnja.adjm.CancelDaeseongSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_purchaseEvidence","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_deleteTaxInvoice_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.isDelete;
scwin.isUpdate;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.isDelete = false;
  scwin.isUpdate = false;
  const codeOptions = [{
    grpCd: "SD070",
    compID: "acb_lc_taxnClsCd",
    opt: {
      "range": "1"
    }
  }, {
    grpCd: "FS500",
    compID: "gr_commonList:dcsnClsCd",
    opt: {
      "range": "1"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);

  //파라미터(JSON) = param -> JSON
  var params = $c.data.getParameter($p);
  //파라미터(ARRAY) = array -> array
  // var arrParam = $p.getAllParameter().paramData;

  /* var arrParent = params; //window.dialogArguments;
  var purchaseEvidence = arrParent.purchaseEvidence;
  var commonList = arrParent.commonList;
   // $c.gus.cfCopyDataSet(purchaseEvidence, ds_purchaseEvidenceTmp);
  // $c.gus.cfCopyDataSet(commonList, ds_commonList);
   ds_commonList.setJSON(commonList);
  ds_purchaseEvidence.setJSON(purchaseEvidence); */

  // var purchaseEvidence = opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_purchaseEvidence;
  var commonList = opener[JSON.parse($p.getPopupParam()).menuInfo.pFrmId].getWindow().ds_commonCopyList;
  var purchaseEvidence = params.purchaseEvidence;
  ds_purchaseEvidence.setJSON(purchaseEvidence);

  // $c.gus.cfCopyDataSet(purchaseEvidence, ds_purchaseEvidence);
  $c.gus.cfCopyDataSet($p, commonList, ds_commonList);
  ds_commonList.setJSON(ds_commonList.getAllJSON().filter(f => f.chk == "T"));
  if (ds_purchaseEvidence.getCellData(0, "slipNo") != null && ds_purchaseEvidence.getCellData(0, "slipNo") != "") {
    gr_commonList.setColumnVisible("chk", false);
    // var cnt = ds_commonList.getRowCount();

    // for( var i = 0; i < cnt; i++ ) {
    //     if( ds_commonList.getCellData(i, "chk") != "T" ) {
    //         // ds_commonList.deleteRow(i); //DeleteRow(i);
    //         ds_commonList.removeRow(i);
    //         // if(i > 0)i--;
    //     }
    // }
    $c.gus.cfDisableBtn($p, [btn_save]);
  } else {
    // var cnt = ds_commonList.getRowCount();

    // for( var i = cnt; i < cnt; i++ ) {
    //     if( ds_commonList.getCellData(i, "chk") != "T" ) {
    //         // ds_commonList.deleteRow(i); //DeleteRow(i);
    //         ds_commonList.removeRow(i);
    //         // if(i > 0)i--;
    //     }
    // }
    $c.gus.cfDisableBtn($p, [btn_delete]);
  }
  $c.gus.cfEnableObj($p, ica_ed_slipCloseYm, false);
  $c.gus.cfEnableObj($p, ica_ed_taxCloseYm, false);
};
scwin.ondataload = function () {
  scwin.f_pushPchaseEvidence();

  // Cell Focus Move
  // if( ds_commonList.getRowCount() > 0 ) {
  //     gr_commonList.setFocusedMultiCell(0, 0, 0, 9);
  // }
};

//-------------------------------------------------------------------------
// 화면종료시
//-------------------------------------------------------------------------
scwin.onpageunload = function () {
  var returnObject = new Object();
  if (scwin.isDelete) {
    returnObject.flag = "DELETE";
    returnObject.curRow = ds_purchaseEvidence.getCellData(0, "curRow");
  } else if (scwin.isUpdate) {
    returnObject.flag = "UPDATE";
    returnObject.curRow = ds_purchaseEvidence.getCellData(0, "curRow");
    returnObject.sellVatNo = ds_purchaseEvidence.getCellData(0, "sellVatNo");
    returnObject.slipNo = ds_purchaseEvidence.getCellData(0, "slipNo");
    returnObject.dcsnClsNm = ds_purchaseEvidence.getCellData(0, "dcsnClsNm");
    returnObject.spplyDt = ds_purchaseEvidence.getCellData(0, "spplyDt");
    returnObject.slipDt = ds_purchaseEvidence.getCellData(0, "slipDt");
    returnObject.summary = ds_purchaseEvidence.getCellData(0, "summary");
  } else {
    returnObject.curRow = ds_purchaseEvidence.getCellData(0, "curRow");
    returnObject.spplyDt = ica_ed_spplyDt.getValue();
    returnObject.slipDt = ica_ed_slipDt.getValue();
    returnObject.summary = ed_txt_summary.getValue();
  }
  $c.win.closePopup($p, returnObject);
};

//-------------------------------------------------------------------------
// 매출증빙 화면 세팅
//-------------------------------------------------------------------------
scwin.f_pushPchaseEvidence = function () {
  ed_busiNo.setValue(ds_purchaseEvidence.getCellData(0, "busiNo"));
  acb_lc_evidKndClsCd.setValue(ds_purchaseEvidence.getCellData(0, "evidKndClsCd"));
  acb_lc_taxnClsCd.setValue(ds_purchaseEvidence.getCellData(0, "taxnClsCd"));
  ed_txt_pchsVatNo.setValue(ds_purchaseEvidence.getCellData(0, "sellVatNo"));
  ica_ed_spplyDt.setValue(ds_purchaseEvidence.getCellData(0, "spplyDt"));
  ed_txt_busiNm.setValue(ds_purchaseEvidence.getCellData(0, "pchsClntNm"));
  ed_txt_repstNm.setValue(ds_purchaseEvidence.getCellData(0, "repstNm"));
  ed_txt_pchsDeptCd.setValue(ds_purchaseEvidence.getCellData(0, "pchsDeptCd"));
  ed_txt_pchsDeptNm.setValue(ds_purchaseEvidence.getCellData(0, "pchsDeptNm"));
  ed_txt_slipNo.setValue(ds_purchaseEvidence.getCellData(0, "slipNo"));
  ica_ed_slipDt.setValue(ds_purchaseEvidence.getCellData(0, "slipDt"));
  ed_txt_summary.setValue(ds_purchaseEvidence.getCellData(0, "summary"));
  ed_spplyAmt.setValue(ds_purchaseEvidence.getCellData(0, "spplyAmt"));
  ed_vatAmt.setValue(ds_purchaseEvidence.getCellData(0, "vat"));
  ed_sumAmt.setValue(ds_purchaseEvidence.getCellData(0, "sumAmt"));
  ica_ed_slipCloseYm.setValue(ds_purchaseEvidence.getCellData(0, "slipCloseYm"));
  ica_ed_taxCloseYm.setValue(ds_purchaseEvidence.getCellData(0, "taxCloseYm"));
  totalRows.setValue(ds_commonList.getRowCount());
};

//-------------------------------------------------------------------------
// 매출증빙 화면 세팅( 저장버튼이후 결과값)
//-------------------------------------------------------------------------	
scwin.f_pushSellingEvidence = function () {
  ed_txt_pchsVatNo.setValue(ds_purchaseEvidenceResult.getCellData(0, "pchsVatNo"));
  ed_txt_slipNo.setValue(ds_purchaseEvidenceResult.getCellData(0, "slipNo"));
  ds_commonList.setCellData(0, "slipNo", ds_purchaseEvidenceResult.getCellData(0, "slipNo"));
  ds_commonList.setCellData(0, "sellVatNo", ds_purchaseEvidenceResult.getCellData(0, "pchsVatNo"));
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  // 세금계산서가 발행 되었으면....
  if (ds_purchaseEvidence.getCellData(0, "slipNo") != null && ds_purchaseEvidence.getCellData(0, "slipNo") != "") {
    await $c.gus.cfAlertMsg($p, "매출증빙 내역이 있는 자료는 저장 할 수 없습니다.");
    return;
  }

  //validation check
  let ret1 = await $c.gus.cfValidate($p, [ica_ed_spplyDt, ica_ed_slipDt, ed_txt_summary]);
  if (!ret1) {
    return;
  }
  $c.gus.cfCopyDataSetHeader($p, ds_commonList, ds_commonRetriveList);
  var transRow;
  var chkCnt = 0;
  for (var i = 0; i < ds_commonList.getRowCount(); i++) {
    if (ds_commonList.getCellData(i, "chk") == "T") {
      ds_commonRetriveList.setRowJSON(chkCnt, ds_commonList.getRowJSON(i), true);
      chkCnt++;
    }
  }
  if (chkCnt < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["저장할 거래명세서"]);
    return;
  }
  let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!confirm) {
    return;
  }
  ds_purchaseEvidence.setCellData(0, "spplyAmt", ed_spplyAmt.getValue());
  ds_purchaseEvidence.setCellData(0, "vatAmt", ed_vatAmt.getValue());
  ds_purchaseEvidence.setCellData(0, "sumAmt", ed_sumAmt.getValue());
  ds_purchaseEvidence.setCellData(0, "spplyDt", ica_ed_spplyDt.getValue());
  ds_purchaseEvidence.setCellData(0, "slipDt", ica_ed_slipDt.getValue());
  ds_purchaseEvidence.setCellData(0, "summary", ed_txt_summary.getValue());
  ds_purchaseEvidence.setCellData(0, "certiCnt", chkCnt);
  let e = await $c.sbm.execute($p, sbm_createTaxInvoice);
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    scwin.sbm_createTaxInvoice_submitdone(e);
  }
};
scwin.sbm_createTaxInvoice_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
};
scwin.btn_delete_onclick = async function (e) {
  scwin.f_delete();
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_delete = async function () {
  // 세금계산서가 발행 안되었으면....
  if (ds_purchaseEvidence.getCellData(0, "slipNo") == null || ds_purchaseEvidence.getCellData(0, "slipNo") == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, ["삭제할 세금계산서"]);
    return;
  }
  let confirm = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (!confirm) {
    return;
  }
  let taxChk = await scwin.f_CheckTaxCancelSpplyDt();
  if (!taxChk) {
    return;
  }
  ds_purchaseEvidence.setCellData(0, "cancelSpplyDt", ica_ed_cancelSpplyDt.getValue());
  // let e = await $c.sbm.execute(sbm_deleteTaxInvoice);
  $c.sbm.execute($p, sbm_deleteTaxInvoice);
  // if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
  //     scwin.sbm_deleteTaxInvoice_submitdone(e);
  // }
};
scwin.sbm_deleteTaxInvoice_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (await $c.gus.cfAlertMsg($p, MSG_CM_INF_004)) {
    scwin.isDelete = true;
    scwin.onpageunload();
  }
  ;
};

//-------------------------------------------------------------------------
// 세금계산서 취소 때  세무마감여부 CHECK
//-------------------------------------------------------------------------
scwin.f_CheckTaxCancelSpplyDt = async function () {
  var taxCloseYm = ica_ed_taxCloseYm.getValue();
  var spplyYm = ica_ed_spplyDt.getValue().substring(0, 6);
  var isTrue;
  if (taxCloseYm >= spplyYm) {
    isTrue = await $c.win.confirm($p, "세무마감된 계산서를 취소할 경우에는 반드시 거래처에 수정세금계산서를 발행해야 합니다.(거래처와 합의 요함)\n\n세금계산서 및 전표를 취소하시겠습니까?");
    if (!isTrue) {
      return false;
    }
    if ($c.gus.cfIsNull($p, ica_ed_cancelSpplyDt.getValue())) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["[수정세금계산서 공급일자 ]"]); //@은(는) 필수 입력 항목입니다
      ica_ed_cancelSpplyDt.focus();
      return false;
    }
    let ret1 = await $c.gus.cfValidate($p, [ica_ed_cancelSpplyDt]);
    if (!ret1) {
      ica_ed_cancelSpplyDt.focus();
      return false;
    }
  }
  return true;
};
scwin.ds_purchaseEvidenceResult_ondataload = function () {
  ds_purchaseEvidence.setCellData(0, "sellVatNo", ds_purchaseEvidenceResult.getCellData(0, "pchsVatNo"));
  ds_purchaseEvidence.setCellData(0, "slipNo", ds_purchaseEvidenceResult.getCellData(0, "slipNo"));
  ds_purchaseEvidence.setCellData(0, "dcsnClsNm", ds_purchaseEvidenceResult.getCellData(0, "dcsnClsNm"));
  ds_purchaseEvidence.setCellData(0, "spplyDt", ica_ed_spplyDt.getValue());
  ds_purchaseEvidence.setCellData(0, "slipDt", ica_ed_slipDt.getValue());
  ds_purchaseEvidence.setCellData(0, "summary", ed_txt_summary.getValue());
  ds_commonRetriveList.setCellData(0, "sellVatNo", ds_purchaseEvidenceResult.getCellData(0, "pchsVatNo"));
  ds_commonRetriveList.setCellData(0, "slipNo", ds_purchaseEvidenceResult.getCellData(0, "slipNo"));
  ds_commonRetriveList.setCellData(0, "dcsnClsNm", ds_purchaseEvidenceResult.getCellData(0, "dcsnClsNm"));
  $c.gus.cfEnableBtnOnly($p, [btn_delete]);
  gr_commonList.setColumnVisible("chk", false); //ColumnProp('chk', 'Show') = "false";

  scwin.isUpdate = true;
  scwin.f_pushSellingEvidence();
};
scwin.gr_commonList_onheaderclick = function (headerId) {
  var i = 0;
  var bCheck = gr_commonList.getHeaderValue(headerId);
  if (headerId == "column1") {
    //checkbox
    let spplyAmt = 0;
    let vatAmt = 0;
    let spplyAmtFcrc = 0;
    let bilgAmt = 0;
    let bilgAmtFcrc = 0;
    let fcrcBilgAmt = 0;
    if (bCheck == "1") {
      for (i = 0; i < ds_commonList.getRowCount(); i++) {
        ds_commonList.setCellData(i, "chk", "T");
        spplyAmt = spplyAmt + ds_commonList.getCellData(i, "spplyAmt");
        vatAmt = vatAmt + ds_commonList.getCellData(i, "vat");
        spplyAmtFcrc = spplyAmtFcrc + ds_commonList.getCellData(i, "spplyAmtFcrc");
        bilgAmt = bilgAmt + ds_commonList.getCellData(i, "bilgAmt");
        bilgAmtFcrc = bilgAmtFcrc + ds_commonList.getCellData(i, "bilgAmtFcrc");
        fcrcBilgAmt = fcrcBilgAmt + ds_commonList.getCellData(i, "fcrcBilgAmt");
      }
      ed_spplyAmt.setValue(spplyAmt);
      ed_vatAmt.setValue(vatAmt);
      ed_sumAmt.setValue(spplyAmt + vatAmt);
      ds_purchaseEvidence.setCellData(0, "bilgAmtFcrc", bilgAmtFcrc);
      ds_purchaseEvidence.setCellData(0, "fcrcBilgAmt", fcrcBilgAmt);
      ds_purchaseEvidence.setCellData(0, "bilgAmt", bilgAmt);
    } else {
      for (i = 0; i < ds_commonList.getRowCount(); i++) {
        ds_commonList.setCellData(i, "chk", "F");
      }
      ed_spplyAmt.text = 0;
      ed_vatAmt.text = 0;
      ed_sumAmt.text = 0;
      ds_purchaseEvidence.setCellData(0, "bilgAmt", 0);
      ds_purchaseEvidence.setCellData(0, "bilgAmtFcrc", 0);
      ds_purchaseEvidence.setCellData(0, "fcrcBilgAmt", 0);
    }
  }
};
scwin.btn_close_onclick = function (e) {
  scwin.onpageunload();
};
scwin.f_excel = async function () {
  if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
    let sheetTitle = "거래명세서별 청구서 내역";
    let options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle,
      type: "1",
      hiddenVisible: "true" //히든값(true : 포함, false : 미포함)
    };
    $c.data.downloadGridViewExcel($p, gr_commonList, options);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8 flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'세금계산서',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세금계산서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_txt_pchsVatNo',placeholder:'',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공급일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_ed_spplyDt',style:'',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w150',id:'ed_busiNo',placeholder:'',style:'',readOnly:'true',displayFormat:'###-##-#####'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_txt_busiNm',placeholder:'',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_txt_repstNm',placeholder:'',style:'',readOnly:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8 flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매입확정 정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w50',id:'ed_txt_pchsDeptCd',placeholder:'',style:'',readOnly:'true'}},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_pchsDeptNm',placeholder:'',style:'',readOnly:'true'}},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_txt_slipNo',placeholder:'',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_ed_slipDt',style:'',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'증빙구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'acb_lc_evidKndClsCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',mandatory:'true',chooseOptionLabel:'선택',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세금계산서기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영세율세금계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'30'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'법인카드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'40'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'개인카드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'50'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'현금영수증'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'60'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영수증'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'70'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'99'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타-부가세없음'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'00'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부가세구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'w150',editType:'select',id:'acb_lc_taxnClsCd',search:'start',style:'',submenuSize:'auto',mandatory:'true',chooseOption:'true',objType:'data',allOption:'',ref:'',chooseOptionLabel:'선택'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적요(비고)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_txt_summary',placeholder:'',style:'',mandatory:'true',displaymessage:'true',invalidMessage:'적용'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공급금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{checkMaxByteOnInput:'true',class:' w150 tar',id:'ed_spplyAmt',placeholder:'',style:'',readOnly:'true',dataType:'number',maxlength:'13',displayFormat:'#,##0'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{checkMaxByteOnInput:'true',class:' w150 tar',id:'ed_vatAmt',placeholder:'',style:'',readOnly:'true',dataType:'number',displayFormat:'#,##0',maxlength:'13'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'합계금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{checkMaxByteOnInput:'true',class:' w150 tar',id:'ed_sumAmt',placeholder:'',style:'',readOnly:'true',dataType:'number',maxlength:'13',displayFormat:'#,##0'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridID:'gr_commonList',btnUser:'N',gridUpYn:'N',gridDownFn:'scwin.f_excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_commonList',id:'gr_commonList',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:onheaderclick':'scwin.gr_commonList_onheaderclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'column1',inputType:'checkbox',style:'',value:'',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'거래명세서번호<br/>(BILL-NO)',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'적요<br/>(TITLE)',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'공급금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'부가세',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'합계금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'세금계산서<br/>번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'공급일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'전표확정<br/>여부',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',style:'',value:'',width:'50',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',style:'',textAlign:'left',value:'',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'100',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat',inputType:'text',style:'',textAlign:'right',value:'',width:'80',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'100',readOnly:'true',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellVatNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyDt',inputType:'calendar',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnClsCd',inputType:'select',style:'',value:'',width:'100',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회계마감월',style:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ica_ed_slipCloseYm',style:''}}]},{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세무마감월',style:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ica_ed_taxCloseYm',style:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수정세금계산서 공급일자',style:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_ed_cancelSpplyDt',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.btn_delete_onclick',objType:'bDelete',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]})