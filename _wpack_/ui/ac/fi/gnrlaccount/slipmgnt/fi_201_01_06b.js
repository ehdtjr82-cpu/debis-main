/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_06b.xml 85032 2d724edbf9d51b399a227c6e0c819d201af11c722eade8bdbb0c01d7602da1b3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_getMaxCloseYm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postYn',name:'회계처리여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtSt',name:'전표작성일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtEnd',name:'전표작성일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCdSt',name:'전표작성부서코드From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCdEnd',name:'전표작성부서코드To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txt',saveRemovedData:'true','ev:ondataload':'scwin.ds_txt_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'modPsblYn',name:'수정가능여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'autoSlipYn',name:'자동전표여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'reverseSlipNo',name:'역분개전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'txnNo',name:'거래번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'작성귀속부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dsum',name:'차변합계',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'csum',name:'대변합계',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'postYn',name:'회계처리여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'postAcctDeptCd',name:'회계처리귀속부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'postAcctDeptNm',name:'회계처리귀속부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'prtCnt',name:'발행건수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자사원명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'checkYn',name:'체크여부',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'postNo',name:'회계처리번호',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hpostDt',name:'H회계일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'elecStmtTrgtYn',name:'전자결재대상여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'허가사원명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'elecApprvInfoYn',name:'전자결재자정보여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'증빙건수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'fixedAsetApprvYn',name:'자산이력승인여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cancelYn',name:'취소여부',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'regDt',name:'등록일시',dataType:'text',defaultValue:''}}]},{T:1,N:'w2:data',A:{use:'true'}}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_slipNoDetail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txtcontents',saveRemovedData:'true','ev:ondataload':'scwin.ds_txtcontents_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'row',name:'ROW',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnNo',name:'거래번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnContSeq',name:'거래내역순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'증빙구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'공제구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'관리거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'관리거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnNm',name:'사업자등록번호명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnDt',name:'거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',name:'관리사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDt',name:'관리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',name:'관리기간시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',name:'관리기간종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'부가세관리귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',name:'부가세신고귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatCrn',name:'부가세사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'계산서금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급금액_외화',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'frchCrn',name:'가맹점사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchNm',name:'가맹점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDistYn',name:'계정배부여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNo',name:'카드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNm',name:'카드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClsCd',name:'정산구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmAcctDeptCd',name:'정산귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmAcctDeptNm',name:'정산귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClntNo',name:'정산거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClntNm',name:'정산거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건 저장순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termMgntYn',name:'기간관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empMgntYn',name:'사원관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtMgntYn',name:'일자관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizMgntYn',name:'사업관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'부가세여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNoYn',name:'카드번호여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchNoYn',name:'가맹점번호여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsYn',name:'공제구분여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'limitAmt',name:'한도금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dcAmt',name:'할인금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cardKndCd',name:'카드종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'비용구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntYn',name:'거래처관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchCd',name:'지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchNm',name:'지점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemNm',name:'매입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAmt1',name:'기타금액1 금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'etcAcctCd1',name:'기타금액1 계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcSummary1',name:'기타금액1 적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAmt2',name:'기타금액2 금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'etcAcctCd2',name:'기타금액2 계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcSummary2',name:'기타금액2 적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'}}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_slipNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_paymgnt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'payNo',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befPayStsCd',name:'이전지급상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'요청지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'요청금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'reqExchRt',name:'요청환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'발생전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctCd',name:'발생계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'발생계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'발생적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'발생귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'발생귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankCd',name:'지급은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'지급계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'확정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnEmpNo',name:'확정사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'지급전표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'지급환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'지급금액_외화',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'지급금액(결제원금)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'지급통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addupDivsCd',name:'합산분할코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refPayNo',name:'참조지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firmBankYn',name:'펌뱅킹여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffYn',name:'상계여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitCnclDt',name:'승인취소일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNo',name:'승인사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNm',name:'승인사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDocOvrDd',name:'계약서초과일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctDeptCd',name:'차대회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctCd',name:'차대회계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClntNo',name:'차대거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'체크번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reserRsn',name:'보류사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclRsn',name:'해제사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNo',name:'요청사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'요청귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'구매요청일(지급일자)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitDt',name:'해제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitEmpNo',name:'해제사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveDate',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'증빙건수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'postDt2',name:'회계처리일자2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId2',name:'등록자ID2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm2',name:'등록자명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interPayDt',name:'중간지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interDataYn',name:'국제데이터여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errCont',name:'오류내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errYn',name:'오류여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'받을어음관리번호',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'}}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_getMaxCloseYm_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveSlipListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_txt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_txt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중...','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveTransactionContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_slipNoDetail","key":"IN_DS1"},{"id":"ds_txtcontents","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_txtcontents","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrievePaymgnt',action:'/ac.fm.paymgnt.paymgnt.RetrievePaymentContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_slipNo","key":"IN_DS1"},{"id":"ds_paymgnt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_paymgnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_retrievePaymgnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ac.fi.gnrlaccount.slipmgnt.DeleteSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_txt","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_201_01_06b
// 이름     : 경비내역조회
// 경로     : 재무회계/일반회계/전표관리/
// 사용계정 : 내부
// 파라미터 :
//            IN  :
//            OUT :
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
//           /ac/fi/gnrlaccount/slipmgnt/fi_201_04_02p.ozr (회계전표발행) 팝업
//           /ac/fi/gnrlaccount/slipmgnt/fi_201_04_03p.ozr (계정합인쇄) 팝업
// 호출     : 
//            
//==================================================================================================================

// 로그인사용자 정보
scwin.vLoginCoCd = ""; // 소속 자회사 
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.privAdmin = ""; // 어드민권한
scwin.userId = ""; // 사용자ID 
scwin.vCoCd = ""; // 회사코드
scwin.vCoClsCd = ""; // 소속회사종류 : 회계_회사구분('CO035' : 0:동부 EXPRESS)

scwin.vAdminYn = ""; // 어드민여부
scwin.userEmpNo = ""; // 사용자번호

scwin.txtCoClsCd = "";
scwin.txtSlipKndCd = "";
scwin.ed_slipAcctDeptCdSt_hidVal = ""; // 작성부서From
scwin.ed_slipAcctDeptCdEnd_hidVal = ""; // 작성부서To
scwin.ed_drawEmpNo_hidVal = ""; // 작성자

scwin.isStarted = true; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)

