/*amd /ui/ds/lo/comninfomgnt/lo_100_09_05b.xml 31988 14bc0b5b99c8dd8f46a2cc129398f1bdb5f3d5fa7982270cc0439f0d38350094 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lo352List',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'districtCd',name:'지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvl',name:'레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtClsCd',name:'권역구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lo354List',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'districtGrpCd',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtGrpNm',name:'그룹명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'권역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperDistrictCd',name:'상위권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rgnCd',name:'지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rgnNm',name:'지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidRgnNm',name:'지역명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lo353List',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명칭',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'권역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidWrkPlNm',name:'작업장명칭',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'districtNm',name:'권역명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'districtClsCd',name:'권역구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieveDistrictStructure'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'rgnCd',name:'지역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'districtClsCd',name:'권역구분코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comninfomgnt.RetrieveDistrictEachWorkPlaceListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_lo352List","key":"OUT_DS1"},{"id":"ds_lo353List","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_lo352List","key":"OUT_DS1"},{"id":"ds_lo353List","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDistrictStructure',action:'/ds.lo.comninfomgnt.RetrieveRegionEachHomeDistrictListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieveDistrictStructure","key":"IN_DS1"},{"id":"ds_lo354List","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_lo354List","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDistrictStructure_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comninfomgnt.SaveDistrictEachWorkPlaceListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_lo352List","key":"IN_DS1"},{"action":"modified","id":"ds_lo353List","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/* 
화면 - 지역별작업장관리
설명 - 권역리스트를 조회하고 그에 속한 작업장에 대한 등록, 수정, 삭제가 모두 이루어지는 화면
 */

//-------------------------------------------------------------------------
// function name : 
// function desc : 전역변수 선언
//-------------------------------------------------------------------------  
let MSG_LO_CRM_001 = "변경 사항이 존재합니다. 진행하시겠습니까?";
let MSG_LO_CRM_002 = "지역목록은 저장할 데이터가 존재하지 않습니다.";
let MSG_LO_CRM_003 = "지역별작업장목록은 저장할 데이터가 존재하지 않습니다.";
let MSG_LO_CRM_004 = "지역별작업장은 1건이상 입력하시기 바랍니다.";
scwin.pos_groupCode;
scwin.retrieveGubn = false;

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//------------------------------------------------------------------------- 
scwin.onpageload = function () {
  scwin.f_defaultValue();
  scwin.pos_groupCode = -1;
};

//-------------------------------------------------------------------------
// function name : f_defaultValue
// function desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  ed_districtCd.setValue("");
  ed_districtNm.setValue("");

  // 지역코드 Focus
  ed_districtCd.focus(true);
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
// function desc : 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = function (e) {
  scwin.retrieveGubn = false;
  ds_lo354List.removeAll();
  ds_lo353List.removeAll();
  ds_lo352List.removeAll();

  //dataMap 조회조건 세팅 
  dma_retrieve.set("districtCd", ed_districtCd.getValue().trim());
  dma_retrieve.set("districtNm", ed_districtNm.getValue().trim());
  dma_retrieve.set("districtClsCd", "RG");
  $c.sbm.execute($p, sbm_retrieve);
};

//조회callback
scwin.sbm_retrieve_submitdone = function () {
  // 재조회 시 count 초기화 
  total2.setValue("0");
  total3.setValue("0");
  let nCnt = ds_lo352List.getRowCount();
  let nCnt2 = ds_lo354List.getRowCount();
  if (nCnt > 0) {
    scwin.retrieveGubn = true;
    let focusedRow = 0;
    if (scwin.pos_groupCode != -1) {
      focusedRow = scwin.pos_groupCode >= nCnt ? nCnt - 1 : scwin.pos_groupCode;
    }
    gr_lo352List.setFocusedCell(focusedRow, 0);
    total.setValue(nCnt);
    scwin.f_RetrieveDistrictStructure(); //소속권역 조회.
  } else {
    total.setValue("0");
    total2.setValue("0");
    total3.setValue("0");
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); //조회결과가 존재하지 않습니다.
    ds_lo353List.setColumnFilter({
      type: "row",
      // 행 단위 필터링
      colIndex: "districtCd",
      // 필터링할 컬럼 ID 또는 인덱스
      key: "___NONE___",
      // 필터링 기준 값
      condition: "and",
      // 비교 연산자 (일치 여부 확인)
      exactMatch: true
    });
  }
  if (nCnt2 > 0) {
    gr_lo354List.setFocusedCell(0, 0);
    total2.setValue(nCnt2);
  }
  let nCnt3 = ds_lo353List.getRowCount();
  if (nCnt3 > 0) {
    total3.setValue(nCnt3);
  }

  // AS-IS 지역 조회 이전에는 length Limit 3 -> 조회 후 length Limit 7 변경
  var colInfo = gr_lo352List.getCellInfo("districtCd");
  if (colInfo && typeof colInfo.setMaxLength === "function") {
    colInfo.setMaxLength(7);
  }
};
scwin._revertingNode = false; // 되돌리기 중 재진입 방지용

