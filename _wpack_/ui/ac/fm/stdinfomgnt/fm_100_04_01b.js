/*amd /ui/ac/fm/stdinfomgnt/fm_100_04_01b.xml 66704 fc3de53bc2bf312bc068b3e344a25d579fa914437f49351fca930e6b1c495613 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_SearchBankbook'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookKndCd',name:'통장종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Bankbook',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpstrNm',name:'예금주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'openDt',name:'개설일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookKndCd',name:'통장종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'purpsClsCd',name:'용도구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'disuseDt',name:'폐기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bankbookDesc',name:'통장설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookLimitAmt',name:'통장한도금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'number'}},{T:1,N:'w2:column',A:{id:'electronicReceiveYn',name:'직수여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'purpsClsNm',name:'용도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookKndNm',name:'종류',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchBankbook',action:'/ac.fm.stdinfomgnt.RetrieveBankbookCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_SearchBankbook","key":"IN_DS1"},{"id":"ds_Bankbook","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_Bankbook","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchBankbook_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveAccount',action:'/ac.fm.stdinfomgnt.CUDBankbookCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_Bankbook","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveAccount_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01";
scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.
let memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");

//-------------------------------------------------------------------------
// 로그인 정보 전역 변수를 선언
//-------------------------------------------------------------------------
scwin.G_acctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
scwin.G_acctDeptNm = $c.data.getMemInfo($p, "acctDeptNm");
scwin.G_empNo = $c.data.getMemInfo($p, "empNo");
scwin.G_empNm = $c.data.getMemInfo($p, "userNm");
scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 
scwin.loginCoCd = $c.data.getMemInfo($p, "coCd");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.loginCoCd) ? '' : scwin.loginCoCd; // 소속 자회사
scwin.loginCoClsCd = $c.data.getMemInfo($p, "coClsCd");
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.loginCoClsCd) ? '' : scwin.loginCoClsCd;
; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.isSubCompany = false;
//-------------------------------------------------------------------------
// 전역변수 선언
//-------------------------------------------------------------------------
scwin.pos_groupCode = 0; // Grid의 저장시 위치로 이동하게 하는 전역변수
scwin.bExist = "F"; // 통장용도에 따른 귀속부서 존재유무 확인변수

scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 처리)
//-------------------------------------------------------------------------
// 히든정보설정
//-------------------------------------------------------------------------
scwin.txtCoClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "FM010",
    compID: "acb_sbankbookKndCd, acb_bankbookKndCd,gr_bankbook2:bankbookKndCd"
  }, {
    grpCd: "FM032",
    compID: "acb_purpsClsCd,gr_bankbook2:purpsClsCd"
  }, {
    grpCd: "ZZ006",
    compID: "acb_crcCd"
  }, {
    grpCd: "FM098",
    compID: "acb_bankCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  acb_suseYn.setSelectedIndex(0);
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  try {
    //사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
    if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
      scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
      scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
    }
    ed_coCd.setValue(scwin.vLoginCoCd);
    scwin.f_PopUpCompanyInfo('T');
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 회사코드입력시
//-------------------------------------------------------------------------
scwin.udc_coCd_onblurCodeEvent = function (e) {
  scwin.isStarted = false;
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사코드 찾기버튼 클릭시
//-------------------------------------------------------------------------
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.isStarted = false;
  scwin.f_PopUpCompanyInfo('F');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  /*
   var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  				,ed_coCd.text, txt_coNm.value
  				,pWinCloseTF,null,null,null,null
  				,null,null,null,null,null);
  */
  udc_coCd.setSelectId('retrieveDongbuGroupCompanyInfo');
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc // 콜백 함수
  , ed_coCd.getValue() // 화면에서의 ??? Code Element의 Value
  , ed_coNm.getValue() // 화면에서의 ??? Name Element의 Value
  , pWinCloseTF // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , null // 전체검색허용여부	("F")
  , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
  );
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_coCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;

    // SET	 
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return false;
      ed_coCd.setValue(rtnList[0]); // 코드
      ed_coNm.setValue(rtnList[5]); // 회사명
      ed_coCd.hidVal = rtnList[0]; // 히든값
      scwin.txtCoClsCd = rtnList[1]; // 회사구분  
    } else {
      ed_coCd.setValue("");
      ed_coNm.setValue("");
      scwin.txtCoClsCd = "";
      scwin.txtCoClsCd = "";
    }
    if (scwin.txtCoClsCd > '0') {
      // 자회사 회계 시스템 
      scwin.isSubCompany = true;
    } else {
      scwin.isSubCompany = false;
    }
    if (scwin.isStarted == true) {
      if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
        // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
        $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      } else {
        $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      }
      scwin.f_Retrieve();
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_coCd]);
  if (!ret) {
    return false;
  }
  scwin.chkCocd = ed_coCd.getValue();
  $c.gus.cfDisableBtn($p, [btn_Save]);
  ds_Bankbook.removeAll(); //데이터초기화 
  $c.sbm.execute($p, sbm_searchBankbook);
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_searchBankbook_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

  tbx_totalRows.setValue(ds_Bankbook.getRowCount());
  if (ds_Bankbook.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else {
    scwin.gr_bankbook_onrowindexchange(scwin.pos_groupCode); //포지션이동
    $c.gus.cfGoPrevPosition($p, gr_bankbook, scwin.pos_groupCode); //그리드 포커스이동

    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableObjects($p, [btn_clntNo, btn_acctDeptCd]);
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
    ed_coCd.setValue(scwin.chkCocd);
  }
  $c.gus.cfEnableBtnOnly($p, [btn_Create, btn_Update, btn_Delete]);
};

