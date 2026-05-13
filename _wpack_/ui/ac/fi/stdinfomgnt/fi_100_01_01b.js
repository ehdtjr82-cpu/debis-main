/*amd /ui/ac/fi/stdinfomgnt/fi_100_01_01b.xml 60758 10cb1bd676ad3c9e23c3e4e4ccdf4f4c102ae0f04ae9120e01d6d8f5145572ea */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctNm',name:'계정명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_account',saveRemovedData:'false','ev:onbeforerowpositionchange':'scwin.ds_account_onbeforerowpositionchange','ev:onrowpositionchange':'scwin.ds_account_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAcctCd',name:'상위계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAcctNm',name:'상위계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipPrtNm',name:'전표인쇄명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctEngNm',name:'영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'차대구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctLvl',name:'계정레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aggrClsCd',name:'집계구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipProcYn',name:'기표여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNoCd',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termMgntYn',name:'기간관리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntYn',name:'거래처관리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empMgntYn',name:'사원관리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtMgntYn',name:'일자관리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptTermStDt',name:'적용기간(시작일)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptTermEndDt',name:'적용기간(종료일)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkLevel',name:'체크레벨',dataType:'number'}},{T:1,N:'w2:column',A:{id:'substSlipCntlYn',name:'잔액통제',dataType:'text'}},{T:1,N:'w2:column',A:{id:'corCardDeductYn',name:'법인카드공제',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdCntlYn',name:'전도금통제',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTaxAmtDeductYn',name:'매입세액불공제',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transferSlipYn',name:'대체전표불가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expenseSlipYn',name:'경비전표불가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'privateCorCardYn',name:'개인형법인카드불가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'treeNm',name:'treeNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntUpperAcctCd',name:'상위계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctLvl',name:'계정레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctClsCd',name:'계정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDrcrClsCd',name:'차대구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAggrClsCd',name:'집계구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAdptStDt',name:'적용기간(시작일)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAdptEndDt',name:'적용기간(종료일)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctEngNm',name:'영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntModYn',name:'변경여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_accountExcel',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAcctCd',name:'상위계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAcctNm',name:'상위계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipPrtNm',name:'전표인쇄명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctEngNm',name:'영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'차대구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctLvl',name:'계정레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aggrClsCd',name:'집계구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipProcYn',name:'기표여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNoCd',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termMgntYn',name:'기간관리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntYn',name:'거래처관리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empMgntYn',name:'사원관리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtMgntYn',name:'일자관리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTaxAmtDeductYn',name:'매입세액불공제',dataType:'text'}},{T:1,N:'w2:column',A:{id:'substSlipCntlYn',name:'잔액통제',dataType:'text'}},{T:1,N:'w2:column',A:{id:'corCardDeductYn',name:'법인카드공제',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdCntlYn',name:'전도금통제',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptTerm',name:'적용기간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transferSlipYn',name:'대체전표불가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expenseSlipYn',name:'경비전표불가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'privateCorCardYn',name:'개인형법인카드불가',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.stdinfomgnt.RetrieveAccountCodeCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_account", "key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.stdinfomgnt.CUDAccountCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_account","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 계정코드등록
 * 메뉴경로 : 회계/재무회계/기준정보/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/fi/stdinfomgnt/fi_100_01_01b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-10-15
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 *       - $c.gus.cfDisableBtn 아직 안됨(objType 안되고 id로 처리)
 *       - 엑셀다운로드 시 콤보박스용 값들 라벨+값 나오도록 세팅해야함
 *    5. [완료]화면목록이 tree임(크기조정)
 *    6. 트리뷰 밑 행추가, 행삭제 버튼 작게 해야함(sm 안먹힘)
 * 참고사항 :
 *    1. ☏ onbeforerowpositionchange 이벤트에 $c.gus.cfValidate([grp_save]) 처리 안됨
 *    ☞ 일단 scwin.f_ValidationSync() 만들어서 처리(scwin.setInit()에 ds_list.reform() 필수, 조회 시 이벤트 안태움)
 * 수정이력 :
 *    - 2025-10-15      배기원    최초작성
 */
