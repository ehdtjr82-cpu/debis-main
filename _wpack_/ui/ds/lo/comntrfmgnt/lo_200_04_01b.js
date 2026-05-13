/*amd /ui/ds/lo/comntrfmgnt/lo_200_04_01b.xml 48347 aa3c11410cbcdaa9f8ecd42f5c0b41fec7f9e06df9760b3a90654bfc0bf4e251 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_basetrf',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'작업점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'작업점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_basetrfList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalTrf',name:'요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalTrfSeq',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidCommNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidArvDistrictNm',name:'name13',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_basetrfListExcel',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'commCd',name:'name90',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'name91',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'name92',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name93',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalTrf',name:'name94',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkStpCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieveDetail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_up_tariff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'commCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalTrf',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comntrfmgnt.RetrieveInternalTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_basetrf","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_basetrf","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_detail',action:'/ds.lo.comntrfmgnt.RetrieveInternalTariffDetailListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieveDetail","key":"IN_DS1"},{"id":"ds_basetrfList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_basetrfList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_detail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comntrfmgnt.SaveInternalTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_basetrfList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strCurDate2 = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.lobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); //  물류상위점소코드

scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId; //사용자

scwin.hid_step_no = "";
scwin.hid_lobran_cd = "";
scwin.hid_lobran_Nm = "";
scwin.MSG_LO_CRM_001 = "변경 사항이 존재합니다. 진행하시겠습니까?";
scwin.MSG_LO_ERR_002 = "@행, @칼럼의 코드가 일치하지 않습니다.";
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
  const parram2 = [{
    method: "getLuxeComboData",
    param1: "WorkStepEBC",
    param2: "retrieveWkrPlEachWorkStepList",
    param3: ["2"],
    compID: "lc_cnd_LkStepNo,lc_LkStepNo"
  }];
  $c.data.setGauceUtil($p, parram2);
  const codeOptions = [{
    grpCd: "ZZ006",
    compID: "gr_basetrfList:crcCd"
  } // 통화
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// 초기화 - 조회값
//------------------------------------------------------------------------- 
scwin.f_FieldClear = function (e) {
  scwin.pos_groupCode = 0;
  $c.gus.cfInitObjects($p, tbl_search, null);
  //작업단계 첫번째값 선택 
  lc_cnd_LkStepNo.setValue("");
  //오늘날짜 세팅
  ed_adptDt.setValue(scwin.strCurDate2);

  //버튼초기화 
  $c.gus.cfDisableObjects($p, [btn_save, lc_LkStepNo, ed_adptDt]);
  udc_comCode_lobran.setDisabled(true); //udc 행추가 비활성 
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
  //입력 조건절 초기화 
  ed_lobranCd.setValue("");
  ed_lobranNm.setValue("");
  ed_adptDt.setValue(scwin.strCurDate2);
  ds_basetrfList.removeAll();
  //dataMap set
  dma_retrieve.set("wrkStpCd", lc_cnd_LkStepNo.getValue()); //작업단계코드	
  dma_retrieve.set("lobranCd", ed_cnd_lobranCd.getValue()); //작업점소코드

  $c.sbm.execute($p, sbm_retrieve);
};
//-------------------------------------------------------------------------
// 조회 버튼 클릭 함수의 CallBack 함수.
//-------------------------------------------------------------------------  
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_basetrf.getRowCount();
  if (nCnt > 0) {
    total.setValue(nCnt);
    let options = {};
    options.sortIndex = "lobranNm adptDt";
    options.sortOrder = "1 -1";
    ds_basetrf.multisort(options);
    gr_basetrf.setFocusedCell(scwin?.pos_groupCode || 0, 0);
    scwin.pos_groupCode = 0;
  } else {
    lc_LkStepNo.setValue(lc_cnd_LkStepNo.getValue());
    ed_lobranCd.setValue(ed_cnd_lobranCd.getValue());
    ed_lobranNm.setValue(ed_cnd_lobranNm.getValue());

    //조건절 disabled
    $c.gus.cfDisableObjects($p, [btn_save, lc_LkStepNo, ed_adptDt]);
    udc_comCode_lobran.setDisabled(true); //udc 행추가 비활성 
    $c.gus.cfEnableObjects($p, [btn_new, btn_edit]);
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); //조회결과가 존재하지 않습니다.
  }
  $c.gus.cfEnableObjects($p, [btn_new, btn_edit]);
  $c.gus.cfDisableObjects($p, [btn_save]);
  udc_comCode_lobran.setDisabled(true); //udc 행추가 비활성 
  $c.gus.cfDisableObjects($p, [btn_addRow, btn_delRow, btn_cancelRow]);
};

//-----------------------------------------------------------------------------
// 표준원가 상세목록(gr_basetrfList) ROW 변경선택 함수.
//----------------------------------------------------------------------------- 
scwin.gr_basetrfList_onrowindexchange = function (rowIndex, oldRow) {
  if (ds_basetrfList.getRowStatusValue(rowIndex) == 0) {
    gr_basetrfList.setCellReadOnly(rowIndex, "commNm", true); //grid column edit 가능
  } else {
    gr_basetrfList.setCellReadOnly(rowIndex, 'commNm', false);
  }
  $c.gus.cfPrepareHidVal($p, ds_basetrfList, rowIndex, ["commCd", "commNm", "unitCd"]);
};

//-------------------------------------------------------------------------
// 작업 점소 UDC 이벤트 호출 되는 함수 START
//------------------------------------------------------------------------- 
scwin.udc_comCode_cnd_lobran_onclickEvent = function (e) {
  const code = ed_cnd_lobranCd.getValue();
  const name = ed_cnd_lobranNm.getValue();
  udc_comCode_cnd_lobran.cfCommonPopUp(scwin.udc_comCode_cnd_lobran_callBackFunc, code, name, 'T', "5", "작업점소코드,작업점소명", null, null, 'A,B,', null, null, null, null, null, null, "작업점소조회,작업점소코드,작업점소명");
};
scwin.udc_comCode_cnd_lobran_onblurCodeEvent = function (e) {
  if (ed_cnd_lobranCd.originalValue != ed_cnd_lobranCd.getValue()) {
    const code = ed_cnd_lobranCd.getValue();
    const name = "";
    ed_cnd_lobranNm.setValue("");
    if (code != "") {
      udc_comCode_lobran.cfCommonPopUp(scwin.udc_comCode_cnd_lobran_callBackFunc, code, name, 'T', "5", "작업점소코드,작업점소명", null, null, 'A,B,', null, null, null, null, null, null, "작업점소조회,작업점소코드,작업점소명");
    }
  }
};
scwin.udc_comCode_cnd_lobran_onblurNameEvent = function (e) {
  if (ed_cnd_lobranNm.originalValue != ed_cnd_lobranNm.getValue()) {
    const code = "";
    const name = ed_cnd_lobranNm.getValue();
    ed_cnd_lobranCd.setValue("");
    if (name != "") {
      udc_comCode_lobran.cfCommonPopUp(scwin.udc_comCode_cnd_lobran_callBackFunc, code, name, 'T', "5", "작업점소코드,작업점소명", null, null, 'A,B,', null, null, null, null, null, null, "작업점소조회,작업점소코드,작업점소명");
    }
  }
};
scwin.udc_comCode_cnd_lobran_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_cnd_lobranCd, ed_cnd_lobranNm);
};

//-------------------------------------------------------------------------
// 작업 점소 UDC 이벤트 호출 되는 함수 END
//------------------------------------------------------------------------- 

//-------------------------------------------------------------------------
// 신규입력시 작업 점소 UDC 이벤트 호출 되는 함수 START
//------------------------------------------------------------------------- 
scwin.udc_comCode_lobran_onclickEvent = function (e) {
  const code = ed_lobranCd.getValue();
  const name = ed_lobranNm.getValue();
  udc_comCode_lobran.cfCommonPopUp(scwin.udc_comCode_lobran_callBackFunc, code, name, 'T', "5", "작업점소코드,작업점소명", null, null, 'A,B,', null, null, null, null, null, null, "작업점소조회,작업점소코드,작업점소명");
};
scwin.udc_comCode_lobran_onblurCodeEvent = function (e) {
  if (ed_lobranCd.originalValue != ed_lobranCd.getValue()) {
    const code = ed_lobranCd.getValue();
    const name = "";
    ed_lobranNm.setValue("");
    if (code != "") {
      udc_comCode_lobran.cfCommonPopUp(scwin.udc_comCode_lobran_callBackFunc, code, name, 'T', "5", "작업점소코드,작업점소명", null, null, 'A,B,', null, null, null, null, null, null, "작업점소조회,작업점소코드,작업점소명");
    }
  }
};
scwin.udc_comCode_lobran_onblurNameEvent = function (e) {
  if (ed_lobranNm.originalValue != ed_lobranNm.getValue()) {
    const code = "";
    const name = ed_lobranNm.getValue();
    ed_lobranCd.setValue("");
    if (name != "") {
      udc_comCode_lobran.cfCommonPopUp(scwin.udc_comCode_lobran_callBackFunc, code, name, 'T', "5", "작업점소코드,작업점소명", null, null, 'A,B,', null, null, null, null, null, null, "작업점소조회,작업점소코드,작업점소명");
    }
  }
};
scwin.udc_comCode_lobran_callBackFunc = function (ret) {
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
  let fileName = '작업노드 내부요율목록.xlsx';
  let sheetName = '작업노드 내부요율목록';
  await $c.data.downloadGridViewExcel($p, gr_basetrf, {
    fileName,
    sheetName,
    hiddenVisible: true
  });
};
scwin.f_GridToExcel_basetrfList = async function () {
  if (ds_basetrfList.getRowCount() <= 0) {
    $c.win.alert($p, "내역이 존재하지않습니다.");
    return false;
  }
  let fileName = '작업노드 내부요율상세목록.xlsx';
  let sheetName = '작업노드 내부요율상세목록';
  await $c.data.downloadGridViewExcel($p, gr_basetrfList, {
    fileName,
    sheetName,
    hiddenVisible: true
  });
};

//-----------------------------------------------------------------------------
// 표준원가 상세목록(gr_basetrfList) 품목/품명 코드 명, 단위 코드 명, 출발지, 도착지  가지고 오는 함수. START
//-----------------------------------------------------------------------------  
//grid 품명 pop
scwin.comm_pop_grid = function () {
  const rowIndex = ds_basetrfList.getRowPosition();
  const code = "";
  const name = ds_basetrfList.getCellData(rowIndex, "commNm");
  udc_comCode_comm_grid.cfCommonPopUp(scwin.udc_comCode_comm_grid_callBackFunc, code, name, "T", "3", "품목/품명코드,품목/품명,구분", null, null, '2,4', null, null, null, null, null, "F", "품목/품명조회,품목/품명코드,품목/품명");
};
//grid 단위 pop
scwin.unit_pop_grid = function () {
  const rowIndex = ds_basetrfList.getRowPosition();
  const code = ds_basetrfList.getCellData(rowIndex, "unitCd");
  const name = "";
  udc_comCode_unit_grid.cfCommonPopUp(scwin.udc_comCode_unit_grid_callBackFunc, code, name, "T", null, null, null, null, "LO102,,", null, null, null, null, "F", "공통코드조회,코드,코드명");
};
scwin.gr_basetrfList_onafteredit = function (rowIndex, columnIndex, value) {
  const columnId = gr_basetrfList.getColumnID(columnIndex);
  if (columnId == "commNm") {
    if (value != scwin.commNm_oldValue) {
      const code = "";
      const name = value;
      ds_basetrfList.setCellData(rowIndex, "commCd", "");
      if (name != "") {
        udc_comCode_comm_grid.cfCommonPopUp(scwin.udc_comCode_comm_grid_callBackFunc, code, name, "T", "3", "품목/품명코드,품목/품명,구분", null, null, '2,4', null, null, null, null, null, "F", "품목/품명조회,품목/품명코드,품목/품명");
      }
    }
  } else if (columnId == "unitCd") {
    if (value != scwin.unitCd_oldValue) {
      const code = value;
      const name = "";
      ds_basetrfList.setCellData(rowIndex, "unitNm", "");
      if (code != "") {
        udc_comCode_unit_grid.cfCommonPopUp(scwin.udc_comCode_unit_grid_callBackFunc, code, name, "T", null, null, null, null, "LO102,,", null, null, null, null, null, "F", "공통코드조회,코드,코드명");
      }
    }
  }
};

//grid pop callback
scwin.udc_comCode_comm_grid_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ds_basetrfList.setCellData(ds_basetrfList.getRowPosition(), "commCd", ret[[0]]);
    ds_basetrfList.setCellData(ds_basetrfList.getRowPosition(), "commNm", ret[[1]]);
  } else {
    ds_basetrfList.setCellData(ds_basetrfList.getRowPosition(), "commCd", "");
    ds_basetrfList.setCellData(ds_basetrfList.getRowPosition(), "commNm", "");
  }
};
scwin.udc_comCode_unit_grid_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ds_basetrfList.setCellData(ds_basetrfList.getRowPosition(), "unitCd", ret[[0]]);
    ds_basetrfList.setCellData(ds_basetrfList.getRowPosition(), "unitNm", ret[[1]]);
  } else {
    ds_basetrfList.setCellData(ds_basetrfList.getRowPosition(), "unitCd", "");
    ds_basetrfList.setCellData(ds_basetrfList.getRowPosition(), "unitNm", "");
  }
};
scwin.udc_comCode_unit_grid_callBackFunc = function (ret) {
  //그리드에 set(전역변수)    
  ds_basetrfList.setCellData(ds_basetrfList.getRowPosition(), "unitCd", ret[[0]]);
  ds_basetrfList.setCellData(ds_basetrfList.getRowPosition(), "unitNm", ret[[1]]);
};
scwin.gr_basetrfList_onbeforeedit = function (rowIndex, columnIndex, value) {
  const columnId = gr_basetrfList.getColumnID(columnIndex);
  if (columnId == "commNm") {
    scwin.commNm_oldValue = value;
  } else if (columnId == "unitCd") {
    scwin.unitCd_oldValue = value;
  }
};
//-----------------------------------------------------------------------------
// 표준원가 상세목록(gr_basetrfList) 품목/품명 코드 명, 단위 코드 명, 출발지, 도착지  가지고 오는 함수. END
//-----------------------------------------------------------------------------  

scwin.gr_basetrf_onrowindexchange = async function (rowIndex, oldRow) {
  if (ds_basetrf.getRowStatusValue(rowIndex) != 2) {
    //조건절 disabled
    lc_LkStepNo.setValue(ds_basetrf.getCellData(rowIndex, "wrkStpCd")); //작업단계
    ed_lobranCd.setValue(ds_basetrf.getCellData(rowIndex, "lobranCd")); //물류점소코드 
    ed_lobranNm.setValue(ds_basetrf.getCellData(rowIndex, "lobranNm")); //물류점소명
    ed_adptDt.setValue(ds_basetrf.getCellData(rowIndex, "adptDt")); //적용일자

    $c.gus.cfDisableObjects($p, [btn_save, lc_LkStepNo, ed_adptDt]);
    udc_comCode_lobran.setDisabled(true); //udc 행추가 비활성 
    $c.gus.cfDisableObjects($p, [btn_addRow, btn_delRow, btn_cancelRow]);
    $c.gus.cfEnableObjects($p, [btn_new, btn_edit]);
    if (ds_basetrfList.getModifiedIndex().length > 0) {
      let confirm = await $c.win.confirm($p, scwin.MSG_LO_CRM_001);
      if (confirm) {
        //선택된 행에 해당하는 상세내역 조회 	
        scwin.f_RetrieveDetail();
      } else {
        return;
      }
    }

    //선택된 행에 해당하는 상세내역 조회 	
    scwin.f_RetrieveDetail();
  }
};
//grid2 조회
scwin.f_RetrieveDetail = function () {
  dma_retrieveDetail.set("wrkStpCd", ds_basetrf.getCellData(ds_basetrf.getRowPosition(), "wrkStpCd")); //작업단계코드
  dma_retrieveDetail.set("adptDt", ds_basetrf.getCellData(ds_basetrf.getRowPosition(), "adptDt")); //적용일자
  dma_retrieveDetail.set("lobranCd", ds_basetrf.getCellData(ds_basetrf.getRowPosition(), "lobranCd")); //물류점소코드

  $c.sbm.execute($p, sbm_retrieve_detail);
};

//grid2 조회 callback
scwin.sbm_retrieve_detail_submitdone = function () {
  gr_basetrfList.setReadOnly("grid", true); //grid readonly

  let nCnt = ds_basetrfList.getRowCount();
  if (nCnt > 0) {
    gr_basetrfList.setFocusedCell(0, 0);
    total2.setValue(nCnt);
  }
};

//-------------------------------------------------------------------------
// 하단에 신규 버튼 클리시 호출 함수.
//-------------------------------------------------------------------------  
scwin.btn_new_onclick = function (e) {
  //적용일자 초기화 세팅	
  lc_LkStepNo.setValue("");
  ed_lobranCd.setValue("");
  ed_lobranNm.setValue("");
  ed_adptDt.setValue(scwin.strCurDate2);
  ds_basetrfList.removeAll();
  gr_basetrfList.setReadOnly("grid", false);
  $c.gus.cfEnableObjects($p, [btn_save, lc_LkStepNo, udc_comCode_lobran, ed_adptDt]);
  $c.gus.cfEnableObjects($p, [btn_addRow, btn_delRow, btn_cancelRow]);
  $c.gus.cfDisableObjects($p, [btn_edit, btn_new]);

  //작업점소 Focus
  ed_lobranCd.focus();
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
scwin.addRow = function () {
  const nRow = ds_basetrfList.getRowCount();
  if (nRow > 0) {
    $c.gus.cfCopyRecord($p, gr_basetrfList);
    gr_basetrfList.setFocusedCell(nRow, 0);
    gr_basetrfList.getColumnID(1);
  } else {
    const rowIndex = ds_basetrfList.getRowPosition();
    ds_basetrfList.insertRow(nRow);
    gr_basetrfList.setFocusedCell(nRow, "commNm");
    ds_basetrfList.setCellData(rowIndex, "crcCd", "KRW");
    ds_basetrfList.setCellData(rowIndex, "wrkStpCd", lc_LkStepNo.getValue());
    ds_basetrfList.setCellData(rowIndex, "lobranCd", ed_lobranCd.getValue());
    ds_basetrfList.setCellData(rowIndex, "lobranNm", ed_lobranNm.getValue());
    ds_basetrfList.setCellData(rowIndex, "adptDt", ed_adptDt.getValue());
    gr_basetrfList.getColumnID(1);
  }
};
//-------------------------------------------------------------------------
// 표준원가 상세목록 하단 저장 버튼 클릭 함수.
//-------------------------------------------------------------------------  
scwin.btn_save_onclick = async function (e) {
  const checkYn = await scwin.f_ReqFieldChk();
  if (checkYn) {
    let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirm) {
      //저장하기전 조회조건값 확인
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
//저장 callback
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.win.alert($p, MSG_CM_INF_001);
    ds_basetrfList.removeAll();
    lc_cnd_LkStepNo.setValue(scwin.hid_step_no);
    ed_cnd_lobranCd.setValue(scwin.hid_lobran_cd);
    ed_cnd_lobranNm.setValue(scwin.hid_lobran_Nm);
    //조회
    scwin.btn_retrieve_onclick();
  }
};
//-------------------------------------------------------------------------
// 저장시 필수 입력항목 체크 함수
//-------------------------------------------------------------------------
scwin.f_ReqFieldChk = async function () {
  if (ds_basetrfList.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["작업노드 내부요율"]); //"@은(는) 변경된 사항이 없습니다.";
    return false;
  }
  let chk = await $c.gus.cfValidate($p, [lc_LkStepNo, ed_adptDt], null, true); //  작업단계, 적용일자 필수 항목 Check 
  if (!chk) {
    return false;
  }
  let lobranCd = ed_lobranCd.getValue(); // 작업점소코드 CHECK
  let lobranNm = ed_lobranNm.getValue(); // 작업점소명   CHECK
  if ($c.util.isEmpty($p, lobranCd) || $c.util.isEmpty($p, lobranNm)) {
    let messageTxt = "작업점소가 입력 되지 않았습니다.\n저장하시겠습니까?";
    const checkNoLobran = await $c.win.confirm($p, messageTxt.replaceAll("\n", "<br/>"));
    if (!checkNoLobran) {
      if ($c.util.isEmpty($p, lobranCd)) ed_lobranCd.focus();else if ($c.util.isEmpty($p, lobranNm)) ed_lobranNm.focus();
      return false;
    }
  }
  let edAdptDt = ed_adptDt.getValue(); //적용일자 GRID에 세팅
  let wrkStpCd = lc_LkStepNo.getValue(); //작업단계 GRID에 세팅

  for (i = 0; i < ds_basetrfList.getRowCount(); i++) {
    ds_basetrfList.setCellData(i, "adptDt", edAdptDt);
    ds_basetrfList.setCellData(i, "wrkStpCd", wrkStpCd);
    ds_basetrfList.setCellData(i, "lobranCd", lobranCd);
    ds_basetrfList.setCellData(i, "lobranNm", lobranNm);
  }
  chk = await $c.gus.cfValidate($p, [gr_basetrfList], null, true);
  if (!chk) {
    return false;
  }
  return true;
};

/** ***********************************************************************
 *  EXCEL UPLOAD 관련 함수 정의 START
 ************************************************************************ */
