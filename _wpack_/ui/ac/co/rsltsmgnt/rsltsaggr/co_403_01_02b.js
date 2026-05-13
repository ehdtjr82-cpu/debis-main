/*amd /ui/ac/co/rsltsmgnt/rsltsaggr/co_403_01_02b.xml 30799 cd796c248a63025bdcd08feb354950eca1e6469b55c82d4ef064cbf9bd49a655 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'planRsltsClsCd',name:'계획/실적',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'공통1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'공통2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'공통3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'공통4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'grpCd',name:'그룹코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ver',name:'버전',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetCostCd',name:'상위자산비용코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetCostCdNm',name:'상위자산비용코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAsetCostCd',name:'상위자산비용코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAsetCostCdNm',name:'상위자산비용코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planRsltsClsCd',name:'계획/실적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetGroup',name:'자산그룹',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetCost',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrlAmt',name:'조정금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsAmt',name:'실적금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_version',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.co.rsltsmgnt.rsltsaggr.RetrieveAssetsCostControlAmountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search", "key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.co.rsltsmgnt.rsltsaggr.RegistAssetsCostControlAmountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCommonPopup',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_search',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 자산비용조정금액등록
 * 메뉴경로 : 회계/관리회계/실적관리/실적집계/자산비용관리/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/co/rsltsmgnt/rsltsaggr/co_403_01_02b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-12-03
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항
 *    1. login정보 확인 필요 
 *     ☞  $c.data.getMemInfo() 처리
 *    2. [해결]<%@ page import="dbl.ac.am.constants.ACConstants" %> 상수가져오는건 공통에서 글로벌 상수로 변경할 듯. 
 *    3. 상수값 가져오는거 어떻게 할지? DGlobalValue.java 이런거 있을때마다 개발자가 DGlobalValue.js로 변경해서 올려야 하나?
 *    4. 엑셀다운로드 시 Number타입 excelFormat, excelCellType 옵션 추가 작업
 * 테스트데이터 :
 *    1. 회사코드[000], 실적, 마감년월[2026/03], 버전[002], 부서[00009:재경]
 * 수정이력 :
 *    - 2025-12-03      배기원    최초작성
 */
//hidden 값
scwin.txtCoClsCd = "";
scwin.memJson;
scwin.vLoginCoCd; //소속자회사
scwin.vLoginCoClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd; //사용자소속구분코드
scwin.isSubCompany;
scwin.privAdmin;

//상수값(임시)
scwin.DGlobalValue = {
  "ALL": -1,
  "TRUE": 1,
  "FALSE": 0
};
scwin.closeYm = "";
scwin.first = 0;

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson["coCd"]) ? "" : scwin.memJson["coCd"]; //소속자회사
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson["coClsCd"]) ? "" : scwin.memJson["coClsCd"]; //회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, scwin.memJson["userHomeClsCd"]) ? "" : scwin.memJson["userHomeClsCd"]; //사용자소속구분코드
  scwin.isSubCompany = false;
  scwin.privAdmin = $c.gus.cfIsNull($p, scwin.memJson["privAdmin"]) ? "" : scwin.memJson["privAdmin"]; //관리자권한
  scwin.first = 0;
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_master.setNoResultMessageVisible(false);
  ds_master.removeAll();
  totalRows.setValue("0");
  $c.gus.cfDisableObjects($p, [btn_save]);
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_HeaderCreate();
  scwin.f_SetSrchDefault();
  $c.gus.cfDisableObjects($p, [btn_save]);
  scwin.f_setCompanyInfo();
  dma_search.reform();
};

/**
 * 조회필드 CLEAR
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ica_srchCloseYm, rd_planRsltsClsCd, lc_version, ed_coCd, ed_coNm]);
  scwin.f_SetSrchDefault();
};

/**
 * 조회 기본값 설정
 */
