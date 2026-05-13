/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_02_29b.xml 42111 57d1cec286b27ebcfe8d3c1b39f71418313ba13ef967703f48b50348b3ea7516 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'반출입예정 stdt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'반출입예정 enddt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutClsCd',name:'반출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'라인',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSizCd',name:'사이즈',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrTypCd',name:'타입',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsCd',name:'자가구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'statusCls',name:'상태구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclIdCardNo2',name:'차량ID카드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieve',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclIdCardNo',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nrm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransClntNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrRtrnDt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutCls',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onoffCntlYn',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onoffCntlRsn',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onReqNo',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutIntendDt',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutIntendNo',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransClntNo',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsNm',name:'name42',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cntlInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveLoadingUnloadingInfo',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveLoadingUnloadingControlPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_srchCond","key":"IN_DS1"},{"id":"ds_retrieve","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieve","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveLoadingUnloadingInfo',action:'/ds.op.wrkrslts.cywrkrslts.SaveLoadingUnloadingControlPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_retrieve","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cyAutoBatch',action:'/ds.op.wrkrslts.cywrkrslts.ExcuteProcessCyAutomationCarryInAndCarrayOutCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_srchCond","key":"IN_DS1"},{"id":"ds_retrieve","key":"OUT_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteLoadingUnloadingInfo',action:'/ds.op.wrkrslts.cywrkrslts.DeleteLoadingUnloadingControlPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_retrieve","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_cntlInfo',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_cntlInfo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = function () {};

/**
 * @event 
 * @name onUdcCompleted 
 * @description UDC 완료
 */
scwin.onUdcCompleted = function () {
  const param = [{
    compID: "acb_selfClsCd",
    method: "getCodeList",
    param1: "SD114",
    param2: 1,
    param3: DsConstants.ODR_CNTR,
    outputFields: ["CD", "CD_NM"]
  }, {
    compID: "acb_selfClsCd",
    method: "getCodeList",
    param1: "SD114",
    param2: 1,
    param3: DsConstants.ODR_ALL,
    outputFields: ["CD", "CD_NM"]
  }];
  $c.data.setDsCommonUtil($p, param, () => {
    acb_selfClsCd.addItem('전체', '', '', 0);
    acb_selfClsCd.setSelectedIndex(0);
  });
  const codeOptions = [{
    grpCd: "OP197",
    compID: "acb_crryInOutCd"
  }, {
    grpCd: "SD060",
    compID: "acb_impExpCls"
  }];
  $c.data.setCommonCode($p, codeOptions, () => {
    acb_crryInOutCd.addItem('전체', '', '', 0);
    acb_crryInOutCd.setSelectedIndex(0);
    acb_impExpCls.addItem('전체', '', '', 0);
    acb_impExpCls.setSelectedIndex(0);
  });
};

/**
 * @event 
 * @name ondataload 
 * @description 코드 완료
 */
scwin.ondataload = function () {
  scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  scwin.strFromDate = $c.date.getServerDateTime($p, 'yyyyMMdd');
  const loginDTO = $c.data.getMemInfo($p);
  scwin.lobranCd = loginDTO.lobranCd;
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  ed_srchFromDate.setValue($c.date.addDate($p, scwin.strFromDate, -3)); //3일전 일자로 세팅
  ed_srchToDate.setValue(scwin.strFromDate);
  let wrkPlsetArray = [];
  switch (scwin.lobranCd) {
    case '4AA':
      //인천지사
      wrkPlsetArray = ["4C01", "인천CY"];
      break;
    case '5AA':
      //전남지사
      wrkPlsetArray = ["5C08", "광주CY"];
      break;
    default:
      //경기지사
      wrkPlsetArray = ["4C02", "의왕CY"];
      break;
  }
  ;
  ed_wrkPlCd.setValue(wrkPlsetArray[0]);
  txt_wrkPlNm.setValue(wrkPlsetArray[1]);
  dma_srchCond.set("wrkPlCd", ed_wrkPlCd.getValue());
  scwin.f_setCntlInfo(); //제어사유 lux_combo
};

