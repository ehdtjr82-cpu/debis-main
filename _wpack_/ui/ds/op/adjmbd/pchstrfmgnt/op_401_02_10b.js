/*amd /ui/ds/op/adjmbd/pchstrfmgnt/op_401_02_10b.xml 40159 cf1c0e81636c6e858d504cb736954e24453c5db76397ef591f6268f63bc1e0b1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exclusiveTrainRate',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용;시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'적용;종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xclsTotDcRtE',name:'EMPTY',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'xclsTotDcRtF',name:'FULL',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'xclsDcRtE',name:'EMPTY1',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'xclsDcRtF',name:'FULL1',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fdrYn',name:'지선',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'adptDtKey',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptStDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptEndDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'railWrkPlCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'railArvWrkPlCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_procedureCall',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prtn2',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_exclusiveTrainRateAlias'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'railWrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'railArvWrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_updateExclusiveTrainRate',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDtKey',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xclsTotDcRt',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xclsDcRt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fdrYn',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'statusFlag',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exclusiveTrainRateAlias',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.adjmbd.pchstrfmgnt.RetrieveExclusiveTrainRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_exclusiveTrainRate","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_exclusiveTrainRate","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_procedureCall',action:'/ds.op.adjmbd.pchstrfmgnt.ExecuteDistanceEachRailroadTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_procedureCall","key":"OUT_DS1"}',target:'data:json,{"id":"ds_procedureCall","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.adjmbd.pchstrfmgnt.SaveExclusiveTrainRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_updateExclusiveTrainRate","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_check',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_exclusiveTrainRateAlias","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
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
scwin.onUdcCompleted = function () {};

/**
 * @event 
 * @name ondataload 
 * @description 코드 완료
 */
scwin.ondataload = async function () {
  await scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = async function () {
  scwin.sCurrDate = await $c.date.getServerDateTime($p, 'yyyyMMdd');
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  gr_exclusiveTrainRate.setGridReadOnly(true);
  ed_qryStDt.setValue(scwin.sCurrDate);
  ed_qryEndDt.setValue("99999999");
  scwin.f_objDisable();
  ed_qryEndDt.setDisabled(true);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Modify, btn_Cancel, btn_Save, btn_Delete, btn_Proc]);
  ed_railWrkPlCd.focus();

  // ed_railWrkPlCd.setValue("4R01");
  // ed_qryStDt.setValue("20100101");
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 조회
 */
scwin.f_Retrieve = async function () {
  const validSearch = await $c.gus.cfValidate($p, [searchCond]);
  if (!validSearch) return;
  const formDate = ed_qryStDt.getValue();
  const toDate = ed_qryEndDt.getValue();
  if (formDate != "" && toDate != "") {
    if (!$c.gus.cfIsAfterDate($p, formDate, toDate, false)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ed_qryEndDt.focus();
      return;
    }
    ;
  }
  ;
  dma_search.set("adptStDt", formDate);
  dma_search.set("adptEndDt", toDate);
  dma_search.set("railWrkPlCd", ed_railWrkPlCd.getValue());
  dma_search.set("railArvWrkPlCd", ed_railArvWrkPlCd.getValue());
  ds_exclusiveTrainRate.removeAll();
  scwin.f_objDisable();

  //버튼제어
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Cancel, btn_Save, btn_Delete, btn_Proc]);
  $c.gus.cfDisableBtnOnly($p, [btn_Cancel, btn_Save]);
  await scwin.submitExcute(sbm_search);
};

/**
 * @method 
 * @name f_adptDtValidate
 * @description 적용시작일자 Validation Check (이전 적용시작일자 보다 커야된다)
 */
scwin.f_adptDtValidate = async function () {
  const validAdptDt = await $c.gus.cfValidate($p, [ica_adptDt], null, true);
  if (!validAdptDt) return false;
  const validDetail = await $c.gus.cfValidate($p, [detail], null, true);
  if (!validDetail) return false;
  return true;
};

