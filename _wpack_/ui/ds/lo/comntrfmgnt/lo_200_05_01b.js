/*amd /ui/ds/lo/comntrfmgnt/lo_200_05_01b.xml 46054 cbbf89f1b067b1db5ddaefe39b0b3b97326199c63e4aad75494ca9d04402799c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_basetrf',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_basetrf_onbeforerowpositionchange','ev:onrowpositionchange':'scwin.ds_basetrf_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'작업점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'작업점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_basetrfList',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'commCd',name:'품목/품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품목/품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stndPcostUnitCd',name:'원가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stndPcost',name:'표준원가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unitNm',name:'단위명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidCommNm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stndPcostSeqTrfSeq',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stndPcostSeq',name:'name15',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'작업점소코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieveDetail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStpCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comntrfmgnt.RetrieveStandardPrimeCostListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_basetrf","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_basetrf","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_sunmitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_detail',action:'/ds.lo.comntrfmgnt.RetrieveStandardPrimeCostDetailListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieveDetail","key":"IN_DS1"},{"id":"ds_basetrfList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_basetrfList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_detail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comntrfmgnt.SaveStandardPrimeCostListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_basetrfList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strCurDate2 = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.lobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); //  물류상위점소코드

scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId; //사용자

scwin.pos_groupCode = 0;
scwin.hid_selpch_item_cd = "";
scwin.hid_selpch_item_Nm = "";
scwin.hid_step_no = "";
scwin.hid_lobran_cd = "";
scwin.hid_lobran_Nm = "";
scwin.MSG_LO_CRM_001 = "변경 사항이 존재합니다. 진행하시겠습니까?";

/** ***********************************************************************
 *  화면에서 기본 로딩시 발생하는 함수 START
 ************************************************************************ */
//-------------------------------------------------------------------------
// 화면 로딩시 호출 되는 함수
//------------------------------------------------------------------------- 

scwin.onpageload = function () {
  scwin.initPage();
};

//-------------------------------------------------------------------------
// 화면 에 UDC 컴포넌트가 모두 로딩 완료시 호출 되는 함수
//------------------------------------------------------------------------- 
scwin.onUdcCompleted = function () {
  scwin.f_FieldClear();
};
//-------------------------------------------------------------------------
// 초기화 - 초기 화면 ( 공통코드 ... ) 
//------------------------------------------------------------------------- 
scwin.initPage = function () {
  const params = [
  // 매입항목 코드 조회 - Luxe콤보 
  {
    method: "getLuxeComboData",
    param1: "SellpurchaseItemEBC",
    param2: "retrieveSelpchItemPchsInfoCombo",
    param3: ["1", "1"],
    compID: "lc_cnd_selpchItemCd,lc_selpchItemCd"
  },
  // 작업단계 코드 조회 
  {
    method: "getLuxeComboData",
    param1: "WorkStepEBC",
    param2: "retrieveWkrPlEachWorkStepList",
    param3: ["2"],
    compID: "lc_cnd_LkStepNo,lc_LkStepNo"
  }];
  $c.data.setGauceUtil($p, params);
  const codeOptions = [{
    grpCd: "LO134",
    compID: "gr_basetrfList:stndPcostUnitCd"
  }]; // 원가구분
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};
// dlt_commonCodeSD113.removeColumnFilter('cd');

scwin.callBackCommonCode = function () {
  if (!$c.util.isEmpty($p, dlt_commonCodeLO134)) {
    dlt_commonCodeLO134.setJSON(dlt_commonCodeLO134.getAllJSON().map(m => {
      m["cdNm"] = `[${m["cd"]}] ${m["cdNm"]}`;
      return m;
    }));
    dlt_commonCodeLO134.reform();
  }
};

//-------------------------------------------------------------------------
// 초기화 - 조회값
//------------------------------------------------------------------------- 

scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
  //매입항목 Focus
  lc_cnd_selpchItemCd.focus();
  //오늘날짜 세팅
  ed_adptDt.setValue(scwin.strCurDate2);

  //버튼초기화 
  $c.gus.cfDisableObjects($p, [btn_save, lc_selpchItemCd, lc_LkStepNo, ed_adptDt]);
  udc_comCode_lobran2.setDisabled(true); //udc pop 비활성 
  $c.gus.cfDisableObjects($p, [btn_addRow, btn_delRow, btn_cancelRow]);
  $c.gus.cfEnableObjects($p, [btn_edit, btn_new]);
};

/** ***********************************************************************
 *  화면에서 기본 로딩시 발생하는 함수 END
 ************************************************************************ */

