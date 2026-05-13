/*amd /ui/ja/dn/consignmgnt/ja_210_05_01b.xml 58224 2978a1157191b38c5f5235e57e64f152ce2cecdd138b2fe8505babc0deb908ef */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClntNo',name:'소속거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtFrom',name:'전표일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtTo',name:'전표일자To',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_trustQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'setoffClntNo',name:'상계거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtFrom',name:'전표일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtTo',name:'전표일자To',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_slipNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_slipHeader'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'상계거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'상계거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ddCnt',name:'어음일수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'amt',name:'상계금액',dataType:'bigDecimal'}},{T:1,N:'w2:key',A:{id:'cashAmt',name:'현금',dataType:'bigDecimal'}},{T:1,N:'w2:key',A:{id:'draftAmt',name:'어음',dataType:'bigDecimal'}},{T:1,N:'w2:key',A:{id:'postAcctDeptCd',name:'귀속부서코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_setoffClntList','ev:ondataload':'scwin.ds_setoffClntList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'setoffClntNo',name:'상계거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffClntNm',name:'매니저명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffSlipNo',name:'상계전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseTrust'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'물류청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellingTrust'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'물류청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseTrustSlipContents',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'물류청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'채권번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellingTrustSlipContents',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'물류청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'채권번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSetoffClntList',action:'/ja.dn.consignmgnt.RetrieveDnSetoffClntListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_setoffClntList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_setoffClntList","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveSetoffClntList_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDnSetoffTrustList',action:'/ja.dn.consignmgnt.RetrieveDnSetoffTrustListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_trustQueryCondition","key":"IN_DS1"},{"id":"ds_purchaseTrust","key":"OUT_DS1"},{"id":"ds_sellingTrust","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_purchaseTrust","key":"OUT_DS1"},{"id":"ds_sellingTrust","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_retrieveDnSetoffTrustList_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDnConsignmentSetoff',action:'/ja.dn.consignmgnt.RetrieveDnConsignmentSetoffCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_slipNo","key":"IN_DS1"},{"id":"dma_slipHeader","key":"OUT_DS1"},{"id":"ds_purchaseTrustSlipContents","key":"OUT_DS2"},{"id":"ds_sellingTrustSlipContents","key":"OUT_DS3"}]',target:'data:json,[{"id":"dma_slipHeader","key":"OUT_DS1"},{"id":"ds_purchaseTrustSlipContents","key":"OUT_DS2"},{"id":"ds_sellingTrustSlipContents","key":"OUT_DS3"}]','ev:submitdone':'scwin.sbm_retrieveDnConsignmentSetoff_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ja.dn.consignmgnt.CreateDnConsignmentSetoffCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"action":"all","id":"ds_purchaseTrustSlipContents","key":"IN_DS1"},{"id":"ds_sellingTrustSlipContents","key":"IN_DS2"},{"id":"dma_slipHeader","key":"IN_DS3"},{"id":"dma_slipNo","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_slipNo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ja.dn.consignmgnt.DeleteDnConsignmentSetoffCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_slipHeader","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin"); // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님

// Global Variables Definition
scwin.sCurrDate = "";
scwin.purchaseAmt = 0;
scwin.sellingAmt = 0;
scwin.onpageload = function () {
  scwin.sCurrDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.vQryStDt = scwin.sCurrDate.substring(0, 6) + "01";
  scwin.vQryEndDt = scwin.sCurrDate;

  // 초기 비활성화/활성화
  $c.gus.cfDisableObjects($p, [ed_postDt, ed_bilgClntNo, txt_setoffClntNm, ed_amt, ed_cash, ed_draft]);
  $c.gus.cfEnableObjects($p, [btnCreate]);
  $c.gus.cfDisableObjects($p, [btnDelete]);
};
scwin.onUdcCompleted = function () {
  ed_slipDtFrom.setValue(scwin.vQryStDt);
  ed_slipDtTo.setValue(scwin.vQryEndDt);
};

///////////////////////////////////////////// I N I T /////////////////////////////////////////////

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
  ed_slipDtFrom.setValue(scwin.vQryStDt);
  ed_slipDtTo.setValue(scwin.vQryEndDt);
};

///////////////////////////////////////////// B U S I N E S S   L O G I C /////////////////////////////////////////////

//-------------------------------------------------------------------------
// 상계거래처목록 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let chk = await scwin.f_Validation("Search");
  if (!chk) return;
  await $c.sbm.execute($p, sbm_retrieveSetoffClntList);
};

