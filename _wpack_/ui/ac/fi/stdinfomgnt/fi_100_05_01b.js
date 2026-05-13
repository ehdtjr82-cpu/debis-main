/*amd /ui/ac/fi/stdinfomgnt/fi_100_05_01b.xml 50045 8fc114a0ca6e804ba71419244b158dba2408511a6b7a275959340380f323dc41 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dofficeCd',name:'구청코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dofficeNm',name:'구청명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'false','ev:onrowpositionchange':'scwin.ds_master_onrowpositionchange','ev:onbeforerowpositionchange':'scwin.ds_master_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dofficeCd',name:'구청코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dofficeNm',name:'구청명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pmntAcctDeptCd',name:'납부귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pmntAcctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pmntAcctDept',name:'납부부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnNm',name:'사업부명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nmCmpy',name:'회사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.stdinfomgnt.RetreiveDofficeCdRegListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.stdinfomgnt.CUDDofficeCdRegCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 구청코드등록
 * 메뉴경로 : 회계/재무회계/기준정보/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/fi/stdinfomgnt/fi_100_05_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-10-24
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 *    5. footer에 값 없음(asis도 없음)
 * 참고사항 : 
 *    1. 그리드ID.setNoResultMessageVisible(false) 설정해줘야 그리드에 데이터없음 안보임
 *    2. 상수값 가져오는거 어떻게 할지? DGlobalValue.java 이런거 있을때마다 개발자가 DGlobalValue.js로 변경해서 올려야 하나?
 *    ☞ 일단 임시로 만듬
 *    3. tobe 사용하지 않는 함수(scwin.f_GetObjValue, scwin.f_SetObjValue, scwin.f_EventCheck)
 *    4. ☏ onbeforerowpositionchange 이벤트에 $c.gus.cfValidate([tbl_save]) 처리 안됨
 *    ☞ 일단 scwin.f_ValidationSync() 만들어서 처리(scwin.setInit()에 ds_list.reform() 필수, 조회 시 이벤트 안태움)
 *    5. ☏ UDC 행추가, 취소가 나와야 하는데 안됨
 *    6. "hiddenVisible":true 되어 있는 항목 일단 false 처리[hiddenCol="true" => hiddenCol="false"]
 * 수정이력 :
 *    - 2025-10-24      배기원    최초작성
 */
//hidden 값
scwin.hid_seq = ""; //우편번호에 있는데 소스에서 처리안함
scwin.txtCoClsCd = ""; //회사구분코드(hidden, 회사팝업호출 시)

//로그인 정보
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
scwin.initJson = {}; //초기세팅값(TOBE)
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
  scwin.privAdmin = $c.gus.cfIsNull($p, scwin.memJson["privAdmin"]) ? "" : scwin.memJson["privAdmin"]; //ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님
  scwin.first = 0;
  /**
   * TODO : 임시로 회사코드 초기값 가지고 있기 위해 처리
   * 로드 시 마지막으로 처리되는 로직
   */
  const codeOptions = [{
    grpCd: "EQ055",
    compID: ""
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};

/**
 * $c.data.setCommonCode 함수의 콜백함수
 */
scwin.callBackCommonCode = function () {
  scwin.initJson = dma_search.getJSON();
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  ed_clntNo.hidVal = ""; //거래처코드(저장)
  ed_pmntAcctDeptCd.hidVal = ""; //납부부서코드(저장)
  ed_crn.hidVal = ""; //사업자번호(저장)

  $c.gus.cfDisableObjects($p, tbl_doffice);
  $c.gus.cfDisableBtn($p, [btn_update, btn_save]);
  gr_master.setNoResultMessageVisible(false);
  ds_master.reform();
  ds_master.removeAll();
  totalRows.setValue("0");
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  $c.gus.cfTurnCreateFlag($p, true);
  scwin.setInit();
  scwin.f_FieldClear();
  scwin.f_setCompanyInfo();
};

/**
 * 조회필드 CLEAR
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [lc_srchUseYn, ed_coCd, ed_coNm]);
  scwin.f_SetSrchDefault();
  ed_coCd.hidVal = ""; //회사코드(조회)
  //dma_search.setJSON(scwin.initJson);
};

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
  // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
  if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  }
};

/**
 * 조회 기본값 설정
 */
scwin.f_SetSrchDefault = function () {
  lc_srchUseYn.setValue(scwin.DGlobalValue.ALL);
  ed_srchDofficeCd.focus();
};

/**
 * 조회
 */
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [tbl_search]);
  if (!ret) {
    return false;
  }
  if (ds_master.getRowCount() > 0 && ds_master.getModifiedIndex().length > 0) {
    if ((await $c.win.confirm($p, MSG_CM_CRM_005)) == false) {
      return;
    }
  }
  scwin.setInit();
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_master.setNoResultMessageVisible(true);
  let rowCnt = ds_master.getRowCount();
  totalRows.setValue(rowCnt);
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  }
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    } else {
      //조회된 결과 정렬(asis:<param name=SortExpr 참조)
      ds_master.sort("dofficeCd", 0);
      for (var i = 0; i < rowCnt; i++) {
        var pmntAcctDeptCd = ds_master.getCellData(i, "pmntAcctDeptCd");
        if (!$c.util.isEmpty($p, pmntAcctDeptCd)) {
          ds_master.setCellData(i, "pmntAcctDept", "[" + pmntAcctDeptCd + "] " + ds_master.getCellData(i, "pmntAcctDeptNm"));
        }
      }
      ds_master.reform();
      gr_master.setFocusedCell(0, 0);
      $c.gus.cfDisableBtn($p, [btn_save]);
    }
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE : 사용안함
 */
