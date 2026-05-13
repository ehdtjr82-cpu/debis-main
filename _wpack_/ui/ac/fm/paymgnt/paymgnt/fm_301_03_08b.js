/*amd /ui/ac/fm/paymgnt/paymgnt/fm_301_03_08b.xml 66599 14e7c9680a53735a489461669eb3fb79809769daf86d74fb462021b99de8b389 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'payStsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payMthdCd',name:'지불방법',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnDt',name:'확정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqAcctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pageNumber',name:'페이지번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'quantityOfRows',name:'조회수1000',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payment',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befPayStsCd',name:'이전지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'지급수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'요청금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reqExchRt',name:'요청환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'발생전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctCd',name:'발생계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'발생계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'발생적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'발생귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'발생귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankCd',name:'지급은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'지급계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnEmpNo',name:'확정사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'지급전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'지급환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'지급금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'결제원금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'지급통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addupDivsCd',name:'합산분할코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refPayNo',name:'참조지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firmBankYn',name:'펌뱅킹여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'납기일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffYn',name:'상계여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'admitCnclDt',name:'승인취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNo',name:'승인사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNm',name:'승인사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDocOvrDd',name:'계약서초과일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClntNo',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'CHECKNUM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reserRsn',name:'보류사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclRsn',name:'해제사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNo',name:'요청자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'요청귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitDt',name:'해제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitEmpNo',name:'해제사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveDate',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'증빙개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'postDt2',name:'회계처리일자2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId2',name:'등록자ID2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm2',name:'등록자명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interPayDt',name:'국제기브일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interDataYn',name:'국제데이터여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'status',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errCont',name:'오류내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errYn',name:'오류여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'받을어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'beClntNm',name:'이전거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankcd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCdNm',name:'은행명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_bankBook'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnSeq',name:'거래순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookKndNm',name:'거래순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcptWithdrawClsCd',name:'입출구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnDt',name:'거래일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnAmt',name:'거래금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnAmtFcrc',name:'거래금액_외화',dataType:'text'}},{T:1,N:'w2:key',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnStsCd',name:'거래상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookKndCd',name:'통장종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNm',name:'통장명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankAcntNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commiSsion',name:'수수료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'입출금상대계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankCd',name:'통장코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_bankcd_Retrieve',action:'/ac.fm.stdinfomgnt.RetrieveBankCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_bankcd_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrievePaymgnt',action:'/ac.fm.paymgnt.paymgnt.TotalRetrievePaymentContents_searchCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_condition',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievePaymgnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_savePayDecision',action:'/ac.fm.paymgnt.paymgnt.TotalProcessTransferDecisionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_payment","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_savePayDecision_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_savePayDecisionCancel',action:'/ac.fm.paymgnt.paymgnt.TotalProcessTransferDecisionCancelCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_payment","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_savePayDecisionCancel_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){let memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");

// 상태코드 상수
scwin.PREPARESTS = "00"; // 준비
scwin.RESERVESTS = "10"; // 보류
scwin.WAITSTS = "20"; // 대기
scwin.DECIDESTS = "30"; // 결정
scwin.DECISIONSTS = "40"; // 확정
scwin.COMPLETE = "50"; // 완료

// 지급방법코드 상수
scwin.CASH = "10"; // 현금
scwin.TRANSFER = "20"; // 이체
scwin.APPROVE = "30"; // 결재
scwin.PAYCHECK_TRANSFER = "70"; // 급여이체
scwin.gsBankbookFlag = "0"; // 통장구분
scwin.errYn = "N"; // 오류

scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 
scwin.loginCoCd = $c.data.getMemInfo($p, "coCd");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.loginCoCd) ? '' : scwin.loginCoCd; // 소속 자회사
scwin.loginCoClsCd = $c.data.getMemInfo($p, "coClsCd");
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.loginCoClsCd) ? '' : scwin.loginCoClsCd;
; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.isSubCompany = false;
scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.quantityOfRows = "1000";
scwin.pageNumber = "1";
scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 처리)
//-------------------------------------------------------------------------
// hidden
//-------------------------------------------------------------------------
scwin.hid_bankbookNo = "";
scwin.ed_payMthdCd = "";
scwin.txtCoClsCd = "";
scwin.txt_pageNumber = "";
scwin.txt_quantityOfRows = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [
  //{ grpCd: "FM017", compID: "lc_payStsCd" ,opt :{"range" : "2,40"}}, 
  {
    grpCd: "FM017",
    compID: "gr_paymgnt:payStsCd"
  }
  //{ grpCd: "FM018", compID: "gr_paymgnt:payMthdCd"}, asis hidden
  ];
  $c.data.setCommonCode($p, codeOptions);
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
  let dltStr = "dlt_commonCodeFM017"; // FM017 코드의 dataList
  let dlt = $c.gus.object($p, dltStr);
  $c.gus.copy($p, dltStr, "dlt_commonCodeFM017_1", true); // dlt_commonCodeFM017_1 으로 dataList 을 복사

  let dlt2 = $c.gus.object($p, "dlt_commonCodeFM017_1"); // 객체화
  $c.data.dataListFilter($p, dlt2, "fltrCd2 == '40'"); // 새로운 데이터리스트에 필터("range" : "2,40")
  lc_payStsCd.setNodeSet("data:dlt_commonCodeFM017_1", "cdNm", "cd"); // selectBox 에 새로운 데이터리스트로 매핑

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
      if (ed_coCd.hidVal != rtnList[0]) scwin.f_initObj();
      ed_coCd.setValue(rtnList[0]); // 코드
      ed_coNm.setValue(rtnList[5]); // 회사명
      ed_coCd.hidVal = rtnList[0]; // 히든값
      scwin.txtCoClsCd = rtnList[1]; // 회사구분  
      scwin.ed_coCd = rtnList[0];
    } else {
      ed_coCd.setValue(""); // 코드
      ed_coNm.setValue(""); // 회사명
      ed_coCd.hidVal = "";
      scwin.txtCoClsCd = ""; // 회사구분    
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
      scwin.f_bankcd_Retrieve();
    }
  } catch (e) {
    console.log(e);
  }
};
//-------------------------------------------------------------------------
// Dataset DEBUG
//-------------------------------------------------------------------------
scwin.dataSetDebug = function (dataSet, isDebug) {
  if (isDebug == true) {
    let obj = dataSet;
    let str = "[[[[" + obj.id + "]]]]]\n";
    for (let dsRow = 0; dsRow < obj.getRowCount(); dsRow++) {
      /* TOBE 미사용.
      for ( var dsCol = 1; dsCol <= obj.CountColumn; dsCol++ ){
      str += "["+obj.ColumnId(dsCol)+"] "+obj.NameValue(dsRow, obj.ColumnId(dsCol))+", ";
      }
      str += "\n\n";
      */
      $c.win.alert($p, str);
    }
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
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  if (e.responseJSON.GAUCE) {
    ds_bankcd.setJSON(e.responseJSON.GAUCE);
  }
  lc_payStsCd.setSelectedIndex(0);
  scwin.ed_payMthdCd = "20"; // 지급방법 : 경비이체 고정
  ed_dcsnDt.setValue(scwin.g_sCurrDate);
  scwin.gsBankbookFlag = "0";
  $c.gus.cfDisableObjects($p, [ed_bankbookNm, ed_bankbookKndNm]);
  scwin.txt_pageNumber = scwin.pageNumber;
  scwin.txt_quantityOfRows = scwin.quantityOfRows;
  ed_searchCnt.setValue("");
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function (e) {
  $c.gus.cfInitObjects($p, table1, null);
  ed_dcsnDt.setValue(scwin.g_sCurrDate);
  scwin.f_setCompanyInfo();
};
scwin.f_initObj = function (e) {
  try {
    $c.gus.cfInitObjects($p, [ed_reqAcctDeptCd, ed_reqAcctDeptNm]); //  귀속부서      
    $c.gus.cfInitObjects($p, [ed_clntNo, ed_clntNm]); //거래처 
    $c.gus.cfInitObjects($p, [ed_bankbookNo, scwin.hid_bankbookNo, ed_bankbookKndNm, ed_bankbookNm]); //통장  
  } catch (e) {
    console.log("f_InitObjects : " + e);
  }
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
    fileName: "이체확정.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: "이체확정",
    bodyWordwrap: true // 줄바꿈
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_paymgnt, options, infoArr);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    scwin.dataSetDebug(ds_condition, false);
    let ret = await $c.gus.cfValidate($p, [ed_coCd]);
    if (!ret) {
      return false;
    }
    let ret2 = await $c.gus.cfValidate($p, [ed_dcsnDt]);
    if (!ret2) {
      return false;
    }
    if (ret && ret2) {
      scwin.txt_pageNumber = scwin.pageNumber;
      scwin.txt_quantityOfRows = scwin.quantityOfRows;
      const params = {
        payStsCd: lc_payStsCd.getValue(),
        payMthdCd: scwin.ed_payMthdCd,
        dcsnDt: ed_dcsnDt.getValue(),
        clntNo: ed_clntNo.getValue(),
        reqAcctDeptCd: ed_reqAcctDeptCd.getValue(),
        crn: ed_crn.getValue(),
        coCd: ed_coCd.getValue(),
        coClsCd: scwin.txtCoClsCd,
        pageNumber: scwin.txt_pageNumber,
        quantityOfRows: scwin.txt_quantityOfRows
      };
      //데이터셋에 정보설정
      ds_condition.setJSON(params);
      ds_payment.removeAll();
      $c.sbm.execute($p, sbm_retrievePaymgnt);
    }
  } catch (e) {
    console.log("f_Retrieve >" + e);
  }
};
//-------------------------------------------------------------------------
// 조회결과 콜백(거래처 정보)
//-------------------------------------------------------------------------
scwin.sbm_retrievePaymgnt_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    if (e.responseJSON.GAUCE) {
      ds_payment.setJSON(e.responseJSON.GAUCE);
    }
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_payment.getRowCount()));
    $c.gus.cfGoPrevPosition($p, gr_paymgnt, 0); //첫번째 row 포지션이동

    if (ds_payment.getRowCount() == 0) {
      await $c.win.alert($p, MSG_CM_WRN_002);
      $c.gus.cfDisableObjects($p, [btn_Confirm, btn_Cancel]);
    } else {
      ds_payment.sort("payNo", 0); //SortExpr +payNo
    }
    if (lc_payStsCd.getValue() == scwin.DECIDESTS) {
      $c.gus.cfEnableObjects($p, [btn_Confirm]);
      $c.gus.cfDisableObjects($p, [btn_Cancel]);
    } else if (lc_payStsCd.getValue() == scwin.DECISIONSTS) {
      $c.gus.cfDisableObjects($p, [btn_Confirm]);
      $c.gus.cfEnableObjects($p, [btn_Cancel]);
    }
  } catch (e) {
    console.log("f_Retrieve >" + e);
  }
  ed_bankbookNo.setValue("");
  ed_bankbookNm.setValue("");
  ed_bankbookKndNm.setValue("");
};

