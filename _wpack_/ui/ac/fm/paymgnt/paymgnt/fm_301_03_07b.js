/*amd /ui/ac/fm/paymgnt/paymgnt/fm_301_03_07b.xml 71934 e52814db441980d7d9279d6981b4edd25727ec4c0cb73111ce4db63a61c587bd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'payStsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payMthdCd',name:'지급방법',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnDt',name:'확정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqAcctDeptCd',name:'발생부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payment',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befPayStsCd',name:'이전지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'지급수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'요청금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reqExchRt',name:'요청환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'발생전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctCd',name:'발생계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'발생계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'발생적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'발생귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'발생귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankCd',name:'지급은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'지급계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnEmpNo',name:'확정사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'지급전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'지급환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'지급금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'결제원금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'지급통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addupDivsCd',name:'합산분할코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refPayNo',name:'참조지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firmBankYn',name:'펌뱅킹여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'납기일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffYn',name:'상계여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'admitCnclDt',name:'승인취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNo',name:'승인사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNm',name:'승인사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDocOvrDd',name:'계약서초과일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClntNo',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'CHECKNUM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reserRsn',name:'보류사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclRsn',name:'해제사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNo',name:'요청자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'요청귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitDt',name:'해제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitEmpNo',name:'해제사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveDate',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'증빙개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'postDt2',name:'회계처리일자2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId2',name:'등록자ID2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm2',name:'등록자명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interPayDt',name:'국제기브일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interDataYn',name:'국제데이터여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'status',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errCont',name:'오류내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errYn',name:'오류여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'받을어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'beClntNm',name:'이전거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtDt',name:'발행일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'writeDt',name:'e새로작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueSlipNo',name:'만기전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDd',name:'어음일수',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchBillRecv'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromDate',name:'만기일자시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDate',name:'만기일자종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billRecvStsCd',name:'받을어음상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'billRecvMgntNo',name:'받을어음관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_billRecv',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'선택여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvStsCd',name:'받을어음상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'납기일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvAcctNm',name:'받릉어음계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvNo',name:'받을어음번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procAmt',name:'처리금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procSlipNo',name:'처리전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvAcctCd',name:'받을어음계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'받을어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfBillRecvMgntNo',name:'이전어음관리번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankcd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCdNm',name:'은행명',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_bankcd_Retrieve',action:'/ac.fm.stdinfomgnt.RetrieveBankCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_bankcd_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrievePaymgnt',action:'/ac.fm.paymgnt.paymgnt.RetrievePaymentContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_payment","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_payment","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievePaymgnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveBillRecv',action:'/ac.fm.paymgnt.paymgnt.RetrievePaymentBillReceivableCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchBillRecv","key":"IN_DS1"},{"id":"ds_billRecv","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_billRecv","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveBillRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_savePayDecision',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_payment","key":"IN_DS1"},{"action":"modified","id":"ds_billRecv","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_savePayDecision_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");
// 상태코드 상수
scwin.PREPARESTS = "00"; // 준비
scwin.RESERVESTS = "10"; // 보류
scwin.WAITSTS = "20"; // 대기
scwin.DECIDESTS = "30"; // 결정
scwin.DECISIONSTS = "40"; // 확정
scwin.COMPLETE = "50"; // 완료

// 지급방법코드 상수
scwin.BILL_RECV = "86"; // 받을어음
scwin.errYn = "N"; // 오류

scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 
scwin.loginCoCd = $c.data.getMemInfo($p, "coCd");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.loginCoCd) ? '' : scwin.loginCoCd; // 소속 자회사
scwin.loginCoClsCd = $c.data.getMemInfo($p, "coClsCd");
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.loginCoClsCd) ? '' : scwin.loginCoClsCd;
; //회계_회사구분('CO035' : 0:동부 EXPRESS)	
scwin.isSubCompany = false;
scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.cellClickData = false; //채무내역 셀 클릭시 f_Retrieve1 여부
scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 처리)
//-------------------------------------------------------------------------
// hidden
//-------------------------------------------------------------------------
scwin.txtCoClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "FM018",
    compID: "lc_payMthdCd",
    opt: {
      "range": "2,40"
    }
  }, {
    grpCd: "FM017",
    compID: "gr_paymgnt:payStsCd"
  }, {
    grpCd: "FM015",
    compID: "gr_billRecv:billRecvStsCd"
  }, {
    grpCd: "FM014",
    compID: "gr_billRecv:billRecvAcctCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  //공통코드재매핑.
  let dltStr = "dlt_commonCodeFM017"; // FM017 코드의 dataList
  let dlt = $c.gus.object($p, dltStr);
  $c.gus.copy($p, dltStr, "dlt_commonCodeFM017_1", true); // dlt_commonCodeFM017_1 으로 dataList 을 복사

  let dlt2 = $c.gus.object($p, "dlt_commonCodeFM017_1"); // 객체화
  $c.data.dataListFilter($p, dlt2, "fltrCd2 == '40'"); // 새로운 데이터리스트에 필터 lc_payStsCd GauceUtil.getCodeList("FM017", 2, "40")
  lc_payStsCd.setNodeSet("data:dlt_commonCodeFM017_1", "cdNm", "cd"); // selectBox 에 새로운 데이터리스트로 매핑
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
    if (scwin.isStarted == true) {
      if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
        // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
        $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      } else {
        $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
      }
      ed_selAmt.setValue(0);
      lc_payStsCd.setSelectedIndex(0);
      lc_payMthdCd.setSelectedIndex(0);
      ed_dcsnDt.setValue(scwin.g_sCurrDate);
      ed_FromDate.setValue(scwin.g_sCurrDate);
      ed_ToDate.setValue(scwin.g_sCurrDate);
      scwin.f_bankcd_Retrieve();
    }
  } catch (e) {
    console.log("udc_coCd_callBackFunc" + e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_bankcd_Retrieve = function () {
  $c.sbm.execute($p, sbm_bankcd_Retrieve);
};

//-------------------------------------------------------------------------
// 조회(은행조회) 콜백
//-------------------------------------------------------------------------
scwin.sbm_bankcd_Retrieve_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    if (e.responseJSON.GAUCE) {
      ds_bankcd.setJSON(e.responseJSON.GAUCE);
    }
  } catch (e) {
    console.log("sbm_bankcd_Retrieve_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    ds_payment.removeAll();
    let ret = await $c.gus.cfValidate($p, [ed_coCd]);
    if (!ret) {
      return false;
    }
    let ret2 = await $c.gus.cfValidate($p, [ed_dcsnDt]);
    if (!ret2) {
      return false;
    }
    if (ret && ret2) {
      ed_selAmt.setValue(0);
      const params = {
        coClsCd: scwin.txtCoClsCd
      };
      //데이터셋에 정보설정
      ds_condition.setJSON(params);
      $c.sbm.execute($p, sbm_retrievePaymgnt);
    }
  } catch (e) {
    console.log("f_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrievePaymgnt_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_payment.getRowCount()));
    if (ds_payment.getRowCount() == 0) {
      await $c.win.alert($p, "조회된 데이터가 없습니다");
      $c.gus.cfDisableObjects($p, [btn_Confirm, btn_Cancel]);
    } else {
      if (lc_payStsCd.getValue() == scwin.DECIDESTS) {
        $c.gus.cfEnableObjects($p, [btn_Confirm]);
        $c.gus.cfDisableObjects($p, [btn_Cancel]);
      } else if (lc_payStsCd.getValue() == scwin.DECISIONSTS) {
        $c.gus.cfDisableObjects($p, [btn_Confirm]);
        $c.gus.cfEnableObjects($p, [btn_Cancel]);
      }
      ds_payment.sort("payNo", 0); //SortExpr +payNo

      $c.gus.cfGoPrevPosition($p, gr_paymgnt, 0); //첫번째 row 포지션이동
    }
  } catch (e) {
    console.log("sbm_retrievePaymgnt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function (e) {
  $c.gus.cfInitObjects($p, table1, null);
  //ASIS사유를 모르겠지만 그리드 정보도 초기화되어 추가함.
  ds_payment.removeAll();
  ds_billRecv.removeAll();
  ed_dcsnDt.setValue(scwin.g_sCurrDate);
  scwin.f_setCompanyInfo();
};
scwin.f_initObj = function () {
  try {
    $c.gus.cfInitObjects($p, [ed_reqAcctDeptCd, ed_reqAcctDeptNm]); //  귀속부서
    $c.gus.cfInitObjects($p, [ed_clntNo, ed_clntNm]); //거래처	  	  	
  } catch (e) {
    console.log("f_initObj >" + e);
  }
};

//-------------------------------------------------------------------------
// 초기화(하단)
//-------------------------------------------------------------------------
scwin.f_InitObjects2 = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_payment.getRowCount() <= 0) {
    await $c.win.alert($p, "지급내역이 존재하지않습니다.");
    return false;
  }
  const options = {
    fileName: "채무.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: "채무",
    bodyWordwrap: true // 줄바꿈
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_paymgnt, options, infoArr);
};

//-------------------------------------------------------------------------
// 엑셀저장(하단)
//-------------------------------------------------------------------------
scwin.f_GridToExcel2 = async function () {
  if (ds_billRecv.getRowCount() <= 0) {
    await $c.win.alert($p, "지급내역이 존재하지않습니다.");
    return false;
  }
  const options = {
    fileName: "받을어음.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: "받을어음",
    bodyWordwrap: true // 줄바꿈
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_billRecv, options, infoArr);
};

//-------------------------------------------------------------------------
// 받을어음조회
//-------------------------------------------------------------------------
scwin.f_Retrieve1 = async function () {
  try {
    let ret = await $c.gus.cfValidate($p, [ed_coCd]);
    if (!ret) {
      return false;
    }
    let ret2 = await $c.gus.cfValidate($p, [ed_FromDate]);
    if (!ret2) {
      return false;
    }
    let ret3 = await $c.gus.cfValidate($p, [ed_ToDate]);
    if (!ret3) {
      return false;
    }
    if (!$c.gus.cfIsAfterDate($p, ed_FromDate.getValue(), ed_ToDate.getValue())) {
      await $c.win.alert($p, "조회 만기 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
      ed_FromDate.focus();
      return false;
      ;
    }
    if (ds_condition.get("payStsCd") == scwin.DECIDESTS) {
      ds_searchBillRecv.set("billRecvStsCd", "30");
    } else {
      ds_searchBillRecv.set("billRecvStsCd", "90");
      ds_searchBillRecv.set("billRecvStsCd", ds_payment.getCellData(ds_payment.getRowPosition(), "billRecvMgntNo"));
    }
    ds_searchBillRecv.set("coCd", ed_coCd.getValue());
    ds_searchBillRecv.set("coClsCd", scwin.txtCoClsCd);
    $c.sbm.execute($p, sbm_retrieveBillRecv);
  } catch (e) {
    console.log("f_Retrieve1 >" + e);
  }
};

//-------------------------------------------------------------------------
// 받을어음조회 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieveBillRecv_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    tbx_totalRows2.setValue($c.gus.cfInsertComma($p, ds_billRecv.getRowCount()));
    if (ds_billRecv.getRowCount() == 0) {
      //await $c.win.alert("조회된 데이터가 없습니다");
      //cfCheckCreateFlag() == true cfCheckCreateFlag()가 true이면 조회 건수가 0건이라도 별도의 메시지를 출력하도록 하지 않는다.
    } else {
      $c.gus.cfGoPrevPosition($p, gr_billRecv, 0); //첫번째 row 포지션이동

      if (scwin.cellClickData == true) {
        //채무내역 셀 클릭시 f_Retrieve1를 조회한 경우
        ds_billRecv.setCellData(0, "num", "T");
      }
    }
  } catch (e) {
    console.log("sbm_retrieveBillRecv_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_Reset = async function () {
  try {
    ds_payment.removeAll();
    ds_billRecv.removeAll();
    ds_searchBillRecv.set("billRecvMgntNo", "");
  } catch (e) {
    console.log("f_Reset >" + e);
  }
};

//-------------------------------------------------------------------------
// 채무내역 셀 클릭시
//-------------------------------------------------------------------------
scwin.gr_paymgnt_oncellclick = function (rowIndex, columnIndex, columnId) {
  try {
    let Colid = columnId;
    scwin.cellClickData = false;
    if (Colid == "paySlipNo" && rowIndex >= 0) {
      if (!(ds_payment.getCellData(rowIndex, "paySlipNo") == null || ds_payment.getCellData(rowIndex, "paySlipNo") == "")) {
        $c.gus.cfShowSlipInfo($p, ds_payment.getCellData(rowIndex, "paySlipNo"));
      }
    } else if (Colid == "outbrSlipNo" && rowIndex >= 0) {
      if (!(ds_payment.getCellData(rowIndex, "outbrSlipNo") == null || ds_payment.getCellData(rowIndex, "outbrSlipNo") == "")) {
        $c.gus.cfShowSlipInfo($p, ds_payment.getCellData(rowIndex, "outbrSlipNo"));
      }
    } else {
      if (ds_condition.get("payStsCd") == scwin.DECISIONSTS) {
        scwin.f_Retrieve1();
        scwin.cellClickData = true; //ds_billRecv.setCellData(0, "num", "T");//TODO 처리확인 필요
      }
    }
    if (Colid != "paySlipNo" && Colid != "outbrSlipNo" && ds_condition.get("payStsCd") == scwin.DECISIONSTS) {
      for (i = 0; i < ds_payment.getRowCount(); i++) {
        if (ds_payment.getCellData(rowIndex, "billRecvMgntNo") == ds_payment.getCellData(i, "billRecvMgntNo")) {
          ds_payment.setCellData(i, "selYn", 1);
        } else {
          ds_payment.setCellData(i, "selYn", 0);
        }
      }
      ds_billRecv.setCellData(0, "num", "T"); //ds_billRecv.getCellData(1,"num") = "T";
    }
    if (ds_payment.getCellData(rowIndex, "selYn") == 1 && Colid == "selYn" && ds_payment.getCellData(rowIndex, "checkNum") == 0 && ds_condition.get("payStsCd") == scwin.DECIDESTS) {
      ed_selAmt.setValue(parseInt(ed_selAmt.text) + parseInt(ds_payment.getCellData(rowIndex, "payAmt")));
      ds_payment.setCellData(rowIndex, "checkNum", 1);
    } else if (ds_payment.getCellData(rowIndex, "selYn") == 0 && Colid == "selYn" && ds_payment.getCellData(rowIndex, "checkNum") == 1 && ds_condition.get("payStsCd") == scwin.DECIDESTS) {
      ed_selAmt.setValue(parseInt(ed_selAmt.text) - parseInt(ds_payment.getCellData(rowIndex, "payAmt")));
      ds_payment.setCellData(rowIndex, "checkNum", 0);
    }
  } catch (e) {
    console.log("gr_paymgnt_oncellclick >" + e);
  }
};

//-------------------------------------------------------------------------
// 받을어음음 셀 클릭시
//-------------------------------------------------------------------------
scwin.gr_billRecv_oncellclick = function (rowIndex, columnIndex, columnId) {
  try {
    let Colid = columnId;
    if (Colid == "procSlipNo" && rowIndex >= 0) {
      if (!(ds_billRecv.getCellData(rowIndex, "procSlipNo") == null || ds_billRecv.getCellData(rowIndex, "procSlipNo") == "")) {
        $c.gus.cfShowSlipInfo($p, ds_billRecv.getCellData(rowIndex, "procSlipNo"));
      }
    }
    if (Colid == "num") {
      for (i = 0; i < ds_billRecv.getRowCount(); i++) {
        if (rowIndex != i) {
          ds_billRecv.setCellData(i, "num", 0);
        }
      }
    }
    if (ds_payment.getCellData(rowIndex, "selYn") == 1 && Colid == "selYn" && ds_payment.getCellData(rowIndex, "checkNum") == 0) {
      ed_selAmt.setValue(parseInt(ed_selAmt.text) + parseInt(ds_payment.getCellData(rowIndex, "payAmt")));
      ds_payment.setCellData(rowIndex, "checkNum", 1);
    } else if (ds_payment.getCellData(rowIndex, "selYn") == 0 && Colid == "selYn" && ds_payment.getCellData(rowIndex, "checkNum") == 1) {
      ed_selAmt.setValue(parseInt(ed_selAmt.text) - parseInt(ds_payment.getCellData(rowIndex, "payAmt")));
      ds_payment.setCellData(rowIndex, "checkNum", 0);
    }
  } catch (e) {
    console.log("gr_billRecv_oncellclick >" + e);
  }
};

//-------------------------------------------------------------------------
// 상태정보 변경시
//-------------------------------------------------------------------------
scwin.lc_payStsCd_onviewchange = function (info) {
  scwin.f_Reset();
};

//-------------------------------------------------------------------------
// 거래처코드
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '2');
};

//-------------------------------------------------------------------------
// 거래처명
//-------------------------------------------------------------------------
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpNm('2', ed_clntNo, ed_clntNm, 'T');
};

//-------------------------------------------------------------------------
// 거래처찾기
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_clntNo, ed_clntNm, 'F');
};

//-------------------------------------------------------------------------
// 부서코드
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_reqAcctDeptCd, ed_reqAcctDeptNm, '1');
};
//-------------------------------------------------------------------------
// 부서명
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpNm('1', ed_reqAcctDeptCd, ed_reqAcctDeptNm, 'T');
};
//-------------------------------------------------------------------------
// 부서찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_reqAcctDeptCd, ed_reqAcctDeptNm, 'F');
};

//-------------------------------------------------------------------------
// 사업자코드
//-------------------------------------------------------------------------
scwin.udc_crn_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_crn, ed_txt_crn, '3');
};
//-------------------------------------------------------------------------
// 사업자명
//-------------------------------------------------------------------------
scwin.udc_crn_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpNm('3', ed_crn, ed_txt_crn, 'T');
};
//-------------------------------------------------------------------------
// 사업자찾기
//-------------------------------------------------------------------------
scwin.udc_crn_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_crn, ed_txt_crn, 'F');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  try {
    if (orgObjCd.getValue() != orgObjCd.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, "T");
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
      orgObjCd.hidVal = "";
    }
  } catch (e) {
    console.log("f_CheckPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (select_code, txtCode, txtName, sFlag) {
  try {
    let code = '';
    let name = '';
    let param = '';
    code = txtCode.getValue();
    name = txtName.getValue();
    if (select_code == '1' || select_code == '2') {
      //자회사 회계시스템 추가사항 - 부서,거래처 선택시 회사코드 필수( 2016.09.21)
      let ret = await $c.gus.cfValidate($p, [ed_coCd]);
      if (!ret) {
        return false;
      }
    }
    switch (select_code) {
      // 관리부서 PopUp 호출 udc_acctDeptCd
      case '1':
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd; //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null,null,null,null,null); // 부서
        udc_acctDeptCd.setSelectId('retrieveAcctDeptCdInfo6');
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc // 콜백 함수
        , code // 화면에서의  Code Element의 Value
        , name // 화면에서의  Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
      // 거래처 PopUp 호출
      case '2':
        param = ",,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null,null,"F",null,null); // 거래처
        udc_clntNo.setSelectId('retrieveClntList');
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
        , code // 화면에서의  Code Element의 Value
        , name // 화면에서의  Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 거래처 PopUp 호출
      case '3':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 사업자번호
        udc_crn.setSelectId('retrieveCrnInfo');
        udc_crn.cfCommonPopUp(scwin.udc_crn_callBackFunc // 콜백 함수
        , code // 화면에서의  Code Element의 Value
        , name // 화면에서의  Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};
scwin.f_openPopUpNm = async function (select_code, txtCode, txtName, sFlag) {
  try {
    let code = '';
    let name = '';
    let param = '';
    code = "";
    name = txtName.getValue();
    if (select_code == '1' || select_code == '2') {
      //자회사 회계시스템 추가사항 - 부서,거래처 선택시 회사코드 필수( 2016.09.21)
      let ret = await $c.gus.cfValidate($p, [ed_coCd]);
      if (!ret) {
        return false;
      }
    }
    switch (select_code) {
      // 관리부서 PopUp 호출 udc_acctDeptCd
      case '1':
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd; //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null); // 관리부서
        udc_acctDeptCd.setSelectId('retrieveAcctDeptCdInfo6');
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc // 콜백 함수
        , code // 화면에서의  Code Element의 Value
        , name // 화면에서의  Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
      // 거래처 PopUp 호출
      case '2':
        param = ",,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null,null,"F",null,null); // 거래처
        udc_clntNo.setSelectId('retrieveClntList');
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
        , code // 화면에서의  Code Element의 Value
        , name // 화면에서의  Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 거래처 PopUp 호출
      case '3':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 사업자번호
        udc_crn.setSelectId('retrieveCrnInfo');
        udc_crn.cfCommonPopUp(scwin.udc_crn_callBackFunc // 콜백 함수
        , code // 화면에서의  Code Element의 Value
        , name // 화면에서의  Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_openPopUpNm : " + e);
  }
};

//-------------------------------------------------------------------------
// 거래처 PopUp 콜백
//-------------------------------------------------------------------------
scwin.udc_clntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        ed_clntNo.setValue("");
        ed_clntNm.setValue("");
        ed_clntNo.hidVal = "";
        return;
      }
      ed_clntNo.setValue(rtnList[0]); // 코드값
      ed_clntNm.setValue(rtnList[1]); // 코드명
      ed_clntNo.hidVal = rtnList[0]; // 코드
    } else {
      ed_clntNo.setValue("");
      ed_clntNm.setValue("");
      ed_clntNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_clntNo_callBackFunc " + e);
  }
};

//-------------------------------------------------------------------------
// 사업자번호 PopUp 콜백
//-------------------------------------------------------------------------
scwin.udc_crn_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        ed_crn.setValue("");
        ed_txt_crn.setValue("");
        ed_crn.hidVal = "";
        return;
      }
      ed_crn.setValue(rtnList[0]); // 코드값
      ed_txt_crn.setValue(rtnList[1]); // 코드명
      ed_crn.hidVal = rtnList[0]; // 코드
    } else {
      ed_crn.setValue("");
      ed_txt_crn.setValue("");
      ed_crn.hidVal = "";
    }
  } catch (e) {
    console.log("udc_crn_callBackFunc " + e);
  }
};

//-------------------------------------------------------------------------
// 부서 PopUp 콜백
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        ed_reqAcctDeptCd.setValue("");
        ed_reqAcctDeptNm.setValue("");
        ed_reqAcctDeptCd.hidVal = "";
        return;
      }
      ed_reqAcctDeptCd.setValue(rtnList[0]); // 코드값
      ed_reqAcctDeptNm.setValue(rtnList[1]); // 코드명
      ed_reqAcctDeptCd.hidVal = rtnList[0]; // 코드
    } else {
      ed_reqAcctDeptCd.setValue("");
      ed_reqAcctDeptNm.setValue("");
      ed_reqAcctDeptCd.hidVal = "";
    }
  } catch (e) {
    console.log("udc_acctDeptCd_callBackFunc " + e);
  }
};

//-------------------------------------------------------------------------
// 확정
//-------------------------------------------------------------------------
scwin.fn_decision = async function (e) {
  try {
    let i = 0;
    let cnt = 0;
    let cntDd = 0;
    let selDate = "";
    let paymentAmtSum = 0;
    let billRecvAmtSum = 0;
    let billCnt = 0;
    if (ds_payment.getRowCount() == false) {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_049, "자료"));
      return false;
    }
    for (i = 0; i < ds_billRecv.getRowCount(); i++) {
      if (ds_billRecv.getRowStatus(i) != "R" && ds_billRecv.getCellData(i, "num") == "T") {
        billCnt++;
        billRecvAmtSum += BigInt(ds_billRecv.getCellData(i, "procAmt"));
        selDate = ds_billRecv.getCellData(i, "dueDt");
      }
    }
    if (billCnt != 1) {
      await $c.win.alert($p, "확정할 받을어음 자료가 존재하지않습니다.");
      return false;
    }
    for (i = 0; i < ds_payment.getRowCount(); i++) {
      if (ds_payment.getRowStatus(i) != "R" && ds_payment.getCellData(i, "selYn") == 1) {
        cnt++;
        paymentAmtSum += BigInt(ds_payment.NameValue(i, "payAmt"));
        if (ds_payment.getCellData(i, "dcsnDt") > selDate) {
          cntDd++;
        }
      }
    }
    if (cnt <= 0) {
      await $c.win.alert($p, "확정할 자료가 존재하지않습니다");
      return false;
    }
    if (cntDd > 0) {
      await $c.win.alert($p, "확정일자는 만기일자 이전이어야 합니다.");
      return false;
    }
    if (paymentAmtSum > billRecvAmtSum) {
      await $c.win.alert($p, "받을어음 금액보다 채무금액이 작아야 합니다.");
      return false;
    }
    let ret = await $c.gus.cfValidate($p, [gr_paymgnt, gr_billRecv]);
    if (!ret) {
      return false;
    }
    if (await $c.win.confirm($p, "확정하시겠습니까?")) {
      for (i = 0; i < ds_payment.getRowCount(); i++) {
        if (ds_payment.getRowStatus(i) != "R" && ds_payment.getCellData(i, "selYn") == 1) {
          ds_payment.setCellData(i, "payStsCd", scwin.DECISIONSTS);
        }
      }
      sbm_savePayDecision.action = "/ac.fm.paymgnt.paymgnt.ProcessBillRecvDecisionCMD.do";
      $c.sbm.execute($p, sbm_savePayDecision);
    }
  } catch (e) {
    console.log("fn_decision " + e);
  }
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.fn_cancel = async function (e) {
  try {
    let i = 0;
    let cnt = 0;
    let billCnt = 0;
    let errYn = "N"; //ASIS fn_cancel('N')

    if (ds_payment.getRowCount() == false) {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_049, "자료"));
      return false;
    }
    for (i = 0; i < ds_payment.getRowCount(); i++) {
      if (ds_payment.getRowStatus(i) != "R" && ds_payment.getCellData(i, "selYn") == 1) {
        cnt++;
      }
    }
    if (cnt <= 0) {
      await $c.win.alert($p, "취소할 자료가 존재하지않습니다");
      return false;
    }
    for (i = 0; i < ds_billRecv.getRowCount(); i++) {
      if (ds_billRecv.getRowStatus(i) != "R" && ds_billRecv.getCellData(i, "num") == "T") {
        billCnt++;
      }
    }
    if (billCnt != 1) {
      await $c.win.alert($p, "취소할 받을어음 자료가 존재하지않습니다.");
      return false;
    }
    let ret = await $c.gus.cfValidate($p, [gr_paymgnt]);
    if (!ret) {
      return false;
    }
    if (await $c.win.confirm($p, "취소하시겠습니까?")) {
      for (i = 0; i < ds_payment.getRowCount(); i++) {
        if (ds_payment.getRowStatus(i) != "R" && ds_payment.getCellData(i, "selYn") == 1) {
          ds_payment.setCellData(i, "payStsCd", scwin.DECIDESTS);
          if (errYn == "Y") {
            //오류취소 여부
            ds_payment.setCellData(i, "errYn", "Y");
          } else {
            ds_payment.setCellData(i, "errYn", "N");
          }
        }
      }
      sbm_savePayDecision.action = "/ac.fm.paymgnt.paymgnt.ProcessBillRecvDecisionCancelCMD.do";
      $c.sbm.execute($p, sbm_savePayDecision);
    }
  } catch (e) {
    console.log("fn_cancel " + e);
  }
};
//-------------------------------------------------------------------------
// 확정/확정취소 콜백
//-------------------------------------------------------------------------
scwin.sbm_savePayDecision_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
  scwin.f_Retrieve1();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'table1',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',class:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',objTypeName:'data',mandatoryCode:'true',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'3',id:'udc_coCd',refDataCollection:'ds_condition',code:'coCd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급방법 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_payMthdCd',style:'',submenuSize:'auto',displayMode:'value delim label',ref:'data:ds_condition.payMthdCd','ev:onviewchange':'scwin.lc_payMthdCd_onviewchange',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_clntNo',validExpCode:'',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_clntNm',id:'udc_clntNo',mandatoryName:'false',objTypeName:'data',editTypeName:'select',maxlengthName:'20',refDataCollection:'ds_condition',code:'clntNo',mandatoryCode:'true',selectID:'retrieveClntList','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',validTitle:'거래처','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'lc_payStsCd',class:' w150',direction:'auto',displayMode:'value delim label',ref:'data:ds_condition.payStsCd','ev:onviewchange':'scwin.lc_payStsCd_onviewchange'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'확정일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_dcsnDt',style:'',mandatory:'true',displayFormat:'yyyy/MM/dd',ref:'data:ds_condition.dcsnDt',title:'확정일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_reqAcctDeptCd',maxlengthCode:'5',allowCharCode:'0-9',objTypeCode:'data',nameId:'ed_reqAcctDeptNm',objTypeName:'data',code:'reqAcctDeptCd',name:'reqAcctDeptNm',selectID:'retrieveAcctDeptCdInfo6',id:'udc_acctDeptCd',validTitle:'귀속부서','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCd_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_crn',maxlengthCode:'13',allowCharCode:'0-9',objTypeCode:'data',nameId:'ed_txt_crn',mandatoryName:'true',objTypeName:'data',code:'crn',name:'',selectID:'retrieveCrnInfo',id:'udc_crn',validTitle:'사업자번호','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_crn_onblurNameEvent','ev:onclickEvent':'scwin.udc_crn_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_crn_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'채무',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrd',gridID:'gr_paymgnt',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_payment',id:'gr_paymgnt',fixedColumn:'5',readOnly:'true',resize:'true',columnMove:'true',fixedColumnNoMove:'true',style:'',visibleRowNum:'7',class:'wq_gvw','ev:oncellclick':'scwin.gr_paymgnt_oncellclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column1',displayMode:'label',value:'',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column17',value:'상태',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'요청일자',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column13',value:'거래처',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'요청금액',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column7',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'지급번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column52',value:'전표적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'지급<br/>전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column46',value:'어음관리번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'selYn',displayMode:'label',checkAlways:'true',readOnly:'false',fixColumnWidth:'true',value:' '}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'payStsCd',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcsnDt',displayMode:'label',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'payAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'outbrAcctDeptNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',id:'outbrSlipNo',displayMode:'label',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crn',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'outbrAcctNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'payNo',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'outbrSummary',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',id:'paySlipNo',displayMode:'label',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'billRecvMgntNo',displayMode:'label',textAlign:'center'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column27',displayMode:'label',value:'Total'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',expression:'sum(\'payAmt\')',displayFormat:'#,##0',id:'column26',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column48',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선택금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'tar',id:'ed_selAmt',placeholder:'',style:'width:150px;',allowChar:'0-9',displayFormat:'#,##0',maxlength:'20',dataType:'number'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'만기일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_searchBillRecv',refEdDt:'toDate',refStDt:'fromDate',style:'',edFromId:'ed_FromDate',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',edToId:'ed_ToDate',titleFrom:'만기일자',titleTo:'만기일자'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init2',style:'',type:'button','ev:onclick':'scwin.f_InitObjects2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve1',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'받을어음',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',id:'udc_topGrd2',gridID:'gr_billRecv',gridDownFn:'scwin.f_GridToExcel2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_billRecv',id:'gr_billRecv',style:'',visibleRowNum:'5',readOnly:'true',resize:'true',columnMove:'true','ev:oncellclick':'scwin.gr_billRecv_oncellclick',autoFit:'allColumn',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',width:'50',value:' ',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'상태',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'만기일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'계정코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'어음번호',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'어음금액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'거래처명',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'전표번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'전표일자',width:'100'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column37',value:'이전어음관리번호',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'num',displayMode:'label',trueValue:'T',falseValue:'F',valueType:'other',checkAlways:'true',readOnly:'false',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecvStsCd',inputType:'select',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dueDt',inputType:'text',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecvAcctCd',inputType:'select',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'billRecvNo',inputType:'text',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'procAmt',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'procSlipNo',inputType:'text',width:'120',textAlign:'center',class:'underline txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipDt',inputType:'text',width:'100',textAlign:'center',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'bfBillRecvMgntNo',value:'',displayMode:'label',textAlign:'left',readOnly:'false'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'expression',expression:'sum(\'procAmt\')',displayFormat:'#,##0',width:'120',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Cancel',label:'확정취소',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.fn_cancel'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확정취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Confirm',label:'확정',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.fn_decision'},E:[{T:1,N:'xf:label',E:[{T:3,text:'확정'}]}]}]}]}]}]}]}]})