scwin.sort_options = {};
scwin.sort_options.sortIndex = "txnNo txnSeq"; // 컬럼 나열
scwin.sort_options.sortOrder = "1 1"; // 1: 오름차순

scwin.onpageload = function () {
  console.log("====== onpageload ================== v 1.01");

  // 회원정보를 json 데이터로 모두 받음
  let memJson = $c.data.getMemInfo($p);

  // 로그인 정보 추출
  let coCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd");
  let coClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd");
  let userHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드
  let userId = $c.data.getMemInfo($p, "userId");
  let privAdmin = $c.data.getMemInfo($p, "privAdmin");
  let empNo = $c.data.getMemInfo($p, "empNo");
  scwin.vLoginCoCd = coCd;
  scwin.vLoginCoClsCd = coClsCd;
  scwin.vUserHomeClsCd = userHomeClsCd;
  scwin.vCoCd = coCd;
  scwin.vCoClsCd = coClsCd;
  scwin.userId = userId;
  scwin.vAdminYn = privAdmin;
  scwin.userEmpNo = empNo;
  console.log("▶▶ vLoginCoCd : " + scwin.vLoginCoCd + "   loginCoClsCd : " + scwin.vLoginCoClsCd);
  console.log("▶▶ vCoCd      : " + scwin.vCoCd + "   vCoClsCd : " + scwin.vCoClsCd);
  console.log("▶▶ userId     : " + scwin.userId + "   userEmpNo : " + scwin.userEmpNo);
  console.log("▶▶ vUserHomeClsCd : " + scwin.vUserHomeClsCd + "   vAdminYn : " + scwin.vAdminYn);
  //    console.log("▶▶ memJson : "+ JSON.stringify(memJson));

  // 공통코드 : onPageLoad 에 위치
  const codeOptions = [{
    grpCd: "FI008",
    compID: "lc_postYn"
  } // 가결구분
  , {
    grpCd: "FI005",
    compID: "gr_txtcontents:deductClsCd"
  } // 거래상세.공제구분
  , {
    grpCd: "FI003",
    compID: "gr_txtcontents:adjmClsCd"
  } // 거래상세.정산방법
  , {
    grpCd: "FM017",
    compID: "gr_payment:payStsCd"
  } // 집행정보.지급상태코드
  , {
    grpCd: "FM018",
    compID: "gr_payment:payMthdCd"
  } // 집행정보.지불방법
  ];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// 공통코드 후처리
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  console.log("  -- -- 회계처리여부 전체 (-1) 추가  --------------------------");
  // 회계처리여부(가결구분)은  전체가 -1.
  dlt_commonCodeFI008.insertRow(0);
  dlt_commonCodeFI008.setCellData(0, "cd", "-1");
  dlt_commonCodeFI008.setCellData(0, "cdNm", "전체");

  // select box 전체 추가 및 인덱스 0 : onUdcCompleted 에 위치
  // lc_postYn.addItem("-1", "전체", 0);  // addItem(보낼 값, 보여주는 이름, 인덱스)
  // lc_postYn.setSelectedIndex(0);

  // 인덱스 대신 value 로 초기값 지정
  // lc_postYn.index=0;  // 전체
  lc_postYn.setValue(-1);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");

  // 2025-10-14 : 작성일자 포커스 위치 이동
  $p.setTimeout(function () {
    // f_Header();
    scwin.f_setCompanyInfo();
    scwin.getMaxCloseYm(); //마감년월 가져오기
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  // 마감년월 조회 조건
  // ds_search2.set("coCd", scwin.vCoCd);

  lc_postYn.setSelectedIndex(0);
  var today = $c.date.getServerDateTime($p, "yyyyMMdd");
  let firstDay = $c.date.getServerDateTime($p, "yyyyMM") + "01";
  ed_slipDtSt.setValue(firstDay);
  ed_slipDtEnd.setValue(today);
  ed_slipDtSt.focus();

  // 거래상세내역조회
  ds_slipNoDetail.set("slipNo", "");
  ds_slipNoDetail.set("slipKndCd", "");
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  console.log("=== f_setCompanyInfo (자회사 회계 시스템 설정)");

  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');

  // KYU_ORDER
  // if('T' == scwin.vAdminYn  ||  !scwin.isSubCompany   ) { // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
  // 	$c.gus.cfEnableObjects([ed_coCd,ed_coNm,btn_coCd ]);    
  // }else {
  // 	$c.gus.cfDisableObjects([ed_coCd,ed_coNm,btn_coCd  ]);   
  // }
  // if(scwin.isSubCompany) {// 자회사 회계 시스템
  //    scwin.txtSlipKndCd = ACConstants.SLIPKNDCD_SUB_COMPANY_EXPENSE; // 전표 종류 : 자회사-경비전표
  // }else{
  //    scwin.txtSlipKndCd = ACConstants.SLIPKNDCD_EXPENSE; // 전표 종류 :  경비전표
  // }
};

//-------------------------------------------------------------------------
// 전월 마감여부 
//-------------------------------------------------------------------------
scwin.getMaxCloseYm = function () {
  console.log("=== getMaxCloseYm (전월 마감여부)");

  // 마감년월 조회 조건
  ds_search2.set("coCd", scwin.vCoCd);

  //	tr_getMaxCloseYm.Post();

  var dcJSON = ds_search2.getJSON();
  console.log("  *** ds_search2 : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_getMaxCloseYm);
};

//-------------------------------------------------------------------------
// 전월 마감여부 submitdone
//-------------------------------------------------------------------------
scwin.sbm_getMaxCloseYm_submitdone = function (e) {
  console.log("▷ sbm_getMaxCloseYm_submitdone (전월 마감여부)");

  // <!-- 미마감 월  확인후 작성일자 셋팅 -->
  // language="javascript"  for=ds_getMaxCloseYm event=OnLoadCompleted(rowcnt)>
  // 	var thisYm = "<%= strToDate %>"; // 오늘일자 가져오기
  // 	//최소 미마감월이 당월이 아닐때
  // 	if(ds_getMaxCloseYm.NameValue(1,"closeYm") != thisYm.substr(0,6)){
  // 		var closeYm = ds_getMaxCloseYm.NameValue(1,"closeYm");
  // 		var firstDay = closeYm.substr(0,4)+"/"+closeYm.substr(4,2)+"/"+"01";  // 1일
  // 		var lastDay =  closeYm.substr(0,4)+"/"+closeYm.substr(4,2)+"/" + new Date(closeYm.substr(0,4),closeYm.substr(4,2),0).getDate(); // 마지막날
  // 		ed_slipDtEnd.text = lastDay; //작성일자 셋팅
  // 		ed_slipDtSt.text = firstDay;
  // 	}else{
  // 		var firstDay = thisYm.substr(0,4)+"/"+thisYm.substr(4,2)+"/"+"01";  //당월 1일
  // 		var lastDay = thisYm.substr(0,4)+"/"+thisYm.substr(4,2)+"/"+ new Date(thisYm.substr(0,4),thisYm.substr(4,2),0).getDate(); //당월 마지막날
  // 		ed_slipDtEnd.text = lastDay; //작성일자 셋팅
  // 		ed_slipDtSt.text = firstDay;
  // 	}

  var thisYm = $c.date.getServerDateTime($p, "yyyyMMdd"); // 오늘일자 가져오기

  //최소 미마감월이 당월이 아닐때
  if (ds_getMaxCloseYm.getCellData(0, "closeYm") != thisYm.substring(0, 6)) {
    var closeYm = ds_getMaxCloseYm.getCellData(0, "closeYm");
    var firstDay = closeYm.substring(0, 6) + "01"; // 1일
    var lastDay = closeYm.substring(0, 6) + new Date(closeYm.substring(0, 4), closeYm.substring(4, 2), 0).getDate(); // 마지막날
    ed_slipDtSt.setValue(firstDay);
    ed_slipDtEnd.setValue(lastDay);
  } else {
    var firstDay = thisYm.substring(0, 6) + "01"; //당월 1일
    var lastDay = thisYm.substring(0, 6) + new Date(thisYm.substring(0, 4), thisYm.substring(4, 2), 0).getDate(); //당월 마지막날
    ed_slipDtSt.setValue(firstDay);
    ed_slipDtEnd.setValue(lastDay);
  }
  console.log("  -=-= closeYm [" + ds_getMaxCloseYm.getCellData(0, "closeYm") + "]  thisYm [" + thisYm + "]  firstDay [" + firstDay + "]  lastDay [" + lastDay + "]");
};

//-------------------------------------------------------------------------
// 숫자차이체크
//-------------------------------------------------------------------------
scwin.f_BetweenCheck = function (str1, str2) {
  if (str1 == "" && str2 != "" || str1 != "" && str2 == "") {
    return false;
  }
  if (parseInt(str2) - parseInt(str1) < 0) {
    return false;
  }
  return true;
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 조회(경비내역) - 1번째 그리드
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("====== f_Retrieve (경비내역) ==================");

  // if (!cfValidate([ed_coCd, ed_slipDtSt,ed_slipDtEnd,ed_slipAcctDeptCdSt,ed_slipAcctDeptCdEnd,ed_drawEmpNo]))

  let ret = await $c.gus.cfValidate($p, [ed_coCd, ed_slipDtSt, ed_slipDtEnd, ed_slipAcctDeptCdSt, ed_slipAcctDeptCdEnd, ed_drawEmpNo]);
  if (!ret) return false;
  if (!scwin.f_BetweenCheck(ed_slipAcctDeptCdSt.getValue().trim(), ed_slipAcctDeptCdEnd.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_057, "작성부서To", "작성부서From"));
    ed_slipAcctDeptCdSt.focus();
    return false;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_slipDtSt.getValue().trim(), ed_slipDtEnd.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_slipDtSt.focus();
    return false;
  }

  // ds_search.UseChangeInfo = false;

  // tr_search.Action="/ac.fi.gnrlaccount.slipmgnt.RetrieveSlipListCMD.do";
  // tr_search.post();

  ds_search.set("coClsCd", scwin.txtCoClsCd);
  ds_search.set("slipKndCd", scwin.txtSlipKndCd);
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회(경비내역) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = function (e) {
  console.log("▷▷ sbm_search_submitdone (경비내역)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // language=JavaScript for=ds_txt event=OnLoadCompleted(rowCnt)>
  // cfShowTotalRows(totalRows, rowCnt);

  var rowCnt = ds_txt.getTotalRow();
  ed_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else {
    ds_slipNo.set("slipNo", ds_txt.getCellData(0, "slipNo"));
    gr_txt.setFocusedCell(0, 1);
    scwin.f_TxnContents(0);
    scwin.f_Payment();
  }

  // gr_txt 헤더 체크박스 해제
  // gr_txt.ColumnProp('checkYn','HeadCheck')="false";
  gr_txt.setHeaderValue("checkYn", false); // 헤더 체크 풀기
};

//-------------------------------------------------------------------------
// 조회(거래내역) - 2번째 그리드
//-------------------------------------------------------------------------
scwin.f_TxnContents = function (row) {
  console.log("====== f_TxnContents (거래상세) row [" + row + "] ===");

  // ds_slipNoDetail.UseChangeInfo = "false";
  // tr_retrieve.Post();

  var dcJSON = ds_slipNoDetail.getJSON();
  console.log("  *** ds_slipNoDetail : " + JSON.stringify(dcJSON));
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("▷▷ sbm_retrieve_submitdone (거래상세)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  var rowCnt = ds_txtcontents.getTotalRow();
  ed_totalRows2.setValue(rowCnt);

  // gr_txtcontents.setFocusedCell(0,0);
};

//-------------------------------------------------------------------------
// 조회(집행정보) - 3번째 그리드
//-------------------------------------------------------------------------
scwin.f_Payment = function () {
  console.log("====== f_Payment (집행정보) ===");
  if (ds_slipNo.get("slipNo") != "") {
    // ds_slipNo.UseChangeInfo = false;
    // tr_retrievePaymgnt.post();

    var dcJSON = ds_slipNo.getJSON();
    console.log("  *** ds_slipNo : " + JSON.stringify(dcJSON));
    $c.sbm.execute($p, sbm_retrievePaymgnt);
  }
};
scwin.sbm_retrievePaymgnt_submitdone = function (e) {
  console.log("▷▷ sbm_retrievePaymgnt_submitdone (집행정보)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  var rowCnt = ds_paymgnt.getTotalRow();
  ed_totalRows3.setValue(rowCnt);

  // gr_payment.setFocusedCell(0,0);
};

// @@ ====== 그리드 / DS ======================================================================= //

//-------------------------------------------------------------------------
// 경비내역 ondataload
//-------------------------------------------------------------------------
scwin.ds_txt_ondataload = function () {
  // <object id="ds_txt" classid="<%=DGauceCLSID.DATASET%>">
  //  <param name=SortExpr          value=+txnNo> 
  ds_txt.sort("txnNo", 0);
};

//-------------------------------------------------------------------------
// 지급금액2 (payAmt --> payAmt2 : 중복 불가)
//-------------------------------------------------------------------------
scwin.payAmt2Exp = function (data, formatData, rowIdx, colIdx) {
  console.log("  payAmt2Exp - data [" + data + "]  formatData [" + formatData + "]  rowIdx [" + rowIdx + "]  colIdx [" + colIdx + "]");
  let temp_payAmt = parseInt(ds_paymgnt.getCellData(rowIdx, "payAmt")); // 지급금액(결제원금)

  console.log("  temp_payAmt [" + temp_payAmt + "]");
  return WebSquare.util.setNumber(temp_payAmt, "#,##0"); // custom 인데 숫자 포맷 주고 싶을 때
};

//-------------------------------------------------------------------------
// 거래상세 ondataload
//-------------------------------------------------------------------------
scwin.ds_txtcontents_ondataload = function () {
  // <!-- 거래내역조회 DataSet -->
  // <object id="ds_txtcontents" classid="<%=DGauceCLSID.DATASET%>">
  //  <param name=SortExpr          value=+txnNo +txnSeq>
  ds_txtcontents.multisort(scwin.sort_options);

  // display('mgntTermStDt') + '~'+ display('mgntTermEndDt')
  var rowCnt = ds_txtcontents.getTotalRow();

  // 경비기간 설정
  for (i = 0; i < rowCnt; i++) {
    if (ds_txtcontents.getCellData(i, "mgntTermStDt") != "") {
      var mgntTermStDt = ds_txtcontents.getCellData(i, "mgntTermStDt");
      var mgntTermEndDt = ds_txtcontents.getCellData(i, "mgntTermEndDt");
      var lc_mgntTermDt = mgntTermStDt.substring(0, 4) + "/" + mgntTermStDt.substring(4, 2) + "/" + mgntTermStDt.substring(6, 2) + " ~ ";
      mgntTermEndDt.substring(0, 4) + "/" + mgntTermEndDt.substring(4, 2) + "/" + mgntTermEndDt.substring(6, 2);
      ds_txtcontents.getCellData(i, "mgntTermDt", lc_mgntTermDt);
    }
  }
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 회사코드 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  console.log("=== f_PopUpCompanyInfo ( [" + ed_coCd.getValue() + "] [" + ed_coNm.getValue() + "]  pWinCloseTF[ " + pWinCloseTF + " ]");

  // var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  // 							,ed_coCd.text, txt_coNm.value
  // 							,pWinCloseTF,null,null,null,null
  // 							,null,null,null,null,null);
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};

//-------------------------------------------------------------------------
// 작성부서From 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCdSt_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

//-------------------------------------------------------------------------
// 작성부서To 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCdEnd_onclickEvent = function (e) {
  scwin.f_openPopUp('2', 'F');
};

//-------------------------------------------------------------------------
// 작성자 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_drawEmpNo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'F');
};

//-------------------------------------------------------------------------
// f_openPopUp 팝업  @@
//   1:작성부서From,2:작성부서To,3:작성자
//-------------------------------------------------------------------------
// 파라미터 갯수 맞춤
scwin.f_openPopUp = async function (flag, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ]  1:작성부서From,2:작성부서To,3:작성자)");
  switch (flag) {
    case '1':
      // 발행부서From
      var param = ",,,0,";
      if (scwin.isSubCompany == true) {
        // 자회사 회계 시스템
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd() + ",0";
      }
      console.log("  발행부서 From popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6',ed_slipAcctDeptCdSt.text.trim(),txt_slipAcctDeptNmSt.value,check,null,null,null,null,param,null,null,null,null);
      udc_slipAcctDeptCdSt.cfCommonPopUp(scwin.udc_slipAcctDeptCdSt_callBackFunc, ed_slipAcctDeptCdSt.getValue().trim(), ed_slipAcctDeptNmSt.getValue(), check /* 3 */, null, null, null, null, param, null, null, null, null);
      break;
    case '2':
      // 발행부서From
      var param = ",,,0,";
      if (scwin.isSubCompany == true) {
        // 자회사 회계 시스템
        param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      }
      console.log("  발행부서 To popup  param [" + param + "]");

      //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo6',ed_slipAcctDeptCdEnd.text.trim(),txt_slipAcctDeptNmEnd.value,check,null,null,null,null,param,null,null,null,null);
      udc_slipAcctDeptCdEnd.cfCommonPopUp(scwin.udc_slipAcctDeptCdEnd_callBackFunc, ed_slipAcctDeptCdEnd.getValue().trim(), ed_slipAcctDeptNmEnd.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '3':
      // 작성자
      var param = "";
      if (scwin.isSubCompany == true) {
        // 자회사 회계 시스템
        param = ed_coCd.getValue();
      }
      console.log("  작성자 popup  param [" + param + "]");

      //rtnList = cfCommonPopUp('retrieveAcEmpInfo',ed_drawEmpNo.text.trim(),txt_drawEmpNm.value,check,null,null,null,null,param,null,null,null,null);
      // KYU_TEST : 2026-02-05 : 작성자 전체 조회 제외
      udc_drawEmpNo.cfCommonPopUp(scwin.udc_drawEmpNo_callBackFunc, ed_drawEmpNo.getValue().trim(), ed_drawEmpNm.getValue(), check /* 3 */, null, null, null, null, param, null, null, null, null, null, "F");
      break;
    default:
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //
//   1:작성부서From,2:작성부서To,3:작성자

//-------------------------------------------------------------------------
// 회사코드조회 callBackFunc
//-------------------------------------------------------------------------
scwin.udc_coCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_coCd_callBackFunc (회사코드조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");

  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (scwin.ed_coCd_hidVal != rtnList[0]) scwin.f_initObj();
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    scwin.ed_coCd_hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분    
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명 
    scwin.ed_coCd_hidVal = ""; // 히든값
    scwin.txtCoClsCd = ""; // 회사구분    
  }
  console.log("     -- -- scwin.txtCoClsCd [" + scwin.txtCoClsCd + "]");
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isSubCompany) {
    // 자회사 회계 시스템
    scwin.txtSlipKndCd = ACConstants.SLIPKNDCD_SUB_COMPANY_EXPENSE; // 전표 종류 : 자회사-경비전표
  } else {
    scwin.txtSlipKndCd = ACConstants.SLIPKNDCD_EXPENSE; // 전표 종류 :  경비전표
  }
  if (scwin.isStarted == true) {
    // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)

    // KYU_ORDER
    if ('T' == scwin.vAdminYn || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
    }
    scwin.isStarted = false; // 최초 이벤트 여부 (자회사 구분 로직을 최초 한번만 실행-팝업 리턴 시간차)
  }
};

//-------------------------------------------------------------------------
// 부가세신고부서 초기화
// 자회사 회계 시스템 추가에 따라 회사 코드가 변경되면 reset
//-------------------------------------------------------------------------
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_slipAcctDeptCdSt, ed_slipAcctDeptNmSt]); // 조회조건 - 작성부서 From
  $c.gus.cfInitObjects($p, [ed_slipAcctDeptCdEnd, ed_slipAcctDeptNmEnd]); // 조회조건 - 작성부서 To
  $c.gus.cfInitObjects($p, [ed_drawEmpNo, ed_drawEmpNm]); // 조회조건 - 작성자

  // KYU_NEW : 작성자 히든도 클리어
  scwin.ed_drawEmpNo_hidVal = "";
};

//-------------------------------------------------------------------------
// 작성부서From조회 callBackFunc (1)
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCdSt_callBackFunc = async function (rtnList) {
  console.log("▲ udc_slipAcctDeptCdSt_callBackFunc (작성부서From조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    // f_resultPopEd(ed_slipAcctDeptCdSt,txt_slipAcctDeptNmSt,rtnList);
    scwin.f_resultPopEd(ed_slipAcctDeptCdSt, ed_slipAcctDeptNmSt, rtnList, '1');
  }
};

//-------------------------------------------------------------------------
// 작성부서To조회 callBackFunc (2)
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCdEnd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_slipAcctDeptCdEnd_callBackFunc (작성부서To조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    // f_resultPopEd(ed_slipAcctDeptCdEnd,txt_slipAcctDeptNmEnd,rtnList);
    scwin.f_resultPopEd(ed_slipAcctDeptCdEnd, ed_slipAcctDeptNmEnd, rtnList, '2');
  }
};

