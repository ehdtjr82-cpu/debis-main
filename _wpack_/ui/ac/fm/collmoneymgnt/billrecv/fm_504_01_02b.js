/*amd /ui/ac/fm/collmoneymgnt/billrecv/fm_504_01_02b.xml 82946 9460734ef2a4aa62c264e3c653b7daa92536f010ac34729016bef3db13033f52 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchBillReceivable'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromDate',name:'만기일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDate',name:'만기일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billRecvNo',name:'받을어음번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billRecvStsCd',name:'받을어음상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billRecvAcctCd',name:'받을어음계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'allDept',name:'조회구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'menuId',name:'메뉴ID',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billReceivable',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'받을어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvNo',name:'받을어음번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgBillRecvNo',name:'원본받을어음번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvAcctCd',name:'받을어음계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvAcctNm',name:'받을어음계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvStsCd',name:'받을어음상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldBillRecvStsCd',name:'이전받을어음상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recDt',name:'수취일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtDt',name:'발행일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtAmt',name:'어음금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prtBankNm',name:'발행은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustBankbookNo',name:'수탁은행거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidTrustBankbookNo',name:'히든수탁통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustBankbookNm',name:'수탁통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'obankCheckYn',name:'타수여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'autoRegYn',name:'등록구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'어음번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgRsn',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'수금귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',name:'관리사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchgBfBillRecvNo',name:'교환전받을어음번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchBillReceivableDetail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'billRecvMgntNo',name:'어음관리번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billReceivableDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'받을어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'billRecvStsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procDt',name:'처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procSlipNo',name:'처리전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procAmt',name:'처리금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'procCnclYn',name:'취소여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mgntAcctRecvPatternCd',name:'채권유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmis',name:'수수료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcRt',name:'할인율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dcClntNo',name:'할인거래처',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_searchBillReceivable',action:'/ac.fm.collmoneymgnt.billrecv.RetrieveBillReceivableMasterCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchBillReceivable","key":"IN_DS1"},{"id":"ds_billReceivable","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_billReceivable","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchBillReceivable_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchBillReceivableDetail',action:'/ac.fm.collmoneymgnt.billrecv.RetrieveBillReceivableHistoryCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchBillReceivableDetail","key":"IN_DS1"},{"id":"ds_billReceivableDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_billReceivableDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchBillReceivableDetail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveBillReceivable',action:'/ac.fm.collmoneymgnt.billrecv.SaveBillReceivableContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_billReceivable","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveBillReceivable_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveBillReceivableDel',action:'/ac.fm.collmoneymgnt.billrecv.SaveBillReceivableContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_billReceivable","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveBillReceivableDel_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 오늘 날짜를 구한다.
//-------------------------------------------------------------------------
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01";
scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.
scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");

//-------------------------------------------------------------------------
// 전역변수 선언
//-------------------------------------------------------------------------
scwin.pos_groupCode = 0; // Grid의 저장시 위치로 이동하게 하는 전역변수
scwin.isUpdate = 0; // 수정 버튼 클릭여부
scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 
scwin.loginCoCd = $c.data.getMemInfo($p, "coCd");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.loginCoCd) ? '' : scwin.loginCoCd; // 소속 자회사
scwin.loginCoClsCd = $c.data.getMemInfo($p, "coClsCd");
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.loginCoClsCd) ? '' : scwin.loginCoClsCd;
; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.isSubCompany = false;
//-------------------------------------------------------------------------
// 로그인 정보 전역 변수를 선언
//-------------------------------------------------------------------------
scwin.G_acctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
scwin.G_acctDeptNm = $c.data.getMemInfo($p, "acctDeptNm");
scwin.G_empNo = $c.data.getMemInfo($p, "empNo");
scwin.G_empNm = $c.data.getMemInfo($p, "userNm");
scwin.clntNoType = ""; //S:조회, I:입력부 UDC
//-------------------------------------------------------------------------
// hidden
//-------------------------------------------------------------------------
scwin.txtCoClsCd = "";
scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 처리)
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "FM014",
    compID: "acb_sbillRecvAcctCd, acb_billRecvAcctCd,gr_billReceivable:billRecvAcctCd"
  }, {
    grpCd: "FM015",
    compID: "acb_billRecvStsCd_all,lc_sbillRecvStsCd,gr_billReceivable:billRecvStsCd,gr_billReceivableDetail:billRecvStsCd"
  }, {
    grpCd: "FM044",
    compID: "gr_billReceivableDetail:mgntAcctRecvPatternCd"
  }];
  $c.data.setCommonCode($p, codeOptions);

  //ASIS 히든,showfalse 그리드 필드정보
  /*gr_billReceivable.setColumnVisible("recDt", false);
  gr_billReceivable.setColumnVisible("prtAmt", false);
  gr_billReceivable.setColumnVisible("clntNo", false);
  gr_billReceivable.setColumnVisible("trustBankbookNo", false);
  gr_billReceivable.setColumnVisible("prtBankNm", false);
  gr_billReceivable.setColumnVisible("acctDeptCd", false);*/
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_Initial();
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  //공통코드재매핑.
  let dltStr = "dlt_commonCodeFM015"; // FM015 코드의 dataList
  let dlt = $c.gus.object($p, dltStr);
  $c.gus.copy($p, dltStr, "dlt_commonCodeFM015_1", true); // dlt_commonCodeFM015_1 으로 dataList 을 복사

  let dlt2 = $c.gus.object($p, "dlt_commonCodeFM015_1"); // 객체화
  $c.data.dataListFilter($p, dlt2, "fltrCd1 == '40'"); // 새로운 데이터리스트에 필터 lc_billRecvStsCd GauceUtil.getCodeList("FM015",1,"40")
  acb_billRecvStsCd.setNodeSet("data:dlt_commonCodeFM015_1", "cdNm", "cd"); // selectBox 에 새로운 데이터리스트로 매핑
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
    console.log("f_setCompanyInfo: " + e);
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
    if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
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
    if (scwin.isStarted == true) {
      if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
        // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
        $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      } else {
        $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      }
    }
  } catch (e) {
    console.log("udc_coCd_callBackFunc" + e);
  }
};