/**
 * @method 
 * @name f_DeleteRow
 * @description 삭제 버튼 클릭
 */
scwin.f_DeleteRow = async function () {
  if (ds_exclusiveTrainRate.getRowCount() == 1) {
    await $c.win.alert($p, "데이타가 한건인 경우 삭제 하실수 없습니다.");
    return;
  }
  const validConfirm = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (!validConfirm) return;

  // DeleteMarked
  ds_exclusiveTrainRate.deleteRow(ds_exclusiveTrainRate.getRowPosition());
  scwin.f_submit();
};

/**
 * @method 
 * @name f_Save
 * @description 저장 버튼 클릭
 */
scwin.f_Save = async function () {
  if (!(ds_exclusiveTrainRate.getModifiedIndex().length > 0)) {
    await $c.win.alert($p, "변경사항이 없습니다");
    return;
  }
  ;
  if (!(await scwin.f_adptDtValidate())) return;
  const row = ds_exclusiveTrainRate.getRowPosition();
  dma_exclusiveTrainRateAlias.set("railWrkPlCd", ed_railWrkPlCd.getValue());
  dma_exclusiveTrainRateAlias.set("railArvWrkPlCd", ed_railArvWrkPlCd.getValue());
  dma_exclusiveTrainRateAlias.set("adptDt", ica_adptDt.getValue());
  let actionUrl = "";
  switch (ds_exclusiveTrainRate.getRowStatus(row)) {
    case "C":
      //신규 
      actionUrl = "/ds.op.adjmbd.pchstrfmgnt.RetrieveExclusiveTrainRateNewProperYnCMD.do";
      break;
    case "U":
      //수정
      actionUrl = "/ds.op.adjmbd.pchstrfmgnt.RetrieveExclusiveTrainRateModifyProperYnCMD.do";
      break;
    default:
      return;
  }
  ;
  sbm_check.action = actionUrl;
  scwin.submitExcute(sbm_check);
};

/**
 * @method 
 * @name f_submit
 * @description 저장
 */
scwin.f_submit = async function () {
  //저장시 
  ds_updateExclusiveTrainRate.removeAll();
  const rowCnt = ds_exclusiveTrainRate.getRowCount();
  for (i = 0; i < rowCnt; i++) {
    const rowData = ds_exclusiveTrainRate.getRowJSON(i);
    const rowStatus = ds_exclusiveTrainRate.getRowStatus(i);
    let arvWrkPlCd = "",
      insertIdx,
      insertData,
      statusFlag;
    switch (rowStatus) {
      case "C":
        arvWrkPlCd = ed_railArvWrkPlCd.getValue();
        break;
      case "D":
      case "U":
        arvWrkPlCd = ds_exclusiveTrainRate.getCellData(i, "arvWrkPlCd");
        break;
    }
    ;
    switch (rowStatus) {
      case "R":
        statusFlag = 0;
        break;
      case "C":
        statusFlag = 1;
        break;
      case "D":
        statusFlag = 2;
        break;
      case "U":
        statusFlag = 3;
        break;
      case "V":
        statusFlag = 4;
        break;
    }
    if (["C", "D", "U"].includes(rowStatus)) {
      insertIdx = ds_updateExclusiveTrainRate.insertRow();
      insertData = {
        "dptWrkPlCd": ed_railWrkPlCd.getValue(),
        "arvWrkPlCd": arvWrkPlCd,
        "adptDt": ica_adptDt.getValue(),
        "fullEmptyClsCd": "E",
        "xclsTotDcRt": ed_xclsTotDcRtE.getValue(),
        "xclsDcRt": ed_xclsDcRtE.getValue(),
        "fdrYn": cbx_fdrYn.getValue(),
        "expireDt": "99999999",
        "adptDtKey": rowData.adptDtKey,
        "statusFlag": statusFlag
      };
      ds_updateExclusiveTrainRate.setRowJSON(insertIdx, insertData, true);
      insertIdx = ds_updateExclusiveTrainRate.insertRow();
      insertData = {
        "dptWrkPlCd": ed_railWrkPlCd.getValue(),
        "arvWrkPlCd": arvWrkPlCd,
        "adptDt": ica_adptDt.getValue(),
        "fullEmptyClsCd": "F",
        "xclsTotDcRt": ed_xclsTotDcRtF.getValue(),
        "xclsDcRt": ed_xclsDcRtF.getValue(),
        "fdrYn": cbx_fdrYn.getValue(),
        "expireDt": "99999999",
        "adptDtKey": rowData.adptDtKey,
        "statusFlag": statusFlag
      };
      ds_updateExclusiveTrainRate.setRowJSON(insertIdx, insertData, true);
    }
  }
  await scwin.submitExcute(sbm_save);
};

