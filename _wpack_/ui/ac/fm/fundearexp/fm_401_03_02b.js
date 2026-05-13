/*amd /ui/ac/fm/fundearexp/fm_401_03_02b.xml 24012 50375bf6bf11f30f6275dc4df9c7aa1bbcbc01cae8daefa4fac1a92d615a8799 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toYm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'수금처리-현금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1110110',name:'현금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1110120',name:'전도금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1110405',name:'외상매출금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1110300',name:'유가증권',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1110500',name:'단기대여금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1110700',name:'미수금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1111000',name:'선급금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1210200',name:'투자유가증권',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1210500',name:'보증금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1220000',name:'유형자산',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a2100500',name:'선수금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a2101300',name:'수입보증금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a2101400',name:'수탁금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a2200900',name:'유동화부채',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a4101000',name:'매출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a6110000',name:'영업외수익',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a6120000',name:'영업외비용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecv',name:'받을어음만기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a2100550',name:'가수금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalIn',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'before2100550',name:'선수금-가수금 전월처리분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a2100150',name:'외상매입금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a2100400',name:'미지급금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a2100800',name:'미지급비용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'notePay',name:'지급어음만기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalOut',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cf',name:'CF(1-2)',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_unit'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'',dataType:'text',defaultValue:'CO012'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_unit',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.fundearexp.RetrieveOrgCashFlowDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_unit',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_unit',target:'data:json,{"id":"ds_unit","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_unit_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMM"); //년도랑 월 표시
scwin.unitValue = 1; // 단위 컴포넌트 값에 따른 실제나눠야할 값 셋팅

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "FM114",
    compID: "gr_master:acctDeptCd"
  } // 그리드
  ];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_GetUnit();
  scwin.f_SetGridUnit();

  // tobe변경 : f_InitObjects 함수안에 내용과 똑같아 함수 호출로 대체
  // var sDate = g_sCurrDate + "01";
  // ed_fromYm.Text = sDate.toDate().after(0,0,-1).format("YYYYMM");
  // ed_toYm.Text = g_sCurrDate;

  // //Grid TitleHead명 셋팅
  // var sDate =  ed_fromYm.text.substring(0,4) + '년 ' + ed_fromYm.text.substring(4,6)+'월 ~ '
  //             + ed_toYm.text.substring(0,4) + '년 ' + ed_toYm.text.substring(4,6)+'월' ;
  // gr_master.ColumnProp('Ym', 'Name') = sDate ;

  scwin.f_InitObjects();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ed_fromYm, ed_toYm]))) {
    return;
  }

  //Grid TitleHead명 셋팅
  var sDate = ed_fromYm.getValue().substring(0, 4) + '년 ' + ed_fromYm.getValue().substring(4, 6) + '월 ~ ' + ed_toYm.getValue().substring(0, 4) + '년 ' + ed_toYm.getValue().substring(4, 6) + '월';
  gr_master.setHeaderValue("Ym", sDate);

  //ds_condition.UseChangeInfo = false 
  $c.sbm.execute($p, sbm_retrieve);

  //tobe변경 : scwin.sbm_retrieve_submitdone 밑에서 처리
  //scwin.f_SetGridUnit();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (await $c.gus.cfCheckCreateFlag($p)) {
    $c.gus.cfTurnCreateFlag($p, false);
  } else {
    if (ds_master.getRowCount() == 0) {
      await $c.win.alert($p, "조회된 데이터가 없습니다");
    } else {
      scwin.f_SetGridUnit();
    }
    totalRows.setValue(ds_master.getRowCount());
  }
};

//-------------------------------------------------------------------------
// 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_master.getRowCount() <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  var hiddenCnt = 0;
  gr_master.hiddenList.sort(function (t) {
    if (t == true) hiddenCnt++;
  });
  var colSpan = gr_master.getColCnt() - hiddenCnt;
  const options = {
    fileName: "조직별 캐시플로우(상세)_.xlsx",
    sheetName: "조직별 캐시플로우(상세)_",
    startRowIndex: 4,
    startColumnIndex: 0
  };
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: colSpan,
    text: "조직별 캐시플로우(상세)_",
    textAlign: "center",
    fontSize: 14,
    drawBorder: false
  }, {
    rowIndex: 3,
    colIndex: 0,
    rowSpan: 1,
    colSpan: colSpan,
    text: `단위_${lc_unit.getText(true)}`,
    textAlign: "right",
    fontSize: 10,
    drawBorder: false
  }];
  $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};

//-------------------------------------------------------------------------
// 초기화 (모든 데이터는 처음 상태로)
//-------------------------------------------------------------------------
scwin.f_InitObjects = function (e) {
  var sDate = scwin.g_sCurrDate + "01";
  var onepreday = $c.date.addDate($p, sDate, -1);
  ed_fromYm.setValue(onepreday.substring(0, 6)); //ed_fromYm.Text = sDate.toDate().after(0,0,-1).format("YYYYMM");
  ed_toYm.setValue(scwin.g_sCurrDate);

  //Grid TitleHead명 셋팅
  var sDate = ed_fromYm.getValue().substring(0, 4) + '년 ' + ed_fromYm.getValue().substring(4, 6) + '월 ~ ' + ed_toYm.getValue().substring(0, 4) + '년 ' + ed_toYm.getValue().substring(4, 6) + '월';
  gr_master.setHeaderValue("Ym", sDate);
};

//-------------------------------------------------------------------------
// 금액단위를 구한다.
//-------------------------------------------------------------------------
scwin.f_GetUnit = function () {
  ds_unit.removeAll();
  $c.sbm.execute($p, sbm_unit);
};
scwin.sbm_unit_submitdone = function (e) {
  scwin.f_SetDefaultUnit();
};

//-------------------------------------------------------------------------
// Default Unit 을 설정
//-------------------------------------------------------------------------
scwin.f_SetDefaultUnit = function () {
  if (ds_unit.getRowCount() < 1) return;
  lc_unit.setSelectedIndex(3);
};

//-------------------------------------------------------------------------
// 그리드 컬럼의 금액단위를 설정한다.
//-------------------------------------------------------------------------
scwin.f_SetGridUnit = function () {
  // var colid;
  // ds_master.Redraw = "false";
  // for (i=1; i <= ds_master.CountColumn ; i++) {
  // if ((ds_master.ColumnType(i) == 2 || ds_master.ColumnType(i) == 3)) {
  //     colid = ds_master.ColumnID(i);
  //     gr_master.ColumnProp(colid,"Value") = "{Round(" + colid + "/" + lc_unit.BindColVal + ",0)}";
  //     gr_master.ColumnProp(colid,"DecAO") = "0";
  // }
  // }
  // gr_master.Redraw = "true";

  if (ds_master.getRowCount() > 0) {
    for (var i = 0; i < ds_master.getRowCount(); i++) {
      for (var j = 0; j < ds_master.getTotalCol(); j++) {
        colid = gr_master.getColumnID(j);
        if (colid != "acctDeptCd") {
          colValue = $c.gus.cfIsNull($p, ds_master.getCellData(i, colid)) ? 0 : $c.num.parseInt($p, ds_master.getCellData(i, colid));
          calc = $c.num.round($p, colValue / $c.num.parseInt($p, scwin.unitValue), 0);
          ds_master.setCellData(i, colid, calc);
        }
      }
    }
  }
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.lc_unit_onchange = function (info) {
  switch (lc_unit.getValue()) {
    case "01":
      scwin.unitValue = 1;
      break;
    case "02":
      scwin.unitValue = 1000;
      break;
    case "03":
      scwin.unitValue = 1000000;
      break;
    case "04":
      scwin.unitValue = 100000000;
      break;
    default:
      break;
  }
};
scwin.lc_unit_onselected = function () {
  scwin.f_Retrieve();
  scwin.f_SetGridUnit();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'',src:'/cm/udc/fromToYearMon.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{refStDt:'fromYm',refDataMap:'dma_condition',style:'',id:'udc_fromToYearMon1',refEdDt:'toYm',edFromId:'ed_fromYm',edToId:'ed_toYm',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'일자',titleTo:'일자'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'단위',style:''}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_unit',style:'width: 80px;',submenuSize:'fixed',mandatory:'true',ref:'','ev:onchange':'scwin.lc_unit_onchange','ev:onselected':'scwin.lc_unit_onselected',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_unit'},E:[{T:1,N:'xf:label',A:{ref:'cdNm'}},{T:1,N:'xf:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'Y',btnUser:'Y',templateYn:'N',gridDownFn:'scwin.f_GridToExcel',gridDownUserAuth:'X',id:'udc_topGrd',gridID:'gr_master',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',fixedColumn:'1',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',dataDragSelect:'false',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column30',inputType:'text',rowSpan:'3',style:'',value:'수금처리-현금',width:'130'}},{T:1,N:'w2:column',A:{colSpan:'27',displayMode:'label',id:'Ym',inputType:'text',rowSpan:'',style:'',value:'날짜(누계)',width:'3080',sortable:'false'}}]},{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{colSpan:'21',displayMode:'label',id:'column47',inputType:'text',rowSpan:'',style:'',value:'Cash-In(1)',width:'2440',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'5',displayMode:'label',id:'column115',inputType:'text',rowSpan:'',style:'',value:'Cash-Out(2)',width:'540',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column131',inputType:'text',rowSpan:'2',style:'',value:'CF(1-2)',width:'100'}}]},{T:1,N:'w2:row',A:{id:'row6',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column55',inputType:'text',style:'',value:'현금',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column54',inputType:'text',style:'',value:'전도금',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column53',inputType:'text',style:'',value:'외상매출금',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'text',style:'',value:'유가증권',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column50',inputType:'text',style:'',value:'단기대여금',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column88',inputType:'text',style:'',value:'미수금',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column84',inputType:'text',style:'',value:'선급금',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column80',inputType:'text',style:'',value:'투자유가증권',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column76',inputType:'text',style:'',value:'보증금',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column72',inputType:'text',style:'',value:'유형자산',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column64',inputType:'text',style:'',value:'선수금',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column60',inputType:'text',style:'',value:'수입보증금',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',style:'',value:'수탁금',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column108',inputType:'text',style:'',value:'유동화부채',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column104',inputType:'text',style:'',value:'매출',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column100',inputType:'text',style:'',value:'영업외수익',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column92',inputType:'text',style:'',value:'영업외비용',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column96',inputType:'text',style:'',value:'받을어음만기',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column128',inputType:'text',style:'',value:'가수금',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column124',inputType:'text',style:'',value:'합계',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column120',inputType:'text',style:'',value:'선수금-가수금</br>전월처리분',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column116',inputType:'text',style:'',value:'외상매입금',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column112',inputType:'text',style:'',value:'미지급금',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column148',inputType:'text',style:'',value:'미지급비용',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column144',inputType:'text',style:'',value:'지급어음만기',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column140',inputType:'text',style:'',value:'합계',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'select',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a1110110',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a1110120',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a1110405',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a1110300',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a1110500',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a1110700',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a1111000',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a1210200',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a1210500',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a1220000',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a2100500',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a2101300',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a2101400',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a2200900',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a4101000',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a6110000',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a6120000',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecv',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a2100550',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totalIn',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'before2100550',inputType:'text',style:'',value:'',width:'130',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a2100150',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a2100400',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a2100800',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'notePay',inputType:'text',style:'',value:'',width:'130',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totalOut',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cf',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,###',textAlign:'center',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})