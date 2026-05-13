/*amd /ui/ds/sl/sl_101_01_03b.xml 20497 bf84ad7ceff7cb0fd366fc2a677c0b9d65c61016a4d04978b2ae4d428db24c67 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdDt',name:'기준일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_stockDetail',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ordClsCd',name:'색구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'재고중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntClsCd',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_stockDetailCrs',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumCnt',name:'합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ordClsCd',name:'색구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col0',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col1',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name15',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_stockAmt',action:'/ds.sl.RetrieveScalePresentStockAmtCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_stockDetail","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_stockDetail","key":"OUT_DS1"}]'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = function () {};

/**
 * @event 
 * @name onUdcCompleted 
 * @description UDC 완료
 */
scwin.onUdcCompleted = function () {};

/**
 * @event 
 * @name ondataload 
 * @description 코드 완료
 */
scwin.ondataload = function () {
  scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  const userInfo = $c.data.getMemInfo($p);
  scwin.curDate = $c.date.getServerDateTime($p, 'yyyyMMdd');
  scwin.userNm = userInfo.userNm;
  scwin.userTel = userInfo.empTelNo;
  scwin.userFax = userInfo.empFaxNo;
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  ica_stdDt.setValue(scwin.curDate);
  ica_stdDt.focus();
};

/**
 * @method 
 * @name f_Retrieve 
 * @description 조회
 */
scwin.f_Retrieve = async function () {
  if (ica_stdDt.getValue().length != 8) {
    await $c.win.alert($p, '기준일자는 필수입력 입니다.');
    ica_stdDt.focus();
    return;
  }
  ;
  dma_search.setEmptyValue();
  dma_search.set('stdDt', ica_stdDt.getValue());
  scwin.submitExcute(sbm_stockAmt);
};

/**
 * @method 
 * @name f_Retrieve 
 * @description 휴지통 처리
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve);
  ica_stdDt.focus();
};

/**
 * @method 
 * @name f_Excel 
 * @description 엑셀 출력
 */
scwin.f_Excel = async function () {
  const count = ds_stockDetailCrs.getRowCount();
  if (!(count > 0)) return;
  const argTitle = '재고조회';
  const argGrid = gr_stockDetailCrs;
  let options = {
    sheetName: argTitle,
    fileName: argTitle + '.xlsx',
    startRowIndex: 3,
    useHeaderCheckBoxLabel: true,
    useStyle: false
  };
  let visibleColCnt = 0;
  let totalColCnt = argGrid.getTotalCol();
  for (let i = 0; i < totalColCnt; i++) {
    if (argGrid.getColumnVisible(i)) visibleColCnt++;
  }
  ;

  // ####/##/##
  const stdDate = $c.date.formatDate($p, ica_stdDt.getValue(), 'date');
  let infoArr = [{
    text: argTitle,
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: visibleColCnt,
    textAlign: 'center',
    fontSize: '12px',
    fontName: '돋움체',
    color: 'black',
    bgColor: '#ffffff',
    drawBorder: false
  }, {
    text: `기준일자 [${stdDate}]`,
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: visibleColCnt,
    textAlign: 'left',
    fontSize: '10px',
    fontName: '돋움체',
    color: 'black',
    bgColor: '#ffffff',
    drawBorder: false
  }];
  await $c.data.downloadGridViewExcel($p, argGrid, options, infoArr);
};

// function f_setqrynm(tname, str) {
//     let vSearchOption = ';font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;';
//     gr_stockDetailCrs.SetExcelTitle(1, 'value:' + tname + ' [' + str + ']' + vSearchOption);
// }

/**
 * @method 
 * @name f_pringOz 
 * @description 엑셀 출력
 */