// scwin.f_HeaderCreate = function() {
//     var GAUCE_DATASET_HEADER = "dofficeCd:STRING"
//         + ",dofficeNm:STRING"
//         + ",useYn:DECIMAL(1)"
//         + ",coCd"
//         + ",coClsCd";
//     dma_search.removeAll();
//     dma_search.SetDataHeader(GAUCE_DATASET_HEADER);
//     dma_search.insertRow();
// };

/**
 * 조회결과 데이터셋 헤더 생성
 * TOBE : 사용안함
 */
// scwin.f_HeaderListCreate = function() {
//     var GAUCE_DATASET_HEADER = "dofficeCd:STRING(5)" // 구청코드
//         + ",dofficeNm:STRING(30)" // 구청명
//         + ",clntNo:STRING(6)" // 거래처번호
//         + ",clntNm:STRING(70)"
//         + ",pmntAcctDeptCd:STRING(5)" // 납부귀속부서코드
//         + ",pmntAcctDeptNm:STRING(50)"
//         + ",crn:STRING(13)" // 사업자등록번호
//         + ",crnNm:STRING(70)" // 사업자명
//         + ",zip:STRING(6)" // 우편번호
//         + ",addr1:STRING(100)" // 주소1
//         + ",addr2:STRING(100)" // 주소2
//         + ",nmCmpy:STRING(35)" // 사용여부
//         + ",telNo:STRING(20)" // 전화번호
//         + ",useYn:INT(1)"; // 사용여부

//     ds_master.removeAll();
//     ds_master.SetDataHeader(GAUCE_DATASET_HEADER);
// };

/**
 * 저장버튼
 */
