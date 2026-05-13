/*amd /ui/ac/fi/fixedaset/fi_301_01_05b.xml 39386 abb727005f68f3cc71e46a639525dec6c8a6b15db4be3860c78888fc1a5ed92d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetHistClsCd',name:'변경내역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetPatternCd',name:'자산유형',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtStDt',name:'변경일자(시작)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtEndDt',name:'변경일자(종료)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm',name:'자산명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqDt',name:'취득일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'capExpdClsNm',name:'변경내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'histDt',name:'변경일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetIncrAmt',name:'자산증가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetDecrAmt',name:'자산감소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'provIncrAmt',name:'충당금증가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'provDecrAmt',name:'충당금감소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsFirst',name:'취득구분(최초)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsNameFirst',name:'취득구분(최초)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqCls',name:'취득구분(변경)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsName',name:'취득구분(변경)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lsClntNo',name:'리스거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lsClntNm',name:'리스거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsStdt',name:'시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsEnddtFirst',name:'종료일(최초)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsEnddt',name:'종료일(변경)',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_asetPattern',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetPatternCd',name:'자산유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'자산유형명',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.fixedaset.RetrieveAssetsChangeContentsDocumentCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_asetPattern',action:'/ac.fi.fixedaset.RetreiveFixedAsetPatternListCMD.do',method:'post',mediatype:'application/json',target:'data:json,{"id":"ds_asetPattern", "key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 자산변경명세서
 * 메뉴경로 : 회계/재무회계/고정자산/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/fi/fixedaset/fi_301_01_05b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-12-30
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 *    5. footer에 값 처리
 * 참고사항 : 
 *    1. 그리드ID.setNoResultMessageVisible(false) 설정해줘야 그리드에 데이터없음 안보임
 *    2. "hiddenVisible":true 되어 있는 항목 일단 false 처리[hiddenCol="true" => hiddenCol="false"]
 * 수정이력 :
 *    - 2025-12-30      배기원    최초작성
 */
//hidden 값
scwin.txtCoClsCd = ""; //회사구분코드(hidden, 회사팝업호출 시)

//로그인 정보
scwin.memJson;
scwin.vLoginCoCd; //소속자회사
scwin.vLoginCoClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd; //사용자소속구분코드
scwin.isSubCompany;
scwin.privAdmin;
scwin.initJson = {}; //초기세팅값(TOBE)
scwin.first = 0;

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  // scwin.f_SearchHeaderCreate();
  // //자산유형 조회
  // ds_asetPattern.DataId = "/ac.fi.fixedaset.RetreiveFixedAsetPatternListCMD.do?useYn=1";
  // ds_asetPattern.undoAll();
  // scwin.f_FieldClear();
  // scwin.f_setCompanyInfo();

  scwin.memJson = $c.data.getMemInfo($p);
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson["coCd"]) ? "" : scwin.memJson["coCd"]; //소속자회사
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson["coClsCd"]) ? "" : scwin.memJson["coClsCd"]; //회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, scwin.memJson["userHomeClsCd"]) ? "" : scwin.memJson["userHomeClsCd"]; //사용자소속구분코드
  scwin.isSubCompany = false;
  scwin.privAdmin = $c.gus.cfIsNull($p, scwin.memJson["privAdmin"]) ? "" : scwin.memJson["privAdmin"]; //관리자권한
  scwin.first = 0;
  const codeOptions = [{
    grpCd: "FI014",
    compID: "lc_fixedAsetHistClsCd"
  } //고정자산이력구분
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};

/**
 * $c.data.setCommonCode 함수의 콜백함수
 */
scwin.callBackCommonCode = function () {
  dlt_commonCodeFI014.sort("cd", 0);
  scwin.initJson = dma_search.getJSON();
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  gr_master.setNoResultMessageVisible(false);
  ds_master.reform();
  ds_master.removeAll();
  totalRows.setValue("0");
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.f_asetPattern();
  scwin.setInit();
  scwin.f_SetSrchDefault();
  scwin.f_setCompanyInfo();
};

/**
 * 자산유형 조회
 */
scwin.f_asetPattern = function () {
  ds_asetPattern.removeAll();
  $c.sbm.execute($p, sbm_asetPattern, {
    "useYn": "1"
  });
  ds_asetPattern.sort("asetPatternCd", 0);
};