/**
 * @method 
 * @name f_Retrieve
 * @description 조회
 */
scwin.f_Retrieve = async function () {
  const validFromDate = await $c.gus.cfValidate($p, ed_srchFromDate);
  const validToDate = await $c.gus.cfValidate($p, ed_srchToDate);
  const validSrchCond = await $c.gus.cfValidate($p, [tb_srchCond]);
  if (!validFromDate || !validToDate || !validSrchCond) return;
  if (!$c.gus.cfIsAfterDate($p, ed_srchFromDate.getValue(), ed_srchToDate.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_srchFromDate.focus();
    return;
  }
  ;
  if ($c.gus.cfIsNull($p, ed_srchFromDate.getValue()) && $c.gus.cfIsNull($p, ed_srchToDate.getValue()) && $c.gus.cfIsNull($p, ed_odrNo.getValue())) {
    $c.win.alert($p, "반출입 예정일이나 오더번호를 입력 후 조회 하세요.");
    return;
  }
  ;
  await scwin.submitExcute(sbm_retrieveLoadingUnloadingInfo);
};

/**
 * @method 
 * @name f_openCommonPopUp 
 * @description 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
 * @param {number} disGubun
 * @param {string} pCode
 * @param {string} pName
 * @param {string} pClose
 * @param {string} pAllSearch
 */
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let comCodeComp, codeNameArray, selectedId;
  let pDispCnt = null,
    pTitle = null,
    pWidth = null,
    pHidden = null,
    pWhere = null,
    pW = null,
    pH = null,
    pTop = null,
    pLeft = null,
    pExistTF = null,
    pWtitleSearch = null,
    pNoDataCloseTF = null;
  switch (disGubun) {
    case 5:
      //Line
      comCodeComp = udc_line;
      selectedId = 'retrieveLineInfo';
      codeNameArray = [ed_lineCd, txt_lineNm];
      break;
    case 6:
      //작업장
      comCodeComp = udc_wrkPl;
      selectedId = 'retriveGateWrkPlCd';
      codeNameArray = [ed_wrkPlCd, txt_wrkPlNm];
      pWtitleSearch = "작업장,작업장코드,작업장명";
      break;
    default:
      break;
  }
  ;
  comCodeComp.setSelectId(selectedId);
  comCodeComp.cfCommonPopUp(rtnList => {
    $c.gus.cfSetReturnValue($p, rtnList, codeNameArray[0], codeNameArray[1]);
  }, pCode.trim(), pName, pClose, pDispCnt, pTitle, pWidth, pHidden, pWhere, pW, pH, pTop, pLeft, pExistTF, pAllSearch, pWtitleSearch, pNoDataCloseTF);
};

/**
 * @method 
 * @name f_openCommonPopUp 
 * @description 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 * @param {object} inObj
 * @param {object} pairObj
 * @param {number} disGubun
 * @param {string} isCode
 */
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

/**
 * @method 
 * @name f_ResultsExcel 
 * @description 팝엑셀파일로 저장
 */
scwin.f_ResultsExcel = function () {
  let excelName = '상하차 제어 현황';
  let options = {
    sheetName: excelName,
    fileName: excelName + ".xlsx"
  };
  $c.data.downloadGridViewExcel($p, gr_retrieve, options);
};

/**
 * @method 
 * @name f_ErrorCode 
 * @description 제어사유 등록
 */
scwin.f_ErrorCode = async function () {
  let data = ed_wrkPlCd.getValue();
  let options = {
    type: 'browserPopup',
    width: '450px',
    height: '410px'
  };

  // TODO - op_301_02_29p 미존재
  let url = 'ui/ds/op/wrkrslts/cywrkrslts/op_301_02_29p.xml';
  const result = await $c.win.openPopup($p, url, options, data);
  if (result == "Y") scwin.f_setCntlInfo();
};

/**
 * @method 
 * @name f_allApply 
 * @description
 */
scwin.f_allApply = function () {
  scwin.f_cntlCheck(1, ed_cntlInfoRsn.getValue());
};

/**
 * @method 
 * @name f_allClear 
 * @description
 */
scwin.f_allClear = function () {
  scwin.f_cntlCheck(0, "");
};

