/*amd /AI/tb_030_01_02p.xml 17520 dab045a63907869ff738f4740da2866c67f3ef33e021103a5f51d48768a8dddd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vesselMng',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoPortcnt',name:'선사항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDtm',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslPurpsNm',name:'선박용도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planPrscond',name:'본선계획현황',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCreateYn',name:'오더여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'마감일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'마감시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHh',name:'출발시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierCd',name:'부두코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierNm',name:'부두코드명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_lobran","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_lobran","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'scwin.sbm_lobran_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveTerminalCarryingVesselManagementNumberCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_vesselMng","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_vesselMng","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.loUpperLobranCd = "4AA";
scwin.cvsslMgntNo = "";
scwin.impExpClsCd = "";
scwin.vCurDate = "";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  if (scwin.params != null) {
    if (scwin.params["cvsslMgntNo"] != null) {
      scwin.cvsslMgntNo = scwin.params["cvsslMgntNo"].trim();
    }
    if (scwin.params["impExpClsCd"] != null) {
      scwin.impExpClsCd = scwin.params["impExpClsCd"];
    }
  }
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.f_loadLobran();
};
scwin.onUdcCompleted = function () {
  scwin.f_setDate();
};
scwin.f_loadLobran = async function () {
  await $c.sbm.execute($p, sbm_lobran);
};
scwin.sbm_lobran_submitdone = function (e) {
  let rowCnt = ds_lobran.getRowCount();
  if (rowCnt == 0) return;
  ds_lobran.insertRow(0);
  ds_lobran.setCellData(0, "lobranCd", "");
  ds_lobran.setCellData(0, "lobranNm", "전체");
  lc_lobran.setNodeSet("data:ds_lobran", "lobranNm", "lobranCd");
  if (scwin.cvsslMgntNo == "") {
    let idx = scwin.f_findLobranIndex(scwin.loUpperLobranCd);
    if (idx >= 0) {
      lc_lobran.setSelectedIndex(idx);
    } else {
      lc_lobran.setSelectedIndex(0);
    }
  } else {
    lc_lobran.setSelectedIndex(0);
  }
  em_cvsslMgntNo.setValue(scwin.cvsslMgntNo);
  scwin.f_setImpExpClsCd(scwin.impExpClsCd);
  scwin.f_setDate();
  lc_lobran.setFocus();
  scwin.f_Retrieve();
};
scwin.sbm_lobran_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_findLobranIndex = function (lobranCd) {
  for (let i = 0; i < ds_lobran.getRowCount(); i++) {
    if (ds_lobran.getCellData(i, "lobranCd") == lobranCd) {
      return i;
    }
  }
  return -1;
};
scwin.f_setImpExpClsCd = function (impExpClsCd) {
  if (impExpClsCd == "") {
    lc_impExpClsCd.setSelectedIndex(0);
  } else {
    lc_impExpClsCd.setValue(impExpClsCd);
  }
};
scwin.f_setDate = function () {
  let dateStr = scwin.vCurDate.substring(0, 6);
  if (scwin.cvsslMgntNo != "" && scwin.cvsslMgntNo.length > 4) {
    dateStr = dateStr.substring(0, 2) + scwin.cvsslMgntNo.substring(1, 5);
  }
  let firstDate = dateStr + "01";
  let year = parseInt(firstDate.substring(0, 4), 10);
  let month = parseInt(firstDate.substring(4, 6), 10);
  let nextMonth = month + 1;
  let nextYear = year;
  if (nextMonth > 12) {
    nextMonth = 1;
    nextYear = year + 1;
  }
  let nextMonthStr = String(nextYear) + $c.str.lpad($p, String(nextMonth), 2, "0") + "01";
  let endDt = $c.date.addDate($p, nextMonthStr, -1);
  let startDt = firstDate;
  udc_qryDt.setInitDate(startDt, endDt);
};
scwin.f_Retrieve = async function () {
  let stDt = udc_qryDt.getFromValue();
  let edDt = udc_qryDt.getToValue();
  if (stDt == "" || edDt == "") {
    await $c.gus.cfAlertMsg($p, "MSG_CM_ERR_002", ["입항예정일자"]);
    return;
  }
  if (stDt > edDt) {
    await $c.gus.cfAlertMsg($p, "MSG_CM_ERR_039");
    udc_qryDt.setFocusTo();
    return;
  }
  let lobranCd = lc_lobran.getValue();
  let cvsslMgntNoVal = em_cvsslMgntNo.getValue().trim();
  let impExpClsCdVal = lc_impExpClsCd.getValue();
  let mrnVal = ed_mrn.getValue().trim();
  sbm_retrieve.action = "/ds.op.rscconfirm.transrscconfirm.RetrieveTerminalCarryingVesselManagementNumberCMD.do" + "?lobranCd=" + lobranCd + "&shpCoClntNo=" + "&vsslCd=" + "&qryStDt=" + stDt + "&qyrEndDt=" + edDt + "&cvsslMgntNo=" + cvsslMgntNoVal + "&impExpClsCd=" + impExpClsCdVal + "&mrn=" + mrnVal;
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_vesselMng.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
  } else if (rowCnt == 1 && scwin.cvsslMgntNo == ds_vesselMng.getCellData(0, "cvsslMgntNo")) {
    let rtnValues = [];
    rtnValues[0] = ds_vesselMng.getCellData(0, "cvsslMgntNo");
    rtnValues[1] = ds_vesselMng.getCellData(0, "vsslCd");
    rtnValues[2] = ds_vesselMng.getCellData(0, "vsslNm");
    rtnValues[3] = ds_vesselMng.getCellData(0, "closeDt");
    rtnValues[4] = ds_vesselMng.getCellData(0, "closeHh");
    rtnValues[5] = ds_vesselMng.getCellData(0, "arvDt");
    rtnValues[6] = ds_vesselMng.getCellData(0, "arvHh");
    rtnValues[7] = ds_vesselMng.getCellData(0, "dptDt");
    rtnValues[8] = ds_vesselMng.getCellData(0, "dptHh");
    rtnValues[9] = ds_vesselMng.getCellData(0, "shpCoPortcnt");
    rtnValues[10] = "";
    rtnValues[11] = ds_vesselMng.getCellData(0, "portCd");
    rtnValues[12] = ds_vesselMng.getCellData(0, "pierCd");
    rtnValues[13] = ds_vesselMng.getCellData(0, "pierNm");
    rtnValues[14] = ds_vesselMng.getCellData(0, "lineCd");
    $c.win.closePopup($p, rtnValues);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_vesselMng_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex < 0) return;
  let rtnValues = [];
  rtnValues[0] = ds_vesselMng.getCellData(rowIndex, "cvsslMgntNo");
  rtnValues[1] = ds_vesselMng.getCellData(rowIndex, "vsslCd");
  rtnValues[2] = ds_vesselMng.getCellData(rowIndex, "vsslNm");
  rtnValues[3] = ds_vesselMng.getCellData(rowIndex, "closeDt");
  rtnValues[4] = ds_vesselMng.getCellData(rowIndex, "closeHh");
  rtnValues[5] = ds_vesselMng.getCellData(rowIndex, "arvDt");
  rtnValues[6] = ds_vesselMng.getCellData(rowIndex, "arvHh");
  rtnValues[7] = ds_vesselMng.getCellData(rowIndex, "dptDt");
  rtnValues[8] = ds_vesselMng.getCellData(rowIndex, "dptHh");
  rtnValues[9] = ds_vesselMng.getCellData(rowIndex, "shpCoPortcnt");
  rtnValues[10] = "";
  rtnValues[11] = ds_vesselMng.getCellData(rowIndex, "portCd");
  rtnValues[12] = ds_vesselMng.getCellData(rowIndex, "pierCd");
  rtnValues[13] = ds_vesselMng.getCellData(rowIndex, "pierNm");
  rtnValues[14] = ds_vesselMng.getCellData(rowIndex, "lineCd");
  $c.win.closePopup($p, rtnValues);
};
scwin.f_chkOpenCommonPopUpEmEdit = function (gubun, chkObj, txtObj, disGubun, pAllSearch) {
  let pCode = "";
  let pName = "";
  if (gubun == 1) {
    txtObj.setValue("");
    if (chkObj.getValue() == "") return;
  }
  pCode = chkObj.getValue().replace(/^\s*/, '');
  pName = txtObj.getValue();
  scwin.f_openCommonPopUp(disGubun, pCode, pName, 'T', pAllSearch);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [lc_lobran, lc_impExpClsCd]);
  if (scwin.cvsslMgntNo == "") {
    let idx = scwin.f_findLobranIndex(scwin.loUpperLobranCd);
    if (idx >= 0) {
      lc_lobran.setSelectedIndex(idx);
    } else {
      lc_lobran.setSelectedIndex(0);
    }
  } else {
    lc_lobran.setSelectedIndex(0);
  }
  scwin.f_setDate();
  lc_lobran.setFocus();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.closeBtn_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lobran',search:'start',style:'width:150px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'em_cvsslMgntNo',placeholder:'',style:'width:85px;',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width:85px;',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_impExpClsCd',search:'start',style:'width:150px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입항예정일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_qryDt',refDataMap:'',refEdDt:'ica_qryEndDt',refStDt:'ica_qryStDt',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_vesselMng',id:'gr_vesselMng',style:'',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',value:'본선<br/>관리번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',value:'선박명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',value:'MRN',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslPurpsNm',inputType:'text',value:'선박용도',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',value:'LINE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shpCoPortcnt',inputType:'text',value:'항차',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvIntendDtm',inputType:'text',value:'입항일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',value:'관리<br/>점소',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'text',value:'수출입<br/>구분',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planPrscond',inputType:'text',value:'본선<br/>계획현황',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrCreateYn',value:'오더여부<br/>(수입/수출)',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslPurpsNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shpCoPortcnt',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvIntendDtm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'select',width:'80',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I/'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'/O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입/수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I/O'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'planPrscond',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrCreateYn',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'closeBtn',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})