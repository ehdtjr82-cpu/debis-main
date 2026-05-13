/*amd /ui/ac/fi/stdinfomgnt/fi_100_04_01b.xml 61729 42154c222d5b93c8ef6f063196484cb24db3aada6e642195a645b14b32800686 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cardClsCd',name:'카드구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cardKndCd',name:'카드종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cardNo',name:'카드번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useEmpNo',name:'사용자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useEmpNm',name:'사용자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_confidencecard',saveRemovedData:'false','ev:onbeforerowpositionchange':'scwin.ds_confidencecard_onbeforerowpositionchange','ev:onrowpositionchange':'scwin.ds_confidencecard_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cardNo',name:'카드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useEmpNo',name:'사용자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useEmpNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useAcctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardIssueClntNo',name:'카드발급거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardIssueClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardClsCd',name:'카드구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'corCardKndCd',name:'법인카드종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardKndCd',name:'카드종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueDt',name:'발행일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardAvailTerm',name:'카드유효기간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtDt',name:'결제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtAcctDeptCd',name:'결제귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtAcctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'limitAmt',name:'한도금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardDesc',name:'카드설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtBankAcntNo',name:'결제계좌번호',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.stdinfomgnt.RetrieveConfidenceCardCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_confidencecard","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_confidencecard", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.stdinfomgnt.CUDConfidenceCardCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_confidencecard","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 신용카드등록
 * 메뉴경로 : 회계/재무회계/기준정보/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/fi/stdinfomgnt/fi_100_04_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-11-03
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항 : 
 *    1. 그리드.setNoResultMessageVisible(false) 설정해줘야 그리드에 데이터없음 안보임
 *    2. ☏ onbeforerowpositionchange 이벤트에 $c.gus.cfValidate([tbl_save]) 처리 안됨
 *    ☞ 일단 scwin.f_ValidationSync() 만들어서 처리(scwin.setInit()에 ds_list.reform() 필수, 조회 시 이벤트 안태움)
 *    3. ☏ UDC 행추가, 취소가 나와야 하는데 안됨
 *    4. "hiddenVisible":true 되어 있는 항목 일단 false 처리[hiddenCol="true" => hiddenCol="false"]
 * 수정이력 :
 *    - 2025-11-03      배기원    최초작성
 */
//hidden 값
scwin.txtCoClsCd = ""; //회사구분코드(hidden, 회사팝업호출 시)

//asis hidVal 값(컴포넌트에서 사용가능, 값을 뺄수는 없지만 비교 가능)
//예: ed_coCd.setValue('1') ed_coCd.hidVal = '2'는  if(ed_cocd.getValue() != ed_cd.hidVal) 다름

//로그인 정보
scwin.memJson;
scwin.vLoginCoCd; //소속자회사
scwin.vLoginCoClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd; //사용자소속구분코드
scwin.isSubCompany = false;
scwin.privAdmin; //ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님

scwin.initJson = {}; //초기세팅값(TOBE)
scwin.first = 0;

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  // var SEARCH_HEADER = " cardClsCd:STRING(1)" // 카드구분
  //     + ",cardKndCd:STRING(2)" // 카드종류
  //     + ",cardNo:STRING(16)" // 카드번호
  //     + ",useEmpNo:STRING(6)" // 사용자
  //     + ",useYn:INT(1)" // 사용여부
  //     + ",coCd:STRING(3)" // 회사코드
  //     + ",coClsCd:STRING(1)"; // 회사구분
  // ds_search.SetDataHeader(SEARCH_HEADER);
  // ds_search.insertRow();
  // c_useYn.Index = 0;

  // var DATA_HEADER = "cardNo:STRING(16)" // 카드번호
  //     + ",useEmpNo:STRING(6)" // 사용자사원번호
  //     + ",cardIssueClntNo:STRING(6)" // 카드발급거래처번호
  //     + ",cardClsCd:STRING(1)" // 카드구분코드
  //     + ",corCardKndCd:STRING(1)" // 법인카드종류코드
  //     + ",cardKndCd:STRING(2)" // 카드종류코드
  //     + ",issueDt:STRING(8)" // 발급일자
  //     + ",cardAvailTerm:STRING(6)" // 카드유효기간
  //     + ",useYn:INT(1)" // 사용여부
  //     + ",stmtDt:STRING(8)" // 결제일자
  //     + ",bankbookNo:STRING(5)" // 통장번호
  //     + ",stmtAcctDeptCd:STRING(5)" // 결제귀속부서코드
  //     + ",limitAmt:INT(13)" // 한도금액
  //     + ",cardDesc:STRING(60)"; // 카드설명

  // ds_confidencecard.SetDataHeader(DATA_HEADER);

  scwin.memJson = $c.data.getMemInfo($p);
  scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson["coCd"]) ? "" : scwin.memJson["coCd"]; //소속자회사
  scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson["coClsCd"]) ? "" : scwin.memJson["coClsCd"]; //회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, scwin.memJson["userHomeClsCd"]) ? "" : scwin.memJson["userHomeClsCd"]; //사용자소속구분코드
  scwin.isSubCompany = false;
  scwin.privAdmin = $c.gus.cfIsNull($p, scwin.memJson["privAdmin"]) ? "" : scwin.memJson["privAdmin"]; //ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님
  scwin.first = 0;
  const codeOptions = [{
    grpCd: "FI022",
    compID: "gr_card:cardClsCd, c_cardClsCd, lc_cardClsCd"
  } //카드구분
  , {
    grpCd: "FI021",
    compID: "gr_card:corCardKndCd, lc_corCardKndCd"
  } //법인종류
  , {
    grpCd: "FI011",
    compID: "gr_card:cardKndCd, c_cardKndCd, lc_cardKndCd"
  } //카드종류
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};

