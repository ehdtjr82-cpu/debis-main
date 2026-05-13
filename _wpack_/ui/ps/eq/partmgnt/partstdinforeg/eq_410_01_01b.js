/*amd /ui/ps/eq/partmgnt/partstdinforeg/eq_410_01_01b.xml 58085 56d8eb6e5e51e8d5bbef5ec46fbce443495a2b25bbbcc710d5f95e2161f478d1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqModelCd',name:'장비모델코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'partMakerCd',name:'제조사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'catCd',name:'계통코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inAcctCd',name:'입고계정',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outAcctCd',name:'출고계정',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq410',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_eq410_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catCd',name:'계통코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catNm',name:'계통명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catalPage',name:'카탈로그PAGE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catalNo',name:'카탈로그번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partMakerCd',name:'부품제조사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partMakerNm',name:'부품제조사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partUnitCd',name:'부품단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partClsCd',name:'부품구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inAcctCd',name:'입고계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAcctCd',name:'출고계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelCd',name:'장비모델코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'장비모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalCdYn',name:'내부코드여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'circulPartYn',name:'수리순환품여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'circulPartModelCd',name:'수리순환품모델코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'co_ds_combo2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명칭',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_sub_param'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'strVal',name:'strVal',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strVal2',name:'strVal2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_inAcctCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outAcctCd',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq410","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eq410","key":"OUT_DS1"}',action:'/ps.eq.partmgnt.partstdinforeg.RetrievePartsStandardInformationCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',ref:'data:json,{"action":"modified","id":"ds_eq410","key":"IN_DS1"}',target:'',action:'/ps.eq.partmgnt.partstdinforeg.RegistPartsStandardInformationCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getCirculPartModel',ref:'',target:'data:json,{"id":"co_ds_combo2","key":"GAUCE"}',action:'',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_getCirculPartModel_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : eq_410_01_01b
// 이름     : 정비부품등록
// 경로     : 정비/부품기준정보/정비부품등록
// 작 성 자 : 최지수
// 작 업 일 : 2026-04-09
//==================================================================================================================

/* 전역 변수 */
scwin.savebool = false;
scwin.curDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
scwin.getModelNm = false;
scwin.strCatCd = "";
scwin.ModeState = "false";
scwin.upPartCd = "";
scwin._suppressComboChange = false;

/* 그리드 disabled 외관 복원 (setDisabled 후 호출) */
scwin._restoreGridDisabledLook = function () {
  gr_eq410.removeClass("w2grid_disabled_outer");
  var render = gr_eq410.render;
  if (render) {
    var dataLayer = render.querySelector(".w2grid_disabled");
    if (dataLayer) {
      dataLayer.classList.remove("w2grid_disabled");
    }
  }
};