scwin.f_Save = async function () {
  // if (ds_master.IsUpdated == false) {
  if (ds_master.getModifiedIndex().length < 1) {
    await $c.win.alert($p, MSG_CM_ERR_001, ["자료"]);
    return;
  } else {
    //입력 Validation
    if (!(await scwin.f_Validate())) {
      return;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      sbm_save.userData1 = "noError";
      $c.sbm.execute($p, sbm_save);
    }
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
    scwin.f_Retrieve();
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 저장 시 입력 Validation
 */
scwin.f_Validate = async function () {
  // 입력 validation    
  let ret = await $c.gus.cfValidate($p, [ed_dofficeNm, ed_clntNo, ed_clntNm, ed_pmntAcctDeptCd, ed_pmntAcctDeptNm, ed_crn, ed_crnNm
  /*, ed_zip
  //, ed_addr1
  , ed_addr2*/]);
  if (!ret) {
    return false;
  }
  ret = await $c.gus.cfValidate($p, [gr_master]);
  if (!ret) {
    return false;
  }
  if (ed_pmntAcctDeptCd.getValue() != ed_pmntAcctDeptCd.hidVal) {
    await $c.win.alert($p, MSG_CM_ERR_038, ["납부부서코드"]);
    ed_pmntAcctDeptCd.focus();
    return false;
  }
  return true;
};

/**
 * scwin.f_ValidationSync 사용하기 위한 함수
 */
scwin.myCfValidate = function (oElement) {
  let obj = $c.gus.object($p, oElement);
  if (obj.length != null) {
    for (var i = 0; i < obj.length; i++) {
      let id = obj[i];
      if ($c.gus.cfIsNull($p, id.getValue())) {
        $c.win.alert($p, id.options.title + "은(는) 필수 입력 항목입니다.");
        id.focus();
        return false;
      }
    }
  }
  return true;
};

/**
 * onbeforerowpositionchange 사용을 위한 validation 체크
 */
scwin.f_ValidationSync = function () {
  //필수값 임의로 체크(구청명, 거래처코드, 납부부서, 사용여부)
  let ret = scwin.myCfValidate([ed_dofficeNm, ed_clntNo, ed_pmntAcctDeptCd, lc_useYn]);
  if (!ret) {
    return false;
  }
  return true;
};

/**
 * 수정버튼
 */
scwin.f_Update = function (e) {
  // disable 처리
  $c.gus.cfEnableObjects($p, tbl_doffice);
  $c.gus.cfDisableObjects($p, [ed_dofficeCd, ed_clntNm, ed_pmntAcctDeptNm, ed_crnNm]);
  $c.gus.cfDisableBtn($p, [btn_update]);
  //focus 설정
  ed_dofficeNm.focus();
};

/**
 * 행추가
 */
scwin.f_Add = async function (e) {
  if (ds_master.getInsertedIndex().length > 0) {
    let ret = await scwin.f_Validate();
    if (!ret) {
      return false;
    }
  }
  let row = ds_master.insertRow();
  gr_master.setFocusedCell(row, 0, false);
  //todo : asis 비/활성화 확인차(개발 후 주석 삭제)
  // cfEnableObjects(tbl_doffice);
  // cfDisableKey(); 
  // cfDisableBtn([bUpdate]);

  //disable 처리
  $c.gus.cfEnableObjects($p, tbl_doffice);
  $c.gus.cfDisableObjects($p, [ed_dofficeCd, ed_clntNm, ed_pmntAcctDeptNm, ed_crnNm]);
  $c.gus.cfDisableBtn($p, [btn_update]);
  ds_master.setCellData(row, "useYn", scwin.DGlobalValue.TRUE);
  ed_dofficeNm.focus();
};

/**
 * 행삭제
 * asis 사용하는곳 없음
 */
scwin.f_Delete = function () {
  var row = ds_master.getRowPosition();
  //추가등록정보만 삭제, 나머지는 상태값 삭제가 됨
  if (ds_master.getRowStatus(row) == "C") {
    ds_master.removeRow(row);
  } else {
    ds_master.deleteRow(row);
  }

  //todo : asis 비/활성화 확인차(개발 후 주석 삭제)
  // cfEnableObjects(tbl_doffice);
  // cfDisableKey();
  // cfDisableBtn([bUpdate]);

  //disable 처리
  //$c.gus.cfEnableObjects(tbl_doffice);
  $c.gus.cfDisableObjects($p, tbl_doffice);
  $c.gus.cfDisableBtn($p, [btn_update]);
};

/**
 * 취소
 */
scwin.f_Cancel = function (e) {
  //todo : asis 비/활성화 확인차(개발 후 주석 삭제)
  // cfDisableObjects(tbl_doffice);
  // cfDisableBtn([bSave]);

  $c.data.undoRow($p, ds_master, "N");
  $c.gus.cfDisableObjects($p, tbl_doffice);
  $c.gus.cfDisableBtn($p, [btn_save]);
};

/**
 * TOBE 사용안함
 */
scwin.f_GetObjValue = function (inObj) {
  return inObj.tagName == "OBJECT" ? inObj.text.trim() : inObj.value.trim();
};
/**
 * TOBE 사용안함
 */
scwin.f_SetObjValue = function (inObj, val) {
  if (inObj.tagName == "OBJECT") inObj.text = val;else inObj.value = val;
};
/**
 * TOBE 사용안함
 */
scwin.f_EventCheck = function () {
  if (window.event != null && window.event.srcElement.tagName.toUpperCase() == "IMG") {
    return 'F';
  } else {
    return 'T';
  }
};

/**
 * 거래처 팝업호출(UDC)
 */
// scwin.f_PopUp = function(cdObj, nmObj, sQueryID, sWhere, sWidth) {
scwin.f_PopUp = function (cdObj, nmObj, sQueryID, sWhere, sWidth, close) {
  // var rtnList = new Array();
  // rtnList = cfCommonPopUp(sQueryID, scwin.f_GetObjValue(cdObj), ""
  //     , scwin.f_EventCheck(), null, null, null, null
  //     , sWhere, sWidth, null, null, null);

  // if (rtnList != null) {
  //     if (rtnList[0] == "N/A") return;

  //     scwin.f_SetObjValue(cdObj, rtnList[0]);
  //     cdObj.hidVal = rtnList[0];
  //     scwin.f_SetObjValue(nmObj, rtnList[1]);
  // } else {
  //     scwin.f_SetObjValue(cdObj, "");
  //     cdObj.hidVal = "";
  //     scwin.f_SetObjValue(nmObj, "");
  // }
  udc_clntNo.setSelectId(sQueryID);
  udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc, cdObj.getValue(), "", close, null, null, sWidth, null, sWhere, null, null, null, null, null, null, null, null);
};

/**
 * 거래처 팝업 callBack
 */
scwin.udc_clntNo_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_clntNo.setValue(ret[0]); // 코드
    ed_clntNm.setValue(ret[1]); // 거래처명
    ed_clntNo.hidVal = ret[0]; // 히든값
  } else {
    ed_clntNo.setValue(""); // 코드
    ed_clntNm.setValue(""); // 거래처명
    ed_clntNo.hidVal = ""; // 히든값
  }
};

