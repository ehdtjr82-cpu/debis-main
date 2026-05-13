/*amd /ui/ds/op/adjmbd/pchstrfmgnt/op_401_02_11b.xml 33195 db4e3b8deb3e0aaba202e089e0f4893343a8c24ea1a3ddb3ef78188b7260981b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'railWrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'railArvWrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptStDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptEndDt',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exclusiveTrainVol',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDtKey',name:'적용시작일자(Key)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'적용종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcDow',name:'할인요일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcDowKey',name:'할인요일(Key)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dayCapaTeu',name:'일CAPA(TEU)',dataType:'text',defaultValue:'0'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_exclusiveTrainVolAlias'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcDowKey',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_procedureCall',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prtn2',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.adjmbd.pchstrfmgnt.RetrieveExclusiveTrainVolCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_exclusiveTrainVol","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_exclusiveTrainVol","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.adjmbd.pchstrfmgnt.SaveExclusiveTrainVolCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_exclusiveTrainVol","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_procedureCall',action:'/ds.op.adjmbd.pchstrfmgnt.ExecuteDistanceEachRailroadTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_procedureCall","key":"OUT_DS1"}',target:'data:json,{"id":"ds_procedureCall","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_check',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_exclusiveTrainVolAlias","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
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
  const codeOptions = [{
    grpCd: "ZZ509",
    compID: "acb_dcDow"
  }];
  $c.data.setCommonCode($p, codeOptions);
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
  scwin.sCurrDate = $c.date.getServerDateTime($p, 'yyyyMMdd');
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  ed_qryStDt.setValue(scwin.sCurrDate);
  ed_qryEndDt.setValue("99999999");
  scwin.f_objDisable();
  ed_qryEndDt.setDisabled(true);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Modify, btn_Cancel, btn_Save, btn_Delete, btn_Proc]);
  ed_railWrkPlCd.focus();
};

/**
 * @method 
 * @name f_Retrieve 
 * @description 조회
 */
scwin.f_Retrieve = async function () {
  const validSearch = await $c.gus.cfValidate($p, searchCond, null, true);
  if (!validSearch) return;
  if (ed_qryStDt.getValue() != "" && ed_qryEndDt.getValue() != "") {
    if (!$c.gus.cfIsAfterDate($p, ed_qryStDt.getValue(), ed_qryEndDt.getValue(), false)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ed_qryEndDt.focus();
      return;
    }
    ;
  }
  ;
  dma_search.set("adptStDt", ed_qryStDt.getValue());
  dma_search.set("adptEndDt", ed_qryEndDt.getValue());
  dma_search.set("railWrkPlCd", ed_railWrkPlCd.getValue());
  dma_search.set("railArvWrkPlCd", ed_railArvWrkPlCd.getValue());
  ds_exclusiveTrainVol.removeAll();
  scwin.f_objDisable();

  //버튼제어
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Cancel, btn_Save, btn_Delete, btn_Proc]);
  $c.gus.cfDisableBtnOnly($p, [btn_Cancel, btn_Save]);
  await scwin.submitExcute(sbm_search);
};

/**
 * @method 
 * @name f_Retrieve 
 * @description 적용시작일자 Validation Check (이전 적용시작일자 보다 커야된다)
 */
scwin.f_adptDtValidate = async function () {
  const validAdptDate = await $c.gus.cfValidate($p, [ica_adptDt], null, true);
  if (!validAdptDate) return false;
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
  if (ds_exclusiveTrainVol.getRowCount() == 1) {
    await $c.win.alert($p, "데이타가 한건인 경우 삭제 하실수 없습니다.");
    return;
  }
  ;
  const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (!retConfirm) return;
  const focusIdx = ds_exclusiveTrainVol.getRowPosition();
  ds_exclusiveTrainVol.modifyRowStatus(focusIdx, 'D');
  scwin.f_submit();
};

/**
 * @method 
 * @name f_Save 
 * @description 저장 버튼 클릭
 */