//-------------------------------------------------------------------------
// 그리드 셀 클릭
//-------------------------------------------------------------------------
scwin.gr_paymgnt_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "paySlipNo" && rowIndex >= 0) {
    if (!(ds_payment.getCellData(rowIndex, "paySlipNo") == null || ds_payment.getCellData(rowIndex, "paySlipNo") == "")) {
      $c.gus.cfShowSlipInfo($p, ds_payment.getCellData(rowIndex, "paySlipNo"));
    }
  }
};
//-------------------------------------------------------------------------
// 그리드 헤더 클릭
//-------------------------------------------------------------------------
scwin.gr_paymgnt_onheaderclick = function (headerId) {
  let i = 0;
  if (headerId == "selYn") {
    if (gr_paymgnt.getHeaderValue("selYn") == true) {
      if (ed_searchCnt.getValue() != 0 || ed_searchCnt.getValue() != "") {
        //자체적으로 모두선택이 처리되어 다시 체크안하게 처리
        for (i = 0; i < ds_payment.getRowCount(); i++) {
          ds_payment.setCellData(i, "selYn", "0");
        }
        for (i = 0; i < ed_searchCnt.getValue(); i++) {
          ds_payment.setCellData(i, "selYn", "1");
        }
      } else {
        for (i = 0; i < ds_payment.getRowCount(); i++) {
          ds_payment.setCellData(i, "selYn", "1");
        }
      }
    } else {
      for (i = 0; i < ds_payment.getRowCount(); i++) {
        ds_payment.setCellData(i, "selYn", "0");
      }
    }
  }
};

