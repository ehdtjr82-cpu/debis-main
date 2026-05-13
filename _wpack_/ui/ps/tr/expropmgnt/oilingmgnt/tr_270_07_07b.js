/*amd /ui/ps/tr/expropmgnt/oilingmgnt/tr_270_07_07b.xml 12525 1fb3de372b9260f496d77ed68c5c6b3866ceef5dcf74bc89c0c99ccdf30d023d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_master',repeatNode:'map',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCd',name:'주유소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'주유소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clsCd',name:'부문코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clsNm',name:'부문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtsum',name:'합계',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search','ev:onsetdata':'scwin.dma_search_onsetdata'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'소속구분코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ps.tr.expropmgnt.oilingmgnt.RetrieveOilBuyingPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 유류구매현황 (tr_270_07_07b)
// 작성자 : 송정희
// 최초작성일자 : 2026-01-02
//-------------------------------------------------------------------------

scwin.fromDate_YyMm = ""; // 작업날짜
scwin.fromDate_YyMm = WebSquare.date.getCurrentServerDate("yyyyMM");
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      "range": "2,TR"
    }
  } // 소속구분
  ];
  $c.data.setCommonCode($p, codeOptions);
  lc_homeClsCd.setValue("LO");
  ed_stdYm.focus();
};
scwin.onUdcCompleted = function () {
  console.log("onUdcCompleted");
  ed_stdYm.setValue(scwin.fromDate_YyMm.substring(0, 6));
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if (ed_stdYm.getValue().trim().length != 6) {
    $c.gus.cfAlertMsg($p, "기준년월은 필수입력 입니다.");
    ed_stdYm.focus();
    return;
  }
  dma_search.set("ed_stdYm", ed_stdYm.getValue());
  dma_search.set("homeClsCd", lc_homeClsCd.getValue());
  $c.sbm.execute($p, sbm_master);
};

//-------------------------------------------------------------------------
// 조회버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_master.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let gridColCount = 0;
  for (let i = 0; i < gr_master.getTotalCol(); i++) {
    if (gr_master.getColumnVisible(i) == true) {
      gridColCount++;
    }
  }
  let str = $c.gus.cfGetFormatStr($p, ed_stdYm.getValue(), "####/##");
  let str2 = lc_homeClsCd.getText(true);
  let startRowIndex = 0;
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "유류 구매 현황",
    textAlign: "center",
    fontSize: 12,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }, {
    rowIndex: 2,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "기준년월 [" + str + "]",
    textAlign: "left",
    fontSize: 10,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }, {
    rowIndex: 3,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "소속구분 [" + str2 + "]",
    textAlign: "left",
    fontSize: 10,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }];
  const options = {
    fileName: "유류 구매 현황.xlsx",
    sheetName: "유류 구매 현황",
    //        sheetName: "기준년월" + str + "_소속구분" + str2 ,
    startRowIndex: 4,
    startColumnIndex: 0,
    type: 1
  };
  await $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};
scwin.ds_master_ondataload = function () {
  let rowCnt = ds_master.getTotalRow();
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }
  if (rowCnt > 0) {
    totalRows.setValue(rowCnt);
    for (var i = 0; i < rowCnt; i++) {
      if (ds_master.getCellData(i, "clntNm") == "소계") {
        gr_master.setRowBackgroundColor(i, "#E3E3FF");
      }
      if (ds_master.getCellData(i, "clntNm") == "여객사업부") {
        gr_master.setRowBackgroundColor(i, "#ECE9D8");
      }
      if (ds_master.getCellData(i, "clntNm") == "물류사업부") {
        gr_master.setRowBackgroundColor(i, "#ECE9D8");
      }
      if (ds_master.getCellData(i, "clntNm") == "합계") {
        gr_master.setRowBackgroundColor(i, "#ECE9D8");
      }
      if (ds_master.getCellData(i, "clsCd") == "1") {
        gr_master.setRowBackgroundColor(i, "#ECE9D8");
      }
      if (ds_master.getCellData(i, "clsCd") == "2") {
        gr_master.setRowBackgroundColor(i, "#ECE9D8");
      }
      if (ds_master.getCellData(i, "clsNm") == "소계") {
        gr_master.setRowBackgroundColor(i, "#FFD9C2");
      }
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준 년/월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_stdYm',style:'',displayFormat:'yyyy/MM',ref:'data:dma_search.stdYm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width:139px;position:relative;',submenuSize:'fixed',ref:'data:dma_search.homeClsCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'유류구매현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownFn:'scwin.f_Excel',gridID:'gr_master',gridUpYn:'N',grp:'grd_section1',style:'',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'주유소명',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'부문',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'수량(L)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'금액(원)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'부가세(원)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'합계(원) ',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'gubun',inputType:'text',style:'',value:'',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'140',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clsNm',inputType:'text',style:'',value:'',width:'110',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtsum',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})