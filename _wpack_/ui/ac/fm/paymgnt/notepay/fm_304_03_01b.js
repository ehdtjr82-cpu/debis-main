/*amd /ui/ac/fm/paymgnt/notepay/fm_304_03_01b.xml 32197 20d73af2bc6161206c941dc088a3c10ea9807cc3180a83212600a90be1f0b83b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_electricBank'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cdNm',name:'cdNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'cdDesc',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'draftCheckClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prtBank',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'recStDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'recEndDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dueStDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dueEndDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftCheckNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftStsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftCheckNoFrom',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftCheckNoTo',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_bankBook'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bankbookNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnSeq',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcptWithdrawClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'summary',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnAmt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnAmtFcrc',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'exchRt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnStsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookKndCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankAcntNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commiSsion',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_draft','ev:onrowpositionchange':'scwin.ds_draft_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selYn',name:'selYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'draftCheckNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckClsCd',name:'draftCheckClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfDraftStsCd',name:'bfDraftStsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftStsCd',name:'draftStsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueBankCd',name:'issueBankCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueBankNm',name:'issueBankNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recDt',name:'recDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtDt',name:'prtDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'dueDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'disuseDt',name:'disuseDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckAmt',name:'draftCheckAmt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dueSlipNo',name:'dueSlipNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueSlipSeq',name:'dueSlipSeq',dataType:'number'}},{T:1,N:'w2:column',A:{id:'draftCheckDesc',name:'draftCheckDesc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refDraftCheckNo',name:'refDraftCheckNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'useYn',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'regId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'regDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'modId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'modDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'payBankbookNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'selYn',dataType:'number'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'clntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cumulDraftAmt',name:'cumulDraftAmt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'slipDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'outbrSummary',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'acctDeptNm',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_dueDraft',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_draft","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_dueDraft_submitdone','ev:submiterror':'scwin.sbm_dueDraft_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDraft',action:'/ac.fm.paymgnt.notepay.RetrieveDraftCheckContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_draft","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_draft","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDraft_submitdone','ev:submiterror':'scwin.sbm_retrieveDraft_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_electricBank',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=FM063',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_electricBank","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_electricBank_submitdone','ev:submiterror':'scwin.sbm_electricBank_submiterror',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fm_304_03_01b
// 이름     : 어음수표만기처리
// 경로     : 회계/자금관리/지급관리/지급어음관리/
// 작 성 자 : 오영재
// 작 업 일 : 2025-12-19
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

scwin.NEW = "01"; // 신규
scwin.GENUIN = "02"; // 진성
scwin.BLNK = "03"; // 견질
scwin.ACCMO = "04"; // 융통
scwin.DUE = "05"; // 만기   
scwin.DISUSE = "06"; // 폐기

scwin.b_disusegb = false;
scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.bCheck = false;

//hidden
scwin.hid_bankbookNo = "";
scwin.txt_acctDeptCd = "";
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FM012",
    compID: "lc_draft_check_cls_cd, gr_draft:draftCheckClsCd",
    opt: {
      'range': '2,20'
    }
  }, {
    grpCd: "FM013",
    compID: "lc_srchdraftStsCd, gr_draft:draftStsCd",
    opt: {
      'range': '1,10'
    }
  }];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// 신규 : 신규입력화면으로 초기화한다.
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  $c.gus.cfTurnCreateFlag($p, true);
  //ds_bankBook.AddRow();
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisable($p, [ed_bankbookNm, ed_bankAcntNo]);
  ed_SlipDt.focus();
};

//-------------------------------------------------------------------------
// 조회조건 헤더생성
//-------------------------------------------------------------------------
scwin.f_QueryConditionCreate = function () {
  $c.gus.cfTurnCreateFlag($p, true);
};
scwin.onUdcCompleted = function () {
  //scwin.f_bankcd_Retrieve();
  //ds_bankcd.Index=0;
  scwin.f_Create();
  scwin.f_QueryConditionCreate();
  //f_bankBookHeaderCreate();
  scwin.f_retrieveElectricBank(); //(4월14일 수취은행 조건 추가)
  ed_srchStartDueDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_srchEndDueDt.setValue(scwin.g_sCurrDate);
  ed_SlipDt.setValue(scwin.g_sCurrDate);
  lc_draft_check_cls_cd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 은행코드조회
//-------------------------------------------------------------------------
scwin.f_bankcd_Retrieve = function () {
  //ds_bankcd.DataID = "/ac.fm.stdinfomgnt.RetrieveBankCMD.do";
  //ds_bankcd.Reset();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_due_onclick = function (e) {
  scwin.f_Due();
};
scwin.btn_cancel_due_onclick = function (e) {
  scwin.f_CancelDue();
};
scwin.sbm_dueDraft_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    $c.win.alert($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_dueDraft_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

//조회
scwin.sbm_retrieveDraft_submitdone = function (e) {
  //cfShowTotalRows(totalRows,rowCnt)
  let rowCnt = ds_draft.getRowCount();
  ed_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else {
    if (lc_srchdraftStsCd.getValue() == scwin.GENUIN) {
      $c.gus.cfEnableObjects($p, [btn_due]);
      $c.gus.cfDisableObjects($p, [btn_cancel_due]);
    } else if (lc_srchdraftStsCd.getValue() == scwin.DUE) {
      $c.gus.cfDisableObjects($p, [btn_due]);
      $c.gus.cfEnableObjects($p, [btn_cancel_due]);
    } else {
      $c.gus.cfDisableObjects($p, [btn_cancel_due, btn_due]);
    }
    //gr_draft.ColumnProp('selYn', 'HeadCheck') = "FALSE"
  }
};
scwin.sbm_retrieveDraft_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

//-------------------------------------------------------------------------
// 전자결재은행 데이타셋 생성(4월14일 수취은행 조건 추가)
//-------------------------------------------------------------------------
scwin.f_retrieveElectricBank = function () {
  //ds_electricBank.DataId = "/cm.zz.RetrieveCodeCMD.do?grpCd=FM063";
  //ds_electricBank.Reset();
  $c.sbm.execute($p, sbm_electricBank);
};
scwin.sbm_electricBank_submitdone = function (e) {
  lc_bankCd.setSelectedIndex(0);
};
scwin.sbm_electricBank_submiterror = function (e) {};

/*
<script language=JavaScript for=ds_draft event=OnRowPosChanged(row)>
*/
scwin.ds_draft_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  dma_bankBook.set("bankCd", ds_draft.getCellData(row, "bankCd"));
  dma_bankBook.set("draftCheckNo", ds_draft.getCellData(row, "draftCheckNo"));
  dma_bankBook.set("dueAmt", ds_draft.getCellData(row, "draftCheckAmt"));
};
scwin.udc_bankbookNo_onblurCodeEvent = function (e) {
  let bankbookNo = ed_bankbookNo.getValue().trim();
  let hidBankbookNo = scwin.hid_bankbookNo.trim();
  if (bankbookNo === hidBankbookNo) {
    return;
  } else if (bankbookNo === "") {
    dma_bankBook.set("bankbookNo", "");
    dma_bankBook.set("bankCd", "");
    dma_bankBook.set("bankbookNm", "");
    dma_bankBook.set("acctDeptCd", "");
    dma_bankBook.set("bankAcntNo", "");
    dma_bankBook.set("bankbookKndCd", "");
    scwin.hid_bankbookNo = "";
    return;
  }
  if (bankbookNo !== "") {
    scwin.f_BankBookPopUp("T");
  }
};

