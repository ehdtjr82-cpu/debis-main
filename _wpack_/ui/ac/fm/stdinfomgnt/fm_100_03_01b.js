/*amd /ui/ac/fm/stdinfomgnt/fm_100_03_01b.xml 34701 258b096d4ecfe0d0be075f7e9e57fc81cf7a25aeb4dcc12c05bb9762dc7fd3f4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fundAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fundAcctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_account',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_account_onbeforerowpositionchange','ev:onrowpositionchange':'scwin.ds_account_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fundAcctCd',name:'자금계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fundAcctClsCd',name:'자금계정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortOrd',name:'정렬순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctLvl',name:'계정레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperFundAcctCd',name:'상위계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperAcctNm',name:' 상위계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insClsCd',name:'입력구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planClsCd',name:'계획구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aggrClsCd',name:'집계구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'treeNm',name:'treeNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkLevel',name:'체크레벨',dataType:'number'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fm.stdinfomgnt.RetrieveFundAccountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_account","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_account","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fm.stdinfomgnt.SaveFundAccountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_account","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){7; //==================================================================================================================
// id       : fm_100_03_01b
// 이름     : 자금코드관리
// 경로     : 회계-자금관리-기준정보관리-자금코드관리
// 작 성 자 : 오영재
// 작 업 일 : 2025-11-05
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

//asis hidVal 값
scwin.hidVal_c_fundAcctCd = ""; //계정코드(조회)
scwin.hidVal_c_upperFundAcctCd = ""; //상위계정코드(저장), em_upperFundAcctCd.hidVal 대신

scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FM043",
    compID: "lc_fundAcctClsCd"
  },
  //자금계정구분
  {
    grpCd: "FI035",
    compID: "lc_acctLvl"
  },
  //계정레벨
  {
    grpCd: "FM021",
    compID: "lc_insClsCd"
  },
  //입력여부
  {
    grpCd: "FM022",
    compID: "lc_planClsCd"
  },
  //계획구분
  {
    grpCd: "ZZ006",
    compID: "lc_crcCd"
  },
  //화폐코드
  {
    grpCd: "CO014",
    compID: "lc_aggrClsCd"
  } //집계구분
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};

/**
 * 초기세팅(TODO:TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  scwin.hidVal_c_upperFundAcctCd = "";
  ds_account.reform();
  ds_account.removeAll();

  //조회영역 계정코드
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableBtnOnly($p, [btn_search]);
  $c.gus.cfEnableObjects($p, [ed_srchAcctCd, ed_srchAcctNm]);
  $c.gus.cfDisableObjects($p, tbl_acct);
  $c.gus.cfDisableBtn($p, [btn_add, btn_cancel, btn_update, btn_save]);
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  scwin.setInit();
  scwin.f_FieldClear();
  ed_srchAcctCd.focus();
};

/**
 * 조회초기 필드 Clear
 */
