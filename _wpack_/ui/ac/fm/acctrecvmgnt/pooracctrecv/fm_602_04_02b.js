/*amd /ui/ac/fm/acctrecvmgnt/pooracctrecv/fm_602_04_02b.xml 10696 258eab5caed116569756ab93f350cd2c92bde43953104389d1ca2d292a375683 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mgntCustMesure',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mesursDt',name:'조치일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'contCertiSendDt',name:'내용증명발송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'contCertiNo',name:'내용증명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'visitDt',name:'방문일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jointGrtYn',name:'연대보증여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'suitYn',name:'소송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvCollectionYn',name:'채권추심여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_mgntCustMesure'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_mgntCustMesureSave',action:'/ac.fm.acctrecvmgnt.pooracctrecv.RegistManagementCustomerMeasuresItemCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_mgntCustMesure","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_mgntCustMesureSave_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_mgntCustMesure',action:'/ac.fm.acctrecvmgnt.pooracctrecv.RetrieveManagementCustomerMeasuresItemCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_mgntCustMesure","key":"IN_DS1"}]',target:'data:json,{"id":"ds_mgntCustMesure","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_mgntCustMesure_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.params;

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  $c.gus.cfDisableKey($p);
  if ($c.gus.cfIsNull($p, scwin.params)) {
    dma_mgntCustMesure.set("clntNo", "");
  } else {
    dma_mgntCustMesure.set("clntNo", scwin.params.clntNo);
  }
  $c.sbm.execute($p, sbm_mgntCustMesure);
};
scwin.sbm_mgntCustMesure_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
    var rowCnt = ds_mgntCustMesure.getRowCount();
    totalRows.setValue(rowCnt);

    //포커스
    if (rowCnt > 0) {
      gr_mgntCustMesure.setFocusedCell(0, 0);
    }
  }
  ;
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  ds_mgntCustMesure.insertRow();
  ds_mgntCustMesure.setCellData(ds_mgntCustMesure.getRowPosition(), "clntNo", $p.parent().ds_poorAcctRecv.getCellData($p.parent().ds_poorAcctRecv.getRowPosition(), "clntNo"));
  ds_mgntCustMesure.setCellData(ds_mgntCustMesure.getRowPosition(), "clntNm", $p.parent().ds_poorAcctRecv.getCellData($p.parent().ds_poorAcctRecv.getRowPosition(), "clntNm"));
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_delMarked = function () {
  var chkRowIndex = gr_mgntCustMesure.getCheckedIndex("num");
  for (var i = 0; i < chkRowIndex.length; i++) {
    //체크된 행만 삭제
    ds_mgntCustMesure.removeRow(chkRowIndex[i]);
  }
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  ds_mgntCustMesure.undoAll();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  //변경한 데이터가 있는지 체크한다. 
  if (ds_mgntCustMesure.getModifiedIndex().length < 1) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }

  // 조치일자 필수항목 체크
  if (!(await $c.gus.cfValidate($p, [gr_mgntCustMesure]))) {
    return false;
  }

  // 저장확인 
  if (await $c.win.confirm($p, "저장하시겠습니까?")) {
    $c.sbm.execute($p, sbm_mgntCustMesure);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_mgntCustMesure',style:'',autoFit:'allColumn',id:'gr_mgntCustMesure',visibleRowNum:'5',class:'wq_gvw',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column23',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column25',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column1',value:'조치일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column15',value:'내용증명발송일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column13',value:'내용증명번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column11',value:'방문일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column9',value:'연대보증여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'소송여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'채권추심여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'num',value:'F',displayMode:'label',falseValue:'F',trueValue:'T',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mesursDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'contCertiSendDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'contCertiNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'visitDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'jointGrtYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'suitYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'acctRecvCollectionYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'display: none;',EngYn:'N',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_delMarked',cancelFunction:'scwin.f_Undo'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'display:none',id:'btn_save',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]})