scwin.f_Save = async function () {
  if (!ds_exclusiveTrainVol.getModifiedIndex().length > 0) {
    await $c.win.alert($p, "변경사항이 없습니다");
    return;
  }
  ;
  if (!(await scwin.f_adptDtValidate())) return;
  let row = ds_exclusiveTrainVol.getRowPosition();
  dma_exclusiveTrainVolAlias.set("dptWrkPlCd", ed_railWrkPlCd.getValue());
  dma_exclusiveTrainVolAlias.set("arvWrkPlCd", ed_railArvWrkPlCd.getValue());
  dma_exclusiveTrainVolAlias.set("adptDt", ica_adptDt.getValue());
  dma_exclusiveTrainVolAlias.set("dcDowKey", acb_dcDow.getValue());
  let action = "";
  switch (ds_exclusiveTrainVol.getRowStatus(row)) {
    case 'C':
      //신규
      action = "/ds.op.adjmbd.pchstrfmgnt.RetrieveExclusiveTrainVolNewProperYnCMD.do";
      break;
    case 'U':
      //수정
      action = "/ds.op.adjmbd.pchstrfmgnt.RetrieveExclusiveTrainVolModifyProperYnCMD.do";
      break;
    default:
      return;
  }
  ;
  sbm_check.action = action;
  await scwin.submitExcute(sbm_check);
};

/**
 * @method 
 * @name f_submit 
 * @description 저장
 */
scwin.f_submit = async function () {
  let arvWrkPlCd = null;
  const focusIdx = ds_exclusiveTrainVol.getRowPosition();
  const rowStatus = ds_exclusiveTrainVol.getRowStatus(focusIdx);
  const rowData = ds_exclusiveTrainVol.getRowJSON(focusIdx);
  switch (rowStatus) {
    case 'C':
      arvWrkPlCd = ed_railArvWrkPlCd.getValue();
      break;
    case 'U':
    case 'D':
      arvWrkPlCd = rowData.arvWrkPlCd;
      break;
    default:
      break;
  }
  ;
  ds_exclusiveTrainVol.setCellData(focusIdx, "dptWrkPlCd", ed_railWrkPlCd.getValue());
  ds_exclusiveTrainVol.setCellData(focusIdx, "arvWrkPlCd", arvWrkPlCd);
  ds_exclusiveTrainVol.setCellData(focusIdx, "dcDow", acb_dcDow.getValue());
  ds_exclusiveTrainVol.setCellData(focusIdx, "expireDt", "99999999");
  await scwin.submitExcute(sbm_save);
};

/**
 * @method 
 * @name f_Create 
 * @description 신규
 */
scwin.f_Create = async function () {
  //신규등록의 경우 도착작업장 to 구간이 입력되어있지 않으면 등록 못하게함
  if (ed_railArvWrkPlCd.getValue().trim() == "") {
    await $c.win.alert($p, "신규로 등록하실 경우 도착역은 필수입력값입니다.");
    ed_railArvWrkPlCd.focus();
    return false;
  }
  ;
  ds_exclusiveTrainVol.insertRow(0);
  scwin.f_objEnable();

  //버튼제어
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Cancel, btn_Save, btn_Delete, btn_Proc]);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Modify, btn_Delete, btn_Proc]);

  // ds_exclusiveTrainVol.Enable = "false";

  ica_adptDt.focus();
};

/**
 * @method 
 * @name f_Create 
 * @description 신규
 */
scwin.f_Update = function () {
  //버튼제어
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Cancel, btn_Save, btn_Delete, btn_Proc]);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Modify, btn_Delete, btn_Proc]);
  scwin.f_objEnable();

  // ds_exclusiveTrainVol.Enable = "false";

  //focus 설정
  ica_adptDt.focus();
};

/**
 * @method 
 * @name f_objDisable 
 * @description obj Disable
 */
scwin.f_objDisable = function () {
  ica_adptDt.setDisabled(true);
  ica_expireDt.setDisabled(true);
  acb_dcDow.setDisabled(true);
  ed_dayCapaTeu.setDisabled(true);
};

