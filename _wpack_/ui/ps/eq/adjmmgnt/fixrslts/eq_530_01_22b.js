/*amd /ui/ps/eq/adjmmgnt/fixrslts/eq_530_01_22b.xml 14540 d567526b04081c237731de21059f2e7e357853842c42af4b4b3dfe270804d1eb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lux_wrkPlCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmFixPlan',name:'월정비계획',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisDdIn',name:'당일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inCum',name:'누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisDdOut',name:'당일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outCum',name:'누계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outCum1',name:'계획대비',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fix_work_re'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'termFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_ds_lux_wrkPlCd',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lux_wrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_lux_wrkPlCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_fix_work_re","key":"IN_DS1"},{"id":"ds_fix_work_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_fix_work_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수  
scwin.userInfo = $c.data.getMemInfo($p);
scwin.curDate = WebSquare.date.getCurrentServerDate();

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "EQ029",
    compID: "gr_work_pl:acctCd"
  }, {
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      'range': '1,EQ'
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  ica_wrkStDt.setValue(scwin.curDate);
  lc_homeClsCd.setValue(scwin.userInfo.eqHomeClsCd);

  // scwin.f_sbm_ds_lux_wrkPlCd();

  ica_wrkStDt.focus();
};
scwin.ondataload = function (e) {
  scwin.f_sbm_ds_lux_wrkPlCd();
};
//-------------------------------------------------------------------------
// ds_lux_wrkPlCd submission
//-------------------------------------------------------------------------
scwin.f_sbm_ds_lux_wrkPlCd = function () {
  sbm_ds_lux_wrkPlCd.action = "/cm.zz.RetrieveComboCMD.do?sysCd=PsCommonEBC&queryId=retriveWrkplList&param1=" + lc_homeClsCd.getValue();
  $c.sbm.execute($p, sbm_ds_lux_wrkPlCd);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [tb_wrk]))) return;

  // ds_fix_work_re.setUseChangeInfo(false); // 조회조건
  let strPath = "/ps.eq.adjmmgnt.fixrslts.RetrieveFixfeeDayEachResultsAggregationCMD.do";
  sbm_retrieve.action = strPath;
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_wrk, null);
  scwin.f_sbm_ds_lux_wrkPlCd();
};

//-------------------------------------------------------------------------
// List 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_toExcel1 = async function () {
  // let cntRow = ds_fix_work_list.getRowCount();
  // if(cntRow == 0)
  //     return;

  let fileName = '정비비일별실적집계 조회';
  let sheetTitle = "정비비일별실적집계 조회";
  await $c.data.downloadGridViewExcel($p, gr_work_pl, {
    fileName: fileName + ".xlsx",
    sheetName: sheetTitle
  });
};
scwin.sbm_ds_lux_wrkPlCd_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_lux_wrkPlCd.sort("code", 0);
  lc_wrkPlCd.setSelectedIndex(0);
  if (lc_homeClsCd.getValue() == scwin.userInfo.eqHomeClsCd) {
    lc_wrkPlCd.setValue(scwin.userInfo.fixWrkPlCd); // 정비작업장코드
  }
};
scwin.lc_homeClsCd_onviewchange = function (info) {
  scwin.f_sbm_ds_lux_wrkPlCd();
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  for (let i = 0; i < ds_fix_work_list.getRowCount(); i++) {
    let mmFixPlan = ds_fix_work_list.getCellData(i, "mmFixPlan");
    let outCum = ds_fix_work_list.getCellData(i, "outCum");
    let data = mmFixPlan - outCum;
    ds_fix_work_list.setCellData(i, 'outCum1', data);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_wrk',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkStDt',style:'',mandatory:'true',ref:'data:dma_fix_work_re.termFrom',title:'기간',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 150px;',submenuSize:'fixed',mandatory:'true','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange',ref:'data:dma_fix_work_re.homeClsCd',title:'사업부문'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정비작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_fix_work_re.fixWrkPlCd',title:'정비작업장',mandatory:'true',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_lux_wrkPlCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_toExcel1',gridUpYn:'N',gridID:'gr_work_pl'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fix_work_list',focusMode:'cell',id:'gr_work_pl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true',columnMove:'true',dataDragSelectAutoScroll:'true',readOnly:'true',sortable:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'계정',width:'70',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'월정비계획',width:'120',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column66',value:'입고',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column58',value:'출고',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'계획대비',width:'100',colSpan:'',rowSpan:'2',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'당일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'누계',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column59',value:'당일',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'누계',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'acctCd',inputType:'select',style:'',value:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mmFixPlan',inputType:'text',style:'',value:'',width:'120',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'thisDdIn',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'inCum',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'thisDdOut',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outCum',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outCum1',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column47',value:'',displayMode:'label',displayFormat:'#,##0',expression:'SUM("mmFixPlan")',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("thisDdIn")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column65',value:'',displayMode:'label',displayFormat:'#,##0',expression:'SUM("inCum")',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column61',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("thisDdOut")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("outCum")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("outCum1")',textAlign:'right'}}]}]}]}]}]}]}]}]}]})