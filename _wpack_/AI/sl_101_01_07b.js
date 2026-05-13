/*amd /AI/sl_101_01_07b.xml 28520 2ad1878d518608fd7d4fbc588ca2cc1fc4a5b1e8429069c18df22fb954b3f0e5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'scalClntNo',name:'계근대화주코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'화주코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scalCommCd',name:'계근대품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'본선코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'작업시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'작업종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stockMgntNo',name:'재고관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stockYn',name:'재고여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsltsYn',name:'실적여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stockStdDt',name:'재고기준일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'toClntNm',name:'양도화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'본선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'현재고중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'preStockWt',name:'전일재고중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stdDtStockWt',name:'기준일재고중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockMgntNo',name:'재고관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockStdAdptDt',name:'작업완료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strRateAdptDt',name:'보관료기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'창고명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blBkNo',name:'입출고순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'본선코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scalCommCd',name:'계근대품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'데비스품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scalClntNo',name:'계근대화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'데비스화주코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.sl.RetrieveScaleWorkResultCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_result","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.PcvsslMgntNo = "";
scwin.chk_retrieve = "F";
scwin.chk_input = "F";
scwin.nowDt = "";
scwin.importVssl = "F";
scwin.exportVssl = "F";
scwin.hd_vsslCd = "";
scwin.txt_hlobranCd = "";
scwin.txt_hlobranNm = "";
scwin.onpageload = function () {
  scwin.nowDt = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.PcvsslMgntNo = $c.data.getParameter($p) != null && $c.data.getParameter($p)["cvsslMgntNo"] != null ? $c.data.getParameter($p)["cvsslMgntNo"] : "";
  scwin.lobranCd = $c.ses.getLobranCd();
  scwin.lobranNm = $c.ses.getLobranNm();
  scwin.f_SetComboData();
};
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableObjects($p, [ed_clntNo, txt_clntNm, ed_commCd, txt_commNm]);
  udc_wrkDt.setInitDate(scwin.nowDt.substring(0, 6) + "01", scwin.nowDt);
  ed_stockStdDt.setValue(scwin.nowDt);
};
scwin.f_SetComboData = function () {
  let stockYnChoices = [{
    label: "전체",
    value: ""
  }, {
    label: "현재고",
    value: "1"
  }, {
    label: "출고완료",
    value: "2"
  }];
  let stockYnNodeset = "data:lc_stockYn_choices";
  WebSquare.ModelUtil.removeNodeSet(stockYnNodeset);
  WebSquare.ModelUtil.setNodeSet(stockYnNodeset, "", stockYnChoices);
  lc_stockYn.setNodeSet(stockYnNodeset, "label", "value");
  let rsltsYnChoices = [{
    label: "전체",
    value: ""
  }, {
    label: "무실적제외",
    value: "1"
  }, {
    label: "무실적",
    value: "2"
  }];
  let rsltsYnNodeset = "data:lc_rsltsYn_choices";
  WebSquare.ModelUtil.removeNodeSet(rsltsYnNodeset);
  WebSquare.ModelUtil.setNodeSet(rsltsYnNodeset, "", rsltsYnChoices);
  lc_rsltsYn.setNodeSet(rsltsYnNodeset, "label", "value");
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  scwin.f_ProcessBinding();
  await $c.sbm.execute($p, sbm_search);
};
scwin.f_ProcessBinding = function () {
  dma_condition.set("clntNo", ed_clntNo.getValue());
  dma_condition.set("commCd", ed_commCd.getValue());
  dma_condition.set("cvsslMgntNo", ed_cvsslMgntNo.getValue());
  dma_condition.set("vsslCd", scwin.hd_vsslCd);
  dma_condition.set("wrkStDt", udc_wrkDt.getFromValue());
  dma_condition.set("wrkEndDt", udc_wrkDt.getToValue());
  dma_condition.set("stockYn", lc_stockYn.getValue());
  dma_condition.set("rsltsYn", lc_rsltsYn.getValue());
  dma_condition.set("stockStdDt", ed_stockStdDt.getValue());
};
scwin.sbm_search_submitdone = async function (e) {
  let rowCnt = ds_result.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
    return;
  }
  spa_totalRow.setValue(ds_result.getTotalRow());
};
scwin.sbm_search_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_openPopUp = async function () {
  let args = {};
  args.cvsslMgntNo = ed_cvsslMgntNo.getValue();
  args.paramTitle = "본선관리번호검색팝업";
  let rtnValues = await $c.win.openPopup($p, "/ui/ds/sl/sl_101_01_01p.xml", {
    width: 900,
    height: 400,
    modal: true,
    data: args
  });
  if (rtnValues != null) {
    ed_cvsslMgntNo.setValue(rtnValues[0]);
    scwin.hd_vsslCd = rtnValues[1];
    txt_vsslNm.setValue(rtnValues[2]);
  }
};
scwin.f_CopyDataRow = async function (sourceDataset, targetDataset, sourceRow, targetRow, sourceColumns, targetColumns, actionAfterRowAdded) {
  try {
    if (sourceDataset == null) throw "원본 데이터셋이 정의되지 않았습니다.";
    if (targetDataset == null) throw "대상 데이터셋이 정의되지 않았습니다.";
    if (sourceColumns == null) sourceColumns = scwin.f_GetColumnNames(sourceDataset);
    if (targetColumns == null) targetColumns = sourceColumns;
    if (sourceRow == null) sourceRow = sourceDataset.getRowPosition();
    if (targetRow == null) targetRow = scwin.f_AddDataRow(targetDataset);
    for (let i = 0; i < sourceColumns.length; i++) {
      if ($c.gus.cfIsNull($p, sourceColumns[i]) || $c.gus.cfIsNull($p, targetColumns[i])) continue;
      targetDataset.setCellData(targetRow, targetColumns[i], sourceDataset.getCellData(sourceRow, sourceColumns[i]));
      if (actionAfterRowAdded != null) eval(actionAfterRowAdded);
    }
    return targetRow;
  } catch (e) {
    await $c.gus.cfAlertMsg($p, "[f_CopyDataRow]" + e);
  }
};
scwin.f_GetColumnNames = async function (dataSet) {
  try {
    if (dataSet == null) throw "데이터셋이 정의되지 않았습니다.";
    let colCount = dataSet.getColumnCount();
    if (colCount == 0) return null;
    let rtnArray = new Array(colCount);
    for (let i = 0; i < colCount; i++) {
      rtnArray[i] = dataSet.getColumnID(i);
    }
    if (rtnArray.length == 0) return null;else return rtnArray;
  } catch (e) {
    await $c.gus.cfAlertMsg($p, "[f_GetColumnNames] " + e);
  }
};
scwin.f_AddDataRow = function (dataSet) {
  dataSet.insertRow();
  return dataSet.getRowPosition();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_condition, null);
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  let pWhere;
  switch (disGubun) {
    case 1:
      let v_clntNo1 = "525083";
      let v_itemCd1 = "SCAL_CLNT";
      let v_wrkPlCd1 = "6E03";
      let v_docCd1 = "SCL_H01";
      pWhere = v_clntNo1 + "," + v_itemCd1 + "," + v_wrkPlCd1 + "," + v_docCd1;
      udc_clnt.ilCommonPopUp(scwin.callbackClnt1, pCode, pName, pClose, null, "계근대;화주코드,화주명,데비스;화주코드", "80,150,100", "4,5,6,7,8,9,10", pWhere, null, null, null, null, null, pAllSearch, "화주,화주코드,화주명");
      break;
    case 2:
      let v_clntNo2 = "525083";
      let v_itemCd2 = "SCAL_CLNT";
      let v_wrkPlCd2 = "6E03";
      let v_docCd2 = "SCL_H01";
      pWhere = v_clntNo2 + "," + v_itemCd2 + "," + v_wrkPlCd2 + "," + v_docCd2;
      udc_clnt.ilCommonPopUp(scwin.callbackClnt2, pCode, pName, pClose, null, "계근대;화주코드,화주명,데비스;화주코드", "80,150,100", "4,5,6,7,8,9,10", pWhere, null, null, null, null, null, pAllSearch, "화주,화주코드,화주명");
      break;
    case 3:
      let v_clntNo3 = "525083";
      let v_itemCd3 = "SCAL_COMM";
      let v_wrkPlCd3 = "6E03";
      let v_docCd3 = "SCL_H01";
      pWhere = v_clntNo3 + "," + v_itemCd3 + "," + v_wrkPlCd3 + "," + v_docCd3;
      udc_comm.ilCommonPopUp(scwin.callbackComm3, pCode, pName, pClose, null, "계근대;품명코드,품명,데비스;품명코드", "80,150,100", "4,5,6,7,8,9,10", pWhere, null, null, null, null, null, pAllSearch, "품목,품명코드,품명");
      break;
    case 4:
      let v_clntNo4 = "525083";
      let v_itemCd4 = "SCAL_COMM";
      let v_wrkPlCd4 = "6E03";
      let v_docCd4 = "SCL_H01";
      pWhere = v_clntNo4 + "," + v_itemCd4 + "," + v_wrkPlCd4 + "," + v_docCd4;
      udc_comm.ilCommonPopUp(scwin.callbackComm4, pCode, pName, pClose, null, "계근대;품명코드,품명,데비스;품명코드", "80,150,100", "4,5,6,7,8,9,10", pWhere, null, null, null, null, null, pAllSearch, "품목,품명코드,품명");
      break;
  }
};
scwin.callbackClnt1 = function (rtnList) {
  if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
    ed_scalClntNo.setValue(rtnList[0]);
    txt_clntNm.setValue(rtnList[1]);
    ed_clntNo.setValue(rtnList[2]);
  } else {
    ed_scalClntNo.setValue("");
    txt_clntNm.setValue("");
    ed_clntNo.setValue("");
  }
};
scwin.callbackClnt2 = function (rtnList) {
  if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
    ed_scalClntNo.setValue(rtnList[0]);
    txt_clntNm.setValue(rtnList[1]);
    ed_clntNo.setValue(rtnList[2]);
  } else {
    ed_scalClntNo.setValue("");
    txt_clntNm.setValue("");
    ed_clntNo.setValue("");
  }
};
scwin.callbackComm3 = function (rtnList) {
  if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
    ed_scalCommCd.setValue(rtnList[0]);
    txt_commNm.setValue(rtnList[1]);
    ed_commCd.setValue(rtnList[2]);
  } else {
    ed_scalCommCd.setValue("");
    txt_commNm.setValue("");
    ed_commCd.setValue("");
  }
};
scwin.callbackComm4 = function (rtnList) {
  if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
    ed_scalCommCd.setValue(rtnList[0]);
    txt_commNm.setValue(rtnList[1]);
    ed_commCd.setValue(rtnList[2]);
  } else {
    ed_scalCommCd.setValue("");
    txt_commNm.setValue("");
    ed_commCd.setValue("");
  }
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.f_toExcel1 = function () {
  $c.data.downloadGridViewExcel($p, gr_result, {
    fileName: "재고기준별 재고조회.xlsx",
    sheetName: "재고기준별 재고조회"
  });
};
scwin.numberWithCommas = function (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
scwin.gr_result_onheaderclick = function (headerIndex, columnIndex, columnId) {
  let chk = "";
  let cr = ds_result.getRowCount();
  if (cr > 0) {
    if (columnId == "chk") {
      let headerCheckVal = gr_result.getHeaderValue(headerIndex, columnIndex);
      chk = headerCheckVal == true ? "T" : "F";
      for (let i = 0; i < cr; i++) {
        ds_result.setCellData(i, "chk", chk);
      }
    }
  }
};
scwin.ed_scalClntNo_onblur = function (e) {
  if (ed_scalClntNo.getValue() == "") {
    ed_scalClntNo.setValue("");
    txt_clntNm.setValue("");
    ed_clntNo.setValue("");
  } else {
    scwin.f_chkOpenCommonPopUp(ed_scalClntNo, txt_clntNm, 2);
  }
};
scwin.ed_scalCommCd_onblur = function (e) {
  if (ed_scalCommCd.getValue() == "") {
    ed_scalCommCd.setValue("");
    txt_commNm.setValue("");
    ed_commCd.setValue("");
  } else {
    scwin.f_chkOpenCommonPopUp(ed_scalCommCd, txt_commNm, 4);
  }
};
scwin.ed_cvsslMgntNo_onblur = async function (e) {
  if (ed_cvsslMgntNo.getValue() == "") {
    ed_cvsslMgntNo.setValue("");
    txt_vsslNm.setValue("");
    scwin.hd_vsslCd = "";
  } else {
    await scwin.f_openPopUp();
  }
};
scwin.txt_clntNm_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_clntNm, ed_scalClntNo, 1, false);
};
scwin.txt_commNm_onchange = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_commNm, ed_scalCommCd, 3, false);
};
scwin.img_PopUp1_onclick = function (e) {
  scwin.f_openCommonPopUp(1, ed_scalClntNo.getValue(), txt_clntNm.getValue(), 'F', 'T');
};
scwin.img_PopUp2_onclick = function (e) {
  scwin.f_openCommonPopUp(3, ed_scalCommCd.getValue(), txt_commNm.getValue(), 'F', 'T');
};
scwin.img_PopUp_onclick = async function (e) {
  await scwin.f_openPopUp();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'재고생성일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkDt',refDataMap:'',refEdDt:'ica_wrkEndDt',refStDt:'ica_wrkStDt',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_scalClntNo',placeholder:'',class:''}},{T:1,N:'w2:udc_comCode',A:{id:'udc_clnt',codeId:'ed_clntNo',nameId:'txt_clntNm',popupID:'',style:'',hideName:'Y'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_scalCommCd',placeholder:'',style:'width:50px;'}},{T:1,N:'w2:udc_comCode',A:{id:'udc_comm',codeId:'ed_commCd',nameId:'txt_commNm',hideName:'Y',popupID:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선명',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_cvsslMgnt',codeId:'ed_cvsslMgntNo',nameId:'txt_vsslNm',hideName:'Y',popupID:'',style:''}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'재고여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_stockYn',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_condition.stockYn',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'실적여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_rsltsYn',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_condition.rsltsYn',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'재고기준일',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_stockStdDt',pickerType:'dynamic',style:'',ref:'data:ds_condition.stockStdDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'재고기준별 재고조회 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_result',id:'gr_result',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',value:'작업일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntClsCd',inputType:'text',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',value:'화주명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'toClntNm',inputType:'text',value:'양도화주명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',value:'본선명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',value:'품명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockWt',inputType:'text',value:'현재고<br/>중량(kg)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'preStockWt',inputType:'text',value:'전일재고<br/>중량(kg)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdDtStockWt',inputType:'text',value:'기준일재고<br/>중량(kg)',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvIntendDt',value:'입항일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stockMgntNo',value:'재고관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockStdAdptDt',value:'작업<br/>완료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'strRateAdptDt',value:'보관료<br/>기준일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',value:'본선관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkPlNm',value:'창고명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blBkNo',value:'입출고순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslCd',value:'본선코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'scalCommCd',value:'계근대<br/>품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',value:'데비스<br/>품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'scalClntNo',value:'계근대<br/>화주코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',value:'데비스<br/>화주코드',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntClsCd',inputType:'select',width:'70',colMerge:'true',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'농협/축협'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사협'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'150',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'toClntNm',inputType:'text',width:'150',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'80',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockWt',inputType:'text',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'preStockWt',inputType:'text',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdDtStockWt',inputType:'text',width:'100',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvIntendDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stockMgntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockStdAdptDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'strRateAdptDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkPlNm',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blBkNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'scalCommCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'scalClntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'sum(\'stockWt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',expression:'sum(\'preStockWt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',expression:'sum(\'stdDtStockWt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})