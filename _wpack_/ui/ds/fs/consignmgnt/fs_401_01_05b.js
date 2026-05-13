/*amd /ui/ds/fs/consignmgnt/fs_401_01_05b.xml 31061 a9d96b36b3f61358059b4bfe182c499dde2ca21b84e97f68bc147925e8452e85 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tariff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'jjh',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'업체구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'original',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'originalStDt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'originalCompleteDt',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tariffDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'itemCd',name:'항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemNm',name:'비용항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prdyr',name:'차량년식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptMm',name:'적용월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgUpr',name:'단가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellYn',name:'매출여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'originalStDt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'originalCompleteDt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'original',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stDt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'completeDt',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'posnClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_tariffCopy',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.consignmgnt.consignmgntcadjm.RetrieveConsignmentTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_tariff","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_tariff","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_detail',action:'/ds.fs.consignmgnt.consignmgntcadjm.RetrieveConsignmentTariffDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_tariffCopy","key":"IN_DS1" },{"id":"ds_tariffDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_tariffDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_detail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_baseitem',action:'/ds.fs.consignmgnt.consignmgntcadjm.RetrieveConsignmentTariffBasisItemCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_tariffDetail","key":"OUT_DS1" }',target:'data:json,{"id":"ds_tariffDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_baseitem_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.fs.consignmgnt.consignmgntcadjm.SaveConsignmentTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_tariffCopy","key":"IN_DS1"},{"id":"ds_tariffDetail","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환

scwin.isCopy = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드- 소유구분
  const codeOptions = [{
    grpCd: "OP108",
    compID: "gr_tariff:posnClsCd"
  }, {
    grpCd: "OP515",
    compID: "gr_tariffDetail:sellYn"
  }];
  $c.data.setCommonCode($p, codeOptions);
  ed_adptDt.setValue(scwin.strCurDate);
  $c.gus.cfDisableBtnOnly($p, [btn_tariffCopy]); // 요율복사
  $c.gus.cfDisableBtnOnly($p, [btn_save]); // 저장

  scwin.isCopy = true;

  // 달력 버튼 포커스 방지
  setTimeout(function () {
    document.querySelectorAll('.w2inputCalendar_div_img button').forEach(function (btn) {
      btn.tabIndex = -1;
    });
  }, 0);
};
scwin.onUdcCompleted = function () {
  ed_lobranCd.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ed_lobranCd, ed_adptDt]))) {
    return;
  }
  dma_queryCondition.set("lobranCd", ed_lobranCd.getValue());
  dma_queryCondition.set("posnClsCd", lc_posnClsCd.getValue());
  dma_queryCondition.set("adptDt", ed_adptDt.getValue());
  ds_tariffDetail.removeAll();
  total.setValue("0");
  total2.setValue("0");
  $c.gus.cfDisableBtnOnly($p, [btn_save]);
  $c.sbm.execute($p, sbm_retrieve);
};

//조회 callback
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_tariff.getRowCount();
  if (nCnt > 0) {
    gr_tariff.setFocusedCell(0, 0);
    $c.gus.cfEnableBtnOnly($p, [btn_tariffCopy]);
  } else {
    $c.gus.cfDisableBtnOnly($p, [btn_tariffCopy]);
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  total.setValue(nCnt);

  /*실제 쿼리의 카멜아이디가 틀리기 때문에 적용해줌.... (중요)*/
  ds_tariff.setCellData(ds_tariff.getRowPosition(), "originalStDt", ds_tariff.getCellData(ds_tariff.getRowPosition(), "stDt"));
  ds_tariff.setCellData(ds_tariff.getRowPosition(), "originalCompleteDt", ds_tariff.getCellData(ds_tariff.getRowPosition(), "completeDt"));
};

//점소 pop
scwin.udc_comCode_lobran_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_lobranCd.getValue(), ed_lobranNm.getValue(), "F", "F");
};

// pop callback
scwin.udc_comCode_lobran_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lobranCd, ed_lobranNm);
};
scwin.udc_comCode_lobran_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lobranCd, ed_lobranNm, 1);
};
scwin.udc_comCode_lobran_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lobranNm, ed_lobranCd, 1, false);
};