//-------------------------------------------------------------------------
// 거래처 정보 그리드가 변경되는 경우 (저장등 처리후 포커스 이동용)
//-------------------------------------------------------------------------
scwin.gr_bankbook_onrowindexchange = function (rowIndex, oldRow) {
  ds_Bankbook.setRowPosition(rowIndex);
  //ds_Bankbook.undoAll();
  let uIndexes = ds_Bankbook.getRowIndexByStatus("U");
  let cIndexes = ds_Bankbook.getRowIndexByStatus("C");

  //수정된 데이터(1건)에 대한 undoRow
  if (uIndexes != "" && rowIndex != uIndexes) {
    ds_Bankbook.undoRow(uIndexes);
  }

  //신규생성된 데이터(1건)에 대한 삭제
  if (cIndexes != "" && rowIndex != cIndexes) {
    ds_Bankbook.removeRow(cIndexes);
  }
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableObjects($p, [btn_clntNo, btn_acctDeptCd]);
  $c.gus.cfDisableBtn($p, [btn_Save]);
};

//-------------------------------------------------------------------------
// 그리드 셀 클릭시
//-------------------------------------------------------------------------
scwin.gr_bankbook_oncellclick = function (rowIndex, columnIndex, columnId) {
  ds_Bankbook.setRowPosition(rowIndex);
  if (rowIndex != 0) {
    //ds_Bankbook.undoAll();
    let uIndexes = ds_Bankbook.getRowIndexByStatus("U");
    let cIndexes = ds_Bankbook.getRowIndexByStatus("C");

    //수정된 데이터(1건)에 대한 undoRow
    if (uIndexes != "" && rowIndex != uIndexes) {
      ds_Bankbook.undoRow(uIndexes);
    }

    //신규생성된 데이터(1건)에 대한 삭제
    if (cIndexes != "" && rowIndex != cIndexes) {
      ds_Bankbook.removeRow(cIndexes);
    }
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableObjects($p, [btn_clntNo, btn_acctDeptCd]);
    $c.gus.cfDisableBtn($p, [btn_Save]);
  }
};

//-------------------------------------------------------------------------
// 그리드 사용여부 데이터 포맷처리
//-------------------------------------------------------------------------
scwin.displayUseYn = function (data) {
  return $c.gus.decode($p, data, "1", "사용", "미사용");
};

//-------------------------------------------------------------------------
// 그리드 직수여부 데이터 포맷처리
//-------------------------------------------------------------------------
scwin.displayElectronicReceiveYn = function (data) {
  return $c.gus.decode($p, data, "1", "Y", "N");
};

//-------------------------------------------------------------------------
// 엑셀그리드 통장종류 데이터 포맷처리
//-------------------------------------------------------------------------
scwin.displayBankbookKndCd = function (data) {
  let rowList = dlt_commonCodeFM010.getMatchedJSON("cd", data);
  let bankbookKndNm = "";
  if (rowList.length > 0) {
    bankbookKndNm = rowList[0].cdNm;
  }
  return "[" + data + "]" + bankbookKndNm;
};