/**
 * @method 
 * @name f_Create
 * @description 저장
 */
scwin.f_Create = async function () {
  //신규등록의 경우 도착작업장 to 구간이 입력되어있지 않으면 등록 못하게함
  if (ed_railArvWrkPlCd.getValue().trim() == "") {
    await $c.win.alert($p, "신규로 등록하실 경우 도착역은 필수입력값입니다.");
    ed_railArvWrkPlCd.focus();
    return false;
  }
  ds_exclusiveTrainRate.insertRow(0);
  scwin.f_objEnable();

  //버튼제어
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Cancel, btn_Save, btn_Delete, btn_Proc]);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Modify, btn_Delete, btn_Proc]);

  // gr_exclusiveTrainRate.setGridReadOnly(true);
  gr_exclusiveTrainRate.setDisabled('grid', true);
  ica_adptDt.focus();
};

/**
 * @method 
 * @name f_Update
 * @description 수정
 */
scwin.f_Update = function () {
  //버튼제어
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Cancel, btn_Save, btn_Delete, btn_Proc]);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Modify, btn_Delete, btn_Proc]);
  scwin.f_objEnable();

  // gr_exclusiveTrainRate.setGridReadOnly(true);
  gr_exclusiveTrainRate.setDisabled('grid', true);

  //focus 설정
  ica_adptDt.focus();
};

/**
 * @method 
 * @name f_Update
 * @description obj Disable
 */
scwin.f_objDisable = function () {
  ica_adptDt.setDisabled(true);
  ica_expireDt.setDisabled(true);
  ed_xclsTotDcRtE.setDisabled(true);
  ed_xclsTotDcRtF.setDisabled(true);
  ed_xclsDcRtE.setDisabled(true);
  ed_xclsDcRtF.setDisabled(true);
  cbx_fdrYn.setDisabled(true);
};

/**
 * @method 
 * @name f_Update
 * @description obj Enable
 */
scwin.f_objEnable = function () {
  ica_adptDt.setDisabled(false);
  ica_expireDt.setDisabled(true);
  ed_xclsTotDcRtE.setDisabled(false);
  ed_xclsTotDcRtF.setDisabled(false);
  ed_xclsDcRtE.setDisabled(false);
  ed_xclsDcRtF.setDisabled(false);
  cbx_fdrYn.setDisabled(false);
};

/**
 * @method 
 * @name f_chkOpenCommonPopUp
 * @description 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
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
 * @name f_openCommonPopUp
 * @description 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
 */
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let selectId = "",
    pWtitleSearch = "";
  let codeObj, nameObj;
  switch (disGubun) {
    case 1:
      // 출발역 작업장 팝업
      selectId = "retrieveTrainWorkPlace";
      codeObj = ed_railWrkPlCd; // 작업장코드
      nameObj = ed_railWrkPlNm; // 출발지명
      pWtitleSearch = "출발역 작업장조회,작업장코드,작업장명";
      break;
    case 2:
      // 도착역 작업장 팝업
      selectId = "retrieveTrainWorkPlace";
      codeObj = ed_railArvWrkPlCd;
      nameObj = ed_railArvWrkPlNm;
      pWtitleSearch = "도착역 작업장조회,작업장코드,작업장명";
      break;
  }
  ;
  udc_comCode.setSelectId(selectId);
  udc_comCode.cfCommonPopUp(rtnList => {
    $c.gus.cfSetReturnValue($p, rtnList, codeObj, nameObj);
  }, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, pWtitleSearch);
};

