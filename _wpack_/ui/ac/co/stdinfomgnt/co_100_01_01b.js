/*amd /ui/ac/co/stdinfomgnt/co_100_01_01b.xml 32344 b3cfd370a4115b2aa6cfd6d482b7a1ceebdf6bb4dca39b863f4cc26fa2d5575e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_account',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mgntAcctCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperMgntAcctCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperMgntAcctNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctEngNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctLvl',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aggrClsCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptStDt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptEndDt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stndPcostMgntYn',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkLevel',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'treeNm',name:'name15',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'mgntAcctCd',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_saveAccount',action:'/ac.co.stdinfomgnt.SaveManagementAccountCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_account","key":"IN_DS1","action":"modified"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveAccount_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.co.stdinfomgnt.RetrieveManagementAccountCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_account","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_account","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.tr_actionKind; //조회/수정 구별하기 위한 변수
scwin.load_row = ""; //조회후 focus가게 할  row
scwin.currentRowPosition = 0;
scwin.onpageload = function () {
  //공통코드
  var codeOptions = [{
    grpCd: "FI001",
    compID: "lc_acctClsCd"
  },
  //계정구분
  {
    grpCd: "FI002",
    compID: "lc_drcrClsCd"
  },
  //차대구분
  {
    grpCd: "FI035",
    compID: "lc_acctLvl"
  },
  // 계정레벨
  {
    grpCd: "CO013",
    compID: "lc_mgntAcctClsCd"
  },
  //관리계정구분
  {
    grpCd: "CO014",
    compID: "lc_aggrClsCd"
  } //집계구분
  ];
  $c.data.setCommonCode($p, codeOptions);
  $c.gus.cfDisableKeyData($p);
  scwin.f_ToggleImgBtn(false);
  $c.gus.cfDisableAllBtn($p);
};
scwin.ondataload = function () {
  scwin.lc_init();
};
scwin.onUdcCompleted = function () {
  ed_acctCd.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function (e) {
  scwin.tr_actionKind = "SEARCH";
  //ds_search.UseChangeInfo = false;

  dma_search.set("mgntAcctCd", ed_acctCd.getValue());
  $c.sbm.execute($p, sbm_search);
};
scwin.sbm_search_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCnt = ds_account.getRowCount();
    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      ds_account.setJSON([]);
      return;
    }
    scwin.currentRowPosition = $c.num.parseInt($p, ds_account.getMatchedIndex("mgntAcctCd", scwin.load_row)) || 0;
    var rowIndex = scwin.currentRowPosition == 0 ? 1 : scwin.currentRowPosition + 1;
    tv_treeView.findNodeByIndex(rowIndex, true);
    scwin.tv_treeView_onviewchange();
    scwin.f_ToggleImgBtn(false);
  }
  ;
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddItem = async function (e) {
  scwin.tr_actionKind = "INSERT";
  if (await scwin.f_IsUpdated()) return;
  var checkLevel = "0";
  var row = 0;
  var upperMgntAcctCd = "";
  var upperMgntAcctNm = "";
  var acctLvl = "0";
  checkLevel = $c.num.parseInt($p, tv_treeView.getSelectedElement().checkLevel) + 1;
  row = tv_treeView.getSelectedIndex() - 1;
  upperMgntAcctCd = ds_account.getCellData(row, "mgntAcctCd");
  upperMgntAcctNm = ds_account.getCellData(row, "acctNm");
  acctLvl = $c.num.parseInt($p, ds_account.getCellData(row, "acctLvl")) + 1;
  var rowJson = {
    "checkLevel": checkLevel,
    "treeNm": "ADD",
    "upperMgntAcctCd": upperMgntAcctCd,
    "upperMgntAcctNm": upperMgntAcctNm,
    "acctLvl": acctLvl,
    "adptStDt": $c.date.getServerDateTime($p, "yyyyMMdd"),
    "adptEndDt": "99991231"
  };
  if (tv_treeView.getSelectedIndex() == ds_account.getRowCount() || ds_account.getRowCount() == 0) {
    ds_account.setRowJSON(ds_account.getRowCount(), rowJson);
  } else {
    ds_account.setRowJSON(checkLevel, rowJson);
  }
  await scwin.dataDaySetting(rowJson.adptStDt, rowJson.adptEndDt, "input");
  scwin.currentRowPosition = ds_account.getRowCount();
  tv_treeView.findNodeByIndex(row + 2, true);
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_update]);
  $c.gus.cfEnableObjects($p, [udc_upperMgntAcct, udc_fromToCalendar1]);
  ed_mgntAcctCd.focus();
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = async function (e) {
  scwin.tr_actionKind = "UPDATE";
  if (await scwin.f_IsUpdated()) return;

  // disable 처리
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [btn_update]);
  scwin.f_ToggleImgBtn(true);
  scwin.f_ToggleAcctNm(!(await scwin.f_IsGeneralAcct(ds_account.getRowJSON(ds_account.getRowPosition()).mgntAcctCd)));

  //focus 설정
  ed_acctCd.focus();
  scwin.currentRowPosition = ds_account.getRowPosition();
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function (e) {
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_save]);
  scwin.f_ToggleImgBtn(false);
  scwin.currentRowPosition = 0;

  //ds_account.undoRow(ds_account.getRowPosition());
  if (ds_account.getRowStatus(ds_account.getRowPosition()) == "C") {
    ds_account.removeRow(ds_account.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  scwin.currentRowPosition = ds_account.getRowPosition();

  //Mandatory 항목이 누락하지 않았는지 체크한다.
  if (!(await $c.gus.cfValidate($p, [tb_acct]))) return;

  //계정코드 Validation
  if (scwin.f_IsGeneralAcct(ed_mgntAcctCd.getValue()) && scwin.f_IsInsertRow(ds_account, ds_account.getRowPosition())) {
    await $c.gus.cfAlertMsg($p, "관리계정코드는 1-8로 시작할 수 없습니다.");
    ed_mgntAcctCd.focus();
    return;
  }

  //중복체크
  for (var i = 0; i < ds_account.getRowCount(); i++) {
    if (i != ds_account.getRowPosition() && ds_account.getRowJSON(i).mgntAcctCd == ed_mgntAcctCd.getValue().trim()) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, Array("계정코드"));
      ed_mgntAcctCd.focus();
      return;
    }
  }
  if (ed_mgntAcctCd.getValue().trim() == ed_upperMgntAcctCd.getValue().trim()) {
    await $c.gus.cfAlertMsg($p, "계정코드와 상위계정코드는 동일할수 없습니다.");
    ed_upperMgntAcctCd.focus();
    return;
  }

  //시작일자가 종료일자 이전인지 check
  if (!(await $c.gus.cfIsAfterDate($p, ed_adptStDt.getValue(), ed_adptEndDt.getValue()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_adptStDt.focus();
    return;
  }

  //데이터리스트에 셋팅
  await scwin.dataDaySetting(ed_adptStDt.getValue(), ed_adptEndDt.getValue(), "datalist");

  //변경한 데이터가 있는지 체크한다.
  if (ds_account.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("관리계정코드정보"));
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    scwin.load_row = ds_account.getRowJSON(ds_account.getRowPosition()).mgntAcctCd;
    $c.sbm.execute($p, sbm_saveAccount);
  }
};
scwin.sbm_saveAccount_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    await scwin.f_Retrieve();

    // disable 처리
    $c.gus.cfDisableKeyData($p);
    scwin.f_ToggleImgBtn(false);
    $c.gus.cfDisableBtn($p, [btn_save]);
  }
  ;
};

//-------------------------------------------------------------------------
// 데이터 변경 체크
//-------------------------------------------------------------------------
scwin.f_IsUpdated = async function () {
  if (ds_account.getModifiedIndex().length < 1) return false;
  await $c.gus.cfAlertMsg($p, "저장되지 않은 데이타가 있습니다");
  var row = scwin.f_GetChangedRow(ds_account);
  tv_treeView.findNodeByIndex(row + 1, true);
  return true;
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_PopUp = async function (paramArray, disGubun) {
  var codeObj = paramArray.pCode;
  var nameObj = paramArray.pName;
  switch (disGubun) {
    case '1':
      await udc_acct.cfCommonPopUp(scwin.udc_acct_callbackFunc, codeObj, "", scwin.f_EventCheck(), paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, "T", paramArray.pWtitleSearch);
      break;
    case '2':
      await udc_upperMgntAcct.cfCommonPopUp(scwin.udc_upperMgntAcct_callbackFunc, codeObj, "", scwin.f_EventCheck(), paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, "T", paramArray.pWtitleSearch);
      break;
    default:
      break;
  }
};

//계정코드 팝업 콜백
scwin.udc_acct_callbackFunc = function (rtnList) {
  if (!$c.gus.cfIsNull($p, rtnList)) {
    if (rtnList[0] != "N/A") {
      ed_acctCd.setValue(rtnList[0]);
      ed_acctCd.options.hidVal = rtnList[0];
      c_acctNm.setValue(rtnList[1]);
    }
  } else {
    ed_acctCd.setValue("");
    ed_acctCd.options.hidVal = "";
    c_acctNm.setValue("");
  }
};

//상위계정코드 팝업 콜백
scwin.udc_upperMgntAcct_callbackFunc = function (rtnList) {
  if (!$c.gus.cfIsNull($p, rtnList)) {
    if (rtnList[0] != "N/A") {
      ed_upperMgntAcctCd.setValue(rtnList[0]);
      ed_upperMgntAcctCd.options.hidVal = rtnList[0];
      ed_upperMgntAcctNm.setValue(rtnList[1]);
    }
  } else {
    ed_upperMgntAcctCd.setValue("");
    ed_upperMgntAcctCd.options.hidVal = "";
    ed_upperMgntAcctNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function (inObj, ...pairObjs) {
  var inValue = $c.gus.cfGetValue($p, inObj);
  if (!inObj.options) inObj.options = {};
  var hidValue = inObj.options.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.options.hidVal = "";
    for (let i = 0; i < pairObjs.length; i++) {
      pairObjs[i].setValue("");
    }
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};

//-------------------------------------------------------------------------
// 팝업 이벤트에 따라 팝업창의 자동닫기 여부를 반환
//-------------------------------------------------------------------------
scwin.f_EventCheck = function () {
  if (window.event != null && window.event.srcElement.tagName.toUpperCase() == "IMG") {
    return 'F';
  } else {
    return 'T';
  }
};

//-------------------------------------------------------------------------
// 조회 귀속부서코드팝업
//-------------------------------------------------------------------------
scwin.f_deptPopUp = async function (disGubun) {
  var paramArray = {};
  switch (disGubun) {
    case '1':
      paramArray.pCode = ed_acctCd.getValue();
      paramArray.pName = c_acctNm.getValue();
      break;
    case '2':
      paramArray.pCode = ed_upperMgntAcctCd.getValue();
      paramArray.pName = ed_upperMgntAcctNm.getValue();
      paramArray.pWhere = ",,,," + ds_account.getRowJSON(ds_account.getRowPosition()).mgntAcctCd;
      break;
    default:
      break;
  }
  paramArray.pW = "410";
  await scwin.f_PopUp(paramArray, disGubun);
};

//-------------------------------------------------------------------------
// 이미지 버튼의 Enable/Disable
//-------------------------------------------------------------------------
scwin.f_ToggleImgBtn = function (mode) {
  if (mode) {
    $c.gus.cfEnableObjects($p, [udc_upperMgntAcct, udc_fromToCalendar1]);
  } else {
    $c.gus.cfDisableObjects($p, [udc_upperMgntAcct, udc_fromToCalendar1]);
  }
};

//-------------------------------------------------------------------------
// 이미지 버튼의 Enable/Disable
//-------------------------------------------------------------------------
scwin.f_ToggleAcctNm = function (mode) {
  if (mode) {
    $c.gus.cfEnableObjects($p, [ed_acctNm]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_acctNm]);
  }
};

//-------------------------------------------------------------------------
// 재무회계 계정여부를 반환
//-------------------------------------------------------------------------
scwin.f_IsGeneralAcct = function (acctCd) {
  if ($c.gus.cfIsNull($p, acctCd)) return false;
  var firstNm = acctCd.trim().substring(0, 1);
  var re = /[1-8]/;
  return re.test(firstNm);
};

//-------------------------------------------------------------------------
// 데이터셋의 Row가 업데이트 되었는 지 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_IsUpdateRow = function (dataSet, row) {
  //return (dataSet.getRowStatus(row) == 3);
  return dataSet.getRowStatus(row - 1) == "U";
};

//-------------------------------------------------------------------------
// 데이터셋의 Row가 추가 되었는 지 여부를 반환한다.
//-------------------------------------------------------------------------
scwin.f_IsInsertRow = function (dataSet, row) {
  //return (dataSet.getRowStatus(row) == 1);
  return dataSet.getRowStatus(row) == "C";
};

//-------------------------------------------------------------------------
// Insert 또는 Update 또는 Delete된 Row를 반환한다.
//-------------------------------------------------------------------------
scwin.f_GetChangedRow = function (dataSet) {
  for (var i = 0; i < dataSet.getRowCount(); i++) {
    if (scwin.f_IsInsertRow(dataSet, i) || scwin.f_IsUpdateRow(dataSet, i)) return i;
  }
  return dataSet.getRowPosition();
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
};

//-------------------------------------------------------------------------
// 트리클릭시
//-------------------------------------------------------------------------
scwin.tv_treeView_onviewchange = function (info) {
  var clickjson = tv_treeView.getSelectedElement();
  if (ds_account.getRowCount() < 1 || $c.gus.cfIsNull($p, clickjson)) return;
  var row = tv_treeView.getSelectedIndex() - 1;
  $c.gus.cfSetHiddenValue($p, ed_upperMgntAcctCd, clickjson.upperMgntAcctCd);
  var mgntAcctCd = clickjson.mgntAcctCd;
  if (scwin.f_IsInsertRow(ds_account, row)) {
    $c.gus.cfEnableKeyData($p);
    $c.gus.cfDisableBtn($p, [btn_update]);
    scwin.f_ToggleImgBtn(true);
  } else if (scwin.f_IsUpdateRow(ds_account, row)) {
    $c.gus.cfDisableKey($p);
    $c.gus.cfDisableBtn($p, [btn_update]);
    scwin.f_ToggleImgBtn(true);
    if (scwin.f_IsGeneralAcct(mgntAcctCd)) scwin.f_ToggleAcctNm(false);
  } else {
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableBtn($p, [btn_save]);
    scwin.f_ToggleImgBtn(false);
  }
  scwin.dataDaySetting(clickjson.adptStDt, clickjson.adptEndDt, "input");
};

//-------------------------------------------------------------------------
// 계정구분 LuxeCombo validation
//-------------------------------------------------------------------------
scwin.lc_acctClsCd_onselected = async function () {
  if (lc_acctClsCd.getSelectedIndex() == 0 || lc_acctClsCd.getSelectedIndex() == 1 || lc_acctClsCd.getSelectedIndex() == 2) {
    await $c.gus.cfAlertMsg($p, "자산,부채,자본은 선택할 수 없습니다.");
    lc_acctClsCd.focus();
    lc_acctClsCd.setSelectedIndex(-1);
    return;
  }
};

//-------------------------------------------------------------------------
// 조회계정코드  validation
//-------------------------------------------------------------------------
scwin.udc_acct_onblurCodeEvent = async function (e) {
  if (await scwin.f_IsPopUp(ed_acctCd, c_acctNm)) scwin.f_deptPopUp('1');
};

//-------------------------------------------------------------------------
// 상위계정코드  validation
//-------------------------------------------------------------------------
scwin.udc_upperMgntAcct_onblurCodeEvent = function (e) {
  if (scwin.f_IsPopUp(ed_upperMgntAcctCd, ed_upperMgntAcctNm)) scwin.f_deptPopUp('2');
};
scwin.udc_acct_onclickEvent = function (e) {
  scwin.f_deptPopUp('1');
};
scwin.udc_upperMgntAcct_onclickEvent = function (e) {
  scwin.f_deptPopUp('2');
};
scwin.lc_init = function () {
  lc_acctClsCd.setValue("");
  lc_drcrClsCd.setValue("");
  lc_acctLvl.setValue("");
  lc_mgntAcctClsCd.setValue("");
  lc_aggrClsCd.setValue("");
};

//-------------------------------------------------------------------------
// 데이터리스트에 있는 날짜값을 input값에 셋팅, input에 있는 날짜값을 데이터 리스트에 셋팅
//-------------------------------------------------------------------------
scwin.dataDaySetting = function (startDay, endDay, obj) {
  if (obj == "input") {
    ed_adptStDt.setValue(startDay);
    ed_adptEndDt.setValue(endDay);
  } else if (obj == "datalist") {
    ds_account.setCellData(scwin.currentRowPosition, "adptStDt", startDay);
    ds_account.setCellData(scwin.currentRowPosition, "adptEndDt", endDay);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'w300',codeId:'ed_acctCd',allowCharCode:'0-9',maxlengthCode:'7',UpperFlagCode:'1',nameId:'c_acctNm',id:'udc_acct','ev:onclickEvent':'scwin.udc_acct_onclickEvent',selectID:'retrieveMgntAcctCdInfo','ev:onblurCodeEvent':'scwin.udc_acct_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 600px;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'관리계정 Tree',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_add',label:'행추가',class:'btn ',objType:'bCreate',userAuth:'C','ev:onclick':'scwin.f_AddItem'}},{T:1,N:'w2:button',A:{style:'',id:'btn_delete',label:'취소',class:'btn ',objType:'bDelete','ev:onclick':'scwin.f_Cancel'}}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'N',templateYn:'N',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{class:'tvw-wrap round-box border',id:'grd_section1',style:''},E:[{T:1,N:'w2:treeview',A:{dataType:'listed',id:'tv_treeView',renderType:'virtual',style:'height: 100%',tooltipGroupClass:'false',class:'',showTreeDepth:'5','ev:onviewchange':'scwin.tv_treeView_onviewchange'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_account'},E:[{T:1,N:'w2:label',A:{ref:'treeNm'}},{T:1,N:'w2:value',A:{ref:'mgntAcctCd'}},{T:1,N:'w2:depth',A:{ref:'checkLevel'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'관리계정 상세내역',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tb_acct',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계정코드',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_mgntAcctCd',placeholder:'',class:'form-control w110',objType:'key',mandatory:'true',allowChar:'0-9',validateOnInput:'true',maxlength:'7',validExp:'계정코드:yes:format=0000000',ref:'data:ds_account.mgntAcctCd',title:'계정코드'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계정명',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{style:'',id:'ed_acctNm',placeholder:'',class:'form-control col7',objType:'data',maxlength:'50',mandatory:'true',maxByteLength:'50',validExp:'계정명:yes:maxByteLength=50',ref:'data:ds_account.acctNm',title:'계정명'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계정 영문명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_acctEngNm',placeholder:'',class:'form-control col7',objType:'data',maxlength:'30',maxByteLength:'30',validExp:'영문계정명:no:maxByteLength=30',ref:'data:ds_account.acctEngNm',ignoreChar:'ㄱ-ㅎㅏ-ㅣ가-힣'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상위계정코드',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'sch-box col7',id:'',style:'display:none'},E:[{T:1,N:'xf:input',A:{class:'form-control num',id:'ed_upperMgntAcctCd',placeholder:'',style:'',objType:'data',allowChar:'0-9'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_upperMgntAcct',style:'display:none',type:'button',objType:'data',tabIndex:'-1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:'form-control',id:'ed_upperMgntAcctNm',placeholder:'',style:'display:none',readOnly:'true',tabIndex:'-1'}}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveMgntAcctCdInfo',codeId:'ed_upperMgntAcctCd',validTitle:'',nameId:'ed_upperMgntAcctNm',style:'',id:'udc_upperMgntAcct',readOnlyName:'true',objTypeCode:'data','ev:onclickEvent':'scwin.udc_upperMgntAcct_onclickEvent',btnId:'btn_upperMgntAcct','ev:onblurCodeEvent':'scwin.udc_upperMgntAcct_onblurCodeEvent',refDataCollection:'ds_account',code:'upperMgntAcctCd',name:'upperMgntAcctNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계정구분',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:ds_account.acctClsCd',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_acctClsCd',renderType:'',class:'form-control w110',direction:'auto',objType:'data',mandatory:'true',emptyItem:'true',validExp:'계정구분:yes',visibleRowNum:'8',displayMode:'value delim label','ev:onselected':'scwin.lc_acctClsCd_onselected',title:'계정구분'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'차대구분',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:ds_account.drcrClsCd',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_drcrClsCd',renderType:'',class:'form-control w110',direction:'auto',objType:'data',mandatory:'true',emptyItem:'true',validExp:'차대구분:yes',displayMode:'value delim label',title:'차대구분'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계정레벨',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:ds_account.acctLvl',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_acctLvl',renderType:'',class:'form-control w110',direction:'auto',objType:'data',mandatory:'true',emptyItem:'true',validExp:'계정레벨:yes',displayMode:'value delim label',title:'계정레벨'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'관리계정구분',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:ds_account.mgntAcctClsCd',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_mgntAcctClsCd',renderType:'',class:'form-control w110',direction:'auto',objType:'data',mandatory:'true',emptyItem:'true',validExp:'관리계정구분:yes',displayMode:'value delim label',title:'관리계정구분'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'집계구분',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{ref:'data:ds_account.aggrClsCd',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_aggrClsCd',renderType:'',class:'form-control w110',direction:'auto',objType:'data',mandatory:'true',emptyItem:'true',validExp:'집계구분:yes',displayMode:'value delim label',title:'집계구분'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'표준원가관리여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{ref:'data:ds_account.stndPcostMgntYn',appearance:'full',disabled:'',style:'',id:'chb_stndPcostMgntYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적용기간',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar1',refEdDt:'',mandatory:'true',objType:'data',edFromId:'ed_adptStDt',edToId:'ed_adptEndDt',objTypeFrom:'data',objTypeTo:'data'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_update',label:'수정',class:'btn',objType:'bUpdate',userAuth:'U','ev:onclick':'scwin.f_Update'}},{T:1,N:'w2:button',A:{style:'',id:'btn_save',label:'저장',class:'btn',objType:'bSave',userAuth:'C','ev:onclick':'scwin.f_Save'}}]}]}]}]}]}]}]})