/* 페이지 로드 */
scwin.onpageload = function () {
  var codeOptions = [{
    grpCd: "EQ005",
    compID: "lc_CatCdParam,lc_CatCd,gr_eq410:catCd"
  }, {
    grpCd: "EQ029",
    compID: "lc_InAcctCdParam,lc_OutAcctCdParam,lc_InAcctCd,lc_OutAcctCd"
  }, {
    grpCd: "EQ023",
    compID: "lc_PartUnitCd,gr_eq410:partUnitCd"
  }, {
    grpCd: "EQ024",
    compID: "lc_PartClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_OnLoad();
};

/* 공통코드 로딩 완료 후 빈 옵션 추가 + 입고/출고계정 필터링 */
scwin.ondataload = function () {
  lc_CatCd.addItem("", "", null, 0);
  lc_PartUnitCd.addItem("", "", null, 0);
  lc_PartClsCd.addItem("", "", null, 0);
  lc_CatCd.setSelectedIndex(-1);
  lc_PartUnitCd.setSelectedIndex(-1);
  lc_PartClsCd.setSelectedIndex(-1);

  // EQ029 코드에서 입고계정(fltrCd1=="1"), 출고계정(fltrCd2=="1") 분리
  var dlt = $p.getComponentById("dlt_commonCodeEQ029");
  if (dlt && dlt.getRowCount() > 0) {
    var allData = dlt.getAllJSON();
    var inData = [];
    var outData = [];
    for (var i = 0; i < allData.length; i++) {
      if (allData[i].fltrCd1 == "1") inData.push({
        cd: allData[i].cd,
        cdNm: allData[i].cdNm
      });
      if (allData[i].fltrCd2 == "1") outData.push({
        cd: allData[i].cd,
        cdNm: allData[i].cdNm
      });
    }
    ds_inAcctCd.setJSON(inData);
    ds_outAcctCd.setJSON(outData);

    // 입고계정 콤보 바인딩
    lc_InAcctCdParam.setNodeSet("data:ds_inAcctCd", "cdNm", "cd");
    lc_InAcctCd.setNodeSet("data:ds_inAcctCd", "cdNm", "cd");
    // 출고계정 콤보 바인딩
    lc_OutAcctCdParam.setNodeSet("data:ds_outAcctCd", "cdNm", "cd");
    lc_OutAcctCd.setNodeSet("data:ds_outAcctCd", "cdNm", "cd");
  }
  lc_InAcctCd.addItem("", "", null, 0);
  lc_OutAcctCd.addItem("", "", null, 0);
  lc_InAcctCd.setSelectedIndex(-1);
  lc_OutAcctCd.setSelectedIndex(-1);
};

/* 초기 상태 설정 */
scwin.f_OnLoad = function () {
  btn_Esc.setDisabled(true);
  $c.gus.cfDisableBtn($p, [btn_Sav]);
  $c.gus.cfDisableKeyData($p);

  // 팝업/출고계정/부품모델 비활성화
  if (typeof udc_eqModel !== 'undefined') udc_eqModel.setDisabled(true);
  if (typeof udc_partMaker !== 'undefined') udc_partMaker.setDisabled(true);
  lc_OutAcctCd.setDisabled(true);
  lc_circulPartModelCd.setDisabled(true);
  lc_UseYnParam.setSelectedIndex(1); // 사용여부 기본값: TRUE(사용)
  if (typeof em_partCd !== 'undefined') em_partCd.focus();
};

/* 조회 */
scwin.f_Retrieve = async function () {
  // 수정/삭제 모드 중 조회 시 중단 확인
  if (scwin.ModeState == "upTrue" || scwin.ModeState == "insTrue") {
    if (!(await $c.win.confirm($p, "수정작업을 중단하시겠습니까?"))) return;
    scwin.f_Cancel();
  } else if (scwin.ModeState == "delTrue") {
    if (!(await $c.win.confirm($p, "삭제작업을 중단하시겠습니까?"))) return;
    scwin.f_Cancel();
  }
  scwin.getModelNm = false;
  dma_search.set("partCd", em_partCd.getValue());
  dma_search.set("partNm", em_partNm.getValue());
  if (typeof ed_eqModelCdParam !== 'undefined') dma_search.set("eqModelCd", ed_eqModelCdParam.getValue());
  if (typeof ed_partMakerCdParam !== 'undefined') dma_search.set("partMakerCd", ed_partMakerCdParam.getValue());
  dma_search.set("catCd", lc_CatCdParam.getValue());
  dma_search.set("useYn", lc_UseYnParam.getValue());
  dma_search.set("inAcctCd", lc_InAcctCdParam.getValue());
  dma_search.set("outAcctCd", lc_OutAcctCdParam.getValue());
  btn_Esc.setDisabled(true);
  scwin.ModeState = "false";
  gr_eq410.setDisabled(false);
  await $c.sbm.execute($p, sbm_retrieve);
};

/* 신규등록 */
scwin.f_Create = function () {
  scwin.ModeState = "insTrue";

  // 빈 행 추가 후 포커스 이동
  var row = ds_eq410.insertRow(ds_eq410.getRowCount());
  gr_eq410.setFocusedCell(row, 0);

  // 체크박스 초기화
  ds_eq410.setCellData(row, "internalCdYn", "");
  ds_eq410.setCellData(row, "useYn", "1");

  // 필드 활성화 (출고계정은 비활성 유지)
  $c.gus.cfEnableKeyData($p);
  lc_OutAcctCd.setDisabled(true);

  // select 빈 값 초기화
  ds_eq410.setCellData(row, "catCd", "");
  ds_eq410.setCellData(row, "partUnitCd", "");
  ds_eq410.setCellData(row, "partClsCd", "");
  ds_eq410.setCellData(row, "inAcctCd", "");
  ds_eq410.setCellData(row, "outAcctCd", "");
  lc_CatCd.setSelectedIndex(-1);
  lc_PartUnitCd.setSelectedIndex(-1);
  lc_PartClsCd.setSelectedIndex(-1);
  lc_InAcctCd.setSelectedIndex(-1);
  lc_OutAcctCd.setSelectedIndex(-1);

  // 버튼 상태
  btn_Esc.setDisabled(false);
  $c.gus.cfDisableBtn($p, [btn_Init, btn_Add, btn_Del]);

  // 팝업 활성화
  if (typeof udc_eqModel !== 'undefined') udc_eqModel.setDisabled(false);
  if (typeof udc_partMaker !== 'undefined') udc_partMaker.setDisabled(false);
  ed_PartCd.focus();
  lc_circulPartModelCd.setDisabled(true);

  // 신규 시 다른 그리드 행 선택 불가 (외관은 유지)
  gr_eq410.setDisabled(true);
  setTimeout(scwin._restoreGridDisabledLook, 50);
};

/* 수정 */
scwin.f_Update = async function () {
  debugger;
  if (ds_eq410.getRowCount() == 0) {
    await $c.win.alert($p, "데이타를 조회 하신 후 선택하세요.");
    return;
  }
  scwin.ModeState = "upTrue";
  scwin.upPartCd = ed_PartCd.getValue();
  scwin.savebool = false;

  // key 비활성, data 활성
  $c.gus.cfDisableKey($p);
  chb_UseYn.setDisabled(false); // checkboxgroup은 cfDisableKey 대상 아님

  // 버튼 상태
  btn_Esc.setDisabled(false);
  $c.gus.cfDisableBtn($p, [btn_Init, btn_Add, btn_Del]);

  // 팝업 활성화 (돋보기만 활성, 코드명은 비활성 유지)
  if (typeof udc_eqModel !== 'undefined') udc_eqModel.setDisabled(false);
  if (typeof udc_partMaker !== 'undefined') udc_partMaker.setDisabled(false);
  if (typeof ed_partMakerNm !== 'undefined') ed_partMakerNm.setDisabled(true);
  if (typeof ed_eqModelNm !== 'undefined') ed_eqModelNm.setDisabled(true);

  // 수리순환품여부 체크 시 부품모델 콤보 활성화
  lc_circulPartModelCd.setDisabled(chb_CirculPartYn.getValue() != "1");

  // 수정 시 다른 그리드 행 선택 불가 (외관은 유지)
  gr_eq410.setDisabled(true);
  setTimeout(scwin._restoreGridDisabledLook, 50);
};

/* 삭제 */
scwin.f_Delete = async function () {
  if (ds_eq410.getRowCount() == 0) {
    await $c.win.alert($p, "데이타를 조회 하신 후 선택하세요.");
    return;
  }
  scwin.savebool = false;
  scwin.ModeState = "delTrue";
  scwin.upPartCd = ed_PartCd.getValue();

  // 전체 필드 비활성화
  $c.gus.cfDisableKeyData($p);

  // 버튼 상태
  btn_Esc.setDisabled(false);
  $c.gus.cfDisableBtn($p, [btn_Init, btn_Add]);

  // 팝업 비활성화
  if (typeof udc_eqModel !== 'undefined') udc_eqModel.setDisabled(true);
  if (typeof udc_partMaker !== 'undefined') udc_partMaker.setDisabled(true);

  // 사용여부 해제
  chb_UseYn.setDisabled(false);
  ds_eq410.setCellData(ds_eq410.getRowPosition(), "useYn", "");

  // 삭제 모드에서 다른 행 선택 방지
  gr_eq410.setDisabled(true);
};

/* 저장 */
scwin.f_Save = async function () {
  // 변경된 데이터 없으면 저장 차단
  if (ds_eq410.getModifiedIndex().length == 0 && scwin.ModeState != "insTrue" && scwin.ModeState != "delTrue") {
    await $c.win.alert($p, "변경된 데이터가 없습니다.");
    return;
  }
  if ((await scwin.f_valueCheck()) != true) {
    return;
  }
  if (!(await $c.win.confirm($p, "저장하시겠습니까?"))) {
    return;
  }
  scwin.savebool = true;
  var row = ds_eq410.getRowPosition();

  // 체크박스 값을 dataList에 명시 반영 (ref 바인딩 누락 방지)
  ds_eq410.setCellData(row, "useYn", chb_UseYn.getValue() == "1" ? "1" : "0");
  ds_eq410.setCellData(row, "internalCdYn", chb_InternalCdYn.getValue() == "1" ? "1" : "0");
  ds_eq410.setCellData(row, "circulPartYn", chb_CirculPartYn.getValue() == "1" ? "1" : "0");

  // 행 상태가 변경되지 않은 경우 강제 설정
  if ((scwin.ModeState == "upTrue" || scwin.ModeState == "delTrue") && ds_eq410.getRowStatus(row) != "C") {
    ds_eq410.modifyRowStatus(row, "C");
  }

  // 수정/삭제 → Update, 신규 → Regist
  if (scwin.ModeState == "upTrue" || scwin.ModeState == "delTrue") {
    sbm_save.action = "/ps.eq.partmgnt.partstdinforeg.UpdatePartsStandardInformationCMD.do";
  } else {
    sbm_save.action = "/ps.eq.partmgnt.partstdinforeg.RegistPartsStandardInformationCMD.do";
  }
  $c.sbm.execute($p, sbm_save);
};

/* 취소 */
scwin.f_Cancel = function () {
  scwin.ModeState = "false";
  scwin.upPartCd = "";

  // 전체 필드 비활성화
  $c.gus.cfDisableKeyData($p);
  btn_Esc.setDisabled(true);
  $c.gus.cfDisableBtn($p, [btn_Sav]);

  // 팝업/부품모델 비활성화
  if (typeof udc_eqModel !== 'undefined') udc_eqModel.setDisabled(true);
  if (typeof udc_partMaker !== 'undefined') udc_partMaker.setDisabled(true);
  lc_circulPartModelCd.setDisabled(true);

  // 신규행이면 삭제, 수정행이면 원복
  var curRow = ds_eq410.getRowPosition();
  var rowStatus = ds_eq410.getRowStatus(curRow);
  if (rowStatus == "C") {
    ds_eq410.removeRow(curRow);
  } else {
    ds_eq410.undoRow(curRow);
  }
  gr_eq410.setDisabled(false);

  // 취소 후 부품모델 콤보 데이터 재로드
  scwin.getModelNm = true;
  scwin.f_getModelNm();
};

/* 입력값 검증 */
scwin.f_valueCheck = async function () {
  // 삭제 모드는 검증 스킵
  if (scwin.ModeState == "delTrue") return true;
  if (chb_InternalCdYn.getValue() != "1") {
    if (ed_PartCd.getValue().trim().length == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["부품코드"]);
      ed_PartCd.focus();
      return false;
    }

    // 신규 등록 시 부품코드 특수문자 체크
    if (ds_eq410.getRowStatus(ds_eq410.getRowPosition()) == "I") {
      var partCd = ed_PartCd.getValue();
      if (partCd.indexOf("=") >= 0 || partCd.indexOf(",") >= 0 || partCd.indexOf("'") >= 0 || partCd.indexOf('"') >= 0) {
        await $c.win.alert($p, "부품코드에 특수문자(= , ' \") 를 빼고 입력하세요");
        ed_PartCd.focus();
        return false;
      }
    }
  }
  if (lc_CatCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["계통코드"]);
    lc_CatCd.focus();
    return false;
  }
  var partCd = ed_PartCd.getValue().trim();
  if (partCd.indexOf(",") != -1) {
    await $c.win.alert($p, "부품코드에 쉼표(,)를 입력할 수 없습니다.");
    return false;
  }
  if (txt_PartNm.getValue().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["부품명"]);
    txt_PartNm.focus();
    return false;
  } else if (lc_PartUnitCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["단위"]);
    lc_PartUnitCd.focus();
    return false;
  } else if (lc_InAcctCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["입고계정"]);
    lc_InAcctCd.focus();
    return false;
  } else if (lc_OutAcctCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["출고계정"]);
    lc_OutAcctCd.focus();
    return false;
  } else if (ed_CatalPage.getValue().length > 7) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_012, ["카탈로그 PAGE", 7]);
    ed_CatalPage.focus();
    return false;
  } else if (ed_CatalNo.getValue().length > 3) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_012, ["카탈로그 번호", 3]);
    ed_CatalNo.focus();
    return false;
  } else if (typeof ed_partMakerCd !== 'undefined' && ed_partMakerCd.getValue().length > 0 && ed_partMakerCd.getValue().length < 2) {
    await $c.win.alert($p, ed_partMakerCd.getValue() + "은 유효한 제조사코드가 아닙니다.");
    udc_partMaker.focus();
    return false;
  } else if (typeof ed_eqModelCd !== 'undefined' && ed_eqModelCd.getValue().length > 0 && ed_eqModelCd.getValue().length < 7) {
    await $c.win.alert($p, ed_eqModelCd.getValue() + "은 유효한 장비모델코드가 아닙니다.");
    udc_eqModel.focus();
    return false;
  } else if (chb_CirculPartYn.getValue() == "1" || ds_eq410.getCellData(ds_eq410.getRowPosition(), "circulPartYn") == "1") {
    if (!lc_circulPartModelCd.getValue()) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["수리순환품여부 체크시 부품모델"]);
      lc_circulPartModelCd.focus();
      return false;
    }
  } else if (lc_InAcctCd.getValue() != lc_OutAcctCd.getValue()) {
    await $c.win.alert($p, "입고계정과 출고계정은 같아야합니다");
    lc_InAcctCd.focus();
    return false;
  }
  return true;
};