/**
 * @method 
 * @name f_allApply 
 * @description
 * @param {number} cntlYn
 * @param {string} cntlRsn
 */
scwin.f_cntlCheck = function (cntlYn, cntlRsn) {
  let chkCnt = 0;
  let rowCnt = ds_retrieve.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    if (ds_retrieve.getCellData(i, "chk") == 1) {
      ds_retrieve.setCellData(i, "onoffCntlYn", cntlYn);
      ds_retrieve.setCellData(i, "onoffCntlRsn", cntlRsn);
      chkCnt++;
    }
    ;
  }
  ;
  if (chkCnt == 0) {
    $c.win.alert($p, "check된 내역이 없습니다");
    return false;
  }
  ;
};

/**
 * @method 
 * @name f_save 
 * @description
 */
scwin.f_save = async function () {
  //저장하시겠습니까?
  const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!retConfirm) return;
  if (ds_retrieve.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["상하차 제어 현황"]); //@은(는) 변경된 사항이 없습니다.
    return;
  }
  ;
  await scwin.submitExcute(sbm_saveLoadingUnloadingInfo);
};

/**
 * @method 
 * @name f_setCntlInfo 
 * @description 제어사유 lux_combo
 */
scwin.f_setCntlInfo = async function () {
  sbm_cntlInfo.action = "/cm.zz.RetrieveCommonPopupCMD.do?" + "sysCd=CommonEBC&" + "queryId=retrieveControlContents&" + "param1=" + ed_wrkPlCd.getValue();
  await scwin.submitExcute(sbm_cntlInfo);
};

/**
 * @method 
 * @name f_cyAutoBatch 
 * @description 
 */
scwin.f_cyAutoBatch = async function () {
  const retConfirm = await $c.win.confirm($p, "[CY자동화]배치를 돌리겠습니까?");
  if (!retConfirm) return;
  await scwin.submitExcute(sbm_cyAutoBatch);
};

/**
 * @method 
 * @name f_delete 
 * @description 상하차 제어 현황 삭제
 */
scwin.f_delete = async function () {
  let checkList = new Array();
  let rowCnt = ds_retrieve.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    if (ds_retrieve.getCellData(i, "chk") == 1) {
      checkList.push(i);
    }
    ;
  }
  ;
  if (checkList.length == 0) {
    $c.win.alert($p, "check된 내역이 없습니다");
    return false;
  }
  ;
  const msgConfirm = "상하차 예정정보 " + checkList.length + " 건을 삭제 하시겠습니까?";
  const retConfirm = await $c.win.confirm($p, msgConfirm);
  if (!retConfirm) return;
  if (await scwin.f_deleteValidationCheck(checkList)) {
    await scwin.submitExcute(sbm_deleteLoadingUnloadingInfo);
  }
  ;
};

/**
 * @method 
 * @name f_deleteValidationCheck 
 * @description 예정, 자가, 반출입 날짜 확인
 * @return boolean
 */
scwin.f_deleteValidationCheck = async function (checkList) {
  for (let i = 0; i < checkList.length; i++) {
    let status = ds_retrieve.getCellData(checkList[i], "status");
    let selfClsNm = ds_retrieve.getCellData(checkList[i], "selfClsNm");
    let crryinoutIntendDt = ds_retrieve.getCellData(checkList[i], "crryinoutIntendDt");
    let crryinoutIntendNo = ds_retrieve.getCellData(checkList[i], "crryinoutIntendNo");

    /* 상태 '예정'인지 체크
    삭제 확인 코드가 있긴하지만, gr_retrieve에서 status가 'S'일때만 그리드 체크가 가능함 */
    if ("S" != status) {
      await $c.win.alert($p, "예정 상태의 열만 삭제할 수 있습니다.\n" + "예정번호 : " + crryinoutIntendNo);
      return false;
    }

    /* 자가구분 '자가'인지 체크 */
    if ("자가" != selfClsNm) {
      await $c.win.alert($p, "자가 차량만 삭제할 수 있습니다.\n" + "예정번호 : " + crryinoutIntendNo);
      return false;
    }
    ;

    /* 반출입예정일이 오늘 이전인지 체크 */
    if (!$c.gus.cfIsAfterDate($p, crryinoutIntendDt, scwin.strFromDate)) {
      await $c.win.alert($p, "반출입 예정일자가 오늘 이전인 예정정보만 삭제할 수 있습니다.\n" + "예정번호 : " + crryinoutIntendNo);
      return false;
    }
    ;
  }
  ;
  return true;
};