//-------------------------------------------------------------------------
// 초기화 관련 변수 선언
//-------------------------------------------------------------------------
scwin.f_Initial = function (e) {
  try {
    ed_FromDate.setValue(scwin.strFromDate);
    ed_ToDate.setValue(scwin.strToDate);
    lc_sbillRecvStsCd.setSelectedIndex(0);
    acb_sbillRecvAcctCd.setSelectedIndex(0); //lc_sbillRecvAcctCd.index = 0;

    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableBtn($p, [btn_Add, btn_Upt, btn_Del]); //bUpdate,bSave,bDelete

    //ASIS onload
    ed_sacctDeptCd.setValue(scwin.G_acctDeptCd);
    ed_sacctDeptCd.hidVal = scwin.G_acctDeptCd;
    ed_sacctDeptNm.setValue(scwin.G_acctDeptNm);
    ed_sacctDeptNm.hidVal = scwin.G_acctDeptNm;
    $c.gus.cfDisableObjects($p, [ed_recDt, ed_prtDt, ed_dueDt, btn_clnt, btn_trustBankbook, btn_acctDept, btn_mgntEmp, btn_bankCd]); //cfDisableObjects([img1,img2,img3,img4,img5,img6,img7,img_BankNm]);

    Id1_billRecvStsCd.setStyle("display", "none");
    Id2_billRecvStsCd.setStyle("display", "inline");
  } catch (e) {
    console.log("f_Initial : " + e);
  }
};

//-------------------------------------------------------------------------
// Display시 포커스 설정 : fm_504_01_00b.jsp(f_ViewTab)
//-------------------------------------------------------------------------
scwin.f_OnFocus = function (e) {
  ed_sacctDeptCd.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    let ret = await $c.gus.cfValidate($p, [ed_coCd, ed_sacctDeptCd, ed_FromDate, ed_ToDate]);
    if (!ret) {
      return false;
    }
    // 수정버튼 클릭여부 초기화
    scwin.isUpdate = 0;
    $c.gus.cfDisableBtn($p, [btn_Upt, btn_Del]); //bSave,bDelete

    let vChk_allDept = "0";
    if (chk_allDept.getValue() == "1") {
      vChk_allDept = "1";
    }
    ds_searchBillReceivable.set("menuId", "fm_504_01_02b");
    ds_searchBillReceivable.set("allDept", vChk_allDept);
    ds_billReceivable.removeAll(); //정보삭제
    $c.sbm.execute($p, sbm_searchBillReceivable);
  } catch (e) {
    console.log("f_Retrieve" + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_searchBillReceivable_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    if (ds_billReceivable.getRowCount() == 0) {
      await $c.win.alert($p, MSG_CM_ERR_003);
    } else {
      //scwin.f_HiddenMove(); gr_billReceivable_onrowindexchange 에서 호출됨
      //scwin.f_ChangeStatus(); gr_billReceivable_onrowindexchange 에서 호출됨
      tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_billReceivable.getRowCount()));
      scwin.gr_billReceivable_onrowindexchange(0);
      $c.gus.cfGoPrevPosition($p, gr_billReceivable, scwin.pos_groupCode); //첫번째 row 포지션이동
      //scwin.cfDisableObjects([img1,img2,img3,img4,img5,img6,img7,img_BankNm]);
    }
    $c.gus.cfDisableKeyData($p);
    scwin.f_enableCompanyInfo();
    scwin.f_HiddenMove();
    scwin.f_ChangeStatus();
    $c.gus.cfDisableObjects($p, [ed_recDt, ed_prtDt, ed_dueDt, btn_clnt, btn_trustBankbook, btn_acctDept, btn_mgntEmp, btn_bankCd]);
  } catch (e) {
    console.log("sbm_searchBillReceivable_submitdone" + e);
  }
};
scwin.gr_billReceivable_onrowindexchange = function (rowIndex, oldRow) {
  if (ds_billReceivable.getRowCount() > 0) {
    //Autocomplete에 정보값 처리.
    acb_billRecvStsCd_all.setValue(ds_billReceivable.getCellData(rowIndex, "billRecvStsCd"));
    acb_billRecvStsCd.setValue(ds_billReceivable.getCellData(rowIndex, "billRecvStsCd"));

    // Hidden에 값을 이전시킨다.(거래처,수탁은행통장,귀속부서,관리사원)
    scwin.f_HiddenMove();
    scwin.f_ChangeStatus();
  }
};

