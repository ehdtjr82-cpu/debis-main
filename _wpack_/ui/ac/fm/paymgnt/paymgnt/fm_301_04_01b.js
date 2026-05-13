/*amd /ui/ac/fm/paymgnt/paymgnt/fm_301_04_01b.xml 120102 ea839f2c2742e6175e0aa80474df5081ef194570f3c85e12f9d97f5fcd76e19c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'payStsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payStsCd1',name:'상태1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payMthdCd',name:'지급방법',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payDt',name:'지급등록기준일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnDt',name:'요청일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDept',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'조회구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqBankCd',name:'지급은행',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftCheckNo',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'addupDivsCd',name:'합산분할코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'refPayNo',name:'요청지급번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repClnt',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payment',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befPayStsCd',name:'이전지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'지급수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'요청금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reqExchRt',name:'요청환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'발생전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctCd',name:'발생계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'발생계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'발생적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'발생귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'발생귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankCd',name:'지급은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'지급계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnEmpNo',name:'확정사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'지급전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'지급환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc2',name:'상계금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'원화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmt2',name:'상계금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'지급통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addupDivsCd',name:'합산분할코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refPayNo',name:'참조지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firmBankYn',name:'펌뱅킹여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'납기일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffYn',name:'상계여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'admitCnclDt',name:'승인취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNo',name:'승인사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNm',name:'승인사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDocOvrDd',name:'계약서초과일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClntNo',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'CHECKNUM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'reserRsn',name:'보류사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclRsn',name:'해제사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNo',name:'요청자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'요청귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitDt',name:'해제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitEmpNo',name:'해제사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveDate',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'증빙개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'postDt2',name:'회계처리일자2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId2',name:'등록자ID2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm2',name:'등록자명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interPayDt',name:'국제기브일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interDataYn',name:'국제데이터여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'status',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errCont',name:'오류내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errYn',name:'오류여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'받을어음관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'beClntNm',name:'이전거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_recvCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'repClnt',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'flag',name:'상태',dataType:'number'}},{T:1,N:'w2:key',A:{id:'bilgAcctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'setOff',name:'상계에서회계처리된내역만조회',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromDate',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toDate',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_receive',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_receive_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'체크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lendAmtCd',name:'대여금액코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lendAmtKndCd',name:'대여금액종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtSeq',name:'계약순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipSeq',name:'전표순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvStsCd',name:'채권상태코드(FM036)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvOutbrDt',name:'채권발생일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCd',name:'수금귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptNm',name:'수금귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcNm',name:'통화명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramt',name:'잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramtFcrc',name:'잔액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyIntendDt',name:'수금예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyCntSht',name:'수금수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag',name:'파일상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAmt',name:'수금금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'collMoneyAmtFcrc',name:'수금금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prfAcctDeptCd',name:'수익귀속부서코드',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prfAcctCd',name:'수익계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmLendIntAmt',name:'월대여이자금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rpayDeg',name:'상환차수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'CHECK_NUM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'afterRamt',name:'상계후잔액(원)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'afterRamtFcrc',name:'상계후잔액(외화)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outsideSystemClntNo',name:'outsideSystemClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_receiveCopy',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'체크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lendAmtCd',name:'대여금액코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lendAmtKndCd',name:'대여금액종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtSeq',name:'계약순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipSeq',name:'전표순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvStsCd',name:'채권상태코드(FM036)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvOutbrDt',name:'채권발생일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCd',name:'수금귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptNm',name:'수금귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptNm',name:'청구귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAcctDeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcNm',name:'통화명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramt',name:'잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ramtFcrc',name:'잔액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyIntendDt',name:'수금예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyCntSht',name:'수금수단',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag',name:'파일상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAmt',name:'수금금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'collMoneyAmtFcrc',name:'수금금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prfAcctDeptCd',name:'수익귀속부서코드',dataType:'number'}},{T:1,N:'w2:column',A:{id:'prfAcctCd',name:'수익계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mmLendIntAmt',name:'월대여이자금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rpayDeg',name:'상환차수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'CHECK_NUM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'afterRamt',name:'상계후잔액(원)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'afterRamtFcrc',name:'상계후잔액(외화)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outsideSystemClntNo',name:'outsideSystemClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvAmt',name:'채무금액',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_addCollMoney'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'queryDeptSearchStDate',name:'시작일자(부서검색시 이용되는 조건)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryDeptSearchEndDate',name:'종료일자(부서검색시 이용되는 조건)',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrievePaymgnt',action:'/ac.fm.paymgnt.paymgnt.RetrievePaymentContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_payment","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_payment","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievePaymgnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveRecv',action:'/ac.fm.acctrecvmgnt.acctrecvcontmgnt.RetrieveSetoffAccountReceivableListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_recvCondition","key":"IN_DS1"},{"id":"ds_receive","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_receive","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveRecv_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_savePayDecision',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_payment","key":"IN_DS1"},{"id":"ds_receiveCopy","key":"IN_DS2"},{"id":"ds_addCollMoney","key":"IN_DS3"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_savePayDecision_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");

// 상태코드 상수
scwin.NEW = "01"; // 신규
scwin.PREPARESTS = "00"; // 준비
scwin.RESERVESTS = "10"; // 보류
scwin.WAITSTS = "20"; // 대기
scwin.SETOFFWAITSTS = "25"; // 상계대기
scwin.DECIDESTS = "30"; // 결정
scwin.DECISIONSTS = "40"; // 확정
scwin.COMPLETE = "50"; // 완료

// 지급방법코드 상수
scwin.CASH = "10"; // 현금
scwin.TRANSFER = "20"; // 이체
scwin.DRAFTCHECK = "50"; // 실물어음
scwin.ELECTRONICDRAFT = "40"; // 전자어음
scwin.SETOFF = "80"; // 상계

// 합산분할코드
scwin.EXCHANGE = "T";
scwin.bSuper = false;
scwin.sAcctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
scwin.sAppDeptNm = $c.data.getMemInfo($p, "acctDeptNm");
scwin.sUserId = $c.data.getMemInfo($p, "userId");
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
scwin.txtCoClsCd = "";
scwin.txtRecvCoClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "FM017",
    compID: "gr_paymgnt:payStsCd"
  },
  //상태
  {
    grpCd: "FM018",
    compID: "gr_paymgnt:payMthdCd"
  } //지급수단
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_Reset();
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {};

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
    ed_recvCoCd.setValue(scwin.vLoginCoCd);
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
      if (ed_coCd.hidVal != rtnList[0]) scwin.f_initObj('1');
      ed_coCd.setValue(rtnList[0]); // 코드
      ed_coNm.setValue(rtnList[5]); // 회사명
      ed_coCd.hidVal = rtnList[0]; // 히든값
      scwin.txtCoClsCd = rtnList[1]; // 회사구분  

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
    } else {
      ed_coCd.setValue(""); // 코드
      ed_coNm.setValue(""); // 회사명
      ed_coCd.hidVal = "";
      scwin.txtCoClsCd = ""; // 회사구분    
    }

    //UDC처리시 값이 없어지는 현상이 발생하여 위치변경.
    ed_qryStDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
    ed_qryEndDt.setValue(scwin.g_sCurrDate);
    ed_fromDate.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
    ed_toDate.setValue(scwin.g_sCurrDate);
    ed_acctDeptCd.setValue(scwin.sAcctDeptCd);
    ed_acctDeptNm.setValue(scwin.sAppDeptNm);
    scwin.f_PopUpCompanyInfoRecv('T'); //f_PopUpCompanyInfo('T', '2');
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 회사코드입력시(하단)
//-------------------------------------------------------------------------
scwin.udc_coCdRecv_onblurCodeEvent = function (e) {
  scwin.isStarted = false;
  ed_recvCoNm.setValue("");
  scwin.f_PopUpCompanyInfoRecv('T'); //f_PopUpCompanyInfo('T', '2');
};

//-------------------------------------------------------------------------
// 회사코드 찾기버튼 클릭시(하단)
//-------------------------------------------------------------------------
scwin.udc_coCdRecv_onclickEvent = function (e) {
  scwin.isStarted = false;
  scwin.f_PopUpCompanyInfoRecv('F'); //f_PopUpCompanyInfo('T', '2');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 (하단)
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfoRecv = async function (pWinCloseTF) {
  /*
   var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  				,ed_coCd.text, txt_coNm.value
  				,pWinCloseTF,null,null,null,null
  				,null,null,null,null,null);
  */
  udc_coCdRecv.cfCommonPopUp(scwin.udc_coCdRecv_callBackFunc // 콜백 함수
  , ed_recvCoCd.getValue() // 화면에서의 ??? Code Element의 Value
  , ed_recvCoNm.getValue() // 화면에서의 ??? Name Element의 Value
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
// 회사 입력 팝업 콜백 (하단)
//-------------------------------------------------------------------------
scwin.udc_coCdRecv_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;

    // SET	 
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return false;
      if (ed_recvCoCd.hidVal != rtnList[0]) scwin.f_initObj('2');
      ed_recvCoCd.setValue(rtnList[0]); // 코드
      ed_recvCoNm.setValue(rtnList[5]); // 회사명
      ed_recvCoNm.hidVal = rtnList[0]; // 히든값
      scwin.txtRecvCoClsCd = rtnList[1]; // 회사구분  

      if (scwin.txtRecvCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
        // 자회사 회계 시스템 
        scwin.isSubCompany = true;
      } else {
        scwin.isSubCompany = false;
      }
      if (scwin.isStarted == true) {
        if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
          // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
          $c.gus.cfEnableObjects($p, [ed_recvCoCd, ed_recvCoNm, btn_companyRecv]);
        } else {
          $c.gus.cfDisableObjects($p, [ed_recvCoCd, ed_recvCoNm, btn_companyRecv]);
        }
      }
    } else {
      ed_recvCoCd.setValue(""); // 코드
      ed_recvCoNm.setValue(""); // 회사명
      ed_recvCoCd.hidVal = "";
      scwin.txtRecvCoClsCd = ""; // 회사구분    
    }
  } catch (e) {
    console.log("udc_coCdRecv_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 초기화 시킬 내역들 정의
//-------------------------------------------------------------------------
scwin.f_Reset = function (ret) {
  try {
    //채권내역 선택금액 초기화
    ed_selectAcctPay.setValue(0);
    ed_selectAcctPayFcrc.setValue(0);
    ed_selectAcctRecv.setValue(0);
    ed_selectAcctRecvFcrc.setValue(0);
  } catch (e) {
    console.log("f_Reset : " + e);
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
scwin.udc_clntNo_onblurNameEvent = function (e) {
  scwin.f_openPopUpNm('2', ed_clntNo, ed_clntNm);
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
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '1');
};
//-------------------------------------------------------------------------
// 귀속부서명
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  scwin.f_openPopUpNm('1', ed_acctDeptCd, ed_acctDeptNm);
};
//-------------------------------------------------------------------------
// 귀속부서찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_acctDeptCd, ed_acctDeptNm, 'F');
};

//-------------------------------------------------------------------------
// 사업자코드
//-------------------------------------------------------------------------
scwin.udc_crn_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_payCrn, ed_txt_payCrn, '3');
};
//-------------------------------------------------------------------------
// 사업자명
//-------------------------------------------------------------------------
scwin.udc_crn_onblurNameEvent = function (e) {
  scwin.f_openPopUpNm('3', ed_payCrn, ed_txt_payCrn);
};
//-------------------------------------------------------------------------
// 사업자찾기
//-------------------------------------------------------------------------
scwin.udc_crn_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_payCrn, ed_txt_payCrn, 'F');
};