scwin.f_SetSrchDefault = function () {
  rd_planRsltsClsCd.setValue("2");
  ed_srchAcctDeptCd.setValue("");
  ed_srchAcctDeptNm.setValue("");
  scwin.closeYm = $c.date.getServerDateTime($p).substring(0, 6);
  ica_srchCloseYm.setValue(scwin.closeYm);
  scwin.f_GetVersion();
  ica_srchCloseYm.focus();
};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE 사용안함
 */
scwin.f_HeaderCreate = function () {
  // var GAUCE_DATASET_HEADER = "closeYm:STRING"
  //     + ",ver:STRING"
  //     + ",acctDeptCd:STRING"
  //     + ",acctDeptNm:STRING"
  //     + ",planRsltsClsCd"
  //     + ",coCd";
  // ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_search.insertRow();
};

/**
* 조회버튼
*/
scwin.f_Retrieve = async function () {
  if (ds_master.getRowCount() > 0 && ds_master.getModifiedIndex().length > 0) {
    if (!(await $c.win.confirm($p, MSG_CM_CRM_005))) {
      return;
    }
  }
  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_srchCloseYm, lc_version, ed_srchAcctDeptCd]);
  if (!ret) {
    return false;
  }
  if (ica_srchCloseYm.getValue().length != 6) {
    await $c.win.alert($p, "마감년월은(는) 6자리수만큼 입력하십시오.");
    ica_srchCloseYm.focus();
    return;
  }
  ret = await $c.date.isDate($p, ica_srchCloseYm.getValue() + "01");
  if (!ret) {
    await $c.win.alert($p, "올바른 마감년월을(를) 입력하십시오.");
    ica_srchCloseYm.focus();
    return;
  }
  if (ed_srchAcctDeptCd.getValue() != ed_srchAcctDeptCd.hidVal) {
    // MSG_CM_ERR_038   =  "유효한 @가 아닙니다."
    // $c.win.alert(MSG_CM_ERR_038, ["부서"]);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["부서"]);
    ed_srchAcctDeptCd.focus();
    return;
  }
  scwin.setInit();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_master.setNoResultMessageVisible(true);
  let rowCnt = ds_master.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt > 0) {
    for (let i = 0; i < rowCnt; i++) {
      let upperAsetCostCd = ds_master.getCellData(i, "upperAsetCostCd");
      let upperAsetCostCdNm = ds_master.getCellData(i, "upperAsetCostCdNm");
      //자산그룹
      ds_master.setCellData(i, "asetGroup", upperAsetCostCd + " " + upperAsetCostCdNm);
      //계정코드
      let asetCostCd = ds_master.getCellData(i, "asetCostCd");
      let asetCostCdNm = ds_master.getCellData(i, "asetCostCdNm");
      ds_master.setCellData(i, "asetCost", asetCostCd + " " + asetCostCdNm);
    }
    ds_master.reform();
    gr_master.setFocusedCell(0, 2, true);
    $c.gus.cfEnableBtnOnly($p, [btn_save]);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 저장버튼
 */
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다.
  // if (ds_master.IsUpdated == false) {
  if (ds_master.getModifiedIndex().length < 1) {
    // MSG_CM_ERR_001   = "@은(는) 변경된 사항이 없습니다."
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    sbm_save.userData1 = "noError";
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
    return;
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    ds_master.reform();
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    $c.sbm.execute($p, sbm_retrieve);
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 팝업
 * TOBE 사용안함
 */
scwin.f_PopUp = function (paramArray) {
  var code = $c.gus.cfIsNull($p, paramArray.pCode) ? "" : paramArray.pCode;
  var name = $c.gus.cfIsNull($p, paramArray.pName) ? "" : paramArray.pName;
  var rtnList = cfCommonPopUp(paramArray.pSelectID, code, name, scwin.f_EventCheck(), paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
  return rtnList;
};

/**
 * 팝업여부검사
 * TOBE 사용안함
 */
scwin.f_IsPopUp = function (inObj) {
  var inValue = $c.gus.cfGetValue($p, inObj);
  var hidValue = inObj.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.hidVal = "";
    for (var i = 1; i < f_IsPopUp.arguments.length; i++) {
      $c.gus.cfSetValue($p, f_IsPopUp.arguments[i], "");
    }
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};

/**
 * 팝업 이벤트에 따라 팝업창의 자동닫기 여부를 반환
 * TOBE : 사용안함
 */
scwin.f_EventCheck = function () {
  //if (window.event != null && window.event.srcElement.tagName.toUpperCase() == "IMG") {
  if (window.event != null && window.event.srcElement.tagName.toUpperCase() == "btn_") {
    return 'F';
  } else {
    return 'T';
  }
};

/**
 * 부서코드팝업
 */
// scwin.f_deptPopUp = function() {
scwin.f_deptPopUp = function (close) {
  // var codeObj = ed_srchAcctDeptCd;
  // var nameObj = ed_srchAcctDeptNm;
  // var paramArray = new Object();

  // if (ica_srchCloseYm.getValue().substring(0, 4).trim() == '2006') {
  //     paramArray.pSelectID = 'retrieveAcctDeptCdInfoBef'
  // } else {
  //     paramArray.pSelectID = 'retrieveAcctDeptCdInfo'
  // };

  // paramArray.pCode = $c.gus.cfGetValue(codeObj);
  // paramArray.pW = "410";
  // paramArray.pAllSearchTF = 'F';
  // paramArray.pWhere = ",,,0,,1,,,," + ed_coCd.getValue();

  // var rtnList = scwin.f_PopUp(paramArray);
  // $c.gus.cfSetReturnValue(rtnList, codeObj, nameObj);
  let sqlId = "";
  if (ica_srchCloseYm.getValue().substring(0, 4).trim() == '2006') {
    sqlId = 'retrieveAcctDeptCdInfoBef';
  } else {
    sqlId = 'retrieveAcctDeptCdInfo';
  }
  ;
  udc_srchAcctDeptCd.setSelectId(sqlId);

  //조회조건 9번째, 전체검색허용여부 15번째
  var param = ",,,0,,1,,,," + ed_coCd.getValue();
  udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callBackFunc, ed_srchAcctDeptCd.getValue(), ed_srchAcctDeptNm.getValue(), close, null, null, null, null, param, null, null, null, null, null, "F", null, null);
};

/**
 * 부서코드 팝업 callBack
 */
scwin.udc_srchAcctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_srchAcctDeptCd.setValue(ret[0]); // 부서코드
    ed_srchAcctDeptNm.setValue(ret[1]); // 부서명
    ed_srchAcctDeptCd.hidVal = ret[0]; // 히든값
  } else {
    ed_srchAcctDeptCd.setValue(""); // 부서코드
    ed_srchAcctDeptNm.setValue(""); // 부서명
    ed_srchAcctDeptCd.hidVal = ""; // 히든값
  }
};