/**
 * 사업자번호 팝업호출(UDC)
 */
// scwin.f_PopUp1 = function(cdObj, nmObj, sQueryID, sWhere, sWidth, zip, addr1, addr2, nmCmpy) {
scwin.f_PopUp1 = function (cdObj, nmObj, sQueryID, sWhere, sWidth, zip, addr1, addr2, nmCmpy, close) {
  // var rtnList = new Array();
  // rtnList = cfCommonPopUp(sQueryID, scwin.f_GetObjValue(cdObj), ""
  //     , scwin.f_EventCheck(), null, null, null, null
  //     , sWhere, sWidth, null, null, null);

  // if (rtnList != null) {
  //     if (rtnList[0] == "N/A") return;

  //     scwin.f_SetObjValue(cdObj, rtnList[0]);
  //     cdObj.hidVal = rtnList[0];
  //     scwin.f_SetObjValue(nmObj, rtnList[1]);
  //     scwin.f_SetObjValue(zip, rtnList[6]);
  //     scwin.f_SetObjValue(addr1, rtnList[7]);
  //     scwin.f_SetObjValue(addr2, rtnList[8]);
  //     scwin.f_SetObjValue(nmCmpy, rtnList[3]);
  // } else {
  //     scwin.f_SetObjValue(cdObj, "");
  //     cdObj.hidVal = "";
  //     scwin.f_SetObjValue(nmObj, "");
  //     scwin.f_SetObjValue(zip, "");
  //     scwin.f_SetObjValue(addr1, "");
  //     scwin.f_SetObjValue(addr2, "");
  //     scwin.f_SetObjValue(nmCmpy, "");
  // }
  udc_crn.setSelectId(sQueryID);
  udc_crn.cfCommonPopUp(scwin.udc_crn_callBackFunc, cdObj.getValue(), nmObj.getValue(), close, null, null, sWidth, null, sWhere, null, null, null, null, null, null, null, null);
};

/**
 * 사업자번호 팝업 callBack
 */
scwin.udc_crn_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_crn.hidVal = ret[0]; // 히든값
    ed_crn.setValue(ret[0]); // 사업자번호
    ed_crnNm.setValue(ret[1]); // 사업자명
    ed_zip.setValue(ret[6]); // 우편번호
    ed_addr1.setValue(ret[7]); // 주소1
    ed_addr2.setValue(ret[8]); // 주소2
    ed_nmCmpy.setValue(ret[3]); // 회사명
  } else {
    ed_crn.hidVal = ""; // 히든값
    ed_crn.setValue(""); // 사업자번호
    ed_crnNm.setValue(""); // 사업자명
    ed_zip.setValue(""); // 우편번호
    ed_addr1.setValue(""); // 주소1
    ed_addr2.setValue(""); // 주소2
    ed_nmCmpy.setValue(""); // 회사명
  }
};

/**
 * 납부부서 팝업호출(UDC)
 */