//-------------------------------------------------------------------------
// 거래처코드(하단)
//-------------------------------------------------------------------------
scwin.udc_clntNoRecv_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUpRecv(ed_recvClntNo, ed_recvNm, '2');
};

//-------------------------------------------------------------------------
// 거래처명
//-------------------------------------------------------------------------
scwin.udc_clntNoRecv_onblurNameEvent = function (e) {
  scwin.f_openPopUpNmRecv('2', ed_recvClntNo, ed_recvNm);
};

//-------------------------------------------------------------------------
// 거래처찾기
//-------------------------------------------------------------------------
scwin.udc_clntNoRecv_onclickEvent = function (e) {
  scwin.f_openPopUpNmRecv('2', ed_recvClntNo, ed_recvNm, 'F');
};

//-------------------------------------------------------------------------
// 귀속부서코드(하단)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdRecv_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUpRecv(ed_recvAcctDeptCd, ed_recvAcctDeptNm, '1');
};
//-------------------------------------------------------------------------
// 귀속부서명
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdRecv_onblurNameEvent = function (e) {
  scwin.f_openPopUpNmRecv('1', ed_recvAcctDeptCd, ed_recvAcctDeptNm);
};
//-------------------------------------------------------------------------
// 귀속부서찾기
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdRecv_onclickEvent = function (e) {
  scwin.f_openPopUpRecv('1', ed_recvAcctDeptCd, ed_recvAcctDeptNm, 'F');
};