/** ***********************************************************************
 *  화면에서 호출되는 컴포넌트의 이벤트 관련 함수 정의  START 
 ************************************************************************ */
//-------------------------------------------------------------------------
// 조회 버튼 클릭 함수.
//-------------------------------------------------------------------------  
scwin.btn_retrieve_onclick = async function (e) {
  if (ds_basetrfList.getModifiedIndex().length > 0) {
    let confirm = await $c.win.confirm($p, scwin.MSG_LO_CRM_001);
    if (!confirm) return false;
  }
  ds_basetrfList.removeAll();
  ed_lobranCd.setValue("");
  ed_lobranNm.setValue("");
  ed_adptDt.setValue(scwin.strCurDate2);

  //dataMap set..	
  dma_retrieve.set("selpchItemCd", lc_cnd_selpchItemCd.getValue()); //매입항목코드
  dma_retrieve.set("wrkStpCd", lc_cnd_LkStepNo.getValue()); //작업단계코드	
  dma_retrieve.set("lobranCd", ed_cnd_lobranCd.getValue()); //작업점소코드

  $c.sbm.execute($p, sbm_retrieve);
};
//-------------------------------------------------------------------------
// 조회 버튼 클릭 함수의 CallBack 함수.
//-------------------------------------------------------------------------  
scwin.sbm_retrieve_sunmitdone = function () {
  let nCnt = ds_basetrf.getRowCount();
  total.setValue(nCnt);
  if (nCnt > 0) {
    ds_basetrf.multisort({
      sortIndex: "wrkStpNm lobranNm adptDt",
      sortOrder: "1 1 -1"
    });
    $c.gus.cfGoPrevPosition($p, gr_basetrf, scwin.pos_groupCode);

    //        gr_basetrf.setFocusedCell(0, scwin.pos_groupCode);
    total.setValue(nCnt);
  } else {
    lc_selpchItemCd.setValue(lc_cnd_selpchItemCd.getValue());
    lc_LkStepNo.setValue(lc_cnd_LkStepNo.getValue());
    ed_lobranCd.setValue(ed_cnd_lobranCd.getValue());
    ed_lobranNm.setValue(ed_cnd_lobranNm.getValue());

    //조건절 disabled
    $c.gus.cfDisableObjects($p, [btn_save, lc_selpchItemCd, lc_LkStepNo, ed_adptDt]);
    udc_comCode_lobran2.setDisabled(true); //udc pop 비활성 
    $c.gus.cfEnableObjects($p, [btn_new, btn_edit]);
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); //조회결과가 존재하지 않습니다.
  }
  $c.gus.cfEnableObjects($p, [btn_new, btn_edit]);
  $c.gus.cfDisableObjects($p, [btn_save]);
  $c.gus.cfDisableObjects($p, [btn_addRow, btn_delRow, btn_cancelRow]);
};

//-------------------------------------------------------------------------
// 표준원가 목록 그리드 ROW 선택시 
//-------------------------------------------------------------------------  