// 지역 grid rowfocus change...
// 지역목록 Index Change >> 지역별작업장 목록 검증 후 실행
scwin.gr_lo352List_onrowindexchange = async function (rowIndex, oldRow) {
  if (scwin._revertingNode) return;
  let chkValid = await scwin.f_chkWrkplValid();
  if (!chkValid) {
    // 무한 반복 방지를 위해 _revertingNode flag 사용
    scwin._revertingNode = true;
    // gr_lo353List validtion 검증 실패 -> 원래 row로 복귀
    gr_lo352List.setFocusedCell(oldRow, 0);
    scwin._revertingNode = false;
    return false;
  }

  // row 변경 시 count 초기화
  total2.setValue("0");
  total3.setValue("0");
  if (ds_lo352List.getRowStatusValue(rowIndex) == 0) {
    gr_lo352List.setCellReadOnly(rowIndex, "districtCd", true); //grid column edit 가능
    gr_lo352List.setCellReadOnly(rowIndex, "districtNm", false);
    gr_lo352List.setCellReadOnly(rowIndex, "rmk", false);
  } else {
    gr_lo352List.setCellReadOnly(rowIndex, "districtCd", false);
    gr_lo352List.setCellReadOnly(rowIndex, "districtNm", false);
    gr_lo352List.setCellReadOnly(rowIndex, "rmk", false);
  }
  gr_lo352List.setFocusedCell(rowIndex, 0);
  if (rowIndex > -1 && scwin.retrieveGubn == true) {
    scwin.f_RetrieveDistrictStructure();
    ds_lo353List.clearFilter();
    let v_focusedDistrictCd = ds_lo352List.getCellData(rowIndex, "districtCd");

    // 값이 존재할 경우 해당 값으로, 없을 경우 검색되지 않을 임의의 값(___NONE___)으로 설정
    let filterValue = v_focusedDistrictCd && v_focusedDistrictCd.trim() !== "" ? v_focusedDistrictCd.trim() : "___NONE___";

    // 4. setColumnFilter API를 사용한 필터링 적용
    ds_lo353List.setColumnFilter({
      type: "row",
      // 행 단위 필터링
      colIndex: "districtCd",
      // 필터링할 컬럼 ID 또는 인덱스
      key: filterValue,
      // 필터링 기준 값
      condition: "and",
      // 비교 연산자 (일치 여부 확인)
      exactMatch: true
    });
    let nCnt3 = ds_lo353List.getRowCount();
    if (nCnt3 > 0) {
      total3.setValue(nCnt3);
    }
  }
};

// 지역목록에서 valid Check
scwin.f_chkRgnValid = async function () {
  // 지역코드 >> AS-IS 속성 maxlength는 3인데, valid랑 input 7까지 가능.
  let valInfo_lo352 = [{
    id: 'districtCd',
    name: '지역코드',
    mandatory: true,
    maxLength: 7,
    key: true
  }, {
    id: 'districtNm',
    name: '지역명',
    mandatory: true,
    maxLength: 50
  }, {
    id: 'rmk',
    name: '비고',
    mandatory: false,
    maxLength: 500
  }];
  let chkValid = await $c.gus.cfValidateGrid($p, gr_lo352List, null, null, valInfo_lo352, '지역목록');
  return chkValid;
};

// 지역별작업장에서 valid Check 
scwin.f_chkWrkplValid = async function () {
  let valInfo_lo353 = [{
    id: 'wrkPlCd',
    name: '작업장코드',
    mandatory: true,
    maxLength: 5
  }, {
    id: 'wrkPlNm',
    name: '작업장명',
    mandatory: true,
    maxLength: 50
  }];
  let chkValid2 = await $c.gus.cfValidateGrid($p, gr_lo353List, null, null, valInfo_lo353, '지역별작업장');
  return chkValid2;
};