/**
 * @method 
 * @name upperFlag 
 * @description 소문자 입력 시 대문자로 변경
 */
scwin.upperFlag = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    if (e.responseJSON.resultDataSet[0].Code == -1) return;
    await scwin.submitdone(e);
  }
  ;
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    // 조회 TR
    case sbm_retrieveLoadingUnloadingInfo:
      let rowCnt = ds_retrieve.getRowCount();
      totalRows.setValue(rowCnt);
      if (rowCnt == 0) $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
      break;

    // 저장 TR
    case sbm_saveLoadingUnloadingInfo:
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
      scwin.f_Retrieve();
      break;

    // 제어항목 TR
    case sbm_cntlInfo:
      ds_cntlInfo.insertRow(0);
      ds_cntlInfo.setCellData(0, "col1", "");
      ds_cntlInfo.setCellData(0, "col2", " === 선 택 ===");
      acb_cntlInfo.setSelectedIndex(0);
      scwin.acb_cntlInfo_onchange();
      break;

    // 삭제 TR
    case sbm_deleteLoadingUnloadingInfo:
      await $c.win.alert($p, "상하차 예정정보를 삭제했습니다.");
      scwin.f_Retrieve();
      break;
    default:
      break;
  }
  ;
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name acb_cntlInfo_onchange 
 * @description 제어사유 선택 항목을 변경할 경우 발생.
 * @param {object} info
 * @param {String} info.oldValue
 * @param {String} info.newValue
 */
scwin.acb_cntlInfo_onchange = function (info) {
  if (acb_cntlInfo.getSelectedIndex() == 0) {
    ed_cntlInfoRsn.setValue("");
  } else {
    ed_cntlInfoRsn.setValue(acb_cntlInfo.getText(true));
  }
  ;
};

/**
 * @event 
 * @name gr_retrieve_oncellclick 
 * @description 셀이 클릭된 경우 발생
 * @asis for=gr_retrieve event=OnClick(Row,Colid)
 * @asis for=ds_retrieve event=OnRowPosChanged(row)
 */
scwin.gr_retrieve_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "chk") {
    const rowData = ds_retrieve.getRowJSON(rowIndex);
    const readOnly = gr_retrieve.getColumnReadOnly(columnId);
    let nextVal = '';
    if (readOnly == '') {
      nextVal = rowData.status == "S" && rowData.chk == 1 ? 1 : 0;
    } else if (readOnly) {
      nextVal = rowData.status != "S" ? 0 : rowData.chk == 1 ? 0 : 1;
    }
    ;
    ds_retrieve.setCellData(rowIndex, "chk", nextVal);
  }
  ;

  // @todo 순차 문제로 인해 OnRowPosChanged 위치 이동
  if (ds_retrieve.getCellData(rowIndex, "status") == "S") {
    gr_retrieve.setColumnReadOnly('chk', false);
  } else {
    gr_retrieve.setColumnReadOnly('chk', true);
  }
};

/**
 * @event 
 * @name gr_retrieve_oncellclick 
 * @description 헤더가 클릭된 경우 발생
 * @param {string} headerId
 */
scwin.gr_retrieve_onheaderclick = function (headerId) {
  if (headerId == "chkHeader") {
    let rowCnt = ds_retrieve.getRowCount();
    let headerVal = gr_retrieve.getHeaderValue(headerId);
    let rowData;
    for (let i = 0; i < rowCnt; i++) {
      rowData = ds_retrieve.getRowJSON(i);
      if (rowData.status == "S") {
        ds_retrieve.setCellData(i, colid, headerVal ? 1 : 0);
      }
      ;
    }
    ;
  }
  ;
};