//-------------------------------------------------------------------------
// 사업자코드(하단)
//-------------------------------------------------------------------------
scwin.udc_crnRecv_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUpRecv(ed_collMoneyCrn, ed_txt_collMoneyCrn, '3');
};
//-------------------------------------------------------------------------
// 사업자명
//-------------------------------------------------------------------------
scwin.udc_crnRecv_onblurNameEvent = function (e) {
  scwin.f_openPopUpNmRecv('3', ed_collMoneyCrn, ed_txt_collMoneyCrn);
};
//-------------------------------------------------------------------------
// 사업자찾기
//-------------------------------------------------------------------------
scwin.udc_crnRecv_onclickEvent = function (e) {
  scwin.f_openPopUpRecv('3', ed_collMoneyCrn, ed_txt_collMoneyCrn, 'F');
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
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUpRecv = function (orgObjCd, orgObjNm, select_code) {
  try {
    if (orgObjCd.getValue() != orgObjCd.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUpRecv(select_code, orgObjCd, orgObjNm, "T");
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
      orgObjCd.hidVal = "";
    }
  } catch (e) {
    console.log("f_CheckPopUpRecv : " + e);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다. (상단)
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
      // 사업자번호 PopUp 호출	
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
//(상단)
scwin.f_openPopUpNm = async function (select_code, txtCode, txtName) {
  try {
    let code = '';
    let name = '';
    let param = '';
    code = "";
    //txtCode.setValue("");
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
        //rtnList = cfCommonPopUp(sCmdName,code.text,name.value,"T",null,null,null,param,null,null,null,null,null,null,null,null,null); // 관리부서
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
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
      // 거래처 PopUp 호출	
      case '2':
        param = ",,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp(sCmdName,code.text,name.value,"T",null,null,null,param,null,null,null,null,null,null,"F",null,null); // 거래처
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
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
        , 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 사업자번호 PopUp 호출	
      case '3':
        //rtnList = cfCommonPopUp(sCmdName,code.text,name.value,"T",null,null,null,null,null,null,null,null,null,null,"F",null,null); // 사업자번호
        udc_crn.cfCommonPopUp(scwin.udc_crn_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
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
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다. (하단)
//-------------------------------------------------------------------------
scwin.f_openPopUpRecv = async function (select_code, txtCode, txtName, sFlag) {
  try {
    let code = '';
    let name = '';
    let param = '';
    code = txtCode.getValue();
    name = txtName.getValue();
    if (select_code == '1' || select_code == '2') {
      //자회사 회계시스템 추가사항 - 부서,거래처 선택시 회사코드 필수( 2016.09.21)
      let ret = await $c.gus.cfValidate($p, [ed_recvCoCd]);
      if (!ret) {
        return false;
      }
    }
    switch (select_code) {
      // 관리부서 PopUp 호출
      case '1':
        param = "," + ed_recvCoCd.getValue() + "," + scwin.txtCoClsCd; //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null,null,null,null,null); // 부서
        udc_acctDeptCdRecv.cfCommonPopUp(scwin.udc_acctDeptCdRecv_callBackFunc // 콜백 함수
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
        param = ",,," + ed_recvCoCd.getValue(); //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,param,null,null,null,null,null,"F",null,null); // 거래처
        udc_clntNoRecv.cfCommonPopUp(scwin.udc_clntNoRecv_callBackFunc // 콜백 함수
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
      // 사업자번호 PopUp 호출	
      case '3':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 사업자번호
        udc_crnRecv.cfCommonPopUp(scwin.udc_crnRecv_callBackFunc // 콜백 함수
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
    console.log("f_openPopUpRecv : " + e);
  }
};
//(하단)
scwin.f_openPopUpNmRecv = async function (select_code, txtCode, txtName) {
  try {
    let code = '';
    let name = '';
    let param = '';
    code = txtCode.getValue();
    name = txtName.getValue();
    if (select_code == '1' || select_code == '2') {
      //자회사 회계시스템 추가사항 - 부서,거래처 선택시 회사코드 필수( 2016.09.21)
      let ret = await $c.gus.cfValidate($p, [ed_recvCoCd]);
      if (!ret) {
        return false;
      }
    }
    switch (select_code) {
      // 관리부서 PopUp 호출
      case '1':
        param = "," + ed_recvCoCd.getValue() + "," + scwin.txtCoClsCd; //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp(sCmdName,code.text,name.value,"T",null,null,null,param,null,null,null,null,null,null,null,null,null); // 관리부서
        udc_acctDeptCdRecv.cfCommonPopUp(scwin.udc_acctDeptCdRecv_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
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
      // 거래처 PopUp 호출	
      case '2':
        param = ",,," + ed_recvCoCd.getValue(); //자회사 회계시스템 추가사항
        //rtnList = cfCommonPopUp(sCmdName,code.text,name.value,"T",null,null,null,param,null,null,null,null,null,null,"F",null,null); // 거래처
        udc_clntNoRecv.cfCommonPopUp(scwin.udc_clntNoRecv_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
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
        , 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      // 사업자번호 PopUp 호출	
      case '3':
        //rtnList = cfCommonPopUp(sCmdName,code.text,name.value,"T",null,null,null,null,null,null,null,null,null,null,"F",null,null); // 사업자번호
        udc_crnRecv.cfCommonPopUp(scwin.udc_crnRecv_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
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
        , 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_openPopUpNmRecv : " + e);
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
    console.log("udc_clntNo_callBackFunc" + e);
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
        ed_acctDeptCd.setValue("");
        ed_acctDeptNm.setValue("");
        ed_acctDeptCd.hidVal = "";
        return;
      }
      ed_acctDeptCd.setValue(rtnList[0]); // 코드값
      ed_acctDeptNm.setValue(rtnList[1]); // 코드명
      ed_acctDeptCd.hidVal = rtnList[0]; // 코드값
    } else {
      ed_acctDeptCd.setValue("");
      ed_acctDeptNm.setValue("");
      ed_acctDeptCd.hidVal = "";
    }
  } catch (e) {
    console.log("udc_acctDeptCd_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 사업자 PopUp 콜백
//-------------------------------------------------------------------------
scwin.udc_crn_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        ed_payCrn.setValue("");
        ed_txt_payCrn.setValue("");
        ed_payCrn.hidVal = "";
        return;
      }
      ed_payCrn.setValue(rtnList[0]); // 코드값
      ed_txt_payCrn.setValue(rtnList[1]); // 코드명
      ed_payCrn.hidVal = rtnList[0]; // 코드값
    } else {
      ed_payCrn.setValue("");
      ed_txt_payCrn.setValue("");
      ed_payCrn.hidVal = "";
    }
  } catch (e) {
    console.log("udc_crn_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 거래처 PopUp 콜백(하단)
//-------------------------------------------------------------------------
scwin.udc_clntNoRecv_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        ed_recvClntNo.setValue("");
        ed_recvNm.setValue("");
        ed_recvClntNo.hidVal = "";
        return;
      }
      ed_recvClntNo.setValue(rtnList[0]); // 코드값
      ed_recvNm.setValue(rtnList[1]); // 코드명
      ed_recvClntNo.hidVal = rtnList[0]; // 코드값
    } else {
      ed_recvClntNo.setValue("");
      ed_recvNm.setValue("");
      ed_recvClntNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_clntNoRecv_callBackFunc" + e);
  }
};

//-------------------------------------------------------------------------
// 귀속부서 PopUp 콜백(하단)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCdRecv_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        ed_recvAcctDeptCd.setValue("");
        ed_recvAcctDeptNm.setValue("");
        ed_recvAcctDeptCd.hidVal = "";
        return;
      }
      ed_recvAcctDeptCd.setValue(rtnList[0]); // 코드값
      ed_recvAcctDeptNm.setValue(rtnList[1]); // 코드명
      ed_recvAcctDeptCd.hidVal = rtnList[0]; // 코드값
    } else {
      ed_recvAcctDeptCd.setValue("");
      ed_recvAcctDeptNm.setValue("");
      ed_recvAcctDeptCd.hidVal = "";
    }
  } catch (e) {
    console.log("udc_acctDeptCdRecv_callBackFunc : " + e);
  }
};

//-------------------------------------------------------------------------
// 사업자 PopUp 콜백(하단)
//-------------------------------------------------------------------------
scwin.udc_crnRecv_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        ed_collMoneyCrn.setValue("");
        ed_txt_collMoneyCrn.setValue("");
        ed_collMoneyCrn.hidVal = "";
        return;
      }
      ed_collMoneyCrn.setValue(rtnList[0]); // 코드값
      ed_txt_collMoneyCrn.setValue(rtnList[1]); // 코드명
      ed_collMoneyCrn.hidVal = rtnList[0]; // 코드값
    } else {
      ed_collMoneyCrn.setValue("");
      ed_txt_collMoneyCrn.setValue("");
      ed_collMoneyCrn.hidVal = "";
    }
  } catch (e) {
    console.log("udc_crnRecv_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 채무내역 엑셀다운로드
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function (ret) {
  try {
    if (ds_payment.getRowCount() < 0) {
      await $c.win.alert($p, "지급내역이 존재하지않습니다.");
      return false;
    }
    const options = {
      fileName: "채무.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,

      sheetName: "채무" //엑셀내 시트명 지정필요시
    };
    const infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_paymgnt, options, infoArr);
  } catch (e) {
    console.log("f_Reset : " + e);
  }
};

//-------------------------------------------------------------------------
// 채권내역 엑셀다운로드
//-------------------------------------------------------------------------
scwin.f_GridToExcelRecv = async function (ret) {
  try {
    if (ds_payment.getRowCount() < 0) {
      await $c.win.alert($p, "지급내역이 존재하지않습니다.");
      return false;
    }
    const options = {
      fileName: "채권.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,

      sheetName: "채권" //엑셀내 시트명 지정필요시
    };
    const infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_reiceive, options, infoArr);
  } catch (e) {
    console.log("f_Reset : " + e);
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
    let ret2 = await $c.gus.cfValidate($p, [ed_qryStDt]);
    if (!ret2) {
      return false;
    }
    let ret3 = await $c.gus.cfValidate($p, [ed_qryEndDt]);
    if (!ret3) {
      return false;
    }
    if (ret && ret2 && ret3) {
      const params = {
        payStsCd: scwin.WAITSTS,
        payStsCd1: scwin.SETOFFWAITSTS,
        scClsCd: "11",
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
    let i = 0;
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_payment.getRowCount()));
    if (ds_payment.getRowCount() == 0) {
      await $c.win.alert($p, "조회된 데이터가 없습니다");
      $c.gus.cfDisableObjects($p, [btn_Confirm]);
    } else {
      ds_payment.sort("payNo", 0); //SortExpr +payNo

      for (i = 0; i < ds_payment.getRowCount(); i++) {
        ds_payment.setCellData(i, "payAmt2", ds_payment.getCellData(i, "payAmt"));
        ds_payment.setCellData(i, "payAmtFcrc2", ds_payment.getCellData(i, "payAmtFcrc"));
      }
      ds_payment.reform(); //상태값 초기화

      scwin.f_recvRetrieve();
    }
    ed_selectAcctPay.setValue(0);
    ed_selectAcctPayFcrc.setValue(0);
    ed_selectAcctRecv.setValue(0);
    ed_selectAcctRecvFcrc.setValue(0);
  } catch (e) {
    console.log("sbm_retrievePaymgnt_submitdone >" + e);
  }
};

//-------------------------------------------------------------------------
// 조회(채권)
//-------------------------------------------------------------------------
scwin.f_recvRetrieve = async function () {
  try {
    let ret = await $c.gus.cfValidate($p, [ed_recvCoCd]);
    if (!ret) {
      return false;
    }
    let ret2 = await $c.gus.cfValidate($p, [ed_fromDate]);
    if (!ret2) {
      return false;
    }
    let ret3 = await $c.gus.cfValidate($p, [ed_toDate]);
    if (!ret3) {
      return false;
    }
    if (ret && ret2 && ret3) {
      const params = {
        flag: "-1",
        setOff: "Y",
        coClsCd: scwin.txtRecvCoClsCd
      };
      //데이터셋에 정보설정
      ds_recvCondition.setJSON(params);
      $c.sbm.execute($p, sbm_retrieveRecv);
    }
  } catch (e) {
    console.log("f_Retrieve : " + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieveRecv_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    tbx_totalRows2.setValue($c.gus.cfInsertComma($p, ds_receive.getRowCount()));
    if (ds_receive.getRowCount() == 0) {
      await $c.win.alert($p, "조회된 데이터가 없습니다");
      $c.gus.cfDisableObjects($p, [btn_Confirm]);
    } else {
      $c.gus.cfEnableObjects($p, [btn_Confirm]);
    }
    ed_selectAcctRecv.setValue(0);
    ed_selectAcctRecvFcrc.setValue(0);
  } catch (e) {
    console.log("sbm_retrieveRecv_submitdone >" + e);
  }
};
scwin.f_initObj = function (pType) {
  try {
    if (pType == "1") {
      //상단 회사코드  
      $c.gus.cfInitObjects($p, [ed_acctDeptCd, ed_acctDeptNm]); //  귀속부서
      $c.gus.cfInitObjects($p, [ed_clntNo, ed_clntNm]); //거래처
    } else if (pType == "2") {
      //하단 회사코드 
      $c.gus.cfInitObjects($p, [ed_recvAcctDeptCd, ed_recvAcctDeptNm]); //  귀속부서
      $c.gus.cfInitObjects($p, [ed_recvClntNo, ed_recvNm]); //거래처	  	  	
    }
  } catch (e) {
    console.log("f_initObj >" + e);
  }
};

//-------------------------------------------------------------------------
// 채무내역 셀 클릭시 (checkBox 클릭시 처리 )       
//-------------------------------------------------------------------------
scwin.gr_paymgnt_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_payment.getCellData(rowIndex, "selYn") == 1 && columnId == "selYn" && ds_payment.getCellData(rowIndex, "checkNum") == 0) {
    ed_selectAcctPay.setValue(parseInt(ed_selectAcctPay.getValue()) + parseInt(ds_payment.getCellData(rowIndex, "payAmt")));
    ed_selectAcctPayFcrc.setValue(parseFloat(ed_selectAcctPayFcrc.getValue()) + parseFloat(ds_payment.getCellData(rowIndex, "payAmtFcrc")));
    ds_payment.setCellData(rowIndex, "checkNum", 1);
  } else if (ds_payment.getCellData(rowIndex, "selYn") == 0 && columnId == "selYn" && ds_payment.getCellData(rowIndex, "checkNum") == 1) {
    ed_selectAcctPay.setValue(parseInt(ed_selectAcctPay.getValue()) - parseInt(ds_payment.getCellData(rowIndex, "payAmt")));
    ed_selectAcctPayFcrc.setValue(parseFloat(ed_selectAcctPayFcrc.getValue()) - parseFloat(ds_payment.getCellData(rowIndex, "payAmtFcrc")));
    ds_payment.setCellData(rowIndex, "checkNum", 0);
  }
};

//-------------------------------------------------------------------------
// 채권내역 셀 클릭시 (checkBox 클릭시 처리 )       
//-------------------------------------------------------------------------
scwin.gr_reiceive_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_receive.getCellData(rowIndex, "num") == "T" && columnId == "num" && ds_receive.getCellData(rowIndex, "checkNum") == "F") {
    ed_selectAcctRecv.setValue(parseInt(ed_selectAcctRecv.getValue()) + parseInt(ds_receive.getCellData(rowIndex, "collMoneyAmt")));
    ed_selectAcctRecvFcrc.setValue(parseFloat(ed_selectAcctRecvFcrc.getValue()) + parseFloat(ds_receive.getCellData(rowIndex, "collMoneyAmtFcrc")));
    ds_receive.setCellData(rowIndex, "checkNum", "T");
  } else if (ds_receive.getCellData(rowIndex, "num") == "F" && columnId == "num" && ds_receive.getCellData(rowIndex, "checkNum") == "T") {
    ed_selectAcctRecv.setValue(parseInt(ed_selectAcctRecv.getValue()) - parseInt(ds_receive.getCellData(rowIndex, "collMoneyAmt")));
    ed_selectAcctRecvFcrc.setValue(parseFloat(ed_selectAcctRecvFcrc.getValue()) - parseFloat(ds_receive.getCellData(rowIndex, "collMoneyAmtFcrc")));
    ds_receive.setCellData(rowIndex, "checkNum", "F");
  }
};

//-------------------------------------------------------------------------
// 채권내역 헤더클릭(ASIS 미사용으로 보임)
//-------------------------------------------------------------------------
scwin.gr_reiceive_onheaderclick = function (headerId) {
  try {
    let i = 0;
    let sum = 0;
    let sumFcrc = 0;
    if (headerId == "num") {
      if (gr_paymgnt.getHeaderValue("num") == true) {
        for (i = 0; i < ds_receive.getRowCount(); i++) {
          ds_receive.setCellData(i, "num", "T");
          if (ds_receive.getCellData(i, "num") == "T") {
            sum = BigInt(sum) + BigInt(ds_receive.getCellData(i, "collMoneyAmt"));
            sumFcrc = sumFcrc + parseFloat(ds_receive.getCellData(i, "collMoneyAmtFcrc"));
            ds_receive.setCellData(i, "num", "T");
          }
        }
      } else {
        for (i = 0; i < ds_receive.getRowCount(); i++) {
          ds_receive.setCellData(i, "num", "F");
          if (ds_receive.getCellData(i, "num") == "F") {
            sum = 0;
            sumFcrc = 0;
            ds_receive.setCellData(i, "num", "F");
          }
        }
      }
      ed_selectAcctRecv.setValue(sum);
      ed_selectAcctRecvFcrc.setValue(sumFcrc);
    }
  } catch (e) {
    console.log("gr_reiceive_onheaderclick >" + e);
  }
};

//-------------------------------------------------------------------------
// 확정
//-------------------------------------------------------------------------
scwin.fn_decision = async function (e) {
  try {
    let i = 0;
    let j = 0;
    let payCnt = 0;
    let recvCnt = 0;
    let nAmt = 0;
    let nAmtFcrc = 0;
    let nPayAmt = 0;
    let nPayAmtFcrc = 0;
    let nAcctRecvAmt = 0;
    let nAcctRecvAmtFcrc = 0;
    let sPayClntNo = "";
    let sRecvClntNo = "";
    let nKrwCntPayment = 0;
    let nUsdCntPayment = 0;
    let nKrwCntAcctRecv = 0;
    let nUsdCntAcctRecv = 0;
    if (ds_payment.getRowCount() == 0) {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_049, "자료"));
      return false;
    }

    // 필수 입력 여부 Check(부서 날짜 검색시 이용됨)
    let ret = await $c.gus.cfValidate($p, [ed_qryStDt, ed_qryEndDt]);
    if (!ret) {
      return false;
    }
    for (i = 0; i < ds_payment.getRowCount(); i++) {
      if (ds_payment.getCellData(i, "selYn") == 1) {
        payCnt++;
        nPayAmt = BigInt(nPayAmt) + BigInt(ds_payment.getCellData(i, "payAmt"));
        nPayAmtFcrc = parseFloat(nPayAmtFcrc) + parseFloat(ds_payment.getCellData(i, "payAmtFcrc"));
        if (ds_payment.getCellData(i, "payCrcCd") == "KRW") {
          nKrwCntPayment++;
        }
        if (ds_payment.getCellData(i, "payCrcCd") != "KRW") {
          nUsdCntPayment++;
        }
        if (nKrwCntPayment > 0 && nUsdCntPayment > 0) {
          await $c.win.alert($p, "통화코드가 " + ds_payment.getCellData(i, "payCrcCd") + "가 아닌 자료를 선택하십시오");
          return false;
        }
      }
    }
    if (payCnt <= 0) {
      await $c.win.alert($p, "지급내역을 선택하십시오");
      return false;
    }
    for (i = 0; i < ds_receive.getRowCount(); i++) {
      if (ds_receive.getCellData(i, "num") == "T") {
        recvCnt++;
      }
    }
    if (recvCnt <= 0) {
      await $c.win.alert($p, "채권내역을 선택하십시오");
      return false;
    }
    if (payCnt > 1) {
      if (recvCnt > 1) {
        await $c.win.alert($p, "1개이상의 채권내역을 선택할 수 없습니다.");
        return false;
      }
      let divSetOffAmt = 0;
      let sClntNo = "";
      for (j = 0; j < ds_receive.getRowCount(); j++) {
        if (ds_receive.getCellData(j, "num") == "T") {
          if (ds_receive.getCellData(j, "crcCd") == "KRW") {
            nKrwCntAcctRecv++;
          }
          if (ds_receive.getCellData(j, "crcCd") != "KRW") {
            nUsdCntAcctRecv++;
          }
          if (nKrwCntAcctRecv > 0 && nUsdCntAcctRecv > 0) {
            await $c.win.alert($p, "통화코드가 " + ds_receive.getCellData(j, "crcCd") + "가 아닌 자료를 선택하십시오");
            return false;
          }
          nAcctRecvAmt = BigInt(nAcctRecvAmt) + BigInt(ds_receive.getCellData(j, "collMoneyAmt"));
          nAcctRecvAmtFcrc = parseFloat(nAcctRecvAmtFcrc) + parseFloat(ds_receive.getCellData(j, "collMoneyAmtFcrc"));
        }
      }
    } else {
      if (payCnt > 1) {
        await $c.win.alert($p, "1개이상의 지급내역을 선택할 수 없습니다.");
        return false;
      }
      let divSetOffAmt = 0;
      let sClntNo = "";
      for (j = 0; j < ds_receive.getRowCount(); j++) {
        if (ds_receive.getCellData(j, "num") == "T") {
          if (ds_receive.getCellData(j, "crcCd") == "KRW") {
            nKrwCntAcctRecv++;
          }
          if (ds_receive.getCellData(j, "crcCd") != "KRW") {
            nUsdCntAcctRecv++;
          }
          if (nKrwCntAcctRecv > 0 && nUsdCntAcctRecv > 0) {
            await $c.win.alert($p, "통화코드가 " + ds_receive.getCellData(j, "crcCd") + "가 아닌 자료를 선택하십시오");
            return false;
          }
          nAcctRecvAmt = BigInt(nAcctRecvAmt) + BigInt(ds_receive.getCellData(j, "collMoneyAmt")) + BigInt(ds_receive.getCellData(j, "mmLendIntAmt"));
          nAcctRecvAmtFcrc = parseFloat(nAcctRecvAmtFcrc) + parseFloat(ds_receive.getCellData(j, "collMoneyAmtFcrc"));
        }
      }
    }
    if (!(nUsdCntPayment > 0 && nUsdCntAcctRecv > 0)) {
      if (nAcctRecvAmt != nPayAmt) {
        await $c.win.alert($p, "채무금액과 채권금액이 일치하지않습니다.");
        return false;
      }
    } else {
      if (scwin.vLoginCoCd != '023') {
        // BIDC 외화 상계처리 여러건 동시 가능
        if (!(nUsdCntPayment == 1 && nUsdCntAcctRecv == 1)) {
          await $c.win.alert($p, "채무금액(외화):채권금액(외화)는 1:1이어야 처리가 가능합니다.");
          return false;
        }
      }
      if (nAcctRecvAmtFcrc != nPayAmtFcrc) {
        await $c.win.alert($p, "채무금액(외화)과 채권금액(외화)이 일치하지않습니다.");
        return false;
      }
    }
    let AcctDeptCount = 0;
    for (i = 0; i < ds_payment.getRowCount(); i++) {
      if (ds_payment.getCellData(i, "selYn") == 1) {
        for (j = 0; j < ds_receive.getRowCount(); j++) {
          if (ds_receive.getCellData(j, "num") == "T") {
            var outbrAcctDeptNm = ds_payment.getCellData(i, "outbrAcctDeptNm");
            var collMoneyAcctDeptNm = ds_receive.getCellData(j, "collMoneyAcctDeptNm");
            if (outbrAcctDeptNm != collMoneyAcctDeptNm) {
              AcctDeptCount++;
            }
          }
        }
      }
    }
    if (AcctDeptCount > 0) {
      let confirmChk = await $c.win.confirm($p, "채권/채무의 귀속부서가 다를 경우 반드시 해당부서 담당자와 확인 후 처리해주시기 바랍니다.\n계속 진행하시겠습니까?");
      if (!confirmChk) {
        return false;
      }
    }

    // 필수 조회조건 입력 여부 Check
    let ret2 = await $c.gus.cfValidate($p, [ed_qryStDt, ed_qryEndDt]); //자회사 회계시스템 추가사항(부서검색 날짜 필수입력)
    if (!ret2) {
      return false;
    }
    if (await $c.win.confirm($p, "확정하시겠습니까?")) {
      $c.gus.cfCopyDataSetHeader($p, ds_receive, ds_receiveCopy);
      console.log("payCnt ::: " + payCnt);
      if (payCnt > 1) {
        var divSetOffAmt = 0;
        var sClntNo = "";
        for (i = 0; i < ds_payment.getRowCount(); i++) {
          if (ds_payment.getCellData(i, "selYn") == 1) {
            ds_payment.setCellData(i, "payStsCd", scwin.DECISIONSTS);
            ds_payment.setCellData(i, "payMthdCd", scwin.SETOFF);
            for (j = 0; j < ds_receive.getRowCount(); j++) {
              if (ds_receive.getCellData(j, "num") == "T") {
                ds_receive.setCellData(j, "payNo", ds_payment.getCellData(i, "payNo"));
                ds_receive.setCellData(j, "outsideSystemClntNo", ds_payment.getCellData(i, "clntNo"));
                ds_receive.setCellData(j, "opntAcctCd", ds_payment.getCellData(i, "outbrAcctCd"));

                //ds_receiveCopy.insertJSON(ds_receiveCopy.getRowCount(), ds_receive.getRowJSON(j));//ds_receiveCopy.ImportData(ds_receive.ExportData(j,1,false));
                console.log("payCnt >1 ds_receiveCopy.getRowCount() ::: " + ds_receiveCopy.getRowCount());
                ds_receiveCopy.setRowJSON(ds_receiveCopy.getRowCount(), ds_receive.getRowJSON(j));
                ds_receiveCopy.setCellData(ds_receiveCopy.getRowCount(), "collMoneyAmt", ds_payment.getCellData(i, "payAmt"));
                ds_receiveCopy.setCellData(ds_receiveCopy.getRowCount(), "collMoneyAmtFcrc", ds_payment.getCellData(i, "payAmtFcrc"));
                ds_receiveCopy.setCellData(ds_receiveCopy.getRowCount(), "acctRecvAmt", nAcctRecvAmt);
              }
            }
          }
        }
      } else {
        var divSetOffAmt = 0;
        var sClntNo = "";
        for (i = 0; i < ds_payment.getRowCount(); i++) {
          if (ds_payment.getCellData(i, "selYn") == 1) {
            ds_payment.setCellData(i, "payStsCd", scwin.DECISIONSTS);
            ds_payment.setCellData(i, "payMthdCd", scwin.SETOFF);
            for (j = 0; j < ds_receive.getRowCount(); j++) {
              if (ds_receive.getCellData(j, "num") == "T") {
                ds_receive.setCellData(j, "payNo", ds_payment.getCellData(i, "payNo"));
                ds_receive.setCellData(j, "outsideSystemClntNo", ds_payment.getCellData(i, "clntNo"));
                ds_receive.setCellData(j, "opntAcctCd", ds_payment.getCellData(i, "outbrAcctCd"));

                //ds_receiveCopy.insertJSON(ds_receiveCopy.getRowCount(), ds_receive.getRowJSON(j));//ds_receiveCopy.ImportData(ds_receive.ExportData(j,1,false))
                console.log("ds_receiveCopy.getRowCount() ::: " + ds_receiveCopy.getRowCount());
                ds_receiveCopy.setRowJSON(ds_receiveCopy.getRowCount(), ds_receive.getRowJSON(j));
                ds_receiveCopy.setCellData(ds_receiveCopy.getRowCount(), "acctRecvAmt", nAcctRecvAmt);
              }
            }
          }
        }
      }
      //ASIS Bind data 
      const params = {
        queryDeptSearchStDate: ed_qryStDt.getValue(),
        queryDeptSearchEndDate: ed_qryEndDt.getValue()
      };
      //데이터셋에 정보설정
      ds_addCollMoney.setJSON(params);
      sbm_savePayDecision.action = "/ac.fm.paymgnt.paymgnt.ProcessSetoffCMD.do";
      $c.sbm.execute($p, sbm_savePayDecision);
    }
  } catch (e) {
    console.log("fn_decision >" + e);
  }
};

