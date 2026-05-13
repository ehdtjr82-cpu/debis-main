/*amd /ui/cm/bc/incident/zz_101_01_02b.xml 53283 6fda53c8ec5d804a3e23d9fc349d43e93028ee9bbde420afca1a10a8a601e9ba */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchDayMst'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sndDttmFrom',name:'sndDttmFrom',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sndDttmTo',name:'sndDttmTo',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchMonthly'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sndMonthlyFrom',name:'sndMonthlyFrom',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sndMonthlyTo',name:'sndMonthlyTo',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchDayDtl'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'schGb',name:'schGb',dataType:'text'}},{T:1,N:'w2:key',A:{id:'requestTime',name:'requestTime',dataType:'text'}},{T:1,N:'w2:key',A:{id:'valueCheck',name:'valueCheck',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toSendNumber',name:'toSendNumber',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kTemplateCode',name:'kTemplateCode',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msgText',name:'msgText',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msgType',name:'msgType',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchQueue'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'schGb',name:'schGb',dataType:'text'}},{T:1,N:'w2:key',A:{id:'requestTime',name:'requestTime',dataType:'text'}},{T:1,N:'w2:key',A:{id:'valueCheck',name:'valueCheck',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toSendNumber',name:'toSendNumber',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kTemplateCode',name:'kTemplateCode',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msgText',name:'msgText',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msgType',name:'msgType',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ListDayMst',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'requestTime',name:'requestTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sucSms',name:'sucSms',dataType:'text'}},{T:1,N:'w2:column',A:{id:'failSms',name:'failSms',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumSms',name:'sumSms',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sucMms',name:'sucMms',dataType:'text'}},{T:1,N:'w2:column',A:{id:'failMms',name:'failMms',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumMms',name:'sumMms',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sucTalk',name:'sucTalk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'failTalk',name:'failTalk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumTalk',name:'sumTalk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalCnt',name:'totalCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkCnt',name:'chkCnt',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ListDayDtl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'requestTime',name:'requestTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msgType',name:'msgType',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stat',name:'stat',dataType:'text'}},{T:1,N:'w2:column',A:{id:'result',name:'result',dataType:'text'}},{T:1,N:'w2:column',A:{id:'codeDesc',name:'codeDesc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendTime',name:'sendTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reportTime',name:'reportTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tcprecvTime',name:'tcprecvTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kTemplateCode',name:'kTemplateCode',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dstaddr',name:'dstaddr',dataType:'text'}},{T:1,N:'w2:column',A:{id:'callback',name:'callback',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text',name:'text',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telecom',name:'telecom',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mseq',name:'mseq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pseq',name:'pseq',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ListMonthly',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'requestTime',name:'requestTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sucSms',name:'sucSms',dataType:'text'}},{T:1,N:'w2:column',A:{id:'failSms',name:'failSms',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumSms',name:'sumSms',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sucMms',name:'sucMms',dataType:'text'}},{T:1,N:'w2:column',A:{id:'failMms',name:'failMms',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumMms',name:'sumMms',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sucTalk',name:'sucTalk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'failTalk',name:'failTalk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumTalk',name:'sumTalk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalCnt',name:'totalCnt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkCnt',name:'chkCnt',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ListQueue',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'requestTime',name:'requestTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msgType',name:'msgType',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stat',name:'stat',dataType:'text'}},{T:1,N:'w2:column',A:{id:'result',name:'result',dataType:'text'}},{T:1,N:'w2:column',A:{id:'codeDesc',name:'codeDesc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendTime',name:'sendTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reportTime',name:'reportTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tcprecvTime',name:'tcprecvTime',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kTemplateCode',name:'kTemplateCode',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dstaddr',name:'dstaddr',dataType:'text'}},{T:1,N:'w2:column',A:{id:'callback',name:'callback',dataType:'text'}},{T:1,N:'w2:column',A:{id:'text',name:'text',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telecom',name:'telecom',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mseq',name:'mseq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pseq',name:'pseq',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchDayMst',action:'/cm.bc.incident.RetrieveSMSDailyStaticsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchDayMst","key":"IN_DS1"},{"id":"ds_ListDayMst","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ListDayMst","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchDayMst_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchDayDtl',action:'/cm.bc.incident.TransmissionHistoryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchDayDtl","key":"IN_DS1"},{"id":"ds_ListDayDtl","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ListDayDtl","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchDayDtl_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchMonthly',action:'/cm.bc.incident.RetrieveSMSMonthlyStaticsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchMonthly","key":"IN_DS1"},{"id":"ds_ListMonthly","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ListMonthly","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchMonthly_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchQueue',action:'/cm.bc.incident.TransmissionHistoryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchQueue","key":"IN_DS1"},{"id":"ds_ListQueue","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ListQueue","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchQueue_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// scwin.memJson = $c.data.getMemInfo();
// scwin.userId = scwin.memJson.userId;
scwin.currDate = WebSquare.date.getFormattedDate(new Date(), "yyyyMMdd");
scwin.monthDate = WebSquare.date.getFormattedDate(new Date(), "yyyyMM");
scwin.onpageload = function () {
  scwin.f_initSetTab(); //tab세팅

  // setQueryConditionHeader();
};
const codeOptions1 = [{
  method: "getLuxeComboData",
  param1: "SMSstaticsEBC",
  param2: "retriveTemplateCodeList",
  param3: [""],
  compID: "lc_kTemplateCode, lc_queue_kTemplateCode"
}];
$c.data.setGauceUtil($p, codeOptions1);

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {};

// UDC 셋팅이 이후..
scwin.onUdcCompleted = function () {
  ica_sndDttmFrom.setValue(scwin.currDate);
  ica_sndDttmTo.setValue(scwin.currDate);
};

// Tab 초기화
scwin.f_initSetTab = function () {
  // $c.gus.cfEnableObjects([tr_tab_center0, tr_tab_center1, tr_tab_center2]);
  // $c.gus.cfViewTab(0);
};

// 일자별 조회
scwin.f_RetrieveDay = function () {
  // ed_msgText.getValue();
  var vsndDttmFrom = ica_sndDttmFrom.getValue();
  var vsndDttmTo = ica_sndDttmTo.getValue();
  if (vsndDttmFrom == "" || vsndDttmFrom.length < 1) {
    // ica_sndDttmFrom.Text = fromdate;
    ica_sndDttmFrom.setValue(scwin.currDate);
  }
  if (vsndDttmTo == "" || vsndDttmTo.length < 1) {
    // ica_sndDttmTo.Text = todate;
    ica_sndDttmTo.setValue(scwin.currDate);
  }
  if (vsndDttmFrom != "" && vsndDttmTo != "") {
    if (vsndDttmFrom > vsndDttmTo) {
      $c.win.alert($p, "날짜를 다시 확인하세요");
      return false;
    }
  }

  // ds_ListDayDtl.ClearData();
  // tr_searchDayMst.Post();
  ds_ListDayDtl.setJSON([]);
  $c.sbm.execute($p, sbm_searchDayMst);
};

// 월별 조회
scwin.f_RetrieveMonthly = async function () {
  // scwin.fromdate = scwin.currDate;
  // scwin.todate = scwin.currDate;
  // scwin.monthfromdate = scwin.monthDate;

  var vsndDttmFrom = ica_sndMonthlyFrom.getValue();
  var vsndDttmTo = ica_sndMonthlyTo.getValue();
  if (vsndDttmFrom == "" || vsndDttmFrom.length < 1) {
    await $c.win.alert($p, "요청월을 다시 확인하세요");
    return;
  }
  if (vsndDttmTo == "" || vsndDttmTo.length < 1) {
    await $c.win.alert($p, "요청월을 다시 확인하세요");
    return;
  }
  if (vsndDttmFrom != "" && vsndDttmTo != "") {
    if (vsndDttmFrom > vsndDttmTo) {
      await $c.win.alert($p, "날짜를 다시 확인하세요");
      return false;
    }
  }
  dma_searchMonthly.set("sndMonthlyFrom", vsndDttmFrom + "01");
  dma_searchMonthly.set("sndMonthlyTo", vsndDttmTo + "01");
  $c.sbm.execute($p, sbm_searchMonthly);
};
scwin.f_RetrieveToSendNumber = function () {
  // if (ds_ListDayDtl.CountRow == 0 && dma_searchDayDtl.set( "valueCheck") == "") {
  if (ds_ListDayDtl.getRowCount() == 0 && dma_searchDayDtl.get("valueCheck") == "") {
    return;
  }

  // dma_searchDayDtl.set("toSendNumber", ed_toSendNumber.getValue());
  // dma_searchDayDtl.set("kTemplateCode", lc_kTemplateCode.getValue());
  // tr_searchDayDtl.post();
  $c.sbm.execute($p, sbm_searchDayDtl);
};

//MSG_QUEUE 조회
scwin.f_RetrieveQueue = function () {
  // ds_searchQueue.set("schGb") = "2";//1:전송상세내역 2:MSG_QUEUE조회
  // tr_searchQueue.post();
  dma_searchQueue.set("schGb", "2");
  $c.sbm.execute($p, sbm_searchQueue);
};

//-------------------------------------------------------------------------
// 그룹코드 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_toExcel1 = async function (pGrid, pSheetNm, pXlsFileNm, pDate) {
  //excel 1
  let cntRow = ds_ListDayMst.getRowCount();
  if (cntRow == 0) return;
  let fileName = "일자별 전송 통계 현황";
  let options = {
    fileName: fileName + ".xlsx",
    sheetName: fileName,
    useSubTotal: "true",
    useSubTotalData: "true",
    startRowIndex: 3,
    startColumnIndex: 0,
    type: 1
  };
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 12,
    text: fileName,
    textAlign: "center",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 12,
    text: "(기간 " + ica_sndDttmFrom.getValue() + "-" + ica_sndDttmTo.getValue() + ")",
    textAlign: "left",
    fontSize: 12,
    drawBorder: false
  }];
  await $c.data.downloadGridViewExcel($p, gr_ListDayMst, options, infoArr);
};
scwin.f_toExcel2 = async function (pGrid, pSheetNm, pXlsFileNm, pDate) {
  let cntRow = ds_ListDayDtl.getRowCount();
  if (cntRow == 0) return;
  let fileName = "전송 내역 현황";
  let options = {
    fileName: fileName + ".xlsx",
    sheetName: fileName,
    useSubTotal: "true",
    useSubTotalData: "true",
    startRowIndex: 2,
    startColumnIndex: 0,
    type: 1
  };
  var infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 8,
    text: fileName,
    textAlign: "center",
    fontSize: 12,
    drawBorder: false
  }];
  await $c.data.downloadGridViewExcel($p, gr_ListDayDtl, options, infoArr);
};
scwin.f_toExcel3 = async function (pGrid, pSheetNm, pXlsFileNm, pDate) {
  let cntRow = ds_ListMonthly.getRowCount();
  if (cntRow == 0) return;
  let fileName = "월별  전송 통계 현황";
  let options = {
    fileName: fileName + ".xlsx",
    sheetName: fileName,
    useSubTotal: "true",
    useSubTotalData: "true",
    startRowIndex: 3,
    startColumnIndex: 0,
    type: 1
  };
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 12,
    text: fileName,
    textAlign: "center",
    fontSize: 12,
    drawBorder: false
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 12,
    text: "(기간 " + ica_sndMonthlyFrom.getValue() + "-" + ica_sndMonthlyTo.getValue() + ")",
    textAlign: "left",
    fontSize: 12,
    drawBorder: false
  }];
  await $c.data.downloadGridViewExcel($p, gr_ListMonthly, options, infoArr);
};
scwin.f_toExcel4 = async function () {
  let cntRow = ds_ListQueue.getRowCount();
  if (cntRow == 0) return;
  let fileName = "MSS_GUEUE 현황";
  let options = {
    fileName: fileName + ".xlsx",
    sheetName: fileName,
    useSubTotal: "true",
    useSubTotalData: "true",
    startRowIndex: 2,
    startColumnIndex: 0,
    type: 1
  };
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 12,
    text: fileName,
    textAlign: "center",
    fontSize: 12,
    drawBorder: false
  }];
  await $c.data.downloadGridViewExcel($p, gr_ListQueue, options, infoArr);
};
scwin.dataSetDebug = function (dataSet, isDebug) {
  if (isDebug == true) {
    var obj = dataSet;
    var str = "[[[[" + obj.id + "]]]]]\n";
    for (var dsRow = 1; dsRow <= obj.CountRow; dsRow++) {
      for (var dsCol = 1; dsCol <= obj.CountColumn; dsCol++) {
        str += "[" + obj.ColumnId(dsCol) + "] " + obj.NameValue(dsRow, obj.ColumnId(dsCol)) + ", ";
      }
      str += "\n\n";
    }
    alert(str);
  }
};
scwin.tab_sms_ontabclick = function (tabId, index) {};
scwin.tab_sms_ontabload = function (tabId, index, userId) {
  if (index == 1) {
    ica_sndMonthlyFrom.setValue(scwin.monthDate);
    ica_sndMonthlyTo.setValue(scwin.monthDate);
  }
};
scwin.gr_searchDayMst_oncelldblclick = function (rowIndex, columnIndex, colid) {
  dma_searchDayDtl.set("requestTime", ds_ListDayMst.getCellAllData(rowIndex, "requestTime"));
  dma_searchDayDtl.set("schGb", "1");
  if (colid == "requestTime") {
    return;
  }
  if (ds_ListDayMst.getCellAllData(rowIndex, colid) < 1) {
    return;
  }
  if (colid == "sucSms" || colid == "failSms" || colid == "sumSms") {
    dma_searchDayDtl.set("msgType", "1");
  } else if (colid == "sucMms" || colid == "failMms" || colid == "sumMms") {
    dma_searchDayDtl.set("msgType", "3");
  } else if (colid == "sucTalk" || colid == "failTalk" || colid == "sumTalk") {
    dma_searchDayDtl.set("msgType", "6");
  } else if (colid == "totalCnt" || colid == "chkCnt") {
    dma_searchDayDtl.set("msgType", "");
    if (colid == "totalCnt") {
      dma_searchDayDtl.set("valueCheck", "TOT");
    } else if (colid == "chkCnt") {
      dma_searchDayDtl.set("valueCheck", "CHK");
    }
  }
  if (colid == "sucSms" || colid == "sucMms" || colid == "sucTalk") {
    dma_searchDayDtl.set("valueCheck", "S");
  } else if (colid == "failSms" || colid == "failMms" || colid == "failTalk") {
    dma_searchDayDtl.set("valueCheck", "F");
  } else if (colid == "sumSms" || colid == "sumMms" || colid == "sumTalk") {
    dma_searchDayDtl.set("valueCheck", "");
  }
  $c.sbm.execute($p, sbm_searchDayDtl);
};
scwin.sbm_searchDayMst_submitdone = function (e) {
  var rowCnt = ds_ListDayMst.getRowCount();
  spanTotal1.setLabel(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
  gr_ListDayMst.setFocusedCell(0, 0);
};
scwin.sbm_searchDayDtl_submitdone = function (e) {
  var rowCnt = ds_ListDayDtl.getRowCount();
  spanTotal2.setLabel(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
  gr_ListDayDtl.setFocusedCell(0, 0);
};
scwin.sbm_searchMonthly_submitdone = function (e) {
  var rowCnt = ds_ListMonthly.getRowCount();
  spanTotal3.setLabel(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
  gr_ListMonthly.setFocusedCell(0, 0);
};
scwin.sbm_searchQueue_submitdone = function (e) {
  var rowCnt = ds_ListQueue.getRowCount();
  spanTotal4.setLabel(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
  gr_ListQueue.setFocusedCell(0, 0);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'wq_tab',id:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'',id:'tab_sms',style:'','ev:ontabclick':'scwin.tab_sms_ontabclick','ev:ontabload':'scwin.tab_sms_ontabload'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'일별 전송 통계 현황',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'월별 전송 통계 현황',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs3',label:'MSG_QUEUE',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th '},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'요청일자 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'sndDttmFrom',refDataMap:'dma_searchDayMst',style:'',id:'udc_fromToCalendar2',refEdDt:'sndDttmTo',edFromId:'ica_sndDttmFrom',edToId:'ica_sndDttmTo'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_RetrieveDay',type:'button',class:'btn sch',escape:'false','ev:onclick':'scwin.f_RetrieveDay'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'일별 전송 통계 현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_toExcel1',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_ListDayMst',id:'udc_ListDayMst'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox '},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_ListDayMst',scrollByColumn:'false',style:'',id:'gr_ListDayMst',sortable:'false',visibleRowNum:'6',class:'wq_gvw',checkReadOnlyOnPasteEnable:'','ev:oncelldblclick':'scwin.gr_searchDayMst_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'150',inputType:'text',style:'',id:'column62',value:'요청일자',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'3',width:'210',inputType:'text',style:'',id:'column61',value:'SMS',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'3',width:'210',inputType:'text',style:'',id:'column58',value:'MMS',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'3',width:'210',inputType:'text',style:'',id:'column55',value:'알림톡',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'150',inputType:'text',style:'',id:'column52',value:'총건수',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'170',inputType:'text',style:'',id:'column51',value:'전송일다른경우',displayMode:'label',sortable:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column11',value:'성공',blockSelect:'false',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column10',value:'실패',blockSelect:'false',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column9',value:'합계',blockSelect:'false',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'성공',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'실패',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'합계',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'성공',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column41',value:'실패',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column38',value:'합계',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'requestTime',blockSelect:'false',displayMode:'label',dataType:'date',displayFormat:'yyyy.MM.dd'}},{T:1,N:'w2:column',A:{textAlign:'center',removeBorderStyle:'false',width:'120',inputType:'text',id:'sucSms',blockSelect:'false',displayMode:'label',class:'underline',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'failSms',blockSelect:'false',displayMode:'label',class:'underline',textAlign:'center',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'center',removeBorderStyle:'false',width:'120',inputType:'text',id:'sumSms',blockSelect:'false',displayMode:'label',class:'underline',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'text',id:'sucMms',displayMode:'label',class:'underline',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'text',id:'failMms',displayMode:'label',class:'underline',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'text',id:'sumMms',displayMode:'label',class:'underline',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sucTalk',value:'',displayMode:'label',class:'underline',textAlign:'center',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'failTalk',value:'',displayMode:'label',class:'underline',textAlign:'center',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sumTalk',value:'',displayMode:'label',class:'underline',textAlign:'center',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'totalCnt',value:'',displayMode:'label',class:'underline',textAlign:'center',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'chkCnt',value:'',displayMode:'label',class:'underline',textAlign:'center',displayFormat:'#,###,###,###',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column31',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column30',value:'',displayMode:'label',displayFormat:'#,###,###,###',dataType:'number',expression:'sum(\'sucSms\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column29',value:'',displayMode:'label',displayFormat:'#,###,###,###',dataType:'number',expression:'sum(\'failSms\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column28',displayMode:'label',displayFormat:'#,###,###,###',expression:'sum(\'sumSms\')',dataType:'number'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'expression',id:'column27',value:'',displayMode:'label',displayFormat:'#,###,###,###',expression:'sum(\'sucMms\')',dataType:'number'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'expression',id:'column26',value:'',displayMode:'label',displayFormat:'#,###,###,###',expression:'sum(\'failMms\')',dataType:'number'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'expression',id:'column25',displayMode:'label',displayFormat:'#,###,###,###',expression:'sum(\'sumMms\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',displayFormat:'#,###,###,###',expression:'sum(\'sucTalk\')',dataType:'number',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',displayFormat:'#,###,###,###',expression:'sum(\'failTalk\')',dataType:'number',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column40',value:'',displayMode:'label',displayFormat:'#,###,###,###',expression:'sum(\'sumTalk\')',dataType:'number',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column34',value:'',displayMode:'label',displayFormat:'#,###,###,###',expression:'sum(\'totalCnt\')',dataType:'number',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'170',inputType:'expression',style:'',id:'column37',value:'',displayMode:'label',displayFormat:'#,###,###,###',expression:'sum(\'chkCnt\')',dataType:'number',textAlign:'center'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spanTotal1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box mt8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:105px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:60px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th '},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'템플릿 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'true',chooseOptionLabel:'전체',chooseOptionValue:'$blank',class:'',editType:'select',id:'lc_kTemplateCode',mandatory:'true',ref:'data:dma_searchDayDtl.kTemplateCode',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'받는사람 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_toSendNumber',style:'width: 150px',ref:'data:dma_searchDayDtl.toSendNumber'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'전송내용 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_msgText',style:'width: 180px;',ref:'data:dma_searchDayDtl.msgText'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_RetrieveToSendNumber',type:'button',class:'btn sch',escape:'false','ev:onclick':'scwin.f_RetrieveToSendNumber'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'전송 내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownFn:'scwin.f_toExcel2',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_ListDayDtl',id:'udc_ListDayDtl'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox '},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_ListDayDtl',scrollByColumn:'false',style:'',id:'gr_ListDayDtl',sortable:'true',visibleRowNum:'6',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'180',inputType:'text',id:'column12',value:'요청일시',blockSelect:'false',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column11',value:'받는사람',blockSelect:'false',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column10',value:'템플릿명',blockSelect:'false',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column9',value:'보내는사람',blockSelect:'false',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'500',inputType:'text',id:'column21',value:'전송내용',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column19',value:'처리결과',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column17',value:'전송일시',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column44',value:'통신사',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'180',inputType:'text',id:'requestTime',blockSelect:'false',displayMode:'label',calendarValueType:'yearMonthDateTime',dataType:'date',displayFormat:'yyyy.MM.dd HH:mm',ioFormat:'yyyyMMdd HH:mm:SS'}},{T:1,N:'w2:column',A:{textAlign:'center',removeBorderStyle:'false',width:'150',inputType:'text',id:'dstaddr',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'kTemplateCode',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{textAlign:'center',removeBorderStyle:'false',width:'150',inputType:'text',id:'callback',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'500',inputType:'text',id:'text',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',inputType:'text',id:'codeDesc',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'150',inputType:'text',id:'sendTime',displayMode:'label',dataType:'date',displayFormat:'yyyy.MM.dd HH:mm',ioFormat:'yyyyMMdd HH:mm:SS'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'telecom',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spanTotal2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{edFromId:'ica_sndMonthlyFrom',edToId:'ica_sndMonthlyTo',id:'udc_fromToYearMon1',refDataMap:'',refEdDt:'',refStDt:'',style:' '}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_RetrieveMonthly',style:'',type:'button','ev:onclick':'scwin.f_RetrieveMonthly'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'월별 전송 통계 현황 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridDownFn:'scwin.f_toExcel3',gridID:'gr_ListMonthly',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',id:'udc_ListMonthly'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section3',class:'gvwbox '},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_ListMonthly',scrollByColumn:'false',style:'',id:'gr_ListMonthly',sortable:'true',visibleRowNum:'14',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'150',inputType:'text',style:'',id:'column62',value:'요청일자',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'3',width:'210',inputType:'text',style:'',id:'column61',value:'SMS',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'3',width:'210',inputType:'text',style:'',id:'column58',value:'MMS',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'3',width:'210',inputType:'text',style:'',id:'column55',value:'알림톡',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'150',inputType:'text',style:'',id:'column52',value:'총건수',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'190',inputType:'text',style:'',id:'column51',value:'전송일다른경우',displayMode:'label',sortable:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column11',value:'성공',blockSelect:'false',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column10',value:'실패',blockSelect:'false',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column9',value:'합계',blockSelect:'false',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'성공',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'실패',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'합계',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'성공',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column41',value:'실패',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column38',value:'합계',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'',id:'requestTime',blockSelect:'false',displayMode:'label',dataType:'text',displayFormat:'####.##',calendarValueType:'yearMonth'}},{T:1,N:'w2:column',A:{textAlign:'center',removeBorderStyle:'false',width:'120',inputType:'text',id:'sucSms',blockSelect:'false',displayMode:'label',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'failSms',blockSelect:'false',displayMode:'label',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'center',removeBorderStyle:'false',width:'120',inputType:'text',id:'sumSms',blockSelect:'false',displayMode:'label',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'text',id:'sucMms',displayMode:'label',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'text',id:'failMms',displayMode:'label',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'text',id:'sumMms',displayMode:'label',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sucTalk',value:'',displayMode:'label',textAlign:'center',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'failTalk',value:'',displayMode:'label',textAlign:'center',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sumTalk',value:'',displayMode:'label',textAlign:'center',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'totalCnt',value:'',displayMode:'label',textAlign:'center',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'190',inputType:'text',style:'',id:'chkCnt',value:'',displayMode:'label',textAlign:'center',displayFormat:'#,###,###,###',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column31',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column30',value:'0',displayMode:'label',dataType:'number',expression:'sum(\'sucSms\')',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column29',value:'0',displayMode:'label',dataType:'number',expression:'sum(\'failSms\')',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column28',displayMode:'label',dataType:'number',expression:'sum(\'sumSms\')',textAlign:'center',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'expression',id:'column27',value:'0',displayMode:'label',dataType:'number',expression:'sum(\'sucMms\')',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'expression',id:'column26',value:'0',displayMode:'label',dataType:'number',expression:'sum(\'failMms\')',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'120',inputType:'expression',id:'column25',displayMode:'label',dataType:'number',expression:'sum(\'sumMms\')',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column46',value:'0',displayMode:'label',dataType:'number',expression:'sum(\'sucTalk\')',textAlign:'center',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column43',value:'0',displayMode:'label',dataType:'number',expression:'sum(\'failTalk\')',textAlign:'center',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column40',value:'',displayMode:'label',dataType:'number',expression:'sum(\'sumTalk\')',textAlign:'center',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'column34',value:'0',displayMode:'label',dataType:'number',expression:'sum(\'totalCnt\')',textAlign:'center',displayFormat:'#,###,###,###'}},{T:1,N:'w2:column',A:{width:'190',inputType:'expression',style:'',id:'column37',value:'',displayMode:'label',dataType:'number',expression:'sum(\'chkCnt\')',textAlign:'center',displayFormat:'#,###,###,###'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spanTotal3',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content3',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:105px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:60.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th '},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'구분 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'전체',chooseOptionValue:'$blank',class:'',editType:'select',id:'lc_queue_msgType',mandatory:'true',ref:'data:dma_searchQueue.msgType',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SMS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'MMS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'알림톡'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'템플릿 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'false',chooseOption:'true',chooseOptionLabel:'전체',chooseOptionValue:'$blank',class:'',editType:'select',id:'lc_queue_kTemplateCode',mandatory:'true',ref:'data:dma_searchQueue.kTemplateCode',search:'start',style:'width:280px;',submenuSize:'auto',visibleRowNum:'15'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'받는사람 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_queue_toSendNumber',class:'',ref:'data:dma_searchQueue.toSendNumber'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전송내용',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_queue_msgText',style:'width: 180px;',ref:'data:dma_searchQueue.msgText'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_trigger5',type:'button',class:'btn sch',escape:'false','ev:onclick':'scwin.f_RetrieveQueue'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'MSG_QUEUE ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section4',style:'',gridDownFn:'scwin.f_toExcel4',gridID:'gr_ListQueue',id:'udc_ListQueue',gridDownYn:'Y',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section4',class:'gvwbox '},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_ListQueue',scrollByColumn:'false',style:'',id:'gr_ListQueue',sortable:'true',visibleRowNum:'16',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption6',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column12',value:'요청일시',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'column11',value:'전송유형',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'column10',value:'상태',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column9',value:'받는사람',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'보내는사람',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column19',value:'처리결과',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column17',value:'템플릿명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'340',inputType:'text',style:'',id:'column44',value:'전송내용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column41',value:'전송일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'column51',value:'메시지가휴대폰으로전달된 시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column49',value:'결과를받은시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column45',value:'통신사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'재전송순번',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'',id:'requestTime',blockSelect:'false',displayMode:'label',displayFormat:'yyyy.MM.dd HH:mm',calendarValueType:'yearMonthDateTime',dataType:'date',textAlign:'center',ioFormat:'yyyyMMdd HH:mm:SS'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'80',inputType:'text',id:'msgType',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'stat',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{textAlign:'center',removeBorderStyle:'false',width:'100',inputType:'text',id:'dstaddr',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'text',id:'callback',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'140',inputType:'text',id:'codeDesc',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'140',inputType:'text',id:'kTemplateCode',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'340',inputType:'text',style:'',id:'text',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'',style:'',id:'sendTime',value:'',displayMode:'label',textAlign:'center',displayFormat:'yyyy.MM.dd HH:mm',dataType:'date',ioFormat:'yyyyMMdd HH:mm:SS'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'reportTime',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'tcprecvTime',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'telecom',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mseq',value:'',displayMode:'label',textAlign:'center',dataType:'number',displayFormat:'#,###,###,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'pseq',value:'',displayMode:'label',textAlign:'center'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spanTotal4',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]}]}]}]}]}]}]})