/*amd /ui/ac/co/rsltsmgnt/rsltsaggr/co_403_01_01b.xml 41210 f501c19ba11f1d252414e658309ec2181b4280ba11560ab775a2143e4a9f1560 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'asetCostCd',name:'자산비용코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetCostCdNm',name:'자산비용코드명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_master_onbeforerowpositionchange','ev:onrowpositionchange':'scwin.ds_master_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ver',name:'버젼',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planRsltsClsCd',name:'계획실적구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'intRt',name:'금리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkLevel',name:'체크레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetCostCd',name:'자산비용코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetCostCdNm',name:'자산비용코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtNm',name:'발행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAsetCostCd',name:'상위자산비용코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAsetCostCdNm',name:'상위자산비용코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetCostLvl',name:'자산비용레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aggrClsCd',name:'집계구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrlAmtRegYn',name:'조정금액등록여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'정렬순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aggrYn',name:'집계여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'관리계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctNm',name:'관리계정명',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.rsltsmgnt.rsltsaggr.RetrieveAssetsCostComputationStandardCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search", "key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.co.rsltsmgnt.rsltsaggr.RegistAssetsCostComputationStandardCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 자산비용산정기준등록
 * 메뉴경로 : 회계/관리회계/실적관리/실적집계/자산비용관리/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/rsltsaggr/co_403_01_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-12-02
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 *    5. [완료]화면목록이 tree임(크기조정)
 *    6. 트리뷰 밑 행추가, 행삭제 버튼 작게 해야함(sm 안먹힘)
 * 참고사항 :
 *    1. ☏ onbeforerowpositionchange 이벤트에 $c.gus.cfValidate([tbl_asetCost]) 처리 안됨
 *    ☞ 일단 scwin.f_ValidationSync() 만들어서 처리(scwin.setInit()에 ds_list.reform() 필수, 조회 시 이벤트 안태움)
 *    2. 상수값 가져오는거 어떻게 할지? DGlobalValue.java 이런거 있을때마다 개발자가 DGlobalValue.js로 변경해서 올려야 하나?
 * 수정이력 :
 *    - 2025-12-02      배기원    최초작성
 */

scwin.load_row = 0; //조회후 focus가게 할 row
scwin.rootLevel = 1; //root level
scwin.maxLevel = 10;

//상수값(임시)
scwin.DGlobalValue = {
  "ALL": -1,
  "TRUE": 1,
  "FALSE": 0
};

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FI001",
    compID: "lc_acctClsCd"
  },
  //계정구분
  {
    grpCd: "FI035",
    compID: "lc_asetCostLvl"
  },
  //자산비용레벨
  {
    grpCd: "CO014",
    compID: "lc_aggrClsCd"
  } //집계구분
  ];
  $c.data.setCommonCode($p, codeOptions);
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  ed_upperAsetCostCd.hidVal = ""; // 상위계정코드 히든값
  ed_mgntAcctCd.hidVal = ""; // 관리계정코드 히든값
  ds_master.removeAll();
  scwin.load_row = 0;
  $c.gus.cfDisableObjects($p, tbl_asetCost);
  $c.gus.cfDisableBtn($p, [btn_addItem, btn_cancelItem, btn_update, btn_save]);
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  $c.gus.cfTurnCreateFlag($p, true);
  scwin.f_HeaderCreate();
  $c.gus.cfDisableObjects($p, tbl_asetCost);
  $c.gus.cfDisableBtn($p, [btn_update, btn_save]);
  scwin.setInit();
  scwin.f_FieldClear();
  ed_srchAsetCostCd.focus();
};

/**
 * 조회필드 CLEAR
 */
scwin.f_FieldClear = function () {
  scwin.f_SetSrchDefault();
};

/**
 * 조회 기본값 설정
 */
scwin.f_SetSrchDefault = function () {
  lc_srchUseYn.setValue(scwin.DGlobalValue.TRUE);
  ed_srchAsetCostCd.setValue("");
  ed_srchAsetCostCdNm.setValue("");
  ed_srchAsetCostCd.focus();
};

