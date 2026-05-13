/*amd /ui/ps/eq/fmsmgnt/fmsoilmgnt/eq_610_03_04b.xml 76672 ed1ec6eab67dacf161076606a07db9ac8ef396b3ffee4cb2779f89274140ac62 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'stDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'endDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'item',name:'item',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrk',name:'wrk',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqOilStatNo',name:'reqOilStatNo',dataType:'text'}}]},{T:1,N:'w2:data'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_stock',saveRemovedData:'true','ev:ondataload':'scwin.ds_stock_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdYm',name:'년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yyyy',name:'연구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmsQty',name:'수량_FMS',dataType:'number'}},{T:1,N:'w2:column',A:{id:'loQty',name:'수량_물류',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trQty',name:'수량_고속',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량_합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'diffQty',name:'수량_증감_전월대비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fmsAmt',name:'금액_FMS',dataType:'number'}},{T:1,N:'w2:column',A:{id:'loAmt',name:'금액_물류',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trAmt',name:'금액_고속',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액_합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'diffAmt',name:'금액_증감_전월대비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'subTotalId',name:'subTotalId',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_stockprogress',saveRemovedData:'true','ev:ondataload':'scwin.ds_stockprogress_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdMm',name:'년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmCnt',name:'월구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmsQty3',name:'FMS_수량3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'loQty3',name:'물류_수량3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trQty3',name:'고속_수량3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qty3',name:'합계_수량3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fmsAmt3',name:'FMS_금액3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'loAmt3',name:'물류_금액3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trAmt3',name:'고속_금액3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amt3',name:'합계_금액3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fmsQty2',name:'2년_수량_FMS',dataType:'number'}},{T:1,N:'w2:column',A:{id:'loQty2',name:'2년_수량_물류',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trQty2',name:'2년_수량_고속',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qty2',name:'2년_수량_합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fmsAmt2',name:'2년_금액_FMS',dataType:'number'}},{T:1,N:'w2:column',A:{id:'loAmt2',name:'2년_금액_물류',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trAmt2',name:'2년_금액_고속',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amt2',name:'2년_금액_합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'diffQty2',name:'2년_수량증감_전년대비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'diffAmt2',name:'2년_금액증감_전년대비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fmsQty1',name:'1년_수량_FMS',dataType:'number'}},{T:1,N:'w2:column',A:{id:'loQty1',name:'1년_수량_물류',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trQty1',name:'1년_수량_고속',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qty1',name:'1년_수량_합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fmsAmt1',name:'1년_금액_FMS',dataType:'number'}},{T:1,N:'w2:column',A:{id:'loAmt1',name:'1년_금액_물류',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trAmt1',name:'1년_금액_고속',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amt1',name:'1년_금액_합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'diffQty1',name:'1년_수량증감_전년대비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'diffAmt1',name:'1년_금액증감_전년대비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fmsQty',name:'년_수량_FMS',dataType:'number'}},{T:1,N:'w2:column',A:{id:'loQty',name:'년_수량_물류',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trQty',name:'년_수량_고속',dataType:'number'}},{T:1,N:'w2:column',A:{id:'qty',name:'년_수량_합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fmsAmt',name:'년_금액_FMS',dataType:'number'}},{T:1,N:'w2:column',A:{id:'loAmt',name:'년_금액_물류',dataType:'number'}},{T:1,N:'w2:column',A:{id:'trAmt',name:'년_금액_고속',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amt',name:'년_금액_합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'diffQty',name:'년_수량증감_전년대비',dataType:'number'}},{T:1,N:'w2:column',A:{id:'diffAmt',name:'년_금액증감_전년대비',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_inout',saveRemovedData:'true','ev:ondataload':'scwin.ds_inout_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'yyyy',name:'년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdYm',name:'년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfQty',name:'기초재고_수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inQty',name:'입고_수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outQty',name:'출고_수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'afQty',name:'기말재고_수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'diffAfQty',name:'증감_기말재고_수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bfAmt',name:'기초재고_금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'inAmt',name:'입고_금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outAmt',name:'출고_금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'afAmt',name:'기말재고_금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'diffAfAmt',name:'증감_기말재고_금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'subTotalId',name:'subTotalId',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_stock',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveOilMonthEachStockListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_stock","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_stock","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_stock_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_stockprogress',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveOilMonthEachStockProgressListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_stockprogress","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_stockprogress","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_stockprogress_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_inout',action:'/ps.eq.fmsmgnt.fmsoilmgnt.RetrieveOilMonthEachInoutListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_inout","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_inout","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_inout_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 유류재고현황조회 (eq_610_03_04b)
// 작성자 : 송정희
// 최초작성일자 : 2026-01-02
//-------------------------------------------------------------------------

scwin.fromDate = ""; // 작업날짜
scwin.fromDate = WebSquare.date.getCurrentServerDate("yyyyMM");
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "TL115",
    compID: "lc_wrk",
    opt: {
      "range": "1,LO"
    }
  } // 업무 ^전체,<%= GauceUtil.getCodeList("TL115",1,"LO") %>
  ];
  $c.data.setCommonCode($p, codeOptions);
  lc_item.setValue("A");
  lc_item.setDisabled(true);
  lc_wrk.setDisabled(true);
};
/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  ed_stDt.setValue(scwin.fromDate);
  ed_endDt.setValue(scwin.fromDate);
  tac_tabControl1.setSelectedTabIndex(0);
};
//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  //$c.gus.cfInitObjects(tb_retrievecond, null);
  ed_stDt.setValue(scwin.fromDate);
  ed_endDt.setValue(scwin.fromDate);
  ed_reqOilStatNo.setValue("");
  ed_reqOilStatNm.setValue("");
  scwin.f_defaultValue();
  lc_item.setSelectedIndex(0);
  lc_wrk.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 초기화(조회 조건)
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  ed_stDt.focus();
  dma_search.set("stDt", scwin.fromDate);
  dma_search.set("endDt", scwin.fromDate);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  //필수입력항목 체크 
  //  	if( !$c.gus.cfValidate([tb_retrievecond]) ) return;		
  if (ed_stDt.getValue().trim().substring(0, 6).length != 6) {
    $c.win.alert($p, "기준시작월은 필수입력 입니다.");
    ed_stDt.focus();
    return;
  }
  if (ed_endDt.getValue().substring(0, 6).trim().length != 6) {
    $c.win.alert($p, "기준종료월은 필수입력 입니다.");
    ed_endDt.focus();
    return;
  }
  if (ed_stDt.getValue() > ed_endDt.getValue()) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  if (tac_tabControl1.getSelectedTabIndex() == 0) {
    $c.sbm.execute($p, sbm_stock);
  } else if (tac_tabControl1.getSelectedTabIndex() == 1) {
    scwin.f_colname();
    scwin.f_griddefault();
    if (lc_item.getValue() == "A") {
      scwin.f_gridamt();
    }
    if (lc_item.getValue() == "Q") {
      scwin.f_gridqty();
    }
    $c.sbm.execute($p, sbm_stockprogress);
  } else {
    $c.sbm.execute($p, sbm_inout);
  }
};

//-------------------------------------------------------------------------
//컬럼명 설정
//-------------------------------------------------------------------------
scwin.f_colname = function () {
  let pyear = ed_stDt.getValue().substring(0, 4);
  let pre2Year = pyear - 2 + "년";
  let pre1Year = pyear - 1 + "년";
  let currYear = pyear + "년";
  gr_stockprogress.setHeaderValue("col_year_3", pre2Year);
  gr_stockprogress.setHeaderValue("col_year_2", pre1Year);
  gr_stockprogress.setHeaderValue("col_year_1", currYear);
};

//-------------------------------------------------------------------------
// 금액/수량 그리드 표시 기본값
//-------------------------------------------------------------------------
scwin.f_griddefault = function () {
  gr_stockprogress.setColumnVisible("diffQty2", true);
  gr_stockprogress.setColumnVisible("diffAmt2", true);
  gr_stockprogress.setColumnVisible("fmsQty2", true);
  gr_stockprogress.setColumnVisible("loQty2", true);
  gr_stockprogress.setColumnVisible("trQty2", false);
  gr_stockprogress.setColumnVisible("qty2", true);
  gr_stockprogress.setColumnVisible("fmsAmt2", true);
  gr_stockprogress.setColumnVisible("loAmt2", true);
  gr_stockprogress.setColumnVisible("trAmt2", false);
  gr_stockprogress.setColumnVisible("amt2", true);
  gr_stockprogress.setColumnVisible("diffQty1", true);
  gr_stockprogress.setColumnVisible("diffAmt1", true);
  gr_stockprogress.setColumnVisible("fmsQty1", true);
  gr_stockprogress.setColumnVisible("loQty1", true);
  gr_stockprogress.setColumnVisible("trQty1", false);
  gr_stockprogress.setColumnVisible("qty1", true);
  gr_stockprogress.setColumnVisible("fmsAmt1", true);
  gr_stockprogress.setColumnVisible("loAmt1", true);
  gr_stockprogress.setColumnVisible("trAmt1", false);
  gr_stockprogress.setColumnVisible("amt1", true);
  gr_stockprogress.setColumnVisible("diffQty", true);
  gr_stockprogress.setColumnVisible("diffAmt", true);
  gr_stockprogress.setColumnVisible("fmsQty", true);
  gr_stockprogress.setColumnVisible("loQty", true);
  gr_stockprogress.setColumnVisible("trQty", false);
  gr_stockprogress.setColumnVisible("qty", true);
  gr_stockprogress.setColumnVisible("fmsAmt", true);
  gr_stockprogress.setColumnVisible("loAmt", true);
  gr_stockprogress.setColumnVisible("trAmt", false);
  gr_stockprogress.setColumnVisible("amt", true);
};

//-------------------------------------------------------------------------
// 금액/수량 그리드 표시 설정
//-------------------------------------------------------------------------
scwin.f_gridqty = function () {
  gr_stockprogress.setColumnVisible("diffQty2", true);
  gr_stockprogress.setColumnVisible("diffAmt2", false);
  gr_stockprogress.setColumnVisible("fmsQty2", true);
  gr_stockprogress.setColumnVisible("loQty2", true);
  gr_stockprogress.setColumnVisible("trQty2", false);
  gr_stockprogress.setColumnVisible("qty2", true);
  gr_stockprogress.setColumnVisible("fmsAmt2", false);
  gr_stockprogress.setColumnVisible("loAmt2", false);
  gr_stockprogress.setColumnVisible("trAmt2", false);
  gr_stockprogress.setColumnVisible("amt2", false);
  gr_stockprogress.setColumnVisible("diffQty1", true);
  gr_stockprogress.setColumnVisible("diffAmt1", false);
  gr_stockprogress.setColumnVisible("fmsQty1", true);
  gr_stockprogress.setColumnVisible("loQty1", true);
  gr_stockprogress.setColumnVisible("trQty1", false);
  gr_stockprogress.setColumnVisible("qty1", true);
  gr_stockprogress.setColumnVisible("fmsAmt1", false);
  gr_stockprogress.setColumnVisible("loAmt1", false);
  gr_stockprogress.setColumnVisible("trAmt1", false);
  gr_stockprogress.setColumnVisible("amt1", false);
  gr_stockprogress.setColumnVisible("diffQty", true);
  gr_stockprogress.setColumnVisible("diffAmt", false);
  gr_stockprogress.setColumnVisible("fmsQty", true);
  gr_stockprogress.setColumnVisible("loQty", true);
  gr_stockprogress.setColumnVisible("trQty", false);
  gr_stockprogress.setColumnVisible("qty", true);
  gr_stockprogress.setColumnVisible("fmsAmt", false);
  gr_stockprogress.setColumnVisible("loAmt", false);
  gr_stockprogress.setColumnVisible("trAmt", false);
  gr_stockprogress.setColumnVisible("amt", false);
};
scwin.f_gridamt = function () {
  gr_stockprogress.setColumnVisible("diffQty2", false);
  gr_stockprogress.setColumnVisible("diffAmt2", true);
  gr_stockprogress.setColumnVisible("fmsQty2", false);
  gr_stockprogress.setColumnVisible("loQty2", false);
  gr_stockprogress.setColumnVisible("trQty2", false);
  gr_stockprogress.setColumnVisible("qty2", false);
  gr_stockprogress.setColumnVisible("fmsAmt2", true);
  gr_stockprogress.setColumnVisible("loAmt2", true);
  gr_stockprogress.setColumnVisible("trAmt2", false);
  gr_stockprogress.setColumnVisible("amt2", true);
  gr_stockprogress.setColumnVisible("diffQty1", false);
  gr_stockprogress.setColumnVisible("diffAmt1", true);
  gr_stockprogress.setColumnVisible("fmsQty1", false);
  gr_stockprogress.setColumnVisible("loQty1", false);
  gr_stockprogress.setColumnVisible("trQty1", false);
  gr_stockprogress.setColumnVisible("qty1", false);
  gr_stockprogress.setColumnVisible("fmsAmt1", true);
  gr_stockprogress.setColumnVisible("loAmt1", true);
  gr_stockprogress.setColumnVisible("trAmt1", false);
  gr_stockprogress.setColumnVisible("amt1", true);
  gr_stockprogress.setColumnVisible("diffQty", false);
  gr_stockprogress.setColumnVisible("diffAmt", true);
  gr_stockprogress.setColumnVisible("fmsQty", false);
  gr_stockprogress.setColumnVisible("loQty", false);
  gr_stockprogress.setColumnVisible("trQty", false);
  gr_stockprogress.setColumnVisible("qty", false);
  gr_stockprogress.setColumnVisible("fmsAmt", true);
  gr_stockprogress.setColumnVisible("loAmt", true);
  gr_stockprogress.setColumnVisible("trAmt", false);
  gr_stockprogress.setColumnVisible("amt", true);
};

//-------------------------------------------------------------------------
// 엑셀 출력 (월별 재고 현황)
//-------------------------------------------------------------------------
scwin.f_Excel1 = async function () {
  if (ds_stock.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let gridColCount = 0;
  for (let i = 0; i < gr_stock.getTotalCol(); i++) {
    if (gr_stock.getColumnVisible(i) == true) {
      gridColCount++;
    }
  }
  let str = $c.gus.cfGetFormatStr($p, ed_stDt.getValue().trim(), "####/##");
  let str1 = $c.gus.cfGetFormatStr($p, ed_endDt.getValue().trim(), "####/##");
  let str2 = ed_reqOilStatNm.getValue();
  let startRowIndex = 0;
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "월별 재고 현황",
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
    text: "기준일자 [" + str + " ~ " + str1 + "]",
    textAlign: "left",
    fontSize: 10,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }];
  const options = {
    fileName: "월별 재고 현황" + ".xlsx",
    sheetName: "월별 재고 현황",
    startRowIndex: 3,
    startColumnIndex: 0,
    type: 1
  };
  await $c.data.downloadGridViewExcel($p, gr_stock, options, infoArr);
};

//-------------------------------------------------------------------------
// 엑셀 출력 - 재고 추이(3개년)
//-------------------------------------------------------------------------
scwin.f_Excel2 = async function () {
  if (ds_stockprogress.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let gridColCount = 0;
  for (let i = 0; i < gr_stockprogress.getTotalCol(); i++) {
    if (gr_stockprogress.getColumnVisible(i) == true) {
      gridColCount++;
    }
  }
  let str = $c.gus.cfGetFormatStr($p, ed_stDt.getValue().trim(), "####/##");
  let str1 = $c.gus.cfGetFormatStr($p, ed_endDt.getValue().trim(), "####-##");
  let str2 = ed_reqOilStatNm.getValue();
  let startRowIndex = 3;
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "재고 추이(3개년)",
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
    text: "기준일자 [" + str + "]",
    textAlign: "left",
    fontSize: 10,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }];
  const code = lc_item.getValue();
  const codeList = lc_item.getItemArray();
  if (code != "" && codeList.length > 0) {
    const text = codeList.find(item => item.value == code)["orgLabel"];
    infoArr.push({
      rowIndex: 3,
      colIndex: 0,
      colSpan: gridColCount,
      rowSpan: 1,
      text: "조회항목 [" + text + "]",
      textAlign: "left",
      fontSize: 10,
      drawBorder: false,
      color: "black",
      backgroundColor: "#ffffff"
    });
    startRowIndex++;
  }
  const options = {
    fileName: "재고 추이 3개년_" + ".xlsx",
    sheetName: "재고 추이 3개년",
    startRowIndex: startRowIndex,
    startColumnIndex: 0,
    type: 1
  };
  await $c.data.downloadGridViewExcel($p, gr_stockprogress, options, infoArr);
};

//-------------------------------------------------------------------------
// 엑셀 출력 (월별 입출고 현황)
//-------------------------------------------------------------------------
scwin.f_Excel3 = async function () {
  if (ds_inout.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let gridColCount = 0;
  for (let i = 0; i < gr_inout.getTotalCol(); i++) {
    if (gr_inout.getColumnVisible(i) == true) {
      gridColCount++;
    }
  }
  let str = $c.gus.cfGetFormatStr($p, ed_stDt.getValue().trim(), "####/##");
  let str1 = $c.gus.cfGetFormatStr($p, ed_endDt.getValue().trim(), "####/##");
  let str2 = lc_wrk.getText();
  let startRowIndex = 0;
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "월별 입출고 현황",
    textAlign: "center",
    fontSize: 12,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }];
  /* asis 오류  
  infoArr.push({
      rowIndex : 2,             
      colIndex : 0,           
      colSpan : gridColCount,  
      rowSpan : 1,
      text : `기준년월 [${str} ~ ${str1}]`,
      textAlign : "left",    
      fontSize : 10,
      drawBorder : false,       
      color : "black",       
      backgroundColor : "#ffffff"  
  });
  
  infoArr.push({
      rowIndex : 2,             
      colIndex : 0,           
      colSpan : gridColCount,  
      rowSpan : 1,
      text : `업무 [ ${str2} ]`,
      textAlign : "left",    
      fontSize : 10,
      drawBorder : false,       
      color : "black",       
      backgroundColor : "#ffffff"  
  });    
  */

  const options = {
    fileName: "월별 입출고 현황" + ".xlsx",
    sheetName: "월별 입출고 현황",
    startRowIndex: infoArr.length + 1,
    startColumnIndex: 0,
    type: 1
  };
  await $c.data.downloadGridViewExcel($p, gr_inout, options, infoArr);
};
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.ds_stock_ondataload = function () {
  let rowCnt = ds_stock.getTotalRow();
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      //$c.gus.cfAlertMsg(MSG_CM_WRN_002);
      $c.win.alert($p, "조회된 데이터가 없습니다.");
    }
    return;
  }
  if (rowCnt > 0) {
    totalRows.setValue(rowCnt);
    scwin.f_griddefault();
    //   ds_stock.sort("stdYm", 0); 
  }
};
scwin.ds_stockprogress_ondataload = function () {
  let rowCnt1 = ds_stockprogress.getTotalRow();
  if (rowCnt1 == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      // $c.gus.cfAlertMsg(MSG_CM_WRN_002);
      $c.win.alert($p, "조회된 데이터가 없습니다.");
    }
    return;
  }
  if (rowCnt1 > 0) {
    totalRows1.setValue(rowCnt1);
    scwin.f_colname();
    //   ds_stockprogress.sort("stdMm", 0); 
  }
};
scwin.ds_inout_ondataload = function () {
  let rowCnt2 = ds_inout.getTotalRow();
  totalRows2.setValue(rowCnt2);
  if (rowCnt2 == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      // $c.gus.cfAlertMsg(MSG_CM_WRN_002);
      $c.win.alert($p, "조회된 데이터가 없습니다.");
    }
    return;
  }

  // if (rowCnt2 > 0) {
  //     const inoutList = ds_inout.getAllJSON();
  //     inoutList.forEach((inOut,rowIndex)=>{
  //         try {
  //             ds_inout.setCellData(rowIndex,"stdYyyy",inOut["stdYm"].substring(0,4));
  //         } catch (e) {
  //             ds_inout.setCellData(rowIndex,"stdYyyy","");
  //         }
  //     })
  // //  ds_inout.sort("stdYm", 0); 
  // } 
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_oilOilStatNoPopUp = function () {
  udc_oilOilStatNo.cfCommonPopUp(scwin.udc_oilOilStatNo_callBackFunc, ed_reqOilStatNo.getValue(), ed_reqOilStatNm.getValue(), "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , "F" // 전체검색허용여부	("F")
  , "주유소코드,주유소코드,주유소명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
  );
};

