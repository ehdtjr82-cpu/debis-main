/*amd /ui/ps/tr/expropmgnt/oilingmgnt/tr_270_07_11b.xml 24184 d737c97769d2306f7c8820ade1639b4e6d1eefd3cc5982dde38e1039dadf9a28 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_monthEachSpotsale'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilStatClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilStatClntNo',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_monthEachSpotsale',saveRemovedData:'true','ev:ondataload':'scwin.ds_monthEachSpotsale_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'oilingDt',name:'주유일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilingVol1',name:'출고형태',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilingVol2',name:'name3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilingVol3',name:'name4',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilingVol4',name:'name5',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilingVol5',name:'name6',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilingVol6',name:'name7',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilingVol7',name:'name8',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilingVol8',name:'name9',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilingVol9',name:'name10',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilingVol10',name:'name11',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilingVol11',name:'name12',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilingVol12',name:'name13',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilingVol13',name:'name14',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilingVol14',name:'name15',dataType:'number'}},{T:1,N:'w2:column',A:{id:'oilingVol15',name:'name16',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outUpr',name:'name17',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outAmt',name:'name18',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_oilingVolOutKindCnt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cmd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oilingVolOutKindCnt',saveRemovedData:'true','ev:ondataload':'scwin.ds_oilingVolOutKindCnt_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_monthEachSpotsale',action:'/ps.tr.expropmgnt.oilingmgnt.RetrieveSpotsaleOilStationOutCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_monthEachSpotsale","key":"IN_DS1"},{"id":"ds_monthEachSpotsale","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_monthEachSpotsale","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_oilingVolOutKindCnt',action:'/ps.co.RetrievePsCboCmmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_oilingVolOutKindCnt","key":"IN_DS1"},{"id":"ds_oilingVolOutKindCnt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_oilingVolOutKindCnt","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 직매주유소출고현황 (tr_270_07_11b)
// 작성자 : 송정희
// 최초작성일자 : 2026-01-14
//-------------------------------------------------------------------------
scwin.fromDate_YM = ""; // 작업날짜
scwin.fromDate_YM = WebSquare.date.getCurrentServerDate("yyyyMM");
scwin.v_KindCnt = 0;
scwin.vOilStatClntNm = "";
scwin.t_outKind_hcol = ["oilingVol1", "oilingVol2", "oilingVol3", "oilingVol4", "oilingVol5", "oilingVol6", "oilingVol7", "oilingVol8", "oilingVol9", "oilingVol10", "oilingVol11", "oilingVol12", "oilingVol13", "oilingVol14", "oilingVol15"];

//-------------------------------------------------------------------------
// onpageload
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  console.log("PGM명 : 직매주유소출고현황 (tr_270_07_11b)");
  ed_stdYm.focus();

  // GauceUtil.getLuxeComboData("PsCommonEBC", "retriveDirStorageOilStation") 
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retriveDirStorageOilStation",
    compID: "lc_oilStatClntNo"
  }];
  $c.data.setGauceUtil($p, codeOptions);
  scwin.lfn_oilingVolOutKindCnt();
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  ed_stdYm.setValue(scwin.fromDate_YM);
};

//-------------------------------------------------------------------------
// 동적인 컬럼를 표시하기 위해서 주유용도 종류 갯수 구하기 
//-------------------------------------------------------------------------
scwin.lfn_oilingVolOutKindCnt = function () {
  //    var url = "/ps.co.RetrievePsCboCmmCMD.do?cmd=retriveSpotsaleOilingOut";
  dma_oilingVolOutKindCnt.set("cmd", "retriveSpotsaleOilingOut");
  $c.sbm.execute($p, sbm_oilingVolOutKindCnt);
};

//-------------------------------------------------------------------------
// 조회조건 초기화 
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  ed_stdYm.setValue(scwin.fromDate_YM);
  lc_oilStatClntNo.setSelectedIndex(0);
  ed_stdYm.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if (ed_stdYm.getValue().length == 0) {
    $c.win.alert($p, "기준 년/월은 필수입력항목입니다.");
    ed_stdYm.focus();
    return;
  }
  if (lc_oilStatClntNo.getValue().length == 0) {
    $c.win.alert($p, "직매주유소는 필수입력항목입니다.");
    lc_oilStatClntNo.focus();
    return;
  }
  scwin.vOilStatClntNm = lc_oilStatClntNo.getText("true");
  dma_monthEachSpotsale.set("stDt", ed_stdYm.getValue());
  dma_monthEachSpotsale.set("oilStatClsCd", "03"); // 직매주유소
  dma_monthEachSpotsale.set("oilStatClntNo", lc_oilStatClntNo.getValue());
  $c.sbm.execute($p, sbm_monthEachSpotsale);
};
//-------------------------------------------------------------------------
// 조회버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회조건초기화 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_Clear_onclick = function (e) {
  scwin.f_FieldClear();
};

//-------------------------------------------------------------------------
// 직매주유소출고내역 ondataload
//-------------------------------------------------------------------------
scwin.ds_monthEachSpotsale_ondataload = function () {
  let rowCnt = ds_monthEachSpotsale.getTotalRow();
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
    var t_sum = 0;
    for (var i = 0; i < rowCnt; i++) {
      t_sum = 0;
      for (var j = 0; j < scwin.t_outKind_hcol.length - 1; j++) {
        t_sum = t_sum + $c.num.parseInt($p, ds_monthEachSpotsale.getCellData(i, scwin.t_outKind_hcol[j]));
      }
      ds_monthEachSpotsale.setCellData(i, "oilingVol15", t_sum);
    }
  }
};

//-------------------------------------------------------------------------
// 출고형태 row 갯수 구하기 	//lfn_SetGridFormat();
//-------------------------------------------------------------------------
scwin.ds_oilingVolOutKindCnt_ondataload = function () {
  const t_outKind_hcol_val = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15"];
  var v_KindCnt = ds_oilingVolOutKindCnt.getTotalRow();
  if (v_KindCnt > 0) {
    for (var i = 0; i < scwin.t_outKind_hcol.length; i++) {
      gr_MonthEachSpotsale.setHeaderValue(scwin.t_outKind_hcol[i], "");
      if (t_outKind_hcol_val[i] = ds_oilingVolOutKindCnt.getCellData(i, "code")) {
        gr_MonthEachSpotsale.setHeaderValue(scwin.t_outKind_hcol[i], ds_oilingVolOutKindCnt.getCellData(i, "name"));
        gr_MonthEachSpotsale.setColumnVisible(scwin.t_outKind_hcol[i], true);
      } else {
        if (scwin.t_outKind_hcol[i] == "oilingVol15") {
          gr_MonthEachSpotsale.setColumnVisible(scwin.t_outKind_hcol[i], true);
          gr_MonthEachSpotsale.setHeaderValue(scwin.t_outKind_hcol[i], "계");
        } else {
          gr_MonthEachSpotsale.setColumnVisible(scwin.t_outKind_hcol[i], false);
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (ds_monthEachSpotsale.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let gridColCount = 0;
  for (let i = 0; i < gr_MonthEachSpotsale.getTotalCol(); i++) {
    if (gr_MonthEachSpotsale.getColumnVisible(i) == true) {
      gridColCount++;
    }
  }
  let str = $c.gus.cfGetFormatStr($p, ed_stdYm.getValue(), "####/##");
  let str1 = $c.gus.cfGetFormatStr($p, ed_stdYm.getValue(), "######");
  //let str2 = lc_oilStatClntNo.getValue();
  let str21 = scwin.vOilStatClntNm;
  let startRowIndex = 0;
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "직매 주유소 별 월 출고내역",
    textAlign: "center",
    fontface: "돋움체",
    fontSize: 12,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }, {
    rowIndex: 2,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: " [" + str + "]",
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
    text: " [" + str21 + "]",
    textAlign: "left",
    fontSize: 10,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }];
  const options = {
    fileName: "직매 주유소 별 월 출고내역.xlsx",
    //sheetName: "기준년월_" + str1 ,
    sheetName: "직매 주유소 별 월 출고내역",
    startRowIndex: 4,
    startColumnIndex: 0,
    type: 1
  };
  await $c.data.downloadGridViewExcel($p, gr_MonthEachSpotsale, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준 년/월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_stdYm',style:'',displayFormat:'yyyy/MM'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'직매주유소명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',id:'lc_oilStatClntNo',style:'width: 300px;',search:'start',chooseOption:'true',chooseOptionLabel:'전체',sortMethod:'ascending',sortOption:'label',visibleRowNum:'20',submenuSize:'auto'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.btn_Clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_MonthEachSpotsale',gridUpYn:'N',gridDownUserAuth:'X',gridDownFn:'scwin.f_Excel',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_monthEachSpotsale',id:'gr_MonthEachSpotsale',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column78',value:'주유일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'M_outKind',inputType:'text',style:'',value:'출고형태',width:'1290',colSpan:'15',rowSpan:'',hidden:'false',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column98',value:'출고단가',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column102',value:'출고금액',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'gr_outKind'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'oilingVol1',value:'',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'oilingVol2',value:'',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilingVol3',value:'',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilingVol4',value:'',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilingVol5',value:'',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilingVol6',value:'',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'oilingVol7',value:'',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilingVol8',value:'',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilingVol9',value:'',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilingVol10',value:'',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilingVol11',value:'',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'oilingVol12',value:'',displayMode:'label',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'oilingVol13',value:'',displayMode:'label',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'oilingVol14',value:'',displayMode:'label',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilingVol15',value:'',displayMode:'label',class:''}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',style:'',id:'oilingDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilingVol1',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilingVol2',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilingVol3',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilingVol4',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilingVol5',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilingVol6',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'oilingVol7',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilingVol8',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilingVol9',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilingVol10',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilingVol11',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'oilingVol12',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'oilingVol13',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'oilingVol14',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilingVol15',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'outUpr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###.#0',dataType:'float'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'outAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column81',value:'총합',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'oilingVol1\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'oilingVol2\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column75',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'oilingVol3\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column74',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'oilingVol4\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column73',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'oilingVol5\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'oilingVol6\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column71',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'oilingVol7\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column70',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'oilingVol8\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'oilingVol9\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column68',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'oilingVol10\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column67',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'oilingVol11\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column85',value:'',displayMode:'label',expression:'sum(\'oilingVol12\')',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column89',value:'',displayMode:'label',expression:'sum(\'oilingVol13\')',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column93',value:'',displayMode:'label',expression:'sum(\'oilingVol14\')',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column97',value:'',displayMode:'label',expression:'sum(\'oilingVol15\')',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column101',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',style:'',id:'column105',value:'',displayMode:'label',expression:'sum(\'outAmt\')',textAlign:'right',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})