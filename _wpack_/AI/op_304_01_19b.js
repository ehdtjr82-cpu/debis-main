/*amd /AI/op_304_01_19b.xml 29916 73c1d7cf30a456cb118c2ba6e990063bc074e04261a8cd66d588410503b2a8eb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkCls',name:'작업구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'realMchtClnt',name:'화주거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoCd',name:'협력업체거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'장비코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKnd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transKnd',name:'운송종류',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrWrkRslts',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'컨테이너/품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'Sz',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'Tp',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtm',name:'출발시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtm',name:'도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'Line',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'하불임',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcPchsAmt',name:'할증',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'중량단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkDtlInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'컨테이너/품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'Sz',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'Tp',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtm',name:'출발시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtm',name:'도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'Line',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'하불임',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcPchsAmt',name:'할증',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'중량단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrKnd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retreive',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveTransTpchsFareDayEachCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_srchCond","key":"IN_DS1"},{"id":"ds_cntrWrkRslts","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_cntrWrkRslts","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retreive_submitdone','ev:submiterror':'scwin.sbm_retreive_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sUserId = "";
scwin.sUserClsCd = "";
scwin.sClntNo = "";
scwin.sClntNm = "";
scwin.sLoUpperLobranCd = "";
scwin.vCurDate = "";
scwin.strFromDate = "";
scwin.strToDate = "";
scwin.strDate = "";
scwin.vehclNoCd = "";
scwin.txt_srchMchtClntNm = "";
scwin.onpageload = async function () {
  scwin.sUserId = $c.ses.getUserId();
  scwin.sUserClsCd = $c.ses.getUserClsCd();
  scwin.sClntNo = $c.ses.getClntNo();
  scwin.sClntNm = $c.ses.getClntNm();
  scwin.sLoUpperLobranCd = $c.ses.getLoUpperLobranCd();
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strFromDate = scwin.vCurDate;
  scwin.strToDate = scwin.vCurDate;
  scwin.strDate = scwin.strFromDate + scwin.strToDate;
  let codeOptions = [{
    grpCd: "OP190",
    compID: "co_lc_srchWrkClsCd"
  }, {
    grpCd: "SD113",
    compID: "acb_srchOdrKnd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = async function () {
  udc_srchWrkDt.setInitDate(scwin.vCurDate, scwin.vCurDate);
  co_lc_srchWrkClsCd.setSelectedIndex(0);
  if (scwin.sLoUpperLobranCd != "") {
    let idx = acb_transKnd.getItemIndex(scwin.sLoUpperLobranCd);
    if (idx > 0) {
      acb_transKnd.setSelectedIndex(idx);
    } else {
      acb_transKnd.setSelectedIndex(0);
    }
  } else {
    acb_transKnd.setSelectedIndex(0);
  }
  acb_transKnd.setSelectedIndex(0);
};
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [ica_srchWrkStDt, ica_srchWrkEndDt]);
  if (!chk) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_srchWrkStDt.getValue(), ica_srchWrkEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ica_srchWrkStDt.setFocus();
    return;
  }
  scwin.f_ProcessBinding();
  await $c.sbm.execute($p, sbm_retreive);
};
scwin.f_ProcessBinding = async function () {
  dma_srchCond.set("lobranCd", acb_transKnd.getValue());
  dma_srchCond.set("wrkStDt", ica_srchWrkStDt.getValue());
  dma_srchCond.set("wrkEndDt", ica_srchWrkEndDt.getValue());
  dma_srchCond.set("wrkCls", co_lc_srchWrkClsCd.getValue());
  dma_srchCond.set("commCd", txt_srchCommCd.getValue());
  dma_srchCond.set("realMchtClnt", txt_srchMchtClntNo.getValue());
  dma_srchCond.set("copCoCd", txt_srchCopCoCd.getValue());
  dma_srchCond.set("vehclNo", txt_srchVehclNo.getValue());
  dma_srchCond.set("odrKnd", acb_srchOdrKnd.getValue());
  dma_srchCond.set("transKnd", acb_transKnd.getValue());
};
scwin.f_openPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  if (disGubun == "1") {
    if (txt_srchMchtClntNo.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["화주코드"]);
      txt_srchCommCd.setValue("");
      scwin.txt_srchCommNm = "";
      txt_srchMchtClntNo.setFocus();
      return;
    }
    if (scwin.txt_srchMchtClntNm == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["화주명"]);
      txt_srchCommCd.setValue("");
      scwin.txt_srchCommNm = "";
      txt_srchMchtClntNo.setFocus();
      return;
    }
    let param = ",,,," + txt_srchMchtClntNo.getValue();
    udc_srchComm.ilCommonPopUp(scwin.callbackCommInfo, pCode, pName, pClose, null, null, null, null, param, null, null, null, null, null, pAllSearch, "품명,품명코드,품명명");
  } else if (disGubun == "2") {
    udc_srchComm.ilCommonPopUp(scwin.callbackMchtClntInfo, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "화주,화주코드,화주명");
  } else if (disGubun == "3") {
    udc_srchCopCo.ilCommonPopUp(scwin.callbackCopCoInfo, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "협력업체,협력업체코드,협력업체명");
  } else {
    udc_srchEq.ilCommonPopUp(scwin.callbackVehclInfo, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "차량번호,차량번호단축코드,차량번호명");
  }
};
scwin.callbackCommInfo = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, txt_srchCommCd, txt_srchCommNm);
};
scwin.callbackMchtClntInfo = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, txt_srchMchtClntNo, txt_srchMchtClntNm);
};
scwin.callbackCopCoInfo = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, txt_srchCopCoCd, txt_srchCopCoNm);
};
scwin.callbackVehclInfo = async function (rtnList) {
  if (rtnList != null && rtnList.length > 0) {
    txt_srchEqCd.setValue(rtnList[0] || "");
    txt_srchVehclNo.setValue(rtnList[1] || "");
    scwin.vehclNoCd = rtnList[2] || "";
  }
};
scwin.f_OpenDtlPopup = async function (row) {
  let obj = {};
  let colCount = ds_cntrWrkRslts.getColCount();
  for (let c = 0; c < colCount; c++) {
    let colId = ds_cntrWrkRslts.getColumnID(c);
    obj[colId] = ds_cntrWrkRslts.getCellData(row, colId);
  }
  await $c.win.openPopup($p, "/ui/ds/op/wrkrslts/transwrkrslts/op_304_01_19p.xml", {
    width: 800,
    height: 385,
    modal: true,
    data: obj
  });
};
scwin.cfSetReturnValue = async function (rtnList, codeObj, nameObj, hideObj) {
  if (rtnList == null) {
    rtnList = ["", "", ""];
  } else if (rtnList[0] == "N/A") {
    if (codeObj != null && codeObj.getValue != undefined) {
      if (codeObj.hidVal != null) {
        codeObj.setValue(codeObj.hidVal);
      } else {
        codeObj.setValue("");
      }
    }
    if (nameObj != null && nameObj.getValue != undefined) {
      if (nameObj.hidVal != null) {
        nameObj.setValue(nameObj.hidVal);
      } else {
        nameObj.setValue("");
      }
    }
    if (hideObj != null) {
      if (hideObj.hidVal != null) {
        hideObj.value = hideObj.hidVal;
      } else {
        hideObj.value = "";
      }
    }
    return;
  }
  if (codeObj != null && codeObj.setValue != undefined) {
    codeObj.setValue(rtnList[0]);
  }
  if (codeObj != null) {
    codeObj.hidVal = rtnList[0];
  }
  if (nameObj != null && nameObj.setValue != undefined) {
    nameObj.setValue(rtnList[1]);
  }
  if (nameObj != null) {
    nameObj.hidVal = rtnList[1];
  }
  if (hideObj != null) {
    hideObj.value = rtnList[2];
  }
};
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    if (disGubun == 4) {
      scwin.vehclNoCd = "";
    }
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    scwin.f_openPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_Reset = async function () {
  $c.gus.cfInitObjects($p, [tb_searchCondition]);
  udc_srchWrkDt.setInitDate(scwin.vCurDate, scwin.vCurDate);
};
scwin.f_excel = async function (gubun) {
  $c.data.downloadGridViewExcel($p, gr_cntrWrkRslts, {
    fileName: "운송하불임일별현황.xlsx",
    sheetName: "운송하불임일별현황"
  });
};
scwin.f_grdHeiht = async function (objGrdId, size) {
  let objGrd = $p.getComponentById(objGrdId);
  if (objGrd != null) {
    let strHeight = objGrd.getStyle("height");
    let intHeight = parseInt(strHeight.replace("px", ""));
    intHeight = intHeight + size;
    if (intHeight > 0) {
      objGrd.setStyle("height", intHeight + "px");
    }
  }
};
scwin.sbm_retreive_submitdone = async function (e) {
  if (ds_cntrWrkRslts.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
  }
  spa_totalRow.setValue(ds_cntrWrkRslts.getTotalRow());
};
scwin.sbm_retreive_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.co_lc_srchWrkClsCd_onchange = function (e) {
  let chkVal = co_lc_srchWrkClsCd.getValue();
  if (chkVal == "B") {
    gr_cntrWrkRslts.setColumnVisible("cntrSizCd", false);
    gr_cntrWrkRslts.setColumnVisible("cntrTypCd", false);
    gr_cntrWrkRslts.setColumnVisible("fullEmptyClsCd", false);
    gr_cntrWrkRslts.setColumnVisible("qty", true);
    gr_cntrWrkRslts.setColumnVisible("unitCd", true);
    gr_cntrWrkRslts.setColumnVisible("grossWt", true);
    gr_cntrWrkRslts.setColumnVisible("cbm", true);
    txt_srchCommCd.setDisabled(false);
    txt_srchCommNm.setDisabled(false);
    acb_transKnd.setDisabled(true);
  } else if (chkVal == "C") {
    gr_cntrWrkRslts.setColumnVisible("cntrSizCd", true);
    gr_cntrWrkRslts.setColumnVisible("cntrTypCd", true);
    gr_cntrWrkRslts.setColumnVisible("fullEmptyClsCd", true);
    gr_cntrWrkRslts.setColumnVisible("qty", false);
    gr_cntrWrkRslts.setColumnVisible("unitCd", false);
    gr_cntrWrkRslts.setColumnVisible("grossWt", false);
    gr_cntrWrkRslts.setColumnVisible("cbm", false);
    txt_srchCommCd.setDisabled(true);
    txt_srchCommNm.setDisabled(true);
    acb_transKnd.setDisabled(false);
  }
};
scwin.gr_cntrWrkRslts_oncellclick = function (rowIndex, columnIndex, columnId) {};
scwin.txt_srchCommCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_srchCommCd, txt_srchCommNm, '1');
};
scwin.txt_srchCopCoCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_srchCopCoCd, txt_srchCopCoNm, '3');
};
scwin.txt_srchEqCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_srchEqCd, txt_srchVehclNo, '4');
};
scwin.co_lc_srchLobran_onchange = function (e) {};
scwin.ds_odrKnd_onloadcompleted = function (e) {
  ds_odrKnd.insertRow(0);
  ds_odrKnd.setCellData(0, "cd", "");
  ds_odrKnd.setCellData(0, "cdNm", "전체");
  acb_srchOdrKnd.setSelectedIndex(0);
};
scwin.btn_trigger1_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_refresh_onclick = function (e) {
  scwin.f_Reset();
};
scwin.btn_trigger2_onclick = async function (e) {
  scwin.f_openPopUp('2', txt_srchMchtClntNo.getValue(), scwin.txt_srchMchtClntNm, 'F', 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_transKnd',search:'start',style:'width: 150px;',submenuSize:'fixed'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_srchWrkDt',refEdDt:'',edFromId:'ica_srchWrkStDt',edToId:'ica_srchWrkEndDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'fixed',editType:'select',style:'width:100px;',id:'acb_srchOdrKnd',class:''}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'fixed',editType:'select',style:'width:100px;',id:'acb_transKnd',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처품명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_srchComm',codeId:'txt_srchCommCd',nameId:'txt_srchCommNm',popupID:'',selectID:'',style:'',validTitle:''}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'txt_srchMchtClntNo',style:'width: 150px;',mandatory:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_trigger2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_srchCopCo',popupID:'',selectID:'',codeId:'txt_srchCopCoCd',validTitle:'',nameId:'txt_srchCopCoNm',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_srchEq',codeId:'txt_srchEqCd',nameId:'txt_srchVehclNo',popupID:'',selectID:'',style:'',validTitle:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_srchOdrKnd',search:'start',style:'width: 150px;',submenuSize:'fixed'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'운송 하불임 일별 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_cntrWrkRslts',focusMode:'row',id:'gr_cntrWrkRslts',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'copCoClntNm',inputType:'text',style:'',value:'협력업체',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'차량번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',style:'',value:'컨테이너/품명',width:'130',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',style:'',value:'규격',width:'210',colSpan:'3',rowSpan:'',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',style:'',value:'출발지',width:'100',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',style:'',value:'도착지',width:'70',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',style:'',value:'출발시간',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvWrkPlNm',value:'도착시간',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dptDtm',value:'오더번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'arvDtm',value:'Line',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrNo',value:'하불임',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'lineCd',value:'화주명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt',value:'할증',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgClntNm',value:'매출액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dcPchsAmt',value:'수량',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmt',value:'중량단위',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'qty',value:'중량',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'unitCd',value:'CBM',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'copCoClntNm',value:'Sz',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vehclNo',value:'Tp',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commNm',value:'FE',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'copCoClntNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',style:'',value:'',width:'130',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDtm',inputType:'text',style:'',value:'',width:'100',readOnly:'true',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvDtm',value:'',displayMode:'label',readOnly:'true',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrNo',value:'',displayMode:'label',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lineCd',value:'',displayMode:'label',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsAmt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bilgClntNm',value:'',displayMode:'label',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dcPchsAmt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sellAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'qty',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'unitCd',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'grossWt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cbm',value:'',displayMode:'label',readOnly:'true',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column101',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column89',value:'',displayMode:'label',expression:'sum(\'pchsAmt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column81',value:'',displayMode:'label',expression:'sum(\'dcPchsAmt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'sellAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column73',value:'',displayMode:'label',expression:'sum(\'qty\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column65',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'grossWt\')',dataType:'float',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',expression:'sum(\'cbm\')',dataType:'float',displayFormat:'#,##0.000',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})