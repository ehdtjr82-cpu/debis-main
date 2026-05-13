/*amd /ui/ac/fi/stdinfomgnt/fi_100_02_02b.xml 37948 4e1bdfca895924cabd2ccaf31286ff918429aef89ee2b048ecc0d6c604dd2254 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'corRegNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_company',saveRemovedData:'false','ev:onbeforerowpositionchange':'scwin.ds_company_onbeforerowpositionchange','ev:onrowpositionchange':'scwin.ds_company_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCoCd',name:'상위회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperRegNm',name:'상위회사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coLvl',name:'회사레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'corRegNo',name:'법인등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'corRegNm',name:'법인등록명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'대표자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pstNm',name:'직위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongZip',name:'사업장우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongAddr1',name:'사업장주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongAddr2',name:'사업장주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcondNm',name:'업태명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'biztypeNm',name:'종목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkLevel',name:'체크레벨',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.stdinfomgnt.RetrieveSubsidiaryCompanyCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_company","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_company", "key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.stdinfomgnt.RegistSubsidiaryCompanyCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_company","key":"IN_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 회사등록
 * 메뉴경로 : 회계/재무회계/기준정보/
 * ASIS경로 : /debis/dongwon-debis-engine/src/main/webapp/ac/fi/stdinfomgnt/fi_100_02_02b.jsp
 * 작 성 자 : 배기원
 * 작 업 일 : 2025-11-07
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 *       - $c.gus.cfDisableBtn 아직 안됨(objType 안되고 id로 처리)
 *       - 엑셀다운로드 시 콤보박스용 값들 라벨+값 나오도록 세팅해야함
 *    5. [완료]화면목록이 tree임(크기조정)
 *    6. 트리뷰 밑 행추가, 행삭제 버튼 작게 해야함(sm 안먹힘)
 *    7. 법인번호 체크 로직함수 추가(TOBE 공통없음)
 *        // let ret = await $c.str.isBizID(ed_corRegNo.getValue());
 *       let ret = await scwin.covCrnValidator(ed_corRegNo.getValue().trim());
 * 참고사항 :
 *    1. ☏ onbeforerowpositionchange 이벤트에 $c.gus.cfValidate([grp_save]) 처리 안됨
 *    ☞ 일단 scwin.f_ValidationSync() 만들어서 처리(scwin.setInit()에 ds_list.reform() 필수, 조회 시 이벤트 안태움)
 *    2. 상수값 가져오는거 어떻게 할지? DGlobalValue.java 이런거 있을때마다 개발자가 DGlobalValue.js로 변경해서 올려야 하나?
 *    3. ☏ 한글설정($c.gus.cfSetIMEModeActiveObjects) 개발안됨
 * 수정이력 :
 *    - 2025-11-07      배기원    최초작성
 */
scwin.hid_seq = ""; //우편번호에 있는데 소스에서 처리안함

//파라메터 받을 시
scwin.valueObject = $c.data.getParameter($p);
scwin.currentRowPosition = 0;
scwin.load_row = 0; //조회후 focus가게 할 row

//상수값(임시)
scwin.DGlobalValue = {
  "ALL": -1,
  "TRUE": 1,
  "FALSE": 0
};

/**
 * TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
 */
scwin.onpageload = function () {
  // var SEARCH_HEADER = "coCd:STRING(3)" // 회사번호
  //     + ",corRegNm:STRING(50)" // 사업자명
  //     + ",useYn:DECIMAL(1)" // 폐업여부
  //     ;
  // ds_search.SetDataHeader(SEARCH_HEADER);
  // ds_search.insertRow();
  // acb_UseYn.BindColVal = scwin.DGlobalValue.TRUE;

  // //화면 set
  // scwin.f_Setting();
  const codeOptions = [{
    grpCd: "CO035",
    compID: "lc_coClsCd"
  },
  //회사구분
  {
    grpCd: "CO036",
    compID: "lc_coLvl"
  } //회사레벨
  ];
  $c.data.setCommonCode($p, codeOptions);
};

/**
 * 초기세팅(TOBE 그리드, 총건수)
 */
scwin.setInit = function () {
  ed_upperCoCd.hidVal = "";
  ds_company.reform();
  ds_company.removeAll();
  scwin.load_row = 0;

  //조회영역 계정코드
  $c.gus.cfDisableObjects($p, grp_save);
  $c.gus.cfDisableBtn($p, [btn_add, btn_cancel, btn_update, btn_save]);
};

