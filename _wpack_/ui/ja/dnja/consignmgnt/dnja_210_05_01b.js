/*amd /ui/ja/dnja/consignmgnt/dnja_210_05_01b.xml 57036 c872bc6eb521f2f8f0d8d73b46fac7d476e556671545d0d659f0117787c37bd6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipDtFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClntNo',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_setoffClntList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'setoffClntNm',name:'매니저명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffSlipNo',name:'상계전표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffClntNo',name:'상계거래처',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseTrust',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseTrustSlipContents',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctNm',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellingTrust',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellingTrustSlipContents',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctNm',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_slipHeader'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postAcctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'상계거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'상계거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'amt',name:'상계금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ddCnt',name:'미급거래처일수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cashAmt',name:'미지급거래처현금',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftAmt',name:'미급거래처어음',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_trustQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'setoffClntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtFrom',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtTo',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSetoffClntList',action:'/ja.dnja.consignmgnt.RetrieveDnSetoffClntListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_setoffClntList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_setoffClntList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveSetoffClntList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDnSetoffTrustList',action:'/ja.dnja.consignmgnt.RetrieveDnSetoffTrustListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_trustQueryCondition","key":"IN_DS1"},{"id":"ds_purchaseTrust","key":"OUT_DS1"},{"id":"ds_sellingTrust","key":"OUT_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDnSetoffTrustList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDnConsignmentSetoff',action:'/ja.dnja.consignmgnt.RetrieveDnConsignmentSetoffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_slipNo","key":"IN_DS1"},{"id":"dma_slipHeader","key":"OUT_DS1"},{"id":"ds_purchaseTrustSlipContents","key":"OUT_DS2"},{"id":"ds_sellingTrustSlipContents","key":"OUT_DS3"}]',target:'data:json,[{"id":"dma_slipHeader","key":"OUT_DS1"},{"id":"ds_purchaseTrustSlipContents","key":"OUT_DS2"},{"id":"ds_sellingTrustSlipContents","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDnConsignmentSetoff_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ja.dnja.consignmgnt.CreateDnConsignmentSetoffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_purchaseTrustSlipContents","key":"IN_DS1"},{"id":"ds_sellingTrustSlipContents","key":"IN_DS2"},{"id":"dma_slipHeader","key":"IN_DS3"},{"id":"ds_slipNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ja.dnja.consignmgnt.DeleteDnConsignmentSetoffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_slipHeader","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'ACConstants',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 세션정보
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin"); // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님

scwin.strCurDate = $c.date.getServerDateTime($p);
scwin.strPreDate = $c.date.getDateAddMonthDirection($p, scwin.strCurDate, 0, "F"); // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.purchaseAmt = 0;
scwin.sellingAmt = 0;

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  $c.gus.cfDisableObjects($p, [ica_ed_postDt, ed_bilgClntNo, ed_txt_setoffClntNm, ed_amt, ed_cash, ed_draft]);
  $c.gus.cfEnableObjects($p, [btn_create]);
  $c.gus.cfDisableObjects($p, [btn_delete]);
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  udc_slipDt.setInitDate(scwin.strPreDate, scwin.strCurDate);
};

//-------------------------------------------------------------------------
// function name : f_FieldClear
// function desc : 조회조기 필드 Clear
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// function name : f_defaultValue
// function desc : 조회 기본값 Setting
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  udc_slipDt.setInitDate(scwin.strPreDate, scwin.strCurDate);
};

//-------------------------------------------------------------------------
// function name : f_PurchaseMoveDown
// function desc : 매입 이동
// function Parameter : null
//-------------------------------------------------------------------------
scwin.btn_move_onclick = function (e) {
  ds_purchaseTrustSlipContents.removeAll();
  var CRSALES_PURCHASE_TRUS = "2100410";
  let acctDeptCd = "";
  scwin.purchaseAmt = 0;
  if (ds_purchaseTrust.getRowCount() > 0) {
    for (var i = 0; i < ds_purchaseTrust.getRowCount(); i++) {
      if (ds_purchaseTrust.getCellData(i, "choice") == 1) {
        //ds_purchaseTrustSlipContents.AddRow();
        ds_purchaseTrustSlipContents.setCellData(ds_purchaseTrustSlipContents.getRowPosition(), "acctCd", ds_purchaseTrust.getCellData(i, "acctCd"));
        ds_purchaseTrustSlipContents.setCellData(ds_purchaseTrustSlipContents.getRowPosition(), "acctNm", ds_purchaseTrust.getCellData(i, "acctNm"));
        ds_purchaseTrustSlipContents.setCellData(ds_purchaseTrustSlipContents.getRowPosition(), "amt", ds_purchaseTrust.getCellData(i, "amt"));
        ds_purchaseTrustSlipContents.setCellData(ds_purchaseTrustSlipContents.getRowPosition(), "acctDeptCd", ds_purchaseTrust.getCellData(i, "acctDeptCd"));
        ds_purchaseTrustSlipContents.setCellData(ds_purchaseTrustSlipContents.getRowPosition(), "acctDeptNm", ds_purchaseTrust.getCellData(i, "acctDeptNm"));
        ds_purchaseTrustSlipContents.setCellData(ds_purchaseTrustSlipContents.getRowPosition(), "bilgLodeptCd", ds_purchaseTrust.getCellData(i, "bilgLodeptCd"));
        ds_purchaseTrustSlipContents.setCellData(ds_purchaseTrustSlipContents.getRowPosition(), "mgntClntNo", ds_purchaseTrust.getCellData(i, "clntNo"));
        ds_purchaseTrustSlipContents.setCellData(ds_purchaseTrustSlipContents.getRowPosition(), "slipNo", ds_purchaseTrust.getCellData(i, "slipNo"));
        ds_purchaseTrustSlipContents.setCellData(ds_purchaseTrustSlipContents.getRowPosition(), "taxinvcDt", ds_purchaseTrust.getCellData(i, "taxinvcDt"));
        ds_purchaseTrustSlipContents.setCellData(ds_purchaseTrustSlipContents.getRowPosition(), "mgntNo", ds_purchaseTrust.getCellData(i, "acctRecvNo"));
        acctDeptCd = ds_purchaseTrust.getCellData(i, "acctDeptCd");
        if (CRSALES_PURCHASE_TRUS == ds_purchaseTrust.getCellData(i, "acctCd")) {
          scwin.purchaseAmt = scwin.purchaseAmt + ds_purchaseTrust.getCellData(i, "amt");
        }
      }
    }
    if (scwin.purchaseAmt - scwin.sellingAmt > 0) {
      dma_slipHeader.set("amt", Math.floor(scwin.purchaseAmt - scwin.sellingAmt));
      if (dma_slipHeader.get("amt") > 0) {
        $c.gus.cfEnableObjects($p, [ed_cash, ed_draft]);
      } else {
        $c.gus.cfDisableObjects($p, [ed_cash, ed_draft]);
      }
      dma_slipHeader.set("postAcctDeptCd", acctDeptCd);
      //scwin.f_checkPopUp(ed_postAcctDeptCd, txt_postAcctDeptNm, '2');
      scwin.f_openPopUp('2', ed_postAcctDeptCd, txt_postAcctDeptNm, 'T');
      dma_slipHeader.set("cashAmt", Math.floor((scwin.purchaseAmt - scwin.sellingAmt) / 2));
      dma_slipHeader.set("draftAmt", Math.floor((scwin.purchaseAmt - scwin.sellingAmt) / 2));
    }
  }
  totalRows3.setValue(ds_purchaseTrustSlipContents.getRowCount());
};

//-------------------------------------------------------------------------
// function name : f_SellMoveDown
// function desc : 매출 이동
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.btn_sellMoveDown_onclick = function (e) {
  ds_sellingTrustSlipContents.removeAll();
  var CRSALES_SELLING_TRUS = "1110415";
  scwin.sellingAmt = 0;
  if (ds_sellingTrust.getRowCount() > 0) {
    for (var i = 0; i < ds_sellingTrust.getRowCount(); i++) {
      if (ds_sellingTrust.getCellData(i, "choice") == 1) {
        //ds_sellingTrustSlipContents.AddRow();
        ds_sellingTrustSlipContents.setCellData(ds_sellingTrustSlipContents.getRowPosition(), "acctCd", ds_sellingTrust.getCellData(i, "acctCd"));
        ds_sellingTrustSlipContents.setCellData(ds_sellingTrustSlipContents.getRowPosition(), "acctNm", ds_sellingTrust.getCellData(i, "acctNm"));
        ds_sellingTrustSlipContents.setCellData(ds_sellingTrustSlipContents.getRowPosition(), "amt", ds_sellingTrust.getCellData(i, "amt"));
        ds_sellingTrustSlipContents.setCellData(ds_sellingTrustSlipContents.getRowPosition(), "acctDeptCd", ds_sellingTrust.getCellData(i, "acctDeptCd"));
        ds_sellingTrustSlipContents.setCellData(ds_sellingTrustSlipContents.getRowPosition(), "acctDeptNm", ds_sellingTrust.getCellData(i, "acctDeptNm"));
        ds_sellingTrustSlipContents.setCellData(ds_sellingTrustSlipContents.getRowPosition(), "bilgLodeptCd", ds_sellingTrust.getCellData(i, "bilgLodeptCd"));
        ds_sellingTrustSlipContents.setCellData(ds_sellingTrustSlipContents.getRowPosition(), "mgntClntNo", ds_sellingTrust.getCellData(i, "clntNo"));
        ds_sellingTrustSlipContents.setCellData(ds_sellingTrustSlipContents.getRowPosition(), "slipNo", ds_sellingTrust.getCellData(i, "slipNo"));
        ds_sellingTrustSlipContents.setCellData(ds_sellingTrustSlipContents.getRowPosition(), "taxinvcDt", ds_sellingTrust.getCellData(i, "taxinvcDt"));
        ds_sellingTrustSlipContents.setCellData(ds_sellingTrustSlipContents.getRowPosition(), "mgntNo", ds_sellingTrust.getCellData(i, "acctRecvNo"));
        if (CRSALES_SELLING_TRUS == ds_sellingTrust.getCellData(i, "acctCd")) {
          scwin.sellingAmt = scwin.sellingAmt + ds_sellingTrustSlipContents.getCellData(ds_sellingTrustSlipContents.getRowPosition(), "amt");
        }
      }
    }
    if (scwin.purchaseAmt - scwin.sellingAmt > 0) {
      dma_slipHeader.set("amt", Math.floor(scwin.purchaseAmt - scwin.sellingAmt));
      if (dma_slipHeader.get("amt") > 0) {
        $c.gus.cfEnableObjects($p, [ed_cash, ed_draft]);
      } else {
        $c.gus.cfDisableObjects($p, [ed_cash, ed_draft]);
      }
      dma_slipHeader.set("cashAmt", Math.floor((scwin.purchaseAmt - scwin.sellingAmt) / 2));
      dma_slipHeader.set("draftAmt", Math.floor((scwin.purchaseAmt - scwin.sellingAmt) / 2));
    }
  }
  totalRows4.setValue(ds_sellingTrustSlipContents.getRowCount());
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
// function Parameter : null 
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  if ($c.gus.cfIsNull($p, ed_slipDtFrom.getValue())) {
    await $c.win.alert($p, "전표시작일자는 필수 입력 항목입니다.");
    ed_slipDtFrom.focus();
    return false;
  }
  if ($c.gus.cfIsNull($p, ed_slipDtTo.getValue())) {
    await $c.win.alert($p, "전표종료일자는 필수 입력 항목입니다.");
    ed_slipDtTo.focus();
    return false;
  }

  // 전표일자 FROM - TO 체크
  if (!$c.gus.cfIsAfterDate($p, ed_slipDtFrom.getValue(), ed_slipDtTo.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }

  // 소속거래처
  if (!(await $c.gus.cfValidate($p, [ed_homeClntNo]))) {
    return;
  }
  await $c.sbm.execute($p, sbm_retrieveSetoffClntList);
};
scwin.sbm_retrieveSetoffClntList_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    totalRows.setValue(ds_setoffClntList.getRowCount());
    gr_setoffClntList.setFocusedCell(0, 0);
    if (ds_setoffClntList.getRowCount() == 0) {
      if ($c.gus.cfCheckCreateFlag($p) == true) {
        $c.gus.cfTurnCreateFlag($p, false);
      } else {
        $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      }
    } else {
      if (ds_setoffClntList.getCellData(ds_setoffClntList.getRowPosition(), "setoffSlipNo") != "") {
        ed_slipNo.setValue(ds_setoffClntList.getCellData(ds_setoffClntList.getRowPosition(), "setoffSlipNo"));
        //scwin.f_checkPopUp(ed_slipNo, txt_slipNo, '3');
        scwin.f_openPopUp('3', ed_slipNo, txt_slipNo, 'T');
        scwin.f_slipRetrieve(); // 상계내역 조회
      } else {
        scwin.btn_new_onclick();
        scwin.f_retrieveDnSetoffTrustList(ds_setoffClntList.getRowPosition()); // 상계대상내역 조회
      }
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_RetrieveDnSetoffTrustList
// function desc : 상계대상내역 조회
// function Parameter : Row : 행번호 
//-------------------------------------------------------------------------
scwin.f_retrieveDnSetoffTrustList = function (row) {
  dma_trustQueryCondition.set("setoffClntNo", ds_setoffClntList.getCellData(row, "setoffClntNo")); //상계거래처
  dma_trustQueryCondition.set("slipDtFrom", ed_slipDtFrom.getValue());
  dma_trustQueryCondition.set("slipDtTo", ed_slipDtTo.getValue());

  //ds_trustQueryCondition.UseChangeInfo = false;

  //tr_retrieveDnSetoffTrustList.post();
  $c.sbm.execute($p, sbm_retrieveDnSetoffTrustList);
};
scwin.sbm_retrieveDnSetoffTrustList_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    totalRows1.setValue(ds_purchaseTrust.getRowCount());
    totalRows2.setValue(ds_sellingTrust.getRowCount());
  }
};

//-------------------------------------------------------------------------
// function name : f_Create
// function desc : 신규
// function Parameter : null
//-------------------------------------------------------------------------
scwin.btn_new_onclick = function (e) {
  ds_purchaseTrustSlipContents.removeAll();
  ds_sellingTrustSlipContents.removeAll();
  dma_slipHeader.setEmptyValue();
  txt_postAcctDeptNm.setValue("");
  $c.gus.cfDisableObjects($p, [ica_ed_postDt, ed_bilgClntNo, ed_txt_setoffClntNm, ed_amt, ed_cash, ed_draft]);
  $c.gus.cfEnableObjects($p, [ed_cash, ed_draft, btn_create]);
  $c.gus.cfDisableObjects($p, [btn_delete]);
};

//-------------------------------------------------------------------------
//function name : f_Save
//function desc : 저장
//function Parameter : null
//-------------------------------------------------------------------------
scwin.btn_create_onclick = async function (e) {
  let validate = await scwin.f_validation("Save");
  if (!validate) {
    return;
  }

  // 저장확인
  let confirm = await $c.win.confirm($p, "전표를 생성하시겠습니까?");
  if (confirm) {
    dma_slipHeader.set("clntNo", ds_purchaseTrustSlipContents.getCellData(ds_purchaseTrustSlipContents.getRowPosition(), "mgntClntNo"));
    dma_slipHeader.set("postAcctDeptCd", ds_purchaseTrustSlipContents.getCellData(ds_purchaseTrustSlipContents.getRowPosition(), "acctDeptCd"));
    //tr_save.Post();
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    if (ds_slipNo.getCellData(ds_slipNo.getRowPosition(), "slipNo") != "") {
      $c.gus.cfShowSlipInfo($p, ds_slipNo.getCellData(ds_slipNo.getRowPosition(), "slipNo"));
    }
    scwin.btn_new_onclick();
    scwin.f_retrieveDnSetoffTrustList();
  }
};

//-------------------------------------------------------------------------
//function name : f_Delete
//function desc : 전표삭제
//function Parameter : null
//-------------------------------------------------------------------------
scwin.btn_delete_onclick = async function (e) {
  if (!scwin.f_validation("Delete")) {
    return;
  }

  // 삭제확인
  let confirm = await $c.win.confirm($p, "전표를 삭제하시겠습니까?");
  if (confirm) {
    //ds_slipHeader.UseChangeInfo = false;
    if (confirm) {
      //tr_delete.Post();
      $c.sbm.execute($p, sbm_delete);
    }
  }
};
scwin.sbm_delete_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_004); // 성공적으로 삭제하였습니다
    scwin.btn_new_onclick();
    scwin.f_retrieveDnSetoffTrustList(ds_setoffClntList.getRowPosition());
  }
};

//-------------------------------------------------------------------------
//function name : f_Validation
//function desc : 조회 조건 검증
//function Parameter : sType : 검증 타입
//-------------------------------------------------------------------------    
scwin.f_validation = async function (sType) {
  var vpurchaseTrustSlipContents = ds_purchaseTrustSlipContents.getRowCount();
  var vsellingTrustSlipContents = ds_sellingTrustSlipContents.getRowCount();
  if (sType == "Search") {
    let ret1 = await $c.gus.cfValidate($p, [tbl_search]);
    if (!ret1) {
      return false;
    }

    //전표 일자 체크
    if ($c.gus.cfIsNull($p, ed_slipDtFrom.getValue())) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["FROM일자"]);
      ed_slipDtFrom.focus();
      return false;
    }
    if ($c.gus.cfIsNull($p, ed_slipDtTo.getValue())) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["TO일자"]);
      ed_slipDtTo.focus();
      return false;
    }

    // UDC 캘린더 내에서 체크함.
    // if (!$c.gus.cfIsNull(ed_slipDtFrom.getValue()) && !$c.gus.cfIsNull(ed_slipDtTo.getValue())) {
    // 	if (!cfValidateValue(ed_slipDtTo.getValue(), "minDate=" + ed_slipDtFrom.getValue())) {
    // 		$c.gus.cfAlertMsg(MSG_CM_ERR_039);
    // 		ed_slipDtFrom.focus();
    // 		return false;
    // 	}
    // }
  } else if (sType == "Save") {
    if (ed_draft.getValue() > 0) {
      let ret2 = await $c.gus.cfValidate($p, [ica_ed_slipDt, ed_postAcctDeptCd, ed_ddCnt]);
      if (!ret2) {
        return false;
      }
    } else {
      let ret3 = await $c.gus.cfValidate($p, [ica_ed_slipDt, ed_postAcctDeptCd]);
      if (!ret3) {
        return false;
      }
    }
    if (vpurchaseTrustSlipContents <= 0) {
      $c.win.alert($p, "매입수탁전표내역이 없습니다.");
      return false;
    }
    if (vsellingTrustSlipContents <= 0) {
      $c.win.alert($p, "매출수탁전표내역이 없습니다.");
      return false;
    }
  } else if (sType == "Delete") {
    let ret4 = await $c.gus.cfValidate($p, [ica_ed_slipDt]);
    if (!ret4) {
      return false;
    }

    //		if ($c.gus.cfIsNull(ed_slipNo.getValue())) {
    //			$c.win.alert("전표번호를 선택하세요");
    //	  		ed_slipNo.focus();
    //	  		return false;
    //		}

    if (vpurchaseTrustSlipContents <= 0) {
      $c.win.alert($p, "매입수탁전표내역이 없습니다.");
      return false;
    }
    if (vpurchaseTrustSlipContents <= 0) {
      $c.win.alert($p, "매출수탁전표내역이 없습니다.");
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
//function name : f_slipRetrieve
//function desc : 전표 내역조회
//function Parameter : null
//-------------------------------------------------------------------------
scwin.f_slipRetrieve = async function () {
  if (!(ed_slipNo.getValue() == null || ed_slipNo.getValue().trim() == "")) {
    let ret1 = await $c.gus.cfValidate($p, [ed_slipNo]);
    if (!ret1) {
      return false;
    }
    ds_purchaseTrust.removeAll();
    ds_sellingTrust.removeAll();

    //ds_slipNo.UseChangeInfo = false;
    ds_slipNo.setCellAllData(0, "slipNo", ed_slipNo.getValue());
    //tr_retrieveDnConsignmentSetoff.Post();
    $c.sbm.execute($p, sbm_retrieveDnConsignmentSetoff);
  }
};
scwin.sbm_retrieveDnConsignmentSetoff_submitdone = function (e) {
  //var jsonString = dataMap.getJSON();
  //if (jsonString.includes('"userId":')) {
  //}

  if (dma_slipHeader.get("") == "slipNo") {
    $c.gus.cfEnableObjects($p, [ed_cash, ed_draft, btn_create, btn_new, btn_rowDelete1, btn_rowDelete2]);
    $c.gus.cfDisableObjects($p, [btn_delete]);
  } else {
    //scwin.f_checkPopUp(ed_postAcctDeptCd, txt_sellLodeptNm, '2');
    scwin.f_openPopUp('2', ed_postAcctDeptCd, txt_postAcctDeptNm, 'T');
    $c.gus.cfDisableObjects($p, [ed_cash, ed_draft, btn_create, btn_rowDelete1, btn_rowDelete2]);
    $c.gus.cfEnableObjects($p, [btn_delete, btn_new]);
  }
};

//-------------------------------------------------------------------------
//function name : f_openPopUp
//function desc : 팝업조회
//function Parameter : select_code : 구분, txtCode : 코드값, txtName : 코드명, sFlag : 팝업여부
//-------------------------------------------------------------------------
// 소속거래처
scwin.udc_homeClntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp('CODE', '1', ed_homeClntNo, txt_homeClntNm, 'T');
};
scwin.udc_homeClntNo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp('NAME', '1', ed_homeClntNo, txt_homeClntNm, 'T');
};
scwin.udc_homeClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_homeClntNo.getValue(), txt_homeClntNm.getValue(), 'F');
};

// 귀속부서
scwin.udc_postAcctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp('CODE', '2', ed_postAcctDeptCd, txt_postAcctDeptNm, 'T');
};
scwin.udc_postAcctDeptCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp('NAME', '2', ed_postAcctDeptCd, txt_postAcctDeptNm, 'T');
};
scwin.udc_postAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_postAcctDeptCd.getValue(), txt_postAcctDeptNm.getValue(), 'T');
};
scwin.udc_postAcctDeptCd_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp('2', ed_postAcctDeptCd, txt_postAcctDeptNm, 'T');
};

// 전표번호
scwin.udc_slipNo_onblurCodeEvent = function (e) {
  //f_CheckPopUp(ed_slipNo, txt_slipNo, '3');
  // if( ed_slipNo.getValue() == '' ) return;
  // scwin.f_openPopUp('3', ed_slipNo, txt_slipNo, 'T');
  scwin.f_CheckPopUp('CODE', '3', ed_slipNo, txt_slipNo, 'T');
};
scwin.udc_slipNo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp('NAME', '3', ed_slipNo, txt_slipNo, 'T');
};
scwin.udc_slipNo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_slipNo.getValue(), txt_slipNo.getValue(), 'F');
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (type, disGubun, codeObj, nameObj, pClose) {
  var codeVal = codeObj ? codeObj.getValue() : '';
  var nameVal = nameObj ? nameObj.getValue() : '';
  if (codeObj) codeObj.setValue("");
  if (nameVal) nameObj.setValue("");
  if (type == 'CODE') {
    if (codeVal != '') scwin.f_openPopUp(disGubun, codeVal, '', pClose);
  } else if (type == 'NAME') {
    if (nameVal != '') scwin.f_openPopUp(disGubun, '', nameVal, pClose);
  }
};
scwin.f_openPopUp = function (select_code, txtCode, txtName, sFlag) {
  console.log("### f_openPopUp : " + select_code + ", txtCode:" + txtCode + ", txtName:" + txtName + ", sFlag:" + sFlag);
  // debugger;

  // let code = txtCode.getValue();
  // let name = txtName.getValue();
  // if ( txtName != null ) {
  //     name = txtName.getValue();
  // }

  switch (select_code) {
    case '1':
      // 거래처 팝업
      udc_homeClntNo.setSelectId("retrieveSubsidaryClntListJa");
      udc_homeClntNo.cfCommonPopUp(scwin.udc_homeClntNo_callBackFunc, txtCode, txtName, sFlag, null, null, null, null, null, null, null, null, null, null, "F", null, null); // 거래처
      break;
    case '2':
      // 회계부서코드팝업
      udc_postAcctDeptCd.setSelectId("retrieveAcctDeptCdInfo");
      udc_postAcctDeptCd.cfCommonPopUp(scwin.udc_postAcctDeptCd_callBackFunc, txtCode, txtName, sFlag, null, null, null, null, null, null, null, null, null, null, null, null);
      break;
    case '3':
      // 전표번호 팝업
      param = ACConstants.SLIPKNDCD_DN_SETOFF_THUS;
      udc_slipNo.setSelectId("retrieveConsignmentSetoffSlipNo");
      udc_slipNo.cfCommonPopUp(scwin.udc_slipNo_callBackFunc, txtCode, txtName, sFlag, null, null, null, null, param, null, null, null, null, null, "F", null, null); // 전표번호
      break;
  }
};
scwin.udc_homeClntNo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_homeClntNo.setValue(rtnList[0]); //코드
    txt_homeClntNm.setValue(rtnList[1]); //명
  } else {
    ed_homeClntNo.setValue(""); //코드
    txt_homeClntNm.setValue(""); //명
  }
};
scwin.udc_postAcctDeptCd_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_postAcctDeptCd.setValue(rtnList[0]); //코드
    txt_postAcctDeptNm.setValue(rtnList[1]); //명
  } else {
    ed_postAcctDeptCd.setValue(""); //코드
    txt_postAcctDeptNm.setValue(""); //명
  }
};
scwin.udc_slipNo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_slipNo.setValue(rtnList[0]); //코드
    txt_slipNo.setValue(rtnList[1]); //명

    scwin.f_slipRetrieve();
  } else {
    ed_slipNo.setValue(""); //코드
    txt_slipNo.setValue(""); //명
  }
};
scwin.gr_setoffClntList_onrowindexchange = async function (rowIndex, oldRow) {
  if (ds_setoffClntList.getCellData(ds_setoffClntList.getRowPosition(), "setoffSlipNo") != "") {
    ed_slipNo.setValue(ds_setoffClntList.getCellData(ds_setoffClntList.getRowPosition(), "setoffSlipNo"));
    //scwin.f_CheckPopUp(ed_slipNo, txt_slipNo, '3');
    let ret = await scwin.f_openPopUp('3', ed_slipNo, txt_slipNo, 'T');
    if (ret) scwin.f_slipRetrieve(); // 상계내역 조회
  } else {
    scwin.btn_new_onclick();
    scwin.f_retrieveDnSetoffTrustList(ds_setoffClntList.getRowPosition()); // 상계대상내역 조회
  }
};
scwin.gr_purchaseTrust_oncellclick = function (rowIndex, columnIndex, columnId) {
  let Colid = gr_purchaseTrust.getColumnID(columnIndex);
  // 전표번호 선택 시
  if (Colid == "slipNo" && rowIndex > 0 && !$c.gus.cfIsNull($p, ds_purchaseTrust.getCellData(rowIndex, "slipNo"))) {
    $c.gus.cfShowSlipInfo($p, ds_purchaseTrust.getCellData(rowIndex, "slipNo"));
  }
};
scwin.gr_sellingTrust_oncellclick = function (rowIndex, columnIndex, columnId) {
  let Colid = gr_sellingTrust.getColumnID(columnIndex);
  // 전표번호 선택 시
  if (Colid == "slipNo" && rowIndex > 0 && !$c.gus.cfIsNull($p, ds_sellingTrust.getCellData(rowIndex, "slipNo"))) {
    $c.gus.cfShowSlipInfo($p, ds_sellingTrust.getCellData(rowIndex, "slipNo"));
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_slipDt',refDataMap:'dma_search',refEdDt:'slipDtTo',refStDt:'slipDtFrom',style:'',edFromId:'ed_slipDtFrom',edToId:'ed_slipDtTo',mandatoryFrom:'Y',mandatoryTo:'Y'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_homeClntNo',nameId:'txt_homeClntNm',btnId:'btn_homeClntNo',id:'udc_homeClntNo',refDataCollection:'dma_search',code:'homeClntNo',mandatoryCode:'true',objTypeCode:'data',maxlengthCode:'6','ev:onblurCodeEvent':'scwin.udc_homeClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_homeClntNo_onclickEvent','ev:onblurNameEvent':'scwin.udc_homeClntNo_onblurNameEvent',validTitle:'상계거래처',objTypeName:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 25%;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'상계대상',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox gvwflex'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_setoffClntList',style:'',autoFit:'allColumn',id:'gr_setoffClntList',visibleRowNum:'15',class:'wq_gvw','ev:onrowindexchange':'scwin.gr_setoffClntList_onrowindexchange',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'매니저명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'상계전표',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'상계거래처',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'setoffClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'setoffSlipNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'setoffClntNo',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매입',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdPurchaseTrust',btnUser:'N',gridUpYn:'N',gridID:'gr_purchaseTrust',gridDownYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_purchaseTrust',id:'gr_purchaseTrust',style:'',visibleRowNum:'3',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_purchaseTrust_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'전표종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'전표일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'회계처리일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'계정',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'금액',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'적요',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',width:'80',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',width:'200',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column24',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column22',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'shattle ',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico btn-double-down',id:'btn_purchaseMoveDown',style:'',type:'button','ev:onclick':'scwin.btn_move_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'맨이후'}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_purchaseTrustSlipContents',id:'gr_purchaseTrustSlipContents',style:'',visibleRowNum:'3',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'계정',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'귀속부서',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdPurchaseTrust',gridID:'gr_purchaseTrustSlipContents',btnRowDelObj:'btn_rowDelete1',btnDelYn:'N',btnRowAddYn:'N',btnCancelYn:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매출/대급금',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',id:'udc_topGrdSellingTrust',btnUser:'N',gridUpYn:'N',gridID:'gr_sellingTrust',gridDownYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_sellingTrust',id:'gr_sellingTrust',style:'',visibleRowNum:'3',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_sellingTrust_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption7',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'전표종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'전표일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'회계처리일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'계정',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'금액',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'적요',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndNm',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',textAlign:'left',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',textAlign:'right',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',textAlign:'left',width:'200'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',value:'합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',textAlign:'right',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',width:'200'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'shattle ',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico btn-double-down',id:'btn_sellMoveDown',style:'',type:'button','ev:onclick':'scwin.btn_sellMoveDown_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'맨이후'}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_sellingTrustSlipContents',id:'gr_sellingTrustSlipContents',style:'',visibleRowNum:'3',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption8',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'계정',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'귀속부서',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',textAlign:'left',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',textAlign:'left',value:'',width:'120'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'합계',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',textAlign:'right',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'120'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows4',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdSellingTrust',gridID:'gr_sellingTrustSlipContents',btnRowDelObj:'btn_rowDelete2',btnCancelYn:'N',btnDelYn:'N',btnRowAddYn:'N'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',codeId:'ed_postAcctDeptCd',nameId:'txt_postAcctDeptNm',btnId:'btn_postAcctDeptCd',id:'udc_postAcctDeptCd',code:'postAcctDeptCd',refDataCollection:'dma_slipHeader','ev:onblurCodeEvent':'scwin.udc_postAcctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_postAcctDeptCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_postAcctDeptCd_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{refDataCollection:'dma_slipHeader',codeId:'ed_slipNo',code:'slipNo',popupID:'',nameId:'txt_slipNo',style:'width: 250px;',id:'udc_slipNo',btnId:'btn_slipNo',hideName:'true','ev:onblurCodeEvent':'scwin.udc_slipNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_slipNo_onclickEvent','ev:onblurNameEvent':'scwin.udc_slipNo_onblurNameEvent'}},{T:1,N:'xf:input',A:{class:'',id:'ed_slipNo2',placeholder:'',style:'width: 150px; display:none;',ref:''}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_slipNo2',style:'display:none;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표일자/회계처리일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ica_ed_slipDt',class:'',calendarValueType:'yearMonthDate',ref:'data:dma_slipHeader.slipDt'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'/',class:''}},{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ica_ed_postDt',class:'',calendarValueType:'yearMonthDate',ref:'data:dma_slipHeader.postDt'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상계거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_bilgClntNo',placeholder:'',style:'width: 85px;',ref:'data:dma_slipHeader.clntNo'}},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_setoffClntNm',placeholder:'',style:'',ref:'data:dma_slipHeader.clntNm'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상계금액 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_amt',placeholder:'',style:'width:150px;',ref:'data:dma_slipHeader.amt',dataType:'number',maxlength:'13',minlength:'1',displayFormat:'#,##0'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'미지급거래처현금',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_cash',placeholder:'',style:'width:150px;',ref:'data:dma_slipHeader.cashAmt',dataType:'number',maxlength:'13',minlength:'1',displayFormat:'#,##0'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'미지급거래처어음/일수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_draft',placeholder:'',class:'tar',ref:'data:dma_slipHeader.draftAmt',dataType:'number',maxlength:'13',minlength:'1',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'/',class:''}},{T:1,N:'xf:input',A:{style:'width:150px;',id:'ed_ddCnt',placeholder:'',class:'tar',ref:'data:dma_slipHeader.ddCnt',dataType:'number',maxlength:'3',minlength:'1'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'info-list row',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'처리불가능 : 어음 100%',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'처리가능 : 현금 100%',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'현금-어음 각각 50% (어음으로 변경시 재경팀에 요청)',style:'',tagname:'p'}}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.btn_delete_onclick',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전표삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_create',style:'',type:'button','ev:onclick':'scwin.btn_create_onclick',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전표생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_new',style:'',type:'button','ev:onclick':'scwin.btn_new_onclick',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]}]}]}]}]}]}]}]})