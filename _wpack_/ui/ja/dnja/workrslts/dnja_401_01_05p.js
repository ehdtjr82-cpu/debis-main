/*amd /ui/ja/dnja/workrslts/dnja_401_01_05p.xml 9879 fa9ae835337e0f4c094e0c1e472cd934f4726054b4e80bb3c5d957f00ff647ec */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_condition',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dtlMgntNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dtlMgntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlSeq',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlAmt',name:'name3',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sum',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dtlMgntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dtlMgntNo',name:'상세관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totDtlAmt',name:'상세금액',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ja.dnja.workrslts.RetrieveDetailAmountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ja.dnja.workrslts.SaveDetailAmountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_results","key":"IN_DS1"},{"id":"ds_dtlMgntNo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_dtlMgntNo","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//자회사물류/실적관리/운송임및비용등록/상세금액등록
//1. 메인화면 - 자회사물류>실적관리>운송임및비용등록  - 에서 [행추가] 버튼 클릭
//2. 추가된 그리드 행에서 계산기 클릭하여 상세금액등록 팝업 호출

scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.dtlMgntNo = scwin.params.dtlMgntNo;

  //scwin.dtlMgntNo = "D110401624";
  scwin.txt_dtlMgntNo = "0";
  scwin.f_OnLoad();
  scwin.sum = 0;

  //dtlMgntNo

  console.log('scwin.onpageload22 == ');
};

//-------------------------------------------------------------------------
// 화면로딩시
//------------------------------------------------------------------------- 
scwin.f_OnLoad = function () {
  ds_condition.setJSON([]);
  var idx = ds_condition.insertRow(0);
  ds_condition.setCellData(idx, "dtlMgntNo", scwin.dtlMgntNo);
  $c.sbm.execute($p, sbm_retrieve); // tr_retrieve.post();
};

//-------------------------------------------------------------------------
// 저장 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Save = function () {
  scwin.sum = 0;
  var tmp = 0;
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    tmp = ds_results.getCellData(i, "dtlAmt") == "" ? 0 : parseInt(ds_results.getCellData(i, "dtlAmt"));
    scwin.sum = scwin.sum + parseInt(tmp);
  }
  console.log('scwin.sum == ' + scwin.sum);
  $c.sbm.execute($p, sbm_save); // tr_save.post();
};

//-------------------------------------------------------------------------
// 화면종료시
//-------------------------------------------------------------------------
scwin.f_OnUnload = function () {
  var returnObject = new Object();
  returnObject.rowPosition = ds_results.getRowPosition();
  returnObject.totDtlAmt = scwin.sum;
  returnObject.dtlMgntNo = scwin.txt_dtlMgntNo;
  console.log('scwin.f_OnUnload~~');
  console.log(returnObject);
  //window.returnValue = returnObject;	
  return returnObject;
};
scwin.sbm_retrieve_submitdone = function (e) {
  //console.log("213214=="+ds_results.getRowCount());

  var row = 0;
  var rowcnt = ds_results.getRowCount();
  if (rowcnt == 0) {
    row = ds_results.insertRow();
    //gr_results.setFocusedCell(row, 'dltAmt', false);
  }

  //cfShowTotalRows(totalRows, rowcnt);
  totalRows.setValue(rowcnt);
};
scwin.sbm_save_submitdone = async function (e) {
  console.log('sbm_save_submitdone~');
  console.log(e);
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

  //cfAlertMsg(MSG_CM_INF_001);	// 성공적으로 저장하였습니다
  await $c.win.alert($p, "성공적으로 저장하였습니다.");
  if (ds_dtlMgntNo.getRowCount() > 0) {
    scwin.txt_dtlMgntNo = ds_dtlMgntNo.getCellData(0, "dtlMgntNo");
  }
  var rt = scwin.f_OnUnload();
  console.log("rt111 ==>" + rt);
  $c.win.closePopup($p, rt);
};
scwin.sbm_save_submiterror = function (e) {
  $c.win.alert($p, "error message!");
};

/*
scwin.btn_cancelRow_onclick = function (e) {
    $c.data.undoRow(ds_results, ds_results.getRowPosition());
};
*/

scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.gr_results_onkeyup = function (e) {
  //console.log("scwin.gr_results_onkeyup~~");
  //console.log(e);
  if (e.keyCode == "13") {
    var row = ds_results.insertRow();
    gr_results.setFocusedCell(row, 'dtlAmt', false);
  }
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상세금액정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true','ev:onkeyup':'scwin.gr_results_onkeyup'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'상세관리번호',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'일련번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'상세금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'Sum',width:'70',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dtlMgntNo',inputType:'text',style:'',value:'',width:'200',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dtlSeq',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dtlAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'false',dataType:'number',displayFormat:'#,##0',maxLength:'13'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'Sum',inputType:'text',style:'',value:'',width:'70'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column22',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column20',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'sum(\'dtlAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'N',btnRowDelYn:'N',cancelObjType:'data',gridID:'gr_results'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})