scwin.f_FieldClear = function (e) {
  ds_search.setEmptyValue();
  scwin.hidVal_c_funcAcctCd = ""; //계정코드(조회)
};
scwin.f_Retrieve = function () {
  scwin.setInit();
  //데이터셋에 정보설정
  $c.sbm.execute($p, sbm_search);
};
scwin.sbm_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    var rowCnt = ds_account.getRowCount();
    //        alert( "rowCnt : " + rowCnt );
    var rowCnt = ds_account.getRowCount();
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    } else {
      tv_treeView.findNodeByIndex(1, true);
      tv_treeView.focus();
      $c.gus.cfEnableObjects($p, [btn_add, btn_cancel, btn_update, btn_save]);
      $c.gus.cfDisableObjects($p, [btn_save]);
    }
  } else {
    $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 행추가
 */
scwin.f_AddItem = async function () {
  if (ds_account.getModifiedIndex().length > 0) {
    for (j = 0; j < ds_account.getRowCount(); j++) {
      if (ds_account.getRowStatus(j) == "C") {
        await $c.gus.cfAlertMsg($p, "저장되지 않은 데이타가 있습니다");
        tv_treeView.focus();
        tv_treeView.findNodeByIndex(j + 1, true);
        $c.gus.cfEnableKeyData($p);
        $c.gus.cfDisableObjects($p, [ed_fundAcctCd]);
        $c.gus.cfDisableBtn($p, [btn_update]);
        return;
      } else if (ds_account.getRowStatus(j) == "U") {
        await $c.gus.cfAlertMsg($p, "저장되지 않은 데이타가 있습니다");
        tv_treeView.focus();
        tv_treeView.findNodeByIndex(j + 1, true);
        $c.gus.cfDisableKey($p);
        $c.gus.cfDisableObjects($p, [ed_fundAcctCd]);
        $c.gus.cfDisableBtn($p, [btn_update]);
        return;
      }
    }
    return;
  }
  var checkLevel = "";
  var fundAcctClsCd = "";
  var upperAcctNm = "";
  var acctLvl = "";
  var checkLevel = "";
  var rowPosition = ds_account.getRowPosition();
  upperAcctCd = ds_account.getCellData(rowPosition, "fundAcctCd");
  fundAcctClsCd = ds_account.getCellData(rowPosition, "fundAcctClsCd");
  upperAcctNm = ds_account.getCellData(rowPosition, "acctNm");
  acctLvl = Number(ds_account.getCellData(rowPosition, "acctLvl")) + 1;
  var node = tv_treeView.getSelectedNode();
  var checkLevel = node ? node.depth + 1 : 1;
  var newRow;
  if (rowPosition === ds_account.getRowCount() - 1 || ds_account.getRowCount() === 0) {
    newRow = ds_account.insertRow();
  } else {
    newRow = ds_account.insertRow(rowPosition + 1);
  }
  debugger;
  ds_account.setCellData(newRow, "checkLevel", checkLevel);
  ds_account.setCellData(newRow, "treeNm", "ADD");
  ds_account.setCellData(newRow, "upperFundAcctCd", upperAcctCd);
  //c_upperAcctCd.hidVal = Tmp_Cd;
  scwin.hidVal_c_upperFundAcctCd = upperAcctCd;
  ds_account.setCellData(newRow, "upperAcctNm", upperAcctNm);
  //ds_account.setCellData(newRow, "acctLvl", "");
  ds_account.setCellData(newRow, "acctLvl", acctLvl);
  ds_account.setCellData(newRow, "fundAcctClsCd", fundAcctClsCd);
  ds_account.setCellData(newRow, "adptTermStDt", $c.date.getServerDateTime($p));
  tv_treeView.focus();
  tv_treeView.findNodeByIndex(newRow + 1, true);
  debugger;

  /**
   * cfEnableKeyData();
      cfDisableObjects([ed_fundAcctCd,lc_fundAcctClsCd,lc_acctLvl]);
      cfDisableBtn([ bUpdate]);
      cfEnableObjects([upperAcctImg]);
      txt_acctNm.focus();
   */
  $c.gus.cfEnableKeyData($p);
  //$c.gus.cfEnableObjects(tbl_acct);
  //$c.gus.cfDisableObjects([ed_upperAcctNm]);
  $c.gus.cfDisableObjects($p, [ed_fundAcctCd, lc_fundAcctClsCd, lc_acctLvl]);
  $c.gus.cfEnableObjects($p, [btn_upperFundAcctCd]); // cfEnableObjects([upperAcctImg]);
  $c.gus.cfDisableBtn($p, [btn_update]);
};

/**
 * 취소
 */
scwin.f_Cancel = function () {
  var row = ds_account.getRowPosition();
  if (ds_account.getRowStatus(row) == "C") {
    ds_account.removeRow(row);
  } else {
    ds_account.undoRow(row);
  }
  //$c.gus.cfEnableObjects([c_acctCd, c_acctNm]);
  $c.gus.cfDisableObjects($p, tbl_acct);
  //$c.gus.cfDisableObjects([tbl_acct, c_upperAcctCd, c_upperAcctNm, btn_upperAcctCd, ica_adptTermStDt, ica_adptTermEndDt]);
  $c.gus.cfDisableBtn($p, [btn_save]);
};

/**
 * 수정버튼
 */
scwin.f_Update = async function () {
  // disable 처리(계정코드, 상위계정코드명 말고 전부 활성화)
  // $c.gus.cfDisableKey();  //이게 먹히면 아래 tbl_acct.setDisabled(false) 안써도 되는데
  if (ds_account.getRowCount() < 1) {
    await $c.gus.cfAlertMsg($p, "수정할 자료가 존재하지 않습니다.");
    return false;
  }
  var tmpRowPosition = ds_account.getRowPosition();
  for (j = 0; j < ds_account.getRowCount(); j++) {
    if (ds_account.getRowStatus(j) == 'C') {
      if (j != tmpRowPosition) {
        await $c.gus.cfAlertMsg($p, "저장되지 않은 자료가 있습니다");
      }
      tv_treeView.focus();
      tv_treeView.findNodeByIndex(j + 1, true);
      $c.gus.cfEnableKeyData($p);
      $c.gus.cfDisableObjects($p, [ed_fundAcctCd]);
      $c.gus.cfDisableBtn($p, [btn_update]);
      return;
    } else if (ds_account.getRowStatus(j) == 'U') {
      if (j != tmpRowPosition) {
        await $c.gus.cfAlertMsg($p, "저장되지 않은 자료가 있습니다");
      }
      tv_treeView.focus();
      tv_treeView.findNodeByIndex(j + 1, true);
      $c.gus.cfDisableKey($p);
      $c.gus.cfDisableObjects($p, [ed_fundAcctCd]);
      $c.gus.cfDisableBtn($p, [btn_update]);
      return;
    }
  }
  $c.gus.cfEnableObjects($p, tbl_acct);
  $c.gus.cfDisableBtn($p, [btn_update]);
  $c.gus.cfDisableObjects($p, [ed_upperAcctNm, ed_fundAcctCd]);
  //focus 설정
  ed_fundAcctNm.focus();
};
scwin.f_HiddenCheck = async function (str, msg) {
  if (str.getValue().trim() == "") {
    return true;
  }
  if (str.getValue().trim() != scwin.hidVal_c_upperFundAcctCd) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, [msg]);
    // str.SelectAll = "true";
    str.focus();
    return false;
  } else {
    return true;
  }
};

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
 * 계정입력 팝업 호출(조회영역)
 */