/**
 * $c.data.setCommonCode 함수의 콜백함수
 */
scwin.callBackCommonCode = function () {
  dlt_commonCodeFI021.insertJSON(0, [{
    "grpCd": "FI021",
    "cd": "0",
    "cdNm": ""
  }]);
  dlt_commonCodeFI021.reform();
  scwin.initJson = dma_search.getJSON();
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  ed_cardIssueClntNo.hidVal = ""; //카드발급처(저장)
  ed_stmtAcctDeptCd.hidVal = ""; //카드결제부서(저장)
  ed_bankbookNo.hidVal = ""; //결제통장(저장)
  ed_useEmpNo.hidVal = ""; //사용자(저장)

  $c.gus.cfDisableObjects($p, grp_save);
  $c.gus.cfDisableBtn($p, [btn_update, btn_save]);
  gr_card.setNoResultMessageVisible(false);
  ds_confidencecard.reform();
  ds_confidencecard.removeAll();
  totalRows.setValue("0");
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_FieldClear();
  scwin.f_setCompanyInfo();
  c_cardNo.focus();
};

/**
 * 조회필드 CLEAR
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [c_useYn]);
  ed_coCd.hidVal = ""; //회사코드(조회)    
  c_useEmpNo.hidVal = ""; //사용자(조회)
  //데이터맵의 초기값으로 세팅 시(예: 회사코드값 세팅)
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
 * 조회
 */
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [tbl_search]);
  if (!ret) {
    return false;
  }
  scwin.setInit();
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  gr_card.setNoResultMessageVisible(true);
  let rowCnt = ds_confidencecard.getRowCount();
  totalRows.setValue(rowCnt);
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    } else {
      for (let i = 0; i < rowCnt; i++) {
        //사용여부가 미사용:0이면 회색색상으로 #CCCCCC
        if ("0" == ds_confidencecard.getCellData(i, "useYn")) {
          gr_card.setRowColor(i, "#CCCCCC");
        }
      }
      //조회된 결과 정렬(asis:<param name=SortExpr 참조)
      ds_confidencecard.sort("cardNo", 0);
      gr_card.setFocusedCell(0, 0);
      $c.gus.cfDisableBtn($p, [btn_save]);
    }
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 행추가
 */
scwin.f_Create = async function () {
  if (ds_confidencecard.getInsertedIndex().length > 0) {
    let ret = await scwin.f_Validation();
    if (!ret) {
      return false;
    }
  }
  let row = ds_confidencecard.insertRow();
  gr_card.setFocusedCell(row, 0, false);

  //disable 처리
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_update]);
  //$c.gus.cfEnableObjects([btn_cardIssueClntNo, btn_stmtAcctDeptCd, ica_issueDt, btn_bankbookNo, btn_useEmpNo]);
  $c.gus.cfEnableObjects($p, grp_save);
  $c.gus.cfDisableObjects($p, [ed_useEmpNm, ed_bankbookNm, ed_stmtAcctDeptNm, ed_cardIssueClntNm]);
  ed_limitAmt.setValue("");
  lc_useYn.setValue(1);
  lc_cardClsCd.focus();
};

/**
 * 취소
 */
scwin.f_Cancel = function () {
  $c.data.undoRow($p, ds_confidencecard, "N");
  $c.gus.cfDisableObjects($p, grp_save);
  $c.gus.cfDisableBtn($p, [btn_save]);
};

/**
 * 수정버튼
 */
scwin.f_Update = function () {
  $c.gus.cfDisableBtn($p, [btn_update]);
  $c.gus.cfEnableObjects($p, grp_save);
  $c.gus.cfDisableObjects($p, [ed_useEmpNm, ed_bankbookNm, ed_stmtAcctDeptNm, ed_cardIssueClntNm]);
  $c.gus.cfDisableObjects($p, [ed_cardNo, ed_bankNm, ed_stmtBankAcntNo]);
  //focus 설정
  scwin.f_cardClsCd();
};

/**
 * 히든값 체크
 */
scwin.f_HiddenCheck = async function (str, msg) {
  if ($c.gus.cfIsNull($p, str.getValue().trim())) {
    return true;
  }
  if (str.getValue().trim() != str.hidVal) {
    //MSG_CM_ERR_038   =  "유효한 @가 아닙니다."
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, [msg]);
    str.focus();
    return false;
  } else {
    return true;
  }
};

/**
 * 저장 시 입력 Validation
 */