/* 수리순환품여부 체크 변경 */
scwin.f_onClickCirculPartYn = function () {
  var isChecked = chb_CirculPartYn.getValue() == "1" || ds_eq410.getCellData(ds_eq410.getRowPosition(), "circulPartYn") == "1";
  lc_circulPartModelCd.setDisabled(!isChecked);
  scwin.getModelNm = true;
  scwin.f_getModelNm();
};

/* 내부코드여부 체크 변경 */
scwin.f_onClickInternalCdYn = function () {
  if (chb_InternalCdYn.getValue() == "1") {
    ed_PartCd.setValue("");
    ed_PartCd.setDisabled(true);
    txt_PartNm.focus();
  } else {
    ed_PartCd.setDisabled(false);
    ed_PartCd.focus();
  }
};

/* 부품 팝업 */
scwin.f_partPopUp = async function (popbool) {
  var tmpPartNm = em_partNm.getValue();
  var tmpPartCd = em_partCd.getValue();
  if (tmpPartNm == "undefined" || tmpPartNm == null) {
    tmpPartNm = "";
  }
  if (tmpPartCd == "undefined" || tmpPartCd == null) {
    tmpPartCd = "";
  }
  var firstList = await $c.gus.cfCommonPopUp($p, 'retrievePartInfo', tmpPartCd, "", popbool, null, null, null, null, "T", null);
  if (firstList != null) {
    if (firstList[0] == "N/A") return;
    em_partCd.setValue(firstList[0]);
    em_partNm.setValue(firstList[1]);
  } else {
    em_partCd.setValue("");
    em_partNm.setValue("");
  }
};