//-------------------------------------------------------------------------
// UDC에서 EXCEL Upload 클릭 되는 함수
//-------------------------------------------------------------------------
scwin.f_excelUpload = async function (...e) {
  console.log("f_excelUpload", ...e);
  const fileExt = udcGrdExcel.getUpExt();
  let options = {
    fileName: "gridDataUpload.xlsx",
    status: "C",
    header: "1",
    type: "1",
    startRowIndex: 1 // 시작row
  };
  ds_basetrfListExcel.removeAll();
  if (fileExt == "1") {
    // CSV
    options.skipSpace = "1"; // 공백무시 여부(1이면 무시 0이면 포함) 
    options.hidden = "0"; // 왼쪽히든값유무(미포함)
    options.fillHidden = "0"; // 오른쪽히든값유무(무시)
    await $c.data.uploadGridViewCSV($p, gr_basetrfListExcel, options);
  } else {
    options.headerExist = "1";
    options.footerExist = "0";
    options.directUpload = false;
    await $c.data.uploadGridViewExcel($p, gr_basetrfListExcel, options);
  }
};

//-------------------------------------------------------------------------
// EXCEL File Upload 후 호출 되는 함수
//-------------------------------------------------------------------------
scwin.gr_basetrfListExcel_onfilereadend = function (fileName) {
  // 
  scwin.f_importExcelFile(fileName);
};
scwin.f_importExcelFile = async function (fileName) {
  if (ds_basetrfListExcel.getRowCount() == 0) {
    $c.gus.cfProgressWinClose($p);
    await $c.win.alert($p, MSG_CM_ERR_003);
    return;
  }
  const checkUpLoadData = await scwin.f_CheckUpLoadData();
  if (checkUpLoadData) {
    const checkExcelUploadToDsList = await scwin.f_excelUploadToDsList();
    if (checkExcelUploadToDsList) {
      $c.gus.cfProgressWinClose($p);
      await $c.win.alert($p, "업로드작업이 완료되었습니다.");
    }
  }
};
scwin.f_CheckUpLoadData = async function () {
  const fileExt = udcGrdExcel.getUpExt();
  const extNm = fileExt == "1" ? "CSV" : "엑셀";
  let messageTxt = "";
  const colCount = ds_basetrfListExcel.getTotalCol();
  const rowCount = ds_basetrfListExcel.getTotalRow();
  const firstRow = ds_basetrfListExcel.getDataRow(0);
  const gridColCount = 5;
  if (colCount != gridColCount || $c.util.isEmpty($p, firstRow["commCd"]) || firstRow["commCd"].startsWith("품목")) {
    $c.gus.cfProgressWinClose($p);
    messageTxt = "업로드 " + extNm + " 파일의 형식이 잘못되었습니다." + "\n엑셀 업로드 기본양식은 엑셀다운로드후," + "\n첫번째 타이틀 행, 두번째 공백행, 마지막 합계행을 제거하고" + "\n사용하시면 됩니다. 파일형식을 확인후 다시 업로드하시길 바랍니다." + "\n컬럼값이 상이합니다. [형식=" + gridColCount + "개] 입력한값 => " + colCount;
    await $c.win.alert($p, messageTxt.replaceAll("\n", "<br/>"));
    return false;
  }
  const columnInfo = {
    "commCd": "품목/품명코드",
    "unitCd": "단위",
    "crcCd": "통화",
    "internalTrf": "요율"
  };
  for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    const rowData = ds_basetrfListExcel.getDataRow(rowIndex);
    messageTxt = "";

    // footer check 
    if (rowData["commCd"] == "합계") {
      messageTxt = "업로드 " + extNm + " 파일의 형식이 잘못되었습니다.\n" + "사용하신 " + extNm + "파일의 마지막 합계행을 제거하고,\n" + "다시 사용하시길 바랍니다.";
      await $c.win.alert($p, messageTxt.replaceAll("\n", "<br/>"));
      return false;
    }
    const nullDataKeyInfo = Object.keys(columnInfo).filter(key => $c.gus.cfIsNull($p, rowData[key]));
    messageTxt = nullDataKeyInfo.map(errorKey => {
      return ` - [${rowIndex}] 번째 행의 [${columnInfo[errorKey]}] 값이 없습니다.`;
    }).join("\n");
    if (messageTxt != "") {
      $c.gus.cfProgressWinClose($p);
      messageTxt = "업로드 " + extNm + " 파일의 데이터가 잘못되었습니다.\n" + messageTxt + "\n" + "사용하신 " + extNm + "파일의 데이터를 확인 후,\n다시 업로드하시길 바랍니다.";
      await $c.win.alert($p, messageTxt.replaceAll("\n", "<br/>"));
      return false;
    }
  }
  return true;
};
scwin.f_excelUploadToDsList = async function () {
  const rowCount = ds_basetrfListExcel.getRowCount();
  if (rowCount > 0) {
    ds_basetrfList.removeAll();
    const wrkStpCd = lc_LkStepNo.getValue(); // 작업단계코드
    const adptDt = ed_adptDt.getValue(); // 적용일자
    const lobranCd = ed_lobranCd.getValue(); // 작업점소코드
    const lobranNm = ed_lobranNm.getValue(); // 작업점소명
    let commCd = ""; // 품명코드
    let commNm = ""; // 품명
    let unitCd = ""; // 단위코드
    let crcCd = ""; // 통화코드
    let internalTrf = ""; // 요율
    let rtnList = [];
    const jsonData = [];
    const crcCdCommCodeList = $c.util.isEmpty($p, dlt_commonCodeZZ006) ? [] : dlt_commonCodeZZ006.getAllJSON();
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      const rowData = ds_basetrfListExcel.getDataRow(rowIndex);

      /* ------------ 품명코드 --------------------- */
      commCd = rowData["commCd"];
      rtnList = await udc_comCode_comm_grid.cfCommonPopUpAsync(await function (rtnList) {
        return rtnList;
      }, commCd, "", "T", "3", "품목/품명코드,품목/품명,구분", null, null, '2,4', null, null, null, null, null, "F", "품목/품명조회,품목/품명코드,품목/품명", "T");
      if (rtnList == "N/A") {
        await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_002, [rowIndex, "품명코드"]);
        ds_basetrfList.ClearData();
        ds_basetrfListExcel.ClearData();
        return;
      } else {
        commCd = rtnList.at(0);
        commNm = rtnList.at(1);
      }

      /* ------------ 나머지 값 --------------------- */
      unitCd = rowData["unitCd"];
      crcCd = rowData["crcCd"];
      internalTrf = rowData["internalTrf"];
      crcCd = crcCdCommCodeList.find(codeInfo => codeInfo.cd == crcCd || codeInfo.cdNm.includes(crcCd))?.cd || crcCd;
      try {
        internalTrf = Number(internalTrf.replaceAll(",", ""));
      } catch (e) {
        internalTrf = 0;
      }
      jsonData.push({
        wrkStpCd,
        lobranCd,
        lobranNm,
        adptDt,
        commCd,
        commNm,
        unitCd,
        crcCd,
        internalTrf
      });
    }
    console.table(jsonData);
    ds_basetrfList.setJSON(jsonData);
    ds_basetrfList.modifyAllStatus("C");
    // 엑셀 업로드 
    // - 활성화   : 저장버튼, 행관련버튼, 신규 작업단계 항목, 신규 작업점소 항목, 적용일자 항목
    // - 비활성화 : 신규버튼, 수정 버튼 

    $c.gus.cfEnableObjects($p, [btn_save, lc_LkStepNo, udc_comCode_lobran, ed_adptDt]);
    $c.gus.cfEnableObjects($p, [btn_addRow, btn_delRow, btn_cancelRow]);
    $c.gus.cfDisableObjects($p, [btn_new, btn_edit]);
  }
};