scwin.f_Validation = async function () {
  // 카드구분, 카드번호
  let ret = await $c.gus.cfValidate($p, [lc_cardClsCd, ed_cardNo]);
  if (!ret) {
    return false;
  }
  if (ed_cardNo.getValue().length < 15) {
    await $c.gus.cfAlertMsg($p, "카드번호는 15자리 이상입니다.");
    ed_cardNo.focus();
    return;
  }

  // 법인카드일때만 체크된다.
  if (lc_cardClsCd.getValue() == "1") {
    if ($c.gus.cfIsNull($p, ed_cardIssueClntNo.getValue().trim())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["카드발급처"]);
      ed_cardIssueClntNo.focus();
      return false;
    }
  }

  // 카드종류
  ret = await $c.gus.cfValidate($p, [lc_cardKndCd]);
  if (!ret) {
    return false;
  }

  // 법인카드일때만 체크된다.
  if (lc_cardClsCd.getValue() == "1" && ed_coCd.getValue() == "000") {
    if ($c.gus.cfIsNull($p, ed_stmtAcctDeptCd.getValue().trim())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["카드결제부서"]);
      ed_stmtAcctDeptCd.focus();
      return false;
    }
    if ($c.gus.cfIsNull($p, ica_issueDt.getValue().trim())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["발급일자"]);
      ica_issueDt.focus();
      return false;
    }
    if ($c.gus.cfIsNull($p, ica_cardAvailTerm.getValue().trim())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["유효기간"]);
      ica_cardAvailTerm.focus();
      return false;
    }
    if ($c.gus.cfIsNull($p, ed_stmtDt.getValue().trim())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["결제일자"]);
      ed_stmtDt.focus();
      return false;
    }
    if ($c.gus.cfIsNull($p, ed_bankbookNo.getValue().trim())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["결제통장"]);
      ed_bankbookNo.focus();
      return false;
    }
  }

  //사용자
  ret = await $c.gus.cfValidate($p, [ed_useEmpNo, ed_useEmpNm]);
  if (!ret) {
    return false;
  }
  if (lc_cardClsCd.getValue() == "1") {
    // 법인카드일때만 체크된다.
    if ($c.gus.cfIsNull($p, ed_limitAmt.getValue().trim())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["한도금액"]);
      ed_limitAmt.focus();
      return false;
    }
    /*
    if(lc_corCardKndCd.BindColVal==""){
    await $c.gus.cfAlertMsg(MSG_CM_ERR_002,["공용,임직원명의 선택"]);
    lc_corCardKndCd.focus();
    return false;
    }*/
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
  //필수값 임의로 체크(카드구분, 카드번호, 카드종류, 사용자, 사용여부)
  let ret = scwin.myCfValidate([lc_cardClsCd, ed_cardNo]);
  if (!ret) {
    return false;
  }
  if (ed_cardNo.getValue().length < 15) {
    $c.win.alert($p, "카드번호는 15자리 이상입니다.");
    ed_cardNo.focus();
    return false;
  }
  // 법인카드일때만 체크된다.
  if (lc_cardClsCd.getValue() == "1") {
    if ($c.gus.cfIsNull($p, ed_cardIssueClntNo.getValue().trim())) {
      // MSG_CM_ERR_002   = "@은(는) 필수 입력 항목입니다."
      $c.win.alert($p, "카드발급처은(는) 필수 입력 항목입니다.");
      ed_cardIssueClntNo.focus();
      return false;
    }
  }
  if ($c.gus.cfIsNull($p, lc_cardKndCd.getValue())) {
    $c.win.alert($p, "카드종류은(는) 필수 입력 항목입니다.");
    lc_cardKndCd.focus();
    return false;
  }

  // 법인카드일때만 체크된다.
  if (lc_cardClsCd.getValue() == "1" && ed_coCd.getValue() == "000") {
    if ($c.gus.cfIsNull($p, ed_stmtAcctDeptCd.getValue().trim())) {
      // MSG_CM_ERR_002   = "@은(는) 필수 입력 항목입니다."
      $c.win.alert($p, "카드결제부서은(는) 필수 입력 항목입니다.");
      ed_stmtAcctDeptCd.focus();
      return false;
    }
    if ($c.gus.cfIsNull($p, ica_issueDt.getValue().trim())) {
      // MSG_CM_ERR_002   = "@은(는) 필수 입력 항목입니다."
      $c.win.alert($p, "발급일자은(는) 필수 입력 항목입니다.");
      ica_issueDt.focus();
      return false;
    }
    if ($c.gus.cfIsNull($p, ica_cardAvailTerm.getValue().trim())) {
      // MSG_CM_ERR_002   = "@은(는) 필수 입력 항목입니다."
      $c.win.alert($p, "유효기간은(는) 필수 입력 항목입니다.");
      ica_cardAvailTerm.focus();
      return false;
    }
    if ($c.gus.cfIsNull($p, ed_stmtDt.getValue().trim())) {
      // MSG_CM_ERR_002   = "@은(는) 필수 입력 항목입니다."
      $c.win.alert($p, "결제일자은(는) 필수 입력 항목입니다.");
      ed_stmtDt.focus();
      return false;
    }
    if ($c.gus.cfIsNull($p, ed_bankbookNo.getValue().trim())) {
      // MSG_CM_ERR_002   = "@은(는) 필수 입력 항목입니다."
      $c.win.alert($p, "결제통장은(는) 필수 입력 항목입니다.");
      ed_bankbookNo.focus();
      return false;
    }
  }

  //사용자
  ret = scwin.myCfValidate([ed_useEmpNo, ed_useEmpNm]);
  if (!ret) {
    return false;
  }
  return true;
};