scwin.ds_basetronbeforerowpositionchange = async function (info) {
  return false;
  const rowIndex = info.newRowIndex;
  if ($c.util.isEmpty($p, rowIndex)) return true;
  if (ds_basetrf.getRowStatusValue(rowIndex) != 2) {
    if (ds_basetrfList.getModifiedIndex().length > 0) {
      let confirm = await $c.win.confirm($p, scwin.MSG_LO_CRM_001);
      if (!confirm) {
        return false;
      }
    }
  }
};
scwin.ds_basetrf_onrowpositionchange = function (info) {
  return false;
  const rowIndex = info.newRowIndex;
  lc_selpchItemCd.setValue(ds_basetrf.getCellData(rowIndex, "selpchItemCd")); // 매입항목코드
  lc_LkStepNo.setValue(ds_basetrf.getCellData(rowIndex, "wrkStpCd")); // 작업단계
  ed_lobranCd.setValue(ds_basetrf.getCellData(rowIndex, "lobranCd")); // 작업점소코드 
  ed_lobranNm.setValue(ds_basetrf.getCellData(rowIndex, "lobranNm")); // 작업점소명
  ed_adptDt.setValue(ds_basetrf.getCellData(rowIndex, "adptDt")); // 적용일자

  $c.gus.cfDisableObjects($p, [btn_save, lc_selpchItemCd, lc_LkStepNo, ed_adptDt]);
  udc_comCode_lobran2.setDisabled(true); //udc pop 비활성 
  $c.gus.cfDisableObjects($p, [btn_addRow, btn_delRow, btn_cancelRow]);
  $c.gus.cfEnableObjects($p, [btn_new, btn_edit]);
  scwin.f_RetrieveDetail();
};
scwin._revertingNode = false;
scwin.gr_basetrf_onrowindexchange = async function (rowIndex, oldRow) {
  if (scwin._revertingNode) {
    scwin._revertingNode = false;
    return false;
  }
  if (ds_basetrf.getRowStatusValue(rowIndex) != 2) {
    //조건절 disabled
    lc_selpchItemCd.setValue(ds_basetrf.getCellData(rowIndex, "selpchItemCd")); // 매입항목코드
    lc_LkStepNo.setValue(ds_basetrf.getCellData(rowIndex, "wrkStpCd")); // 작업단계
    ed_lobranCd.setValue(ds_basetrf.getCellData(rowIndex, "lobranCd")); // 작업점소코드 
    ed_lobranNm.setValue(ds_basetrf.getCellData(rowIndex, "lobranNm")); // 작업점소명
    ed_adptDt.setValue(ds_basetrf.getCellData(rowIndex, "adptDt")); // 적용일자

    $c.gus.cfDisableObjects($p, [btn_save, lc_selpchItemCd, lc_LkStepNo, ed_adptDt]);
    udc_comCode_lobran2.setDisabled(true); //udc pop 비활성 
    $c.gus.cfDisableObjects($p, [btn_addRow, btn_delRow, btn_cancelRow]);
    $c.gus.cfEnableObjects($p, [btn_new, btn_edit]);
    if (ds_basetrfList.getModifiedIndex().length > 0) {
      let confirm = await $c.win.confirm($p, scwin.MSG_LO_CRM_001);
      if (confirm) {
        //선택된 행에 해당하는 상세내역 조회 	
        scwin.f_RetrieveDetail();
      } else {
        scwin._revertingNode = true;
        gr_basetrf.setFocusedCell(oldRow, "adptDt", false);
        return false;
      }
    }

    //선택된 행에 해당하는 상세내역 조회 	
    scwin.f_RetrieveDetail();
  }
};

//-------------------------------------------------------------------------
// 하단에 신규 버튼 클리시 호출 함수.
//-------------------------------------------------------------------------  
scwin.btn_new_onclick = function (e) {
  //적용일자 초기화 세팅
  lc_selpchItemCd.setValue("");
  lc_LkStepNo.setValue("");
  ed_lobranCd.setValue("");
  ed_lobranNm.setValue("");
  ed_adptDt.setValue(scwin.strCurDate2);
  ds_basetrfList.removeAll();
  gr_basetrfList.setReadOnly("grid", false);
  $c.gus.cfEnableObjects($p, [btn_save, lc_selpchItemCd, lc_LkStepNo, udc_comCode_lobran2, ed_adptDt]);
  $c.gus.cfEnableObjects($p, [btn_addRow, btn_delRow, btn_cancelRow]);
  $c.gus.cfDisableObjects($p, [btn_edit, btn_new]);

  //매입항목 Focus
  lc_selpchItemCd.focus();
};

//-------------------------------------------------------------------------
// 하단에 수정 버튼 클리시 호출 함수.
//-------------------------------------------------------------------------  
scwin.btn_edit_onclick = function (e) {
  if (ds_basetrfList.getRowCount() > 0) {
    gr_basetrfList.setReadOnly("grid", false);
    $c.gus.cfEnableObjects($p, [btn_save]);
    $c.gus.cfEnableObjects($p, [btn_addRow, btn_delRow, btn_cancelRow]);
    $c.gus.cfDisableObjects($p, [btn_edit, btn_new]);
  } else {
    $c.gus.cfAlertMsg($p, "조회 후 처리하시기 바랍니다.");
  }
};

//-------------------------------------------------------------------------
// 표준원가 상세 목록 하단 행 추가시 호출 함수.
//-------------------------------------------------------------------------  
scwin.f_AddRow = function () {
  let nRow = ds_basetrfList.getRowCount();
  if (ds_basetrfList.getRowCount() > 0) {
    $c.gus.cfCopyRecord($p, gr_basetrfList);
    gr_basetrfList.setFocusedCell(nRow, "commNm", true);
  } else {
    ds_basetrfList.insertRow(nRow);
    ds_basetrfList.setCellData(nRow, "selpchItemCd", lc_selpchItemCd.getValue());
    ds_basetrfList.setCellData(nRow, "selpchItemNm", lc_selpchItemCd.getText()); //명칭
    ds_basetrfList.setCellData(nRow, "wrkStpCd", lc_LkStepNo.getValue());
    ds_basetrfList.setCellData(nRow, "lobranCd", ed_lobranCd.getValue());
    ds_basetrfList.setCellData(nRow, "lobranNm", ed_lobranNm.getValue());
    ds_basetrfList.setCellData(nRow, "adptDt", ed_adptDt.getValue());
    ds_basetrfList.setCellData(nRow, "stndPcost", 0);
    gr_basetrfList.setFocusedCell(nRow, "commNm", true);
  }
};

