/*amd /ui/ds/op/rscconfirm/transrscconfirm/op_101_04_01b.xml 48827 c489ea0b98d52569c253d8227e0daf3807f5bc44b7d0013f3684ea25e147da98 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_cntrMasterSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'arrvlportDt',name:'입항일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_cntrMasterMap'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'arrvlportDtm',name:'입항일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntClsYn',name:'관리구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtm',name:'생성일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fullEmptyClsCd',name:'full/empty',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSizCd',name:'컨테이너size코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrTypCd',name:'컨테이너type코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrStsCd',name:'컨테이너상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portNm',name:'항구코드명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'leaseYn',name:'lease',dataType:'text'}},{T:1,N:'w2:key',A:{id:'term',name:'term',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrWrkShapeNm',name:'운송중상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStpNm',name:'작업단계',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impOdrNo',name:'수입오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impVssl',name:'수입모선',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impPortcnt',name:'수입항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impPort',name:'수입port',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expOdrNo',name:'수출오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expVssl',name:'수출모선',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expPortcnt',name:'수출항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expPort',name:'수출port',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impSealNo',name:'수입searlno',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expSealNo',name:'수출sealno',dataType:'text'}},{T:1,N:'w2:key',A:{id:'currPosCd',name:'현위치코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'currPosNm',name:'현위치코드명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'socYn',name:'SOC여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'destPortCd',name:'목적항구코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'offRtrnClsCd',name:'OFF반입구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'destPortNm',name:'목적항구명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'offRtrnClsNm',name:'OFF반입구분명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvIntendYn',name:'도착예정여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'detentionYn',name:'DETENTION',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portYn',name:'SOC여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'damageYn',name:'DAMAGE',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntrMaster',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impVssl',name:'모선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impPortcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClsYn',name:'관리구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'생성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'full/empty',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너size코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너type코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrStsCd',name:'컨테이너상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'항구코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leaseYn',name:'lease',dataType:'text'}},{T:1,N:'w2:column',A:{id:'term',name:'term',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrWrkShapeNm',name:'운송중상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impOdrNo',name:'수입오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impPort',name:'수입port',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expOdrNo',name:'수출오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expVssl',name:'수출모선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expPortcnt',name:'수출항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expPort',name:'수출port',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impSealNo',name:'수입searlno',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expSealNo',name:'수출sealno',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'현위치코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosNm',name:'현위치코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'socYn',name:'SOC여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'목적항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offRtrnClsCd',name:'OFF반입구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortNm',name:'목적항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offRtrnClsNm',name:'OFF반입구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendYn',name:'도착예정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'detentionYn',name:'DETENTION',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portYn',name:'SOC여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'damageYn',name:'DAMAGE',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveContainerInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cntrMasterSearch", "key":"IN_DS1"}, {"id":"ds_cntrMaster", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cntrMaster","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.rscconfirm.transrscconfirm.SaveContainerInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cntrMasterMap", "key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 전역변수
 */
scwin.hportCd = "";
scwin.hportNm = "";
scwin.hcurrPosCd = "";
scwin.hcurrPosNm = "";
scwin.hlineCd = "";
scwin.hlineNm = "";
scwin.hdestportCd = "";
scwin.hdestportNm = "";
scwin.keepRowIndex = "";
scwin.mgntEditYn = 0;
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP101",
    compID: "lc_cntrSizCd"
  }, {
    grpCd: "OP102",
    compID: "lc_cntrTypCd"
  }, {
    grpCd: "OP524",
    compID: "lc_term"
  }, {
    grpCd: "SD133",
    compID: "lc_offRtrnClsCd"
  }, {
    grpCd: "OP701",
    compID: ""
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.setInit);

  // lc_mgntClsYn.setSelectedIndex(0);
  // lc_fullEmptyClsCd.setSelectedIndex(0);
  // lc_lease.setSelectedIndex(0);

  // $c.gus.cfDisableKeyData();
  // $c.gus.cfDisableAllBtn();
};