/**
 * @method 
 * @name f_objEnable 
 * @description obj Enable
 */
scwin.f_objEnable = function (gubun) {
  ica_adptDt.setDisabled(false);
  ica_expireDt.setDisabled(true);
  acb_dcDow.setDisabled(false);
  ed_dayCapaTeu.setDisabled(false);
};

/**
 * @method 
 * @name f_chkOpenCommonPopUp 
 * @description 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 */
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 
  // 이전값과 동일한 경우 팝업을 실행하지 않음.
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
 * @name f_chkOpenCommonPopUp 
 * @description 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
 */
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let selectId = "",
    pWtitleSearch = "",
    codeObj,
    nameObj;
  switch (disGubun) {
    case 1:
      // 출발역 작업장 팝업
      selectId = 'retrieveTrainWorkPlace';
      pWtitleSearch = "출발역 작업장조회,작업장코드,작업장명";
      codeObj = ed_railWrkPlCd; // 작업장코드
      nameObj = ed_railWrkPlNm; // 출발지명
      break;
    case 2:
      // 도착역 작업장 팝업
      selectId = 'retrieveTrainWorkPlace';
      pWtitleSearch = "도착역 작업장조회,작업장코드,작업장명";
      codeObj = ed_railArvWrkPlCd; // 작업장코드
      nameObj = ed_railArvWrkPlNm; // 출발지명	
      break;
    default:
      return;
  }
  ;
  udc_commonPopup.setSelectId(selectId);
  udc_commonPopup.cfCommonPopUp(rtnList => {
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
 * @name f_FieldClear 
 * @description 취소
 */
scwin.f_Cancel = function () {
  scwin.f_objDisable();
  gr_exclusiveTrainVol.setGridReadOnly(true);
  $c.data.undoAll($p, ds_exclusiveTrainVol);
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Save, btn_Cancel]);
  $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_Cancel]);
};

/**
 * @method 
 * @name dcDow_formatter 
 * @description 할인요일 formatter
 */
scwin.dcDow_formatter = function (data) {
  switch (data) {
    case "1":
      return "일";
    case "2":
      return "월";
    case "3":
      return "화";
    case "4":
      return "수";
    case "5":
      return "목";
    case "6":
      return "금";
    case "7":
      return "토";
    default:
      return data;
  }
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

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @method 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_search:
      /** for=tr_search event=OnFail() */
      if (e.responseJSON.resultDataSet[0].Code == -1) return;

      // 전용화차량 DataSet 완료
      scwin.ds_exclusiveTrainVol_OnLoadCompleted(ds_exclusiveTrainVol.getRowCount());

      /** for=tr_search event=OnSuccess() */
      gr_exclusiveTrainVol.setGridReadOnly(true);
      break;
    case sbm_check:
      /** for=sbm_check event=OnFail() */
      if (e.responseJSON.resultDataSet[0].Code == -1) {
        ica_adptDt.focus();
        return;
      }
      ;

      /** for=sbm_check event=OnSuccess() */
      const retConfrim = await $c.win.confirm($p, MSG_CM_CRM_001);
      if (!retConfrim) return;
      scwin.f_submit();
      break;
    case sbm_save:
      /** for=sbm_save event=OnFail() */
      if (e.responseJSON.resultDataSet[0].Code == -1) return;

      /** for=sbm_save event=OnSuccess() */
      scwin.f_Retrieve();
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
      break;
    case sbm_procedureCall:
      /** for=sbm_procedureCall event=OnFail() */
      if (e.responseJSON.resultDataSet[0].Code == -1) return;

      // 요율생성
      scwin.ds_procedureCall_OnLoadCompleted(ds_procedureCall.getRowCount());
      break;
    default:
      break;
  }
};

/**
 * @method 
 * @name ds_procedureCall_OnLoadCompleted 
 * @description
 * @asis for=ds_procedureCall event=OnLoadCompleted(rowCnt)
 */