scwin.udc_acctCdSt_onclickEvent = function (e) {};
scwin.udc_acctCdSt_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_srchAcctCd, ed_srchAcctNm, '1', 'CD');
};

/**
 * 계정코드 팝업 callBack
 */
scwin.udc_acctCdSt_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    c_fundAcctCd.setValue(ret[0]);
    c_fundAcctNm.setValue(ret[1]);
    scwin.hidVal_c_fundAcctCd = ret[0];
  } else {
    $c.gus.cfSetReturnValue($p, null, "c_acctCd", "c_acctNm");
    scwin.hidVal_c_fundAcctCd = "";
  }
};

/**
 * 상위계정입력 팝업 호출(입력영역)
 */
scwin.udc_upperFundAcctCdSt_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_upperAcctCd, ed_upperAcctNm, '2', 'F');
  // var temp ="";
  //     temp =","+$c.date.getServerDateTime()+",,,"+ed_acctCd.getValue();
  // let rtnList = await udc_acctCdSt.openPopup(c_upperAcctCd.getValue(), c_upperAcctNm.getValue(), temp);
  // if (rtnList != null) {
  //     c_upperAcctCd.setValue(rtnList[0]);
  //     c_upperAcctNm.setValue(rtnList[1]);
  //     scwin.hidVal_c_upperFundAcctCd = rtnList[0]; 
  // } else {
  //     $c.gus.cfSetReturnValue(null, "c_upperAcctCd", "c_upperAcctNm");
  //     scwin.hidVal_c_upperFundAcctCd = "";
  // }
};
scwin.udc_srchAcctCd_cb = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchAcctCd.setValue(rtnList[0]); //계정코드
    ed_srchAcctNm.setValue(rtnList[1]); //계정명
  } else {
    ed_srchAcctCd.setValue("");
    ed_srchAcctNm.setValue("");
  }
};
scwin.udc_upperAcctCd_cb = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_upperAcctCd.setValue(rtnList[0]); //계정코드
    ed_upperAcctNm.setValue(rtnList[1]); //계정명
  } else {
    ed_upperAcctCd.setValue("");
    ed_upperAcctNm.setValue("");
  }
};

