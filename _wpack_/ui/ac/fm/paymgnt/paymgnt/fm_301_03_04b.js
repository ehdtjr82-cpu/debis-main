/*amd /ui/ac/fm/paymgnt/paymgnt/fm_301_03_04b.xml 62235 bc9ca578d85c218d945cb924b22d417002aaa257f91e681bad15bad5331e2a16 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'payStsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payMthdCd',name:'지불방법코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payDt',name:'지불일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnDt',name:'확정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDept',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'일자조회구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqBankCd',name:'지급은행',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftCheckNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'addupDivsCd',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'refPayNo',name:'합산분할코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payCrcCd',name:'화폐',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payment',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befPayStsCd',name:'이전지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'지급수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'요청금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reqExchRt',name:'요청환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'발생전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctCd',name:'발생계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'발생계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'발생적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'발생귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'발생귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankCd',name:'지급은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'지급계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnEmpNo',name:'확정사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'지급전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'지급환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'지급금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'결제원금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'지급통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addupDivsCd',name:'합산분할코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refPayNo',name:'참조지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firmBankYn',name:'펌뱅킹여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'납기일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffYn',name:'상계여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'admitCnclDt',name:'승인취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNo',name:'승인사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNm',name:'승인사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDocOvrDd',name:'계약서초과일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClntNo',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'CHECKNUM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reserRsn',name:'보류사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclRsn',name:'해제사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNo',name:'요청자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'요청귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitDt',name:'해제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitEmpNo',name:'해제사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveDate',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'증빙개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'postDt2',name:'회계처리일자2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId2',name:'등록자ID2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm2',name:'등록자명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interPayDt',name:'국제기브일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interDataYn',name:'국제데이터여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'status',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errCont',name:'오류내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errYn',name:'오류여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'받을어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'beClntNm',name:'이전거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'확정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankcd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCdNm',name:'은행명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_bankBook'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bankbookNo',name:'통장번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnSeq',name:'거래순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcptWithdrawClsCd',name:'입출구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnDt',name:'거래일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnAmt',name:'거래금액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnAmtFcrc',name:'거래금액_외화',dataType:'text'}},{T:1,N:'w2:key',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnStsCd',name:'거래상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookKndCd',name:'통장종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookKndNm',name:'통장종류명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankbookNm',name:'통장명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankAcntNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commiSsion',name:'수수료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'입출금상대계정코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exchRate',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdExchRt',name:'기준환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsExchRt',name:'매입환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellovExchRt',name:'매도환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_bankcd_Retrieve',action:'/ac.fm.stdinfomgnt.RetrieveBankCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_bankcd_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveExchRate',action:'/ac.fm.stdinfomgnt.RetrieveExchangeRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition2","key":"IN_DS1"},{"id":"ds_exchRate","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_exchRate","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveExchRate_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrievePaymgnt',action:'/ac.fm.paymgnt.paymgnt.RetrievePaymentContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_payment","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_payment","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievePaymgnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_savePayDecision',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_payment","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_savePayDecision_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");

// 상태코드 상수
scwin.PREPARESTS = "00"; // 준비
scwin.RESERVESTS = "10"; // 보류
scwin.WAITSTS = "20"; // 대기
scwin.DECIDESTS = "30"; // 결정
scwin.DECISIONSTS = "40"; // 확정
scwin.COMPLETE = "50"; // 완료

// 외화예금 
scwin.FOREIGN_DEPOSIT = "F";
scwin.checkExchRt = 0; //환율 체크

scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 
scwin.loginCoCd = $c.data.getMemInfo($p, "coCd");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.loginCoCd) ? '' : scwin.loginCoCd; // 소속 자회사
scwin.loginCoClsCd = $c.data.getMemInfo($p, "coClsCd");
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.loginCoClsCd) ? '' : scwin.loginCoClsCd;
; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.isSubCompany = false;
scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 처리)
//-------------------------------------------------------------------------
// hidden
//-------------------------------------------------------------------------
scwin.hid_bankbookNo = "";
scwin.txt_acctDeptCd = ""; //관리부서코드
scwin.txtCoClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [
  //{ grpCd: "ZZ006", compID: "lc_exchCrcCd,lc_srchExchCrcCd,gr_paymgnt:payCrcCd" ,opt :{"range" : "1,10"}}, 
  //{ grpCd: "FM017", compID: "lc_payStsCd,gr_paymgnt:payStsCd",opt :{"range" : "2,40"}},
  {
    grpCd: "FM017",
    compID: "lc_payStsCd,gr_paymgnt:payStsCd"
  }, {
    grpCd: "ZZ006",
    compID: "gr_paymgnt:payCrcCd"
  }];
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
  $c.data.dataListFilter($p, dlt2, "fltrCd2 == '40'"); // 새로운 데이터리스트에 필터 lc_payStsCd GauceUtil.getCodeList("FM017", 2, "40")
  lc_payStsCd.setNodeSet("data:dlt_commonCodeFM017_1", "cdNm", "cd"); // selectBox 에 새로운 데이터리스트로 매핑

  //공통코드재매핑.
  let dltStr2 = "dlt_commonCodeZZ006"; // ZZ006 코드의 dataList
  let dlt3 = $c.gus.object($p, dltStr);
  $c.gus.copy($p, dltStr2, "dlt_commonCodeZZ006_1", true); // dlt_commonCodeZZ006_1 으로 dataList 을 복사

  let dlt4 = $c.gus.object($p, "dlt_commonCodeZZ006_1"); // 객체화
  $c.data.dataListFilter($p, dlt4, "fltrCd1 == '10'"); // 새로운 데이터리스트에 필터 lc_payStsCd GauceUtil.getCodeList("ZZ006", 1, "10")
  lc_exchCrcCd.setNodeSet("data:dlt_commonCodeZZ006_1", "cdNm", "cd"); // selectBox 에 새로운 데이터리스트로 매핑
  lc_srchExchCrcCd.setNodeSet("data:dlt_commonCodeZZ006_1", "cdNm", "cd"); // selectBox 에 새로운 데이터리스트로 매핑

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
      ed_dcsnDt.setValue(scwin.g_sCurrDate);
      lc_exchCrcCd.setValue("USD");
      scwin.f_bankcd_Retrieve();
    }
  } catch (e) {
    console.log(e);
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
    scwin.f_Exch_Retrieve();
  } catch (e) {
    console.log("sbm_bankcd_Retrieve_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 기준환율조회
//-------------------------------------------------------------------------    
scwin.f_Exch_Retrieve = function (e) {
  try {
    const params = {
      crcCd: lc_exchCrcCd.getValue(),
      stdDt: ed_dcsnDt.getValue()
    };
    //데이터셋에 정보설정
    ds_condition2.setJSON(params);
    $c.sbm.execute($p, sbm_retrieveExchRate);
  } catch (e) {
    console.log("f_Exch_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 기준환율조회콜백
//-------------------------------------------------------------------------    
scwin.sbm_retrieveExchRate_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    ed_exchRt.setValue(ds_exchRate.getCellData(0, "stdExchRt"));
    scwin.checkExchRt = ds_exchRate.getCellData(0, "stdExchRt"); //ds_exchRate.get("stdExchRt");

    lc_payStsCd.setSelectedIndex(0);
    $c.gus.cfDisableObjects($p, [ed_bankbookNm, ed_bankbookKndNm]);
  } catch (e) {
    console.log("sbm_retrieveExchRate_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    let ret = await $c.gus.cfValidate($p, [ed_coCd]);
    if (!ret) {
      return false;
    }
    let ret2 = await $c.gus.cfValidate($p, [ed_dcsnDt]);
    if (!ret2) {
      return false;
    }
    if (ret && ret2) {
      const params = {
        scClsCd: "5",
        coClsCd: scwin.txtCoClsCd
      };
      //데이터셋에 정보설정
      ds_condition.setJSON(params);
      ds_payment.removeAll();
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
    $c.gus.cfGoPrevPosition($p, gr_paymgnt, 0); //첫번째 row 포지션이동
    if (ds_payment.getRowCount() == 0) {
      await $c.win.alert($p, "조회된 데이터가 없습니다");
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
    console.log("sbm_retrievePaymgnt_submitdone >" + e);
  }
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
    $c.gus.cfInitObjects($p, [ed_clntNo, ed_clntNm]); //거래처 
    $c.gus.cfInitObjects($p, [ed_bankbookNo, scwin.hid_bankbookNo, ed_bankbookKndNm, ed_bankbookNm, scwin.txt_acctDeptCd]); //통장  
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
    fileName: "외화확정.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,

    sheetName: "외화확정"
    //, bodyWordwrap   : true    // 줄바꿈
  };
  const infoArr = [];

  //ASIS 엑셀다운로드시 지급전표번호 파란색 언더라인으로 나와서 아래정보와 같이 처리함
  //gr_paymgnt.setColumnStyle("paySlipNo", "color", "#0000FF");      // 파란색 글자 언더라인
  //gr_paymgnt.setColumnStyle("paySlipNo", "text-decoration", "underline"); 
  $c.data.downloadGridViewExcel($p, gr_paymgnt, options, infoArr);
  //gr_paymgnt.setColumnStyle("paySlipNo", "color", "#000000");      // 검쟁색 글자
  //그리드, 엑셀 모두 파란색 언더라인 처리요청으로 재수정함.
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
    param = ",,,," + ed_coCd.getValue() + ",,Y"; //자회사 회계시스템 추가사항( 2016.09.21)
    //rtnList = cfCommonPopUp('retrieveForeignBankbookInfo',i_bankbookno,"",sFlag,null,null,null,null,param,null,null,null,null,null,null,null,null); // 통장
    udc_Bankbook.setSelectId("retrieveForeignBankbookInfo");
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
    console.log("f_BankBookPopUp : " + e);
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
      ds_bankBook.set("bankbookKndCd", ""); //통장종류코
      scwin.hid_bankbookNo = "";
    }
  } catch (e) {
    console.log("udc_Bankbook_callBackFunc : " + e);
  }
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
        /* TOBE 소스내 미사용으로 구현안함.
        sCmdName = "retrieveAcctDeptCdInfo6"
        param    = ","+ ed_coCd.text+","+txtCoClsCd.value; //자회사 회계시스템 추가사항
        rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null,null,null,null,null); // 부서
        */
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
        /* TOBE 소스내 미사용으로 구현안함.
        sCmdName = "retrieveAcctDeptCdInfo6"
        param    = ","+ ed_coCd.text+","+txtCoClsCd.value; //자회사 회계시스템 추가사항 
        rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null); // 관리부서
        */
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
    }
  } catch (e) {
    console.log("f_openPopUpNm : " + e);
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
// 통장조회코드입력
//-------------------------------------------------------------------------
scwin.udc_Bankbook_onblurCodeEvent = function (e) {
  //scwin.f_BankBookPopUp('F');
  console.log("ed_bankbookNo.getValue().trim() : " + ed_bankbookNo.getValue().trim() + ",scwin.hid_bankbookNo.trim() : " + scwin.hid_bankbookNo.trim());
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
// 통장조회코드명입력 (readonly)
//-------------------------------------------------------------------------
scwin.udc_Bankbook_onblurNameEvent = function (e) {
  //f_BankBookPopUp('F')
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
    if (ds_bankBook.get(0, "bankbookNo") == null || ds_bankBook.get(0, "bankbookNo") == "") {
      await $c.win.alert($p, "통장을 선택하십시오");
      return false;
    }
    for (i = 0; i < ds_payment.getRowCount(); i++) {
      if (ds_payment.getRowStatus(i) != "R" && ds_payment.getCellData(i, "selYn") == 1) {
        cnt++;
      }
      lc_exchCrcCd.setValue(ds_payment.getCellData(i, "payCrcCd"));
      scwin.f_Exch_Retrieve();
      let exchRtChk = await scwin.f_exchRt(ds_payment.getCellData(i, "payExchRt"), scwin.checkExchRt);
      if (exchRtChk == false) {
        return false;
      }
    }
    if (cnt <= 0) {
      await $c.win.alert($p, "확정할 자료가 존재하지않습니다");
      return false;
    }
    if (await $c.win.confirm($p, "확정하시겠습니까")) {
      for (i = 0; i < ds_payment.getRowCount(); i++) {
        if (ds_payment.getRowStatus(i) != "R" && ds_payment.getCellData(i, "selYn") == 1) {
          ds_payment.setCellData(i, "payStsCd", scwin.DECISIONSTS); //40 확정
          ds_payment.setCellData(i, "payBankbookNo", ds_bankBook.get("bankbookNo"));
        }
      }
      sbm_savePayDecision.action = "/ac.fm.paymgnt.paymgnt.ProcessTransferDecisionCMD.do";
      $c.sbm.execute($p, sbm_savePayDecision);
    }
  } catch (e) {
    console.log("fn_decision : " + e);
  }
};

//-------------------------------------------------------------------------
// 확정
//-------------------------------------------------------------------------
scwin.f_exchRt = async function (changeER, checkER) {
  try {
    //scwin.vLoginCoCd
    if (scwin.vLoginCoCd == "023") {//BIDC인경우 외화금액을 원화계좌에서 지급하고 있음. (외환차익 개념을 사용안함)
    } else {
      if (changeER < checkER * 0.7 || changeER > checkER * 1.3) {
        await $c.win.alert($p, '통화코드 선택시 환율 금액 : ' + checkER + '원' + '<br/>' + '환율의 70%  가 되는 금액  : ' + Math.round(checkER * 0.7 * 100) / 100.00 + '원' + '<br/>' + '환율의 130% 가 되는 금액  : ' + Math.round(checkER * 1.3 * 100) / 100.00 + '원' + '<br/>' + '<br/>' + "입력된 환율은 기준 환율의 " + '<br/>' + "70% ~ 130% 사이의 값 이어야 합니다.");
        return false;
      }
    }
  } catch (e) {
    console.log("f_exchRt : " + e);
  }
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
        ds_payment.setCellData(i, "payStsCd", scwin.DECIDESTS); //30 결정
        cnt++;
      }
    }
    if (cnt <= 0) {
      await $c.win.alert($p, "취소할 자료가 존재하지않습니다");
      return false;
    }
    if (await $c.win.confirm($p, "취소하시겠습니까")) {
      sbm_savePayDecision.action = "/ac.fm.paymgnt.paymgnt.ProcessTransferDecisionCancelCMD.do";
      $c.sbm.execute($p, sbm_savePayDecision);
    }
  } catch (e) {
    console.log("fn_cancel : " + e);
  }
};

