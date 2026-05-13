/*amd /ui/ds/op/wrkplan/railroadwrkplan/op_203_01_02p.xml 33676 ead62aaf189268058b66a7574ddb4cbfec77f21ff44e47b08573c555fd861911 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_drvWrkResult',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'reqDt',name:'reqDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlNm',name:'arvStnWrkPlNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAppVol',name:'frtcarAppVol',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAllocVol',name:'frtcarAllocVol',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_drvWrkSum',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'reqDt',name:'reqDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlCd',name:'arvStnWrkPlCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlNm',name:'arvStnWrkPlNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAppVol',name:'frtcarAppVol',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAllocVol',name:'frtcarAllocVol',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'reqDt',name:'reqDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDtTo',name:'reqDtTo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStn',name:'dptStn',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_drvWrkResultNwday',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'nwday',name:'nwday',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlNm',name:'arvStnWrkPlNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAllocVolSum',name:'frtcarAllocVolSum',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAllocVolAvg',name:'frtcarAllocVolAvg',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_drvWrkResultNweek',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'nweek',name:'nweek',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlNm',name:'arvStnWrkPlNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAllocVolSum',name:'frtcarAllocVolSum',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarAllocVolAvg',name:'frtcarAllocVolAvg',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_calendarEvents',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'evtId',name:'evtId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evtTitle',name:'evtTitle',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evtStart',name:'evtStart',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evtEnd',name:'evtEnd',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveRailRsltStat',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveRailRsltStatCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_srchCond","key":"IN_DS1"},{"id":"ds_drvWrkResult","key":"OUT_DS1"},{"id":"ds_drvWrkResultNwday","key":"OUT_DS2"},{"id":"ds_drvWrkResultNweek","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_drvWrkResult","key":"OUT_DS1"},{"id":"ds_drvWrkResultNwday","key":"OUT_DS2"},{"id":"ds_drvWrkResultNweek","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveRailRsltStat_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.bidPicId = "";
scwin.begintrainWorkPlaceCd = "";
scwin.begintrainWorkPlaceNm = "";
scwin.intYear = 0;
scwin.intMonth = 0;
scwin.monthLength = 0;
scwin.yearMonth = "";
scwin.edisndYn = "";
scwin.showToolTip = function (tipOfcNm, tipWorkDt, tipExclDrvCnt, tipGnrlDrvCnt, tipExclDrvAddCnt, tipGnrlDrvAddCnt, tipRmk) {
  var tooltip = document.all.schViewer;
  followMouse();
  var buff = "<table border=0 cellpadding=2 cellspacing=1 bgcolor=#717171 height=100 width=210>";
  buff = buff + "<tr><td class=text_left valign=middle height=20 bgcolor=#CCCCCC " + tipStyle + ">";
  buff = buff + "&nbsp;<b>" + tipOfcNm + "</b>&nbsp;(" + tipWorkDt + ")</td></tr>";
  buff = buff + "<tr><td align=left height=80 bgcolor=white>";
  buff = buff + "<table border=0 cellpadding=3 cellspacing=0>";
  if (tipExclDrvCnt != "") {
    buff = buff + "<tr>";
    buff = buff + "<td class=text_left " + tipStyle + ">&nbsp;우등인원 : " + tipExclDrvCnt + "명</td>";
    buff = buff + "</tr>";
  }
  if (tipGnrlDrvCnt != "") {
    buff = buff + "<tr>";
    buff = buff + "<td class=text_left " + tipStyle + ">&nbsp;고속인원 : " + tipGnrlDrvCnt + "명</td>";
    buff = buff + "</tr>";
  }
  if (tipExclDrvAddCnt != "") {
    buff = buff + "<tr>";
    buff = buff + "<td class=text_left " + tipStyle + ">&nbsp;우등추가 : " + tipExclDrvAddCnt + "명</td>";
    buff = buff + "</tr>";
  }
  if (tipGnrlDrvAddCnt != "") {
    buff = buff + "<tr>";
    buff = buff + "<td class=text_left " + tipStyle + ">&nbsp;고속추가 : " + tipGnrlDrvAddCnt + "명</td>";
    buff = buff + "</tr>";
  }
  if (tipRmk != "") {
    buff = buff + "<tr>";
    buff = buff + "<td class=text_left " + tipStyle + ">&nbsp;산출기준 : " + tipRmk + "</td>";
    buff = buff + "</tr>";
  }
  buff = buff + "</table>";
  buff = buff + "</td></tr></table>";
  tooltip.innerHTML = buff;
  tooltip.style.visibility = "visible";
};
scwin.hideSchedule = function () {
  var tooltip = document.all.schViewer;
  tooltip.style.visibility = "hidden";
  tooltip.innerHTML = "";
};
scwin.followMouse = function () {
  var tooltip = document.all.schViewer;
  tooltip.style.top = document.body.scrollTop + event.clientY + 1;
  if (event.clientX > 530) {
    tooltip.style.left = document.body.scrollLeft + event.clientX - 265;
  } else {
    tooltip.style.left = document.body.scrollLeft + event.clientX + 15;
  }
};
scwin.onpageload = function () {
  let params = $c.data.getParameter($p);
  scwin.begintrainWorkPlaceCd = params.begintrainWorkPlaceCd ?? "";
  scwin.begintrainWorkPlaceNm = params.begintrainWorkPlaceNm ?? "";
};
scwin.onUdcCompleted = function () {
  if (scwin.begintrainWorkPlaceCd != "") {
    ed_placeCd.setValue(scwin.begintrainWorkPlaceCd);
    ed_placeNm.setValue(scwin.begintrainWorkPlaceNm);
  }
  scwin.f_defaultValue();
  setTimeout(scwin.bindYearNavButtons, 500);
};
scwin.bindYearNavButtons = function () {
  // FullCalendar 인스턴스가 준비될 때까지 재시도
  if (!shc_scheduleCalendar1.calendar) {
    setTimeout(scwin.bindYearNavButtons, 300);
    return;
  }
  var toolbar = shc_scheduleCalendar1.render.querySelector('.fc-header-toolbar');
  if (!toolbar) {
    setTimeout(scwin.bindYearNavButtons, 300);
    return;
  }
  if (toolbar._yearNavBound) return;
  toolbar._yearNavBound = true;
  toolbar.addEventListener('click', function (e) {
    var btn = e.target;
    while (btn && btn !== toolbar) {
      if (btn.tagName === 'BUTTON' && (btn.classList.contains('fc-prevYear-button') || btn.classList.contains('fc-nextYear-button'))) {
        setTimeout(function () {
          // WebSquare 내부 소스와 동일한 방식으로 날짜 추출
          var dateObj = shc_scheduleCalendar1.calendar.getDate();
          var y = WebSquare.text.fillZero(dateObj.getUTCFullYear() + "", 4);
          var m = WebSquare.text.fillZero(dateObj.getUTCMonth() + 1 + "", 2);
          var d = WebSquare.text.fillZero(dateObj.getUTCDate() + "", 2);
          scwin.shc_scheduleCalendar1_onheaderbtnclick({
            date: y + m + d
          });
        }, 100);
        break;
      }
      btn = btn.parentElement;
    }
  });
};
scwin.f_defaultValue = function () {
  let vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재 날짜 반환
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
  let year = scwin.intYear;
  let month = scwin.intMonth;
  if (month < 10) {
    month = "0" + month;
  }
  let curDate = year.toString() + month.toString();
  let calendarDate = curDate + "01";
  shc_scheduleCalendar1.gotoDate(calendarDate);
  scwin.weekRange = null;
  if (scwin.begintrainWorkPlaceCd !== "") {
    scwin.f_Retrieve();
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
scwin.setMonth = function (month) {
  scwin.intMonth = parseInt(month, 10);
  scwin.monthLength = scwin.getMonthDay(scwin.intYear, scwin.intMonth);
  scwin.yearMonth = String(scwin.intYear);
  if (scwin.intMonth < 10) scwin.yearMonth += "0";
  scwin.yearMonth += scwin.intMonth;
  let calDate = scwin.yearMonth + "01";
  shc_scheduleCalendar1.setDate(calDate);
  scwin.weekRange = null;
  scwin.f_Retrieve();
};
scwin.setYear = function (year) {
  scwin.intYear = parseInt(year, 10);
  scwin.monthLength = scwin.getMonthDay(scwin.intYear, scwin.intMonth);
  scwin.yearMonth = String(scwin.intYear);
  if (scwin.intMonth < 10) scwin.yearMonth += "0";
  scwin.yearMonth += scwin.intMonth;
  scwin.weekRange = null;
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
    begintrainWorkPlaceCd: ed_placeCd.getValue(),
    begintrainWorkPlaceNm: ed_placeNm.getValue()
  };
  let result = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/tr_620_01_03p.xml", {
    width: 700,
    height: 550,
    modal: true,
    data: obj
  });
  scwin.f_Retrieve();
};

// 달력 변경 이벤트 발생 시 >> 재조회
scwin.shc_scheduleCalendar1_onheaderbtnclick = function (buttonInfo) {
  ds_drvWrkResult.removeAll();
  ds_drvWrkResultNweek.removeAll();
  ds_drvWrkResultNwday.removeAll();

  // 휴일표시
  $c.win.setHolidayS($p, buttonInfo.date);
  if (scwin.begintrainWorkPlaceCd != "") {
    // 달력 변경 이벤트로 재조회 시에는 이전에 넘어온 데이터로만 조회
    ed_placeCd.setValue(scwin.begintrainWorkPlaceCd);
    ed_placeNm.setValue(scwin.begintrainWorkPlaceNm);
  }
  let date = buttonInfo.date; // yyyyMMdd 형식
  scwin.intYear = parseInt(date.substring(0, 4), 10);
  scwin.intMonth = parseInt(date.substring(4, 6), 10);
  scwin.monthLength = scwin.getMonthDay(scwin.intYear, scwin.intMonth);
  scwin.yearMonth = date.substring(0, 6);

  // 주단위 조회: buttonInfo.date 기준으로 해당 주(일~토) 범위 계산
  if (buttonInfo.viewType === "dayGridWeek") {
    let y = parseInt(date.substring(0, 4), 10);
    let m = parseInt(date.substring(4, 6), 10) - 1; // 0-based month
    let d = parseInt(date.substring(6, 8), 10);
    let baseDate = new Date(Date.UTC(y, m, d));
    let dow = baseDate.getUTCDay(); // 0=일, 6=토

    let weekStart = new Date(Date.UTC(y, m, d - dow));
    let weekEnd = new Date(Date.UTC(y, m, d - dow + 6));
    let pad = function (n) {
      return String(n).padStart(2, "0");
    };
    let fmtDate = function (dt) {
      return dt.getUTCFullYear() + pad(dt.getUTCMonth() + 1) + pad(dt.getUTCDate());
    };
    scwin.weekRange = {
      start: fmtDate(weekStart),
      end: fmtDate(weekEnd)
    };
  } else {
    scwin.weekRange = null;
  }
  scwin.f_Retrieve();
};

// 조회
scwin.f_Retrieve = async function () {
  let reqDt, reqDtTo;
  if (scwin.weekRange) {
    // 주단위 조회: 해당 주 시작일~종료일
    reqDt = scwin.weekRange.start;
    reqDtTo = scwin.weekRange.end;
  } else {
    // 월단위 조회: 해당 월 1일~말일
    let year = scwin.intYear;
    let month = scwin.intMonth;
    if (month < 10) {
      month = "0" + month;
    }
    let curDate = year.toString() + month.toString();
    reqDt = curDate + "01";
    reqDtTo = curDate + scwin.monthLength.toString();
  }
  dma_srchCond.set("reqDt", reqDt);
  dma_srchCond.set("reqDtTo", reqDtTo);
  dma_srchCond.set("dptStn", ed_placeCd.getValue());
  $c.sbm.execute($p, sbm_retrieveRailRsltStat);

  //ds_drvWrkResult.DataId = "/ds.op.wrkplan.railroadwrkplan.RetrieveRailRsltStatCMD.do"+condi;
  //ds_drvWrkResult.Reset();
};
scwin.sbm_retrieveRailRsltStat_submitdone = function (e) {
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
  let evtRows = [];
  for (let i = 0; i < rowCnt; i++) {
    let arvStnWrkPlNm = ds_drvWrkResult.getCellData(i, "arvStnWrkPlNm");
    let frtcarAppVol = ds_drvWrkResult.getCellData(i, "frtcarAppVol");
    let frtcarAllocVol = ds_drvWrkResult.getCellData(i, "frtcarAllocVol");
    // reqDt는 yyyyMMdd 형식이므로 직접 사용 (주단위 조회 시 월이 달라도 정확한 날짜 사용)
    let fullDate = ds_drvWrkResult.getCellData(i, "reqDt");
    evtRows.push({
      evtId: "evt_" + i,
      evtTitle: arvStnWrkPlNm + ":" + frtcarAppVol + "/" + frtcarAllocVol,
      evtStart: fullDate,
      evtEnd: fullDate
    });
  }
  ds_calendarEvents.removeAll();
  ds_calendarEvents.setJSON(evtRows);
  //$c.data.convertJsonToDataList(evtRows, ds_calendarEvents);
};
scwin.processResult_drvWrkResultNwday = function () {
  let rowCnt = ds_drvWrkResultNwday.getRowCount();
  ds_drvWrkSum.removeAll();
  let nwdayMap = {
    "1": "tbx_content212",
    "2": "tbx_content222",
    "3": "tbx_content232",
    "4": "tbx_content242",
    "5": "tbx_content252",
    "6": "tbx_content262",
    "7": "tbx_content272"
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
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  switch (disGubun) {
    case "1":
      // 출발역 역명 팝업
      udc_begintrainWorkPlace.setSelectId('retrieveTrainWorkPlace'); // XML상의 SELECT ID
      udc_begintrainWorkPlace.cfCommonPopUp(scwin.udc_begintrainWorkPlace_callbackFunc, pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "역명조회,작업장코드,작업장명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.udc_begintrainWorkPlace_callbackFunc = function (rtnList) {
  //도착지코드 도착지명
  $c.gus.cfSetReturnValue($p, rtnList, ed_placeCd, ed_placeNm);
  if (rtnList != null) {
    edisndYn = rtnList[2];
  }
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_placeCd, ed_placeNm]);
};
scwin.f_GetOfcCd = function () {
  return ed_ofcCd.Text;
};
scwin.f_GetOfcNm = function () {
  return txt_ofcNm.value;
};
scwin.ds_drvWrkResult_OnLoadCompleted = function (rowCnt) {
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_ERR_003, [""]);
  }

  //기존 데이터를 모두 지운다..
  ds_drvWrkSum.removeAll();
  var k = 1;
  var railRsltStat = "";
  for (var j = 1; j <= scwin.monthLength; j++) {
    var name = "content";
    if (j < 10) name += "0" + j + "1";else name += j + "1";
    eval(name).innerHTML = "&nbsp;";
  }
  for (var i = 1; i <= ds_drvWrkResult.getRowCount(); i++) {
    var workDt = ds_drvWrkResult.getCellData(i, "reqDt").substring(6, 8);
    var workDtOrg = ds_drvWrkResult.getCellData(i - 1, "reqDt").substring(6, 8);
    var name = "content";
    name += workDt + "1";
    if (workDt == workDtOrg) {
      railRsltStat += ds_drvWrkResult.getCellData(i, "arvStnWrkPlNm") + ":" + ds_drvWrkResult.getCellData(i, "frtcarAppVol") + "/" + ds_drvWrkResult.getCellData(i, "frtcarAllocVol");
    } else {
      railRsltStat = ds_drvWrkResult.getCellData(i, "arvStnWrkPlNm") + ":" + ds_drvWrkResult.getCellData(i, "frtcarAppVol") + "/" + ds_drvWrkResult.getCellData(i, "frtcarAllocVol");
    }
    eval(name).innerHTML = railRsltStat;
  }
};
scwin.ds_drvWrkResultNwday_OnLoadCompleted = function (rowCnt) {
  if (rowCnt == 0) {
    //cfAlertMsg(MSG_CM_ERR_003,[""]);
  }

  //기존 데이터를 모두 지운다..
  ds_drvWrkSum.removeAll();
  var k = 1;
  var railRsltStat2 = "";
  for (var i = 1; i <= ds_drvWrkResultNwday.getRowCount(); i++) {
    var nwday = ds_drvWrkResultNwday.getCellData(i, "nwday");
    var nwdayOrg = ds_drvWrkResultNwday.getCellData(i - 1, "nwday");
    var name = "content2";
    name += nwday + "2";
    if (nwday == nwdayOrg) {
      railRsltStat2 += ds_drvWrkResultNwday.getCellData(i, "arvStnWrkPlNm") + ":" + ds_drvWrkResultNwday.getCellData(i, "frtcarAllocVolSum") + "/" + ds_drvWrkResultNwday.getCellData(i, "frtcarAllocVolAvg");
    } else {
      railRsltStat2 = ds_drvWrkResultNwday.getCellData(i, "arvStnWrkPlNm") + ":" + ds_drvWrkResultNwday.getCellData(i, "frtcarAllocVolSum") + "/" + ds_drvWrkResultNwday.getCellData(i, "frtcarAllocVolAvg");
    }
    eval(name).innerHTML = railRsltStat2;
  }
};
scwin.ds_drvWrkResultNweek_OnLoadCompleted = function (rowCnt) {
  if (rowCnt == 0) {
    //cfAlertMsg(MSG_CM_ERR_003,[""]);
  }

  //기존 데이터를 모두 지운다..
  ds_drvWrkSum.removeAll();
  var k = 1;
  var railRsltStat3 = "";
  for (var i = 1; i <= ds_drvWrkResultNweek.getRowCount(); i++) {
    var nweek = ds_drvWrkResultNweek.getCellData(i, "nweek");
    var nweekOrg = ds_drvWrkResultNweek.getCellData(i - 1, "nweek");
    var name = "content3";
    name += nweek + "3";
    if (nweek == nweekOrg) {
      railRsltStat3 += ds_drvWrkResultNweek.getCellData(i, "arvStnWrkPlNm") + ":" + ds_drvWrkResultNweek.getCellData(i, "frtcarAllocVolSum") + "/" + ds_drvWrkResultNweek.getCellData(i, "frtcarAllocVolAvg");
    } else {
      railRsltStat3 = ds_drvWrkResultNweek.getCellData(i, "arvStnWrkPlNm") + ":" + ds_drvWrkResultNweek.getCellData(i, "frtcarAllocVolSum") + "/" + ds_drvWrkResultNweek.getCellData(i, "frtcarAllocVolAvg");
    }
    eval(name).innerHTML = railRsltStat3;
  }
};

// 출발역 코드 UDC 이벤트
scwin.udc_begintrainWorkPlace_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_placeCd, ed_placeNm, "1");
};
scwin.udc_begintrainWorkPlace_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_placeNm, ed_placeCd, "1", false);
};
scwin.udc_begintrainWorkPlace_onclickEvent = function (e) {
  scwin.f_openCommonPopUp("1", ed_placeCd.getValue(), ed_placeNm.getValue(), "F", "T");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tb_cnstSrchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_begintrainWorkPlace',nameId:'ed_placeNm',codeId:'ed_placeCd','ev:onblurNameEvent':'scwin.udc_begintrainWorkPlace_onblurNameEvent','ev:onclickEvent':'scwin.udc_begintrainWorkPlace_onclickEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onblurCodeEvent':'scwin.udc_begintrainWorkPlace_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8 flex-full'},E:[{T:1,N:'w2:scheduleCalendar',A:{dayMaxEvents:'true',editable:'',selectable:'',headerRightBtn:'true',ioFormat:'yyyyMMdd',titleColumn:'evtTitle',startColumn:'evtStart',endColumn:'evtEnd',idColumn:'evtId',dataList:'data:ds_calendarEvents',style:'min-height: 600px;',id:'shc_scheduleCalendar1',lang:'',headerLeftBtn:'true',class:'',headerTitle:'true',contentHeight:'auto',version:'6.1.11','ev:onheaderbtnclick':'scwin.shc_scheduleCalendar1_onheaderbtnclick',headerToolbarStart:'prevYear,prev,next,nextYear'}}]},{T:1,N:'xf:group',A:{class:'row-gap-8 flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'철송작업계획 요일별 실적통계',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'detailSearchRslts',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'7'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요일별 실적통계',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일요일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'월요일 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화요일 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수요일 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'목요일 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'금요일 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'토요일 ',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td',id:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'tbx_content212',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'tbx_content222',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'tbx_content232',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'tbx_content242',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'tbx_content252',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'tbx_content262',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'tbx_content272',label:'',ref:'',style:'',userData2:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8 flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 철송작업계획 주별 실적통계',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'detailSearchRslts2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'6'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주별 실적통계',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'1째주 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'2째주 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'3째주 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'4째주 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'5째주 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'6째주 ',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'tbx_content313',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'tbx_content323',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'tbx_content333',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'tbx_content343',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'tbx_content353',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-blue',id:'tbx_content363',label:'',ref:'',style:'',userData2:''}}]}]}]}]}]}]}]}]}]}]})