//-------------------------------------------------------------------------
// 엑셀그리드 통장용도 데이터 포맷처리
//-------------------------------------------------------------------------
scwin.displayPurpsClsCd = function (data) {
  let rowList = dlt_commonCodeFM032.getMatchedJSON("cd", data);
  let purpsClsNm = "";
  if (rowList.length > 0) {
    purpsClsNm = rowList[0].cdNm;
  }
  return "[" + data + "]" + purpsClsNm;
};

//-------------------------------------------------------------------------
// 그리드 사용여부 데이터 포맷처리
//-------------------------------------------------------------------------
scwin.cbx_useYn_onchange = function (info) {
  //선택하지 않았을때 기본값 처리
  if (cbx_useYn.getValue() == "") {
    cbx_useYn.setValue("0");
  }
};
//-------------------------------------------------------------------------
// 그리드 직수여부 데이터 포맷처리
//-------------------------------------------------------------------------
scwin.cbx_electronicReceiveYn_onchange = function (info) {
  //선택하지 않았을때 기본값 처리
  if (cbx_electronicReceiveYn.getValue() == "") {
    cbx_electronicReceiveYn.setValue("0");
  }
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  let addRow = $c.data.insertRow($p, $p.getComponentById("gr_bankbook"));
  scwin.gr_bankbook_oncellclick(addRow); //행추가후 

  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [btn_Create, btn_Update]);
  $c.gus.cfEnableObjects($p, [btn_clntNo, btn_acctDeptCd]); //UDC버튼활성화처리
  $c.gus.cfDisableObjects($p, [acb_bankCd]);
  // 신규추가시 통장종류와 통화코드를 기본값으로 세팅한다.
  acb_bankbookKndCd.setSelectedIndex(0);
  acb_crcCd.setSelectedIndex(0);
  cbx_useYn.setValue("1");
  ed_openDt.setValue(scwin.strToDate);
  ed_clntNo.focus();
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  // disable 처리
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [btn_Create, btn_Update]);
  $c.gus.cfEnableObjects($p, [btn_clntNo, btn_acctDeptCd]);
  if (acb_purpsClsCd.getValue() == "05") {
    // 가상계좌일경우 은행코드 수정가능
    $c.gus.cfEnableObjects($p, [acb_bankCd]);
  } else {
    $c.gus.cfDisableObjects($p, [acb_bankCd]);
  }
  //focus 설정
  ed_clntNo.focus();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  // 저장시 폐기일자 입력여부 확인후 통장사용여부를 변경한다.
  scwin.f_ChkDisuseDt();
  // 전도금 통장일 경우 한도액을 설정해야됨.
  if (parseInt(ed_bankbookLimitAmt.getValue()) <= 0 && acb_purpsClsCd.getValue() == "03") {
    await $c.gus.cfAlertMsg($p, "사용용도가 전도금일경우는 한도액을 입력하셔야 합니다.");
    ed_bankbookLimitAmt.focus();
    return false;
  }

  // 개설일자와 폐지일자의 기간 비교 (차후 공통에서 제작된 함수로 변경 처리한다.)
  if (parseInt(ed_openDt.getValue()) > parseInt(ed_disuseDt.getValue())) {
    await $c.gus.cfAlertMsg($p, "개설일자는 폐지일자보다 이전날짜일수 없습니다.");
    ed_disuseDt.focus();
    return false;
  }

  // 필수입력 항목에 대한 내역을 CHECK한다.
  let ret = await $c.gus.cfValidate($p, [ed_clntNo, ed_txt_bankAcntNo, ed_bankbookNm, ed_dpstrNm, ed_acctDeptCd, ed_openDt]); //맨덴터리 오류 TOBE true만 체크. ed_disuseDt,ed_bankbookDesc 제외

  if (!ret) {
    return false;
  }
  if (acb_purpsClsCd.getValue() == "05") {
    // 은행코드가 가상계좌일경우
    if (acb_bankCd.getValue() == null || acb_bankCd.getValue() == "") {
      $c.win.alert($p, "가상계좌발급은행은 필수입력항목입니다.");
      return false;
    }
  }

  //변경한 데이터가 있는지 체크한다.
  if (ds_Bankbook.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_001, "통장"));
    return false;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    scwin.pos_groupCode = ds_Bankbook.getRowPosition();
    $c.sbm.execute($p, sbm_saveAccount);
  }
};

