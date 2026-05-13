/*amd /ui/bp/lbs/yb/yb/lbs_326_01_23p.xml 26504 186589dd68d512f75d177633005fc93ce3ab03383f3ed84276089ace37eef7c9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mobileLog',saveRemovedData:'true','ev:ondataload':'scwin.ds_mobileLog_ondataload',style:'font'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'logStat',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logDate',name:'로그일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dAppVersion',name:'앱버전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'error',name:'에러메시지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dOs',name:'모바일OS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dVersion',name:'OS버전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dPhoneNm',name:'모델명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mobileGps',saveRemovedData:'true','ev:ondataload':'scwin.ds_mobileGps_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rcvDt',name:'관제시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclSts',name:'업무보고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr',name:'관제위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xpos',name:'XPOS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ypos',name:'YPOS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spd',name:'속도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insertDtm',name:'전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bGpsNormalYn',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aGpsNormalYn',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'logDtFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'logDtTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mobilePhone',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gpsDptDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gpsArvDt',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mobileInfo',saveRemovedData:'true','ev:ondataload':'scwin.ds_mobileInfo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'picNm',name:'기사성',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dOs',name:'모바일OS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'isIgnoringBatteryOptimizations',name:'배터리최적화예외여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dVersion',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'notDataSaverMode',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mobilePhone',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dPhoneNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gpsBackground',name:'name9',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.bp.lbs.yb.yb.RetrieveMobileLogCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_mobileInfo","key":"OUT_DS1"},{"id":"ds_mobileLog","key":"OUT_DS2"},{"id":"ds_mobileGps","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_mobileInfo","key":"OUT_DS1"},{"id":"ds_mobileLog","key":"OUT_DS2"},{"id":"ds_mobileGps","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
// 서버 날짜값 선언
scwin.vCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

// 호출화면에서 전달받는 파라미터
scwin.param = "";
scwin.picNm = "";
scwin.pdaNo = "";
scwin.logDtFrom = "";
scwin.logDtTo = "";

// hidden 컴포넌트 선언
scwin.txt_gpsDptDt = "";
scwin.txt_gpsArvDt = "";

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.param = $c.data.getParameter($p);
  scwin.picNm = scwin.param.PIC_NM == null ? "" : scwin.param.PIC_NM;
  scwin.pdaNo = scwin.param.PDA_NO == null ? "" : scwin.param.PDA_NO;
  scwin.logDtFrom = scwin.param.DT_FROM == null ? "" : scwin.param.DT_FROM;
  scwin.logDtTo = scwin.param.DT_TO == null ? "" : scwin.param.DT_TO;
};

//-------------------------------------------------------------------------
// 날짜 기본 세팅
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  let from = scwin.logDtFrom;
  let to = scwin.logDtTo;
  udc_logDt.setInitDate(from, to);
  let padNo = scwin.pdaNo;
  if (padNo != undefined && padNo != null && padNo != "") {
    ed_mobilePhone.setValue(scwin.pdaNo);
    scwin.btn_retrieve_onClick();
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = async function (e) {
  if (ica_logDtFrom.getValue() == "" || ica_logDtTo.getValue() == "") {
    $c.win.alert($p, "조회일자는 필수 입력 항목입니다.");
    return;
  }
  if (!scwin.f_DifferBetweenDate2(ica_logDtFrom.getValue(), ica_logDtTo.getValue())) {
    $c.win.alert($p, "시작일자가 종료일자 이전이어야 합니다.");
    return;
  }
  if (!scwin.f_DifferBetweenDate(ica_logDtFrom.getValue(), ica_logDtTo.getValue())) {
    $c.win.alert($p, "최대 검색기간은 1달입니다.");
    return;
  }
  if (ed_mobilePhone.getValue() == "") {
    $c.win.alert($p, "폰번호는 필수 입력 항목입니다.");
    return;
  }
  scwin.txt_gpsDptDt = ica_logDtFrom.getValue() + "000000";
  scwin.txt_gpsArvDt = ica_logDtTo.getValue() + "235959";
  dma_condition.set("logDtFrom", ica_logDtFrom.getValue());
  dma_condition.set("logDtTo", ica_logDtTo.getValue());
  dma_condition.set("mobilePhone", ed_mobilePhone.getValue());
  dma_condition.set("gpsDptDt", scwin.txt_gpsDptDt);
  dma_condition.set("gpsArvDt", scwin.txt_gpsArvDt);

  //         ds_mobileGps.ClearData();      //재조회시 Detail Data Clear
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 날짜체크
//-------------------------------------------------------------------------
scwin.f_DifferBetweenDate = function (sDateStr, eDateStr, dateFormat, row) {
  if ($c.date.diffDate($p, sDateStr, eDateStr) > 31) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 날짜체크
//-------------------------------------------------------------------------
scwin.f_DifferBetweenDate2 = function (sDateStr, eDateStr, dateFormat, row) {
  sDateStr = sDateStr.trim();
  eDateStr = eDateStr.trim();

  // 종료일자가 시작일자 이후인지 확인
  if (sDateStr > eDateStr) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 모바일 Log 데이터 로드 완료시
//-------------------------------------------------------------------------
scwin.ds_mobileLog_ondataload = function () {
  let rowCnt = ds_mobileLog.getTotalRow();
  if (rowCnt < 1) {
    spa_totalRows.setValue(0);
    $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  for (i = 0; i < rowCnt; i++) {
    if (ds_mobileLog.getCellData(i, "logStat") == "100") {
      // 상태가 로그인이면 글씨체 bold
      gr_results.setCellStyle(i, "logStat", "font-weight", "bold");
      // gr_results.set
    } else if (ds_mobileLog.getCellData(i, "logStat") == "103") {
      // 상태 Error면 글씨 빨간색
      gr_results.setCellColor(i, "logStat", "red");
    } else if (ds_mobileLog.getCellData(i, "logStat") == "105") {
      // 상태 운행종료면 글씨 빨간색
      gr_results.setCellColor(i, "logStat", "blue");
    }
  }
  spa_totalRows.setValue(rowCnt);
};

//-------------------------------------------------------------------------
// 관제내역 데이터 로드 완료시
//-------------------------------------------------------------------------
scwin.ds_mobileGps_ondataload = function () {
  let rowCnt = ds_mobileGps.getTotalRow();
  if (rowCnt < 1) {
    spa_totalRowsGps.setValue(0);
    $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  for (i = 0; i < ds_mobileGps.getTotalRow(); i++) {
    if (ds_mobileGps.getCellData(i, "bGpsNormalYn") == "N") {
      gr_reuslts_detail.setCellStyle(i, "rcvDt", "font-weight", "bold");
    }
    if (ds_mobileGps.getCellData(i, "aGpsNormalYn") == "N") {
      gr_reuslts_detail.setCellColor(i, "xpos", "red");
      gr_reuslts_detail.setCellColor(i, "ypos", "red");
    }
  }
  spa_totalRowsGps.setValue(rowCnt);
};

//-------------------------------------------------------------------------
// 모바일 정보 데이터 로드 완료시
//-------------------------------------------------------------------------
scwin.ds_mobileInfo_ondataload = function () {
  let rowCnt = ds_mobileInfo.getTotalRow();
  if (scwin.picNm != "undefined") {
    ed_picNm.setValue(scwin.picNm);
  } else {
    ed_picNm.setValue("");
  }
  ed_dOs.setValue(ds_mobileInfo.getCellData(0, "dOs")); // 모바일OS

  ed_isIgnoringBatteryOptimizations.setValue(ds_mobileInfo.getCellData(0, "isIgnoringBatteryOptimizations")); // 배터리 최적화 예외 여부
  if (ds_mobileInfo.getCellData(0, "isIgnoringBatteryOptimizations") == "N") {
    ed_isIgnoringBatteryOptimizations.setStyle("color", "red");
  }
  ed_vehclNo.setValue(ds_mobileInfo.getCellData(0, "vehclNo")); // 차량번호
  ed_dVersion.setValue(ds_mobileInfo.getCellData(0, "dVersion")); // OS버전
  ed_notDataSaverMode.setValue(ds_mobileInfo.getCellData(0, "notDataSaverMode")); // 데이터 절약 모드 끔 여부
  if (ds_mobileInfo.getCellData(0, "notDataSaverMode") == "N") {
    ed_notDataSaverMode.setStyle("color", "red");
  }
  ed_ed_mobilePhone.setValue(ds_mobileInfo.getCellData(0, "mobilePhone")); // 기사연락처
  ed_dPhoneNm.setValue(ds_mobileInfo.getCellData(0, "dPhoneNm")); // 모델명
  ed_gpsBackground.setValue(ds_mobileInfo.getCellData(0, "gpsBackground")); // 백그라운드 허용 여부

  if (ds_mobileInfo.getCellData(0, "gpsBackground") == "N") {
    ed_gpsBackground.setStyle("color", "red");
  }
};

//-------------------------------------------------------------------------
// 그리드 로그 상태 decode
//-------------------------------------------------------------------------
scwin.displayFm = function (data) {
  return $c.gus.decode($p, data, "100", "로그인", "103", "에러", "3", "상차보고", "4", "하차보고", "C", "상차취소", "104", "Push", "105", "운행종료", "");
};

//-------------------------------------------------------------------------
// 그리드 상세 decode
//-------------------------------------------------------------------------
scwin.displayFm2 = function (data) {
  return $c.gus.decode($p, data, "1", "대기", "3", "상차보고", "4", "운행중", "5", "하차보고");
};

//-------------------------------------------------------------------------
// 모바일 이력 EXCEL
//-------------------------------------------------------------------------
scwin.gr_result_RunExcel = async function () {
  let options = {
    fileName: "모바일이력.xlsx",
    sheetName: "모바일이력"
  };
  let grdObj = gr_results;
  let infoArr = {};
  if (ds_mobileLog.getTotalRow() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  }
};

//-------------------------------------------------------------------------
// 상세 EXCEL
//-------------------------------------------------------------------------
scwin.gr_detail_RunExcel = async function () {
  let options = {
    fileName: "관제내역.xlsx",
    sheetName: "관제내역"
  };
  let grdObj = gr_reuslts_detail;
  let infoArr = {};
  if (ds_mobileLog.getTotalRow() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조회일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_logDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_logDtFrom',edToId:'ica_logDtTo',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'폰번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_mobilePhone',placeholder:'',style:'',maxlength:'13'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8 flex_no'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'모바일정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:170px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:170px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:170px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'기사성함',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'ed_picNm',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'모바일OS',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_dOs',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'배터리 최적화 예외 여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_isIgnoringBatteryOptimizations',label:'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'차량번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'ed_vehclNo',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'OS버전',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_dVersion',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'데이터 절약 모드 끔 여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_notDataSaverMode',label:'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'기사연락처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_ed_mobilePhone',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'모델명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_dPhoneNm',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'백그라운드 허용 여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_gpsBackground',label:'',ref:'',style:'',userData2:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'모바일Log 조회 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_results',btnPlusYn:'Y',gridDownFn:'scwin.gr_result_RunExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_mobileLog',id:'gr_results',style:'',visibleRowNumFix:'true',columnMove:'true',resize:'true',readOnly:'true',visibleRowNum:'5'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'상태',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'로그일시',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'앱버전',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'작업지시번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'차량번호',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'에러메시지',width:'350',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'모바일OS',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'OS버전',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'모델명',width:'100',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'logStat',inputType:'text',width:'100',displayFormatter:'scwin.displayFm',style:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'logDate',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dAppVersion',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIndictNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'error',inputType:'text',width:'350',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dOs',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dVersion',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dPhoneNm',inputType:'text',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'관제내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_reuslts_detail',btnPlusYn:'Y',gridDownFn:'scwin.gr_detail_RunExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_mobileGps',id:'gr_reuslts_detail',style:'',visibleRowNum:'5',visibleRowNumFix:'true',columnMove:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'관제시간',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'업무보고',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'관제위치',width:'200',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'XPOS',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'YPOS',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'속도',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'작업지시번호',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'전송시간',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'rcvDt',inputType:'text',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclSts',inputType:'text',width:'100',displayFormatter:'scwin.displayFm2',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addr',inputType:'text',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'xpos',inputType:'text',width:'100',displayFormat:'###,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ypos',inputType:'text',width:'100',displayFormat:'###,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spd',inputType:'text',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transWrkIndictNo',inputType:'text',width:'120',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'insertDtm',inputType:'text',width:'150'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRowsGps',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})