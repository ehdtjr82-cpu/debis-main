/*amd /ui/ds/op/adjmbd/pchstrfmgnt/op_401_02_04b.xml 30285 2d0ff64d2e734a6f01d8321328c278b33a765ed29062d4fb32843290ce2132c0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_railroadFrates',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow','ev:oncelldatachange':'scwin.ds_railroadFrates_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtDt',name:'적용시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDtKey',name:'적용시작일자(Key)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'적용종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frt20Ft',name:'20FULL',dataType:'number'}},{T:1,N:'w2:column',A:{id:'frt40Ft',name:'40FULL',dataType:'number'}},{T:1,N:'w2:column',A:{id:'frt45Ft',name:'45FULL',dataType:'number'}},{T:1,N:'w2:column',A:{id:'emptyDcRt',name:'EMPTY할인율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'existRow',name:'기존Row',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryStDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_procedureCall',saveRemovedData:'true','ev:ondataload':'scwin.dlt_onload','ev:oninsertrow':'scwin.dlt_oninsertrow','ev:onremoverow':'scwin.dlt_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prtn2',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_railroadFratesAlias'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expireDt',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.RetrieveRailroadAmountPerDistanceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_railroadFrates","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_railroadFrates","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_procedureCall',action:'/ds.op.adjmbd.pchstrfmgnt.ExecuteDistanceEachRailroadTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_procedureCall","key":"OUT_DS1"}',target:'data:json,{"id":"ds_procedureCall","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.SaveRailroadAmountPerDistanceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_railroadFrates","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_check',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_railroadFratesAlias","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
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
  scwin.sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  ed_qryStDt.setValue(scwin.sCurrDate);
  ed_qryEndDt.setValue("99999999");
  ed_qryStDt.focus();
  scwin.f_objDisable();
  ed_qryEndDt.setDisabled(true);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Modify, btn_Cancel, btn_Save, btn_Delete, btn_Proc]);
};

/**
 * @method 
 * @name f_Retrieve 
 * @description 조회
 */
scwin.f_Retrieve = async function () {
  const validQryDate = await $c.gus.cfValidate($p, [ed_qryStDt], null, true);
  if (!validQryDate) return;
  dma_search.set("qryStDt", ed_qryStDt.getValue());
  dma_search.set("qryEndDt", ed_qryEndDt.getValue());
  scwin.f_objDisable();
  ds_railroadFrates.removeAll();

  //버튼제어
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Cancel, btn_Save, btn_Delete, btn_Proc]);
  $c.gus.cfDisableBtnOnly($p, [btn_Cancel, btn_Save]);
  gr_railroadFrates.setDisabled("grid", false);
  await scwin.submitExcute(sbm_search);
};

/**
 * @method 
 * @name f_ctrtDtValidate 
 * @description 적용시작일자 Validation Check (이전 적용시작일자 보다 커야된다)
 */
scwin.f_ctrtDtValidate = async function () {
  const validGrid = await $c.gus.cfValidate($p, [gr_railroadFrates], null, true);
  if (!validGrid) return false;
  return true;
};

/**
 * @method 
 * @name f_DeleteRow 
 * @description 삭제
 */
scwin.f_DeleteRow = async function () {
  if (ds_railroadFrates.getRowCount() == 1) {
    await $c.win.alert($p, "데이타가 한건인 경우 삭제 하실수 없습니다.");
    return;
  }
  ;
  const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (!retConfirm) return;
  const focusIdx = ds_railroadFrates.getRowPosition();
  ds_railroadFrates.deleteRow(focusIdx);
  if (focusIdx == 0 || ds_railroadFrates.getRowStatus(focusIdx) == 'D') {
    ds_railroadFrates.setCellData(focusIdx + 1, "expireDt", "99999999");
  }
  ;
  await scwin.submitExcute(sbm_save);
};

/**
 * @method 
 * @name f_Save 
 * @description 저장
 */
