/*amd /ui/ac/fm/collmoneymgnt/billrecv/fm_504_04_01b.xml 81517 fcb8c05b9992bdd2245756844e29027f50e18035c96b468b6e92fe03e4816f92 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchBillRecvDc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromDate',name:'만기일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDate',name:'만기일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcFromDate',name:'할인일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcToDate',name:'할인일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billRecvStsCd',name:'받을어음상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billRecvAcctCd',name:'받을어음계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'menuId',name:'메뉴ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billRecvDc',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'체크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'체크수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'받을어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvNo',name:'받을어음번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgBillRecvNo',name:'이전받을어음번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvAcctCd',name:'받을어음계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvAcctNm',name:'받을어음계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvStsCd',name:'받을어음상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldBillRecvStsCd',name:'이전받을어음상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recDt',name:'수취일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtDt',name:'발행일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcClntNo',name:'할인거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcClntNm',name:'할인거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtAmt',name:'발행금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prtBankNm',name:'발행은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustBankbookNo',name:'수탁통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidTrustBankbookNo',name:'히든수탁통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustBankbookNm',name:'수탁통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'obankCheckYn',name:'타수여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'chgRsn',name:'변경사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',name:'관리사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchgBfBillRecvMgntNo',name:'교환전받을어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmis',name:'수수료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'procAmt',name:'처리금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'procSlipNo',name:'처리전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procDt',name:'처리 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntAcctRecvPatternCd',name:'관리채권유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctRecvAmt',name:'sellAcctRecvAmt',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcRt',name:'할인율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'billRecvBfStsCd',name:'받을어음전상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcRcptAmt',name:'할인입금금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcRcptBankbookNo',name:'할인입금통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcRcptBankbookNm',name:'할인입금통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'전표귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoRegYn',name:'자동등록여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',name:'관리기간시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',name:'관리기간종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcAmt',name:'할인금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcYn',name:'할인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payInterest',name:'결제이자',dataType:'number'}},{T:1,N:'w2:column',A:{id:'feYn',name:'여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfBillRecvMgntNo',name:'이전받을어음관리번호',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_searchBillRecvDc',action:'/ac.fm.collmoneymgnt.billrecv.RetrieveBillReceivableCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchBillRecvDc","key":"IN_DS1"},{"id":"ds_billRecvDc","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_billRecvDc","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchBillRecvDc_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveBillRecvDc',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_billRecvDc","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveBillRecvDc_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 부도일자 기간을 구한다.
//-------------------------------------------------------------------------
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01";
scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.
scwin.strDcFromDate = scwin.strFromDate; // 할인일자 시작일
scwin.strDcToDate = scwin.strToDate; // 할인일자 종료일
scwin.memJson = $c.data.getMemInfo($p);
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
scwin.wrkNo = ""; // 작업구분코드
scwin.fromDate = ""; // 작업날짜
scwin.chkNum = 0; // 선택 갯수

//-------------------------------------------------------------------------
// hidden
//-------------------------------------------------------------------------
scwin.txtCoClsCd = "";
scwin.ed_targetAmt = ""; //ed_targetAmt-> 입력사이즈 0짜리 scwin.ed_targetAmt으로 처리

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "FM014",
    compID: "acb_sbillRecvAcctCd,gr_billRecvDc:billRecvAcctCd"
  }, {
    grpCd: "FM015",
    compID: "gr_billRecvDc:billRecvStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);

  //ASIS 히든,showfalse 그리드 필드정보
  /*gr_billRecvDc.setColumnVisible("dcYn", false);
  gr_billRecvDc.setColumnVisible("cmis", false);
  gr_billRecvDc.setColumnVisible("trustBankbookNo", false);
  gr_billRecvDc.setColumnVisible("hidTrustBankbookNo", false);
  gr_billRecvDc.setColumnVisible("trustBankbookNm", false);
  gr_billRecvDc.setColumnVisible("slipDt", false);
  gr_billRecvDc.setColumnVisible("recDt", false);
  gr_billRecvDc.setColumnVisible("prtDt", false);
  gr_billRecvDc.setColumnVisible("clntNo", false);
  gr_billRecvDc.setColumnVisible("prtBankNm", false);
  gr_billRecvDc.setColumnVisible("obankCheckYn", false);
  gr_billRecvDc.setColumnVisible("chgRsn", false);
  gr_billRecvDc.setColumnVisible("mgntEmpNo", false);
  gr_billRecvDc.setColumnVisible("exchgBfBillRecvNo", false);
  gr_billRecvDc.setColumnVisible("billRecvMgntNo", false);
  gr_billRecvDc.setColumnVisible("sellAcctRecvAmt", false);
  gr_billRecvDc.setColumnVisible("dcRt", false);
  gr_billRecvDc.setColumnVisible("procAmt", false);
  gr_billRecvDc.setColumnVisible("mgntTermStDt", false);
  gr_billRecvDc.setColumnVisible("mgntTermEndDt", false);
  gr_billRecvDc.setColumnVisible("coCd", false);  히든
  gr_billRecvDc.setColumnVisible("coClsCd", false); 히든
  */
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  //공통코드재매핑.
  let dltStr = "dlt_commonCodeFM015"; // FM015 코드의 dataList
  let dlt = $c.gus.object($p, dltStr);
  $c.gus.copy($p, dltStr, "dlt_commonCodeFM015_1", true); // dlt_commonCodeFM015_1 으로 dataList 을 복사

  let dlt2 = $c.gus.object($p, "dlt_commonCodeFM015_1"); // 객체화
  $c.data.dataListFilter($p, dlt2, "fltrCd2 == '30'"); // 새로운 데이터리스트에 필터 lc_sbillRecvStsCd GauceUtil.getCodeList("FM015",2,"30"

  acb_sbillRecvStsCd.setNodeSet("data:dlt_commonCodeFM015_1", "cdNm", "cd"); // selectBox 에 새로운 데이터리스트로 매핑
  acb_sbillRecvStsCd.addItem("전체", "-4", "data:dlt_commonCodeFM015_1", 0);
  acb_sbillRecvStsCd.setSelectedIndex(0);
  ed_FromDate.setValue(scwin.strFromDate);
  ed_ToDate.setValue(scwin.strToDate);
  ed_slipDt.setValue(scwin.strToDate);
  $c.gus.cfDisableKey($p);
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
  , ed_coCd.getValue() // 화면에서의  Code Element의 Value
  , ed_coNm.getValue() // 화면에서의  Name Element의 Value
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
// 회사코드입력시
//-------------------------------------------------------------------------
scwin.udc_coCd_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사코드 찾기버튼 클릭시
//-------------------------------------------------------------------------
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
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
      if (ed_coCd.hidVal != rtnList[0]) scwin.f_initObj();
      ed_coCd.setValue(rtnList[0]); // 코드
      ed_coNm.setValue(rtnList[5]); // 회사명
      ed_coCd.hidVal = rtnList[0]; // 히든값
      scwin.txtCoClsCd = rtnList[1]; // 회사구분  
    } else {
      ed_coCd.setValue(""); // 코드
      ed_coNm.setValue(""); // 회사명
      ed_coCd.hidVal = "";
      scwin.txtCoClsCd = ""; // 회사구분    
    }
    if (scwin.vLoginCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
      // 자회사 회계 시스템 
      scwin.isSubCompany = true;
    } else {
      scwin.isSubCompany = false;
    }
    scwin.f_enableCompanyInfo();
  } catch (e) {
    console.log("udc_coCd_callBackFunc" + e);
  }
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 enable 처리
//-------------------------------------------------------------------------
scwin.f_enableCompanyInfo = function (e) {
  try {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
  } catch (e) {
    console.log("f_enableCompanyInfo" + e);
  }
};
scwin.f_initObj = function () {
  try {
    $c.gus.cfInitObjects($p, [ed_sclntNo, ed_sclntNm]); //거래처
    $c.gus.cfInitObjects($p, [ed_sacctDeptCd, ed_sacctDeptNm]); //부서
    $c.gus.cfInitObjects($p, [ed_trustBankbookNo, ed_trustBankbookNm]); //입금통장
  } catch (e) {
    console.log("f_initObj >" + e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    if (!$c.gus.cfIsAfterDate($p, ed_FromDate.getValue(), ed_ToDate.getValue())) {
      $c.gus.cfAlertMsg($p, "조회 할인일자는 종료일자 보다 이전 날짜 이어야 합니다.");
      ed_FromDate.focus();
      return false;
      ;
    }
    if (!$c.gus.cfIsAfterDate($p, ed_DcFromDate.getValue(), ed_DcToDate.getValue())) {
      $c.gus.cfAlertMsg($p, "조회 할인일자 종료일자 보다 이전 날짜 이어야 합니다.");
      ed_DcFromDate.focus();
      return false;
      ;
    }

    // 할인일자 Trim처리 한다.
    ed_DcFromDate.setValue(ed_DcFromDate.getValue().trim());
    ed_DcToDate.setValue(ed_DcToDate.getValue().trim());
    let ret = await $c.gus.cfValidate($p, [ed_FromDate, ed_ToDate, acb_sbillRecvStsCd]);
    if (!ret) {
      return false;
    }
    ds_billRecvDc.removeAll(); //정보삭제
    $c.sbm.execute($p, sbm_searchBillRecvDc);
  } catch (e) {
    console.log("f_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_searchBillRecvDc_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_billRecvDc.getRowCount()));
    if (ds_billRecvDc.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    } else {
      scwin.gr_billRecvDc_onrowindexchange(0);
      $c.gus.cfGoPrevPosition($p, gr_billRecvDc, 0); //첫번째 row 포지션이동
    }
    scwin.f_AcctStsCdEnableDisable();
  } catch (e) {
    console.log("sbm_searchBillRecvDc_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 그리드정보와 입력정보 매핑
//------------------------------------------------------------------------- 
scwin.gr_billRecvDc_onrowindexchange = function (rowIndex, oldRow) {
  ds_billRecvDc.setRowPosition(rowIndex);
};

//-------------------------------------------------------------------------
// 수금상태에 따라서 필요버튼 및 금액에 대해서 Enable Disable을 수행하는 함수
//-------------------------------------------------------------------------
scwin.f_AcctStsCdEnableDisable = function (e) {
  try {
    if (ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "billRecvStsCd") == ACConstants.BILLRECV_DUE) {
      $c.gus.cfDisableKey($p);
      $c.gus.cfDisableBtn($p, [btn_CancelBefore]); //bDelete
      $c.gus.cfEnableObj($p, btn_clntNo, true); //cfEnableObj(img1,true);
      $c.gus.cfEnableObj($p, btn_trustBankbook, true); //cfEnableObj(img2,true);
    } else {
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableBtn($p, [btn_Save]); //bSave
      $c.gus.cfEnableObj($p, btn_clntNo, false); //cfEnableObj(img1,false);
      $c.gus.cfEnableObj($p, btn_trustBankbook, false); //cfEnableObj(img2,false);
    }
    scwin.f_enableCompanyInfo();
  } catch (e) {
    console.log("f_AcctStsCdEnableDisable : " + e);
  }
};

//-------------------------------------------------------------------------
// 그리드 셀 클릭시
//-------------------------------------------------------------------------
scwin.gr_billRecvDc_oncellclick = function (rowIndex, columnIndex, columnId) {
  try {
    scwin.f_AcctStsCdEnableDisable();
    scwin.f_MoveGridToTextBox(rowIndex, columnId);
    if (rowIndex >= 0) {
      // 전표번호 POPUP호출
      if (columnId == "procSlipNo") {
        $c.gus.cfShowSlipInfo($p, ds_billRecvDc.getCellData(rowIndex, "procSlipNo"));
      }
    }
  } catch (e) {
    console.log("gr_billRecvDc_oncellclick : " + e);
  }
};

//-------------------------------------------------------------------------
// Grid클릭시 해당 데이타를 TextBox로 이동시킨다.
//-------------------------------------------------------------------------
scwin.f_MoveGridToTextBox = function (rowIndex, columnId) {
  try {
    ed_prtAmt.setValue(0);
    ed_dcAmt.setValue(0);
    scwin.ed_targetAmt = 0;
    let chkNum = 0;
    let i = 0;
    for (i = 0; i < ds_billRecvDc.getRowCount(); i++) {
      if (columnId == "num") {
        if (i != rowIndex) {
          ds_billRecvDc.setCellData(i, "num", "F");
        }
      }
    }
    for (i = 0; i < ds_billRecvDc.getRowCount(); i++) {
      if (columnId == "num") {
        if (ds_billRecvDc.getCellData(i, "num") == "T") {
          console.log("ed_prtAmt : " + ed_prtAmt.getValue());
          console.log("prtAmt : " + ds_billRecvDc.getCellData(i, "prtAmt"));
          console.log("dcAmt : " + ds_billRecvDc.getCellData(i, "dcAmt"));
          ed_prtAmt.setValue(parseInt(ed_prtAmt.getValue()) + parseInt(ds_billRecvDc.getCellData(i, "prtAmt")));
          ed_dcAmt.setValue(parseInt(ed_dcAmt.getValue()) + parseInt(ds_billRecvDc.getCellData(i, "dcAmt")));
          chkNum = chkNum + 1;
        }
      } else {
        if (ds_billRecvDc.getRowPosition() == i) {
          ed_prtAmt.setValue(ds_billRecvDc.getCellData(i, "procAmt"));
          ed_dcAmt.setValue(ds_billRecvDc.getCellData(i, "dcAmt"));
        }
      }
      if (ds_billRecvDc.getCellData(i, "num") == "T") {
        scwin.ed_targetAmt = parseInt(scwin.ed_targetAmt) + parseInt(ds_billRecvDc.getCellData(i, "dcAmt"));
        console.log("scwin.ed_targetAmt check : " + scwin.ed_targetAmt);
      }
    }
    ed_dcRt.setValue(ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "dcRt"));
    ed_cmis.setValue(ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "cmis"));
    if (ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "billRecvStsCd") == ACConstants.BILLRECV_DRAFT_DC) {
      ed_trustBankbookNo.setValue(ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "dcRcptBankbookNo"));
      ed_trustBankbookNo.hidVal = ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "dcRcptBankbookNo");
      ed_trustBankbookNm.setValue(ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "dcRcptBankbookNm"));
      ed_trustBankbookNm.hidVal = ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "dcRcptBankbookNm");
    } else {
      ed_trustBankbookNo.setValue(ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "trustBankbookNo"));
      ed_trustBankbookNo.hidVal = ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "trustBankbookNo");
      ed_trustBankbookNm.setValue(ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "trustBankbookNm"));
      ed_trustBankbookNm.hidVal = ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "trustBankbookNm");
    }

    //ACConstants.BILLRECV_DRAFT_DC : 60
    if (ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "billRecvStsCd") == ACConstants.BILLRECV_DRAFT_DC) {
      ed_sellAcctRecvAmt.setValue(ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "sellAcctRecvAmt"));
      ed_clntNo.setValue(ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "dcClntNo"));
      ed_clntNo.hidVal = ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "dcClntNo");
      ed_clntNm.setValue(ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "dcClntNm"));
      ed_clntNm.hidVal = ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "dcClntNm");
      ed_mgntTermStDt.setValue(ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "mgntTermStDt"));
      ed_mgntTermEndDt.setValue(ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "mgntTermEndDt"));
      ed_dcAmt.setValue(ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "dcAmt"));
    } else {
      ed_clntNo.setValue("");
      ed_clntNo.hidVal = "";
      ed_clntNm.setValue("");
      ed_clntNm.hidVal = "";
      ed_sellAcctRecvAmt.setValue("0");
      ed_mgntTermStDt.setValue("");
      ed_mgntTermEndDt.setValue("");
    }
    ed_procAmt.setValue(ds_billRecvDc.getCellData(ds_billRecvDc.getRowPosition(), "dcRcptAmt"));
  } catch (e) {
    console.log("f_MoveGridToTextBox : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_billRecvDc.getRowCount() <= 0) {
    await $c.win.alert($p, "받을어음할인내역이 존재하지않습니다.");
    return false;
  }
  const options = {
    fileName: "받을어음할인조회.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: "받을어음할인조회" //엑셀내 시트명 지정필요시
    ,
    bodyWordwrap: true // 줄바꿈
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_billRecvDc, options, infoArr);
};

