/*amd /ui/ds/op/wrkrslts/stvwrkrslts/op_306_02_04b.xml 26523 73b04b9e7d46b7ed714121ca0be6db99f90b358d2d1bfe1d887413c6706cd60b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shiftCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workPlaceStevedoringOrderVolume',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ordKndNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblNo',name:'House B/L;Booking No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'netWt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'중량;(TON)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkWt',name:'중량;(TON)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkCbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'작업경로번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'작업단계번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsSeq',name:'실적순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remainQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remainWt',name:'중량;(TON)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remainCbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'매입순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgWrkWt',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.wrkrslts.stvwrkrslts.cmd.RequestWorkPlaceStevedoringResultsVolumeQueryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_workPlaceStevedoringOrderVolume","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_workPlaceStevedoringOrderVolume","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.stvwrkrslts.cmd.RequestWorkPlaceStevedoringResultsVolumeSaveCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_workPlaceStevedoringOrderVolume","key":"IN_DS1"},{"id":"ds_search","key":"IN_DS2"},{"id":"ds_workPlaceStevedoringOrderVolume","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_workPlaceStevedoringOrderVolume","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 물류/작업실적/작업장하역/작업장하역실적물량등록

scwin.memJson = $c.data.getMemInfo($p);

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  var sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  ed_qryDt.setValue(sCurrDate);
  const codeOptions = [{
    grpCd: "OP117",
    compID: "lc_inqShift"
  }];
  $c.data.setCommonCode($p, codeOptions);
  $c.sbm.execute($p, sbm_lobran);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [searchCond]))) {
    return;
  }
  ds_workPlaceStevedoringOrderVolume.removeAll();
  ds_search.set("lobranCd", lc_lobran.getValue());
  ds_search.set("wrkPlCd", ed_works_01.getValue());
  ds_search.set("wrkDt", ed_qryDt.getValue());
  ds_search.set("shiftCd", lc_inqShift.getValue());

  // ds_search.UseChangeInfo = false;
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  if (ds_workPlaceStevedoringOrderVolume.getTotalRow() == 0) {
    return;
  }
  for (var i = 0; i < ds_workPlaceStevedoringOrderVolume.getTotalRow(); i++) {
    if (ds_workPlaceStevedoringOrderVolume.getCellData(i, "qty") != ds_workPlaceStevedoringOrderVolume.getCellData(i, "wrkQty")) {
      await $c.win.alert($p, "실적물량은 오더물량과 동일하게 입력하십시오.");
      // gr_workPlaceStevedoringOrderVolume.SetScrolling(i, 1); 
      // gr_workPlaceStevedoringOrderVolume.ColSelect = "true";
      // gr_workPlaceStevedoringOrderVolume.Focus();
      // gr_workPlaceStevedoringOrderVolume.SetColumn("wrkQty");
      return;
    }
    if (ds_workPlaceStevedoringOrderVolume.getCellData(i, "grossWt") != ds_workPlaceStevedoringOrderVolume.getCellData(i, "wrkWt")) {
      await $c.win.alert($p, "실적물량은 오더물량과 동일하게 입력하십시오.");
      // gr_workPlaceStevedoringOrderVolume.SetScrolling(i, 1); 
      // gr_workPlaceStevedoringOrderVolume.ColSelect = "true";
      // gr_workPlaceStevedoringOrderVolume.Focus();
      // gr_workPlaceStevedoringOrderVolume.SetColumn("wrkWt");
      return;
    }
    if (ds_workPlaceStevedoringOrderVolume.getCellData(i, "cbm") != ds_workPlaceStevedoringOrderVolume.getCellData(i, "wrkCbm")) {
      await $c.win.alert($p, "실적물량은 오더물량과 동일하게 입력하십시오.");
      // gr_workPlaceStevedoringOrderVolume.SetScrolling(i, 1); 
      // gr_workPlaceStevedoringOrderVolume.ColSelect = "true";
      // gr_workPlaceStevedoringOrderVolume.Focus();
      // gr_workPlaceStevedoringOrderVolume.SetColumn("wrkCbm");
      return;
    }
  }
  if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면

  switch (disGubun) {
    case 1:
      var wrkPlGbCd = "7"; //CY,장치장창고,CFS,타창고
      var lodeptCd = lc_lobran.getValue(); //lc_lobranCd.ValueOfIndex("lodeptCd",lc_lobranCd.Index);
      var paramList = "," + lodeptCd + "," + wrkPlGbCd;
      udc_works_01.cfCommonPopUp(scwin.udc_works_01_callBackFun, pCode, pName, pClose, null, null, null, null, paramList, null, null, pAllSearch, null); // 작업장
      break;
  }
};
scwin.udc_works_01_callBackFun = function (rtnList) {
  //작업장코드  작업장명
  $c.gus.cfSetReturnValue($p, rtnList, ed_works_01, txt_works_02);
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [searchCond]);
  ed_qryDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  lc_inqShift.setSelectedIndex(0);
  lc_lobran.setValue(scwin.memJson.loUpperLobranCd);
  lc_lobran.focus();
};

//-------------------------------------------------------------------------
// List 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_toExcel1 = async function () {
  var fileName = "작업장하역실적물량등록";
  await $c.data.downloadGridViewExcel($p, gr_workPlaceStevedoringOrderVolume, {
    fileName: fileName + ".xlsx",
    sheetName: fileName
  });
};
scwin.sbm_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //Fail

  // cfHideDSWaitMsg(gr_workPlaceStevedoringOrderVolume);
  var rowCnt = ds_workPlaceStevedoringOrderVolume.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // "조회결과가 존재하지 않습니다.";
    }
  }
};
scwin.sbm_lobran_submitdone = function (e) {
  lc_lobran.setValue(scwin.memJson.loUpperLobranCd);
  lc_lobran.focus();
};
scwin.udc_works_01_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_works_01, txt_works_02, 1);
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
};
scwin.udc_works_01_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_works_02, ed_works_01, 1, false);
};
scwin.udc_works_01_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_works_01.getValue(), txt_works_02.getValue(), 'F', 'F');
};

// 행삭제버튼
scwin.rowDelFun = function () {
  // ds_workPlaceStevedoringOrderVolume.DeleteMarked();
  var rowIdx = ds_workPlaceStevedoringOrderVolume.getRowPosition();
  if (ds_workPlaceStevedoringOrderVolume.getRowStatus(rowIdx) == "C") {
    ds_workPlaceStevedoringOrderVolume.removeRow(rowIdx);
  } else {
    ds_workPlaceStevedoringOrderVolume.deleteRow(rowIdx);
    ds_workPlaceStevedoringOrderVolume.setFocusedCell(rowIdx, 0);
  }
};

// 취소버튼
scwin.cancelFun = function () {
  // ds_workPlaceStevedoringOrderVolume.Undo(ds_workPlaceStevedoringOrderVolume.RowPosition)
  ds_workPlaceStevedoringOrderVolume.undoRow(ds_workPlaceStevedoringOrderVolume.getRowPosition());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'searchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:' w200',editType:'select',id:'lc_lobran',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_works_01',codeId:'ed_works_01',btnId:'btn_works_01',nameId:'txt_works_02',selectID:'retrieveWrkPlInfo',refDataCollection:'ds_search','ev:onblurCodeEvent':'scwin.udc_works_01_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_works_01_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_works_01_onclickEvent',maxlengthCode:'5',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',mandatoryCode:'true',validTitle:'작업장'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_qryDt',style:'',mandatory:'true',title:'작업일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Shift ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_inqShift',search:'start',style:'',submenuSize:'auto',sortOption:'label',sortMethod:'descending'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업장하역실적물량등록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_toExcel1',gridID:'gr_workPlaceStevedoringOrderVolume',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_workPlaceStevedoringOrderVolume',id:'gr_workPlaceStevedoringOrderVolume',style:'',visibleRowNum:'15',visibleRowNumFix:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'컬럼헤더명',width:'70',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'구분',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'컬럼헤더명',width:'70',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'컬럼헤더명',width:'70',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'컬럼헤더명',width:'70',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'오더번호',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'House B/L<br/>Booking No',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'컬럼헤더명',width:'70',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'품목',width:'80',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'컬럼헤더명',width:'70',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',value:'컬럼헤더명',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',value:'컬럼헤더명',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column45',value:'오더물량',displayMode:'label',colSpan:'3'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column39',value:'실적물량',displayMode:'label',colSpan:'3'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'작업지시번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'작업경로번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'작업단계번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'품명순번',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'실적순번',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',value:'구분',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column23',value:'잔여물량',displayMode:'label',colSpan:'3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column88',value:'점소',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column85',value:'매입순번',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column82',value:'작업일자',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column76',value:'컬럼헤더명',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column79',value:'컬럼헤더명',displayMode:'label',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column63',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column62',value:'중량<br/>(TON)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column61',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column60',value:'수량',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column59',value:'중량<br/>(TON)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column58',value:'CBM',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column51',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column95',value:'중량<br/>(TON)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column92',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'text',width:'70',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',width:'70',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'text',width:'70',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ordKndNm',inputType:'text',width:'70',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'70',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'text',width:'70',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'netWt',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'internalSellLodeptCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'qty',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'grossWt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cbm',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkQty',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkWt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkCbm',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'odrWrkPathSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'odrWrkStpSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rsltsSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'gubun',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'remainQty',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'remainWt',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'remainCbm',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lobranCd',displayMode:'label',hidden:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsSeq',displayMode:'label',hidden:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkDt',displayMode:'label',hidden:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'acctDeptCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'orgWrkWt',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_workPlaceStevedoringOrderVolume',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'N',btnRowDelYn:'Y',EngYn:'N',rowDelFunction:'scwin.rowDelFun',cancelFunction:'scwin.cancelFun',rowDelUserAuth:'D'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})