/**
* 조회버튼
*/
scwin.f_Retrieve = async function () {
  if (ds_master.getRowCount() > 0 && ds_master.getModifiedIndex().length > 0) {
    if (!(await $c.win.confirm($p, MSG_CM_CRM_005))) {
      return;
    }
  }
  scwin.setInit();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    let rowCnt = ds_master.getRowCount();
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    } else {
      scwin.load_row = scwin.load_row == 0 ? 1 : scwin.load_row;
      tv_treeView.findNodeByIndex(scwin.load_row, true);
      tv_treeView.focus();
    }
    if ($c.gus.cfCheckCreateFlag($p)) {
      $c.gus.cfTurnCreateFlag($p, false);
    }
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 행추가
 */
scwin.f_Add = async function () {
  if (await $c.gus.cfCheckCreateFlag($p)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_008, [""]);
    return;
  }
  let row = ds_master.getRowPosition();
  if (ds_master.getRowCount() > 0) {
    if (!(await scwin.f_ValidateRow(row))) {
      return;
    }
  }

  //자산비용코드
  if ($c.gus.cfIsNull($p, ds_master.getCellData(row, "asetCostCd"))) {
    await $c.gus.cfAlertMsg($p, "상위 자산비용코드가 저장되지 않았습니다.");
    return;
  }

  //let checkLevel  = tv_treeView.ItemLevel;
  var node = tv_treeView.getSelectedNode();
  checkLevel = node ? node.depth + 1 : 1;
  let asetCostLvl = ds_master.getCellData(row, "asetCostLvl");
  // let comboIndex  = acb_asetCostLvl.IndexOfColumn("code", asetCostLvl + 1);

  var newRow;
  if (row === ds_master.getRowCount() - 1 || ds_master.getRowCount() === 0) {
    newRow = ds_master.insertRow();
  } else {
    newRow = ds_master.insertRow(row + 1);
  }
  ds_master.setCellData(newRow, "checkLevel", checkLevel);
  ds_master.setCellData(newRow, "upperAsetCostCd", ds_master.getCellData(row, "asetCostCd"));
  ds_master.setCellData(newRow, "upperAsetCostCdNm", ds_master.getCellData(row, "asetCostCdNm"));
  ds_master.setCellData(newRow, "acctClsCd", ds_master.getCellData(row, "acctClsCd"));
  //자산비용레벨 +1
  ds_master.setCellData(newRow, "asetCostLvl", Number(asetCostLvl) + 1);
  ds_master.setCellData(newRow, "aggrClsCd", ds_master.getCellData(row, "aggrClsCd"));
  ed_upperAsetCostCd.hidVal = ds_master.getCellData(row, "asetCostCd");
  ds_master.setCellData(newRow, "useYn", scwin.DGlobalValue.TRUE);
  ds_master.setCellData(newRow, "sortSeq", 0);

  // tv_treeView.reset();
  // tv_treeView.index = row + 1;
  tv_treeView.findNodeByIndex(newRow + 1, true);
  tv_treeView.focus();
  $c.gus.cfEnableObjects($p, tbl_asetCost);
  $c.gus.cfDisableKey($p);
  $c.gus.cfEnableObjects($p, [ed_upperAsetCostCd, ed_mgntAcctCd]);
  $c.gus.cfDisableBtn($p, [btn_update]);
  ed_asetCostCdNm.focus();
};

/**
 * 행삭제
 * TOBE 사용안함(ASIS 주석처리)
 */
scwin.f_Delete = async function () {
  //조회하지 않은 경우
  if ($c.gus.cfCheckCreateFlag($p)) {
    // MSG_CM_WRN_008   =  "검색한 데이터가 존재하지 않습니다.<BR>먼저 @검색을 하십시오."
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_008, [""]);
    return;
  }
  if (ds_master.getRowCount() == 0) {
    // MSG_CM_ERR_003   = "해당되는 자료가 존재하지 않습니다."
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }

  //자식아이템이 있는 지 체크
  if (scwin.f_HasChild(ds_master.getCellData(ds_master.getRowPosition(), "asetCostCd")) == true) {
    await $c.gus.cfAlertMsg($p, "하위 자산비용코드가 존재합니다.");
    return;
  }
  $c.gus.cfInitHidVal($p);
  ds_master.deleteRow(ds_master.getRowPosition());
  $c.gus.cfDisableBtn($p, [btn_Update]);

  //ExpandLevel에 특정 Level값을 설정하면, 설정된 Level보다 상위에 있는 모든 Item을 펼친다
  // tv_treeView.ExpandLevel = scwin.maxLevel;
  expandToLevel(tv_treeView, scwin.maxLevel);
  if (ds_master.getRowCount() == 0) {
    $c.gus.cfDisableObjects($p, tbl_asetCost);
    if (ds_master.getModifiedIndex().length > 0) {
      if (await $c.win.confirm($p, MSG_CM_CRM_015)) {
        await scwin.f_Save();
      }
    }
  } else {
    $c.gus.cfDisableKey($p);
    $c.gus.cfEnableObjects($p, [udc_srchAsetCostCd]);
  }
};

