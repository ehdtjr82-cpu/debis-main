/*amd /ui/ac/co/budgetmgnt/co_303_01_02p.xml 27654 81ae655e1594feb4fb09d28f3c6b4de12a7291bdf61e4614161e3a0a76a3a998 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'budgetYm',name:'예산시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'budgetYmTo',name:'예산종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntlUnitClsCd',name:'통제기준',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'budgetYm',name:'예산년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAcctCd',name:'실적;계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAcctNm',name:'실적계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAcctDeptNm',name:'실적부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntlUnitClsCd',name:'통제기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetRsltsAmt',name:'실적금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리;일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.co.budgetmgnt.RetrieveBudgetResultsDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.isSubCompany = false;
scwin.txtCoClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  const codeOptions = [{
    grpCd: "CO001",
    compID: "acb_srchCntlUnitClsCd, gr_master:cntlUnitClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  for (let i = 0; i < dlt_commonCodeCO001.getRowCount(); i++) {
    if (dlt_commonCodeCO001.getCellData(i, "cdNm") == "") {
      dlt_commonCodeCO001.removeRow(i);
    }
  }
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// UDC 로딩 완료 후
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  if (!$c.util.isEmpty($p, scwin.params["budgetYm"])) {
    ica_srchBudgetYm.setValue(scwin.params["budgetYm"]);
  }
  if (!$c.util.isEmpty($p, scwin.params["budgetYmTo"])) {
    ica_srchBudgetYmTo.setValue(scwin.params["budgetYmTo"]);
  }
  if (!$c.util.isEmpty($p, scwin.params["acctDeptCd"])) {
    ed_srchAcctDeptCd.setValue(scwin.params["acctDeptCd"]);
  }
  if (!ed_srchAcctDeptCd.options) ed_srchAcctDeptCd.options = {};
  if (!$c.util.isEmpty($p, scwin.params["acctDeptCd"])) {
    ed_srchAcctDeptCd.options.hidVal = scwin.params["acctDeptCd"];
  }
  if (!$c.util.isEmpty($p, scwin.params["acctDeptNm"])) {
    ed_srchAcctDeptNm.setValue(scwin.params["acctDeptNm"]);
  }
  if (!$c.util.isEmpty($p, scwin.params["acctCd"])) {
    ed_srchAcctCd.setValue(scwin.params["acctCd"]);
  }
  if (!ed_srchAcctCd.options) ed_srchAcctCd.options = {};
  if (!$c.util.isEmpty($p, scwin.params["acctCd"])) {
    ed_srchAcctCd.options.hidVal = scwin.params["acctCd"];
  }
  if (!$c.util.isEmpty($p, scwin.params["acctNm"])) {
    ed_srchAcctNm.setValue(scwin.params["acctNm"]);
  }
  if (!$c.util.isEmpty($p, scwin.params["cntlUnitClsCd"])) {
    acb_srchCntlUnitClsCd.setValue(scwin.params["cntlUnitClsCd"]);
  }
  $c.gus.cfDisableKey($p);
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ica_srchBudgetYm, ica_srchBudgetYmTo]);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  $c.gus.cfInitHidVal($p, tbl_search);
  ica_srchBudgetYm.setValue($c.date.getServerDateTime($p, "yyyyMM"));
  ica_srchBudgetYmTo.setValue($c.date.getServerDateTime($p, "yyyyMM"));
  ica_srchBudgetYm.focus();
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
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  await udc_DongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_DongbuGroupCompanyInfo_callBackFunc, ed_coCd.getValue(), "", pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_DongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  // SET	
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명
    scwin.txtCoClsCd = rtnList[1]; // 회사구분
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    scwin.txtCoClsCd = "";
  }
  if (ed_coCd.getValue() > ACConstants.CO_CLS_CD_DONGBU) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};

//-------------------------------------------------------------------------
// 조회 : 데이터를 조회한다.
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_srchBudgetYm, ica_srchBudgetYmTo, ed_srchAcctDeptCd, ed_srchAcctCd]);
  if (!ret) {
    return false;
  }

  //반영할 기간의 시작과 끝을 비교
  if (ica_srchBudgetYm.getValue() > ica_srchBudgetYmTo.getValue()) {
    await $c.win.alert($p, "조회기간의 범위가 잘못되었습니다.");
    ica_srchBudgetYm.focus();
    return;
  }

  //반영할 기간의 시작과 끝을 비교
  if (ica_srchBudgetYm.getValue().substr(0, 4) != ica_srchBudgetYmTo.getValue().substr(0, 4)) {
    await $c.win.alert($p, "조회기간의 년도가 틀립니다.");
    ica_srchBudgetYm.focus();
    return;
  }
  if (!ed_srchAcctDeptCd.options) ed_srchAcctDeptCd.options = {};
  if (ed_srchAcctDeptCd.getValue() != ed_srchAcctDeptCd.options.hidVal) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_038, ["부서코드"]));
    ed_srchAcctDeptCd.focus();
    return false;
  }
  if (!ed_srchAcctCd.options) ed_srchAcctCd.options = {};
  if (ed_srchAcctCd.getValue() != ed_srchAcctCd.options.hidVal) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_038, ["계정코드"]));
    ed_srchAcctCd.focus();
    return false;
  }
  await $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_PopUp = async function (paramArray, pWinCloseTF) {
  let code = $c.gus.cfIsNull($p, paramArray.pCode) ? "" : paramArray.pCode;
  let name = $c.gus.cfIsNull($p, paramArray.pName) ? "" : paramArray.pName;
  if (paramArray.pSelectID == "retrieveBudgetCtrlDeptInfo") {
    await udc_budgetCtrlDeptInfo.cfCommonPopUp(scwin.udc_budgetCtrlDeptInfo_callBackFunc, code.getValue(), "", pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
  }
  if (paramArray.pSelectID == "retrieveBudgetCtrlAcctCdInfo") {
    await udc_budgetCtrlAcctCdInfo.cfCommonPopUp(scwin.udc_budgetCtrlAcctCdInfo_callBackFunc, code.getValue(), "", pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
  }
};
scwin.udc_budgetCtrlDeptInfo_callBackFunc = function (rtnList) {
  // SET	
  if (!ed_srchAcctDeptCd.options) {
    ed_srchAcctDeptCd.options = {};
  }
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchAcctDeptCd.setValue(rtnList[0]); // 코드
    ed_srchAcctDeptNm.setValue(rtnList[1]); // 회사명
    ed_srchAcctDeptCd.options.hidVal = rtnList[0];
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
    ed_srchAcctDeptCd.options.hidVal = "";
  }
};
scwin.udc_budgetCtrlAcctCdInfo_callBackFunc = function (rtnList) {
  // SET	
  if (!ed_srchAcctCd.options) {
    ed_srchAcctCd.options = {};
  }
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchAcctCd.setValue(rtnList[0]); // 코드
    ed_srchAcctNm.setValue(rtnList[1]); // 회사명
    ed_srchAcctCd.options.hidVal = rtnList[0];
  } else {
    ed_srchAcctCd.setValue("");
    ed_srchAcctNm.setValue("");
    ed_srchAcctCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 부서코드팝업
//-------------------------------------------------------------------------
scwin.f_deptPopUp = function (pWinCloseTF) {
  let paramArray = {};
  paramArray.pSelectID = "retrieveBudgetCtrlDeptInfo";
  paramArray.pCode = ed_srchAcctDeptCd;
  paramArray.pName = ed_srchAcctDeptNm;
  paramArray.pWhere = "," + ica_srchBudgetYm.getValue().trim() + "," + ed_coCd.getValue() + ",0,,1";
  paramArray.pW = "410";
  paramArray.pAllSearchTF = "F";
  scwin.f_PopUp(paramArray, pWinCloseTF);
};

//-------------------------------------------------------------------------
// 계정코드팝업
//-------------------------------------------------------------------------
scwin.f_acctPopUp = function (pWinCloseTF) {
  let paramArray = {};
  paramArray.pSelectID = "retrieveBudgetCtrlAcctCdInfo";
  paramArray.pCode = ed_srchAcctCd;
  paramArray.pName = ed_srchAcctNm;
  paramArray.pWhere = ica_srchBudgetYm.getValue().substr(0, 4) + "," + ed_coCd.getValue();
  paramArray.pW = "410";
  scwin.f_PopUp(paramArray, pWinCloseTF);
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_Export = async function () {
  if (ds_master.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let sheetTitle = "예산실적내역상세 (" + ica_srchBudgetYm.getValue() + " ~ " + ica_srchBudgetYmTo.getValue() + ")";
  let fileName = '예산실적내역상세_' + ica_srchBudgetYm.getValue() + "_" + ica_srchBudgetYmTo.getValue();
  let colCount = gr_master.getTotalCol();

  // gr_master.SetExcelTitle(0, "");
  // gr_master.SetExcelTitle(1, "value:"+sheetTitle+";"  // 표시할 타이틀
  //                                 + "font-face:'돋움체';" // 폰트
  //                                 + "font-size:18pt;"    // 폰트 크기
  //                                 + "font-color:black;"  // 폰트 색깔
  //                                 + "bgcolor:#ffffff;"   // 배경 색깔
  //                                 + "align:center;"      // 정렬
  //                                 + "line-color:white;"  // 타이틀 부분 테두리선 색깔
  //                                 + "line-width:0pt;"    // 타이틀 테두리선 굵기
  //                                 + "skiprow:1;");       // 타이틀 다음 떼는 로우 수

  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: colCount,
    text: sheetTitle,
    textAlign: "center",
    fontSize: 18,
    drawBorder: false,
    color: "black",
    backgroundColor: "white"
  }];
  const options = {
    fileName: fileName + ".xlsx",
    sheetName: sheetTitle,
    startRowIndex: 2,
    startColumnIndex: 0,
    type: 1
  };
  await $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};

//-------------------------------------------							
// 그리드 높이 늘리고 줄이기							
//-------------------------------------------		
scwin.f_grdHeiht = function (gridNm, size) {
  let strHeight = gridNm.style.height;
  let intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    gridNm.style.height = intHeight + "px";
  }
};
scwin.sbm_search_submitdone = async function (e) {
  for (i = 0; i < ds_master.getRowCount(); i++) {
    gr_master.setCellStyle(i, "slipNo", "text-decoration", "underline");
    gr_master.setCellStyle(i, "slipNo", "cursor", "pointer");
  }
  let rowCnt = ds_master.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      await $c.win.alert($p, MSG_CM_WRN_002);
    }
  } else {
    gr_master.focus();
  }
};
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, colId) {
  if (colId == "slipNo") {
    if (!$c.gus.cfIsNull($p, ds_master.getCellData(rowIndex, colId))) {
      $c.gus.cfShowSlipInfo($p, ds_master.getCellData(rowIndex, colId));
    }
  }
};

// 부서코드 입력 시
scwin.udc_budgetCtrlDeptInfo_onblurCodeEvent = function (e) {
  if (ed_srchAcctDeptCd.getValue() != "") {
    scwin.f_deptPopUp('T');
  } else {
    ed_srchAcctDeptNm.setValue("");
  }
};

// 계정코드 입력 시
scwin.udc_budgetCtrlAcctCdInfo_onblurCodeEvent = function (e) {
  if (ed_srchAcctCd.getValue() != "") {
    scwin.f_acctPopUp('T');
  } else {
    ed_srchAcctNm.setValue("");
  }
};

// 회사코드 입력 시
scwin.udc_DongbuGroupCompanyInfo_onblurCodeEvent = function (e) {
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('F');
  } else {
    ed_coNm.setValue("");
  }
};
scwin.udc_DongbuGroupCompanyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_budgetCtrlDeptInfo_onclickEvent = function (e) {
  scwin.f_deptPopUp('F');
};
scwin.udc_budgetCtrlAcctCdInfo_onclickEvent = function (e) {
  scwin.f_acctPopUp('F');
};
scwin.btn_reset_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'',src:'/cm/udc/fromToYearMon.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:85px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:85px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 12%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_coCd',objTypeCode:'data',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',maxlengthCode:'3',UpperFlagCode:'1',nameId:'ed_coNm',objTypeName:'data',btnId:'btn_company',id:'udc_DongbuGroupCompanyInfo',selectID:'retrieveDongbuGroupCompanyInfo',refDataCollection:'dma_search',code:'coCd','ev:onblurCodeEvent':'scwin.udc_DongbuGroupCompanyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_DongbuGroupCompanyInfo_onclickEvent',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예산기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToYearMon',A:{refStDt:'budgetYm',refDataMap:'dma_search',style:'width:%; height:px; ',id:'udc_srchBudget',refEdDt:'budgetYmTo',edFromId:'ica_srchBudgetYm',edToId:'ica_srchBudgetYmTo',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',objTypeFrom:'data',objTypeTo:'data',titleFrom:'예산년월',titleTo:'예산년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예산통제기준',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control',editType:'select',id:'acb_srchCntlUnitClsCd',search:'start',style:'width:100px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.cntlUnitClsCd',displayMode:'value delim label',title:'예산통제기준',visibleRowNum:'20',sortOption:'value'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예산통제부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_srchAcctDeptCd',objTypeCode:'data',mandatoryCode:'true',validExpCode:'예산통제부서:yes:length=5',allowCharCode:'0-9',maxlengthCode:'5',editTypeCode:'focus',nameId:'ed_srchAcctDeptNm',maxlengthName:'30',objTypeName:'data',mandatoryName:'true',id:'udc_budgetCtrlDeptInfo',selectID:'retrieveBudgetCtrlDeptInfo','ev:onblurCodeEvent':'scwin.udc_budgetCtrlDeptInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_budgetCtrlDeptInfo_onclickEvent',code:'acctDeptCd',refDataCollection:'dma_search',validTitle:'예산통제부서'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예산통제계정',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_srchAcctCd',objTypeCode:'data',mandatoryCode:'true',validExpCode:'예산통제계정:yes:length=7',allowCharCode:'0-9',maxlengthCode:'7',editTypeCode:'focus',nameId:'ed_srchAcctNm',maxlengthName:'30',objTypeName:'data',mandatoryName:'true',id:'udc_budgetCtrlAcctCdInfo',selectID:'retrieveBudgetCtrlAcctCdInfo','ev:onblurCodeEvent':'scwin.udc_budgetCtrlAcctCdInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_budgetCtrlAcctCdInfo_onclickEvent',code:'acctCd',refDataCollection:'dma_search',validTitle:'예산통제계정'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'예산실적 상세내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownUserAuth:'X',id:'udc_topGrd',gridID:'gr_master',gridDownFn:'scwin.f_Export'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true',columnMove:'true',dataDragSelectAutoScroll:'true','ev:oncellclick':'scwin.gr_master_oncellclick',columnMoveWithFooter:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'예산년월'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'120',value:'실적계정코드'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'200',value:'실적계정명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'실적부서'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'통제기준',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'실적금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'적요',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'회계처리일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'전표번호',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'budgetYm',inputType:'text',removeBorderStyle:'false',width:'100',allowChar:'0-9',maxLength:'6',displayFormat:'####/##',dataType:'text',calendarValueType:'yearMonth'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'rsltsAcctCd',inputType:'text',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'rsltsAcctNm',inputType:'text',removeBorderStyle:'false',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'rsltsAcctDeptNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntlUnitClsCd',inputType:'select',width:'100'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'budgetRsltsAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',allowChar:'0-9',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',width:'120',allowChar:'0-9',maxLength:'8',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100',readOnly:'false',class:'cell_class'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',dataType:'number',allowChar:'0-9',displayFormat:'#,##0',expression:'sum("budgetRsltsAmt")',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(단위 : 원)',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})