/*amd /ui/cm/bc/comnmgnt/holidaymgnt/zz_612_01_01b.xml 18426 3227d1226329ecd7f8e53a5be9b83752f2cca32167202a2e60f6364ce8fa3e11 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_holiday',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'holiday',name:'공휴일',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'saturdayYn',name:'토요일여부',dataType:'text',defaultValue:'0',encYN:'false',valueType:'boolean'}},{T:1,N:'w2:column',A:{id:'ddDowYn',name:'일요일여부',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vacaDdYn',name:'휴무일여부',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dsgVacaDdYn',name:'지정휴무일여부',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'icnHoliDdYn',name:'지정휴무일여부',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'holidayNm',name:'공휴일명',dataType:'text',defaultValue:''}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_holidayCon'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'mm',name:'lux_mm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'yr',name:'yr',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retriveHoliday',action:'/cm.bc.comnmgnt.holidaymgnt.RetrieveHolidayCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_holidayCon","key":"IN_DS1"},{"id":"ds_holiday","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_holiday","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retriveHoliday_submitdone','ev:submiterror':'scwin.sbm_retriveHoliday_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveHoliday',action:'/cm.bc.comnmgnt.holidaymgnt.SaveHolidayCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified", "id":"ds_holiday", "key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveHoliday_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_createHoliday',action:'/cm.bc.comnmgnt.holidaymgnt.CreateSaturdaySundayCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_holidayCon", "key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_createHoliday_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.prevRow = 0;
scwin.vYr = WebSquare.date.getFormattedDate(new Date(), "yyyy");
scwin.mm = "0";
scwin.txt_countRow = "0";
scwin.txt_retrieveYn = "0";
scwin.txt_saveType = "0";

//-------------------------------------------------------------------------
// 화면로딩시
// function : f_OnLoad
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // setHolidayHeader();

  ica_yr.setValue(scwin.vYr);
  ica_yr.focus();
};

//-------------------------------------------------------------------------
// 공휴일 조회
// function : f_Retrieve
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  var vYear = ica_yr.getValue();
  if (vYear == "" || vYear.length < 1) {
    // yr.value=vYr;
    ica_yr.setValue(scwin.vYr);
  }
  if (!$c.gus.cfValidate($p, [ica_yr])) {
    return false;
  }
  scwin.txt_retrieveYn = "1";
  $c.sbm.execute($p, sbm_retriveHoliday);
};

//-------------------------------------------------------------------------
// 공휴일조회조건 DataSet 헤더설정
// function : setHolidayHeader
//-------------------------------------------------------------------------
scwin.setHolidayHeader = function () {
  //헤더정보 생성
  // str_holidayHeader =    "yr : String(4),"+ //연도
  //     "mm : String(2)," + // 월
  //     "rtn :INT(1)";
  // ds_holidayCon.SetDataHeader(str_holidayHeader);
  // ds_holidayCon.AddRow();		
};

//-------------------------------------------------------------------------
// 공휴일목록 DataSet 헤더설정
// function : setHolidayListHeader
//-------------------------------------------------------------------------
scwin.setHolidayListHeader = function () {
  //헤더정보 생성
  str_holidayListHeader = "holiday : String(8)," + "holidayNm : String(20)," + "saturdayYn : INT(1)," + "ddDowYn : INT(1)," + "vacaDdYn : INT(1)," + "dsgVacaDdYn : INT(1)";
  ds_holiday.SetDataHeader(str_holidayListHeader);
};

//-------------------------------------------------------------------------
// 행추가
// function : f_AddRow
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  var rowIndex = ds_holiday.getTotalRow();
  ds_holiday.insertRow(rowIndex);
  gr_holiday.setFocusedCell(rowIndex, 0);
};

//-------------------------------------------------------------------------
// 행삭제
// function : f_delRow
//-------------------------------------------------------------------------
scwin.f_delRow = function () {
  let row = ds_holiday.getRowPosition();
  if (ds_holiday.getRowStatus(row) == "C") {
    ds_holiday.removeRow(row);
  } else {
    ds_holiday.deleteRow(row);
  }
  gr_holiday.setFocusedCell(row, "holiday", true);
};

//-------------------------------------------------------------------------
// 행취소
// function : f_Undo
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  console.log("============");
  // ds_holiday.Undo(ds_holiday.RowPosition);
  $c.data.undoRow($p, ds_holiday, "Y");
};

//-------------------------------------------------------------------------
// 공휴일 저장
// function : f_Save
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_holiday.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return false;
  }
  let validArry = [{
    id: "holiday",
    name: "일자",
    mandatory: true
  }];
  let gridName = "공휴일";
  if (!(await $c.gus.cfValidateGrid($p, gr_holiday, null, null, validArry, gridName))) {
    return false;
  }

  // 마감통제 필수항목 체크  
  let ret = await $c.gus.cfValidate($p, [gr_holiday]);
  if (!ret) {
    return false;
  }
  var rowIndex = ds_holiday.getRowPosition();
  var vType = scwin.txt_saveType;
  if (vType == "1") {
    // if (ds_holiday.NameValue(row,"saturdayYn") == 1 || ds_holiday.NameValue(row,"ddDowYn") == 1){
    // if ( ds_holiday.getCellData(rowIndex, "saturdayYn") == 1 || ds_holiday.getCellData(rowIndex, "ddDowYn") == 1){
    //     await $c.win.alert("토요일과 일요일은 삭제할 수 없습니다.");
    //     return false;
    // }

    for (let i = 0; i < ds_holiday.getRowCount(); i++) {
      if ("D" == ds_holiday.getRowStatus(i)) {
        if (ds_holiday.getCellData(i, "saturdayYn") == "1" || ds_holiday.getCellData(i, "ddDowYn") == "1") {
          await $c.win.alert($p, "토요일과 일요일은 삭제할 수 없습니다.");
          gr_holiday.setFocusedCell(i, 0);
          return;
        }
      }
    }
  }
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmResult) {
    scwin.prevRow = ds_holiday.getRowPosition();
    $c.sbm.execute($p, sbm_saveHoliday);
  }
};

//-------------------------------------------------------------------------
// 토요일,일요일 생성
// function : f_CreateHoliday
//-------------------------------------------------------------------------
scwin.f_CreateHoliday = async function () {
  if ("" == ica_yr.getValue()) return false;
  $c.sbm.execute($p, sbm_createHoliday);
};

//-------------------------------------------------------------------------
// 바이트 크기 체크
// function : bytelength/f_grdHeiht/f_downExcelSheet
//-------------------------------------------------------------------------

scwin.bytelength = function (bstr) {
  len = bstr.length;
  for (ii = 0; ii < bstr.length; ii++) {
    xx = bstr.substr(ii, 1).charCodeAt(0);
    if (xx > 127) {
      len++;
    }
  }
  return len;
};

//그리드 높이 늘리기
scwin.f_grdHeiht = function (size) {
  objGrd = "gr_holiday";
  var objGrd = eval(objGrd);
  var strHeight = objGrd.style.height;
  var intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    objGrd.style.height = intHeight + "px";
  }
};
scwin.f_downExcelSheet = function () {
  let sheetTitle = "공휴일";
  const options = {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_holiday, options);
};
scwin.sbm_retriveHoliday_submitdone = function (e) {
  var rowCnt = ds_holiday.getRowCount();
  gr_holiday_spanTotal.setLabel(rowCnt);
  scwin.txt_countRow = rowCnt;
  scwin.txt_retrieveYn = "1";
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  } else {
    //gr_holiday.setFocusedCell(0, 0);
    // color={Decode(holidayNm,"토요일","Blue","일요일","Red")}
    for (var i = 0; i < ds_holiday.getRowCount(); i++) {
      var rowJson = ds_holiday.getRowJSON(i);
      if (rowJson.holidayNm == "토요일") {
        gr_holiday.setCellColor(i, "holidayNm", "blue");
      } else if (rowJson.holidayNm == "일요일") {
        gr_holiday.setCellColor(i, "holidayNm", "red");
      }
    }
  }
  // $c.gus.cfGoPrevPosition(ds_holiday, scwin.prevRow);	
};
scwin.sbm_retriveHoliday_submiterror = function (e) {};
scwin.sbm_saveHoliday_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};
scwin.sbm_createHoliday_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, "성공적으로 생성하였습니다.");
  scwin.f_Retrieve();
};
scwin.btn_search1_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'년도 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'',id:'ica_yr',style:'',ref:'data:dma_holidayCon.yr',delimiter:'/'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'lc_mm',mandatory:'true',ref:'data:dma_holidayCon.mm',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'1월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'2월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'3월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'4월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'5월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'6월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'7월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'8월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'9월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'09'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'10월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'11월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'12월'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'12'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'scwin.f_Save',style:'',objType:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'공휴일 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_downExcelSheet',gridID:'gr_holiday'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_holiday',focusMode:'cell',id:'gr_holiday',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'30'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column34',value:'일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'공휴일명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'토요일여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'일요일여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'휴무일여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column40',value:'지정휴무일여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'특휴여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'calendar',style:'',id:'holiday',value:'',displayMode:'label',mandatory:'true',delimiter:'/',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'holidayNm',value:'',displayMode:'label',maxLength:'20',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',style:'',id:'saturdayYn',value:'',displayMode:'label',checkAlways:'false',valueType:'binary',falseValue:'0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'checkbox',style:'',id:'ddDowYn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'checkbox',style:'',id:'vacaDdYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'checkbox',style:'',id:'dsgVacaDdYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',style:'',id:'icnHoliDdYn',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'gr_holiday_spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',btnDelYn:'N',EngYn:'N',btnRowDelYn:'Y',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_delRow',gridID:'gr_holiday',cancelFunction:'scwin.f_Undo'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_CreateHoliday',type:'button',class:'btn white',objType:'ctrlBtn','ev:onclick':'scwin.f_CreateHoliday'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'토/일생성'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Save',type:'button',class:'btn',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})