//-------------------------------------------------------------------------
// Hidden값에 넣어야할 내역을 OnClick이벤트 발생시 이동시킨다.
//-------------------------------------------------------------------------
scwin.f_HiddenMove = function (data) {
  try {
    // Hidden에 값을 이전시킨다.(거래처,수탁은행통장,귀속부서,관리사원)
    ed_clntNo.hidVal = ed_clntNo.getValue();
    ed_clntNm.hidVal = ed_clntNm.getValue();
    ed_trustBankbookNo.hidVal = ed_trustBankbookNo.getValue();
    ed_trustBankbookNm.hidVal = ed_trustBankbookNm.getValue();
    ed_acctDeptCd.hidVal = ed_acctDeptCd.getValue();
    ed_acctDeptNm.hidVal = ed_acctDeptNm.getValue();
    ed_mgntEmpNm.hidVal = ed_mgntEmpNm.getValue();
    ed_mgntEmpNo.hidVal = ed_mgntEmpNo.getValue();
  } catch (e) {
    console.log("f_HiddenMove" + e);
  }
};

//-------------------------------------------------------------------------
// 그리드 클릭시 어음상태를 변경시킨다.
//-------------------------------------------------------------------------
scwin.f_ChangeStatus = function (data) {
  try {
    if (ds_billReceivable.getCellData(ds_billReceivable.getRowPosition(), "billRecvStsCd") == ACConstants.BILLRECV_RECV) {
      Id1_billRecvStsCd.setStyle("display", "inline");
      Id2_billRecvStsCd.setStyle("display", "none");
    } else {
      Id1_billRecvStsCd.setStyle("display", "none");
      Id2_billRecvStsCd.setStyle("display", "inline");
    }
    if (scwin.isUpdate == 1) {
      scwin.f_UpdateChange();
    } else {
      if (ds_billReceivable.getCellData(ds_billReceivable.getRowPosition(), "billRecvStsCd") == ACConstants.BILLRECV_RECV) {
        $c.gus.cfDisableBtn($p, [btn_Upt]); //bSave
      } else {
        $c.gus.cfDisableBtn($p, [btn_Upt, btn_Del]); //bSave,bDelete
      }
    }
    ds_searchBillReceivableDetail.set("billRecvMgntNo", ds_billReceivable.getCellData(ds_billReceivable.getRowPosition(), "billRecvMgntNo"));
    ds_billReceivableDetail.removeAll(); //정보삭제
    $c.sbm.execute($p, sbm_searchBillReceivableDetail);
  } catch (e) {
    console.log("f_ChangeStatus : " + e);
  }
};

//-------------------------------------------------------------------------
// 하단그리드 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_searchBillReceivableDetail_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    if (ds_billReceivable.getRowCount() != 0) {
      tbx_totalRows2.setValue($c.gus.cfInsertComma($p, ds_billReceivableDetail.getRowCount()));
      $c.gus.cfGoPrevPosition($p, gr_billReceivableDetail, scwin.pos_groupCode); //첫번째 row 포지션이동
    }
  } catch (e) {
    console.log("sbm_searchBillReceivableDetail_submitdone" + e);
  }
};

//-------------------------------------------------------------------------
// 수정버튼 및 Grid드 클릭시 발행,만기,수취일자에 대한 Disable,Enable의 상태를 변경하는 함수
//-------------------------------------------------------------------------
scwin.f_UpdateChange = function (data) {
  try {
    // 어음상태가 수취/연장일 경우
    if (ds_billReceivable.getCellData(ds_billReceivable.getRowPosition(), "billRecvStsCd") == ACConstants.BILLRECV_RECV) {
      $c.gus.cfEnableKeyData($p);
      //$c.gus.cfEnableObjects([img1,img2,img3,img4,img5,img6,img7,img_BankNm]);
      $c.gus.cfEnableObjects($p, [ed_recDt, ed_prtDt, ed_dueDt, btn_clnt, btn_trustBankbook, btn_acctDept, btn_mgntEmp, btn_bankCd]);
      if (scwin.G_acctDeptCd != ACConstants.ACCT_DEPT_CD) $c.gus.cfDisableObjects($p, [ed_prtAmt]);
    } else if (ds_billReceivable.getCellData(ds_billReceivable.getRowPosition(), "billRecvStsCd") == ACConstants.BILLRECV_DUE) {
      $c.gus.cfDisableKey($p);
      $c.gus.cfEnableObj($p, ed_dueDt, false);
      $c.gus.cfEnableObjects($p, [ed_recDt, ed_prtDt, btn_bankCd]); //$c.gus.cfEnableObjects([img1,img2,img_BankNm]);
      $c.gus.cfDisableObjects($p, [ed_dueDt, btn_clnt, btn_trustBankbook, btn_acctDept, btn_mgntEmp]); //$c.gus.cfDisableObjects([img3,img4,img5,img6,img7]);
    } else {
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableObjects($p, [ed_dueDt, btn_clnt, btn_trustBankbook, btn_acctDept, btn_mgntEmp]); //$c.gus.cfDisableObjects([img1,img2,img3,img4,img5,img6,img7]);
      $c.gus.cfEnableObjects($p, [btn_bankCd]); //$c.gus.cfEnableObjects([img_BankNm]);
      $c.gus.cfEnableObj($p, ed_txt_billRecvNo, true);
    }
    scwin.f_enableCompanyInfo();
  } catch (e) {
    console.log("f_UpdateChange : " + e);
  }
};

