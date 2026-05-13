/*amd /AI/co_404_01_03b.xml 35386 3f9ee84ae21baf0d6badd23047b02f7bfc889c5a7a6d28546603c4ee1613ade0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'결산년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pageNo',name:'페이지번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'befCloseYm',name:'전월결산년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bookClsCd',name:'장부구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'distYn',name:'배부포함여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntAcctCdNm',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCdNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt',name:'실적금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_crossTab',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntAcctCdNm',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCdNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt',name:'실적금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_page',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'COL1',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_version',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'COL1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL3',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'COL4',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tempCount',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_unit',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cdDesc',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_closeYm',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.co.rsltsmgnt.rsltsanl.RetrieveDepartmentEachResultsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_tempCount',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_tempCount","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_tempCount","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_tempCount_submitdone','ev:submiterror':'scwin.sbm_tempCount_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_closeYm',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_closeYm","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_closeYm","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_closeYm_submitdone','ev:submiterror':'scwin.sbm_closeYm_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_version',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_version","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_version","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_version_submitdone','ev:submiterror':'scwin.sbm_version_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_unit',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_unit","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_unit","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_unit_submitdone','ev:submiterror':'scwin.sbm_unit_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_page',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_page","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_page","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_page_submitdone','ev:submiterror':'scwin.sbm_page_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.currentPage = "1";
scwin.TRUE_VALUE = "1";
scwin.onpageload = async function () {
  $c.gus.cfDisableKey($p);
  scwin.f_FieldClear();
  scwin.f_GetUnit();
};
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableObjects($p, [ed_BizDomCd, txt_BizDomNm]);
  scwin.f_SetSrchDefault();
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ed_srchCloseYm, lc_version, rd_srchAmtClsCd]);
  scwin.f_SetSrchDefault();
};
scwin.f_SetSrchDefault = async function () {
  $c.gus.cfInitHidVal($p, tbl_search);
  rd_srchAmtClsCd.setValue("1");
  await scwin.f_CloseYm();
  scwin.f_GetVersion();
  lc_srchBookClsCd.setFocus();
};
scwin.f_CountRow = async function () {
  let ebcId = "ManagementProfitAndLossEBC";
  let queryId = "retrieveManagementProfitAndLossCount";
  let param1 = lc_version.getValue();
  let param2 = ed_srchCloseYm.getValue().trim();
  sbm_tempCount.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=" + ebcId + "&queryId=" + queryId + "&param1=" + param1 + "&param2=" + param2;
  await $c.sbm.execute($p, sbm_tempCount);
  if (parseInt(ds_tempCount.getCellData(0, "col1")) > 0) {
    return true;
  }
  return false;
};
scwin.f_CloseYm = async function () {
  let ebcId = "ManagementProfitAndLossEBC";
  let queryId = "retrieveManagementProfitAndLossCloseYm";
  sbm_closeYm.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=" + ebcId + "&queryId=" + queryId;
  await $c.sbm.execute($p, sbm_closeYm);
  if (ds_closeYm.getRowCount() > 0) {
    ed_srchCloseYm.setValue(ds_closeYm.getCellData(0, "col1"));
  }
};
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [tbl_search]);
  if (!chk) return;
  if (rd_srchAmtClsCd.getValue() == "1") {
    let hasData = await scwin.f_CountRow();
    if (!hasData) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }
  }
  if (lc_version.getValue() == "001" || lc_version.getValue() == "000") {
    if (lc_srchBookClsCd.getValue() == "601") {
      ds_search.set("bookClsCd", "621");
    } else if (lc_srchBookClsCd.getValue() == "602") {
      ds_search.set("bookClsCd", "622");
    } else if (lc_srchBookClsCd.getValue() == "603") {
      ds_search.set("bookClsCd", "623");
    }
  }
  ds_search.set("befCloseYm", scwin.f_GetBefCloseYm());
  ds_search.set("pageNo", scwin.currentPage);
  await $c.sbm.execute($p, sbm_search);
  if (ds_search.get("bookClsCd") == "621") {
    ds_search.set("bookClsCd", "601");
  } else if (ds_search.get("bookClsCd") == "622") {
    ds_search.set("bookClsCd", "602");
  } else if (ds_search.get("bookClsCd") == "623") {
    ds_search.set("bookClsCd", "603");
  }
};
scwin.f_GetVersion = async function () {
  sbm_version.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=retrieveVersionInfo" + "&param1=" + ed_srchCloseYm.getValue().trim();
  await $c.sbm.execute($p, sbm_version);
};
scwin.f_SetFinalVer = function () {
  if (ds_version.getRowCount() < 1) return;
  let index = 0;
  for (let i = 0; i < ds_version.getRowCount(); i++) {
    if (ds_version.getCellData(i, "COL3") == scwin.TRUE_VALUE) {
      index = i;
      break;
    }
  }
  lc_version.setSelectedIndex(index);
};
scwin.f_BizDomPopUp = function () {
  let paramArray = {};
  paramArray.pSelectID = "retrieveBizDomCdInfo";
  paramArray.pCode = ed_BizDomCd;
  paramArray.pName = txt_BizDomNm;
  paramArray.pW = "410";
  scwin.f_PopUp(paramArray, function (rtnList) {
    if (rtnList != null) {
      ds_search.set("bizDomCd", rtnList[0]);
    } else {
      ds_search.set("bizDomCd", "");
    }
  });
};
scwin.f_GetUnit = async function () {
  sbm_unit.action = "/cm.zz.RetrieveCodeCMD.do?grpCd=CO012&cd=&cdNm=";
  await $c.sbm.execute($p, sbm_unit);
};
scwin.f_SetDefaultUnit = function () {
  if (ds_unit.getRowCount() < 1) return;
  let index = 0;
  for (let i = 0; i < ds_unit.getRowCount(); i++) {
    if (ds_unit.getCellData(i, "fltrCd1") == scwin.TRUE_VALUE) {
      index = i;
      break;
    }
  }
  lc_unit.setSelectedIndex(index);
};
scwin.f_SetGridUnit = function () {
  let colid;
  let colCount = ds_crossTab.getColumnCount();
  let unitVal = lc_unit.getValue();
  for (let i = 0; i < colCount; i++) {
    let colType = ds_crossTab.getColumnDataType(i);
    if (colType == "number" || colType == "float") {
      colid = ds_crossTab.getColumnID(i);
      for (let r = 0; r < ds_crossTab.getRowCount(); r++) {
        let origVal = parseFloat(ds_crossTab.getCellData(r, colid));
        if (!isNaN(origVal) && parseFloat(unitVal) != 0) {
          ds_crossTab.setCellData(r, colid, Math.round(origVal / parseFloat(unitVal)));
        }
      }
    }
  }
  if (scwin.currentPage > "1") {
    for (let r = 0; r < ds_crossTab.getRowCount(); r++) {
      let sumVal = parseFloat(ds_crossTab.getCellData(r, "rsltSumAmt"));
      if (!isNaN(sumVal) && parseFloat(unitVal) != 0) {
        ds_crossTab.setCellData(r, "rsltSumAmt", Math.round(sumVal / parseFloat(unitVal)));
      }
    }
  }
};
scwin.f_PopUp = function (paramArray, callback) {
  let codeObj = paramArray.pCode;
  let nameObj = paramArray.pName;
  udc_BizDom.ilCommonPopUp(function (rtnList) {
    if (rtnList != null) {
      if (rtnList[0] != "N/A") {
        $c.gus.cfSetValue($p, codeObj, rtnList[0]);
        codeObj.hidVal = rtnList[0];
        $c.gus.cfSetValue($p, nameObj, rtnList[1]);
      }
    } else {
      $c.gus.cfSetValue($p, codeObj, "");
      codeObj.hidVal = "";
      $c.gus.cfSetValue($p, nameObj, "");
    }
    if (typeof callback === "function") {
      callback(rtnList);
    }
  }, $c.gus.cfGetValue($p, codeObj), "", scwin.f_EventCheck(), paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
};
scwin.f_IsPopUp = function () {
  let inObj = arguments[0];
  let inValue = $c.gus.cfGetValue($p, inObj);
  let hidValue = inObj.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.hidVal = "";
    for (let i = 1; i < arguments.length; i++) {
      $c.gus.cfSetValue($p, arguments[i], "");
    }
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};
scwin.f_EventCheck = function () {
  return "T";
};
scwin.f_GetPage = async function () {
  sbm_page.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=retrieveBookPageInfo" + "&param1=" + lc_srchBookClsCd.getValue();
  await $c.sbm.execute($p, sbm_page);
};
scwin.f_DisplayPaging = function (pageNum) {
  if ($c.gus.cfIsNull($p, pageNum)) pageNum = "1";
  let totalPage = ds_page.getRowCount();
  pgl_pageList1.setPageCount(totalPage);
  pgl_pageList1.setCurrentPage(parseInt(pageNum));
};
scwin.f_ClearPaging = function () {
  scwin.currentPage = "1";
  pgl_pageList1.setPageCount(0);
};
scwin.f_MoveToPage = async function (pageNum) {
  scwin.currentPage = pageNum;
  scwin.f_DisplayPaging(pageNum);
  await scwin.f_Retrieve();
};
scwin.f_SetGridFormat = function () {
  let unitVal = lc_unit.getValue();
  let colCount = ds_crossTab.getColumnCount();
  let dynamicCols = [];
  for (let i = 0; i < colCount; i++) {
    let colId = ds_crossTab.getColumnID(i);
    if (colId.indexOf("rsltsAmt_") === 0) {
      dynamicCols.push(colId);
    }
  }
  let xkeyNames = [];
  for (let i = 0; i < colCount; i++) {
    let colId = ds_crossTab.getColumnID(i);
    if (colId.indexOf("xkeyname_") === 0) {
      xkeyNames.push(colId);
    }
  }
  let headerArr = [];
  headerArr.push({
    id: "mgntAcctCdNm",
    name: "계정",
    width: 150,
    align: "left"
  });
  for (let d = 0; d < dynamicCols.length; d++) {
    let suffix = dynamicCols[d].replace("rsltsAmt_", "");
    let headerName = suffix;
    let xkeyColId = "xkeyname_" + suffix;
    if (ds_crossTab.getRowCount() > 0) {
      let xkeyVal = ds_crossTab.getCellData(0, xkeyColId);
      if (xkeyVal && xkeyVal.length > 6) {
        headerName = xkeyVal.substring(6);
      } else if (xkeyVal) {
        headerName = xkeyVal;
      }
    }
    headerArr.push({
      id: dynamicCols[d],
      name: headerName,
      width: 100,
      align: "right"
    });
  }
  if (scwin.currentPage > "1") {
    headerArr.push({
      id: "rsltSumAmt",
      name: "소계",
      width: 100,
      align: "right"
    });
  }
  let parseUnitVal = parseFloat(unitVal);
  if (isNaN(parseUnitVal) || parseUnitVal == 0) parseUnitVal = 1;
  for (let r = 0; r < ds_crossTab.getRowCount(); r++) {
    for (let d = 0; d < dynamicCols.length; d++) {
      let origVal = parseFloat(ds_crossTab.getCellData(r, dynamicCols[d]));
      if (!isNaN(origVal)) {
        ds_crossTab.setCellData(r, dynamicCols[d], Math.round(origVal / parseUnitVal));
      }
    }
    if (scwin.currentPage > "1") {
      let sumVal = 0;
      for (let d = 0; d < dynamicCols.length; d++) {
        let cellVal = parseFloat(ds_crossTab.getCellData(r, dynamicCols[d]));
        if (!isNaN(cellVal)) {
          sumVal += cellVal;
        }
      }
      ds_crossTab.setCellData(r, "rsltSumAmt", Math.round(sumVal));
    }
  }
  gr_master.refresh();
};
scwin.f_ClearGrid = function () {
  ds_master.removeAll();
  ds_crossTab.removeAll();
  scwin.f_ClearPaging();
};
scwin.f_Export = async function () {
  if (ds_crossTab.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let fileName = "부서별실적_" + ed_srchCloseYm.getValue() + "_ver_" + lc_version.getValue();
  $c.data.downloadGridViewExcel($p, gr_master, {
    fileName: fileName + ".xlsx",
    sheetName: fileName
  });
};
scwin.f_GetBefCloseYm = function () {
  if (rd_srchAmtClsCd.getValue() == "1") {
    return $c.date.addMonth($p, ed_srchCloseYm.getValue().trim(), -1);
  } else {
    return ed_srchCloseYm.getValue().trim();
  }
};
scwin.f_grdHeiht = function (gridNm, size) {
  let strHeight = gridNm.getStyle("height");
  let intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    gridNm.setStyle("height", intHeight + "px");
  }
};
scwin.sbm_search_submitdone = async function (e) {
  let rowCnt = ds_master.getRowCount();
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
  } else {
    scwin.f_SetGridFormat();
    gr_master.setFocusedCell(0, 0);
  }
};
scwin.sbm_search_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_tempCount_submitdone = function (e) {};
scwin.sbm_tempCount_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_closeYm_submitdone = function (e) {};
scwin.sbm_closeYm_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_version_submitdone = function (e) {
  scwin.f_SetFinalVer();
};
scwin.sbm_version_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_unit_submitdone = function (e) {
  scwin.f_SetDefaultUnit();
};
scwin.sbm_unit_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_page_submitdone = async function (e) {
  let rowCnt = ds_page.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    scwin.f_ClearPaging();
  } else {
    await scwin.f_MoveToPage("1");
  }
};
scwin.sbm_page_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ed_srchCloseYm_onchange = function (e) {
  scwin.f_GetVersion();
};
scwin.lc_unit_onchange = function (e) {
  scwin.f_SetGridUnit();
};
scwin.ed_BizDomCd_onblur = function (e) {
  if (scwin.f_IsPopUp(ed_BizDomCd, txt_BizDomNm) == false) return;
  scwin.f_BizDomPopUp();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_trigger1_onclick = function (e) {
  scwin.f_GetPage();
};
scwin.pgl_pageList1_onpageindexchange = function (pageNo) {
  scwin.f_MoveToPage(String(pageNo));
};
scwin.lc_srchBookClsCd_onchange = function (e) {
  // 원본: f_ClearGrid() 주석처리 (2006.05.04)
  // 원본에서 의도적으로 빈 이벤트 핸들러로 유지됨
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'장부구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'rd_srchAmtClsCd',style:'',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'결산년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ed_srchCloseYm',style:'',ref:'data:ds_search.closeYm',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'버전 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w80',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_version',style:'',submenuSize:'auto',ref:'data:ds_search.ver',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업영역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_BizDom',popupID:'',selectID:'',codeId:'ed_BizDomCd',validTitle:'',popupTitle:'',nameId:'txt_BizDomNm',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'금액구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_srchAmtClsCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당월'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'누계'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chk_distYn',ref:'data:ds_search.distYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배부포함'}]},{T:1,N:'xf:value'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부서별실적 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'단위',style:''}}]},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_unit',style:'',submenuSize:'auto',mandatory:'true'}},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'ds_crossTab',id:'gr_master',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'법인코드',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'계정코드',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'하위부서코드',width:'130',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'법인명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'하위부서명',width:'130',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'계정과목',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'연계 ',width:'210',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'1월',width:'210',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column55',value:'2월',displayMode:'label',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column46',value:'3월',displayMode:'label',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column37',value:'4월',displayMode:'label',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column100',value:'5월',displayMode:'label',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column91',value:'6월',displayMode:'label',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column82',value:'7월',displayMode:'label',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column73',value:'8월',displayMode:'label',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column67',value:'9월',displayMode:'label',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column121',value:'10월',displayMode:'label',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column112',value:'11월',displayMode:'label',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column103',value:'12월',displayMode:'label',colSpan:'3',rowSpan:''}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'전년',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'전년',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column59',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column56',value:'전년',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'전년',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column38',value:'전년',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column32',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column101',value:'전년',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column98',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column95',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column92',value:'전년',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column89',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column86',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column83',value:'전년',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column80',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column77',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'전년',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column65',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'전년',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column128',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column125',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column122',value:'전년',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column119',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column116',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column113',value:'전년',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column110',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column107',value:'실적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column104',value:'전년',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column131',value:'계획',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column134',value:'실적',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column18',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column16',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column14',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column12',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column10',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column6',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column8',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column20',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column102',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column129',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column126',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column123',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column120',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column117',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column114',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column111',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column108',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column132',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column135',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pglbox',id:'',style:''},E:[{T:1,N:'w2:pageList',A:{class:'wq_pglist',displayButtonType:'display',displayFormat:'#',id:'pgl_pageList1',pageSize:'10',pagingType:'0',style:''}}]}]}]}]}]}]})