//-------------------------------------------------------------------------
// 거래처코드(조회)
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '1', 'CD');
};

//-------------------------------------------------------------------------
// 거래처명(조회)
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '1', 'NM');
};

//-------------------------------------------------------------------------
// 거래처찾기(조회)
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sclntNo, ed_sclntNm, '1', 'ALL');
};

//-------------------------------------------------------------------------
// 거래처코드(입력)
//-------------------------------------------------------------------------
scwin.udc_clntNoIn_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '2', 'CD');
};

//-------------------------------------------------------------------------
// 거래처명(입력)
//-------------------------------------------------------------------------
scwin.udc_clntNoIn_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '2', 'NM');
};

//-------------------------------------------------------------------------
// 거래처찾기(입력)
//-------------------------------------------------------------------------
scwin.udc_clntNoIn_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_clntNo, ed_clntNm, '2', 'ALL');
};

//-------------------------------------------------------------------------
// 입금통장번호
//-------------------------------------------------------------------------
scwin.udc_trustBankbook_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_trustBankbookNo, ed_trustBankbookNm, '3', 'CD');
};

//-------------------------------------------------------------------------
// 입금통장명
//-------------------------------------------------------------------------
scwin.udc_trustBankbook_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_trustBankbookNo, ed_trustBankbookNm, '3', 'NM');
};

