/*amd /ui/ja/dn/ja_010_01_05b.xml 16786 f858757db668003cadc268611e3d70c29b18a84989cf4df193d0b85f4afa3228 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilStatCd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatCd',name:'주유소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'endDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDdCnt',name:'적용일수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'oilingUpr',name:'적용단가',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sortGub',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgOilStatCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgStDt',name:'name13',dataType:'text',defaultValue:''}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ja.dn.basisinfomgnt.RetrieveOilUprInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_out","key":"OUT_DS1"},{"id":"dma_condition","key":"IN_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.submitPre','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ja.dn.basisinfomgnt.SaveOilUprInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_out","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = function () {
  scwin.globalVars();
  const codeOptions = [{
    grpCd: "JA020",
    compID: "gr_out:oilStatCd",
    useLocalCache: true
  }, {
    grpCd: "JA020",
    compID: "acb_oilStatCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.f_OnLoad);
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  const strCurDate = $c.date.getServerDateTime($p, 'yyyyMMdd');
  scwin.strQryStDt = strCurDate.slice(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

  // todo - 첫 조회 전엔 행추가 작동 안함
  scwin.firstRetrieve = false;
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  acb_oilStatCd.addItem('전체', '', '', 0);
  acb_oilStatCd.setSelectedIndex(0);
  ica_stDt.setValue(scwin.strQryStDt);
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 조회조기 필드 Clear
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, portCondtionPart, null);
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 조회
 */
scwin.f_Retrieve = function () {
  if (ica_stDt.getValue() == "") {
    $c.win.alert($p, "년월은 필수조건 입니다.");
    ica_stDt.focus();
    return false;
  }
  ;

  // todo - 첫 조회 전엔 행추가 작동 안함
  scwin.firstRetrieve = true;
  scwin.submitExcute(sbm_retrieve);
};

/**
 * @method 
 * @name f_AddRow 
 * @description 행추가
 */
scwin.f_AddRow = function () {
  // todo - 첫 조회 전엔 행추가 작동 안함
  if (!scwin.firstRetrieve) return;
  let insertIdx = ds_out.insertRow();
  ds_out.setCellData(insertIdx, "sortGub", "1");
  scwin.setColumnOptions(gr_out, insertIdx);
  gr_out.setFocusedCell(insertIdx, 0);
};

/**
 * @method 
 * @name f_Cancel 
 * @description 취소
 */
scwin.f_Cancel = function () {
  let focusIdx = ds_out.getRowPosition();
  if (ds_out.getRowStatus(focusIdx) == 'C') {
    ds_out.removeRow(focusIdx);
    gr_out.setFocusedCell(0, 0);
  } else {
    ds_out.undoRow(focusIdx);
  }
  ;
};

/**
 * @method 
 * @name f_DelRow 
 * @description 행삭제
 */
scwin.f_DelRow = function () {
  let focusIdx = ds_out.getRowPosition();
  if (ds_out.getRowStatus(focusIdx) == 'C') {
    ds_out.removeRow(focusIdx);
  } else {
    ds_out.deleteRow(focusIdx);
  }
  ;
};

/**
 * @method 
 * @name f_save 
 * @description 저장
 */
scwin.f_save = async function () {
  const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!retConfirm) return;
  scwin.submitExcute(sbm_save);
};

/**
 * @method 
 * @name setColumnOptions 
 * @description 그리드 데이터 변경 시 컬럼 속성 변경
 */
scwin.setColumnOptions = function (grid, rowIndex) {
  let rowData = $p.getComponentById(grid.getDataList()).getRowJSON(rowIndex);
  let columns = ["oilStatCd", "stDt", "endDt", "adptDdCnt", "oilingUpr"];
  for (let i = 0; i < columns.length; i++) {
    if (rowData.sortGub == '2') {
      grid.setCellBackgroundColor(rowIndex, columns[i], '#CCFFFF');
      grid.setCellColor(rowIndex, columns[i], 'red');
    }
    ;
    if (columns[i] == 'adptDdCnt') continue; // 적용일수 제외
    grid.setCellReadOnly(rowIndex, columns[i], !(rowData.sortGub == '1'));
    if (columns[i] != 'oilStatCd') continue;
    grid.setCellReadOnly(rowIndex, columns[i], !(rowData.rowStatus == 'C'));
  }
  ;
};

/**
 * @method 
 * @name excelDown 
 * @description 엑셀 다운로드
 */
