/*amd /ui/ds/fs/consignmgnt/fs_202_06_12b.xml 69455 7aaebd116dce124594c018a4ef2c9ee862a1d63f04b17d7becf95fc53a0b806a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseTrust',saveRemovedData:'true','ev:ondataload':'scwin.ds_purchaseTrust_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellingTrust',saveRemovedData:'true','ev:ondataload':'scwin.ds_sellingTrust_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'name16',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseTrustSlipContents',saveRemovedData:'true','ev:ondataload':'scwin.ds_purchaseTrustSlipContents_ondataload','ev:oninsertrow':'scwin.ds_purchaseTrustSlipContents_oninsertrow','ev:onremoverow':'scwin.ds_purchaseTrustSlipContents_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_sellingTrustSlipContents',repeatNode:'map',saveRemovedData:'true',style:'','ev:ondataload':'scwin.ds_sellingTrustSlipContents_ondataload','ev:oninsertrow':'scwin.ds_sellingTrustSlipContents_oninsertrow','ev:onremoverow':'scwin.ds_sellingTrustSlipContents_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name15',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_purchaseTrustQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adjmAcctDept',name:'정산부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtFrom1',name:'전표일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtTo1',name:'전표일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'setoffClntNo1',name:'상계거래처',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_sellingTrustQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgAcctDept',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'setoffClntNo2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtFrom2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtTo2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_slipNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipHeader',saveRemovedData:'true','ev:ondataload':'scwin.ds_slipHeader_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ddCnt',name:'일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cashAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'draftAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'postAcctDeptCd',name:'회계처리귀속부서코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrievePurchaseTrust',action:'/ds.fs.adjmbilgcomn.RetrievePurchaseTrustCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_purchaseTrustQueryCondition","key":"IN_DS1"},{"id":"ds_purchaseTrust","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_purchaseTrust","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSellingTrust',action:'/ds.fs.adjmbilgcomn.RetrieveSellingTrustCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_sellingTrustQueryCondition","key":"IN_DS1"},{"id":"ds_sellingTrust","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_sellingTrust","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveConsignmentSetoff',action:'/ds.fs.adjmbilgcomn.RetrieveConsignmentSetoffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_slipNo","key":"IN_DS1"},{"id":"ds_slipHeader","key":"OUT_DS1"},{"id":"ds_purchaseTrustSlipContents","key":"OUT_DS2"},{"id":"ds_sellingTrustSlipContents","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_slipHeader","key":"OUT_DS1"},{"id":"ds_purchaseTrustSlipContents","key":"OUT_DS2"},{"id":"ds_sellingTrustSlipContents","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.retrieveConsignmentSetoff_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.fs.adjmbilgcomn.CreateConsignmentSetoffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_purchaseTrustSlipContents","key":"IN_DS1"},{"action":"modified","id":"ds_sellingTrustSlipContents","key":"IN_DS2"},{"action":"modified","id":"ds_slipHeader","key":"IN_DS3"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Save_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ds.fs.adjmbilgcomn.DeleteConsignmentSetoffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_slipHeader","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 체크필요 f_slipRetrieve tr_retrieveConsignmentSetoff

//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strPreDate = scwin.strCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); // 회원 점소 데이터
scwin.purchaseAmt = 0;
scwin.sellingAmt = 0;

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.udcOnCompleted();

  //2021.03.08 부산지사 이소현 사원 요청
  ica_slipDt.setValue(scwin.strCurDate);
  ed_amt.setValue(0);
  ed_cash.setValue(0);
  ed_draft.setValue(0);
};

//-------------------------------------------------------------------------
// 외상매입조회
//-------------------------------------------------------------------------
scwin.btn_retrieve1_onClick = async function (e) {
  // 외상매입수탁조회
  if (!(await $c.gus.cfValidate($p, [ica_slipDtFrom1, ica_slipDtTo1, ed_setoffClntNo1]))) {
    return false;
  }
  dma_purchaseTrustQueryCondition.set("adjmAcctDept", ed_adjmAcctDept.getValue());
  dma_purchaseTrustQueryCondition.set("slipDtFrom1", ica_slipDtFrom1.getValue());
  dma_purchaseTrustQueryCondition.set("slipDtTo1", ica_slipDtTo1.getValue());
  dma_purchaseTrustQueryCondition.set("setoffClntNo1", ed_setoffClntNo1.getValue());
  $c.sbm.execute($p, sbm_retrievePurchaseTrust);
};

//-------------------------------------------------------------------------
// 외상 매입 이동 f_PurchaseMoveDown
//-------------------------------------------------------------------------
scwin.btn_PurchaseMoveDown_onClick = function (e) {
  ds_purchaseTrustSlipContents.removeAll();
  let CRSALES_PURCHASE_TRUS = "2100140";
  scwin.purchaseAmt = 0;
  if (ds_purchaseTrust.getTotalRow() > 0) {
    for (i = 0; i < ds_purchaseTrust.getTotalRow(); i++) {
      if (ds_purchaseTrust.getCellData(i, "choice") == "1") {
        let row = ds_purchaseTrustSlipContents.insertRow();
        ds_purchaseTrustSlipContents.setCellData(row, "acctCd", ds_purchaseTrust.getCellData(i, "acctCd"));
        ds_purchaseTrustSlipContents.setCellData(row, "acctNm", ds_purchaseTrust.getCellData(i, "acctNm"));
        ds_purchaseTrustSlipContents.setCellData(row, "amt", ds_purchaseTrust.getCellData(i, "amt"));
        ds_purchaseTrustSlipContents.setCellData(row, "acctDeptCd", ds_purchaseTrust.getCellData(i, "acctDeptCd"));
        ds_purchaseTrustSlipContents.setCellData(row, "acctDeptNm", ds_purchaseTrust.getCellData(i, "acctDeptNm"));
        ds_purchaseTrustSlipContents.setCellData(row, "bilgLodeptCd", ds_purchaseTrust.getCellData(i, "bilgLodeptCd"));
        ds_purchaseTrustSlipContents.setCellData(row, "mgntClntNo", ds_purchaseTrust.getCellData(i, "clntNo"));
        ds_purchaseTrustSlipContents.setCellData(row, "slipNo", ds_purchaseTrust.getCellData(i, "slipNo"));
        ds_purchaseTrustSlipContents.setCellData(row, "taxinvcDt", ds_purchaseTrust.getCellData(i, "taxinvcDt"));
        ds_purchaseTrustSlipContents.setCellData(row, "mgntNo", ds_purchaseTrust.getCellData(i, "acctRecvNo"));
        ds_purchaseTrustSlipContents.setCellData(row, "summary", ds_purchaseTrust.getCellData(i, "summary"));
        if (CRSALES_PURCHASE_TRUS == ds_purchaseTrust.getCellData(i, "acctCd")) {
          scwin.purchaseAmt = Number(scwin.purchaseAmt) + Number(ds_purchaseTrust.getCellData(i, "amt"));
        }
      }
    }
    let minus = Number(scwin.purchaseAmt) - Number(scwin.sellingAmt);
    console.log("??" + minus);
    if (minus > 0) {
      let row = 0;
      if (ds_slipHeader.getTotalRow() == 0) {
        row = ds_slipHeader.insertRow();
      } else {
        row = ds_slipHeader.getTotalRow() - 1;
      }
      ds_slipHeader.setCellData(row, "amt", minus);
      ed_amt.setValue(minus);
      if (ds_slipHeader.getCellData(row, "amt") > 0) {
        $c.gus.cfEnableObjects($p, [ed_cash, ed_draft]);
      } else {
        $c.gus.cfDisableObjects($p, [ed_cash, ed_draft]);
      }
      ds_slipHeader.setCellData(row, "draftAmt", minus);
      ed_draft.setValue(minus);
      ed_draft.focus();
      gr_purchaseTrustSlipContents.setFocusedCell(ds_purchaseTrustSlipContents.getTotalRow() - 1, 0);
    }
  }

  // ed_amt.setValue(ds_slipHeader.getCellData(0, "amt"));
  // ed_draft.setValue(ds_slipHeader.getCellData(0, "draftAmt"));
};

//-------------------------------------------------------------------------
// 외상 매출 이동 f_SellMoveDown
//-------------------------------------------------------------------------
scwin.btn_SellMoveDown_onClick = function (e) {
  ds_sellingTrustSlipContents.removeAll();
  let CRSALES_SELLING_TRUS = "1110412";
  scwin.sellingAmt = 0;
  if (ds_sellingTrust.getTotalRow() > 0) {
    for (i = 0; i < ds_sellingTrust.getTotalRow(); i++) {
      if (ds_sellingTrust.getCellData(i, "choice") == "1") {
        let row = ds_sellingTrustSlipContents.insertRow();
        ds_sellingTrustSlipContents.setCellData(row, "acctCd", ds_sellingTrust.getCellData(i, "acctCd"));
        ds_sellingTrustSlipContents.setCellData(row, "acctNm", ds_sellingTrust.getCellData(i, "acctNm"));
        ds_sellingTrustSlipContents.setCellData(row, "amt", ds_sellingTrust.getCellData(i, "amt"));
        ds_sellingTrustSlipContents.setCellData(row, "acctDeptCd", ds_sellingTrust.getCellData(i, "acctDeptCd"));
        ds_sellingTrustSlipContents.setCellData(row, "acctDeptNm", ds_sellingTrust.getCellData(i, "acctDeptNm"));
        ds_sellingTrustSlipContents.setCellData(row, "bilgLodeptCd", ds_sellingTrust.getCellData(i, "bilgLodeptCd"));
        ds_sellingTrustSlipContents.setCellData(row, "mgntClntNo", ds_sellingTrust.getCellData(i, "clntNo"));
        ds_sellingTrustSlipContents.setCellData(row, "slipNo", ds_sellingTrust.getCellData(i, "slipNo"));
        ds_sellingTrustSlipContents.setCellData(row, "mgntNo", ds_sellingTrust.getCellData(i, "acctRecvNo"));
        ds_sellingTrustSlipContents.setCellData(row, "summary", ds_sellingTrust.getCellData(i, "summary"));
        if (CRSALES_SELLING_TRUS == ds_sellingTrust.getCellData(i, "acctCd")) {
          scwin.sellingAmt = scwin.sellingAmt + Number(ds_sellingTrustSlipContents.getCellData(row, "amt"));
        }
      }
    }
    let minus = Number(scwin.purchaseAmt) - Number(scwin.sellingAmt);
    console.log("minus2 " + minus);
    if (scwin.purchaseAmt - scwin.sellingAmt > 0) {
      let row = 0;
      if (ds_slipHeader.getTotalRow() == 0) {
        row = ds_slipHeader.insertRow();
      } else {
        row = ds_slipHeader.getTotalRow() - 1;
      }
      ds_slipHeader.setCellData(row, "amt", Math.floor(scwin.purchaseAmt) - Math.floor(scwin.sellingAmt));
      if (ds_slipHeader.getCellData(row, "amt") > 0) {
        $c.gus.cfEnableObjects($p, [ed_cash, ed_draft]);
      } else {
        $c.gus.cfDisableObjects($p, [ed_cash, ed_draft]);
      }
      ds_slipHeader.setCellData(0, "draftAmt", Math.floor(scwin.purchaseAmt) - Math.floor(scwin.sellingAmt));
    }
  }
};

//-------------------------------------------------------------------------
// 외상매출조회
//-------------------------------------------------------------------------
scwin.btn_retrieve2_onClick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ica_slipDtFrom2, ica_slipDtTo2, ed_setoffClntNo2]))) {
    return false;
  }
  dma_sellingTrustQueryCondition.set("bilgAcctDept", ed_bilgAcctDept.getValue());
  // dma_sellingTrustQueryCondition.set("vehclNo", ed_vehclNo.getValue());
  dma_sellingTrustQueryCondition.set("vehclNo", "");
  dma_sellingTrustQueryCondition.set("slipDtFrom2", ica_slipDtFrom2.getValue());
  dma_sellingTrustQueryCondition.set("slipDtTo2", ica_slipDtTo2.getValue());
  dma_sellingTrustQueryCondition.set("setoffClntNo2", ed_setoffClntNo2.getValue());
  $c.sbm.execute($p, sbm_retrieveSellingTrust);
};

//-------------------------------------------------------------------------
// 외상 매입 수탁 데이터셋 조회 완료시
//-------------------------------------------------------------------------
scwin.ds_purchaseTrust_ondataload = function () {
  let rowCnt = ds_purchaseTrust.getTotalRow();
  if (rowCnt <= 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
  spa_totalRows1.setValue(ds_purchaseTrust.getTotalRow());
  if (ds_purchaseTrustSlipContents.getTotalRow() > 0) {
    ds_purchaseTrustSlipContents.removeAll();
  }
  if (ds_sellingTrustSlipContents.getTotalRow() > 0) {
    ds_sellingTrustSlipContents.removeAll();
  }
  if (ds_slipHeader.getTotalRow() > 0) {
    ds_slipHeader.removeAll();
    ds_slipHeader.insertRow();
  }
};

//-------------------------------------------------------------------------
// 외상 매출 수탁 데이터셋 조회 완료시
//-------------------------------------------------------------------------
scwin.ds_sellingTrust_ondataload = function () {
  let rowCnt = ds_sellingTrust.getTotalRow();
  if (rowCnt <= 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
  spa_totalRows2.setValue(ds_sellingTrust.getTotalRow());
  if (ds_purchaseTrustSlipContents.getTotalRow() > 0) {
    ds_purchaseTrustSlipContents.removeAll();
  }
  if (ds_sellingTrustSlipContents.getTotalRow() > 0) {
    ds_sellingTrustSlipContents.removeAll();
  }
  if (ds_slipHeader.getTotalRow() > 0) {
    ds_slipHeader.removeAll();
    ds_slipHeader.insertRow();
  }
};

//-------------------------------------------------------------------------
// 신규
// function name : f_Create
// function desc : 신규
//-------------------------------------------------------------------------
scwin.btn_New_onClick = function (e) {
  ds_purchaseTrustSlipContents.removeAll();
  ds_sellingTrustSlipContents.removeAll();
  ed_sellLodeptNm2.setValue(""); // 귀속부서명 
  ed_postAcctDeptCd.setValue(""); //귀속부서코드
  ds_slipHeader.removeAll();
  ds_slipHeader.insertRow();

  // 리스트 바인딩 못받아들여서 그냥 세팅
  ed_slipNo.setValue("");
  ica_slipDt.setValue("");
  ed_postAcctDeptCd.setValue("");
  ica_postDt.setValue("");
  ed_bilgClntNo.setValue("");
  ed_setoffClntNm.setValue("");
  ed_amt.setValue("");
  ed_ddCnt.setValue("");
  ed_cash.setValue("");
  ed_draft.setValue("0");
  $c.gus.cfDisableObjects($p, [ica_postDt, ed_bilgClntNo, ed_setoffClntNm, ed_amt, ed_cash, ed_draft, btn_Delete]);
  $c.gus.cfEnableObjects($p, [ed_cash, ed_draft, btn_Create]);
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
//-------------------------------------------------------------------------
scwin.btn_Create_onClick = async function (e) {
  //변경한 데이터가 있는지 체크한다. 
  let vslipHeader = ds_slipHeader.getTotalRow();
  let vpurchaseTrustSlipContents = ds_purchaseTrustSlipContents.getTotalRow();
  let vsellingTrustSlipContents = ds_sellingTrustSlipContents.getTotalRow();
  if (ed_draft > 0) {
    if (!(await $c.gus.cfValidate($p, [ica_slipDt, ed_postAcctDeptCd, ed_ddCnt]))) {
      return false;
    }
  } else {
    if (!(await $c.gus.cfValidate($p, [ica_slipDt, ed_postAcctDeptCd]))) {
      return false;
    }
  }
  if (vpurchaseTrustSlipContents <= 0) {
    await $c.win.alert($p, "외상매입수탁전표내역이 없습니다.");
    return false;
  }
  if (vsellingTrustSlipContents <= 0) {
    await $c.win.alert($p, "외상매출수탁전표내역이 없습니다.");
    return false;
  }
  if (await $c.win.confirm($p, "저장하시겠습니까?")) {
    console.log("??? " + ds_purchaseTrustSlipContents.getCellData(ds_purchaseTrustSlipContents.getRowPosition(), "mgntClntNo"));
    ds_slipHeader.setCellData(0, "clntNo", ds_purchaseTrustSlipContents.getCellData(ds_purchaseTrustSlipContents.getRowPosition(), "mgntClntNo"));
    ds_slipHeader.setCellData(0, "slipDt", ica_slipDt.getValue());
    ds_slipHeader.setCellData(0, "postAcctDeptCd", ed_postAcctDeptCd.getValue());
    ds_slipHeader.setCellData(0, "postDt", ica_postDt.getValue());
    ds_slipHeader.setCellData(0, "clntNm", ed_setoffClntNm.getValue());
    // ds_slipHeader.setCellData(0, "amt", ed_amt.getValue());
    ds_slipHeader.setCellData(0, "ddCnt", ed_ddCnt.getValue());
    // ds_slipHeader.setCellData(0, "cashAmt", ed_cash.getValue());
    // ds_slipHeader.setCellData(0, "draftAmt", ed_draft.getValue());

    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 저장 완료시 
//-------------------------------------------------------------------------
scwin.sbm_Save_submitDone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $c.win.alert($p, MSG_CM_INF_001);
    scwin.btn_New_onClick();
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 삭제 클릭시
//-------------------------------------------------------------------------
scwin.btn_Delete_onClick = async function (e) {
  let vslipHeader = ds_slipHeader.getTotalRow();
  let vpurchaseTrustSlipContents = ds_purchaseTrustSlipContents.getTotalRow();
  let vsellingTrustSlipContents = ds_sellingTrustSlipContents.getTotalRow();
  if (!(await $c.gus.cfValidate($p, [ica_slipDt, ed_bilgClntNo, ed_amt, ed_postAcctDeptCd]))) {
    return false;
  }
  if (vpurchaseTrustSlipContents <= 0) {
    $c.win.alert($p, "외상매입수탁전표내역이 없습니다.");
    return false;
  }
  if (vpurchaseTrustSlipContents <= 0) {
    $c.win.alert($p, "외상매출수탁전표내역이 없습니다.");
    return false;
  }

  // 삭제확인 
  if (await $c.win.confirm($p, "삭제하시겠습니까?")) {
    $c.sbm.execute($p, sbm_delete);
  }
};

//-------------------------------------------------------------------------
// 삭제 완료시
//-------------------------------------------------------------------------
scwin.sbm_delete_submitDone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $c.win.alert($p, MSG_CM_INF_004);
    scwin.btn_New_onClick();
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 날짜 UDC 기본 세팅
//-------------------------------------------------------------------------
scwin.udcOnCompleted = function () {
  ica_slipDt1.setInitDate(scwin.strPreDate, scwin.strCurDate);
  ica_slipDt2.setInitDate(scwin.strPreDate, scwin.strCurDate);
  $c.gus.cfDisableObjects($p, [ica_postDt, ed_bilgClntNo, ed_setoffClntNm, ed_amt, ed_cash, ed_draft, btn_Delete]);
  $c.gus.cfEnableObjects($p, [btn_Create, btn_New]);

  //정산부서 검색조건
  // ica_slipDt1.setInitDate("20160101", "20260511");
  // ed_setoffClntNo1.setValue("247640");
  // ed_setoffClntNm1.setValue("주식회사 창운");

  //청구부서 검색조건
  // ica_slipDt2.setInitDate("20100101", "20260511");
  // ed_setoffClntNo2.setValue("577649");
  // ed_setoffClntNm2.setValue("남진영_동부익스프레스(8559)");
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (정산부서)
//-------------------------------------------------------------------------
scwin.udc_adjmAcct_onClick = async function (e) {
  scwin.f_openCommonPopUp(1, ed_adjmAcctDept.getValue(), ed_adjmAcctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_adjmAcct_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_adjmAcctDept, ed_adjmAcctDeptNm, 1);
};
scwin.udc_adjmAcct_onChangeName = async function (info) {
  // scwin.f_CheckPopUp(ed_adjmAcctDept, ed_adjmAcctDeptNm,'1');
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (상계거래처)
//-------------------------------------------------------------------------
scwin.udc_setoffClnt_onClick = async function (e) {
  scwin.f_openCommonPopUp(2, ed_setoffClntNo1.getValue(), ed_setoffClntNm1.getValue(), 'F', 'F');
  // scwin.f_openPopUp('2',ed_setoffClntNo1,ed_setoffClntNm1,'F')
};
scwin.udc_setoffClnt_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_setoffClntNo1, ed_setoffClntNm1, 2);
  // scwin.f_CheckPopUp(ed_setoffClntNo1, ed_setoffClntNm1,'2')
};
scwin.udc_setoffClnt_onChangeName = async function (info) {};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (청구부서)
//-------------------------------------------------------------------------
scwin.udc_bilgAcctDept_onClick = async function (e) {
  scwin.f_openCommonPopUp(6, ed_bilgAcctDept.getValue(), ed_bilgAcctDeptNm.getValue(), 'F', 'F');
  // scwin.f_openPopUp('1',ed_bilgAcctDept,ed_bilgAcctDeptNm,'F');
};
scwin.udc_bilgAcctDept_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgAcctDept, ed_bilgAcctDeptNm, 6);
  // scwin.f_CheckPopUp(ed_bilgAcctDept, ed_bilgAcctDeptNm,'1');
};
scwin.udc_bilgAcctDept_onChangeName = async function (info) {};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (상계거래처, 청구부서)
//-------------------------------------------------------------------------
scwin.udc_setoffClnt2_onClick = async function (e) {
  scwin.f_openCommonPopUp(7, ed_setoffClntNo2.getValue(), ed_setoffClntNm2.getValue(), 'F', 'F');
  // scwin.f_openPopUp('2',ed_setoffClntNo2,ed_setoffClntNm2,'F');
};
scwin.udc_setoffClnt2_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_setoffClntNo2, ed_setoffClntNm2, 7);
  // scwin.f_CheckPopUp(ed_setoffClntNo2, ed_setoffClntNm2,'2');
};
scwin.udc_setoffClnt2_onChangeName = async function (info) {};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (귀속부서)
//-------------------------------------------------------------------------
scwin.udc_sellLoDept_onClick = async function (e) {
  scwin.f_openCommonPopUp(5, ed_postAcctDeptCd.getValue(), ed_sellLodeptNm2.getValue(), 'F', 'F');
  // scwin.f_openPopUp('5', ed_postAcctDeptCd, ed_sellLodeptNm2, 'T')
};
scwin.udc_sellLoDept_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_postAcctDeptCd, ed_sellLodeptNm2, 5);
  // scwin.f_openPopUp('5', ed_postAcctDeptCd, ed_sellLodeptNm2, 'T')
};
scwin.udc_sellLoDept_onChangeName = async function (info) {};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (전표번호)
//-------------------------------------------------------------------------
scwin.udc_slip_onClick = async function (e) {
  scwin.f_openCommonPopUp(4, ed_slipNo.getValue(), ed_slipNo.getValue(), 'F', 'F');
  // scwin.f_openPopUp('4',ed_slipNo,ed_slipNo,'F');
};
scwin.udc_slip_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_slipNo, ed_txt_slipNo, 4);
  // scwin.f_openPopUp('4',ed_slipNo,txt_slipNo,'F');
  // scwin.f_slipRetrieve();
};
scwin.udc_slip_onChangeName = async function (info) {};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업

  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      udc_adjmAcct.cfCommonPopUp(scwin.udc_adjmAcct_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, ",,,,,,1,," + scwin.loUpperLobranCd, null, null, null, null, null, null, null);
      break;
    case 2:
      // 청구처 팝업			
      udc_setoffClnt.cfCommonPopUp(scwin.udc_setoffClnt_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", null, null);
      break;
    case 4:
      // 라인 팝업			
      udc_slip.cfCommonPopUp(scwin.udc_slip_callBackFunc, pCode.trim(), pName, "F", null, null, null, null, null, null, null, null, null, null, "F", null, null);
      break;
    case 5:
      // 귀속부서			
      udc_sellLoDept.cfCommonPopUp(scwin.udc_sellLoDept_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , "F" // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")				  			
      );
      break;
    case 6:
      udc_bilgAcctDept.cfCommonPopUp(scwin.udc_bilgAcctDept_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, ',,,,,,1,,' + scwin.loUpperLobranCd, null, null, null, null, null, null, null);
      break;
    case 7:
      udc_setoffClnt2.cfCommonPopUp(scwin.udc_setoffClnt2_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", null, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(정산부서)
//-------------------------------------------------------------------------
scwin.udc_adjmAcct_callBackFunc = function (rtnList) {
  // if ( rtnList != null ) {
  // 	if (rtnList[0] == "N/A") return;
  // 	ed_adjmAcctDept.setValue(rtnList[0]);	// 코드
  // 	if ( ed_adjmAcctDeptNm != null)
  // 	ed_adjmAcctDeptNm.setValue(rtnList[1]);	// 코드명
  // 	ed_adjmAcctDept.setValue(rtnList[0]);	// 코드

  // } 
  $c.gus.cfSetReturnValue($p, rtnList, ed_adjmAcctDept, ed_adjmAcctDeptNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(상계거래처)
//-------------------------------------------------------------------------
scwin.udc_setoffClnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_setoffClntNo1, ed_setoffClntNm1);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(청구부서)
//-------------------------------------------------------------------------
scwin.udc_bilgAcctDept_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_bilgAcctDept, ed_bilgAcctDeptNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(상계거래처, 청구부서)
//-------------------------------------------------------------------------
scwin.udc_setoffClnt2_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_setoffClntNo2, ed_setoffClntNm2);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(귀속부서)
//-------------------------------------------------------------------------
scwin.udc_sellLoDept_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_postAcctDeptCd, ed_sellLodeptNm2);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(전표번호)
//-------------------------------------------------------------------------
scwin.udc_slip_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_slipNo, ed_txt_slipNo);
  if (ed_slipNo.getValue() != "") {
    dma_slipNo.set("slipNo", ed_slipNo.getValue());
    ds_purchaseTrustSlipContents.removeAll();
    ds_sellingTrustSlipContents.removeAll();
    scwin.f_slipRetrieve();
    // $c.sbm.execute(sbm_retrieveConsignmentSetoff);
  }
};
scwin.f_slipRetrieve = async function () {
  if (!(ed_slipNo.getValue() == null || ed_slipNo.getValue() == "")) {
    if (!(await $c.gus.cfValidate($p, [ed_slipNo]))) {
      return false;
    }
    dma_slipNo.set("slipNo", ed_slipNo.getValue());
    $c.sbm.execute($p, sbm_retrieveConsignmentSetoff);
  }
  ;
};

//-------------------------------------------------------------------------
// 전표 번호 조회 후 
//-------------------------------------------------------------------------
scwin.retrieveConsignmentSetoff_submitDone = function (e) {
  if (ds_slipHeader.getTotalRow() > 0) {
    ica_slipDt.setValue(ds_slipHeader.getCellData(0, "slipDt"));
    ica_postDt.setValue(ds_slipHeader.getCellData(0, "postDt"));
    ed_slipNo.setValue(ds_slipHeader.getCellData(0, "slipNo"));
    ed_postAcctDeptCd.setValue(ds_slipHeader.getCellData(0, "postAcctDeptCd"));
    ed_bilgClntNo.setValue(ds_slipHeader.getCellData(0, "clntNo"));
    ed_setoffClntNm.setValue(ds_slipHeader.getCellData(0, "clntNm"));
    ed_amt.setValue(ds_slipHeader.getCellData(0, "amt"));
    ed_ddCnt.setValue(ds_slipHeader.getCellData(0, "ddCnt"));
    ed_cash.setValue(ds_slipHeader.getCellData(0, "cashAmt"));
    ed_draft.setValue(ds_slipHeader.getCellData(0, "draftAmt"));
  }
};

//-------------------------------------------------------------------------
// 전표 데이터셋 조회 완료시
//-------------------------------------------------------------------------
scwin.ds_slipHeader_ondataload = function () {
  let rowCnt = ds_slipHeader.getTotalRow();
  if (rowCnt <= 0) {
    $c.gus.cfEnableObjects($p, [ed_cash, ed_draft, btn_Create, btn_New, btn_RowDelete1, btn_RowDelete2]);
    $c.gus.cfDisableObjects($p, [btn_Delete]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_cash, ed_draft, btn_Create, btn_RowDelete1, btn_RowDelete2]);
    $c.gus.cfEnableObjects($p, [btn_Delete, btn_New]);
  }
};

//-------------------------------------------------------------------------
// 미지급거래처현금 kill focus
//-------------------------------------------------------------------------
scwin.ed_cash_KillFocus = function (e) {
  let amt;
  let cashAmt;
  let draftAmt;
  cashAmt = ed_cash.getValue();
  draftAmt = ed_draft.getValue();
  amt = Math.floor(scwin.purchaseAmt) - Math.floor(scwin.sellingAmt);
  ed_draft.setValue(amt - cashAmt);
};

//-------------------------------------------------------------------------
// 미지급거래처어음 kill focus
//-------------------------------------------------------------------------
scwin.ed_draft_KillFocus = function (e) {
  let amt;
  let cashAmt = Math.floor(ed_cash.getValue());
  let draftAmt = Math.floor(ed_draft.getValue());
  amt = Math.floor(scwin.purchaseAmt) - Math.floor(scwin.sellingAmt);
  ed_cash.setValue(amt - draftAmt);
};
scwin.ds_purchaseTrustSlipContents_ondataload = function () {
  spa_totalRows3.setValue(ds_purchaseTrustSlipContents.getTotalRow());
};
scwin.ds_purchaseTrustSlipContents_oninsertrow = function (info) {
  spa_totalRows3.setValue(ds_purchaseTrustSlipContents.getTotalRow());
};
scwin.ds_purchaseTrustSlipContents_onremoverow = function (info) {
  spa_totalRows3.setValue(ds_purchaseTrustSlipContents.getTotalRow());
};
scwin.ds_sellingTrustSlipContents_ondataload = function () {
  spa_totalrows4.setValue(ds_sellingTrustSlipContents.getTotalRow());
};
scwin.ds_sellingTrustSlipContents_oninsertrow = function (info) {
  spa_totalrows4.setValue(ds_sellingTrustSlipContents.getTotalRow());
};
scwin.ds_sellingTrustSlipContents_onremoverow = function (info) {
  spa_totalrows4.setValue(ds_sellingTrustSlipContents.getTotalRow());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정산부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_adjmAcctDept',nameId:'ed_adjmAcctDeptNm',id:'udc_adjmAcct',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4',objTypeCode:'Data',selectID:'retrieveLogisDeptInfo','ev:onclickEvent':'scwin.udc_adjmAcct_onClick','ev:onblurCodeEvent':'scwin.udc_adjmAcct_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_adjmAcct_onChangeName'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'ica_slipDt1',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_slipDtFrom1',edToId:'ica_slipDtTo1',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상계거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'상계거래처',style:'',selectID:'retrieveClntList',codeId:'ed_setoffClntNo1',nameId:'ed_setoffClntNm1',id:'udc_setoffClnt',allowCharCode:'0-9',editTypeCode:'select',mandatoryCode:'true',maxlengthCode:'6',objTypeName:'data','ev:onclickEvent':'scwin.udc_setoffClnt_onClick','ev:onblurCodeEvent':'scwin.udc_setoffClnt_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_setoffClnt_onChangeName',validTitle:'상계거래처',codeWidth:'60'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_bilgAcctDept',nameId:'ed_bilgAcctDeptNm',id:'udc_bilgAcctDept',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',objTypeCode:'data',maxlengthCode:'4',objTypeName:'Data',selectID:'retrieveLogisDeptInfo','ev:onclickEvent':'scwin.udc_bilgAcctDept_onClick','ev:onblurCodeEvent':'scwin.udc_bilgAcctDept_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_bilgAcctDept_onChangeName'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'ica_slipDt2',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_slipDtFrom2',edToId:'ica_slipDtTo2',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상계거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_setoffClntNo2',nameId:'ed_setoffClntNm2',id:'udc_setoffClnt2',selectID:'retrieveClntList',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'6',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_setoffClnt2_onClick','ev:onblurCodeEvent':'scwin.udc_setoffClnt2_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_setoffClnt2_onChangeName',validTitle:'상계거래처',codeWidth:'60'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox flex-row',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve1',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve1_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외상매입조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve2',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve2_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외상매출조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'외상매입수탁',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'N',gridUpYn:'N',gridID:'gr_purchaseTrust'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_purchaseTrust',style:'',id:'gr_purchaseTrust',visibleRowNum:'2',class:'wq_gvw',resize:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true',editModeEvent:'onclick',sortable:'true',fixedColumn:'1',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column1',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column17',value:'부서',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'전표종류',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'전표번호',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'전표일자',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'회계처리일자',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column3',value:'계정',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'금액',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column7',value:'귀속부서',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'계산서일자',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'적요',displayMode:'label',hidden:'true',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'choice',displayMode:'label',valueType:'other',trueValue:'1',falseValue:'0',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bilgLodeptCd',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'slipKndNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipDt',displayMode:'label',readOnly:'true',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'postDt',displayMode:'label',displayFormat:'####/##/##',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'acctNm',displayMode:'label',textAlign:'left',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'acctDeptNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'taxinvcDt',displayMode:'label',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',textAlign:'left',readOnly:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'sum("amt")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spa_totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'shattle '},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_PurchaseMoveDown',type:'button',class:'btn ico btn-double-down','ev:onclick':'scwin.btn_PurchaseMoveDown_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'맨이후'}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_purchaseTrustSlipContents',style:'',autoFit:'allColumn',id:'gr_purchaseTrustSlipContents',visibleRowNum:'2',class:'wq_gvw',resize:'true',editModeEvent:'onclick',columnMove:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column1',value:'계정',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'금액',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column15',value:'귀속부서',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'적요',displayMode:'label',class:'txt-blue',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'acctNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'acctDeptNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'summary',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column29',displayMode:'label',textAlign:'right',displayFormat:'#,##0[floor]',dataType:'number',expression:'sum("amt")'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnRowAddYn:'N',id:'btn_RowDelete1',btnDelYn:'N',gridID:'gr_purchaseTrustSlipContents'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'외상매출수탁/대급금 등',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownYn:'N',gridUpYn:'N',gridID:'gr_sellingTrust'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_sellingTrust',id:'gr_sellingTrust',style:'',visibleRowNum:'2',visibleRowNumFix:'true',resize:'true',editModeEvent:'onclick',columnMove:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true',fixedColumn:'1',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',sortable:'false'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column17',inputType:'text',value:'부서',width:'70'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column15',inputType:'text',value:'전표종류',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column13',inputType:'text',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column11',inputType:'text',value:'전표일자',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column9',inputType:'text',value:'회계처리일자',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column3',inputType:'text',value:'계정',width:'150'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column5',inputType:'text',value:'금액',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column7',inputType:'text',value:'귀속부서',width:'150'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column19',inputType:'text',value:'계산서일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column31',inputType:'text',style:'',value:'적요',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgLodeptCd',inputType:'text',textAlign:'left',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndNm',inputType:'text',textAlign:'left',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'text',width:'100',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',width:'120',displayFormat:'####/##/##',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',textAlign:'left',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',textAlign:'right',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',textAlign:'left',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'taxinvcDt',inputType:'text',width:'100',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',style:'',textAlign:'left',value:'',width:'100',readOnly:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',value:'합계',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'expression',textAlign:'right',width:'100',displayFormat:'#,##0[floor]',dataType:'number',expression:'sum("amt")'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',style:'',value:'',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'shattle ',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico btn-double-down',id:'btn_SellMoveDown',style:'',type:'button','ev:onclick':'scwin.btn_SellMoveDown_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'맨이후'}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_sellingTrustSlipContents',id:'gr_sellingTrustSlipContents',style:'',visibleRowNum:'2',visibleRowNumFix:'true',resize:'true',editModeEvent:'onclick',columnMove:'true',dataDragSelect:'true',dataDragSelectAutoScroll:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column1',inputType:'text',value:'계정',width:'170'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column17',inputType:'text',value:'금액',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column15',inputType:'text',value:'귀속부서',width:'170'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',hidden:'true',id:'column13',inputType:'text',value:'적요',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',textAlign:'left',width:'170',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',textAlign:'right',width:'100',dataType:'number',displayFormat:'#,##0[floor]',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',textAlign:'left',width:'170',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'합계',width:'170'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'expression',textAlign:'right',width:'100',dataType:'number',displayFormat:'#,##0[floor]',expression:'sum("amt")'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'170'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spa_totalrows4',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'btn_RowDelete2',btnRowAddYn:'N',btnDelYn:'N',gridID:'gr_sellingTrustSlipContents'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 250px;',codeId:'ed_postAcctDeptCd',nameId:'ed_sellLodeptNm2',id:'udc_sellLoDept',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'5',objTypeCode:'Data',validExpCode:'귀속부서:yes:length=5',objTypeName:'key',selectID:'retrieveAcctDeptCdInfo','ev:onclickEvent':'scwin.udc_sellLoDept_onClick','ev:onblurCodeEvent':'scwin.udc_sellLoDept_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_sellLoDept_onChangeName',validTitle:'귀속부서'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',hideName:'true',codeId:'ed_slipNo',nameId:'ed_txt_slipNo',objTypeName:'key',allowCharCode:'0-9',objTypeCode:'data',maxlengthCode:'10',UpperFlagCode:'1',selectID:'retrieveConsignmentSetoffSlipNo',id:'udc_slip','ev:onclickEvent':'scwin.udc_slip_onClick','ev:onblurCodeEvent':'scwin.udc_slip_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_slip_onChangeName',validExpCode:'전표번호:yes:format=0000000000'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표일자/회계처리일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ica_slipDt',class:'',calendarValueType:'yearMonthDate',title:'전표일자'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'/',class:''}},{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',style:'',id:'ica_postDt',class:'',calendarValueType:'yearMonthDate',title:'회계처리일자'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상계거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_bilgClntNo',placeholder:'',style:'width: 85px;',maxlength:'6',editType:'select',objType:'data',ref:'data:ds_slipHeader.clntNo'}},{T:1,N:'xf:input',A:{class:'',id:'ed_setoffClntNm',placeholder:'',style:'',objType:'data'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상계금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_amt',placeholder:'',style:'width:120px;',objType:'data',maxlength:'13',editType:'select',displayFormat:'#,##0',dataType:'number',validExp:'상계금액:yes:minNumber=1',ref:'data:ds_slipHeader.amt',initValue:'0'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'미지급거래처현금',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_cash',placeholder:'',style:'width:120px;',objType:'data',editType:'select',validExp:'신청금액:yes:minNumber=1','ev:onblur':'scwin.ed_cash_KillFocus',displayFormat:'#,###',dataType:'number',ref:'data:ds_slipHeader.cashAmt',initValue:'0'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'미지급거래처어음/일수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:120px;',id:'ed_draft',placeholder:'',class:'tar',editType:'select',maxlength:'13',displayFormat:'#,##0',dataType:'number',validExp:'신청금액:yes:minNumber=1','ev:onblur':'scwin.ed_draft_KillFocus',ref:'data:ds_slipHeader.draftAmt',initValue:'0'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'/',class:''}},{T:1,N:'xf:input',A:{style:'width:120px;',id:'ed_ddCnt',placeholder:'',class:'tar',mandatory:'true',maxlength:'3',editType:'select',validExp:'어음일수:yes:minNumber=1'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_New_onClick',style:'',id:'btn_New',label:'저장',type:'button',class:'btn',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Create',label:'저장',type:'button',class:'btn white','ev:onclick':'scwin.btn_Create_onClick',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전표생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Delete',label:'저장',style:'',type:'button',objType:'bDelete','ev:onclick':'scwin.btn_Delete_onClick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전표삭제'}]}]}]}]}]}]}]}]}]})