/**
 * 조회 기본값 설정
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ed_coCd, ed_coNm, ica_acqDtStDt, ica_acqDtEndDt]);
  //dma_search.setJSON(scwin.initJson);
  scwin.f_SetSrchDefault();
  ed_coCd.hidVal = ""; //회사코드(조회)
  ed_srchAcctDeptCd.hidVal = ""; //귀속부서코드(조회)
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
};

/**
 * 조회 기본값 설정
 */
scwin.f_SetSrchDefault = function () {
  ed_srchFixedAsetNo.setValue("");
  lc_fixedAsetHistClsCd.setValue("");
  lc_asetPatternCd.setValue("");
  let today = $c.date.getServerDateTime($p);
  ica_acqDtStDt.setValue(today.substring(0, 6) + "01");
  ica_acqDtEndDt.setValue(today);
  ica_acqDtStDt.focus();
};

/**
 * 조회
 */
scwin.f_Retrieve = async function () {
  let ret = await scwin.f_Validation();
  if (!ret) {
    return;
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
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    } else {
      //조회된 결과 정렬(asis:<param name=SortExpr 참조)
      // ds_master.sort("seq", 0);
      gr_master.setFocusedCell(0, 0);
    }
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 체크
 */
scwin.f_Validation = async function () {
  let ret;
  ret = await $c.gus.cfValidate($p, [ed_coCd]);
  if (!ret) {
    return false;
  }
  ret = await $c.gus.cfValidate($p, [ica_acqDtStDt, ica_acqDtEndDt, ed_srchAcctDeptCd]);
  if (!ret) {
    return false;
  }
  if ($c.gus.cfIsNull($p, ica_acqDtStDt.getValue()) && !$c.gus.cfIsNull($p, ica_acqDtEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["취득일자"]);
    ica_acqDtStDt.focus();
    return false;
  }
  if (!$c.gus.cfIsNull($p, ica_acqDtStDt.getValue()) && $c.gus.cfIsNull($p, ica_acqDtEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["취득일자"]);
    ica_acqDtEndDt.focus();
    return false;
  }
  if (!$c.gus.cfIsNull($p, ica_acqDtStDt.getValue()) && !$c.gus.cfIsNull($p, ica_acqDtEndDt.getValue())) {
    // if (!cfValidateValue(ica_acqDtEndDt.setValue, "minDate = " + ica_acqDtStDt.getValue())) {
    //     $c.win.alert(MSG_CM_ERR_039);
    //     ica_acqDtStDt.focus();
    //     return false;
    // }
    // 날짜체크
    if (!(await $c.gus.cfIsAfterDate($p, ica_acqDtStDt.getValue().trim(), ica_acqDtEndDt.getValue().trim()))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ica_acqDtEndDt.focus();
      return false;
    }
  }
  return true;
};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE 사용안함
 */
scwin.f_SearchHeaderCreate = function () {
  // var GAUCE_DATASET_HEADER = "acqDtStDt:STRING"
  //     + ",acqDtEndDt:STRING"
  //     + ",fixedAsetNo:STRING"
  //     + ",acctDeptCd:STRING"
  //     + ",asetPatternCd:STRING"
  //     + ",fixedAsetHistClsCd:STRING"
  //     + ",coCd:STRING(3)"
  //     + ",coClsCd:STRING(1)";

  // ds_search.removeAll();
  // ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
  // ds_search.insertRow();
};

/**
 * Object 값 반환함수
 * TOBE 사용안함
 */
scwin.f_GetObjValue = function (inObj) {
  return inObj.tagName == "OBJECT" ? inObj.text : inObj.value;
};

/**
 * Object 값 설정함수
 * TOBE 사용안함
 */
scwin.f_SetObjValue = function (inObj, val) {
  if (inObj.tagName == "OBJECT") inObj.text = val;else inObj.value = val;
};

/**
 * 팝업
 * TOBE UDC 사용
 */
// scwin.f_PopUp = function (codeObj, nameObj, sQueryID, sWhere, sWidth) {
//     var rtnList = cfCommonPopUp(sQueryID, scwin.f_GetObjValue(codeObj), ""
//         , "T"
//         , null, null, null, null
//         , sWhere, sWidth, null, null, null);
//     if (rtnList != null) {
//         if (rtnList[0] != "N/A") {
//             scwin.f_SetObjValue(codeObj, rtnList[0]);
//             codeObj.hidVal = rtnList[0];
//             scwin.f_SetObjValue(nameObj, rtnList[1]);
//         }
//     } else {
//         scwin.f_SetObjValue(codeObj, "");
//         codeObj.hidVal = "";
//         scwin.f_SetObjValue(nameObj, "");
//     }
//     return rtnList;
// };

/**
 * 팝업 여부 검사
 * TOBE 사용안함
 */
// scwin.f_IsPopUp = function (inObj) {
//     var inValue = scwin.f_GetObjValue(inObj);
//     var hidValue = inObj.hidVal;

//     if ($c.gus.cfIsNull(inValue)) {
//         inObj.hidVal = "";
//         for (var i = 1; i < f_IsPopUp.arguments.length; i++) {
//             scwin.f_SetObjValue(scwin.f_IsPopUp.arguments[i], "");
//         }
//         return false;
//     }
//     if (inValue == hidValue) return false;

//     return true;
// };

/**
 * 조회 귀속부서코드 팝업
 */
//scwin.f_srchDeptPopUp = function() {
scwin.f_srchDeptPopUp = function (close) {
  // var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
  // scwin.f_PopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm
  //     , "retrieveAcctDeptCdInfo6", param, "410");
  let param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd; //조회조건 9번째, 전체검색허용여부 15번째
  udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callBackFunc, ed_srchAcctDeptCd.getValue(), ed_srchAcctDeptNm.getValue(), close, null, null, null, null, param, null, null, null, null, null, "F", null, null);
};