//-------------------------------------------------------------------------
// 취소버튼 클릭시 조회시의 상태로 변경한다.
//-------------------------------------------------------------------------
scwin.f_Delete = function () {
  //$c.data.undoRow(ds_Bankbook, "Y");
  if (ds_Bankbook.getRowStatus(ds_Bankbook.getRowPosition()) == "C") {
    ds_Bankbook.removeRow(ds_Bankbook.getRowPosition());
  } else {
    ds_Bankbook.undoRow(ds_Bankbook.getRowPosition());
  }
  //ds_Bankbook.undoAll();

  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableObjects($p, [btn_clntNo, btn_acctDeptCd]);
  $c.gus.cfDisableBtn($p, [btn_Save]);
};

//-------------------------------------------------------------------------
// 페지일자 입력 여부에 따라서 통장의 사용/미사용 여부를 변경한다.
//-------------------------------------------------------------------------
scwin.f_ChkDisuseDt = function () {
  // 폐지일자에 일자 입력시는 통장사용여부는 항상 미사용이 된다.
  var chk_disuseDt = ed_disuseDt.getValue().replace(/^\s*/, '');
  if (chk_disuseDt != "") {
    cbx_useYn.setValue("0");
  } else {
    cbx_useYn.setValue("1");
  }
};

//-------------------------------------------------------------------------
// 저장 후 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveAccount_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    const options = {
      fileName: "통장관리화면조회.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,
      sheetName: "통장관리화면",
      bodyWordwrap: true
    };
    const infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_bankbook2, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// 폐지일자 입력시 사용여부 처리
//-------------------------------------------------------------------------
scwin.ed_openDt_onblur = function (e) {
  scwin.f_ChkDisuseDt();
};

//-------------------------------------------------------------------------
// 통장용도 정보선택
//-------------------------------------------------------------------------
scwin.acb_purpsClsCd_onchange = async function (info) {
  // 통장용도를 전도금 통장 선택시는 귀속부서를 재선택 하게 초기화 한다.

  if (acb_purpsClsCd.getValue() == ACConstants.BANKBOOK_PURPS_CLS_ADVCD) {
    scwin.bExist = "T";
    //TOBE f_openPopUp 의 await 처리가 되지 않아 해당 케이스인 경우 하위 처리를 팝업결과에서 처리하도록 함.
    /*let popResult = await scwin.f_openPopUp(ed_acctDeptCd, ed_acctDeptNm, '4');
    alert("nam popResult : " + popResult);
    if ( !popResult) {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
        ed_acctDeptCd.hidVal = "";
    }*/
    scwin.f_openPopUp(ed_acctDeptCd, ed_acctDeptNm, '4');
    return;
  }
  scwin.bExist = "F";
  if (acb_purpsClsCd.getValue() == "05") {
    // 은행코드가 가상계좌일경우
    acb_bankCd.options.mandatory = true;
    acb_bankCd.setUserData("ValidExp", "은행코드:yes:length=2");
    $c.gus.cfEnableObjects($p, [acb_bankCd]);
  } else {
    acb_bankCd.options.mandatory = false;
    acb_bankCd.setUserData("ValidExp", "은행코드:yes:length=2");
    $c.gus.cfDisableObjects($p, [acb_bankCd]);
  }
};

//-------------------------------------------------------------------------
// 조회 귀속부서코드
//-------------------------------------------------------------------------
scwin.udc_sacctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'CD');
};

//-------------------------------------------------------------------------
// 조회 귀속부서명
//-------------------------------------------------------------------------
scwin.udc_sacctDeptCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'NM');
};

//-------------------------------------------------------------------------
// 조회 귀속부서찾기
//-------------------------------------------------------------------------
scwin.udc_sacctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '1', 'ALL');
};

//-------------------------------------------------------------------------
// 조회 발급은행코드
//-------------------------------------------------------------------------
scwin.udc_sclntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '2', 'CD');
};

//-------------------------------------------------------------------------
// 조회 발급은행명
//-------------------------------------------------------------------------
scwin.udc_sclntNo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '2', 'NM');
};

//-------------------------------------------------------------------------
// 조회 발급은행찾기
//-------------------------------------------------------------------------
scwin.udc_sclntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sclntNo, ed_sclntNm, '2', 'ALL');
};

//-------------------------------------------------------------------------
// 입력 발급은행코드
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '3', 'CD');
};