// scwin.f_PopUp2 = function(cdObj, nmObj, sQueryID, sWhere, sWidth) {
scwin.f_PopUp2 = function (cdObj, nmObj, sQueryID, sWhere, sWidth, close) {
  // var rtnList = new Array();
  // rtnList = cfCommonPopUp(sQueryID, scwin.f_GetObjValue(cdObj), ""
  //     , scwin.f_EventCheck(), null, null, null, null
  //     , sWhere, sWidth, null, null, null);

  // if (rtnList != null) {
  //     if (rtnList[0] == "N/A") return;

  //     scwin.f_SetObjValue(cdObj, rtnList[1]);
  //     cdObj.hidVal = rtnList[1];
  //     scwin.f_SetObjValue(nmObj, rtnList[2]);
  // } else {
  //     scwin.f_SetObjValue(cdObj, "");
  //     cdObj.hidVal = "";
  //     scwin.f_SetObjValue(nmObj, "");
  // }
  //   scwin.udc_pmntAcctDeptCd_callBackFunc // 콜백 함수
  // , pCode // 화면에서의 ??? Code Element의 Value
  // , pName // 화면에서의 ??? Name Element의 Value
  // , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
  // , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  // , null // Title순서
  // , null // 보여주는 각 컬럼들의 폭
  // , null // 컬럼중에서 숨기는 컬럼 지정
  // , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  // , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  // , null // POP-UP뛰을때 우도우의 사용자 정의 높이
  // , null // 윈도우 위치 Y좌표
  // , null // 윈도우 위치 X좌표
  // , null // 중복체크여부 ("F")
  // , "T' // 전체검색허용여부 ("F") <--------------------------------------- pAllSearch
  // , "화주,화주코드,화주명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  udc_pmntAcctDeptCd.setSelectId(sQueryID);
  udc_pmntAcctDeptCd.cfCommonPopUp(scwin.udc_pmntAcctDeptCd_callBackFunc, cdObj.getValue(), nmObj.getValue(), close, null, null, sWidth, null, sWhere, null, null, null, null, null, null, null, null);
};

/**
 * 납부부서 팝업 callBack
 */
scwin.udc_pmntAcctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_pmntAcctDeptCd.setValue(ret[1]); // 납부부서코드
    ed_pmntAcctDeptNm.setValue(ret[2]); // 납부부서명
    ed_pmntAcctDeptCd.hidVal = ret[1]; // 히든값
  } else {
    ed_pmntAcctDeptCd.setValue(""); // 납부부서코드
    ed_pmntAcctDeptNm.setValue(""); // 납부부서명
    ed_pmntAcctDeptCd.hidVal = ""; // 히든값
  }
};

/**
 * 우편번호 팝업
 */
scwin.f_openPopUp = function (check, flag) {
  var data = {
    zip: ed_zip.getValue(),
    callbackFn: scwin.btn_zip_callBackFunc
  };
  ed_zip.setValue("");
  ed_addr1.setValue("");
  var opts = {
    id: "pupup",
    popupName: "우편번호 검색",
    modal: true,
    type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    ,
    title: "우편번호 검색",
    width: 500,
    height: 550
  };
  $c.win.openPopup($p, "/ui/cm/zz/newzipcodePopup.xml", opts, data);
};

/**
 * 우편번호 팝업 callback
 */
scwin.btn_zip_callBackFunc = function (ret) {
  //예)popupResult [{"zip":"01220","addr1":"서울 강북구 미아동 42-11","allAddr":"서울 강북구 미아동 42-11","stasNm":"서울","cuntyNm":"강북구","dongNm":"미아동"}]
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_zip.setValue(ret.zip);
    ed_addr1.setValue(ret.addr1);
    ed_addr2.focus();
  } else {
    ed_zip.setValue("");
    ed_addr1.setValue("");
    ed_zip.focus();
  }
};

/**
 * 팝업구분
 * TOBE : $c.win.isPopup()
 */
// scwin.f_IsPopUp = function(inObj) {
//     var inValue = scwin.f_GetObjValue(inObj);
//     var hidValue = inObj.hidVal;

//     if ($c.gus.cfIsNull(inValue)) {
//         for (var i = 1; i < scwin.f_IsPopUp.arguments.length; i++) {
//             scwin.f_SetObjValue(scwin.f_IsPopUp.arguments[i], "");
//         }
//         return false;
//     }
//     if (inValue == hidValue) return false;

//     return true;
// };

/**
 * 거래처 팝업
 */
scwin.f_clntPopUp = function (close) {
  var param = ",,," + ed_coCd.getValue();
  scwin.f_PopUp(ed_clntNo, ed_clntNm, "retrieveClntList", param, null, close);
};

/**
 * 납부부서 팝업
 */
scwin.f_acctDeptPopUp = function (close) {
  var param = ed_coCd.getValue() + "," + scwin.txtCoClsCd;
  scwin.f_PopUp2(ed_pmntAcctDeptCd, ed_pmntAcctDeptNm, "retrieveWithHoldInfo", param, "410", close);
};

