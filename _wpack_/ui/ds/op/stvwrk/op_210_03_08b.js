/*amd /ui/ds/op/stvwrk/op_210_03_08b.xml 30042 17196f37ddaf9945a6f54505faacb0d18d01bd711831c0ffc6a99abf13acffb2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'reYmFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reYmTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oldWageAgrmntDt',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'newWageAgrmntDt',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'includeRetireYn',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_increaseList',saveRemovedData:'true','ev:ondataload':'scwin.ds_increaseList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'groupNm',name:'항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubunNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'beAmt',name:'인상전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'afAmt',name:'인상후',dataType:'text'}},{T:1,N:'w2:column',A:{id:'diffAmt',name:'차액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reYm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totCnt',name:'인원(건수)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totSum',name:'합계',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_statementList',saveRemovedData:'true','ev:ondataload':'scwin.ds_statementList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직책',dataType:'text'}},{T:1,N:'w2:column',A:{id:'standardSal',name:'기본임금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totExtdAmt',name:'연장비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unionAmt',name:'노조비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'총액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'groupLv1',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'groupLv2',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rowStatus',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ordinarySal',name:'name18',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_increaseCrs',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'groupNm',name:'항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubunNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'beAmt',name:'인상전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'afAmt',name:'인상후',dataType:'text'}},{T:1,N:'w2:column',A:{id:'diffAmt',name:'차액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reYm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totCnt',name:'인원(건수)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totSum',name:'합계',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'co_ds_combo1_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveRegularReStatementCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_increaseList","key":"OUT_DS1"},{"id":"ds_statementList","key":"OUT_DS2"},{"id":"dma_condition","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_increaseList","key":"OUT_DS1"},{"id":"ds_statementList","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/cm.zz.RetrieveComboCMD.do?sysCd=BerthNonUsableEBC&queryId=retriveLobranCodeList',method:'post',mediatype:'application/json',ref:'data:json,co_ds_combo1_search',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.lobranCd = scwin.login.lobranCd;
scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환

scwin.onpageload = async function () {
  co_ds_combo1_search.set("sysCd", "BerthNonUsableEBC");
  co_ds_combo1_search.set("queryId", "retriveLobranCodeList");
  var rs = await $c.sbm.execute($p, sbm_lobran);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    co_ds_combo1.setJSON(rs.responseJSON.GAUCE);
    co_ds_combo1.sort("code", 0);
    acb_lobranCd.setValue(scwin.lobranCd);
    acb_lobranCd.focus();
  }
  ;
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  // scwin.f_initSetTab(); //tab세팅	
  // f_SetDataHeader();
};
scwin.ondataload = function () {
  scwin.f_SetDefaultData();
};
scwin.f_SetDefaultData = function () {
  var vLastYYYY = WebSquare.date.dateTimeAdd(scwin.vCurDate, -1, "year");
  var vBefLastYYYY = WebSquare.date.dateTimeAdd(vLastYYYY, -1, "year");
  ed_reYmFrom.setValue(vLastYYYY + "04");
  ed_reYmTo.setValue(vLastYYYY + "11");
  acb_lobranCd.setValue(scwin.lobranCd);
  acb_lobranCd.focus();
  ica_newWageAgrmntDt.setValue(vLastYYYY + "0401");
  ica_oldWageAgrmntDt.setValue(vBefLastYYYY + "0401");
  acb_wrkPlClsCd.setValue("02");
  chk_includeRetireYn.setValue("1");
};

// Tab 초기화
scwin.f_initSetTab = function () {
  // $c.gus.cfEnableObjects([tr_tab_center0, tr_tab_center1]);
  // $c.gus.cfViewTab(0);
};

// 소급분 조회
scwin.f_Retrieve = async function () {
  // 검색조건 필수 입력 체크
  if (!(await $c.gus.cfValidate($p, [acb_lobranCd, ed_reYmFrom, ed_reYmTo, acb_wrkPlClsCd]))) {
    return;
  }
  if (chk_includeRetireYn.getValue() == true) {
    dma_condition.set("includeRetireYn", "Y");
  } else {
    dma_condition.set("includeRetireYn", "N");
  }
  dma_condition.set("lobranCd", acb_lobranCd.getValue());
  dma_condition.set("wrkPlClsCd", acb_wrkPlClsCd.getValue());
  dma_condition.set("oldWageAgrmntDt", ica_oldWageAgrmntDt.getValue());
  dma_condition.set("newWageAgrmntDt", ica_newWageAgrmntDt.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_gridToExcel = function () {
  let options = {
    fileName: "상용직 인상금액",
    // + ".xls",
    sheetName: "상용직 인상금액"
  };
  $c.data.downloadGridViewExcel($p, gr_increaseList, options);
};
scwin.f_gridToExcel2 = function () {
  var reYmFrom = ed_reYmFrom.getValue();
  var reYmTo = ed_reYmTo.getValue();
  var vTitle = "소급분(" + "'" + reYmFrom.substring(0, 4) + ". " + reYmFrom.substring(4, 6) + "월~" + reYmTo.substring(4, 6) + "월)";
  var argGridTotalCol = 0;
  for (var i = 0; i < gr_statementList.getTotalCol(); i++) {
    if (gr_statementList.getColumnVisible(i)) {
      argGridTotalCol++;
    }
  }
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: argGridTotalCol,
    text: vTitle,
    textAlign: "center",
    fontSize: "22",
    fontName: "돋움체",
    color: "black",
    fontWeight: "",
    drawBorder: "false",
    borderColor: "",
    borderWidth: "",
    wordWrap: "true",
    bgColor: "#ffffff"
  }];
  const options = {
    fileName: "상용직 소급분명세서.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "상용직 소급분명세서",
    type: "1",
    startRowIndex: 2
  };
  $c.data.downloadGridViewExcel($p, gr_statementList, options, infoArr);
};

// 검색영역 Field Clear함.
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  ds_increaseCrs.setJSON(ds_increaseList.getAllJSON());
  options = {};
  sGroupExpr = "groupNm:gubunNm:afAmt:beAmt:totSum:diffAmt,reYm,workHhDiff:totCnt:totAmt";
  await $c.data.applyGridViewGroupExpr($p, ds_increaseCrs, gr_increaseList, sGroupExpr, options);
  var datalistId = gr_increaseList.getDataList();
  var datalist = $p.getComponentById(datalistId);
  const colCnt = datalist.getColCnt();
  const totAmtCols = [];
  for (let i = 0; i < colCnt; i++) {
    const colNm = datalist.getColumnID(i);
    if (colNm.indexOf('totAmt') !== -1) {
      totAmtCols.push(colNm);
    }
  }
  var data = datalist.getAllJSON();
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var rowtotSum = 0;
    for (var j = 0; j < totAmtCols.length; j++) {
      var colName = totAmtCols[j];
      rowtotSum += $c.num.parseInt($p, row[colName] || 0);
    }
    row["totSum"] = rowtotSum;
  }
  datalist.setJSON(data);
  totalRows.setValue(datalist.getTotalRow());
  totalRows2.setValue(ds_statementList.getTotalRow());
};
scwin.subtotalHeaderFormat = function (val) {
  if (val == "합계") {
    return "합계";
  } else {
    return "소계";
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'',src:'/cm/udc/fromToYearMon.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소급년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{refStDt:'reYmFrom',refDataMap:'dma_condition',style:'',id:'udc_reYm',refEdDt:'reYmTo',edFromId:'ed_reYmFrom',edToId:'ed_reYmTo',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',titleFrom:'소급년월',titleTo:'소급년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:' w200',editType:'select',id:'acb_lobranCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',mandatory:'true',title:'점소'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'acb_wrkPlClsCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천북항'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천내항'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(인상전)협약일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_oldWageAgrmntDt',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(인상후)협약일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_newWageAgrmntDt',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'퇴사자 제외',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chk_includeRetireYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'tac_tabControl1',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tr_tab_center0',label:'인상금액',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tr_tab_center1',label:'소급분명세서',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상용직 인상금액',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_increaseList',gridUpYn:'N',btnUser:'N',gridDownFn:'scwin.f_gridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_increaseCrs',id:'gr_increaseList',style:'',visibleRowNum:'15',visibleRowNumFix:'true',dynamic:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'항목',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'구분',width:'140',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'인상전',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'인상후',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'차액',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'$xkeyname_$$',inputType:'text',style:'',value:'',width:'140',colSpan:'2',rowSpan:'',displayFormat:'yyyy/MM',dataType:'date',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'합계',width:'100',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totCnt$$',value:'인원(건수)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totAmt$$',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row12'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'groupNm',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'gubunNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'beAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'afAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'diffAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totCnt',value:'',displayMode:'label',excelCellType:'number',readOnly:'true',dataType:'number',displayFormat:'#,##0',textAlign:'center',defaultValue:'0',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totAmt',value:'',displayMode:'label',excelCellType:'number',readOnly:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right',defaultValue:'0',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'',style:'',id:'totSum',value:'',displayMode:'label',excelCellType:'number',readOnly:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right',defaultValue:'0'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'groupNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row13'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'expression',style:'',id:'column24',value:'',displayMode:'label',expression:'targetColValue()',displayFormatter:'scwin.subtotalHeaderFormat'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column21',value:'',displayMode:'label',adaptiveStyle:'e',expression:'SUM(\'diffAmt\')',textAlign:'right',displayFormat:'#,###',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'totCnt_$$',value:'',displayMode:'label',expression:'SUM(\'totCnt\')',displayFormat:'#,###',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'totAmt_$$',value:'',displayMode:'label',expression:'SUM(\'totAmt\')',textAlign:'right',displayFormat:'#,###',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column18',value:'',displayMode:'label',expression:'SUM(\'totSum\')',textAlign:'right',displayFormat:'#,###',excelCellType:'number',dataType:'number'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상용직 소급분명세서',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_statementList',gridUpYn:'N',gridDownFn:'scwin.f_gridToExcel2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_statementList',id:'gr_statementList',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'사번',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'사원명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'직책',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'기본임금',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'통상임금',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'연장비',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'노조비',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'총액',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column50',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNo',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNm',inputType:'text',width:'80',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdNm',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'standardSal',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ordinarySal',displayMode:'label',excelCellType:'number',dataType:'number',displayFormat:'#,###',readOnly:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totExtdAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unionAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'groupLv1',displayMode:'label',hidden:'true',displayType:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'groupLv2',displayMode:'label',hidden:'true',displayType:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'groupLv1',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column37',displayMode:'label',expression:'targetColValue()'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column36',displayMode:'label',expression:'COUNT(\'staffNm\')',excelCellType:'number',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column35',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column34',displayMode:'label',expression:'SUM(\'standardSal\')',excelCellType:'number',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column57',displayMode:'label',expression:'SUM("ordinarySal")',dataType:'number',displayFormat:'#,##0',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column33',displayMode:'label',expression:'SUM(\'totExtdAmt\')',excelCellType:'number',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column32',displayMode:'label',expression:'SUM(\'unionAmt\')',excelCellType:'number',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column31',displayMode:'label',expression:'SUM(\'totAmt\')',excelCellType:'number',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column52',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'groupLv2',style:'',id:'subTotal2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'80',id:'column44',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column43',displayMode:'label',expression:'COUNT(\'staffNm\')',excelCellType:'number',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column41',displayMode:'label',expression:'SUM(\'standardSal\')',excelCellType:'number',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column40',displayMode:'label',expression:'SUM(\'totExtdAmt\')',excelCellType:'number',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column39',displayMode:'label',expression:'SUM(\'unionAmt\')',excelCellType:'number',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column38',displayMode:'label',expression:'SUM(\'totAmt\')',excelCellType:'number',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column53',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column29',displayMode:'label',expression:'COUNT(\'staffNm\')'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column27',displayMode:'label',textAlign:'right',expression:'SUM("standardSal")',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column27',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',expression:'SUM("ordinarySal")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("totExtdAmt")',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("unionAmt")',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM("totAmt")',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]}]})