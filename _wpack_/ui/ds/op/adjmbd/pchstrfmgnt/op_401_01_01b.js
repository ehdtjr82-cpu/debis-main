/*amd /ui/ds/op/adjmbd/pchstrfmgnt/op_401_01_01b.xml 59830 e7cbb1d1ed510c6ca664d78593a22ceb1c5a55a22a8cd1253dd6778e42b6a0d1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_LkStepNo1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieve',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCdNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCdNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtc',name:'거리\\\\(Km)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용\\\\일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'만기\\\\일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt45Full',name:'FULL',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt45Empty',name:'EMPTY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt40Full',name:'FULL',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt40Empty',name:'EMPTY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt20FullHeavy',name:'FULL',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt20EmptyHeavy',name:'EMPTY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt20FullLight',name:'FULL',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt20EmptyLight',name:'EMPTY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt20FullCombine',name:'FULL',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt20EmptyCombine',name:'EMPTY',dataType:'number'}},{T:1,N:'w2:column',A:{id:'gubun',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarBranCd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpKey',name:'',dataType:'text',importFormatter:'scwin.importFormatter'}},{T:1,N:'w2:column',A:{id:'grpKey2',name:'',dataType:'text',importFormatter:'scwin.importFormatter2'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'branCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDistrictCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvDistrictCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kndCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_LkStepNo2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_odrKnd',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_LkStepNo1","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_odrKnd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.adjmbd.pchstrfmgnt.RetrieveContainerCommonTpchsTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_retrieve","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieve","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_odrKnd_grid',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_LkStepNo2","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_odrKnd_grid_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.adjmbd.pchstrfmgnt.RegistContainerCommonTpchsTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"all","id":"ds_retrieve","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:'',userData1:'noError'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_401_01_01b
// 이름     : 컨테이너공통하불등록
// 경로     : 물류/공통(통합)/매입요율/운송/컨테이너공통하불등록
// 작 성 자 : 최지수
// 작 업 일 : 2026-03-27
//==================================================================================================================

scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.lobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); //  물류상위점소코드

scwin.singleAddSeq = 0;
scwin.onpageload = function () {
  grp_totalCnt.setStyle("display", "none");
  total.setValue("");
  ica_ed_adptDt.setValue(scwin.strCurDate);
  ica_ed_instDt.setValue(scwin.strCurDate);
  acb_co_lc_kindCd.setValue("A");
  acb_co_lc_rateCls.setValue("N");

  //점소콤보 조회
  $c.sbm.execute($p, sbm_lobran);

  /*오더종류 setting*/
  let param = "SD113";
  sbm_odrKnd.action = "/cm.zz.RetrieveComboCMD.do?sysCd=CommonEBC&queryId=retrieveSysCdTest_eqCode&param1=" + param;
  $c.sbm.execute($p, sbm_odrKnd);

  /*grid*/
  sbm_odrKnd_grid.action = "/cm.zz.RetrieveComboCMD.do?sysCd=CommonEBC&queryId=retrieveSysCdTest_eqCode&param1=" + param;
  $c.sbm.execute($p, sbm_odrKnd_grid);
};
scwin.sbm_odrKnd_submitdone = function () {
  let dltStr = "ds_LkStepNo1"; //grpCd : "SD113" 값중에서 조건
  let dlt = $c.gus.object($p, dltStr);
  $c.data.dataListFilter($p, dlt, "cd.substring(0,1) == 'C'");
  ds_LkStepNo1.insertRow(0);
  ds_LkStepNo1.setCellData(0, "cd", "");
  ds_LkStepNo1.setCellData(0, "cdNm", "전체");
};

//grid용 오더 callback.
scwin.sbm_odrKnd_grid_submitdone = function () {
  let dltStr = "ds_LkStepNo2"; //grpCd : "SD113" 값중에서 조건
  let dlt = $c.gus.object($p, dltStr);
  $c.data.dataListFilter($p, dlt, "cd.substring(0,1) == 'C'");
  ds_LkStepNo2.insertRow(0);
  ds_LkStepNo2.setCellData(0, "cd", "99");
  ds_LkStepNo2.setCellData(0, "cdNm", "전체");
};

//점소 callback
scwin.sbm_lobran_submitdone = function () {
  acb_lc_branCd.setValue(scwin.lobranCd);
  acb_lc_odrKndCd.setSelectedIndex(0);
  acb_co_lc_kindCd.setSelectedIndex(0);
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  acb_lc_branCd.setValue(scwin.lobranCd);
  ica_ed_adptDt.setValue("");
  ica_ed_instDt.setValue(scwin.strCurDate);
  $c.gus.cfInitObjects($p, tbl_search, [ica_ed_adptDt, acb_lc_branCd, ica_ed_instDt]);
  scwin.singleAddSeq = 0;
};
scwin.getBaseRow = function (rowIndex) {
  const grpKey = ds_retrieve.getCellData(rowIndex, "grpKey");
  if (!grpKey) return rowIndex;

  // 신규 추가행 그룹
  if (String(grpKey).indexOf("ADD_") === 0) {
    for (let i = rowIndex; i >= 0; i--) {
      if (ds_retrieve.getCellData(i, "grpKey") !== grpKey) {
        return i + 1;
      }
    }
    return 0;
  }

  // 조회행 그룹
  for (let i = rowIndex; i >= 0; i--) {
    if (ds_retrieve.getCellData(i, "grpKey") !== grpKey) {
      return i + 1;
    }
  }
  return 0;
};
scwin.ensureRowsForBase = function (base) {
  const rc = ds_retrieve.getRowCount();
  if (base > rc) base = rc;
  if (ds_retrieve.getRowCount() <= base + 1) {
    ds_retrieve.insertRow(base + 1);
  }
  if (ds_retrieve.getRowCount() <= base + 2) {
    ds_retrieve.insertRow(base + 2);
  }
  ds_retrieve.setCellData(base, "gubun", "1");
  ds_retrieve.setCellData(base + 1, "gubun", "2");
  ds_retrieve.setCellData(base + 2, "gubun", "3");

  // grpKey: 비어있는 행만 세팅 (이전 split 보존)
  let key = ds_retrieve.getCellData(base, "grpKey");
  if (!key) {
    key = String(Math.floor(base / 3));
    ds_retrieve.setCellData(base, "grpKey", key);
  }
  if (!ds_retrieve.getCellData(base + 1, "grpKey")) {
    ds_retrieve.setCellData(base + 1, "grpKey", key);
  }
  if (!ds_retrieve.getCellData(base + 2, "grpKey")) {
    ds_retrieve.setCellData(base + 2, "grpKey", key);
  }

  // grpKey2: 비어있는 행만 세팅 (이전 split 보존)
  let key2 = ds_retrieve.getCellData(base, "grpKey2");
  if (!key2) {
    key2 = String(Math.floor(base / 3));
    ds_retrieve.setCellData(base, "grpKey2", key2);
  }
  if (!ds_retrieve.getCellData(base + 1, "grpKey2")) {
    ds_retrieve.setCellData(base + 1, "grpKey2", key2);
  }
  if (!ds_retrieve.getCellData(base + 2, "grpKey2")) {
    ds_retrieve.setCellData(base + 2, "grpKey2", key2);
  }
};