//-------------------------------------------------------------------------
// function name : f_RetrieveDistrictStructure
// function desc : 소속권역 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveDistrictStructure = function () {
  let districtCd = ds_lo352List.getCellData(ds_lo352List.getRowPosition(), "districtCd");
  if (districtCd == "") {
    ds_lo354List.removeAll();
  } else {
    //조회조건 세팅
    dma_retrieveDistrictStructure.set("rgnCd", districtCd); //지역코드 
    $c.sbm.execute($p, sbm_retrieveDistrictStructure);
  }
};

//소속권역 callback 처리
scwin.sbm_retrieveDistrictStructure_submitdone = function () {
  let nCnt = ds_lo354List.getRowCount();
  if (nCnt > 0) {
    gr_lo354List.setFocusedCell(0, 0);
    total2.setValue(nCnt);
  }
  gr_lo353List.setFocusedCell(0, 0);
};

//지역별 작업장 row focus change...
scwin.gr_lo353List_onrowindexchange = function (rowIndex, oldRow) {
  if (ds_lo353List.getRowStatusValue(rowIndex) == 0) {
    gr_lo353List.setCellReadOnly(rowIndex, 'wrkPlCd', true);
    gr_lo353List.setCellReadOnly(rowIndex, 'wrkPlNm', true);
  } else {
    gr_lo353List.setCellReadOnly(rowIndex, 'wrkPlCd', false);
    gr_lo353List.setCellReadOnly(rowIndex, 'wrkPlNm', false);
  }
  $c.gus.cfPrepareHidVal($p, ds_lo353List, rowIndex, ["wrkPlNm", "wrkPlCd"]);
};