scwin.f_Save = async function () {
  const targetComps = [ica_ctrtDt, ed_frt20Ft, ed_frt40Ft, ed_frt45Ft, ed_emptyDcRt];
  const validComps = await $c.gus.cfValidate($p, targetComps, null, true);
  if (!validComps) return;
  const row = ds_railroadFrates.getRowPosition();
  const rowData = ds_railroadFrates.getRowJSON(row);

  // ica_expireDt.setValue("99999999");
  ds_railroadFrates.setCellData(0, "expireDt", "99999999");
  dma_railroadFratesAlias.set("ctrtDt", rowData.ctrtDt);
  dma_railroadFratesAlias.set("expireDt", rowData.expireDt);
  let anctionStr = "";
  switch (ds_railroadFrates.getRowStatus(row)) {
    //신규
    case "C":
      anctionStr = "/ds.op.adjmbd.pchstrfmgnt.RetrieveRailroadFratesNewProperYnCMD.do";
      break;
    // 수정
    case "U":
      anctionStr = "/ds.op.adjmbd.pchstrfmgnt.RetrieveRailroadFratesModifyProperYnCMD.do";
      break;
    default:
      return;
  }
  ;
  sbm_check.action = anctionStr;
  await scwin.submitExcute(sbm_check);
};

/**
 * @method 
 * @name f_Create 
 * @description 신규
 */
scwin.f_Create = function () {
  ds_railroadFrates.insertRow(0);
  scwin.f_objEnable();

  //버튼제어
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Cancel, btn_Save, btn_Delete, btn_Proc]);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Modify, btn_Delete, btn_Proc]);

  // gr_railroadFrates.setGridReadOnly(true);
  gr_railroadFrates.setDisabled("grid", true);
  ica_ctrtDt.focus();
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

  // gr_railroadFrates.setGridReadOnly(true);
  gr_railroadFrates.setDisabled("grid", true);
  scwin.f_objEnable();

  //focus 설정
  ica_ctrtDt.focus();
};

/**
 * @method 
 * @name f_objDisable 
 * @description obj Disable
 */
scwin.f_objDisable = function () {
  ica_ctrtDt.setDisabled(true);
  ica_expireDt.setDisabled(true);
  ed_frt20Ft.setDisabled(true);
  ed_frt40Ft.setDisabled(true);
  ed_frt45Ft.setDisabled(true);
  ed_emptyDcRt.setDisabled(true);
};

/**
 * @method 
 * @name f_objEnable 
 * @description obj Enable
 */
scwin.f_objEnable = function () {
  ica_ctrtDt.setDisabled(false);
  ica_expireDt.setDisabled(true);
  ed_frt20Ft.setDisabled(false);
  ed_frt40Ft.setDisabled(false);
  ed_frt45Ft.setDisabled(false);
  ed_emptyDcRt.setDisabled(false);
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
  ed_qryStDt.setValue(scwin.sCurrDate);
  ed_qryEndDt.setValue("99999999");
  ed_qryStDt.focus();
};

/**
 * @method 
 * @name f_Cancel 
 * @description 취소
 */
scwin.f_Cancel = function () {
  scwin.f_objDisable();

  // gr_railroadFrates.setGridReadOnly(false);
  gr_railroadFrates.setDisabled("grid", false);
  $c.data.undoAll($p, ds_railroadFrates);
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
    case sbm_check:
      if (e.responseJSON.resultDataSet[0].Code == -1) {
        ica_ctrtDt.focus();
      }
      ;

      /** for=tr_check event=OnSuccess() */
      const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_001);
      if (!retConfirm) return;
      if (ds_railroadFrates.getRowCount() > 1) {
        ds_railroadFrates.setCellData(0, "expireDt", "99999999");
      }
      ;
      const MAX_VALUE = 2147483647;
      const focusIdx = ds_railroadFrates.getRowPosition();
      const rowData = ds_railroadFrates.getRowJSON(focusIdx);
      const targetCols = ['frt20Ft', 'frt40Ft', 'frt45Ft'];
      targetCols.forEach(colId => {
        const targetVal = rowData[colId];
        ds_railroadFrates.setCellData(focusIdx, colId, targetVal > MAX_VALUE ? MAX_VALUE : targetVal);
      });
      await scwin.submitExcute(sbm_save);
      break;
    case sbm_save:
      // 저장 TR 
      if (e.responseJSON.resultDataSet[0].Code == -1) return;

      /** for=tr_save event=OnSuccess() */
      await scwin.f_Retrieve();
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
      scwin.f_objDisable();

      //버튼제어
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Save, btn_Delete, btn_Proc]);
      $c.gus.cfDisableBtnOnly($p, [btn_Save]);
      break;
    case sbm_search:
      // 조회 TR 
      // 철송임률조회 DataSet 완료
      scwin.ds_railroadFrates_OnLoadCompleted(ds_railroadFrates.getRowCount());
      break;
    case sbm_procedureCall:
      // 요율생성
      scwin.ds_procedureCall_OnLoadCompleted(ds_procedureCall.getRowCount());
      break;
    default:
      break;
  }
};