// 출발지/도착지/거리 변경 시 기존값을 2행(base+1)으로 내림 + 머지 분리
// colPairs: [{col: "colName", oldVal: "val"}, ...]
// 2행은 값만 복사하고 rowStatus는 변경하지 않음
// WebSquare 머지 편집이 3행에 넣은 값/status를 편집 전 상태로 되돌림
scwin.restoreRow3 = function (base) {
  if (!scwin._beforeEditValues || !scwin._beforeEditValues.row3Backup) return;
  var backup = scwin._beforeEditValues.row3Backup;
  var colCount = ds_retrieve.getColumnCount();
  for (var ci = 0; ci < colCount; ci++) {
    var cid = ds_retrieve.getColumnID(ci);
    if (backup[cid] !== undefined) {
      ds_retrieve.setCellData(base + 2, cid, backup[cid]);
    }
  }
  // status 원복 시도
  // rowStatus는 restoreRow3에서 값 복원으로 처리
  gr_retrieve.refreshRow(base + 2);
};
scwin.shiftDownGrpKey2Fields = function (base, colPairs) {
  scwin.ensureRowsForBase(base);

  // onbeforeedit에서 저장한 편집 전 rowStatus 사용
  var row2Status = scwin._beforeEditValues ? scwin._beforeEditValues.row2Status : ds_retrieve.getRowStatus(base + 1);
  for (var i = 0; i < colPairs.length; i++) {
    // 2행: 기존값 복사
    ds_retrieve.setCellData(base + 1, colPairs[i].col, colPairs[i].oldVal);
  }

  // 2행 rowStatus 원복
  // setRowStatus는 WebSquare에 없으므로 생략

  // 3행 복원 (WebSquare 머지 편집이 바꾼 값/status 되돌림)
  scwin.restoreRow3(base);

  // base의 grpKey2만 변경 → 1행만 분리, 2행+3행은 기존 머지 유지
  ds_retrieve.setCellData(base, "grpKey2", ds_retrieve.getCellData(base, "grpKey2") + "_" + new Date().getTime());
  gr_retrieve.refreshRow(base);
  gr_retrieve.refreshRow(base + 1);
};

// 팝업에서 정상 선택 시: 3행 모두 동일값 세팅 + grpKey2 복원 → 머지 유지 (ASIS 동일)
// colPairs: [{col: "colName", val: "val"}, ...]
scwin.syncAllRowsGrpKey2 = function (base, colPairs) {
  scwin.ensureRowsForBase(base);
  // 3행 모두 동일값 세팅 (ASIS: row, row+1, row+2 모두 동일값)
  for (var i = 0; i < colPairs.length; i++) {
    ds_retrieve.setCellData(base, colPairs[i].col, colPairs[i].val);
    ds_retrieve.setCellData(base + 1, colPairs[i].col, colPairs[i].val);
    ds_retrieve.setCellData(base + 2, colPairs[i].col, colPairs[i].val);
  }
  // grpKey2 복원 (base+2는 변경된 적 없으므로 원본 키)
  var origKey2 = ds_retrieve.getCellData(base + 2, "grpKey2");
  ds_retrieve.setCellData(base, "grpKey2", origKey2);
  ds_retrieve.setCellData(base + 1, "grpKey2", origKey2);
  gr_retrieve.refreshRow(base);
  gr_retrieve.refreshRow(base + 1);
  gr_retrieve.refreshRow(base + 2);
};

//조회
scwin.btn_retrieve_onclick = function (e) {
  if (acb_lc_branCd.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["배차점소"]);
    acb_lc_branCd.focus();
    return;
  }

  //dataMap setting
  dma_condition.set("adptDt", ica_ed_adptDt.getValue()); // 적용일자
  dma_condition.set("odrKndCd", acb_lc_odrKndCd.getValue()); // 오더종류
  dma_condition.set("branCd", acb_lc_branCd.getValue()); // 배차점소
  dma_condition.set("dptDistrictCd", ed_dptDistrictCd.getValue()); // 권역 출발지
  dma_condition.set("arvDistrictCd", ed_arvDistrictCd.getValue()); // 권역 도착지
  dma_condition.set("dptWrkPlCd", ed_dptDistrictCd.getValue()); //  작업장 출발지 
  dma_condition.set("arvWrkPlCd", ed_arvDistrictCd.getValue()); //  작업장 도착지 
  dma_condition.set("kndCd", acb_co_lc_kindCd.getValue()); // 작업장,권역,지역		

  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_retrieve.getRowCount();
  grp_totalCnt.setStyle("display", "");
  total.setValue(nCnt);
  if (nCnt <= 0) {
    $c.win.alert($p, "조회된 데이타가 없습니다.");
    return;
  }

  // importFormatter가 grpKey를 자동 세팅하므로 수동 설정/rowStatus 복구 불필요

  // 건수는 3행 1세트 기준
  let cnt = Math.ceil(nCnt / 3);
  total.setValue(cnt);
  gr_retrieve.setFocusedCell(0, 0);
  gr_retrieve.refresh();

  // 3행 기준 행 색상 교대 적용
  scwin.applyRowColors();
  scwin.singleAddSeq = 0;
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : 출발지/도착지 + (권역/작업장) 분기
// disGubun: 1=출발지, 2=도착지
// pClose: "T"(단건조회/자동조회) or "F"(목록팝업)
// pAllSearch: "F"(단건) or "T"(전체/목록)
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  const kind = (acb_co_lc_kindCd.getValue() || "").trim(); // A=권역, B=작업장
  const rateCls = (acb_co_lc_rateCls.getValue() || "").trim();

  // 출발/도착 UDC & callback 선택
  const isDpt = disGubun === 1;
  const udc = isDpt ? udc_comCode_dpt : udc_comCode_arv;
  const cb = isDpt ? scwin.udc_comCode_dpt_callBackFunc : scwin.udc_comCode_arv_callBackFunc;

  // ----- A: 권역(지역) -----
  if (kind === "A") {
    let pWhere = ",,WDE,,,,,PEX";
    if (rateCls === "Y") pWhere = ",,NWD,,,,,NPX";
    udc.setSelectId("retrieveDistrictList");
    udc.cfCommonPopUp(cb, pCode, pName, pClose, "5", "지역코드,지역명", "150,210", null, pWhere, "440", "500", null, null, null, "F", "지역,지역코드,지역명");
    return;
  }

  // ----- B: 작업장 -----
  udc.setSelectId("retrieveWrkPlInfo");
  udc.cfCommonPopUp(cb, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
};