/**
 * 귀속부서코드 팝업 callBack
 */
scwin.udc_srchAcctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_srchAcctDeptCd.setValue(ret[0]); // 귀속부서코드
    ed_srchAcctDeptNm.setValue(ret[1]); // 귀속부서명
    ed_srchAcctDeptCd.hidVal = ret[0]; // 히든값
  } else {
    ed_srchAcctDeptCd.setValue(""); // 귀속부서코드
    ed_srchAcctDeptNm.setValue(""); // 귀속부서명
    ed_srchAcctDeptCd.hidVal = ""; // 히든값
  }
};

/**
 * 콤보데이터 검증
 * asis 사용안함
 */
// scwin.f_CheckComboData = function (objCombo, comboTitle) {
//     if (objCombo.Index == -1 && $c.gus.cfIsNull(objCombo.getValue()) == false) {
//         objCombo.Index = objCombo.IndexOfColumn(objCombo.SearchColumn, objCombo.getValue());

//         if (objCombo.Index == -1) {
//             $c.win.alert(MSG_CM_ERR_038, [comboTitle + "코드"]);
//             objCombo.Focus();
//         }
//     }
// };

/**
 * 엑셀파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
scwin.f_Excel = function () {
  // var objGridName = eval("gr_master");
  // if ($c.win.confirm("Excel로 다운로드 하시겠습니까?")) {
  //     $c.data.downloadGridViewExcel(objGridName, "자산변경명세서", "자산변경명세서.xls", 8 + 16);
  // }
};

/**
 * 회사코드 팝업호출(UDC)
 */
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  // var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  //     , ed_coCd.text, ed_coNm.value
  //     , pWinCloseTF, null, null, null, null
  //     , null, null, null, null, null);
  // // SET
  // if (rtnList != null) {
  //     if (rtnList[0] == "N/A") return;

  //     ed_coCd.setValue = rtnList[0]; // 코드
  //     ed_coNm.value = rtnList[5]; // 회사명
  //     ed_coCd.hidVal = rtnList[0]; // 히든값
  //     scwin.txtCoClsCd = rtnList[1]; // 회사구분
  //     $c.gus.cfInitObjects([ed_srchAcctDeptCd, ed_srchAcctDeptNm]); // 조회조건 - 귀속부서 From
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

  // // 회사코드가 바뀌면 귀속부서에 해당 회사의 최상위레벨 부서를 셋팅한다.
  // if (scwin.isSubCompany == true) {
  //     var acctYear = ""; //결산년월
  //     var coCd = ""; //회사코드

  //     coCd = ed_coCd.getValue();

  //     //결산년월 (회계년도)
  //     if (ica_acqDtStDt.getValue() != "") {
  //         acctYear = ica_acqDtStDt.getValue().substring(0, 4);
  //     } else {
  //         acctYear = scwin.DDate.getDate().substring(0, 4);
  //     }

  //     // 최상위부서조회
  //     var rtnAcctDeptList = cfCommonPopUp("retrieveUppermostAcctDeptCdInfo", ed_coCd.getValue(), acctYear, pWinCloseTF, null, null, null, null, null, null, null, null, null);

  //     if (rtnAcctDeptList != null) {
  //         if (rtnAcctDeptList[1] == "N/A") return;

  //         ed_srchAcctDeptCd.setValue = rtnAcctDeptList[1]; // 최상위 부서코드
  //         ed_srchAcctDeptNm.value = "";
  //     }

  //     // 귀속부서 조회
  //     scwin.f_srchDeptPopUp('T');

  // } else {
  //     ed_srchAcctDeptCd.setValue = "00000";
  //     ed_srchAcctDeptNm.value = "전사";
  // }

  udc_comCode.cfCommonPopUp(scwin.udc_comCode_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, null);
};