/* 조회조건 부품 팝업 */
scwin.f_PopUpPartParam = async function (pchk) {
  if (typeof em_partCd === 'undefined') return;
  var rtnList;
  if (pchk == 1) {
    var partCd = em_partCd.getValue().trim();
    if (partCd.length == 0) {
      em_partNm.setValue("");
      return;
    }
    partCd = partCd.toUpperCase().trim();
    em_partCd.setValue(partCd);
    rtnList = await udc_partParam.cfCommonPopUpAsync(null, partCd, '', "T", null, null, null, null, "T", null, null, null, null);
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        em_partCd.setValue("");
        em_partNm.setValue("");
      } else {
        em_partCd.setValue(rtnList[0]);
        em_partNm.setValue(rtnList[1]);
      }
    } else {
      em_partCd.setValue("");
      em_partNm.setValue("");
    }
    return;
  }
  rtnList = await udc_partParam.cfCommonPopUpAsync(null, em_partCd.getValue(), em_partNm.getValue(), "F", null, null, null, null, "T", null, null, null, null);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      em_partCd.setValue("");
      em_partNm.setValue("");
    } else {
      em_partCd.setValue(rtnList[0]);
      em_partNm.setValue(rtnList[1]);
    }
  } else {
    em_partCd.setValue("");
    em_partNm.setValue("");
  }
};