//조회 pop --> 출도착지 구분에 따라 팝업 변경 
scwin.udc_comCode_dpt_onclickEvent = function (e) {
  const code = (ed_dptDistrictCd.getValue() || "").trim();
  const name = (ed_dptDistrictNm.getValue() || "").trim();
  if (code === "" && name === "") {
    scwin.f_openCommonPopUp(1, "", "", "F", "T");
    return;
  }
  if (/^[A-Za-z0-9]{3}$/.test(code)) {
    scwin.f_openCommonPopUp(1, code, "", "T", "F");
    return;
  }
  if (name !== "") {
    scwin.f_openCommonPopUp(1, "", name, "T", "F");
    return;
  }
  scwin.f_openCommonPopUp(1, code, "", "F", "T");
};

//출발지.callback
scwin.udc_comCode_dpt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_dptDistrictCd, ed_dptDistrictNm);
};
scwin.udc_comCode_dpt_onblurCodeEvent = function (e) {
  const code = (ed_dptDistrictCd.getValue() || "").trim();
  const name = (ed_dptDistrictNm.getValue() || "").trim();
  if (code === "") {
    ed_dptDistrictNm.setValue("");
    return;
  }

  // 3자리 영숫자면 단건 자동조회
  if (/^[A-Za-z0-9]{3}$/.test(code)) {
    scwin.f_openCommonPopUp(1, code, "", "T", "F");
    return;
  }

  // 부분코드면 목록팝업
  scwin.f_openCommonPopUp(1, code, name, "F", "T");
};
scwin.udc_comCode_dpt_onviewchangeNameEvent = function (info) {
  const code = (ed_dptDistrictCd.getValue() || "").trim();
  const name = (ed_dptDistrictNm.getValue() || "").trim();
  if (name === "") {
    ed_dptDistrictCd.setValue("");
    return;
  }

  // 이름으로 단건 자동조회 시도
  scwin.f_openCommonPopUp(1, "", name, "T", "F");
};

//조회 pop --> 출도착지 구분에 따라 팝업 변경
scwin.udc_comCode_arv_onclickEvent = function (e) {
  const code = (ed_arvDistrictCd.getValue() || "").trim();
  const name = (ed_arvDistrictNm.getValue() || "").trim();
  if (code === "" && name === "") {
    scwin.f_openCommonPopUp(2, "", "", "F", "T");
    return;
  }
  if (/^[A-Za-z0-9]{3}$/.test(code)) {
    scwin.f_openCommonPopUp(2, code, "", "T", "F");
    return;
  }
  if (name !== "") {
    scwin.f_openCommonPopUp(2, "", name, "T", "F");
    return;
  }
  scwin.f_openCommonPopUp(2, code, "", "F", "T");
};

//도착지 callback
scwin.udc_comCode_arv_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_arvDistrictCd, ed_arvDistrictNm);
};
scwin.udc_comCode_arv_onblurCodeEvent = function (e) {
  const code = (ed_arvDistrictCd.getValue() || "").trim();
  const name = (ed_arvDistrictNm.getValue() || "").trim();
  if (code === "") {
    ed_arvDistrictNm.setValue("");
    return;
  }
  if (/^[A-Za-z0-9]{3}$/.test(code)) {
    scwin.f_openCommonPopUp(2, code, "", "T", "F");
    return;
  }
  scwin.f_openCommonPopUp(2, code, name, "F", "T");
};
scwin.udc_comCode_arv_onviewchangeNameEvent = function (info) {
  const code = (ed_arvDistrictCd.getValue() || "").trim();
  const name = (ed_arvDistrictNm.getValue() || "").trim();
  if (name === "") {
    ed_arvDistrictCd.setValue("");
    return;
  }
  scwin.f_openCommonPopUp(2, "", name, "T", "F");
};
scwin.getOrgCell = function (rowIndex, colId) {
  if (typeof ds_retrieve.getOriginalCellData === "function") {
    return ds_retrieve.getOriginalCellData(rowIndex, colId);
  }
  if (typeof ds_retrieve.getOrgCellData === "function") {
    return ds_retrieve.getOrgCellData(rowIndex, colId);
  }
  return ds_retrieve.getCellData(rowIndex, colId);
};