//-------------------------------------------------------------------------
// 상계대상내역 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveDnSetoffTrustList = function (row) {
  if (row < 0) return;
  dma_trustQueryCondition.set("setoffClntNo", ds_setoffClntList.getCellData(row, "setoffClntNo")); // 상계거래처
  dma_trustQueryCondition.set("slipDtFrom", ed_slipDtFrom.getValue());
  dma_trustQueryCondition.set("slipDtTo", ed_slipDtTo.getValue());
  $c.sbm.execute($p, sbm_retrieveDnSetoffTrustList);
};

//-------------------------------------------------------------------------
// 전표 내역조회
//-------------------------------------------------------------------------
scwin.f_slipRetrieve = function () {
  var slipNo = ed_slipNo.getValue();
  if (slipNo == null || slipNo.trim() == "") return;
  if (!$c.gus.cfValidate($p, [ed_slipNo])) return;
  ds_purchaseTrust.clearData();
  ds_sellingTrust.clearData();
  dma_slipNo.setCellData(0, "slipNo", slipNo);
  $c.sbm.execute($p, sbm_retrieveDnConsignmentSetoff);
};

//-------------------------------------------------------------------------
// 저장 (상계전표 생성)
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let chk = await scwin.f_Validation("Save");
  if (!chk) return;
  let con = await $c.win.confirm($p, "전표를 생성하시겠습니까?");
  if (con) {
    let row = ds_purchaseTrustSlipContents.getRowPosition();
    dma_slipHeader.set("clntNo", ds_purchaseTrustSlipContents.getCellData(row, "mgntClntNo"));
    dma_slipHeader.set("postAcctDeptCd", ds_purchaseTrustSlipContents.getCellData(row, "acctDeptCd"));
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 전표 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  let chk = await scwin.f_Validation("Delete");
  if (!chk) return;

  // 삭제 확인
  let con = await $c.win.confirm($p, "전표를 삭제하시겠습니까?");
  if (con) $c.sbm.execute($p, sbm_delete);
};

//-------------------------------------------------------------------------
//function name : f_Validation
//function desc : 조회 조건 검증
//function Parameter : sType : 검증 타입
//-------------------------------------------------------------------------
scwin.f_Validation = async function (sType) {
  var vpurchaseTrustSlipContents = ds_purchaseTrustSlipContents.getRowCount();
  var vsellingTrustSlipContents = ds_sellingTrustSlipContents.getRowCount();
  if (sType == "Search") {
    // validExp Setting
    $c.gus.setValidExp($p, ed_slipDtFrom, "전표시작일자:yes:length=8");
    $c.gus.setValidExp($p, ed_slipDtTo, "전표종료일자:yes:length=8");
    $c.gus.setValidExp($p, ed_homeClntNo, "상계거래처:yes:length=6");
    let chk = await $c.gus.cfValidate($p, [tbl_search], null, true);
    if (!chk) {
      return false;
    }
    if (!$c.gus.cfIsAfterDate($p, ed_slipDtFrom.getValue(), ed_slipDtTo.getValue(), false)) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_039)); // 시작일자가 종료일자 이전이어야 합니다.
      ed_slipDtFrom.focus();
      return false;
    }
  } else if (sType == "Save") {
    // validExp Setting
    $c.gus.setValidExp($p, ed_slipDt, "전표일자:yes:length=8");
    $c.gus.setValidExp($p, ed_postAcctDeptCd, "귀속부서:yes:length=5");
    $c.gus.setValidExp($p, ed_ddCnt, "어음일수:yes:minNumber=1");
    let chk = false;
    if (ed_draft.getValue() > 0) {
      // 어음 > 0
      chk = await $c.gus.cfValidate($p, [ed_slipDt, ed_postAcctDeptCd, ed_ddCnt], null, true);
    } else {
      chk = await $c.gus.cfValidate($p, [ed_slipDt, ed_postAcctDeptCd], null, true);
    }
    if (!chk) return false;
    if (vpurchaseTrustSlipContents <= 0) {
      await $c.win.alert($p, "매입수탁전표내역이 없습니다.");
      return false;
    }
    if (vsellingTrustSlipContents <= 0) {
      await $c.win.alert($p, "매출수탁전표내역이 없습니다.");
      return false;
    }
  } else if (sType == "Delete") {
    // validExp Setting
    $c.gus.setValidExp($p, ed_slipDt, "전표일자:yes:length=8");
    let chk = await $c.gus.cfValidate($p, [ed_slipDt], null, true);
    if (!chk) {
      return false;
    }
    if (vpurchaseTrustSlipContents <= 0) {
      await $c.win.alert($p, "매입수탁전표내역이 없습니다.");
      return false;
    }
    if (vsellingTrustSlipContents <= 0) {
      await $c.win.alert($p, "매출수탁전표내역이 없습니다.");
      return false;
    }
  }
  return true;
};