//-------------------------------------------------------------------------
// function name : f_addrow
// function desc : 그리드 칼럼 추가
//-------------------------------------------------------------------------
scwin.f_RgnAddrow = async function () {
  // 행추가 실행하기 전에 지역별작업장 목록 valid 체크
  if (!(await scwin.f_chkWrkplValid())) return;

  // 지역목록 행추가
  let nRow = ds_lo352List.insertRow();
  gr_lo352List.setFocusedCell(nRow, 0);
  ds_lo352List.setCellData(nRow, "districtClsCd", "RG");
  ds_lo352List.setCellData(nRow, "lvl", "3");
  gr_lo352List.setFocusedCell(nRow, "districtCd");
};
//지역별작업장 추가
scwin.f_WrkplAddrow = function () {
  if (ds_lo352List.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, "지역목록을  먼저 선택하여 주십시오");
    return;
  } else {
    if (ds_lo352List.getCellData(ds_lo352List.getRowPosition(), "districtCd") == "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["지역코드"]);
      gr_lo352List.setFocusedCell(ds_lo352List.getRowPosition(), "districtCd", true);
    } else {
      let nRow = ds_lo353List.insertRow();
      gr_lo353List.setFocusedCell(nRow, 0);
      ds_lo353List.setCellData(nRow, "districtCd", ds_lo352List.getCellData(ds_lo352List.getRowPosition(), "districtCd"));
      ds_lo353List.setCellData(nRow, "districtNm", ds_lo352List.getCellData(ds_lo352List.getRowPosition(), "districtNm"));
      gr_lo353List.setFocusedCell(nRow, "wrkPlCd", true);
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_Delrow
// function desc : 그리드 칼럼 삭제
//-------------------------------------------------------------------------
scwin.f_RgnDelrow = function () {
  // 지역목록 행삭제
  let nRow = ds_lo352List.getRowPosition();
  if (nRow === -1) return;

  // districtCd 먼저 저장 (삭제 후 접근 불가)
  let districtCd = ds_lo352List.getCellData(nRow, "districtCd");

  // 권역 행 삭제
  if (ds_lo352List.getRowStatusValue(nRow) === 2) {
    ds_lo352List.removeRow(nRow); // 신규 행
  } else {
    ds_lo352List.deleteRow(nRow); // 기존 행 (D 상태)
  }

  // 연관 지역(권역구조) 행 cascade 삭제 - 역순 반복
  for (let i = ds_lo353List.getRowCount() - 1; i >= 0; i--) {
    if (ds_lo353List.getCellData(i, "districtCd") === districtCd) {
      if (ds_lo353List.getRowStatusValue(i) === 2) {
        ds_lo353List.removeRow(i);
      } else {
        ds_lo353List.deleteRow(i);
      }
    }
  }
  gr_lo352List.setFocusedCell(nRow, 0);
};
//-------------------------------------------------------------------------
// function name : f_Undo
// function desc : 취소
//-------------------------------------------------------------------------
scwin.f_RgnUndorow = function () {
  let nRow = ds_lo352List.getRowPosition();
  if (nRow === -1) return;

  // districtCd 먼저 저장
  let districtCd = ds_lo352List.getCellData(nRow, "districtCd");

  // 권역 행 취소
  if (ds_lo352List.getRowStatusValue(nRow) === 2) {
    ds_lo352List.removeRow(nRow); // 신규 행이면 제거
  } else {
    ds_lo352List.undoRow(nRow); // 기존 행이면 원본 복원
  }

  // 연관 지역(권역구조) cascade 취소 - 역순 반복
  for (let i = ds_lo353List.getRowCount() - 1; i >= 0; i--) {
    if (ds_lo353List.getCellData(i, "districtCd") === districtCd) {
      if (ds_lo353List.getRowStatusValue(i) === 2) {
        ds_lo353List.removeRow(i);
      } else {
        ds_lo353List.undoRow(i);
      }
    }
  }
};

//-------------------------------------------------------------------------
// function desc : 저장
//-------------------------------------------------------------------------
scwin.btn_save_onclick = async function (e) {
  if (await scwin.f_ReqFieldChk()) {
    let confirm = await $c.win.confirm($p, "저장 하시겠습니까?");
    if (confirm) {
      scwin.pos_groupCode = ds_lo352List.getRowPosition();
      $c.sbm.execute($p, sbm_save);
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_ReqFieldChk
// function desc : 필수 입력항목 check
//-------------------------------------------------------------------------
scwin.f_ReqFieldChk = async function () {
  if (ds_lo352List.getModifiedIndex().length < 1 && ds_lo353List.getModifiedIndex().length < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["지역별작업장"]); //"@은(는) 변경된 사항이 없습니다.";
    return false;
  }

  //지역목록은 저장할 데이터가 존재하지 않습니다.
  if (ds_lo352List.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_LO_CRM_002);
    return false;
  }
  let chkValid = await scwin.f_chkRgnValid();
  if (!chkValid) {
    return false;
  }
  let chkValid2 = await scwin.f_chkWrkplValid();
  if (!chkValid2) {
    return false;
  } else {
    for (i = 0; i < ds_lo353List.getRowCount(); i++) {
      //작업장코드 중복입력 불가 
      for (j = i + 1; j < ds_lo353List.getRowCount(); j++) {
        if (ds_lo353List.getCellData(i, "wrkPlCd") == ds_lo353List.getCellData(j, "wrkPlCd")) {
          $c.gus.cfAlertMsg($p, "지역별작업장 " + (j + 1) + "번째 데이터에서 작업장코드은(는) 중복될 수 없습니다.");
          return;
        }
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 그리드에서 입력된 코드/명칭 정보로  조회 (Grid PopUp)
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = function (disGubun, row, pClose) {
  // disGubun 이 1, 2 가 아니면 early return
  if (disGubun !== 1 && disGubun !== 2) return;
  let pCode = disGubun === 1 ? ds_lo353List.getCellData(row, "wrkPlCd") : "";
  let pName = disGubun === 2 ? ds_lo353List.getCellData(row, "wrkPlNm") : "";

  // 입력 필드 초기화(팝업 결과 없이 종료시 입력값 초기화 시키기 위함)
  ds_lo353List.setCellData(row, "wrkPlCd", "");
  ds_lo353List.setCellData(row, "wrkPlNm", "");

  // 지역별 작업장 pop
  udc_comCode_wrk_grid.setSelectId("retrieveWrkPlInfo");
  udc_comCode_wrk_grid.cfCommonPopUp(function (rtnList) {
    scwin.udc_comCode_wrk_grid_callBackFunc(rtnList, row);
  }, pCode, pName, pClose, '5', null, null, null, null, null, null, null, null, null, 'F', '작업장조회,작업장코드,작업장명');
};

//grid pop 작업명(Image Button 클릭 이벤트)
scwin.pop_grid = function () {
  // disGubun, row, pClose
  scwin.f_openCommPopUpGrid(2, ds_lo353List.getRowPosition(), "T");
};

//grid pop (작업명) callback
scwin.udc_comCode_wrk_grid_callBackFunc = function (rtnList, row) {
  ds_lo353List.setCellData(row, "wrkPlCd", "");
  ds_lo353List.setCellData(row, "wrkPlNm", "");
  if (rtnList != null && rtnList[0] != "N/A") {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_lo353List, row, "wrkPlCd", "wrkPlNm");
  }
};

//save callback
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
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다 
    scwin.btn_retrieve_onclick(); // 재조회
  }
};
scwin.gr_lo353List_onviewchange = function (info) {
  // 예시: {"oldValue":"","newValue":"101","rowIndex":1,"colIndex":0,"colId":"wrkPlCd"}
  let colId = info.colId;
  if (info.oldValue === info.newValue) return;
  let newValue = info.newValue.trim();
  switch (colId) {
    case "wrkPlCd":
      // 작업장코드
      if (newValue == "") {
        ds_lo353List.setCellData(info.rowIndex, "wrkPlNm", "");
      } else {
        scwin.f_openCommPopUpGrid(1, info.rowIndex, "T");
      }
      break;
    case "wrkPlNm":
      // 작업장명
      if (newValue == "") {
        ds_lo353List.setCellData(info.rowIndex, "wrkPlCd", "");
      } else {
        scwin.f_openCommPopUpGrid(2, info.rowIndex, "T");
      }
      break;
    default:
      break;
  }
};

// 한글 입력 방지
scwin.f_filterHangul = function (value) {
  return value.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
};

// 영대문자 전환
scwin.applyUpper = function (value) {
  return value.toUpperCase();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지역코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_districtCd',placeholder:'',style:'width:150px;',maxlength:'3',allowChar:'a-zA-Z0-9',applyFormat:'all',displayFormatter:'scwin.applyUpper'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지역명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_districtNm',placeholder:'',style:'width:150px;',maxlength:'50'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'지역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_lo352List',gridDownYn:'Y',btnPlusYn:'Y',btnUser:'Y',gridUpYn:'N',templateYn:'N',grdDownOpts:'{"fileName":"지역.xlsx", "sheetName": "지역", "type": "4+8+16"}',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_lo352List',style:'',autoFit:'allColumn',id:'gr_lo352List',visibleRowNum:'16',class:'wq_gvw','ev:onrowindexchange':'scwin.gr_lo352List_onrowindexchange',focusMode:'cell',focusMove:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'지역코드',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column17',value:'지역명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'비고',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'districtCd',displayMode:'label',mandatory:'true',maxLength:'3',textAlign:'left',readOnly:'true',upperColumn:'districtCd',displayFormatter:'scwin.f_filterHangul',applyFormat:'all'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'districtNm',displayMode:'label',textAlign:'left',mandatory:'true',maxLength:'50'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left',maxLength:'500'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'total',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_lo352List',btnCancelYn:'Y',btnDelYn:'N',rowAddFunction:'scwin.f_RgnAddrow',rowDelFunction:'scwin.f_RgnDelrow',cancelFunction:'scwin.f_RgnUndorow',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'소속권역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_lo354List',gridUpYn:'N',btnPlusYn:'N',gridDownUserAuth:'X',grdDownOpts:'{"fileName":"소속권역.xlsx", "sheetName": "소속권역", "type": "2+4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_lo354List',style:'',autoFit:'allColumn',id:'gr_lo354List',visibleRowNum:'6',class:'wq_gvw',readOnly:'true',focusMode:'cell'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'그룹코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column17',value:'그룹명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'권역코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column13',value:'권역명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'districtGrpCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'districtGrpNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'districtCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'districtNm',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'total2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8 flex-full',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'지역별작업장',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridID:'gr_lo353List',gridUpYn:'N',btnPlusYn:'N',gridDownUserAuth:'X',grdDownOpts:'{"fileName":"지역별작업장.xlsx", "sheetName": "지역별작업장", "type": "2+4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwflex',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_lo353List',id:'gr_lo353List',style:'','ev:onrowindexchange':'scwin.gr_lo353List_onrowindexchange',rowStatusVisible:'true',focusMode:'cell','ev:onviewchange':'scwin.gr_lo353List_onviewchange'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'작업장코드',width:'150',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'작업장명',width:'270',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlCd',inputType:'text',style:'',value:'',width:'150',mandatory:'true',maxLength:'5',displayFormatter:'scwin.f_filterHangul',applyFormat:'all'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'textImage',style:'',value:'',width:'270',textAlign:'left',mandatory:'true',maxLength:'50',viewType:'default',imageClickFunction:'scwin.pop_grid'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_lo353List',btnCancelYn:'Y',btnDelYn:'N',rowAddFunction:'scwin.f_WrkplAddrow',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveWrkPlInfo',codeId:'Pcode',validTitle:'',nameId:'pName',style:'width:%; height:px;display: none',id:'udc_comCode_wrk_grid'}}]}]}]}]}]})