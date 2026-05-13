/*amd /ui/ds/op/adjmbd/pchstrfmgnt/op_401_02_08b.xml 28268 40430db998a24a45382b245466ce28462b86f5f34be32bf74b704de5941542ce */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_railroadFarecutRate',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadFareAdptClsCd',name:'name3',dataType:'text',valueType:'',useFilter:'',importFormatter:'',ignoreStatus:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'railroadFareAdptClsNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cutRt',name:'name4',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_procedureCall',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prtn2',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryStDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'railroadFareAdptClsCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_railroadFarecutRateAlias'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expireDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'railroadFareAdptClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cutRt',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_calendar'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'from',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'to',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_procedureCall',action:'/ds.op.adjmbd.pchstrfmgnt.ExecuteDistanceEachRailroadTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_procedureCall","key":"OUT_DS1"}',target:'data:json,{"id":"ds_procedureCall","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.RetrieveRailroadFareCutRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_railroadFarecutRate","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_railroadFarecutRate","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_check',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_railroadFarecutRateAlias","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.SaveRailroadFareCutRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_railroadFarecutRate","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
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
    grpCd: "OP215",
    compID: "gr_Results:railroadFareAdptClsCd"
  }, {
    grpCd: "OP215",
    compID: "acb_railroadFareAdptClsCd, acb_railroadFareAdptClsNm"
  }];
  $c.data.setCommonCode($p, codeOptions, () => {
    acb_railroadFareAdptClsCd.addItem("전체", "", "", 0);
    acb_railroadFareAdptClsCd.setSelectedIndex(0);
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
  scwin.sCurrDate = $c.date.getServerDateTime($p, 'yyyyMMdd');
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  gr_Results.setGridReadOnly(true);
  ica_qryStDt.setValue(scwin.sCurrDate);
  // ica_qryEndDt.setValue("99999999");
  dma_calendar.set('to', "99999999");
  ica_qryStDt.focus();
  scwin.f_objDisable();
  $c.gus.cfDisableObjects($p, [ica_qryEndDt]);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Modify, btn_Cancel, btn_Save, btn_Delete, btn_Proc]);
};

/**
 * @method 
 * @name f_Retrieve 
 * @description 화면로딩시
 */
scwin.f_Retrieve = async function () {
  const validStartDate = await $c.gus.cfValidate($p, ica_qryStDt, null, true);
  if (!validStartDate) return;
  const startDate = ica_qryStDt.getValue();
  const endDate = ica_qryEndDt.getValue();
  if (endDate != "99999999") {
    const validEndDate = !(await $c.gus.cfValidate($p, ica_qryEndDt, null, true));
    if (validEndDate) return;
  }
  ;
  if (startDate != "" && endDate != "") {
    if (!$c.gus.cfIsAfterDate($p, startDate, endDate, false)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ica_qryEndDt.focus();
      return;
    }
    ;
  }
  ;
  dma_search.set("qryStDt", startDate);
  dma_search.set("qryEndDt", endDate);
  dma_search.set("railroadFareAdptClsCd", acb_railroadFareAdptClsCd.getValue());
  scwin.f_objDisable();

  //버튼제어
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Save, btn_Delete, btn_Proc]);
  $c.gus.cfDisableBtnOnly($p, [btn_Save]);
  gr_Results.setDisabled('grid', false);
  await scwin.submitExcute(sbm_search);
};

/**
 * @method 
 * @name  f_adptDtValidate
 * @description 적용시작일자 Validation Check (이전 적용시작일자 보다 커야된다)
 */
scwin.f_adptDtValidate = async function () {
  const targetComps = [ica_adptDt, acb_railroadFareAdptClsNm, ed_fareCutRate];
  const validComps = await $c.gus.cfValidate($p, targetComps, null, true);
  if (!validComps) return;
  const validGrid = await $c.gus.cfValidate($p, [gr_Results], null, true);
  if (!validGrid) return false;
  const rowCnt = ds_railroadFarecutRate.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    if (ds_railroadFarecutRate.getRowStatus(i) == 'C') {
      ds_railroadFarecutRate.setCellData(i, "expireDt", "99999999");
    }
  }
  ;
  return true;
};