//일괄생성
scwin.btn_createAll_onclick = function (e) {
  const cols = ["pchsAmt45Full", "pchsAmt45Empty", "pchsAmt40Full", "pchsAmt40Empty", "pchsAmt20FullHeavy", "pchsAmt20EmptyHeavy", "pchsAmt20FullLight", "pchsAmt20EmptyLight", "pchsAmt20FullCombine", "pchsAmt20EmptyCombine"];
  const newAdptDt = ica_ed_instDt.getValue();
  const rate = Number(ed_rate.getValue() || 0);
  for (let row = 0; row < ds_retrieve.getRowCount(); row++) {
    const gubun = (ds_retrieve.getCellData(row, "gubun") || "").trim();
    if (gubun !== "1") continue;
    const base = scwin.getBaseRow(row);
    scwin.ensureRowsForBase(base);

    // 원본/신규 적용일자 분리해서 보관
    const orgAdptDt = scwin.getOrgCell(base, "adptDt"); // 조회로 온 원본 적용일자

    // 원본은 "기존 2행"이 우선, 없으면 1행
    // (이미 일괄생성을 한 번 한 상태면 2행에 '직전 원본'이 남아있다고 가정)
    // const hasPrevOriginal =
    //     (ds_retrieve.getCellData(base + 1, "adptDt") || "").trim() !== "" &&
    //     ds_retrieve.getCellData(base + 1, "gubun") === "2";

    // 2행(원본) 채우기
    ds_retrieve.setCellData(base + 1, "gubun", "2");
    ds_retrieve.setCellData(base + 1, "alloccarBranCd", ds_retrieve.getCellData(base, "lobranCd"));
    ds_retrieve.setCellData(base + 1, "odrKndCd", ds_retrieve.getCellData(base, "odrKndCd"));
    ds_retrieve.setCellData(base + 1, "dptDistrictCdNm", ds_retrieve.getCellData(base, "dptDistrictCdNm"));
    ds_retrieve.setCellData(base + 1, "arvDistrictCdNm", ds_retrieve.getCellData(base, "arvDistrictCdNm"));
    ds_retrieve.setCellData(base + 1, "dtc", ds_retrieve.getCellData(base, "dtc"));
    // ds_retrieve.setCellData(base + 1, "adptDt", ds_retrieve.getCellData(base, "adptDt"));
    ds_retrieve.setCellData(base + 1, "adptDt", orgAdptDt);

    // 만기일자 = 신규적용일자 - 1일 (ASIS 동일)
    var expireBase = (newAdptDt || "").replaceAll("/", "");
    try {
      ds_retrieve.setCellData(base + 1, "expireDt", WebSquare.date.add(expireBase, -1, "day"));
    } catch (e) {
      ds_retrieve.setCellData(base + 1, "expireDt", orgAdptDt);
    }

    // 원본 금액 복사
    for (const c of cols) {
      ds_retrieve.setCellData(base + 1, c, ds_retrieve.getCellData(base, c));
    }

    // --------------------
    // 1행(신규) = 신규일자 + (원본(2행) * rate/100)
    // --------------------
    ds_retrieve.setCellData(base, "gubun", "1");
    ds_retrieve.setCellData(base, "adptDt", newAdptDt);
    for (const c of cols) {
      const v = Number(ds_retrieve.getCellData(base + 1, c) || 0);
      ds_retrieve.setCellData(base, c, v * rate / 100);
    }

    // --------------------
    // 3행(적용율) = rate 표시 + 날짜는 "원본 날짜"로 (AS-IS처럼 공통값 유지)
    // --------------------
    ds_retrieve.setCellData(base + 2, "gubun", "3");
    ds_retrieve.setCellData(base + 2, "odrKndCd", ds_retrieve.getCellData(base, "odrKndCd"));
    ds_retrieve.setCellData(base + 2, "dptDistrictCdNm", ds_retrieve.getCellData(base + 1, "dptDistrictCdNm"));
    ds_retrieve.setCellData(base + 2, "arvDistrictCdNm", ds_retrieve.getCellData(base + 1, "arvDistrictCdNm"));
    ds_retrieve.setCellData(base + 2, "dtc", ds_retrieve.getCellData(base + 1, "dtc"));
    ds_retrieve.setCellData(base + 2, "adptDt", "");
    for (const c of cols) {
      ds_retrieve.setCellData(base + 2, c, rate);
    }
  }
};

//행추가
scwin.addRow = function () {
  if (ds_retrieve.getRowCount() == 0) {
    return;
  }
  let nRow = ds_retrieve.insertRow();
  gr_retrieve.setFocusedCell(nRow, 0);

  // 추가 순번 기준으로 3개씩 같은 그룹
  const grpNo = Math.floor(scwin.singleAddSeq / 3);
  const grpKey = "ADD_" + grpNo;

  // odrKndCd
  ds_retrieve.setCellData(nRow, "gubun", "1");
  ds_retrieve.setCellData(nRow, "grpKey", grpKey);
  ds_retrieve.setCellData(nRow, "grpKey2", grpKey);
  ds_retrieve.setCellData(nRow, "odrKndCd", "99");
  ds_retrieve.setCellData(nRow, "alloccarBranCd", acb_lc_branCd.getValue());
  ds_retrieve.setCellData(nRow, "adptDt", ica_ed_adptDt.getValue());
  ds_retrieve.setCellData(nRow, "dptDistrictCd", ed_dptDistrictCd.getValue());
  ds_retrieve.setCellData(nRow, "dptDistrictCdNm", ed_dptDistrictNm.getValue());
  ds_retrieve.setCellData(nRow, "arvDistrictCd", ed_arvDistrictCd.getValue());
  ds_retrieve.setCellData(nRow, "arvDistrictCdNm", ed_arvDistrictNm.getValue());
  ds_retrieve.setCellData(nRow, "expireDt", "99999999"); //Default 값 9999/99/99

  const numCols = ["dtc", "pchsAmt45Full", "pchsAmt45Empty", "pchsAmt40Full", "pchsAmt40Empty", "pchsAmt20FullHeavy", "pchsAmt20EmptyHeavy", "pchsAmt20FullLight", "pchsAmt20EmptyLight", "pchsAmt20FullCombine", "pchsAmt20EmptyCombine"];
  for (let i = 0; i < numCols.length; i++) {
    ds_retrieve.setCellData(nRow, numCols[i], "0");
  }
  scwin.singleAddSeq++;
};

//-------------------------------------------------------------------------
// 그리드 행삭제 (3행 1그룹 기준)
//-------------------------------------------------------------------------
scwin.deleteRow = function () {
  var rowIdx = ds_retrieve.getRowPosition();
  if (rowIdx < 0) return;
  var gubun = (ds_retrieve.getCellData(rowIdx, "gubun") || "").trim();

  // gubun=3(비율행)은 삭제 불가
  if (gubun === "3") return;
  var base = scwin.getBaseRow(rowIdx);

  // 신규 추가행(ADD_) 그룹인 경우: 단건 removeRow
  if (scwin.isSingleNewRow(rowIdx)) {
    if (ds_retrieve.getRowStatus(rowIdx) === "C") {
      ds_retrieve.removeRow(rowIdx);
    } else {
      ds_retrieve.deleteRow(rowIdx);
    }
    return;
  }

  // gubun="1" 선택 시: 1행만 삭제
  // gubun="2" 선택 시: 2행 + 1행 모두 삭제
  if (gubun === "1") {
    if (ds_retrieve.getRowStatus(base) === "C") {
      ds_retrieve.removeRow(base);
    } else {
      ds_retrieve.deleteRow(base);
    }
  } else if (gubun === "2") {
    // 2행(base+1) 먼저 삭제 후 1행(base) 삭제
    if (ds_retrieve.getRowStatus(base + 1) === "C") {
      ds_retrieve.removeRow(base + 1);
    } else {
      ds_retrieve.deleteRow(base + 1);
    }
    if (ds_retrieve.getRowStatus(base) === "C") {
      ds_retrieve.removeRow(base);
    } else {
      ds_retrieve.deleteRow(base);
    }
  }
};
scwin.isSingleNewRow = function (rowIndex) {
  const grpKey = (ds_retrieve.getCellData(rowIndex, "grpKey") || "").trim();
  return grpKey.indexOf("ADD_") === 0;
};

