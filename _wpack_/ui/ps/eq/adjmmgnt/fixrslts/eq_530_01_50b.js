/*amd /ui/ps/eq/adjmmgnt/fixrslts/eq_530_01_50b.xml 27680 c02a17e6146ec1d34beedaab1ac0cb1f5d23f919ecbd9c570ed9e1f232cd7144 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fix_work_re'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'termFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'termTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repFixWrkPlCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctGb',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'co_ds_combo',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'name2'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'co_ds_combo1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'name2'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_lux_wrkPlCd',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'name2'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bizDomNm',name:'부문',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclCnt',name:'실적대수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAdptHhCnt',name:'총가동',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aaa',name:'대당',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bbb',name:'대당비용',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixPartAmt',name:'정비부품비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixUseUpAmt',name:'정비소모품비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAmt',name:'외주수선비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcoilAmt',name:'잡유비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ccc',name:'자본적지출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tireAmt',name:'타이어비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carAmt',name:'carAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'machineAmt',name:'machineAmt',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'},E:[{T:1,N:'w2:row'}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_co_ds_combo',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"co_ds_combo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_co_ds_combo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_co_ds_combo1',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"co_ds_combo1","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_co_ds_combo1_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_fix_work_re","key":"IN_DS1"},{"id":"ds_fix_work_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_fix_work_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_lux_wrkPlCd',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lux_wrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_lux_wrkPlCd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수  
scwin.userInfo = $c.data.getMemInfo($p);
scwin.dateStr = WebSquare.date.getCurrentServerDate();
scwin.startDt = scwin.dateStr.substring(0, 6) + "01";
scwin.endDt = $c.date.addMonth($p, scwin.startDt, 1);
scwin.endDt = $c.date.addDate($p, scwin.endDt, -1);
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  ed_wrkStDt.setValue(scwin.startDt);
  ed_wrkEndDt.setValue(scwin.endDt);
  //-------------------------------------------------------------------------
  // 사업부문combo데이터호출 조회
  //-------------------------------------------------------------------------
  sbm_co_ds_combo1.action = "/ps.co.RetrievePsCboCmmCMD.do?cmd=retriveHomeClsList&strVal=&intVal=";
  $c.sbm.execute($p, sbm_co_ds_combo1);
  ed_wrkStDt.focus();
};
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [tb_wrk]))) return;
  if (ed_wrkStDt.getValue() > ed_wrkEndDt.getValue()) {
    $c.win.alert($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_wrkStDt.focus();
    return;
  }
  // dma_fix_work_re.setUseChangeInfo(false); // 조회조건

  let strPath = "/ps.eq.adjmmgnt.fixrslts.RetrieveVehicleKindEachAccountEachCMD.do";
  sbm_retrieve.action = strPath;
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_wrkStDt, ed_wrkEndDt, lc_homeClsCd, lc_acctGb], null);
  let lcIndex = "";
  if (scwin.userInfo.eqHomeClsCd == "") {
    lcIndex = "LO";
  } else {
    lcIndex = scwin.userInfo.eqHomeClsCd;
  }

  // 대표정비작업장콤보 조회
  scwin.f_RetrieveSecond(lcIndex);
  if (lc_homeClsCd.getValue() == scwin.userInfo.eqHomeClsCd) {
    lc_wrkPlCd.setValue(scwin.userInfo.fixWrkPlCd); // 정비작업장코드
  }
  ;
  scwin.lc_repWrkPlCd_onviewchange();
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  let cntRow = ds_fix_work_list.getRowCount();
  if (cntRow == 0) return;
  let infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 12,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "장비군별 정비비 실적 집계",
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
    colSpan: 12,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "정비기간 [" + $c.gus.cfGetFormatStr($p, ed_wrkStDt.getValue(), "####/##/##") + " ~ " + $c.gus.cfGetFormatStr($p, ed_wrkEndDt.getValue(), "####/##/##") + "]",
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
    colSpan: 12,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "사업부문 [" + $c.win.getComboLabel($p, lc_homeClsCd) + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 4,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 12,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "대표정비작업장 [" + $c.win.getComboLabel($p, lc_repWrkPlCd) + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 5,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 12,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "정비작업장 [" + $c.win.getComboLabel($p, lc_wrkPlCd) + "]",
    textAlign: "left",
    //정렬
    fontSize: 10,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }, {
    rowIndex: 6,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 12,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "구분 [" + $c.win.getComboLabel($p, lc_acctGb) + "]",
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
    fileName: "장비군별 정비비 실적 집계.xlsx",
    sheetName: "장비군별 정비비 실적 집계",
    startRowIndex: 7,
    startColumnIndex: 0,
    type: 1
  };
  $c.data.downloadGridViewExcel($p, gr_work_pl, options, infoArr);
};

//-------------------------------------------------------------------------
// 대표정비작업장콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveSecond = function (param1) {
  sbm_co_ds_combo.action = "/ps.co.RetrievePsCboCmmCMD.do?cmd=retriveFixWrkList&strVal=" + param1 + "&intVal=";
  $c.sbm.execute($p, sbm_co_ds_combo);
};

//-------------------------------------------------------------------------
// 컬럼계산식 (aaa, bbb, ccc)
//-------------------------------------------------------------------------
scwin.fn_calcAll = function () {
  for (let i = 0; i < ds_fix_work_list.getRowCount(); i++) {
    // 원본 컬럼을 Number()로 안전하게 변환
    let pchsAdptHhCnt = Number(ds_fix_work_list.getCellData(i, "pchsAdptHhCnt"));
    let vehclCnt = Number(ds_fix_work_list.getCellData(i, "vehclCnt"));
    let bilgAmt = Number(ds_fix_work_list.getCellData(i, "bilgAmt"));
    let carAmt = Number(ds_fix_work_list.getCellData(i, "carAmt"));
    let machineAmt = Number(ds_fix_work_list.getCellData(i, "machineAmt"));
    let aaa = 0;
    if (vehclCnt !== 0) {
      aaa = pchsAdptHhCnt / vehclCnt;
    }
    let bbb = 0;
    if (vehclCnt !== 0) {
      bbb = bilgAmt / vehclCnt;
    }
    let ccc = carAmt + machineAmt;
    ds_fix_work_list.setCellData(i, "aaa", aaa);
    ds_fix_work_list.setCellData(i, "bbb", bbb);
    ds_fix_work_list.setCellData(i, "ccc", ccc);
  }
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_fix_work_list.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
  let acctGb = lc_acctGb.getValue();
  if (acctGb == "1") {
    gr_work_pl.setColumnVisible("bizDomNm", false);
    // gr_work_pl.ColumnProp("bizDomNm","Show") = "false";
  } else {
    gr_work_pl.setColumnVisible("bizDomNm", true);
    // gr_work_pl.ColumnProp("bizDomNm","Show") = "true";	
  }
  scwin.fn_calcAll();
};
scwin.sbm_ds_lux_wrkPlCd_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_lux_wrkPlCd.sort("code", 0);
  lc_wrkPlCd.setSelectedIndex(0);
  if (lc_homeClsCd.getValue() == scwin.userInfo.eqHomeClsCd) {
    lc_wrkPlCd.setValue(scwin.userInfo.fixWrkPlCd); // 정비작업장코드
  }
};
scwin.lc_homeClsCd_onviewchange = function (info) {
  let lcIndex = lc_homeClsCd.getValue();
  // 대표정비작업장콤보 조회
  scwin.f_RetrieveSecond(lcIndex);
};
scwin.sbm_co_ds_combo_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  co_ds_combo.sort("code", 0);
  lc_repWrkPlCd.setSelectedIndex(0);
  if (lc_homeClsCd.getValue() == scwin.userInfo.eqHomeClsCd) {
    lc_wrkPlCd.setValue(scwin.userInfo.fixWrkPlCd); // 정비작업장코드
  }
  scwin.lc_repWrkPlCd_onviewchange();
};
scwin.lc_repWrkPlCd_onviewchange = function (info) {
  if (lc_repWrkPlCd.getValue() == "") return;
  sbm_ds_lux_wrkPlCd.action = "/cm.zz.RetrieveComboCMD.do?sysCd=PsCommonEBC&queryId=retriveWrkplList&param2=" + lc_repWrkPlCd.getValue();
  $c.sbm.execute($p, sbm_ds_lux_wrkPlCd);
};
scwin.sbm_co_ds_combo1_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (scwin.userInfo.eqHomeClsCd == "") {
    lc_homeClsCd.setValue("LO");
  } else {
    lc_homeClsCd.setValue(scwin.userInfo.eqHomeClsCd); // 정비소속구분코드
  }
  scwin.f_RetrieveSecond(lc_homeClsCd.getValue());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_wrk',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'termFrom',refDataMap:'dma_fix_work_re',style:'',id:'udc_fromToCalendar3',refEdDt:'termTo',edFromId:'ed_wrkStDt',edToId:'ed_wrkEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 100px;',submenuSize:'fixed',mandatory:'true',ref:'data:dma_fix_work_re.homeClsCd','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange',title:'사업부문',visibleRowNum:'20',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:co_ds_combo1'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대표정비작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_repWrkPlCd',style:'width: 150px;',submenuSize:'fixed',mandatory:'true',ref:'data:dma_fix_work_re.repFixWrkPlCd','ev:onviewchange':'scwin.lc_repWrkPlCd_onviewchange',title:'대표정비작업장',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:co_ds_combo'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정비작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlCd',style:'width: 150px;',submenuSize:'fixed',mandatory:'true',ref:'data:dma_fix_work_re.fixWrkPlCd',title:'정비작업장',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_lux_wrkPlCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'lc_acctGb',ref:'data:dma_fix_work_re.acctGb',search:'start',style:'width: 150px;',submenuSize:'fixed'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'장비구분별'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부문별'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userauth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_Excel',gridID:'gr_work_pl'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fix_work_list',focusMode:'cell',id:'gr_work_pl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',columnMove:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'부문',width:'70',colSpan:'',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'장비</br>구분',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'실적</br>대수',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'가동시간',width:'170',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'대당비용',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'합계',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'710',inputType:'text',style:'',id:'column70',value:'계정별 현황',displayMode:'label',colSpan:'6',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'총가동',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'대당',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column71',value:'정비부품비',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column67',value:'정비소모품비',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column63',value:'외주수선비',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'잡유비',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'자본적지출',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'타이어비',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bizDomNm',inputType:'text',style:'',value:'',width:'70',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'text',style:'',value:'',width:'70',textAlign:'right',colMerge:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclCnt',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAdptHhCnt',inputType:'text',style:'',value:'',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'aaa',inputType:'',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,##0.#[floor]',readOnly:'true',textAlign:'right',expression:'Number(display(\'pchsAdptHhCnt\'))/Number(display(\'vehclCnt\'))'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bbb',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0[floor]',readOnly:'true',textAlign:'right',expression:'Number(display(\'bilgAmt\'))/Number(display(\'vehclCnt\'))'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bilgAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'fixPartAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'fixUseUpAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'outAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'etcoilAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ccc',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,##0',readOnly:'true',textAlign:'right',expression:'Number(display(\'carAmt\'))+Number(display(\'machineAmt\'))',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tireAmt',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,##0',textAlign:'right',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("vehclCnt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("pchsAdptHhCnt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'',style:'',id:'column44',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'',style:'',id:'column81',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column77',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("bilgAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column73',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("fixPartAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("fixUseUpAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column65',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("outAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column61',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("etcoilAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'SUM("ccc")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',displayFormat:'#,##0',dataType:'number',expression:'SUM("tireAmt")',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})