/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_03_04b.xml 10700 7f019e7c17dc1e9ace7a1cc7bcda65b144ec82890035c4bc9a6e5693c53ea39b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'등록건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'미확인건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'반려건수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_joblevel',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkCls',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_jobLevel',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_joblevel","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_jobLevel_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveDiscountSurchargePresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_emp","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_emp","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strFromDate;
scwin.strToDate;
scwin.strDate;
scwin.memJson;
scwin.sUserId;
scwin.sUserClsCd;
scwin.sClntNo;
scwin.sClntNm;
// scwin.sLoUpperLobranCd       = $c.data.getMemInfo("sLobranCd");
scwin.sLoUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); //  물류상위점소코드

scwin.pos_groupCode = 0; // 저장전 DataSet의 RowPosition을 저장 변수 
scwin.afLoad = 0; // loading 되기전

scwin.onpageload = function () {
  scwin.setInitVal();
  const codeOptions = [{
    grpCd: "OP190",
    compID: "acb_wrkCls"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callback);
};
scwin.callback = function () {
  $c.sbm.execute($p, sbm_jobLevel);
  scwin.f_Retrieve();
  acb_wrkCls.setSelectedIndex(1);
  scwin.afLoad = 1;
};
scwin.setInitVal = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMMdd").substring(0, 8); // 현재년월일을 구한다.
  scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.
  scwin.strDate = scwin.strFromDate + scwin.strToDate;
  scwin.sUserId = scwin.memJson.userId;
  scwin.sUserClsCd = scwin.memJson.userClsCd;
  scwin.sClntNo = scwin.memJson.clntNo;
  scwin.sClntNm = scwin.memJson.clntNm;
  scwin.sLobranCd = scwin.memJson.loUpperLobranCd;
};
scwin.onUdcCompleted = function () {
  wrkStDt.setValue(scwin.strToDate);
  wrkEndDt.setValue(scwin.strToDate);

  // wrkStDt.setValue("20151125");
  // wrkEndDt.setValue("20151130");   
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  //   dma_retrieve.set("lobranCd", co_acb_logisticsBranch.getValue());  // 점소
  //   dma_retrieve.set("wrkStDt", wrkStDt.getValue());
  //   dma_retrieve.set("wrkEndDt", wrkEndDt.getValue());
  //   dma_retrieve.set("wrkCls", acb_wrkCls.getValue());

  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회 조건 Reset
//-------------------------------------------------------------------------
scwin.f_Reset = async function () {
  $c.gus.cfInitObjects($p, [tb_searchCondition]);
  co_acb_logisticsBranch.setSelectedIndex(0);
  op_304_03_01b;
  acb_wrkCls.setSelectedIndex(0);
  wrkStDt.setValue(scwin.strToDate);
  wrkEndDt.setValue(scwin.strToDate);
};
scwin.sbm_jobLevel_submitdone = function (e) {
  //전체조건 추가
  var sLoUpperLobranCd = scwin.sLobranCd;
  //if(co_acb_logisticsBranch.IndexOfColumn("lobranCd", sLoUpperLobranCd) > 0){
  co_acb_logisticsBranch.setValue(scwin.sLoUpperLobranCd);

  //} else{
  //    co_acb_logisticsBranch.setSelectedIndex(0);
  //}
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    //$c.gus.cfShowError(sbm_Retrieve);
    return;
  }
  if (scwin.afLoad != 0) {
    if (ds_emp.getCellData(0, "col3") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
    }
  }

  //$c.gus.cfGoPrevPosition(ds_emp, scwin.pos_groupCode);

  totalRows.setValue(ds_emp.getRowCount());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tb_searchCondition',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'co_acb_logisticsBranch',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_retrieve.lobranCd',sortOption:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_joblevel'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_wrkCls',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_retrieve.wrkCls'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_joblevel'},E:[{T:1,N:'w2:label',A:{ref:''}},{T:1,N:'w2:value',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_retrieve',refEdDt:'wrkEndDt',refStDt:'wrkStDt',style:'',objTypeFrom:'Data',objTypeTo:'Data',edFromId:'wrkStDt',edToId:'wrkEndDt'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_Reset'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_emp',id:'gr_emp',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'구분',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'등록건수',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'미확인건수',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'반려건수',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'col1',inputType:'text',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col3',inputType:'text',width:'200',textAlign:'center',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col4',inputType:'text',width:'200',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col5',inputType:'text',width:'200',textAlign:'center'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})