/**
 * @method 
 * @name f_ProcedureCall
 * @description 요율 생성
 */
scwin.f_ProcedureCall = async function () {
  const retConfirm = await $c.win.confirm($p, "요율을 생성하시겠습니까?");
  if (!retConfirm) return;
  await scwin.submitExcute(sbm_procedureCall);
};

/**
 * @method 
 * @name f_FieldClear
 * @description 조회조기 필드 Clear
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, searchCond, null);
  ed_qryStDt.setValue(scwin.sCurrDate);
  ed_qryEndDt.setValue("99999999");
  ed_railWrkPlCd.focus();
};

/**
 * @method 
 * @name f_Cancel
 * @description 취소
 */
scwin.f_Cancel = function () {
  scwin.f_objDisable();

  // gr_exclusiveTrainRate.setGridReadOnly(false);
  gr_exclusiveTrainRate.setDisabled('grid', false);
  $c.data.undoAll($p, 'ds_exclusiveTrainRate');
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Save, btn_Cancel]);
  $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    await scwin.submitdone(e);
  }
  ;
};

/**
 * @method 
 * @name fdrYn_formatter 
 * @description 지선 displayformatter
 */
scwin.fdrYn_formatter = function (data) {
  return data == '1' ? 'Y' : data == '0' ? 'N' : '';
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name submitPre 
 * @description submit 요청전
 */
scwin.submitPre = function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case value:
      break;
    default:
      break;
  }
};

/**
 * @method 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_check:
      // for=tr_check event=OnFail()
      if (e.responseJSON.resultDataSet[0].Code == -1) {
        ica_adptDt.focus();
      }
      ;

      // for=tr_check event=OnSuccess()
      const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_001);
      if (!retConfirm) return;
      scwin.f_submit();
      break;
    case sbm_save:
      // 저장 TR
      // for=tr_save event=OnFail()
      if (e.responseJSON.resultDataSet[0].Code == -1) return;

      // for=tr_save event=OnSuccess()
      scwin.f_Retrieve();
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
      break;
    case sbm_procedureCall:
      // 요율생성 TR
      // for=tr_procedureCall event=OnFail()
      if (e.responseJSON.resultDataSet[0].Code == -1) return;

      // 요율생성-->
      scwin.ds_procedureCall_OnLoadCompleted(ds_procedureCall.getRowCount());
      break;
    case sbm_search:
      // 페이지 조회  TR
      // for=tr_search event=OnFail()
      if (e.responseJSON.resultDataSet[0].Code == -1) return;

      // 전용화차율 DataSet 완료
      scwin.ds_exclusiveTrainRate_OnLoadCompleted(ds_exclusiveTrainRate.getRowCount());

      // for=tr_search event=OnSuccess()
      // gr_exclusiveTrainRate.setGridReadOnly(false);
      gr_exclusiveTrainRate.setDisabled('grid', false);
      break;
    default:
      break;
  }
};

/**
 * @method 
 * @name dlt_onload 
 * @description DataList의 데이터가 전체적으로 변경(set)되는 경우 발생
 */
scwin.dlt_onload = function () {
  if (this.getRowPosition() == null) {
    this.setRowPosition(0);
    scwin.gridSetFocus(this, 'dptWrkPlCd', 0, gr_exclusiveTrainRate, totalRows);
  }
  ;
};