//asis hidVal 값(id의 hidVal로 비교하지만 여기서는 조회할때 값을 대입해주므로 scwin.hidVal_사용)
scwin.hidVal_c_acctCd = ""; //계정코드(조회)
scwin.hidVal_c_upperAcctCd = ""; //상위계정코드(저장), em_upperAcctCd.hidVal 대신

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  // cfDisableKeyData();
  // cfDisableBtn([bSave,bUpdate]);
  // cfDisableObjects([img_upperAcctCd,img_adptTermStDt,img_adptTermEndDt,btn_Add,btn_Cancel, btn_RtrieveHist]);

  const codeOptions = [{
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
  //계정레벨
  {
    grpCd: "CO014",
    compID: "lc_aggrClsCd"
  },
  //집계구분
  {
    grpCd: "FI027",
    compID: "lc_mgntNoCd"
  },
  //관리번호
  {
    grpCd: "FI094",
    compID: "lc_pchsTaxAmtDeductYn"
  } //매입세액불공제
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};

/**
 * $c.data.setCommonCode 함수의 콜백함수
 */
scwin.callBackCommonCode = function () {
  dlt_commonCodeFI027.insertJSON(0, [{
    "grpCd": "FI027",
    "cd": "0",
    "cdNm": "선택안함"
  }]);
  dlt_commonCodeFI027.reform();
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  scwin.hidVal_c_upperAcctCd = "";
  ds_account.reform();
  ds_account.removeAll();

  //조회영역 계정코드
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableBtnOnly($p, [btn_search]);
  $c.gus.cfEnableObjects($p, [c_acctCd, c_acctNm]);
  $c.gus.cfDisableObjects($p, grp_save);
  $c.gus.cfDisableBtn($p, [btn_add, btn_cancel, btn_rtrieveHist, btn_update, btn_save]);
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_FieldClear();
  c_acctCd.focus();
};

/**
 * 조회초기 필드 Clear
 */
scwin.f_FieldClear = function (e) {
  dma_search.setEmptyValue();
  scwin.hidVal_c_acctCd = ""; //계정코드(조회)
  c_acctCd.hidVal = "";
};

/**
* 조회버튼
*/
scwin.f_Retrieve = function (flag) {
  var acctCd = "";
  if (flag == "1") {
    acctCd = scwin.hidVal_c_upperAcctCd;
  } else {
    acctCd = c_acctCd.getValue();
  }
  scwin.setInit();
  ds_account.insertRow(0);
  ds_account.setCellData(0, "acctCd", acctCd);
  $c.sbm.execute($p, sbm_retrieve, ds_account.getRowJSON(0));
  //todo : asis 비/활성화 확인차(개발 후 주석 삭제)
  // cfDisableKeyData();
  // cfDisableBtn([bSave]);
  // cfEnableObjects([btn_Add,btn_Cancel, btn_RtrieveHist]);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    let rowCnt = ds_account.getRowCount();
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    } else {
      tv_treeView.findNodeByIndex(1, true);
      tv_treeView.focus();
      $c.gus.cfEnableObjects($p, [btn_add, btn_cancel, btn_rtrieveHist, btn_update, btn_save]);
      $c.gus.cfDisableObjects($p, [btn_save]);
    }
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 행추가
 */
scwin.f_AddItem = async function () {
  // for (j = 0; j <= ds_account.getRowCount(); j++) {
  //     //가우스상태값 : 1:C, 3:U
  //     if (ds_account.getRowStatus(j) == "C" || ds_account.getRowStatus(j) == "U") {
  //         await $c.gus.cfAlertMsg("저장되지 않은 데이타가 있습니다.");
  //         return;
  //     }
  // }
  if (ds_account.getModifiedIndex().length > 0) {
    await $c.gus.cfAlertMsg($p, "저장되지 않은 데이타가 있습니다.");
    return;
  }
  var rowPosition = ds_account.getRowPosition();
  if (ds_account.getCellData(rowPosition, "slipProcYn") == 1) {
    await $c.gus.cfAlertMsg($p, "기표여부가 true 일경우 하위에 계정을 생성할수 없습니다.");
    return;
  }
  var Tmp_Cd = "";
  var Tmp_Nm = "";
  var imsi_level = "";
  var imsi_RowPositino = 0;
  Tmp_Cd = ds_account.getCellData(rowPosition, "acctCd");
  Tmp_Nm = ds_account.getCellData(rowPosition, "acctNm");
  //imsi_level = tv_treeView.ItemLevel + 1;
  var node = tv_treeView.getSelectedNode();
  imsi_level = node ? node.depth + 1 : 1;
  imsi_RowPositino = rowPosition;
  var newRow;
  if (rowPosition === ds_account.getRowCount() - 1 || ds_account.getRowCount() === 0) {
    newRow = ds_account.insertRow();
  } else {
    newRow = ds_account.insertRow(rowPosition + 1);
  }
  ds_account.setCellData(newRow, "checkLevel", imsi_level);
  ds_account.setCellData(newRow, "treeNm", "ADD");
  ds_account.setCellData(newRow, "upperAcctCd", Tmp_Cd);
  //c_upperAcctCd.hidVal = Tmp_Cd;
  scwin.hidVal_c_upperAcctCd = Tmp_Cd;
  ds_account.setCellData(newRow, "upperAcctNm", Tmp_Nm);
  ds_account.setCellData(newRow, "acctLvl", "");
  ds_account.setCellData(newRow, "adptTermStDt", $c.date.getServerDateTime($p));
  ds_account.setCellData(newRow, "adptTermEndDt", "99991231");
  tv_treeView.focus();
  tv_treeView.findNodeByIndex(newRow + 1, true);
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableObjects($p, grp_save);
  $c.gus.cfDisableObjects($p, [c_upperAcctNm]);
  $c.gus.cfDisableBtn($p, [btn_update]);

  //todo : asis 비/활성화 확인차(개발 후 주석 삭제)
  // cfEnableKeyData();
  // cfEnableObjects([img_upperAcctCd,img_adptTermStDt,img_adptTermEndDt,btn_Add,btn_Cancel]);
  // cfDisableBtn([ bUpdate]);
  // cfDisableObjects([txt_upperAcctNm]);
};

/**
 * 취소
 */
scwin.f_Cancel = function () {
  var row = ds_account.getRowPosition();
  if (ds_account.getRowStatus(row) == "C") {
    ds_account.removeRow(row);
    if (row == 0) {
      row = row + 1;
    }
    // ds_account.setRowPosition(row, event);
  } else {
    ds_account.undoRow(row);
    row = row + 1;
  }
  //$c.gus.cfEnableObjects([c_acctCd, c_acctNm]);
  $c.gus.cfDisableObjects($p, grp_save);
  //$c.gus.cfDisableObjects([grp_save, c_upperAcctCd, c_upperAcctNm, btn_upperAcctCd, ica_adptTermStDt, ica_adptTermEndDt]);
  $c.gus.cfDisableBtn($p, [btn_save]);
  tv_treeView.focus();
  tv_treeView.findNodeByIndex(row, true);
};

/**
 * 수정버튼
 */
scwin.f_Update = function () {
  //todo : asis 비/활성화 확인차(개발 후 주석 삭제)
  // cfDisableKey();	
  // cfDisableBtn([bUpdate]);
  // cfEnableObjects([img_upperAcctCd,img_adptTermStDt,img_adptTermEndDt]);
  // cfDisableObjects([txt_upperAcctNm]);

  // disable 처리(계정코드, 상위계정코드명 말고 전부 활성화)
  // $c.gus.cfDisableKey();  //이게 먹히면 아래 grp_save.setDisabled(false) 안써도 되는데
  $c.gus.cfEnableObjects($p, grp_save);
  $c.gus.cfDisableBtn($p, [btn_update]);
  $c.gus.cfDisableObjects($p, [c_upperAcctNm, ed_acctCd]);
  //focus 설정
  ed_acctNm.focus();
};
scwin.f_HiddenCheck = async function (str, msg) {
  if ($c.gus.cfIsNull($p, str.getValue().trim())) {
    return true;
  }
  if (str.getValue().trim() != scwin.hidVal_c_upperAcctCd) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, [msg]);
    // str.SelectAll = "true";
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
  let ret = await $c.gus.cfValidate($p, [grp_save]);
  if (!ret) {
    return false;
  }
  /**
   * asis validExp="계정코드:yes:format=0000000" 체크 추가
   */
  ret = await scwin.myLengthCheck([ed_acctCd, c_upperAcctCd], 7);
  if (!ret) {
    return false;
  }
  // if(ed_acctCd.getValue().trim().length < 7) {
  //     let msg = "계정코드은(는) '0000000' 형식이어야 합니다.";
  //        msg += "<BR>  - # : 문자 혹은 숫자";
  //        msg += "<BR>  - h, H : 한글(H는 공백포함)";
  //        msg += "<BR>  - A, Z : 문자(Z는 공백포함)";
  //        msg += "<BR>  - 0, 9 : 숫자(9는 공백포함)";
  //     await $c.gus.cfAlertMsg(msg);
  //     ed_acctCd.focus();
  //     return false;
  // }

  // if (!await $c.gus.cfValidate([ed_acctCd, ed_acctNm, ed_slipPrtNm, ed_acctEngNm, c_upperAcctCd, ica_adptTermStDt, ica_adptTermEndDt,
  //     lc_acctClsCd, lc_aggrClsCd, lc_acctLvl, lc_drcrClsCd])) {
  //     return false;
  // }
  //c_upperAcctCd, ica_adptTermStDt, ica_adptTermEndDt
  // 기표여부가 true 일경우 전표인쇄명 필수
  if (cbx_slipProcYn.getValue() == "1" && $c.gus.cfIsNull($p, ed_slipPrtNm.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["전표인쇄명"]);
    ed_slipPrtNm.focus();
    return false;
  }

  // 중복체크
  let row = ds_account.getRowPosition();
  for (var i = 0; i < ds_account.getRowCount(); i++) {
    if (i != row && ds_account.getCellData(i, "acctCd") == ed_acctCd.getValue().trim()) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["계정코드"]);
      ed_acctCd.focus();
      return false;
    }
    // 최하위레벨만 기표를 할수 있다.
    if (i != row && ds_account.getCellData(i, "upperAcctCd") == ed_acctCd.getValue().trim() && cbx_slipProcYn.getValue() == "1") {
      await $c.gus.cfAlertMsg($p, "최하위레벨만 기표를 할 수 있습니다.");
      cbx_slipProcYn.reset();
      return false;
    }
  }

  // 날짜체크
  if (!(await $c.gus.cfIsAfterDate($p, ica_adptTermStDt.getValue().trim(), ica_adptTermEndDt.getValue().trim()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ica_adptTermStDt.focus();
    return false;
  }

  // 상위계정체크
  if (lc_acctLvl.getValue() != "1" && $c.gus.cfIsNull($p, c_upperAcctCd.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["상위계정"]);
    return false;
  }
  if (lc_acctLvl.getValue() == "1" && c_upperAcctCd.getValue().trim() != '') {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["계정레벨이 1일경우", "상위계정을 등록"]);
    return false;
  }
  if (ed_acctCd.getValue().trim() == c_upperAcctCd.getValue().trim()) {
    await $c.gus.cfAlertMsg($p, "계정코드와 상위계정코드는 동일할수 없습니다.");
    c_upperAcctCd.setValue("");
    c_upperAcctNm.setValue("");
    c_upperAcctCd.focus();
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
 * scwin.myLengthCheck 사용하기 위한 함수
 * ASIS validExp="계정코드:yes:format=0000000" 대용
 */
scwin.myLengthCheck = function (oElement, iLength) {
  let obj = $c.gus.object($p, oElement);
  if (obj.length != null) {
    for (var i = 0; i < obj.length; i++) {
      let id = obj[i];
      if (id.getValue().length != iLength) {
        let editFormat = $c.str.replaceAll($p, id.options.editFormat, "#", "0");
        let msg = "";
        msg += id.options.title + "은(는) '" + editFormat + "' 형식이어야 합니다.";
        msg += "<BR>  - # : 문자 혹은 숫자";
        msg += "<BR>  - h, H : 한글(H는 공백포함)";
        msg += "<BR>  - A, Z : 문자(Z는 공백포함)";
        msg += "<BR>  - 0, 9 : 숫자(9는 공백포함)";
        $c.win.alert($p, msg);
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
  //필수값 임의로 체크(계정코드, 계정명, 계정구분, 차대구분, 계정레벨, 집계구분, 상위계정, 적용기간)
  let ret = scwin.myCfValidate([ed_acctCd, ed_acctNm, lc_acctClsCd, lc_drcrClsCd, lc_acctLvl, lc_aggrClsCd, c_upperAcctCd]);
  if (!ret) {
    return false;
  }

  /**
   * asis validExp="계정코드:yes:format=0000000" 체크 추가
   */
  ret = scwin.myLengthCheck([ed_acctCd, c_upperAcctCd], 7);
  if (!ret) {
    return false;
  }

  //udc 날짜 title 없어서 빈값 필수 입력 항목입니다. 나옴
  if ($c.gus.cfIsNull($p, ica_adptTermStDt.getValue())) {
    // $c.win.alert(MSG_CM_ERR_002, ["적용기간"]); //@은(는) 필수 입력 항목입니다
    $c.win.alert($p, "적용기간은(는) 필수 입력 항목입니다.");
    ica_adptTermStDt.focus();
    return false;
  }
  if ($c.gus.cfIsNull($p, ica_adptTermEndDt.getValue())) {
    // $c.win.alert(MSG_CM_ERR_002, ["적용기간"]); //@은(는) 필수 입력 항목입니다
    $c.win.alert($p, "적용기간은(는) 필수 입력 항목입니다.");
    ica_adptTermEndDt.focus();
    return false;
  }

  //c_upperAcctCd, ica_adptTermStDt, ica_adptTermEndDt
  // 기표여부가 true 일경우 전표인쇄명 필수
  if (cbx_slipProcYn.getValue() == "1" && $c.gus.cfIsNull($p, ed_slipPrtNm.getValue())) {
    // $c.win.alert(MSG_CM_ERR_002, ["전표인쇄명"]);
    $c.win.alert($p, "전표인쇄명은(는) 필수 입력 항목입니다.");
    ed_slipPrtNm.focus();
    return false;
  }

  // 중복체크
  let row = ds_account.getRowPosition();
  for (var i = 0; i < ds_account.getRowCount(); i++) {
    if (i != row && ds_account.getCellData(i, "acctCd") == ed_acctCd.getValue().trim()) {
      // $c.win.alert(MSG_CM_ERR_032, ["계정코드"]);
      $c.win.alert($p, "계정코드은(는) 필수 입력 항목입니다.");
      ed_acctCd.focus();
      return false;
    }
    // 최하위레벨만 기표를 할수 있다.
    if (i != row && ds_account.getCellData(i, "upperAcctCd") == ed_acctCd.getValue().trim() && cbx_slipProcYn.getValue() == "1") {
      $c.win.alert($p, "최하위레벨만 기표를 할 수 있습니다.");
      cbx_slipProcYn.reset();
      return false;
    }
  }

  // 날짜체크
  if (!$c.gus.cfIsAfterDate($p, ica_adptTermStDt.getValue().trim(), ica_adptTermEndDt.getValue().trim())) {
    $c.win.alert($p, MSG_CM_ERR_039);
    ica_adptTermStDt.focus();
    return false;
  }

  // 상위계정체크
  if (lc_acctLvl.getValue() != "1" && $c.gus.cfIsNull($p, c_upperAcctCd.getValue().trim())) {
    //$c.win.alert(MSG_CM_WRN_003, ["상위계정"]);
    $c.win.alert($p, "상위계정은(는) 필수 입력 항목입니다.");
    return false;
  }
  if (lc_acctLvl.getValue() == "1" && !$c.gus.cfIsNull($p, c_upperAcctCd.getValue().trim())) {
    //MSG_CM_ERR_041   =  "@은(는) @할 수 없습니다."
    $c.win.alert($p, "계정레벨이 1일경우은(는) 상위계정을 등록할 수 없습니다.");
    return false;
  }
  if (ed_acctCd.getValue().trim() == c_upperAcctCd.getValue().trim()) {
    $c.win.alert($p, "계정코드와 상위계정코드는 동일할수 없습니다.");
    c_upperAcctCd.setValue("");
    c_upperAcctNm.setValue("");
    c_upperAcctCd.focus();
    return false;
  }
  return true;
};

/**
 * 저장버튼
 */
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다.
  //if (ds_account.isUpdated() == false) {
  if (ds_account.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이타"]);
    return;
  }

  // 체크
  if (!(await scwin.f_Validation())) {
    return;
  }

  // 히든값하고 비교(hidVal)
  if (!(await scwin.f_HiddenCheck(c_upperAcctCd, "상위계정"))) {
    return;
  }

  //재무계정 변경에 따른 관리계정의 변경내용을 변경자에게 보여주고, 자동으로 관리계정도 같게 수정할 지를 결정하게 한다
  var strChgCntns = "";
  var rowPos = ds_account.getRowPosition();
  if (ds_account.getCellData(rowPos, "upperAcctCd") != ds_account.getCellData(rowPos, "mgntUpperAcctCd")) {
    strChgCntns += "상위계정 : " + ds_account.getCellData(rowPos, "mgntUpperAcctCd") + " -> " + ds_account.getCellData(rowPos, "upperAcctCd") + "<BR>";
  }
  if (ds_account.getCellData(rowPos, "acctLvl") != ds_account.getCellData(rowPos, "mgntAcctLvl")) {
    strChgCntns += "계정레벨 : " + ds_account.getCellData(rowPos, "mgntAcctLvl") + " -> " + ds_account.getCellData(rowPos, "acctLvl") + "<BR>";
  }
  if (ds_account.getCellData(rowPos, "acctClsCd") != ds_account.getCellData(rowPos, "mgntAcctClsCd")) {
    strChgCntns += "계정구분(1 자산, 2 부채, 3 자본, 4 수익, 5 판관비, 6 원가, 7 기타수익, 8 기타비용) : " + ds_account.getCellData(rowPos, "mgntAcctClsCd") + " -> " + ds_account.getCellData(rowPos, "acctClsCd") + "<BR>";
  }
  if (ds_account.getCellData(rowPos, "drcrClsCd") != ds_account.getCellData(rowPos, "mgntDrcrClsCd")) {
    strChgCntns += "차대구분(C 대변, D 차변) : " + ds_account.getCellData(rowPos, "mgntDrcrClsCd") + " -> " + ds_account.getCellData(rowPos, "drcrClsCd") + "<BR>";
  }
  if (ds_account.getCellData(rowPos, "aggrClsCd") != ds_account.getCellData(rowPos, "mgntAggrClsCd")) {
    strChgCntns += "집계구분 : " + ds_account.getCellData(rowPos, "mgntAggrClsCd") + " -> " + ds_account.getCellData(rowPos, "aggrClsCd") + "<BR>";
  }
  if (ds_account.getCellData(rowPos, "adptTermStDt") != ds_account.getCellData(rowPos, "mgntAdptStDt")) {
    strChgCntns += "적용기간-시작 : " + ds_account.getCellData(rowPos, "mgntAdptStDt") + " -> " + ds_account.getCellData(rowPos, "adptTermStDt") + "<BR>";
  }
  if (ds_account.getCellData(rowPos, "adptTermEndDt") != ds_account.getCellData(rowPos, "mgntAdptEndDt")) {
    strChgCntns += "적용기간-종료 : " + ds_account.getCellData(rowPos, "mgntAdptEndDt") + " -> " + ds_account.getCellData(rowPos, "adptTermEndDt") + "<BR>";
  }
  if (ds_account.getCellData(rowPos, "acctNm") != ds_account.getCellData(rowPos, "mgntAcctNm")) {
    strChgCntns += "계정명 : " + ds_account.getCellData(rowPos, "mgntAcctNm") + " -> " + ds_account.getCellData(rowPos, "acctNm") + "<BR>";
  }
  if (ds_account.getCellData(rowPos, "acctEngNm") != ds_account.getCellData(rowPos, "mgntAcctEngNm")) {
    strChgCntns += "영문명 : " + ds_account.getCellData(rowPos, "mgntAcctEngNm") + " -> " + ds_account.getCellData(rowPos, "acctEngNm") + "<BR>";
  }

  //관리계정의 항목에 해당하는 사항이 변경되었을 경우만 popup 보여줌
  if (!$c.gus.cfIsNull($p, strChgCntns)) {
    if ((await $c.win.confirm($p, "<< 관리계정 변경내역 >><BR>" + strChgCntns + "<BR> 재무계정 변경에 따른 관리계정의 변경내역은 위와 같습니다. <BR> [확인]을 누르시면 관리계정도 같이 변경되고, <BR> [취소]는 재무계정만 변경되니, 관리계정은 수동으로 변경하셔야 합니다. ")) == true) {
      ds_account.setCellData(rowPos, "mgntModYn", "Y");
    } else {
      ds_account.setCellData(rowPos, "mgntModYn", "N");
    }
  }
  if ((await $c.win.confirm($p, "변경된 내역을 저장하시겠습니까?")) == true) {
    // 저장후 조회시 상위계정으로 셋팅
    scwin.hidVal_c_upperAcctCd = ds_account.getCellData(rowPos, "upperAcctCd");
    // 적용기간 변경시 전부 변경
    if (ds_account.getOriginalCellData(rowPos, "adptTermStDt") != ds_account.getCellData(rowPos, "adptTermStDt")) {
      for (var i = 0; i < ds_account.getRowCount(); i++) {
        if (ds_account.getCellData(i, "upperAcctCd") == ds_account.getCellData(rowPos, "acctCd")) {
          ds_account.setCellData(i, "adptTermStDt", ds_account.getCellData(rowPos, "adptTermStDt"));
        }
      }
    }
    if (ds_account.getOriginalCellData(rowPos, "adptTermEndDt") != ds_account.getCellData(rowPos, "adptTermEndDt")) {
      for (var i = 0; i < ds_account.getRowCount(); i++) {
        if (ds_account.getCellData(i, "upperAcctCd") == ds_account.getCellData(rowPos, "acctCd")) {
          ds_account.setCellData(i, "adptTermEndDt", ds_account.getCellData(rowPos, "adptTermEndDt"));
        }
      }
    }
    // 저장
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
    await $c.gus.cfAlertMsg($p, "정상적으로 저장되었습니다. 관리계정도 필수로 확인 바랍니다.");
    // disable 처리
    scwin.setInit();
    scwin.f_Retrieve("1");
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 팝업호출
 * tobe에서 사용안함(UDC udc_acctCdSt.openPopup 사용)
 */
scwin.f_openPopUp = async function (flag, check) {
  switch (flag) {
    case "1":
      // 계정
      //rtnList = cfCommonPopUp('retrieveAcctCdInfo', c_acctCd.text.trim(), c_acctNm.value, check, null, null, null, null, null, null, null, null, null);
      await udc_acctCdSt.cfCommonPopUp(scwin.udc_acctCdSt_callBackFunc, c_acctCd.getValue(), c_acctNm.getValue(), check, null, null, null, null, null, null, null, null, null, null, null, null, null);
      break;
    case "2":
      // 상위계정
      // 자신의 하위레벨은 상위계정으로 올수 없다.
      let ret = await $c.gus.cfValidate($p, [ed_acctCd]);
      if (!ret) {
        return false;
      }
      var temp = "";
      temp = "," + ",,," + ed_acctCd.getValue().trim();
      await udc_upperAcctCdSt.cfCommonPopUp(scwin.udc_upperAcctCdSt_callBackFunc, c_upperAcctCd.getValue(), c_upperAcctNm.getValue(), check, null, null, null, null, temp, null, null, null, null, null, null, null, null);
      //rtnList = cfCommonPopUp('retrieveAcctCdInfo', c_upperAcctCd.getValue().trim(), c_upperAcctNm.value, check, null, null, null, null, temp, null, null, null, null);
      break;
    default:
      break;
  }
};

/**
 * 팝업호출
 * tobe에서 사용안함(UDC udc_acctCdSt.openPopup 사용)
 */
// scwin.f_checkPopEd = function (strCd, strNm, flag) {
//     // if (strCd.getValue().trim() == strCd.hidVal) {
//     if (strCd.getValue().trim() == scwin.hidVal_c_upperAcctCd) {
//         return;
//     }
//     strNm.setValue("");
//     scwin.hidVal_c_upperAcctCd = "";
//     if (strCd.getValue().trim() != "") {
//         scwin.f_openPopUp(flag, 'T');
//     }
// };

/**
 * 팝업결과
 * tobe에서 사용안함(UDC udc_acctCdSt.openPopup 사용)
 */
// scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
//     if (rtnList != null) {
//         if (rtnList[0] == "N/A") { return; }
//         strCd.Text = rtnList[0]; // 코드
//         strNm.value = rtnList[1]; // 명
//         strCd.hidVal = rtnList[0]; // 히든값
//     } else {
//         strCd.Text = "";
//         strNm.value = "";
//         strCd.hidVal = "";
//     }
// };

/**
 * 계정명 변경 > 전표인쇄명 자동변경
 */
scwin.f_AcctNm = function () {
  if (!$c.gus.cfIsNull($p, ed_acctNm.getValue().trim())) {
    ed_slipPrtNm.setValue(ed_acctNm.getValue());
  }
};

/**
 * 엑셀 다운로드
 */
scwin.f_Excel = async function () {
  let sheetTitle = "계정코드내역";
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    ds_accountExcel.removeAll();
    ds_accountExcel.setJSON(ds_account.getAllJSON());
    for (let i = 0; i < ds_accountExcel.getRowCount(); i++) {
      let slipProcYn = ds_accountExcel.getCellData(i, "slipProcYn");
      let termMgntYn = ds_accountExcel.getCellData(i, "termMgntYn");
      let clntMgntYn = ds_accountExcel.getCellData(i, "clntMgntYn");
      let empMgntYn = ds_accountExcel.getCellData(i, "empMgntYn");
      let dtMgntYn = ds_accountExcel.getCellData(i, "dtMgntYn");
      let substSlipCntlYn = ds_accountExcel.getCellData(i, "substSlipCntlYn");
      let corCardDeductYn = ds_accountExcel.getCellData(i, "corCardDeductYn");
      let advcdCntlYn = ds_accountExcel.getCellData(i, "advcdCntlYn");
      let transferSlipYn = ds_accountExcel.getCellData(i, "transferSlipYn");
      let expenseSlipYn = ds_accountExcel.getCellData(i, "expenseSlipYn");
      let privateCorCardYn = ds_accountExcel.getCellData(i, "privateCorCardYn");
      let adptTerm = $c.date.formatDate($p, ds_account.getCellData(i, "adptTermStDt"), "date") + " ~ " + $c.date.formatDate($p, ds_account.getCellData(i, "adptTermEndDt"));
      ds_accountExcel.setCellData(i, "slipProcYn", $c.gus.decode($p, slipProcYn, "1", "Y", "0", "N", ""));
      ds_accountExcel.setCellData(i, "termMgntYn", $c.gus.decode($p, termMgntYn, "1", "Y", "0", "N", ""));
      ds_accountExcel.setCellData(i, "clntMgntYn", $c.gus.decode($p, clntMgntYn, "1", "Y", "0", "N", ""));
      ds_accountExcel.setCellData(i, "empMgntYn", $c.gus.decode($p, empMgntYn, "1", "Y", "0", "N", ""));
      ds_accountExcel.setCellData(i, "dtMgntYn", $c.gus.decode($p, dtMgntYn, "1", "Y", "0", "N", ""));
      ds_accountExcel.setCellData(i, "substSlipCntlYn", $c.gus.decode($p, substSlipCntlYn, "1", "Y", "0", "N", ""));
      ds_accountExcel.setCellData(i, "corCardDeductYn", $c.gus.decode($p, corCardDeductYn, "1", "Y", "0", "N", ""));
      ds_accountExcel.setCellData(i, "advcdCntlYn", $c.gus.decode($p, advcdCntlYn, "1", "Y", "0", "N", ""));
      ds_accountExcel.setCellData(i, "transferSlipYn", $c.gus.decode($p, transferSlipYn, "1", "Y", "0", "N", ""));
      ds_accountExcel.setCellData(i, "expenseSlipYn", $c.gus.decode($p, expenseSlipYn, "1", "Y", "0", "N", ""));
      ds_accountExcel.setCellData(i, "privateCorCardYn", $c.gus.decode($p, privateCorCardYn, "1", "Y", "0", "N", ""));
      ds_accountExcel.setCellData(i, "adptTerm", adptTerm);
    }
    ds_accountExcel.reform();
    const options = {
      common: {
        fileName: sheetTitle
        // showProcess : true,
        // multipleSheet : true,
        // printSet : {
        //        landScape : "true",
        //        fitToPage : "true",
        //        fitWidth : "1",
        //        fitHeight : "1",
        //        scale : "222"
        //  }
      },
      excelInfo: [{
        dataListId: "ds_accountExcel",
        sheetName: sheetTitle,
        //removeColumns : "1,2,3,4,5,6,7,8,9",
        // foldColumns : "2",
        // startRowIndex : 1,
        // startColumnIndex : 0,
        headerColor: "#D9D9D9"
        //bodyColor : "#92CDDC",
        //wframeId : "wframe1",
        //infoArr : []
        // { 
        //       rowIndex : 1, colIndex : 3, rowSpan : 1, colSpan : 2, text : "데이터표시" , textAlign : "center"
        // }
        // ]
      }]
    };
    $c.data.downloadMultipleDataList($p, options);
  }
};

/**
 * 한글방지
 */
scwin.removeKor = function (e) {
  var val = e.target.value;
  //한글방지
  val = val.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, "");
  this.setValue(val);
};

/**
 * 계정이력 팝업
 */
scwin.f_acctHist = async function () {
  let opts = {};
  let data = {};
  let acctCd = ed_acctCd.getValue();
  if (ds_account.getRowCount() < 1) {
    await $c.gus.cfAlertMsg($p, "조회 먼저 하십시요.");
    return;
  } else if (acctCd == "") {
    await $c.gus.cfAlertMsg($p, "계정코드를 선택하세요.");
    return;
  }
  opts.width = "960";
  opts.height = "580";
  opts.id = "popAcctHist";
  opts.title = "계정이력조회";
  opts.popupName = "계정이력조회";
  opts.scrollbars = true;
  opts.type = "browserPopup";
  data.acctCd = acctCd;
  $c.win.openPopup($p, "/ui/ac/fi/stdinfomgnt/fi_100_01_01p.xml", opts, data);
};

/**
 * 그리드컬럼 값 보여주기
 */
scwin.decodeYnExp = function (data) {
  return $c.gus.decode($p, data, "1", "Y", "0", "N", "");
};

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
 * 계정입력 팝업 호출(조회영역)
 */
scwin.udc_acctCdSt_onclickEvent = function (e) {
  if (c_acctCd.hidVal != c_acctCd.getValue()) {
    c_acctNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, c_acctCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openPopUp("1", close);
};
scwin.udc_acctCdSt_onviewchangeCodeEvent = function (info) {
  c_acctNm.setValue("");
  if (!$c.gus.cfIsNull($p, c_acctCd.getValue())) {
    scwin.f_openPopUp("1", "T");
  }
};

/**
 * 계정코드 팝업 callBack
 */
scwin.udc_acctCdSt_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    c_acctCd.setValue(ret[0]);
    c_acctNm.setValue(ret[1]);
    scwin.hidVal_c_acctCd = ret[0];
    c_acctCd.hidVal = ret[0];
  } else {
    $c.gus.cfSetReturnValue($p, null, "c_acctCd", "c_acctNm");
    scwin.hidVal_c_acctCd = "";
    c_acctCd.hidVal = "";
  }
};

/**
 * 상위계정입력 팝업 호출(입력영역)
 */
scwin.udc_upperAcctCdSt_onclickEvent = function (e) {
  if (c_upperAcctCd.hidVal != c_upperAcctCd.getValue()) {
    c_upperAcctNm.setValue("");
  }
  let close = "F";
  if (!$c.gus.cfIsNull($p, c_acctCd.getValue())) {
    close = "T";
  }
  let id = e.target.id;
  if (id.indexOf("btn") > -1) {
    close = "F";
  }
  scwin.f_openPopUp("2", close);
};
scwin.udc_upperAcctCdSt_onviewchangeCodeEvent = function (info) {
  c_upperAcctNm.setValue("");
  if (!$c.gus.cfIsNull($p, c_upperAcctCd.getValue())) {
    scwin.f_openPopUp("2", "T");
  }
};

/**
 * 상위계정코드 팝업 callBack
 */
scwin.udc_upperAcctCdSt_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    c_upperAcctCd.setValue(ret[0]);
    c_upperAcctNm.setValue(ret[1]);
    scwin.hidVal_c_upperAcctCd = ret[0];
    c_upperAcctCd.hidVal = ret[0];
  } else {
    $c.gus.cfSetReturnValue($p, null, "c_upperAcctCd", "c_upperAcctNm");
    scwin.hidVal_c_upperAcctCd = "";
    c_upperAcctCd.hidVal = "";
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
//  scwin.tv_treeView_onchange = function (oldNode, newNode) {
//     // cfDisableBtn([bSave]);
//     $c.gus.cfDisableObjects([grp_save, c_upperAcctCd, c_upperAcctNm, btn_upperAcctCd, ica_adptTermStDt, ica_adptTermEndDt]);
//     // $c.gus.cfDisableBtn([bSave]);
//     $c.gus.cfDisableBtn([btn_save]);
//     scwin.hidVal_c_upperAcctCd = ds_account.getCellData(info.newRowIndex, "upperAcctCd");  
//  };

/**
 * DataList의 rowPosition이 변경된 경우 발생
 * TODO : 트리뷰의 이벤트로 이동 시 UDC의 상위계정코드값이 이전값 기준으로 저장됨(화면에는 이후값으로 보이고....머냐)
 */
scwin.ds_account_onrowpositionchange = function (info) {
  //기존로직
  // $c.gus.cfDisableObjects(grp_save);
  // $c.gus.cfDisableBtn([btn_save]);
  // scwin.hidVal_c_upperAcctCd = ds_account.getCellData(info.newRowIndex, "upperAcctCd");

  //변경로직
  scwin.hidVal_c_upperAcctCd = ds_account.getCellData(info.newRowIndex, "upperAcctCd");
  if (ds_account.getRowStatus(info.newRowIndex) == "C") {
    $c.gus.cfEnableKeyData($p);
    $c.gus.cfEnableObjects($p, grp_save);
    $c.gus.cfDisableObjects($p, [c_upperAcctNm]);
    $c.gus.cfDisableBtn($p, [btn_update]);
  } else if (ds_account.getRowStatus(info.newRowIndex) == "U") {
    //수정버튼
    scwin.f_Update();
  } else {
    $c.gus.cfDisableObjects($p, grp_save);
    $c.gus.cfDisableBtn($p, [btn_save]);
  }
};

/**
 * DataList의 rowPosition이 변경되기 직전에 발생하며 rowPosition의 변경 적용 여부를 결정
 * asis : 그리드 로우를 변경하려고 할 경우 - 필수항목 체크
 * tobe : 현재 $c.gus.cfValidate 사용 시 async라 이벤트에 async주면 return false안먹힘
 */
scwin.ds_account_onbeforerowpositionchange = function (info) {
  if (ds_account.getRowStatus(info.oldRowIndex) == "U" || ds_account.getRowStatus(info.oldRowIndex) == "C") {
    // let ret = await $c.gus.cfValidate([grp_save]);
    let ret = scwin.f_ValidationSync();
    if (ret == false) {
      tv_treeView.findNodeByIndex(info.oldRowIndex + 1, true);
    }
    return ret;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_acctCdSt',btnId:'btn_acctCd',codeId:'c_acctCd',nameId:'c_acctNm',popupID:'retrieveAcctCdInfoPopup',validTitle:'계정코드조회',selectID:'retrieveAcctCdInfo',refDataCollection:'dma_search',code:'acctCd',name:'acctNm',maxlengthCode:'7',objTypeCode:'data',allowCharCode:'0-9',editTypeCode:'select',codeWidth:'60',maxlengthName:'30',objTypeName:'key','ev:onclickEvent':'scwin.udc_acctCdSt_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_acctCdSt_onviewchangeCodeEvent',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh','ev:onclick':'scwin.f_FieldClear',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_add',style:'',type:'button','ev:onclick':'scwin.f_AddItem',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_Excel',id:'udc_excel',gridID:'',btnUser:'N',gridDownUserAuth:'X',btnPlusYn:'Y',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{class:'tvw-wrap',id:'grd_section1'},E:[{T:1,N:'w2:treeview',A:{dataType:'listed',id:'tv_treeView',style:'height:99%; overflow:auto;',tooltipGroupClass:'false',class:'',showTreeDepth:'5',renderType:'virtual',hierarchy:'true'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_account'},E:[{T:1,N:'w2:label',A:{ref:'treeNm'}},{T:1,N:'w2:value',A:{ref:'upperAcctCd'}},{T:1,N:'w2:depth',A:{ref:'checkLevel'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'grp_save',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_acctCd',style:'',ref:'data:ds_account.acctCd',editFormat:'#######',editType:'focus',mandatory:'true',objType:'key',title:'계정코드',validateOnInput:'true',validExp:'계정코드:yes:format=0000000'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_acctNm',style:'',ref:'data:ds_account.acctNm','ev:onblur':'scwin.f_AcctNm',imeMode:'active',editType:'focus',mandatory:'true',maxByteLength:'50',objType:'data',title:'계정명'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표인쇄명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_slipPrtNm',style:'',ref:'data:ds_account.slipPrtNm',imeMode:'active',editType:'focus',maxByteLength:'30',objType:'data',title:'전표인쇄명'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'영문명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_acctEngNm',style:'',ref:'data:ds_account.acctEngNm','ev:onkeyup':'scwin.removeKor',imeMode:'disabled',editType:'focus',title:'영문명',maxByteLength:'30',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_acctClsCd',style:'',submenuSize:'auto',ref:'data:ds_account.acctClsCd',emptyItem:'true',title:'계정구분',mandatory:'true',objType:'data'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차대구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_drcrClsCd',style:'',submenuSize:'auto',ref:'data:ds_account.drcrClsCd',emptyItem:'true',title:'차대구분',mandatory:'true',objType:'data'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정레벨',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_acctLvl',style:'',submenuSize:'auto',ref:'data:ds_account.acctLvl',emptyItem:'true',mandatory:'true',title:'계정레벨',objType:'data'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'집계구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_aggrClsCd',style:'',submenuSize:'auto',ref:'data:ds_account.aggrClsCd',emptyItem:'true',mandatory:'true',title:'집계구분',objType:'data'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상위계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{id:'udc_upperAcctCdSt',btnId:'btn_upperAcctCd',codeId:'c_upperAcctCd',nameId:'c_upperAcctNm',popupID:'retrieveAcctCdInfoPopup',validTitle:'상위계정',selectID:'retrieveAcctCdInfo',refDataCollection:'ds_account',code:'upperAcctCd',name:'upperAcctNm',maxlengthCode:'7',objTypeCode:'data',allowCharCode:'0-9',editTypeCode:'select',codeWidth:'60',maxlengthName:'30',objTypeName:'key','ev:onclickEvent':'scwin.udc_upperAcctCdSt_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_upperAcctCdSt_onviewchangeCodeEvent',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기표여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_slipProcYn',ref:'data:ds_account.slipProcYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',refInitSync:'false',title:'기표여부',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_mgntNoCd',style:'',submenuSize:'auto',ref:'data:ds_account.mgntNoCd',chooseOptionLabel:'$blank',emptyItem:'true',title:'관리번호',objType:'data'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기간관리',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_termMgntYn',ref:'data:ds_account.termMgntYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',refInitSync:'false',falseValue:'0',title:'기간관리',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처관리',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_clntMgntYn',ref:'data:ds_account.clntMgntYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',refInitSync:'false',falseValue:'0',title:'거래처관리',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사원관리',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_empMgntYn',ref:'data:ds_account.empMgntYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',refInitSync:'false',falseValue:'0',title:'사원관리',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일자관리',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_dtMgntYn',ref:'data:ds_account.dtMgntYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',refInitSync:'false',falseValue:'0',title:'일자관리',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입세액불공제',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_pchsTaxAmtDeductYn',style:'',submenuSize:'auto',ref:'data:ds_account.pchsTaxAmtDeductYn',emptyItem:'true',title:'매입세액불공제',objType:'data'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'잔액통제',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_substSlipCntlYn',ref:'data:ds_account.substSlipCntlYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',refInitSync:'false',falseValue:'0',title:'잔액통제',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'법인카드공제',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_corCardDeductYn',ref:'data:ds_account.corCardDeductYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',refInitSync:'false',falseValue:'0',title:'법인카드공제',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전도금통제',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_advcdCntlYn',ref:'data:ds_account.advcdCntlYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',refInitSync:'false',falseValue:'0',title:'전도금통제',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대체전표불가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_transferSlipYn',ref:'data:ds_account.transferSlipYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',refInitSync:'false',falseValue:'0',title:'대체전표불가',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'경비전표불가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_expenseSlipYn',ref:'data:ds_account.expenseSlipYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',refInitSync:'false',falseValue:'0',title:'경비전표불가',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'개.법.카 불가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_privateCorCardYn',ref:'data:ds_account.privateCorCardYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',refInitSync:'false',falseValue:'0',title:'개.법.카 불가',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{refDataMap:'ds_account',refStDt:'adptTermStDt',refEdDt:'adptTermEndDt',style:'',id:'udc_fromToCalendar1',edFromId:'ica_adptTermStDt',edToId:'ica_adptTermEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_acctHist',id:'btn_rtrieveHist',objType:'ctrlBtn',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계정이력'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Update',id:'btn_update',objType:'bUpdate',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_save',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})