/**
 * @method 
 * @name ds_railroadFrates_OnLoadCompleted 
 * @asis for=ds_railroadFrates event=OnLoadCompleted(rowCnt)
 */
scwin.ds_railroadFrates_OnLoadCompleted = async function (rowCnt) {
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
 * @name ds_procedureCall_OnLoadCompleted 
 * @asis for=ds_procedureCall event=OnLoadCompleted(rowCnt)
 */
scwin.ds_procedureCall_OnLoadCompleted = async function (rowCnt) {
  await $c.win.alert($p, ds_procedureCall.getCellData(0, "prtn2"));
};

// /**
//  * @method 
//  * @name ds_procedureCall_OnLoadCompleted
//  * @description 하나의 셀에 대한 값이 변경된 경우 발생
//  */
// scwin.ds_railroadFrates_oncelldatachange = function (info) {

//     const { colID, newValue, rowIndex } = info;

//     if (["frt20Ft", "frt40Ft", "frt45Ft", "emptyDcRt"].includes(colID)) {
//         if (newValue == ""){
//             this.setCellData(rowIndex, colID, 0);
//         };
//     };

// };

/**
 * @method 
 * @name dlt_onload 
 * @description DataList의 데이터가 전체적으로 변경(set)되는 경우 발생
 */
scwin.dlt_onload = function () {
  if (this.getRowPosition() == null && this.getRowCount() > 0) {
    this.setRowPosition(0);
    scwin.gridSetFocus(this, 'ctrtDt', 0, gr_railroadFrates);
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
  scwin.gridSetFocus(this, 'ctrtDt', rowIdx, gr_railroadFrates);
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
  scwin.gridSetFocus(this, 'ctrtDt', clacIdx, gr_railroadFrates);
};

/**
 * @method 
 * @name gridSetFocus 
 * @description dataList 이벤트 후 그리드 실제 포커스 처리
 */
scwin.gridSetFocus = function (dataList, defaultCol, rowIndex, targetGrid) {
  if (dataList != targetGrid._dataList) return;
  const focusCol = targetGrid.getFocusedColumnID() ?? defaultCol;
  targetGrid.setFocusedCell(rowIndex, focusCol);
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name submitdone 
 * @description 셀이 클릭된 경우 발생
 * @asis for=gr_railroadFrates event=OnClick(row,colid)
 */
scwin.gr_railroadFrates_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_railroadFrates.getRowStatus(rowIndex) == "C") {
    scwin.f_objEnable();
  } else {
    scwin.f_objDisable();
  }
  ;
  const rowCnt = ds_railroadFrates.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    if (ds_railroadFrates.getRowStatus(i) == 'U') {
      //버튼제어
      $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Save, btn_Delete, btn_Proc]);
      $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Modify, btn_Delete, btn_Proc]);
      return;
    }
    ;
  }
  ;
  if (ds_railroadFrates.getRowStatus(0) == 'C') {
    //버튼제어
    $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Save, btn_Delete, btn_Proc]);
    $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Modify, btn_Delete, btn_Proc]);
    return;
  }
  ;

  //버튼제어
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Modify, btn_Save, btn_Delete, btn_Proc]);
  if (ds_railroadFrates.getCellData(rowIndex, "expireDt") == "99999999") {
    $c.gus.cfDisableBtnOnly($p, [btn_Save]);
  } else {
    $c.gus.cfDisableBtnOnly($p, [btn_Modify, btn_Save, btn_Delete, btn_Proc]);
  }
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
 * @description 신규 버튼 클릭 시 발생
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
 * @event 
 * @name gridFormat 
 * @description 그리드 Formatter
 */