scwin.ds_procedureCall_OnLoadCompleted = async function (rowCnt) {
  await $c.win.alert($p, ds_procedureCall.getCellData(0, "prtn2"));
};

/**
 * @method 
 * @name ds_exclusiveTrainVol_OnLoadCompleted 
 * @description
 * @asis for=ds_exclusiveTrainVol event=OnLoadCompleted(rowCnt)
 */
scwin.ds_exclusiveTrainVol_OnLoadCompleted = async function (rowCnt) {
  totalRows.setValue(rowCnt);
  if (rowCnt != 0) return;
  if ($c.gus.cfCheckCreateFlag($p)) {
    $c.gus.cfTurnCreateFlag($p, false);
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  ;
};

/**
 * @method 
 * @name dlt_onload 
 * @description DataList의 데이터가 전체적으로 변경(set)되는 경우 발생
 */
scwin.dlt_onload = function () {
  if (this.getRowPosition() == null) {
    this.setRowPosition(0);
    scwin.gridSetFocus(this, 'dptWrkPlCd', 0, gr_exclusiveTrainVol, totalRows);
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
  scwin.gridSetFocus(this, 'dptWrkPlCd', rowIdx, gr_exclusiveTrainVol, totalRows);
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
  scwin.gridSetFocus(this, 'dptWrkPlCd', clacIdx, gr_exclusiveTrainVol, totalRows);
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

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name gr_exclusiveTrainVol_oncellclick 
 * @description 셀이 클릭된 경우 발생
 * @asis for=gr_exclusiveTrainVol event=OnClick(row,colid)
 */
scwin.gr_exclusiveTrainVol_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_exclusiveTrainVol.getRowStatus(rowIndex) == 'C') {
    scwin.f_objEnable();
  } else {
    scwin.f_objDisable();
  }
  ;

  //버튼제어
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Save, btn_Delete, btn_Proc]);
  if (ds_exclusiveTrainVol.getCellData(rowIndex, "expireDt") == "99999999") {
    $c.gus.cfDisableBtnOnly($p, [btn_Save]);
  } else {
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
 * @name btn_FieldClear_onclick 
 * @description 초기화 버튼 클릭
 */
scwin.btn_FieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

/**
 * @event 
 * @name btn_retrieve_onclick 
 * @description 조회 버튼 클릭
 */
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

/**
 * @event 
 * @name btn_Proc_onclick 
 * @description 요율생성 버튼 클릭
 */
scwin.btn_Proc_onclick = function (e) {
  scwin.f_ProcedureCall();
};

/**
 * @event 
 * @name btn_Create_onclick 
 * @description 신규 버튼 클릭
 */
scwin.btn_Create_onclick = function (e) {
  scwin.f_Create();
};

/**
 * @event 
 * @name btn_Modify_onclick 
 * @description 신규 버튼 클릭
 */
scwin.btn_Modify_onclick = function (e) {
  scwin.f_Update();
};

/**
 * @event 
 * @name btn_Cancel_onclick 
 * @description 신규 버튼 클릭
 */
scwin.btn_Cancel_onclick = function (e) {
  scwin.f_Cancel();
};

/**
 * @event 
 * @name btn_Save_onclick 
 * @description 신규 버튼 클릭
 */
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};

/**
 * @event 
 * @name btn_Delete_onclick 
 * @description 신규 버튼 클릭
 */
