/*amd /ui/ac/fm/fundearexp/fm_401_03_01b.xml 28416 bb32b95453f957326c24127219c6a21b0a96615e4d03986623150e4fdd3406d0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toYm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'수금처리-현금 ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cash',name:'현금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1110110',name:'현금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1110120',name:'전도금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1110405',name:'외상매출금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAset',name:'기타자산',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1110300',name:'유가증권',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1110500',name:'단기대여금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1110700',name:'미수금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1111000',name:'선급금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1210200',name:'투자유가증권',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1210500',name:'보증금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a1220000',name:'유형자산',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etc',name:'기타',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a2100500',name:'선수금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a2101300',name:'수입보증금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a2101400',name:'수탁금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a2200900',name:'유동화부채',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a4101000',name:'매출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a6110000',name:'영업외수익',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a6120000',name:'영업외비용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecv',name:'받을어음만기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a2100550',name:'가수금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalIn',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'before2100550',name:'선수금-가수금 전월처리분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a2100150',name:'외상매입금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a2100400',name:'미지급금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'a2100800',name:'미지급비용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'notePay',name:'지급어음만기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalOut',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cf',name:'CF(1-2)',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_unit'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text',defaultValue:'CO012'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_unit',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.fundearexp.RetrieveOrgCashFlowDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_unit',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_ch data:json,dma_ch data:json,dma_unit',target:'data:json,{"id":"ds_unit","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_unit_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMM"); //년도랑 월 표시

scwin.unitValue = 1;

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
  // var sDate = scwin.g_sCurrDate + "01";
  // //ed_fromYm.Text = sDate.toDate().after(0,0,-1).format("YYYYMM");
  // var onepreday = $c.date.addDate(sDate, -1);
  // ed_fromYm.setValue(onepreday.substring(0,6));
  // ed_toYm.setValue(scwin.g_sCurrDate);

  // //Grid TitleHead명 셋팅
  // var sDate =  ed_fromYm.getValue().substring(0,4) + '년 ' + ed_fromYm.getValue().substring(4,6)+'월 ~ '
  //             + ed_toYm.getValue().substring(0,4) + '년 ' + ed_toYm.getValue().substring(4,6)+'월' ;

  // gr_master.setHeaderValue("Ym", sDate);
  scwin.f_InitObjects();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // 필수입력 항목에 대한 내역을 CHECK한다.
  if (!(await $c.gus.cfValidate($p, [ed_fromYm, ed_toYm], null, true))) {
    return;
  }

  //Grid TitleHead명 셋팅
  var sDate = ed_fromYm.getValue().substring(0, 4) + '년 ' + ed_fromYm.getValue().substring(4, 6) + '월 ~ ' + ed_toYm.getValue().substring(0, 4) + '년 ' + ed_toYm.getValue().substring(4, 6) + '월';
  gr_master.setHeaderValue("Ym", sDate);

  //ds_condition.UseChangeInfo = false 
  $c.sbm.execute($p, sbm_retrieve);

  //tobe 위치변경 : scwin.sbm_retrieve_submitdone 밑에서 처리
  //scwin.f_SetGridUnit();
};
scwin.sbm_retrieve_submitdone = function (e) {
  if ($c.gus.cfCheckCreateFlag($p)) {
    $c.gus.cfTurnCreateFlag($p, false);
  } else {
    if (ds_master.getRowCount() == 0) {
      $c.win.alert($p, "조회된 데이터가 없습니다");
    } else {
      if (ds_master.getRowCount() > 0) {
        var calc = 0;
        var allJson = [];
        for (var rowIndex = 0; rowIndex < ds_master.getRowCount(); rowIndex++) {
          // 기존 row 전체 가져오기
          var rowJson = ds_master.getRowJSON(rowIndex);
          var a1110110V = $c.gus.cfIsNull($p, rowJson.a1110110) ? 0 : $c.num.parseInt($p, rowJson.a1110110);
          var a1110120V = $c.gus.cfIsNull($p, rowJson.a1110120) ? 0 : $c.num.parseInt($p, rowJson.a1110120);
          calc = a1110110V + a1110120V;
          rowJson["cash"] = calc;
          var a1110300V = $c.gus.cfIsNull($p, rowJson.a1110300) ? 0 : $c.num.parseInt($p, rowJson.a1110300);
          var a1110500V = $c.gus.cfIsNull($p, rowJson.a1110500) ? 0 : $c.num.parseInt($p, rowJson.a1110500);
          var a1110700V = $c.gus.cfIsNull($p, rowJson.a1110700) ? 0 : $c.num.parseInt($p, rowJson.a1110700);
          var a1111000V = $c.gus.cfIsNull($p, rowJson.a1111000) ? 0 : $c.num.parseInt($p, rowJson.a1111000);
          var a1210200V = $c.gus.cfIsNull($p, rowJson.a1210200) ? 0 : $c.num.parseInt($p, rowJson.a1210200);
          var a1210500V = $c.gus.cfIsNull($p, rowJson.a1210500) ? 0 : $c.num.parseInt($p, rowJson.a1210500);
          var a1220000V = $c.gus.cfIsNull($p, rowJson.a1220000) ? 0 : $c.num.parseInt($p, rowJson.a1220000);
          calc = a1110300V + a1110500V + a1110700V + a1111000V + a1210200V + a1210500V + a1220000V;
          rowJson["etcAset"] = calc;
          var a2100500V = $c.gus.cfIsNull($p, rowJson.a2100500) ? 0 : $c.num.parseInt($p, rowJson.a2100500);
          var a2101300V = $c.gus.cfIsNull($p, rowJson.a2101300) ? 0 : $c.num.parseInt($p, rowJson.a2101300);
          var a2101400V = $c.gus.cfIsNull($p, rowJson.a2101400) ? 0 : $c.num.parseInt($p, rowJson.a2101400);
          var a2200900V = $c.gus.cfIsNull($p, rowJson.a2200900) ? 0 : $c.num.parseInt($p, rowJson.a2200900);
          var a4101000V = $c.gus.cfIsNull($p, rowJson.a4101000) ? 0 : $c.num.parseInt($p, rowJson.a4101000);
          var a6110000V = $c.gus.cfIsNull($p, rowJson.a6110000) ? 0 : $c.num.parseInt($p, rowJson.a6110000);
          var a6120000V = $c.gus.cfIsNull($p, rowJson.a6120000) ? 0 : $c.num.parseInt($p, rowJson.a6120000);
          calc = a2100500V + a2101300V + a2101400V + a2200900V + a4101000V + a6110000V + a6120000V;
          rowJson["etc"] = calc;
          allJson.push(rowJson);
        }
        ds_master.setJSON(allJson);
      }
      totalRows.setValue(ds_master.getRowCount());
      scwin.f_SetGridUnit();
    }
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
  const options = {
    fileName: "조직별 캐시플로우_.xlsx",
    sheetName: "조직별 캐시플로우_"
  };
  $c.data.downloadGridViewExcel($p, gr_master, options);
};

//-------------------------------------------------------------------------
// 초기화 (모든 데이터는 처음 상태로)
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
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
  var colid;
  var colValue;
  var calc = 0;
  //ds_master.Redraw = "false";
  // for (i=1; i <= ds_master.CountColumn ; i++) {
  // if ((ds_master.ColumnType(i) == 2 || ds_master.ColumnType(i) == 3)) {
  //     colid = ds_master.ColumnID(i);
  //     gr_master.ColumnProp(colid,"Value") = "{Round(" + colid + "/" + lc_unit.BindColVal + ",0)}";
  //     gr_master.ColumnProp(colid,"DecAO") = "0";
  // }
  // }
  // //gr_master.Redraw = "true";

  if (ds_master.getRowCount() > 0) {
    for (var i = 0; i < ds_master.getRowCount(); i++) {
      for (var j = 0; j < ds_master.getTotalCol(); j++) {
        colid = gr_master.getColumnID(j);
        if (colid != "acctDeptCd") {
          colValue = $c.gus.cfIsNull($p, ds_master.getCellData(i, colid)) ? 0 : $c.num.parseInt($p, ds_master.getCellData(i, colid));
          calc = $c.num.round($p, colValue / $c.num.parseInt($p, scwin.unitValue), 0);
          ds_master.setCellData(i, colid, calc);
        }

        // if(colid == "cash" || colid == "etcAset" || colid == "etc"){
        //     var cashV = $c.gus.cfIsNull(ds_master.getCellData(i, colid)) ? 0 : $c.num.parseInt(ds_master.getCellData(i, colid)) 
        //     calc = $c.num.parseInt(cashV / scwin.unitValue);
        //     ds_master.setCellData(i, colid, calc)
        // }
      }
    }
  }
};
scwin.btn_delete_onclick = function (e) {
  scwin.f_InitObjects();
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{refStDt:'fromYm',refDataMap:'dma_condition',style:'',id:'udc_fromToYearMon',refEdDt:'toYm',edToId:'ed_toYm',edFromId:'ed_fromYm',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'일자',titleTo:'일자',validExp:'일자:yes:length=6'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'단위',class:'req'}},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 80px;',allOption:'',id:'lc_unit',class:'',direction:'auto',ref:'',mandatory:'true','ev:onchange':'scwin.lc_unit_onchange','ev:onselected':'scwin.lc_unit_onselected',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_unit'},E:[{T:1,N:'xf:label',A:{ref:'cdNm'}},{T:1,N:'xf:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',btnUser:'Y',gridID:'gr_master',gridDownFn:'scwin.f_GridToExcel',id:'udc_topGrd',btnPlusYn:'Y',gridDownYn:'Y',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',fixedColumn:'1',dataDragSelect:'false',columnMove:'true',fixedColumnNoMove:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'수금처리-현금',width:'130',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'Ym',inputType:'text',style:'',value:'날짜(누계)',width:'3080',colSpan:'30',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'2440',inputType:'text',style:'',id:'column47',value:'Cash-In(1)',displayMode:'label',colSpan:'24',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'540',inputType:'text',style:'',id:'column115',value:'Cash-Out(2)',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column131',value:'CF(1-2)',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column56',value:'현금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'현금',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'전도금',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column53',value:'외상매출금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'기타자산',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'유가증권',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column50',value:'단기대여금',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column88',value:'미수금',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'선급금',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column80',value:'투자유가증권',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'보증금',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'유형자산',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'기타',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'선수금',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column60',value:'수입보증금',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'수탁금',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column108',value:'유동화부채',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column104',value:'매출',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column100',value:'영업외수익',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column92',value:'영업외비용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column96',value:'받을어음만기',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column128',value:'가수금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column124',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column120',value:'선수금-가수금</br>전월처리분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column116',value:'외상매입금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column112',value:'미지급금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column148',value:'미지급비용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column144',value:'지급어음만기',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column140',value:'합계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'select',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cash',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a1110110',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a1110120',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###',dataType:'number',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a1110405',inputType:'text',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'etcAset',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a1110300',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a1110500',inputType:'text',style:'',value:'',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a1110700',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a1111000',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'a1210200',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a1210500',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a1220000',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'etc',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a2100500',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'a2101300',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'a2101400',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'a2200900',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'a4101000',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'a6110000',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'a6120000',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'billRecv',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a2100550',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'totalIn',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'before2100550',value:'',displayMode:'label',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'a2100150',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'a2100400',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'a2100800',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'notePay',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totalOut',value:'',displayMode:'label',dataType:'number',textAlign:'right',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'cf',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})