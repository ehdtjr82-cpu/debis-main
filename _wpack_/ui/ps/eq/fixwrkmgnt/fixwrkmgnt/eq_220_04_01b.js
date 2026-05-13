/*amd /ui/ps/eq/fixwrkmgnt/fixwrkmgnt/eq_220_04_01b.xml 40426 7a31d4a129395d827b2a37e5c9c0388b8ed2ddb714cafcd43b79b710d7203b5b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_work_unit_re'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClsCd',name:'사업부문코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'catCd',name:'계통코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkUnitNo',name:'정비작업단위번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkUnitNm',name:'작업명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_sub_param'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixWorkUnitNumber',name:'작업단위번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'사업부문',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_work_unit',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkUnitNo',name:'작업단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkUnitNm',name:'단위명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catCd',name:'계통코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stndWrkHhCnt',name:'표준작업시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'사업부문',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_work_unit_list',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'homeClsCd',name:'사업부문',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelCd',name:'모델코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'모델명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useExpectQty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'partUnitNm',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catNm',name:'계통',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partMakerNm',name:'제조사',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_com_unit_list',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'homeClsCd',name:'사업부문',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCd',name:'부품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'부품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useExpectQty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'partUnitNm',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catNm',name:'계통',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partMakerNm',name:'제조사',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',ref:'data:json,dma_work_unit_re',target:'data:json,ds_work_unit',action:'/ps.eq.opinfomgnt.opinfomgnt.RetrieveFixWorkUnitListCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_detail',ref:'data:json,dma_sub_param',target:'data:json,[{"id":"ds_work_unit_list","key":"OUT_DS1"},{"id":"ds_com_unit_list","key":"OUT_DS2"}]',action:'/ps.eq.opinfomgnt.opinfomgnt.RetrieveFixWorkUnitDetailCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submitdone':'scwin.sbm_retrieve_detail_submitdone','ev:submiterror':'scwin.sbm_retrieve_detail_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',ref:'data:json,[{"id":"ds_work_unit","key":"IN_DS1"},{"id":"ds_work_unit_list","key":"IN_DS2"},{"id":"ds_com_unit_list","key":"IN_DS3"}]',target:'',action:'/ps.eq.opinfomgnt.opinfomgnt.RegistFixWorkUnitCMD.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수 선언
scwin.tr_save_action = "";
scwin.cvNNew = false; // 신규
scwin.cvUpdate = false; // 수정
scwin.cntWorkUnit = 0;
scwin.cntComUnit = 0;

// 화면 로딩 시
scwin.onpageload = async function () {
  // 공통코드 설정
  var codeOptions = [{
    grpCd: "ZZ205",
    compID: "lux_homeClsCd, lux_d_homeClsCd"
  },
  // 사업부문 (EQ)
  {
    grpCd: "EQ005",
    compID: "lux_catCd, lux_d_catCd"
  } // 계통
  ];
  $c.data.setCommonCode($p, codeOptions);

  // 세션 정보 바인딩 (JSP: userInfo.getEqHomeClsCd())
  var userHomeClsCd = $c.data.getMemInfo($p, "eqHomeClsCd"); // 예시: 세션 정보 조회
  if (userHomeClsCd) {
    lux_homeClsCd.setValue(userHomeClsCd);
    lux_d_homeClsCd.setValue(userHomeClsCd);
  }
  lux_catCd.setSelectedIndex(0);
  lux_d_catCd.setSelectedIndex(0);

  // 버튼 비활성화
  $c.util.setDisabled($p, [btn_Init, btn_Add, bCancel, btn_Upt, btn_Del], true);
  scwin.f_disabledGrdBtn(true); // 그리드 버튼 disable
};

// 조회
scwin.f_Retrieve = async function () {
  // 조회조건 바인딩은 submission ref로 처리됨 (dma_work_unit_re)
  await $c.sbm.execute($p, sbm_retrieve);
};

// 조회 콜백
scwin.sbm_retrieve_submitdone = async function (e) {
  // Grid Enable/Disable
  gr_work_pl.setReadOnly(false);
  gr_work_part_pl.setReadOnly(true);
  gr_com_part_pl.setReadOnly(true);
  $c.util.setDisabled($p, [em_d_fixWrkUnitNo, ed_input6, ed_input7, lux_d_homeClsCd, lux_d_catCd], true); // Key Data Disable

  if (ds_work_unit.getRowCount() == 0) {
    lux_d_homeClsCd.setValue(lux_homeClsCd.getValue()); // 정비소속구분코드
    $c.util.setDisabled($p, [btn_Add, bCancel, btn_Upt, btn_Del], true);
  } else {
    $c.util.setDisabled($p, [bCancel, btn_Upt], true);
    $c.util.setDisabled($p, [btn_Init, btn_Add, btn_Del], false);
  }
  scwin.f_disabledGrdBtn(true); // 그리드 버튼 disable
};
scwin.sbm_retrieve_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};

// 상세 조회
scwin.f_Retrieve_detail = async function (fixWorkUnitNumber) {
  dma_sub_param.set("fixWorkUnitNumber", fixWorkUnitNumber);
  dma_sub_param.set("homeClsCd", lux_d_homeClsCd.getValue());
  await $c.sbm.execute($p, sbm_retrieve_detail);
};

// 상세 조회 콜백
scwin.sbm_retrieve_detail_submitdone = async function (e) {
  scwin.cntWorkUnit = ds_work_unit_list.getRowCount();
  scwin.cntComUnit = ds_com_unit_list.getRowCount();

  // 총 건수 업데이트 (ID가 body에 존재한다고 가정)
  // spa_totalRow2.setValue(ds_work_unit_list.getRowCount());
  // spa_totalRow3.setValue(ds_com_unit_list.getRowCount());
};
scwin.sbm_retrieve_detail_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};

// 첫번째 그리드 추가 (장비모델별 부품)
scwin.f_AddPartRow = async function () {
  if (scwin.cvUpdate == true || scwin.cvNNew == true) {
    // Mandatory 항목 체크
    if (!(await $c.gus.cfValidate($p, [em_d_fixWrkUnitNo, ed_input6]))) return;
    if (scwin.cvUpdate == true) scwin.tr_save_action = "/ps.eq.opinfomgnt.opinfomgnt.UpdateFixWorkUnitCMD.do";else if (scwin.cvNNew == true) scwin.tr_save_action = "/ps.eq.opinfomgnt.opinfomgnt.RegistFixWorkUnitCMD.do";
    var row = $c.data.insertRow($p, ds_work_unit_list);
    ds_work_unit_list.setCellData(row, "fixWrkUnitNo", em_d_fixWrkUnitNo.getValue());
    ds_work_unit_list.setCellData(row, "homeClsCd", lux_d_homeClsCd.getValue());
  }
};

// 두번째 그리드 추가 (공통 부품)
scwin.f_AddComPartRow = async function () {
  if (scwin.cvUpdate == true || scwin.cvNNew == true) {
    // Mandatory 항목 체크
    if (!(await $c.gus.cfValidate($p, [em_d_fixWrkUnitNo, ed_input6]))) return;
    if (scwin.cvUpdate == true) scwin.tr_save_action = "/ps.eq.opinfomgnt.opinfomgnt.UpdateFixWorkUnitCMD.do";else if (scwin.cvNNew == true) scwin.tr_save_action = "/ps.eq.opinfomgnt.opinfomgnt.RegistFixWorkUnitCMD.do";
    var row = $c.data.insertRow($p, ds_com_unit_list);
    ds_com_unit_list.setCellData(row, "fixWrkUnitNo", em_d_fixWrkUnitNo.getValue());
    ds_com_unit_list.setCellData(row, "homeClsCd", lux_homeClsCd.getValue());
  }
};

// 신규
scwin.f_Create = async function () {
  scwin.tr_save_action = "/ps.eq.opinfomgnt.opinfomgnt.RegistFixWorkUnitCMD.do";
  scwin.cvNNew = true;
  $c.util.setDisabled($p, [em_d_fixWrkUnitNo, ed_input6, ed_input7, lux_d_homeClsCd, lux_d_catCd], false); // Enable Key Data
  $c.util.setDisabled($p, [btn_Init, btn_Add, bCancel, btn_Upt, btn_Del], false); // Enable All Btn
  $c.util.setDisabled($p, [btn_Init, btn_Add, btn_Del], true); // Disable specific btns
  scwin.f_disabledGrdBtn(false); // 그리드 버튼 enable

  if (ds_work_unit.getRowCount() > 0) {
    var row = $c.data.insertRow($p, ds_work_unit);
    // work unit 초기화
    var userHomeClsCd = $c.data.getMemInfo($p, "eqHomeClsCd");
    ds_work_unit.setCellData(row, "homeClsCd", userHomeClsCd);
    ds_work_unit.setCellData(row, "catCd", "01");
    ds_work_unit.setCellData(row, "useYn", "1");
  } else {
    ds_work_unit.removeAll();
    var row = $c.data.insertRow($p, ds_work_unit);
    ds_work_unit.setCellData(row, "fixWrkUnitNo", "");
    ds_work_unit.setCellData(row, "fixWrkUnitNm", "");
    ds_work_unit.setCellData(row, "catCd", "01");
    ds_work_unit.setCellData(row, "useYn", "1");
  }
  lux_d_homeClsCd.setValue(ds_work_unit.getCellData(0, "homeClsCd"));
  lux_d_catCd.setSelectedIndex(0);

  // detail list 2개를 초기화 시킨다.
  scwin.f_Retrieve_detail("0");
  gr_work_pl.setReadOnly(true);
  gr_work_part_pl.setReadOnly(false);
  gr_com_part_pl.setReadOnly(false);
  em_d_fixWrkUnitNo.focus();
};

// 수정
scwin.f_Update = async function () {
  scwin.tr_save_action = "/ps.eq.opinfomgnt.opinfomgnt.UpdateFixWorkUnitCMD.do";
  scwin.cvUpdate = true;

  // Grid Enable/Disable
  gr_work_pl.setReadOnly(true);
  gr_work_part_pl.setReadOnly(false);
  gr_com_part_pl.setReadOnly(false);
  $c.util.setDisabled($p, [em_d_fixWrkUnitNo, ed_input6, ed_input7, lux_d_homeClsCd, lux_d_catCd], false); // Enable Key Data
  $c.util.setDisabled($p, [em_d_fixWrkUnitNo, lux_d_catCd], true); // Disable Key (fixWrkUnitNo, catCd)

  $c.util.setDisabled($p, [btn_Add, btn_Del], true);
  $c.util.setDisabled($p, [bCancel, btn_Upt], false);
  scwin.f_disabledGrdBtn(false); // 그리드 버튼 enable
};

// 취소
scwin.f_Cancel = async function () {
  if (ds_work_unit.getRowCount() > 0) {
    $c.util.setDisabled($p, [bCancel, btn_Upt], true);
    $c.util.setDisabled($p, [btn_Init, btn_Add, btn_Del], false);
  } else {
    $c.util.setDisabled($p, [btn_Add, bCancel, btn_Upt, btn_Del], true);
    $c.util.setDisabled($p, [btn_Init], false);
  }
  scwin.f_disabledGrdBtn(true); // 그리드 버튼 disable

  ds_work_unit.undoAll();
  ds_work_unit_list.undoAll();
  ds_com_unit_list.undoAll();
  $c.util.setDisabled($p, [em_d_fixWrkUnitNo, ed_input6, ed_input7, lux_d_homeClsCd, lux_d_catCd], true); // Disable Key Data

  gr_work_pl.setReadOnly(false);
  gr_work_part_pl.setReadOnly(true);
  gr_com_part_pl.setReadOnly(true);
  scwin.cvUpdate = false;
  scwin.cvNNew = false;
};

// 저장
scwin.f_Save = async function () {
  // tb_fixWrkUnit 영역 검증
  if (!(await $c.gus.cfValidate($p, [em_d_fixWrkUnitNo, ed_input6, ed_input7, lux_d_homeClsCd, lux_d_catCd]))) return;

  // 변경한 데이터가 있는지 체크한다.
  if (!ds_work_unit.isUpdated() && !ds_work_unit_list.isUpdated() && !ds_com_unit_list.isUpdated()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["작업단위정보"]);
  } else {
    if (await $c.gus.cfValidate($p, [gr_work_part_pl, gr_com_part_pl])) {
      if (parseInt(ed_input7.getValue()) < 1) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_013, ["표준작업시간", "1"]);
        ed_input7.focus();
        return;
      }

      // 장비모델별 부품의 수량 검사
      for (var row = 0; row < ds_work_unit_list.getRowCount(); row++) {
        if (parseInt(ds_work_unit_list.getCellData(row, "useExpectQty")) < 1) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_013, ["수량", "1"]);
          gr_work_part_pl.setFocusedCell(row, "useExpectQty");
          return;
        }
      }

      // 공통 부품의 수량 검사
      for (var row = 0; row < ds_com_unit_list.getRowCount(); row++) {
        if (parseInt(ds_com_unit_list.getCellData(row, "useExpectQty")) < 1) {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_013, ["수량", "1"]);
          gr_com_part_pl.setFocusedCell(row, "useExpectQty");
          return;
        }
      }
      if (await $c.win.confirm($p, "저장하시겠습니까?")) {
        // disable 처리
        $c.util.setDisabled($p, [em_d_fixWrkUnitNo, ed_input6, ed_input7, lux_d_homeClsCd, lux_d_catCd], true);
        $c.util.setDisabled($p, [bCancel, btn_Upt], true);
        scwin.f_disabledGrdBtn(true);
        gr_work_pl.setReadOnly(false);
        gr_work_part_pl.setReadOnly(true);
        gr_com_part_pl.setReadOnly(true);
        sbm_save.action = scwin.tr_save_action;
        await $c.sbm.execute($p, sbm_save);
      }
    }
  }
};

// 저장 콜백
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
};
scwin.sbm_save_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
  if (scwin.cvNNew) {
    scwin.f_Cancel();
    scwin.f_Create();
  }
};

// 삭제
scwin.f_Delete = async function () {
  if (await $c.win.confirm($p, "삭제하시겠습니까?")) {
    var fixWorkUnitNumber = em_d_fixWrkUnitNo.getValue();
    var homeClsCd = lux_d_homeClsCd.getValue();
    sbm_save.action = "/ps.eq.opinfomgnt.opinfomgnt.DeleteFixWorkUnitCMD.do?fixWorkUnitNumber=" + fixWorkUnitNumber + "&homeClsCd=" + homeClsCd;
    await $c.sbm.execute($p, sbm_save);
    $c.util.setDisabled($p, [em_d_fixWrkUnitNo, ed_input6, ed_input7, lux_d_homeClsCd, lux_d_catCd], true);
    $c.util.setDisabled($p, [btn_Upt], true);
    scwin.f_Retrieve();
  }
};

// 조회 조건 지우기
scwin.f_FieldClear = async function () {
  lux_homeClsCd.setValue("");
  lux_catCd.setValue("");
  ed_input1.setValue("");
  ed_input2.setValue("");
};

// 명칭 조회 Popup 처리
scwin.f_openCommPopUpGrid = async function (disGubun, row, pClose) {
  var pCode = "";
  var pName = "";
  var pWhere = "";
  var pHomeClsCd = lux_d_homeClsCd.getValue();
  if (pHomeClsCd == "LO") {
    // 물류
    pWhere = "LV";
  } else {
    // 고속
    pWhere = "TV";
  }
  switch (disGubun) {
    case 1:
      // 모델 코드팝업
      pCode = ds_work_unit_list.getCellData(row, "eqModelCd");
      udc.ilCommonPopUp(scwin.callback_eqModel, "retrieveEqModelListInfo", pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, "T", "모델정보,모델코드,모델명");
      break;
    case 2:
      // 부품 코드팝업 (장비모델별 부품 그리드)
      pCode = ds_work_unit_list.getCellData(row, "partCd");
      udc.ilCommonPopUp(scwin.callback_part, "retrievePartBasicInfo", pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "부품정보,부품코드,부품명");
      break;
    case 3:
      // 부품 코드팝업 (공통 부품 그리드)
      pCode = ds_com_unit_list.getCellData(row, "partCd");
      udc.ilCommonPopUp(scwin.callback_comPart, "retrievePartBasicInfo", pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, "F", "부품정보,부품코드,부품명");
      break;
  }
};

// 팝업 콜백 함수들
scwin.callback_eqModel = async function (rtnList) {
  var row = ds_work_unit_list.getRowPosition();
  if (rtnList) {
    ds_work_unit_list.setCellData(row, "eqModelCd", rtnList[0]);
    ds_work_unit_list.setCellData(row, "eqModelNm", rtnList[1]);
  }
};
scwin.callback_part = async function (rtnList) {
  var row = ds_work_unit_list.getRowPosition();
  if (rtnList && rtnList[0] != "N/A") {
    // 중복 체크
    for (var i = 0; i < ds_work_unit_list.getRowCount(); i++) {
      if (ds_work_unit_list.getCellData(i, "partCd") == rtnList[0]) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["부품"]);
        return;
      }
    }
    for (var i = 0; i < ds_com_unit_list.getRowCount(); i++) {
      if (ds_com_unit_list.getCellData(i, "partCd") == rtnList[0]) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["부품"]);
        return;
      }
    }
    ds_work_unit_list.setCellData(row, "partCd", rtnList[0]);
    ds_work_unit_list.setCellData(row, "partNm", rtnList[1]);
    ds_work_unit_list.setCellData(row, "partUnitNm", rtnList[3]);
    ds_work_unit_list.setCellData(row, "catNm", rtnList[4]);
    ds_work_unit_list.setCellData(row, "partMakerNm", rtnList[5]);
  }
};
scwin.callback_comPart = async function (rtnList) {
  var row = ds_com_unit_list.getRowPosition();
  if (rtnList && rtnList[0] != "N/A") {
    // 중복 체크
    for (var i = 0; i < ds_work_unit_list.getRowCount(); i++) {
      if (ds_work_unit_list.getCellData(i, "partCd") == rtnList[0]) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["부품"]);
        return;
      }
    }
    for (var i = 0; i < ds_com_unit_list.getRowCount(); i++) {
      if (ds_com_unit_list.getCellData(i, "partCd") == rtnList[0]) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["부품"]);
        return;
      }
    }
    ds_com_unit_list.setCellData(row, "partCd", rtnList[0]);
    ds_com_unit_list.setCellData(row, "partNm", rtnList[1]);
    ds_com_unit_list.setCellData(row, "partUnitNm", rtnList[3]);
    ds_com_unit_list.setCellData(row, "catNm", rtnList[4]);
    ds_com_unit_list.setCellData(row, "partMakerNm", rtnList[5]);
  }
};

// 그리드 높이 조정
scwin.f_grdHeiht = function (objGrdId, size) {
  var objGrd = $p.getComponentById(objGrdId);
  var currentHeight = parseInt(objGrd.getStyle("height"));
  var newHeight = currentHeight + size;
  if (newHeight > 0) {
    objGrd.setStyle("height", newHeight + "px");
  }
};

// 그리드 버튼 제어 (UDC 제어)
scwin.f_disabledGrdBtn = function (ctrl) {
  // UDC IDs must be assigned in the body: udc_bottom_gr_work_part_pl, udc_bottom_gr_com_part_pl
  var udc1 = $p.getComponentById("udc_bottom_gr_work_part_pl");
  var udc2 = $p.getComponentById("udc_bottom_gr_com_part_pl");
  if (udc1) udc1.setDisabled(ctrl);
  if (udc2) udc2.setDisabled(ctrl);
};

// 엑셀 다운로드
scwin.f_toExcel1 = function () {
  var options = {
    fileName: "작업단위.xlsx",
    sheetName: "작업단위",
    removeColumns: ""
  };
  $c.data.downloadGridViewExcel($p, gr_work_pl, options);
};

// 이벤트 핸들러 매핑

// 조회 버튼
scwin.btn_trigger1_onclick = function (e) {
  scwin.f_Retrieve();
};

// 신규 버튼
scwin.btn_Init_onclick = function (e) {
  scwin.f_Create();
};

// 수정 버튼
scwin.btn_Add_onclick = function (e) {
  scwin.f_Update();
};

// 취소 버튼
scwin.bCancel_onclick = function (e) {
  scwin.f_Cancel();
};

// 저장 버튼
scwin.btn_Upt_onclick = function (e) {
  scwin.f_Save();
};

// 삭제 버튼
scwin.btn_Del_onclick = function (e) {
  scwin.f_Delete();
};

// 그리드 1 클릭 (상세 조회)
scwin.gr_work_pl_oncellclick = function (row, col) {
  scwin.f_Retrieve_detail(ds_work_unit.getCellData(row, "fixWrkUnitNo"));
};

// 장비모델별 부품 Grid 포커스 (Edit 제어)
scwin.gr_work_part_pl_onrowindexchange = function (row, oldRow) {
  if (row <= scwin.cntWorkUnit - 1) {
    // 0-based index correction
    gr_work_part_pl.setCellReadOnly(row, "eqModelCd", true);
  } else {
    gr_work_part_pl.setCellReadOnly(row, "eqModelCd", false);
  }
};

// 장비모델별 부품 Grid 팝업
scwin.gr_work_part_pl_ontextimageclick = function (row, col) {
  var colId = gr_work_part_pl.getColumnID(col);
  if (colId == "eqModelCd") {
    scwin.f_openCommPopUpGrid(1, row, 'F');
  } else if (colId == "partCd") {
    scwin.f_openCommPopUpGrid(2, row, 'F');
  }
};

// 장비모델별 부품 Grid 값 변경 (OnExit 대응)
scwin.gr_work_part_pl_onviewchange = function (info) {
  var row = info.rowIndex;
  var colId = info.colID;
  var newValue = info.newValue;
  var oldValue = info.oldValue;
  if (row >= 0 && ds_work_unit_list.getRowCount() > row) {
    if (colId == "eqModelCd") {
      if (newValue != "" && newValue != oldValue) {
        ds_work_unit_list.setCellData(row, "eqModelNm", "");
        scwin.f_openCommPopUpGrid(1, row, 'T');
      } else if (newValue == "") {
        ds_work_unit_list.setCellData(row, "eqModelCd", "");
        ds_work_unit_list.setCellData(row, "eqModelNm", "");
      }
    } else if (colId == "partCd") {
      if (newValue != "" && newValue != oldValue) {
        ds_work_unit_list.setCellData(row, "partNm", "");
        ds_work_unit_list.setCellData(row, "partUnitNm", "");
        ds_work_unit_list.setCellData(row, "catNm", "");
        ds_work_unit_list.setCellData(row, "partMakerNm", "");
        scwin.f_openCommPopUpGrid(2, row, 'T');
      } else if (newValue == "") {
        ds_work_unit_list.setCellData(row, "partCd", "");
        ds_work_unit_list.setCellData(row, "partNm", "");
        ds_work_unit_list.setCellData(row, "partUnitNm", "");
        ds_work_unit_list.setCellData(row, "catNm", "");
        ds_work_unit_list.setCellData(row, "partMakerNm", "");
      }
    }
  }
};

// 공통 부품 Grid 포커스
scwin.gr_com_part_pl_onrowindexchange = function (row, oldRow) {
  if (row <= scwin.cntComUnit - 1) {
    gr_com_part_pl.setCellReadOnly(row, "partCd", true);
  } else {
    gr_com_part_pl.setCellReadOnly(row, "partCd", false);
  }
};

// 공통 부품 Grid 팝업
scwin.gr_com_part_pl_ontextimageclick = function (row, col) {
  var colId = gr_com_part_pl.getColumnID(col);
  if (colId == "partCd") {
    scwin.f_openCommPopUpGrid(3, row, 'F');
  }
};

// 공통 부품 Grid 값 변경
scwin.gr_com_part_pl_onviewchange = function (info) {
  var row = info.rowIndex;
  var colId = info.colID;
  var newValue = info.newValue;
  var oldValue = info.oldValue;
  if (row >= 0 && ds_com_unit_list.getRowCount() > row) {
    if (colId == "partCd") {
      if (newValue != "" && newValue != oldValue) {
        ds_com_unit_list.setCellData(row, "partNm", "");
        ds_com_unit_list.setCellData(row, "partUnitNm", "");
        ds_com_unit_list.setCellData(row, "catNm", "");
        ds_com_unit_list.setCellData(row, "partMakerNm", "");
        scwin.f_openCommPopUpGrid(3, row, 'T');
      } else if (newValue == "") {
        ds_com_unit_list.setCellData(row, "partCd", "");
        ds_com_unit_list.setCellData(row, "partNm", "");
        ds_com_unit_list.setCellData(row, "partUnitNm", "");
        ds_com_unit_list.setCellData(row, "catNm", "");
        ds_com_unit_list.setCellData(row, "partMakerNm", "");
      }
    }
  }
};

// 소속부문 변경 (JSP: lux_homeClsCd OnSelChange)
scwin.lux_homeClsCd_onviewchange = function (info) {
  lux_d_homeClsCd.setValue(info.newValue);
};

// 행 추가/삭제 함수 (UDC에서 호출될 함수들)
scwin.f_AddPartRow_UDC = function () {
  scwin.f_AddPartRow();
};
scwin.f_DelPartRow_UDC = function () {
  if (scwin.cvUpdate == true || scwin.cvNNew == true) {
    var idx = ds_work_unit_list.getRowPosition();
    ds_work_unit_list.removeRow(idx);
  }
};
scwin.f_AddComPartRow_UDC = function () {
  scwin.f_AddComPartRow();
};
scwin.f_DelComPartRow_UDC = function () {
  if (scwin.cvUpdate == true || scwin.cvNNew == true) {
    var idx = ds_com_unit_list.getRowPosition();
    ds_com_unit_list.removeRow(idx);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selectbox2',style:'width: 150px;',submenuSize:'fixed'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계통',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selectbox3',style:'width: 150px;',submenuSize:'fixed'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업단위',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_input1',class:''}},{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_input2',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업단위 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_work_unit',id:'gr_work_pl',style:'',visibleRowNum:'17',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkUnitNo',inputType:'text',style:'',value:'작업단위',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkUnitNm',inputType:'text',style:'',value:'단위명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'catCd',inputType:'text',style:'',value:'계통코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stndWrkHhCnt',inputType:'text',style:'',value:'표준작업시간',width:'120',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkUnitNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkUnitNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'catCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stndWrkHhCnt',inputType:'text',style:'',value:'',width:'120',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업단위코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'em_d_fixWrkUnitNo',style:'width: 150px;',ref:'data:ds_work_unit.fixWrkUnitNo',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업단위명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_input6',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'표준작업시간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_input7',style:'width: 150px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selectbox4',style:'width: 150px;',submenuSize:'fixed'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계통',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selectbox5',style:'width: 150px;',submenuSize:'fixed'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'장비모델별 부품 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_work_unit_list',focusMode:'row',id:'gr_work_part_pl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'homeClsCd',inputType:'text',removeBorderStyle:'false',value:'모델코드',width:'100',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'eqModelCd',inputType:'text',removeBorderStyle:'false',value:'모델명',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'eqModelNm',inputType:'text',removeBorderStyle:'false',value:'부품코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partCd',inputType:'text',removeBorderStyle:'false',value:'부품명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partNm',inputType:'text',style:'',value:'수량',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useExpectQty',inputType:'text',style:'',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partUnitNm',inputType:'text',style:'',value:'계통',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'catNm',value:'제조사',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'homeClsCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'eqModelCd',inputType:'textImage',removeBorderStyle:'false',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'eqModelNm',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partCd',inputType:'textImage',removeBorderStyle:'false',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partNm',inputType:'text',style:'',textAlign:'center',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useExpectQty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',allowChar:'0-9',displayFormat:'99999'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partUnitNm',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'catNm',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'Y',btnRowDelYn:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'공통 부품 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_com_unit_list',focusMode:'row',id:'gr_com_part_pl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'homeClsCd',inputType:'text',removeBorderStyle:'false',value:'부품코드',width:'100',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partCd',inputType:'text',removeBorderStyle:'false',value:'부품명',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partNm',inputType:'text',removeBorderStyle:'false',value:'수량',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'useExpectQty',inputType:'text',removeBorderStyle:'false',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partUnitNm',inputType:'text',style:'',value:'계통',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'catNm',inputType:'text',style:'',value:'제조사',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'homeClsCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partCd',inputType:'textImage',removeBorderStyle:'false',width:'100',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'partNm',inputType:'text',removeBorderStyle:'false',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'useExpectQty',inputType:'text',removeBorderStyle:'false',width:'70',textAlign:'right',allowChar:'0-9',displayFormat:'99999'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partUnitNm',inputType:'text',style:'',textAlign:'center',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'catNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'N',btnDelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',style:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]})