/**
 * UDC값 초기화(scwin.onpageload 이후 세팅됨)
 */
scwin.onUdcCompleted = function () {
  $c.data.setPopupTitle($p, "회사등록");
  scwin.setInit();
  scwin.f_FieldClear();
  scwin.f_Setting();
  ed_coCd.focus();
};

/**
 * 조회필드 CLEAR
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [lc_srchUseYn]);
  $c.gus.cfInitHidVal($p, tbl_search);
  lc_srchUseYn.setValue(scwin.DGlobalValue.TRUE);
  c_coCd.hidVal = ""; //회사코드(조회)
};

/**
* 조회버튼
*/
scwin.f_Retrieve = function (flag) {
  scwin.setInit();
  $c.sbm.execute($p, sbm_retrieve);
  //todo : asis 비/활성화 확인차(개발 후 주석 삭제)
  // cfDisableKeyData();
  // cfDisableBtn([bSave]);
  // cfEnableObjects([btn_Add,btn_Cancel, btn_RtrieveHist]);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    let rowCnt = ds_company.getRowCount();
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    } else {
      //최상이 레벨인 경우 상위회사 코드 관련 정보 Disalble
      if (ds_company.getCellData(scwin.load_row, "coLvl") == 1) {
        //상위 회사 코드 
        $c.gus.cfDisableObjects($p, [ed_upperCoCd, ed_upperCoNm, btn_upperCompany]);
      }
      scwin.load_row = scwin.load_row == 0 ? 1 : scwin.load_row;
      tv_treeView.findNodeByIndex(scwin.load_row, true);
      tv_treeView.focus();
      $c.gus.cfEnableObjects($p, [btn_add, btn_cancel, btn_update, btn_save]);
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
scwin.f_AddRow = async function () {
  var rowPosition = ds_company.getRowPosition();
  var totCnt = ds_company.getRowCount();
  if (totCnt != 0 && ds_company.getCellData(rowPosition, "coLvl") == 4) {
    await $c.gus.cfAlertMsg($p, "하위에 회사를 생성할수 없습니다.");
    return;
  }

  // var chkLevel  = tv_treeView.ItemLevel + 1;
  var node = tv_treeView.getSelectedNode();
  imsi_level = node ? node.depth + 1 : 1;
  var upperCoCd = ds_company.getCellData(rowPosition, "coCd");
  var coLvl = Number(ds_company.getCellData(rowPosition, "coLvl")) + 1;
  var newRow;
  if (rowPosition === totCnt - 1 || totCnt === 0) {
    newRow = ds_company.insertRow();
  } else {
    newRow = ds_company.insertRow(rowPosition + 1);
  }
  ds_company.setCellData(newRow, "chkLevel", imsi_level);
  ds_company.setCellData(newRow, "upperCoCd", upperCoCd);
  ds_company.setCellData(newRow, "coLvl", coLvl);
  scwin.currentRowPosition = newRow;

  // tv_treeView.reset();
  tv_treeView.focus();
  // tv_treeView.index = rowPosition + 1;
  tv_treeView.findNodeByIndex(newRow + 1, true);
  $c.gus.cfDisableKey($p);
  scwin.f_ToggleImgBtn(true);
  $c.gus.cfDisableBtn($p, [ed_zip, btn_update]);
  $c.gus.cfEnableObj($p, btn_save, true);
  cbx_useYn.setValue(1);
  lc_coClsCd.focus();
};

/**
 * 취소
 */
scwin.f_Cancel = function () {
  var row = ds_company.getRowPosition();
  if (ds_company.getRowStatus(row) == "C") {
    ds_company.removeRow(row);
    if (row == 0) {
      row = row + 1;
    }
  } else {
    ds_company.undoRow(row);
    row = row + 1;
  }
  scwin.currentRowPosition = 0;
  $c.gus.cfDisableObjects($p, grp_save);
  $c.gus.cfDisableBtn($p, [btn_save]);
  tv_treeView.focus();
  tv_treeView.findNodeByIndex(row, true);
};

/**
 * 수정버튼
 */
scwin.f_Update = function () {
  //disable(non-editable), Data는 enable(editable) 상태로 변경
  $c.gus.cfDisableKey($p);

  // disable 처리
  $c.gus.cfDisableObjects($p, [ed_addr1]);
  scwin.f_ToggleImgBtn(true);
  $c.gus.cfDisableBtn($p, [btn_update]);
  $c.gus.cfEnableObjects($p, [ed_upperCoCd]);
  //$c.gus.cfEnableBtnOnly([btn_save]);
};

/**
 * 데이터 변경 체크
 * asis 사용안함
 */
scwin.f_IsUpdated = function () {
  for (let j = 0; j <= ds_company.getRowCount(); j++) {
    if (ds_company.getRowStatus(j) == 1 || ds_company.getRowStatus(j) == 3) {
      $c.win.alert($p, "저장되지 않은 데이타가 있습니다.");
      tv_treeView.focus();
      tv_treeView.index = j;
      $c.gus.cfDisableKey($p);
      scwin.f_ToggleImgBtn(true);
      $c.gus.cfDisableBtn($p, [btn_update]);
      return false;
    }
  }
  return true;
};

/**
 * 저장 시 입력 Validation
 */
scwin.f_Validation = async function () {
  let ret = await $c.gus.cfValidate($p, [grp_save]);
  if (!ret) {
    return false;
  }

  //법인번호체크
  if (!(await scwin.f_CrnCheck())) {
    return false;
  }
  //전화번호 Chk
  if (!scwin.f_CheckTelNumber("2")) {
    return false;
  }
  return true;
};

/**
 *  저장버튼
 */
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다.
  // if (ds_company.IsUpdated == false) {
  if (ds_company.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이타"]);
    return;
  }

  // 체크
  // if (!await scwin.f_Validation()) {
  //     return;
  // }

  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    // scwin.load_row = ds_company.getCellData(ds_company.getRowPosition(), "coCd");
    scwin.load_row = ds_company.getRowPosition() + 1;
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
    ds_company.reform();
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    $c.sbm.execute($p, sbm_retrieve);
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/**
 * 삭제
 * asis 사용안함
 */
// scwin.f_Delete = function() {
//     if (ds_company.RowStatus(ds_company.getRowPosition) == 1) {
//         $c.win.alert("저장되지 않은 건입니다.");
//     } else {
//         if (confirm(MSG_CM_CRM_004) == true) {
//             ds_company.deleteRow(ds_company.getRowPosition());

//             $c.gus.cfDisableKeyData();
//             $c.gus.cfDisableBtn([btn_save]);
//         }
//     }
// };

/**
 * 이미지 버튼의 Enable/Disable
 */
scwin.f_ToggleImgBtn = function (mode) {
  if (mode == true) {
    $c.gus.cfEnableObjects($p, [btn_upperCompany, btn_zip]);
  } else {
    $c.gus.cfDisableObjects($p, [btn_upperCompany, btn_zip]);
  }
};

/**
 * 우편번호 팝업
 */
scwin.f_openZipPopUp = function (check, flag) {
  // var rtnList = new Array();
  // var popupResult = window.showModalDialog("/cm/zz/newzipcodePopup.jsp", "",
  //     "dialogHeight:400px;dialogWidth:530px;center:yes;scroll:no;status:no;help:no");

  // // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
  // if (popupResult != null) {
  //     if (rtnList[0] == "N/A") return;

  //     if (flag == "1") {
  //         ed_zip.setValue = popupResult.zip;
  //         ed_addr1.value = popupResult.addr1;
  //         ed_addr2.focus();
  //     }
  // }
  // // 입력값이 없는경우 삭제
  // else {
  //     if (flag == "1") {
  //         ed_zip.setValue = "";
  //         ed_addr1.value = "";
  //     }
  // }
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
 * 법인번호 체크
 * ASIS covCrnValidator_validate 로 체크(tobe와 다름)
 */
scwin.f_CrnCheck = async function () {
  // var RowStatus = ds_company.RowStatus(ds_company.getRowPosition);
  if (!$c.gus.cfIsNull($p, ed_corRegNo.getValue().trim())) {
    //ed_corRegNo.validExp = "법인번호:no:crn";
    // let ret = $c.gus.cfValidate([ed_corRegNo]);
    // if (!ret) {
    //     return false;
    // }
    // let ret = await $c.str.isBizID(ed_corRegNo.getValue());
    let ret = await scwin.covCrnValidator(ed_corRegNo.getValue().trim());
    if (!ret) {
      //$c.win.alert("법인번호은(는) 유효한 법인등록번호가 아닙니다.");
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_062, ["법인번호"]);
      ed_corRegNo.focus();
      return false;
    }
  }
  return true;
};

/**
 * 법인번호 onblur 포커스를 잃었을 때 발생한다.
 */
scwin.ed_corRegNo_onblur = function (e) {
  scwin.f_CrnCheck();
};

/**
 * 화면 setting
 */
scwin.f_Setting = function () {
  $c.gus.cfDisableObjects($p, [btn_upperCompany, btn_zip, btn_add, btn_cancel, btn_save, btn_update]);
  // $c.gus.cfDisableKeyData();
  // 한글설정(아직없음)
  // $c.gus.cfSetIMEModeActiveObjects([ed_corRegNm, ed_repstNm, ed_pstNm, , ed_biztypeNm]);
};

/**
 * 전화번호 유효성 체크
 */
scwin.f_CheckTelNumber = function (vIndex) {
  var vTelNo = "";
  var vAlertMsg = "";
  var vRtrurnId = "";

  //1번 안탐
  if (vIndex == "1") {
    // // 휴대폰번호
    // vTelNo = clntMpNo.value;
    // vAlertMsg = "휴대폰전화번호를 정확하게 입력해 주십시오.";
  } else if (vIndex == "2") {
    // 유선전화
    vTelNo = ed_telNo.getValue();
    vAlertMsg = "유선전화번호를 정확하게 입력해 주십시오.";
    vRtrurnId = ed_telNo.getID();
  }
  if (!$c.gus.cfIsNull($p, vTelNo.trim())) {
    // var vValidTelNumber = covTelNumberValidator_validate(vTelNo);
    var vValidTelNumber = $c.str.isPhone($p, vTelNo);
    if (!vValidTelNumber) {
      $c.win.alert($p, vAlertMsg);
      vRtrurnId.focus();
      return false;
    }
  }
};

/**
 * 회사코드 팝업호출(UDC)
 */
scwin.f_PopUpCompanyInfo = function (select_code, pEdCode, pTextName, sFlag) {
  var param = '';
  // var rtnList = null;
  var pCode = pEdCode.getValue();
  var pName = pTextName.getValue();

  // switch (select_code) {
  //     // 자회사 PopUp 호출
  //     case "1":
  //         rtnList = cfCommonPopUp('retrieveDongbuGroupCompanyInfo', pCode, pName, sFlag, null, null, null, null, null, null, null, null, param, null, null, null, null); // 거래처
  //         break;
  //     // 상위 회사 PopUp 호출
  //     case "2":
  //         param = ds_company.getCellData(ds_company.getRowPosition(), "coCd");
  //         rtnList = cfCommonPopUp('retrieveDongbuGroupCompanyInfo', pCode, pName, sFlag, null, null, null, null, null, null, null, null, param, null, null, null, null); // 거래처
  //         break;
  // }
  // if (rtnList != null && rtnList[0] != "N/A") {

  //     if (rtnList[0] == "N/A") return;
  //     pEdCode.Text = rtnList[0]; // 코드
  //     pTextName.value = rtnList[5]; // 코드명
  //     pEdCode.hidVal = rtnList[0]; // 코드
  // } else {
  //     pEdCode.Text = ""; // 코드
  //     pTextName.value = ""; // 코드명
  //     pEdCode.hidVal = ""; // 코드
  // }

  switch (select_code) {
    // 자회사 PopUp 호출
    case "1":
      udc_comCode.cfCommonPopUp(scwin.udc_comCode_callBackFunc, pCode, pName, sFlag, null, null, null, null, param, null, null, null, null, null, null, null, null);
      break;
    // 상위 회사 PopUp 호출
    case "2":
      param = ds_company.getCellData(ds_company.getRowPosition(), "coCd");
      udc_upperComCode.cfCommonPopUp(scwin.udc_upperComCode_callBackFunc, pCode, pName, sFlag, null, null, null, null, param, null, null, null, null, null, null, null, null);
      break;
  }
};

/**
 * 회사코드(조회용) 팝업 callBack
 */
scwin.udc_comCode_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    c_coCd.setValue(ret[0]); // 코드
    c_regNm.setValue(ret[5]); // 회사명
    c_coCd.hidVal = ret[0]; // 히든값
  } else {
    c_coCd.setValue(""); // 코드
    c_regNm.setValue(""); // 회사명
    c_coCd.hidVal = ""; // 히든값
  }
};

