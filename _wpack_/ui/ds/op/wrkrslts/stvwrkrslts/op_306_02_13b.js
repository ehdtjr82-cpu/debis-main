/*amd /ui/ds/op/wrkrslts/stvwrkrslts/op_306_02_13b.xml 28832 da1f1ac4a782e238ecf72b19547a21d40e7675d4433d01c4eba496b8279f257e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'작업종료일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_heavyEquipKindEachInputResults',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftNm',name:'Shift',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqKndNm',name:'중기종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqNo',name:'중기번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqNrmNm',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqHomeCoNm',name:'소속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputWrkStpNm',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stHh',name:'시작',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endHh',name:'종료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqInputHh',name:'시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqInputMint',name:'분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'netOprtHh',name:'시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'netOprtMint',name:'분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptHhCnt',name:'적용시간',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_heavyEquipKindEachInputResultsSum',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'hveqKndNm',name:'중기종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hveqNrmCd',name:'중기규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputHveqCnt1',name:'장치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputHveqCnt2',name:'보관환적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputHveqCnt3',name:'보관이적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inputHveqCnt4',name:'포장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsPcostAmt',name:'금액',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.wrkrslts.stvwrkrslts.cmd.RetrieveWorkPlaceHeavyEquipInputResultsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_heavyEquipKindEachInputResults","key":"OUT_DS1"},{"id":"ds_heavyEquipKindEachInputResultsSum","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_heavyEquipKindEachInputResults","key":"OUT_DS1"},{"id":"ds_heavyEquipKindEachInputResultsSum","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("scwin.onpageload");
  scwin.sCurrDate = $c.date.getServerDateTime($p);
  scwin.memInfo = $c.data.getMemInfo($p);
  scwin.cnt = 0;

  //점소코드 조회
  $c.sbm.execute($p, sbm_lobran);
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("scwin.onUdcCompleted");
  udc_fromToCalendar.setInitDate(scwin.sCurrDate, scwin.sCurrDate);
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  $c.gus.cfInitObjects($p, [tbl_search]);
  ed_worksCd.setValue("");
  ed_worksNm.setValue("");
  ed_qryStDt.setValue(scwin.sCurrDate);
  ed_qryEndDt.setValue(scwin.sCurrDate);
  acb_lobran.setValue(scwin.memInfo.loUpperLobranCd);
  acb_lobran.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  var qryStDt = ed_qryStDt.getValue();
  var qryEndDt = ed_qryEndDt.getValue();
  let chkVal = await $c.gus.cfValidate($p, [tbl_search]);
  if (!chkVal) return;
  if (qryStDt != "" && qryEndDt != "") {
    if (!$c.gus.cfIsAfterDate($p, qryStDt, qryEndDt, false)) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ed_qryStDt.focus();
    }
  }

  //작업장중기투입실적 조회
  $c.sbm.execute($p, sbm_search);
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
  switch (disGubun) {
    case 1:
      var wrkPlGbCd = "7";
      var lodeptCd = acb_lobran.getValue();
      var paramList = "," + lodeptCd + "," + wrkPlGbCd;
      udc_worksCd.cfCommonPopUp(scwin.callBackWrkPlInfo, pCode, pName, pClose, null, null, null, null, paramList, null, null, null, null);
      break;
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
scwin.callBackWrkPlInfo = function (rtnList) {
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

//조회
scwin.sbm_search_submitdone = function (e) {
  console.log("scwin.sbm_lobran_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_heavyEquipKindEachInputResults.getTotalRow();
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }
  }
  spn_totalRow.setValue(rowCnt);
  spn_totalRowSum.setValue(ds_heavyEquipKindEachInputResultsSum.getTotalRow());
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//작업장 찾기 버튼
scwin.udc_worksCd_onclickEvent = async function (e) {
  console.log("scwin.udc_worksCd_onclickEvent");
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'tbl_search',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobran',search:'start',style:'width: 150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_search.lobranCd',allowChar:'A-Z0-9',searchTarget:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_worksCd',nameId:'ed_worksNm',id:'udc_worksCd',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',selectID:'retrieveWrkPlInfo','ev:onclickEvent':'scwin.udc_worksCd_onclickEvent',popupTitle:'작업장,작업장코드,작업장명',popupGridHeadTitle:'작업장코드,작업장명',btnId:'btn_worksCd',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',refDataCollection:'dma_search',code:'wrkPlCd',objTypeCode:'data',validExpCode:'작업장:yes',mandatoryName:'true',validExpName:'작업장:yes',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_worksCd_onblurCodeEvent',validTitle:'작업장',maxlengthCode:'5','ev:onviewchangeNameEvent':'scwin.udc_worksCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_search',refEdDt:'qryEndDt',refStDt:'qryStDt',style:'',edToId:'ed_qryEndDt',edFromId:'ed_qryStDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',objTypeBtn:'data',titleFrom:'작업일자',titleTo:'작업일자'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업장중기투입실적',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_workPlaceHeavyEquipInputResults',id:'upd_equipGrd',grdDownOpts:'{"fileName":"작업장중기투입실적.xlsx", "sheetName" : "작업장중기투입실적", "type":"4+8+16","useSubTotal":"true", "useSubTotalData" : "true"}',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_heavyEquipKindEachInputResults',focusMode:'row',id:'gr_workPlaceHeavyEquipInputResults',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'7',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'작업일자',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'90',value:'Shift',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'중기종류',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'중기번호',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column59',value:'subSum',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'규격',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'소속',width:'130',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'작업단계',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'작업시간',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column41',displayMode:'label',value:'투입시간',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column35',displayMode:'label',value:'실가동시간',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column79',value:'',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'적용시간',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column24',displayMode:'label',value:'시작'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column23',displayMode:'label',value:'종료'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column42',displayMode:'label',value:'시간'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column33',displayMode:'label',value:'분'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'',displayMode:'label',hidden:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column36',displayMode:'label',value:'시간'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column39',displayMode:'label',value:'분'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkDt',inputType:'calendar',removeBorderStyle:'false',width:'100',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'shiftNm',inputType:'text',removeBorderStyle:'false',width:'90'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hveqKndNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hveqNo',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'subSum',value:'',displayMode:'label',expression:'display(\'wrkDt\')+display(\'shiftNm\')+display(\'hveqKndNm\')',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hveqNrmNm',inputType:'text',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hveqHomeCoNm',inputType:'text',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inputWrkStpNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stHh',inputType:'text',width:'60',value:'',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'endHh',inputType:'text',width:'60',displayFormat:'##:##'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'hveqInputHh',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'hveqInputMint',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'subSumHveqHh',value:'',displayMode:'label',expression:'Number(display(\'hveqInputHh\')) + Number(Number(display(\'hveqInputMint\'))/60)',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'subSumHveqMint',value:'subSumHveqMint',displayMode:'label',expression:'Number(display(\'hveqInputMint\')) - Number(Number(display(\'hveqInputMint\'))/60*60)',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'netOprtHh',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'netOprtMint',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'subSumNetHh',value:'',displayMode:'label',expression:'Number(display(\'netOprtHh\')) + Number(Number(display(\'netOprtMint\'))/60)',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'subSumNetMint',value:'',displayMode:'label',expression:'Number(display(\'netOprtMint\')) - Number(Number(display(\'netOprtMint\'))/60*60)',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pchsAdptHhCnt',value:'',displayMode:'label',textAlign:'right'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'subSum',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column56',value:'',displayMode:'label',expression:'"소계"',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column55',value:'',displayMode:'label',expression:'count(\'hveqNo\')+"대"',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',style:'',id:'column49',value:'',displayMode:'label',textAlign:'right',expression:'Sum(\'subSumHveqHh\')'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',style:'',id:'column48',value:'',displayMode:'label',textAlign:'right',expression:'Sum(\'subSumHveqMint\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',style:'',id:'column47',value:'',displayMode:'label',textAlign:'right',expression:'Sum(\'subSumNetsHh\')'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',textAlign:'right',expression:'Sum(\'subSumNetMint\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',textAlign:'right',expression:'Sum(\'pchsAdptHhCnt\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업장중기투입실적SUM',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',id:'udc_equipSumGrd',grdDownOpts:'{"fileName":"작업장중기투입실적SUM.xlsx", "sheetName" : "작업장중기투입실적", "type":"4+8+16", "useSubTotal":"true", "useSubTotalData" : "true"}',templateYn:'N',gridID:'gr_heavyEquipKindEachInputResultsSum',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_heavyEquipKindEachInputResultsSum',focusMode:'row',id:'gr_heavyEquipKindEachInputResultsSum',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'190',value:'중기종류'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'120',value:'중기규격'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'120',value:'장치'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'120',value:'보관환적'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'보관이적',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'포장',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'금액',width:'140'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hveqKndNm',inputType:'text',removeBorderStyle:'false',width:'190'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hveqNrmCd',inputType:'text',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'inputHveqCnt1',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'inputHveqCnt2',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'right',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inputHveqCnt3',inputType:'text',style:'',value:'',width:'120',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inputHveqCnt4',inputType:'text',style:'',value:'',width:'120',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsPcostAmt',inputType:'text',style:'',value:'',width:'140',textAlign:'right',dataType:'number',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'190',inputType:'text',style:'',id:'column31',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column29',value:'',displayMode:'label',textAlign:'right',expression:'Sum(\'inputHveqCnt1\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column28',value:'',displayMode:'label',textAlign:'right',expression:'Sum(\'inputHveqCnt2\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column27',value:'',displayMode:'label',textAlign:'right',expression:'Sum(\'inputHveqCnt3\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label',textAlign:'right',expression:'Sum(\'inputHveqCnt4\')'}},{T:1,N:'w2:column',A:{width:'140',inputType:'expression',style:'',id:'column25',value:'',displayMode:'label',textAlign:'right',expression:'Sum(\'pchsPcostAmt\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spn_totalRowSum',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})