/**
 * 회사코드 팝업 callBack
 */
scwin.udc_comCode_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    //TODO : udc가 마지막으로 처리하다보니 초기값 귀속부서 빈값 안되도록 처리
    if (!$c.gus.cfIsNull($p, ed_coCd.hidVal) && !$c.gus.cfIsNull($p, scwin.txtCoClsCd)) {
      // 조회조건 - 귀속부서 From
      $c.gus.cfInitObjects($p, [ed_srchAcctDeptCd, ed_srchAcctDeptNm]);
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

  // 회사코드가 바뀌면 귀속부서에 해당 회사의 최상위레벨 부서를 셋팅한다.
  if (scwin.isSubCompany == true) {
    let acctYear = ""; //결산년월
    let coCd = ""; //회사코드        
    coCd = ed_coCd.getValue();

    //결산년월 (회계년도)
    if (ica_acqDtStDt.text != "") {
      acctYear = ica_acqDtStDt.getValue().substring(0, 4);
    } else {
      let today = $c.date.getServerDateTime($p);
      acctYear = today.substring(0, 4);
    }

    // 최상위부서조회
    // var rtnAcctDeptList = cfCommonPopUp("retrieveUppermostAcctDeptCdInfo",ed_coCd.text,acctYear,pWinCloseTF,null,null,null,null,null,null,null,null,null);        
    // if(rtnAcctDeptList != null ) { 
    //     if (rtnAcctDeptList[1] == "N/A") return;                         
    //     ed_srchAcctDeptCd.text = rtnAcctDeptList[1]; // 최상위 부서코드
    //     txt_srchAcctDeptNm.value = "";
    // }        
    // // 귀속부서 조회
    // f_srchDeptPopUp('T');

    udc_comCode_Grid.setSelectId("retrieveUppermostAcctDeptCdInfo");
    //조회조건 9번째, 전체검색허용여부 15번째
    udc_comCode_Grid.cfCommonPopUp(scwin.udc_comCode_acctDeptList_callBackFunc, ed_coCd, acctYear, "T", null, null, null, null, null, null, null, null, null, null, null, null);
  } else {
    ed_srchAcctDeptCd.setValue("00000");
    ed_srchAcctDeptNm.setValue("전사");
  }
};

/**
 * 최상위부서조회
 */
