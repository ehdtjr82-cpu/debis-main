/*amd /ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_02_03b.xml 8249 ffe591bb211edf1aab426da601f97e6cf16af2974d2d35ecf428db3f2e30308e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modId',name:'수정자ID',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true','ev:ondataload':'scwin.ds_result_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.RetrieveWagePeakCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.SaveWagePeakCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_result","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.empNo = "";
scwin.empNm = "";
scwin.onpageload = function () {
  var params = $c.data.getParameter($p);
  scwin.empNo = params.empNo;
  scwin.empNm = params.empNm;
  ///임시
  /*
  scwin.empNo = "080362";
  scwin.empNm = "오창근";
  */
  ///
  dma_search.set("staffNo", scwin.empNo);
  $c.sbm.execute($p, sbm_search);
};
scwin.f_lineAdd = function () {
  ds_result.insertRow();
  gr_wagePeak.setFocusedCell(ds_result.getRowCount() - 1, 0);
  ds_result.setCellData(ds_result.getRowCount() - 1, "staffNo", scwin.empNo);
  ds_result.setCellData(ds_result.getRowCount() - 1, "staffNm", scwin.empNm);
};
scwin.f_lineDelete = function () {
  if (ds_result.getRowStatus(ds_result.getRowPosition()) == "C") {
    ds_result.removeRow(ds_result.getRowPosition());
  } else {
    var row = ds_result.getRowPosition();
    ds_result.deleteRow(ds_result.getRowPosition());
    ds_result.setRowPosition(row);
  }
};
scwin.f_wageCancle = function () {
  if (ds_result.getRowStatus(ds_result.getRowPosition()) == "C") {
    ds_result.removeRow(ds_result.getRowPosition());
  } else {
    ds_result.undoRow(ds_result.getRowPosition());
  }
};
scwin.f_wageSave = async function () {
  var sttDate = ds_result.getCellData(ds_result.getRowCount() - 1, "stDt");
  var endDate = ds_result.getCellData(ds_result.getRowCount() - 1, "endDt");
  if (sttDate.length != 8 || endDate.length != 8 || sttDate > endDate) {
    $c.win.alert($p, "일자를 정확히 입력하세요.");
  } else {
    var chk = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (chk) {
      $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.sbm_save_submitdone = function (e) {
  $c.win.alert($p, "저장되었습니다.");
  $c.sbm.execute($p, sbm_search);
};
scwin.btn_save_onclick = function (e) {
  scwin.f_wageSave();
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.ds_result_ondataload = function () {
  spa_cnt.setValue(ds_result.getRowCount());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_result',focusMode:'row',id:'gr_wagePeak',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNumFix:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'사원번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'사원명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'시작일자',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'종료일자',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'비고',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'staffNo',inputType:'text',removeBorderStyle:'false',width:'100',mandatory:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'staffNm',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'stDt',inputType:'calendar',removeBorderStyle:'false',width:'100',mandatory:'true',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'endDt',inputType:'calendar',removeBorderStyle:'false',width:'100',mandatory:'true',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_cnt',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddFunction:'scwin.f_lineAdd',rowDelFunction:'scwin.f_lineDelete',cancelFunction:'scwin.f_wageCancle',btnCancelYn:'Y',btnDelYn:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})