/**
 * @method 
 * @name dlt_oninsertrow 
 * @description 새로운 행이 추가된 후에 발생 (여러 행이 동시에 추가되면 한번만 발생)
 */
scwin.dlt_oninsertrow = function (info) {
  if (Object.keys(info.insertedDataObj).length < 1) return;
  const rowIdx = Object.keys(info.insertedDataObj)[0] ?? 0;
  this.setRowPosition(rowIdx);
  scwin.gridSetFocus(this, 'dptWrkPlCd', rowIdx, gr_exclusiveTrainRate, totalRows);
};

/**
 * @method 
 * @name dlt_onremoverow 
 * @description 행이 제거된 후에 발생 (여러 행이 동시에 제거되면 한번만 발생)
 */
scwin.dlt_onremoverow = function (info) {
  if (Object.keys(info.removedDataObj).length < 1) return;
  const rowIdx = Number(Object.keys(info.removedDataObj)[0]) - 1;
  const clacIdx = rowIdx == -1 ? 0 : rowIdx;
  this.setRowPosition(clacIdx);
  scwin.gridSetFocus(this, 'dptWrkPlCd', clacIdx, gr_exclusiveTrainRate, totalRows);
};

/**
 * @method 
 * @name gridSetFocus 
 * @description dataList 이벤트 후 그리드 실제 포커스 처리
 */
scwin.gridSetFocus = function (dataList, defaultCol, rowIndex, targetGrid, targetRows) {
  if (dataList != targetGrid._dataList) return;
  const focusCol = targetGrid.getFocusedColumnID() ?? defaultCol;
  targetGrid.setFocusedCell(rowIndex, focusCol);
  targetRows.setValue(dataList.getRowCount());
};

/**
 * @method 
 * @name ds_procedureCall_OnLoadCompleted 
 * @description 요율 생성
 * @asis for=ds_procedureCall event=OnLoadCompleted(rowCnt)
 */
scwin.ds_procedureCall_OnLoadCompleted = async function (rowCnt) {
  await $c.win.alert($p, ds_procedureCall.getCellData(0, "prtn2"));
};

/**
 * @method 
 * @name ds_exclusiveTrainRate_OnLoadCompleted 
 * @description 전용화차율 DataSet 완료
 * @asis for=ds_exclusiveTrainRate event=OnLoadCompleted(rowCnt)
 */
scwin.ds_exclusiveTrainRate_OnLoadCompleted = async function (rowCnt) {
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p)) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    ;
  }
  ;
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name gr_exclusiveTrainRate_oncellclick 
 * @description 셀이 클릭된 경우 발생
 * @asis for=gr_exclusiveTrainRate event=OnClick(row,colid)
 */
scwin.gr_exclusiveTrainRate_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_exclusiveTrainRate.getRowStatus(rowIndex) == "C") {
    scwin.f_objEnable();
  } else {
    scwin.f_objDisable();
  }
  ;
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Save, btn_Delete, btn_Proc]);
  if (ds_exclusiveTrainRate.getCellData(rowIndex, "expireDt") == "99999999") {
    //버튼제어
    $c.gus.cfDisableBtnOnly($p, [btn_Save]);
  } else {
    //버튼제어
    $c.gus.cfDisableBtnOnly($p, [btn_Modify, btn_Save, btn_Delete, btn_Proc]);
  }
  ;
};

/**
 * @event 
 * @name udc_comCode_rail_onblurCodeEvent 
 * @description [출발역]
 */
scwin.udc_comCode_rail_onblurCodeEvent = function (e) {
  //검색조회 - 출발역 작업장
  scwin.f_chkOpenCommonPopUp(ed_railWrkPlCd, ed_railWrkPlNm, 1);
};

/**
 * @event 
 * @name udc_comCode_rail_onviewchangeNameEvent 
 * @description [출발역]
 */
scwin.udc_comCode_rail_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_railWrkPlNm, ed_railWrkPlCd, 1, false);
};

