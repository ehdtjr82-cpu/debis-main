/*amd /AI/op_302_01_44b.xml 13961 d5c79c3216f3621a3e10682b20ab11b3648c980a116125474f2f0787dde7e29c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ioTermFrom',name:'입출고기간From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ioTermTo',name:'입출고기간To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCommCd',name:'화주품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'화주오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntOdrNo',name:'화주오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'작업단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'smQty',name:'SM수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveMonthlyInOutCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_results","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
scwin.onpageload = function () {
  $c.gus.cfInitObjects($p, [tb_searchCondition]);
};
scwin.onUdcCompleted = function () {
  udc_ioTerm.setInitDate(scwin.vCurDate, scwin.vCurDate);
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [tb_searchCondition]);
  udc_ioTerm.setInitDate(scwin.vCurDate, scwin.vCurDate);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.f_Retrieve = async function () {
  if (ed_wrkPlCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업장"]);
    ed_wrkPlCd.setFocus();
    return;
  }
  if (txt_wrkPlNm.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업장"]);
    txt_wrkPlNm.setFocus();
    return;
  }
  if (ica_ioTermFrom.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업일자"]);
    ica_ioTermFrom.setFocus();
    return;
  }
  if (ica_ioTermTo.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["작업일자"]);
    ica_ioTermTo.setFocus();
    return;
  }
  dma_retrieve.set("wrkPlCd", ed_wrkPlCd.getValue());
  dma_retrieve.set("ioTermFrom", ica_ioTermFrom.getValue());
  dma_retrieve.set("ioTermTo", ica_ioTermTo.getValue());
  dma_retrieve.set("commCd", ed_con_commCd.getValue());
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_results.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
  }
  totalRows.setValue(rowCnt);
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  switch (disGubun) {
    case 1:
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveWrkPlInfo', pCode, pName, pClose, null, null, null, null, ',,,5', null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명");
      $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, txt_wrkPlNm);
      break;
    case 2:
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveCommInfo', pCode, pName, pClose, null, null, null, null, "2,4,,,ZZZZ", null, null, null, null, null, pAllSearch, "품명조회,품명코드,품명");
      $c.gus.cfSetReturnValue($p, rtnList, ed_con_commCd, ed_con_commNm);
      break;
  }
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
scwin.ed_wrkPlCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, txt_wrkPlNm, 1);
};
scwin.ed_con_commCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_con_commCd, ed_con_commNm, 2);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_wrkPl',codeId:'ed_wrkPlCd',nameId:'txt_wrkPlNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입출고기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_ioTerm',edFromId:'ica_ioTermFrom',edToId:'ica_ioTermTo',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_con_comm',codeId:'ed_con_commCd',nameId:'ed_con_commNm',hideName:'Y',popupID:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'월간 입출고 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_results',id:'gr_results',style:'',visibleRowNum:'10',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlCd',inputType:'text',value:'작업장<br/>코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',value:'작업장명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntCommCd',inputType:'text',value:'화주<br/>품명코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',value:'품명코드',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',value:'품명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizLongCd',inputType:'text',value:'작업장',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkPatternCd',value:'화주<br/>오더종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'clntOdrNo',value:'화주<br/>오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkStDt',value:'작업일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'qtyUnitCd',value:'작업단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rsltsQty',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rsltsWt',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'smQty',value:'SM수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'105',inputType:'text',id:'regDtm',value:'등록일시',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntCommCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizLongCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkPatternCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'clntOdrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkStDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'qtyUnitCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rsltsQty',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rsltsWt',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'smQty',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'105',inputType:'text',id:'regDtm',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column62',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column61',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column59',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column58',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column56',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column55',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column53',displayMode:'label',expression:'sum(\'rsltsQty\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column52',displayMode:'label',expression:'sum(\'rsltsWt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column51',displayMode:'label',expression:'sum(\'smQty\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'105',inputType:'text',id:'column50',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})