//-------------------------------------------------------------------------
// 표준원가 상세목록 하단 저장 버튼 클릭 함수.
//-------------------------------------------------------------------------  
scwin.btn_save_onclick = async function (e) {
  const checkYn = await scwin.f_ReqFieldChk();
  if (checkYn) {
    let confirm = await $c.win.confirm($p, "저장 하시겠습니까?");
    if (confirm) {
      //저장하기전 조회조건값 확인
      scwin.hid_selpch_item_cd = lc_selpchItemCd.getValue();
      scwin.hid_step_no = lc_LkStepNo.getValue();
      scwin.hid_lobran_cd = ed_lobranCd.getValue();
      scwin.hid_lobran_Nm = ed_lobranNm.getValue();
      scwin.pos_groupCode = ds_basetrf.getRowPosition();
      $c.sbm.execute($p, sbm_save);
    }
  }
};

//-------------------------------------------------------------------------
// 표준원가 상세목록(gr_basetrfList) 하단 저장 버튼 클릭 CALL BACK 함수.
//-------------------------------------------------------------------------  
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_basetrfList.modifyAllStatus("R");
  await $c.win.alert($p, MSG_CM_INF_001);
  lc_cnd_selpchItemCd.setValue(scwin.hid_selpch_item_cd);
  lc_cnd_LkStepNo.setValue(scwin.hid_step_no);
  ed_cnd_lobranCd.setValue(scwin.hid_lobran_cd);
  ed_cnd_lobranNm.setValue(scwin.hid_lobran_Nm);
  scwin.btn_retrieve_onclick();
};

//-----------------------------------------------------------------------------
// 표준원가 상세목록(gr_basetrfList) ROW 변경선택 함수.
//----------------------------------------------------------------------------- 
scwin.gr_basetrfList_onrowindexchange = function (rowIndex, oldRow) {
  $c.gus.cfPrepareHidVal($p, ds_basetrfList, rowIndex, ["commCd", "commNm", "unitCd"]);
};

//-------------------------------------------------------------------------
// 작업 점소 UDC 이벤트 호출 되는 함수 START
//------------------------------------------------------------------------- 

scwin.udc_comCode_lobran_onclickEvent = function (e) {
  const code = ed_cnd_lobranCd.getValue();
  const name = ed_cnd_lobranNm.getValue();
  udc_comCode_lobran.cfCommonPopUp(scwin.udc_comCode_lobran_callBackFunc, code, name, 'F', null, null, null, null, 'A,B,', null, null, null, null, null, "F", "작업점소조회,점소코드,점소명");
};
scwin.udc_comCode_lobran_onblurCodeEvent = function (e) {
  if (ed_cnd_lobranCd.originalValue != ed_cnd_lobranCd.getValue()) {
    const code = ed_cnd_lobranCd.getValue();
    const name = "";
    ed_cnd_lobranNm.setValue("");
    if (code != "") {
      udc_comCode_lobran.cfCommonPopUp(scwin.udc_comCode_lobran_callBackFunc, code, name, 'T', null, null, null, null, 'A,B,', null, null, null, null, null, null, "작업점소조회,점소코드,점소명");
    }
  }
};
scwin.udc_comCode_lobran_onblurNameEvent = function (e) {
  if (ed_cnd_lobranNm.originalValue != ed_cnd_lobranNm.getValue()) {
    const code = "";
    const name = ed_cnd_lobranNm.getValue();
    ed_cnd_lobranCd.setValue("");
    if (name != "") {
      udc_comCode_lobran.cfCommonPopUp(scwin.udc_comCode_lobran_callBackFunc, code, name, 'T', null, null, null, null, 'A,B,', null, null, null, null, null, null, "작업점소조회,점소코드,점소명");
    }
  }
};
scwin.udc_comCode_lobran_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_cnd_lobranCd, ed_cnd_lobranNm);
};
//-------------------------------------------------------------------------
// 작업 점소 UDC 이벤트 호출 되는 함수 END
//------------------------------------------------------------------------- 

