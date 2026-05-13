/*amd /ui/ps/tr/expropmgnt/oilingmgnt/tr_270_05_05b.xml 18285 7c1e70476dbab9a7db7ae246fae74825ff497b66c1296aebe6c994b7c5c90dab */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_MonthEachOilIn',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_MonthEachOilIn_onbeforerowpositionchange','ev:onrowpositionchange':'scwin.ds_MonthEachOilIn_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCoNm',name:'정유사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatNm',name:'주유소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatClsNm',name:'주유소구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inQty',name:'입고수량(L)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAmt',name:'입고금액(원)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdYm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatClntNo',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCoClntNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAggrSeq',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dummy'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'소속구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilCoClntNo',name:'정유사코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.tr.expropmgnt.oilingmgnt.RetrieveMonthEachOilInContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_dummy","key":"IN_DS1"},{"id":"ds_MonthEachOilIn","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_MonthEachOilIn","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ps.tr.expropmgnt.oilingmgnt.UpdateMonthEachOilInValueAddedTaxCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_MonthEachOilIn","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.isRetrieve = false;
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "acb_homeClsCd,gr_MonthEachOilIn:homeClsCd",
    opt: {
      "range": "2,TR"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
  const param = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retrieveOilCompany",
    compID: "acb_oilCompany"
  }];
  $c.data.setGauceUtil($p, param);
};
scwin.ondataload = function () {
  ica_standardYearMonth.setValue($c.date.getServerDateTime($p, "yyyyMM"));
  lc_homeClsCd.setValue("LO");
  ica_standardYearMonth.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ica_standardYearMonth.getValue().trim().length !== 6) {
    await $c.win.alert($p, "기준년월은 필수입력 입니다.");
    ica_standardYearMonth.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (cls) {
  if (cls === 3) {
    if (ds_MonthEachOilIn.getModifiedIndex().length === 0) {
      await $c.win.alert($p, "변경된 자료가 없습니다.");
      return;
    }
    let ret = await $c.gus.cfValidate($p, [gr_MonthEachOilIn]);
    if (!ret) {
      return false;
    }
    for (let i = 0; i < ds_MonthEachOilIn.getRowCount(); i++) {
      if (ds_MonthEachOilIn.getCellData(i, "vatAmt") == 0) {
        await $c.win.alert($p, $c.data.getMessage($p, "정유사 입고내역 그리드의 " + (i + 1) + "번째 데이터에서 " + MSG_CM_ERR_013, ['부가세'], 1));
        gr_MonthEachOilIn.setFocusedCell(i, "vatAmt", true);
        return;
      }
    }
    if (!(await $c.win.confirm($p, "저장하시겠습니까?"))) {
      return;
    }
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 부가세 수정가능 여부 처리
//-------------------------------------------------------------------------
scwin.f_control = async function () {
  let rtn = "";
  let stdYm = ica_standardYearMonth.getValue().trim();
  rtn = await udc_chekYn.cfJobCloseYN("CUR", stdYm, "00", "TR39", "00", "", "N");
  if (rtn !== "1" && rtn !== "DNF") {
    gr_MonthEachOilIn.setColumnReadOnly("vatAmt", true);
  } else {
    gr_MonthEachOilIn.setColumnReadOnly("vatAmt", false);
  }
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  ica_standardYearMonth.focus();
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  let count = ds_MonthEachOilIn.getRowCount();
  if (!(count > 0)) return;
  acb_homeClsCd.setDisplayMode("label");
  let gridColCount = gr_MonthEachOilIn.getTotalCol();
  let infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "정유사 입고",
    textAlign: "center",
    //정렬
    fontSize: 12,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 2,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "기준년월 [" + $c.gus.cfGetFormatStr($p, ica_standardYearMonth.getValue(), "####/##") + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 3,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: gridColCount,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "소속구분 [" + acb_homeClsCd.getText() + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }];
  const options = {
    fileName: "정유사 입고.xlsx",
    sheetName: "정유사 입고",
    startRowIndex: 4,
    startColumnIndex: 0,
    type: 1
  };
  $c.data.downloadGridViewExcel($p, gr_MonthEachOilIn, options, infoArr);
  acb_homeClsCd.setDisplayMode("value delim label");
};
scwin.f_setqrynm = function (tname, str) {
  let vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";
  gr_MonthEachOilIn.SetExcelTitle(1, "value:" + tname + " [" + str + "]" + vSearchOption);
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.
    ds_MonthEachOilIn.reform();
    scwin.f_Retrieve();
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  scwin.isRetrieve = true;
  let rowCnt = ds_MonthEachOilIn.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt === 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else {
    scwin.f_control();
  }
  gr_MonthEachOilIn.setFocusedCell(0, 0);
};
scwin.gr_MonthEachOilIn_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "vatAmt") {
    scwin.f_control();
  }
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save(3);
};
scwin.gr_MonthEachOilIn_onviewchange = function (info) {
  if (info.colId == "vatAmt") {
    if (info.newValue == "" || info.newValue == 0) {
      info.newValue = 0;
      ds_MonthEachOilIn.setCellData(info.rowIndex, "vatAmt", info.newValue);
    }
  }
};
scwin.ds_MonthEachOilIn_onrowpositionchange = async function (info) {
  if (scwin.isRetrieve == true) {
    scwin.isRetrieve = false;
    return;
  }
  let rowIndex = info.oldRowIndex;
  if (ds_MonthEachOilIn.getCellData(rowIndex, "vatAmt") == 0 || ds_MonthEachOilIn.getCellData(rowIndex, "vatAmt") == "") {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_013, ['부가세'], 1));
    ds_MonthEachOilIn.setCellData(rowIndex, "vatAmt", ds_MonthEachOilIn.getOriginalCellData(rowIndex, "vatAmt"));
    gr_MonthEachOilIn.setFocusedCell(rowIndex, "vatAmt", true);
    return false;
  } else {
    return true;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준 년/월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_standardYearMonth',style:'',displayFormat:'yyyy/MM',mandatory:'true',pickerType:'dynamic',ref:'data:dma_dummy.stdYm',title:'기준년월',validateOnInput:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_homeClsCd',search:'start',style:'width:150px;',submenuSize:'fixed',mandatory:'false',ref:'data:dma_dummy.homeClsCd',title:'소속구분'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정유사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_oilCompany',mandatory:'false',search:'start',style:'width:220px;',submenuSize:'fixed',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_dummy.oilCoClntNo',title:'정유사',visibleRowNum:'25'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridUpYn:'N',gridDownUserAuth:'X',gridID:'gr_MonthEachOilIn',dataName:'정유사 입고내역 그리드',validFeatures:'ignoreStatus=no',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_MonthEachOilIn',id:'gr_MonthEachOilIn',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true',editModeEvent:'onclick',columnMove:'true','ev:oncellclick':'scwin.gr_MonthEachOilIn_oncellclick',rowStatusVisible:'true',rowStatusWidth:'20',columnMoveWithFooter:'true','ev:onviewchange':'scwin.gr_MonthEachOilIn_onviewchange','ev:onrowindexchange':'scwin.gr_MonthEachOilIn_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'소속구분',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'정유사',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'주유소명',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'주유소구분',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'입고수량(L)',width:'120',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'입고금액(원)',width:'130',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'부가세',width:'100',class:'txt-red',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClsCd',inputType:'select',width:'100',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilCoNm',inputType:'text',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilStatNm',inputType:'text',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilStatClsNm',inputType:'text',width:'120',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inQty',inputType:'text',width:'120',readOnly:'true',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inAmt',inputType:'text',width:'130',readOnly:'true',displayFormat:'#,##0',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'text',width:'100',displayFormat:'#,##0',dataType:'number',allowChar:'0-9',textAlign:'right',excelCellType:'number',validateOnInput:'true',maxLength:'13',mandatory:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',value:'총계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'expression',width:'120',dataType:'number',expression:'sum("inQty")',displayFormat:'#,##0',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'expression',width:'130',dataType:'number',displayFormat:'#,##0',expression:'sum("inAmt")',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'expression',width:'100',dataType:'number',displayFormat:'#,##0',expression:'sum("vatAmt")',excelCellType:'number',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',userAuth:'U',objType:'bSave','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_chekYn'}}]}]}]}]}]})