/**
 * 상위회사코드(저장용) 팝업 callBack
 */
scwin.udc_upperComCode_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_upperCoCd.setValue(ret[0]); // 코드
    ed_upperCoNm.setValue(ret[5]); // 회사명
    ed_upperCoCd.hidVal = ret[0]; // 히든값
  } else {
    ed_upperCoCd.setValue(""); // 코드
    ed_upperCoNm.setValue(""); // 회사명
    ed_upperCoCd.hidVal = ""; // 히든값
  }
};

/**
 * 법인등록번호 유효한지 검사
 * ASIS : covCrnValidator_validate
 */
scwin.covCrnValidator = function (crn) {
  if ($c.gus.cfIsNull($p, crn) || crn.length != 13 || !$c.num.isNumber($p, crn)) {
    return false;
  }
  let checkArray = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2];
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    let val = $c.num.parseInt($p, crn.charAt(i)) * checkArray[i];
    sum += val % 10;
  }
  let parity = sum % 10;
  if (parity > 0) {
    parity = 10 - parity;
  }
  if ($c.num.parseInt($p, crn.charAt(12)) != parity) {
    return false;
  } else {
    return true;
  }
};

/*##############################################################
 * UDC 이벤트
 *##############################################################*/
/**
 * 회사코드(조회) 팝업 호출
 */