/**
 * @event 
 * @name udc_line_onblurCodeEvent 
 * @description Line code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_line_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, txt_lineNm, 5, true);
};

/**
 * @event 
 * @name udc_line_onviewchangeNameEvent 
 * @description Line name 컴포넌트의 value가 변경되었을 때 발생한다.
 */
scwin.udc_line_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_lineNm, ed_lineCd, 5, false);
};

/**
 * @event 
 * @name udc_line_onclickEvent 
 * @description Line 검색버튼이 클릭 되었을 때 발생한다.
 */
scwin.udc_line_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_lineCd.getValue(), txt_lineNm.getValue(), 'T', 'F');
};

/**
 * @event 
 * @name udc_wrkPl_onblurCodeEvent 
 * @description 작업장 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_wrkPl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, txt_wrkPlNm, 6, true);
  scwin.f_setCntlInfo();
};

/**
 * @event 
 * @name udc_wrkPl_onviewchangeNameEvent 
 * @description 작업장 name 컴포넌트의 value가 변경되었을 때 발생한다.
 */
scwin.udc_wrkPl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_wrkPlNm, ed_wrkPlCd, 6, false);
};

/**
 * @event 
 * @name udc_wrkPl_onclickEvent 
 * @description 작업장 검색버튼이 클릭 되었을 때 발생한다.
 */
scwin.udc_wrkPl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_wrkPlCd.getValue(), txt_wrkPlNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name btn_fieldClear_onclick 
 * @description 조회조건 초기화버튼이 클릭 되었을 때 발생한다.
 */
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_srchCond, [ed_wrkPlCd, txt_wrkPlNm, ed_srchFromDate, ed_srchToDate]);
};

/**
 * @event 
 * @name btn_fieldClear_onclick
 * @description 조회버튼이 클릭 되었을 때 발생한다.
 */
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve('1');
};

/**
 * @method 
 * @name gridFormat
 * @description 그리드 customFormatter
 */
