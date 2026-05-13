/*amd /ui/ac/co/budgetmgnt/co_100_07_01b.xml 23558 69c6b157838ff2ddb19bcde52c110f97af78e05a4723556aac37f5db8e501abd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'budgetYr',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntlUnitClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntlUnitClsCd',name:'통제단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetYr',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAcctCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctLv1',name:'name7',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.co.budgetmgnt.SaveBudgetControlAccountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.budgetmgnt.RetrieveBudgetControlAccountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.isSubCompany = false;
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.txtCoClsCd = "";
scwin.isSearch = false;
scwin.isStart = false;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
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
};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  $c.gus.cfTurnCreateFlag($p, true);
  scwin.f_FieldClear();
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ica_srchBudgetYr]);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  ica_srchBudgetYr.setValue($c.date.getServerDateTime($p, "yyyy"));
  ica_srchBudgetYr.focus();
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
    scwin.txtCoClsCd = rtnList[1]; // 회사구분
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
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
// 조회 : 데이터를 조회한다.
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ds_master.getRowCount() > 0 && ds_master.getModifiedIndex().length > 0) {
    if ((await $c.win.confirm($p, MSG_CM_CRM_005)) == false) return;
  }
  let ret = await $c.gus.cfValidate($p, [ica_srchBudgetYr]);
  if (ret) {
    $c.sbm.execute($p, sbm_retrieve);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_master.getModifiedIndex().length <= 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, ["자료"]));
  } else {
    let ret = await $c.gus.cfValidate($p, [gr_master]);
    if (!ret) {
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_master);
    }
  }
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_Add = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_srchBudgetYr]);
  if (!ret) {
    return false;
  }
  if (!scwin.isSearch) {
    return false;
  }
  let rowIndex = ds_master.getRowPosition();
  if (ds_master.getRowStatus(rowIndex) == "C") {
    return;
  } else {
    let insRow = ds_master.insertRow();
    ds_master.setCellData(insRow, "budgetYr", ica_srchBudgetYr.getValue());
    ds_master.setCellData(insRow, "coCd", ed_coCd.getValue());
    rowIndex = insRow;
  }
  gr_master.setFocusedCell(rowIndex, 0);
};

//-------------------------------------------------------------------------
// 행 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = function () {
  let rowIndex = gr_master.getFocusedRowIndex();
  let colIndex = gr_master.getFocusedColumnIndex();
  console.log(colIndex);
  let rowStatus = ds_master.getRowStatus(rowIndex);
  if (rowStatus == "C") {
    ds_master.removeRow(rowIndex);
  } else {
    ds_master.deleteRow(rowIndex);
    gr_master.setFocusedCell(rowIndex, colIndex);
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  $c.data.undoRow($p, ds_master, "Y");
};

//-------------------------------------------------------------------------
// 계정 체크
//-------------------------------------------------------------------------
scwin.f_CheckMgntAcctCd = async function (level, acctCd, upperAcctCd) {
  if (level != "4" && level != "5") {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_055, ["계정레벨"]));
    return false;
  }
  let colid, colValue, gubun;
  if (level == "4") {
    colid = "upperAcctCd";
    colValue = acctCd;
    gubun = "하위";
  } else {
    colid = "acctCd";
    colValue = upperAcctCd;
    gubun = "상위";
  }
  for (let i = 0; i < ds_master.getRowCount() - 1; i++) {
    if (ds_master.getCellData(i, "acctCd") == acctCd) {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_011, ["예산통제계정"]));
      ds_master.setCellData(gr_master.getFocusedRowIndex(), "acctNm", "");
      return false;
    }
  }
  let target = ds_master.getMatchedIndex(colid, colValue);
  let row = target[0];
  if (ds_master.getMatchedIndex(colid, colValue).length > 0) {
    await $c.win.alert($p, gubun + "예산통제계정이 존재합니다.\n[" + ds_master.getCellData(row, "acctCd") + "] " + ds_master.getCellData(row, "acctNm"));
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 그리드 팝업
//-------------------------------------------------------------------------
scwin.f_GridPopUp = async function (code, name, isPopUp) {
  // 계정조회
  let pHidden = "3,4,5,7,8,9,10";
  await udc_gridAcctCd.cfCommonPopUp(scwin.udc_gridAcctCd_callBackFunc, code, name, isPopUp, "6", null, null, pHidden, ",5,4,5,,,,1", "500", null, null, null);
};
scwin.udc_gridAcctCd_callBackFunc = async function (rtnList) {
  // SET
  let row = gr_master.getFocusedRowIndex();
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (rtnList[5] == "4" || rtnList[5] == "5") {
      if ((await scwin.f_CheckMgntAcctCd(rtnList[5], rtnList[0], rtnList[2])) == false) {
        return;
      }
      ds_master.setCellData(row, "acctCd", rtnList[0]);
      ds_master.setCellData(row, "acctNm", rtnList[1]);
      ds_master.setCellData(row, "upperAcctCd", rtnList[2]);
      ds_master.setCellData(row, "acctLvl", rtnList[5]);
    } else {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_061, ["계정레벨", "4 또는 5"]));
      return;
    }
  } else {
    ds_master.setCellData(row, "acctCd", "");
    ds_master.setCellData(row, "acctNm", "");
    ds_master.setCellData(row, "upperAcctCd", "");
    ds_master.setCellData(row, "acctLvl", "");
  }
};

//-------------------------------------------------------------------------
// 예산통제계정 자동생성 팝업
//-------------------------------------------------------------------------
scwin.f_PupUpAutoCreation = function (e) {
  let opt = {};
  let data = {};
  opt.id = "autoCreatePopup";
  opt.popupName = "예산통제계정 자동생성";
  opt.width = "600";
  data.stdYr = ica_srchBudgetYr.getValue();
  $c.win.openPopup($p, "/ui/ac/co/budgetmgnt/co_100_07_02p.xml", opt, data);
};

//-------------------------------------------							
// 그리드 데이터 엑셀로 다운							
//-------------------------------------------
scwin.f_runExcel = async function () {
  let totCnt = ds_master.getRowCount();
  let sheetTitle = "예산통제계정내역";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, gr_master, {
        fileName: sheetTitle + ".xlsx",
        sheetName: sheetTitle,
        columnMove: true
      });
    }
  } else {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
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
scwin.sbm_retrieve_submitdone = async function (e) {
  scwin.isSearch = true;
  totalRows.setValue(ds_master.getRowCount());
  if (ds_master.getRowCount() == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      await $c.win.alert($p, MSG_CM_WRN_002);
    }
  } else {
    gr_master.focus();
  }
};
scwin.sbm_master_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    ds_master.reform();
    scwin.f_Retrieve();
  }
};
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (gr_master.getRowStatus(rowIndex) == "C") {
    gr_master.setColumnReadOnly("acctCd", false);
  } else {
    gr_master.setColumnReadOnly("acctCd", true);
  }
};
scwin.gr_master_ontextimageclick = function (rowIndex, columnIndex) {
  let data = ds_master.getCellData(rowIndex, "acctCd");
  switch (gr_master.getColumnID(columnIndex)) {
    case "acctCd":
      scwin.f_GridPopUp(data, "", 'F');
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
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.gr_master_onviewchange = function (info) {
  let colId = info.colId;
  if (colId == "acctCd") {
    let newData = info.newValue;
    let oldData = info.oldValue;
    if ($c.gus.cfIsNull($p, newData)) {
      ds_master.setCellData(info.rowIndex, "acctNm", "");
      return;
    }
    if (newData == oldData) {
      return;
    }
    scwin.f_GridPopUp(newData, "", 'T');
  }
};
scwin.gr_master_onrowindexchange = function (rowIndex, oldRow) {
  if (ds_master.getRowStatus(oldRow) == "C") {
    gr_master.setFocusedCell(oldRow, 0);
    gr_master.setReadOnly("column", "cntlUnitClsCd", true);
    return false;
  } else {
    gr_master.setReadOnly("column", "cntlUnitClsCd", false);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 12%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 12%;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:65px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col8',allowCharCode:'0-9',maxlengthCode:'3',UpperFlagCode:'1',mandatoryCode:'true',objTypeCode:'data',validExpCode:'회사코드:yes',codeId:'ed_coCd',btnId:'btn_company',nameId:'ed_coNm',id:'udc_dongbuGroupCompanyInfo',objTypeName:'data',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent',refDataCollection:'dma_search',code:'coCd',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예산년도 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'form-control cal',id:'ica_srchBudgetYr',style:'',objType:'data',mandatory:'true',validExp:'예산년도:yes:date=YYYY',validateOnInput:'true',editType:'focus',displayFormat:'yyyy',ref:'data:dma_search.budgetYr',title:'예산년도'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통제단위 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control',editType:'select',id:'acb_srchCntlUnitClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:dma_search.cntlUnitClsCd',disabled:'false',chooseOptionLabel:'전체',displayMode:'value delim label',visibleRowNum:'20',sortOption:'value'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear()'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'예산통제계정내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrd',gridID:'gr_master',gridDownUserAuth:'X',gridDownFn:'scwin.f_runExcel',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'cell',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',validFeatures:'ignoreStatus=no',validExp:'acctCd::yes:length=7&number:key,acctNm::yes,cntlUnitClsCd::yes',dataDragSelectAutoScroll:'true',columnMove:'true','ev:oneditend':'scwin.gr_master_oneditend','ev:ontextimageclick':'scwin.gr_master_ontextimageclick',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_master_oncellclick','ev:onviewchange':'scwin.gr_master_onviewchange',rowStatusWidth:'10','ev:onrowindexchange':'scwin.gr_master_onrowindexchange','ev:oncellindexchange':'scwin.gr_master_oncellindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctCd',inputType:'text',removeBorderStyle:'false',width:'220',value:'계정코드',class:' txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctNm',inputType:'text',removeBorderStyle:'false',width:'300',value:'계정명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntlUnitClsCd',inputType:'text',removeBorderStyle:'false',width:'230',value:'통제단위',class:' txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'coCd',inputType:'text',removeBorderStyle:'false',width:'220',value:'회사코드',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'textImage',removeBorderStyle:'false',width:'220',allowChar:'0-9',buttonType:'image',maxLength:'7',readOnly:'true',editModeEventIcon:'onclick',editModeEvent:'onclick',viewType:'default',validateOnInput:'true',title:'계정코드',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctNm',inputType:'text',removeBorderStyle:'false',width:'300',textAlign:'left',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntlUnitClsCd',inputType:'select',removeBorderStyle:'false',width:'230',editModeEvent:'onclick',readOnly:'false',mandatory:'true'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'coCd',inputType:'text',removeBorderStyle:'false',width:'220',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{addFunction:'scwin.f_Add',btnCancelYn:'Y',btnDelYn:'N',gridID:'gr_master',id:'udc_bottomGrdBtn1',rowAddUserAuth:'C',rowDelUserAuth:'D',style:'',cancelFunction:'scwin.f_Cancel',rowAddFunction:'scwin.f_Add',rowDelFunction:'scwin.f_Delete'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveMgntAcctCdInfo',codeId:'ed_acctCd',validTitle:'예산통제계정코드',nameId:'ed_acctNm',style:'width:%; height:px; ;visibility:hidden;',id:'udc_gridAcctCd',btnId:'btn_acctCd'}},{T:1,N:'xf:trigger',A:{class:'btn white',id:'',label:'저장',style:'',type:'button',userAuth:'C',objType:'bCreate','ev:onclick':'scwin.f_PupUpAutoCreation'},E:[{T:1,N:'xf:label',E:[{T:3,text:'자동생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U',objType:'bSave','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})