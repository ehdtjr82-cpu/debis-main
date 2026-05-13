/*amd /ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_04_01b.xml 52485 0b9f5de42f770ee0b8e6a902e0207f66d529e23c3128ba255dc49f1ded7d411c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchAcctRecv'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgFromDate',name:'청구 시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgToDate',name:'청구 종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'청구(수금)귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchStDate',name:'시작일자(부서검색시 이용되는 조건',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchEndDate',name:'종료일자(부서검색시 이용되는 조건',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctRecv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'체크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'체크수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvOutbrDt',name:'채권발생일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyIntendDt',name:'수금예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'청구금액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramt',name:'잔액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramt1',name:'잔액(원)1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'청구금액(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramtFcrc',name:'잔액(외)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramtFcrc1',name:'잔액(외)1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'통화코드Desc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCd',name:'청구(수금)귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptNm',name:'청구(수금)귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarExceptYn',name:'신고제외여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'branchCd',name:'지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchNm',name:'지점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtPatternCd',name:'계약유형코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_addAcctRecvEtcLoss',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchStDate',name:'시작일자(부서검색시 이용되는 조건)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchEndDate',name:'종료일자(부서검색시 이용되는 조건)',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_judge',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_judgeCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라메터1',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_judge',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_judgeCondition',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_judge_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchAcctRecv',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveAccountReceivableEtclossTargetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchAcctRecv","key":"IN_DS1"},{"id":"ds_acctRecv","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_acctRecv","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchAcctRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveAcctRecvEtcLoss',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RegistAccountReceivableEtclossCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_acctRecv","key":"IN_DS1"},{"action":"modified","id":"ds_addAcctRecvEtcLoss","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveAcctRecvEtcLoss_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 수금예정일자의 초기날짜를 구한다. 
//-------------------------------------------------------------------------
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01";
scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.

scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");
scwin.sChkUser = "0"; // 확정버튼 사용권한이 있는지여부 확인 초기값 false
scwin.empNo = $c.data.getMemInfo($p, "empNo");
scwin.AcctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
scwin.g_sUserId = scwin.empNo;
scwin.gJudgeYn = "0";
//-------------------------------------------------------------------------
// 전역변수를 선언한다.
//-------------------------------------------------------------------------
scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 
scwin.loginCoCd = $c.data.getMemInfo($p, "coCd");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.loginCoCd) ? '' : scwin.loginCoCd; // 소속 자회사
scwin.loginCoClsCd = $c.data.getMemInfo($p, "coClsCd");
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.loginCoClsCd) ? '' : scwin.loginCoClsCd;
; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 처리)
//-------------------------------------------------------------------------
// hidden
//-------------------------------------------------------------------------
scwin.txtCoClsCd = "";
scwin.hid_clntNo = "";
scwin.hid_acctDeptCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  try {
    //ASIS 히든,showfalse 그리드 필드정보
    /*
    gr_acctRecv.setColumnVisible("collMoneyAcctDeptNm", false);
    gr_acctRecv.setColumnVisible("ramt1", false);
    gr_acctRecv.setColumnVisible("ramtFcrc1", false);
    gr_acctRecv.setColumnVisible("acctCd", false);
     gr_acctRecv.setColumnVisible("collMoneyIntendDt", false);
    gr_acctRecv.setColumnVisible("cdEngNm", false);
    gr_acctRecv.setColumnVisible("checknum", false);
    gr_acctRecv.setColumnVisible("acctRecvNo", false);
    gr_acctRecv.setColumnVisible("collMoneyAcctDeptCd", false);
    gr_acctRecv.setColumnVisible("bilgAcctDeptCd", false);
    gr_acctRecv.setColumnVisible("sellAcctDeptCd", false);
    gr_acctRecv.setColumnVisible("clntNo", false);
    gr_acctRecv.setColumnVisible("coCd", false);
    gr_acctRecv.setColumnVisible("coClsCd", false);
    */

    //공통코드 적용 권한코드를
    const codeOptions = [{
      grpCd: "FM096",
      compID: ""
    }];
    $c.data.setCommonCode($p, codeOptions);

    //공통 getLuxeComboData
    const codeOptions2 = [{
      method: "getLuxeComboData",
      param1: "CollectionOfMoneyEBC",
      param2: "retrieveAccount1",
      compID: "acb_acctCd"
    }];
    $c.data.setGauceUtil($p, codeOptions2);
  } catch (e) {
    console.log("onpageload : " + e);
  }
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  try {
    //작업구분 정보정의
    let i = 0;
    for (i = 0; i < dlt_commonCodeFM096.getRowCount(); i++) {
      if (dlt_commonCodeFM096.getCellData(i, "cd") == scwin.empNo) {
        scwin.sChkUser = "1";
      }
    }
    if (scwin.sChkUser == "1") {
      $c.gus.cfEnableObjects($p, [acb_acctCd]);
      acb_acctCd.setSelectedIndex(0);
    } else {
      $c.gus.cfDisableObjects($p, [acb_acctCd]);
      acb_acctCd.setValue(ACConstants.ACCTCD_ETCLOSS);
    }
    $c.gus.cfDisableKey($p);
    scwin.f_Reset();
    scwin.f_retrieveJudge();
  } catch (e) {
    console.log("ondataload : " + e);
  }
};