/**
 * Ver정보를 가져온다.
 */
scwin.f_GetVersion = async function () {
  // ds_version.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" +
  //     "&queryId=retrieveVersionInfo" +
  //     "&param1 = " + ica_srchCloseYm.getValue();
  // ds_version.undoAll();

  dma_search.set("sysCd", "CommonEBC");
  dma_search.set("queryId", "retrieveVersionInfo");
  dma_search.set("param1", ica_srchCloseYm.getValue());
  ds_version.removeAll();
  let ret = await $c.sbm.execute($p, sbm_retrieveCommonPopup);
  ds_version.setJSON(ret.responseJSON.GAUCE);
  ds_version.reform();
  await scwin.f_SetFinalVer();
};

/**
 * 최종 Ver을 설정
 */
scwin.f_SetFinalVer = function () {
  if (ds_version.getRowCount() < 1) return;
  let index = 0;
  for (let i = 0; i < ds_version.getRowCount(); i++) {
    if (ds_version.getCellData(i, "col3") == scwin.DGlobalValue.TRUE) {
      index = i;
      break;
    }
  }
  lc_version.setSelectedIndex(index);
};

/**
 * 마감년월 포커스 잃었을 시
 */
scwin.ica_srchCloseYm_onblur = function (e) {
  scwin.f_GetVersion();
};

