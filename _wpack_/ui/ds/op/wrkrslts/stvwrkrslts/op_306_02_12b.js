/*amd /ui/ds/op/wrkrslts/stvwrkrslts/op_306_02_12b.xml 24567 a38b964505e4a9fec196074186608b626a5c0f71cc500cae988c6fc189859fa6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlKnd',name:'작업장분류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search_dtl',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'workPlaceCode',name:'작업장코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'workDate',name:'작업일자'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'lobranCd',E:[{T:4,cdata:'4BB'}]},{T:1,N:'lobranNm',E:[{T:4,cdata:'의왕지점'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsCubic',name:'CBM',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'shiftWrkHh',name:'Shift 작업시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqQty',name:'중기수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqDrvCnt',name:'중기기사 수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvPstCnt',name:'하역직 수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDrtCnt',name:'계약직 수',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.wrkrslts.stvwrkrslts.cmd.RetrieveWorkPlaceStevedoringVolumeResultsPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_results1","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_results1","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search_dtl',action:'/ds.op.wrkrslts.stvwrkrslts.cmd.RetrieveWorkPlaceStevedoringInputResultsPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,["dma_search_dtl",{"id":"ds_results2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_dtl_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("scwin.onpageload");
  scwin.sCurrDate = $c.date.getServerDateTime($p);
  scwin.memInfo = $c.data.getMemInfo($p);
  scwin.gClick = "";
  $c.sbm.execute($p, sbm_lobran); //점소코드 조회 
  ica_qryDt.setValue(scwin.sCurrDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  let chkVal = await $c.gus.cfValidate($p, [ica_qryDt]);
  if (!chkVal) return;
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 작업장팝업 Clear
//-------------------------------------------------------------------------
scwin.f_clearWrkCd = function () {
  ed_worksCd.setValue("");
  ed_worksNm.setValue("");
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
  rd_wrkPl.setSelectedIndex(0);
  ica_qryDt.setValue(scwin.sCurrDate);
  acb_lobran.setValue(scwin.memInfo.lobranCd);
  acb_lobran.focus();
};

//-------------------------------------------------------------------------
// 공통 팝업 호출
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      var wrkPlKnd = rd_wrkPl.getValue();
      var lodeptCd = acb_lobran.getValue();
      var paramList = "," + lodeptCd + "," + wrkPlKnd;
      udc_worksCd.cfCommonPopUp(scwin.callBackWrkPl, pCode, pName, pClose, null, null, null, null, paramList, null, null, null, null); // 작업장
      break;
  }
};
scwin.callBackWrkPl = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_worksCd, ed_worksNm);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//점소코드 조회 
scwin.sbm_lobran_submitdone = function (e) {
  console.log("scwin.sbm_lobran_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  acb_lobran.setValue(scwin.memInfo.loUpperLobranCd);
};

//실적물량 조회
scwin.sbm_search_submitdone = function (e) {
  console.log("scwin.sbm_search_submitdone");
  var rowCnt = ds_results1.getTotalRow();
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_052, ["실적물량"]);
      gr_results1.setNoResultMessageVisible(false);
    }
    return;
  }
  spn_totalRow.setValue(rowCnt);
  scwin.gr_results1_oncelldblclick(0);
  gr_results1.setFocusedCell(0, 0);
};

//투입실적 조회
scwin.sbm_search_dtl_submitdone = function (e) {
  console.log("scwin.sbm_search_dtl_submitdone");
  var rowCnt = ds_results2.getTotalRow();
  spn_totalRowDtl.setValue(rowCnt);
  if (rowCnt == 0) {
    if (scwin.gClick == 'Y') {
      //$c.gus.cfAlertMsg(MSG_CM_ERR_052,["투입실적"]);		    			    
      scwin.gClick = "";
      gr_results2.setNoResultMessageVisible(false);
    }
  }
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//작업장 분류 > 작업장 clear
scwin.rd_wrkPl_onchange = function (info) {
  scwin.f_clearWrkCd();
};

//작업장 찾기 버튼
scwin.udc_worksCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_worksCd.getValue(), ed_worksNm.getValue(), 'F', 'F');
};
scwin.udc_worksCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_worksCd, ed_worksNm, 1);
};
scwin.udc_worksCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_worksNm, ed_worksCd, 1, false);
};

//조회 clear 버튼
scwin.btn_clear_onclick = function (e) {
  console.log("btn_clear_onclick");
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("btn_search_onclick");
  scwin.f_retrieve();
};

//실적물량 그리드 더블 클릭
scwin.gr_results1_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  console.log("scwin.gr_results1_oncelldblclick");
  if (gr_results1.getTotalRow() == 0) return;

  //투입실적 조회
  scwin.gClick = "Y";
  dma_search_dtl.set("workPlaceCode", ds_results1.getCellData(rowIndex, "wrkPlCd"));
  dma_search_dtl.set("workDate", ica_qryDt.getValue());
  $c.sbm.execute($p, sbm_search_dtl);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobran',search:'start',style:'width: 200px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_search.lobranCd',searchTarget:'value',allowChar:'A-Z0-9','ev:onchange':'scwin.acb_lobran_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장분류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_wrkPl',ref:'data:dma_search.wrkPlKnd',renderType:'radiogroup',rows:'',selectedIndex:'0',style:'','ev:onchange':'scwin.rd_wrkPl_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CY,장치장,창고'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CFS'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'타창고'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_qryDt',style:'',editType:'select',ref:'data:dma_search.wrkDt',mandatory:'true',objType:'data',validExp:'조회일자:yes:date=YYYYMMDD',title:'작업일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_worksCd',nameId:'ed_worksNm',btnId:'btn_worksCd',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',editTypeCode:'select',selectID:'retrieveWrkPlInfo',code:'wrkPlCd',id:'udc_worksCd',onloadCallbackFunc:'',popupTitle:'작업장,작업장코드,작업장명',refDataCollection:'dma_search',popupGridHeadTitle:'작업장코드,작업장명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10','ev:onclickEvent':'scwin.udc_worksCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_worksCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_worksCd_onviewchangeNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'실적물량',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_results1',focusMode:'row',id:'gr_results1',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'6',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_results1_oncelldblclick',mergeCells:'never',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'작업장코드',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'150',value:'작업장'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'작업단계'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'subSum',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'200',value:'품명'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'수량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'중량',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'CBM',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkPlCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkPlNm',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkStpNm',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'subSum',value:'',displayMode:'label',expression:'display(\'wrkStpNm\') + display(\'comm\')'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'comm',inputType:'text',removeBorderStyle:'false',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsQty',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsWt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###.##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsCubic',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###.##0'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'subSum',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'expression',style:'',id:'column35',value:'',displayMode:'label',expression:'"소계"'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column34',value:'',displayMode:'label',expression:'Sum(\'rsltsQty\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column33',value:'',displayMode:'label',expression:'Sum(\'rsltsWt\')',textAlign:'right',dataType:'number',displayFormat:'#,###.##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column32',value:'',displayMode:'label',expression:'Sum(\'rsltsCubic\')',textAlign:'right',dataType:'number',displayFormat:'#,###.##0'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'wrkStpNm',style:'',id:'subTotal2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column36',value:'',displayMode:'label',expression:'"소계"'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column34',value:'',displayMode:'label',expression:'Sum(\'rsltsQty\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column33',value:'',displayMode:'label',expression:'Sum(\'rsltsWt\')',textAlign:'right',dataType:'number',displayFormat:'#,###.##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column32',value:'',displayMode:'label',expression:'Sum(\'rsltsCubic\')',textAlign:'right',dataType:'number',displayFormat:'#,###.##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column27',value:'',displayMode:'label',textAlign:'right',expression:'Sum(\'rsltsQty\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label',textAlign:'right',expression:'Sum(\'rsltsWt\')',dataType:'number',displayFormat:'#,###.##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column25',value:'',displayMode:'label',textAlign:'right',expression:'Sum(\'rsltsCubic\')',dataType:'number',displayFormat:'#,###.##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'투입실적',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_results2',focusMode:'row',id:'gr_results2',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'7',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'250',value:'Shift 작업시간'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'130',value:'중기수량'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'130',value:'중기기사 수'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'130',value:'하역직 수'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'계약직 수',width:'130'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'shiftWrkHh',inputType:'text',removeBorderStyle:'false',width:'250'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hveqQty',inputType:'text',removeBorderStyle:'false',width:'130',textAlign:'right'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hveqDrvCnt',inputType:'text',removeBorderStyle:'false',width:'130',textAlign:'right'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'stvPstCnt',inputType:'text',removeBorderStyle:'false',width:'130',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtDrtCnt',inputType:'text',style:'',value:'',width:'130',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRowDtl',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})