//-------------------------------------------------------------------------
// 통장조회 POPUP호출 
//-------------------------------------------------------------------------
scwin.f_BankBookPopUp = async function (sFlag) {
  try {
    let i_bankbookno = ed_bankbookNo.getValue();
    i_bankbookno = i_bankbookno.trim();
    let param = '';
    let ret = await $c.gus.cfValidate($p, [ed_coCd]);
    if (!ret) {
      return false;
    }

    //scwin.gsBankbookFlag 0 번만 사용함.
    /*
    if ( gsBankbookFlag == "0"){
        param    = ",,,,"+ed_coCd.text+",,,N";	//자회사 회계시스템 추가사항
        rtnList = cfCommonPopUp('retrieveExpenseTransferInfo',i_bankbookno,'',sFlag,null,null,null,null,param,null,null,null,null); // 경비이체 
    }else if ( gsBankbookFlag == "1"){
        param    = ",,,,"+ed_coCd.text;	//자회사 회계시스템 추가사항
        rtnList = cfCommonPopUp('retrieveElectricApproveInfo',i_bankbookno,'',sFlag,null,null,null,null,param,null,null,null,null); // 전자결재-현금
    }else if ( gsBankbookFlag == "2"){
        param    = ",,,,"+ed_coCd.text;	//자회사 회계시스템 추가사항
        rtnList = cfCommonPopUp('retrieveSalaryTransferInfo',i_bankbookno,'',sFlag,null,null,null,null,param,null,null,null,null); // 급여이체
    }else{
        param    = ",,,,,"+ed_coCd.text;	//자회사 회계시스템 추가사항
        // 4월11일 자동이체부분 추가 
        rtnList = cfCommonPopUp('retrieveBankBookCdInfo',i_bankbookno,'',sFlag,null,null,null,null,param,null,null,null,null,null,"F",null,null); // 거래처	
         rtnList = cfCommonPopUp('retrieveBankBookCdInfo',i_bankbookno,'',
        sFlag,null,null,null,null,param,null,null,null,null,null,"F",null,null); // 거래처	
    }
    */
    //TOBE 팝업오픈시 정보 초기화 추가
    if (ds_bankBook.get("bankbookNo") != "") {
      ds_bankBook.set("bankbookNo", ""); //통장번호
      ds_bankBook.set("bankCd", ""); //통장코드
      ds_bankBook.set("bankbookKndNm", ""); //통장종류명
      ds_bankBook.set("bankbookNm", ""); //통장명
      ds_bankBook.set("acctDeptCd", ""); //관리부서코드
      ds_bankBook.set("bankAcntNo", ""); //통장계좌번호
      ds_bankBook.set("bankbookKndCd", ""); //통장종류코드
    }
    param = ",,,," + ed_coCd.getValue() + ",,,N"; //자회사 회계시스템 추가사항
    //rtnList = cfCommonPopUp('retrieveExpenseTransferInfo',i_bankbookno,'',sFlag,null,null,null,null,param,null,null,null,null); // 경비이체 
    udc_Bankbook.setSelectId("retrieveExpenseTransferInfo");
    udc_Bankbook.cfCommonPopUp(scwin.udc_Bankbook_callBackFunc // 콜백 함수
    , i_bankbookno // 화면에서의 ??? Code Element의 Value
    , '' // 화면에서의 ??? Name Element의 Value
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
  } catch (e) {
    console.log("통장팝업 : " + e);
  }
};

//-------------------------------------------------------------------------
// 통장조회 POPUP 콜백
//-------------------------------------------------------------------------
scwin.udc_Bankbook_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;

    // SET	 
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return false;
      ds_bankBook.set("bankbookNo", rtnList[0]); //통장번호
      ds_bankBook.set("bankCd", rtnList[1]); //통장코드
      ds_bankBook.set("bankbookKndNm", rtnList[8]); //통장종류명
      ds_bankBook.set("bankbookNm", rtnList[2]); //통장명
      ds_bankBook.set("acctDeptCd", rtnList[3]); //관리부서코드
      ds_bankBook.set("bankAcntNo", rtnList[4]); //통장계좌번호
      ds_bankBook.set("bankbookKndCd", rtnList[5]); //통장종류코드
      scwin.hid_bankbookNo = rtnList[0];
    } else {
      ds_bankBook.set("bankbookNo", ""); //통장번호
      ds_bankBook.set("bankCd", ""); //통장코드
      ds_bankBook.set("bankbookKndNm", ""); //통장종류명
      ds_bankBook.set("bankbookNm", ""); //통장명
      ds_bankBook.set("acctDeptCd", ""); //관리부서코드
      ds_bankBook.set("bankAcntNo", ""); //통장계좌번호
      ds_bankBook.set("bankbookKndCd", ""); //통장종류코드
      scwin.hid_bankbookNo = "";
    }
  } catch (e) {
    console.log("udc_Bankbook_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 통장조회코드입력
//-------------------------------------------------------------------------
scwin.udc_Bankbook_onblurCodeEvent = function (e) {
  //scwin.f_BankBookPopUp('F');
  try {
    if (ed_bankbookNo.getValue().trim() == scwin.hid_bankbookNo.trim()) {
      return;
    } else if (ed_bankbookNo.getValue().trim() == "") {
      ds_bankBook.set("bankbookNo", ""); //통장번호
      ds_bankBook.set("bankCd", ""); //통장코드
      ds_bankBook.set("bankbookNm", ""); //통장명
      ed_bankbookNm.setValue("");
      ed_bankbookKndNm.setValue("");
      ds_bankBook.set("acctDeptCd", ""); //관리부서코드
      ds_bankBook.set("bankAcntNo", ""); //통장계좌번호
      ds_bankBook.set("bankbookKndCd", ""); //통장종류코
      scwin.hid_bankbookNo = "";
      return;
    }
    if (ed_bankbookNo.getValue().trim() != "") {
      scwin.f_BankBookPopUp('T');
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 통장조회찾기
//-------------------------------------------------------------------------
scwin.udc_Bankbook_onclickEvent = function (e) {
  //정보초기화 추가
  ed_bankbookNm.setValue("");
  ed_bankbookKndNm.setValue("");
  scwin.f_BankBookPopUp('F');
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
      // 관리부서 PopUp 호출
      case '1':
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd; //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null,null,null,null,null); // 부서
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
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
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
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
      case '3':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 사업자번호    
        udc_crn.cfCommonPopUp(scwin.udc_crn_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
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
      // 관리부서 PopUp 호출
      case '1':
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd; //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null); // 관리부서
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
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
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
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
      case '3':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 사업자번호
        udc_crn.cfCommonPopUp(scwin.udc_crn_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
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
// 관리부서 PopUp 콜백
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
      ed_reqAcctDeptCd.hidVal = rtnList[0]; // 코드값
    } else {
      ed_reqAcctDeptCd.setValue("");
      ed_reqAcctDeptNm.setValue("");
      ed_reqAcctDeptCd.hidVal = "";
    }
  } catch (e) {
    console.log(e);
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
      ed_clntNo.hidVal = rtnList[0]; // 코드값
    } else {
      ed_clntNo.setValue("");
      ed_clntNm.setValue("");
      ed_clntNo.hidVal = "";
    }
  } catch (e) {
    console.log(e);
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
      ed_crn.hidVal = rtnList[0]; // 코드값
    } else {
      ed_crn.setValue("");
      ed_txt_crn.setValue("");
      ed_crn.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
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
// 귀속부서코드
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_reqAcctDeptCd, ed_reqAcctDeptNm, '1');
};
//-------------------------------------------------------------------------
// 귀속부서명
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onviewchangeNameEvent = function (info) {
  scwin.f_CheckPopUp(ed_reqAcctDeptCd, ed_reqAcctDeptNm, '1');
};

//-------------------------------------------------------------------------
// 귀속부서찾기
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
// 확정
//-------------------------------------------------------------------------
scwin.fn_decision = async function (e) {
  try {
    let i = 0;
    let cnt = 0;
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
      await $c.win.alert($p, "확정할 자료가 존재하지않습니다");
      return false;
    }

    //let ret = await $c.gus.cfValidate([gr_paymgnt,ed_bankbookNo]);
    let ret = await $c.gus.cfValidate($p, [ed_bankbookNo]);
    if (!ret) {
      return false;
    }
    if (await $c.win.confirm($p, "확정하시겠습니까")) {
      for (i = 0; i < ds_payment.getRowCount(); i++) {
        if (ds_payment.getRowStatus(i) != "R" && ds_payment.getCellData(i, "selYn") == 1) {
          ds_payment.setCellData(i, "payStsCd", scwin.DECISIONSTS); //40 확정
          ds_payment.setCellData(i, "payBankbookNo", ds_bankBook.get("bankbookNo"));
        }
      }
      $c.sbm.execute($p, sbm_savePayDecision);
    }
  } catch (e) {
    console.log("fn_decision : " + e);
  }
};

//-------------------------------------------------------------------------
// 확정콜백
//-------------------------------------------------------------------------
scwin.sbm_savePayDecision_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.fn_cancel = async function (e) {
  try {
    let i = 0;
    let cnt = 0;
    let errYn = "N"; //ASIS화면에서 N만 처리하고 있음

    if (ds_payment.getRowCount() == false) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_049, "자료"));
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
    if (await $c.win.confirm($p, "취소하시겠습니까")) {
      for (i = 0; i < ds_payment.getRowCount(); i++) {
        if (ds_payment.getRowStatus(i) != "R" && ds_payment.getCellData(i, "selYn") == 1) {
          ds_payment.setCellData(i, "payStsCd", scwin.DECIDESTS); //30 결정
          ds_payment.setCellData(i, "payBankbookNo", "");
        }
        if (errYn == "Y") {
          //오류취소 여부
          ds_payment.setCellData(i, "errYn", "Y");
        } else {
          ds_payment.setCellData(i, "errYn", "N");
        }
      }
      $c.sbm.execute($p, sbm_savePayDecisionCancel);
    }
  } catch (e) {
    console.log("fn_cancel : " + e);
  }
};

//-------------------------------------------------------------------------
// 취소콜백
//-------------------------------------------------------------------------
scwin.sbm_savePayDecisionCancel_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'table1',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',class:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',objTypeName:'data',mandatoryCode:'true',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'3',id:'udc_coCd',refDataCollection:'',code:'coCd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_payStsCd',style:'width: 110px',submenuSize:'auto',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_clntNo',validExpCode:'',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_clntNm',id:'udc_clntNo',mandatoryName:'false',objTypeName:'data',editTypeName:'select',maxlengthName:'20',name:'clntNm',refDataCollection:'',code:'clntNo',mandatoryCode:'true',selectID:'retrieveClntList','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent',validTitle:'거래처','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',btnId:'btn_clntNo',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'확정일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_dcsnDt',style:'',mandatory:'true',displayFormat:'yyyy/MM/dd',title:'확정일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_reqAcctDeptCd',maxlengthCode:'5',allowCharCode:'0-9',objTypeCode:'data',nameId:'ed_reqAcctDeptNm',objTypeName:'data',code:'reqAcctDeptCd',name:'reqAcctDeptNm',selectID:'retrieveAcctDeptCdInfo6',id:'udc_acctDeptCd',validTitle:'귀속부서','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',btnId:'btn_acctDeptCd',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_crn',maxlengthCode:'13',allowCharCode:'0-9',objTypeCode:'data',nameId:'ed_txt_crn',mandatoryName:'true',objTypeName:'data',code:'crn',name:'',selectID:'retrieveCrnInfo',id:'udc_crn',validTitle:'사업자번호','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_crn_onblurNameEvent','ev:onclickEvent':'scwin.udc_crn_onclickEvent',btnId:'btn_crn','ev:onviewchangeNameEvent':'scwin.udc_crn_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'선택건수',class:''}},{T:1,N:'xf:input',A:{style:'',id:'ed_searchCnt',class:' w150',allowChar:'0-9',maxlength:'4'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrd',gridID:'gr_paymgnt',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_payment',id:'gr_paymgnt',style:'',visibleRowNum:'11',visibleRowNumFix:'true',fixedColumn:'5',resize:'true',columnMove:'true',sortable:'true',readOnly:'true','ev:oncellclick':'scwin.gr_paymgnt_oncellclick','ev:onheaderclick':'scwin.gr_paymgnt_onheaderclick',fixedColumnNoMove:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',style:'',value:' ',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'상태',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'요청일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'거래처',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'요청금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',style:'',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'전표종류',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column27',value:'지급은행',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column25',value:'지급계좌',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column21',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column23',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column41',value:'계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'지급</br>전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column35',value:'전표적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'전송여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',style:'',value:'',width:'70',checkAlways:'true',readOnly:'false',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payStsCd',inputType:'select',style:'',value:'',width:'70',textAlign:'center',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnDt',inputType:'text',style:'',value:'',width:'100',textAlign:'center',editFormat:'####/##/##',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'140',textAlign:'left',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrAcctDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipKndNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payBankCd',inputType:'select',style:'',width:'120',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_bankcd'},E:[{T:1,N:'w2:label',A:{ref:'bankCdNm'}},{T:1,N:'w2:value',A:{ref:'bankCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'payBankAcntNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'outbrAcctNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',style:'',id:'paySlipNo',value:'',displayMode:'label',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'outbrSummary',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'flag',value:'',displayMode:'label',chooseOption:'true',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미전송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:' '}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'이체요청'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'EE'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전송완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'EG'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'처리완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'EP'}]}]}]}]}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column72',value:'Total',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',expression:'sum(\'payAmt\')',displayFormat:'#,##0',style:'',id:'column71',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column168',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:'','ev:onheaderclick':'scwin.gr_paymgnt_onheaderclick'},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td form-group',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'5',objTypeCode:'data',editTypeCode:'select',popupID:'',code:'bankbookNo',validExpCode:'',UpperFlagCode:'1',readOnlyName:'true',maxlengthName:'20',mandatoryName:'false',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_Bankbook_onclickEvent',allowCharCode:'0-9',codeId:'ed_bankbookNo',selectID:'retrieveExpenseTransferInfo',validTitle:'통장',name:'bankbookKndNm',nameId:'ed_bankbookKndNm',style:'',editTypeName:'select',id:'udc_Bankbook','ev:onblurCodeEvent':'scwin.udc_Bankbook_onblurCodeEvent',class:'',refDataCollection:'ds_bankBook',btnId:'btn_Bankbook'}},{T:1,N:'xf:input',A:{style:'width:150px;',readOnly:'true',id:'ed_bankbookNm',placeholder:'',allowChar:'a-zA-Z0-9',class:'',objType:'key',ref:'data:ds_bankBook.bankbookNm'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Cancel',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.fn_cancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Confirm',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.fn_decision'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]}]}]}]}]}]}]}]})