/**
 * UDC onload
 */
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableObjects($p, [img_PopUp1, img_PopUp2, img_PopUp3]);
};

/**
 * data onload
 */
scwin.ondataload = function () {
  // 관리구분수정권한부여
  const jsonArr = dlt_commonCodeOP701.getMatchedJSON("cdNm", $c.data.getMemInfo($p, "userId"), true);
  if (jsonArr.length > 0) {
    scwin.mgntEditYn = 1;
  }
  const {
    cntrNo,
    arrvlportDt
  } = $c.data.getParameter($p);
  if (!$c.util.isEmpty($p, cntrNo)) {
    ed_cntrNo.setValue(cntrNo);
    ed_arrvlportDt.setValue(arrvlportDt);
    scwin.f_Retrieve();
  }
};

/**
 * 컴포넌트 초기화
 */
scwin.setInit = function () {
  lc_cntrSizCd.setSelectedIndex(-1);
  lc_cntrTypCd.setSelectedIndex(-1);
  lc_term.setSelectedIndex(-1);
  lc_offRtrnClsCd.setSelectedIndex(-1);
  lc_socYn.setSelectedIndex(-1);
  lc_arvIntendYn.setSelectedIndex(-1);
  lc_detentionYn.setSelectedIndex(-1);
  lc_damageYn.setSelectedIndex(-1);
  lc_portYn.setSelectedIndex(-1);
  grp_right.setDisabled(true);
};

/**
 * 조회
 */
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_retrieve);
};

/**
 * 조회 - 후처리
 */
scwin.sbm_retrieve_submitdone = function (e) {
  grp_right.setDisabled(true);
  $c.gus.cfEnableObj($p, btn_save, false);
  $c.gus.cfEnableObj($p, btn_edit, true);
  ds_cntrMasterMap.setEmptyValue();

  // sort
  ds_cntrMaster.sort("arrvlportDtm", 1);
  if (ds_cntrMaster.getTotalRow() < 1) {
    $c.gus.cfEnableObj($p, btn_edit, false);
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    ed_totCnt.setValue(ds_cntrMaster.getTotalRow());
    let rowIndex = 0;
    if (!$c.util.isEmpty($p, scwin.keepRowIndex)) {
      rowIndex = scwin.keepRowIndex;
      scwin.keepRowIndex = "";
    }
    ds_cntrMasterMap.setJSON(ds_cntrMaster.getRowJSON(rowIndex));
    ds_cntrMasterMap.reform();
    gr_cntrMaster.setFocusedCell(rowIndex, "arrvlportDtm");
  }
};

/**
 * 수정
 */
scwin.f_Update = function () {
  $c.gus.cfDisableKey($p);
  $c.gus.cfEnableObjects($p, [img_PopUp1, img_PopUp2, img_PopUp3, lc_cntrSizCd, lc_cntrTypCd, txt_rmk]); // 수출port,현위치팝업
  $c.gus.cfDisableObjects($p, [img_PopUp_Line, ed_lineCd, txt_lineNm]);

  // 관리구분수정권한부여
  if (scwin.mgntEditYn == 1) {
    $c.gus.cfEnableObj($p, lc_mgntClsYn, true); // 관리구분은 수정가능하게
  } else {
    $c.gus.cfEnableObj($p, lc_mgntClsYn, false); // 관리구분은 수정가능하게
  }

  // 수출입구분
  const {
    impExpClsCd
  } = ds_cntrMaster.getRowJSON(gr_cntrMaster.getFocusedRowIndex());
  if (impExpClsCd == "I") {
    // 수입SEAL-NO 활성화
    $c.gus.cfEnableObj($p, txt_impSealNo, true);
    $c.gus.cfEnableObj($p, txt_expSealNo, false);
  } else {
    // 수출SEAL-NO 활성화
    $c.gus.cfEnableObj($p, txt_expSealNo, true);
    $c.gus.cfEnableObj($p, txt_impSealNo, false);
  }
  $c.gus.cfEnableObj($p, btn_save, true);
  $c.gus.cfEnableObj($p, btn_edit, false);
  scwin.f_enabledComp();
};