/*
<!-- 전표번호클릭시  -->   
<script language="javascript"  for=gr_draft event=OnClick(Row,Colid)>
*/
scwin.gr_draft_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "dueSlipNo") {
    if (!(ds_draft.getCellData(rowIndex, "dueSlipNo") == null || ds_draft.getCellData(rowIndex, "dueSlipNo") == "")) {
      $c.gus.cfShowSlipInfo($p, ds_draft.getCellData(rowIndex, "dueSlipNo"));
    }
  }
};
scwin.udc_bankbookNo_onclickEvent = function (e) {
  scwin.f_BankBookPopUp('F');
};

//-------------------------------------------------------------------------
// 통장조회 POPUP호출
//-------------------------------------------------------------------------
scwin.f_BankBookPopUp = function (sFlag) {
  // PopUp호출전에 입력 Edit 초기화
  //	ds_bankBook.NameValue(1,"bankCd") = "";	//은행코드
  //	ds_bankBook.NameValue(1,"bankbookNm") = "";	//통장명
  //	ds_bankBook.NameValue(1,"bankAcntNo") = "";	//통장계좌번호
  //	ds_bankBook.NameValue(1,"bankbookNo") = "";	//통장번호

  let i_bankbookno = ed_bankbookNo.getValue().trim();
  udc_bankbookNo.setSelectId("retrieveBankBookCdInfo");
  udc_bankbookNo.cfCommonPopUp(scwin.udc_bankbookNo_callbackfunc, i_bankbookno, '', sFlag, null, null, null, null, null, null, null, null, null); // 거래처
};
scwin.udc_bankbookNo_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    dma_bankBook.set("bankbookNo", rtnList[0]); // 통장번호
    dma_bankBook.set("bankCd", rtnList[1]); // 은행코드
    dma_bankBook.set("bankbookNm", rtnList[2]); // 통장명
    dma_bankBook.set("acctDeptCd", rtnList[3]); // 관리부서코드
    dma_bankBook.set("bankAcntNo", rtnList[4]); // 통장계좌번호
  } else {
    dma_bankBook.set("bankbookNo", ""); // 통장번호
    dma_bankBook.set("bankCd", ""); // 은행코드
    dma_bankBook.set("bankbookNm", ""); // 통장명
    dma_bankBook.set("acctDeptCd", ""); // 관리부서코드
    dma_bankBook.set("bankAcntNo", ""); // 통장계좌번호
  }
};