// 그리드클릭 이벤트처리
scwin.gr_tariff_onrowindexchange = function (rowIndex, oldRow) {
  if (rowIndex < 0) return;

  // 선택된 행 1개만 ds_tariffCopy에 복사 (가우스 ExportData(row,1,false) 대응)
  let features = "copyHeader=yes,rowFrom=" + rowIndex + ",rowCnt=1";
  $c.gus.cfCopyDataSet($p, ds_tariff, ds_tariffCopy, features);
  if (ds_tariff.getCellData(rowIndex, "original") == "T") {
    // 마지막 행이면 편집 가능, 아니면 편집 불가
    let lastRow = ds_tariff.getRowCount() - 1;
    if (rowIndex === lastRow) {
      gr_tariff.setReadOnly("grid", false);
    } else {
      gr_tariff.setReadOnly("grid", true);
    }
    $c.sbm.execute($p, sbm_retrieve_detail);
  } else {
    gr_tariff.setReadOnly("grid", false); // 신규 행은 항상 편집 가능
    if (scwin.isCopy) {
      $c.gus.cfEnableBtnOnly($p, [btn_save]);
      gr_tariffDetail.setReadOnly("grid", false);
      return;
    } else {
      $c.sbm.execute($p, sbm_retrieve_baseitem);
    }
  }
};

//요율디테일 기본항목 callback
scwin.sbm_retrieve_baseitem_submitdone = function () {
  let nCnt = ds_tariffDetail.getRowCount();
  let rowIndex = ds_tariff.getRowPosition();
  let lastRowIndex = ds_tariff.getRowCount() - 1; // 마지막 행 index 확인

  // 마지막 행이고 상세 데이터가 있을 때만 편집/저장 활성화
  if (nCnt > 0 && rowIndex === lastRowIndex) {
    $c.gus.cfEnableObjects($p, [btn_save]);
    gr_tariffDetail.setReadOnly("grid", false); // 마지막 행 -> 편집 가능
  } else {
    $c.gus.cfDisableObjects($p, [btn_save]);
    gr_tariffDetail.setReadOnly("grid", true); // 이전 행 -> 조회만 가능
  }
  if (nCnt > 0) {
    gr_tariffDetail.setFocusedCell(0, 0);
    total2.setValue(nCnt);
  }
};

// 요율 디테일 내역 조회 완료
scwin.sbm_retrieve_detail_submitdone = function (e) {
  let nCnt = ds_tariffDetail.getRowCount();
  let rowIndex = ds_tariff.getRowPosition();
  let lastRowIndex = ds_tariff.getRowCount() - 1; // 마지막 행 index 확인

  // 마지막 행이고 상세 데이터가 있을 때만 편집/저장 활성화
  if (nCnt > 0 && rowIndex === lastRowIndex) {
    $c.gus.cfEnableObjects($p, [btn_save]);
    gr_tariffDetail.setReadOnly("grid", false); // 마지막 행 -> 편집 가능
  } else {
    $c.gus.cfDisableObjects($p, [btn_save]);
    gr_tariffDetail.setReadOnly("grid", true); // 이전 행 -> 조회만 가능
  }
  if (nCnt > 0) {
    gr_tariffDetail.setFocusedCell(0, 0);
    total2.setValue(nCnt);
  }
};
//-------------------------------------------------------------------------
// 요율 마스터 그리드 추가
//-------------------------------------------------------------------------
scwin.f_tariffAddRow = function (arg) {
  scwin.isCopy = arg; // 복사 여부 플래그를 전역 변수에 저장

  if (ds_tariff.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, "요율 등록 할  점소로  먼저 조회를 하십시오.");
    return;
  }
  if (ds_tariff.getRowCount() < 1) {
    let nRow = ds_tariff.insertRow();
    ds_tariff.setCellData(nRow, "lobranCd", dma_queryCondition.get("lobranCd"));
    ds_tariff.setCellData(nRow, "lobranNm", ed_lobranNm.getValue());
    ds_tariff.setCellData(nRow, "posnClsCd", lc_posnClsCd.getValue());
    gr_tariff.setFocusedCell(nRow, 0);
    return;
  }

  // 마지막 행이 신규 행("F")이면 중단
  let lastRow = ds_tariff.getRowCount() - 1;
  if (ds_tariff.getCellData(lastRow, "original") == "F") return;

  // Undo 대신 getOrgCellData로 원본값 체크
  let orgCompleteDt = ds_tariff.getOriginalCellData(lastRow, "completeDt");
  if (orgCompleteDt != null && orgCompleteDt.length == 8) {
    let lobranCd = ds_tariff.getCellData(lastRow, "lobranCd");
    let lobranNm = ds_tariff.getCellData(lastRow, "lobranNm");
    let posnClsCd = ds_tariff.getCellData(lastRow, "posnClsCd");
    let nRow = ds_tariff.insertRow();
    gr_tariff.setFocusedCell(nRow, 0);
    ds_tariff.setCellData(nRow, "original", "F");
    ds_tariff.setCellData(nRow, "lobranCd", lobranCd);
    ds_tariff.setCellData(nRow, "lobranNm", lobranNm);
    ds_tariff.setCellData(nRow, "posnClsCd", posnClsCd);
  } else {
    $c.gus.cfAlertMsg($p, "최종 마감일자는 유효한 날짜이어야 합니다.");
    return;
  }
};