//-------------------------------------------------------------------------
// 신규입력시 작업 점소 UDC 이벤트 호출 되는 함수 START
//------------------------------------------------------------------------- 
scwin.udc_comCode_lobran2_onclickEvent = function (e) {
  const code = ed_lobranCd.getValue();
  const name = ed_lobranNm.getValue();
  udc_comCode_lobran2.cfCommonPopUp(scwin.udc_comCode_lobran2_callBackFunc, code, name, 'F', null, null, null, null, 'A,B,', null, null, null, null, null, "F", "작업점소조회,점소코드,점소명");
};
scwin.udc_comCode_lobran2_onblurCodeEvent = function (e) {
  if (ed_lobranCd.originalValue != ed_lobranCd.getValue()) {
    const code = ed_lobranCd.getValue();
    const name = "";
    ed_lobranNm.setValue("");
    if (code != "") {
      udc_comCode_lobran2.cfCommonPopUp(scwin.udc_comCode_lobran2_callBackFunc, code, name, 'T', null, null, null, null, 'A,B,', null, null, null, null, null, null, "작업점소조회,점소코드,점소명");
    }
  }
};
scwin.udc_comCode_lobran2_onblurNameEvent = function (e) {
  if (ed_lobranNm.originalValue != ed_lobranNm.getValue()) {
    const code = "";
    const name = ed_lobranNm.getValue();
    ed_lobranCd.setValue("");
    if (name != "") {
      udc_comCode_lobran2.cfCommonPopUp(scwin.udc_comCode_lobran2_callBackFunc, code, name, 'T', null, null, null, null, 'A,B,', null, null, null, null, null, null, "작업점소조회,점소코드,점소명");
    }
  }
};
scwin.udc_comCode_lobran2_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lobranCd, ed_lobranNm);
};

//-------------------------------------------------------------------------
// 신규입력시 작업 점소 UDC 이벤트 호출 되는 함수 END
//------------------------------------------------------------------------- 

//-------------------------------------------------------------------------
// 엑셀 다운로드 하는 함수
//------------------------------------------------------------------------- 

scwin.f_GridToExcel_basetrf = async function () {
  if (ds_basetrf.getRowCount() <= 0) {
    $c.win.alert($p, "내역이 존재하지않습니다.");
    return false;
  }
  let fileName = '표준원가목록.xlsx';
  let sheetName = '표준원가목록';
  await $c.data.downloadGridViewExcel($p, gr_basetrf, {
    fileName,
    sheetName
  });
};
scwin.f_GridToExcel_basetrfList = async function () {
  if (ds_basetrfList.getRowCount() <= 0) {
    $c.win.alert($p, "내역이 존재하지않습니다.");
    return false;
  }
  let fileName = '표준원가상세목록.xlsx';
  let sheetName = '표준원가상세목록';
  await $c.data.downloadGridViewExcel($p, gr_basetrfList, {
    fileName,
    sheetName
  });
};

