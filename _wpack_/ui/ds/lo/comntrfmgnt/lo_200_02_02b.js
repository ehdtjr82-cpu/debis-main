/*amd /ui/ds/lo/comntrfmgnt/lo_200_02_02b.xml 51246 1337566a5ede15b357ac3886791e7105c8995f6ffd13c19667939d32b9086c5d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transtrf',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_transtrf_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_transtrfList',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_transtrfList_onrowpositionchange','ev:oncelldatachange':'scwin.ds_transtrfList_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comnTrfSeq',name:'공통요율순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'famtFratClsCd',name:'정액정률구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comnTrf',name:'공통요율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'comnTrfRt',name:'공통요율_비율',dataType:'number',defaultValue:'0.00'}},{T:1,N:'w2:column',A:{id:'adptStdSelpchItemCd',name:'적용기준매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptStdSelpchItemNm',name:'적용기준매출입항목명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comntrfmgnt.RetrieveTransOrthersTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_view_cond","key":"IN_DS1"},{"id":"ds_transtrf","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_transtrf","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDetail',action:'/ds.lo.comntrfmgnt.RetrieveTransOrthersTariffDetailListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_transtrfList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_transtrfList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDetail_submitdone','ev:submiterror':'scwin.sbm_retrieveDetail_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comntrfmgnt.SaveTransOrthersTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_transtrfList","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류/공통(통합)/매출요율/운송/운송기타요율관리

scwin.onpageload = function () {};
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
//scwin.MSG_LO_WRN_001 = "적용일자를 입력한 후 신규 운송요율을 생성하십시오.";
scwin.MSG_LO_CRM_001 = "변경된 고시요율이 존재합니다. \n저장하지 않은 데이타는 삭제됩니다. \n계속 진행하시겠습니까?";
scwin.MSG_LO_ERR_001 = "신규버튼을 클릭하셔서 출발지와 기점을 생성하십시오.";
//scwin.MSG_LO_INF_001 = "기본항구요율을 선택하십시오";
//scwin.MSG_LO_INF_002 = "저장되지 않은 데이타가 있습니다. 저장후 별도 항구요율을 등록하시기 바랍니다.";
scwin.pos_rowSts = 0;

//scwin.isUpdate = false;
scwin.isEditChk = false;
scwin.wrkPlNm = "";
//-------------------------------------------------------------------------
// scwin.name : f_OnLoad
// scwin.desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.f_OnLoad = function () {
  scwin.f_setHeaderClassClear();
  gr_transtrfList.setHeaderClass('wrkPlNm', 'txt-blue');
  gr_transtrfList.setHeaderClass('commNm', 'txt-blue');
  gr_transtrfList.setHeaderClass('unitCd', 'txt-blue');
  gr_transtrfList.setHeaderClass('comnTrf', 'txt-blue');
  gr_transtrfList.setHeaderClass('comnTrfRt', 'txt-blue');
  scwin.f_defaultValue();
  $c.gus.cfDisableObjects($p, [btn_save, udc_addRow2]);
};
scwin.onUdcCompleted = function () {
  scwin.f_OnLoad();
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "SellpurchaseItemEBC",
    param2: "retrieveSellpurchaseItemCombo",
    param3: ["11"],
    compID: "acb_cnd_selpchItemCd,acb_selpchItemCd,gr_transtrf:selpchItemCd"
  }];
  $c.data.setGauceUtil($p, codeOptions);
};

//-------------------------------------------------------------------------
// scwin.name : f_defaultValue
// scwin.desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  $c.gus.cfDisableKey($p);
  ica_cnd_adptDt.focus();
};
scwin.f_gridChangeChk = async function () {
  //console.log('scwin.f_gridChangeChk~~~');
  //console.log(ds_transtrf.getModifiedJSON());
  //console.log(ds_transtrfList.getModifiedJSON());

  if (ds_transtrf.getModifiedJSON().length > 0 && ds_transtrf.getRowCount() > 1) {
    //신규버튼눌렀을때 제외
    var blChk = await $c.win.confirm($p, scwin.MSG_LO_CRM_001);
    return blChk;
  } else if (ds_transtrfList.getModifiedJSON().length > 0 && ds_transtrf.getRowCount() > 0) {
    //}else if (ds_transtrfList.getModifiedJSON().length > 0 && !scwin.isUpdate) {
    var blChk = await $c.win.confirm($p, scwin.MSG_LO_CRM_001);
    return blChk;
  }
};

//-------------------------------------------------------------------------
// scwin.name : f_Addrow
// scwin.desc : 그리드 칼럼 추가
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  if (ds_transtrf.getRowCount() < 1) {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_001);
    return;
  }
  if (!(await $c.gus.cfValidate($p, [dataField]))) {
    return;
  }
  for (var i = 0; i < ds_transtrf.getRowCount(); i++) {
    if ($c.gus.cfIsNull($p, ds_transtrf.getCellData(i, 'selpchItemCd'))) {
      $c.win.alert($p, '항목은(는) 필수입력 항목입니다.');
      return false;
    }
  }
  scwin.isEditChk = true;
  if (ds_transtrfList.getRowCount() == 0) {
    var row = ds_transtrfList.insertRow();
    ds_transtrfList.setCellData(row, "adptDt", ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "adptDt"));
    ds_transtrfList.setCellData(row, "selpchItemCd", ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "selpchItemCd"));
    if (ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "selpchItemCd") == "0042" || ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "selpchItemCd") == "0186") {
      ds_transtrfList.setCellData(row, "unitCd", "VAN");
    }
    if (ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "selpchItemCd") == "0186") {
      ds_transtrfList.setCellData(row, "adptStdSelpchItemCd", "0010");
    }
    gr_transtrfList.setFocusedCell(row, 'wrkPlNm', false);
  } else {
    $c.gus.cfCopyRecord($p, gr_transtrfList);
    gr_transtrfList.setFocusedCell(ds_transtrfList.getRowCount() - 1, 'wrkPlNm', false);
    ds_transtrfList.setCellData(ds_transtrfList.getRowCount() - 1, "comnTrfSeq", 0);
  }
};

//-------------------------------------------------------------------------
// scwin.name : f_Retrieve
// scwin.desc : 조회
//-------------------------------------------------------------------------

scwin.f_Retrieve = async function () {
  ds_transtrf.setJSON([]);
  ds_transtrfList.setJSON([]);
  tbx_totalRows.setValue("0");
  tbx_totalRows2.setValue("0");
  if (!(await scwin.f_validChk())) {
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// scwin.name : f_validChk
// scwin.desc : 필수 조회 조건 check
//-------------------------------------------------------------------------
scwin.f_validChk = async function () {
  ica_cnd_adptDt.setValue(ica_cnd_adptDt.getValue().trim());
  if (!$c.date.isDate($p, ica_cnd_adptDt.getValue(), false) && ica_cnd_adptDt.getValue() != "") {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_001);
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// scwin.name : f_New
// scwin.desc : 신규
//-------------------------------------------------------------------------

scwin.f_New = async function () {
  ica_adptDt.setValue(scwin.strCurDate);
  acb_selpchItemCd.setSelectedIndex(0);
  scwin.isEditChk = true;
  var row = ds_transtrf.insertRow();
  ds_transtrf.setCellData(row, "selpchItemCd", acb_selpchItemCd.getValue());
  ds_transtrf.setCellData(row, "adptDt", ica_adptDt.getValue().trim());
  $c.gus.cfEnableObjects($p, [btn_save, ica_adptDt, acb_selpchItemCd]);
  $c.gus.cfEnableObjects($p, [btn_save, udc_addRow2]);
  $c.gus.cfDisableObjects($p, [btn_edit, btn_new]);
  ds_transtrfList.setJSON([]);

  //gr_transtrf.setEventPause("", true);
  gr_transtrf.setFocusedCell(row, 'selpchItemCd', false);
  //gr_transtrf.setEventPause("", false);
};

//-------------------------------------------------------------------------
// scwin.name : f_Edit
// scwin.desc : 수정
//-------------------------------------------------------------------------
scwin.f_Edit = function () {
  scwin.isEditChk = true;
  //scwin.isUpdate = false;

  scwin.f_setGridReadOnly();
  $c.gus.cfEnableObjects($p, [btn_save, udc_addRow2]);
  $c.gus.cfDisableObjects($p, [btn_edit, btn_new]);
};

//-------------------------------------------------------------------------
// scwin.name : f_Save
// scwin.desc : 저장
//-------------------------------------------------------------------------

scwin.f_Save = async function () {
  scwin.pos_rowSts = ds_transtrf.getRowPosition();
  if (await scwin.f_ReqFieldChk()) {
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_save);
    } else {
      return false;
    }
  } else {
    return false;
  }
};

//-------------------------------------------------------------------------
// scwin.name : f_ReqFieldChk
// scwin.desc : 필수 입력항목 체크
//-------------------------------------------------------------------------
scwin.f_ReqFieldChk = async function () {
  if (ds_transtrfList.getModifiedJSON().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("운송기타요율"));
    return false;
  }

  //var i=1;

  for (i = 0; i < ds_transtrf.getRowCount(); i++) {
    if (ds_transtrfList.getRowStatus(i) != "D") {
      ds_transtrfList.setCellData(i, "updateYn", 1);
    }
  }
  if (!(await $c.gus.cfValidate($p, [gr_transtrfList], null, true))) {
    return false;
  }
  for (i = 0; i < ds_transtrfList.getRowCount(); i++) {
    switch (ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "selpchItemCd")) {
      case "0076":
        if (ds_transtrfList.getCellData(i, 'wrkPlNm') == "") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("작업장"));
          return false;
        }
        if (ds_transtrfList.getCellData(i, 'unitCd') == "") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("단위"));
          return false;
        }
        if (ds_transtrfList.getCellData(i, 'comnTrf') == 0 || ds_transtrfList.getCellData(i, 'comnTrf') == "") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("요율"));
          return false;
        }
        break;
      case "0042":
        if (ds_transtrfList.getCellData(i, 'comnTrf') == 0 || ds_transtrfList.getCellData(i, 'comnTrf') == "") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("요율"));
          return false;
        }
        break;
      case "0186":
        if (ds_transtrfList.getCellData(i, 'comnTrfRt') == 0 || ds_transtrfList.getCellData(i, 'comnTrfRt') == "") {
          await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("적용요율(%)"));
          return false;
        }
        break;
    }
  }

  //중복체크
  var errCnt = 0;
  for (var i = 0; i < ds_transtrfList.getRowCount(); i++) {
    for (var j = 0; j < ds_transtrfList.getRowCount(); j++) {
      if (i != j && ds_transtrfList.getCellData(i, 'wrkPlNm') == ds_transtrfList.getCellData(j, 'wrkPlNm') && ds_transtrfList.getCellData(i, 'commNm') == ds_transtrfList.getCellData(j, 'commNm')) {
        errCnt = j + 1;
        break;
      }
    }
    if (errCnt > 0) {
      await $c.win.alert($p, "운송기타요율의 " + errCnt + "번째 데이터에서 작업장, 품목은(는) 중복될 수 없습니다.");
      return;
    }
  }
  let validArry = [{
    id: "wrkPlNm",
    name: "작업장",
    key: false
  }, {
    id: "commNm",
    name: "품목",
    key: false
  }];
  let gridName = "운송기타요율";
  if (!(await $c.gus.cfValidateGrid($p, gr_transtrfList, null, null, validArry, gridName))) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  scwin.f_defaultValue();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_new_onclick = function (e) {
  scwin.f_New();
};
scwin.btn_edit_onclick = function (e) {
  scwin.f_Edit();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    var rowcnt = ds_transtrf.getRowCount();
    tbx_totalRows.setValue(rowcnt);
    if (rowcnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }
    ds_transtrf.sort('adptDt', 0);
    //gr_transtrf.setFocusedCell(0, "adptDt", false);
    $c.gus.cfGoPrevPosition($p, gr_transtrf, scwin.pos_rowSts);
    rowcnt = ds_transtrfList.getRowCount();
    tbx_totalRows2.setValue(rowcnt);
    scwin.isEditChk = false;
    //scwin.isUpdate = false;
  } catch (e) {
    console.log("sbm_retrieve_submitdone : " + e);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {};
scwin.sbm_retrieveDetail_submitdone = function (e) {
  $c.gus.cfEnableObjects($p, [btn_edit, btn_new]);
  $c.gus.cfDisableObjects($p, [btn_save, udc_addRow2]);

  //cfDisableObjects([btn_save, btn_add, btn_del, btn_cls]);
  var rowcnt = ds_transtrfList.getRowCount();
  tbx_totalRows2.setValue(rowcnt);
  $c.gus.cfGoPrevPosition($p, gr_transtrfList, 0);
  gr_transtrf.setFocusedCell(ds_transtrf.getRowPosition(), gr_transtrf.getFocusedColumnID());

  //$c.gus.cfGoPrevPosition(gr_transtrf, ds_transtrf.getRowPosition());
};
scwin.sbm_retrieveDetail_submiterror = function (e) {};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다 

  //scwin.isUpdate = true;

  //ds_transtrf.setJSON([]);

  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {};
scwin.ds_transtrf_onrowpositionchange = async function (info) {
  console.log("scwin.ds_transtrf_onrowpositionchange~~");
  //console.log(info);

  var row = info.newRowIndex;
  if ($c.gus.cfIsNull($p, row)) return;
  var old_row = info.oldRowIndex;
  if ($c.gus.cfIsNull($p, old_row)) {
    old_row = 0;
  }

  //console.log(ds_transtrf.getModifiedJSON().length);

  if (ds_transtrf.getRowStatus(old_row) == "C") {
    //if(ds_transtrf.getRowCount() > 0){
    if (!(await scwin.f_gridChangeChk())) {
      ds_transtrf.setEventPause("", true);
      gr_transtrf.setFocusedCell(old_row, "adptDt", false);
      ds_transtrf.setEventPause("", false);
      return false;
    } else {
      scwin.f_Retrieve();
      //return false;
    }
  }

  //if (row != 0 && ds_transtrf.getRowStatus(row) != 1) {
  if (ds_transtrf.getRowStatus(row) != "C") {
    $c.gus.cfDisableObjects($p, [ica_adptDt, acb_selpchItemCd]);
    ica_adptDt.setValue(ds_transtrf.getCellData(row, "adptDt"));
    acb_selpchItemCd.setValue(ds_transtrf.getCellData(row, "selpchItemCd"));
    var sbm_action = "/ds.lo.comntrfmgnt.RetrieveTransOrthersTariffDetailListCMD.do?adptDt=" + ds_transtrf.getCellData(row, "adptDt") + "&selpchItemCd=" + ds_transtrf.getCellData(row, "selpchItemCd");
    $c.sbm.setAction($p, sbm_retrieveDetail, sbm_action);
    $c.sbm.execute($p, sbm_retrieveDetail);
  } else {
    $c.gus.cfEnableObjects($p, [ica_adptDt, acb_selpchItemCd]);
    if (ds_transtrf.getCellData(row, "selpchItemCd") != acb_selpchItemCd.getValue()) {
      acb_selpchItemCd.setValue(ds_transtrf.getCellData(row, "selpchItemCd"));
    }

    //ds_transtrfList.setJSON([]);
  }
  switch (ds_transtrf.getCellData(row, "selpchItemCd")) {
    case "0076":
      scwin.f_setHeaderClassClear();
      gr_transtrfList.setHeaderClass('wrkPlNm', 'txt-red');
      gr_transtrfList.setHeaderClass('commNm', 'txt-blue');
      gr_transtrfList.setHeaderClass('unitCd', 'txt-red');
      gr_transtrfList.setHeaderClass('comnTrf', 'txt-red');
      break;
    case "0042":
      scwin.f_setHeaderClassClear();
      gr_transtrfList.setHeaderClass('comnTrf', 'txt-red');
      break;
    case "0186":
      scwin.f_setHeaderClassClear();
      gr_transtrfList.setHeaderClass('comnTrfRt', 'txt-red');
      ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(), "adptStdSelpchItemCd", "0010");
      break;
  }
  scwin.isEditChk = false;
};
scwin.f_setGridReadOnly = function () {
  if (!scwin.isEditChk) return;
  var row = ds_transtrf.getRowPosition();
  //console.log("newValue~" +ds_transtrf.getCellData(row, "selpchItemCd"));

  if (ds_transtrf.getRowCount() == 1 && ds_transtrf.getRowStatus(0) == "C") {
    gr_transtrfList.setReadOnly("column", 'wrkPlNm', false);
    gr_transtrfList.setReadOnly("column", 'commNm', false);
    gr_transtrfList.setReadOnly("column", 'unitCd', false);
    gr_transtrfList.setReadOnly("column", 'comnTrf', false);
    gr_transtrfList.setReadOnly("column", 'comnTrfRt', false);
    return;
  } //신규, 첫행

  gr_transtrfList.setReadOnly("column", 'wrkPlNm', false);
  gr_transtrfList.setReadOnly("column", 'commNm', false);
  gr_transtrfList.setReadOnly("column", 'unitCd', false);
  gr_transtrfList.setReadOnly("column", 'comnTrf', false);
  gr_transtrfList.setReadOnly("column", 'comnTrfRt', true);
  switch (ds_transtrf.getCellData(row, "selpchItemCd")) {
    case "0076":
      gr_transtrfList.setReadOnly("column", 'wrkPlNm', false);
      gr_transtrfList.setReadOnly("column", 'commNm', false);
      gr_transtrfList.setReadOnly("column", 'unitCd', false);
      gr_transtrfList.setReadOnly("column", 'comnTrf', false);
      gr_transtrfList.setReadOnly("column", 'comnTrfRt', true);
      break;
    case "0042":
      gr_transtrfList.setReadOnly("column", 'wrkPlNm', true);
      gr_transtrfList.setReadOnly("column", 'commNm', true);
      gr_transtrfList.setReadOnly("column", 'unitCd', true);
      gr_transtrfList.setReadOnly("column", 'comnTrf', false);
      gr_transtrfList.setReadOnly("column", 'comnTrfRt', true);
      break;
    case "0186":
      gr_transtrfList.setReadOnly("column", 'wrkPlNm', true);
      gr_transtrfList.setReadOnly("column", 'commNm', true);
      gr_transtrfList.setReadOnly("column", 'unitCd', true);
      gr_transtrfList.setReadOnly("column", 'comnTrf', true);
      gr_transtrfList.setReadOnly("column", 'comnTrfRt', false);
      break;
  }
};
scwin.f_setHeaderClassClear = function () {
  gr_transtrfList.removeHeaderClass('wrkPlNm', 'txt-red');
  gr_transtrfList.removeHeaderClass('commNm', 'txt-red');
  gr_transtrfList.removeHeaderClass('unitCd', 'txt-red');
  gr_transtrfList.removeHeaderClass('comnTrf', 'txt-red');
  gr_transtrfList.removeHeaderClass('comnTrfRt', 'txt-red');
  gr_transtrfList.removeHeaderClass('wrkPlNm', 'txt-blue');
  gr_transtrfList.removeHeaderClass('commNm', 'txt-blue');
  gr_transtrfList.removeHeaderClass('unitCd', 'txt-blue');
  gr_transtrfList.removeHeaderClass('comnTrf', 'txt-blue');
  gr_transtrfList.removeHeaderClass('comnTrfRt', 'txt-blue');
};
scwin.gr_transtrfList_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  var info = {
    newRowIndex: rowIndex
  };
  scwin.ds_transtrfList_onrowpositionchange(info);
};
scwin.ds_transtrfList_onrowpositionchange = function (info) {
  console.log("scwin.ds_transtrfList_onrowpositionchange~~");
  var row = info.newRowIndex;
  $c.gus.cfPrepareHidVal($p, ds_transtrfList, row, ["wrkPlCd", "wrkPlNm", "commCd", "comnNm", "adptStdSelpchItemCd", "adptStdSelpchItemNm", "unitCd"]);
  if (ds_transtrfList.getCellData(row, "comnTrf") > 0) {
    ds_transtrfList.setCellData(row, "famtFratClsCd", "FM");
  } else if (ds_transtrfList.getCellData(row, "comnTrfRt") > 0) {
    ds_transtrfList.setCellData(row, "famtFratClsCd", "FR");
  }
  //debugger;
  if (scwin.isEditChk) {
    //if(ds_transtrf.getRowStatus(ds_transtrf.getRowPosition()) == 'C' || scwin.isEditChk){
    //console.log('reg~~~');
    scwin.f_setGridReadOnly();
    //debugger;
    if (gr_transtrfList.getRowStatus(ds_transtrfList.getRowPosition()) == 'C' && ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "selpchItemCd") == "0076") {
      gr_transtrfList.setReadOnly("column", 'wrkPlNm', false);
    } else {
      gr_transtrfList.setReadOnly("column", 'wrkPlNm', true);
    }
  } else {
    //console.log('etc~~~');
    //debugger;
    gr_transtrfList.setReadOnly("column", 'wrkPlNm', true);
    gr_transtrfList.setReadOnly("column", 'commNm', true);
    gr_transtrfList.setReadOnly("column", 'unitCd', true);
    gr_transtrfList.setReadOnly("column", 'comnTrf', true);
    gr_transtrfList.setReadOnly("column", 'comnTrfRt', true);
  }
};
scwin.gr_transtrfList_ontextimageclick = async function (rowIndex, columnIndex) {
  var colid = gr_transtrfList.getColumnID(columnIndex);
  var rtnList = new Array();
  var row = rowIndex;
  switch (colid) {
    case "wrkPlNm":
      var pCode = ds_transtrfList.getCellData(row, "wrkPlCd");
      var pName = ds_transtrfList.getCellData(row, "wrkPlNm");
      ds_transtrfList.setCellData(row, "wrkPlCd", "");
      ds_transtrfList.setCellData(row, "wrkPlNm", "");
      udc_comCodeGrid.setSelectId('retrieveWrkPlInfo');
      rtnList = await udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridWrkPlCdCallback, pCode, pName, 'F',
      //pWinCloseTF	
      '2',
      //pDispCnt
      '작업장코드,작업장명',
      //pTitle
      '150,170',
      //pWidth
      null,
      //pHidden	
      null,
      //pWhere
      '440',
      //pW
      '500',
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF
      'F',
      //pAllSearchTF
      '작업장,작업장코드,작업장명'); //pWtitleSearch

      break;
    case "commNm":
      //            ds_transtrfList.setCellData(row, "commCd", "");

      var pCode = ds_transtrfList.getCellData(row, "commCd");
      var pName = ds_transtrfList.getCellData(row, "commNm");
      ds_transtrfList.setCellData(row, "commCd", "");
      ds_transtrfList.setCellData(row, "commNm", "");
      udc_comCodeGrid.setSelectId('retrieveCommInfo');
      rtnList = await udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridCommCdCallback, pCode, pName, 'F',
      //pWinCloseTF	
      '2',
      //pDispCnt
      '품목코드,품목',
      //pTitle
      '150,170',
      //pWidth
      null,
      //pHidden	
      '2,3',
      //pWhere
      '440',
      //pW
      '500',
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF
      'F',
      //pAllSearchTF
      '품목,품목코드,품목'); //pWtitleSearch

      //            ds_transtrfList.getCellData(row, "commNm");
      break;
    case "adptStdSelpchItemNm":
      //            ds_transtrfList.setCellData(row, "adptStdSelpchItemCd", "");

      var pCode = ds_transtrfList.getCellData(row, "adptStdSelpchItemCd");
      var pName = ds_transtrfList.getCellData(row, "adptStdSelpchItemNm");
      ds_transtrfList.setCellData(row, "adptStdSelpchItemCd", "");
      ds_transtrfList.setCellData(row, "adptStdSelpchItemNm", "");
      udc_comCodeGrid.setSelectId('retrieveSelpchItemInfo');
      rtnList = await udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridAdptStdSelpchItemCdCallback, pCode, pName, 'F',
      //pWinCloseTF	
      '2',
      //pDispCnt
      '항목코드,항목명',
      //pTitle
      '150,170',
      //pWidth
      '3,4,5,6,7,8,9,10',
      //pHidden	
      ',,,,,02',
      //pWhere
      '440',
      //pW
      '500',
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF
      'F',
      //pAllSearchTF
      '요율항목,항목코드,항목명'); //pWtitleSearch

      //            ds_transtrfList.setCellData(row, "adptStdSelpchItemNm", "");
      break;
    case "unitCd":
      var pCode = ds_transtrfList.getCellData(row, "unitCd");
      ds_transtrfList.setCellData(row, "unitCd", "");
      udc_comCodeGrid.setSelectId('retrieveCommCdInfo');
      rtnList = await udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridUnitCdCallback, pCode, '', 'F', '7', null, '150,170', null, 'LO102,,', '440', '500', null, null, null, "F", null);
      ds_transtrfList.setCellData(row, "unitCd", "");
      break;
  }
};
scwin.gr_transtrfList_onviewchange = async function (info) {
  console.log("scwin.gr_transtrfList_onviewchange~~");
  //console.log(info);

  var colid = info.colId;
  var row = info.rowIndex;
  var olddata = info.oldValue;
  var rtnList = new Array();

  //gr_transtrfList.setEventPause("oncellindexchange",true);
  switch (colid) {
    case "wrkPlNm":
      if (olddata == ds_transtrfList.getCellData(row, "wrkPlNm")) {
        return;
      } else {
        //if (ds_transtrfList.getCellData(row,"wrkPlNm").trim() == "") {
        //	ds_transtrfList.setCellData(row,"wrkPlCd","");	//작업장코드
        //	return;
        //}

        //				ds_transtrfList.setCellData(row,"wrkPlCd","");	//작업장코드
        var pCode = "";
        var pName = ds_transtrfList.getCellData(row, "wrkPlNm");
        ds_transtrfList.setCellData(row, "wrkPlNm", "");
        ds_transtrfList.setCellData(row, "wrkPlCd", "");
        udc_comCodeGrid.setSelectId('retrieveWrkPlInfo');
        rtnList = await udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridWrkPlCdCallback, pCode, pName, 'T',
        //pWinCloseTF	
        '2',
        //pDispCnt
        '작업장코드,작업장명',
        //pTitle
        '150,170',
        //pWidth
        null,
        //pHidden	
        null,
        //pWhere
        '440',
        //pW
        '500',
        //pH
        null,
        //pTop
        null,
        //pLeft
        null,
        //pExistTF
        'F',
        //pAllSearchTF
        '작업장,작업장코드,작업장명'); //pWtitleSearch
      }

      //            ds_transtrfList.setCellData(row,"wrkPlNm","");	//작업장코드
      break;
    case "commNm":
      if (olddata == ds_transtrfList.getCellData(row, "commNm")) {
        return;
      } else {
        //if (ds_transtrfList.getCellData(row,"commNm").trim() == "") {
        //	ds_transtrfList.setCellData(row,"commCd","");	//품목코드
        //	return;
        //}

        //                ds_transtrfList.setCellData(row, "commCd", "");	//품목코드

        var pCode = "";
        var pName = ds_transtrfList.getCellData(row, "commNm");
        ds_transtrfList.setCellData(row, "commCd", "");
        ds_transtrfList.setCellData(row, "commNm", "");
        udc_comCodeGrid.setSelectId('retrieveCommInfo');
        rtnList = await udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridCommCdCallback, pCode, pName, 'T',
        //pWinCloseTF	
        '2',
        //pDispCnt
        '품목코드,품목',
        //pTitle
        '150,170',
        //pWidth
        null,
        //pHidden	
        '2,3',
        //pWhere
        '440',
        //pW
        '500',
        //pH
        null,
        //pTop
        null,
        //pLeft
        null,
        //pExistTF
        'F',
        //pAllSearchTF
        '품목,품목코드,품목'); //pWtitleSearch

        //                ds_transtrfList.setCellData(row, "commNm", "");	//품목코드
      }
      break;
    case "adptStdSelpchItemNm":
      if (olddata == ds_transtrfList.getCellData(row, "adptStdSelpchItemNm")) {
        return;
      } else {
        // if (ds_transtrfList.getCellData(row, "adptStdSelpchItemNm").trim() == "") {
        //     ds_transtrfList.setCellData(row, "adptStdSelpchItemCd", "");	//품목코드
        //     return;
        // }

        // ds_transtrfList.setCellData(row, "adptStdSelpchItemCd", "");	//품목코드

        var pCode = "";
        var pName = ds_transtrfList.getCellData(row, "adptStdSelpchItemNm");
        ds_transtrfList.setCellData(row, "adptStdSelpchItemCd", "");
        ds_transtrfList.setCellData(row, "adptStdSelpchItemNm", "");
        udc_comCodeGrid.setSelectId('retrieveSelpchItemInfo');
        rtnList = await udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridAdptStdSelpchItemCdCallback, pCode, pName, 'T',
        //pWinCloseTF	
        '2',
        //pDispCnt
        '항목코드,항목명',
        //pTitle
        '150,170',
        //pWidth
        null,
        //pHidden	
        ',,,,,02',
        //pWhere
        '440',
        //pW
        '500',
        //pH
        null,
        //pTop
        null,
        //pLeft
        null,
        //pExistTF
        'F',
        //pAllSearchTF
        '요율항목,항목코드,항목명'); //pWtitleSearch

        //                ds_transtrfList.setCellData(row, "adptStdSelpchItemNm", "");	//품목코드
      }
      break;
    case "unitCd":
      if (olddata == ds_transtrfList.getCellData(row, "unitCd")) {
        return;
      } else {
        var pCode = ds_transtrfList.getCellData(row, "unitCd");
        ds_transtrfList.setCellData(row, "unitCd", "");
        udc_comCodeGrid.setSelectId('retrieveCommCdInfo');
        rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridUnitCdCallback, pCode, '', 'T', '7', null, '150,170', null, 'LO102,,', '440', '500', null, null, null, "F", null);

        //                ds_transtrfList.setCellData(row, "unitCd", "");	//품목코드
      }
      break;
  }

  //요율, 적용비율
  scwin.f_setGridColumnChanged(row, colid);
  //gr_transtrfList.setEventPause("oncellindexchange",false);
};
scwin.f_setGridColumnChanged = function (row, colid) {
  console.log("scwin.f_setGridColumnChanged~~~");
  switch (colid) {
    case "comnTrf":
      if (ds_transtrfList.getCellData(row, "comnTrf") > 0) {
        gr_transtrfList.setCellReadOnly(row, 'comnTrf', false);
        gr_transtrfList.setCellReadOnly(row, 'comnTrfRt', true);
        gr_transtrfList.setCellReadOnly(row, 'adptStdSelpchItemNm', true);
        ds_transtrfList.setCellData(row, "comnTrfRt", "0");
        ds_transtrfList.setCellData(row, "adptStdSelpchItemNm", "");
        ds_transtrfList.setCellData(row, "famtFratClsCd", "FM");
      } else if (ds_transtrfList.getCellData(row, "comnTrfRt") > 0 || ds_transtrfList.getCellData(row, "adptStdSelpchItemNm") != "") {
        gr_transtrfList.setCellReadOnly(row, 'comnTrf', true);
        gr_transtrfList.setCellReadOnly(row, 'comnTrfRt', false);
        gr_transtrfList.setCellReadOnly(row, 'adptStdSelpchItemNm', false);
        ds_transtrfList.setCellData(row, "comnTrf", "0");
        ds_transtrfList.setCellData(row, "famtFratClsCd", "FR");
      } else if (ds_transtrfList.getCellData(row, "comnTrf") == 0) {
        gr_transtrfList.setCellReadOnly(row, 'comnTrf', false);
        gr_transtrfList.setCellReadOnly(row, 'comnTrfRt', false);
        gr_transtrfList.setCellReadOnly(row, 'adptStdSelpchItemNm', false);
      } else if (ds_transtrfList.getCellData(row, "comnTrfRt") == 0 || ds_transtrfList.getCellData(row, "adptStdSelpchItemNm") == "") {
        gr_transtrfList.setCellReadOnly(row, 'comnTrf', false);
        gr_transtrfList.setCellReadOnly(row, 'comnTrfRt', false);
        gr_transtrfList.setCellReadOnly(row, 'adptStdSelpchItemNm', false);
      }
      break;
    case "comnTrfRt":
      if (ds_transtrfList.getCellData(row, "comnTrf") > 0) {
        gr_transtrfList.setCellReadOnly(row, 'comnTrf', false);
        gr_transtrfList.setCellReadOnly(row, 'comnTrfRt', true);
        gr_transtrfList.setCellReadOnly(row, 'adptStdSelpchItemNm', true);
        ds_transtrfList.setCellData(row, "comnTrfRt", "0");
        ds_transtrfList.setCellData(row, "adptStdSelpchItemNm", "");
        ds_transtrfList.setCellData(row, "famtFratClsCd", "FM");
      } else if (ds_transtrfList.getCellData(row, "comnTrfRt") > 0 || ds_transtrfList.getCellData(row, "adptStdSelpchItemNm") != "") {
        gr_transtrfList.setCellReadOnly(row, 'comnTrf', true);
        gr_transtrfList.setCellReadOnly(row, 'comnTrfRt', false);
        gr_transtrfList.setCellReadOnly(row, 'adptStdSelpchItemNm', false);
        ds_transtrfList.setCellData(row, "comnTrf", "0");
        ds_transtrfList.setCellData(row, "famtFratClsCd", "FR");
      } else if (ds_transtrfList.getCellData(row, "comnTrf") == 0) {
        gr_transtrfList.setCellReadOnly(row, 'comnTrf', false);
        gr_transtrfList.setCellReadOnly(row, 'comnTrfRt', false);
        gr_transtrfList.setCellReadOnly(row, 'adptStdSelpchItemNm', false);
      } else if (ds_transtrfList.getCellData(row, "comnTrfRt") == 0 || ds_transtrfList.getCellData(row, "adptStdSelpchItemNm") == "") {
        gr_transtrfList.setCellReadOnly(row, 'comnTrf', false);
        gr_transtrfList.setCellReadOnly(row, 'comnTrfRt', false);
        gr_transtrfList.setCellReadOnly(row, 'adptStdSelpchItemNm', false);
      }
      break;
    case "adptStdSelpchItemNm":
      if (ds_transtrfList.getCellData(row, "comnTrf") > 0) {
        gr_transtrfList.setCellReadOnly(row, 'comnTrf', false);
        gr_transtrfList.setCellReadOnly(row, 'comnTrfRt', true);
        gr_transtrfList.setCellReadOnly(row, 'adptStdSelpchItemNm', true);
        ds_transtrfList.setCellData(row, "comnTrfRt", "0");
        ds_transtrfList.setCellData(row, "adptStdSelpchItemNm", "");
        ds_transtrfList.setCellData(row, "famtFratClsCd", "FM");
      } else if (ds_transtrfList.getCellData(row, "comnTrfRt") > 0 || ds_transtrfList.getCellData(row, "adptStdSelpchItemNm") != "") {
        gr_transtrfList.setCellReadOnly(row, 'comnTrf', true);
        gr_transtrfList.setCellReadOnly(row, 'comnTrfRt', false);
        gr_transtrfList.setCellReadOnly(row, 'adptStdSelpchItemNm', false);
        ds_transtrfList.setCellData(row, "comnTrf", "0");
        ds_transtrfList.setCellData(row, "famtFratClsCd", "FR");
      } else if (ds_transtrfList.getCellData(row, "comnTrf") == 0) {
        gr_transtrfList.setCellReadOnly(row, 'comnTrf', false);
        gr_transtrfList.setCellReadOnly(row, 'comnTrfRt', false);
        gr_transtrfList.setCellReadOnly(row, 'adptStdSelpchItemNm', false);
      } else if (ds_transtrfList.getCellData(row, "comnTrfRt") == 0 || ds_transtrfList.getCellData(row, "adptStdSelpchItemNm") == "") {
        gr_transtrfList.setCellReadOnly(row, 'comnTrf', false);
        gr_transtrfList.setCellReadOnly(row, 'comnTrfRt', false);
        gr_transtrfList.setCellReadOnly(row, 'adptStdSelpchItemNm', false);
      }
      break;
    default:
      break;
  }
};
scwin.udc_comCodeGridWrkPlCdCallback = function (rtnList) {
  var row = ds_transtrfList.getRowPosition();
  if (rtnList != null && rtnList != "N/A") {
    if (rtnList[0] != "N/A") {
      $c.gus.cfSetGridReturnValue($p, rtnList, ds_transtrfList, row, "wrkPlCd", "wrkPlNm");
      gr_transtrfList.setFocusedCell(row, 1, true);
    }
  }
};
scwin.udc_comCodeGridCommCdCallback = function (rtnList) {
  var row = ds_transtrfList.getRowPosition();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_transtrfList, row, "commCd", "commNm");
  gr_transtrfList.setFocusedCell(row, 2, true);
};
scwin.udc_comCodeGridAdptStdSelpchItemCdCallback = function (rtnList) {
  var row = ds_transtrfList.getRowPosition();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_transtrfList, row, "adptStdSelpchItemCd", "adptStdSelpchItemNm");
  //    gr_transtrfList.setFocusedCell(row, 3, true);
};
scwin.udc_comCodeGridUnitCdCallback = function (rtnList) {
  var row = ds_transtrfList.getRowPosition();
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_transtrfList, row, "unitCd", "");
  gr_transtrfList.setFocusedCell(row, 3, true);
};
scwin.ica_adptDt_onviewchange = function (info) {
  console.log("scwin.ica_adptDt_onviewchange~~");
  //console.log(info);

  if (info.oldValue != info.newValue) {
    if (ds_transtrf.getRowStatus(ds_transtrf.getRowPosition()) == "C") {
      ds_transtrf.setCellData(ds_transtrf.getRowPosition(), "adptDt", ica_adptDt.getValue().trim());
      for (var i = 0; i < ds_transtrfList.getRowCount(); i++) {
        ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(), "adptDt", ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "adptDt"));
        ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(), "selpchItemCd", ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "selpchItemCd"));
      }
    }
  }
};
scwin.acb_selpchItemCd_onviewchange = function (info) {
  console.log("scwin.acb_selpchItemCd_onviewchange~~");
  //console.log(info);

  if (ds_transtrf.getRowStatus(ds_transtrf.getRowPosition()) == "C") {
    ds_transtrf.setCellData(ds_transtrf.getRowPosition(), "selpchItemCd", acb_selpchItemCd.getValue().trim());
    for (var i = 0; i < ds_transtrfList.getRowCount(); i++) {
      ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(), "adptDt", ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "adptDt"));
      ds_transtrfList.setCellData(ds_transtrfList.getRowPosition(), "selpchItemCd", ds_transtrf.getCellData(ds_transtrf.getRowPosition(), "selpchItemCd"));
    }

    //if(scwin.isEditChk) {
    scwin.f_setGridReadOnly();
    //}
  }
};
scwin.gr_transtrfList_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_setGridReadOnly();
};
scwin.gr_transtrfList_oneditkeyup = function (info) {
  console.log('scwin.gr_transtrfList_oneditkeyup~~~');
  //console.log(info);
  /*
  info = {
  "rowIndex": 9,
  "colIndex": 1,
  "colID": "commNm",
  "oldValue": "20F",
  "newValue": "1",
  "inputType": "textImage",
  "keyCode": 49
  }
  */
  //   alert(info.keyCode);
  //     if(info.keyCode=="9" && (info.colID == "wrkPlNm" || info.colID == "commNm" || info.colID == "unitCd") ){
  //         gr_transtrfList.setFocusedCell(info.rowIndex, info.colIndex-1, true);
  //     }
};
scwin.ds_transtrfList_oncelldatachange = function (info) {
  var colId = info.colID;
  var oldValue = info.oldValue;
  var newValue = info.newValue;
  var row = info.rowIndex;
  if (oldValue == newValue) {
    return true;
  }
  switch (colId) {
    case "wrkPlNm":
      ds_transtrfList.setCellData(row, "wrkPlCd", "");
      break;
    case "commNm":
      ds_transtrfList.setCellData(row, "commCd", "");
      break;
    case "adptStdSelpchItemNm":
      ds_transtrfList.setCellData(row, "adptStdSelpchItemCd", "");
      break;
  }
};
scwin.gr_transtrfList_onafteredit = function (rowIndex, columnIndex, value) {};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cnd_selpchItemCd',search:'start',style:'width:200px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-',ref:'data:ds_view_cond.selpchItemCd',objType:'data'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_cnd_adptDt',pickerType:'dynamic',style:'',objType:'data',ref:'data:ds_view_cond.adptDt'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'dataField',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항목',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_selpchItemCd',search:'start',style:'width:200px;',submenuSize:'auto','ev:onviewchange':'scwin.acb_selpchItemCd_onviewchange',allOption:'',chooseOption:'true',chooseOptionLabel:'',ref:'',objType:'data'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_adptDt',pickerType:'dynamic',style:'','ev:onviewchange':'scwin.ica_adptDt_onviewchange',objType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox flex_no wfix',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 40%;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매출입항목',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_transtrf',gridUpYn:'N',grdDownOpts:'{"fileName":"매출입항목.xlsx","sheetName":"매출입항목","type":"2+4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_transtrf',id:'gr_transtrf',style:'',visibleRowNum:'14',visibleRowNumFix:'true',readOnly:'true',ignoreNonEditableCellTabEnter:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'적용일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'매출입항목',width:'180'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'selpchItemCd',inputType:'select',width:'180',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'운송기타요율',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_transtrfList',gridUpYn:'N',grdDownOpts:'{"fileName":"운송기타요율.xlsx","sheetName":"운송기타요율","type":"2+4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_transtrfList',id:'gr_transtrfList',style:'',visibleRowNum:'14',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_transtrfList_ontextimageclick','ev:onviewchange':'scwin.gr_transtrfList_onviewchange',rowStatusVisible:'true',readOnly:'true','ev:oncellindexchange':'scwin.gr_transtrfList_oncellindexchange','ev:oncellclick':'scwin.gr_transtrfList_oncellclick',dataName:'운송기타요율',validFeatures:'ignoreStatus=no',validExp:'wrkPlNm::no::key,commNm::no::key','ev:oneditkeyup':'scwin.gr_transtrfList_oneditkeyup','ev:onafteredit':'scwin.gr_transtrfList_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',value:'작업장',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',value:'품목',width:'70',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'text',value:'단위',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'comnTrf',inputType:'text',value:'요율',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'comnTrfRt',inputType:'text',value:'적용비율(%)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptStdSelpchItemNm',inputType:'text',value:'기준요율항목',width:'120',class:'txt-blue',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'textImage',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'textImage',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'textImage',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'comnTrf',inputType:'text',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number',maxLength:'13',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'comnTrfRt',inputType:'text',width:'100',textAlign:'right',dataType:'float',displayFormat:'#,##0.#0',excelCellType:'number',maxLength:'3.2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptStdSelpchItemNm',inputType:'textImage',width:'120',textAlign:'left',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_addRow2',btnCancelYn:'Y',btnDelYn:'N',gridID:'gr_transtrfList',rowAddFunction:'scwin.f_AddRow',rowDelUserAuth:'D',rowAddUserAuth:'C'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_new',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_new_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_edit',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_edit_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})