//-------------------------------------------------------------------------
// 작성자조회 callBackFunc (3)
//-------------------------------------------------------------------------
scwin.udc_drawEmpNo_callBackFunc = async function (rtnList) {
  console.log("▲ udc_drawEmpNo_callBackFunc (작성자조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    // f_resultPopEd(ed_drawEmpNo,txt_drawEmpNm,rtnList);
    scwin.f_resultPopEd(ed_drawEmpNo, ed_drawEmpNm, rtnList, '3');
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)   flag [" + flag + "]  1:작성부서From,2:작성부서To,3:작성자)");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      // 히든값 분기처리
      switch (flag) {
        case '1':
          scwin.ed_slipAcctDeptCdSt_hidVal = "";
          break;
        // 작성부서From
        case '2':
          scwin.ed_slipAcctDeptCdEnd_hidVal = "";
          break;
        // 작성부서To
        case '3':
          scwin.ed_drawEmpNo_hidVal = "";
          break;
        // 작성자
        default:
          break;
      }
      return;
    }

    // strCd.Text = rtnList[0];	// 코드
    // strNm.value = rtnList[1];	// 명
    // strCd.hidVal = rtnList[0];  // 히든값

    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_slipAcctDeptCdSt_hidVal = rtnList[0];
        break;
      // 작성부서From
      case '2':
        scwin.ed_slipAcctDeptCdEnd_hidVal = rtnList[0];
        break;
      // 작성부서To
      case '3':
        scwin.ed_drawEmpNo_hidVal = rtnList[0];
        break;
      // 작성자
      default:
        break;
    }
  } else {
    // strCd.Text = "";
    // strNm.value = "";
    // strCd.hidVal = "";

    strCd.setValue("");
    strNm.setValue("");

    // 히든값 분기처리
    switch (flag) {
      case '1':
        scwin.ed_slipAcctDeptCdSt_hidVal = "";
        break;
      // 작성부서From
      case '2':
        scwin.ed_slipAcctDeptCdEnd_hidVal = "";
        break;
      // 작성부서To
      case '3':
        scwin.ed_drawEmpNo_hidVal = "";
        break;
      // 작성자
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
// 팝업체크 - 코드값 변경시 자동검색  @@
//   flag : 팝업 플래그
//-------------------------------------------------------------------------
//   1:작성부서From,2:작성부서To,3:작성자
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  console.log("===== f_checkPopEd (팝업체크 - srtCd [" + strCd.getValue() + "]  strNm [" + strNm.getValue() + "]  flag [" + flag + "]");

  // if (strCd.getValue().trim() == strCd.hidVal) return;
  if (flag == '1' && strCd.getValue().trim() == scwin.ed_slipAcctDeptCdSt_hidVal ||
  // 작성부서From
  flag == '2' && strCd.getValue().trim() == scwin.ed_slipAcctDeptCdEmd_hidVal ||
  // 작성부서To
  flag == '3' && strCd.getValue().trim() == scwin.ed_drawEmpNo_hidVal // 작성자
  ) {
    // KYU_TEST : 히든 비교시 코드가 null 이 아니어야 함. (코드 null 일 때 명 null 처리)
    if (strCd.getValue() != "") return; // 리턴 안함. KYU_TEST 일단 리턴으로 변경
  }

  //  strNm.value="";
  strNm.setValue("");
  //  strCd.hidVal="";

  // 히든값 초기화
  switch (flag) {
    case '1':
      scwin.ed_slipAcctDeptCdSt_hidVal = "";
      break;
    // 작성부서From
    case '2':
      scwin.ed_slipAcctDeptCdEmd_hidVal = "";
      break;
    // 작성부서To
    case '3':
      scwin.ed_drawEmpNo_hidVal = "";
      break;
    // 작성자
    default:
      break;
  }

  // if(strCd.text.trim()!="") f_openPopUp(flag,'T');

  if (strCd.getValue().trim() != "") {
    scwin.f_openPopUp(flag, 'T');
    // 팝업 로딩
    // switch (flag){
    // 	    case '1'  : scwin.f_openPopUp(flag,'T'); break;  // 작성부서From
    // 	    case '2'  : scwin.f_openPopUp(flag,'T'); break;  // 작성부서To
    // 	    case '3'  : scwin.f_openPopUp(flag,'T'); break;  // 작성자
    //         default   : break;
    // }
  }
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 회사코드 focus out
//-------------------------------------------------------------------------
scwin.udc_coCd_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_coCd event=OnKillFocus()>
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 작성부서From focus out
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCdSt_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_slipAcctDeptCdSt event=OnKillFocus()>
  scwin.f_checkPopEd(ed_slipAcctDeptCdSt, ed_slipAcctDeptNmSt, '1');
};

//-------------------------------------------------------------------------
// 작성부서To focus out
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCdEnd_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_slipAcctDeptCdEnd event=OnKillFocus()>
  scwin.f_checkPopEd(ed_slipAcctDeptCdEnd, ed_slipAcctDeptNmEnd, '2');
};

