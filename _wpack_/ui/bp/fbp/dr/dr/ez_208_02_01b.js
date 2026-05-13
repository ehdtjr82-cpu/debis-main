/*amd /ui/bp/fbp/dr/dr/ez_208_02_01b.xml 34107 0ea074d402086eb9031453a5d55526a72ba936acfc6af5682268c15d3a78423a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'userId',name:'사용자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryDate1',name:'배차일자1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryDate2',name:'배차일자2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hdofficeIdx',name:'본사영업소IDX',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bhofficeIdx',name:'영업소소속지사IDX',dataType:'text'}},{T:1,N:'w2:key',A:{id:'officeIdx',name:'영업소IDX',dataType:'text'}},{T:1,N:'w2:key',A:{id:'operFlag',name:'배차구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnYn',name:'확정여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'childYn',name:'하위여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'code',name:'소속코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dailyReport',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ez202Idx',name:'운송의뢰주정보IDX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez204Idx',name:'운송의뢰상세순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez206Idx',name:'컨테이너 운송의뢰 상세순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez208Idx',name:'배차정보SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarDd',name:'배차일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ofcNm',name:'영업소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allocTyp',name:'배차타입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntInTel',name:'거래처내선번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picTelNo',name:'담당자전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onDt',name:'상차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offDt',name:'하차시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realClntNm',name:'도어지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPosNm',name:'상차지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPos',name:'상차지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onPicTel',name:'담당자전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPosNm',name:'하차지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPos',name:'하차지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicNm',name:'담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offPicTel',name:'담당자전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goods',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rotat',name:'회전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unit',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payReal',name:'실운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAdvn',name:'선불운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDvly',name:'착불운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'defrAmt',name:'지불운임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strAmtDefr',name:'보관금지불처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strAmt',name:'고정보관비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmis',name:'수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'initAmt',name:'선수금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prePayAmt',name:'선급금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'undekCls',name:'인수증구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'undekDt',name:'인수증처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'undekId',name:'인수증처리자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'undekRmk',name:'인수증메모',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez112Idx',name:'거래처정보SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ez110Idx',name:'배차차량IDX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvTel',name:'기사전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'operCmis',name:'배차수수료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'operFlCnt',name:'화물수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgReqMm',name:'청구요청월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgReqDd',name:'청구요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'defrReqMm',name:'지급요청월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'defrReqDd',name:'지급요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'openCls',name:'공개',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'operId',name:'배차자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'operCommit',name:'확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDd',name:'확정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dailyReportDcsn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'operIdx',name:'배차등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'operFlag',name:'확정처리구분(1:확정,2:취소)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자ID',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dailyReportDcsnResult',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'outMsg',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_hiddenMap'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'hdoIdx',name:'hdoIdx',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bhoIdx',name:'bhoIdx',dataType:'text'}},{T:1,N:'w2:key',A:{id:'offIdx',name:'offIdx',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/ncall.bp.fbp.dr.dr.RetrieveDailyReportCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_search',target:'data:json,{"id":"ds_dailyReport","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ProcDcsn',action:'/ncall.bp.fbp.dr.dr.RegistDailyReportDcsnCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_dailyReportDcsn","key":"IN_DS1"},{"id":"ds_dailyReportDcsnResult","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_dailyReportDcsnResult","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ProcDcsn_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.UserID = $c.data.getMemInfo($p, "userId"); //사용자ID
scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재일자

scwin.HdofficeIdx = $c.data.getMemInfo($p, "hdofficeIdx"); //사용자 hdofficeIdx
scwin.BhofficeIdx = $c.data.getMemInfo($p, "bhofficeIdx"); //사용자 bhofficeIdx
scwin.OfficeIdx = $c.data.getMemInfo($p, "officeIdx"); //사용자 officeIdx

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //조회 조건 콤보박스의 업체명을 로그인한 유저가 소속한 업체로 맞춘다.
    var code = scwin.HdofficeIdx + '/' + scwin.BhofficeIdx + '/' + scwin.OfficeIdx;
    var matchIndex = dlt_hofc.getMatchedIndex("sub", code);
    if (matchIndex.length != 0) {
      //udc_gsVl1_combo.initIndex = matchIndex[0];
      dma_search.set("code", dlt_hofc.getCellData(matchIndex[0], "code"));
    }
    scwin.f_eventRadioClick();
  }, {
    "delay": 100
  });
};

//-------------------------------------------------------------------------
// 배차일자 선택(당일,금주,금월,전월,지정)
//-------------------------------------------------------------------------
scwin.f_eventRadioClick = function () {
  var toDate = scwin.vCurDate;
  var toYear = toDate.substring(0, 4);
  var toMonth = toDate.substring(4, 6);
  var toDay = toDate.substring(6, 8);

  // Dt1 - 조회 시작일, Dt2 - 조회 종료일
  var toYearDt1, toYearDt2;
  var toMonthDt1, toMonthDt2;
  var toDayDt1, toDayDt2;
  var sDt1, sDt2;

  //toMonth 에 -1 을 안하면 +1 된 월값이 나온다.
  var NowDate = new Date(toYear, toMonth - 1, toDay);
  switch (rd_search_dt.getValue()) {
    // 당일
    case '1':
      {
        // Object 에 날짜 입력(날짜는 20080101 형식)
        ed_qryDt1.setValue(toDate);
        ed_qryDt2.setValue(toDate);
        break;
      }
    // 금주
    case '2':
      {
        var numb = NowDate.getTime();
        var TempDay = NowDate.getDay();
        var TempDate = NowDate;

        //조회 시작일
        TempDate.setTime(numb - TempDay * 1000 * 60 * 60 * 24);
        toYearDt1 = TempDate.getFullYear();
        toMonthDt1 = TempDate.getMonth() + 1; // +1 을 안하면 현재월보다 -1 된 값이 나온다.
        toDayDt1 = TempDate.getDate();
        toMonthDt1 = '0' + toMonthDt1;
        toMonthDt1 = toMonthDt1.substring(toMonthDt1.length - 2, toMonthDt1.length);
        toDayDt1 = '0' + toDayDt1;
        toDayDt1 = toDayDt1.substring(toDayDt1.length - 2, toDayDt1.length);
        // 조회 시작일
        sDt1 = toYearDt1.toString() + toMonthDt1.toString() + toDayDt1.toString();

        //조회 종료일  
        TempDate.setTime(numb + (6 - TempDay) * 1000 * 60 * 60 * 24);
        toYearDt2 = TempDate.getFullYear();
        toMonthDt2 = TempDate.getMonth() + 1; // +1 을 안하면 현재월보다 -1 된 값이 나온다.
        toDayDt2 = TempDate.getDate();
        toMonthDt2 = '0' + toMonthDt2;
        toMonthDt2 = toMonthDt2.substring(toMonthDt2.length - 2, toMonthDt2.length);
        toDayDt2 = '0' + toDayDt2;
        toDayDt2 = toDayDt2.substring(toDayDt2.length - 2, toDayDt2.length);
        // 조회 종료일
        sDt2 = toYearDt2.toString() + toMonthDt2.toString() + toDayDt2.toString();

        // 조회일자 세팅 Object 에 날짜 입력(날짜는 20080101 형식)
        ed_qryDt1.setValue(sDt1);
        ed_qryDt2.setValue(sDt2);
        break;
      }

    // 금월
    case '3':
      {
        sDt1 = $c.date.getDateAddMonthDirection($p, scwin.vCurDate, 0, "F"); //금월 시작일 '01'
        sDt2 = $c.date.getDateAddMonthDirection($p, scwin.vCurDate, 0, "L"); //금월 마지막일

        ed_qryDt1.setValue(sDt1);
        ed_qryDt2.setValue(sDt2);
        break;
      }

    // 전월
    case '4':
      {
        sDt1 = $c.date.getDateAddMonthDirection($p, scwin.vCurDate, -1, "F"); //전월 시작일 '01'
        sDt2 = $c.date.getDateAddMonthDirection($p, scwin.vCurDate, -1, "L"); //전월 마지막일

        ed_qryDt1.setValue(sDt1);
        ed_qryDt2.setValue(sDt2);
        break;
      }

    // 지정
    case '5':
      {
        break;
      }
  }
};

//-------------------------------------------------------------------------
// 배차일보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveDailyReport = function () {
  if (ed_qryDt1.getValue() > ed_qryDt2.getValue()) {
    $c.win.alert($p, "조회 기간 설정이 잘못되었습니다.");
    return;
  }
  if (rd_operFlag.getValue() == "") {
    // 배차 구분
    $c.win.alert($p, "조회할 배차 유형을 선택해주세요.");
    return;
  }

  // dma_search.set("userId", scwin.UserID); // 사용자 아이디
  // dma_search.set("hdofficeIdx", ds_hiddenMap.get("hdoIdx")); // 영업소속본사코드
  // dma_search.set("bhofficeIdx", ds_hiddenMap.get("bhoIdx")); // 영업소속지사코드
  // dma_search.set("officeIdx", ds_hiddenMap.get("offIdx")); // 영업소속코드

  var matchIndex = dlt_hofc.getMatchedIndex("code", dma_search.get("code"));
  var hdoIdx = "0.0";
  var bhoIdx = "0.0";
  var offIdx = "0.0";

  // UDC에서 ds_hiddenMap값 SET되어야 하지만 안되서 데이터리스트에서 가져오는걸로 처리
  if (matchIndex.length != 0) {
    var offIdxs = dlt_hofc.getCellData(matchIndex[0], "sub").split("/");
    hdoIdx = offIdxs[0];
    bhoIdx = offIdxs[1];
    offIdx = offIdxs[2];
    dlt_hofc.getCellData(matchIndex[0], "hdoIdx");
  }
  dma_search.set("userId", scwin.UserID); // 사용자 아이디
  dma_search.set("hdofficeIdx", hdoIdx); // 영업소속본사코드
  dma_search.set("bhofficeIdx", bhoIdx); // 영업소속지사코드
  dma_search.set("officeIdx", offIdx); // 영업소속코드

  //테스트 데이터
  // dma_search.set("userId", "pjk1030"); // 사용자 아이디
  // dma_search.set("qryDate1", "20200102");
  // dma_search.set("qryDate2", "20200102");
  // dma_search.set("hdofficeIdx", "100732"); // 영업소속본사코드
  // dma_search.set("bhofficeIdx", "0.0"); // 영업소속지사코드
  // dma_search.set("officeIdx", "0.0"); // 영업소속코드

  ds_dailyReport.setJSON([]);
  $c.sbm.execute($p, sbm_Retrieve);
};

//-------------------------------------------------------------------------
// 확정 처리
//-------------------------------------------------------------------------
scwin.f_ProcDcsn = async function () {
  // 다중 선택된 영역 get
  var focusedRows = gr_dailyReport.getAllFocusedRowIndex();
  if (focusedRows.length == 0) {
    $c.win.alert($p, "선택된 배차정보가 없습니다.");
    return;
  }
  let ret = await $c.win.confirm($p, "선택된 배차정보를 확정 처리 하시겠습니까?");
  if (ret) {
    ds_dailyReportDcsn.setJSON([]);
    ds_dailyReportDcsnResult.setJSON([]);
    for (var i = 0; i < focusedRows.length; i++) {
      var originRow = focusedRows[i];
      var newRow = ds_dailyReportDcsn.insertRow();
      ds_dailyReportDcsn.setCellData(newRow, "operIdx", ds_dailyReport.getCellData(originRow, "ez208Idx"));
      ds_dailyReportDcsn.setCellData(newRow, "operFlag", '1');
      ds_dailyReportDcsn.setCellData(newRow, "userId", scwin.UserID); // 정산처리자 아이디
    }
    $c.sbm.execute($p, sbm_ProcDcsn);
  }
};

//-------------------------------------------------------------------------
// 확정 처리 취소
//-------------------------------------------------------------------------
scwin.f_ProcDcsnCancel = async function () {
  var focusedRows = gr_dailyReport.getAllFocusedRowIndex();
  if (focusedRows.length == 0) {
    $c.win.alert($p, "선택된 배차정보가 없습니다.");
    return;
  }
  let ret = await $c.win.confirm($p, "선택된 배차정보를 확정 취소 하시겠습니까?");
  if (ret) {
    ds_dailyReportDcsn.setJSON([]);
    ds_dailyReportDcsnResult.setJSON([]);
    for (var i = 0; i < focusedRows.length; i++) {
      var originRow = focusedRows[i];
      var newRow = ds_dailyReportDcsn.insertRow();
      ds_dailyReportDcsn.setCellData(newRow, "operIdx", ds_dailyReport.getCellData(originRow, "ez208Idx"));
      ds_dailyReportDcsn.setCellData(newRow, "operFlag", '2');
      ds_dailyReportDcsn.setCellData(newRow, "userId", scwin.UserID); // 정산처리자 아이디
    }
    $c.sbm.execute($p, sbm_ProcDcsn);
  }
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_Retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows.setValue(ds_dailyReport.getRowCount());
  if (ds_dailyReport.getRowCount() == 0) {
    $c.win.alert($p, "조회된 결과가 없습니다.");
  }
};

//-------------------------------------------------------------------------
// 실적확정 submitdone
//-------------------------------------------------------------------------
scwin.sbm_ProcDcsn_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_dailyReportDcsnResult.getRowCount() > 0) {
    $c.win.alert($p, ds_dailyReportDcsnResult.getCellData(0, "outMsg"));
  }
  scwin.f_RetrieveDailyReport();
};

//-------------------------------------------------------------------------
// 그리드 oncelldblclick
//-------------------------------------------------------------------------
scwin.gr_dailyReport_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  var masterIdx = ds_dailyReport.getCellData(rowIndex, 'ez202Idx');
  var ez204Idx = ds_dailyReport.getCellData(rowIndex, 'ez204Idx');
  var ez206Idx = ds_dailyReport.getCellData(rowIndex, 'ez206Idx');
  var paramObj = null;
  if (ez204Idx) {
    paramObj = {
      idx: masterIdx + "-" + ez204Idx,
      CargoType: "cargo"
    };
  } else {
    paramObj = {
      idx: masterIdx + "-" + ez206Idx,
      CargoType: "cont"
    };
  }
  strUrl = "/ui/bp/fbp/op/ac/ez_202_01_01b.xml";
  pgmId = "ez_202_01_01b.jsp";
  $c.win.openMenu($p, "화물상세정보", strUrl, pgmId, paramObj);
};

//-------------------------------------------------------------------------
// 로그인 사용자정보 조회 콜백
//-------------------------------------------------------------------------
scwin.sbm_getUserInfo_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_commonCombo',type:'page',variableClone:'true',src:'/cm/udc/commonCombo.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ncall-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ncall nc14',id:'btn_retrieve',style:'',title:'조회하기',type:'button','ev:onclick':'scwin.f_RetrieveDailyReport'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회하기'}]}]}]},{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배차일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'rd_search_dt',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'0','ev:onviewchange':'scwin.f_eventRadioClick'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당일'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'금주'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'금월'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전월'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5'}]}]}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'qryDate1',refDataMap:'dma_search',style:'',id:'',refEdDt:'qryDate2',edFromId:'ed_qryDt1',edToId:'ed_qryDt2',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select1',A:{ref:'data:dma_search.operFlag',appearance:'full',style:'',id:'rd_operFlag',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'배차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'용차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:udc_commonCombo',A:{cond:'HOFC',refHiddenDataCollection:'ds_hiddenMap',style:'width:250px;',id:'udc_gsVl1_combo',code:'code',refDataCollection:'dma_search',parentDataListId:'dlt_hofc'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_dcsnYn',ref:'data:dma_search.dcsnYn',renderType:'radiogroup',rows:'',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8 flex-full'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:select',A:{ref:'data:dma_search.childYn',appearance:'full',style:'',id:'cbx_chidYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위영업점 배차건 포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_dailyReport',grdDownOpts:'{"fileName":"배차일보.xlsx","sheetName":"배차일보"}',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox gvwflex'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_dailyReport',style:'',id:'gr_dailyReport',class:'wq_gvw',focusMode:'both','ev:oncelldblclick':'scwin.gr_dailyReport_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'배차일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'소속점',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',value:'배차<br/>유형',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column13',value:'확정<br/>여부',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',displayMode:'label',value:'확정일자',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',displayMode:'label',value:'거래처명',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column3',displayMode:'label',value:'상차정보',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column19',displayMode:'label',value:'하차정보',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column33',displayMode:'label',value:'거래처담당자',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'490',inputType:'text',id:'column27',displayMode:'label',value:'화물정보',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'700',inputType:'text',id:'column21',displayMode:'label',value:'운임정보',colSpan:'7',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label',value:'상차담당자',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column57',value:'상차담당자전화',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'하차담당자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column53',value:'하차담당자전화',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column49',value:'요구사항',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column47',value:'용차사',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',value:'차량번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column39',value:'기사명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'기사<br/>휴대전화',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column59',value:'등록자',displayMode:'label',rowSpan:'2',hidden:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column61',value:'배차자',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column105',value:'일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column104',value:'상차지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column103',value:'지역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column102',value:'일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column101',value:'하차지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column100',value:'지역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column99',value:'전화번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column98',value:'담당자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column97',value:'담당자전화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column96',value:'실화주명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column128',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column149',value:'청구',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column140',value:'지불',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column137',value:'보관금지불처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column134',value:'보관금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column131',value:'수수료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column155',value:'선수금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column152',value:'선급금',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'alloccarDd',displayMode:'label',displayFormat:'####-##-##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ofcNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'allocTyp',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'operCommit',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcsnDd',displayMode:'label',displayFormat:'####-##-##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'onDt',displayMode:'label',displayFormat:'####-##-##'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'onPosNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'onPos',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'offDt',displayMode:'label',displayFormat:'####-##-##'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'offPosNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offPos',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntInTel',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'picNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'picTelNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'realClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'goods',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00000',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'defrAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00000',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'strAmtDefr',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'strAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00000',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cmis',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00000',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'initAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00000',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'prePayAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00000',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onPicNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'onPicTel',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'offPicNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offPicTel',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ez112Idx',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ez110Idx',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'drvNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'drvTel',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'regId',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'operId',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_cancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_ProcDcsnCancel'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확정취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_ProcDcsn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'실적확정'}]}]}]}]}]}]}]}]}]})