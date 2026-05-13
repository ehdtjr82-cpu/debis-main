/*amd /ui/ps/eq/partmgnt/partbuyproc/eq_420_01_12b.xml 18745 609a41bdbd001afa70cdcdf28398e8ad6efafbb397223e6227d1a5e2170596f7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'catCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'partCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq422',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'catNm',name:'계통',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unit',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcmdOrderQty',name:'권고 발주수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'재고량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'safeStockQty',name:'안전재고량',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fixWrkPl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.partmgnt.partbuyproc.RetrievePartsRecommendOrderingVolumeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq422","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eq422","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_fixWrkPl',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_fixWrkPl","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_fixWrkPl_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수  
scwin.userInfo = $c.data.getMemInfo($p);

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
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {};
scwin.ondataload = function (e) {
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  //cfDisableObjects와 비슷한 형태로, 오브젝트의 값을 초기화시킨다.
  $c.gus.cfInitObjects($p, [ed_partCd, ed_partNm]);
  lc_homeClsCd.setValue(scwin.userInfo.eqHomeClsCd); //정비소속구분코드
  if (scwin.userInfo.getEqHomeClsCd == "") {
    lc_homeClsCd.setSelectedIndex(0);
  }
  scwin.f_RetrieveFixWrkPl(lc_homeClsCd.getValue());
  lc_homeClsCd.focus();
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_eq422, null);
  scwin.lc_homeClsCd_onviewchange();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  //필수입력항목 체크	  
  //if( !$c.gus.cfValidate([lc_fixWrkPlCd, ed_rcmdDt]) ) return; //----- Del. 2006.02.28
  if (!$c.gus.cfValidate($p, [lc_homeClsCd, lc_fixWrkPlCd])) return;

  // dma_search.setUseChangeInfo("false");
  $c.sbm.execute($p, sbm_retrieve);
};

//------------------------------------------------------------------------
// [작업장  콤보 조회] 소속 구분에 따른 작업장 리스트 콤보 변경 ( 조회조건 LuxCombo )
//------------------------------------------------------------------------
scwin.f_RetrieveFixWrkPl = function (homeClsCd) {
  sbm_ds_fixWrkPl.action = "/cm.zz.RetrieveComboCMD.do?sysCd=PsCommonEBC&queryId=retriveWrkplList&param1=" + homeClsCd;
  $c.sbm.execute($p, sbm_ds_fixWrkPl);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  let rtnList; //공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      // 부품 팝업			
      rtnList = udc_partInfo.cfCommonPopUp(scwin.udc_partInfo_callBackFunc, pCode, pName, pClose, null, null, null, '3,4,5,6,8,9,10', null, null, null, null, null, null, pAllSearch, "부품,부품코드,부품명");

      // cfSetReturnValue(rtnList, ed_partCd, ed_partNm);  			
      break;
  }
};

// ======================
// 콜백 함수들
// ======================
scwin.udc_partInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_partCd.setValue(rtnList[0]);
    ed_partNm.setValue(rtnList[1]);
    ed_partCd.options.hidVal = rtnList[0];
    ed_partNm.options.hidVal = rtnList[1];
  } else {
    ed_partCd.setValue("");
    ed_partNm.setValue("");
    ed_partCd.options.hidVal = "";
    ed_partNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  // $c.gus.cfClearPairObj(pairObj);
  pairObj.setValue("");

  // 검색어 세팅
  // let pVal = $c.gus.cfGetValue(inObj);
  let pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  let cntRow = ds_eq422.getRowCount();
  if (cntRow == 0) return;
  let fileName = '부품권고발주량목록';
  let sheetTitle = "부품권고발주량목록";
  await $c.data.downloadGridViewExcel($p, gr_eq422, {
    fileName: fileName + ".xlsx",
    sheetName: sheetTitle
  });
};

//------------------------------------------------------------------------
// script
//------------------------------------------------------------------------  
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  // cfShowTotalRows(totalRows, rowCnt);
  let rowCnt = ds_eq422.getRowCount();
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
scwin.udc_partInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_partCd.getValue(), ed_partNm.getValue(), 'F', 'F');
};
scwin.udc_partInfo_onblurCodeEvent = function (e) {
  if (ed_partCd.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_partCd, ed_partNm, 1);
  } else {
    ed_partNm.setValue("");
  }
};
scwin.udc_partInfo_onviewchangeNameEvent = function (info) {
  if (ed_partNm.getValue() != "") {
    scwin.f_chkOpenCommonPopUp(ed_partNm, ed_partCd, 1, false);
  } else {
    ed_partCd.setValue("");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_eq422',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width:150px;',submenuSize:'fixed','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange',ref:'data:dma_search.homeClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkPlCd',style:'width:150px;',submenuSize:'fixed',ref:'data:dma_search.wrkPlCd',visibleRowNum:'25'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_fixWrkPl'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계통 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_catCd',style:'width: 100px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:dma_search.catCd',visibleRowNum:'25'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부품코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrievePartInfo',codeId:'ed_partCd',validTitle:'',nameId:'ed_partNm',style:'',refDataCollection:'dma_search',code:'partCd',UpperFlagCode:'1',maxlengthCode:'15',objTypeCode:'data',id:'udc_partInfo',objTypeName:'data','ev:onclickEvent':'scwin.udc_partInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_partInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_partInfo_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부품 권고발주량 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_eq422',gridUpYn:'N',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_eq422',focusMode:'cell',id:'gr_eq422',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',columnMove:'true',dataDragSelectAutoScroll:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'계통',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'부품코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'부품명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'장비모델명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'권고</br>발주수량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'재고량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'안전재고량',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'catNm',inputType:'text',style:'',value:'',width:'70',colMerge:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partCd',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unit',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rcmdOrderQty',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockQty',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'safeStockQty',inputType:'text',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("rcmdOrderQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM("stockQty")'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'SUM("safeStockQty")'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})