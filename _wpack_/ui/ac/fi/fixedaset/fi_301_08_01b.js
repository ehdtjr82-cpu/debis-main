/*amd /ui/ac/fi/fixedaset/fi_301_08_01b.xml 36046 d3a4c296944fe6b9a1699fc54487430bb9afd48da6a1863e54eaa0ffcd4de3fe */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYm',name:'마감년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtStDt',name:'취득일자(시작)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtEndDt',name:'취득일자(종료)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deprYn',name:'삼각대상여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'고정자산번호(from)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetNo2',name:'고정자산번호(to)',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetPatternCd',name:'자산유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'자산유형명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'고정자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm',name:'고정자산명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLifeText',name:'내용연수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLifeMonth',name:'내용월수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgAcqAmt',name:'원취득금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqAmt',name:'취득가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprYnText',name:'상각대상',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befYyProvAmt',name:'전기말충당금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befYyBookAmt',name:'전기말장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYyDeprAmt',name:'당기말감가상각액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYyProvAmt',name:'당기말상각누계액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'thisYyBookAmt',name:'당기말장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqDt',name:'취득일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprRt',name:'상각율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetIncrAmt',name:'자산증가금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetDecrAmt',name:'자산감소금액',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.fixedaset.RetrieveIntangibleAssetListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 무형자산조회
 * 메뉴경로 : 회계/재무회계/고정자산/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/fi/fixedaset/fi_301_08_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-11-18
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 *    5. footer에 값 처리
 * 참고사항 : 
 *    1. 그리드ID.setNoResultMessageVisible(false) 설정해줘야 그리드에 데이터없음 안보임
 *    2. 엑셀다운로드 시 Number타입 excelFormat, excelCellType 옵션 추가 작업
 *    3. 그리드 fixedColumn 시 마지막 column의 다음 column이 움직이지 않는 현상 수정해야함.
 *       예)fixedColumn = "5" 인 경우 5자리까지 이동 불가해야하는데 6자리부터 이동불가됨(인스웨이브에서 공통처리 예정)
 * 테스트데이터 :
 *    1. 조회조건 : 회사코드[000], 마감년월[2026/02], 귀속부서[00000], 취득일자[2025/01/01~2026/02/25]
 * 수정이력 :
 *    - 2025-11-18      배기원    최초작성
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
  // scwin.f_SearchHeaderCreate(); // 조회 데이터셋 헤더 생성

  // scwin.f_FieldClear(); // 조회 필드 Clear

  // scwin.f_setCompanyInfo(); // 자회사 회계 시스템 추가에 따른 설정
  // ed_srchAcctDeptCd.setValue = "00000";
  // ed_srchAcctDeptNm.value = "전사";

  scwin.memJson = $c.data.getMemInfo($p);
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson["coCd"]) ? "" : scwin.memJson["coCd"]; //소속자회사
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson["coClsCd"]) ? "" : scwin.memJson["coClsCd"]; //회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, scwin.memJson["userHomeClsCd"]) ? "" : scwin.memJson["userHomeClsCd"]; //사용자소속구분코드
  scwin.isSubCompany = false;
  scwin.privAdmin = $c.gus.cfIsNull($p, scwin.memJson["privAdmin"]) ? "" : scwin.memJson["privAdmin"]; //관리자권한
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
  gr_master.setNoResultMessageVisible(false);
  ds_master.reform();
  ds_master.removeAll();
  totalRows.setValue("0");
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_SetSrchDefault();
  scwin.f_setCompanyInfo();
};

/**
 * 조회 데이터셋 헤더 생성
 * TOBE 사용안함
 */
// scwin.f_SearchHeaderCreate = function() {
//     var GAUCE_DATASET_HEADER = "coCd:STRING(3)" //회사코드
//         + ",coClsCd:STRING(1)" //회사구분코드
//         + ",closeYm:STRING(6)" //마감년월
//         + ",acctDeptCd:STRING(5)" //귀속부서
//         + ",acqDtStDt:STRING(8)" //취득일자(from)
//         + ",acqDtEndDt:STRING(8)" //취득일자(to)
//         + ",deprYn:INT(1)" //감가상각여부
//         + ",fixedAsetNo:STRING(10)" //자산번호(from)
//         + ",fixedAsetNo2:STRING(10)"; //자산번호(to)

//     ds_search.removeAll();
//     ds_search.SetDataHeader(GAUCE_DATASET_HEADER);
//     ds_search.insertRow();
// };