//-------------------------------------------------------------------------
// 초기화 시킬 내역들 정의
//-------------------------------------------------------------------------
scwin.f_Reset = function (e) {
  ed_selectAmt.setValue("0");
  ed_selectAmtFcrc.setValue("0");
};

//-------------------------------------------------------------------------
// 수수료 10만원이상  입력 권한 조회.(그리드용)
//-------------------------------------------------------------------------
scwin.f_retrieveJudge = function () {
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveBorrowAcqKindInfo",
    param1: "FM092"
  };

  //데이터셋에 정보설정
  ds_judgeCondition.setJSON(params);
  $c.sbm.execute($p, sbm_judge);
};

//-------------------------------------------------------------------------
// 콜백
//-------------------------------------------------------------------------
scwin.sbm_judge_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  if (e.responseJSON.GAUCE) {
    ds_judge.setJSON(e.responseJSON.GAUCE);
    for (var i = 0; i < ds_judge.getRowCount(); i++) {
      if (ds_judge.getCellData(i, "col1") == scwin.g_sUserId) {
        scwin.gJudgeYn = "1";
        break;
      } else {
        scwin.gJudgeYn = "0";
      }
    }
  }
  console.log("scwin.g_sUserId ::: " + scwin.g_sUserId);
  console.log("scwin.gJudgeYn ::: " + scwin.gJudgeYn);
  ed_FromDate.setValue(scwin.strFromDate);
  ed_ToDate.setValue(scwin.strToDate);
  ed_wrkDt.setValue(scwin.strToDate); // 추가내역 작업일자 초기화
  ed_sclntNo.focus(); //조회 완료후 포커스 이동

  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function (e) {
  $c.gus.cfInitObjects($p, table1, []);
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
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
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
// 거래처코드
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '1', 'CD');
};

//-------------------------------------------------------------------------
// 거래처명
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sclntNo, ed_sclntNm, '1', 'NM');
};

//-------------------------------------------------------------------------
// 거래처찾기
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sclntNo, ed_sclntNm, '1', 'ALL');
};

//-------------------------------------------------------------------------
// 청구부서
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '2', 'CD');
};

//-------------------------------------------------------------------------
// 청구부서명
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '2', 'NM');
};