//저장
scwin.btn_save_onclick = async function (e) {
  if (scwin.f_prefareCheck() == false) return;
  let cfrm = await $c.win.confirm($p, "저장하시겠습니까?");
  if (!cfrm) return;
  $c.sbm.execute($p, sbm_save);
};
scwin.f_prefareCheck = function () {
  let row = ds_retrieve.getRowCount();
  for (var i = 0; i < row; i++) {
    var gubun = (ds_retrieve.getCellData(i, "gubun") || "").trim();

    // gubun=2(기존단가), gubun=3(비율행)은 검증 제외 — gubun=1(신규단가) 대표행만 검증
    if (gubun !== "1") {
      continue;
    }
    if (!(ds_retrieve.getCellData(i, "alloccarBranCd") || "").trim()) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["배차점소코드"]);
      return false;
    }
    if (!(ds_retrieve.getCellData(i, "adptDt") || "").trim()) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["적용일자"]);
      return false;
    }
    if (!(ds_retrieve.getCellData(i, "dptDistrictCd") || "").trim()) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["출발권역코드"]);
      return false;
    }
    if (!(ds_retrieve.getCellData(i, "arvDistrictCd") || "").trim()) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["도착권역코드"]);
      return false;
    }
    if (ds_retrieve.getRowStatusValue(i) == "2") {
      //신규
      if (ds_retrieve.getCellData(i, "odrKndCd") == "") {
        ds_retrieve.setCellData(i, "odrKndCd", acb_lc_odrKndCd.getValue());
      }
    }
    if (ds_retrieve.getRowStatusValue(i) != 0) {
      if (ds_retrieve.getCellData(i, "dtc") == 0) {
        $c.win.alert($p, "거리가 0보다 커야 합니다.");
        return false;
      }
      if (ds_retrieve.getCellData(i, "pchsAmt45Full") == 0 && ds_retrieve.getCellData(i, "pchsAmt45Empty") == 0 && ds_retrieve.getCellData(i, "pchsAmt40Full") == 0 && ds_retrieve.getCellData(i, "pchsAmt40Empty") == 0 && ds_retrieve.getCellData(i, "pchsAmt20FullHeavy") == 0 && ds_retrieve.getCellData(i, "pchsAmt20EmptyHeavy") == 0 && ds_retrieve.getCellData(i, "pchsAmt20FullLight") == 0 && ds_retrieve.getCellData(i, "pchsAmt20EmptyLight") == 0 && ds_retrieve.getCellData(i, "pchsAmt20FullCombine") == 0 && ds_retrieve.getCellData(i, "pchsAmt20EmptyCombine") == 0) {
        $c.win.alert($p, "컨테이너 하불단가를 입력 해야  합니다.");
        return false;
      }
    }
  }
  return true;
};

//저장 callback
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON && e.responseJSON.resultDataSet && e.responseJSON.resultDataSet[0]) {
    if (e.responseJSON.resultDataSet[0].Code != 0) {
      var errMsg = "";
      for (var i = 0; i < e.responseJSON.resultDataSet.length; i++) {
        if (e.responseJSON.resultDataSet[i].Type === "ERROR") {
          errMsg = e.responseJSON.resultDataSet[i].Msg;
          break;
        }
      }
      $c.win.alert($p, errMsg || e.responseJSON.resultDataSet[0].Msg);
      return;
    }
  }
  $c.win.alert($p, "성공적으로 처리되었습니다.").then(function () {
    scwin.btn_retrieve_onclick();
  });
};

