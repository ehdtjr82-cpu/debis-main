/*amd /AI/op_302_01_28p.xml 11807 2877c6c57e1679a67c06c505c9ade1478a47e3953eecd9bea3f93663ebf179e7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkClsCd',name:'작업구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'적하목록관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hsn',name:'HSN',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_CarryingOutAdmInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crryoutAdmitNo',name:'반출승인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carryoutYn',name:'반출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'통보일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutAdmitPattern',name:'반출유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutAdmitPatternNm',name:'반출유형코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totPackCnt',name:'승인수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totWt',name:'승인중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockCnt',name:'승인잔고수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'승인잔고중량',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveCarryingOutAdmissionContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_CarryingOutAdmInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_CarryingOutAdmInfo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'scwin.sbm_Retrieve_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.rwrkClsCd = "";
scwin.rwrkPlCd = "";
scwin.rwrkPlNm = "";
scwin.rmrn = "";
scwin.rmsn = "";
scwin.rhsn = "";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  if (scwin.params != null) {
    scwin.rwrkClsCd = scwin.params["rwrkClsCd"] || "";
    scwin.rwrkPlCd = scwin.params["rwrkPlCd"] || "";
    scwin.rwrkPlNm = scwin.params["rwrkPlNm"] || "";
    scwin.rmrn = scwin.params["rmrn"] || "";
    scwin.rmsn = scwin.params["rmsn"] || "";
    scwin.rhsn = scwin.params["rhsn"] || "";
  }
};
scwin.onUdcCompleted = function () {
  lc_wrkClsCd.setValue(scwin.rwrkClsCd);
  ed_wrkPlCd.setValue(scwin.rwrkPlCd);
  txt_wrkPlNm.setValue(scwin.rwrkPlNm);
  ed_mrn.setValue(scwin.rmrn);
  ed_msn.setValue(scwin.rmsn);
  ed_hsn.setValue(scwin.rhsn);
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [lc_wrkClsCd, ed_wrkPlCd, ed_mrn, ed_msn, ed_hsn]);
  if (!chk) {
    return;
  }
  dma_condition.set("wrkClsCd", lc_wrkClsCd.getValue());
  dma_condition.set("wrkPlCd", ed_wrkPlCd.getValue());
  dma_condition.set("mrn", ed_mrn.getValue());
  dma_condition.set("msn", ed_msn.getValue());
  dma_condition.set("hsn", ed_hsn.getValue());
  await $c.sbm.execute($p, sbm_Retrieve);
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, lc_wrkClsCd, ed_wrkPlCd, txt_wrkPlNm, ed_mrn, ed_msn, ed_hsn);
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  switch (disGubun) {
    case 1:
      udc_wrkPl.ilCommonPopUp(scwin.callbackWrkPl, pCode, pName, pClose, null, null, null, null, 'F', null, null, null, null, null, pAllSearch, null);
      break;
  }
};
scwin.callbackWrkPl = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, txt_wrkPlNm);
};
scwin.sbm_Retrieve_submitdone = async function (e) {
  let rowCnt = ds_CarryingOutAdmInfo.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
  spa_totalRow.setValue(rowCnt);
};
scwin.sbm_Retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_CarryingOutAdmissionInfo_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex < 0) return;
  let rtnValues = new Array();
  rtnValues[0] = ds_CarryingOutAdmInfo.getCellData(rowIndex, "crryoutAdmitNo");
  rtnValues[1] = ds_CarryingOutAdmInfo.getCellData(rowIndex, "regDtm");
  rtnValues[2] = ds_CarryingOutAdmInfo.getCellData(rowIndex, "crryoutAdmitPattern");
  rtnValues[3] = ds_CarryingOutAdmInfo.getCellData(rowIndex, "crryoutAdmitPatternNm");
  rtnValues[4] = ds_CarryingOutAdmInfo.getCellData(rowIndex, "totPackCnt");
  rtnValues[5] = ds_CarryingOutAdmInfo.getCellData(rowIndex, "totWt");
  rtnValues[6] = ds_CarryingOutAdmInfo.getCellData(rowIndex, "stockCnt");
  rtnValues[7] = ds_CarryingOutAdmInfo.getCellData(rowIndex, "stockWt");
  $c.win.closePopup($p, rtnValues);
};
scwin.ed_wrkPlCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, txt_wrkPlNm, 1);
};
scwin.retrieveButton_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'flex_gvw',id:''},E:[{T:1,N:'xf:group',A:{class:'content',id:''},E:[{T:1,N:'xf:group',A:{class:'shbox w-auto',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w100',editType:'select',id:'lc_wrkClsCd',search:'start',style:'',submenuSize:'auto',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_wrkPl',codeId:'ed_wrkPlCd',nameId:'txt_wrkPlNm',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화물관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_mrn',class:' w120',mandatory:'true'}},{T:1,N:'xf:input',A:{style:'',id:'ed_msn',class:' w70',mandatory:'true'}},{T:1,N:'xf:input',A:{style:'',id:'ed_hsn',class:' w70',mandatory:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'retrieveButton',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_CarryingOutAdmInfo',id:'gr_CarryingOutAdmissionInfo',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'crryoutAdmitNo',inputType:'text',style:'',value:'반출승인번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'carryoutYn',inputType:'text',style:'',value:'반출여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'통보일시',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryoutAdmitPatternNm',inputType:'text',style:'',value:'반출유형',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totPackCnt',inputType:'text',style:'',value:'승인수량',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totWt',inputType:'text',style:'',value:'승인중량',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockCnt',inputType:'text',style:'',value:'승인잔고수량',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockWt',inputType:'text',style:'',value:'승인잔고중량',width:'140'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'crryoutAdmitNo',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'carryoutYn',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryoutAdmitPatternNm',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totPackCnt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totWt',inputType:'text',style:'',value:'',width:'140',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockCnt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockWt',inputType:'text',style:'',value:'',width:'140',textAlign:'right',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]}]})