scwin.btn_Delete_onclick = function (e) {
  scwin.f_DeleteRow();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전용화차량관리',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'shbox ',id:'searchCond',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_railWrkPlCd',nameId:'ed_railWrkPlNm',popupID:'',popupTitle:'',selectID:'retrieveTrainWorkPlace',style:'',validTitle:'출발역',id:'udc_comCode_rail',maxlengthCode:'5',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_comCode_rail_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_rail_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_rail_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9',mandatoryCode:'true',mandatoryName:'true',objTypeCode:'data',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_railArvWrkPlCd',selectID:'retrieveTrainWorkPlace',popupID:'',popupTitle:'',validTitle:'도착역',nameId:'ed_railArvWrkPlNm',style:'',maxlengthCode:'5',UpperFlagCode:'1',id:'udc_comCode_railAr','ev:onclickEvent':'scwin.udc_comCode_railAr_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_railAr_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_railAr_onviewchangeNameEvent',objTypeCode:'data',objTypeName:'data',allowCharCode:'a-zA-Z0-9'}},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar',refEdDt:'',edFromId:'ed_qryStDt',edToId:'ed_qryEndDt',mandatoryFrom:'true',objTypeFrom:'data',objTypeTo:'data',titleFrom:'적용기간',class:'req'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_FieldClear',style:'',type:'button','ev:onclick':'scwin.btn_FieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_exclusiveTrainVol',id:'gr_exclusiveTrainVol',style:'',visibleRowNum:'15',visibleRowNumFix:'true',rowStatusVisible:'true',focusMode:'row',validExp:'adptStDt:적용시작일자:yes:date=YYYYMMDD',dataName:'전용화차량','ev:oncellclick':'scwin.gr_exclusiveTrainVol_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'230',inputType:'text',style:'',id:'column70',value:'출발역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'230',inputType:'text',style:'',id:'column67',value:'도착역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column64',value:'적용시작일자(Key)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column61',value:'적용시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column55',value:'적용종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'할인요일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column73',value:'할인요일(Key)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column75',value:'일CAPA(TEU)',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'230',inputType:'text',style:'',id:'dptWrkPlCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'230',inputType:'text',style:'',id:'arvWrkPlCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'adptDtKey',value:'',displayMode:'label',hidden:'true',textAlign:'center',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'150',inputType:'calendar',style:'',id:'adptDt',value:'',displayMode:'label',textAlign:'center',displayFormat:'yyyy/MM/dd',mandatory:'true',dataType:'date'}},{T:1,N:'w2:column',A:{width:'150',inputType:'calendar',style:'',id:'expireDt',value:'',displayMode:'label',textAlign:'center',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcDow',value:'',displayMode:'label',displayFormatter:'scwin.dcDow_formatter',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'dcDowKey',value:'',displayMode:'label',hidden:'true',displayFormatter:'scwin.dcDow_formatter',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'dayCapaTeu',value:'',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'detail',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용시작일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ica_adptDt',style:'',displayFormat:'yyyy/MM/dd',mandatory:'true',objType:'data',ref:'data:ds_exclusiveTrainVol.adptDt',validExp:'적용시작일자:yes:date=YYYYMMDD'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용종료일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ica_expireDt',style:'',displayFormat:'9999/99/99',ref:'data:ds_exclusiveTrainVol.expireDt',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할인요일 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_dcDow',search:'start',style:'',submenuSize:'auto',ref:'data:ds_exclusiveTrainVol.dcDow',allOption:'',chooseOption:'true',chooseOptionLabel:'-선택-',objType:'data',validExp:'할인요일:yes:minNumber=0',mandatory:'true'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일CAPA(TEU)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150 tar',id:'ed_dayCapaTeu',style:'',maxlength:'3',allowChar:'0-9',ref:'data:ds_exclusiveTrainVol.dayCapaTeu',initValue:'0',dataType:'number',mandatory:'true',objType:'data',validExp:'일CAPA(TEU):yes:minNumber=1'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',style:'',type:'button','ev:onclick':'scwin.btn_Create_onclick',userAuth:'C',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Modify',style:'',type:'button','ev:onclick':'scwin.btn_Modify_onclick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',style:'',type:'button',objType:'bCancel','ev:onclick':'scwin.btn_Cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick',userAuth:'D',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white','ev:onclick':'scwin.btn_Proc_onclick',id:'btn_Proc',objType:'ctrlBtn',style:'',type:'button',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'요율생성'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'hideGroup',style:'display: none;'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'',codeId:'',popupID:'',progressBarSwitch:'Y',validTitle:'',nameId:'',style:'width:%; height:px; ',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',id:'udc_commonPopup'}}]}]}]}]})