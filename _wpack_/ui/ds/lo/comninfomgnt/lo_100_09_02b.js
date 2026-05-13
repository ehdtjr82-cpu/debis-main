/*amd /ui/ds/lo/comninfomgnt/lo_100_09_02b.xml 31239 82457d3953c8504ac5602787ab68d230ff53753f4903024e57f0585d2be85a57 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lo352Tree',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'districtCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperDistrictCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvl',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lo352List',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtNm',name:'권역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvl',name:'레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperDistrictCd',name:'상위권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtClsCd',name:'권역구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lo354List',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rgnCd',name:'지역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rgnNm',name:'지역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'districtGrpCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'upperDistrictCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'districtCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'districtClsCd',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tree',action:'/ds.lo.comninfomgnt.RetrieveDistrictTreeCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lo352Tree","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tree_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comninfomgnt.RetrieveDistrictListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_lo352List","key":"OUT_DS1"},{"id":"ds_lo354List","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_lo352List","key":"OUT_DS1"},{"id":"ds_lo354List","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comninfomgnt.SaveDistrictListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_lo352List","key":"IN_DS1"},{"action":"modified","id":"ds_lo354List","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// function name : 
// function desc : 전역변수 선언
//-------------------------------------------------------------------------  
var MSG_LO_CRM_001 = "변경 사항이 존재합니다. 진행하시겠습니까?";
var MSG_LO_CRM_002 = "권역목록은 저장할 데이터가 존재하지 않습니다.";
var MSG_LO_CRM_003 = "권역구조목록은 저장할 데이터가 존재하지 않습니다.";
scwin.pos_groupCode = 0;
scwin.preRow = 0;
scwin.preRow352 = true;
scwin.hid_tv_index = "";
scwin.hid_district_index = "";

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //tree data
  scwin.f_createTree();
};

//-------------------------------------------------------------------------
// function name : f_createTree
// function desc : 화면 Tree데이타 조회
//-------------------------------------------------------------------------
scwin.f_createTree = function () {
  $c.sbm.execute($p, sbm_tree);
};

// 권역Tree DataSet 조회 완료
scwin.sbm_tree_submitdone = function () {
  if (scwin.hid_tv_index !== "") {
    scwin._revertingNode = true;
    let idx = parseInt(scwin.hid_tv_index);
    tv_lo352.findNodeByIndex(idx, true);
    tv_lo352.expandNode(idx);
    scwin._revertingNode = false;
  } else {
    tv_lo352.findNodeByIndex(1, true); // 첫 번째 노드 선택
  }

  // sub_title 설정 (onclick이 안 트리거될 경우 대비)
  let rowIndex = ds_lo352Tree.getRowPosition();
  sub_title.setValue(ds_lo352Tree.getCellData(rowIndex, "districtNm"));

  // districtCd를 넘겨서 조회
  let districtCd = ds_lo352Tree.getCellData(rowIndex, "districtCd");
  scwin.f_Retrieve(districtCd);
};

//tree rowclick..
scwin.tv_lo352_onclick = function () {
  if (scwin._revertingNode) return; // onchange에서 되돌리는 중이면 무시

  if (ds_lo352Tree.getRowCount() != 0) {
    sub_title.setValue(ds_lo352Tree.getCellData(ds_lo352Tree.getRowPosition(), "districtNm"));
    let districtCd = ds_lo352Tree.getCellData(ds_lo352Tree.getRowPosition(), "districtCd");

    //Level2 권역일 경우만 지역을 등록할 수 있다.
    scwin.f_applyLvlBtnState();
    if (scwin.preRow352 == true) {
      scwin.pos_groupCode = 0;
    }

    //조회
    scwin.f_Retrieve(districtCd);
  }
};
scwin.f_applyLvlBtnState = function () {
  if (typeof btn_rowAdd2 === "undefined") return; // UDC 미로드 시 스킵

  // 데이터 없거나 선택된 행 없으면 disable
  if (ds_lo352Tree.getRowCount() === 0 || ds_lo352Tree.getRowPosition() === -1) {
    $c.gus.cfDisableBtnOnly($p, [btn_rowAdd2, btn_rowDel2, btn_cancel2]);
    return;
  }
  if (ds_lo352Tree.getCellData(ds_lo352Tree.getRowPosition(), "lvl") == 0) {
    $c.gus.cfDisableBtnOnly($p, [btn_rowAdd2, btn_rowDel2, btn_cancel2]);
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_rowAdd2, btn_rowDel2, btn_cancel2]);
  }
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function (strdistrictCd) {
  ds_lo352List.removeAll();
  ds_lo354List.removeAll();

  // dma_info라는 ID의 DataMap 전체를 초기화합니다.
  dma_retrieve.setJSON({});
  dma_retrieve.set("upperDistrictCd", strdistrictCd);
  //dma_retrieve.set("districtCd",ds_lo352Tree.getCellData(ds_lo352Tree.getRowPosition(),"districtCd"));

  if (ds_lo352Tree.getRowPosition() == 0) {
    // 루트(최상위) 노드 선택 시 "districtClsCd" 전달 -> 분류 코드로 필터링 해서 조회
    dma_retrieve.set("districtClsCd", ds_lo352Tree.getCellData(ds_lo352Tree.getRowPosition(), "districtClsCd"));
  } else {
    // 하위 노드 선택 시 -> 분류 조건 없이 "상위 권역코드"로만 조회
    dma_retrieve.set("districtClsCd", "");
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//조회 callback
scwin.sbm_retrieve_submitdone = function (e) {
  // responseJSON에서 resultDataSet 추출
  var resultDataSet = e.responseJSON.resultDataSet;
  if (!resultDataSet || resultDataSet.length === 0) {
    return;
  }

  // 첫번째 행 = Result (성공/실패 여부)
  var result = resultDataSet[0];
  if (result.Msg !== "SUCC") return; // 성공 아닌 경우.

  let nCnt = ds_lo352List.getRowCount();
  if (nCnt > 0) {
    $c.gus.cfGoPrevPosition($p, gr_lo352List, scwin.pos_groupCode);
    // gr_lo352List.setFocusedCell(scwin.pos_groupCode, 0, true);
  }
  total.setValue(nCnt);
  scwin.f_applyLvlBtnState();
};

//권역 목록 Index Change >> 지역목록 검증 후 실행
scwin.gr_lo352List_onrowindexchange = async function (rowIndex, oldRow) {
  if (scwin._revertingNode) return;
  let chkValid1 = await $c.gus.cfValidate($p, [gr_lo354List]);
  let chkValid2 = await scwin.f_chkRgnCdDuplicate();
  if (!(chkValid1 && chkValid2)) {
    scwin._revertingNode = true;
    // 검증 실패 → 원래 행으로 복귀 (무한 반복 방지를 위해 이벤트 일시 중지)
    gr_lo352List.setFocusedCell(oldRow, 0);
    scwin._revertingNode = false;
    return false;
  }
  if (ds_lo352List.getRowStatusValue(rowIndex) == 0) {
    gr_lo352List.setCellReadOnly(rowIndex, "districtCd", true); //grid column edit 불가능
    gr_lo352List.setCellReadOnly(rowIndex, "districtNm", false);
    gr_lo352List.setCellReadOnly(rowIndex, "rmk", false);
  } else {
    gr_lo352List.setCellReadOnly(rowIndex, "districtCd", false); //grid column edit 가능
    gr_lo352List.setCellReadOnly(rowIndex, "districtNm", false);
    gr_lo352List.setCellReadOnly(rowIndex, "rmk", false);
  }
  ds_lo354List.clearFilter();
  let v_val = ds_lo352List.getCellData(rowIndex, "districtCd");
  if (v_val !== "" && v_val !== null) {
    // 권역코드가 있을 때만 필터 적용
    ds_lo354List.setColumnFilter({
      type: 'row',
      colIndex: 'districtCd',
      key: v_val,
      condition: 'and'
    });
  } else {
    // 새 행(districtCd 미입력)이면 두번째 그리드 아무것도 표시 안 함
    ds_lo354List.setColumnFilter({
      type: 'row',
      colIndex: 'districtCd',
      key: "___NONE___",
      condition: 'and'
    });
  }
  let nCnt2 = ds_lo354List.getRowCount();
  if (nCnt2 > 0) {
    total2.setValue(nCnt2);
  }

  //권역구조 Title
  let districtCd = ds_lo352List.getCellData(rowIndex, "districtCd");
  let districtNm = ds_lo352List.getCellData(rowIndex, "districtNm");
  if (rowIndex < 0 || districtCd == "") {
    sub_region.setValue("");
  } else {
    sub_region.setValue(districtCd + "-" + districtNm);
  }
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
//-------------------------------------------------------------------------
scwin.btn_save_onclick = async function (e) {
  scwin.preRow352 = false;
  // 저장 전 현재 트리 위치 기억
  scwin.hid_tv_index = ds_lo352Tree.getRowPosition() + 1;
  scwin.pos_groupCode = ds_lo352List.getRowPosition();
  if (await scwin.f_ReqFieldChk()) {
    let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirm) {
      $c.sbm.execute($p, sbm_save);
    }
  }
  scwin.preRow352 = true;
};

//-------------------------------------------------------------------------
// function name : f_ReqFieldChk
// function desc : 필수 입력항목 check
//-------------------------------------------------------------------------
scwin.f_ReqFieldChk = async function () {
  if (ds_lo352List.getModifiedIndex().length < 1 && ds_lo354List.getModifiedIndex().length < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["권역리스트"]); //변경된 정보가 없습니다.
    return;
  }

  //권역목록은 저장할 데이터가 존재하지 않습니다.
  if (ds_lo352List.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_LO_CRM_002);
    return;
  }

  // 권역코드 unique 값 검증
  let validArry = [{
    id: "districtCd",
    name: "권역코드",
    mandatory: true,
    key: true
  }, {
    id: "districtNm",
    name: "권역명",
    mandatory: true
  }];
  let chkValid1 = await $c.gus.cfValidateGrid($p, gr_lo352List, null, null, validArry, "권역목록");
  let chkValid2 = await $c.gus.cfValidate($p, [gr_lo354List]);
  if (!(chkValid1 && chkValid2)) return;
  let chkValid3 = await scwin.f_chkRgnCdDuplicate();
  if (!chkValid3) return;
  return true;
};
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
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_createTree();
  }
};

//grid pop >> 지역명 image button 클릭 시
scwin.pop_grid2 = function () {
  let rowIdx = ds_lo354List.getRowPosition();
  scwin.f_openCommPopUpGrid(1, "", ds_lo354List.getCellData(rowIdx, "rgnNm"), "F");
};
//grid pop callback
scwin.udc_comCode_grid_pop_callBackFunc = function (ret) {
  let rgnCd, rgnNm;
  // ret이 없거나, ['N/A']인 경우 무시
  if (!ret || ret.length === 1 && ret[0] === 'N/A') {
    rgnCd = "";
    rgnNm = "";
  } else {
    rgnCd = ret ? ret[0] : "";
    rgnNm = ret ? ret[1] : "";
  }
  ds_lo354List.setCellData(ds_lo354List.getRowPosition(), "rgnCd", rgnCd);
  ds_lo354List.setCellData(ds_lo354List.getRowPosition(), "rgnNm", rgnNm);
};

//grid pop change..
// 지역목록 > 지역코드, 지역명 변경시
scwin.gr_lo354List_onviewchange = function (info) {
  if (info.newValue === "") return;
  if (info.colId === "rgnCd") {
    scwin.f_openCommPopUpGrid(1, info.newValue, "", "T");
  } else if (info.colId === "rgnNm") {
    scwin.f_openCommPopUpGrid(1, "", info.newValue, "T");
  }
};

//-------------------------------------------------------------------------
// function name : addDistrictRow   
// function desc : 그리드 칼럼 추가
//-------------------------------------------------------------------------
scwin.addDistrictRow = function () {
  // 권역 목록에 행 추가
  let treeRow = ds_lo352Tree.getRowPosition(); // 트리 현재 선택 행
  let nRow = ds_lo352List.insertRow(); // 새 행 추가 후 인덱스 반환

  let lvl = parseInt(ds_lo352Tree.getCellData(treeRow, "lvl")) + 1;
  ds_lo352List.setCellData(nRow, "lvl", lvl);
  if (ds_lo352Tree.getCellData(treeRow, "lvl") == 0) {
    ds_lo352List.setCellData(nRow, "upperDistrictCd", ds_lo352Tree.getCellData(treeRow, "upperDistrictCd"));
    ds_lo352List.setCellData(nRow, "districtClsCd", "DG");
  } else if (ds_lo352Tree.getCellData(treeRow, "lvl") == 1) {
    ds_lo352List.setCellData(nRow, "upperDistrictCd", ds_lo352Tree.getCellData(treeRow, "districtCd"));
    ds_lo352List.setCellData(nRow, "districtClsCd", "DD");
  }
  gr_lo352List.setFocusedCell(nRow, "districtCd", true);
};

// 지역(권역구조) 목록에 행 추가
scwin.addRegionRow = function () {
  if (ds_lo352List.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, "권역목록을 먼저 선택하여 주십시오");
    return;
  }
  let listRow = ds_lo352List.getRowPosition();
  if (ds_lo352List.getCellData(listRow, "districtCd") == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["권역코드"]);
    gr_lo352List.setFocusedCell(listRow, "districtCd", true);
    return;
  }
  let nRow = ds_lo354List.insertRow();
  ds_lo354List.setCellData(nRow, "districtCd", ds_lo352List.getCellData(listRow, "districtCd"));
  ds_lo354List.setCellData(nRow, "districtGrpCd", ds_lo352List.getCellData(listRow, "upperDistrictCd"));
  gr_lo354List.setFocusedCell(nRow, "rgnCd", true);
};

//-------------------------------------------------------------------------
// function name : f_Delrow
// function desc : 그리드 칼럼 삭제
//-------------------------------------------------------------------------
scwin.delDistrictRow = function () {
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
  for (let i = ds_lo354List.getRowCount() - 1; i >= 0; i--) {
    if (ds_lo354List.getCellData(i, "districtCd") === districtCd) {
      if (ds_lo354List.getRowStatusValue(i) === 2) {
        ds_lo354List.removeRow(i);
      } else {
        ds_lo354List.deleteRow(i);
      }
    }
  }
  let focusIdx = Math.max(0, Math.min(nRow, ds_lo352List.getRowCount() - 1));
  gr_lo352List.setFocusedCell(focusIdx, 0);
};

// 지역 목록에 행 삭제
scwin.deleteRegionRow = function () {
  let nRow = ds_lo354List.getRowPosition();
  if (nRow === -1) return;
  if (ds_lo354List.getRowStatusValue(nRow) === 2) {
    ds_lo354List.removeRow(nRow);
  } else {
    ds_lo354List.deleteRow(nRow);
  }
  let focusIdx = Math.max(0, Math.min(nRow, ds_lo354List.getRowCount() - 1));
  gr_lo354List.setFocusedCell(focusIdx, 0);
};

//-------------------------------------------------------------------------
// function name : f_Undo
// function desc : 취소
//-------------------------------------------------------------------------
scwin.undoDistrictRow = function () {
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
  for (let i = ds_lo354List.getRowCount() - 1; i >= 0; i--) {
    if (ds_lo354List.getCellData(i, "districtCd") === districtCd) {
      if (ds_lo354List.getRowStatusValue(i) === 2) {
        ds_lo354List.removeRow(i);
      } else {
        ds_lo354List.undoRow(i);
      }
    }
  }
};

// 지역 목록에 행 취소
scwin.undoRegionRow = function () {
  let nRow = ds_lo354List.getRowPosition();
  if (nRow === -1) return;
  if (ds_lo354List.getRowStatusValue(nRow) === 2) {
    ds_lo354List.removeRow(nRow);
  } else {
    ds_lo354List.undoRow(nRow);
  }
};

//-------------------------------------------------------------------------
// function name : f_runExcel
// function desc : 엑셀저장
//-------------------------------------------------------------------------
scwin.runExcelDistrict = function () {
  let sheetTitle = "권역";
  const infoArr = [];
  const options = {
    fileName: sheetTitle,
    // + ".xls",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_lo352List, options, infoArr, 2 + 4 + 8 + 16);
};
scwin.runExcelRegion = function () {
  let sheetTitle = "권역구조";
  const infoArr = [];
  const options = {
    fileName: sheetTitle,
    // + ".xls",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_lo354List, options, infoArr, 2 + 4 + 8 + 16);
};

//-------------------------------------------------------------------------
// 그리드에서 입력된 코드/명칭 정보로  조회 (Grid PopUp)
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = function (disGubun, pCode, pName, pClose) {
  switch (disGubun) {
    case 1:
      // 지역코드 
      // 코드 창 실행되면 지역코드, 지역명 value "" 지우기
      ds_lo354List.setCellData(ds_lo354List.getRowPosition(), "rgnCd", "");
      ds_lo354List.setCellData(ds_lo354List.getRowPosition(), "rgnNm", "");
      udc_comCode_grid_pop.setSelectId("retrieveDistrictList");
      udc_comCode_grid_pop.cfCommonPopUp(scwin.udc_comCode_grid_pop_callBackFunc, pCode.trim(),
      // 화면에서의 ??? Code Element의	Value
      pName.trim(),
      // 화면에서의 ??? Name Element의	Value
      pClose,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      '5',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      null,
      // Title순서	
      null,
      // 보여주는 각 컬럼들의 폭	
      null,
      // 컬럼중에서 숨기는	컬럼 지정	
      ',,,,RG',
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      null,
      // POP-UP뛰을때 원도우의	사용자 정의	폭
      null,
      // POP-UP뛰을때 우도우의	사용자 정의	높이	
      null,
      // 윈도우 위치 Y좌표	
      null,
      // 윈도우 위치 X좌표
      null,
      // 중복체크여부	("F")
      'F',
      // 전체검색허용여부	("F")
      null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};
scwin._revertingNode = false; // 되돌리기 중 재진입 방지용
scwin.tv_lo352_onchange = async function (oldNode, newNode) {
  // 되돌리기 중 재진입 방지
  if (scwin._revertingNode) return;
  if (ds_lo352List.getModifiedIndex().length > 0 || ds_lo354List.getModifiedIndex().length > 0) {
    let confirmed = await $c.win.confirm($p, MSG_LO_CRM_001);
    if (confirmed) {
      ds_lo354List.undoAll();
      ds_lo352List.undoAll();
      scwin.tv_lo352_onclick(); // onclick이 스킵됐으므로 수동 실행
    } else {
      // return false 대신 이전 노드로 되돌리기
      scwin._revertingNode = true;
      // tv_lo352.findNodeByIndex(oldNode + 1, true);  // oldNode 파라미터 활용 (preRow 불필요)

      tv_lo352.findNodeByIndex(oldNode.index, true);
      scwin._revertingNode = false;
    }
  }
};

// 지역목록에서 중복값 여부 체크
scwin.f_chkRgnCdDuplicate = async function () {
  // rgnCd 중복 체크 - 현재 선택된 권역의 행만 대상으로
  let treeRow = ds_lo352Tree.getRowPosition();
  let curDistrictCd = ds_lo352Tree.getCellData(treeRow, "districtCd");
  let rgnCdMap = {};
  let visibleIdx = 0;
  let totalCnt = ds_lo354List.getRowCount();
  for (let i = 0; i < totalCnt; i++) {
    if (ds_lo354List.getRowStatus(i) === 4) continue;
    let rowDistrictCd = ds_lo354List.getCellData(i, "districtCd");
    if (rowDistrictCd !== curDistrictCd && rowDistrictCd !== "" && rowDistrictCd !== null) continue;
    visibleIdx++;
    let rgnCd = ds_lo354List.getCellData(i, "rgnCd");
    if (rgnCd === "" || rgnCd === null) continue;
    if (rgnCdMap[rgnCd] !== undefined) {
      await $c.win.alert($p, `권역구조목록의 ${visibleIdx}번째 데이터에서 지역코드은(는) 중복될 수 없습니다.`);
      gr_lo354List.setFocusedCell(i, "rgnCd", true);
      return false;
    }
    rgnCdMap[rgnCd] = i;
  }
  return true;
};

// 한글입력 방지 후 대문자 반환
scwin.capitalMask = function (value) {
  var filteredVal = scwin.f_filterHangul(value); // 한글만 제거
  return filteredVal.toUpperCase();
};

// 한글 입력 방지
scwin.f_filterHangul = function (value) {
  return value.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, ''); // 한글만 제거
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'grd_section1',class:'lybox flex_no col3'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'권역Tree',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',btnUser:'N',gridDownYn:'N',btnPlusYn:'Y',id:'udc_topGrdBtnPlus'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'tvw-wrap'},E:[{T:1,N:'w2:treeview',A:{tooltipGroupClass:'false',dataType:'listed',style:'height:540px',id:'tv_lo352',renderType:'virtual',class:'h-full',hierarchy:'true','ev:onclick':'scwin.tv_lo352_onclick',showTreeDepth:'5','ev:onchange':'scwin.tv_lo352_onchange'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lo352Tree'},E:[{T:1,N:'w2:label',A:{ref:'districtNm'}},{T:1,N:'w2:value',A:{ref:'districtCd'}},{T:1,N:'w2:depth',A:{ref:'lvl'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'sub_title',label:'권역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'N',btnUser:'N',gridDownYn:'Y',gridUpYn:'N',gridID:'gr_lo352List',gridDownFn:'scwin.runExcelDistrict',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_lo352List',style:'',autoFit:'allColumn',id:'gr_lo352List',visibleRowNum:'18',class:'wq_gvw',focusMode:'cell',focusMove:'true','ev:onrowindexchange':'scwin.gr_lo352List_onrowindexchange',rowStatusVisible:'true',gridName:'권역목록'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'권역코드',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column17',value:'권역명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column15',value:'비고',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'districtCd',displayMode:'label',mandatory:'true',maxLength:'7',displayFormatter:'scwin.f_filterHangul',applyFormat:'all'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'districtNm',displayMode:'label',textAlign:'left',mandatory:'true',maxLength:'50'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left',maxLength:'500'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'total',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',gridID:'gr_lo352List',rowAddFunction:'scwin.addDistrictRow',id:'udc_bottomGrdBtn',cancelFunction:'scwin.undoDistrictRow',rowDelFunction:'scwin.delDistrictRow',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddUserAuth:'C',delUserAuth:'D'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'sub_region',label:'ALL-단일권역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'Y',btnUser:'N',btnPlusYn:'N',gridID:'gr_lo354List',gridDownFn:'scwin.runExcelRegion',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_lo354List',id:'gr_lo354List',style:'',visibleRowNum:'18',visibleRowNumFix:'true',focusMode:'cell',focusMove:'true',rowStatusVisible:'true','ev:oncellindexchange':'scwin.gr_lo354List_oncellindexchange',gridName:'권역구조목록','ev:onrowindexchange':'scwin.gr_lo354List_onrowindexchange','ev:onviewchange':'scwin.gr_lo354List_onviewchange'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'지역코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'지역명',width:'140',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'rgnCd',inputType:'text',style:'',value:'',width:'100',mandatory:'true',maxLength:'7',applyFormat:'all',displayFormatter:'scwin.capitalMask',key:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rgnNm',inputType:'textImage',style:'',value:'',width:'140',textAlign:'left',mandatory:'true',maxLength:'50',viewType:'default',imageClickFunction:'scwin.pop_grid2'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',gridID:'gr_lo354List',rowAddFunction:'scwin.addRegionRow',id:'udc_bottomGrdBtn2',rowDelFunction:'scwin.deleteRegionRow',btnRowAddYn:'Y',btnRowDelYn:'Y',cancelFunction:'scwin.undoRegionRow',delUserAuth:'D',rowAddUserAuth:'C',btnRowAddObj:'btn_rowAdd2',btnRowDelObj:'btn_rowDel2',btnCancelObj:'btn_cancel2'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDistrictList',codeId:'pCode',validTitle:'',nameId:'pName',style:'width:%; height:px;display: none',id:'udc_comCode_grid_pop'}}]}]}]}]}]})