/*amd /ui/tn/op/transwrkindict/cntr/tn_304_03_09b.xml 38211 b59fbc5dd5547959898752e5e2a96604299dcda603b15e7db4db6e86b40e8e88 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blckCd',name:'BLOCK코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'orgBlckCd',name:'원작업장코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workPlaceInfo',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_workPlaceInfo_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_workPlaceInfo_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'blckCd',name:'ZONE코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'orgBlckCd',name:'원작업장코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'usblPyCnt',name:'가용평수',dataType:'number',defaultValue:'0',length:'8'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',defaultValue:'',length:'60'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text',defaultValue:'',length:'21'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text',defaultValue:'',length:'21'}},{T:1,N:'w2:column',A:{id:'blckNm',name:'구역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'demageYn',name:'DMG여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workPlaceInfoDetail',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'blckCd',name:'BLOCK코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'stBay',name:'시작BAY',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'endBay',name:'종료BAY',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'rw',name:'ROW',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'tier',name:'TIER',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'rfpsblYn',name:'RF가능여부',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text',defaultValue:'',length:'21'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text',defaultValue:'',length:'21'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'그룹코드',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'cd',name:'품명분류코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'품명분류',dataType:'text',defaultValue:'',length:'300'}},{T:1,N:'w2:column',A:{id:'orgBlckCd',name:'원작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'코드영문명약어',dataType:'text',defaultValue:'',length:'18'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_TierDataList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'TierCD',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'TierNM',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_comboDataList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.ds.op.wrkplan.stvwrkplan.RetrieveWorkPlaceEachBlockInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cond","key":"IN_DS1"},{"id":"ds_workPlaceInfo","key":"OUT_DS1"},{"id":"ds_workPlaceInfoDetail","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_workPlaceInfo","key":"OUT_DS1"},{"id":"ds_workPlaceInfoDetail","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSub',action:'/ncall.ds.op.wrkplan.stvwrkplan.RetrieveBlockEachTaxSubLocationInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cond","key":"IN_DS1"},{"id":"ds_workPlaceInfoDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_workPlaceInfoDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveSub_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.ds.op.wrkplan.stvwrkplan.SaveWorkPlaceEachLocationInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_workPlaceInfo","key":"IN_DS1"},{"action":"modified","id":"ds_workPlaceInfoDetail","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.rowFlag = ""; // 등록, 수정 후 저장 안하고 다른 master row 선택 불가능 구분자
scwin.nowCountRow = 0;
scwin.nowCountRow2 = 0;
scwin.pos_groupCode = 0;
scwin.oldPosition = 0;
scwin.MSG_OP_ERR_204 = "@에 변경된 사항이 있습니다. \n변경사항을 저장 후 수행하십시오.";
scwin.MSG_OP_ERR_205 = "종료BAY가 시작BAY보다 작을 수 없습니다.";
scwin.MSG_OP_ERR_206 = "시작BAY를 먼저 입력하십시오.";
scwin.userLobranCd = "";
scwin.isRowChanging = false;
scwin.saveYn = false;

//-------------------------------------------------------------------------
// 1. 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // 세션 정보 가져오기
  let memJson = $c.data.getMemInfo($p);
  scwin.userLobranCd = memJson.lobranCd || "";
  // 그리드 콤보 기초 데이터 생성
  scwin.f_setDataList();
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    $c.gus.cfDisableBtnOnly($p, [btn_subAdd, btn_subDel, btn_subCls]);
    // 로그인 부서로 CY 세팅
    if (scwin.userLobranCd == "4AA") {
      ed_con_wrkPlCd.setValue("4C01");
    } else if (scwin.userLobranCd == "4BB") {
      ed_con_wrkPlCd.setValue("4C02");
    } else if (scwin.userLobranCd == "5AA") {
      ed_con_wrkPlCd.setValue("5C08");
    }
    // 작업장 코드가 있으면 팝업(조회) 실행
    if (!$c.gus.cfIsNull($p, ed_con_wrkPlCd.getValue())) {
      scwin.f_openCommonPopUp(1, ed_con_wrkPlCd.getValue(), ed_con_wrkPlNm.getValue(), 'T', 'T');
    }
  }, {
    "delay": 50
  });
};
//-------------------------------------------------------------------------
// 2. 그리드에 사용될 dataset 세팅
//-------------------------------------------------------------------------
scwin.f_setDataList = function () {
  // BAY / ROW 코드 (01~99)
  let comboData = [];
  for (let i = 1; i < 100; i++) {
    let val = String(i).padStart(2, "0"); // 모던 JS 적용!
    comboData.push({
      "cd": val,
      "cdNm": val
    });
  }
  ds_comboDataList.setJSON(comboData);

  // TIER 코드 (1~9)
  let tierData = [];
  for (let i = 1; i < 10; i++) {
    tierData.push({
      "TierCD": String(i),
      "TierNM": String(i)
    });
  }
  ds_TierDataList.setJSON(tierData);
};

//-------------------------------------------------------------------------
// 3. 그리드 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function (intGubun) {
  // [공통 검증] 작업장별 BLOCK 정보의 첫번째 문자는 영문이여야 합니다.
  if (ds_workPlaceInfo.getRowCount() > 0) {
    let blckCd = ds_workPlaceInfo.getCellData(ds_workPlaceInfo.getRowCount() - 1, "blckCd");
    if (blckCd != "") {
      let onelen = blckCd.substring(0, 1);
      if (onelen.match(/^[a-zA-Z]+$/ig) == null) {
        $c.win.alert($p, "작업장별 BLOCK 정보의 첫번째 문자는 영문이여야 합니다.");
        ds_workPlaceInfo.setCellData(ds_workPlaceInfo.getRowCount() - 1, "blckCd", "");
        ds_workPlaceInfo.setRowPosition(0);
        return;
      }
    }
  }
  if (intGubun == 'main') {
    $c.gus.cfEnableBtnOnly($p, [btn_subAdd, btn_subDel, btn_subCls]);
    scwin.nowCountRow = ds_workPlaceInfo.getRowCount();
    let newRow = ds_workPlaceInfo.insertRow(scwin.nowCountRow);
    ds_workPlaceInfo.setRowPosition(newRow);

    // 초기 nowCountRow가 0일경우 wrkPlCd 자동입력 or 팝업창
    if (scwin.nowCountRow == 0) {
      if (ed_con_wrkPlCd.getValue() != "") {
        ds_workPlaceInfo.setCellData(newRow, "wrkPlCd", ed_con_wrkPlCd.getValue());
      } else {
        scwin.f_openCommonPopUp(2, '', '', 'T', 'T');
      }
    } else {
      ds_workPlaceInfo.setCellData(newRow, "wrkPlCd", ds_workPlaceInfo.getCellData(0, "wrkPlCd"));
    }
    ds_workPlaceInfo.setCellData(newRow, "usblPyCnt", 0);
    // 빈 값 싹 밀어주기
    let cols = ["rmk", "blckNm", "demageYn", "regId", "regDtm", "modId", "modDtm"];
    cols.forEach(col => ds_workPlaceInfo.setCellData(newRow, col, ""));
    scwin.oldPosition = newRow;
  } else if (intGubun == 'sub') {
    scwin.nowCountRow2 = ds_workPlaceInfoDetail.getRowCount();
    let newRow = ds_workPlaceInfoDetail.insertRow(scwin.nowCountRow2);
    ds_workPlaceInfoDetail.setRowPosition(newRow);
    ds_workPlaceInfoDetail.setCellData(newRow, "wrkPlCd", ds_workPlaceInfo.getCellData(ds_workPlaceInfo.getRowPosition(), "wrkPlCd"));
    ds_workPlaceInfoDetail.setCellData(newRow, "blckCd", ds_workPlaceInfo.getCellData(ds_workPlaceInfo.getRowPosition(), "blckCd"));
    ds_workPlaceInfoDetail.setCellData(newRow, "seq", "");
    if (scwin.nowCountRow2 == 0) {
      ds_workPlaceInfoDetail.setCellData(newRow, "stBay", "01");
      ds_workPlaceInfoDetail.setCellData(newRow, "endBay", "02");
      ds_workPlaceInfoDetail.setCellData(newRow, "rw", "01");
      ds_workPlaceInfoDetail.setCellData(newRow, "tier", "1");
    } else {
      let val = parseInt(ds_workPlaceInfoDetail.getCellData(scwin.nowCountRow2 - 1, "endBay"), 10);
      let stVar = val + 1;
      let endVar = val + 2;
      if (stVar > 99 || endVar > 99) {
        $c.win.alert($p, "추가 BAY가 없습니다.");
        ds_workPlaceInfoDetail.undoRow(newRow);
        return;
      }
      ds_workPlaceInfoDetail.setCellData(newRow, "stBay", String(stVar).padStart(2, "0"));
      ds_workPlaceInfoDetail.setCellData(newRow, "endBay", String(endVar).padStart(2, "0"));
      ds_workPlaceInfoDetail.setCellData(newRow, "rw", "01");
      ds_workPlaceInfoDetail.setCellData(newRow, "tier", "1");
    }
    let subCols = ["rfpsblYn", "regId", "regDtm", "modId", "modDtm"];
    subCols.forEach(col => ds_workPlaceInfoDetail.setCellData(newRow, col, ""));
  }
};

//-------------------------------------------------------------------------
// 4. 그리드 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = function (gubun) {
  if (gubun == 'main') {
    let masterRow = ds_workPlaceInfo.getRowPosition();
    if (masterRow < 0) return;
    if (ds_workPlaceInfo.getRowStatus(masterRow) == "C") {
      ds_workPlaceInfo.removeRow(masterRow);
      ds_workPlaceInfoDetail.removeAll();
    } else {
      ds_workPlaceInfo.modifyRowStatus(masterRow, "D");
      let subRowCount = ds_workPlaceInfoDetail.getRowCount();
      for (let i = 0; i < subRowCount; i++) {
        if (ds_workPlaceInfoDetail.getRowStatus(i) == "C") {
          ds_workPlaceInfoDetail.removeRow(i);
          i--;
          subRowCount--; // 인덱스 보정
        } else {
          ds_workPlaceInfoDetail.modifyRowStatus(i, "D");
        }
      }
    }
  } else if (gubun == 'sub') {
    let subRow = ds_workPlaceInfoDetail.getRowPosition();
    if (subRow < 0) return;
    if (ds_workPlaceInfoDetail.getRowStatus(subRow) == "C") {
      ds_workPlaceInfoDetail.removeRow(subRow);
    } else {
      ds_workPlaceInfoDetail.modifyRowStatus(subRow, "D");
    }
  }
};

//-------------------------------------------------------------------------
// 5. 메인 그리드를 취소했을 경우 sub그리드까지 취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  var idx = ds_workPlaceInfo.getRowPosition();
  var rowStatus = ds_workPlaceInfo.getRowStatus(idx);
  if (rowStatus == "C") {
    scwin.rowFlag = 'DELETE';
    ds_workPlaceInfo.removeRow(idx);
    ds_workPlaceInfoDetail.removeAll();
  }
  ds_workPlaceInfoDetail.undoAll();
  ds_workPlaceInfo.undoRow(idx);
};

// 6. 조회 및 저장 
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!scwin.saveYn) {
    //저장 아닐 시

    let ret = await $c.gus.cfValidate($p, [tbl_search_con]);
    if (ret !== true) return;
  } else {
    if (ed_con_wrkPlCd.getValue().trim() === '') {
      return;
    }
  }
  ds_workPlaceInfoDetail.undoAll();
  ds_workPlaceInfo.undoAll();
  dma_cond.set("wrkPlCd", ed_con_wrkPlCd.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_Save = async function () {
  scwin.saveYn = true;
  if (!(await $c.gus.cfValidate($p, [gr_workPlaceInfo], null, true))) return false;
  if (!(await $c.gus.cfValidate($p, [gr_workPlaceInfoDetail], null, true))) return false;
  if (!scwin.f_checkUsblPyCnt()) return;
  if (ds_workPlaceInfo.getModifiedIndex().length == 0 && ds_workPlaceInfoDetail.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }
  let isConfirm = await $c.win.confirm($p, "저장하시겠습니까?");
  if (isConfirm) {
    scwin.rowFlag = "SAVE";
    var rowCnt = ds_workPlaceInfoDetail.getRowCount();
    for (let i = 0; i < rowCnt; i++) {
      if (ds_workPlaceInfoDetail.getRowStatus(i) !== 'D') {
        ds_workPlaceInfoDetail.modifyRowStatus(i, "C");
      }
    }
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_checkUsblPyCnt = function () {
  let cnt = ds_workPlaceInfo.getRowCount();
  for (let i = 0; i < cnt; i++) {
    if (parseInt(ds_workPlaceInfo.getCellData(i, "usblPyCnt") || 0, 10) === 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["CAPA"]);
      return false;
    }

    // [웹스퀘어 최적화] 행이 수정('U')된 상태일 때만 원본 Key 비교
    if (ds_workPlaceInfo.getRowStatus(i) === "U") {
      let orgBlckCd = ds_workPlaceInfo.getOriginalCellData(i, "blckCd");
      let curBlckCd = ds_workPlaceInfo.getCellData(i, "blckCd");
      if (curBlckCd != orgBlckCd) {
        $c.win.alert($p, "BLOCK 값은 Key값이므로 직접적으로 수정 할 수 없습니다.\n\n삭제 후 신규 등록 해주세요.");
        ds_workPlaceInfo.undoRow(i);
        return false;
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 조회 조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  ds_workPlaceInfo.undoAll();
  ds_workPlaceInfoDetail.undoAll();
  ds_workPlaceInfo.removeAll();
  ds_workPlaceInfoDetail.removeAll();
  $c.gus.cfInitObjects($p, [ed_con_wrkPlCd, ed_con_wrkPlNm]);
  ds_workPlaceInfo.removeAll();
  ds_workPlaceInfoDetail.removeAll();
  tbx_totalRows1.setValue("0");
  tbx_totalRows2.setValue("0");
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  if (disGubun == 1) {
    udc_con_wrkPlCd.setSelectId("retrieveWrkPlInfo");
    udc_con_wrkPlCd.cfCommonPopUp(scwin.udc_con_wrkPlCd_callBackFunc, pCode, pName, pClose, null, null, null, null, ',,,1,,,,,', "440", "500", null, null, 'F', pAllSearch, "작업장,작업장코드,작업장명");
  } else if (disGubun == 2) {
    udc_comCode1.setSelectId("retrieveWrkPlInfo");
    udc_comCode1.cfCommonPopUp(scwin.udc_grd_wrkPlCd_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, 'F', pAllSearch, "작업장,작업장코드,작업장명");
  }
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.udc_con_wrkPlCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_con_wrkPlCd, ed_con_wrkPlNm);
};
scwin.udc_grd_wrkPlCd_callBackFunc = function (ret) {
  if (ret != null && ret[0] != "N/A") {
    ds_workPlaceInfo.setCellData(ds_workPlaceInfo.getRowPosition(), "wrkPlCd", ret[0]);
  } else {
    ds_workPlaceInfo.removeRow(ds_workPlaceInfo.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// 8. [핵심] 행 이동 전 이벤트 (onbeforerowpositionchange 적용)
//-------------------------------------------------------------------------
scwin.ds_workPlaceInfo_onbeforerowpositionchange = function (info) {
  if (scwin.isRowChanging) return true;
  if (!btn_save.getDisabled() && ds_workPlaceInfoDetail.getModifiedIndex().length > 0) {
    scwin.f_checkRowChangeAsync(info);
    return false;
  }
  return true;
};
scwin.f_checkRowChangeAsync = async function (info) {
  // [추가] 삭제 중일 때는 저장 여부 묻지 않고 바로 다음 행으로 이동
  if (scwin.rowFlag == 'DELETE') {
    scwin.isRowChanging = true;
    ds_workPlaceInfo.setRowPosition(info.newRowIndex);
    scwin.isRowChanging = false;
    scwin.rowFlag = '';
    return;
  }
  if (scwin.rowFlag == 'SAVE') {
    scwin.rowFlag = '';
    return false;
  }
  let ret = await $c.win.confirm($p, MSG_CM_CRM_005);
  if (ret) {
    // OK 눌렀을 때: 원복 처리
    if (ds_workPlaceInfo.getRowStatus(info.oldRowIndex) != "C") {
      ds_workPlaceInfo.undoRow(info.oldRowIndex);
    }
    scwin.isRowChanging = true;
    ds_workPlaceInfo.setRowPosition(info.newRowIndex);
    scwin.isRowChanging = false;
  }
};
//-------------------------------------------------------------------------
// [마스터] 행 이동 후 로직 
//-------------------------------------------------------------------------
scwin.ds_workPlaceInfo_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  // 데이터가 없을 때 버튼 비활성화 먼저 처리
  if (row < 0 || ds_workPlaceInfo.getRowCount() == 0) {
    $c.gus.cfDisableBtnOnly($p, [btn_subAdd, btn_subDel, btn_subCls]);
    return;
  }
  dma_cond.set("blckCd", ds_workPlaceInfo.getCellData(row, "blckCd"));
  $c.sbm.execute($p, sbm_retrieveSub);
  if (ds_workPlaceInfo.getRowStatus(row) == "C") {
    $c.gus.cfEnableKeyData($p);
  } else {
    $c.gus.cfDisableKeyData($p);
  }
};

//-------------------------------------------------------------------------
// [마스터] 셀 편집 완료 (BLOCK코드 중복체크)
//-------------------------------------------------------------------------
scwin.gr_workPlaceInfo_onviewchange = function (info) {
  if (info.colID == "blckCd") {
    let row = info.rowIndex;
    let val = info.newValue;
    if (ds_workPlaceInfo.getRowCount() > 0 && val != "") {
      let tmpRsData = ds_workPlaceInfo.getMatchedIndex("blckCd", val, true);
      // 내가 아닌 다른 행에 중복값이 있다면?
      if (tmpRsData.length > 1 || tmpRsData.length == 1 && tmpRsData[0] != row) {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["BLOCK코드"]);
        ds_workPlaceInfo.setCellData(row, "blckCd", "");
      }
    }
  }
};

//-------------------------------------------------------------------------
// [서브] 셀 편집 완료 (시작BAY, 종료BAY 교차/중복 체크)
//-------------------------------------------------------------------------
scwin.gr_workPlaceInfoDetail_onviewchange = function (info) {
  let colid = info.colId;
  let row = info.rowIndex;
  if (colid != "stBay" && colid != "endBay") return;
  let curVal = ds_workPlaceInfoDetail.getCellData(row, colid);
  if (curVal == "") return;
  let sVal = "";
  let eVal = "";
  let status = "";

  // 시작BAY 필수 체크
  if (ds_workPlaceInfoDetail.getCellData(row, "stBay") == "" && ds_workPlaceInfoDetail.getCellData(row, "endBay") != "") {
    $c.win.alert($p, scwin.MSG_OP_ERR_206);
    ds_workPlaceInfoDetail.setCellData(row, "endBay", "");
    ds_workPlaceInfoDetail.setRowPosition(row);
    gr_workPlaceInfoDetail.setFocusedCell(row, "stBay");
    return;
  }
  for (let i = 0; i < ds_workPlaceInfoDetail.getRowCount(); i++) {
    sVal = ds_workPlaceInfoDetail.getCellData(i, "stBay");
    eVal = ds_workPlaceInfoDetail.getCellData(i, "endBay");
    if (i != row) {
      if (curVal > sVal) {
        if (curVal > eVal) {
          status = "T";
        } else if (curVal <= eVal) {
          $c.win.alert($p, "[" + (i + 1) + "]번째 BAY와 중복됩니다.");
          ds_workPlaceInfoDetail.setCellData(row, colid, "");
          return;
        }
      } else if (curVal < sVal) {
        if (curVal >= eVal) {
          $c.win.alert($p, "시작BAY가 중복됩니다.");
          ds_workPlaceInfoDetail.setCellData(row, colid, "");
          return;
        } else if (curVal < eVal) {
          status = "T";
        }
      } else {
        $c.win.alert($p, "[" + (i + 1) + "]번째 BAY와 중복됩니다.");
        ds_workPlaceInfoDetail.setCellData(row, colid, "");
        return;
      }
    } else if (i == row) {
      if (sVal != "" && eVal != "" && sVal > eVal) {
        $c.win.alert($p, "시작BAY가 종료BAY보다 큽니다.");
        ds_workPlaceInfoDetail.setCellData(row, colid, "");
        return;
      } else {
        status = "T";
      }
    }
  }
};
scwin.gr_workPlaceInfo_ontextimageclick = function (row, colId) {
  if (colId == "wrkPlCd") {
    if (ds_workPlaceInfo.getCellData(row, "wrkPlCd") == "") {
      if (ed_con_wrkPlCd.getValue() != "") {
        ds_workPlaceInfo.setCellData(row, "wrkPlCd", ed_con_wrkPlCd.getValue());
      } else {
        scwin.f_openCommonPopUp(2, '', '', 'T', 'T');
      }
    }
  }
};
scwin.gr_workPlaceInfo_onviewchange = function (info) {
  if (info.colID == "blckCd") {
    let row = info.rowIndex;
    let val = info.newValue.toUpperCase();
    if (ds_workPlaceInfo.getRowCount() > 0 && val != "") {
      let tmpRsData = ds_workPlaceInfo.getMatchedIndex("blckCd", val, true);
      if (tmpRsData.length > 1 || tmpRsData.length == 1 && tmpRsData[0] != row) {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["BLOCK코드"]);
        ds_workPlaceInfo.setCellData(row, "blckCd", "");
      } else {
        ds_workPlaceInfo.setCellData(row, "blckCd", val);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 9. 서브미션 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  scwin.isRowChanging = true;
  let resData = e.responseJSON.OUT_DS1;
  if (resData.length < 1 && scwin.saveYn) {
    return;
  }
  for (let i = 0; i < resData.length; i++) {
    let inVal = resData[i].demageYn;
    resData[i].demageYn = inVal === "Y" ? "1" : inVal === "N" ? "0" : "";
  }
  ds_workPlaceInfo.setJSON(resData);
  tbx_totalRows1.setValue(ds_workPlaceInfo.getRowCount());
  let cnt = ds_workPlaceInfoDetail.getRowCount();
  for (let i = 0; i < cnt; i++) {
    ds_workPlaceInfoDetail.modifyRowStatus(i, "R");
  }
  if (ds_workPlaceInfo.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    $c.gus.cfDisableBtnOnly($p, [btn_subAdd, btn_subDel, btn_subCls]);
    ds_workPlaceInfoDetail.removeAll();
    ds_workPlaceInfo.removeAll();
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_subAdd, btn_subDel, btn_subCls]);
    let targetRow = 0; // 기본값은 첫 번째 행 (0번)

    if (scwin.lastSavedBlckCd) {
      let matched = ds_workPlaceInfo.getMatchedIndex("blckCd", scwin.lastSavedBlckCd, true);
      if (matched.length > 0) {
        targetRow = matched[0];
      }
      scwin.lastSavedBlckCd = "";
    }
    ds_workPlaceInfo.setRowPosition(targetRow);
  }
  scwin.isRowChanging = false;
};
scwin.sbm_retrieveSub_submitdone = function (e) {
  tbx_totalRows2.setValue(ds_workPlaceInfoDetail.getRowCount());
};
scwin.sbm_save_submitdone = async function (e) {
  let rs = e.responseJSON.resultDataSet || [];

  // 첫 번째 데이터의 Code가 "-1"이면 실패로 간주
  if (rs.length > 0 && rs[0].Code === "-1") {
    return;
  }
  //  재조회하기 전에 현재 작업 중이던 행의 Key(blckCd)를 기억해둠
  let curRow = ds_workPlaceInfo.getRowPosition();
  if (curRow > -1) {
    scwin.lastSavedBlckCd = ds_workPlaceInfo.getCellData(curRow, "blckCd");
  } else {
    scwin.lastSavedBlckCd = "";
  }
  ds_workPlaceInfoDetail.undoAll();
  ds_workPlaceInfo.undoAll();
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  await scwin.f_Retrieve(); // 저장 후 재조회
};

//-------------------------------------------------------------------------
// 10. 이벤트 핸들러 맵핑
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = function () {
  scwin.saveYn = false;
  scwin.f_Retrieve();
};
scwin.btn_clear_onclick = function () {
  scwin.f_FieldClear();
};
scwin.btn_save_onclick = function () {
  scwin.f_Save();
};
scwin.f_AddRowMain = function () {
  scwin.f_AddRow('main');
};
scwin.f_DelRowMain = function () {
  scwin.rowFlag = "DELETE"; //서브 그리드 삭제 여부 묻는 confirm 창 안뜨게 하기
  scwin.f_DelRow('main');
};
scwin.f_AddRowSub = function () {
  scwin.f_AddRow('sub');
};
scwin.f_DelRowSub = function () {
  scwin.f_DelRow('sub');
};
scwin.btn_subCls_onclick = function () {
  ds_workPlaceInfoDetail.undoRow(ds_workPlaceInfoDetail.getRowPosition());
};
scwin.udc_con_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_con_wrkPlCd.getValue(), ed_con_wrkPlNm.getValue(), 'T', 'T');
};
scwin.udc_con_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_con_wrkPlCd, ed_con_wrkPlNm, 1);
};
scwin.udc_con_wrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_con_wrkPlNm, ed_con_wrkPlCd, 1, false);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search_con',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:';float:;position:;',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_con_wrkPlCd',nameId:'ed_con_wrkPlNm',btnId:'btn_con_wrkPlCd',id:'udc_con_wrkPlCd','ev:onclickEvent':'scwin.udc_con_wrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_con_wrkPlCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_con_wrkPlCd_onviewchangeNameEvent',validTitle:'작업장코드',mandatoryCode:'true',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',refDataCollection:'dma_cond',code:'wrkPlCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'작업장별 BLOCK 정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_workPlaceInfo',style:'',autoFit:'allColumn',id:'gr_workPlaceInfo',visibleRowNum:'15',class:'wq_gvw','ev:oneditkeyup':'scwin.gr_workPlaceInfo_oneditkeyup','ev:oneditend':'scwin.gr_workPlaceInfo_oneditend',rowStatusVisible:'true',dataName:'작업장별 BLOCK 정보',validFeatures:'ignoreStatus=no',validExp:'blckCd:BLOCK코드:yes,usblPyCnt:가용평수:yes'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column1',value:'작업장',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column16',value:'BLOCK',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column15',value:'CAPA',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column11',value:'특기사항',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'구역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column22',value:'DMG여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkPlCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'blckCd',value:'',displayMode:'label',hidden:'false',maxLength:'2',ignoreChar:'ㄱ-ㅣ가-힣'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'usblPyCnt',displayMode:'label',readOnly:'false',mandatory:'true',displayFormat:'#,###.0',dataType:'number',maxLength:'4'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'blckNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'autoComplete',style:'',id:'demageYn',value:'',displayMode:'label',dataType:'number',allOption:'',chooseOption:'',ref:'',trueValue:'1',falseValue:'0',valueType:'other',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddFunction:'scwin.f_AddRowMain',btnRowAddObj:'btn_pathAdd',rowAddUserAuth:'C',rowDelFunction:'scwin.f_DelRowMain',gridID:'gr_workPlaceInfo',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',cancelFunction:'scwin.f_Undo',rowDelUserAuth:'D',btnRowDelObj:'btn_pathDel',btnCancelObj:'btn_pathCls'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'BLOCK별 세부 구획 정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_workPlaceInfoDetail',style:'',autoFit:'allColumn',id:'gr_workPlaceInfoDetail',visibleRowNum:'15',class:'wq_gvw','ev:oneditend':'scwin.gr_gridView2_oneditend','ev:ontextimageclick':'scwin.gr_workPlaceInfoDetail_ontextimageclick',rowStatusVisible:'true','ev:onviewchange':'scwin.gr_workPlaceInfoDetail_onviewchange',dataName:'BLOCK별 세부 구획',validFeatures:'ignoreStatus=no',validExp:'stBay:시작BAY:yes,endBay:종료BAY:yes,rw:ROW:yes,tier:TIER:yes'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column18',value:'BLOCK',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'109',inputType:'text',id:'column15',value:'시작BAY(CELL)',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column11',value:'종료BAY(CELL)',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'ROW',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column3',value:'TIER',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'RF가능여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'blckCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'109',inputType:'select',id:'stBay',displayMode:'label',readOnly:'false',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_comboDataList'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'endBay',displayMode:'label',readOnly:'false',mandatory:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_comboDataList'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'rw',displayMode:'label',readOnly:'false',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_comboDataList'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'200',inputType:'select',id:'tier',displayMode:'label',textAlign:'center',mandatory:'true',readOnly:'false',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_TierDataList'},E:[{T:1,N:'w2:label',A:{ref:'TierNM'}},{T:1,N:'w2:value',A:{ref:'TierCD'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',style:'',id:'rfpsblYn',value:'',displayMode:'label',hidden:'false'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddFunction:'scwin.f_AddRowSub',rowAddUserAuth:'C',rowDelUserAuth:'D',rowDelFunction:'scwin.f_DelRowSub',btnRowDelYn:'Y',btnRowAddYn:'Y',btnDelYn:'N',btnCancelYn:'Y',btnRowAddObj:'btn_subAdd',btnRowDelObj:'btn_subDel',btnCancelObj:'btn_subCls',gridID:'gr_workPlaceInfoDetail'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',codeId:'',id:'udc_comCode1',nameId:'',popupID:'',style:'display:none'}}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',codeId:'',id:'udc_comCode2',nameId:'',popupID:'',style:'display:none'}}]}]}]})