//-------------------------------------------------------------------------
// 상계처리 콜백
//-------------------------------------------------------------------------
scwin.sbm_savePayDecision_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    ds_payment.undoAll();
    return; //onFail
  }
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 채권그리드 상태 데이터 포맷처리
//-------------------------------------------------------------------------
scwin.displayFlag = function (data) {
  return $c.gus.decode($p, data, "1", "정리", "미정리");
};

//-------------------------------------------------------------------------
// 채권목록 Row 가 변경되는경우
//-------------------------------------------------------------------------
scwin.gr_reiceive_onrowindexchange = function (rowIndex, oldRow) {
  try {
    let sCrcCd = "";
    let i = 0;
    if (ds_payment.getRowCount() > 0) {
      for (i = 0; i < ds_payment.getRowCount(); i++) {
        if (ds_payment.getCellData(rowIndex, "selYn") == 1) {
          sCrcCd = ds_payment.getCellData(i, "payCrcCd");
        }
      }
    }
    if (sCrcCd == null || sCrcCd == "") {
      sCrcCd == ACConstants.KRW;
    }
    if (ds_receive.getCellData(rowIndex, "crcCd") != ACConstants.KRW && sCrcCd != ACConstants.KRW) {
      gr_reiceive.setReadOnly("cell", rowIndex, "collMoneyAmt", true); //readOnly None	 
      gr_reiceive.setReadOnly("cell", rowIndex, "collMoneyAmtFcrc", false);
    } else {
      // 계정코드가 대여금일경우는 금액 수정못함 2008년 7월3일 신종민 수정
      if (ds_receive.getCellData(rowIndex, "acctCd") == ACConstants.ACCTCD_SHT_TERM_LEND) {
        gr_reiceive.setReadOnly("cell", rowIndex, "collMoneyAmt", true);
      } else {
        gr_reiceive.setReadOnly("cell", rowIndex, "collMoneyAmt", false);
      }
      gr_reiceive.setReadOnly("cell", rowIndex, "collMoneyAmtFcrc", true);
    }
    //f_setPayMthdCd();
  } catch (e) {
    console.log("gr_reiceive_onrowindexchange >" + e);
  }
};