scwin.gridFormat = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  let rowData = $p.getComponentById(this.getDataList()).getRowJSON(rowIndex);
  switch (colID) {
    case "crryinoutClsCd":
      if (data == 'I') return '반입';else return '반출';
    case "blNo":
      if (data == null) return rowData.bookingNo;else return data;
    case "crryoutCls":
      if (rowData.crryinoutClsCd == 'I') return data;else return '';
    case "onoffCntlYn":
      if (data == '1') return '제어';else return '';
    default:
      break;
  }
  ;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_wrkPlCd',nameId:'txt_wrkPlNm',btnId:'img_srchLineCd',objTypeName:'data',mandatoryCode:'true',id:'udc_wrkPl',UpperFlagCode:'1',maxlengthCode:'5','ev:onclickEvent':'scwin.udc_wrkPl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_wrkPl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_wrkPl_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9',validTitle:'작업장',refDataCollection:'dma_srchCond',code:'wrkPlCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반출입예정일',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_srchDate',refDataMap:'dma_srchCond',refEdDt:'endDt',refStDt:'stDt',style:'',edFromId:'ed_srchFromDate',edToId:'ed_srchToDate',titleFrom:'상하차제어 조회 시작일자',mandatoryFrom:'false',mandatoryTo:'false',titleTo:'상하차제어 조회 종료일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:'width:150px;',maxlength:'11',allowChar:'a-zA-Z 0-9',objType:'data','ev:onkeyup':'scwin.upperFlag',ref:'data:dma_srchCond.cntrNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반출입구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_crryInOutCd',search:'start',style:'width:100px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_srchCond.crryinoutClsCd'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:230px;',maxlength:'16',allowChar:'a-zA-Z 0-9','ev:onkeyup':'scwin.upperFlag',ref:'data:dma_srchCond.odrNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lineCd',nameId:'txt_lineNm',btnId:'img_srchLineCd',id:'udc_line','ev:onblurCodeEvent':'scwin.udc_line_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_line_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_line_onclickEvent',maxlengthCode:'4',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',objTypeName:'data',refDataCollection:'dma_srchCond',code:'lineCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_impExpCls',search:'start',style:'width:150px;',submenuSize:'auto',displayMode:'label',ref:'data:dma_srchCond.impExpClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SIZE/TYPE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:100px;',id:'acb_siz',class:'',allOption:'',chooseOption:'',ref:'data:dma_srchCond.cntrSizCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'20'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'40'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'40'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'45'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'45'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:100px;',id:'acb_typ',class:'',visibleRowNum:'11',ref:'data:dma_srchCond.cntrTypCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'FR'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'FR'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'HC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'HC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'OT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'OT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'RF'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RF'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'RH'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RH'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'TK'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TK'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'PF'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PF'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'JB'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'JB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ET'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ET'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_selfClsCd',search:'start',style:'width:230px;',submenuSize:'auto',ref:'data:dma_srchCond.selfClsCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_status',search:'start',style:'width:110px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_srchCond.statusCls',sortMethod:'ascending',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'대기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'W'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량ID카드',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vehclIdCardNo',placeholder:'',style:'width:150px;',maxlength:'11',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.upperFlag',objType:'data',ref:'data:dma_srchCond.vehclIdCardNo2'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상하차 제어 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'f_ResultsExcel',gridID:'gr_retrieve',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieve',id:'gr_retrieve',style:'',visibleRowNum:'13',visibleRowNumFix:'true',fixedColumn:'1','ev:oncellclick':'scwin.gr_retrieve_oncellclick','ev:onheaderclick':'scwin.gr_retrieve_onheaderclick','ev:onrowindexchange':'scwin.gr_retrieve_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chkHeader',inputType:'checkbox',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'I/O',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'상태',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'오더번호',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'차량<br/>ID카드',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'LINE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'컨테이너번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'규격',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'BL/Booking',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'자가업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'반납기한',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column47',value:'반출<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',value:'제어<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'제어사유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'자가구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',value:'수출입구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'컨테이너SEQ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'상차요청번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'반출입예정일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'예정번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crryinoutClsCd',inputType:'text',width:'70',readOnly:'true',customFormatter:'scwin.gridFormat',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'status',inputType:'select',width:'70',readOnly:'true',textAlign:'center'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'대기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'W'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'140',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclIdCardNo',inputType:'text',width:'80',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',width:'70',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'120',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'nrm',inputType:'text',width:'70',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',width:'120',textAlign:'left',readOnly:'true',customFormatter:'scwin.gridFormat'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'selfTransClntNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrRtrnDt',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crryoutCls',displayMode:'label',readOnly:'true',customFormatter:'scwin.gridFormat',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'onoffCntlYn',displayMode:'label',readOnly:'true',customFormatter:'scwin.gridFormat',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'onoffCntlRsn',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'selfClsNm',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'impExpClsCd',displayMode:'label',readOnly:'true',textAlign:'center'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'반납'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrSeq',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'onReqNo',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crryinoutIntendDt',displayMode:'label',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryinoutIntendNo',displayMode:'label',readOnly:'true',textAlign:'center'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'display: none;',id:'btn_trigger3',label:'저장',type:'button',class:'btn ','ev:onclick':'scwin.f_ErrorCode'},E:[{T:1,N:'xf:label',E:[{T:3,text:'제어사유 등록'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger4',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.f_cyAutoBatch'},E:[{T:1,N:'xf:label',E:[{T:3,text:'CY자동화 BATCH'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'제어 사유',class:'req'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'acb_cntlInfo',class:'',allOption:'',chooseOption:'',ref:'',mandatory:'true','ev:onchange':'scwin.acb_cntlInfo_onchange',displayMode:'label',visibleRowNum:'9',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_cntlInfo'},E:[{T:1,N:'w2:label',A:{ref:'col2'}},{T:1,N:'w2:value',A:{ref:'col1'}}]}]}]},{T:1,N:'xf:input',A:{style:'width:250px;',id:'ed_cntlInfoRsn',placeholder:'',class:'',maxlength:'30',objType:'data'}}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_allApp',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_allApply',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'제어'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_allClear',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_allClear',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'해제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_saveSell',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_save',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',label:'삭제',style:'',type:'button','ev:onclick':'scwin.f_delete',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]}]}]}]})