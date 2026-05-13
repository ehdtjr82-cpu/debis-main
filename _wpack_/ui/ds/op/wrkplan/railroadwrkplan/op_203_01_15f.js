/*amd /ui/ds/op/wrkplan/railroadwrkplan/op_203_01_15f.xml 10421 1d2e575b62327ebfc3f19ee7c2c3733219f4b91cceb23746f8eb4f5584a49ddb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_condition',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_inoutInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'supplier',name:'공급사',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'base',name:'거점',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'volDt',name:'일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'planActCls',name:'구분(0:예정,1:실행)',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'inQty',name:'입고수량',dataType:'number',defaultValue:'0',length:'14.3'}},{T:1,N:'w2:column',A:{id:'outQty',name:'납품 수량',dataType:'number',defaultValue:'0',length:'14.3'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'재고',dataType:'number',defaultValue:'0',length:'14.3'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_detail',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveKoenTransPlanDetailInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_condition","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_detail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkplan.railroadwrkplan.SaveKoenInoutInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_inoutInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP651",
    compID: "gr_inoutInfo:supplier"
  },
  // 공급사
  {
    grpCd: "OP657",
    compID: "gr_inoutInfo:base"
  } // 거점
  ];
  $c.data.setCommonCode($p, codeOptions);

  // 그리드 maxlength 설정
  scwin.f_SetGridColumnMaxLength(gr_inoutInfo);
};

//-------------------------------------------------------------------------
// 입력 그리드 maxlength 설정
//-------------------------------------------------------------------------
scwin.f_SetGridColumnMaxLength = function (gridViewObj) {
  for (let i = 0; i < gridViewObj.getTotalCol(); i++) {
    let colNm = gridViewObj.getColumnID(i);
    let dataObj = $c.gus.object($p, gridViewObj.getDataList());
    let colInfo = dataObj.getColumnInfo(colNm);
    if (typeof colInfo != "undefined") {
      gridViewObj.setMaxLength(i, colInfo.length);
    }
  }
};

//-------------------------------------------------------------------------
// 상세 조회
//-------------------------------------------------------------------------
scwin.f_detail = function (co_shippingRelationNumber, transWrkIndictNo) {
  $c.sbm.execute($p, sbm_detail);
};

//-------------------------------------------------------------------------
// 행추가 조회
//-------------------------------------------------------------------------
scwin.f_addrow = function () {
  var newRow = ds_inoutInfo.insertRow();
  ds_inoutInfo.setRowPosition(newRow);
  ds_inoutInfo.setCellData(ds_inoutInfo.getRowPosition(), "planActCls", $p.parent().rd_planActCls.getValue());
};

//-------------------------------------------------------------------------
// 저장 조회
//-------------------------------------------------------------------------
scwin.f_Save = function () {
  $c.sbm.execute($p, sbm_save);
};

//-------------------------------------------------------------------------
// 상세조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_detail_submitdone = function (e) {
  // if (rowCnt == 0) { //ds_shippingd 사용되지 않음
  //     ds_shippingd.ClearData();
  // }
  // cfShowTotalRows(totalRows, rowCnt);
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  $p.parent().scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 물동량계획/실행 그리드 : 구분 displayFormatter
//-------------------------------------------------------------------------
scwin.planActClsExp = function (data) {
  return $c.gus.decode($p, data, "0", "계획", "실행");
};

//-------------------------------------------------------------------------
// 물동량계획/실행 그리드 : 입고 customFormatter
//-------------------------------------------------------------------------
scwin.qtyExp = function (data, formatData, rowIdx, colIdx) {
  if (formatData == null || formatData === "") return "";
  var num = Number(formatData.replace(/,/g, ""));
  if (isNaN(num)) return formatData;
  return num.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'물동량계획/실행',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"입고예정물량정보.xlsx","sheetName":"입고예정물량정보","type":"4+8+16"}',gridID:'gr_inoutInfo',gridUpYn:'N',templateYn:'N',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_inoutInfo',id:'gr_inoutInfo',style:'',visibleRowNum:'15',visibleRowNumFix:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'구분',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'일자',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'공급사',width:'150',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'거점',width:'150',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'입고',width:'120',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'출고',width:'120',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'재고',width:'120',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'planActCls',inputType:'text',width:'70',displayFormatter:'scwin.planActClsExp',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'volDt',inputType:'calendar',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'supplier',inputType:'select',width:'150',textAlign:'left',chooseOption:'true',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'base',inputType:'select',width:'150',textAlign:'left',chooseOption:'true',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'inQty',inputType:'text',width:'120',textAlign:'right',dataType:'float',maxLength:'14.3',allowChar:'0-9.',customFormatter:'scwin.qtyExp',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outQty',inputType:'text',width:'120',textAlign:'right',dataType:'float',maxLength:'14.3',allowChar:'0-9.',customFormatter:'scwin.qtyExp',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockQty',inputType:'text',width:'120',textAlign:'right',dataType:'float',maxLength:'14.3',allowChar:'0-9.',customFormatter:'scwin.qtyExp',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn',btnDelYn:'N',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddFunction:'scwin.f_addrow',gridID:'gr_inoutInfo',rowAddUserAuth:'C',rowAddObjType:'data',rowDelObjType:'data',cancelObjType:'data',rowDelUserAuth:'D'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]})