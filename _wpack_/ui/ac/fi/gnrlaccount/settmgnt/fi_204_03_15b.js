/*amd /ui/ac/fi/gnrlaccount/settmgnt/fi_204_03_15b.xml 20357 63f03536c8653edea574598228ba41466244bb3316b0827b1706a0958a142356 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'type',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizDomCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'flag',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntAcctCdNm',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsTot',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt01',name:'01월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt02',name:'02월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt03',name:'03월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt04',name:'04월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt05',name:'05월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt06',name:'06월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt07',name:'07월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt08',name:'08월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt09',name:'09월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt10',name:'10월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt11',name:'11월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt12',name:'12월',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctDeptCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_ds_bizCd',action:'',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_search',action:'/ac.fi.gnrlaccount.settmgnt.RetrieveBizProfitAndLossCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_acctDeptCd',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_acctDeptCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_acctDeptCd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 사업영역별 손익(보고용)
 * 메뉴경로 : 회계/재무회계/일반회계/결산관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/gnrlaccount/settmgnt/fi_204_03_15b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-22
 * 수정이력  :
 *    - 2025-12-22      정승혜    최초작성
 *    - 2026-01-29      정승혜    기타수정
 * 메모 : 
 * 해야할 리스트 : 
 */
scwin.strToDay = $c.date.getServerDateTime($p, "yyyyMMdd");
// hidden
scwin.txt_deptNm = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // getCodeList
  const codeOptions = [{
    grpCd: "CO022",
    compID: "lc_flag"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  scwin.f_Header();
  rd_type.setValue("2");
  lc_flag.setSelectedIndex(0);
  ed_closeYm.setValue(scwin.strToDay);
  sbm_ds_acctDeptCd.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=retrieveAcctDeptCdInfo&param1=&param2=&param9=1";
  $c.sbm.execute($p, sbm_ds_acctDeptCd);
  ed_closeYm.focus();
};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// 엑셀 Download
//-------------------------------------------------------------------------
// 엑셀다운 2+8+16
scwin.f_Export = async function () {
  let totCnt = ds_master.getRowCount();
  if (totCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let fileName = '사업영역별 손익_' + scwin.txt_deptNm + "_" + ed_BizDomNm.getValue() + "_" + ed_closeYm.getValue() + ".xlsx";
  let fileName2 = scwin.txt_deptNm + "_" + ed_BizDomNm.getValue() + "_" + ed_closeYm.getValue();
  const options = {
    fileName: fileName,
    sheetName: fileName2,
    startRowIndex: 3,
    startColumnIndex: 0,
    type: 1
  };
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 16,
    text: "사업영역별 손익계산서",
    textAlign: "center",
    fontSize: 18
  }];
  $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};

//-------------------------------------------------------------------------
// 조회 : 데이터를 조회한다.
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_closeYm, rd_type, lc_deptCd, ed_BizDomCd]))) {
    return;
  }
  $c.sbm.execute($p, sbm_tr_search);
};

//-------------------------------------------------------------------------
// 콤보데이터 검증
//------------------------------------------------------------------------- 
scwin.f_CheckComboData = function () {};

//-------------------------------------------------------------------------
// 사업영역코드팝업
//-------------------------------------------------------------------------
scwin.f_BizDomPopUp = function () {
  udc_bizDomCdInfo.cfCommonPopUp(scwin.udc_bizDomCdInfo_callBackFunc, ed_BizDomCd.getValue(), ed_BizDomNm.getValue(), "T", null, null, null, null, "1,,,,,", "450", "500", null, null);
};
scwin.udc_bizDomCdInfo_callBackFunc = function (rtnList) {
  // SET
  if (rtnList) {
    if (rtnList[0] == "N/A") return;
    ed_BizDomCd.setValue(rtnList[0]);
    ed_BizDomNm.setValue(rtnList[1]);
    ed_BizDomCd.options.hidVal = rtnList[0];
  } else {
    ed_BizDomCd.setValue("");
    ed_BizDomNm.setValue("");
    ed_BizDomCd.options.hidVal = "";
  }
};
scwin.udc_bizDomCdInfo_onclickEvent = function (e) {
  scwin.f_BizDomPopUp();
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_PopUp = function () {
  //udc
};

//-------------------------------------------------------------------------
// function name : f_grdHeiht
// function desc : 그리드 높이 늘리기
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_grdHeiht = function () {};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function () {};

//-------------------------------------------------------------------------
// 팝업 이벤트에 따라 팝업창의 자동닫기 여부를 반환
//-------------------------------------------------------------------------
scwin.f_EventCheck = function () {
  //udc
};

// 서브미션
scwin.sbm_tr_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_master.getRowCount());
  ds_master.setRowPosition(0);
  $c.gus.cfGoPrevPosition($p, gr_master, 0);
};

// 서브미션
scwin.sbm_ds_acctDeptCd_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_acctDeptCd.sort("col1", 0);
  //lc_deptCd.setSelectedIndex(0);
  lc_deptCd.setValue("01055");
};

// 그리드 합계
scwin.rsltsTotDisplyFm = function (data, formattedData, rowIndex, colIndex) {
  let total = 0;
  for (let i = 1; i <= 12; i++) {
    let val = parseInt(ds_master.getCellData(rowIndex, "rsltsAmt" + ("0" + i).slice(-2))) || 0;
    total += val;
  }
  let formattedTotal = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return formattedTotal;
};
scwin.udc_bizDomCdInfo_onblurCodeEvent = function (e) {
  if (scwin.f_IsPopUp(ed_BizDomCd, ed_BizDomNm) == false) {
    return;
  }
  scwin.f_BizDomPopUp();
};
scwin.lc_deptCd_onchange = function (info) {
  scwin.txt_deptNm = lc_deptCd.getItemArray()[lc_deptCd.getSelectedIndex()].orgLabel;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'결산년도 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'',id:'ed_closeYm',style:'width: 100px;',ref:'data:dma_search.closeYm',mandatory:'true',title:'결산년도',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업영역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveBizDomCdInfo',codeId:'ed_BizDomCd',validTitle:'',nameId:'ed_BizDomNm',style:'',allowCharCode:'0-9',maxlengthCode:'3',refDataCollection:'dma_search',code:'bizDomCd',id:'udc_bizDomCdInfo','ev:onclickEvent':'scwin.udc_bizDomCdInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bizDomCdInfo_onblurCodeEvent',objTypeCode:'data',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_deptCd',style:'width: 200px;',submenuSize:'fixed',ref:'data:dma_search.acctDeptCd',visibleRowNum:'25','ev:onchange':'scwin.lc_deptCd_onchange',mandatory:'true',title:'사업부',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_acctDeptCd'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_flag',style:'width: 100px;',submenuSize:'fixed',ref:'data:dma_search.flag',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_type',ref:'data:dma_search.type',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조정전'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조정반영'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_master',gridDownFn:'scwin.f_Export',gridUpYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'18',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'계정',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'합계',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'01월',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'02월',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'03월',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'04월',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'05월',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'06월',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'07월',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'08월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column46',value:'09월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'10월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'11월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'12월',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntAcctCdNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',class:' ws-pre'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsTot',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',excelCellType:'number',customFormatter:'scwin.rsltsTotDisplyFm',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsAmt01',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsAmt02',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsAmt03',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsAmt04',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsAmt05',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsAmt06',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsAmt07',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rsltsAmt08',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rsltsAmt09',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rsltsAmt10',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rsltsAmt11',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rsltsAmt12',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',excelCellType:'number',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})