/**
 * @event 
 * @name udc_comCode_rail_onclickEvent 
 * @description [출발역]
 */
scwin.udc_comCode_rail_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_railWrkPlCd.getValue(), ed_railWrkPlNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_comCode_railAr_onblurCodeEvent 
 * @description [도착역]
 */
scwin.udc_comCode_railAr_onblurCodeEvent = function (e) {
  //검색조회 - 도착역 작업장
  scwin.f_chkOpenCommonPopUp(ed_railArvWrkPlCd, ed_railArvWrkPlNm, 2);
};

/**
 * @event 
 * @name udc_comCode_railAr_onviewchangeNameEvent 
 * @description [도착역]
 */
scwin.udc_comCode_railAr_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_railArvWrkPlNm, ed_railArvWrkPlCd, 2, false);
};

/**
 * @event 
 * @name udc_comCode_railAr_onclickEvent 
 * @description [도착역]
 */
scwin.udc_comCode_railAr_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_railArvWrkPlCd.getValue(), ed_railArvWrkPlNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name btn_fieldClear_onclick 
 * @description 초기화 버튼 클릭 시 발생
 */
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

/**
 * @event 
 * @name btn_retrieve_onclick 
 * @description 조회 버튼 클릭 시 발생
 */
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

/**
 * @event 
 * @name btn_Proc_onclick 
 * @description 요율생성 버튼 클릭 시 발생
 */
scwin.btn_Proc_onclick = function (e) {
  scwin.f_ProcedureCall();
};

/**
 * @event 
 * @name btn_Create_onclick 
 * @description 신규 버튼 클릭 시 발생
 */
scwin.btn_Create_onclick = function (e) {
  scwin.f_Create();
};

/**
 * @event 
 * @name btn_Create_onclick 
 * @description 수정 버튼 클릭 시 발생
 */
scwin.btn_Modify_onclick = function (e) {
  scwin.f_Update();
};

/**
 * @event 
 * @name btn_Cancel_onclick 
 * @description 취소 버튼 클릭 시 발생
 */
scwin.btn_Cancel_onclick = function (e) {
  scwin.f_Cancel();
};

/**
 * @event 
 * @name btn_Save_onclick 
 * @description 저장 버튼 클릭 시 발생
 */
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};

/**
 * @event 
 * @name btn_Save_onclick 
 * @description 저장 버튼 클릭 시 발생
 */