//-------------------------------------------------------------------------
// 입금통장찾기
//-------------------------------------------------------------------------
scwin.udc_trustBankbook_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_trustBankbookNo, ed_trustBankbookNm, '3', 'ALL');
};

//-------------------------------------------------------------------------
// 조회귀속부서코드
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '4', 'CD');
};

//-------------------------------------------------------------------------
// 조회귀속부서명
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '4', 'NM');
};

//-------------------------------------------------------------------------
// 조회귀속부서찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '4', 'ALL');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  try {
    if (flag == "CD") {
      if (orgObjCd.getValue() == orgObjCd.hidVal) {
        return;
      } else {
        orgObjNm.setValue("");
      }
    } else {
      if (orgObjNm.getValue() == orgObjNm.hidVal) {
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
      orgObjCd.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->거래처 , 2:입력->거래처, 3:입력->입금통장
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag) {
  try {
    let cd = "";
    let nm = "";
    let param = "";

    // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
    // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
    // flag:SKIP일경우는 Tag에 대한 속성 검사를 하지 않는다.
    if (flag != "SKIP") {
      if (flag == "ALL") {
        cd = "";
        nm = "";
      } else {
        cd = orgObjCd.getValue();
        nm = orgObjNm.getValue();
      }
    } else {
      cd = orgObjCd;
      nm = "";
    }
    switch (select_code) {
      // 조회조건용 거래처 PopUp 호출
      case '1':
        param = ",,," + ed_coCd.getValue();
        //rtnList = cfCommonPopUp('retrieveClntList',cd,nm,"T",null,null,null,null,param,null,null,null,null); // 거래처
        //f_resultPopUp(orgObjCd, orgObjNm,rtnList);
        udc_clntNo.setSelectId('retrieveClntList');
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
      // 금융거래처 PopUp 호출
      case '2':
        //rtnList = cfCommonPopUp('retrieveBankInfo',cd,nm,"T",null,"거래처번호,거래처명",null,null,"0",null,null,null,null,null,null,"금융거래처,거래처번호,거래처명",null); // 거래처
        //f_resultPopUp(orgObjCd, orgObjNm,rtnList);
        udc_clntNoIn.setSelectId('retrieveBankInfo');
        udc_clntNoIn.cfCommonPopUp(scwin.udc_clntNoIn_callBackFunc // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , nm // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , "거래처번호,거래처명" // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , "0" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , "금융거래처,거래처번호,거래처명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 입금통장 POPUP 호출
      case '3':
        param = ",,,,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp('retrieveBankBookCdInfo',cd,nm,"T",null,null,null,null,param,null,null,null,null); // 통장POPUP
        //f_resultPopUp(orgObjCd, orgObjNm,rtnList);
        udc_trustBankbook.setSelectId('retrieveBankBookCdInfo');
        udc_trustBankbook.cfCommonPopUp(scwin.udc_trustBankbook_callBackFunc // 콜백 함수
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
      // 전표입력용 수금부서 PopUp 호출
      case '4':
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ","; //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6',cd,nm,"T",null,null,null,null,param,"450","500",null,null);  // 수금부서
        //f_resultPopUp(orgObjCd, orgObjNm,rtnList);
        udc_acctDeptCd.setSelectId('retrieveAcctDeptCdInfo6');
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , nm // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , "450" // POP-UP뛰을때 원도우의 사용자 정의 폭
        , "500" // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 거래처 팝업 콜백(1)
//-------------------------------------------------------------------------
scwin.udc_clntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_sclntNo.setValue(rtnList[0]); // 코드값
      ed_sclntNm.setValue(rtnList[1]); // 코드명
      ed_sclntNo.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_sclntNm.hidVal = rtnList[1]; // HIDDEN 코드값
    } else {
      ed_sclntNo.setValue("");
      ed_clntNm.setValue("");
      ed_sclntNo.hidVal = "";
      ed_sclntNm.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 거래처 팝업 콜백(2)
//-------------------------------------------------------------------------
scwin.udc_clntNoIn_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_clntNo.setValue(rtnList[0]); // 코드값
      ed_clntNm.setValue(rtnList[1]); // 코드명
      ed_clntNo.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_clntNm.hidVal = rtnList[1]; // HIDDEN 코드값
    } else {
      ed_clntNo.setValue("");
      ed_clntNm.setValue("");
      ed_clntNo.hidVal = "";
      ed_clntNm.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 입금통장통장 팝업 콜백(4)
//-------------------------------------------------------------------------
scwin.udc_trustBankbook_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_trustBankbookNo.setValue(rtnList[0]); // 코드값
      ed_trustBankbookNm.setValue(rtnList[2]); // 코드명
      ed_trustBankbookNo.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_trustBankbookNm.hidVal = rtnList[2]; // HIDDEN 코드명
    } else {
      ed_trustBankbookNo.setValue("");
      ed_trustBankbookNo.hidVal = "";
      ed_trustBankbookNm.setValue("");
      ed_trustBankbookNm.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 부서 팝업 콜백(4)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_sacctDeptCd.setValue(rtnList[0]); // 코드값
      ed_sacctDeptNm.setValue(rtnList[1]); // 코드명
      ed_sacctDeptCd.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_sacctDeptNm.hidVal = rtnList[1]; // HIDDEN 코드값
    } else {
      ed_sacctDeptCd.setValue("");
      ed_sacctDeptNm.setValue("");
      ed_sacctDeptCd.hidVal = "";
      ed_sacctDeptNm.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 선급이자
//-------------------------------------------------------------------------
scwin.ed_sellAcctRecvAmt_onblur = function (e) {
  try {
    ed_procAmt.setValue(parseInt(ed_dcAmt.getValue()) - parseInt(ed_sellAcctRecvAmt.getValue()) - parseInt(ed_cmis.getValue()));
  } catch (e) {
    console.log("ed_sellAcctRecvAmt_onblur : " + e);
  }
};

//-------------------------------------------------------------------------
// 할인율
//-------------------------------------------------------------------------
scwin.ed_dcRt_onblur = function (e) {
  try {
    ed_procAmt.setValue(parseInt(ed_dcAmt.getValue()) - parseInt(ed_sellAcctRecvAmt.getValue()) - parseInt(ed_cmis.getValue()));
  } catch (e) {
    console.log("ed_dcRt_onblur : " + e);
  }
};

//-------------------------------------------------------------------------
// 지급수수료
//-------------------------------------------------------------------------
scwin.ed_cmis_onblur = function (e) {
  try {
    ed_procAmt.setValue(parseInt(ed_dcAmt.getValue()) - parseInt(ed_sellAcctRecvAmt.getValue()) - parseInt(ed_cmis.getValue()));
  } catch (e) {
    console.log("ed_cmis_onblur : " + e);
  }
};

//-------------------------------------------------------------------------
// 어음금액
//-------------------------------------------------------------------------
scwin.ed_dcAmt_onblur = function (e) {
  try {
    if (scwin.chkNum > 1 && parseInt(scwin.ed_targetAmt) != parseInt(ed_dcAmt.getValue())) {
      $c.win.alert($p, "여러건 선택시 할인금액은 대상 금액과 같아야 합니다.");
      ed_dcAmt.setValue(scwin.ed_targetAmt);
    }
    if (parseInt(scwin.ed_targetAmt) < parseInt(ed_dcAmt.getValue())) {
      ed_dcAmtsetValue(scwin.ed_targetAmt);
    }
  } catch (e) {
    console.log("ed_dcAmt_onblur : " + e);
  }
};

//-------------------------------------------------------------------------
// 마감체크
//-------------------------------------------------------------------------
scwin.f_JobCloseYN = async function () {
  try {
    scwin.f_setWrkNoFromDate();

    //cfJobCloseYN(마감요청구분,마감년월,마감일,작업번호,관리번호,리턴구분);
    let isClose = await udc_closeYn.cfJobCloseYN("CUR", scwin.fromDate, "00", scwin.wrkNo, "0", "ARR", "N", ed_coCd.getValue());

    // 마감작업 조회시 해당값이 없을경우 오류 발생
    if (isClose[0] == "DNF") {
      $c.gus.cfAlertMsg($p, "마감되었습니다.");
      return false;
    }

    // 선행마감 작업에 대한 검사
    if (isClose[3] == "PRE") {
      if (isClose[0] == "1") {
        $c.gus.cfAlertMsg($p, "선행작업 " + isClose[2] + "이 미마감되어서 현재 작업을 진행할 수 없습니다.");
        return false;
      } else if (isClose[0] == "0") {
        $c.gus.cfAlertMsg($p, "선행작업 " + isClose[2] + "이 마감작업중이어서 현재 작업을 진행할 수 없습니다.");
        return false;
      }
    }

    // 해당마감 작업에 대한 검사
    if (isClose[3] == "CUR") {
      if (isClose[0] == "0") {
        $c.gus.cfAlertMsg($p, isClose[2] + "(이)가 마감중입니다.");
        return false;
      } else if (isClose[0] == "2") {
        $c.gus.cfAlertMsg($p, isClose[2] + "(이)가 마감완료가 되었습니다");
        return false;
      } else {
        return true;
      }
    }
  } catch (e) {
    console.log("f_JobCloseYN : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회 및 마감확인시 작업코드 날짜 세팅하는 함수
//-------------------------------------------------------------------------
scwin.f_setWrkNoFromDate = function () {
  try {
    scwin.wrkNo = ACConstants.CLOSE_MONTH;
    scwin.fromDate = ed_slipDt.getValue().trim();
    scwin.fromDate = scwin.fromDate.substring(0, 6);
  } catch (e) {
    console.log("f_setWrkNoFromDate : " + e);
  }
};

//-------------------------------------------------------------------------
// 선급비용 여부 체크 2016.11.02
//-------------------------------------------------------------------------
scwin.f_suspenseCheck = function (FromDt, ToDt, SlipDt) {
  try {
    if (SlipDt.substring(0, 6) < FromDt.substring(0, 6)) return true;
    if (FromDt.substring(0, 6) < ToDt.substring(0, 6)) return true;
    return parseInt($c.date.diffDate($p, FromDt, ToDt)) + 1 >= 31;
  } catch (e) {
    console.log("f_suspenseCheck : " + e);
  }
};

//-------------------------------------------------------------------------
// 할인처리시 호출 되는 함수
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  try {
    let checkCount = 0;
    let tempBillRecvAmt = 0;
    let i = 0;

    // 마감여부확인
    let jobCloseYN = await scwin.f_JobCloseYN();
    if (!jobCloseYN) {
      return false;
    }
    for (i = 0; i < ds_billRecvDc.getRowCount(); i++) {
      if (ds_billRecvDc.getCellData(i, "billRecvStsCd") != ACConstants.BILLRECV_DUE && ds_billRecvDc.getCellData(i, "num") == "T") {
        $c.gus.cfAlertMsg($p, "상태가 수금인것만 할인처리가 가능합니다.");
        ds_billRecvDc.setRowPosition(i);
        return false;
      }

      // Check 여부 카운트
      if (ds_billRecvDc.getCellData(i, "num") == "T") {
        checkCount++;
      } else {
        ds_billRecvDc.undoRow(i);
      }
    }
    if (ed_dcAmt.getValue() != parseInt(ed_sellAcctRecvAmt.getValue()) + parseInt(ed_cmis.getValue()) + parseInt(ed_procAmt.getValue())) {
      $c.gus.cfAlertMsg($p, "할인금액 = 선급이자 + 지급수수료 + 입금금액 이 되어야 합니다.");
      return false;
    }
    if (checkCount > 1) {
      if (scwin.ed_targetAmt != parseInt(ed_sellAcctRecvAmt.getValue()) + parseInt(ed_cmis.getValue()) + parseInt(ed_procAmt.getValue())) {
        $c.gus.cfAlertMsg($p, "선택하신 어음 금액과 입력하신 내역이 틀립니다.\n어음금액 = 선급이자 + 지급수수료 + 입금금액 이 되어야 합니다.");
        return false;
      }
    } else {
      console.log("save scwin.ed_targetAmt :" + scwin.ed_targetAmt);
      console.log("save ed_dcAmt :" + ed_dcAmt.getValue());
      if (parseInt(scwin.ed_targetAmt) < parseInt(ed_dcAmt.getValue())) {
        $c.gus.cfAlertMsg($p, "입력한 어음금액이 남은 어음금액보다 큽니다.");
        return false;
      }
    }
    let ret = await $c.gus.cfValidate($p, [ed_slipDt, ed_prtAmt, ed_clntNo]);
    if (!ret) {
      return false;
    }

    //TOBE ASIS의 선급이자와 1이상입력에 대한 체크 추가 ()
    if (ed_sellAcctRecvAmt.getValue() == "" || ed_sellAcctRecvAmt.getValue() == "0") {
      await $c.gus.cfAlertMsg($p, "선급이자은(는) 1 이상으로 입력하십시오.");
      ed_sellAcctRecvAmt.focus();
      return false;
    }

    /*
    //ASIS 체크가 되었다 안되었다가 해서 주석으로 막음 어음금액인데 체크는 입금금액으로 함.
    if (ed_dcAmt.getValue()=="" || ed_dcAmt.getValue()=="0"){
        $c.gus.cfAlertMsg("입금금액은(는) 1 이상으로 입력하십시오.");
        return false;
    }*/

    let ret2 = await $c.gus.cfValidate($p, [ed_sellAcctRecvAmt, ed_dcRt, ed_trustBankbookNo, ed_procAmt, ed_mgntTermStDt, ed_mgntTermEndDt]);
    if (!ret2) {
      return false;
    }

    // 선택사항이 있는지 유무 검사
    if (checkCount == 0) {
      $c.gus.cfAlertMsg($p, "선택하신 사항이 없습니다.");
      return false;
    }

    // 선택사항 할인처리시 수금일자이전 인지 체크
    for (i = 0; i < ds_billRecvDc.getRowCount(); i++) {
      if (ds_billRecvDc.getCellData(i, "num") == "T") {
        if (ds_billRecvDc.getCellData(i, "procDt") > ed_slipDt.getValue()) {
          $c.win.alert($p, "수금전표일자보다 이전으로 할인처리할 수 없습니다.");
          return false;
        }
      }
    }

    // 체크된 항목에 필요한 값을 이동시킨다.
    for (i = 0; i < ds_billRecvDc.getRowCount(); i++) {
      if (ds_billRecvDc.getCellData(i, "num") == "T") {
        ds_billRecvDc.setCellData(i, "slipDt", ed_slipDt.getValue().trim()); // 전표일자
        ds_billRecvDc.setCellData(i, "dcClntNo", ed_clntNo.getValue().trim()); // 할인거래처
        ds_billRecvDc.setCellData(i, "sellAcctRecvAmt", ed_sellAcctRecvAmt.getValue().trim()); // 매출채권처분손
        ds_billRecvDc.setCellData(i, "dcRt", ed_dcRt.getValue().trim()); // 할인율
        ds_billRecvDc.setCellData(i, "cmis", ed_cmis.getValue().trim()); // 수수료
        ds_billRecvDc.setCellData(i, "dcRcptBankbookNo", ed_trustBankbookNo.getValue().trim()); // 입금통장
        ds_billRecvDc.setCellData(i, "dcRcptAmt", ed_procAmt.getValue().trim()); // 입금금액
        ds_billRecvDc.setCellData(i, "procAmt", ed_prtAmt.getValue().trim()); // 어음금액
        ds_billRecvDc.setCellData(i, "dcAmt", ed_dcAmt.getValue().trim()); // 할어음금액
        ds_billRecvDc.setCellData(i, "mgntTermStDt", ed_mgntTermStDt.getValue().trim()); // 관리시작일자
        ds_billRecvDc.setCellData(i, "mgntTermEndDt", ed_mgntTermEndDt.getValue().trim()); // 관리종료일자
        ds_billRecvDc.setCellData(i, "dcYn", "0"); //부분할인여부 
        ds_billRecvDc.setCellData(i, "feYn", "1"); //단기차입금부서가재경부서인지여부
      }
    }
    let chkPayAmt = 0;
    let chkSuspenseAmt = 0;
    for (i = 0; i < ds_billRecvDc.getRowCount(); i++) {
      if (ds_billRecvDc.getCellData(i, "num") == "T") {
        if (!$c.gus.cfIsNull($p, ds_billRecvDc.getCellData(i, "mgntTermStDt")) || !$c.gus.cfIsNull($p, ds_billRecvDc.getCellData(i, "mgntTermEndDt"))) {
          if (scwin.f_suspenseCheck(ds_billRecvDc.getCellData(i, "mgntTermStDt"), ds_billRecvDc.getCellData(i, "mgntTermEndDt"), ed_slipDt.getValue())) {
            chkSuspenseAmt += parseInt(ds_billRecvDc.getCellData(i, "sellAcctRecvAmt"));
          } else {
            chkPayAmt += parseInt(ds_billRecvDc.getCellData(i, "sellAcctRecvAmt")); //chkPayAmt += ds_billRecvDc.NameValue(i,"sellAcctRecvAmt");
          }
        }
      }
    }
    let chkConfirm = "";
    if (chkSuspenseAmt == 0 && chkPayAmt == 0) {
      chkConfirm = "선택하신 사항을 할인처리 하시겠습니까?";
    } else {
      chkConfirm = "- 당월 비용 " + chkPayAmt + "원," + "</br>" + "- 선급 비용 " + chkSuspenseAmt + "원으로 전표 발행됩니다." + "</br>" + "선택하신 사항을 할인처리 하시겠습니까?";
    }
    if (await $c.win.confirm($p, chkConfirm)) {
      if (ed_dcAmt.getValue() != ed_prtAmt.getValue()) {
        ds_billRecvDc.setCellData(ds_billRecvDc.getRowPosition(), "dcYn", "1");
      }
      sbm_saveBillRecvDc.action = "/ac.fm.collmoneymgnt.billrecv.ProcessDisCountCMD.do";
      $c.sbm.execute($p, sbm_saveBillRecvDc);
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};

//-------------------------------------------------------------------------
// 입금전 취소시 호출 되는 함수
//-------------------------------------------------------------------------
scwin.f_CancelBefore = async function (e) {
  try {
    let checkCount = 0;
    let i = 0;
    for (i = 0; i < ds_billRecvDc.getRowCount(); i++) {
      if (ds_billRecvDc.getCellData(i, "billRecvStsCd") != ACConstants.BILLRECV_DRAFT_DC && ds_billRecvDc.getCellData(i, "num") == "T") {
        $c.gus.cfAlertMsg($p, "상태가 할인인것만 할인취소가 가능합니다.");
        ds_billRecvDc.setRowPosition(i);
        return false;
      }
      if (ds_billRecvDc.getCellData(i, "num") == "T") {
        checkCount++;
      } else {
        ds_billRecvDc.undoRow(i);
      }
    }
    let ret = await $c.gus.cfValidate($p, [ed_slipDt]);
    if (!ret) {
      return false;
    }

    // 선택사항이 있는지 유무 검사
    if (checkCount == 0) {
      await $c.win.alert($p, "선택하신 사항이 없습니다.");
      return false;
    }
    if (await $c.win.confirm($p, "선택하신 전표에 해당하는 어음이 모두 취소처리 됩니다.\n처리 하시겠습니까?")) {
      sbm_saveBillRecvDc.action = "/ac.fm.collmoneymgnt.billrecv.CancelReceiptBeforeCMD.do";
      $c.sbm.execute($p, sbm_saveBillRecvDc);
    }
  } catch (e) {
    console.log("f_CancelBefore : " + e);
  }
};

//-------------------------------------------------------------------------
// 할인처리/입금전취소 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveBillRecvDc_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',class:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',objTypeName:'data',mandatoryCode:'true',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'3',id:'udc_coCd',refDataCollection:'ds_searchBillRecvDc',code:'coCd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'만기일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_searchBillRecvDc',refEdDt:'toDate',refStDt:'fromDate',style:'',edFromId:'ed_FromDate',mandatoryFrom:'true',mandatoryTo:'true',edToId:'ed_ToDate',titleFrom:'만기일자',titleTo:'만기일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_sclntNo',validExpCode:'',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_sclntNm',id:'udc_clntNo',editTypeName:'select',maxlengthName:'50',refDataCollection:'ds_searchBillRecvDc',code:'clntNo',selectID:'retrieveClntList','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent',validTitle:'거래처'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_sbillRecvAcctCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:ds_searchBillRecvDc.billRecvAcctCd',disabled:'false',displayMode:'value delim label',searchTarget:'both',title:'계정코드'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_sbillRecvStsCd',search:'start',style:'width: 110px;',submenuSize:'auto',allOption:'',ref:'data:ds_searchBillRecvDc.billRecvStsCd',disabled:'false',displayMode:'value delim label',searchTarget:'both'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할인일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_searchBillRecvDc',refEdDt:'dcToDate',refStDt:'dcFromDate',style:'',edFromId:'ed_DcFromDate',mandatoryFrom:'true',mandatoryTo:'true',edToId:'ed_DcToDate',titleFrom:'할인일자',titleTo:'할인일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수금부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_sacctDeptCd',nameId:'ed_sacctDeptNm',maxlengthCode:'6',allowCharCode:'0-9',code:'acctDeptCd',selectID:'retrieveAcctDeptCdInfo6',id:'udc_acctDeptCd',validTitle:'수금부서','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent',mandatoryName:'true',mandatoryCode:'true',maxlengthName:'50',refDataCollection:'ds_searchBillRecvDc'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrd',gridID:'gr_billRecvDc',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_billRecvDc',id:'gr_billRecvDc',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'8',visibleRowNumFix:'true',fixedColumn:'1',fixedColumnNoMove:'true',readOnly:'true',resize:'true',columnMove:'true',rowStatusVisible:'true','ev:onrowindexchange':'scwin.gr_billRecvDc_onrowindexchange','ev:oncellclick':'scwin.gr_billRecvDc_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'column23',value:'',displayMode:'label',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'만기일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'계정코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'어음번호',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'상태',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'총어음금액',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'어음금액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'거래처명',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'전표번호',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'부분할인여부',width:'150'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'수수료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column61',value:'수탁통장번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'통장번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column55',value:'수탁통장명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'전표일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'전표일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'수취일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'발행일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column67',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column70',value:'발행은행명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column124',value:'타수여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column121',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'column118',value:'귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column115',value:'관리사원번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column112',value:'교환전받을어음번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column109',value:'어음관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column106',value:'매출채권처분손',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column103',value:'할인율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column100',value:'입금금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column97',value:'관리기간시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column94',value:'관리기간종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column91',value:'회사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column88',value:'회사구분코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'num',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',valueType:'other',checkAlways:'true',readOnly:'false',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDt',inputType:'text',style:'',value:'',width:'120',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecvAcctCd',inputType:'select',style:'',value:'',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecvNo',inputType:'text',style:'',value:'',width:'160',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecvStsCd',inputType:'select',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prtAmt',inputType:'text',style:'',value:'',width:'140',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'160',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'procSlipNo',inputType:'link',style:'',value:'',width:'140',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcYn',inputType:'text',style:'',value:'',width:'150',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cmis',value:'',displayMode:'label',mandatory:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'trustBankbookNo',value:'',displayMode:'label',mandatory:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'hidTrustBankbookNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'trustBankbookNm',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'procDt',value:'',displayMode:'label',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipDt',value:'',displayMode:'label',mandatory:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'recDt',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'prtDt',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',mandatory:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'prtBankNm',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'obankCheckYn',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'chgRsn',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mgntEmpNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'exchgBfBillRecvNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'billRecvMgntNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'sellAcctRecvAmt',value:'',displayMode:'label',mandatory:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcRt',value:'',displayMode:'label',mandatory:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'procAmt',value:'',displayMode:'label',mandatory:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'mgntTermStDt',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'mgntTermEndDt',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'coCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'coClsCd',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'expression',expression:'sum(\'prtAmt\')',displayFormat:'#,##0',textAlign:'right',style:'',value:'',width:'140'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column126',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column123',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'column120',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column117',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column114',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column111',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column108',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column102',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'할인일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_slipDt',title:'할인일자',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM/dd',ref:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'총어음금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_prtAmt',title:'총어음금액',objType:'key',mandatory:'true',style:'width: 150px;',ref:'',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',maxlength:'13'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'할인 거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_clntNo',validExpCode:'',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_clntNm',id:'udc_clntNoIn',editTypeName:'select',maxlengthName:'50',selectID:'retrieveBankInfo','ev:onblurCodeEvent':'scwin.udc_clntNoIn_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNoIn_onclickEvent','ev:onblurNameEvent':'scwin.udc_clntNoIn_onblurNameEvent',validTitle:'할인거래처',objTypeCode:'data',objTypeName:'data',btnId:'btn_clntNo',mandatoryCode:'true',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'어음금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_dcAmt',title:'할인금액',objType:'data',mandatory:'true',minNumber:'1',style:'width: 150px;',ref:'',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',maxlength:'13','ev:onblur':'scwin.ed_dcAmt_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'할인율(%)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_dcRt',title:'할인율',objType:'data',mandatory:'true',style:'width: 150px;',ref:'',allowChar:'0-9',dataType:'float',displayFormat:'##0.##',maxlength:'5.2','ev:onblur':'scwin.ed_dcRt_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선급이자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_sellAcctRecvAmt',title:'선급이자',objType:'data',mandatory:'true',minNumber:'1',style:'width: 150px;',ref:'',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',maxlength:'13','ev:onblur':'scwin.ed_sellAcctRecvAmt_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입금통장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_trustBankbookNo',validExpCode:'',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_trustBankbookNm',id:'udc_trustBankbook',objTypeName:'data',editTypeName:'select',maxlengthName:'50',selectID:'retrieveBankBookCdInfo',mandatoryName:'false',validTitle:'입금통장','ev:onblurCodeEvent':'scwin.udc_trustBankbook_onblurCodeEvent','ev:onclickEvent':'scwin.udc_trustBankbook_onclickEvent','ev:onblurNameEvent':'scwin.udc_trustBankbook_onblurNameEvent',mandatoryCode:'true',btnId:'btn_trustBankbook',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급수수료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_cmis',title:'지급수수료',objType:'data',mandatory:'true',style:'width: 150px;',ref:'',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',maxlength:'13','ev:onblur':'scwin.ed_cmis_onblur'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선급기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_mgntTermStDt',mandatoryFrom:'true',mandatoryTo:'true',edToId:'ed_mgntTermEndDt',titleFrom:'선급기간',titleTo:'선급기간',objTypeFrom:'data',objTypeTo:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입금금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_procAmt',title:'입금금액',objType:'key',mandatory:'true',minNumber:'1',style:'width: 150px;',ref:'',allowChar:'0-9',dataType:'number',displayFormat:'#,##0',maxlength:'13'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_Save',type:'button',class:'btn white','ev:onclick':'scwin.f_Save',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'할인처리'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_CancelBefore',type:'button',class:'btn white','ev:onclick':'scwin.f_CancelBefore',objType:'bDelete',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'입금전취소'}]}]}]}]}]}]},{T:1,N:'w2:udc_comChkRes',A:{selectID:'',codeId:'',nameId:'',style:'visibility: hidden;',id:'udc_closeYn'}}]}]}]})