/*amd /ui/ac/co/budgetmgnt/co_302_01_02b.xml 27968 82c14871f0eaefc85dc533d01bfbfd84b082f830f6301d094ea749f21f8c16f5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'budgetYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'costClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctNm',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addBudgetSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnAmt',name:'배정금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actAmt',name:'실행금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addBudgetAmt',name:'추가예산',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetYm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'신청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.co.budgetmgnt.RetrieveAdditionBudgetAccountEachCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.co.budgetmgnt.SaveAdditionBudgetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.memJson.privAdmin;

//비용구분
scwin.COST_CLS_PCOST = ACConstants.COST_CLS_PCOST;
scwin.COST_CLS_SALE_MGNT = ACConstants.COST_CLS_SALE_MGNT;
scwin.COST_CLS_PCOST_SALE_MGNT = ACConstants.COST_CLS_PCOST_SALE_MGNT;

//비용구분에 따른 계정레벨
scwin.ACCT_PREFIX_PCOST = ACConstants.ACCT_PREFIX_PCOST;
scwin.ACCT_PREFIX_SALE_MGNT = ACConstants.ACCT_PREFIX_SALE_MGNT;
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사 
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드   
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 회사코드
scwin.isSubCompany = false;
scwin.isStart = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //cfTurnCreateFlag(true);
  //f_Retrieve();
  cbx_applyAll.setValue(1);
};

//-------------------------------------------------------------------------
// UDC 로딩 완료 후
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableKey($p);
  scwin.f_applyAllOnOff(false);
  scwin.f_FieldClear();
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ica_srchBudgetYm, ica_srchReqDt]);
  scwin.f_SetSrchDefault();
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
  scwin.isStart = true;
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  await udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, ed_coCd.getValue(), "", pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  // SET	
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
  }
  if (ed_coCd.getValue() > ACConstants.CO_CD_DONGBU) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStart == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.isStart = false;
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  $c.gus.cfInitHidVal($p, tbl_search);
  ica_srchBudgetYm.setValue($c.date.getServerDateTime($p, "yyyyMM"));
  ica_srchReqDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  ica_reqDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  ed_summary.setValue("");
  ica_srchBudgetYm.focus();
};

//-------------------------------------------------------------------------
// 조회 : 데이터를 조회한다.
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ds_master.getRowCount() > 0 && ds_master.getModifiedIndex().length > 0) {
    if ((await $c.win.confirm($p, MSG_CM_CRM_005)) == false) return;
  }
  let ret = await $c.gus.cfValidate($p, [ica_srchBudgetYm, ed_srchAcctCd, ica_srchReqDt]);
  if (!ret) return false;
  if (!ed_srchAcctCd.options) ed_srchAcctCd.options = {};
  if (ed_srchAcctCd.getValue() != ed_srchAcctCd.options.hidVal) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_038, ["계정코드"]));
    ed_srchAcctCd.focus();
    return;
  }
  await $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_master.getModifiedIndex().length == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, ["자료"]));
  } else {
    if (cbx_applyAll.getValue() == 1) {
      let ret = await $c.gus.cfValidate($p, [ica_reqDt, ed_summary]);
      if (!ret) return false;
    } else {
      let ret = await $c.gus.cfValidate($p, [ica_srchReqDt]);
      if (!ret) return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      scwin.f_setReqDtSummary(); //신청일자,적요 추가
      await $c.sbm.execute($p, sbm_master);
    }
  }
};

//-------------------------------------------------------------------------
// 행 추가
//-------------------------------------------------------------------------
scwin.f_Add = async function () {
  let prevRow = ds_master.getRowPosition();
  if (prevRow < 0) {
    return;
  }
  let newRow = ds_master.insertRow(prevRow + 1);
  ds_master.setCellData(newRow, "budgetYm", ds_master.getCellData(prevRow, "budgetYm"));
  ds_master.setCellData(newRow, "acctDeptCd", ds_master.getCellData(prevRow, "acctDeptCd"));
  ds_master.setCellData(newRow, "acctDeptNm", ds_master.getCellData(prevRow, "acctDeptNm"));
  ds_master.setCellData(newRow, "acctCd", ds_master.getCellData(prevRow, "acctCd"));
  ds_master.setCellData(newRow, "assgnAmt", 0);
  ds_master.setCellData(newRow, "actAmt", 0);
  ds_master.setCellData(newRow, "addBudgetAmt", 0);
  ds_master.setCellData(newRow, "addBudgetSeq", 0);
  gr_detail.setFocusedCell(newRow, "acctDeptCd");
};

//-------------------------------------------------------------------------
// 행 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = function () {
  let rowIndex = gr_detail.getFocusedRowIndex();
  let rowStatus = ds_master.getRowStatus(rowIndex);
  if (rowStatus == "C") {
    ds_master.removeRow(rowIndex);
  } else {
    ds_master.deleteRow(rowIndex);
    gr_detail.setFocusedCell(rowIndex, 0);
  }
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_PopUp = async function (paramArray, pWinCloseTF) {
  let code = $c.gus.cfIsNull($p, paramArray.pCode) ? "" : paramArray.pCode;
  let name = $c.gus.cfIsNull($p, paramArray.pName) ? "" : paramArray.pName;
  await udc_budgetCtrlAcctCdInfo.cfCommonPopUp(scwin.udc_budgetCtrlAcctCdInfo_callBackFunc, code, name, pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
};
scwin.udc_budgetCtrlAcctCdInfo_callBackFunc = function (rtnList) {
  // SET	
  if (!ed_srchAcctCd.options) {
    ed_srchAcctCd.options = {};
  }
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      $c.gus.cfSetHiddenValue($p, ed_srchAcctCd, "");
      $c.gus.cfSetHiddenValue($p, ed_srchAcctNm, "");
      return;
    }
    ed_srchAcctCd.setValue(rtnList[0]); // 코드
    ed_srchAcctNm.setValue(rtnList[1]); // 회사명
    ed_srchAcctCd.options.hidVal = rtnList[0];
  } else {
    ed_srchAcctCd.options.hidVal = "";
    ed_srchAcctCd.setValue("");
    ed_srchAcctNm.setValue("");
  }
  if (rtnList != null && rtnList[0] != "N/A") {
    dma_search.set("costClsCd", scwin.f_GetCostCls(rtnList[2]));
  }
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function (inObj) {
  let inValue = $c.gus.cfGetValue($p, inObj);
  if (!inObj.options) inObj.options = {};
  let hidValue = inObj.options.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.options.hidVal = "";
    for (let i = 1; i < arguments.length; i++) {
      $c.gus.cfSetValue($p, arguments[i], "");
    }
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};

//-------------------------------------------------------------------------
// 팝업 이벤트에 따라 팝업창의 자동닫기 여부를 반환
//-------------------------------------------------------------------------
scwin.f_EventCheck = function () {
  if (window.event != null && window.event.srcElement.tagName.toUpperCase() == "IMG") {
    return 'F';
  } else {
    return 'T';
  }
};

//-------------------------------------------------------------------------
// 예산통제계정코드 팝업
//-------------------------------------------------------------------------
scwin.f_acctPopUp = async function (pWinCloseTF) {
  let ret = await $c.gus.cfValidate($p, [ica_srchBudgetYm]);
  if (!ret) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_003, ["예산년월"]));
    return;
  }
  let codeObj = ed_srchAcctCd;
  let nameObj = ed_srchAcctNm;
  let paramArray = {};
  paramArray.pSelectID = "retrieveBudgetCtrlAcctCdInfo";
  paramArray.pCode = $c.gus.cfGetValue($p, codeObj);
  //paramArray.pName = cfGetValue(nameObj);
  paramArray.pW = "410";
  paramArray.pAllSearchTF = 'T';
  paramArray.pWhere = ica_srchBudgetYm.getValue().substring(0, 4) + "," + ed_coCd.getValue();
  scwin.f_PopUp(paramArray, pWinCloseTF);
};

//-------------------------------------------------------------------------
// 원가, 판관비 구분을 반환
//-------------------------------------------------------------------------
scwin.f_GetCostCls = function (acctClsCd) {
  switch (acctClsCd) {
    case scwin.ACCT_PREFIX_PCOST:
      return scwin.COST_CLS_PCOST;
    //판관비
    case scwin.ACCT_PREFIX_SALE_MGNT:
      return scwin.COST_CLS_SALE_MGNT;
    //원가
    default:
      return '';
  }
};

//-------------------------------------------------------------------------
// 디테일 데이터셋의 신청일자와 적요를 설정
//-------------------------------------------------------------------------
scwin.f_setReqDtSummary = function () {
  let reqDt, summary;
  if (cbx_applyAll.getValue()) {
    reqDt = ica_reqDt.getValue() == "" ? ica_srchReqDt.getValue() : ica_reqDt.getValue();
    summary = ed_summary.getValue();
  } else {
    reqDt = ica_srchReqDt.getValue();
    summary = "";
  }
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    //insert 또는 update 인 경우만
    let status = ds_master.getRowStatus(i);
    if (status == "C" || status == "U") {
      ds_master.setCellData(i, "reqDt", reqDt);
      ds_master.setCellData(i, "summary", summary);
    }
  }
};

//-------------------------------------------------------------------------
// 신청일자와 적요를 활성화/비활성화한다.
//-------------------------------------------------------------------------
scwin.f_applyAllOnOff = function (on) {
  if (on) {
    $c.gus.cfEnableObjects($p, [ica_reqDt, ed_summary, cbx_applyAll]);
  } else {
    $c.gus.cfDisableObjects($p, [ica_reqDt, ed_summary, cbx_applyAll]);
  }
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = async function () {
  let totCnt = ds_master.getRowCount();
  let sheetTitle = "계정별추가예산등록내역";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle + ".xlsx",
        sheetName: sheetTitle,
        columnMove: true,
        columnMoveWithFooter: true
      };
      await $c.data.downloadGridViewExcel($p, gr_detail, options);
    }
  } else {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_master_submitdone = async function (e) {
  await $c.win.alert($p, MSG_CM_INF_001);
  ds_master.reform();
  scwin.f_Retrieve(true);
};
scwin.sbm_search_submitdone = async function (e) {
  let rowCnt = ds_master.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      await $c.win.alert($p, MSG_CM_WRN_002);
    }
  } else {
    ica_reqDt.setValue(ica_srchReqDt.getValue());
    scwin.f_applyAllOnOff(true);
    gr_detail.focus();
  }
};
scwin.udc_budgetCtrlAcctCdInfo_onblurCodeEvent = function (e) {
  if (scwin.f_IsPopUp(ed_srchAcctCd, ed_srchAcctNm)) scwin.f_acctPopUp('T');
};
scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent = function (e) {
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  } else {
    ed_coNm.setValue("");
  }
};
scwin.udc_dongbuGroupCompanyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_budgetCtrlAcctCdInfo_onclickEvent = function (e) {
  scwin.f_acctPopUp('F');
};
scwin.udc_budgetCtrlAcctCdInfo_onviewchangeCodeEvent = function (info) {
  if (info.newValue == "") {
    ed_srchAcctCd.options.hidVal = "";
    ed_srchAcctCd.setValue("");
    ed_srchAcctNm.setValue("");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl_search',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:75px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:75px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 12%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:95px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:75px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 12%;'}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'회사코드',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col8',codeId:'ed_coCd',objTypeCode:'data',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',maxlengthCode:'3',UpperFlagCode:'1',nameId:'ed_coNm',id:'udc_dongbuGroupCompanyInfo',btnId:'btn_company',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent',objTypeName:'data','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent',code:'coCd',refDataCollection:'dma_search',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'예산년월',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'form-control cal',id:'ica_srchBudgetYm',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM',validateOnInput:'true',placeholder:' ',editType:'focus',ref:'data:dma_search.budgetYm',title:'예산년월'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'예산통제계정 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col8',id:'udc_budgetCtrlAcctCdInfo',codeId:'ed_srchAcctCd',objTypeCode:'data',mandatoryCode:'true',allowCharCode:'0-9',maxlengthCode:'7',editTypeCode:'focus',nameId:'ed_srchAcctNm',mandatoryName:'true',objTypeName:'data',maxlengthName:'30',selectID:'retrieveBudgetCtrlAcctCdInfo','ev:onblurCodeEvent':'scwin.udc_budgetCtrlAcctCdInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_budgetCtrlAcctCdInfo_onclickEvent',code:'acctCd',refDataCollection:'dma_search',name:'acctNm',validTitle:'예산통제계정','ev:onviewchangeCodeEvent':'scwin.udc_budgetCtrlAcctCdInfo_onviewchangeCodeEvent',skipOnBlurCodeValueEmpty:'Y'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'신청일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ica_srchReqDt',style:'',mandatory:'true',objType:'data',displayFormat:'yyyy/MM/dd',validateOnInput:'true',placeholder:' ',editType:'focus',ref:'data:dma_search.reqDt',title:'신청일자'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_search',type:'button',class:'btn sch',escape:'false',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'계정별추가예산',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'신청일자',class:'req'}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_reqDt',class:'form-control cal',calendarValueType:'yearMonthDate',objType:'data',mandatory:'true',displayFormat:'yyyy/MM/dd',validateOnInput:'true',editType:'select',placeholder:' '}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적요',class:''}},{T:1,N:'xf:input',A:{style:'',id:'ed_summary',placeholder:'',class:'form-control w300',objType:'data',maxlength:'60',maxByteLength:'60'}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',disabled:'',style:'',id:'cbx_applyAll',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',value:'0',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄적용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownUserAuth:'X',id:'udc_topGrd',gridID:'gr_detail',gridDownFn:'scwin.f_runExcel',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_master',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_detail',visibleRowNum:'14',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',editModeEvent:'onclick',columnMove:'true',dataDragSelectAutoScroll:'true',rowStatusVisible:'true',columnMoveWithFooter:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column12',blockSelect:'false',displayMode:'label',value:'부서코드'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'220',inputType:'text',id:'column11',blockSelect:'false',displayMode:'label',value:'부서명'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',id:'column10',blockSelect:'false',displayMode:'label',value:'순번'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'160',inputType:'text',id:'column9',blockSelect:'false',displayMode:'label',value:'배정금액'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column21',value:'실행금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column19',value:'추가예산',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'acctDeptCd',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'220',inputType:'text',id:'acctDeptNm',blockSelect:'false',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'90',inputType:'text',id:'addBudgetSeq',blockSelect:'false',displayMode:'label',readOnly:'true',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'160',inputType:'text',id:'assgnAmt',blockSelect:'false',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'actAmt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'addBudgetAmt',displayMode:'label',textAlign:'right',allowChar:'0-9',validateOnInput:'true',dataType:'number',displayFormat:'#,##0',mandatory:'true',excelCellType:'number',maxLength:'13'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',expression:'sum("assgnAmt")',allowChar:'0-9',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'160',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',expression:'sum("actAmt")',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'160',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',expression:'sum("addBudgetAmt")',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'(단위 : 원)',class:''}},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',EngYn:'N',btnRowDelYn:'Y',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',rowAddFunction:'scwin.f_Add',rowDelFunction:'scwin.f_Delete',gridID:'gr_detail',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',label:'저장',type:'button',class:'btn',userAuth:'U',objType:'bSave','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]})