//-------------------------------------------------------------------------
// 만기처리
//-------------------------------------------------------------------------
scwin.f_Due = async function () {
  let i = 0;
  let cnt = 0;
  let ret;
  if (ds_draft.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_ERR_003);
    return false;
  } else {
    ret = await $c.gus.cfValidate($p, [ed_bankbookNo]);
    if (!ret) {
      return false;
    }
    for (i = 0; i <= ds_draft.getRowCount(); i++) {
      //체크된것 갯수
      if (ds_draft.getCellData(i, "selYn") > 0) {
        cnt++;
      }
    }
    if (cnt <= 0) {
      $c.win.alert($p, "만기처리할 자료를 선택하십시오");
      return false;
    }
    ret = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (ret == true) {
      for (i = 0; i < ds_draft.getRowCount(); i++) {
        console.log("ds_draft.getCellData(i, selYn)" + ds_draft.getCellData(i, "selYn"));
        if (ds_draft.getCellData(i, "selYn") > 0) {
          ds_draft.setCellData(i, "payBankbookNo", ed_bankbookNo.getValue());
          ds_draft.setCellData(i, "slipDt", dma_bankBook.get("txnDt"));
          ds_draft.setCellData(i, "bfDraftStsCd", ds_draft.getCellData(i, "draftStsCd")); // 현어음상태코드 전어음상태코드 set
          ds_draft.setCellData(i, "draftStsCd", scwin.DUE); // 현어음상태코드 만기로 set
        }
      }

      //tr_dueDraft.Action   = "/ac.fm.paymgnt.notepay.ProcessDraftCheckExpirationCMD.do"
      //tr_dueDraft.post();
      sbm_dueDraft.action = "/ac.fm.paymgnt.notepay.ProcessDraftCheckExpirationCMD.do";
      $c.sbm.execute($p, sbm_dueDraft);
    }
  }
};

//-------------------------------------------------------------------------
// 만기취소
//-------------------------------------------------------------------------
scwin.f_CancelDue = async function () {
  let i = 0;
  let cnt = 0;
  let ret;
  if (ds_draft.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_ERR_003);
    return false;
  } else {
    for (i = 0; i < ds_draft.getRowCount(); i++) {
      if (ds_draft.getCellData(i, "selYn") > 0) {
        cnt++;
      }
    }
    if (cnt <= 0) {
      $c.win.alert($p, "만기취소할 자료를 선택하십시오");
      return false;
    }
    ret = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (ret === true) {
      for (i = 0; i < ds_draft.getRowCount(); i++) {
        if (ds_draft.getCellData(i, "selYn") > 0) {
          ds_draft.setCellData(i, "payBankbookNo", "");
          ds_draft.setCellData(i, "draftStsCd", ds_draft.getCellData(i, "bfDraftStsCd")); // 전어음상태코드 → 현어음상태코드 set

          ds_draft.setCellData(i, "bfDraftStsCd", scwin.DUE); // 전어음상태코드 만기로 set
        }
      }

      //tr_dueDraft.Action   = "/ac.fm.paymgnt.notepay.CancelDraftCheckExpirationCMD.do"
      //tr_dueDraft.post();
      sbm_dueDraft.action = "/ac.fm.paymgnt.notepay.CancelDraftCheckExpirationCMD.do";
      $c.sbm.execute($p, sbm_dueDraft);
    }
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  //ds_condition.UseChangeInfo = false
  dma_condition.set("scClsCd", "1");
  if (!scwin.f_BetweenCheck(ed_draftCheckNoFrom.getValue(), ed_draftCheckNoTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, Array("어음번호From", "어음번호To"));
    ed_draftCheckNoFrom.Focus();
    return false;
  }
  //alert(ds_condition.text);

  //tr_retrieveDraft.post();

  dma_condition.set("draftCheckClsCd", lc_draft_check_cls_cd.getValue());
  dma_condition.set("prtBank", lc_bankCd.getValue());
  dma_condition.set("dueStDt", ed_srchStartDueDt.getValue());
  dma_condition.set("dueEndDt", ed_srchEndDueDt.getValue());
  dma_condition.set("draftStsCd", lc_srchdraftStsCd.getValue());
  dma_condition.set("draftCheckNoFrom", ed_draftCheckNoFrom.getValue());
  dma_condition.set("draftCheckNoTo", ed_draftCheckNoTo.getValue());
  $c.sbm.execute($p, sbm_retrieveDraft);
};

