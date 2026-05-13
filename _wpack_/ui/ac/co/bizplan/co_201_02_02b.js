/*amd /ui/ac/co/bizplan/co_201_02_02b.xml 39155 a8dcc540525ca413a08b49e8c7654152ba0d0215c4a3d8871c78bd981002c88a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchSellPlanCls'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'planYr',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellPlanCls',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'planYr',name:'계획년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellPlanClsCd',name:'매출계획구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellPlanClsNm',name:'매출계획구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperSellPlanClsCd',name:'상위매출계획구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperSellPlanClsNm',name:'상위매출계획구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomNm',name:'사업영역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CoClsCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkLevel',name:'name14',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchSellPlanCls',action:'/ac.co.bizplan.RetrieveSellingPlanClassificationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_searchSellPlanCls","key":"IN_DS1"},{"id":"ds_sellPlanCls","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_sellPlanCls","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchSellPlanCls_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveSellPlanCls',action:'/ac.co.bizplan.SaveSellingPlanClassificationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_sellPlanCls","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveSellPlanCls_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.currentRowPosition = -1;
scwin.pos_groupCode = 0; // Grid의 저장시 위치로 이동하게 하는 전역변수
scwin.load_row = 0; // 조회후 focus가게 할  row
scwin.YYYY = ""; // 조회시 저장할 년도    
scwin.upperClsCd = "";
scwin.coCd = ""; //조회시 저장할 회사코드
scwin.coNm = "";
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사  
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
; // 회사코드
scwin.isSubCompany = false;
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.txtCoClsCd = "";
scwin.txtSchCoClsCd = "";
scwin.isStart = false;

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  let cd, nm;

  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  if (flag == "ALL") {
    cd = "";
    nm = "";
  } else {
    cd = orgObjCd.getValue();
    nm = orgObjNm.getValue();
  }
  switch (select_code) {
    case '1':
      await udc_sellPlanClsCdInfo.cfCommonPopUp(scwin.udc_sellPlanClsCdInfo_callBackFunc, cd, nm, "T", null, null, null, null, ica_planYr.getValue().trim() + "," + ed_coCd.getValue().trim() + ",,,", "450", "500", null, null, null, "T"); // 매출계획구분조회
      break;
    case '2':
      await udc_bizDomCdInfo.cfCommonPopUp(scwin.udc_bizDomCdInfo_callBackFunc, cd, nm, "T", null, null, null, null, null, "450", "500", null, null, null, "T", null, null); // 사업영역
      break;
    case '3':
      await udc_mgntAcctCdInfo.cfCommonPopUp(scwin.udc_mgntAcctCdInfo_callBackFunc, cd, nm, "T", null, null, null, null, "4100000,,,,", "450", "500", null, null, null, "T"); // 매출계정코드
      break;
    default:
      await $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};
scwin.udc_sellPlanClsCdInfo_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_upperSellPlanClsCd.setValue(rtnList[0]);
    ed_upperSellPlanClsNm.setValue(rtnList[1]);
    if (!ed_upperSellPlanClsCd.options) ed_upperSellPlanClsCd.options = {};
    if (!ed_upperSellPlanClsNm.options) ed_upperSellPlanClsNm.options = {};
    ed_upperSellPlanClsCd.options.hidVal = rtnList[0];
    ed_upperSellPlanClsNm.options.hidVal = rtnList[1];
  } else {
    ed_upperSellPlanClsCd.setValue("");
    ed_upperSellPlanClsNm.setValue("");
    if (!ed_upperSellPlanClsCd.options) ed_upperSellPlanClsCd.options = {};
    if (!ed_upperSellPlanClsNm.options) ed_upperSellPlanClsNm.options = {};
    ed_upperSellPlanClsCd.options.hidVal = "";
    ed_upperSellPlanClsNm.options.hidVal = "";
  }
};
scwin.udc_bizDomCdInfo_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_bizDomCd.setValue(rtnList[0]);
    ed_bizDomNm.setValue(rtnList[1]);
    if (!ed_bizDomCd.options) ed_bizDomCd.options = {};
    if (!ed_bizDomNm.options) ed_bizDomNm.options = {};
    ed_bizDomCd.options.hidVal = rtnList[0];
    ed_bizDomNm.options.hidVal = rtnList[1];
  } else {
    ed_bizDomCd.setValue("");
    ed_bizDomNm.setValue("");
    if (!ed_bizDomCd.options) ed_bizDomCd.options = {};
    if (!ed_bizDomNm.options) ed_bizDomNm.options = {};
    ed_bizDomCd.options.hidVal = "";
    ed_bizDomNm.options.hidVal = "";
  }
};
scwin.udc_mgntAcctCdInfo_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_acctCd.setValue(rtnList[0]);
    ed_acctNm.setValue(rtnList[1]);
    if (!ed_acctCd.options) ed_acctCd.options = {};
    if (!ed_acctNm.options) ed_acctNm.options = {};
    ed_acctCd.options.hidVal = rtnList[0];
    ed_acctNm.options.hidVal = rtnList[1];
  } else {
    ed_acctCd.setValue("");
    ed_acctNm.setValue("");
    if (!ed_acctCd.options) ed_acctCd.options = {};
    if (!ed_acctNm.options) ed_acctNm.options = {};
    ed_acctCd.options.hidVal = "";
    ed_acctNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (!orgObjCd.options) orgObjCd.options = {};
  if (!orgObjNm.options) orgObjNm.options = {};
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.options.hidVal) {
      return;
    } else {
      orgObjCd.setValue("");
    }
  }
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    orgObjCd.setValue(rtnList[0]);
    orgObjNm.setValue(rtnList[1]);
    if (!orgObjCd.options) orgObjCd.options = {};
    if (!orgObjNm.options) orgObjNm.options = {};
    orgObjCd.options.hidVal = rtnList[0];
    orgObjNm.options.hidVal = rtnList[1];
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
    if (!orgObjCd.options) orgObjCd.options = {};
    if (!orgObjNm.options) orgObjNm.options = {};
    orgObjCd.options.hidVal = "";
    orgObjNm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  scwin.f_SetSrchDefault();
  $c.gus.cfDisableObjects($p, [ica_planYr, btn_sellPlanClsCd, btn_bizDomCdInfo, btn_mgntAcctCdInfo, btn_company, ed_coCd, ed_coNm, ed_upperSellPlanClsNm, ed_upperSellPlanClsCd, ed_bizDomCd, ed_bizDomNm, ed_acctCd, ed_acctNm]);
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bSave')]);
  $c.gus.cfDisableKeyData($p);
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  ica_FromDate.setValue($c.date.getServerDateTime($p, "yyyy"));
  ica_FromDate.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ica_FromDate, ed_schCoCd]);
  if (!ret) {
    return false;
  }
  $c.sbm.execute($p, sbm_searchSellPlanCls);
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bSave')]);
  $c.gus.cfDisableObjects($p, [ica_planYr, btn_sellPlanClsCd, btn_bizDomCdInfo, btn_mgntAcctCdInfo, btn_company, ed_coCd, ed_coNm, ed_upperSellPlanClsNm, ed_upperSellPlanClsCd, ed_bizDomCd, ed_bizDomNm, ed_acctCd, ed_acctNm]);
  $c.gus.cfDisableKeyData($p);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddItem = async function () {
  for (let j = 0; j < ds_sellPlanCls.getRowCount(); j++) {
    let rowStatus = ds_sellPlanCls.getRowStatus(j);
    if (rowStatus == "C" || rowStatus == "U") {
      await $c.win.alert($p, "저장되지 않은 데이타가 있습니다");
      tv_treeView.focus();
      tv_treeView.findNodeByIndex(j + 1, true);
      $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bUpdate')]);
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, ed_bizDomCd, btn_company, ed_upperSellPlanClsCd, ed_acctCd, btn_sellPlanClsCd, btn_bizDomCdInfo, btn_mgntAcctCdInfo]);
      $c.gus.cfDisableKey($p);
      return;
    }
  }
  let checkLevel = tv_treeView.getSelectedNode().depth + 1;
  let upperSellPlanClsCd = ds_sellPlanCls.getCellData(ds_sellPlanCls.getRowPosition(), "sellPlanClsCd");
  if (ds_sellPlanCls.getRowCount() != 0) {
    if (ds_sellPlanCls.getCellData(ds_sellPlanCls.getRowPosition(), "planYr").trim() != "") {
      scwin.YYYY = ds_sellPlanCls.getCellData(ds_sellPlanCls.getRowPosition(), "planYr");
      scwin.coCd = ds_sellPlanCls.getCellData(ds_sellPlanCls.getRowPosition(), "coCd");
      scwin.coNm = ds_sellPlanCls.getCellData(ds_sellPlanCls.getRowPosition(), "coNm");
    }
  }

  // 상위매출계획구분코드의 계정명을 가져온다.
  await udc_sellPlanClsCdInfo.cfCommonPopUp(scwin.udc_comCodeUp_callBackFunc, upperSellPlanClsCd, '', "T", null, null, null, null, null, "450", "500", null, "T", null, null, null, "T");
  let newRowIndex;
  if (ds_sellPlanCls.getRowPosition() == ds_sellPlanCls.getRowCount() - 1 || ds_sellPlanCls.getRowCount() == 0) {
    newRowIndex = ds_sellPlanCls.insertRow();
    ds_sellPlanCls.setCellData(newRowIndex, "checkLevel", checkLevel);
    ds_sellPlanCls.setCellData(newRowIndex, "upperSellPlanClsCd", upperSellPlanClsCd);
    if (!ed_upperSellPlanClsCd.options) ed_upperSellPlanClsCd.options = {};
    ed_upperSellPlanClsCd.options.hidVal = upperSellPlanClsCd;
    scwin.currentRowPosition = newRowIndex;
  } else {
    newRowIndex = ds_sellPlanCls.insertRow(ds_sellPlanCls.getRowPosition() + 1);
    ds_sellPlanCls.setCellData(newRowIndex, "checkLevel", checkLevel);
    ds_sellPlanCls.setCellData(newRowIndex, "upperSellPlanClsCd", upperSellPlanClsCd);
    if (!ed_upperSellPlanClsCd.options) ed_upperSellPlanClsCd.options = {};
    ed_upperSellPlanClsCd.options.hidVal = upperSellPlanClsCd;
    scwin.currentRowPosition = newRowIndex;
  }
  tv_treeView.focus();
  tv_treeView.findNodeByIndex(newRowIndex + 1, true);
  $c.gus.cfDisableObjects($p, [ed_upperSellPlanClsNm, ed_bizDomNm, ed_acctNm, ed_coCd, ed_coNm, btn_company]);
  $c.gus.cfEnableObjects($p, [btn_sellPlanClsCd, ed_sellPlanClsNm, ed_upperSellPlanClsCd, btn_bizDomCdInfo, btn_mgntAcctCdInfo, ed_bizDomCd, ed_acctCd, cbx_delYn]);
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bUpdate')]);
  ica_planYr.setValue(scwin.YYYY);
  if (scwin.coCd == "") {
    ed_coCd.setValue(scwin.vLoginCoCd);
    scwin.f_PopUpCompanyInfo('T', ed_coCd, ed_coNm, scwin.txtCoClsCd);
  } else {
    ed_coCd.setValue(scwin.coCd);
    ed_coNm.setValue(scwin.coNm);
  }
  if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  }
  tv_treeView.focus();
};
scwin.udc_comCodeUp_callBackFunc = function (rtnList) {
  // SET
  if (rtnList == "N/A") {
    ed_upperSellPlanClsNm.setValue("");
  } else {
    ed_upperSellPlanClsNm.setValue(rtnList[1]);
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  scwin.currentRowPosition = -1;
  scwin.load_row = 1;
  let row = ds_sellPlanCls.getRowPosition();
  if (ds_sellPlanCls.getRowStatus(row) == "C") {
    ds_sellPlanCls.removeRow(row);
    tv_treeView.findNodeByIndex(row - 1, true);
  } else {
    ds_sellPlanCls.undoRow(row);
    tv_treeView.findNodeByIndex(row - 1, true);
  }
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bSave')]);
  $c.gus.cfDisableObjects($p, [ica_planYr, btn_sellPlanClsCd, btn_bizDomCdInfo, btn_mgntAcctCdInfo, btn_company]);
  $c.gus.cfDisableKeyData($p);
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = async function () {
  for (j = 0; j < ds_sellPlanCls.getRowCount(); j++) {
    if (ds_sellPlanCls.getRowStatus(j) == "C" || ds_sellPlanCls.getRowStatus(j) == "U") {
      await $c.win.alert($p, "저장되지 않은 데이타가 있습니다");
      tv_treeView.focus();
      tv_treeView.getSelectedIndex(j);
      $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bUpdate')]);
      $c.gus.cfEnableObjects($p, [ica_planYr, btn_sellPlanClsCd, btn_bizDomCdInfo, btn_mgntAcctCdInfo]);
      $c.gus.cfDisableKey($p);
      return;
    }
  }

  // disable 처리
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bUpdate')]);
  $c.gus.cfEnableObjects($p, [btn_sellPlanClsCd, ed_sellPlanClsNm, btn_bizDomCdInfo, btn_mgntAcctCdInfo, ed_upperSellPlanClsCd, ed_bizDomCd, ed_acctCd, cbx_delYn]);
  $c.gus.cfDisableObjects($p, [ed_coNm, btn_company]);
  $c.gus.cfDisableKey($p);

  //focus 설정
  ed_sellPlanClsNm.focus();
  scwin.currentRowPosition = ds_sellPlanCls.getRowPosition();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let count = 0;

  // 상위사업영역 체크
  //if(ds_sellPlanCls.NameValue(ds_sellPlanCls.RowPosition, "checkLevel")!='0'&& ed_upperBizDomCd.text.trim()==''){
  //cfAlertMsg(MSG_CM_ERR_002, Array("상위사업영역코드"));
  //ed_upperBizDomCd.Focus();
  //return;
  //}

  if (ed_sellPlanClsCd.getValue().trim() == ed_upperSellPlanClsCd.getValue().trim() && ed_sellPlanClsCd.getValue().trim() != "" && ed_upperSellPlanClsCd.getValue().trim() != "") {
    await $c.win.alert($p, "매출계획구분코드와 상위매출계획구분코드는 동일할수 없습니다.");
    ed_upperSellPlanClsCd.focus();
    return;
  }
  //변경한 데이터가 있는지 체크한다.
  if (ds_sellPlanCls.getModifiedIndex().length == 0) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, ["매출계획구분등록"]));
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    scwin.pos_groupCode = ds_sellPlanCls.getRowPosition();
    $c.sbm.execute($p, sbm_saveSellPlanCls);
  }
};

//-------------------------------------------------------------------------
// 자동생성하는 함수
//-------------------------------------------------------------------------
scwin.f_Auto = function () {
  let data = {};
  let opts = {
    id: "popup",
    popupName: "매출계획구분등록 자동생성"
  };
  data.planYr = ica_FromDate.getValue().trim();
  data.CO_CD = ed_schCoCd.getValue();
  data.CO_NM = ed_schCoNm.getValue();
  $c.win.openPopup($p, "/ui/ac/co/bizplan/co_201_02_03p.xml", opts, data);
};

//-------------------------------------------------------------------------
// 삭제여부 포함 Filter
//-------------------------------------------------------------------------
scwin.f_Filter = function (chkBool) {
  //ds_sellPlanCls.Filter();
};

//-------------------------------------------							
// 그리드 높이 늘리고 줄이기							
//-------------------------------------------							
scwin.f_grdHeiht = function (gridNm, size) {
  let strHeight = gridNm.style.height;
  let intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    gridNm.style.height = intHeight + "px";
  }
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.isStart = true;
  ed_schCoCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T', ed_schCoCd, ed_schCoNm, scwin.txtSchCoClsCd, 1);
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF, _coCd, _coNm, _coClsCd, isSch) {
  if (isSch == 1) {
    await udc_retrieveCompanyInfo.cfCommonPopUp(scwin.udc_retrieveCompanyInfo_callBackFunc, _coCd.getValue(), "", pWinCloseTF, null, null, null, null, null, null, null, null, null);
  } else {
    await udc_detailCompanyInfo.cfCommonPopUp(scwin.udc_detailCompanyInfo_callBackFunc, _coCd.getValue(), "", pWinCloseTF, null, null, null, null, null, null, null, null, null);
  }
};
scwin.udc_retrieveCompanyInfo_callBackFunc = function (rtnList) {
  // SET
  if (!ed_schCoCd.options) ed_schCoCd.options = {};
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_schCoCd.setValue(rtnList[0]); // 코드
    ed_schCoNm.setValue(rtnList[5]); // 회사명 
    ed_schCoCd.options.hidVal = rtnList[0]; // 히든값
    scwin.txtSchCoClsCd = rtnList[1]; // 회사구분  
  } else {
    ed_schCoCd.setValue("");
    ed_schCoNm.setValue("");
    ed_schCoCd.options.hidVal = "";
    scwin.txtSchCoClsCd = "";
  }
  if (scwin.txtSchCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStart == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
      $c.gus.cfEnableObjects($p, [ed_schCoCd, ed_schCoNm, btn_schCompany]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_schCoCd, ed_schCoNm, btn_schCompany]);
    }
  }
  scwin.isStart = false;
};
scwin.udc_detailCompanyInfo_callBackFunc = function (rtnList) {
  // SET
  if (!ed_coCd.options) ed_coCd.options = {};
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    ed_coCd.options.hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분  
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};
scwin.sbm_searchSellPlanCls_submitdone = async function (e) {
  scwin.YYYY = ica_FromDate.getValue().trim();
  scwin.coCd = ed_schCoCd.getValue().trim();
  scwin.coNm = ed_schCoNm.getValue().trim();
  if (ds_sellPlanCls.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    $c.gus.clear($p, "tv_treeView");
  } else {
    tv_treeView.findNodeByIndex(1, true);
  }

  //tree에 focus주기
  tv_treeView.focus();
  tv_treeView.findNodeByIndex(scwin.pos_groupCode + 1, true);
};
scwin.sbm_saveSellPlanCls_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code != -1) {
    await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.
    scwin.currentRowPosition = -1;
    ds_sellPlanCls.reform();
    scwin.f_Retrieve();
  } else {
    ds_sellPlanCls.reform();
    scwin.f_Retrieve();
  }
};
scwin.tv_treeView_onclick = function () {
  if (scwin.currentRowPosition == ds_sellPlanCls.getRowPosition()) {
    $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bUpdate')]);
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company, btn_sellPlanClsCd, btn_bizDomCdInfo, btn_mgntAcctCdInfo, ed_upperSellPlanClsCd, ed_bizDomCd, ed_acctCd, cbx_delYn]);
    $c.gus.cfDisableKey($p);
  } else {
    $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bSave')]);
    $c.gus.cfDisableObjects($p, [ica_planYr, btn_sellPlanClsCd, btn_bizDomCdInfo, btn_mgntAcctCdInfo, btn_company, ed_coCd, ed_coNm, ed_upperSellPlanClsNm, ed_upperSellPlanClsCd, ed_bizDomCd, ed_bizDomNm, ed_acctCd, ed_acctNm]);
    $c.gus.cfDisableKeyData($p);
  }
};
scwin.udc_sellPlanClsCdInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_upperSellPlanClsCd, ed_upperSellPlanClsNm, '1', 'CD');
};
scwin.udc_sellPlanClsCdInfo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_upperSellPlanClsCd, ed_upperSellPlanClsNm, '1', 'NM');
};
scwin.udc_bizDomCdInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_bizDomCd, ed_bizDomNm, '2', 'CD');
};
scwin.udc_bizDomCdInfo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_bizDomCd, ed_bizDomNm, '2', 'NM');
};
scwin.udc_mgntAcctCdInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctCd, ed_acctNm, '3', 'CD');
};
scwin.udc_mgntAcctCdInfo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctCd, ed_acctNm, '3', 'NM');
};
scwin.udc_retrieveCompanyInfo_onblurCodeEvent = function (e) {
  if (ed_schCoCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T', ed_schCoCd, ed_schCoNm, scwin.txtSchCoClsCd, 1);
  } else {
    ed_schCoNm.setValue("");
  }
};
scwin.udc_detailCompanyInfo_onblurCodeEvent = function (e) {
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('F', ed_coCd, ed_coNm, scwin.txtCoClsCd, 2);
  } else {
    ed_coNm.setValue("");
  }
};
scwin.udc_retrieveCompanyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F', ed_schCoCd, ed_schCoNm, scwin.txtSchCoClsCd, 1);
};
scwin.btn_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1, [ica_FromDate, ed_schCoCd, ed_schCoNm]);
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.udc_detailCompanyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F', ed_coCd, ed_coNm, scwin.txtCoClsCd, 2);
};
scwin.udc_sellPlanClsCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_upperSellPlanClsCd, ed_upperSellPlanClsNm, '1', 'ALL');
};
scwin.udc_bizDomCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_bizDomCd, ed_bizDomNm, '2', 'ALL');
};
scwin.udc_mgntAcctCdInfo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_acctCd, ed_acctNm, '3', 'ALL');
};
scwin.tv_treeView_onchange = function (oldNode, newNode) {
  ed_acctCd.options.hidVal = "";
  ed_bizDomCd.options.hidVal = "";
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{style:'',popupID:'',codeId:'ed_schCoCd',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',maxlengthCode:'3',nameId:'ed_schCoNm',btnId:'btn_schCompany',id:'udc_retrieveCompanyInfo','ev:onblurCodeEvent':'scwin.udc_retrieveCompanyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_retrieveCompanyInfo_onclickEvent',selectID:'retrieveDongbuGroupCompanyInfo',refDataCollection:'dma_searchSellPlanCls',code:'coCd',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업년도 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'',id:'ica_FromDate',style:'',mandatory:'true',validExp:'사업년도:yes:date=YYYY',validateOnInput:'true',displayFormat:'yyyy',ref:'data:dma_searchSellPlanCls.planYr',title:'사업년도',pickerType:'dynamic'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매출계획구분 Tree',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_add',style:'',title:'행추가',type:'button',objType:'bCreate',userAuth:'C','ev:onclick':'scwin.f_AddItem'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_cancel',style:'',title:'취소',type:'button',objType:'bDelete','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'N',gridUpYn:'N',grp:'grp_group2',templateYn:'N',style:'',gridID:'',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{id:'grp_group2',class:'tvw-wrap'},E:[{T:1,N:'w2:treeview',A:{showTreeDepth:'0',tooltipGroupClass:'false',dataType:'listed','ev:onclick':'scwin.tv_treeView_onclick',style:'height:100%;',id:'tv_treeView',renderType:'virtual',class:'','ev:onchange':'scwin.tv_treeView_onchange'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_sellPlanCls'},E:[{T:1,N:'w2:label',A:{ref:'sellPlanClsNm'}},{T:1,N:'w2:value',A:{ref:'sellPlanClsCd'}},{T:1,N:'w2:depth',A:{ref:'checkLevel'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매출계획구분상세내역',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업년도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'year',class:'',id:'ica_planYr',style:'',mandatory:'true',objType:'key',validExp:'사업년도:yes:date=YYYY',displayFormat:'yyyy',validateOnInput:'true',ref:'data:ds_sellPlanCls.planYr',title:'사업년도'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회사코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{class:'col7',popupID:'',style:'',codeId:'ed_coCd',validExpCode:'회사코드:yes',objTypeCode:'key',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'7',nameId:'ed_coNm',btnId:'btn_company',id:'udc_detailCompanyInfo','ev:onblurCodeEvent':'scwin.udc_detailCompanyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_detailCompanyInfo_onclickEvent',selectID:'retrieveDongbuGroupCompanyInfo',refDataCollection:'ds_sellPlanCls',code:'coCd',name:'coNm',validTitle:'회사코드'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출계획구분코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'w85',id:'ed_sellPlanClsCd',placeholder:'',style:'',objType:'key',validExp:'매출계획구분코드:yes:maxLength=3&number',allowChar:'0-9 ',maxlength:'3',ref:'data:ds_sellPlanCls.sellPlanClsCd',title:'매출계획구분코드'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출계획구분명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'col7',id:'ed_sellPlanClsNm',placeholder:'',style:'',mandatory:'true',validExp:'매출계획구분명:yes:maxByteLength=50',objType:'data',maxlength:'50',ref:'data:ds_sellPlanCls.sellPlanClsNm',title:'매출계획구분명'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상위매출계획코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'col7',popupID:'',style:'',codeId:'ed_upperSellPlanClsCd',validExpCode:'상위매출계획구분코드:no:maxLength=5&number',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9 ',maxlengthCode:'5',editTypeCode:'select',nameId:'ed_upperSellPlanClsNm',objTypeName:'key',editTypeName:'select',maxlengthName:'20',btnId:'btn_sellPlanClsCd',id:'udc_sellPlanClsCdInfo','ev:onblurCodeEvent':'scwin.udc_sellPlanClsCdInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_sellPlanClsCdInfo_onblurNameEvent','ev:onclickEvent':'scwin.udc_sellPlanClsCdInfo_onclickEvent',selectID:'retrieveSellPlanClsCdInfo',code:'upperSellPlanClsCd',name:'upperSellPlanClsNm',refDataCollection:'ds_sellPlanCls',validTitle:'상위매출계획코드',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업영역',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'col7',popupID:'',style:'',codeId:'ed_bizDomCd',validExpCode:'사업영역:no:maxLength=3&number',objTypeCode:'data',UpperFlagCode:'1',maxlengthCode:'3',allowCharCode:'0-9 ',editTypeCode:'select',nameId:'ed_bizDomNm',objTypeName:'key',editTypeName:'select',maxlengthName:'20',btnId:'btn_bizDomCdInfo',id:'udc_bizDomCdInfo','ev:onblurCodeEvent':'scwin.udc_bizDomCdInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bizDomCdInfo_onblurNameEvent','ev:onclickEvent':'scwin.udc_bizDomCdInfo_onclickEvent',selectID:'retrieveBizDomCdInfo',code:'bizDomCd',name:'bizDomNm',refDataCollection:'ds_sellPlanCls',validTitle:'사업영역',skipOnBlurCodeValueEmpty:'N','ev:onviewchangeCodeEvent':'scwin.udc_bizDomCdInfo_onviewchangeCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출계정코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'col7',popupID:'',style:'',codeId:'ed_acctCd',validExpCode:'매출계정코드:no:maxLength=7&number',objTypeCode:'data',UpperFlagCode:'1',maxlengthCode:'7',allowCharCode:'0-9 ',editTypeCode:'select',nameId:'ed_acctNm',objTypeName:'key',editTypeName:'select',maxlengthName:'50',btnId:'btn_mgntAcctCdInfo',id:'udc_mgntAcctCdInfo','ev:onblurCodeEvent':'scwin.udc_mgntAcctCdInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_mgntAcctCdInfo_onblurNameEvent','ev:onclickEvent':'scwin.udc_mgntAcctCdInfo_onclickEvent',selectID:'retrieveMgntAcctCdInfo2',code:'acctCd',name:'acctNm',refDataCollection:'ds_sellPlanCls',validTitle:'매출계정코드',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'삭제여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'cbx_delYn',ref:'data:ds_sellPlanCls.delYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',objType:'data',tabIndex:'11',title:'삭제여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_Add',type:'button',class:'btn white',objType:'bUpdate',userAuth:'C','ev:onclick':'scwin.f_Auto'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자동생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_edit',style:'',type:'button',objType:'bUpdate',userAuth:'U','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})