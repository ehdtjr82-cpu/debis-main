/*amd /ui/cm/bc/comnmgnt/programmgnt/zz_610_01_01b.xml 46263 c3cf23b77be7078b64a0f541fa6ea43fb92b4c0297799b05bc368456d15c5a3f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCls',name:'sysCls',dataType:'text'}},{T:1,N:'w2:key',A:{id:'programLupCond',name:'programLupCond',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCntn',name:'qryCntn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'grpCls',name:'grpCls',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pgmStsCdCond',name:'pgmStsCdCond',dataType:'text'}},{T:1,N:'w2:key',A:{id:'privGrpId',name:'privGrpId',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_program',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_program_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_program_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pgmId',name:'프로그램ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmNm',name:'실행프로그램명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userFavorApprYn',name:'사용자즐겨찾기허가여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmParam',name:'프로그램PARAM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoUseYn',name:'협력업체사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'privCopyExceptYn',name:'권한복사제외여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmStsCd',name:'프로그램상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmKndCd',name:'프로그램종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repoDocGrpCd',name:'보고서그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'scrPatternNo',name:'화면유형번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmScrPath',name:'프로그램화면경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firstPgmrNm',name:'최초개발자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalModrNm',name:'최종수정자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptPrivYn',name:'부서권한여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sleepPic',name:'SLEEP담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sleepDt',name:'SLEEP일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sleepRmk',name:'SLEEP사유',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'',method:'post',mediatype:'application/json',ref:'data:json,dma_search',target:'data:json,{"id":"ds_program","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified", "id":"ds_program", "key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId;
scwin.userType = scwin.memJson.userClsCd;
scwin.userHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.coCd = scwin.memJson.coCd;
//hidden start
scwin.txt_pgmId = "0";
scwin.txt_programLupCond = "0";
scwin.txt_sysCls = "0";
scwin.txt_retrieveYn = "0";
scwin.txt_saveType = "";
scwin.txt_PgmIdValChk = "";
scwin.txt_rowDelStat = "";
scwin.txt_countRow = "0";
scwin.lc_repoDocGrpCd_flag = true;

//hidden end

scwin.prevRow = 0;

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ108",
    compID: "lc_pgmKndCd"
  }, {
    grpCd: "ZZ109",
    compID: "lc_repoDocGrpCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  scwin.init();
  if ($p.getAllParameter().paramData.menuInfo.menuId.indexOf("n") > -1) {
    rd_debis.setSelectedIndex(1);
    rd_debis.setDisabled(true);
  }
};
scwin.init = function () {
  let vparam1 = "";
  if (rd_debis.getValue() == "N") {
    vparam1 = "Ncall";
  }
  const codeOptions1 = [{
    method: "getLuxeComboData",
    param1: vparam1 + "ProgramEBC",
    param2: "retrievepgmSts",
    param3: [""],
    compID: "lc_pgmStsCdCond"
  }, {
    method: "getLuxeComboData",
    param1: vparam1 + "ProgramEBC",
    param2: "retrievepgmSts",
    param3: [""],
    compID: "lc_pgmStsCd"
  }, {
    method: "getLuxeComboData",
    param1: vparam1 + "ProgramEBC",
    param2: "retrieveSysCdList",
    param3: [""],
    compID: "lc_sysCls"
  }, {
    method: "getLuxeComboData",
    param1: vparam1 + "ProgramEBC",
    param2: "retrieveSysCdList",
    param3: [""],
    compID: "lc_sysCd"
  }, {
    method: "getLuxeComboData",
    param1: vparam1 + "ProgramEBC",
    param2: "retrievePatternNo",
    param3: [""],
    compID: "lc_scrPatternNo"
  }];
  $c.data.setGauceUtil($p, codeOptions1);

  // ds_program.setJSON([]);
  spanTotal.setLabel(0);
  if (scwin.lc_repoDocGrpCd_flag) {
    lc_repoDocGrpCd.addItem("0", "미선택", 0);
    scwin.lc_repoDocGrpCd_flag = false;
  }
  lc_repoDocGrpCd.setSelectedIndex(0);
  scwin.f_ContentsDisable();
  $c.gus.cfDisableBtn($p, [btn_Update, btn_Save, btn_Cancel, btn_Delete]);
  lc_programLupCond.setSelectedIndex(0);
  ed_qryCntn.setValue("");
  ed_qryCntn.focus();
};

//-------------------------------------------------------------------------
// Dataset DEBUG
//-------------------------------------------------------------------------
// function dataSetDebug(dataSet, isDebug){
scwin.dataSetDebug = function (dataSet, isDebug) {};

//-------------------------------------------------------------------------
// 프로그램목록 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let debis = "";
  if (rd_debis.getValue() == "N") {
    debis = "ncall.";
  } else {
    dma_search.set("pgmStsCdCond", lc_pgmStsCdCond.getValue());
  }
  dma_search.set("sysCls", scwin.txt_sysCls);
  dma_search.set("programLupCond", scwin.txt_programLupCond);
  dma_search.set("qryCntn", ed_qryCntn.getValue());
  dma_search.set("grpCls", "00");
  ds_program.removeAll();
  sbm_search.action = "/" + debis + "cm.bc.comnmgnt.programmgnt.RetrieveProgramListCMD.do";
  await $c.sbm.execute($p, sbm_search);
  scwin.f_ContentsDisable();
  scwin.txt_retrieveYn = "1";
  scwin.txt_PgmIdValChk = "0";
};

// 항목 Enable
//-------------------------------------------------------------------------
scwin.f_ContentsEnable = function () {
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableObj($p, ed_pgmNm, true);
  $c.gus.cfEnableObj($p, ed_firstPgmrNm, true);
  $c.gus.cfEnableObj($p, ed_finalModrNm, true);
  $c.gus.cfEnableObj($p, lc_pgmKndCd, true);
  $c.gus.cfEnableObj($p, lc_repoDocGrpCd, true);
  $c.gus.cfEnableObj($p, ed_pgmScrPath, true);
  $c.gus.cfEnableObj($p, ed_pgmParam, true);
  $c.gus.cfEnableObj($p, rd_userFavorApprYn, true); // 사용자 즐겨찾기 허용여부
  $c.gus.cfEnableObj($p, rd_privCopyExceptYn, true); // 권한복사제외여부
  $c.gus.cfEnableObj($p, rd_copCoUseYn, true); //  협력업체 사용여부
  $c.gus.cfEnableObj($p, rd_deptPrivYn, true); //  부서권한여부
  $c.gus.cfEnableObj($p, lc_scrPatternNo, true); // 
  $c.gus.cfEnableObj($p, lc_sysCd, true); // 
  $c.gus.cfEnableObj($p, lc_pgmStsCd, true); // 
  $c.gus.cfEnableObj($p, btn_pgmId_search, true); // 
};

//-------------------------------------------------------------------------
// 항목 Disable
//-------------------------------------------------------------------------
scwin.f_ContentsDisable = function () {
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableObj($p, ed_pgmNm, false);
  $c.gus.cfEnableObj($p, ed_firstPgmrNm, false);
  $c.gus.cfEnableObj($p, ed_finalModrNm, false);
  $c.gus.cfEnableObj($p, lc_pgmKndCd, false);
  $c.gus.cfEnableObj($p, lc_repoDocGrpCd, false);
  $c.gus.cfEnableObj($p, ed_pgmScrPath, false);
  $c.gus.cfEnableObj($p, ed_pgmParam, false);
  $c.gus.cfEnableObj($p, rd_userFavorApprYn, false); // 사용자 즐겨찾기 허용여부
  $c.gus.cfEnableObj($p, rd_privCopyExceptYn, false); // 권한복사제외여부
  $c.gus.cfEnableObj($p, rd_copCoUseYn, false); //  협력업체 사용여부
  $c.gus.cfEnableObj($p, rd_deptPrivYn, false); //  부서권한여부
  $c.gus.cfEnableObj($p, lc_scrPatternNo, false); // 
  $c.gus.cfEnableObj($p, lc_sysCd, false); // 
  $c.gus.cfEnableObj($p, lc_pgmStsCd, false); // 
  $c.gus.cfEnableObj($p, btn_pgmId_search, false); // 
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  scwin.f_ContentsEnable();
  scwin.txt_saveType = "1"; // 저장타입이 신규인경우  (1:신규, 2: 수정, 3: 삭제)

  scwin.f_AddRow(); // 행추가

  lc_sysCd.setSelectedIndex(0);
  lc_pgmStsCd.setSelectedIndex(0);
  lc_scrPatternNo.setSelectedIndex(0);
  lc_pgmKndCd.setSelectedIndex(0);
  lc_repoDocGrpCd.setSelectedIndex(0);
  $c.gus.cfEnableBtnOnly($p, [btn_Cancel, btn_Save]);
  scwin.f_SleepObjects();
};

//-------------------------------------------------------------------------
// 프로그램 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  scwin.txt_saveType = "2"; // 수정인경우(1:신규, 2: 수정, 3: 삭제)

  scwin.f_ContentsEnable();
  $c.gus.cfEnableObj($p, ed_pgmId, false);
  $c.gus.cfEnableObj($p, btn_pgmId_search, false);
  var vSysCd = lc_sysCd.getValue();

  // CO:관리회계, FI:재무회계, FM:자금관리
  if (vSysCd == "CO" || vSysCd == "FI" || vSysCd == "FM") {
    $c.gus.cfEnableObj($p, rd_deptPrivYn, true); //  부서권한여부
  } else {
    $c.gus.cfEnableObj($p, rd_deptPrivYn, false); //  부서권한여부
  }
  $c.gus.cfDisableBtn($p, [btn_Create, btn_Update, btn_Delete]);
  scwin.f_SleepObjects();
};

//-------------------------------------------------------------------------
// 프로그램 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  if (ds_program.getRowCount() > 0) {
    // ds_program.undoAll();
    $c.data.undoAll($p, ds_program);
    scwin.f_ContentsDisable();
    scwin.txt_saveType = "0";
    $c.gus.cfDisableBtn($p, [btn_Save, btn_Cancel]);
  } else {
    $c.gus.cfDisableBtn($p, [btn_Save, btn_Cancel, btn_Delete]);
  }
  gr_program.setFocusedCell(0, 0);
};

//-------------------------------------------------------------------------
// 프로그램 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = function () {
  scwin.txt_saveType = "3"; // 수정인경우(1:신규, 2: 수정, 3: 삭제)	

  scwin.f_delRow();
  $c.gus.cfDisableBtn($p, [btn_Create, btn_Update, btn_Delete]);
};

//-------------------------------------------------------------------------
// 프로그램 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  // let row = ds_program.insertRow(); //그리드 맨 끝 행추가
  var rowIndex = ds_program.getTotalRow();
  ds_program.insertRow(rowIndex);
  gr_program.setFocusedCell(rowIndex, 0);
  scwin.txt_rowDelStat = "0";
  ds_program.setCellData(rowIndex, "userFavorApprYn", "1");
  ds_program.setCellData(rowIndex, "privCopyExceptYn", "0");
  ds_program.setCellData(rowIndex, "copCoUseYn", "0");
  ds_program.setCellData(rowIndex, "deptPrivYn", "0");
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_Create, btn_Update, btn_Delete]);
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_delRow = function () {
  let rowIndex = ds_program.getRowPosition();
  ds_program.deleteRow(rowIndex);
  gr_program.setFocusedCell(rowIndex, 0);
  scwin.txt_rowDelStat = "1";
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  ds_program.undoRow(ds_program.getRowPosition());
  scwin.txt_rowDelStat = "2";
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var vStatus = ds_program.getRowStatus(ds_program.getRowPosition());
  vPgmId = ed_pgmId.getValue();
  vPgmNm = ed_pgmNm.getValue();
  msgArr = new Array(2);
  msgArr[0] = "프로그램ID";
  msgArr[1] = "6";
  msgArr2 = new Array(1);
  msgArr2[0] = "거래처번호";
  msgArr3 = new Array(1);
  msgArr3[0] = "사업자등록번호";
  if (vStatus != "D") {
    let ret = await $c.gus.cfValidate($p, [regProgram]);
    if (!ret) {
      return false;
    }

    // 프로그램ID입력이 없는경우
    if (vPgmId == "" || vPgmId.length < 1) {
      var msgArr = new Array(1);
      msgArr[0] = "프로그램ID";
      // $c.win.alert( MSG_CM_ERR_002 , msgArr);
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, msgArr);
      ed_pgmId.focus();
      return false;
    }

    // 프로그램명 입력이 없는경우
    if (vPgmNm == "" || vPgmNm.length < 1) {
      var msgArr = new Array(1);
      msgArr[0] = "프로그램명";
      // $c.win.alert( MSG_CM_ERR_002 , msgArr);
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, msgArr);
      ed_pgmNm.focus();
      return false;
    }

    // 프로그램ID가 유효하지 않은데도 저장하는 경우
    var vPgmIdValChk = scwin.txt_PgmIdValChk;
    // var vPgmIdValChk = 0;
    var vSaveType = scwin.txt_saveType; // 저장타입
    var vRowDelStat = scwin.txt_rowDelStat; //삭제 상태

    if (vStatus == "C") {
      if (vSaveType == "1" && vPgmIdValChk == "") {
        $c.win.alert($p, "프로그램ID 중복확인을 해주시기 바랍니다.");
        ed_pgmId.focus();
        return false;
      } else if (vPgmIdValChk == "1") {
        $c.win.alert($p, "등록가능한 프로그램ID를 입력하셔야 합니다.");
        ed_pgmId.focus();
        return false;
      }
    }
  }
  if (rd_debis.getValue() == "D") {
    if (lc_pgmStsCd.getValue() == "SLP") {
      let ret = await $c.gus.cfValidate($p, [tb_sleep]);
      if (!ret) {
        return false;
      }
    }
  }
  let debis = "";
  if (rd_debis.getValue() == "N") {
    debis = "ncall.";
  }
  let subObj = $p.getSubmission("sbm_save");

  // 저장타입에 따라 저장
  if (vStatus == "C") {
    // 신규등록
    subObj.action = "/" + debis + "cm.bc.comnmgnt.programmgnt.CreateProgramInformationCMD.do";
  } else if (vStatus == "U") {
    // 수정
    if (ds_program.getModifiedIndex().length == false) {
      await $c.win.alert($p, "변경된 사항이 없습니다.");
      return;
    }
    subObj.action = "/" + debis + "cm.bc.comnmgnt.programmgnt.UpdateProgramInformationCMD.do";
  } else if (vStatus == "D") {
    // 삭제
    subObj.action = "/" + debis + "cm.bc.comnmgnt.programmgnt.DeleteProgramInformationCMD.do";
  }
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmResult) {
    scwin.prevRow = ds_program.getRowPosition();
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 미리보기
//-------------------------------------------------------------------------
scwin.f_Preview = async function () {
  var previewURL = ed_pgmScrPath.getValue() + ed_pgmId.getValue();
  if (previewURL == "") {
    await $c.win.alert($p, "프로그램을 선택하세요");
    return;
  }
  previewURL = "/ui" + ed_pgmScrPath.getValue() + ed_pgmId.getValue().split(".")[0] + ".xml";
  var data = {
    className: "view_pop"
  };
  var opts = {
    id: "menuGrpMgntPop",
    popupName: "미리보기",
    modal: true,
    // type : "pageFramePopup",// browserPopup
    type: "browserPopup",
    width: 1500,
    height: 880,
    title: "미리보기",
    className: "shbox pop_contents"
  };
  await $c.win.openPopup($p, previewURL, opts, data);
};

//-------------------------------------------------------------------------
// 프로그램ID 중복확인
//-------------------------------------------------------------------------
scwin.f_openPgmIdDup = async function () {
  var vPgmId = ed_pgmId.getValue().trimAll();
  if (vPgmId == "") {
    var msgArr = new Array(1);
    msgArr[0] = "프로그램ID";
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, msgArr);
    ed_pgmId.focus();
    return false;
  }
  var selectId;
  if (rd_debis.getValue() == "D") {
    selectId = "retrievePgmInfo";
  } else {
    selectId = "retrievePgmInfo_tpro";
  }
  udc_comCode_Grid.setSelectId(selectId);
  await udc_comCode_Grid.cfCommonPopUp(scwin.udc_comCode_gr_PgmId_callBackFunc, vPgmId, '', "F", null, null, null, null, null, null, null, null, null, "T", null, null); //  프로그램정보
};
scwin.udc_comCode_gr_PgmId_callBackFunc = async function (ret) {
  // if (ret[0] != "N/A" && !$c.gus.cfIsNull(ret)) {
  if (ret != 0) {
    var msgClntDupArr = new Array(1);
    msgClntDupArr[0] = "프로그램ID";
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_011, msgClntDupArr);
    scwin.txt_PgmIdValChk = "1";
    ed_pgmId.focus();
  } else {
    await $c.win.alert($p, "등록가능한 프로그램ID 입니다.");
    scwin.txt_PgmIdValChk = "0";
  }
};

//-------------------------------------------------------------------------
// 
//-------------------------------------------------------------------------
scwin.f_SleepObjects = function () {
  if (rd_debis.getValue() == "D") {
    if (lc_pgmStsCd.getValue() == "SLP") {
      $c.gus.cfEnableObjects($p, [tb_sleep]);
    } else {
      $c.gus.cfDisableObjects($p, [tb_sleep]);
    }
  } else {
    $c.gus.cfDisableObjects($p, [tb_sleep]);
  }
};

// LuxCombo 조회조건 선택
scwin.lc_sysCls_onchange = function (info) {
  scwin.txt_sysCls = lc_sysCls.getValue();
};

// LuxCombo 조회조건2 선택
scwin.lc_programLupCond_onchange = function (info) {
  scwin.txt_programLupCond = lc_programLupCond.getValue();
};

// LuxCombo 조회조건3 선택
scwin.lc_pgmStsCd_onselected = function () {
  let row = ds_program.getRowPosition();
  if (rd_debis.getValue() == "D") {
    if (lc_pgmStsCd.getValue() == "DEV" || lc_pgmStsCd.getValue() == "RUN") {
      $c.gus.cfInitObjects($p, tb_sleep);
    } else {
      ds_program.setCellData(row, "sleepPic", ds_program.getCellData(row, "sleepPic"));
      ds_program.setCellData(row, "sleepDt", ds_program.getCellData(row, "sleepDt"));
      ds_program.setCellData(row, "sleepRmk", ds_program.getCellData(row, "sleepRmk"));
    }
  }
};

// 시스템 코드 선택
scwin.lc_sysCd_onchange = function (info) {
  var vSysCd = lc_sysCd.getValue();
  // CO:관리회계, FI:재무회계, FM:자금관리
  if (vSysCd == "CO" || vSysCd == "FI" || vSysCd == "FM") {
    $c.gus.cfEnableObj($p, rd_deptPrivYn, true); //  부서권한여부
  } else {
    $c.gus.cfEnableObj($p, rd_deptPrivYn, false); //  부서권한여부
  }
};

// 프로그램 종류 선택
scwin.lc_pgmKndCd_onchange = function (info) {
  var vPgmKindCd = lc_pgmKndCd.getValue();
  var vSaveType = scwin.txt_saveType;
  if (vPgmKindCd == "3") {
    if (vSaveType == "1" || vSaveType == "2") {
      $c.gus.cfEnableObj($p, lc_repoDocGrpCd, true);
    } else {
      $c.gus.cfEnableObj($p, lc_repoDocGrpCd, false);
    }
  } else {
    // repoDocGrpCd.Index = 0;
    lc_repoDocGrpCd.setSelectedIndex(0);
    $c.gus.cfEnableObj($p, lc_repoDocGrpCd, false);
  }
};
scwin.lc_pgmStsCd_onchange = function (info) {
  if (rd_debis.getValue() == "D") {
    if (scwin.txt_saveType == "1" || scwin.txt_saveType == "2") {
      scwin.f_SleepObjects();
    }
  }
};
scwin.sbm_search_submitdone = function (e) {
  var rowCnt = ds_program.getRowCount();
  spanTotal.setLabel(rowCnt);

  //cfHideDSWaitMsg(gr_program);
  scwin.txt_countRow = rowCnt;
  //조회결과가 0인경우
  if (rowCnt == 0) {
    $c.gus.cfDisableBtn($p, [btn_Update, btn_Save, btn_Cancel, btn_Delete]);
  } else if (rowCnt > 0) {
    $c.gus.cfDisableBtn($p, [btn_Save, btn_Cancel]);
  }
  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  //cfShowTotalRows(totalRows,rowCnt);
  scwin.txt_retrieveYn = "1";
  if (rowCnt == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
    ed_qryCntn.focus();
  }
  ds_program.setRowPosition(scwin.prevRow);
  // $c.gus.cfGoPrevPosition(ds_program, 1);
  gr_program.setFocusedCell(0, 0);
  $c.gus.cfDisableObjects($p, [tb_sleep]);
  //repoDocGrpCd.Enable = "false";
};
scwin.sbm_search_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001);
  ds_program.removeAll();
  scwin.f_Retrieve();
};

// scwin.ds_program_onrowpositionchange = async function (info) {
scwin.ds_program_onbeforerowpositionchange = async function (info) {
  // var vRowPosition = ds_program.RowPosition;
  // var vRowPosition = info.newRowIndex;
  // var vCountRow = scwin.txt_countRow;
  // var vRowStatus = ds_program.getRowStatus(vRowPosition);

  // let oldRow = info.oldRowIndex;
  // let row = info.newRowIndex;
  // let vCurRowStatus = ds_program.getRowStatus(oldrow);

  // if(vCurRowStatus=="C" || vCurRowStatus=="U"){
  //     await $c.win.alert("프로그램 신규등록이나 수정사항을 저장하신 후에 다른 프로그램정보로 이동해주시기 바랍니다.");
  //     gr_program.setFocusedCell(oldRow, 0);
  //     return false;
  // }

  // if(vRowPosition != 0){
  // scwin.txt_pgmId = ds_program.getCellData(vRowPosition,"pgmId");
  // if(vRowPosition>vCountRow){
  //     scwin.f_ContentsEnable();
  // }else{
  //     scwin.f_ContentsDisable();	
  // }

  // var vCountRow = ds_program.getRowCount();
  // var vChgCount = 0;
  // var vChgRow = 0;

  // for(var i=0;i<vCountRow;i++){
  // 	var vCurRowStatus = ds_program.getRowStatus(i);
  //     // 0: Normal, 1: Insert, 2: Delete, 3: Update, 4: Logical
  //     // "dlt_dataList1.getRowStatus(0);
  //     // rowIndex에 해당하는 행의 상태 코드(문자) 반환 (초기상태:R, 갱신:U, 삽입:C, 삭제:D, 삽입 후 삭제:V)
  //     // dlt_dataList1.getRowStatusValue(0);
  //     // rowIndex에 해당하는 행의 상태 코드를 숫자로 반환 (초기상태:0, 갱신:1, 삽입:2, 삭제:3, 삽입 후 삭제:4)"
  // 	if(vCurRowStatus=="C" || vCurRowStatus=="U"){
  // 		vChgCount++;
  // 		vChgRow = i;
  // 	}
  // }

  // if(vChgCount>0 && vRowPosition!=vChgRow){
  //     await $c.win.alert("프로그램 신규등록이나 수정사항을 저장하신 후에 다른 프로그램정보로 이동해주시기 바랍니다.");
  // 	//ds_program.RowPosition = vChgRow;
  //     gr_program.setFocusedCell(vChgRow, 0);
  // 	return false;
  // }

  scwin.f_ContentsDisable();
  var vRowStatus = ds_program.getRowStatus(info.newRowIndex);
  if (vRowStatus == "R") {
    scwin.f_ContentsDisable();
    $c.gus.cfDisableBtn($p, [btn_Cancel, btn_Save]);
  } else if (vRowStatus == "C") {
    scwin.f_ContentsEnable();
    $c.gus.cfDisableBtn($p, [btn_Create, btn_Update]);
  } else if (vRowStatus == "U") {
    scwin.f_ContentsEnable();
    $c.gus.cfDisableBtn($p, [btn_Create, btn_Update]);
  }
};
scwin.btn_search_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1);
  if ($p.getAllParameter().paramData.menuInfo.menuId.indexOf("n") > -1) {
    rd_debis.setSelectedIndex(1);
  } else {
    rd_debis.setSelectedIndex(0);
    lc_pgmStsCdCond.setDisabled(false);
  }
};
scwin.gr_program_oncellindexchange = async function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  let vCurRowStatus = ds_program.getRowStatus(oldRow);
  if (vCurRowStatus == "C" || vCurRowStatus == "U") {
    await $c.win.alert($p, "프로그램 신규등록이나 수정사항을 저장하신 후에 다른 프로그램정보로 이동해주시기 바랍니다.");
    gr_program.setFocusedCell(oldRow, 0);
    return false;
  }
};
scwin.ed_pgmScrPath_onkeydown = function (e) {
  let row = ds_program.getRowPosition();
  ds_program.setCellData(row, "pgmScrPath", ed_pgmScrPath.getValue());
};
scwin.ed_firstPgmrNm_onkeydown = function (e) {
  let row = ds_program.getRowPosition();
  if (!$c.util.isEmpty($p, this.getValue())) {
    ds_program.setCellData(row, "firstPgmrNm", ed_firstPgmrNm.getValue());
  }
};
scwin.ed_firstPgmrNm_onkeyup = function (e) {
  let row = ds_program.getRowPosition();
  if (!$c.util.isEmpty($p, this.getValue())) {
    ds_program.setCellData(row, "firstPgmrNm", ed_firstPgmrNm.getValue());
  }
};
scwin.ed_qryCntn_onkeypress = function (e) {
  if (e.keyCode == 13) {
    scwin.f_Retrieve();
  }
};
scwin.rd_debis_onviewchange = function (info) {
  scwin.init();
  if (rd_debis.getValue() == "D") {
    lc_pgmStsCdCond.setDisabled(false);
  } else {
    lc_pgmStsCdCond.setDisabled(true);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'','ev:onviewchange':'scwin.rd_debis_onviewchange',id:'rd_debis',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:'width:150px;',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DEBIS'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NCALL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'프로그램상태 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_pgmStsCdCond',ref:'',style:'',submenuSize:'auto',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'시스템구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_sysCls',style:'',submenuSize:'auto',ref:'',visibleRowNum:'20','ev:onchange':'scwin.lc_sysCls_onchange'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_programLupCond',style:'',submenuSize:'auto',ref:'','ev:onchange':'scwin.lc_programLupCond_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'프로그램명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'프로그램ID'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_qryCntn',style:'','ev:onkeypress':'scwin.ed_qryCntn_onkeypress'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search_init',style:'',type:'button','ev:onclick':'scwin.btn_search_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'프로그램목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_program',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',id:'udc_program'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_program',id:'gr_program',style:'',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'30',visibleRowNum:'15','ev:oncellindexchange':'scwin.gr_program_oncellindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'프로그램ID',width:'300'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'프로그램명',width:'340'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'pgmId',inputType:'text',style:'',value:'',width:'300',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pgmNm',inputType:'text',style:'',value:'',width:'340',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spanTotal',label:'0',style:'',tagname:'span',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox mt32'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'regProgram',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'프로그램ID',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_program.pgmId',style:'',id:'ed_pgmId',class:'form-control w150',mandatory:'true',title:'프로그램ID',objType:'key'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_pgmId_search',type:'button',class:'btn','ev:onclick':'scwin.f_openPgmIdDup'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중복'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'프로그램명',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_program.pgmNm',style:'',id:'ed_pgmNm',class:'form-control w150',mandatory:'true',title:'프로그램명',objType:'data',refSync:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'즐겨찾기허용',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{ref:'data:ds_program.userFavorApprYn',appearance:'full',style:'',id:'rd_userFavorApprYn',renderType:'radiogroup',rows:'',class:'rdo-grp',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'시스템구분',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',displayMode:'value delim label',editType:'select',id:'lc_sysCd',mandatory:'true',ref:'data:ds_program.sysCd',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'20',emptyItem:'true',title:'시스템구분',selectedData:'false'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'권한복사제외',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:ds_program.privCopyExceptYn',appearance:'full',style:'',id:'rd_privCopyExceptYn',renderType:'radiogroup',rows:'',class:'rdo-grp',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'협력업체사용',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:ds_program.copCoUseYn',appearance:'full',style:'',id:'rd_copCoUseYn',renderType:'radiogroup',rows:'',class:'rdo-grp',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'프로그램상태',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'lc_pgmStsCd',class:'form-control w150',direction:'auto',mandatory:'true',title:'프로그램상태','ev:onselected':'scwin.lc_pgmStsCd_onselected','ev:onchange':'scwin.lc_pgmStsCd_onchange',emptyItem:'true',ref:'data:ds_program.pgmStsCd',visibleRowNum:'5'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'패턴번호',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'lc_scrPatternNo',class:'form-control w150',direction:'auto',mandatory:'true',title:'패턴번호',emptyItem:'true',ref:'data:ds_program.scrPatternNo',visibleRowNum:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'프로그램종류',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'lc_pgmKndCd',class:'form-control w150',direction:'auto',mandatory:'true',title:'프로그램종류',emptyItem:'true',ref:'data:ds_program.pgmKndCd','ev:onviewchange':'scwin.lc_pgmKndCd_onchange',visibleRowNum:'20'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'보고서그룹',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',emptyItem:'true',id:'lc_repoDocGrpCd',mandatory:'true',ref:'data:ds_program.repoDocGrpCd',style:'',submenuSize:'auto',title:'보고서그룹',visibleRowNum:'10'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'최초개발자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_program.firstPgmrNm',style:'',id:'ed_firstPgmrNm',class:'form-control w150',objType:'data',refSync:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'최종개발자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_program.finalModrNm',style:'',id:'ed_finalModrNm',class:'form-control w150',objType:'data',refSync:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'프로그램경로',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_program.pgmScrPath',style:'',id:'ed_pgmScrPath',class:'form-control w300',mandatory:'true',title:'프로그램경로',maxlength:'100',objType:'data',refSync:'true'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'(예: /cm/zz/)',class:''}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_Preview',style:'',id:'btn_preview',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'프로그램PARAM',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_program.pgmParam',style:'',id:'ed_pgmParam',class:'form-control w300',objType:'data',refSync:'true'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'(예: param1=AAA&param2=BBB)',class:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'부서권한적용',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{ref:'data:ds_program.deptPrivYn',appearance:'full',style:'',id:'rd_deptPrivYn',renderType:'radiogroup',rows:'',class:'rdo-grp',cols:'',selectedIndex:'-1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Sleep관리 ',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tb_sleep',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Sleep담당자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_program.sleepPic',style:'',id:'ed_sleepPic',class:'form-control w150',objType:'data',maxlength:'15',refSync:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Sleep일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{ref:'data:ds_program.sleepDt',delimiter:'/',style:'',id:'ed_sleepDt',class:'form-control cal',calendarValueType:'yearMonthDate',objType:'data',mandatory:'true',title:'Sleep일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Sleep사유',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{ref:'data:ds_program.sleepRmk',style:'',id:'ed_sleepRmk',class:'form-control',objType:'data',maxlength:'200'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',style:'',type:'button','ev:onclick':'scwin.f_Create',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',style:'',type:'button','ev:onclick':'scwin.f_Update',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.f_Delete',objType:'ctrlBtn',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px;visibility:hidden;',id:'udc_comCode_Grid'}}]}]}]}]})