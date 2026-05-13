/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_302_02_48b.xml 38037 88e1df46bc9aebded69fd64f53e2f22edc8fa112bb9d03619e76990ab7f5b774 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ioClsCd',name:'입출고구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrLineNo',name:'Order Line No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'productNo',name:'제품번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inDtFrom',name:'입고일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inDtTo',name:'입고일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outDtFrom',name:'출고일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outDtTo',name:'출고일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'invoiceNo',name:'송장번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dmndNm',name:'납품처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_StockInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'chgnum',name:'CHGNUM',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'납품처명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'dsNm',name:'목적지',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'igC',name:'성분C',dataType:'number',defaultValue:'0',length:'5'}},{T:1,N:'w2:column',A:{id:'igMn',name:'성분MN',dataType:'number',defaultValue:'0',length:'5'}},{T:1,N:'w2:column',A:{id:'igP',name:'성분P',dataType:'number',defaultValue:'0',length:'5'}},{T:1,N:'w2:column',A:{id:'igS',name:'성분S',dataType:'number',defaultValue:'0',length:'5'}},{T:1,N:'w2:column',A:{id:'igSi',name:'성분SI',dataType:'number',defaultValue:'0',length:'5'}},{T:1,N:'w2:column',A:{id:'inDt',name:'입고일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'invoiceNo',name:'송장번호',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'ioClsCd',name:'입출고구분코드',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text',defaultValue:'',length:'14'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'odrLineNo',name:'Order Line No',dataType:'text',defaultValue:'',length:'15'}},{T:1,N:'w2:column',A:{id:'ordNm',name:'주문자명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'outDt',name:'생산일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'productNo',name:'제품번호',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text',defaultValue:'',length:'14'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'stdNm',name:'규격',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'thick',name:'두께',dataType:'number',defaultValue:'0',length:'5'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',defaultValue:'',length:'12'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number',defaultValue:'0',length:'7'}},{T:1,N:'w2:column',A:{id:'totWt',name:'중량',dataType:'number',defaultValue:'0',length:'7'}},{T:1,N:'w2:column',A:{id:'transferYn',name:'이관여부',dataType:'text',defaultValue:'',length:'1'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.yardwrkrslts.RetrievePoscoExceptStockRegListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Query","key":"IN_DS1"},{"id":"ds_StockInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_StockInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.yardwrkrslts.SavePoscoExceptStockRegListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_StockInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP228",
    compID: "acb_ioClsCd,gr_InOutStockInfo:ioClsCd"
  } //구분
  ];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_SetGridColumnMaxLength(gr_InOutStockInfo); // 그리드 maxlength 설정
};