/**
 * 저장
 */
scwin.f_Save = function () {
  if (ds_cntrMaster.getTotalRow() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_008, ["컨테이너 마스터정보"]);
    return false;
  }
  if (ds_cntrMasterMap.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["컨테이너 마스터정보"]);
    return false;
  }
  scwin.keepRowIndex = gr_cntrMaster.getFocusedRowIndex();
  $c.sbm.execute($p, sbm_save);
};

/**
 * [저장] - 후처리
 */
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};

/**
 * 수정가능한 컴포넌트 세팅
 */
scwin.f_enabledComp = function () {
  lc_fullEmptyClsCd.setDisabled(false);
  udc_port.setDisabled(false);
  lc_cntrSizCd.setDisabled(false);
  lc_cntrTypCd.setDisabled(false);
  udc_destPort.setDisabled(false);
  lc_lease.setDisabled(false);
  udc_currPos.setDisabled(false);
  lc_term.setDisabled(false);
  lc_socYn.setDisabled(false);
  lc_offRtrnClsCd.setDisabled(false);
  txt_rmk.setDisabled(false);
  lc_arvIntendYn.setDisabled(false);
  lc_detentionYn.setDisabled(false);
  lc_portYn.setDisabled(false);
  lc_damageYn.setDisabled(false);
};

/**
 * popup data
 * 팝업에서 선택안하고 닫을 경우 미리 저장된 값이 있으면 그 값을 세팅하기 위한 값
 */
scwin.keepPopupData = function (rowIndex) {
  scwin.hportCd = ds_cntrMaster.getCellData(rowIndex, "portCd");
  scwin.hportNm = ds_cntrMaster.getCellData(rowIndex, "portNm");
  scwin.hcurrPosCd = ds_cntrMaster.getCellData(rowIndex, "currPosCd");
  scwin.hcurrPosNm = ds_cntrMaster.getCellData(rowIndex, "currPosNm");
  scwin.hlineCd = ds_cntrMaster.getCellData(rowIndex, "lineCd");
  scwin.hlineNm = ds_cntrMaster.getCellData(rowIndex, "lineNm");
  scwin.hdestportCd = ds_cntrMaster.getCellData(rowIndex, "destPortCd");
  scwin.hdestportNm = ds_cntrMaster.getCellData(rowIndex, "destPortNm");
};

/**
 * grid rowindex change
 */
scwin.gr_cntrMaster_onrowindexchange = function (rowIndex, oldRow) {
  if (scwin.bFag) {
    scwin.bFag = false;
    return;
  }
  if (!$c.util.isEmpty($p, ds_cntrMasterMap.getModifiedJSON())) {
    const keepJson = ds_cntrMasterMap.getModifiedJSON();
    $c.win.confirm($p, "변경된 내용이 있습니다.<br>진행 시 변경 자료는 초기화 됩니다.<br>그래도 진행 하시겠습니까?").then(rtn => {
      if (rtn) {
        // row 변경 시 초기화
        $c.gus.cfEnableObj($p, btn_save, false);
        $c.gus.cfEnableObj($p, btn_edit, true);
        grp_right.setDisabled(true);

        // detail 내용 반영
        ds_cntrMasterMap.setJSON(ds_cntrMaster.getRowJSON(rowIndex));
        ds_cntrMasterMap.reform();
        scwin.keepPopupData(rowIndex);
      } else {
        scwin.bFag = true;
        ds_cntrMasterMap.setJSON(keepJson);
        gr_cntrMaster.setFocusedCell(oldRow, "arrvlportDtm");
        return;
      }
    });
  }

  // row 변경 시 초기화
  $c.gus.cfEnableObj($p, btn_save, false);
  $c.gus.cfEnableObj($p, btn_edit, true);
  grp_right.setDisabled(true);

  // detail 내용 반영
  ds_cntrMasterMap.setJSON(ds_cntrMaster.getRowJSON(rowIndex));
  ds_cntrMasterMap.reform();
  scwin.keepPopupData(rowIndex);
};