//-------------------------------------------------------------------------
// 작성자 focus out
//-------------------------------------------------------------------------
scwin.udc_drawEmpNo_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_drawEmpNo event=OnKillFocus()>
  scwin.f_checkPopEd(ed_drawEmpNo, ed_drawEmpNm, '3');
};

//-------------------------------------------------------------------------
// 전표번호 클릭
//-------------------------------------------------------------------------
scwin.gr_txt_oncellclick = async function (rowIndex, columnIndex, columnId) {
  Colid = columnId;
  Row = rowIndex;

  // <!-- 전표번호클릭시  -->
  // <script language="javascript"  for=gr_txt event=OnClick(Row,Colid)>
  if (Colid == "slipNo" && Row >= 0) {
    // scwin.cfShowSlipInfo(ds_txt.getCellData(Row,"slipNo"));
    var rtnList = await $c.gus.cfShowSlipInfo($p, ds_txt.getCellData(Row, "slipNo")); // 전표내역조회
    console.log(rtnList);
  }
  if (Row >= 0) {
    ds_slipNoDetail.set("slipNo", ds_txt.getCellData(Row, "slipNo"));
    ds_slipNoDetail.set("slipKndCd", ds_txt.getCellData(Row, "slipKndCd"));
    scwin.f_TxnContents(Row);
    ds_slipNo.set("slipNo", ds_txt.getCellData(Row, "slipNo"));
    scwin.f_Payment();
  }
};