/**
 * 특정노드 펼치기
 */
function expandToLevel(treeId, level) {
  const tree = treeId;
  for (let i = 0; i < ds_master.getRowCount(); i++) {
    const nodeLevel = ds_master.getCellData(i, "level"); // 데이터셋에 level 컬럼 있다고 가정
    const nodeId = ds_master.getCellData(i, "id"); // 노드 id 컬럼
    if (nodeLevel <= level) {
      tree.expandNode(nodeId);
    }
  }
}
;

/**
 * 취소
 */
scwin.f_Cancel = function () {
  if ($c.gus.cfCheckCreateFlag($p)) {
    // MSG_CM_WRN_008   =  "검색한 데이터가 존재하지 않습니다.<BR>먼저 @검색을 하십시오."
    $c.win.alert($p, MSG_CM_WRN_008);
    return;
  }
  if (ds_master.getModifiedIndex().length < 1) {
    // MSG_CM_ERR_003   = "해당되는 자료가 존재하지 않습니다."
    $c.win.alert($p, MSG_CM_ERR_003);
    return;
  }
  $c.gus.cfInitHidVal($p);
  var row = ds_master.getRowPosition();
  if (ds_master.getRowStatus(row) == "C") {
    ds_master.removeRow(row);
    if (row == 0) {
      row = row + 1;
    }
  } else {
    ds_master.undoRow(row);
    row = row + 1;
  }
  //disable 처리
  $c.gus.cfDisableObjects($p, tbl_asetCost);
  $c.gus.cfDisableBtn($p, [btn_save]);
  tv_treeView.focus();
  tv_treeView.findNodeByIndex(row, true);
};

/**
 * 수정버튼
 */
scwin.f_Update = function () {
  if (ds_master.getRowCount() == 0) {
    // MSG_CM_ERR_003   = "해당되는 자료가 존재하지 않습니다."
    $c.win.alert($p, MSG_CM_ERR_003);
    return;
  }

  // disable 처리
  $c.gus.cfEnableObjects($p, [tbl_asetCost]);
  $c.gus.cfDisableKey($p);
  $c.gus.cfEnableObjects($p, [udc_srchAsetCostCd, ed_upperAsetCostCd, ed_mgntAcctCd]);
  $c.gus.cfDisableBtn($p, [btn_update]);

  //focus 설정
  ed_asetCostCdNm.focus();
};