// 상계거래처목록 행 선택 시 공통 처리 (OnLoadCompleted / OnRowPosChanged)
scwin.f_setoffClntListAction = function () {
  var rowPos = ds_setoffClntList.getRowPosition();
  var setoffSlipNo = ds_setoffClntList.getCellData(rowPos, "setoffSlipNo");
  if (setoffSlipNo != "") {
    ed_slipNo.setValue(setoffSlipNo);
    scwin.f_chkOpenCommonPopUp(ed_slipNo, txt_slipNo, 3, true);
  } else {
    scwin.f_Create();
    scwin.f_RetrieveDnSetoffTrustList(rowPos); // 상계대상내역 조회
  }
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  ds_purchaseTrustSlipContents.removeAll();
  ds_sellingTrustSlipContents.removeAll();
  dma_slipHeader.clearData();
  txt_sellLodeptNm.setValue("");
  totalRowsSellingTrustSlipContents.setValue(0);
  totalRowsPurchaseTrustSlipContents.setValue(0);
  $c.gus.cfDisableObjects($p, [ed_postDt, ed_bilgClntNo, txt_setoffClntNm, ed_amt, ed_cash, ed_draft]);
  $c.gus.cfEnableObjects($p, [ed_cash, ed_draft, btnCreate]);
  $c.gus.cfDisableObjects($p, [btnDelete]);
};