//-------------------------------------------------------------------------
// 하단그리드 클릭시
//-------------------------------------------------------------------------
scwin.gr_billReceivableDetail_oncellclick = function (rowIndex, columnIndex, columnId) {
  // 수금전표 POPUP
  if (columnId == "procSlipNo") {
    $c.gus.cfShowSlipInfo($p, ds_billReceivableDetail.getCellData(rowIndex, "procSlipNo"));
  }
};

//-------------------------------------------------------------------------
// 하단그리드 취소여부 decode 처리
//-------------------------------------------------------------------------
scwin.procCnclYn = function (data) {
  return $c.gus.decode($p, data, "1", "Y", "N");
};
scwin.f_initObj = function (data) {};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = function () {
  if (ds_billReceivable.getRowCount() <= 0) {
    $c.win.alert($p, "받을어음내역이 존재하지않습니다.");
    return false;
  }
  const options = {
    fileName: "받을어음조회.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: "받을어음조회" //엑셀내 시트명 지정필요시
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_billReceivable, options, infoArr);
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  try {
    $c.gus.cfDisableBtn($p, [btn_Add, btn_Del]); //cfDisableBtn([bUpdate,bDelete]);

    scwin.f_UpdateChange();

    //focus 설정
    ed_txt_billRecvNo.focus();

    // 수정버튼 클릭 Check
    scwin.isUpdate = 1;
  } catch (e) {
    console.log("f_Update" + e);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  try {
    if (chb_obankCheckYn.getValue() == "1" && ed_txt_chgRsn.getValue().trim() == "") {
      await $c.win.alert($p, "타수여부 체크시는 변경사유를 입력 하셔야 합니다.");
      ed_txt_chgRsn.focus();
      return false;
    }
    let ret = await $c.gus.cfValidate($p, [ed_txt_billRecvNo, acb_billRecvAcctCd, acb_billRecvStsCd, ed_recDt, ed_prtDt, ed_dueDt, ed_clntNo, ed_prtAmt, ed_prtBankNm, ed_trustBankbookNo, ed_txt_chgRsn, ed_acctDeptCd, gr_billReceivable]);
    //gr_billReceivable 처리해야 함.     

    if (!ret) {
      return false;
    }
    for (i = 0; i < ds_billReceivable.getRowCount(); i++) {
      let cnt = i + 1;
      if (ds_billReceivable.getCellData(i, "obankCheckYn") == 1 && ds_billReceivable.getCellData(i, "chgRsn").trim() == "") {
        await $c.win.alert($p, cnt + "번째 행의 타수여부 체크시는 변경사유를 입력 하셔야 합니다.");
        ds_billReceivable.setRowPosition(i);
        return false;
      }

      // 수취일은 만기일보다 항상 이전 날짜이어야 한다.
      if (!$c.gus.cfIsAfterDate($p, ds_billReceivable.getCellData(i, "recDt"), ds_billReceivable.getCellData(i, "dueDt"))) {
        await $c.win.alert($p, cnt + "번째 행의 만기일자는 수취일자 보다 항상 이후 날짜이어야 합니다.");
        ds_billReceivable.setRowPosition(i);
        return false;
      }

      // 발행일자는 만기일보다 항상 이전 날짜이어야 한다.
      if (!$c.gus.cfIsAfterDate($p, ds_billReceivable.getCellData(i, "prtDt"), ds_billReceivable.getCellData(i, "dueDt"))) {
        await $c.win.alert($p, cnt + "번째 행의 발행일자는 만기일보다 항상 이전 날짜이어야 합니다.");
        ds_billReceivable.setRowPosition(i);
        return false;
      }

      // 수취일은 발행일자보다 항상 이후이어햐 한다.
      if (!$c.gus.cfIsAfterDate($p, ds_billReceivable.getCellData(i, "prtDt"), ds_billReceivable.getCellData(i, "recDt"))) {
        await $c.win.alert($p, i + "번째 행의 발행일자는 수취일자보다 항상 이전 날짜이어야 합니다.");
        ds_billReceivable.setRowPosition(i);
        return false;
      }
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      $c.sbm.execute($p, sbm_saveBillReceivable); //tr_saveBillReceivable   
    }
  } catch (e) {
    console.log("f_Save" + e);
  }
};

//-------------------------------------------------------------------------
// 저장 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveBillReceivable_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    await $c.win.alert($p, MSG_CM_INF_001);
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableBtn($p, [btn_Upt]); //bSave
    $c.gus.cfDisableObjects($p, [ed_recDt, ed_prtDt, ed_dueDt]); //img1,img2,img3
    scwin.f_enableCompanyInfo();
    scwin.isUpdate = 0;
    //scwin.f_Retrieve();
    ds_billReceivable.initRowStatus(); //저장후 데이터셋 R로 초기화 처리
  } catch (e) {
    console.log("sbm_saveBillReceivable_submitdone" + e);
  }
};