scwin.gridFormat = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  switch (colID) {
    case "frt20Ft":
    case "frt40Ft":
    case "frt45Ft":
      if (data == "") return "0";else return formattedData;
    case "emptyDcRt":
      if (data == "") return "0.00";else return formattedData;
  }
  ;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'철송임률등록',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_qryStDt',edToId:'ed_qryEndDt',mandatoryFrom:'true',objTypeFrom:'data',objTypeTo:'data',titleFrom:'적용기간'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox wfix  flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_railroadFrates',id:'gr_railroadFrates',style:'',focusMove:'true',rowStatusVisible:'true',visibleRowNum:'14',visibleRowNumFix:'true',validExp:'ctrtDt:적용시작일자:yes:date=YYYYMMDD:key',dataName:'철송임률','ev:oncellclick':'scwin.gr_railroadFrates_oncellclick',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'적용시작일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'적용시작일자<br/>(Key)',width:'100',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'적용종료일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'Km당 단가(원)',width:'280',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'기존Row',width:'70',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column27',value:'20FULL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column26',value:'40FULL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column25',value:'45FULL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'EMPTY할인율',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtDt',inputType:'calendar',style:'',value:'',width:'100',textAlign:'center',displayFormat:'yyyy/MM/dd',dataType:'date',mandatory:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtDtKey',inputType:'text',style:'',value:'',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'expireDt',inputType:'calendar',style:'',value:'',width:'100',textAlign:'center',displayFormat:'yyyy/MM/dd',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'frt20Ft',inputType:'text',style:'',value:'',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',customFormatter:'scwin.gridFormat'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'frt40Ft',inputType:'text',style:'',value:'',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',customFormatter:'scwin.gridFormat'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'frt45Ft',inputType:'text',style:'',value:'',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',customFormatter:'scwin.gridFormat'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'emptyDcRt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',allowChar:'0-9',dataType:'number',displayFormat:'#,##0.00',readOnly:'true',customFormatter:'scwin.gridFormat'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'existRow',inputType:'text',style:'',value:'',width:'70',textAlign:'right',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적용시작일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{ref:'data:ds_railroadFrates.ctrtDt',style:'',id:'ica_ctrtDt',class:'form-control cal',mandatory:'true',calendarValueType:'yearMonthDate',validExp:'적용시작일자:yes:date=YYYYMMDD',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적용종료일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{ref:'data:ds_railroadFrates.expireDt',style:'',id:'ica_expireDt',class:'form-control cal',calendarValueType:'yearMonthDate',objType:'data',dateValidCheck:'false',keepInvalidDate:'true',validCheck:'false',dateValidSet:'false',displaymessage:'false'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'임률20FULL',class:'req',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_railroadFrates.frt20Ft',dataType:'number',style:'',id:'ed_frt20Ft',placeholder:'',allowChar:'0-9',class:'form-control w150 tar',objType:'data',mandatory:'true',validExp:'임률20FT:yes:minNumber=1',maxByteLength:'13',byteCheckIgnoreChar:',','ev:onblur':'scwin.ed_frt20Ft_onblur',displayFormat:'#,###'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'임률40FULL',class:'req',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_railroadFrates.frt40Ft',style:'',id:'ed_frt40Ft',placeholder:'',allowChar:'0-9',class:'form-control w150 tar',mandatory:'true',objType:'data',validExp:'임률40FT:yes:minNumber=1',maxByteLength:'13',byteCheckIgnoreChar:',','ev:onblur':'scwin.ed_frt40Ft_onblur',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'임률45FULL',class:'req',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_railroadFrates.frt45Ft',style:'',id:'ed_frt45Ft',placeholder:'',allowChar:'0-9',class:'form-control w150 tar',mandatory:'true',objType:'data',validExp:'임률45FT:yes:minNumber=1',maxByteLength:'13',byteCheckIgnoreChar:',','ev:onblur':'scwin.ed_frt45Ft_onblur',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'EMPTY할인율',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_railroadFrates.emptyDcRt',maxlength:'3.2',style:'',id:'ed_emptyDcRt',placeholder:'',allowChar:'0-9.',class:'form-control w150 tar',mandatory:'true',objType:'data',validExp:'EMPTY할인율:yes:minNumber=1','ev:onblur':'scwin.ed_frt20Ft_onblur',dataType:'float',displayFormat:'#.###.##'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Proc',style:'',type:'button','ev:onclick':'scwin.btn_Proc_onclick',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'요율생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',style:'',type:'button','ev:onclick':'scwin.btn_Create_onclick',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Modify',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Modify_onclick',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',style:'',type:'button','ev:onclick':'scwin.btn_Cancel_onclick',objType:'bCancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick',objType:'ctrlBtn',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]})