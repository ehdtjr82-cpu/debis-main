/*amd /AI/op_203_01_02p.xml 23651 5180d130e7625f4ed4a74404551a7b65e410582958a22cddb635b1796a687da7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'reqDt',name:'요청일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDtTo',name:'요청일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStn',name:'출발역',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_drvWrkResult',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'reqDt',name:'요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlCd',name:'도착역작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlNm',name:'도착역작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAppVol',name:'화차신청량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAllocVol',name:'화차배정량',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_drvWrkResultNwday',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'nwday',name:'요일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlCd',name:'도착역작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlNm',name:'도착역작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAllocVolSum',name:'화차배정량합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAllocVolAvg',name:'화차배정량평균',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_drvWrkResultNweek',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'nweek',name:'주차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlCd',name:'도착역작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlNm',name:'도착역작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAllocVolSum',name:'화차배정량합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAllocVolAvg',name:'화차배정량평균',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_drvWrkSum',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'reqDt',name:'요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlCd',name:'도착역작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlNm',name:'도착역작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAppVol',name:'화차신청량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAllocVol',name:'화차배정량',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveRailRsltStat',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveRailRsltStatCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_srchCond","key":"IN_DS1"},{"id":"ds_drvWrkResult","key":"OUT_DS1"},{"id":"ds_drvWrkResultNwday","key":"OUT_DS2"},{"id":"ds_drvWrkResultNweek","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_drvWrkResult","key":"OUT_DS1"},{"id":"ds_drvWrkResultNwday","key":"OUT_DS2"},{"id":"ds_drvWrkResultNweek","key":"OUT_DS3"}]','ev:submitdone':'scwin.sbm_retrieveRailRsltStat_submitdone','ev:submiterror':'scwin.sbm_retrieveRailRsltStat_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.bidPicId = "";
scwin.begintrainWorkPlaceCd = "";
scwin.begintrainWorkPlaceNm = "";
scwin.intYear = 0;
scwin.intMonth = 0;
scwin.monthLength = 0;
scwin.yearMonth = "";
scwin.edisndYn = "";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.bidPicId = $c.ses.getUserId();
  if (scwin.params != null && scwin.params["begintrainWorkPlaceCd"] != null) {
    scwin.begintrainWorkPlaceCd = scwin.params["begintrainWorkPlaceCd"];
    scwin.begintrainWorkPlaceNm = scwin.params["begintrainWorkPlaceNm"] || "";
  }
  let vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.intYear = parseInt(vCurDate.substring(0, 4), 10);
  scwin.intMonth = parseInt(vCurDate.substring(4, 6), 10);
  if (scwin.params != null && scwin.params["year"] != null && scwin.params["month"] != null) {
    scwin.intYear = parseInt(scwin.params["year"], 10);
    scwin.intMonth = parseInt(scwin.params["month"], 10);
  }
  scwin.monthLength = scwin.getMonthDay(scwin.intYear, scwin.intMonth);
  scwin.yearMonth = String(scwin.intYear);
  if (scwin.intMonth < 10) scwin.yearMonth += "0";
  scwin.yearMonth += scwin.intMonth;
  scwin.f_defaultValue();
  scwin.f_Retrieve();
};
scwin.onUdcCompleted = function () {
  if (scwin.begintrainWorkPlaceCd != "") {
    ed_begintrainWorkPlaceCd.setValue(scwin.begintrainWorkPlaceCd);
    txt_begintrainWorkPlaceNm.setValue(scwin.begintrainWorkPlaceNm);
  }
};
scwin.getMonthDay = function (yyyy, mm) {
  if (mm == 2) {
    return scwin.getLeapYearFebruary(yyyy);
  } else if (mm == 4 || mm == 6 || mm == 9 || mm == 11) {
    return 30;
  } else {
    return 31;
  }
};
scwin.getLeapYearFebruary = function (yyyy) {
  if (yyyy % 4 == 0 && yyyy % 100 != 0 || yyyy % 400 == 0) {
    return 29;
  } else {
    return 28;
  }
};
scwin.f_defaultValue = function () {
  let year = scwin.intYear;
  let month = scwin.intMonth;
  if (month < 10) {
    month = "0" + month;
  }
  let curDate = year.toString() + month.toString();
  let calendarDate = curDate + "01";
  shc_scheduleCalendar1.setDate(calendarDate);
};
scwin.setMonth = function (month) {
  scwin.intMonth = parseInt(month, 10);
  scwin.monthLength = scwin.getMonthDay(scwin.intYear, scwin.intMonth);
  scwin.yearMonth = String(scwin.intYear);
  if (scwin.intMonth < 10) scwin.yearMonth += "0";
  scwin.yearMonth += scwin.intMonth;
  let calDate = scwin.yearMonth + "01";
  shc_scheduleCalendar1.setDate(calDate);
  scwin.f_Retrieve();
};
scwin.setYear = function (year) {
  scwin.intYear = parseInt(year, 10);
  scwin.monthLength = scwin.getMonthDay(scwin.intYear, scwin.intMonth);
  scwin.yearMonth = String(scwin.intYear);
  if (scwin.intMonth < 10) scwin.yearMonth += "0";
  scwin.yearMonth += scwin.intMonth;
  let calDate = scwin.yearMonth + "01";
  shc_scheduleCalendar1.setDate(calDate);
  scwin.f_Retrieve();
};
scwin.setValue = async function (day) {
  let year = scwin.intYear;
  let month = scwin.intMonth;
  if (month < 10) {
    month = "0" + month;
  }
  let curDate = year.toString() + month.toString();
  let obj = {
    workDt: curDate + day,
    begintrainWorkPlaceCd: ed_begintrainWorkPlaceCd.getValue(),
    begintrainWorkPlaceNm: txt_begintrainWorkPlaceNm.getValue()
  };
  let result = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/tr_620_01_03p.xml", {
    width: 700,
    height: 550,
    modal: true,
    data: obj
  });
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  let year = scwin.intYear;
  let month = scwin.intMonth;
  if (month < 10) {
    month = "0" + month;
  }
  let curDate = year.toString() + month.toString();
  let lastMonthDay = scwin.monthLength;
  dma_srchCond.set("reqDt", curDate + "01");
  dma_srchCond.set("reqDtTo", curDate + lastMonthDay.toString());
  dma_srchCond.set("dptStn", ed_begintrainWorkPlaceCd.getValue());
  await $c.sbm.execute($p, sbm_retrieveRailRsltStat);
};
scwin.sbm_retrieveRailRsltStat_submitdone = async function (e) {
  scwin.processResult_drvWrkResult();
  scwin.processResult_drvWrkResultNwday();
  scwin.processResult_drvWrkResultNweek();
};
scwin.processResult_drvWrkResult = async function () {
  let rowCnt = ds_drvWrkResult.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, [""]);
  }
  ds_drvWrkSum.removeAll();
  let calendarEvents = [];
  let dataByDay = {};
  for (let i = 0; i < rowCnt; i++) {
    let workDt = ds_drvWrkResult.getCellData(i, "reqDt").substring(6, 8);
    let arvStnWrkPlNm = ds_drvWrkResult.getCellData(i, "arvStnWrkPlNm");
    let frtcarAppVol = ds_drvWrkResult.getCellData(i, "frtcarAppVol");
    let frtcarAllocVol = ds_drvWrkResult.getCellData(i, "frtcarAllocVol");
    let prevWorkDt = "";
    if (i > 0) {
      prevWorkDt = ds_drvWrkResult.getCellData(i - 1, "reqDt").substring(6, 8);
    }
    if (!dataByDay[workDt]) {
      dataByDay[workDt] = "";
    }
    if (workDt == prevWorkDt) {
      dataByDay[workDt] += arvStnWrkPlNm + ":" + frtcarAppVol + "/" + frtcarAllocVol;
    } else {
      dataByDay[workDt] = arvStnWrkPlNm + ":" + frtcarAppVol + "/" + frtcarAllocVol;
    }
  }
  for (let dayKey in dataByDay) {
    let fullDate = scwin.yearMonth + dayKey;
    calendarEvents.push({
      id: "evt_" + dayKey,
      title: dataByDay[dayKey],
      start: fullDate,
      end: fullDate
    });
  }

  // TODO: shc_scheduleCalendar1에 이벤트 데이터 반영 (scheduleCalendar API에 따라 구현 필요)
};
scwin.processResult_drvWrkResultNwday = function () {
  let rowCnt = ds_drvWrkResultNwday.getRowCount();
  ds_drvWrkSum.removeAll();
  let nwdayMap = {
    "2": "tbx_content212",
    "3": "tbx_content222",
    "4": "tbx_content232",
    "5": "tbx_content242",
    "6": "tbx_content252",
    "7": "tbx_content262",
    "1": "tbx_content272"
  };
  tbx_content212.setValue("");
  tbx_content222.setValue("");
  tbx_content232.setValue("");
  tbx_content242.setValue("");
  tbx_content252.setValue("");
  tbx_content262.setValue("");
  tbx_content272.setValue("");
  let dataByNwday = {};
  for (let i = 0; i < rowCnt; i++) {
    let nwday = ds_drvWrkResultNwday.getCellData(i, "nwday");
    let prevNwday = "";
    if (i > 0) {
      prevNwday = ds_drvWrkResultNwday.getCellData(i - 1, "nwday");
    }
    let arvStnWrkPlNm = ds_drvWrkResultNwday.getCellData(i, "arvStnWrkPlNm");
    let frtcarAllocVolSum = ds_drvWrkResultNwday.getCellData(i, "frtcarAllocVolSum");
    let frtcarAllocVolAvg = ds_drvWrkResultNwday.getCellData(i, "frtcarAllocVolAvg");
    if (nwday == prevNwday) {
      if (!dataByNwday[nwday]) dataByNwday[nwday] = "";
      dataByNwday[nwday] += arvStnWrkPlNm + ":" + frtcarAllocVolSum + "/" + frtcarAllocVolAvg;
    } else {
      dataByNwday[nwday] = arvStnWrkPlNm + ":" + frtcarAllocVolSum + "/" + frtcarAllocVolAvg;
    }
  }
  for (let nwday in dataByNwday) {
    let tbxId = nwdayMap[nwday];
    if (tbxId) {
      let tbxComp = $p.getComponentById(tbxId);
      if (tbxComp) {
        tbxComp.setValue(dataByNwday[nwday]);
      }
    }
  }
};
scwin.processResult_drvWrkResultNweek = function () {
  let rowCnt = ds_drvWrkResultNweek.getRowCount();
  ds_drvWrkSum.removeAll();
  let nweekMap = {
    "1": "tbx_content313",
    "2": "tbx_content323",
    "3": "tbx_content333",
    "4": "tbx_content343",
    "5": "tbx_content353",
    "6": "tbx_content363"
  };
  tbx_content313.setValue("");
  tbx_content323.setValue("");
  tbx_content333.setValue("");
  tbx_content343.setValue("");
  tbx_content353.setValue("");
  tbx_content363.setValue("");
  let dataByNweek = {};
  for (let i = 0; i < rowCnt; i++) {
    let nweek = ds_drvWrkResultNweek.getCellData(i, "nweek");
    let prevNweek = "";
    if (i > 0) {
      prevNweek = ds_drvWrkResultNweek.getCellData(i - 1, "nweek");
    }
    let arvStnWrkPlNm = ds_drvWrkResultNweek.getCellData(i, "arvStnWrkPlNm");
    let frtcarAllocVolSum = ds_drvWrkResultNweek.getCellData(i, "frtcarAllocVolSum");
    let frtcarAllocVolAvg = ds_drvWrkResultNweek.getCellData(i, "frtcarAllocVolAvg");
    if (nweek == prevNweek) {
      if (!dataByNweek[nweek]) dataByNweek[nweek] = "";
      dataByNweek[nweek] += arvStnWrkPlNm + ":" + frtcarAllocVolSum + "/" + frtcarAllocVolAvg;
    } else {
      dataByNweek[nweek] = arvStnWrkPlNm + ":" + frtcarAllocVolSum + "/" + frtcarAllocVolAvg;
    }
  }
  for (let nweek in dataByNweek) {
    let tbxId = nweekMap[nweek];
    if (tbxId) {
      let tbxComp = $p.getComponentById(tbxId);
      if (tbxComp) {
        tbxComp.setValue(dataByNweek[nweek]);
      }
    }
  }
};
scwin.sbm_retrieveRailRsltStat_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  switch (disGubun) {
    case 1:
      udc_begintrainWorkPlace.ilCommonPopUp(scwin.callbackBegintrainWorkPlace, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "역명조회,작업장코드,작업장명");
      break;
  }
};
scwin.callbackBegintrainWorkPlace = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_begintrainWorkPlaceCd, txt_begintrainWorkPlaceNm);
  if (rtnList != null) {
    scwin.edisndYn = rtnList[2];
  }
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  } else {
    scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
  }
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_begintrainWorkPlaceCd, txt_begintrainWorkPlaceNm]);
};
scwin.f_GetOfcCd = function () {
  return ed_begintrainWorkPlaceCd.getValue();
};
scwin.f_GetOfcNm = function () {
  return txt_begintrainWorkPlaceNm.getValue();
};
scwin.ed_begintrainWorkPlaceCd_onblur = function (e) {
  if (ed_begintrainWorkPlaceCd.getValue() != "") {
    scwin.f_openCommonPopUp(1, ed_begintrainWorkPlaceCd.getValue(), txt_begintrainWorkPlaceNm.getValue(), "T", "T");
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'grp_pop_contents',style:''},E:[{T:1,N:'w2:wframe',A:{id:'wfm_contentHeader',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'grp_shbox',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'grp_shbox_inner',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'grp_w2tb',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'grp_tr1',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'tbx_begintrainWorkPlace',label:'출발역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_begintrainWorkPlace',codeId:'ed_begintrainWorkPlaceCd',nameId:'txt_begintrainWorkPlaceNm',popupID:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'grp_btn_shbox',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'grp_round_box'},E:[{T:1,N:'xf:group',A:{id:'grp_calendar',class:'row-gap-8 flex-full'},E:[{T:1,N:'w2:scheduleCalendar',A:{dayMaxEvents:'true',editable:'',selectable:'',headerRightBtn:'',ioFormat:'yyyyMMdd',titleColumn:'',startColumn:'',dataList:'',style:'',id:'shc_scheduleCalendar1',lang:'',headerLeftBtn:'',class:'h-full',idColumn:'',headerTitle:''}}]},{T:1,N:'xf:group',A:{class:'row-gap-8 flex_no',id:'grp_nwday',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'grp_nwday_title_wrap',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'grp_nwday_title'},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'tbx_nwday_title',label:'철송작업계획 요일별 실적통계',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'grp_nwday_tbbox',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'grp_nwday_table',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'7'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_nwday_header',label:'요일별 실적통계',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_nwday_sun',label:'일요일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_nwday_mon',label:'월요일 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_nwday_tue',label:'화요일 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_nwday_wed',label:'수요일 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_nwday_thu',label:'목요일 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_nwday_fri',label:'금요일 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_nwday_sat',label:'토요일 ',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_content212',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_content222',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_content232',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_content242',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_content252',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_content262',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_content272',label:'text',ref:'',style:'',userData2:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8 flex_no',id:'grp_nweek',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'grp_nweek_title_wrap',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'grp_nweek_title'},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'tbx_nweek_title',label:' 철송작업계획 주별 실적통계',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'grp_nweek_tbbox',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'grp_nweek_table',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_nweek_header',label:'주별 실적통계',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_nweek_w1',label:'1째주 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_nweek_w2',label:'2째주 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_nweek_w3',label:'3째주 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_nweek_w4',label:'4째주 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_nweek_w5',label:'5째주 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_nweek_w6',label:'6째주 ',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_content313',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_content323',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_content333',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_content343',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_content353',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_content363',label:'text',ref:'',style:'',userData2:''}}]}]}]}]}]}]}]}]}]}]})