/**
 * 팝업호출
 * todo:tobe에서 사용안함(UDC udc_acctCdSt.openPopup 사용)
 */
scwin.f_openPopUp = function (orgObjCd, orgObjNm, flag, sflag) {
  let cd = orgObjCd.getValue();
  let nm = orgObjNm.getValue();
  if (flag == "1") {
    udc_srchAcctCd.setSelectId("retrieveFundAcctCdInfo");
    udc_srchAcctCd.cfCommonPopUp(scwin.udc_srchAcctCd_cb, cd, nm, sflag, null, null, null, null, null, "410", null, null, null, null, null, null, null); // 거래처
  } else {
    udc_upperAcctCd.setSelectId("retrieveFundAcctCdInfo");
    udc_upperAcctCd.cfCommonPopUp(scwin.udc_upperAcctCd_cb, cd, nm, sflag, null, null, null, null, null, "410", null, null, null, null, null, null, null); // 거래처
  }
};

/**
 * 상위계정코드 팝업 callBack
 */
scwin.udc_upperFundAcctCdSt_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    c_upperFundAcctCd.setValue(ret[0]);
    c_upperFundAcctNm.setValue(ret[1]);
    scwin.hidVal_c_upperFundAcctCd = ret[0];
  } else {
    $c.gus.cfSetReturnValue($p, null, "c_upperFundAcctCd", "c_upperFundAcctNm");
    scwin.hidVal_c_upperFundAcctCd = "";
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
//  scwin.tv_treeView_onchange = function (oldNode, newNode) {
//     // cfDisableBtn([bSave]);
//     $c.gus.cfDisableObjects([tbl_acct, c_upperAcctCd, c_upperAcctNm, btn_upperAcctCd, ica_adptTermStDt, ica_adptTermEndDt]);
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
  // $c.gus.cfDisableObjects(tbl_acct);
  // $c.gus.cfDisableBtn([btn_save]);
  // scwin.hidVal_c_upperAcctCd = ds_account.getCellData(info.newRowIndex, "upperAcctCd");

  //변경로직
  console.log(info);
  scwin.hidVal_c_upperFundAcctCd = ds_account.getCellData(info.newRowIndex, "upperFundAcctCd");
  if (ds_account.getRowStatus(info.newRowIndex) == "C") {
    $c.gus.cfEnableKeyData($p);
    $c.gus.cfEnableObjects($p, tbl_acct);
    $c.gus.cfDisableBtn($p, [btn_update]);
  } else if (ds_account.getRowStatus(info.newRowIndex) == "U") {
    //수정버튼
    //scwin.f_Update();
    $c.gus.cfDisableKey($p);
    $c.gus.cfDisableObjects($p, [ed_fundAcctCd]);
    $c.gus.cfDisableBtn($p, [btn_update]);
    $c.gus.cfEnableObjects($p, tbl_acct);
    $c.gus.cfDisableBtn($p, [btn_update]);
    $c.gus.cfDisableObjects($p, [ed_upperAcctNm, ed_fundAcctCd]);
    //focus 설정
    ed_fundAcctNm.focus();
    $c.gus.cfEnableObjects($p, [btn_upperFundAcctCd]); // cfEnableObjects([upperAcctImg]);
  } else {
    $c.gus.cfDisableObjects($p, tbl_acct);
    $c.gus.cfDisableBtn($p, [btn_save]);
  }
};