// @@ ====== 삭제 ============================================================================== //

//-------------------------------------------------------------------------
// 거래삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  console.log("====== f_Delete (거래삭제) ==================");

  // 체크박스 클릭된 것 찾기
  // if( ds_txt.isUpdated==false ){

  var delChk = ds_txt.getMatchedIndex("checkYn", "T", true);
  if (delChk.length == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_056, "데이타"));
    return;
  }

  // 회계처리가 처리되고 전표종류가 수정불가일경우 체크
  for (i = 0; i < ds_txt.getTotalRow(); i++) {
    // if(ds_txt.RowStatus(i)==3 && (ds_txt.NameValue(i,"postYn")=="1" || ds_txt.NameValue(i,"modPsblYn")=="0")){

    if (ds_txt.getRowStatus(i) == "U" && (ds_txt.getCellData(i, "postYn") == "1" || ds_txt.getCellData(i, "modPsblYn") == "0"))
      // 회계처리 되거나 수정가능 불가 (0) 인 건은 삭제 못함
      {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_041, "거래삭제[" + ds_txt.getCellData(i, "txnNo") + "]", "거래삭제를 "));
        return;
      }
  }

  // if(cfConfirmMsg(MSG_CM_CRM_008,Array("선택하신 거래내역"))==true){
  let ret = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_008, "선택하신 거래내역"));
  if (ret) {
    // tr_delete.Post();
    $c.sbm.execute($p, sbm_delete);
  }
};

