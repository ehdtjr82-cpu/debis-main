/*amd /ui/ac/fm/paymgnt/paymgnt/fm_301_07_01b.xml 50358 ef0a19485ce3c8469bc7a27cff1b914ba1a2ed31b66047cf534a525a6af2008c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryStDt',name:'지급기간시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'지급기간종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'상계그룹',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDept',name:'귀속부서',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_paymgnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNoYn',name:'대표거래처번호여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'divClsCd',name:'부서구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'지급금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctRecvAmt',name:'채권금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctRecvAmtFcrc',name:'채권금액외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellAmtSum',name:'매출금액합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'collMoneyAmt',name:'건별상계금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'setoffAmtSum',name:'상계금액합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befPayStsCd',name:'이전지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'지급수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'요청금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reqExchRt',name:'요청환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'발생전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctCd',name:'발생계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'발생계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'발생적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'발생귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'발생귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankCd',name:'지급은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'지급은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'지급계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnEmpNo',name:'확정사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'지급전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'지급환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'지급금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'지급통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addupDivsCd',name:'합산분할코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refPayNo',name:'참조지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firmBankYn',name:'펌뱅킹여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffYn',name:'상계여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'admitCnclDt',name:'승인취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNo',name:'승인사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNm',name:'승인사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvOutbrDt',name:'채권발생일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNo',name:'매출거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNm',name:'매출거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellSlipNo',name:'매출전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'상계그룹',dataType:'text'}},{T:1,N:'w2:column',A:{id:'divPayAmt',name:'분할금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_temp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befPayStsCd',name:'이전지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'요청지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'요청금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reqExchRt',name:'요청환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'발생전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctCd',name:'발생계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'발생계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'발생적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'발생귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'발생귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankCd',name:'지급은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'지급계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnEmpNo',name:'확정사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'지급전표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'지급환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'지급금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'결제원금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'지급통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addupDivsCd',name:'합산분할코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refPayNo',name:'참조지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firmBankYn',name:'펌뱅킹여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffYn',name:'상계여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'admitCnclDt',name:'승인취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNo',name:'승인사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNm',name:'승인사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payment',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befPayStsCd',name:'이전지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'요청지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'요청금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reqExchRt',name:'요청환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'발생전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctCd',name:'발생계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'발생계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'발생적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'발생귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'발생귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankCd',name:'지급은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'지급계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnEmpNo',name:'확정사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'지급전표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'지급환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'지급금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'결제원금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'지급통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addupDivsCd',name:'합산분할코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refPayNo',name:'참조지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firmBankYn',name:'펌뱅킹여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffYn',name:'상계여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'admitCnclDt',name:'승인취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNo',name:'승인사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNm',name:'승인사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_division',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befPayStsCd',name:'이전지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'요청지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'요청금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reqExchRt',name:'요청환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'발생전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctCd',name:'발생계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'발생계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'발생적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'발생귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'발생귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankCd',name:'지급은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'지급계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnEmpNo',name:'확정사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'지급전표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'지급환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'지급금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'결제원금',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'지급통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addupDivsCd',name:'합산분할코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refPayNo',name:'참조지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firmBankYn',name:'펌뱅킹여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffYn',name:'상계여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'admitCnclDt',name:'승인취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNo',name:'승인사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNm',name:'승인사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrievePaymgnt',action:'/ac.fm.paymgnt.paymgnt.RetrieveWholeSetoffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_paymgnt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_paymgnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievePaymgnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fm.paymgnt.paymgnt.ProcessWholeSetoffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_payment","key":"IN_DS1"},{"id":"ds_division","key":"IN_DS2"},{"action":"modified","id":"ds_paymgnt","key":"IN_DS3"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.DIVISIONCD = "S"; // 분할
scwin.DECISIONSTS = "40"; // 확정
scwin.SETOFF = "80"; // 상계
scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "ZZ042",
    compID: "lc_slipKndCd"
  }, {
    grpCd: "FM017",
    compID: "gr_paymgnt:payStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
//TOBE scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ed_reqStartDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_reqEndDt.setValue(scwin.g_sCurrDate);
  ed_wrkDt.setValue(scwin.g_sCurrDate);
  lc_slipKndCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_reqStartDt]);
  if (!ret) {
    return false;
  }
  let ret2 = await $c.gus.cfValidate($p, [ed_reqEndDt]);
  if (!ret2) {
    return false;
  }
  ds_paymgnt.removeAll(); //데이터초기화 
  $c.sbm.execute($p, sbm_retrievePaymgnt);
};

//-------------------------------------------------------------------------
// 조회콜백
//-------------------------------------------------------------------------
scwin.sbm_retrievePaymgnt_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

  if ($c.gus.cfCheckCreateFlag == true) {
    f - sa;
    $c.gus.cfTurnCreateFlag($p, false);
  } else {
    if (ds_paymgnt.getRowCount() == 0) {
      tbx_totalRows.setValue(0);
      $c.win.alert($p, "조회된 데이터가 없습니다.");
    } else {
      tbx_totalRows.setValue(ds_paymgnt.getRowCount());
      ds_paymgnt.sort("payNo", 0); //[0,1,2] 정렬 옵션 (0: 오름차순, 1: 내림차순, 2: 정렬 취소)
    }
  }

  //체크박스 readonly 처리 (ASIS 목록에 정의되어있음 edit={decode(repClntNoYn,"T","true","false"))
  for (let i = 0; i < ds_paymgnt.getRowCount(); i++) {
    if (ds_paymgnt.getCellData(i, "repClntNoYn") != "T") {
      gr_paymgnt.setReadOnly("cell", i, "selYn", true); //readOnly
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 클릭
//-------------------------------------------------------------------------
scwin.gr_paymgnt_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "outbrSlipNo" && rowIndex >= 0) {
    if (!(ds_paymgnt.getCellData(rowIndex, "outbrSlipNo") == null || ds_paymgnt.getCellData(rowIndex, "outbrSlipNo") == "")) {
      $c.gus.cfShowSlipInfo($p, ds_paymgnt.getCellData(rowIndex, "outbrSlipNo"));
    }
  }
  if (columnId == "slipNo" && rowIndex >= 0) {
    if (!(ds_paymgnt.getCellData(rowIndex, "slipNo") == null || ds_paymgnt.getCellData(rowIndex, "slipNo") == "")) {
      $c.gus.cfShowSlipInfo($p, ds_paymgnt.getCellData(rowIndex, "slipNo"));
    }
  }
  if (columnId == "sellSlipNo" && rowIndex >= 0) {
    if (!(ds_paymgnt.getCellData(rowIndex, "sellSlipNo") == null || ds_paymgnt.getCellData(rowIndex, "sellSlipNo") == "")) {
      $c.gus.cfShowSlipInfo($p, ds_paymgnt.getCellData(rowIndex, "sellSlipNo"));
    }
  }
  if (columnId == "selYn") {
    for (let i = 0; i < ds_paymgnt.getRowCount(); i++) {
      if (ds_paymgnt.getCellData(rowIndex, "clntNo") == ds_paymgnt.getCellData(i, "clntNo") && ds_paymgnt.getCellData(i, "collMoneyAmt") > 0) {
        ds_paymgnt.setCellData(i, "selYn", ds_paymgnt.getCellData(rowIndex, "selYn"));
      }
    }
  }
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function (e) {
  $c.gus.cfInitObjects($p, table1, null);
  ed_reqStartDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_reqEndDt.setValue(scwin.g_sCurrDate);
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_paymgnt.getRowCount() <= 0) {
    await $c.win.alert($p, "상계내역이 존재하지않습니다.");
    return false;
  }
  const options = {
    fileName: "지급조회.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: "지급조회" //엑셀내 시트명 지정필요시
    ,
    bodyWordwrap: true // 줄바꿈
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_paymgnt, options, infoArr);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Setoff = async function () {
  try {
    if (ds_paymgnt.getModifiedIndex().length == 0) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "자료"));
      return false;
    }
    if (await $c.win.confirm($p, "상계처리 하시겠습니까?")) {
      for (let i = 0; i < ds_paymgnt.getRowCount(); i++) {
        if (ds_paymgnt.getCellData(i, "selYn") == "T") {
          ds_paymgnt.setCellData(i, "wrkDt", ed_wrkDt.getValue()); // 전표일자 
          if (ds_paymgnt.getCellData(i, "repClntNoYn") == "T" && ds_paymgnt.getCellData(i, "divClsCd") == "T") {
            // 임시데이타셋에 담아둔다.
            ds_temp.removeAll();
            ds_temp.insertRow(0);
            ds_temp.setCellData(0, "payNo", ds_paymgnt.getCellData(i, "payNo"));
            ds_temp.setCellData(0, "payStsCd", ds_paymgnt.getCellData(i, "payStsCd"));
            ds_temp.setCellData(0, "befPayStsCd", ds_paymgnt.getCellData(i, "befPayStsCd"));
            ds_temp.setCellData(0, "payMthdCd", ds_paymgnt.getCellData(i, "payMthdCd"));
            ds_temp.setCellData(0, "reqPayMthdCd", ds_paymgnt.getCellData(i, "reqPayMthdCd"));
            ds_temp.setCellData(0, "reqAmt", ds_paymgnt.getCellData(i, "reqAmt"));
            ds_temp.setCellData(0, "reqExchRt", ds_paymgnt.getCellData(i, "reqExchRt"));
            ds_temp.setCellData(0, "outbrSlipNo", ds_paymgnt.getCellData(i, "outbrSlipNo"));
            ds_temp.setCellData(0, "outbrAcctCd", ds_paymgnt.getCellData(i, "outbrAcctCd"));
            ds_temp.setCellData(0, "outbrAcctNm", ds_paymgnt.getCellData(i, "outbrAcctNm"));
            ds_temp.setCellData(0, "outbrSummary", ds_paymgnt.getCellData(i, "outbrSummary"));
            ds_temp.setCellData(0, "payDt", ds_paymgnt.getCellData(i, "payDt"));
            ds_temp.setCellData(0, "outbrAcctDeptCd", ds_paymgnt.getCellData(i, "outbrAcctDeptCd"));
            ds_temp.setCellData(0, "outbrAcctDeptNm", ds_paymgnt.getCellData(i, "outbrAcctDeptNm"));
            ds_temp.setCellData(0, "clntNo", ds_paymgnt.getCellData(i, "clntNo"));
            ds_temp.setCellData(0, "clntNm", ds_paymgnt.getCellData(i, "clntNm"));
            ds_temp.setCellData(0, "payBankCd", ds_paymgnt.getCellData(i, "payBankCd"));
            ds_temp.setCellData(0, "bankNm", ds_paymgnt.getCellData(i, "bankNm"));
            ds_temp.setCellData(0, "payBankAcntNo", ds_paymgnt.getCellData(i, "payBankAcntNo"));
            ds_temp.setCellData(0, "dcsnDt", ds_paymgnt.getCellData(i, "dcsnDt"));
            ds_temp.setCellData(0, "dcsnEmpNo", ds_paymgnt.getCellData(i, "dcsnEmpNo"));
            ds_temp.setCellData(0, "paySlipNo", ds_paymgnt.getCellData(i, "paySlipNo"));
            ds_temp.setCellData(0, "payCrcCd", ds_paymgnt.getCellData(i, "payCrcCd"));
            ds_temp.setCellData(0, "payExchRt", ds_paymgnt.getCellData(i, "payExchRt"));
            ds_temp.setCellData(0, "payAmtFcrc", ds_paymgnt.getCellData(i, "payAmtFcrc"));
            ds_temp.setCellData(0, "payAmt", ds_paymgnt.getCellData(i, "payAmt"));
            ds_temp.setCellData(0, "payBankbookNo", ds_paymgnt.getCellData(i, "payBankbookNo"));
            ds_temp.setCellData(0, "draftCheckNo", ds_paymgnt.getCellData(i, "draftCheckNo"));
            ds_temp.setCellData(0, "addupDivsCd", ds_paymgnt.getCellData(i, "addupDivsCd"));
            ds_temp.setCellData(0, "refPayNo", ds_paymgnt.getCellData(i, "refPayNo"));
            ds_temp.setCellData(0, "firmBankYn", ds_paymgnt.getCellData(i, "firmBankYn"));
            ds_temp.setCellData(0, "delYn", ds_paymgnt.getCellData(i, "delYn"));
            ds_temp.setCellData(0, "draftDdCntCd", ds_paymgnt.getCellData(i, "draftDdCntCd"));
            ds_temp.setCellData(0, "opntAcctCd", ds_paymgnt.getCellData(i, "opntAcctCd"));
            ds_temp.setCellData(0, "taxinvcDt", ds_paymgnt.getCellData(i, "taxinvcDt"));
            ds_temp.setCellData(0, "setoffYn", ds_paymgnt.getCellData(i, "setoffYn"));
            ds_temp.setCellData(0, "admitCnclDt", ds_paymgnt.getCellData(i, "admitCnclDt"));
            ds_temp.setCellData(0, "admitDt", ds_paymgnt.getCellData(i, "admitDt"));
            ds_temp.setCellData(0, "admitEmpNo", ds_paymgnt.getCellData(i, "admitEmpNo"));
            ds_temp.setCellData(0, "admitEmpNm", ds_paymgnt.getCellData(i, "admitEmpNm"));
            ds_temp.setCellData(0, "crn", ds_paymgnt.getCellData(i, "crn"));
            //ds_temp.setCellData(0,"selYn"           ,ds_paymgnt.getCellData(i,"selYn"));
            ds_temp.setCellData(0, "selYn", "0"); //ASIS ds_temp가 number로 T가 아닌 0이 들어가고 있음.
            ds_temp.setCellData(0, "slipKndCd", ds_paymgnt.getCellData(i, "slipKndCd"));
            let ds_paymentRowCnt = ds_payment.getRowCount();
            ds_payment.insertJSON(ds_paymentRowCnt, ds_temp.getAllJSON()); //1건임. RowJson으로 넣어지지 않음.
            ds_payment.setCellData(ds_paymentRowCnt, "addupDivsCd", scwin.DIVISIONCD);
            let ds_divisionRowCnt = ds_division.getRowCount();
            ds_division.insertJSON(ds_paymentRowCnt, ds_temp.getAllJSON()); //1건임.
            ds_division.setCellData(ds_divisionRowCnt, "refPayNo", ds_paymgnt.getCellData(i, "payNo")); // 원지급내역의 지급번호 참조지급번호에 세팅
            ds_division.setCellData(ds_divisionRowCnt, "reqAmt", ds_paymgnt.getCellData(i, "sellAmtSum")); // 상계총금액-> 상계

            let ds_divisionRowCnt2 = ds_division.getRowCount();
            ds_division.insertJSON(ds_divisionRowCnt2, ds_temp.getAllJSON()); //1건임.
            ds_division.setCellData(ds_divisionRowCnt2, "refPayNo", ds_paymgnt.getCellData(i, "payNo")); // 원지급내역의 지급번호 참조지급번호에 세팅
            ds_division.setCellData(ds_divisionRowCnt2, "reqAmt", ds_paymgnt.getCellData(i, "divPayAmt")); // 나머지 분할금액 -> 상계안함
          }
        }
      }
      $c.sbm.execute($p, sbm_save); //tr_save.post();
    } else {
      return false;
    }
  } catch (e) {
    console.log("f_Setoff : " + e);
  }
};

//-------------------------------------------------------------------------
// 저장 콜백
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 부서코드
//-------------------------------------------------------------------------
scwin.udc_reqAcctDept_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_reqAcctDeptCd, ed_txt_reqAcctDeptNm, '1');
};

//-------------------------------------------------------------------------
// 부서코드찾기
//-------------------------------------------------------------------------
scwin.udc_reqAcctDept_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_reqAcctDeptCd, ed_txt_reqAcctDeptNm, 'F');
};

//-------------------------------------------------------------------------
// 거래처코드
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_txt_clntNm, '2');
};
//-------------------------------------------------------------------------
// 거래처코드찾기
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_clntNo, ed_txt_clntNm, 'F');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  try {
    if (orgObjCd.getValue().trim() != orgObjCd.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
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
scwin.f_openPopUp = function (select_code, txtCode, txtName, sFlag) {
  try {
    let code = txtCode.getValue();
    let name = txtName.getValue();
    switch (select_code) {
      // 관리부서 PopUp 호출
      case '1':
        //sCmdName = "retrieveAcctDeptCdInfo"
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null); // 거래처
        udc_reqAcctDept.setSelectId('retrieveAcctDeptCdInfo');
        udc_reqAcctDept.cfCommonPopUp(scwin.udc_reqAcctDept_callBackFunc // 콜백 함수
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
        , null // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 거래처 PopUp 호출
      case '2':
        //sCmdName = "retrieveClntList"
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 거래처
        udc_clntNo.setSelectId('retrieveClntList');
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
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

//-------------------------------------------------------------------------
// 귀속부서찾기 팝업 콜백(2)
//-------------------------------------------------------------------------
scwin.udc_reqAcctDept_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_reqAcctDeptCd.setValue(rtnList[0]); // 코드
      ed_txt_reqAcctDeptNm.setValue(rtnList[1]); // 코드명
      ed_reqAcctDeptCd.hidVal = rtnList[0]; // HIDDEN 코드
    } else {
      ed_reqAcctDeptCd.setValue("");
      ed_txt_reqAcctDeptNm.setValue("");
      ed_reqAcctDeptCd.hidVal = "";
    }
  } catch (e) {
    console.log("udc_reqAcctDept_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 거래처찾기 팝업 콜백(2)
//-------------------------------------------------------------------------
scwin.udc_clntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_clntNo.setValue(rtnList[0]); // 코드
      ed_txt_clntNm.setValue(rtnList[1]); // 코드명
      ed_clntNo.hidVal = rtnList[0]; // HIDDEN 코드
    } else {
      ed_clntNo.setValue("");
      ed_txt_clntNm.setValue("");
      ed_clntNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_clntNo_callBackFunc :" + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'table1',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo',codeId:'ed_reqAcctDeptCd',popupTitle:'',nameId:'ed_txt_reqAcctDeptNm',style:'',refDataCollection:'ds_condition',code:'reqDept',validTitle:'귀속부서',allowCharCode:'0-9',objTypeName:'Data',objTypeCode:'data',maxlengthCode:'5',id:'udc_reqAcctDept',btnId:'btn_reqAcctDept','ev:onblurCodeEvent':'scwin.udc_reqAcctDept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_reqAcctDept_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상계그룹 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_slipKndCd',style:'width: 150px;',submenuSize:'auto',chooseOptionLabel:'전체',ref:'data:ds_condition.slipKndCd',title:'상계그룹'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_txt_clntNm',popupID:'',popupTitle:'',selectID:'',style:'',code:'clntNo',refDataCollection:'ds_condition',objTypeName:'data',objTypeCode:'data',allowCharCode:'0-9',id:'udc_clntNo',validTitle:'거래처',btnId:'btn_clntNo',editTypeCode:'select','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',maxlengthCode:'6',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'qryStDt',refDataMap:'ds_condition',style:'',id:'udc_fromToCalendar1',refEdDt:'qryEndDt',edFromId:'ed_reqStartDt',edToId:'ed_reqEndDt',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'요청일자',titleTo:'요청일자'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_GridToExcel',gridUpYn:'N',gridID:'gr_paymgnt'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_paymgnt',id:'gr_paymgnt',style:'',visibleRowNum:'15',visibleRowNumFix:'true',fixedColumn:'6',resize:'true',columnMove:'true',sortable:'true','ev:oncellclick':'scwin.gr_paymgnt_oncellclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'지급번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'지급일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'상태',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'거래처번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'거래처',width:'170'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'지급금액',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'청구금액',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'건별상계금액',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'상계금액',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column43',value:'채무적요',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column40',value:'채권적요',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column37',value:'지급전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column31',value:'채권전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column34',value:'세금계산서번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'청구일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'채권번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column46',value:'채무귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column49',value:'채권귀속부서',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',style:'',value:'',width:'50',trueValue:'T',falseValue:'F',valueType:'other',checkAlways:'true',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center',colMerge:'true',readOnly:'true',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnDt',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##',textAlign:'center',colMerge:'true',upperColumn:'payNo',readOnly:'true',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payStsCd',inputType:'select',style:'',value:'',width:'70',textAlign:'center',allOption:'',chooseOption:'',ref:'',colMerge:'true',upperColumn:'payNo',readOnly:'true',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'1',textAlign:'center',colMerge:'true',upperColumn:'payNo',readOnly:'true',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left',colMerge:'true',upperColumn:'payNo',readOnly:'true',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',colMerge:'true',upperColumn:'payNo',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctRecvAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyAmt',inputType:'text',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'setoffAmtSum',inputType:'text',style:'',value:'',width:'120',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'outbrSummary',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'link',style:'',id:'outbrSlipNo',value:'',displayMode:'label',textAlign:'center',readOnly:'true',class:'linktype'}},{T:1,N:'w2:column',A:{width:'130',inputType:'link',style:'',id:'sellSlipNo',value:'',displayMode:'label',textAlign:'center',readOnly:'true',class:'linktype'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mgntNo',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctRecvOutbrDt',value:'',displayMode:'label',textAlign:'center',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctRecvNo',value:'',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'outbrAcctDeptNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'bilgAcctDeptNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'1',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'작업일자',class:''}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_wrkDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Setoff'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상계'}]}]}]}]}]}]}]}]}]})