/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_03_01b.xml 341647 85ff1158ce590f0419ff9d6004031fc6970d66313ec8d8739806704b72368869 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipcontents',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_slipcontents_onrowpositionchange','ev:oncelldatachange':'scwin.ds_slipcontents_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'slipSeq',name:'전표순번',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'차대구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',name:'관리사원명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'관리거래처번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'관리거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntDt',name:'관리일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',name:'관리기간시작일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',name:'관리기간종료일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntNm',name:'관리번호명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizdivCd',name:'사업부문코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'termMgntYn',name:'기간관리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntMgntYn',name:'거래처관리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'empMgntYn',name:'사원관리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dtMgntYn',name:'일자관리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntNoCd',name:'관리번호코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'reqDt',name:'요청일자(지급일자)',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'요청지급방법코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'payProcYn',name:'지급처리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'payAcctCd',name:'지급계좌코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'부가세관리귀속부서',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서 일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'계산서금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'공제구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'비용구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'recvProcYn',name:'채권처리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'refNo',name:'PALLETIZING 번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건저장순번',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'요청거래처번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'요청거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'adjmClsCd',name:'정산구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'branchCd',name:'지점코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pchsItemCd',name:'매입항목코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'branchNm',name:'지점명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'pchsItemNm',name:'매입항목명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'paymentPrd',name:'지급기한(지로납부기간)',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'settleClsCd',name:'정산구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stlOutbrDt',name:'정산입금일자',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stlSlipNo',name:'정산DEBIS전표번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stlOutbrNo',name:'정산발생번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stlClntNo',name:'정산거래처번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stlClntNm',name:'정산거래처명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stlAcctDeptCd',name:'정산회계부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stlAcctDeptNm',name:'정산회계부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stlAcctCd',name:'정산계정코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stlAcctNm',name:'정산계정명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stlAmt',name:'수금금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'stlRamt',name:'정산잔액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'stlAmtFcrc',name:'정산외화금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'stlRamtFcrc',name:'정산잔액(외화)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'stlCrcCd',name:'정산통화코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stlExchRt',name:'정산환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'opntAcctNm',name:'상대계정명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'tempCostClsCd',name:'TEMP비용구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntCrn',name:'거래처사업자번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'zeroTaxClsCd',name:'영세율구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'Damt',name:'차변금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'Camt',name:'대변금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rowOrigin',name:'row발생수단',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_getMaxCloseYm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_commonCode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'param5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'param6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'param7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'param8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'param9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'param10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'불가계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'불가계정명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payAcctCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'지급계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'지급계정명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_slip',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'전표귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'전표귀속부서명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retSlip',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_prov',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'요청귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptNm',name:'요청귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNo',name:'요청사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNm',name:'요청사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlIntendDt',name:'정리예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'setlAmt',name:'정리금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'setlAmtFcrc',name:'정리금액_외화',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'postSetlAmt',name:'기정리금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'postSetlAmtFcrc',name:'기정리외화금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'susPayClsCd',name:'가지급금구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptAmt',name:'입금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptAmtFcrc',name:'입금액(외화)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlDt',name:'정리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건 저장순번',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'setlIntendAmt',name:'정리예정금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'setlIntendAmtFcrc',name:'정리예정외화금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'setlCompleteYn',name:'정리완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postYn',name:'회계처리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'setexchRt',name:'정리환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_provHeader',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlDt',name:'정리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'요청귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susPayClsCd',name:'가지급금구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건 저장순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'은행계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookKndNm',name:'통장종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptNm',name:'요청귀속부서명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_exchRtSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crcCd',name:'환율코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'환율적용일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_settleAccount',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commCode',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payAcctCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_exchRtSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crcCd',name:'환율코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'기준일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exchRt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDt',name:'기준일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdExchRt',name:'기준환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pchsExchRt',name:'매수환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellovExchRt',name:'매도환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_budgetCheck'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'budgetYm',name:'예산년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'budgetRsltsAmt',name:'예산실적금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_budget',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntlUnitClsCd',name:'통제단위구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnAmt',name:'배정금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'actAmt',name:'취득가액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'addBudgetAmt',name:'추가예산금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'budgetRsltsAmt',name:'예산실적금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'budgetRsltsSettAmt',name:'예산실적결산금액',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_budget_temp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntlUnitClsCd',name:'통제단위구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnAmt',name:'배정금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actAmt',name:'취득가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addBudgetAmt',name:'추가예산금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetRsltsAmt',name:'예산실적금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetRsltsSettAmt',name:'예산실적결산금액',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_acctCd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_commonCode',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_evidClsCd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_commonCode',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_payAcctCd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_commonCode',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_checkSettle',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_commonCode',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_checkSettle2',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_commonCode',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_exchRt',action:'/ac.fm.stdinfomgnt.RetrieveExchangeRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_exchRtSearch","key":"IN_DS1"},{"id":"ds_exchRt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_exchRt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_budgetRt',action:'/ac.co.budgetmgnt.ValidateBudgetRemainAmtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_budgetCheck","key":"IN_DS1"},{"id":"ds_budget","key":"OUT_DS1"},{"id":"ds_budget_temp","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_budget","key":"OUT_DS1"},{"id":"ds_budget_temp","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.gnrlaccount.slipmgnt.ProcessJournalizeSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_slip","key":"IN_DS1"},{"id":"ds_slipcontents","key":"IN_DS2"},{"id":"ds_prov","key":"IN_DS3"},{"id":"ds_retSlip","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retSlip","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_201_03_01b
// 이름     : 대체전표입력
// 경로     : 재무회계/일반회계/전표관리/
// 사용계정 : 내부
// 파라미터 :
//            IN  :
//            OUT :
//
// 비고     :
//            1:발행부서,2:계정,3:귀속부서,4:거래처,5:사번,8:사업자번호,9:상대계정,10:요청거래처
//
//            전표복사 후, 사업자번호 활성은 무의미. 움직이면 비활성됨.
//
//            검색 : @@ @ [주요로직]   @@ [섹션]
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//            [호출]
//            fi_201_03_03p.jsp(전표복사(분개내역))
//            fi_201_02_02b.jsp(가지급금입금) - valueObjet  --> data
//              - 정산방법 돋보기 클릭
//            fi_201_03_04p.jsp(채권채무선수금조회)
//              - 지급/채권번호 돋보기 버튼 클릭
//
//==================================================================================================================

// 로그인사용자 정보
scwin.vLoginCoCd = ""; // 소속 자회사 
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.privAdmin = ""; // 어드민권한
scwin.user_id = ""; // 사용자ID
scwin.vCoCd = ""; // 회사코드
scwin.userEmpNo = ""; // 사원번호

scwin.vCoClsCd = ""; // 소속회사종류 : 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.acctDeptCd = ""; // 회계부서코드
scwin.acctDeptNm = ""; // 회계부서명

// KYU_TEST : 전역변수로 변환 필요
// document.all.txt_method.style.visibility = "hidden";
// document.all.txt_settleClsCd.style.visibility = "hidden";
// document.all.txt_acctClsCd.style.visibility = "hidden";

scwin.txtCoClsCd = "";
scwin.copyKind; // 복사종류 : 전표복사 리턴값

scwin.vUpperAcctDeptCd = ""; // 상위귀속부서코드

scwin.state = "Y";
scwin.delflag = "N";
scwin.ELECTRONICDRAFT = "40"; // 전자어음
scwin.DRAFTCHECK = "50"; // 약속어음
scwin.TRANSFER = "20"; // 이체
scwin.ELECTRIC_CASH = "30"; // 전자결재현금
scwin.PREPAY = "4"; // 가지급금
scwin.vUpperAcctDeptCd = ""; // 상위부서코드
scwin.rowCopyYn = 0; // 행복사여부
scwin.GIRO = "95"; // 지로납부
scwin.isSubCompany = false; // 자회사유무(true:자회사, false:일반)
scwin.checkExchRt = 0; //환율 부분 추가
scwin.checkMain = "0";

// 지급/채권번호 히든 --> 전역변수 처리
// <input type="text"  class=input_text name="txt_method" id="txt_method" style="width:60px" maxLength=50 objType="data" value="">  // 히든
// <INPUT type="text" class=input_text id=txt_settleClsCd name="txt_settleClsCd" style="width:10px" value="">  // 정리구분코드 - 히든
// <INPUT type="text" class=input_text id=txt_acctClsCd    name="txt_acctClsCd"  style="width:10px" value="">  // 계정구분코드 - 히든
scwin.txt_method = ""; // 방법 (바인딩 아님)
scwin.txt_settleClsCd = ""; // 정산구분코드 (추가 바인딩)
scwin.txt_acctClsCd = ""; // 계정구분코드 (추가 바인딩)

// <INPUT type="hidden" class=input_text id=txt_bizdivCd     name="txt_bizdivCd">
// <INPUT type="hidden" class=input_text id=txt_bizDomCd     name="txt_bizDomCd">
// <INPUT type="hidden" class=input_text id=txt_termMgntYn   name="txt_termMgntYn">
// <INPUT type="hidden" class=input_text id=txt_clntMgntYn   name="txt_clntMgntYn">
// <INPUT type="hidden" class=input_text id=txt_empMgntYn    name="txt_empMgntYn">
// <INPUT type="hidden" class=input_text id=txt_dtMgntYn     name="txt_dtMgntYn">
// <INPUT type="hidden" class=input_text id=txt_payAcctCd    name="txt_payAcctCd">
// <INPUT type="hidden" class=input_text id=txt_clntCrn      name="txt_clntCrn">
// <INPUT type="hidden" class=input_text id=txt_costClsCd    name="txt_costClsCd">
// <INPUT type="hidden" class=input_text id=txt_tempCostClsCd name="txt_tempCostClsCd"  >
// <INPUT type="hidden" class=input_text id=txt_opntAcctCd    name="txt_opntAcctCd">
// <INPUT type="hidden" class=input_text id=txt_opntAcctCostClsCd    name="txt_opntAcctCostClsCd">
// <INPUT type="hidden" class=input_text id=txt_tempOpntAcctCostClsCd name="txt_tempOpntAcctCostClsCd"  >

scwin.txt_bizdivCd = ""; // 사업부문코드 (추가 바인딩)
scwin.txt_bizDomCd = ""; // 사업영역코드 (추가 바인딩)
scwin.txt_termMgntYn = ""; // 기간관리여부
scwin.txt_clntMgntYn = ""; // 거래처관리여부
scwin.txt_empMgntYn = ""; // 사원관리여부
scwin.txt_dtMgntYn = ""; // 일자관리여부

scwin.txt_payAcctCd = ""; // 지급계좌코드      (추가 바인딩)
scwin.txt_clntCrn = ""; // 거래처사업자번호  (추가 바인딩)
scwin.txt_costClsCd = ""; // 비용구분코드      (추가 바인딩)
scwin.txt_tempCostClsCd = ""; // TEMP비용구분코드  (추가 바인딩)

scwin.txt_opntAcctCd = ""; // 상대계정코드
scwin.txt_opntAcctCostClsCd = ""; // 상대계정비용구분코드
scwin.txt_tempOpntAcctCostClsCd = ""; // TEMP상대계정비용구분코드

// f_HiddenCheck 용 전역변수
scwin.ed_slipAcctDeptCd_hidVal = ""; // 발행부서

scwin.ed_acctDeptCd_hidVal = ""; // 귀속부서
scwin.ed_vatDeclarAcctDeptCd_hidVal = ""; // 부가세관리부서
scwin.ed_crn_hidVal = ""; // 거래처
scwin.ed_acctCd_hidVal = ""; // 계정
scwin.ed_mgntEmpNo_hidVal = ""; // 사원번호
scwin.ed_mgntClntNo_hidVal = ""; // 거래처
scwin.ed_opntAcctCd_hidVal = ""; // 상대계정
scwin.ed_reqClntNo_hidVal = ""; // 요청거래처

scwin.ed_branchCd_hidVal = ""; // 지점(미사용)
scwin.ed_pchsItemCd_hidVal = ""; // 매출입항목(미사용)

// 신규 플래그
// scwin.loadCompleted          = false;   // 전표분개내역 로드 완료여부

scwin.isStarted = true; // 최초 이벤트 여부
scwin.isSlipCopy = false; // 전표복사

scwin.callOnLoad = false; // f_OnLoad 에서 호출 (발행부서 호출 구분용)

scwin.mainGridRowCnt = 0; // 메인 그리드 row 건수

scwin.popupAsyncFlag = true; // 실시간 팝업 사용여부

scwin.focusTarget = 0; // f_ValidationDs 의 포커스대상 컴포넌트

// new row 로 이동했다가 다시 old row 로 올 때, 체크를 하게되어 활성/비활성이 바뀌게 됨
scwin.skipRowCheck = false; // row 체크 스킵 : new Row, old Row 에서 불필요한 체크 스킵.

scwin.g_newRowIndex = 0; // newRow 전역변수 : 환율유지
scwin.g_oldRowIndex = 0; // oldRow 전역변수 : oldRow 는 체크해야 함.

scwin.testAlertFlag = false; // 테스트용 alert 표시여부

scwin.addRowFlag = false; // 행추가 플래그 - 행추가 일 때 정산방법 활성화 시키기 위함 (행복사는 대상아님)

// f_checkSettle2 조회시 넘기는 인덱스
scwin.idx = 0; // 불필요

scwin.sort_options = {};
scwin.sort_options.sortIndex = "rltSeq slipNo"; // 컬럼 나열
scwin.sort_options.sortOrder = "1 1"; // 1: 오름차순

scwin.onpageload = function () {
  // 버전 구분
  console.log("====== onpageload ================== v 1.11");

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
  scwin.vCoCd = coCd; // 동일
  scwin.user_id = userId;
  scwin.privAdmin = privAdmin;
  scwin.userEmpNo = empNo;
  scwin.vCoClsCd = coClsCd;
  console.log("▶▶ vLoginCoCd : " + scwin.vLoginCoCd + "   loginCoClsCd : " + scwin.vLoginCoClsCd);
  console.log("▶▶ vCoCd      : " + scwin.vCoCd + "   vCoClsCd : " + scwin.vCoClsCd);
  console.log("▶▶ user_id    : " + scwin.user_id + "   userEmpNo : " + scwin.userEmpNo);
  console.log("▶▶ userHomeClsCd : " + scwin.vUserHomeClsCd + "   privAdmin : " + scwin.privAdmin);
  // console.log("▶▶ memJson : "+ JSON.stringify(memJson));

  // 회계부서코드/명
  let acctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
  let acctDeptNm = $c.data.getMemInfo($p, "acctDeptNm");
  scwin.acctDeptCd = acctDeptCd;
  scwin.acctDeptNm = acctDeptNm;
  console.log("▶▶ acctDeptCd : " + scwin.acctDeptCd + "   acctDeptNm : " + scwin.acctDeptNm);

  // 공통코드 : onPageLoad 에 위치
  const codeOptions = [{
    grpCd: "FI002",
    compID: "lc_drcrClsCd",
    opt: {
      "range": "1"
    }
  } // 차대구분  <%= GauceUtil.getCodeList("FI002",GauceUtil.CODE) %>
  , {
    grpCd: "ZZ006",
    compID: "lc_crcCd",
    opt: {
      "range": "1"
    }
  } // 통화코드  <%= GauceUtil.getCodeList("ZZ006",GauceUtil.CODE) %>
  , {
    grpCd: "FI005",
    compID: "lc_deductClsCd"
  } // 증빙종류코드
  , {
    grpCd: "FI004",
    compID: "lc_zeroTaxClsCd"
  } // 영세율구분코드
  , {
    grpCd: "FM018",
    compID: "lc_reqPayMthdCd"
  } // 지급방법
  ];
  console.log(" codeOptions : " + JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  // 지급방법 세팅
  // <%= GauceUtil.getCodeList("FM018",2,"10") %>,<%= GauceUtil.getCodeList("FM018",2,"20") %>,<%= GauceUtil.getCodeList("FM018",2,"30") %>">
  let dltStr = "dlt_commonCodeFM018"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  let dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  $c.data.dataListFilter($p, dlt, "fltrCd2 == '10' || fltrCd2 == '20' || fltrCd2 == '30'"); //$c.data.dataListFilter 함수를 이용해서 필터
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("  ==--== onUdcCompleted");

  // 2025-10-14 : 작성일자 포커스 위치 이동
  $p.setTimeout(function () {
    // KYU_NEW : 지점, 매입항목코드 숨김 : 업무 삭제
    branchTr.hide();

    // KYU_NEW : 외화전표 발행후 - 통화코드 선택시 환율 금액... 발생 방지
    scwin.checkExchRt = 0; //환율 부분 추가

    scwin.f_OnLoad(); // await 처리 위해
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// f_Onload
//  - f_AddRow 이전 동작
//  - tr_save 성공시 한번 더 호출
//
//  - 전표발행 후 다시 실행
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
scwin.f_OnLoad = async function () {
  console.log("======= f_OnLoad ========");

  // document.all.txt_method.style.visibility = "hidden";       // 지급수단     (바인딩 아님)
  // document.all.txt_settleClsCd.style.visibility = "hidden";  // 정리구분코드 (지급/채권번호) (추가 바인딩)
  // document.all.txt_acctClsCd.style.visibility = "hidden";    // 계정구분코드 (추가 바인딩)

  // KYU_TEST : 지급/채권번호 돋보기 --> 채권채무선수금조회
  // ed_acctDeptCd.setValue("00023");
  // ed_acctDeptNm.setValue("TPL3팀");
  // ed_mgntClntNo.setValue("124992");
  // ed_mgntClntNm.setValue("동부제철(주)");
  // ed_acctCd.setValue("1110410");
  // ed_acctNm.setValue("외상매출금-일반");
  // scwin.txt_settleClsCd = "1";   // 1, 2, 3 이 반드시 가야함

  scwin.f_setCompanyInfo();
  scwin.state = "Y";
  scwin.callOnLoad = true; // f_OnLoad 에서 호출 (발행부서 호출 구분용)

  // 발행부서 f_checkPopEd  --> f_openPopUp
  scwin.f_Header();

  //f_checkPopEd(ed_slipAcctDeptCd,txt_slipAcctDeptNm,'1');
  scwin.f_checkPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, '1'); // 발행부서

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
  let rtn1 = await scwin.getMaxCloseYm(); //마감년월 가져오기	

  // console.log("000  ------------------------------------------ 마감년월 이후");

  $c.gus.cfDisableKeyData($p);
  // $c.gus.cfDisableBtnOnly([bCreate]);
  $c.gus.cfDisableBtnOnly($p, [$c.gus.getctrlBtn($p, 'bCreate')]);

  // cfDisableObjects([img_mgntTermStDt, img_mgntTermEndDt, img_mgntClntNo,img_mgntEmpNo,img_mgntDt,img_acctDeptCd,img_acctCd,chb_payProcYn,chb_recvProcYn
  // ,ed_reqDt,lc_reqPayMthdCd,ed_draftDdCntCd,ed_taxinvcDt,img_reqDt,img_taxinvcDt,ed_paymentPrd,img_paymentPrd]);
  $c.gus.cfDisableObjects($p, [btn_mgntClntNo, btn_mgntEmpNo, btn_acctDeptCd, btn_acctCd, cbx_payProcYn, cbx_recvProcYn, ica_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd, ica_taxinvcDt, ica_paymentPrd]);
  console.log("  ==--== 비활성 : 거래처돋보기,사원돋보기,귀속부서돋보기,계정돋부기,지급체크박스,채권체크박스, 지급일자, 지급방법,어음일수,세금계산서일자,지로납부기한");
  lc_reqPayMthdCd.setValue(""); // 지급방법 초기화

  console.log("▶◀ 111 - 지급방법 초기화");

  // 투입불가계정 (대체전표) 조회 (FI027)
  // ds_acctCd.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=retrieveTransferAcctCdInfo&param5=N";
  // ds_acctCd.Reset();
  let rtn2 = await scwin.getBannedAcctCd();

  //증빙종류 조회
  // ds_evidClsCd.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC"+"&queryId=retrieveEvidInfo";
  // ds_evidClsCd.Reset();
  let rtn3 = await scwin.getEvidInfo();

  //지급계정 조회
  // ds_payAcctCd.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC"+"&queryId=retrieveDsCommCdInfo&param3=FI121&param4=1";
  // ds_payAcctCd.Reset();
  let rtn4 = await scwin.getPayAcctCd();
  let rtn = await scwin.f_AddRow();
  if (!rtn) return;

  // cfDisableObjects([ed_adjustExchRt, lc_adjmClsCd, lc_evidClsCd, lc_deductClsCd, lc_zeroTaxClsCd, txt_crnNm, txt_vatDeclarAcctDeptNm, ed_spplyAmt, ed_vatAmt]);
  $c.gus.cfDisableObjects($p, [ed_adjustExchRt, lc_adjmClsCd, lc_evidClsCd, lc_deductClsCd, lc_zeroTaxClsCd, ed_crnNm, ed_vatDeclarAcctDeptNm, ed_spplyAmt, ed_vatAmt]);
  console.log("  ==--== 비활성 (환율, 정산방법, 증빙구분,공제구분,영세율구분, 사업자명, 부가세관리부서명,공급금액,부가세금액)");

  // 통화코드 변경
  await scwin.crcCdChange();
  // cfDisableObjects([ed_opntAcctCd, txt_opntAcctNm, img_opntAcctCd]);
  $c.gus.cfDisableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
  console.log("  ==--== 비활성 : 상대계정코드,상대계정명,상대계정돋보기");

  // KYU_TEST : 2026-04-03 - 발행후 초기화면 세팅
  $c.gus.cfDisableObjects($p, [ica_mgntDt, ed_mgntTermStDt, ed_mgntTermEndDt, udc_mgntTermDt, ed_mgntEmpNo, ed_mgntClntNo, ed_refNo]);
  console.log("  NEW ==--== 비활성 (관리일자, 관리기간(전체), 사원번호, 거래처, 지급/채권번호)");

  // 여기서 값을 바꾸어야 제대로 실행됨
  scwin.isStarted = false; // 최초 이벤트 여부 - 최초실행 방지 외

  scwin.callOnLoad = false; // f_OnLoad 에서 호출 (발행부서 호출 구분용)

  console.log("======= f_OnLoad2 END =====");
  return true;
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  console.log("=== f_setCompanyInfo (자회사 회계 시스템 추가에 따른 설정)");

  // KYU_NEW : 지점, 매입항목코드 숨김 : 업무 삭제
  branchTr.hide();

  // 사용자소속구분코드(vUserHomeClsCd)가 자회사('SA')인 경우 
  if (scwin.vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.isSubCompany = true;
  } else {
    // 사용자 구분이 자회사('SA')가 아닌 경우, 회사코드(vCoCd)와 회사구분코드(vCoClsCd)을 '동부 EXPRESS'로 Default set
    scwin.vCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }

  // Hidden 처리된, input박스에 입력 (전역변수로 대체)
  scwin.txtCoCd = scwin.vCoCd;
  scwin.txtCoClsCd = scwin.vCoClsCd;
  console.log("▶▶ vCoCd      : " + scwin.vCoCd + "   vCoClsCd   : " + scwin.vCoClsCd);
  console.log("▶▶ txtCoCd    : " + scwin.txtCoCd + "   txtCoClsCd : " + scwin.txtCoClsCd);
  console.log("▶▶ scwin.isSubCompany : " + scwin.isSubCompany);
};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = async function () {
  //ds_search2.NameValue(1,"coCd") = vCoCd;
  ds_search2.set("coCd", scwin.vCoCd);
  var dcJSON = ds_search2.getJSON();
  console.log("  *** ds_search2 : " + JSON.stringify(dcJSON));

  // KYU_TEST : 조회부 미리 세팅 -> 최초 cfValidate, f_Validation 오류 방지
  ds_slip.insertRow();
  ds_slip.setRowPosition(0);

  // 전표헤더 데이터셋 기본데이터 셋팅
  ds_slip.setCellData(0, "slipDt", $c.date.getServerDateTime($p, "yyyyMMdd")); // 현재일자세팅
  ds_slip.setCellData(0, "slipAcctDeptCd", scwin.acctDeptCd); // 접속유저 부서코드를 전표귀속부서로 세팅

  var dcJSON = ds_slip.getAllArray();
  console.log("  *** ds_slip : " + JSON.stringify(dcJSON));
};

//-------------------------------------------------------------------------
// 전월 마감여부 
//-------------------------------------------------------------------------
scwin.getMaxCloseYm = async function () {
  console.log("=== getMaxCloseYm (전월 마감여부)");

  // tr_getMaxCloseYm.Post();
  let e = await $c.sbm.execute($p, sbm_getMaxCloseYm);

  // console.log("▷ sbm_getMaxCloseYm_submitdone (전월 마감여부)");

  if (e.responseJSON.resultDataSet[0].Code != 0) return false;
  var thisYm = $c.date.getServerDateTime($p, "yyyyMMdd"); // 오늘일자 가져오기

  // console.log("ds_getMaxCloseYm.getCellData(0, closeYm) : " + ds_getMaxCloseYm.getCellData(0, "closeYm") );
  // console.log("thisYm : " + thisYm );

  //최소 미마감월이 당월이 아닐때
  if (ds_getMaxCloseYm.getCellData(0, "closeYm") != thisYm.substr(0, 6)) {
    console.log("  ---  최소 미마감월이 당월이 아닐때 ");
    var closeYm = ds_getMaxCloseYm.getCellData(0, "closeYm");
    var firstDay = closeYm.substr(0, 4) + "/" + closeYm.substr(4, 2) + "/" + "01"; // 1일
    var lastDay = closeYm.substr(0, 4) + "/" + closeYm.substr(4, 2) + "/" + new Date(closeYm.substr(0, 4), closeYm.substr(4, 2), 0).getDate(); // 마지막날
    var lastDay = closeYm.substr(0, 4) + closeYm.substr(4, 2) + new Date(closeYm.substr(0, 4), closeYm.substr(4, 2), 0).getDate(); // 마지막날

    ica_slipDt.setValue(lastDay); //작성일자 셋팅
  } else {
    console.log("  ---  최소 미마감월이 당월일 때 ");
  }
  console.log("=== getMaxCloseYm (전월 마감여부)  END");
  return true;
};

//-------------------------------------------------------------------------
// 투입불가계정 (대체전표) 조회 (FI027)
//-------------------------------------------------------------------------
scwin.getBannedAcctCd = async function () {
  console.log("=== getBannedAcctCd (투입불가계정 조회 - ds_acctCd)");
  // ds_acctCd.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=retrieveExpenseAcctCdInfo&param10=N";
  // ds_acctCd.Reset();
  // ds_acctCd.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=retrieveTransferAcctCdInfo&param5=N";
  // ds_acctCd.Reset();

  ds_commonCode.setEmptyValue();
  ds_acctCd.setJSON([]);
  const strParam = {
    sysCd: "CommonEBC" // 시스템코드
    ,

    queryId: "retrieveTransferAcctCdInfo" // 쿼리ID - 대체전표 계정내역조회 (FI027)
    ,

    param1: "",
    param2: "",
    param5: "N" // 대체전표불가 여부
  };

  //데이터셋에 정보설정
  ds_commonCode.setJSON(strParam);
  let e = await $c.sbm.execute($p, sbm_acctCd);

  // console.log("▷ sbm_acctCd_submitdone (투입불가계정)");

  if (e.responseJSON.resultDataSet[0].Code != 0) return false;
  if (e.responseJSON.GAUCE) {
    ds_acctCd.setJSON(e.responseJSON.GAUCE);
  }
  console.log("=== getBannedAcctCd  END");
  return true;
};

//-------------------------------------------------------------------------
// 증빙종류 조회
//-------------------------------------------------------------------------
scwin.getEvidInfo = async function () {
  console.log("=== getEvidInfo (증빙종류조회 - ds_evidClsCd)");
  ds_commonCode.setEmptyValue();
  ds_evidClsCd.setJSON([]);

  //증빙종류 조회
  // ds_evidClsCd.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC"+"&queryId=retrieveEvidInfo";
  // ds_evidClsCd.Reset();
  ds_commonCode.setEmptyValue();
  const strParam = {
    sysCd: "CommonEBC" // 시스템코드
    ,

    queryId: "retrieveEvidInfo" // 쿼리ID
  };

  //데이터셋에 정보설정
  ds_commonCode.setJSON(strParam);
  let e = await $c.sbm.execute($p, sbm_evidClsCd);
  if (e.responseJSON.resultDataSet[0].Code != 0) return false;
  if (e.responseJSON.GAUCE) {
    ds_evidClsCd.setJSON(e.responseJSON.GAUCE);
  }

  // <!-- 계정구분변경시 -->
  // language=JavaScript for=ds_evidClsCd event=onLoadCompleted()>
  // KYU_TEST : 전체 옵션 지정되므로 불필요

  // ds_evidClsCd.AddRow();
  // ds_evidClsCd.setRowPosition(0);   // 0번째가 널로 들어갈 수 있음 !!

  // let row = ds_evidClsCd.insertRow();
  // ds_evidClsCd.setCellData(row, "col1", ""     );
  // ds_evidClsCd.setCellData(row, "col2", "없음" );

  // ds_evidClsCd.setCellData(ds_evidClsCd.getTotalRow()-1,"col1", ""     );
  // ds_evidClsCd.setCellData(ds_evidClsCd.getTotalRow()-1,"col2", "없음" );

  console.log("=== getEvidInfo (증빙종류조회)  END");
  return true;
};

//-------------------------------------------------------------------------
// 지급계정조회 (FI121)
//-------------------------------------------------------------------------
scwin.getPayAcctCd = async function () {
  console.log("=== getPayAcctCd (지급계정조회 - ds_payAcctCd)");
  //증빙종류 조회
  // ds_payAcctCd.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC"+"&queryId=retrieveDsCommCdInfo&param3=FI121&param4=1";
  // ds_payAcctCd.Reset();
  ds_commonCode.setEmptyValue();
  ds_payAcctCd.setJSON([]);
  const strParam = {
    sysCd: "CommonEBC" // 시스템코드
    ,

    queryId: "retrieveDsCommCdInfo" // 쿼리ID
    ,

    param3: "FI121",
    param4: 1
  };

  //데이터셋에 정보설정
  ds_commonCode.setJSON(strParam);
  let e = await $c.sbm.execute($p, sbm_payAcctCd);
  console.log("▷ sbm_payAcctCd_submitdone (지급계정조회)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return false;
  if (e.responseJSON.GAUCE) {
    ds_payAcctCd.setJSON(e.responseJSON.GAUCE);
  }
  console.log("=== getPayAcctCd (지급계정조회)  END");
  return true;
};

// @@ ====== 그리드 / DS - 기타 ================================================================ //

//-------------------------------------------------------------------------
// damtExp 차변금액 custom
//-------------------------------------------------------------------------
scwin.damtExp = function (data, formatData, rowIdx, colIdx) {
  // if (!data) return ""; // 데이터가 없으면 빈 문자열 반환

  let drcrClsCd = gr_slipcontents.getCellData(rowIdx, "drcrClsCd"); // 대변차대구분코드
  let amt = gr_slipcontents.getCellData(rowIdx, "amt"); // 금액

  console.log("  === ** damtExp (차변금액 custom) - rowIdx [" + rowIdx + "]  drcrClsCd [" + drcrClsCd + "]  amt [" + amt + "]");

  // "", 0 추가해야 디폴트에서도 0 으로 나옴.
  return $c.gus.decode($p, drcrClsCd, "D", WebSquare.util.setNumber(amt, "#,##0"), "C", WebSquare.util.setNumber(0, "#,##0"), "", 0);
};

//-------------------------------------------------------------------------
// camtExp 대변금액 custom
//-------------------------------------------------------------------------
scwin.camtExp = function (data, formatData, rowIdx, colIdx) {
  // if (!data) return ""; // 데이터가 없으면 빈 문자열 반환

  let drcrClsCd = gr_slipcontents.getCellData(rowIdx, "drcrClsCd"); // 대변차대구분코드
  let amt = gr_slipcontents.getCellData(rowIdx, "amt"); // 금액

  console.log("  === ** camtExp (대변금액 custom) - rowIdx [" + rowIdx + "]  drcrClsCd [" + drcrClsCd + "]  amt [" + amt + "]");

  // value ={decode(drcrClsCd,"C",amt,"D","0")}
  return $c.gus.decode($p, drcrClsCd, "C", WebSquare.util.setNumber(amt, "#,##0"), "D", WebSquare.util.setNumber(0, "#,##0"), "", 0);
};

// @@ ====== 그리드 / DS ======================================================================= //

//-------------------------------------------------------------------------
// row position 변경전  ds_slipcontents_onbeforerowpositionchange @@
//   - 처음에는 안돌아아햠
//-------------------------------------------------------------------------
scwin.ds_slipcontents_onbeforerowpositionchange = async function (info) {
  // console.log("----- ds_slipcontents_onbeforerowpositionchange (row 변경전 항목 체크  old: "+ info.oldRowIndex +"  new: "+ info.newRowIndex +")");
  // if ( info.newRowIndex == null ) {
  //     console.log("  newRowIndex == null SKIP : 전표복사 후 ▶▶▶▶");
  //     return;
  // }
  // // 마지막이면...
  // // if ( ds_slipcontents.getTotalRow()-1  !=  info.newRowIndex ) {     // 메인 그리드 row 건수
  // //     return;
  // // }

  // // if ( info.newRowIndex != null || info.newRowIndex != "" ) {     // 널만 아니면
  // //     return;
  // // }
  // if (scwin.isStarted == true) {
  //     console.log("최초 이벤트는 skip ▶▶▶▶");
  //     return;
  // }
  // scwin.f_changeRow1();
};

//-------------------------------------------------------------------------
// KYU_NEW
// 히든 세팅 : 해당 row 의 공통팝업 로딩 목적
//-------------------------------------------------------------------------
scwin.f_setHidVal = async function () {
  console.log("=== f_setHidVal (히든 세팅)");
  scwin.ed_acctDeptCd_hidVal = ed_acctDeptCd.getValue(); // 귀속부서
  scwin.ed_vatDeclarAcctDeptCd_hidVal = ed_vatDeclarAcctDeptCd.getValue(); // 부가세관리부서
  scwin.ed_acctCd_hidVal = ed_acctCd.getValue(); // 계정
  scwin.ed_crn_hidVal = ed_crn.getValue(); // 사업자번호
  scwin.ed_mgntEmpNo_hidVal = ed_mgntEmpNo.getValue(); // 사원번호
  scwin.ed_mgntClntNo_hidVal = ed_mgntClntNo.getValue(); // 거래처
  scwin.ed_opntAcctCd_hidVal = ed_opntAcctCd.getValue(); // 상대계정
  scwin.ed_reqClntNo_hidVal = ed_reqClntNo.getValue(); // 요청거래처
};

//-------------------------------------------------------------------------
// f_changeRow1 : oldRow 점검  @@ @
//-------------------------------------------------------------------------
scwin.f_changeRow1 = async function (row) {
  if (row == null) {
    console.log("  row (old row) == null  f_changeRow1 SKIP ▶▶▶▶");
    return true;
  }
  console.log("□ □ □ □  f_changeRow1 (row 변경 이전 체크)   row[" + row + "] 현재[" + ds_slipcontents.getRowPosition() + "]");
  // <!-- 그리드 로우를 변경하려고 할 경우 - 필수항목 체크-->
  // language=JavaScript for=ds_slipcontents event=CanRowPosChange(row)>
  // if (scwin.isStarted != true) {

  console.log("   -- -- ▣ oldRow [" + row + "]  지급 [" + cbx_payProcYn.getValue() + "]  채권 [" + cbx_recvProcYn.getValue() + "]  지급방법 (ds) [" + ds_slipcontents.getCellData(row, "reqPayMthdCd") + "]" + "  지급방법 (ds-NEW) [" + scwin.g_newRowIndex + "][" + ds_slipcontents.getCellData(scwin.g_newRowIndex, "reqPayMthdCd") + "]");

  // KYU_ISSUE : 2026-05-11 : 여기에는 ds setting 넣지 말 것 - 다른 row 로 복사됨

  let rtn = await scwin.f_ValidationDs(row);

  // KYU_NEW : 지급방법에 따른 활성/비활성
  scwin.lc_reqPayMthdCd_onviewchange();
  if (ds_slipcontents.getTotalRow() != 0 && scwin.delflag == "N" && !rtn) {
    console.log("  ==== row 변경 이전 체크 fail  rtn [" + rtn + "]");
    scwin.state = "N";
    scwin.delflag = "N";
    return false;
  } else {
    scwin.state = "N";
    scwin.delflag = "N";
    return true;
  }
  // } else console.log("□ □ □ □  ds_slipcontents_onbeforerowpositionchange SKIP !! ▶▶▶▶");
};

//-------------------------------------------------------------------------
// row position 변경됨  ds_slipcontents_onrowpositionchange  @@ @
//-------------------------------------------------------------------------
scwin.ds_slipcontents_onrowpositionchange = async function (info) {
  // console.log("---=== ▶▶ on row postion change (row position 를 변경) ===========");
  var oldRow = info.oldRowIndex;
  var newRow = info.newRowIndex;
  var oldStatus = ds_slipcontents.getRowStatus(oldRow);
  var newStatus = ds_slipcontents.getRowStatus(newRow);
  console.log("▶▷▶▷▶▷▶▷ ds_slipcontents_onrowpositionchange  : row position 변경됨  old [" + oldRow + "][" + oldStatus + "]  new [" + newRow + "][" + newStatus + "]");
  console.log("   state [" + scwin.state + "]  delflag [" + scwin.delflag + "]");
  if (info.newRowIndex < 0) return;

  //  slipCopy 상태에서 null 일 때 f_changeRow2 를 돌려야 함

  if (oldRow == null // 새로운 row 를 추가하더라도, 추가 동작이 거의 없음
  || newRow == null // 데이타 셋을 비울 때 (setJSON)   old [0][C]  new (row) [null][undefined]

  // || ( oldRow == null && scwin.isSlipCopy == false )      // 전표복사 후에 oldRow null
  // || (( scwin.state == "Y" ) && (scwin.delflag == "Y" ))  // 행취소/행삭제 일 때
  // || (( newStatus == "C" ) && newRow == ds_slipcontents.getRowCount()-1 )
  ) return;

  // KYU_TEST : 점검 필요
  if (scwin.isStarted == true) {
    console.log("  ds_slipcontents_onrowpositionchange SKIP (최초 이벤트)");
    return;
  }
  scwin.skipRowCheck = true; // row 체크 스킵 : new Row, old Row 에서 불필요한 체크 스킵
  scwin.g_oldRowIndex = info.oldRowIndex; // oldRow 전역변수 : oldRow 는 체크해야 함.

  scwin.g_newRowIndex = info.newRowIndex; // newRow 전역변수 : 환율유지
  console.log("  == ** == **   skipRowCheck = true, g_oldRowIndex = oldRow [" + scwin.g_oldRowIndex + "]  ==========================================================");
  if (ds_slipcontents.getModifiedIndex().length > 0 && scwin.state == "N" && scwin.delflag == "N" // 취소/삭제는 old row 체크 안함
  ) {
    // old row 점검
    let ret = await scwin.f_changeRow1(oldRow);
    scwin.skipRowCheck = false; // row 체크 스킵 : new Row, old Row 에서 불필요한 체크 스킵
    console.log("  == ** == **    skipRowCheck = false");

    // let ret = await $c.win.confirm(MSG_CM_CRM_005);
    if (!ret) {
      ds_slipcontents.setEventPause("", true);
      gr_slipcontents.setFocusedCell(info.oldRowIndex, 0, false);
      ds_slipcontents.setEventPause("", false);

      // f_ValidationDs 후처리 : 대상 포커스
      switch (scwin.focusTarget) {
        case 1:
          ed_amt.focus();
          break;
        // 금액
        case 2:
          ed_mgntTermStDt.focus();
          break;
        // 관리기간From
        case 3:
          lc_reqPayMthdCd.focus();
          break;
        // 지급방법
        case 4:
          ica_reqDt.focus();
          break;
        // 요청일자
        case 5:
          ica_taxinvcDt.focus();
          break;
        // 세금계산서일자
        case 6:
          ica_paymentPrd.focus();
          break;
        // 지로납부기한
        case 7:
          ed_draftDdCntCd.focus();
          break;
        // 어음일수
        case 8:
          ed_summary.focus();
          break;
        // 적요
        case 9:
          ed_mgntClntNo.focus();
          break;
        // 거래처
        case 10:
          ed_mgntEmpNo.focus();
          break;
        // 사원
        case 11:
          ed_amtFcrc.focus();
          break;
        // 외화금액

        default:
          break;
      }
      return;
    } else {
      console.log("222-1  f_changeRow1 정상 처리 ---");
    }
  } else {
    console.log("222-2 : old row [" + oldRow + "] 체크 안하고 진행");
    scwin.skipRowCheck = false; // row 체크 스킵 : new Row, old Row 에서 불필요한 체크 스킵
  }

  // 후처리
  let rtn = await scwin.f_changeRow2(newRow);
  if (!rtn) {
    return false;
  }
  console.log("▶▷▶▷▶▷▶▷  ds_slipcontents_onrowpositionchange  END  ▶▷▶▷▶▷▶▷");
  return true;

  // KYU_NEW
  // if ( info.oldRowIndex == null || info.oldRowIndex ) {
  //     console.log("  oldRowIndex == null 최초 이벤트는 skip ▶▶▶▶");
  //     return;
  // }
  // if ( info.newRowIndex == null ) {
  //     console.log("  newRowIndex == null SKIP : 전표복사 후 ▷▷▷▷");
  //     return;
  // }

  // 마지막이면...
  // if ( ds_slipcontents.getTotalRow()-1  !=  info.newRowIndex ) {     // 메인 그리드 row 건수
  //     return;
  // }
  // if ( info.newRowIndex != null || info.newRowIndex != "" ) {     // 널만 아니면
  //     return;
  // }
};

//-------------------------------------------------------------------------
// f_changeRow2  @@ @
//-------------------------------------------------------------------------
scwin.f_changeRow2 = async function (row) {
  console.log("■ ■ ■ ■  f_changeRow2 (row 변경후) - newRow ( " + row + " )");

  // debugger;
  // <!-- 데이타셋 속성제어-->
  // language=JavaScript for=ds_slipcontents event=OnRowPosChanged(row)>
  // 2011.03.17 조원철대리 요청건으로 환율 값을 사용자 임의로 변경 가능토록 허용함

  // KYU_NEW : 체크박스 세팅 - ds 가지고는 안됨
  if (ds_slipcontents.getCellData(row, "payProcYn") == 1) {
    console.log("    payProcYn [" + row + "]  지급처리 체크박스 체크인");
    // cbx_payProcYn.checkAll(true);
    cbx_payProcYn.setValue(1);
  } else {
    // cbx_payProcYn.checkAll(false);
    cbx_payProcYn.setValue(0);
  }
  if (ds_slipcontents.getCellData(row, "recvProcYn") == 1) {
    console.log("    recvProcYn [" + row + "]  채권처리 체크박스 체크인");
    // cbx_recvProcYn.checkAll(true);
    cbx_recvProcYn.setValue(1);
  } else {
    // cbx_recvProcYn.checkAll(false);
    cbx_recvProcYn.setValue(0);
  }
  console.log("   -- -- ▣ newRow [" + row + "]  지급 [" + cbx_payProcYn.getValue() + "]  채권 [" + cbx_recvProcYn.getValue() + "]  지급방법 (ds) [" + ds_slipcontents.getCellData(row, "reqPayMthdCd") + "]");

  // KYU_ISSUE : 2026-05-11 : 여기에는 ds setting 넣지 말 것 - 다른 row 로 복사됨

  // if ( ds_slipcontents.getCellData(row,"reqPayMthdCd") == "" ) {
  //     lc_reqPayMthdCd.setValue( -1 );  // 없슴
  // } else {
  //     lc_reqPayMthdCd.setValue( ds_slipcontents.getCellData(row,"reqPayMthdCd"));
  // }
  // ed_draftDdCntCd.setValue(ds_slipcontents.getCellData(row,"draftDdCntCd"));  // 어음일수

  // console.log("   -- -- ▣ newRow ["+row+"]  지급 ["+cbx_payProcYn.getValue()+"]  채권 ["+cbx_recvProcYn.getValue()+"]  지급방법 ["+lc_reqPayMthdCd.getValue()+"]");

  // KYU_NEW : 지급방법에 따른 활성/비활성
  scwin.lc_reqPayMthdCd_onviewchange();

  // KYU_NEW : 증빙구분
  if (scwin.columnNameSet == true) {
    lc_evidClsCd.setValue(ds_slipcontents.getCellData(row, "evidClsCd"));
    console.log("    f_changeRow2 [" + row + "]  증빙구분 세팅");
  } else {
    await scwin.lc_evidClsCd_onchange(); // 지우면 한계금액이 0 으로 들어감
    // await scwin.lc_crcCd_onchange();
  }

  // KYU_NEW : 추가 역바인딩
  scwin.f_dsTotxt();

  // // ▶▶ KYU_NEW : payAcctCd 가 있으면 전역변수 에 복사.
  // if ( !$c.gus.cfIsNull(ds_slipcontents.getCellData(row,"payAcctCd")) ) {
  //     scwin.txt_payAcctCd = ds_slipcontents.getCellData(row,"payAcctCd") ;  // 지급계좌코드      (추가 바인딩) 
  //     console.log("▶▶      txt_payAcctCd ["+scwin.txt_payAcctCd+"] 세팅");

  //     // KYU_NEW : 추가 바인딩
  //     // var row = ds_slipcontents.getRowPosition();
  //     // ds_slipcontents.setCellData(row, "payAcctCd", scwin.txt_payAcctCd);  // 지급계정
  //     // console.log("▶▶     ["+row+"] payAcctCd ["+ds_slipcontents.getCellData(row, "payAcctCd")+"]");
  // }

  //-------------------------------------------------------------------------
  //  계정조회시화면셋팅
  //  r_mgntCd     - 관리번호
  //  r_termMgntYn - 기간관리여부
  //  r_clntMgntYn - 거래처여부
  //  r_empMgntYn  - 사원관리여부
  //  r_mgntNm     - 관리사원명
  //  r_dtMgntYn   - 일자관리여부
  //  r_payAcctCd  - 지급계정코드
  //-------------------------------------------------------------------------
  console.log("  f_changeRow2 - f_AcctCd (계정조회시화면셋팅) : row [" + row + "]");
  let rtna = await scwin.f_AcctCd(ds_slipcontents.getCellData(row, "mgntNo") // 관리번호
  , ds_slipcontents.getCellData(row, "clntMgntYn") // 거래처여부
  , ds_slipcontents.getCellData(row, "termMgntYn") // 기간관리여부
  , ds_slipcontents.getCellData(row, "empMgntYn") // 사원관리여부
  , ds_slipcontents.getCellData(row, "mgntNm") // 관리사원명
  , ds_slipcontents.getCellData(row, "dtMgntYn") // 일자관리여부
  , ds_slipcontents.getCellData(row, "payAcctCd") // 지급계정
  );

  // cfDisableObjects([txt_acctNm,txt_acctDeptNm,txt_mgntClntNm,txt_mgntEmpNm,lc_adjmClsCd]);

  // KYU_ISSUE : 2026-05-08 : 행추가시 정산방법 활성 - AsIs 에서 활성화됨. 스크립트 상에는 없슴 !!!

  // $c.gus.cfDisableObjects([ed_acctNm,ed_acctDeptNm,ed_mgntClntNm,ed_mgntEmpNm,lc_adjmClsCd,  ed_vatDeclarAcctDeptNm]);
  $c.gus.cfDisableObjects($p, [ed_acctNm, ed_acctDeptNm, ed_mgntClntNm, ed_mgntEmpNm, lc_adjmClsCd, ed_vatDeclarAcctDeptNm]);
  console.log(" f_changeRow2 ==--== 비활성 (계정명,귀속부서명,  거래처명  ,사원명, 정산방법,  부가세관리부서명(NEW))");

  // KYU_ISSUE : 2026-05-11 - 행추가시 정산방법 활성
  if (scwin.addRowFlag) {
    // 행추가시 정산방법 활성화용
    $c.gus.cfEnableObjects($p, [lc_adjmClsCd]);
    console.log(" f_changeRow2 ==--== 활성 (정산방법)  - 순수한 행추가");
    scwin.addRowFlag = false;
  }

  // [1110530] 단기대여금-업무가지급금(일반) 계정을 [차변]으로 선택할 수 없습니다. 가지급금선급금입력 화면에서 신청하세요.
  if (lc_drcrClsCd.getValue() == "C" && ed_acctCd.getValue() == "1110530") {
    if (scwin.isSubCompany == true) {
      lc_adjmClsCd.setValue(-1); //정산방법 : 없음
      $c.gus.cfDisableObjects($p, [btn_adjmClsCd]);
      console.log("  ==--== 정산방법:없음(-1) - 비활성 ( 정산방법돋보기 )");
    } else {
      lc_adjmClsCd.setValue(ACConstants.ADJM_MTHDCD_SUSPAY); // 정산방법(가지급금)  4
      $c.gus.cfEnableObjects($p, [btn_adjmClsCd]);
      console.log("  ==--== 정산방법:가지급금(4) - 활성 ( 정산방법돋보기 )");
    }
  } else {
    $c.gus.cfDisableObjects($p, btn_adjmClsCd);
    console.log("  ==--== 비활성 ( 정산방법돋보기 )");
  }

  // 미지급
  console.log("   f_changeRow2 - f_CheckPayYn 호출");
  let rtn = await scwin.f_CheckPayYn();

  // ed_slipAcctDeptCd.hidVal = ds_slip.NameString(1,"slipAcctDeptCd");
  scwin.ed_slipAcctDeptCd_hidVal = ds_slip.getCellData(0, "slipAcctDeptCd");
  scwin.ed_acctCd_hidVal = ds_slipcontents.getCellData(row, "acctCd");
  scwin.ed_acctDeptCd_hidVal = ds_slipcontents.getCellData(row, "acctDeptCd");
  scwin.ed_mgntClntNo_hidVal = ds_slipcontents.getCellData(row, "mgntClntNo");
  scwin.ed_mgntEmpNo_hidVal = ds_slipcontents.getCellData(row, "mgntEmpNo");
  console.log("  ■  f_changeRow2 - f_checkSettle  호출");

  // 2013.10.31 hurrah015
  // if(f_checkSettle(ed_acctCd.text, lc_drcrClsCd.BindColVal)){
  let rtn1 = await scwin.f_checkSettle(ed_acctCd.getValue(), lc_drcrClsCd.getValue());
  console.log("  ■  f_changeRow2 - f_checkSettle   rtn1 [" + rtn1 + "]");
  if (rtn1) {
    ed_refNo.setValue(ds_slipcontents.getCellData(row, "stlOutbrNo"));
    scwin.txt_acctClsCd = ds_slipcontents.getCellData(row, "acctClsCd");

    // KYU_NEW : 바인딩 처리
    var row = ds_slipcontents.getRowPosition();
    ds_slipcontents.setCellData(row, "acctClsCd", scwin.txt_acctClsCd); // 계정구분

    console.log("   --- 계정구분 반영 f_changeRow2 - txt_acctClsCd [" + scwin.txt_acctClsCd + "]");
  }

  // 선급비용-일반 계정일때 상대계정필드 활성화
  if (ds_slipcontents.getCellData(row, "acctCd") == "1111110") {
    $c.gus.cfEnableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
    console.log("  ==--== 선급비용-일반 계정 - 활성 ( 상대계정,상대계정명,상대계정돋보기 ) ");
  } else {
    $c.gus.cfDisableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
    console.log("  ==--== 선급비용-일반 계정 아님 - 비활성 ( 상대계정,상대계정명,상대계정돋보기 ) ");
  }
  // debugger;
  // KYU_NEW : 지로납부, 지로납부기한 정리
  // await scwin.f_CheckPayYn();
  // debugger;
  console.log("■ ■ ■ ■  f_changeRow2 END - newRow ( " + row + " )  ■ ■ ■ ■");
  return true;
};

//-------------------------------------------------------------------------
// 행삭제,취소시 체크
//-------------------------------------------------------------------------
scwin.f_CheckRow = async function (flag) {
  console.log("=== f_CheckRow (행삭제,취소시 체크)");
  scwin.state = "Y";
  scwin.delflag = "Y";

  // 행삭제시
  if (flag == "DEL") {
    for (j = ds_prov.getTotalRow(); j >= 0; j--) {
      if (ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "rltSeq") == ds_prov.getCellData(j, "rltSeq")) {
        ds_prov.deleteRow(j);
      }
    }
    // 가지급금정리내역
    for (j = ds_provHeader.getTotalRow(); j >= 9; j--) {
      if (ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "rltSeq") == ds_provHeader.getCellData(j, "rltSeq")) {
        ds_provHeader.deleteRow(j);
      }
    }
    // 취소시
  } else {
    for (j = ds_prov.getTotalRow(); j >= 0; j--) {
      if (ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "rltSeq") == ds_prov.getCellData(j, "rltSeq")) {
        // ds_prov.Undo(j);
        $c.data.undoRow($p, ds_prov, "Y");
      }
    }
    // 가지급금정리내역
    for (j = ds_provHeader.getTotalRow(); j >= 0; j--) {
      if (ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "rltSeq") == ds_provHeader.getCellData(j, "rltSeq")) {
        // ds_provHeader.Undo(j);
        $c.data.undoRow($p, ds_provHeader, "Y");
      }
    }
  }
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = async function () {
  console.log("=== f_DeleteRow (행삭제)");
  scwin.state = "Y";
  scwin.delflag = "Y";
  await scwin.f_CheckRow("DEL");

  // ds_slipcontents.DeleteMarked();                 // 전체선택취소

  // ds_slipcontents.setRowPosition ( ds_slipcontents.getTotalRow()-1 );

  let row = ds_slipcontents.getRowPosition();
  $c.data.deleteRow($p, ds_slipcontents);
  console.log("  === f_DeleteRow - $c.data.deleteRow (행삭제후)");

  // 1건 이상이면 작성일자,발행부서 비활성
  scwin.f_EnableYn(ds_slipcontents.getTotalRow()); // 전표내역
  gr_slipcontents.setFocusedCell(row - 1, 0, false); // 지운 row 의 바로 위
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_CancelRow = async function () {
  console.log("=== f_CancelRow (행취소)");
  scwin.state = "Y";
  scwin.delflag = "Y";

  // ds_slipcontents.UndoMarked();               // 선택취소

  $c.data.undoRow($p, ds_slipcontents, "Y");

  // 1건 이상이면 작성일자,발행부서 비활성
  scwin.f_EnableYn(ds_slipcontents.getTotalRow()); // 전표내역
};

//-------------------------------------------------------------------------
// 1건 이상이면 작성일자,발행부서 비활성
//
// 최상단 조회조건라인(작성일자, 발행부서) 항목들을,
// 전표입력 이력이 2개이상 있으면, 비활성화하고,
// 전표입력이력이 없으면, 활성화 한다.
//
//  전표복사 후에는 작성일자, 발행부서 활성
//  행을 추가하거나 삭제하면 해당 함수가 적용 (행복사는 적용안됨)
//
//-------------------------------------------------------------------------
scwin.f_EnableYn = function (str) {
  if (str == 1) {
    // 작성일자, 발행부서코드, 발행부서명, 발행부서팝업이미지 활성화
    $c.gus.cfEnableObjects($p, [ica_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm, btn_slipAcctDeptCd]);
    console.log("  ==--== 활성 : 작성일자, 발행부서코드, 발행부서명, 발행부서 돋보기");
  } else {
    // 작성일자, 발행부서코드, 발행부서명, 발행부서팝업이미지 비활성화
    $c.gus.cfDisableObjects($p, [ica_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm, btn_slipAcctDeptCd]);
    console.log("  ==--== 비활성 : 작성일자, 발행부서코드, 발행부서명, 발행부서 돋보기");
  }
};

//-------------------------------------------------------------------------
// 행추가체크
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  console.log("▼▼▼▼  f_AddRow (행추가이전 체크)");

  // KYU_TEST : 2026-02-23 최초 추가는 곧바로 f_Add -- 2026-03-01 삭제
  // if ( gr_slipcontents.getRowCount() == 0 ) {
  // 	let rtn4 = await scwin.f_Add();           // 행추가
  //     if ( !rtn4 ) {
  //         return false;
  //     }
  //     else {
  //         return true;
  //     }
  // }

  // 작성일자, 발행부서 데이터체크
  // if (!cfValidate([ed_slipDt,ed_slipAcctDeptCd]))
  let rtn1 = await $c.gus.cfValidate($p, [ica_slipDt, ed_slipAcctDeptCd]);
  if (!rtn1) {
    console.log("-- -- cfValidate([ica_slipDt,ed_slipAcctDeptCd]) error");
    return;
  }

  // if(!f_HiddenCheck(ed_slipAcctDeptCd,"발행부서"))   // 히든값체크
  let rtn2 = await scwin.f_HiddenCheck(ed_slipAcctDeptCd, "발행부서"); // 히든값체크
  if (!rtn2) {
    console.log("-- -- f_HiddenCheck 발행부서 error");
    return;
  }
  if (scwin.state != "Y") {
    // if ( f_Validation()!= true)
    let rtn3 = await scwin.f_Validation();
    if (!rtn3) {
      console.log("-- -- f_Validation error");
      return;
    }
  }

  // KYU_NEW : 2026-05-08 - scwin.checkExchRt > 0  조건 추가 - 전표복사로 불러온 row 에서 행추가/행복사 시 메시지 발생 방지
  // if( lc_crcCd.BindColVal != '<%=ACConstants.KOREA_WON%>' && checkMain == "0" ){
  if (lc_crcCd.getValue() != ACConstants.KOREA_WON && scwin.checkMain == "0" && scwin.checkExchRt > 0) {
    var changeExchRt = Number(ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "exchRt"));
    console.log(" 행추가이전 체크 - scwin.checkExchRt [" + scwin.checkExchRt + "]  changeExchRt [" + changeExchRt + "]  checkMain [" + scwin.checkMain + "]");
    if (changeExchRt < scwin.checkExchRt * 0.9 || changeExchRt > scwin.checkExchRt * 1.1) {
      await $c.win.alert($p, '통화코드 선택시 환율 금액 : ' + scwin.checkExchRt + '원' + '\n' + '환율의 90%  가 되는 금액  : ' + Math.round(scwin.checkExchRt * 0.9 * 100) / 100.00 + '원' + '\n' + '환율의 110% 가 되는 금액  : ' + Math.round(scwin.checkExchRt * 1.1 * 100) / 100.00 + '원' + '\n' + '\n' + ds_slipcontents.getRowPosition() + "번째행에 입력된 환율은 기준 환율의 " + '\n' + "90% ~ 110% 사이의 값 이어야 합니다.");
      return;
    }
  }

  // 예산체크
  if (ds_slipcontents.getTotalRow() > 0 && scwin.isSubCompany != true) {
    // 전표내역데이터셋이 하나이상이고, 자회사이면
    let rtn3 = await scwin.f_BudgetCheck(); // 예산체크 TR(tr_budgetRt)이후, 결과가 정상이면 tr_budgetRt.OnSuccess()이벤트로, 행추가한다.
    if (!rtn3) return false;
  } else {
    let rtn4 = await scwin.f_Add(); // 행추가
    if (!rtn4) return false;
  }
  console.log("▼▼▼▼  f_AddRow (행추가이전 체크)  END   ▼▼▼▼");
  return true;
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_Add = async function () {
  console.log("--- === --- f_Add (행추가)  [" + ds_slipcontents.getRowPosition() + "] =============================");
  scwin.state = "N";
  scwin.delflag = "N";
  var irltSeq = 0; // 전표커서

  // 전표의현재 갯수 만큼 루프를 돌리고,
  for (var i = 0; i < ds_slipcontents.getTotalRow(); i++) {
    // 가우스 SysStatus - 0: Normal, 1: Insert, 2: Delete, 3: Update, 4: Logical
    // getRowStatus - rowIndex 행의 상태코드를 문자로 반환 (R:초기상태, U:갱신, C:삽입, D:삭제, V:삽입 후 삭제)
    // getRowStatusValue - rowIndex 행의 상태코드를 숫자로 반환 (0:초기상태, 1:갱신, 2:삽입, 3:삭제, 4:삽입 후 삭제)

    // 전표가 수정이력이 있고,
    // if( ( ds_slipcontents.SysStatus(i) > 0 ) ){
    if (ds_slipcontents.getRowStatusValue(i) > 0) {
      // 해당전표의 전표순번(rltSeq)이 null이거나 값이 없으면,
      if (ds_slipcontents.getCellData(i, "rltSeq") == null || ds_slipcontents.getCellData(i, "rltSeq") == "") {
        ds_slipcontents.setCellData(i, "rltSeq", 0); // 전표값에 0을 입력
      }
      // 해당전표의 전표순번이 전표커서(0) 보다 크면
      if (ds_slipcontents.getCellData(i, "rltSeq") > irltSeq) {
        // 전표커서에 현재 전표의 전표순번을 입력한다.
        irltSeq = ds_slipcontents.getCellData(i, "rltSeq");
      }
    }
  }
  console.log("  111 irltSeq [" + irltSeq + "]");

  //******************************************************************************
  // 채권,채무,선수금 정리건인경우 금액체크
  // 2013.10.30 hurrah015
  // 1. 채권, 선수금정리인 경우	- 금액이 잔액보다 크면 에러
  // 2. 채무저리인 경우        	- 금액이 잔액과 같이 않으면 에러
  // 3. stlOutbrNo값은 팝업에서 내려받는 값으로 이값이 들어있다면 정리대상건이라고 본다.
  // 4. 외화이면 외화잔액, 원화이면 원화잔액으로 비교한다.
  //******************************************************************************
  var settleAmt = ed_amt.getValue();
  var settleAmtFcrc = ed_amtFcrc.getValue();
  var ramt = ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "stlRamt");
  var ramtFcrc = ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "stlRamtFcrc");
  if (ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "stlOutbrNo") != "") {
    // 정산발생번호
    // 외화인경우
    if (lc_crcCd.getValue() != ACConstants.KOREA_WON) {
      if (scwin.txt_method == "채권정리") {
        // 정리방법표시 - 지급수단
        // 정리할 채권이 -금액인경우가 존재하므로 각각 달리체크
        if (parseFloat(ramtFcrc) >= 0) {
          if (parseFloat(settleAmtFcrc) > parseFloat(ramtFcrc)) {
            await $c.win.alert($p, scwin.txt_method + "할 외화금액[" + scwin.f_formatComma(settleAmtFcrc) + "]이 잔액(외화)[" + scwin.f_formatComma(ramtFcrc) + "]보다 큽니다.");
            return false;
          }
        } else {
          // 잔액이 -금액인경우를 위한 처리
          if (parseFloat(settleAmtFcrc) >= 0) {
            await $c.win.alert($p, scwin.txt_method + "할 외화금액[" + scwin.f_formatComma(settleAmtFcrc) + "]이 잔액(외화)[" + scwin.f_formatComma(ramtFcrc) + "]보다 큽니다.");
            return false;
          } else {
            if (Math.abs(parseFloat(settleAmtFcrc)) > Math.abs(parseFloat(ramtFcrc))) {
              await $c.win.alert($p, scwin.txt_method + "할 외화금액[" + scwin.f_formatComma(settleAmtFcrc) + "]이 잔액(외화)[" + scwin.f_formatComma(ramtFcrc) + "]의 정리범위를 벗어났습니다.");
              return false;
            }
          }
        }
      }
      if (scwin.txt_method == "선수금정리" && parseFloat(settleAmtFcrc) > parseFloat(ramtFcrc)) {
        await $c.win.alert($p, scwin.txt_method + "할 외화금액[" + scwin.f_formatComma(settleAmtFcrc) + "]이 잔액(외화)[" + scwin.f_formatComma(ramtFcrc) + "]보다 큽니다.");
        return false;
      }
      if (scwintxt_method == "채무정리" && parseFloat(settleAmtFcrc) != parseFloat(ramtFcrc)) {
        await $c.win.alert($p, scwin.txt_method + "할 외화금액[" + f_formatComma(settleAmtFcrc) + "]이 잔액(외화)[" + f_formatComma(ramtFcrc) + "]과 같지 않습니다.");
        return false;
      }
      // 원화인경우
    } else {
      if (scwin.txt_method == "채권정리") {
        // 정리할 채권의  -잔액인 경우가 존재하므로 각각 달리체크
        if (parseFloat(ramt) >= 0) {
          if (parseFloat(settleAmt) > parseFloat(ramt)) {
            await $c.win.alert($p, scwin.txt_method + "할 금액[" + scwin.f_formatComma(settleAmt) + "]이 잔액[" + scwin.f_formatComma(ramt) + "]보다 큽니다.");
            return false;
          }
        } else {
          // 잔액이 -금액인경우를 위한 처리
          if (parseFloat(settleAmt) >= 0) {
            await $c.win.alert($p, scwin.txt_method + "할 금액[" + scwin.f_formatComma(settleAmt) + "]이 잔액[" + scwin.f_formatComma(ramt) + "]보다 큽니다.");
            return false;
          } else {
            if (Math.abs(parseFloat(settleAmt)) > Math.abs(parseFloat(ramt))) {
              await $c.win.alert($p, scwin.txt_method + "할 금액[" + scwin.f_formatComma(settleAmt) + "]이 잔액[" + scwin.f_formatComma(ramt) + "]의 정리범위를 벗어났습니다.");
              return false;
            }
          }
        }
      }
      if (scwin.txt_method == "선수금정리" && parseFloat(settleAmt) > parseFloat(ramt)) {
        await $c.win.alert($p, txt_method + "할 금액[" + scwin.f_formatComma(settleAmt) + "]이 잔액[" + scwin.f_formatComma(ramt) + "]보다 큽니다.");
        return false;
      }
      if (scwin.txt_method == "채무정리" && parseFloat(settleAmt) != parseFloat(ramt)) {
        await $c.win.alert($p, scwin.txt_method + "할 금액[" + scwin.f_formatComma(settleAmt) + "]이 잔액[" + scwin.f_formatComma(ramt) + "]과 같지 않습니다.");
        return false;
      }
    }
  }
  console.log("  222 채권,채무,선수금 정리건인경우 금액체크  이후");

  // 전체전표의 갯수가 0면 생성된 전표가 없으면
  if (ds_slipcontents.getTotalRow() <= 0) {
    // 신규전표행을 삽입한다.
    // ds_slipcontents.InsertRow(1);
    ds_slipcontents.insertRow();
    ds_slipcontents.setRowPosition(0);
    gr_slipcontents.setFocusedCell(0, "acctCd", true);
    // 전표가 있으면
  } else {
    // 현재전표위치에서 +1을 하여 신규전표를 삽입한다.  AddRow()로 대체 가능 할꺼 같은데.
    // ds_slipcontents.InsertRow(ds_slipcontents.RowPosition+1);

    ds_slipcontents.insertRow();
    ds_slipcontents.setRowPosition(ds_slipcontents.getTotalRow() - 1);
    // console.log("  222-1 ds_slipcontents.getTotalRow -1 ["+ds_slipcontents.getTotalRow()-1+"]");
    gr_slipcontents.setFocusedCell(ds_slipcontents.getRowPosition(), "acctCd", true);
    // console.log("  222-2 ds_slipcontents.setFocusedCell  ["+ds_slipcontents.getRowPosition()+"]");
  }
  // irltSeq값이 잘못입력되면 0으로 대체
  if (irltSeq == null || irltSeq == "") {
    irltSeq = 0;
  }

  // 신규로 삽입한 행(현재커서가위치한곳)에 전표순번(현재순번+1)를 입력한다.
  console.log("  333 -- -- 신규로 삽입한 행(현재커서가위치한곳)에 전표순번(현재순번+1)를 입력   rltSeq : " + parseInt(irltSeq) + 1);
  ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "rltSeq", parseInt(irltSeq) + 1 + "");

  // 행추가후 개별 에디트속성/값을 초기화 처리
  lc_crcCd.setValue(ACConstants.KOREA_WON); // 통화코드
  // lc_drcrClsCd.index   = 1;                         // 차대코드
  // lc_adjmClsCd.index   = 0;                         // 정산방법
  // lc_evidClsCd.index   = 0;                         // 증빙종류
  // lc_deductClsCd.index = 0;                         // 공제구분

  lc_drcrClsCd.setSelectedIndex(1); // 차대코드 : 차변
  lc_adjmClsCd.setValue(-1); // 정산방법 : 없음
  lc_evidClsCd.setSelectedIndex(0); // 증빙종류 : 없음
  lc_deductClsCd.setSelectedIndex(0); // 공제구분 : 공제

  // chb_payProcYn.checked=false;                      // 지급처리여부
  // cbx_payProcYn.checkAll(false);                    // 지급처리여부 해제

  cbx_payProcYn.setValue(0);
  ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "payProcYn", 0);
  console.log("  444 --==-- 지급체크박스 해제  ????");

  // 1건 이상이면 작성일자,발행부서 비활성
  scwin.f_EnableYn(ds_slipcontents.getTotalRow()); // 조회조건 활성화/비활성화 처리

  $c.gus.cfEnableObjects($p, [btn_acctDeptCd, btn_acctCd]); // 귀속부서, 계정 검색이미지 활성화 처리
  console.log("  ==--== 활성 (귀속부서돋보기,계정돋보기)");
  $c.gus.cfEnableKeyData($p); // Key와 Data 형태의 입력필드를 모두 enable(editable) 상태로 변경한다.
  console.log("  ==--== Key와 Data 형태의 입력필드를 모두 enable(editable) 상태로 변경");
  // debugger;
  $c.gus.cfEnableBtnOnly($p, [$c.gus.getctrlBtn($p, 'bSave')]); // 발행버튼 활성화
  console.log("  ==--== 활성 (발행버튼(bSave))");
  $c.gus.cfEnableObj($p, ed_amtFcrc, false); // 외화금액 활성화
  console.log("  ==--== f_Add (행추가) - 활성 (외화금액)");
  $c.gus.cfEnableObj($p, ed_adjustExchRt, false); //원화일때 통화 환율 비활성화
  console.log("  ==--== 비활성 (환율)");

  //-------------------------------------------------------------------------
  //  계정조회시화면셋팅
  //  r_mgntCd     - 관리번호
  //  r_clntMgntYn - 거래처여부
  //  r_termMgntYn - 기간관리여부
  //  r_empMgntYn  - 사원관리여부
  //  r_mgntNm     - 관리사원명
  //  r_dtMgntYn   - 일자관리여부

  //  r_payAcctCd  - 지급계정코드
  //-------------------------------------------------------------------------
  // console.log("  555 f_AcctCd (계정조회시화면셋팅) : 관리번호 '', 거래처 0, 기간 0, 사원 0, 사원명 '', 일자 0");

  // KYU_ISSUE : 일단 삭제 - f_changeRow2 에서 함  @@
  // f_AcctCd('',0,0,0,'',0,'');
  // let rtn = await scwin.f_AcctCd('',0,0,0,'',0,'');

  // console.log("  555-1 f_AcctCd (계정조회시화면셋팅) 실행후..............................");

  await scwin.f_ReadOnly();

  // console.log("  666 f_ReadOnly 실행후");

  ed_crn.setValue(""); // 사업자번호 초기화
  ed_crnNm.setValue(""); // 사업자명   초기화
  scwin.ed_crn_hidVal = "";
  ed_vatDeclarAcctDeptCd.setValue(""); // 부가세관리부서코드 초기화
  ed_vatDeclarAcctDeptNm.setValue(""); // 부가세관리부서명	  초기화
  scwin.ed_vatDeclarAcctDeptCd_hidVal = "";
  // debugger;
  // cfDisableObjects([txt_acctNm,txt_acctDeptNm,txt_mgntClntNm,txt_mgntEmpNm,chb_payProcYn,chb_recvProcYn,ed_reqDt,lc_reqPayMthdCd,ed_draftDdCntCd,ed_taxinvcDt,img_reqDt,img_taxinvcDt,ed_paymentPrd,img_paymentPrd]);
  $c.gus.cfDisableObjects($p, [ed_acctNm, ed_acctDeptNm, ed_mgntClntNm, ed_mgntEmpNm, cbx_payProcYn, cbx_recvProcYn, ica_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd, ica_taxinvcDt, ica_paymentPrd]);
  console.log("  f_Add ==--== 비활성 (계정명,귀속부서명,거래처명,사원명,지급체크박스,채권체크박스, 지급일자, 지급방법,어음일수,세금계산서일자,지로납부기한");

  // cfDisableObjects([lc_evidClsCd, lc_deductClsCd, lc_zeroTaxClsCd, txt_crnNm, txt_vatDeclarAcctDeptNm, ed_spplyAmt, ed_vatAmt]);
  $c.gus.cfDisableObjects($p, [lc_evidClsCd, lc_deductClsCd, lc_zeroTaxClsCd, ed_crnNm, ed_vatDeclarAcctDeptNm, ed_spplyAmt, ed_vatAmt]);
  console.log("  f_Add ==--== 비활성 (증빙구분,공제구분,영세율구분, 사업자명, 부과세관리부서명,공급금액,부가세금액)");
  // debugger;
  // cfSetIMEModeActiveObjects([txt_summary]);     // 한글입력만 가능하게 IME 모드설정 - 지원안함
  // KYU_NEW
  $c.gus.cfEnableObjects($p, [ed_summary]);
  // console.log("  ==--== cfSetIMEModeActiveObjects - 활성 (적요)");

  lc_reqPayMthdCd.setValue(""); // 지급방법 초기화
  console.log("   777  ▶◀ 지급방법 초기화");
  ed_acctDeptCd.focus(); // 귀속부서코드에 포커싱

  // 상대계정코드 클리어 및 비활성
  ed_opntAcctCd.setValue("");
  ed_opntAcctNm.setValue("");
  scwin.ed_opntAcctCd_hidVal = "";
  // cfDisableObjects([ed_opntAcctCd, txt_opntAcctNm, img_opntAcctCd]);
  $c.gus.cfDisableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
  console.log("  ==--== 비활성 (상대계정,상대계정명,상대계정돋보기)");

  // 2013.10.30 hurrah015
  if ($c.gus.cfIsNull($p, ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "stlOutbrNo"))) {
    // 정산발생번호
    ed_refNo.setValue("");
    scwin.txt_method = "";
    scwin.txt_settleClsCd = "0";
    scwin.txt_acctClsCd = "";
    console.log("   --- --- --- ▶  stlOutbrNo (정산발생번호) null -->  계정구분 널처리 txt_acctClsCd [" + scwin.txt_acctClsCd + "]");

    // KYU_NEW : 바인딩 처리
    var row = ds_slipcontents.getRowPosition();
    ds_slipcontents.setCellData(row, "settleClsCd", scwin.txt_settleClsCd);
    ds_slipcontents.setCellData(row, "acctClsCd", scwin.txt_acctClsCd);
  }

  // 상위부서코드가 00130:렌터카사업팀이면,
  // if (scwin.vUpperAcctDeptCd == "00130"){
  //     // 귀속부서코드,    귀속부서명,    귀속부서검색팝업이미지 비활성화
  // 	cfDisableObjects([ed_acctDeptCd,txt_acctDeptNm,img_acctDeptCd])

  //     // 매입항목코드,  지점코드,   매입항목명,      지점명,      매입항목코드팝업이미지, 지점명팝업이미지 활성화
  // 	cfEnableObjects([ed_pchsItemCd,ed_branchCd,txt_pchsItemNm,txt_branchNm,img_pchsItemCd,img_branchCd])
  // } else {
  // 귀속부서코드,    귀속부서명,    귀속부서검색팝업이미지 활성화
  // cfEnableObjects([ed_acctDeptCd,txt_acctDeptNm,img_acctDeptCd]);
  $c.gus.cfEnableObjects($p, [ed_acctDeptCd, ed_acctDeptNm, btn_acctDeptCd]);
  console.log("  ==--== 활성 (귀속부서,귀속부서명,귀속부서돋보기)");

  // 매입항목코드,  지점코드,   매입항목명,      지점명,      매입항목코드팝업이미지, 지점명팝업이미지 비활성화
  // cfDisableObjects([ed_pchsItemCd,ed_branchCd,txt_pchsItemNm,txt_branchNm,img_pchsItemCd,img_branchCd])
  // }

  // 00130 (렌터카사업) 로직 제외
  // f_SetGridFormat();

  // KYU_NEW : 히든 세팅
  await scwin.f_setHidVal();
  scwin.addRowFlag = true; // 행추가시 정산방법 활성화용

  return true;
}; // end of f_add

//-------------------------------------------------------------------------
// 행복사
//-------------------------------------------------------------------------
scwin.f_CopyRow = async function () {
  console.log("----- f_CopyRow (행복사) ----------");

  // if (!cfValidate([ed_slipDt,ed_slipAcctDeptCd])) return ;
  let rtn1 = await $c.gus.cfValidate($p, [ica_slipDt, ed_slipAcctDeptCd]);
  if (!rtn1) return;
  console.log("  1. cfValidate 통과");
  if (ds_slipcontents.getTotalRow() > 0) {
    // if ( f_Validation()!=true) return;
    let rtn2 = await scwin.f_Validation();
    if (!rtn2) return;
  }
  console.log("  2. f_Validation 통과");
  scwin.rowCopyYn = 1; // 행복사
  // 예산체크
  if (ds_slipcontents.getTotalRow() > 0 && scwin.isSubCompany != true) {
    let rtn3 = await scwin.f_BudgetCheck();
    if (rtn3) return false;
    console.log("  3. f_BudgetCheck 통과");
  } else {
    // ds_slipcontents.ImportData(ds_slipcontents.ExportData(ds_slipcontents.RowPosition,1,true));

    // ds_slipcontents.insertRow();
    // ds_slipcontents.setRowPosition(ds_slipcontents.getTotalRow());
    // ds_slipcontents.setRowData( ds_slipcontents.getTotalRow(), ds_slipcontents.getRowData(row) );

    var row = ds_slipcontents.getRowPosition();
    var newRow = ds_slipcontents.getRowCount();
    console.log("  현재 row [" + row + "]");
    console.log("    추가 row [" + newRow + "]");
    ds_slipcontents.setRowJSON(newRow, ds_slipcontents.getRowJSON(ds_slipcontents.getRowPosition()));
    ds_slipcontents.setRowPosition(newRow);
    gr_slipcontents.setFocusedCell(newRow, 1, false);
  }

  //2^미지급금,3^전도금,4^가지급금,5^선급금,6^법인카드
  if (lc_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_SUSPAY // 정산방법(가지급금)  4
  || lc_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_PREPAY)
    // 정산방법(선급금)    5
    {
      $c.gus.cfEnableObjects($p, [btn_adjmClsCd]);
      console.log("  행복사 ==--== 활성 ( 정산방법돋보기 )");
    }

  // ds_slipcontents.RowPosition = ds_slipcontents.CountRow;
  ds_slipcontents.setRowPosition(ds_slipcontents.getTotalRow() - 1);
};

//-------------------------------------------------------------------------
// 예산체크
//-------------------------------------------------------------------------
scwin.f_BudgetCheck = async function () {
  console.log("===== f_BudgetCheck (예산실적조회) - 성공시 행추가,행복사");

  // ds_budgetCheck.UseChangeInfo = false;
  // tr_budgetRt.Post();

  ds_budgetCheck.setEmptyValue();
  ds_budgetCheck.set("budgetYm", ica_slipDt.getValue());
  ds_budgetCheck.set("acctDeptCd", ed_acctDeptCd.getValue());
  ds_budgetCheck.set("acctCd", ed_acctCd.getValue());
  ds_budgetCheck.set("budgetRsltsAmt", ed_amt.getValue());
  var dcJSON = ds_budgetCheck.getJSON();
  console.log("  *** ds_budgetCheck : " + JSON.stringify(dcJSON));
  let e = await $c.sbm.execute($p, sbm_budgetRt);

  // console.log("▷ sbm_budgetRt_submitdone (예산실적조회 submitdone)");

  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // language=JavaScript for=tr_budgetRt event=OnSuccess()>
  // alert(" tr_budgetRt OnSuccess() : "+row);

  // if(ds_budget.NameValue(1,"cntlUnitClsCd")=="T"){

  if (ds_budget.getCellData(0, "cntlUnitClsCd") == "T") {
    if (scwin.rowCopyYn == 0) {
      // 행복사여부
      console.log("  --- 예산체크 - 행추가 : f_Add  (cntlUnitClsCd == T)");
      await scwin.f_Add();
    } else {
      console.log("  --- 예산체크 - 행복사 : f_Add  (cntlUnitClsCd != T)");

      //ds_slipcontents.ImportData(ds_slipcontents.ExportData(ds_slipcontents.RowPosition,1,true));
      // ds_slipcontents.setJSON( ds_slipcontents.getRowJSON( ds_slipcontents.getRowPosition() ), true);  // append

      var row = ds_slipcontents.getRowPosition();
      var newRow = ds_slipcontents.getRowCount();
      console.log("  현재 row [" + row + "]");
      console.log("    추가 row [" + newRow + "]");
      ds_slipcontents.setRowJSON(newRow, ds_slipcontents.getRowJSON(ds_slipcontents.getRowPosition()));
      ds_slipcontents.setRowPosition(newRow);
      gr_slipcontents.setFocusedCell(newRow, 0, false);
    }
  } else {
    await $c.gus.cfAlertMsg($p, "예산잔액이 부족합니다. 예산잔액을 확인하시기 바랍니다." + "\n부서:" + ds_budget.getCellData(0, "acctDeptNm") + "\n계정:" + ds_budget.getCellData(0, "acctCd") + "\n남은예산금액:" + ds_budget.getCellData(0, "budgetRsltsAmt") + "\n사용요청금액:" + ds_budget.getCellData(0, "budgetRsltsSettAmt"));
  }

  // 행복사 여부
  scwin.rowCopyYn = 0;
  console.log("===== f_BudgetCheck (예산실적조회)  END");
};

// @@ ====== 체크 ============================================================================== //

//-------------------------------------------------------------------------
//  체크 (f_Validation)  @@ @
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  console.log("===== f_Validation ===== ▶▶▶▶   row [" + ds_slipcontents.getRowPosition() + "]");
  if (ds_slipcontents.getRowPosition() == null) {
    console.log("  ds_slipcontents.getRowPosition() == null SKIP ▶▶▶▶");
    return;
  }

  // KYU_NEW : 메모리 직접 비교시 사용
  var row = ds_slipcontents.getRowPosition();

  // 2014 07 14 이경희 : 부가세계정 0원전표 허용 - 금액 체크안함, 세금계산서일자 체크
  if (ed_acctCd.getValue() == "1111210" && lc_drcrClsCd.getValue() == "D" || ed_acctCd.getValue() == "2100710" && lc_drcrClsCd.getValue() == "C") {
    console.log("   cfValidate - 부가세계정 0원전표 허용  [" + lc_drcrClsCd.getValue() + "][" + ed_acctCd.getValue() + "]  amt [" + ed_amt.getValue() + "] isSlipCopy [" + scwin.isSlipCopy + "]");

    // KYU_NEW : 금액 검증 - 전표복사시 오동작
    if (ed_amt.getValue() == 0 && scwin.isSlipCopy == true) {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_013, "금액", "1"));
      ed_amt.focus();
      return false;
    }

    // if (!cfValidate([lc_drcrClsCd        // 차대구분
    let rtn1 = await $c.gus.cfValidate($p, [lc_drcrClsCd // 차대구분
    , lc_crcCd // 통화코드
    , ed_adjustExchRt // 환율
    , ed_mgntNo // 관리번호
    , ica_slipDt // 작성일자
    , ed_slipAcctDeptCd // 발행부서
    , lc_drcrClsCd // 차대구분
    , ed_acctCd // 계정
    , ed_acctDeptCd // 귀속부서
    // ,ed_mgntClntNo       // 거래처번호
    , ica_mgntDt // 관리일자
    , ed_mgntTermStDt // 관리기간_시작
    , ed_mgntTermEndDt // 관리기간_종료
    , ed_mgntEmpNo // 사원번호
    , ed_summary // 적요
    , ed_amtFcrc // 외화금액
    , ica_taxinvcDt // 세금계산서일자  !!!
    ]);
    if (!rtn1) return false;
  } else
    // 금액 체크, 세금계산서일자 체크안함
    {
      console.log("   cfValidate - 부가세계정 0원전표 허용 아님  [" + lc_drcrClsCd.getValue() + "][" + ed_acctCd.getValue() + "]  amt [" + ed_amt.getValue() + "] isSlipCopy [" + scwin.isSlipCopy + "]");
      if (ed_amt.getValue() == 0) {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_033, "금액", 0));
        ed_amt.focus();
        return false;
      }

      // KYU_ISSUE : 외화인데 외화금액이 0 : ed_amtFcrc.getMandatory 를 사용해도 되나 시점 차이가 있어 일단 메모리 비교
      if (parseInt(ds_slipcontents.getCellData(row, "amtFcrc")) == 0 && ds_slipcontents.getCellData(row, "crcCd") != "KRW") {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_033, "금액", 0));
        ed_amt.focus();
        return false;
      }

      // if (!cfValidate([lc_drcrClsCd        // 차대구분
      let rtn2 = await $c.gus.cfValidate($p, [lc_drcrClsCd // 차대구분
      , lc_crcCd // 통화코드
      , ed_adjustExchRt // 환율
      , ed_mgntNo // 관리번호
      , ica_slipDt // 작성일자
      , ed_slipAcctDeptCd // 발행부서
      , lc_drcrClsCd // 차대구분
      , ed_amt // 금액  !!!!
      , ed_acctCd // 계정
      , ed_acctDeptCd // 귀속부서
      // ,ed_mgntClntNo       // 거래처번호
      // ,ica_mgntDt          // 관리일자
      // ,ed_mgntTermStDt     // 관리기간_시작
      // ,ed_mgntTermEndDt    // 관리기간_종료
      , ed_mgntEmpNo // 사원번호
      , ed_summary // 적요
      , ed_amtFcrc // 외화금액
      ]);
      if (!rtn2) return false;
    }

  // cfValidate 공통 검증 로직 - 0원 전표 여부 무관한 체크

  // KYU_NEW : 거래처 체크
  if ($c.gus.cfIsNull($p, ds_slipcontents.getCellData(row, "mgntClntNo")) && ds_slipcontents.getCellData(row, "clntMgntYn") == "1") {
    console.log("  ---- 거래처 체크 !!!!!  [" + ds_slipcontents.getCellData(row, "mgntClntNo") + "] clntMgntYn [" + ds_slipcontents.getCellData(row, "clntMgntYn") + "]");
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "거래처"));
    ed_mgntClntNo.focus();
    return false;
  }

  // KYU_NEW : 사원 체크
  if ($c.gus.cfIsNull($p, ds_slipcontents.getCellData(row, "mgntEmpNo")) && ds_slipcontents.getCellData(row, "empMgntYn") == "1") {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "사원번호"));
    ed_mgntEmpNo.focus();
    return false;
  }

  // 시작일<종료일 체크
  if (!$c.gus.cfIsAfterDate($p, ed_mgntTermStDt.getValue().trim(), ed_mgntTermEndDt.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_mgntTermStDt.focus();
    return false;
  }

  // 2026-05-11 : 계산서-111210 : 금액, 부가세 0 가능
  // 금액은 다음 문자가 올 수 없습니다. 0
  // if ( ed_amt.getValue() == 0) {

  //     // "%1은(는) 다음 문자가 올 수 없습니다.\n%2";
  //     await $c.win.alert($c.data.getMessage(MSG_CM_ERR_033, "금액", "0"));
  //     ed_amt.focus();
  //     return;
  // }

  // 적요
  if (ed_summary.getValue() == "") {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "적요"));
    ed_summary.focus();
    return false;
  }

  // 선급비용-일반 계정일때 상대계정 필수
  /*if (ds_slipcontents.NameValue(ds_slipcontents.RowPosition,"acctCd") == "1111110"){
  	if (ds_slipcontents.NameValue(ds_slipcontents.RowPosition,"opntAcctCd")  == ""   ||  ds_slipcontents.NameValue(ds_slipcontents.RowPosition,"opntAcctNm") == ""){
  		alert("선급비용-일반 계정 선택시 상대계정은 필수항목입니다.");
  		return false;
  	}
  }*/

  // 지급처리여부체크
  // if(chb_payProcYn.checked==true){
  if (cbx_payProcYn.getValue() == 1) {
    if (ica_reqDt.getValue().trim() != "" && lc_reqPayMthdCd.getValue().trim() == "") {
      await $c.gus.cfAlertMsg($p, "지급일자를 입력하면 지급방법은 필수 항목입니다.");
      lc_reqPayMthdCd.focus();
      return false;
    }
    if (lc_reqPayMthdCd.getValue() != scwin.GIRO) {
      if (ica_reqDt.getValue().trim() == "" && lc_reqPayMthdCd.getValue().trim() != "") {
        await $c.gus.cfAlertMsg($p, "지급방법을 입력하면 지급일자는 필수 항목입니다.");
        ica_reqDt.focus();
        return false;
      }
      if (ica_reqDt.getValue().trim() == "" && ica_taxinvcDt.getValue().trim() == "") {
        await $c.gus.cfAlertMsg($p, "지급일자를 입력하지 않으면 세금계산서 일자는 필수 항목입니다.");
        ica_taxinvcDt.focus();
        return false;
      }
    } else {
      if (ica_paymentPrd.getValue().trim() == "" && lc_reqPayMthdCd.getValue() == scwin.GIRO) {
        await $c.gus.cfAlertMsg($p, "지로 납부기한을 입력해 주십시오.");
        ica_paymentPrd.focus();
        return false;
      }
    }
    if (lc_reqPayMthdCd.getValue() == scwin.ELECTRONICDRAFT || lc_reqPayMthdCd.getValue() == scwin.DRAFTCHECK) {
      // if (!cfValidate([ed_draftDdCntCd]))
      // let rtn3 = await $c.gus.cfValidate([ed_draftDdCntCd]);
      // if ( !rtn3 ) {                
      //     console.log("-- -- cfValidate([ed_draftDdCntCd]) error");
      //     return false;
      // }

      // KYU_TEST : 어음일수 널일 때 체크 - dataset 에서 number 지정 불가
      if (parseInt(ed_draftDdCntCd.getValue()) < 1 || $c.gus.cfIsNull($p, ed_draftDdCntCd.getValue())) {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_013, "어음일수", "1"));
        console.log("-- -- cfValidate([ed_draftDdCntCd]) error");
        ed_draftDdCntCd.focus();
        return false;
      }
    }
  }

  // KYU_NEW : 히든 세팅
  await scwin.f_setHidVal();

  // KYU_TEST : await 처리해야 하는지
  let rtn1 = await scwin.f_HiddenCheck(ed_slipAcctDeptCd, "발행부서");
  if (!rtn1) return false;
  let rtn2 = await scwin.f_HiddenCheck(ed_acctCd, "계정");
  if (!rtn2) return false;
  let rtn3 = await scwin.f_HiddenCheck(ed_acctDeptCd, "귀속부서");
  if (!rtn3) return false;
  let rtn4 = await scwin.f_HiddenCheck(ed_mgntClntNo, "거래처");
  if (!rtn4) return false;
  let rtn5 = await scwin.f_HiddenCheck(ed_mgntEmpNo, "사원번호");
  if (!rtn5) return false;
  console.log("===== f_Validation  END ===== ▶▶▶▶   row [" + ds_slipcontents.getRowPosition() + "]");
  return true;
};

//-------------------------------------------------------------------------
// dataSet 체크 (f_ValidationDs)  @@ @
//   사유 : row change 할 때 포커스가 이동한 상태이므로 컴포넌트(getValue)로는 비교 불가
//          data set (oldRow) 로 직접 뽑아내어 비교함.
//   주의 : cfValidate 해체 (컴포넌트별로)
//          scwin.focusTarget 을 설정해서 기존 row 원복시 해당 컴포넌트로 포커싱
//-------------------------------------------------------------------------
scwin.f_ValidationDs = async function (row) {
  console.log("===== f_ValidationDs ===== ▶▶▶▶   row [" + row + "]");
  if (ds_slipcontents.getRowPosition() == null) {
    console.log("  ds_slipcontents.getRowPosition() == null  SKIP ▶▶▶▶");
    return;
  }

  // 2014 07 14 이경희 : 부가세계정 0원전표 허용 - 금액 체크안함, 세금계산서일자 체크
  if (ds_slipcontents.getCellData(row, "acctCd") == "1111210" && ds_slipcontents.getCellData(row, "drcrClsCd") == "D" || ds_slipcontents.getCellData(row, "acctCd") == "2100710" && ds_slipcontents.getCellData(row, "drcrClsCd") == "C") {
    console.log("   cfValidateDs - 부가세계정 0원전표 허용  [" + lc_drcrClsCd.getValue() + "][" + ed_acctCd.getValue() + "]  amt [" + ds_slipcontents.getCellData(row, "amt") + "] isSlipCopy [" + scwin.isSlipCopy + "]");

    // KYU_NEW : 금액 검증 - 전표복사시 오동작
    if (parseInt(ds_slipcontents.getCellData(row, "amt")) == 0 && scwin.isSlipCopy == true) {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_013, "금액", "1"));
      scwin.focusTarget = 1;
      // ed_amt.focus();
      return false;
    }

    // if (!cfValidate([lc_drcrClsCd        // 차대구분
    let rtn1 = await $c.gus.cfValidate($p, [lc_drcrClsCd // 차대구분
    , lc_crcCd // 통화코드
    , ed_adjustExchRt // 환율
    , ed_mgntNo // 관리번호
    , ica_slipDt // 작성일자
    , ed_slipAcctDeptCd // 발행부서
    , lc_drcrClsCd // 차대구분
    , ed_acctCd // 계정
    , ed_acctDeptCd // 귀속부서

    // ,ed_mgntClntNo       // 거래처번호
    // ,ica_mgntDt          // 관리일자
    // ,ed_mgntTermStDt     // 관리기간_시작
    // ,ed_mgntTermEndDt    // 관리기간_종료
    //,ed_mgntEmpNo        // 사원번호
    // ,ed_summary          // 적요
    , ed_amtFcrc // 외화금액
    , ica_taxinvcDt // 세금계산서일자  !!!
    ]);
    if (!rtn1) return false;
  } else
    // 금액 체크, 세금계산서일자 체크안함
    {
      console.log("   cfValidate - 부가세계정 0원전표 허용 아님  [" + lc_drcrClsCd.getValue() + "][" + ed_acctCd.getValue() + "]  amt [" + ds_slipcontents.getCellData(row, "amt") + "] isSlipCopy [" + scwin.isSlipCopy + "]");
      if (parseInt(ds_slipcontents.getCellData(row, "amt")) == 0) {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_033, "금액", 0));
        // ed_amt.focus();
        scwin.focusTarget = 1;
        return false;
      }

      // KYU_ISSUE : 외화인데 외화금액이 0 : ed_amtFcrc.getMandatory 를 사용해도 되나 시점 차이가 있어 일단 메모리 비교
      if (parseInt(ds_slipcontents.getCellData(row, "amtFcrc")) == 0 && ds_slipcontents.getCellData(row, "crcCd") != "KRW") {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_033, "금액", 0));
        // ed_amtFcrc.focus();
        scwin.focusTarget = 11;
        return false;
      }

      // if (!cfValidate([lc_drcrClsCd        // 차대구분
      let rtn2 = await $c.gus.cfValidate($p, [lc_drcrClsCd // 차대구분
      , lc_crcCd // 통화코드
      , ed_adjustExchRt // 환율
      , ed_mgntNo // 관리번호
      , ica_slipDt // 작성일자
      , ed_slipAcctDeptCd // 발행부서
      , lc_drcrClsCd // 차대구분
      , ed_amt // 금액
      , ed_acctCd // 계정
      , ed_acctDeptCd // 귀속부서
      // ,ed_mgntClntNo       // 거래처번호
      // ,ica_mgntDt          // 관리일자
      // ,ed_mgntTermStDt     // 관리기간_시작
      // ,ed_mgntTermEndDt    // 관리기간_종료
      //,ed_mgntEmpNo        // 사원번호
      // ,ed_summary          // 적요
      , ed_amtFcrc // 외화금액
      ]);
      if (!rtn2) return false;
    }

  // cfValidate 공통 검증 로직 - 0원 전표 여부 무관한 체크

  // KYU_NEW : 거래처 체크
  console.log("     row[" + row + "] 거래처여부 (clntMgntYn) [" + ds_slipcontents.getCellData(row, "clntMgntYn") + "]  거래처 [" + ds_slipcontents.getCellData(row, "mgntClntNo") + "]");
  if (ds_slipcontents.getCellData(row, "clntMgntYn") == "1" && ds_slipcontents.getCellData(row, "mgntClntNo") == "") {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "거래처"));

    // ed_mgntClntNo.focus();
    scwin.focusTarget = 9;
    return false;
  }

  // KYU_NEW : 사원 체크
  if (ds_slipcontents.getCellData(row, "empMgntYn") == "1" && ds_slipcontents.getCellData(row, "mgntEmpNo") == "") {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "사원번호"));

    // ed_mgntEmpNo.focus();
    scwin.focusTarget = 10;
    return false;
  }

  // 시작일<종료일 체크
  if (!$c.gus.cfIsAfterDate($p, ds_slipcontents.getCellData(row, "mgntTermStDt"), ds_slipcontents.getCellData(row, "mgntTermEndDt"))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);

    // ed_mgntTermStDt.focus();
    scwin.focusTarget = 2;
    return false;
  }

  // 2026-05-11 : 계산서-111210 : 금액, 부가세 0 가능
  // if ( parseInt(ds_slipcontents.getCellData(row, "amt")) == 0) {
  //     await $c.win.alert($c.data.getMessage(MSG_CM_ERR_033, "금액", "0"));

  //     // ed_amt.focus();
  //     scwin.focusTarget = 1;
  //     return false;
  // }

  // 적요
  if (ds_slipcontents.getCellData(row, "summary") == "") {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "적요"));

    // ed_summary.focus();
    scwin.focusTarget = 8;
    return false;
  }

  // 선급비용-일반 계정일때 상대계정 필수
  /*if (ds_slipcontents.NameValue(ds_slipcontents.RowPosition,"acctCd") == "1111110"){
  	if (ds_slipcontents.NameValue(ds_slipcontents.RowPosition,"opntAcctCd")  == ""   ||  ds_slipcontents.NameValue(ds_slipcontents.RowPosition,"opntAcctNm") == ""){
  		alert("선급비용-일반 계정 선택시 상대계정은 필수항목입니다.");
  		return false;
  	}
  }*/

  // 지급처리여부체크
  // if(chb_payProcYn.checked==true){
  if (ds_slipcontents.getCellData(row, "payProcYn") == 1) {
    if (ds_slipcontents.getCellData(row, "reqDt") != "" && ds_slipcontents.getCellData(row, "reqPayMthdCd") == "") {
      await $c.gus.cfAlertMsg($p, "지급일자를 입력하면 지급방법은 필수 항목입니다.");

      // lc_reqPayMthdCd.focus();
      scwin.focusTarget = 3;
      return false;
    }
    if (ds_slipcontents.getCellData(row, "reqPayMthdCd") != scwin.GIRO) {
      if (ds_slipcontents.getCellData(row, "reqDt") == "" && ds_slipcontents.getCellData(row, "reqPayMthdCd") != "") {
        await $c.gus.cfAlertMsg($p, "지급방법을 입력하면 지급일자는 필수 항목입니다.");

        // ica_reqDt.focus();
        scwin.focusTarget = 4;
        return false;
      }
      if (ds_slipcontents.getCellData(row, "reqDt") == "" && ds_slipcontents.getCellData(row, "taxinvcDt") == "") {
        await $c.gus.cfAlertMsg($p, "지급일자를 입력하지 않으면 세금계산서 일자는 필수 항목입니다.");

        // ica_taxinvcDt.focus();
        scwin.focusTarget = 5;
        return false;
      }
    } else {
      if (ds_slipcontents.getCellData(row, "paymentPrd") == "" && ds_slipcontents.getCellData(row, "reqPayMthdCd") == scwin.GIRO) {
        await $c.gus.cfAlertMsg($p, "지로 납부기한을 입력해 주십시오.");

        // ica_paymentPrd.focus();
        scwin.focusTarget = 6;
        return false;
      }
    }
    if (ds_slipcontents.getCellData(row, "reqPayMthdCd") == scwin.ELECTRONICDRAFT ||
    // 40 전자어음
    ds_slipcontents.getCellData(row, "reqPayMthdCd") == scwin.DRAFTCHECK)
      // 50 약속어음
      {
        // if (!cfValidate([ed_draftDdCntCd]))
        // let rtn3 = await $c.gus.cfValidate([ed_draftDdCntCd]);
        // if ( !rtn3 ) {
        //     console.log("-- -- cfValidate([ed_draftDdCntCd]) error");
        //     return false;
        // }

        // KYU_TEST : 어음일수 널일 때 체크 - dataset 에서 number 지정 불가
        if (parseInt(ds_slipcontents.getCellData(row, "draftDdCntCd")) < 1 || $c.gus.cfIsNull($p, ds_slipcontents.getCellData(row, "draftDdCntCd"))) {
          await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_013, "어음일수", "1"));

          // ed_draftDdCntCd.focus();
          scwin.focusTarget = 7;
          console.log("-- -- cfValidate([ed_draftDdCntCd]) error");
          return false;
        }
      }
  }

  // KYU_NEW : 히든 세팅
  // scwin.f_setHidVal();

  // KYU_TEST : await 처리해야 하는지
  // let rtn1 = await scwin.f_HiddenCheck(ed_slipAcctDeptCd,"발행부서");  if(!rtn1) return false;
  // let rtn2 = await scwin.f_HiddenCheck(ed_acctCd        ,"계정"    );  if(!rtn2) return false;
  // let rtn3 = await scwin.f_HiddenCheck(ed_acctDeptCd    ,"귀속부서");  if(!rtn3) return false;
  // let rtn4 = await scwin.f_HiddenCheck(ed_mgntClntNo    ,"거래처"  );  if(!rtn4) return false;
  // let rtn5 = await scwin.f_HiddenCheck(ed_mgntEmpNo     ,"사원번호");  if(!rtn5) return false;

  console.log("===== f_ValidationDs    END ===== ▶▶▶▶   row [" + row + "]");
  return true;
};

// @@ ====== 팝업 - 기타 ======================================================================= //

//-------------------------------------------------------------------------
// 전표복사  @@ @
//-------------------------------------------------------------------------
scwin.f_SlipCopy = async function (e) {
  console.log("=== f_SlipCopy (전표복사(분개내역) 팝업 로딩)");

  // var parObject = new Object();
  //		parObject.pCoCd = txtCoCd.value;
  //		parObject.pCoClsCd = txtCoClsCd.value;  

  //		var style = "center:yes; dialogwidth:420px; dialogheight:200px; scroll:no; resizable:no; status:yes;";
  //		var strPath = "fi_201_03_03p.jsp";
  //		var	returnValue = window.showModalDialog(strPath, parObject ,style ) ;

  // 전표복사(분개내역) 호출 
  let data = {
    pCoCd: scwin.txtCoCd,
    pCoClsCd: scwin.txtCoClsCd
  };
  let win_url = "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_03_03p.xml";
  let opts = {
    id: "smpPop",
    popupName: "전표복사(분개내역)",
    modal: true,
    type: "browserPopup",
    width: 600 // alter 크게 보기
    ,

    height: 400 // alter 크게 보기
    ,

    title: true
  };
  var rt = await $c.win.openPopup($p, win_url, opts, data);

  // 2026-03-04 : N/A 처리 (팝업 그냥 닫기)
  if (rt != null && rt != "N/A") {
    // 전표복사 플래그
    scwin.isSlipCopy = true;
    // f_fixAmt 실행금지

    console.log("  ==--== Key와 Data 형태의 입력필드를 모두 enable(editable) 상태로 변경");
    console.log("  --- --- 전표복사(분개내역) 후처리");
    console.log(" rt s0 [" + JSON.stringify(rt[0]) + "]");
    console.log(" rt s1 [" + JSON.stringify(rt[1]) + "]");

    // debugger;
    // 데이타셋 복사 (APPEND)
    // ds_slipcontents.ClearData();
    // ds_slipcontents.ImportData(returnValue.slipcopy);
    // dataSetDebug(ds_slipcontents, false);
    ds_slipcontents.setJSON([]);
    var Sts = rt[0];

    // 결과를 ds_slipcontents에 복사
    ds_slipcontents.setJSON(Sts, true);
    var dc = ds_slipcontents.getAllArray();
    // console.log("▶▶▶▶ (전표복사내역)  *** ds_slipcontents ["+ds_slipcontents.getTotalRow()+"]");
    console.log("▶▶▶▶ (전표복사내역)  *** ds_slipcontents [" + ds_slipcontents.getTotalRow() + "]  " + JSON.stringify(dc));

    // var drcrClsCd = ds_slipcontents.getCellData(0,"drcrClsCd" ) ;
    // console.log("   *** ds_slipcontents.drcrClsCd (0) [" + drcrClsCd +"]");

    // 복사종류 : 전표복사 리턴값
    scwin.copyKind = rt[1];
    console.log("   --- copyKind [" + scwin.copyKind + "]");
    $c.gus.cfEnableObjects($p, [ica_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm, btn_slipAcctDeptCd]);
    console.log("  ==--== 활성 (작성일자,발행부서코드,발행부서명,발행부서돋보기)");
    $c.gus.cfEnableKeyData($p);
    console.log("  ==--== 활성 (전체)");

    // KYU_NEW : 모든 돋보기
    $c.gus.cfEnableObjects($p, [btn_acctDeptCd
    //    ,btn_vatDeclarAcctDeptCd  // 부가세관리부서 돋보기
    , btn_acctCd, btn_crn, btn_branchCd, btn_pchsItemCd
    //    ,btn_mgntEmpNo  // 사원번호 돋보기
    , btn_mgntClntNo, btn_adjmClsCd, btn_resetSettleNo
    //    ,btn_setlMthd  // 지급채권번호 돋보기
    , btn_opntAcctCd, btn_reqClntNo]);
    console.log("  NEW ==--==  활성 (모든 돋보기 - 부가세관리부서,사원번호,지급채권번호 제외)");
    $c.gus.cfEnableBtnOnly($p, [$c.gus.getctrlBtn($p, 'bSave')]); // 발행버튼 활성화
    console.log("  ==--== 활성 (발행버튼(bSave))");

    // for ( i=0; i < ds_slipcontents.getTotalRow(); i++) {
    //     console.log("   222 ["+i+"]  amt ["+ds_slipcontents.getCellData(i,"amt")+ "]");
    // }
    // debugger;
    // 복사종류에 따른 금액 처리 (-복사 처리)
    // for( var idx = 1 ; idx <= ds_slipcontents.CountRow ; idx++){
    for (var idx = 0; idx < ds_slipcontents.getTotalRow(); idx++) {
      // if(returnValue.copyKind=="2"){
      if (scwin.copyKind == "2") {
        // - 복사
        // 금액 음수처리
        var temp_amt = parseInt(ds_slipcontents.getCellData(idx, "amt")) * -1;
        console.log("  금액 음수처리 [" + idx + "]  tmp_drcrClsCd [" + tmp_drcrClsCd + "] temp_amt [" + temp_amt + "]");
        ds_slipcontents.setCellData(idx, "amt", temp_amt);
      } else if (scwin.copyKind == "3") {
        // 역분개
        var temp_amt = parseInt(ds_slipcontents.getCellData(idx, "amt"));
        if (ds_slipcontents.getCellData(idx, "drcrClsCd") == "C") {
          console.log("  -- -- [" + idx + "]  역분개 처리 : C (대변) --> D (차변)  -----------------------------------");
          ds_slipcontents.setCellData(idx, "drcrClsCd", "D");
        } else {
          console.log("  -- -- [" + idx + "]  역분개 처리 : D (차변) --> C (대변)  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
          ds_slipcontents.setCellData(idx, "drcrClsCd", "C");
        }
      }
      // debugger;
      var tmp_drcrClsCd = ds_slipcontents.getCellData(idx, "drcrClsCd");
      var temp_amt = parseInt(ds_slipcontents.getCellData(idx, "amt"));
      if (tmp_drcrClsCd == "D") {
        ds_slipcontents.setCellData(idx, "Damt", temp_amt);
        ds_slipcontents.setCellData(idx, "Camt", 1);
        console.log("  #### #### [" + idx + "] 차변 지정 [" + tmp_drcrClsCd + "]  D (차) [" + ds_slipcontents.getCellData(idx, "Damt") + "]  C (대) [" + ds_slipcontents.getCellData(idx, "Camt") + "]");
      }
      if (tmp_drcrClsCd == "C") {
        ds_slipcontents.setCellData(idx, "Damt", 1);
        ds_slipcontents.setCellData(idx, "Camt", temp_amt);
        console.log("  %%%% %%%% [" + idx + "] 대변 지정 [" + tmp_drcrClsCd + "]  D (차) [" + ds_slipcontents.getCellData(idx, "Damt") + "]  C (대) [" + ds_slipcontents.getCellData(idx, "Camt") + "]");
      }
      // debugger;
      // KYU_NEW : 차변/대변금액 지정 : scwin.changeAmtByDrcrClsCd 복사

      // ds_settleAccount.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC"
      // 			     		+ "&queryId=retrieveSettleInfo&param1="+ds_slipcontents.NameString(idx,"acctCd")
      // 			     		+"&param2="+ds_slipcontents.NameString(idx,"drcrClsCd")
      // 				 		;
      // ds_settleAccount.Reset();

      // KYU_NEW 분기필요
      // 채권채무선수금 정리대상 계정여부 체크 : submitdone 를 따로 가져가야 하므로 sbm 분리
      // scwin.idx = idx;

      // let rtn1 = scwin.f_checkSettle2(ds_slipcontents.getCellData(idx,"acctCd"),  ds_slipcontents.getCellData(idx,"drcrClsCd"));
      // if ( !rtn1 ) return;

      //------------------------------------------------------------------------
      // 계정코드, 차/대변을 가지고 채권채무선수금 정리대상 계정인지 체크하는 함수
      //------------------------------------------------------------------------
      console.log("▷ 채권채무선수금 정리대상 체크 [" + idx + "] [" + ds_slipcontents.getCellData(idx, "acctCd") + "] [" + ds_slipcontents.getCellData(idx, "drcrClsCd") + "]  - sbm_checkSettle2 - ds_settleAccount");
      ds_commonCode.setEmptyValue();
      ds_settleAccount.setJSON([]);

      // ds_settleAccount.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC"
      // 			     		+ "&queryId=retrieveSettleInfo&param1="+ds_slipcontents.NameString(idx,"acctCd")
      // 			     		+"&param2="+ds_slipcontents.NameString(idx,"drcrClsCd")
      // 				 		;
      // ds_settleAccount.Reset();

      const strParam = {
        sysCd: "CommonEBC" // 시스템코드
        ,

        queryId: "retrieveSettleInfo" // 쿼리ID
        ,

        param1: ds_slipcontents.getCellData(idx, "acctCd"),
        param2: ds_slipcontents.getCellData(idx, "drcrClsCd")
      };

      //데이터셋에 정보설정
      ds_commonCode.setJSON(strParam);
      let e = await $c.sbm.execute($p, sbm_checkSettle2);

      // // KYU_NEW
      // return true;

      // scwin.sbm_checkSettle2_submitdone = function (e) {
      // console.log("▷ 정리대상 계정여부 체크");

      if (e.responseJSON.resultDataSet[0].Code != 0) return;
      if (e.responseJSON.GAUCE) {
        ds_settleAccount.setJSON(e.responseJSON.GAUCE);
      }

      // KYU_ORDER
      if (ds_settleAccount.getCellData(0, "col1") == "N/A" || typeof ds_settleAccount.getCellData(0, "col1") == "undefined" || $c.gus.cfIsNull($p, ds_settleAccount.getCellData(0, "col1"))) {
        ds_slipcontents.setCellData(idx, "settleClsCd", 0); //정리구분 셋팅
      } else {
        ds_slipcontents.setCellData(idx, "settleClsCd", ds_settleAccount.getCellData(0, "col3")); //정리구분 셋팅
      }
      ds_slipcontents.setCellData(idx, "refNo", "");
      ds_slipcontents.setCellData(idx, "clntCrn", ds_slipcontents.getCellData(idx, "crn"));

      // 2026-04-30 : 전표복사 건의 기존 환율 유지용
      ds_slipcontents.setCellData(idx, "rowOrigin", "C"); // row발생수단 (C:전표복사, E:엑셀업로드)
    } // end of for

    // 제일 처음 row 로 그리드 세팅
    // var rowCnt = ds_slipcontents.getTotalRow() - 1;
    // ds_slipcontents.setRowPosition(rowCnt);

    var rowCnt = 0;

    // 그리드 포커싱
    gr_slipcontents.setFocusedCell(rowCnt, "acctCd", false);
    console.log("   ▶▶▶▶ --------- 그리드 focusing (첫번째 row) --------------------------- ▶▶▶▶");

    // KYU_NEW : 활성/비활성 동기화 START
    console.log("  ------------------------------------ KYU_NEW : 활성/비활성 동기화 START ");

    // KYU_NEW : 추가 역바인딩
    scwin.f_dsTotxt();

    // 환율코드 변경 : 외화금액 등 세팅
    let rtnCrc = await scwin.lc_crcCd_onchange();

    // 계정 focus out : 지급체크박스, 채권체크박스 세팅
    let rtnAcct = await scwin.udc_acctCd_onblurCodeEvent();

    // let rnta = await scwin.f_AcctCd('',0,0,0,'',0,'');
    // let rtnc = await scwin.crcCdChange();
    // KYU_NEW : 활성/비활성 동기화 END
    console.log("  ------------------------------------ KYU_NEW : 계정 focus out 이후 -------------------");

    // KYU_TEST : 히든 세팅 - 세팅하면 팝업이 돌지않음 (코드와 히든 동일하면 리턴이거등요 !)
    // scwin.f_setHidVal();

    let rtnp = await scwin.f_PayYn(rowCnt);

    // KYU_NEW : 활성/비활성 동기화 END
    console.log("  ------------------------------------ KYU_NEW : 활성/비활성 동기화 END -------------------");

    // KYU_NEW : 함수로 분리해서 처리
    // let rtn1 = await scwin.f_changeRow1(); //  (row 변경하려 할 때)
    // if ( !rtn1 ) return false;

    let rtn2 = await scwin.f_changeRow2(rowCnt);
    if (!rtn2) {
      scwin.isSlipCopy = false;
      return false;
    }
    console.log("   ▶▷▶▷▶▷▶▷ f_changeRow2 이후  [" + ds_slipcontents.getRowPosition() + "] ---------------------------");
    await scwin.f_ReadOnly();

    // scwin.mainGridRowCnt           = ds_slipcontents.getTotalRow();  // 메인그리드 건수
  } // end of original function

  // cfEnableObjects([ed_crn,img_crn]);
  $c.gus.cfEnableObjects($p, [ed_crn, btn_crn]);
  console.log("  ==--== 활성 (사업자번호,사업자번호돋보기)");

  // KYU_NEW : 모든 상태 C 로 변경
  ds_slipcontents.modifyAllStatus("C");

  // 전표복사 종료
  scwin.isSlipCopy = false;

  // 삭제 아님 - 행이동시 old check
  scwin.state = "N";
  scwin.delflag = "N";
  console.log("=== f_SlipCopy END");
};

//-------------------------------------------------------------------------
// f_dsTotxt 역바인딩
//-------------------------------------------------------------------------
scwin.f_dsTotxt = function () {
  // KYU_NEW : 추가 역바인딩
  var row = ds_slipcontents.getRowPosition();
  console.log("=== f_dsTotxt (역바인딩)  row [" + row + "]");
  scwin.txt_bizdivCd = ds_slipcontents.getCellData(row, "bizdivCd"); // 사업부코드
  scwin.txt_bizDomCd = ds_slipcontents.getCellData(row, "bizDomCd"); // 사업영역코드
  scwin.txt_termMgntYn = ds_slipcontents.getCellData(row, "termMgntYn"); // 기간관리여부
  scwin.txt_clntMgntYn = ds_slipcontents.getCellData(row, "clntMgntYn"); // 거래처관리여부
  scwin.txt_empMgntYn = ds_slipcontents.getCellData(row, "empMgntYn"); // 사원관리여부
  scwin.txt_dtMgntYn = ds_slipcontents.getCellData(row, "dtMgntYn"); // 일자관리여부
  scwin.txt_payAcctCd = ds_slipcontents.getCellData(row, "payAcctCd"); // 지급계정
  scwin.txt_costClsCd = ds_slipcontents.getCellData(row, "costClsCd"); // 비용구분코드
  scwin.txt_tempCostClsCd = ds_slipcontents.getCellData(row, "tempCostClsCd"); // TEMP비용구분코드
  scwin.txt_clntCrn = ds_slipcontents.getCellData(row, "clntCrn"); // 거래처사업자번호

  // ds_slipcontents.setCellData(row, "bizdivCd"  , scwin.txt_bizdivCd);    // 사업부코드
  // ds_slipcontents.setCellData(row, "bizDomCd"  , scwin.txt_bizDomCd);    // 사업영역코드
  // ds_slipcontents.setCellData(row, "termMgntYn", scwin.txt_termMgntYn);  // 기간관리여부
  // ds_slipcontents.setCellData(row, "clntMgntYn", scwin.txt_clntMgntYn);  // 거래처관리여부
  // ds_slipcontents.setCellData(row, "empMgntYn" , scwin.txt_empMgntYn);   // 사원관리여부
  // ds_slipcontents.setCellData(row, "dtMgntYn"  , scwin.txt_dtMgntYn);    // 일자관리여부
  // ds_slipcontents.setCellData(row, "payAcctCd" , scwin.txt_payAcctCd);   // 지급계정
  // ds_slipcontents.setCellData(row, "costClsCd" , scwin.txt_costClsCd);   // 비용구분코드
  // ds_slipcontents.setCellData(row, "tempCostClsCd" , scwin.txt_tempCostClsCd);   // TEMP비용구분코드
  // ds_slipcontents.setCellData(row, "clntCrn"   , scwin.txt_clntCrn);     // 거래처사업자번호
};

//-------------------------------------------------------------------------
// readOnly 로 처리
//-------------------------------------------------------------------------
scwin.f_ReadOnly = async function () {
  // txt_mgntNm.readOnly = true;
  ed_mgntNm.setReadOnly(true);
  console.log("  ==--== 관리명(앞) readOnly");

  // cfDisableObjects([ed_vatDeclarAcctDeptCd, txt_vatDeclarAcctDeptNm, ed_crn, txt_crnNm, img_crn]);
  $c.gus.cfDisableObjects($p, [ed_vatDeclarAcctDeptCd, ed_vatDeclarAcctDeptNm, ed_crn, ed_crnNm, btn_crn]);
  console.log("  ==--== f_ReadOnly - 비활성 ( 부가세관리부서,부가세관리부서명,사업자번호,사업자명,사업자돋보기)");
};

// KYU_DEL 삭제
scwin.f_checkSettle2 = async function (param1, param2) {
  console.log("=== 222 f_checkSettle2 (정리대상 계정여부 체크 - 전표복사 이후 (f_SlipCopy) )  param1[" + param1 + "]  param2[" + param2 + "]");

  // ds_commonCode.setEmptyValue();
  // ds_settleAccount.setJSON([]);

  // 		// ds_settleAccount.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC"
  // 		// 			     		+ "&queryId=retrieveSettleInfo&param1="+ds_slipcontents.NameString(idx,"acctCd")
  // 		// 			     		+"&param2="+ds_slipcontents.NameString(idx,"drcrClsCd")
  // 		// 				 		;
  // 		// ds_settleAccount.Reset();

  // const strParam = {
  //               sysCd              : "CommonEBC"           // 시스템코드
  //             , queryId            : "retrieveSettleInfo"    // 쿼리ID
  //             , param1             : param1
  //             , param2             : param2
  //         };

  // //데이터셋에 정보설정
  // ds_commonCode.setJSON(strParam);
  // await $c.sbm.execute(sbm_checkSettle2);

  // // KYU_NEW
  // return true;
};

// KYU_DEL 삭제
scwin.sbm_checkSettle2_submitdone = function (e) {
  console.log("▷ sbm_checkSettle2_submitdone (정리대상 계정여부 체크(f_SlipCopy)  submitdone)");
};

//-------------------------------------------------------------------------
// 정산방법 돋보기 클릭 - 가지급금입금 팝업
// 가지급금,선급금 정리화면_팝업 이미지 클릭함수 
//-------------------------------------------------------------------------
scwin.f_Prepay = async function () {
  console.log("----- f_Prepay (가지급금,선급금 정리팝업)");
  //	customAlert( "110850", "가지급금,선습슴 정리화면 팝업이미지 클릭됨" );

  if (lc_crcCd.getValue() == "KRW") {
    // 통화코드가 KRW면
    let rtn1 = await $c.gus.cfValidate($p, [ica_slipDt, ed_acctDeptCd, ed_amt]); // 작성일자와, 귀속부서, 금액 값유무 확인
    if (!rtn1) return false;
  } else {
    // 그외통화코드는
    let rtn2 = await $c.gus.cfValidate($p, [ica_slipDt, ed_acctDeptCd, ed_amtFcrc]); // 작성일자와, 귀속부서, 외화금액 값 유무 확인
    if (!rtn2) return false;
  }

  //  validExp="금액:yes:notAllowed=0&maxLength=13"
  //  validExp="외화금액:yes:notAllowed=0&maxLength=13"
  var sum = 0; // 금액(한화/외화)

  if (lc_crcCd.getValue() == ACConstants.KOREA_WON) {
    // 통화코드가 원화면
    sum = Number(ed_amt.getValue().trim()); // 금액입력

    // KYU_NEW
    if (sum == 0) {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_033, "금액", "0"));
      ed_amt.focus();
      return false;
    }
  } else {
    // 원화 아님
    sum = Number(ed_amtFcrc.getValue().trim()); // 외화금력

    // KYU_NEW
    if (sum == 0) {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_033, "외화금액", "0"));
      ed_amtFcrc.focus();
      return false;
    }
  }

  // 가지급금선급금입금 정리 팝업용 파라미터객체 생성
  var temp_acctDeptCd;
  var temp_acctDeptNm;
  var valueObject = new Object();
  // valueObject.prov       = ds_prov;                          //
  // valueObject.provHeader = ds_provHeader;                    //
  // valueObject.txtrltSeq  = ds_slipcontents.NameValue(ds_slipcontents.RowPosition,"rltSeq");  // 정산순번
  // valueObject.adjmClsCd  = lc_adjmClsCd.BindColVal.trim();   // 정산방법
  // valueObject.sum        = sum;                              // 정산대상금액
  // valueObject.crcCd      = lc_crcCd.BindColVal;              // 통화코드

  // [수정]20051107 부서,부서명 추가
  for (j = 0; j < ds_provHeader.getTotalRow(); j++) {
    if (ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "rltSeq") == ds_provHeader.getCellData(j, "rltSeq")) {
      if (ds_provHeader.getCellData(j, "reqAcctDeptCd") != "") {
        // valueObject.acctDeptCd = ds_provHeader.NameString(j,"reqAcctDeptCd") // 신청부서코드
        // valueObject.acctDeptNm = ds_provHeader.NameString(j,"reqAcctDeptNm") // 신청부서명
        temp_acctDeptCd = ds_provHeader.getCellData(j, "reqAcctDeptCd"); // 신청부서코드
        temp_acctDeptNm = ds_provHeader.getCellData(j, "reqAcctDeptNm"); // 신청부서명
      }
    }
  }
  if (typeof valueObject.acctDeptCd == "undefined" || valueObject.acctDeptCd == "") {
    // valueObject.acctDeptCd = ed_acctDeptCd.text.trim();
    // valueObject.acctDeptNm = txt_acctDeptNm.value.trim();
    temp_acctDeptCd = ed_acctDeptCd.getValue().trim();
    temp_acctDeptNm = ed_acctDeptNm.getValue().trim();
  }
  let data = {
    prov: ds_prov,
    provHeader: ds_provHeader,
    txtrltSeq: ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "rltSeq") // 정산순번
    ,

    adjmClsCd: lc_adjmClsCd.getValue().trim() // 정산방법
    ,

    sum: sum // 정산대상금액
    ,

    crcCd: lc_crcCd.getValue() // 통화코드
    ,

    acctDeptCd: temp_acctDeptCd,
    acctDeptNm: temp_acctDeptNm,
    compare: 1,
    flag: "Y",
    slipDt: ica_slipDt.getValue().trim()
  };

  // 가지급금선급금입금 팝업설정
  // var style       = "center:yes; dialogwidth:1000px; dialogheight:520px; scroll:no; resizable:no; status:yes;";
  // var strPath     = "fi_201_02_02b.jsp?compare=1&flag=Y&slipDt="+ed_slipDt.text.trim();

  let win_url = "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_02_02b.xml";
  let opts = {
    id: "smpPop",
    popupName: "가지급금입금",
    modal: true,
    type: "browserPopup",
    width: 1450,
    height: 800,
    title: true
  };

  // var returnValue = window.showModalDialog(strPath, valueObject ,style ) ;
  var returnValue = await $c.win.openPopup($p, win_url, opts, data);

  //결좌데이터 정리
  if (returnValue != null && returnValue != "N/A") {
    // ds_prov.ImportData(returnValue.prov);

    // 배열 [{}]  -->  JSON 배열로 변환 {}
    var temp = JSON.stringify(returnValue[0]).trim();
    var jarray = JSON.parse(temp);
    console.log("  temp [" + temp + "]");
    console.log("  jarray [" + jarray + "]");
    var dcJSON = returnValue[0].getAllJSON(); // JSON 배열로 담기
    ds_prov.setJSON(dcJSON, true); // append

    // ds_provHeader.ImportData(returnValue.provHeader);

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
    // for(i=1; i<=ds_prov.CountRow-1; i++){
    // 	for(j=i+1;j<=ds_prov.CountRow; j++) {
    // 		if(ds_prov.NameString(i,"rltSeq")==ds_prov.NameString(j,"rltSeq")){
    // 			if(ds_prov.NameString(i,"slipNo")==ds_prov.NameString(j,"slipNo")){
    // 				ds_prov.DeleteRow(i);
    // 				break;
    // 			}
    // 		}
    // 	}
    // } // for end

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

    //alert(ds_provHeader.NameString(1,"bankbookNm"));
    // for(i=1; i<=ds_provHeader.CountRow-1; i++){
    // 	for(j=i+1;j<=ds_provHeader.CountRow; j++) {
    // 		if(ds_provHeader.NameString(i,"rltSeq")==ds_provHeader.NameString(j,"rltSeq")){
    // 			ds_provHeader.DeleteRow(i);
    // 			break;
    // 		}
    // 	}
    // } // for end

    // 가지급금 건수 삭제
    for (i = 0; i < ds_provHeader.getTotalRow() - 1; i++) {
      for (j = i + 1; j < ds_provHeader.getTotalRow(); j++) {
        if (ds_provHeader.getCellData(i, "rltSeq") == ds_provHeader.getCellData(j, "rltSeq")) {
          ds_provHeader.deleteRow(i);
          break;
        }
      }
    } // for end

    //가지급금 입금 팝업 적요  전표 적요에 적용
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "summary", ds_provHeader.getCellData(ds_slipcontents.getRowPosition(), "summary"));
  }
};

//-------------------------------------------------------------------------
// 부가세관리부서 버튼 클릭
//-------------------------------------------------------------------------
scwin.udc_vatDeclarAcctDeptCd_onclickEvent = function (e) {
  scwin.f_VatDeclarAcctDeptCd('1');
};

//-------------------------------------------------------------------------
// 부가세귀속부서 popup : fi_100_06_01p.xml
//-------------------------------------------------------------------------
scwin.f_VatDeclarAcctDeptCd = async function (str) {
  console.log("=== f_VatDeclarAcctDeptCd (부가세귀속부서조회 팝업)  str [" + str + "]  1: 돋보기 클릭  2: 부서  3: 부가세관리부서로 부서명");
  if (ed_acctDeptCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "귀속부서"));
    console.log("▶▶ 부가세귀속 팝업에서 난 MSG_CM_ERR_002 오류");
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_acctDeptCd.focus;
    return;
  }
  var param = "," + ed_acctDeptCd.getValue() + ",1";
  var sqlID = "";
  var check = "";
  var popTemp = "";

  // popup 버튼 눌렀을경우
  if (str == "1") {
    // param = ",,1,"+ txtCoCd.value+","+ txtCoClsCd.value+","+ed_slipDt.text.substring(0,4);
    // 2026-01-16 : 파라미터 변경 : 귀속부서코드 추가
    // dept 1 coCd coClsCd slipDt
    param = "," + ed_acctDeptCd.getValue() + ",1," + scwin.txtCoCd + "," + scwin.txtCoClsCd + "," + ica_slipDt.getValue().substring(0, 4);
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
    // 2026-03-10:  파라미터 변경
    param = "," + ed_acctDeptCd.getValue() /*4*/ + "," + scwin.txtCoCd + "," + scwin.txtCoClsCd + "," + ica_slipDt.getValue().substring(0, 4) /*7*/;
    console.log("  2 부서 넘어옴 - param [" + param + "]");
    check = "T";
    ed_vatDeclarAcctDeptCd.setValue("");
    popTemp = "ZZ";
    udc_vatDeclarAcctDeptCd.setSelectId("retrieveVatDeclarAcctDeptCdAcctDeptCd");
    if (!scwin.popupAsyncFlag) {
      console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");
      udc_vatDeclarAcctDeptCd.cfCommonPopUp(scwin.udc_vatDeclarAcctDeptCd_callBackFunc2, /* 0 */ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check /* 3 */, null, null, null, null, param /* 8 */, 1000, 520, null, null);
      // /* 0 */, , ""
      // , "F" /* 3 : T 1건이면 팝업 보여주기 */
      // ,
      // , paramArray.pTitle /* 5 */, paramArray.pWidth, paramArray.pHidden
      // , paramArray.pWhere /* 8 : where 절 */
      // , paramArray.pW  /*  9 : 사이즈 가로 */
      // , paramArray.pH  /* 10 : 사이즈 세로 */,paramArray.pTop, paramArray.pLeft,paramArray.pExistTF, paramArray.pAllSearchTF,paramArray.pWtitleSearch);
    } else {
      await udc_vatDeclarAcctDeptCd.cfCommonPopUpAsync(scwin.udc_vatDeclarAcctDeptCd_callBackFunc2, /* 0 */ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check /* 3 */, null, null, null, null, param /* 8 */, 1000, 520, null, null);
    }

    // 부가세관리부서에 값을넣고 명을 찾을 경우
  } else if (str == "3") {
    // param = ",,1,"+ txtCoCd.value+","+ txtCoClsCd.value+","+ed_slipDt.text.substring(0,4);

    // 2026-01-16 : 파라미터 변경 : 귀속부서코드 추가
    // dept 1 coCd coClsCd slipDt
    param = "," + ed_acctDeptCd.getValue() + ",1," + scwin.txtCoCd + "," + scwin.txtCoClsCd + "," + ica_slipDt.getValue().substring(0, 4);
    console.log(" 3 부가세관리부서 명 찾음 - param [" + param + "]");
    check = "T";
    popTemp = "";
    udc_vatDeclarAcctDeptCd.setSelectId("retrieveVatDeclarAcctDeptCd");
    if (!scwin.popupAsyncFlag) {
      console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");
      udc_vatDeclarAcctDeptCd.cfCommonPopUp(scwin.udc_vatDeclarAcctDeptCd_callBackFunc3, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check, null, null, null, null, param, 1000, 520, null, null);
    } else {
      await udc_vatDeclarAcctDeptCd.cfCommonPopUpAsync(scwin.udc_vatDeclarAcctDeptCd_callBackFunc3, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check, null, null, null, null, param, 1000, 520, null, null);
    }
  }

  // rtnList = cfCommonPopUp(sqlID,ed_vatDeclarAcctDeptCd.text.trim(),popTemp,check,null,null,null,null,param,null,null,null,null);
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
// udc_vatDeclarAcctDeptCd_callBackFunc3 (부가세귀속부서조회 팝업 callBackFunc 3)
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
  console.log("▷ afterVatDeclarAcctDeptCdPopup (부가세귀속부서조회 통합처리)");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 2026-02-02
      scwin.ed_vatDeclarAcctDeptCd_hidVal = ""; //히든값
      return;
    }
    // ed_vatDeclarAcctDeptCd.text  = rtnList[2];		//부가세부서코드
    // txt_vatDeclarAcctDeptNm.value = rtnList[3];		//부가세부서명
    // ed_vatDeclarAcctDeptCd.hidVal = rtnList[2];  	//히든값
    ed_vatDeclarAcctDeptCd.setValue(rtnList[2]); //부가세부서코드
    ed_vatDeclarAcctDeptNm.setValue(rtnList[3]); //부가세부서명
    scwin.ed_vatDeclarAcctDeptCd_hidVal = rtnList[2]; //히든값
  } else {
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    scwin.ed_vatDeclarAcctDeptCd_hidVal = "";
  }
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 발행부서 (조회) 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udt_slipAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};

//-------------------------------------------------------------------------
// 귀속부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'F');
};

//-------------------------------------------------------------------------
// 계정 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_acctCd_onclickEvent = async function (e) {
  console.log("--- udc_acctCd_onclickEvent (계정 돋보기 클릭)");

  // KYU_TEST : async
  // let rtnp = await scwin.f_openPopUp('2','F');
  await scwin.f_openPopUp('2', 'F');
};

//-------------------------------------------------------------------------
// 사업자번호 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_crn_onclickEvent = function (e) {
  // scwin.f_openPopUp(8, ed_crn.getValue(), ed_crnNm.getValue(),'F','T');
  scwin.f_openPopUp('8', 'F', 'T');
};

//-------------------------------------------------------------------------
// 지점 버튼 클릭
//-------------------------------------------------------------------------
scwin.udc_branchCd_onclickEvent = function (e) {
  scwin.f_openPopUp('6', 'F', 'IMG');
};

//-------------------------------------------------------------------------
// 지점명 변경
//-------------------------------------------------------------------------
scwin.udc_branchCd_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp('13', 'F', 'NM');
};

//-------------------------------------------------------------------------
// 매입항목코드 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_pchsItemCd_onclickEvent = function (e) {
  scwin.f_openPopUp('7', 'F');
};

//-------------------------------------------------------------------------
// 사원번호 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_mgntEmpNo_onclickEvent = function (e) {
  scwin.f_openPopUp('5', 'F');
};

//-------------------------------------------------------------------------
// 거래처번호 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_mgntClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('4', 'F');
};

//-------------------------------------------------------------------------
// 상대계정 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_opntAcctCd_onclickEvent = function (e) {
  scwin.f_openPopUp('9', 'F');
};

//-------------------------------------------------------------------------
// 요청거래처 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_reqClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('10', 'F');
};

//-------------------------------------------------------------------------
// f_openPopUp 팝업  @@
//   1:발행부서,2:계정,3:귀속부서,4:거래처,5:사번,8:사업자번호,9:상대계정,10:요청거래처    6:지점,7:매출입
//
//   isCdYn 지점코드에서만 사용
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (flag, check, isCdYn) {
  console.log(" -- PPP --  f_openPopUp   flag [" + flag + "]  check [" + check + "]  1:발행부서,2:계정,3:귀속부서,4:거래처,5:사번,8:사업자번호,9:상대계정,10:요청거래처");
  switch (flag) {
    case '1':
      // 발행부서 (조회)
      //var param = ed_slipDt.text.trim()+",,,,"; 
      // 자회사 회계 시스템인 경우,  
      //if(isSubCompany)  {  
      //			param = ed_slipDt.text.trim()+",,"+vCoCd+","+ vCoClsCd; 
      var param = ica_slipDt.getValue() + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;
      //}

      console.log("  발행부서 popup  param [" + param + "]");
      if (!scwin.popupAsyncFlag) {
        //			    rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo3',ed_slipAcctDeptCd.text.trim(),txt_slipAcctDeptNm.value,check,null,null,null,null,param,null,null,null,null); 
        udc_slipAcctDeptCd.cfCommonPopUp(scwin.udc_slipAcctDeptCd_callBackFunc, ed_slipAcctDeptCd.getValue(), ed_slipAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_slipAcctDeptCd.cfCommonPopUpAsync(scwin.udc_slipAcctDeptCd_callBackFunc, ed_slipAcctDeptCd.getValue(), ed_slipAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '2':
      // 계정
      // 귀속부서에 입력값이 없으면 에러메세지 출력
      if (ed_acctDeptCd.getValue() == "") {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "귀속부서"));
        console.log("▶▶ 계정 팝업에서 발생한 MSG_CM_ERR_002 오류");

        //udc_acctDeptCd.focus();
        ed_acctDeptCd.focus();
        return;
      }

      // 비용구분 : 01^원가,02^판관비,03^원가+판관비,04^판관비제외,05^원가제외
      if (scwin.txt_costClsCd == "03") {
        scwin.txt_costClsCd = "04"; // 전체조회

        console.log("  --- 04 (04: 판관비제외) 로 세팅  scwin.txt_costClsCd : " + scwin.txt_costClsCd);
      } else if (scwin.txt_costClsCd == "01") {
        scwin.txt_costClsCd = "05"; // 원가
      } else if (scwin.txt_costClsCd == "02") {
        scwin.txt_costClsCd = "06"; // 판관비
      } else {
        scwin.txt_costClsCd = "";
      }

      // 계정코드가 
      var where = "";

      // 동부익스프레스, 자회사 구분으로 계정 팝업창 틀림
      if (scwin.isSubCompany == false) {
        where = ica_slipDt.getValue().trim() + "," + scwin.txt_costClsCd + ",Y";
        udc_acctCd.setSelectId("retrieveTransferAcctCdInfo");
        console.log("  계정 (자회사) 아님 where [" + where + "]   selectId : retrieveTransferAcctCdInfo");
        if (!scwin.popupAsyncFlag) {
          // rtnList = cfCommonPopUp('retrieveTransferAcctCdInfo',ed_acctCd.text.trim(),txt_acctNm.value,check,null,null,null,null,where,null,null,null,null);
          udc_acctCd.cfCommonPopUp(scwin.udc_acctCd_callBackFunc, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check, null, null, null, null, where, null, null, null, null);
        } else {
          // async - f_AcctCd - f_checkSettle 실행안됨  @@
          await udc_acctCd.cfCommonPopUpAsync(scwin.udc_acctCd_callBackFunc, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check, null, null, null, null, where, null, null, null, null);
        }
      } else {
        where = ica_slipDt.getValue().trim() + "," + scwin.txt_costClsCd;
        udc_acctCd.setSelectId("retrieveTransferAcctCdInfo2");
        console.log("  계정 (자회사)  where [" + where + "]   selectId : retrieveTransferAcctCdInfo2");
        if (!scwin.popupAsyncFlag) {
          // rtnList = cfCommonPopUp('retrieveTransferAcctCdInfo2',ed_acctCd.text.trim(),txt_acctNm.value,check,null,null,null,null,where,null,null,null,null);
          udc_acctCd.cfCommonPopUp(scwin.udc_acctCd_callBackFunc, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check, null, null, null, null, where, null, null, null, null);
        } else {
          // async - f_AcctCd - f_checkSettle 실행안됨
          await udc_acctCd.cfCommonPopUpAsync(scwin.udc_acctCd_callBackFunc, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check, null, null, null, null, where, null, null, null, null);
        }
      }
      break;
    case '3':
      // 귀속부서		 
      param = ica_slipDt.getValue().trim() + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;
      console.log("  귀속부서 popup  param [" + param + "]");
      if (!scwin.popupAsyncFlag) {
        // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo3',ed_acctDeptCd.text.trim(),txt_acctDeptNm.value,check,null,null,null,null,param,null,null,null,null);
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, ed_acctDeptCd.getValue().trim(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_acctDeptCd.cfCommonPopUpAsync(scwin.udc_acctDeptCd_callBackFunc, ed_acctDeptCd.getValue().trim(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '4':
      // 거래처
      var param = '';
      param = scwin.vCoCd;

      // 20110704 거래처여부 예외처리 by kimseok 
      // 예외적 상황으로, 계정이 가지급 에 해당하는 경우는 일반의 경우와 팝업을 분리한다.
      // 가지급 경우( 계정번호:명칭 1110530:단기대여금-업무가지급금(일반),1110531:단기대여금-업무가지급금(급여), 1110540:단기대여금-매표가지급금 )
      // 입력한 사원번호를 기준으로 거래처를 검색한다. 
      if (ed_acctCd.getValue() == '1110530' || ed_acctCd.getValue() == '1110531') {
        console.log("  가지급  acctCd = 1110530:단기대여금-업무가지급금(일반),1110531:단기대여금-업무가지급금(급여) - retrieveMgntEmpNoList");
        if (ed_mgntEmpNo.getValue() == "" || ed_mgntEmpNo.getValue() == null) {
          await $c.win.alert($p, "계정이 가지급인 경우, 사원번호는 필수 항목입니다. ");
          return;
        } else {
          udc_mgntClntNo.setSelectId("retrieveMgntEmpNoList");
          // udc_mgntClntNo.cfCommonPopUp(scwin.udc_mgntClntNo_callBackFunc
          //                         ,ed_mgntEmpNo.getValue().trim()
          //                         ,ed_mgntEmpNm.getValue()
          //                         ,check
          //                         ,null
          //                         ,null
          //                         ,null
          //                         ,null
          //                         ,null
          //                         ,null
          //                         ,null
          //                         ,null
          //                         ,null
          //                         );

          if (!scwin.popupAsyncFlag) {
            // rtnList = cfCommonPopUp('retrieveMgntEmpNoList'
            udc_mgntClntNo.cfCommonPopUp(scwin.udc_mgntClntNo_callBackFunc, ed_mgntEmpNo.getValue().trim(), ed_mgntEmpNm.getValue(), check, null, null, null, null, null, null, null, null, null);
          } else {
            await udc_mgntClntNo.cfCommonPopUpAsync(scwin.udc_mgntClntNo_callBackFunc, ed_mgntEmpNo.getValue().trim(), ed_mgntEmpNm.getValue(), check, null, null, null, null, null, null, null, null, null);
          }
        }
      } else {
        console.log("  가지급 아님  acctCd != 1110530:단기대여금-업무가지급금(일반),1110531:단기대여금-업무가지급금(급여) - retrieveClntEmpNoList");
        udc_mgntClntNo.setSelectId("retrieveClntEmpNoList");
        // rtnList = cfCommonPopUp('retrieveClntEmpNoList' 
        // udc_mgntClntNo.cfCommonPopUp(scwin.udc_mgntClntNo_callBackFunc
        //                         ,ed_mgntClntNo.getValue().trim()
        //                         ,ed_mgntClntNm.getValue()
        //                         ,check
        //                         ,null
        //                         ,null
        //                         ,null
        //                         ,null
        //                         ,param
        //                         ,null
        //                         ,null
        //                         ,null
        //                         ,null
        //                         );

        if (!scwin.popupAsyncFlag) {
          udc_mgntClntNo.cfCommonPopUp(scwin.udc_mgntClntNo_callBackFunc, ed_mgntClntNo.getValue().trim(), ed_mgntClntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
        } else {
          await udc_mgntClntNo.cfCommonPopUpAsync(scwin.udc_mgntClntNo_callBackFunc, ed_mgntClntNo.getValue().trim(), ed_mgntClntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
        }
      }
      break;
    case '5':
      // 사번
      param = '';
      if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
        // 자회사 회계 시스템
        param = scwin.txtCoCd + "," + scwin.txtCoClsCd;
      }
      console.log("  사번 popup  param [" + param + "]");
      if (!scwin.popupAsyncFlag) {
        // rtnList = cfCommonPopUp('retrieveAcEmpInfo',ed_mgntEmpNo.text.trim(),txt_mgntEmpNm.value,check,null,null,null,null,param,null,null,null,null);
        udc_mgntEmpNo.cfCommonPopUp(scwin.udc_mgntEmpNo_callBackFunc, ed_mgntEmpNo.getValue().trim(), ed_mgntEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_mgntEmpNo.cfCommonPopUpAsync(scwin.udc_mgntEmpNo_callBackFunc, ed_mgntEmpNo.getValue().trim(), ed_mgntEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '6':
      // 지점코드 조회
      break;
    // KYU_TEST : 미사용

    case '7':
      // 매출입항목코드 조회
      break;
    // KYU_TEST 미사용

    case '8':
      // 사업자번호
      var param = '';
      if (!scwin.popupAsyncFlag) {
        // rtnList = cfCommonPopUp(selectID,ed_crn.text.trim(),txt_crnNm.value,check,null,null,null,null,param,null,null,null,null);
        udc_crn.cfCommonPopUp(scwin.udc_crn_callBackFunc, ed_crn.getValue().trim(), ed_crnNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_crn.cfCommonPopUpAsync(scwin.udc_crn_callBackFunc, ed_crn.getValue().trim(), ed_crnNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '9':
      // 상대계정조회
      // 2014 05 15 선급비용 처리분에 선급비용-일반 계정이 추가됨으로 인한 상대계정 입력필드 추가

      // KYU_ISSUE : scwin.txt_tempOpntAcctCostClsCd 을 세팅하는 곳이 없음!

      // 비용구분 : 01^원가,02^판관비,03^원가+판관비,04^판관비제외,05^원가제외
      if (scwin.txt_tempOpntAcctCostClsCd == "03") {
        ed_opntAcctCostClsCd.setValue("04"); // 전체조회
      } else if (scwin.txt_tempOpntAcctCostClsCd == "01") {
        ed_opntAcctCostClsCd.setValue("05"); // 원가
      } else if (scwin.txt_tempOpntAcctCostClsCd == "02") {
        ed_opntAcctCostClsCd.setValue("06"); // 판관비
      } else {
        ed_opntAcctCostClsCd.setValue("");
      }

      // 계정코드가 
      var where = "";

      //동부익스프레스, 자회사 구분으로 계정 팝업창 틀림 
      if (scwin.isSubCompany == false) {
        where = ica_slipDt.getValue().trim() + "," + ed_costClsCd.getValue() + ",Y";
        // rtnList = cfCommonPopUp('retrieveTransferAcctCdInfo',ed_acctCd.text.trim(),txt_acctNm.value,check,null,null,null,null,where,null,null,null,null);
        udc_opntAcctCd.setSelectId('retrieveTransferAcctCdInfo');
        console.log(" 상대계정 (자회사 아님)  where [" + where + "]   selectId : retrieveTransferAcctCdInfo");
        if (!scwin.popupAsyncFlag) {
          udc_opntAcctCd.cfCommonPopUp(scwin.udc_opntAcctCd_callBackFunc, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check, null, null, null, null, where, null, null, null, null);
        } else {
          await udc_opntAcctCd.cfCommonPopUpAsync(scwin.udc_opntAcctCd_callBackFunc, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check, null, null, null, null, where, null, null, null, null);
        }
      } else {
        where = ica_slipDt.getValue().trim() + "," + ed_costClsCd.getValue();
        // udc_opntAcctCd.cfCommonPopUp('retrieveTransferAcctCdInfo2',ed_acctCd.text.trim(),txt_acctNm.value,check,null,null,null,null,where,null,null,null,null);
        udc_opntAcctCd.setSelectId('retrieveTransferAcctCdInfo2');
        console.log(" 상대계정 (자회사)  where [" + where + "]   selectId : retrieveTransferAcctCdInfo2");
        if (!scwin.popupAsyncFlag) {
          udc_opntAcctCd.cfCommonPopUp(scwin.udc_opntAcctCd_callBackFunc, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check, null, null, null, null, where, null, null, null, null);
        } else {
          await udc_opntAcctCd.cfCommonPopUpAsync(scwin.udc_opntAcctCd_callBackFunc, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check, null, null, null, null, where, null, null, null, null);
        }
      }
      break;
    case '10':
      // 요청거래처
      var param = '';
      param = scwin.vCoCd;
      console.log(" 요청거래처  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveClntEmpNoList'
      // udc_reqClntNo.cfCommonPopUp(scwin.udc_reqClntNo_callBackFunc
      // 						,ed_reqClntNo.getValue().trim()
      // 						,ed_reqClntNm.getValue()
      // 						,check
      // 						,null
      // 						,null
      // 						,null
      // 						,null
      // 						,param
      // 						,null
      // 						,null
      // 						,null
      // 						,null
      // 						);
      if (!scwin.popupAsyncFlag) {
        console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");
        udc_reqClntNo.cfCommonPopUp(scwin.udc_reqClntNo_callBackFunc, ed_reqClntNo.getValue().trim(), ed_reqClntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_reqClntNo.cfCommonPopUpAsync(scwin.udc_reqClntNo_callBackFunc, ed_reqClntNo.getValue().trim(), ed_reqClntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    default:
      break;
  }

  // 주석 처리 : 혼동 방지
  // console.log(" -- PPP --  f_openPopUp  END  flag["+flag+"] check["+check+"]  txt_payAcctCd ["+scwin.txt_payAcctCd +"]");
};

// @@ ====== 팝업 callBackFunc ================================================================= //
//   1:발행부서,3:계정,4:귀속부서,6:카드번호,7:사업자,8:사원,9:정산처,10:거래처,11:상대계정14:차량별실적,15:요청거래처

//-------------------------------------------------------------------------
// 발행부서 돋보기 클릭 callBackFunc
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCd_callBackFunc = async function (rtnList) {
  console.log("▷ udc_slipAcctDeptCd_callBackFunc (발행부서)");
  console.log(rtnList);
  ed_slipAcctDeptCd.setValue(rtnList[0]);
  ed_slipAcctDeptNm.setValue(rtnList[2]);
  //    ed_input9.setValue(ret[4]);
  //    ed_input10.setValue(ret[9]);

  scwin.f_resultPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, rtnList, "1");
  if (rtnList != null) {
    // KYU_TEST 렌터카 미사용
    // if (rtnList[2] == "00130"){
    // cfDisableObjects([ed_acctDeptCd,txt_acctDeptNm,img_acctDeptCd])
    // cfEnableObjects([ed_pchsItemCd,ed_branchCd,txt_pchsItemNm,txt_branchNm,img_pchsItemCd,img_branchCd])
    // branchTr.style.display="inline"
    // } else {
    $c.gus.cfEnableObjects($p, [ed_acctDeptCd, ed_acctDeptNm, btn_acctDeptCd]);
    // cfDisableObjects([ed_pchsItemCd,ed_branchCd,txt_pchsItemNm,txt_branchNm,img_pchsItemCd,img_branchCd])  // 지점,매출입제외
    // branchTr.style.display="none"

    branchTr.hide(); //  지점,매출입 숨김처리

    // 의미는 없음 !!
    ed_pchsItemCd.setValue("");
    ed_pchsItemNm.setValue("");
    ed_branchCd.setValue("");
    ed_branchNm.setValue("");
    // }
    scwin.vUpperAcctDeptCd = rtnList[2];
    //회사 정보 set

    scwin.txtCoCd = rtnList[4]; //회사코드
    scwin.txtCoClsCd = rtnList[5]; //회사구분코드

    // 00130 (렌터카사업) 로직 제외
    //f_SetGridFormat();

    scwin.f_setInitObj();

    // KYU_ORDER : 발행부서 체크를 구분 실행
    if (scwin.callOnLoad == true) {
      // f_OnLoad 에서 호출 (발행부서 호출 구분용)
      console.log("  -- -- 발행부서 체크를 구분 실행");
      let rtn = await scwin.f_OnLoad2();
      if (!rtn) return false;
    }
    ;
  }
};

// ----------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따라 회사 코드가 변경되면 reset
// ----------------------------------------------------------------------------
scwin.f_setInitObj = function () {
  console.log("=== f_setInitObj (자회사 회계 시스템 추가에 따라 회사 코드가 변경되면 reset)");
  $c.gus.cfInitObjects($p, [ed_acctDeptCd, ed_acctDeptNm]); // Grid- 귀속부서
  $c.gus.cfInitObjects($p, [ed_mgntClntNo, ed_mgntClntNm]); // Grid- 거래처
  $c.gus.cfInitObjects($p, [ed_mgntEmpNo, ed_mgntEmpNm]); // Grid- 사원번호
};

//-------------------------------------------------------------------------
// udc_acctCd_callBackFunc (계정코드조회 팝업 callBackFunc) (2) @@ @
//-------------------------------------------------------------------------
scwin.udc_acctCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_acctCd_callBackFunc (계정코드 조회 팝업 callBackFunc)   rtnList [" + rtnList + "]");
  // debugger;
  if (rtnList != null) {
    //결과값이 없으면 RETURN
    if (rtnList[0] == "N/A") {
      // 2026-02-02
      scwin.ed_acctCd_hidVal = "";
      return;
    }
    console.log("1111");

    //     var rtnListTemp = rtnList;
    //     // col10 : ^ 로 구분됨
    // var CodeList = rtnList.split(",");
    // for (var ii = 0; ii < CodeList.length; ii++) {
    //     var CodeListDetail = CodeList[ii].split("^");
    //     rtnList
    //     if (CodeListDetail[0].trim() == code) {
    //         $c.gus.cfEnableObjects([ed_opntAcctCd, img_opntAcctCd]);
    //         return CodeListDetail[1].trim();
    //     }
    // }

    // debugger;
    //결과값 바인드
    // ed_acctCd.text  = rtnList[0];	//계정코드
    // txt_acctNm.value = rtnList[1];	//계정명
    // ed_acctCd.hidVal = rtnList[0];  // 히든값

    ed_acctCd.setValue(rtnList[0]); //계정코드
    ed_acctNm.setValue(rtnList[1]); //계정명

    console.log("---- rtnList[1] " + rtnList[1] + "  계정명 : " + ed_acctNm.getValue());
    scwin.ed_acctCd_hidVal = rtnList[0]; // 히든값

    // KYU_TEST : false 가 와도 그냥 진행
    let rtn = await scwin.f_AcctCdCheck();
    console.log("  afterAcctDeptCdPopup - f_AcctCdCheck [" + rtn + "]");

    // <%if(ACConstants.CO_CD_DONGBU.equals(login.getCoCd())) {%>
    if (ACConstants.CO_CD_DONGBU == scwin.vCoCd) {
      // 결과값 가지고 왔을때 원)세금과공과-과징금(4203417), 판)세금과공과-과징금(5001917) 계정일 경우
      // 잡손실(6120220)계정으로 작성해 주시기 바랍니다. 라는 메시지 출력해 준다.
      // 본사만
      if (ed_acctCd.getValue() == '4203417') {
        await $c.gus.alert($p, "원)세금과공과-과징금(4203417) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        // 2026-02-02
        scwin.ed_acctCd_hidVal = "";
        return;
      } else if (ed_acctCd.getValue() == '5001917') {
        await $c.gus.alert($p, "판)세금과공과-과징금(5001917) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        // 2026-02-02
        scwin.ed_acctCd_hidVal = "";
        return;
      }
    }

    //---------------------------------------------------------
    //2013.10.28 hurrah015 채권채무선수금정리를 위한 구분값 적용
    //---------------------------------------------------------
    // txt_acctClsCd.value = rtnList[2]; // 계정구분
    scwin.txt_acctClsCd = rtnList[2]; // 계정구분

    // KYU_NEW : 추가 바인딩
    var row = ds_slipcontents.getRowPosition();
    ds_slipcontents.setCellData(row, "acctClsCd", scwin.txt_acctClsCd);
    console.log("   --- --- --- ▶  계정구분 반영 udc_acctCd_callBackFunc - txt_acctClsCd [" + scwin.txt_acctClsCd + "]");
    console.log("  ▣ ▣  계정팝업 callBack - f_checkSettle");
    // console.log("2222-000 - f_checkSettle  SKIP  !!!!!!!!!");

    // KYU_TEST  : false 가 리턴되도 진행
    // KYU_ISSUE : 로직 제거 - 실시간 팝업 내에서 실시간 sbm 실행시 멈춤

    // f_checkSettle(ed_acctCd.text, lc_drcrClsCd.BindColVal);  //정리구분셋팅
    let rtn2 = await scwin.f_checkSettle(ed_acctCd.getValue(), lc_drcrClsCd.getValue()); //정리구분셋팅
    console.log("  ▣ ▣  계정팝업 callBack - f_checkSettle 결과 [" + rtn2 + "]    ▣ ▣ ▣ ▣ ▣");

    /*  KYU_ISSUE : col10 을 ^ 로 분리 (일자관리여부^계정명)
      - AsIs
    r[ 2100810,미지급비용-거래처,2,C,09,1,0,0,지급방법,0,지급방법 ]  11개
      - TOBE
    2100810	미지급비용-거래처	2	C	09	1	0	0	지급방법	0^지급방법  10개 (일자관리여부^계정명)
    */

    // 계정 캐럿/꺽쇠 처리
    // col10 갈라내기 : 일자관리여부^계정명
    var temp_dtMgntYn = "";
    var temp_acctNm = "";
    if (!$c.gus.cfIsNull($p, rtnList[9])) {
      let str = rtnList[9];
      // console.log(" rtnList[9] ["+ rtnList[9] +"]");

      let CodeListDetail = str.split("^");
      // console.log("CodeListDetail ["+ CodeListDetail +"]");

      temp_dtMgntYn = CodeListDetail[0]; // 일자관리여부
      temp_acctNm = CodeListDetail[1]; // 계정명
    }
    console.log("  [팝업결과] rtnList[9] (col10) 분할 [" + rtnList[9] + "] : [9] temp_dtMgntYn [" + temp_dtMgntYn + "]  [10] temp_acctNm (지급계정) [" + temp_acctNm + "]    참고) rtnList[8] [" + rtnList[8] + "]  ----");

    //-------------------------------------------------------------------------
    //  계정조회시화면셋팅  @@
    //  r_mgntCd     - 관리번호
    //  r_clntMgntYn - 거래처여부
    //  r_termMgntYn - 기간관리여부
    //  r_empMgntYn  - 사원관리여부
    //  r_mgntNm     - 관리사원명
    //  r_dtMgntYn   - 일자관리여부
    //  r_payAcctCd  - 지급계정
    //-------------------------------------------------------------------------

    // 계정셋팅
    // console.log("  -- -- f_AcctCd (계정조회시화면셋팅) : 거래처 ["+rtnList[5]+"], 기간관리 ["+rtnList[6]+"], 사원관리 ["+rtnList[7]+"], 일자관리 ["+rtnList[9]+"] 지급계 ["+rtnList[10]+"]");
    // let rtn2 = await scwin.f_AcctCd(rtnList[4],rtnList[5],rtnList[6],rtnList[7],rtnList[8],rtnList[9],rtnList[10]);

    console.log("  -- -- f_AcctCd (계정조회시화면셋팅): 번호[" + rtnList[4] + "] 거래처[" + rtnList[5] + "], 기간관리[" + rtnList[6] + "], 사원관리[" + rtnList[7] + "], 일자관리 [" + temp_dtMgntYn + "] 지급계정명 [" + temp_acctNm + "]");

    // ['1110170', '현금및현금성자산-기타', '1', 'D', '01', '1', '0', '0', '통장번호', '0^통장번호']
    // KYU_TEST : temp_acctNm 사용안함 - 지급계정이 아님 --> 원복
    let rtna = await scwin.f_AcctCd(rtnList[4], rtnList[5], rtnList[6], rtnList[7], rtnList[8], temp_dtMgntYn, temp_acctNm);

    // scwin.f_AcctCd = async function(r_mgntCd,r_clntMgntYn,r_termMgntYn,r_empMgntYn,r_mgntNm,r_dtMgntYn,r_payAcctCd) {

    // console.log("    ----  f_AcctCd  rtna ["+rtna+"]");
    // debugger;
    // [1110530] 단기대여금-업무가지급금(일반) 계정을 [차변]으로 선택할 수 없습니다. 가지급금선급금입력 화면에서 신청하세요.
    if (lc_drcrClsCd.getValue() == "C" && ed_acctCd.getValue() == "1110530") {
      if (scwin.isSubCompany == true) {
        //자회사 정산방법 선택 불가
        lc_adjmClsCd.setValue(-1); // 정산방법 : 없음
        // cfDisableObjects(img_adjmClsCd);
        $c.gus.cfDisableObjects($p, [btn_adjmClsCd]);
        console.log("  ==--== 정산방법:없음(-1) - 비활성 ( 정산방법돋보기 )");
      } else {
        lc_adjmClsCd.setValue(ACConstants.ADJM_MTHDCD_SUSPAY); // 정산방법(가지급금)  4
        // cfEnableObjects(img_adjmClsCd);
        $c.gus.cfEnableObjects($p, [btn_adjmClsCd]);
        console.log("  ==--== 정산방법:가지급금(4) - 활성 ( 정산방법돋보기 )");
      }
    } else {
      if (scwin.isSubCompany == true) {
        //자회사 정산방법 선택 불가
        lc_adjmClsCd.setValue(-1); // 정산방법 : 없음
        // cfDisableObjects(img_adjmClsCd);
        $c.gus.cfDisableObjects($p, [btn_adjmClsCd]);
        console.log("  ==--== 정산방법:없음(-1) - 비활성 ( 정산방법돋보기 )");
      } else {
        lc_adjmClsCd.setValue(0);
        // cfDisableObjects(img_adjmClsCd);
        $c.gus.cfDisableObjects($p, [btn_adjmClsCd]);
        console.log("  ==--== 정산방법:없음(0) - 비활성 ( 정산방법돋보기 )");
      }
    }
  } else {
    console.log("    udc_acctCd_callBackFunc ---- 계정,계정명 초기화");
    ed_acctCd.setValue("");
    ed_acctNm.setValue("");
    scwin.ed_acctCd_hidVal = "";
    ed_mgntNm.setValue("");
    scwin.txt_payAcctCd = "";

    // KYU_NEW : 추가 바인딩
    var row = ds_slipcontents.getRowPosition();
    ds_slipcontents.setCellData(row, "payAcctCd", scwin.txt_payAcctCd); // 지급계정
  }

  // 부가세대급금이 대변  계정, 부가세예수금이 차변계정  입력시는 사업자번호, 부가세관리부서등 부가세관련 데이터 입력가능
  if (ed_acctCd.getValue() == "1111210" && lc_drcrClsCd.getValue() == "D" || ed_acctCd.getValue() == "2100710" && lc_drcrClsCd.getValue() == "C") {
    //	    cfEnableObjects([ed_taxinvcDt,img_taxinvcDt,lc_evidClsCd,lc_deductClsCd, ed_vatDeclarAcctDeptCd,ed_crn, ed_spplyAmt, ed_vatAmt, ed_taxinvcDt, img_taxinvcDt, img_crn]);
    $c.gus.cfEnableObjects($p, [ica_taxinvcDt, lc_evidClsCd, lc_deductClsCd, ed_vatDeclarAcctDeptCd, ed_crn, ed_spplyAmt, ed_vatAmt, btn_crn]);
    console.log("  ==--== 부가세대급금 - 활성 ( 세금계산서일자, 증빙종류코드, 공제종류코드, 부가세관리부서, 사업자번호, 공급금액, 부가세금액, 사업자번호돋보기 ) ");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "taxinvcDt", ica_slipDt.getValue());
  } else {
    //cfDisableObjects([ed_taxinvcDt,img_taxinvcDt,lc_evidClsCd,lc_deductClsCd, ed_vatDeclarAcctDeptCd,ed_crn, ed_spplyAmt, ed_vatAmt, ed_taxinvcDt, img_taxinvcDt, img_crn]);
    $c.gus.cfDisableObjects($p, [ica_taxinvcDt, lc_evidClsCd, lc_deductClsCd, ed_vatDeclarAcctDeptCd, ed_crn, ed_spplyAmt, ed_vatAmt, btn_crn]);
    console.log("  ==--== 부가세대급금 X - 비활성 ( 세금계산서일자, 증빙종류코드, 공제종류코드, 부가세관리부서, 사업자번호, 공급금액, 부가세금액, 사업자번호돋보기 ) ");
  }

  // 계정이 선급비용-일반일 경우 상대계정필드 활성화
  if (ed_acctCd.getValue() == ACConstants.ACCTCD_PREPAY_COST) {
    // 1111110
    //cfEnableObjects([ed_opntAcctCd, txt_opntAcctNm, img_opntAcctCd]);
    $c.gus.cfEnableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
    console.log("  ==--== 활성 ( 상대계정,상대계정명,상대계정돋보기 ) ");
  } else {
    ed_opntAcctCd.setValue("");
    ed_opntAcctNm.setValue("");
    scwin.ed_opntAcctCd_hidVal = "";
    //cfDisableObjects([ed_opntAcctCd, txt_opntAcctNm, img_opntAcctCd]);
    $c.gus.cfDisableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
    console.log("  ==--== 비활성 ( 상대계정,상대계정명,상대계정돋보기 ) ");
  }
  console.log(" ----- 계정팝업 후처리 (기존) END  txt_payAcctCd [" + scwin.txt_payAcctCd + "]"); // 지급계정

  //     console.log(" ----- KYU_ORDER  udc_acctCd_onblurCodeEvent 후처리  START");

  //     // KYU_ORDER : udc_acctCd_onblurCodeEvent
  //     // KYU_TEST : false 가 와도 그냥 진행

  //     console.log("  ▣ ▣  -- f_checkSettle 호출");
  //  */
  // 	//--------------------------------------------------------------
  // 	//채권채무정리를 위한 추가 2013.10.24
  // 	//--------------------------------------------------------------
  //     let rtn1 = await scwin.f_checkSettle(ed_acctCd.getValue(), lc_drcrClsCd.getValue() );

  //     console.log("  ▣ ▣  -- f_checkSettle 결과 rtn1 ["+rtn1+"]");

  // 	if( rtn1 && ed_acctCd.getValue().trim() != "" ) {
  //         console.log("    ----------------------------  정리대상!!!");

  // 		//정리대상인경우
  // 		$c.gus.cfEnableObjects([btn_resetSettleNo,btn_setlMthd]);
  //         // cfDisableObjects([txt_refNo, txt_mgntNm,txt_mgntNo, txt_method,txt_settleClsCd,]);
  // 		$c.gus.cfDisableObjects([ed_refNo,ed_mgntNm,ed_mgntNo]);
  //         console.log("  ==--== 활성(   지급채권번호돋보기)");
  //         console.log("  ==--== 비활성( 지급채권번호(refNo),관리명,  관리번호(뒤)  )  전역제외 : 정리방법표시(txt_method), 정리구분코드 (txt_settleClsCd)");
  // 	}else{
  //         console.log("    ----------------------------  정리대상아님!!!");
  // 		//alert("정리대상아님!!!");
  // 		//정리대상이 아닌경우 popup에서 내려받은값 초기화
  // 		if( scwin.txt_settleClsCd != "0"|| scwin.txt_settleClsCd != ""){
  // 			scwin.f_initSettle(ds_slipcontents.getRowPosition(),'2');
  // 		}
  // 		$c.gus.cfEnableObj(ed_mgntNo, true); 
  // 		// $c.gus.cfDisableObjects([txt_mgntNm,txt_refNo,img_setlMthd,  txt_method,txt_settleClsCd]);
  //         $c.gus.cfDisableObjects([ed_mgntNm, ed_refNo,btn_resetSettleNo,btn_setlMthd ]);
  //         console.log("  ==--== 활성(   관리번호(뒤)  )");
  //         console.log("  ==--== 비활성( 관리명(앞), 지급채권번호(refNo),지급채권번호재조회,지급채권번호돋보기 )  전역제외 : 정리방법표시(txt_method),정리구분코드 (txt_settleClsCd)");
  // 	}

  //     // 세금계산서 일자 초기화
  // 	ica_taxinvcDt.setValue( "" );
};

//-------------------------------------------------------------------------
// udc_acctDeptCd_callBackFunc (귀속부서 조회 팝업 callBackFunc)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_acctDeptCd_callBackFunc (귀속부서 조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    // ed_acctDeptCd.text  = rtnList[0];			//부서코드
    // txt_acctDeptNm.value = rtnList[1];			//부서명
    // ed_acctDeptCd.hidVal = rtnList[0];  		// 히든값
    // cfEnableObjects([ed_vatDeclarAcctDeptCd,img_vatDeclarAcctDeptCd]);
    // txt_costClsCd.value =  ""+rtnList[9];		//비용구분코드
    // txt_tempCostClsCd.value = ""+rtnList[9];	//비용구분코드비교값
    // txt_bizDomCd.value = ""+rtnList[3];			//사업영역코드 (변동비 계정 조회안되도록 수정-06.12.22-박병길)
    // txtCoCd.value    	= rtnList[4];		//회사코드
    // txtCoClsCd.value    = rtnList[5];		//회사구분코드

    ed_acctDeptCd.setValue(rtnList[0]); //부서코드
    ed_acctDeptNm.setValue(rtnList[1]); //부서명
    scwin.ed_acctDeptCd_hidVal = rtnList[0]; // 히든값

    // KYU_TEST
    $c.gus.cfEnableObjects($p, [ed_vatDeclarAcctDeptCd, btn_vatDeclarAcctDeptCd]); // 부가세관리부서
    console.log("  ==--== 활성 ( 부가세관리부서 ) ");
    scwin.txt_costClsCd = "" + rtnList[9]; //비용구분코드
    scwin.txt_tempCostClsCd = "" + rtnList[9]; //비용구분코드비교값

    // KYU_NEW : 추가 바인딩
    var row = ds_slipcontents.getRowPosition();
    ds_slipcontents.setCellData(row, "costClsCd", scwin.txt_costClsCd); // 비용구분코드
    ds_slipcontents.setCellData(row, "tempCostClsCd", scwin.txt_tempCostClsCd); // TEMP비용구분코드

    scwin.txt_bizDomCd = "" + rtnList[3]; //사업영역코드 (변동비 계정 조회안되도록 수정-06.12.22-박병길)
    scwin.txtCoCd = rtnList[4]; //회사코드
    scwin.txtCoClsCd = rtnList[5]; //회사구분코드

    // TB_FI010 (증빙구분) 의 EVID_CLS_CD (증빙구분코드) - 10: 세금계산서, 11: 세금계산서기타, 12: 고속면세매출, 20: 영세율세금계산서, 30: 계산서, 40: 법인카드, 41: 신용카드, 50: 개인카드, 60: 현금영수증, 70: 영수증, 80: 내부매출, 99: 기타
    if (lc_evidClsCd.getValue() == "40") {
      // 법인카드
      if (vCoCd != "023") {
        //BIDC가 아닌경우
        await scwin.f_VatDeclarAcctDeptCd('2');
        ed_vatDeclarAcctDeptCd.setValue("00009");
        ed_vatDeclarAcctDeptNm.setValue("재경");

        // 귀속부서에 해당하는 신고부서가 아닌 재경에 해당하는 신고부서를 가져감
        await scwin.f_VatDeclarAcctDeptCd('3');
      }
    }
    if (lc_evidClsCd.getValue() != "40") {
      // 법인카드 아닐 때
      // 부가세귀속부서popup
      await scwin.f_VatDeclarAcctDeptCd('2');
    }
  } else {
    console.log("   리턴 없슴");
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
    scwin.ed_acctDeptCd_hidVal = "";
    scwin.txt_costClsCd = "";

    // KYU_NEW : 추가 바인딩
    var row = ds_slipcontents.getRowPosition();
    ds_slipcontents.setCellData(row, "costClsCd", scwin.txt_costClsCd); // 비용구분코드

    scwin.txt_bizDomCd = ""; //사업영역코드 (변동비 계정 조회안되도록 수정-06.12.22-박병길
  }
  console.log("    udc_acctDeptCd_callBackFunc ---- 계정,계정명 초기화");
  ed_acctCd.setValue(""); //계정코드
  ed_acctNm.setValue(""); //계정명
  scwin.ed_acctCd_hidVal = ""; // 히든값
  console.log("  초기화 [계정코드, 계정명, 계정히든값]");
};

//-------------------------------------------------------------------------
// udc_mgntClntNo_callBackFunc (거래처조회 팝업 callBackFunc) (4)
//-------------------------------------------------------------------------
scwin.udc_mgntClntNo_callBackFunc = function (rtnList) {
  console.log("▲ udc_mgntClntNo_callBackFunc (거래처조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_mgntClntNo.setValue(rtnList[0]); // 거래처코드
    ed_mgntClntNm.setValue(rtnList[1]); // 거래처명명
    scwin.ed_mgntClntNo_hidVal = rtnList[0]; // 히든값

    scwin.txt_clntCrn = rtnList[4]; // 사업자번호

    // KYU_NEW : 추가 바인딩
    var row = ds_slipcontents.getRowPosition();
    ds_slipcontents.setCellData(row, "clntCrn", scwin.txt_clntCrn); // 거래처사업자번호

    //사원거래처일경우 사번셋팅(수정 20060412)

    //if(ed_mgntEmpNo.Enable==true && rtnList[10]=="EM"){
    if (ed_mgntEmpNo.getDisabled() == false && rtnList[10] == "EM") {
      ed_mgntEmpNo.setValue(rtnList[11]);
      ed_mgntEmpNm.setValue(rtnList[12]);
      scwin.ed_mgntEmpNo_hidVal = rtnList[11];
    }
  } else {
    console.log("   리턴 없슴");
    ed_mgntClntNo.setValue("");
    ed_mgntClntNm.setValue("");
    scwin.ed_mgntClntNo_hidVal = "";
    scwin.txt_clntCrn = "";

    // KYU_NEW : 추가 바인딩
    var row = ds_slipcontents.getRowPosition();
    ds_slipcontents.setCellData(row, "clntCrn", scwin.txt_clntCrn); // 거래처사업자번호
  }
};

//-------------------------------------------------------------------------
// 사원번호 조회 callBackFunc (5)
//-------------------------------------------------------------------------
scwin.udc_mgntEmpNo_callBackFunc = function (rtnList) {
  console.log("▲ udc_mgntEmpNo_callBackFunc (사원번호 조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");

  //f_resultPopEd(ed_mgntEmpNo,txt_mgntEmpNm,rtnList);
  scwin.f_resultPopEd(ed_mgntEmpNo, ed_mgntEmpNm, rtnList, "5");
};

//-------------------------------------------------------------------------
// 사업자번호 조회 callBackFunc (8)
//-------------------------------------------------------------------------
scwin.udc_crn_callBackFunc = function (rtnList) {
  console.log("▲ udc_crn_callBackFunc (사업자번호 조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    // ed_crn.text  = rtnList[0];	//거래처코드
    // txt_crnNm.value = rtnList[1];	//거래처명명
    // ed_crn.hidVal = rtnList[0];  // 히든값
    // txt_clntCrn.value = rtnList[0];

    ed_crn.setValue(rtnList[0]); //거래처코드
    ed_crnNm.setValue(rtnList[1]); //거래처명명
    scwin.ed_crn_hidVal = rtnList[0]; // 히든값
    scwin.txt_clntCrn = rtnList[0];

    // KYU_NEW : 추가 바인딩
    var row = ds_slipcontents.getRowPosition();
    ds_slipcontents.setCellData(row, "clntCrn", scwin.txt_clntCrn); // 거래처사업자번호
  } else {
    // ed_crn.text  = ""	//거래처코드
    // txt_crnNm.value = ""	//거래처명명
    // ed_crn.hidVal = ""  // 히든값

    ed_crn.setValue(""); //거래처코드
    ed_crnNm.setValue(""); //거래처명명
    scwin.ed_crn_hidVal = ""; // 히든값
  }
};

//-------------------------------------------------------------------------
// udc_opntAcctCd_callBackFunc (상대계정 조회 팝업 callBackFunc)
//-------------------------------------------------------------------------
scwin.udc_opntAcctCd_callBackFunc = function (rtnList) {
  console.log("▲ udc_opntAcctCd_callBackFunc (상대계정 조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    // ed_opntAcctCd.text  = rtnList[0];   //상대계정코드
    // txt_opntAcctNm.value = rtnList[1];  //상대계정명
    // ed_opntAcctCd.hidVal = rtnList[0];  // 히든값

    ed_opntAcctCd.setValue(rtnList[0]); // 상대계정코드
    ed_opntAcctNm.setValue(rtnList[1]); // 상대계정명
    scwin.ed_opntAcctCd_hidVal = rtnList[0]; // 히든값
  } else {
    ed_opntAcctCd.setValue("");
    ed_opntAcctNm.setValue("");
    scwin.ed_opntAcctCd_hidVal = "";
  }
};

//-------------------------------------------------------------------------
// udc_reqClntNo_callBackFunc (요청거래처조회 팝업 callBackFunc) (10)
//-------------------------------------------------------------------------
scwin.udc_reqClntNo_callBackFunc = function (rtnList) {
  console.log("▲ udc_reqClntNo_callBackFunc (요청거래처조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_reqClntNo.setValue(rtnList[0]); // 요청거래처코드
    ed_reqClntNm.setValue(rtnList[1]); // 요청거래처명
  } else {
    ed_reqClntNo.setValue(""); // 요청거래처코드
    ed_reqClntNm.setValue(""); // 요청거래처명
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//  flag : 신규 추가. 어떤 팝업을 호출했는지 구분
//  1:발행부서,3:계정,4:귀속부서,6:카드번호,7:사업자,8:사원,9:정산처,10:거래처,11:상대계정14:차량별실적,15:요청거래처
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList, flag) {
  console.log("=== f_resultPopEd (팝업결과)   flag [" + flag + "]  1:발행부서,3:계정,4:귀속부서,6:카드번호,7:사업자,8:사원,9:정산처,10:거래처,11:상대계정14:차량별실적,15:요청거래처)");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫았을 때
      // 2026-02-02 : 히든값 분기처리. full set
      switch (flag) {
        case '1':
          scwin.ed_slipAcctDeptCd_hidVal = "";
          break;
        // 발행부서
        case '2':
          scwin.ed_acctCd_hidVal = "";
          break;
        // 계정
        case '3':
          scwin.ed_acctDeptCd_hidVal = "";
          break;
        // 귀속부서
        case '4':
          scwin.ed_mgntClntNo_hidVal = "";
          break;
        // 거래처
        case '5':
          scwin.ed_mgntEmpNo_hidVal = "";
          break;
        // 사원번호
        case '9':
          scwin.ed_opntAcctCd_hidVal = "";
          break;
        // 상대계정
        case '10':
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
      case '5':
        scwin.ed_mgntEmpNo_hidVal = rtnList[0];
        break;
      // 사원번호
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
      case '5':
        scwin.ed_mgntEmpNo_hidVal = "";
        break;
      // 사원번호
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
// 팝업체크 - 코드값 변경시 자동검색  @@
//   flag : 팝업 플래그
//-------------------------------------------------------------------------
//   1:발행부서,2:계정,3:귀속부서,4:거래처,5:사번,8:사업자번호,9:상대계정,10:요청거래처
scwin.f_checkPopEd = async function (strCd, strNm, flag) {
  console.log("===== f_checkPopEd (팝업체크  srtCd[" + strCd.getValue() + "] strNm[" + strNm.getValue() + "] flag[ " + flag + " ]  1:발행부서,2:계정,3:귀속부서,4:거래처,5:사번,8:사업자번호,9:상대계정,10:요청거래처");

  // console.log("   f_resultPopEd - ed_slipAcctDeptCd_hidVal ["+ scwin.ed_slipAcctDeptCd_hidVal +"]");

  if (strCd == "" || strCd == null) {
    // console.log("  strCd == null");

    if (strNm.getValue().trim() != "") {
      // console.log("  strNm.getValue != null");

      // ed_slipAcctDeptCd.text="";
      ed_slipAcctDeptCd.setValue("");

      // async 처리 : 계정
      let rtnp = await scwin.f_openPopUp(flag, 'T');
    }
  } else
    // strCd Not Null
    {
      // console.log("  strCd != null");

      // console.log("   strCd.getValue() ["+strCd.getValue()+"]  ed_slipAcctDeptCd_hidVal ["+ scwin.ed_slipAcctDeptCd_hidVal +"]");

      // if (strCd.getValue().trim() == strCd.hidVal) return; //return;
      if (flag == '1' && strCd.getValue().trim() == scwin.ed_slipAcctDeptCd_hidVal ||
      // 발행부서
      flag == '2' && strCd.getValue().trim() == scwin.ed_acctCd_hidVal ||
      // 계정
      flag == '3' && strCd.getValue().trim() == scwin.ed_acctDeptCd_hidVal ||
      // 귀속부서
      flag == '4' && strCd.getValue().trim() == scwin.ed_mgntClntNo_hidVal ||
      // 거래처
      flag == '5' && strCd.getValue().trim() == scwin.ed_mgntEmpNo_hidVal ||
      // 사원번호
      flag == '9' && strCd.getValue().trim() == scwin.ed_opntAcctCd_hidVal ||
      // 상대계정
      flag == '10' && strCd.getValue().trim() == scwin.ed_reqClntNo_hidVal // 요청거래처
      ) {
        // KYU_TEST : 히든 비교시 코드가 null 이 아니어야 함. (코드 null 일 때 명 null 처리)
        // if ( strCd.getValue() != "" ) {
        if (strCd.getValue() != "" && strNm.getValue() != "") {
          console.log("  -- 코드와 히든이 똑같아요 (코드,코드명 다 있음) 리턴~~~~~");
          return; // 리턴 안함. KYU_TEST 일단 리턴으로 변경
        }
      }

      // 명초기화
      strNm.setValue("");

      //		strCd.hidVal="";

      // 히든값 초기화
      switch (flag) {
        case '1':
          scwin.ed_slipAcctDeptCd_hidVal = "";
          break;
        // 발행부서
        case '2':
          scwin.ed_acctCd_hidVal = "";
          break;
        // 계정
        case '3':
          scwin.ed_acctDeptCd_hidVal = "";
          break;
        // 귀속부서
        case '4':
          scwin.ed_mgntClntNo_hidVal = "";
          break;
        // 거래처
        case '5':
          scwin.ed_mgntEmpNo_hidVal = "";
          break;
        // 사원번호
        case '9':
          scwin.ed_opntAcctCd_hidVal = "";
          break;
        // 상대계정
        case '10':
          scwin.ed_reqClntNo_hidVal = "";
          break;
        // 요청거래처
        default:
          break;
      }

      // if(strCd.text.trim()!="") {
      // 	f_openPopUp(flag,'T');

      if (strCd.getValue().trim() != "") {
        console.log("-----------------");
        // async 처리 : 계정
        let rtnp = await scwin.f_openPopUp(flag, 'T');
      }
    }
};

// @@ ====== 이벤트 - 팝업 ======================================================================//

//-------------------------------------------------------------------------
// 발행부서코드 focus out (1)
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCd_onblurCodeEvent = async function (e) {
  // <!-- 공통코드 -->
  // language=JavaScript for=ed_slipAcctDeptCd event=OnKillFocus()>
  // 발행부서 값 변경시 팝업에서 자동검색하게 처리     
  scwin.f_checkPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, '1');

  // 발행부서 값이 변경되면, 하단 그리드 값들을 전부 삭제하고, 행추가를 새로한다.  -- 2012-10-08 김석
  // 이유 하단 입력값들의 활성화 비활성화여부가, 발행부서의 값에 따라 틀리기 때문, 

  // 2개이상 전표입력이력이 있다면, 경고메세지 출력
  if (ds_slipcontents.getTotalRow() >= 2) {
    await $c.win.alert($p, "대체전표입력 중 발행부서를 변경하였으므로, 전표분개내역을 삭제합니다.");
  }
  // f_addRow 도 같이
  // 기준상태값 변경
  scwin.state = "Y";
  scwin.delflag = "Y";

  // 데이터삭제
  // ds_slipcontents.DeleteAll();
  ds_slipcontents.setJSON([]);

  // 신규행 입력 
  await scwin.f_AddRow();
};

//-------------------------------------------------------------------------
// 귀속부서 focus out (1)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = async function (e) {
  console.log("----- udc_acctDeptCd_onblurCodeEvent (귀속부서 focus out)");

  // language=JavaScript for=ed_acctDeptCd event=OnKillFocus()>
  // 정산처 초기화
  let rtnx = await scwin.f_resetSettleNo();

  // KYU_TEST
  scwin.f_checkPopEd(ed_acctDeptCd, ed_acctDeptNm, '3'); // 귀속부서
};

//-------------------------------------------------------------------------
// 부가세관리부서 focus out
//-------------------------------------------------------------------------
scwin.udc_vatDeclarAcctDeptCd_onblurCodeEvent = async function (e) {
  // language=JavaScript for=ed_vatDeclarAcctDeptCd event=OnKillFocus()>
  await scwin.f_VatDeclarAcctDeptCd(3);
};

//-------------------------------------------------------------------------
// 계정 focus out (2)
//-------------------------------------------------------------------------
scwin.udc_acctCd_onblurCodeEvent = async function (e) {
  console.log("--- #### udc_acctCd_onblurCodeEvent (계정 focus out)  ed_acctCd [" + ed_acctCd.getValue() + "] ----------------------");

  //  <!-- 계정 -->
  // language=JavaScript for=ed_acctCd event=OnKillFocus()>

  if (ACConstants.CO_CD_DONGBU == scwin.vCoCd) {
    // 결과값 가지고 왔을때 원)세금과공과-과징금(4203417), 판)세금과공과-과징금(5001917) 계정일 경우
    // 잡손실(6120220)계정으로 작성해 주시기 바랍니다. 라는 메시지 출력해 준다.
    // 본사만
    if (ed_acctCd.getValue() == '4203417') {
      await $c.win.alert($p, "원)세금과공과-과징금(4203417) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
      ed_acctCd.setValue("");
      ed_acctNm.setValue("");
      scwin.ed_acctCd_hidVal = "";
      return;
    } else if (ed_acctCd.getValue() == '5001917') {
      await $c.win.alert($p, "판)세금과공과-과징금(5001917) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
      ed_acctCd.setValue("");
      ed_acctNm.setValue("");
      scwin.ed_acctCd_hidVal = "";
      return;
    }
  }

  // 정산처 초기화
  let rtnx = await scwin.f_resetSettleNo();

  // 계정코드 존재시 관리명 초기화
  if (ed_acctCd.getValue().trim() == "") ed_mgntNm.setValue("");
  console.log("  계정 focus out : 111  계정 팝업 체크 이전 -------------------------------------- ed_acctCd [" + ed_acctCd.getValue() + "]");

  // KYU_TEST : async 로 변환
  // f_checkPopEd(ed_acctCd,txt_acctNm,'2');
  // let rtnp = await scwin.f_checkPopEd(ed_acctCd,ed_acctNm,'2');  // 계정

  // debugger;
  let rtn = await scwin.f_checkPopEd(ed_acctCd, ed_acctNm, '2'); // 계정

  console.log("  계정 focus out : 222  계정 팝업 체크 후 -------------------------------------- ed_acctCd [" + ed_acctCd.getValue() + "]");

  // KYU_ORDER : 계정 팝업 callBack 으로 이동

  // KYU_TEST : false 가 와도 그냥 진행
  let rtn2 = await scwin.f_AcctCdCheck();
  console.log("  f_AcctCdCheck 후 ----------------- isSubCompany  [" + scwin.isSubCompany + "]  lc_drcrClsCd [" + lc_drcrClsCd.getValue() + "]  ed_acctCd [" + ed_acctCd.getValue() + "]");
  if (lc_drcrClsCd.getValue() == "C" && ed_acctCd.getValue() == "1110530") {
    if (scwin.isSubCompany == true) {
      lc_adjmClsCd.setValue(-1); // 정산방법 : 없음
      // $c.gus.cfDisableObjects([btn_adjmClsCd]);

      // KYU_ISSUE : 2026-04-03 - 기존에 버튼만 비활성으로 원복
      // $c.gus.cfDisableObjects([lc_adjmClsCd, btn_adjmClsCd]);
      // console.log("  ==--== 비활성(정산방법(NEW), 정산방법돋보기)");

      $c.gus.cfDisableObjects($p, [btn_adjmClsCd]);
      console.log("  ==--== 비활성(정산방법돋보기)");
    } else {
      lc_adjmClsCd.setValue(ACConstants.ADJM_MTHDCD_SUSPAY); // 정산방법(가지급금) : 4

      // KYU_ISSUE : 기존에 버튼만 활성 - 활성화되면 안됨
      // $c.gus.cfEnableObjects([lc_adjmClsCd, btn_adjmClsCd]);
      // console.log("  ==--== 활성(정산방법(NEW), 정산방법돋보기)");
    }
  } else {
    // KYU_ISSUE : 2026-04-03 - 기존에 버튼만 비활성으로 원복
    // $c.gus.cfDisableObjects([lc_adjmClsCd, btn_adjmClsCd]);
    // console.log("  ==--== 비활성(정산방법(NEW), 정산방법돋보기)");

    $c.gus.cfDisableObjects($p, [btn_adjmClsCd]);
    console.log("  ==--== 비활성(정산방법돋보기)");
  }
  console.log("  ▣ ▣  계정 focus out - f_checkSettle");

  //--------------------------------------------------------------
  //채권채무정리를 위한 추가 2013.10.24
  //--------------------------------------------------------------
  let rtn1 = await scwin.f_checkSettle(ed_acctCd.getValue(), lc_drcrClsCd.getValue());
  console.log("  ▣ ▣  계정 focus out - f_checkSettle 결과  rtn1 [" + rtn1 + "]");
  if (rtn1 && ed_acctCd.getValue().trim() != "") {
    console.log("    ------- 계정[" + ed_acctCd.getValue() + "] 널 아님 - 정리대상");

    //정리대상인경우
    $c.gus.cfEnableObjects($p, [btn_setlMthd]);
    // cfDisableObjects([txt_refNo, txt_mgntNm,txt_mgntNo, txt_method,txt_settleClsCd,]);
    $c.gus.cfDisableObjects($p, [ed_refNo, btn_resetSettleNo, btn_setlMthd, ed_mgntNm, ed_mgntNo]);
    console.log("  ==--== 활성(   지급채권번호돋보기)");
    console.log("  ==--== 비활성( 지급채권번호(refNo),관리명,  관리번호(뒤)  )  전역제외 : 정리방법표시(txt_method), 정리구분코드 (txt_settleClsCd)");
  } else {
    console.log("    ------- 계정[" + ed_acctCd.getValue() + "] 널 - 정리대상 아님 !!!");
    //alert("정리대상아님!!!");
    //정리대상이 아닌경우 popup에서 내려받은값 초기화
    if (scwin.txt_settleClsCd != "0" || scwin.txt_settleClsCd != "") {
      scwin.f_initSettle(ds_slipcontents.getRowPosition(), '2');
    }
    $c.gus.cfEnableObj($p, ed_mgntNo, true);
    // $c.gus.cfDisableObjects([txt_mgntNm,txt_refNo,img_setlMthd,  txt_method,txt_settleClsCd]);
    $c.gus.cfDisableObjects($p, [ed_mgntNm, ed_refNo, btn_resetSettleNo, btn_setlMthd]);
    console.log("  ==--== 활성(   관리번호(뒤)  )");
    console.log("  ==--== 비활성( 관리명(앞), 지급채권번호(refNo),지급채권번호재조회,지급채권번호돋보기 )  전역제외 : 정리방법표시(txt_method),정리구분코드 (txt_settleClsCd)");
  }

  // 세금계산서 일자 초기화
  ica_taxinvcDt.setValue("");
  console.log("--- ## udc_acctCd_onblurCodeEvent (계정 focus out)  END");
};

//-------------------------------------------------------------------------
// 거래처 focus out (4)
//-------------------------------------------------------------------------
scwin.udc_mgntClntNo_onblurCodeEvent = async function (e) {
  // language=JavaScript for=ed_mgntClntNo event=OnKillFocus()>
  // 정산처 초기화
  // 정리참조번호 세팅후 삭제시 이벤트 처리
  let rtn = await scwin.f_resetSettleNo();
  scwin.f_checkPopEd(ed_mgntClntNo, ed_mgntClntNm, '4');
};

//-------------------------------------------------------------------------
// 요청거래처 focus out (10)
//-------------------------------------------------------------------------
scwin.udc_reqClntNo_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_reqClntNo event=OnKillFocus()>
  scwin.f_checkPopEd(ed_reqClntNo, ed_reqClntNm, '10');
};

//-------------------------------------------------------------------------
// 사원 focus out (5)
//-------------------------------------------------------------------------
scwin.udc_mgntEmpNo_onblurCodeEvent = function (e) {
  // language=JavaScript for=ed_mgntEmpNo event=OnKillFocus()>
  scwin.f_checkPopEd(ed_mgntEmpNo, ed_mgntEmpNm, '5');
};

//-------------------------------------------------------------------------
// 사업자번호 focus out (4)
//-------------------------------------------------------------------------
scwin.udc_crn_onblurCodeEvent = function (e) {
  console.log("----- udc_crn_onblurCodeEvent (사업자번호 focus out)");
  // language=JavaScript for=ed_crn event=OnKillFocus()>
  // f_openPopUp(8, ed_crn.text, txt_crnNm.value,'F','T');

  // KYU_NEW : 기존 이상
  // scwin.f_checkPopEd(ed_crn,ed_crnNm,'8');  // 8 번이 없슴
  scwin.f_openPopUp('8', 'F', 'T');
  // scwin.f_openPopUp('8', ed_crn.getValue(), ed_crnNm.value,'F','T');
};

//-------------------------------------------------------------------------
// 사업자명 focus out
//-------------------------------------------------------------------------
scwin.udc_crn_onblurNameEvent = function (e) {
  // scwin.SetCrnNm();  - 없슴!
};

// @@ ====== 이벤트 - 로직 ===================================================================== //

//-------------------------------------------------------------------------
//  계정조회시화면셋팅  @@ @
//  r_mgntCd     - 관리번호
//  r_clntMgntYn - 거래처여부
//  r_termMgntYn - 기간관리여부
//  r_empMgntYn  - 사원관리여부
//  r_mgntNm     - 관리사원명
//  r_dtMgntYn   - 일자관리여부
//  r_payAcctCd  - 지급계정코드
//-------------------------------------------------------------------------
scwin.f_AcctCd = async function (r_mgntCd, r_clntMgntYn, r_termMgntYn, r_empMgntYn, r_mgntNm, r_dtMgntYn, r_payAcctCd) {
  console.log("=== ▷▷▷ f_AcctCd (계정조회시화면셋팅)  row [" + ds_slipcontents.getRowPosition() + "] 관리번호[" + r_mgntCd + "] 거래처[" + r_clntMgntYn + "] 기간[" + r_termMgntYn + "] 사원[" + r_empMgntYn + "][" + r_mgntNm + "] 일자[" + r_dtMgntYn + "] 지급계[" + r_payAcctCd + "]");

  // txt_termMgntYn.value = r_termMgntYn;
  // txt_clntMgntYn.value = r_clntMgntYn;
  // txt_empMgntYn.value  = r_empMgntYn;
  // txt_dtMgntYn.value   = r_dtMgntYn;
  // txt_payAcctCd.value  = r_payAcctCd;

  scwin.txt_termMgntYn = r_termMgntYn; // 기간관리여부
  scwin.txt_clntMgntYn = r_clntMgntYn; // 거래처여부
  scwin.txt_empMgntYn = r_empMgntYn; // 사원관리여부
  scwin.txt_dtMgntYn = r_dtMgntYn; // 일자관리여부
  scwin.txt_payAcctCd = r_payAcctCd; // 지급계정코드

  // KYU_NEW : 바인딩 처리
  var row = ds_slipcontents.getRowPosition();
  ds_slipcontents.setCellData(row, "clntMgntYn", scwin.txt_clntMgntYn); // 거래처여부
  ds_slipcontents.setCellData(row, "termMgntYn", scwin.txt_termMgntYn); // 기간관리여부
  ds_slipcontents.setCellData(row, "empMgntYn", scwin.txt_empMgntYn); // 사원관리여부
  ds_slipcontents.setCellData(row, "dtMgntYn", scwin.txt_dtMgntYn); // 일자관리여부
  ds_slipcontents.setCellData(row, "payAcctCd", scwin.txt_payAcctCd); // 지급계정코드

  // debugger;

  // console.log("  f_AcctCd - 111");

  if (r_mgntCd != "" && r_mgntCd != "0" || r_mgntNm != "") {
    console.log(" --------- r_mgntCd  널,0 아님 || r_mgntNm  NULL 아님");
    ed_mgntNm.setValue(r_mgntNm);
    // ed_mgntNo.validExp="관리번호:no:maxByteLength=20";
    $c.gus.cfEnableObj($p, ed_mgntNo, true);
    $c.gus.cfEnableObj($p, ed_mgntNm, false);
    console.log("  ==--== 활성 ( 관리번호(뒤) )  비활성 (관리명(앞))");
    console.log("  ▣ ▣  f_AcctCd - f_checkSettle 호출");

    //채권채무정리를 위한 추가 2013.10.24
    let rtn1 = await scwin.f_checkSettle(ed_acctCd.getValue(), lc_drcrClsCd.getValue()); // ds_commonCode  조회

    console.log("  ▣ ▣  f_AcctCd - f_checkSettle  rtn1 [" + rtn1 + "]");
    if (rtn1 && ed_acctCd.getValue().trim() != "") {
      $c.gus.cfEnableObjects($p, [btn_resetSettleNo, btn_setlMthd]);
      // cfDisableObjects([txt_refNo,txt_mgntNm,txt_method,txt_settleClsCd,txt_mgntNo]);

      $c.gus.cfDisableObjects($p, [ed_refNo, ed_mgntNm, ed_mgntNo]);
      console.log("  ==--== 활성 (채권번호돋보기)  비활성 (참조번호,관리명,   관리번호)");
    } else {
      //정리대상이 아닌경우 popup에서 내려받은값 초기화
      if (scwin.txt_settleClsCd != "0" || scwin.txt_settleClsCd != "") {
        console.log("  ▼▽ ---- ---- f_AcctCd_초기화 진행!  txt_settleClsCd (정리구분) [" + scwin.txt_settleClsCd + "] != null");
        scwin.f_initSettle(ds_slipcontents.getRowPosition(), '2');
      }
      $c.gus.cfEnableObj($p, ed_mgntNo, true);
      // cfDisableObjects([txt_mgntNm,txt_refNo,txt_method,img_setlMthd,txt_settleClsCd]);
      $c.gus.cfDisableObjects($p, [ed_mgntNm, ed_refNo, btn_resetSettleNo, btn_setlMthd]);
      console.log("  ==--== 활성 (관리번호)  비활성 (참조번호,관리명,채권번호돋보기)");
    }
  } else {
    console.log(" --------- else ~~~~");
    ed_mgntNo.setValue("");
    ed_mgntNm.setValue("");

    // txt_mgntNo.validExp="관리번호:no:maxByteLength=20"
    $c.gus.cfEnableObj($p, ed_mgntNo, false);
    $c.gus.cfEnableObj($p, ed_mgntNm, false);
    console.log("  ==--== 활성 (관리명(앞),  관리번호(뒤))");

    //채권채무정리를 위한 추가 2013.10.24
    let rtn2 = await scwin.f_checkSettle(ed_acctCd.getValue(), lc_drcrClsCd.getValue()); // ds_commonCode  조회

    // console.log("          ------ rtn2  ["+rtn2+"]");

    if (rtn2 && ed_acctCd.getValue().trim() != "") {
      $c.gus.cfEnableObjects($p, [btn_resetSettleNo, btn_setlMthd]);
      console.log("  ==--== 활성 (채권번호돋보기) - f_AcctCd");
    } else {
      $c.gus.cfDisableObjects($p, [btn_resetSettleNo, btn_setlMthd]);
      console.log("  ==--== 비활성 (채권번호돋보기)");
    }

    // cfDisableObjects([txt_refNo, txt_method,txt_settleClsCd]);
    $c.gus.cfDisableObjects($p, [ed_refNo, btn_resetSettleNo, btn_setlMthd]);
    console.log("  ==--== 비활성 (참조번호-지급/채권번호)");
  }

  // 기간관리여부
  if (r_termMgntYn == "1") {
    // ed_mgntTermStDt.validExp="관리기간:yes:date=YYYYMMDD"
    // ed_mgntTermEndDt.validExp="관리기간:yes:date=YYYYMMDD"
    // cfEnableObjects([ed_mgntTermStDt, ed_mgntTermEndDt, img_mgntTermStDt, img_mgntTermEndDt]);
    $c.gus.cfEnableObjects($p, [ed_mgntTermStDt, ed_mgntTermEndDt, udc_mgntTermDt]);
    console.log("  ==--== 기간관리=1  활성 (관리기간from,관리기간to)");
  } else {
    ed_mgntTermStDt.setValue("");
    ed_mgntTermEndDt.setValue("");
    // ed_mgntTermStDt.validExp="관리기간:no:date=YYYYMMDD"
    // ed_mgntTermEndDt.validExp="관리기간:no:date=YYYYMMDD"
    // cfDisableObjects([ed_mgntTermStDt, ed_mgntTermEndDt, img_mgntTermStDt, img_mgntTermEndDt]);
    $c.gus.cfDisableObjects($p, [ed_mgntTermStDt, ed_mgntTermEndDt, udc_mgntTermDt]);
    console.log("  ==--== 기간관리!=1  비활성 (관리기간from,관리기간to)");
  }

  // 거래처여부  @@
  if (r_clntMgntYn == "1") {
    // ed_mgntClntNo.validExp="거래처:yes:format=000000"
    // cfEnableObjects([ed_mgntClntNo, img_mgntClntNo]);
    $c.gus.cfEnableObjects($p, [ed_mgntClntNo, btn_mgntClntNo]);
    console.log("  ==--== r_clntMgntYn=1  활성 (   거래처번호,거래처돋보기)");
  }
  // 20110704 거래처여부 예외처리 by kimseok
  // 예외적 상황으로, 계정이 가지급 에 해당하는 경우는 거래처 항목을 활성화
  // 가지급 경우( 계정번호:명칭 1110530:단기대여금-업무가지급금(일반),1110531:단기대여금-업무가지급금(급여), 1110540:단기대여금-매표가지급금 )
  else if (ed_acctCd.getValue() == '1110530' || ed_acctCd.getValue() == '1110531' || ed_acctCd.getValue() == '1110540') {
    $c.gus.cfEnableObjects($p, [ed_mgntClntNo, btn_mgntClntNo, ed_mgntEmpNo]);
    console.log("  ==--== 계정이 가지급 - 활성 (거래처번호,거래처돋보기,거래처명)");
  } else {
    // 거래처 초기화
    ed_mgntClntNo.setValue("");
    ed_mgntClntNm.setValue("");
    scwin.ed_mgntClntNo_hidVal = "";

    // ed_mgntClntNo.validExp="거래처:no:format=000000"
    $c.gus.cfDisableObjects($p, [ed_mgntClntNo, btn_mgntClntNo]);
    console.log("  ==--== 거래처!=1  비활성 (거래처번호,거래처돋보기))");
  }

  // 사원관리여부
  if (r_empMgntYn == "1") {
    ed_mgntEmpNo.validExp = "사원번호:yes:format=000000";
    $c.gus.cfEnableObjects($p, [ed_mgntEmpNo, btn_mgntEmpNo]);
    console.log("  ==--== 사원관리=1  활성 ( 사원번호,사원번호돋보기)");
  }
  // 20110704 거래처여부 예외처리 by kimseok
  // 예외적 상황으로, 계정이 가지급 에 해당하는 경우는 사원번호  항목을 활성화
  // 가지급 경우( 계정번호:명칭 1110530:단기대여금-업무가지급금(일반),1110531:단기대여금-업무가지급금(급여), 1110540:단기대여금-매표가지급금 )
  else if (ed_acctCd.getValue() == '1110530' || ed_acctCd.getValue() == '1110531' || ed_acctCd.getValue() == '1110540') {
    $c.gus.cfEnableObjects($p, [ed_mgntEmpNo, btn_mgntEmpNo]);
    console.log("  ==--== 계정이 가지급(1110530, 1110531, 1110540) - 활성 ( 사원번호,사원번호돋보기)");
  } else {
    ed_mgntEmpNo.setValue("");
    ed_mgntEmpNm.setValue("");
    scwin.ed_mgntClntNo_hidVal = "";

    // ed_mgntEmpNo.validExp="사원번호:no:format=000000"
    $c.gus.cfDisableObjects($p, [ed_mgntEmpNo, btn_mgntEmpNo]);
    console.log("  ==--== 사원관리!=1  비활성 (사원번호,사원번호 돋보기)");
  }

  // 일자관리여부
  if (parseInt(r_dtMgntYn) == "1") {
    // ed_mgntDt.validExp="관리일자:yes:date=YYYYMMDD";
    // cfEnableObjects([ed_mgntDt, img_mgntDt]);
    $c.gus.cfEnableObjects($p, [ica_mgntDt]);
    console.log("  ==--== 일자관리=1  활성 (관리일자)");
  } else {
    ica_mgntDt.setValue("");
    // ed_mgntDt.validExp="관리일자:no:date=YYYYMMDD";
    // cfDisableObjects([ed_mgntDt, img_mgntDt]);
    $c.gus.cfDisableObjects($p, [ica_mgntDt]);
    console.log("  ==--== 일자관리!=1  비활성 (관리일자)");
  }

  // 1110410 외상매출금 && 차대구분=차변(D)
  if (ed_acctCd.getValue() == ACConstants.ACCTCD_TRUST_SELL && lc_drcrClsCd.getValue() == ACConstants.DEBIT) {
    $c.gus.cfEnableObjects($p, [cbx_recvProcYn]);
    console.log("  ==--== 1110410 외상매출금 && 차대구분=차변(D)  활성 (채권체크박스)");
  } else {
    $c.gus.cfDisableObjects($p, [cbx_recvProcYn]);
    console.log("  ==--== ! ( 1110410 외상매출금 && 차대구분=차변(D) )   비활성 (채권체크박스)");
  }
  // debugger;
  // 지급계정셋팅
  let rtn = await scwin.f_PayYn(row);
  if (!rtn) return false;
  console.log("=== ▷▷▷ f_AcctCd (계정조회시화면셋팅)  END ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  return true;
};

//-------------------------------------------------------------------------
// 지급처리여부셋팅
//-------------------------------------------------------------------------
scwin.f_PayYn = async function (row) {
  // var i = ds_slipcontents.getRowPosition();
  var i = row;
  console.log("=== === f_PayYn (지급처리 세팅)   row [" + i + "]  txt_payAcctCd (지급계정) [" + scwin.txt_payAcctCd + "]");

  // 지급처리계정 추가(20060411)
  // 차대구분 대변(C)
  // if(scwin.txt_payAcctCd != "" && lc_drcrClsCd.getValue()==ACConstants.CREDIT && ed_acctCd.getValue() != "1110710"){
  if (ds_slipcontents.getCellData(i, "payAcctCd") != "" && ds_slipcontents.getCellData(i, "drcrClsCd") == ACConstants.CREDIT && ds_slipcontents.getCellData(i, "acctCd") != "1110710") {
    $c.gus.cfEnableObjects($p, [cbx_payProcYn]);
  } else if (ds_slipcontents.getCellData(i, "payAcctCd") != "" && ds_slipcontents.getCellData(i, "drcrClsCd") == ACConstants.DEBIT && ds_slipcontents.getCellData(i, "acctCd") == "1110710") {
    $c.gus.cfEnableObjects($p, [cbx_payProcYn]);
    console.log("  ==--== payAcctCd [" + ds_slipcontents.getCellData(i, "payAcctCd") + "] !=널 && 차변(D) && 계정=1110710(미수금-일반)    - 활성 (지급체크박스)");
  } else {
    // chb_payProcYn.checked=false;
    // cbx_payProcYn.checkAll(false);
    cbx_payProcYn.setValue(0);
    ds_slipcontents.setCellData(i, "payProcYn", 0);
    console.log("  --==-- 지급체크박스 해제  ????");

    // cfDisableObjects([chb_payProcYn,ed_reqDt,lc_reqPayMthdCd,ed_draftDdCntCd,ed_taxinvcDt,img_reqDt,img_taxinvcDt, ed_paymentPrd,img_paymentPrd]);
    $c.gus.cfDisableObjects($p, [cbx_payProcYn, ica_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd, ica_taxinvcDt, ica_paymentPrd]);
    console.log("  ==--== 비활성 (지급체크박스, 요청일자,지급방법,어음일수,세금계산서일자, 지로납부기한)");
  }

  //BIDC 인경우
  if (scwin.vCoCd == "023") {
    //외상매입금/미지급금 대변일 경우
    if ((ds_slipcontents.getCellData(i, "acctCd") == "2100110" || ds_slipcontents.getCellData(i, "acctCd") == "2100410") && ds_slipcontents.getCellData(i, "drcrClsCd") == ACConstants.CREDIT) {
      // chb_payProcYn.checked=true;//지급 자동체크
      // cbx_payProcYn.checkAll(true);
      cbx_payProcYn.setValue(1);
      ds_slipcontents.setCellData(i, "payProcYn", 1);
      console.log("  f_CheckPayYn  --==-- 지급체크박스 체크인 !!!!");

      // FM018
      // lc_reqPayMthdCd.setSelectedIndex(0);  // 지급방법
      ds_slipcontents.setCellData(i, "reqPayMthdCd", "20"); // 경비이체 - 0번째

      // 미지급
      console.log("   f_PayYn - f_CheckPayYn 호출 (023 BIDC)");
      let rtn = await scwin.f_CheckPayYn();
    }
  }
  console.log("=== f_PayYn (지급처리여부)   END");
  return true;
};

//-------------------------------------------------------------------------
// 대체전표입력화면에서 1110530-업무가지급발생(차변)차단,
// 가지급신청(가지급선급금입력) 화면에서 처리하기로 함 - 2014 08 05 이경희
//-------------------------------------------------------------------------
scwin.f_AcctCdCheck = async function () {
  if (scwin.isSubCompany == false) {
    if (lc_drcrClsCd.getValue() == "D" && ed_acctCd.getValue() == "1110530") {
      await $c.win.alert($p, "[1110530] 단기대여금-업무가지급금(일반) 계정을\n[차변]으로 선택할 수 없습니다. \n가지급금선급금입력 화면에서 신청하세요.");
      ed_acctCd.setValue("");
      ed_acctNm.setValue("");
      scwin.ed_acctCd_hidVal = "";
      ed_mgntNm.setValue("");
      scwin.txt_payAcctCd = ""; // 지급계정

      // KYU_NEW : 바인딩 처리
      var row = ds_slipcontents.getRowPosition();
      ds_slipcontents.setCellData(row, "payAcctCd", scwin.txt_payAcctCd); // 지급계정

      ed_acctCd.focus();
      return false;
    }
  }
  if (scwin.acctDeptCd != "01185" && scwin.acctDeptCd != "00048") {
    //2020.01.02 국제영업3팀(01185) 외상매출금 계정 차변 기입
    if (scwin.isSubCompany == false) {
      if (lc_drcrClsCd.getValue() == "D" && ed_acctCd.getValue() == "1110410") {
        await $c.win.alert($p, "[1110410] 외상매출금-일반 계정을\n[차변]으로 선택할 수 없습니다.");
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        scwin.ed_acctCd_hidVal = "";
        ed_mgntNm.setValue("");
        scwin.txt_payAcctCd = "";

        // KYU_NEW : 바인딩 처리
        var row = ds_slipcontents.getRowPosition();
        ds_slipcontents.setCellData(row, "payAcctCd", scwin.txt_payAcctCd); // 지급계정

        ed_acctCd.focus();
        return false;
      }
    }
  }
  return true;
};

//------------------------------------------------------------------------
// 계정코드, 차/대변을 가지고 채권채무선수금 정리대상 계정인지 체크하는 함수
// 2013.10.29 hurrah015
//------------------------------------------------------------------------
scwin.f_checkSettle = async function (r_acctCd, r_drcrClsCd) {
  console.log("  ▣▣  f_checkSettle (채권채무선수금 정리대상 계정여부 체크)  acct[" + r_acctCd + "] drcr[" + r_drcrClsCd + "]");
  ds_commonCode.setEmptyValue();
  ds_settleAccount.setJSON([]);

  // ds_settleAccount.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC"
  // 			     		+ "&queryId=retrieveSettleInfo&param1="+r_acctCd
  // 			     		+"&param2="+r_drcrClsCd
  // 				 		;
  // ds_settleAccount.Reset();

  const strParam = {
    sysCd: "CommonEBC" // 시스템코드
    ,

    queryId: "retrieveSettleInfo" // 쿼리ID
    ,

    param1: r_acctCd,
    param2: r_drcrClsCd
  };

  //데이터셋에 정보설정
  ds_commonCode.setJSON(strParam);

  // console.log("    settle-112 ---- sbm_checkSettle 실행 이전");
  let e = await $c.sbm.execute($p, sbm_checkSettle);

  // console.log("▷ sbm_checkSettle 후처리");
  // debugger;
  // console.log("    settle-222    ["+e.responseJSON.resultDataSet[0].Code+"]  이게 나오면 sbm 실행된 것임");

  if (e.responseJSON.resultDataSet[0].Code != 0) {
    console.log("   f_checkSettle - sbm_checkSettle 오류 !!!");
    return;
  }
  if (e.responseJSON.GAUCE) {
    ds_settleAccount.setJSON(e.responseJSON.GAUCE);
  }

  // console.log("    settle-333    ds_settleAccount 총건수 ["+ds_settleAccount.getTotalRow()+"]");
  // console.log("  ds_settleAccount (0) col1 ["+ds_settleAccount.getCellData(0,"col1") +"]");

  // KYU_TEST : AsIs undefined --> TOBE null
  // if(ds_settleAccount.NameValue(1,"col1") == "N/A" || typeof(ds_settleAccount.NameValue(1,"col1")) == "undefined"){
  if (ds_settleAccount.getCellData(0, "col1") == "N/A" || typeof ds_settleAccount.getCellData(0, "col1") == "undefined" || $c.gus.cfIsNull($p, ds_settleAccount.getCellData(0, "col1"))) {
    scwin.txt_settleClsCd = "0"; // 정리구분
    scwin.txt_method = ""; // 지급수단

    console.log("    정리대상 아님   txt_settleClsCd (정리구분) [" + scwin.txt_settleClsCd + "]  txt_method [" + scwin.txt_method + "]");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "settleClsCd", scwin.txt_settleClsCd); //정리구분 셋팅

    console.log("  ▣▣  f_checkSettle END (false)  정리구분 = 0, 지급수단 = null   return false  ▣▣");

    // 오류 발생
    return false;
  } else {
    scwin.txt_settleClsCd = ds_settleAccount.getCellData(0, "col3");
    scwin.txt_method = "채권정리"; // 지급수단

    console.log("    정리대상임 !!  txt_settleClsCd (정리구분) [" + scwin.txt_settleClsCd + "]  txt_method [" + scwin.txt_method + "]");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "settleClsCd", scwin.txt_settleClsCd); //정리구분 셋팅
  }
  console.log("  ▣▣  f_checkSettle END (return true)  정리구분 = 0아님, 지급수단 = 채권정리  ▣▣");
  return true;
};

//-------------------------------------------------------------------------
// 정산번호 초기화 (지급/채권번호 휴지통 클릭)
//-------------------------------------------------------------------------
scwin.f_resetSettleNo = async function (e) {
  console.log("=== f_resetSettleNo (정산번호 초기화)");

  // 정리참조번호 세팅후 삭제시 이벤트 처리
  if (ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "stlOutbrNo") != "") {
    // 정산발생번호

    // 데이터셋 참조번호 초기화
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlOutbrNo", ""); // 정산발생번호
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlSlipNo", ""); // 정산DEBIS전표번호
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlOutbrNo", ""); // 정산발생번호
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlClntNo", ""); // 정산거래처번호
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlClntNm", ""); // 정산거래처명
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlAcctDeptCd", ""); // 정산회계부서코드
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlAcctDeptNm", ""); // 정산회계부서명
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlAcctCd", ""); // 정산계정코드
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlAcctNm", ""); // 정산계정명
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlAmt", ""); // 수금금액
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlRamt", ""); // 정산잔액
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlAmtFcrc", ""); // 정산외화금액
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlRamtFcrc", ""); // 정산잔액(외화)
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlCrcCd", ""); // 정산통화코드
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlExchRt", ""); // 정산환율

    ed_refNo.setValue("");
  }
  return true;
};

//-------------------------------------------------------------------------
// 선급비용 여부 체크 2016.11.02
//-------------------------------------------------------------------------
scwin.f_suspenseCheck = function (FromDt, ToDt, SlipDt) {
  if (SlipDt.substring(0, 6) < FromDt.substring(0, 6)) return true;
  if (FromDt.substring(0, 6) < ToDt.substring(0, 6)) return true;
  return parseInt($c.date.diffDate($p, FromDt, ToDt)) + 1 >= 31;
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
//  통화코드 변경  @@ @
//-------------------------------------------------------------------------
scwin.lc_crcCd_onchange = async function (info) {
  if (scwin.isSlipCopy == true) {
    console.log("  $$$  lc_crcCd_onchange SKIP !!!! (전표복사중)   isSlipCopy [" + scwin.isSlipCopy + "]");
    return;
  }

  // KYU_NEW : 활성/비활성만 변경 - 전표복사후 전표의 기존 환율 유지
  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == ACConstants.KOREA_WON) {
    $c.gus.cfEnableObj($p, ed_amtFcrc, false); // 외화금액 비활성
    $c.gus.cfEnableObj($p, ed_adjustExchRt, false); // 환율 비활성
  } else {
    $c.gus.cfEnableObj($p, ed_amtFcrc, true); // 외화금액 비활성
    $c.gus.cfEnableObj($p, ed_adjustExchRt, true); // 환율 활성
  }
  if (scwin.delflag == "Y") {
    console.log("  $$$  lc_crcCd_onchange SKIP !!!! (삭제중)   delflag [" + scwin.delflag + "]");
    return;
  }

  // KYU_NEW : 전표복사 외화일 때 SKIP(환율유지) & 콤보 변경시 적용 : new row 와 현재 row 가 다르면 스킵 (row 이동)
  var row = ds_slipcontents.getRowPosition();
  if (scwin.g_newRowIndex != ds_slipcontents.getRowPosition()) {
    console.log("  $$$  lc_crcCd_onchange SKIP ! (환율유지 - row 이동)   [" + row + "]  g_newRowIndex [" + scwin.g_newRowIndex + "]");
    return;
  }

  // KYU_TEST : 불필요한 이벤트 금지 - 행추가후 취소할 때 지워지는 row 의 금액을 지정
  //   2026-04-15 : 전표복사후 전표의 기존 환율 유지
  if (scwin.skipRowCheck == true)
    // row 체크 스킵 : new Row, old Row 에서 불필요한 체크 스킵
    {
      console.log("  $$$  lc_crcCd_onchange SKIP !!!! (환율유지 - f_changeRow1 에서 불필요한 이벤트금지)   skipRowCheck [" + scwin.skipRowCheck + "]");
      return;
    }
  console.log("----- lc_crcCd_onchange (통화코드 변경) [" + ds_slipcontents.getRowPosition() + "]  crcCd [" + ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "crcCd") + "]");

  // <!-- 통화코드변경시 -->
  // language=JavaScript for=lc_crcCd event=onSelChange()>

  await scwin.crcCdChange();
};

// KYU_TEST : 2026-04-30 - 전표복사로 생성된 row 는 통화코드 이벤트 스킵. 직접 변경할 때에는 되어야 함
//
//   lc_crcCd_onviewchange 의 경우, 초기에 인식하지 못해서 활성/비활성이 꼬임.
//
// scwin.lc_crcCd_onviewchange = async function (info) {
//     if ( scwin.isSlipCopy == true ) 
//     {
//         console.log("    ▶▷▶▷ lc_crcCd_onviewchange SKIP !!!! (전표복사중)   isSlipCopy ["+scwin.isSlipCopy+"]");
//         return;
//     }

//     // KYU_NEW : 활성/비활성만 변경 - 전표복사후 전표의 기존 환율 유지
//     if( lc_crcCd.getValue()=="" || lc_crcCd.getValue() == ACConstants.KOREA_WON ){
// 		$c.gus.cfEnableObj(ed_amtFcrc, false);              // 외화금액 비활성
// 		$c.gus.cfEnableObj(ed_adjustExchRt, false);         // 환율 비활성
//     }
//     else {
// 		$c.gus.cfEnableObj(ed_amtFcrc, true);              // 외화금액 비활성
// 		$c.gus.cfEnableObj(ed_adjustExchRt, true);         // 환율 활성
//     }

//     // KYU_TEST : 2026-04-30 - 전표복사로 생성된 row 는 통화코드 이벤트 스킵. 직접 변경할 때에는 되어야 함
//     var row = ds_slipcontents.getRowPosition();
//     if ( ds_slipcontents.getCellData(row,"rowOrigin") == "C" ) {
//         console.log("    ▶▶▶▶ lc_crcCd_onviewchange SKIP ! (환율유지 - 전표복사로 생성된 row)   ["+row+"] rowOrigin ["+ds_slipcontents.getCellData(row,"rowOrigin")+"]");
//         return;
//     }

//     // KYU_TEST : 불필요한 이벤트 금지 - 행추가후 취소할 때 지워지는 row 의 금액을 지정
//     //   2026-04-15 : 전표복사후 전표의 기존 환율 유지
//     if ( scwin.skipRowCheck == true )  // row 체크 스킵 : new Row, old Row 에서 불필요한 체크 스킵
//     {  
//         console.log("    ▶▷▶▷ lc_crcCd_onviewchange SKIP !!!! (환율유지 - f_changeRow1 에서 불필요한 이벤트금지)   skipRowCheck ["+scwin.skipRowCheck+"]");
//         return;  
//     }

//     console.log("----- lc_crcCd_onviewchange (통화코드 변경) ["+ds_slipcontents.getRowPosition()+"]  crcCd ["+ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "crcCd")+"]");

// // <!-- 통화코드변경시 -->
// // language=JavaScript for=lc_crcCd event=onSelChange()>

//     await scwin.crcCdChange();
// };

//-------------------------------------------------------------------------
//  통화코드변경시-환율조회  @@ @
//-------------------------------------------------------------------------
scwin.crcCdChange = async function () {
  console.log("=== crcCdChange (통화코드변경시-환율조회)");
  var row = ds_slipcontents.getRowPosition();
  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == ACConstants.KOREA_WON) {
    //KYU_ISSUE :
    //   "" 으로 지정하면 전표복사 후 행이동할 때 "" --> 0 (전표복사는 0으로 세팅) 으로 인식하게 되어 f_fixAmt 에서 금액 0 처리됨
    //   예상 : 외화가 없는 것으로 보여짐

    // ed_adjustExchRt.text = "";                      // 환율  초기화 
    // ed_amtFcrc.text  = "";                          // 외화금액 초기화 
    ed_adjustExchRt.setValue(0); // 환율 초기화
    ed_amtFcrc.setValue(0); // 외화금액 초기화
    $c.gus.cfEnableObj($p, ed_amtFcrc, false); // 외화금액 비활성
    $c.gus.cfEnableObj($p, ed_adjustExchRt, false); // 
    $c.gus.cfEnableObj($p, ed_amt, true); // 금액 활성
    console.log("  ==--== 비활성 (외화금액,환율)  활성 (금액)");

    // ed_amtFcrc.validExp="외화금액:no:maxLength=13"; // 외화금액 validationexperiment 추가
    ed_amtFcrc.setMandatory(false);
  } else {
    console.log("  ▷ 자금의 환율테이블 조회(통화코드,작성일자)");
    // 자금의 환율테이블 조회(통화코드,작성일자)
    // 통화코드가 외화일경우 외화금액 필수

    $c.gus.cfEnableObjects($p, [ed_adjustExchRt]);
    console.log("  ==--== 활성 (환율)");

    //		ed_amtFcrc.validExp="외화금액:yes:notAllowed=0&maxLength=13";  // notAllowed  KYU_TEST
    ed_amtFcrc.setMandatory(true);

    // ds_exchRtSearch.NameValue(1, "crcCd") = ds_slipcontents.NameValue(ds_slipcontents.RowPosition,"crcCd");
    // ds_exchRtSearch.NameValue(1, "stdDt") = ed_slipDt.text;
    // ds_exchRtSearch.UseChangeInfo = false;
    ds_exchRtSearch.set("crcCd", ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "crcCd"));
    ds_exchRtSearch.set("stdDt", ica_slipDt.getValue());

    // tr_exchRt.Post();
    let e = await $c.sbm.execute($p, sbm_exchRt);
    console.log("  ▷ sbm_exchRt_submitdone (환율조회 submitdone)");

    // <!-- 통화코드 DataSet -->
    // language=JavaScript for=tr_exchRt event=OnSuccess()>
    //     cfEnableObj(ed_amtFcrc, true);

    if (e.responseJSON.resultDataSet[0].Code != 0) return;
    $c.gus.cfEnableObj($p, ed_amtFcrc, true);
    console.log("  ==--== 활성 (외화금액)");

    // checkExchRt = ds_exchRt.NameValue(ds_exchRt.RowPosition,"stdExchRt");	// 기준 환율
    // ed_adjustExchRt.text = ds_exchRt.NameValue(1,"stdExchRt");

    scwin.checkExchRt = Number(ds_exchRt.getCellData(0, "stdExchRt")).toFixed(2); // 기준 환율
    ed_adjustExchRt.setValue(parseFloat(ds_exchRt.getCellData(0, "stdExchRt"))); // 기준 환율
  }
};

//-------------------------------------------------------------------------
// 환율 focus out
//-------------------------------------------------------------------------
scwin.ed_adjustExchRt_onblur = async function (e) {
  // <!-- 환율 포커스 변경시 -->
  // language=JavaScript for=ed_adjustExchRt event=OnKillFocus()>
  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == ACConstants.KOREA_WON) {
    $c.gus.cfEnableObjects($p, [ed_amt]);
    $c.gus.cfDisableObjects($p, [ed_amtFcrc]);
    // ed_amt.text = ed_adjustExchRt.text.trim();
    ed_amt.setValue(ed_adjustExchRt.getValue().trim());
    console.log("  ==--== 환율 focus out KRW : 활성 (금액) 비활성 (외화금액)");
    return;
    //ed_amt.focus();
  }
  if (lc_crcCd.getValue() != ACConstants.KOREA_WON && scwin.checkMain == "0") {
    // var changeExchRt = ds_slipcontents.NameValue(ds_slipcontents.RowPosition,"exchRt");	
    var changeExchRt = parseFloat(ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "exchRt"));
    if (changeExchRt < scwin.checkExchRt * 0.9 || changeExchRt > scwin.checkExchRt * 1.1) {
      await $c.win.alert($p, '통화코드 선택시 환율 금액 : ' + scwin.checkExchRt + '원' + '\n' + '환율의 90%  가 되는 금액  : ' + Math.round(scwin.checkExchRt * 0.9 * 100) / 100.00 + '원' + '\n' + '환율의 110% 가 되는 금액  : ' + Math.round(scwin.checkExchRt * 1.1 * 100) / 100.00 + '원' + '\n' + '\n' + ds_slipcontents.getRowPosition() + "번째행에 입력된 환율은 기준 환율의 " + '\n' + "90% ~ 110% 사이의 값 이어야 합니다.");
      return;
    }
  }
};

//-------------------------------------------------------------------------
// 외화금액 focus out
//-------------------------------------------------------------------------
scwin.ed_amtFcrc_onblur = async function (e) {
  // language=JavaScript for=ed_amtFcrc event=OnKillFocus()>
  await scwin.f_fixAmt();
};

//-------------------------------------------------------------------------
// 데이타셋 cell data change
//-------------------------------------------------------------------------
scwin.ds_slipcontents_oncelldatachange = async function (info) {
  // language="javascript"  for=ds_slipcontents event=OnColumnChanged(Row,Colid)>
  let colId = info.colID;
  if (colId == "exchRt") {
    await scwin.f_fixAmt();
  }
};

//-------------------------------------------------------------------------
// 데이타셋 cell data change  @@
//-------------------------------------------------------------------------
scwin.f_fixAmt = async function () {
  if (scwin.isStarted == true || scwin.isSlipCopy == true) return; // 최초 이벤트, 전표복사 중이면 제외 - 금액이 0 이 되어버림

  console.log("   === ------- f_fixAmt (환율 적용하여 금액 세팅)  row [" + ds_slipcontents.getRowPosition() + "]");
  var adjustExRt = 0;
  if ($c.gus.cfIsNull($p, ed_adjustExchRt.getValue())) adjustExRt = 0; // NaN 방지
  else adjustExRt = parseFloat(ed_adjustExchRt.getValue().trim());
  var amtFcrc = 0;
  if (ed_amtFcrc.getValue() == "") amtFcrc = 0; // NaN 방지
  else amtFcrc = parseFloat(ed_amtFcrc.getValue().trim());
  console.log("  -- adjustExRt [" + adjustExRt + "]  amtFcrc [" + amtFcrc + "]");
  if (amtFcrc < 0) {
    if (lc_crcCd.getValue() == "JPY") {
      // ed_amt.text = Math.floor(ed_amtFcrc.text.trim() * ed_adjustExchRt.text.trim()) / 100;	// 기준 환율
      ed_amt.setValue(Math.floor(amtFcrc * adjustExRt) / 100); // 기준 환율		
    } else {
      // ed_amt.text = Math.floor(ed_amtFcrc.text.trim() * ed_adjustExchRt.text.trim());
      ed_amt.setValue(Math.floor(amtFcrc * adjustExRt));
    }
  } else {
    if (lc_crcCd.getValue() == "JPY") {
      // ed_amt.text = Math.round(ed_amtFcrc.text.trim() * ed_adjustExchRt.text.trim()) / 100;	// 기준 환율
      ed_amt.setValue(Math.round(amtFcrc * adjustExRt) / 100); // 기준 환율
    } else {
      // ed_amt.text = Math.round(ed_amtFcrc.text.trim() * ed_adjustExchRt.text.trim());
      console.log("   --**-- Math.round( amtFcrc * adjustExRt) [" + Math.round(amtFcrc * adjustExRt) + "]");
      ed_amt.setValue(Math.round(amtFcrc * adjustExRt));
    }
  }
  console.log("  -- -- ed_amt [" + ed_amt.getValue() + "]");
};

//-------------------------------------------------------------------------
// 지급/채권번호 돋보기 버튼 클릭
//   - ds_slipcontents 내의 stl (stlOutbrDt	정산입금일자 ~ stlExchRt 정산환율) 에 복사
//-------------------------------------------------------------------------
scwin.f_SetlMthd = async function (e) {
  console.log("=== f_SetlMthd (지급/채권번호 돋보기 버튼 클릭 - 정산 데이타 (stl) 받아오기)");

  // 채권,채무,선수금 정리 팝업용 파라미터객체 생성 
  /*
  	var valueObject = new Object();
  	valueObject.ds_settle   = ds_settle;                   // 정리대상 dataset
  	valueObject.acctDeptCd  = ed_acctDeptCd.Text.trim();   // 귀속부서코드
  	valueObject.acctDeptNm  = txt_acctDeptNm.value;
  	valueObject.mgntClntNo  = ed_mgntClntNo.Text.trim();   // 거래처코드
  	valueObject.mgntClntNm  = txt_mgntClntNm.value;
  	valueObject.acctCd      = ed_acctCd.Text.trim();       // 계정코드
  	valueObject.acctNm      = txt_acctNm.value;
  	valueObject.settleClsCd = txt_settleClsCd.value;
  	valueObject.crcCd		= lc_crcCd.BindColVal;		   // 통화코드
   */

  let rtn = await $c.gus.cfValidate($p, [ed_acctDeptCd, ed_acctCd, ed_mgntClntNo]);
  if (!rtn) return false;

  //	var style       = "center:yes; dialogwidth:1000px; dialogheight:520px; scroll:no; resizable:no; status:yes;";
  //	var strPath     = "fi_201_03_04p.jsp?settleclscd="+txt_settleClsCd.value+"&flag=Y";
  console.log("  scwin.txt_settleClsCd : " + scwin.txt_settleClsCd);

  // KYU_ISSUE : scwin.txt_settleClsCd - 채권채무선수금조회에서 오류 발생 - 채권번호 돋보기 비활성 이어야 함

  if (scwin.txt_settleClsCd == "") {
    $c.gus.cfEnableObjects($p, [btn_resetSettleNo, btn_setlMthd]);
    console.log("  ==--== 활성 (채권번호돋보기)");
    return;
  }

  //채권채무선수금조회 호출 
  let data = {
    //		  ds_settle   : ds_settle                  // 정리대상 dataset
    //        prov        : ds_prov.getJSON()          // 2025-10-28 : KYU 신규 추가
    acctDeptCd: ed_acctDeptCd.getValue() // 신청부서코드 (귀속부서코드)
    ,

    acctDeptNm: ed_acctDeptNm.getValue() // 신청부서명
    ,

    mgntClntNo: ed_mgntClntNo.getValue() // 거래처코드
    ,

    mgntClntNm: ed_mgntClntNm.getValue() // 거래처명
    ,

    acctCd: ed_acctCd.getValue() // 계정코드
    ,

    acctNm: ed_acctNm.getValue() // 계정명
    ,

    settleClsCd: scwin.txt_settleClsCd // 정산구분코드
    ,

    crcCd: lc_crcCd.getValue() // 통화코드
    ,

    flag: "Y" // 팝업모드 (신규 추가)
  };
  console.log("  before 03_04 (채권채무선수금조회) data [" + JSON.stringify(data) + "]");
  let win_url = "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_03_04p.xml";
  let opts = {
    id: "smpPop",
    popupName: "채권정리내역",
    modal: true,
    type: "browserPopup",
    width: 1180,
    height: 750,
    title: true
  };

  //	var returnValue = window.showModalDialog(strPath, valueObject ,style ) ;
  let returnValue = await $c.win.openPopup($p, win_url, opts, data);

  // KYU_TEST (row insert 후에 값 지정)
  // ds_slipcontents.insertRow();
  // ds_slipcontents.setRowPosition(0);
  // ds_slipcontents.setCellData(0, "slipNo", "TEST");

  console.log("  *** ds_slipcontents [" + ds_slipcontents.getRowPosition() + "][" + JSON.stringify(ds_slipcontents.getRowJSON(ds_slipcontents.getRowPosition())) + "]");
  if (returnValue != null) {
    console.log(" returnValue [" + JSON.stringify(returnValue[0]) + "]");
  }

  //alert(returnValue.stlSlipNo);  
  if (returnValue != null && returnValue.stlOutbrNo != "N/A" && returnValue != "N/A") {
    // ds_slipcontents.NameValue(ds_slipcontents.getRowPosion, "stlOutbrDt" ) 	= returnValue.stlOutbrDt	;
    // ds_slipcontents.NameValue(ds_slipcontents.RowPosition, "stlSlipNo" ) 	= returnValue.stlSlipNo	    ;
    // ds_slipcontents.NameValue(ds_slipcontents.RowPosition, "stlOutbrNo" ) 	= returnValue.stlOutbrNo	;
    // ds_slipcontents.NameValue(ds_slipcontents.RowPosition, "stlClntNo" ) 	= returnValue.stlClntNo	    ;
    // ds_slipcontents.NameValue(ds_slipcontents.RowPosition, "stlClntNm" ) 	= returnValue.stlClntNm	    ;
    // ds_slipcontents.NameValue(ds_slipcontents.RowPosition, "stlAcctDeptCd" )= returnValue.stlAcctDeptCd ;
    // ds_slipcontents.NameValue(ds_slipcontents.RowPosition, "stlAcctDeptNm" )= returnValue.stlAcctDeptNm ;
    // ds_slipcontents.NameValue(ds_slipcontents.RowPosition, "stlAcctCd" ) 	= returnValue.stlAcctCd	    ;
    // ds_slipcontents.NameValue(ds_slipcontents.RowPosition, "stlAcctNm" ) 	= returnValue.stlAcctNm	    ;
    // ds_slipcontents.NameValue(ds_slipcontents.RowPosition, "stlAmt" ) 		= returnValue.stlAmt		;
    // ds_slipcontents.NameValue(ds_slipcontents.RowPosition, "stlRamt" ) 		= returnValue.stlRamt		;
    // ds_slipcontents.NameValue(ds_slipcontents.RowPosition, "stlAmtFcrc" ) 	= returnValue.stlAmtFcrc	;
    // ds_slipcontents.NameValue(ds_slipcontents.RowPosition, "stlRamtFcrc" ) 	= returnValue.stlRamtFcrc	;
    // ds_slipcontents.NameValue(ds_slipcontents.RowPosition, "stlCrcCd" ) 	= returnValue.stlCrcCd		;
    // ds_slipcontents.NameValue(ds_slipcontents.RowPosition, "stlExchRt" ) 	= returnValue.stlExchRt	    ;
    //ds_slipcontents.setRowJSON(row, JSON.stringify(returnValue[0]), true);
    //ds_slipcontents.setRowJSON setRowJSON(row, returnValue[0], true);

    // 배열 [{}]  -->  JSON 배열로 변환 {}
    var temp = JSON.stringify(returnValue[0]).trim();
    var jarray = JSON.parse(temp);
    console.log("  채권채무선수금 temp [" + temp + "]");
    console.log("  채권채무선수금 jarray [" + jarray + "]");

    //        console.log(" ---- returnValue[0] [" + JSON.stringify(returnValue[0].stlOutbrDt ) +"]");

    // 세가지 케이스 모두 결과가 나옴
    console.log(" ---- stlOutbrDt(jarray.stlOutbrDt) [" + JSON.parse(JSON.stringify(jarray.stlOutbrDt)) + "]"); // 특수문자 제거
    console.log(" ---- stlOutbrDt(jarray.stlSlipNo) [" + JSON.parse(JSON.stringify(jarray.stlSlipNo)) + "]"); // 특수문자 제거
    console.log(" ---- stlOutbrDt(jarray.stlOutbrNo) [" + JSON.parse(JSON.stringify(jarray.stlOutbrNo)) + "]"); // 특수문자 제거
    // console.log(" ---- stlOutbrDt (jarray[stlOutbrDt]) 쌍따옴 [" + JSON.stringify(jarray["stlOutbrDt"]) +"]");
    // console.log(" ---- stlOutbrDt (jarray[stlOutbrDt]) 따옴 [" + JSON.stringify(jarray['stlOutbrDt']) +"]");
    // console.log(" ---- stlOutbrDt (temp.stlOutbrDt) [" + JSON.stringify(temp["stlOutbrDt"]) +"]");
    // console.log(" ---- stlOutbrDt (temp.stlOutbrDt) [" + JSON.stringify(temp['stlOutbrDt']) +"]");
    // console.log(" ---- stlOutbrDt(멤버) [" + JSON.stringify(jarray.stlOutbrDt    ) +"]");
    // console.log(" ---- stlOutbrDt(replace) [" + JSON.stringify(jarray.stlOutbrDt    ).replace("\\", "") +"]");

    // 정산입금일자 : OUT_BR_DT 이므로 원래 stlOutbrDt 가 맞음
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlOutbrDt", JSON.parse(JSON.stringify(jarray.stlOutbrDt)));
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlSlipNo", JSON.parse(JSON.stringify(jarray.stlSlipNo)));
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlOutbrNo", JSON.parse(JSON.stringify(jarray.stlOutbrNo)));
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlClntNo", JSON.parse(JSON.stringify(jarray.stlClntNo)));
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlClntNm", JSON.parse(JSON.stringify(jarray.stlClntNm)));
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlAcctDeptCd", JSON.parse(JSON.stringify(jarray.stlAcctDeptCd)));
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlAcctDeptNm", JSON.parse(JSON.stringify(jarray.stlAcctDeptNm)));
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlAcctCd", JSON.parse(JSON.stringify(jarray.stlAcctCd)));
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlAcctNm", JSON.parse(JSON.stringify(jarray.stlAcctNm)));
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlAmt", JSON.parse(JSON.stringify(jarray.stlAmt)));
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlRamt", JSON.parse(JSON.stringify(jarray.stlRamt)));
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlAmtFcrc", JSON.parse(JSON.stringify(jarray.stlAmtFcrc)));
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlRamtFcrc", JSON.parse(JSON.stringify(jarray.stlRamtFcrc)));
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlCrcCd", JSON.parse(JSON.stringify(jarray.stlCrcCd)));
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlExchRt", JSON.parse(JSON.stringify(jarray.stlExchRt)));
    console.log("  *** ds_slipcontents [" + ds_slipcontents.getRowPosition() + "][" + JSON.stringify(ds_slipcontents.getRowJSON(ds_slipcontents.getRowPosition())) + "]");

    // 지급/채권번호 채움
    //if(typeof(returnValue.stlOutbrNo) == "undefined"){
    if (typeof JSON.stringify(jarray.stlOutbrNo) == "undefined" || $c.gus.cfIsNull($p, JSON.stringify(jarray.stlOutbrNo))) {
      ed_refNo.setValue("");
    } else {
      //txt_refNo.setValue (returnValue.stlOutbrNo);
      ed_refNo.setValue(JSON.parse(JSON.stringify(jarray.stlOutbrNo)));
    }
    //txt_refNo.value = typeof(returnValue.stlOutbrNo) == "undefined" ? "" : returnValue.stlOutbrNo;
    //alert(ds_slipcontents.NameValue(ds_slipcontents.RowPosition, "stlSlipNo" ));

    console.log("=== f_SetlMthd (지급/채권번호 돋보기 버튼 클릭)  END ===========================");
  }
};

//-------------------------------------------------------------------------
// 금액 onchange
//-------------------------------------------------------------------------
scwin.ed_amt_onchange = function (info) {
  // 차대구분 변경에 의한 금액 지정
  scwin.changeAmtByDrcrClsCd();
};

//-------------------------------------------------------------------------
// 차대구분 변경에 의한 금액 지정
//-------------------------------------------------------------------------
scwin.changeAmtByDrcrClsCd = function () {
  // KYU_TEST : 불필요한 이벤트 금지 - 행추가후 취소할 때 지워지는 row 의 금액을 지정
  if (scwin.skipRowCheck == true)
    // row 체크 스킵 : new Row, old Row 에서 불필요한 체크 스킵
    {
      console.log("  ▷▷ changeAmtByDrcrClsCd SKIP (차대구분 - f_changeRow1 에서 불필요한 이벤트금지)   skipRowCheck [" + scwin.skipRowCheck + "]");
      return;
    }
  var row;
  // KYU_NEW : row 이동할 때, newRow 로 살짝 넘어갔을 때 체크 스킵
  // row 체크 스킵 && oldRow != 현재 그리드 포커스 (체크 스킵이면서 newRow 이면 스킵!! )
  if (scwin.skipRowCheck == true && scwin.g_oldRowIndex != ds_slipcontents.getRowPosition()) {
    console.log("  ▷▷  changeAmtByDrcrClsCd  SKIP (row 체크 스킵) skipRowCheck [" + scwin.skipRowCheck + "]  old [" + scwin.g_oldRowIndex + "] != pos [" + ds_slipcontents.getRowPosition() + "]");
    return;
  } else {
    console.log("  ▷▷  changeAmtByDrcrClsCd  실행! skipRowCheck [" + scwin.skipRowCheck + "]  old [" + scwin.g_oldRowIndex + "] pos [" + ds_slipcontents.getRowPosition() + "]");
    row = ds_slipcontents.getRowPosition();
  }

  // var row = ds_slipcontents.getRowPosition();
  var tmp_drcrClsCd = ds_slipcontents.getCellData(row, "drcrClsCd"); //lc_drcrClsCd.getValue();
  var amt = parseInt(ds_slipcontents.getCellData(row, "amt"));

  // console.log("  ▷▷  (차대구분 변경에 의한 금액 지정)  row ["+row+"] tmp_drcrClsCd ["+tmp_drcrClsCd+"]  amt ["+amt+"]["+ds_slipcontents.getCellData(row, "amt")+"]");

  if (tmp_drcrClsCd == "D") {
    ds_slipcontents.setCellData(row, "Damt", amt);
    ds_slipcontents.setCellData(row, "Camt", 0);
  } else if (tmp_drcrClsCd == "C") {
    ds_slipcontents.setCellData(row, "Damt", 0);
    ds_slipcontents.setCellData(row, "Camt", amt);
  }

  // console.log("  ▷▷  changeAmtByDrcrClsCd (차대구분 변경에 의한 금액 지정)  row ["+row+"] tmp_drcrClsCd ["+tmp_drcrClsCd+"]  Damt ["+ds_slipcontents.getCellData(row, "Damt")+"]  Camt ["+ds_slipcontents.getCellData(row, "Camt")+"]");
};

//-------------------------------------------------------------------------
// 차대구분 onchange
//-------------------------------------------------------------------------
scwin.lc_drcrClsCd_onchange = async function (info) {
  var row;
  // KYU_NEW : row 이동할 때, newRow 로 살짝 넘어갔을 때 체크 스킵
  // row 체크 스킵 && oldRow != 현재 그리드 포커스 (체크 스킵이면서 newRow 이면 스킵!! )
  if (scwin.skipRowCheck == true && scwin.g_oldRowIndex != ds_slipcontents.getRowPosition()) {
    console.log("  ▷▶  lc_drcrClsCd_onchange  SKIP (row 체크 스킵) skipRowCheck [" + scwin.skipRowCheck + "]  old [" + scwin.g_oldRowIndex + "] != 현재 [" + ds_slipcontents.getRowPosition() + "]");
    return;
  } else {
    console.log("  ▷▶  lc_drcrClsCd_onchange  실행! skipRowCheck [" + scwin.skipRowCheck + "]  old [" + scwin.g_oldRowIndex + "] 현재 [" + ds_slipcontents.getRowPosition() + "]");
    row = ds_slipcontents.getRowPosition();
  }

  // <!-- 차대구분변경시 -->
  // language=JavaScript for=lc_drcrClsCd event=onSelChange()>
  // 지급계정셋팅
  let rtn = await scwin.f_PayYn(row);
  if (!rtn) return false;
  if (lc_drcrClsCd.getValue() == "C" && ed_acctCd.getValue() == "1110530") {
    if (scwin.isSubCompany == true) {
      lc_adjmClsCd.setValue(-1); // 정산방법 : 없음

      // cfDisableObjects(img_adjmClsCd);
      $c.gus.cfDisableObjects($p, [btn_adjmClsCd]);
      console.log("  ==--== 비활성 (정산방법돋보기) - 자회사");
    } else {
      lc_adjmClsCd.setValue(ACConstants.ADJM_MTHDCD_SUSPAY); // 정산방법(가지급금)  4

      // cfEnableObjects(img_adjmClsCd);
      $c.gus.cfEnableObjects($p, [btn_adjmClsCd]);
      console.log("  ==--== 활성 (정산방법돋보기) - 자회사 아님");
    }
  } else if (ed_acctCd.getValue() == ACConstants.ACCTCD_TRUST_SELL && lc_drcrClsCd.getValue() == ACConstants.DEBIT) {
    // "1110410" 외상매출금, D
    $c.gus.cfEnableObjects($p, [cbx_recvProcYn]);
    console.log("  ==--== 활성 (채권체크박스)");
  } else {
    // chb_recvProcYn.checked=false;
    cbx_recvProcYn.setValue(0);
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "recvProcYn", 0);

    // cfDisableObjects([img_adjmClsCd,chb_recvProcYn]);
    $c.gus.cfDisableObjects($p, [btn_adjmClsCd, cbx_recvProcYn]);
    console.log("  ==--== 비활성 (정산방법돋보기, 채권체크박스)");
  }

  // 차대구분 변경에 의한 금액 지정
  scwin.changeAmtByDrcrClsCd();
};

//-------------------------------------------------------------------------
// 차대구분 focus out
//-------------------------------------------------------------------------
scwin.lc_drcrClsCd_onblur = async function (e) {
  console.log("----- lc_drcrClsCd_onblur (차대구분 focus out) - 관리번호");

  // f_CheckComboData(this, "차대구분");  // KYU_TEST 제외

  // if (objCombo.Index == -1 && cfIsNull(objCombo.text) == false) {
  // 	objCombo.Index = objCombo.IndexOfColumn(objCombo.SearchColumn, objCombo.text);

  // 	if (objCombo.Index == -1) {
  // 		cfAlertMsg(MSG_CM_ERR_038, [comboTitle + "코드"]);
  // 		objCombo.Focus();
  // 	}
  // }

  // 부가세대급금이 대변  계정, 부가세예수금이 차변계정  입력시는 사업자번호, 부가세관리부서등 부가세관련 데이터  입력가능
  if (ed_acctCd.getValue() == "1111210" && lc_drcrClsCd.getValue() == "D" || ed_acctCd.getValue() == "2100710" && lc_drcrClsCd.getValue() == "C") {
    console.log("  -- -- 부가세대급금이 대변  계정, 부가세예수금이 차변계정  입력시 : 사업자번호, 부가세관리부서등 부가세관련 데이터  입력가능");

    // cfEnableObjects([ed_taxinvcDt,img_taxinvcDt,lc_evidClsCd,lc_deductClsCd,ed_vatDeclarAcctDeptCd,ed_crn, ed_spplyAmt, ed_vatAmt, ed_taxinvcDt, img_taxinvcDt, img_crn]);
    $c.gus.cfEnableObjects($p, [ica_taxinvcDt, lc_evidClsCd, lc_deductClsCd, ed_vatDeclarAcctDeptCd, ed_crn, ed_spplyAmt, ed_vatAmt, btn_crn]);
    console.log("  ==--== 활성 (세금계산서일자,증빙구분,공제구분,부가세관리부서,사업자번호,공급금액,부가세금액,사업자돋보기)");
  } else {
    // cfDisableObjects([ed_taxinvcDt,img_taxinvcDt,lc_evidClsCd,lc_deductClsCd,ed_vatDeclarAcctDeptCd,ed_crn, ed_spplyAmt, ed_vatAmt, ed_taxinvcDt, img_taxinvcDt, img_crn]);
    $c.gus.cfDisableObjects($p, [ica_taxinvcDt, lc_evidClsCd, lc_deductClsCd, ed_vatDeclarAcctDeptCd, ed_crn, ed_spplyAmt, ed_vatAmt, btn_crn]);
    console.log("  ==--== 비활성 (세금계산서일자,증빙구분,공제구분,부가세관리부서,사업자번호,공급금액,부가세금액,사업자돋보기)");
  }

  // language=JavaScript for=lc_drcrClsCd event=OnKillFocus()>

  // KYU_TEST : false 가 와도 그냥 진행
  let rtn2 = await scwin.f_AcctCdCheck();
  console.log("  ▣ ▣  lc_drcrClsCd_onblur - f_checkSettle 호출");

  //--------------------------------------------------------------
  //채권채무정리를 위한 추가 2013.10.24
  //--------------------------------------------------------------
  let rtn1 = await scwin.f_checkSettle(ed_acctCd.getValue(), lc_drcrClsCd.getValue());
  console.log("  ▣ ▣  lc_drcrClsCd_onblur - f_checkSettle [" + rtn1 + "]");

  // if(f_checkSettle(ed_acctCd.text, lc_drcrClsCd.BindColVal) && ed_acctCd.text.trim()!=""){
  if (rtn1 && ed_acctCd.getValue().trim() != "") {
    //정리대상인경우
    $c.gus.cfEnableObjects($p, [btn_resetSettleNo, btn_setlMthd]);
    console.log("  ==--== 활성 (채권번호돋보기) - 차대구분 focus out");

    // cfDisableObjects([txt_refNo,txt_mgntNm,txt_method,txt_settleClsCd,txt_mgntNo]);
    $c.gus.cfDisableObjects($p, [ed_refNo, ed_mgntNm, ed_mgntNo]);
    console.log("  ==--== 비활성 ( 참조번호,관리명, 관리번호(뒤) - txt_method,txt_settleClsCd)");
  } else {
    //정리대상이 아닌경우 popup에서 내려받은값 초기화
    if (scwin.txt_settleClsCd != "" || scwin.txt_settleClsCd != "0") {
      scwin.f_initSettle(ds_slipcontents.getRowPosition(), '1');
    }
    $c.gus.cfEnableObj($p, ed_mgntNo, true);
    console.log("  ==--== 활성 (   관리번호(뒤) )");
    $c.gus.cfDisableObjects($p, [ed_mgntNm, ed_refNo, btn_resetSettleNo, btn_setlMthd]);
    console.log("  ==--== 비활성 ( 관리명(앞),참조번호,지급/채권번호돋보기 - txt_method,txt_settleClsCd)");
  }

  // 차대구분 변경에 의한 금액 지정
  scwin.changeAmtByDrcrClsCd();
};

//-------------------------------------------------------------------------
// f_initSettle
//-------------------------------------------------------------------------
scwin.f_initSettle = async function (RowPos, flag) {
  console.log("=== f_initSettle (정산 초기화)");
  var printMsg = "";

  // 정산번호 초기화 버튼 클릭 (지급/채권번호 휴지통 클릭)
  let rtnx = await scwin.f_resetSettleNo();
  scwin.txt_method = ""; //정리방법표시 초기화 - 지급수단
  scwin.txt_settleClsCd = "0";
  //txt_acctClsCd.value     = "";

  // KYU_NEW : 바인딩 처리
  // var row = ds_slipcontents.getRowPosition();
  ds_slipcontents.setCellData(RowPos, "settleClsCd", scwin.txt_settleClsCd); // 정리구분

  printMsg = flag == "1" ? "차/대변" : "계정";
};

//-------------------------------------------------------------------------
// 공급금액 focus out 
//-------------------------------------------------------------------------
scwin.ed_spplyAmt_onblur = function (e) {
  // <!-- 공급금액에 따른 부가세 세팅 -->
  // language=JavaScript for=ed_spplyAmt event=OnKillFocus()>
  // 부가세금액(부가세자료로 넘어가는금액) 필수 : 세금계산서, 법인카드, 개인카드, 현금영수증
  if (lc_evidClsCd.getValue() == "10" || lc_evidClsCd.getValue() == "11" || lc_evidClsCd.getValue() == "40" || lc_evidClsCd.getValue() == "50" || lc_evidClsCd.getValue() == "60") {
    ed_vatAmt.setValue(Math.round(ed_spplyAmt.getValue().trim() * 0.1));
  } else {
    ed_vatAmt.setValue(0);
  }
};

//-------------------------------------------------------------------------
// 미지급 - 지급체크박스 클릭
//          지급체크박스 변경될 때 이벤트 발생
//-------------------------------------------------------------------------
scwin.f_CheckPayYn = async function () {
  var row = ds_slipcontents.getRowPosition();

  // KYU_TEST : 2026-05-11 지급방법 세팅되면 스킵 - 어음인데도 지급일자 비활성 발생 - 체크 해제 할 때 원복 안됨
  // if ( !$c.gus.cfIsNull(ds_slipcontents.getCellData(row, "reqPayMthdCd")) )
  // {  
  //     console.log("  ▣  f_CheckPayYn (지급 체크) SKIP !!!! (지급방법 세팅되어 있음)   reqPayMthdCd ["+ds_slipcontents.getCellData(row, "reqPayMthdCd")+"]");
  //     return;  
  // }

  // KYU_NEW : row 이동할 때, newRow 로 살짝 넘어갔을 때 체크 스킵
  // row 체크 스킵 && oldRow != 현재 그리드 포커스 (체크 스킵이면서 newRow 이면 스킵!! )
  if (scwin.skipRowCheck == true && scwin.g_oldRowIndex != ds_slipcontents.getRowPosition()) {
    console.log("  ▣  f_CheckPayYn (지급 체크)  SKIP (row 체크 스킵) skipRowCheck [" + scwin.skipRowCheck + "]  old [" + scwin.g_oldRowIndex + "] != pos [" + ds_slipcontents.getRowPosition() + "]");
    return;
  } else {
    // console.log("  ▣  f_CheckPayYn  실행! skipRowCheck ["+scwin.skipRowCheck+"]  old ["+scwin.g_oldRowIndex+"] pos ["+ds_slipcontents.getRowPosition()+"]");
  }
  console.log("  ▣  f_CheckPayYn (지급 체크시 지급방법,어음일수,세금계산서일자,지급일자 활성)   row [" + row + "] ds.payProcYn [" + ds_slipcontents.getCellData(row, "payProcYn") + "]");

  // if(chb_payProcYn.checked==true){
  // if(cbx_payProcYn.getValue() == 1) {
  if (ds_slipcontents.getCellData(row, "payProcYn") == 1) {
    // cfDisableObjects([ed_reqDt,ed_taxinvcDt, lc_evidClsCd, lc_deductClsCd, lc_zeroTaxClsCd, ed_crn, ed_vatDeclarAcctDeptCd, img_crn]);
    $c.gus.cfDisableObjects($p, [ica_reqDt, ica_taxinvcDt, lc_evidClsCd, lc_deductClsCd, lc_zeroTaxClsCd, ed_crn, ed_vatDeclarAcctDeptCd, btn_crn]);
    console.log("  ==--== 비활성 ( 지급일자, 세금계산서일자,증빙구분,공제구분,영세율구분,사업자번호,부가세관리부서,사업자돋보기)");
    // cfEnableObjects([lc_reqPayMthdCd, ed_draftDdCntCd, ed_taxinvcDt,img_reqDt,img_taxinvcDt]);
    $c.gus.cfEnableObjects($p, [lc_reqPayMthdCd, ed_draftDdCntCd, ica_taxinvcDt]);
    console.log("  ==--== 활성 (지급방법,어음일수,세금계산서일자, 지로납부기한)");
  } else {
    //if (eval(txt_acctNm.value.indexOf("부가세")) <0) {  // 부가세 계정이 아닐경우는 원래 소스를 탄다.
    // var temp = ed_acctNm.getValue();
    var origin = String(ds_slipcontents.getCellData(row, "acctNm"));
    console.log("  origin [" + origin + "]  ds [" + ds_slipcontents.getCellData(row, "acctNm") + "]");
    var search = "부가세";
    if (origin.indexOf(search) < 0) {
      // 부가세 계정이 아닐경우는 원래 소스를 탄다.
      // if ( !origin.includes(search) ) {  // 부가세 계정이 아닐경우는 원래 소스를 탄다.
      console.log("  ed_acctNm 내에 <부가세> 문구 존재 안함 [" + origin + "] ----- ----- -----");

      // ica_reqDt.setValue( "" );
      // lc_reqPayMthdCd.setValue( "" );  // 지급방법 초기화
      // ed_draftDdCntCd.setValue( "" );  // 어음일수

      ds_slipcontents.setCellData(row, "reqDt", ""); // 요청일자
      ds_slipcontents.setCellData(row, "reqPayMthdCd", ""); // 지급방법
      ds_slipcontents.setCellData(row, "draftDdCntCd", ""); // 어음일수 - 0 으로 주면 #,##0 일 때 00 으로 나옴

      console.log("--- --- 요청일자,지급방법,어음일수 초기화");

      // cfDisableObjects([ed_reqDt,lc_reqPayMthdCd,ed_draftDdCntCd,ed_taxinvcDt,img_reqDt,img_taxinvcDt, lc_evidClsCd, lc_deductClsCd, lc_zeroTaxClsCd, ed_crn, ed_vatDeclarAcctDeptCd, ed_taxinvcDt, img_crn]);
      $c.gus.cfDisableObjects($p, [ica_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd, ica_taxinvcDt, lc_evidClsCd, lc_deductClsCd, lc_zeroTaxClsCd, ed_crn, ed_vatDeclarAcctDeptCd, btn_crn]);
      console.log("  ==--== 비활성 ( 지급일자, 지급방법,어음일수코드,세금계산서일자,증빙구분,공제구분,영세율구분,사업자번호, 부가세관리부서,사업자돋보기)");
    }

    // 부가세대급금이 대변  계정, 부가세예수금이 차변계정  입력시는 사업자번호, 부가세관리부서등 부가세관련 데이터  입력가능
    if (ed_acctCd.getValue() == "1111210" && lc_drcrClsCd.getValue() == "D" || ed_acctCd.getValue() == "2100710" && lc_drcrClsCd.getValue() == "C") {
      console.log("  -- -- 부가세대급금이 대변  계정, 부가세예수금이 차변계정  입력시 : 사업자번호, 부가세관리부서등 부가세관련 데이터  입력가능");

      // cfEnableObjects([ed_taxinvcDt,img_taxinvcDt,lc_evidClsCd,lc_deductClsCd,ed_vatDeclarAcctDeptCd,ed_crn, ed_spplyAmt, ed_vatAmt, ed_taxinvcDt, img_taxinvcDt, img_crn]);
      $c.gus.cfEnableObjects($p, [ica_taxinvcDt, lc_evidClsCd, lc_deductClsCd, ed_vatDeclarAcctDeptCd, ed_crn, ed_spplyAmt, ed_vatAmt, btn_crn]);
      console.log("  ==--== 활성 (세금계산서일자,증빙구분,공제구분,부가세관리부서,사업자번호,공급금액,부가세금액,사업자돋보기)");
    } else {
      // cfDisableObjects([ed_taxinvcDt,img_taxinvcDt,lc_evidClsCd,lc_deductClsCd,ed_vatDeclarAcctDeptCd,ed_crn, ed_spplyAmt, ed_vatAmt, ed_taxinvcDt, img_taxinvcDt, img_crn]);
      $c.gus.cfDisableObjects($p, [ica_taxinvcDt, lc_evidClsCd, lc_deductClsCd, ed_vatDeclarAcctDeptCd, ed_crn, ed_spplyAmt, ed_vatAmt, btn_crn]);
      console.log("  ==--== 비활성 (세금계산서일자,증빙구분,공제구분,부가세관리부서,사업자번호,공급금액,부가세금액,사업자돋보기)");
    }
  }
  scwin.lc_reqPayMthdCd_onviewchange();
  return true;
};

//-------------------------------------------------------------------------
// 지급방법 onviewchange
//-------------------------------------------------------------------------
scwin.lc_reqPayMthdCd_onviewchange = function (info) {
  // 행 전체 원본 데이타
  var row = ds_slipcontents.getRowPosition();

  // newRow  와 현재 row 동일하면 현재 row, 아니면 oldRow
  // if ( scwin.g_newRowIndex == ds_slipcontents.getRowPosition() ) row = ds_slipcontents.getRowPosition();
  // else  row = scwin.g_oldRowIndex;

  var old_reqPayMthdCd = ds_slipcontents.getCellData(row, "reqPayMthdCd");
  var old_payProcYn = ds_slipcontents.getCellData(row, "payProcYn");
  console.log("  [" + row + "] old_reqPayMthdCd [" + old_reqPayMthdCd + "]  old_payProcYn [" + old_payProcYn + "]");

  // 2026-05-12 : 지급 체크박스 체크아웃일 때에는 스킵 : 행이동시 환율 활성 안됨
  if (old_payProcYn != 1) {// 지급 체크박스 체크아웃

    // $c.gus.cfEnableObjects([lc_crcCd])
    // console.log("  ==--== 활성 (통화코드) - 지급 체크박스 체크아웃");
  }
  if (scwin.skipRowCheck) {
    // row 체크 스킵 : new Row, old Row 에서 불필요한 체크 스킵.
    console.log("----- lc_reqPayMthdCd_onviewchange  ▣▣  SKIP !!  (통화코드 비활성 방지)  skipRowCheck [" + scwin.skipRowCheck + "]");
    return;
  }
  if (scwin.addRowFlag) {
    // 행추가시 정산방법 활성화용 - 행추가시 스킵 - 통화코드가 비활성됨
    console.log("----- lc_reqPayMthdCd_onviewchange  ▣▣  SKIP !!  (통화코드 비활성 방지)  addRowFlag [" + scwin.addRowFlag + "]");
    return;
  }
  console.log("----- lc_reqPayMthdCd_onviewchange  ▣▣    row [" + row + "]  lc_reqPayMthdCd [" + old_reqPayMthdCd + "]  addRowFlag [" + scwin.addRowFlag + "]");

  // <!-- 지급방법 콤보박스 변경시 -->
  // language=JavaScript for=lc_reqPayMthdCd event=OnSelChange()>

  // if( lc_reqPayMthdCd.getValue() != scwin.GIRO){  // 지로납부 95
  if (old_reqPayMthdCd != scwin.GIRO) {
    // 지로납부 95
    console.log("  지급방법  GIRO (95:지로납부) 아님   ▣");

    // 전자어음 40  약속어음 50
    if (old_reqPayMthdCd == scwin.ELECTRONICDRAFT || old_reqPayMthdCd == scwin.DRAFTCHECK) {
      $c.gus.cfEnableObjects($p, [ed_draftDdCntCd]);
      console.log("  ==--== 활성 (어음일수) - 전자어음 40  약속어음 50");
    } else {
      $c.gus.cfDisableObjects($p, [ed_draftDdCntCd]);
      console.log("  ==--== 비활성 (어음일수) - 전자/약속어음 외");

      // KYU_NEW : 어음 아니면 어음일수 0 처리
      ed_draftDdCntCd.setValue("0");
    }

    // 전자결재현금 30  이체 20
    if (old_reqPayMthdCd == scwin.ELECTRIC_CASH || old_reqPayMthdCd == scwin.TRANSFER) {
      // KYU_TEST 
      // if (!(ds_slipcontents.OrgNameValue(1,"reqPayMthdCd") == ELECTRIC_CASH || ds_slipcontents.OrgNameValue(1,"reqPayMthdCd") == TRANSFER) ) {

      // if (!(ds_slipcontents.getCellData(info.oldRowIndex,"reqPayMthdCd") == scwin.ELECTRIC_CASH ||
      //       ds_slipcontents.getCellData(info.oldRowIndex,"reqPayMthdCd") == scwin.TRANSFER) ) {
      if (!(old_reqPayMthdCd == scwin.ELECTRIC_CASH || old_reqPayMthdCd == scwin.TRANSFER)) {
        lc_crcCd.setValue(ACConstants.KOREA_WON);
        console.log("  통화코드 KRW 세팅 - Original  전자결재현금 30  이체 20  이 아닐 때...");
      }
      $c.gus.cfEnableObjects($p, [lc_crcCd]);
      console.log("  ==--== 활성 (통화코드)  - 전자결재현금 30  이체 20   ");
    } else {
      //lc_crcCd.index=0
      $c.gus.cfDisableObjects($p, [lc_crcCd]);
      console.log("  ==--== 비활성 (통화코드)");
    }
    $c.gus.cfDisableObjects($p, [ica_paymentPrd]);
    console.log("  ==--== 비활성 (지로납부기한)");
    ica_paymentPrd.setValue("");

    // KYU_NEW : 2025-05-12 지급방법이 널이 아닐 때 지급일자를 활성
    if (!$c.gus.cfIsNull($p, old_reqPayMthdCd)) {
      $c.gus.cfEnableObjects($p, [ica_reqDt]);
      console.log("  ==--== 활성 (지급일자) - 지급방법 null 아님");
    } else {
      // KYU_NEW : 2025-05-12 지급방법이 널 (행이동) 통화코드 활성화시킴
      $c.gus.cfEnableObjects($p, [lc_crcCd]);
      console.log("  ==--== 활성 (통화코드) - 지급방법 null");
    }

    // KYU_TEST
    // validExp="어음일수:yes:minNumber=1">
    // ed_draftDdCntCd.setValue( 0 );
  } else {
    console.log("  지급방법  GIRO (95:지로납부)   ▣▣");
    $c.gus.cfEnableObjects($p, [ica_paymentPrd]);
    $c.gus.cfDisableObjects($p, [ica_reqDt]);
    ica_reqDt.setValue("");
    console.log("  ==--== 활성 (지로납부기한)  비활성 (지급일자)=널");
  }
};

//-------------------------------------------------------------------------
//  증빙종류 변경시
//-------------------------------------------------------------------------
scwin.lc_evidClsCd_onchange = async function (info) {
  console.log("▶▷▷  lc_evidClsCd_onchange (증빙종류변경)");

  // <!-- 증빙종류 LuxeCombo -->
  // language=JavaScript for=lc_evidClsCd event=onSelChange()>
  // var row = ds_evidClsCd.NameValueRow("COL1", lc_evidClsCd.ValueOfIndex("COL1", lc_evidClsCd.Index));
  var row = lc_evidClsCd.getSelectedIndex();

  // KYU_DEL : 히든이라 미사용
  // txt_evidClsNm.value  = ds_evidClsCd.NameValue(row,"COL2") ;	//증빙명
  // <INPUT type="hidden" class=input_text id=txt_evidClsNm objType="data"  name="txt_evidClsNm">

  lc_zeroTaxClsCd.setValue("");
  $c.gus.cfDisableObjects($p, [lc_zeroTaxClsCd]);
  console.log("  ==--== 비활성 (영세율구분)");

  // 법인카드선택시  불공제로 셋팅
  if (lc_evidClsCd.getValue() == "40") {
    lc_deductClsCd.setValue("2");
    if (scwin.vCoCd != "023") {
      //BIDC가 아닌경우
      ed_vatDeclarAcctDeptCd.setValue("00009");
      ed_vatDeclarAcctDeptNm.setValue("재경");
    }
  }

  // 개인카드 선택시 불공제로 세팅
  else if (lc_evidClsCd.getValue() == "50") {
    lc_deductClsCd.setValue("2");
  }

  // 세금계산서 선택시 공제로 세팅
  else if (lc_evidClsCd.getValue() == "10" && lc_deductClsCd.getValue() != "2") {
    lc_deductClsCd.setValue("1");
  }
  //영세율세금계산서 일때 영세구분 선택 가능하게 셋
  else if (lc_evidClsCd.getValue() == "20") {
    $c.gus.cfEnableObjects($p, [lc_zeroTaxClsCd]);
    console.log("  ==--== 영세율세금계산서 - 활성 (영세율구분)");
  }
};

// ====== 저장-준비 ========================================================================= //

//-------------------------------------------------------------------------
// 채권,채무,선수금 정리건 전표발행 가능여부 체크(건수체크, 금액체크)
// 2013.10.31 hurrah015
//-------------------------------------------------------------------------
scwin.f_checkSettlePossiblity = async function () {
  console.log("=== f_checkSettlePossiblity (채권,채무,선수금 정리건 전표발행 가능여부 체크(건수체크, 금액체크))");
  var cntStlTargetD = 0; // 차변 정리대상건 카운트
  var cntStlTargetC = 0; // 대변 정리대상건 카운트
  var cntStlD = 0; // 차변 정리건 카운트
  var cntStlC = 0; // 대변 정리건 카운트
  var targetRefNo = ""; // 중복사용 체크할 발생번호
  var checkRefNo = ""; // 비교발생번호
  var dupCnt = 0; // 중복카운트(발생번호)
  var dupCnt1 = 0; // 중복카운트(거래처)
  var dupCnt2 = 0; // 중복카운트(귀속부서)
  var amtSumD = 0; // 차변금액sum
  var amtSumC = 0; // 대변금액sum
  var ramtSumD = 0; // 차변잔액sum
  var ramtSumC = 0; // 대변변잔액sum
  var amtFcrcSumD = 0; // 차변금액(외화)sum
  var amtFcrcSumC = 0; // 대변금액(외화)sum
  var ramtFcrcSumD = 0; // 차변잔액(외화)sum
  var ramtFcrcSumC = 0; // 대변잔액(외화)sum
  var settleClsCd = ""; // 정리구분

  // 건수체크
  for (var i = 0; i < ds_slipcontents.getTotalRow(); i++) {
    // 차변건 체크
    //alert("ds_slipcontents.NameValue(i,drcrClsCd)="+ds_slipcontents.NameValue(i,"drcrClsCd"));
    //alert("ds_slipcontents.NameValue(i,settleClsCd)="+ds_slipcontents.NameValue(i,"settleClsCd"));
    if (ds_slipcontents.getCellData(i, "drcrClsCd") == "D" && ds_slipcontents.getCellData(i, "settleClsCd") != "0") {
      // 차변정리대상건 카운트증가
      cntStlTargetD++;
      if (ds_slipcontents.getCellData(i, "stlOutbrNo") != "") {
        cntStlD++;
        if (ds_slipcontents.getCellData(i, "acctCd") == "2100510") {
          // 선수금-일반
          settleClsCd = "3";
        } else {
          settleClsCd = "2";
        }
      }
    }
    if (ds_slipcontents.getCellData(i, "drcrClsCd") == "C" && ds_slipcontents.getCellData(i, "settleClsCd") != "0") {
      // 대변정리대상건 카운트증가
      cntStlTargetC++;
      if (ds_slipcontents.getCellData(i, "stlOutbrNo") != "") {
        cntStlC++;
        settleClsCd = "1";
      }
    }
  } // end of for

  //정리대상건이 있으면 체크
  if (cntStlTargetD > 0 || cntStlTargetC > 0) {
    //------------------------------------------------------------------------------------
    // case1. 대상건이 차대변 양쪽에 있고, 정리건이 차대변 양쪽에 있는경우 에러
    //        (cntStlTargetD > 0 && cntStlTargetC > 0) && (cntStlD > 0 && cntStlC > 0)
    // case2. 대상건이 차대변 양쪽에 있고, 정리건이 차대변 양쪽에 없는경우 에러
    //        (cntStlTargetD > 0 && cntStlTargetC > 0) && (cntStlD == 0 && cntStlC == 0)
    // case3. 차변에 대상건이 있고, 차변건들중 특정건이 정리건이 없는경우 에러
    //        (cntStlTargetD > 0 && cntStlTargetC == 0) && (cntStlD != cntStlTargetD)
    // case4. 대변에 대상건이 있고, 대변건들중 특정건이 정리건이 없는경우 에러
    //        (cntStlTargetD == 0 && cntStlTargetC > 0) && (cntStlC != cntStlTargetC)
    //------------------------------------------------------------------------------------

    /* case1 */
    if (cntStlTargetD > 0 && cntStlTargetC > 0 && cntStlD > 0 && cntStlC > 0) {
      await $c.win.alert($p, "차대변 동시에 정리할 수 없습니다.");
      return false;
    }

    // 중복발생번호 사용여부 체크
    for (var j = 0; j < ds_slipcontents.getTotalRow(); j++) {
      targetRefNo = ds_slipcontents.getCellData(j, "stlOutbrNo"); // 정산발생번호
      for (var k = 0; k < ds_slipcontents.getTotalRow(); k++) {
        if (j != k) {
          checkRefNo = ds_slipcontents.getCellData(k, "stlOutbrNo");
          // 참조번호가 같으면 카운트증가
          if (targetRefNo != "" && targetRefNo == checkRefNo) {
            dupCnt++;
          }
        }
        if (dupCnt > 0) {
          await $c.win.alert($p, "참조번호 한개를 여러번 준용할 수 없습니다.");
          return false;
        }
      } // end for
    } // end for

    // 채권정리시 거래처가 다르면 에러처리
    var sTargetClntNo = "";
    var sCheckClntNo = "";
    var sTargetAcctDeptCd = "";
    var sCheckAcctDeptCd = "";
    if (cntStlTargetC > 0 && cntStlTargetC == cntStlC) {
      for (var m = 0; m < ds_slipcontents.getTotalRow(); m++) {
        sTargetClntNo = ds_slipcontents.getCellData(m, "mgntClntNo");
        sTargetAcctDeptCd = ds_slipcontents.getCellData(m, "acctDeptCd");
        for (var n = m + 1; n <= ds_slipcontents.getTotalRow(); n++) {
          if (m != n && ds_slipcontents.getCellData(m, "drcrClsCd") == "C" && ds_slipcontents.getCellData(n, "drcrClsCd") == "C") {
            sCheckClntNo = ds_slipcontents.getCellData(n, "mgntClntNo");
            sCheckAcctDeptCd = ds_slipcontents.getCellData(n, "acctDeptCd");

            // 귀속부서가 다르면 카운트증가
            if (sTargetAcctDeptCd != "" && sTargetAcctDeptCd != sCheckAcctDeptCd) {
              dupCnt2++;
            }
          }
        } // end for
      } // end for

      //if(dupCnt2 > 0){  김학봉대리 요청으로 주석처리 2015-11-19
      //	alert("채권계정 정리시 동일 귀속부서로만 등록하셔야 합니다.");
      //	return false;
      //}
    }

    // 금액sum 체크
    for (var m = 0; m < ds_slipcontents.getTotalRow(); m++) {
      if (ds_slipcontents.getCellData(m, "stlOutbrNo") != "") {
        // 차변-
        if (ds_slipcontents.getCellData(m, "drcrClsCd") == "D") {
          amtSumD = amtSumD + parseInt(ds_slipcontents.getCellData(m, "amt"));
          ramtSumD = ramtSumD + parseInt(ds_slipcontents.getCellData(m, "stlRamt"));
        }
        // 대변
        if (ds_slipcontents.getCellData(m, "drcrClsCd") == "C") {
          amtSumC = amtSumC + parseInt(ds_slipcontents.getCellData(m, "amt"));
          ramtSumC = ramtSumC + parseInt(ds_slipcontents.getCellData(m, "stlRamt"));
        }
        //외화
        if (ds_slipcontents.getCellData(m, "crcCd") != "KRW") {
          // 차변
          if (ds_slipcontents.getCellData(m, "drcrClsCd") == "D") {
            amtFcrcSumD = amtFcrcSumD + parseFloat(ds_slipcontents.getCellData(m, "amtFcrc"));
            ramtFcrcSumD = ramtFcrcSumD + parseFloat(ds_slipcontents.getCellData(m, "stlRamtFcrc"));
          }
          // 대변
          if (ds_slipcontents.getCellData(m, "drcrClsCd") == "C") {
            amtFcrcSumC = amtFcrcSumC + parseFloat(ds_slipcontents.getCellData(m, "amtFcrc"));
            ramtFcrcSumC = ramtFcrcSumC + parseFloat(ds_slipcontents.getCellData(m, "stlRamtFcrc"));
          }
        }
      }
    }

    // 채권정리인경우 - 대변금액과 잔액체크
    if (settleClsCd == "1") {
      if (parseFloat(amtSumC) > parseFloat(ramtSumC)) {
        await $c.win.alert($p, "대변의 금액[" + f_formatComma(amtSumC) + "]이 채권잔액[" + f_formatComma(ramtSumC) + "]보다 큽니다");
        return false;
      }
    }

    // 채무정리인경우 - 차변금액과 잔액체크
    if (settleClsCd == "2") {
      if (parseFloat(amtSumD) != parseFloat(ramtSumD)) {
        await $c.win.alert($p, "차변의 금액[" + f_formatComma(amtSumD) + "]이 채무잔액[" + f_formatComma(ramtSumD) + "]과 같지 않습니다.");
        return false;
      }
    }

    // 선수금정리인경우 - 차변금액과 잔액체크
    if (settleClsCd == "3") {
      if (parseFloat(amtSumD) > parseFloat(ramtSumD)) {
        await $c.win.alert($p, "차변의 금액[" + f_formatComma(amtSumD) + "]이 선수금잔액[" + f_formatComma(ramtSumD) + "]보다 큽니다");
        return false;
      }
    }

    // 채권정리인경우 - 대변금액과 잔액체크
    if (settleClsCd == "1") {
      if (parseFloat(amtFcrcSumC) > parseFloat(ramtFcrcSumC)) {
        await $c.win.alert($p, "대변의 금액(외화)[" + f_formatComma(amtFcrcSumC) + "]이 채권잔액(외화)[" + f_formatComma(ramtFcrcSumC) + "]보다 큽니다");
        return false;
      }
      //원화금액 체크
      if (parseFloat(amtFcrcSumC) == parseFloat(ramtFcrcSumC) && parseFloat(amtSumC) != parseFloat(ramtSumC) && parseFloat(amtFcrcSumC) != 0) {
        await $c.win.alert($p, "대변의 금액[" + f_formatComma(amtSumC) + "]이 채권금액[" + f_formatComma(ramtSumC) + "]과  같지 않습니다");
        return false;
      }
    }

    // 채무정리인경우 - 차변금액과 잔액체크
    if (settleClsCd == "2") {
      if (parseFloat(amtFcrcSumD) != parseFloat(ramtFcrcSumD)) {
        await $c.win.alert($p, "차변의 금액(외화)[" + f_formatComma(amtFcrcSumD) + "]이 채무잔액(외화)[" + f_formatComma(ramtFcrcSumD) + "]과 같지 않습니다.");
        return false;
      }
    }

    // 선수금정리인경우 - 차변금액과 잔액체크
    if (settleClsCd == "3") {
      if (parseFloat(amtFcrcSumD) > parseFloat(ramtFcrcSumD)) {
        await $c.win.alert($p, "차변의 금액(외화)[" + f_formatComma(amtFcrcSumD) + "]이 선수금잔액(외화)[" + f_formatComma(ramtFcrcSumD) + "]보다 큽니다");
        return false;
      }
      //원화금액 체크
      if (parseFloat(amtFcrcSumD) == parseFloat(ramtFcrcSumD) && parseFloat(amtSumD) != parseFloat(ramtSumD) && parseFloat(amtFcrcSumD) != 0) {
        await $c.win.alert($p, "차변의 금액[" + f_formatComma(amtSumD) + "]이 선수금금액[" + f_formatComma(ramtSumD) + "]과  같지 않습니다");
        return false;
      }
    }

    // popup에서 returnValue내려받은후 발생번호에 영향을 미치는 요인이 변경되었을시 에러처리한다.
    // 발생번호에 영향을 미치는 요인 : 계정, 부서, 거래처, 통화, 채대구분
    for (var i = 0; i < ds_slipcontents.getTotalRow(); i++) {
      if (ds_slipcontents.getCellData(i, "stlOutbrNo") != "") {
        if (ds_slipcontents.getCellData(i, "acctCd") != ds_slipcontents.getCellData(i, "stlAcctCd")) {
          await $c.win.alert($p, "참조번호의 계정코드 불일치입니다.\n\n참조번호 선택후 계정코드가 변경 되었습니다.\n\n정리하실 계정의 참조번호를 다시 선택해 주세요.");
          return false;
        }
        if (ds_slipcontents.getCellData(i, "acctDeptCd") != ds_slipcontents.getCellData(i, "stlAcctDeptCd")) {
          await $c.win.alert($p, "참조번호의 귀속부서 불일치입니다.\n\n참조번호 선택후 귀속부서가 변경 되었습니다.\n\n정리하실 계정의 참조번호를 다시 선택해 주세요.");
          return false;
        }
        if (ds_slipcontents.getCellData(i, "mgntClntNo") != ds_slipcontents.getCellData(i, "stlClntNo")) {
          await $c.win.alert($p, "참조번호의 거래처 불일치입니다.\n\n참조번호 선택후 거래처가 변경 되었습니다.\n\n정리하실 계정의 참조번호를 다시 선택해 주세요.");
          return false;
        }
        if (ds_slipcontents.getCellData(i, "crcCd") != ds_slipcontents.getCellData(i, "stlCrcCd")) {
          await $c.win.alert($p, "참조번호의 통화코드 불일치입니다.\n\n참조번호 선택후 통화코드가 변경 되었습니다.\n\n정리하실 계정의 참조번호를 다시 선택해 주세요.");
          return false;
        }
      }
    }

    // wlghchl 계정일때만 정리금액 채권,채무,선수금 잔액을 표시한다.
    if (settleClsCd == "1") {
      scwin.customAlert("wlghchl", "정리금액 = " + amtSumC + "\n" + "채권잔액 = " + ramtSumC + "\n" + "정리금액(외화) = " + amtFcrcSumC + "\n" + "채권잔액(외화) = " + ramtFcrcSumC + "\n");
    } else if (settleClsCd == "2") {
      scwin.customAlert("wlghchl", "정리금액 = " + amtSumD + "\n" + "채무잔액 = " + ramtSumD + "\n" + "정리금액(외화) = " + amtFcrcSumD + "\n" + "채무잔액(외화) = " + ramtFcrcSumD + "\n");
    } else {
      scwin.customAlert("wlghchl", "정리금액   = " + amtSumD + "\n" + "선수금잔액 = " + ramtSumD + "\n" + "정리금액(외화)   = " + amtFcrcSumD + "\n" + "선수금잔액(외화) = " + ramtFcrcSumD + "\n");
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 접속자가 특정유저일때만, 경고창이 출력되게 프로그래밍
//-------------------------------------------------------------------------
scwin.customAlert = async function (param_user_Id, alertMessage) {
  if (param_user_Id == scwin.user_id) {
    await $.c.win.alert(alertMessage);
  } else {
    return;
  }
  return;
};

//-------------------------------------------------------------------------
// 히든값체크
//-------------------------------------------------------------------------
scwin.f_HiddenCheck = async function (str, msg) {
  // console.log("=== f_HiddenCheck   str ["+str.getValue()+"] msg ["+ msg+"]");

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
  if (msg == "발행부서" && str.getValue().trim() != scwin.ed_slipAcctDeptCd_hidVal || msg == "계정" && str.getValue().trim() != scwin.ed_acctCd_hidVal || msg == "귀속부서" && str.getValue().trim() != scwin.ed_acctDeptCd_hidVal || msg == "거래처" && str.getValue().trim() != scwin.ed_mgntClntNo_hidVal || msg == "사원번호" && str.getValue().trim() != scwin.ed_mgntEmpNo_hidVal) {
    console.log("  - MSG_CM_ERR_038 유효한 " + msg + " 가 아닙니다 !!!   계정hid [" + scwin.ed_acctCd_hidVal + "]  발행부서hid [" + scwin.ed_slipAcctDeptCd_hidVal + "]");
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_038, [msg])); // "유효한 %1가 아닙니다."
    // str.SelectAll = "true";
    // str.Focus();
    str.focus();
    return false;
  } else {
    return true;
  }
};

// @@ ====== 저장 ============================================================================== //

//-------------------------------------------------------------------------
// 발행 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  console.log("=== f_Save (발행) ==================================================");

  // debugger;
  var clntCrnChk = "";
  // if(ds_slip.isUpdated==false && ds_slipcontents.isUpdated==false){
  if (ds_slip.getModifiedIndex().length == 0 && ds_slipcontents.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (ds_slipcontents.getTotalRow() == 0) {
    await $c.win.alert($p, "데이타가 없습니다.");
    return;
  }
  var countAcctCd1 = 0;
  var countAcctCd2 = 0;
  var k = 0;
  for (var i = 0; i < ds_slipcontents.getTotalRow(); i++) {
    k = i + 1; // 메시지용

    if (lc_crcCd.getValue() != ACConstants.KOREA_WON && scwin.checkMain == "0") {
      var changeExchRt = parseFloat(ds_slipcontents.getCellData(i, "exchRt"));
      ds_exchRtSearch.set("crcCd", ds_slipcontents.getCellData(i, "crcCd"));
      ds_exchRtSearch.set("stdDt", ica_slipDt.getValue());
      // ds_exchRtSearch.UseChangeInfo = false;

      // tr_exchRt.Post();
      let e = await $c.sbm.execute($p, sbm_exchRt);
      /*
      <!-- 통화코드 DataSet -->
      language=JavaScript for=tr_exchRt event=OnSuccess()>
          cfEnableObj(ed_amtFcrc, true);
      */
      if (e.responseJSON.resultDataSet[0].Code != 0) return;
      checkExchRt = parseFloat(ds_exchRt.getCellData(ds_exchRt.getRowPosition(), "stdExchRt")); // 기준 환율

      //alert(i + "번째 checkExchRt : " + checkExchRt);
      //alert(i + "번째 changeExchRt : " + changeExchRt);

      console.log("    [" + i + "] checkExchRt : " + checkExchRt + " changeExchRt : " + changeExchRt);
      if (changeExchRt < checkExchRt * 0.9 || changeExchRt > checkExchRt * 1.1) {
        await $c.win.alert($p, '통화코드 선택시 환율 금액 : ' + checkExchRt + '원' + '\n' + '환율의 90%  가 되는 금액  : ' + Math.round(checkExchRt * 0.9 * 100) / 100.00 + '원' + '\n' + '환율의 110% 가 되는 금액  : ' + Math.round(checkExchRt * 1.1 * 100) / 100.00 + '원' + '\n' + '\n' + k + "번째행에 입력된 환율은 기준 환율의 " + '\n' + "90% ~ 110% 사이의 값 이어야 합니다.");
        return;
      }
    }

    // 통장번호 필수 입력 체크(2017.02.27 추가)
    if (ds_slipcontents.getCellData(i, "mgntNo") == "" && ds_slipcontents.getCellData(i, "mgntNm") == "통장번호") {
      await $c.win.alert($p, "통장번호는 필수로 입력 하여야 합니다");
      ed_mgntNo.focus();
      return;
    }

    // 부가세 대급금이면서 차변이거나, 부가세예수금이면서 대변일 경우 이 체크로직을 탄다.
    // 1111210 : 부가세대급금-일반, 2100710 : 부가세예수금-일반
    if (ds_slipcontents.getCellData(i, "acctCd") == "1111210" && ds_slipcontents.getCellData(i, "drcrClsCd") == "D" || ds_slipcontents.getCellData(i, "acctCd") == "2100710" && ds_slipcontents.getCellData(i, "drcrClsCd") == "C") {
      if (ds_slipcontents.getCellData(i, "evidClsCd") == "") {
        await $c.win.alert($p, "부가세 계정일때는 증빙종류를 선택하여야 합니다");
        return;
      }
      if (ds_slipcontents.getCellData(i, "crn") == "") {
        await $c.win.alert($p, "부가세 계정일때는 사업자번호를 선택하여야 합니다");
        return;
      }
      if (ds_slipcontents.getCellData(i, "vatDeclarAcctDeptCd") == "") {
        await $c.win.alert($p, "부가세 계정일때는 부가세귀속부서를 선택하여야 합니다");
        return;
      }
      if (ds_slipcontents.getCellData(i, "vatDeclarAcctDeptCd") != ds_slipcontents.getCellData(i, "acctDeptCd")) {
        await $c.win.alert($p, "부가세 계정일때는 부가세귀속부서와 귀속부서가 동일해야 합니다.");
        return;
      }
      if (ds_slipcontents.getCellData(i, "taxinvcDt") == "") {
        await $c.win.alert($p, "부가세 계정일때는 세금계산서일자를 선택하여야 합니다");
        return;
      }

      // 2014 07 14 이경희 : 부가세금액 필드추가 및 부가세 관련 개선에 대해 체크로직 추가
      // 전표발행금액 필수 :  세금계산서-공제,  법인카드-공제,  개인카드-공제,  현금영수증-공제
      if ((ds_slipcontents.getCellData(i, "evidClsCd") == "10" || ds_slipcontents.getCellData(i, "evidClsCd") == "11" || ds_slipcontents.getCellData(i, "evidClsCd") == "40" || ds_slipcontents.getCellData(i, "evidClsCd") == "50" || ds_slipcontents.getCellData(i, "evidClsCd") == "60") && ds_slipcontents.getCellData(i, "deductClsCd") == "1") {
        if (parseInt(ds_slipcontents.getCellData(i, "amt")) == 0) {
          // 전표발행금액
          await $c.gus.cfAlertMsg($p, "금액을 입력해주세요.");
          return false;
        }
      }

      // 금액 0원필수 : 세금계산서-불공제, 영세율세금계산서, 계산서, 법인카드-불공제, 개인카드-불공제, 현금영수증-불공제, 영수증, 기타
      if (ds_slipcontents.getCellData(i, "evidClsCd") == "10" && ds_slipcontents.getCellData(i, "deductClsCd") == "2" || ds_slipcontents.getCellData(i, "evidClsCd") == "11" && ds_slipcontents.getCellData(i, "deductClsCd") == "2" || ds_slipcontents.getCellData(i, "evidClsCd") == "20" || ds_slipcontents.getCellData(i, "evidClsCd") == "30" || ds_slipcontents.getCellData(i, "evidClsCd") == "40" && ds_slipcontents.getCellData(i, "deductClsCd") == "2" || ds_slipcontents.getCellData(i, "evidClsCd") == "50" && ds_slipcontents.getCellData(i, "deductClsCd") == "2" || ds_slipcontents.getCellData(i, "evidClsCd") == "60" && ds_slipcontents.getCellData(i, "deductClsCd") == "2" || ds_slipcontents.getCellData(i, "evidClsCd") == "70" || ds_slipcontents.getCellData(i, "evidClsCd") == "99") {
        if (parseInt(ds_slipcontents.getCellData(i, "amt")) != 0) {
          // 전표발행금액
          await $c.gus.cfAlertMsg($p, k + "행의 " + ds_slipcontents.nameValue(i, "acctCd") + "계정의 금액은 0원이어야 합니다.");
          return false;
        }
      }

      // 공급금액(부가세자료로 넘어가는금액) 필수 :  세금계산서, 영세율세금계산서, 계산서, 법인카드, 개인카드, 현금영수증, 영수증, 기타
      if (ds_slipcontents.getCellData(i, "evidClsCd") == "10" || ds_slipcontents.getCellData(i, "evidClsCd") == "11" || ds_slipcontents.getCellData(i, "evidClsCd") == "20" || ds_slipcontents.getCellData(i, "evidClsCd") == "30" || ds_slipcontents.getCellData(i, "evidClsCd") == "40" || ds_slipcontents.getCellData(i, "evidClsCd") == "50" || ds_slipcontents.getCellData(i, "evidClsCd") == "60" || ds_slipcontents.getCellData(i, "evidClsCd") == "70" || ds_slipcontents.getCellData(i, "evidClsCd") == "99") {
        if (parseInt(ds_slipcontents.getCellData(i, "spplyAmt")) == 0) {
          // 공급금액
          await $c.gus.cfAlertMsg($p, "공급금액을 입력해주세요.");
          return false;
        }
      }

      // 부가세금액(부가세자료로 넘어가는금액) 필수 : 세금계산서, 법인카드, 개인카드, 현금영수증
      if (ds_slipcontents.getCellData(i, "evidClsCd") == "10" || ds_slipcontents.getCellData(i, "evidClsCd") == "11" || ds_slipcontents.getCellData(i, "evidClsCd") == "40" || ds_slipcontents.getCellData(i, "evidClsCd") == "50" || ds_slipcontents.getCellData(i, "evidClsCd") == "60") {
        if (parseInt(ds_slipcontents.getCellData(i, "vatAmt")) == 0) {
          // 부가세금액
          await $c.gus.cfAlertMsg($p, "부가세금액을 입력해주세요.");
          return false;
        }
      }

      // 부가세금액 0원필수 : 영세율세금계산서, 계산서, 영수증, 기타
      if (ds_slipcontents.getCellData(i, "evidClsCd") == "20" || ds_slipcontents.getCellData(i, "evidClsCd") == "30" || ds_slipcontents.getCellData(i, "evidClsCd") == "70" || ds_slipcontents.getCellData(i, "evidClsCd") == "99") {
        if (parseInt(ds_slipcontents.getCellData(i, "vatAmt")) != 0) {
          // 부가세금액
          await $c.gus.cfAlertMsg($p, k + "행의 " + ds_slipcontents.getCellData(i, "acctCd") + "계정의 부가세금액은 0원이어야 합니다.");
          return false;
        }
      }

      // 영세율세금계산서 일때 영세구분 필수
      if (ds_slipcontents.getCellData(i, "evidClsCd") == "20" && ds_slipcontents.getCellData(i, "zeroTaxClsCd") == "") {
        await $c.gus.cfAlertMsg($p, k + "행의 증빙종류가 영세율세금계산서 일때 영세구분을 선택해주세요.");
        return false;
      }
      var chkNum = 0;
      var p_crn = "";
      var p_clntCrn = "";
      for (j = 0; j < ds_slipcontents.getTotalRow(); j++) {
        if (ds_slipcontents.getCellData(i, "crn") != ds_slipcontents.getCellData(j, "clntCrn")) {
          if (ds_slipcontents.getCellData(j, "clntCrn").length == "10") {
            p_clntCrn = ds_slipcontents.getCellData(j, "clntCrn").substr(0, 3) + "-" + ds_slipcontents.getCellData(j, "clntCrn").substr(3, 2) + "-" + ds_slipcontents.getCellData(j, "clntCrn").substr(5, 5);
          } else {
            p_clntCrn = ds_slipcontents.getCellData(j, "clntCrn").substr(0, 6) + "-" + ds_slipcontents.getCellData(j, "clntCrn").substr(6, 7);
          }
          clntCrnChk = clntCrnChk + p_clntCrn + ",";
          chkNum = chkNum + 1;
        }
      }
      if (ds_slipcontents.getCellData(i, "crn").length == "10") {
        p_crn = ds_slipcontents.getCellData(i, "crn").substr(0, 3) + "-" + ds_slipcontents.getCellData(i, "crn").substr(3, 2) + "-" + ds_slipcontents.getCellData(i, "crn").substr(5, 5);
      } else {
        p_crn = ds_slipcontents.getCellData(i, "crn").substr(0, 6) + "-" + ds_slipcontents.getCellData(i, "crn").substr(6, 7);
      }
      if (chkNum > 0) {
        clntCrnChk = "부가세계정 사업자번호(" + p_crn + ")가 다른 계정 거래처의 \n사업자번호(" + clntCrnChk + ")와 다릅니다. \n";
      }
    }
    if (ds_slipcontents.getCellData(i, "acctCd") == "1111310") {
      // 선급법인세-법인세분
      countAcctCd1++;
    }
    if (ds_slipcontents.getCellData(i, "acctCd") == "1111320") {
      // 선급법인세-지방소득세분
      countAcctCd2++;
    }
  } // end of for

  if (countAcctCd1 > 0 && countAcctCd2 > 0) {} else {
    if (countAcctCd1 > 0) {
      // if( cfConfirmMsg("선급법인세-법인세분과 선급법인세-지방소득세분 중 한 계정만 선택하셨습니다. 이대로 진행할까요?")==true) {
      let rtn1 = await $c.win.confirm($p, "선급법인세-법인세분과 선급법인세-지방소득세분 중 한 계정만 선택하셨습니다. 이대로 진행할까요?");
      if (!rtn1) return false;
    } else if (countAcctCd2 > 0) {
      // if( cfConfirmMsg("선급법인세-법인세분과 선급법인세-지방소득세분 중 한 계정만 선택하셨습니다. 이대로 진행할까요?")==true) {
      let rtn2 = await $c.win.confirm($p, "선급법인세-법인세분과 선급법인세-지방소득세분 중 한 계정만 선택하셨습니다. 이대로 진행할까요?");
      if (!rtn2) return false;
    }
  }

  // 투입불가 계정이 들어갔는지 체크.
  if (scwin.isSubCompany == false) {
    // for(i=1; i<=ds_slipcontents.CountRow; i++){
    // 	for(j=1; j<=ds_acctCd.CountRow; j++){
    for (i = 0; i < ds_slipcontents.getTotalRow(); i++) {
      for (j = 0; j < ds_acctCd.getTotalRow(); j++) {
        if (ds_slipcontents.getCellData(i, "acctCd") == ds_acctCd.getCellData(j, "col1")) {
          await $c.win.alert($p, k + "행에 입력한 계정(" + ds_slipcontents.getCellData(i, "acctCd") + ")은 투입불가 계정입니다.");
          return;
        }
      }
    }
  }

  // 필수 입력사항 체크
  // if ( f_Validation()==true) {
  let rtn3 = await scwin.f_Validation();
  if (rtn3) {
    // 차변,대변 체크
    var Dsum = 0; // 차변합계
    var Csum = 0; // 대변합계
    var adjmClsCnt = 0; // 
    for (i = 0; i < ds_slipcontents.getTotalRow(); i++) {
      if (ds_slipcontents.getCellData(i, "drcrClsCd") == "D") {
        // 차변
        Dsum = Dsum + parseFloat(ds_slipcontents.getCellData(i, "amt"));
      }
      if (ds_slipcontents.getCellData(i, "drcrClsCd") == "C") {
        // 대변
        Csum = Csum + parseFloat(ds_slipcontents.getCellData(i, "amt"));
      }
      if (ds_slipcontents.getCellData(i, "adjmClsCd") == "4") {
        // 가지급금
        adjmClsCnt = adjmClsCnt + 1;
      }
    }
    console.log("  Dsum (차변) [" + Dsum + "]  Csum (대변) [" + Csum + "]  adjmClsCnt (가지급금건수) [" + adjmClsCnt + "]  ds_provHeader건수 [" + ds_provHeader.getTotalRow() + "]");
    if (Dsum != Csum) {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "차변과 대변금액"));
      ed_amt.focus();
      return;
    }
    if (adjmClsCnt > 0 && ds_provHeader.getTotalRow() <= 0) {
      await $c.win.alert($p, "가지급정리내역이 없습니다. 정리금액을 입력하세요.");
      return false;
    }

    // 채권,채무,선수금 정리내역 체크
    // if ( f_checkSettlePossiblity()==false ) {
    let rtn4 = await scwin.f_checkSettlePossiblity();
    if (!rtn4) return false;

    //chk
    if (lc_crcCd.getValue() != ACConstants.KOREA_WON) {
      var settleAmtFcrc = parseFloat(ed_amtFcrc.getValue()); //외화금액
      var settleAmt = parseFloat(ed_amt.getValue()); //금액
      var selectFcc = 0;
      if (lc_crcCd.getValue() == "JPY") {
        selectFcc = Math.floor(paserFloat(ed_amtFcrc.getValue().trim()) * parseFloat(ed_adjustExchRt.getValue().trim())) / 100;
      } else {
        selectFcc = Math.floor(parseFloat(ed_amtFcrc.getValue().trim()) * parseFloat(ed_adjustExchRt.getValue().trim()));
      }
      var seledt = selectFcc - 100;
      var selede = selectFcc + 100;
      console.log("  settleAmt [" + settleAmt + "] - selectFcc [" + selectFcc + "]  seledt [" + seledt + "]  selede [" + selede + "]   userEmpNo [" + scwin.userEmpNo + "]");
      if (seledt > settleAmt || settleAmt > selede) {
        if (scwin.userEmpNo == "198015" || scwin.userEmpNo == "198078" || scwin.userEmpNo == "198050") {//BIDC 이재설 과장, 최현주 대리 추가 (박경진대리 퇴사로 최현주 대리 변경), 안재관 과장 추가(안중욱 사원 퇴사로 변경)일경우 예외처리
        } else {
          await $c.win.alert($p, "외화금액 입력 후  원화금액 변경시 원화금액이 10원이상 10원 이하 의 값을 입력 할수없습니다  원화금액을 확인 하세요.");
          return false;
        }
      }
    }
    var chkPayAmt = 0;
    var chkSuspenseAmt = 0;
    var payAmt = 0;
    var suspenseAmt = 0;

    // var slipDate = new Date(ed_slipDt.getValue().substring(0, 4), ed_slipDt.getValue().substring(4, 6), ed_slipDt.getValue().substring(6, 8));

    // KYU_TEST
    /*
        작성일자 : 2021-11-30
        slipBfLast : Sun Oct 31 00:00:00 UTC+0900 2021  slipBfMm : 10     lastDate : 20211031  (얘만 사용)
     */
    // var slipBfLast = new Date( slipDate.getFullYear(),  (slipDate.getMonth() - 1), 0);
    // var slipBfMm = slipBfLast.getMonth();
    // slipBfMm += 1;
    // slipBfMm = slipBfMm < 10 ? "0" + slipBfMm : slipBfMm;
    // var slipBfDd = slipBfLast.getDate() < 10 ? "0" + slipBfLast.getDate() : slipBfLast.getDate();

    var slipDate = ica_slipDt.getValue();
    var lastDateTemp = $c.date.getDateAddMonthDirection($p, slipDate, -1, "L");
    var lastDate = lastDateTemp.substr(0, 4);

    // lastDate 만 생성하면 됨
    var bfMmDay = 0;
    var fullDay = 0;

    // console.log("  slipBfLast : "+ slipBfLast +"  slipBfMm : "+slipBfMm+"  lastDate : "+ lastDate);
    console.log("  lastDate : " + lastDate);
    for (i = 0; i < ds_slipcontents.getTotalRow(); i++) {
      stDate = ds_slipcontents.getCellData(i, "mgntTermStDt");
      endDate = ds_slipcontents.getCellData(i, "mgntTermEndDt");
      if (!$c.gus.cfIsNull($p, ds_slipcontents.getCellData(i, "mgntTermStDt")) || !$c.gus.cfIsNull($p, ds_slipcontents.getCellData(i, "mgntTermEndDt"))) {
        bfMmDay = parseInt($c.date.diffDate($p, stDate, lastDate)) + 1;
        fullDay = parseInt($c.date.diffDate($p, stDate, endDate)) + 1;
        console.log("  bfMmDay (start-last) : " + bfMmDay + "  fullDay (start-end) : " + fullDay);
        if (parseInt($c.date.diffDate($p, stDate, lastDate)) > 0) {
          payAmt = Math.round(bfMmDay / fullDay * parseInt(ds_slipcontents.getCellData(i, "amt")));
          suspenseAmt = parseInt(ds_slipcontents.getCellData(i, "amt")) - payAmt;
          chkPayAmt += payAmt;
          chkSuspenseAmt += suspenseAmt;
        } else {
          if (scwin.f_suspenseCheck(ds_slipcontents.getCellData(i, "mgntTermStDt"), ds_slipcontents.getCellData(i, "mgntTermEndDt"), ica_slipDt.getValue())) {
            chkSuspenseAmt += parseInt(ds_slipcontents.getCellData(i, "amt"));
          } else {
            chkPayAmt += parseInt(ds_slipcontents.getCellData(i, "amt"));
          }
        }
      }
    }
    // debugger;
    var chkConfirm = "";
    if (chkSuspenseAmt == 0 && chkPayAmt == 0) {
      chkConfirm = "발행하시겠습니까?";
    } else {
      chkConfirm = "- 당월 비용 " + chkPayAmt + "원," + "\n" + "- 선급 비용 " + chkSuspenseAmt + "원으로 전표 발행됩니다." + "\n" + "발행하시겠습니까?";
    }

    // 대변 지급계정에 지급체크 되어있는지 체크.
    if (scwin.isSubCompany == false || scwin.vCoCd == "029") {
      // 029 : 넥스트로
      for (var i = 0; i < ds_slipcontents.getTotalRow(); i++) {
        for (j = 0; j < ds_payAcctCd.getTotalRow(); j++) {
          // 지급계정조회
          if (ds_slipcontents.getCellData(i, "payProcYn") == 0 && ds_slipcontents.getCellData(i, "drcrClsCd") == "C" &&
          // 대변
          ds_slipcontents.getCellData(i, "acctCd") == ds_payAcctCd.getCellData(j, "col2")) {
            // if( cfConfirmMsg(i +" 행 대변 계정에 지급체크가 되어있지 않습니다. 이대로 전표를 발행하시겠습니까?")==true) {
            let rtn5 = await $c.win.confirm($p, i + 1 + " 행 대변 계정에 지급체크가 되어있지 않습니다. 이대로 전표를 발행하시겠습니까?");
            if (!rtn5) return false;
          }
        }
      }
    }

    // if (cfValidate([gr_slipcontents])) {
    console.log(" --- rtn6 ");
    let rtn6 = await $c.gus.cfValidate($p, [gr_slipcontents]);
    if (rtn6) {
      console.log("== == cfValidate : gr_slipcontents  정상 ====");
      // if(confirm(clntCrnChk + chkConfirm)==true){
      let rtn7 = await $c.win.confirm($p, clntCrnChk + chkConfirm);
      if (rtn7) {
        // 가지급금 적요,정리일자
        //if ( lc_adjmClsCd.BindColVal == PREPAY){
        for (i = 0; i < ds_prov.getTotalRow(); i++) {
          for (j = 0; j < ds_provHeader.getTotalRow(); j++) {
            if (ds_prov.getCellData(i, "rltSeq") == ds_provHeader.getCellData(j, "rltSeq")) {
              ds_prov.setCellData(i, "summary", ds_provHeader.getCellData(j, "summary"));
              ds_prov.getCellData(i, "setlDt", ds_provHeader.getCellData(j, "setlDt"));
              ds_prov.getCellData(i, "bankbookNo", ds_provHeader.getCellData(j, "bankbookNo"));
              break;
            }
          }
        }
        //}
        //지급방법이 지로납부이면 alert띄움
        for (i = 0; i < ds_slipcontents.getTotalRow(); i++) {
          if (ds_slipcontents.getCellData(i, "reqPayMthdCd") == scwin.GIRO) {
            await $.c.win.alert("지로를 재경팀으로 송부하시기 바랍니다.");
          }
        }
        var dc = ds_slip.getAllArray();
        console.log("  *** ds_slip : " + JSON.stringify(dc));
        dc = ds_slipcontents.getAllArray();
        console.log("  *** ds_slipcontents (" + ds_slipcontents.getTotalRow() + ") : " + JSON.stringify(dc));
        dc = ds_prov.getAllArray();
        console.log("  *** ds_prov : " + JSON.stringify(dc));

        // tr_save.Post();
        await $c.sbm.execute($p, sbm_save);
      }
    }
  }
}; // end of f_Save

//-------------------------------------------------------------------------
// 발행 submitdone  @@ @
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  console.log("▷ sbm_save_submitdone (발행 submitdone)");

  // language=JavaScript for=tr_save event=OnSuccess()>
  // if(ds_retSlip.NameValue(1,"slipNo") !=""){
  // 	cfShowSlipInfo(ds_retSlip.NameValue(1,"slipNo"));
  // }

  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  if (ds_slip.getCellData(0, "slipNo") != "") {
    await $c.gus.cfShowSlipInfo($p, ds_retSlip.getCellData(0, "slipNo"));
  }
  console.log("");
  console.log("");
  console.log("========== ========== 대체 전표발행후 화면 정리 시작 =====================");
  scwin.state = "Y";
  scwin.delflag = "N";
  ds_slipcontents.setJSON([]);
  $c.gus.cfDisableKeyData($p);
  console.log("  발행후 ==--== 비활성 (cfDisableKeyData)");

  // KYU_NEW : 발행부서돋보기는 활성 처리
  $c.gus.cfEnableKeyData($p, [btn_slipAcctDeptCd]);
  console.log("  발행후 NEW ==--== 활성 (발행부서돋보기)");
  $c.gus.cfEnableAllBtn($p);
  console.log("  발행후 ==--== 활성 (cfEnableAllBtn)");
  // debugger;
  // KYU_NEW : 히든값 초기화
  await scwin.f_setHidVal();
  await scwin.f_OnLoad();
  console.log("========== f_OnLoad 실행 이후 =====================");

  // KYU_NEW : 발행부서 팝업 - f_OnLoad2 실행 (초기 화면으로 복원)
  //           f_OnLoad 에 팝업 체크가 있기는 하지만 팝업 실행이 안됨 (내용 수정 대신 팝업 다시 로딩)
  await scwin.f_openPopUp('1', 'T');

  // KYU_TEST : 2026-04-03 - 발행후 초기화면 세팅
  $c.gus.cfDisableObjects($p, [ica_mgntDt, ed_mgntTermStDt, ed_mgntTermEndDt, udc_mgntTermDt, ed_mgntEmpNo, ed_mgntClntNo, ed_refNo]);
  console.log("  NEW ==--== 비활성 (관리일자, 관리기간(전체), 사원번호, 거래처, 지급/채권번호)");

  // ======= f_OnLoad2 END ===== 까지 실행
  // debugger;
  // $c.gus.cfEnableObj(ica_slipDt, true);
  // $c.gus.cfEnableObj(ed_slipAcctDeptCd, true);
  // $c.gus.cfEnableObj(ed_slipAcctDeptNm, true);

  $c.gus.cfEnableObjects($p, [ica_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm]);
  console.log("  발행후 ==--== 활성 (작성일자,작성부서,작성부서명)");
};

// @@ ====== 기타 ============================================================================== //

//-------------------------------------------------------------------------  
// 접속자가 특정유저일때만, 경고창이 출력되게 프로그래밍 
//-------------------------------------------------------------------------  
scwin.customAlert = function (param_user_Id, alertMessage) {
  if (param_user_Id == scwin.user_id) {
    $c.win.alert($p, alertMessage);
  } else {
    return;
  }
  return;
};

// 3자리마다 콤마표시
scwin.f_formatComma = function (inVal) {
  var newValue = inVal + ""; //숫자를 문자열로 변환
  var len = newValue.length; //길이체크
  var ch = "";
  var j = 1;
  var outVal = ""; //return value

  newValue = newValue.replace(/\,/gi, ''); //콤마제거
  len = newValue.length; //콤마제거된 문자열길이

  for (var i = len; i > 0; i--) {
    ch = newValue.substring(i - 1, i);
    outVal = ch + outVal;
    if (j % 3 == 0 && i > 1) {
      outVal = "," + outVal;
    }
    j++;
  }
  return outVal;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'form-control cal',id:'ica_slipDt',style:'',title:'작성일자',mandatory:'true',ref:'data:ds_slip.slipDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'발행부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctDeptCdInfo3Popup',onloadCallbackFunc:'',selectID:'retrieveAcctDeptCdInfo3',codeId:'ed_slipAcctDeptCd',popupTitle:'',nameId:'ed_slipAcctDeptNm',style:'',id:'udc_slipAcctDeptCd','ev:onclickEvent':'scwin.udt_slipAcctDeptCd_onclickEvent',code:'slipAcctDeptCd',name:'slipAcctDeptNm',allowCharCode:'0-9',maxlengthCode:'5',refDataCollection:'ds_slip',validTitle:'발행부서',maxlengthName:'50',mandatoryName:'true','ev:onblurCodeEvent':'scwin.udc_slipAcctDeptCd_onblurCodeEvent',btnId:'btn_slipAcctDeptCd',skipOnBlurCodeValueEmpty:'N',mandatoryCode:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm link',disabled:'',escape:'false',id:'btn_pu_evid',style:'',type:'button','ev:onclick':'scwin.f_SlipCopy',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표복사'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'대체전표내역입력',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'귀속부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'retrieveAcctDeptCdInfo3',codeId:'ed_acctDeptCd',popupID:'retrieveAcctDeptCdInfo3Popup',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_acctDeptNm',style:'',class:'w250',id:'udc_acctDeptCd','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',code:'acctDeptCd',name:'acctDeptNm',refDataCollection:'ds_slipcontents',objType:'data',validTitle:'귀속부서',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'5',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent',btnId:'btn_acctDeptCd',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'부가세관리부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_vatDeclarAcctDeptCd',selectID:'retrieveVatDeclarAcctDeptCd',popupID:'retrieveVatDeclarAcctDeptCdPopup',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_vatDeclarAcctDeptNm',style:'',class:'flex_no',id:'udc_vatDeclarAcctDeptCd','ev:onclickEvent':'scwin.udc_vatDeclarAcctDeptCd_onclickEvent',code:'vatDeclarAcctDeptCd',name:'vatDeclarAcctDeptNm',allowCharCode:'0-9',maxlengthCode:'5',refDataCollection:'ds_slipcontents',objType:'data',validTitle:'부가세관리부서','ev:onblurCodeEvent':'scwin.udc_vatDeclarAcctDeptCd_onblurCodeEvent',mandatoryCode:'true',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',btnId:'btn_vatDeclarAcctDeptCd',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'차대구분',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'lc_drcrClsCd',class:'form-control w150',direction:'auto',objType:'data',title:'차대구분',mandatory:'true','ev:onblur':'scwin.lc_drcrClsCd_onblur','ev:onchange':'scwin.lc_drcrClsCd_onchange',ref:'data:ds_slipcontents.drcrClsCd',sortMethod:'ascending',sortOption:'value',emptyItem:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계정',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_group6',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctCd',selectID:'retrieveTransferAcctCdInfo',popupID:'retrieveTransferAcctCdInfoPopup',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_acctNm',style:'',class:'w250',id:'udc_acctCd','ev:onclickEvent':'scwin.udc_acctCd_onclickEvent',code:'acctCd',name:'acctNm',allowCharCode:'0-9',maxlengthCode:'7',refDataCollection:'ds_slipcontents',objType:'data',validTitle:'계정',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_acctCd_onblurCodeEvent',btnId:'btn_acctCd',maxlengthName:'50',skipOnBlurCodeValueEmpty:'N',objTypeName:'data'}},{T:1,N:'xf:select',A:{ref:'data:ds_slipcontents.payProcYn',appearance:'full',style:'',id:'cbx_payProcYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'','ev:onchange':'scwin.f_CheckPayYn',objType:'data',title:'지급처리여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지급'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_recvProcYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data',title:'채권'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'채권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'통화코드/환율',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_group3 ',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'lc_crcCd',class:'form-control w150',direction:'auto',objType:'data',title:'통화코드',mandatory:'true','ev:onchange':'scwin.lc_crcCd_onchange',ref:'data:ds_slipcontents.crcCd',emptyItem:'true'}},{T:1,N:'xf:input',A:{style:';text-align:right;',id:'ed_adjustExchRt',class:'form-control w150',dataType:'float',displayFormat:'#,##0.##',objType:'data',title:'환율',ref:'data:ds_slipcontents.exchRt','ev:onblur':'scwin.ed_adjustExchRt_onblur',maxlength:'7.2',allowChar:'0-9.'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'외화금액',class:'',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:';text-align:right;',id:'ed_amtFcrc',class:'form-control w150',dataType:'float',displayFormat:'#,##0.##',objType:'data',title:'외화금액',ref:'data:ds_slipcontents.amtFcrc',maxlength:'13.2','ev:onblur':'scwin.ed_amtFcrc_onblur',allowChar:'0-9.',validExp:'외화금액:yes:notAllowed=0&maxLength=13'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'금액',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150',id:'ed_amt',style:';text-align:right;',dataType:'number',displayFormat:'#,###',title:'금액',mandatory:'true',ref:'data:ds_slipcontents.amt','ev:onchange':'scwin.ed_amt_onchange',allowChar:'0-9',maxlength:'13',objType:'data',validExp:'금액:yes:notAllowed=0&maxLength=1'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'관리번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_group5',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_mgntNm',class:'form-control w120',title:'관리명',objType:'data',ref:'data:ds_slipcontents.mgntNm'}},{T:1,N:'xf:input',A:{style:'',id:'ed_mgntNo',class:'form-control w130',objType:'data',title:'관리번호',maxlength:'20',ref:'data:ds_slipcontents.mgntNo'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'증빙종류',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_group4',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'',allOption:'',id:'lc_evidClsCd',class:'form-control w150',direction:'auto',objType:'data','ev:onchange':'scwin.lc_evidClsCd_onchange',ref:'data:ds_slipcontents.evidClsCd',sortMethod:'ascending',sortOption:'value',chooseOptionLabel:'없음',visibleRowNum:'12'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_evidClsCd'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'lc_deductClsCd',class:'form-control w150',direction:'auto',objType:'data',ref:'data:ds_slipcontents.deductClsCd',sortMethod:'ascending',sortOption:'value',emptyItem:'true'}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'',allOption:'',id:'lc_zeroTaxClsCd',class:'form-control w150',direction:'auto',objType:'data',ref:'data:ds_slipcontents.zeroTaxClsCd',sortMethod:'ascending',sortOption:'value',chooseOptionLabel:'없음'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업자번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_crn',selectID:'retrieveCrnInfo',popupID:'retrieveCrnInfoPopup',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_crnNm',style:'',class:'w250',id:'udc_crn','ev:onclickEvent':'scwin.udc_crn_onclickEvent',code:'crn',name:'crnNm',allowCharCode:'A-Za-z0-9',refDataCollection:'ds_slipcontents',objType:'data',validTitle:'사업자번호','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent',btnId:'btn_crn',maxlengthCode:'13',objTypeCode:'data',maxlengthName:'50',objTypeName:'data','ev:onblurNameEvent':'scwin.udc_crn_onblurNameEvent',codeWidth:'100',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'branchTr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지점',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'w250',codeId:'ed_branchCd',nameId:'ed_branchNm',onloadCallbackFunc:'',popupID:'RcfBranchAcctDeptPopup',popupTitle:'',selectID:'RcfBranchAcctDept',style:'',id:'udc_branchCd','ev:onclickEvent':'scwin.udc_branchCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_branchCd_onviewchangeNameEvent',refDataCollection:'ds_slipcontents',code:'branchCd',name:'branchNm',objType:'data',validTitle:'지점',btnId:'btn_branchCd',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입항목코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'w250',codeId:'ed_pchsItemCd',nameId:'ed_pchsItemNm',onloadCallbackFunc:'',popupID:'retrieveRcSelpchItemCdPopup',popupTitle:'',selectID:'retrieveRcSelpchItemCd',style:'',id:'udc_pchsItemCd','ev:onclickEvent':'scwin.udc_pchsItemCd_onclickEvent',code:'pchsItemCd',refDataCollection:'ds_slipcontents',allowCharCode:'0-9',objType:'data',validTitle:'매입항목코드',btnId:'btn_pchsItemCd',objTypeCode:'data',objTypeName:'data',name:'pchsItemNm',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'관리일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_mgntDt',class:'form-control cal',calendarValueType:'yearMonthDate',objType:'data',title:'관리일자',ref:'data:ds_slipcontents.mgntDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'관리기간',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'mgntTermStDt',refDataMap:'ds_slipcontents',style:'',id:'udc_mgntTermDt',refEdDt:'mgntTermEndDt',edFromId:'ed_mgntTermStDt',edToId:'ed_mgntTermEndDt',objType:'data',objTypeFrom:'data',objTypeTo:'data',titleFrom:'관리기간From',titleTo:'관리기간To'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사원번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_mgntEmpNo',selectID:'retrieveAcEmpInfo',popupID:'retrieveAcEmpInfoPopup',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_mgntEmpNm',style:'',class:'w250',id:'udc_mgntEmpNo','ev:onclickEvent':'scwin.udc_mgntEmpNo_onclickEvent',code:'mgntEmpNo',name:'mgntEmpNm',refDataCollection:'ds_slipcontents',allowCharCode:'0-9',maxlengthCode:'6',validTitle:'사원번호','ev:onblurCodeEvent':'scwin.udc_mgntEmpNo_onblurCodeEvent',btnId:'btn_mgntEmpNo',maxlengthName:'50',objTypeCode:'data',objTypeName:'data',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{selectID:'retrieveClntEmpNoList',codeId:'ed_mgntClntNo',popupID:'retrieveClntEmpNoListPopup',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_mgntClntNm',style:'',class:'w250',id:'udc_mgntClntNo','ev:onclickEvent':'scwin.udc_mgntClntNo_onclickEvent',code:'mgntClntNo',name:'mgntClntNm',refDataCollection:'ds_slipcontents',allowCharCode:'0-9',maxlengthCode:'6',objType:'data',validTitle:'거래처','ev:onblurCodeEvent':'scwin.udc_mgntClntNo_onblurCodeEvent',maxlengthName:'50',btnId:'btn_mgntClntNo',objTypeName:'data',objTypeCode:'data',skipOnBlurCodeValueEmpty:'N',mandatoryCode:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지급일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_reqDt',class:'form-control cal',calendarValueType:'yearMonthDate',objType:'data',title:'지급일자',ref:'data:ds_slipcontents.reqDt',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지급방법',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'lc_reqPayMthdCd',class:'form-control w150',direction:'auto',objType:'data',title:'지급방법',ref:'data:ds_slipcontents.reqPayMthdCd',sortMethod:'ascending',sortOption:'value',emptyItem:'true','ev:onviewchange':'scwin.lc_reqPayMthdCd_onviewchange'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'어음일수',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:';text-align:right;',id:'ed_draftDdCntCd',class:'form-control w150',objType:'data',title:'어음일수',ref:'data:ds_slipcontents.draftDdCntCd',displayFormat:'#,##0',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'세금계산서일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_taxinvcDt',class:'form-control cal',calendarValueType:'yearMonthDate',objType:'data',title:'세금계산서일자',ref:'data:ds_slipcontents.taxinvcDt',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'정산방법',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_adjmClsCd',class:'form-control w150',direction:'auto',ref:'data:ds_slipcontents.adjmClsCd',objType:'data',title:'정산방법',mandatory:'true',sortMethod:'ascending',sortOption:'value',chooseOptionLabel:'$blank',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'없음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가지급금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_adjmClsCd',type:'button',class:'btn ico sch','ev:onclick':'scwin.f_Prepay',objType:'data',validExp:'금액:yes:notAllowed=0&maxLength=13'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적요',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_summary',class:'form-control ',objType:'data',title:'적요',mandatory:'true',ref:'data:ds_slipcontents.summary',maxlength:'100'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'공급금액',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_spplyAmt',class:'form-control w150 tar',dataType:'number',displayFormat:'#,##0',objType:'data',title:'공급금액','ev:onblur':'scwin.ed_spplyAmt_onblur',ref:'data:ds_slipcontents.spplyAmt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'부가세금액',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w150 tar',id:'ed_vatAmt',style:'',dataType:'number',displayFormat:'#,##0',objType:'data',title:'부가세금액',ref:'data:ds_slipcontents.vatAmt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지로납부기한',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_paymentPrd',class:'form-control cal',calendarValueType:'yearMonthDate',objType:'data',title:'지로납부기한',ref:'data:ds_slipcontents.paymentPrd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지급/채권번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w100',id:'ed_refNo',placeholder:'',style:'',ref:'data:ds_slipcontents.stlOutbrNo',objType:'data',title:'지급채권번호'}},{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_resetSettleNo',style:'',type:'button','ev:onclick':'scwin.f_resetSettleNo',objType:'data'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_setlMthd',style:'',type:'button','ev:onclick':'scwin.f_SetlMthd',objType:'data'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상대계정',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_opntAcctCd',selectID:'retrieveTransferAcctCdInfo2',popupID:'retrieveTransferAcctCdInfo2Popup',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_opntAcctNm',style:'',class:'w250',id:'udc_opntAcctCd','ev:onclickEvent':'scwin.udc_opntAcctCd_onclickEvent',code:'opntAcctCd',name:'opntAcctNm',refDataCollection:'ds_slipcontents',allowCharCode:'0-9',maxlengthCode:'7',objType:'data',validTitle:'상대계정',btnId:'btn_opntAcctCd',objTypeCode:'data',maxlengthName:'50',objTypeName:'data',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'요청 거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_reqClntNo',selectID:'retrieveClntEmpNoList',popupID:'retrieveClntEmpNoListPopup',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_reqClntNm',style:'',class:'w250',id:'udc_reqClntNo','ev:onclickEvent':'scwin.udc_reqClntNo_onclickEvent',refDataCollection:'ds_slipcontents',code:'reqClntNo',name:'reqClntNm',allowCharCode:'0-9',maxlengthCode:'6',objType:'data',validTitle:'요청거래처','ev:onblurCodeEvent':'scwin.udc_reqClntNo_onblurCodeEvent',objTypeName:'data',objTypeCode:'data',maxlengthName:'50',skipOnBlurCodeValueEmpty:'N',btnId:'btn_reqClntNo'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전표분개내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'N',btnPlusYn:'Y',btnUser:'N',templateYn:'N',gridID:'gr_slipcontents'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_slipcontents',id:'gr_slipcontents',style:'',visibleRowNum:'7',visibleRowNumFix:'true',rowNumVisible:'true',rowNumHeaderValue:'No',focusMode:'cell',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'계정',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'계정명',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'귀속부서',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'부서명',width:'150',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'차변금액',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'대변금액',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'적요',width:'200',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'잔액(원)',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'잔액(외화)',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'정리구분',width:'100',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'Damt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',customFormatter:'scwin.damtExp',dataType:'number',class:'',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'Camt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',customFormatter:'scwin.camtExp',dataType:'number',class:'',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'summary',inputType:'text',style:'',value:'',width:'200',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stlRamt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true',displayFormat:'#,##0',class:'',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stlRamtFcrc',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true',displayFormat:'#,##0.00',class:'',dataType:'float'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'settleClsCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true',displayFormat:'#,##0',class:'',dataType:'number',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column26',value:'0',displayMode:'label',textAlign:'right',dataType:'number',class:'',displayFormat:'#,##0',expression:'sum(\'Damt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column25',value:'0',displayMode:'label',textAlign:'right',dataType:'number',class:'',displayFormat:'#,##0',expression:'sum(\'Camt\')'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_copyRow',type:'button',class:'btn',userAuth:'C','ev:onclick':'scwin.f_CopyRow'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',EngYn:'N',btnRowDelYn:'Y',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',gridID:'gr_slipcontents',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DeleteRow',cancelFunction:'scwin.f_CancelRow',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'삭제',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발행'}]}]}]}]}]}]}]}]}]})