//-----------------------------------------------------------------------------
// 표준원가 상세목록(gr_basetrfList) 품목/품명 코드 명 , 단위 코드 명  가지고 오는 함수. START
//-----------------------------------------------------------------------------  
scwin.isEventRunning = false;
scwin.comm_pop_grid = async function (e) {
  if (scwin.isEventRunning) return;
  scwin.isEventRunning = true;
  try {
    const rowIndex = ds_basetrfList.getRowPosition();
    const code = "";
    const name = ds_basetrfList.getCellData(rowIndex, "commNm");
    await udc_comCode_comm_grid.cfCommonPopUpAsync(scwin.udc_comCode_comm_grid_callBackFunc, code, name, "F", "3", "품목/품명코드,품목/품명,구분", null, '4,5,6,7,8,9,10', '2,4', null, null, null, null, null, "F", "품목/품명조회,품목/품명코드,품목/품명");
  } finally {
    scwin.isEventRunning = false;
  }
};
scwin.unit_pop_grid = async function (e) {
  if (scwin.isEventRunning) return;
  scwin.isEventRunning = true;
  try {
    const rowIndex = ds_basetrfList.getRowPosition();
    const code = ds_basetrfList.getCellData(rowIndex, "unitCd");
    const name = "";
    await udc_comCode_unit_grid.cfCommonPopUpAsync(scwin.udc_comCode_unit_grid_callBackFunc, code, name, "F", null, null, null, null, "LO102,,", null, null, null, null, null, "F", "공통코드조회,코드,코드명");
  } finally {
    scwin.isEventRunning = false;
  }
};
scwin.gr_basetrfList_onafteredit = async function (rowIndex, columnIndex, value) {
  if (scwin.isEventRunning) return;
  scwin.isEventRunning = true;
  try {
    const columnId = gr_basetrfList.getColumnID(columnIndex);
    if (columnId == "commNm") {
      if (value != scwin.commNm_oldValue) {
        const code = "";
        const name = value;
        ds_basetrfList.setCellData(rowIndex, "commCd", "");
        if (name != "") {
          await udc_comCode_comm_grid.cfCommonPopUpAsync(scwin.udc_comCode_comm_grid_callBackFunc, code, name, "T", "3", "품목/품명코드,품목/품명,구분", null, "4,5,6,7,8,9,10", '2,4', null, null, null, null, null, "F", "품목/품명조회,품목/품명코드,품목/품명");
          return false;
        }
      }
    } else if (columnId == "unitCd") {
      if (value != scwin.unitCd_oldValue) {
        const code = value;
        const name = "";
        ds_basetrfList.setCellData(rowIndex, "unitNm", "");
        if (code != "") {
          await udc_comCode_unit_grid.cfCommonPopUpAsync(scwin.udc_comCode_unit_grid_callBackFunc, code, name, "T", null, null, null, null, "LO102,,", null, null, null, null, null, "F", "공통코드조회,코드,코드명");
          return false;
        }
      }
    } else if (columnId == "stndPcost") {
      if (value == "") {
        ds_basetrfList.setCellData(rowIndex, "stndPcost", "0");
      }
    }
  } finally {
    scwin.isEventRunning = false;
  }
};
scwin.gr_basetrfList_onbeforeedit = function (rowIndex, columnIndex, value) {
  const columnId = gr_basetrfList.getColumnID(columnIndex);
  if (columnId == "commNm") {
    scwin.commNm_oldValue = value;
  } else if (columnId == "unitCd") {
    scwin.unitCd_oldValue = value;
  }
};
scwin.udc_comCode_comm_grid_callBackFunc = function (ret) {
  if (!$c.gus.cfIsNull($p, ret) && ret[0] != "N/A") {
    ds_basetrfList.setCellData(ds_basetrfList.getRowPosition(), "commCd", ret[[0]]);
    ds_basetrfList.setCellData(ds_basetrfList.getRowPosition(), "commNm", ret[[1]]);
  } else {
    ds_basetrfList.setCellData(ds_basetrfList.getRowPosition(), "commCd", "");
    ds_basetrfList.setCellData(ds_basetrfList.getRowPosition(), "commNm", "");
  }
};
scwin.udc_comCode_unit_grid_callBackFunc = function (ret) {
  if (!$c.gus.cfIsNull($p, ret) && ret[0] != "N/A") {
    ds_basetrfList.setCellData(ds_basetrfList.getRowPosition(), "unitCd", ret[[0]]);
    ds_basetrfList.setCellData(ds_basetrfList.getRowPosition(), "unitNm", ret[[1]]);
  } else {
    ds_basetrfList.setCellData(ds_basetrfList.getRowPosition(), "unitCd", "");
    ds_basetrfList.setCellData(ds_basetrfList.getRowPosition(), "unitNm", "");
  }
};

//-----------------------------------------------------------------------------
// 표준원가 상세목록(gr_basetrfList) 단위 코드 명 , 단위 코드 명  가지고 오는 함수. END
//----------------------------------------------------------------------------- 

/** ***********************************************************************
 *  화면에서 호출되는 컴포넌트의 이벤트 관련 함수 정의  END 
 ************************************************************************ */

/** ***********************************************************************
 *  ETC 해당 프로그램에서 사용되는 함수 정의 START
 ************************************************************************ */

//-------------------------------------------------------------------------
// 표준원가 목록 그리드 ROW 선택시  표준원가 상세목록 조회 하는 함수. START
//-------------------------------------------------------------------------  
scwin.f_RetrieveDetail = function () {
  const rowIndex = ds_basetrf.getRowPosition();
  dma_retrieveDetail.set("selpchItemCd", ds_basetrf.getCellData(rowIndex, "selpchItemCd")); //매입항목코드
  dma_retrieveDetail.set("wrkStpCd", ds_basetrf.getCellData(rowIndex, "wrkStpCd")); //작업단계코드
  dma_retrieveDetail.set("adptDt", ds_basetrf.getCellData(rowIndex, "adptDt")); //적용일자
  dma_retrieveDetail.set("lobranCd", ds_basetrf.getCellData(rowIndex, "lobranCd")); //물류점소코드

  $c.sbm.execute($p, sbm_retrieve_detail);
};
scwin.sbm_retrieve_detail_submitdone = function () {
  gr_basetrfList.setReadOnly("grid", true); // grid readonly

  let nCnt = ds_basetrfList.getRowCount();
  if (nCnt > 0) {
    gr_basetrfList.setFocusedCell(0, 0);
    total2.setValue(nCnt);
  }
};
//-------------------------------------------------------------------------
// 표준원가 목록 그리드 ROW 선택시  표준원가 상세목록 조회 하는 함수. END
//-------------------------------------------------------------------------  

