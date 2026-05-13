/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_01b.xml 430146 3d651281a1003c7f8a9d125d7854dfd513958d6368eb1da54ea12d95a1a0cf20 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txncontents',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_txncontents_oncelldatachange','ev:onrowpositionchange':'scwin.ds_txncontents_onrowpositionchange',keepDataType:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전문번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnNo',name:'거래번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'txnContSeq',name:'거래내역순번',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'증빙구분명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'공제구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'관리거래처번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'관리거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crnNm',name:'사업자등록번호명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'txnDt',name:'거래일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',name:'관리사원명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntDt',name:'관리일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',name:'관리기간시작일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',name:'관리기간종료일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'부가세관리귀속부서',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',name:'부가세신고귀속부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'vatCrn',name:'부가세사업자등록번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'계산서금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급금액_외화',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'frchCrn',name:'가맹점사업자등록번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'frchNm',name:'가맹점명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDistYn',name:'계정배부여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cardNo',name:'카드번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cardNm',name:'카드명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'adjmClsCd',name:'정산구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'adjmAcctDeptCd',name:'정산귀속부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'adjmAcctDeptNm',name:'정산귀속부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'adjmClntNo',name:'정산거래처번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'adjmClntNm',name:'정산거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건저장순번',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'termMgntYn',name:'기간관리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'empMgntYn',name:'사원관리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dtMgntYn',name:'일자관리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizMgntYn',name:'사업관리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'vatYn',name:'부가세여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cardNoYn',name:'카드번호여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'frchNoYn',name:'가맹점번호여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'deductClsYn',name:'공제구분여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'limitAmt',name:'한도금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dcAmt',name:'할인금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cardKndCd',name:'카드종류코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'비용구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntMgntYn',name:'거래처관리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'branchCd',name:'지점코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pchsItemCd',name:'매입항목코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'branchNm',name:'지점명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pchsItemNm',name:'매입항목명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'etcAmt1',name:'기타금액1 금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'etcAcctCd1',name:'기타금액1 계정',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'etcSummary1',name:'기타금액1 적요',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'etcAmt2',name:'기타금액2 금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'etcAcctCd2',name:'기타금액2 계정',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'etcSummary2',name:'기타금액2 적요',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'giroYn',name:'지급방법지로여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'paymentPrd',name:'지급기한(지로납부기간)',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'deductfixClsCd',name:'공제구분확정코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'taxnCls',name:'과세구분',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'buyCollectionNum',name:'매입추신번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rowNum',name:'ROWNUM',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'vehcleNo',name:'차량번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'busiCarYn',name:'업무용차량여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'expenseCd',name:'비용구분',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'etcAcctNm1',name:'기타금액1 계정명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'etcAcctNm2',name:'기타금액2 계정명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntClntCrn',name:'거래처사업자번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'zeroTaxClsCd',name:'영세율구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'vehcleNm',name:'차량명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rowOrigin',name:'row발생수단',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_tempExcel',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'evidClsCd',name:'증빙구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'deductClsCd',name:'공제구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntClntNo',name:'관리거래처번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crn',name:'사업자등록번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctCd',name:'계정코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'txnDt',name:'거래일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntEmpNo',name:'관리사원번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntDt',name:'관리일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntTermStDt',name:'관리기간시작일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntTermEndDt',name:'관리기간종료일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptCd',name:'회계부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatDeclarAcctDeptCd',name:'부가세관리귀속부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyAmt',name:'계산서금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyAmtFcrc',name:'공급금액_외화'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crcCd',name:'통화코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'exchRt',name:'환율'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatAmt',name:'부가세금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cardNo',name:'카드번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'adjmClsCd',name:'정산구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'adjmClntNo',name:'정산거래처번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'summary',name:'적요'}},{T:1,N:'w2:column',A:{dataType:'text',id:'opntAcctCd',name:'상대계정코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'giroYn',name:'지급방법지로여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'paymentPrd',name:'지급기한(지로납부기간)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vehcleNo',name:'차량번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'busiCarYn',name:'업무용차량여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expenseCd',name:'비용구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqClntNo',name:'요청거래처번호'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_commonCode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'param5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'param6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'param7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'param8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'param9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'param10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exclusionOfTaxtation',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_getMaxCloseYm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_exchRtSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crcCd',name:'환율코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'기준일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exchRt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDt',name:'기준일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdExchRt',name:'기준환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pchsExchRt',name:'매수환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellovExchRt',name:'매도환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_budgetCheck'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'budgetYm',name:'예산년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'budgetRsltsAmt',name:'예산실적금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_budget',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntlUnitClsCd',name:'통제단위구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnAmt',name:'배정금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'actAmt',name:'취득가액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'addBudgetAmt',name:'추가예산금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'budgetRsltsAmt',name:'예산실적금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'budgetRsltsSettAmt',name:'예산실적결산금액',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_budget_temp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntlUnitClsCd',name:'통제단위구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnAmt',name:'배정금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'actAmt',name:'취득가액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'addBudgetAmt',name:'추가예산금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'budgetRsltsAmt',name:'예산실적금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'budgetRsltsSettAmt',name:'예산실적결산금액',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_txn',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'전표귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'전표귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_prov',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'요청귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptNm',name:'요청귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNo',name:'요청사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNm',name:'요청사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlIntendDt',name:'정리예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmt',name:'정리금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmtFcrc',name:'정리금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postSetlAmt',name:'기정리금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postSetlAmtFcrc',name:'기정리외화금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susPayClsCd',name:'가지급금구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptAmt',name:'입금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptAmtFcrc',name:'입금액(외화)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlDt',name:'정리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건 저장순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlIntendAmt',name:'정리예정금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlIntendAmtFcrc',name:'정리예정외화금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlCompleteYn',name:'정리완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postYn',name:'회계처리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setexchRt',name:'정리환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전문번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_provHeader',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlDt',name:'정리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'요청귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susPayClsCd',name:'가지급금구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건 저장순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'은행계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookKndNm',name:'통장종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptNm',name:'요청귀속부서명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excel',saveRemovedData:'true',keepDataType:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'공제구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'관리거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnDt',name:'거래일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDt',name:'관리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',name:'관리기간시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',name:'관리기간종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'부가세관리귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'계산서금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNo',name:'카드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClsCd',name:'정산구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClntNo',name:'정산거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'giroYn',name:'지급방법지로여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paymentPrd',name:'지급기한(지로납부기간)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehcleNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiCarYn',name:'업무용차량여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expenseCd',name:'비용구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_tmp',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pchsNo',name:'매입번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeqStr',name:'매입순번(전표연결하는실적SEQ)',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_evidac',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'branchCd',name:'지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchNm',name:'지점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemNm',name:'매입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'지점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건 저장순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnNo',name:'거래번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnContSeq',name:'거래내역순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidEchAcctSeq',name:'증빙별계정순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_compareDrcrClntYn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_chkAccountClntKndCd1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_chkAccountClntKndCd2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'tempList3',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'f_Upload1',name:'f_Upload1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_acctCd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_commonCode',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_evidClsCd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_commonCode',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/cm.zz.RetrieveCommonPopupCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',id:'sbm_exclusionOfTaxtation',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'none',ref:'data:json,ds_commonCode',replace:'',target:'data:json,GAUCE',style:''}},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_exchRt',action:'/ac.fm.stdinfomgnt.RetrieveExchangeRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_exchRtSearch","key":"IN_DS1"},{"id":"ds_exchRt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_exchRt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_budgetRt',action:'/ac.co.budgetmgnt.ValidateBudgetRemainAmtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_budgetCheck","key":"IN_DS1"},{"id":"ds_budget","key":"OUT_DS1"},{"id":"ds_budget_temp","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_budget","key":"OUT_DS1"},{"id":"ds_budget_temp","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_compareDrcrClntYn',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_commonCode',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/cm.zz.RetrieveCommonPopupCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',id:'sbm_chkAccountClntKndCd1',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,ds_commonCode',replace:'',target:'data:json,GAUCE',style:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/cm.zz.RetrieveCommonPopupCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',id:'sbm_chkAccountClntKndCd2',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,ds_commonCode',replace:'',style:'',target:'data:json,GAUCE'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.gnrlaccount.slipmgnt.ProcessExpenseSlipNewCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_txn","key":"IN_DS1"},{"id":"ds_txncontents","key":"IN_DS2"},{"id":"ds_prov","key":"IN_DS3"},{"id":"ds_evidac","key":"IN_DS4"},{"id":"ds_tmp","key":"IN_DS5"},{"id":"ds_slipNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_201_01_01b
// 이름     : 경비전표입력
// 경로     : 재무회계/일반회계/전표관리/
// 사용계정 : 내부
// 파라미터 :
//            IN  :
//            OUT :
//
// 비고     : 
//           1:발행부서,3:계정,4:귀속부서,6:카드번호,7:사업자,8:사원,9:정산처,10:거래처,11:상대계정,12:매출입,13:지점,14:차량별실적,15:요청거래처
//
//            검색 : @@ @ [주요로직]   @@ [섹션]
//
// 레포트   :
// 업로드   :
// 다운로드 :
// 호출     :
//            fi_201_01_02p.jsp(경비분배) - 증빙배부 버튼 클릭
//            fi_201_01_03p.jsp(예산실적을 조회하는 화면)- 예산실적 버튼 클릭
//            fi_201_01_07p.jsp(전표복사(경비전표)) - 전표복사 버튼 클릭
//            fi_201_01_01p.jsp(경비전표 기타금액입력) - 기타금액입력 버튼 클릭
//            fi_201_04_06p.jsp(전표내역조회) - 발행 성공후
//            rc_510_02_03p.jsp(원가실적목록) - 차량별실적 돋보기 버튼 클릭
//            fi_201_02_02b.jsp(가지급금입금) - 정산방법img (img_adjmClsCd) 클릭
//            fileattach_drm.jsp
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

scwin.acctDeptCd = ""; // 회계부서코드
scwin.acctDeptNm = ""; // 회계부서명

scwin.state = "Y";
scwin.delflag = "N";
scwin.slipKndCd = ""; // 여기서 못넣음
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드
scwin.slipKndNm = "경비전표";
scwin.slipDt = $c.date.getServerDateTime($p);
scwin.vUpperAcctDeptCd = "";
scwin.vBizDomCd = "";
// 변동비구분
scwin.varCostClsCd = "";
// 소속구분
scwin.gBizDomCdClsCd = "";
// 구분값
scwin.rltSeq = 0; // 관련사건저장순번

scwin.rowCopyYn = 0; // 행복사여부
scwin.vCopyYn = 0;
scwin.vCoCd = "";
scwin.vCoClsCd = "";
scwin.isSubCompany = false; // 자회사여부

scwin.checkExchRt = 0; // 환율 부분 추가
scwin.checkMain = false;

//scwin.slipKndCd = 'A08';
scwin.vClntCrn = ""; //거래처 사업자번호
scwin.vCrn = ""; //사업자번호

scwin.txtrowNum = ""; // 미사용

scwin.txt_rltSeq = ""; // 관련사건저장순번

scwin.txt_cardNoYn = ""; // 카드번호여부
scwin.txt_frchNoYn = ""; // 가맹점번호여부
scwin.txt_deductClsYn = ""; // 공제구분여부

scwin.txt_limitAmt = 0;
scwin.txt_frchCrn = ""; // 가맹점사업자등록번호
scwin.txt_frchNm = ""; // 가맹점명

scwin.txt_termMgntYn = ""; // 기간관리여부 (추가 바인딩)
scwin.txt_empMgntYn = ""; // 사원관리여부 (추가 바인딩)
scwin.txt_dtMgntYn = ""; // 일자관리여부 (추가 바인딩)
scwin.txt_clntMgntYn = ""; // 거래처관리여부 (추가 바인딩)
scwin.txt_vatYn = ""; // 부가세여부  (추가 바인딩)

scwin.txt_bizMgntYn = ""; // 사업관리여부
scwin.txt_amt = 0;
scwin.txt_adjmAcctDeptCd = ""; // 전도금집행부서
scwin.txt_costClsCd = ""; // 비용구분 (변동비구분값)
scwin.txt_acctClsCd = ""; // 계정구분
scwin.txt_bizDomCd = ""; // 변동비 계정은 팝업창에서 안보이도록 수정(06.12.22-박병갤)

scwin.txtCoCd = ""; // 회사코드
scwin.txtCoClsCd = ""; // 회사종류코드
scwin.numStr_hidden = "";
scwin.txtMgntClntCrn = ""; // 거래처사업자번호
scwin.txt_evidClsNm = "";

// 히든 전역변수
scwin.ed_slipAcctDeptCd_hidVal = ""; // 발행부서
scwin.ed_acctCd_hidVal = ""; // 계정
scwin.ed_acctDeptCd_hidVal = ""; // 귀속부서
scwin.ed_vatDeclarAcctDeptCd_hidVal = ""; // 부가세관리부서
scwin.ed_opntAcctCd_hidVal = ""; // 상대계정코드
scwin.ed_cardNo_hidVal = ""; // 카드번호
scwin.ed_mgntClntNo_hidVal = ""; // 거래처번호
scwin.ed_mgntEmpNo_hidVal = ""; // 사원번호
scwin.ed_crn_hidVal = ""; // 사업자번호
scwin.ed_adjmClntNo_hidVal = ""; // 정산처
scwin.ed_reqClntNo_hidVal = ""; // 요청거래처번호
scwin.ed_pchsItemCd_hidVal = ""; // 매출입코드 히든 (미사용)

/*
String systemPathKey =  DFWConstants.FILE_UPLOAD_SYSTEM_PATH ;
String systemPathVal =  "common/csv/uploadTemp";
String path = "/WEB-INF/struts_config/pt/co.xml";
*/

scwin.upperIsRent = false; // 상위부서 렌터카사업팀(00130) 여부 - 테스트용

scwin.callOnLoad = false; // f_OnLoad 에서 호출 (발행부서 호출 구분용)
scwin.isStarted = true; // 최초 이벤트 여부
scwin.isSlipCopy = false; // 전표복사

// 신규 플래그
scwin.uploadYn = ""; // 엑셀업로드 여부 : 유효성 체크 제외
scwin.loadCompleted = false; // 로드 완료여부 (false 일 때 팝업, row position 이벤트 금지)
scwin.loadRow = 0; // 로드 세팅 row

// 코드명 세팅용
scwin.dsCodeNameSet = false; // ds에 코드명 세팅여부
scwin.dsCodeNameSetRow = 0; // ds에 코드명 세팅 row
scwin.dsCodeNameSetColId = ""; // ds에 코드명 세팅 ColId

// new row 로 이동했다가 다시 old row 로 올 때, 체크를 하게되어 활성/비활성이 바뀌게 됨
scwin.skipRowCheck = false; // row 체크 스킵 : new Row, old Row 에서 불필요한 체크 스킵.

scwin.g_newRowIndex = 0; // newRow 전역변수 : 환율유지
scwin.g_oldRowIndex = 0; // oldRow 전역변수 : oldRow 는 체크해야 함.

scwin.newRow = "";
scwin.popupAsyncFlag = true; // 실시간 팝업 사용여부
scwin.addRowValidPass = false; // 행추가 f_Validation pass

scwin.focusTarget = 0; // f_ValidationDs 의 포커스대상 컴포넌트

scwin.newRowIndex = 0; // 미사용 (삭제필요)

scwin.delCancelRow = false; // 삭제/취소 플래그 (이동시 oldRow 검증 제외)

scwin.copyKind; // 복사종류 : 전표복사 리턴값

scwin.testAlertFlag = false; // 테스트용 alert 표시여부

scwin.sort_options = {};
scwin.sort_options.sortIndex = "rltSeq slipNo"; // 컬럼 나열
scwin.sort_options.sortOrder = "1 1"; // 1: 오름차순

scwin.onpageload = function () {
  // @@ @
  console.log("====== onpageload ================== v. 1.18");

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

  scwin.slipKndCd = ACConstants.SLIPKNDCD_EXPENSE; // 전표 종류 : 경비전표  A08

  scwin.txtCoCd = scwin.vCoCd;
  scwin.txtCoClsCd = scwin.vCoClsCd;
  console.log("▶▶ txtCoCd : " + scwin.txtCoCd + "   txtCoClsCd : " + scwin.txtCoClsCd);

  // 회계부서코드/명
  let acctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
  let acctDeptNm = $c.data.getMemInfo($p, "acctDeptNm");
  scwin.acctDeptCd = acctDeptCd;
  scwin.acctDeptNm = acctDeptNm;
  console.log("▶▶ acctDeptCd : " + scwin.acctDeptCd + "   acctDeptNm : " + scwin.acctDeptNm);

  // 부서팝업에서 산출됨 : 현재 불가
  // KYU_TEST - 00130  렌터카사업팀 테스트
  // scwin.upperIsRent = true;  // 강제로 00130 세팅

  // 공통코드 : onPageLoad 에 위치
  const codeOptions = [{
    grpCd: "FI005",
    compID: "lc_deductClsCd"
  } // 공제종류코드
  , {
    grpCd: "FI004",
    compID: "lc_zeroTaxClsCd"
  } // 영세율종류코드
  , {
    grpCd: "FI069",
    compID: "lc_taxnCls"
  } // 사업자과세유형코드
  , {
    grpCd: "ZZ006",
    compID: "lc_crcCd",
    opt: {
      "range": "1"
    }
  } // 통화코드 - KRW 가 제일 위로
  , {
    grpCd: "FI003",
    compID: "lc_adjmClsCd",
    opt: {
      "range": "1,1"
    }
  } // 정산방법
  , {
    grpCd: "FI114",
    compID: "lc_expenseCd"
  } // 비용구분
  ];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("  ==--== onUdcCompleted");

  // 2025-10-14 : 작성일자 포커스 위치 이동
  $p.setTimeout(function () {
    // 업로드용 엑셀 hide
    gr_tempExcel.hide();

    // 2025-11-17 : 00130 렌터커사업팀 사용안함 처리
    branchTr.hide(); // 지점,매입항목코드 숨김

    // KYU_NEW : 외화전표 발행후 - 통화코드 선택시 환율 금액... 발생 방지
    scwin.checkExchRt = 0; // 환율 부분 추가

    // 주요 플래그값 초기 지정
    scwin.loadCompleted = true; // 로드 완료여부 (false 일 때 팝업, row position 이벤트 금지)
    scwin.dsCodeNameSet = false; // ds에 코드명 세팅여부

    scwin.f_OnLoad();

    // KYU_TEST
    // ed_branchCd.focus();
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// f_OnLoad : 전표발행 후 다시 실행
//-------------------------------------------------------------------------
scwin.f_OnLoad = async function () {
  console.log("======= f_OnLoad ========");
  scwin.state = "Y";

  // scwin.ed_slipAcctDeptCd_hidVal 세팅을 먼저 하기 위함
  scwin.f_Header();
  $c.gus.cfDisableKeyData($p);
  console.log("  ==--== 비활성 (전체)");

  // $c.gus.cfDisableBtnOnly([bSave]);
  $c.gus.cfDisableBtnOnly($p, [$c.gus.getctrlBtn($p, 'bSave')]);

  // img_crn.style.display = "none";  //  사업자번호 돋보기

  // $c.gus.cfDisableObjects([btn_crn]);  // KYU_TEST 오류 발생

  // cfDisableObjects([ img_txnDt,img_acctCd,img_acctDeptCd
  //                   ,img_vatDeclarAcctDeptCd,img_mgntDt,img_cardNo,img_crn
  //                   ,img_mgntTermStDt,img_mgntTermEndDt,img_mgntEmpNo
  //                   ,img_adjmClntNo,pu_evid,pu_budget,img_opntAcctCd
  //                   ,ed_opntAcctCd, txt_opntAcctNm, pchsAmtSum
  //                   ,ed_vehcleNo, txt_vehcleNm, lc_expenseCd, img_vehcleNo]);

  // KYU_ISSUE  ed_pchsAmtSum : 차량별실적.금액합계 활성화 이슈 - EnableObj
  // scwin.f_add 내에 $c.gus.cfEnableKeyData(); 여기에서 활성화

  $c.gus.cfDisableObjects($p, [ica_txnDt, btn_acctCd, btn_acctDeptCd, ed_adjmClntNm, btn_vatDeclarAcctDeptCd, ica_mgntDt, btn_cardNo, btn_crn, ed_mgntTermStDt, ed_mgntTermEndDt, udc_mgntTermDt, btn_mgntEmpNo, btn_adjmClntNo, btn_pu_evid, btn_pu_budget]);
  console.log("  ==--== 비활성 ()");
  $c.gus.cfDisableObjects($p, [btn_opntAcctCd, ed_opntAcctCd, ed_opntAcctNm, ed_pchsAmtSum /* 차량별실적 */, btn_pchsAmtSum /* 치량별실적 돋보기 */, ed_vehcleNo, ed_vehcleNm, lc_expenseCd, btn_vehcleNo]);
  console.log("  SPLIT ==--== 비활성 (상대계정 전체, 차량별실적,차량별실적돋보기, 차량번호,차량명, 비용구분, 차량번호돋보기)");

  // $c.gus.cfDisableObjects([ed_vatCrn, ed_pchsAmtSum]);
  // $c.gus.cfDisableObjects([ed_pchsAmtSum]);

  //투입불가계정 조회
  let rtn2 = await scwin.getBannedAcctCd();

  // console.log("111");

  // 증빙종류 조회
  let rtn3 = await scwin.getEvidInfo(); // f_EvidClsCd 실행 이전!!

  // console.log("222");

  // 법인카드/개인카드 --> 매입세액불공제 처리대상 [과세유형   DataSet] Road 20120629 BY KIMSEOK
  let rtn4 = scwin.getExclusionOfTaxtation();

  // console.log("333");

  // KYU_ISSUE : 초기화하면 f_Validation -->  f_HiddenCheck (발행부서) 에서 MSG_CM_ERR_038 발생
  //ed_slipAcctDeptCd.hidVal="";
  scwin.ed_slipAcctDeptCd_hidVal = ""; // 이거 막으면 정산방법-개인형법인카드 정산 지정됨

  scwin.callOnLoad = true; // f_OnLoad 에서 호출 (발행부서 호출 구분용)

  // 발행부서
  await scwin.f_checkPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, '1');

  // 여기서 값을 바꾸어야 제대로 실행됨
  scwin.isStarted = false; // 최초 이벤트 여부 - 최초실행 방지 외

  console.log("======= f_OnLoad END ========");
};

//-------------------------------------------------------------------------
// f_Onload2
//   - f_AddRow 행추가점검 실행
//    - 발행부서 팝업 submitdone 에서 호출
//-------------------------------------------------------------------------
scwin.f_OnLoad2 = async function () {
  console.log("======= f_OnLoad2 ========");
  console.log("  ---- 행추가이전 동작 !!!!");
  let rtn = await scwin.f_AddRow();
  if (!rtn) return;
  ica_slipDt.setValue(scwin.slipDt);
  lc_crcCd.setValue(ACConstants.KOREA_WON);

  // cfDisableObjects([ed_spplyAmtFcrc,ed_exchRt]);
  $c.gus.cfDisableObjects($p, [ed_spplyAmtFcrc, ed_exchRt]); // 공급금액외화, 환율 비활성화
  console.log("  ==--== 비활성 (외화금액,환율)");
  lc_busiCarYn.setValue(0);
  scwin.f_setCompanyInfo();
  let rtn2 = await scwin.getMaxCloseYm(); //마감년월 가져오기

  // 여기서 값을 바꾸어야 제대로 실행됨 : 회사코드 막히는지 확인 필요
  scwin.isStarted = false; // 최초 이벤트 여부 - f_EvidClsCd 최초실행 방지 외

  scwin.callOnLoad = false; // f_OnLoad 에서 호출 (발행부서 호출 구분용)

  console.log("======= f_OnLoad2 END ========");
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  console.log("=== f_Header (헤더 생성)");

  // console.log(" vCoCd : "+ scwin.vCoCd);
  // 마감년월 조회 조건
  ds_search2.set("coCd", scwin.vCoCd);
  var dcJSON = ds_search2.getJSON();
  console.log("  *** ds_search2 : " + JSON.stringify(dcJSON));

  // KYU_TEST : 조회부 미리 세팅 -> 최초 cfValidate, f_Validation 오류 방지
  ds_txn.insertRow();
  ds_txn.setRowPosition(0);
  ds_txn.setCellData(0, "slipDt", $c.date.getServerDateTime($p, "yyyyMMdd"));
  // Session 이용
  ds_txn.setCellData(0, "slipAcctDeptCd", scwin.acctDeptCd);
  ds_txn.setCellData(0, "slipAcctDeptNm", scwin.acctDeptNm);

  // 로그인사번,부서
  // ds_txn.NameString(1,"drawEmpNo") = "%=login.getEmpNo()%";
  // ds_txn.NameString(1,"drawAcctDeptCd") = "%=login.getAcctDeptCd()%"
  // ed_slipAcctDeptCd.hidVal=""; 

  ds_txn.setCellData(0, "drawEmpNo", scwin.userEmpNo);
  ds_txn.setCellData(0, "drawAcctDeptCd", scwin.acctDeptCd);
  scwin.ed_slipAcctDeptCd_hidVal = ds_txn.getCellData(0, "slipAcctDeptCd");
  console.log("   ^^ f_Header - scwin.ed_slipAcctDeptCd_hidVal [" + scwin.ed_slipAcctDeptCd_hidVal + "]");

  // Session 이용
  // ds_provHeader.NameString(1,"reqAcctDeptCd") = "%=login.getAcctDeptCd()%"
  ds_provHeader.setCellData(0, "reqAcctDeptCd", scwin.acctDeptCd);

  // 로그인사번,부서
  // ds_provHeader.NameString(1,"drawEmpNo") = "%=login.getEmpNo()%";
  // ds_provHeader.NameString(1,"drawAcctDeptCd") = "%=login.getAcctDeptCd()%"

  ds_provHeader.setCellData(0, "drawEmpNo", scwin.userEmpNo);
  ds_provHeader.setCellData(0, "drawAcctDeptCd", scwin.acctDeptCd);
  var dct = ds_txn.getAllArray();
  console.log("  *** ds_txn : " + JSON.stringify(dct));

  // cfSetIMEModeActiveObjects([txt_summary]); // 지원안함
};

//-------------------------------------------------------------------------
// 투입불가계정 (경비전표) 조회
//-------------------------------------------------------------------------
scwin.getBannedAcctCd = async function () {
  console.log("=== getBannedAcctCd (투입불가계정 조회 - ds_acctCd)");
  ds_commonCode.setEmptyValue();
  ds_acctCd.setJSON([]);
  ds_commonCode.setEmptyValue();
  const strParam = {
    sysCd: "CommonEBC" // 시스템코드
    ,

    queryId: "retrieveExpenseAcctCdInfo" // 쿼리ID - 경비전표 계정 조회(2015.02.05 분리)
    ,

    param1: "",
    param2: "",
    param10: "N" // 경비전표불가여부
  };

  //데이터셋에 정보설정
  ds_commonCode.setJSON(strParam);
  let e = await $c.sbm.execute($p, sbm_acctCd);
  console.log("▷ sbm_acctCd_submitdone (투입불가계정)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  if (e.responseJSON.GAUCE) {
    ds_acctCd.setJSON(e.responseJSON.GAUCE);
  }
};

//-------------------------------------------------------------------------
// 증빙종류 조회 @@
//-------------------------------------------------------------------------
scwin.getEvidInfo = async function () {
  console.log("=== getEvidInfo (증빙종류조회 - ds_evidClsCd)");
  ds_commonCode.setEmptyValue();
  ds_evidClsCd.setJSON([]);

  //증빙종류 조회

  ds_commonCode.setEmptyValue();
  const strParam = {
    sysCd: "CommonEBC" // 시스템코드
    ,

    queryId: "retrieveEvidInfo" // 쿼리ID
    ,

    param1: "",
    param2: "",
    param3: "PCHS" // CD
  };

  //데이터셋에 정보설정
  ds_commonCode.setJSON(strParam);
  let e = await $c.sbm.execute($p, sbm_evidClsCd);
  console.log("▷ sbm_evidClsCd_submitdone (증빙종류조회 submitdone) ---- ^^^^^^");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  if (e.responseJSON.GAUCE) {
    ds_evidClsCd.setJSON(e.responseJSON.GAUCE);
  }

  // KYU_TEST
  if (scwin.isStarted == true)
    // 최초 이벤트 여부
    {
      // 증빙구분조회시화면셋팅
      var row = 0; // 10: 세금계산서

      // KYU_NEW : 최초 지정 -  Cannot read properties of null (reading 'split') 오류 방지
      lc_evidClsCd.setSelectedIndex(row);
      console.log("      최초 실행 : getEvidInfo - f_EvidClsCd    bizMgntYn[" + ds_evidClsCd.getCellData(row, "col3") + "]");
      await scwin.f_EvidClsCd(ds_evidClsCd.getCellData(row, "col3") //r_bizMgntYn   - 거래처관리여부=>사업자관리여부
      , ds_evidClsCd.getCellData(row, "col4") //r_vatYn       - 부가세여부
      , ds_evidClsCd.getCellData(row, "col5") //r_cardNoYn    - 카드번호여부
      , ds_evidClsCd.getCellData(row, "col6") //r_frchNoYn    - 가맹점번호여부 
      , ds_evidClsCd.getCellData(row, "col7") //r_deductClsYn - 공제구분여부
      , ds_evidClsCd.getCellData(row, "col9") //r_limitAmt    - 한도금액
      );
    }
};

//-------------------------------------------------------------------------
// 매입세입불공제처리대상조회 (FI096)
//-------------------------------------------------------------------------
scwin.getExclusionOfTaxtation = async function () {
  console.log("=== getExclusionOfTaxtation (매입세입불공제처리대상조회 - ds_exclusionOfTaxtation)");
  //증빙종류 조회

  ds_commonCode.setEmptyValue();
  ds_exclusionOfTaxtation.setJSON([]);
  const strParam = {
    sysCd: "CommonEBC" // 시스템코드
    ,

    queryId: "getCommonCodeInfomation" // 쿼리ID
    ,

    param1: "FI096",
    param2: "",
    param3: ""
  };

  //데이터셋에 정보설정
  ds_commonCode.setJSON(strParam);
  let e = await $c.sbm.execute($p, sbm_exclusionOfTaxtation);

  // console.log("▷ sbm_exclusionOfTaxtation_submitdone (매입세입불공제처리대상조회)");

  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  if (e.responseJSON.GAUCE) {
    ds_exclusionOfTaxtation.setJSON(e.responseJSON.GAUCE);
  }
};

//-------------------------------------------------------------------------
// 전월 마감여부 
//-------------------------------------------------------------------------
scwin.getMaxCloseYm = async function () {
  console.log("=== getMaxCloseYm (전월 마감여부)");

  //	tr_getMaxCloseYm.Post();

  // 신규 추가 
  // ds_search2.set("coCd", scwin.vCoCd);

  var dcJSON = ds_search2.getJSON();
  // console.log("  *** ds_search2 : "+ JSON.stringify(dcJSON));

  let e = await $c.sbm.execute($p, sbm_getMaxCloseYm);
  console.log("▷ sbm_getMaxCloseYm_submitdone (전월 마감여부)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // <!-- 미마감 월  확인후 작성일자 셋팅 -->
  // 	//최소 미마감월이 당월이 아닐때
  // 		if(ds_getMaxCloseYm.NameValue(1,"closeYm") != thisYm.substr(0,6)){ 
  // 		var closeYm = ds_getMaxCloseYm.NameValue(1,"closeYm");
  // 		var firstDay = closeYm.substr(0,4)+"/"+closeYm.substr(4,2)+"/"+"01";  // 1일
  // 		var lastDay =  closeYm.substr(0,4)+"/"+closeYm.substr(4,2)+"/" + new Date(closeYm.substr(0,4),closeYm.substr(4,2),0).getDate(); // 마지막날
  // 		ed_slipDt.text = lastDay; //작성일자 셋팅
  // 	}

  var thisYm = $c.date.getServerDateTime($p, "yyyyMMdd"); // 오늘일자 가져오기

  //최소 미마감월이 당월이 아닐때
  if (ds_getMaxCloseYm.getCellData(0, "closeYm") != thisYm.substring(0, 6)) {
    var closeYm = ds_getMaxCloseYm.getCellData(0, "closeYm");
    // var firstDay = closeYm.substr(0,4)+"/"+closeYm.substr(4,2)+"/"+"01";  // 1일
    var firstDay = closeYm.substring(0, 6) + "01"; // 1일

    // console.log(" 확인 : closYm.substring(0,4) ["+closeYm.substring(0,4)+"] closYm.substring(4,6) ["+closeYm.substring(4,6)+"]");

    // var lastDay  = closeYm.substring(0,4)+"/"+closeYm.substring(4,2)+"/" + new Date(closeYm.substring(0,4),closeYm.substring(4,2),0).getDate(); // 마지막날
    var lastDay = closeYm.substring(0, 4) + closeYm.substring(4, 6) + new Date(closeYm.substring(0, 4), closeYm.substring(4, 6), 0).getDate(); // 마지막날

    console.log("  -=-= closeYm [" + ds_getMaxCloseYm.getCellData(0, "closeYm") + "]  thisYm [" + thisYm + "]  firstDay [" + firstDay + "]  lastDay [" + lastDay + "]");
    ica_slipDt.setValue(lastDay); //작성일자 셋팅
  }
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  console.log("=== f_setCompanyInfo");

  // 사용자 구분이 자회사('SA')인 경우
  if (scwin.vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.isSubCompany = true;
  } else {
    // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
    scwin.vCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }

  // txtCoCd.value     = vCoCd;
  // txtCoClsCd.value  = vCoClsCd;

  scwin.txtCoCd = scwin.vCoCd;
  scwin.txtCoClsCd = scwin.vCoClsCd;
  console.log("▶ vCoCd [" + scwin.vCoCd + "]   vCoClsCd [" + scwin.vCoClsCd + "]   txtCoCd [" + scwin.txtCoCd + "]  txtCoClsCd [" + scwin.txtCoClsCd + "]");
};

//-------------------------------------------------------------------------
// 그리드 포맷설정
//-------------------------------------------------------------------------
scwin.f_SetGridFormat = function () {
  //var className = gr_txncontents.className;

  //gr_txncontents.Redraw = 'false';

  // KYU_TEST : 렌터카업무는 더이상 사용안함. 동일하게 구성.
  if (scwin.vUpperAcctDeptCd == "00130") {
    gr_txncontents.setColumnVisible("pchsItemNm", true);
    gr_txncontents.setColumnVisible("branchNm", true);
  } else {
    /*
            gr_txncontents.Format =''+
            // ' <C> id=row            value={currow}           width=20   align=center                    </C> '+
            // ' <h> id=adjmClntNo     name=정산거래처번호     width=139   align=left  Edit=none           </h> '+
            // ' <h> id=adjmClntNm     name=정산거래처명       width=139   align=left  Edit=none           </h> '+
            // ' <C> id=evidClsNm      name=증빙               width=70    align=left                      </C> '+
            // ' <C> id=txnDt          name=계산서일자         width=80    align=center Mask="XXXX/XX/XX"  </C> '+
            // ' <C> id=acctCd         name=계정               width=60    align=center                    </C> '+
            // ' <C> id=acctNm         name=계정명         width=100   align=left                      </C> '+
            // ' <C> id=acctDeptNm     name=귀속부서           width=80    align=left                      </C> '+
            // ' <C> id=spplyAmt       name=공급가액           width=70    align=right   sumtext=@sum      </C> '+
            // ' <C> id=vatAmt         name=부가세액           width=70    align=right   sumtext=@sum      </C> '+
            // ' <C> id=dcAmt          name=할인금액           width=70    align=right   sumtext=@sum      </C> '+
            // ' <C> id=summary        name=적요               width=139   align=left                      </C> '+
            // ' <C> id=busiCarYn      name=업무용차차량여부       width=139   align=left                      </C> '+
            // ' <C> id=expenseCd      name=비용구분           width=139   align=left                      </C> '+
            // ' <C> id=vehcleNo       name=차량번호           width=139   align=left                      </C> '+
            // ' <C> id=etcAcctCd1     name="기타금액1;계정"   width=60    align=center                    </C> '+
            // ' <C> id=etcAcctNm1     name="기타금액1;계정명" width=100   align=left                      </C> '+
            // ' <C> id=etcAmt1        name="기타금액1;금액"   width=70    align=righ      sumtext=@sum    </C> '+
            // ' <C> id=etcSummary1    name="기타금액1;적요"   width=139   align=left                      </C> '+
            // ' <C> id=etcAcctCd2     name="기타금액2;계정"   width=60    align=center                    </C> '+
            // ' <C> id=etcAcctNm2     name="기타금액2;계정명" width=100   align=left                      </C> '+
            // ' <C> id=etcAmt2        name="기타금액2;금액"   width=70    align=righ      sumtext=@sum    </C> '+
            // ' <C> id=etcSummary2    name="기타금액2;적요    width=139   align=left                      </C> '+
            // ' <H> id=evidClsCd                                                                          </H> '+
            // ' <H> id=vatDeclarAcctDeptCd                                                                </H> ';
    */
    gr_txncontents.setColumnVisible("pchsItemNm", false);
    gr_txncontents.setColumnVisible("branchNm", false);
  }

  // cfStyleGrid(gr_txncontents,className);
  //$c.gus.cfStyleGrid(gr_txncontents,className);
};

// @@ ====== 그리드 / DS - 기타 ================================================================ //

//-------------------------------------------------------------------------
// Enable/Disable
//-------------------------------------------------------------------------
// 1건 이상이면 작성일자,발행부서 비활성
//
// 최상단 조회조건라인(작성일자, 발행부서) 항목들을,
// 전표입력 이력이 2개이상 있으면, 비활성화하고,
// 전표입력이력이 없으면, 활성화 한다.
//
//  전표복사, 엑셀업로드 후에는 작성일자, 발행부서 활성
//  행을 추가하거나 삭제하면 해당 함수가 적용 (행복사는 적용안됨)
// 
//-------------------------------------------------------------------------
scwin.f_EnableYn = function (str) {
  console.log("=== f_EnableYn (조회조건 활성/비활성)  str (row수) [" + str + "]");

  //    alert(str);
  if (str == 1) {
    // cfEnableObjects([ed_slipDt,ed_slipAcctDeptCd,txt_slipAcctDeptNm,img_slipAcctDeptCd]);
    $c.gus.cfEnableObjects($p, [ica_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm, btn_slipAcctDeptCd]);
    console.log("  ==--== 활성 (작성일자,발행부서 전체)");
  } else {
    // cfDisableObjects([ed_slipDt,ed_slipAcctDeptCd,txt_slipAcctDeptNm,img_slipAcctDeptCd]);
    $c.gus.cfDisableObjects($p, [ica_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm, btn_slipAcctDeptCd]);
    console.log("  ==--== 비활성 (작성일자,발행부서 전체)");
  }
};

// @@ ====== 그리드 / DS ======================================================================= //

//-------------------------------------------------------------------------
// 행추가이전 체크
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  console.log("----- f_AddRow (행추가이전 체크)  ▼▼▼▼");
  let ret = await $c.gus.cfValidate($p, [ica_slipDt, ed_slipAcctDeptCd]);
  if (!ret) {
    console.log("-- -- cfValidate error");
    return;
  }
  if (ds_txncontents.getTotalRow() > 0) {
    // if ( scwin.f_Validation() != true)
    let rtn2 = await scwin.f_Validation();
    if (!rtn2) {
      console.log("-- -- f_Validation error");
      return;
    }
  }
  scwin.addRowValidPass = true; // 행추가 f_Validation pass
  console.log("       addRowValidPass  true !!!!!!");
  if (lc_crcCd.getValue() != ACConstants.KOREA_WON) {
    var changeExchRt = Number(ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "exchRt"));
    console.log(" 행추가이전 체크 - scwin.checkExchRt [" + scwin.checkExchRt + "]  changeExchRt [" + changeExchRt + "]  checkMain [" + scwin.checkMain + "]");

    // if (! $c.gus.cfCheckExchRt(scwin.checkExchRt, changeExchRt, scwin.checkMain)) // 저장버튼 클릭시 환율에 대한 체크를 하는 함수 호출
    let rtn3 = await $c.gus.cfCheckExchRt($p, scwin.checkExchRt, changeExchRt, scwin.checkMain);
    if (rtn3 != true) {
      console.log("  -- cfCheckExchRt (저장시 환율 체크) 오류 발생, 리턴");
      return;
    }
  }
  // 예산체크
  if (ds_txncontents.getTotalRow() > 0 && scwin.isSubCompany != true) {
    let rtn4 = await scwin.f_BudgetCheck();
    if (!rtn4) return false;
  } else {
    let rtn5 = await scwin.f_Add();
    if (!rtn5) return false;
  }
  let rtn6 = await scwin.f_CheckPayYn();
  if (!rtn6) return false;
  console.log("----- f_AddRow (행추가이전 체크) end");
  return true;
};

//-------------------------------------------------------------------------
// 행추가  @@
//-------------------------------------------------------------------------
scwin.f_Add = async function () {
  console.log("--- === --- f_Add (행추가)  [" + ds_txncontents.getRowPosition() + "] =============================");
  scwin.state = "N";
  scwin.delflag = "N";
  if (ds_txncontents.getCellData(ds_txncontents.getTotalRow(), "rltSeq") != 0 && ds_txncontents.getCellData(ds_txncontents.getTotalRow(), "rltSeq") != null) {
    scwin.rltSeq = parseInt(ds_txncontents.getCellData(ds_txncontents.getTotalRow(), "rltSeq")) + 1;
  } else {
    scwin.rltSeq = scwin.rltSeq + 1; // 관련사건저장순번
  }

  // KYU_ISSUE : 2025-12-10 ed_pchsAmtSum 차량별실적의 금액합계도 활성화됨
  $c.gus.cfEnableKeyData($p);
  //cfEnableBtnOnly([bSave]);
  $c.gus.cfEnableBtnOnly($p, [$c.gus.getctrlBtn($p, 'bSave')]);

  // cfDisableObjects([lc_deductClsCd,ed_vatAmt,txt_vatDeclarAcctDeptNm,ed_cardNo,
  //                   txt_cardNm,ed_crn,txt_crnNm,lc_taxnCls,ed_mgntTermStDt,img_mgntTermStDt,
  //                   ed_mgntTermEndDt,img_mgntTermEndDt,
  //                   ed_mgntDt,ed_mgntEmpNo,txt_mgntEmpNm,txt_vatCrn,ed_mgntClntNo,txt_mgntClntNm
  //                   ,ed_vehcleNo, txt_vehcleNm, lc_expenseCd, img_vehcleNo]);
  $c.gus.cfDisableObjects($p, [lc_deductClsCd, ed_vatAmt, ed_vatDeclarAcctDeptNm, ed_cardNo, ed_cardNm, ed_crn, ed_crnNm, lc_taxnCls, ed_mgntTermStDt, ed_mgntTermEndDt, udc_mgntTermDt, ica_mgntDt, ed_mgntEmpNo, ed_mgntEmpNm, btn_mgntEmpNo, ed_vatCrn, ed_mgntClntNo, ed_mgntClntNm, btn_mgntClntNo, ed_vehcleNo, ed_vehcleNm, lc_expenseCd, btn_vehcleNo]);
  console.log("  ==--== 비활성 ( 공제종류코드,부가세액,부과세관리부서명,카드번호,카드명,사업자번호,사업자명,사업자과세유형코드,경비기간(from,to), 관리일자,사원번호,사원명,부가세사업자번호,거래처,거래처명,차량번호,차량명,비용구분,차량번호돋보기 )");

  // KYU_NEW
  $c.gus.cfDisableObjects($p, [btn_opntAcctCd, ed_opntAcctCd, ed_opntAcctNm, ed_pchsAmtSum, /* 차량별실적 */btn_pchsAmtSum /* 치량별실적 돋보기 */, ed_vehcleNo, ed_vehcleNm, lc_expenseCd, btn_vehcleNo]);
  console.log("  NEW ==--== 비활성 (상대계정 전체, 차량별실적, 차량별실적돋보기, 차량번호, 차량명, 비용구분, 차량번호 돋보기)");

  // cfEnableObjects([img_txnDt,img_acctCd,img_acctDeptCd,img_adjmClntNo,img_vatDeclarAcctDeptCd,
  //                  pu_copy,pu_evid,pu_budget]);
  $c.gus.cfEnableObjects($p, [ica_txnDt, btn_acctCd, btn_acctDeptCd, btn_adjmClntNo, btn_vatDeclarAcctDeptCd, btn_pu_copy, btn_pu_evid, btn_pu_budget]);
  console.log("  ==--== 활성 ( 작성일자,계정돋보기,귀속부서돋보기,정산거래처번호돋보기,부가세관리부서돋보기, 복사버튼,증빙배부버튼,예산실적버튼 )");

  //ds_txncontents.AddRow();
  if (ds_txncontents.getTotalRow() <= 0) {
    //ds_txncontents.InsertRow(1);
    ds_txncontents.insertRow();
    ds_txncontents.setRowPosition(0);
    gr_txncontents.setFocusedCell(0, "evidClsNm", true);
  } else {
    //ds_txncontents.InsertRow(ds_txncontents.RowPosition+1);
    ds_txncontents.insertRow();

    // KYU_TEST : 이 경우는 먼저 움직이면 안됨
    ds_txncontents.setRowPosition(ds_txncontents.getTotalRow() - 1);
    console.log("   --- ds_txncontents.getTotalRow -1 [" + Number(ds_txncontents.getTotalRow() - 1) + "]");
    gr_txncontents.setFocusedCell(ds_txncontents.getRowPosition(), "evidClsNm", true);
    console.log("   --- gr_txncontents.setFocusedCell  [" + ds_txncontents.getRowPosition() + "]");
  }

  // 1건 이상이면 작성일자,발행부서 비활성
  scwin.f_EnableYn(ds_txncontents.getTotalRow());
  if (scwin.slipKndCd == ACConstants.SLIPKNDCD_SUB_COMPANY_PCHS) {
    // 전표 종류 : 자회사 - 매입전표 이면 '외상매입금'
    lc_adjmClsCd.setValue("2");
  } else {
    lc_adjmClsCd.setValue("2");
    //lc_adjmClsCd.index=0;   // 정산방법
  }

  //    lc_evidClsCd.index=0;
  lc_evidClsCd.setSelectedIndex(0);
  lc_crcCd.setValue("KRW");
  scwin.txt_vatYn = "1";
  console.log("   행추가 txt_vatYn = 1  [" + scwin.txt_vatYn + "]   !!!! ");

  //f_EvidClsCd(0,0,0,0,0,0);
  //f_AcctCd(0,0,0);
  scwin.txt_rltSeq = scwin.rltSeq; // 관련사건저장순번

  // KYU_NEW : 바인딩 처리
  var row = ds_txncontents.getRowPosition();
  ds_txncontents.setCellData(row, "rltSeq", scwin.txt_rltSeq); // 관련사건저장순번
  ds_txncontents.setCellData(row, "vatYn", scwin.txt_vatYn); // 부가세여부

  // KYU_TEST : 미사용 로직
  //lc_evidClsCd.focus();
  if (scwin.vUpperAcctDeptCd == "00130") {
    // 렌터카사업팀
    // cfDisableObjects([ed_acctCd,txt_acctNm,ed_acctDeptCd,txt_acctDeptNm,img_acctCd,img_acctDeptCd])
    // cfEnableObjects([ed_pchsItemCd,ed_branchCd,txt_pchsItemNm,txt_branchNm,img_pchsItemCd,img_branchCd])
    $c.gus.cfDisableObjects($p, [ed_acctCd, ed_acctNm, ed_acctDeptCd, edt_acctDeptNm, btn_acctCd, btn_acctDeptCd]); // 계정,부서 비활성
    console.log("  ==--== 비활성 (계정,계정명,귀속부서,귀속부서명,계정돋보기,귀속부서돋보기)");
    // $c.gus.cfEnableObjects([ed_pchsItemCd, ed_branchCd, ed_pchsItemNm, ed_branchNm, btn_pchsItemCd, btn_branchCd]);  // 지점,매입항목 활성
    // console.log("  ==--== 활성 (매입항목,지점,매입항목명,지점명,매입항목돋보기,지점돋보기)");
  } else {
    // cfEnableObjects([ed_acctCd,txt_acctNm,ed_acctDeptCd,txt_acctDeptNm,img_acctCd,img_acctDeptCd])
    // cfDisableObjects([ed_pchsItemCd,ed_branchCd,txt_pchsItemNm,txt_branchNm,img_pchsItemCd,img_branchCd])
    $c.gus.cfEnableObjects($p, [ed_acctCd, ed_acctNm, ed_acctDeptCd, ed_acctDeptNm, btn_acctCd, btn_acctDeptCd]); // 계정,부서 활성
    console.log("  ==--== 활성 (계정,계정명,귀속부서,귀속부서명,계정돋보기,귀속부서돋보기)");
    // $c.gus.cfDisableObjects([ed_pchsItemCd, ed_branchCd, ed_pchsItemNm, ed_branchNm, btn_pchsItemCd, btn_branchCd]);  // 지점,매입항목 비활성
    // console.log("  ==--== 비활성 (매입항목,지점,매입항목명,지점명,매입항목돋보기,지점돋보기)");
  }
  scwin.f_SetGridFormat();
  scwin.f_setCompanyInfo();

  // KYU_NEW : 히든 세팅
  scwin.f_setHidVal();

  //cfDisableObjects([pu_evid]);
  return true;
};

//-------------------------------------------------------------------------
// 행복사
//-------------------------------------------------------------------------
scwin.f_CopyRow = async function (e) {
  console.log("----- f_CopyRow (행복사) ----------");
  var row = ds_txncontents.getRowPosition();

  // if (!cfValidate([ed_slipDt,ed_slipAcctDeptCd]))
  let rtn1 = await $c.gus.cfValidate($p, [ica_slipDt, ed_slipAcctDeptCd]);
  if (!rtn1) return;
  console.log("  1. cfValidate 통과");
  if (ds_txncontents.getTotalRow() > 0) {
    // if ( scwin.f_Validation() != true )
    let rtn2 = await scwin.f_Validation();
    if (!rtn2) return;
  }
  console.log("  2. f_Validation 통과");
  scwin.addRowValidPass = true; // 행추가 f_Validation pass

  scwin.rowCopyYn = 1; // 행복사여부

  // 예산체크
  if (ds_txncontents.getTotalRow() > 0 && scwin.isSubCompany != true) {
    console.log("  자회사 아님");
    let rtn = await scwin.f_BudgetCheck();
    if (!rtn) return;
    console.log("  3. f_BudgetCheck 통과  -----");
  } else {
    console.log("  자회사 일 때 예산체크 안하고 직접 실행");
    // ds_txncontents.ImportData(ds_txncontents.ExportData(row,1,true));

    // ds_txncontents.insertRow();
    // ds_txncontents.setRowPosition(ds_txncontents.getTotalRow());
    // ds_txncontents.setRowData(ds_txncontents.getTotalRow(), ds_txncontents.getRowData(row));

    var row = ds_txncontents.getRowPosition();
    var newRow = ds_txncontents.getRowCount();
    console.log("  현재 row [" + row + "]");
    console.log("    추가 row [" + newRow + "]");
    console.log("  복사전 [" + JSON.stringify(ds_txncontents.getRowJSON(ds_txncontents.getRowPosition())) + "]");
    ds_txncontents.setRowJSON(newRow, ds_txncontents.getRowJSON(ds_txncontents.getRowPosition()));
    gr_txncontents.setFocusedCell(newRow, 1, false);
    console.log("   -- gr_txncontents.setFocusedCell  newRow [" + ds_txncontents.getRowPosition() + "]");
  }

  //2^미지급금,3^전도금,4^가지급금,5^선급금,6^법인카드
  if (ds_txncontents.getCellData(row, "adjmClsCd") == ACConstants.ADJM_MTHDCD_SUSPAY) {
    // 4 가지급금
    // document.all.div_id.style.visibility = "visible";
    // cfEnableObjects(img_adjmClsCd);
    btn_adjmClsCd.show(""); // 정산방법돋보기 보여줌
    $c.gus.cfEnableObjects($p, [btn_adjmClsCd]);
    console.log("  가지급금 ==--== 활성 ( 정산방법돋보기 )");
  } else {
    // document.all.div_id.style.visibility = "hidden";
    btn_adjmClsCd.hide(); // 정산방법돋보기 숨김
  }

  //alert(lc_adjmClsCd.BindColVal);
  if (ds_txncontents.getCellData(row, "adjmClsCd") == ACConstants.ADJM_MTHDCD_NOPAY_COST ||
  // 정산방법(미지급비용)
  lc_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_AP ||
  // 정산방법(외상매입금)
  lc_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_NOPAY)
    // 정산방법(미지급금)
    {
      $c.gus.cfEnableObjects($p, [ed_adjmClntNo, btn_adjmClntNo]);
      console.log("  정산방법(미지급비용,외상매입금,미지급금) ==--== 활성 ( 정산처,정산처돋보기 )");
    } else if (ds_txncontents.getCellData(row, "adjmClsCd") == ACConstants.ADJM_MTHDCD_COR_CARD) {
    // 정산방법(법인카드)
    // $c.gus.cfInitHidVal(ed_adjmClntNo);
    scwin.ed_adjmClntNo_hidVal = ""; // KYU_TEST

    $c.gus.cfDisableObjects($p, [ed_adjmClntNo, btn_adjmClntNo]);
    console.log("  정산방법(법인카드) ==--== 비활성 ( 정산처,정산처돋보기 )");
  } else {
    ed_adjmClntNo.setValue("");
    ed_adjmClntNm.setValue("");
    // $c.gus.cfInitHidVal(ed_adjmClntNo);
    scwin.ed_adjmClntNo_hidVal = ""; // KYU_TEST

    $c.gus.cfDisableObjects($p, [ed_adjmClntNo, btn_adjmClntNo]);
    console.log("  정산방법(그 외) ==--== 비활성 ( 정산처,정산처돋보기 )");
  }

  // KYU_TEST ?
  // ds_txncontents.RowPosition = ds_txncontents.CountRow;
  // ds_txncontents.NameValue(ds_txncontents.RowPosition,"rltSeq") = ds_txncontents.RowPosition;

  var row = ds_txncontents.getTotalRow() - 1;
  ds_txncontents.setRowPosition(row);
  console.log("   -- -- --  f_CopyRow (행복사)  setRowPosition : ds_txncontents.getTotalRow()-1 [" + row + "]");
  ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "rltSeq", ds_txncontents.getRowPosition());
};

//-------------------------------------------------------------------------
// 예산체크
//-------------------------------------------------------------------------
scwin.f_BudgetCheck = async function () {
  console.log("===== f_BudgetCheck (예산실적조회 - ds_budgetRt) - 성공시 행추가,행복사");

  // ds_budgetCheck.UseChangeInfo = false;
  // tr_budgetRt.Post();

  ds_budgetCheck.set("budgetYm", ica_slipDt.getValue());
  ds_budgetCheck.set("acctDeptCd", ed_acctDeptCd.getValue());
  ds_budgetCheck.set("acctCd", ed_acctCd.getValue());
  ds_budgetCheck.set("budgetRsltsAmt", ed_spplyAmt.getValue());
  let e = await $c.sbm.execute($p, sbm_budgetRt);

  // console.log("▷ sbm_budgetRt_submitdone (예산실적조회 submitdone) 행복사 처리");

  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // <!-- 예산 DataSet -->			
  //  language=JavaScript for=tr_budgetRt event=OnSuccess()>

  // 통제단위구분코드
  //    참고 - CO001  1: 년도, 2: 반기, 3: 분기, 4: 월, 5: , 6: 월(누계), 7: 분기(누계), 8: 반기(누계)
  // if(ds_budget.NameValue(1,"cntlUnitClsCd")=="T"){
  if (ds_budget.getCellData(0, "cntlUnitClsCd") == "T") {
    if (scwin.rowCopyYn == 0) {
      // 행복사여부
      console.log("  --- 예산체크 - 행추가 : f_Add  (cntlUnitClsCd == T)");
      await scwin.f_Add();
    } else {
      console.log("  --- 예산체크 - 행복사 : f_Add  (cntlUnitClsCd != T)");

      //ds_txncontents.ImportData(ds_txncontents.ExportData(ds_txncontents.RowPosition,1,true));
      // ds_txncontents.setJSON(ds_txncontents.getRowJSON(ds_txncontents.getRowPosition()), true);  // append

      var row = ds_txncontents.getRowPosition();
      var newRow = ds_txncontents.getRowCount();
      console.log("  현재 row [" + row + "]");
      console.log("    추가 row [" + newRow + "]");
      ds_txncontents.setRowJSON(newRow, ds_txncontents.getRowJSON(ds_txncontents.getRowPosition()));
      gr_txncontents.setFocusedCell(newRow, 0, false);
    }
  } else {
    await $c.gus.cfAlertMsg($p, "예산잔액이 부족합니다. 예산잔액을 확인하시기 바랍니다." + "\n부서:" + ds_budget.getCellData(0, "acctDeptNm") + "\n계정:" + ds_budget.getCellData(0, "acctCd") + "\n남은예산금액:" + ds_budget.getCellData(0, "budgetRsltsAmt") + "\n사용요청금액:" + ds_budget.getCellData(0, "budgetRsltsSettAmt"));
  }

  // 행복사 여부
  scwin.rowCopyYn = 0;
  console.log("===== f_BudgetCheck (예산실적조회)  END");
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = async function () {
  console.log("=== f_DeleteRow (행삭제)");

  // KYU_NEW
  scwin.state = "Y";
  scwin.delflag = "Y";

  // debugger;
  await scwin.f_CheckRow("DEL");
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_CancelRow = async function () {
  // KYU_NEW
  scwin.state = "Y";
  scwin.delflag = "Y";
  await scwin.f_CheckRow("CANCEL");
};

//-------------------------------------------------------------------------
// 행삭제,취소시 체크
//-------------------------------------------------------------------------
scwin.f_CheckRow = async function (flag) {
  console.log("=== f_CheckRow  flag [" + flag + "]");
  scwin.state = "Y";
  scwin.delflag = "Y";
  if (flag == "DEL") {
    for (j = ds_evidac.getTotalRow(); j >= 1; j--) {
      if (ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "rltSeq") == ds_evidac.getCellData(j, "rltSeq")) {
        ds_evidac.deleteRow(j); // 인덱스=D 처리
      }
    }
    for (j = ds_prov.getTotalRow(); j >= 1; j--) {
      if (ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "rltSeq") == ds_prov.getCellData(j, "rltSeq")) {
        ds_prov.deleteRow(j);
      }
    }
    for (j = ds_provHeader.getTotalRow(); j >= 1; j--) {
      if (ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "rltSeq") == ds_provHeader.getCellData(j, "rltSeq")) {
        ds_provHeader.deleteRow(j);
      }
    }

    // ds_txncontents.DeleteRow(ds_txncontents.RowPosition);
    // ds_txncontents.deleteRow(ds_txncontents.getRowPosition());

    let row = ds_txncontents.getRowPosition();
    console.log("   -- 삭제 row [" + row + "]");
    scwin.delCancelRow = true; // 삭제/취소 플래그 (이동시 oldRow 검증 제외) - 삭제/취소보다 이전에 세팅
    $c.data.deleteRow($p, ds_txncontents);

    // 아래를 삭제하면 옆으로 이동시 row change 발동
    if (row - 1 >= 0) {
      console.log("  삭제 ------ gr_txncontents.setFocusedCell(row-1, 0, false)");
      gr_txncontents.setFocusedCell(row - 1, 0, false); // 삭제한 row 의 바로 위
    }
    console.log("   -- 삭제 완료  -----------------------------------------");
  } else {
    for (j = ds_evidac.getTotalRow(); j >= 1; j--) {
      if (ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "rltSeq") == ds_evidac.getCellData(j, "rltSeq")) {
        // ds_evidac.Undo(j);
        $c.data.undoRow($p, ds_evidac, "Y");
      }
    }
    for (j = ds_prov.getTotalRow(); j >= 1; j--) {
      if (ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "rltSeq") == ds_prov.getCellData(j, "rltSeq")) {
        // ds_prov.Undo(j);
        $c.data.undoRow($p, ds_prov, "Y");
      }
    }
    for (j = ds_provHeader.getTotalRow(); j >= 1; j--) {
      if (ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "rltSeq") == ds_provHeader.getCellData(j, "rltSeq")) {
        // ds_provHeader.Undo(j);
        $c.data.undoRow($p, ds_provHeader, "Y");
      }
    }
    // ds_txncontents.Undo(ds_txncontents.getRowPosition());

    let row = ds_txncontents.getRowPosition();
    console.log("   -- 취소 row [" + row + "]");
    scwin.delCancelRow = true; // 삭제/취소 플래그 (이동시 oldRow 검증 제외) - 삭제/취소보다 이전에 세팅
    $c.data.undoRow($p, ds_txncontents, "Y");
    if (row - 1 >= 0) {
      console.log("  취소 ------ gr_txncontents.setFocusedCell(row-1, 0, false)");
      gr_txncontents.setFocusedCell(row - 1, 0, false); // 지운 row 의 바로 위
    }
    console.log("   -- 취소 완료  -----------------------------------------");
  }

  // 1건 이상이면 작성일자,발행부서 비활성
  scwin.f_EnableYn(ds_txncontents.getTotalRow());
  // $c.gus.cfEnableObjects([img_txnDt, img_acctCd, img_acctDeptCd, img_adjmClntNo, pu_copy, pu_evid, pu_budget]);
  $c.gus.cfEnableObjects($p, [btn_acctCd, btn_acctDeptCd, btn_adjmClntNo]);
  console.log("  ==--== 활성 (계정돋보기,귀속부서돋보기, 정산처(정산거래처)돋보기)");
  $c.gus.cfEnableObjects($p, [btn_pu_copy, btn_pu_evid, btn_pu_budget]);
  console.log("  ==--== 활성 (전표복사,증빙배부,예산실적)");

  // ds_txncontents.RowPosition = ds_txncontents.CountRow;
  // KYU_DEL : row change 이벤트가 한번씩 더 실행됨
  // ds_txncontents.setRowPosition(ds_txncontents.getTotalRow() - 1);
};

//-------------------------------------------------------------------------
//  oncelldatachange : 환율 변경
//-------------------------------------------------------------------------
scwin.ds_txncontents_oncelldatachange = function (info) {
  var row = info.rowIndex;
  var Colid = info.colID;
  if (Colid == "exchRt") {
    console.log("----- ds_txncontents_oncelldatachange (환율 변경)");
    var changeExchRt = ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "exchRt");
    var checkSpplyAmtFcrc = ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "spplyAmtFcrc");
    ed_spplyAmt.setValue(Math.round(checkSpplyAmtFcrc * changeExchRt));
  }
};

//-------------------------------------------------------------------------
// KYU_NEW
// 히든 세팅 : 해당 row 의 공통팝업 로딩 목적
//-------------------------------------------------------------------------
scwin.f_setHidVal = async function () {
  console.log("=== f_setHidVal (히든 세팅)");
  scwin.ed_acctCd_hidVal = ed_acctCd.getValue(); // 계정
  scwin.ed_acctDeptCd_hidVal = ed_acctDeptCd.getValue(); // 귀속부서
  scwin.ed_vatDeclarAcctDeptCd_hidVal = ed_vatDeclarAcctDeptCd.getValue(); // 부가세관리부서
  scwin.ed_opntAcctCd_hidVal = ed_opntAcctCd.getValue(); // 상대계정
  scwin.ed_cardNo_hidVal = ed_cardNo.getValue(); // 카드번호
  scwin.ed_mgntClntNo_hidVal = ed_mgntClntNo.getValue(); // 거래처
  scwin.ed_mgntEmpNo_hidVal = ed_mgntEmpNo.getValue(); // 사원번호
  scwin.ed_crn_hidVal = ed_crn.getValue(); // 사업자번호
  scwin.ed_adjmClntNo_hidVal = ed_adjmClntNo.getValue(); // 정산처
  scwin.ed_reqClntNo_hidVal = ed_reqClntNo.getValue(); // 요청거래처
};

//-------------------------------------------------------------------------
// f_changeRow1
//-------------------------------------------------------------------------
scwin.f_changeRow1 = async function (row) {
  if (row == null) {
    console.log("  row (old row) == null  f_changeRow1 SKIP ▶▶▶▶");
    return true;
  }
  console.log("=== f_changeRow1 (row 변경 이전 체크)   row[" + row + "] 현재[" + ds_txncontents.getRowPosition() + "]  addRowValidPass [" + scwin.addRowValidPass + "]");

  // <!-- 그리드 로우를 변경하려고 할 경우 - 필수항목 체크-->
  // language=JavaScript for=ds_txncontents event=CanRowPosChange(row)> 
  // if (scwin.isStarted != true) {

  if (scwin.uploadYn != "Y") {
    //엑셀 업로드시 유효성 체크 안함

    let rtn = false;

    // KYU_NEW
    if (scwin.addRowValidPass)
      // 행추가 f_Validation pass (행추가, 행복사에서 하고 왔음)
      {
        console.log("  행추가,행복사에서 체크하고 왔음 addRowValidPass [" + scwin.addRowValidPass + "]");
        scwin.addRowValidPass = false;
        rtn = true;
      } else {
      rtn = await scwin.f_ValidationDs(row);
    }

    // if (ds_txncontents.CountRow!=0 && delflag=="N" && !f_Validation()){
    if (ds_txncontents.getTotalRow() != 0 && scwin.delflag == "N" && !rtn) {
      console.log("444");
      scwin.state = "N";
      scwin.delflag = "N";
      return false;
    } else {
      console.log("444--1");
      scwin.state = "N";
      scwin.delflag = "N";
      return true;
    }
  }
  // }
};

//-------------------------------------------------------------------------
// row position 변경됨  ds_txncontents_onrowpositionchange  @@
//-------------------------------------------------------------------------
scwin.ds_txncontents_onrowpositionchange = async function (info) {
  // debugger;
  // console.log("▶▷▶▷▶▷▶▷  ds_txncontents_onrowpositionchange (row position 변경됨  old["+info.oldRowIndex+"]  new[ " + info.newRowIndex + "] )");
  // var row = info.rowIndex;

  var oldRow = info.oldRowIndex;
  var newRow = info.newRowIndex;
  var oldStatus = ds_txncontents.getRowStatus(oldRow);
  var newStatus = ds_txncontents.getRowStatus(newRow);

  // KYU_TEST : 오동작 발생하므로 두 플래그의 로직은 서로 분리한다

  // 데이타 로드중에는 실행안함
  if (scwin.loadCompleted == false) {
    console.log("  ▶▷▶▷▶▷▶▷ row position change SKIP !! (데이타 로드중)  loadCompleted [" + scwin.loadCompleted + "]  dsCodeNameSet [" + scwin.dsCodeNameSet + "]   old[" + info.oldRowIndex + "]  new[ " + info.newRowIndex + "]");
    return; //
  }

  // 코드명 세팅 중에는 실행안함.  2026-03-17 : 첫 row 의 지급일자 초기화 필요
  if (scwin.dsCodeNameSet == true) {
    console.log("  ▶▷▶▷▶▷▶▷ row position change SKIP !!!! (코드명 세팅)   loadCompleted [" + scwin.loadCompleted + "]  dsCodeNameSet [" + scwin.dsCodeNameSet + "]   old[" + info.oldRowIndex + "]  new[ " + info.newRowIndex + "]");
    return;
  }

  // KYU_NEW
  // if (info.oldRowIndex == null) {
  //     console.log("  oldRowIndex == null 최초 이벤트는 skip ▶▶▶▶")
  //     return;
  // }
  // if (info.newRowIndex != null || info.newRowIndex != "" ) {
  //     console.log("  newRowIndex != null 최초 이벤트는 진행 ▶▶▶▶")
  //     return;
  // }

  if (info.newRowIndex < 0) return;

  // 새로 받기 위해 ds 비울 때 (전표복사) - 제외 old[0][C]  new (row) [null][undefined]

  //  slipCopy 상태에서 null 일 때 f_changeRow2 를 돌려야 함
  if (oldRow == null // 새로운 row 를 추가하더라도, 추가 동작이 거의 없음
  || newRow == null // 데이타 셋을 비울 때 (setJSON)   old [0][C]  new (row) [null][undefined]
  ) return;

  // KYU_TEST : 점검 필요
  if (scwin.isStarted == true) {
    console.log("최초 이벤트는 skip ▶▶▶▶");
    // scwin.isStarted = false;
    return;
  }
  console.log("▶▷▶▷▶▷▶▷  ds_txncontents_onrowpositionchange  : row position 변경됨  old[" + oldRow + "][" + oldStatus + "]  new [" + newRow + "][" + newStatus + "]");
  console.log("   state [" + scwin.state + "]  delflag [" + scwin.delflag + "]  삭제/취소여부 delCancelRow [" + scwin.delCancelRow + "]");
  scwin.skipRowCheck = true; // row 체크 스킵 : new Row, old Row 에서 불필요한 체크 스킵
  scwin.newRow = true;
  scwin.g_oldRowIndex = info.oldRowIndex; // oldRow 전역변수 : oldRow 는 체크해야 함.
  scwin.g_newRowIndex = info.newRowIndex; // newRow 전역변수 : 환율유지

  // 변경된 row 가 있거나, 삭제/취소 가 아닐 때 진행 (삭제/취소는 oldRow 검증 불가)
  if (ds_txncontents.getModifiedIndex().length > 0
  // && (scwin.delCancelRow == false) 
  && scwin.state == "N" && scwin.delflag == "N" // 취소/삭제는 old row 체크 안함
  //  && ( typeof(oldStatus) != "undefined")  // old 가 삭제처리
  ) {
    console.log("  ▶ (이미 변경됨) ds_txncontents row [" + ds_txncontents.getRowPosition() + "]");

    // ds_txncontents.setRowPosition(oldRow); -- 무한 반복 발생
    // gr_txncontents.setFocusedCell(info.oldRowIndex, 1, false);   -- 무한 반복

    let ret = await scwin.f_changeRow1(oldRow);
    scwin.skipRowCheck = false; // row 체크 스킵 : new Row, old Row 에서 불필요한 체크 스킵

    // let ret = await $c.win.confirm(MSG_CM_CRM_005);  // 변경사항이 반영되지 않았습니다. 계속 하시겠습니까?

    if (!ret) {
      console.log("222 -----------");
      ds_txncontents.setEventPause("", true);
      gr_txncontents.setFocusedCell(info.oldRowIndex, 0, false);
      ds_txncontents.setEventPause("", false);

      // f_ValidationDs 후처리 : 대상 포커스
      switch (scwin.focusTarget) {
        case 1:
          ed_acctCd.focus();
          break;
        case 2:
          ed_acctDeptCd.focus();
          break;
        case 3:
          ed_vatDeclarAcctDeptCd.focus();
          break;
        case 4:
          ed_spplyAmt.focus();
          break;
        case 5:
          ed_vatAmt.focus();
          break;
        case 6:
          ed_cardNo.focus();
          break;
        case 7:
          ed_mgntEmpNo.focus();
          break;
        // 사원번호
        case 8:
          ed_adjmClntNo.focus();
          break;
        case 9:
          ed_acctDeptCd.focus();
          break;
        case 10:
          ed_mgntTermStDt.focus();
          break;
        case 11:
          ed_spplyAmt.focus();
          break;
        case 12:
          ed_acctDeptCd.focus();
          break;
        case 13:
          ed_acctCd.focus();
          break;
        case 14:
          ica_paymentPrd.focus();
          break;
        case 15:
          lc_busiCarYn.focus();
          break;
        case 16:
          lc_expenseCd.focus();
          break;
        case 17:
          ed_vehcleNo.focus();
          break;
        case 21:
          ed_summary.focus();
          break;
        // 적요
        case 22:
          ed_mgntClntNo.focus();
          break;
        // 거래처
        case 23:
          ed_crn.focus();
          break;
        // 사업자번호

        default:
          break;
      }
      scwin.newRow = false;
      return;
    } else {
      console.log("222-1  f_changeRow1 정상 처리 ---");

      // gr_txncontents.setFocusedCell(info.newRowIndex, 1, false);
      // if ( newStatus == "C" )  return;
    }
  } else {
    console.log("222-2 : old row [" + oldRow + "] 체크 안하고 진행");
    scwin.skipRowCheck = false; // row 체크 스킵 : new Row, old Row 에서 불필요한 체크 스킵

    if (scwin.delCancelRow == true) scwin.delCancelRow = false;
    // gr_txncontents.setFocusedCell(info.newRowIndex, 1, false);
  }
  scwin.newRow = false;

  // 후처리
  let rtn = await scwin.f_changeRow2(newRow);
  if (!rtn) {
    return false;
  }
  console.log("▶▷▶▷▶▷▶▷  ds_txncontents_onrowpositionchange  END  ▶▷▶▷▶▷▶▷");
  return true;
};

//-------------------------------------------------------------------------
// f_changeRow2  @@ @  
//-------------------------------------------------------------------------
scwin.f_changeRow2 = async function (row) {
  console.log("■ ■ ■ ■ === f_changeRow2 (row 변경후) - newRow ( " + row + " )");
  //    console.log(" row : "+ row);

  // <!-- 데이타셋 속성제어-->
  // language=JavaScript for=ds_txncontents event=OnRowPosChanged(row)>
  // //alert(ds_txncontents.NameString(row,"vatYn"));

  // 증빙구분조회시화면셋팅
  // console.log("    f_changeRow2 ["+row+"]- f_dsTotxt  사업자["+ds_txncontents.getCellData(row, "bizMgntYn")
  //        +"] 부가세["+ds_txncontents.getCellData(row, "vatYn"  )
  //        +"] 카드번호["+ds_txncontents.getCellData(row, "cardNoYn" )
  //        +"] 가맹점번호["+ds_txncontents.getCellData(row, "frchNoYn" )
  //        +"] 공제구분["+ds_txncontents.getCellData(row, "deductClsYn" )
  //        +"] 한도금액["+ds_txncontents.getCellData(row, "limitAmt" )+"]");

  // KYU_NEW : 증빙구분
  if (scwin.columnNameSet == true) {
    lc_evidClsCd.setValue(ds_txncontents.getCellData(row, "evidClsCd"));
    console.log("    f_changeRow2 [" + row + "]  증빙구분 세팅");
  } else {
    await scwin.lc_evidClsCd_onchange(); // 지우면 한계금액이 0 으로 들어감
    // await scwin.lc_crcCd_onchange();
    // await scwin.lc_adjmClsCd_onchange();
  }

  // 환율
  // lc_crcCd.setValue(ds_txncontents.getCellData(row, "crcCd"));
  // console.log("    f_changeRow2 ["+row+"]  환율 세팅");

  // 코드 세팅 중에는 실행안함
  if (scwin.columnNameSet != true) {
    // KYU_NEW : 추가 역바인딩 (ds --> txt_)
    await scwin.f_dsTotxt();
  }

  // debugger;
  // 증빙구분조회시화면셋팅
  console.log("    f_changeRow2 [" + row + "]- f_EvidClsCd  사업자[" + ds_txncontents.getCellData(row, "bizMgntYn") + "] 부가세[" + ds_txncontents.getCellData(row, "vatYn") + "] 카드번호[" + ds_txncontents.getCellData(row, "cardNoYn") + "] 가맹점번호[" + ds_txncontents.getCellData(row, "frchNoYn") + "] 공제구분[" + ds_txncontents.getCellData(row, "deductClsYn") + "] 한도금액[" + ds_txncontents.getCellData(row, "limitAmt") + "]");

  //-------------------------------------------------------------------------
  //  증빙구분조회시화면셋팅
  //  r_bizMgntYn   - 거래처관리여부=>사업자관리여부
  //  r_vatYn       - 부가세여부
  //  r_cardNoYn    - 카드번호여부
  //  r_frchNoYn    - 가맹점번호여부
  //  r_deductClsYn - 공제구분여부
  //  r_limitAmt    - 한도금액
  //-------------------------------------------------------------------------

  let rtne = await scwin.f_EvidClsCd(ds_txncontents.getCellData(row, "bizMgntYn") //  r_bizMgntYn - 거래처관리여부=>사업자관리여부
  , ds_txncontents.getCellData(row, "vatYn") //  r_vatYn - 부가세여부
  , ds_txncontents.getCellData(row, "cardNoYn") //  r_cardNoYn - 카드번호여부
  , ds_txncontents.getCellData(row, "frchNoYn") //  r_frchNoYn - 가맹점번호여부 
  , ds_txncontents.getCellData(row, "deductClsYn") //  r_deductClsYn - 공제구분여부
  , ds_txncontents.getCellData(row, "limitAmt") //  r_limitAmt - 한도금액
  );

  //     f_AcctCd(ds_txncontents.NameString(row,"empMgntYn"),ds_txncontents.NameString(row,"termMgntYn"),ds_txncontents.NameString(row,"dtMgntYn"),ds_txncontents.NameString(row,"clntMgntYn")) ;
  //     cfDisableObjects([txt_cardNm,txt_acctNm,txt_acctDeptNm,txt_vatDeclarAcctDeptNm,txt_mgntEmpNm,txt_adjmClntNm,txt_vatCrn,txt_mgntClntNm]);
  //     f_CrnNm(row);
  // debugger;
  // 계정조회시화면셋팅
  console.log("    f_changeRow2 - f_AcctCd  사원[" + ds_txncontents.getCellData(row, "empMgntYn") + "] 기간[" + ds_txncontents.getCellData(row, "termMgntYn") + "] 일자[" + ds_txncontents.getCellData(row, "dtMgntYn") + "] 거래처[" + ds_txncontents.getCellData(row, "clntMgntYn") + "]");
  let rtna = await scwin.f_AcctCd(ds_txncontents.getCellData(row, "empMgntYn"), ds_txncontents.getCellData(row, "termMgntYn"), ds_txncontents.getCellData(row, "dtMgntYn"), ds_txncontents.getCellData(row, "clntMgntYn"));
  $c.gus.cfDisableObjects($p, [ed_cardNm, ed_acctNm, ed_acctDeptNm, ed_vatDeclarAcctDeptNm, ed_mgntEmpNm, ed_adjmClntNm, ed_vatCrn, ed_mgntClntNm]);
  console.log("  ==--== 비활성 ( 카드명,계정명,귀속부서명,부가세관리부서명,사원명,거래처명,부가세사업자,거래처명)");
  let rtnc = await scwin.f_CrnNm(row);

  //     ed_slipAcctDeptCd.hidVal = ds_txn.NameString(1,"slipAcctDeptCd");
  //     ed_crn.hidVal = ds_txncontents.NameString(row,"crn");
  //     ed_cardNo.hidVal = ds_txncontents.NameString(row,"cardNo");
  //     ed_acctCd.hidVal = ds_txncontents.NameString(row,"acctCd"); 
  //     ed_acctDeptCd.hidVal = ds_txncontents.NameString(row,"acctDeptCd"); 
  //     ed_vatDeclarAcctDeptCd.hidVal = ds_txncontents.NameString(row,"vatDeclarAcctDeptCd"); 
  //     ed_mgntEmpNo.hidVal = ds_txncontents.NameString(row,"mgntEmpNo"); 
  //     ed_adjmClntNo.hidVal = ds_txncontents.NameString(row,"adjmClntNo"); 
  //     ed_mgntClntNo.hidVal = ds_txncontents.NameString(row,"mgntClntNo"); 

  scwin.ed_slipAcctDeptCd_hidVal = ds_txn.getCellData(0, "slipAcctDeptCd");
  console.log("   ds_txncontents_row 변경(ds_txn에서 복사) - ed_slipAcctDeptCd_hidVal [" + scwin.ed_slipAcctDeptCd_hidVal + "]");

  // 히든값 채움
  scwin.ed_crn_hidVal = ds_txncontents.getCellData(row, "crn");
  scwin.ed_cardNo_hidVal = ds_txncontents.getCellData(row, "cardNo");
  scwin.ed_acctCd_hidVal = ds_txncontents.getCellData(row, "acctCd");
  scwin.ed_acctDeptCd_hidVal = ds_txncontents.getCellData(row, "acctDeptCd");
  scwin.ed_vatDeclarAcctDeptCd_hidVal = ds_txncontents.getCellData(row, "vatDeclarAcctDeptCd");
  scwin.ed_mgntEmpNo_hidVal = ds_txncontents.getCellData(row, "mgntEmpNo");
  scwin.ed_adjmClntNo_hidVal = ds_txncontents.getCellData(row, "adjmClntNo");
  scwin.ed_mgntClntNo_hidVal = ds_txncontents.getCellData(row, "mgntClntNo");

  //     ed_slipAcctDeptCd.Text = ds_txn.NameString(1,"slipAcctDeptCd");
  //     ed_crn.Text = ds_txncontents.NameString(row,"crn");
  //     ed_cardNo.Text = ds_txncontents.NameString(row,"cardNo");
  //     ed_acctCd.Text = ds_txncontents.NameString(row,"acctCd"); 
  //     ed_acctDeptCd.Text = ds_txncontents.NameString(row,"acctDeptCd"); 
  //     ed_vatDeclarAcctDeptCd.Text = ds_txncontents.NameString(row,"vatDeclarAcctDeptCd"); 
  //     ed_mgntEmpNo.Text = ds_txncontents.NameString(row,"mgntEmpNo"); 
  //     ed_adjmClntNo.Text = ds_txncontents.NameString(row,"adjmClntNo"); 
  //     txt_adjmClntNm.value = ds_txncontents.NameString(row,"adjmClntNm"); 
  //     ed_mgntClntNo.Text = ds_txncontents.NameString(row,"mgntClntNo");
  //     txt_mgntClntNm.value = ds_txncontents.NameString(row,"mgntClntNm");
  //     ed_reqClntNo.Text = ds_txncontents.NameString(row,"reqClntNo");
  //     txt_reqClntNm.value = ds_txncontents.NameString(row,"reqClntNm");

  //---------------------- TEST  START
  // 환율코드 변경 : 외화금액 등 세팅
  // let rtnCrc = await scwin.lc_crcCd_onchange();

  // 증빙종류 변경 : f_EvidClsCd 실행
  // let rtnEvid = await scwin.lc_evidClsCd_onchange();

  // 귀속부서 focus out : 부가세관리부서도 같이 세팅
  // let rtnDept = await scwin.udc_acctDeptCd_onblurCodeEvent();

  // 계정 focus out :
  // let rtnAcct = await scwin.udc_acctCd_onblurCodeEvent();

  // scwin.f_openPopUp( '7','T');  // 사업자 : 과세유형 세팅

  // 사업자 focus out : 과세유형 세팅
  // let rtnCrn = await scwin.udc_crn_onblurCodeEvent();

  // scwin.f_openPopUp( '9','T');  // 정산처
  // scwin.f_openPopUp('10','T');  // 거래처
  // scwin.f_openPopUp('15','T');  // 요청거래처
  //---------------------- TEST  END

  // // KYU_ISSUE : 이벤트 발생하므로 삭제했었으나 오동작 발생함
  // console.log("  ----------crn");
  // ed_crn.setValue(ds_txncontents.getCellData(row, "crn"));  // 사업자

  // // ed_slipAcctDeptCd.setValue(ds_txn.getCellData(0, "slipAcctDeptCd"));  // 발행부서

  // ed_acctDeptCd.setValue(ds_txncontents.getCellData(row, "acctDeptCd"));  // 귀속부서
  // // let rtnDept = await scwin.udc_acctDeptCd_onblurCodeEvent();

  // // 이미 지워져 있음 !!
  // // ed_vatDeclarAcctDeptCd.setValue(ds_txncontents.getCellData(row, "vatDeclarAcctDeptCd"));  // 부가세관리부서

  // console.log("  ----------acctCd");
  // ed_acctCd.setValue(ds_txncontents.getCellData(row, "acctCd"));  // 계정
  // ed_mgntClntNo.setValue(ds_txncontents.getCellData(row, "mgntClntNo"));  // 거래처

  // ed_mgntEmpNo.setValue(ds_txncontents.getCellData(row, "mgntEmpNo"));  // 사원번호

  // ed_cardNo.setValue(ds_txncontents.getCellData(row, "cardNo"));  // 카드번호
  // ed_adjmClntNo.setValue(ds_txncontents.getCellData(row, "adjmClntNo"));  // 정산처
  // // ed_adjmClntNm.setValue(ds_txncontents.getCellData(row, "adjmClntNm"));

  // // ed_mgntClntNm.setValue(ds_txncontents.getCellData(row, "mgntClntNm"));
  // ed_reqClntNo.setValue(ds_txncontents.getCellData(row, "reqClntNo"));  // 요청거래처
  // // ed_reqClntNm.setValue(ds_txncontents.getCellData(row, "reqClntNm"));

  // KYU_NEW : 정산방법 변경 - 지로납부 체크박스 정리
  await scwin.lc_adjmClsCd_onchange();

  // KYU_NEW : 지로납부, 지로납부기한 정리
  // await scwin.f_CheckPayYn();

  console.log("■ ■ ■ ■  f_changeRow2 END - newRow ( " + row + " )  ■ ■ ■ ■");
  return true;
};

// @@ ====== 체크 ============================================================================== //

//-------------------------------------------------------------------------
// 사업자번호 체크 여부 확인 (mandatory 지정)
//-------------------------------------------------------------------------
scwin.f_BizCheck = async function () {
  // r_bizMgntYn = txt_bizMgntYn.value ;
  // r_frchNoYn = txt_frchNoYn.value ;
  // r_crnLen = ed_crn.text.length;

  var r_bizMgntYn = scwin.txt_bizMgntYn;
  var r_frchNoYn = scwin.txt_frchNoYn; // 가맹점번호여부
  var r_crnLen = ed_crn.getValue().length;
  if (r_frchNoYn == "1" && r_bizMgntYn == "1" || r_frchNoYn == "0" && r_bizMgntYn == "1") {
    // ed_crn.validExp = "사업자번호:yes";

    console.log("  f_BizCheck - 사업자번호 필수 !");
    ed_crn.setMandatory(true);
    ed_crnNm.setMandatory(true);
  }
  if (r_frchNoYn == "1" && r_bizMgntYn == "0") {
    if (r_crnLen == 13) {// 개인
      // ed_crn.validExp="사업자번호:yes:ssn";
    } else if (r_crnLen == 10) {// 법인
      // ed_crn.validExp="사업자번호:yes:csn";
    }
  }
  if (r_frchNoYn == "0" && r_bizMgntYn == "0") {
    //ed_crn.validExp="사업자번호:no";
    console.log("  f_BizCheck - 사업자번호 필수 아님");
    ed_crn.setMandatory(false);
    ed_crnNm.setMandatory(false);
  }
  // else {
  //     console.log("  사업자번호 필수 !!");
  //     ed_crn.setMandatory(true);
  //     ed_crnNm.setMandatory(true);
  // }
};

//-------------------------------------------------------------------------
// 체크  f_Validation
//   공급금액 (ed_spplyAmt) : 행추가 이동시에는 0 체크 안함, 발행시에는 0 체크
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  console.log("===== f_Validation ===== ▶▶▶▶   row [" + ds_txncontents.getRowPosition() + "]");
  if (ds_txncontents.getRowPosition() == null) {
    console.log("  ds_txncontents.getRowPosition() == null SKIP ▶▶▶▶");
    return;
  }

  // KYU_NEW : 메모리 직접 비교시 사용
  var row = ds_txncontents.getRowPosition();

  // 사업자번호 체크 여부 확인 (mandatory 지정)
  await scwin.f_BizCheck();

  // if (!cfValidate([lc_evidClsCd,lc_deductClsCd,lc_adjmClsCd,ed_slipDt,ed_slipAcctDeptCd,ed_dcAmt,ed_acctCd,ed_acctDeptCd,ed_mgntDt,ed_mgntTermStDt,ed_mgntTermEndDt,txt_summary,
  //                  ed_spplyAmt,ed_vatAmt,ed_crn,ed_mgntEmpNo,ed_adjmClntNo,ed_txnDt,txt_crnNm,ed_vatDeclarAcctDeptCd,ed_mgntClntNo]))

  // 금액 제외
  // let ret = await $c.gus.cfValidate([lc_evidClsCd,lc_deductClsCd,lc_adjmClsCd,ica_slipDt,ed_slipAcctDeptCd,ed_acctCd,ed_acctDeptCd,ica_mgntDt,ed_mgntTermStDt,ed_mgntTermEndDt,ed_summary,
  //       ed_crn, ed_mgntEmpNo, ed_adjmClntNo, ica_txnDt, ed_crnNm, ed_vatDeclarAcctDeptCd, ed_mgntClntNo
  //     , ed_crn ]);
  let ret = await $c.gus.cfValidate($p, [lc_evidClsCd, lc_deductClsCd // 공제구분
  , lc_adjmClsCd // 정산방법
  , ica_slipDt // 작성일자
  , ed_slipAcctDeptCd // 발행부서
  , ed_acctCd // 계정
  , ed_acctDeptCd // 귀속부서
  , ica_mgntDt // 관리일자
  , ed_mgntTermStDt // 관리기간_시작
  , ed_mgntTermEndDt // 관리기간_종료
  , ed_summary // 적요
  , ed_crn // 사업자번호
  //   ,ed_mgntEmpNo           // 사원번호
  , ed_adjmClntNo // 정산처
  , ica_txnDt // 계산서일자
  , ed_crnNm // 사업자명
  , ed_vatDeclarAcctDeptCd // 부가세관리부서
  , ed_mgntClntNo // 거래처번호
  ]);
  if (!ret) {
    console.log("   ---- cfValidate 오류 !!");
    return false;
  }

  // validExp="공급금액:yes:maxLength=13

  // 금액은 1 보다 작으면 안됩니다.
  // if ( ed_spplyAmt.getValue() <= 0 ) {
  //     await $c.win.alert($c.data.getMessage(MSG_CM_ERR_013, "공급금액", "1"));
  //     ed_spplyAmt.focus();
  //     return;
  // }

  // %1은(는) 필수 입력 항목입니다.
  // if ( $c.gus.cfIsNull(ed_vatAmt.getValue())  && ed_vatAmt.getMandatory() ) {
  //     await $c.win.alert($c.data.getMessage(MSG_CM_ERR_002, "부가세액"));
  //     ed_vatAmt.focus();
  //     return;
  // }

  console.log("    [" + row + "] mgntClntNo [" + ds_txncontents.getCellData(row, "mgntClntNo") + "]   clntMgntYn [" + ds_txncontents.getCellData(row, "clntMgntYn") + "]");

  // KYU_NEW : 거래처 체크
  if ($c.gus.cfIsNull($p, ds_txncontents.getCellData(row, "mgntClntNo")) && ds_txncontents.getCellData(row, "clntMgntYn") == "1") {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "거래처"));
    return false;
  }

  // KYU_NEW : 사원 체크
  if ($c.gus.cfIsNull($p, ds_txncontents.getCellData(row, "mgntEmpNo")) && ds_txncontents.getCellData(row, "empMgntYn") == "1") {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "사원번호"));
    ed_mgntEmpNo.focus();
    return false;
  }

  // KYU_NEW : 사업자번호 체크
  if ($c.gus.cfIsNull($p, ds_txncontents.getCellData(row, "crn")) && ds_txncontents.getCellData(row, "bizMgntYn") == "1") {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "사업자번호"));
    ed_crn.focus();
    return false;
  }

  // KYU_NEW : 히든 세팅
  await scwin.f_setHidVal();

  // let rtn1 = await scwin.f_HiddenCheck(ed_slipAcctDeptCd, "발행부서");
  //     if ( !rtn1 ) return false;
  // let rtn2 = await scwin.f_HiddenCheck(ed_crn, "사업자번호");
  //     if ( !rtn2 ) return false;
  // let rtn3 = await scwin.f_HiddenCheck(ed_cardNo, "카드번호");
  //     if ( !rtn3 ) return false;
  // let rtn4 = await scwin.f_HiddenCheck(ed_acctCd, "계정");
  //     if ( !rtn4 ) return false;
  // let rtn5 = await scwin.f_HiddenCheck(ed_acctDeptCd, "귀속부서");
  //     if ( !rtn5 ) return false;
  // let rtn6 = await scwin.f_HiddenCheck(ed_vatDeclarAcctDeptCd, "부가세관리부서");
  //     if ( !rtn6 ) return false;
  // let rtn7 = await scwin.f_HiddenCheck(ed_mgntEmpNo, "사원번호");
  //     if ( !rtn7 ) return false;
  // let rtn8 = await scwin.f_HiddenCheck(ed_mgntClntNo, "거래처");
  //     if ( !rtn8 ) return false;

  // 법인카드나 개인카드 시  카드번호 정산처필수
  if (lc_evidClsCd.getValue() == "40" || lc_evidClsCd.getValue() == "50") {
    let ret = await $c.gus.cfValidate($p, [ed_cardNo]);
    if (!ret) return false;
  }

  //증빙구분이 세금계산서일때 사원번호 필수
  if (lc_evidClsCd.getValue() == "10" && ed_mgntEmpNo.getMandatory()) {
    let ret = await $c.gus.cfValidate($p, [ed_mgntEmpNo]);
    if (!ret) return false;
  }

  // 미지급이나 법인카드시 정산처 필수,외상매입금도 추가 ( 2007.02.05 법인카드일때 정산처 필수 )
  // 선급금일때 정산처 필수 (2016.10.24)
  if ((lc_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_NOPAY_COST || lc_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_NOPAY || lc_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_AP || lc_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_COR_CARD || lc_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_PREPAY) && ed_adjmClntNo.getValue().trim() == "") {
    console.log("   f_Validation --- 선급금일때 정산처 필수 (2016.10.24) ---");

    //cfAlertMsg(MSG_CM_ERR_002,Array("정산처"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "정산처"));

    // KYU_TEST : 그냥 리턴 필요? await 걸을 수 없어 그대로 흘러감
    // if (!scwin.f_HiddenCheck(ed_adjmClntNo, "정산처")) return false;

    // KYU_NEW
    $c.gus.cfEnableObjects($p, [ed_adjmClntNo, btn_adjmClntNo]);
    console.log("  NEW ==--== 활성 (정산처,정산처돋보기)");
    let rtn9 = await scwin.f_HiddenCheck(ed_adjmClntNo, "정산처");
    if (!rtn9) return false;
    ed_adjmClntNo.focus();
    return false;
  }

  // console.log("    f_Validation - 111");

  // 전도금일경우 전도금 집행부서는 필수
  // if((lc_adjmClsCd.BindColVal=='<%=ACConstants.ADJM_MTHDCD_ADVANCED%>') && txt_adjmAcctDeptCd.value.trim()==""){
  if (lc_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_ADVANCED && scwin.txt_adjmAcctDeptCd == "") {
    // cfAlertMsg(MSG_CM_ERR_002,Array("정산방법이 전도금일 경우 귀속부서의 전도금 집행부서"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "정산방법이 전도금일 경우 귀속부서의 전도금 집행부서"));

    // 귀속부서
    ed_acctDeptCd.focus();
    return false;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_mgntTermStDt.getValue().trim(), ed_mgntTermEndDt.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);

    // 경기기간From
    ed_mgntTermStDt.focus();
    return false;
  }

  //금액체크(금액=공급금액+부가세액)
  var amt = 0;
  amt = Number(ed_spplyAmt.getValue().trim()) + Number(ed_vatAmt.getValue().trim());

  // scwin.txt_limitAmt = scwin.txt_limitAmt - 999;
  console.log(" amt [" + Number(amt) + "]  txt_limitAmt (한도금액) [" + scwin.txt_limitAmt + "]");

  // if(Number(amt) > Number(txt_limitAmt.value)){
  if (Number(amt) > scwin.txt_limitAmt) {
    //cfAlertMsg(MSG_CM_ERR_048,Array("금액(공급금액+부가세액)","한도액("+scwin.txt_limitAmt+") "));

    // 금액(공급금액+부가세액)은(는) 한도액() 보다 작아야 합니다.
    var temp = "한도액(" + scwin.txt_limitAmt + ") ";
    console.log("temp [" + temp + "]");
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_048, "금액(공급금액+부가세액)", temp));
    ed_spplyAmt.focus();
    return false;
  }

  // 계정코드와 부서체크
  // 1^자산,2^부채,3^자본,4^수익,5^비용,6^원가
  // 비용구분 : 01^원가,02^판관비,03^원가+판관비  (귀속부서조회 팝업)
  console.log("  계정코드와 부서체크 - txt_costClsCd (비용구분조회) : " + scwin.txt_costClsCd);
  if (scwin.txt_costClsCd == "") {
    console.log("  MSG_CM_WRN_018  1");
    //cfAlertMsg(MSG_CM_WRN_018,Array("부서에 따른 비용구분코드","비용구분코드를 등록"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_WRN_018, "부서에 따른 비용구분코드", "비용구분코드를 등록"));
    ed_acctDeptCd.focus();
    return false;
  }
  if (scwin.txt_costClsCd.trim() == "01" && scwin.txt_acctClsCd.trim() != "6" && ed_acctCd.getValue() != "6120220") {
    console.log("  MSG_CM_ERR_061  2");

    //cfAlertMsg(MSG_CM_ERR_061,Array("원가부서","원가계정"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "원가부서", "원가계정"));
    ed_acctCd.focus();
    return false;
  }
  if (scwin.txt_costClsCd == "02" && scwin.txt_acctClsCd.trim() != "5" && ed_acctCd.getValue() != "6120220") {
    //cfAlertMsg(MSG_CM_ERR_061,Array("판관비부서","비용계정"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "판관비부서", "비용계정"));
    ed_acctCd.focus();
    return false;
  }
  if (scwin.txt_costClsCd == "03" && scwin.txt_acctClsCd.trim() != "6" && scwin.txt_acctClsCd.trim() != "5" && ed_acctCd.getValue() != "6120220") {
    //cfAlertMsg(MSG_CM_ERR_055,Array("부서와 계정"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "부서와 계정"));
    ed_acctCd.focus();
    return false;
  }

  // 법인카드일경우 증빙종류가 법인카드
  if (lc_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_COR_CARD && lc_evidClsCd.getValue() != "40") {
    // MSG_CM_ERR_061   =  "%1은(는) %2이어야 합니다."
    //cfAlertMsg(MSG_CM_ERR_061,Array("정산방법이 법인카드일 경우 증빙종류는 법인카드"));
    // await $c.gus.cfAlertMsg($c.data.getMessage(MSG_CM_ERR_061, "정산방법이 법인카드일 경우 증빙종류는 법인카드", ""));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "정산방법이 법인카드일 경우 증빙종류", "법인카드")); // 개선 : 가우스는 %2 안나옴
    return false;
  }
  if (lc_evidClsCd.getValue() == "40" && lc_adjmClsCd.getValue() != ACConstants.ADJM_MTHDCD_COR_CARD) {
    // MSG_CM_ERR_061   =  "%1은(는) %2이어야 합니다."
    //cfAlertMsg(MSG_CM_ERR_061,Array("증빙종류가 법인카드일 경우 정산방법은 법인카드"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "증빙종류가 법인카드일 경우 정산방법", "법인카드")); // 개선 : 가우스는 %2 안나옴
    return false;
  }
  if (ica_paymentPrd.getValue().trim() == "" && cbx_giro.getValue() == 1) {
    //cfAlertMsg("지로 납부기한을 입력해 주십시오.");
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, "지로 납부기한을 입력해 주십시오."));
    ica_paymentPrd.focus();
    return false;
  }

  // 차량 유지비 계정일 경우 업무용차량구분 필수
  if (ed_acctCd.getValue() == '4203600' || ed_acctCd.getValue() == '4203610' || ed_acctCd.getValue() == '4203620' || ed_acctCd.getValue() == '4203640' || ed_acctCd.getValue() == '4203660' || ed_acctCd.getValue() == '5002100' || ed_acctCd.getValue() == '5002110' || ed_acctCd.getValue() == '5002120' || ed_acctCd.getValue() == '5002140' || ed_acctCd.getValue() == '5002160') {
    if (lc_busiCarYn.getValue() == 0) {
      //cfAlertMsg("계정코드가 차량유지비 계정일 경우 업무용차량여부를 'Y' 또는 'N' 또는  '개인차량' 을 선택하십시오.");
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, "계정코드가 차량유지비 계정일 경우 업무용차량여부를 'Y' 또는 'N' 또는  '개인차량' 을 선택하십시오."));
      lc_busiCarYn.focus();
      return false;
    }
  }

  //업무용차량여부 체크(2017.05.23 개인차량 추가)
  if (lc_busiCarYn.getValue() == 1 || lc_busiCarYn.getValue() == 3) {
    if (lc_expenseCd.getValue() == "") {
      //cfAlertMsg("비용구분을 선택하여 주십시오.");
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, "비용구분을 선택하여 주십시오."));
      lc_expenseCd.focus();
      return false;
    }
    if (ed_vehcleNo.getValue() == "") {
      //cfAlertMsg("차량번호를 선택하여 주십시오.");
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, "차량번호를 선택하여 주십시오."));
      ed_vehcleNo.focus();
      return false;
    }
  }
  console.log("===== f_Validation ===== ▶▶▶▶   row [" + ds_txncontents.getRowPosition() + "]");
  return true;
};

//-------------------------------------------------------------------------
// dataSet 체크 @@
//   사유 : row change 할 때 포커스가 이동한 상태이므로 컴포넌트(getValue)로는 비교 불가
//          data set (oldRow) 로 직접 뽑아내어 비교함.
//   주의 : cfValidate 해체 (컴포넌트별로)
//          scwin.focusTarget 을 설정해서 기존 row 원복시 해당 컴포넌트로 포커싱
//-------------------------------------------------------------------------
scwin.f_ValidationDs = async function (row) {
  console.log("===== f_ValidationDs ===== ▶▶▶▶   row [" + row + "]");
  if (ds_txncontents.getRowPosition() == null) {
    console.log("  ds_txncontents.getRowPosition() == null  SKIP ▶▶▶▶");
    return false;
  }

  // KYU_TEST : 사업자번호 체크 여부 확인 (mandatory 지정)  2026-04-15 복원
  await scwin.f_BizCheck();

  // if (!cfValidate([lc_evidClsCd,lc_deductClsCd,lc_adjmClsCd,ed_slipDt,ed_slipAcctDeptCd,ed_dcAmt,ed_acctCd,ed_acctDeptCd,ed_mgntDt,ed_mgntTermStDt,ed_mgntTermEndDt,txt_summary,
  //                  ed_spplyAmt,ed_vatAmt
  //                 ,ed_crn,ed_mgntEmpNo,ed_adjmClntNo,ed_txnDt,txt_crnNm,ed_vatDeclarAcctDeptCd,ed_mgntClntNo]))

  // 금액 제외
  // let ret = await $c.gus.cfValidate([lc_evidClsCd,lc_deductClsCd,lc_adjmClsCd,ica_slipDt,ed_slipAcctDeptCd,ed_acctCd,ed_acctDeptCd,ica_mgntDt,ed_mgntTermStDt,ed_mgntTermEndDt,ed_summary,
  //       ed_crn, ed_mgntEmpNo, ed_adjmClntNo, ica_txnDt, ed_crnNm, ed_vatDeclarAcctDeptCd, ed_mgntClntNo
  //     , ed_crn ]);

  let ret = await $c.gus.cfValidate($p, [lc_evidClsCd, lc_deductClsCd // 공제구분
  , lc_adjmClsCd // 정산방법
  , ica_slipDt // 작성일자
  , ed_slipAcctDeptCd // 발행부서
  , ed_acctCd // 계정
  , ed_acctDeptCd // 귀속부서
  , ica_mgntDt // 관리일자
  , ed_mgntTermStDt // 관리기간_시작
  , ed_mgntTermEndDt // 관리기간_종료
  , ed_summary // 적요
  //   ,ed_crn                 // 사업자번호
  //   ,ed_mgntEmpNo           // 사원번호
  , ed_adjmClntNo // 정산처
  , ica_txnDt // 계산서일자
  //   ,ed_crnNm               // 사업자명
  , ed_vatDeclarAcctDeptCd // 부가세관리부서
  //   ,ed_mgntClntNo          // 거래처번호
  ]);
  if (!ret) {
    console.log("   ---- cfValidate 오류 (f_ValidationDs)");
    return false;
  }
  if ($c.gus.cfIsNull($p, ds_txncontents.getCellData(row, "acctCd"))) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "계정코드"));
    scwin.focusTarget = 1;
    // ed_acctCd.focus();
    return false;
  }
  if ($c.gus.cfIsNull($p, ds_txncontents.getCellData(row, "acctDeptCd"))) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "귀속부서"));
    ed_acctDeptCd.focus();
    scwin.focusTarget = 2;
    return false;
  }
  if ($c.gus.cfIsNull($p, ds_txncontents.getCellData(row, "vatDeclarAcctDeptCd"))) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "부가세관리부서"));
    ed_vatDeclarAcctDeptCd.focus();
    scwin.focusTarget = 3;
    return false;
  }
  if ($c.gus.cfIsNull($p, ds_txncontents.getCellData(row, "summary"))) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "적요"));
    ed_summary.focus();
    scwin.focusTarget = 21;
    return false;
  }
  console.log("    [" + row + "] mgntClntNo [" + ds_txncontents.getCellData(row, "mgntClntNo") + "]   clntMgntYn [" + ds_txncontents.getCellData(row, "clntMgntYn") + "]");

  // KYU_NEW : 거래처 체크
  if ($c.gus.cfIsNull($p, ds_txncontents.getCellData(row, "mgntClntNo")) && ds_txncontents.getCellData(row, "clntMgntYn") == "1") {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "거래처"));
    scwin.focusTarget = 22;
    return false;
  }

  // KYU_NEW : 사원 체크
  if ($c.gus.cfIsNull($p, ds_txncontents.getCellData(row, "mgntEmpNo")) && ds_txncontents.getCellData(row, "empMgntYn") == "1") {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "사원번호"));
    scwin.focusTarget = 7;
    // ed_mgntEmpNo.focus();
    return false;
  }

  // KYU_NEW : 사업자번호 체크
  if ($c.gus.cfIsNull($p, ds_txncontents.getCellData(row, "crn")) && ds_txncontents.getCellData(row, "bizMgntYn") == "1") {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "사업자번호"));
    scwin.focusTarget = 23;
    ed_crn.focus();
    return false;
  }

  // validExp="공급금액:yes:maxLength=13
  // 금액은 0  이상으로 입력하십시오.
  // if ( ds_txncontents.getCellData(row, "spplyAmt") <= 0) {
  //     await $c.win.alert($c.data.getMessage(MSG_CM_ERR_013, "공급금액", "1"));

  //     scwin.focusTarget = 4;
  //     return false;
  // }

  // 부가세액 :  이상으로 입력하십시오.
  // if ( ds_txncontents.getCellData(row, "vatAmt") <= 0  && ed_vatAmt.getMandatory()  ) {
  // if ( ds_txncontents.getCellData(row, "vatAmt") <= 0  && ds_txncontents.getCellData(row, "vatYn") =="1"  ) {
  //     await $c.win.alert($c.data.getMessage(MSG_CM_ERR_013, "부가세액", "1"));    
  //     scwin.focusTarget = 5;
  //     return false;
  // }

  // KYU_NEW : 히든 세팅
  // scwin.f_setHidVal();

  // let rtn1 = await scwin.f_HiddenCheck(ed_slipAcctDeptCd, "발행부서");
  //     if ( !rtn1 ) return false;
  // let rtn2 = await scwin.f_HiddenCheck(ed_crn, "사업자번호");
  //     if ( !rtn2 ) return false;
  // let rtn3 = await scwin.f_HiddenCheck(ed_cardNo, "카드번호");
  //     if ( !rtn3 ) return false;
  // let rtn4 = await scwin.f_HiddenCheck(ed_acctCd, "계정");
  //     if ( !rtn4 ) return false;
  // let rtn5 = await scwin.f_HiddenCheck(ed_acctDeptCd, "귀속부서");
  //     if ( !rtn5 ) return false;
  // let rtn6 = await scwin.f_HiddenCheck(ed_vatDeclarAcctDeptCd, "부가세관리부서");
  //     if ( !rtn6 ) return false;
  // let rtn7 = await scwin.f_HiddenCheck(ed_mgntEmpNo, "사원번호");
  //     if ( !rtn7 ) return false;
  // let rtn8 = await scwin.f_HiddenCheck(ed_mgntClntNo, "거래처");
  //     if ( !rtn8 ) return false;

  // 법인카드나 개인카드 시  카드번호 정산처필수
  if (ds_txncontents.getCellData(row, "evidClsCd") == "40" || ds_txncontents.getCellData(row, "evidClsCd") == "50") {
    if ($c.gus.cfIsNull($p, ds_txncontents.getCellData(row, "cardNo"))) {
      console.log("  --- 법인카드나 개인카드 시  카드번호 정산처필수 ");

      // KYU_NEW
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "카드번호"));
      scwin.focusTarget = 6;
      return false;
    }
  }

  //증빙구분이 세금계산서일때 사원번호 필수
  if (ds_txncontents.getCellData(row, "evidClsCd") == "10") {
    if ($c.gus.cfIsNull($p, ds_txncontents.getCellData(row, "mgntEmpNo")) && ed_mgntEmpNo.getMandatory()) {
      console.log("  --- 증빙구분이 세금계산서일때 사원번호 필수 ");

      // KYU_NEW
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "사원번호"));
      scwin.focusTarget = 7;
      return false;
    }
  }

  // 미지급이나 법인카드시 정산처 필수,외상매입금도 추가 ( 2007.02.05 법인카드일때 정산처 필수 )
  // 선급금일때 정산처 필수 (2016.10.24)
  if ((ds_txncontents.getCellData(row, "adjmClsCd") == ACConstants.ADJM_MTHDCD_NOPAY_COST || ds_txncontents.getCellData(row, "adjmClsCd") == ACConstants.ADJM_MTHDCD_NOPAY || ds_txncontents.getCellData(row, "adjmClsCd") == ACConstants.ADJM_MTHDCD_AP || ds_txncontents.getCellData(row, "adjmClsCd") == ACConstants.ADJM_MTHDCD_COR_CARD || ds_txncontents.getCellData(row, "adjmClsCd") == ACConstants.ADJM_MTHDCD_PREPAY) && $c.gus.cfIsNull($p, ds_txncontents.getCellData(row, "adjmClntNo"))) {
    console.log("   --- 선급금일때 정산처 필수 (2016.10.24) ---");

    // KYU_NEW
    $c.gus.cfEnableObjects($p, [ed_adjmClntNo, btn_adjmClntNo]);
    console.log("  NEW ==--== 활성 (정산처,정산처돋보기)  (f_ValidationDs)");

    //cfAlertMsg(MSG_CM_ERR_002,Array("정산처"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "정산처"));

    // KYU_TEST : 그냥 리턴 필요? await 걸을 수 없어 그대로 흘러감
    // if (!scwin.f_HiddenCheck(ed_adjmClntNo, "정산처")) return false;

    // KYU_DEL
    // let rtn9 = await scwin.f_HiddenCheck(ed_adjmClntNo, "정산처");
    // if ( !rtn9 ) {
    //     return false;
    // } 

    scwin.focusTarget = 8;
    return false;
  }
  console.log("111");

  // 전도금일경우 전도금 집행부서는 필수
  if (ds_txncontents.getCellData(row, "adjmClsCd") == ACConstants.ADJM_MTHDCD_ADVANCED && ds_txncontents.getCellData(row, "adjmAcctDeptCd") == "") {
    // cfAlertMsg(MSG_CM_ERR_002,Array("정산방법이 전도금일 경우 귀속부서의 전도금 집행부서"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "정산방법이 전도금일 경우 귀속부서의 전도금 집행부서"));
    scwin.focusTarget = 9;
    return false;
  }
  if (!$c.gus.cfIsAfterDate($p, ds_txncontents.getCellData(row, "mgntTermStDt"), ds_txncontents.getCellData(row, "mgntTermEndDt"))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);

    // 경기기간From
    // ed_mgntTermStDt.focus();

    scwin.focusTarget = 10;
    return false;
  }

  //금액체크(금액=공급금액+부가세액)
  var amt = 0;
  amt = Number(ds_txncontents.getCellData(row, "spplyAmt")) + Number(ds_txncontents.getCellData(row, "vatAmt"));

  // scwin.txt_limitAmt = scwin.txt_limitAmt - 999;
  console.log(" amt [" + Number(amt) + "]  txt_limitAmt (한도금액) [" + scwin.txt_limitAmt + "]");

  // if(Number(amt) > Number(txt_limitAmt.value)){
  if (Number(amt) > scwin.txt_limitAmt) {
    //cfAlertMsg(MSG_CM_ERR_048,Array("금액(공급금액+부가세액)","한도액("+scwin.txt_limitAmt+") "));

    // 금액(공급금액+부가세액)은(는) 한도액() 보다 작아야 합니다.
    var temp = "한도액(" + scwin.txt_limitAmt + ") ";
    console.log("temp [" + temp + "]");
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_048, "금액(공급금액+부가세액)", temp));
    scwin.focusTarget = 11;
    return false;
  }

  // 계정코드와 부서체크
  // 1^자산,2^부채,3^자본,4^수익,5^비용,6^원가
  // 비용구분 : 01^원가,02^판관비,03^원가+판관비  (귀속부서조회 팝업)
  console.log("  계정코드와 부서체크 - txt_costClsCd (비용구분조회) : " + scwin.txt_costClsCd);
  if (scwin.txt_costClsCd == "") {
    console.log("  MSG_CM_WRN_018  1");
    //cfAlertMsg(MSG_CM_WRN_018,Array("부서에 따른 비용구분코드","비용구분코드를 등록"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_WRN_018, "부서에 따른 비용구분코드", "비용구분코드를 등록"));
    scwin.focusTarget = 12;
    return false;
  }
  if (scwin.txt_costClsCd.trim() == "01" && scwin.txt_acctClsCd.trim() != "6" && ds_txncontents.getCellData(row, "acctCd") != "6120220") {
    console.log("  MSG_CM_ERR_061  2");

    //cfAlertMsg(MSG_CM_ERR_061,Array("원가부서","원가계정"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "원가부서", "원가계정"));
    scwin.focusTarget = 13;
    return false;
  }
  if (scwin.txt_costClsCd == "02" && scwin.txt_acctClsCd.trim() != "5" && ds_txncontents.getCellData(row, "acctCd") != "6120220") {
    //cfAlertMsg(MSG_CM_ERR_061,Array("판관비부서","비용계정"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "판관비부서", "비용계정"));
    scwin.focusTarget = 13;
    return false;
  }
  if (scwin.txt_costClsCd == "03" && scwin.txt_acctClsCd.trim() != "6" && scwin.txt_acctClsCd.trim() != "5" && ds_txncontents.getCellData(row, "acctCd") != "6120220") {
    //cfAlertMsg(MSG_CM_ERR_055,Array("부서와 계정"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "부서와 계정"));
    scwin.focusTarget = 13;
    return false;
  }

  // 법인카드일경우 증빙종류가 법인카드
  if (ds_txncontents.getCellData(row, "adjmClsCd") == ACConstants.ADJM_MTHDCD_COR_CARD && ds_txncontents.getCellData(row, "evidClsCd") != "40") {
    //cfAlertMsg(MSG_CM_ERR_061,Array("정산방법이 법인카드일 경우 증빙종류는 법인카드"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "정산방법이 법인카드일 경우 증빙종류", "법인카드"));
    return false;
  }
  if (ds_txncontents.getCellData(row, "evidClsCd") == "40" && ds_txncontents.getCellData(row, "adjmClsCd") != ACConstants.ADJM_MTHDCD_COR_CARD) {
    //cfAlertMsg(MSG_CM_ERR_061,Array("증빙종류가 법인카드일 경우 정산방법은 법인카드"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "증빙종류가 법인카드일 경우 정산방법", "법인카드"));
    return false;
  }
  if (ds_txncontents.getCellData(row, "paymentPrd") == "" && ds_txncontents.getCellData(row, "giroYn") == 1) {
    //cfAlertMsg("지로 납부기한을 입력해 주십시오.");
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, "지로 납부기한을 입력해 주십시오."));
    scwin.focusTarget = 14;
    return false;
  }

  // 차량 유지비 계정일 경우 업무용차량구분 필수
  if (ds_txncontents.getCellData(row, "acctCd") == '4203600' || ds_txncontents.getCellData(row, "acctCd") == '4203610' || ds_txncontents.getCellData(row, "acctCd") == '4203620' || ds_txncontents.getCellData(row, "acctCd") == '4203640' || ds_txncontents.getCellData(row, "acctCd") == '4203660' || ds_txncontents.getCellData(row, "acctCd") == '5002100' || ds_txncontents.getCellData(row, "acctCd") == '5002110' || ds_txncontents.getCellData(row, "acctCd") == '5002120' || ds_txncontents.getCellData(row, "acctCd") == '5002140' || ds_txncontents.getCellData(row, "acctCd") == '5002160') {
    if (ds_txncontents.getCellData(row, "busiCarYn") == 0) {
      //cfAlertMsg("계정코드가 차량유지비 계정일 경우 업무용차량여부를 'Y' 또는 'N' 또는  '개인차량' 을 선택하십시오.");
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, "계정코드가 차량유지비 계정일 경우 업무용차량여부를 'Y' 또는 'N' 또는  '개인차량' 을 선택하십시오."));
      // lc_busiCarYn.focus();

      scwin.focusTarget = 15;
      return false;
    }
  }

  //업무용차량여부 체크(2017.05.23 개인차량 추가)
  if (ds_txncontents.getCellData(row, "busiCarYn") == 1 || ds_txncontents.getCellData(row, "busiCarYn") == 3) {
    if (ds_txncontents.getCellData(row, "expenseCd") == "") {
      //cfAlertMsg("비용구분을 선택하여 주십시오.");
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, "비용구분을 선택하여 주십시오."));
      // lc_expenseCd.focus();

      scwin.focusTarget = 16;
      return false;
    }
    if (ds_txncontents.getCellData(row, "vehcleNo") == "") {
      //cfAlertMsg("차량번호를 선택하여 주십시오.");
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, "차량번호를 선택하여 주십시오."));
      // ed_vehcleNo.focus();

      scwin.focusTarget = 17;
      return false;
    }
  }
  console.log("===== f_ValidationDs    END ===== ▶▶▶▶   row [" + row + "]");
  return true;
};

// @@ ====== 팝업 - 기타 ======================================================================= //

//-------------------------------------------------------------------------
// 증빙배부 버튼 클릭 (경비분배(증빙별계정) 팝업 로딩)
//-------------------------------------------------------------------------
scwin.f_Evidac = async function (e) {
  console.log("=== f_Evidac (경비분배(증빙별계정) 팝업 로딩)");
  let ret = await $c.gus.cfValidate($p, [ica_slipDt, ed_spplyAmt]);

  // KYU_ISSUE : 체크 안함
  // validExp="공급금액:yes:maxLength=13
  // 공급금액은 0 이면 안됩니다.
  // if ( ed_spplyAmt.getValue() == 0) {
  //     await $c.win.alert($c.data.getMessage(MSG_CM_ERR_002, "공급금액(0 허용안함)"));
  //     return;
  // }

  if (!ret) return false;
  var sum = 0;
  // 공제,불공제 구분에따라 금액이 달라짐
  if (lc_deductClsCd.getValue() == "2") {
    // 불공제이면 가산세 합
    sum = Number(ed_spplyAmt.getValue().trim()) + Number(ed_vatAmt.getValue().trim());
  } else {
    sum = Number(ed_spplyAmt.getValue().trim()); // 공제이면 계산서금액만, 가산세 제외
  }
  console.log(" sum (총액 - 배부총액이 금액과 반드시 일치): " + sum);

  // var style = "center:yes; dialogwidth:840px; dialogheight:540px; scroll:no; resizable:no; status:yes;";
  // var strPath = "fi_201_01_02p.jsp?slipDt="+ed_slipDt.text.trim()+"&sum="+sum+"&rltSeq="+txt_rltSeq.value.trim()+"&upperAcctDeptCd="+vUpperAcctDeptCd;
  // var returnValue = window.showModalDialog(strPath, ds_evidac ,style ) ;

  var dc = ds_evidac.getAllArray();
  console.log("  *** ds_evidac : " + JSON.stringify(dc));
  let data = {
    evidac: dc // getAllArray
    ,

    slipDt: ica_slipDt.getValue().trim() // 전표일자 (작성일자)
    ,

    sum: sum // 총금액
    ,

    rltSeq: scwin.txt_rltSeq // 관련사건저장순번
    ,

    upperAcctDeptCd: scwin.vUpperAcctDeptCd // 상위회계부서코드
    //        , flag        : "Y"                        // 팝업모드 (신규 추가)
  };
  console.log("^^^^^  before 01_02p (경비분배) data " + JSON.stringify(data));
  let win_url = "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_02p.xml";
  let opts = {
    id: "smpPop",
    popupName: "경비분배",
    modal: true,
    type: "browserPopup",
    width: 1180,
    height: 600,
    title: true
  };
  let returnValue = await $c.win.openPopup($p, win_url, opts, data);

  //  console.log("  returnValue ["+returnValue[0]+"]");

  // KYU_TEST : 팝업 리턴값 처리 필수
  if (returnValue != null && returnValue != "N/A") {
    // ds_evidac.ClearData();
    // ds_evidac.ImportData(returnValue);

    console.log("---- 경비분배 리턴 (ds_evidac) returnValue[0] : " + returnValue[0]);
    ds_evidac.setJSON([]);
    // 배열 ==> ds_evidac 로 복사
    ds_evidac.setArray(returnValue[0], true); // append

    var dc = ds_evidac.getAllArray();
    console.log("  *** ds_evidac (" + ds_evidac.getTotalRow() + ") : " + JSON.stringify(dc));
  }
};

//-------------------------------------------------------------------------
// 예산실적 버튼 클릭 (예산실적조회 팝업 로딩)
//-------------------------------------------------------------------------
scwin.f_Budget = async function (e) {
  console.log("=== f_Budget (예산실적조회 팝업 로딩)");
  let ret = await $c.gus.cfValidate($p, [ed_acctDeptCd, ed_acctCd, ica_slipDt]);
  if (!ret) return false;

  // var valueObject = new Object();
  // valueObject.slipAcctDeptCd = ed_acctDeptCd.text.trim();
  // valueObject.slipAcctDeptNm = txt_acctDeptNm.value.trim();
  // valueObject.acctCd = ed_acctCd.text.trim();
  // valueObject.acctNm = txt_acctNm.value.trim();
  // valueObject.slipDt = ed_slipDt.text.trim();

  let data = {
    slipAcctDeptCd: ed_acctDeptCd.getValue().trim() // 신청부서코드 (귀속부서코드)
    ,

    slipAcctDeptNm: ed_acctDeptNm.getValue().trim() // 신청부서명
    ,

    acctCd: ed_acctCd.getValue().trim() // 계정코드
    ,

    acctNm: ed_acctNm.getValue().trim() // 계정명
    ,

    slipDt: ica_slipDt.getValue().trim() // 작성일자
    //        , flag        : "Y"                        // 팝업모드 (신규 추가)
  };

  //console.log("^^^^^ before 01_03 (예산실적조회) data ["+ JSON.stringify(data)+"]");

  let win_url = "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_03p.xml";
  let opts = {
    id: "smpPop",
    popupName: "예산실적조회",
    modal: true,
    type: "browserPopup",
    width: 1180,
    height: 600,
    title: true
  };

  /**
   * @method 
   * @name openPopup
   * @description 팝업창을 연다.
   * @param {String} url url 화면경로
   * @param {Array} opts Popup창 옵션
   * @param {String} options.id Popup창 아이디
   * @param {String} options.type 화면 오픈 타입 ("pageFramePopup", "browserPopup")
   * @param {String} options.width Popup창 넓이
   * @param {String} options.height Popup창 높이
   * @param {String} options.popupName useIframe : true시 popup 객체의 이름으로 popup 프레임의 표시줄에 나타납니다.
   * @param {String} options.useIFrame [default : false] true : IFrame 을 사용하는 WebSquare popup / false: window.open 을 사용하는 popup
   * @param {String} options.style Popup의 스타일을 지정합니다. 값이 있으면 left top width height는 적용되지 않습니다.
   * @param {String} options.resizable [default : false]
   * @param {String} options.modal [default : false]
   * @param {String} options.scrollbars [default : false]
   * @param {String} options.title [default : false]
   * @param {String} options.notMinSize [default : false]
   * @param {Object} data 팝업 화면에 전달할 데이터 객체 (type이 pageFramePopup인 경우만 지원)
   * @hidden N
   * @exception 
   * @example
   */
  // var style = "center:yes; dialogwidth:840px; dialogheight:540px; scroll:no; resizable:no; status:yes;";
  // var strPath = "fi_201_01_03p.jsp";
  // var returnValue = window.showModalDialog(strPath, valueObject ,style ) ;

  let returnValue = await $c.win.openPopup($p, win_url, opts, data);
};

//-------------------------------------------------------------------------
// 전표복사 버튼 클릭 (전표복사(경비전표) 팝업 로딩)  @@ @
//-------------------------------------------------------------------------
scwin.f_SlipCopy = async function (e) {
  console.log("=== f_SlipCopy (전표복사(경비전표) 팝업 로딩)");

  // var parObject = new Object();
  // parObject.slipKndCd = slipKndCd;
  // parObject.slipKndNm = slipKndNm;
  // parObject.pCoCd     =  txtCoCd.value
  // parObject.pCoClsCd  =  txtCoClsCd.value;

  let data = {
    slipKndCd: scwin.slipKndCd // 전표종류코드
    ,

    slipKndNm: scwin.slipKndNm // 전표종류명
    ,

    pCoCd: scwin.txtCoCd // 회사코드
    ,

    pCoClsCd: scwin.txtCoClsCd // 회사종류코드
    //        , flag        : "Y"            // 팝업모드 (신규 추가)
  };

  // var style = "center:yes; dialogwidth:420px; dialogheight:230px; scroll:no; resizable:no; status:yes;";
  // var strPath = "fi_201_01_07p.jsp";
  // var returnValue = window.showModalDialog(strPath, parObject ,style ) ;

  let win_url = "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_07p.xml";
  let opts = {
    id: "smpPop",
    popupName: "전표복사",
    modal: true,
    type: "browserPopup",
    width: 600 // alter 크게 보기
    ,

    height: 400 // alter 크게 보기
    ,

    title: true
  };
  let returnValue = await $c.win.openPopup($p, win_url, opts, data);

  // debugger;
  // 2026-03-04 : N/A 처리 (팝업 그냥 닫기)
  if (returnValue != null && returnValue != "N/A") {
    // 전표복사 플래그
    scwin.isSlipCopy = true;
    scwin.addRowValidPass = false; // 행추가 f_Validation pass

    console.log("");
    console.log(" 전표복사 (txtcopy) [0] [" + JSON.stringify(returnValue[0]) + "]");
    console.log("");
    console.log(" 경비분배 (evidaccopy) [1] [" + JSON.stringify(returnValue[1]) + "]");
    console.log("slipKndNm  [2] [" + returnValue[2] + "]");
    console.log("copyKind   [3] [" + returnValue[3] + "]");

    // cfEnableObjects([ed_slipDt,ed_slipAcctDeptCd,txt_slipAcctDeptNm,img_slipAcctDeptCd,pu_evid,pu_budget,img_acctDeptCd]);
    $c.gus.cfEnableObjects($p, [ica_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm, btn_slipAcctDeptCd, btn_pu_evid, btn_pu_budget, btn_acctDeptCd]);
    console.log("  ==--== 활성 (작성일자, 발행부서코드,발행부서명,발행부서돋보기, 증빙배부버튼, 예산실적버튼, 귀속부서버튼)");
    $c.gus.cfEnableKeyData($p);
    console.log("  ==--== 활성 (전체)");

    // KYU_NEW : 특정 코드명
    $c.gus.cfDisableObjects($p, [ed_acctDeptNm // 귀속부서명
    , ed_vatDeclarAcctDeptNm // 부가세관리부서
    , ed_acctNm // 계정명
    , ed_mgntClntNm // 거래처명
    , udc_mgntEmpNo // 사원번호 전체
    , udc_opntAcctCd // 상대계정 전체
    , ed_pchsAmtSum // 차량별 실적
    ]);
    console.log("  NEW ==--==  비활성 (귀속부서명, 부가세관리부서명, 계정명, 거래처명, 사원번호 전체, 상대계정 전체, 차량별 실적)");

    // cfEnableBtnOnly([bSave]);
    $c.gus.cfEnableBtnOnly($p, [$c.gus.getctrlBtn($p, 'bSave')]);

    // ds_txncontents.ClearData();
    // ds_evidac.ClearData();
    // ds_prov.ClearData();

    ds_txncontents.setJSON([]);
    ds_evidac.setJSON([]);
    ds_prov.setJSON([]);

    // KYU_NEW : 히든 초기화
    scwin.ed_acctCd_hidVal = ""; // 계정
    scwin.ed_acctDeptCd_hidVal = ""; // 귀속부서
    scwin.ed_vatDeclarAcctDeptCd_hidVal = ""; // 부가세관리부서

    scwin.vCopyYn = 1;

    // ds_txncontents.ImportData(Sts);
    var Sts = returnValue[0];
    ds_txncontents.setJSON(Sts, true); // append

    var dc = ds_txncontents.getAllArray();
    // console.log("▶▶▶▶ (전표복사내역)  *** ds_txncontents ["+ds_txncontents.getTotalRow()+"]");
    console.log("▶▶▶▶ (전표복사내역)  *** ds_txncontents [" + ds_txncontents.getTotalRow() + "]  " + JSON.stringify(dc));

    // var dc = ds_txncontents.getAllArray();
    // console.log("  *** ds_txncontents : " + JSON.stringify(dc));

    // ds_evidac.ImportData(returnValue.evidaccopy);
    var Sts2 = returnValue[1];
    ds_evidac.setJSON(Sts2, true); // append

    console.log("▶ ▶ (경비분배내역)  *** ds_evidac [" + ds_evidac.getTotalRow() + "]");
    // var dc = ds_evidac.getAllArray();
    // console.log("  *** ds_evidac : " + JSON.stringify(dc));

    // 복사종류 : 전표복사 리턴값
    scwin.copyKind = returnValue[3];
    console.log("   --- copyKind : " + scwin.copyKind);

    // for( var idx = 1 ; idx <= ds_txncontents.CountRow ; idx++){
    for (var idx = 0; idx < ds_txncontents.getTotalRow(); idx++) {
      // 데이타셋 멤버 보여줌
      // dataSetDebug(ds_txncontents, false);

      // lc_slipKndCd.BindColVal = returnValue.slipKndNm;
      lc_slipKndCd.setValue(returnValue[2]);

      //			if(returnValue.copyKind=="2"){
      // if(returnValue[3] =="2"){   // -복사 : 금액을 - 로 복사
      if (scwin.copyKind == "2") {
        // -복사 : 금액을 - 로 복사
        console.log("[" + idx + "] 복사종류 : -복사 이므로 할인, 공급, 부가세 마이너스 처리");
        ds_txncontents.setCellData(idx, "dcAmt", -1 * parseInt(ds_txncontents.getCellData(idx, "dcAmt")));
        ds_txncontents.setCellData(idx, "spplyAmt", -1 * parseInt(ds_txncontents.getCellData(idx, "spplyAmt")));
        ds_txncontents.setCellData(idx, "vatAmt", -1 * parseInt(ds_txncontents.getCellData(idx, "vatAmt")));
      }

      // 나중에 삭제
      // var i = idx;
      // console.log("  ======= 금액 수정 for 문내 setColumnName 코드명 세팅 ["+i+"]");

      // // KYU_NEW : 추가 역바인딩
      // ds_txncontents.setRowPosition(i);
      // await scwin.f_dsTotxt();

      // for (j=0; j < ds_txncontents.getTotalCol(); j++ ) {
      //     // 인덱스를 받아 컬럼id 로 변환
      //     var lc_columnId = ds_txncontents.getColumnID(j);
      //     scwin.dsCodeNameSetColId = ds_txncontents.getColumnID(j);

      //     if ( 
      //         //  ( lc_columnId == "crn"                 && ds_txncontents.getCellData(i, "crn"         ) != "") ||  // 사업자번호
      //          ( lc_columnId == "acctDeptCd"          && ds_txncontents.getCellData(i, "acctDeptCd"  ) != "")   // 귀속부서

      //         // 귀속부서에서 연속
      //         //  ( lc_columnId == "vatDeclarAcctDeptCd" && ds_txncontents.getCellData(i, "vatDeclarAcctDeptCd") != "" ) ||  // 부가세관리부서
      //         //  ( lc_columnId == "cardNo"              && ds_txncontents.getCellData(i, "cardNo"      ) != "") ||  // 카드번호
      //         //  ( lc_columnId == "acctCd"              && ds_txncontents.getCellData(i, "acctCd"      ) != "") ||  // 계정
      //         //  ( lc_columnId == "mgntClntNo"          && ds_txncontents.getCellData(i, "mgntClntNo"  ) != "") ||  // 거래처
      //         //  ( lc_columnId == "mgntEmpNo"           && ds_txncontents.getCellData(i, "mgntEmpNo"   ) != "") ||  // 관리사원
      //         //  ( lc_columnId == "adjmClntNo"          && ds_txncontents.getCellData(i, "adjmClntNo"  ) != "") ||  // 정산처
      //         //  ( lc_columnId == "opntAcctCd"          && ds_txncontents.getCellData(i, "opntAcctCd"  ) != "") ||  // 상대계정
      //         //  ( lc_columnId == "vehcleNo"            && ds_txncontents.getCellData(i, "vehcleNo"    ) != "") ||  // 차량번호
      //         //  ( lc_columnId == "reqClntNo"           && ds_txncontents.getCellData(i, "reqClntNo"   ) != "")     // 요청거래처
      //        ) {

      //         // KYU_ISSUE
      //         scwin.dsCodeNameSet = true;   // ds에 코드명 세팅여부

      //         // KYU_NEW 코드명 세팅
      //         await scwin.setColumnName(i, lc_columnId);
      //     }
      // }

      // 2026-04-30 : 전표복사 건의 기존 환율 유지용
      ds_txncontents.setCellData(idx, "rowOrigin", "C"); // row발생수단 (C:전표복사, E:엑셀업로드)
    } // for end

    // 나중에 삭제
    // scwin.dsCodeNameSet = false;   // ds에 코드명 세팅여부

    scwin.vCopyYn = 0;

    // KYU_ISSUE
    // 제일 처음 row 로 그리드 세팅
    // var rowCnt = ds_txncontents.getTotalRow();
    // ds_txncontents.setRowPosition(rowCnt - 1);
    var rowCnt = 0;

    // 그리드 포커싱
    // ds_txncontents.setRowPosition(rowCnt);
    gr_txncontents.setFocusedCell(rowCnt, "evidClsNm", false);
    console.log("   ▶▶▶▶ --------- 그리드 focusing (첫번째 row) --------------------------- ▶▶▶▶");

    // KYU_NEW : 활성/비활성 동기화 START
    console.log("  ------------------------------------ KYU_NEW : 활성/비활성 동기화 START ");

    // KYU_NEW : 추가 역바인딩
    await scwin.f_dsTotxt();

    /*
        A.MGNT_NO_CD            AS COL5  /* 05.관리번호코드     *
        TO_CHAR(A.CLNT_MGNT_YN) AS COL6  /* 06.거래처관리코드   *
        TO_CHAR(A.TERM_MGNT_YN) AS COL7  /* 07.기간관리여부     *
        TO_CHAR(A.EMP_MGNT_YN)  AS COL8  /* 08.사원관리여부     *
        TO_CHAR(A.DT_MGNT_YN)   AS COL9  /* 09.일자관리여부     *
    */
    //-------------------------------------------------------------------------
    //  계정조회시화면셋팅
    //  r_empMgntYn  - 사원관리여부
    //  r_termMgntYn - 기간관리여부
    //  r_dtMgntYn   - 일자관리여부
    //  r_clntMgntYn - 거래처(관리)여부
    // //-------------------------------------------------------------------------
    //     var row = rowCnt;
    //     console.log("  -- -- f_AcctCd 호출 (전표복사)   emp["+ds_txncontents.getCellData(row, "empMgntYn")+"] term["+ds_txncontents.getCellData(row, "termMgntYn")
    //            +"] dt["+ds_txncontents.getCellData(row, "dtMgntYn")+"] clnt["+ds_txncontents.getCellData(row, "clntMgntYn")+"]");

    //     let rnta = await scwin.f_AcctCd(
    //                   ds_txncontents.getCellData(rowCnt, "empMgntYn" )
    //                 , ds_txncontents.getCellData(rowCnt, "termMgntYn")
    //                 , ds_txncontents.getCellData(rowCnt, "dtMgntYn"  )
    //                 , ds_txncontents.getCellData(rowCnt, "clntMgntYn")
    //                 );
    //     let rtnc = await scwin.crcCdChange();

    //   1:발행부서,3:계정,4:귀속부서,6:카드번호,7:사업자,8:사원,9:정산처,10:거래처,11:상대계정,12:매출입,13:지점,14:차량별실적,15:요청거래처
    // KYU_TEST : 임시로 F 로 보냄, 원래 T 가 맞음
    // scwin.f_openPopUp( '4','T');  // 귀속부서
    // scwin.f_openPopUp( '3','T');  // 계정

    // 증빙종류 변경 : f_EvidClsCd 실행
    let rtnEvid = await scwin.lc_evidClsCd_onchange();

    // 환율코드 변경 : 외화금액 등 세팅
    let rtnCrc = await scwin.lc_crcCd_onchange();

    // 귀속부서 focus out : 부가세관리부서도 같이 세팅
    // let rtnDept = await scwin.udc_acctDeptCd_onblurCodeEvent();

    console.log("  ------------------------------------ KYU_NEW : 계정 focus out 이후 -------------------");

    // 사업자 focus out : 과세유형 세팅
    // let rtnCrn = await scwin.udc_crn_onblurCodeEvent();

    await scwin.f_openPopUp('7', 'T'); // 사업자 : 과세유형 세팅 -  계정 초기화 가능성 있음

    // 계정 focus out :
    let rtnAcct = await scwin.udc_acctCd_onblurCodeEvent();
    await scwin.f_openPopUp('9', 'T'); // 정산처
    await scwin.f_openPopUp('10', 'T'); // 거래처
    await scwin.f_openPopUp('15', 'T'); // 요청거래처
    // let rtnClnt = await scwin.udc_mgntClntNo_onblurCodeEvent();
    // let rntReq  = await scwin.udc_reqClntNo_onblurCodeEvent();  // 요청거래처

    // KYU_NEW : 활성/비활성 동기화 END
    console.log("  ------------------------------------ KYU_NEW : 활성/비활성 동기화 END -------------------");
    ds_txncontents.setRowPosition(rowCnt);
    let rtn2 = await scwin.f_changeRow2(rowCnt);
    if (!rtn2) {
      scwin.isSlipCopy = false;
      return false;
    }
    console.log("   ▶▷▶▷▶▷▶▷ f_changeRow2 이후  [" + ds_txncontents.getRowPosition() + "] ---------------------------");
  }

  // KYU_NEW : 모든 상태 C 로 변경
  ds_txncontents.modifyAllStatus("C");

  // 전표복사 종료
  scwin.isSlipCopy = false;
  // scwin.isStarted = false;

  // 삭제 아님 - 행이동시 old check
  scwin.state = "N";
  scwin.delflag = "N";
  console.log("=== f_slipCopy END  ===========================================================");
};

//-------------------------------------------------------------------------
// f_dsTotxt 역바인딩
//-------------------------------------------------------------------------
scwin.f_dsTotxt = async function () {
  // KYU_NEW : 추가 역바인딩
  var row = ds_txncontents.getRowPosition();
  console.log("=== f_dsTotxt (역바인딩) row[" + row + "]  vatYn[" + ds_txncontents.getCellData(row, "vatYn") + "] termMgnt[" + ds_txncontents.getCellData(row, "termMgntYn") + "]  limitAmt[" + ds_txncontents.getCellData(row, "limitAmt") + "]");
  scwin.txt_termMgntYn = ds_txncontents.getCellData(row, "termMgntYn"); // 기간관리여부
  scwin.txt_empMgntYn = ds_txncontents.getCellData(row, "empMgntYn"); // 사원관리여부
  scwin.txt_dtMgntYn = ds_txncontents.getCellData(row, "dtMgntYn"); // 일자관리여부
  scwin.txt_clntMgntYn = ds_txncontents.getCellData(row, "clntMgntYn"); // 거래처관리여부

  scwin.txt_bizMgntYn = ds_txncontents.getCellData(row, "bizMgntYn"); // 사업관리여부

  scwin.txt_vatYn = ds_txncontents.getCellData(row, "vatYn"); // 부가세여부

  // console.log("   f_dsTotxt (역바인딩) vatYn["+ds_txncontents.getCellData(row, "vatYn" )+"] termMgnt["+ds_txncontents.getCellData(row, "termMgntYn" )+"]  limitAmt["+ds_txncontents.getCellData(row, "limitAmt" )+"]");
  scwin.txt_cardNoYn = ds_txncontents.getCellData(row, "cardNoYn"); // 카드번호여부
  scwin.txt_frchNoYn = ds_txncontents.getCellData(row, "frchNoYn"); // 가맹점번호여부
  scwin.txt_deductClsYn = ds_txncontents.getCellData(row, "deductClsYn"); // 공제구분여부
  scwin.txt_limitAmt = ds_txncontents.getCellData(row, "limitAmt"); // 한계금액

  scwin.txt_costClsCd = ds_txncontents.getCellData(row, "costClsCd"); // 비용구분코드

  scwin.txt_acctClsCd = ds_txncontents.getCellData(row, "acctClsCd"); // 계정구분코드
  scwin.txtMgntClntCrn = ds_txncontents.getCellData(row, "mgntClntCrn"); // 관리거래처코드

  scwin.txt_bizDomCd = ds_txncontents.getCellData(row, "bizDomCd"); // 사업영역코드
};

//-------------------------------------------------------------------------
// 기타금액 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_etcAmt_onclick = function (e) {
  scwin.f_EtcAmt();
};

//-------------------------------------------------------------------------
// 경비전표 기타금액 입력 팝업
//-------------------------------------------------------------------------
scwin.f_EtcAmt = async function (e) {
  console.log("=== f_EtcAmt (경비전표 기타금액 입력 팝업)");
  // var valueObject = new Object();

  // valueObject.costClsCd   =   txt_costClsCd.value;                // 변동비구분값
  // valueObject.slipDt      =   ed_slipDt.text.trim();      //
  // valueObject.bizDomCd    =   txt_bizDomCd.value ;        //
  // valueObject.evidClsCd   =   lc_evidClsCd.bindColVal;    // 증빙종류

  // valueObject.etcAcctCd1  =   ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAcctCd1");      // 기타금액1 계정
  // valueObject.etcAcctNm1  =   ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAcctNm1");      // 기타금액1 계정
  // valueObject.etcAmt1     =   ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAmt1");         // 기타금액1 금액
  // valueObject.etcSummary1 =   ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcSummary1");     // 기타금액1 적요
  // valueObject.etcAcctCd2  =   ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAcctCd2");      // 기타금액2 계정
  // valueObject.etcAcctNm2  =   ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAcctNm2");      // 기타금액1 계정
  // valueObject.etcAmt2     =   ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAmt2");         // 기타금액2 금액
  // valueObject.etcSummary2 =   ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcSummary2");     // 기타금액2 적요
  // valueObject.etcAcctCd1  =   ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAcctCd1");      // 기타금액1 계정

  let data = {
    costClsCd: scwin.txt_costClsCd // 변동비구분값
    ,

    slipDt: ica_slipDt.getValue().trim() //
    ,

    bizDomCd: scwin.txt_bizDomCd,
    evidClsCd: lc_evidClsCd.getValue() // 증빙종류
    ,

    etcAcctCd1: ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "etcAcctCd1") // 기타금액1 계정
    ,

    etcAcctNm1: ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "etcAcctNm1") // 기타금액1 계정
    ,

    etcAmt1: ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "etcAmt1") // 기타금액1 금액
    ,

    etcSummary1: ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "etcSummary1") // 기타금액1 적요
    ,

    etcAcctCd2: ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "etcAcctCd2") // 기타금액2 계정
    ,

    etcAcctNm2: ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "etcAcctNm2") // 기타금액1 계정
    ,

    etcAmt2: ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "etcAmt2") // 기타금액2 금액
    ,

    etcSummary2: ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "etcSummary2") // 기타금액2 적요
    ,

    etcAcctCd1: ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "etcAcctCd1") // 기타금액1 계정
  };

  // let returnValue = await $c.win.openPopup(win_url, opts, data);
  // var returnValue = window.showModalDialog("/ac/fi/gnrlaccount/slipmgnt/fi_201_01_01p.jsp", valueObject,
  //                                             "dialogWidth:430px; dialogHeight:300px; status:no; scroll:no");

  let win_url = "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_01p.xml";
  let opts = {
    id: "smpPop",
    popupName: "경비전표 기타금액입력",
    modal: true,
    type: "browserPopup",
    width: 600,
    height: 500,
    title: "경비전표 기타금액입력"
  };
  var rt = await $c.win.openPopup($p, win_url, opts, data);
  console.log("rt [" + rt + "]");
  if (rt != null) {
    console.log(" rt s0 [" + JSON.stringify(rt[0]) + "]");
    console.log(" rt s1 [" + JSON.stringify(rt[1]) + "]");
    console.log(" rt s2 [" + rt[2] + "]");
    console.log(" rt etcAcctCd1 [" + JSON.stringify(rt.etcAcctCd1) + "]");
    console.log(" rt etcAcctCd1 [" + rt.etcAcctCd1 + "]");

    // ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAcctCd1")   = returnValue.etcAcctCd1;       // 기타금액1 계정
    // ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAcctNm1")   = returnValue.etcAcctNm1;       // 기타금액1 계정
    // ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAmt1")      = returnValue.etcAmt1;          // 기타금액1 금액
    // ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcSummary1")  = returnValue.etcSummary1;      // 기타금액1 적요
    // ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAcctCd2")   = returnValue.etcAcctCd2;       // 기타금액2 계정
    // ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAcctNm2")   = returnValue.etcAcctNm2;       // 기타금액2 계정
    // ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAmt2")      = returnValue.etcAmt2;          // 기타금액2 금액
    // ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcSummary2")  = returnValue.etcSummary2;      // 기타금액2 적요

    ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "etcAcctCd1", rt[0]); // 기타금액1 계정
    ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "etcAcctNm1", rt[1]); // 기타금액1 계정
    ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "etcAmt1", rt[2]); // 기타금액1 금액
    ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "etcSummary1", rt[3]); // 기타금액1 적요
    ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "etcAcctCd2", rt[4]); // 기타금액2 계정
    ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "etcAcctNm2", rt[5]); // 기타금액2 계정
    ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "etcAmt2", rt[6]); // 기타금액2 금액
    ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "etcSummary2", rt[7]); // 기타금액2 적요
  }
};

//-------------------------------------------------------------------------
// 부가세귀속부서 popup : fi_100_06_01p.xml 
//-------------------------------------------------------------------------
scwin.f_VatDeclarAcctDeptCd = async function (str) {
  console.log("=== f_VatDeclarAcctDeptCd (부가세귀속부서조회 팝업)  str [" + str + "]  1: 돋보기 클릭  2: 부서  3: 부가세관리부서로 부서명");

  // if (ed_acctDeptCd.getValue() == "") {
  if ($c.gus.cfIsNull($p, ed_acctDeptCd.getValue())) {
    if (scwin.isSlipCopy != true) {
      // cfAlertMsg(MSG_CM_ERR_002,Array("귀속부서"));
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "귀속부서"));
      console.log("  f_VatDeclarAcctDeptCd - ed_acctDeptCd (귀속부서) 로 포커싱  ========");
      ed_vatDeclarAcctDeptCd.setValue("");
      ed_acctDeptCd.focus();
      return;
    }
    return;
  }
  var param = "," + ed_acctDeptCd.getValue() + ",1";
  var check = "";
  var popTemp = "";

  // popup 버튼 눌렀을경우
  if (str == "1") {
    // param = ",,1,"+ txtCoCd.value+","+ txtCoClsCd.value+","+ed_txnDt.text.substring(0,4);
    // 2026-01-16 : 파라미터 변경 : 귀속부서코드 추가
    // dept 1 coCd coClsCd slipDt
    param = "," + ed_acctDeptCd.getValue() + ",1," + scwin.txtCoCd + "," + scwin.txtCoClsCd + "," + ica_txnDt.getValue().substring(0, 4);
    console.log("  1 버튼 누름 - param [" + param + "]");
    check = "F";
    popTemp = "";
    udc_vatDeclarAcctDeptCd.setSelectId("retrieveVatDeclarAcctDeptCd");
    if (!scwin.popupAsyncFlag) {
      console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");
      udc_vatDeclarAcctDeptCd.cfCommonPopUp(scwin.udc_vatDeclarAcctDeptCd_callBackFunc1, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check, null, null, null, null, param, 1000, 520, null, null);
    } else {
      await udc_vatDeclarAcctDeptCd.cfCommonPopUpAsync(scwin.udc_vatDeclarAcctDeptCd_callBackFunc1, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check, null, null, null, null, param, 1000, 520, null, null);
    }

    // 부서에서 넘어왔을 경우
  } else if (str == "2") {
    // param = ","+ed_acctDeptCd.text+","+ txtCoCd.value+","+ txtCoClsCd.value+","+ed_txnDt.text.substring(0,4);

    // 2026-03-10 : 파라미터 변경
    // param = "," + ed_acctDeptCd.getValue() /* 4 */ + "," + scwin.txtCoCd /* 5 */ + "," + scwin.txtCoClsCd /* 6 */ + "," + ica_txnDt.getValue().substring(0, 4) /* 7 */;
    param = "," + ed_acctDeptCd.getValue() /*4*/ + "," + scwin.txtCoCd + "," + scwin.txtCoClsCd + "," + ica_txnDt.getValue().substring(0, 4) /*7*/;
    console.log("  2 부서 넘어옴 - param [" + param + "]");
    check = "T"; // 팝업 안보여야 함
    ed_vatDeclarAcctDeptCd.setValue("");
    popTemp = "ZZ";
    udc_vatDeclarAcctDeptCd.setSelectId("retrieveVatDeclarAcctDeptCdAcctDeptCd");
    if (!scwin.popupAsyncFlag) {
      console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");

      // param1:  부가세관리부서코드, 2: popTemp,  3: crn,  4: 회계부서,  5: 회사,  6: 회사구분,   8: 계산년도(7 이 Not Empty 일 때)
      // rtnList = cfCommonPopUp(sqlID,ed_vatDeclarAcctDeptCd.text.trim(),popTemp,check,null,null,null,null,param,null,null,null,null);
      udc_vatDeclarAcctDeptCd.cfCommonPopUp(scwin.udc_vatDeclarAcctDeptCd_callBackFunc2, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp /* 2 */, check, null, null, null, null, param, 1000, 520, null, null);
    } else {
      await udc_vatDeclarAcctDeptCd.cfCommonPopUpAsync(scwin.udc_vatDeclarAcctDeptCd_callBackFunc2, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp /* 2 */, check, null, null, null, null, param, 1000, 520, null, null);
    }

    // 부가세관리부서에 값을넣고 명을 찾을 경우
  } else if (str == "3") {
    // param = ",,1,"+ txtCoCd.value+","+ txtCoClsCd.value+","+ed_txnDt.text.substring(0,4);

    // 2026-01-16 : 파라미터 변경 : 귀속부서코드 추가
    // dept 1 coCd coClsCd slipDt
    param = "," + ed_acctDeptCd.getValue() + ",1," + scwin.txtCoCd + "," + scwin.txtCoClsCd + "," + ica_txnDt.getValue().substring(0, 4);
    console.log(" 3 부가세관리부서 명 찾음 - param [" + param + "]");
    check = "T";
    popTemp = "";
    udc_vatDeclarAcctDeptCd.setSelectId("retrieveVatDeclarAcctDeptCd");
    if (!scwin.popupAsyncFlag) {
      console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");
      //rtnList = cfCommonPopUp(sqlID,ed_vatDeclarAcctDeptCd.text.trim(),popTemp,check,null,null,null,null,param,null,null,null,null);    
      udc_vatDeclarAcctDeptCd.cfCommonPopUp(scwin.udc_vatDeclarAcctDeptCd_callBackFunc3, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check, null, null, null, null, param, 1000, 520, null, null);
    } else {
      await udc_vatDeclarAcctDeptCd.cfCommonPopUpAsync(scwin.udc_vatDeclarAcctDeptCd_callBackFunc3, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check, null, null, null, null, param, 1000, 520, null, null);
    }
  }
};

//-------------------------------------------------------------------------
// udc_vatDeclarAcctDeptCd_callBackFunc1 (부가세귀속부서조회 팝업 callBackFunc 1)
//-------------------------------------------------------------------------
scwin.udc_vatDeclarAcctDeptCd_callBackFunc1 = async function (rtnList) {
  console.log("▷ udc_vatDeclarAcctDeptCd_callBackFunc1 (부가세귀속부서조회 팝업 callBackFunc 1) - 돋보기버튼");
  console.log("   rtnList [" + rtnList + "]");

  // 2025-11-06 : 신규 생성. 쿼리 별로 콜백은 다르지만 처리는 한곳에서 함
  await scwin.afterVatDeclarAcctDeptCdPopup(rtnList);
};

//-------------------------------------------------------------------------
// udc_vatDeclarAcctDeptCd_callBackFunc2 (부가세귀속부서조회 팝업 callBackFunc 2)
//-------------------------------------------------------------------------
scwin.udc_vatDeclarAcctDeptCd_callBackFunc2 = async function (rtnList) {
  console.log("▷ udc_vatDeclarAcctDeptCd_callBackFunc2 (부가세귀속부서조회 팝업 callBackFunc 2 ) - 부서에서 넘어왔을 경우");
  console.log("   rtnList [" + rtnList + "]");

  // 2025-11-06 : 신규 생성. 쿼리 별로 콜백은 다르지만 처리는 한곳에서 함
  await scwin.afterVatDeclarAcctDeptCdPopup(rtnList);
};

//-------------------------------------------------------------------------
// udc_vatDeclarAcctDeptCd_callBackFunc3 (부가세귀속부서조회 팝업 callBackFunc 2)
//-------------------------------------------------------------------------
scwin.udc_vatDeclarAcctDeptCd_callBackFunc3 = async function (rtnList) {
  console.log("▷ udc_vatDeclarAcctDeptCd_callBackFunc3 (부가세귀속부서조회 팝업 callBackFunc 3) - 부가세관리부서에 값을넣고 명을 찾을 경우");
  console.log("   rtnList [" + rtnList + "]");

  // 2025-11-06 : 신규 생성. 쿼리 별로 콜백은 다르지만 처리는 한곳에서 함
  await scwin.afterVatDeclarAcctDeptCdPopup(rtnList);
};

//-------------------------------------------------------------------------
// 부가세귀속부서조회 통합처리
//-------------------------------------------------------------------------
scwin.afterVatDeclarAcctDeptCdPopup = async function (rtnList) {
  console.log("▷ afterVatDeclarAcctDeptCdPopup (부가세귀속부서조회 통합처리)  rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 2026-02-02
      scwin.ed_vatDeclarAcctDeptCd_hidVal = ""; //히든값
      ed_vatCrn.setValue("");
      return;
    }
    // ed_vatDeclarAcctDeptCd.text  = rtnList[2];		//부가세부서코드
    // txt_vatDeclarAcctDeptNm.value = rtnList[3];		//부가세부서명
    // txt_vatCrn.value  = rtnList[5];                 //부가세사업자번호
    // ed_vatDeclarAcctDeptCd.hidVal = rtnList[2];  	//히든값
    ed_vatDeclarAcctDeptCd.setValue(rtnList[2]); //부가세부서코드
    ed_vatDeclarAcctDeptNm.setValue(rtnList[3]); //부가세부서명
    ed_vatCrn.setValue(rtnList[5]); //부가세사업자번호
    scwin.ed_vatDeclarAcctDeptCd_hidVal = rtnList[2]; //히든값
  } else {
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    ed_vatCrn.setValue(""); //부가세사업자번호
    scwin.ed_vatDeclarAcctDeptCd_hidVal = "";
  }
};

// @@ ====== 이벤트 - 팝업 ======================================================================//

//-------------------------------------------------------------------------
// 발행부서 (조회) focus out
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCd_onblurCodeEvent = function (e) {
  console.log("    ■ ----- udc_slipAcctDeptCd_onblurCodeEvent (발행부서코드 focus out)");
  /*language=JavaScript for=ed_slipAcctDeptCd event=OnKillFocus()>
      txt_slipAcctDeptNm.value = "";
      f_checkPopEd(ed_slipAcctDeptCd,txt_slipAcctDeptNm,'1');
  */
  ed_slipAcctDeptNm.setValue("");
  scwin.f_checkPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, '1');
};

//-------------------------------------------------------------------------
// 발행부서명 focus out
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCd_onblurNameEvent = function (e) {
  console.log("     ■ ----- udc_slipAcctDeptCd_onblurNameEvent (발행부서명 focus out) : strCd 널로 날아감");
  // INPUT type="TEXT" class=input_text id=txt_slipAcctDeptNm size=13  name="txt_slipAcctDeptNm"  mandatory="true" onChange="f_checkPopEd('',txt_slipAcctDeptNm,'1');">
  scwin.f_checkPopEd("", ed_slipAcctDeptNm, "1");
};

//-------------------------------------------------------------------------
// 계정코드 focus out
//-------------------------------------------------------------------------
scwin.udc_acctCd_onblurCodeEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  // if ( scwin.dsCodeNameSet != true ) return;

  console.log("----- udc_acctCd_onblurCodeEvent (계정코드 focus out)");
  // language=JavaScript for=ed_acctCd event=OnKillFocus()>
  //     txt_acctNm.value = "";                    
  //     f_checkPopEd(ed_acctCd,txt_acctNm,'3');

  ed_acctNm.setValue("");
  if (scwin.vCoCd != "023") {
    //BIDC 예외처리 2020.12.17
    if (ed_acctCd.getValue() == "4203417") {
      await $c.win.alert($p, "원)세금과공과-과징금(4203417) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
      ed_acctCd.setValue("");
      ed_acctNm.setValue("");
      // 2026-02-02
      scwin.ed_acctCd_hidVal = "";
      return;
    } else if (ed_acctCd.getValue() == "5001917") {
      await $c.win.alert($p, "판)세금과공과-과징금(5001917) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
      ed_acctCd.setValue("");
      ed_acctNm.setValue("");
      // 2026-02-02
      scwin.ed_acctCd_hidVal = "";
      return;
    }
  }
  await scwin.f_checkPopEd(ed_acctCd, ed_acctNm, '3');
};

//-------------------------------------------------------------------------
// 귀속부서코드 focus out
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  // if ( scwin.dsCodeNameSet != true ) return;

  console.log("----- udc_acctDeptCd_onblurCodeEvent (귀속부서코드 focus out)  !!!");

  // language=JavaScript for=ed_acctDeptCd event=OnKillFocus()>
  //     if(ed_txnDt.text=="")
  //     {
  //         alert("계산서일자를 먼저 입력해 주세요.");
  //         ed_acctDeptCd.text = "";
  //         ed_txnDt.focus();
  //     }
  //     else
  //     {
  //         txt_acctDeptNm.value = "";
  //         f_checkPopEd(ed_acctDeptCd,txt_acctDeptNm,'4');
  //     }
  //     ed_acctCd.text = '';
  //     txt_acctNm.value = "";
  //     ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAcctCd1")	= ""; 
  //     ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAcctNm1")	= ""; 
  //     ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAmt1")		= ""; 
  //     ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcSummary1")	= ""; 
  //     ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAcctCd2")	= ""; 
  //     ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAcctNm2")	= ""; 
  //     ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcAmt2")		= ""; 
  //     ds_txncontents.NameValue(ds_txncontents.RowPosition,"etcSummary2")	= "";  

  if (ica_txnDt.getValue() == "") {
    await $c.win.alert($p, "계산서일자를 먼저 입력해 주세요.");
    ed_acctDeptCd.setValue("");
    //ed_txnDt.focus();

    // console.log("  계산서일자로 포커싱");
    ica_txnDt.focus();

    // KYU_TEST 신규 추가
    // return;
  } else {
    ed_acctDeptNm.setValue("");
    await scwin.f_checkPopEd(ed_acctDeptCd, ed_acctDeptNm, '4');
  }

  // 전표복사 시에는 실행하면 안됨 (계정,기타금액 다 지워짐)
  if (scwin.isSlipCopy != true) {
    console.log("  ---- 기타금액 일괄 삭제");
    ed_acctCd.setValue("");
    ed_acctNm.setValue("");
    ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "etcAcctCd1", "");
    ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "etcAcctNm1", "");
    ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "etcAmt1", "");
    ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "etcSummary1", "");
    ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "etcAcctCd2", "");
    ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "etcAcctNm2", "");
    ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "etcAmt2", "");
    ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "etcSummary2", "");
  }
};

//-------------------------------------------------------------------------
// 지점코드 focus out (사용안함)
//-------------------------------------------------------------------------
scwin.udc_branchCd_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_branchCd event=OnKillFocus()>
  // if (ed_branchNm.getValue() == "" && ed_branchCd.getValue().trim() != "") {
  //     scwin.f_openPopUp('13', 'T', 'CD');
  // }

  // 2025-11-13 : 동일한 이벤트 중 아래 이벤트 삭제
  //language=JavaScript for=ed_branchCd event=OnKillFocus()>
  // scwin.f_checkPopEd(ed_branchCd,txt_branchNm,'13');
};
//-------------------------------------------------------------------------
// 매입항목코드 focus out (의미 없음)
//-------------------------------------------------------------------------
scwin.udc_pchsItemCd_onblurCodeEvent = function (e) {
  // <!-- 매입항목코드 -->
  // language=JavaScript for=ed_pchsItemCd event=OnKillFocus()>
  // if (ed_pchsItemNm.getValue() == "" && ed_pchsItemCd.getValue().trim() != "") {
  //     scwin.f_openPopUp('12', 'T');
  // }

  // 2025-11-13 : 동일한 이벤트 중 아래 이벤트 삭제
  // language=JavaScript for=ed_pchsItemCd event=OnKillFocus()>
  // scwin.f_checkPopEd(ed_pchsItemCd,ed_pchsItemNm,'12');
};

//-------------------------------------------------------------------------
// 부가세관리부서코드 focus out
//-------------------------------------------------------------------------
scwin.udc_vatDeclarAcctDeptCd_onblurCodeEvent = function (e) {
  if (scwin.loadCompleted != true) return;
  // if ( scwin.dsCodeNameSet != true ) return;

  console.log("   ******* udc_vatDeclarAcctDeptCd_onblurCodeEvent (부가세관리부서)");
  //  language=JavaScript for=ed_vatDeclarAcctDeptCd event=OnKillFocus()>

  if (ed_vatDeclarAcctDeptCd.getValue().trim() == scwin.ed_vatDeclarAcctDeptCd_hidVal) if (ed_vatDeclarAcctDeptCd.getValue() != "") {
    console.log("   return 부가세코드 [" + ed_vatDeclarAcctDeptCd.getValue() + "]  hid [" + scwin.ed_vatDeclarAcctDeptCd_hidVal + "]");
    return;
  }
  ed_vatDeclarAcctDeptNm.setValue("");
  ed_vatCrn.setValue(""); // 부가세사업자번호
  scwin.ed_vatDeclarAcctDeptCd_hidVal = "";
  if (ed_vatDeclarAcctDeptCd.getValue().trim() != "") {
    console.log("    클리어 하고 다시 조회 : 부가세코드 [" + ed_vatDeclarAcctDeptCd.getValue() + "]  hid [" + scwin.ed_vatDeclarAcctDeptCd_hidVal + "]");
    scwin.f_VatDeclarAcctDeptCd('3');
  }
};

//-------------------------------------------------------------------------
// 카드번호 focus out
//-------------------------------------------------------------------------
scwin.udc_cardNo_onblurCodeEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  // if ( scwin.dsCodeNameSet != true ) return;

  // language=JavaScript for=ed_cardNo event=OnKillFocus()>
  await scwin.f_checkPopEd(ed_cardNo, ed_cardNm, '6');
};

//-------------------------------------------------------------------------
// 사업자번호 focus out : 과세구분 세팅
//-------------------------------------------------------------------------
scwin.udc_crn_onblurCodeEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  // if ( scwin.dsCodeNameSet != true ) return;

  // <!-- 사업자번호 변경 -->
  //  language=JavaScript for=ed_crn event=OnKillFocus()>    
  //     if (ed_crn.text.trim() == ed_crn.hidVal)
  //             return;    
  //     if(txt_frchNoYn.value=="1"){
  //             txt_frchCrn.value = ed_crn.text.trim();
  //     }else{
  //             txt_frchCrn.value = "";
  //             lc_taxnCls.BindColVal = "";
  //     }
  //     if(txt_clntMgntYn.value!="1" && txt_frchNoYn.value=="1"){
  //         ed_crn.hidVal = ed_crn.text.trim();
  //     }else{           
  //         txt_crnNm.value="";
  //         ed_crn.hidVal = "";
  //         lc_taxnCls.BindColVal = "";    
  //         if(ed_crn.text.trim()!="") f_openPopUp('7','T');
  //     }
  //     if(ed_crn.text == "" ){
  //         vCrn = "";
  //     }

  if (ed_crn.getValue().trim() == scwin.ed_crn_hidVal) {
    // console.log("  코드=히든 동일하여 리턴... ["+ed_crn.getValue()+"]["+scwin.ed_crn_hidVal+"]");
    return;
  }
  if (scwin.txt_frchNoYn == "1") {
    // 가맹점번호여부
    scwin.txt_frchCrn = ed_crn.getValue().trim(); // 가맹점사업자등록번호
  } else {
    scwin.txt_frchCrn = ""; // 가맹점사업자등록번호
    lc_taxnCls.setValue("");
  }

  // KYU_NEW : 추가 바인딩
  var row = ds_txncontents.getRowPosition();
  ds_txncontents.setCellData(row, "frchCrn", scwin.txt_frchCrn); // 가맹점사업자등록번호
  // ds_txncontents.setCellData(row, "frchNm" , scwin.txt_frchNm );  // 가맹점명

  if (scwin.txt_clntMgntYn != "1" && scwin.txt_frchNoYn == "1") {
    scwin.ed_crn_hidVal = ed_crn.getValue().trim();
  } else {
    ed_crnNm.setValue("");
    scwin.ed_crn_hidVal = "";
    lc_taxnCls.setValue("");
    if (ed_crn.getValue().trim() != "") await scwin.f_openPopUp('7', 'T');
  }
  if (ed_crn.getValue() == "") {
    scwin.vCrn = "";
  }
};

//-------------------------------------------------------------------------
// 사원번호 focus out
//-------------------------------------------------------------------------
scwin.udc_mgntEmpNo_onblurCodeEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  // if ( scwin.dsCodeNameSet != true ) return;

  //language=JavaScript for=ed_mgntEmpNo event=OnKillFocus()>
  await scwin.f_checkPopEd(ed_mgntEmpNo, ed_mgntEmpNm, '8');
};

//-------------------------------------------------------------------------
// 정산처코드 focus out
//-------------------------------------------------------------------------
scwin.udc_adjmClntNo_onblurCodeEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  // if ( scwin.dsCodeNameSet != true ) return;

  // language=JavaScript for=ed_adjmClntNo event=OnKillFocus()>
  console.log("----- udc_adjmClntNo_onblurCodeEvent (정산처코드 focus out)");
  ed_adjmClntNm.setValue("");
  await scwin.f_checkPopEd(ed_adjmClntNo, ed_adjmClntNm, '9');
};

//-------------------------------------------------------------------------
// 거래처코드 focus out
//-------------------------------------------------------------------------
scwin.udc_mgntClntNo_onblurCodeEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  // if ( scwin.dsCodeNameSet != true ) return;

  // language=JavaScript for=ed_mgntClntNo event=OnKillFocus()>
  await scwin.f_checkPopEd(ed_mgntClntNo, ed_mgntClntNm, '10');
  if (ed_mgntClntNo.getValue() == "") {
    scwin.vClntCrn = "";
    scwin.txtMgntClntCrn = "";
  }

  // KYU_NEW  거래처사업자번호
  var row = ds_txncontents.getRowPosition();
  ds_txncontents.setCellData(row, "mgntClntCrn", scwin.txtMgntClntCrn);
};

//-------------------------------------------------------------------------
// 요청거래처코드 focus out
//-------------------------------------------------------------------------
scwin.udc_reqClntNo_onblurCodeEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  // if ( scwin.dsCodeNameSet != true ) return;

  //language=JavaScript for=ed_reqClntNo event=OnKillFocus()>
  await scwin.f_checkPopEd(ed_reqClntNo, ed_reqClntNm, '15');
};

//-------------------------------------------------------------------------
// 차량번호 focus out
//-------------------------------------------------------------------------
scwin.udc_vehcleNo_onblurCodeEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  console.log("----- udc_vehcleNo_onblurCodeEvent (포커스 아웃)");
  //language=JavaScript for=ed_vehcleNo event=OnKillFocus()>
  await scwin.f_vehclNoPopup(ed_vehcleNo.getValue(), "");
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 발행부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'T');
};

//-------------------------------------------------------------------------
// 사업자번호 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_crn_onclickEvent = function (e) {
  scwin.f_openPopUp('7', 'T');
};

//-------------------------------------------------------------------------
// 계정 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_acctCd_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'T');
};

//-------------------------------------------------------------------------
// 지점 돋보기 클릭 (RcfBranchAcctDeptPop)
//-------------------------------------------------------------------------
scwin.udc_branchCd_onclickEvent = function (e) {
  scwin.f_openPopUp('13', 'F', 'IMG');
};

//-------------------------------------------------------------------------
// 매입항목 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_pchsItemCd_onclickEvent = function (e) {
  scwin.f_openPopUp('12', 'F');
};

//-------------------------------------------------------------------------
// 귀속부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('4', 'T');
};

//-------------------------------------------------------------------------
// 부가세관리부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_vatDeclarAcctDeptCd_onclickEvent = function (e) {
  scwin.f_VatDeclarAcctDeptCd('1');
};

//-------------------------------------------------------------------------
// 카드번호 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_cardNo_onclickEvent = function (e) {
  scwin.f_openPopUp('6', 'F');
};

//-------------------------------------------------------------------------
// 거래처 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_mgntClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('10', 'T');
};

//-------------------------------------------------------------------------
// 사원 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_mgntEmpNo_onclickEvent = function (e) {
  scwin.f_openPopUp('8', 'T');
};

//-------------------------------------------------------------------------
// 정산방법 돋보기 클릭
//-------------------------------------------------------------------------
scwin.btn_adjmClsCd_onclick = async function (e) {
  await scwin.f_Prepay(lc_adjmClsCd.getValue());
};

//-------------------------------------------------------------------------
// 정산처 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_adjmClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('9', 'T');
};

//-------------------------------------------------------------------------
// 상대계정 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_opntAcctCd_onclickEvent = function (e) {
  scwin.f_openPopUp('11', 'T');
};

//-------------------------------------------------------------------------
// 차량별실적 돋보기 클릭
//-------------------------------------------------------------------------
scwin.btn_pchsAmtSum_onclick = function (e) {
  scwin.f_openPopUp('14', 'F');
};

//-------------------------------------------------------------------------
// 요청거래처 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_reqClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('15', 'T');
};

//-------------------------------------------------------------------------
//  차량번호 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_vehcleNo_onclickEvent = function (e) {
  console.log("--- udc_vehcleNo_onclickEvent (돋보기)");
  scwin.f_vehclNoPopup(ed_vehcleNo.getValue(), ed_vehcleNm.getValue());
};

//-------------------------------------------------------------------------
// 차량번호 팝업
//-------------------------------------------------------------------------
scwin.f_vehclNoPopup = async function (cd, nm) {
  console.log("=== === f_vehclNoPopup (차량번호팝업)");
  var vehcleNo = cd;
  var vehcleNm = nm;
  if (lc_busiCarYn.getValue() == 1) {
    //차량조회 팝업
    //차량조회 업무용차량 팝업으로 변경 (2017.12.19)
    //rtnList = cfCommonPopUp('retrieveWorkVehclInfo',vehcleNo,vehcleNm,"T",null,null,null,null,null,",,,,,,","450","500",null,null); 
    console.log("   --- - lc_busiCarYn [" + lc_busiCarYn.getValue() + "] 차량조회 팝업 vehcleNo [" + vehcleNo + "] vehcleNm [" + vehcleNm + "]  retrieveWorkVehclInfo");
    udc_vehcleNo.setSelectId("retrieveWorkVehclInfo");
    udc_vehcleNo.cfCommonPopUp(scwin.vehcleNo_callBackFunc, vehcleNo, vehcleNm, "T", null, null, null, null, null, ",,,,,,", "450", "500", null, null);

    // if (rtnList != null) {
    //     ed_vehcleNo.setValue(rtnList[0]); // 단축코드
    //     ed_vehcleNm.setValue(rtnList[1]); // 차량번호
    // } else {
    //     ed_vehcleNo.setValue("");
    //     ed_vehcleNm.setValue("");
    // }
  } else if (lc_busiCarYn.getValue() == 3) {
    //개인차량 팝업 
    // rtnList = cfCommonPopUp('retrievePersonVehclInfo',vehcleNo,vehcleNm,"T",null,null,null,null,null,",,,,,,","450","500",null,null); 
    console.log("   --- - lc_busiCarYn [" + lc_busiCarYn.getValue() + "] 개인차량조회 팝업 vehcleNo [" + vehcleNo + "] vehcleNm [" + vehcleNm + "]  retrievePersonVehclInfo");
    udc_vehcleNo.setSelectId("retrievePersonVehclInfo");
    udc_vehcleNo.cfCommonPopUp(scwin.vehcleNo_callBackFunc, vehcleNo, vehcleNm, "T", null, null, null, null, null, ",,,,,,", "450", "500", null, null);

    // if (rtnList != null) {
    //     ed_vehcleNo.setValue(rtnList[0]); // 단축코드
    //     ed_vehcleNm.setValue(rtnList[1]); // 차량번호
    // } else {
    //     ed_vehcleNo.setValue("");
    //     ed_vehcleNm.setValue("");
    // }
  }
};

//-------------------------------------------------------------------------
// f_openPopUp 팝업  @@
//   1:발행부서,3:계정,4:귀속부서,6:카드번호,7:사업자,8:사원,9:정산처,10:거래처,11:상대계정,12:매출입,13:지점,14:차량별실적,15:요청거래처
//-------------------------------------------------------------------------
// 파라미터 갯수 맞춤
scwin.f_openPopUp = async function (flag, check) {
  console.log(" -- PPP --  f_openPopUp ( flag[ " + flag + " ]  check[ " + check + " ]  1:발행부서,3:계정,4:귀속부서,7:사업자,8:사원,9:정산처,10:거래처,11:상대계정,12:매출입,13:지점,14:차량별실적,15:요청거래처)");
  switch (flag) {
    case '1':
      // 발행부서 (조회)
      var param = ica_slipDt.getValue().trim() + ",,,,";
      if (scwin.isSubCompany == true) {
        param = ica_slipDt.getValue().trim() + ",," + scwin.txtCoCd + "," + scwin.txtCoClsCd;
      }

      // KYU_NEW : 팝업 뜨지않도록 함
      param = ica_slipDt.getValue().trim() + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;
      console.log("  발행부서 popup  param [" + param + "]");
      if (!scwin.popupAsyncFlag) {
        //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo3',ed_slipAcctDeptCd.text.trim(),txt_slipAcctDeptNm.value,check,null,null,null,null,param,null,null,null,null);
        udc_slipAcctDeptCd.cfCommonPopUp(scwin.udc_slipAcctDeptCd_callBackFunc, ed_slipAcctDeptCd.getValue(), ed_slipAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_slipAcctDeptCd.cfCommonPopUpAsync(scwin.udc_slipAcctDeptCd_callBackFunc, ed_slipAcctDeptCd.getValue(), ed_slipAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '3':
      // 계정

      // 귀속부서에 입력값이 없으면 에러메세지 출력
      // if (ed_acctDeptCd.getValue() == "") {
      if ($c.gus.cfIsNull($p, ed_acctDeptCd.getValue())) {
        if (scwin.isSlipCopy != true) {
          await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "귀속부서"));
          console.log("  f_openPopUp - ed_acctDeptCd (귀속부서) 로 포커싱  ========");
          //udc_acctDeptCd.focus();

          ed_acctDeptCd.focus();
          return;
        }
        return;
      }

      // 비용구분 : 01^원가,02^판관비,03^원가+판관비
      if (scwin.txt_costClsCd == "") {
        scwin.txt_costClsCd = "04";
        console.log("  --- 04 (04: 판관비제외) 로 세팅  scwin.txt_costClsCd : " + scwin.txt_costClsCd);
      }

      // KYU_NEW : 바인딩 처리
      var row = ds_txncontents.getRowPosition();
      ds_txncontents.setCellData(row, "costClsCd", scwin.txt_costClsCd); // 비용구분

      // 팝업파라미터 정의

      if (scwin.isSubCompany == false) {
        var param = "T" // 01. 추가 WHERE 조건절 PARAM3
        + "," + ica_slipDt.getValue().trim() // 02. 추가 WHERE 조건절 PARAM4   // 전표일자
        + "," // 03. 추가 WHERE 조건절 PARAM5
        + "," // 04. 추가 WHERE 조건절 PARAM6
        + "," // 05. 추가 WHERE 조건절 PARAM7
        + "," + scwin.txt_costClsCd // 06. 추가 WHERE 조건절 PARAM8   // 비용구분코드
        + "," + scwin.txt_bizDomCd // 07. 추가 WHERE 조건절 PARAM9   // 사업영역코드
        + ",Y" // 08. 추가 WHERE 조건절 PARAM10  // 렌터카 고속일경우는 변고정비 다조회되도록 수정 - 08.04.21-신종민
        ;
      } else {
        var param = "T" // 01. 추가 WHERE 조건절 PARAM3
        + "," + ica_slipDt.getValue().trim() // 02. 추가 WHERE 조건절 PARAM4   // 전표일자
        + "," // 03. 추가 WHERE 조건절 PARAM5
        + "," // 04. 추가 WHERE 조건절 PARAM6
        + "," // 05. 추가 WHERE 조건절 PARAM7
        + "," + scwin.txt_costClsCd // 06. 추가 WHERE 조건절 PARAM8   // 비용구분코드
        + "," + scwin.txt_bizDomCd // 07. 추가 WHERE 조건절 PARAM9   // 사업영역코드
        + ",J" // 08. 추가 WHERE 조건절 PARAM10  // 렌터카 고속일경우는 변고정비 다조회되도록 수정 - 08.04.21-신종민
        ;
      }
      console.log("  계정 popup  param [" + param + "]");

      // KYU_TEST
      // 증빙종류에 따라 계정코드 팝업의 쿼리가 틀리다.
      // 법인카드/ 개인카드 / 현금영수증의 경우 retrieveExpenseAcctCdInfo2 그 외는  retrieveExpenseAcctCdInfo를 사용한다.
      // 차이점 ? retrieveExpenseAcctCdInfo2 경우 계정코드관리의 매입세액공제여부 컬럼에 비대상 항목이 제외되어 출력이 되지 않는다.
      //          그외는 동일하다.
      var pSqlId = "";
      switch (lc_evidClsCd.getValue()) {
        case "40": //법인카드
        case "50": //개인카드
        case "60":
          //현금영수증

          // KYU_ISSUE : retrieveExpenseAcctCdInfo2 사용 - 선택하신 메시지 발생금지 (현행 유지)
          pSqlId = "retrieveExpenseAcctCdInfo";
          udc_acctCd.setSelectId("retrieveExpenseAcctCdInfo");
          break;
        default:
          pSqlId = "retrieveExpenseAcctCdInfo";
          udc_acctCd.setSelectId("retrieveExpenseAcctCdInfo");
          break;
      }
      if (!scwin.popupAsyncFlag) {
        // rtnList = cfCommonPopUp('retrieveExpenseAcctCdInfo2',ed_acctCd.text.trim(),txt_acctNm.value,check,null,null,null,null,param,null,null,null,null); 
        udc_acctCd.cfCommonPopUp(scwin.udc_acctCd_callBackFunc
        // ,pSqlId                 // 01.pSelectID     XML상의 SELECT ID
        , ed_acctCd.getValue().trim() // 02.pCode         Code Element의  Value
        , ed_acctNm.getValue() // 03.pName         Name Element의  Value
        , check // 04.pWinCloseTF   결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
        , null // 05.pDispCnt      검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // 06.pTitle        Title순서
        , null // 07.pWidth        보여주는 각 컬럼들의 폭
        , null // 08.pHidden       컬럼중에서 숨기는    컬럼 지정
        , param // 09.pWhere        SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // 10.sFeatures     POP-UP뛰을때 원도우의   사용자 정의  폭
        , null // 11.pExistTF      POP-UP뛰을때 우도우의   사용자 정의  높이
        , null // 12.pAllSearchTF  윈도우 위치 Y좌표
        , null // 13.pWtitleSearch
        );
      } else {
        await udc_acctCd.cfCommonPopUpAsync(scwin.udc_acctCd_callBackFunc
        // ,pSqlId                 // 01.pSelectID     XML상의 SELECT ID
        , ed_acctCd.getValue().trim() // 02.pCode         Code Element의  Value
        , ed_acctNm.getValue() // 03.pName         Name Element의  Value
        , check // 04.pWinCloseTF   결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
        , null // 05.pDispCnt      검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // 06.pTitle        Title순서
        , null // 07.pWidth        보여주는 각 컬럼들의 폭
        , null // 08.pHidden       컬럼중에서 숨기는    컬럼 지정
        , param // 09.pWhere        SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // 10.sFeatures     POP-UP뛰을때 원도우의   사용자 정의  폭
        , null // 11.pExistTF      POP-UP뛰을때 우도우의   사용자 정의  높이
        , null // 12.pAllSearchTF  윈도우 위치 Y좌표
        , null // 13.pWtitleSearch
        );
      }

      //rtnList = cfCommonPopUp('retrieveAcctCdContentsInfo',ed_acctCd.text.trim(),txt_acctNm.value,check,null,null,null,null,ed_slipDt.text.trim(),null,null,null,null);

      break;
    case '4':
      // 귀속부서
      // var  param = ","+ed_slipDt.text.trim()+",0,,"+txtCoCd.value+","+txtCoClsCd.value;
      var param = ica_slipDt.getValue().trim() + ",,,,";
      if (scwin.isSubCompany == true) {
        param = ica_slipDt.getValue().trim() + ",,," + scwin.txtCoCd;
      }
      console.log("  귀속부서 popup  param [" + param + "]");
      if (!scwin.popupAsyncFlag) {
        // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo8',ed_acctDeptCd.text.trim(),txt_acctDeptNm.value,check,null,null,null,null,param,",,,,,,1","450","500",null,null); // 귀속부서
        // udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, ed_acctDeptCd.getValue().trim(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, ",,,,,,1","800","500", null, null); // 귀속부서
        // KYU_NEW : 팝업 사이즈 이슈
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, ed_acctDeptCd.getValue().trim(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        // KYU_NEW : 팝업 사이즈 이슈
        await udc_acctDeptCd.cfCommonPopUpAsync(scwin.udc_acctDeptCd_callBackFunc, ed_acctDeptCd.getValue().trim(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '6':
      // 카드번호 : 법인카드(40)일 때 카드발급처 --> 정산처
      var param = "";
      var cardCd = "";
      if (lc_evidClsCd.getValue() == "40") {
        cardCd = "1";
      } else if (lc_evidClsCd.getValue() == "50") {
        cardCd = "2";
      }
      var param = cardCd + "," + scwin.txtCoCd + "," + scwin.txtCoClsCd;
      console.log("  카드번호 popup  param [" + param + "]");
      if (!scwin.popupAsyncFlag) {
        //rtnList = cfCommonPopUp('retrieveCardInfo',ed_cardNo.text.trim().replace('-',''),'',check,null,null,null,null,param,null,null,null,null);
        udc_cardNo.cfCommonPopUp(scwin.udc_cardNo_callBackFunc, ed_cardNo.getValue().trim().replace('-', ''), '', check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_cardNo.cfCommonPopUpAsync(scwin.udc_cardNo_callBackFunc, ed_cardNo.getValue().trim().replace('-', ''), '', check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '7':
      // 사업자번호
      var param = '';

      //var selectID= 'retrieveCrnInfo';
      var selectID = 'retrieveCrnInfo2'; //20120628 김석 TB_FI006과 TB_AI030을 조인하여 사업자 정보와 과세유형구분코드로 가져오게 한다.
      udc_crn.setSelectId(selectID);
      if (!scwin.popupAsyncFlag) {
        // rtnList = cfCommonPopUp(selectID,ed_crn.text.trim(),txt_crnNm.value,check,null,null,null,null,param,null,null,null,null);
        udc_crn.cfCommonPopUp(scwin.udc_crn_callBackFunc, ed_crn.getValue().trim(), ed_crnNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_crn.cfCommonPopUpAsync(scwin.udc_crn_callBackFunc, ed_crn.getValue().trim(), ed_crnNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '8':
      // 사원번호
      var param = scwin.vCoCd + "," + scwin.vCoClsCd;
      console.log("  사원번호 popup  param [" + param + "]");
      if (!scwin.popupAsyncFlag) {
        // rtnList = cfCommonPopUp('retrieveAcEmpInfo',ed_mgntEmpNo.text.trim(),txt_mgntEmpNm.value,check,null,null,null,null,param,null,null,null,null);
        udc_mgntEmpNo.cfCommonPopUp(scwin.udc_mgntEmpNo_callBackFunc, ed_mgntEmpNo.getValue().trim(), ed_mgntEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_mgntEmpNo.cfCommonPopUpAsync(scwin.udc_mgntEmpNo_callBackFunc, ed_mgntEmpNo.getValue().trim(), ed_mgntEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '9':
      // 정산처
      var param = ",,," + scwin.vCoCd;
      console.log("  정산처 popup  param [" + param + "]");
      if (!scwin.popupAsyncFlag) {
        // rtnList = cfCommonPopUp('retrieveClntList',ed_adjmClntNo.text.trim(),txt_adjmClntNm.value,check,null,null,null,null,param,null,null,null,null);
        udc_adjmClntNo.cfCommonPopUp(scwin.udc_adjmClntNo_callBackFunc, ed_adjmClntNo.getValue().trim(), ed_adjmClntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_adjmClntNo.cfCommonPopUpAsync(scwin.udc_adjmClntNo_callBackFunc, ed_adjmClntNo.getValue().trim(), ed_adjmClntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '10':
      // 거래처
      var param = ",,," + scwin.vCoCd;
      console.log("  거래처 popup  param [" + param + "]");
      if (!scwin.popupAsyncFlag) {
        // rtnList = cfCommonPopUp('retrieveClntList',ed_mgntClntNo.text.trim(),"",check,null,null,null,null,param,null,null,null,null);
        udc_mgntClntNo.cfCommonPopUp(scwin.udc_mgntClntNo_callBackFunc, ed_mgntClntNo.getValue().trim(), "", check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_mgntClntNo.cfCommonPopUpAsync(scwin.udc_mgntClntNo_callBackFunc, ed_mgntClntNo.getValue().trim(), "", check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '11':
      // 상대계정조회
      var temp = "T," + ed_slipDt.getValue().trim() + ",6";
      console.log("  상대계정 popup  temp [" + temp + "]");
      if (!scwin.popupAsyncFlag) {
        // rtnList = cfCommonPopUp('retrieveExpenseAcctCdInfo',ed_opntAcctCd.text.trim(),txt_opntAcctNm.value,check,null,null,null,null,temp,null,null,null,null);
        udc_opntAcctCd.cfCommonPopUp(scwin.udc_opntAcctCd_callBackFunc, ed_opntAcctCd.getValue().trim(), ed_opntAcctNm.getValue(), check, null, null, null, null, temp, null, null, null, null);
      } else {
        await udc_opntAcctCd.cfCommonPopUpAsync(scwin.udc_opntAcctCd_callBackFunc, ed_opntAcctCd.getValue().trim(), ed_opntAcctNm.getValue(), check, null, null, null, null, temp, null, null, null, null);
      }
      break;
    case '12':
      // 2025-11-17 : 00130 렌터카사업 사용 안함으로 인한 삭제
      // 매출입
      break;
    case '13':
      // 2025-11-17 : 00130 렌터카사업 사용 안함으로 인한 삭제
      // 지점
      break;

    // 차량팝업- 렌트카 팝업 추가 2014. 04. 09
    // 매입번호와 금액을 가져온다
    case '14':
      if (ed_mgntClntNo.getValue().trim() == "") {
        await $c.gus.cfAlertMsg($p, "차량별실적 조회시 거래처를 입력하셔야 합니다.");
        return false;
      }
      var valueObject = new Object();

      // valueObject.prov = ds_tmp;
      // valueObject.clntNo = ed_mgntClntNo.text;
      // valueObject.clntNm = txt_mgntClntNm.value;

      // 원가실적목록 호출 
      let data = {
        prov: ds_tmp,
        clntNo: ed_mgntClntNo.getValue(),
        clntNm: ed_mgntClntNm.getValue()
      };
      console.log("^^^^^ data (원가실적목록) : " + JSON.stringify(data));
      let win_url = "/ui/ps/rc/comnmgnt/prflosmgnt/rc_510_02_03p.xml";
      let opts = {
        id: "smpPop",
        popupName: "원가실적목록 팝업",
        modal: true,
        type: "browserPopup",
        width: 1240,
        height: 1000,
        title: "원가실적목록 팝업"
      };

      // 원가실적목록 팝업
      // var returnValue = window.showModalDialog("/ps/rc/comnmgnt/prflosmgnt/rc_510_02_03p.jsp", valueObject,
      //                                         "dialogWidth:1000px; dialogHeight:700px; status:no; scroll:yes");

      var rt = await $c.win.openPopup($p, win_url, opts, data);

      // 팝업에서 데이터셋 ds_tmp를 내려받는다 - 기존 선택내역이 있었다면 추가된다
      if (ds_tmp != null) {
        var pchsAmt_Sum = ds_tmp.getCellData("pchsAmt", 0, ds_tmp.getTotalRow());

        //차량별 실적과 각 Row와의 연결고리 생성
        for (j = 0; j < ds_tmp.getTotalRow(); j++) {
          if (ds_tmp.getCellData(j, "pchsNo") != "" && ds_tmp.getCellData(j, "pchsSeqStr") == "") {
            ds_tmp.setCellData(j, "pchsSeqStr", ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "rltSeq"));
          }
        }

        // 차량별실적 합계를 보여주는 일반필드 세팅
        var len = String(pchsAmt_Sum).length;
        var rtnStr = "";
        var numStr = String(pchsAmt_Sum);
        for (var i = 0, j = len; i < len; i++, j--) {
          if (j % 3 == 0 && j != len) {
            rtnStr = rtnStr + ",";
          }
          rtnStr = rtnStr + numStr.charAt(i);
        }
        console.log("    ed_pchsAmtSum (rtnStr) [" + rtnStr + "]    numStr_hidden (numStr) [" + numStr + "]");

        // pchsAmtSum.value = rtnStr;
        ed_pchsAmtSum.setValue(rtnStr); // 차량별실적
        scwin.numStr_hidden = numStr;
      }
      break;
    case '15':
      // 요청거래처
      var param = ",,," + scwin.vCoCd;
      console.log("  요청거래처popup  param [" + param + "]");
      udc_reqClntNo.setSelectId('retrieveClntList');
      if (!scwin.popupAsyncFlag) {
        // rtnList = cfCommonPopUp('retrieveClntList',ed_reqClntNo.getValue().trim(),"",check,null,null,null,null,param,null,null,null,null);
        udc_reqClntNo.cfCommonPopUp(scwin.udc_reqClntNo_callBackFunc, ed_reqClntNo.getValue().trim(), "", check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_reqClntNo.cfCommonPopUpAsync(scwin.udc_reqClntNo_callBackFunc, ed_reqClntNo.getValue().trim(), "", check, null, null, null, null, param, null, null, null, null);
      }
      break;
    default:
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //
//   1:발행부서,3:계정,4:귀속부서,6:카드번호,7:사업자,8:사원,9:정산처,10:거래처,11:상대계정,12:매출입,13:지점,14:차량별실적,15:요청거래처

//-------------------------------------------------------------------------
// 발행부서조회 callBackFunc (1)
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_slipAcctDeptCd_callBackFunc (발행부서 조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    // KYU_TEST
    scwin.f_resultPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, rtnList, '1');
    if (rtnList[4] != "000" || rtnList[4] == null) {
      if (scwin.vCoCd != rtnList[4]) {
        await $c.win.alert($p, "소속 자회사 사람만 전표를 입력할수 있습니다");
        ed_slipAcctDeptCd.setValue("");
        ed_slipAcctDeptNm.setValue("");
        ed_slipAcctDeptCd.focus();
        return;
      }
    }
    if (rtnList[2] == "00130") {
      // 상위부서가 렌터카사업팀 - 업무삭제됨
      // $c.gus.cfDisableObjects([ed_acctCd,txt_acctNm,ed_acctDeptCd,txt_acctDeptNm,img_acctCd,img_acctDeptCd])
      // $c.gus.cfEnableObjects([ed_pchsItemCd,ed_branchCd,txt_pchsItemNm,txt_branchNm,img_pchsItemCd,img_branchCd])
      $c.gus.cfDisableObjects($p, [ed_acctCd, ed_acctNm, ed_acctDeptCd, ed_acctDeptNm, btn_acctCd, btn_acctDeptCd]); // 계정,부서 비활성화
      // $c.gus.cfEnableObjects([ed_pchsItemCd, ed_branchCd, ed_pchsItemNm, ed_branchNm, btn_pchsItemCd, btn_branchCd]);  // 지점,매입항목 활성화

      //branchTr.style.display="inline"
      branchTr.show("table-row"); // 지점,매입항목코드 보임 (서지원 부장님 - 테이블일 경우)
    } else {
      console.log("   ---- 상위부서 렌터카사업팀 아님 (지점,매입항목코드 숨김) : " + rtnList[2]);
      // cfEnableObjects([ed_acctCd,txt_acctNm,ed_acctDeptCd,txt_acctDeptNm,img_acctCd,img_acctDeptCd])
      // cfDisableObjects([ed_pchsItemCd,ed_branchCd,txt_pchsItemNm,txt_branchNm,img_pchsItemCd,img_branchCd])
      $c.gus.cfEnableObjects($p, [ed_acctCd, ed_acctNm, ed_acctDeptCd, ed_acctDeptNm, btn_acctCd, btn_acctDeptCd]); // 계정,부서 활성화

      console.log("  ==--== 활성 (계정,계정명,귀속부서,귀속부서명,계정돋보기,귀속부서돋보기)");

      // $c.gus.cfDisableObjects([ed_pchsItemCd, ed_branchCd, ed_pchsItemNm, ed_branchNm, btn_pchsItemCd, btn_branchCd]);  // 지점,매입항목 비활성화

      //branchTr.style.display="none"
      branchTr.hide(); // 지점,매입항목코드 숨김

      // 지점,매입항목 초기화
      ed_pchsItemCd.setValue("");
      ed_pchsItemNm.setValue("");
      ed_branchCd.setValue("");
      ed_branchNm.setValue("");
    }
    console.log("▶ [bef] vUpperAcctDeptCd : " + scwin.vUpperAcctDeptCd + "   vBizDomCd : " + scwin.vBizDomCd);
    if (scwin.vBizDomCd == null || scwin.vBizDomCd == "") {
      if (rtnList[3] == "210" || rtnList[3] == "220" || rtnList[3] == "242") {
        scwin.gBizDomCdClsCd = "1"; // 소속구분
      } else {
        scwin.gBizDomCdClsCd = "0"; // 소속구분
      }
    } else {
      if (!(ed_acctCd.getValue() == null || ed_acctCd.getValue() == "")) {
        await $c.gus.cfAlertMsg($p, "발행부서를 수정할 경우에는 계정코드를 재입력하셔야 합니다.");
        console.log("");
        ed_acctCd.setValue("  --------- 발행부서를 수정할 경우에는 계정 초기화 --------");
        scwin.ed_acctCd_hidVal = "";
        udc_acctCd.hidVal = ""; // KYU_TEST

        ed_acctNm.setValue("");
        ed_pchsItemCd.setValue("");
        scwin.ed_pchsItemCd_hidVal = "";
        udc_pchsItemCd.hidVal = "";
        ed_pchsItemNm.setValue("");
      }
    }
    scwin.vUpperAcctDeptCd = rtnList[2]; // 상위부서코드
    scwin.vBizDomCd = rtnList[3]; // 사업영역

    console.log("▶ [aft] vUpperAcctDeptCd : " + scwin.vUpperAcctDeptCd + "   vBizDomCd : " + scwin.vBizDomCd);
    scwin.varCostClsCd = ""; // 변동비구분

    //자회사 회계 시스템 추가에 따라 , 발행 부서 선택시, 회사 코드와, 회사 구분 코드를 넘김.
    scwin.txtCoCd = rtnList[4]; //회사코드
    scwin.txtCoClsCd = rtnList[5]; //회사구분코드
    console.log("▶ txtCoCd : " + scwin.txtCoCd + "   txtCoClsCd : " + scwin.txtCoClsCd);
  }
  scwin.f_SetGridFormat();
  scwin.f_setInitObj();
  lc_adjmClsCd.setValue("2");
  console.log("정산방법 2 (미지급금) 세팅");

  // KYU_ORDER : 발행부서 체크를 구분 실행
  if (scwin.callOnLoad == true) {
    // f_OnLoad 에서 호출 (발행부서 호출 구분용)
    console.log("  -- -- 발행부서 체크를 구분 실행");
    scwin.f_OnLoad2();
  }
  ;
};

//-------------------------------------------------------------------------
// 자회사 매입/경비 전표 인 경우  화면 설정
//-------------------------------------------------------------------------
scwin.f_setInitObj = function () {
  console.log("=== f_setInitObj (자회사 매입/경비 전표 인 경우  화면 설정)");
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 : 0

    //tr_slipKindCd.style.display = "inline"; //전표 종류
    tr_slipKindCd.show("");
    if (scwin.vCoCd == "023" || scwin.vCoCd == "029") {
      // 회사코드 자회사일 때(023:비아이디씨 주식회사  029:넥스트로 주식회사)
      // td_evidac.style.display     ="inline";
      btn_pu_evid.show(""); // 증빙배부 버튼 show
    } else {
      //td_evidac.style.display     ="none";
      btn_pu_evid.hide(); // 증빙배부 버튼 hide
    }
    //td_budget.style.display     ="none";
    btn_pu_budget.hide(); // 예산실적 버튼 hide

    // 정산방법 콤보 변경
    //lc_adjmClsCd.CBData = "1^미지급비용,2^미지급금,6^법인카드,9^외상매입금";

    console.log("----- 정산방법콤보 : 멤버 변경 - 1^미지급비용,2^미지급금,6^법인카드,9^외상매입금");
    dlt_commonCodeFI003.removeAll();
    for (i = 0; i < 4; i++) {
      dlt_commonCodeFI003.insertRow();
      dlt_commonCodeFI003.setRowPosition(i);
      dlt_commonCodeFI003.setCellData(i, "grpCd", "FI003");
      if (i == 0) {
        dlt_commonCodeFI003.setCellData(i, "cd", "1");
        dlt_commonCodeFI003.setCellData(i, "cdNm", "미지급비용");
      } else if (i == 1) {
        dlt_commonCodeFI003.setCellData(i, "cd", "2");
        dlt_commonCodeFI003.setCellData(i, "cdNm", "미지급금");
      } else if (i == 2) {
        dlt_commonCodeFI003.setCellData(i, "cd", "6");
        dlt_commonCodeFI003.setCellData(i, "cdNm", "법인카드");
      } else if (i == 3) {
        dlt_commonCodeFI003.setCellData(i, "cd", "9");
        dlt_commonCodeFI003.setCellData(i, "cdNm", "외상매입금");
      } else {}
    }

    // slipKndCd = lc_slipKndCd.BindColVal;// 전표 종류 set    
    // slipKndNm = lc_slipKndCd.Text;// 전표 종류 set  
    scwin.slipKndCd = lc_slipKndCd.getValue(); // 전표 종류 set
    scwin.slipKndNm = lc_slipKndCd.getText(lc_slipKndCd.getSelectedIndex); // 전표 종류 set

    console.log("   slipKndCd [" + scwin.slipKndCd + "]  slipKndNm [" + scwin.slipKndNm + "]");
  } else {
    // KYU_TEST
    // tr_slipKindCd.style.display = "none"; //전표 종류
    tr_slipKindCd.hide("table-row"); // 전표종류 hide

    // td_evidac.style.display     ="inline";
    // td_budget.style.display     ="inline";

    btn_pu_evid.show(); // 증빙배부 버튼 show
    btn_pu_budget.show(); // 예산실적 버튼 show

    //lc_adjmClsCd.CBData = "<%= GauceUtil.getCodeList("FI003",1,"1") %>";  // 초기에 설정
  }
};

//-------------------------------------------------------------------------
// 계정코드조회 callBack  (3)    @@
//   선택하신...
//-------------------------------------------------------------------------
scwin.udc_acctCd_callBackFunc = async function (rtnList) {
  console.log("▲ ▲ ▲ ▲ ▲   udc_acctCd_callBackFunc (계정코드 조회 팝업 callBackFunc  rtnList [" + rtnList + "]");
  if (rtnList == null) {
    ed_acctCd.setValue("");
    ed_acctNm.setValue("");
    scwin.ed_acctCd_hidVal = "";
    scwin.txt_acctClsCd = "";

    // KYU_NEW : 추가 바인딩
    var row = ds_txncontents.getRowPosition();
    ds_txncontents.setCellData(row, "acctClsCd", scwin.txt_acctClsCd); // 계정구분
  } else {
    //결과값이 없으면 RETURN : 팝업 그냥 닫음
    if (rtnList[0] == "N/A") {
      // KYU_NEW 2026-02-02
      scwin.ed_acctCd_hidVal = "";
      scwin.txt_acctClsCd = "";

      // KYU_NEW : 추가 바인딩
      var row = ds_txncontents.getRowPosition();
      ds_txncontents.setCellData(row, "acctClsCd", scwin.txt_acctClsCd); // 계정구분
      return;
    }

    //결과값 바인드
    // ed_acctCd.text      = rtnList[0]; // 계정코드
    // txt_acctNm.value    = rtnList[1]; // 계정명
    // ed_acctCd.hidVal    = rtnList[0]; // 히든값

    ed_acctCd.setValue(rtnList[0]); //계정코드
    ed_acctNm.setValue(rtnList[1]); //계정명

    // console.log("---- rtnList[1] : "+ rtnList[1]+"  ---- 계정명 : " + ed_acctNm.getValue());

    scwin.ed_acctCd_hidVal = rtnList[0]; // 히든값

    // txt_acctClsCd.value = rtnList[2]; // 계정구분
    scwin.txt_acctClsCd = rtnList[2]; // 계정구분

    // KYU_NEW : 추가 바인딩
    var row = ds_txncontents.getRowPosition();
    ds_txncontents.setCellData(row, "acctClsCd", scwin.txt_acctClsCd); // 계정구분

    // KYU_NEW : 데이타셋에 계정정보 세팅
    // retrieveExpenseAcctCdInfo
    // A.MGNT_NO_CD            AS COL5  /* 05.관리번호코드     *
    // TO_CHAR(A.CLNT_MGNT_YN) AS COL6  /* 06.거래처관리코드   *
    // TO_CHAR(A.TERM_MGNT_YN) AS COL7  /* 07.기간관리여부     *
    // TO_CHAR(A.EMP_MGNT_YN)  AS COL8  /* 08.사원관리여부     *
    // TO_CHAR(A.DT_MGNT_YN)   AS COL9  /* 09.일자관리여부     *

    // KYU_TEST : 계정정보 세팅시 row 구분
    if (scwin.loadCompleted != true)
      // 로드중
      {
        row = scwin.loadRow; // 로드 세팅 row   
      }
    if (scwin.dsCodeNameSet == true)
      // 코드세팅중
      {
        row = scwin.loadRow; // 로드 세팅 row
      }

    // 주요 로그
    console.log("   ^ ^ ^  row [" + row + "]  계정 [" + ds_txncontents.getCellData(row, "acctCd") + "] : 거래처 [" + rtnList[5] + "], 기간관리 [" + rtnList[6] + "], 사원관리 [" + rtnList[7] + "], 일자관리 [" + rtnList[8] + "]");

    // ds_txncontents.setCellData(row,"mgntNo"    , rtnList[4]);  // 관리번호
    ds_txncontents.setCellData(row, "clntMgntYn", rtnList[5]); // 거래처관리 여부  - mgntClntNo 와 혼동하면 안됨 !!
    ds_txncontents.setCellData(row, "termMgntYn", rtnList[6]); // 기간관리 여부
    ds_txncontents.setCellData(row, "empMgntYn", rtnList[7]); // 사원관리 여부
    ds_txncontents.setCellData(row, "dtMgntYn", rtnList[8]); // 일자관리 여부

    // KYU_TEST : false 가 와도 그냥 진행
    // 계정조회시화면셋팅
    //r_empMgntYn,r_termMgntYn,r_dtMgntYn,r_clntMgntYn
    console.log("  -- -- f_AcctCd 호출 (계정코드조회)  ----");
    let rtna = await scwin.f_AcctCd(rtnList[7] //r_empMgntYn  - 사원관리여부
    , rtnList[6] //r_termMgntYn - 기간관리여부2
    , rtnList[8] //r_dtMgntYn   - 일자관리여부
    , rtnList[5] //r_clntMgntYn - 거래처관리여부
    );

    // 결과값 가지고 왔을때 원)세금과공과-과징금(4203417), 판)세금과공과-과징금(5001917) 계정일 경우
    // 잡손실(6120220)계정으로 작성해 주시기 바랍니다. 라는 메시지 출력해 준다.
    if (scwin.vCoCd != "023") {
      //BIDC 예외처리 2020.12.17
      if (ed_acctCd.getValue() == '4203417') {
        await $c.win.alert($p, "원)세금과공과-과징금(4203417) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        return;
      } else if (ed_acctCd.getValue() == '5001917') {
        await $c.win.alert($p, "판)세금과공과-과징금(5001917) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        return;
      }
    }

    // 상대허용계정 입력항목 활성화 불활성화 처리
    // 공통코드:FI055:상태계정허용계정에 해당되는 계정코드인경우
    // 상대계정 입력항목들을 활성화 한다.
    // var temp2     = GauceUtil.getCodeList("FI055") ;  // FI055:상대계정허용계정(경비전표)
    // var tempList2 = temp2.split(",");                 // 상대계정허용계정 리스트

    console.log("  [계정 callBack] 상대허용계정 입력항목 활성/비활성 처리 (FI055)");
    let codeList = $c.gus.gauceUtil($p, "getCodeList", "FI055");

    // console.log(" codeList ["+JSON.stringify(codeList)+"]  length : "+ codeList.length);

    // 조회된 상대계정허용계정 코드의 갯수만큼 루프를 돌린다.
    for (var ii = 0; ii < codeList.length; ii++) {
      // List분리
      // var checkList2 = tempList2[ii].split("^");

      // 조회된 계정코드가 상대계정허용코드에 해당하는 코드이면,
      // 상대계정 입력항목들[ed_opntAcctCd,img_opntAcctCd]을 활성화 한다.
      // if(ed_acctCd.getValue().trim()==checkList2[1].trim()){

      // 상대계정허용계정 추출
      var opntAdmitAcct = codeList[ii].name;
      if (ed_acctCd.getValue().trim() == opntAdmitAcct) {
        console.log(" ed_acctCd [" + ed_acctCd.getValue() + "]  [" + ii + "]  opntAdmitAcct (상대계정허용계정) [" + opntAdmitAcct + "]");
        $c.gus.cfEnableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
        console.log("  상대계정허용계정 [" + opntAdmitAcct + "] 동일 - 계정팝업 callBack  ==--== 활성 ( 상대계정코드, 상대계정명(NEW), 상대계정돋보기)");
        // return;
      } else {
        ed_opntAcctCd.setValue("");
        ed_opntAcctNm.setValue("");
        scwin.ed_opntAcctCd_hidVal = "";
        $c.gus.cfDisableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
        // console.log("  상대계정허용계정 ["+opntAdmitAcct+"] 다름 - 계정팝업 callBack  ==--== 비활성 ( 상대계정코드, 상대계정명(NEW), 상대계정돋보기)");
      }
    } // end of for

    // KYU_ISSUE : 로직 제거
    // 2025-11-16 : 00130 렌터카사업팀 미사용으로 인해 지점,매입항목코드 삭제 

    // 매입항목코드[ed_pchsItemCd]에 입력된 값이 없으면,
    // if (ed_pchsItemCd.Text == null || ed_pchsItemCd.Text  == ""){
    // if (ed_pchsItemCd.getValue() == null || ed_pchsItemCd.getValue() == "") {

    //     // 변동비구분값[varCostClsCd]에 입력된 값이 없으면,
    //     if (scwin.varCostClsCd == null || scwin.varCostClsCd == "") {
    //         // 변고정비구분코드값을 입력한다.
    //         scwin.varCostClsCd = rtnList[9];  // 변동비구분
    //     } else {
    //         if (ds_txncontents.getTotalRow() > 1) {
    //             if (scwin.varCostClsCd.trim() == "1") {
    //                 if (scwin.varCostClsCd.trim() != rtnList[9].trim()) {
    //                     await $c.gus.cfAlertMsg("변동비계정항목과 고정비계정항목을 같이 입력을 할 수 없습니다.")
    //                     ed_branchCd.setValue("");
    //                     ed_branchNm.setValue("");
    //                     ed_acctCd.setValue("");
    //                     scwin.ed_acctCd_hidVal = "";
    //                     ed_acctNm.setValue("");
    //                     return false;
    //                 }
    //             } else {
    //                 if (rtnList[9].trim() == "1") {
    //                     await $c.gus.cfAlertMsg("변동비계정항목과 고정비계정항목을 같이 입력을 할 수 없습니다.")
    //                     ed_branchCd.setValue("");
    //                     ed_branchNm.setValue("");
    //                     ed_acctCd.setValue("");
    //                     scwin.ed_acctCd_hidVal = "";
    //                     ed_acctNm.setValue("");
    //                     return false;
    //                 }
    //             }
    //         }
    //         scwin.varCostClsCd = rtnList[9];
    //     }

    //  KYU_TEST : 자회사의 경우, 전표종류 변경해야 하는지 @@
    //     if (scwin.varCostClsCd == "1" && scwin.txtCoClsCd == ACConstants.CO_CLS_CD_DONGBU) {
    //         if (scwin.vBizDomCd == "210") {
    //             scwin.slipKndCd = ACConstants.SLIPKNDCD_EXPENSE_TR_VAR
    //         } else if (scwin.vBizDomCd == "220") {
    //             scwin.slipKndCd = ACConstants.SLIPKNDCD_EXPENSE_RC_VAR
    //         } else if (scwin.vBizDomCd == "242") {
    //             scwin.slipKndCd = ACConstants.SLIPKNDCD_EXPENSE_HD_VAR     // 택배변동비
    //         }
    //     } else {
    //         if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {  //자회사 회계 시스템인 경우
    //             scwin.slipKndCd = lc_slipKndCd.getValue();// 전표 종류 SET
    //         } else {
    //             scwin.slipKndCd = ACConstants.SLIPKNDCD_EXPENSE;
    //         }
    //     }
    // }

    // 계정값이 있을때만 조회한다.
    // 법인카드 공제여부 조회값 리턴
    //ds_txncontents.UseChangeInfo = "false";

    // 접대비 계정인 경우 공제구분 불공제로 세팅(2018.07)
    if (ed_acctCd.getValue().substring(0, 5) == '50008' || ed_acctCd.getValue().substring(0, 5) == '42009' || ed_acctCd.getValue() == '4204732' || ed_acctCd.getValue() == '5002920') {
      await $c.win.alert($p, "접대비 계정은 불공제 대상입니다");
      lc_deductClsCd.setValue("2");
    }

    //       법인카드공제여부 사용안함 20120703 by kimseok
    //       계정코드정보테이블[TB_FI001]의 법인카드공제여부[COR_CARD_DEDUCT_YN] 컬럼값을 사용하지 않고,
    //       매입세엑공제여부[PCHS_TAX_AMT_DEDUCT_YN] 컬럼값을 사용하여, 공제유무를 결정한다.

    // tr_acctCdRetreive.Post();
    // // dataSetDebug(ds_corCardDeductYn, false);
    // // 법인카드에 공제여부가 체크되어있으면 공제여부를 공제로 세팅, 공제대상 아니면 N 으로 세팅
    // if(lc_evidClsCd.BindColVal == "40" ){
    //     if(ds_corCardDeductYn.NameValue(1, "corCardDeductYn") =="Y"){
    //         lc_deductClsCd.BindColVal = "1";
    //     }
    //     else if(ds_corCardDeductYn.NameValue(1, "corCardDeductYn") =="N"){
    //         lc_deductClsCd.BindColVal = "2";
    //     }
    // }

    /*
          매입세엑공제여부[PCHS_TAX_AMT_DEDUCT_YN]를 사용한, 법인카드 공제유무 적용처리
          매입세액공제여부구분코드[공통코드:FI094][0:구분없음,1:우선_공제,2:우선_불공제,3:확정_공제,4:확정_불공제,5:비대상]
    */
    // <!-- 경비전표 계정 조회(2015.02.05 분리) -->
    // id="retrieveExpenseAcctCdInfo" resultMap="commonPopUpResultMap" parameterClass="java.util.Map">
    //     SELECT
    //       A.ACCT_CD                /* 계정코드                 */   AS COL1 /* 01.계정코드           */
    //     , A.ACCT_NM                /* 계정명                   */   AS COL2 /* 02.계정명              */
    //     , A.ACCT_CLS_CD            /* 계정구분코드             */   AS COL3 /* 03.계정구분코드     */
    //     , A.DRCR_CLS_CD            /* 차대구분코드             */   AS COL4 /* 04.차대구분코드     */
    //     , A.MGNT_NO_CD             /* 관리번호코드             */   AS COL5 /* 05.관리번호코드     */
    //     , TO_CHAR(A.CLNT_MGNT_YN   /* 거래처관리여부           */)  AS COL6 /* 06.거래처관리코드  */
    //     , TO_CHAR(A.TERM_MGNT_YN   /* 기간관리여부             */)  AS COL7 /* 07.기간관리여부     */
    //     , TO_CHAR(A.EMP_MGNT_YN    /* 사원관리여부             */)  AS COL8 /* 08.사원관리여부     */
    //     , TO_CHAR(A.DT_MGNT_YN     /* 일자관리여부             */)  AS COL9 /* 09.일자관리여부     */

    // <!-- 경비전표 계정 조회(OK) 재무회계-경비전표입력 프로그램에서 사용 -->
    // id="retrieveExpenseAcctCdInfo2" resultMap="commonPopUpResultMap" parameterClass="java.util.Map">
    //     SELECT
    //       A.ACCT_CD                 /* 계정코드                 */   AS COL1 /* 01.계정코드         */
    //     , A.ACCT_NM                 /* 계정명                   */   AS COL2 /* 02.계정명           */
    //     , A.ACCT_CLS_CD             /* 계정구분코드             */   AS COL3 /* 03.계정구분코드     */
    //     , A.PCHS_TAX_AMT_DEDUCT_YN  /* 매입세액공제여부         */   AS COL4 /* 04.매입세액공제여부 */
    //     , A.MGNT_NO_CD              /* 관리번호코드             */   AS COL5 /* 05.관리번호코드     */
    //     , TO_CHAR(A.CLNT_MGNT_YN    /* 거래처관리여부           */)  AS COL6 /* 06.거래처관리코드   */
    //     , TO_CHAR(A.TERM_MGNT_YN    /* 기간관리여부             */)  AS COL7 /* 07.기간관리여부     */
    //     , TO_CHAR(A.EMP_MGNT_YN     /* 사원관리여부             */)  AS COL8 /* 08.사원관리여부     */
    //     , TO_CHAR(A.DT_MGNT_YN      /* 일자관리여부             */)  AS COL9 /* 09.일자관리여부     */

    var pchsTaxAmtDeductYn = rtnList[3]; //매입세엑공제여부

    console.log("  [계정 callBack] 매입세액공제여부 [" + pchsTaxAmtDeductYn + "]  공제여부 [" + ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "deductfixClsCd") + "]");

    // 공제가 확정되지 않앗다면,
    if (ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "deductfixClsCd") == "0") {
      // 증빙종류가 법인카드[40],개인카드[50], 현금영수증[60] 이고,
      var temp_evidClsCd = ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "evidClsCd");
      console.log("  [계정 callBack] 증빙구분 [" + temp_evidClsCd + "]  매입세액공제여부 [" + pchsTaxAmtDeductYn + "]  공제여부 [" + ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "deductfixClsCd") + "]");
      if (temp_evidClsCd == "40" || temp_evidClsCd == "50" || temp_evidClsCd == "60") {
        switch (pchsTaxAmtDeductYn) {
          case '1':
            // 1:우선_공제
            await $c.win.alert($p, "선택하신 계정코드는 우선_공제 대상입니다");
            lc_deductClsCd.setValue("1");
            $c.gus.cfEnableObjects($p, [lc_evidClsCd, lc_deductClsCd]);
            console.log("  우선_공제 ==--== 활성 ( 증빙구분,공제구분 )");
            break;
          case '2':
            // 2:우선_불공제
            await $c.win.alert($p, "선택하신 계정코드는 우선_불공제 대상입니다");
            lc_deductClsCd.setValue("2");
            $c.gus.cfEnableObjects($p, [lc_evidClsCd, lc_deductClsCd]);
            console.log("  우선_불공제 ==--== 활성 ( 증빙구분,공제구분 )");
            break;
          case '3':
            // 3:확정_공제
            await $c.win.alert($p, "선택하신 계정코드는 확정_공제 대상입니다");
            lc_deductClsCd.setValue("1");
            $c.gus.cfDisableObjects($p, [lc_evidClsCd, lc_deductClsCd]);
            console.log("  확정_공제 ==--== 비활성 ( 증빙구분,공제구분 )");
            break;
          case '4':
            // 4:확정_불공제
            await $c.win.alert($p, "선택하신 계정코드는 확정_불공제 대상입니다");
            lc_deductClsCd.setValue("2");
            $c.gus.cfDisableObjects($p, [lc_evidClsCd, lc_deductClsCd]);
            console.log("  확정_불공제 ==--== 비활성 ( 증빙구분,공제구분 )");
            break;
          default:
            console.log("  선택하신 ...  row [" + ds_txncontents.getRowPosition() + "]  pchsTaxAmtDeductYn [" + pchsTaxAmtDeductYn + "]  temp_evidClsCd [" + temp_evidClsCd + "]");
            await $c.win.alert($p, "선택하신 계정코드는 공제구분값이 명확하지 않습니다.\n증빙종류의 확정/미확정값을 선택해주세요.");
            //lc_deductClsCd.BindColVal = "1";
            //cfEnableObjects([lc_evidClsCd, lc_deductClsCd]);
            break;
        }
      }
    } else {
      //alert("확정된 공제내역입니다");
    }
  }

  // ds 코드명 세팅
  if (scwin.dsCodeNameSet == true)
    // ds에 코드명 세팅여부
    {
      console.log("  [계정 callBack]  ▷▷ 코드명 세팅  [" + scwin.dsCodeNameSetRow + "][" + scwin.dsCodeNameSetColId + "][" + ed_acctNm.getValue() + "]");
      ds_txncontents.setCellData(scwin.dsCodeNameSetRow, "acctNm", ed_acctNm.getValue()); // 계정명
    }

  // KYU_NEW : 추가 바인딩
  var row = ds_txncontents.getRowPosition();
  ds_txncontents.setCellData(row, "acctClsCd", scwin.txt_acctClsCd); // 계정구분

  console.log("▲ ▲ ▲ ▲ ▲   udc_acctCd_callBackFunc (계정)     END");
};

//-------------------------------------------------------------------------
// 카드번호조회 callBackFunc (6)
//   법인카드(40)일 때 카드발급처 --> 정산처
//-------------------------------------------------------------------------
scwin.udc_cardNo_callBackFunc = function (rtnList) {
  console.log("▲ udc_cardNo_callBackFunc (카드번호조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // KYU_NEW 2026-02-02
      scwin.ed_cardNo_hidVal = "";
      return;
    }
    ed_cardNo.setValue(rtnList[0]); //카드번호
    ed_cardNm.setValue(rtnList[1] + "/" + rtnList[2]); //카드명
    scwin.ed_cardNo_hidVal = rtnList[0]; // 히든값

    if (lc_evidClsCd.getValue() == "40") {
      // 법인카드
      ed_adjmClntNo.setValue(rtnList[6]); // 정산처코드 - 카드발급처
      ed_adjmClntNm.setValue(rtnList[7]); // 정산처명 - 카드발급명
    }
  } else {
    ed_cardNo.setValue("");
    ed_cardNm.setValue("");
    scwin.ed_cardNo_hidVal = "";
    if (lc_evidClsCd.getValue() == "40") {
      ed_adjmClntNo.setValue("");
      ed_adjmClntNm.setValue("");
      console.log("  ▷ 카드번호 callBack - 법인카드 - 정산처/명 초기화 !!!!");
    }
  }

  // ds 코드명 세팅
  if (scwin.dsCodeNameSet == true)
    // ds에 코드명 세팅여부
    {
      console.log("    ▷▷ 코드명 세팅  [" + scwin.dsCodeNameSetRow + "][" + scwin.dsCodeNameSetColId + "][" + ed_cardNm.getValue() + "]");
      ds_txncontents.setCellData(scwin.dsCodeNameSetRow, "cardNm", ed_cardNm.getValue()); // 카드명

      if (lc_evidClsCd.getValue() == "40") {
        // 법인카드
        ds_txncontents.setCellData(scwin.dsCodeNameSetRow, "adjmClntNo", ed_adjmClntNo.getValue()); // 정산처코드 - 카드발급처
        ds_txncontents.setCellData(scwin.dsCodeNameSetRow, "adjmClntNm", ed_adjmClntNm.getValue()); // 정산처명 - 카드발급명
      }
      console.log("    ▷  법인카드 [" + lc_evidClsCd.getValue() + "] 카드발급처 --> 정산처 세팅 [" + ds_txncontents.getCellData(scwin.dsCodeNameSetRow, "adjmClntNo") + "][" + ds_txncontents.getCellData(scwin.dsCodeNameSetRow, "adjmClntNm") + "]");
    }
};

//-------------------------------------------------------------------------
// 사업자번호 조회 callBackFunc (7)  @@
//    증빙구분이 40,50,60 일 때 계정/명 초기화
//-------------------------------------------------------------------------
scwin.udc_crn_callBackFunc = async function (rtnList) {
  console.log("▲▲▲  udc_crn_callBackFunc (사업자번호 조회 팝업 callBackFunc)   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      scwin.vCrn = ""; // 사업자번호

      // KYU_NEW 2026-02-02
      scwin.ed_crn_hidVal = "";
      return;
    }
    ed_crn.setValue(rtnList[0]); // 사업자번호
    scwin.vCrn = rtnList[0]; // 사업자번호
    ed_crnNm.setValue(rtnList[1]); // 사업자명
    scwin.ed_crn_hidVal = rtnList[0]; // 히든값
    var taxnCls = rtnList[9]; // 과세유형구분(01:일반,02:간이,03:면세,04:비영리,05:휴업,06:폐업,07:미등록)

    console.log("   taxnCls (과세유형구분) [" + taxnCls + "]  01:일반,02:간이,03:면세,04:비영리,05:휴업,06:폐업,07:미등록");

    /*
       --------------------------------------20120628 by KIMSEOK----------------------------------------------
        사업자등록번호 입력시, 입력된 증빙종류가 개인카드(50) 및 법인카드(40)의 경우
        해당 사업자 번호의 과세유형구분코드에 따라 증빙종류를 공제/불공제 유무를 정해준다.
        => 과세유형구분이 02:간이,03:면세,05:휴업,06:폐업인 경우에는 불공제 처리한다.
        -------------------------------------------------------------------------------------------------------
    */

    //alert("ds_exclusionOfTaxtation.CountRow => " + ds_exclusionOfTaxtation.CountRow + "\nTAXN_CLS=>"+TAXN_CLS);
    //dataSetDebug(ds_exclusionOfTaxtation,true);

    // KYU_ISSUE : 공통팝업 초기화 제외 - 메시지 후 기존값 유지
    var tempCrn = "";
    var tempCrnNm = "";
    var tmepCrnHidVal = "";

    // 증빙종류가 법인카드(40),개인카드(50),현금영수증(60)
    var temp_evidClsCd = ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "evidClsCd");
    if (temp_evidClsCd == "40" || temp_evidClsCd == "50" || temp_evidClsCd == "60") {
      // lc_deductClsCd.Index = 0;

      // 과세유형구분은 [공통코드:FI096]으로 관리 되어 ds_exclusionOfTaxtation에 담아 사용한다.
      // for( var a=1; a<= ds_exclusionOfTaxtation.CountRow; a++ ){
      for (var a = 0; a < ds_exclusionOfTaxtation.getTotalRow(); a++) {
        // 과세유형구분 == ds_exclusionOfTaxtation (02: 간이, 03: 면세, 5: 휴업, 06: 폐업)

        if (taxnCls == ds_exclusionOfTaxtation.getCellData(a, "col1")) {
          // 공제유무값 불공제처리
          //lc_deductClsCd.Index =1;
          lc_deductClsCd.setSelectedIndex(1);
          // 공제유무 확정처리
          ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "deductfixClsCd", "1");
          // 해당 컨트롤들 비활성화
          $c.gus.cfDisableObjects($p, [lc_evidClsCd, lc_deductClsCd]);
          console.log("  ==--== 비활성( 증빙구분,공제구분 )");

          // 사업자번호 유지
          tempCrn = ed_crn.getValue();
          tempCrnNm = ed_crnNm.getValue();
          tmepCrnHidVal = scwin.ed_crn_hidVal;

          // KYU_TEST : 엑셀 업로드 시에는 실행안함. 엑셀 업로드시 계정코드 망실 방지
          if (scwin.uploadYn != "Y") {
            // console.log("  ==--== 초기화 (계정코드,계정명)  과세유형구분 ["+taxnCls+"] IN (02: 간이, 03: 면세, 5: 휴업, 06: 폐업)");
            // 계정코드값 초기화
            // ed_acctCd.text   = "";
            // txt_acctNm.value = "";

            ed_acctCd.setValue("");
            ed_acctNm.setValue("");
            console.log("-------------- ed_acctCd, ed_acctNm (계정/명) 초기화");
          } else {
            // console.log("-------------- ed_acctCd, ed_acctNm (계정/명) 초기화 SKIP  uploadYn == Y");
          }
          await $c.win.alert($p, "증빙종류가     => [" + scwin.getCommonCodename(lc_evidClsCd.getValue(), "evidClsCd") + "]이고," + "\n" + "과세유형구분이 => [" + scwin.getCommonCodename(taxnCls, "FI069") + "]" + "\n" + "이라서 확정_불공제 처리합니다~!!");

          // 사업자번호 유지
          ed_crn.setValue(tempCrn);
          ed_crnNm.setValue(tempCrnNm);
          scwin.ed_crn_hidVal = tmepCrnHidVal;

          //루프종료
          a = ds_exclusionOfTaxtation.getTotalRow();
        } else {
          // 공제유무값 불공제처리
          // lc_deductClsCd.Index =0;
          lc_deductClsCd.setSelectedIndex(0);
          // 공제유무 확정처리
          ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "deductfixClsCd", "0");
          // 해당 컨트롤들 활성화
          $c.gus.cfEnableObjects($p, [lc_evidClsCd, lc_deductClsCd]);
          console.log("  ==--== 활성 ( 증빙구분,공제구분 )");

          // 사업자번호 유지
          tempCrn = ed_crn.getValue();
          tempCrnNm = ed_crnNm.getValue();
          tmepCrnHidVal = scwin.ed_crn_hidVal;

          // KYU_TEST : 엑셀 업로드 시에는 실행안함. 엑셀 업로드시 계정코드 망실 방지
          if (scwin.uploadYn != "Y") {
            // console.log("  ==--== a ["+a+"] 초기화 (계정코드,계정명)  과세유형구분 ["+taxnCls+"] NOT IN (02: 간이, 03: 면세, 5: 휴업, 06: 폐업)");
            // 계정코드값 초기화
            // ed_acctCd.text   = "";
            // txt_acctNm.value = "";
            ed_acctCd.setValue("");
            ed_acctNm.setValue("");
            console.log("-------------- ed_acctCd, ed_acctNm (계정/명) 초기화 22");
          } else {
            // console.log("-------------- ed_acctCd, ed_acctNm (계정/명) 초기화 SKIP  uploadYn == Y");
          }

          // if(a==ds_exclusionOfTaxtation.CountRow && rtnList[9] != null  ){
          if (a == ds_exclusionOfTaxtation.getTotalRow() - 1 && !$c.gus.cfIsNull($p, rtnList[9])) {
            await $c.win.alert($p, "증빙종류가     => [" + scwin.getCommonCodename(lc_evidClsCd.getValue(), "evidClsCd") + "]이고," + "\n" + "과세유형구분이 => [" + scwin.getCommonCodename(taxnCls, "FI069") + "]" + "\n" + "이라서 공제 처리합니다~!!");
          }

          // 사업자번호 유지
          ed_crn.setValue(tempCrn);
          ed_crnNm.setValue(tempCrnNm);
          scwin.ed_crn_hidVal = tmepCrnHidVal;
        }
      }
    }

    // 사업자번호를 조회하고, 해당 사업자번호의 과세유형코드를 나타내준다.
    lc_taxnCls.setValue(taxnCls);
    // console.log("   사업자과세유형코드 taxnCls ["+taxnCls+"]  (사업자번호/명 뒤에 위치)");

    if (scwin.txt_frchNoYn == "1") {
      // 가맹점번호여부
      scwin.txt_frchCrn = ed_crn.getValue().trim(); // 가맹점사업자등록번호
      scwin.txt_frchNm = ed_crnNm.getValue().trim(); // 가맹점명
    } else {
      // console.log("    txt_frchNoYn (가맹점번호여부) != 1 아님");

      scwin.txt_frchCrn = ""; // 가맹점사업자등록번호
      scwin.txt_frchNm = ""; // 가맹정명
    }

    // KYU_NEW : 추가 바인딩
    var row = ds_txncontents.getRowPosition();
    ds_txncontents.setCellData(row, "frchCrn", scwin.txt_frchCrn); // 가맹점사업자등록번호
    ds_txncontents.setCellData(row, "frchNm", scwin.txt_frchNm); // 가맹점명
  } else {
    ed_crn.setValue(""); // 거래처코드
    ed_crnNm.setValue(""); // 거래처명명
    scwin.ed_crn_hidVal = ""; // 히든값
    scwin.vCrn = "";
  }

  // ds 코드명 세팅
  if (scwin.dsCodeNameSet == true)
    // ds에 코드명 세팅여부
    {
      console.log("    ▷▷ 코드명 세팅  [" + scwin.dsCodeNameSetRow + "][" + scwin.dsCodeNameSetColId + "][" + ed_crnNm.getValue() + "]");
      ds_txncontents.setCellData(scwin.dsCodeNameSetRow, "crnNm", ed_crnNm.getValue()); // 거래처명
    }
  console.log("▲▲▲  udc_crn_callBackFunc (사업자번호)  END ....");
};

//-------------------------------------------------------------------------
// 사원번호 조회 callBackFunc (8)
//-------------------------------------------------------------------------
scwin.udc_mgntEmpNo_callBackFunc = async function (rtnList) {
  console.log("▲ udc_mgntEmpNo_callBackFunc (사원번호 조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // KYU_NEW 2026-02-02
      scwin.ed_mgntEmpNo_hidVal = "";
      return;
    }
  }
  await scwin.f_resultPopEd(ed_mgntEmpNo, ed_mgntEmpNm, rtnList, '8');
};

//-------------------------------------------------------------------------
// 정산처 조회 callBackFunc (9)
//-------------------------------------------------------------------------
scwin.udc_adjmClntNo_callBackFunc = async function (rtnList) {
  console.log("▲ udc_adjmClntNo_callBackFunc (정산처 조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // KYU_NEW 2026-02-02
      scwin.ed_adjmClntNo_hidVal = "";
      return;
    }
  }
  await scwin.f_resultPopEd(ed_adjmClntNo, ed_adjmClntNm, rtnList, '9');
};

//-------------------------------------------------------------------------
// 거래처 조회 callBackFunc (10)
//-------------------------------------------------------------------------
scwin.udc_mgntClntNo_callBackFunc = async function (rtnList) {
  console.log("▲ udc_mgntClntNo_callBackFunc (거래처조회팝업 callBackFunc)  rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      scwin.vClntCrn = ""; // 거래처사업자번호
      scwin.txtMgntClntCrn = "";

      // KYU_NEW 2026-02-02
      scwin.ed_mgntClntNo_hidVal = "";

      // KYU_NEW : 추가 바인딩
      var row = ds_txncontents.getRowPosition();
      ds_txncontents.setCellData(row, "mgntClntCrn", scwin.txtMgntClntCrn);
      return;
    }
    vClntCrn = rtnList[4]; // 거래처사업자번호
    scwin.txtMgntClntCrn = rtnList[4]; // 거래처사업자번호
  } else {
    vClntCrn = ""; // 거래처사업자번호
    scwin.txtMgntClntCrn = "";
  }

  // KYU_NEW : 추가 바인딩
  var row = ds_txncontents.getRowPosition();
  ds_txncontents.setCellData(row, "mgntClntCrn", scwin.txtMgntClntCrn);

  // ds 코드명 세팅
  if (scwin.dsCodeNameSet == true)
    // ds에 코드명 세팅여부
    {
      console.log("    ▷▷ 코드명 세팅  [" + scwin.dsCodeNameSetRow + "][" + scwin.dsCodeNameSetColId + "][" + ed_mgntClntNm.getValue() + "]");
      ds_txncontents.setCellData(scwin.dsCodeNameSetRow, "mgntClntNm", ed_mgntClntNm.getValue()); // 거래처명
    }
  await scwin.f_resultPopEd(ed_mgntClntNo, ed_mgntClntNm, rtnList, '10');
};

//-------------------------------------------------------------------------
// 상대계정 조회 callBackFunc (11)
//-------------------------------------------------------------------------
scwin.udc_opntAcctCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_opntAcctCd_callBackFunc (상대계정 조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // KYU_NEW 2026-02-02
      scwin.ed_opntAcctCd_hidVal = "";
      return;
    }
    // ed_opntAcctCd.text  = rtnList[0];   //계정코드
    // txt_opntAcctNm.value = rtnList[1];  //계정명
    // ed_opntAcctCd.hidVal = rtnList[0];  // 히든값

    ed_opntAcctCd.setValue(rtnList[0]); // 상대계정코드
    ed_opntAcctNm.setValue(rtnList[1]); // 상대계정명
    scwin.ed_opntAcctCd_hidVal = rtnList[0]; // 히든값

    /*
        A.MGNT_NO_CD            AS COL5  /* 05.관리번호코드     *
        TO_CHAR(A.CLNT_MGNT_YN) AS COL6  /* 06.거래처관리코드   *
        TO_CHAR(A.TERM_MGNT_YN) AS COL7  /* 07.기간관리여부     *
        TO_CHAR(A.EMP_MGNT_YN)  AS COL8  /* 08.사원관리여부     *
        TO_CHAR(A.DT_MGNT_YN)   AS COL9  /* 09.일자관리여부     *
    */
    // 계정조회시화면세팅
    //r_empMgntYn,r_termMgntYn,r_dtMgntYn,r_clntMgntYn
    console.log("  -- -- f_AcctCd 호출 (상대계정조회)");
    let rtna = await scwin.f_AcctCd(rtnList[7], rtnList[6], rtnList[8], rtnList[5]);
  } else {
    // ed_opntAcctCd.text  = "";
    // txt_opntAcctNm.value = "";
    // ed_opntAcctCd.hidVal = "";
    // txt_opntAcctNm.value = "";  // KYU_TEST 반복이므로 제거

    ed_opntAcctCd.setValue("");
    ed_opntAcctNm.setValue("");
    scwin.ed_opntAcctCd_hidVal = "";
  }

  // ds 코드명 세팅
  if (scwin.dsCodeNameSet == true)
    // ds에 코드명 세팅여부
    {
      console.log("    ▷▷ 코드명 세팅  [" + scwin.dsCodeNameSetRow + "][" + scwin.dsCodeNameSetColId + "][" + ed_opntAcctNm.getValue() + "]");
      ds_txncontents.setCellData(scwin.dsCodeNameSetRow, "opntAcctNm", ed_opntAcctNm.getValue()); // 상대계정명
    }
};

//-------------------------------------------------------------------------
// 요청거래처 조회 callBackFunc (9)
//-------------------------------------------------------------------------
scwin.udc_reqClntNo_callBackFunc = async function (rtnList) {
  console.log("▲ udc_reqClntNo_callBackFunc (요청거래처 조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      // 2026-02-02 
      scwin.ed_reqClntNo_hidVal = "";
      return;
    }
  }
  await scwin.f_resultPopEd(ed_reqClntNo, ed_reqClntNm, rtnList, '15');
};

//-------------------------------------------------------------------------
// udc_acctDeptCd_callBackFunc (귀속부서조회 팝업 callBackFunc)
//   계정코드가 널이 아니면 계정코드 팝업 체크
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_acctDeptCd_callBackFunc (귀속부서조회 팝업 callBackFunc)   rtnList [" + rtnList + "]");
  // debugger;
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // KYU_TEST : 팝업 그냥 닫음
      ed_acctDeptCd.setValue("");
      ed_acctDeptNm.setValue("");
      scwin.ed_acctDeptCd_hidVal = "";
      scwin.txt_adjmAcctDeptCd = "";
      scwin.txt_costClsCd = "";
      scwin.txt_bizDomCd = "";

      // KYU_NEW : 바인딩 처리
      var row = ds_txncontents.getRowPosition();
      ds_txncontents.setCellData(row, "costClsCd", scwin.txt_costClsCd); // 비용구분
      ds_txncontents.setCellData(row, "bizDomCd", scwin.txt_bizDomCd); // 사업영역
      ds_txncontents.setCellData(row, "adjmAcctDeptCd", scwin.txt_adjmAcctDeptCd); // 전도금집행부서

      return;
    }
    ed_acctDeptCd.setValue(rtnList[0]); //부서코드
    ed_acctDeptNm.setValue(rtnList[1]); //부서명
    //ed_vatDeclarAcctDeptCd.text  =  rtnList[7];     // 부가세관리부서
    scwin.ed_acctDeptCd_hidVal = rtnList[0]; // 히든값
    scwin.txt_adjmAcctDeptCd = rtnList[5]; // 전도금집행부서
    $c.gus.cfEnableObjects($p, [ed_vatDeclarAcctDeptCd, btn_vatDeclarAcctDeptCd]);
    console.log("  ==--== 활성 (부가세관리부서,부가세관리부서돋보기)");
    scwin.txt_costClsCd = "" + rtnList[9]; // 비용구분코드
    scwin.txt_bizDomCd = "" + rtnList[3]; // 사업영역코드 (변동비 계정 조회안되도록 수정-06.12.22-박병길)

    console.log("  --- --- txt_costClsCd (비용구분): " + scwin.txt_costClsCd + "  txt_bizDomCd(사업영역): " + scwin.txt_bizDomCd);

    // KYU_NEW : 바인딩 처리
    var row = ds_txncontents.getRowPosition();
    ds_txncontents.setCellData(row, "costClsCd", scwin.txt_costClsCd); // 비용구분
    ds_txncontents.setCellData(row, "bizDomCd", scwin.txt_bizDomCd); // 사업영역
    ds_txncontents.setCellData(row, "adjmAcctDeptCd", scwin.txt_adjmAcctDeptCd); // 전도금집행부서

    // 2009년 3월 18일, 법인카드 선택시는 부가세관리부서를 재경팀으로 세팅
    if (lc_evidClsCd.getValue() == "40") {
      console.log("  --- --- lc_evidClsCd == 40 (법인카드)  f_VatDeclarAcctDeptCd(2)");
      await scwin.f_VatDeclarAcctDeptCd('2'); // 부가세귀속부서 조회 팝업

      // KYU_TEST
      if (scwin.txtCoClsCd == ACConstants.CO_CLS_CD_DONGBU) {
        ed_vatDeclarAcctDeptCd.setValue("00009");
        ed_vatDeclarAcctDeptNm.setValue("재경");

        // 귀속부서에 해당하는 신고부서가 아닌 재경에 해당하는 신고부서를 가져감
        console.log("  txtCoClsCd [" + scwin.txtCoClsCd + "] 귀속부서에 해당하는 신고부서가 아닌 재경에 해당하는 신고부서를 가져감 -- f_VatDeclarAcctDeptCd(3)");
        await scwin.f_VatDeclarAcctDeptCd(3);
      }
    }
    if (lc_evidClsCd.getValue() != "40") {
      console.log("  --- --- lc_evidClsCd != 40 (법인카드 아님)    f_VatDeclarAcctDeptCd(2)");
      await scwin.f_VatDeclarAcctDeptCd('2');
    }

    // KYU_TEST : 엑셀 업로드 시에는 실행안함. 엑셀 업로드시 계정관련 메시지 2번 표시됨
    if (scwin.uploadYn != "Y") {
      ed_acctNm.setValue("");
    }
    if (ed_acctCd.getValue() != "") {
      if (scwin.vCoCd != "023") {
        //BIDC 예외처리 2020.12.17
        if (ed_acctCd.getValue() == '4203417') {
          await $c.win.alert($p, "원)세금과공과-과징금(4203417) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
          ed_acctDeptCd.setValue("");
          ed_acctDeptNm.setValue("");
          return;
        } else if (ed_acctCd.getValue() == '5001917') {
          await $c.win.alert($p, "판)세금과공과-과징금(5001917) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
          ed_acctDeptCd.setValue("");
          ed_acctDeptNm.setValue("");
          return;
        }
      }

      // KYU_TEST : 엑셀 업로드 시에는 실행안함. 엑셀 업로드시 계정관련 메시지 2번 표시됨
      if (scwin.uploadYn != "Y") {
        await scwin.f_checkPopEd(ed_acctCd, ed_acctNm, '3');
      }
    }
  } else {
    console.log("   리턴 없슴  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
    scwin.ed_acctDeptCd_hidVal = "";
    scwin.txt_adjmAcctDeptCd = "";
    scwin.txt_costClsCd = "";
    scwin.txt_bizDomCd = "";
  }

  // KYU_NEW : 바인딩 처리
  var row = ds_txncontents.getRowPosition();
  ds_txncontents.setCellData(row, "costClsCd", scwin.txt_costClsCd); // 비용구분
  ds_txncontents.setCellData(row, "bizDomCd", scwin.txt_bizDomCd); // 사업영역
  ds_txncontents.setCellData(row, "adjmAcctDeptCd", scwin.txt_adjmAcctDeptCd); // 전도금집행부서

  // ds 코드명 세팅
  if (scwin.dsCodeNameSet == true)
    // ds에 코드명 세팅여부
    {
      console.log("    ▷▷ 코드명 세팅  [" + scwin.dsCodeNameSetRow + "][" + scwin.dsCodeNameSetColId + "][" + ed_acctDeptNm.getValue() + "]");
      ds_txncontents.setCellData(scwin.dsCodeNameSetRow, "acctDeptNm", ed_acctDeptNm.getValue()); // 귀속부서명
    }
};

//-------------------------------------------------------------------------
// 차량번호조회 callBackFunc
//-------------------------------------------------------------------------
scwin.vehcleNo_callBackFunc = function (rtnList) {
  console.log("▲ vehcleNo_callBackFunc  차량번호조회 팝업 callBackFunc   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫았을 때
      ed_vehcleNo.setValue(""); // 단축코드
      ed_vehcleNm.setValue(""); // 차량번호
    }
    ed_vehcleNo.setValue(rtnList[0]); // 단축코드
    ed_vehcleNm.setValue(rtnList[1]); // 차량번호
  } else {
    ed_vehcleNo.setValue(""); // 단축코드
    ed_vehcleNm.setValue(""); // 차량번호
  }

  // ds 코드명 세팅
  if (scwin.dsCodeNameSet == true)
    // ds에 코드명 세팅여부
    {
      console.log("    ▷▷ 코드명 세팅  [" + scwin.dsCodeNameSetRow + "][" + scwin.dsCodeNameSetColId + "][" + ed_vehcleNm.getValue() + "]");
      ds_txncontents.setCellData(scwin.dsCodeNameSetRow, "vehcleNm", ed_vehcleNm.getValue()); // 차량번호
    }
};

//-------------------------------------------------------------------------
// 팝업결과
//  flag : 신규 추가. 어떤 팝업을 호출했는지 구분
//  1:발행부서,3:계정,4:귀속부서,6:카드번호,7:사업자,8:사원,9:정산처,10:거래처,11:상대계정,12:매출입,13:지점,14:차량별실적,15:요청거래처
//-------------------------------------------------------------------------
scwin.f_resultPopEd = async function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과   flag [" + flag + "] strCd[" + strCd.getValue() + "] strNm[" + strNm.getValue() + "] rtnList[" + rtnList + "])");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫았을 때
      // 히든값 초기화
      switch (flag) {
        case '1':
          scwin.ed_slipAcctDeptCd_hidVal = "";
          break;
        // 발행부서
        case '3':
          scwin.ed_acctCd_hidVal = "";
          break;
        // 계정
        case '4':
          scwin.ed_acctDeptCd_hidVal = "";
          break;
        // 귀속부서
        case '6':
          scwin.ed_cardNo_hidVal = "";
          break;
        // 카드번호

        case '8':
          scwin.ed_mgntEmpNo_hidVal = "";
          break;
        // 사원번호
        case '9':
          scwin.ed_adjmClntNo_hidVal = "";
          break;
        // 정산처
        case '10':
          scwin.ed_mgntClntNo_hidVal = "";
          break;
        // 거래처
        case '15':
          scwin.ed_reqClntNo_hidVal = "";
          break;
        // 요청거래처
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
        scwin.ed_slipAcctDeptCd_hidVal = rtnList[0];
        break;
      // 발행부서
      case '8':
        scwin.ed_mgntEmpNo_hidVal = rtnList[0];
        break;
      // 사원번호
      case '9':
        scwin.ed_adjmClntNo_hidVal = rtnList[0];
        break;
      // 정산처
      case '10':
        scwin.ed_mgntClntNo_hidVal = rtnList[0];
        break;
      // 거래처
      case '15':
        scwin.ed_reqClntNo_hidVal = rtnList[0];
        break;
      // 요청거래처
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
        scwin.ed_slipAcctDeptCd_hidVal = "";
        break;
      // 발행부서
      case '8':
        scwin.ed_mgntEmpNo_hidVal = "";
        break;
      // 사원번호
      case '9':
        scwin.ed_adjmClntNo_hidVal = "";
        break;
      // 정산처
      case '10':
        scwin.ed_mgntClntNo_hidVal = "";
        break;
      // 거래처
      case '15':
        scwin.ed_reqClntNo_hidVal = "";
        break;
      // 요청거래처
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
// 팝업체크 - 코드값 변경시 자동검색  @@
//   flag : 팝업 플래그
//-------------------------------------------------------------------------
//   1:발행부서,3:계정,4:귀속부서,6:카드번호,7:사업자,8:사원,9:정산처,10:거래처,11:상대계정,12:매출입,13:지점,14:차량별실적,15:요청거래처
scwin.f_checkPopEd = async function (strCd, strNm, flag) {
  // console.log("===== f_checkPopEd (팝업체크  srtCd["+strCd.getValue()+"] strNm["+strNm.getValue()+"] flag["+flag+"]  1:발행부서,3:계정,4:귀속부서,6:카드번호,7:사업자,8:사원,9:정산처,10:거래처,11:상대계정,12:매출입,13:지점,14:차량별실적,15:요청거래처");
  console.log("===== f_checkPopEd (팝업체크  srtCd[" + strCd.getValue() + "] strNm[" + strNm.getValue() + "] flag[ " + flag + " ]");
  console.log("   f_checkPopEd - ed_slipAcctDeptCd_hidVal [" + scwin.ed_slipAcctDeptCd_hidVal + "]" + "  ed_acctCd_hidVal [" + scwin.ed_acctCd_hidVal + "]" + "  ed_acced_acctDeptCd_hidValtCd_hidVal [" + scwin.ed_acctDeptCd_hidVal + "]" + "  ed_vatDeclarAcctDeptCd_hidVal [" + scwin.ed_vatDeclarAcctDeptCd_hidVal + "]" + "  ed_acctDeptCd_hidVal [" + scwin.ed_acctDeptCd_hidVal + "]");
  if (strCd == "" || strCd == null) {
    // console.log("  strCd == null");

    if (strNm.getValue().trim() != "") {
      // console.log("  strNm.getValue != null");

      // ed_slipAcctDeptCd.text="";
      ed_slipAcctDeptCd.setValue("");
      await scwin.f_openPopUp(flag, 'T');
    }
  } else
    // strCd Not Null
    {
      console.log("  strCd != null");

      // console.log("   strCd.getValue() ["+strCd.getValue()+"]  ed_slipAcctDeptCd_hidVal ["+ scwin.ed_slipAcctDeptCd_hidVal +"]");

      // if (strCd.getValue().trim() == strCd.hidVal) return; //return;
      if (flag == '1' && strCd.getValue().trim() == scwin.ed_slipAcctDeptCd_hidVal ||
      // 발행부서
      flag == '3' && strCd.getValue().trim() == scwin.ed_acctCd_hidVal ||
      // 계정
      flag == '4' && strCd.getValue().trim() == scwin.ed_acctDeptCd_hidVal ||
      // 귀속부서
      flag == '6' && strCd.getValue().trim() == scwin.ed_cardNo_hidVal ||
      // 카드번호

      flag == '8' && strCd.getValue().trim() == scwin.ed_mgntEmpNo_hidVal ||
      // 사원번호
      flag == '9' && strCd.getValue().trim() == scwin.ed_adjmClntNo_hidVal ||
      // 정산처
      flag == '10' && strCd.getValue().trim() == scwin.ed_mgntClntNo_hidVal ||
      // 거래처
      flag == '15' && strCd.getValue().trim() == scwin.ed_reqClntNo_hidVal) {
        // KYU_TEST : 히든 비교시 코드가 null 이 아니어야 함. (코드 null 일 때 명 null 처리)
        // 2026-03-03 : 코드명이 널이면 다시 조회 (전표복사시 귀속부서명 비어있음)
        // if ( strCd.getValue() != "" ) {
        if (strCd.getValue() != "" && strNm.getValue() != "") {
          console.log("  -- 코드와 히든이 똑같아요 (코드,코드명 다 있음) 리턴~~~~~");
          return; // 리턴 안함. KYU_TEST 일단 리턴으로 변경
        }
      }

      // strNm.value="";
      strNm.setValue("");

      //		strCd.hidVal="";

      // 히든값 초기화
      switch (flag) {
        case '1':
          scwin.ed_slipAcctDeptCd_hidVal = "";
          break;
        // 발행부서
        case '3':
          scwin.ed_acctCd_hidVal = "";
          break;
        // 계정
        case '4':
          scwin.ed_acctDeptCd_hidVal = "";
          break;
        // 귀속부서
        case '6':
          scwin.ed_cardNo_hidVal = "";
          break;
        // 카드번호

        case '8':
          scwin.ed_mgntEmpNo_hidVal = "";
          break;
        // 사원번호
        case '9':
          scwin.ed_adjmClntNo_hidVal = "";
          break;
        // 정산처
        case '10':
          scwin.ed_mgntClntNo_hidVal = "";
          break;
        // 거래처
        case '15':
          scwin.ed_reqClntNo_hidVal = "";
          break;
        // 요청거래처
        default:
          break;
      }

      // if(strCd.text.trim()!="") {
      // 	f_openPopUp(flag,'T');

      if (strCd.getValue().trim() != "") {
        await scwin.f_openPopUp(flag, 'T');

        // 팝업 로딩 (한줄로 가능)
        // switch (flag){
        //     case '1'  : scwin.f_openPopUp(flag,'T'); break;  // 발행부서
        //     case '3'  : scwin.f_openPopUp(flag,'T'); break;  // 계정
        //     case '4'  : scwin.f_openPopUp(flag,'T'); break;  // 귀속부서
        //     case '6'  : scwin.f_openPopUp(flag,'T'); break;  // 카드번호
        //     case '8'  : scwin.f_openPopUp(flag,'T'); break;  // 사원번호
        //     case '9'  : scwin.f_openPopUp(flag,'T'); break;  // 정산처
        //     case '10' : scwin.f_openPopUp(flag,'T'); break;  // 거래처
        //     case '15' : scwin.f_openPopUp(flag,'T'); break;  // 요청거래처
        //     default   : break;
        // }
      }
    }
};

// @@ ====== 저장-준비 ========================================================================= //

//-------------------------------------------------------------------------
// 히든값체크
//-------------------------------------------------------------------------
scwin.f_HiddenCheck = async function (str, msg) {
  // console.log("=== f_HiddenCheck  str ["+str.getValue()+"]  msg ["+msg+"]");

  // if(str.text.trim()=="") return true;
  // if (str.text.trim() != str.hidVal){
  //     cfAlertMsg(MSG_CM_ERR_038,[msg]);
  //     str.SelectAll = "true";
  //     str.Focus();
  //     return false;
  // }else{
  //     return true;
  // }

  // f_Validation 에서 사용하며 다 풀어써야 함.

  if (str.getValue().trim() == "") return true;

  // console.log("    f_HiddenCheck  msg ["+msg+"]  str.getValue() ["+str.getValue()+"]  ed_slipAcctDeptCd_hidVal ["+ scwin.ed_slipAcctDeptCd_hidVal +"]");

  //if (str.text.trim() != str.hidVal){
  if (msg == "발행부서" && str.getValue().trim() != scwin.ed_slipAcctDeptCd_hidVal || msg == "사업자번호" && str.getValue().trim() != scwin.ed_crn_hidVal || msg == "카드번호" && str.getValue().trim() != scwin.ed_cardNo_hidVal || msg == "계정" && str.getValue().trim() != scwin.ed_acctCd_hidVal || msg == "귀속부서" && str.getValue().trim() != scwin.ed_acctDeptCd_hidVal || msg == "부가세관리부서" && str.getValue().trim() != scwin.ed_vatDeclarAcctDeptCd_hidVal || msg == "거래처" && str.getValue().trim() != scwin.ed_mgntClntNo_hidVal || msg == "정산처" && str.getValue().trim() != scwin.ed_adjmClntNo_hidVal || msg == "사원번호" && str.getValue().trim() != scwin.ed_mgntEmpNo_hidVal) {
    console.log("  MSG_CM_ERR_038 유효한 " + msg + " 가 아닙니다 !!!   발행부서히든: " + scwin.ed_slipAcctDeptCd_hidVal);
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_038, [msg])); // "유효한 %1가 아닙니다."
    // str.SelectAll = "true";
    // str.Focus();
    str.focus();
    return false;
  } else {
    return true;
  }
};

//-------------------------------------------------------------------------
// 각 행의 거래처가 사원거래처 인지 확인
//-------------------------------------------------------------------------
scwin.f_chkAccountClntKndCd1 = async function (chkMgntClntNo) {
  console.log("=== f_chkAccountClntKndCd1 (각행의 거래처가 사원거래처인지 확인)");

  // ds_chkAccountClntKndCd1.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=chkAccountClntKndCd1"
  //                                     + "&param1=" + chkMgntClntNo
  //                                     ;
  // ds_chkAccountClntKndCd1.Reset();
  ds_commonCode.setEmptyValue();
  ds_chkAccountClntKndCd1.setJSON([]);
  const strParam = {
    sysCd: "CommonEBC" // 시스템코드
    ,

    queryId: "chkAccountClntKndCd1" // 쿼리ID
    ,

    param1: chkMgntClntNo,
    param2: "",
    param3: ""
  };

  //데이터셋에 정보설정
  ds_commonCode.setJSON(strParam);
  let e = await $c.sbm.execute($p, sbm_chkAccountClntKndCd1);

  // console.log("▷ sbm_chkAccountClntKndCd1_submitdone (각행의 거래처가 사원거래처인지 확인)");

  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  if (e.responseJSON.GAUCE) {
    ds_chkAccountClntKndCd1.setJSON(e.responseJSON.GAUCE);
  }
};

//-------------------------------------------------------------------------
// 각 행의 정산처가 사원거래처 인지 확인
//-------------------------------------------------------------------------
scwin.f_chkAccountClntKndCd2 = async function (chkAdjmClntNo) {
  console.log("=== f_chkAccountClntKndCd2 (각행의 정산처가 사원거래처인지 확인)");
  // ds_chkAccountClntKndCd2.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=chkAccountClntKndCd2"
  //                                     + "&param1=" + chkAdjmClntNo
  //                                     ;
  // ds_chkAccountClntKndCd2.Reset();
  ds_commonCode.setEmptyValue();
  const strParam = {
    sysCd: "CommonEBC" // 시스템코드
    ,

    queryId: "chkAccountClntKndCd2" // 쿼리ID
    ,

    param1: chkAdjmClntNo,
    param2: "",
    param3: ""
  };

  //데이터셋에 정보설정
  ds_commonCode.setJSON(strParam);
  let e = await $c.sbm.execute($p, sbm_chkAccountClntKndCd2);

  // console.log("▷ sbm_chkAccountClntKndCd2_submitdone (각행의 정산처가 사원거래처인지 확인)");

  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  if (e.responseJSON.GAUCE) {
    ds_chkAccountClntKndCd2.setJSON(e.responseJSON.GAUCE);
  }
};

// @@ ====== 저장 ============================================================================== //

//-------------------------------------------------------------------------
// 발행 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  console.log("=== f_Save (발행) ==================================================");
  if (ds_txncontents.getTotalRow() == 0) {
    await $c.win.alert($p, "데이타가 없습니다.");
    return;
  }

  // if(ds_txn.isUpdated==false && ds_txncontents.isUpdated==false){
  if (ds_txn.getModifiedIndex().length == 0 || ds_txncontents.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }

  //for(i=1; i<=ds_txncontents.CountRow; i++){
  for (i = 0; i < ds_txncontents.getTotalRow(); i++) {
    ds_txncontents.setCellData(i, "coCd", scwin.txtCoCd);
    ds_txncontents.setCellData(i, "coClsCd", scwin.txtCoClsCd);
    var k = i + 1; // 문구용 순번

    if (lc_crcCd.getValue() != ACConstants.KOREA_WON) {
      var changeExchRt = Number(ds_txncontents.getCellData(i, "exchRt"));
      ds_exchRtSearch.set("crcCd", ds_txncontents.getCellData(i, "crcCd"));
      ds_exchRtSearch.set("stdDt", ica_slipDt.getValue());
      //ds_exchRtSearch.UseChangeInfo = false;
      // tr_exchRt.Post();

      // KYU_TEST : submitdone 에서 동일한 동작 발생해도 되는지?
      await $c.sbm.execute($p, sbm_exchRt);
      console.log("▼▽ --------------------  f_Save : 환율조회 후 진행 ---------");
      ds_exchRt.setRowPosition(0);

      // scwin.checkExchRt = ds_exchRt.getCellData(ds_exchRt.getRowPosition(),"stdExchRt") ;   // 기준 환율
      // console.log("  checkExchRt (문자)  ["+scwin.checkExchRt+"]  stdExchRt ["+ds_exchRt.getCellData(ds_exchRt.getRowPosition(),"stdExchRt")+"]");

      scwin.checkExchRt = Number(ds_exchRt.getCellData(ds_exchRt.getRowPosition(), "stdExchRt")).toFixed(2); // 기준 환율

      //alert(i + "번째 checkExchRt : " + checkExchRt);
      //alert(i + "번째 changeExchRt : " + changeExchRt);

      console.log("  scwin.checkExchRt [" + scwin.checkExchRt + "]  changeExchRt [" + changeExchRt + "]");
      console.log("  checkExchRt * 0.9 [" + Number(scwin.checkExchRt) * 0.9 + "] [" + Math.round(Number(scwin.checkExchRt) * 0.9 * 100) / 100.00 + "]");
      console.log("  checkExchRt * 1.1 [" + Number(scwin.checkExchRt) * 1.1 + "] [" + Math.round(Number(scwin.checkExchRt) * 1.1 * 100) / 100.00 + "]");

      // KYU_TEST
      var checkExchRtLow = Math.round(scwin.checkExchRt * 0.9 * 100) / 100.00;
      var checkExchRtUpper = Math.round(scwin.checkExchRt * 1.1 * 100) / 100.00;
      if (changeExchRt < checkExchRtLow || changeExchRt > checkExchRtUpper) {
        // 변경되는 환율이 기준 환율 값의 90% 보다 작다면
        // if ( changeExchRt < Number(scwin.checkExchRt) * 0.9 || changeExchRt > Number(scwin.checkExchRt) * 1.1){
        // alert('통화코드 선택시 환율 금액 : ' + checkExchRt          + '원' + '\n' +
        //         '환율의 90%  가 되는 금액  : ' + Math.round((checkExchRt    * 0.9) *100)/100.00 + '원' + '\n' +
        //         '환율의 110% 가 되는 금액  : ' + Math.round((checkExchRt    * 1.1) *100)/100.00 + '원' + '\n' + '\n' +
        //         i + "번째행에 입력된 환율은 기준 환율의 "+ '\n' +"90% ~ 110% 사이의 값 이어야 합니다." );

        await $c.win.alert($p, $c.data.getMessage($p, '통화코드 선택시 환율 금액 : ' + scwin.checkExchRt + '원' + '\n' + '환율의 90%  가 되는 금액  : ' + Math.round(Number(scwin.checkExchRt) * 0.9 * 100) / 100.00 + '원' + '\n' + '환율의 110% 가 되는 금액  : ' + Math.round(Number(scwin.checkExchRt) * 1.1 * 100) / 100.00 + '원' + '\n' + '\n' + k + "번째행에 입력된 환율은 기준 환율의 " + '\n' + "90% ~ 110% 사이의 값 이어야 합니다."));
        return;
      }
    }

    // if (!scwin.f_ValidationCheck(i)) return;  // 유효성 체크

    let rtn = await scwin.f_ValidationCheck(i);
    if (!rtn) {
      console.log("   f_ValidationCheck false");
      return;
    }

    // 영세율세금계산서 일때 영세구분 필수
    if (ds_txncontents.getCellData(i, "evidClsCd") == "20" && ds_txncontents.getCellData(i, "zeroTaxClsCd") == "") {
      // cfAlertMsg(i + "행의 증빙종류가 영세율세금계산서 일때 영세구분을 선택해주세요.") ;
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, k + "행의 증빙종류가 영세율세금계산서 일때 영세구분을 선택해주세요."));
      return false;
    }
    if (ds_txncontents.getCellData(i, "coCd") == "023") {
      //BID인경우
      if (ds_txncontents.getCellData(i, "acctDeptCd") == "01062") {
        //귀속부서 관리팀(웅동)은 입력 불가 - 부가세관리부서용
        // cfAlertMsg(i + "행에 입력된 귀속부서 관리팀(웅동)으로 발행 할수 없습니다.") ;
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, k + "행에 입력된 귀속부서 관리팀(웅동)으로 발행 할수 없습니다."));
        return false;
      }
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////////
  // 2015.08.20
  // 정산방법 3: 전도금. 4: 가지급금, 6: 법인카드 (adjmClsCd)
  // 거래처: mgntClntNo, 정산처: adjmClntNo
  // 경비전표, 외주수선비 생성 화면에서 거래처가 사원이거나 정산방법(경비전표기준)이 가지급금, 전도금, 법인카드 일 경우 상대 거래차가 달라도 무방
  // 나머지 전표종류에서는 무조건 차/대 거래처 안맞으면 튕기게
  /////////////////////////////////////////////////////////////////////////////////////////

  console.log("  - - - 전표종류 확인");
  // 전표종류가 차/대거래처체크 여부 전표인지 확인
  scwin.f_compareDrcrClntYn(scwin.slipKndCd);
};

//-------------------------------------------------------------------------
// 전표종류가 차/대거래처체크 여부 전표인지 확인 COMPARE_DRCR_CLNT_YN
//-------------------------------------------------------------------------
scwin.f_compareDrcrClntYn = async function (slipKndCd) {
  console.log("=== f_compareDrcrClntYn (차/대거래처체크 여부 전표인지 확인");

  // ds_compareDrcrClntYn.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=compareDrcrClntYn"
  //                                     + "&param1=" + slipKndCd
  //                                     ;
  // ds_compareDrcrClntYn.Reset();

  ds_commonCode.setEmptyValue();
  const strParam = {
    sysCd: "CommonEBC" // 시스템코드
    ,

    queryId: "compareDrcrClntYn" // 쿼리ID
    ,

    param1: scwin.slipKndCd,
    param2: "",
    param3: ""
  };
  console.log("  ");

  //데이터셋에 정보설정
  ds_commonCode.setJSON(strParam);
  console.log("  strParam [" + JSON.stringify(strParam) + "]");
  let e = await $c.sbm.execute($p, sbm_compareDrcrClntYn);
  console.log("▷ sbm_compareDrcrClntYn_submitdone (차/대거래처체크 여부 전표인지 확인)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  if (e.responseJSON.GAUCE) {
    ds_compareDrcrClntYn.setJSON(e.responseJSON.GAUCE);
  }
  await scwin.f_Save02();
};

//-------------------------------------------------------------------------
// f_Save02
//-------------------------------------------------------------------------
scwin.f_Save02 = async function () {
  console.log("=========== f_Save02 (저장 step 02) ===");

  // console.log("  scwin.checkExchRt ["+scwin.checkExchRt+"]  scwin.checkMain ["+scwin.checkMain+"]" );

  console.log(" col1 [" + ds_compareDrcrClntYn.getCellData(0, "col1") + "]   txtCoCd [" + scwin.txtCoCd + "]");
  if (ds_compareDrcrClntYn.getCellData(0, "col1") == 'Y' || scwin.txtCoCd == "023") {
    // 전표종류가 차/대거래처체크 여부 전표 이라면 체크로직 수행  , 회사코드  BIDC 일 경우 체크로직 수행(2019.09.27)

    //for(i=1; i<=ds_txncontents.CountRow; i++){
    for (i = 0; i < ds_txncontents.getTotalRow(); i++) {
      var k = i + 1; // 문구용 순번

      if (ds_txncontents.getCellData(i, "adjmClsCd") != '3' && ds_txncontents.getCellData(i, "adjmClsCd") != '4' && ds_txncontents.getCellData(i, "adjmClsCd") != '6') {
        var chkMgntClntNo = ds_txncontents.getCellData(i, "mgntClntNo"); // 각 행의 거래처 코드
        var chkAdjmClntNo = ds_txncontents.getCellData(i, "adjmClntNo"); // 각 행의 정산처 코드

        // 거래처와 정산처가 다를때
        if (chkMgntClntNo != chkAdjmClntNo) {
          // 거래처와 정산처가 사원거래처 인지 확인
          await scwin.f_chkAccountClntKndCd1(chkMgntClntNo);
          await scwin.f_chkAccountClntKndCd2(chkAdjmClntNo);

          // 거래처와 정산처가 모두 사원거래처가 아니면
          // if(ds_chkAccountClntKndCd1.NameValue(1, "col1") == 'N' && ds_chkAccountClntKndCd2.NameValue(1, "col1") == 'N'){
          if (ds_chkAccountClntKndCd1.getCellData(0, "col1") == 'N' && ds_chkAccountClntKndCd2.getCellData(0, "col1") == 'N') {
            await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, "<전표분개내역의 " + k + "번째 행 경비전표내역입력 내용 확인>\n\n" + "차변과 대변 거래처가 다릅니다\n" + "(예외: 정산방법 전도금, 가지급금 또는 사원거래처)"));
            // KYU_NEW
            // return;
          }
        }
      }

      // 정산방법이 법인카드가 아닐경우 사업자 번호와  거래처 사업자 번호가 다를경우 입력 불가 ( 2016.12.09  용호진 과장 요청)
      if (ds_txncontents.getCellData(i, "adjmClsCd") != '6') {
        if (ds_txncontents.getCellData(i, "crn") != "" && ds_txncontents.getCellData(i, "mgntClntCrn") != "") {
          if (ds_txncontents.getCellData(i, "crn") != ds_txncontents.getCellData(i, "mgntClntCrn")) {
            //alert(i+"행의 사업자번호와 거래처 사업자번호가 같지 않습니다.(예외:정산방법 법인카드)");
            await $c.win.alert($p, k + "행의 사업자번호와 거래처 사업자번호가 같지 않습니다.(예외:정산방법 법인카드)");
            return;
          }
        }
      }
    }
  }

  // KYU_NEW : 메모리 비교로 변경 - row 에 따라서 나오는 오류 메시지가 다름.
  // Validation Check
  // if ( scwin.f_Validation() != true ) {
  var row = ds_txncontents.getRowPosition();
  let rtn = await scwin.f_ValidationDs(row);
  if (!rtn) {
    console.log("    scwin.f_ValidationDs  return false ....");
    return;
  } else {
    console.log("scwin.f_ValidationDs  return true");
  }
  console.log("    f_Save02 - 증빙별금액체크");

  //증빙별금액체크
  // for(i=1; i<=ds_txncontents.CountRow; i++){
  for (i = 0; i < ds_txncontents.getTotalRow(); i++) {
    var spplayAmt = 0;
    var dcAmt = 0;
    var evidSum = 0;
    var vatAmt = 0;

    //for(j=1;j<=ds_evidac.CountRow; j++) {
    for (j = 0; j < ds_evidac.getTotalRow(); j++) {
      if (ds_txncontents.getCellData(i, "rltSeq") == ds_evidac.getCellData(j, "rltSeq")) {
        evidSum = evidSum + Number(ds_evidac.getCellData(j, "amt"));
        spplyAmt = Number(ds_txncontents.getCellData(i, "spplyAmt"));
        vatAmt = Number(ds_txncontents.getCellData(i, "vatAmt"));
        //dcAmt = ds_txncontents.NameValue(i,"dcAmt");
      }
    }

    // KYU_TEST
    // 상대계정입력이 필요한계정인것은 상대계정입력  필수확인
    console.log("  -- -- 상대계정입력이 필요한계정인것은 상대계정입력  필수확인 (FI055)");

    // var temp3 = '<%= GauceUtil.getCodeList("FI055") %>' ;
    let tempList3 = $c.gus.gauceUtil($p, "getCodeList", "FI055");
    console.log("  -- -- tempList3 [" + JSON.stringify(tempList3) + "]");

    // var tempList3 = temp3.split(","); 

    for (var j = 0; j < tempList3.length; j++) {
      // var checkList3 = tempList3[j].split("^");
      // var checkList3 = checkList3[0];  // tempList3.getCellData(j, "code");

      var checkList3 = tempList3[j].name;

      // console.log("  -- -- checkList3 ["+ checkList3 +"]");

      if (ed_acctCd.getValue().trim() == checkList3) {
        if (ed_opntAcctCd.getValue().trim() == null || ed_opntAcctCd.getValue().trim() == "") {
          await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "상대계정"));
          return;
        }
      }
    }
    console.log("  -- -- 상대계정입력  필요한 계정 체크 (FI055)");
    let codeList = $c.gus.gauceUtil($p, "getCodeList", "FI055");

    // console.log(" codeList ["+JSON.stringify(codeList)+"]  length : "+ codeList.length);

    // 조회된 상대계정허용계정 코드의 갯수만큼 루프를 돌린다.
    for (var ii = 0; ii < codeList.length; ii++) {
      // 상대계정허용계정 추출
      var opntAdmitAcct = codeList[ii].name;
      if (ed_acctCd.getValue().trim() == opntAdmitAcct) {
        if (ed_opntAcctCd.getValue().trim() == null || ed_opntAcctCd.getValue().trim() == "") {
          //cfAlertMsg(MSG_CM_ERR_055,Array("상대계정"));
          await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "상대계정"));
          return;
        }
      }
    }
    if (scwin.isSubCompany == false) {
      //자회사 여부
      // 투입불가 계정이 들어갔는지 체크.
      for (i = 0; i < ds_txncontents.getTotalRow(); i++) {
        var k = i + 1; // 문구용 순번

        for (j = 0; j < ds_acctCd.getTotalRow(); j++) {
          var trgtAcct = ds_txncontents.getCellData(i, "acctCd");
          // console.log("  ["+j+"]  trgtAcct ["+ trgtAcct +"]");

          if (ds_txncontents.getCellData(i, "acctCd") == ds_acctCd.getCellData(j, "col1")) {
            await $c.win.alert($p, k + "행에 입력한 계정(" + ds_txncontents.getCellData(i, "acctCd") + ")은 투입불가 계정입니다.");
            return;
          }
        }
      }
    }
    var deductSum = 0;
    if (evidSum != 0) {
      // 공제,불공제 구분에따라 금액이 달라짐
      if (lc_deductClsCd.getValue() == "2") {
        deductSum = Number(spplyAmt + vatAmt);
      } else {
        deductSum = Number(spplyAmt);
      }
      console.log("  -- -- [" + lc_deductClsCd.getValue() + "]  evidSum [" + evidSum + "]  deductSum [" + deductSum + "]");

      // alert(evidSum);
      // alert(deductSum);
      if (Number(deductSum) != evidSum) {
        // cfAlertMsg(MSG_CM_ERR_055,Array("증빙별 금액"));
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "증빙별 금액"));
        return;
      }
    }
  }
  console.log("  - - - 가지급금금액체크");

  // 가지급금금액체크
  // for(i=1; i<=ds_txncontents.CountRow; i++){
  for (i = 0; i < ds_txncontents.getTotalRow(); i++) {
    var prepaySum = 0;
    var prepaySumFcrc = 0;
    var amtSum = 0;
    var amtSumFcrc = 0;
    var slipSum = 0;
    var slipSumFcrc = 0;
    var reqSum = 0;
    var reqSumFcrc = 0;
    var slipNo = 0;

    //alert(ds_txncontents.NameString(i,"adjmClsCd"));
    if (ds_txncontents.getCellData(i, "adjmClsCd") == ACConstants.ADJM_MTHDCD_SUSPAY) {
      for (j = 0; j < ds_prov.getTaotlaRow(); j++) {
        if (ds_txncontents.getCellData(i, "rltSeq") == ds_prov.getCellData(j, "rltSeq")) {
          amtSum = Number(ds_txncontents.getCellData(i, "spplyAmt")) + Number(ds_txncontents.getCellData(i, "vatAmt")) - Number(ds_txncontents.getCellData(i, "dcAmt")) + Number(ds_txncontents.getCellData(i, "etcAmt1")) + Number(ds_txncontents.getCellData(i, "etcAmt2"));
          amtSumFcrc = Number(ds_txncontents.getCellData(i, "spplyAmtFcrc"));
          prepaySum = prepaySum + Number(ds_prov.getCellData(j, "setlIntendAmt"));
          prepaySumFcrc = prepaySumFcrc + Number(ds_prov.getCellData(j, "setlIntendAmtFcrc"));
        }
      } // for end

      //alert(amtSum);
      //alert(prepaySum);
      if (prepaySum == 0 && lc_crcCd.getValue() == ACConstants.KOREA_WON) {
        //cfAlertMsg(MSG_CM_ERR_002,Array("정리금액"));
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "정리금액"));
        return;
      }
      if (amtSum != prepaySum && lc_crcCd.getValue() == ACConstants.KOREA_WON) {
        //cfAlertMsg(MSG_CM_ERR_055,Array("정리금액"));
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "정리금액"));
        return;
      }
      if (prepaySumFcrc == 0 && lc_crcCd.getValue() != ACConstants.KOREA_WON) {
        //cfAlertMsg(MSG_CM_ERR_002,Array("정리외화금액"));
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "정리외화금액"));
        return;
      }
      if (amtSumFcrc != prepaySumFcrc && lc_crcCd.getValue() != ACConstants.KOREA_WON) {
        //cfAlertMsg(MSG_CM_ERR_055,Array("정리외화금액"));
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "정리외화금액"));
        return;
      }
    } // if end
  } // for end

  //  환율 체크
  if (lc_crcCd.getValue() != ACConstants.KOREA_WON) {
    // var changeExchRt = ds_txncontents.getCellData(ds_txncontents.getRowPosition(),"exchRt");
    var changeExchRt = Number(ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "exchRt"));
    console.log(" cfCheckExchRt (환율체크) 이전");
    console.log("  scwin.checkExchRt [" + scwin.checkExchRt + "]  changeExchRt [" + changeExchRt + "]  scwin.checkMain [" + scwin.checkMain + "]");
    console.log("  checkExchRt * 0.9 [" + Number(scwin.checkExchRt) * 0.9 + "] [" + Math.round(Number(scwin.checkExchRt) * 0.9 * 100) / 100.00 + "]");
    console.log("  checkExchRt * 1.1 [" + Number(scwin.checkExchRt) * 1.1 + "] [" + Math.round(Number(scwin.checkExchRt) * 1.1 * 100) / 100.00 + "]");

    //     // KYU_TEST
    //     var checkExchRtLow 		= Math.round((scwin.checkExchRt 	* 0.9) *100)/100.00;
    //     var checkExchRtUpper 	= Math.round((scwin.checkExchRt 	* 1.1) *100)/100.00;

    // if(changeExchRt < checkExchRtLow || changeExchRt > checkExchRtUpper) {	// 변경되는 환율이 기준 환율 값의 90% 보다 작다면
    // 	await $c.win.alert('통화코드 선택시 환율 금액 : ' + checkExchRt 			+ '원' + '\n' +
    // 		  '환율의 90%  가 되는 금액  : ' + checkExchRtLow 		+ '원' + '\n' +
    // 		  '환율의 110% 가 되는 금액  : ' + checkExchRtUpper 	+ '원' + '\n' + '\n' +
    // 		  "변경되는 환율은 기준 환율의 90% ~ 110% 값이어야  합니다.");
    // 	return false;
    // }

    // 저장버튼 클릭시 환율에 대한 체크를 하는 함수 호출
    // KYU_NEW : 비동기함수는 비동기로 받아야 함!! 
    let ret = await $c.gus.cfCheckExchRt($p, scwin.checkExchRt, changeExchRt, scwin.checkMain);
    if (ret != true) {
      console.log("  -- cfCheckExchRt (저장시 환율 체크) 오류 발생, 리턴");
      return;
    }
  }
  console.log("  - - - 공제시 부가세액 검증");

  // KYU_TEST : 2025-12-10  외화의 경우 자동으로 부가세액 계산이 안되므로 오류 발생함

  // 20120719 추가 by kimseok
  // 공제구분이 [공제]인데
  if (lc_deductClsCd.getValue() == "1") {
    // 부가세액값이 공백/null/0 일 경우 경고매세지 출력후 종료
    if (ed_vatAmt.getValue() == "" || ed_vatAmt.getValue() == null || ed_vatAmt.getValue() == "0") {
      await $c.win.alert($p, "공제구분이 [공제]인데, 부가세액 값이 없습니다~!!\n확인하시고 다시 입력해주세요~!");
      return;
    }
  }
  console.log("  - - - 차량별실적");

  // 차량별실적 필드 검사
  if (ds_tmp.getTotalRow() != 0) {
    var ds_txncontentsNum = 0;
    if (ds_txncontents.getTotalRow() != 0) {
      ds_txncontentsNum = ds_txncontentsNum + Number(ds_txncontents.getCellData("spplyAmt", 0, ds_txncontents.getTotalRow()));
      ds_txncontentsNum = ds_txncontentsNum + Number(ds_txncontents.getCellData("vatAmt", 0, ds_txncontents.getTotalRow()));
    }
    if (Number(scwin.numStr_hidden) != Number(ds_txncontentsNum)) {
      await $c.win.alert($p, "차량별실적 금액과 공급금액과 부가세액의 합이 같지 않습니다.");
      return;
    }
  }
  var chkPayAmt = 0;
  var chkSuspenseAmt = 0;
  var payAmt = 0;
  var suspenseAmt = 0;

  // KYU_TEST
  // var slipDate = new Date(ed_slipDt.text.substring(0, 4), ed_slipDt.text.substring(4, 6), ed_slipDt.text.substring(6, 8));
  // var slipBfLast = new Date( slipDate.getFullYear(),  (slipDate.getMonth() - 1), 0);
  // var slipBfMm = slipBfLast.getMonth();

  var slipDate = new Date(ica_slipDt.getValue().substring(0, 4), ica_slipDt.getValue().substr(4, 2), ica_slipDt.getValue().substr(6, 2));
  var slipBfLast = new Date(slipDate.getFullYear(), slipDate.getMonth() - 1, 0);
  var slipBfMm = slipBfLast.getMonth();
  slipBfMm += 1;
  slipBfMm = slipBfMm < 10 ? "0" + slipBfMm : slipBfMm;
  var slipBfDd = slipBfLast.getDate() < 10 ? "0" + slipBfLast.getDate() : slipBfLast.getDate();
  var lastDate = String(slipBfLast.getFullYear()) + slipBfMm + slipBfDd;
  var bfMmDay = 0;
  var fullDay = 0;
  console.log("  slipBfLast : " + slipBfLast + "  slipBfMm : " + slipBfMm + "  lastDate : " + lastDate);
  for (i = 0; i < ds_txncontents.getTotalRow(); i++) {
    stDate = ds_txncontents.getCellData(i, "mgntTermStDt");
    endDate = ds_txncontents.getCellData(i, "mgntTermEndDt");
    if ($c.gus.cfIsNull($p, ds_txncontents.getCellData(i, "mgntTermStDt")) != true || $c.gus.cfIsNull($p, ds_txncontents.getCellData(i, "mgntTermEndDt")) != true) {
      bfMmDay = parseInt($c.date.diffDate($p, stDate, lastDate)) + 1;
      fullDay = parseInt($c.date.diffDate($p, stDate, endDate)) + 1;
      console.log("  bfMmDay (start-last) : " + bfMmDay + "  fullDay (start-end) : " + fullDay);
      if (parseInt($c.date.diffDate($p, stDate, lastDate)) > 0) {
        payAmt = Math.round(bfMmDay / fullDay * ds_txncontents.getCellData(i, "spplyAmt"));
        suspenseAmt = ds_txncontents.getCellData(i, "spplyAmt") - payAmt;
        chkPayAmt += payAmt;
        chkSuspenseAmt += suspenseAmt;
      } else {
        if (scwin.f_suspenseCheck(ds_txncontents.getCellData(i, "mgntTermStDt"), ds_txncontents.getCellData(i, "mgntTermEndDt"), ica_slipDt.getValue())) {
          chkSuspenseAmt += ds_txncontents.getCellData(i, "spplyAmt");
        } else {
          chkPayAmt += ds_txncontents.getCellData(i, "spplyAmt");
        }
      }
    }
  }

  //alert("chkSuspenseAmt : " + chkSuspenseAmt + "/ chkPayAmt " + chkPayAmt);
  var chkConfirm = "";
  if (chkSuspenseAmt == 0 && chkPayAmt == 0) {
    chkConfirm = "발행하시겠습니까?";
  } else {
    chkConfirm = "- 당월 비용 " + chkPayAmt + "원," + "\n" + "- 선급 비용 " + chkSuspenseAmt + "원으로 전표 발행됩니다." + "\n" + "발행하시겠습니까?";
  }
  console.log("  - - - 그리드 검증 (cfValidateGrid)");

  // if($c.gus.cfValidate([gr_txncontents])){

  let validArray = [{
    id: "spplyAmt",
    name: "금액",
    mandatory: true,
    notAllowed: 0
  }
  // {id:"productNo", name: "SHIFT", mandatory: true},  // 그리드에 없슴
  // {id:"slipKndCd", name: "반", mandatory: false},
  ];
  let ret = await $c.gus.cfValidateGrid($p, gr_txncontents, null, null, validArray, "경비전표입력");
  if (ret) {
    // if(confirm(chkConfirm)==true){
    let rtn = await $c.win.confirm($p, chkConfirm); // 문구추가

    if (rtn) {
      // 증빙별계정구분
      // for(i=1; i<=ds_txncontents.CountRow; i++){
      for (i = 0; i < ds_txncontents.getTotalRow(); i++) {
        if (ds_evidac.getTotalRow() == 0) {
          ds_txncontents.setCellData(i, "acctDistYn", "0");
        } else {
          for (j = 0; j < ds_evidac.getTotalRow(); j++) {
            if (ds_txncontents.getCellData(i, "rltSeq") == ds_evidac.getCellData(j, "rltSeq")) {
              // 관련사건저장순번
              ds_txncontents.setCellData(i, "acctDistYn", "1");
              break;
            } else {
              ds_txncontents.setCellData(i, "acctDistYn", "0");
            }
          }
        }
        //지급방법이 지로납부이면 alert띄움
        if (ds_txncontents.getCellData(i, "giroYn") == 1) {
          await $c.win.alert($p, "지로를 재경팀으로 송부하시기 바랍니다.");
        }
      }

      // 가지급금 적요,정리일자
      // for(i=1;i<=ds_prov.CountRow; i++) {
      //     for(j=1;j<=ds_provHeader.CountRow; j++) {
      for (i = 0; i < ds_prov.getTotalRow(); i++) {
        for (j = 0; j < ds_provHeader.getTotalRow(); j++) {
          if (ds_prov.getCellData(i, "rltSeq") == getCellData.getCellData(j, "rltSeq")) {
            // 관련사건저장순번
            // ds_prov.NameString(i,"summary")=ds_provHeader.NameString(j,"summary");
            // ds_prov.NameString(i,"setlDt")=ds_provHeader.NameString(j,"setlDt");
            // ds_prov.NameString(i,"bankbookNo")=ds_provHeader.NameString(j,"bankbookNo");
            ds_prov.setCellData(i, "summary", ds_provHeader.getCellData(j, "summary"));
            ds_prov.setCellData(i, "setlDt", ds_provHeader.getCellData(j, "setlDt"));
            ds_prov.setCellData(i, "bankbookNo", ds_provHeader.getCellData(j, "bankbookNo"));
            break;
          }
        }
      }

      // ds_txn.NameValue(ds_txn.CountRow,"slipKndCd") = slipKndCd;
      // ds_txncontents.NameValue(ds_txncontents.RowPosition, "buyCollectionNum") = " ";  

      console.log(" scwin.slipKndCd : " + scwin.slipKndCd + "  ds_txn.row : " + ds_txn.getTotalRow());

      // 주의! 가우스는 데이타리스트 시작이 1 이므로  총건수1 로 세팅 가능. 웹스퀘어는 시작이 0 이므로 총건수로 안들어감 !!!
      ds_txn.setCellData(ds_txn.getTotalRow() - 1, "slipKndCd", scwin.slipKndCd);
      ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "buyCollectionNum", " ");
      var dc = ds_txn.getAllArray();
      console.log("  *** ds_txn : " + JSON.stringify(dc));
      dc = ds_txncontents.getAllArray();
      console.log("  *** ds_txncontents (" + ds_txncontents.getTotalRow() + ") : " + JSON.stringify(dc));
      dc = ds_prov.getAllArray();
      console.log("  *** ds_prov : " + JSON.stringify(dc));

      //tr_save.Post();
      await $c.sbm.execute($p, sbm_save);
    }
  }
  scwin.varCostClsCd = "";
};

//-------------------------------------------------------------------------
// 발행 submitdone  @@
//    BIDC interface 전표번호 업데이트 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  console.log("▷ sbm_save_submitdone (발행 submitdone)");

  // language=JavaScript for=tr_save event=OnSuccess()>

  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // if(ds_slipNo.getCellData(0,"slipNo") !=""){
  // 	//cfShowSlipInfo(ds_slipNo.NameValue(1,"slipNo"));
  // 	var valueObject = new Object();

  // 	valueObject.slipNo = ds_slipNo.getCellData(0,"slipNo");

  // 	var result = window.showModalDialog("/ac/fi/gnrlaccount/slipmgnt/fi_201_04_06p.jsp", valueObject,
  // 				 "dialogWidth:825px; dialogHeight:560px; status:no; scroll:no");
  // }

  // "slipNo": "1017078071Anull",

  if (ds_slipNo.getCellData(0, "slipNo") != "") {
    // 전표내역조회 (fi_201_04_06p) 호출 
    let data = {
      slipNo: ds_slipNo.getCellData(0, "slipNo")
    };
    console.log("^^^^^ data : " + JSON.stringify(data));
    let win_url = "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_04_06p.xml";
    let opts = {
      id: "slipContentPop",
      popupName: "전표내역조회",
      modal: true,
      type: "browserPopup",
      width: 1240,
      height: 660,
      title: "전표내역조회"
    };
    var rt = await $c.win.openPopup($p, win_url, opts, data);
    console.log(" rt [" + rt + "]");

    // KYU_TEST :
    if (rt != null) {
      // console.log(" rtrValue ["+ JSON.stringify(rt[0]) +"]" );
      // if( JSON.stringify(rt[0]) == "Y" ) {
      //     scwin.f_Retrieve();
      // }
    }
  }
  console.log("========== ========== 경비 전표발행후 화면 정리 시작 =====================");
  scwin.state = "Y";
  scwin.delflag = "N";
  ds_txncontents.setJSON([]);
  $c.gus.cfDisableKeyData($p);
  console.log("  발행후 ==--== 비활성 (cfDisableKeyData)");
  // KYU_NEW : 발행부서돋보기는 활성 처리
  $c.gus.cfEnableKeyData($p, [btn_slipAcctDeptCd]);
  $c.gus.cfEnableAllBtn($p);
  console.log("  발행후 ==--== 활성 (cfEnableAllBtn)");
  scwin.slipDt = ica_slipDt.getValue();

  // KYU_NEW : 히든값 초기화
  await scwin.f_setHidVal();
  await scwin.f_OnLoad();
  console.log("========== f_OnLoad 실행 이후 =====================");

  // KYU_NEW : 발행부서 팝업 - f_OnLoad2 실행 (초기 화면으로 복원)
  //           f_OnLoad 에 팝업 체크가 있기는 하지만 팝업 실행이 안됨 (내용 수정 대신 팝업 다시 로딩)
  await scwin.f_openPopUp('1', 'T');

  // $c.gus.cfEnableObj(ica_slipDt, true);
  // $c.gus.cfEnableObj(ed_slipAcctDeptCd, true);
  // $c.gus.cfEnableObj(ed_slipAcctDeptNm, true);

  $c.gus.cfEnableObjects($p, [ica_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm]);
  console.log("  발행후 ==--== 활성 (작성일자,작성부서,작성부서명)");
  scwin.rltSeq = 0; // 구분값 (관련사건저장순번)
  ed_pchsAmtSum.setValue(""); // 차량별실적
};

//-------------------------------------------------------------------------
//  f_ValidationCheck
//-------------------------------------------------------------------------
scwin.f_ValidationCheck = async function (i) {
  console.log("===== f_ValidationCheck   ######");

  // 문구용 순번
  var k = i + 1;

  // 법인카드나 개인카드 시  카드번호 정산처필수
  if (ds_txncontents.getCellData(i, "evidClsCd") == "40" || ds_txncontents.getCellData(i, "evidClsCd") == "50") {
    if (ds_txncontents.getCellData(i, "cardNm ") == "") {
      await $c.win.alert($p, k + "행의 카드번호를 입력하세요.");
      return false;
    }
  }

  //증빙구분이 세금계산서일때 거래처 필수
  if (ds_txncontents.getCellData(i, "evidClsCd") == "10") {
    if (ds_txncontents.getCellData(i, "mgntClntNo ") == "") {
      await $c.win.alert($p, i + "행의 거래처를 입력하세요.");
      return false;
    }
  }

  // 미지급이나 법인카드시 정산처 필수,외상매입금도 추가 ( 2007.02.05 법인카드일때 정산처 필수 )
  if ((ds_txncontents.getCellData(i, "adjmClsCd") == 1 || ds_txncontents.getCellData(i, "adjmClsCd") == 2 || ds_txncontents.getCellData(i, "adjmClsCd") == 6 || ds_txncontents.getCellData(i, "adjmClsCd") == 9) && ds_txncontents.getCellData(i, "adjmClntNo") == "") {
    await $c.win.alert($p, k + "행의 정산처를 입력하세요.");
    return false;
  }

  // 전도금일경우 전도금 집행부서는 필수
  if (ds_txncontents.getCellData(i, "adjmClsCd") == 3 && ds_txncontents.getCellData(i, "adjmAcctDeptCd") == "") {
    // cfAlertMsg(MSG_CM_ERR_002,Array("정산방법이 전도금일 경우 귀속부서의 전도금 집행부서"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "정산방법이 전도금일 경우 귀속부서의 전도금 집행부서"));
    return false;
  }
  var startDate = ds_txncontents.getCellData(i, "mgntTermStDt");
  var endDate = ds_txncontents.getCellData(i, "mgntTermEndDt");
  if (!$c.gus.cfIsAfterDate($p, startDate, endDate)) {
    // cfAlertMsg(MSG_CM_ERR_039);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return false;
  }

  //금액체크(금액=공급금액+부가세액)
  var amt = 0;
  amt = Number(Number(ds_txncontents.getCellData(i, "spplyAmt")) + Number(ds_txncontents.getCellData(i, "vatAmt")));
  console.log(" amt [" + amt + "]  txt_limitAmt (한도금액) [" + scwin.txt_limitAmt + "]");
  if (amt > Number(ds_txncontents.getCellData(i, "limitAmt"))) {
    // 금액(공급금액+부가세액)은(는) 한도액() 보다 작아야 합니다.
    var temp = "한도액(" + Number(ds_txncontents.getCellData(i, "limitAmt")) + ") ";
    console.log("  -  temp [" + temp + "]");

    // cfAlertMsg(MSG_CM_ERR_048,Array("금액(공급금액+부가세액)","한도액("+ds_txncontents.getCellData(i,"limitAmt")+") "));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_048, "금액(공급금액+부가세액)", "한도액(" + ds_txncontents.getCellData(i, "limitAmt") + ") "));
    return false;
  }

  // 계정코드와 부서체크
  // 1^자산,2^부채,3^자본,4^수익,5^비용,6^원가
  // 비용구분 : 01^원가,02^판관비,03^원가+판관비
  if (ds_txncontents.getCellData(i, "costClsCd") == "") {
    // cfAlertMsg(MSG_CM_WRN_018,Array("부서에 따른 비용구분코드","비용구분코드를 등록"));
    console.log("  MSG_CM_WRN_018  3");
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_WRN_018, "부서에 따른 비용구분코드", "비용구분코드를 등록"));
    return false;
  }
  if (ds_txncontents.getCellData(i, "costClsCd") == "01" && ds_txncontents.getCellData(i, "acctClsCd") != "6" && ds_txncontents.getCellData(i, "acctCd") != "6120220") {
    // cfAlertMsg(MSG_CM_ERR_061,Array("원가부서","원가계정"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "원가부서", "원가계정"));
    return false;
  }
  if (ds_txncontents.getCellData(i, "costClsCd") == "02" && ds_txncontents.getCellData(i, "acctClsCd") != "5" && ds_txncontents.getCellData(i, "acctCd") != "6120220") {
    console.log(" -- [" + ds_txncontents.getCellData(i, "costClsCd") + "] [" + ds_txncontents.getCellData(i, "acctClsCd") + "]  [" + ds_txncontents.getCellData(i, "acctCd") + "]");
    // cfAlertMsg(MSG_CM_ERR_061,Array("판관비부서","비용계정"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "판관비부서", "비용계정"));

    // 계정
    ed_acctCd.focus();
    return false;
  }
  if (ds_txncontents.getCellData(i, "costClsCd") == "03" && ds_txncontents.getCellData(i, "acctClsCd") != "6" && ds_txncontents.getCellData(i, "acctClsCd") != "5" && ds_txncontents.getCellData(i, "acctCd") != "6120220") {
    // cfAlertMsg(MSG_CM_ERR_055,Array("부서와 계정"));
    $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "부서와 계정"));
    return false;
  }

  // 법인카드일경우 증빙종류가 법인카드
  if (ds_txncontents.getCellData(i, "adjmClsCd") == "6" && ds_txncontents.getCellData(i, "evidClsCd") != "40") {
    // cfAlertMsg(MSG_CM_ERR_061,Array(i+"행의 정산방법이 법인카드일 경우 증빙종류는 법인카드"));
    // await $c.gus.cfAlertMsg($c.data.getMessage(MSG_CM_ERR_061, k + "행의 정산방법이 법인카드일 경우 증빙종류는 법인카드",""));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, k + "행의 정산방법이 법인카드일 경우 증빙종류", "법인카드")); // 개선 : 가우스는 %2 안나옴
    return false;
  }
  if (ds_txncontents.getCellData(i, "evidClsCd") == "40" && ds_txncontents.getCellData(i, "adjmClsCd") != "6") {
    // cfAlertMsg(MSG_CM_ERR_061,Array(i+"행의 증빙종류가 법인카드일 경우 정산방법은 법인카드"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, k + "행의 증빙종류가 법인카드일 경우 정산방법", "법인카드")); // 개선 : 가우스는 %2 안나옴
    return false;
  }
  if (ds_txncontents.getCellData(i, "paymentPrd") == "" && ds_txncontents.getCellData(i, "giroYn") == "1") {
    await $c.gus.cfAlertMsg($p, k + "행의 지로 납부기한을 입력해 주십시오.");
    return false;
  }

  // 차량 유지비 계정일 경우 업무용차량구분 필수
  if (ds_txncontents.getCellData(i, "acctCd") == '4203600' || ds_txncontents.getCellData(i, "acctCd") == '4203610' || ds_txncontents.getCellData(i, "acctCd") == '4203620' || ds_txncontents.getCellData(i, "acctCd") == '4203640' || ds_txncontents.getCellData(i, "acctCd") == '4203660' || ds_txncontents.getCellData(i, "acctCd") == '5002100' || ds_txncontents.getCellData(i, "acctCd") == '5002110' || ds_txncontents.getCellData(i, "acctCd") == '5002120' || ds_txncontents.getCellData(i, "acctCd") == '5002140' || ds_txncontents.getCellData(i, "acctCd") == '5002160') {
    if (ds_txncontents.getCellData(i, "busiCarYn") == 0) {
      await $c.gus.cfAlertMsg($p, k + "행의 계정코드가 차량유지비 계정일 경우 업무용차량여부를 'Y' 또는 'N'을 선택하십시오.");
      return false;
    }
  }

  //업무용차량여부 체크
  if (ds_txncontents.getCellData(i, "busiCarYn") == 1) {
    if (ds_txncontents.getCellData(i, "expenseCd") == "") {
      await $c.gus.cfAlertMsg($p, k + "행의 비용구분을 선택하여 주십시오.");
      return false;
    }
    if (ds_txncontents.getCellData(i, "vehcle") == "") {
      await $c.gus.cfAlertMsg($p, k + "행의 차량번호를 선택하여 주십시오.");
      return false;
    }
  }
  console.log("===== f_ValidationCheck END  ######");
  return true;
};

//-------------------------------------------------------------------------
// 선급비용 여부 체크 2016.11.02
//-------------------------------------------------------------------------
scwin.f_suspenseCheck = function (FromDt, ToDt, SlipDt) {
  console.log("=== f_suspenseCheck (선급비용 여부 체크)");
  if (SlipDt.substring(0, 6) < FromDt.substring(0, 6)) return true;
  if (FromDt.substring(0, 6) < ToDt.substring(0, 6)) return true;
  return parseInt($c.date.diffDate($p, FromDt, ToDt)) + 1 >= 31;
};

// @@ ====== 기타 ============================================================================== //

//-------------------------------------------------------------------------
//  사업자명 입력시
//-------------------------------------------------------------------------
scwin.SetCrnNm = async function () {
  console.log("=== SetCrnNm (가맹점번호여부[" + scwin.txt_frchNoYn + "] 1이면, 가맹점명(txt_frchNm) -- ed_crnNm)");
  if (scwin.txt_frchNoYn == "1") {
    // 가맹점번호여부
    // txt_frchNm.value = txt_crnNm.value.trim();
    scwin.txt_frchNm = ed_crnNm.getValue().trim(); // 가맹점명

    // KYU_NEW : 추가 바인딩
    var row = ds_txncontents.getRowPosition();
    ds_txncontents.setCellData(row, "frchNm", scwin.txt_frchNm); // 가맹점명
  }
  return true;
};

//-------------------------------------------------------------------------
//  사업자명에 가맹점명 복사
//-------------------------------------------------------------------------
scwin.f_CrnNm = async function (row) {
  console.log("=== f_CrnNm (사업자명에 가맹점명 복사) : ed_crnNm [" + ed_crnNm.getValue() + "] (널이면) <-- ds_txncontents.frchNm [" + ds_txncontents.getCellData(row, "frchNm") + "])");
  if (ed_crnNm.getValue() == "" && typeof ds_txncontents.getCellData(row, "frchNm") != "undefined" || $c.gus.cfIsNull($p, ed_crnNm.getValue())) {
    // txt_crnNm.value = ds_txncontents.NameValue(row,"frchNm");
    ed_crnNm.setValue(ds_txncontents.getCellData(row, "frchNm"));
  }
  return true;
};

//-------------------------------------------------------------------------
// Template DownLoad 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_templateDownload_onclick = function (e) {
  // <a href="Javascript:cfDownloadFile('경비전표_템플릿.xls','ac/fi/gnrlaccount/slipmgnt/fi_201_01_01b.xls')">Template DownLoad</a>
  // 해당 파일[ac/fi/gnrlaccount/slipmgnt/fi_201_01_01b.xls]이 존재하지 않습니다.
};

//-------------------------------------------------------------------------
// 공통코드명 검색
//-------------------------------------------------------------------------
scwin.getCommonCodename = function (code, codetype) {
  if (code == null) return "";

  // switch(codetype){	
  // 	case "FI069":
  // 		CodeData = '<%= GauceUtil.getCodeList("FI069") %>' ;  // FI0965:과세유형구분코드 
  // 		break;			
  // 	case "evidClsCd": // 증빙종류
  // 	    CodeData = '40^법인카드,50^개인카드';
  // 		break;			
  // 	default:
  // 		break;
  // }
  // var CodeList = CodeData.split(",");    
  // for(var ii=0; ii<CodeList.length; ii++){
  //     var CodeListDetail = CodeList[ii].split("^");        
  //     if( CodeListDetail[0].trim() == code ){
  //         cfEnableObjects( [ ed_opntAcctCd, img_opntAcctCd ] );
  //         return CodeListDetail[1].trim();
  //     }
  // } 

  if (codetype == "FI069") {
    let codeList = $c.gus.gauceUtil($p, "getCodeList", "FI069");

    // console.log("  -- 공통코드명 검색 (FI069 - 과세유형구분) : CodeData ["+JSON.stringify(codeList)+"]");

    for (var i = 0; i < codeList.length; i++) {
      var admin = codeList[i].code;
      if (code == admin) {
        $c.gus.cfEnableObjects($p, [ed_opntAcctCd, btn_opntAcctCd]);
        console.log("   FI069 [" + i + "] ==--== 활성 (상대계정,상대계정돋보기)  return [" + codeList[i].name.trim() + "]");
        return codeList[i].name.trim();
      }
    }
  } else if (codetype == "evidClsCd") {
    let CodeData = "40^법인카드,50^개인카드";

    // console.log("  -- 공통코드명 검색 (evidClsCd - 증빙구분) : CodeData ["+CodeData+"]");

    let CodeList = CodeData.split(",");
    for (var ii = 0; ii < CodeList.length; ii++) {
      let CodeListDetail = CodeList[ii].split("^"); // 캐럿,꺽쇠 처리
      if (CodeListDetail[0].trim() == code) {
        $c.gus.cfEnableObjects($p, [ed_opntAcctCd, btn_opntAcctCd]);
        console.log("   evidClsCd [" + ii + "] ==--== 활성 (상대계정,상대계정돋보기)  return [" + CodeListDetail[1].trim() + "]");
        return CodeListDetail[1].trim();
      }
    }
  } else {
    var rtn = "";
    return rtn;
  }
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 지로납부 체크박스 change
//-------------------------------------------------------------------------
scwin.cbx_giro_onchange = async function (info) {
  await scwin.f_CheckPayYn();
};

//-------------------------------------------------------------------------
// 공급금액 focus out
//-------------------------------------------------------------------------
scwin.ed_spplyAmt_onblur = async function (e) {
  console.log("----- ed_spplyAmt_onblur (공급금액 focus out)");

  // language=JavaScript for=ed_spplyAmt event=OnKillFocus()>
  await scwin.setAmt();
};

//-------------------------------------------------------------------------
//  사업자명 focus out
//-------------------------------------------------------------------------
scwin.udc_crn_onblurNameEvent = async function (e) {
  await scwin.SetCrnNm();
};

//-------------------------------------------------------------------------
//  사업자명 입력시
//-------------------------------------------------------------------------
scwin.SetCrnNm = function () {
  console.log("=== SetCrnNm ( 가맹점번호여부 = 1 이면 ed_crnNm --> txt_frchNm)");
  // 가맹점번호여부 = 1 이면
  if (scwin.txt_frchNoYn == "1") {
    scwin.txt_frchNm = ed_crnNm.getValue().trim();
  }
};

// @@ ====== 이벤트 - 로직 ===================================================================== //

//-------------------------------------------------------------------------
//  부가세액 셋팅
//-------------------------------------------------------------------------
scwin.setAmt = async function () {
  console.log("=== setAmt (부가세액 셋팅) txt_vatYn [" + scwin.txt_vatYn + "]  vatYn[" + ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "vatYn") + " )");

  // 부가세여부가 셋팅시
  if (scwin.txt_vatYn == "1") {
    var temp = Math.round(ed_spplyAmt.getValue().trim() * 0.1); //버림->반올림 2012.07.10
    ed_vatAmt.setValue(temp);
  } else {
    ed_vatAmt.setValue(0);
  }
  console.log("   ed_vatAmt [" + ed_vatAmt.getValue() + "]");
};

//-------------------------------------------------------------------------
// 업무용차량여부 체크
//-------------------------------------------------------------------------
scwin.f_chk_busiCarYn = function (e) {
  console.log("=== f_chk_busiCarYn (업무용차량여부 체크)");

  // 3:개인차량
  if (lc_busiCarYn.getValue() == 1 || lc_busiCarYn.getValue() == "3") {
    // cfEnableObjects([lc_expenseCd,ed_vehcleNo,img_vehcleNo]);
    $c.gus.cfEnableObjects($p, [lc_expenseCd, ed_vehcleNo, btn_vehcleNo]);
  } else {
    // cfDisableObjects([lc_expenseCd,ed_vehcleNo,txt_vehcleNm,img_vehcleNo]);
    $c.gus.cfDisableObjects($p, [lc_expenseCd, ed_vehcleNo, ed_vehcleNm, btn_vehcleNo]);
    lc_expenseCd.setValue("");
    ed_vehcleNo.setValue("");
    ed_vehcleNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 작성일자 클릭시 귀속부서코드 및 귀속부서명 (7번째 라인) clear
//-------------------------------------------------------------------------
scwin.f_delDept = function () {
  ed_acctDeptCd.setValue("");
  ed_acctDeptNm.setValue("");
};

//-------------------------------------------------------------------------
// 지로납부 체크 (2010.02.08 이신미 추가)
//-------------------------------------------------------------------------
scwin.f_CheckPayYn = async function () {
  // KYU_NEW : row 이동할 때, newRow 로 살짝 넘어갔을 때 체크 스킵
  // row 체크 스킵 && oldRow != 현재 그리드 포커스 (체크 스킵이면서 newRow 이면 스킵!! )

  var row = ds_txncontents.getRowPosition();
  if (scwin.skipRowCheck == true && scwin.g_oldRowIndex != ds_txncontents.getRowPosition()) {
    console.log("  ▣  f_CheckPayYn  SKIP (row 체크 스킵) skipRowCheck [" + scwin.skipRowCheck + "]  old [" + scwin.g_oldRowIndex + "] != pos [" + ds_txncontents.getRowPosition() + "]");
    return;
  } else {
    console.log("  ▣  f_CheckPayYn  실행! skipRowCheck [" + scwin.skipRowCheck + "]  old [" + scwin.g_oldRowIndex + "] pos [" + ds_txncontents.getRowPosition() + "]");
  }
  console.log("  ▣  f_CheckPayYn (지로납부 체크여부에 따라 지로납부기한 활성/비활성)   row [" + row + "] ds.giroYn [" + ds_txncontents.getCellData(row, "giroYn") + "]");

  // if(chk_giro.checked==true){
  // if (cbx_giro.getValue() == 1) {
  if (ds_txncontents.getCellData(row, "giroYn") == 1) {
    // cfEnableObjects([ed_paymentPrd,img_giroDt]);
    $c.gus.cfEnableObjects($p, [ica_paymentPrd]); // 지로납부기한 활성화
    console.log("  ==--== 지로납부 체크 - 활성 (지로납부기한)");
  } else {
    // cfDisableObjects([ed_paymentPrd,img_giroDt]);
    $c.gus.cfDisableObjects($p, [ica_paymentPrd]); // 지로납부기한 비활성화
    console.log("  ==--== 지로납부 언체크 - 비활성 (지로납부기한)");
    // ica_paymentPrd.setValue("");
    ds_txncontents.setCellData(row, "paymentPrd", ""); // 납부기한 초기화
  }

  // KYU_ISSUE, KYU_NEW : f_Valdate 에 있는 로직이나 자꾸 비활성되므로, 마지막에 한번 더 돌림
  // 미지급이나 법인카드시 정산처 필수,외상매입금도 추가 ( 2007.02.05 법인카드일때 정산처 필수 )
  // 선급금일때 정산처 필수 (2016.10.24)
  if ((ds_txncontents.getCellData(row, "adjmClsCd") == ACConstants.ADJM_MTHDCD_NOPAY_COST || ds_txncontents.getCellData(row, "adjmClsCd") == ACConstants.ADJM_MTHDCD_NOPAY || ds_txncontents.getCellData(row, "adjmClsCd") == ACConstants.ADJM_MTHDCD_AP || ds_txncontents.getCellData(row, "adjmClsCd") == ACConstants.ADJM_MTHDCD_COR_CARD || ds_txncontents.getCellData(row, "adjmClsCd") == ACConstants.ADJM_MTHDCD_PREPAY) && $c.gus.cfIsNull($p, ds_txncontents.getCellData(row, "adjmClntNo"))) {
    console.log("  NEW --- 선급금일때 정산처 필수 (2016.10.24) --- 3333 ");
    // KYU_NEW
    $c.gus.cfEnableObjects($p, [ed_adjmClntNo, btn_adjmClntNo]);
    console.log("  NEW ==--== 활성 (정산처,정산처돋보기)  (f_CheckPayYn)");
  }
  return true;
};

//-------------------------------------------------------------------------
//  증빙구분조회시화면셋팅
//  r_bizMgntYn   - 거래처관리여부=>사업자관리여부
//  r_vatYn       - 부가세여부
//  r_cardNoYn    - 카드번호여부
//  r_frchNoYn    - 가맹점번호여부
//  r_deductClsYn - 공제구분여부
//  r_limitAmt    - 한도금액
//-------------------------------------------------------------------------
scwin.f_EvidClsCd = async function (r_bizMgntYn, r_vatYn, r_cardNoYn, r_frchNoYn, r_deductClsYn, r_limitAmt) {
  console.log("======= ▶▶ f_EvidClsCd (증빙구분조회시화면셋팅) ▶▶ === 사업자[" + r_bizMgntYn + "] 부가세[" + r_vatYn + "] 카드[" + r_cardNoYn + "] 가맹점[" + r_frchNoYn + "] 공제[" + r_deductClsYn + "] 한도[" + r_limitAmt + "]");
  scwin.txt_bizMgntYn = r_bizMgntYn;

  // KYU_TEST : 행 이동시, vatYn 이 0 으로 변경되는 현상 막음
  // if (lc_crcCd.getValue() == ACConstants.KOREA_WON) {
  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == ACConstants.KOREA_WON) {
    scwin.txt_vatYn = r_vatYn;
    console.log("  txt_vatYn [" + scwin.txt_vatYn + "] = r_vatYn (부가세여부)   환율 [" + lc_crcCd.getValue() + "]");
  } else {
    scwin.txt_vatYn = "0";
    console.log("  txt_vatYn [" + scwin.txt_vatYn + "] = 0    환율 (KRW 아님) [" + lc_crcCd.getValue() + "]  ---- !");
  }
  scwin.txt_cardNoYn = r_cardNoYn;
  scwin.txt_frchNoYn = r_frchNoYn; // 가맹점번호여부
  scwin.txt_deductClsYn = r_deductClsYn;
  scwin.txt_limitAmt = r_limitAmt;

  // KYU_NEW : 추가 바인딩  @@
  var row = ds_txncontents.getRowPosition();
  console.log("  row [" + row + "]  vatYn [" + ds_txncontents.getCellData(row, "vatYn") + "]");
  ds_txncontents.setCellData(row, "bizMgntYn", scwin.txt_bizMgntYn); // 사업관리여부
  ds_txncontents.setCellData(row, "vatYn", scwin.txt_vatYn); // 부가세여부
  ds_txncontents.setCellData(row, "cardNoYn", scwin.txt_cardNoYn); // 카드번호여부
  ds_txncontents.setCellData(row, "frchNoYn", scwin.txt_frchNoYn); // 가맹점번호여부
  ds_txncontents.setCellData(row, "deductClsYn", scwin.txt_deductClsYn); // 공제구분
  ds_txncontents.setCellData(row, "limitAmt", scwin.txt_limitAmt); // 한계

  // 공제구분여부
  if (r_deductClsYn == "1") {
    //        lc_deductClsCd.validExp="공제구분:yes"  //
    // debugger;
    lc_deductClsCd.setMandatory(true);
    $c.gus.cfEnableObjects($p, [lc_deductClsCd]);
    console.log("  ==--== 활성 (공제구분) lc_deductClsCd : " + lc_deductClsCd.getValue());
    if (lc_deductClsCd.getValue() == "") {
      // lc_deductClsCd.index=0;
      lc_deductClsCd.setSelectedIndex(0);
    }
    // debugger;
  } else {
    // lc_deductClsCd.BindColVal = "";

    if (scwin.dsCodeNameSet != true) {
      lc_deductClsCd.setValue("");
    }

    //        lc_deductClsCd.validExp="공제구분:no"  //
    lc_deductClsCd.setMandatory(false);
    $c.gus.cfDisableObjects($p, [lc_deductClsCd]);
    console.log("  ==--== 비활성 (공제구분)");
  }

  // 부가세여부
  if (r_vatYn == "1") {
    // ed_vatAmt.validExp="부가세액:yes"  //
    ed_vatAmt.setMandatory(true);
    $c.gus.cfEnableObjects($p, [ed_vatAmt]);
    console.log("  r_vatYn  1  ==--== 활성 (부가세) - mandatory true");
    //setAmt();
    //setSupplyAmt();
  } else {
    ed_vatAmt.setValue(0);
    // ed_vatAmt.validExp="부가세액:no"  //
    ed_vatAmt.setMandatory(false);
    $c.gus.cfDisableObjects($p, [ed_vatAmt]);
    console.log(" r_vatYn [" + r_vatYn + "]  ==--== 비활성 (부가세) - mandatory false");
    //setAmt();
  }

  // 카드번호여부
  if (r_cardNoYn == "1") {
    //ed_cardNo.validExp="카드번호:yes:format=0000000000000000"
    $c.gus.cfEnableObjects($p, [ed_cardNo, btn_cardNo]);
    console.log("  ==--== 활성 (카드번호, 카드번호돋보기)");
    ed_cardNo.setMandatory(true);
  } else {
    if (scwin.dsCodeNameSet != true) {
      // 코드명세팅 중에는 스킵
      ed_cardNo.setValue("");
      ed_cardNm.setValue("");

      //ed_cardNo.validExp="카드번호:no:format=0000000000000000"
      $c.gus.cfDisableObjects($p, [ed_cardNo, btn_cardNo]);
      console.log("  ==--== 비활성 (카드번호, 카드번호돋보기)");
      ed_cardNo.setMandatory(false);
      console.log("  ==--==-------------- ed_cardNo, ed_cardNm (카드번호/명) 초기화 - 코드명세팅 !!!!!");
    } else {
      console.log("  -------------- ed_cardNo, ed_cardNm (카드번호/명) 초기화 SKIP");
    }
  }

  // 사업자번호

  // 가맹점번호=1 && 사업자관리=1 || 가맹전번호여부=0 && 사업자관리=1
  if (r_frchNoYn == "1" && r_bizMgntYn == "1" || r_frchNoYn == "0" && r_bizMgntYn == "1") {
    scwin.txt_frchCrn = ed_crn.getValue().trim(); // 가맹점사업자등록번호
    scwin.txt_frchNm = ed_crnNm.getValue().trim();
    //img_crn.style.display = "inline";
    btn_crn.show("");

    // ed_crn.validExp="사업자번호:yes";  //
    //  txt_crnNm.validExp="사업자명:yes:maxByteLength=50";  // maxLength 세팅

    // cfEnableObjects([ed_crn,img_crn]);
    // cfDisableObjects(txt_crnNm);
    $c.gus.cfEnableObjects($p, [ed_crn, btn_crn]); // 사업자번호,사업자번호돋보기 활성
    $c.gus.cfDisableObjects($p, [ed_crnNm]); // 사업자명 비활성

    console.log("  ==--== 사업자돋보기 보임,  활성 (사업자돋보기) 비활성(사업자명)  by 가맹점번호=1 && 사업자관리=1 || 가맹전번호여부=0 && 사업자관리=1");
    // alert("1");
  }

  // 가맹점번호여부 = 1 && 사업자관리여부 = 0 
  if (r_frchNoYn == "1" && r_bizMgntYn == "0") {
    // KYU_TEST 사업자번호 돋보기 안보임
    // img_crn.style.display = "none";
    btn_crn.hide();
    scwin.txt_frchCrn = ed_crn.getValue().trim(); // 가맹점사업자등록번호
    //txt_frchNm.value=txt_crnNm.value.trim();

    // KYU_NEW : 추가 바인딩
    var row = ds_txncontents.getRowPosition();
    ds_txncontents.setCellData(row, "frchCrn", scwin.txt_frchCrn); // 가맹점사업자등록번호

    // ed_crn.validExp = "사업자번호:yes";
    // txt_crnNm.validExp="사업자명:yes:maxByteLength=50";  // maxLength 세팅
    ed_crn.setMandatory(true);
    ed_crnNm.setMandatory(true);

    // alert("2");
    $c.gus.cfEnableObjects($p, [ed_crn, ed_crnNm]); // 사업자번호,사업자명 활성

    console.log("  ==--== 사업자돋보기 숨김,  활성 (사업자번호,사업자명)  by 가맹점번호여부=1 && 사업자관리여부=0");
  }

  // 가맹점번호여부 = 0 && 사업자관리여부 = 0 
  if (r_frchNoYn == "0" && r_bizMgntYn == "0") {
    // 사업자번호 돋보기 안보임 (UDC 라서 불가)
    // img_crn.style.display = "none";

    if (scwin.dsCodeNameSet != true) {
      // 코드명세팅 중에는 스킵
      ed_crn.setValue("");
      ed_crnNm.setValue("");
      console.log("  ==--==-------------- ed_crn, ed_crnNm (사업자명/명) 초기화 - 가맹점번호여부 = 0 && 사업자관리여부 = 0");
    }
    scwin.txt_frchCrn = ""; // 가맹점사업자등록번호
    scwin.txt_frchNm = ""; // 가맹점명

    // KYU_NEW : 추가 바인딩
    var row = ds_txncontents.getRowPosition();
    ds_txncontents.setCellData(row, "frchCrn", scwin.txt_frchCrn); // 가맹점사업자등록번호
    ds_txncontents.setCellData(row, "frchNm", scwin.txt_frchNm); // 가맹점명

    // ed_crn.validExp="사업자번호:no";  //
    // txt_crnNm.validExp="사업자명:no:maxByteLength=50";  // maxLength 세팅
    ed_crn.setMandatory(false);
    ed_crnNm.setMandatory(false);

    //alert("3");
    $c.gus.cfDisableObjects($p, [ed_crn, btn_crn, ed_crnNm]); // 사업자번호 전체 비활성

    console.log("  ==-==-== 활성 (사업자번호,사업자번호돋보기,사업자명)  by 가맹점번호여부=0 && 사업자관리여부=0");
  }

  // if ( scwin.isSlipCopy != false ) {

  // KYU_NEW : 추가 바인딩
  var row = ds_txncontents.getRowPosition();

  // console.log("     추가 바인딩 ds_txncontents.vatYn ["+ds_txncontents.getCellData(row, "vatYn")+"]  txt_vatYn ["+scwin.txt_vatYn+"]");

  ds_txncontents.setCellData(row, "bizMgntYn", scwin.txt_bizMgntYn); // 사업관리여부
  ds_txncontents.setCellData(row, "cardNoYn", scwin.txt_cardNoYn); // 카드번호여부
  ds_txncontents.setCellData(row, "frchNoYn", scwin.txt_frchNoYn); // 가맹점번호여부
  ds_txncontents.setCellData(row, "deductClsYn", scwin.txt_deductClsYn); // 공제구분여부
  ds_txncontents.setCellData(row, "limitAmt", scwin.txt_limitAmt); // 한계금액

  ds_txncontents.setCellData(row, "frchCrn", scwin.txt_frchCrn); // 가맹점사업자등록번호
  ds_txncontents.setCellData(row, "frchNm", scwin.txt_frchNm); // 가맹점명
  ds_txncontents.setCellData(row, "vatYn", scwin.txt_vatYn); // 부가세여부

  console.log("     추가 바인딩 - 복사후 ds_txncontents.vatYn [" + ds_txncontents.getCellData(row, "vatYn") + "]");
  // }
};

//-------------------------------------------------------------------------
// KYU_ISSUE
//  계정조회시화면셋팅 : AsIs 기준으로는 사원,기간,일자,거래처
//  r_termMgntYn - 기간관리여부
//  r_empMgntYn  - 사원관리여부
//  r_dtMgntYn   - 일자관리여부
//  r_clntMgntYn - 거래처(관리)여부
//-------------------------------------------------------------------------
// function f_AcctCd(r_empMgntYn,r_termMgntYn,r_dtMgntYn,r_clntMgntYn) {
// scwin.f_AcctCd = async function (r_termMgntYn, r_empMgntYn, r_dtMgntYn, r_clntMgntYn) {
//     console.log("=== ▷▷▷ f_AcctCd (계정조회시화면셋팅) 기간["+r_termMgntYn+"] 사원["+r_empMgntYn+"] 일자["+r_dtMgntYn+"] 거래처["+r_clntMgntYn+"]");
scwin.f_AcctCd = async function (r_empMgntYn, r_termMgntYn, r_dtMgntYn, r_clntMgntYn) {
  console.log("=== ▷▷▷ f_AcctCd (계정조회시화면셋팅)  row[" + ds_txncontents.getRowPosition() + "] 사원[" + r_empMgntYn + "] 기간[" + r_termMgntYn + "] 일자[" + r_dtMgntYn + "] 거래처[" + r_clntMgntYn + "]  dsCodeNameSet [" + scwin.dsCodeNameSet + "]");
  scwin.txt_termMgntYn = r_termMgntYn; // 기간관리여부
  scwin.txt_empMgntYn = r_empMgntYn; // 사원관리여부
  scwin.txt_dtMgntYn = r_dtMgntYn; // 일자관리여부
  scwin.txt_clntMgntYn = r_clntMgntYn; // 거래처관리여부

  // KYU_NEW : 바인딩 처리
  var row = ds_txncontents.getRowPosition();
  ds_txncontents.setCellData(row, "termMgntYn", scwin.txt_termMgntYn); // 기간관리여부
  ds_txncontents.setCellData(row, "empMgntYn", scwin.txt_empMgntYn); // 사원관리여부
  ds_txncontents.setCellData(row, "dtMgntYn", scwin.txt_dtMgntYn); // 일자관리여부
  ds_txncontents.setCellData(row, "clntMgntYn", scwin.txt_clntMgntYn); // 거래처관리여부

  // 사원관리여부 : 사원명은 언제나 비활성
  if (r_empMgntYn == "1") {
    // ed_mgntEmpNo.validExp="사원번호:yes:format=000000" //
    $c.gus.cfEnableObjects($p, [ed_mgntEmpNo, btn_mgntEmpNo]);
    console.log("  ==--== 사원여부=1  활성 (사원번호, 사원번호돋보기)");
    ed_mgntEmpNo.setMandatory(true);
  } else {
    if (scwin.dsCodeNameSet != true) {
      ed_mgntEmpNo.setValue("");
      ed_mgntEmpNm.setValue("");
      console.log("  ==--==-------------- ed_mgntEmpNo, ed_mgntEmpNm (사원번호/명) 초기화 !!!!!");
    } else {
      console.log("  -------------- ed_mgntEmpNo, ed_mgntEmpNm (사원번호/명) 초기화 SKIP");
    }

    // ed_mgntEmpNo.validExp="사원번호:no:format=000000" //
    $c.gus.cfDisableObjects($p, [ed_mgntEmpNo, btn_mgntEmpNo]);
    console.log("  ==--== 사원관리!=1  비활성 (사원번호, 사원번호돋보기)");
    ed_mgntEmpNo.setMandatory(false);
  }

  // 기간관리여부
  if (r_termMgntYn == "1") {
    //  ed_mgntTermStDt.validExp="경비기간:yes:date=YYYYMMDD"   // UDC
    //  ed_mgntTermEndDt.validExp="경비기간:yes:date=YYYYMMDD"  // UDC
    //  cfEnableObjects([ed_mgntTermStDt, ed_mgntTermEndDt, img_mgntTermStDt, img_mgntTermEndDt]);
    $c.gus.cfEnableObjects($p, [ed_mgntTermStDt, ed_mgntTermEndDt, udc_mgntTermDt]);
    console.log("  ==--== 기간관리=1  활성 (경비기간From, 경비기간To, udc경비기간(NEW) )");
    ed_mgntTermStDt.setMandatory(true);
    ed_mgntTermEndDt.setMandatory(true);
  } else {
    if (scwin.dsCodeNameSet != true) {
      ed_mgntTermStDt.setValue("");
      ed_mgntTermEndDt.setValue("");
      console.log("  ==--==-------------- ed_mgntTermStDt, ed_mgntTermEndDt (경비기간From/To) 초기화 !!!!!");
    } else {
      console.log("  -------------- ed_mgntTermStDt, ed_mgntTermEndDt (경비기간From/To) 초기화 SKIP");
    }
    // ed_mgntTermStDt.validExp="경비기간:no:date=YYYYMMDD"   // UDC
    // ed_mgntTermEndDt.validExp="경비기간:no:date=YYYYMMDD"  // UDC
    // cfDisableObjects([ed_mgntTermStDt, ed_mgntTermEndDt, img_mgntTermStDt, img_mgntTermEndDt]);
    $c.gus.cfDisableObjects($p, [ed_mgntTermStDt, ed_mgntTermEndDt, udc_mgntTermDt]);
    console.log("  ==--== 기간관리!=1  비활성 (경비기간From, 경비기간To, udc경비기간(NEW) )");
    ed_mgntTermStDt.setMandatory(false);
    ed_mgntTermEndDt.setMandatory(false);
  }

  // 거래처여부 : 거래처명은 언제나 비활성
  if (r_clntMgntYn == "1") {
    //  ed_mgntClntNo.validExp="거래처:yes:format=000000"
    $c.gus.cfEnableObjects($p, [ed_mgntClntNo, btn_mgntClntNo]);
    console.log("  ==--== 거래처관리=1  활성 ( 거래처번호, 거래처돋보기)");
    ed_mgntClntNo.setMandatory(true);
  } else {
    if (scwin.dsCodeNameSet != true) {
      ed_mgntClntNo.setValue("");
      ed_mgntClntNm.setValue("");
      console.log("  ==--==-------------- ed_mgntClntNo, ed_mgntClntNm (거래처번호/명) 초기화 !!!!!");
    } else {
      console.log("  -------------- ed_mgntClntNo, ed_mgntClntNm (거래처번호/명) 초기화 SKIP");
    }

    //  ed_mgntClntNo.validExp="거래처:no:format=000000"  // UDC

    ed_mgntClntNo.setMandatory(false);

    // KYU_TEST : 이해가 안가지만 이관함
    $c.gus.cfEnableObjects($p, [ed_mgntClntNo, btn_mgntClntNo]);
    $c.gus.cfDisableObjects($p, [ed_mgntClntNo, btn_mgntClntNo]);
    console.log("  ==--== 거래처관리!=1  비활성 ( 거래처번호, 거래처돋보기))");
  }

  // 일자관리여부
  if (parseInt(r_dtMgntYn) == "1") {
    //   ed_mgntDt.validExp="관리일자:yes:date=YYYYMMDD";   // UDC
    // cfEnableObjects([ed_mgntDt, img_mgntDt]);
    $c.gus.cfEnableObjects($p, [ica_mgntDt]);
    console.log("  ==--== 일자관리=1  활성 (관리일자)");
    ica_mgntDt.setMandatory(true);
  } else {
    if (scwin.dsCodeNameSet != true) {
      ica_mgntDt.setValue("");
      console.log("  ==--==-------------- ica_mgntDt (관리일자) 초기화 !!!!!");
    } else {
      console.log("  -------------- ica_mgntDt (관리일자) 초기화 SKIP");
    }

    // ed_mgntDt.validExp="관리일자:no:date=YYYYMMDD";  // UDC
    // cfDisableObjects([ed_mgntDt, img_mgntDt]);
    $c.gus.cfDisableObjects($p, [ica_mgntDt]);
    console.log("  ==--== 일자관리!=1  비활성 (관리일자)");
    ica_mgntDt.setMandatory(false);
  }
  console.log("=== ▷▷▷ f_AcctCd (계정조회시화면셋팅)  END ~~~~~~~~~~~~~~~~~~~~");
  return true;
};

//-------------------------------------------------------------------------
//  통화코드 변경  @@ @
//-------------------------------------------------------------------------
scwin.lc_crcCd_onchange = async function (info) {
  if (scwin.loadCompleted != true) return;
  if (scwin.dsCodeNameSet == true) {
    console.log("  $$$  lc_crcCd_onchange (통화코드 변경) SKIP !!!! (코드명 세팅중)   loadCompleted [" + scwin.loadCompleted + "]  dsCodeNameSet [" + scwin.dsCodeNameSet + "]");
    return;
  }

  // <!-- 통화코드변경시 -->                                      
  // language=JavaScript for=lc_crcCd event=onSelChange()>

  // KYU_TEST : 2026-04-15 용도 변경 : 활성/비활성만 변경 - 전표복사후 전표의 기존 환율 유지
  // 통화코드가 한화 또는 값이 없으면,
  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == ACConstants.KOREA_WON) {
    $c.gus.cfDisableObjects($p, [ed_spplyAmtFcrc, ed_exchRt]); // 외화금액 비활성화
    $c.gus.cfEnableObjects($p, [ed_spplyAmt, btn_pu_evid, ed_vatAmt]);
    console.log("  ==--== 비활성 (외화금액,환율)  활성 (공급금액,증빙배부 버튼,부가세)");
  } else {
    ed_vatAmt.setValue(0);
    $c.gus.cfEnableObjects($p, [ed_spplyAmtFcrc, ed_exchRt]);
    $c.gus.cfDisableObjects($p, [ed_spplyAmt, btn_pu_evid, ed_vatAmt]);
    console.log("  ==--== 활성 (외화금액,환율)  비활성 (공급금액,증빙배부 버튼,부가세)");
  }

  // KYU_NEW : 전표복사 외화일 때 SKIP(환율유지) & 콤보 변경시 적용 : new row 와 현재 row 가 다르면 스킵 (row 이동)
  var row = ds_txncontents.getRowPosition();
  if (scwin.delflag == "Y") {
    console.log("  $$$  lc_crcCd_onchange SKIP !!!! (삭제중)   delflag [" + scwin.delflag + "]");
    return;
  }
  if (scwin.g_newRowIndex != ds_txncontents.getRowPosition()) {
    console.log("  $$$  lc_crcCd_onchange SKIP ! (환율유지 - row 이동)   [" + row + "]  g_newRowIndex [" + scwin.g_newRowIndex + "]");
    return;
  }

  // KYU_TEST : 불필요한 이벤트 금지 - 행추가후 취소할 때 지워지는 row 의 금액을 지정
  //   2026-04-15 : 전표복사후 기존 환율 유지
  if (scwin.skipRowCheck == true)
    // row 체크 스킵 : new Row, old Row 에서 불필요한 체크 스킵
    {
      console.log("  $$$  lc_crcCd_onchange SKIP !!!! (f_changeRow1 에서 불필요한 이벤트금지)   skipRowCheck [" + scwin.skipRowCheck + "]");
      return;
    }

  // KYU_ORDER : 전표복사후 전표의 기존 환율 유지
  console.log("----- lc_crcCd_onchange (통화코드 변경) [" + ds_txncontents.getRowPosition() + "]  crcCd [" + ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "crcCd") + "]");
  let rtn = await scwin.crcCdChange();
};

//-------------------------------------------------------------------------
//  통화코드변경시-환율조회
//-------------------------------------------------------------------------
scwin.crcCdChange = async function () {
  console.log("=== crcCdChange (통화코드변경시-환율조회 - ds_exchRt)  row [" + ds_txncontents.getRowPosition() + "]  crcCd [" + ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "crcCd") + "]");
  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == ACConstants.KOREA_WON) {
    // ed_exchRt.text = 0;                         // 환율     초기화 
    // ed_spplyAmtFcrc.text  = 0;                         // 외화금액 초기화 
    ed_exchRt.setValue(0); // 환율     초기화
    ed_spplyAmtFcrc.setValue(0); // 외화금액 초기화
    $c.gus.cfEnableObj($p, ed_spplyAmtFcrc, false); // 외화금액 비활성화
    //		ed_spplyAmtFcrc.validExp="외화금액:no:maxLength=13"; // 외화금액 validationexperiment 추가  //
    ed_spplyAmtFcrc.setMandatory(false);
    //ed_amt.focus();
  } else {
    // 자금의 환율테이블 조회(통화코드,작성일자)
    // 통화코드가 외화일경우 외화금액 필수

    $c.gus.cfEnableObjects($p, [ed_exchRt]);
    console.log("  ==--== 활성 (외화금액,환율) 비활성 (공급금액,증빙배부 버튼,부가세)");
    //		ed_spplyAmtFcrc.validExp="외화금액:yes:notAllowed=0&maxLength=13";  // notAllowed  KYU_TEST
    ed_spplyAmtFcrc.setMandatory(true);

    // ds_exchRtSearch.NameValue(1, "crcCd") = ds_txncontents.NameValue(ds_txncontents.RowPosition,"crcCd");
    // ds_exchRtSearch.NameValue(1, "stdDt") = ed_slipDt.text;
    ds_exchRtSearch.set("crcCd", ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "crcCd"));
    ds_exchRtSearch.set("stdDt", ica_slipDt.getValue());
    var dcJSON = ds_exchRtSearch.getJSON();
    console.log("  *** ds_exchRtSearch : " + JSON.stringify(dcJSON));

    //		ds_exchRtSearch.UseChangeInfo = false;  // 

    // tr_exchRt.Post();
    let e = await $c.sbm.execute($p, sbm_exchRt);
    console.log("▷ sbm_exchRt_submitdone (환율조회 submitdone)");

    // <!-- 통화코드 DataSet -->
    // language=JavaScript for=tr_exchRt event=OnSuccess()>
    //     cfEnableObj(ed_spplyAmtFcrc, true);
    //     ed_spplyAmtFcrc.focus();

    // language="JavaScript" for="tr_exchRt" event="OnFail()">
    //     cfShowError(this);

    if (e.responseJSON.resultDataSet[0].Code != 0) return;

    //-----------------------------------------------------------------------------------------------------------------------------------
    // checkExchRt = ds_exchRt.NameValue(ds_exchRt.RowPosition,"stdExchRt");	// 기준 환율
    // ed_exchRt.text = ds_exchRt.NameValue(1,"stdExchRt");

    scwin.checkExchRt = Number(ds_exchRt.getCellData(0, "stdExchRt")).toFixed(2); // 기준 환율
    ed_exchRt.setValue(parseFloat(ds_exchRt.getCellData(0, "stdExchRt"))); // 환율

    //-----------------------------------------------------------------------------------------------------------------------------------
    // KYU_NEW
    $c.gus.cfEnableObj($p, ed_spplyAmtFcrc, true);
    ed_spplyAmtFcrc.focus();
  }
};

//-------------------------------------------------------------------------
//  전표종류 변경시
//-------------------------------------------------------------------------
scwin.lc_slipKndCd_onchange = function (info) {
  // language=JavaScript for=lc_slipKndCd event=onSelChange()> 
  for (i = 1; i < ds_txncontents.getRowCount(); i++) {
    scwin.slipKndCd = lc_slipKndCd.getValue(); // 전표종류 set

    var row = lc_evidClsCd.setValue(scwin.slipKndCd);
    console.log(" -- -- row : " + row);

    //        ds_txncontents.setCellData(row lc_evidClsCd.getValue;     // 전표종류 set

    if (ds_txncontents.getCellData(i, "evidClsCd") != ACConstants.EVID_CLSCD_COR_CARD) {
      //증빙구분이 법인카드이면 정산방법 법인카드로

      if (scwin.slipKndCd == ACConstants.SLIPKNDCD_SUB_COMPANY_EXPENSE) {
        // 전표 종류 : 자회사 - 경비전표이면 '미지급금'     
        ds_txncontents.setCellData(i, "adjmClsCd", 1);
        // slipKndNm = lc_slipKndCd.text;
        scwin.slipKndNm = lc_slipKndCd.getText(i);
      } else if (scwin.slipKndCd == ACConstants.SLIPKNDCD_SUB_COMPANY_PCHS) {
        // 전표 종류 : 자회사 - 매입전표 이면 '외상매입금'     
        ds_txncontents.setCellData(i, "adjmClsCd", 9);
        // slipKndNm = lc_slipKndCd.text;
        scwin.slipKndNm = lc_slipKndCd.getText(i);
      }
    }
  }
};

//-------------------------------------------------------------------------
//  증빙종류 변경시
//-------------------------------------------------------------------------
scwin.lc_evidClsCd_onchange = async function (info) {
  if (scwin.loadCompleted != true) return;
  if (scwin.dsCodeNameSet == true) {
    console.log("  ▶▷▷  lc_evidClsCd_onchange SKIP !!!! (코드명 세팅)   loadCompleted [" + scwin.loadCompleted + "]  dsCodeNameSet [" + scwin.dsCodeNameSet + "]");
    return;
  }

  // if ( scwin.skipRowCheck == true )  // row 체크 스킵 : new Row, old Row 에서 불필요한 체크 스킵
  // {  
  //     console.log("    ▶▷▷ lc_evidClsCd_onchange SKIP !!!! (f_changeRow1 에서 불필요한 이벤트금지)   skipRowCheck ["+scwin.skipRowCheck+"]");
  //     return;  // 불필요한 이벤트 금지 - 정산방법이 증빙종류에 따라 변경됨
  // }

  // KYU_NEW : row 이동할 때, newRow 로 살짝 넘어갔을 때 체크 스킵
  // row 체크 스킵 && oldRow != 현재 그리드 포커스 (체크 스킵이면서 newRow 이면 스킵!! )
  if (scwin.skipRowCheck == true && scwin.g_oldRowIndex != ds_txncontents.getRowPosition()) {
    console.log("  ▶▷▷  lc_evidClsCd_onchange  SKIP (row 체크 스킵) skipRowCheck [" + scwin.skipRowCheck + "]  old [" + scwin.g_oldRowIndex + "] != pos [" + ds_txncontents.getRowPosition() + "]");
    return;
  } else {
    console.log("  ▶▷▷  lc_evidClsCd_onchange (증빙종류변경) 실행! skipRowCheck [" + scwin.skipRowCheck + "]  old [" + scwin.g_oldRowIndex + "] pos [" + ds_txncontents.getRowPosition() + "]");
    // i = ds_txncontents.getRowPosition();
  }

  // console.log("----- lc_evidClsCd_onchange (증빙종류변경)");

  // if ( scwin.isStarted == false ) { // 초기에는 실행 안됨
  let rtn = await scwin.lc_evidClsCd_change();
  // }
};

//-------------------------------------------------------------------------
//  증빙종류 변경시
//-------------------------------------------------------------------------
scwin.lc_evidClsCd_change = async function () {
  console.log("===== lc_evidClsCd_change (증빙종류 공통처리)  row [" + ds_txncontents.getRowPosition() + "]");

  //<!-- 증빙종류 LuxeCombo -->
  // language=JavaScript for=lc_evidClsCd event=onSelChange()>    

  //var row = ds_evidClsCd.NameValueRow("COL1", lc_evidClsCd.ValueOfIndex("COL1", lc_evidClsCd.Index));
  var row = lc_evidClsCd.getSelectedIndex();
  var rowDs = ds_txncontents.getRowPosition();
  console.log("  증빙종류  대상 row (rowDs) [" + rowDs + "]  ds_evidClsCd [" + row + "].col2 : " + ds_evidClsCd.getCellData(row, "col2"));

  //var tempName = ds_evidClsCd.getCellData(lc_evidClsCd.getSelectedIndex(), "col2");  // KYU_TEST 선택한 멤버의 인덱스

  //lc_evidClsCd.getText();   // 코드명만 있을 때
  // var tempName = lc_evidClsCd.getValue().split(":")[1];

  scwin.txt_evidClsNm = ds_evidClsCd.getCellData(row, "col2");

  // console.log("   ★-- -- scwin.txt_evidClsNm [" + scwin.txt_evidClsNm + "]   ds_txncontents.getRowPosition() : " + ds_txncontents.getRowPosition());

  //scwin.txt_evidClsNm = ds_evidClsCd.setCellData(row,"COL2") ; //증빙명

  // KYU_NEW : 바인딩 처리
  ds_txncontents.setCellData(rowDs, "evidClsNm", scwin.txt_evidClsNm); //증빙명

  console.log("      lc_evidClsCd_change - f_EvidClsCd   부가세(col4) [" + ds_evidClsCd.getCellData(row, "col4") + "]  거래처(col3) [" + ds_evidClsCd.getCellData(row, "col3") + "]");
  await scwin.f_EvidClsCd(ds_evidClsCd.getCellData(row, "col3") //r_bizMgntYn   - 거래처관리여부=>사업자관리여부
  , ds_evidClsCd.getCellData(row, "col4") //r_vatYn       - 부가세여부
  , ds_evidClsCd.getCellData(row, "col5") //r_cardNoYn    - 카드번호여부
  , ds_evidClsCd.getCellData(row, "col6") //r_frchNoYn    - 가맹점번호여부 
  , ds_evidClsCd.getCellData(row, "col7") //r_deductClsYn - 공제구분여부
  , ds_evidClsCd.getCellData(row, "col9") //r_limitAmt    - 한도금액
  );

  // KYU_ISSUE : 정산처 없음 과 상충

  // 법인카드이면 정산방법은 법인카드.정산처는 카드 발급처
  // if (row == 4) {
  if (row == 3) {
    $c.gus.cfDisableObjects($p, [lc_adjmClsCd, ed_adjmClntNo, btn_adjmClntNo]);
    console.log("  증빙종류 변경 ==--== 비활성 ( 정산방법, 정산처,정산처돋보기 )");
    ds_txncontents.setCellData(rowDs, "adjmClsCd", ACConstants.ADJM_MTHDCD_COR_CARD); // 6 정산방법(법인카드)
  } else {
    $c.gus.cfEnableObjects($p, [lc_adjmClsCd, ed_adjmClntNo, btn_adjmClntNo]);
    console.log("  ==--== 활성 ( 정산방법, 정산처,정산처돋보기 )");

    //alert(ds_txncontents.NameValue(ds_txncontents.RowPosition,"adjmClsCd"));
    if (ds_txncontents.getCellData(rowDs, "adjmClsCd") == ACConstants.ADJM_MTHDCD_COR_CARD) {
      // 법인카드
      lc_adjmClsCd.setValue(ACConstants.ADJM_MTHDCD_NOPAY_COST); // 1 정산방법(미지급비용)
      console.log("    정산방법 변경 : 법인카드 --> 1 정산방법(미지급비용)");
    } else {
      console.log("     법인카드 아님 --> ds 정산방법 adjmClsCd [" + ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "adjmClsCd") + "]");
      lc_adjmClsCd.setValue(ds_txncontents.getCellData(rowDs, "adjmClsCd"));
      console.log("    정산방법 변경후 : 법인카드 아님 --> lc_adjmClsCd [" + lc_adjmClsCd.getValue() + "]");
    }
  }

  // 계정코드 널 일 때...
  // if (ed_acctCd.getValue() == "")
  if ($c.gus.cfIsNull($p, ds_txncontents.getCellData(rowDs, "acctCd"))) {
    // 법인카드선택시  불공제로 셋팅
    if (lc_evidClsCd.getValue() == "40") {
      lc_deductClsCd.setValue("2"); // 불공제
      ed_adjmClntNo.setValue("");
      scwin.ed_adjmClntNo_hidVal = "";
      ed_adjmClntNm.setValue("");
      ed_cardNo.setValue("");
      scwin.ed_cardNo_hidVal = "";
      ed_cardNm.setValue("");
      if (scwin.txtCoClsCd == ACConstants.CO_CLS_CD_DONGBU) {
        // 0 회사구분-동부
        ed_vatDeclarAcctDeptCd.setValue("00009");
        ed_vatDeclarAcctDeptNm.setValue("재경");
        onsole.log("  ▷ 법인카드(40) 선택시 불공제 - 회사구분=동부(0) 이면 부가세관리부서/명:재경(00009)");
      }
      ed_vatCrn.setValue("");
      //f_VatDeclarAcctDeptCd(3);

      console.log("  ▷ 법인카드(40) 선택시 불공제 - 정산처/명,카드번호/명,부가세사업자 초기화 - 회사구분=동부(0) 이면 부가세관리부서/명:재경(00009)");
    }

    // 개인카드 선택시 불공제로 세팅
    else if (lc_evidClsCd.getValue() == "50") {
      lc_deductClsCd.setValue("2"); // 불공제
      ed_adjmClntNo.setValue("");
      scwin.ed_adjmClntNo_hidVal = "";
      ed_adjmClntNm.setValue("");
      ed_cardNo.setValue("");
      scwin.ed_cardNo_hidVal = "";
      ed_cardNm.setValue("");
      if (scwin.slipKndCd == ACConstants.SLIPKNDCD_SUB_COMPANY_PCHS) {
        // 전표 종류 : K03  자회사 - 매입전표 이면 '외상매입금'     
        //lc_adjmClsCd.BindColVal="9";
        lc_adjmClsCd.setValue("9");
        onsole.log("  ▷ 법인카드(40) 선택시 불공제 - 전표종류=K03(자회사-매입전표) 이면 정산방법:9(외상매입금)");
      }
      console.log("  개인카드(50) 선택시 불공제 - 정산처/명,카드번호/명,부가세사업자 초기화, 부가세관리부서/명,부가세사업자 초기화");
      ed_vatDeclarAcctDeptCd.setValue("");
      ed_vatDeclarAcctDeptNm.setValue("");
      ed_vatCrn.setValue("");
    }

    // 현금영수증 선택시 불공제로 세팅 
    else if (lc_evidClsCd.getValue() == "60") {
      lc_deductClsCd.setValue("2"); // 불공제
      ed_adjmClntNo.setValue("");
      scwin.ed_adjmClntNo_hidVal = "";
      ed_adjmClntNm.setValue("");
      ed_cardNo.setValue("");
      scwin.ed_cardNo_hidVal = "";
      ed_cardNm.setValue("");
      if (scwin.slipKndCd == ACConstants.SLIPKNDCD_SUB_COMPANY_PCHS) {
        // 현금영수증 선택시 불공제로 세팅  '외상매입금'     
        lc_adjmClsCd.setValue("9");
        onsole.log("  ▷ 현금영수증(60) 선택시 불공제 - 전표종류=K03(자회사-매입전표) 이면 정산방법:9(외상매입금)");
      }
      console.log("  현금영수증(60) 선택시 불공제 - 정산처/명,카드번호/명,부가세사업자 초기화, 부가세관리부서/명,부가세사업자 초기화");
      ed_vatDeclarAcctDeptCd.setValue("");
      ed_vatDeclarAcctDeptNm.setValue("");
      ed_vatCrn.setValue("");
    }

    // 세금계산서 선택시 공제로 세팅
    else if (lc_evidClsCd.getValue() == "10") {
      lc_deductClsCd.setValue("1"); // 공제

      if (scwin.slipKndCd == ACConstants.SLIPKNDCD_SUB_COMPANY_PCHS) {
        // 세금계산서 선택시 공제, '외상매입금'
        lc_adjmClsCd.setValue("9");
        onsole.log("  ▷ 세금계산서(10) 선택시 공제 - 전표종류=K03(자회사-매입전표) 이면 정산방법:9(외상매입금)");
      }
      console.log("  세금계산서(10) 선택시 불공제 - 정산처/명,카드번호/명,부가세사업자 초기화, 부가세관리부서/명,부가세사업자 초기화");
      ed_vatDeclarAcctDeptCd.setValue("");
      ed_vatDeclarAcctDeptNm.setValue("");
      ed_vatCrn.setValue("");
    } else {
      // KYU_ISSUE : 전표종류가 K03 이면 부가세관리부서/명/부가세사업자번호 클리어  @@
      if (scwin.slipKndCd == ACConstants.SLIPKNDCD_SUB_COMPANY_PCHS) {
        // 전표 종류 :  자회사 - 매입전표 ("K03")
        lc_adjmClsCd.setValue("9");
        onsole.log("  ▷ 그외 (10,40,50,60) 선택시 공제 - 전표종류=K03(자회사-매입전표) 이면 정산방법:9(외상매입금)");
      }
      console.log(" 증빙종류 (40,50,60,10 아님) 선택시 공제 - 부가세관리부서/명,부가세사업자 초기화");
      ed_vatDeclarAcctDeptCd.setValue("");
      ed_vatDeclarAcctDeptNm.setValue("");
      ed_vatCrn.setValue("");
    }
  }

  // 세금계산서(10) 이면 거래처 필수
  if (lc_evidClsCd.getValue() == "10") {
    //      ed_mgntClntNo.validExp="거래처:yes:format=000000";
    //   ed_mgntClntNo.mandatory="true"
    // ed_mgntClntNo.setMamdatory(true);

    ed_mgntClntNo.setMandatory(true);
  } else {
    //      ed_mgntClntNo.validExp="거래처:no:format=000000";
    //   ed_mgntClntNo.mandatory="false"     
    ed_mgntClntNo.setMandatory(false);
  }

  //영세율세금계산서일때 영세율-기타,일반 선택
  if (lc_evidClsCd.getValue() == "20") {
    lc_zeroTaxClsCd.setValue("");
    $c.gus.cfEnableObjects($p, [lc_zeroTaxClsCd]);
    console.log("  증빙구분 영세율세금계산서(20)  영세율-기타('')  ==--== 활성 (영세율구분)");
  } else {
    lc_zeroTaxClsCd.setValue("");
    $c.gus.cfDisableObjects($p, [lc_zeroTaxClsCd]);
    console.log("  증빙구분 [" + lc_evidClsCd.getValue() + "]  영세율-기타('')  ==--== 비활성 (영세율구분)");
  }
  console.log("   --- ---  adjmClsCd [" + ds_txncontents.getCellData(rowDs, "adjmClsCd") + "]  adjmClntNo [" + ds_txncontents.getCellData(rowDs, "adjmClntNo") + "]");

  // KYU_ISSUE, KYU_NEW : f_Valdate 에 있는 로직이나 자꾸 비활성되므로, 마지막에 한번 더 돌림
  // 미지급이나 법인카드시 정산처 필수,외상매입금도 추가 ( 2007.02.05 법인카드일때 정산처 필수 )
  // 선급금일때 정산처 필수 (2016.10.24)
  if ((ds_txncontents.getCellData(rowDs, "adjmClsCd") == ACConstants.ADJM_MTHDCD_NOPAY_COST || ds_txncontents.getCellData(rowDs, "adjmClsCd") == ACConstants.ADJM_MTHDCD_NOPAY || ds_txncontents.getCellData(rowDs, "adjmClsCd") == ACConstants.ADJM_MTHDCD_AP || ds_txncontents.getCellData(rowDs, "adjmClsCd") == ACConstants.ADJM_MTHDCD_COR_CARD || ds_txncontents.getCellData(rowDs, "adjmClsCd") == ACConstants.ADJM_MTHDCD_PREPAY) && $c.gus.cfIsNull($p, ds_txncontents.getCellData(rowDs, "adjmClntNo"))) {
    console.log("  NEW --- 선급금일때 정산처 필수 (2016.10.24) --- 4444 ");
    // KYU_NEW
    $c.gus.cfEnableObjects($p, [ed_adjmClntNo, btn_adjmClntNo]);
    console.log("  NEW ==--== 활성 (정산처,정산처돋보기)  (lc_evidClsCd_change)");
  }
};

//-------------------------------------------------------------------------
//  정산방법 변경시
//-------------------------------------------------------------------------
scwin.lc_adjmClsCd_onchange = async function (info) {
  // KYU_NEW : row 이동할 때, oldRow 로 복귀했을 때 스킵
  if (scwin.skipRowCheck == true && scwin.g_oldRowIndex != ds_txncontents.getRowPosition()) {
    console.log("  ▶▷▶▷  lc_adjmClsCd_onchange (정산방법변경) SKIP (row 체크 스킵) skipRowCheck [" + scwin.skipRowCheck + "]  old [" + scwin.g_oldRowIndex + "] != pos [" + ds_txncontents.getRowPosition() + "]");
    return;
  } else {
    console.log("  ▶▷▶▷  lc_adjmClsCd_onchange (정산방법변경) 실행! skipRowCheck [" + scwin.skipRowCheck + "]  old [" + scwin.g_oldRowIndex + "] pos [" + ds_txncontents.getRowPosition() + "]");
    // i = ds_txncontents.getRowPosition();
  }

  // console.log("----- lc_adjmClsCd_onchange (정산방법 변경) ------------------ row ["+ds_txncontents.getRowPosition()+"] skipRowCheck ["+scwin.skipRowCheck+"]");

  // language=JavaScript for=lc_adjmClsCd event=OnSelChange()>

  //2^미지급금,3^전도금,4^가지급금,5^선급금,6^법인카드
  if (lc_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_SUSPAY) {
    // document.all.div_id.style.visibility = "visible";
    btn_adjmClsCd.show(""); // 정산방법 돋보기 보여줌
    $c.gus.cfEnableObjects($p, [btn_adjmClsCd]);
  } else {
    // document.all.div_id.style.visibility = "hidden";
    btn_adjmClsCd.hide(); // 정산방법 돋보기 숨김
  }
  if (lc_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_NOPAY_COST ||
  // 정산방법(미지급비용) 1
  lc_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_NOPAY ||
  // 정산방법(미지급금)   2
  lc_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_AP ||
  // 정산방법(외상매입금) 9
  lc_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_PREPAY)
    // 정산방법(선급금)     5
    {
      $c.gus.cfEnableObjects($p, [ed_adjmClntNo, btn_adjmClntNo]);
      console.log("  ==--== 활성 (정산처,정산처돋보기)  정산방법 : " + lc_adjmClsCd.getValue());
    } else {
    ed_adjmClntNo.setValue("");
    ed_adjmClntNm.setValue("");
    // $c.gus.cfInitHidVal(ed_adjmClntNo);
    scwin.ed_adjmClntNo_hidVal = ""; // KYU_TEST
    console.log("  정산방법 변경시 - 정산처/명 초기화 ================== !!!!");
    $c.gus.cfDisableObjects($p, [ed_adjmClntNo, btn_adjmClntNo]);
    console.log("  정산방법 변경시 ==--== 비활성 (정산처,정산처돋보기)  정산방법 : " + lc_adjmClsCd.getValue());
  }

  //2010.02.10 이신미 추가 미지급일때만 지로전표 선택 활성
  if (lc_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_NOPAY_COST) {
    //  정산방법(미지급비용)  1
    $c.gus.cfEnableObjects($p, [cbx_giro]);
    console.log("  ==--== 활성 (지로체크박스)  정산방법 : " + lc_adjmClsCd.getValue());
    await scwin.f_CheckPayYn();
  } else {
    $c.gus.cfDisableObjects($p, [cbx_giro]);
    console.log("  ==--== 비활성 (지로체크박스)  정산방법 : " + lc_adjmClsCd.getValue());
    // chk_giro.checked = false;
    // cbx_giro.checkAll(false);  // 납부기한
    cbx_giro.setValue("0");
    await scwin.f_CheckPayYn();
  }
};

//-------------------------------------------------------------------------
//  계산서일자(증빙일자) focus out
//-------------------------------------------------------------------------
scwin.ica_txnDt_onblur = async function (e) {
  console.log("----- ica_txnDt_onblur (계산서일자(증빙일자) focus out)  ************");

  // <!-- 증빙일자가 변경될 경우 부가세귀속부서도 변경되도록 함.(부가세귀속부서이력관리에 따라 추가) -->
  // language=JavaScript for=ed_txnDt event=OnKillFocus()>
  if (ed_vatDeclarAcctDeptCd.getValue() == null || ed_vatDeclarAcctDeptCd.getValue() == "") {
    scwin.ed_vatDeclarAcctDeptCd_hidVal = "";
    // udc_vatDeclarAcctDeptCd.hidVal = "";  // KYU_TEST (UDC 내에 hidVal 부여)

    console.log("  계산서일자 focus out - 부가세관리부서/명 초기화");
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    ed_vatCrn.setValue("");
  } else {
    console.log("  계산서일자(증빙일자) focus out : f_VatDeclarAcctDeptCd 2");
    await scwin.f_VatDeclarAcctDeptCd('2');
  }
};

//-------------------------------------------------------------------------
//  외화금액 focus out
//-------------------------------------------------------------------------
scwin.ed_spplyAmtFcrc_onblur = function (e) {
  console.log("----- ed_spplyAmtFcrc_onblur (외화금액 focus out)");
  /*
  language=JavaScript for=ed_spplyAmtFcrc event=OnKillFocus()>
      var changeExchRt = ds_txncontents.NameValue(ds_txncontents.RowPosition,"exchRt");
      var checkSpplyAmtFcrc = ds_txncontents.NameValue(ds_txncontents.RowPosition,"spplyAmtFcrc");
      ed_spplyAmt.text = Math.round(checkSpplyAmtFcrc * changeExchRt);
  */
  var changeExchRt = ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "exchRt");
  var checkSpplyAmtFcrc = ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "spplyAmtFcrc");
  var temp = Math.round(checkSpplyAmtFcrc * changeExchRt);
  ed_spplyAmt.setValue(temp);
};

//-------------------------------------------------------------------------
//  업무용차량여부변경
//-------------------------------------------------------------------------
scwin.lc_busiCarYn_onchange = function (info) {
  console.log("----- lc_busiCarYn_onchange (업무용차량여부 변경)");
  if (lc_busiCarYn.getValue() == 1 || lc_busiCarYn.getValue() == 3) {
    // 0^선택,1^Y,2^N,3^개인차량
    $c.gus.cfEnableObjects($p, [lc_expenseCd, ed_vehcleNo, btn_vehcleNo]);
    console.log("  ==--== 활성 (차량여부,차량번호,차량번호돋보기)");

    // lc_expenseCd.setValue("");
    // ed_vehcleNo.setValue("");
    // ed_vehcleNm.setValue("");
  } else {
    $c.gus.cfDisableObjects($p, [lc_expenseCd, ed_vehcleNo, ed_vehcleNm, btn_vehcleNo]); // 차량번호돋보기
    console.log("  ==--== 비활성 (차량여부,차량번호,차량번호돋보기)");
    lc_expenseCd.setValue("");
    ed_vehcleNo.setValue("");
    ed_vehcleNm.setValue("");
  }
};

//-------------------------------------------------------------------------
//  가지급금,선급금 정리화면
//-------------------------------------------------------------------------
scwin.f_Prepay = async function () {
  console.log("=== f_Prepay (가지급금,선급금 정리화면)");
  let ret = await $c.gus.cfValidate($p, [ica_slipDt, ed_acctDeptCd, ed_spplyAmt]);
  if (!ret) return false;
  var sum = 0;
  if (lc_crcCd.getValue() == ACConstants.KOREA_WON) sum = Number(ed_spplyAmt.getValue().trim()) + Number(ed_vatAmt.getValue().trim()) - Number(ed_dcAmt.getValue().trim()) + Number(ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "etcAmt1")) + Number(ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "etcAmt2"));else sum = Number(ed_spplyAmtFcrc.getValue().trim());
  var valueObject = new Object();
  valueObject.prov = ds_prov;
  valueObject.provHeader = ds_provHeader;
  valueObject.txtrltSeq = ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "rltSeq");
  //valueObject.slipDt = ed_slipDt.text.trim();
  valueObject.adjmClsCd = lc_adjmClsCd.getValue().trim();
  valueObject.sum = sum;
  valueObject.crcCd = lc_crcCd.getValue();

  // [수정]20051107 부서,부서명 추가
  //for(j=1;j<=ds_provHeader.CountRow; j++) {
  for (j = 0; j < ds_provHeader.getRowCount(); j++) {
    // 관련사건 저장순번
    if (ds_txncontents.getCellData(ds_txncontents.getRowPosition(), "rltSeq") == ds_provHeader.getCellData(j, "rltSeq")) {
      if (ds_provHeader.getCellData(j, "reqAcctDeptCd") != "") {
        //alert(ds_provHeader.NameString(i,"reqAcctDeptCd"));
        valueObject.acctDeptCd = ds_provHeader.getCellData(j, "reqAcctDeptCd");
        valueObject.acctDeptNm = ds_provHeader.getCellData(j, "reqAcctDeptNm");
      }
    }
  }
  if (typeof valueObject.acctDeptCd == "undefined" || valueObject.acctDeptCd == "") {
    valueObject.acctDeptCd = ed_acctDeptCd.getValue().trim();
    valueObject.acctDeptNm = ed_acctDeptNm.getValue().trim();
  }

  // KYU_TEST 개발중
  // 가지급금입금 호출 
  let data = {
    prov: ds_prov,
    provHeader: ds_provHeader,
    txtrltSeq: valueObject.txtrltSeq // 관련사건저장순번
    ,

    adjmClsCd: lc_adjmClsCd.getValue().trim(),
    sum: sum,
    crcCd: lc_crcCd.getValue(),
    acctDeptCd: valueObject.acctDeptCd,
    acctDeptNm: valueObject.acctDeptNm,
    compare: 1,
    flag: "Y",
    slipDt: ica_slipDt.getValue().trim()
  };

  //    console.log("^^^^^ data : "+ JSON.stringify(data));

  let win_url = "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_02_02b.xml";
  let opts = {
    id: "smpPop",
    popupName: "가지급금입금",
    modal: true,
    type: "browserPopup",
    width: 1400,
    height: 760,
    title: "가지급금입금"
  };

  // var style = "center:yes; dialogwidth:1000px; dialogheight:520px; scroll:no; resizable:no; status:yes;";
  // var strPath = "fi_201_02_02b.jsp?compare=1&flag=Y&slipDt="+ed_slipDt.text.trim();
  // var returnValue = window.showModalDialog(strPath, valueObject ,style ) ;

  var returnValue = await $c.win.openPopup($p, win_url, opts, data);

  //결좌데이터 정리
  if (returnValue != null) {
    //   cfCopyDataSetHeader(ds_prov, returnValue.prov);

    // ds_prov.ImportData(returnValue.prov);

    // 배열 [{}]  -->  JSON 배열로 변환 {}
    var temp = JSON.stringify(returnValue[0]).trim();
    var jarray = JSON.parse(temp);
    console.log("  temp [" + temp + "]");
    console.log("  jarray [" + jarray + "]");
    var dcJSON = returnValue[0].getAllJSON(); // JSON 배열로 담기
    ds_prov.setJSON(dcJSON, true); // append

    ds_provHeader.ImportData(returnValue.provHeader);

    // 배열 [{}]  -->  JSON 배열로 변환 {}
    var temp = JSON.stringify(returnValue[1]).trim();
    var jarray = JSON.parse(temp);
    console.log("  temp [" + temp + "]");
    console.log("  jarray [" + jarray + "]");
    var dcJSON = returnValue[1].getAllJSON(); // JSON 배열로 담기
    ds_provHeader.setJSON(dcJSON, true); // append

    // ds_prov.SortExpr= "+rltSeq +slipNo";
    // ds_prov.Sort();

    ds_prov.multisort(scwin.sort_options);

    // 중복된것 삭제
    for (i = 0; i < ds_prov.getTotalRow() - 1; i++) {
      for (j = i + 1; j < ds_prov.getTotalRow(); j++) {
        if (ds_prov.getCellData(i, "rltSeq") == ds_prov.getCellData(j, "rltSeq")) {
          if (ds_prov.getCellData(i, "slipNo") == ds_prov.getCellData(j, "slipNo")) {
            ds_prov.deleteRow(i);
            break;
          }
        }
      }
    } // for end

    for (i = 0; i < ds_provHeader.getTotalRow() - 1; i++) {
      for (j = i + 1; j < ds_provHeader.getTotalRow(); j++) {
        if (ds_provHeader.getCellData(i, "rltSeq") == ds_provHeader.getCellData(j, "rltSeq")) {
          ds_provHeader.deleteRow(i);
          break;
        }
      }
    } // for end

    //가지급금 입금 팝업 적요  전표 적요에 적용
    ds_txncontents.setCellData(ds_txncontents.getRowPosition(), "summary", ds_provHeader.getCellData(ds_txncontents.getRowPosition(), "summary"));
  }
};

// @@ ====== 파일 (템플릿 다운로드)  =============================================================== //

scwin.btn_template_onclick = function (e) {
  console.log("=== btn_template_onclick (템플릿 다운로드)");
  var fileName = '경비전표_템플릿.xlsx';
  var filePath = 'ac/fi/gnrlaccount/slipmgnt/fi_201_01_01b.xlsx';
  $c.gus.cfDownloadFile($p, fileName, filePath);
};

// @@ ====== 파일 (엑셀 업로드)  =============================================================== //

//-------------------------------------------------------------------------
// drmFileSubmit명 고정
//-------------------------------------------------------------------------
scwin.drmFileSubmit = function () {
  console.log("=== drmFileSubmit (drmFileSubmit명 고정)");
  var formObj = document.frm;
  // cfDrmUploadFile( formObj , fileUploadGDS, "f_Upload1");
  // KYU_TEST : 파일업로드 UDC 대체 예정
};

//-------------------------------------------------------------------------
// 엑셀 Upload (ds_excel 사용안함)
//-------------------------------------------------------------------------
scwin.f_excelUpload = async function () {
  console.log("=== f_excelUpload");

  // ds_excel.ClearData();
  // ds_tempExcel.ClearData();
  // ds_excel.DataId = fileUploadGDS.NameValue( 0, "filePath" );
  // ds_excel.Reset();
  // resetForm('frm');
  // cfProgressWinOpen();
  // window.setTimeout("f_Upload()", 1000);//시간

  ds_tempExcel.setJSON([]);
  let options = {
    "header": 0,
    // excel파일에서 그리드의 데이터에 header가 있는지 여부(1이면 header 존재 0이면 없음)
    "type": "1",
    // 1이면 엑셀 파일이 그리드의 보이는 결과로 만들어져있을때, 0이면 엑셀 파일이 그리드의 실제 데이터로 구성되어있을때
    "startRowIndex": 1,
    // excel파일에서 그리드의 데이터가 시작되는 행의 번호(헤더 포함)
    "footerExist": 0 // excel파일에서 그리드의 데이터에 footer가 있는지 여부(1이면 footer 존재 0이면 없음 기본값은 1 그리드에 footer가 없으면 적용되지 않음)
  };
  await udc_gridMain.uploadGridViewExcel(gr_tempExcel, options);
};

//-------------------------------------------------------------------------
// function name : gr_tempExcel_onfilereadend
// function desc : Excel 그리드 등록
//-------------------------------------------------------------------------
scwin.gr_tempExcel_onfilereadend = function (value) {
  console.log("=== gr_tempExcel_onfilereadend");
  scwin.f_Upload();
};

//-------------------------------------------------------------------------
// 엑셀 Upload
//-------------------------------------------------------------------------
scwin.f_Upload = async function () {
  console.log("=== f_Upload");
  scwin.uploadYn = "Y";
  if (ds_tempExcel.getRowCount() == 0) {
    // $c.gus.cfProgressWinClose();

    // 해당되는 자료가 존재하지 않습니다.
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  scwin.loadCompleted = false;

  // if (scwin.f_AddRowUploaded()) {
  let rtn = await scwin.f_AddRowUploaded();
  if (rtn) {
    // $c.gus.cfProgressWinClose();
    await $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
  }
  scwin.loadCompleted = true;
  scwin.addRowValidPass = false; // 행추가 f_Validation pass

  // 업무용차량여부  1: Y  3: 개인차량
  if (lc_busiCarYn.getValue() == 1 || lc_busiCarYn.getValue() == 3) {
    // cfEnableObjects([lc_expenseCd,ed_vehcleNo,img_vehcleNo]);
    $c.gus.cfEnableObjects($p, [lc_expenseCd, ed_vehcleNo, btn_vehcleNo]);
    console.log("  ==--== 활성 (비용구분, 차량번호, 차량번호돋보기)");
  } else {
    // cfDisableObjects([lc_expenseCd,ed_vehcleNo,txt_vehcleNm,img_vehcleNo]);
    $c.gus.cfDisableObjects($p, [lc_expenseCd, ed_vehcleNo, ed_vehcleNm, btn_vehcleNo]);
    console.log("  ==--== 비활성 (비용구분, 차량번호, 차량명, 차량번호돋보기)");
    lc_expenseCd.setValue("");
    ed_vehcleNo.setValue("");
    ed_vehcleNm.setValue("");
  }
  scwin.uploadYn = "N";
};

//-------------------------------------------------------------------------
// 엑셀 업로드 자료 추가  (ds_tempExcel -->  ds_txncontents)  @@ @
//-------------------------------------------------------------------------
scwin.f_AddRowUploaded = async function () {
  console.log("=== f_AddRowUploaded (엑셀 업로드 자료 추가 (ds_tempExcel -->  ds_txncontents))");
  scwin.uploadYn = "Y";
  // ds_tempExcel.ImportData(ds_excel.ExportData(1, ds_excel.CountRow, true));

  // var dcJSON = ds_excel.getAllJSON();   // JSON 배열로 담기
  // ds_tempExcel.setJSON(dcJSON, true);   // append

  var CountRow = ds_tempExcel.getTotalRow();
  var dc = ds_tempExcel.getAllArray();
  console.log("  *** ds_tempExcel (" + CountRow + ") : " + JSON.stringify(dc));

  //    if (ds_tempExcel.CountRow > 0) {
  if (ds_tempExcel.getTotalRow() > 0) {
    // ds_txncontents.ClearData();
    ds_txncontents.setJSON([]);

    // for (var i=1; i <= ds_tempExcel.CountRow; i++) {
    for (var i = 0; i < CountRow; i++) {
      // ds_txncontents.AddRow();
      // row = ds_txncontents.CountRow;

      ds_txncontents.insertRow();
      var row = ds_txncontents.getTotalRow() - 1; // 0부터 들어가야 함
      // ds_txncontents.setRowPosition(row);

      if (scwin.testAlertFlag == true) {
        // KYU_TEST : 주요 로그 alert
        await $c.win.alert($p, "  1단계 복사  ◀◀  i [ " + i + " ]   row [ " + row + " ]  ◀◀");
      }
      console.log("  ◀◀  i [" + i + "]   row [" + row + "]  ◀◀");
      scwin.loadRow = i; // 로드 세팅 row

      if (ds_tempExcel.getCellData(i, "adjmClsCd") == "4" || ds_tempExcel.getCellData(i, "adjmClsCd") == "5") {
        await $c.win.alert($p, "가지급금,선급금은 정산방법에 사용할수 없습니다.");
        return;
      }

      // 각 항목 공백 검사 시작

      // 공백이 제거된 ds_tempExcel의 길이를 측정
      // lengthOfAcctDeptCd      = ds_tempExcel.columnValue(row, ds_tempExcel.columnIndex("acctDeptCd")).length;     // 귀속부서 자릿수 검사
      lengthOfAcctDeptCd = ds_tempExcel.getCellData(row, "acctDeptCd").length; // 귀속부서 자릿수 검사

      // 귀속부서 자릿수 검사
      if (lengthOfAcctDeptCd == 5) {
        ds_txncontents.setCellData(row, "acctDeptCd", ds_tempExcel.getCellData(i, "acctDeptCd"));
      } else if (lengthOfAcctDeptCd == 4) {
        ds_txncontents.setCellData(row, "acctDeptCd", "0" + ds_tempExcel.getCellData(i, "acctDeptCd"));
      } else if (lengthOfAcctDeptCd == 3) {
        ds_txncontents.setCellData(row, "acctDeptCd", "00" + ds_tempExcel.getCellData(i, "acctDeptCd"));
      } else if (lengthOfAcctDeptCd == 2) {
        ds_txncontents.setCellData(row, "acctDeptCd", "000" + ds_tempExcel.getCellData(i, "acctDeptCd"));
      } else if (lengthOfAcctDeptCd == 1) {
        ds_txncontents.setCellData(row, "acctDeptCd", "0000" + ds_tempExcel.getCellData(i, "acctDeptCd"));
      } else {
        ds_txncontents.setCellData(row, "acctDeptCd", ds_tempExcel.getCellData(i, "acctDeptCd").substring(0, 5));
      }
      ds_txncontents.setCellData(row, "evidClsCd", ds_tempExcel.getCellData(i, "evidClsCd")); // 01.증빙구분코드

      var evidRow = ds_evidClsCd.getMatchedIndex("col1", ds_tempExcel.getCellData(i, "evidClsCd"));
      // var temp_evidclsNm = ds_evidClsCd.getCellData(evidRow, "col2");
      // console.log("  temp_evidClsNm ["+temp_evidClsNm+"]");

      // ds_txncontents.setCellData(row, "evidClsNm"  , ds_evidClsCd.getCellData(row, "col2"      ));  // 증빙구분코드
      ds_txncontents.setCellData(row, "evidClsNm", ds_evidClsCd.getCellData(evidRow, "col2")); // 증빙구분명

      ds_txncontents.setCellData(row, "deductClsCd", ds_tempExcel.getCellData(i, "deductClsCd")); // 02.공제구분코드
      ds_txncontents.setCellData(row, "crn", ds_tempExcel.getCellData(i, "crn")); // 04.사업자등록번호
      ds_txncontents.setCellData(row, "taxnCls", ds_tempExcel.getCellData(i, "taxnCls")); //과세유형코드

      // if (ds_txncontents.getCellData(row, "crn") != "") { //사업자번호
      //     scwin.f_openPopUp('7', 'T');
      // }

      // 템플릿의 통화코드 뒤에 공백 1칸씩 붙어있음
      // ds_txncontents.NameValue(row,"crcCd")				=	ds_tempExcel.NameValue(i,"crcCd"); //  통화코드
      ds_txncontents.setCellData(row, "crcCd", ds_tempExcel.getCellData(i, "crcCd").trim()); // 통화코드

      ds_txncontents.setCellData(row, "exchRt", ds_tempExcel.getCellData(i, "exchRt")); // 환율
      ds_txncontents.setCellData(row, "txnDt", ds_tempExcel.getCellData(i, "txnDt")); // 계산서일자
      ds_txncontents.setCellData(row, "spplyAmt", ds_tempExcel.getCellData(i, "spplyAmt")); // 공급금액
      ds_txncontents.setCellData(row, "spplyAmtFcrc", ds_tempExcel.getCellData(i, "spplyAmtFcrc")); // 공급금액_외화
      ds_txncontents.setCellData(row, "vatAmt", ds_tempExcel.getCellData(i, "vatAmt")); // 부가세금액

      // if (ds_txncontents.getCellData(row, "acctDeptCd") != "") { //귀속부서
      //     scwin.f_openPopUp('4', 'T');
      // }

      // if (ds_txncontents.getCellData(row, "vatDeclarAcctDeptCd") != "") { //부가세관리부서
      //     scwin.f_VatDeclarAcctDeptCd('3');
      // }

      ds_txncontents.setCellData(row, "cardNo", ds_tempExcel.getCellData(i, "cardNo")); // 카드번호

      // if (ds_txncontents.getCellData(row, "cardNo") != "") { //카드번호
      //     scwin.f_openPopUp('6', 'T');
      // }

      ds_txncontents.setCellData(row, "acctCd", ds_tempExcel.getCellData(i, "acctCd")); // 계정코드

      // if (ds_txncontents.getCellData(row, "acctCd") != "") {  // 계정
      //     scwin.f_openPopUp('3', 'T');
      // }

      ds_txncontents.setCellData(row, "mgntClntNo", ds_tempExcel.getCellData(i, "mgntClntNo")); // 관리거래처번호

      // if (ds_txncontents.getCellData(row, "mgntClntNo") != "") { //거래처
      //     scwin.f_openPopUp('10', 'T');
      // }

      ds_txncontents.setCellData(row, "mgntEmpNo", ds_tempExcel.getCellData(i, "mgntEmpNo")); // 관리사원번호

      // if (ds_txncontents.getCellData(row, "mgntEmpNo") != "") { //사원번호
      //     scwin.f_openPopUp('8', 'T');
      // }

      ds_txncontents.setCellData(row, "mgntDt", ds_tempExcel.getCellData(i, "mgntDt")); // 관리일자
      ds_txncontents.setCellData(row, "mgntTermStDt", ds_tempExcel.getCellData(i, "mgntTermStDt")); // 관리기간시작일자
      ds_txncontents.setCellData(row, "mgntTermEndDt", ds_tempExcel.getCellData(i, "mgntTermEndDt")); // 관리기간종료일자
      ds_txncontents.setCellData(row, "adjmClsCd", ds_tempExcel.getCellData(i, "adjmClsCd")); // 정산구분코드
      ds_txncontents.setCellData(row, "adjmClntNo", ds_tempExcel.getCellData(i, "adjmClntNo")); // 정산거래처번호

      // if (ds_txncontents.getCellData(row, "adjmClntNo") != "") { //정산처
      //     scwin.f_openPopUp('9', 'T');
      // }

      ds_txncontents.setCellData(row, "summary", ds_tempExcel.getCellData(i, "summary")); // 적요
      ds_txncontents.setCellData(row, "opntAcctCd", ds_tempExcel.getCellData(i, "opntAcctCd")); // 41.상대계정코드

      // if (ed_opntAcctCd.getValue().trim() != "") { //상대계정
      //     scwin.f_openPopUp('11', 'T');
      // }

      ds_txncontents.setCellData(row, "giroYn", ds_tempExcel.getCellData(i, "giroYn")); // 46.지급방법 지로 여부
      ds_txncontents.setCellData(row, "paymentPrd", ds_tempExcel.getCellData(i, "paymentPrd")); // 47.지로납부기한
      ds_txncontents.setCellData(row, "vehcleNo", ds_tempExcel.getCellData(i, "vehcleNo")); // 53.업무용차량여부
      ds_txncontents.setCellData(row, "busiCarYn", ds_tempExcel.getCellData(i, "busiCarYn")); // 54.차량구분
      ds_txncontents.setCellData(row, "expenseCd", ds_tempExcel.getCellData(i, "expenseCd")); // 비용구분

      if (ds_txncontents.getCellData(row, "vehcleNo") != "") {
        scwin.f_vehclNoPopup(ds_txncontents.getCellData(row, "vehcleNo"), "");
      }
      ds_txncontents.setCellData(row, "reqClntNo", ds_tempExcel.getCellData(i, "reqClntNo")); // 요청거래처번호

      // if (ds_txncontents.getCellData(row, "reqClntNo") != "") { //거래처
      //     scwin.f_openPopUp('15', 'T');
      // }

      console.log("");
      // console.log( "   payProcYn (지급처리여부)  ds_txncontents ["+row+"]["+ds_txncontents.getCellData(row,"payProcYn")+"]  ds_tempExcel["+i+"]["+ds_tempExcel.getCellData(i,"payProcYn")+"]");
      console.log("    ◀ ◀  ds_txncontents [ " + row + " ][" + JSON.stringify(ds_txncontents.getRowJSON(row)) + "]");
      console.log("");
      console.log("");
    } // end of for
  } else {
    // 1 건도 없으면 리턴 처리
    return;
  }
  console.log("  ◀◀◀◀◀◀◀◀◀◀ 이제부터 팝업 세팅 ◀◀◀◀◀◀◀◀◀◀");
  // KYU_NEW
  scwin.loadCompleted = true; // 경비전표템플릿 로드 완료여부

  // 컬럼명 셋팅
  // for (i=0; i < ds_excel.getTotalRow(); i++ ) {
  //     for (j=0; j < ds_excel.getTotalCol(); j++ ) {
  //         // 인덱스를 받아 컬럼id 로 변환
  //         var lc_columnId = ds_excel.getColumnID(j);

  scwin.dsCodeNameSet = true; // ds에 코드명 세팅여부
  scwin.dsCodeNameSetRow = 0; // ds에 코드명 세팅 row
  console.log("      ==== 2단계 코드명 추출 이전  true 세팅  dsCodeNameSet [" + scwin.dsCodeNameSet + "]");
  for (i = 0; i < ds_txncontents.getTotalRow(); i++) {
    // debugger;

    if (scwin.testAlertFlag == true) {
      // KYU_TEST : 주요 로그 alert
      await $c.win.alert($p, "-      2단계 코드명 추출   ◁◁   i [  " + i + "  ] ◁◁");
    }
    console.log("");
    console.log("");
    console.log("==== 2단계 코드명 추출 ◁◁  i [  " + i + "  ] ◁◁ ============================");
    ds_txncontents.setRowPosition(i);
    gr_txncontents.setFocusedCell(i, 0, false);
    scwin.dsCodeNameSetRow = i;
    scwin.loadRow = i; // 로드 세팅 row

    for (j = 0; j < ds_txncontents.getTotalCol(); j++) {
      // 인덱스를 받아 컬럼id 로 변환
      var lc_columnId = ds_txncontents.getColumnID(j);
      scwin.dsCodeNameSetColId = ds_txncontents.getColumnID(j);
      if (lc_columnId == "crn" && ds_txncontents.getCellData(i, "crn") != "" ||
      // 사업자번호
      lc_columnId == "acctDeptCd" && ds_txncontents.getCellData(i, "acctDeptCd") != "" ||
      // 귀속부서

      // 귀속부서에서 연속
      lc_columnId == "vatDeclarAcctDeptCd" && ds_txncontents.getCellData(i, "vatDeclarAcctDeptCd") != "" ||
      // 부가세관리부서

      lc_columnId == "cardNo" && ds_txncontents.getCellData(i, "cardNo") != "" ||
      // 카드번호
      lc_columnId == "acctCd" && ds_txncontents.getCellData(i, "acctCd") != "" ||
      // 계정
      lc_columnId == "mgntClntNo" && ds_txncontents.getCellData(i, "mgntClntNo") != "" ||
      // 거래처
      lc_columnId == "mgntEmpNo" && ds_txncontents.getCellData(i, "mgntEmpNo") != "" ||
      // 관리사원
      lc_columnId == "adjmClntNo" && ds_txncontents.getCellData(i, "adjmClntNo") != "" ||
      // 정산처
      lc_columnId == "opntAcctCd" && ds_txncontents.getCellData(i, "opntAcctCd") != "" ||
      // 상대계정
      lc_columnId == "vehcleNo" && ds_txncontents.getCellData(i, "vehcleNo") != "" ||
      // 차량번호
      lc_columnId == "reqClntNo" && ds_txncontents.getCellData(i, "reqClntNo") != "" // 요청거래처
      ) {
        // KYU_ISSUE
        scwin.dsCodeNameSet = true; // ds에 코드명 세팅여부

        // KYU_NEW 코드명 세팅
        await scwin.setColumnName(i, lc_columnId);
      }
    }

    // KYU_NEW 지급일자 초기화 위해 세팅
    let rtnc = await scwin.f_CheckPayYn();
    console.log("");
    console.log("  코드명 부여후 ◀◀◀  ds_txncontents [ " + i + " ][" + JSON.stringify(ds_txncontents.getRowJSON(i)) + "]");
    console.log("");
  } // end of for

  console.log("      ==== 2단계 코드명 추출 이후 false 세팅 dsCodeNameSet [" + scwin.dsCodeNameSet + "]");

  // 2025-11-04 : 그리드 포커스 제일 아래로...
  gr_txncontents.setFocusedCell(ds_txncontents.getTotalRow() - 1, 0);
  var row = ds_txncontents.getTotalRow() - 1;
  scwin.dsCodeNameSet = false; // ds에 코드명 세팅여부
  scwin.uploadYn = "N";

  // 삭제 아님 - 행이동시 old check
  scwin.state = "N";
  scwin.delflag = "N";
  console.log("");
  console.log("=== f_AddRowUploaded (업로드 자료 추가) END ==============================================");
  console.log("");

  // console.log("======= 마지막 row 환경 세팅  --------------------------------- f_changeRow2 ["+row+"]  SKIP");
  // await scwin.f_changeRow2(row);

  // var dc = ds_txncontents.getAllArray();
  // console.log("  *** ds_txncontents (" + ds_txncontents.getTotalRow() + ") : " + JSON.stringify(dc));

  return true;
};

//-------------------------------------------------------------------------
// 코드명 세팅  @@ @
//   1:발행부서,3:계정,4:귀속부서,6:카드번호,7:사업자,8:사원,9:정산처,10:거래처,11:상대계정,12:매출입,13:지점,14:차량별실적,15:요청거래처
//-------------------------------------------------------------------------
scwin.setColumnName = async function (lc_row, lc_columnId) {
  var row = lc_row;
  var Colid = lc_columnId;

  // KYU_TEST : 실제 팝업에서는 안쓰이나 로그 확인용으로 추출
  var tempValue = ds_txncontents.getCellData(row, Colid);
  console.log("");
  console.log("▶▶▶ ---------- columnNameSet 코드명 세팅  row[" + row + "]  Colid [ " + lc_columnId + " ]  tempValue [ " + tempValue + " ]");

  // 사업자번호
  if (Colid == "crn") {
    await scwin.f_openPopUp('7', 'T');
  }

  // 귀속부서
  if (Colid == "acctDeptCd") {
    await scwin.f_openPopUp('4', 'T');
  }

  // 부가세관리부서
  if (Colid == "vatDeclarAcctDeptCd") {
    await scwin.f_VatDeclarAcctDeptCd('3');
  }

  // 카드 : 법인카드(40)일 때 카드발급처 -- 정산처
  if (Colid == "cardNo") {
    await scwin.f_openPopUp('6', 'T');
  }

  // 계정
  if (Colid == "acctCd") {
    await scwin.f_openPopUp('3', 'T');
  }

  // 거래처
  if (Colid == "mgntClntNo") {
    await scwin.f_openPopUp('10', 'T');
  }

  // 사원번호
  if (Colid == "mgntEmpNo") {
    await scwin.f_openPopUp('8', 'T');
  }

  // 정산처
  if (Colid == "adjmClntNo") {
    await scwin.f_openPopUp('9', 'T');
  }

  // 상대계정
  if (Colid == "opntAcctCd") {
    await scwin.f_openPopUp('11', 'T');
  }

  // KYU_NEW : 차량번호
  if (Colid == "vehcleNo") {
    // scwin.f_vehclNoPopup(ed_vehcleNo.getValue(), "");
    await scwin.f_vehclNoPopup(ds_txncontents.getCellData(lc_row, "vehcleNo"), "");
  }

  // 요청거래처
  if (Colid == "reqClntNo") {
    await scwin.f_openPopUp('15', 'T');
  }

  // 환율 처리
  await scwin.lc_crcCd_onchange();

  // 환율처리 : 차세대전표발행팝업 에서 사용
  // var temp;
  // if (Colid == "exchRt") {
  // 	if (ed_amtFcrc.getValue().trim() < 0){
  // 		if (lc_crcCd.getValue() == "JPY") {
  // 			if( parseInt( ds_txncontents.getCellData(row,"amt")) == 0){
  // 				//ed_amt.text = Math.floor(ed_amtFcrc.text.trim() * ds_txncontents.nameValue(row,Colid)) / 100;	// 기준환율		
  //                 temp = Math.floor(ed_amtFcrc.getValue().trim() * ds_txncontents.getCellData(row,Colid)) / 100;	// 기준환율
  //                 ed_amt.setValue(temp);
  // 			}
  // 		} else {
  // 			if( parseInt( ds_txncontents.getCellData(row,"amt")) == 0){
  // 				//ed_amt.text = Math.floor(ed_amtFcrc.text.trim() * ds_txncontents.nameValue(row,Colid));
  //                 temp = Math.floor(ed_amtFcrc.getValue().trim() * ds_txncontents.getCellData(row,Colid));
  //                 ed_amt.setValue(temp);
  // 			}
  // 		}
  // 	}else{
  // 		if (lc_crcCd.getValue() == "JPY") {
  // 			if( parseInt( ds_txncontents.getCellData(row,"amt")) == 0){
  // 				//ed_amt.text = Math.round(ed_amtFcrc.text.trim() * ds_txncontents.nameValue(row,Colid)) / 100;	// 기준환율
  //                 temp = Math.round(ed_amtFcrc.getValue().trim() * ds_txncontents.getCellData(row,Colid)) / 100;	// 기준환율
  //                 ed_amt.setValue(temp);
  // 			}
  // 		} else {
  // 			if( parseInt( ds_txncontents.getCellData(row,"amt")) == 0){
  // 				//ed_amt.text = Math.round(ed_amtFcrc.text.trim() * ds_txncontents.nameValue(row,Colid));
  //                 temp = Math.round(ed_amtFcrc.getValue().trim() * ds_txncontents.getCellData(row,Colid));
  //                 ed_amt.setValue(temp);
  // 			}
  // 		}
  // 	}
  // }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',class:''},E:[{T:1,N:'xf:group',A:{id:'',class:'sub_contents'},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ica_slipDt',style:'','ev:onclick':'scwin.f_delDept',ref:'data:ds_txn.slipDt',mandatory:'true',title:'작성일자',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'발행부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctDeptCdInfo3popup',style:'',codeId:'ed_slipAcctDeptCd',nameId:'ed_slipAcctDeptNm',id:'udc_slipAcctDeptCd','ev:onclickEvent':'scwin.udc_slipAcctDeptCd_onclickEvent',selectID:'retrieveAcctDeptCdInfo3',btnId:'btn_slipAcctDeptCd',refDataCollection:'ds_txn',code:'slipAcctDeptCd',name:'slipAcctDeptNm','ev:onblurCodeEvent':'scwin.udc_slipAcctDeptCd_onblurCodeEvent',maxlengthCode:'5',maxlengthName:'50',mandatoryName:'true',validTitle:'발행부서',allowCharCode:'0-9','ev:onblurNameEvent':'scwin.udc_slipAcctDeptCd_onblurNameEvent',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm link',id:'btn_pu_evid',style:'',type:'button','ev:onclick':'scwin.f_Evidac',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'증빙배부'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm link',id:'btn_pu_budget',style:'',type:'button','ev:onclick':'scwin.f_Budget',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예산실적'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm link',id:'btn_pu_copy',style:'',type:'button','ev:onclick':'scwin.f_SlipCopy',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표복사'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8 flex_no'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'경비전표 내역입력',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:110px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:110px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'tr_slipKindCd'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_slipKndCd',style:'width: 200px;',submenuSize:'fixed',ref:'',mandatory:'true',title:'전표종류'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사 경비전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자회사 매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K03'}]}]}]}]},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'증빙종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',chooseOption:'',disabled:'false',style:'width: 200px;',allOption:'',id:'lc_evidClsCd',class:'',direction:'auto',ref:'ds_txncontents.evidClsCd',displayMode:'value delim label',mandatory:'true',objType:'data','ev:onchange':'scwin.lc_evidClsCd_onchange',title:'증빙종류',sortOption:'value',sortMethod:'ascending',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_evidClsCd'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 100px;',allOption:'',id:'lc_deductClsCd',class:'',direction:'auto',ref:'data:ds_txncontents.deductClsCd',objType:'data',chooseOptionLabel:'$blank',title:'공제구분',sortMethod:'ascending',sortOption:'value',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'true',style:'width: 150px;',allOption:'',id:'lc_zeroTaxClsCd',class:'',direction:'auto',chooseOptionLabel:'없음',ref:'data:ds_txncontents.zeroTaxClsCd',objType:'data',title:'영세율구분코드',sortMethod:'ascending',sortOption:'value'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveCrnInfo2popup',style:'width: 250px;',class:'flex_no',codeId:'ed_crn',nameId:'ed_crnNm',id:'udc_crn',btnId:'btn_crn','ev:onclickEvent':'scwin.udc_crn_onclickEvent',selectID:'retrieveCrnInfo2',objType:'data','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent',refDataCollection:'ds_txncontents',code:'crn',name:'crnNm',maxlengthCode:'13',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',validTitle:'사업자번호','ev:onblurNameEvent':'scwin.udc_crn_onblurNameEvent',skipOnBlurCodeValueEmpty:'N',allowCharCode:'A-Za-z0-9',codeWidth:'100'}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_taxnCls',style:'width: 150px;',submenuSize:'auto',ref:'data:ds_txncontents.taxnCls',objType:'data',title:'사업자과세유형코드',chooseOptionLabel:'',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'통화코드/환율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group col5',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_crcCd',style:'width: 150px;',submenuSize:'auto',ref:'data:ds_txncontents.crcCd','ev:onchange':'scwin.lc_crcCd_onchange',mandatory:'true',objType:'data',title:'통화코드',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:input',A:{class:'',id:'ed_exchRt',placeholder:'',style:'width: 150px;text-align:right;',disabled:'true',objType:'data',ref:'data:ds_txncontents.exchRt',title:'환율',dataType:'float',displayFormat:'#,##0.##',allowChar:'0-9.',maxlength:'7.2'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'외화금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;text-align:right;',disabled:'true',id:'ed_spplyAmtFcrc',placeholder:'',class:'',displayFormat:'#,##0.##',dataType:'float',objType:'data',ref:'data:ds_txncontents.spplyAmtFcrc','ev:onblur':'scwin.ed_spplyAmtFcrc_onblur',title:'외화금액',allowChar:'0-9.',maxlength:'13.2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계산서일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_txnDt',style:'',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd',objType:'data',ref:'data:ds_txncontents.txnDt','ev:onblur':'scwin.ica_txnDt_onblur',mandatory:'true',title:'계산서일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공급금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_spplyAmt',placeholder:'',style:'width:150px;text-align:right;',dataType:'number',displayFormat:'#,##0',objType:'data',ref:'data:ds_txncontents.spplyAmt',mandatory:'true','ev:onblur':'scwin.ed_spplyAmt_onblur',title:'공급금액',allowChar:'0-9',maxlength:'13'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_vatAmt',placeholder:'',style:'width: 150px;text-align:right;',dataType:'number',displayFormat:'#,##0',objType:'data',ref:'data:ds_txncontents.vatAmt',title:'부가세액',allowChar:'0-9',maxlength:'13',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'할인금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_dcAmt',placeholder:'',style:'width:150px;text-align:right;',dataType:'number',displayFormat:'#,##0',objType:'data',ref:'data:ds_txncontents.dcAmt',title:'할인금액',allowChar:'0-9',maxlength:'13',mandatory:'false'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'branchTr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지점',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveBranchCodeListpopup',selectID:'retrieveBranchCodeList',codeId:'ed_branchCd',validTitle:'지점',nameId:'ed_branchNm',style:'width:250px;',id:'udc_branchCd','ev:onclickEvent':'scwin.udc_branchCd_onclickEvent',btnId:'btn_branchCd','ev:onblurCodeEvent':'scwin.udc_branchCd_onblurCodeEvent',refDataCollection:'ds_txncontents',code:'branchCd',name:'branchNm',objTypeCode:'data',maxlengthCode:'6',maxlengthName:'50',objTypeName:'data',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입항목코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveRcSelpchItemCdpopup',selectID:'retrieveRcSelpchItemCd',codeId:'ed_pchsItemCd',validTitle:'매입항목코드',nameId:'ed_pchsItemNm',style:'width:250px;',id:'udc_pchsItemCd','ev:onclickEvent':'scwin.udc_pchsItemCd_onclickEvent',btnId:'btn_pchsItemCd','ev:onblurCodeEvent':'scwin.udc_pchsItemCd_onblurCodeEvent',refDataCollection:'ds_txncontents',code:'pchsItemCd',name:'pchsItemNm',maxlengthCode:'3',maxlengthName:'50',objTypeCode:'data',objTypeName:'data',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctDeptCdInfo8popup',style:'width:250px;',codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',id:'udc_acctDeptCd',btnId:'btn_acctDeptCd','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',selectID:'retrieveAcctDeptCdInfo8','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent',refDataCollection:'ds_txncontents',code:'acctDeptCd',name:'acctDeptNm',maxlengthCode:'5',maxlengthName:'50',objTypeName:'data',objTypeCode:'data',allowCharCode:'0-9',mandatoryCode:'true',validTitle:'귀속부서',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부가세관리부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveVatDeclarAcctDeptCdpopup',style:'width:250px;',class:'flex_no',codeId:'ed_vatDeclarAcctDeptCd',nameId:'ed_vatDeclarAcctDeptNm',id:'udc_vatDeclarAcctDeptCd',btnId:'btn_vatDeclarAcctDeptCd','ev:onclickEvent':'scwin.udc_vatDeclarAcctDeptCd_onclickEvent',selectID:'retrieveVatDeclarAcctDeptCd','ev:onblurCodeEvent':'scwin.udc_vatDeclarAcctDeptCd_onblurCodeEvent',refDataCollection:'ds_txncontents',code:'vatDeclarAcctDeptCd',name:'vatDeclarAcctDeptNm',maxlengthCode:'5',maxlengthName:'50',mandatoryCode:'true',objTypeCode:'data',objTypeName:'data',validTitle:'부가세관리부서',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9'}},{T:1,N:'xf:input',A:{class:'',id:'ed_vatCrn',placeholder:'',style:'width: 150px;',ref:'data:ds_txncontents.vatCrn'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'카드번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveCardInfopopup',style:'width:250px;',codeId:'ed_cardNo',nameId:'ed_cardNm',id:'udc_cardNo',btnId:'btn_cardNo','ev:onclickEvent':'scwin.udc_cardNo_onclickEvent',selectID:'retrieveCardInfo','ev:onblurCodeEvent':'scwin.udc_cardNo_onblurCodeEvent',maxlengthCode:'16',maxlengthName:'50',objTypeCode:'data',objTypeName:'data',validTitle:'카드번호',skipOnBlurCodeValueEmpty:'N',refDataCollection:'ds_txncontents',code:'cardNo',name:'cardNm',codeDisplayFormat:'####-####-####-####',allowCharCode:'0-9',codeWidth:'120'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveExpenseAcctCdInfopopup',style:'width:250px;',id:'udc_acctCd',codeId:'ed_acctCd',nameId:'ed_acctNm',btnId:'btn_acctCd','ev:onclickEvent':'scwin.udc_acctCd_onclickEvent',selectID:'retrieveExpenseAcctCdInfo',objTypeCode:'data',objTypeName:'data',maxlengthName:'50',maxlengthCode:'7',allowCharCode:'0-9','ev:onblurCodeEvent':'scwin.udc_acctCd_onblurCodeEvent',code:'acctCd',name:'acctNm',refDataCollection:'ds_txncontents',mandatoryCode:'true',validTitle:'계정',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveClntListpopup',style:'width:250px;',id:'udc_mgntClntNo',codeId:'ed_mgntClntNo',nameId:'ed_mgntClntNm',btnId:'btn_mgntClntNo','ev:onclickEvent':'scwin.udc_mgntClntNo_onclickEvent',selectID:'retrieveClntList','ev:onblurCodeEvent':'scwin.udc_mgntClntNo_onblurCodeEvent',refDataCollection:'ds_txncontents',code:'mgntClntNo',name:'mgntClntNm',maxlengthCode:'6',maxlengthName:'50',objTypeCode:'data',objTypeName:'data',allowCharCode:'0-9',validTitle:'거래처',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사원번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcEmpInfopopup',style:'width:250px;',id:'udc_mgntEmpNo',codeId:'ed_mgntEmpNo',nameId:'ed_mgntEmpNm',btnId:'btn_mgntEmpNo','ev:onclickEvent':'scwin.udc_mgntEmpNo_onclickEvent',selectID:'retrieveAcEmpInfo','ev:onblurCodeEvent':'scwin.udc_mgntEmpNo_onblurCodeEvent',refDataCollection:'ds_txncontents',code:'mgntEmpNo',name:'mgntEmpNm',maxlengthCode:'6',maxlengthName:'50',objTypeCode:'data',objTypeName:'data',allowCharCode:'0-9',validTitle:'사원번호',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'경비기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'mgntTermStDt',style:'',id:'udc_mgntTermDt',refEdDt:'mgntTermEndDt',refDataMap:'ds_txncontents',edFromId:'ed_mgntTermStDt',edToId:'ed_mgntTermEndDt',objTypeFrom:'data',objTypeTo:'data',objTypeBtn:'data',titleFrom:'경비기간From',titleTo:'경비기간To'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'w200'},E:[{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_mgntDt',class:'',calendarValueType:'yearMonthDate',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd',ref:'data:ds_txncontents.mgntDt',objType:'data',title:'관리일자'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정산방법',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto','ev:onchange':'scwin.lc_adjmClsCd_onchange',chooseOption:'false',allOption:'false',title:'정산방법',mandatory:'true',ref:'data:ds_txncontents.adjmClsCd',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'width: 200px;',id:'lc_adjmClsCd',class:'',objType:'data',direction:'auto',emptyItem:'true'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_adjmClsCd_onclick',style:'',id:'btn_adjmClsCd',type:'button',class:'btn ico sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정산처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveClntListpopup',style:'width:250px;',btnId:'btn_adjmClntNo',codeId:'ed_adjmClntNo',id:'udc_adjmClntNo',nameId:'ed_adjmClntNm',selectID:'retrieveClntList','ev:onclickEvent':'scwin.udc_adjmClntNo_onclickEvent',readOnlyName:'true','ev:onblurCodeEvent':'scwin.udc_adjmClntNo_onblurCodeEvent',refDataCollection:'ds_txncontents',code:'adjmClntNo',name:'adjmClntNm',maxlengthCode:'6',maxlengthName:'50',objTypeCode:'data',objTypeName:'data',validTitle:'정산처',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_summary',placeholder:'',style:'',ref:'data:ds_txncontents.summary',mandatory:'true',objType:'data',title:'적요',maxlength:'100'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상대계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveExpenseAcctCdInfopopup',style:'width:250px;',btnId:'btn_opntAcctCd',codeId:'ed_opntAcctCd',id:'udc_opntAcctCd',nameId:'ed_opntAcctNm',selectID:'retrieveExpenseAcctCdInfo','ev:onclickEvent':'scwin.udc_opntAcctCd_onclickEvent',code:'opntAcctCd',refDataCollection:'ds_txncontents',mandatoryCode:'true',objTypeCode:'data',maxlengthCode:'5',maxlengthName:'50',objTypeName:'data',allowCharCode:'0-9',validTitle:'상대계정',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지로납부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select',A:{ref:'data:ds_txncontents.giroYn',appearance:'full',style:'',id:'cbx_giro',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',objType:'data','ev:onchange':'scwin.cbx_giro_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'납부기한'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_paymentPrd',class:'',calendarValueType:'yearMonthDate',calendarDisplayFormat:'yyyy/MM/dd',displayFormat:'yyyy/MM/dd',ref:'data:ds_txncontents.paymentPrd'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량별 실적',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 250px;'},E:[{T:1,N:'xf:input',A:{id:'ed_pchsAmtSum',style:'',objType:'data',title:'차량별실적'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_pchsAmtSum',style:'',type:'button','ev:onclick':'scwin.btn_pchsAmtSum_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업무용차량여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{ref:'data:ds_txncontents.busiCarYn',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 150px;',allOption:'',id:'lc_busiCarYn',class:'',direction:'auto','ev:onchange':'scwin.lc_busiCarYn_onchange','ev:onclick':'scwin.f_chk_busiCarYn',title:'업무용차량여부',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'개인차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'비용구분',class:''}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'true',style:'width: 150px;',allOption:'',id:'lc_expenseCd',class:'',direction:'auto',ref:'data:ds_txncontents.expenseCd',chooseOptionLabel:'$blank',title:'비용구분',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveWorkVehclInfopopup',style:'width:250px;',codeId:'ed_vehcleNo',nameId:'ed_vehcleNm',id:'udc_vehcleNo',btnId:'btn_vehcleNo',selectID:'retrieveWorkVehclInfo',validTitle:'차량번호',objTypeName:'data',maxlengthName:'50',skipOnBlurCodeValueEmpty:'N',refDataCollection:'ds_txncontents',code:'vehcleNo',objTypeCode:'data',maxlengthCode:'13',name:'vehcleNm','ev:onclickEvent':'scwin.udc_vehcleNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_vehcleNo_onblurCodeEvent',codeWidth:'100px'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveClntListpopup',style:'width:250px;',codeId:'ed_reqClntNo',id:'udc_reqClntNo',nameId:'ed_reqClntNm',btnId:'btn_reqClntNo','ev:onclickEvent':'scwin.udc_reqClntNo_onclickEvent',selectID:'retrieveClntList','ev:onblurCodeEvent':'scwin.udc_reqClntNo_onblurCodeEvent',maxlengthCode:'6',maxlengthName:'50',objTypeCode:'data',objTypeName:'data',allowCharCode:'0-9',refDataCollection:'ds_txncontents',code:'reqClntNo',name:'reqClntNm',validTitle:'요청거래처',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'전표분개내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_template',title:'엑셀 UP',type:'button',class:'btn template','ev:onclick':'scwin.btn_template_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'템플릿 다운로드'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'N',btnUser:'N',gridID:'gr_txncontents',gridUpFn:'scwin.f_excelUpload',gridDownUserAuth:'X',id:'udc_gridMain',templateYn:'N',gridUpYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{rowNumWidth:'50',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_txncontents',style:'',id:'gr_txncontents',class:'wq_gvw',defaultCellHeight:'24',rowNumVisible:'true',focusMode:'cell',visibleRowNum:'7'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption15',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column2',value:'증빙',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'계산서일자',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'계정',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'계정명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column7',value:'귀속부서',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'공급가액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'부가세액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'할인금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column29',value:'적요',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column92',value:'업무용차차량여부',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column104',value:' 비용구분',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column95',value:'차량번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'기타금액1<br/>계정',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'기타금액1<br/>계정명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'기타금액1<br/>금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column77',value:'기타금액1<br/>적요',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'기타금액2<br/>계정',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column71',value:'기타금액2<br/>계정명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'기타금액2<br/>금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column65',value:'기타금액2<br/>적요',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'evidClsNm',value:'',displayMode:'label',mandatory:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'txnDt',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',mandatory:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctCd',displayMode:'label',mandatory:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'acctNm',class:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'acctDeptNm',class:'',displayMode:'label',mandatory:'true',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyAmt',class:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',mandatory:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',class:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',mandatory:'true',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'busiCarYn',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'expenseCd',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vehcleNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'etcAcctCd1',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'etcAcctNm1',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'etcAmt1',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'etcSummary1',value:'',displayMode:'label',textAlign:'left',readOnly:'true',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'etcAcctCd2',value:'',displayMode:'label',readOnly:'true',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'etcAcctNm2',value:'',displayMode:'label',textAlign:'left',readOnly:'true',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'etcAmt2',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'etcSummary2',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column22',class:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'spplyAmtSum',class:'',value:'',displayMode:'label',dataType:'number',expression:'sum(\'spplyAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'vatAmtSum',class:'',value:'',displayMode:'label',dataType:'number',expression:'sum(\'vatAmt\')',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'dcAmtSum',value:'',displayMode:'label',dataType:'number',expression:'sum(\'dcAmt\')',displayFormat:'#,##0',class:'',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column31',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column94',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column106',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'etcAmt1Sum',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'etcAmt1\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'etcAmt2Sum',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'etcAmt2\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_etcAmt',style:'',type:'button','ev:onclick':'scwin.btn_etcAmt_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타금액입력'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_CopyRow',style:'',type:'button','ev:onclick':'scwin.f_CopyRow',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',gridID:'gr_txncontents',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DeleteRow',cancelFunction:'scwin.f_CancelRow',EngYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_save',label:'발행',class:'btn',objType:'bSave','ev:onclick':'scwin.f_Save',userAuth:'U'}}]}]},{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_tempExcel',defaultCellHeight:'24',focusMode:'cell',id:'gr_tempExcel',rowNumVisible:'false',rowNumWidth:'50',style:'',visibleRowNum:'1',visibleRowNumFix:'true','ev:onfilereadend':'scwin.gr_tempExcel_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption16',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'증빙구분코드',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column105',value:'공제구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'거래처번호',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column107',value:'사업자',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'계정',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'계산서일자',width:'80'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column109',value:'사원번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column111',value:'관리일자',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'경비기간시작',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column113',value:'경비기간종료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column117',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column119',value:'부가세관리부서',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'공급금액',width:'70'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column121',value:'공급금액(외화)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column123',value:'통화코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column125',value:'환율',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'부가세액',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column127',value:'카드번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column129',value:'정산방법',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column131',value:'정산처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column133',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column92',inputType:'text',style:'',value:'상대계정',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',style:'',value:'지로납부여부',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column104',inputType:'text',style:'',value:'지로납부기한',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column95',inputType:'text',style:'',value:'차량번호',width:'70'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column135',value:'업무용차량여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column137',value:'구분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'evidClsCd',inputType:'text',mandatory:'true',readOnly:'true',value:'',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'deductClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyy/MM/dd',displayMode:'label',id:'mgntClntNo',inputType:'text',mandatory:'true',readOnly:'true',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',mandatory:'true',readOnly:'true',width:'50'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'txnDt',inputType:'text',readOnly:'true',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'mgntEmpNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'mgntDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{class:'',displayMode:'label',id:'mgntTermStDt',inputType:'text',mandatory:'true',readOnly:'true',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'mgntTermEndDt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'vatDeclarAcctDeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{class:'',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'spplyAmt',inputType:'text',mandatory:'true',readOnly:'true',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'spplyAmtFcrc',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crcCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'exchRt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{class:'',dataType:'number',displayFormat:'#,##0',displayMode:'label',id:'vatAmt',inputType:'text',readOnly:'true',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cardNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'adjmClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'adjmClntNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'summary',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'opntAcctCd',inputType:'text',readOnly:'true',style:'',textAlign:'left',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'giroYn',inputType:'text',readOnly:'true',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'paymentPrd',inputType:'text',readOnly:'true',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehcleNo',inputType:'text',readOnly:'true',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'busiCarYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'expenseCd',value:'',displayMode:'label'}}]}]}]}]}]}]}]}]})