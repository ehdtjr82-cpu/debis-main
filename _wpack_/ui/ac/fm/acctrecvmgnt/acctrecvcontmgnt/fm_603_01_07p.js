/*amd /ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_01_07p.xml 55508 cfe8389654af37c9fc92438e8d95c492c5330fc65aee93e94f9844dc13a00e2c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdDate',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctRecvNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_acctRecv',repeatNode:'map',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_acctRecv_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'collMoneyPicId',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPicNm',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ramt',name:'잔액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cash',name:'현금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'collMoneyIntendDtCash',name:'수금계획일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtCash',name:'수금계획금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'summaryCdCash',name:'현금적요코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summaryCash',name:'연체사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Bill',name:'어음',dataType:'number'}},{T:1,N:'w2:column',A:{id:'collMoneyIntendDtBill',name:'수금계획일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtBill',name:'수금계획금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'summaryCdBill',name:'어음적요코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summaryBill',name:'연체사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Offset',name:'상계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyIntendDtOffset',name:'수금계획일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtOffset',name:'수금계획금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'summaryCdOffset',name:'상계적요코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summaryOffset',name:'연체사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'세금계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvOutbrDt',name:'청구일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptNm',name:'매출부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'청구금액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'청구금액(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramtFcrc',name:'잔액(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcNm',name:'통화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'채권적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCd',name:'수금귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempCashDt',name:'현금계획일TEMP',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempBillDt',name:'어음계획일TEMP',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempOffsetDt',name:'상게계획일TEMP',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchCd',name:'지점',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchNm',name:'지점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billStatus',name:'name42',dataType:'text',defaultValue:'F'}},{T:1,N:'w2:column',A:{id:'cashStatus',name:'name43',dataType:'text',defaultValue:'F'}},{T:1,N:'w2:column',A:{id:'offsetStatus',name:'name44',dataType:'text',defaultValue:'F'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_acctRecvHistory',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyCntSht',name:'수금수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'histSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptNm',name:'매출부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyIntendDt',name:'수금계획일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'수금예정금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'collMoneyPicId',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyPicNm',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summaryCd',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_acctRecv',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveCollectionOfMoneyPlanRsltConditionDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_acctRecv","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_acctRecv","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_acctRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_acctRecvHistory',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveCollectionOfMoneyPlanRsltConditionHistoryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_acctRecvHistory","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_acctRecvHistory","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_acctRecvHistory_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveRecv',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.SaveCollectionOfMoneyPlanRsltListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_acctRecv","action":"modified","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveRecv_submitdone','ev:submiterror':'scwin.sbm_saveRecv_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fm_603_01_07p
// 이름     : 수금계획상세
// 경로     : 회계/자금관리/수금관리/수금계획/수금계획및실적(초과일별채권기준) / 상세팝업
// 작 성 자 : 오영재
// 작 업 일 : 2025-11-17
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

scwin.editRow = '';
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.bilgAcctDeptCd = scwin.params.bilgAcctDeptCd == null ? "" : scwin.params.bilgAcctDeptCd;
  scwin.crn = scwin.params.crn == null ? "" : scwin.params.crn;
  scwin.clntNo = scwin.params.clntNo == null ? "" : scwin.params.clntNo;
  scwin.stdDt = scwin.params.stdDt == null ? "" : scwin.params.stdDt;
  scwin.dateFlag = "F";
  scwin.editFlag = "F";
  scwin.f_Retrieve();
  const codeOptions = [{
    grpCd: "FM105",
    compID: "gr_acctRecvHistory:summaryCd, gr_acctRecv:summaryCdCash"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_Disable();
  $c.gus.cfDisableBtn($p, [bSav, bCopy]);
};

//-------------------------------------------------------------------------
// 비 활성 
//-------------------------------------------------------------------------
scwin.f_Disable = function (e) {
  gr_acctRecv.setColumnReadOnly("collMoneyPicNm", true);
  gr_acctRecv.setColumnReadOnly("collMoneyIntendDtCash", true);
  gr_acctRecv.setColumnReadOnly("amtCash", true);
  gr_acctRecv.setColumnReadOnly("summaryCdCash", true);
  gr_acctRecv.setColumnReadOnly("summaryCash", true);
  gr_acctRecv.setColumnReadOnly("collMoneyIntendDtBill", true);
  gr_acctRecv.setColumnReadOnly("amtBill", true);
  gr_acctRecv.setColumnReadOnly("summaryCdBill", true);
  gr_acctRecv.setColumnReadOnly("summaryBill", true);
  gr_acctRecv.setColumnReadOnly("collMoneyIntendDtOffset", true);
  gr_acctRecv.setColumnReadOnly("amtOffset", true);
  gr_acctRecv.setColumnReadOnly("summaryCdOffset", true);
  gr_acctRecv.setColumnReadOnly("summaryOffset", true);
  scwin.dateFlag = "F";
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = async function () {
  if (ds_acctRecv.getCellData(ds_acctRecv.getRowPosition(), "ramt") == 0) {
    await $c.gus.cfAlertMsg($p, "이미 수금이 완료된 채권입니다.");
    return;
  }
  scwin.f_Enable();
  scwin.editFlag = "T";
  $c.gus.cfDisableBtn($p, [bUpd]);
};

//-------------------------------------------------------------------------
// 복사
//-------------------------------------------------------------------------
scwin.f_Copy = function (e) {
  var rowIndex = ds_acctRecv.getRowPosition();
  for (var j = rowIndex + 1; j < ds_acctRecv.getRowCount(); j++) {
    ds_acctRecv.setRowPosition(j);

    //ramt = 잔액
    if (ds_acctRecv.getCellData(j, "ramt") != 0) {
      ds_acctRecv.setCellData(j, "collMoneyPicId", ds_acctRecv.getCellData(rowIndex, "collMoneyPicId"));
      ds_acctRecv.setCellData(j, "collMoneyPicNm", ds_acctRecv.getCellData(rowIndex, "collMoneyPicNm"));
      ds_acctRecv.setCellData(j, "collMoneyIntendDtCash", ds_acctRecv.getCellData(rowIndex, "collMoneyIntendDtCash"));
      ds_acctRecv.setCellData(j, "amtCash", ds_acctRecv.getCellData(j, "ramt"));
      ds_acctRecv.setCellData(j, "summaryCdCash", ds_acctRecv.getCellData(rowIndex, "summaryCdCash"));
      ds_acctRecv.setCellData(j, "summaryCash", ds_acctRecv.getCellData(rowIndex, "summaryCash"));
      ds_acctRecv.setCellData(j, "collMoneyIntendDtBill", ds_acctRecv.getCellData(rowIndex, "collMoneyIntendDtBill"));
      //ds_acctRecv.NameValue(j,"amtBill")               = ds_acctRecv.NameValue(j,"amtBill");
      ds_acctRecv.setCellData(j, "summaryCdBill", ds_acctRecv.getCellData(rowIndex, "summaryCdBill"));
      ds_acctRecv.setCellData(j, "summaryBill", ds_acctRecv.getCellData(rowIndex, "summaryBill"));
      ds_acctRecv.setCellData(j, "collMoneyIntendDtOffset", ds_acctRecv.getCellData(rowIndex, "collMoneyIntendDtOffset"));
      //ds_acctRecv.NameValue(j,"amtOffset")             = ds_acctRecv.NameValue(j,"amtOffset");
      ds_acctRecv.setCellData(j, "summaryCdOffset", ds_acctRecv.getCellData(rowIndex, "summaryCdOffset"));
      ds_acctRecv.setCellData(j, "summaryOffset", ds_acctRecv.getCellData(rowIndex, "summaryOffset"));
    }
  }
  ds_acctRecv.setRowPosition(rowIndex);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  //변경한 데이터가 있는지 체크한다. 
  if (ds_acctRecv.getModifiedData().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("데이타"));
    return;
  }

  //새로 입력한 계획일이 처음 계획일에서 다음달 말일을 넘어 갈수 없다 
  //현금
  for (var p = 0; p < ds_acctRecv.getRowCount(); p++) {
    if (ds_acctRecv.getRowStatus(p) != "R") {
      if (ds_acctRecv.getCellData(p, "summaryCdCash") == "10" || ds_acctRecv.getCellData(p, "summaryCdCash") == "50") {
        if (ds_acctRecv.getCellData(p, "summaryCash") == "") {
          $c.win.alert($p, p + "번째 줄 현금 연체사유코드가 단순결제지연이나 기타일경우 적요는 필수입니다.");
          return;
        }
      }
    }
  }

  //어음
  for (var b = 0; b < ds_acctRecv.getRowCount(); b++) {
    if (ds_acctRecv.getRowStatus(b) != "R") {
      if (ds_acctRecv.getCellData(b, "summaryCdCash") == "10" || ds_acctRecv.getCellData(b, "summaryCdCash") == "50") {
        if (ds_acctRecv.getCellData(b, "summaryCash") == "") {
          $c.win.alert($p, b + "번째 줄 어음 연체사유코드가 단순결제지연이나 기타일경우 적요는 필수입니다.");
          return;
        }
      }
    }
  }

  //상계
  for (var m = 0; m < ds_acctRecv.getRowCount(); m++) {
    if (ds_acctRecv.getRowStatus(m) != "R") {
      if (ds_acctRecv.getCellData(m, "summaryCdCash") == "10" || ds_acctRecv.getCellData(m, "summaryCdCash") == "50") {
        if (ds_acctRecv.getCellData(m, "summaryCash") == "") {
          $c.win.alert($p, p + "번째 줄 상계 연체사유코드가 단순결제지연이나 기타일경우 적요는 필수입니다.");
          return;
        }
      }
    }
  }

  //계획금액이 잔액과 일치하지 않으면 에러 처리..
  var cnt = 0;
  for (var i = 0; i < ds_acctRecv.getRowCount(); i++) {
    if (ds_acctRecv.getRowStatus(i) != "R") {
      var sumAmt = Number(ds_acctRecv.getCellData(i, "amtCash")) + Number(ds_acctRecv.getCellData(i, "amtBill")) + Number(ds_acctRecv.getCellData(i, "amtOffset"));
      if (ds_acctRecv.getCellData(i, "ramt") != sumAmt) {
        cnt = cnt + 1;
      }
    }
  }
  if (cnt > 0) {
    $c.win.alert($p, "수금계획금액과 잔액이 일치 하지 않습니다.");
    return;
  }

  //잔액과 수금 계획금액이 있는경우 수금계획일자가 기준일자보다 작으면 에러 처리...
  var dtCnt = 0;
  for (var jj = 0; jj < ds_acctRecv.getRowCount(); jj++) {
    if (ds_acctRecv.getRowStatus(jj) != "R" && ds_acctRecv.getCellData(jj, "ramt") != 0) {
      if (ds_acctRecv.getCellData(jj, "amtCash") != 0) {
        if (ds_acctRecv.getCellData(jj, "collMoneyIntendDtCash") <= new Date(dma_search.get("stdDate").substr(0, 4), dma_search.get("stdDate").substr(4, 2) - 1, "01").lastDate().format("YYYYMMDD")) {
          dtCnt = dtCnt + 1;
        }
      } else if (ds_acctRecv.any(jj, "amtBill") != 0) {
        if (ds_acctRecv.getCellData(jj, "collMoneyIntendDtBill") <= new Date(dma_search.get("stdDate").substr(0, 4), dma_search.get("stdDate").substr(4, 2) - 1, "01").lastDate().format("YYYYMMDD")) {
          dtCnt = dtCnt + 1;
        }
      } else if (ds_acctRecv.getCellData(jj, "amtOffset") != 0) {
        if (ds_acctRecv.getCellData(jj, "collMoneyIntendDtOffset") <= new Date(dma_search.get("stdDate").substr(0, 4), dma_search.get("stdDate").substr(4, 2) - 1, "01").lastDate().format("YYYYMMDD")) {
          dtCnt = dtCnt + 1;
        }
      }
    }
  }
  if (dtCnt > 0) {
    $c.win.alert($p, "계획일자는 " + new Date(dma_search.get("stdDate").substr(0, 4), dma_search.get("stdDate").substr(4, 2), "01").format("YYYYMMDD") + "일 이후로 입력 하십시요.");
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    // 저장하시겠습니까?
    $c.sbm.execute($p, sbm_saveRecv);
  }
};

//-------------------------------------------------------------------------
// 활성 
//-------------------------------------------------------------------------
scwin.f_Enable = function (e) {
  gr_acctRecv.setColumnReadOnly("collMoneyPicNm", false);
  gr_acctRecv.setColumnReadOnly("collMoneyIntendDtCash", false);
  gr_acctRecv.setColumnReadOnly("amtCash", false);
  gr_acctRecv.setColumnReadOnly("summaryCdCash", false);
  gr_acctRecv.setColumnReadOnly("summaryCash", false);
  gr_acctRecv.setColumnReadOnly("collMoneyIntendDtBill", false);
  gr_acctRecv.setColumnReadOnly("amtBill", false);
  gr_acctRecv.setColumnReadOnly("summaryCdBill", false);
  gr_acctRecv.setColumnReadOnly("summaryBill", false);
  gr_acctRecv.setColumnReadOnly("collMoneyIntendDtOffset", false);
  gr_acctRecv.setColumnReadOnly("amtOffset", false);
  gr_acctRecv.setColumnReadOnly("summaryCdOffset", false);
  gr_acctRecv.setColumnReadOnly("summaryOffset", false);
  scwin.dateFlag = "T";
};

// sbm completed
scwin.sbm_acctRecv_submitdone = function (e) {
  let rowCnt = ds_acctRecv.getRowCount();
  if (rowCnt == 0) {
    //$c.win.alert(MSG_CM_ERR_003);
  } else {
    ds_acctRecv.setRowPosition(0);
    gr_acctRecv.setFocusedCell(0, 0, false);
  }
  ed_totalRows.setValue(rowCnt);
};

// sbm_acctRecvHistory_submitdone submitdone completed
scwin.sbm_acctRecvHistory_submitdone = function (e) {
  let rowCnt = ds_acctRecvHistory.getRowCount();
  ed_totalRows2.setValue(rowCnt);
};
scwin.sbm_saveRecv_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == "0") {
    var res = await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Disable();
    scwin.editFlag = "F";
    $c.gus.cfDisableBtn($p, [bSav, bCopy]);
    $c.sbm.execute($p, sbm_acctRecv);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function (e) {
  /*
      scwin.bilgAcctDeptCd    = scwin.params.bilgAcctDeptCd == null ? ""	: scwin.params.bilgAcctDeptCd;
      scwin.crn               = scwin.params.crn == null          ? ""  : scwin.params.crn;
      scwin.clntNo            = scwin.params.clntNo == null        ? ""  : scwin.params.clntNo;
      scwin.stdDt             = scwin.params.stdDt  == null        ? ""  : scwin.params.stdDt;
      scwin.dateFlag = "F";
      scwin.editFlag = "F";
  */

  dma_search.set("stdDate", scwin.stdDt);
  dma_search.set("acctDeptCd", scwin.bilgAcctDeptCd);
  dma_search.set("crn", scwin.crn);
  dma_search.set("clntNo", scwin.clntNo);
  $c.sbm.execute($p, sbm_acctRecv);
};