//-------------------------------------------------------------------------
// 매입 이동 : 선택된 매입수탁 행을 하단 전표계정 그리드로 이동 + 상계금액 계산
//-------------------------------------------------------------------------
scwin.f_PurchaseMoveDown = function () {
  ds_purchaseTrustSlipContents.removeAll(); // 기존 전표내용 그리드 초기화

  const CRSALES_PURCHASE_TRUS = "2100410";
  scwin.purchaseAmt = 0;
  let acctDeptCd = "";
  let rowCnt = ds_purchaseTrust.getRowCount();
  if (rowCnt > 0) {
    for (let i = 0; i < rowCnt; i++) {
      if (ds_purchaseTrust.getCellData(i, "choice") == 1) {
        // 선택된 행만 추가
        let newRow = ds_purchaseTrustSlipContents.getRowCount();
        ds_purchaseTrustSlipContents.insertRow(newRow);
        ds_purchaseTrustSlipContents.setCellData(newRow, "acctCd", ds_purchaseTrust.getCellData(i, "acctCd"));
        ds_purchaseTrustSlipContents.setCellData(newRow, "acctNm", ds_purchaseTrust.getCellData(i, "acctNm"));
        ds_purchaseTrustSlipContents.setCellData(newRow, "amt", ds_purchaseTrust.getCellData(i, "amt"));
        ds_purchaseTrustSlipContents.setCellData(newRow, "acctDeptCd", ds_purchaseTrust.getCellData(i, "acctDeptCd"));
        ds_purchaseTrustSlipContents.setCellData(newRow, "acctDeptNm", ds_purchaseTrust.getCellData(i, "acctDeptNm"));
        ds_purchaseTrustSlipContents.setCellData(newRow, "bilgLodeptCd", ds_purchaseTrust.getCellData(i, "bilgLodeptCd"));
        ds_purchaseTrustSlipContents.setCellData(newRow, "mgntClntNo", ds_purchaseTrust.getCellData(i, "clntNo"));
        ds_purchaseTrustSlipContents.setCellData(newRow, "slipNo", ds_purchaseTrust.getCellData(i, "slipNo"));
        ds_purchaseTrustSlipContents.setCellData(newRow, "taxinvcDt", ds_purchaseTrust.getCellData(i, "taxinvcDt"));
        ds_purchaseTrustSlipContents.setCellData(newRow, "mgntNo", ds_purchaseTrust.getCellData(i, "acctRecvNo"));
        acctDeptCd = ds_purchaseTrust.getCellData(i, "acctDeptCd");
        if (CRSALES_PURCHASE_TRUS == ds_purchaseTrust.getCellData(i, "acctCd")) {
          scwin.purchaseAmt = scwin.purchaseAmt + ds_purchaseTrust.getCellData(i, "amt");
        }
      }
    }

    // 정산 금액 계산
    if (scwin.purchaseAmt - scwin.sellingAmt > 0) {
      let setoffAmt = Math.floor(scwin.purchaseAmt - scwin.sellingAmt); // Math.floor(매입 - 매출)
      dma_slipHeader.set("amt", setoffAmt);
      if (setoffAmt > 0) {
        $c.gus.cfEnableObjects($p, [ed_cash, ed_draft]); // 현금, 어음 필드 Enable
      } else {
        $c.gus.cfDisableObjects($p, [ed_cash, ed_draft]);
      }
      dma_slipHeader.set("postAcctDeptCd", acctDeptCd);
      scwin.f_chkOpenCommonPopUp(ed_postAcctDeptCd, txt_sellLodeptNm, 2, true);

      //  Math.floor(차액 / 2)
      dma_slipHeader.set("cashAmt", Math.floor((scwin.purchaseAmt - scwin.sellingAmt) / 2));
      dma_slipHeader.set("draftAmt", Math.floor((scwin.purchaseAmt - scwin.sellingAmt) / 2));
    }
  }

  // 조회건수 표시
  totalRowsPurchaseTrustSlipContents.setValue(ds_purchaseTrustSlipContents.getRowCount());
};

//-------------------------------------------------------------------------
// 매출 이동 : 선택된 매출수탁 행을 하단 전표계정 그리드로 이동 + 상계금액 재계산
//-------------------------------------------------------------------------
scwin.f_SellMoveDown = function () {
  ds_sellingTrustSlipContents.removeAll(); // 기존 전표내용 그리드 초기화

  const CRSALES_SELLING_TRUS = "1110415";
  scwin.sellingAmt = 0;
  let rowCnt = ds_sellingTrust.getRowCount();
  if (rowCnt > 0) {
    for (let i = 0; i < rowCnt; i++) {
      if (ds_sellingTrust.getCellData(i, "choice") == 1) {
        // 선택된 행만 추가
        let newRow = ds_sellingTrustSlipContents.getRowCount();
        ds_sellingTrustSlipContents.insertRow(newRow);
        ds_sellingTrustSlipContents.setCellData(newRow, "acctCd", ds_sellingTrust.getCellData(i, "acctCd"));
        ds_sellingTrustSlipContents.setCellData(newRow, "acctNm", ds_sellingTrust.getCellData(i, "acctNm"));
        ds_sellingTrustSlipContents.setCellData(newRow, "amt", ds_sellingTrust.getCellData(i, "amt"));
        ds_sellingTrustSlipContents.setCellData(newRow, "acctDeptCd", ds_sellingTrust.getCellData(i, "acctDeptCd"));
        ds_sellingTrustSlipContents.setCellData(newRow, "acctDeptNm", ds_sellingTrust.getCellData(i, "acctDeptNm"));
        ds_sellingTrustSlipContents.setCellData(newRow, "bilgLodeptCd", ds_sellingTrust.getCellData(i, "bilgLodeptCd"));
        ds_sellingTrustSlipContents.setCellData(newRow, "mgntClntNo", ds_sellingTrust.getCellData(i, "clntNo"));
        ds_sellingTrustSlipContents.setCellData(newRow, "slipNo", ds_sellingTrust.getCellData(i, "slipNo"));
        ds_sellingTrustSlipContents.setCellData(newRow, "taxinvcDt", ds_sellingTrust.getCellData(i, "taxinvcDt"));
        ds_sellingTrustSlipContents.setCellData(newRow, "mgntNo", ds_sellingTrust.getCellData(i, "acctRecvNo"));
        if (CRSALES_SELLING_TRUS == ds_sellingTrust.getCellData(i, "acctCd")) {
          scwin.sellingAmt = scwin.sellingAmt + ds_sellingTrust.getCellData(i, "amt");
        }
      }
    }

    // 정산 금액 계산 (매입과 동일 로직)
    if (scwin.purchaseAmt - scwin.sellingAmt > 0) {
      let setoffAmt = Math.floor(scwin.purchaseAmt - scwin.sellingAmt);
      dma_slipHeader.set("amt", setoffAmt);
      if (setoffAmt > 0) {
        $c.gus.cfEnableObjects($p, [ed_cash, ed_draft]);
      } else {
        $c.gus.cfDisableObjects($p, [ed_cash, ed_draft]);
      }
      dma_slipHeader.set("cashAmt", Math.floor((scwin.purchaseAmt - scwin.sellingAmt) / 2));
      dma_slipHeader.set("draftAmt", Math.floor((scwin.purchaseAmt - scwin.sellingAmt) / 2));
    }
  }
  totalRowsSellingTrustSlipContents.setValue(ds_sellingTrustSlipContents.getRowCount());
};