/* 수리순환품 모델코드 콤보 데이터 조회 */
scwin.f_getModelNm = async function () {
  var row = ds_eq410.getRowPosition();
  var catCd = (row >= 0 ? ds_eq410.getCellData(row, "catCd") : "") || lc_CatCd.getValue();
  var isChecked = chb_CirculPartYn.getValue() == "1" || row >= 0 && ds_eq410.getCellData(row, "circulPartYn") == "1";
  if (catCd == "" || !isChecked) {
    scwin._suppressComboChange = true;
    co_ds_combo2.removeAll();
    scwin._suppressComboChange = false;
    return;
  }
  sbm_getCirculPartModel.action = "/ps.co.RetrievePsCboCmmCMD.do?cmd=retriveCirculPartModelCdList&strVal=EQ031&strVal2=" + catCd;
  await $c.sbm.execute($p, sbm_getCirculPartModel);
};

/* 수리순환품 모델코드 콤보 조회 완료 */
scwin.sbm_getCirculPartModel_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;

  // onviewchange가 dataset 값을 덮어쓰기 전에 먼저 읽음
  var tmpCode = ds_eq410.getCellData(ds_eq410.getRowPosition(), "circulPartModelCd");

  // 콤보 세팅 중 onviewchange 억제 (행 상태 변경 방지)
  scwin._suppressComboChange = true;
  lc_circulPartModelCd.addItem("", "", null, 0);
  lc_circulPartModelCd.setSelectedIndex(-1);
  if (tmpCode != "") {
    lc_circulPartModelCd.setValue(tmpCode);
  } else {
    lc_circulPartModelCd.setValue("");
  }
  scwin._suppressComboChange = false;
};

/* 상세 제조사 팝업 */
scwin.f_PopUpMaker = async function (pchk) {
  if (typeof ed_partMakerCd === 'undefined') return;
  var rtnList;
  if (pchk == 1) {
    var partMakerCd = ed_partMakerCd.getValue().trim();
    if (ed_partMakerCd.getValue().length < 2) {
      ed_partMakerNm.setValue("");
      return;
    }
    rtnList = await udc_partMaker.cfCommonPopUpAsync(null, partMakerCd, '', "T", null, null, null, null, null, null, null, null, null);
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        ed_partMakerCd.setValue("");
        ed_partMakerNm.setValue("");
      } else {
        ed_partMakerCd.setValue(rtnList[0]);
        ed_partMakerNm.setValue(rtnList[1]);
      }
    } else {
      ed_partMakerCd.setValue("");
      ed_partMakerNm.setValue("");
    }
    return;
  }
  rtnList = await udc_partMaker.cfCommonPopUpAsync(null, ed_partMakerCd.getValue(), ed_partMakerNm.getValue(), "F", null, null, null, null, null, null, null, null, null);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ed_partMakerCd.setValue("");
      ed_partMakerNm.setValue("");
    } else {
      ed_partMakerCd.setValue(rtnList[0]);
      ed_partMakerNm.setValue(rtnList[1]);
    }
  } else {
    ed_partMakerCd.setValue("");
    ed_partMakerNm.setValue("");
  }
};

/* 상세 장비모델 팝업 */
scwin.f_PopUpEqModel = async function (pchk) {
  if (typeof ed_eqModelCd === 'undefined') return;
  var rtnList;
  if (pchk == 1) {
    if (ed_eqModelCd.getValue().length < 7) {
      ed_eqModelNm.setValue("");
      return;
    }
    rtnList = await udc_eqModel.cfCommonPopUpAsync(null, ed_eqModelCd.getValue(), '', "T", null, "장비모델코드,장비모델명", null, null, null, null, null, null, null);
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        ed_eqModelCd.setValue("");
        ed_eqModelNm.setValue("");
      } else {
        ed_eqModelCd.setValue(rtnList[0]);
        ed_eqModelNm.setValue(rtnList[1]);
      }
    } else {
      ed_eqModelCd.setValue("");
      ed_eqModelNm.setValue("");
    }
    return;
  }
  rtnList = await udc_eqModel.cfCommonPopUpAsync(null, ed_eqModelCd.getValue(), ed_eqModelNm.getValue(), "F", null, "장비모델코드,장비모델명", null, null, null, null, null, null, null);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ed_eqModelCd.setValue("");
      ed_eqModelNm.setValue("");
    } else {
      ed_eqModelCd.setValue(rtnList[0]);
      ed_eqModelNm.setValue(rtnList[1]);
    }
  } else {
    ed_eqModelCd.setValue("");
    ed_eqModelNm.setValue("");
  }
};