/**
 * 사업자번호 팝업
 */
scwin.f_crnPopUp = function (close) {
  var selectID = 'retrieveCrnInfo';
  var param = "";
  if (scwin.isSubCompany)
    // 자회사 회계 시스템
    {
      selectID = 'retrieveCrnClntInfo';
      param = ',' + ed_coCd.getValue();
    }
  scwin.f_PopUp1(ed_crn, ed_crnNm, selectID, param, null, ed_zip, ed_addr1, ed_addr2, ed_nmCmpy, close);
};

/**
 * 엑셀파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
// scwin.f_Excel = function() {
//     if ($c.win.confirm("Excel로 다운로드 하시겠습니까?")) {
//         $c.data.downloadGridViewExcel(objGridName, "구청코드등록", "구청코드등록.xls", 2 + 8 + 16);
//     }
// };

/**
 * 회사코드 팝업호출(UDC)
 */
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_comCode.cfCommonPopUp(scwin.udc_comCode_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, null);
  //asis 소스
  // SET
  // if (rtnList != null) {
  //     if (rtnList[0] == "N/A") return;

  //     // 회사코드를 다르게 선택한 경우
  //     if (ed_coCd != rtnList[0]) {
  //         scwin.f_setInitObj();
  //     }

  //     ed_coCd.setValue = rtnList[0]; // 코드
  //     ed_coNm.value    = rtnList[5];    // 회사명
  //     ed_coCd   = rtnList[0];   // 히든값
  //     scwin.txtCoClsCd = rtnList[1]; // 회사구분

  // } else {
  //     ed_coCd.setValue = "";
  //     ed_coNm.value = "";
  //     ed_coCd.hidVal = "";
  //     scwin.txtCoClsCd = "";
  // }

  // // 자회사 회계 시스템
  // if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) { 
  //     scwin.isSubCompany = true;
  // } else {
  //     scwin.isSubCompany = false;
  // }
};

/**
 * 회사코드 팝업 callBack
 */
scwin.udc_comCode_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    // 회사코드를 다르게 선택한 경우
    if (ed_coCd.hidVal != ret[0]) {
      scwin.f_setInitObj();
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
scwin.f_setInitObj = function () {
  $c.gus.cfInitObjects($p, [ed_srchDofficeCd, ed_srchDofficeNm]); // 조회조건 - 구청코드
};

/**
 * 그리드 높이 늘리기
 * TOBE 사용안함(UDC +-버튼사용, udc_topGrdBtn)
 */
// scwin.f_grdHeiht = function(objGrd, size) {
//     var objGrd = eval(objGrd);
//     var strHeight = objGrd.style.height;
//     var intHeight = parseInt(strHeight.replace("px", ""));

//     intHeight = intHeight + size;

//     if (intHeight > 0) {
//         objGrd.style.height = intHeight + "px";
//     }
// };

/**
 * 그리드 값 변경(decode 대신 처리)
 */
scwin.decodeYnExp = function (data) {
  return $c.gus.decode($p, data, "1", "Y", "0", "N", "");
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
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_comCode_onviewchangeCodeEvent = function (info) {
  ed_coNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_coCd.getValue())) {
    scwin.f_PopUpCompanyInfo('T');
  }
};

/**
 * 거래처코드(저장) 팝업 호출
 */
scwin.udc_clntNo_onclickEvent = function (e) {
  if (ed_clntNo.hidVal != ed_clntNo.getValue()) {
    ed_clntNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_clntNo.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_clntPopUp(close);
};
scwin.udc_clntNo_onviewchangeCodeEvent = function (info) {
  ed_clntNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_clntNo.getValue())) {
    scwin.f_clntPopUp("T");
  }
};

/**
 * 납부부서(저장) 팝업 호출
 */
scwin.udc_pmntAcctDeptCd_onclickEvent = function (e) {
  if (ed_pmntAcctDeptCd.hidVal != ed_pmntAcctDeptCd.getValue()) {
    ed_pmntAcctDeptNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_pmntAcctDeptCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_acctDeptPopUp(close);
};
scwin.udc_pmntAcctDeptCd_onviewchangeCodeEvent = function (info) {
  ed_pmntAcctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_pmntAcctDeptCd.getValue())) {
    scwin.f_acctDeptPopUp("T");
  }
};

/**
 * 사업자번호(저장) 팝업 호출
 */
