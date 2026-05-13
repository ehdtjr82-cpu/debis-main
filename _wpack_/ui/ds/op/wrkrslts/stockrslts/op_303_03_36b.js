/*amd /ui/ds/op/wrkrslts/stockrslts/op_303_03_36b.xml 35808 0dc1bc9a694cd7ef1deaa678708c8d74c8dea4e867a0a6ea151f9eec6d995b2a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stockSts',name:'재고상태',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveWorkPlaceEachGoods',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockClntNo',name:'재고거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockClntNm',name:'재고거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockStat',name:'재고상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'재고',dataType:'number'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'재고중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'사업장코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_chgEachStock',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stockStat',name:'재고상태',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'stockClntNo',name:'재고거래처번호',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'재고',dataType:'Integer',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'재고중량',dataType:'Integer',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'사업장코드',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'moveClnt',name:'이동거래처',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'moveClntQty',name:'이동거래처수량',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'moveClntWt',name:'이동거래처중량',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'chgSts',name:'변경상태',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'chgStsQty',name:'변경수량',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'chgStsWt',name:'변경상태중량',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'badOutbrDt',name:'불량발생일자',dataType:'text',defaultValue:'',length:'255'}},{T:1,N:'w2:column',A:{id:'badRsn',name:'불량사유',dataType:'text',defaultValue:'',length:'255'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.stockrslts.RetrieveYardEachStockPresentBoralConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_retrieveWorkPlaceEachGoods","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieveWorkPlaceEachGoods","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.stockrslts.SaveYardEachStockPresentBoralCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_chgEachStock","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자구분코드 ( 01:그룹사, 02:협력업체(운송), 03:선사, 04:화주, 05:자가운송업체, 06:렌터카(고객), 07:정비(고객) )
scwin.loginClntNo = $c.data.getMemInfo($p, "clntNo"); // 거래처번호
scwin.loginClntNm = $c.data.getMemInfo($p, "clntNm"); // 거래처명
scwin.upperClntNo = $c.data.getMemInfo($p, "upperClntNo"); // 상위거래처번호
scwin.userId = $c.data.getMemInfo($p, "userId");
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재일자

//-------------------------------------------------------------------------
// 페이지로드
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  ds_chgEachStock.insertRow();
  ds_chgEachStock.setRowPosition(0);
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //소스
    ed_con_wrkPlCd.focus();

    //테스트 데이터
    // ed_con_wrkPlCd.setValue("1W04");
    //ed_con_commCd.setValue("40002665");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if (ed_con_wrkPlCd.getValue() == "") {
    $c.gus.cfAlertMsg($p, "창고는 필수입력입니다.");
    ed_con_wrkPlCd.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회 조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  acb_con_stockSts.setSelectedIndex(0);
  if (scwin.userClsCd != "01") {
    $c.gus.cfInitObjects($p, [ed_con_wrkPlCd, ed_con_wrkPlNm, ed_con_commCd, ed_con_commNm]);
  } else {
    $c.gus.cfInitObjects($p, [ed_con_wrkPlCd, ed_con_wrkPlNm, ed_con_commCd, ed_con_commNm]);
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 팝업
      udc_con_wrkPlCd.setSelectId("retrieveWrkPlInfo"); // XML상의 SELECT ID
      udc_con_wrkPlCd.cfCommonPopUp(scwin.udc_con_wrkPlCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , ',,,5,,,9' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "창고,창고코드,창고명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // 품명 팝업
      udc_con_commCd.setSelectId("retrieveCommInfo"); // XML상의 SELECT ID
      udc_con_commCd.cfCommonPopUp(scwin.udc_con_commCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      //,"3,4,,,ZZZZ" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      //20161017 석고보드(936)을 검색할수없어 검색레벨 변경
      , "2,4,,,ZZZZ" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "품명조회,품명코드,품명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 거래처간 재고조정
//-------------------------------------------------------------------------
scwin.f_moveClnt = async function () {
  var chkCountk = 0;
  var chkRow = 0;
  var chkStockClntNm = "";
  var chkMoveClntNm = "";
  for (var i = 0; i < ds_retrieveWorkPlaceEachGoods.getRowCount(); i++) {
    if (ds_retrieveWorkPlaceEachGoods.getCellData(i, "chk") == "T") {
      chkCountk++;
      chkRow = i;
    }
  }
  if (chkCountk == 0) {
    $c.win.alert($p, "이동대상 재고를 선택하세요.");
    return;
  }
  if (ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockStat") != "N") {
    //N:정상 B:비정상
    $c.win.alert($p, "재고상태가 정상인 경우에만 거래처간 재고이동이 가능합니다.");
    return;
  }
  if (ds_chgEachStock.getCellData(0, "moveClnt") == "" || ds_chgEachStock.getCellData(0, "moveClnt") == null) {
    $c.win.alert($p, "이동 거래처를 선택하세요.");
    acb_moveClnt.focus();
    return;
  }
  if (ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockClntNo") == ds_chgEachStock.getCellData(0, "moveClnt")) {
    $c.win.alert($p, "이동 거래처가 재고 거래처와 동일합니다. 다시 확인해주세요.");
    acb_moveClnt.focus();
    return;
  }
  if (ds_chgEachStock.getCellData(0, "moveClntQty") == 0) {
    $c.win.alert($p, "이동 수량을 입력해주세요.");
    ed_moveClntQty.setValue("");
    ed_moveClntQty.focus();
    return;
  }
  if (ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockQty") < ds_chgEachStock.getCellData(0, "moveClntQty")) {
    $c.win.alert($p, "이동 수량이 재고수량보다 많습니다. 다시 확인해주세요.");
    ed_moveClntQty.focus();
    return;
  }
  if (ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockClntNo") == "100002") {
    chkStockClntNm = "[울산]";
  } else if (ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockClntNo") == "100003") {
    chkStockClntNm = "[여수]";
  } else if (ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockClntNo") == "100285") {
    chkStockClntNm = "[당진]";
  }
  if (ds_chgEachStock.getCellData(0, "moveClnt") == "100002") {
    chkMoveClntNm = "[울산]";
  } else if (ds_chgEachStock.getCellData(0, "moveClnt") == "100003") {
    chkMoveClntNm = "[여수]";
  } else if (ds_chgEachStock.getCellData(0, "moveClnt") == "100285") {
    chkMoveClntNm = "[당진]";
  }
  ds_chgEachStock.setCellData(0, "gubun", "move"); //gubun- move:거래처간 재고이동, sts:재고상태 조정

  let ret = await $c.win.confirm($p, ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "commNm") + " " + ds_chgEachStock.getCellData(0, "moveClntQty") + "개를 " + "\n" + ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockClntNo") + chkStockClntNm + "에서 " + ds_chgEachStock.getCellData(0, "moveClnt") + chkMoveClntNm + "로 이동하시겠습니까?");
  if (ret) {
    ds_chgEachStock.setCellData(0, "stockStat", ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockStat"));
    ds_chgEachStock.setCellData(0, "wrkPlCd", ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "wrkPlCd"));
    ds_chgEachStock.setCellData(0, "stockClntNo", ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockClntNo"));
    ds_chgEachStock.setCellData(0, "commCd", ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "commCd"));
    ds_chgEachStock.setCellData(0, "stockQty", ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockQty"));
    ds_chgEachStock.setCellData(0, "stockWt", ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockWt"));
    ds_chgEachStock.setCellData(0, "coCd", ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "coCd"));
    ds_chgEachStock.setCellData(0, "bizLongCd", ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "bizLongCd"));
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 재고상태 조정
//-------------------------------------------------------------------------
scwin.f_chgSts = async function () {
  var chkCountk = 0;
  var chkRow = 0;
  var chkStockSts = "";
  var chkChgSts = "";
  for (var i = 0; i < ds_retrieveWorkPlaceEachGoods.getRowCount(); i++) {
    if (ds_retrieveWorkPlaceEachGoods.getCellData(i, "chk") == "T") {
      chkCountk++;
      chkRow = i;
    }
  }
  if (chkCountk == 0) {
    $c.win.alert($p, "이동대상 재고를 선택하세요.");
    return;
  }
  if (ds_chgEachStock.getCellData(0, "chgSts") == "" || ds_chgEachStock.getCellData(0, "chgSts") == null) {
    $c.win.alert($p, "재고상태를 선택하세요.");
    acb_chgSts.focus();
    return;
  }
  if (ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockStat") == ds_chgEachStock.getCellData(0, "chgSts")) {
    $c.win.alert($p, "조정 재고상태가 현재 재고상태와 동일합니다. 다시 확인해주세요.");
    acb_moveClnt.focus();
    return;
  }
  if (ds_chgEachStock.getCellData(0, "chgStsQty") == 0) {
    $c.win.alert($p, "조정 수량을 입력해주세요.");
    ed_chgStsQty.setValue("");
    ed_chgStsQty.focus();
    return;
  }
  if (ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockQty") < ds_chgEachStock.getCellData(0, "chgStsQty")) {
    $c.win.alert($p, "조정 수량이 재고수량보다 많습니다. 다시 확인해주세요.");
    ed_moveClntQty.focus();
    return;
  }
  if (ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockStat") == "N") {
    chkStockSts = "'정상'";
  } else if (ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockStat") == "B") {
    chkStockSts = "'비정상'";
  }
  if (ds_chgEachStock.getCellData(0, "chgSts") == "N") {
    chkChgSts = "'정상'";
  } else if (ds_chgEachStock.getCellData(0, "chgSts") == "B") {
    chkChgSts = "'비정상'";
  }
  ds_chgEachStock.setCellData(0, "gubun", "sts"); //gubun- move:거래처간 재고이동, sts:재고상태 조정
  ds_chgEachStock.setCellData(0, "badOutbrDt", scwin.strCurDate); //불량발생일자
  ds_chgEachStock.setCellData(0, "badRsn", "크나우프재고관리 조정"); //불량사유

  let ret = await $c.win.confirm($p, ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "commNm") + " " + ds_chgEachStock.getCellData(0, "chgStsQty") + "개를 " + "\n" + chkStockSts + "에서 " + chkChgSts + "로 재고상태를 조정하시겠습니까?");
  if (ret) {
    ds_chgEachStock.setCellData(0, "stockStat", ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockStat"));
    ds_chgEachStock.setCellData(0, "wrkPlCd", ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "wrkPlCd"));
    ds_chgEachStock.setCellData(0, "stockClntNo", ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockClntNo"));
    ds_chgEachStock.setCellData(0, "commCd", ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "commCd"));
    ds_chgEachStock.setCellData(0, "stockQty", ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockQty"));
    ds_chgEachStock.setCellData(0, "stockWt", ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "stockWt"));
    ds_chgEachStock.setCellData(0, "coCd", ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "coCd"));
    ds_chgEachStock.setCellData(0, "bizLongCd", ds_retrieveWorkPlaceEachGoods.getCellData(chkRow, "bizLongCd"));
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_gridToExcel = function (argGrid, argTitle) {
  // 검색조건
  var vDay = "창고 | " + ed_con_wrkPlNm.getValue() + " | " + "품명 | " + ed_con_commNm.getValue() + " | " + "재고상태 | " + acb_con_stockSts.getText();
  const options = {
    fileName: "크나우프재고현황.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "크나우프재고현황",
    startRowIndex: 3,
    startColumnIndex: 0
  };

  // 타이틀
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 9,
    text: "크나우프재고현황",
    textAlign: "center",
    drawBorder: false,
    fontSize: "18px"
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 9,
    text: vDay,
    textAlign: "left",
    drawBorder: false
  }];
  $c.data.downloadGridViewExcel($p, gr_retrieveWorkPlaceEachGoods, options, infoArr);
};

//-------------------------------------------------------------------------
// 그리드 재고거래처(stockNm)
//-------------------------------------------------------------------------
scwin.stockNmExp = function (data, formatData, rowIdx, colIdx) {
  let stockClntNo = ds_retrieveWorkPlaceEachGoods.getCellData(rowIdx, "stockClntNo");
  return $c.gus.decode($p, stockClntNo, "100002", "울산", "100003", "여수", "100285", "당진");
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  tbx_totalRows.setValue(ds_retrieveWorkPlaceEachGoods.getRowCount());
  if (ds_retrieveWorkPlaceEachGoods.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  } else {
    $c.gus.cfEnableAllBtn($p);
  }
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = function (e) {
  scwin.f_Retrieve();
};
scwin.gr_retrieveWorkPlaceEachGoods_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId = "chk") {
    var chkCountk = 0;
    var chkRow = 0;
    for (i = 0; i < ds_retrieveWorkPlaceEachGoods.getRowCount(); i++) {
      if (ds_retrieveWorkPlaceEachGoods.getCellData(i, "chk") == "T") {
        chkCountk++;
        chkRow = i;
      }
    }
    if (chkCountk > 1) {
      $c.win.alert($p, "이동대상 재고는 1개만 선택가능합니다.");
      ds_retrieveWorkPlaceEachGoods.setCellData(chkRow, "chk", "F");
    }
  } else {
    scwin.f_linkModify();
  }
};

//-------------------------------------------------------------------------
// 창고 UDC START
//-------------------------------------------------------------------------
scwin.udc_con_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_con_wrkPlCd.getValue(), ed_con_wrkPlNm.getValue(), 'T', 'T');
};
scwin.udc_con_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_con_wrkPlCd, ed_con_wrkPlNm, 1);
};
scwin.udc_con_wrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_con_wrkPlNm, ed_con_wrkPlCd, 1, false);
};
scwin.udc_con_wrkPlCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_con_wrkPlCd, ed_con_wrkPlNm);
};
//-------------------------------------------------------------------------
// 창고 UDC START
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 품명 UDC START
//-------------------------------------------------------------------------
scwin.udc_con_commCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_con_commCd.getValue(), ed_con_commNm.getValue(), 'T', 'T');
};
scwin.udc_con_commCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_con_commCd, ed_con_commNm, 4);
};
scwin.udc_con_commCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_con_commNm, ed_con_commCd, 4, false);
};
scwin.udc_con_commCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_con_commCd, ed_con_commNm);
};
//-------------------------------------------------------------------------
// 품명 UDC END
//-------------------------------------------------------------------------

scwin.ed_moveClntQty_onfocus = function (e) {
  if (ed_moveClntQty.getValue() == 0) {
    ed_moveClntQty.setValue("");
  }
};
scwin.ed_moveClntQty_onblur = function (e) {
  if (ed_moveClntQty.getValue() == "") {
    ed_moveClntQty.setValue("0");
  }
};
scwin.ed_chgStsQty_onfocus = function (e) {
  if (ed_chgStsQty.getValue() == 0) {
    ed_chgStsQty.setValue("");
  }
};
scwin.ed_chgStsQty_onblur = function (e) {
  if (ed_chgStsQty.getValue() == "") {
    ed_chgStsQty.setValue("0");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'창고',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_con_wrkPlCd',nameId:'ed_con_wrkPlNm',btnId:'btn_con_wrkPlCd',id:'udc_con_wrkPlCd',maxlengthCode:'6',mandatoryCode:'true',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',refDataCollection:'ds_search',code:'wrkPlCd','ev:onclickEvent':'scwin.udc_con_wrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_con_wrkPlCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_con_wrkPlCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_con_commCd',nameId:'ed_con_commNm',btnId:'btn_con_commCd',id:'udc_con_commCd',maxlengthCode:'8',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',code:'commCd',refDataCollection:'ds_search','ev:onclickEvent':'scwin.udc_con_commCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_con_commCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_con_commCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'재고상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'acb_con_stockSts',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:ds_search.stockSts'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정상'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'비정상'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box ',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_gridToExcel',gridUpYn:'N',templateYn:'N',gridID:'gr_retrieveWorkPlaceEachGoods',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_retrieveWorkPlaceEachGoods',style:'',autoFit:'allColumn',id:'gr_retrieveWorkPlaceEachGoods',class:'wq_gvw',visibleRowNum:'14',visibleRowNumFix:'true',readOnly:'false','ev:oncellclick':'scwin.gr_retrieveWorkPlaceEachGoods_oncellclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column1',displayMode:'label',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'재고상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'창고코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'창고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'재고거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'재고거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column3',value:'화주',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'품명코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'260',inputType:'text',id:'column7',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column19',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column31',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'회사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'사업장',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'chk',displayMode:'label',fixColumnWidth:'true',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'stockStat',displayMode:'label',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정상'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'비정상'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkPlCd',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkPlNm',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockClntNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockNm',displayMode:'label',customFormatter:'scwin.stockNmExp',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',inputType:'text',id:'stockClntNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'260',inputType:'text',id:'commNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'80',inputType:'text',id:'stockQty',displayMode:'label',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'80',inputType:'text',id:'stockWt',displayMode:'label',dataType:'number',displayFormat:'#,##0.000',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'coCd',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bizLongCd',value:'',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'260',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'80',inputType:'expression',id:'column21',displayMode:'label',expression:'sum(\'stockQty\')',displayFormat:'#,###,###',dataType:'number'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'80',inputType:'expression',id:'column33',displayMode:'label',expression:'sum(\'stockWt\')',displayFormat:'#,###,###.##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right flex-row tar'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'옮겨질 거래처',class:'req'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',chooseOptionLabel:'선택',ref:'data:ds_chgEachStock.moveClnt',chooseOption:'true',editType:'select',style:'width: 120px;',id:'acb_moveClnt',allOption:'',title:'옮겨질 거래처',class:'mr8',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'울산'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'100002'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'여수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'100003'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'당진'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'100285'}]}]}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수량',class:'req'}},{T:1,N:'xf:input',A:{maxlength:'8',dataType:'number',displayFormat:'#,###',title:'최대적재량(톤)',mandatory:'true',ref:'data:ds_chgEachStock.moveClntQty','ev:onfocus':'scwin.ed_moveClntQty_onfocus','ev:onblur':'scwin.ed_moveClntQty_onblur',style:'',id:'ed_moveClntQty',placeholder:'',allowChar:'0-9',class:' w100 tar mr8'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_moveClnt',style:'width: 120px;',id:'btn_moveClnt',type:'button',class:'btn',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'거래처간 재고이동'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'옮겨질 재고의 상태 ',class:'req'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width: 120px;',id:'acb_chgSts',class:'mr8',allOption:'',chooseOption:'true',chooseOptionLabel:'선택',ref:'data:ds_chgEachStock.chgSts'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정상'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'비정상'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수량',class:'req'}},{T:1,N:'xf:input',A:{style:'',id:'ed_chgStsQty',placeholder:'',class:' w100 tar mr8',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',maxlength:'8',title:'최대적재량(톤)',mandatory:'true',ref:'data:ds_chgEachStock.chgStsQty','ev:onfocus':'scwin.ed_chgStsQty_onfocus','ev:onblur':'scwin.ed_chgStsQty_onblur'}},{T:1,N:'xf:trigger',A:{style:'width: 120px;',id:'btn_chgSts',type:'button',class:'btn','ev:onclick':'scwin.f_chgSts',objType:'bUpdate',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'재고상태 조정'}]}]}]}]}]}]}]}]}]}]})