/**
 * @method 
 * @name  f_DeleteRow
 * @description 삭제 버튼 클릭
 */
scwin.f_DeleteRow = async function () {
  let checkValue = false;
  let focusIdx = ds_railroadFarecutRate.getRowPosition();
  const v_railroadFareAdptClsCd = ds_railroadFarecutRate.getCellData(focusIdx, "railroadFareAdptClsCd");
  let rowCnt = ds_railroadFarecutRate.getRowCount();
  for (let i = focusIdx + 1; i < rowCnt; i++) {
    const {
      railroadFareAdptClsCd
    } = ds_railroadFarecutRate.getRowJSON(i);
    if (railroadFareAdptClsCd == v_railroadFareAdptClsCd) {
      checkValue = true;
      break;
    }
    ;
  }
  ;
  if (!checkValue) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["데이타가 한건", "삭제"]);
    return;
  }
  ;
  const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (!retConfirm) return;
  ds_railroadFarecutRate.deleteRow(focusIdx);
  for (let i = focusIdx; i < rowCnt; i++) {
    const {
      railroadFareAdptClsCd
    } = ds_railroadFarecutRate.getRowJSON(i);
    if (railroadFareAdptClsCd == v_railroadFareAdptClsCd) {
      ds_railroadFarecutRate.setCellData(i, "expireDt", "99999999");
      await scwin.submitExcute(sbm_save);
      return;
    }
    ;
  }
  ;
};

/**
 * @method 
 * @name  f_Save
 * @description 저장 버튼 클릭
 */
scwin.f_Save = async function () {
  if (!(await scwin.f_adptDtValidate())) return;
  const row = ds_railroadFarecutRate.getRowPosition();
  const rowData = ds_railroadFarecutRate.getRowJSON(row);
  dma_railroadFarecutRateAlias.set("adptDt", rowData.adptDt);
  dma_railroadFarecutRateAlias.set("expireDt", rowData.expireDt);
  dma_railroadFarecutRateAlias.set("railroadFareAdptClsCd", rowData.railroadFareAdptClsCd);
  dma_railroadFarecutRateAlias.set("cutRt", rowData.cutRt);
  let actionStr = "";
  switch (ds_railroadFarecutRate.getRowStatus(row)) {
    case "C":
      // 신규
      actionStr = "/ds.op.adjmbd.pchstrfmgnt.RetrieveCutRateNewProperYnCMD.do";
      break;
    case "U":
      // 수정
      actionStr = "/ds.op.adjmbd.pchstrfmgnt.RetrieveCutRateModifyProperYnCMD.do";
      break;
    default:
      return;
  }
  ;
  sbm_check.action = actionStr;
  await scwin.submitExcute(sbm_check);
};

/**
 * @method 
 * @name  f_Create
 * @description 신규
 */
scwin.f_Create = function () {
  ds_railroadFarecutRate.insertRow(0);
  scwin.f_objEnable("N");

  //버튼제어
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Cancel, btn_Save, btn_Delete, btn_Proc]);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Modify, btn_Delete, btn_Proc]);
  gr_Results.setDisabled('grid', true);
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
  scwin.f_objEnable("M");
  gr_Results.setDisabled('grid', true);

  //focus 설정
  ed_fareCutRate.focus();
};

/**
 * @method 
 * @name f_objDisable
 * @description obj Disable
 */
scwin.f_objDisable = function () {
  ica_adptDt.setDisabled(true);
  ica_expireDt.setDisabled(true);
  acb_railroadFareAdptClsNm.setDisabled(true);
  ed_fareCutRate.setDisabled(true);
};

/**
 * @method 
 * @name f_objEnable
 * @description obj Enable
 */