scwin.udc_crn_onclickEvent = function (e) {
  if (ed_crn.hidVal != ed_crn.getValue()) {
    ed_crnNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_crn.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_crnPopUp(close);
};
scwin.udc_crn_onviewchangeCodeEvent = function (info) {
  ed_crnNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_crn.getValue())) {
    scwin.f_crnPopUp("T");
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * 행의 인덱스가 변경된 경우에 발생
 * TODO : ASIS는 CanRowPosChange, OnRowPosChanged 사용하는데 웹스퀘어 cfConfirmMsg 사용하기 위해 현재 이벤트만 사용
 */
// scwin.gr_master_onrowindexchange = async function(row, oldRow) {
//     let newRow = row;
//     if (newRow < 0) return;
// console.log("ds_master.getModifiedIndex().length : "+ds_master.getModifiedIndex().length);
//     if (ds_master.getModifiedIndex().length > 0) {
//         let ret = await $c.gus.cfValidate([tbl_doffice]);
//         if(!ret) {
//             gr_master.setEventPause("", true);
//             gr_master.setFocusedCell(oldRow, 0);
//             gr_master.setEventPause("", false);
//             return;
//         }
//     }
// };

/**
 * DataList의 rowPosition이 변경된 경우 발생
 */
scwin.ds_master_onrowpositionchange = function (info) {
  let newRowIndex = info.newRowIndex;
  let oldRowIndex = info.oldRowIndex;
  let status = ds_master.getRowStatus(newRowIndex);
  if (status == "C") {
    $c.gus.cfEnableKeyData($p);
    ed_clntNo.hidVal = "";
    ed_pmntAcctDeptCd.hidVal = "";
  } else {
    //기타 데이타 -> 초기화, 수정, 삭제버튼 활성화
    $c.gus.cfDisableObjects($p, tbl_doffice);
    $c.gus.cfDisableBtn($p, [btn_save]);
    ed_clntNo.hidVal = ds_master.getCellData(newRowIndex, "clntNo");
    ed_pmntAcctDeptCd.hidVal = ds_master.getCellData(newRowIndex, "pmntAcctDeptCd");
  }
};

/**
 * DataList의 rowPosition이 변경되기 직전에 발생하며 rowPosition의 변경 적용 여부를 결정
 * asis : 그리드 로우를 변경하려고 할 경우 - 필수항목 체크
 * tobe : 현재 $c.gus.cfValidate 사용 시 async라 이벤트에 async주면 return false안먹힘
 */
scwin.ds_master_onbeforerowpositionchange = function (info) {
  let oldRowIndex = info.oldRowIndex;
  let status = ds_master.getRowStatus(oldRowIndex);
  if (ds_master.getRowStatus(oldRowIndex) == "C" || ds_master.getRowStatus(oldRowIndex) == "U") {
    //let ret = $c.gus.cfValidate([tbl_doffice]);
    return scwin.f_ValidationSync();
  }
};

/**
 * 조회영역 onkeydown
 */
scwin.search_onkeydown = function (e) {
  if (e.keyCode == "13") {
    if (!$c.util.isEmpty($p, e.target.value)) {
      this.setValue(e.target.value);
      scwin.f_Retrieve();
    }
    lc_srchUseYn.focus();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_comCode',btnId:'btn_company',codeId:'ed_coCd',nameId:'ed_coNm',popupID:'popupCocd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo',refDataCollection:'dma_search',code:'coCd',name:'coNm',maxlengthCode:'3',objTypeCode:'data',mandatoryCode:'true',allowCharCode:'0-9',validExpCode:'회사코드',editTypeCode:'focus',maxlengthName:'30',objTypeName:'key','ev:onclickEvent':'scwin.udc_comCode_onclickEvent',style:'','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구청코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w100',id:'ed_srchDofficeCd',placeholder:'',style:'',editFormat:'#####',editType:'focus',ref:'data:dma_search.dofficeCd',title:'구청코드','ev:onkeydown':'scwin.search_onkeydown'}},{T:1,N:'xf:input',A:{class:'form-control w300',id:'ed_srchDofficeNm',style:'',editType:'focus',maxlength:'20',ref:'data:dma_search.dofficeNm',title:'구청명','ev:onkeydown':'scwin.search_onkeydown'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchUseYn',style:'',submenuSize:'auto',ref:'data:dma_search.useYn',title:'사용여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용안함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 850px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"구청코드등록.xlsx", "sheetName":"구청코드등록", "type":"1", "hiddenVisible":false}',templateYn:'N',gridUpYn:'N',gridID:'gr_master',id:'udc_excel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNumFix:'true',rowStatusVisible:'true',readOnly:'true',rowStatusWidth:'20',focusMode:'row',visibleRowNum:'15',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column94',inputType:'text',style:'',value:'구청코드',width:'80'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column196',value:'구청명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'column187',value:'납부부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column190',value:'거래처코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column193',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column220',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column217',value:'사업자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column214',value:'우편번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column211',value:'주소1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column208',value:'주소2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column205',value:'회사명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column199',value:'전화번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column202',value:'사용여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'dofficeCd',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'dofficeNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'pmntAcctDept',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'crnNm',value:'',displayMode:'label',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'zip',value:'',displayMode:'label',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'addr1',value:'',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'addr2',value:'',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'nmCmpy',value:'',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'telNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'useYn',value:'',displayMode:'label',displayFormatter:'scwin.decodeYnExp',hidden:'true',hiddenCol:'false'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'text',displayFormat:'#,###',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn',gridID:'gr_master',rowAddUserAuth:'C',btnCancelYn:'Y',rowAddFunction:'scwin.f_Add',btnRowDelYn:'N',btnDelYn:'N',cancelFunction:'scwin.f_Cancel'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'tbl_doffice',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구청코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_dofficeCd',style:'',editType:'focus',editFormat:'#####',ref:'data:ds_master.dofficeCd',disabled:'true',objType:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'구청명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_dofficeNm',style:'',mandatory:'true',maxByteLength:'30',title:'구청명',ref:'data:ds_master.dofficeNm',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_clntNo',btnId:'btn_clntNo',codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'popup_clntNo',validTitle:'거래처',selectID:'retrieveClntList',refDataCollection:'ds_master',code:'clntNo',name:'clntNm',maxlengthCode:'6',objTypeCode:'data',mandatoryCode:'true',validExpCode:'거래처코드',allowCharCode:'0-9',editTypeCode:'select',maxlengthName:'30',objTypeName:'key',mandatoryName:'true',validExpName:'거래처명','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_clntNo_onviewchangeCodeEvent',style:'',codeWidth:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'납부부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_pmntAcctDeptCd',btnId:'btn_pmntAcctDeptCd',codeId:'ed_pmntAcctDeptCd',nameId:'ed_pmntAcctDeptNm',popupID:'popup_pmntAcctDeptCd',validTitle:'납부부서',selectID:'retrieveWithHoldInfo',refDataCollection:'ds_master',code:'pmntAcctDeptCd',name:'pmntAcctDeptNm',maxlengthCode:'5',objTypeCode:'data',mandatoryCode:'true',validExpCode:'납부부서',allowCharCode:'0-9',editTypeCode:'select',maxlengthName:'30',objTypeName:'key',mandatoryName:'true',validExpName:'납부부서명','ev:onclickEvent':'scwin.udc_pmntAcctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_pmntAcctDeptCd_onviewchangeCodeEvent',style:'',codeWidth:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_crn',btnId:'btn_crn',codeId:'ed_crn',nameId:'ed_crnNm',popupID:'popup_crn',validTitle:'사업자번호',selectID:'retrieveCrnInfo',refDataCollection:'ds_master',code:'crn',name:'crnNm',mandatoryCode:'true',maxlengthCode:'13',objTypeCode:'data',validExpCode:'사업자번호',allowCharCode:'0-9',editTypeCode:'select',mandatoryName:'true',maxlengthName:'30',objTypeName:'key',validExpName:'사업자','ev:onclickEvent':'scwin.udc_crn_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_crn_onviewchangeCodeEvent',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'우편번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w100 tac',id:'ed_zip',placeholder:'',style:'',ref:'data:ds_master.zip',editFormat:'######',objType:'data',mandatory:'false'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_zip',style:'',type:'button','ev:onclick':'scwin.f_openPopUp'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주소1',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_addr1',style:'',ref:'data:ds_master.addr1',title:'주소1',objType:'data',minByteLength:'100',mandatory:'false'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주소2',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_addr2',style:'',ref:'data:ds_master.addr2',title:'주소2',objType:'data',minByteLength:'100',mandatory:'false'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회사명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_nmCmpy',style:'',ref:'data:ds_master.crnNm',maxByteLength:'35',objType:'data',title:'회사명'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_telNo',style:'',ref:'data:ds_master.telNo',maxByteLength:'20',objType:'data',inputMode:'tel'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_useYn',style:'',submenuSize:'auto',ref:'data:ds_master.useYn',emptyItem:'true',title:'사용여부',mandatory:'true',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용안함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Update',id:'btn_update',objType:'bUpdate',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_save',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]}]}]})