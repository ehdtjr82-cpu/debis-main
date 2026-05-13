/*amd /ui/ps/eq/adjmmgnt/matprscond/eq_520_01_08b.xml 19572 4511aa336d3b5bbb59a2a457c204ff1377b26943867e19baeff2d6108f615d98 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'catCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq440',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unit',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'현재고 수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockAmt',name:'현재고 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'propStockQty',name:'적정재고 수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'propStockAmt',name:'적정재고 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'defQty',name:'과부족 수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'defAmt',name:'과부족 금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coNm',name:'업체별단가',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fixWrkPl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_ds_fixWrkPl',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_fixWrkPl","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_fixWrkPl_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.adjmmgnt.matprscond.RetrieveDailyOutPartsEachDeficiencyPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq440","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eq440","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수  
scwin.userInfo = $c.data.getMemInfo($p);
scwin.outDt = WebSquare.date.getCurrentServerDate();

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const param = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retriveHomeClsList",
    compID: "lc_homeClsCd"
  }];
  $c.data.setGauceUtil($p, param);
  const codeOptions = [{
    grpCd: "EQ005",
    compID: "lc_catCd"
  }
  // { grpCd : "ZZ205", compID : "lc_homeClsCd", opt : {'range': '1,EQ'}  },
  ];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  ica_outDt.setValue(scwin.outDt);
  chb_printCheck.hide();
  chb_previewCheck.hide();
  scwin.f_defaultValue();
};
scwin.ondataload = function (e) {
  let luxIndex = lc_homeClsCd.getValue();
  scwin.f_RetrieveFixWrkPl(luxIndex);
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  lc_homeClsCd.setValue(scwin.userInfo.eqHomeClsCd); //정비소속구분코드
  if (scwin.userInfo.eqHomeClsCd == "") {
    lc_homeClsCd.setSelectedIndex(0);
  }
  scwin.f_RetrieveFixWrkPl(lc_homeClsCd.getValue());
  lc_homeClsCd.focus();
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_eq440, null);
  scwin.lc_homeClsCd_onviewchange();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //필수입력항목 체크	  
  if (!(await $c.gus.cfValidate($p, [lc_homeClsCd, lc_fixWrkPlCd, ica_outDt]))) return;

  // ds_search.setUseChangeInfo("false");
  $c.sbm.execute($p, sbm_retrieve);
};

//------------------------------------------------------------------------
// [작업장  콤보 조회] 소속 구분에 따른 작업장 리스트 콤보 변경 ( 조회조건 LuxCombo )
//------------------------------------------------------------------------
scwin.f_RetrieveFixWrkPl = function (homeClsCd) {
  sbm_ds_fixWrkPl.action = "/cm.zz.RetrieveComboCMD.do?sysCd=PsCommonEBC&queryId=retriveWrkplList&param1=" + homeClsCd;
  $c.sbm.execute($p, sbm_ds_fixWrkPl);
};

//------------------------------------------------------------------------
// 리포트 출력 버튼
//------------------------------------------------------------------------  
///let PGM_ID ="eq_520_01_08b.jsp";

scwin.f_OzReport = async function () {
  //필수입력항목 체크	  
  if (!(await $c.gus.cfValidate($p, [lc_homeClsCd, lc_fixWrkPlCd, ica_outDt]))) return;
  let data = {
    reportName: "/ps/eq/adjmmgnt/matprscond/eq_520_01_08.ozr",
    odiName: "eq_520_01_08",
    odiParam: {
      homeClsCd: lc_homeClsCd.getValue(),
      homeClsNm: $c.win.getComboLabel($p, lc_homeClsCd),
      wrkPlCd: lc_fixWrkPlCd.getValue(),
      wrkPlNm: $c.win.getComboLabel($p, lc_fixWrkPlCd),
      outDt: ica_outDt.getValue(),
      catCd: lc_catCd.getValue(),
      catNm: $c.win.getComboLabel($p, lc_catCd)
    },
    viewerParam: {
      useprogressbar: false
    },
    formParam: {
      //
    }
  };
  // cfOZReport("chb_printCheck", "chb_previewCheck", "/ps/eq/adjmmgnt/matprscond/eq_520_01_08.ozr", odiParam, viewerParam, formParam);
  scwin.openPopup(data);
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//------------------------------------------------------------------------
// script
//------------------------------------------------------------------------  
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  // cfShowTotalRows(totalRows, rowCnt);
  let rowCnt = ds_eq440.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
  ;
};
scwin.sbm_ds_fixWrkPl_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_fixWrkPl.sort("code", 0);
  lc_fixWrkPlCd.setSelectedIndex(0);
};
scwin.lc_homeClsCd_onviewchange = function (info) {
  let luxIndex = lc_homeClsCd.getValue();
  scwin.f_RetrieveFixWrkPl(luxIndex);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_eq440',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.homeClsCd','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange',title:'소속',visibleRowNum:'25'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.wrkPlCd',title:'작업장',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_fixWrkPl'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출고일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_outDt',mandatory:'true',ref:'data:dma_search.outDt',style:'',title:'출고일자',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계통',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_catCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:dma_search.catCd',visibleRowNum:'25'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger2',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 출고 부품별 과부족분 현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',grdDownOpts:'{"fileName" : "출고부품별과부족분현황.xlsx" ,"sheetName" : "출고부품별과부족분현황" , "type" : "1" }',gridID:'gr_eq440'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_eq440',focusMode:'cell',id:'gr_eq440',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',columnMove:'true',dataDragSelectAutoScroll:'true',readOnly:'true',fixedColumn:'4',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'부품코드',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'부품명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'단위',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column58',inputType:'text',style:'',value:'장비모델명',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',style:'',value:'현재고</br>수량',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column55',inputType:'text',style:'',value:'현재고</br>금액',width:'60'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column73',value:'적정재고</br>수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column70',value:'적정재고</br>금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column67',value:'과부족</br>수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column61',value:'과부족</br>금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'260',inputType:'text',style:'',id:'column64',value:'업체별단가',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'partCd',inputType:'text',style:'',value:'',width:'110',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unit',inputType:'text',style:'',value:'',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelNm',inputType:'text',style:'',value:'',width:'160',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockQty',inputType:'text',style:'',value:'',width:'60',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'60',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'propStockQty',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'propStockAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'defQty',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'defAmt',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'260',inputType:'text',style:'',id:'coNm',value:'',displayMode:'label',textAlign:'left',class:'ws-pre'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',style:'',value:'합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column60',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'expression',style:'',value:'',width:'100',displayFormat:'#,##0',dataType:'number',expression:'SUM("stockQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column57',inputType:'expression',style:'',textAlign:'right',value:'',width:'100',displayFormat:'#,##0',dataType:'number',expression:'SUM("stockAmt")'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column75',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("propStockQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("propStockAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("defQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column63',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("defAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column66',value:'',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'[단위 : 원]',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_oz',style:'',type:'button','ev:onclick':'scwin.f_OzReport',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_printCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:'visibility: hidden;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'hid1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:'visibility: hidden;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'hid2'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]}]}]})