scwin.f_objEnable = function (gubun) {
  if (gubun == "N") {
    ica_adptDt.setDisabled(false);
    ica_expireDt.setDisabled(true);
    acb_railroadFareAdptClsNm.setDisabled(false);
    ed_fareCutRate.setDisabled(false);
  } else {
    ica_adptDt.setDisabled(true);
    ica_expireDt.setDisabled(true);
    acb_railroadFareAdptClsNm.setDisabled(true);
    ed_fareCutRate.setDisabled(false);
  }
  ;
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
  $c.gus.cfInitObjects($p, tbl_search, null);
  ica_qryStDt.setValue(scwin.sCurrDate);
  // ica_qryEndDt.setValue("99999999");
  dma_calendar.set('to', "99999999");
  ica_qryStDt.focus();
};

/**
 * @method 
 * @name f_Cancel
 * @description 취소
 */
scwin.f_Cancel = function () {
  scwin.f_objDisable();
  gr_Results.setDisabled('grid', false);
  $c.data.undoAll($p, ds_railroadFarecutRate);
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
    case sbm_procedureCall:
      if (e.responseJSON.resultDataSet[0].Code == -1) return;
      scwin.ds_procedureCall_OnLoadCompleted(ds_procedureCall.getRowCount());
      break;
    case sbm_check:
      if (e.responseJSON.resultDataSet[0].Code == -1) {
        ica_adptDt.focus();
        return;
      }
      ;

      /** for=tr_check event=OnSuccess() */
      const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_001);
      if (!retConfirm) return;
      await scwin.submitExcute(sbm_save);
      break;
    case sbm_save:
      // 저장 TR
      if (e.responseJSON.resultDataSet[0].Code == -1) return;

      /** for=tr_save event=OnSuccess() */
      scwin.f_Retrieve();
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
      break;
    case sbm_search:
      scwin.ds_railroadFarecutRate_OnLoadCompleted(ds_railroadFarecutRate.getRowCount());
      break;
    default:
      break;
  }
};

/**
 * @method 
 * @name ds_railroadFarecutRate_OnLoadCompleted 
 * @description 저감률 DataSet 완료
 * @asis for=ds_railroadFarecutRate event=OnLoadCompleted(rowCnt)
 */
scwin.ds_railroadFarecutRate_OnLoadCompleted = async function (rowCnt) {
  totalRows.setValue(rowCnt);
  if (rowCnt != 0) return;
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  ;
};

/**
 * @method 
 * @name ds_procedureCall_OnLoadCompleted 
 * @description 요율생성
 * @asis for=ds_procedureCall event=OnLoadCompleted(rowCnt)
 */
scwin.ds_procedureCall_OnLoadCompleted = async function (rowCnt) {
  await $c.win.alert($p, ds_procedureCall.getCellData(0, "prtn2"));
};

/**
 * @method 
 * @name dlt_onload 
 * @description DataList의 데이터가 전체적으로 변경(set)되는 경우 발생
 */