/* 조회조건 제조사 팝업 */
scwin.f_PopUpMakerParam = async function (pchk) {
  if (typeof ed_partMakerCdParam === 'undefined') return;
  var rtnList;
  if (pchk == 1) {
    var partMakerCd = ed_partMakerCdParam.getValue().trim();
    if (ed_partMakerCdParam.getValue().length < 2) {
      ed_partMakerNmParam.setValue("");
      return;
    }
    rtnList = await udc_partMakerParam.cfCommonPopUpAsync(null, partMakerCd, '', "T", null, null, null, null, null, null, null, null, null);
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        ed_partMakerCdParam.setValue("");
        ed_partMakerNmParam.setValue("");
      } else {
        ed_partMakerCdParam.setValue(rtnList[0]);
        ed_partMakerNmParam.setValue(rtnList[1]);
      }
    } else {
      ed_partMakerCdParam.setValue("");
      ed_partMakerNmParam.setValue("");
    }
    return;
  }
  rtnList = await udc_partMakerParam.cfCommonPopUpAsync(null, ed_partMakerCdParam.getValue(), ed_partMakerNmParam.getValue(), "F", null, null, null, null, null, null, null, null, null);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ed_partMakerCdParam.setValue("");
      ed_partMakerNmParam.setValue("");
    } else {
      ed_partMakerCdParam.setValue(rtnList[0]);
      ed_partMakerNmParam.setValue(rtnList[1]);
    }
  } else {
    ed_partMakerCdParam.setValue("");
    ed_partMakerNmParam.setValue("");
  }
};

/* 조회조건 장비모델 팝업 */
scwin.f_PopUpEqModelParam = async function (pchk) {
  if (typeof ed_eqModelCdParam === 'undefined') return;
  var rtnList;
  if (pchk == 1) {
    if (ed_eqModelCdParam.getValue().length < 7) {
      ed_eqModelNmParam.setValue("");
      return;
    }
    rtnList = await udc_eqModelParam.cfCommonPopUpAsync(null, ed_eqModelCdParam.getValue(), '', "T", null, "장비모델코드,장비모델명", null, null, null, null, null, null, null);
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        ed_eqModelCdParam.setValue("");
        ed_eqModelNmParam.setValue("");
      } else {
        ed_eqModelCdParam.setValue(rtnList[0]);
        ed_eqModelNmParam.setValue(rtnList[1]);
      }
    } else {
      ed_eqModelCdParam.setValue("");
      ed_eqModelNmParam.setValue("");
    }
    return;
  }
  rtnList = await udc_eqModelParam.cfCommonPopUpAsync(null, ed_eqModelCdParam.getValue(), ed_eqModelNmParam.getValue(), "F", null, "장비모델코드,장비모델명", null, null, null, null, null, null, null);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ed_eqModelCdParam.setValue("");
      ed_eqModelNmParam.setValue("");
    } else {
      ed_eqModelCdParam.setValue(rtnList[0]);
      ed_eqModelNmParam.setValue(rtnList[1]);
    }
  } else {
    ed_eqModelCdParam.setValue("");
    ed_eqModelNmParam.setValue("");
  }
};

/* 조회조건 초기화 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  em_partCd.focus();
};

/* 엑셀 다운로드 */
scwin.cfGridToExcel = function () {
  var options = {
    fileName: "부품기준정보목록.xlsx",
    sheetName: "부품기준정보목록",
    type: 1
  };
  $c.data.downloadGridViewExcel($p, gr_eq410, options);
};

/* 영문+숫자만 허용 검사 */
scwin.onlyEng = async function (objtext1) {
  var inText = objtext1.getValue();
  var ret;
  for (var i = 0; i < inText.length; i++) {
    ret = inText.charCodeAt(i);
    if (!(32 < ret && ret < 123)) {
      await $c.win.alert($p, "영문자와 숫자만을 입력하세요\n\n한글과 특수문자는 안됩니다.");
      objtext1.setValue("");
      objtext1.focus();
      return false;
    }
  }
  objtext1.setValue(inText.toUpperCase().trim());
  return true;
};

/* 부품코드 대문자 변환 */
scwin.checkPartCd = function (object1) {
  var inText = object1.getValue();
  object1.setValue(inText.toUpperCase().trim());
};

/* ========== Submission Event Handlers ========== */

/* 저장 성공 */
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != 0) {
    return;
  }
  var wasDelete = scwin.ModeState == "delTrue";
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  ds_eq410.initRowStatus();
  gr_eq410.setDisabled(false);
  scwin.ModeState = "false";
  scwin.f_OnLoad();

  // 삭제 성공 시 그리드 재조회
  if (wasDelete) {
    await scwin.f_Retrieve();
  }
};

/* 저장 실패 */
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
  scwin.savebool = false;
};

/* 조회 실패 */
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};

/* 조회 성공 */
scwin.sbm_retrieve_submitdone = async function (e) {
  var rowCnt = ds_eq410.getRowCount();
  txt_totalCnt.setValue(rowCnt);
  grp_totalCnt.setStyle("display", "");
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_Sav]);

  // objType 미지정 컴포넌트 별도 비활성화
  if (typeof udc_eqModel !== 'undefined') udc_eqModel.setDisabled(true);
  if (typeof udc_partMaker !== 'undefined') udc_partMaker.setDisabled(true);
  lc_OutAcctCd.setDisabled(true);
  lc_circulPartModelCd.setDisabled(true);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      await $c.win.alert($p, "조회된 데이터가 없습니다.");
    }
  } else {
    ds_eq410.initRowStatus();
    // 첫 행 포커스
    gr_eq410.setFocusedCell(0, 0);
    // 첫 행 부품모델 콤보 데이터 로드
    scwin.getModelNm = true;
    scwin.f_getModelNm();
  }
};

/* ========== Grid Event Handlers ========== */