//-------------------------------------------------------------------------
// 입력 발급은행명
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '3', 'NM');
};

//-------------------------------------------------------------------------
// 입력 발급은행찾기
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_clntNo, ed_clntNm, '3', 'ALL');
};

//-------------------------------------------------------------------------
// 입력 관리부서코드
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  //ASIS f_CheckPopUp(ed_sacctDeptCd,ed_sacctDeptNm ,'1','CD') ->찾기버튼은 4번으로 찾음
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '11', 'CD');
};

//-------------------------------------------------------------------------
// 입력 관리부서명
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  //ASIS f_CheckPopUp(ed_sacctDeptCd,ed_sacctDeptNm ,'1','NM') ->찾기버튼은 4번으로 찾음
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '11', 'NM');
};

//-------------------------------------------------------------------------
// 입력 관리부서찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_acctDeptCd, ed_acctDeptNm, '4', 'ALL');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
      if (orgObjCd.getValue() == "" && orgObjNm.getValue() !== "") {
        //TOBE 발급은행명이 잘 지워지지 않는 현상으로 추가함. (코드가 없고 코드명존재하면서 히든값과 동일한경우)
        orgObjNm.setValue("");
      }
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
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->관리부서 , 2:조회->발급은행, 3:Grid->귀속부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  try {
    let cd = "";
    let nm = "";
    let param = "";
    if (flag == "ALL") {
      cd = "";
      nm = "";
    } else {
      cd = orgObjCd.getValue();
      nm = orgObjNm.getValue();
    }
    switch (select_code) {
      // 조회조건용 수금부서 PopUp 호출
      case '1':
        //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6',cd,nm,"T",null,null,null,null,param,"450","500",null,null); // 귀속부서
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ","; //자회사 회계시스템 추가사항	
        udc_sacctDeptCd.setSelectId('retrieveAcctDeptCdInfo6');
        udc_sacctDeptCd.cfCommonPopUp(scwin.udc_sacctDeptCd_callBackFunc // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , nm // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , '450' // POP-UP뛰을때 원도우의 사용자 정의 폭
        , '500' // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case '11':
        //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6',cd,nm,"T",null,null,null,null,param,"450","500",null,null); // 귀속부서
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ","; //자회사 회계시스템 추가사항	
        udc_acctDeptCd.setSelectId('retrieveAcctDeptCdInfo6');
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc1 // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , nm // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , '450' // POP-UP뛰을때 원도우의 사용자 정의 폭
        , '500' // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case '2':
        //rtnList = cfCommonPopUp('retrieveBankInfo',cd, nm,"T",null,null,null,null,null,null,null,null,null); // 발급은행
        udc_sclntNo.setSelectId('retrieveBankInfo');
        udc_sclntNo.cfCommonPopUp(scwin.udc_sclntNo_callBackFunc // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , nm // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case '3':
        if (orgObjCd.enabled == false) return;
        param = "0," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ","; //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp('retrieveBankInfo',cd, nm,"T",null,null,null,null,param,null,null,null); // 귀속부서
        udc_clntNo.setSelectId('retrieveBankInfo');
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , nm // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case '4':
        if (orgObjCd.enabled == false) return;
        let advcd = "";
        // 전도금 부서여부 확인
        if (acb_purpsClsCd.getValue() == ACConstants.BANKBOOK_PURPS_CLS_ADVCD) {
          advcd = "1";
        } else {
          advcd = "";
        }
        // 전도금부서 여부 구분과 개설일자기간에 해당하는 부서만 검색됨.
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ","; //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6',cd,'',"T",null,null,null,null,param,+advcd+",,0,,1",null,"450","500",null,bExist,null,null); // 귀속부서
        udc_acctDeptCd.setSelectId('retrieveAcctDeptCdInfo6');
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc // 콜백 함수
        , cd, '', "T", null, null, null, null, param, +advcd + ",,0,,1", null, "450", "500", null, scwin.bExist, null, null); // 귀속부서
        break;
      default:
        $c.gus.cfAlertMsg($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회 귀속부서 콜백(1)
//-------------------------------------------------------------------------
scwin.udc_sacctDeptCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_sacctDeptCd.setValue(rtnList[0]); // 코드
      ed_sacctDeptNm.setValue(rtnList[1]); // 코드명
      ed_sacctDeptCd.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_sacctDeptNm.hidVal = rtnList[1]; // HIDDEN 코드명
    } else {
      ed_sacctDeptCd.setValue("");
      ed_sacctDeptNm.setValue("");
      ed_sacctDeptCd.hidVal = "";
      ed_sacctDeptNm.hidVal = "";
    }
  } catch (e) {
    console.log("udc_sacctDeptCd_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회 발급은행 콜백(2)
//-------------------------------------------------------------------------
scwin.udc_sclntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_sclntNo.setValue(rtnList[0]); // 코드
      ed_sclntNm.setValue(rtnList[1]); // 코드명
      ed_sclntNo.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_sclntNm.hidVal = rtnList[1]; // HIDDEN 코드명
    } else {
      ed_sclntNo.setValue("");
      ed_sclntNm.setValue("");
      ed_sclntNo.hidVal = "";
      ed_sclntNm.hidVal = "";
    }
  } catch (e) {
    console.log("udc_sclntNo_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 입력 발급은행 콜백(3)
//-------------------------------------------------------------------------
scwin.udc_clntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_clntNo.setValue(rtnList[0]); // 코드
      ed_clntNm.setValue(rtnList[1]); // 코드명
      ed_clntNo.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_clntNm.hidVal = rtnList[1]; // HIDDEN 코드명
    } else {
      ed_clntNo.setValue("");
      ed_clntNm.setValue("");
      ed_clntNo.hidVal = "";
      ed_clntNm.hidVal = "";
    }
    console.log("ed_clntNo.hidVal :" + ed_clntNo.hidVal);
  } catch (e) {
    console.log("udc_clntNo_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 입력 관리부서찾기 콜백(4) - 코드,코드명 찾는경우
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc1 = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_acctDeptCd.setValue(rtnList[0]); // 코드
      ed_acctDeptNm.setValue(rtnList[1]); // 코드명
      ed_acctDeptCd.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_acctDeptNm.hidVal = rtnList[1]; // HIDDEN 코드명
    } else {
      ed_acctDeptCd.setValue("");
      ed_acctDeptNm.setValue("");
      ed_acctDeptCd.hidVal = "";
      ed_acctDeptNm.hidVal = "";
    }
  } catch (e) {
    console.log("udc_acctDeptCd_callBackFunc1 :" + e);
  }
};

//-------------------------------------------------------------------------
// 입력 관리부서찾기 콜백(4) - 찾기버튼으로 찾는경우
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;

    // 전도금부서 존재유무 확인

    if (scwin.bExist == "T") {
      //TOBE 전도금 조회에 대한 이전정보를 가지고 있기 위함.
      ed_acctDeptCd.setValue(ed_acctDeptCd.hidVal); // 코드 
      ed_acctDeptNm.setValue(ed_acctDeptNm.hidVal); // 코드명
      return false;
      /*if (rtnList > 0 ) {
           return false;
      }*/
    } else {
      if (rtnList != null) {
        if (rtnList[0] == "N/A") return;
        ed_acctDeptCd.setValue(rtnList[0]); // 코드
        ed_acctDeptNm.setValue(rtnList[1]); // 코드명
        ed_acctDeptCd.hidVal = rtnList[0]; // HIDDEN 코드값
        ed_acctDeptNm.hidVal = rtnList[1]; // HIDDEN 코드명
      } else {
        ed_acctDeptCd.setValue("");
        ed_acctDeptNm.setValue("");
        ed_acctDeptCd.hidVal = "";
        ed_acctDeptNm.hidVal = "";
      }
    }
  } catch (e) {
    console.log("udc_acctDeptCd_callBackFunc :" + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:40px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',objTypeName:'data',mandatoryCode:'true',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'3',id:'udc_coCd',code:'coCd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent',refDataCollection:'ds_SearchBankbook'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col7',codeId:'ed_sacctDeptCd',UpperFlagCode:'1',allowCharCode:'0-9 ',maxlengthCode:'5',editTypeCode:'select',nameId:'ed_sacctDeptNm',id:'udc_sacctDeptCd',mandatoryName:'false',editTypeName:'select',maxlengthName:'20',btnId:'btn_dept',refDataCollection:'ds_SearchBankbook',code:'acctDeptCd',validTitle:'관리부서',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_sacctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_sacctDeptCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_sacctDeptCd_onclickEvent',selectID:'retrieveAcctDeptCdInfo6',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발급은행 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9 ',btnId:'btn_sclntNo',class:'col7',code:'clntNo',codeId:'ed_sclntNo',editTypeCode:'select',editTypeName:'select','ev:onblurCodeEvent':'scwin.udc_sclntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_sclntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_sclntNo_onclickEvent',id:'udc_sclntNo',mandatoryCode:'true',mandatoryName:'false',maxlengthCode:'6',maxlengthName:'20',nameId:'ed_sclntNm',popupID:'',refDataCollection:'ds_SearchBankbook',style:'',validTitle:'발급은행',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통장종류',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'전체',class:'',disabled:'false',editType:'select',id:'acb_sbankbookKndCd',ref:'data:ds_SearchBankbook.bankbookKndCd',search:'start',searchTarget:'value',style:'width: 130px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',disabled:'false',displayMode:'label',editType:'select',id:'acb_suseYn',ref:'data:ds_SearchBankbook.useYn',search:'start',searchTarget:'value',style:'width: 80px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrd',gridID:'gr_bankbook',gridDownFn:'scwin.f_Excel',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_Bankbook',id:'gr_bankbook',style:'',visibleRowNum:'16',visibleRowNumFix:'true',resize:'true',columnMove:'true',sortable:'true',readOnly:'true','ev:onrowindexchange':'scwin.gr_bankbook_onrowindexchange','ev:oncellclick':'scwin.gr_bankbook_oncellclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'80',value:'통장번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'130',value:'계좌번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'160',value:'개설은행명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'130',value:'통장명'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'예금주명',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'사용여부',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'직수여부',width:'70',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankbookNo',inputType:'text',removeBorderStyle:'false',width:'130',textAlign:'right'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankAcntNo',inputType:'text',removeBorderStyle:'false',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNm',inputType:'text',removeBorderStyle:'false',width:'160',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankbookNm',inputType:'text',removeBorderStyle:'false',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dpstrNm',inputType:'text',style:'',value:'',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useYn',inputType:'text',style:'',value:'',width:'70',textAlign:'center',displayFormatter:'scwin.displayUseYn'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'electronicReceiveYn',inputType:'text',style:'',value:'',width:'70',displayFormatter:'scwin.displayElectronicReceiveYn'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'발급은행',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_clntNo',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9 ',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_clntNm',id:'udc_clntNo',mandatoryName:'true',objTypeName:'data',editTypeName:'select',maxlengthName:'20',name:'clntNm',refDataCollection:'ds_Bankbook',code:'clntNo',btnId:'btn_clntNo',validTitle:'발급은행',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'통장종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'form-control',editType:'select',id:'acb_bankbookKndCd',search:'start',style:'',submenuSize:'auto',mandatory:'true',objType:'data',tabIndex:'2',disabled:'false',searchTarget:'value',ref:'data:ds_Bankbook.bankbookKndCd',title:'통장종류',visibleRowNum:'25'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'통장용도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'form-control',editType:'select',id:'acb_purpsClsCd',search:'start',style:'',submenuSize:'auto',mandatory:'true',tabIndex:'3',objType:'data',ref:'data:ds_Bankbook.purpsClsCd','ev:onchange':'scwin.acb_purpsClsCd_onchange',title:'통장용도'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계좌번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_txt_bankAcntNo',placeholder:'',style:'',mandatory:'true',objType:'data',maxlength:'20',tabIndex:'4',ref:'data:ds_Bankbook.bankAcntNo',title:'계좌번호',allowChar:'0-9-'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'통장명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_bankbookNm',placeholder:'',style:'',mandatory:'true',objType:'data',maxlength:'30',validExp:'통장명:yes:maxByteLength=30',ref:'data:ds_Bankbook.bankbookNm',title:'통장명',maxByteLength:'30'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예금주명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_dpstrNm',placeholder:'',style:'',maxlength:'30',ref:'data:ds_Bankbook.dpstrNm',objType:'data',mandatory:'true',validExp:'예금주명:yes:maxByteLength=30',title:'예금주명'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통화코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_crcCd',search:'start',style:'',submenuSize:'auto',objType:'data',ref:'data:ds_Bankbook.crcCd',visibleRowNum:'25'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'관리부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_acctDeptCd',maxlengthCode:'5',mandatoryCode:'true',allowCharCode:'0-9',objTypeCode:'data',UpperFlagCode:'1',validExpCode:'관리부서:yes:maxLength=5&number',nameId:'ed_acctDeptNm',mandatoryName:'true',maxlengthName:'20',refDataCollection:'ds_Bankbook',code:'acctDeptCd',name:'acctDeptNm',id:'udc_acctDeptCd',btnId:'btn_acctDeptCd',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',validTitle:'관리부서'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'개설일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ed_openDt',style:'',mandatory:'true',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:ds_Bankbook.openDt',validExp:'개설일자:yes:maxLength=8&date=YYYYMMDD',tabIndex:'9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'폐지일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ed_disuseDt',style:'',displayFormat:'yyyy/MM/dd',objType:'data',tabIndex:'10',ref:'data:ds_Bankbook.disuseDt','ev:onblur':'scwin.ed_openDt_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'cbx_useYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',objType:'data',tabIndex:'11',ref:'data:ds_Bankbook.useYn','ev:onchange':'scwin.cbx_useYn_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직수여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'cbx_electronicReceiveYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'',objType:'data',tabIndex:'11',ref:'data:ds_Bankbook.electronicReceiveYn','ev:onchange':'scwin.cbx_electronicReceiveYn_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control',id:'ed_bankbookDesc',placeholder:'',style:'',objType:'data',tabIndex:'12',maxlength:'60',ref:'data:ds_Bankbook.bankbookDesc',mandatory:'false',validExp:'적요:no:maxByteLength=60',maxByteLength:'60'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'한도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'form-control tar',id:'ed_bankbookLimitAmt',placeholder:'',style:'',objType:'data',tabIndex:'13',maxlength:'13',allowCharCode:'0-9',ref:'data:ds_Bankbook.bankbookLimitAmt',displayFormat:'#,##0',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'가상계좌 발급은행',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'form-control',editType:'select',id:'acb_bankCd',search:'start',style:'',submenuSize:'auto',objType:'data',mandatory:'false',ref:'data:ds_Bankbook.bankCd',chooseOption:'true',chooseOptionLabel:'$blank',title:'가상계좌 발급은행',visibleRowNum:'25'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',label:'신규',style:'',type:'button',objType:'bCreate','ev:onclick':'scwin.f_Create',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',label:'수정',style:'',type:'button',objType:'bUpdate','ev:onclick':'scwin.f_Update',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button',objType:'bSave','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',label:'취소',style:'',type:'button',objType:'bDelete','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_Bankbook',id:'gr_bankbook2',scrollByColumn:'false',scrollByColumnAdaptive:'false',visibleRowNum:'14',visibleRowNumFix:'true',style:';display:none;'},E:[{T:1,N:'w2:caption',A:{id:'caption14',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankbookNo',inputType:'text',removeBorderStyle:'false',value:'통장번호',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNm',inputType:'text',removeBorderStyle:'false',value:'발급은행',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankbookKndCd',inputType:'text',removeBorderStyle:'false',value:'통장종류',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'purpsClsCd',inputType:'text',removeBorderStyle:'false',value:'통장용도',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankAcntNo',inputType:'text',style:'',value:'계좌번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankbookNm',inputType:'text',style:'',value:'통장명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dpstrNm',inputType:'text',style:'',value:'예금주명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',style:'',value:'통화코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'관리부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'openDt',inputType:'text',style:'',value:'개설일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'disuseDt',inputType:'text',style:'',value:'폐지일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useYn',inputType:'text',style:'',value:'사용여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'electronicReceiveYn',inputType:'text',style:'',value:'직수여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankbookLimitAmt',inputType:'text',style:'',value:'한도',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankCd',inputType:'text',style:'',value:'가상계좌발급은행',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankbookNo',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankbookKndCd',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left',displayFormatter:'scwin.displayBankbookKndCd'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'purpsClsCd',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left',displayFormatter:'scwin.displayPurpsClsCd'},E:[{T:3,text:'>\n                            '}]},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankAcntNo',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankbookNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'dpstrNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'crcCd',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctDeptNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'openDt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'disuseDt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useYn',inputType:'text',style:'',value:'',width:'100',textAlign:'center',displayFormatter:'scwin.displayUseYn'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'electronicReceiveYn',inputType:'text',style:'',value:'',width:'100',textAlign:'center',displayFormatter:'scwin.displayElectronicReceiveYn'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankbookLimitAmt',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bankCd',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left',dataType:'number',excelCellType:'text'}}]}]}]}]}]}]}]})