/*amd /ui/ja/dn/workrslts/ja_401_01_05p.xml 10165 3478454f19aa6387b73cc5f6d8bd72ced2f041a43751539dd12496bc063ec7e3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_condition',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dtlMgntNo',name:'상세관리번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true','ev:ondataload':'scwin.ds_results_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dtlMgntNo',name:'상세관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlSeq',name:'일련',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlAmt',name:'상세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Sum',name:'Sum',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dtlMgntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dtlMgntNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_hidden'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'txt_dtlMgntNo',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ja.dn.workrslts.RetrieveDetailAmountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ja.dn.workrslts.SaveDetailAmountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_dtlMgntNo","key":"OUT_DS1"},{"action":"modified","id":"ds_results","key":"IN_DS1"}]',target:'data:json,{"id":"ds_dtlMgntNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : ja_401_01_05p 
// 이름     : 상세금액등록
// 경로     : 물류/유통물류/실적관리/운송임및비용등록
// 작 성 자 : 조성빈
// 작 업 일 : 2026-02-19
// 사용계정 : 내부
// 비고     :  ***
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.onpageload = function () {
  scwin.sum = 0;
  scwin.dtlMgntNo = $c.gus.cfIsNull($p, $c.data.getParameter($p, "dtlMgntNo")) ? "" : $c.data.getParameter($p, "dtlMgntNo");
  var rowIndex = ds_condition.insertRow();
  ds_condition.setRowPosition(rowIndex);
  ds_condition.setCellData(rowIndex, "dtlMgntNo", scwin.dtlMgntNo);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    $c.data.setPopupTitle($p, "상세금액등록");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 저장 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Save = function () {
  scwin.sum = 0;
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    if (!isNaN(parseInt(ds_results.getCellData(i, "dtlAmt")))) {
      scwin.sum = scwin.sum + parseInt(ds_results.getCellData(i, "dtlAmt"));
    }
  }
  $c.sbm.execute($p, sbm_save);
};

//-------------------------------------------------------------------------
// 화면종료시
//-------------------------------------------------------------------------
scwin.f_OnUnload = function () {};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_retrieve_submitdone = function (e) {
  var rowcnt = ds_results.getRowCount();
  txt_totalRows.setValue(rowcnt);
  if (rowcnt == 0) {
    var rowIndex = ds_results.insertRow();
    ds_results.setRowPosition(rowIndex);
    ds_results.setCellData(ds_results.getRowPosition(), "dtlAmt", "0");
    $p.setTimeout(function () {
      gr_results.setFocusedCell(ds_results.getRowPosition(), "dtlAmt", true);
    }, {
      "delay": 50
    });
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg == "FAIL") {} else {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

    if (ds_dtlMgntNo.getRowCount() > 0) {
      ds_hidden.set("txt_dtlMgntNo", ds_dtlMgntNo.getCellData(0, "dtlMgntNo"));
    }
    var returnObject = new Object();
    returnObject.rowPosition = ds_results.getRowPosition();
    returnObject.totDtlAmt = scwin.sum;
    returnObject.dtlMgntNo = ds_hidden.get("txt_dtlMgntNo");
    $c.win.closePopup($p, returnObject);
  }
};
scwin.gr_results_onkeydown = function (e) {
  //alert("<KeyCode :" + keycode + ">" );
  var keycode = e.keyCode;
  if (keycode == "13") {
    var rowIndex = ds_results.insertRow();
    ds_results.setRowPosition(rowIndex);
    ds_results.setCellData(ds_results.getRowPosition(), "dtlAmt", "0");
    $p.setTimeout(function () {
      gr_results.setFocusedCell(ds_results.getRowPosition(), "dtlAmt", true);
    }, {
      "delay": 50
    });
  }
};
scwin.onbeforepageunload = function () {};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onbeforepageunload':'scwin.onbeforepageunload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pg-tit',id:''},E:[{T:1,N:'xf:group',A:{class:'tit',id:''},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'tbx_textbox1',label:'상세금액등록',style:'',tagname:''}}]},{T:1,N:'xf:trigger',A:{class:'btn ico help',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상세금액정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'','ev:onkeydown':'scwin.gr_results_onkeydown',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'상세관리번호',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'일련번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'상세금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Sum',width:'70',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dtlMgntNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dtlSeq',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dtlAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,###',dataType:'number',allowChar:'0-9',maxLength:'13'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'Sum',inputType:'text',width:'70'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column22',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column20',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'dtlAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'N',btnRowDelYn:'N',EngYn:'N',gridID:'gr_results'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})