///////////////////////////////////////////// S U B M I S S I O N    E V E N T /////////////////////////////////////////////

// 상계거래처목록 조회
scwin.sbm_retrieveSetoffClntList_submitdone = function (e) {
  let rowCnt = ds_setoffClntList.getRowCount();
  totalRowsSetoffClnt.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p)) $c.gus.cfTurnCreateFlag($p, false);else $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_002)); // 조회결과가 존재하지 않습니다.
  }
  // ds_setoffClntList 조회 완료 = ondataload 이벤트 발생 > scwin.f_setoffClntListAction(); 호출하기 때문에 아래 else는 주석처리
  // else {
  //     scwin.f_setoffClntListAction();
  // }
};

// 상계대상내역 조회
scwin.sbm_retrieveDnSetoffTrustList_submitdone = function (e) {
  totalRowsPurchaseTrust.setValue(ds_purchaseTrust.getRowCount());
  totalRowsSellingTrust.setValue(ds_sellingTrust.getRowCount());
};

// 상계전표내역 조회
scwin.sbm_retrieveDnConsignmentSetoff_submitdone = function (e) {
  let hasData = dma_slipHeader.get("slipNo") != null && dma_slipHeader.get("slipNo") != "";
  if (!hasData) {
    $c.gus.cfEnableObjects($p, [ed_cash, ed_draft, btnCreate, btnNew, btnRowDelete1, btnRowDelete2]);
    $c.gus.cfDisableObjects($p, [btnDelete]);
  } else {
    scwin.f_chkOpenCommonPopUp(ed_postAcctDeptCd, txt_sellLodeptNm, 2, true);
    $c.gus.cfEnableObjects($p, [btnDelete, btnNew]);
    $c.gus.cfDisableObjects($p, [ed_cash, ed_draft, btnCreate, btnRowDelete1, btnRowDelete2]);
  }
};

// 저장 (상계전표 생성)
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.win.alert($p, $c.data.getMessage($p, MSG_CM_INF_001)); // 성공적으로 저장하였습니다.

  let row = dma_slipNo.getRowPosition();
  if (dma_slipNo.getCellData(row, "slipNo") != "") $c.gus.cfShowSlipInfo($p, dma_slipNo.getCellData(row, "slipNo"));
  scwin.f_Create();

  // AS-IS : 아래 함수를 호출은 하나 Row 인자를 보내고 있지 않아 실질적으로 동작하지 않음
  scwin.f_RetrieveDnSetoffTrustList(); // 상계대상내역 조회
};