//-------------------------------------------------------------------------
// 청구부서찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_sacctDeptCd, ed_sacctDeptNm, '2', 'ALL');
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
// 1:조회->거래처, 2:조회->청구(수금)귀속부서, 3:조회->통장번호
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  try {
    let cd = "";
    let nm = "";
    let param = "";
    // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
    // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
    if (flag == "ALL") {
      cd = "";
      nm = "";
    } else {
      cd = orgObjCd.getValue();
      nm = orgObjNm.getValue();
    }
    switch (select_code) {
      // 조회조건용 거래처 PopUp 호출
      case '1':
        param = ed_coCd.getValue();
        //rtnList = cfCommonPopUp('retrieveClntEmpNoList',cd,nm,"T",null,null,null,null,param,null,null,null,null); // 거래처
        udc_clntNo.setSelectId('retrieveClntEmpNoList');
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
      //조회조건용 청구(수금)부서 PopUp 호출    
      case '2':
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
        //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6',cd, nm,"T",null,null,null,null,param,null,null,null,null); // 귀속부서
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
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
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
      ed_sclntNm.hidVal = rtnList[1]; // HIDDEN 코드명
    } else {
      ed_sclntNo.setValue("");
      ed_sclntNm.setValue("");
      ed_sclntNo.hidVal = "";
      ed_sclntNm.hidVal = "";
    }
  } catch (e) {
    console.log("udc_clntNo_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 청구부서 팝업 콜백(2)
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
      ed_sacctDeptNm.hidVal = rtnList[1]; // HIDDEN 코드명
    } else {
      ed_sacctDeptCd.setValue("");
      ed_sacctDeptNm.setValue("");
      ed_sacctDeptCd.hidVal = "";
      ed_sacctDeptNm.hidVal = "";
    }
  } catch (e) {
    console.log("udc_acctDeptCd_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 채권내역 및 수금수단 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    if (!$c.gus.cfIsAfterDate($p, ed_FromDate.getValue(), ed_ToDate.getValue())) {
      $c.gus.cfAlertMsg($p, "청구일자 시작일자는 종료일자보다 이전 날짜 이어야 합니다.");
      ed_FromDate.focus();
      return false;
      ;
    }

    // 조회 조건의 필수 입력 사항 체크
    let ret = await $c.gus.cfValidate($p, [ed_sacctDeptCd, ed_sclntNo, ed_FromDate, ed_ToDate]);
    if (!ret) {
      return false;
    }
    let ret2 = await $c.gus.cfValidate($p, [ed_coCd]);
    if (!ret2) {
      return false;
    }
    ds_searchAcctRecv.set("queryDeptSearchStDate", ed_FromDate.getValue());
    ds_searchAcctRecv.set("queryDeptSearchEndDate", ed_ToDate.getValue());
    $c.sbm.execute($p, sbm_searchAcctRecv);
  } catch (e) {
    console.log("f_Retrieve :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_searchAcctRecv_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) {
      scwin.hid_acctDeptCd = "";
      scwin.hid_clntNo = "";
      scwin.f_Reset();
      return; //onFail
    }
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_acctRecv.getRowCount()));
    if (ds_acctRecv.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    } else {
      scwin.hid_acctDeptCd = ed_sacctDeptCd.getValue();
      scwin.hid_clntNo = ed_sclntNo.getValue();
      scwin.f_Reset();
      $c.gus.cfGoPrevPosition($p, gr_acctRecv, 0); //첫번째 row 포지션이동
    }
  } catch (e) {
    console.log("sbm_searchAcctRecv_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 채권내역의 CheckBox 선택시 이벤트 발생
//-------------------------------------------------------------------------
scwin.gr_acctRecv_oncellclick = function (rowIndex, columnIndex, columnId) {
  try {
    if (ds_acctRecv.getCellData(rowIndex, "num") == "T" && columnId == "num" && ds_acctRecv.getCellData(rowIndex, "checkNum") == "F") {
      ed_selectAmt.setValue(parseInt(ed_selectAmt.getValue()) + parseInt(ds_acctRecv.getCellData(rowIndex, "ramt")));
      ed_selectAmtFcrc.setValue(parseInt(ed_selectAmtFcrc.getValue()) + parseInt(ds_acctRecv.getCellData(rowIndex, "ramtFcrc")));
      ds_acctRecv.setCellData(rowIndex, "checkNum", "T");
    } else if (ds_acctRecv.getCellData(rowIndex, "num") == "F" && columnId == "num" && ds_acctRecv.getCellData(rowIndex, "checkNum") == "T") {
      ed_selectAmt.setValue(parseInt(ed_selectAmt.getValue()) - parseInt(ds_acctRecv.getCellData(rowIndex, "ramt")));
      ed_selectAmtFcrc.setValue(parseInt(ed_selectAmtFcrc.getValue()) - parseInt(ds_acctRecv.getCellData(rowIndex, "ramtFcrc")));
      ds_acctRecv.setCellData(rowIndex, "checkNum", "F");
    }
  } catch (e) {
    console.log("gr_acctRecv_oncellclick " + e);
  }
};

//-------------------------------------------------------------------------
// 신용관리 파트만 금액 수정가능
//-------------------------------------------------------------------------
scwin.gr_acctRecv_onrowindexchange = function (rowIndex, oldRow) {
  let crcCd = ds_acctRecv.getCellData(rowIndex, "crcCd");
  if (scwin.sChkUser == "1") {
    if (crcCd == "KRW") {
      gr_acctRecv.setReadOnly("cell", rowIndex, "ramt", false); //ANY
      gr_acctRecv.setReadOnly("cell", rowIndex, "ramtFcrc", true); //None
    } else {
      gr_acctRecv.setReadOnly("cell", rowIndex, "ramt", true); //None
      gr_acctRecv.setReadOnly("cell", rowIndex, "ramtFcrc", false); //ANY
    }
  } else {
    gr_acctRecv.setReadOnly("cell", rowIndex, "ramt", true); //None
    gr_acctRecv.setReadOnly("cell", rowIndex, "ramtFcrc", true); //None
  }
};

//-------------------------------------------------------------------------
// ASIS  gr_acctRecv event=OnExit
//-------------------------------------------------------------------------
scwin.gr_acctRecv_onafteredit = function (rowIndex, columnIndex, value) {
  try {
    let colid = gr_paymgnt.getColumnID(columnIndex);
    if (colid == "ramt") {
      if (ds_acctRecv.getCellData(rowIndex, "ramt") > ds_acctRecv.getCellData(rowIndex, "ramt1")) {
        $c.win.alert($p, "잔액(원)보다 큰 금액은 입력하실수 없습니다.");
        ds_acctRecv.setCellData(rowIndex, "ramt", ds_acctRecv.getCellData(rowIndex, "ramt1"));
      } else if (ds_acctRecv.getCellData(rowIndex, "ramt") < ds_acctRecv.getCellData(rowIndex, "ramt1")) {
        lc_acctCd.setValue('6120220');
      }
    } else if (colid == "ramtFcrc") {
      if (ds_acctRecv.getCellData(rowIndex, "ramtFcrc") > ds_acctRecv.getCellData(rowIndex, "ramtFcrc1")) {
        $c.win.alert($p, "잔액(외)보다 큰 금액은 입력하실수 없습니다.");
        ds_acctRecv.setCellData(rowIndex, "ramtFcrc", ds_acctRecv.getCellData(rowIndex, "ramtFcrc1"));
      } else if (ds_acctRecv.getCellData(rowIndex, "ramtFcrc") < ds_acctRecv.getCellData(rowIndex, "ramtFcrc1")) {
        let ramtFcrcSum = ds_acctRecv.getCellData(rowIndex, "ramtFcrc");
        let exchRtSum = ds_acctRecv.getCellData(rowIndex, "exchRt");
        let Sum = ramtFcrcSum * exchRtSum;
        ds_acctRecv.setCellData(rowIndex, "ramt", Sum);
        lc_acctCd.setValue('6120220');
      }
    }
    let remain = 0;
    let remainFcrc = 0;
    if (colid == "ramt") {
      for (i = 0; i < ds_acctRecv.getRowCount(); i++) {
        if (ds_acctRecv.getCellData(i, "num") == "T") {
          remain = Number(remain) + Number(ds_acctRecv.getCellData(i, "ramt"));
        }
      }
      ed_selectAmt.setValue(remain);
    } else if (colid == "ramtFcrc") {
      for (i = 0; i < ds_acctRecv.getRowCount(); i++) {
        if (ds_acctRecv.getCellData(i, "num") == "T") {
          remain = Number(remain) + Number(ds_acctRecv.getCellData(i, "ramt"));
          remainFcrc = Number(remainFcrc) + Number(ds_acctRecv.getCellData(i, "ramtFcrc"));
        }
      }
      ed_selectAmt.setValue(remain);
      ed_selectAmtFcrc.setValue(remainFcrc);
    }
  } catch (e) {
    console.log("gr_acctRecv_onafteredit " + e);
  }
};

//-------------------------------------------------------------------------
// 수금등록 저장시
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  try {
    let ret = await $c.gus.cfValidate($p, [ed_sclntNo, ed_wrkDt, ed_FromDate, ed_ToDate, ed_sacctDeptCd]);
    if (!ret) {
      return false;
    }

    //귀속부서 및 거래처가 변경되었을 경우 재조회 후 잡손실 처리가 가능한게 함.
    if (scwin.hid_acctDeptCd.trim() == "" || scwin.hid_acctDeptCd != ed_sacctDeptCd.getValue().trim()) {
      $c.gus.cfAlertMsg($p, "청구(수금)부서가 변경되어 잡손실 처리가 불가능합니다. 재조회후 처리 하시기 바랍니다.");
      return false;
    }
    if (scwin.hid_clntNo.trim() == "" || scwin.hid_clntNo != ed_sclntNo.getValue().trim()) {
      $c.gus.cfAlertMsg($p, "거래처가 변경되어 잡손실 처리가 불가능합니다. 재조회후 처리 하시기 바랍니다.");
      return false;
    }

    // 채권이나 수금쪽에 Check 여부 확인
    let intAccountReceivable = 0;

    // 선택한 채권 금액을 구한다.
    for (i = 0; i < ds_acctRecv.getRowCount(); i++) {
      if (ds_acctRecv.getCellData(i, "num") == "T") {
        intAccountReceivable++;
      }
    }
    if (intAccountReceivable == 0) {
      $c.gus.cfAlertMsg($p, "채권 항목은 최소 1개이상 선택 하셔야 합니다.");
      return false;
    }
    let ramt = 0;
    for (i = 0; i < ds_acctRecv.getRowCount(); i++) {
      //잡손실은  10000원 이상을 초과할 수 없음 .본사채권파트 만 입력이 가능하다 (2007.04.25-신종민 )
      if (ds_acctRecv.getCellData(i, "num") == "T") {
        ramt = Number(ramt) + Number(ds_acctRecv.getCellData(i, "ramt")); // ramt + ds_acctRecv.getCellData(i,"ramt") ;
      }
    }
    if (scwin.gJudgeYn == "0" && ramt > 10000) {
      $c.gus.cfAlertMsg($p, "잡손등록은   10000이상 초과 할 수 없습니다 .");
      return false;
    }
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      //ASIS 추가수금내역 Data Bind
      ds_addAcctRecvEtcLoss.insertRow(0);
      ds_addAcctRecvEtcLoss.setCellData(0, "wrkDt", ed_wrkDt.getValue()); //작업일자
      ds_addAcctRecvEtcLoss.setCellData(0, "acctCd", acb_acctCd.getValue()); //계정코드
      ds_addAcctRecvEtcLoss.setCellData(0, "queryDeptSearchStDate", ed_FromDate.getValue()); //시작일자(부서검색시 이용되는 조건)
      ds_addAcctRecvEtcLoss.setCellData(0, "queryDeptSearchEndDate", ed_ToDate.getValue()); //종료일자(부서검색시 이용되는 조건)

      ed_wrkDt.setValue(scwin.strToDate); // 추가내역 작업일자 초기
      $c.sbm.execute($p, sbm_saveAcctRecvEtcLoss);
    }
  } catch (e) {
    console.log("f_Save " + e);
  }
};
//-------------------------------------------------------------------------
// 저장 콜백
//-------------------------------------------------------------------------
scwin.sbm_saveAcctRecvEtcLoss_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  } catch (e) {
    console.log("sbm_saveAcctRecvEtcLoss_submitdone : " + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'table1',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_sclntNo',validExpCode:'',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_sclntNm',id:'udc_clntNo',editTypeName:'select',maxlengthName:'50',refDataCollection:'ds_searchAcctRecv',code:'clntNo',selectID:'retrieveClntEmpNoList','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent',validTitle:'거래처',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_searchAcctRecv',refEdDt:'bilgToDate',refStDt:'bilgFromDate',style:'',edFromId:'ed_FromDate',mandatoryFrom:'true',mandatoryTo:'true',edToId:'ed_ToDate',objTypeTo:'data',objTypeFrom:'data'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width:250px;',class:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',objTypeName:'data',mandatoryCode:'true',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'3',id:'udc_coCd',refDataCollection:'ds_searchAcctRecv',code:'coCd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_sacctDeptCd',nameId:'ed_sacctDeptNm',maxlengthCode:'5',allowCharCode:'0-9',code:'acctDeptCd',refDataCollection:'ds_searchAcctRecv',selectID:'retrieveAcctDeptCdInfo6',id:'udc_acctDeptCd',validTitle:'청구부서','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent',mandatoryName:'true',mandatoryCode:'true',maxlengthName:'20',objTypeCode:'data',objTypeName:'data',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'채권내역(대변)',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'N',gridUpYn:'N',gridID:'gr_acctRecv'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_acctRecv',id:'gr_acctRecv',style:'',visibleRowNum:'12',visibleRowNumFix:'true',readOnly:'true',resize:'true',columnMove:'true',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_acctRecv_oncellclick','ev:onrowindexchange':'scwin.gr_acctRecv_onrowindexchange','ev:onafteredit':'scwin.gr_acctRecv_onafteredit',autoFit:'lastColumn'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'num',inputType:'text',value:'선택',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntNo',inputType:'text',value:'세금계산서번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctRecvOutbrDt',inputType:'text',value:'청구일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyAcctDeptNm',inputType:'text',value:'청구(수금)부서',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAcctDeptNm',inputType:'text',value:'매출부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',value:'계정코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',value:'청구금액(원)',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ramt',inputType:'text',value:'잔액(원)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ramt1',inputType:'text',value:'잔액(원)---',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtFcrc',inputType:'text',value:'청구금액(외)',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ramtFcrc',value:'잔액(외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ramtFcrc1',value:'잔액(외)---',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crcCd',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'exchRt',value:'환율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'summary',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctCd',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'collMoneyIntendDt',value:'수금예정일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'cdEngNm',value:'통화코드Desc ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'checknum',value:'CheckBox검사용',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctRecvNo',value:'채권번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'collMoneyAcctDeptCd',value:'청구(수금)귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'bilgAcctDeptCd',value:'청구귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'sellAcctDeptCd',value:'매출귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNo',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coCd',value:'회사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column76',value:'회사구분코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'num',inputType:'checkbox',width:'70',trueValue:'T',falseValue:'F',valueType:'other',checkAlways:'true',readOnly:'false',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntNo',inputType:'text',width:'130',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctRecvOutbrDt',inputType:'text',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyAcctDeptNm',inputType:'text',width:'150',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAcctDeptNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ramt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ramt1',inputType:'text',width:'120',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtFcrc',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ramtFcrc',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ramtFcrc1',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crcCd',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'exchRt',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'summary',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'collMoneyIntendDt',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'cdEngNm',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'checknum',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctRecvNo',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'collMoneyAcctDeptCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'bilgAcctDeptCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'sellAcctDeptCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'clntNo',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'coCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'coClsCd',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum(\'amt\')',textAlign:'right',displayFormat:'#,##0',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',expression:'sum(\'ramt\')',textAlign:'right',displayFormat:'#,##0',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum(\'amtFcrc\')',textAlign:'right',displayFormat:'#,##0',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',expression:'sum(\'ramtFcrc\')',textAlign:'right',displayFormat:'#,##0',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column78',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'amt-wrap',id:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선택금액(원)',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_selectAmt',placeholder:'',style:'',objType:'key',mandatory:'true',title:'선택금액(원)',maxlength:'20',allowChar:'0-9',displayFormat:'#,##0',dataType:'number'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선택금액(외)',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_selectAmtFcrc',placeholder:'',style:'',objType:'key',mandatory:'true',title:'선택금액(외)',maxlength:'20',allowChar:'0-9',displayFormat:'#,##0',dataType:'number'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_wrkDt',title:'작업일자',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_acctCd',search:'start',style:'',submenuSize:'auto',allOption:'',disabled:'false',displayMode:'value delim label',searchTarget:'both'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button',objType:'bSave',userAuth:'C','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'처리'}]}]}]}]}]}]}]}]}]}]})