/**
 * 저장
 */
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다.
  // if (ds_master.IsUpdated == false) {
  if (ds_master.getModifiedIndex().length < 1) {
    // MSG_CM_ERR_001   = "@은(는) 변경된 사항이 없습니다."
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자산비용산정기준"]);
    return;
  }
  let ret = await scwin.f_Validate();
  if (!ret) {
    return false;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    scwin.load_row = ds_master.getRowPosition();
    sbm_save.userData1 = "noError";
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    ds_master.reform();
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    $c.sbm.execute($p, sbm_retrieve);
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * Validation
 */
scwin.f_Validate = async function () {
  //Validation check
  for (j = 0; j < ds_master.getRowCount(); j++) {
    if (ds_master.getRowStatus(j) != "R") {
      let ret = await scwin.f_ValidateRow(j);
      if (!ret) {
        return false;
      }
    }
  }
  return true;
};

/**
 * Row Validation
 */
scwin.f_ValidateRow = async function (row) {
  ds_master.setRowPosition(row);
  // let ret = await $c.gus.cfValidate([tbl_asetCost]);
  //자산비용코드명
  let ret = await $c.gus.cfValidate($p, [ed_asetCostCdNm]);
  if (!ret) {
    return false;
  }
  var upperAsetCostCd = ds_master.getCellData(row, "upperAsetCostCd");
  var mgntAcctCd = ds_master.getCellData(row, "mgntAcctCd");
  if (ds_master.getCellData(row, "asetCostLvl") == scwin.rootLevel) {
    if (!$c.gus.cfIsNull($p, upperAsetCostCd)) {
      //MSG_CM_ERR_041 = "@은(는) @할 수 없습니다."
      // await $c.win.alert(MSG_CM_ERR_041, ["자산비용레벨이 1일경우,상위계정을 등록"]);
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["자산비용레벨이 1일경우", "상위계정을 등록"]);
      ed_upperAsetCostCd.focus();
      return false;
    }
  } else {
    if ($c.gus.cfIsNull($p, upperAsetCostCd)) {
      //MSG_CM_ERR_053   =  "@이(가) 누락되었습니다."
      // await $c.win.alert(MSG_CM_ERR_053, ["상위계정코드"]);
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_053, ["상위계정코드"]);
      ed_upperAsetCostCd.focus();
      return false;
    }
    if (ds_master.getRowCount() > 1) {
      // var upperLevelRow = ds_master.getCellDataRow("asetCostCd", upperAsetCostCd);
      var upperLevelRow = ds_master.getMatchedIndex("asetCostCd", upperAsetCostCd);
      if (ds_master.getCellData(row, "asetCostLvl") == ds_master.getCellData(upperLevelRow[0], "asetCostLvl")) {
        await $c.gus.cfAlertMsg($p, "동일레벨의 항목이 상위계정코드가 될 수 없습니다.");
        ed_upperAsetCostCd.focus();
        return false;
      }
    }
  }
  if (!$c.gus.cfIsNull($p, upperAsetCostCd) && upperAsetCostCd != ed_upperAsetCostCd.hidVal) {
    // MSG_CM_ERR_038   =  "유효한 @가 아닙니다."
    // await $c.win.alert(MSG_CM_ERR_038, ["상위계정코드"]);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["상위계정코드"]);
    return false;
  }
  if (!$c.gus.cfIsNull($p, mgntAcctCd) && mgntAcctCd != ed_mgntAcctCd.hidVal) {
    // MSG_CM_ERR_038   =  "유효한 @가 아닙니다."
    // await $c.win.alert(MSG_CM_ERR_038, ["관리계정코드"]);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["관리계정코드"]);
    return false;
  }

  //TODO : 정렬순번 0입력 안되게 추가
  if (ed_sortSeq.getValue() < 1) {
    await $c.gus.cfAlertMsg($p, "정렬순번은(는) 1 이상으로 입력하십시오.");
    ed_sortSeq.focus();
    return false;
  }
  return true;
};

/**
 * scwin.f_ValidationSync 사용하기 위한 함수
 */
scwin.myCfValidate = function (oElement) {
  let obj = $c.gus.object($p, oElement);
  if (obj.length != null) {
    for (var i = 0; i < obj.length; i++) {
      let id = obj[i];
      if ($c.gus.cfIsNull($p, id.getValue())) {
        $c.win.alert($p, id.options.title + "은(는) 필수 입력 항목입니다.");
        id.focus();
        return false;
      }
    }
  }
  return true;
};

/**
 * onbeforerowpositionchange 사용을 위한 validation 체크
 */
scwin.f_ValidationSync = function () {
  //필수값 임의로 체크(자산비용코드, 상위계정코드)
  let ret = scwin.myCfValidate([ed_asetCostCdNm, ed_upperAsetCostCd, ed_upperAsetCostCdNm]);
  if (!ret) {
    return false;
  }
  return true;
};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE 사용안함
 */
scwin.f_HeaderCreate = function () {
  // var GAUCE_DATASET_HEADER = "asetCostCd:STRING"
  //     + ",asetCostCdNm:STRING"
  //     + ",useYn:INT(1)";
  // ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_search.insertRow();
};

/**
 * 팝업
 */
