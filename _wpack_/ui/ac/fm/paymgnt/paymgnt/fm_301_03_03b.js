/*amd /ui/ac/fm/paymgnt/paymgnt/fm_301_03_03b.xml 89173 38d8eefd6cdc9b740d55b56a4d4301b617a4515de8957b609c9d33dbc8e8016d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'payStsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payMthdCd',name:'지불방법코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payDt',name:'지불일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnDt',name:'확정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDept',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'일자조회구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqBankCd',name:'지급은행',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftCheckNo',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'addupDivsCd',name:'합산분할코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'refPayNo',name:'요청지급번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payment',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_payment_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'요청지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'요청금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'발생전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctCd',name:'발생계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'발생계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'발생적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'발생귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'발생귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankCd',name:'지급은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'지급계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'writeDt',name:'e새로작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnEmpNo',name:'확정사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'지급전표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'지급환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'지급금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'결제원금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'지급통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueSlipNo',name:'만기전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addupDivsCd',name:'합산분할코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refPayNo',name:'참조지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firmBankYn',name:'펌뱅킹여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'draftCheckAmt',name:'어음수표금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prtDt',name:'발행일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueBankCd',name:'발급은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'증빙건수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'postDt2',name:'회계처리일자2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId2',name:'등록자ID2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm2',name:'등록자명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errYn',name:'오류여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_draftCheckCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'draftStsCd',name:'상태코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftCheckClsCd',name:'01:실물어음,03:당좌수표',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_draftCheck',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'지급수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDd',name:'어음일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'요청금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'발생전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctCd',name:'발생계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'발생계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'발생적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'발생귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'발생귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankCd',name:'지급은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'지급계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnEmpNo',name:'확정사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'지급전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'지급환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'지급금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'결제원금',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'지급통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueSlipNo',name:'만기전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addupDivsCd',name:'합산분할코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refPayNo',name:'참조지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firmBankYn',name:'펌뱅킹여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckAmt',name:'어음수표금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtDt',name:'발행일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'writeDt',name:'e새로작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'납기일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueBankCd',name:'발급은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'증빙개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt2',name:'회계처리일자2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId2',name:'등록자ID2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm2',name:'등록자명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errYn',name:'오류여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankcd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCdNm',name:'은행명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Later_Traver_Distance_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Later_Traver_Distance',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'col5',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_bankcd_Retrieve',action:'/ac.fm.stdinfomgnt.RetrieveBankCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_bankcd_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDraftCheckPaymgnt',action:'/ac.fm.paymgnt.paymgnt.RetrieveDraftCheckPaymentContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_payment","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_payment","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDraftCheckPaymgnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDraftCheck',action:'/ac.fm.paymgnt.notepay.RetrieveDraftCheckContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_draftCheckCondition","key":"IN_DS1"},{"id":"ds_draftCheck","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_draftCheck","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDraftCheck_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchLaterTraverDistance',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_Later_Traver_Distance_condition',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_searchLaterTraverDistance_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_savePayDecision',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_payment","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_savePayDecision_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");

// 상태코드 상수
scwin.NEW = "01"; // 신규
scwin.PREPARESTS = "00"; // 준비
scwin.RESERVESTS = "10"; // 보류
scwin.WAITSTS = "20"; // 대기
scwin.DECIDESTS = "30"; // 결정
scwin.DECISIONSTS = "40"; // 확정
scwin.COMPLETE = "50"; // 완료
scwin.errYn = "N"; // 오류

// 지급방법 상수
scwin.ELECTRONICDRAFT = "40"; // 전자어음
scwin.DRAFTCHECK = "50"; // 약속어음
scwin.CURR_DRAFTCHECK = "60"; // 당좌수표
scwin.g_sFlag = "";
scwin.g_clntNm = "";
scwin.gb_currDraftCheckClsCd = false;
scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 
scwin.loginCoCd = $c.data.getMemInfo($p, "coCd");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.loginCoCd) ? '' : scwin.loginCoCd; // 소속 자회사
scwin.loginCoClsCd = $c.data.getMemInfo($p, "coClsCd");
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.loginCoClsCd) ? '' : scwin.loginCoClsCd;
; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.isSubCompany = false;
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
    grpCd: "FM017",
    compID: "lc_payStsCd,gr_paymgnt:payStsCd"
  }, {
    grpCd: "FM018",
    compID: "lc_payMthdCd",
    opt: {
      "range": "2,20"
    }
  }, {
    grpCd: "FM063",
    compID: "lc_reqBankCd"
  }, {
    grpCd: "FM017",
    compID: "gr_paymgnt:payStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  gr_paymgnt.setHeaderClass("dueDt", "txt-blue"); //만기일정보 최초 파란색처리
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  lc_payMthdCd.setSelectedIndex(0);
  lc_payStsCd.setSelectedIndex(0);
  ed_dcsnDt.setValue(scwin.g_sCurrDate);
  ed_qryEndDt.setValue(scwin.g_sCurrDate);
  lc_prtDueCd.setSelectedIndex(0);
  gr_paymgnt.setColumnVisible("payBankbookNo", false); //Show false
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
  $c.data.dataListFilter($p, dlt2, "fltrCd2 == '40'"); // 새로운 데이터리스트에 필터("range" : "2,40")
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
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  /*
   var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  				,ed_coCd.text, txt_coNm.value
  				,pWinCloseTF,null,null,null,null
  				,null,null,null,null,null);
  */
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
      ds_bankcd.sort("bankCd", 0); //ASIS 그리드 셀 소트처리 추가
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
    let ret = await $c.gus.cfValidate($p, [ed_coCd]);
    if (!ret) {
      return false;
    }
    let ret2 = await $c.gus.cfValidate($p, [ed_dcsnDt, ed_qryEndDt]);
    if (!ret2) {
      return false;
    }
    let cClsCd = "";
    if (ret && ret2) {
      // 4월17일 수정 발행일 , 만기일,확정일 구분에 따라 조회되도록 수정 <---
      if (lc_prtDueCd.getValue() == "1") {
        cClsCd = 1;
      } else if (lc_prtDueCd.getValue() == "2") {
        cClsCd = 2;
      } else {
        cClsCd = 3;
      }
      const params = {
        scClsCd: cClsCd,
        coClsCd: scwin.txtCoClsCd
      };
      //데이터셋에 정보설정
      ds_condition.setJSON(params);
      ds_payment.removeAll();
      $c.sbm.execute($p, sbm_retrieveDraftCheckPaymgnt);
    }
  } catch (e) {
    console.log("f_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieveDraftCheckPaymgnt_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_payment.getRowCount()));
    if (ds_payment.getRowCount() == 0) {
      await $c.win.alert($p, "조회된 데이터가 없습니다");
      $c.gus.cfDisableObjects($p, [btn_Confirm, btn_Cancel, btn_ErrCancel]);
    } else {
      var options = {};
      options.sortIndex = "clntNo draftCheckNo payNo";
      options.sortOrder = "1 1 1";
      ds_payment.multisort(options); //SortExpr +clntNo +draftCheckNo +payNo

      //특정정보에 대한 색상처리 추가 ASIS OnUserColor
      for (let i = 0; i < gr_paymgnt.getRowCount(); i++) {
        if (gr_paymgnt.getCellData(i, "draftDd")) {
          if (gr_paymgnt.getCellData(i, "draftDdCntCd") != gr_paymgnt.getCellData(i, "draftDd")) {
            console.log("??? " + gr_paymgnt.getCellData(i, "clntNm")); //clntNm
            gr_paymgnt.setRowBackgroundColor(i, "#6495ed");
          }
        }
        //gr_paymgnt.setRowColor(rowIndex, "#6495ed");
      }
      if (lc_payStsCd.getValue() == scwin.DECIDESTS) {
        $c.gus.cfEnableObjects($p, [btn_Confirm]);
        $c.gus.cfDisableObjects($p, [btn_Cancel, btn_ErrCancel]);
      } else if (lc_payStsCd.getValue() == scwin.DECISIONSTS) {
        $c.gus.cfDisableObjects($p, [btn_Confirm]);
        $c.gus.cfEnableObjects($p, [btn_Cancel, btn_ErrCancel]);
      }

      /*
      ELECTRONICDRAFT   = "40" // 전자어음
      DRAFTCHECK = "50" // 약속어음
      CURR_DRAFTCHECK = "60" // 당좌수표
       */
      //헤더클래스 정보 초기화.
      /*gr_paymgnt.setHeaderClass("draftCheckNo", "");
      gr_paymgnt.setHeaderClass("dueDt", "");
      gr_paymgnt.setHeaderClass("payBankAcntNo", "");
      gr_paymgnt.setHeaderClass("payBankbookNo", "");
      gr_paymgnt.setHeaderClass("payBankCd", "");*/
      gr_paymgnt.removeHeaderClass("draftCheckNo", "txt-red");
      gr_paymgnt.removeHeaderClass("dueDt", "txt-red");
      gr_paymgnt.removeHeaderClass("dueDt", "txt-blue");
      gr_paymgnt.removeHeaderClass("payBankAcntNo", "txt-red");
      gr_paymgnt.removeHeaderClass("payBankbookNo", "txt-red");
      gr_paymgnt.removeHeaderClass("payBankCd", "txt-red");
      if (lc_payMthdCd.getValue() == scwin.CURR_DRAFTCHECK) {
        //gr_paymgnt.validExp="draftCheckNo:어음수표번호:yes,prtDt:발행일:yes:date=YYYYMMDD"
        gr_paymgnt.getCellInfo("draftCheckNo").options.mandatory = true;
        gr_paymgnt.getCellInfo("prtDt").options.mandatory = true;
        gr_paymgnt.getCellInfo("dueDt").options.mandatory = false;
        gr_paymgnt.setReadOnly("column", "draftCheckNo", false); //ANY
        gr_paymgnt.setHeaderClass("draftCheckNo", "txt-red"); //DCSS.MANDATORY_COLOR
        gr_paymgnt.setHeaderClass("dueDt", "");
        gr_paymgnt.setReadOnly("column", "dueDt", true); //none
        gr_paymgnt.setColumnVisible("dueDt", false); //false
        gr_paymgnt.setReadOnly("column", "draftDdCntCd", true); //none
        gr_paymgnt.setHeaderClass("payBankAcntNo", "");
        gr_paymgnt.setHeaderClass("payBankbookNo", "txt-red"); //DCSS.MANDATORY_COLOR
        gr_paymgnt.setHeaderClass("payBankCd", "");
        $c.gus.cfEnableObjects($p, [btn_DraftCheckSerial]);
        scwin.gb_currDraftCheckClsCd = "true";
      } else if (lc_payMthdCd.getValue() == scwin.DRAFTCHECK) {
        //gr_paymgnt.validExp="draftCheckNo:어음수표번호:yes,prtDt:발행일:yes:date=YYYYMMDD,dueDt:만기일:yes:date=YYYYMMDD"
        gr_paymgnt.getCellInfo("draftCheckNo").options.mandatory = true;
        gr_paymgnt.getCellInfo("prtDt").options.mandatory = true;
        gr_paymgnt.getCellInfo("dueDt").options.mandatory = true;
        gr_paymgnt.setReadOnly("column", "draftDdCntCd", false); //ANY
        gr_paymgnt.setHeaderClass("draftCheckNo", "txt-red"); //DCSS.MANDATORY_COLOR
        gr_paymgnt.setHeaderClass("dueDt", "txt-red");
        gr_paymgnt.setReadOnly("column", "dueDt", false); //ANY
        gr_paymgnt.setColumnVisible("dueDt", true); //true
        gr_paymgnt.setReadOnly("column", "draftDdCntCd", false); //ANY
        gr_paymgnt.setHeaderClass("payBankAcntNo", "");
        gr_paymgnt.setHeaderClass("payBankbookNo", "");
        gr_paymgnt.setHeaderClass("payBankCd", "");
        gr_paymgnt.setColumnVisible("draftDdCntCd", true); //true

        $c.gus.cfEnableObjects($p, [btn_DraftCheckSerial]);
        scwin.gb_currDraftCheckClsCd = "false";
      } else if (lc_payMthdCd.getValue() == scwin.ELECTRONICDRAFT) {
        //gr_paymgnt.validExp="prtDt:발행일:yes:date=YYYYMMDD,dueDt:만기일:yes:date=YYYYMMDD"
        gr_paymgnt.getCellInfo("draftCheckNo").options.mandatory = false;
        gr_paymgnt.getCellInfo("prtDt").options.mandatory = true;
        gr_paymgnt.getCellInfo("dueDt").options.mandatory = true;
        gr_paymgnt.setHeaderClass("draftCheckNo", "");
        gr_paymgnt.setHeaderClass("dueDt", "txt-red");
        gr_paymgnt.setHeaderClass("payBankAcntNo", "txt-red");
        gr_paymgnt.setHeaderClass("payBankCd", "txt-red");
        gr_paymgnt.setHeaderClass("payBankbookNo", "txt-red");
        gr_paymgnt.setReadOnly("column", "dueDt", false); //ANY
        gr_paymgnt.setColumnVisible("dueDt", true);
        gr_paymgnt.setReadOnly("column", "draftCheckNo", true); //none
        gr_paymgnt.setReadOnly("column", "draftDdCntCd", false); //ANY
        gr_paymgnt.setColumnVisible("draftDdCntCd", true); //Show True

        $c.gus.cfDisableObjects($p, [btn_DraftCheckSerial]);
        scwin.gb_currDraftCheckClsCd = "false";
      }
    }
    $c.gus.cfGoPrevPosition($p, gr_paymgnt, 0); //첫번째 row 포지션이동
  } catch (e) {
    console.log("sbm_retrieveDraftCheckPaymgnt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 만기일 일괄적용함수
//-------------------------------------------------------------------------
scwin.f_UpdateDraftDdCntCd = async function () {
  try {
    let cnt = 0;
    let i = 0;
    if (ds_payment.getRowCount() <= 0) {
      await $c.win.alert($p, "자료가 존재하지 않습니다.");
      return false;
    }
    if (ed_draftDdCntCd.getValue() == "") {
      await $c.win.alert($p, "일수를 입력하세요");
      return false;
    }
    for (i = 0; i < ds_payment.getRowCount(); i++) {
      if (ds_payment.getCellData(i, "selYn") == 1) {
        cnt++;
        ds_payment.setCellData(i, "draftDdCntCd", ed_draftDdCntCd.getValue());
      }
    }
    if (cnt <= 0) {
      await $c.win.alert($p, "자료를 선택하십시오");
      return false;
    }
  } catch (e) {
    console.log("f_UpdateDraftDdCntCd : " + e);
  }
};

//-------------------------------------------------------------------------
// 수표번호 자동생성
//-------------------------------------------------------------------------
scwin.f_AutoCreate = function () {
  //TODO 구조변경으로 콜백함수에서 처리
  scwin.f_DraftCheck_Retrieve();
};

//-------------------------------------------------------------------------
// 어음수표번호 조회
//-------------------------------------------------------------------------
scwin.f_DraftCheck_Retrieve = async function () {
  try {
    ds_draftCheckCondition.set("draftStsCd", scwin.NEW);
    let draftCheckClsCd = "";
    if (ds_payment.getRowCount() <= 0) {
      await $c.win.alert($p, "지급내역이 존재하지않습니다.");
      return false;
    }
    if (lc_payMthdCd.getValue() == "50")
      // 실물어음일경우
      {
        draftCheckClsCd = "01";
      } else if (lc_payMthdCd.getValue() == "60")
      // 당좌수표일경우
      {
        draftCheckClsCd = "03";
      }
    ds_draftCheckCondition.set("draftCheckClsCd", draftCheckClsCd);
    $c.sbm.execute($p, sbm_retrieveDraftCheck);
  } catch (e) {
    console.log("f_DraftCheck_Retrieve : " + e);
  }
};
//-------------------------------------------------------------------------
// 수표번호 자동생성 콜백(ASIS f_AutoCreate())
//-------------------------------------------------------------------------
scwin.sbm_retrieveDraftCheck_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    // 어음수표번호 생성
    let j = 1;
    let k = 0;
    let l = 0;
    let chk = 0;
    let cnt = 0;
    let sPrtDt = "";
    let sDueDt = "";
    let bRet = false;
    let arr = new Array();
    if (ds_draftCheck.getRowCount() == 0) {
      await $c.win.alert($p, "어음수표번호내역이 존재하지않아 어음수표번호를 생성할수 없습니다.");
      return false;
    }
    for (i = 0; i < ds_payment.getRowCount(); i++) {
      if (ds_payment.getCellData(i, "selYn") == 1) {
        k++;
        arr[k] = i;
        if (k - 1 <= 0) {
          l = 1;
        } else {
          l = k - 1;
        }
        if (gb_currDraftCheckClsCd == "false") {
          if (ds_payment.getCellData(i, "dueDt") == null || ds_payment.getCellData(i, "dueDt") == "") {
            await $c.win.alert($p, "만기일자를 입력하십시오.");
            return false;
          }
          if (ds_payment.getCellData(arr[k], "clntNo") == ds_payment.getCellData(arr[l], "clntNo") && ds_payment.getCellData(arr[k], "dueDt") == ds_payment.getCellData(arr[l], "dueDt")) {
            ds_payment.setCellData(i, "draftCheckNo", ds_draftCheck.getCellData(j, "draftCheckNo"));
            ds_payment.setCellData(i, "issueBankCd", ds_draftCheck.getCellData(j, "issueBankCd"));
          } else {
            j++;
            if (j > ds_draftCheck.getRowCount()) {
              return false;
            }
            ds_payment.setCellData(i, "draftCheckNo", ds_draftCheck.getCellData(j, "draftCheckNo"));
            ds_payment.setCellData(i, "issueBankCd", ds_draftCheck.getCellData(j, "issueBankCd"));
          }
        } else {
          if (ds_payment.getCellData(arr[k], "clntNo") == ds_payment.getCellData(arr[l], "clntNo")) {
            ds_payment.setCellData(i, "draftCheckNo", ds_draftCheck.getCellData(j, "draftCheckNo"));
            ds_payment.setCellData(i, "issueBankCd", ds_draftCheck.getCellData(j, "issueBankCd"));
          } else {
            j++;
            if (j > ds_draftCheck.getRowCount()) {
              return false;
            }
            ds_payment.setCellData(i, "draftCheckNo", ds_draftCheck.getCellData(j, "draftCheckNo"));
            ds_payment.setCellData(i, "issueBankCd", ds_draftCheck.getCellData(j, "issueBankCd"));
          }
        }
      }
    }
    if (k <= 0) {
      await $c.win.alert($p, "확정할 자료를 선택하십시오");
      return false;
    }
  } catch (e) {
    console.log("sbm_retrieveDraftCheck_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 일괄적용함수
//-------------------------------------------------------------------------
scwin.f_WholeAdoption = async function (e) {
  try {
    let cnt = 0;
    if (ds_payment.getRowCount() <= 0) {
      await $c.win.alert($p, "자료가 존재하지 않습니다.");
      return false;
    }
    for (i = 0; i < ds_payment.getRowCount(); i++) {
      if (ds_payment.getCellData(i, "selYn") == 1) {
        cnt++;
        if (lc_prtDueCd.getValue() == "1") {
          ds_payment.setCellData(i, "prtDt", ed_dcsnDt.getValue());
        } else if (lc_prtDueCd.getValue() == "2") {
          ds_payment.setCellData(i, "dueDt", ed_dcsnDt.getValue());
        } else {
          await $c.win.alert($p, "발행일자와 만기일자일경우만 일괄적용할 수 있습니다.");
          return false;
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
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function (e) {
  $c.gus.cfInitObjects($p, table1, null);
  ed_dcsnDt.setValue(scwin.g_sCurrDate);
  ed_qryEndDt.setValue(""); //ASIS 어떤사유인지 값이 지워져서 추가함.
  scwin.lc_payMthdCd_onviewchange();
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
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_payment.getRowCount() <= 0) {
    await $c.win.alert($p, "지급내역이 존재하지않습니다.");
    return false;
  }
  const options = {
    fileName: "어음수표확정.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: "어음수표확정",
    bodyWordwrap: true // 줄바꿈
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_paymgnt, options, infoArr);
};

//-------------------------------------------------------------------------
// 증빙 등록 팝업
//-------------------------------------------------------------------------
scwin.f_evidPopUp = async function () {
  try {
    let data = {
      pgmId: "fm_301_01_01b",
      //TOBE returnValue Y f_Retrieve(); 를 화면에서 처리하기 위한 정보
      slipNo: ds_payment.getCellData(ds_payment.getRowPosition(), "outbrSlipNo")
    };
    let win_url = "/ui/ac/fi/taxbiz/evidmgnt/fi_403_01_02b.xml";
    let opts = {
      id: "smpPop",
      popupName: "증빙등록조회",
      modal: true,
      type: "browserPopup",
      width: 1450,
      height: 1000,
      title: true
    };
    $c.win.openPopup($p, win_url, opts, data);
  } catch (e) {
    console.log("f_evidPopUp >" + e);
  }
};

//-------------------------------------------------------------------------
// 차량별 주행거리 누계데이터 조회
//-------------------------------------------------------------------------
scwin.getBankName = function (bankbookNo) {
  try {
    // 주의점 PARAM값이 너무 길면 쿼리 결과가 매핑이 되지 않는다. ~!!1
    // SELECT 절 
    let param1 = " BANKBOOK_NO     		as COL1 " + ",CLNT_NO 				as COL2 " + ",BANKBOOK_NM 			as COL3 " + ",''						as COL4 " + ",BANK_ACNT_NO 			as COL5 " + ",BANKBOOK_KND_CD 		as COL6 " + ",'' 						as COL7 " + ",'' 						as COL8 " + ",'' 						as COL9 " + ",'' 						as COL10 ";
    // 대상테이블 	
    let param2 = " TB_FM002 ";

    // 조건절	  
    let param3 = " AND BANKBOOK_NO = '" + bankbookNo + "'";

    // 정렬    
    let param4 = " BANKBOOK_NO ";
    const strParam = {
      sysCd: "CommonEBC" // 시스템코드
      ,
      queryId: "dinymicQueryTest" // 쿼리ID
      ,
      param1: param1 // SELECT
      ,
      param2: param2 // 대상테이블
      ,
      param3: param3 // 조건절
      ,
      param4: param4 // CD
    };
    //데이터셋에 정보설정
    ds_Later_Traver_Distance_condition.setJSON(strParam);
    $c.sbm.execute($p, sbm_searchLaterTraverDistance);
  } catch (e) {
    console.log("getBankName >" + e);
  }
};

//-------------------------------------------------------------------------
// 차량별 주행거리 누계데이터 조회(콜백)
//-------------------------------------------------------------------------
scwin.sbm_searchLaterTraverDistance_submitdone = function (bankbookNo) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    if (e.responseJSON.GAUCE) {
      ds_Later_Traver_Distance.setJSON(e.responseJSON.GAUCE);
    }
    if (ds_Later_Traver_Distance.getRowCount() > 0) {
      ds_payment.setCellData(ds_payment.getRowPosition(), "payBankAcntNo", ds_Later_Traver_Distance.getCellData(ds_Later_Traver_Distance.getRowCount() - 1, "col5"));
    }
  } catch (e) {
    console.log("sbm_searchLaterTraverDistance_submitdone >" + e);
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
  if (columnId == "dueSlipNo" && rowIndex >= 0) {
    if (!(ds_payment.getCellData(rowIndex, "dueSlipNo") == null || ds_payment.getCellData(rowIndex, "dueSlipNo") == "")) {
      $c.gus.cfShowSlipInfo($p, ds_payment.getCellData(rowIndex, "dueSlipNo"));
    }
  }
  if (columnId == "evidenceCnt" && rowIndex >= 0) {
    scwin.f_evidPopUp();
  }
};

//-------------------------------------------------------------------------
// 일수입력시 gr_paymgnt
//-------------------------------------------------------------------------
//scwin.gr_paymgnt_oncolumnindexchange = function (columnIndex, oldColumnIndex) {
scwin.ds_payment_oncelldatachange = function (info) {
  try {
    let draftDdCntCd = "";
    let draftCheckNo = "";
    let clntNo = "";
    let prtDt = "";
    let colid = info.colID;
    let rowIndex = info.rowIndex;
    if (colid == "prtDt" || colid == "draftDdCntCd") {
      //sClntNo = ds_payment.getCellData(rowIndex,"clntNo"); ASIS 미사용
      prtDt = ds_payment.getCellData(rowIndex, "prtDt");
      if (ds_payment.getCellData(rowIndex, "draftDdCntCd") == null || ds_payment.getCellData(rowIndex, "draftDdCntCd") == "") {
        draftDdCntCd = 0;
      } else {
        draftDdCntCd = parseInt(ds_payment.getCellData(rowIndex, "draftDdCntCd"));
      }
      if (ds_payment.getCellData(rowIndex, "payMthdCd") != scwin.CURR_DRAFTCHECK) {
        ds_payment.setCellData(rowIndex, "dueDt", prtDt.toDate().after(0, 0, draftDdCntCd).format("YYYYMMDD"));
      }
    }
  } catch (e) {
    console.log("ds_payment_oncelldatachange : " + e);
  }
};

//-------------------------------------------------------------------------
// ASIS OnPopup 의 일자, OnExit 혼합정보 처리.
//-------------------------------------------------------------------------
scwin.gr_paymgnt_onafteredit = function (rowIndex, columnIndex, value) {
  try {
    let colid = gr_paymgnt.getColumnID(columnIndex);
    let sDueDt = "";
    let sClntNo = "";
    let sDraftCheckNo = "";
    let sAcctDeptCd = "";
    let g_clntNm = "";
    if (colid == "prtDt" || colid == "dueDt" || colid == "draftCheckNo") {
      if (!(ds_payment.getCellData(rowIndex, "dueDt") == null || ds_payment.getCellData(rowIndex, "dueDt") == "")) {
        if (ds_payment.getCellData(rowIndex, "prtDt") > ds_payment.getCellData(rowIndex, "dueDt")) {
          $c.win.alert($p, "발행일이 만기일보다 클 수 없습니다");
          ds_payment.setCellData(rowIndex, "dueDt", ds_payment.getOriginalCellData(rowIndex, "dueDt"));
          return false;
        }
      }
      if (colid == "dueDt") {
        sDueDt = ds_payment.getCellData(rowIndex, "dueDt");
        sClntNo = ds_payment.getCellData(rowIndex, "clntNo");
        sAcctDeptCd = ds_payment.getCellData(rowIndex, "outbrAcctDeptCd");
        if (ds_payment.getCellData(rowIndex, "draftCheckNo") == null || ds_payment.getCellData(rowIndex, "draftCheckNo") == "") {
          return false;
        }
        sDraftCheckNo = ds_payment.getCellData(rowIndex, "draftCheckNo");
        for (i = 0; i < ds_payment.getRowCount(); i++) {
          if (ds_payment.getCellData(i, "selYn") == 1) {
            if (sClntNo == ds_payment.getCellData(i, "clntNo")) {
              if (sDraftCheckNo == ds_payment.getCellData(i, "draftCheckNo")) {
                if (sDueDt != ds_payment.getCellData(i, "dueDt")) {
                  g_clntNm = ds_payment.getCellData(i, "clntNm");
                  $c.win.alert($p, "거래처 " + ds_payment.getCellData(i, "clntNm").trim() + "에 대해 만기일자가 다를 경우 " + "<br/>" + "동일어음수표번호로 저장할 수 없습니다. ");
                  ds_payment.setCellData(rowIndex, colid, ds_payment.getOriginalCellData(rowIndex, colid));
                  return false;
                }
                if (sAcctDeptCd != ds_payment.getCellData(i, "outbrAcctDeptCd")) {
                  g_clntNm = ds_payment.getCellData(i, "clntNm");
                  $c.win.alert($p, "거래처 " + ds_payment.getCellData(i, "clntNm").trim() + "에 대해 귀속부서가 다를 경우 " + "<br/>" + "동일어음수표번호로 저장할 수 없습니다. ");
                  ds_payment.setCellData(rowIndex, colid, ds_payment.getOriginalCellData(rowIndex, colid));
                  return false;
                }
              }
            } else {
              if (sDraftCheckNo == ds_payment.getCellData(i, "draftCheckNo")) {
                g_clntNm = ds_payment.getCellData(i, "clntNm");
                $c.win.alert($p, "거래처가 다를 경우 동일어음수표번호로 저장할 수 없습니다. ");
                ds_payment.setCellData(rowIndex, colid, ds_payment.getOriginalCellData(rowIndex, colid));
                return false;
              }
            }
          }
        }
      }
    }
    if (colid == "payBankbookNo") {
      let bankbookNo = ds_payment.getCellData(rowIndex, "payBankbookNo");
      scwin.getBankName(bankbookNo);
    }
  } catch (e) {
    console.log("gr_paymgnt_onafteredit >" + e);
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
// 귀속부서코드
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_reqAcctDeptCd, ed_reqAcctDeptNm, '4');
};
//-------------------------------------------------------------------------
// 귀속부서명
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpNm('4', ed_reqAcctDeptCd, ed_reqAcctDeptNm, 'T');
};

//-------------------------------------------------------------------------
// 귀속부서찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('4', ed_reqAcctDeptCd, ed_reqAcctDeptNm, 'F');
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
    if (select_code == '4' || select_code == '2') {
      //자회사 회계시스템 추가사항 - 부서,거래처 선택시 회사코드 필수( 2016.09.21)
      let ret = await $c.gus.cfValidate($p, [ed_coCd]);
      if (!ret) {
        return false;
      }
    }
    switch (select_code) {
      // 거래처 PopUp 호출	
      case '2':
        param = ",,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null,null,"F",null,null); // 거래처
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
      // 사업자번호 PopUp 호출	
      case '3':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 사업자번호
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
      // 관리부서 PopUp 호출
      case '4':
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd; //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null,null,null,null,null); // 부서
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
    if (select_code == '4' || select_code == '2') {
      //자회사 회계시스템 추가사항 - 부서,거래처 선택시 회사코드 필수( 2016.09.21)
      let ret = await $c.gus.cfValidate($p, [ed_coCd]);
      if (!ret) {
        return false;
      }
    }
    switch (select_code) {
      // 거래처 PopUp 호출	
      case '2':
        param = ",,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null,null,"F",null,null); // 거래처
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
      // 사업자번호 PopUp 호출	
      case '3':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 사업자번호
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
      // 관리부서 PopUp 호출
      case '4':
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd; //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null,null,null,null,null); // 부서
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
    }
  } catch (e) {
    console.log("f_openPopUpNm : " + e);
  }
};

//-------------------------------------------------------------------------
// 귀속부서 PopUp 콜백
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
// 확정
//-------------------------------------------------------------------------
scwin.fn_decision = async function (e) {
  try {
    let i = 0;
    let cnt = 0;
    for (i = 0; i < ds_payment.getRowCount(); i++) {
      if (ds_payment.getCellData(i, "selYn") == 1) {
        cnt++;
      } //end of if

      if (ds_payment.getCellData(i, "selYn") == 1 && lc_payMthdCd.getValue() == scwin.CURR_DRAFTCHECK && ds_payment.getCellData(i, "payBankbookNo") == '') {
        await $c.win.alert($p, i + "번째 행 통장번호 항목은 필수입력 항목 입니다.");
        return false;
      } //end of if
    } //end of for  

    if (cnt <= 0) {
      await $c.win.alert($p, "확정할 자료가 존재하지않습니다");
      return false;
    } //end of if

    let ret = await $c.gus.cfValidate($p, [gr_paymgnt]);
    if (!ret) {
      return false;
    }
    if (await $c.win.confirm($p, "확정하시겠습니까?")) {
      for (i = 0; i < ds_payment.getRowCount(); i++) {
        if (ds_payment.getCellData(i, "selYn") == 1) {
          ds_payment.setCellData(i, "payStsCd", scwin.DECISIONSTS); //40 확정
        }
      }
      if (ds_payment.getCellData(0, "payMthdCd") == scwin.ELECTRONICDRAFT) {
        sbm_savePayDecision.action = "/ac.fm.paymgnt.paymgnt.ProcessElectronicDraftDecisionCMD.do";
      } else {
        sbm_savePayDecision.action = "/ac.fm.paymgnt.paymgnt.ProcessDraftDecisionCMD.do";
      }
      $c.sbm.execute($p, sbm_savePayDecision);
    }
  } catch (e) {
    console.log("fn_decision >" + e);
  }
};

//-------------------------------------------------------------------------
// 확정취소
//-------------------------------------------------------------------------
scwin.fn_cancelN = function () {
  scwin.fn_cancel('N');
};

//-------------------------------------------------------------------------
// 확정취소(메일발송)
//-------------------------------------------------------------------------
scwin.fn_cancelY = function () {
  scwin.fn_cancel('Y');
};

//-------------------------------------------------------------------------
// 확정취소
//-------------------------------------------------------------------------
scwin.fn_cancel = async function (errYn) {
  try {
    let i = 0;
    let cnt = 0;
    if (ds_payment.getRowCount() == false) {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_049, "자료"));
      return false;
    }
    for (i = 0; i < ds_payment.getRowCount(); i++) {
      if (ds_payment.getCellData(i, "selYn") != 0) {
        cnt++;
      }
    }
    if (cnt <= 0) {
      await $c.win.alert($p, "취소할 자료가 존재하지않습니다");
      return false;
    }
    for (i = 0; i < ds_payment.getRowCount(); i++) {
      if (ds_payment.getCellData(i, "selYn") == 1) {
        if (ds_payment.getCellData(i, "dueSlipNo") != '') {
          await $c.win.alert($p, "어음수표번호 : " + ds_payment.getCellData(i, "draftCheckNo") + "<br/>" + "해당 데이터는 어음수표만기전표가 존재하여 확정취소 불가 합니다.<br/><br/>" + "어음수표만기처리 화면에서 어음수표 만기취소 처리 후<br/>" + "현재 화면에서 어음수표확정 취소가 가능 합니다.");
          return false;
        }
      }
    }
    let ret = await $c.gus.cfValidate($p, [gr_paymgnt]);
    if (!ret) {
      return false;
    }
    if (await $c.win.confirm($p, "취소하시겠습니까?")) {
      for (i = 0; i < ds_payment.getRowCount(); i++) {
        if (ds_payment.getCellData(i, "selYn") != 0) {
          ds_payment.setCellData(i, "payStsCd", scwin.DECIDESTS); //40 확정

          if (errYn == "Y") {
            //오류취소 여부
            ds_payment.setCellData(i, "errYn", "Y");
          } else {
            ds_payment.setCellData(i, "errYn", "N");
          }
        }
      }
      if (ds_payment.getCellData(i, "payMthdCd") == scwin.ELECTRONICDRAFT) {
        sbm_savePayDecision.action = "/ac.fm.paymgnt.paymgnt.ProcessElectronicDraftDecisionCancelCMD.do";
      } else {
        sbm_savePayDecision.action = "/ac.fm.paymgnt.paymgnt.ProcessDraftDecisionCancelCMD.do";
      }
      $c.sbm.execute($p, sbm_savePayDecision);
    }
  } catch (e) {
    console.log("fn_cancel >" + e);
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
// 그리드팝업
//-------------------------------------------------------------------------
scwin.gr_paymgnt_ontextimageclick = function (rowIndex, columnIndex) {
  let colid = gr_paymgnt.getColumnID(columnIndex);
  let param = "";
  let pCocd = ds_payment.getCellData(rowIndex, "coCd");
  if (pCocd == "") pCocd = ed_coCd.getValue();
  if (colid == "payBankbookNo") {
    //f_openBankAccountPopUp(gr_paymgnt, rowIndex, colid); // 통장팝업
    param = ",,,,," + pCocd; //자회사 회계시스템 추가사항
    //rtnList = cfCommonPopUp('retrieveBankBookCdInfo','','',"T",null,null,null,null,param,null,null,null,null)
    udc_comCodeGrid.setSelectId('retrieveBankBookCdInfo');
    udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_payBankbookNo_callBackFunc // 콜백 함수
    , '' // 화면에서의  Code Element의 Value
    , '' // 화면에서의  Name Element의 Value
    , "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
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
  }
};

//-------------------------------------------------------------------------
// 통장팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_comCodeGrid_payBankbookNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    let repClntRowPosi = ds_payment.getRowPosition();
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return false;
      ds_payment.setCellData(repClntRowPosi, "payBankbookNo", rtnList[0]);
      ds_payment.setCellData(repClntRowPosi, "payBankAcntNo", rtnList[4]);
    }
  } catch (e) {
    console.log("udc_comCodeGrid_payBankbookNo_callBackFunc" + e);
  }
};

//-------------------------------------------------------------------------
// 지급방법선택
//-------------------------------------------------------------------------
scwin.lc_payMthdCd_onviewchange = function (info) {
  try {
    if (lc_payMthdCd.getValue() == scwin.ELECTRONICDRAFT) {
      lc_reqBankCd.setDisabled(false);
    } else {
      lc_reqBankCd.setSelectedIndex(0);
      lc_reqBankCd.setDisabled(true);
    }
    if (lc_payMthdCd.getValue() == scwin.CURR_DRAFTCHECK) {
      gr_paymgnt.setColumnVisible("payBankbookNo", true); //gr_paymgnt.ColumnProp('payBankbookNo', 'Show') = true;
      gr_paymgnt.setColumnVisible("payBankCd", false); //gr_paymgnt.ColumnProp('payBankCd', 'Show') = false;
    } else {
      gr_paymgnt.setColumnVisible("payBankbookNo", false); //gr_paymgnt.ColumnProp('payBankbookNo', 'Show') = false;
      gr_paymgnt.setColumnVisible("payBankCd", true); //gr_paymgnt.ColumnProp('payBankCd', 'Show') = true;
    }
  } catch (e) {
    console.log("lc_payMthdCd_onviewchange" + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox ',id:'table1',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',class:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',objTypeName:'data',mandatoryCode:'true',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'3',id:'udc_coCd',refDataCollection:'ds_condition',code:'coCd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'lc_payStsCd',class:' w150',direction:'auto',ref:'data:ds_condition.payStsCd'}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'',allOption:'',id:'lc_prtDueCd',class:' w150',direction:'auto',chooseOption:'',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정일'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발행일'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'만기일'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:':',class:''}},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_condition',refEdDt:'qryEndDt',refStDt:'dcsnDt',style:'',edFromId:'ed_dcsnDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',edToId:'ed_qryEndDt',titleFrom:'일자',titleTo:'일자'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_WholeAdoption',style:'',type:'button','ev:onclick':'scwin.f_WholeAdoption'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄적용'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_crn',maxlengthCode:'13',allowCharCode:'0-9',objTypeCode:'data',nameId:'ed_txt_crn',mandatoryName:'true',objTypeName:'data',code:'crn',name:'',selectID:'retrieveCrnInfo',id:'udc_crn',validTitle:'사업자번호','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent','ev:onclickEvent':'scwin.udc_crn_onclickEvent',btnId:'btn_crn','ev:onviewchangeNameEvent':'scwin.udc_crn_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',refDataCollection:'ds_condition'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급방법',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_payMthdCd',style:'width: 230px;',submenuSize:'auto',ref:'data:ds_condition.payMthdCd','ev:onviewchange':'scwin.lc_payMthdCd_onviewchange',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급은행 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_reqBankCd',style:'',submenuSize:'auto',chooseOptionLabel:'전체',ref:'data:ds_condition.reqBankCd',objType:'data',visibleRowNum:'10'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_clntNo',validExpCode:'',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_clntNm',id:'udc_clntNo',mandatoryName:'false',objTypeName:'data',editTypeName:'select',refDataCollection:'ds_condition',code:'clntNo',mandatoryCode:'true',selectID:'retrieveClntList','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',validTitle:'거래처',btnId:'btn_clntNo','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_reqAcctDeptCd',maxlengthCode:'5',allowCharCode:'0-9',objTypeCode:'data',nameId:'ed_reqAcctDeptNm',objTypeName:'data',code:'reqDept',selectID:'retrieveAcctDeptCdInfo6',id:'udc_acctDeptCd',validTitle:'귀속부서','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent',btnId:'btn_acctDeptCd','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCd_onviewchangeNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',refDataCollection:'ds_condition'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'일수',class:''}},{T:1,N:'xf:input',A:{style:'width: 80px;',id:'ed_draftDdCntCd',class:'tar',allowChar:'0-9',maxlength:'3',title:'일수',mandatory:'true'}}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_draftDdCntCd',type:'button',class:'btn','ev:onclick':'scwin.f_UpdateDraftDdCntCd'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄적용'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_DraftCheckSerial',type:'button',class:'btn','ev:onclick':'scwin.f_AutoCreate'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'어음수표번호자동채번'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrd',gridID:'gr_paymgnt',gridDownFn:'scwin.f_GridToExcel',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',id:'gr_paymgnt',style:'',visibleRowNum:'12',visibleRowNumFix:'true',fixedColumn:'5',dataList:'data:ds_payment',readOnly:'true',resize:'true',columnMove:'true',fixedColumnNoMove:'true','ev:oncellclick':'scwin.gr_paymgnt_oncellclick','ev:onafteredit':'scwin.gr_paymgnt_onafteredit','ev:ontextimageclick':'scwin.gr_paymgnt_ontextimageclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',style:'',value:' ',width:'50',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'상태',width:'60',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'요청일자',width:'100',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'거래처',width:'140',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'원화',width:'120',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'계정',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'귀속부서',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payBankCd',inputType:'text',style:'',value:'지급은행',width:'120'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'payBankbookNo',value:'통장</br>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'payBankAcntNo',value:'지급계좌',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'draftCheckNo',value:'어음수표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column70',value:'어음수표</br>만기전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'prtDt',value:'발행일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'e세로</br>작성일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'어음</br>일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dueDt',value:'만기일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'확정</br>전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'지급번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'190',inputType:'text',style:'',id:'column40',value:'전표적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'증빙개수',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',checkAlways:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payStsCd',inputType:'select',style:'',value:'',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnDt',inputType:'calendar',style:'',value:'',width:'100',textAlign:'center',editFormat:'####/##/##',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrAcctNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrAcctDeptNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payBankCd',inputType:'select',style:'',value:'',width:'120',readOnly:'false',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_bankcd'},E:[{T:1,N:'w2:label',A:{ref:'bankCdNm'}},{T:1,N:'w2:value',A:{ref:'bankCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'payBankbookNo',value:'',displayMode:'label',readOnly:'false',allowChar:'0-9',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'payBankAcntNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'draftCheckNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'link',style:'',id:'dueSlipNo',value:'',displayMode:'label',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{width:'110',inputType:'calendar',style:'',id:'prtDt',value:'',displayMode:'label',textAlign:'center',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'writeDt',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'draftDdCntCd',value:'',displayMode:'label',mandatory:'true',textAlign:'left',readOnly:'false',maxLength:'3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'draftDd',value:'',displayMode:'label',textAlign:'left',maxLength:'3',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'dueDt',value:'',displayMode:'label',textAlign:'center',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',style:'',id:'paySlipNo',value:'',displayMode:'label',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payNo',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'190',inputType:'text',style:'',id:'outbrSummary',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outbrSlipNo',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',style:'',id:'evidenceCnt',value:'',displayMode:'label',textAlign:'center',class:'linktype',displayFormat:'#,##0'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column27',value:'Total',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum(\'payAmt\')',displayFormat:'#,##0',style:'',id:'column26',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'190',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Confirm',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.fn_decision',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Cancel',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.fn_cancelN',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_ErrCancel',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.fn_cancelY'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확정취소(메일발송)'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})