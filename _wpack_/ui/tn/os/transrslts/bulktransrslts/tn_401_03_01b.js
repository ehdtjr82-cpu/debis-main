/*amd /ui/tn/os/transrslts/bulktransrslts/tn_401_03_01b.xml 29638 82f0f70df5e534e793d8aca3e31dc9f9b1d18c8ac82f7915044efff60cae5683 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'gubun',name:'구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'startDt',name:'기간',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'기간',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_summery',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'등록점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'물량',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_summery2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'등록점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsNm',name:'자가구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSiz20',name:'수량20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSiz40',name:'수량40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSiz45',name:'수량45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teu',name:'TEU',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'등록점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'QTY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'WT',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'등록점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsNm',name:'자가구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSiz20',name:'수량20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSiz40',name:'수량40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSiz45',name:'수량45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teu',name:'TEU',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.os.transrslts.bulktransrslts.RetrieveBCVolumeDataCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"},{"id":"ds_summery","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"},{"id":"ds_summery","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve2',action:'/ncall.tn.os.transrslts.bulktransrslts.RetrieveBCVolumeDataCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master2","key":"OUT_DS1"},{"id":"ds_summery2","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_master2","key":"OUT_DS1"},{"id":"ds_summery2","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve2_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.vCurDate = $c.date.getServerDateTime($p);
  scwin.vPreDate = $c.date.addMonth($p, scwin.vCurDate, -1);
  scwin.lastDate = $c.date.getLastDateOfMonth($p, scwin.vPreDate.substring(0, 6));
  scwin.loUpperLobranCd = $c.util.isEmpty($p, $c.data.getMemInfo($p, "loUpperLobranCd")) ? "" : $c.data.getMemInfo($p, "loUpperLobranCd");
  scwin.acb_gubun_onchange();
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  udc_fromToCalendar.setInitDate(scwin.vPreDate.substring(0, 6) + "01", scwin.vPreDate.substring(0, 6) + scwin.lastDate);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  console.log("scwin.f_fieldClear");
  $c.gus.cfInitObjects($p, tbl_search);
  ed_startDt.setValue($c.date.addDate($p, scwin.vCurDate, -3));
  ed_endDt.setValue(scwin.vCurDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  let chkVal = await $c.gus.cfValidate($p, [tbl_search]);
  if (!chkVal) return;
  if (acb_gubun.getValue() == "B") {
    $c.sbm.execute($p, sbm_retrieve);
  } else if (acb_gubun.getValue() == "C") {
    $c.sbm.execute($p, sbm_retrieve2);
  }
};
scwin.f_displayFormatter = function (data) {
  if ($c.util.isEmpty($p, data.split(".")[1])) {
    data = data + ".00";
    debugger;
  } else {
    data = $c.num.floor($p, data, 2);
  }
  return $c.num.formatNumber($p, data);
};
//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_excelDownSummery = function () {
  var grdObj;
  var options = {};
  var gubun = dma_search.get("gubun");
  var ym = ed_startDt.getValue().substring(0, 6);
  if (gubun == 'B') {
    options = {
      fileName: "운송물량데이터(벌크)_" + ym + "_요약.xlsx",
      sheetName: "운송물량데이터(벌크)",
      type: "4+8+16",
      useSubTotal: "true",
      useSubTotalData: "true"
    };
    grdObj = gr_summery;
  } else if (gubun == 'C') {
    options = {
      fileName: "운송물량데이터(컨테이너)_" + ym + "_요약.xlsx",
      sheetName: "운송물량데이터(컨테이너)",
      type: "4+8+16",
      useSubTotal: "true",
      useSubTotalData: "true"
    };
    grdObj = gr_summery2;
  }
  $c.data.downloadGridViewExcel($p, grdObj, options);
};
scwin.f_excelDownMaster = function () {
  var grdObj;
  var options = {};
  var gubun = dma_search.get("gubun");
  var ym = ed_startDt.getValue().substring(0, 6);
  if (gubun == 'B') {
    options = {
      fileName: "운송물량데이터(벌크)_" + ym + ".xlsx",
      sheetName: "운송물량데이터(벌크)",
      type: "4+8+16"
    };
    grdObj = gr_master;
  } else if (gubun == 'C') {
    options = {
      fileName: "운송물량데이터(컨테이너)_" + ym + ".xlsx",
      sheetName: "운송물량데이터(컨테이너)",
      type: "4+8+16"
    };
    grdObj = gr_master2;
  }
  $c.data.downloadGridViewExcel($p, grdObj, options);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//벌크 조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_master.getTotalRow();
  ds_summery.sort("lobranNm", 0);
  ds_master.sort("lobranNm", 0);
  spn_totalRowBulk.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
};

//컨테이너 조회 완료
scwin.sbm_retrieve2_submitdone = function (e) {
  console.log("scwin.sbm_retrieve2_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_master2.getTotalRow();
  ds_summery2.sort("lobranNm", 0);
  ds_master2.sort("lobranNm", 0);
  spn_totalRowCntr.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//구분 값 변경
scwin.acb_gubun_onchange = function (info) {
  if (acb_gubun.getValue() == "B") {
    grp_bulk.show("");
    grp_cntr.hide();
  } else if (acb_gubun.getValue() == "C") {
    grp_bulk.hide();
    grp_cntr.show("");
  }
};

//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  console.log("scwin.btn_clear_onclick");
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_gubun',search:'start',style:'width: 150px;',submenuSize:'fixed',searchTarget:'value','ev:onchange':'scwin.acb_gubun_onchange',allOption:'',chooseOption:'',ref:'data:dma_search.gubun'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'startDt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar',refEdDt:'endDt',mandatoryFrom:'true',mandatoryTo:'true',edFromId:'ed_startDt',edToId:'ed_endDt',objTypeFrom:'Data',objTypeTo:'Data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no wfix',id:'grp_bulk',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'요약 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',btnPlusYn:'N',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_summery',gridDownFn:'scwin.f_excelDownSummery',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_summery',focusMode:'row',id:'gr_summery',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',readOnly:'true',showSortableImage:'false',initFixedHeightByRowNum:'15',visibleRowNumFix:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'등록점소',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'오더종류',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'물량(천톤)',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'lobranNm',inputType:'text',removeBorderStyle:'false',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrKndCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wt',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'right',displayFormat:'#,##0.############0',dataType:'number',excelCellType:'number',excelFormat:'#,##0.0000000000000'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'lobranNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'',displayMode:'label',expression:'targetColLabel()',excelExpression:'targetColLabel()'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column14',value:'',displayMode:'label',expression:'"소계"'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column13',value:'',displayMode:'label',expression:'sum(\'wt\')',displayFormat:'#,##0.############0',dataType:'number',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.0000000000000'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'tbx_title',label:' 벌크 운송물량데이터 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownUserAuth:'X',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_master',gridDownFn:'scwin.f_excelDownMaster'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'등록점소코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'등록점소',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'년월',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'오더종류',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column15',value:'품명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'QTY',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'WT',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col1',inputType:'text',removeBorderStyle:'false',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'lobranNm',inputType:'text',removeBorderStyle:'false',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkDt',inputType:'calendar',removeBorderStyle:'false',width:'70',displayFormat:'yyyy/MM',calendarValueType:'yearMonth',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'odrKndCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column14',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'',style:'',id:'qty',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###.#0',textAlign:'right',displayFormatter:'scwin.f_displayFormatter',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spn_totalRowBulk',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox flex_no wfix',id:'grp_cntr',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'요약 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{btnPlusYn:'N',btnUser:'Y',gridDownUserAuth:'X',gridDownYn:'Y',gridUpYn:'N',grp:'grd_section1',style:'',templateYn:'N',gridID:'gr_summery2',gridDownFn:'scwin.f_excelDownSummery'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_summery2',focusMode:'row',id:'gr_summery2',readOnly:'true',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNumFix:'true',mergeCol:'lobranNm',showSortableImage:'false',mergeCells:'bycol',initFixedHeightByRowNum:'15'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'등록점소',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'오더종류',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column16',value:'자가구분명',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'수량20',width:'120'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'수량40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'수량45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'TEU',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'lobranNm',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrKndCd',inputType:'text',removeBorderStyle:'false',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'selfClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntrSiz20',inputType:'text',removeBorderStyle:'false',textAlign:'right',width:'120',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrSiz40',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrSiz45',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'teu',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}}]}]},{T:1,N:'w2:subTotal',A:{id:'subTotal1',style:'',targetColumnID:'lobranNm'},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'expression',style:'',value:'',width:'100',expression:'targetColLabel()'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column14',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'"소계"',style:'',id:'column18',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',expression:'sum(\'cntrSiz20\')',id:'column13',inputType:'expression',style:'',value:'',width:'120',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column24',value:'',displayMode:'label',expression:'sum(\'cntrSiz40\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column21',value:'',displayMode:'label',expression:'sum(\'cntrSiz45\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column27',value:'',displayMode:'label',expression:'sum(\'teu\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'tbx_textbox1',label:'컨테이너 운송물량데이터',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{btnPlusYn:'Y',gridDownUserAuth:'X',gridDownYn:'Y',gridUpYn:'N',grp:'grd_section2',style:'',templateYn:'N',gridID:'gr_master2',gridDownFn:'scwin.f_excelDownMaster',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group4',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master2',focusMode:'row',id:'gr_master2',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',hidden:'true',id:'column12',inputType:'text',removeBorderStyle:'false',value:'등록점소코드',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'등록점소',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'년월',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'오더종류코드',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'column13',inputType:'text',style:'',value:'자가구분명',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'수량20',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'수량40',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'수량45',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'TEU',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col1',inputType:'text',removeBorderStyle:'false',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'lobranNm',inputType:'text',removeBorderStyle:'false',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkDt',inputType:'calendar',removeBorderStyle:'false',width:'70',displayFormat:'yyyy/MM',calendarValueType:'yearMonth'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selfClsNm',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSiz20',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSiz40',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',id:'cntrSiz45',inputType:'text',style:'',value:'',width:'70',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'teu',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spn_totalRowCntr',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]}]})