scwin.f_excelDown = function () {
  let excelName = '주유소별 단가내역';
  let options = {
    sheetName: excelName,
    fileName: excelName + ".xlsx"
  };
  $c.data.downloadGridViewExcel($p, gr_out, options);
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    await scwin.submitdone(e);
  }
  ;
};

/**
 * @method 
 * @name changeNumFormat 
 * @description 행 갯수에 따라 컬럼 숫자 표기 포맷 변경
 */
scwin.changeNumFormat = function (rowCnt) {
  const numFormatTargetCol = ['chk', 'adptDdCnt', 'oilingUpr', 'sortGub'];
  let numFormat = '#,##0';
  let ignoreChar = '.';
  if (rowCnt == 0) {
    numFormat = '#,##0.000000';
    ignoreChar = '';
  }
  ;
  numFormatTargetCol.forEach(colId => {
    gr_out.setColumnDisplayFormat(colId, numFormat);
    gr_out.setIgnoreChar(colId, ignoreChar);
  });
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name submitPre 
 * @description submit 요청전
 */
scwin.submitPre = function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_retrieve:
      let jsonData = dma_condition.getJSON();
      jsonData.stDt = ica_stDt.getValue();
      jsonData.oilStatCd = acb_oilStatCd.getValue();
      dma_condition.setJSON(jsonData);
      break;
    default:
      break;
  }
};

/**
 * @method 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_retrieve:
      if (e.responseJSON.resultDataSet[0].Code == -1) return;
      let rowCnt = ds_out.getRowCount();

      // todo - asis 조회 시 데이터가 없으면 행 추가시에 자릿수 표기가 달라져서 추가
      scwin.changeNumFormat(rowCnt);
      if (rowCnt == 0) {
        $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      }
      ;
      totalRows.setValue(rowCnt);
      for (let i = 0; i < rowCnt; i++) {
        scwin.setColumnOptions(gr_out, i);
      }
      ;
      break;
    case sbm_save:
      if (e.responseJSON.resultDataSet[0].Code == -1) return;
      $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
      scwin.f_Retrieve();
      break;
    default:
      break;
  }
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name gr_out_onyearselect 
 * @description inputType이 캘린더인 경우 날짜 선택 시 발생
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @param {object} info
 */
scwin.gr_out_ondateselect = function (rowIndex, columnIndex, date, dateObject) {
  let colId = this.getColumnID(columnIndex);
  let rowData = ds_out.getRowJSON(rowIndex);
  let fromDate, toDate;
  if (!['stDt', 'endDt'].includes(colId)) return;
  switch (colId) {
    case "stDt":
      if (date == "" || rowData.endDt == "") return;
      fromDate = date;
      toDate = rowData.endDt;
    case "endDt":
      if (rowData.stDt == "" || date == "") return;
      fromDate = rowData.stDt;
      toDate = date;
      break;
    default:
      break;
  }
  ds_out.setCellData(rowIndex, 'adptDdCnt', $c.date.diffDate($p, fromDate, toDate) + 1);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'portCondtionPart',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_stDt',pickerType:'dynamic',style:'',displayFormat:'yyyy/MM'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주유소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_oilStatCd',search:'start',style:'width:200px;',displayMode:'value delim label'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'주유소별 단가',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_out',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownUserAuth:'X',gridDownFn:'f_excelDown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',style:'',visibleRowNum:'15',visibleRowNumFix:'true',focusMode:'row','ev:ondateselect':'scwin.gr_out_ondateselect',rowStatusVisible:'true',rowStatusWidth:'15',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'선택',width:'70',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'주유소',width:'150',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'적용기간',width:'210',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'적용단가',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'구분',width:'120',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',value:'시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',value:'종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',value:'적용일수',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'70',hidden:'true',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{id:'oilStatCd',inputType:'select',width:'150',textAlign:'left',displayMode:'value delim label',editModeEvent:'onclick',selectedData:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stDt',inputType:'calendar',width:'120',displayFormat:'yyyy/MM/dd',dataType:'date',editModeEvent:'onclick'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'endDt',inputType:'calendar',width:'120',displayFormat:'yyyy/MM/dd',dataType:'date',editModeEvent:'onclick'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDdCnt',inputType:'text',width:'120',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0.######',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilingUpr',inputType:'text',width:'120',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sortGub',inputType:'text',width:'120',hidden:'true',readOnly:'true',excelCellType:'number',dataType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column34',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column32',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',EngYn:'N',rowAddFunction:'f_AddRow',rowDelFunction:'f_DelRow',btnCancelObj:'ctrlBtn',btnRowDelObj:'ctrlBtn',btnRowAddObj:'ctrlBtn',cancelFunction:'f_Cancel'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})