/* 행 위치 변경 */
scwin.ds_eq410_onrowpositionchange = function (info) {
  if (scwin.getModelNm == true) {
    scwin.f_getModelNm();
  }
};

/* 그리드 셀 클릭 */
scwin.gr_eq410_oncellclick = function (row, col) {
  if (row >= 0) {
    scwin.getModelNm = true;
    scwin.f_getModelNm();
  }
};

/* ========== Component Event Handlers ========== */

/* 계통코드 변경 시 부품모델 콤보 갱신 */
scwin.lc_CatCd_onviewchange = function (info) {
  scwin.getModelNm = true;
  scwin.f_getModelNm();
};

/* 부품모델 콤보 변경 시 dataset 반영 */
scwin.lc_circulPartModelCd_onviewchange = function (info) {
  if (scwin._suppressComboChange) return;
  var row = ds_eq410.getRowPosition();
  if (row < 0) return;
  var current = ds_eq410.getCellData(row, "circulPartModelCd") || "";
  var newVal = (info.newValue == null ? "" : info.newValue) + "";
  if (current === newVal) return;
  ds_eq410.setCellData(row, "circulPartModelCd", newVal);
};

/* 입고계정 변경 시 출고계정 동기화 */
scwin.lc_InAcctCd_onviewchange = function (info) {
  lc_OutAcctCd.setValue(lc_InAcctCd.getValue());
};

/* ========== Button Events ========== */
scwin.btn_Init_onclick = function (e) {
  scwin.f_Create();
};
scwin.btn_Add_onclick = function (e) {
  scwin.f_Update();
};
scwin.btn_Esc_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.btn_Sav_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_Del_onclick = function (e) {
  scwin.f_Delete();
};
scwin.btn_trigger1_onclick = function (e) {
  scwin.f_Retrieve();
};

/* ========== UDC Events - 조회조건 ========== */
scwin.udc_partParam_onblurCodeEvent = function () {
  scwin.f_PopUpPartParam(1);
};
scwin.udc_partParam_onviewchangeNameEvent = function () {
  scwin.f_PopUpPartParam(2);
};
scwin.udc_partParam_onclickEvent = function () {
  scwin.f_PopUpPartParam(2);
};
scwin.udc_partMakerParam_onblurCodeEvent = function () {
  scwin.f_PopUpMakerParam(1);
};
scwin.udc_partMakerParam_onviewchangeNameEvent = function () {
  scwin.f_PopUpMakerParam(2);
};
scwin.udc_partMakerParam_onclickEvent = function () {
  scwin.f_PopUpMakerParam(2);
};
scwin.udc_eqModelParam_onblurCodeEvent = function () {
  scwin.f_PopUpEqModelParam(1);
};
scwin.udc_eqModelParam_onviewchangeNameEvent = function () {
  scwin.f_PopUpEqModelParam(2);
};
scwin.udc_eqModelParam_onclickEvent = function () {
  scwin.f_PopUpEqModelParam(2);
};

/* ========== UDC Events - 상세 ========== */
scwin.udc_partMaker_onblurCodeEvent = function () {
  scwin.f_PopUpMaker(1);
};
scwin.udc_partMaker_onviewchangeNameEvent = function () {
  scwin.f_PopUpMaker(2);
};
scwin.udc_partMaker_onclickEvent = function () {
  scwin.f_PopUpMaker(2);
};
scwin.udc_eqModel_onblurCodeEvent = function () {
  scwin.f_PopUpEqModel(1);
};
scwin.udc_eqModel_onviewchangeNameEvent = function () {
  scwin.f_PopUpEqModel(2);
};
scwin.udc_eqModel_onclickEvent = function () {
  scwin.f_PopUpEqModel(2);
};