scwin.udc_comCode_acctDeptList_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_srchAcctDeptCd.setValue(ret[0]); // 귀속부서코드
    ed_srchAcctDeptNm.setValue(""); // 귀속부서명
    ed_srchAcctDeptCd.hidVal = ret[0]; // 히든값
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
    ed_srchAcctDeptCd.hidVal = "";
  }

  // 귀속부서 조회
  scwin.f_srchDeptPopUp("T");
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
 * 귀속코드(조회) 팝업 호출
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
  scwin.f_srchDeptPopUp(close);
};
scwin.udc_srchAcctDeptCd_onviewchangeCodeEvent = function (info) {
  ed_srchAcctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_srchAcctDeptCd.getValue())) {
    scwin.f_srchDeptPopUp("T");
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * 그리드 셀 클릭 이벤트
 */
scwin.gr_master_oncellclick = async function (rowIndex, columnIndex, columnId) {
  //전표팝업조회
  if (columnId == "slipNo") {
    let slipNo = ds_master.getCellData(rowIndex, "slipNo");
    if (!$c.gus.cfIsNull($p, slipNo)) {
      await $c.gus.cfShowSlipInfo($p, slipNo);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'변경내역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixedAsetHistClsCd',style:'',submenuSize:'fixed',ref:'data:dma_search.fixedAsetHistClsCd',title:'변경내역',objType:'data',chooseOptionLabel:'-전체-',visibleRowNum:'20'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'변경일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ica_acqDtStDt',edToId:'ica_acqDtEndDt',id:'udc_fromToCalendar1',mandatoryFrom:'true',mandatoryTo:'true',refDataMap:'dma_search',refEdDt:'acqDtEndDt',refStDt:'acqDtStDt',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산유형 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_asetPatternCd',objType:'data',ref:'data:dma_search.asetPatternCd',style:'',submenuSize:'auto',title:'자산유형',visibleRowNum:'30',chooseOptionLabel:'-전체-'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_asetPattern'},E:[{T:1,N:'xf:label',A:{ref:'asetPatternNm'}},{T:1,N:'xf:value',A:{ref:'asetPatternCd'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_company',code:'coCd',codeId:'ed_coCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent',id:'udc_comCode',mandatoryCode:'true',maxlengthCode:'3',maxlengthName:'30',name:'coNm',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'key',popupID:'popupCocd',refDataCollection:'dma_search',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'회사코드',validTitle:'회사코드',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_srchAcctDeptCd',code:'acctDeptCd',codeId:'ed_srchAcctDeptCd',editTypeCode:'select','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_srchAcctDeptCd_onviewchangeCodeEvent',id:'udc_srchAcctDeptCd',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'30',name:'acctDeptNm',nameId:'ed_srchAcctDeptNm',objTypeCode:'data',objTypeName:'key',popupID:'popup_srchAcctDeptCd',refDataCollection:'dma_search',selectID:'retrieveAcctDeptCdInfo6',style:'',validExpCode:'귀속부서',validTitle:'귀속부서',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_srchFixedAsetNo',style:'width: 150px;',title:'자산번호',objType:'data',editFormat:'##########',ref:'data:dma_search.fixedAsetNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"자산변경명세서.xlsx", "sheetName":"자산변경명세서", "type":"1", "hiddenVisible":false}',gridID:'gr_master',gridUpYn:'N',grp:'grd_section1',id:'udc_excel',style:'',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'cell',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_master_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column32',value:'유형',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'자산명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column22',value:'자산번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'취득일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'변경내역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'변경일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'자산증가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'자산감소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'충당금증가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'충당금감소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column67',value:'전표종류코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'전표종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column61',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column55',value:'취득구분(최초)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column58',value:'취득구분(최초)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column73',value:'취득구분(변경)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column76',value:'취득구분(변경)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column79',value:'리스거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column82',value:'리스거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column85',value:'시작일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column88',value:'종료일(최초)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column91',value:'종료일(변경)',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'asetPatternNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'fixedAsetNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fixedAsetNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'acqDt',value:'',displayMode:'label',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'capExpdClsNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'histDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'asetIncrAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'asetDecrAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'provIncrAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'provDecrAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',style:'',id:'slipNo',value:'',displayMode:'label',class:'linktype'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'slipKndCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipKndNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'acqClsFirst',value:'',displayMode:'label',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'acqClsNameFirst',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'acqCls',value:'',displayMode:'label',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'acqClsName',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'lsClntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'lsClntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',style:'',id:'acqClsStdt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',style:'',id:'acqClsEnddtFirst',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',style:'',id:'acqClsEnddt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column54',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{id:'asetIncrAmt_s1',name:'자산증가',width:'100',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("asetIncrAmt")',style:'',value:'',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{id:'asetDecrAmt_s1',name:'자산감소',width:'100',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("asetDecrAmt")',style:'',value:'',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{id:'provIncrAmt_s1',name:'충당금증가',width:'100',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("provIncrAmt")',style:'',value:'',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{id:'provDecrAmt_s1',name:'충당금감소',width:'100',textAlign:'right',displayMode:'label',inputType:'expression',expression:'SUM("provDecrAmt")',style:'',value:'',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'text',displayFormat:'#,###',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_comCode_Grid'}}]}]}]}]}]}]}]}]}]})