//-------------------------------------------------------------------------
// 취소버튼 클릭시 조회시의 상태로 변경한다.
//-------------------------------------------------------------------------
scwin.f_Delete = async function (e) {
  try {
    if (await $c.win.confirm($p, MSG_CM_CRM_004)) {
      ds_billReceivable.deleteRow(ds_billReceivable.getRowPosition());
      $c.sbm.execute($p, sbm_saveBillReceivableDel); //tr_saveBillReceivable        
    }
  } catch (e) {
    console.log("f_Delete" + e);
  }
};

//-------------------------------------------------------------------------
// 삭제 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveBillReceivableDel_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 거래처코드(조회)
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '6', 'CD');
};

//-------------------------------------------------------------------------
// 거래처명(조회)
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '6', 'NM');
};

//-------------------------------------------------------------------------
// 거래처찾기(조회)
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sclntNo, ed_sclntNm, '6', 'ALL');
};

//-------------------------------------------------------------------------
// 거래처코드(입력)
//-------------------------------------------------------------------------
scwin.udc_clntNoIn_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '1', 'CD');
};

//-------------------------------------------------------------------------
// 거래처명(입력)
//-------------------------------------------------------------------------
scwin.udc_clntNoIn_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '1', 'NM');
};

//-------------------------------------------------------------------------
// 거래처찾기(입력)
//-------------------------------------------------------------------------
scwin.udc_clntNoIn_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_clntNo, ed_clntNm, '1', 'ALL');
};

//-------------------------------------------------------------------------
// 수탁은행통장번호
//-------------------------------------------------------------------------
scwin.udc_trustBankbook_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_trustBankbookNo, ed_trustBankbookNm, '2', 'CD');
};

//-------------------------------------------------------------------------
// 수탁은행통장명
//-------------------------------------------------------------------------
scwin.udc_trustBankbook_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_trustBankbookNo, ed_trustBankbookNm, '2', 'NM');
};

//-------------------------------------------------------------------------
// 수탁은행통장장찾기
//-------------------------------------------------------------------------
scwin.udc_trustBankbook_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_trustBankbookNo, ed_trustBankbookNm, '2', 'ALL');
};

//-------------------------------------------------------------------------
// 귀속부서코드
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdIn_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '3', 'CD');
};

//-------------------------------------------------------------------------
// 귀속부서명
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdIn_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '3', 'NM');
};

//-------------------------------------------------------------------------
// 귀속부서찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdIn_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_acctDeptCd, ed_acctDeptNm, '3', 'ALL');
};

//-------------------------------------------------------------------------
// 관리사원코드
//-------------------------------------------------------------------------
scwin.udc_mgntEmp_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_mgntEmpNo, ed_mgntEmpNm, '4', 'CD');
};

//-------------------------------------------------------------------------
// 관리사원명
//-------------------------------------------------------------------------
scwin.udc_mgntEmp_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_mgntEmpNo, ed_mgntEmpNm, '4', 'NM');
};

//-------------------------------------------------------------------------
// 관리사원찾기
//-------------------------------------------------------------------------
scwin.udc_mgntEmp_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_mgntEmpNo, ed_mgntEmpNm, '4', 'ALL');
};

//-------------------------------------------------------------------------
// 청구(수금)부서코드
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '5', 'CD');
};

//-------------------------------------------------------------------------
// 청구(수금)부서명
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '5', 'NM');
};

//-------------------------------------------------------------------------
// 청구(수금)부서찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '5', 'ALL');
};

//-------------------------------------------------------------------------
// 발행은행코드
//-------------------------------------------------------------------------
scwin.udc_bankCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_bankCd, ed_prtBankNm, '7', 'CD');
};

//-------------------------------------------------------------------------
// 발행은행명
//-------------------------------------------------------------------------
scwin.uudc_bankCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_bankCd, ed_prtBankNm, '7', 'NM');
};

