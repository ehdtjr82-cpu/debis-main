/*amd /ui/ds/fs/consignmgnt/fs_401_01_01b.xml 38707 c8b9a4187725eaf7ed58deefb1e081deed7c3bfae58b63e0bb0d602f74639ff6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_depositRules',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_depositRules_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'depositAdptClsCd',name:'적용구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclRegDt',name:'차량 등록일 기간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'depositRuleNo',name:'보증금규정번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclRegStDt',name:'차량등록시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclRegEndDt',name:'차량등록종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'depositIntRt',name:'보증금이자율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclDeprRt',name:'차량감가상각율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'depositAdptYy',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'depositAdptCd',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchDepositRulesDetail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'depositRuleNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_depositRulesDetail',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'month',name:'개월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deposit',name:'보증금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yyDepositInt',name:'연간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmDepositInt',name:'월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yyDeprAmt',name:'연간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmDeprAmt',name:'월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yyDeprAmt1',name:'연간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmDeprAmt1',name:'월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'anul',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'depositRuleNo',name:'보증금규정번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.consignmgnt.consignmgntcadjm.RetrieveDepositRulesCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_depositRules","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_detail',action:'/ds.fs.consignmgnt.consignmgntcadjm.RetrieveDepositRulesDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchDepositRulesDetail","key":"IN_DS1"},{"id":"ds_depositRulesDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_depositRulesDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_detail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ds.fs.consignmgnt.consignmgntcadjm.DeleteDepositRulesCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_depositRules","key":"IN_DS1", "action":"modified"},{"id":"ds_depositRulesDetail","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_insert',action:'/ds.fs.consignmgnt.consignmgntcadjm.RegistDepositRulesCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_depositRules","key":"IN_DS1", "action":"modified"},{"id":"ds_depositRulesDetail","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_insert_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_update',action:'/ds.fs.consignmgnt.consignmgntcadjm.UpdateDepositRulesCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_depositRules","key":"IN_DS1", "action":"modified"},{"id":"ds_depositRulesDetail","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_update_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.btnFlag = ""; // 신규, 수정, 삭제 버튼 구분자
scwin.rowFlag = ""; // 신규, 수정 후 저장 안하고 다른 master row 선택 불가능 구분자
scwin.pos_groupCode = 0; // 저장전 DataSet의 RowPosition을 저장 변수
scwin.isRowChanging = false; // onbeforerowpositionchange 재진입 방지

scwin.onpageload = function () {
  $c.gus.cfTurnCreateFlag($p, true); // 조회 결과가 없다는 메시지를 표시되지 않게 하기 위함
  scwin.f_RetrieveDepositRules(); // 위수탁 보증금 규정 정보 조회
};

// UDC 로드 완료 후 캘린더 선택(setValue) 시에도 보증금 적용구분 년도 세팅
scwin.onUdcCompleted = function () {
  let origSetValue = ed_vehclRegStDt.setValue;
  ed_vehclRegStDt.setValue = function (val) {
    origSetValue.call(this, val);
    scwin.f_depositAdptClsCd();
  };
};

//조회 - 위수탁 보증금 규정 정보
scwin.f_RetrieveDepositRules = function () {
  //$c.gus.cfDisableObjects([ed_depositAdptYy, ed_depositAdptCd]);
  ed_depositAdptYy.setDisabled(true);
  ed_depositAdptCd.setDisabled(true);
  ed_depositIntRt.setDisabled(true);
  ed_vehclDeprRt.setDisabled(true);
  udc_fromToCalendar.setDisabled(true); //udc 비활성 
  udc_bottomGrdBtn.setDisabled(true); //udc 비활성 
  $c.gus.cfDisableBtnOnly($p, [b_Cancel, b_Save]);
  $c.gus.cfEnableBtnOnly($p, [b_Create, b_Update, b_Delete]);
  gr_depositRulesDetail.setReadOnly("grid", true); //grid readonly

  $c.sbm.execute($p, sbm_retrieve);
};

//규칙정보 callback
scwin.sbm_retrieve_submitdone = function () {
  // 버튼 구분자 clear
  scwin.btnFlag = "";

  // 저장전 위치로 이동
  $c.gus.cfGoPrevPosition($p, gr_depositRules, scwin.pos_groupCode);

  // 총 조회건수 표시
  let nCnt = ds_depositRules.getRowCount();
  total.setValue(nCnt);
  if (nCnt > 0) {
    let targetRow = Math.min(scwin.pos_groupCode, nCnt - 1);
    gr_depositRules.setFocusedCell(targetRow, 0);
  }

  // 최초 등록시 체크
  if (nCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      udc_bottomGrdBtn.setDisabled(true);
      udc_fromToCalendar.setDisabled(true);
      ed_depositIntRt.setDisabled(true);
      ed_vehclDeprRt.setDisabled(true);
      ed_depositAdptYy.setDisabled(true);
      ed_depositAdptCd.setDisabled(true);
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    }
  }
};

// rowIndex < 0 방어 추가
scwin.gr_depositRules_onrowindexchange = function (rowIndex, oldRow) {
  if (rowIndex < 0 || ds_depositRules.getRowCount() < 1) return;
  ed_vehclRegStDt.setValue(ds_depositRules.getCellData(rowIndex, "vehclRegStDt"));
  ed_vehclRegEndDt.setValue(ds_depositRules.getCellData(rowIndex, "vehclRegEndDt"));
  scwin.f_RetrieveDepositRulesDetail();
};

// RowStatus 값 WebSquare5 매핑 적용, [행이동수정] 재진입 방지
//위수탁 보증금 규정에 따른 연차별 보증금 정보 조회(신규, 수정후 저장안하고 다른 master 선택 불가능 처리)
scwin.ds_depositRules_onbeforerowpositionchange = function (info) {
  if (scwin.isRowChanging) return false;
  if (scwin.rowFlag == "") {
    var status = ds_depositRules.getRowStatus(ds_depositRules.getRowPosition());
    if (scwin.btnFlag == "insert" && status === "C" || scwin.btnFlag == "update" && (status === "R" || status === "U")) {
      scwin.isRowChanging = true;
      $c.gus.cfAlertMsg($p, "취소 또는 저장 버튼을 누르십시오!");
      setTimeout(function () {
        scwin.isRowChanging = false;
      }, 300);
      return false;
    }
  }
  return true;
};

//grid detail 조회
scwin.f_RetrieveDepositRulesDetail = function () {
  let vDepositRuleNo = ds_depositRules.getCellData(ds_depositRules.getRowPosition(), "depositRuleNo");
  dma_searchDepositRulesDetail.set("depositRuleNo", vDepositRuleNo); // 보증금규정번호

  $c.sbm.execute($p, sbm_retrieve_detail);
};
scwin.sbm_retrieve_detail_submitdone = function () {
  let nCnt = ds_depositRulesDetail.getRowCount();
  total2.setValue(nCnt);
  if (nCnt > 0) {
    for (var i = 0; i < nCnt; i++) {
      let yyDepositInt = ds_depositRulesDetail.getCellData(i, "yyDepositInt");
      let mmDepositInt = ds_depositRulesDetail.getCellData(i, "mmDepositInt");
      let yyDeprAmt = ds_depositRulesDetail.getCellData(i, "yyDeprAmt");
      let mmDeprAmt = ds_depositRulesDetail.getCellData(i, "mmDeprAmt");
      ds_depositRulesDetail.setCellData(i, "yyDeprAmt1", Math.round(yyDeprAmt - yyDepositInt));
      ds_depositRulesDetail.setCellData(i, "mmDeprAmt1", Math.round(mmDeprAmt - mmDepositInt));
    }
    ds_depositRulesDetail.modifyAllStatus("R");
    gr_depositRulesDetail.setFocusedCell(0, 0);
  }
};

// b_Create/b_Update/b_Delete 비활성화 추가
scwin.b_Update_onclick = function (e) {
  if (ds_depositRules.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, "수정할 목록이 존재하지 않습니다.");
    return;
  }
  $c.gus.cfDisableBtnOnly($p, [b_Create, b_Update, b_Delete]);
  $c.gus.cfEnableBtnOnly($p, [b_Cancel, b_Save]);
  udc_bottomGrdBtn.setDisabled(false);
  udc_fromToCalendar.setDisabled(false);
  ed_depositAdptCd.setDisabled(false);
  ed_depositAdptYy.setDisabled(true);
  ed_depositIntRt.setDisabled(false);
  ed_vehclDeprRt.setDisabled(false);
  gr_depositRulesDetail.setReadOnly("grid", false);
  scwin.btnFlag = "update";
};
scwin.b_Cancel_onclick = function (e) {
  scwin.btnFlag = "";
  scwin.rowFlag = "";
  ds_depositRules.undoAll();
  scwin.f_RetrieveDepositRules();
};
scwin.b_Create_onclick = function (e) {
  let rowIndex = ds_depositRules.getRowCount();
  ds_depositRules.insertRow(rowIndex);
  gr_depositRules.setFocusedCell(rowIndex, "depositAdptClsCd");
  ds_depositRulesDetail.removeAll();
  total2.setValue(0);
  $c.gus.cfEnableObjects($p, [ed_depositIntRt, ed_vehclDeprRt]);
  $c.gus.cfDisableObjects($p, [ed_depositAdptYy]);
  udc_fromToCalendar.setDisabled(false);
  udc_bottomGrdBtn.setDisabled(false);
  $c.gus.cfDisableBtnOnly($p, [b_Create, b_Update, b_Delete]);
  $c.gus.cfEnableBtnOnly($p, [b_Cancel, b_Save]);
  ed_depositAdptCd.setDisabled(false);
  gr_depositRulesDetail.setReadOnly("grid", false);
  scwin.btnFlag = "insert";
  ed_vehclRegStDt.focus();
};

// RowStatus "C" 체크, 삭제 후 UI 비활성화 보완
scwin.b_Delete_onclick = async function (e) {
  if (ds_depositRules.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, "삭제할 목록이 존재하지 않습니다.");
    return;
  }
  if (ds_depositRules.getRowStatus(ds_depositRules.getRowPosition()) === "C") {
    $c.gus.cfAlertMsg($p, "저장되지 않은 건입니다.");
  } else {
    let confirm = await $c.win.confirm($p, "삭제하시겠습니까?");
    if (confirm) {
      ds_depositRules.setCellData(ds_depositRules.getRowPosition(), "useYn", "0");
      scwin.btnFlag = "delete";
      $c.sbm.execute($p, sbm_delete);
      udc_bottomGrdBtn.setDisabled(true);
      udc_fromToCalendar.setDisabled(true);
      ed_depositIntRt.setDisabled(true);
      ed_vehclDeprRt.setDisabled(true);
      $c.gus.cfDisableBtnOnly($p, [b_Cancel, b_Save]);
      $c.gus.cfEnableBtnOnly($p, [b_Create, b_Update, b_Delete]);
      gr_depositRulesDetail.setReadOnly("grid", true);
    }
  }
};

//행추가
scwin.addRow = function () {
  if ($c.gus.cfIsNull($p, ed_depositIntRt.getValue()) || ed_depositIntRt.getValue() == 0) {
    $c.gus.cfAlertMsg($p, "보증금 이자율을 입력하십시오.");
    ed_depositIntRt.focus();
    return;
  } else if ($c.gus.cfIsNull($p, ed_vehclDeprRt.getValue()) || ed_vehclDeprRt.getValue() == 0) {
    $c.gus.cfAlertMsg($p, "차량감가상각 산출율을 입력하십시오.");
    ed_vehclDeprRt.focus();
    return;
  }
  let rowIndex = ds_depositRulesDetail.insertRow();
  gr_depositRulesDetail.setFocusedCell(rowIndex, "deposit");
  let row = ds_depositRulesDetail.getRowPosition();
  let anul = scwin.getColumnMax(ds_depositRulesDetail, "anul") + 1;
  ds_depositRulesDetail.setCellData(row, "depositRuleNo", ds_depositRules.getCellData(ds_depositRules.getRowPosition(), "depositRuleNo"));
  ds_depositRulesDetail.setCellData(row, "anul", anul);
  ds_depositRulesDetail.setCellData(row, "month", (anul - 1) * 12 + 1 + "-" + anul * 12);
  ds_depositRulesDetail.setCellData(row, "deposit", 0);
  ds_depositRulesDetail.setCellData(row, "yyDepositInt", 0);
  ds_depositRulesDetail.setCellData(row, "mmDepositInt", 0);
  ds_depositRulesDetail.setCellData(row, "yyDeprAmt", 0);
  ds_depositRulesDetail.setCellData(row, "mmDeprAmt", 0);
  ds_depositRulesDetail.setCellData(row, "yyDeprAmt1", 0);
  ds_depositRulesDetail.setCellData(row, "mmDeprAmt1", 0);
};

//그리드 컬럼의 max값
scwin.getColumnMax = function (dataSetObj, colId) {
  var maxCol = 0;
  for (var row = 0; row < dataSetObj.getRowCount(); row++) {
    let val = Number(dataSetObj.getCellData(row, colId));
    if (maxCol < val) {
      maxCol = val;
    }
  }
  return maxCol;
};

//행삭제
scwin.delRow = function () {
  if (ds_depositRulesDetail.getRowCount() <= 1) {
    $c.gus.cfAlertMsg($p, "연차별 보증금 1건 이상 입력하십시오.");
    return;
  }
  ds_depositRulesDetail.removeRow(ds_depositRulesDetail.getRowPosition());
  for (var i = 0; i < ds_depositRulesDetail.getRowCount(); i++) {
    ds_depositRulesDetail.setCellData(i, "anul", i + 1);
    ds_depositRulesDetail.setCellData(i, "month", i * 12 + 1 + "-" + (i + 1) * 12);
  }
};

//행취소
scwin.undo = function () {
  $c.data.undoRow($p, ds_depositRulesDetail);
  for (var i = 0; i < ds_depositRulesDetail.getRowCount(); i++) {
    ds_depositRulesDetail.setCellData(i, "anul", i + 1);
    ds_depositRulesDetail.setCellData(i, "month", i * 12 + 1 + "-" + (i + 1) * 12);

    // 감가상각비 - 보증금 이자 재계산
    let yyDeprAmt = Math.round(ds_depositRulesDetail.getCellData(i, "yyDeprAmt"));
    let yyDepositInt = Math.round(ds_depositRulesDetail.getCellData(i, "yyDepositInt"));
    let mmDeprAmt = Math.round(ds_depositRulesDetail.getCellData(i, "mmDeprAmt"));
    let mmDepositInt = Math.round(ds_depositRulesDetail.getCellData(i, "mmDepositInt"));
    ds_depositRulesDetail.setCellData(i, "yyDeprAmt1", yyDeprAmt - yyDepositInt);
    ds_depositRulesDetail.setCellData(i, "mmDeprAmt1", mmDeprAmt - mmDepositInt);
  }
};

//보증금 계산 grid onExit event
scwin.gr_depositRulesDetail_onafteredit = function (rowIndex, columnIndex, value) {
  var columnId = gr_depositRulesDetail.getColumnID(columnIndex);
  if (columnId == "deposit") {
    if ($c.gus.cfIsNull($p, ed_depositIntRt.getValue()) || ed_depositIntRt.getValue() == 0) {
      $c.gus.cfAlertMsg($p, "보증금 이자율을 입력하십시오.");
      return;
    } else if ($c.gus.cfIsNull($p, ed_vehclDeprRt.getValue()) || ed_vehclDeprRt.getValue() == 0) {
      $c.gus.cfAlertMsg($p, "차량감가상각 산출율을 입력하십시오.");
      return;
    }
    scwin.f_Deposit("A");
  }
};

//보증금 이자율 입력시 연차별 보증금 계산 
scwin.ed_depositIntRt_onblur = function (e) {
  scwin.f_Deposit("B");
};

//차량감가상각 산출율 입력시 연차별 보증금 계산 
scwin.ed_vehclDeprRt_onblur = function (e) {
  scwin.f_Deposit("C");
};

//-------------------------------------------------------------------------
// 연차별 보증금 계산
//-------------------------------------------------------------------------
scwin.f_Deposit = function (mode) {
  let yyDepositInt = 0; // 연간 보증금 이자
  let mmDepositInt = 0; // 월 보증금 이자
  let yyDeprAmt = 0; // 연간 감가상각비
  let mmDeprAmt = 0; // 월 감가상각비

  if (mode == "A") {
    // 행추가 입력시
    let row = ds_depositRulesDetail.getRowPosition();
    let deposit = ds_depositRulesDetail.getCellData(row, "deposit"); // 연차 보증금

    yyDepositInt = parseFloat((deposit * ed_depositIntRt.getValue()).toFixed(4));
    mmDepositInt = yyDepositInt / 12;
    mmDepositInt = scwin.f_Round(mmDepositInt, 1, "i");
    yyDeprAmt = parseFloat((deposit * ed_vehclDeprRt.getValue()).toFixed(4));
    mmDeprAmt = yyDeprAmt / 12;
    mmDeprAmt = scwin.f_Round(mmDeprAmt, 1, "i");
    ds_depositRulesDetail.setCellData(row, "yyDepositInt", scwin.f_Round(yyDepositInt, 1, "F"));
    ds_depositRulesDetail.setCellData(row, "mmDepositInt", mmDepositInt);
    ds_depositRulesDetail.setCellData(row, "yyDeprAmt", scwin.f_Round(yyDeprAmt, 1, "F"));
    ds_depositRulesDetail.setCellData(row, "mmDeprAmt", mmDeprAmt);

    //합계표시
    ds_depositRulesDetail.setCellData(row, "yyDeprAmt1", scwin.f_Round(yyDeprAmt - yyDepositInt, 1, "F"));
    ds_depositRulesDetail.setCellData(row, "mmDeprAmt1", mmDeprAmt - mmDepositInt);
  } else if (mode == "B") {
    // 보증금 이자율 입력시
    for (var i = 0; i < ds_depositRulesDetail.getRowCount(); i++) {
      yyDepositInt = parseFloat((ds_depositRulesDetail.getCellData(i, "deposit") * ed_depositIntRt.getValue()).toFixed(4));
      mmDepositInt = yyDepositInt / 12;
      mmDepositInt = scwin.f_Round(mmDepositInt, 1, "i");
      ds_depositRulesDetail.setCellData(i, "yyDepositInt", scwin.f_Round(yyDepositInt, 1, "F"));
      ds_depositRulesDetail.setCellData(i, "mmDepositInt", mmDepositInt);

      // 감가상각비 - 보증금 이자 재계산
      yyDeprAmt = ds_depositRulesDetail.getCellData(i, "yyDeprAmt");
      mmDeprAmt = ds_depositRulesDetail.getCellData(i, "mmDeprAmt");
      let yyDeprAmt1 = parseFloat(yyDeprAmt) - yyDepositInt;
      ds_depositRulesDetail.setCellData(i, "yyDeprAmt1", scwin.f_Round(yyDeprAmt1, 1, "F"));
      ds_depositRulesDetail.setCellData(i, "mmDeprAmt1", mmDeprAmt - mmDepositInt);
    }
  } else if (mode == "C") {
    // 차량감가상각 산출율 입력시
    for (var i = 0; i < ds_depositRulesDetail.getRowCount(); i++) {
      yyDeprAmt = parseFloat((ds_depositRulesDetail.getCellData(i, "deposit") * ed_vehclDeprRt.getValue()).toFixed(4));
      mmDeprAmt = yyDeprAmt / 12;
      mmDeprAmt = scwin.f_Round(mmDeprAmt, 1, "i");
      ds_depositRulesDetail.setCellData(i, "yyDeprAmt", scwin.f_Round(yyDeprAmt, 1, "F"));
      ds_depositRulesDetail.setCellData(i, "mmDeprAmt", mmDeprAmt);

      // 감가상각비 - 보증금 이자 재계산
      yyDepositInt = ds_depositRulesDetail.getCellData(i, "yyDepositInt");
      mmDepositInt = ds_depositRulesDetail.getCellData(i, "mmDepositInt");
      let yyDeprAmt1 = parseFloat(yyDeprAmt) - yyDepositInt;
      ds_depositRulesDetail.setCellData(i, "yyDeprAmt1", scwin.f_Round(yyDeprAmt1, 1, "F"));
      ds_depositRulesDetail.setCellData(i, "mmDeprAmt1", mmDeprAmt - mmDepositInt);
    }
  }
};
scwin.f_Round = function (Num, Position, Base) {
  // Num = 반올림할 수
  // Position = 반올림할 자릿수(정수로만)
  // Base = i 이면 소숫점위의 자릿수에서, f 이면 소숫점아래의 자릿수에서 반올림

  if (Position == 0) {
    // 1이면 소숫점1 자리에서 반올림
    return Math.round(Num);
  } else if (Position > 0) {
    let cipher = '1';
    for (var i = 0; i < Position; i++) cipher = cipher + '0';
    let no = Number(cipher);
    if (Base == "F") {
      // 소숫점아래에서 반올림
      return Math.round(Num * no) / no;
    } else {
      // 소숫점위에서 반올림.
      return Math.round(Num / no) * no;
    }
  } else {
    $c.gus.cfAlertMsg($p, "자릿수는 정수로만 구분합니다.");
    return false;
  }
};

//저장
scwin.b_Save_onclick = async function (e) {
  // 필수 입력 체크
  if (!(await $c.gus.cfValidate($p, [ed_vehclRegStDt, ed_vehclRegEndDt, ed_depositIntRt, ed_vehclDeprRt]))) {
    return;
  }

  // 차량 등록일 기간 from ~ to 체크
  if (!$c.gus.cfIsAfterDate($p, ed_vehclRegStDt.getValue(), ed_vehclRegEndDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    return;
  }
  if ($c.gus.cfIsNull($p, ed_depositIntRt.getValue()) || ed_depositIntRt.getValue() == 0) {
    $c.gus.cfAlertMsg($p, "보증금 이자율을 입력하십시오.");
    ed_depositIntRt.focus();
    return;
  } else if ($c.gus.cfIsNull($p, ed_vehclDeprRt.getValue()) || ed_vehclDeprRt.getValue() == 0) {
    $c.gus.cfAlertMsg($p, "차량감가상각 산출율을 입력하십시오.");
    ed_vehclDeprRt.focus();
    return;
  }

  // 연차별 보증금
  if (!(await $c.gus.cfValidate($p, [gr_depositRulesDetail]))) {
    return;
  }
  if (ed_depositAdptYy.getValue() == "" || ed_depositAdptCd.getValue() == "") {
    ds_depositRules.setCellData(ds_depositRules.getRowPosition(), "depositAdptClsCd", "");
  } else {
    ds_depositRules.setCellData(ds_depositRules.getRowPosition(), "depositAdptClsCd", ed_depositAdptYy.getValue() + "-" + ed_depositAdptCd.getValue());
  }
  let depositAdptClsCd;
  if (ed_depositAdptYy.getValue() == "" || ed_depositAdptCd.getValue() == "") {
    depositAdptClsCd = "";
  } else {
    depositAdptClsCd = ed_depositAdptYy.getValue() + "-" + ed_depositAdptCd.getValue();
  }
  let row = ds_depositRules.getRowPosition();
  for (var i = 0; i < ds_depositRules.getRowCount(); i++) {
    if (i != row) {
      if (ds_depositRules.getCellData(i, "depositAdptClsCd") == depositAdptClsCd) {
        $c.win.alert($p, "적용구분 중복입니다. 확인하세요!");
        return;
      }
    }
  }

  // 버튼 선택 구분
  if (scwin.btnFlag == "insert") {
    if (ds_depositRulesDetail.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, "연차별 보증금을 입력하십시오.");
      return;
    }
  } else if (scwin.btnFlag == "update") {
    ds_depositRules.modifyRowStatus(ds_depositRules.getRowPosition(), "U");
    ds_depositRulesDetail.modifyAllStatus("C");
  }
  let confirm = await $c.win.confirm($p, "저장하시겠습니까?");
  if (confirm) {
    scwin.rowFlag = "SAVE";
    scwin.pos_groupCode = ds_depositRules.getRowPosition();
    let row = ds_depositRules.getRowPosition();
    let stDt = ed_vehclRegStDt.getValue(); // "20060101"
    let endDt = ed_vehclRegEndDt.getValue(); // "99991231"

    // vehclRegDt: "2006/01/01 ~ 9999/12/31" 형식으로 포맷
    let stDtFmt = stDt.substring(0, 4) + "/" + stDt.substring(4, 6) + "/" + stDt.substring(6, 8);
    let endDtFmt = endDt.substring(0, 4) + "/" + endDt.substring(4, 6) + "/" + endDt.substring(6, 8);
    ds_depositRules.setCellData(row, "vehclRegStDt", stDt);
    ds_depositRules.setCellData(row, "vehclRegEndDt", endDt);
    ds_depositRules.setCellData(row, "vehclRegDt", stDtFmt + " ~ " + endDtFmt);
    if (scwin.btnFlag == "insert") {
      $c.sbm.execute($p, sbm_insert);
    } else {
      $c.sbm.execute($p, sbm_update);
    }
  }
};
//한글입력방지
scwin.ed_depositIntRt_onkeyup = function (e) {
  let val = this.getValue();
  this.setValue(val.replace(/[^0-9.]/g, ''));
};
scwin.ed_vehclDeprRt_onkeyup = function (e) {
  let val = this.getValue();
  this.setValue(val.replace(/[^0-9.]/g, ''));
};

// 소수점 앞자리 최대 7자리, 소수점 이하 최대 4자리 제한
scwin.fn_limitDecimal = function (value) {
  if ($c.gus.cfIsNull($p, value)) return "";
  var maxIntLen = 7; // 소수점 앞자리 최대 7자리
  var maxDecLen = 4; // 소수점 이하 최대 4자리

  // 콤마 제거 후 처리
  var strValue = value.toString().replace(/,/g, "");

  // 음수 여부 확인
  var isNegative = strValue.indexOf("-") !== -1;
  var absValue = strValue.replace("-", "");
  var parts = absValue.split(".");
  var intPart = parts[0];

  // 소수점 앞자리 최대 7자리 제한 (-부호 제외하고 계산)
  if (intPart.length > maxIntLen) {
    intPart = intPart.substring(0, maxIntLen);
  }

  // 소수점 이하 최대 4자리 제한 (0으로 채우지 않음)
  var decPart = parts.length > 1 ? "." + parts[1].substring(0, maxDecLen) : "";

  // 천단위 콤마 적용
  var formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // 음수면 - 부호 다시 붙임
  return (isNegative ? "-" : "") + formatted + decPart;
};
scwin.gr_depositRulesDetail_oneditend = function (rowIndex, columnIndex, value) {
  let columnId = gr_depositRulesDetail.getColumnID(columnIndex);
  let yyDepositInt = columnId == "yyDepositInt" ? Number(value) : Number(ds_depositRulesDetail.getCellData(rowIndex, "yyDepositInt"));
  let mmDepositInt = columnId == "mmDepositInt" ? Number(value) : Number(ds_depositRulesDetail.getCellData(rowIndex, "mmDepositInt"));
  let yyDeprAmt = columnId == "yyDeprAmt" ? Number(value) : Number(ds_depositRulesDetail.getCellData(rowIndex, "yyDeprAmt"));
  let mmDeprAmt = columnId == "mmDeprAmt" ? Number(value) : Number(ds_depositRulesDetail.getCellData(rowIndex, "mmDeprAmt"));
  if (columnId == "yyDepositInt" || columnId == "yyDeprAmt") {
    ds_depositRulesDetail.setCellData(rowIndex, "yyDeprAmt1", Math.round(yyDeprAmt - yyDepositInt));
    gr_depositRulesDetail.refreshRow(rowIndex);
  } else if (columnId == "mmDepositInt" || columnId == "mmDeprAmt") {
    ds_depositRulesDetail.setCellData(rowIndex, "mmDeprAmt1", Math.round(mmDeprAmt - mmDepositInt));
    gr_depositRulesDetail.refreshRow(rowIndex);
  }
};
scwin.sbm_delete_submitdone = async function (e) {
  scwin.rowFlag = "";
  scwin.btnFlag = "";
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_RetrieveDepositRules();
};
scwin.sbm_insert_submitdone = async function (e) {
  scwin.rowFlag = "";
  scwin.btnFlag = "";
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_RetrieveDepositRules();
};
scwin.sbm_update_submitdone = async function (e) {
  scwin.rowFlag = "";
  scwin.btnFlag = "";

  // responseJSON에서 resultDataSet 추출
  var resultDataSet = e.responseJSON.resultDataSet;
  if (!resultDataSet || resultDataSet.length === 0) {
    return;
  }

  // 첫번째 행 = Result (성공/실패 여부)
  var result = resultDataSet[0];
  if (result.Msg === "SUCC") {
    // 성공
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  }
  scwin.f_RetrieveDepositRules();
};
scwin.f_depositAdptClsCd = function () {
  let vehclRegStDt = ed_vehclRegStDt.getValue();
  vehclRegStDt = vehclRegStDt.substring(0, 4);
  ed_depositAdptYy.setValue(vehclRegStDt);
};
scwin.udc_fromToCalendar_onBlur = function () {
  scwin.f_depositAdptClsCd();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 25%;'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox gvwflex'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'false',checkAllType:'false',dataList:'data:ds_depositRules',style:'',autoFit:'allColumn',id:'gr_depositRules',class:'wq_gvw',readOnly:'true',focusMode:'cell',focusMove:'true','ev:onrowindexchange':'scwin.gr_depositRules_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column1',value:'적용구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column17',value:'차량 등록일 기간',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'depositAdptClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'vehclRegDt',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'total',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:150px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'차량 등록일 기간',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_vehclRegStDt',edToId:'ed_vehclRegEndDt',mandatoryFrom:'true',mandatoryTo:'true','ev:onBlurFrom':'scwin.udc_fromToCalendar_onBlur',titleFrom:'차량등록시작일자',titleTo:'차량등록종료일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'보증금 이자율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_depositIntRt',placeholder:'',style:'width:100px;',mandatory:'true',ref:'data:ds_depositRules.depositIntRt','ev:onblur':'scwin.ed_depositIntRt_onblur',dataType:'number',allowChar:'0-9.',displayFormat:'#,###.####',title:'보증금 이자율',applyFormat:'all',displayFormatter:'scwin.fn_limitDecimal'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'보증금 적용구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_depositAdptYy',placeholder:'',class:'tac',maxlength:'4',allowChar:'0-9',ref:'data:ds_depositRules.depositAdptYy'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'-',class:''}},{T:1,N:'xf:input',A:{style:'width:30px;',id:'ed_depositAdptCd',placeholder:'',class:'tac',maxlength:'2',allowChar:'0-9',ref:'data:ds_depositRules.depositAdptCd'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량감가상각 산출율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_vehclDeprRt',placeholder:'',style:'width:100px;',mandatory:'true',ref:'data:ds_depositRules.vehclDeprRt','ev:onblur':'scwin.ed_vehclDeprRt_onblur',allowChar:'0-9.',dataType:'number',displayFormat:'#,###.####',title:'차량감가상각 산출율',applyFormat:'all',displayFormatter:'scwin.fn_limitDecimal'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_depositRulesDetail',style:'',autoFit:'allColumn',id:'gr_depositRulesDetail',visibleRowNum:'13',class:'wq_gvw',focusMode:'cell',focusMove:'true',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_depositRulesDetail_onafteredit','ev:oneditend':'scwin.gr_depositRulesDetail_oneditend'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column1',value:'개월',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'보증금',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column15',value:'보증금 이자',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column11',value:'감가상각비',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column3',value:'감가상각비 - 보증금 이자',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'연간',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column27',value:'월',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'연간',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column25',value:'월',displayMode:'label',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'연간',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column23',value:'월',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'month',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'deposit',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',mandatory:'true',maxLength:'13'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'yyDepositInt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',mandatory:'true',maxLength:'13'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'mmDepositInt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',mandatory:'true',maxLength:'13'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'yyDeprAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',mandatory:'true',maxLength:'13'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'mmDeprAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',mandatory:'true',maxLength:'13'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'yyDeprAmt1',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'mmDeprAmt1',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'total2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_depositRulesDetail',id:'udc_bottomGrdBtn',rowAddFunction:'scwin.addRow',rowDelFunction:'scwin.delRow',cancelFunction:'scwin.undo',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',btnDelYn:'N'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Create',label:'저장',style:'',type:'button','ev:onclick':'scwin.b_Create_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Update',label:'저장',style:'',type:'button','ev:onclick':'scwin.b_Update_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Cancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.b_Cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.b_Save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.b_Delete_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]}]}]}]})