scwin.f_PopUp = function (paramArray) {
  // var codeObj = paramArray.pCode;
  // var nameObj = paramArray.pName;

  // rtnList = cfCommonPopUp(paramArray.pSelectID, $c.gus.cfGetValue(codeObj), ""
  //     , scwin.f_EventCheck(), paramArray.pDispCnt
  //     , paramArray.pTitle, paramArray.pWidth
  //     , paramArray.pHidden, paramArray.pWhere
  //     , paramArray.pW, paramArray.pH
  //     , paramArray.pTop, paramArray.pLeft
  //     , paramArray.pExistTF, paramArray.pAllSearchTF
  //     , paramArray.pWtitleSearch)
  // if (rtnList != null) {
  //     if (rtnList[0] != "N/A") {
  //         $c.gus.cfSetValue(codeObj, rtnList[0]);
  //         codeObj.hidVal = rtnList[0];
  //         $c.gus.cfSetValue(nameObj, rtnList[1]);
  //     }
  // } else {
  //     $c.gus.cfSetValue(codeObj, "");
  //     codeObj.hidVal = "";
  //     $c.gus.cfSetValue(nameObj, "");
  // }

  // return rtnList;

  let codeObj = paramArray.pCode;
  let nameObj = paramArray.pName;
  let sqlId = paramArray.pSelectID;
  let param = "";
  switch (sqlId) {
    // 자산비용코드팝업 호출
    case 'retrieveAsetCostCdInfo':
      let close = paramArray.close;
      udc_srchAsetCostCd.cfCommonPopUp(scwin.udc_srchAsetCostCd_callBackFunc, codeObj.getValue(), nameObj.getValue(), close, null, null, null, null, null, null, null, null, null, null, null, null, null);
      break;
    // 상위 자산비용코드 팝업 호출
    case 'retrieveUpperAsetCostCdInfo':
      param = paramArray.pWhere;
      udc_upperAsetCostCd.cfCommonPopUp(scwin.udc_upperAsetCostCd_callBackFunc, codeObj.getValue(), nameObj.getValue(), "T", null, null, null, null, param, null, null, null, null, null, null, null, null);
      break;
    // 관리계정팝업 호출
    case 'retrieveMgntAcctCdInfo':
      udc_mgntAcctCd.cfCommonPopUp(scwin.udc_mgntAcctCde_callBackFunc, codeObj.getValue(), nameObj.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};

/**
 * 자산비용코드팝업(조회용) callBack
 */
scwin.udc_srchAsetCostCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_srchAsetCostCd.setValue(ret[0]); // 코드
    ed_srchAsetCostCdNm.setValue(ret[1]); // 코드명
    ed_srchAsetCostCd.hidVal = ret[0]; // 히든값
  } else {
    ed_srchAsetCostCd.setValue(""); // 코드
    ed_srchAsetCostCdNm.setValue(""); // 코드명
    ed_srchAsetCostCd.hidVal = ""; // 히든값
  }
};

/**
 * 상위 자산비용코드팝업(저장용) callBack
 */
scwin.udc_upperAsetCostCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_upperAsetCostCd.setValue(ret[0]); // 코드
    ed_upperAsetCostCdNm.setValue(ret[1]); // 코드명
    ed_upperAsetCostCd.hidVal = ret[0]; // 히든값
  } else {
    ed_upperAsetCostCd.setValue(""); // 코드
    ed_upperAsetCostCdNm.setValue(""); // 코드명
    ed_upperAsetCostCd.hidVal = ""; // 히든값
  }
};

/**
 * 관리계정팝업(저장용) callBack
 */
scwin.udc_mgntAcctCde_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_mgntAcctCd.setValue(ret[0]); // 코드
    ed_mgntAcctNm.setValue(ret[1]); // 코드명
    ed_mgntAcctCd.hidVal = ret[0]; // 히든값
  } else {
    ed_mgntAcctCd.setValue(""); // 코드
    ed_mgntAcctNm.setValue(""); // 코드명
    ed_mgntAcctCd.hidVal = ""; // 히든값
  }
};

/**
 * 팝업 여부 검사
 * TOBE 사용안함
 */