/** ***********************************************************************
 *  EXCEL UPLOAD 관련 함수 정의 END
 ************************************************************************ */

scwin.gr_basetrfList_onbeforeedit = function (rowIndex, columnIndex, value) {};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업단계',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_cnd_LkStepNo',search:'start',style:'width: 150px;',submenuSize:'fixed',mandatory:'true',visibleRowNum:'10'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_cnd_lobranCd',nameId:'ed_cnd_lobranNm',popupID:'',selectID:'retrieveLogisDeptInfo',style:'width:%; height:px; ',validTitle:'',id:'udc_comCode_cnd_lobran',UpperFlagCode:'1',maxlengthCode:'4','ev:onclickEvent':'scwin.udc_comCode_cnd_lobran_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_cnd_lobran_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCode_cnd_lobran_onblurNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',allowCharCode:'0-9A-Za-z'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'작업단계',class:'req'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'fixed',editType:'select',style:'width: 150px;',id:'lc_LkStepNo',class:'',mandatory:'true',validExp:'작업단계:yes'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업점소',style:''}},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',codeId:'ed_lobranCd',nameId:'ed_lobranNm',id:'udc_comCode_lobran',maxlengthCode:'4',UpperFlagCode:'1',selectID:'retrieveLogisDeptInfo',allowCharCode:'0-9a-zA-Z','ev:onclickEvent':'scwin.udc_comCode_lobran_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_lobran_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onblurNameEvent':'scwin.udc_comCode_lobran_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용일자',style:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_adptDt',style:'',mandatory:'true',validExp:'적용일자:yes:date=YYYYMMDD'}}]}]}]},{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 내부요율목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'Y',btnPlusYn:'Y',gridID:'gr_basetrf',gridDownFn:'scwin.f_GridToExcel_basetrf',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw row',dataList:'data:ds_basetrf',focusMode:'row',id:'gr_basetrf',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true',readOnly:'true','ev:onrowindexchange':'scwin.gr_basetrf_onrowindexchange',focusMove:'true',selectedRowColor:'#400000'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'작업점소코드 ',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'작업점소',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'적용일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'lobranCd',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'lobranNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'adptDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'내부요율상세목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'Y',btnPlusYn:'Y',gridID:'gr_basetrfList',gridDownFn:'scwin.f_GridToExcel_basetrfList',gridUpFn:'scwin.f_excelUpload',id:'udcGrdExcel',btnUser:'N',gridDownUserAuth:'X',gridUpUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_basetrfList',focusMode:'row',id:'gr_basetrfList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13','ev:onrowindexchange':'scwin.gr_basetrfList_onrowindexchange','ev:onafteredit':'scwin.gr_basetrfList_onafteredit','ev:onbeforeedit':'scwin.gr_basetrfList_onbeforeedit',dataName:'내부요율상세목록',validFeatures:'ignoreStatus=no',validExp:'commNm:품목/품명:yes:minLength=1:key,unitCd:단위:yes:minLength=1,crcCd:통화:yes:minLength=1,internalTrf:요율:yes:minNumber=0.01',visibleRowNumFix:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column12',inputType:'text',value:'품목/품명코드',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'품목/품명',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column10',inputType:'text',value:'단위',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'통화',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'요율',width:'70',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'textImage',width:'120',mandatory:'true',viewType:'default',textAlign:'left',imageClickFunction:'scwin.comm_pop_grid'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'textImage',width:'70',mandatory:'true',viewType:'default',textAlign:'left',imageClickFunction:'scwin.unit_pop_grid'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'select',width:'70',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'internalTrf',inputType:'text',width:'70',mandatory:'true',dataType:'float',displayFormat:'#,##0.00',textAlign:'right',excelCellType:'number',excelFormat:'#,##0.00',maxLength:'15.2'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn',gridID:'gr_basetrfList',btnRowAddObj:'btn_addRow',btnCancelObj:'btn_cancelRow',btnRowDelObj:'btn_delRow',rowAddFunction:'scwin.addRow',btnCancelYn:'Y',btnDelYn:'N',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_new',style:'',type:'button','ev:onclick':'scwin.btn_new_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'btn_edit',style:'',type:'button','ev:onclick':'scwin.btn_edit_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCommInfo',codeId:'pCode',validTitle:'',nameId:'pName',style:'width:%; height:px;display: none;',id:'udc_comCode_comm_grid'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCommCdInfo',codeId:'pCode',validTitle:'',nameId:'pName',style:'width:%; height:px;display: none;',id:'udc_comCode_unit_grid'}},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_basetrfListExcel',id:'gr_basetrfListExcel','ev:onfilereadend':'scwin.gr_basetrfListExcel_onfilereadend',style:'display: none;',focusMode:'row',focusMove:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column91',inputType:'text',value:'품목/품명코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column92',inputType:'text',value:'품목/품명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column93',inputType:'text',value:'단위',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column98',inputType:'text',value:'통화',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column99',inputType:'text',value:'요율',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'internalTrf',inputType:'text',width:'70',dataType:'number'}}]}]}]},{T:1,N:'w2:textbox',A:{id:'tbx_textbox1',label:'※ 엑셀업로드 양식은 엑셀다운로드 양식과 동일 합니다.',style:'width:627px;height:45px;color:#0000FF;    margin-top: -38px;',escape:'false'}}]}]}]}]}]})