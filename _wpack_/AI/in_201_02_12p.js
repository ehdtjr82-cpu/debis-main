/*amd /AI/in_201_02_12p.xml 25178 0a5b99ecc69072df6ff1b53b9d7e2360e3288f51948c4eb325a64f9490850176 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkShift',name:'작업시프트',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'화주코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPatternCd',name:'작업유형',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blBkNo',name:'BL/BK번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repKcgCd',name:'대표화종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIndictPrgsStsCd',name:'진행상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'화종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commNm',name:'화종명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tmlYardCd',name:'장치장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pdaWrkPicNo',name:'작업자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveWrkPlan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkShift',name:'시프트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'indictQty',name:'지시수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'indictWt',name:'지시중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'indictCbm',name:'지시CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'실적수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'실적중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsCbm',name:'실적CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkIndictPrgsStsCd',name:'진행상태',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_condition',action:'/to.in.bulk.tmlbulk.RetrieveBulkWrkIndictLupContCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_retrieveWrkPlan","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_retrieveWrkPlan","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_condition_submitdone','ev:submiterror':'scwin.sbm_condition_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.CREATE_AUTH = "C";
scwin.RETRIEVE_AUTH = "R";
scwin.UPDATE_AUTH = "U";
scwin.DELETE_AUTH = "D";
scwin.PRINT_AUTH = "P";
scwin.EXCEL_AUTH = "X";
scwin.selectedRowIndex = 0;
scwin.g_wrkIndictNo = "";
scwin.g_closeTF = "T";
scwin.vCurDate = "";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.params = $c.data.getParameter($p);
  if (scwin.params != null) {
    if (scwin.params["wrkIndictNo"] != null && scwin.params["wrkIndictNo"] != "") {
      scwin.g_wrkIndictNo = scwin.params["wrkIndictNo"];
    }
    if (scwin.params["closeTF"] != null) {
      scwin.g_closeTF = scwin.params["closeTF"];
    } else {
      scwin.g_closeTF = "T";
    }
  }
  ica_wrkDt.setValue(scwin.vCurDate);
  lc_wrkShift.setValue("D");
  ed_wrkIndictNo.setValue(scwin.g_wrkIndictNo);
  ed_clntNo.setValue("");
  txt_clntNm.setValue("");
  lc_repKcgCd.setValue("");
  ed_commCd.setValue("");
  txt_commNm.setValue("");
  ed_tmlYardCd.setValue("");
  txt_tmlYardNm.setValue("");
  lc_pdaWrkPicNo.setValue("");
  ed_blBkNo.setValue("");
  ed_cvsslMgntNo.setValue("");
  lc_wrkPatternCd.setValue("");
  lc_wrkIndictPrgsStsCd.setValue("");
  lc_wrkPlCd.setValue("");
};
scwin.onUdcCompleted = function () {
  let paramArray = $c.data.getParameter($p);
  if (!$c.gus.cfIsNull($p, paramArray)) {
    for (let key in paramArray) {
      ds_condition.set(key, paramArray[key]);
    }
  }
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [tb_searchCondition]);
  if (!chk) {
    return;
  }
  ds_condition.set("wrkDt", ica_wrkDt.getValue());
  ds_condition.set("wrkShift", lc_wrkShift.getValue());
  ds_condition.set("wrkPatternCd", lc_wrkPatternCd.getValue());
  ds_condition.set("wrkIndictPrgsStsCd", lc_wrkIndictPrgsStsCd.getValue());
  ds_condition.set("clntNo", ed_clntNo.getValue());
  ds_condition.set("clntNm", txt_clntNm.getValue());
  ds_condition.set("cvsslMgntNo", ed_cvsslMgntNo.getValue());
  ds_condition.set("blBkNo", ed_blBkNo.getValue());
  ds_condition.set("commCd", ed_commCd.getValue());
  ds_condition.set("commNm", txt_commNm.getValue());
  ds_condition.set("tmlYardCd", ed_tmlYardCd.getValue());
  ds_condition.set("pdaWrkPicNo", lc_pdaWrkPicNo.getValue());
  ds_condition.set("repKcgCd", lc_repKcgCd.getValue());
  ds_condition.set("wrkIndictNo", ed_wrkIndictNo.getValue());
  ds_condition.set("wrkPlCd", lc_wrkPlCd.getValue());
  await $c.sbm.execute($p, sbm_condition);
};
scwin.sbm_condition_submitdone = function (e) {};
scwin.sbm_condition_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_retrieveWrkPlan_onloadcompleted = async function (rowCnt) {
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  } else if (rowCnt == 1 && scwin.g_closeTF == "T") {
    let rtnValues = [];
    let row = 0;
    rtnValues[0] = ds_retrieveWrkPlan.getCellData(row, "wrkIndictNo");
    $c.win.closePopup($p, rtnValues);
  }
  spa_totalRow.setValue(ds_retrieveWrkPlan.getTotalRow());
};
scwin.f_getDefaultAutoClose = function () {
  return scwin.f_isPopUpClicked() ? "F" : "T";
};
scwin.f_isPopUpClicked = function () {
  return false;
};
scwin.f_canOpenPopUp = function (inObj, pairObj) {
  if (!scwin.f_isPopUpClicked()) {
    if (!$c.gus.cfCanOpenPopup($p, pairObj, inObj)) return false;
    $c.gus.cfClearPairObj($p, inObj);
  }
  return true;
};
scwin.f_openBlBkNoPopUp = async function () {
  let blBkNoVal = ed_blBkNo.getValue();
  let rtnValues = await $c.win.openPopup($p, "/ui/to/in/bulk/tmlbulk/in_201_02_04p.xml", {
    width: 1000,
    height: 605,
    modal: true,
    data: {
      paramTitle: "BL/BK검색팝업",
      blBkNo: blBkNoVal
    }
  });
  if (rtnValues != null) {
    ed_blBkNo.setValue(rtnValues[12]);
  } else {
    ed_blBkNo.setValue("");
  }
};
scwin.f_openCvsslMgntNoPopUp = async function () {
  let cvsslMgntNoVal = ed_cvsslMgntNo.getValue();
  let rtnValues = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", {
    width: 885,
    height: 425,
    modal: true,
    data: {
      paramTitle: "본선관리번호검색팝업",
      cvsslMgntNo: cvsslMgntNoVal
    }
  });
  if (rtnValues != null) {
    ed_cvsslMgntNo.setValue(rtnValues[0]);
  } else {
    ed_cvsslMgntNo.setValue("");
  }
};
scwin.f_runExcel = async function (varGrNm, gubun) {
  let totCnt = ds_retrieveWrkPlan.getTotalRow();
  let sheetTitle = "벌크 작업 지시 정보";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, varGrNm, {
        fileName: sheetTitle + ".xlsx",
        sheetName: sheetTitle
      });
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.f_openClntPopUp = function (pAllSearch) {
  let inObj = ed_clntNo;
  let pairObj = txt_clntNm;
  let pAutoClose = scwin.f_getDefaultAutoClose();
  if (!scwin.f_canOpenPopUp(inObj, pairObj)) return;
  udc_clnt.ilCommonPopUp(scwin.callbackClnt, $c.gus.cfGetValue($p, inObj), $c.gus.cfGetValue($p, pairObj), pAutoClose, null, null, null, null, null, null, null, null, null, null, "F", "대표거래처,거래처코드,거래처명");
};
scwin.callbackClnt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, txt_clntNm);
};
scwin.f_openTmlYardPopUp = function (pAllSearch) {
  let inObj = ed_tmlYardCd;
  let pairObj = txt_tmlYardNm;
  let pAutoClose = scwin.f_getDefaultAutoClose();
  if (!scwin.f_canOpenPopUp(inObj, pairObj)) return;
  udc_tmlYard.ilCommonPopUp(scwin.callbackTmlYard, $c.gus.cfGetValue($p, inObj), $c.gus.cfGetValue($p, pairObj), pAutoClose, null, null, null, null, null, null, null, null, null, null, "F", "터미널장치장,장치장코드,장치장명");
};
scwin.callbackTmlYard = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_tmlYardCd, txt_tmlYardNm);
};
scwin.f_openKcgCdPopUp = async function () {
  let inObj = ed_commCd;
  let pairObj = txt_commNm;
  if (!scwin.f_canOpenPopUp(inObj, pairObj)) return;
  let win_url = "/ui/to/in/bulk/tmlbulk/in_201_02_10p.xml";
  let xwidth = 515;
  let yheight = 465;
  let rtnValues = await $c.win.openPopup($p, win_url, {
    width: xwidth,
    height: yheight,
    modal: true,
    data: {
      repKcgCd: lc_repKcgCd.getValue(),
      cd: $c.gus.cfGetValue($p, inObj),
      nm: $c.gus.cfGetValue($p, txt_commNm)
    }
  });
  if (rtnValues != null) {
    ed_commCd.setValue(rtnValues[0]);
    txt_commNm.setValue(rtnValues[1]);
    lc_repKcgCd.setValue(rtnValues[2]);
  } else {
    ed_clntNo.setValue("");
    txt_clntNm.setValue("");
    lc_repKcgCd.setValue("");
  }
};
scwin.f_fieldClear = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition, [ica_wrkDt, ed_wrkIndictNo, lc_pdaWrkPicNo, lc_wrkIndictPrgsStsCd, lc_wrkPatternCd]);
  $c.gus.cfInitHidVal($p, tb_searchCondition);
  scwin.f_SetSrchClear();
};
scwin.f_SetSrchClear = function () {
  ica_wrkDt.setValue(scwin.vCurDate);
  lc_wrkShift.setValue("D");
  ed_wrkIndictNo.setValue("");
  ed_clntNo.setValue("");
  txt_clntNm.setValue("");
  lc_repKcgCd.setValue("");
  ed_commCd.setValue("");
  txt_commNm.setValue("");
  ed_tmlYardCd.setValue("");
  txt_tmlYardNm.setValue("");
  lc_pdaWrkPicNo.setValue("");
  ed_blBkNo.setValue("");
  ed_cvsslMgntNo.setValue("");
  lc_wrkPatternCd.setValue("");
  lc_wrkIndictPrgsStsCd.setValue("");
  lc_wrkPlCd.setValue("");
};
scwin.f_WinClose = function () {
  $c.win.closePopup($p, ["N/A"]);
};
scwin.ed_commCd_onblur = function (e) {
  scwin.f_openKcgCdPopUp();
};
scwin.ed_clntNo_onblur = function (e) {
  scwin.f_openClntPopUp();
};
scwin.ed_tmlYardCd_onblur = function (e) {
  scwin.f_openTmlYardPopUp();
};
scwin.ed_blBkNo_onblur = function (e) {
  scwin.f_openBlBkNoPopUp();
};
scwin.ed_cvsslMgntNo_onblur = function (e) {
  scwin.f_openCvsslMgntNoPopUp();
};
scwin.gr_retrieveWrkPlan_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex < 0) return;
  let rtnValues = [];
  rtnValues[0] = ds_retrieveWrkPlan.getCellData(rowIndex, "wrkIndictNo");
  $c.win.closePopup($p, rtnValues);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_fieldClear();
};
scwin.btn_close_onclick = function (e) {
  scwin.f_WinClose();
};
scwin.btn_blBkNo_onclick = function (e) {
  scwin.f_openBlBkNoPopUp();
};
scwin.btn_cvsslMgntNo_onclick = function (e) {
  scwin.f_openCvsslMgntNoPopUp();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkDt',pickerType:'dynamic',style:'',ref:'data:ds_condition.wrkDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업시프트 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_wrkShift',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_condition.wrkShift',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업지시번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_wrkIndictNo',placeholder:'',style:'width:150px;',ref:'data:ds_condition.wrkIndictNo'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_clnt',codeId:'ed_clntNo',nameId:'txt_clntNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_repKcgCd',search:'start',style:'width:80px;',submenuSize:'auto',ref:'data:ds_condition.repKcgCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_comm',codeId:'ed_commCd',nameId:'txt_commNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장치장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_tmlYard',codeId:'ed_tmlYardCd',nameId:'txt_tmlYardNm',hideName:'Y',popupID:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_pdaWrkPicNo',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_condition.pdaWrkPicNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BL/BK 번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_blBkNo',placeholder:'',style:'width: 150px;',ref:'data:ds_condition.blBkNo'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_blBkNo',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width: 150px;'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'진행상태 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_wrkIndictPrgsStsCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_condition.wrkIndictPrgsStsCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업유형 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_wrkPatternCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_condition.wrkPatternCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_wrkPlCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_condition.wrkPlCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'벌크 작업 지시 검색',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_retrieveWrkPlan',id:'gr_retrieveWrkPlan',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictNo',inputType:'text',style:'',value:'작업지시번호',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',style:'',value:'작업단위',width:'140',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkShift',inputType:'text',style:'',value:'작업지시',width:'210',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'indictQty',inputType:'text',style:'',value:'작업실적',width:'210',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'indictWt',inputType:'text',style:'',value:'진행상태',width:'100',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkIndictNo',value:'일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'wrkDt',value:'시프트',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkShift',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'indictQty',value:'중량(톤)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'indictWt',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'indictCbm',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'rsltsQty',value:'중량(톤)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rsltsWt',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictNo',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',style:'',value:'',width:'70',readOnly:'true',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkShift',inputType:'text',style:'',value:'',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'indictQty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'indictWt',inputType:'text',style:'',value:'',width:'80',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'indictCbm',inputType:'text',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsQty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsWt',inputType:'text',style:'',value:'',width:'80',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsCbm',inputType:'text',style:'',value:'',width:'70',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictPrgsStsCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column38',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column37',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'indictQty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column36',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'indictWt\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column35',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'indictCbm\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column34',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'rsltsQty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column33',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'rsltsWt\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column32',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'rsltsCbm\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})