/**
 * 저장버튼
 */
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다.
  // if (ds_confidencecard.IsUpdated == false) {
  if (ds_confidencecard.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이타"]);
    return;
  }

  // 체크
  if (!(await scwin.f_Validation())) {
    return;
  }
  if (!(await scwin.f_HiddenCheck(ed_cardIssueClntNo, "카드발급처"))) return;
  if (!(await scwin.f_HiddenCheck(ed_stmtAcctDeptCd, "카드결제부서"))) return;
  if (!(await scwin.f_HiddenCheck(ed_bankbookNo, "결제통장"))) return;
  if (!(await scwin.f_HiddenCheck(ed_useEmpNo, "사용자"))) return;
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
    ds_confidencecard.reform();
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 팝업호출
 */
scwin.f_openPopUp = function (flag, check) {
  //asis 소스
  // var rtnList = new Array();
  // switch (flag) {
  //     case '1':
  //         // 거래처
  //         var param = ",,," + ed_coCd.getValue();
  //         rtnList = cfCommonPopUp('retrieveClntList', ed_cardIssueClntNo.getValue().trim(), ed_cardIssueClntNm.value, check, null, null, null, null, param, null, null, null, null);
  //         scwin.f_resultPopEd(ed_cardIssueClntNo, ed_cardIssueClntNm, rtnList);
  //         break;

  //     case '2':
  //         // 부서
  //         var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;

  //         rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6', ed_stmtAcctDeptCd.getValue().trim(), ed_stmtAcctDeptNm.value, check, null, null, null, null, param, null, null, null, null);
  //         scwin.f_resultPopEd(ed_stmtAcctDeptCd, ed_stmtAcctDeptNm, rtnList);
  //         break;

  //     case '3':
  //         // 사번
  //         var param = ed_coCd.getValue() + "," + scwin.txtCoClsCd;
  //         rtnList = cfCommonPopUp('retrieveAcEmpInfo', ed_useEmpNo.getValue().trim(), ed_useEmpNm.value, check, null, null, null, null, param, null, null, null, null);
  //         scwin.f_resultPopEd(ed_useEmpNo, ed_useEmpNm, rtnList);
  //         break;

  //     case '4':
  //         // 사번
  //         var param = ed_coCd.getValue() + "," + scwin.txtCoClsCd;
  //         rtnList = cfCommonPopUp('retrieveAcEmpInfo', c_useEmpNo.text.trim(), c_useEmpNm.value, check, null, null, null, null, param, null, null, null, null);
  //         scwin.f_resultPopEd(c_useEmpNo, c_useEmpNm, rtnList);
  //         break;

  //     case '5':
  //         // 통장코드
  //         var param = ",,,,," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;

  //         rtnList = cfCommonPopUp('retrieveBankBookCdInfo', ed_bankbookNo.getValue().trim(), ed_bankbookNm.value, check, null, null, null, null, param, null, null, null, null);
  //         scwin.f_resultPopEd(ed_bankbookNo, ed_bankbookNm, rtnList, '2');
  //         break;

  //     default:
  //         break;
  // }

  //tobe 수정
  switch (flag) {
    case '1':
      // 거래처
      var param = ",,," + ed_coCd.getValue();
      udc_cardIssueClntNo.cfCommonPopUp(scwin.udc_cardIssueClntNo_callBackFunc, ed_cardIssueClntNo.getValue(), ed_cardIssueClntNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, null, null, null);
      break;
    case '2':
      // 부서
      var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      udc_stmtAcctDeptCd.cfCommonPopUp(scwin.udc_stmtAcctDeptCd_callBackFunc, ed_stmtAcctDeptCd.getValue(), ed_stmtAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, null, null, null);
      break;
    case '3':
      // 사번
      var param = ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      udc_useEmpNo.cfCommonPopUp(scwin.udc_useEmpNo_callBackFunc, ed_useEmpNo.getValue(), ed_useEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, null, null, null);
      break;
    case '4':
      // 사번(조회용)
      var param = ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      udc_c_useEmpNo.cfCommonPopUp(scwin.udc_c_useEmpNo_callBackFunc, c_useEmpNo.getValue(), c_useEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, null, null, null);
      break;
    case '5':
      // 통장코드
      var param = ",,,,," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      udc_bankbookNo.cfCommonPopUp(scwin.udc_bankbookNo_callBackFunc, ed_bankbookNo.getValue(), ed_bankbookNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};

/**
 * 사용자(조회용) 팝업 callBack
 */
scwin.udc_c_useEmpNo_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    c_useEmpNo.setValue(ret[0]); // 사번
    c_useEmpNm.setValue(ret[1]); // 사용자명
    c_useEmpNo.hidVal = ret[0]; // 히든값
  } else {
    c_useEmpNo.setValue(""); // 사번
    c_useEmpNm.setValue(""); // 사용자명
    c_useEmpNo.hidVal = ""; // 히든값
  }
};

/**
 * 사용자(저장용) 팝업 callBack
 */
scwin.udc_useEmpNo_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_useEmpNo.setValue(ret[0]); // 사번
    ed_useEmpNm.setValue(ret[1]); // 사용자명
    ed_useEmpNo.hidVal = ret[0]; // 히든값
  } else {
    ed_useEmpNo.setValue(""); // 사번
    ed_useEmpNm.setValue(""); // 사용자명
    ed_useEmpNo.hidVal = ""; // 히든값
  }
};