//-------------------------------------------------------------------------
// 저장시 필수 입력항목 체크 함수
//-------------------------------------------------------------------------  
scwin.f_ReqFieldChk = async function () {
  if (ds_basetrfList.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["표준원가"]); //"@은(는) 변경된 사항이 없습니다.";
    return false;
  }
  let chk = await $c.gus.cfValidate($p, [lc_selpchItemCd, lc_LkStepNo, ed_adptDt], null, true); // 매입항목, 작업단계, 적용일자 필수 항목 Check ,  필수 항목 Check
  if (!chk) {
    return false;
  }
  const edAdptDt = ed_adptDt.getValue(); // 적용일자 GRID에 세팅
  const wrkStpCd = lc_LkStepNo.getValue(); // 작업단계
  const lobranCd = ed_lobranCd.getValue(); // 작업점소 코드
  const lobranNm = ed_lobranNm.getValue(); // 작업점소 명
  const selpchItemCd = lc_selpchItemCd.getValue(); // 매입항목 코드
  const selpchItemNm = lc_selpchItemCd.getText(); // 매입항목 명

  for (i = 0; i < ds_basetrfList.getRowCount(); i++) {
    if (ds_basetrfList.getRowStatus(i) == "I") {
      ds_basetrfList.setCellData(i, "adptDt", edAdptDt);
      ds_basetrfList.setCellData(i, "wrkStpCd", wrkStpCd);
      ds_basetrfList.setCellData(i, "lobranCd", lobranCd);
      ds_basetrfList.setCellData(i, "lobranNm", lobranNm);
      ds_basetrfList.setCellData(i, "selpchItemCd", selpchItemCd);
      ds_basetrfList.setCellData(i, "selpchItemNm", selpchItemNm);
    }
  }
  chk = await $c.gus.cfValidate($p, [gr_basetrfList], null, true);
  if (!chk) {
    return false;
  }
  return true;
};
/*
udc_comCode_unit_grid.cfCommonPopUp(scwin.udc_comCode_unit_grid_callBackFunc,
                                  code, name,"T",null,null,null,null,"LO102,,",null,null,null,null,null,"F","공통코드조회,코드,코드명");
pCallback, pCode, pName, pWinCloseTF, pDispCnt, pTitle, pWidth, pHidden, pWhere, pW, pH, pTop, pLeft, pExistTF, pAllSearchTF, pWtitleSearch, pNoDataCloseTF
scwin.f_callCommonPopup = function(_options){
    let compObj = ( typeof _options.commUdc == "string" ) ? $c.util.getComponent(_options.commUdc) : _options.commUdc;
    if ( $c.util.isEmpty(compObj)) {
        console.error(`${_options.commUdc} 컴포넌트가 없습니다.`);
        return false;
    }
    const callFunctionTxt = _options.callFu || "cfCommonPopUp";
    const options = Object.assign({

       },_options);   // 기본값을 등록 한다.
    compObj[callFunctionTxt]( options.callBackFn
                            , options.pCode
                            , options.pName
                            , options.pWinCloseTF
                            , options.pDispCnt
                            , options.pTitle
                            , options.pWidth
                            , options.pHidden
                            , options.pWhere
                            , options.pW
                            , options.pH
                            , options.pTop 
                            , options.pLeft 
                            , options.pExistTF
                            , options.pAllSearchTF
                            , options.pWtitleSearch
                            , options.pNoDataCloseTF
                            )
}
*/

scwin.excelFormatter = function (...params) {
  console.log(...params);
};

