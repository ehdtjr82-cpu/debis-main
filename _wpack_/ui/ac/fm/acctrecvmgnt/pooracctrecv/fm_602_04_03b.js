/*amd /ui/ac/fm/acctrecvmgnt/pooracctrecv/fm_602_04_03b.xml 5354 1d3c476f317f1c30b0ccd47c4bafa712f2af7396d57dfa1003032d0d8bdac941 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mgntCustTarget',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptStDt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTrgtClntYn',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_mgntCustTarget'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_mgntCustTarget',action:'/ac.fm.acctrecvmgnt.pooracctrecv.RetrieveManagementCustomerHistoryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_mgntCustTarget","key":"IN_DS1"}]',target:'data:json,{"id":"ds_mgntCustTarget","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_mgntCustTarget_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.params;
scwin.onpageload = function () {
  $c.gus.cfDisableKey($p);

  //공통코드
  // const codeOptions = [
  //     { grpCd : "ZZ524", compID : "gr_mgntCustTarget:cdNm" } 
  // ];
  // $c.data.setCommonCode(codeOptions);

  if ($c.gus.cfIsNull($p, scwin.params)) {
    dma_mgntCustTarget.set("clntNo", "");
  } else {
    dma_mgntCustTarget.set("clntNo", scwin.params.clntNo);
  }
  $c.sbm.execute($p, sbm_mgntCustTarget);
};
scwin.sbm_mgntCustTarget_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
    var rowCnt = ds_mgntCustTarget.getRowCount();
    totalRows.setValue(rowCnt);

    //포커스
    if (rowCnt > 0) {
      gr_mgntCustTarget.setFocusedCell(0, 0);
    }
  }
  ;
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_mgntCustTarget',id:'gr_mgntCustTarget',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'적용시작일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'순번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'관리대상거래처여부',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'사유',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'등록자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'등록일시',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'adptStDt',inputType:'text',style:'',value:'',width:'120',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntTrgtClntYn',inputType:'select',style:'',value:'',width:'200',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'cdNm',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]})