//-------------------------------------------------------------------------
// 확정/확정취소 콜백
//-------------------------------------------------------------------------
scwin.sbm_savePayDecision_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 통화코드변경
//-------------------------------------------------------------------------
scwin.lc_exchCrcCd_onviewchange = function (info) {
  scwin.f_Exch_Retrieve();
};

//-------------------------------------------------------------------------
// 일괄적용버튼 클릭
//-------------------------------------------------------------------------
scwin.f_WholeAdoption = async function () {
  try {
    let cnt = 0;
    let i = 0;
    if (scwin.f_exchRt(ed_exchRt.getValue(), scwin.checkExchRt) == false) {
      ed_exchRt.setValue(scwin.checkExchRt);
      return;
    }
    for (i = 0; i < ds_payment.getRowCount(); i++) {
      if (ds_payment.getRowStatus(i) != "R" && ds_payment.getCellData(i, "selYn") == 1 && lc_exchCrcCd.getValue() == ds_payment.getCellData(i, "payCrcCd")) {
        cnt++;
        ds_payment.setCellData(i, "payExchRt", ed_exchRt.getValue());
        if (ds_payment.getCellData(i, "payCrcCd") == "JPY") {
          ds_payment.setCellData(i, "payAmt", Math.floor(ed_exchRt.getValue() * ds_payment.getCellData(i, "payAmtFcrc") / 100));
        } else {
          ds_payment.setCellData(i, "payAmt", Math.floor(ed_exchRt.getValue() * ds_payment.getCellData(i, "payAmtFcrc"))); //환산원화 소수점 이하 버림
        }
      }
    }
    if (cnt <= 0) {
      await $c.win.alert($p, "자료를 선택하십시오");
      return false;
    }
  } catch (e) {
    console.log("f_WholeAdoption : " + e);
  }
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

//OnColumnChanged
scwin.gr_paymgnt_onviewchange = function (info) {
  try {
    let rowIndex = info.rowIndex;
    let colid = info.colId;
    //console.log("info :" + JSON.stringify(info));
    //let colid = gr_paymgnt.getColumnID(columnIndex);

    if (colid == "payAmt") {
      if (ds_payment.getCellData(rowIndex, "payCrcCd") == "JPY") {
        ds_payment.setCellData(rowIndex, "payAmt", Math.floor(ds_payment.getCellData(rowIndex, "payExchRt") * ds_payment.getCellData(rowIndex, "payAmtFcrc") / 100));
      } else {
        console.log("scwin.vLoginCoCd :" + scwin.vLoginCoCd);
        if (scwin.vLoginCoCd == "023") {//BIDC인 경우 환산원화 수기로 입력 가능하게 요청 2019.10.11 안중욱 사원
        } else {
          ds_payment.setCellData(rowIndex, "payAmt", Math.floor(ds_payment.getCellData(rowIndex, "payExchRt") * ds_payment.getCellData(rowIndex, "payAmtFcrc")));
        }
      }
    } else if (colid == "payAmtFcrc") {
      ds_payment.setCellData(rowIndex, "reqAmt", ds_payment.getCellData(rowIndex, "reqExchRt") * ds_payment.getCellData(rowIndex, "payAmtFcrc"));
      ds_payment.setCellData(rowIndex, "payAmt", Math.floor(ds_payment.getCellData(rowIndex, "payExchRt") * ds_payment.getCellData(rowIndex, "payAmtFcrc")));
    } else if (colid == "payExchRt") {
      if (ds_payment.getCellData(rowIndex, "payCrcCd") == "JPY") {
        ds_payment.setCellData(rowIndex, "payAmt", Math.floor(ds_payment.getCellData(rowIndex, "payExchRt") * ds_payment.getCellData(rowIndex, "payAmtFcrc") / 100));
      } else {
        ds_payment.setCellData(rowIndex, "payAmt", Math.floor(ds_payment.getCellData(rowIndex, "payExchRt") * ds_payment.getCellData(rowIndex, "payAmtFcrc")));
      }
    }
  } catch (e) {
    console.log("gr_paymgnt_onviewchange : " + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'table1',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',class:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',objTypeName:'data',mandatoryCode:'true',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'3',id:'udc_coCd',refDataCollection:'ds_condition',code:'coCd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통화코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:' w120',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchExchCrcCd',style:'',submenuSize:'auto',ref:'data:ds_condition.payCrcCd',visibleRowNum:'15'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w90',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_payStsCd',style:'',submenuSize:'auto',ref:'data:ds_condition.payStsCd',visibleRowNum:'5'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_clntNo',validExpCode:'',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_clntNm',id:'udc_clntNo',mandatoryName:'false',objTypeName:'data',editTypeName:'select',maxlengthName:'20',name:'clntNm',refDataCollection:'ds_condition',code:'clntNo',mandatoryCode:'true',selectID:'retrieveClntList','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',validTitle:'거래처','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정일자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_dcsnDt',style:'',displayFormat:'yyyy/MM/dd',ref:'data:ds_condition.dcsnDt',mandatory:'true',title:'확정일자'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통화코드',style:''}},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_exchCrcCd',style:'width: 140px;',submenuSize:'auto','ev:onviewchange':'scwin.lc_exchCrcCd_onviewchange',visibleRowNum:'15'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용환율',style:''}},{T:1,N:'xf:input',A:{class:' tar',id:'ed_exchRt',placeholder:'',style:'width: 100px;',displayFormat:'#,##0.##',dataType:'number'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_WholeAdoption',style:'',type:'button','ev:onclick':'scwin.f_WholeAdoption'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄적용'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrd',gridID:'gr_paymgnt',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_payment',id:'gr_paymgnt',style:'',visibleRowNum:'11',visibleRowNumFix:'true',readOnly:'true',fixedColumn:'5',resize:'true',columnMove:'true',fixedColumnNoMove:'true','ev:oncellclick':'scwin.gr_paymgnt_oncellclick',rowStatusVisible:'true','ev:onviewchange':'scwin.gr_paymgnt_onviewchange'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',width:'50',value:' ',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'상태',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'요청일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'거래처',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'화폐',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'환율',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'외화',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'원화',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'지급환율',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'환산원화',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'지급<br/>전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'지급번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'지급등록<br/>기준일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column46',value:'지급은행',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column49',value:'지급계좌',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',checkAlways:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payStsCd',inputType:'select',width:'70',textAlign:'center',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnDt',inputType:'text',width:'100',textAlign:'center',displayFormat:'####/##/##',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'180',textAlign:'left',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payCrcCd',inputType:'select',width:'80',textAlign:'left',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqExchRt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0.0000',maxLength:'5',editType:'select'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAmtFcrc',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqAmt',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payExchRt',inputType:'text',width:'80',textAlign:'right',displayFormat:'#,##0.0000',allowChar:'0-9.',maxLength:'5.4',readOnly:'false',dataType:'float'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAmt',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0',readOnly:'false',allowChar:'0-9',maxLength:'13',editType:'select'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outbrAcctNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'outbrAcctDeptNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',id:'paySlipNo',displayMode:'label',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'payNo',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'interPayDt',displayMode:'label',textAlign:'center',editFormat:'####/##/##',readOnly:'false',maxLength:'8',allOption:'0-9',editType:'select'}},{T:1,N:'w2:column',A:{width:'200',inputType:'select',id:'payBankCd',displayMode:'label',textAlign:'center'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_bankcd'},E:[{T:1,N:'w2:label',A:{ref:'bankCdNm'}},{T:1,N:'w2:value',A:{ref:'bankCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'payBankAcntNo',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label',textAlign:'right',value:'Total'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum(\'payAmtFcrc\')',displayFormat:'#,##0.00',id:'column24',displayMode:'label',textAlign:'right',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum(\'reqAmt\')',displayFormat:'#,##0',id:'column23',displayMode:'label',textAlign:'right',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum(\'payAmt\')',displayFormat:'#,##0',id:'column22',displayMode:'label',textAlign:'right',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column51',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'통장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td form-group',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'5',objTypeCode:'data',editTypeCode:'select',popupID:'',code:'bankbookNo',validExpCode:'',UpperFlagCode:'1',readOnlyName:'true',maxlengthName:'20',mandatoryName:'false',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_Bankbook_onclickEvent',allowCharCode:'0-9',codeId:'ed_bankbookNo',selectID:'retrieveForeignBankbookInfo',validTitle:'통장',name:'bankbookKndNm',nameId:'ed_bankbookKndNm',style:'',editTypeName:'select',id:'udc_Bankbook','ev:onblurCodeEvent':'scwin.udc_Bankbook_onblurCodeEvent',class:'',refDataCollection:'ds_bankBook',btnId:'btn_Bankbook',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'xf:input',A:{style:'width:150px;',readOnly:'true',id:'ed_bankbookNm',placeholder:'',allowChar:'a-zA-Z0-9',class:'',objType:'key',ref:'data:ds_bankBook.bankbookNm'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Cancel',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.fn_cancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Confirm',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.fn_decision'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]}]}]}]}]}]}]}]})