/**
 * DataList의 rowPosition이 변경되기 직전에 발생하며 rowPosition의 변경 적용 여부를 결정
 * asis : 그리드 로우를 변경하려고 할 경우 - 필수항목 체크
 * tobe : 현재 $c.gus.cfValidate 사용 시 async라 이벤트에 async주면 return false안먹힘
 */
/** 
scwin.ds_account_onbeforerowpositionchange =  function (info) {
    if (ds_account.getRowStatus(info.oldRowIndex) == "U" || ds_account.getRowStatus(info.oldRowIndex) == "C") {
        // let ret = await $c.gus.cfValidate([tbl_acct]);
        let ret = scwin.f_ValidationSync();
        if(ret == false) {
            tv_treeView.findNodeByIndex(info.oldRowIndex + 1, true);
        }
        return ret;
    }
};
*/

scwin.f_Validation = async function () {
  let ret = await $c.gus.cfValidate($p, [tbl_acct]);
  if (!ret) {
    return false;
  }

  /** 이거 뭐임 없음 MSG_CM_ERR_032
  // 중복체크
  for (var i = 0; i < ds_account.getRowCount(); i++) {
      if (i != ds_account.getRowPosition() &&
          ds_account.getCellData(i, "fundAcctCd") == ed_fundAcctCd.getValue().trim()) {
          await $c.gus.cfAlertMsg(MSG_CM_ERR_032, Array("자금계정코드"));
          ed_fundAcctCd.focus();
          return false;
      }
  }
  */

  if (ed_fundAcctCd.getValue().trim() == ed_upperAcctCd.getValue().trim()) {
    await $c.gus.cfAlertMsg($p, "계정코드와 상위계정코드는 동일할수 없습니다.");
    c_upperFundAcctCd.setValue("");
    c_upperFundAcctNm.setValue("");
    c_upperFundAcctCd.focus();
    return false;
  }
  return true;
};
scwin.f_Save = async function (e) {
  if (ds_account.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["관리계정코드정보"]);
    return;
  }

  // 체크
  if (!(await scwin.f_Validation())) {
    return;
  }

  // 저장
  $c.sbm.execute($p, sbm_save);
};
scwin.sbm_save_submitdone = function (e) {
  //alert('msg : ' + e.responseJSON.resultDataSet[0].Msg);
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    //$c.gus.cfAlertMsg("정상적으로 저장되었습니다. 관리계정도 필수로 확인 바랍니다.");
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    // disable 처리
    scwin.setInit();
    scwin.f_Retrieve();
    /** 
    f_Retrieve()
    // disable 처리
    cfDisableKeyData();
    cfDisableBtn([bSave]);
    */
  } else {
    $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.udc_srchAcctCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_srchAcctCd, ed_srchAcctNm, '1', 'F');
};
scwin.udc_upperAcctCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_upperAcctCd, ed_upperAcctNm, '2', 'F');
};
scwin.udc_upperAcctCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_upperAcctCd, ed_upperAcctNm, '2', 'CD');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
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
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "T");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
  }
};
scwin.udc_upperAcctCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_upperAcctCd, ed_upperAcctNm, '2', 'NM');
};
scwin.udc_acctCdSt_onviewchangeNameEvent = function (info) {
  //scwin.f_CheckPopUp('1', 'NM');
};
scwin.btn_reset_onclick = function (e) {};
scwin.udc_srchAcctCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_srchAcctCd, ed_srchAcctNm, '1', 'NM');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_acctCd',code:'fundAcctCd',codeId:'ed_srchAcctCd',editTypeCode:'focus','ev:onblurCodeEvent':'scwin.udc_acctCdSt_onblurCodeEvent',id:'udc_srchAcctCd',maxlengthCode:'3',maxlengthName:'30',name:'funcAcctNm',nameId:'ed_srchAcctNm',objTypeCode:'data',objTypeName:'data',onloadCallbackFunc:'',popupGridHeadTitle:'자금계정코드,자금계정명,계정구분코드',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupID:'retrieveAcctCdInfoPopup',popupTitle:'자금계정,자금계정코드,계정명',refDataCollection:'ds_search',selectID:'retrieveAcctCdInfo',style:'',validTitle:'계정코드','ev:onclickEvent':'scwin.udc_srchAcctCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_srchAcctCd_onblurNameEvent',readOnlyName:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w100',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchUseYn',ref:'data:ds_search.useYn',renderType:'',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'display: none;',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm','ev:onclick':'scwin.f_AddItem',id:'btn_add',label:'삭제',style:'',type:'button',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm','ev:onclick':'scwin.f_Cancel',id:'btn_cancel',label:'삭제',style:'',type:'button',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{gridDownFn:'scwin.f_Excel',gridUpYn:'N',grp:'grd_section1',style:'display: none;'}}]}]},{T:1,N:'xf:group',A:{class:'tvw-wrap',id:'grd_section1',style:''},E:[{T:1,N:'w2:treeview',A:{class:'',dataType:'listed',hierarchy:'true',id:'tv_treeView',renderType:'virtual',showTreeDepth:'5',style:'height:99%; overflow:auto;',tooltipGroupClass:'false'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_account'},E:[{T:1,N:'w2:label',A:{ref:'treeNm'}},{T:1,N:'w2:value',A:{ref:'upperFundAcctCd'}},{T:1,N:'w2:depth',A:{ref:'checkLevel'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_acct',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',emptyItem:'true',id:'lc_fundAcctClsCd',mandatory:'true',ref:'data:ds_account.fundAcctClsCd',style:'',submenuSize:'auto',title:'자금계정구분',objType:'data'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control w150',editFormat:'#######',editType:'focus',id:'ed_fundAcctCd',objType:'data',ref:'data:ds_account.fundAcctCd',style:'',title:'계정코드'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control ',editType:'focus',id:'ed_fundAcctNm',imeMode:'active',mandatory:'true',maxByteLength:'50',objType:'data',ref:'data:ds_account.acctNm',style:'',title:'계정명'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상위계정코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_upperFundAcctCd',code:'upperFundAcctCd',codeId:'ed_upperAcctCd',id:'udc_upperAcctCd',maxlengthCode:'3',maxlengthName:'30',name:'upperAcctNm',nameId:'ed_upperAcctNm',objTypeCode:'data',objTypeName:'data',onloadCallbackFunc:'',popupGridHeadTitle:'자금계정코드,자금계정명,계정구분코드',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupID:'retrieveFundAcctCdInfoPopup',popupTitle:'자금계정,자금계정코드,자금계정명',refDataCollection:'ds_account',selectID:'retrieveFundAcctCdInfo',style:'','ev:onclickEvent':'scwin.udc_upperAcctCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_upperAcctCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_upperAcctCd_onblurNameEvent',readOnlyName:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'레벨',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',emptyItem:'true',id:'lc_acctLvl',mandatory:'true',ref:'data:ds_account.acctLvl',style:'',submenuSize:'auto',title:'계정레벨',objType:'data'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정렬',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w110',id:'ed_sortOrd',placeholder:'',style:'',objType:'data',allowChar:'0-9',maxlength:'3',ref:'data:ds_account.sortOrd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입력여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_insClsCd',style:'',submenuSize:'auto',ref:'data:ds_account.insClsCd',displayMode:'label',emptyItem:'true',mandatory:'true',title:'입력여부',objType:'data'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계획구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_planClsCd',style:'',submenuSize:'auto',ref:'data:ds_account.planClsCd',displayMode:'label',emptyItem:'true',mandatory:'true',title:'계획구분',objType:'data'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화폐코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_crcCd',style:'',submenuSize:'auto',ref:'data:ds_account.crcCd',displayMode:'label',emptyItem:'true',mandatory:'true',title:'화폐코드',objType:'data'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'집계구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_aggrClsCd',style:'',submenuSize:'auto',ref:'data:ds_account.aggrClsCd',displayMode:'label',emptyItem:'true',mandatory:'true',title:'집계구분',objType:'data'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w110',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_useYn',style:'',submenuSize:'auto',objType:'data',mandatory:'true',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_update',label:'저장',style:'',type:'button',objType:'bUpdate',userAuth:'U','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',objType:'bSave','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})