//-------------------------------------------------------------------------
// 요율 마스터 그리드 삭제
// (2: Insert, 1: Normal, 3: Update, 5: Delete)
//-------------------------------------------------------------------------
scwin.f_tariffDelRow = function () {
  if (ds_tariff.getRowCount() < 1) return;
  // original="F"인 행 인덱스 찾기 
  // original 컬럼의 값이 "F"인 행들의 인덱스를 배열로 가져옵니다.
  var matchedIdx = ds_tariff.getMatchedIndex("original", "F", true);
  var delRow = matchedIdx.length > 0 ? matchedIdx : -1;
  if (delRow !== -1) {
    gr_tariff.setFocusedCell(delRow, 0); // 포커스 이동 
    ds_tariff.removeRow(delRow); // 신규 행 완전 제거
  }
  gr_tariff.setFocusedCell(ds_tariff.getRowCount() - 1, 0);
};

//-------------------------------------------------------------------------
// 요율 디테일 그리드 추가
//-------------------------------------------------------------------------
scwin.f_tariffDetailAddRow = function () {
  let lastRow = ds_tariff.getRowCount() - 1;
  if (ds_tariff.getRowPosition() === lastRow) {
    // 마지막 행 선택 시만
    let nRow = ds_tariffDetail.insertRow();
    gr_tariffDetail.setFocusedCell(nRow, 0);
    ds_tariffDetail.setCellData(nRow, "sellYn", "1");
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["최종 요율이 아닌 자료", "수정"]);
  }
};

//-------------------------------------------------------------------------
// 요율 디테일 그리드 삭제
//-------------------------------------------------------------------------
scwin.f_tariffDetailDelRow = function () {
  if (ds_tariffDetail.getRowCount() < 1) return;
  let lastRow = ds_tariff.getRowCount() - 1;
  if (ds_tariff.getRowPosition() !== lastRow) return; // 마지막 행 선택 시만

  let nRow = gr_tariffDetail.getFocusedRowIndex();
  if (nRow === -1) return;

  // 신규 행(I)이면 removeRow, 기존 행(N/U)이면 deleteRow
  if (ds_tariffDetail.getRowStatusValue(nRow) === "C") {
    ds_tariffDetail.removeRow(nRow); // 클라이언트에서 완전 제거
  } else {
    ds_tariffDetail.removeRow(nRow); // D 상태로 마크 → 서버에 삭제 전송 X
  }
  let focusIdx = ds_tariffDetail.getRowCount() - 1;
  if (nRow < focusIdx) focusIdx = nRow;
  gr_tariffDetail.setFocusedCell(focusIdx, 0);
};