/**
 * 카드발급처(저장용) 팝업 callBack
 */
scwin.udc_cardIssueClntNo_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_cardIssueClntNo.setValue(ret[0]); // 카드발급처코드
    ed_cardIssueClntNm.setValue(ret[1]); // 카드발급처명
    ed_cardIssueClntNo.hidVal = ret[0]; // 히든값
  } else {
    ed_cardIssueClntNo.setValue(""); // 카드발급처코드        
    ed_cardIssueClntNm.setValue(""); // 카드발급처명
    ed_cardIssueClntNo.hidVal = ""; // 히든값
  }
};

/**
 * 카드결재부서(저장용) 팝업 callBack
 */
scwin.udc_stmtAcctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_stmtAcctDeptCd.setValue(ret[0]); // 카드결재부서코드
    ed_stmtAcctDeptNm.setValue(ret[1]); // 카드결재부서명
    ed_stmtAcctDeptCd.hidVal = ret[0]; // 히든값
  } else {
    ed_stmtAcctDeptCd.setValue(""); // 카드결재부서코드
    ed_stmtAcctDeptNm.setValue(""); // 카드결재부서명
    ed_stmtAcctDeptCd.hidVal = ""; // 히든값
  }
};

/**
 * 결재통장(저장용) 팝업 callBack
 */
scwin.udc_bankbookNo_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_bankbookNo.setValue(ret[0]); // 결재통장번호
    ed_bankbookNm.setValue(ret[2]); // 결재통장명
    ed_bankbookNo.hidVal = ret[0]; // 히든값
  } else {
    ed_bankbookNo.setValue(""); // 결재통장번호
    ed_bankbookNm.setValue(""); // 결재통장명
    ed_bankbookNo.hidVal = ""; // 히든값
  }
};

/**
 * 팝업호출
 * tobe에서 사용안함(UDC udc_callBackFunc 사용)
 */
// scwin.f_checkPopEd = function (strCd, strNm, flag) {
//     if (strCd.text.trim() == strCd.hidVal)
//         return;
//     strNm.value = "";
//     strCd.hidVal = "";
//     if (strCd.text.trim() != "") scwin.f_openPopUp(flag, 'T');
// };

/**
 * 팝업결과
 * tobe에서 사용안함(UDC udc_callBackFunc 사용)
 */
// scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
//     if (rtnList != null) {
//         if (rtnList[0] == "N/A") return;
//         strCd.Text = rtnList[0]; // 코드
//         if (flag != null) {
//             strNm.value = rtnList[flag]; // 명
//         } else {
//             strNm.value = rtnList[1]; // 명
//         }
//         strCd.hidVal = rtnList[0]; // 히든값
//     } else {
//         strCd.Text = "";
//         strNm.value = "";
//         strCd.hidVal = "";
//     }
// };

/**
 * 카드구분
 */
scwin.f_cardClsCd = function () {
  dlt_commonCodeFI021.clearFilter();
  if (lc_cardClsCd.getValue() == "1") {
    $c.gus.cfEnableObj($p, lc_corCardKndCd, true);
    dlt_commonCodeFI021.setColumnFilter({
      type: 'func',
      colIndex: 'cd',
      key: fn_fi021Filter,
      condition: 'and'
    });
    lc_corCardKndCd.setValue("2");
  } else {
    $c.gus.cfEnableObj($p, lc_corCardKndCd, false);
    lc_corCardKndCd.setSelectedIndex(0);
  }
};
var fn_fi021Filter = function (cellData, tmpParam, rowIdx) {
  if (cellData.indexOf("0") > -1) {
    return false;
  }
  //return이 true인 경우 적용하고 false인 경우 skip한다.
  return true;
};

/**
 * 카드구분 변경시
 * tobe : onviewchange 이벤트
 * asis : OnSelChange()
 */
scwin.lc_cardClsCd_onviewchange = function (info) {
  scwin.f_cardClsCd();
};

/**
 * 엑셀파일 다운로드
 * TOBE 사용안함(UDC 속성값 사용, udc_topGrdBtn)
 */
// scwin.f_Excel = function() {
//     if ($c.win.confirm("Excel로 다운로드 하시겠습니까?")) {
//         $c.data.downloadGridViewExcel(objGridName, "신용카드조회", "신용카드조회.xls", 2 + 8 + 16);
//     }
// };

/**
 * 회사코드 팝업호출(UDC)
 */
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_comCode.cfCommonPopUp(scwin.udc_comCode_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null, null, null, null, null);
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

/**
 * 자회사 회계 시스템 추가에 따라 회사 코드가 변경되면 reset 
 */
scwin.f_setInitObj = function () {
  // 조회조건 - 사용자
  $c.gus.cfInitObjects($p, [c_useEmpNo, c_useEmpNm]);
};

/**
 * 그리드 값 변경(decode 대신 처리)
 */
scwin.decodeYnExp = function (data) {
  return $c.gus.decode($p, data, "1", "사용", "0", "미사용", "");
};

/**
 * 카드번호 엔터 이벤트
 */
scwin.c_cardNo_onkeydown = function (e) {
  if (e.keyCode == "13") {
    dma_search.set("cardNo", c_cardNo.getValue());
    scwin.f_Retrieve();
  }
};