scwin.dlt_onload = function () {
  if (this.getRowPosition() == null && this.getRowCount() > 0) {
    this.setRowPosition(0);
    scwin.gridSetFocus(this, 'adptDt', 0, gr_Results, totalRows);
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
  scwin.gridSetFocus(this, 'adptDt', rowIdx, gr_Results, totalRows);
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
  scwin.gridSetFocus(this, 'adptDt', clacIdx, gr_Results, totalRows);
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
 * @name gr_Results_oncellclick 
 * @description 셀이 클릭된 경우 발생
 * @asis for=gr_Results event=OnClick(row,colid)
 */
scwin.gr_Results_oncellclick = function (rowIndex, columnIndex, columnId) {
  //버튼제어
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Save, btn_Delete, btn_Proc]);
  if (ds_railroadFarecutRate.getCellData(rowIndex, "expireDt") == "99999999") {
    $c.gus.cfDisableBtnOnly($p, [btn_Save]);
  } else {
    $c.gus.cfDisableBtnOnly($p, [btn_Modify, btn_Save, btn_Delete, btn_Proc]);
  }
  ;
  if (ds_railroadFarecutRate.getRowStatus(rowIndex) == "C") {
    scwin.f_objEnable("M");
  } else {
    scwin.f_objDisable();
  }
  ;
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
 * @name btn_Modify_onclick 
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
 * @name btn_Delete_onclick 
 * @description 삭제 버튼 클릭 시 발생
 */
scwin.btn_Delete_onclick = function (e) {
  scwin.f_DeleteRow();
};

/**
 * @method 
 * @name gridFormat
 * @description 그리드 customFormatter
 */
scwin.gridFormat = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  switch (colID) {
    case "cutRt":
      if (data == "") return 0;
      return formattedData;
  }
  ;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'철송임적용구분별저감율 등록',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'shbox ',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'display: none;',edFromId:'ed_qryStDt',edToId:'ed_qryEndDt',mandatoryFrom:'true',objTypeFrom:'data',objTypeTo:'data',titleFrom:'적용기간'}},{T:1,N:'w2:inputCalendar',A:{id:'ica_qryStDt',style:'width: 90px;',calendarValueType:'yearMonthDate',objType:'data',mandatory:'true',title:'적용기간',class:''}},{T:1,N:'w2:textbox',A:{id:'',label:'~',style:'',class:'w2tabcontrol_bridge w2tabcontrol_contents_bridge_selected'}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',id:'ica_qryEndDt',style:'width: 90px;',objType:'data',ref:'data:dma_calendar.to',class:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'철송임적용구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_railroadFareAdptClsCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',chooseOptionLabel:'전체',validExp:'철송임적용구분:yes:length=2'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_railroadFarecutRate',style:'',autoFit:'allColumn',id:'gr_Results',class:'wq_gvw',visibleRowNum:'15',rowStatusVisible:'true',visibleRowNumFix:'true',validExp:'adptDt:적용시작일자:yes:date=YYYYMMDD',dataName:'저감율','ev:oncellclick':'scwin.gr_Results_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'적용시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'적용종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column15',value:'철송임적용구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column13',value:'저감율(%)',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'adptDt',displayMode:'label',displayFormat:'yyyy/MM/dd',textAlign:'center',mandatory:'true',dataType:'date',readOnly:' '}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'expireDt',displayMode:'label',textAlign:'center',displayFormat:'yyyy/MM/dd',dataType:'date',readOnly:' '}},{T:1,N:'w2:column',A:{width:'150',inputType:'select',id:'railroadFareAdptClsCd',displayMode:'value delim label',textAlign:'left',displayFormatter:'scwin.gubun',imageStyle:'text',readOnly:' '}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'cutRt',displayMode:'label',textAlign:'right',maxLength:'5',allowChar:'0-9',dataType:'number',displayFormat:'#,##0.00',customFormatter:'scwin.gridFormat',readOnly:' '}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적용시작일자 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ica_adptDt',style:'',mandatory:'true',displayFormat:'yyyy/MM/dd',ref:'data:ds_railroadFarecutRate.adptDt',validExp:'적용시작일자:yes:date=YYYYMMDD',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적용종료일자 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ica_expireDt',style:'',displayFormat:'yyyy/MM/dd',ref:'data:ds_railroadFarecutRate.expireDt',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'철송임적용구분 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w100',editType:'select',id:'acb_railroadFareAdptClsNm',search:'start',style:'',submenuSize:'auto',ref:'data:ds_railroadFarecutRate.railroadFareAdptClsCd',allOption:'',chooseOptionLabel:' ',chooseOption:'',displayMode:'label',validExp:'철송임적용구분:yes:length=2',mandatory:'true',emptyIndex:'-1',emptyItem:'true'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'저감율(%)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w100 tar',id:'ed_fareCutRate',placeholder:'',style:'',maxlength:'3.2',allowChar:'0-9.',ref:'data:ds_railroadFarecutRate.cutRt',objType:'data',mandatory:'true',validExp:'저감율:yes:maxNumber=100',dataType:'float',byteCheckIgnoreChar:'.'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Proc',style:'',type:'button','ev:onclick':'scwin.btn_Proc_onclick',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'요율생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Create',style:'',type:'button','ev:onclick':'scwin.btn_Create_onclick',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Modify',style:'',type:'button','ev:onclick':'scwin.btn_Modify_onclick',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Cancel',style:'',type:'button',objType:'bCancel','ev:onclick':'scwin.btn_Cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick',userAuth:'D',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]}]}]}]}]})