/*amd /AI/op_101_02_05p.xml 17690 58590e94378a6ee14afb110bd2de063ca6534767bf92597146f0afaffd1306a5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vsslCls',name:'선종구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'workGubun',name:'작업구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptArvCls',name:'출발도착구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptIntendDt',name:'출발예정일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvIntendDt',name:'도착예정일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vsslCd',name:'선명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslYn',name:'연안선본선구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impPortcntCd',name:'수입항차코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expPortcntCd',name:'수출항차코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprtportPortCd',name:'출발항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprtportPortNm',name:'출발항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportPortCd',name:'도착항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportPortNm',name:'도착항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendDt',name:'출발예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendHh',name:'출발예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'도착예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendHh',name:'도착예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHh',name:'출발시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtHh',name:'입항도착예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtHh',name:'출항출발예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'적하목록관리번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveVesselNamePortCountCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_emp","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_emp","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sUserId = "";
scwin.sUserClsCd = "";
scwin.sClntNo = "";
scwin.sClntNm = "";
scwin.vsslClsParam = "";
scwin.strFromDate = "";
scwin.strToDate = "";
scwin.strDate = "";
scwin.strAllSearchTF = "";
scwin.nLenCD = "";
scwin.nLenNM = "";
scwin.onpageload = function () {
  scwin.sUserId = $c.ses.getUserId();
  scwin.sUserClsCd = $c.ses.getUserClsCd() == null ? "" : $c.ses.getUserClsCd();
  scwin.sClntNo = $c.ses.getClntNo() == null ? "" : $c.ses.getClntNo();
  scwin.sClntNm = $c.ses.getClntNm() == null ? "" : $c.ses.getClntNm();
  let params = $c.data.getParameter($p);
  scwin.vsslClsParam = params != null && params["vsslCls"] != null ? params["vsslCls"] : "";
  scwin.strFromDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strToDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.strDate = scwin.strFromDate + scwin.strToDate;
  let codeOptions = [{
    grpCd: "OP190",
    compID: "co_lc_workGubun"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  udc_intendDt.setInitDate(scwin.strFromDate, scwin.strToDate);
  if (scwin.vsslClsParam == "1") {
    vsslCls.setValue("1");
    dptArvCls.setValue("2");
    dptArvCls.setDisabled(true);
  } else {
    vsslCls.setValue("0");
    dptArvCls.setValue("1");
  }
};
scwin.f_ByteLengthChk = async function (str1, str2) {
  if (scwin.strAllSearchTF == "T") return true;
  let len1 = $c.gus.cfGetByteLength($p, str1);
  let len2 = $c.gus.cfGetByteLength($p, str2);
  if ($c.gus.cfValidateValue($p, scwin.nLenCD, "isNumber=1~100") && len1 > 0) {
    if (len1 < scwin.nLenCD) {
      await $c.win.alert($p, "검색어를 " + scwin.nLenCD + "자리 이상 입력 하세요");
      txt_Condition1.setFocus();
      return false;
    }
  }
  if ($c.gus.cfValidateValue($p, scwin.nLenNM, "isNumber=1~100") && len2 > 0) {
    if (len2 < scwin.nLenNM) {
      await $c.win.alert($p, "검색어를 " + scwin.nLenNM + "자리 이상 입력 하세요");
      txt_Condition2.setFocus();
      return false;
    }
  }
  if (len1 == 0 && len2 == 0) {
    txt_Condition2.setFocus();
    return false;
  } else if (len1 < 1 && len2 < 2) {
    await $c.win.alert($p, "검색어는\n\n숫자(문자)=> 1자\n한글=> 1자\n\n이상을 입력하세요...");
    txt_Condition2.setFocus();
    return false;
  }
  return true;
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  udc_intendDt.setInitDate(scwin.strFromDate, scwin.strToDate);
  portCd.setFocus();
};
scwin.f_WinClose = function () {
  let arrRtnVal = [];
  arrRtnVal[0] = [];
  arrRtnVal[0][0] = "N/A";
  $c.win.closePopup($p, arrRtnVal);
};
scwin.f_Retrieve = async function () {
  let startDate = "";
  let endDate = "";
  startDate = ica_dptIntendDt.getValue();
  endDate = ica_arvIntendDt.getValue();
  if (portCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["항명코드"]);
    portCd.setFocus();
    return;
  }
  if (portNm.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["항명"]);
    portNm.setFocus();
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, startDate, endDate, false)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  dma_retrieve.set("vsslCls", vsslCls.getValue());
  dma_retrieve.set("workGubun", co_lc_workGubun.getValue());
  dma_retrieve.set("dptArvCls", dptArvCls.getValue());
  dma_retrieve.set("portCd", portCd.getValue());
  dma_retrieve.set("dptIntendDt", startDate);
  dma_retrieve.set("arvIntendDt", endDate);
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_rtnValue = function (rowVal) {
  let arrRtnVal = new Array(17);
  if (ds_emp.getCellData(rowVal, "vsslYn") == "0") {
    arrRtnVal[0] = ds_emp.getCellData(rowVal, "vsslCd");
    arrRtnVal[1] = ds_emp.getCellData(rowVal, "vsslYn");
    arrRtnVal[2] = ds_emp.getCellData(rowVal, "portcnt");
    arrRtnVal[3] = ds_emp.getCellData(rowVal, "deprtportPortCd");
    arrRtnVal[4] = ds_emp.getCellData(rowVal, "arrvlportPortCd");
    arrRtnVal[5] = ds_emp.getCellData(rowVal, "dptIntendDt");
    arrRtnVal[6] = ds_emp.getCellData(rowVal, "dptIntendHh");
    arrRtnVal[7] = ds_emp.getCellData(rowVal, "arvIntendDt");
    arrRtnVal[8] = ds_emp.getCellData(rowVal, "arvIntendHh");
    arrRtnVal[9] = ds_emp.getCellData(rowVal, "dptDt");
    arrRtnVal[10] = ds_emp.getCellData(rowVal, "dptHh");
    arrRtnVal[11] = ds_emp.getCellData(rowVal, "arvDt");
    arrRtnVal[12] = ds_emp.getCellData(rowVal, "arvHh");
    arrRtnVal[13] = ds_emp.getCellData(rowVal, "vsslNm");
    arrRtnVal[14] = ds_emp.getCellData(rowVal, "arrvlportPortNm");
    arrRtnVal[15] = ds_emp.getCellData(rowVal, "mrn");
  } else {
    arrRtnVal[0] = ds_emp.getCellData(rowVal, "vsslCd");
    arrRtnVal[1] = ds_emp.getCellData(rowVal, "vsslYn");
    arrRtnVal[2] = ds_emp.getCellData(rowVal, "impPortcntCd");
    arrRtnVal[3] = ds_emp.getCellData(rowVal, "expPortcntCd");
    arrRtnVal[4] = ds_emp.getCellData(rowVal, "deprtportPortCd");
    arrRtnVal[5] = ds_emp.getCellData(rowVal, "arrvlportPortCd");
    arrRtnVal[6] = ds_emp.getCellData(rowVal, "dptIntendDt");
    arrRtnVal[7] = ds_emp.getCellData(rowVal, "dptIntendHh");
    arrRtnVal[8] = ds_emp.getCellData(rowVal, "arvIntendDt");
    arrRtnVal[9] = ds_emp.getCellData(rowVal, "arvIntendHh");
    arrRtnVal[10] = ds_emp.getCellData(rowVal, "dptDt");
    arrRtnVal[11] = ds_emp.getCellData(rowVal, "dptHh");
    arrRtnVal[12] = ds_emp.getCellData(rowVal, "arvDt");
    arrRtnVal[13] = ds_emp.getCellData(rowVal, "arvHh");
    arrRtnVal[14] = ds_emp.getCellData(rowVal, "vsslNm");
    arrRtnVal[15] = ds_emp.getCellData(rowVal, "arrvlportPortNm");
    arrRtnVal[16] = ds_emp.getCellData(rowVal, "mrn");
  }
  $c.win.closePopup($p, arrRtnVal);
};
scwin.f_openPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList = [];
  if (vsslCls.getValue() == "1") {
    udc_port.ilCommonPopUp(scwin.callbackPortCode, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "항구명,항구코드,항구명", null);
  } else {
    udc_port.ilCommonPopUp(scwin.callbackPortCode, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "부두명,부두코드,부두명", null);
  }
};
scwin.callbackPortCode = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, portCd, portNm);
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) scwin.f_openPopUp(disGubun, pVal, '', 'T', 'T');else scwin.f_openPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.portCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(portCd, portNm, '1');
};
scwin.vsslCls_onviewchange = function (e) {
  if (vsslCls.getValue() == "1") {
    dptArvCls.setValue("2");
    dptArvCls.setDisabled(true);
  } else {
    dptArvCls.setDisabled(false);
  }
};
scwin.gr_emp_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    scwin.f_rtnValue(rowIndex);
  }
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_emp.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
  }
  $c.gus.cfShowTotalRows($p, totalRows, rowCnt);
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'flex_gvw',id:''},E:[{T:1,N:'xf:group',A:{class:'content',id:''},E:[{T:1,N:'xf:group',A:{class:'shbox w-auto',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회대상',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'vsslCls',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'연안선'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'본선'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w110',editType:'select',id:'co_lc_workGubun',search:'start',style:'',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'dptArvCls',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출발'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'도착'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부두/항명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_port',codeId:'portCd',nameId:'portNm',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예정일시 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_intendDt',edFromId:'ica_dptIntendDt',edToId:'ica_arvIntendDt',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_emp',id:'gr_emp',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',value:'선명',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portcnt',inputType:'text',value:'항차',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deprtportPortNm',inputType:'text',value:'출발항',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrvlportPortNm',inputType:'text',value:'도착항',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDtHh',inputType:'text',value:'입항/도착(예정)일시',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDtHh',inputType:'text',value:'출항/출발(예정)일시',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',value:'적하목록관리번호',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portcnt',inputType:'text',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deprtportPortNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrvlportPortNm',inputType:'text',width:'80',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDtHh',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDtHh',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',width:'150'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]}]})