/** ***********************************************************************
 *  ETC 해당 프로그램에서 사용되는 함수 정의 END
 ************************************************************************ */
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_cnd_selpchItemCd',style:'width:170px;',submenuSize:'auto',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업단계',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_cnd_LkStepNo',style:'width:150px;',submenuSize:'auto',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_cnd_lobranCd',nameId:'ed_cnd_lobranNm',id:'udc_comCode_lobran',maxlengthCode:'4',selectID:'retrieveLogisDeptInfo','ev:onclickEvent':'scwin.udc_comCode_lobran_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_lobran_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCode_lobran_onblurNameEvent',UpperFlagCode:'1',allowCharCode:'0-9a-zA-Z',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'lc_selpchItemCd',style:'width:150px;',submenuSize:'auto',mandatory:'true',visibleRowNum:'10',validExp:'매입항목코드:yes:MaxLength=4',allOption:'false',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업단계',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_LkStepNo',style:'width:150px;',submenuSize:'auto',mandatory:'true',validExp:'작업단계:yes:MaxLength=4'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lobranCd',nameId:'ed_lobranNm',id:'udc_comCode_lobran2',selectID:'retrieveLogisDeptInfo','ev:onclickEvent':'scwin.udc_comCode_lobran2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_lobran2_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCode_lobran2_onblurNameEvent',allowCharCode:'0-9a-zA-Z',UpperFlagCode:'1',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',validExp:'작업점소:no:MaxLength=4',maxlengthCode:'4'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_adptDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',mandatory:'true',validExp:'적용일자:yes:date=YYYYMMDD'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'표준원가목록',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'Y',btnPlusYn:'Y',gridID:'gr_basetrf',gridDownFn:'scwin.f_GridToExcel_basetrf',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_basetrf',style:'',autoFit:'allColumn',id:'gr_basetrf',visibleRowNum:'14',class:'wq_gvw',focusMode:'row',focusMove:'true',readOnly:'true','ev:onrowindexchange':'scwin.gr_basetrf_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'작업단계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'작업점소코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'작업점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column13',value:'적용일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lobranCd',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lobranNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',id:'adptDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'total',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'표준원가상세목록',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',btnPlusYn:'Y',gridID:'gr_basetrfList',gridDownFn:'scwin.f_GridToExcel_basetrfList',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_basetrfList',style:'',autoFit:'allColumn',id:'gr_basetrfList',visibleRowNum:'14',class:'wq_gvw',focusMode:'row',focusMove:'true',rowStatusVisible:'true','ev:onrowindexchange':'scwin.gr_basetrfList_onrowindexchange',commNm_oldValue:'',unitCd_oldValue:'','ev:onafteredit':'scwin.gr_basetrfList_onafteredit','ev:onbeforeedit':'scwin.gr_basetrfList_onbeforeedit',dataName:'표준원가상세목록',validFeatures:'ignoreStatus=no',validExp:'commNm:품명:yes:minLength=1:key,unitCd:단위:yes:minLength=1,stndPcostUnitCd:원가구분:yes:minLength=1,stndPcost:표준원가:yes:minNumber=0','ev:ontextimageclick':'scwin.gr_basetrfList_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'품목/품명코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column17',value:'품목/품명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'단위',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'원가구분',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'표준원가',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'commCd',displayMode:'label',hidden:'true',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'textImage',id:'commNm',displayMode:'label',viewType:'default',imageClickFunction:'scwin.comm_pop_grid',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'unitCd',displayMode:'label',viewType:'default',imageClickFunction:'scwin.unit_pop_grid',textAlign:'left',maxLength:'3'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'stndPcostUnitCd',displayMode:'label',allOption:'',chooseOption:'false',chooseOptionLabel:'',ref:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stndPcost',displayMode:'label',dataType:'float',displayFormat:'#,##0.##',textAlign:'right',excelFormat:'#,##0.00',maxLength:'7.2',min:'0',defaultValue:'0'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'total2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_basetrfList',btnCancelYn:'Y',btnDelYn:'N',id:'udc_bottomGrdBtn',btnRowAddObj:'btn_addRow',btnCancelObj:'btn_cancelRow',btnRowDelObj:'btn_delRow',rowAddFunction:'scwin.f_AddRow',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddObjType:'data',rowDelObjType:'data',cancelObjType:'data'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_new',label:'신규',style:'',type:'button','ev:onclick':'scwin.btn_new_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_edit',label:'수정',style:'',type:'button','ev:onclick':'scwin.btn_edit_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCommInfo',codeId:'pCode',validTitle:'',nameId:'pName',style:'width:%; height:px; display:none;',id:'udc_comCode_comm_grid'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCommCdInfo',codeId:'pCode',validTitle:'',nameId:'pName',style:'width:%; height:px; display:none;',id:'udc_comCode_unit_grid'}}]}]}]}]}]})