/**
 * excel download
 */
scwin.excelDown = function () {
  let fileName = "컨테이너 MASTER조회";
  $c.data.downloadGridViewExcel($p, gr_cntrMaster, {
    fileName: fileName + ".xlsx",
    sheetName: fileName
  });
};

/**
 * [조회]
 */
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

/**
 * 조회조건 초기화
 */
scwin.btn_fieldClear_onclick = function (e) {
  ed_arrvlportDt.setValue("");
  ed_cntrNo.setValue("");
};

/**
 * [수정]
 */
scwin.btn_edit_onclick = function (e) {
  scwin.f_Update();
};

/**
 * [저장]
 */
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};

/**
 * 공통팝업 호출 전 체크
 */
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  }
  // inObj가 코드명 필드일 경우 팝업
  else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

/**
 * 공통팝업 호출
 */
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  if (disGubun == 1 && ed_portCd.getValue() == "" && txt_portNm.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["항구코드/항구명"]);
    return false;
  }
  if (disGubun == 3 && ed_lineCd.getValue() == "" && txt_lineNm.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["Line코드/Line명"]);
    return false;
  }
  if (disGubun == 4 && ed_destPortCd.getValue() == "" && txt_destPortNm.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["목적항구코드/목적항구명"]);
    return false;
  }
  switch (disGubun) {
    case 1:
      // 수출항구
      udc_port.setSelectId("retrievePortInfo");
      udc_port.cfCommonPopUp(scwin.udc_port_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "수출항구코드, 수출항구명" // Title순서	
      , "110,220" // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "수출항구조회,수출항구코드, 수출항구명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 현위치 
      udc_currPos.setSelectId("retrieveCntrWorkPlace");
      udc_currPos.cfCommonPopUp(scwin.udc_currPos_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "현위치코드, 현위치명" // Title순서	
      , "110,220" // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "현위치조회, 현위치코드, 현위치명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // Line
      udc_line.setSelectId("retrieveLineInfoList");
      udc_line.cfCommonPopUp(scwin.udc_line_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "LINE코드,LINE명" // Title순서	
      , "110,220" // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // 목적항구
      udc_destPort.setSelectId("retrievePortInfo");
      udc_destPort.cfCommonPopUp(scwin.udc_destPort_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "목적항구코드, 목적항구명" // Title순서	
      , "110,220" // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "목적항구조회, 목적항구코드, 목적항구명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

/**
 * 공통팝업 호출 - callback 수출항구
 */
scwin.udc_port_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_portCd, txt_portNm);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ds_cntrMasterMap.set("portCd", scwin.hportCd);
      ds_cntrMasterMap.set("portNm", scwin.hportNm);
    } else {
      scwin.hportCd = ed_portCd.getValue();
      scwin.hportNm = txt_portNm.getValue();
    }
  } else {
    ed_portCd.setValue("");
    txt_portNm.setValue("");
  }
};

/**
 * 공통팝업 호출 - callback 현위치
 */
scwin.udc_currPos_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_currPosCd, txt_currPosNm);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ds_cntrMasterMap.set("currPosCd", scwin.hcurrPosCd);
      ds_cntrMasterMap.set("currPosNm", scwin.hcurrPosNm);
    } else {
      scwin.hcurrPosCd = ed_currPosCd.getValue();
      scwin.hcurrPosNm = txt_currPosNm.getValue();
    }
  } else {
    ed_currPosCd.setValue("");
    txt_currPosNm.setValue("");
  }
};

/**
 * 공통팝업 호출 - callback LINE
 */
scwin.udc_line_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, txt_lineNm);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ds_cntrMaster.set("lineCd", scwin.hlineCd);
      ds_cntrMaster.set("lineNm", scwin.hlineNm);
    } else {
      scwin.hlineCd = ed_lineCd.getValue();
      scwin.hlineNm = txt_lineNm.getValue();
    }
  } else {
    ed_lineCd.setValue("");
    txt_lineNm.setValue("");
  }
};