//-------------------------------------------------------------------------
// 발행은행찾기
//-------------------------------------------------------------------------
scwin.udc_bankCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_bankCd, ed_prtBankNm, '7', 'ALL');
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
// 1:조회->부서
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
      // 거래처 PopUp 호출
      case '1':
        param = ",,," + ed_coCd.getValue();
        //rtnList = cfCommonPopUp('retrieveClntList',cd,nm,"T",null,null,null,null,param,null,null,null,null); // 거래처
        //f_resultPopUp(orgObjCd, orgObjNm,rtnList);
        udc_clntNoIn.setSelectId('retrieveClntList');
        udc_clntNoIn.cfCommonPopUp(scwin.udc_clntNoIn_callBackFunc // 콜백 함수
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
      // 통장 PopUp 호출
      case '2':
        param = ",,,,," + ed_coCd.getValue();
        //rtnList = cfCommonPopUp('retrieveBankBookCdInfo',cd,nm,"T",null,null,null,null,param,null,null,null,null); // 통장POPUP
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
      case '3':
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0"; //자회사 회계시스템 추가사항 
        //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6',cd,nm,"T",null,null,null,null,param,"450","500",null,null);
        udc_acctDeptCdIn.setSelectId('retrieveAcctDeptCdInfo6');
        udc_acctDeptCdIn.cfCommonPopUp(scwin.udc_acctDeptCdIn_callBackFunc // 콜백 함수
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
      // 사용자 PopUp 호출
      case '4':
        //rtnList = cfCommonPopUp('retrieveEmpNoDeptInfo',cd,nm,"T",null,null,null,null,null,"450","500",null,null); 
        udc_mgntEmp.setSelectId('retrieveEmpNoDeptInfo');
        udc_mgntEmp.cfCommonPopUp(scwin.udc_mgntEmp_callBackFunc // 콜백 함수
        , cd // 화면에서의 ??? Code Element의 Value
        , nm // 화면에서의 ??? Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , "450" // POP-UP뛰을때 원도우의 사용자 정의 폭
        , "500" // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 조회조건용 수금부서 PopUp 호출    
      case '5':
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd; //자회사 회계시스템 추가사항 
        //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6',cd,nm,"T",null,null,null,null,param,"450","500",null,null); // 수금부서
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
      //조회조건용 거래처 PopUp 호출    
      case '6':
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
      case '7':
        param = ",,,,," + ed_coCd.getValue();
        //rtnList = cfCommonPopUp('retrieveBankBookCdInfo',cd,nm,"T",null,null,null,null,param,null,null,null,null); // 통장POPUP
        udc_comCodeGrid.setSelectId('retrieveBankBookCdInfo');
        udc_comCodeGrid.cfCommonPopUp(scwin.udc_bankCd_callBackFunc // 콜백 함수
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
    }
  } catch (e) {
    console.log("f_openPopUp " + e);
  }
};

//-------------------------------------------------------------------------
// 거래처 팝업 콜백(조회)
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
      ed_sclntNm.setValue("");
      ed_sclntNo.hidVal = "";
      ed_sclntNm.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 거래처 팝업 콜백(1)
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
// 수탁은행통장 팝업 콜백(2)
//-------------------------------------------------------------------------
scwin.udc_trustBankbook_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_trustBankbookNo.setValue(rtnList[0]); // 은행코드
      ed_trustBankbookNo.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_trustBankbookNm.setValue(rtnList[2]); // 은행명
      ed_trustBankbookNm.hidVal = rtnList[2]; // 은행명
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
// 귀속부서 팝업 콜백(3)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdIn_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_acctDeptCd.setValue(rtnList[0]); // 코드값
      ed_acctDeptNm.setValue(rtnList[1]); // 코드명
      ed_acctDeptCd.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_acctDeptNm.hidVal = rtnList[1]; // HIDDEN 코드값
    } else {
      ed_acctDeptCd.setValue("");
      ed_acctDeptNm.setValue("");
      ed_acctDeptCd.hidVal = "";
      ed_acctDeptNm.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 관리사원 팝업 콜백(4)
//-------------------------------------------------------------------------
scwin.udc_mgntEmp_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_mgntEmpNo.setValue(rtnList[0]); // 코드값
      ed_mgntEmpNm.setValue(rtnList[1]); // 코드명
      ed_mgntEmpNo.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_mgntEmpNm.hidVal = rtnList[1]; // HIDDEN 코드값
    } else {
      ed_mgntEmpNo.setValue("");
      ed_mgntEmpNm.setValue("");
      ed_mgntEmpNo.hidVal = "";
      ed_mgntEmpNm.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 청구(수금)부서 팝업 콜백(5)
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
// 거래처 팝업 콜백(6)
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
// 발행은행명 팝업 콜백(7)
//-------------------------------------------------------------------------
scwin.udc_bankCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A" || rtnList[2] == "undefined") {
        ed_bankCd.setValue("");
        ed_prtBankNm.setValue("");
        return;
      }
      ed_bankCd.setValue(rtnList[0]); // 코드값
      ed_prtBankNm.setValue(rtnList[2]); // 코드명
    } else {
      ed_bankCd.setValue("");
      ed_prtBankNm.setValue("");
      return;
    }
  } catch (e) {
    console.log(e);
  }
};
scwin.acb_billRecvStsCd_all_onviewchange = function (info) {
  let row = info.rowIndex;
  ds_billReceivable.setCellData(row, "billRecvStsCd", acb_billRecvStsCd_all.getValue()); //asis lc_billRecvStsCd, lc_billRecvStsCd 가 같은값매핑.
};
scwin.acb_billRecvStsCd_onviewchange = function (info) {
  let row = info.rowIndex;
  ds_billReceivable.setCellData(row, "billRecvStsCd", acb_billRecvStsCd.getValue()); //asis lc_billRecvStsCd, lc_billRecvStsCd 가 같은값매핑.
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width:250px;',class:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',objTypeName:'data',mandatoryCode:'true',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'3',id:'udc_coCd',refDataCollection:'ds_searchBillReceivable',code:'coCd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구(수금)부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',class:'',code:'acctDeptCd',codeId:'ed_sacctDeptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',id:'udc_acctDeptCd',mandatoryCode:'true',mandatoryName:'true',maxlengthCode:'5',maxlengthName:'20',name:'acctDeptNm',nameId:'ed_sacctDeptNm',popupID:'',refDataCollection:'ds_searchBillReceivable',selectID:'retrieveAcctDeptCdInfo6',style:'',validTitle:'청구(수금)부서',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',falseValue:'0',id:'chk_allDept',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위부서포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:'',direction:'auto',disabledClass:'w2selectbox_disabled',displayMode:'value delim label',id:'lc_sbillRecvStsCd',ref:'data:ds_searchBillReceivable.billRecvStsCd',style:'width: 100px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'만기일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_FromDate',edToId:'ed_ToDate',id:'',refDataMap:'ds_searchBillReceivable',refEdDt:'toDate',refStDt:'fromDate',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_sclntNo',nameId:'ed_sclntNm',validExpCode:'',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',id:'udc_clntNo',mandatoryName:'false',editTypeName:'select',maxlengthName:'50',name:'clntNm',refDataCollection:'ds_searchBillReceivable',code:'clntNo',mandatoryCode:'true',selectID:'retrieveClntList','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent',validTitle:'거래처',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_sbillRecvAcctCd',search:'start',style:'width: 100px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:ds_searchBillReceivable.billRecvAcctCd',disabled:'false',displayMode:'value delim label',searchTarget:'both'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'어음번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_txt_sbillRecvNo',maxlength:'20',ref:'data:ds_searchBillReceivable.billRecvNo',style:'width: 120px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrd',gridID:'gr_billReceivable',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:onrowindexchange':'scwin.gr_billReceivable_onrowindexchange',scrollByColumnAdaptive:'false',scrollByColumn:'false',readOnly:'true',rowStatusVisible:'true',visibleRowNumFix:'true',dataList:'data:ds_billReceivable',resize:'true',style:'',columnMove:'true',id:'gr_billReceivable',visibleRowNum:'4',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',sortable:'false',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column32',sortable:'false',value:'어음번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'만기일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column38',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column59',value:'등록구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'수취일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'어음금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo1',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'trustBankbookNo1',value:'수탁은행거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'prtBankNm1',value:'발행은행명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',displayMode:'label',inputType:'text',style:'',id:'acctDeptCd1',value:'귀속부서코드'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'select',style:'',id:'billRecvAcctCd',value:'',mandatory:'true',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'140',inputType:'text',style:'',id:'billRecvNo',value:'',mandatory:'true',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',displayFormat:'####/##/##',inputType:'text',style:'',id:'dueDt',value:'',mandatory:'true',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'140',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'70',inputType:'select',style:'',id:'billRecvStsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'180',inputType:'text',style:'',id:'autoRegYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'recDt',mandatory:'true',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'prtAmt',value:'',mandatory:'true',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'',mandatory:'true',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'trustBankbookNo',value:'',mandatory:'true',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'prtBankNm',value:'',mandatory:'true',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptCd',value:'',mandatory:'true',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:oncellclick':'scwin.gr_billReceivableDetail_oncellclick',scrollByColumnAdaptive:'false',scrollByColumn:'false',readOnly:'true',checkReadOnlyOnPasteEnable:'',visibleRowNumFix:'true',dataList:'data:ds_billReceivableDetail',resize:'true',style:'',columnMove:'true',id:'gr_billReceivableDetail',visibleRowNum:'4',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'seq',sortable:'true',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column41',sortable:'false',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'처리일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column35',sortable:'false',value:'처리전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',sortable:'false',value:'처리금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column56',sortable:'false',value:'취소여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',sortable:'false',value:'채권유형',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',sortable:'false',value:'수수료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',sortable:'false',value:'할인율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column44',value:'할인거래처',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{textAlign:'center',width:'50',inputType:'text',style:'',id:'seq',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'50',inputType:'select',style:'',id:'billRecvStsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',displayFormat:'####/##/##',inputType:'text',style:'',id:'procDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'130',inputType:'text',style:'',id:'procSlipNo',value:'',class:'underline txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',displayFormat:'#,##0',inputType:'text',style:'',id:'procAmt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.procCnclYn',textAlign:'center',width:'80',inputType:'text',style:'',id:'procCnclYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'100',inputType:'select',style:'',id:'mgntAcctRecvPatternCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',displayFormat:'#,##0',inputType:'text',style:'',id:'cmis',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',displayFormat:'#,###.#0',inputType:'text',style:'',id:'dcRt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'130',inputType:'text',style:'',id:'dcClntNo',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'받을어음관리번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_txt_billRecvMgntNo',style:'',maxlength:'7',mandatory:'true',objType:'data',ref:'data:ds_billReceivable.billRecvMgntNo',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_billRecvAcctCd',search:'start',style:'',submenuSize:'auto',allOption:'',ref:'data:ds_billReceivable.billRecvAcctCd',disabled:'false',displayMode:'value delim label',searchTarget:'both',mandatory:'true',objType:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'어음번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_txt_billRecvNo',ref:'data:ds_billReceivable.billRecvNo',style:'',mandatory:'true',objType:'data',maxlength:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'받을어음상태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'Id1_billRecvStsCd'},E:[{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_billRecvStsCd',search:'start',submenuSize:'auto',allOption:'',disabled:'false',displayMode:'value delim label',searchTarget:'both',mandatory:'true',objType:'key','ev:onviewchange':'scwin.acb_billRecvStsCd_onviewchange'}}]},{T:1,N:'xf:group',A:{id:'Id2_billRecvStsCd'},E:[{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_billRecvStsCd_all',search:'start',style:'',submenuSize:'auto',allOption:'',ref:'',disabled:'false',displayMode:'value delim label',searchTarget:'both',mandatory:'true',objType:'key','ev:onviewchange':'scwin.acb_billRecvStsCd_all_onviewchange'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수취일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_recDt',class:'',calendarValueType:'yearMonthDate',objType:'data',mandatory:'true',ref:'data:ds_billReceivable.recDt',title:'수취일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'발행일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_prtDt',class:'',calendarValueType:'yearMonthDate',objType:'data',mandatory:'true',ref:'data:ds_billReceivable.prtDt',title:'발행일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'만기일자 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_dueDt',class:'',calendarValueType:'yearMonthDate',objType:'data',mandatory:'true',ref:'data:ds_billReceivable.dueDt',title:'만기일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_clntNo',nameId:'ed_clntNm',btnId:'btn_clnt',validExpCode:'',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',objTypeCode:'key',objTypeName:'key',editTypeCode:'select',id:'udc_clntNoIn',mandatoryName:'false',editTypeName:'select',maxlengthName:'50',name:'clntNm',refDataCollection:'ds_billReceivable',code:'clntNo',mandatoryCode:'true',selectID:'retrieveClntList','ev:onblurCodeEvent':'scwin.udc_clntNoIn_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNoIn_onclickEvent','ev:onblurNameEvent':'scwin.udc_clntNoIn_onblurNameEvent',validTitle:'거래처',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'어음금액 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150 tar',id:'ed_prtAmt',objType:'key',mandatory:'true',ref:'data:ds_billReceivable.prtAmt',style:'',minNumber:'1',maxlength:'13',allowChar:'0-9',dataType:'number',displayFormat:'#,##0'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발행은행명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w100',id:'ed_bankCd',placeholder:'',style:';display:none;',objType:'data'}},{T:1,N:'xf:input',A:{id:'ed_prtBankNm',class:' w100',maxlength:'20',objType:'data',ref:'data:ds_billReceivable.prtBankNm',title:'발행은행명',maxByteLength:'30'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_bankCd',style:'',type:'button','ev:onclick':'scwin.udc_bankCd_onclickEvent'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발행은행명'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수탁은행통장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_trustBankbookNo',btnId:'btn_trustBankbook',validExpCode:'',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'5',editTypeCode:'select',nameId:'ed_trustBankbookNm',id:'udc_trustBankbook',editTypeName:'select',objTypeCode:'data',objTypeName:'key',maxlengthName:'20',name:'trustBankbookNm',refDataCollection:'ds_billReceivable',code:'trustBankbookNo',selectID:'retrieveBankBookCdInfo',mandatoryName:'false',validTitle:'수탁은행통장','ev:onblurCodeEvent':'scwin.udc_trustBankbook_onblurCodeEvent','ev:onclickEvent':'scwin.udc_trustBankbook_onclickEvent','ev:onblurNameEvent':'scwin.udc_trustBankbook_onblurNameEvent',mandatoryCode:'true',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'타수여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_obankCheckYn',ref:'data:ds_billReceivable.obankCheckYn',objType:'data',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_txt_chgRsn',style:'',ref:'data:ds_billReceivable.chgRsn',objType:'data',maxlength:'100'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',maxlengthCode:'5',btnId:'btn_acctDept',objTypeCode:'key',objTypeName:'key',allowCharCode:'0-9',code:'acctDeptCd',name:'acctDeptNm',refDataCollection:'ds_billReceivable',selectID:'retrieveAcctDeptCdInfo6',id:'udc_acctDeptCdIn',validTitle:'귀속부서','ev:onblurCodeEvent':'scwin.udc_acctDeptCdIn_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCdIn_onclickEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCdIn_onblurNameEvent',mandatoryCode:'true',maxlengthName:'20',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리사원',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_mgntEmpNm',nameId:'ed_mgntEmpNo',maxlengthCode:'20',btnId:'btn_mgntEmp',objTypeCode:'data',objTypeName:'key',code:'mgntEmpNm',name:'mgntEmpNo',refDataCollection:'ds_billReceivable',selectID:'retrieveEmpNoDeptInfo',id:'udc_mgntEmp',validTitle:'관리사원','ev:onblurCodeEvent':'scwin.udc_mgntEmp_onblurCodeEvent','ev:onclickEvent':'scwin.udc_mgntEmp_onclickEvent','ev:onblurNameEvent':'scwin.udc_mgntEmp_onblurNameEvent',maxlengthName:'6',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Add',style:'',type:'button',objType:'bUpdate',userAuth:'U','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Upt',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Del',style:'',type:'button',objType:'bDelete',userAuth:'D','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})