/* ========== Input Events ========== */
scwin.ed_PartCd_onkeyup = function (e) {
  scwin.onlyEng(ed_PartCd);
};
scwin.chb_InternalCdYn_onviewchange = function (e) {
  scwin.f_onClickInternalCdYn();
};
scwin.chb_CirculPartYn_onviewchange = function (e) {
  scwin.f_onClickCirculPartYn();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:ondataload':'scwin.ondataload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부품 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_partParam',codeId:'em_partCd',nameId:'em_partNm',popupID:'retrievePartInfo',selectID:'retrievePartInfo',style:'',validTitle:'부품','ev:onblurCodeEvent':'scwin.udc_partParam_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_partParam_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_partParam_onclickEvent',maxlengthCode:'15'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계통 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_CatCdParam',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'제조사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_partMakerParam',codeId:'ed_partMakerCdParam',nameId:'ed_partMakerNmParam',popupID:'retrievePartMakerInfo',selectID:'retrievePartMakerInfo',style:'',validTitle:'제조사','ev:onblurCodeEvent':'scwin.udc_partMakerParam_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_partMakerParam_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_partMakerParam_onclickEvent',maxlengthCode:'3'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비모델 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_eqModelParam',codeId:'ed_eqModelCdParam',nameId:'ed_eqModelNmParam',popupID:'retrieveEqModelInfo',selectID:'retrieveEqModelInfo',style:'',validTitle:'장비모델','ev:onblurCodeEvent':'scwin.udc_eqModelParam_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_eqModelParam_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_eqModelParam_onclickEvent',maxlengthCode:'7'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입고계정 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_InAcctCdParam',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출고계정 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_OutAcctCdParam',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_UseYnParam',style:'width: 100px;',submenuSize:'fixed',ref:'',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.btn_trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'grd_section1',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 50%;'},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'부품기준정보 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',btnUser:'Y',id:'udc_topGrp',gridID:'gr_eq410',gridDownFn:'scwin.cfGridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_eq410',focusMode:'cell',id:'gr_eq410',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_eq410_oncellclick',readOnly:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partCd',inputType:'text',removeBorderStyle:'false',value:'부품코드',width:'110'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partNm',inputType:'text',removeBorderStyle:'false',value:'부품명',width:'200'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'catCd',inputType:'text',removeBorderStyle:'false',value:'계통코드',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'catNm',value:'계통명',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'catalPage',value:'카탈로그PAGE',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'catalNo',value:'카탈로그번호',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'partMakerCd',value:'부품제조사코드',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'partUnitCd',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'partClsCd',value:'부품구분코드',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inAcctCd',value:'입고계정코드',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outAcctCd',value:'출고계정코드',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'eqModelCd',value:'장비모델코드',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'240',inputType:'text',style:'',id:'eqModelNm',value:'장비모델명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'internalCdYn',value:'내부코드여부',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'circulPartYn',value:'수리순환품여부',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'circulPartModelCd',value:'수리순환품모델코드',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'useYn',value:'사용여부',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partCd',inputType:'text',removeBorderStyle:'false',width:'110',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partNm',inputType:'text',removeBorderStyle:'false',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'catCd',inputType:'select',removeBorderStyle:'false',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'catNm',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'catalPage',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'catalNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'partMakerCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'select',style:'',id:'partUnitCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'partClsCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inAcctCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outAcctCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'eqModelCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'240',inputType:'text',style:'',id:'eqModelNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'internalCdYn',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'circulPartYn',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'circulPartModelCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'useYn',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'grp_totalCnt',style:'display:none;'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalCnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 50%;'},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부품코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_PartCd',class:'',ref:'data:ds_eq410.partCd','ev:onkeyup':'scwin.ed_PartCd_onkeyup',objType:'key'}},{T:1,N:'xf:select',A:{ref:'data:ds_eq410.internalCdYn',appearance:'full',style:'',id:'chb_InternalCdYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'','ev:onviewchange':'scwin.chb_InternalCdYn_onviewchange',objType:'key'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자동부여'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부품명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_PartNm',style:'width: 200px;',ref:'data:ds_eq410.partNm',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계통',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_CatCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_eq410.catCd',objType:'data','ev:onviewchange':'scwin.lc_CatCd_onviewchange',emptyItem:'true',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'카탈로그 PAGE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_CatalPage',style:'width:100px;',ref:'data:ds_eq410.catalPage',objType:'data',maxLength:'7'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'카탈로그 번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_CatalNo',style:'width:100px;',ref:'data:ds_eq410.catalNo',objType:'data',maxLength:'3'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'제조사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_partMaker',popupID:'retrievePartMakerInfo',selectID:'retrievePartMakerInfo',codeId:'ed_partMakerCd',validTitle:'제조사',nameId:'ed_partMakerNm',style:'',refDataCollection:'ds_eq410',code:'partMakerCd',name:'partMakerNm','ev:onblurCodeEvent':'scwin.udc_partMaker_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_partMaker_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_partMaker_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'단위',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_PartUnitCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_eq410.partUnitCd',objType:'data',emptyItem:'true',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비모델',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_eqModel',codeId:'ed_eqModelCd',nameId:'ed_eqModelNm',popupID:'retrieveEqModelInfo',selectID:'retrieveEqModelInfo',style:'',validTitle:'장비모델',refDataCollection:'ds_eq410',code:'eqModelCd',name:'eqModelNm','ev:onblurCodeEvent':'scwin.udc_eqModel_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_eqModel_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_eqModel_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부품구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_PartClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_eq410.partClsCd',objType:'data',emptyItem:'true',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_InAcctCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_eq410.inAcctCd',objType:'key','ev:onviewchange':'scwin.lc_InAcctCd_onviewchange',emptyItem:'true',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출고계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_OutAcctCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_eq410.outAcctCd',objType:'key',emptyItem:'true',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수리순환품여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_CirculPartYn',ref:'data:ds_eq410.circulPartYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onviewchange':'scwin.chb_CirculPartYn_onviewchange',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부품모델',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_circulPartModelCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_eq410.circulPartModelCd','ev:onviewchange':'scwin.lc_circulPartModelCd_onviewchange',displayMode:'label',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:co_ds_combo2'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_UseYn',ref:'data:ds_eq410.useYn',renderType:'checkboxgroup',objType:'data',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-dot',id:'',label:'신규부품 등록시 부품코드에 특수문자(\' " = , 등)를 입력할 수 없습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Init',style:'',type:'button','ev:onclick':'scwin.btn_Init_onclick',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'btn_Add',style:'',type:'button','ev:onclick':'scwin.btn_Add_onclick',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Esc',style:'',type:'button','ev:onclick':'scwin.btn_Esc_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Sav',style:'',type:'button','ev:onclick':'scwin.btn_Sav_onclick',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Del',style:'',type:'button','ev:onclick':'scwin.btn_Del_onclick',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})