scwin.f_IsPopUp = function (inObj) {
  var inValue = $c.gus.cfGetValue($p, inObj);
  var hidValue = inObj.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.hidVal = "";
    for (var i = 1; i < f_IsPopUp.arguments.length; i++) {
      $c.gus.cfSetValue($p, f_IsPopUp.arguments[i], "");
    }
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};

/**
 * 팝업 이벤트에 따라 팝업창의 자동닫기 여부를 반환
 * TOBE : 사용안함
 */
scwin.f_EventCheck = function () {
  //if (window.event != null && window.event.srcElement.tagName.toUpperCase() == "IMG") {
  if (window.event != null && window.event.srcElement.tagName.toUpperCase() == "btn_") {
    return 'F';
  } else {
    return 'T';
  }
};

/**
 * 자산비용코드팝업(조회)
 */
// scwin.f_srchAsetCostPopUp = function() {
scwin.f_srchAsetCostPopUp = function (close) {
  var paramArray = new Object();
  paramArray.pSelectID = "retrieveAsetCostCdInfo";
  paramArray.pCode = ed_srchAsetCostCd;
  paramArray.pName = ed_srchAsetCostCdNm;
  paramArray.pW = "430";
  paramArray.close = close;
  scwin.f_PopUp(paramArray);
};

/**
 * 상위 자산비용코드 팝업
 */
scwin.f_upperAsetCostCdPopUp = function () {
  var paramArray = new Object();
  paramArray.pSelectID = "retrieveUpperAsetCostCdInfo";
  paramArray.pCode = ed_upperAsetCostCd;
  paramArray.pName = ed_upperAsetCostCdNm;
  //paramArray.pWhere = ds_master.getCellData(ds_master.getRowPosition(), "asetCostCd");
  paramArray.pWhere = ed_asetCostCd.getValue();
  paramArray.pW = "430";
  scwin.f_PopUp(paramArray);
};

/**
 * 관리계정팝업
 */
scwin.f_mgntAcctCdPopUp = function () {
  var paramArray = new Object();
  paramArray.pSelectID = "retrieveMgntAcctCdInfo";
  paramArray.pCode = ed_mgntAcctCd;
  paramArray.pName = ed_mgntAcctNm;
  paramArray.pW = "410";
  scwin.f_PopUp(paramArray);
};

/**
 * 자식 아이템이 있는 지 체크
 */
scwin.f_HasChild = function (asetCostCd) {
  let size = ds_master.getMatchedIndex("upperAsetCostCd", "0");
  if (size.length > 0) {
    return false;
  } else {
    return true;
  }
  // if (ds_master.getCellDataRow("upperAsetCostCd", asetCostCd) == 0)
  //     return false;
  // else
  //     return true;
};

/**
 * 그리드 높이 늘리기
 * TOBE 사용안함(UDC +-버튼사용, udc_topGrdBtn)
 */
// scwin.f_grdHeiht = function (gridNm, size) {
//     var strHeight = gridNm.style.height;
//     var intHeight = parseInt(strHeight.replace("px", ""));
//     intHeight = intHeight + size;
//     if (intHeight > 0) {
//         gridNm.style.height = intHeight + "px";
//     }
// };

/**
 * 한글방지
 */
scwin.removeKor = function (e) {
  var val = e.target.value;
  val = val.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, "");
  this.setValue(val);
};

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
 * 자산비용코드(조회) 팝업 호출
 */
scwin.udc_srchAsetCostCd_onclickEvent = function (e) {
  if (ed_srchAsetCostCd.hidVal != ed_srchAsetCostCd.getValue()) {
    ed_srchAsetCostCdNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_srchAsetCostCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_srchAsetCostPopUp(close);
};
scwin.udc_srchAsetCostCd_onblurCodeEvent = function (e) {
  if (ed_srchAsetCostCd.hidVal != ed_srchAsetCostCd.getValue()) {
    ed_srchAsetCostCdNm.setValue("");
    if (ed_srchAsetCostCd.getValue().length == 5) {
      scwin.f_srchAsetCostPopUp("T");
    }
  }
};

/**
 * 상위자산비용코드(저장) 팝업 호출
 */
scwin.udc_upperAsetCostCd_onclickEvent = function (e) {
  if (ed_upperAsetCostCd.hidVal != ed_upperAsetCostCd.getValue()) {
    ed_upperAsetCostCdNm.setValue("");
  }
  scwin.f_upperAsetCostCdPopUp();
};
scwin.udc_upperAsetCostCd_onviewchangeCodeEvent = function (info) {
  ed_upperAsetCostCdNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_upperAsetCostCd.getValue())) {
    scwin.f_upperAsetCostCdPopUp();
  }
};