scwin.udc_comCode_onclickEvent = function (e) {
  if (c_coCd.hidVal != c_coCd.getValue()) {
    c_regNm.setValue("");
  }
  scwin.f_PopUpCompanyInfo("1", c_coCd, c_regNm, 'T');
};
scwin.udc_comCode_onviewchangeCodeEvent = function (info) {
  c_regNm.setValue("");
  if (!$c.gus.cfIsNull($p, c_coCd.getValue())) {
    scwin.f_PopUpCompanyInfo("1", c_coCd, c_regNm, 'T');
  }
};
// scwin.udc_comCode_onviewchangeCodeEvent = function (info) {
//     c_regNm.setValue("");
//     if(c_coCd.getValue().length == 3) {
//         scwin.f_PopUpCompanyInfo("1", c_coCd, c_regNm, 'T');
//     }
// };

/**
 * 상위회사코드(저장) 팝업 호출
 */
scwin.udc_upperComCode_onclickEvent = function (e) {
  if (ed_upperCoCd.hidVal != ed_upperCoCd.getValue()) {
    ed_upperCoNm.setValue("");
  }
  scwin.f_PopUpCompanyInfo("2", ed_upperCoCd, ed_upperCoNm, 'T');
};
scwin.udc_upperComCode_onviewchangeCodeEvent = function (info) {
  ed_upperCoNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_upperCoCd.getValue())) {
    scwin.f_PopUpCompanyInfo("2", ed_upperCoCd, ed_upperCoNm, 'T');
  }
};

