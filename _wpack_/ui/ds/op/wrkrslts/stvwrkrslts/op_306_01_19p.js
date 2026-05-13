/*amd /ui/ds/op/wrkrslts/stvwrkrslts/op_306_01_19p.xml 17778 bfea39833fbc428a85cf680394ea70de994a28325b340837f5d3e149186b144a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RetrieveWorkResult',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqNoHveqNm',name:'중기번호중기명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqKndCd',name:'중기종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqKndNm',name:'중기종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqNrmCd',name:'규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqNrmNm',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nesEqNrmCd',name:'필요장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeNm',name:'소속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rentClsCd',name:'임대차구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslNmWrkPlNm',name:'본선/작업장/임대거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'SHIFT구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsNm',name:'Shift',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStEndHh',name:'작업시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputHhCnt',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputMintCnt',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputHhCntStr',name:'투입시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'netOprtHhCnt',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'netOprtMintCnt',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'netOprtHhMintCnt',name:'순가동시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptHhCnt',name:'매입적용시간수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptHhCntStr',name:'매입적용시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptMintCnt',name:'매입적용분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftYn',name:'쉬프트여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsPcost',name:'매입원가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'nonoprtHhCnt',name:'비가동시간수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nonoprtMintCnt',name:'비가동분수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nonoprtRsnCd',name:'비가동사유코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_QueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'조회시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'조회종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'posnClsCd',name:'소유구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hveqKndCd',name:'중기종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCoCd',name:'협력업체코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hveqClsCd',name:'중기/이적차량구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellLodeptCd',name:'회계부서',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/ds.op.wrkrslts.stvwrkrslts.RetrieveTotalHeavyEquipEachWorkResultsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_QueryCondition","key":"IN_DS1"},{"id":"ds_RetrieveWorkResult","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RetrieveWorkResult","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//scwin.args = $c.data.getParameter();

/*
	scwin.args[0] = 	'6AA';
	scwin.args[1] = 	'20150901';
	scwin.args[2] = 	'20150910';
	scwin.args[3] = 	'';
	scwin.args[4] = 	'';
	scwin.args[5] = 	'';
	scwin.args[6] = 	'T';
	scwin.args[7] = 	'';
*/
scwin.args;
scwin.lobranCd = "";
scwin.qryStDt = "";
scwin.qryEndDt = "";
scwin.posnClsCd = "";
scwin.hveqKndCd = "";
scwin.copCoCd = "";
scwin.hveqClsCd = "";
scwin.sellLodeptCd = "";
scwin.onpageload = function () {
  scwin.args = $p.getAllParameter().paramData.data;
  ;
  console.log(scwin.args);
  console.log(scwin.args[0]);
  scwin.lobranCd = scwin.args[0];
  scwin.qryStDt = scwin.args[1];
  scwin.qryEndDt = scwin.args[2];
  scwin.posnClsCd = scwin.args[3];
  scwin.hveqKndCd = scwin.args[4];
  scwin.copCoCd = scwin.args[5];
  scwin.hveqClsCd = scwin.args[6];
  scwin.sellLodeptCd = scwin.args[7];
  const codeOptions = [{
    grpCd: "ZZ208",
    compID: "gr_RetrieveWorkResult:nesEqNrmCd"
  }, {
    grpCd: "OP210",
    compID: "gr_RetrieveWorkResult:nonoprtRsnCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callbackCode);

  //scwin.f_Retrieve();
};
scwin.f_Retrieve = function () {
  scwin.f_init();
  $c.sbm.execute($p, sbm_tr_retrieve);
};
scwin.callbackCode = function () {
  scwin.f_Retrieve();
};
scwin.f_init = function () {
  dma_QueryCondition.set("lobranCd", scwin.lobranCd); // 물류점소코드
  dma_QueryCondition.set("qryStDt", scwin.qryStDt); // 조회시작일자
  dma_QueryCondition.set("qryEndDt", scwin.qryEndDt); // 조회종료일자
  dma_QueryCondition.set("posnClsCd", scwin.posnClsCd); // 소유구분코드
  dma_QueryCondition.set("hveqKndCd", scwin.hveqKndCd); // 중기종류코드
  dma_QueryCondition.set("copCoCd", scwin.copCoCd); // 협력업체코드 copCoCd
  dma_QueryCondition.set("hveqClsCd", scwin.hveqClsCd); // 중기/이적차량 구분코드
  dma_QueryCondition.set("sellLodeptCd", scwin.sellLodeptCd); // 회계부서
};
scwin.f_toExcel = function () {
  //sheet명, 저장파일명, 저장 다이얼로그
  //$c.gus.cfGridToExcel(gr_RetrieveWorkResult , "중기별 전체 상세 작업실적" , "중기별 전체 상세 작업실적.xls" , 4+8+16);
};
scwin.f_WinClose = function () {
  scwin.closePopup();
};
scwin.sbm_tr_retrieve_submitdone = function (e) {
  if (ds_RetrieveWorkResult.getRowCount() == 0) {
    $c.win.alert($p, "[중기별 전체 상세 작업실적] " + MSG_CM_ERR_003);
  }
  //cfShowTotalRows(totalRows,rowCnt);
  spa_totCnt.setValue(ds_RetrieveWorkResult.getRowCount());
  scwin.decodeImpExpClsCd();
};
scwin.decodeImpExpClsCd = function () {
  var impExpClsCd = "";
  for (var i = 0; i < ds_RetrieveWorkResult.getRowCount(); i++) {
    impExpClsCd = $c.gus.decode($p, ds_RetrieveWorkResult.getCellData(i, "impExpClsCd"), "I", "수입", "O", "수출", "Y", "장치장", "");
    ds_RetrieveWorkResult.setCellData(i, "impExpClsCd", impExpClsCd);
  }
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'중기별 전체 상세 작업실적',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_RetrieveWorkResult',id:'udc_topGrd',grdDownOpts:'{"fileName":"중기별 전체 상세 작업실적.xlsx","sheetName" : "중기별 전체 상세 작업실적", "type":"4+8+16"}',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_RetrieveWorkResult',focusMode:'row',id:'gr_RetrieveWorkResult',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',columnMove:'true',readOnly:'true',mergeCellsFixedCols:'byrestriccol',fixedColumn:'5'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'120',value:'중기번호/<br/>중기명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'중기종류'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column71',value:'규격',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'70',value:'필요<br/>규격'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'120',value:'소속'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'수출입<br/>구분',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'작업/<br/>임대일자',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'임대차<br/>구분',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'본선/작업장/<br/>임대거래처',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'Shift',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'작업단계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'작업시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'투입시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'순가동<br/>시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'매입적용<br/>시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'매입적용<br/>분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column35',value:'쉬프트<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column33',value:'비가동<br/>시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column31',value:'비가동<br/>분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'비가동<br/>사유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'임차금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'임대금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'매입금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hveqNoHveqNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hveqKndNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column72',displayMode:'label',colMerge:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'nesEqNrmCd',inputType:'select',removeBorderStyle:'false',width:'70',textAlign:'right'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'homeNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left',colMerge:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'text',width:'90',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',width:'90',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rentClsCd',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslNmWrkPlNm',inputType:'text',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shiftClsNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStEndHh',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inputHhCntStr',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'netOprtHhMintCnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAdptHhCntStr',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAdptMintCnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'shiftYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'nonoprtHhCnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'nonoprtMintCnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'nonoprtRsnCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsPcost',displayMode:'label',textAlign:'right',displayFormat:'#,###,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###,###',dataType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column70',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column73',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column68',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column67',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column65',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column64',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column62',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column56',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column55',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column53',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column52',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column51',displayMode:'label',textAlign:'right',expression:'sum(\'pchsPcost\')',displayFormat:'#,###,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column50',displayMode:'label',textAlign:'right',displayFormat:'#,###,###',expression:'sum(\'sellAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column49',displayMode:'label',textAlign:'right',displayFormat:'#,###,###',expression:'sum(\'pchsAmt\')',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totCnt',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})