// 전표 삭제
scwin.sbm_delete_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.win.alert($p, $c.data.getMessage($p, MSG_CM_INF_004)); // 성공적으로 삭제하였습니다

  scwin.f_Create();
  scwin.f_RetrieveDnSetoffTrustList(ds_setoffClntList.getRowPosition()); // 상계대상내역 조회
};

///////////////////////////////////////////// U D C   E V E N T /////////////////////////////////////////////

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함 (AS-IS: f_CheckPopUp)
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
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다. (AS-IS: f_openPopUp)
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  pCode = pCode.trim();
  switch (disGubun) {
    case 1:
      // 거래처
      // Select ID : retrieveSubsidaryClntList	
      udc_homeCl.setSelectId("retrieveSubsidaryClntList");
      udc_homeCl.cfCommonPopUp(scwin.udc_homeCl_callBackFunc, pCode // 화면에서의 ??? Code Element의    Value,
      , pName // 화면에서의 ??? Name Element의    Value,
      , pClose // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened) "T", //pClose
      , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서    
      , null // 보여주는 각 컬럼들의 폭  
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의    사용자 정의 폭
      , null // POP-UP뛰을때 우도우의    사용자 정의 높이    
      , null // 윈도우 위치 Y좌표    
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F") 
      , pAllSearch // 전체검색허용여부 ("F") "T", //pAllSearch
      , null // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 회계(귀속)부서코드
      // Select ID : retrieveAcctDeptCdInfo
      udc_dept.setSelectId("retrieveAcctDeptCdInfo");
      udc_dept.cfCommonPopUp(scwin.udc_dept_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, null, null);
      break;
    case 3:
      // 전표번호
      // Select ID : retrieveConsignmentSetoffSlipNo
      udc_slipNo.setSelectId("retrieveConsignmentSetoffSlipNo");
      let param = ACConstants.SLIPKNDCD_DN_SETOFF_THUS;
      udc_slipNo.cfCommonPopUp(scwin.udc_slipNo_callBackFunc, pCode, pName, pClose, null, null, null, null, param // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};

// ===================== 거래처 =====================
// 거래처 팝업 콜백함수
scwin.udc_homeCl_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_homeClntNo, txt_homeClntNm);
};

// 거래처 클릭시 팝업
scwin.udc_homeCl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_homeClntNo.getValue(), txt_homeClntNm.getValue(), 'F', 'F');
};

// 거래처 코드 onBlur
scwin.udc_homeCl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_homeClntNo, txt_homeClntNm, 1, true);
};

// ===================== 귀속부서 =====================
// 귀속부서 팝업 콜백함수
scwin.udc_dept_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_postAcctDeptCd, txt_sellLodeptNm);
};

// 귀속부서 클릭시 팝업
scwin.udc_dept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_postAcctDeptCd.getValue(), txt_sellLodeptNm.getValue(), 'T');
};

// 귀속부서 코드 onBlur
scwin.udc_dept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_postAcctDeptCd, txt_sellLodeptNm, 2, true);
};

// 귀속부서명 onChange
scwin.udc_dept_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(2, ed_postAcctDeptCd.getValue(), txt_sellLodeptNm.getValue(), 'T');
};

// ===================== 전표번호 =====================
// 전표번호 팝업 콜백함수
scwin.udc_slipNo_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_slipNo, txt_slipNo);
  scwin.f_slipRetrieve(); // 전표 내역조회
};

// 전표번호 클릭시 팝업
scwin.udc_slipNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_slipNo.getValue(), txt_slipNo.getValue(), 'F', 'F');
};

// 전표번호 onBlur
scwin.udc_slipNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_slipNo, txt_slipNo, 3, true);
};

///////////////////////////////////////////// C O M P O N E N T   E V E N T /////////////////////////////////////////////

// 상계거래처목록 조회
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

// 조회조건 초기화 onClick
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

// 상계거래처목록 데이터 로드시 첫번째 행 전표내역 or 상계대상내역 조회
scwin.ds_setoffClntList_ondataload = function () {
  if (ds_setoffClntList.getRowCount() > 0) {
    gr_setoffClntList.setFocusedCell(0, "setoffClntNm", false); // GridView Cell에 포커싱하여 onrowindexchange 이벤트 발생
  }
};