//-------------------------------------------------------------------------
// 입력 그리드 maxlength 설정
//-------------------------------------------------------------------------
scwin.f_SetGridColumnMaxLength = function (gridViewObj) {
  for (let i = 0; i < gridViewObj.getTotalCol(); i++) {
    let colNm = gridViewObj.getColumnID(i);
    let dataObj = $c.gus.object($p, gridViewObj.getDataList());
    let colInfo = dataObj.getColumnInfo(colNm);
    if (typeof colInfo != "undefined") {
      gridViewObj.setMaxLength(i, colInfo.length);
    }
  }
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //소스
    var dateStr = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재일자
    ica_outDt.setValue(dateStr);
    ed_inDtFrom.setValue(dateStr.substring(0, 6) + '01');
    ed_inDtTo.setValue(dateStr);
    $c.gus.cfDisableObjects($p, [btn_addRow, btn_undoRow, btn_insert, btn_cancel, btn_pop, btn_delete, btn_save]);
    ed_clntNo.setValue("253811");
    scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'T', 'T');

    //테스트 데이터
    // ds_Query.set("inDtFrom", "20240730");
    // ds_Query.set("inDtTo", "20240730");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  //필수입력항목 체크
  if ($c.gus.cfIsNull($p, ed_clntNo.getValue())) {
    $c.gus.cfAlertMsg($p, "거래처를 입력하십시오.");
    ed_clntNo.focus();
    return;
  }
  if ($c.gus.cfIsNull($p, ed_inDtFrom.getValue()) && $c.gus.cfIsNull($p, ed_inDtTo.getValue()) && $c.gus.cfIsNull($p, ed_outDtFrom.getValue()) && $c.gus.cfIsNull($p, ed_outDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, "입고일자 또는 출고일자를 입력하십시오.");
    ed_clntNo.focus();
    return;
  }
  if (!($c.gus.cfIsNull($p, ed_inDtFrom.getValue()) || $c.gus.cfIsNull($p, ed_inDtTo.getValue())) && ($c.gus.cfIsNull($p, ed_inDtFrom.getValue()) || $c.gus.cfIsNull($p, ed_inDtTo.getValue()))) {
    $c.gus.cfAlertMsg($p, "입고일자를 입력하십시오.");
    ed_clntNo.focus();
    return;
  }
  if (!($c.gus.cfIsNull($p, ed_outDtFrom.Text) && $c.gus.cfIsNull($p, ed_outDtTo.getValue())) && ($c.gus.cfIsNull($p, ed_outDtFrom.getValue()) || $c.gus.cfIsNull($p, ed_outDtTo.getValue()))) {
    $c.gus.cfAlertMsg($p, "출고일자를 입력하십시오.");
    ed_clntNo.focus();
    return;
  }
  if (!$c.gus.cfValidate($p, ed_inDtFrom) || !$c.gus.cfValidate($p, ed_inDtTo) || !$c.gus.cfValidate($p, ed_outDtFrom) || !$c.gus.cfValidate($p, ed_outDtTo)) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_inDtFrom.getValue(), ed_inDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_inDtFrom.focus();
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_outDtFrom.getValue(), ed_outDtTo.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_outDtFrom.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//------------------------------------
// 저장
//------------------------------------
scwin.f_Save = async function () {
  // 필수값 체크
  let ret = await $c.gus.cfValidate($p, [gr_InOutStockInfo]);
  if (!ret) return;
  var cnt = 0;
  for (var i = 0; i < ds_StockInfo.getRowCount(); i++) {
    if (ds_StockInfo.getCellData(i, "chk") == "T" || ds_StockInfo.getRowStatus(i) == "U") {
      if (!$c.gus.cfIsNull($p, ds_StockInfo.getCellData(i, "invoiceNo"))) {
        $c.win.alert($p, "이미 송장발행된 내역이 있습니다.");
        return;
      }
      if (!$c.gus.cfIsNull($p, ds_StockInfo.getCellData(i, "outDt")) && ds_StockInfo.getCellData(i, "ioClsCd") == "I") {
        ds_StockInfo.setCellData(i, "ioClsCd", "O");
      }
      cnt++;
    }
  }
  if (cnt == 0) {
    $c.win.alert($p, "저장할 항목을 선택해 주세요.");
    return;
  }

  //저장 여부 확인
  ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    // 저장 하시겠습니까?
    $c.sbm.execute($p, sbm_save);
  }
};

//------------------------------------
// 삭제
//------------------------------------
scwin.f_Delete = async function () {
  var cnt = 0;
  for (var i = 0; i < ds_StockInfo.getRowCount(); i++) {
    if (ds_StockInfo.getCellData(i, "chk") == "T") {
      if (!$c.gus.cfIsNull($p, ds_StockInfo.getCellData(i, "invoiceNo"))) {
        $c.win.alert($p, "송장삭제 후 입출고내역 삭제가능합니다.");
        return;
      }
      //ds_StockInfo.UserStatus(i) = 2;
      ds_StockInfo.modifyRowStatus(i, "D");
      cnt++;
    }
  }
  if (cnt == 0) {
    $c.win.alert($p, "삭제할 항목을 선택해 주세요.");
    return;
  }
  let ret = await $c.win.confirm($p, "삭제 하시겠습니까?");
  if (ret) {
    $c.sbm.execute($p, sbm_save);
  }
};