/**
 * 공통팝업 호출 - callback 목적항구
 */
scwin.udc_destPort_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_destPortCd, txt_destPortNm);
};
scwin.udc_line_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, txt_lineNm, 3, true);
};
scwin.udc_port_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_portCd, txt_portNm, 1, true);
};
scwin.udc_destPort_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_destPortCd, txt_destPortNm, 4, true);
};
scwin.udc_currPos_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_currPosCd, txt_currPosNm, 2, true);
};
scwin.udc_port_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_portNm, ed_portCd, 1, false);
};
scwin.udc_destPort_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_destPortNm, ed_destPortCd, 4, false);
};
scwin.udc_currPos_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_currPosNm, ed_currPosCd, 2, false);
};
scwin.udc_line_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_lineCd.getValue(), txt_lineNm.getValue(), 'F', 'T');
};
scwin.udc_port_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_portCd.getValue(), txt_portNm.getValue(), 'F', 'T');
};
scwin.udc_destPort_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_destPortCd.getValue(), txt_destPortNm.getValue(), 'F', 'T');
};
scwin.udc_currPos_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_currPosCd.getValue(), txt_currPosNm.getValue(), 'F', 'T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox w-auto',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입항일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_arrvlportDt',style:'',ref:'data:ds_cntrMasterSearch.arrvlportDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'컨테이너번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_cntrNo',placeholder:'',style:'',allowChar:'0-9|a-z|A-Z',maxlength:'11',validateOnInput:'true',ref:'data:ds_cntrMasterSearch.cntrNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'컨테이너 기본정보 수정',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridUpYn:'N',id:'',gridID:'gr_cntrMaster',gridDownFn:'scwin.excelDown'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-wrap '},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'ds_cntrMaster',style:'',autoFit:'allColumn',id:'gr_cntrMaster',class:'wq_gvw',visibleRowNum:'15',visibleRowNumFix:'true',focusMode:'row','ev:oncellclick':'scwin.gr_cntrMaster_oncellclick',readOnly:'true','ev:onrowindexchange':'scwin.gr_cntrMaster_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column1',value:'입항일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column17',value:'모선',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'항차',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'arrvlportDtm',value:'',displayMode:'label',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'impVssl',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'impPortcnt',value:'',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'ed_totCnt',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'grp_right',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox mt32'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'LINE',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_lineCd',nameId:'txt_lineNm',btnId:'img_PopUp_Line',id:'udc_line',refDataCollection:'ds_cntrMasterMap',code:'lineCd',name:'lineNm',mandatoryCode:'true',mandatoryName:'true','ev:onblurCodeEvent':'scwin.udc_line_onblurCodeEvent','ev:onclickEvent':'scwin.udc_line_onclickEvent',allowCharCode:'0-9|a-z|A-Z'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'관리구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_mgntClsYn',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_cntrMasterMap.mgntClsYn'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'입항일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'ed_arrvlportDtm',placeholder:'',style:'',displayFormat:'####/##/## ##:##',ref:'data:ds_cntrMasterMap.arrvlportDtm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수출입구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_impExpClsCd',placeholder:'',style:'',ref:'data:ds_cntrMasterMap.impExpClsCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'생성일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_regDtm',placeholder:'',style:'',ref:'data:ds_cntrMasterMap.regDtm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'Empty/Full',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_fullEmptyClsCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_cntrMasterMap.fullEmptyClsCd',emptyIndex:'-1',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'EMPTY'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'FULL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출지정Port',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_portCd',nameId:'txt_portNm',btnId:'img_PopUp1',id:'udc_port',refDataCollection:'ds_cntrMasterMap',code:'portCd',name:'portNm','ev:onblurCodeEvent':'scwin.udc_port_onblurCodeEvent','ev:onclickEvent':'scwin.udc_port_onclickEvent',allowCharCode:'0-9|a-z|A-Z','ev:onviewchangeNameEvent':'scwin.udc_port_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'SIZE/TYPE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'lc_cntrSizCd',class:' w100',emptyItem:'true',emptyIndex:'-1',ref:'data:ds_cntrMasterMap.cntrSizCd'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'lc_cntrTypCd',class:' w100',emptyItem:'true',emptyIndex:'-1',ref:'data:ds_cntrMasterMap.cntrTypCd'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발생근거',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_OdrNo',placeholder:'',style:'',ref:'data:ds_cntrMasterMap.odrNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소멸근거',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_expOdrNo',placeholder:'',style:'',ref:'data:ds_cntrMasterMap.expOdrNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'목적항구',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_destPortCd',nameId:'txt_destPortNm',id:'udc_destPort',btnId:'img_PopUp2',refDataCollection:'ds_cntrMasterMap',code:'destPortCd',name:'destPortNm','ev:onblurCodeEvent':'scwin.udc_destPort_onblurCodeEvent','ev:onclickEvent':'scwin.udc_destPort_onclickEvent',allowCharCode:'0-9|a-z|A-Z','ev:onviewchangeNameEvent':'scwin.udc_destPort_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LEASE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' col5',editType:'select',id:'lc_lease',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_cntrMasterMap.leaseYn'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'없음'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SOC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'현위치',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_currPosCd',nameId:'txt_currPosNm',id:'udc_currPos',btnId:'img_PopUp3',refDataCollection:'ds_cntrMasterMap',code:'currPosCd',name:'currPosNm','ev:onblurCodeEvent':'scwin.udc_currPos_onblurCodeEvent','ev:onclickEvent':'scwin.udc_currPos_onclickEvent',allowCharCode:'0-9|a-z|A-Z','ev:onviewchangeNameEvent':'scwin.udc_currPos_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TERM',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_term',search:'start',style:'',submenuSize:'auto',emptyItem:'true',ref:'data:ds_cntrMasterMap.term'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SOC여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_socYn',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_cntrMasterMap.socYn',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'OFF반납구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_offRtrnClsCd',search:'start',style:'',submenuSize:'auto',emptyItem:'true',ref:'data:ds_cntrMasterMap.offRtrnClsCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송중상태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_cntrWrkShapeCd',placeholder:'',style:'',ref:'data:ds_cntrMasterMap.cntrWrkShapeNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업단계',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_wrkStpNm',placeholder:'',style:'',ref:'data:ds_cntrMasterMap.wrkStpNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_rmk',placeholder:'',style:'',ref:'data:ds_cntrMasterMap.rmk'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착예정여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_arvIntendYn',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_cntrMasterMap.arvIntendYn',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DETENTION',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_detentionYn',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_cntrMasterMap.detentionYn',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'제어'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'제어안함'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',id:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PORT여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',id:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_portYn',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_cntrMasterMap.portYn',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',id:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DAMAGE여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',id:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_damageYn',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_cntrMasterMap.damageYn',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수입모선',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' ',id:'expr_impVssl',placeholder:'',style:'',ref:'data:ds_cntrMasterMap.impVssl'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수입항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_impPortcnt',placeholder:'',style:'',ref:'data:ds_cntrMasterMap.impPortcnt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수입SEAL-NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'txt_impSealNo',placeholder:'',style:'',ref:'data:ds_cntrMasterMap.impSealNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수입PORT',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_impPort',placeholder:'',style:'',ref:'data:ds_cntrMasterMap.impPort'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출모선',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' ',id:'expr_expVssl',placeholder:'',style:'',ref:'data:ds_cntrMasterMap.expVssl'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_expPortcnt',placeholder:'',style:'',ref:'data:ds_cntrMasterMap.expPortcnt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출SEAL-NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'txt_expSealNo',placeholder:'',style:'',ref:'data:ds_cntrMasterMap.expSealNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출PORT',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_expPort',placeholder:'',style:'',ref:'data:ds_cntrMasterMap.expPort'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_edit',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_edit_onclick',disabled:'true'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',disabled:'true'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})