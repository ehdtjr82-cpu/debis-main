/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_14p.xml 16542 473a4cbd3bea01e2c1fcb955e0f907584f15a3cd208ce1bcdbbf4591c89dde67 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sd211',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_sd211_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text',length:'11'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text',length:'50'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sd212_1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text',length:'32'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text',length:'32'}},{T:1,N:'w2:column',A:{id:'extrCondItemCd',name:'부대조건항목코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'extrCondItemNm',name:'부대조건항목명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text',length:'38'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sd212_2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text',length:'32'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text',length:'32'}},{T:1,N:'w2:column',A:{id:'extrCondItemCd',name:'부대조건항목코드',dataType:'text',length:'4'}},{T:1,N:'w2:column',A:{id:'extrCondItemNm',name:'부대조건항목명',dataType:'text',length:'50'}},{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text',length:'38'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveContractTariffExtraConditionListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,["dma_retrieve",{"id":"ds_sd211","key":"OUT_DS1"},{"id":"ds_sd212_1","key":"OUT_DS2"},{"id":"ds_sd212_2","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_sd211","key":"OUT_DS1"},{"id":"ds_sd212_1","key":"OUT_DS2"},{"id":"ds_sd212_2","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.salesactiv.ctrtmgnt.SaveContractTariffExtraConditionListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_sd212_1","key":"IN_DS1"},{"action":"modified","id":"ds_sd212_2","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩 
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.f_defaultValue();
  scwin.f_retrieve();
};

//-------------------------------------------------------------------------
// 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  console.log("scwin.f_defaultValue");
  var ctrtNo = scwin.params.ctrtNo;
  var completeYn = scwin.params.completeYn;
  //scwin.params.ctrtNo = "C0812010600";
  //var completeYn = "02";

  if (completeYn == "02") {
    $c.gus.cfDisableObjects($p, [btn_save]);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  console.log("scwin.f_retrieve");
  dma_retrieve.set("ctrtNo", scwin.params.ctrtNo);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  console.log("scwin.f_save");
  if (!$c.data.isModified($p, ds_sd212_1) && !$c.data.isModified($p, ds_sd212_2)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("부대조건"));
    return;
  } else {
    let conf = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_001));
    if (conf) $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 부대조건 filter
//-------------------------------------------------------------------------
scwin.f_sd212_1_filter = function () {
  let condition = "selpchItemCd == '" + ds_sd211.getCellData(ds_sd211.getRowPosition(), "selpchItemCd") + "'";
  ds_sd212_1.removeColumnFilterAll();
  $c.data.dataListFilter($p, ds_sd212_1, condition);
  ds_sd212_1.sort("extrCondItemNm", 0);
};

//-------------------------------------------------------------------------
// 할인할증항목 filter
//-------------------------------------------------------------------------
scwin.f_sd212_2_filter = function () {
  let condition = "selpchItemCd == '" + ds_sd211.getCellData(ds_sd211.getRowPosition(), "selpchItemCd") + "'";
  ds_sd212_2.removeColumnFilterAll();
  $c.data.dataListFilter($p, ds_sd212_2, condition);
  ds_sd212_2.sort("extrCondItemNm", 0);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_sd211.setRowPosition(0);
  gr_sd211.setFocusedCell(0, 0);
  spn_totalRow211.setValue(ds_sd211.getRowCount());
  scwin.f_sd212_1_filter();
  scwin.f_sd212_2_filter();
  gr_sd212_1.setFocusedCell(0, 0);
  gr_sd212_2.setFocusedCell(0, 0);
  spn_totalRow212_1.setValue(ds_sd212_1.getRowCount());
  spn_totalRow212_2.setValue(ds_sd212_2.getRowCount());
};

//저장 완료
scwin.sbm_save_submitdone = function (e) {
  console.log("scwin.sbm_save_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//계약요율항목 그리드 행 변경 > 필터
scwin.gr_sd211_onrowindexchange = function (rowIndex, oldRow) {};

//저장 버튼 
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};

//닫기 버튼
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.gr_sd211_onaftercolumnmove = function (info) {};
scwin.ds_sd211_onrowpositionchange = function (info) {
  scwin.f_sd212_1_filter();
  scwin.f_sd212_2_filter();
  gr_sd212_1.setFocusedCell(0, 0);
  gr_sd212_2.setFocusedCell(0, 0);
  spn_totalRow212_1.setValue(ds_sd212_1.getRowCount());
  spn_totalRow212_2.setValue(ds_sd212_2.getRowCount());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'계약요율 항목',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:'height:200px'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_sd211',defaultCellHeight:'-1','ev:onrowindexchange':'',focusMode:'both',id:'gr_sd211',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',readOnly:'false',focusFlow:'linear',focusMove:'true',ignoreNonEditableCell:'false',ignoreNonEditableCellTabEnter:'false',columnMove:'true',moveKeyEditMode:'false',moveKeyEditModeAll:'false',arrowMove:'false','ev:oncellindexchange':'','ev:oncolumnindexchange':'','ev:onaftercolumnmove':'scwin.gr_sd211_onaftercolumnmove'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'계약번호',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'매출입항목코드',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',value:'계약요율 항목',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'ctrt',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'selpchItemCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'selpchItemNm',inputType:'text',textAlign:'left',width:'100',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spn_totalRow211',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부대조건',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_sd212_1',focusMode:'row',id:'gr_sd212_1',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',readOnly:'false',ignoreNonEditableCell:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'계약번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'매출입항목코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'부대조건항목코드',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'200',value:'부대조건'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'checkbox',removeBorderStyle:'false',width:'99',value:'',class:'',checkboxLabel:'포함',checkboxLabelPosition:'right'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ctrt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'selpchItemCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'extrCondItemCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'extrCondItemNm',inputType:'text',removeBorderStyle:'false',width:'200',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',width:'99',valueType:'binary',trueValue:'1'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRow212_1',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'할인할증항목',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_sd212_2',focusMode:'row',id:'gr_sd212_2',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'계약번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'매출입항목코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'할인할증항목코드',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'200',value:'할인할증항목'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'checkbox',removeBorderStyle:'false',width:'112',value:'포함',class:'',checkboxLabel:'포함',checkboxLabelPosition:'right'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ctrt',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'selpchItemCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'extrCondItemCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'extrCondItemNm',inputType:'text',removeBorderStyle:'false',width:'200',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',width:'112',valueType:'binary',trueValue:'1'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRow212_2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})