//-------------------------------------------------------------------------
// 요율 디테일 그리드 취소
//-------------------------------------------------------------------------
scwin.f_tariffDetailCancelRow = function () {
  let lastRow = ds_tariff.getRowCount() - 1;
  if (ds_tariff.getRowPosition() !== lastRow) return; // 마지막 행 선택 시만

  $c.data.undoRow($p, ds_tariffDetail, "Y");
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.btn_save_onclick = async function (e) {
  // validation check
  if (!(await $c.gus.cfValidate($p, [gr_tariff]))) return;
  let valInfoArr = [{
    id: 'itemCd',
    name: ' 항목코드',
    mandatory: true,
    maxLength: 3
  }, {
    id: 'prdyr',
    name: '차량년식',
    length: 4
  }, {
    id: 'adptMm',
    name: '적용월',
    length: 2
  }];
  let chkValid = await $c.gus.cfValidateGrid($p, gr_tariffDetail, null, null, valInfoArr, '요율Detail');
  if (!chkValid) return;
  let lastRow = ds_tariff.getRowCount() - 1; // 마지막 행 인덱스

  // 이전 행 마감일자보다 저장할 마지막 행 시작일자가 커야한다
  if (ds_tariff.getRowCount() > 1) {
    if (!$c.gus.cfIsAfterDate($p, ds_tariff.getCellData(lastRow - 1, "completeDt"),
    // 이전 행 마감일
    ds_tariff.getCellData(lastRow, "stDt"),
    // 마지막 행 시작일자
    true)) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, ["저장할 요율의 시작일자", "이전 요율의 마감일자"]);
      return;
    }
  }

  // 마지막 행의 시작일자 < 마감일자
  if (!$c.gus.cfIsAfterDate($p, ds_tariff.getCellData(lastRow, "stDt"), ds_tariff.getCellData(lastRow, "completeDt"))) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, ["요율의 마감일자", "요율의 시작일자"]);
    return;
  }

  // 디테일 0건 분기
  if (ds_tariffDetail.getRowCount() == 0) {
    if (ds_tariff.getCellData(lastRow, "original") == "T") {
      // 기존 행인데 디테일 없음 -> 이중 확인 후 저장
      if (!(await $c.win.confirm($p, $c.gus.cfGetMsg($p, MSG_CM_CRM_008, ["해당 요율"])))) return;
      if (!(await $c.win.confirm($p, $c.gus.cfGetMsg($p, MSG_CM_CRM_001)))) return;
      $c.sbm.execute($p, sbm_save);
    } else {
      // 신규 행인데 디테일 없음 → 저장 불가
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["요율 내역"]);
    }
    return;
  }

  // 디테일 있는 경우 -> 확인 후 저장
  let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirm) {
    for (var i = 0; i < ds_tariffDetail.getRowCount(); i++) {
      ds_tariffDetail.setCellData(i, "stDt", ds_tariff.getCellData(lastRow, "stDt"));
      ds_tariffDetail.setCellData(i, "completeDt", ds_tariff.getCellData(lastRow, "completeDt"));
      ds_tariffDetail.setCellData(i, "lobranCd", ds_tariff.getCellData(lastRow, "lobranCd"));
      ds_tariffDetail.setCellData(i, "posnClsCd", ds_tariff.getCellData(lastRow, "posnClsCd"));
    }
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 청구지점코드 팝업
      udc_comCode_lobran.setSelectId("retrieveLobranInfo");
      udc_comCode_lobran.cfCommonPopUp(scwin.udc_comCode_lobran_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      // 위수탁 요율 항목코드(grid)
      udc_comCode_item.cfCommonPopUp(scwin.udc_comCode_item_callBackFunc2, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, null, null);
      break;
      defualt: break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//grid항목코드 popup
scwin.detail_item = async function () {
  scwin.f_openCommonPopUp(2, ds_tariffDetail.getCellData(ds_tariffDetail.getRowPosition(), "itemCd"), "", "F");
};

//grid 거래처callback
scwin.udc_comCode_item_callBackFunc2 = function (ret) {
  // ret이 없거나, ['N/A']인 경우 무시
  if (!ret || ret.length === 1 && ret[0] === 'N/A') return;
  let itemCd = ret ? ret[0] : "";
  let itemNm = ret ? ret[1] : "";

  //그리드에 set(전역변수)    
  ds_tariffDetail.setCellData(ds_tariffDetail.getRowPosition(), "itemCd", itemCd);
  ds_tariffDetail.setCellData(ds_tariffDetail.getRowPosition(), "itemNm", itemNm);
};

//저장 callback
scwin.sbm_save_submitdone = async function (e) {
  // responseJSON에서 resultDataSet 추출
  var resultDataSet = e.responseJSON.resultDataSet;
  if (!resultDataSet || resultDataSet.length === 0) {
    return;
  }

  // 첫번째 행 = Result (성공/실패 여부)
  var result = resultDataSet[0];
  if (result.Msg === "SUCC") {
    // 성공
    if (ds_tariffDetail.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    }
    scwin.btn_retrieve_onclick();
  }
};

//-------------------------------------------------------------------------
// 요율 복사
//-------------------------------------------------------------------------
scwin.btn_tariffCopy_onclick = function (e) {
  scwin.f_tariffDelRow();
  scwin.f_tariffAddRow(true);
};

// grid Detail 항목코드 변경시 팝업 호출
scwin.gr_tariffDetail_onviewchange = function (info) {
  if (info.colId === "itemCd") {
    if (info.oldValue === info.newValue && ds_tariffDetail.getCellData(info.rowIndex, "itemNm") !== "") return;
    scwin.f_openCommonPopUp(2, info.newValue, "", "F", null);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lobranCd',nameId:'ed_lobranNm',id:'udc_comCode_lobran',mandatoryCode:'true',selectID:'retrieveLobranInfo','ev:onclickEvent':'scwin.udc_comCode_lobran_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_lobran_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_lobran_onviewchangeNameEvent',validTitle:'청구지점',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업체구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_posnClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'위수탁'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'W'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_adptDt',pickerType:'dynamic',style:'',displayFormat:'yyyy/MM/dd',mandatory:'false'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 40%;'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_tariff',style:'',autoFit:'allColumn',id:'gr_tariff',visibleRowNum:'14',class:'wq_gvw',focusMode:'cell',focusMove:'true','ev:onrowindexchange':'scwin.gr_tariff_onrowindexchange',rowStatusVisible:'true',gridName:'요율Master'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'0',inputType:'text',style:'',id:'column1',value:'',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column17',value:'정산 적용일자',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'점소',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column11',value:'업체구분',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'시작일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'종료일자',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'0',inputType:'text',style:'',id:'column2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'stDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',allowChar:'0-9',maxLength:'8',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'completeDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',allowChar:'0-9',maxLength:'8',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'lobranNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'posnClsCd',value:'',displayMode:'value delim label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'total',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',btnRowDelYn:'N',btnCancelYn:'Y',gridID:'gr_tariff',id:'udc_bottomGrdBtn_main',rowAddFunction:'scwin.f_tariffAddRow',cancelFunction:'scwin.f_tariffDelRow',rowAddUserAuth:'C'}}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_tariffCopy',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_tariffCopy_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'요율복사'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox ',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_tariffDetail',id:'gr_tariffDetail',style:'',visibleRowNum:'15',visibleRowNumFix:'true',focusMode:'cell','ev:onviewchange':'scwin.gr_tariffDetail_onviewchange',hideDeletedRow:'true',gridName:'요율Detail'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'항목코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'비용항목명',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'차량년식',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'적용월',width:'70',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'단가',width:'140',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'매출여부',width:'100',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'itemCd',inputType:'textImage',width:'100',viewType:'default',mandatory:'true',maxLength:'10',imageClickFunction:'scwin.detail_item',allowChar:'0-9A-Za-z'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'itemNm',inputType:'text',width:'150',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prdyr',inputType:'text',width:'100',allowChar:'0-9',maxLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptMm',inputType:'text',width:'70',allowChar:'0-9',maxLength:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgUpr',inputType:'text',width:'140',textAlign:'right',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',maxLength:'13'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'sellYn',inputType:'select',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn_detail',btnDelYn:'N',btnCancelYn:'Y',gridID:'gr_tariffDetail',rowAddFunction:'scwin.f_tariffDetailAddRow',rowDelFunction:'scwin.f_tariffDetailDelRow',cancelFunction:'scwin.f_tariffDetailCancelRow',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveTrusteeTariffItemInfo',codeId:'pCode',validTitle:'',nameId:'pName',style:'display: none;',id:'udc_comCode_item'}}]}]}]}]}]})