//------------------------------------------------------------------------- 
// 주유소
//------------------------------------------------------------------------- 
scwin.udc_oilOilStatNo_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_reqOilStatNo.setValue(ret[0]);
    ed_reqOilStatNm.setValue(ret[1]);
  } else {
    ed_reqOilStatNo.setValue("");
    ed_reqOilStatNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function (inObj, inObjNm) {
  let inValue1 = $c.gus.cfGetValue($p, inObj);
  let inValue2 = $c.gus.cfGetValue($p, inObjNm);
  if ($c.gus.cfIsNull($p, inValue1) && $c.gus.cfIsNull($p, inValue2)) {
    for (var i = 1; i < scwin.f_IsPopUp.arguments.length; i++) {
      $c.gus.cfSetValue($p, scwin.f_IsPopUp.arguments[i], "");
    }
    return false;
  }
  return true;
};
scwin.udc_oilOilStatNo_onblurCodeEvent = function (e) {
  if (scwin.f_IsPopUp(ed_reqOilStatNo, ed_reqOilStatNm)) {
    ed_reqOilStatNm.setValue("");
  }
  scwin.f_oilOilStatNoPopUp();
};
scwin.udc_oilOilStatNo_onblurNameEvent = function (e) {
  scwin.f_oilOilStatNoPopUp();
};
scwin.udc_oilOilStatNo_onclickEvent = function (e) {
  scwin.f_oilOilStatNoPopUp();
};
scwin.btn_Clear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.lc_item_onselected = function () {
  //scwin.f_Retrieve();
};
scwin.tac_tabControl1_onchange = function (tabId, index, userTabId) {
  if (tac_tabControl1.getSelectedTabIndex() == 0) {
    $c.gus.cfEnableObjects($p, [ed_stDt, ed_endDt, lc_item, lc_wrk]);
    $c.gus.cfDisableObjects($p, [lc_item, lc_wrk]);
  } else if (tac_tabControl1.getSelectedTabIndex() == 1) {
    $c.gus.cfEnableObjects($p, [ed_stDt, ed_endDt, lc_item, lc_wrk]);
    $c.gus.cfDisableObjects($p, [ed_endDt, lc_wrk]);
  } else {
    $c.gus.cfEnableObjects($p, [ed_stDt, ed_endDt, lc_item, lc_wrk]);
    $c.gus.cfDisableObjects($p, [lc_item]);
  }
};
scwin.sbm_stock_submitdone = function (e) {
  if (ds_stock.getRowCount() > 0) {
    // subTotalId
    const stockList = ds_stock.getAllJSON();
    let checkValue = "";
    let subTotalId = 0;
    ds_stock.setIgnoreStatus("subTotalId", true);
    stockList.forEach((row, index) => {
      const yyyy = row["yyyy"];
      if (checkValue != yyyy) {
        subTotalId++;
        checkValue = yyyy;
      }
      ds_stock.setCellData(index, "subTotalId", String(subTotalId).padStart("4", "0"));
    });
  }
};
scwin.sbm_inout_submitdone = function (e) {
  if (ds_inout.getRowCount() > 0) {
    const stockList = ds_inout.getAllJSON();
    let checkValue = "";
    let subTotalId = 0;
    ds_inout.setIgnoreStatus("subTotalId", true);
    stockList.forEach((row, index) => {
      const yyyy = row["yyyy"];
      if (checkValue != yyyy) {
        subTotalId++;
        checkValue = yyyy;
      }
      ds_inout.setCellData(index, "subTotalId", String(subTotalId).padStart("4", "0"));
    });
  }
};
scwin.gr_stock_Exp_av = function (colId, yyyy = '9999') {
  const colValueList = ds_stock.getAllJSON().filter(f => yyyy == '9999' || f.subTotalId == yyyy).map(o => o[colId]);
  return scwin.f_avgFloor(colValueList);
};
scwin.gr_stockprogress_Exp_av = function (colId, yyyy = '9999') {
  const colValueList = ds_stockprogress.getAllJSON().filter(f => yyyy == '9999' || f.yyyy == yyyy).map(o => o[colId]);
  return scwin.f_avgFloor(colValueList);
};
scwin.gr_stockprogress_Last_Exp_av = function (colId, yyyy = '9999') {
  const filteredData = ds_stockprogress.getAllJSON().filter(f => yyyy == '9999' || f.yyyy == yyyy);
  if (filteredData.length === 0) return 0;
  const totalSum = filteredData.reduce((acc, cur) => acc + Number(cur[colId] || 0), 0);
  const maxMmCnt = Math.max(...filteredData.map(o => Number(o.mmCnt || 0)));
  return maxMmCnt === 0 ? 0 : Math.trunc(totalSum / maxMmCnt);
};
scwin.gr_inout_Exp_av = function (colId, yyyy = '9999') {
  const colValueList = ds_inout.getAllJSON().filter(f => yyyy == '9999' || f.subTotalId == yyyy).map(o => o[colId]);
  return scwin.f_avgFloor(colValueList);
};
scwin.f_avgFloor = function (valList = []) {
  return valList.length == 0 ? 0 : Math.trunc(valList.reduce((s, a) => s += Number(a), 0) / valList.length);
};
scwin.gr_stock_onsort = function () {
  if (ds_stock.getRowCount() > 0) {
    // subTotalId
    const stockList = ds_stock.getAllJSON();
    let checkValue = "";
    let subTotalId = 0;
    const sortList = gr_stock.getSortableStatus();
    if (sortList.length == 0) {
      stockList.sort((a, b) => a['stdYm'].localeCompare(b['stdYm']));
    }
    stockList.forEach((row, index) => {
      const yyyy = row["yyyy"];
      if (checkValue != yyyy) {
        subTotalId++;
        checkValue = yyyy;
      }
      row["subTotalId"] = String(subTotalId).padStart("4", "0");
    });
    ds_stock.setJSON(stockList);
  }
};
scwin.gr_inout_onsort = function () {
  if (ds_inout.getRowCount() > 0) {
    // subTotalId
    const inoutList = ds_inout.getAllJSON();
    let checkValue = "";
    let subTotalId = 0;
    const sortList = gr_inout.getSortableStatus();
    if (sortList.length == 0) {
      inoutList.sort((a, b) => a['stdYm'].localeCompare(b['stdYm']));
    }
    inoutList.forEach((row, index) => {
      const yyyy = row["yyyy"];
      if (checkValue != yyyy) {
        subTotalId++;
        checkValue = yyyy;
      }
      row["subTotalId"] = String(subTotalId).padStart("4", "0");
    });
    ds_inout.setJSON(inoutList);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrievecond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{refStDt:'stDt',refDataMap:'dma_search',edFromId:'ed_stDt',edToId:'ed_endDt',style:'width:%; height:px; ',id:'udc_fromToYearMon2',refEdDt:'endDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주유소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'oilOilStatNoPopUp',selectID:'retrieveOilStatClntNo',codeId:'ed_reqOilStatNo',validTitle:'',nameId:'ed_reqOilStatNm',style:'',code:'reqOilStatNo',refDataCollection:'dma_search',btnId:'btn_oilOilStatNo',id:'udc_oilOilStatNo','ev:onblurCodeEvent':'scwin.udc_oilOilStatNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_oilOilStatNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_oilOilStatNo_onclickEvent',allowCharCode:'0-9A-Za-z',maxlengthCode:'6',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회항목 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'true',disabledClass:'w2selectbox_disabled',id:'lc_item',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.item','ev:onselected':'scwin.lc_item_onselected'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'금액'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Q'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업무 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabledClass:'w2selectbox_disabled',id:'lc_wrk',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:dma_search.wrk'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.btn_Clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tabbox ',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',class:'wq_tab',id:'tac_tabControl1',style:'','ev:onchange':'scwin.tac_tabControl1_onchange'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'월별 재고 현황',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'재고 추이(3개년)',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs3',label:'월별 입출고 현황'}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownUserAuth:'X',gridID:'gr_stock',gridDownFn:'scwin.f_Excel1',btnUser:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_stock',id:'gr_stock',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true','ev:onsort':'scwin.gr_stock_onsort'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',width:'70',id:'column1',inputType:'text',style:'',value:'년월',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'70',id:'column17',inputType:'text',style:'',value:'연구분',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'380',id:'column61',inputType:'text',style:'',value:'수량',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',width:'380',id:'column41',inputType:'text',style:'',value:'금액',colSpan:'5',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'FMS',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'물류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column54',value:'고속',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'증감</br>(전월대비)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'FMS',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column38',value:'물류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'고속',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column36',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'증감</br>(전월대비)',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stdYm',inputType:'calendar',style:'',value:'',width:'70',calendarValueType:'yearMonth',displayFormat:'yyyy/MM',useMonthYearFormat:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subTotalId',inputType:'text',style:'',value:'',width:'70',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fmsQty',inputType:'text',style:'',value:'',dataType:'number',width:'70',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'loQty',inputType:'text',style:'',value:'',dataType:'number',width:'70',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trQty',inputType:'text',style:'',value:'',dataType:'number',width:'70',displayFormat:'#,##0',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',style:'',value:'',dataType:'number',width:'70',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'diffQty',inputType:'text',style:'',value:'',dataType:'number',width:'100',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fmsAmt',inputType:'text',style:'',value:'',dataType:'number',width:'70',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'loAmt',inputType:'text',style:'',value:'',dataType:'number',width:'70',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trAmt',inputType:'text',style:'',value:'',dataType:'number',width:'70',displayFormat:'#,##0',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',dataType:'number',width:'70',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'diffAmt',inputType:'text',style:'',value:'',dataType:'number',width:'100',displayFormat:'#,##0',textAlign:'right'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'subTotalId',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'평균',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column64',value:'',dataType:'number',displayMode:'label',expression:'scwin.gr_stock_Exp_av(\'fmsQty\' ,targetColValue())',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column60',value:'',dataType:'number',displayMode:'label',expression:'scwin.gr_stock_Exp_av(\'loQty\'  ,targetColValue())',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column56',value:'',dataType:'number',displayMode:'label',expression:'scwin.gr_stock_Exp_av(\'trQty\'  ,targetColValue())',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column52',value:'',dataType:'number',displayMode:'label',expression:'scwin.gr_stock_Exp_av(\'qty\'    ,targetColValue())',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',dataType:'number',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column44',value:'',dataType:'number',displayMode:'label',expression:'scwin.gr_stock_Exp_av(\'fmsAmt\' ,targetColValue())',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column28',value:'',dataType:'number',displayMode:'label',expression:'scwin.gr_stock_Exp_av(\'loAmt\'  ,targetColValue())',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column27',value:'',dataType:'number',displayMode:'label',expression:'scwin.gr_stock_Exp_av(\'trAmt\'  ,targetColValue())',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column26',value:'',dataType:'number',displayMode:'label',expression:'scwin.gr_stock_Exp_av(\'amt\'    ,targetColValue())',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',dataType:'number',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'평균',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column64',value:'',dataType:'number',displayMode:'label',expression:'scwin.gr_stock_Exp_av(\'fmsQty\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column60',value:'',dataType:'number',displayMode:'label',expression:'scwin.gr_stock_Exp_av(\'loQty\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column56',value:'',dataType:'number',displayMode:'label',expression:'scwin.gr_stock_Exp_av(\'trQty\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column52',value:'',dataType:'number',displayMode:'label',expression:'scwin.gr_stock_Exp_av(\'qty\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',dataType:'number',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column44',value:'',dataType:'number',displayMode:'label',expression:'scwin.gr_stock_Exp_av(\'fmsAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column28',value:'',dataType:'number',displayMode:'label',expression:'scwin.gr_stock_Exp_av(\'loAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column27',value:'',dataType:'number',displayMode:'label',expression:'scwin.gr_stock_Exp_av(\'trAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column26',value:'',dataType:'number',displayMode:'label',expression:'scwin.gr_stock_Exp_av(\'amt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',dataType:'number',displayMode:'label',displayFormat:'#,##0',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownUserAuth:'X',gridUpYn:'N',gridID:'gr_stockprogress',gridDownFn:'scwin.f_Excel2',btnUser:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_stockprogress',id:'gr_stockprogress',style:'',visibleRowNum:'14',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'년월',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'월구분',width:'70',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column61',inputType:'text',style:'',value:'FMS',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column57',inputType:'text',style:'',value:'물류',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column53',inputType:'text',style:'',value:'고속',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',style:'',value:'합계',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',style:'',value:'FMS',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',style:'',value:'물류',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'고속',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'합계',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col_year_3',inputType:'text',style:'',value:'2013년',width:'760',colSpan:'10',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'760',inputType:'text',style:'',id:'col_year_2',value:'2014년',displayMode:'label',colSpan:'10',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'760',inputType:'text',style:'',id:'col_year_1',value:'2015년',displayMode:'label',colSpan:'10',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',width:'70',style:'',value:'FMS'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column35',inputType:'text',width:'70',style:'',value:'물류'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',width:'70',style:'',value:'고속',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',width:'70',style:'',value:'합계'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',width:'100',style:'',value:'FMS'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',width:'100',style:'',value:'물류'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column102',inputType:'text',width:'100',style:'',value:'고속',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column98',inputType:'text',width:'100',style:'',value:'합계'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column94',inputType:'text',width:'100',style:'',value:'증감</br>(전년대비)'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column90',inputType:'text',width:'100',style:'',value:'증감</br>(전년대비)'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column86',inputType:'text',width:'70',style:'',value:'FMS'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column82',inputType:'text',width:'70',style:'',value:'물류'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column78',inputType:'text',width:'70',style:'',value:'고속',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column66',inputType:'text',width:'70',style:'',value:'합계'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column70',inputType:'text',width:'100',style:'',value:'FMS'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column74',inputType:'text',width:'100',style:'',value:'물류'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column138',inputType:'text',width:'100',style:'',value:'고속',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column134',inputType:'text',width:'100',style:'',value:'합계'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column130',inputType:'text',width:'100',style:'',value:'증감</br>(전년대비)'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column126',inputType:'text',width:'100',style:'',value:'증감</br>(전년대비)'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column122',inputType:'text',width:'70',style:'',value:'FMS'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column118',inputType:'text',width:'70',style:'',value:'물류'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column106',inputType:'text',width:'70',style:'',value:'고속',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column110',inputType:'text',width:'70',style:'',value:'합계'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column114',inputType:'text',width:'100',style:'',value:'FMS'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column158',inputType:'text',width:'100',style:'',value:'물류'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column154',inputType:'text',width:'100',style:'',value:'고속',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column142',inputType:'text',width:'100',style:'',value:'합계'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column146',inputType:'text',width:'100',style:'',value:'증감</br>(전년대비)'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column150',inputType:'text',width:'100',style:'',value:'증감</br>(전년대비)'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stdMm',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mmCnt',inputType:'text',style:'',value:'',width:'70',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fmsQty3',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'loQty3',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trQty3',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty3',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fmsAmt3',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'loAmt3',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trAmt3',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt3',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fmsQty2',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'loQty2',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trQty2',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty2',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fmsAmt2',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'loAmt2',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trAmt2',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt2',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'diffQty2',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'diffAmt2',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fmsQty1',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'loQty1',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trQty1',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty1',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fmsAmt1',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'loAmt1',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trAmt1',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt1',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'diffQty1',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'diffAmt1',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fmsQty',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'loQty',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trQty',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',style:'',value:'',width:'70',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fmsAmt',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'loAmt',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trAmt',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'diffQty',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'diffAmt',inputType:'text',style:'',value:'',width:'100',displayFormat:'#,##0',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'평균',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column64',width:'70',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'fmsQty3\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column60',width:'70',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'loQty3\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column56',width:'70',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'trQty3\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column52',width:'70',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'qty3\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'fmsAmt3\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'loAmt3\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'trAmt3\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'amt3\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',width:'70',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'fmsQty2\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',width:'70',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'loQty2\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',width:'70',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'trQty2\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',width:'70',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'qty2\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'fmsAmt2\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'loAmt2\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column104',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'trAmt2\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column100',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'amt2\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column96',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'diffQty2\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column92',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'diffAmt2\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column88',width:'70',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'fmsQty1\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column84',width:'70',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'loQty1\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column80',width:'70',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'trQty1\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column68',width:'70',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'qty1\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column72',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'fmsAmt1\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column76',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'loAmt1\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column140',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'trAmt1\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column136',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'amt1\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column132',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'diffQty1\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column128',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Exp_av(\'diffAmt1\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column124',width:'70',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Last_Exp_av(\'fmsQty\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column120',width:'70',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Last_Exp_av(\'loQty\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column108',width:'70',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Last_Exp_av(\'trQty\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column112',width:'70',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Last_Exp_av(\'qty\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column116',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Last_Exp_av(\'fmsAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column160',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Last_Exp_av(\'loAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column156',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Last_Exp_av(\'trAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column144',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Last_Exp_av(\'amt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column148',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Last_Exp_av(\'diffQty\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column152',width:'100',inputType:'expression',style:'',value:'',displayFormat:'#,##0',dataType:'number',textAlign:'right',expression:'scwin.gr_stockprogress_Last_Exp_av(\'diffAmt\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content3'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridID:'gr_inout',gridUpYn:'N',gridDownUserAuth:'X',gridDownFn:'scwin.f_Excel3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_inout',id:'gr_inout',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true','ev:onsort':'scwin.gr_inout_onsort'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'년월',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column61',inputType:'text',style:'',value:'수량',width:'340',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',style:'',value:'금액',width:'440',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'연구분',width:'70',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column39',inputType:'text',style:'',value:'기초재고',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column62',inputType:'text',style:'',value:'입고',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column58',inputType:'text',style:'',value:'출고',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column54',inputType:'text',style:'',value:'기말재고',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column50',inputType:'text',style:'',value:'증감</br>(기말재고)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',style:'',value:'기초재고',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',style:'',value:'입고',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'출고',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column37',inputType:'text',style:'',value:'기말재고',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'증감</br>(기말재고)',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stdYm',inputType:'calendar',style:'',value:'',width:'70',calendarValueType:'yearMonth',useMonthYearFormat:'true',displayFormat:'yyyy/MM'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfQty',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inQty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outQty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'afQty',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'diffAfQty',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'afAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'diffAfAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'subTotalId',inputType:'text',style:'',value:'',width:'70',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'subTotalId',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column75',displayMode:'label',value:'평균'}},{T:1,N:'w2:column',A:{width:'100',style:'',inputType:'expression',id:'column74',displayMode:'label',value:'',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'scwin.gr_inout_Exp_av(\'bfQty\' ,targetColValue())'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'expression',id:'column73',displayMode:'label',value:'',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'scwin.gr_inout_Exp_av(\'inQty\' ,targetColValue())'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'expression',id:'column72',displayMode:'label',value:'',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'scwin.gr_inout_Exp_av(\'outQty\',targetColValue())'}},{T:1,N:'w2:column',A:{width:'100',style:'',inputType:'expression',id:'column71',displayMode:'label',value:'',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'scwin.gr_inout_Exp_av(\'afQty\' ,targetColValue())'}},{T:1,N:'w2:column',A:{width:'100',style:'',inputType:'text',id:'column70',displayMode:'label',value:''}},{T:1,N:'w2:column',A:{width:'100',style:'',inputType:'expression',id:'column69',displayMode:'label',value:'',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'scwin.gr_inout_Exp_av(\'bfAmt\' ,targetColValue())'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'expression',id:'column68',displayMode:'label',value:'',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'scwin.gr_inout_Exp_av(\'inAmt\' ,targetColValue())'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'expression',id:'column67',displayMode:'label',value:'',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'scwin.gr_inout_Exp_av(\'outAmt\',targetColValue())'}},{T:1,N:'w2:column',A:{width:'100',style:'',inputType:'expression',id:'column66',displayMode:'label',value:'',textAlign:'right',displayFormat:'#,##0',dataType:'number',expression:'scwin.gr_inout_Exp_av(\'afAmt\' ,targetColValue())'}},{T:1,N:'w2:column',A:{width:'100',style:'',inputType:'text',id:'column65',displayMode:'label',value:''}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column29',displayMode:'label',value:''}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column01',inputType:'text',style:'',value:'평균',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column02',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column03',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column04',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column05',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column06',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column07',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column08',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column09',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column10',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'scwin.gr_inout_Exp_av(\'afAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]}]})