/**
 * 조회필드 CLEAR
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ed_coCd, ed_coNm, ica_closeYm, ica_acqDtStDt, ica_acqDtEndDt]);
  dma_search.setJSON(scwin.initJson);
  scwin.f_SetSrchDefault();
  ed_coCd.hidVal = ""; //회사코드(조회)
  ed_srchAcctDeptCd.hidVal = ""; //귀속부서코드(조회)
};

/**
 * 조회 기본값 설정
 */
scwin.f_SetSrchDefault = function () {
  ed_srchAcctDeptCd.setValue("00000");
  ed_srchAcctDeptNm.setValue("전사");
  let today = $c.date.getServerDateTime($p);
  ica_closeYm.setValue(today.substring(0, 6));
  ica_acqDtStDt.setValue(today.substring(0, 6) + "01");
  ica_acqDtEndDt.setValue(today);
  lc_deprYn.setValue("-1");
  ed_srchFixedAsetNo.setValue("");
  ed_srchFixedAsetNo2.setValue("");
  ica_closeYm.focus();
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
 * 회사코드 팝업호출(UDC)
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

  udc_comCode.cfCommonPopUp(scwin.udc_comCode_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, null);
};

/**
 * 회사코드 팝업 callBack
 */
scwin.udc_comCode_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
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
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  }
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
  ret = await $c.gus.cfValidate($p, [ed_coCd, ica_closeYm, ica_acqDtStDt, ica_acqDtEndDt]);
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
  ret = await $c.gus.cfValidate($p, [ed_srchAcctDeptCd, ed_srchAcctDeptNm, ed_srchFixedAsetNo, ed_srchFixedAsetNo2]);
  if (!ret) {
    return false;
  }
  if (ed_srchFixedAsetNo.getValue() > ed_srchFixedAsetNo2.getValue()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_045);
    ed_srchFixedAsetNo.focus();
    return false;
  }
  return true;
};

// scwin.f_GetObjValue = function (inObj) {
//     return (inObj.tagName == "OBJECT") ? inObj.text : inObj.value;
// };

// scwin.f_SetObjValue = function (inObj, val) {
//     if (inObj.tagName == "OBJECT")
//         inObj.text = val;
//     else
//         inObj.value = val;
// };

// scwin.f_PopUp = function (codeObj, nameObj, sQueryID, sWhere, sWidth) {
//     var rtnList = cfCommonPopUp(sQueryID, scwin.f_GetObjValue(codeObj), ""
//         , scwin.f_EventCheck()
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

// scwin.f_IsPopUp = function (inObj) {
//     var inValue = scwin.f_GetObjValue(inObj);
//     var hidValue = inObj.hidVal;

//     if ($c.gus.cfIsNull(inValue)) {
//         inObj.hidVal = "";
//         for (var i = 1; i < scwin.f_IsPopUp.arguments.length; i++) {
//             scwin.f_SetObjValue(scwin.f_IsPopUp.arguments[i], "");
//         }
//         return false;
//     }
//     if (inValue == hidValue) return false;

//     return true;
// };

// scwin.f_EventCheck = function() {
//     if (window.event != null && window.event.srcElement.tagName.toUpperCase() == "IMG") {
//         return 'F';
//     } else {
//         return 'T';
//     }
// };

/**
 * 조회 귀속부서코드 팝업
 */
// scwin.f_srchDeptPopUp = function() {
scwin.f_srchDeptPopUp = function (close) {
  // var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
  // scwin.f_PopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm
  //     , "retrieveAcctDeptCdInfo6", param, "410");
  let param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd; //조회조건 9번째, 전체검색허용여부 15번째
  udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callBackFunc, ed_srchAcctDeptCd.getValue(), ed_srchAcctDeptNm.getValue(), close, null, null, null, null, param, null, null, null, null, null, null, null, null);
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
 * 그리드 높이 늘리기
 * TOBE 사용안함(UDC +-버튼사용, udc_topGrdBtn)
 */
// scwin.f_grdHeiht = function (objGrd, size) {
// };