// 상계거래처목록 그리드 행 변경시 전표내역 or 상계대상내역 조회
scwin.gr_setoffClntList_onrowindexchange = function (rowIndex, oldRow) {
  if (rowIndex < 0) return;
  scwin.f_setoffClntListAction();
};

// 매입수탁 그리드 셀 onClick
scwin.gr_purchaseTrust_oncellclick = function (rowIndex, columnIndex, columnId) {
  // 전표번호 선택 시
  if (columnId == "slipNo" && rowIndex >= 0 && !$c.gus.cfIsNull($p, ds_purchaseTrust.getCellData(rowIndex, "slipNo"))) $c.gus.cfShowSlipInfo($p, ds_purchaseTrust.getCellData(rowIndex, "slipNo"));
};

// 매출수탁 그리드 셀 onClick
scwin.gr_sellingTrust_oncellclick = function (rowIndex, columnIndex, columnId) {
  // 전표번호 선택 시
  if (columnId == "slipNo" && rowIndex >= 0 && !$c.gus.cfIsNull($p, ds_sellingTrust.getCellData(rowIndex, "slipNo"))) $c.gus.cfShowSlipInfo($p, ds_sellingTrust.getCellData(rowIndex, "slipNo"));
};

// 신규 버튼 onClick
scwin.btnNew_onclick = function (e) {
  scwin.f_Create();
};

// 전표생성 버튼 onClick
scwin.btnCreate_onclick = function (e) {
  scwin.f_Save();
};