/**
 * 그리드 데이터 엑셀로 다운
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
// scwin.f_runExcel = function (varGrNm) {
// var totCnt = ds_master.getRowCount();
// var sheetTitle = "자산비용조정금액등록내역";
// if (totCnt != 0) {
//     cfrm = confirm("EXCEL로 다운로드 받으시겠습니까?");
//     if (cfrm) {
//         $c.data.downloadGridViewExcel(varGrNm, sheetTitle, sheetTitle + ".xls", 4 + 8 + 16);
//     }
// } else {
//     $c.win.alert(MSG_CM_WRN_002);
// }
// };

/**
 * 그리드 높이 늘리기
 * TOBE 사용안함(UDC +-버튼사용, udc_topGrdBtn)
 */
// scwin.f_grdHeiht = function (gridNm, size) {
//     var strHeight = gridNm.style.height;
//     var intHeight = parseInt(strHeight.replace("px", ""));
//     intHeight = intHeight + size;
//     if (intHeight > 0) {
//         gridNm.style.height = intHeight + "px";
//     }
// };

/**
 * 자회사 회계 시스템 추가에 따른 설정 
 */
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를 '동부 EXPRESS'로 Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

/**
 * 회사입력팝업
 */
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  //asis 소스
  // var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  //     , ed_coCd.text, ed_coNm.value
  //     , pWinCloseTF, null, null, null, null
  //     , null, null, null, null, null);
  // // SET
  // if (rtnList != null) {
  //     if (rtnList[0] == "N/A") return;

  //     if (ed_coCd.hidVal != rtnList[0])
  //         scwin.f_initObj();

  //     ed_coCd.setValue = rtnList[0]; // 코드
  //     ed_coNm.value = rtnList[5]; // 회사명
  //     ed_coCd.hidVal = rtnList[0]; // 히든값
  //     scwin.txtCoClsCd = rtnList[1]; // 회사구분

  // } else {
  //     ed_coCd.setValue = "";
  //     ed_coNm.value = "";
  //     ed_coCd.hidVal = "";
  //     scwin.txtCoClsCd = "";
  // }

  // if (scwin.txtCoClsCd > 'scwin.ACConstants.CO_CLS_CD_DONGBU') { // 자회사 회계 시스템
  //     scwin.isSubCompany = true;
  // } else {
  //     scwin.isSubCompany = false;
  // }

  udc_comCode.cfCommonPopUp(scwin.udc_comCode_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, null);
};

/**
 * 회사코드 팝업 callBack
 */
scwin.udc_comCode_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    if (ed_coCd.hidVal != ret[0]) {
      scwin.f_initObj();
    }
    ed_coCd.setValue(ret[0]); // 코드
    ed_coNm.setValue(ret[5]); // 회사명
    ed_coCd.hidVal = ret[0]; // 히든값
    scwin.txtCoClsCd = ret[1]; // 회사구분
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명
    ed_coCd.hidVal = ""; // 히든값
    scwin.txtCoClsCd = ""; // 회사구분
  }

  //TODO : 처음 로딩 시 한번만 처리(웹스퀘어 UDC 싱크....)
  if (scwin.first == 0) {
    // 자회사 회계 시스템
    if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
      scwin.isSubCompany = true;
    } else {
      scwin.isSubCompany = false;
    }
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.first++;
};

/**
 * 회사코드 초기화
 */
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_coCd, ed_coNm]); // 회사코드
};

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
 * 회사코드(조회) 팝업 호출
 */