scwin.f_pringOz = async function () {
  let odiyn = ds_stockDetailCrs.getRowCount();
  if (odiyn == 0) {
    await $c.win.alert($p, '조회후 화주를 선택후 발행버튼을 클릭해주세요');
    return;
  }
  ;
  const focusedIdx = ds_stockDetailCrs.getRowPosition();
  const rowData = ds_stockDetailCrs.getRowJSON(focusedIdx);
  let odiName = '',
    reportName = '',
    odiParam = {},
    viewerParam = {},
    formParam = {};
  viewerParam['mode'] = 'export';
  viewerParam['zoom'] = '100';
  viewerParam['useprogressbar'] = 'true'; //PROGRESSBAR 안보이게....

  if (rowData['clntNo'] == '102887') {
    odiName = 'sl_101_01_03_01';
    reportName = '/ds/sl/sl_101_01_03_01.ozr';
    odiParam['stdDt'] = ica_stdDt.getValue();
    odiParam['curDt'] = scwin.curDate;
    odiParam['clntNo'] = rowData['clntNo'];
    odiParam['clntNm'] = rowData['clntNm'];
    odiParam['userNm'] = scwin.userNm;
    odiParam['userTel'] = scwin.userTel;
    odiParam['userFax'] = scwin.userFax;
  } else {
    odiName = 'sl_101_01_03';
    reportName = '/ds/sl/sl_101_01_03.ozr';
    odiParam['stdDt'] = ica_stdDt.getValue();
    odiParam['curDt'] = scwin.curDate;
    odiParam['clntNo'] = rowData['clntNo'];
    odiParam['clntNm'] = rowData['clntNm'];
    odiParam['userNm'] = scwin.userNm;
    odiParam['userTel'] = scwin.userTel;
    odiParam['userFax'] = scwin.userFax;
  }
  ;
  const data = {
    odiName: odiName,
    reportName: reportName,
    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
    odiParam: odiParam,
    // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
    viewerParam: viewerParam,
    // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
    formParam: formParam
  };
  let options = {
    id: 'ozReportPopup',
    popupName: '오즈 리포트',
    modal: true,
    type: 'browserPopup',
    width: 1000,
    height: 600,
    title: '오즈 리포트'
  };
  await $c.win.openPopup($p, '/ui/cm/zz/ozreportPopup.xml', options, data);
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    if (e.responseJSON.resultDataSet[0].Code == -1) return;
    await scwin.submitdone(e);
  }
  ;
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @method 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_stockAmt:
      scwin.ds_stockDetail_OnLoadCompleted();
      scwin.f_pivotStockDetail(); // 데이터 피벗
      scwin.ds_stockDetailCrs_OnLoadCompleted();
      break;
    default:
      break;
  }
};

/**
 * @method 
 * @name ds_stockDetail_OnLoadCompleted 
 * @description
 * @asis for=ds_stockDetail event=OnLoadCompleted(rowCnt)
 */
scwin.ds_stockDetail_OnLoadCompleted = async function () {
  const rowCnt = ds_stockDetail.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, '조회된 데이터가 없습니다.');
    return;
  }
  ;
};

/**
 * @method 
 * @name ds_stockDetailCrs_OnLoadCompleted 
 * @description
 * @asis for=ds_stockDetailCrs event=OnLoadCompleted(rowCnt)
 */
