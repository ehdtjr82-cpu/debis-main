/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_02_04p1.xml 7970 cbe0ecab37297cb005ef734da67248ef8fdd36838d11b286b0ac961c413342a3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'selfTransClntNo',name:'자가운송사',dataType:'text'}},{T:1,N:'w2:key',A:{id:'onReqNo',name:'상차요청번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pageId',name:'메인 PageID (수입/수출구분)',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveGoodsPresent',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'nrm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blQty',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqQty',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitQty',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutIntendQty',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutQty',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrQty',name:'name8',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveGoodsPresent',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveOnRequestGoodsPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_srchCond","key":"IN_DS1"},{"id":"ds_retrieveGoodsPresent","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieveGoodsPresent","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveGoodsPresent_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = function () {};

/**
 * @event 
 * @name onUdcCompleted 
 * @description UDC 완료
 */
scwin.onUdcCompleted = function () {
  scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  scwin.valueObject = $c.data.getParameter($p, 'param').split(';');
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  scwin.f_Retrieve();
};

/**
 * @method 
 * @name f_Retrieve 
 * @description 조회
 */
scwin.f_Retrieve = function () {
  dma_srchCond.set('selfTransClntNo', scwin.valueObject[0]);
  dma_srchCond.set('onReqNo', scwin.valueObject[1]);
  dma_srchCond.set('pageId', scwin.valueObject[2]);
  if (scwin.valueObject[2] == "op_301_02_05b") {
    gr_ErrorInfo.setColumnVisible('blQty', false);
    gr_ErrorInfo.setColumnVisible('odrQty', true);
  }
  ;
  $c.sbm.execute($p, sbm_retrieveGoodsPresent);
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name sbm_retrieveGoodsPresent_submitdone 
 * @description 조회 TR 정상
 */
scwin.sbm_retrieveGoodsPresent_submitdone = function (e) {
  // OnFail
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  scwin.ds_retrieveGoodsPresent_OnLoadCompleted();
};

/**
 * @method 
 * @name ds_retrieveGoodsPresent_OnLoadCompleted 
 * @description 조회 TR ds_retrieveGoodsPresent 관련
 */
scwin.ds_retrieveGoodsPresent_OnLoadCompleted = function () {
  let rowCnt = ds_retrieveGoodsPresent.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
  ;
  gr_ErrorInfo.setFocusedCell(0, 0);
};

/**
 * @method 
 * @name btn_close_onclick 
 * @description 닫기버튼 클릭 시 발생하는 이벤트
 */
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'pgtbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'pg-tit',style:'display: none;'},E:[{T:1,N:'xf:group',A:{id:'',class:'tit'},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'textbox1',label:'상차요청 및 승인 반출현황',class:'pgt_tit'}}]},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn ico help'},E:[{T:1,N:'xf:label'}]}]}]},{T:1,N:'w2:wframe',A:{id:'popupTitle',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieveGoodsPresent',id:'gr_ErrorInfo',style:'',dataName:'상차요청 및 승인 반출현황',validFeatures:'ignoreStatus=no',objType:'data','ev:onaftercolumnmove':'scwin.gr_ErrorInfo_onaftercolumnmove',focusMode:'row'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'규격',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'BL',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'오더',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'요청',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'승인',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'예정',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'상차',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'nrm',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blQty',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqQty',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'admitQty',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryinoutIntendQty',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryinoutQty',inputType:'text',width:'100',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})