//------------------------------------
// 수정
//------------------------------------
scwin.f_Update = async function () {
  var cnt = 0;
  for (var i = 1; i <= ds_StockInfo.getRowCount(); i++) {
    if (ds_StockInfo.getCellData(i, "chk") == "T") {
      if (!$c.gus.cfIsNull($p, ds_StockInfo.getCellData(i, "invoiceNo"))) {
        $c.win.alert($p, "이미 송장발행된 내역이 있습니다.");
        return;
      }
      //ds_StockInfo.UserStatus(i) = 3;
      ds_StockInfo.modifyRowStatus(i, "U");
      cnt++;
    }
  }
  if (cnt == 0) {
    $c.win.alert($p, "수정할 항목을 선택해 주세요.");
    return;
  }
  let ret = await $c.win.confirm($p, "수정 하시겠습니까?");
  if (ret) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------
// 엑셀 다운
//-------------------------------------------
scwin.f_runExcel = async function () {
  var totCnt = ds_StockInfo.getRowCount();
  var sheetTitle = "포스코입출고 등록";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        ,
        sheetName: sheetTitle //엑셀내 시트명 지정필요시
      };
      const infoArr = [];
      $c.data.downloadGridViewExcel($p, gr_InOutStockInfo, options, infoArr);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.f_outDtUpdate = function () {
  if ($c.gus.cfIsNull($p, ica_outDt.getValue())) {
    $c.win.alert($p, "출고일자를 선택해주세요.");
    return;
  }
  if (scwin.invoiceChk()) {
    $c.win.alert($p, "송장삭제 후 출고일자 변경 가능합니다");
    return;
  }
  for (var i = 0; i < ds_StockInfo.getRowCount(); i++) {
    if (ds_StockInfo.getCellData(i, "chk") == "T") {
      ds_StockInfo.setCellData(i, "outDt", ica_outDt.getValue());
    }
  }
};
scwin.f_outCancelUpdate = function () {
  if (scwin.invoiceChk()) {
    $c.win.alert($p, "송장삭제 후 출고일자 변경 가능합니다");
    return;
  }
  for (var i = 0; i < ds_StockInfo.getRowCount(); i++) {
    if (ds_StockInfo.getCellData(i, "chk") == "T") {
      ds_StockInfo.setCellData(i, "outDt", "");
      ds_StockInfo.setCellData(i, "ioClsCd", "I");
    }
  }
};
scwin.invoiceChk = function () {
  var returnChk = false;
  for (var i = 0; i < ds_StockInfo.getRowCount(); i++) {
    if (ds_StockInfo.getCellData(i, "chk") == "T" && !$c.gus.cfIsNull($p, ds_StockInfo.getCellData(i, "invoiceNo"))) {
      return true;
    }
  }
  return returnChk;
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
// GRID에서 선택된 오더요청처리 : 해당 오더요청처리 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_srchCond);
  ed_clntNo.focus();
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  var newRow = ds_StockInfo.insertRow();
  ds_StockInfo.setRowPosition(newRow);
  ds_StockInfo.setCellData(ds_StockInfo.getRowPosition(), "ioClsCd", "I");
  ds_StockInfo.setCellData(ds_StockInfo.getRowPosition(), "clntNo", ed_clntNo.getValue());
};

//-------------------------------------------------------------------------
// 송장발행
//-------------------------------------------------------------------------
scwin.f_popup = async function () {
  var arrParam = new Array();
  var arrParam1 = "";
  var arrParam2 = new Array();
  var arrParam3 = new Array();
  var arrParam4 = new Array();
  var arrParam5 = new Array();
  var arrParam6 = "";
  var cnt = 0;
  var outDTChk = "";
  if (scwin.invoiceChk()) {
    $c.win.alert($p, "이미 송장발행된 내역이 있습니다.");
    return;
  }
  for (var i = 0; i < ds_StockInfo.getRowCount(); i++) {
    if (ds_StockInfo.getCellData(i, "chk") == "T") {
      if ($c.gus.cfIsNull($p, ds_StockInfo.getCellData(i, "outDt"))) {
        $c.gus.cfAlertMsg($p, "출고일자 등록 후 송장발행 가능합니다.");
        return;
      }
      if (ds_StockInfo.getCellData(i, "ioClsCd") == "I") {
        $c.gus.cfAlertMsg($p, "출고일자 등록 후 송장발행 가능합니다.");
        return;
      }
      if (outDTChk != "" && outDTChk != ds_StockInfo.getCellData(i, "outDt")) {
        $c.gus.cfAlertMsg($p, "동일한 출고일자로만 송장발행 가능합니다.");
        return;
      }
      cnt++;
      outDTChk = ds_StockInfo.getCellData(i, "outDt");
      arrParam1 = ds_StockInfo.getCellData(i, "outDt");
      arrParam2.push(ds_StockInfo.getCellData(i, "clntNo"));
      arrParam3.push(ds_StockInfo.getCellData(i, "inDt"));
      arrParam4.push(ds_StockInfo.getCellData(i, "productNo"));
      arrParam5.push(ds_StockInfo.getCellData(i, "odrLineNo"));
      arrParam6 = ds_StockInfo.getCellData(i, "transferYn");
    }
  }
  arrParam.push(arrParam1);
  arrParam.push(arrParam2);
  arrParam.push(arrParam3);
  arrParam.push(arrParam4);
  arrParam.push(arrParam5);
  arrParam.push(arrParam6);
  if (cnt == 0) {
    $c.gus.cfAlertMsg($p, "발행 할 항목을 선택해주세요.");
    return;
  }
  let win_url = "/ui/ds/op/wrkrslts/yardwrkrslts/op_302_02_49p.xml";
  let opts = {
    id: "op_302_02_49p",
    popupName: "송장입력",
    modal: true,
    type: "browserPopup",
    width: 500,
    height: 500,
    title: "송장입력"
  };
  var returnParam = await $c.win.openPopup($p, win_url, opts, arrParam);
  if (returnParam != null) {
    console.log("returnParam[0]=" + returnParam[0]);
    var data = {
      reportName: "ds/op/wrkrslts/yardwrkrslts/op_302_02_49.ozr",
      odiParam: {
        clntNo: ed_clntNo.getValue(),
        invoiceNo: returnParam[0] //송장발행으로 생성된 번호 매핑필요
      },
      viewerParam: {
        useprogressbar: true,
        // 프로그레스바 쓸지 말지
        zoom: 90 // 배율 설정
      },
      formParam: {}
    };
    await scwin.openPopup(data);
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 오즈 리포트 팝업
//------------------------------------------------------------------------- 
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 거래처 팝업
      udc_clntNo.setSelectId("retrieveClntInfo2"); // XML상의 SELECT ID
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
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
      , "계약 거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
  }
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_StockInfo.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  tbx_totalRows.setValue(ds_StockInfo.getRowCount()); // 소계 부분을 뺀 실제 데이터 갯수를 Count...

  $c.gus.cfEnableObjects($p, [btn_addRow, btn_undoRow, btn_insert, btn_cancel, btn_pop, btn_delete, btn_save]);
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 화주 UDC START
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1);
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
};
scwin.udc_clntNo_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_clntNo, ed_clntNm);
};
//-------------------------------------------------------------------------
// 화주 UDC END
//-------------------------------------------------------------------------
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'',src:'/cm/udc/schInput.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화주',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_clntNo',nameId:'ed_clntNm',id:'udc_clntNo',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',refDataCollection:'ds_Query',code:'clntNo',validTitle:'화주'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_ioClsCd',search:'start',style:'width:85px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:ds_Query.ioClsCd',chooseOptionLabel:'전체',title:'구분',mandatory:'true'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Order Line NO',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_odrLineNo',placeholder:'',style:'width:150px;',maxlength:'30',ref:'data:ds_Query.odrLineNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'제품번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_schInput',A:{style:'width:150px;',id:'udc_productNo',refDataMap:'ds_Query',iptNm:'productNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수요가 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_dmndNm',placeholder:'',style:'width:150px;',ref:'data:ds_Query.dmndNm'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입고일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_Query',refEdDt:'inDtTo',refStDt:'inDtFrom',style:'',edFromId:'ed_inDtFrom',edToId:'ed_inDtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출고일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_Query',refEdDt:'outDtTo',refStDt:'outDtFrom',style:'',edFromId:'ed_outDtFrom',edToId:'ed_outDtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출고송장번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_schInput',A:{style:'width:150px;',id:'udc_invoiceNo',iptNm:'invoiceNo',refDataMap:'ds_Query'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'입출고 등록내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_InOutStockInfo',gridDownFn:'scwin.f_runExcel',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_StockInfo',id:'gr_InOutStockInfo',style:'',visibleRowNum:'14',visibleRowNumFix:'true',autoFit:'none',autoFitMinWidth:'1700',readOnly:'false',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'출고일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'출고송장번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'당사입고일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'수요가',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'Order Line NO',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'제품번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'두께',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'규격',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column52',value:'순중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column73',value:'총중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'목적지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'CHGNUM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column34',value:'C',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',value:'SI',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column70',value:'MN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column67',value:'P',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column64',value:'S',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'주문자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column76',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column79',value:'이관여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ioClsCd',inputType:'select',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outDt',inputType:'calendar',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'invoiceNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inDt',inputType:'calendar',width:'120',displayFormat:'yyyy/MM/dd',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmndNm',inputType:'text',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrLineNo',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'productNo',inputType:'text',width:'100',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thick',inputType:'text',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'totWt',displayMode:'label',hidden:'true',readOnly:'true',displayFormat:'#,###.#0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'chgnum',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'igC',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'igSi',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'igMn',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'igP',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'igS',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ordNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntNo',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'transferYn',displayMode:'label',hidden:'true',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column23',displayMode:'label',expression:'count(\'productNo\')'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column22',displayMode:'label',displayFormat:'#,###.#0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column54',displayMode:'label',textAlign:'right',expression:'sum(\'wt\')',displayFormat:'#,###.#0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column75',displayMode:'label',expression:'sum(\'totWt\')',displayFormat:'#,###.#0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column81',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'N',rowAddFunction:'scwin.f_AddRow',gridID:'gr_InOutStockInfo',btnRowAddObj:'btn_addRow',btnCancelObj:'btn_undoRow',id:'udc_bottomGrdBtn'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_insert',type:'button',class:'btn','ev:onclick':'scwin.f_outDtUpdate',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'출고등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.f_outCancelUpdate',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'출고취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_pop',style:'',type:'button','ev:onclick':'scwin.f_popup',userAuth:'D',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'송장발행'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_outDt',pickerType:'dynamic',style:'',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.f_Delete',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})