/**
 * 그리드의 콤보박스 라벨설정
 * customFormatter 옵션
 */
scwin.formatComboLabel = function (value, label, item, data) {
  if ($c.gus.cfIsNull($p, value)) {
    return "";
  } else {
    return "[" + value + "]" + label;
  }
};

/**
 * 숫자 콤마처리
 */
scwin.formatComma = function (value) {
  if (!value) return "";
  var raw = value.replace(/[^0-9]/g, "");
  return raw.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * 일자만 입력(1~31)
 */
scwin.formatDay = function (value) {
  if (!value) return "";
  var raw = value.replace(/[^0-9]/g, "");
  var num = Number(raw);
  if (Number.isNaN(num) || num < 1 || num > 31) {
    this.focus();
    this.setValue("");
    return;
  }
  return num;
};

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
 * 회사코드(조회영역) 팝업 호출
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
 * 사용자(조회영역) 팝업 호출
 */
scwin.udc_c_useEmpNo_onclickEvent = function (e) {
  if (c_useEmpNo.hidVal != c_useEmpNo.getValue()) {
    c_useEmpNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, c_useEmpNo.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openPopUp('4', close);
};
scwin.udc_c_useEmpNo_onviewchangeCodeEvent = function (info) {
  c_useEmpNm.setValue("");
  if (!$c.gus.cfIsNull($p, c_useEmpNo.getValue())) {
    scwin.f_openPopUp('4', 'T');
  }
};

/**
 * 사용자(저장영역) 팝업 호출
 */
scwin.udc_useEmpNo_onclickEvent = function (e) {
  if (ed_useEmpNo.hidVal != ed_useEmpNo.getValue()) {
    ed_useEmpNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_useEmpNo.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openPopUp('3', close);
};
scwin.udc_useEmpNo_onviewchangeCodeEvent = function (info) {
  ed_useEmpNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_useEmpNo.getValue())) {
    scwin.f_openPopUp('3', 'T');
  }
};

/**
 * 카드발급처(저장영역) 팝업 호출
 */
scwin.udc_cardIssueClntNo_onclickEvent = function (e) {
  if (ed_cardIssueClntNo.hidVal != ed_cardIssueClntNo.getValue()) {
    ed_cardIssueClntNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_cardIssueClntNo.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openPopUp('1', close);
};
scwin.udc_cardIssueClntNo_onviewchangeCodeEvent = function (info) {
  ed_cardIssueClntNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_cardIssueClntNo.getValue())) {
    scwin.f_openPopUp('1', 'T');
  }
};

/**
 * 카드결재부서(저장영역) 팝업 호출
 */
scwin.udc_stmtAcctDeptCd_onclickEvent = function (e) {
  if (ed_stmtAcctDeptCd.hidVal != ed_stmtAcctDeptCd.getValue()) {
    ed_stmtAcctDeptNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_stmtAcctDeptCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openPopUp('2', close);
};
scwin.udc_stmtAcctDeptCd_onviewchangeCodeEvent = function (info) {
  ed_stmtAcctDeptNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_stmtAcctDeptCd.getValue())) {
    scwin.f_openPopUp('2', 'T');
  }
};

/**
 * 결재통장(저장영역) 팝업 호출
 */