// 전표삭제 버튼 onClick
scwin.btnDelete_onclick = function (e) {
  scwin.f_Delete();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_slipDt',edFromId:'ed_slipDtFrom',edToId:'ed_slipDtTo',refDataMap:'dma_search',refEdDt:'slipDtTo',refStDt:'slipDtFrom'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_homeCl',codeId:'ed_homeClntNo',nameId:'txt_homeClntNm',refDataCollection:'dma_search',code:'homeClntNo',objTypeCode:'data',objTypeName:'data',maxlengthCode:'6',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_homeCl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_homeCl_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 25%;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'상계대상',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox gvwflex'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_setoffClntList',style:'',autoFit:'allColumn',id:'gr_setoffClntList',visibleRowNum:'15',class:'wq_gvw',readOnly:'true',columnMove:'true','ev:onrowindexchange':'scwin.gr_setoffClntList_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'매니저명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'상계전표',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'상계거래처',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'setoffClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'setoffSlipNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'setoffClntNo',displayMode:'label',textAlign:'center',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRowsSetoffClnt',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매입',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',gridID:'gr_purchaseTrust',gridUpYn:'N',gridDownYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_purchaseTrust',id:'gr_purchaseTrust',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'false','ev:oncellclick':'scwin.gr_purchaseTrust_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'전표종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'전표일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'회계처리일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'계정',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'금액',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'적요',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100',readOnly:'true',textAlign:'center',class:'underline txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'text',width:'100',readOnly:'true',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',width:'120',readOnly:'true',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',width:'150',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',width:'80',textAlign:'right',readOnly:'true',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',width:'200',textAlign:'left',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',expression:'sum(\'amt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column22',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRowsPurchaseTrust',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'shattle ',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico btn-double-down',id:'',style:'',type:'button','ev:onclick':'scwin.f_PurchaseMoveDown'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'맨이후'}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_purchaseTrustSlipContents',id:'gr_purchaseTrustSlipContents',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'true',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'계정',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'귀속부서',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column29',displayMode:'label',textAlign:'right',expression:'sum(\'amt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRowsPurchaseTrustSlipContents',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{id:'btnRowDelete1',gridID:'gr_purchaseTrustSlipContents',btnCancelYn:'N',btnRowAddYn:'N',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매출/대급금',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',gridID:'gr_sellingTrust',gridUpYn:'N',gridDownYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'ds_sellingTrust',id:'gr_sellingTrust',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'false','ev:oncellclick':'scwin.gr_sellingTrust_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption7',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'전표종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'전표일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'회계처리일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'계정',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'금액',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'적요',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndNm',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100',textAlign:'center',readOnly:'true',class:'underline txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'text',width:'100',textAlign:'center',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',width:'120',textAlign:'center',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',textAlign:'left',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',textAlign:'right',width:'80',readOnly:'true',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',textAlign:'left',width:'200',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',value:'합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'expression',textAlign:'right',width:'80',expression:'sum(\'amt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',width:'200'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRowsSellingTrust',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'shattle ',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico btn-double-down',id:'',style:'',type:'button','ev:onclick':'scwin.f_SellMoveDown'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'맨이후'}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_sellingTrustSlipContents',id:'gr_sellingTrustSlipContents',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption8',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'계정',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'귀속부서',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',textAlign:'left',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',textAlign:'right',value:'',width:'100',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',textAlign:'left',value:'',width:'120'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'합계',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'expression',style:'',textAlign:'right',width:'100',expression:'sum(\'amt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'120'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRowsSellingTrustSlipContents',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{id:'btnRowDelete2',gridID:'gr_sellingTrustSlipContents',btnCancelYn:'N',btnRowAddYn:'N',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{id:'udc_dept',style:'width: 250px;',codeId:'ed_postAcctDeptCd',nameId:'txt_sellLodeptNm',code:'postAcctDeptCd',refDataMap:'dma_slipHeader',allowCharCode:'0-9',maxlengthCode:'5',mandatoryCode:'true',objTypeCode:'Data',objTypeName:'key','ev:onclickEvent':'scwin.udc_dept_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_dept_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_slipNo',codeId:'ed_slipNo',nameId:'txt_slipNo',code:'slipNo',refDataMap:'dma_slipHeader',validTitle:'',hideName:'true',objTypeCode:'data',maxlengthCode:'10',UpperFlagCode:'1',objTypeName:'key',codeWidth:'228.01','ev:onclickEvent':'scwin.udc_slipNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_slipNo_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표일자/회계처리일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',id:'ed_slipDt',class:'',calendarValueType:'yearMonthDate',ref:'data:dma_slipHeader.slipDt'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'/',class:''}},{T:1,N:'w2:inputCalendar',A:{pickerType:'dynamic',id:'ed_postDt',class:'',calendarValueType:'yearMonthDate',ref:'data:dma_slipHeader.postDt'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상계거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_bilgClntNo',placeholder:'',style:'width: 85px;',objType:'data',maxlength:'6',allowChar:'0-9',ref:'data:dma_slipHeader.clntNo'}},{T:1,N:'xf:input',A:{class:'',id:'txt_setoffClntNm',placeholder:'',style:'',objType:'data',ref:'data:dma_slipHeader.clntNm'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상계금액 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_amt',placeholder:'0',style:'width:150px;',maxlength:'13',objType:'data',ref:'data:dma_slipHeader.amt',showPlaceHolderOnReadOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'미지급거래처현금',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_cash',placeholder:'0',style:'width:120px;',maxlength:'13',objType:'data',ref:'data:dma_slipHeader.cashAmt',showPlaceHolderOnReadOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'미지급거래처어음/일수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_draft',placeholder:'0',class:'tar',ref:'data:dma_slipHeader.draftAmt',maxlength:'13',objType:'data',showPlaceHolderOnReadOnly:'true'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'/',class:''}},{T:1,N:'xf:input',A:{style:'',id:'ed_ddCnt',placeholder:'',class:'tar',maxlength:'3',objType:'data',mandatory:'true',ref:'data:dma_slipHeader.ddCnt'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'info-list row',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'처리불가능 : 어음 100%',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'처리가능 : 현금 100%',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'현금-어음 각각 50% (어음으로 변경시 재경팀에 요청)',style:'',tagname:'p'}}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btnNew',label:'신규',style:'',type:'button',objType:'bCreate','ev:onclick':'scwin.btnNew_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btnCreate',label:'전표생성',style:'',type:'button',objType:'bCreate','ev:onclick':'scwin.btnCreate_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전표생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btnDelete',label:'저장',style:'',type:'button',objType:'bDelete','ev:onclick':'scwin.btnDelete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전표삭제'}]}]}]}]}]}]}]}]}]})