//-------------------------------------------------------------------------
// 거래삭제 submitdone
//-------------------------------------------------------------------------
scwin.sbm_delete_submitdone = function (e) {
  console.log("▷▷ sbm_delete_submitdone (거래삭제)");
  if (e.responseJSON.resultDataSet[0].Code != 0) {
    // language=JavaScript for=tr_delete event=OnFail()>
    // cfShowError(tr_delete);  // 공통에서 처리
    $c.gus.cfEnableKeyData($p);
    // cfDisableBtn([ bUpdate]);
    return;
  }

  // <!-- 거래취소 DataSet -->
  // language=JavaScript for=tr_delete event=OnSuccess()>
  $c.gus.cfAlertMsg($p, MSG_CM_INF_004); // 성공적으로삭제하였습니다
  ds_txt.setJSON([]);
  ds_txtcontents.setJSON([]);
  ds_paymgnt.setJSON([]);
  scwin.f_Retrieve();

  // gr_txt.ColumnProp('checkYn','HeadCheck')="false";
  gr_txt.setHeaderValue("checkYn", false); // 헤더 체크 풀기
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드 - 1번 그리드 (경비내역)
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  // var objGridName = eval("gr_txt");
  // if (cfConfirmMsg("Excel로 다운로드 하시겠습니까?")) {
  // 	cfGridToExcel(objGridName, "경비내역조회","경비내역조회.xls",8+16);
  // }

  if (ds_txt.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  var sheetTitle = "경비내역조회";
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    let options = {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle
      // type: "1",
      // headerColor: "#eeeeee", //"#E8E8E8", //연한회색 #33CCCC
      // startRowIndex: 2
    };
    $c.data.downloadGridViewExcel($p, gr_txt, options);
  }
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드 - 2번 그리드 (거래상세)
//-------------------------------------------------------------------------
scwin.f_Excel1 = async function () {
  // var objGridName = eval("gr_txtcontents");
  // if (cfConfirmMsg("Excel로 다운로드 하시겠습니까?")) {
  // 	cfGridToExcel(objGridName, "거래상세","거래상세조회.xls",8+16);
  // }

  if (ds_txtcontents.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  var sheetTitle = "거래상세";
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    let options = {
      fileName: "거래상세조회" + ".xlsx",
      sheetName: sheetTitle,
      rowNumVisible: true // rowNum 출력
    };
    $c.data.downloadGridViewExcel($p, gr_txtcontents, options);
  }
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드 - 3번 그리드 (집행정보)
//-------------------------------------------------------------------------
scwin.f_Excel2 = async function () {
  // var objGridName = eval("gr_payment");
  // if (cfConfirmMsg("Excel로 다운로드 하시겠습니까?")) {
  // 	cfGridToExcel(objGridName, "집행정보","집행정보조회.xls",8+16);
  // }

  if (ds_paymgnt.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  var sheetTitle = "집행정보";
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    let options = {
      fileName: "집행정보조회" + ".xlsx",
      sheetName: sheetTitle,
      rowNumVisible: true // rowNum 출력
    };
    $c.data.downloadGridViewExcel($p, gr_payment, options);
  }
};

// @@ ====== 레포트 ============================================================================ //

//-------------------------------------------------------------------------
//  openPopup 팝업 오픈
//-------------------------------------------------------------------------
scwin.openPopup = async function (data, width, height) {
  if (width == null || width == "") width = 900;
  if (height == null || height == "") height = 800;
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: width,
    height: height,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
//  회계전표발행
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  // 체크박스 클릭된 것 찾기
  // if( ds_txt.isUpdated==false ){

  var delChk = ds_txt.getMatchedIndex("checkYn", "T", true);
  if (delChk.length == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_056, "데이타"));
    return;
  }

  //OZStartBatch();
  var param = "";
  for (i = 0; i < ds_txt.getTotalRow(); i++) {
    // if(ds_txt.RowStatus(i)==3 && ds_txt.NameValue(i,"checkYn")=="T"){
    if (ds_txt.getRowStatus(i) == "U" && ds_txt.getCellData(i, "checkYn") == "T") {
      param = param + "," + ds_txt.getCellData(i, "slipNo");
    }
  }
  console.log("  param [" + param + "]   param.substring(1) [" + param.substring(1) + "]");

  // var odiParam = new ODIParam("fi_201_04_02p");
  // odiParam.add("slipNo", param.substring(1));
  // // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // var formParam = new FormParam();

  // // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // var viewerParam = new ViewerParam();
  // viewerParam.add("viewer.zoom","100");
  // viewerParam.add("viewer.useprogressbar","false");		//PROGRESSBAR 안보이게....
  // cfOZReport("chb_printCheck", "chb_previewCheck", "/ac/fi/gnrlaccount/slipmgnt/fi_201_04_02p.ozr", odiParam, viewerParam, formParam);

  let data = {
    odiName: "fi_201_04_02p",
    reportName: "/ac/fi/gnrlaccount/slipmgnt/fi_201_04_02p.ozr",
    odiParam: {
      //  sysPath             : "dbl.ac.fi.gnrlaccount.slipmgnt"
      slipNo: param.substring(1)
    },
    viewerParam: {
      viewer: 100 // 배율 설정
      ,
      useprogressbar: false // 프로그레스바 쓸지 말지
      // ,mode           : "print"  // 인쇄 옵션창 표시 없이 바로 출력
    },
    formParam: {}
  };
  console.log("  회계전표발행(멀티) data [" + JSON.stringify(data) + "]");

  // wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
//  회계전표발행 (계정합인쇄)
//-------------------------------------------------------------------------
scwin.f_OzReport1 = async function () {
  // 체크박스 클릭된 것 찾기
  // if(ds_txt.isUpdated==false){
  var delChk = ds_txt.getMatchedIndex("checkYn", "T", true);
  if (delChk.length == 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_056, "데이타"));
    return;
  }

  // 1. 계정합인쇄
  var param = "";
  for (i = 0; i < ds_txt.getTotalRow(); i++) {
    // if(ds_txt.RowStatus(i)==3 && ds_txt.NameValue(i,"checkYn")=="T"){
    if (ds_txt.getRowStatus(i) == "U" && ds_txt.getCellData(i, "checkYn") == "T") {
      param = param + "," + ds_txt.getCellData(i, "slipNo");
    }
  }
  console.log("  param [" + param + "]");

  // var odiParam = new ODIParam("fi_201_04_03p");
  // odiParam.add("slipNo", param.substring(1));
  // // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // var formParam = new FormParam();
  // //formParam.add("form1","폼1");

  // // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // var viewerParam = new ViewerParam();
  // viewerParam.add("viewer.zoom","100");
  // viewerParam.add("viewer.useprogressbar","false");		//PROGRESSBAR 안보이게....

  // cfOZReport("chb_printCheck", "chb_previewCheck", "/ac/fi/gnrlaccount/slipmgnt/fi_201_04_03p.ozr", odiParam, viewerParam, formParam);

  let data = {
    odiName: "fi_201_04_03p",
    reportName: "/ac/fi/gnrlaccount/slipmgnt/fi_201_04_03p.ozr",
    odiParam: {
      //  sysPath             : "dbl.ac.fi.gnrlaccount.slipmgnt"
      slipNo: param.substring(1)
    },
    viewerParam: {
      viewer: 100 // 배율 설정
      ,
      useprogressbar: false // 프로그레스바 쓸지 말지
      // ,mode           : "print"  // 인쇄 옵션창 표시 없이 바로 출력
    },
    formParam: {}
  };
  console.log("  회계전표발행(멀티) data [" + JSON.stringify(data) + "]");

  // wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
  scwin.openPopup(data);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveDongbuGroupCompanyInfopopup',style:'',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_coCd',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',UpperFlagCode:'1',selectID:'retrieveDongbuGroupCompanyInfo',maxlengthCode:'3',id:'udc_coCd',maxlengthName:'50',objTypeName:'data',objTypeCode:'data','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent',refDataCollection:'ds_search',code:'coCd',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'가결구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_postYn',ref:'data:ds_search.postYn',renderType:'',style:'width: 150px;',submenuSize:'auto',objType:'data',chooseOptionLabel:'-1',title:'가결구분'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'slipDtSt',style:'',id:'udc_slipDt',refEdDt:'slipDtEnd',refDataMap:'ds_search',mandatory:'true',objType:'data',edFromId:'ed_slipDtSt',edToId:'ed_slipDtEnd',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctDeptCdInfo6popup',style:'',validExpCode:'작성부서:no:format=00000',allowCharCode:'0-9',objTypeCode:'data',UpperFlagCode:'1',codeId:'ed_slipAcctDeptCdSt',nameId:'ed_slipAcctDeptNmSt',objTypeName:'data',selectID:'retrieveAcctDeptCdInfo6',maxlengthCode:'5',btnId:'btn_slipAcctDeptCdst',maxlengthName:'50',id:'udc_slipAcctDeptCdSt','ev:onclickEvent':'scwin.udc_slipAcctDeptCdSt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_slipAcctDeptCdSt_onblurCodeEvent',refDataCollection:'ds_search',code:'slipAcctDeptCdSt',validTitle:'작성부서From',skipOnBlurCodeValueEmpty:'N'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',style:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctDeptCdInfo6popup2',style:'',codeId:'ed_slipAcctDeptCdEnd',nameId:'ed_slipAcctDeptNmEnd',objTypeCode:'data',validExpCode:'작성부서:no:format=00000',allowCharCode:'0-9',UpperFlagCode:'1',objTypeName:'data',selectID:'retrieveAcctDeptCdInfo6',btnId:'btn_slipAcctDeptCdEnd',maxlengthCode:'5',maxlengthName:'50',id:'udc_slipAcctDeptCdEnd','ev:onclickEvent':'scwin.udc_slipAcctDeptCdEnd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_slipAcctDeptCdEnd_onblurCodeEvent',code:'slipAcctDeptCdEnd',refDataCollection:'ds_search',validTitle:'작성부서To',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',btnId:'btn_drawEmpNo',codeId:'ed_drawEmpNo',id:'udc_drawEmpNo',maxlengthCode:'6',maxlengthName:'50',nameId:'ed_drawEmpNm',objTypeCode:'data',objTypeName:'data',popupID:'retrieveAcEmpInfopopup',selectID:'retrieveAcEmpInfo',style:'','ev:onclickEvent':'scwin.udc_drawEmpNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_drawEmpNo_onblurCodeEvent',refDataCollection:'ds_search',code:'drawEmpNo',validTitle:'작성자',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{id:'',class:' row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'경비내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_Excel',gridID:'gr_txt',id:'udc_gridMain1',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{oddEvenColorDisplay:'true',rowNumVisible:'false',showSortableImage:'true',rowNumHeaderValue:'No',sortable:'false',defaultCellHeight:'24',rowNumWidth:'70',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_txt',evenRowBackgroundColor:'#F8FFF8',autoFit:'allColumn',id:'gr_txt',visibleRowNum:'10',class:'wq_gvw','ev:oncellclick':'scwin.gr_txt_oncellclick',focusMode:'cell'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column12',displayMode:'label',fixColumnWidth:'true',checkboxLabel:' '}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column2',value:'작성일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'거래번호',displayMode:'label',class:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'작성부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'차변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'대변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'회계일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'회계부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'회계차수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column35',value:'작성자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'checkYn',displayMode:'label',fixColumnWidth:'true',trueValue:'T',falseValue:'F',valueType:'other',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'txnNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'slipAcctDeptNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dsum',class:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'csum',class:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',readOnly:'true',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipNo',class:'underline',displayMode:'label',style:';color:blue;',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'postDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'postAcctDeptNm',value:'',displayMode:'label',textAlign:'left',dataType:'text',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'prtCnt',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'drawEmpNm',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'w2:button',A:{class:'btn',id:'btn_ozrprint',label:'전표인쇄',style:'',userAuth:'P','ev:onclick':'scwin.f_OzReport'}},{T:1,N:'w2:button',A:{class:'btn',id:'btn_ozrprint1',label:'계정합인쇄',style:'',userAuth:'P','ev:onclick':'scwin.f_OzReport1'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn',id:'btn_save',label:'거래삭제',style:'',userAuth:'U',objType:'bSave','ev:onclick':'scwin.f_Delete'}}]}]}]},{T:1,N:'xf:group',A:{id:'',class:' row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'거래상세',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_txtcontents',gridDownFn:'scwin.f_Excel1',id:'udc_gridMain2',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{oddEvenColorDisplay:'true',rowNumVisible:'true',showSortableImage:'true',rowNumHeaderValue:'No',sortable:'true',defaultCellHeight:'24',rowNumWidth:'40',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_txtcontents',evenRowBackgroundColor:'#F8FFF8',id:'gr_txtcontents',visibleRowNum:'7',class:'wq_gvw',focusMode:'cell'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column2',value:'증빙구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'공제구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column3',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column5',value:'사업자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column7',value:'계산서일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'할인금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'공급금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'부가세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column17',value:'계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'관리일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'정산방법',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'정산처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column59',value:'경비기간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column57',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column55',value:'요청거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column53',value:'요청거래처명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'evidClsNm',value:'',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'deductClsCd',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'crn',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'crnNm',class:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'txnDt',class:'',displayMode:'label',readOnly:'true',textAlign:'center',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcAmt',class:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'spplyAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',class:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vatAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',class:''}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mgntDt',value:'',displayMode:'label',readOnly:'true',textAlign:'center',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'adjmClsCd',value:'',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'adjmClntNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'mgntTermDt',value:'',displayMode:'label',readOnly:'true',textAlign:'center',dataType:'text'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'reqClntNo',value:'',displayMode:'label',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'reqClntNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'ed_totalRows2',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'집행정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridUpYn:'N',gridDownFn:'scwin.f_Excel2',gridID:'gr_payment',id:'udc_gridMain3',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_paymgnt',defaultCellHeight:'24',evenRowBackgroundColor:'#F8FFF8',id:'gr_payment',oddEvenColorDisplay:'true',rowNumHeaderValue:'No',rowNumVisible:'true',rowNumWidth:'40',showSortableImage:'true',sortable:'false',visibleRowNum:'7',visibleRowNumFix:'true',focusMode:'cell'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'요청금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'정산처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'지급액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'지급상태',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'지급은행',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'지급계좌',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'지급전표',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'지불방법',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'요청일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',style:'',value:'지급확정일',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'payAmt',inputType:'text',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAmt2',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',customFormatter:'scwin.payAmt2Exp',excelCellType:'number'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'payStsCd',inputType:'select',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'bankNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'payBankAcntNo',inputType:'text',width:'120',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'paySlip',inputType:'text',style:'',value:'',width:'100',textAlign:'center',readOnly:'true',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payMthdCd',inputType:'select',style:'',value:'',width:'100',textAlign:'center',readOnly:'true',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payDt',inputType:'text',style:'',value:'',width:'100',editFormat:'####/##/##',displayFormat:'yyyy/MM/dd',textAlign:'center',readOnly:'true',dataType:'date',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnDt',inputType:'text',style:'',value:'',width:'100',editFormat:'####/##/##',displayFormat:'yyyy/MM/dd',textAlign:'center',readOnly:'true',dataType:'date',class:''}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows3',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})