scwin.udc_bankbookNo_onclickEvent = function (e) {
  if (ed_bankbookNo.hidVal != ed_bankbookNo.getValue()) {
    ed_bankbookNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, ed_bankbookNo.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openPopUp('5', close);
};
scwin.udc_bankbookNo_onviewchangeCodeEvent = function (info) {
  ed_bankbookNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_bankbookNo.getValue())) {
    scwin.f_openPopUp('5', 'T');
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * DataList의 rowPosition이 변경된 경우 발생
 */
scwin.ds_confidencecard_onrowpositionchange = function (info) {
  if (ds_confidencecard.getRowStatus(info.newRowIndex) == "C") {
    $c.gus.cfEnableKeyData($p);
    ed_cardIssueClntNo.hidVal = ""; //카드발급처(저장)
    ed_stmtAcctDeptCd.hidVal = ""; //카드결제부서(저장)
    ed_bankbookNo.hidVal = ""; //결제통장(저장)
    ed_useEmpNo.hidVal = ""; //사용자(저장)
  } else {
    //기타 데이타 -> 초기화, 수정 버튼 활성화
    $c.gus.cfDisableObjects($p, grp_save);
    $c.gus.cfDisableBtn($p, [btn_save]);
    ed_cardIssueClntNo.hidVal = ds_confidencecard.getCellData(info.newRowIndex, "cardIssueClntNo");
    ed_stmtAcctDeptCd.hidVal = ds_confidencecard.getCellData(info.newRowIndex, "stmtAcctDeptCd");
    ed_bankbookNo.hidVal = ds_confidencecard.getCellData(info.newRowIndex, "bankbookNo");
    ed_useEmpNo.hidVal = ds_confidencecard.getCellData(info.newRowIndex, "useEmpNo");
  }
};

/**
* DataList의 rowPosition이 변경되기 직전에 발생하며 rowPosition의 변경 적용 여부를 결정
* asis : 그리드 로우를 변경하려고 할 경우 - 필수항목 체크
* tobe : 현재 $c.gus.cfValidate 사용 시 async라 이벤트에 async주면 return false안먹힘
*/
scwin.ds_confidencecard_onbeforerowpositionchange = function (info) {
  if (ds_confidencecard.getRowStatus(info.oldRowIndex) == "C" || ds_confidencecard.getRowStatus(info.oldRowIndex) == "U") {
    return scwin.f_ValidationSync();
  }
};

/**
 * 입력이 가능한 컬럼에서 포커스가 빠져나가는 시점에 본 속성에 정의한 함수를 실행
 * 빈값인 경우 0으로 설정
 */
scwin.validatorNumber = function (val) {
  if ($c.gus.cfIsNull($p, val)) {
    return "0";
  }
  return val;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_comCode',btnId:'btn_company',codeId:'ed_coCd',nameId:'ed_coNm',popupID:'popupCocd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo',refDataCollection:'dma_search',code:'coCd',name:'coNm',maxlengthCode:'3',objTypeCode:'data',mandatoryCode:'true',allowCharCode:'0-9',validExpCode:'회사코드',editTypeCode:'select',maxlengthName:'30',objTypeName:'key','ev:onclickEvent':'scwin.udc_comCode_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent',style:'',codeWidth:'40',validExpName:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'카드구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'c_cardClsCd',style:'width: 100px;',submenuSize:'auto',chooseOptionLabel:'전체',ref:'data:dma_search.cardClsCd',emptyItem:'true',title:'카드구분'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'카드종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'c_cardKndCd',style:'width: 140px;',submenuSize:'auto',ref:'data:dma_search.cardKndCd',emptyItem:'true',chooseOptionLabel:'전체',title:'카드종류',visibleRowNum:'20'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'카드번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',dataType:'text',editFormat:'####-####-####-####','ev:onkeydown':'scwin.c_cardNo_onkeydown',id:'c_cardNo',ref:'data:dma_search.cardNo',style:'width: 150px;',title:'카드번호'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_c_useEmpNo',code:'useEmpNo',codeId:'c_useEmpNo',editTypeCode:'select','ev:onclickEvent':'scwin.udc_c_useEmpNo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_c_useEmpNo_onviewchangeCodeEvent',id:'udc_c_useEmpNo',maxlengthCode:'6',name:'useEmpNm',nameId:'c_useEmpNm',objTypeCode:'data',popupID:'popup_c_useEmpNo',refDataCollection:'dma_search',selectID:'retrieveAcEmpInfo',style:'',validExpCode:'사용자',validTitle:'사용자조회',codeWidth:'60'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'c_useYn',ref:'data:dma_search.useYn',style:'width: 100px;',submenuSize:'auto',title:'사용여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 850px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"신용카드조회.xlsx", "sheetName":"신용카드조회", "type":"1", "hiddenVisible":false}',templateYn:'N',gridUpYn:'N',gridID:'gr_card',id:'udc_excel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_confidencecard',id:'gr_card',style:'',visibleRowNumFix:'true',focusMode:'row',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'20',visibleRowNum:'17',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'카드구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'법인종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'카드번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'카드종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'사용자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'사용자명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'사용여부',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'카드발급처',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'카드발급처명',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'카드결제부서',width:'130'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column27',value:'카드결제부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'발급일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column21',value:'유효기간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column23',value:'결제일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'결제통장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'결제통장명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'한도금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'비고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'은행',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'결제계좌',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cardClsCd',inputType:'select',style:'',value:'',width:'100',customFormatter:'scwin.formatComboLabel'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'corCardKndCd',inputType:'select',style:'',value:'',width:'100',customFormatter:'scwin.formatComboLabel'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cardNo',inputType:'text',style:'',value:'',width:'150',displayFormat:'####-####-####-####'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cardKndCd',inputType:'select',style:'',value:'',width:'100',customFormatter:'scwin.formatComboLabel'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useEmpNo',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useEmpNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useYn',inputType:'text',style:'',value:'',width:'80',displayFormatter:'scwin.decodeYnExp'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cardIssueClntNo',inputType:'text',style:'',value:'',width:'120',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cardIssueClntNm',inputType:'text',style:'',value:'',width:'130',textAlign:'left',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stmtAcctDeptCd',inputType:'text',style:'',value:'',width:'130',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'stmtAcctDeptNm',value:'',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'issueDt',value:'',displayMode:'label',hidden:'true',hiddenCol:'false',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',style:'',id:'cardAvailTerm',value:'',displayMode:'label',hidden:'true',hiddenCol:'false',calendarValueType:'yearMonth',displayFormat:'yyyy/MM'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'stmtDt',value:'',displayMode:'label',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bankbookNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bankbookNm',value:'',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'limitAmt',value:'',displayMode:'label',textAlign:'right',hidden:'true',hiddenCol:'false',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cardDesc',value:'',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bankNm',value:'',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'stmtBankAcntNo',value:'',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'false'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn',gridID:'gr_card',rowAddUserAuth:'C',btnCancelYn:'Y',rowAddFunction:'scwin.f_Create',btnRowDelYn:'N',btnDelYn:'N',cancelFunction:'scwin.f_Cancel'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'grp_save',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'카드구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_cardClsCd',class:'form-control w150',direction:'auto',emptyItem:'true',ref:'data:ds_confidencecard.cardClsCd',objType:'data',title:'카드구분',chooseOptionLabel:'$blank',mandatory:'true',labelWidthAuto:'true','ev:onviewchange':'scwin.lc_cardClsCd_onviewchange'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_corCardKndCd',class:'form-control w150',direction:'auto',chooseOptionLabel:'$blank',ref:'data:ds_confidencecard.corCardKndCd',objType:'data',title:'법인카드종류',emptyItem:'true',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'카드번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_cardNo',style:'',ref:'data:ds_confidencecard.cardNo',objType:'key',title:'카드번호',mandatory:'true',ltrim:'true',editFormat:'####-####-####-####'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'카드발급처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_cardIssueClntNo',btnId:'btn_cardIssueClntNo',codeId:'ed_cardIssueClntNo',nameId:'ed_cardIssueClntNm',popupID:'popup_cardIssueClntNo',validTitle:'카드발급처조회',selectID:'retrieveClntList',refDataCollection:'ds_confidencecard',code:'cardIssueClntNo',name:'cardIssueClntNm',mandatoryCode:'',objTypeCode:'data',validExpCode:'카드발급처코드',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',mandatoryName:'',objTypeName:'key',validExpName:'카드발급처명','ev:onclickEvent':'scwin.udc_cardIssueClntNo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_cardIssueClntNo_onviewchangeCodeEvent',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'카드종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_cardKndCd',style:'',submenuSize:'auto',emptyItem:'true',ref:'data:ds_confidencecard.cardKndCd',objType:'data',title:'카드종류',mandatory:'true',labelWidthAuto:'true',visibleRowNum:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'카드결제부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_stmtAcctDeptCd',btnId:'btn_stmtAcctDeptCd',codeId:'ed_stmtAcctDeptCd',nameId:'ed_stmtAcctDeptNm',popupID:'popup_stmtAcctDeptCd',validTitle:'카드결제부서',selectID:'retrieveAcctDeptCdInfo6',refDataCollection:'ds_confidencecard',code:'stmtAcctDeptCd',name:'stmtAcctDeptNm',maxlengthCode:'6',objTypeCode:'data',validExpCode:'카드결제부서',allowCharCode:'0-9',editTypeCode:'select',objTypeName:'key',validExpName:'카드결제부서명','ev:onclickEvent':'scwin.udc_stmtAcctDeptCd_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_stmtAcctDeptCd_onviewchangeCodeEvent',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발급일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ica_issueDt',style:'',ref:'data:ds_confidencecard.issueDt',objType:'data',title:'발급일자',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유효기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'form-control cal',id:'ica_cardAvailTerm',style:'',ref:'data:ds_confidencecard.cardAvailTerm',objType:'data',title:'유효기간',displayFormat:'yyyy/MM'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결제일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w50',id:'ed_stmtDt',style:'',maxlength:'2',ref:'data:ds_confidencecard.stmtDt',objType:'data',title:'결재일자',dataType:'text',editFormat:'##',customModelFormatter:'scwin.formatDay',validateOnInput:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결제통장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_bankbookNo',btnId:'btn_bankbookNo',codeId:'ed_bankbookNo',nameId:'ed_bankbookNm',popupID:'popup_bankbookNo',validTitle:'결제통장조회',selectID:'retrieveBankBookCdInfo',refDataCollection:'ds_confidencecard',code:'bankbookNo',name:'bankbookNm',maxlengthCode:'6',objTypeCode:'data',validExpCode:'결제통장코드',allowCharCode:'0-9',editTypeCode:'select',objTypeName:'key',validExpName:'결제통장명','ev:onclickEvent':'scwin.udc_bankbookNo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_bankbookNo_onviewchangeCodeEvent',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사용자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_useEmpNo',btnId:'btn_useEmpNo',codeId:'ed_useEmpNo',nameId:'ed_useEmpNm',popupID:'popup_useEmpNo',validTitle:'사용자조회',selectID:'retrieveAcEmpInfo',refDataCollection:'ds_confidencecard',code:'useEmpNo',name:'useEmpNm',mandatoryCode:'true',objTypeCode:'data',validExpCode:'사용자번호',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',mandatoryName:'true',objTypeName:'key',validExpName:'사용자명','ev:onclickEvent':'scwin.udc_useEmpNo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_useEmpNo_onviewchangeCodeEvent',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'은행',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_bankNm',style:'',ref:'data:ds_confidencecard.bankNm',objType:'data',title:'은행',maxByteLength:'60'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결제계좌',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_stmtBankAcntNo',style:'',ref:'data:ds_confidencecard.bankbookNo',objType:'data',title:'결재계좌',maxByteLength:'60'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'한도금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150 tar',id:'ed_limitAmt',style:'',ref:'data:ds_confidencecard.limitAmt',objType:'data',title:'한도금액',maxlength:'13',displayFormat:'#,###',dataType:'number',validator:'scwin.validatorNumber'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_cardDesc',style:'',ref:'data:ds_confidencecard.cardDesc',objType:'data',title:'비고',maxByteLength:'60'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',emptyItem:'true',id:'lc_useYn',mandatory:'true',objType:'data',ref:'data:ds_confidencecard.useYn',style:'',submenuSize:'auto',title:'사용여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용안함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Update',id:'btn_update',objType:'bUpdate',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_save',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]}]}]})