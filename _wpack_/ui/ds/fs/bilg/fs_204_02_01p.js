/*amd /ui/ds/fs/bilg/fs_204_02_01p.xml 9310 8cb43d55e4375b7e9450b9cb5f200b0943eea4777a9b4dc22dfe6291f246a028 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryDtConKnd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'myModId',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaClsCd',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seq',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvSellAmt',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susRecvInitamtOutbrDt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptrNm',name:'name7',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.bilg.bilgrsltsmgnt.RetrieveSuspenseContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_queryCondition","key":"IN_DS"},{"id":"ds_out","key":"OUT_DS"}]',target:'data:json,[{"id":"ds_out","key":"OUT_DS"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  /*
      scwin.bilgLodeptCd 	= "6A1";
  	scwin.qryDtConKnd 	= "SLIP";
  	scwin.qryConDtFm	= "20120901";
  	scwin.qryConDtTo 	= "20120903";
  	scwin.myModId 	    = "011343";
  	scwin.dcsnClsCd 	= "4";
  	scwin.dcsnClsCd 	= "";
  	scwin.fmlaClsCd		= "01";
  */
  /*
      scwin.bilgLodeptCd 	= "6AA";
  	scwin.qryDtConKnd 	= "POST";
  	scwin.qryConDtFm	= "20180901";
  	scwin.qryConDtTo 	= "20180903";
  	scwin.myModId 	    = "";
  	scwin.dcsnClsCd 	= "";
  	scwin.fmlaClsCd		= "01";
  */
  //scwin.qryDtConKnd SLIP, POST 에 따라 sql id : retrieveSuspenseContentsSLIP, retrieveSuspenseContentsPOST

  scwin.params = $c.data.getParameter($p);
  console.log('=============================');
  console.log(scwin.params);
  scwin.bilgLodeptCd = scwin.params.bilgLodeptCd;
  scwin.qryDtConKnd = scwin.params.qryDtConKnd;
  scwin.qryConDtFm = scwin.params.qryConDtFm;
  scwin.qryConDtTo = scwin.params.qryConDtTo;
  scwin.myModId = scwin.params.myModId;
  scwin.dcsnClsCd = scwin.params.dcsnClsCd;
  scwin.fmlaClsCd = scwin.params.fmlaClsCd;
  scwin.f_Retrieve();
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_out.getRowCount();
  if (rowcnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    //cfAlertMsg(MSG_CM_WRN_002);
    //ed_qryConDtFm.Focus();				
  }
  tbx_totalRows.setValue(rowcnt);
};
scwin.sbm_retrieve_submiterror = function (e) {
  //alert("error==>");
  //cfShowError(tr_retrieve);
};
scwin.f_Retrieve = function () {
  ds_out.setJSON([]);

  //ds_queryCondition.insertRow(0);
  ds_queryCondition.set("bilgLodeptCd", scwin.bilgLodeptCd);
  ds_queryCondition.set("qryDtConKnd", scwin.qryDtConKnd);
  ds_queryCondition.set("qryConDtFm", scwin.qryConDtFm);
  ds_queryCondition.set("qryConDtTo", scwin.qryConDtTo);
  ds_queryCondition.set("myModId", scwin.myModId);
  ds_queryCondition.set("dcsnClsCd", scwin.dcsnClsCd);
  ds_queryCondition.set("fmlaClsCd", scwin.fmlaClsCd);
  $c.sbm.execute($p, sbm_retrieve); //tr_retrieve.post();
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'가수금 처리내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_out',gridUpYn:'N',grdDownOpts:'{"fileName" : "가수금처리내역.xlsx","sheetName" : "가수금처리내역","type":"4+8+16" }',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_out',focusMode:'row',id:'gr_out',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'70',value:'SEQ'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'전표번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'부가세번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'250',value:'청구처'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'영수처리금액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'입금일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'입금자명',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'seq',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'slipNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sellVatNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bilgClntNm',inputType:'text',removeBorderStyle:'false',width:'250',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'susRecvSellAmt',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'susRecvInitamtOutbrDt',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rcptrNm',inputType:'text',width:'200',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column28',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column27',displayMode:'label',textAlign:'right',expression:'SUM(\'susRecvSellAmt\')',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column25',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})