/**
 * 엑셀파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
// scwin.f_GridToExcel = function (gr_groupCode, gridName) {
//     $c.data.downloadGridViewExcel(gr_groupCode, gridName, "C:\\" + gridName + ".xls", 4 + 8 + 16);
// };

scwin.ed_srchFixedAsetNo_onblur = function (e) {
  if (!$c.gus.cfIsNull($p, ed_srchFixedAsetNo.getValue())) {
    let value = $c.gus.cfGetLeftPad($p, ed_srchFixedAsetNo.getValue(), 10);
    ed_srchFixedAsetNo.setValue(value);
  }
};
scwin.ed_srchFixedAsetNo2_onblur = function (e) {
  if (!$c.gus.cfIsNull($p, ed_srchFixedAsetNo2.getValue())) {
    let value = $c.gus.cfGetLeftPad($p, ed_srchFixedAsetNo2.getValue(), 10);
    ed_srchFixedAsetNo2.setValue(value);
  }
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
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
  }
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_comCode_onviewchangeCodeEvent = function (info) {
  ed_coNm.setValue("");
  ed_srchAcctDeptCd.setValue("");
  ed_srchAcctDeptNm.setValue("");
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
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_company',code:'coCd',codeId:'ed_coCd',editTypeCode:'focus','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent',id:'udc_comCode',mandatoryCode:'true',maxlengthCode:'3',maxlengthName:'30',name:'coNm',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'key',popupID:'popupCocd',refDataCollection:'dma_search',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'회사코드',validTitle:'회사코드',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'마감년월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ica_closeYm',style:'',ref:'data:dma_search.closeYm',mandatory:'true',title:'마감년월',displayFormat:'yyyy/MM',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_srchAcctDeptCd',btnId:'btn_srchAcctDeptCd',codeId:'ed_srchAcctDeptCd',nameId:'ed_srchAcctDeptNm',popupID:'popup_srchAcctDeptCd',validTitle:'귀속부서',selectID:'retrieveAcctDeptCdInfo6',refDataCollection:'dma_search',code:'acctDeptCd',name:'acctDeptNm',maxlengthCode:'5',objTypeCode:'data',allowCharCode:'0-9',editTypeCode:'select',validExpCode:'귀속부서',maxlengthName:'30',objTypeName:'key','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_srchAcctDeptCd_onviewchangeCodeEvent',style:'',mandatoryCode:'true',codeWidth:'50'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취득일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ica_acqDtStDt',edToId:'ica_acqDtEndDt',id:'udc_fromToCalendar1',refDataMap:'dma_search',refEdDt:'acqDtEndDt',refStDt:'acqDtStDt',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상각대상여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_deprYn',style:'',submenuSize:'auto',ref:'data:dma_search.deprYn',title:'삼각대상여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'YES'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NO'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_srchFixedAsetNo',class:' w150',ref:'data:dma_search.fixedAsetNo',objType:'data',editFormat:'##########',title:'자산번호(시작)','ev:onblur':'scwin.ed_srchFixedAsetNo_onblur'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'~',class:''}},{T:1,N:'xf:input',A:{style:'',id:'ed_srchFixedAsetNo2',class:' w150',ref:'data:dma_search.fixedAsetNo2',objType:'data',editFormat:'##########',title:'자산번호(종료)','ev:onblur':'scwin.ed_srchFixedAsetNo2_onblur'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'자산 목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grdDownOpts:'{"fileName":"자산목록.xlsx", "sheetName":"자산목록", "type":"1", "hiddenVisible":false}',gridID:'gr_master',gridUpYn:'N',grp:'grd_section1',id:'udc_excel',style:'',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',fixedColumn:'4',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'자산유형',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'자산명',width:'200',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'귀속부서',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'자산번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'내용연수',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'내용월수',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'원취득액',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'취득가액',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'상각대상',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'전기말',width:'230',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'당기말',width:'350',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'취득일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'상각율',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'자산증가',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'자산감소',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column25',value:'감가상각누계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'장부가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column23',value:'감가상각비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column22',value:'감가상각누계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'장부가액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'asetPatternNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNm',inputType:'text',style:'',value:'',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fixedAsetNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'svcLifeText',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'svcLifeMonth',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'orgAcqAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acqAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deprYnText',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'befYyProvAmt',inputType:'text',style:'',value:'',width:'130',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'befYyBookAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisYyDeprAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisYyProvAmt',inputType:'text',style:'',value:'',width:'130',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'thisYyBookAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'acqDt',value:'',displayMode:'label',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'deprRt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###.00',dataType:'number',excelCellType:'number',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'asetIncrAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'asetDecrAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column50',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'orgAcqAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column49',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'acqAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column47',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'befYyProvAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'befYyBookAmt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'thisYyDeprAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'thisYyProvAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'thisYyBookAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column64',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'asetIncrAmt\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',expression:'sum(\'asetDecrAmt\')',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'text',displayFormat:'#,###',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})