/**
 * 관리계정팝업(저장) 팝업 호출
 */
scwin.udc_mgntAcctCd_onclickEvent = function (e) {
  if (ed_mgntAcctCd.hidVal != ed_mgntAcctCd.getValue()) {
    ed_mgntAcctNm.setValue("");
  }
  scwin.f_mgntAcctCdPopUp();
};
scwin.udc_mgntAcctCd_onviewchangeCodeEvent = function (info) {
  ed_mgntAcctNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_mgntAcctCd.getValue())) {
    scwin.f_mgntAcctCdPopUp();
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * DataList의 rowPosition이 변경된 경우 발생
 */
scwin.ds_master_onrowpositionchange = function (info) {
  ed_upperAsetCostCd.hidVal = ds_master.getCellData(info.newRowIndex, "upperAsetCostCd");
  ed_mgntAcctCd.hidVal = ds_master.getCellData(info.newRowIndex, "mgntAcctCd");
  if (ds_master.getRowStatus(info.newRowIndex) == "C") {
    $c.gus.cfEnableKeyData($p);
    $c.gus.cfEnableObjects($p, tbl_asetCost);
    $c.gus.cfDisableObjects($p, [ed_asetCostCd]);
    $c.gus.cfDisableBtn($p, [btn_update]);
  } else if (ds_master.getRowStatus(info.newRowIndex) == "U") {
    //수정버튼
    scwin.f_Update();
  } else {
    $c.gus.cfDisableObjects($p, tbl_asetCost);
    $c.gus.cfDisableBtn($p, [btn_save]);
  }
};

/**
 * DataList의 rowPosition이 변경되기 직전에 발생하며 rowPosition의 변경 적용 여부를 결정
 * asis : 그리드 로우를 변경하려고 할 경우 - 필수항목 체크
 * tobe : 현재 $c.gus.cfValidate 사용 시 async라 이벤트에 async주면 return false안먹힘
 */
scwin.ds_master_onbeforerowpositionchange = function (info) {
  if (ds_master.getRowStatus(info.oldRowIndex) == "U" || ds_master.getRowStatus(info.oldRowIndex) == "C") {
    let ret = scwin.f_ValidationSync();
    if (ret == false) {
      tv_treeView.findNodeByIndex(info.oldRowIndex + 1, true);
    }
    return ret;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산비용코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_srchAsetCostCd',btnId:'btn_srchAsetCostCd',codeId:'ed_srchAsetCostCd',nameId:'ed_srchAsetCostCdNm',popupID:'retrieveSrchAsetCostCdInfoPopup',validTitle:'자산비용코드',selectID:'retrieveAsetCostCdInfo',refDataCollection:'dma_search',code:'asetCostCd',name:'asetCostCdNm',maxlengthCode:'5',objTypeCode:'data',allowCharCode:'0-9',editTypeCode:'select',codeWidth:'50',maxlengthName:'30',objTypeName:'data','ev:onclickEvent':'scwin.udc_srchAsetCostCd_onclickEvent',style:'','ev:onblurCodeEvent':'scwin.udc_srchAsetCostCd_onblurCodeEvent',objType:'key'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchUseYn',ref:'data:dma_search.useYn',style:'',submenuSize:'auto',title:'사용여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용안함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'자산비용산정기준 Tree ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{class:'btn sm','ev:onclick':'scwin.f_Add',id:'btn_addItem',style:'',type:'button',userAuth:'C',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm','ev:onclick':'scwin.f_Cancel',id:'btn_cancelItem',style:'',type:'button',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',id:'udc_excel',style:'',templateYn:'N',gridDownYn:'N',gridID:'tv_treeView',btnUser:'N',btnPlusYn:'N'}}]}]}]},{T:1,N:'xf:group',A:{class:'tvw-wrap',id:'grd_section1'},E:[{T:1,N:'w2:treeview',A:{class:'',dataType:'listed',hierarchy:'true',id:'tv_treeView',renderType:'virtual',showTreeDepth:'8',style:'height:99%; overflow:auto;',tooltipGroupClass:'false'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_master'},E:[{T:1,N:'w2:label',A:{ref:'asetCostCdNm'}},{T:1,N:'w2:value',A:{ref:'upperAsetCostCd'}},{T:1,N:'w2:depth',A:{ref:'checkLevel'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 자산비용산정기준 상세내역 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_asetCost',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산비용코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',dataType:'number',disabled:'true',editFormat:'#####',id:'ed_asetCostCd',maxlength:'5',objType:'key',ref:'data:ds_master.asetCostCd',style:'width: 100px;',title:'자산비용코드'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'자산비용코드명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_asetCostCdNm',mandatory:'true',maxlength:'50',objType:'data',ref:'data:ds_master.asetCostCdNm',style:'',title:'자산비용코드명'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발행명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_prtNm',maxlength:'50',objType:'data',ref:'data:ds_master.prtNm',style:'',title:'발행명'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상위계정코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_upperAsetCostCd',code:'upperAsetCostCd',codeId:'ed_upperAsetCostCd',editTypeCode:'select','ev:onclickEvent':'scwin.udc_upperAsetCostCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_upperAsetCostCd_onviewchangeCodeEvent',id:'udc_upperAsetCostCd',maxlengthCode:'5',maxlengthName:'30',name:'upperAsetCostCdNm',nameId:'ed_upperAsetCostCdNm',objTypeCode:'data',objTypeName:'data',popupID:'retrieveAsetCostCdInfoPopup',readOnlyName:'true',refDataCollection:'ds_master',selectID:'retrieveAsetCostCdInfo',style:'',validExpCode:'상위계정코드',validExpName:'상위계정코드명',validTitle:'상위자산비용코드'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_acctClsCd',objType:'data',ref:'data:ds_master.acctClsCd',style:'',submenuSize:'fixed',title:'계정구분'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산비용레벨',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_asetCostLvl',objType:'data',ref:'data:ds_master.asetCostLvl',style:'',submenuSize:'fixed',title:'자산비용레벨'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조정금액등록여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',falseValue:'0',id:'cbx_ctrlAmtRegYn',objType:'data',ref:'data:ds_master.ctrlAmtRegYn',refInitSync:'false',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'조정금액등록여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'집계구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_aggrClsCd',objType:'data',ref:'data:ds_master.aggrClsCd',style:'',submenuSize:'fixed',title:'집계구분'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'집계여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',falseValue:'0',id:'cbx_aggrYn',objType:'data',ref:'data:ds_master.aggrYn',refInitSync:'false',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'집계여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',falseValue:'0',id:'cbx_useYn',objType:'data',ref:'data:ds_master.useYn',refInitSync:'false',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:' 사용여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리계정코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_mgntAcctCd',code:'mgntAcctCd',codeId:'ed_mgntAcctCd',codeWidth:'60',editTypeCode:'select','ev:onclickEvent':'scwin.udc_mgntAcctCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_mgntAcctCd_onviewchangeCodeEvent',id:'udc_mgntAcctCd',maxlengthCode:'7',maxlengthName:'30',name:'mgntAcctNm',nameId:'ed_mgntAcctNm',objTypeCode:'data',objTypeName:'data',popupID:'retrieveMgntAcctCdInfoPopup',readOnlyName:'true',refDataCollection:'ds_master',selectID:'retrieveMgntAcctCdInfo',style:'',validExpCode:'관리계정코드',validExpName:'관리계정코드명',validTitle:'관리계정코드'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정렬순번',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{allowChar:'0-9',class:'tar',dataType:'number',displayFormat:'#,###',editType:'focus','ev:onkeyup':'scwin.removeKor',id:'ed_sortSeq',maxlength:'10',objType:'data',ref:'data:ds_master.sortSeq',style:'width: 100px;',title:'정렬순번'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Update',id:'btn_update',objType:'bUpdate',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_save',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})