//-------------------------------------------------------------------------
// 숫자차이체크
//-------------------------------------------------------------------------
scwin.f_BetweenCheck = function (str1, str2) {
  if (str1 == "" && str2 != "" || str1 != "" && str2 == "") {
    return false;
  }
  if (parseInt(str2) - parseInt(str1) < 0) {
    return false;
  }
  return true;
};
scwin.gr_draft_onheaderclick = function (headerId) {
  if (headerId == "HeadCheck") {
    if (scwin.bCheck == true) {
      for (i = 0; i < ds_draft.getRowCount(); i++) {
        ds_draft.setCellData(i, "selYn", "0");
      }
      scwin.bCheck = false;
    } else {
      for (i = 0; i < ds_draft.getRowCount(); i++) {
        ds_draft.setCellData(i, "selYn", "1");
      }
      scwin.bCheck = true;
    }
  }
};

//엑셀 다운로드
scwin.f_GridToExcel = async function () {
  if (ds_draft.getRowCount() <= 0) {
    $c.win.alert($p, "어음수표내역이 존재하지않습니다.");
    return false;
  }
  let fileName = '어음수표만기처리';
  let sheetTitle = '어음수표만기처리';
  await $c.data.downloadGridViewExcel($p, gr_draft, {
    fileName: fileName + ".xlsx",
    sheetName: sheetTitle
  });
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'어음구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_draft_check_cls_cd',style:'width: 150px;',submenuSize:'fixed'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수취은행 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bankCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'',objType:'data',mandatory:'false',chooseOption:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_electricBank'},E:[{T:1,N:'xf:label',A:{ref:'cdNm'}},{T:1,N:'xf:value',A:{ref:'cdDesc'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'만기일 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar1',refEdDt:'',edFromId:'ed_srchStartDueDt',edToId:'ed_srchEndDueDt',objType:'data',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'어음번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_draftCheckNoFrom',style:'width: 120px;'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_draftCheckNoTo',style:'width: 120px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'minimal',chooseOptionLabel:'전체',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchdraftStsCd',ref:'',style:'width: 120px;',submenuSize:'fixed',chooseOption:'true'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''}},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_draft',gridDownFn:'scwin.f_GridToExcel',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_draft',focusMode:'cell',id:'gr_draft',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_draft_oncellclick','ev:onheaderclick':'scwin.gr_draft_onheaderclick',fixedColumnNoMove:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'25',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'HeadCheck',value:'',displayMode:'label',fixColumnWidth:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'어음구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'만기일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'어음번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'발행일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'발행금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column13',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{inputType:'text',style:'',id:'column15',value:'은행',displayMode:'label',width:'150'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'만기전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column37',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'부서명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'selYn',value:'',displayMode:'label',fixColumnWidth:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'draftStsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'draftCheckClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dueDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'draftCheckNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'prtDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'draftCheckAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'issueBankNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'link',style:'',id:'dueSlipNo',value:'',displayMode:'label',class:'linktype'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'outbrSummary',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'draftCheckAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_SlipDt',style:'',mandatory:'true',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:dma_bankBook.txnDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'통장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'',codeId:'ed_bankbookNo',popupID:'',validTitle:'통장번호',nameId:'ed_bankbookNm',style:'',id:'udc_bankbookNo','ev:onblurCodeEvent':'scwin.udc_bankbookNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bankbookNo_onclickEvent',objTypeCode:'data',objTypeName:'key',refDataCollection:'dma_bankBook',code:'bankbookNo',name:'bankbookNm',mandatoryCode:'true',allowCharCode:'0-9',maxlengthCode:'5'}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_bankAcntNo',class:'',maxlength:'20',invalidMessage:'통장명',objType:'key',ref:'data:dma_bankBook.bankAcntNo'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_cancel_due',type:'button',class:'btn white','ev:onclick':'scwin.btn_cancel_due_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'만기취소'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_due',type:'button',class:'btn','ev:onclick':'scwin.btn_due_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'만기'}]}]}]}]}]}]}]}]}]})