scwin.btn_Delete_onclick = function (e) {
  scwin.f_DeleteRow();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전용화차율관리',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'shbox ',id:'searchCond',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_railWrkPlCd',nameId:'ed_railWrkPlNm',id:'udc_comCode_rail',selectID:'retrieveTrainWorkPlace',popupTitle:'',objTypeCode:'data',objTypeName:'data',mandatoryName:'true',mandatoryCode:'true',maxlengthCode:'5',UpperFlagCode:'1',readOnlyCode:'false','ev:onclickEvent':'scwin.udc_comCode_rail_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_rail_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_rail_onviewchangeNameEvent',validTitle:'출발역',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_railArvWrkPlCd',nameId:'ed_railArvWrkPlNm',id:'udc_comCode_railAr',selectID:'retrieveTrainWorkPlace',objTypeName:'data',mandatoryName:'false',mandatoryCode:'false',UpperFlagCode:'1',maxlengthCode:'5',popupTitle:'','ev:onclickEvent':'scwin.udc_comCode_railAr_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_railAr_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_railAr_onviewchangeNameEvent',validTitle:'도착역',allowCharCode:'a-zA-Z0-9',objTypeCode:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_qryStDt',edToId:'ed_qryEndDt',mandatoryFrom:'true',objTypeFrom:'data',objTypeTo:'data',titleFrom:'적용기간'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_exclusiveTrainRate',style:'',autoFit:'allColumn',id:'gr_exclusiveTrainRate',class:'wq_gvw',visibleRowNum:'14',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_exclusiveTrainRate_oncellclick',validExp:'adptStDt:적용시작일자:yes:date=YYYYMMDD',dataName:'전용화차율',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column1',value:'출발역',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column17',value:'도착역',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'적용<br/>시작일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'적용<br/>종료일자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column11',value:'전용 119TEU 이내',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column3',value:'전용 119TEU 초과',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column7',value:'지선',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',displayMode:'label',value:'EMPTY'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',displayMode:'label',value:'FULL'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',displayMode:'label',value:'EMPTY'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',displayMode:'label',value:'FULL'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dptWrkPlCd',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'arvWrkPlCd',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'adptDt',displayMode:'label',textAlign:'center',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'expireDt',displayMode:'label',textAlign:'center',displayFormat:'yyyy/MM/dd',dataType:'date',dateValidCheck:'false',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsTotDcRtE',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsTotDcRtF',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsDcRtE',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'xclsDcRtF',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'fdrYn',displayMode:'label',textAlign:'center',displayFormatter:'scwin.fdrYn_formatter',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{style:'',id:'detail',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적용시작일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{ref:'data:ds_exclusiveTrainRate.adptDt',displayFormat:'yyyy/MM/dd',style:'',id:'ica_adptDt',class:'form-control cal',mandatory:'true',objType:'data',calendarValueType:'yearMonthDate',validExp:'적용시작일자:yes:date=YYYYMMDD'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적용종료일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{ref:'data:ds_exclusiveTrainRate.expireDt',style:'',id:'ica_expireDt',class:'form-control cal',objType:'data',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'전용119TEU<br/>이내',class:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'EMPTY',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_exclusiveTrainRate.xclsTotDcRtE',maxlength:'3.2',style:'',id:'ed_xclsTotDcRtE',placeholder:'',allowChar:'0-9',class:'form-control w150 tar',objType:'data',validExp:'전용포함EMPTY:yes:maxNumber=100',dataType:'float',autoDecimalPoint:'true',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'FULL',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_exclusiveTrainRate.xclsTotDcRtF',maxlength:'3.2',style:'',id:'ed_xclsTotDcRtF',placeholder:'',allowChar:'0-9',class:'form-control w150 tar',objType:'data',validExp:'전용포함FULL:yes:maxNumber=100',dataType:'float',autoDecimalPoint:'true',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'전용119TEU<br/>초과',class:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'EMPTY',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_exclusiveTrainRate.xclsDcRtE',maxlength:'3.2',style:'',id:'ed_xclsDcRtE',placeholder:'',allowChar:'0-9',class:'form-control w150 tar',dataType:'float',autoDecimalPoint:'true',mandatory:'true',validExp:'전용EMPTY:yes:maxNumber=100'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'FULL',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_exclusiveTrainRate.xclsDcRtF',maxlength:'3.2',style:'',id:'ed_xclsDcRtF',placeholder:'',allowChar:'0-9',class:'form-control w150 tar',dataType:'float',autoDecimalPoint:'true',mandatory:'true',objType:'data',validExp:'전용FULL:yes:maxNumber=100'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지선 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{falseValue:'0',refInitSync:'false',ref:'data:ds_exclusiveTrainRate.fdrYn',appearance:'full',style:'',id:'cbx_fdrYn',renderType:'checkboxgroup',selectedindex:'-1',rows:'',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Proc',style:'',type:'button','ev:onclick':'scwin.btn_Proc_onclick',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'요율생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',style:'',type:'button','ev:onclick':'scwin.btn_Create_onclick',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Modify',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Modify_onclick',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',style:'',type:'button','ev:onclick':'scwin.btn_Cancel_onclick',objType:'bCancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick',objType:'ctrlBtn',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'hideGroup',style:'display: none;'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'',codeId:'',popupID:'',progressBarSwitch:'Y',validTitle:'',nameId:'',style:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',id:'udc_comCode'}}]}]}]}]})