//-------------------------------------------------------------------------
// 그리드 클릭시 발생하는 이벤트
//-------------------------------------------------------------------------
scwin.gr_acctRecv_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (scwin.editFlag == "T") {
    if (ds_acctRecv.getCellData(rowIndex, "ramt") == 0) {
      scwin.f_Disable();
    } else {
      scwin.f_Enable();
    }
    return;
  }
  if (columnId != "slipNo" && columnId != "mgntNo") {
    dma_search.set("acctRecvNo", ds_acctRecv.getCellData(rowIndex, "acctRecvNo"));
    $c.sbm.execute($p, sbm_acctRecvHistory);
  }

  /*
  if (columnId == "collMoneyIntendDtCash" || columnId == "collMoneyIntendDtBill" || columnId == "collMoneyIntendDtOffset") {
      if (scwin.dateFlag == "T") {
          cfOpenCalendar(gr_acctRecv, Row, Colid); // 달력팝업
      }
  }
  */
  /** 
  if (columnId == "collMoneyPicNm") {
       var rtnList = cfCommonPopUp('retrieveUserInfo'	// XML상의 SELECT ID	
                          ,ds_acctRecv.getCellData(rowIndex, "collMoneyPicId")				// 화면에서의 ??? Code Element의	Value
                          ,ds_acctRecv.getCellData(rowIndex, "collMoneyPicNm")				// 화면에서의 ??? Name Element의	Value
                          ,'T'					// 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
                          ,null					// 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
                          ,null					// Title순서	
                          ,null					// 보여주는 각 컬럼들의 폭	
                          ,null					// 컬럼중에서 숨기는	컬럼 지정	
                          ,null					// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
                          ,null					// POP-UP뛰을때 원도우의	사용자 정의	폭
                          ,null					// POP-UP뛰을때 우도우의	사용자 정의	높이	
                          ,null					// 윈도우 위치 Y좌표	
                          ,null					// 윈도우 위치 X좌표
                          ,null					// 중복체크여부	("F")
                          ,'F'					// 전체검색허용여부	("F")
                          ,"사원검색,사번,사원명"		// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
                          );
        if ( rtnList != null) {
          if(rtnList[0] == "N/A") return false;
           ds_acctRecv.setCellData(rowIndex, "collMoneyPicId", rtnList[0]);
          ds_acctRecv.setCellData(rowIndex, "collMoneyPicNm", rtnList[1]);
      } else {
          ds_acctRecv.setCellData(rowIndex, "collMoneyPicId", "");
          ds_acctRecv.setCellData(rowIndex, "collMoneyPicNm", "");
      }
  }
  */

  if (columnId == "slipNo") {
    await $c.gus.cfShowSlipInfo($p, ds_acctRecv.getCellData(rowIndex, "slipNo"));
  }

  // 세금계산서 번호 클릭시 해당 Report를 뛰운다.
  if (columnId == "mgntNo") {
    /** 
    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
    let odiParam = new ODIParam("fi_401_01_01p") ;
    odiParam.add("pchsSellCls", ds_acctRecv.getCellData(rowIndex, "mgntNo") );
    
    // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
    let formParam = new FormParam() ;
    
    // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
    let viewerParam = new ViewerParam();
    viewerParam.add("print.mode","print"); 
    
    $c.gus.cfOZReport("ozFrame", "myozviewer", "/ac/fi/taxbiz/vatctrl/fi_401_01_01p.ozr", odiParam, viewerParam, formParam);
    */

    let data = {
      reportName: "/ac/fi/taxbiz/vatctrl/fi_401_01_01p.ozr",
      odiName: "fi_401_01_01p",
      odiParam: {
        pchsSellCls: ds_acctRecv.getCellData(rowIndex, "mgntNo")
      },
      viewerParam: {
        mode: "silent",
        zoom: 100,
        useprogressbar: false
      },
      formParam: {}
    };
    let opts = {
      id: "ozReportPopup",
      popupName: "오즈 리포트",
      modal: true,
      type: "browserPopup",
      width: 1000,
      height: 600,
      title: "오즈 리포트"
    };
    await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
  }
};
scwin.bUpd_onclick = function (e) {
  scwin.f_Update();
};
scwin.sbm_saveRecv_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.bClose_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.f_Excel = async function (e) {
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    let sheetTitle = "수금계획상세현황";
    const gridId = gr_acctRecv;
    const infoArr = [];
    const options = {
      fileName: sheetTitle + ".xlsx",
      // + ".xls",
      sheetName: sheetTitle
    };
    $c.data.downloadGridViewExcel($p, gridId, options, infoArr);
  }
};
scwin.bSav_onclick = function (e) {
  scwin.f_Save();
};
scwin.gr_acctRecv_ontextimageclick = async function (rowIndex, columnIndex) {
  var columnId = gr_acctRecv.getColumnID(columnIndex);
  if (columnId == "collMoneyPicNm") {
    scwin.editRow = rowIndex;
    await scwin.f_retrieveUserInfo();
  }
};
scwin.f_retrieveUserInfo = async function () {
  var rowIndex = ds_acctRecv.getRowPosition();
  //var rtnList = cfCommonPopUp('retrieveUserInfo'	// XML상의 SELECT ID	
  let res = await udc_collMoneyPicId.cfCommonPopUp(scwin.udc_collMoneyPicId_cb, ds_acctRecv.getCellData(rowIndex, "collMoneyPicId") // 화면에서의 ??? Code Element의	Value
  , ds_acctRecv.getCellData(rowIndex, "collMoneyPicNm") // 화면에서의 ??? Name Element의	Value
  , 'T' // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
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
  , 'F' // 전체검색허용여부	("F")
  , "사원검색,사번,사원명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};
scwin.udc_collMoneyPicId_cb = function (rtnList) {
  var rowIndex = scwin.editRow;
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return false;
    }
    ds_acctRecv.setCellData(rowIndex, "collMoneyPicId", rtnList[0]);
    ds_acctRecv.setCellData(rowIndex, "collMoneyPicNm", rtnList[1]);
  } else {
    ds_acctRecv.setCellData(rowIndex, "collMoneyPicId", "");
    ds_acctRecv.setCellData(rowIndex, "collMoneyPicNm", "");
  }
  scwin.editRow = '';
};
scwin.ds_acctRecv_oncelldatachange = function (info) {
  /**
   * info
   * colID: "amtCash"
     newValue : "547288"
     oldValue :  "1545680"
     realRowIndex : 1
     rowIndex : 1
   */

  var colid = info.colID;
  var row = ds_acctRecv.getRowPosition();

  // 현금 어음 상계 중 수정하는지 체크 
  if (colid == "collMoneyIntendDtCash" || colid == "amtCash" || colid == "summaryCash" || colid == "summaryCdCash") {
    ds_acctRecv.setCellData(row, "cashStatus", "T");
  } else if (colid == "collMoneyIntendDtBill" || colid == "amtBill" || colid == "summaryBill" || colid == "summaryCdBill") {
    ds_acctRecv.setCellData(row, "billStatus", "T");
  } else if (colid == "collMoneyIntendDtOffset" || colid == "amtOffset" || colid == "summaryOffset" || colid == "summaryCdOffset") {
    ds_acctRecv.setCellData(row, "offsetStatus", "T");
  }

  // 담당자를 수정했을때 이력이 생겨야할 곳이 현금 어음 상계 중 어디인지 체크   
  if (colid == "collMoneyPicNm") {
    if (ds_acctRecv.getCellData(row, "amtCash") != 0) {
      ds_acctRecv.setCellData(row, "cashStatus", "T");
    }
    if (ds_acctRecv.getCellData(row, "amtBill") != 0) {
      ds_acctRecv.setCellData(row, "billStatus", "T");
    }
    if (ds_acctRecv.getCellData(row, "amtOffset") != 0) {
      ds_acctRecv.setCellData(row, "offsetStatus", "T");
    }
  }

  //적요코드를 단결제지연이나 기타로 수정했을때 적요를 입력하도록 기존 데이타를 지움  
  if (colid == "summaryCdCash") {
    if (ds_acctRecv.getCellData(row, "summaryCdCash") == "10" || ds_acctRecv.getCellData(row, "summaryCdCash") == "50") {
      ds_acctRecv.setCellData(row, "summaryCash", "");
    }
  }
  if (colid == "summaryCdBill") {
    if (ds_acctRecv.NameValue(row, "summaryCdBill") == "10" || ds_acctRecv.NameValue(row, "summaryCdBill") == "50") {
      ds_acctRecv.setCellData(row, "summaryBill", "");
    }
  }
  if (colid == "summaryCdOffset") {
    if (ds_acctRecv.NameValue(row, "summaryCdOffset") == "10" || ds_acctRecv.NameValue(row, "summaryCdOffset") == "50") {
      ds_acctRecv.setCellData(row, "summaryOffset", "");
    }
  }
};
scwin.bCopy_onclick = function (e) {
  scwin.f_Copy();
};

