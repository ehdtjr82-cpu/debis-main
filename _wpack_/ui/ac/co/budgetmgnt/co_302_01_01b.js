/*amd /ui/ac/co/budgetmgnt/co_302_01_01b.xml 34587 4103a3850284a546825e1a40704690d607d42b6835cb284d2021652d4547af62 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_master'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'budgetYm',name:'예산년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntlUnitClsCd',name:'통제기준',dataType:'text'}},{T:1,N:'w2:key',A:{id:'costClsCd',name:'비용구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'비용구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_detail',repeatNode:'map',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_detail_oncelldatachange','ev:onbeforerowpositionchange':'scwin.ds_detail_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'budgetYm',name:'예산년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addBudgetSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'신청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addBudgetAmt',name:'추가예산금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'summary',name:'신청사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_detail',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'budgetYm',name:'예산년월'}},{T:1,N:'w2:key',A:{dataType:'text',id:'acctDeptCd',name:'부서코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'acctCd',name:'계정코드'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_master_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntlUnitClsCd',name:'통제기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnAmt',name:'배정금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'actAmt',name:'실행금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'addBudgetAmt',name:'추가예산월계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'budgetYm',name:'예산년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addBudgetSeq',name:'순번',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.co.budgetmgnt.SaveAdditionBudgetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_detail","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.budgetmgnt.RetrieveAdditionBudgetDepartmentEachCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_master',target:'data:json,{"id":"ds_master","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_detail',action:'/ac.co.budgetmgnt.RetrieveAdditionBudgetDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_detail',target:'data:json,{"id":"ds_detail","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_detail_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.isInPost = false; //TR 컴포넌트가 데이터를 Post 중인지 여부
scwin.masterRow = 0; //마스터 데이터셋의 현재 RowPosition
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.isSubCompany = false;
scwin.txtCoClsCd = "";
scwin.isStart = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "CO001",
    compID: "acb_srchCntlUnitClsCd, gr_master:cntlUnitClsCd"
  }, {
    grpCd: "FI042",
    compID: "lc_costClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  for (let i = 0; i < dlt_commonCodeCO001.getRowCount(); i++) {
    if (dlt_commonCodeCO001.getCellData(i, "cdNm") == "") {
      dlt_commonCodeCO001.removeRow(i);
    }
  }
};

//-------------------------------------------------------------------------
// UDC 로딩 완료 후
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableKey($p);
  scwin.f_FieldClear();
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ica_srchBudgetYm, lc_costClsCd]);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  $c.gus.cfInitHidVal($p, tbl_search);
  lc_costClsCd.setSelectedIndex(-1);
  ica_srchBudgetYm.setValue($c.date.getServerDateTime($p, "yyyyMM"));
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
  scwin.isStart = true;
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
// 조회 : 데이터를 조회한다. - 마스터 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ds_detail.getRowCount() > 0 && ds_detail.getModifiedIndex().length > 0) {
    if ((await $c.win.confirm($p, MSG_CM_CRM_005)) == false) {
      return;
    } else {}
  }
  let ret = await $c.gus.cfValidate($p, [ica_srchBudgetYm, ed_srchAcctDeptCd]);
  if (!ret) return false;
  if (!ed_srchAcctDeptCd.options) ed_srchAcctDeptCd.options = {};
  if (ed_srchAcctDeptCd.getValue() != ed_srchAcctDeptCd.options.hidVal) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_038, ["부서코드"]));
    ed_srchAcctDeptCd.focus();
    return;
  }
  ds_detail.reform();
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_detail.getModifiedIndex().length == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, ["자료"]));
  } else {
    let ret = await $c.gus.cfValidate($p, [gr_detail]);
    if (!ret) return false;
    if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
      scwin.isInPost = true;
      $c.sbm.execute($p, sbm_master);
      scwin.isInPost = false;
    }
  }
};

//-------------------------------------------------------------------------
// 행 추가
//-------------------------------------------------------------------------
scwin.f_Add = async function () {
  if (ds_master.getRowPosition() < 0) {
    await $c.win.alert($p, "계정이 선택되지 않았습니다.");
    return;
  }
  let detailRow = ds_detail.insertRow();
  ds_detail.setCellData(detailRow, "acctDeptCd", ds_master.getCellData(scwin.masterRow, "acctDeptCd"));
  ds_detail.setCellData(detailRow, "budgetYm", ds_master.getCellData(scwin.masterRow, "budgetYm"));
  ds_detail.setCellData(detailRow, "assgnAmt", ds_master.getCellData(scwin.masterRow, "assgnAmt"));
  ds_detail.setCellData(detailRow, "actAmt", ds_master.getCellData(scwin.masterRow, "actAmt"));
  ds_detail.setCellData(detailRow, "acctCd", ds_master.getCellData(scwin.masterRow, "acctCd"));
  ds_detail.setCellData(detailRow, "acctNm", ds_master.getCellData(scwin.masterRow, "acctNm"));
  ds_detail.setCellData(detailRow, "reqDt", $c.date.getServerDateTime($p, "yyyyMMdd"));
  ds_detail.setCellData(detailRow, "addBudgetSeq", 0);
  ds_detail.setCellData(detailRow, "addBudgetAmt", 0);
  let rowCnt = ds_detail.getRowCount();
  totalRows2.setValue(rowCnt);
  gr_detail.setFocusedCell(detailRow, 0);
};

//-------------------------------------------------------------------------
// 행 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = function () {
  let rowIndex = gr_detail.getFocusedRowIndex();
  let rowStatus = ds_detail.getRowStatus(rowIndex);
  if (rowStatus == "C") {
    ds_detail.removeRow(rowIndex);
  } else {
    ds_detail.deleteRow(rowIndex);
    gr_detail.setFocusedCell(rowIndex, 0);
  }
  let rowCnt = ds_detail.getRowCount();
  totalRows2.setValue(rowCnt);
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  $c.data.undoRow($p, ds_detail, "Y");
  scwin.f_SetMonthSum();
  let rowCnt = ds_detail.getRowCount();
  totalRows2.setValue(rowCnt);
};

//-------------------------------------------------------------------------
// 추가예산 월계를 설정
//-------------------------------------------------------------------------
scwin.f_SetMonthSum = function () {
  let budgetYm = ds_master.getCellData(scwin.masterRow, "budgetYm");
  let monthSum = 0;
  for (let i = 0; i < ds_detail.getRowCount(); i++) {
    if (ds_detail.getCellData(i, "budgetYm") == budgetYm) {
      monthSum += Number(ds_detail.getCellData(i, "addBudgetAmt"));
    }
  }
  ds_master.setCellData(scwin.masterRow, "addBudgetAmt", monthSum);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_PopUp = async function (paramArray, pWinCloseTF) {
  let code = $c.gus.cfIsNull($p, paramArray.pCode) ? "" : paramArray.pCode;
  let name = $c.gus.cfIsNull($p, paramArray.pName) ? "" : paramArray.pName;
  await udc_budgetCtrlDeptInfo.cfCommonPopUp(scwin.udc_budgetCtrlDeptInfo_callBackFunc, code, name, pWinCloseTF, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
};
scwin.udc_budgetCtrlDeptInfo_callBackFunc = function (rtnList) {
  // SET	
  if (!ed_srchAcctDeptCd.options) {
    ed_srchAcctDeptCd.options = {};
  }
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      $c.gus.cfSetHiddenValue($p, ed_srchAcctDeptCd, "");
      $c.gus.cfSetHiddenValue($p, ed_srchAcctDeptNm, "");
      return;
    }
    ed_srchAcctDeptCd.setValue(rtnList[0]); // 코드
    ed_srchAcctDeptNm.setValue(rtnList[1]); // 회사명
    ed_srchAcctDeptCd.options.hidVal = rtnList[0];
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
    ed_srchAcctDeptCd.options.hidVal = "";
  }
  if (rtnList != null && rtnList[0] != "N/A") {
    lc_costClsCd.setValue(rtnList[2]);
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
  if (window.event != null && window._wTagName.toUpperCase() == "IMG") {
    return 'F';
  } else {
    return 'T';
  }
};

//-------------------------------------------------------------------------
// 부서코드팝업
//-------------------------------------------------------------------------
scwin.f_deptPopUp = function (pWinCloseTF) {
  let codeObj = ed_srchAcctDeptCd;
  let nameObj = ed_srchAcctDeptNm;
  let paramArray = {};
  paramArray.pSelectID = "retrieveBudgetCtrlDeptInfo";
  paramArray.pCode = $c.gus.cfGetValue($p, codeObj);
  //paramArray.pName = cfGetValue(nameObj);
  paramArray.pW = "410";
  paramArray.pAllSearchTF = 'T';
  paramArray.pWhere = "," + ica_srchBudgetYm.getValue().trim() + "," + ed_coCd.getValue() + ",0,,1";
  scwin.f_PopUp(paramArray, pWinCloseTF);
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = async function () {
  let totCnt = ds_master.getRowCount();
  let sheetTitle = "부서별추가예산등록내역";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle + ".xlsx",
        sheetName: sheetTitle,
        columnMove: true,
        columnMoveWithFooter: true
      };
      await $c.data.downloadGridViewExcel($p, gr_master, options);
    }
  } else {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_master_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, MSG_CM_INF_001);
    ds_master.reform();
    ds_detail.reform();
    scwin.f_Retrieve();
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_master.getRowCount();
  totalRows1.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      await $c.win.alert($p, MSG_CM_WRN_002);
    }
  } else {
    //$c.gus.cfGoPrevPosition(gr_master, scwin.masterRow);
    gr_master.focus();
  }
};
scwin.ds_master_onrowpositionchange = async function (info) {
  let row = info.newRowIndex;
  if (row < 0) return;
  if (scwin.isInPost == true) return true;
  if (ds_detail.getModifiedIndex().length > 0) {
    let ret = await $c.win.confirm($p, MSG_CM_CRM_005);
    if (!ret) {
      ds_master.setEventPause("", true);
      gr_master.setFocusedCell(info.oldRowIndex, 0);
      ds_master.setEventPause("", false);
      return;
    }
  }
  scwin.masterRow = row;
  const params = {
    budgetYm: ds_master.getCellData(row, "budgetYm"),
    acctDeptCd: ds_master.getCellData(row, "acctDeptCd"),
    acctCd: ds_master.getCellData(row, "acctCd")
  };

  //데이터셋에 정보설정
  dma_detail.setJSON(params);
  $c.sbm.execute($p, sbm_detail);
};
scwin.sbm_detail_submitdone = function (e) {
  let rowCnt = ds_detail.getRowCount();
  totalRows2.setValue(rowCnt);
  if (rowCnt > 0) gr_detail.focus();
};
scwin.ds_detail_onbeforerowpositionchange = function (info) {
  //return cfValidate([gr_detail]);
  return true;
};
scwin.ds_detail_oncelldatachange = function (info) {
  if (info.colID != "addBudgetAmt") {
    return;
  }
  scwin.f_SetMonthSum();
};
scwin.gr_detail_oncellclick = function (rowIndex, columnIndex, colId) {
  if (colId == "budgetYm") {
    if (ds_detail.getRowStatus(rowIndex) == "C") {
      gr_detail.setColumnReadOnly("budgetYm", false);
    } else {
      gr_detail.setColumnReadOnly("budgetYm", true);
    }
  }
};
scwin.udc_budgetCtrlDeptInfo_onblurCodeEvent = function (e) {
  if (scwin.f_IsPopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm)) {
    scwin.f_deptPopUp("T");
  }
};
scwin.udc_budgetCtrlDeptInfo_onviewchangeCodeEvent = function (info) {
  if (info.newValue == "") {
    ed_srchAcctDeptCd.options.hidVal = "";
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
  }
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
scwin.udc_budgetCtrlDeptInfo_onclickEvent = function (e) {
  scwin.f_deptPopUp('F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:75px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 12%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:95px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 12%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:95px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'col8',popupID:'',style:'',objTypeCode:'data',mandatoryCode:'true',validExpCode:'회사코드:yes',codeId:'ed_coCd',allowCharCode:'0-9',maxlengthCode:'3',nameId:'ed_coNm',btnId:'btn_company',objTypeName:'data',UpperFlagCode:'1',id:'udc_DongbuGroupCompanyInfo',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent',code:'coCd',refDataCollection:'dma_master','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예산년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'form-control cal',id:'ica_srchBudgetYm',style:'',mandatory:'true',displayFormat:'yyyy/MM',placeholder:' ',objType:'data',editType:'focus',validExp:'예산년월:yes:date=yyyyMM',ref:'data:dma_master.budgetYm',title:'예산년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예산통제기준',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control',editType:'select',id:'acb_srchCntlUnitClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_master.cntlUnitClsCd',disabled:'false',title:'예산통제기준',visibleRowNum:'20'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예산통제부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'col8',popupID:'',style:'',codeId:'ed_srchAcctDeptCd',objTypeCode:'data',mandatoryCode:'true',validExpCode:'예산통제부서:yes:length=5',maxlengthCode:'5',nameId:'ed_srchAcctDeptNm',objTypeName:'data',maxlengthName:'30',id:'udc_budgetCtrlDeptInfo',editTypeCode:'focus',mandatoryName:'true',selectID:'retrieveBudgetCtrlDeptInfo','ev:onclickEvent':'scwin.udc_budgetCtrlDeptInfo_onclickEvent',refDataCollection:'dma_master',code:'acctDeptCd',validTitle:'예산통제부서','ev:onblurCodeEvent':'scwin.udc_budgetCtrlDeptInfo_onblurCodeEvent','ev:onviewchangeCodeEvent':'scwin.udc_budgetCtrlDeptInfo_onviewchangeCodeEvent',allowCharCode:'0-9'}},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_costClsCd',style:';display:none;',submenuSize:'fixed',objType:'data',userAttr2:'비용구분:no',ref:'data:dma_master.costClsCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부서별추가예산',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownUserAuth:'X',gridID:'gr_master',id:'udc_topGrd',gridDownFn:'scwin.f_runExcel',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',dataList:'data:ds_master',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_master',visibleRowNum:'6',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true',columnMove:'true',columnMoveWithFooter:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'계정코드',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'210',inputType:'text',id:'column11',value:'계정명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',value:'통제기준',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'130',inputType:'text',id:'column9',value:'배정금액',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column21',value:'실행금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column19',value:'추가예산월계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column17',value:'추가반영실행예산',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'acctCd',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'210',inputType:'text',id:'acctNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'select',id:'cntlUnitClsCd',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'130',inputType:'text',id:'assgnAmt',blockSelect:'false',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'text',id:'actAmt',displayMode:'label',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'text',id:'addBudgetAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'expression',id:'addResultAmt',displayMode:'label',expression:'Number(display("actAmt")) + Number(display("addBudgetAmt"))',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'합계',displayMode:'label',style:';text-align:;'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'expression',id:'column26',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum("assgnAmt")'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'expression',id:'column25',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum("actAmt")'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',id:'column24',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum("addBudgetAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'130',inputType:'expression',id:'column23',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'sum("addResultAmt")'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'(단위 : 원)',class:''}}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_detail',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_detail',visibleRowNum:'5',class:'wq_gvw',checkReadOnlyOnPasteEnable:'','ev:oncolumnindexchange':'scwin.gr_detail_oncolumnindexchange','ev:oncellclick':'scwin.gr_detail_oncellclick',validFeatures:'ignoreStatus=no',validExp:'budgetYm:예산년월:yes:date=yyyyMM,reqDt:신청일자:yes:date=yyyyMMdd,summary:신청사유:no:maxByteLength=60',rowStatusVisible:'true',columnMove:'true',columnMoveWithFooter:'true',rowStatusWidth:'20',gridName:'추가예산등록리스트'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'예산년월',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',value:'순번',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',value:'계정코드',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'185',inputType:'text',id:'column9',value:'계정명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'신청일자',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'추가예산금액',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column17',value:'신청사유',class:'col-type2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'budgetYm',blockSelect:'false',displayMode:'label',readOnly:'true',displayFormat:'####/##',allowChar:'0-9',maxLength:'6',validateOnInput:'true',editModeEvent:'onclick',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'addBudgetSeq',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'acctCd',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'185',inputType:'text',id:'acctNm',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'reqDt',displayMode:'label',calendarValueType:'yearMonthDate',allowChar:'0-9',maxLength:'8',validateOnInput:'true',dataType:'date',displayFormat:'yyyy/MM/dd',editModeEvent:'onclick',mandatory:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'text',id:'addBudgetAmt',displayMode:'label',allowChar:'0-9',validateOnInput:'true',editModeEvent:'onclick',displayFormat:'#,##0',dataType:'number',mandatory:'true',maxLength:'13',title:'추가예산금액'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'250',inputType:'text',id:'summary',displayMode:'label',editModeEvent:'onclick'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'185',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'expression',id:'column26',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum("addBudgetAmt")'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column25',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',btnDelYn:'N',EngYn:'N',btnRowDelYn:'Y',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddFunction:'scwin.f_Add',rowDelFunction:'scwin.f_Delete',gridID:'gr_detail',cancelFunction:'scwin.f_Cancel'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{userAuth:'U',style:'',id:'btn_save',label:'저장',type:'button',class:'btn',objType:'bSave','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]})