scwin.ds_stockDetailCrs_OnLoadCompleted = function () {
  const rowCnt = ds_stockDetailCrs.getRowCount();
  totalRows.setValue(rowCnt);
  gr_stockDetailCrs.setFocusedCell(0, 1);

  // for=gr_stockDetailCrs event=OnUserColor(Row,eventid)
  const allData = ds_stockDetailCrs.getAllJSON();
  for (let i = 0; i < allData.length; i++) {
    let rowData = allData[i];
    if (['1', '2', '3', '4'].includes(rowData['ordClsCd'])) {
      gr_stockDetailCrs.setRowBackgroundColor(i, '#DAD9FF');
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name f_pivotStockDetail 
 * @description
 * @asis for=ds_stockDetailCrs event=OnLoadCompleted(rowCnt)
 */
scwin.f_pivotStockDetail = function () {
  // 전체 데이터 준비
  const allData = ds_stockDetail.getAllJSON();

  // 중복값 제거 및 키값 세팅
  const codeMap = {};
  allData.forEach(d => {
    codeMap[d.commCd] = d.commNm;
  });

  // 컬럼 순서 정렬
  const sortedCodes = Object.keys(codeMap).sort((a, b) => {
    const nameA = codeMap[a];
    const nameB = codeMap[b];

    // 정규식을 이용해 첫 글자가 한글인지 확인
    const isKorean = str => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(str[0]);
    const aIsKor = isKorean(nameA);
    const bIsKor = isKorean(nameB);

    // 둘 다 한글이거나 둘 다 영문인 경우 (같은 그룹 내 정렬)
    if (aIsKor === bIsKor) {
      return nameA.localeCompare(nameB, 'ko');
    }

    // 한글과 영문이 섞인 경우 (영문을 앞으로)
    return aIsKor ? 1 : -1;
  });
  const colIdxLookup = {};
  sortedCodes.forEach((code, i) => {
    colIdxLookup[code] = i;
  });

  // 그리드 초기화
  const MAX_COL = 11;
  for (let i = 0; i < MAX_COL; i++) {
    const colId = `col${i}`;
    const code = sortedCodes[i];
    if (!$c.util.isEmpty($p, code)) {
      gr_stockDetailCrs.setHeaderValue(colId, codeMap[code]);
      gr_stockDetailCrs.setColumnVisible(colId, true);
    } else {
      gr_stockDetailCrs.setColumnVisible(colId, false);
    }
  }
  ;

  // 데이터 피벗
  const pivotResult = allData.reduce((acc, curr) => {
    const {
      clntNm,
      clntNo,
      ordClsCd,
      commCd,
      stockWt
    } = curr;
    const colIdx = colIdxLookup[commCd];

    // 행이 없으면 초기화 (합계 및 모든 컬럼 0 세팅)
    if (!acc[clntNm]) {
      acc[clntNm] = {
        clntNo,
        clntNm,
        ordClsCd,
        sumCnt: 0
      };
      sortedCodes.forEach((code, i) => acc[clntNm][`col${i}`] = 0);
    }
    ;
    const weight = $c.num.parseFloat($p, stockWt, 0);
    if (colIdx != -1) acc[clntNm][`col${colIdx}`] += weight;
    // 항목이 표시되지 않는 값은 제외한다
    if (commCd != '') acc[clntNm].sumCnt += weight;
    return acc;
  }, {});
  ds_stockDetailCrs.setJSON(Object.values(pivotResult), false);
};

/**
 * @evnent 
 * @name btn_fieldClear_onclick 
 * @description 조회조건 초기화 버튼 클릭
 */
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

/**
 * @evnent 
 * @name btn_retrieve_onclick 
 * @description 조회 버튼 클릭
 */
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

/**
 * @evnent 
 * @name btn_report_onclick 
 * @description 재고현황발행 버튼 클릭
 */
scwin.btn_report_onclick = function (e) {
  scwin.f_pringOz();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_stdDt',pickerType:'dynamic',style:'',mandatory:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear','ev:onclick':'scwin.btn_fieldClear_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve','ev:onclick':'scwin.btn_retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'현재재고조회',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'N',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_stockDetailCrs',gridDownUserAuth:'X',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_stockDetailCrs',id:'gr_stockDetailCrs',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',fixedColumn:'2',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',value:'화주',width:'160',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',value:'화주',width:'160'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col0',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col1',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col3',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col4',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col5',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col6',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col7',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col8',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col9',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col10',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumCnt',inputType:'text',value:'합계',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ordClsCd',inputType:'text',value:'색구분',width:'80',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'160',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'160',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col0',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col1',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col2',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col3',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col4',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col5',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col6',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col7',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col8',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col9',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col10',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumCnt',inputType:'text',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ordClsCd',inputType:'text',width:'80',textAlign:'right',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_report','ev:onclick':'scwin.btn_report_onclick',label:'저장',style:'',type:'button',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'재고현황발행'}]}]}]}]}]}]}]}]}]})