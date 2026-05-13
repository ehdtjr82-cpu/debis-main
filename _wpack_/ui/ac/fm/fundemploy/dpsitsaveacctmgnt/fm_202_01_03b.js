/*amd /ui/ac/fm/fundemploy/dpsitsaveacctmgnt/fm_202_01_03b.xml 5205 1bfcbd5634aeebe76368a86254e47b26d726b382671021ce867a9d8434a40c8c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'depositSavingAccountNumber',name:'depositSavingAccountNumber',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_UncollectedProfit',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',name:'closeYm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisMmUncollPrf',name:'thisMmUncollPrf',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_UncollectedProfit',action:'/ac.fm.fundemploy.dpsitsaveacctmgnt.RetrieveUncollectedProfitCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_UncollectedProfit","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_UncollectedProfit","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_UncollectedProfit_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.userInfo = $c.data.getMemInfo($p);
scwin.parentFrame = $c.win.getParent($p);
scwin.onpageload = function () {
  $c.gus.cfDisableKeyData($p);
  // scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  // var condition = "?depositSavingAccountNumber="+parent.hidDpsitSaveAcctNo.value;
  // tr_UncollectedProfit.Action = "/ac.fm.fundemploy.dpsitsaveacctmgnt.RetrieveUncollectedProfitCMD.do"+condition;  //개발시 정정영역    
  // tr_UncollectedProfit.Post();
  dma_condition.set("depositSavingAccountNumber", scwin.parentFrame.scwin.hidDpsitSaveAcctNo);
  $c.sbm.execute($p, sbm_UncollectedProfit);
};

//-------------------------------------------------------------------------
// 수금등록 저장시
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {};
scwin.sbm_UncollectedProfit_submitdone = function (e) {
  var rowCnt = ds_UncollectedProfit.getRowCount();
  spanTotal.setLabel(rowCnt);
  gr_UncollectedProfit.setFocusedCell(0, 0);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'N',gridUpYn:'N',templateYn:'N',id:'udc_gr_UncollectedProfit',gridID:'gr_UncollectedProfit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_UncollectedProfit',id:'gr_UncollectedProfit',style:'',visibleRowNum:'4',visibleRowNumFix:'true',sortable:'false',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'년월',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'당월미수수익',width:'130',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'closeYm',inputType:'',style:'',value:'',width:'70',dataType:'text',calendarValueType:'yearMonth',displayFormat:'####/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisMmUncollPrf',inputType:'text',style:'',value:'',width:'130',displayFormat:'#,##0',dataType:'number',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnRowAddYn:'N',EngYn:'N',btnDelYn:'N',btnRowDelYn:'N'}}]}]}]}]}]}]})