//grid 출발지 popup
scwin.dp_grid = function (e, pClose) {
  const r0 = typeof e === "number" ? e : ds_retrieve.getRowPosition();
  const closeFlag = pClose || "F";
  const base = scwin.getBaseRow(r0);
  if (!scwin.isSingleNewRow(r0)) {
    scwin.ensureRowsForBase(base);
  }
  const kind = (acb_co_lc_kindCd.getValue() || "").trim();
  const rateCls = (acb_co_lc_rateCls.getValue() || "").trim();
  if (kind === "A") {
    let pWhere = ",,WDE,,,,,PEX";
    if (rateCls === "Y") pWhere = ",,NWD,,,,,NPX";
    udc_comCode_dp_grid.setSelectId("retrieveDistrictList");
    udc_comCode_dp_grid.cfCommonPopUp(function (ret) {
      if (!ret || ret[0] === "N/A") return;
      scwin.syncAllRowsGrpKey2(scwin.getBaseRow(r0), [{
        col: "dptDistrictCd",
        val: ret[0]
      }, {
        col: "dptDistrictCdNm",
        val: ret[1]
      }]);
    }, ds_retrieve.getCellData(r0, "dptDistrictCd"), ds_retrieve.getCellData(r0, "dptDistrictCdNm"), closeFlag, "5", "권역코드,권역명", "150,210", null, pWhere, "440", "500", null, null, null, closeFlag, "지역,지역코드,지역명");
    return;
  }

  // 작업장(B)
  udc_comCode_dp_grid.setSelectId("retrieveWrkPlInfo");
  udc_comCode_dp_grid.cfCommonPopUp(function (ret) {
    if (!ret || ret[0] === "N/A") return;
    scwin.syncAllRowsGrpKey2(scwin.getBaseRow(r0), [{
      col: "dptDistrictCd",
      val: ret[0]
    }, {
      col: "dptDistrictCdNm",
      val: ret[1]
    }]);
  }, ds_retrieve.getCellData(r0, "dptDistrictCd"), ds_retrieve.getCellData(r0, "dptDistrictCdNm"), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
};

//grid 도착지 popup
scwin.ar_grid = function (e, pClose) {
  const r0 = typeof e === "number" ? e : ds_retrieve.getRowPosition();
  const closeFlag = pClose || "F";
  const base = scwin.getBaseRow(r0);
  if (!scwin.isSingleNewRow(r0)) {
    scwin.ensureRowsForBase(base);
  }
  const kind = (acb_co_lc_kindCd.getValue() || "").trim();
  const rateCls = (acb_co_lc_rateCls.getValue() || "").trim();
  // A(권역/지역)
  if (kind === "A") {
    let pWhere = ",,WDE,,,,,PEX";
    if (rateCls === "Y") pWhere = ",,NWD,,,,,NPX";
    udc_comCode_ar_grid.setSelectId("retrieveDistrictList");
    udc_comCode_ar_grid.cfCommonPopUp(function (ret) {
      if (!ret || ret[0] === "N/A") return;
      scwin.syncAllRowsGrpKey2(scwin.getBaseRow(r0), [{
        col: "arvDistrictCd",
        val: ret[0]
      }, {
        col: "arvDistrictCdNm",
        val: ret[1]
      }]);
    }, ds_retrieve.getCellData(r0, "arvDistrictCd"), ds_retrieve.getCellData(r0, "arvDistrictCdNm"), closeFlag, "5", "권역코드,권역명", "150,210", null, pWhere, "440", "500", null, null, null, closeFlag, "지역,지역코드,지역명");
    return;
  }

  // B(작업장)
  udc_comCode_ar_grid.setSelectId("retrieveWrkPlInfo");
  udc_comCode_ar_grid.cfCommonPopUp(function (ret) {
    if (!ret || ret[0] === "N/A") return;
    scwin.syncAllRowsGrpKey2(scwin.getBaseRow(r0), [{
      col: "arvDistrictCd",
      val: ret[0]
    }, {
      col: "arvDistrictCdNm",
      val: ret[1]
    }]);
  }, ds_retrieve.getCellData(r0, "arvDistrictCd"), ds_retrieve.getCellData(r0, "arvDistrictCdNm"), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
};

/**
 * method
 * @name f_runExcel
 * @description Excel
 * @param 
 */
scwin.f_runExcel = async function () {
  debugger;
  if (gr_retrieve.getRowCount()) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, gr_retrieve, {
        fileName: '컨테이너하불공통요율등록.xlsx',
        sheetName: '컨테이너하불공통요율등록',
        type: '1',
        useDataFormat: "true",
        useStyle: "true"
      });
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.gr_retrieve_onbeforeedit = function (rowIndex, columnIndex, value) {
  const colId = gr_retrieve.getColumnID(columnIndex);
  const gubun = (ds_retrieve.getCellData(rowIndex, "gubun") || "").trim();

  // 편집 전 값 + 3행 백업 + shift 상태 판단 (ensureRowsForBase 전에!)
  var base = scwin.getBaseRow(rowIndex);

  // 이미 shift down 된 상태인지 (grpKey가 다르면 이전에 이미 분리됨)
  var grpKeyShifted = ds_retrieve.getCellData(base, "grpKey") !== ds_retrieve.getCellData(base + 1, "grpKey");
  var grpKey2Shifted = ds_retrieve.getCellData(base, "grpKey2") !== ds_retrieve.getCellData(base + 1, "grpKey2");

  // 3행 백업
  var colCount = ds_retrieve.getColumnCount();
  var row3Backup = {};
  for (var ci = 0; ci < colCount; ci++) {
    var cid = ds_retrieve.getColumnID(ci);
    row3Backup[cid] = ds_retrieve.getCellData(base + 2, cid);
  }
  // 거리는 값 비교로 shift 판단 (grpKey2와 독립)
  var dtcShifted = String(ds_retrieve.getCellData(base, "dtc")) !== String(ds_retrieve.getCellData(base + 1, "dtc"));
  scwin._beforeEditValues = {
    dptDistrictCd: ds_retrieve.getCellData(rowIndex, "dptDistrictCd"),
    dptDistrictCdNm: ds_retrieve.getCellData(rowIndex, "dptDistrictCdNm"),
    arvDistrictCd: ds_retrieve.getCellData(rowIndex, "arvDistrictCd"),
    arvDistrictCdNm: ds_retrieve.getCellData(rowIndex, "arvDistrictCdNm"),
    dtc: ds_retrieve.getCellData(rowIndex, "dtc"),
    odrKndCd: ds_retrieve.getCellData(rowIndex, "odrKndCd"),
    row3Backup: row3Backup,
    grpKeyShifted: grpKeyShifted,
    grpKey2Shifted: grpKey2Shifted,
    dtcShifted: dtcShifted
  };

  // 대표행만 편집 (출발지/도착지 textImage도 편집 진입 허용해야 아이콘 동작)
  return gubun === "1";
};
scwin.gr_retrieve_onafteredit = function (rowIndex, columnIndex, value) {
  const gubun = (ds_retrieve.getCellData(rowIndex, "gubun") || "").trim();
  if (gubun !== "1") return;
  const colId = gr_retrieve.getColumnID(columnIndex);

  // 출발지/도착지 지역명 입력 시 자동 팝업 호출
  if ((colId === "dptDistrictCdNm" || colId === "arvDistrictCdNm") && scwin._fromPopup) {
    scwin._fromPopup = false;
    return;
  }
  // 출발지/도착지: 코드 초기화 후 shift-down 로직으로 진행, 그 후 팝업 호출
  if (colId === "dptDistrictCdNm" && (value || "").trim() !== "") {
    ds_retrieve.setCellData(rowIndex, "dptDistrictCd", "");
    scwin._pendingPopup = null;
  }
  if (colId === "arvDistrictCdNm" && (value || "").trim() !== "") {
    ds_retrieve.setCellData(rowIndex, "arvDistrictCd", "");
    scwin._pendingPopup = null;
  }

  // 숫자 컬럼 빈값이면 0 유지 (AS-IS 동일 동작)
  const numCols = ["dtc", "pchsAmt45Full", "pchsAmt45Empty", "pchsAmt40Full", "pchsAmt40Empty", "pchsAmt20FullHeavy", "pchsAmt20EmptyHeavy", "pchsAmt20FullLight", "pchsAmt20EmptyLight", "pchsAmt20FullCombine", "pchsAmt20EmptyCombine"];
  if (numCols.indexOf(colId) > -1) {
    const v = ds_retrieve.getCellData(rowIndex, colId);
    if (v === "" || v === null || v === undefined) {
      ds_retrieve.setCellData(rowIndex, colId, "0");
    }
  }

  // colMerge 편집 시 WebSquare가 머지 그룹 전체 행 status를 변경함
  // → ASIS에서도 3행 모두 modified 상태로 서버 전송했으므로 원복하지 않음

  var base = scwin.getBaseRow(rowIndex);
  var rc = ds_retrieve.getRowCount();
  var amtCols = ["pchsAmt45Full", "pchsAmt45Empty", "pchsAmt40Full", "pchsAmt40Empty", "pchsAmt20FullHeavy", "pchsAmt20EmptyHeavy", "pchsAmt20FullLight", "pchsAmt20EmptyLight", "pchsAmt20FullCombine", "pchsAmt20EmptyCombine"];

  // 2행/3행 존재 보장
  scwin.ensureRowsForBase(base);

  // _fromPopup 체크는 상단에서 처리됨

  // 오더종류 / 출발지 / 도착지 / 거리 변경 → 조건별 shift down
  if (colId === "odrKndCd" || colId === "dptDistrictCdNm" || colId === "arvDistrictCdNm" || colId === "dtc") {
    if (scwin._beforeEditValues) {
      var bv = scwin._beforeEditValues;

      // 이미 shift down 된 상태인지 판단 (onbeforeedit에서 저장)
      var isFirstShift = false;
      if (colId === "odrKndCd") {
        isFirstShift = !bv.grpKeyShifted;
      } else if (colId === "dtc") {
        isFirstShift = !bv.grpKey2Shifted && !bv.dtcShifted; // 출발지/도착지 shift도 안 됐고 거리도 안 바뀌었을 때만
      } else {
        isFirstShift = !bv.grpKey2Shifted;
      }

      // 출발지명 비우면 코드도 삭제
      if (colId === "dptDistrictCdNm" && !(ds_retrieve.getCellData(rowIndex, "dptDistrictCdNm") || "").trim()) {
        ds_retrieve.setCellData(rowIndex, "dptDistrictCd", "");
      }
      // 도착지명 비우면 코드도 삭제
      if (colId === "arvDistrictCdNm" && !(ds_retrieve.getCellData(rowIndex, "arvDistrictCdNm") || "").trim()) {
        ds_retrieve.setCellData(rowIndex, "arvDistrictCd", "");
      }
      if (isFirstShift) {
        // 첫 번째 변경: 기존값을 2행으로 복사 (이미 shifted된 필드는 건드리지 않음)
        if (colId === "odrKndCd") {
          ds_retrieve.setCellData(base + 1, "odrKndCd", bv.odrKndCd);
          if (!bv.grpKey2Shifted) {
            ds_retrieve.setCellData(base + 1, "dptDistrictCd", bv.dptDistrictCd);
            ds_retrieve.setCellData(base + 1, "dptDistrictCdNm", bv.dptDistrictCdNm);
            ds_retrieve.setCellData(base + 1, "arvDistrictCd", bv.arvDistrictCd);
            ds_retrieve.setCellData(base + 1, "arvDistrictCdNm", bv.arvDistrictCdNm);
          }
          if (!bv.dtcShifted) {
            ds_retrieve.setCellData(base + 1, "dtc", bv.dtc);
          }
        }
        if (colId === "dptDistrictCdNm" || colId === "arvDistrictCdNm") {
          ds_retrieve.setCellData(base + 1, "dptDistrictCd", bv.dptDistrictCd);
          ds_retrieve.setCellData(base + 1, "dptDistrictCdNm", bv.dptDistrictCdNm);
          ds_retrieve.setCellData(base + 1, "arvDistrictCd", bv.arvDistrictCd);
          ds_retrieve.setCellData(base + 1, "arvDistrictCdNm", bv.arvDistrictCdNm);
          if (!bv.dtcShifted) {
            ds_retrieve.setCellData(base + 1, "dtc", bv.dtc);
          }
        }
        if (colId === "dtc") {
          ds_retrieve.setCellData(base + 1, "dtc", bv.dtc);
        }

        // 3행 복원 (WebSquare 머지 편집이 바꾼 값 되돌림)
        scwin.restoreRow3(base);
      }
      // 두 번째+ 변경: 1행만 바뀜, 2행/3행 안 건드림

      // 머지 분리 (ensureRowsForBase가 재동기화했으므로 항상 분리 필요)
      var ts = "_" + new Date().getTime();
      if (colId === "odrKndCd") {
        ds_retrieve.setCellData(base, "grpKey", ds_retrieve.getCellData(base, "grpKey") + ts);
        ds_retrieve.setCellData(base, "grpKey2", ds_retrieve.getCellData(base, "grpKey2") + ts);
      } else if (colId === "dptDistrictCdNm" || colId === "arvDistrictCdNm") {
        ds_retrieve.setCellData(base, "grpKey2", ds_retrieve.getCellData(base, "grpKey2") + ts);
      }
      gr_retrieve.refreshRow(base);
      gr_retrieve.refreshRow(base + 1);
    }
    // shift-down 완료 후 대기 중인 팝업 호출
    if (scwin._pendingPopup) {
      var popupFn = scwin._pendingPopup;
      scwin._pendingPopup = null;
      setTimeout(popupFn, 100);
    }
    return;
  }

  // 적용일자 변경 → 2행에 기존값 + 금액 복사, 3행 비율 계산 (ASIS 동일)
  if (colId === "adptDt") {
    var orgAdptDt = scwin.getOrgCell(base, "adptDt");
    var newAdptDt = (ds_retrieve.getCellData(base, "adptDt") || "").replaceAll("/", "");
    if (base + 1 < rc) {
      ds_retrieve.setCellData(base + 1, "gubun", "2");
      ds_retrieve.setCellData(base + 1, "alloccarBranCd", ds_retrieve.getCellData(base, "alloccarBranCd"));
      ds_retrieve.setCellData(base + 1, "odrKndCd", ds_retrieve.getCellData(base, "odrKndCd"));
      ds_retrieve.setCellData(base + 1, "dptDistrictCdNm", ds_retrieve.getCellData(base, "dptDistrictCdNm"));
      ds_retrieve.setCellData(base + 1, "arvDistrictCdNm", ds_retrieve.getCellData(base, "arvDistrictCdNm"));
      ds_retrieve.setCellData(base + 1, "dtc", ds_retrieve.getCellData(base, "dtc"));
      ds_retrieve.setCellData(base + 1, "adptDt", orgAdptDt);
      if (/^\d{8}$/.test(newAdptDt)) {
        try {
          var expireDt = WebSquare.date.add(newAdptDt, -1, "day");
          ds_retrieve.setCellData(base + 1, "expireDt", expireDt);
        } catch (e) {
          ds_retrieve.setCellData(base + 1, "expireDt", "");
        }
      }
      for (var c = 0; c < amtCols.length; c++) {
        ds_retrieve.setCellData(base + 1, amtCols[c], ds_retrieve.getCellData(base, amtCols[c]));
      }
    }
    if (base + 2 < rc) {
      // 3행에는 오더종류/출발지/도착지/거리/적용일자 값 넣지 않음
      for (var c = 0; c < amtCols.length; c++) {
        var val1 = parseFloat(ds_retrieve.getCellData(base, amtCols[c])) || 0;
        var val2 = parseFloat(ds_retrieve.getCellData(base + 1, amtCols[c])) || 0;
        ds_retrieve.setCellData(base + 2, amtCols[c], val2 != 0 ? Math.round(val1 / val2 * 100) : 0);
      }
    }
    return;
  }

  // (출발지/도착지/거리는 위 통합 조건문에서 처리됨)
};
scwin._fromPopup = false;
scwin.gr_retrieve_ontextimageclick = function (rowIndex, columnIndex) {
  const colId = gr_retrieve.getColumnID(columnIndex);

  // dp_grid/ar_grid 내부에서 ensureRowsForBase 호출하므로 여기서는 생략

  if (colId === "dptDistrictCdNm") {
    scwin._fromPopup = true;
    scwin.dp_grid(rowIndex);
    return;
  }
  if (colId === "arvDistrictCdNm") {
    scwin._fromPopup = true;
    scwin.ar_grid(rowIndex);
    return;
  }
};

// 3행 기준 행 색상 교차 — 셀 단위 적용 (머지 셀 포함)
scwin.applyRowColors = function () {
  var nCnt = ds_retrieve.getRowCount();
  var colCnt = gr_retrieve.getColumnCount();
  for (var r = 0; r < nCnt; r++) {
    var grpNo = Math.floor(r / 3);
    var bgColor = grpNo % 2 === 0 ? "#FFFFFF" : "#edf3fb";
    for (var c = 0; c < colCnt; c++) {
      gr_retrieve.setCellStyle(r, c, "background-color", bgColor);
    }
  }
};
scwin.importFormatter = function (rowData, rowIndex) {
  var grpKey = rowData.grpKey;

  // 신규 추가행은 직접 넣은 그룹키 유지
  if (grpKey && String(grpKey).indexOf("ADD_") === 0) {
    return grpKey;
  }

  // 조회 데이터는 3행 단위 그룹
  return String(Math.floor(rowIndex / 3));
};
scwin.importFormatter2 = function (rowData, rowIndex) {
  var grpKey2 = rowData.grpKey2;

  // 신규 추가행은 직접 넣은 그룹키 유지
  if (grpKey2 && String(grpKey2).indexOf("ADD_") === 0) {
    return grpKey2;
  }

  // 조회 데이터는 3행 단위 그룹
  return String(Math.floor(rowIndex / 3));
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배차점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_branCd',search:'start',style:'width:200px;',submenuSize:'auto',mandatory:'true',allOption:'',chooseOption:'',ref:'',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출도착지구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_co_lc_kindCd',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'권역'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'작업장'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발지 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td pr16',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-16'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',hideName:'Y',codeId:'ed_dptDistrictCd',nameId:'ed_dptDistrictNm',id:'udc_comCode_dpt',UpperFlagCode:'1',maxlengthCode:'3',selectID:'','ev:onclickEvent':'scwin.udc_comCode_dpt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_dpt_onblurCodeEvent',setNameOnBlurCode:'Y',allowCharCode:'a-zA-Z0-9','ev:onviewchangeNameEvent':'scwin.udc_comCode_dpt_onviewchangeNameEvent'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'~',class:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착지 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_arvDistrictCd',nameId:'ed_arvDistrictNm',id:'udc_comCode_arv',maxlengthCode:'3',UpperFlagCode:'1',selectID:'','ev:onclickEvent':'scwin.udc_comCode_arv_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_arv_onblurCodeEvent',setNameOnBlurCode:'Y',allowCharCode:'a-zA-Z0-9','ev:onviewchangeNameEvent':'scwin.udc_comCode_arv_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'안전운임',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_co_lc_rateCls',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공통'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'안전운임공통'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_odrKndCd',search:'start',style:'width:200px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',visibleRowNum:'10',displayMode:'value delim label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_LkStepNo1'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_ed_adptDt',pickerType:'dynamic',style:'',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신규일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_ed_instDt',pickerType:'dynamic',style:'',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용율',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_rate',placeholder:'',style:'width:85px;text-align: right',allowChar:'0-9',maxlength:'2'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridID:'gr_retrieve',gridDownFn:'scwin.f_runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieve',id:'gr_retrieve',style:'',visibleRowNum:'13',visibleRowNumFix:'true',rowStatusVisible:'true',focusMode:'row',focusMove:'true','ev:onbeforeedit':'scwin.gr_retrieve_onbeforeedit','ev:onafteredit':'scwin.gr_retrieve_onafteredit','ev:ontextimageclick':'scwin.gr_retrieve_ontextimageclick',rowStatusWidth:'20',oddEvenColorDisplay:'false',rowNumRowMouseOverColor:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'오더종류',width:'120',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'출발지',width:'80',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'도착지',width:'80',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'거리<br/>(Km)',width:'70',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'적용일자',width:'100',colSpan:'',rowSpan:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',hidden:'true',value:'만기일자',width:'100',colSpan:'',rowSpan:'3',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'45F',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'40F',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'420',inputType:'text',style:'',id:'column61',value:'20F',displayMode:'label',colSpan:'6',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'',displayMode:'label',hidden:'true',rowSpan:'3',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column65',value:'',displayMode:'label',colSpan:'',rowSpan:'3',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'FULL',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'EMPTY',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'FULL',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'EMPTY',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column62',value:'Heavy',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column54',value:'Light',displayMode:'label',colSpan:'2',rowSpan:''}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column42',value:'Combine',displayMode:'label',colSpan:'2',rowSpan:''}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'FULL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column59',value:'EMPTY',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'FULL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column51',value:'EMPTY',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'FULL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'EMPTY',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'select',style:'',value:'',width:'120',textAlign:'left',allOption:'',chooseOption:'',ref:'',upperColumn:'grpKey',editModeEvent:'onclick',colMerge:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_LkStepNo2'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{id:'dptDistrictCdNm',inputType:'textImage',style:'',value:'',width:'80',viewType:'default',upperColumn:'grpKey2',colMerge:'true',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{id:'arvDistrictCdNm',inputType:'textImage',style:'',value:'',width:'80',textAlign:'left',viewType:'default',upperColumn:'grpKey2',colMerge:'true',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'dtc',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',defaultValue:'0',upperColumn:'grpKey2',maxLength:'6',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'calendar',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd',upperColumn:'grpKey'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'expireDt',inputType:'text',hidden:'true',value:'',width:'100',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt45Full',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt45Empty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt40Full',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt40Empty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt20FullHeavy',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt20EmptyHeavy',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt20FullLight',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt20EmptyLight',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt20FullCombine',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pchsAmt20EmptyCombine',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'grpKey',value:'',displayMode:'label',colMerge:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'grpKey2',value:'',displayMode:'label',hidden:'true',hiddenCol:'true',colMerge:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'grp_totalCnt'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'N',btnDelYn:'N',btnRowDelYn:'Y',gridID:'gr_retrieve',rowAddFunction:'scwin.addRow',rowDelFunction:'scwin.deleteRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_createAll',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_createAll_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'일괄생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDistrictList',codeId:'pCode',validTitle:'',nameId:'pName',style:'position:absolute;left:-9999px;top:-9999px;width:0;height:0',id:'udc_comCode_dp_grid'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDistrictList',codeId:'pCode',validTitle:'',nameId:'pName',style:'position:absolute;left:-9999px;top:-9999px;width:0;height:0',id:'udc_comCode_ar_grid'}}]}]}]}]}]})