scwin.udc_comCode_onclickEvent = function (e) {
  if (ed_coCd.hidVal != ed_coCd.getValue()) {
    ed_coNm.setValue("");
  }
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_comCode_onviewchangeCodeEvent = function (info) {
  ed_coNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_coCd.getValue())) {
    scwin.f_PopUpCompanyInfo('T');
  }
};

/**
 * 부서코드(조회) 팝업 호출
 */
scwin.udc_srchAcctDeptCd_onclickEvent = function (e) {
  if (ed_srchAcctDeptCd.hidVal != ed_srchAcctDeptCd.getValue()) {
    ed_srchAcctDeptNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_srchAcctDeptCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_deptPopUp(close);
};
scwin.udc_srchAcctDeptCd_onviewchangeCodeEvent = function (info) {
  ed_srchAcctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_srchAcctDeptCd.getValue())) {
    scwin.f_deptPopUp("T");
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * 입력이 가능한 컬럼에서 포커스가 빠져나가는 시점에 본 속성에 정의한 함수를 실행
 * 맨앞 숫자 0이면 제거
 */
scwin.validatorNumber = function (val) {
  if (val[0] == 0) {
    //val[0] == "";
    return "0";
  } else {
    val = val;
  }
  if (val.length == 0) {
    return "0";
  }
  return val;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_company',code:'coCd',codeId:'ed_coCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent',id:'udc_comCode',mandatoryCode:'true',maxlengthCode:'3',maxlengthName:'30',name:'coNm',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'key',popupID:'popupCocd',refDataCollection:'dma_search',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'회사코드',validTitle:'회사코드'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_planRsltsClsCd',ref:'data:dma_search.planRsltsClsCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',title:'계획/실젝',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계획'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실적'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'마감년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal w80',displayFormat:'yyyy/MM',id:'ica_srchCloseYm',mandatory:'true',objType:'data',ref:'data:dma_search.closeYm',style:'',title:'마감년월','ev:onblur':'scwin.ica_srchCloseYm_onblur',nextTabID:'lc_version'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'버전 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_version',style:'',submenuSize:'auto',mandatory:'true',validExp:'버전:yes',tabIndex:'-1',title:'버전',ref:'data:dma_search.ver',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_version'},E:[{T:1,N:'xf:label',A:{ref:'col4'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_srchAcctDeptCd',code:'acctDeptCd',codeId:'ed_srchAcctDeptCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_srchAcctDeptCd_onviewchangeCodeEvent',id:'udc_srchAcctDeptCd',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'30',name:'acctDeptNm',nameId:'ed_srchAcctDeptNm',objTypeCode:'data',objTypeName:'key',popupID:'popup_srchAcctDeptCd',refDataCollection:'dma_search',selectID:'retrieveAcctDeptCdInfo',style:'',validExpCode:'부서',validTitle:'부서',codeWidth:'50'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'자산비용조정금액',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"자산비용조정금액등록내역.xlsx", "sheetName":"자산비용조정금액등록내역", "type":"1", "hiddenVisible":false}',gridID:'gr_master',gridUpYn:'N',grp:'grd_section1',id:'udc_excel',style:'',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'20',readOnly:'true',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'200',value:'자산그룹'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'250',value:'계정코드'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'150',value:'조정금액',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'150',value:'실적금액'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'asetGroup',inputType:'text',removeBorderStyle:'false',width:'200',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'asetCost',inputType:'text',removeBorderStyle:'false',width:'250',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ctrlAmt',inputType:'text',removeBorderStyle:'false',width:'150',textAlign:'right',readOnly:'false',dataType:'number',displayFormat:'#,###',allowChar:'0-9',maxLength:'15',validator:'scwin.validatorNumber',validateOnInput:'true',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'rsltsAmt',inputType:'text',removeBorderStyle:'false',width:'150',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column16',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'column15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'ctrlAmt_s1',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',expression:'SUM("ctrlAmt")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',style:'',id:'rsltsAmt_s1',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',expression:'SUM("rsltsAmt")',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',displayFormatter:'#,###',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_save',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})