//<script language=JavaScript for=gr_acctRecv event=OnExit(Row,Colid,Olddata)>
//편집모드 수정
scwin.gr_acctRecv_onafteredit = async function (rowIndex, columnIndex, value) {
  var Row = rowIndex;
  var colId = gr_acctRecv.getColumnID(columnIndex);
  if (colId == 'collMoneyPicNm') {
    scwin.editRow = Row;
    ds_acctRecv.setCellData(Row, "collMoneyPicId", "");
    await scwin.f_retrieveUserInfo();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'N',btnUser:'N',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_acctRecv',focusMode:'cell',id:'gr_acctRecv',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',autoFit:'none','ev:oncellclick':'scwin.gr_acctRecv_oncellclick',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_acctRecv_ontextimageclick','ev:onafteredit':'scwin.gr_acctRecv_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'담당자',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'거래처번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'거래처명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'잔액(원)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'460',inputType:'text',style:'',id:'cash',value:'현금',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'460',inputType:'text',style:'',id:'Bill',value:'어음',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'460',inputType:'text',style:'',id:'Offset',value:'상계',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column87',value:'세금계산서번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column83',value:'채권번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'청구일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'매출부서',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column123',value:'매출부서명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column119',value:'청구부서',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column115',value:'청구부서명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column111',value:'청구금액(원)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column107',value:'청구금액(외)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column99',value:'잔액(외)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column103',value:'통화',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column147',value:'환율',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column143',value:'전표번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column139',value:'채권적요',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column135',value:'통화',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column127',value:'수금귀속부서코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column155',value:'지점',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column151',value:'지점명',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'수금계획일',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column49',value:'수금계획금액',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'현금적요코드',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'연체사유',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column38',value:'수금계획일',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'수금계획금액',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column36',value:'어음적요코드',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'연체사유',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column34',value:'수금계획일',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'수금계획금액',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column96',value:'상계적요코드',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column92',value:'연체사유',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',style:'',id:'collMoneyPicNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ramt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',style:'',id:'collMoneyIntendDtCash',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'amtCash',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',style:'',id:'summaryCdCash',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'summaryCash',value:'',displayMode:'label',textAlign:'left',editModeEvent:'onclick'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',style:'',id:'collMoneyIntendDtBill',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'amtBill',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'summaryCdBill',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'summaryBill',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',style:'',id:'collMoneyIntendDtOffset',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'amtOffset',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'summaryCdOffset',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'summaryOffset',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'color:blue',id:'mgntNo',value:'',displayMode:'label',class:'underline',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctRecvNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'acctRecvOutbrDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAcctDeptCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sellAcctDeptNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgAcctDeptCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bilgAcctDeptNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'amtFcrc',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ramtFcrc',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.00',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crcNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'exchRt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0.00',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'color:blue',id:'slipNo',value:'',displayMode:'label',class:'underline',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crcCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'collMoneyAcctDeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'branchCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'branchNm',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column70',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'ramt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column98',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column94',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column90',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column86',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column126',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column122',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column118',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column114',value:'',displayMode:'label',expression:'sum(\'amt\')',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column110',value:'',displayMode:'label',expression:'sum(\'amtFcrc\')',textAlign:'right',dataType:'number',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column102',value:'',displayMode:'label',expression:'sum(\'ramtFcrc\')',textAlign:'right',dataType:'number',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column106',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column150',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column146',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column142',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column138',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column130',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column158',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column154',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grp_group2',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_acctRecvHistory',focusMode:'cell',id:'gr_acctRecvHistory',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'3',visibleRowNumFix:'true',autoFit:'none',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'채권번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'수금수단',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'청구부서',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'청구부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'매출부서',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column13',value:'매출부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column15',value:'거래처번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column49',value:'수금계획일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column46',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column43',value:'수금예정금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'환율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'외화금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'담당자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'삭제여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'등록자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'등록일',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'수정자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'수정일',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctRecvNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'collMoneyCntSht',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'현금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'어음'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'상계'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'30'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'histSeq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgAcctDeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bilgAcctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAcctDeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sellAcctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'collMoneyIntendDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crcCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'exchRt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#.#0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amtFcrc',value:'',displayMode:'label',textAlign:'right',displayFormat:'#.#0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'collMoneyPicId',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'collMoneyPicNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'summaryCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'summary',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column32',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'bCopy',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.bCopy_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복사'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'bUpd',style:'',type:'button','ev:onclick':'scwin.bUpd_onclick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'bSav',style:'',type:'button',userAuth:'U',objType:'ctrlBtn','ev:onclick':'scwin.bSav_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'bClose',style:'',type:'button','ev:onclick':'scwin.bClose_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'display: none;height: 100px;'},E:[{T:1,N:'w2:udc_comCode',A:{btnId:'btn_collMoneyPicId',codeId:'ed_collMoneyPicId',hideName:'true',id:'udc_collMoneyPicId',nameId:'ed_collMoneyPicNm',objTypeCode:'data',popupID:'',selectID:'retrieveUserInfo',style:'width:110px;display:none;'}}]}]}]}]}]})