//-------------------------------------------------------------------------
// 채권목록 셀정보가 변경되는 경우 - OnColumnChanged
//-------------------------------------------------------------------------
scwin.gr_reiceive_oncellindexchange = async function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  try {
    let colid = gr_paymgnt.getColumnID(columnIndex);
    let row = rowIndex;
    if (colid == "payAmt") {
      if (BigInt(ds_receive.getCellData(row, "ramt")) - BigInt(ds_receive.getCellData(row, colid)) < 0) {
        await $c.win.alert($p, "조회된 데이터가 없습니다");
        ds_receive.setCellData(row, colid, ds_receive.getOriginalCellData(rowIndex, colid));
        ds_receive.setCellData(row, "collMoneyAmtFcrc", ds_receive.getOriginalCellData(rowIndex, "collMoneyAmtFcrc"));
        return false;
      }
      ed_selectAcctRecv.setValue(0);
      ed_selectAcctRecvFcrc.setValue(0);
      for (i = 0; i < ds_receive.getRowCount(); i++) {
        if (ds_receive.getCellData(i, "num") == "T") {
          ed_selectAcctRecv.setValue(parseFloat(ed_selectAcctRecv.getValue()) + parseFloat(ds_receive.getCellData(i, "collMoneyAmt")));
          ed_selectAcctRecvFcrc.setValue(0);
        }
      }
    } else if (colid == "collMoneyAmtFcrc") {
      let sCrcCd = "";
      if (ds_payment.getRowCount() > 0) {
        for (i = 0; i < ds_payment.getRowCount(); i++) {
          if (ds_payment.getCellData(i, "selYn") == "1") {
            sCrcCd = ds_payment.getCellData(0, "payCrcCd"); //s_payment.NameValue(1,"payCrcCd")
          }
        }
      }
      if (ds_receive.getCellData(rowIndex, "crcCd") != ACConstants.KRW && sCrcCd != ACConstants.KRW) {
        if (ds_receive.getCellData(rowIndex, "crcCd") == ACConstants.JPY && sCrcCd == ACConstants.JPY) {
          ds_receive.setCellData(rowIndex, "collMoneyAmt", parseFloat(ds_receive.getCellData(rowIndex, "collMoneyAmtFcrc")) * parseFloat(ds_receive.getCellData(rowIndex, "exchRt")) / 100);
        } else {
          ds_receive.getCellData(rowIndex, "collMoneyAmt", parseFloat(ds_receive.getCellData(rowIndex, "collMoneyAmtFcrc")) * parseFloat(ds_receive.getCellData(rowIndex, "exchRt")));
        }
      }
      ed_selectAcctRecv.setValue(0);
      ed_selectAcctRecvFcrc.setValue(0);
      for (i = 0; i < ds_receive.getRowCount(); i++) {
        if (ds_receive.getCellData(i, "num") == "T") {
          ed_selectAcctRecv.setValue(parseFloat(ed_selectAcctRecv.getValue()) + parseFloat(ds_receive.getCellData(i, "collMoneyAmt")));
          ed_selectAcctRecvFcrc.setValue(parseFloat(ed_selectAcctRecvFcrc.getValue()) + parseFloat(ds_receive.getCellData(i, "collMoneyAmtFcrc")));
        }
      }
    }
  } catch (e) {
    console.log("gr_reiceive_oncellindexchange >" + e);
  }
};
scwin.ed_selectAcctPayFcrc_oneditkeyup = function (info, e) {
  let val = this.getValue();

  // 1. 전체 자릿수 20자 제한 (소수점 포함)
  if (val.length > 20) {
    val = val.substring(0, 20);
  }

  // 2. 소수점 이하 2자리까지만 허용하는 정규식
  // 정수부(최대 17자) + 소수점(1자) + 소수부(2자) = 총 20자
  let regExp = /^\d{0,17}([.]\d{0,2})?$/;
  if (!regExp.test(val)) {
    // 형식을 벗어나면 마지막 문자 제거
    this.setValue(val.substring(0, val.length - 1));
  } else {
    this.setValue(val);
  }
};
scwin.ed_selectAcctRecvFcrc_oneditkeyup = function (info, e) {
  let val = this.getValue();

  // 1. 전체 자릿수 20자 제한 (소수점 포함)
  if (val.length > 20) {
    val = val.substring(0, 20);
  }

  // 2. 소수점 이하 2자리까지만 허용하는 정규식
  // 정수부(최대 17자) + 소수점(1자) + 소수부(2자) = 총 20자
  let regExp = /^\d{0,17}([.]\d{0,2})?$/;
  if (!regExp.test(val)) {
    // 형식을 벗어나면 마지막 문자 제거
    this.setValue(val.substring(0, val.length - 1));
  } else {
    this.setValue(val);
  }
};
scwin.ds_receive_oncelldatachange = function (info) {
  try {
    let colid = info.colID;
    let row = info.rowIndex;
    let i = 0;
    if (colid == "collMoneyAmt") {
      if (ds_receive.getCellData(row, "ramt") - ds_receive.getCellData(row, colid) < 0) {
        $c.win.alert($p, "잔액을 초과할 수 없습니다.");
        ds_receive.setCellData(row, columnInfo, ds_receive.getCellData(row, colid));
        ds_receive.setCellData(row, "collMoneyAmtFcrc", ds_receive.getOriginalCellData(row, "collMoneyAmtFcrc"));
        return false;
      }
      ed_selectAcctRecv.setValue("0");
      ed_selectAcctRecvFcrc.setValue("0");
      for (i = 0; i < ds_receive.getRowCount(); i++) {
        if (ds_receive.getCellData(i, "num") == "T") {
          ed_selectAcctRecv.setValue(parseFloat(ed_selectAcctRecv.getValue()) + parseFloat(ds_receive.getCellData(i, "collMoneyAmt")));
          ed_selectAcctRecvFcrc.setValue("0");
        }
      }
    } else if (colid == "collMoneyAmtFcrc") {
      let sCrcCd = "";
      if (ds_payment.getRowCount() > 0) {
        for (i = 0; i < ds_payment.getRowCount(); i++) {
          if (ds_payment.getCellData(i, "selYn") == 1) {
            sCrcCd = ds_payment.getCellData(0, "payCrcCd");
          }
        }
      }
      if (ds_receive.getCellData(row, "crcCd") != ACConstants.KRW && sCrcCd != ACConstants.KRW) {
        if (ds_receive.getCellData(row, "crcCd") == ACConstants.JPY && sCrcCd == ACConstants.JPY) {
          ds_receive.setCellData(row, "collMoneyAmt", parseFloat(ds_receive.getCellData(row, "collMoneyAmtFcrc")) * parseFloat(ds_receive.getCellData(row, "exchRt")) / 100);
        } else {
          ds_receive.setCellData(row, "collMoneyAmt", parseFloat(ds_receive.getCellData(row, "collMoneyAmtFcrc")) * parseFloat(ds_receive.getCellData(row, "exchRt")));
        }
      }
      ed_selectAcctRecv.setValue("0");
      ed_selectAcctRecvFcrc.setValue("0");
      for (i = 0; i < ds_receive.getRowCount(); i++) {
        if (ds_receive.getCellData(i, "num") == "T") {
          ed_selectAcctRecv.setValue(parseFloat(ed_selectAcctRecv.getValue()) + parseFloat(ds_receive.getCellData(i, "collMoneyAmt")));
          ed_selectAcctRecvFcrc.setValue(parseFloat(ed_selectAcctRecvFcrc.getValue()) + parseFloat(ds_receive.getCellData(i, "collMoneyAmtFcrc")));
        }
      }
    }
  } catch (e) {
    console.log("ds_receive_oncelldatachange >" + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',class:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',objTypeName:'data',mandatoryCode:'true',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'3',id:'udc_coCd',refDataCollection:'ds_condition',code:'coCd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_payCrn',maxlengthCode:'13',allowCharCode:'0-9',objTypeCode:'data',nameId:'ed_txt_payCrn',mandatoryName:'true',objTypeName:'data',code:'crn',selectID:'retrieveCrnInfo',id:'udc_crn',validTitle:'사업자번호','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_crn_onblurNameEvent','ev:onclickEvent':'scwin.udc_crn_onclickEvent',refDataCollection:'ds_condition',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_clntNo',validExpCode:'',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_clntNm',id:'udc_clntNo',mandatoryName:'false',objTypeName:'data',editTypeName:'select',maxlengthName:'20',refDataCollection:'ds_condition',code:'repClnt',mandatoryCode:'true',selectID:'retrieveClntList','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent',validTitle:'거래처',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_acctDeptCd',maxlengthCode:'5',allowCharCode:'0-9',objTypeCode:'data',nameId:'ed_acctDeptNm',objTypeName:'data',code:'reqDept',selectID:'retrieveAcctDeptCdInfo6',id:'udc_acctDeptCd',validTitle:'귀속부서','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent',refDataCollection:'ds_condition',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'qryStDt',refDataMap:'ds_condition',style:'',id:'udc_fromToCalendar1',refEdDt:'qryEndDt',mandatoryFrom:'true',edFromId:'ed_qryStDt',edToId:'ed_qryEndDt',titleFrom:'지급일자',titleTo:'지급일자',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'채무',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_GridToExcel',gridUpYn:'N',id:'udc_excel',gridID:'gr_paymgnt'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_payment',id:'gr_paymgnt',style:'',visibleRowNum:'10',visibleRowNumFix:'true',fixedColumn:'1',fixedColumnNoMove:'true',readOnly:'true',resize:'true',columnMove:'true','ev:oncellclick':'scwin.gr_paymgnt_oncellclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'text',width:'30',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'지급번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'상태',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'지급수단',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'요청일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'계정',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'거래처번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'거래처명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'통화코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'원화',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'상계금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'외화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'상계금액</br>(외화)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'지급등록</br>기준일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column33',value:'지급계좌',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'지급은행',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'적요',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',width:'30',fixColumnWidth:'true',sortable:'false',checkAlways:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payStsCd',inputType:'select',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payMthdCd',inputType:'select',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnDt',inputType:'text',style:'',value:'',width:'100',textAlign:'center',editFormat:'####/##/##',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrAcctNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrAcctDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'120',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payCrcCd',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payAmt2',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payAmtFcrc',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payAmtFcrc2',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'interPayDt',value:'',displayMode:'label',textAlign:'center',editFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'payBankAcntNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bankNm',value:'',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선택금액(원)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w300 tar',id:'ed_selectAcctPay',style:'',dataType:'number',maxlength:'20',allowChar:'0-9',displayFormat:'#,##0',mandatory:'true',objType:'key'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선택금액(외화)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w300 tar',id:'ed_selectAcctPayFcrc',style:'',dataType:'number',maxlength:'20',allowChar:'0-9.',displayFormat:'#,##0.##',mandatory:'true',objType:'key','ev:oneditkeyup':'scwin.ed_selectAcctPayFcrc_oneditkeyup'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',class:'',codeId:'ed_recvCoCd',nameId:'ed_recvCoNm',btnId:'btn_companyRecv',objTypeName:'data',mandatoryCode:'true',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'3',id:'udc_coCdRecv',refDataCollection:'ds_recvCondition',code:'coCd',validTitle:'회사코드',selectID:'retrieveDongbuGroupCompanyInfo','ev:onblurCodeEvent':'scwin.udc_coCdRecv_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCdRecv_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_collMoneyCrn',maxlengthCode:'13',allowCharCode:'0-9',objTypeCode:'data',nameId:'ed_txt_collMoneyCrn',mandatoryName:'true',objTypeName:'data',code:'crn',selectID:'retrieveCrnInfo',id:'udc_crnRecv',validTitle:'사업자번호','ev:onblurCodeEvent':'scwin.udc_crnRecv_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_crnRecv_onblurNameEvent','ev:onclickEvent':'scwin.udc_crnRecv_onclickEvent',refDataCollection:'ds_recvCondition',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_recvClntNo',validExpCode:'',objTypeCode:'data',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_recvNm',id:'udc_clntNoRecv',mandatoryName:'false',objTypeName:'data',editTypeName:'select',maxlengthName:'20',refDataCollection:'ds_recvCondition',code:'repClnt',mandatoryCode:'false',selectID:'retrieveClntList','ev:onblurCodeEvent':'scwin.udc_clntNoRecv_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNoRecv_onclickEvent','ev:onblurNameEvent':'scwin.udc_clntNoRecv_onblurNameEvent',validTitle:'거래처',btnId:'btn_clntNoRecv',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_recvAcctDeptCd',maxlengthCode:'5',allowCharCode:'0-9',objTypeCode:'data',nameId:'ed_recvAcctDeptNm',objTypeName:'data',code:'bilgAcctDeptCd',selectID:'retrieveAcctDeptCdInfo6',id:'udc_acctDeptCdRecv',validTitle:'귀속부서','ev:onblurCodeEvent':'scwin.udc_acctDeptCdRecv_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCdRecv_onclickEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCdRecv_onblurNameEvent',refDataCollection:'ds_recvCondition',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'fromDate',refDataMap:'ds_recvCondition',style:'',id:'udc_fromToCalendar2',refEdDt:'toDate',mandatoryFrom:'true',edFromId:'ed_fromDate',edToId:'ed_toDate',titleFrom:'수금일자',titleTo:'수금일자',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_recvRetrievee',style:'',type:'button','ev:onclick':'scwin.f_recvRetrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'채권 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',id:'udc_topGrdRecv',gridID:'gr_reiceive',gridDownFn:'scwin.f_GridToExcelRecv'}}]}]},{T:1,N:'xf:group',A:{class:'grid-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_receive',id:'gr_reiceive',style:'',visibleRowNum:'10',visibleRowNumFix:'true',fixedColumn:'1',fixedColumnNoMove:'true',readOnly:'true',resize:'true',columnMove:'true','ev:oncellclick':'scwin.gr_reiceive_oncellclick','ev:onheaderclick':'scwin.gr_reiceive_onheaderclick','ev:onrowindexchange':'scwin.gr_reiceive_onrowindexchange','ev:oncellindexchange':'scwin.gr_reiceive_oncellindexchange',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'num',inputType:'text',width:'30',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'세금계산서번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'청구일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'귀속부서',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'거래처번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'거래처명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'계정코드',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column99',inputType:'text',style:'',value:'통화코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'청구금액</br>(원) ',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'채권잔액</br>(원) ',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'상계금액</br>(원)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'상계후잔액</br>(원)',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'청구금액</br>(외화)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'채권잔액</br>(외화) &nbsp;',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'상계금액</br>(외화) &nbsp;',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column21',value:'상계후잔액</br>(외화)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column23',value:'월대여이자</br>금액(원화)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'회계일자',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'상태',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column35',value:'적요',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'num',inputType:'checkbox',width:'30',fixColumnWidth:'true',sortable:'false',trueValue:'T',falseValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntNo',inputType:'text',style:'',value:'',width:'100',xtAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctRecvOutbrDt',inputType:'text',style:'',value:'',width:'70',textAlign:'center',editFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyAcctDeptNm',inputType:'text',style:'',value:'',width:'130',xtAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'100',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',style:'',value:'',width:'120',textAlign:'center',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ramt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'collMoneyAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'afterRamt',expression:'Number(display(\'ramt\')) - Number(display(\'collMoneyAmt\'))',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amtFcrc',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ramtFcrc',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'collMoneyAmtFcrc',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'afterRamtFcrc',expression:'Number(display(\'ramtFcrc\')) - Number(display(\'collMoneyAmtFcrc\'))',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mmLendIntAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'postDt',value:'',displayMode:'label',textAlign:'center',editFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'flag',value:'',displayMode:'center',textAlign:'left',displayFormatter:'scwin.displayFlag'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'30',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'Total',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'amt\')',displayFormat:'#,##0',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',textAlign:'right',expression:'sum(\'ramt\')',displayFormat:'#,##0',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'collMoneyAmt\')',displayFormat:'#,##0',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',textAlign:'right',expression:'sum(\'amtFcrc\')',displayFormat:'#,##0.00',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'ramtFcrc\')',displayFormat:'#,##0.00',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'collMoneyAmtFcrc\')',displayFormat:'#,##0.00',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'mmLendIntAmt\')',displayFormat:'#,##0',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선택금액(원)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w300 tar',id:'ed_selectAcctRecv',style:'',dataType:'number',maxlength:'20',allowChar:'0-9',displayFormat:'#,##0',mandatory:'true',objType:'key'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선택금액(외화)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w300 tar',id:'ed_selectAcctRecvFcrc',style:'',dataType:'number',maxlength:'20',allowChar:'0-9.',displayFormat:'#,##0.##',mandatory:'true',objType:'key','ev:oneditkeyup':'scwin.ed_selectAcctRecvFcrc_oneditkeyup'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'info-txt red',id:'',label:'상계처리 확정 전 채권/채무의 귀속부서 담당자와 확인 후 진행해 주시기 바랍니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Confirm',style:'',type:'button','ev:onclick':'scwin.fn_decision',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상계처리'}]}]}]}]}]}]}]}]})