/*##############################################################
 * 그리드, 트리뷰, 데이터리스트 이벤트
 *##############################################################*/
/**
 * DataList의 rowPosition이 변경된 경우 발생
 */
scwin.ds_company_onrowpositionchange = function (info) {
  ed_upperCoCd.hidVal = ds_company.getCellData(info.newRowIndex, "upperCoCd");
  if (ds_company.getRowStatus(info.newRowIndex) == "C") {
    ed_upperCoCd.hidVal = "";
    $c.gus.cfEnableKeyData($p);
    $c.gus.cfEnableObjects($p, grp_save);
    $c.gus.cfDisableObjects($p, [ed_coCd]);
    $c.gus.cfDisableBtn($p, [btn_update]);
  } else if (ds_company.getRowStatus(info.newRowIndex) == "U") {
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
scwin.ds_company_onbeforerowpositionchange = function (info) {
  // if (ds_company.getRowStatus(info.oldRowIndex) == "U" || ds_company.getRowStatus(info.oldRowIndex) == "C") {
  //     //let ret = scwin.f_ValidationSync();
  //     let ret = true;
  //     if(ret == false) {
  //         tv_treeView.findNodeByIndex(info.oldRowIndex + 1, true);
  //     }
  //     return ret;
  // }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자회사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_comCode',btnId:'btn_company',codeId:'c_coCd',nameId:'c_regNm',popupID:'popupCocd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo',refDataCollection:'dma_search',code:'coCd',name:'corRegNm',maxlengthCode:'3',objTypeCode:'data',allowCharCode:'0-9',validExpCode:'회사코드',editTypeCode:'focus',maxlengthName:'30',objTypeName:'key',style:'','ev:onviewchangeCodeEvent':'scwin.udc_comCode_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_comCode_onclickEvent',codeWidth:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchUseYn',ref:'data:dma_search.useYn',style:'',submenuSize:'auto',title:'사용여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용안함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'','ev:onclick':'scwin.f_Retrieve',id:'btn_search',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 600px'},E:[{T:1,N:'xf:group',A:{id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'grp_group3',class:'right'},E:[{T:1,N:'xf:trigger',A:{class:'btn sm','ev:onclick':'scwin.f_AddRow',id:'btn_add',style:'',type:'button',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm','ev:onclick':'scwin.f_Cancel',id:'btn_cancel',style:'',type:'button',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'tvw-wrap'},E:[{T:1,N:'w2:treeview',A:{tooltipGroupClass:'false',dataType:'listed',style:'height: 100%',id:'tv_treeView',class:'',renderType:'virtual',showTreeDepth:'4'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_company'},E:[{T:1,N:'w2:label',A:{ref:'corRegNm'}},{T:1,N:'w2:value',A:{ref:'upperCoCd'}},{T:1,N:'w2:depth',A:{ref:'chkLevel'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'grp_save',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회사코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w150',id:'ed_coCd',style:'',ref:'data:ds_company.coCd',objType:'key',editFormat:'###',disabled:'true',title:'회사코드'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상위회사코드 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{id:'udc_upperComCode',btnId:'btn_upperCompany',codeId:'ed_upperCoCd',nameId:'ed_upperCoNm',popupID:'popupUpperCocd',validTitle:'상위회사조회',selectID:'retrieveDongbuGroupCompanyInfo',refDataCollection:'ds_company',code:'upperCoCd',name:'upperRegNm',maxlengthCode:'3',objTypeCode:'data',mandatoryCode:'true',allowCharCode:'0-9',validExpCode:'상위회사코드',editTypeCode:'focus',maxlengthName:'30',objTypeName:'key','ev:onclickEvent':'scwin.udc_upperComCode_onclickEvent',style:'','ev:onviewchangeCodeEvent':'scwin.udc_upperComCode_onviewchangeCodeEvent',mandatoryName:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_coClsCd',style:'',submenuSize:'auto',ref:'data:ds_company.coClsCd',objType:'data',title:'회사구분',mandatory:'true',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사레벨',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_coLvl',style:'',submenuSize:'auto',ref:'data:ds_company.coLvl',objType:'data',title:'회사레벨',emptyItem:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'법인번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w100',id:'ed_corRegNo',style:'',ref:'data:ds_company.corRegNo',objType:'data',title:'법인번호',mandatory:'true',maxlength:'13',editType:'select','ev:onblur':'scwin.ed_corRegNo_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'법인명/상호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w400',id:'ed_corRegNm',style:'',ref:'data:ds_company.corRegNm',objType:'data',title:'법인명/상호',mandatory:'true',maxlength:'70',validateOnInput:'true',imeMode:'active'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대표자명/성명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_repstNm',style:'',ref:'data:ds_company.repstNm',objType:'data',title:'대표자명/성명',mandatory:'true',maxlength:'30',imeMode:'active'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'직위명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_pstNm',style:'',ref:'data:ds_company.pstNm',objType:'data',title:'직위명',mandatory:'true',maxlength:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업장우편번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w100',id:'ed_zip',placeholder:'',style:'',ref:'data:ds_company.bizLongZip',objType:'data',title:'사업장우편번호',mandatory:'true',maxlength:'6'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_zip',style:'',type:'button','ev:onclick':'scwin.f_openZipPopUp'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업장주소1',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_addr1',style:'',ref:'data:ds_company.bizLongAddr1',objType:'data',title:'사업장주소1',mandatory:'true',maxlength:'60',imeMode:'active'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업장주소2',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'ed_addr2',style:'',ref:'data:ds_company.bizLongAddr2',objType:'data',title:'사업장주소2',mandatory:'true',maxlength:'60',imeMode:'active'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전화번호 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w100',id:'ed_telNo',placeholder:'',style:'',ref:'data:ds_company.telNo',objType:'data',title:'전화번호',mandatory:'true',maxlength:'16',inputMode:'tel'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(\'-\' 포함)',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'업태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_bizcondNm',style:'',ref:'data:ds_company.bizcondNm',objType:'data',title:'업태',mandatory:'true',maxlength:'30',imeMode:'active'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'종목',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_biztypeNm',style:'',ref:'data:ds_company.biztypeNm',objType:'data',title:'종목',mandatory:'true',maxlength:'30',imeMode:'active'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_rmk',style:'',ref:'data:ds_company.rmk',objType:'data',title:'비고',maxlength:'50'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',falseValue:'0',id:'cbx_useYn',objType:'data',ref:'data:ds_company.useYn',refInitSync:'false',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'사용여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Update',id:'btn_update',objType:'bUpdate',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Save',id:'btn_save',objType:'bSave',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]}]}]})