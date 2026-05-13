/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_12p.xml 328186 b2372079e05b898bf4d371011769a78b79d0d0cda95f2315897bb280f6db8ef0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipcontents',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_slipcontents_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'NUM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipSeq',name:'전표순번',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'차대구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화금액',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드(회계부서)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',name:'관리사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'관리거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'관리거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDt',name:'관리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',name:'관리기간시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',name:'관리기간종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNm',name:'관리번호명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizdivCd',name:'사업부문코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termMgntYn',name:'기간관리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntMgntYn',name:'거래처관리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'empMgntYn',name:'사원관리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dtMgntYn',name:'일자관리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntNoCd',name:'관리번호코드',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'reqDt',name:'구매요청일(지급일자)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'지급방법코드(요청지급방법)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payProcYn',name:'지급처리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'payAcctCd',name:'지급계좌코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'부가세관리부서(부가세관리귀속)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'공제구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'비용구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'recvProcYn',name:'채권처리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건저장순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClsCd',name:'정산방법',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchCd',name:'지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchNm',name:'지점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemNm',name:'매입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paymentPrd',name:'지로납부기간(지급기한)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'settleClsCd',name:'정산구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlOutbrDt',name:'정산입금일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlSlipNo',name:'정산DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlOutbrNo',name:'정산발생번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlClntNo',name:'정산거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlClntNm',name:'정산거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlAcctDeptCd',name:'정산귀속부서(회계부서코드)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlAcctDeptNm',name:'정산귀속부서명(회계부서명)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlAcctCd',name:'정산계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlAcctNm',name:'정산계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlAmt',name:'정산금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'stlRamt',name:'정산잔액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'stlAmtFcrc',name:'정산외화금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'stlRamtFcrc',name:'정산잔액(외화)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'stlCrcCd',name:'정산통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlExchRt',name:'정산환율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'opntAcctNm',name:'상대계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempCostClsCd',name:'TEMP비용구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCrn',name:'거래처사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxClsCd',name:'영세율구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxInvcText',name:'전자세금계산서비고란(발행비고)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatSpplyAmt',name:'영세금계산서공급금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',name:'부가세관리부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnNm',name:'사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'발행부서코드(전표귀속부서)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dAmt',name:'차변금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cAmt',name:'대변금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dAmtFcrc',name:'차변외화금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cAmtFcrc',name:'대변외화금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'loexSlipNo',name:'차세대물류전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refNo',name:'PALLETIZING 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatPassClsCd',name:'부가세제외여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDivideNo',name:'전표분할구분번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excel',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'NUM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipSeq',name:'전표순번',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'차대구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화금액',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드(회계부서)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',name:'관리사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'관리거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'관리거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDt',name:'관리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',name:'관리기간시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',name:'관리기간종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNm',name:'관리번호명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizdivCd',name:'사업부문코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termMgntYn',name:'기간관리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntMgntYn',name:'거래처관리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'empMgntYn',name:'사원관리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dtMgntYn',name:'일자관리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'mgntNoCd',name:'관리번호코드',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'reqDt',name:'구매요청일(지급일자)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'지급방법코드(요청지급방법)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payProcYn',name:'지급처리여부',dataType:'number',defaultValue:'',valueType:''}},{T:1,N:'w2:column',A:{id:'payAcctCd',name:'지급계좌코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'부가세관리부서(부가세관리귀속)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'공제구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'비용구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'recvProcYn',name:'채권처리여부',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건저장순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClsCd',name:'정산방법',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchCd',name:'지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchNm',name:'지점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemNm',name:'매입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paymentPrd',name:'지로납부기간(지급기한)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'settleClsCd',name:'정산구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlOutbrDt',name:'정산입금일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlSlipNo',name:'정산DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlOutbrNo',name:'정산발생번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlClntNo',name:'정산거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlClntNm',name:'정산거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlAcctDeptCd',name:'정산귀속부서(회계부서코드)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlAcctDeptNm',name:'정산귀속부서명(회계부서명)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlAcctCd',name:'정산계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlAcctNm',name:'정산계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlAmt',name:'정산금액',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stlRamt',name:'정산잔액',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stlAmtFcrc',name:'정산외화금액',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stlRamtFcrc',name:'정산잔액(외화)',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'stlCrcCd',name:'정산통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stlExchRt',name:'정산환율',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'opntAcctNm',name:'상대계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempCostClsCd',name:'TEMP비용구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCrn',name:'거래처사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxClsCd',name:'영세율구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxInvcText',name:'전자세금계산서비고란(발행비고)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatSpplyAmt',name:'영세금계산서공급금액',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',name:'부가세관리부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnNm',name:'사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'발행부서코드(전표귀속부서)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dAmt',name:'차변금액',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cAmt',name:'대변금액',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dAmtFcrc',name:'차변외화금액',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'cAmtFcrc',name:'대변외화금액',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'loexSlipNo',name:'차세대물류전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refNo',name:'PALLETIZING 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatPassClsCd',name:'부가세제외여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDivideNo',name:'전표분할구분번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_commCode',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_getMaxCloseYm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',name:'마감년월',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_slip',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'전표귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'전표귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'loexSlipNo',name:'로엑스전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'Debis전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ifSlipNo',name:'인터페이스전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자(테스트)',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_budgetCheck'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'budgetYm',name:'예산년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'budgetRsltsAmt',name:'예산실적금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_budget',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntlUnitClsCd',name:'통제단위구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnAmt',name:'배정금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actAmt',name:'취득가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addBudgetAmt',name:'추가예산금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetRsltsAmt',name:'예산실적금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetRsltsSettAmt',name:'예산실적결산금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_budget_temp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntlUnitClsCd',name:'통제단위구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnAmt',name:'배정금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actAmt',name:'취득가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addBudgetAmt',name:'추가예산금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetRsltsAmt',name:'예산실적금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetRsltsSettAmt',name:'예산실적결산금액',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'loexSlipNo',name:'차세대물류전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_prov',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'요청귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptNm',name:'요청귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNo',name:'요청사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNm',name:'요청사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlIntendDt',name:'정리예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmt',name:'정리금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmtFcrc',name:'정리금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postSetlAmt',name:'기정리금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postSetlAmtFcrc',name:'기정리외화금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susPayClsCd',name:'가지급금구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptAmt',name:'입금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptAmtFcrc',name:'입금액(외화)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlDt',name:'정리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건 저장순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlIntendAmt',name:'정리예정금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlIntendAmtFcrc',name:'정리예정외화금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlCompleteYn',name:'정리완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postYn',name:'회계처리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setexchRt',name:'정리환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_commonCode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'param2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'param3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'param4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'param5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'param6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'param7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'param8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'param9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'param10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_settleAccount',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'COL1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'COL2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'COL3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'COL4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'COL5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'COL6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'COL7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'COL8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'COL9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'COL10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_provHeader',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlDt',name:'정리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'요청귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susPayClsCd',name:'가지급금구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'작성자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건 저장순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'은행계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookKndNm',name:'통장종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'통장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptNm',name:'요청귀속부서명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_retSlip',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_evidClsCd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_commonCode',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveLoexInterfaceSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_excel","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_excel","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_budgetRt',action:'/ac.co.budgetmgnt.ValidateBudgetRemainAmtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_budgetCheck","key":"IN_DS1"},{"id":"ds_budget","key":"OUT_DS1"},{"id":"ds_budget_temp","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_budget","key":"OUT_DS1"},{"id":"ds_budget_temp","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_budgetRt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_checkSettle',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_commonCode',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_updateSlipNo',action:'/ac.fi.gnrlaccount.slipmgnt.UpdateLoexInterfaceSlipNoCMD.do',method:'post',mediatype:'application/json',ref:'{"id":"ds_slip","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.gnrlaccount.slipmgnt.ProcessLoexSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_slip","key":"IN_DS1"},{"id":"ds_slipcontents","key":"IN_DS2"},{"id":"ds_prov","key":"IN_DS3"},{"id":"ds_retSlip","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retSlip","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중....','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_201_01_12p
// 이름     : 차세대매입전표팝업
// 경로     : 재무회계/일반회계/전표관리/
// 사용계정 : 내부
// 비고     : 
//           조회시 팝업으로 ds 내의 코드명을 채움
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//            fi_201_02_02b(가지급금입금)
//            fi_201_03_04p(채권채무선수금조회)
//            [호출당함]
////          회계/재무회계/일반회계/전표관리/차세대 매입전표 발행(fi_201_01_12b.jsp)에서 호출 - 발행버튼 클릭
//==================================================================================================================
// 로그인사용자 정보
scwin.vLoginCoCd = ""; // 소속 자회사 
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.privAdmin = ""; // 어드민권한
scwin.userId = ""; // 사용자ID
scwin.vCoCd = ""; // 회사코드
scwin.vCoClsCd = ""; // 소속회사종류 : 회계_회사구분('CO035' : 0:동부 EXPRESS)

scwin.acctDeptCd = ""; // 회계부서코드
scwin.acctDeptNm = ""; // 회계부서명

// AsIs 전역변수 대상
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
// <INPUT type="hidden" class=input_text id=txt_taxInvcRmk1 name="txt_taxInvcRmk1"  > <!-- 예수금기타아닌 계정 발행비고 -->
// <INPUT type="hidden" class=input_text id=txt_taxInvcRmk2 name="txt_taxInvcRmk2"  > <!-- 예수금기타 발행비고 -->
// id=txt_evidClsNm  // 증빙종류명
// <input type="text"  class=input_text name="txt_method" id="txt_method" style="width:60px" maxLength=50 objType="data" value="">
// <INPUT type="text" class=input_text id=txt_settleClsCd name="txt_settleClsCd" style="width:10px" value="">
// <INPUT type="text" class=input_text id=txt_acctClsCd    name="txt_acctClsCd"  style="width:10px" value="">
// <input type="hidden" name="txtCoCd" id="txtCoCd">
// <input type="hidden" name="txtCoClsCd" id="txtCoClsCd">

scwin.txt_bizdivCd = ""; // 사업부문코드
scwin.txt_bizDomCd = ""; // 사업영역코드
scwin.txt_termMgntYn = ""; // 기간관리여부
scwin.txt_clntMgntYn = ""; // 거래처관리여부
scwin.txt_empMgntYn = ""; // 사원관리여부
scwin.txt_dtMgntYn = ""; // 일자관리여부
scwin.txt_payAcctCd = ""; // 지급계좌코드
scwin.txt_clntCrn = ""; // 거래처사업자번호
scwin.txt_costClsCd = ""; // 비용구분코드
scwin.txt_tempCostClsCd = ""; // TEMP비용구분코드
scwin.txt_opntAcctCd = ""; // 상대계정코드
scwin.txt_opntAcctCostClsCd = ""; // 상대계정비용구분코드
scwin.txt_tempOpntAcctCostClsCd = ""; // TEMP상대계정비용구분코드
scwin.txt_taxInvcRmk1 = ""; // 예수금기타아닌 계정 발행비고
scwin.txt_taxInvcRmk2 = ""; // 예수금기타 발행비고
scwin.txt_evidClsNm = ""; // 증빙종류명
scwin.txt_method = ""; // 방법
scwin.txt_settleClsCd = ""; // 정산구분코드
scwin.txt_acctClsCd = ""; // 계정구분코드
scwin.txtCoCd = ""; // 회사코드
scwin.txtCoClsCd = ""; // 회사종류코드

// var state            = "Y";
// var delflag          = "N"; 
// var ELECTRONICDRAFT  = "40";  // 전자어음
// var DRAFTCHECK       = "50";  // 약속어음
// var TRANSFER         = "20";  // 이체
// var ELECTRIC_CASH    = "30";  // 전자결재현금
// var PREPAY           = "4";   // 가지급금
// var vUpperAcctDeptCd = "";    // 상위부서코드
// var rowCopyYn        = 0;     // 행복사여부
// var GIRO             = "95"   // 지로납부
// var vCoCd            = cfIsNull(<%=login.getCoCd()    %>)?'': '<%=login.getCoCd()   %>'; // 회사코드
// var vCoClsCd         = cfIsNull(<%=login.getCoClsCd() %>)?'': '<%=login.getCoClsCd()%>'; // 회사구분코드('CO035' : 0:동부 EXPRESS)
// var vUserHomeClsCd   = "<%=login.getUserHomeClsCd()%>";                                  // 사용자소속구분코드   
// var isSubCompany     = false; // 자회사유무(true:자회사, false:일반)
// var user_id          = "<%=user_id%>";  // 접속자ID
// var vAdminYn         = "<%=user_acct_dept_cd%>" == "<%=ACConstants.FINANCIAL_ACCT_DEPT_CD%>" ? 1 : 0;
// var userEmpNo = "<%=login.getEmpNo()%>"; // 사용자 사번
// var checkExchRt = 0;		//환율 부분 추가
// var checkMain = "0";
// var valueObject			= window.dialogArguments;
// var pLoexSlipNo			= valueObject.loexSlipNo;	 
// var pSlipAcctDeptCd		= valueObject.slipAcctDeptCd;  // 미사용	     
// var pSlipKndCd			= valueObject.slipKndCd;       // 미사용

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
scwin.user_id = "";
scwin.vAdminYn = "";
scwin.userEmpNo = "";
scwin.checkExchRt = 0; //환율 부분 추가
scwin.checkMain = "0";
scwin.pLoexSlipNo = "";

// f_HiddenCheck 용 전역변수
scwin.ed_slipAcctDeptCd_hidVal = ""; // 발행부서

scwin.ed_acctDeptCd_hidVal = ""; // 귀속부서
scwin.ed_vatDeclarAcctDeptCd_hidVal = ""; // 부가세관리부서
scwin.ed_acctCd_hidVal = ""; // 계정
scwin.ed_crn_hidVal = ""; // 사업자번호
scwin.ed_mgntEmpNo_hidVal = ""; // 사원번호
scwin.ed_mgntClntNo_hidVal = ""; // 거래처
scwin.ed_opntAcctCd_hidVal = ""; // 상대계정

scwin.ed_branchCd_hidVal = ""; // 지점(미사용)
scwin.ed_pchsItemCd_hidVal = ""; // 매출입항목(미사용)

scwin.vCheckStatusUpload = "false";

// 신규 플래그
scwin.loadCompleted = false; // 로드 완료여부 (false 일 때 팝업, row position 이벤트 금지)
scwin.loadRow = 0; // 로드 세팅 row

// 코드명 세팅용
scwin.dsCodeNameSet = false; // ds에 코드명 세팅여부

scwin.dsCodeNameSetRow = 0; // ds에 코드명 세팅 row
scwin.dsCodeNameSetColId = ""; // ds에 코드명 세팅 ColId

scwin.popupAsyncFlag = true; // 실시간 팝업 사용여부

scwin.focusTarget = 0; // f_ValidationDs 의 포커스대상 컴포넌트

scwin.fed_acctCd = ""; // f_checkDeptAcctCd 에서 사용. fed_acctCd
scwin.fed_acctDeptCd = ""; // f_checkDeptAcctCd 에서 사용. fed_acctDeptCd

scwin.txt_costClsCdCheck = ""; // 비용구분코드체크 (f_checkDeptAcctCd 에서 사용)

// 시스템
scwin.testAlertFlag = false; // 테스트용 alert 표시여부

scwin.sort_options = {};
scwin.sort_options.sortIndex = "rltSeq slipNo"; // 컬럼 나열
scwin.sort_options.sortOrder = "1 1"; // 1: 오름차순

scwin.onpageload = function () {
  console.log("====== onpageload ================== v 1.02");
  scwin.pLoexSlipNo = $c.data.getParameter($p, "loexSlipNo") == null ? "" : $c.data.getParameter($p, "loexSlipNo");

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
  scwin.vadprivAdminminYn = privAdmin;
  scwin.userEmpNo = empNo;
  console.log("▶▶ vLoginCoCd : " + scwin.vLoginCoCd + "   loginCoClsCd : " + scwin.vLoginCoClsCd);
  console.log("▶▶ vCoCd      : " + scwin.vCoCd + "   vCoClsCd : " + scwin.vCoClsCd);
  console.log("▶▶ user_id    : " + scwin.user_id + "   userEmpNo : " + scwin.userEmpNo);
  console.log("▶▶ userHomeClsCd : " + scwin.vUserHomeClsCd + "   privAdmin : " + scwin.privAdmin);
  //console.log("▶▶ memJson : "+ JSON.stringify(memJson));

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
  } // 차대구분
  , {
    grpCd: "ZZ006",
    compID: "lc_crcCd",
    opt: {
      "range": "1"
    }
  } // 환율
  , {
    grpCd: "FI005",
    compID: "lc_deductClsCd"
  } // 공제구분
  , {
    grpCd: "FI004",
    compID: "lc_zeroTaxClsCd"
  } // 영세율구분
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
  // <%= GauceUtil.getCodeList("FM018",2,"10") %>,<%= GauceUtil.getCodeList("FM018",2,"20") %>,<%= GauceUtil.getCodeList("FM018",2,"30") %>">
  let dltStr = "dlt_commonCodeFM018"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  let dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  $c.data.dataListFilter($p, dlt, "fltrCd2 == '10' || fltrCd2 == '20' || fltrCd2 == '30'"); //$c.data.dataListFilter 함수를 이용해서 필터
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("  ==--== onUdcCompleted");

  // 2025-10-14 : 작성일자 포커스 위치 이동
  $p.setTimeout(function () {
    // 2026-03-26 : DT팀과 협의. 발행부서 비활성 - 발행부서 변경시, asis 에서 크롬 종료됨
    $c.gus.cfDisableObjects($p, [ed_slipAcctDeptCd, ed_slipAcctDeptNm, btn_slipAcctDeptCd]);

    // 주요 플래그값 초기 지정
    scwin.loadCompleted = true; // 로드 완료여부 (false 일 때 팝업, row position 이벤트 금지)
    scwin.dsCodeNameSet = false; // ds에 코드명 세팅여부

    ds_slip.insertRow();
    ds_slip.setRowPosition(0);
    // var row = ds_slip.getTotalRow() - 1;  // 0부터 들어가야 함

    // KYU_TEST ----------- 작성일자, 이전 월 말일
    //var slipDate = "20250929"
    //var lastDate = slipDate.substring(0, 6) + new Date(scwin.slipDate.substring(0,4),scwin.slipDate.substring(4,2),0).getDate();

    //$c.win.alert(" slipDate :"+ slipDate +"  lastDate :" +lastDate);

    // KYU_TEST : 지점,매입항목코드 숨기기 : 00130 렌터카사업팀 업무 삭제
    branchTr.hide();

    // async 사용
    scwin.f_dataLoad();
  }, {
    "delay": 50
  });
};
scwin.f_dataLoad = async function () {
  scwin.dsCodeNameSet = false;
  scwin.f_setCompanyInfo();
  scwin.state = "Y";
  scwin.f_Header();
  let rtnMax = await scwin.getMaxCloseYm(); //마감년월 가져오기

  // 주로 '조회'나 '저장' 등의 작업 후에 내용을 입력이나 수정 없이 확인만 가능하도록 하기 위해 사용한다.
  //$c.gus.cfDisableKeyData();
  //$c.gus.cfDisableBtnOnly([bCreate]); 	  // 대상없음 -- 오타로 보임

  // cfDisableObjects([img_mgntTermStDt, img_mgntTermEndDt, img_mgntClntNo,img_mgntEmpNo,img_mgntDt,img_acctDeptCd,img_acctCd,chb_payProcYn,chb_recvProcYn
  // 				 ,ed_reqDt,lc_reqPayMthdCd,ed_draftDdCntCd,ed_taxinvcDt,img_reqDt,img_taxinvcDt,ed_paymentPrd,img_paymentPrd]); 
  // $c.gus.cfDisableObjects([ btn_mgntClntNo, btn_mgntEmpNo, btn_acctDeptCd, btn_acctCd, cbx_payProcYn, cbx_recvProcYn

  // KYU_ISSUE : 버튼을 막으면 다 막힌다?
  $c.gus.cfDisableObjects($p, [udc_mgntTermDt, udc_mgntClntNo, udc_mgntEmpNo, udc_acctDeptCd, udc_acctCd, cbx_payProcYn, cbx_recvProcYn, ica_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd
  //,img_reqDt // 지급일자의 달력버튼 - 2025-11-03 : 달력버튼만 막을 수 없음
  , ica_taxinvcDt // 세금계산서일자
  , ica_paymentPrd //, ed_paymentPrd, btn_paymentPrd  지로납부기한
  ]);
  console.log("  ==--== 비활성 ( 거래처돋보기, 사원번호돋보기, 귀속부서돋보기,계정돋보기,지급체크박스,채권체크박스" + ",지급일자(ica_reqDt),지급방법,어음일수,세금계산서일자,지로납부기한 ) - 제외 : 관리기간버튼(From,To), 관리일자버튼, 지급일자버튼, 지로납부기한버튼");

  //lc_reqPayMthdCd.BindColVal="";
  // KYU_TEST : ds 에 직접 지정
  // lc_reqPayMthdCd.setValue("");  // 지급방법

  // 증빙종류 조회
  await scwin.getEvidInfo();

  //cfDisableObjects([ed_adjustExchRt, lc_adjmClsCd, lc_evidClsCd, lc_deductClsCd, lc_zeroTaxClsCd, txt_crnNm, txt_vatDeclarAcctDeptNm, ed_spplyAmt, ed_vatAmt]);
  $c.gus.cfDisableObjects($p, [ed_adjustExchRt, lc_adjmClsCd, lc_evidClsCd, lc_deductClsCd, lc_zeroTaxClsCd, ed_crnNm, ed_vatDeclarAcctDeptNm, ed_spplyAmt, ed_vatAmt]);
  console.log("  ==--== 비활성 ( 환율, 정산방법, 증빙종류-공제종류-영세율종류, 거래처명, 부가세관리부서명, 공급금액, 부가세액 ) ");

  // 통화코드 변경
  await scwin.crcCdChange();
  $c.gus.cfDisableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
  console.log("  ==--== 비활성 (상대계정) ");
  $c.gus.cfDisableObjects($p, [lc_slipKndCd, lc_drcrClsCd, ed_acctDeptCd, ed_acctDeptNm, ed_acctCd, ed_acctNm, ed_mgntEmpNm, ed_mgntClntNm, ed_summary, ed_taxInvcText]);
  console.log("  NEW ==--== 비활성 (전표종류(조회), 차대구분, 귀속부서,귀속부서명, 계정,계정명, 사원명,거래처명, 적요,발행비고) ");

  //인터페이스 전표조회
  await scwin.f_LoexSlipSearch();
  scwin.loadCompleted = false;

  // 업로드 자료 추가
  await scwin.f_AddRowUploaded();
  scwin.loadCompleted = true;
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 증빙종류 조회
//-------------------------------------------------------------------------
scwin.getEvidInfo = async function () {
  console.log("=== getEvidInfo (증빙종류조회) [분리]");
  //증빙종류 조회
  //ds_evidClsCd.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=retrieveEvidInfo&param3=PCHS";
  //ds_evidClsCd.Reset();
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
  console.log("▷ sbm_evidClsCd_submitdone (증빙종류조회)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  if (e.responseJSON.GAUCE) {
    ds_evidClsCd.setJSON(e.responseJSON.GAUCE);
  }

  // var dc = ds_evidClsCd.getAllArray();
  // console.log("  *** ds_evidClsCd : " + JSON.stringify(dc));
};

//-------------------------------------------------------------------------
// 전월 마감여부 
//-------------------------------------------------------------------------
scwin.getMaxCloseYm = async function () {
  console.log("=== getMaxCloseYm (전월 마감여부)");
  //	tr_getMaxCloseYm.Post();

  let e = await $c.sbm.execute($p, sbm_getMaxCloseYm);
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  console.log("▷ sbm_getMaxCloseYm_submitdone (전월 마감여부) - 아무 동작 없음");
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  console.log("=== f_setCompanyInfo (자회사 회계 시스템 추가에 따른 설정)");

  // 사용자소속구분코드(vUserHomeClsCd)가 자회사('SA')인 경우 
  //if(vUserHomeClsCd == '<%=ACConstants.SUBSIDIARY_USER_HOME_CLS_CD%>')  {
  if (scwin.vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.isSubCompany = true;
  } else {
    // 사용자 구분이 자회사('SA')가 아닌 경우, 회사코드(vCoCd)와 회사구분코드(vCoClsCd)을 '동부 EXPRESS'로 Default set
    //		vCoCd    = '<%=ACConstants.CO_CD_DONGBU%>';
    //		vCoClsCd = '<%=ACConstants.CO_CLS_CD_DONGBU%>' ;
    scwin.vCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }

  //	txtCoCd.value 	  = vCoCd;
  //	txtCoClsCd.value  = vCoClsCd; 
  scwin.txtCoCd = scwin.vCoCd;
  scwin.txtCoClsCd = scwin.vCoClsCd;
  console.log("▶▶ vCoCd      : " + scwin.vCoCd + "   vCoClsCd : " + scwin.vCoClsCd);
  console.log("▶▶ txtCoCd    : " + scwin.txtCoCd + "   txtCoClsCd : " + scwin.txtCoClsCd);
  console.log("▶▶ scwin.isSubCompany : " + scwin.isSubCompany);
};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  //ds_search2.NameValue(1,"coCd") = vCoCd;
  ds_search2.set("coCd", scwin.vCoCd);
  var dcJSON = ds_search2.getJSON();
  console.log("  *** ds_search2 : " + JSON.stringify(dcJSON));

  //    lc_crcCd.BindColVal = '<%=ACConstants.KOREA_WON%>';
  lc_crcCd.setValue(ACConstants.KOREA_WON);
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
//  차세대물류 interface 전표조회
//-------------------------------------------------------------------------
scwin.f_LoexSlipSearch = async function () {
  console.log("===== f_LoexSlipSearch (차세대물류 interface 전표조회)");
  if (scwin.pLoexSlipNo == "") {
    return;
  }

  //ds_search.NameValue(1,"loexSlipNo") = pLoexSlipNo;
  ds_search.set("loexSlipNo", scwin.pLoexSlipNo);
  var dcJSON = ds_search.getJSON();
  console.log("  *** ds_search : " + JSON.stringify(dcJSON));

  //tr_search.Post(); 
  let e = await $c.sbm.execute($p, sbm_search);

  // console.log("▷ sbm_search_submitdone (차세대물류 interface 전표조회 submitdone)");

  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // <!-- BIDC전표조회 완료시 -->
  //  language=JavaScript for=ds_excel event=onLoadCompleted()>
  // 	lc_slipKndCd.BindColVal = ds_excel.NameValue(1,"slipKndCd");  //전표종류
  // 	ed_slipDt.text =  ds_excel.NameValue(1,"slipDt"); //작성일자 셋팅
  // 	ed_slipAcctDeptCd.text =  ds_excel.NameValue(1,"slipAcctDeptCd"); //작성부서셋팅
  // 	f_AddRowUploaded();

  var RowCount = ds_excel.getTotalRow();
  if (RowCount > 0) {
    rowPos = 0;
    ds_excel.setRowPosition(rowPos);
    lc_slipKndCd.setValue(ds_excel.getCellData(rowPos, "slipKndCd")); //전표종류
    ica_slipDt.setValue(ds_excel.getCellData(rowPos, "slipDt")); //작성일자 셋팅
    ed_slipAcctDeptCd.setValue(ds_excel.getCellData(rowPos, "slipAcctDeptCd")); //작성부서 셋팅

    // KYU_TEST : 추가 바인딩
    // ds_slip.setCellData(0, "slipDt", ica_slipDt.getValue());
    // ds_slip.setCellData(0, "slipKndCd", lc_slipKndCd.getValue());
    // ds_slip.setCellData(0, "slipAcctDeptCd", ed_slipAcctDeptCd.getValue());
    // ds_slip.setCellData(0, "slipAcctDeptNm", ed_slipAcctDeptNm.getValue());

    // KYU_NEW : 발행부서명 세팅
    // await scwin.udc_slipAcctDeptCd_onblurCodeEvent();

    // 조회부의 발행부서 만 되도록 플래그 세팅
    // scwin.popupAsyncFlag           = false;  // 실시간 팝업 여부
    scwin.dsCodeNameSet = true; // ds에 코드명 세팅여부

    console.log("      ==== 발행부서 팝업 실행 전 dsCodeNameSet [" + scwin.dsCodeNameSet + "]");
    // debugger;
    await scwin.f_checkPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, '1'); // 멈춤
    // await scwin.udc_slipAcctDeptCd_onblurCodeEvent();
    // debugger;
    // scwin.popupAsyncFlag           = true;    // 실시간 팝업 여부
    scwin.dsCodeNameSet = false; // ds에 코드명 세팅여부

    console.log("      ==== 발행부서 팝업 실행 후 dsCodeNameSet [" + scwin.dsCodeNameSet + "]");
    ed_totalRows.setValue(ds_excel.getRowCount());
    var dc = ds_slip.getAllArray();
    console.log("     [시작] *** ds_slip (" + ds_slip.getTotalRow() + ") : " + JSON.stringify(dc));
  }
};

//-------------------------------------------------------------------------
// 업로드 자료 추가  @@ @
//-------------------------------------------------------------------------
scwin.f_AddRowUploaded = async function () {
  console.log("=== f_AddRowUploaded (업로드 자료 추가  ds_excel --> ds_slipcontents)");
  var vCheckStatusUpload = "false";
  var CountRow = ds_excel.getTotalRow();
  // console.log("  CountRow (ds_excel) : "+ CountRow);

  // var dc = ds_excel.getAllArray();
  // console.log("    ◀◀◀◀◀  ds_excel : " + JSON.stringify(dc));

  if (CountRow > 0) {
    //        ds_slipcontents.ClearData();
    ds_slipcontents.setJSON([]);

    //for (var i=1; i <= CountRow; i++) {
    for (var i = 0; i < CountRow; i++) {
      //ds_slipcontents.AddRow();
      //row = ds_slipcontents.CountRow;

      ds_slipcontents.insertRow();
      var row = ds_slipcontents.getTotalRow() - 1; // 0부터 들어가야 함

      if (scwin.testAlertFlag == true) {
        // KYU_TEST : 주요 로그 alert
        await $c.win.alert($p, "  1단계 복사  ◀◀  i [ " + i + " ]   row [ " + row + " ]  ◀◀");
      }
      console.log("  ◀◀  i [" + i + "]   row [" + row + "]  ◀◀");
      scwin.loadRow = i; // 로드 세팅 row

      // 다른 값에 영향을 받으므로 미리 밖
      // KYU_NEW : 지급처리여부, 쿼리에서 "" 로 조회되나 웹스퀘어가 0.0 으로 인식함 (1: 체크)

      if (parseInt(ds_excel.getCellData(i, "payProcYn")) == 0) ds_excel.setCellData(i, "payProcYn", 0);
      // ds_excel.setCellData(i,"payProcYn", 0 );

      // KYU_NEW : 채권처리여부, 쿼리에서 "" 로 조회되나 웹스퀘어가 0.0 으로 인식함 (1: 체크)
      if (parseInt(ds_excel.getCellData(i, "recvProcYn")) == 0) ds_excel.setCellData(i, "recvProcYn", 0);

      //i = i++;
      //i = i + 1;

      // console.log("  ▶▷▶▷  row (ds_slipcontents) ["+ row +"]       i (ds_excel) ["+ i +"]");
      // console.log("  * ds_excel ["+i+"][" + JSON.stringify(ds_excel.getRowJSON(i)) + "]" );
      // console.log("    *** ds_excel ["+i+"] ***" );

      // ds_slip.NameValue(1,"ifSlipNo")                 = ds_excel.NameValue(i,"loexSlipNo") ;
      // ds_slip.NameValue(1,"loexSlipNo")               = ds_excel.NameValue(i,"loexSlipNo") ;
      // ds_slip.NameValue(1,"slipKndCd")                = ds_excel.NameValue(i,"slipKndCd") ;
      // ds_slipcontents.NameValue(row,"drcrClsCd")      = ds_excel.NameValue(i,"drcrClsCd") ;
      // ds_slipcontents.NameValue(row,"amtFcrc")        = ds_excel.NameValue(i,"amtFcrc") ;         // 금액_외화
      // ds_slipcontents.NameValue(row,"amt")            = ds_excel.NameValue(i,"amt") ;

      ds_slip.setCellData(0, "ifSlipNo", ds_excel.getCellData(i, "loexSlipNo"));
      ds_slip.setCellData(0, "loexSlipNo", ds_excel.getCellData(i, "loexSlipNo"));
      ds_slip.setCellData(0, "slipKndCd", ds_excel.getCellData(i, "slipKndCd"));
      ds_slipcontents.setCellData(row, "drcrClsCd", ds_excel.getCellData(i, "drcrClsCd")); // 차대구분
      ds_slipcontents.setCellData(row, "amtFcrc", ds_excel.getCellData(i, "amtFcrc")); // 금액_외화
      ds_slipcontents.setCellData(row, "amt", ds_excel.getCellData(i, "amt")); // 금액

      console.log("  ^[" + i + "]  차대구분,금액_외화,금액 셋팅");
      if (parseInt(ds_excel.getCellData(i, "dAmt")) != 0 && parseInt(ds_excel.getCellData(i, "cAmt")) != 0) {
        await $c.gus.cfAlertMsg($p, "차변, 대변금액 둘다 입력할 수 없습니다.");
        return false;
      }
      if (parseInt(ds_excel.getCellData(i, "dAmt")) != 0 && parseInt(ds_excel.getCellData(i, "amtFcrc")) == 0) {
        ds_slipcontents.setCellData(row, "drcrClsCd", "D"); // 차변
        ds_slipcontents.setCellData(row, "amt", ds_excel.getCellData(i, "dAmt")); // 금액
      } else if (parseInt(ds_excel.getCellData(i, "cAmt")) != 0 && parseInt(ds_excel.getCellData(i, "amtFcrc")) == 0) {
        ds_slipcontents.setCellData(row, "drcrClsCd", "C"); // 대변
        ds_slipcontents.setCellData(row, "amt", ds_excel.getCellData(i, "cAmt")); // 금액
      } else if (parseInt(ds_excel.getCellData(i, "dAmtFcrc")) != 0) {
        ds_slipcontents.setCellData(row, "drcrClsCd", "D"); // 차변
        ds_slipcontents.setCellData(row, "amtFcrc", ds_excel.setCellData(i, "amtFcrc")); // 금액_외화

        if (parseInt(ds_excel.getCellData(i, "amt")) == 0) {
          ds_slipcontents.setCellData(row, "amt", Math.round(parseInt(ds_excel.getCellData(i, "amtFcrc")) * parseFloat(ds_excel.getCellData(i, "exchRt")))); // 금액
        } else {
          ds_slipcontents.setCellData(row, "amt", ds_excel.getCellData(i, "dAmt"));
        }
      } else if (parseInt(ds_excel.getCellData(i, "cAmtFcrc")) != 0) {
        ds_slipcontents.setCellData(row, "drcrClsCd", "C"); // 대변
        ds_slipcontents.setCellData(row, "amtFcrc", ds_excel.getCellData(i, "amtFcrc")); // 금액_외화

        if (parseInt(ds_excel.getCellData(i, "amt")) == 0) {
          ds_slipcontents.setCellData(row, "amt", Math.round(ds_excel.getCellData(i, "amtFcrc") * ds_excel.getCellData(i, "exchRt")));
        } else {
          ds_slipcontents.setCellData(row, "amt", ds_excel.getCellData(i, "cAmt"));
        }
      }

      // KYU_NEW
      if (ds_excel.getCellData(i, "drcrClsCd") == "D") {
        // 차변이면
        ds_slipcontents.setCellData(row, "dAmt", ds_excel.getCellData(i, "amt"));
        ds_slipcontents.setCellData(row, "dAmtFcrc", ds_excel.getCellData(i, "amtFcrc"));
        ds_slipcontents.setCellData(row, "cAmt", 0);
        ds_slipcontents.setCellData(row, "cAmtFcrc", 0);
      } else {
        ds_slipcontents.setCellData(row, "dAmt", 0);
        ds_slipcontents.setCellData(row, "dAmtFcrc", 0);
        ds_slipcontents.setCellData(row, "cAmt", ds_excel.getCellData(i, "amt"));
        ds_slipcontents.setCellData(row, "cAmtFcrc", ds_excel.getCellData(i, "amtFcrc"));
      }
      console.log("  ============== row [" + row + "] 금액 대변 [" + ds_slipcontents.getCellData(row, "cAmt") + "] 차변 [" + ds_slipcontents.getCellData(row, "dAmt") + "]");

      // 각 항목 공백 검사 시작
      // ds_excel.NameValue(i,"acctDeptCd")      = ds_excel.columnValue(row, ds_excel.columnIndex("acctDeptCd")).replace(/ /gi, "");
      // ds_excel.NameValue(i,"acctCd")          = ds_excel.columnValue(row, ds_excel.columnIndex("acctCd")).replace(/ /gi, "");
      // ds_excel.NameValue(i,"mgntClntNo")      = ds_excel.columnValue(row, ds_excel.columnIndex("mgntClntNo")).replace(/ /gi, "");
      // ds_excel.NameValue(i,"mgntDt")          = ds_excel.columnValue(row, ds_excel.columnIndex("mgntDt")).replace(/ /gi, "");
      // ds_excel.NameValue(i,"crn")             = ds_excel.columnValue(row, ds_excel.columnIndex("crn")).replace(/ /gi, "");
      // ds_excel.NameValue(i,"reqDt")           = ds_excel.columnValue(row, ds_excel.columnIndex("reqDt")).replace(/ /gi, "");
      // ds_excel.NameValue(i,"taxinvcDt")       = ds_excel.columnValue(row, ds_excel.columnIndex("taxinvcDt")).replace(/ /gi, "");
      // ds_excel.NameValue(i,"mgntNo")          = ds_excel.columnValue(row, ds_excel.columnIndex("mgntNo")).replace(/ /gi, "");
      // ds_excel.NameValue(i,"mgntEmpNo")       = ds_excel.columnValue(row, ds_excel.columnIndex("mgntEmpNo")).replace(/ /gi, "");
      // ds_excel.NameValue(i,"opntAcctCd")      = ds_excel.columnValue(row, ds_excel.columnIndex("opntAcctCd")).replace(/ /gi, "");
      // ds_excel.NameValue(i,"vatPassClsCd")    = ds_excel.columnValue(row, ds_excel.columnIndex("vatPassClsCd")).replace(/ /gi, "");

      // console.log("   -- 공백 제거 : replace(/ /gi, '') 추가 ");
      // 넘겨져 온 값 확인이 필요
      ds_excel.setCellData(i, "acctDeptCd", ds_excel.getCellData(row, "acctDeptCd").replace(/ /gi, ""));
      ds_excel.setCellData(i, "acctCd", ds_excel.getCellData(row, "acctCd").replace(/ /gi, ""));
      ds_excel.setCellData(i, "mgntClntNo", ds_excel.getCellData(row, "mgntClntNo").replace(/ /gi, "")); // 거래처번호
      ds_excel.setCellData(i, "mgntDt", ds_excel.getCellData(row, "mgntDt").replace(/ /gi, ""));
      ds_excel.setCellData(i, "crn", ds_excel.getCellData(row, "crn").replace(/ /gi, ""));
      ds_excel.setCellData(i, "reqDt", ds_excel.getCellData(row, "reqDt").replace(/ /gi, ""));
      ds_excel.setCellData(i, "taxinvcDt", ds_excel.getCellData(row, "taxinvcDt").replace(/ /gi, "")); // 2025-11-05 : 대소문자 주의
      ds_excel.setCellData(i, "mgntNo", ds_excel.getCellData(row, "mgntNo").replace(/ /gi, ""));
      ds_excel.setCellData(i, "mgntEmpNo", ds_excel.getCellData(row, "mgntEmpNo").replace(/ /gi, ""));
      ds_excel.setCellData(i, "opntAcctCd", ds_excel.getCellData(row, "opntAcctCd").replace(/ /gi, ""));
      ds_excel.setCellData(i, "vatPassClsCd", ds_excel.getCellData(row, "vatPassClsCd").replace(/ /gi, ""));

      //            console.log("  ^1 ["+i+"]  excel 공백 제거");

      //console.log("   -- 공백이 제거된 ds_excel 의 길이 측정");
      // 공백이 제거된 ds_excel의 길이를 측정
      // lengthOfAcctDeptCd      = ds_excel.columnValue(row, ds_excel.columnIndex("acctDeptCd")).length;     // 귀속부서 자릿수 검사
      // lengthOfAcctCd          = ds_excel.columnValue(row, ds_excel.columnIndex("acctCd")).length;         // 계정코드 자릿수 검사
      // lengthOfMgntClntNo      = ds_excel.columnValue(row, ds_excel.columnIndex("mgntClntNo")).length;     // 거래처코드 자릿수 검사
      // lengthOfMgntDt          = ds_excel.columnValue(row, ds_excel.columnIndex("mgntDt")).length;         // 관리일자 자릿수 검사
      // lengthOfCrn             = ds_excel.columnValue(row, ds_excel.columnIndex("crn")).length;            // 사업자번호 자릿수 검사
      // lengthOfReqDt           = ds_excel.columnValue(row, ds_excel.columnIndex("reqDt")).length;          // 지급일자 자릿수 검사
      // lengthOfTaxinvcDt       = ds_excel.columnValue(row, ds_excel.columnIndex("taxinvcDt")).length;      // 세금계산서일자 자릿수 검사
      // lengthOfMgntNo          = ds_excel.columnValue(row, ds_excel.columnIndex("mgntNo")).length;         // 관리번호 자릿수 검사
      // lengthOfMgntEmpNo       = ds_excel.columnValue(row, ds_excel.columnIndex("mgntEmpNo")).length;      // 관리사원번호 자릿수 검사
      // lengthOfOpntAcctCd      = ds_excel.columnValue(row, ds_excel.columnIndex("opntAcctCd")).length;     // 상대계정코드 자릿수 검사
      // lengthOfVatPassClsCd    = ds_excel.columnValue(row, ds_excel.columnIndex("vatPassClsCd")).length;   // 부가세처리제외여부 구분코드 자릿수 검사

      var tempAcctDeptCd = ds_excel.getCellData(row, "acctDeptCd"); // 귀속부서 자릿수 검사
      var tempAcctCd = ds_excel.getCellData(row, "acctCd"); // 계정코드 자릿수 검사
      var tempMgntClntNo = ds_excel.getCellData(row, "mgntClntNo"); // 거래처코드 자릿수 검사
      var tempMgntDt = ds_excel.getCellData(row, "mgntDt"); // 관리일자 자릿수 검사
      var tempCrn = ds_excel.getCellData(row, "crn"); // 사업자번호 자릿수 검사
      var tempReqDt = ds_excel.getCellData(row, "reqDt"); // 지급일자 자릿수 검사
      var tempTaxInvcDt = ds_excel.getCellData(row, "taxinvcDt"); // 세금계산서일자 자릿수 검사
      var tempMgntNo = ds_excel.getCellData(row, "mgntNo"); // 관리번호 자릿수 검사
      var tempMgntEmpNo = ds_excel.getCellData(row, "mgntEmpNo"); // 관리사원번호 자릿수 검사
      var tempOpntAcctCd = ds_excel.getCellData(row, "opntAcctCd"); // 상대계정코드 자릿수 검사
      var tempVatPassClsCd = ds_excel.getCellData(row, "vatPassClsCd"); // 부가세처리제외여부 구분코드 자릿수 검사

      var lengthOfAcctDeptCd = 0; // 귀속부서 자릿수 검사
      var lengthOfAcctCd = 0; // 계정코드 자릿수 검사
      var lengthOfMgntClntNo = 0; // 거래처코드 자릿수 검사
      var lengthOfMgntDt = 0; // 관리일자 자릿수 검사
      var lengthOfCrn = 0; // 사업자번호 자릿수 검사
      var lengthOfReqDt = 0; // 지급일자 자릿수 검사
      var lengthOfTaxInvcDt = 0; // 세금계산서일자 자릿수 검사
      var lengthOfMgntNo = 0; // 관리번호 자릿수 검사
      var lengthOfMgntEmpNo = 0; // 관리사원번호 자릿수 검사
      var lengthOfOpntAcctCd = 0; // 상대계정코드 자릿수 검사
      var lengthOfVatPassClsCd = 0; // 부가세처리제외여부 구분코드 자릿수 검사

      // 널이면 길이 잴 수 없음
      if (tempAcctDeptCd != null) lengthOfAcctDeptCd = tempAcctDeptCd.length; // 귀속부서 자릿수 검사
      if (tempAcctCd != null) lengthOfAcctCd = tempAcctCd.length; // 계정코드 자릿수 검사
      if (tempMgntClntNo != null) lengthOfMgntClntNo = tempMgntClntNo.length; // 거래처코드 자릿수 검사
      if (tempMgntDt != null) lengthOfMgntDt = tempMgntDt.length; // 관리일자 자릿수 검사
      if (tempCrn != null) lengthOfCrn = tempCrn.length; // 사업자번호 자릿수 검사
      if (tempReqDt != null) lengthOfReqDt = tempReqDt.length; // 지급일자 자릿수 검사
      if (tempTaxInvcDt != null) lengthOfTaxInvcDt = tempTaxInvcDt.length; // 세금계산서일자 자릿수 검사
      if (tempMgntNo != null) lengthOfMgntNo = tempMgntNo.length; // 관리번호 자릿수 검사
      if (tempMgntEmpNo != null) lengthOfMgntEmpNo = tempMgntEmpNo.length; // 관리사원번호 자릿수 검사
      if (tempOpntAcctCd != null) lengthOfOpntAcctCd = tempOpntAcctCd.length; // 상대계정코드 자릿수 검사
      if (tempVatPassClsCd != null) lengthOfVatPassClsCd = tempVatPassClsCd.length; // 부가세처리제외여부 구분코드 자릿수 검사

      // var lengthOfAcctDeptCd      = ds_excel.getCellData(row, "acctDeptCd").length();     // 귀속부서 자릿수 검사
      // var lengthOfAcctCd          = ds_excel.getCellData(row, "acctCd"    ).length();     // 계정코드 자릿수 검사
      // var lengthOfMgntClntNo      = ds_excel.getCellData(row, "mgntClntNo").length();     // 거래처코드 자릿수 검사
      // var lengthOfMgntDt          = ds_excel.getCellData(row, "mgntDt"    ).length();     // 관리일자 자릿수 검사
      // var lengthOfCrn             = ds_excel.getCellData(row, "crn"       ).length();     // 사업자번호 자릿수 검사
      // var lengthOfReqDt           = ds_excel.getCellData(row, "reqDt"     ).length();     // 지급일자 자릿수 검사
      // var lengthOfTaxinvcDt       = ds_excel.getCellData(row, "taxinvcDt" ).length();     // 세금계산서일자 자릿수 검사
      // var lengthOfMgntNo          = ds_excel.getCellData(row, "mgntNo"    ).length();     // 관리번호 자릿수 검사
      // var lengthOfMgntEmpNo       = ds_excel.getCellData(row, "mgntEmpNo" ).length();     // 관리사원번호 자릿수 검사
      // var lengthOfOpntAcctCd      = ds_excel.getCellData(row, "opntAcctCd").length();     // 상대계정코드 자릿수 검사
      // var lengthOfVatPassClsCd    = ds_excel.getCellData(row, "vatPassClsCd").length();   // 부가세처리제외여부 구분코드 자릿수 검사

      // console.log("      ds_excel.getCellData(["+row+"], acctDeptCd) " + ds_excel.getCellData(row, "acctDeptCd") + "   length : "+ lengthOfAcctDeptCd);

      //            console.log("  ^2 ["+i+"]  excel 길이 체크");

      //var checkAcctCd = ds_excel.columnValue(row, ds_excel.columnIndex("acctCd")).replace(/ /gi, "");
      var checkAcctCd = ds_excel.getCellData(row, "acctCd");

      //console.log("   - - -   checkAcctCd ["+ checkAcctCd +"]");

      if (checkAcctCd == "4203417") {
        $c.win.alert($p, row + "번째 계정코드 원)세금과공과-과징금(4203417) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        return;
      } else if (checkAcctCd == "5001917") {
        $c.win.alert($p, row + "번째 계정코드 판)세금과공과-과징금(5001917) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        return;
      }

      // 2025-11-04 :  --> i 와 row 가 바뀌어야 하지 않는지
      // 귀속부서 자릿수 검사
      if (lengthOfAcctDeptCd == 5) {
        ds_slipcontents.setCellData(row, "acctDeptCd", ds_excel.getCellData(i, "acctDeptCd"));
      } else if (lengthOfAcctDeptCd == 4) {
        ds_slipcontents.setCellData(row, "acctDeptCd", "0" + ds_excel.getCellData(i, "acctDeptCd"));
      } else if (lengthOfAcctDeptCd == 3) {
        ds_slipcontents.setCellData(row, "acctDeptCd", "00" + ds_excel.getCellData(i, "acctDeptCd"));
      } else if (lengthOfAcctDeptCd == 2) {
        ds_slipcontents.setCellData(row, "acctDeptCd", "000" + ds_excel.getCellData(i, "acctDeptCd"));
      } else if (lengthOfAcctDeptCd == 1) {
        ds_slipcontents.setCellData(row, "acctDeptCd", "0000" + ds_excel.getCellData(i, "acctDeptCd"));
      } else {
        ds_slipcontents.setCellData(row, "acctDeptCd", ds_excel.getCellData(i, "acctDeptCd").substring(0, 5));
      }
      console.log("  ^3 [" + i + ", ", row + "]  귀속부서 세팅  ^^ ds_slipcontents.acctDeptCd [" + ds_slipcontents.getCellData(row, "acctDeptCd") + "]");

      //console.log("   -- 부가세처리제외여부 자릿수 검사");
      // 부가세처리제외여부 구분코드 자릿수 검사
      if (ds_excel.getCellData(i, "vatPassClsCd") == "") {
        ds_slipcontents.setCellData(row, "vatPassClsCd", "0");
      } else {
        ds_slipcontents.setCellData(row, "vatPassClsCd", ds_excel.getCellData(i, "vatPassClsCd").substring(0, 1));
      }

      //            console.log("  ^4 ["+i+"]  부가세처리제외여부 세팅");

      //console.log("   -- 계정코드 자릿수 검사  lengthOfAcctCd "+ lengthOfAcctCd);
      // 계정코드 자릿수 검사
      if (lengthOfAcctCd > 7) {
        //cfAlertMsg(i+" 번째 줄 계정 항목의 자릿수를 확인하세요.(7자리)");
        //return false;
        ds_slipcontents.setCellData(row, "acctCd", ds_excel.getCellData(i, "acctCd").substring(0, 7));
        var a = ds_slipcontents.getCellData(row, "acctCd");
        //alert(a);
        $c.win.alert($p, " ^^^^^^^^ a [" + a + "]");
      } else {
        ds_slipcontents.setCellData(row, "acctCd", ds_excel.getCellData(i, "acctCd"));
      }
      console.log("  ^5 [" + i + ", ", row + "]  계정코드 세팅 ^^ ds_slipcontents.acctCd [" + ds_slipcontents.getCellData(row, "acctCd") + "]");

      // 상대계정코드 자릿수 검사
      if (lengthOfOpntAcctCd > 7) {
        ds_slipcontents.setCellData(row, "opntAcctCd", ds_excel.getCellData(i, "opntAcctCd").substring(0, 7));
      } else {
        ds_slipcontents.setCellData(row, "opntAcctCd", ds_excel.getCellData(i, "opntAcctCd"));
      }

      //            console.log("  ^6 ["+i+"]  상대계정코드 세팅");

      // 거래처코드 자릿수 검사
      if (lengthOfMgntClntNo > 6) {
        ds_slipcontents.setCellData(row, "mgntClntNo", ds_excel.getCellData(i, "mgntClntNo").substring(0, 6));
      } else {
        ds_slipcontents.setCellData(row, "mgntClntNo", ds_excel.getCellData(i, "mgntClntNo"));
      }
      if (!(ds_slipcontents.getCellData(row, "mgntClntNo") == null || ds_slipcontents.getCellData(row, "mgntClntNo") == "")) {
        //ds_slipcontents.NameString(row,"clntMgntYn") = "1";
      }
      console.log("  ^7 [" + i + ", ", row + "] row  거래처코드 세팅  ^^  ds_slipcontents.mgntClntNo : " + ds_slipcontents.getCellData(row, "mgntClntNo"));

      //console.log("   -- 관리일자 자릿수 검사");
      // 관리일자 자릿수 검사
      if (lengthOfMgntDt > 8) {
        //alert("관리일자 길이가 8보다 더 크네");
        ds_slipcontents.setCellData(row, "mgntDt", ds_excel.getCellData(i, "mgntDt").substring(0, 8));
      } else {
        ds_slipcontents.setCellData(row, "mgntDt", ds_excel.getCellData(i, "mgntDt"));
      }

      //            console.log("  ^8 ["+i+"]  관리일자 세팅");

      // KYU_TEST : 일자관리는 무조건 1로 지정
      ds_slipcontents.setCellData(row, "dtMgntYn", "1"); //관리일자여부

      // 사업자번호 자릿수 검사
      if (lengthOfCrn > 13) {
        ds_slipcontents.setCellData(row, "crn", ds_excel.getCellData(i, "crn").substring(0, 13));
      } else {
        ds_slipcontents.setCellData(row, "crn", ds_excel.getCellData(i, "crn"));
      }

      // 지급일자 자릿수 검사
      if (lengthOfReqDt > 8) {
        ds_slipcontents.setCellData(row, "reqDt", ds_excel.getCellData(i, "reqDt").substring(0, 8));
      } else {
        ds_slipcontents.setCellData(row, "reqDt", ds_excel.getCellData(i, "reqDt"));
      }
      console.log("  ^9 [" + i + ", ", row + "]  사업자번호 세팅  ^^^ ds_slipcontents.getCellData(row,reqDt) : " + ds_slipcontents.getCellData(row, "reqDt") + " ds_excel.reqDt : " + ds_excel.getCellData(i, "reqDt"));

      // 세금계산서일자 자릿수 검사
      //if(lengthOfTaxinvcDt > 8){
      if (lengthOfTaxInvcDt > 8) {
        // 대소문자 주의
        ds_slipcontents.setCellData(row, "taxinvcDt", ds_excel.getCellData(i, "taxinvcDt").substring(0, 8));
      } else {
        ds_slipcontents.setCellData(row, "taxinvcDt", ds_excel.getCellData(i, "taxinvcDt"));
      }
      console.log("  ^10 [" + i + ", ", row + "]  세금계산서일자 세팅  ^^^ ds_slipcontents.getCellData(row,taxinvcDt) : " + ds_slipcontents.getCellData(row, "taxinvcDt") + " excel.taxinvcDt : " + ds_excel.getCellData(i, "taxinvcDt"));

      // 관리번호 자릿수 검사
      if (lengthOfMgntNo > 25) {
        ds_slipcontents.setCellData(row, "mgntNo", ds_excel.getCellData(i, "mgntNo").substring(0, 25));
      } else {
        ds_slipcontents.setCellData(row, "mgntNo", ds_excel.getCellData(i, "mgntNo"));
      }

      //            console.log("  ^11 ["+i+"]  관리번호 세팅");

      if ((ds_slipcontents.getCellData(row, "acctCd") == "1210710" || ds_slipcontents.getCellData(row, "acctCd") == "1210110" || ds_slipcontents.getCellData(row, "acctCd") == "1110133" || ds_slipcontents.getCellData(row, "acctCd") == "1110140" || ds_slipcontents.getCellData(row, "acctCd") == "1110150" || ds_slipcontents.getCellData(row, "acctCd") == "1110160" || ds_slipcontents.getCellData(row, "acctCd") == "1110260" || ds_slipcontents.getCellData(row, "acctCd") == "1110270" || ds_slipcontents.getCellData(row, "acctCd") == "1110280" || ds_slipcontents.getCellData(row, "acctCd") == "1110121" || ds_slipcontents.getCellData(row, "acctCd") == "1110210" || ds_slipcontents.getCellData(row, "acctCd") == "1110220" || ds_slipcontents.getCellData(row, "acctCd") == "1110230" || ds_slipcontents.getCellData(row, "acctCd") == "1110250" || ds_slipcontents.getCellData(row, "acctCd") == "1110271") && ds_slipcontents.getCellData(row, "mgntNo") != "") {
        ds_slipcontents.setCellData(row, "mgntNm", "통장번호");
      }

      //            console.log("  ^11 ["+i+"]  관리명 세팅");

      // 관리사원번호 자릿수 검사
      if (lengthOfMgntEmpNo > 6) {
        ds_slipcontents.setCellData(row, "mgntEmpNo", ds_excel.getCellData(i, "mgntEmpNo").substring(0, 6));
      } else {
        ds_slipcontents.setCellData(row, "mgntEmpNo", ds_excel.getCellData(i, "mgntEmpNo"));

        //                console.log("   ds_slipcontents.getCellData(row,mgntEmpNo) : "+ds_slipcontents.getCellData(row,"mgntEmpNo"));
      }

      //            console.log("  ^11 ["+i+"]  관리사원번호 세팅");

      //여기서 부터 있는 애들은 위에서 자릿수 검사 안한 애들
      ds_slipcontents.setCellData(row, "summary", ds_excel.getCellData(i, "summary")); // 적요
      ds_slipcontents.setCellData(row, "reqPayMthdCd", ds_excel.getCellData(i, "reqPayMthdCd")); // 지급방법
      ds_slipcontents.setCellData(row, "crcCd", ds_excel.getCellData(i, "crcCd")); // 통화코드
      ds_slipcontents.setCellData(row, "exchRt", ds_excel.getCellData(i, "exchRt")); // 환율

      //            console.log("   ds_slipcontents.getCellData(["+row+"], exchRt (환율)) : "+ds_slipcontents.getCellData(row,"exchRt"));

      ds_slipcontents.setCellData(row, "spplyAmt", ds_excel.getCellData(i, "spplyAmt")); // 공급금액

      ds_slipcontents.setCellData(row, "slipDivideNo", ds_excel.getCellData(i, "slipDivideNo")); // 전표분할구분

      ds_slipcontents.setCellData(row, "payProcYn", ds_excel.getCellData(i, "payProcYn")); // 지급처리여부
      ds_slipcontents.setCellData(row, "draftDdCntCd", ds_excel.getCellData(i, "draftDdCntCd")); // 어음일수

      ds_slipcontents.setCellData(row, "recvProcYn", ds_excel.getCellData(i, "recvProcYn")); // 채권처리여부

      ds_slipcontents.setCellData(row, "evidClsCd", ds_excel.getCellData(i, "evidClsCd")); // 증빙구분
      ds_slipcontents.setCellData(row, "zeroTaxClsCd", ds_excel.getCellData(i, "zeroTaxClsCd")); // 영수구분
      ds_slipcontents.setCellData(row, "deductClsCd", ds_excel.getCellData(i, "deductClsCd")); // 공제구분

      ds_slipcontents.setCellData(row, "taxInvcText", ds_excel.getCellData(i, "taxInvcText")); // 발행비고
      //ds_slipcontents.setCellData(row,"vatSpplyAmt"    , ds_excel.getCellData(i,"vatSpplyAmt"   ));     // 영세율 공급가액

      // 2025-11-04 : 금액처리 추가 - 합계는 그냥 sum 으로 대치
      // <C> id=Damt      name=차변금액       sumtext={Sum(decode(drcrClsCd,"D",amt,"C","0"))}  sumtextalign="right" value ={decode(drcrClsCd,"D",amt,"C","0")} </C>
      // <C> id=Camt      name=대변금액       sumtext={Sum(decode(drcrClsCd,"C",amt,"D","0"))}  sumtextalign="right" value ={decode(drcrClsCd,"C",amt,"D","0")} </C>
      // <C> id=dAmtFcrc  name="차변외화금액" sumtext={Sum(decode(drcrClsCd,"D",amtFcrc,"C","0"))}  sumtextalign="right" value ={decode(drcrClsCd,"D",amtFcrc,"C","0")} </C>
      // <C> id=cAmtFcrc  name="대변외화금액" sumtext={Sum(decode(drcrClsCd,"C",amtFcrc,"D","0"))}  sumtextalign="right" value ={decode(drcrClsCd,"C",amtFcrc,"D","0")} </C>

      //            console.log("  ^12 ["+i+"]  길이검사 제외 멤버 세팅");

      // 발행비고
      if (ds_excel.getCellData(i, "taxInvcText") != "") {
        if (ds_excel.getCellData(i, "acctCd") == "2100611") {
          scwin.txt_taxInvcRmk2 = ds_excel.getCellData(i, "taxInvcText");
        } else {
          scwin.txt_taxInvcRmk1 = ds_excel.getCellData(i, "taxInvcText");
        }
      }

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      if (ds_excel.getCellData(i, "acctCd") == "1111210" || ds_excel.getCellData(i, "acctCd") == "2100710") {
        if (ds_slipcontents.getCellData(row, "spplyAmt") > 0 || ds_slipcontents.getCellData(row, "spplyAmt") < 0) {} else {
          ds_slipcontents.setCellData(row, "spplyAmt", ds_slipcontents.getCellData(row, "amt") * 10);
        }
        //ds_slipcontents.setCellData(row,"spplyAmt", ds_slipcontents.getCellData(row,"amt") * 10 );
        //ds_slipcontents.NameValue(row,"taxinvcDt") = ed_slipDt.text;
        ds_slipcontents.setCellData(row, "taxinvcDt", ica_slipDt.getValue());

        // 부가세금액(부가세자료로 넘어가는금액) 필수 : 세금계산서, 11(?), 법인카드, 개인카드, 현금영수증
        // if(lc_evidClsCd.BindColVal =="10"   ||   lc_evidClsCd.BindColVal =="11"   ||   lc_evidClsCd.BindColVal =="40"
        //     ||   lc_evidClsCd.BindColVal =="50"   ||   lc_evidClsCd.BindColVal =="60"){
        if (ds_excel.getCellData(i, "evidClsCd") == "10" || ds_excel.getCellData(i, "evidClsCd") == "11" || ds_excel.getCellData(i, "evidClsCd") == "40" || ds_excel.getCellData(i, "evidClsCd") == "50" || ds_excel.getCellData(i, "evidClsCd") == "60") {
          //                  ed_vatAmt.text = Math.round(ed_spplyAmt.text.trim() * 0.1);
          ed_vatAmt.setValue(ds_excel.getCellData(i, "amt"));
          // KYU_NEW
          ds_slipcontents.setCellData(row, "vatAmt", ds_excel.getCellData(i, "amt"));
        } else {
          ed_vatAmt.setValue(0);
          // KYU_NEW
          ds_slipcontents.setCellData(row, "vatAmt", 0);
        }

        //              if ( lc_evidClsCd.getValue() == "20"){//영세율 세금계산서 일경우
        //                  ds_slipcontents.setCellData(row,"spplyAmt", ds_excel.getCellData(i,"vatSpplyAmt") );           // 영세율
        //                  ed_spplyAmt.setValue( ds_excel.getCellData(i,"vatSpplyAmt") );
        //              }
      }
      //            console.log("  ^13 ["+i+"]  부가세대급금-일반, 부가세예수금-일반 처리");

      //외상매출금 차변일 경우
      if (ds_excel.getCellData(i, "acctCd") == "1110410" && ds_excel.getCellData(i, "drcrClsCd") == "D") {
        // cbx_recvProcYn.checkAll(true);

        cbx_recvProcYn.setValue(1);
        ds_slipcontents.setCellData(row, "recvProcYn", 1);
        console.log("   f_AddRowUploaded --==-- 외상매입금 & 대변 : 채권체크박스 체크인 !!!!");
        ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "recvProcYn", 1);
        console.log("  ^14 [" + i + "]  외상매출금, 차변 처리");
      }
      ds_slipcontents.setCellData(row, "termMgntYn", "0");
      if (!(ds_slipcontents.getCellData(row, "mgntEmpNo") == null || ds_slipcontents.getCellData(row, "mgntEmpNo") == "")) {
        console.log("  mgntEmpNo != null  -->  empMgntYn (사원관리여부) 1  ◆◆◆◆");
        ds_slipcontents.setCellData(row, "empMgntYn", "1"); // 사원관리여부
      }

      // KYU_ORDER : 아래로 이동
      // if ( ds_slipcontents.getCellData(row,"payProcYn") == "1"){
      //     console.log("  payPorcYn = 1  -->  payAcctCd (지급계정코드) 1  ◆◆◆◆");
      //     ds_slipcontents.setCellData(row,"payAcctCd", "1" );    // 지급계정코드
      // }

      // KYU_COPY : 로직 복사
      //외상매입금 대변일 경우
      if (ds_excel.getCellData(i, "acctCd") == "2100110" && ds_excel.getCellData(i, "drcrClsCd") == "C") {
        // cbx_payProcYn.checkAll(true);
        cbx_payProcYn.setValue(1);
        ds_slipcontents.setCellData(row, "payProcYn", 1);
        console.log("   f_AddRowUploaded --==-- 외상매입금 & 대변 : 지급체크박스 체크인 !!!!");

        // 지급방법 세팅
        // KYU_TEST : ds 에 직접 지정
        // lc_reqPayMthdCd.setSelectedIndex(0);
        ds_slipcontents.setCellData(row, "reqPayMthdCd", "20");

        // lc_reqPayMthdCd.setSelectedIndex(index)

        console.log("     **** 지급방법  lc_reqPayMthdCd [" + lc_reqPayMthdCd.getValue() + "]  index 0 [" + lc_reqPayMthdCd.getSelectedIndex() + "]  ds[" + row + "][" + ds_slipcontents.getCellData(row, "reqPayMthdCd") + "]");
        $c.gus.cfDisableObjects($p, [cbx_payProcYn]);
        console.log("  ==--== 비활성 ( 지급체크박스 (체크) ) ");
        console.log("  ^15 [" + i + "]  외상매출금, 대변 처리");
      }

      // KYU_ORDER - f_AcctCd 에서 주요 분기
      if (ds_slipcontents.getCellData(row, "payProcYn") == "1") {
        console.log("  payPorcYn = 1  -->  payAcctCd (지급계정코드) 1  ◆◆◆◆");
        ds_slipcontents.setCellData(row, "payAcctCd", "1"); // 지급계정코드
      }
      ds_slipcontents.setCellData(row, "coCd", scwin.vCoCd);
      ds_slipcontents.setCellData(row, "coClsCd", scwin.vCoClsCd);

      //            console.log("  ^16 ["+i+"]  회사코드, 회사종류코드 셋팅");

      // ed_acctCd.hidVal = ds_slipcontents.NameString(row,"acctCd");
      // ed_acctDeptCd.hidVal = ds_slipcontents.NameString(row,"acctDeptCd");
      // ed_mgntClntNo.hidVal = ds_slipcontents.NameString(row,"mgntClntNo");
      // ed_mgntEmpNo.hidVal = ds_slipcontents.NameString(row,"mgntEmpNo");

      scwin.ed_acctCd_hidVal = ds_slipcontents.getCellData(row, "acctCd");
      scwin.ed_acctDeptCd_hidVal = ds_slipcontents.getCellData(row, "acctDeptCd");
      scwin.ed_mgntClntNo_hidVal = ds_slipcontents.getCellData(row, "mgntClntNo");
      scwin.ed_mgntEmpNo_hidVal = ds_slipcontents.getCellData(row, "mgntEmpNo");

      //            console.log("  ^17 ["+i+"]  계정,부서,거래처,사원의 hidVal 셋팅");

      // console.log(" scwin.ed_acctCd_hidVal     : "+ scwin.ed_acctCd_hidVal);
      // console.log(" scwin.ed_acctDeptCd_hidVal : "+ scwin.ed_acctDeptCd_hidVal);
      // console.log(" scwin.ed_mgntClntNo_hidVal : "+ scwin.ed_mgntClntNo_hidVal);
      // console.log(" scwin.ed_mgntEmpNo_hidVal  : "+ scwin.ed_mgntEmpNo_hidVal);

      // 20120927 by kimseok 지로납부일자항목 추가
      // 지급일자 항목을 추가한다.

      // ds_slipcontents.NameString(row,"paymentPrd") = ds_slipcontents.NameString(row,"reqDt");

      ds_slipcontents.setCellData(row, "paymentPrd", ds_slipcontents.getCellData(row, "reqDt"));
      console.log("  ^17 [" + i + "]  지로납부기한 셋팅");

      // 판관비/원가 부서 구분에 맞는 계정 여부 체크
      //    - 계정정보 거래처,기간,사원,일자,지급계정 조회
      await scwin.f_checkDeptAcctCd(scwin.ed_acctCd_hidVal, scwin.ed_acctDeptCd_hidVal);
      console.log("  ^18 [" + i + "]  f_checkDeptAcctCd - 판관비/원가 부서 구분에 맞는 계정 여부 체크 - 계정정보 거래처,기간,사원,일자,지급계정 조회");

      // console.log("    ◁ ◁ ◁ ◁  ds_excel [ "+i+" ][" + JSON.stringify(ds_excel.getRowJSON(i)) + "]" );
      console.log("   payProcYn (지급처리여부)  ds_slipcontents [" + row + "][" + ds_slipcontents.getCellData(row, "payProcYn") + "]  ds_excel[" + i + "][" + ds_excel.getCellData(i, "payProcYn") + "]");
      console.log("    ◀ ◀  ds_slipcontents [ " + row + " ][" + JSON.stringify(ds_slipcontents.getRowJSON(row)) + "]");
      console.log("");
    } // end of for

    //var dc = ds_slipcontents.getAllArray();
    //console.log("  *** ds_slipcontents : " + JSON.stringify(dc));
  } else {
    // 1 건도 없으면 리턴 처리
    return;
  }
  console.log("  ◀◀◀◀◀◀◀◀◀◀ 이제부터 팝업 세팅 ◀◀◀◀◀◀◀◀◀◀");
  // KYU_NEW
  scwin.loadCompleted = true; // 전표분개내역 로드 완료여부

  // 컬럼명 셋팅
  // for (i=0; i < ds_excel.getTotalRow(); i++ ) {
  //     for (j=0; j < ds_excel.getTotalCol(); j++ ) {
  //         // 인덱스를 받아 컬럼id 로 변환
  //         var lc_columnId = ds_excel.getColumnID(j);

  scwin.dsCodeNameSet = true; // ds에 코드명 세팅여부
  scwin.dsCodeNameSetRow = 0; // ds에 코드명 세팅 row
  console.log("      ==== 2단계 코드명 추출 이전  true 세팅  dsCodeNameSet [" + scwin.dsCodeNameSet + "]");
  for (i = 0; i < ds_slipcontents.getTotalRow(); i++) {
    // debugger;

    if (scwin.testAlertFlag == true) {
      // KYU_TEST : 주요 로그 alert
      await $c.win.alert($p, "-      2단계 코드명 추출   ◁◁   i [  " + i + "  ] ◁◁");
    }
    console.log("==== 2단계 코드명 추출 ◁◁  i [  " + i + "  ] ◁◁ ============================");
    ds_slipcontents.setRowPosition(i);
    gr_slipcontents.setFocusedCell(i, 0, false);
    scwin.dsCodeNameSetRow = i;
    scwin.loadRow = i; // 로드 세팅 row

    for (j = 0; j < ds_slipcontents.getTotalCol(); j++) {
      // 인덱스를 받아 컬럼id 로 변환
      var lc_columnId = ds_slipcontents.getColumnID(j);
      scwin.dsCodeNameSetColId = ds_slipcontents.getColumnID(j);
      // debugger;
      if (lc_columnId == "acctDeptCd" && ds_slipcontents.getCellData(i, "acctDeptCd") != "" ||
      // 귀속부서
      lc_columnId == "vatDeclarAcctDeptCd" && ds_slipcontents.getCellData(i, "vatDeclarAcctDeptCd") != "" ||
      // 부가세관리부서
      lc_columnId == "acctCd" && ds_slipcontents.getCellData(i, "acctCd") != "" ||
      // 계정
      lc_columnId == "crn" && ds_slipcontents.getCellData(i, "crn") != "" ||
      // 사업자번호
      //  ( lc_columnId == "branchCd"   && ds_slipcontents.getCellData(i, "branchCd"   ) != "") ||  // 지점
      //  ( lc_columnId == "pchsItemCd" && ds_slipcontents.getCellData(i, "pchsItemCd" ) != "") ||  // 매입항목코드
      lc_columnId == "mgntEmpNo" && ds_slipcontents.getCellData(i, "mgntEmpNo") != "" ||
      // 관리사원
      lc_columnId == "mgntClntNo" && ds_slipcontents.getCellData(i, "mgntClntNo") != "" ||
      // 거래처
      lc_columnId == "opntAcctCd" && ds_slipcontents.getCellData(i, "opntAcctCd") != "" // 상대계정
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
    // console.log("    ◁ ◁ ◁ ◁  ds_excel [ "+i+" ][" + JSON.stringify(ds_excel.getRowJSON(i)) + "]" );
    console.log("  코드명 부여후 ◀◀◀  ds_slipcontents [ " + i + " ][" + JSON.stringify(ds_slipcontents.getRowJSON(i)) + "]");
    console.log("");

    // debugger;
  }
  scwin.dsCodeNameSet = false; // ds에 코드명 세팅여부

  console.log("      ==== 2단계 코드명 추출 이후 false 세팅 dsCodeNameSet [" + scwin.dsCodeNameSet + "]");
  console.log("=== f_AddRowUploaded (업로드 자료 추가) END ==============================================");

  // 2025-11-04 : 그리드 포커스 제일 아래로...
  gr_slipcontents.setFocusedCell(ds_slipcontents.getTotalRow() - 1, 0);
  var row = ds_slipcontents.getTotalRow() - 1;
  console.log("======= 마지막 row 환경 세팅  --------------------------------- f_changeRow2 [" + row + "]");
  await scwin.f_changeRow2(row);
  return true;
};

//-------------------------------------------------------------------------
// 코드명 세팅  @@
//    1:발행부서,2:계정,3:귀속부서,4:거래처,5:사번,8:사업자,9:상대계정
//-------------------------------------------------------------------------
scwin.setColumnName = async function (lc_row, lc_columnId) {
  var row = lc_row;
  var Colid = lc_columnId;
  var tempValue = ds_slipcontents.getCellData(row, Colid);
  console.log("   ▶ ---------- columnNameSet 코드명 세팅  row[" + lc_row + "]  Colid[" + lc_columnId + "]  tempValue[" + tempValue + "]");

  //  language=JavaScript for=ds_slipcontents  event=onColumnChanged(row,Colid)>

  // 귀속부서
  if (Colid == "acctDeptCd") {
    //scwin.f_openPopUp('3', ds_slipcontents.getCellData(row,Colid),'T');
    await scwin.f_openPopUp('3', tempValue, 'T');
  }

  // 계정
  if (Colid == "acctCd") {
    // await scwin.f_openPopUp('2',ds_slipcontents.getCellData(row,Colid),'T');
    await scwin.f_openPopUp('2', tempValue, 'T');
  }

  // 거래처
  if (Colid == "mgntClntNo") {
    // await scwin.f_openPopUp('4',ds_slipcontents.getCellData(row,Colid),'T');
    await scwin.f_openPopUp('4', tempValue, 'T');
  }

  // 상대계정
  if (Colid == "opntAcctCd") {
    // await scwin.f_openPopUp('9',ds_slipcontents.getCellData(row,Colid),'T');
    await scwin.f_openPopUp('9', tempValue, 'T');
  }

  // 사원번호
  if (Colid == "mgntEmpNo") {
    // await scwin.f_openPopUp('5',ds_slipcontents.getCellData(row,Colid),'T');
    await scwin.f_openPopUp('5', tempValue, 'T');
  }

  // 사업자번호
  if (Colid == "crn") {
    // await scwin.f_openPopUp('8',ds_slipcontents.getCellData(row,Colid),'T');
    await scwin.f_openPopUp('8', tempValue, 'T');
  }
  var temp;
  if (Colid == "exchRt") {
    if (ed_amtFcrc.getValue().trim() < 0) {
      if (lc_crcCd.getValue() == "JPY") {
        if (parseInt(ds_slipcontents.getCellData(row, "amt")) == 0) {
          //ed_amt.text = Math.floor(ed_amtFcrc.text.trim() * ds_slipcontents.nameValue(row,Colid)) / 100;	// 기준환율		
          temp = Math.floor(ed_amtFcrc.getValue().trim() * ds_slipcontents.getCellData(row, Colid)) / 100; // 기준환율
          ed_amt.setValue(temp);
        }
      } else {
        if (parseInt(ds_slipcontents.getCellData(row, "amt")) == 0) {
          //ed_amt.text = Math.floor(ed_amtFcrc.text.trim() * ds_slipcontents.nameValue(row,Colid));
          temp = Math.floor(ed_amtFcrc.getValue().trim() * ds_slipcontents.getCellData(row, Colid));
          ed_amt.setValue(temp);
        }
      }
    } else {
      if (lc_crcCd.getValue() == "JPY") {
        if (parseInt(ds_slipcontents.getCellData(row, "amt")) == 0) {
          //ed_amt.text = Math.round(ed_amtFcrc.text.trim() * ds_slipcontents.nameValue(row,Colid)) / 100;	// 기준환율
          temp = Math.round(ed_amtFcrc.getValue().trim() * ds_slipcontents.getCellData(row, Colid)) / 100; // 기준환율
          ed_amt.setValue(temp);
        }
      } else {
        if (parseInt(ds_slipcontents.getCellData(row, "amt")) == 0) {
          //ed_amt.text = Math.round(ed_amtFcrc.text.trim() * ds_slipcontents.nameValue(row,Colid));
          temp = Math.round(ed_amtFcrc.getValue().trim() * ds_slipcontents.getCellData(row, Colid));
          ed_amt.setValue(temp);
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// f_checkDeptAcctCd  -- 1단계  @@ @
//   판관비/원가 부서 구분에 맞는 계정 여부 체크
//
//   혼동 방지 : ed_acctCd  -->  fed_acctCd
//-------------------------------------------------------------------------
scwin.f_checkDeptAcctCd = async function (fed_acctCd, fed_acctDeptCd) {
  console.log("=== ^^^ f_checkDeptAcctCd   ed_acctCd [" + fed_acctCd + "], ed_acctDeptCd [" + fed_acctDeptCd + "])");
  scwin.fed_acctCd = fed_acctCd;
  scwin.fed_acctDeptCd = fed_acctDeptCd;

  // var vCheckStatusUpload  = "false";  // 전역변수로 이동
  scwin.vCheckStatusUpload = "false";
  console.log("    ◇◇ step 1. 귀속부서 팝업 (retrieveAcctDeptCdInfo3)  fed_acctCd [" + scwin.fed_acctCd + "]   fed_acctDeptCd [" + scwin.fed_acctDeptCd + "]");

  // step 1. 귀속부서 팝업 (retrieveAcctDeptCdInfo3)

  if (scwin.fed_acctDeptCd != null) {
    var param = "";
    //param = ed_slipDt.text.trim()+",,,,"; 
    // param = ica_slipDt.getValue().trim()+",,,,";

    // KYU_TEST : 결과 나오도록 수정
    param = ica_slipDt.getValue().trim() + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;
    console.log("  귀속부서 팝업  param [" + param + "]  자회사 아님");

    //if(txtCoClsCd.value  > '<%=ACConstants.CO_CLS_CD_DONGBU%>') {  // 자회사 회계 시스템
    if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
      // 자회사 회계 시스템
      param = ica_slipDt.getValue().trim() + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;
      console.log("  귀속부서 팝업  param [" + param + "]  자회사");
    }

    //$c.win.alert("retrieveAcctDeptCdInfo3 팝업");  // 로깅
    // rtnList1 = $c.gus.cfCommonPopUp('retrieveAcctDeptCdInfo3',ed_acctDeptCd,'','T',null,null,null,null,param,null,null,null,null); 

    udc_acctDeptCd.setSelectId("retrieveAcctDeptCdInfo3");
    if (!scwin.popupAsyncFlag) {
      console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님) - retrieveAcctDeptCdInfo3  귀속부서조회");
      // udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc2 ,pCode,'',check,null,null,null,null,param,null,null,null,null);
      udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc2, scwin.fed_acctDeptCd, '', 'T', null, null, null, null, param, null, null, null, null);
    } else {
      // await $c.win.alert(" f_checkDeptAcctCd ["+fed_acctCd+"]["+fed_acctDeptCd+"]");
      console.log("  ▶ ▶ cfCommonPopUp (실시간) - retrieveAcctDeptCdInfo3  귀속부서조회");
      await udc_acctDeptCd.cfCommonPopUpAsync(scwin.udc_acctDeptCd_callBackFunc2, scwin.fed_acctDeptCd, '', 'T', null, null, null, null, param, null, null, null, null);

      // await $c.win.alert(" f_checkDeptAcctCd  222");
    }

    // KYU_ORDER : 계정코드 조회 로직 이동
  }
  console.log("    ◇◇ step 2. 대체전표 계정내역조회 (retrieveTransferAcctCdInfo)");

  // step 2. 대체전표 계정내역조회 (retrieveTransferAcctCdInfo)
  console.log("   txt_tempCostClsCd [" + scwin.txt_tempCostClsCd + "]  ==> txt_costClsCdCheck [" + scwin.txt_costClsCdCheck + "]");
  var where = "";
  // where = ica_slipDt.getValue().trim() +","+ txt_costClsCdCheck+",Y";
  where = "," + "," + scwin.txt_costClsCdCheck + ",Y";
  console.log("  계정조회 팝업  where [" + where + "]");

  //$c.win.alert("retrieveTransferAcctCdInfo (계정조회) 팝업");  // 로깅
  // 계정조회  KYU_SKIP
  //rtnList2 = $c.gus.cfCommonPopUp('retrieveTransferAcctCdInfo',ed_acctCd,'' ,'T',null,null,null,null,where,null,null,null,null);

  udc_acctCd.setSelectId("retrieveTransferAcctCdInfo");
  if (!scwin.popupAsyncFlag) {
    console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)  retrieveTransferAcctCdInfo  대체전표 계정내역조회");
    // udc_acctCd.cfCommonPopUp(scwin.udc_acctCd_callBackFunc3 ,pCode,'',check,null,null,null,null,where,null,null,null,null);
    await udc_acctCd.cfCommonPopUp(scwin.udc_acctCd_callBackFunc3, scwin.fed_acctCd, '', 'T', null, null, null, null, where, null, null, null, null);
  } else {
    console.log("  ▶ ▶ cfCommonPopUp (실시간)  retrieveTransferAcctCdInfo  대체전표 계정내역조회");
    await udc_acctCd.cfCommonPopUpAsync(scwin.udc_acctCd_callBackFunc3, scwin.fed_acctCd, '', 'T', null, null, null, null, where, null, null, null, null);
  }
  console.log("    ◇◇ 팝업 종료후  vCheckStatusUpload [" + scwin.vCheckStatusUpload + "]");
  if (scwin.vCheckStatusUpload == "true") {
    await $c.win.alert($p, "판관비/원가 부서 구분에 맞는 계정이 upload 자료에 세팅되어야 합니다. 확인하시고 다시 upload 하시기 바랍니다.");
    //ds_slipcontents.ClearData();
    //ds_excel.ClearData();

    ds_slipcontents.setJSON([]);
    ds_excel.setJSON([]);
    return false;
  }
  console.log("=== ^^^ f_checkDeptAcctCd  END  ^^^ ===========");
};

//-------------------------------------------------------------------------
// 2단계
//   udc_acctDeptCd_callBackFunc2 (retrieveAcctDeptCdInfo3 - 귀속부서 조회 팝업 callBackFunc)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc2 = async function (rtnList1) {
  console.log("▲ udc_acctDeptCd_callBackFunc2 (귀속부서 조회 -2단계- retrieveAcctDeptCdInfo3 rtnList1 [" + rtnList1 + "]");
  console.log("  222  fed_acctCd [" + scwin.fed_acctCd + "]   fed_acctDeptCd [" + scwin.fed_acctDeptCd + "]");
  if (rtnList1 != null) {
    if (rtnList1[0] == "N/A") {
      scwin.vCheckStatusUpload = "true";
      return;
    }
    scwin.txt_tempCostClsCd = rtnList1[9]; //비용구분코드비교값

    // KYU_NEW : 추가 바인딩
    var row = ds_slipcontents.getRowPosition();
    ds_slipcontents.setCellData(row, "tempCostClsCd", scwin.txt_tempCostClsCd); // TEMP비용구분코드

    console.log("scwin.txt_tempCostClsCd (TEMP비용구분코드 - 비용구분코드비교값) [" + scwin.txt_tempCostClsCd + "]");
  } else {
    scwin.vCheckStatusUpload = "true";
  }

  // KYU_ORDER : 계정코드 조회 로직 이동
  scwin.txt_costClsCdCheck = "";
  // 비용구분 : 01^원가,02^판관비,03^원가+판관비,04^판관비제외,05^원가제외
  // 비용구분 : 01: 원가, 02: 판관비, 03: 원가+판관비, 04: 판관비제외, 05: 원가제외, 06: 판관비
  scwin.txt_costClsCdCheck = "04"; // 전체조회

  //        if(txt_tempCostClsCd.value=="" || txt_tempCostClsCd.value=="03"){
  if (scwin.txt_tempCostClsCd == "" || scwin.txt_tempCostClsCd == "03") {
    scwin.txt_costClsCdCheck = "04"; // 전체조회
  } else if (scwin.txt_tempCostClsCd == "01") {
    scwin.txt_costClsCdCheck = "05"; // 원가
  } else if (scwin.txt_tempCostClsCd == "02") {
    scwin.txt_costClsCdCheck = "06"; // 판관비
  } else {
    scwin.txt_costClsCdCheck = "";
  }
};

//-------------------------------------------------------------------------
// 3 단계
//   udc_acctCd_callBackFunc3 (귀속부서 조회 팝업 callBackFunc)
//-------------------------------------------------------------------------
scwin.udc_acctCd_callBackFunc3 = async function (rtnList2) {
  console.log("▲ udc_acctCd_callBackFunc3 (귀속부서 조회 -3단계 - retrieveTransferAcctCdInfo  대체전표 계정내역조회)");
  console.log("   rtnList2 [" + rtnList2 + "]");
  console.log("  333  fed_acctCd [" + scwin.fed_acctCd + "]   fed_acctDeptCd [" + scwin.fed_acctDeptCd + "]");
  if (rtnList2 != null) {
    if (rtnList2[0] == "N/A") {
      scwin.vCheckStatusUpload = "true";
    }
  } else {
    scwin.vCheckStatusUpload = "true";
  }

  // KYU_NEW : 데이타셋에 계정정보 세팅
  // retrieveTransferAcctCdInfo (대체전표 계정내역조회)
  // SELECT  A.ACCT_CD                /* 계정코드                 */ AS COL1
  //       , A.ACCT_NM                /* 계정명                   */ AS COL2
  //       , A.ACCT_CLS_CD            /* 계정구분코드             */ AS COL3
  //       , A.DRCR_CLS_CD            /* 차대구분코드             */ AS COL4
  //       , A.MGNT_NO_CD             /* 관리번호코드             */  AS COL5
  //       , TO_CHAR(A.CLNT_MGNT_YN   /* 거래처관리여부           */) AS COL6
  //       , TO_CHAR(A.TERM_MGNT_YN   /* 기간관리여부             */) AS COL7
  //       , TO_CHAR(A.EMP_MGNT_YN    /* 사원관리여부             */) AS COL8
  //       , B.CD_NM                  /* 코드명                   */ AS COL9
  //       , TO_CHAR(A.DT_MGNT_YN     /* 일자관리여부             */)||'^'||B.CD_NM  AS COL10

  // 계정 캐럿/꺽쇠 처리
  // col10 갈라내기 : 일자관리여부^관리항목명 (FI027  01: 통장번호, 02: 어음수표번호, 03: 증빙번호, 04: 자산번호, 05: 가지급번호, 06: 채권번호, 08: 이율, 09: 지급방법, 10: 카드번호, 11: 선수가수발생번호)
  var temp_dtMgntYn = "";
  var temp_mgntMngNm = "";
  if (!$c.gus.cfIsNull($p, rtnList2[9])) {
    let str = rtnList2[9];
    // console.log(" rtnList3[9] ["+ rtnList2[9] +"]");

    let CodeListDetail = str.split("^");
    // console.log("CodeListDetail ["+ CodeListDetail +"]");

    temp_dtMgntYn = CodeListDetail[0]; // 일자관리여부
    temp_mgntMngNm = CodeListDetail[1]; // 관리항목명-지급계정명
  }

  // var row = ds_slipcontents.getRowPosition();
  var row = scwin.loadRow; // 로드 세팅 row

  // KYU_TEST : 복사하면 안됨 !!
  // ds_slipcontents.setCellData(row,"mgntNo"    , rtnList2[4]);  // 관리번호 (뒤)
  ds_slipcontents.setCellData(row, "clntMgntYn", rtnList2[5]); // 거래처관리 여부  - mgntClntNo 와 혼동하면 안됨 !!
  ds_slipcontents.setCellData(row, "termMgntYn", rtnList2[6]); // 기간관리 여부
  ds_slipcontents.setCellData(row, "empMgntYn", rtnList2[7]); // 사원관리 여부
  // KYU_TEST : f_AddRowUploaded (업로드추가) 에서 무조건 1로 부여됨
  // ds_slipcontents.setCellData(row,"dtMgntYn"  , temp_dtMgntYn);  // 일자관리 여부

  // 주요 로그
  console.log("  ★★★  loadRow [" + row + "] 계정정보 [" + ds_slipcontents.getCellData(row, "acctCd") + "] : 거래처[" + rtnList2[5] + "], 기간[" + rtnList2[6] + "], 사원[" + rtnList2[7] + "], 일자[" + temp_dtMgntYn + "] 지급계정[" + temp_mgntMngNm + "]");
  console.log("");
};

// @@ ====== 그리드 / DS ======================================================================= //

//-------------------------------------------------------------------------
// ds_slipcontents 코드명 부여
//-------------------------------------------------------------------------
scwin.ds_slipcontents_oncelldatachange = async function (info) {
  /*
   language=JavaScript for=ds_slipcontents  event=onColumnChanged(row,Colid)>  */

  // KYU_TEST
  // [개선] 팝업의 callBackFunc 이 늦어 다음 row 로 세팅되기 때문에 컬럼명 세팅이 불가함. 데이타셋팅후 for 문 돌려서 시도
  return;
};

//-------------------------------------------------------------------------
// f_changeRow1
//-------------------------------------------------------------------------
scwin.f_changeRow1 = async function (row) {
  console.log("=== f_changeRow1 (row 변경하려 할 때)   oldRow [" + row + "] =====");
  // <!-- 그리드 로우를 변경하려고 할 경우 - 필수항목 체크-->
  // language=JavaScript for=ds_slipcontents event=CanRowPosChange(row)>
  // if (scwin.isStarted != true) {

  // language=JavaScript for=ds_slipcontents event=CanRowPosChange(row)>
  // 	if (ds_slipcontents.CountRow!=0 && delflag=="N" && !f_Validation()){
  // 	  state = "N";	
  // 	  delflag="N";	
  //       return false;
  //      }else{
  //       state = "N";	
  // 	  delflag="N";
  //       return true;
  //      }
  let rtn = await scwin.f_ValidationDs(row);
  if (ds_slipcontents.getTotalRow() != 0 && scwin.delflag == "N" && !rtn) {
    console.log("  return false   rtn [" + rtn + "]");
    scwin.state = "N";
    scwin.delflag = "N";
    return false;
  } else {
    scwin.state = "N";
    scwin.delflag = "N";
    return true;
  }
};

//-------------------------------------------------------------------------
// row position 변경됨  ds_slipcontents_onrowpositionchange  @@
//-------------------------------------------------------------------------
scwin.ds_slipcontents_onrowpositionchange = async function (info) {
  var oldRow = info.oldRowIndex;
  var newRow = info.newRowIndex;
  var oldStatus = ds_slipcontents.getRowStatus(oldRow);
  var newStatus = ds_slipcontents.getRowStatus(newRow);

  // KYU_TEST : 오동작 발생하므로 두 플래그의 로직은 서로 분리한다

  // 데이타 로드중에는 실행안함
  if (scwin.loadCompleted == false) {
    console.log("  ▶▷▶▷▶▷ row position change SKIP !! (데이타 로드중)  loadCompleted [" + scwin.loadCompleted + "]  dsCodeNameSet [" + scwin.dsCodeNameSet + "]   old[" + info.oldRowIndex + "]  new[ " + info.newRowIndex + "]");
    return; //
  }

  // 코드명 세팅 중에는 실행안함.  2026-03-17 : 첫 row 의 지급일자 초기화 필요
  if (scwin.dsCodeNameSet == true) {
    console.log("  ▶▷▶▷▶▷ row position change SKIP !!!! (코드명 세팅)   loadCompleted [" + scwin.loadCompleted + "]  dsCodeNameSet [" + scwin.dsCodeNameSet + "]   old[" + info.oldRowIndex + "]  new[ " + info.newRowIndex + "]");
    return;
  }

  // let oldRow = info.oldRowIndex;
  if (info.newRowIndex < 0) return;

  // if (   ( oldRow == null && scwin.dsCodeNameSet != true )  // 2026-03-17 : 첫 row 의 지급일자 초기화 필요
  // || ( newStatus == "C" )
  // || (( newStatus == "C" ) && newRow == ds_slipcontents.getRowCount()-1 )  // 마지막 row 스킵 처리 - 행추가용

  if (oldRow == null // 새로운 row 를 추가하더라도, 추가 동작이 거의 없음
  || newRow == null // 데이타 셋을 비울 때 (setJSON)   old [0][C]  new (row) [null][undefined]
  ) return;
  console.log("▶▷▶▷▶▷▶▷  ds_slipcontents_onrowpositionchange (row position 변경됨  old[" + oldRow + "][" + oldStatus + "]  new [" + newRow + "][" + newStatus + "]");
  if (ds_slipcontents.getModifiedIndex().length > 0) {
    // old row 점검
    let ret = await scwin.f_changeRow1(oldRow);

    // let ret = await $c.win.confirm(MSG_CM_CRM_005);
    if (!ret) {
      ds_slipcontents.setEventPause("", true);
      gr_slipcontents.setFocusedCell(info.oldRowIndex, 1, false);
      ds_slipcontents.setEventPause("", false);

      // f_ValidationDs 후처리 : 대상 포커스
      switch (scwin.focusTarget) {
        case 1:
          ed_mgntTermStDt.focus();
          break;
        case 2:
          lc_reqPayMthdCd.focus();
          break;
        case 3:
          ica_reqDt.focus();
          break;
        case 4:
          ica_taxinvcDt.focus();
          break;
        case 5:
          ica_paymentPrd.focus();
          break;
        // 지로납부기한
        case 6:
          ed_draftDdCntCd.focus();
          break;
        default:
          break;
      }
      return;
    } else {
      console.log("222-1  f_changeRow1 정상 처리 ---");
    }
  } else {
    console.log("222-2 : 삭제/취소에서 진행  ---");
    if (scwin.delCancelRow == true) scwin.delCancelRow = false;
    // gr_txncontents.setFocusedCell(info.newRowIndex, 1, false);
  }

  // 후처리
  let rtn = await scwin.f_changeRow2(newRow);
  if (!rtn) {
    console.log("  f_changeRow2 결과 [" + rtn + "]");
    return false;
  }
  console.log("▶▷▶▷▶▷▶▷  ds_slipcontents_onrowpositionchange  END  ▶▷▶▷▶▷▶▷");
};

//-------------------------------------------------------------------------
// f_dsTotxt 역바인딩
//-------------------------------------------------------------------------
scwin.f_dsTotxt = async function () {
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
// f_changeRow2  @@ @
//-------------------------------------------------------------------------
scwin.f_changeRow2 = async function (row) {
  console.log("■ ■ ■ ■ === f_changeRow2 (row 변경후) - newRow ( " + row + " )");

  // language=JavaScript for=ds_slipcontents event=OnRowPosChanged(row)>
  // 2011.03.17 조원철대리 요청건으로 환율 값을 사용자 임의로 변경 가능토록 허용함
  // 	//crcCdChange();
  // f_AcctCd(ds_slipcontents.NameString(row,"mgntNo"),ds_slipcontents.NameString(row,"clntMgntYn"),ds_slipcontents.NameString(row,"termMgntYn"),ds_slipcontents.NameString(row,"empMgntYn"),ds_slipcontents.NameString(row,"mgntNm"),ds_slipcontents.NameString(row,"dtMgntYn"),ds_slipcontents.NameString(row,"payAcctCd")) ;
  // 	cfDisableObjects([txt_acctNm,txt_acctDeptNm,txt_mgntClntNm,txt_mgntEmpNm,lc_adjmClsCd]);

  // 코드 세팅 중에는 실행안함
  if (scwin.columnNameSet != true) {
    // KYU_NEW : 추가 역바인딩
    await scwin.f_dsTotxt();
  }

  // KYU_NEW : 통화코드 변경
  await scwin.crcCdChange();

  // // 코드 세팅 중에는 실행안함
  // if ( scwin.columnNameSet != true ) {
  //     console.log("  f_changeRow2 - 계정팝업 호출   ["+row+"] acctCd["+ed_acctCd.getValue()+"] ds["+ds_slipcontents.getCellData(row,"acctCd")+"]");

  //     // 계정 팝업
  //     await scwin.f_openPopUp('2', ed_acctCd.getValue() ,'T');

  // }

  // f_AcctCd(ds_slipcontents.NameString(row,"mgntNo"),ds_slipcontents.NameString(row,"clntMgntYn"),ds_slipcontents.NameString(row,"termMgntYn"),ds_slipcontents.NameString(row,"empMgntYn"),ds_slipcontents.NameString(row,"mgntNm"),ds_slipcontents.NameString(row,"dtMgntYn"),ds_slipcontents.NameString(row,"payAcctCd")) ;
  // scwin.f_AcctCd(ds_slipcontents.getCellData(row,"mgntNo"),ds_slipcontents.getCellData(row,"clntMgntYn"),ds_slipcontents.getCellData(row,"termMgntYn"),ds_slipcontents.getCellData(row,"empMgntYn"),ds_slipcontents.getCellData(row,"mgntNm"),ds_slipcontents.getCellData(row,"dtMgntYn"),ds_slipcontents.getCellData(row,"payAcctCd")) ;

  //-------------------------------------------------------------------------
  //  계정조회시화면셋팅
  //  r_mgntCd     - 관리번호
  //  r_clntMgntYn - 거래처여부
  //  r_termMgntYn - 기간관리여부
  //  r_empMgntYn  - 사원관리여부
  //  r_mgntNm     - 관리사원명
  //  r_dtMgntYn   - 일자관리여부
  //  r_payAcctCd  - 지급계정
  //-------------------------------------------------------------------------
  console.log("  f_changeRow2 - f_AcctCd (계정조회시화면셋팅) : row [" + row + "]   지급계정 [" + ds_slipcontents.getCellData(row, "payAcctCd") + "]");
  let rtna = await scwin.f_AcctCd(ds_slipcontents.getCellData(row, "mgntNo") // 관리번호
  , ds_slipcontents.getCellData(row, "clntMgntYn") // 거래처여부
  , ds_slipcontents.getCellData(row, "termMgntYn") // 기간관리여부
  , ds_slipcontents.getCellData(row, "empMgntYn") // 사원관리여부
  , ds_slipcontents.getCellData(row, "mgntNm") // 관리사원명
  , ds_slipcontents.getCellData(row, "dtMgntYn") // 일자관리여부
  , ds_slipcontents.getCellData(row, "payAcctCd") // 지급계정
  );

  // //cfDisableObjects([txt_acctNm,txt_acctDeptNm,txt_mgntClntNm,txt_mgntEmpNm,lc_adjmClsCd]);
  // KYU_SKIP
  $c.gus.cfDisableObjects($p, [ed_acctNm, ed_acctDeptNm, ed_mgntClntNm, ed_mgntEmpNm, lc_adjmClsCd]);
  console.log("  ==--== 비활성 (계정명,귀속부서명,거래처명,관리사원명, 정산방법)");

  // 	if ( lc_drcrClsCd.BindColVal == "C" && ed_acctCd.Text == "1110530"){
  // 		if(isSubCompany == true){
  // 		 	lc_adjmClsCd.BindColVal = -1;	//정산방법
  // 			cfDisableObjects(img_adjmClsCd);	
  // 		}else{
  // 			lc_adjmClsCd.BindColVal="<%=ACConstants.ADJM_MTHDCD_SUSPAY%>"
  // 			cfEnableObjects(img_adjmClsCd);
  // 		}		
  // 	}else{
  // 		cfDisableObjects(img_adjmClsCd);		
  // 	}

  if (lc_drcrClsCd.getValue() == "C" && ed_acctCd.getValue() == "1110530") {
    // 대변, 단기대여금-업무가지급금(일반)
    if (sswin.isSubCompany == true) {
      lc_adjmClsCd.setValue(-1); // 정산방법 : 없음 -1
      $c.gus.cfDisableObjects($p, btn_adjmClsCd);
      console.log("  ==--== 정산방법:없음(-1) - 비활성 ( 정산방법돋보기 )");
    } else {
      lc_adjmClsCd.setValue(ACConstants.ADJM_MTHDCD_SUSPAY); // 4 : 가지급금
      $c.gus.cfEnableObjects($p, btn_adjmClsCd);
      console.log("  ==--== 정산방법:가지급금(4) - 활성 ( 정산방법돋보기 )");
    }
  } else {
    $c.gus.cfDisableObjects($p, btn_adjmClsCd);
    console.log("  ==--== 비활성 ( 정산방법돋보기 )");
  }

  // 	f_CheckPayYn();	

  // 	ed_slipAcctDeptCd.hidVal = ds_slip.NameString(1,"slipAcctDeptCd");
  // 	ed_acctCd.hidVal = ds_slipcontents.NameString(row,"acctCd"); 
  // 	ed_acctDeptCd.hidVal = ds_slipcontents.NameString(row,"acctDeptCd"); 
  // 	ed_mgntClntNo.hidVal = ds_slipcontents.NameString(row,"mgntClntNo"); 
  // 	ed_mgntEmpNo.hidVal = ds_slipcontents.NameString(row,"mgntEmpNo");     	
  // 	// 2013.10.31 hurrah015
  // 	//dataSetDebug(ds_slipcontents, true);
  // 	if(f_checkSettle(ed_acctCd.text, lc_drcrClsCd.BindColVal)){
  // 		txt_refNo.value     = ds_slipcontents.NameString(row,"stlOutbrNo");	
  // 		txt_acctClsCd.value = ds_slipcontents.NameString(row,"acctClsCd");	
  // 	}

  // 	// 선급비용-일반 계정일때 상대계정필드 활성화
  //     if (ds_slipcontents.NameString(row,"acctCd") == "1111110"){
  // 		cfEnableObjects([ed_opntAcctCd, txt_opntAcctNm, img_opntAcctCd]);	
  // 	}else{
  // 		cfDisableObjects([ed_opntAcctCd, txt_opntAcctNm, img_opntAcctCd]);

  // KYU_SKIP : f_AcctCd 안에서 실행했지만 실행 유지
  //  f_CheckPayYn : 지급체크박스에 따라 지급방법,어음일수,세금계산서일자,지급일자 활성
  let rtnc = await scwin.f_CheckPayYn();
  scwin.ed_slipAcctDeptCd_hidVal = ds_slip.getCellData(0, "slipAcctDeptCd");
  scwin.ed_acctCd_hidVal = ds_slipcontents.getCellData(row, "acctCd");
  scwin.ed_acctDeptCd_hidVal = ds_slipcontents.getCellData(row, "acctDeptCd");
  scwin.ed_mgntClntNo_hidVal = ds_slipcontents.getCellData(row, "mgntClntNo");
  scwin.ed_mgntEmpNo_hidVal = ds_slipcontents.getCellData(row, "mgntEmpNo");
  console.log("  ▣ ▣  f_changeRow2 - f_checkSettle  호출");

  // 2013.10.31 hurrah015
  //dataSetDebug(ds_slipcontents, true);
  let rtn1 = await scwin.f_checkSettle(ed_acctCd.getValue(), lc_drcrClsCd.getValue());
  console.log("  ▣ ▣  f_changeRow2 - f_checkSettle 종료  rtn1 [" + rtn1 + "]");
  if (rtn1) {
    ed_refNo.setValue(ds_slipcontents.getCellData(row, "stlOutbrNo")); // 지급/채권번호-참고번호  <-- 채권채무.정산발생번호
    scwin.txt_acctClsCd = ds_slipcontents.getCellData(row, "acctClsCd"); // (전역)계정구분코드 <-- 계정구분코드
  }

  // KYU_COPY : 로직 복사 : 지급체크박스가 1 인데도 0 으로 전환됨 방지
  // var row = ds_slipcontents.getRowPosition();

  //외상매입금 대변일 경우
  if (ds_slipcontents.getCellData(i, "acctCd") == "2100110" && ds_slipcontents.getCellData(i, "drcrClsCd") == "C") {
    // cbx_payProcYn.checkAll(true);
    cbx_payProcYn.setValue(1);
    ds_slipcontents.setCellData(row, "payProcYn", 1);
    console.log("   f_AddRowUploaded --==-- 외상매입금 & 대변 : 지급체크박스 체크인 !!!!  KYU_COPY");

    // 지급방법 세팅
    // KYU_TEST : ds 에 직접 지정
    // lc_reqPayMthdCd.setSelectedIndex(0);
    ds_slipcontents.setCellData(row, "reqPayMthdCd", "20");

    // lc_reqPayMthdCd.setSelectedIndex(index)

    console.log("     **** 지급방법  lc_reqPayMthdCd [" + lc_reqPayMthdCd.getValue() + "]  index 0 [" + lc_reqPayMthdCd.getSelectedIndex() + "]  ds[" + row + "][" + ds_slipcontents.getCellData(row, "reqPayMthdCd") + "]");
    $c.gus.cfDisableObjects($p, [cbx_payProcYn]);
    console.log("  ==--== 비활성 ( 지급체크박스 (체크) ) ");
    console.log("  ^15 [" + i + "]  외상매출금, 대변 처리");
  }
  var i = row;

  //         // KYU_COPY : from 계정팝업 callBack
  // 	    if ( ds_slipcontents.getCellData(i,"drcrClsCd") == "C" &&
  //              ds_slipcontents.getCellData(i,"acctCd") == "1110530"){  // 대변, 단기대여금-업무가지급금(일반)
  // 	        if ( scwin.isSubCompany == true ) { //자회사 정산방법 선택 불가
  // 	            // lc_adjmClsCd.BindColVal = -1;   //정산방법
  //                 lc_adjmClsCd.setValue( -1 );   //정산방법
  // 	            //cfDisableObjects(img_adjmClsCd);
  //                 $c.gus.cfDisableObjects([btn_adjmClsCd]);  // 정산방법 돋보기
  //                 console.log("  ==--== 비활성 ( 정산방법돋보기 )");
  // 	        }else{
  // 	            //lc_adjmClsCd.BindColVal="<%=ACConstants.ADJM_MTHDCD_SUSPAY%>"
  //                 lc_adjmClsCd.setValue(ACConstants.ADJM_MTHDCD_SUSPAY);
  // 	            //cfEnableObjects(img_adjmClsCd);
  //                 $c.gus.cfDisableObjects([btn_adjmClsCd]);  // 정산방법 돋보기
  //                 console.log("  ==-==-== 비활성 ( 정산방법돋보기 )");
  // 	        }
  // 	    } else{
  // 	        if ( scwin.isSubCompany == true ) { //자회사 정산방법 선택 불가
  // 	            //lc_adjmClsCd.BindColVal = -1;   //정산방법
  //                 lc_adjmClsCd.setValue( -1 );   //정산방법
  // 	            //cfDisableObjects(img_adjmClsCd);
  //                 $c.gus.cfDisableObjects([btn_adjmClsCd]);  // 정산방법 돋보기
  //                 console.log("  ==-==-== 비활성 ( 정산방법돋보기 )");
  // 	        }else{
  // 	            //lc_adjmClsCd.BindColVal = 0;
  //                 lc_adjmClsCd.setValue( 0 );   //정산방법  KYU_TEST : 0 이 없는 상태임 -1^없음,4^가지급금

  //                 console.log("  [검증] lc_adjmClsCd (정산방법 (-1, 4)) 0 지정후 : "+  lc_adjmClsCd.getValue());

  // 	            //cfDisableObjects(img_adjmClsCd);
  //                 $c.gus.cfDisableObjects([btn_adjmClsCd]);  // 정산방법 돋보기
  //                 console.log("  ==-==-== 비활성 ( 정산방법돋보기 )");
  // 	        }
  // 	    }

  // KYU_COPY : from 계정팝업 callBack
  // 부가세대급금이 대변  계정, 부가세예수금이 차변계정  입력시는 사업자번호, 부가세관리부서등 부가세관련 데이터 입력가능
  if (ds_slipcontents.getCellData(i, "acctCd") == "1111210" && ds_slipcontents.getCellData(i, "drcrClsCd") == "D" || ds_slipcontents.getCellData(i, "acctCd") == "2100710" && ds_slipcontents.getCellData(i, "drcrClsCd") == "C") {
    //	    cfEnableObjects([ed_taxinvcDt,img_taxinvcDt,lc_evidClsCd,lc_deductClsCd, ed_vatDeclarAcctDeptCd,ed_crn, ed_spplyAmt, ed_vatAmt, ed_taxinvcDt, img_taxinvcDt, img_crn]);
    $c.gus.cfEnableObjects($p, [ica_taxinvcDt, lc_evidClsCd, lc_deductClsCd, ed_vatDeclarAcctDeptCd, ed_crn, ed_spplyAmt, ed_vatAmt, btn_crn, btn_vatDeclarAcctDeptCd]);
    console.log("  ==--== 부가세대급금 - 활성 ( 세금계산서일자, 증빙종류, 공제종류, 부가세관리부서, 사업자번호, 공급금액, 부가세금액, 사업자번호돋보기,  부가세관리부서돋보기(NEW)) - 계정팝업 callBack");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(0), "taxinvcDt", ica_slipDt.getValue());
  }

  // 	} else {
  // 	    //cfDisableObjects([ed_taxinvcDt,img_taxinvcDt,lc_evidClsCd,lc_deductClsCd, ed_vatDeclarAcctDeptCd,ed_crn, ed_spplyAmt, ed_vatAmt, ed_taxinvcDt, img_taxinvcDt, img_crn]);
  //         // $c.gus.cfDisableObjects([ica_taxinvcDt,lc_evidClsCd,lc_deductClsCd, ed_vatDeclarAcctDeptCd,ed_crn, ed_spplyAmt, ed_vatAmt, btn_crn]);
  //         // console.log("  ==--== 부가세대급금 X - 비활성 ( 세금계산서일자, 증빙종류, 공제종류, 부가세관리부서, 사업자번호, 공급금액, 부가세금액, 사업자번호돋보기) - 계정팝업 callBack");
  //         $c.gus.cfDisableObjects([ica_taxinvcDt,lc_evidClsCd,lc_deductClsCd, ed_vatDeclarAcctDeptCd,ed_crn, ed_spplyAmt, ed_vatAmt, btn_crn]);
  //         console.log("  ==--== 부가세대급금 X - 비활성 ( 세금계산서일자, 증빙종류, 공제종류, 부가세관리부서, 사업자번호, 공급금액, 부가세금액, 사업자번호돋보기) - 계정팝업 callBack");
  // 	}

  // // 계정이 선급비용-일반일 경우 상대계정필드 활성화
  // if ( ds_slipcontents.getCellData(i,"acctCd") == ACConstants.ACCTCD_PREPAY_COST ) {  // 1111110
  //     //cfEnableObjects([ed_opntAcctCd, txt_opntAcctNm, img_opntAcctCd]);
  //     $c.gus.cfEnableObjects([ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
  //     console.log("  ==--== 활성 ( 상대계정 ) ");
  // } else {
  //     ed_opntAcctCd.setValue( "" );
  //     ed_opntAcctNm.setValue( "" );
  //     scwin.ed_opntAcctCd_hidVal ="";
  //     //cfDisableObjects([ed_opntAcctCd, txt_opntAcctNm, img_opntAcctCd]);
  //     $c.gus.cfDisableObjects([ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
  //     console.log("  ==--== 비활성 ( 상대계정 ) ");
  // }

  // 선급비용-일반 계정일때 상대계정필드 활성화
  if (ds_slipcontents.getCellData(row, "acctCd") == "1111110") {
    // 선급비용-일반
    $c.gus.cfEnableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
    console.log("  ==--== 선급비용-일반 - 활성 ( 상대계정 )");
  } else {
    $c.gus.cfDisableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
    console.log("  ==--== 선급비용-일반 아님 - 비활성 ( 상대계정 )");
  }
  console.log("■ ■ === f_changeRow2 END - newRow ( " + row + " )  ========================");
  return true;
};

// @@ ====== 체크 ============================================================================== //

//-------------------------------------------------------------------------
// 체크  @@
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  console.log("=== f_Validation (체크)");

  // 전표분개내역 로드 완료여부 - 완료안되면 실행안됨
  if (scwin.loadCompleted != true) {
    console.log("▶▶ 전표분개내역(ds_slipcontents) 로드 완료되지 않았습니다.");
    return;
  }

  // 부가세계정 0원전표 허용
  // 부가세대급금-일반 && 차변 || 부가세예수금-일반 && 대변
  if (ed_acctCd.getValue() == "1111210" && lc_drcrClsCd.getValue() == "D" || ed_acctCd.getValue() == "2100710" && lc_drcrClsCd.getValue() == "C") {
    let rtn1 = await $c.gus.cfValidate($p, [lc_drcrClsCd // 차대구분
    , lc_crcCd // 통화코드
    , ed_adjustExchRt // 환율
    , ed_mgntNo // 관리번호
    , ica_slipDt // 작성일자
    , ed_slipAcctDeptCd // 발행부서
    , lc_drcrClsCd // 차대구분
    , ed_acctCd // 계정
    , ed_acctDeptCd // 귀속부서
    , ed_mgntClntNo // 거래처번호
    // ,ica_mgntDt          // 관리일자
    // ,ed_mgntTermStDt     // 관리기간_시작
    // ,ed_mgntTermEndDt    // 관리기간_종료
    , ed_mgntEmpNo // 사원번호
    , ed_summary // 적요
    , ed_amtFcrc // 외화금액
    , ica_taxinvcDt // 세금계산서일자
    ]);
    if (!rtn1) return false;
  } else {
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
    , ed_mgntClntNo // 거래처번호
    // ,ica_mgntDt          // 관리일자
    // ,ed_mgntTermStDt     // 관리기간_시작
    // ,ed_mgntTermEndDt    // 관리기간_종료
    , ed_mgntEmpNo // 사원번호
    , ed_summary // 적요
    , ed_amtFcrc // 외화금액
    ]);
    if (!rtn2) return false;
  }

  // 시작일<종료일 체크
  if (!$c.gus.cfIsAfterDate($p, ed_mgntTermStDt.getValue().trim(), ed_mgntTermEndDt.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    //ed_mgntTermStDt.Focus();
    ed_mgntTermStDt.focus();
    return false;
  }

  // 지급처리여부체크
  if (cbx_payProcYn.getValue() == 1) {
    if (ica_reqDt.getValue().trim() != "" && lc_reqPayMthdCd.getValue() == "") {
      await $c.gus.cfAlertMsg($p, "지급일자를 입력하면 지급방법은 필수 항목입니다.");
      //lc_reqPayMthdCd.Focus();
      lc_reqPayMthdCd.focus();
      return false;
    }
    if (lc_reqPayMthdCd.getValue() != scwin.GIRO) {
      if (ica_reqDt.getValue().trim() == "" && lc_reqPayMthdCd.getValue() != "") {
        await $c.gus.cfAlertMsg($p, "지급방법을 입력하면 지급일자는 필수 항목입니다.");
        //ed_reqDt.Focus();
        ica_reqDt.focus();
        // KYU_TEST
        //return false;
      }

      // if(ed_reqDt.text.trim()=="" && ed_taxinvcDt.text.trim()==""){
      if (ica_reqDt.getValue().trim() == "" && ica_taxinvcDt.getValue().trim() == "") {
        await $c.gus.cfAlertMsg($p, "지급일자를 입력하지 않으면 세금계산서 일자는 필수 항목입니다.");
        //ed_taxinvcDt.Focus();
        ica_taxinvcDt.focus();
        return false;
      }
    } else {
      if (ica_paymentPrd.getValue().trim() == "" && lc_reqPayMthdCd.getValue() == scwin.GIRO) {
        await $c.gus.cfAlertMsg($p, "지로 납부기한을 입력해 주십시오.");
        // ed_paymentPrd.Focus();
        ica_paymentPrd.focus();
        return false;
      }
    }
    if (lc_reqPayMthdCd.getValue() == scwin.ELECTRONICDRAFT || lc_reqPayMthdCd.getValue() == scwin.DRAFTCHECK) {
      // let rtn = await $c.gus.cfValidate([ed_draftDdCntCd]);

      // 금액은 0 보다 작으면 안됩니다.
      if (parseInt(ed_draftDdCntCd.getValue()) <= 0) {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_013, "어음일수", "1"));
        ed_draftDdCntCd.focus();
        return false;
      }
    }
  }

  // if(!scwin.f_HiddenCheck(ed_slipAcctDeptCd,"발행부서")) return false;
  // if(!scwin.f_HiddenCheck(ed_acctCd        ,"계정"    )) return false;
  // if(!scwin.f_HiddenCheck(ed_acctDeptCd    ,"귀속부서")) return false;
  // if(!scwin.f_HiddenCheck(ed_mgntClntNo    ,"거래처"  )) return false;
  // if(!scwin.f_HiddenCheck(ed_mgntEmpNo     ,"사원번호")) return false;

  // let rtn1 = await scwin.f_HiddenCheck(ed_slipAcctDeptCd,"발행부서");  if(!rtn1) return false;
  // let rtn2 = await scwin.f_HiddenCheck(ed_acctCd        ,"계정"    );  if(!rtn2) return false;
  // let rtn3 = await scwin.f_HiddenCheck(ed_acctDeptCd    ,"귀속부서");  if(!rtn3) return false;
  // let rtn4 = await scwin.f_HiddenCheck(ed_mgntClntNo    ,"거래처"  );  if(!rtn4) return false;
  // let rtn5 = await scwin.f_HiddenCheck(ed_mgntEmpNo     ,"사원번호");  if(!rtn5) return false;

  return true;
};

//-------------------------------------------------------------------------
// 체크 - 데이타셋 @@
//-------------------------------------------------------------------------
scwin.f_ValidationDs = async function (row) {
  console.log("=== f_ValidationDs (체크)");

  // 전표분개내역 로드 완료여부 - 완료안되면 실행안됨
  if (scwin.loadCompleted != true) {
    console.log("▶▶ 전표분개내역(ds_slipcontents) 로드 완료되지 않았습니다.");
    return;
  }

  // 부가세계정 0원전표 허용
  // 부가세대급금-일반 && 차변 || 부가세예수금-일반 && 대변
  if (ds_slipcontents.getCellData(row, "acctCd") == "1111210" && ds_slipcontents.getCellData(row, "drcrClsCd") == "D" || ds_slipcontents.getCellData(row, "acctCd") == "2100710" && ds_slipcontents.getCellData(row, "drcrClsCd") == "C") {
    let rtn1 = await $c.gus.cfValidate($p, [lc_drcrClsCd // 차대구분
    , lc_crcCd // 통화코드
    , ed_adjustExchRt // 환율
    , ed_mgntNo // 관리번호
    , ica_slipDt // 작성일자
    , ed_slipAcctDeptCd // 발행부서
    , lc_drcrClsCd // 차대구분
    , ed_acctCd // 계정
    , ed_acctDeptCd // 귀속부서
    , ed_mgntClntNo // 거래처번호
    // ,ica_mgntDt          // 관리일자
    // ,ed_mgntTermStDt     // 관리기간_시작
    // ,ed_mgntTermEndDt    // 관리기간_종료
    , ed_mgntEmpNo // 사원번호
    , ed_summary // 적요
    , ed_amtFcrc // 외화금액
    , ica_taxinvcDt // 세금계산서일자
    ]);
    if (!rtn1) return false;
  } else {
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
    , ed_mgntClntNo // 거래처번호
    // ,ica_mgntDt          // 관리일자
    // ,ed_mgntTermStDt     // 관리기간_시작
    // ,ed_mgntTermEndDt    // 관리기간_종료
    , ed_mgntEmpNo // 사원번호
    , ed_summary // 적요
    , ed_amtFcrc // 외화금액
    ]);
    if (!rtn2) return false;
  }

  // 시작일<종료일 체크
  if (!$c.gus.cfIsAfterDate($p, ds_slipcontents.getCellData(row, "mgntTermStDt"), ds_slipcontents.getCellData(row, "mgntTermEndDt"))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    scwin.focusTarget = 1;
    //ed_mgntTermStDt.Focus();
    ed_mgntTermStDt.focus();
    return false;
  }

  // 지급처리여부체크
  if (ds_slipcontents.getCellData(row, "payProcYn") == 1) {
    if (ds_slipcontents.getCellData(row, "reqDt") != "" && ds_slipcontents.getCellData(row, "reqPayMthdCd") == "") {
      await $c.gus.cfAlertMsg($p, "지급일자를 입력하면 지급방법은 필수 항목입니다.");
      scwin.focusTarget = 2;
      //lc_reqPayMthdCd.Focus();
      lc_reqPayMthdCd.focus();
      return false;
    }
    if (ds_slipcontents.getCellData(row, "reqPayMthdCd") != scwin.GIRO) {
      if (ds_slipcontents.getCellData(row, "reqDt") == "" && ds_slipcontents.getCellData(row, "reqPayMthdCd") != "") {
        await $c.gus.cfAlertMsg($p, "지급방법을 입력하면 지급일자는 필수 항목입니다.");
        scwin.focusTarget = 3;
        //ed_reqDt.Focus();
        ica_reqDt.focus();
        // KYU_TEST
        //return false;
      }

      // if(ed_reqDt.text.trim()=="" && ed_taxinvcDt.text.trim()==""){
      if (ds_slipcontents.getCellData(row, "reqDt") == "" && ds_slipcontents.getCellData(row, "taxinvcDt") == "") {
        await $c.gus.cfAlertMsg($p, "지급일자를 입력하지 않으면 세금계산서 일자는 필수 항목입니다.");
        scwin.focusTarget = 4;
        //ed_taxinvcDt.Focus();
        ica_taxinvcDt.focus();
        return false;
      }
    } else {
      if (ds_slipcontents.getCellData(row, "paymentPrd") == "" && ds_slipcontents.getCellData(row, "reqPayMthdCd") == scwin.GIRO) {
        await $c.gus.cfAlertMsg($p, "지로 납부기한을 입력해 주십시오.");
        scwin.focusTarget = 5;
        // ed_paymentPrd.Focus();
        ica_paymentPrd.focus();
        return false;
      }
    }

    // 어음일수코드
    if (ds_slipcontents.getCellData(row, "reqPayMthdCd") == scwin.ELECTRONICDRAFT || ds_slipcontents.getCellData(row, "reqPayMthdCd") == scwin.DRAFTCHECK) {
      // let rtn = await $c.gus.cfValidate([ed_draftDdCntCd]);
      // if ( !rtn ) return false;

      // 금액은 0 보다 작으면 안됩니다.
      if (parseInt(ds_slipcontents.getCellData(row, "draftDdCntCd")) <= 0) {
        await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_013, "어음일수", "1"));
        scwin.focusTarget = 6;
        return false;
      }
    }
  }

  // if(!scwin.f_HiddenCheck(ed_slipAcctDeptCd,"발행부서")) return false;
  // if(!scwin.f_HiddenCheck(ed_acctCd        ,"계정"    )) return false;
  // if(!scwin.f_HiddenCheck(ed_acctDeptCd    ,"귀속부서")) return false;
  // if(!scwin.f_HiddenCheck(ed_mgntClntNo    ,"거래처"  )) return false;
  // if(!scwin.f_HiddenCheck(ed_mgntEmpNo     ,"사원번호")) return false;

  // let rtn1 = await scwin.f_HiddenCheck(ed_slipAcctDeptCd,"발행부서");  if(!rtn1) return false;
  // let rtn2 = await scwin.f_HiddenCheck(ed_acctCd        ,"계정"    );  if(!rtn2) return false;
  // let rtn3 = await scwin.f_HiddenCheck(ed_acctDeptCd    ,"귀속부서");  if(!rtn3) return false;
  // let rtn4 = await scwin.f_HiddenCheck(ed_mgntClntNo    ,"거래처"  );  if(!rtn4) return false;
  // let rtn5 = await scwin.f_HiddenCheck(ed_mgntEmpNo     ,"사원번호");  if(!rtn5) return false;

  console.log("===== f_ValidationDs    END ===== ▶▶▶▶   row [" + row + "]");
  return true;
};

//-------------------------------------------------------------------------
// 히든값체크
//-------------------------------------------------------------------------
scwin.f_HiddenCheck = async function (str, msg) {
  console.log("=== f_HiddenCheck (" + msg + ")");

  // f_Validation 에서 사용하며 다 풀어써야 함.

  if (str.getValue().trim() == "") return true;

  //if (str.text.trim() != str.hidVal){
  if (msg == "발행부서" && str.getValue().trim() != scwin.ed_slipAcctDeptCd_hidVal || msg == "계정" && str.getValue().trim() != scwin.ed_acctCd_hidVal || msg == "귀속부서" && str.getValue().trim() != scwin.ed_acctDeptCd_hidVal || msg == "거래처" && str.getValue().trim() != scwin.ed_mgntClntNo_hidVal || msg == "사원번호" && str.getValue().trim() != scwin.ed_mgntEmpNo_hidVal) {
    //cfAlertMsg(MSG_CM_ERR_038,[msg]);
    // %1은(는) 필수 입력 항목입니다.
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, [msg]));
    // str.SelectAll = "true";
    // str.Focus();
    str.focus();
    return false;
  } else {
    return true;
  }
};

// @@ ====== 팝업 - 기타 ======================================================================= //

//-------------------------------------------------------------------------
// 정산방법 돋보기 클릭 - 가지급금입금 팝업
// 가지급금,선급금 정리화면_팝업 이미지 클릭함수 
//-------------------------------------------------------------------------
scwin.f_Prepay = async function (e) {
  console.log("----- f_Prepay (가지급금,선급금 정리화면_팝업 이미지 클릭함수)");
  if (lc_crcCd.getValue() == "KRW") {
    // 통화코드가 KRW면
    let rtn1 = !$c.gus.cfValidate($p, [ica_slipDt, ed_acctDeptCd, ed_amt]); // 작성일자와, 귀속부서, 금액 값유무 확인
    if (!rtn1) return false;
  } else {
    // 그외통화코드는
    let rtn2 = !$c.gus.cfValidate($p, [ica_slipDt, ed_acctDeptCd, ed_amtFcrc]); // 작성일자와, 귀속부서, 외화금액 값 유무 확인
    if (!rtn2) return false;
  }
  var sum = 0; // 금액(한화/외화)

  if (lc_crcCd.getValue() == ACConstants.KOREA_WON) {
    // 통화코드가 한화면
    sum = Number(ed_amt.getValue().trim()); // 금액입력
  } else {
    // 그외면
    sum = Number(ed_amtFcrc.getValue().trim()); // 외화입력
  }

  // 가지급금선급금입금 정리 팝업용 파라미터객체 생성
  var temp_acctDeptCd;
  var temp_acctDeptNm;

  // var valueObject = new Object();
  // valueObject.prov       = ds_prov;                          //
  // valueObject.provHeader = ds_provHeader;                    //
  // valueObject.txtrltSeq  = ds_slipcontents.NameValue(ds_slipcontents.RowPosition,"rltSeq"); // 정산순번
  // valueObject.adjmClsCd  = lc_adjmClsCd.BindColVal.trim();   // 정산방법
  // valueObject.sum        = sum;                              // 정산대상금액
  // valueObject.crcCd      = lc_crcCd.BindColVal;              // 통화코드

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
  if (typeof temp_acctDeptCd == "undefined" || temp_acctDeptCd == "" || $c.gus.cfIsNull($p, temp_acctDeptCd)) {
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
  console.log("  before 201_02_02b (가지급금입금) data [" + JSON.stringify(data) + "]");
  let win_url = "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_02_02b.xml";
  let opts = {
    id: "smpPop",
    popupName: "susPayAmtPop",
    modal: true,
    type: "browserPopup",
    width: 1400,
    height: 760,
    title: "가지급금입금"
  };

  // var returnValue = window.showModalDialog(strPath, valueObject ,style ) ;
  var returnValue = await $c.win.openPopup($p, win_url, opts, data);

  //결좌데이터 정리
  if (returnValue != null) {
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

    // for(i=1; i<=ds_provHeader.CountRow-1; i++){
    // 	for(j=i+1;j<=ds_provHeader.CountRow; j++) {
    // 		if(ds_provHeader.NameString(i,"rltSeq")==ds_provHeader.NameString(j,"rltSeq")){
    // 			ds_provHeader.DeleteRow(i);
    // 			break;
    // 		}
    // 	}
    // } // for end

    for (i = 0; i < ds_provHeader.getTotalRow() - 1; i++) {
      for (j = i + 1; j < ds_provHeader.getTotalRow(); j++) {
        if (ds_provHeader.getCellData(i, "rltSeq") == ds_provHeader.getCellData(j, "rltSeq")) {
          ds_provHeader.deleteRow(i);
          break;
        }
      }
    } // for end
  }
};

//-------------------------------------------------------------------------
// 부가세귀속부서 조회 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_vatDeclarAcctDeptCd_onclickEvent = function (e) {
  scwin.f_VatDeclarAcctDeptCd('1');
};

//-------------------------------------------------------------------------
// 부가세귀속부서 조회 팝업
//-------------------------------------------------------------------------
scwin.f_VatDeclarAcctDeptCd = async function (str) {
  console.log("=== f_VatDeclarAcctDeptCd (부가세귀속부서조회 팝업)  str [" + str + "]  1: 돋보기 클릭  2: 부서  3: 부가세관리부서로 부서명");
  if (ed_acctDeptCd.getValue() == "") {
    console.log("  --- 부가세귀속부서 조회 팝업 *********************************");
    // cfAlertMsg(MSG_CM_ERR_002,Array("귀속부서"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "귀속부서"));
    ed_vatDeclarAcctDeptCd.setValue("");
    // ed_acctDeptCd.focus();
    udc_acctDeptCd.focus;
    return;
  }
  var param = "," + ed_acctDeptCd.getValue() + ",1";
  var sqlID = "";
  var check = "";
  var popTemp = "";

  // popup 버튼 눌렀을경우
  if (str == "1") {
    // param = ",,1,"+ scwin.txtCoCd+","+ scwin.txtCoClsCd+","+ica_slipDt.getValue().substring(0,4);
    // 2026-01-16 : 파라미터 변경 : 귀속부서코드 추가
    // dept 1 coCd coClsCd slipDt
    param = "," + ed_acctDeptCd.getValue() + ",1," + scwin.txtCoCd + "," + scwin.txtCoClsCd + "," + ica_slipDt.getValue().substring(0, 4);
    console.log("  1 버튼 누름 - param [" + param + "]");
    check = "F";
    popTemp = "";
    udc_vatDeclarAcctDeptCd.setSelectId("retrieveVatDeclarAcctDeptCd");
    if (!scwin.popupAsyncFlag) {
      console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");

      // rtnList = cfCommonPopUp(sqlID,ed_vatDeclarAcctDeptCd.text.trim(),popTemp,check,null,null,null,null,param,null,null,null,null);
      await udc_vatDeclarAcctDeptCd.cfCommonPopUp(scwin.udc_vatDeclarAcctDeptCd_callBackFunc1, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check, null, null, null, null, param, 1000, 520, null, null);
    } else {
      // KYU_ISSUE : await 호출시 오류
      await udc_vatDeclarAcctDeptCd.cfCommonPopUpAsync(scwin.udc_vatDeclarAcctDeptCd_callBackFunc1, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check, null, null, null, null, param, 1000, 520, null, null);
    }

    // 부서에서 넘어왔을 경우
  } else if (str == "2") {
    // param = ","+ed_acctDeptCd.getValue()/* 4 */+",,"+ scwin.txtCoCd+","+ scwin.txtCoClsCd+","+ica_slipDt.getValue().substring(0,4) /* 7 */; 
    // 2026-03-10:  파라미터 변경
    param = "," + ed_acctDeptCd.getValue() /*4*/ + "," + scwin.txtCoCd + "," + scwin.txtCoClsCd + "," + ica_slipDt.getValue().substring(0, 4) /*7*/;
    console.log("  2 부서 넘어옴 - param [" + param + "]");
    // debugger;
    check = "T";
    ed_vatDeclarAcctDeptCd.setValue("");
    popTemp = "ZZ";
    udc_vatDeclarAcctDeptCd.setSelectId("retrieveVatDeclarAcctDeptCdAcctDeptCd");
    if (!scwin.popupAsyncFlag) {
      console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");

      // rtnList = cfCommonPopUp(sqlID,ed_vatDeclarAcctDeptCd.text.trim(),popTemp,check,null,null,null,null,param,null,null,null,null);
      await udc_vatDeclarAcctDeptCd.cfCommonPopUp(scwin.udc_vatDeclarAcctDeptCd_callBackFunc2, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check, null, null, null, null, param, 1000, 520, null, null);
    } else {
      // KYU_ISSUE : await 호출시 오류
      await udc_vatDeclarAcctDeptCd.cfCommonPopUpAsync(scwin.udc_vatDeclarAcctDeptCd_callBackFunc2, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check, null, null, null, null, param, 1000, 520, null, null);
      // debugger;
    }

    // 부가세관리부서에 값을넣고 명을 찾을 경우
  } else if (str == "3") {
    // param = ",,1,"+ scwin.txtCoCd+","+scwin.txtCoClsCd+","+ica_slipDt.getValue().substring(0,4);
    // 2026-01-16 : 파라미터 변경 : 귀속부서코드 추가
    // dept 1 coCd coClsCd slipDt
    param = "," + ed_acctDeptCd.getValue() + ",1," + scwin.txtCoCd + "," + scwin.txtCoClsCd + "," + ica_slipDt.getValue().substring(0, 4);
    console.log("  3 부가세관리부서 명 찾음 - param [" + param + "]");
    check = "T";
    popTemp = "";
    udc_vatDeclarAcctDeptCd.setSelectId("retrieveVatDeclarAcctDeptCd");
    if (!scwin.popupAsyncFlag) {
      console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");
      // rtnList = cfCommonPopUp(sqlID,ed_vatDeclarAcctDeptCd.text.trim(),popTemp,check,null,null,null,null,param,null,null,null,null);
      await udc_vatDeclarAcctDeptCd.cfCommonPopUp(scwin.udc_vatDeclarAcctDeptCd_callBackFunc3, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check, null, null, null, null, param, 1000, 520, null, null);
    } else {
      // KYU_ISSUE : await 호출시 오류
      await udc_vatDeclarAcctDeptCd.cfCommonPopUpAsync(scwin.udc_vatDeclarAcctDeptCd_callBackFunc3, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check, null, null, null, null, param, 1000, 520, null, null);
    }
  }

  //rtnList = cfCommonPopUp(sqlID,ed_vatDeclarAcctDeptCd.text.trim(),popTemp,check,null,null,null,null,param,null,null,null,null);    
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
  console.log("▷ afterVatDeclarAcctDeptCdPopup (부가세귀속부서조회 통합처리)");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      ed_vatDeclarAcctDeptCd.setValue("");
      ed_vatDeclarAcctDeptNm.setValue("");
      scwin.ed_vatDeclarAcctDeptCd_hidVal = "";

      // KYU_NEW : 추가 바인딩
      var row = ds_slipcontents.getRowPosition();
      ds_slipcontents.setCellData(row, "vatDeclarAcctDeptCd", ""); // 부가세귀속부서
      ds_slipcontents.setCellData(row, "vatDeclarAcctDeptNm", ""); // 부가세귀속부서명

      return;
    }
    // ed_vatDeclarAcctDeptCd.text  = rtnList[2];		//부가세부서코드
    // txt_vatDeclarAcctDeptNm.value = rtnList[3];		//부가세부서명
    // ed_vatDeclarAcctDeptCd.hidVal = rtnList[2];  	//히든값
    ed_vatDeclarAcctDeptCd.setValue(rtnList[2]); //부가세부서코드
    ed_vatDeclarAcctDeptNm.setValue(rtnList[3]); //부가세부서명
    scwin.ed_vatDeclarAcctDeptCd_hidVal = rtnList[2]; //히든값

    // KYU_NEW : 추가 바인딩
    var row = ds_slipcontents.getRowPosition();
    ds_slipcontents.setCellData(row, "vatDeclarAcctDeptCd", ed_vatDeclarAcctDeptCd.getValue()); // 부가세귀속부서
    ds_slipcontents.setCellData(row, "vatDeclarAcctDeptNm", ed_vatDeclarAcctDeptNm.getValue()); // 부가세귀속부서명
  } else {
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    scwin.ed_vatDeclarAcctDeptCd_hidVal = "";

    // KYU_NEW : 추가 바인딩
    var row = ds_slipcontents.getRowPosition();
    ds_slipcontents.setCellData(row, "vatDeclarAcctDeptCd", ""); // 부가세귀속부서
    ds_slipcontents.setCellData(row, "vatDeclarAcctDeptNm", ""); // 부가세귀속부서명
  }
};

// @@ ====== 이벤트 - 팝업 ===================================================================== //

//-------------------------------------------------------------------------
// 발행부서 focus out
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCd_onblurCodeEvent = async function (e) {
  // if ( scwin.loadCompleted != true ) return;
  // if ( scwin.dsCodeNameSet != true ) return;

  //  language=JavaScript for=ed_slipAcctDeptCd event=OnKillFocus()>
  // // 발행부서 값 변경시 팝업에서 자동검색하게 처리     
  // f_checkPopEd(ed_slipAcctDeptCd,txt_slipAcctDeptNm,'1');

  // 발행부서 값 변경시 팝업에서 자동검색하게 처리     
  await scwin.f_checkPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, '1');

  // KYU_DEL : 로직 삭제
  // 발행부서 값이 변경되면, 하단 그리드 값들을 전부 삭제하고, 행추가를 새로한다.  -- 2012-10-08 김석
  // 이유 하단 입력값들의 활성화 비활성화여부가, 발행부서의 값에 따라 틀리기 때문, 

  // 2개이상 전표입력이력이 있다면, 경고메세지 출력
  if (ds_slipcontents.getTotalRow() >= 2) {
    await $c.win.alert($p, "차세대 매입전표 입력 중 발행부서를 변경하였으므로, 전표분개내역을 삭제합니다.");
  }

  // 기준상태값 변경
  scwin.state = "Y";
  scwin.delflag = "Y";

  // 데이터삭제
  ds_slipcontents.setJSON([]);

  //  KYU_ISSUE : f_AddRow 없슴
  // 신규행 입력 
  // scwin.f_AddRow();
};

//-------------------------------------------------------------------------
// 발행부서명 focus out
//-------------------------------------------------------------------------
// scwin.udc_slipAcctDeptCd_onblurNameEvent = function (e) {
//     // 해당 화면 이벤트 불필요
//     if ( ed_slipAcctDeptNm.getValue().trim() != null ) scwin.f_openPopUp('1',ed_slipAcctDeptCd.getValue(),'T');
// };

//-------------------------------------------------------------------------
// 계정 focus out
//-------------------------------------------------------------------------
scwin.udc_acctCd_onblurCodeEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  // if ( scwin.dsCodeNameSet != true ) return;

  console.log("----- udc_acctCd_onblurCodeEvent");
  //    if ( ed_acctCd.getValue().trim() != null ) scwin.f_openPopUp('2',ed_acctCd.getValue(),'T')
  /*
   language=JavaScript for=ed_acctCd event=OnKillFocus()>  */

  if (ACConstants.CO_CD_DONGBU == scwin.vCoCd) {
    // 결과값 가지고 왔을때 원)세금과공과-과징금(4203417), 판)세금과공과-과징금(5001917) 계정일 경우
    // 잡손실(6120220)계정으로 작성해 주시기 바랍니다. 라는 메시지 출력해 준다.
    // 본사만
    if (ACConstants.CO_CD_DONGBU == scwin.vCoCd) {
      // 결과값 가지고 왔을때 원)세금과공과-과징금(4203417), 판)세금과공과-과징금(5001917) 계정일 경우
      // 잡손실(6120220)계정으로 작성해 주시기 바랍니다. 라는 메시지 출력해 준다.
      // 본사만
      if (ed_acctCd.getValue() == "4203417") {
        await $c.win.alert($p, "원)세금과공과-과징금(4203417) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        return;
      } else if (ed_acctCd.getValue() == "5001917") {
        await $c.win.alert($p, "판)세금과공과-과징금(5001917) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        return;
      }
    }
  }
  await scwin.f_resetSettleNo();
  if (ed_acctCd.getValue().trim() == "") ed_mgntNm.setValue(""); // 관리번호명 초기화

  await scwin.f_checkPopEd(ed_acctCd, ed_acctNm, '2');
  let rtna = await scwin.f_AcctCdCheck();
  if (lc_drcrClsCd.getValue() == "C" && ed_acctCd.getValue() == "1110530") {
    // 단기대여금-업무가지급금(일반)
    if (scwin.isSubCompany == true) {
      lc_adjmClsCd.setValue(-1); //정산방법
      $c.gus.cfDisableObjects($p, [btn_adjmClsCd]);
      console.log("  ==--== 비활성 ( 정산방법돋보기 ) ");
    } else {
      lc_adjmClsCd.setValue(ACConstants.ADJM_MTHDCD_SUSPAY);
      $c.gus.cfEnableObjects($p, [btn_adjmClsCd]);
      console.log("  ==--== 활성 ( 정산방법돋보기 ) ");
    }
  } else {
    $c.gus.cfDisableObjects($p, [btn_adjmClsCd]);
    console.log("  ==--== 비활성 ( 정산방법돋보기 ) ");
  }

  //--------------------------------------------------------------
  //채권채무정리를 위한 추가 2013.10.24
  //--------------------------------------------------------------

  console.log("  ▣ ▣  udc_acctCd_onblurCode - f_checkSettle  호출");
  let rtn1 = await scwin.f_checkSettle(ed_acctCd.getValue(), lc_drcrClsCd.getValue());
  console.log("  ▣ ▣  udc_acctCd_onblurCode - f_checkSettle [" + rtn1 + "]");
  if (rtn1 && ed_acctCd.getValue().trim() != "") {
    //정리대상인경우
    //cfEnableObj(txt_mgntNo, true);
    $c.gus.cfEnableObj($p, ed_mgntNo, true);
    console.log("  ==--== 활성 ( 관리번호명 )");
    //cfDisableObjects([txt_mgntNm,txt_refNo,txt_method,img_setlMthd,txt_settleClsCd]);
    $c.gus.cfDisableObjects($p, [ed_mgntNm, ed_refNo, btn_resetSettleNo, btn_setlMthd]); // txt_settleClsCd 제외
    console.log("  ==--== 비활성 ( 관리번호명(앞),참고번호(지급/채권번호), 방법(지급/채권번호), 지급/채권번호돋보기 )");
  } else {
    //alert("정리대상아님!!!");
    //정리대상이 아닌경우 popup에서 내려받은값 초기화
    if (scwin.txt_settleClsCd != "0" || scwin.txt_settleClsCd != "") {
      //alert("ed_acctCd_OnKillFocus()_초기화 진행!!!");
      scwin.f_initSettle(ds_slipcontents.getRowPosition(), '2');
    }
    $c.gus.cfEnableObj($p, ed_mgntNo, true);
    console.log("  ==--== 활성 ( 관리번호명 )");
    //cfDisableObjects([txt_mgntNm,txt_refNo,txt_method,img_setlMthd,txt_settleClsCd]);
    $c.gus.cfDisableObjects($p, [ed_mgntNm, ed_refNo, btn_resetSettleNo, btn_setlMthd]); // scwin.txt_settleClsCd 제외
    console.log("  ==--== 비활성 ( 관리번호명(앞),참고번호(지급/채권번호), 방법(지급/채권번호), 지급/채권번호돋보기 )");
  }
  ica_taxinvcDt.setValue("");
  console.log("----------------------- 세금계산서일자 clear ---------------------");
};

//-------------------------------------------------------------------------
// 계정명 focus out
//-------------------------------------------------------------------------
// scwin.udc_acctCd_onblurNameEvent = function (e) {
//     // if ( ed_acctNm.getValue().trim() != null ) scwin.f_openPopUp('2',ed_acctCd.getValue(),'T');
//     scwin.f_checkPopEd(ed_acctCd,ed_acctNm,'2');
// };

//-------------------------------------------------------------------------
// 귀속부서 focus out
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onblurCodeEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  // if ( scwin.dsCodeNameSet != true ) return;

  // KYU_TEST : 이벤트 없으나 추가
  if (ed_acctDeptCd.getValue().trim() != null) scwin.f_openPopUp('3', ed_acctDeptCd.getValue(), 'T');
};

//-------------------------------------------------------------------------
// 사업자번호 focus out
//-------------------------------------------------------------------------
scwin.udc_crn_onblurCodeEvent = function (e) {
  // if ( ed_crn.getValue().trim() != null ) scwin.f_openPopUp('8', ed_crn.getValue(), ed_crn.getValue(),'T','T');
  // scwin.f_checkPopEd(ed_crn,ed_crnNm,'8');
};

//-------------------------------------------------------------------------
// 사업자명 focus out
//-------------------------------------------------------------------------
// scwin.udc_crn_onblurNameEvent = function (e) {
//     if ( ed_crnNm.getValue().trim() != null ) scwin.f_openPopUp('8', ed_crn.getValue(), ed_crnNm.getValue(),'T','T');
// };

//-------------------------------------------------------------------------
// 사원번호 focus out  미사용
//-------------------------------------------------------------------------
scwin.udc_mgntEmpNo_onblurCodeEvent = function (e) {
  // if ( ed_mgntEmpNo.getValue().trim() != null ) scwin.f_openPopUp('5',ed_mgntEmpNo.getValue(),'T');
};

//-------------------------------------------------------------------------
// 거래처 focus out
//-------------------------------------------------------------------------
scwin.udc_mgntClntNo_onblurCodeEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  // if ( scwin.dsCodeNameSet != true ) return;

  if (ed_mgntClntNo.getValue().trim() != null) await scwin.f_openPopUp('4', ed_mgntClntNo.getValue(), 'T');
};

//-------------------------------------------------------------------------
// 상대계정 focus out
//-------------------------------------------------------------------------
scwin.udc_opntAcctCd_onblurCodeEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  // if ( scwin.dsCodeNameSet != true ) return;

  if (ed_opntAcctCd.getValue().trim() != null) await scwin.f_openPopUp('9', '', 'F'); // 가운데 pCode 추가
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 발행부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCd_onclickEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  // if ( scwin.dsCodeNameSet != true ) return;

  await scwin.f_openPopUp('1', ed_slipAcctDeptCd.getValue(), 'T');
};

//-------------------------------------------------------------------------
// 귀속부서 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_onclickEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  // if ( scwin.dsCodeNameSet != true ) return;

  await scwin.f_openPopUp('3', ed_acctDeptCd.getValue(), 'T');
};

//-------------------------------------------------------------------------
// 계정 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_acctCd_onclickEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  await scwin.f_openPopUp('2', ed_acctCd.getValue(), 'T');
};

//-------------------------------------------------------------------------
// 사업자번호 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_crn_onclickEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  await scwin.f_openPopUp('8', ed_crn.getValue(), ed_crnNm.getValue(), 'T', 'T');
};

//-------------------------------------------------------------------------
// 지점 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_branchCd_onclickEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  await scwin.f_openPopUp('6', ed_branchCd.getValue(), 'T', 'IMG');
};

//-------------------------------------------------------------------------
// 매입항목 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_pchsItemCd_onclickEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  await scwin.f_openPopUp('7', ed_pchsItemCd.getValue(), 'T');
};

//-------------------------------------------------------------------------
// 사원번호 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_mgntEmpNo_onclickEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  await scwin.f_openPopUp('5', ed_mgntEmpNo.getValue(), 'T');
};

//-------------------------------------------------------------------------
// 거래처 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_mgntClntNo_onclickEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  await scwin.f_openPopUp('4', ed_mgntClntNo.getValue(), 'T');
};

//-------------------------------------------------------------------------
// 지급/채권번호 돋보기 클릭
//   - 채권,채무,선수금 정리를 위한 팝업화면
//-------------------------------------------------------------------------
scwin.f_setlMthd = async function (e) {
  if (scwin.loadCompleted != true) return;
  console.log("=== f_setlMthd (지급/채권번호 돋보기 클릭 - 채권,채무,선수금 정리를 위한 팝업화면)");

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

  if (!$c.gus.cfValidate($p, [ed_acctDeptCd, ed_acctCd, ed_mgntClntNo])) {
    return false;
  }

  // var style       = "center:yes; dialogwidth:1000px; dialogheight:520px; scroll:no; resizable:no; status:yes;";
  // var strPath     = "fi_201_03_04p.jsp?settleclscd="+txt_settleClsCd.value+"&flag=Y";

  var temp_crdCd = lc_crcCd.getValue();
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
    popupName: "acctRecvSetlContPop" // 무의미. 오픈시 다시 바꿈
    ,
    modal: true,
    type: "browserPopup",
    width: 1180,
    height: 750,
    title: "채권정리내역"
  };

  // var returnValue = window.showModalDialog(strPath, valueObject ,style ) ;
  let returnValue = await $c.win.openPopup($p, win_url, opts, data);

  // KYU_TEST (row insert 후에 값 지정)
  //    ds_slipcontents.insertRow();
  //    ds_slipcontents.setRowPosition(0);
  //    ds_slipcontents.setCellData(0, "slipNo", "TEST");

  console.log("  *** ds_slipcontents [" + ds_slipcontents.getRowPosition() + "][" + JSON.stringify(ds_slipcontents.getRowJSON(ds_slipcontents.getRowPosition())) + "]");
  if (returnValue != null) {
    console.log(" returnValue [" + JSON.stringify(returnValue[0]) + "]");
  }

  //alert(returnValue.stlSlipNo);  
  if (returnValue != null && returnValue != "N/A" && returnValue.stlOutbrNo != "N/A") {
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
    console.log("  temp [" + temp + "]");
    console.log("  jarray [" + jarray + "]");

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

    //if(typeof(returnValue.stlOutbrNo) == "undefined"){
    if (typeof JSON.stringify(jarray.stlOutbrNo) == "undefined" || $c.gus.cfIsNull($p, SON.stringify(jarray.stlOutbrNo))) {
      ed_refNo.setValue("");
    } else {
      //txt_refNo.setValue (returnValue.stlOutbrNo);
      ed_refNo.setValue(JSON.parse(JSON.stringify(jarray.stlOutbrNo)));
    }
    //alert(ds_slipcontents.NameValue(ds_slipcontents.RowPosition, "stlSlipNo" ));
  }
};

//-------------------------------------------------------------------------
// 상대계정 돋보기 클릭
//-------------------------------------------------------------------------
scwin.udc_opntAcctCd_onclickEvent = async function (e) {
  if (scwin.loadCompleted != true) return;
  await scwin.f_openPopUp('9', 'F');
};

//-------------------------------------------------------------------------
// f_openPopUp 팝업  @@
//    1:발행부서,2:계정,3:귀속부서,4:거래처,5:사번,6:지점,7:매출입,8:사업자,9:상대계정
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (flag, pCode, check) {
  console.log("=== f_openPopUp ( flag[ " + flag + " ]  pCode[ " + pCode + " ]  check[ " + check + " ]  1:발행부서,2:계정,3:귀속부서,4:거래처,5:사번,6:지점,7:매출입,8:사업자,9:상대계정)");
  switch (flag) {
    case '1':
      // 발행부서(조회)
      //param = ed_slipDt.text.trim()+",,"+vCoCd+","+ vCoClsCd;
      param = ica_slipDt.getValue().trim() + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;
      //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo3',pCode,'',check,null,null,null,null,param,null,null,null,null);
      //f_resultPopEd(ed_slipAcctDeptCd,txt_slipAcctDeptNm,rtnList);

      console.log("  발행부서pop  param [" + param + "]");
      if (!scwin.popupAsyncFlag) {
        console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님) - 발행부서");

        // await udc_slipAcctDeptCd.cfCommonPopUp(scwin.udc_slipAcctDeptCd_callBackFunc, pCode,'',check,null,null,null,null,param,null,null,null,null);
        await udc_slipAcctDeptCd.cfCommonPopUp(scwin.udc_slipAcctDeptCd_callBackFunc, ed_slipAcctDeptCd.getValue(), ed_slipAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      } else {
        // await udc_slipAcctDeptCd.cfCommonPopUpAsync(scwin.udc_slipAcctDeptCd_callBackFunc, pCode,'',check,null,null,null,null,param,null,null,null,null);
        await udc_slipAcctDeptCd.cfCommonPopUpAsync(scwin.udc_slipAcctDeptCd_callBackFunc, ed_slipAcctDeptCd.getValue(), ed_slipAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '2':
      // 계정

      console.log(" ed_acctDeptCd [" + ed_acctDeptCd.getValue() + "] txt_tempCostClsCd [" + scwin.txt_tempCostClsCd + "]  txt_costClsCd [" + scwin.txt_costClsCd + "]");

      // KYU_TEST 로드 이전이면 데이타 셋에서 가져다 넣는다.
      if (scwin.loadCompleted == false) {
        ed_acctDeptCd.setValue(ds_slipcontents.getCellData(ds_slipcontents.getRowPosition, "acctDeptCd"));
        console.log("  복사후 ed_acctDeptCd [" + ed_acctDeptCd.getValue() + "]");
      }
      if (ed_acctDeptCd.getValue() == "") {
        console.log("  --- 222 [어떤넘]  *********************************");

        //cfAlertMsg(MSG_CM_ERR_002,Array("귀속부서"));
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "귀속부서"));
        //ed_acctDeptCd.focus();
        udc_acctDeptCd.focus;
        return;
      }

      // 비용구분 : 01^원가,02^판관비,03^원가+판관비,04^판관비제외,05^원가제외
      if (scwin.txt_tempCostClsCd == "03") {
        scwin.txt_costClsCd = "04"; // 전체조회
      } else if (scwin.txt_tempCostClsCd == "01") {
        scwin.txt_costClsCd = "05"; // 원가
      } else if (scwin.txt_tempCostClsCd == "02") {
        scwin.txt_costClsCd = "06"; // 판관비
      } else {
        scwin.txt_costClsCd = "";
      }
      console.log("  계정pop  txt_tempCostClsCd : " + scwin.txt_tempCostClsCd + "  txt_costClsCd (비용구분) : " + scwin.txt_costClsCd);

      // KYU_NEW : 추가 바인딩
      var row = ds_slipcontents.getRowPosition();
      ds_slipcontents.setCellData(row, "costClsCd", scwin.txt_costClsCd); // 지급계정

      // 계정코드가
      var where = "";
      var temp = "T,,";

      //동부익스프레스, 자회사 구분으로 계정 팝업창 틀림
      if (scwin.isSubCompany == false) {
        // where = ed_slipDt.text.trim() +","+ txt_costClsCd.value+",Y";
        // rtnList = cfCommonPopUp('retrieveTransferAcctCdInfo',pCode,'',check,null,null,null,null,where,null,null,null,null);
        where = ica_slipDt.getValue().trim() + "," + scwin.txt_costClsCd + ",Y";
        console.log("  -- 자회사 아님 where[" + where + "]");

        // rtnList = cfCommonPopUp('retrieveTransferAcctCdInfo',pCode,'',check,null,null,null,null,where,null,null,null,null);

        udc_acctCd.setSelectId("retrieveTransferAcctCdInfo");
        if (!scwin.popupAsyncFlag) {
          console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");
          // udc_acctCd.cfCommonPopUp(scwin.udc_acctCd_callBackFunc1,pCode,'',check,null,null,null,null,where,null,null,null,null);
          // await udc_acctCd.cfCommonPopUp(scwin.udc_acctCd_callBackFunc,pCode,'',check,null,null,null,null,where,null,null,null,null);
          await udc_acctCd.cfCommonPopUp(scwin.udc_acctCd_callBackFunc, pCode, '', check, null, null, null, null, where, null, null, null, null);
        } else {
          console.log("  ▶ ▶ ▶ ▶ cfCommonPopUpAsync (실시간)");
          await udc_acctCd.cfCommonPopUpAsync(scwin.udc_acctCd_callBackFunc, pCode, '', check, null, null, null, null, where, null, null, null, null);
        }
      } else {
        // where = ed_slipDt.text.trim() +","+ txt_costClsCd.value;
        // where = "," +","+ txt_costClsCd.value;
        // rtnList = cfCommonPopUp('retrieveTransferAcctCdInfo2',pCode,'',check,null,null,null,null,where,null,null,null,null);
        // rtnList = cfCommonPopUp('retrieveAcctCdInfo',pCode,'',check,null,null,null,null,temp,null,null,null,null);

        where = ica_slipDt.getValue().trim() + "," + scwin.txt_costClsCd; // 누적방식인지 확인
        where = "," + "," + scwin.txt_costClsCd;
        console.log("  -- 자회사 where[" + where + "]");
        //rtnList = cfCommonPopUp('retrieveTransferAcctCdInfo2',pCode,'',check,null,null,null,null,where,null,null,null,null);
        udc_acctCd.setSelectId("retrieveTransferAcctCdInfo2");
        if (!scwin.popupAsyncFlag) {
          console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님) - retrieveTransferAcctCdInfo2");
          await udc_acctCd.cfCommonPopUp(scwin.udc_acctCd_callBackFunc, pCode, '', check, null, null, null, null, where, null, null, null, null);
        } else {
          await udc_acctCd.cfCommonPopUpAsync(scwin.udc_acctCd_callBackFunc, pCode, '', check, null, null, null, null, where, null, null, null, null);
        }

        //rtnList = cfCommonPopUp('retrieveAcctCdInfo',pCode,'',check,null,null,null,null,temp,null,null,null,null);
        udc_acctCd.setSelectId("retrieveAcctCdInfo");
        if (!scwin.popupAsyncFlag) {
          console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님) - retrieveAcctCdInfo");
          // rtnList = cfCommonPopUp('retrieveAcctCdInfo',pCode,'',check,null,null,null,null,temp,null,null,null,null);
          await udc_acctCd.cfCommonPopUp(scwin.udc_acctCd_callBackFunc, pCode, '', check, null, null, null, null, temp, null, null, null, null);
        } else {
          await udc_acctCd.cfCommonPopUpAsync(scwin.udc_acctCd_callBackFunc, pCode, '', check, null, null, null, null, temp, null, null, null, null);
        }
      }
      break;
    case '3':
      // 부서 (귀속부서)
      param = ica_slipDt.getValue().trim() + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;
      console.log("  귀속부서pop  param [" + param + "]");
      //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo3',pCode,'',check,null,null,null,null,param,null,null,null,null);

      if (!scwin.popupAsyncFlag) {
        console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님) - retrieveAcctCdInfo");
        udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, pCode, '', check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_acctDeptCd.cfCommonPopUpAsync(scwin.udc_acctDeptCd_callBackFunc, pCode, '', check, null, null, null, null, param, null, null, null, null);
      }
      break;

    // 거래처
    case '4':
      var param = '';
      param = scwin.txtCoCd;
      console.log("  ▶▶ 거래처pop  param [" + param + "]  txtCoCd (부서조회에서 나옴) [" + scwin.txtCoCd + "]");

      // 20110704 거래처여부 예외처리
      // 예외적 상황으로, 계정이 가지급 에 해당하는 경우는 일반의 경우와 팝업을 분리한다.
      // 가지급 경우( 계정번호:명칭 1110530:단기대여금-업무가지급금(일반),1110531:단기대여금-업무가지급금(급여), 1110540:단기대여금-매표가지급금 )
      // 입력한 사원번호를 기준으로 거래처를 검색한다.

      if (ed_acctCd.getValue() == "1110530" || ed_acctCd.getValue() == "1110531") {
        if (ed_mgntEmpNo.getValue() == "" || ed_mgntEmpNo.getValue() == null) {
          await $c.win.alert($p, "계정이 가지급인 경우, 사원번호는 필수 항목입니다. ");
          return;
        } else {
          udc_mgntClntNo.setSelectId("retrieveMgntEmpNoList");

          // rtnList = cfCommonPopUp('retrieveMgntEmpNoList'

          if (!scwin.popupAsyncFlag) {
            console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님) - retrieveMgntEmpNoList");
            udc_mgntClntNo.cfCommonPopUp(scwin.udc_mgntClntNo_callBackFunc, pCode, '', check, null, null, null, null, null, null, null, null, null);
          } else {
            console.log("  ▶ ▶ cfCommonPopUpAsync (실시간) - retrieveMgntEmpNoList");
            await udc_mgntClntNo.cfCommonPopUpAsync(scwin.udc_mgntClntNo_callBackFunc, pCode, '', check, null, null, null, null, null, null, null, null, null);
          }
        }
      } else {
        udc_mgntClntNo.setSelectId("retrieveClntEmpNoList"); // 

        // rtnList = cfCommonPopUp('retrieveClntEmpNoList'
        if (!scwin.popupAsyncFlag) {
          console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님) - retrieveClntEmpNoList");
          udc_mgntClntNo.cfCommonPopUp(scwin.udc_mgntClntNo_callBackFunc, pCode, '', check, null, null, null, null, param, null, null, null, null);
        } else {
          console.log("  ▶ ▶ cfCommonPopUpAsync (실시간) - retrieveClntEmpNoList");
          await udc_mgntClntNo.cfCommonPopUpAsync(scwin.udc_mgntClntNo_callBackFunc, pCode, "", check, null, null, null, null, param, null, null, null, null);
          // await udc_mgntClntNo.cfCommonPopUp(scwin.udc_mgntClntNo_callBackFunc, ed_mgntClntNo.getValue().trim(),ed_mgntClntNm.getValue(), check, null,null,null,null,param,null,null,null,null);
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
      console.log("  사번pop  param [" + param + "]");

      //rtnList = cfCommonPopUp('retrieveAcEmpInfo',pCode,'',check,null,null,null,null,param,null,null,null,null);

      if (!scwin.popupAsyncFlag) {
        console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");
        udc_mgntEmpNo.cfCommonPopUp(scwin.udc_mgntEmpNo_callBackFunc, pCode, '', check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_mgntEmpNo.cfCommonPopUpAsync(scwin.udc_mgntEmpNo_callBackFunc, pCode, '', check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '6':
      //지점코드 조회
      // 업무 삭제됨
      break;
    case '7':
      //매출입항목코드 조회
      // 업무 삭제됨

      break;
    case '8':
      // 사업자번호
      var param = '';
      var selectID = 'retrieveCrnInfo';

      //rtnList = cfCommonPopUp(selectID,pCode,'',check,null,null,null,null,param,null,null,null,null);
      // udc_crn.setSelectId(selectID);

      if (!scwin.popupAsyncFlag) {
        console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");
        udc_crn.cfCommonPopUp(scwin.udc_crn_callBackFunc, pCode, '', check, null, null, null, null, param, null, null, null, null);
      } else {
        await udc_crn.cfCommonPopUpAsync(scwin.udc_crn_callBackFunc, pCode, '', check, null, null, null, null, param, null, null, null, null);
      }
      break;
    case '9':
      // 상대계정조회
      // 선급비용 처리분에 선급비용-일반 계정이 추가됨으로 인한 상대계정 입력필드 추가

      // 비용구분 : 01^원가,02^판관비,03^원가+판관비,04^판관비제외,05^원가제외,06^판관비

      // 03: 원가+판관비 => 04: 판관비제외
      // 01: 원가        => 05: 원가제외
      // 02: 판관비      => 06: 판관비

      if (scwin.txt_tempOpntAcctCostClsCd == "03") {
        scwin.txt_opntAcctCostClsCd = "04"; // 전체조회
      } else if (scwin.txt_tempOpntAcctCostClsCd == "01") {
        scwin.txt_opntAcctCostClsCd = "05"; // 원가
      } else if (scwin.txt_tempOpntAcctCostClsCd == "02") {
        scwin.txt_opntAcctCostClsCd = "06"; // 판관비
      } else {
        scwin.txt_opntAcctCostClsCd = "";
      }
      console.log("  상대계정pop  txt_tempOpntAcctCostClsCd : " + scwin.txt_tempOpntAcctCostClsCd + "  txt_opntAcctCostClsCd (상대계정비용구분) : " + scwin.txt_opntAcctCostClsCd);

      // 계정코드가
      var where = "";

      //동부익스프레스, 자회사 구분으로 계정 팝업창 틀림
      if (scwin.isSubCompany == false) {
        where = ica_slipDt.getValue().trim() + "," + scwin.txt_costClsCd + ",Y";
        //rtnList = cfCommonPopUp('retrieveTransferAcctCdInfo',ed_acctCd.text.trim(),txt_acctNm.value,check,null,null,null,null,where,null,null,null,null);
        udc_opntAcctCd.setSelectId("retrieveTransferAcctCdInfo");
        console.log(" 상대계정 (자회사)  아님 where [" + where + "]   selectId : " + udc_acctCd.getSelectId());
        if (!scwin.popupAsyncFlag) {
          console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");
          udc_opntAcctCd.cfCommonPopUp(scwin.udc_opntAcctCd_callBackFunc, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check, null, null, null, null, where, null, null, null, null);
        } else {
          await udc_opntAcctCd.cfCommonPopUpAsync(scwin.udc_opntAcctCd_callBackFunc, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check, null, null, null, null, where, null, null, null, null);
        }
      } else {
        where = ica_slipDt.getvalue().trim() + "," + scwin.txt_costClsCd;
        //rtnList = cfCommonPopUp('retrieveTransferAcctCdInfo2',ed_acctCd.text.trim(),txt_acctNm.value,check,null,null,null,null,where,null,null,null,null);
        udc_opntAcctCd.setSelectId("retrieveTransferAcctCdInfo2");
        console.log(" 상대계정 (자회사)  where [" + where + "]   selectId : " + udc_acctCd.getSelectId());
        if (!scwin.popupAsyncFlag) {
          console.log("  ▶ ▶ ▶ ▶ cfCommonPopUp (실시간 아님)");
          udc_opntAcctCd.cfCommonPopUp(scwin.udc_opntAcctCd_callBackFunc, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check, null, null, null, null, where, null, null, null, null);
        } else {
          await udc_opntAcctCd.cfCommonPopUpAsync(scwin.udc_opntAcctCd_callBackFunc, ed_acctCd.getValue().trim(), ed_acctNm.getValue(), check, null, null, null, null, where, null, null, null, null);
        }
      }
    default:
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //
//   1:발행부서,2:계정,3:귀속부서,4:거래처,5:사번,6:지점,7:매출입,8:사업자,9:상대계정

//-------------------------------------------------------------------------
// 발행부서조회 callBackFunc
//-------------------------------------------------------------------------
scwin.udc_slipAcctDeptCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_slipAcctDeptCd_callBackFunc (발행부서조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");

  //f_resultPopEd(ed_slipAcctDeptCd,txt_slipAcctDeptNm,rtnList);
  await scwin.f_resultPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, rtnList, "1");
};

//-------------------------------------------------------------------------
// udc_acctCd_callBackFunc (계정코드 조회 팝업 callBack)
//-------------------------------------------------------------------------
scwin.udc_acctCd_callBackFunc = async function (rtnList) {
  console.log("▲▲ udc_acctCd_callBackFunc (계정코드조회 팝업 callBack)   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ed_acctCd.setValue("");
      ed_acctNm.setValue("");
      ed_mgntNm.setValue("");
      scwin.ed_acctCd_hidVal = "";
      scwin.txt_payAcctCd = "";

      // KYU_NEW : 추가 바인딩
      var row = ds_slipcontents.getRowPosition();
      ds_slipcontents.setCellData(row, "payAcctCd", scwin.txt_payAcctCd); // 지급계정

      return;
    }

    // ed_acctCd.text  = rtnList[0];   //계정코드
    // txt_acctNm.value = rtnList[1];  //계정명
    // ed_acctCd.hidVal = rtnList[0];  // 히든값

    ed_acctCd.setValue(rtnList[0]); //계정코드
    ed_acctNm.setValue(rtnList[1]); //계정명
    scwin.ed_acctCd_hidVal = rtnList[0]; // 히든값

    // 계정별 차대구분 조정
    let rtn = await scwin.f_AcctCdCheck();
    console.log("  afterAcctDeptCdPopup - f_AcctCdCheck [" + rtn + "]");
    if (ACConstants.CO_CD_DONGBU == scwin.vCoCd) {
      // 결과값 가지고 왔을때 원)세금과공과-과징금(4203417), 판)세금과공과-과징금(5001917) 계정일 경우
      // 잡손실(6120220)계정으로 작성해 주시기 바랍니다. 라는 메시지 출력해 준다.
      // 본사만
      if (ed_acctCd.getValue() == "4203417") {
        await $c.win.alert($p, "원)세금과공과-과징금(4203417) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        return;
      } else if (ed_acctCd.getValue() == "5001917") {
        await $c.win.alert($p, "판)세금과공과-과징금(5001917) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        return;
      }
    }
    console.log("2222");

    //---------------------------------------------------------
    //  채권채무선수금정리를 위한 구분값 적용
    //---------------------------------------------------------
    // txt_acctClsCd.value = rtnList[2];  // 계정구분코드
    scwin.txt_acctClsCd = rtnList[2]; // 계정구분코드

    // KYU_NEW : 추가 바인딩
    var row = ds_slipcontents.getRowPosition();
    ds_slipcontents.setCellData(row, "acctClsCd", scwin.txt_acctClsCd); // 계정구분

    // KYU_NEW : f_checkSettle 에 아규먼트 지정
    // f_checkSettle(ed_acctCd.text, lc_drcrClsCd.BindColVal);  //정리구분셋팅

    console.log("  ▣ ▣  afterAcctDeptCdPopup - f_checkSettle 호출");

    // 채권채무선수금 정리대상 계정 체크
    let rtnc = await scwin.f_checkSettle(ed_acctCd.getValue(), lc_drcrClsCd.getValue()); //정리구분셋팅

    console.log("  ▣ ▣    afterAcctDeptCdPopup - f_checkSettle [" + rtnc + "]");

    /*  KYU_ISSUE : col10 을 ^ 로 분리 (일자관리여부^계정명)
      - AsIs
    r[ 2100810,미지급비용-거래처,2,C,09,1,0,0,지급방법,0,지급방법 ]  11개
      - TOBE
    2100810	미지급비용-거래처	2	C	09	1	0	0	지급방법	0^지급방법  10개 (일자관리여부^계정명)
    */

    // 계정 캐럿/꺽쇠 처리
    // col10 갈라내기 : 일자관리여부^관리항목명 (FI027  01: 통장번호, 02: 어음수표번호, 03: 증빙번호, 04: 자산번호, 05: 가지급번호, 06: 채권번호, 08: 이율, 09: 지급방법, 10: 카드번호, 11: 선수가수발생번호)
    var temp_dtMgntYn = "";
    var temp_mgntMngNm = "";
    if (!$c.gus.cfIsNull($p, rtnList[9])) {
      let str = rtnList[9];
      // console.log(" rtnList[9] ["+ rtnList[9] +"]");

      let CodeListDetail = str.split("^");
      // console.log("CodeListDetail ["+ CodeListDetail +"]");

      temp_dtMgntYn = CodeListDetail[0]; // 일자관리여부
      temp_mgntMngNm = CodeListDetail[1]; // 관리항목명-지급계정명
    }

    // 계정조회시화면셋팅
    // 계정셋팅

    //-------------------------------------------------------------------------
    //  계정조회시화면셋팅
    //  r_mgntCd     - 관리번호
    //  r_clntMgntYn - 거래처여부
    //  r_termMgntYn - 기간관리여부
    //  r_empMgntYn  - 사원관리여부
    //  r_mgntNm     - 관리사원명
    //  r_dtMgntYn   - 일자관리여부
    //  r_payAcctCd  - 지급계정
    //-------------------------------------------------------------------------
    // console.log("  -- -- f_AcctCd 호출 (계정코드조회)");
    // let rtn2 = await scwin.f_AcctCd(rtnList[4],rtnList[5],rtnList[6],rtnList[7],rtnList[8],rtnList[9],rtnList[10]);

    console.log("  -- -- f_AcctCd 호출 (계정코드조회) : 거래처 [" + rtnList[5] + "], 기간관리 [" + rtnList[6] + "], 사원관리 [" + rtnList[7] + "], 일자관리 [" + temp_dtMgntYn + "] 지급계정명 [" + temp_mgntMngNm + "]");
    let rtn2 = await scwin.f_AcctCd(rtnList[4], rtnList[5], rtnList[6], rtnList[7], rtnList[8], temp_dtMgntYn, temp_mgntMngNm);

    // KYU_COPY
    if (lc_drcrClsCd.getValue() == "C" && ed_acctCd.getCellData == "1110530") {
      // 대변, 단기대여금-업무가지급금(일반)
      if (scwin.isSubCompany == true) {
        //자회사 정산방법 선택 불가
        // lc_adjmClsCd.BindColVal = -1;   //정산방법
        lc_adjmClsCd.setValue(-1); //정산방법
        //cfDisableObjects(img_adjmClsCd);
        $c.gus.cfDisableObjects($p, [btn_adjmClsCd]); // 정산방법 돋보기
        console.log("  ==--== 비활성 ( 정산방법돋보기 ) ");
      } else {
        //lc_adjmClsCd.BindColVal="<%=ACConstants.ADJM_MTHDCD_SUSPAY%>"
        lc_adjmClsCd.setValue(ACConstants.ADJM_MTHDCD_SUSPAY);
        //cfEnableObjects(img_adjmClsCd);
        $c.gus.cfDisableObjects($p, [btn_adjmClsCd]); // 정산방법 돋보기
        console.log("  ==-==-== 비활성 ( 정산방법돋보기 ) ");
      }
    } else {
      if (scwin.isSubCompany == true) {
        //자회사 정산방법 선택 불가
        //lc_adjmClsCd.BindColVal = -1;   //정산방법
        lc_adjmClsCd.setValue(-1); //정산방법
        //cfDisableObjects(img_adjmClsCd);
        $c.gus.cfDisableObjects($p, [btn_adjmClsCd]); // 정산방법 돋보기
        console.log("  ==-==-== 비활성 ( 정산방법돋보기 ) ");
      } else {
        //lc_adjmClsCd.BindColVal = 0;
        lc_adjmClsCd.setValue(0); //정산방법  KYU_TEST : 0 이 없는 상태임 -1^없음,4^가지급금

        console.log("  [검증] lc_adjmClsCd (정산방법 (-1, 4)) 0 지정후 : " + lc_adjmClsCd.getValue());

        //cfDisableObjects(img_adjmClsCd);
        $c.gus.cfDisableObjects($p, [btn_adjmClsCd]); // 정산방법 돋보기
        console.log("  ==-==-== 비활성 ( 정산방법돋보기 ) ");
      }
    }
  } else {
    console.log("   리턴 없슴");
    // ed_acctCd.text  = "";
    // txt_acctNm.value = "";
    // txt_mgntNm.value ="";
    // ed_acctCd.hidVal ="";
    // txt_payAcctCd.value ="";

    ed_acctCd.setValue("");
    ed_acctNm.setValue("");
    ed_mgntNm.setValue("");
    scwin.ed_acctCd_hidVal = "";
    scwin.txt_payAcctCd = "";

    // KYU_NEW : 추가 바인딩
    var row = ds_slipcontents.getRowPosition();
    gr_slipcontents.setCellData(row, "payAcctCd", scwin.txt_payAcctCd); // 지급계정
  }

  // ds 코드명 세팅
  if (scwin.dsCodeNameSet == true)
    // ds에 코드명 세팅여부
    {
      console.log("    ▷▷ 코드명 세팅  [" + scwin.dsCodeNameSetRow + "][" + scwin.dsCodeNameSetColId + "][" + ed_acctNm.getValue() + "]");
      ds_slipcontents.setCellData(scwin.dsCodeNameSetRow, "acctNm", ed_acctNm.getValue()); // 계정명
    }

  // KYU_COPY
  // 부가세대급금이 대변  계정, 부가세예수금이 차변계정  입력시는 사업자번호, 부가세관리부서등 부가세관련 데이터 입력가능
  if (ed_acctCd.getValue() == "1111210" && lc_drcrClsCd.getValue() == "D" || ed_acctCd.getValue() == "2100710" && lc_drcrClsCd.getValue() == "C") {
    //	    cfEnableObjects([ed_taxinvcDt,img_taxinvcDt,lc_evidClsCd,lc_deductClsCd, ed_vatDeclarAcctDeptCd,ed_crn, ed_spplyAmt, ed_vatAmt, ed_taxinvcDt, img_taxinvcDt, img_crn]);
    $c.gus.cfEnableObjects($p, [ica_taxinvcDt, lc_evidClsCd, lc_deductClsCd, ed_vatDeclarAcctDeptCd, ed_crn, ed_spplyAmt, ed_vatAmt, btn_crn, btn_vatDeclarAcctDeptCd]);
    console.log("  ==--== 부가세대급금 - 활성 ( 세금계산서일자, 증빙종류코드, 공제종류코드, 부가세관리부서, 사업자번호, 공급금액, 부가세금액, 사업자번호돋보기,  부가세관리부서돋보기(NEW) ) - 계정팝업 callBack");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(0), "taxinvcDt", ica_slipDt.getValue());
  } else {
    //cfDisableObjects([ed_taxinvcDt,img_taxinvcDt,lc_evidClsCd,lc_deductClsCd, ed_vatDeclarAcctDeptCd,ed_crn, ed_spplyAmt, ed_vatAmt, ed_taxinvcDt, img_taxinvcDt, img_crn]);
    $c.gus.cfDisableObjects($p, [ica_taxinvcDt, lc_evidClsCd, lc_deductClsCd, ed_vatDeclarAcctDeptCd, ed_crn, ed_spplyAmt, ed_vatAmt, btn_crn, btn_vatDeclarAcctDeptCd]);
    console.log("  ==--== 부가세대급금 X - 비활성 ( 세금계산서일자, 증빙종류코드, 공제종류코드, 부가세관리부서, 사업자번호, 공급금액, 부가세금액, 사업자번호돋보기,  부가세관리부서돋보기(NEW) ) - 계정팝업 callBack");
  }

  // 계정이 선급비용-일반일 경우 상대계정필드 활성화
  if (ed_acctCd.getValue() == ACConstants.ACCTCD_PREPAY_COST) {
    // 1111110
    //cfEnableObjects([ed_opntAcctCd, txt_opntAcctNm, img_opntAcctCd]);
    $c.gus.cfEnableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
    console.log("  ==--== 활성 ( 상대계정 ) ");
  } else {
    ed_opntAcctCd.setValue("");
    ed_opntAcctNm.setValue("");
    scwin.ed_opntAcctCd_hidVal = "";
    //cfDisableObjects([ed_opntAcctCd, txt_opntAcctNm, img_opntAcctCd]);
    $c.gus.cfDisableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
    console.log("  ==--== 비활성 ( 상대계정 ) ");
  }

  // ds 코드명 세팅
  if (scwin.dsCodeNameSet == true)
    // ds에 코드명 세팅여부
    {
      console.log("    ▷▷ 코드명 세팅  [" + scwin.dsCodeNameSetRow + "][" + scwin.dsCodeNameSetColId + "][" + ed_opntAcctNm.getValue() + "]");
      ds_slipcontents.setCellData(scwin.dsCodeNameSetRow, "opntAcctNm", ed_opntAcctNm.getValue()); // 상대계정명
    }
};

//-------------------------------------------------------------------------
// udc_acctDeptCd_callBackFunc (귀속부서 조회 팝업 callBackFunc)
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = async function (rtnList) {
  console.log("▲ udc_acctDeptCd_callBackFunc (귀속부서 조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음

      ed_acctDeptCd.setValue("");
      ed_acctDeptNm.setValue("");
      scwin.ed_acctDeptCd_hidVal = "";
      scwin.txt_costClsCd = "";
      scwin.txt_bizDomCd = ""; //사업영역코드 (변동비 계정 조회안되도록 수정-06.12.22-박병길

      // KYU_NEW : 추가 바인딩
      var row = ds_slipcontents.getRowPosition();
      ds_slipcontents.setCellData(row, "costClsCd", scwin.txt_costClsCd); // 비용구분코드
      ds_slipcontents.setCellData(row, "bizDomCd", scwin.txt_bizDomCd); // 사업영역코드
      return;
    }

    // ed_acctDeptCd.text  = rtnList[0];           //부서코드
    // txt_acctDeptNm.value = rtnList[1];          //부서명
    // ed_acctDeptCd.hidVal = rtnList[0];          // 히든값
    // cfEnableObjects([ed_vatDeclarAcctDeptCd,img_vatDeclarAcctDeptCd]);
    // txt_costClsCd.value =  ""+rtnList[9];       //비용구분코드
    // txt_tempCostClsCd.value = ""+rtnList[9];    //비용구분코드비교값
    // txt_bizDomCd.value = ""+rtnList[3];         //사업영역코드 (변동비 계정 조회안되도록 수정-06.12.22-박병길)
    // txtCoCd.value       = rtnList[4];       //회사코드
    // txtCoClsCd.value    = rtnList[5];       //회사구분코드

    ed_acctDeptCd.setValue(rtnList[0]); //부서코드
    ed_acctDeptNm.setValue(rtnList[1]); //부서명
    scwin.ed_acctDeptCd_hidVal = rtnList[0]; // 히든값

    // KYU_TEST
    // $c.gus.cfEnableObjects([ed_vatDeclarAcctDeptCd, btn_vatDeclarAcctDeptCd]);  // 부가세관리부서
    // console.log("  ==--== 활성 ( 부가세관리부서 ) ");

    scwin.txt_costClsCd = "" + rtnList[9]; //비용구분코드
    scwin.txt_tempCostClsCd = "" + rtnList[9]; //비용구분코드비교값

    scwin.txt_bizDomCd = "" + rtnList[3]; //사업영역코드 (변동비 계정 조회안되도록 수정-06.12.22-박병길)
    scwin.txtCoCd = rtnList[4]; //회사코드
    scwin.txtCoClsCd = rtnList[5]; //회사구분코드

    console.log("  귀속부서조회후  txtCoCd: " + scwin.txtCoCd + "   txtCoClsCd: " + scwin.txtCoClsCd);

    // KYU_NEW : 추가 바인딩
    var row = ds_slipcontents.getRowPosition();
    // ds_slipcontents.setCellData(row, "costClsCd", scwin.txt_costClsCd);          // 비용구분코드 - 바인딩 제거
    ds_slipcontents.setCellData(row, "tempCostClsCd", scwin.txt_tempCostClsCd); // TEMP비용구분코드
    ds_slipcontents.setCellData(row, "bizDomCd", scwin.txt_bizDomCd); // 사업영역코드

    // TB_FI010 (증빙구분) 의 EVID_CLS_CD (증빙구분코드) - 10: 세금계산서, 11: 세금계산서기타, 12: 고속면세매출, 20: 영세율세금계산서, 30: 계산서, 40: 법인카드, 41: 신용카드, 50: 개인카드, 60: 현금영수증, 70: 영수증, 80: 내부매출, 99: 기타
    if (lc_evidClsCd.getValue() == "40") {
      // 법인카드

      // 부가세귀속부서popup
      await scwin.f_VatDeclarAcctDeptCd('2');
      ed_vatDeclarAcctDeptCd.setValue("00009");
      ed_vatDeclarAcctDeptNm.setValue("재경");

      // 귀속부서에 해당하는 신고부서가 아닌 재경에 해당하는 신고부서를 가져감
      // 부가세귀속부서popup
      await scwin.f_VatDeclarAcctDeptCd(3);
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
    scwin.txt_bizDomCd = ""; //사업영역코드 (변동비 계정 조회안되도록 수정-06.12.22-박병길

    // KYU_NEW : 추가 바인딩
    var row = ds_slipcontents.getRowPosition();
    // ds_slipcontents.setCellData(row, "costClsCd", scwin.txt_costClsCd);          // 비용구분코드 - 바인딩 제거
    ds_slipcontents.setCellData(row, "bizDomCd", scwin.txt_bizDomCd); // 사업영역코드
  }
  if (scwin.dsCodeNameSet = !true)
    // ds에 코드명 세팅할 때에는 초기화 불필요
    {
      ed_acctCd.setValue(""); //계정코드
      ed_acctNm.setValue(""); //계정명
      scwin.ed_acctCd_hidVal = ""; // 히든값
      console.log("  초기화 [계정코드, 계정명, 계정히든값]");
    }

  // ds 코드명 세팅
  if (scwin.dsCodeNameSet == true)
    // ds에 코드명 세팅여부
    {
      console.log("    ▷▷ 코드명 세팅  [" + scwin.dsCodeNameSetRow + "][" + scwin.dsCodeNameSetColId + "] 부서[" + ed_acctDeptNm.getValue() + "] 계정[" + ed_acctNm.getValue() + "] 부가세관리[" + ed_vatDeclarAcctDeptNm.getValue() + "]");
      ds_slipcontents.setCellData(scwin.dsCodeNameSetRow, "ed_acctDeptNm", ed_acctDeptNm.getValue()); // 부서명
      ds_slipcontents.setCellData(scwin.dsCodeNameSetRow, "acctNm", ed_acctNm.getValue()); // 계정명
      ds_slipcontents.setCellData(scwin.dsCodeNameSetRow, "vatDeclarAcctDeptNm", ed_vatDeclarAcctDeptNm.getValue()); // 부가세관리부서명
    }
};

//-------------------------------------------------------------------------
// udc_mgntClntNo_callBackFunc (거래처조회 팝업 callBackFunc) (4)
//-------------------------------------------------------------------------
scwin.udc_mgntClntNo_callBackFunc = function (rtnList) {
  console.log("▲ udc_mgntClntNo_callBackFunc (거래처조회 팝업 callBackFunc)   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      ed_mgntClntNo.setValue("");
      ed_mgntClntNm.setValue("");
      scwin.ed_mgntClntNo_hidVal = "";
      scwin.txt_clntCrn = "";

      // KYU_NEW : 추가 바인딩
      var row = ds_slipcontents.getRowPosition();
      ds_slipcontents.setCellData(row, "clntCrn", scwin.txt_clntCrn); // 거래처사업자번호

      return;
    }
    ed_mgntClntNo.setValue(rtnList[0]); // 거래처코드
    ed_mgntClntNm.setValue(rtnList[1]); // 거래처명
    scwin.ed_mgntClntNo_hidVal = rtnList[0]; // 히든값

    scwin.txt_clntCrn = rtnList[4]; // 사업자번호

    // 거래처 캐럿/꺽쇠 처리
    //  rtnList [313327,주식회사 로지스퀘어,,,3148131696,LO,주홍민,서울 금천구 가산디지털1로 84 (가산동, 에이스하이엔드타워8차),N,3층 302호^^^]
    //  주의 : 서울 금천구 가산디지털1로 84 (가산동, 에이스하이엔드타워8차)  가 하나로 되어있음.
    //          즉 ,다음에 공백 있으면 자르지 않음
    // col10 갈라내기 : 주소2^회계거래처종류코드^사원번호^사원명

    var temp_addr2 = ""; // 주소2
    var temp_accountClntKndCd = ""; // 회계거래처종류코드
    var temp_mgntEmpNo = ""; // 사원번호
    var temp_mgntEmpNm = ""; // 사원명

    if (!$c.gus.cfIsNull($p, rtnList[9])) {
      let str = rtnList[9];
      // console.log(" rtnList[10] ["+ rtnList[9] +"]");

      let CodeListDetail = str.split("^");
      // console.log("CodeListDetail ["+ CodeListDetail +"]");

      temp_addr2 = CodeListDetail[0]; // 주소2  [9]
      temp_accountClntKndCd = CodeListDetail[1]; // 회계거래처종류코드 [10]
      temp_mgntEmpNo = CodeListDetail[2]; // 사원번호  [12]
      temp_mgntEmpNm = CodeListDetail[3]; // 사원명    [12]
    }
    console.log("  col10 분할: temp_addr2[9] [" + temp_addr2 + "]  temp_accountClntKndCd[10] [" + temp_accountClntKndCd + "]" + "  temp_mgntEmpNo[11] [" + temp_mgntEmpNo + "]  temp_mgntEmpNm[12] [" + temp_mgntEmpNm + "]");

    // KYU_NEW : 추가 바인딩
    var row = ds_slipcontents.getRowPosition();
    ds_slipcontents.setCellData(row, "clntCrn", scwin.txt_clntCrn); // 거래처사업자번호

    //사원거래처일경우 사번셋팅(수정 20060412)

    //if(ed_mgntEmpNo.Enable==true && rtnList[10]=="EM"){
    // if(ed_mgntEmpNo.getDisabled() ==false && rtnList[10]=="EM"){
    if (ed_mgntEmpNo.getDisabled() == false && temp_accountClntKndCd == " EM") {
      // 회계거래처종류코드 (ZZ018) = EM (사원)
      console.log(" 회계거래처종류코드 EM 일 경우, 사원정보 갱신! [" + temp_mgntEmpNo + "][" + temp_mgntEmpNm + "]");

      // ed_mgntEmpNo.setValue(rtnList[11]);
      // ed_mgntEmpNm.setValue(rtnList[12]);
      // scwin.ed_mgntEmpNo_hidVal = rtnList[11];

      ed_mgntEmpNo.setValue(temp_mgntEmpNo);
      ed_mgntEmpNm.setValue(temp_mgntEmpNm);
      scwin.ed_mgntEmpNo_hidVal = temp_mgntEmpNo;
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

  // ds 코드명 세팅
  if (scwin.dsCodeNameSet == true)
    // ds에 코드명 세팅여부
    {
      console.log("    ▷▷ 코드명 세팅  [" + scwin.dsCodeNameSetRow + "][" + scwin.dsCodeNameSetColId + "] 거래처[" + ed_mgntClntNm.getValue() + "] 사원[" + ed_mgntEmpNm.getValue() + "]");
      ds_slipcontents.setCellData(scwin.dsCodeNameSetRow, "mgntClntNm", ed_mgntClntNm.getValue()); // 거래처명
      ds_slipcontents.setCellData(scwin.dsCodeNameSetRow, "mgntEmpNm", ed_mgntEmpNm.getValue()); // 사원번호
    }
};

//-------------------------------------------------------------------------
// 사원번호 조회 callBackFunc (5)
//-------------------------------------------------------------------------
scwin.udc_mgntEmpNo_callBackFunc = async function (rtnList) {
  console.log("▲ udc_mgntEmpNo_callBackFunc (사원번호 조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");

  //f_resultPopEd(ed_mgntEmpNo,txt_mgntEmpNm,rtnList);
  await scwin.f_resultPopEd(ed_mgntEmpNo, ed_mgntEmpNm, rtnList, "5");
};

//-------------------------------------------------------------------------
// 매출입항목 조회 callBackFunc (7) - 미사용
//-------------------------------------------------------------------------
scwin.udc_pchsItemCd_callBackFunc = function (rtnList) {
  // console.log("▲ udc_pchsItemCd_callBackFunc (매출입항목 조회 팝업 callBackFunc)");
  // console.log("   rtnList ["+rtnList+"]");

  // if (rtnList != null ) {
  //     $c.gus.cfSetReturnValue(rtnList, ed_pchsItemCd, scwin.txt_pchsItemNm);
  // }else{
  //     ed_pchsItemCd.setValue( "" );
  //     scwin.txt_pchsItemNm.value = "";
  // }
};

//-------------------------------------------------------------------------
// 사업자번호 조회 callBackFunc (8)
//-------------------------------------------------------------------------
scwin.udc_crn_callBackFunc = function (rtnList) {
  console.log("▲ udc_crn_callBackFunc (사업자번호 조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      ed_crn.setValue(""); //거래처코드
      ed_crnNm.setValue(""); //거래처명명
      scwin.ed_crn_hidVal = ""; // 히든값
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

  // ds 코드명 세팅
  if (scwin.dsCodeNameSet == true)
    // ds에 코드명 세팅여부
    {
      console.log("    ▷▷ 코드명 세팅  [" + scwin.dsCodeNameSetRow + "][" + scwin.dsCodeNameSetColId + "][" + ed_crnNm.getValue() + "]");
      ds_slipcontents.setCellData(scwin.dsCodeNameSetRow, "crnNm", ed_crnNm.getValue()); // 사업자명
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
      // 팝업 그냥 닫음
      ed_opntAcctCd.setValue("");
      ed_opntAcctNm.setValue("");
      scwin.ed_opntAcctCd_hidVal = "";
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

  // ds 코드명 세팅
  if (scwin.dsCodeNameSet == true)
    // ds에 코드명 세팅여부
    {
      console.log("    ▷▷ 코드명 세팅  [" + scwin.dsCodeNameSetRow + "][" + scwin.dsCodeNameSetColId + "][" + ed_crnNm.getValue() + "]");
      ds_slipcontents.setCellData(scwin.dsCodeNameSetRow, "opntAcctNm", ed_opntAcctNm.getValue()); // 사원번호
    }
};

//-------------------------------------------------------------------------
// 팝업결과  @@
//   1:발행부서,2:계정,3:귀속부서,4:거래처,5:사번,8:사업자,9:상대계정
//-------------------------------------------------------------------------
scwin.f_resultPopEd = async function (strCd, strNm, rtnList, kind) {
  console.log("=== f_resultPopEd (팝업결과  kind [" + kind + "] strCd[" + strCd.getValue() + "] strNm[" + strNm.getValue() + "] rtnList[" + rtnList + "])");
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      // 히든값 분기처리
      switch (kind) {
        case '1':
          scwin.ed_acctDeptCd_hidVal = "";
          break;
        // 발행부서
        case '5':
          scwin.ed_mgntEmpNo_hidVal = "";
          break;
        // 사원번호
        default:
          break;
      }
      if (kind == '1') {
        // 추가바인딩
        ds_slip.setCellData(0, "slipAcctDeptCd", "");
        ds_slip.setCellData(0, "slipAcctDeptNm", "");
      }
      return;
    }
    // strCd.Text = rtnList[0];	// 코드
    // strNm.value = rtnList[1];	// 명
    // strCd.hidVal = rtnList[0];  // 히든값

    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명

    if (kind == '1') {
      // 추가바인딩
      ds_slip.setCellData(0, "slipAcctDeptCd", rtnList[0]);
      ds_slip.setCellData(0, "slipAcctDeptNm", rtnList[1]);
    }

    // 히든값 분기처리
    switch (kind) {
      case '1':
        scwin.ed_acctDeptCd_hidVal = rtnList[0];
        break;
      // 발행부서
      case '5':
        scwin.ed_mgntEmpNo_hidVal = rtnList[0];
        break;
      // 사원번호
      default:
        break;
    }

    // ds 코드명 세팅
    if (scwin.dsCodeNameSet == true)
      // ds에 코드명 세팅여부
      {
        // debugger;
        console.log("    ▷▷ 코드명 세팅  [" + scwin.dsCodeNameSetRow + "][" + scwin.dsCodeNameSetColId + "][" + rtnList[0] + "]");

        // 분기처리
        switch (kind) {
          // case '1' : scwin.ed_acctDeptCd_hidVal = rtnList[0]; break;  // 발행부서
          case '5':
            ds_slipcontents.setCellData(scwin.dsCodeNameSetRow, "mgntEmpNm", rtnList[1]);
            break;
          // 사원번호
          default:
            break;
        }
      }
  } else {
    // strCd.Text = "";
    // strNm.value = "";
    // strCd.hidVal = "";
    strCd.setValue("");
    strNm.setValue("");

    // 히든값 분기처리
    switch (kind) {
      case '1':
        scwin.ed_acctDeptCd_hidVal = "";
        break;
      // 발행부서
      case '5':
        scwin.ed_mgntEmpNo_hidVal = "";
        break;
      // 사원번호
      default:
        break;
    }
    if (kind == '1') {
      // 추가바인딩
      ds_slip.setCellData(0, "slipAcctDeptCd", "");
      ds_slip.setCellData(0, "slipAcctDeptNm", "");
    }

    // ds 코드명 세팅
    if (scwin.dsCodeNameSet == true)
      // ds에 코드명 세팅여부
      {
        console.log("    ▷▷ 코드명 세팅  null [" + scwin.dsCodeNameSetRow + "][" + scwin.dsCodeNameSetColId + "][" + "]");

        // 분기처리
        switch (kind) {
          // case '1' : scwin.ed_acctDeptCd_hidVal = rtnList[0]; break;  // 발행부서
          case '5':
            ds_slipcontents.setCellData(scwin.dsCodeNameSetRow, "mgntEmpNm", "");
            break;
          // 사원번호
          default:
            break;
        }
      }
  }
};

//-------------------------------------------------------------------------
// 팝업체크  @@
//   flag : 팝업 플래그
//   kind : 팝업 종류 (신규)
//-------------------------------------------------------------------------
//   1:발행부서,2:계정,3:귀속부서,4:거래처,5:사번,6:지점,7:매출입,8:사업자,9:상대계정
scwin.f_checkPopEd = async function (strCd, strNm, flag) {
  console.log("===== f_checkPopEd (팝업체크  srtCd[" + strCd.getValue() + "] strNm[" + strNm.getValue() + "] flag[ " + flag + " ]  1:발행부서,2:계정,3:귀속부서,4:거래처,5:사번,6:지점,7:매출입,8:사업자,9:상대계정");
  // if (strCd.text.trim() == strCd.hidVal)
  // return;
  if (flag == '1' && strCd.getValue().trim() == scwin.ed_slipAcctDeptCd_hidVal ||
  // 발행부서
  flag == '2' && strCd.getValue().trim() == scwin.ed_acctCd_hidVal // 계정
  ) {
    // KYU_TEST : 히든 비교시 코드가 null 이 아니어야 함. (코드 null 일 때 명 null 처리)

    if (strCd.getValue() != "" && strNm.getValue() != "") {
      console.log("  -- 코드와 히든이 똑같아요 (코드,코드명 다 있음) 리턴~~~~~");
      return; // 리턴 안함. KYU_TEST 일단 리턴으로 변경
    }
  }
  strNm.setValue("");

  // strCd.hidVal = "";

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
    case '6':
      scwin.ed_branchCd_hidVal = "";
      break;
    // 지점
    case '12':
      scwin.ed_pchsItemCd_hidVal = "";
      break;
    // 매입항목
    default:
      break;
  }

  // if(strCd.text.trim()!="") 
  // f_openPopUp(flag,strCd,'T');
  if (strCd.getValue().trim() != "") {
    await scwin.f_openPopUp(flag, strCd, 'T');
    // 팝업 로딩
    // switch (kind){
    //     case '1'  : scwin.f_openPopUp(flag,strCd,'T'); break;  // 발행부서
    //     case '2'  : scwin.f_openPopUp(flag,strCd,'T'); break;  // 계정
    //     case '6'  : scwin.f_openPopUp(flag,strCd,'T'); break;  // 지점
    //     case '12' : scwin.f_openPopUp(flag,strCd,'T'); break;  // 매입항목
    //     default  : break;
    // }
  }
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
//  통화코드 변경
//-------------------------------------------------------------------------
scwin.crcCdChange = async function () {
  console.log("===== crcCdChange (통화코드 변경)");
  /*
      // 통화코드가 한화 또는 값이 없으면,
      if( lc_crcCd.BindColVal=="" || lc_crcCd.BindColVal == '<%=ACConstants.KOREA_WON%>' ){
          ed_adjustExchRt.text = "";                     // 환율     초기화
          ed_amtFcrc.text  = "";                         // 외화금액 초기화
          cfEnableObj(ed_amtFcrc, false);                // 외화금액 비활성화
          cfEnableObj(ed_adjustExchRt, false);
          cfEnableObj(ed_amt, true);
          ed_amtFcrc.validExp="외화금액:no:maxLength=13"; // 외화금액 validationexperiment 추가
          //ed_amt.focus();
      }else {
          // 자금의 환율테이블 조회(통화코드,작성일자)
          // 통화코드가 외화일경우 외화금액 필수
          cfEnableObjects(ed_adjustExchRt);
      }
  */
  // 통화코드가 한화 또는 값이 없으면,
  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == ACConstants.KOREA_WON || $c.gus.cfIsNull($p, lc_crcCd.getValue())) {
    // KYU_TEST : 금액에는 0
    // ed_adjustExchRt.setValue("");                     // 환율     초기화
    // ed_amtFcrc.setValue("");                          // 외화금액 초기화

    ed_adjustExchRt.setValue(0); // 환율     초기화
    ed_amtFcrc.setValue(0); // 외화금액 초기화

    // $c.gus.cfEnableObj(ed_amtFcrc, false);            // 외화금액 비활성화
    // $c.gus.cfEnableObj(ed_adjustExchRt, false);
    $c.gus.cfDisableObjects($p, [ed_amtFcrc, ed_adjustExchRt]);

    // $c.gus.cfEnableObj(ed_amt, true);
    // $c.gus.cfEnableObj(ed_vatAmt, true);  // NEW

    $c.gus.cfEnableObjects($p, [ed_spplyAmt, ed_vatAmt]);
    console.log("  ==--== 비활성 (외화금액,환율) 활성(공급금액,부가세액(NEW))");

    //ed_amtFcrc.validExp="외화금액:no:maxLength=13"; // 외화금액 validationexperiment 추가  --> 제외

    ed_amtFcrc.setMandatory(false);
  } else {
    // 자금의 환율테이블 조회(통화코드,작성일자)
    // 통화코드가 외화일경우 외화금액 필수
    $c.gus.cfEnableObjects($p, [ed_adjustExchRt]);
    console.log("  ==--== 활성 (환율)");
    $c.gus.cfDisableObjects($p, [ed_spplyAmt, ed_vatAmt]);
    console.log("  NEW ==--== 비활성 (공급금액,부가세액)");
  }
};

//-------------------------------------------------------------------------
// 차대구분 변경 onviewchange
//-------------------------------------------------------------------------
scwin.lc_drcrClsCd_onviewchange = async function (info) {
  console.log("----- lc_drcrClsCd_onchange (차대구분 변경 onviewchange)  ----");

  //  language=JavaScript for=lc_drcrClsCd event=onSelChange()>
  // 	f_PayYn();
  // 	if ( lc_drcrClsCd.BindColVal == "C" && ed_acctCd.Text == "1110530"){
  // 		if(isSubCompany == true){
  // 		 	lc_adjmClsCd.BindColVal = -1;	//정산방법
  // 			cfDisableObjects(img_adjmClsCd);	
  // 		}else{
  // 			lc_adjmClsCd.BindColVal="<%=ACConstants.ADJM_MTHDCD_SUSPAY%>"
  // 			cfEnableObjects(img_adjmClsCd);
  // 		}
  // 	} else if (ed_acctCd.Text == '<%=ACConstants.ACCTCD_TRUST_SELL%>' && lc_drcrClsCd.BindColVal == '<%=ACConstants.DEBIT%>' ) {
  // 		cfEnableObjects([chb_recvProcYn]);		
  // 		chb_recvProcYn.checked=true;
  // 	}else{
  // 		chb_recvProcYn.checked=false;
  // 		cfDisableObjects([img_adjmClsCd,chb_recvProcYn]);
  // 	}

  console.log("   차대구분 변경 lc_drcrClsCd_onviewchange - f_PayYn");

  // 지급처리여부셋팅
  await scwin.f_PayYn();
  if (lc_drcrClsCd.getValue() == "C" && ed_acctCd.getValue() == "1110530") {
    if (scwin.isSubCompany == true) {
      lc_adjmClsCd.setValue(-1); //정산방법
      // cfEnableObjects(img_adjmClsCd);
      $c.gus.cfDisableObjects($p, btn_adjmClsCd);
      console.log("  ==--== 비활성 (정산방법돋보기)");
    } else {
      lc_adjmClsCd.setValue(ACConstants.ADJM_MTHDCD_SUSPAY);
      // cfEnableObjects(img_adjmClsCd);
      $c.gus.cfEnableObjects($p, btn_adjmClsCd);
      console.log("  ==--== 활성 (정산방법돋보기)");
    }
  } else if (ed_acctCd.getValue() == ACConstants.ACCTCD_TRUST_SELL && lc_drcrClsCd.getValue() == ACConstants.DEBIT) {
    // cfEnableObjects([chb_recvProcYn]);
    $c.gus.cfEnableObjects($p, [cbx_recvProcYn]);
    console.log("  ==--== 활성 (채권체크박스)");
    // cbx_recvProcYn.checked=true;  // 채권 체크인
    // cbx_recvProcYn.checkAll(true);

    cbx_recvProcYn.setValue(1);
    ds_slipcontents.setCellData(row, "recvProcYn", 1);
    console.log("   차대구분변경 --==-- 채권체크박스 체크인 !!!!");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "recvProcYn", 1);
  } else {
    // cbx_recvProcYn.checked=false;  // 채권 체크아웃
    // cbx_recvProcYn.checkAll(false);
    cbx_recvProcYn.setValue(0);
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "recvProcYn", 0);

    // cfDisableObjects([img_adjmClsCd,chb_recvProcYn]);
    $c.gus.cfDisableObjects($p, [btn_adjmClsCd, cbx_recvProcYn]);
    console.log("  ==--== 비활성(정산방법돋보기,채권체크박스)");
  }
};

//-------------------------------------------------------------------------
// 차대구분 focus out
//-------------------------------------------------------------------------
scwin.lc_drcrClsCd_onblur = async function (e) {
  console.log("----- lc_drcrClsCd_onblur (차대구분 focus out)");

  /* language=JavaScript for=lc_drcrClsCd event=OnKillFocus()>  */
  scwin.f_CheckComboData(this, "차대구분");
  // 계정별 차대구분 조정
  await scwin.f_AcctCdCheck();
};

//-------------------------------------------------------------------------
// 금액 focus out
//-------------------------------------------------------------------------
scwin.ed_amt_onblur = function (e) {
  console.log("----- ed_amt_onblur (금액 focus out)");

  //  language=JavaScript for=ed_amt event=OnKillFocus()>
  // 	if ( ed_acctCd.Text == "1111210" || ed_acctCd.Text == "2100710" ){
  // // 		if (lc_evidClsCd.BindColVal == "20" ) {
  // 			//ed_spplyAmt.Text = ed_vatSpplyAmt.Text;
  // // 		} else {
  // 			if (ed_spplyAmt.Text > 0 || ed_spplyAmt.Text < 0) {
  // 			}else {
  // 				ed_spplyAmt.Text = ed_amt.Text * 10;
  // 			}
  // 			//ed_spplyAmt.Text = ed_amt.Text * 10;
  // // 		}
  // 	}

  if (ed_acctCd.getValue() == "1111210" || ed_acctCd.getValue() == "2100710") {
    // 부가세대급금-일반, 부가세예수금-일반
    if (ed_spplyAmt.getValue() > 0 || ed_spplyAmt.getValue() < 0) {} else {
      var a = WebSquare.bigDecimal(ed_amt.getValue()); // 30자리 숫자
      var ret = WebSquare.bigDecimal.calc("a * 10");
      ed_supplyAmt.setValue(ret);
    }
  }

  // 그리드 차변대변금액 반영 - 하단 공급금액,부가세금액은 안바뀜
  var rowIdx = ds_slipcontents.getRowPosition();
  let temp_drcrClsCd = ds_slipcontents.getCellData(rowIdx, "drcrClsCd"); // 대변차대구분코드
  let temp_amt = ds_slipcontents.getCellData(rowIdx, "amt"); // 금액

  if (temp_drcrClsCd == "C") {
    ds_slipcontents.setCellData(rowIdx, "cAmt", temp_amt);
    ds_slipcontents.setCellData(rowIdx, "dAmt", 0);
  } else if (temp_drcrClsCd == "D") {
    ds_slipcontents.setCellData(rowIdx, "cAmt", 0);
    ds_slipcontents.setCellData(rowIdx, "dAmt", temp_amt);
  }

  // return $c.gus.decode(drcrClsCd,"D", WebSquare.util.setNumber(amt, "#,##0"), "C", 0, "", 0);
};

//-------------------------------------------------------------------------
// 지급방법 onviewchange
//-------------------------------------------------------------------------
scwin.lc_reqPayMthdCd_onviewchange = function (info) {
  console.log("----- lc_reqPayMthdCd_onviewchange (지급방법 변경 onviewchange) ------------------------------------------------------");
  var row = info.rowIndex;
  var colidx = info.colIndex;
  var colid = info.colId;
  var olddata = info.oldValue;
  var newdata = info.newValue;
  console.log("  row [" + row + "] coldid [" + colidx + "][" + olddata + "] --> [" + newdata + "]");

  //  language=JavaScript for=lc_reqPayMthdCd event=OnSelChange()>
  // 	if (lc_reqPayMthdCd.BindColVal == ELECTRONICDRAFT || lc_reqPayMthdCd.BindColVal == DRAFTCHECK){
  // 		cfEnableObjects([ed_draftDdCntCd])
  // 	} else {
  // 		cfDisableObjects([ed_draftDdCntCd])
  // 	}

  // 	if ( lc_reqPayMthdCd.BindColVal == ELECTRIC_CASH || lc_reqPayMthdCd.BindColVal == TRANSFER ){
  // 		cfEnableObjects([lc_crcCd])  
  // 	}else{
  // 		cfDisableObjects([lc_crcCd])   
  // 	}
  // 	ed_draftDdCntCd.Text = 0;

  // 전자결재현금 (30) || 이체 (20)
  if (lc_reqPayMthdCd.getValue() == scwin.ELECTRONICDRAFT || lc_reqPayMthdCd.getValue() == scwin.DRAFTCHECK) {
    $c.gus.cfEnableObjects($p, [ed_draftDdCntCd]);
    console.log("  ==--== 활성 (어음일수)");
  } else {
    $c.gus.cfDisableObjects($p, [ed_draftDdCntCd]);
    console.log("  ==--== 비활성 (어음일수)");
  }

  // 전자결재현금 (30) || 이체 (20)
  if (lc_reqPayMthdCd.getValue() == scwin.ELECTRIC_CASH || lc_reqPayMthdCd.getValue() == scwin.TRANSFER) {
    $c.gus.cfEnableObjects($p, [lc_crcCd]);
    console.log("  ==--== 활성 (통화코드)");
  } else {
    $c.gus.cfDisableObjects($p, [lc_crcCd]);
    console.log("  ==--== 비활성 (통화코드)");
  }

  // 어음일수 0 처리
  ed_draftDdCntCd.setValue(0);
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

//-------------------------------------------------------------------------
// 콤보데이터 검증
//------------------------------------------------------------------------- 
scwin.f_CheckComboData = function (objCombo, comboTitle) {
  console.log("=== f_CheckComboData (콤보데이터 검증)");

  // KYU_TEST : 기능 삭제
  // if (objCombo.Index == -1 && cfIsNull(objCombo.text) == false) {
  // 	objCombo.Index = objCombo.IndexOfColumn(objCombo.SearchColumn, objCombo.text);
  // 	if (objCombo.Index == -1) {
  // 		$c.gus.cfAlertMsg(MSG_CM_ERR_038, [comboTitle + "코드"]);
  // 		objCombo.Focus();
  // 	}
  // }

  // 부가세대급금이 대변  계정, 부가세예수금이 차변계정  입력시는 사업자번호, 부가세관리부서등 부가세관련 데이터  입력가능
  //	if ((ed_acctCd.text == "1111210" && lc_drcrClsCd.BindColVal == "D")||(ed_acctCd.text == "2100710" && lc_drcrClsCd.BindColVal == "C")){
  if (ed_acctCd.getValue() == "1111210" && lc_drcrClsCd.getValue() == "D" || ed_acctCd.getValue() == "2100710" && lc_drcrClsCd.getValue() == "C") {
    //cfEnableObjects([ed_taxinvcDt,img_taxinvcDt,lc_evidClsCd,lc_deductClsCd,ed_vatDeclarAcctDeptCd,ed_crn, ed_spplyAmt, ed_vatAmt, ed_taxinvcDt, img_taxinvcDt, img_crn]);
    $c.gus.cfEnableObjects($p, [ica_taxinvcDt, lc_evidClsCd, lc_deductClsCd, ed_vatDeclarAcctDeptCd, ed_crn, ed_spplyAmt, ed_vatAmt, btn_crn]);
    console.log("  ==--== 활성 ( 세금계산서일자, 증빙구분코드, 공제구분코드, 부가세귀속부서, 거래처, 공급금액, 부가세금액, 사업자번호돋보기 )");
  } else {
    //cfDisableObjects([ed_taxinvcDt,img_taxinvcDt,lc_evidClsCd,lc_deductClsCd,ed_vatDeclarAcctDeptCd,ed_crn, ed_spplyAmt, ed_vatAmt, ed_taxinvcDt, img_taxinvcDt, img_crn]);
    $c.gus.cfDisableObjects($p, [ica_taxinvcDt, lc_evidClsCd, lc_deductClsCd, ed_vatDeclarAcctDeptCd, ed_crn, ed_spplyAmt, ed_vatAmt, btn_crn]);
    console.log("  ==--== 비활성 ( 세금계산서일자, 증빙구분코드, 공제구분코드, 부가세귀속부서, 거래처, 공급금액, 부가세금액, 사업자번호돋보기 )");
  }
};

//-------------------------------------------------------------------------
//  f_CheckPayYn : 지급체크박스에 따라 지급방법,어음일수,세금계산서일자,지급일자 활성
//                  - 계정명에 <부가세> 문구 없으면 지급일자 널 처리
//                  - 지급체크박스 클릭시에도 발생
//-------------------------------------------------------------------------
// scwin.f_CheckPayYn = async function (info) {
scwin.f_CheckPayYn = async function () {
  var i = ds_slipcontents.getRowPosition();

  // console.log("   f_CheckPayYn --  지급처리여부 점검 이전 ▶ : ["+i+"] payProcYn ["+ds_slipcontents.getCellData(i, "payProcYn")+"]");

  console.log("▶ ▶ ▶ === f_CheckPayYn (지급체크박스에 따라 지급방법,어음일수,세금계산서일자,지급일자 활성)   [" + i + "] payProcYn [" + ds_slipcontents.getCellData(i, "payProcYn") + "]");

  // 지급처리여부가 체크인 상태일 때...
  //if(chb_payProcYn.checked==true){
  // if(cbx_payProcYn.getValue() == 1) {
  if (ds_slipcontents.getCellData(i, "payProcYn") == 1) {
    console.log("  지급 체크박스 체크인 상태 ~~~~~");

    //		cfDisableObjects([ed_reqDt,ed_taxinvcDt, lc_evidClsCd, lc_deductClsCd, lc_zeroTaxClsCd, ed_crn, ed_vatDeclarAcctDeptCd, img_crn]);
    $c.gus.cfDisableObjects($p, [ica_reqDt, ica_taxinvcDt, lc_evidClsCd, lc_deductClsCd, lc_zeroTaxClsCd, ed_crn, ed_vatDeclarAcctDeptCd, btn_crn]);
    console.log("  ==--== 비활성 (지급일자(?) , 세금계산서일자(?) ,증빙구분코드,공제구분코드,영수구분코드,거래처,부가세귀속부서,사업자번호돋보기 )");

    //		cfEnableObjects([lc_reqPayMthdCd, ed_draftDdCntCd, ed_taxinvcDt,img_reqDt,img_taxinvcDt]);
    $c.gus.cfEnableObjects($p, [lc_reqPayMthdCd, ed_draftDdCntCd, ica_taxinvcDt]);
    console.log("  ==--== 활성 (지급방법,어음일수,세금계산서일자)");
  } else {
    console.log("  지급 체크박스 체크 아웃 상태 ~ ~ ~");

    //외상매입금 대변 지급 체크 누락 확인
    if (ed_acctCd.getValue() == "2100110" && lc_drcrClsCd.getValue() == "C") {
      // 외상매입금-일반  && C 대변

      var i = ds_slipcontents.getRowPosition();
      console.log("   f_CheckPayYn --  지급처리여부 점검 이전 ▶ : [" + i + "] payProcYn [" + ds_slipcontents.getCellData(i, "payProcYn") + "]");

      // if ( cbx_payProcYn.getValue() == 1 ) {
      if (ds_slipcontents.getCellData(i, "payProcYn") == 1) {
        console.log("    f_CheckPayYn -  외상매입금 대변 지급 체크 누락 확인 pass ....");
      } else {
        let rtn = await $c.win.confirm($p, "외상매입금 계정에 대해 지급 체크 해제 시 지급내역이 생성되지 않습니다. 이대로 진행 할까요?");
        if (rtn) {} else {
          // cbx_payProcYn.checkAll( true );
          cbx_payProcYn.setValue(1);
          ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "payProcYn", 1);
          console.log("  f_CheckPayYn  --==-- 지급체크박스 체크인 !!!!");
          return false;
        }
      }
    }

    //if (eval(txt_acctNm.value.indexOf("부가세")) <0) {  // 부가세 계정이 아닐경우는 원래 소스를 탄다.
    // var origin = ed_acctNm.getValue();
    var origin = String(ds_slipcontents.getCellData(i, "acctNm"));
    var search = "부가세";
    if (origin.indexOf(search) < 0) {
      // 부가세 계정이 아닐경우는 원래 소스를 탄다.
      // if ( !origin.includes(search) ) {  // 부가세 계정이 아닐경우는 원래 소스를 탄다.
      console.log("  ed_acctNm 내에 <부가세> 문구 존재 안함 [" + origin + "] ----- ----- -----");

      // ed_reqDt.text ="";
      // lc_reqPayMthdCd.BindColVal="";
      // ed_draftDdCntCd.text="";

      // KYU_ISSUE : @@
      // ica_reqDt.setValue("");        // 지급일자

      // KYU_NEW : 추가 바인딩
      var row = ds_slipcontents.getRowPosition();
      ds_slipcontents.setCellData(i, "reqDt", ""); // 지급일자

      console.log("  [" + i + "] reqDt (지급일자) 널 처리 [" + ds_slipcontents.getCellData(i, "reqDt") + "]");

      // KYU_TEST : ds 에 직접 입력
      // lc_reqPayMthdCd.setValue("");  // 지급방법
      ds_slipcontents.setCellData(i, "reqPayMthdCd", "");
      ed_draftDdCntCd.setValue(""); // 어음일수
      ds_slipcontents.setCellData(i, "draftDdCntCd", "");

      //			cfDisableObjects([ed_reqDt,lc_reqPayMthdCd,ed_draftDdCntCd,ed_taxinvcDt,img_reqDt,img_taxinvcDt, lc_evidClsCd, lc_deductClsCd, lc_zeroTaxClsCd, ed_crn, ed_vatDeclarAcctDeptCd, ed_taxinvcDt, img_crn]);
      $c.gus.cfDisableObjects($p, [ica_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd, ica_taxinvcDt, lc_evidClsCd, lc_deductClsCd, lc_zeroTaxClsCd, ed_crn, ed_vatDeclarAcctDeptCd, btn_crn]);
      console.log("  ==--== 비활성 ( 지급일자, 지급방법, 어음일수, 세금계산서일자, 증빙구분코드, 공제구분코드, 영수구분코드, 거래처, 귀속부서코드, 사업자번호돋보기 )");
    }

    // 부가세대급금이 대변  계정, 부가세예수금이 차변계정  입력시는 사업자번호, 부가세관리부서등 부가세관련 데이터  입력가능
    // if ((ed_acctCd.text == "1111210" && lc_drcrClsCd.BindColVal == "D")||
    //     (ed_acctCd.text == "2100710" && lc_drcrClsCd.BindColVal == "C"))  // 부가세대급금-일반 && D차변 || 부가세예수금-일반 && C대변

    if (ds_slipcontents.getCellData(i, "acctCd") == "1111210" && ds_slipcontents.getCellData(i, "drcrClsCd") == "D" || ds_slipcontents.getCellData(i, "acctCd") == "2100710" && ds_slipcontents.getCellData(i, "drcrClsCd") == "C")
      // 부가세대급금-일반 && D차변 || 부가세예수금-일반 && C대변
      {
        //			cfEnableObjects([ed_taxinvcDt,img_taxinvcDt,lc_evidClsCd,lc_deductClsCd,ed_vatDeclarAcctDeptCd,ed_crn, ed_spplyAmt, ed_vatAmt, ed_taxinvcDt, img_taxinvcDt, img_crn]);
        $c.gus.cfEnableObjects($p, [ica_taxinvcDt, lc_evidClsCd, lc_deductClsCd, ed_vatDeclarAcctDeptCd, ed_crn, ed_spplyAmt, ed_vatAmt, btn_crn, btn_vatDeclarAcctDeptCd]);
        console.log("  ==--== 활성 (세금계산서일자,지급방법,공제구분코드,부가세관리부서,거래처,  공급금액,부가세금액,  사업자번호돋보기 , 부가세관리부서돋보기(NEW) ) - f_CheckPayYn");
      } else {
      //			cfDisableObjects([ed_taxinvcDt,img_taxinvcDt,lc_evidClsCd,lc_deductClsCd,ed_vatDeclarAcctDeptCd,ed_crn, ed_spplyAmt, ed_vatAmt, ed_taxinvcDt, img_taxinvcDt, img_crn]);
      $c.gus.cfDisableObjects($p, [ica_taxinvcDt, lc_evidClsCd, lc_deductClsCd, ed_vatDeclarAcctDeptCd, ed_crn, ed_spplyAmt, ed_vatAmt, btn_crn, btn_vatDeclarAcctDeptCd]);
      console.log("  ==--== 비활성 (세금계산서일자,지급방법,공제구분코드,부가세관리부서,거래처,  공급금액,부가세금액,  사업자번호돋보기  , 부가세관리부서돋보기(NEW) ) - f_CheckPayYn");
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 지급처리여부셋팅
//------------------------------------------------------------------------- 
scwin.f_PayYn = async function () {
  var i = ds_slipcontents.getRowPosition();
  console.log("=== f_PayYn (지급처리여부)   row [" + i + "]  txt_payAcctCd (지급계정) [" + scwin.txt_payAcctCd + "]  -------------------------------------");

  // 지급처리계정 추가(20060411)
  //	if(txt_payAcctCd.value!="" && lc_drcrClsCd.BindColVal=="<%=ACConstants.CREDIT%>" && ed_acctCd.text != "1110710"){
  // "C" (대변), 미수금-일반 아님
  if (ds_slipcontents.getCellData(i, "payAcctCd") != "" && ds_slipcontents.getCellData(i, "drcrClsCd") == ACConstants.CREDIT && ed_acctCd.getValue() != "1110710") {
    $c.gus.cfEnableObjects($p, [cbx_payProcYn]); // 지급
    console.log("  ==--== 활성 (지급체크박스)");

    //}else if(txt_payAcctCd.value!="" && lc_drcrClsCd.BindColVal=="<%=ACConstants.DEBIT%>" && ed_acctCd.text == "1110710"){
    // "D" (차변)  미수금-일반
  } else if (ds_slipcontents.getCellData(i, "payAcctCd") != "" && ds_slipcontents.getCellData(i, "drcrClsCd") == ACConstants.DEBIT && ed_acctCd.getValue() == "1110710") {
    $c.gus.cfEnableObjects($p, [cbx_payProcYn]); // 지급
    console.log("  ==--== 활성 (지급체크박스)");
  } else {
    // cbx_payProcYn.checkAll(false);  // 지급 체크해제
    cbx_payProcYn.setValue(0); // 지급 체크해제
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "payProcYn", 0);
    console.log("  --==-- 지급체크박스 해제  ????");

    //cfDisableObjects([chb_payProcYn,ed_reqDt,lc_reqPayMthdCd,ed_draftDdCntCd,ed_taxinvcDt,img_reqDt,img_taxinvcDt, ed_paymentPrd,img_paymentPrd]);
    $c.gus.cfDisableObjects($p, [cbx_payProcYn, ica_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd, ica_taxinvcDt, ica_paymentPrd]);
    console.log("  ==--== 비활성 (지급일자,지급방법,어음일수,세금계산서일자,지로납부기한)");
  }

  //외상매입금 대변 지급 체크 누락 확인
  if (ds_slipcontents.getCellData(i, "acctCd") == "2100110" && ds_slipcontents.getCellData(i, "drcrClsCd") == "C") {
    // 외상매입금-일반, "C" (대변)
    $c.gus.cfDisableObjects($p, [cbx_payProcYn]);
    console.log("  외상매입금-일반 & 대변 ==--== 비활성 (지급체크박스)");
  }
  console.log("=== f_PayYn (지급처리여부)   END");
  return true;
};

//-------------------------------------------------------------------------
// 계정별 차대구분 조정
// 대체전표입력화면에서 1110530-업무가지급발생(차변)차단, 
// 가지급신청(가지급선급금입력) 화면에서 처리하기로 함 - 2014 08 05 이경희
//-------------------------------------------------------------------------
scwin.f_AcctCdCheck = async function () {
  console.log("=== f_AcctCdCheck (계정별 차대구분 조정)");
  if (scwin.isSubCompany == false) {
    // 자회사 아님
    if (lc_drcrClsCd.getValue() == "D" && ed_acctCd.getValue() == "1110530") {
      // 차변, 단기대여금-업무가지급금(일반)
      await $c.win.alert($p, "[1110530] 단기대여금-업무가지급금(일반) 계정을\n[차변]으로 선택할 수 없습니다. \n가지급금선급금입력 화면에서 신청하세요.");
      // ed_acctCd.text  = "";
      // txt_acctNm.value = "";
      // txt_mgntNm.value ="";
      // ed_acctCd.hidVal ="";
      // txt_payAcctCd.value ="";
      // ed_acctCd.focus();

      ed_acctCd.setValue("");
      ed_acctNm.setValue("");
      ed_mgntNm.setValue(""); // 관리번호명
      scwin.ed_acctCd_hidVal = "";
      scwin.txt_payAcctCd = "";
      udc_acctCd.focus;
      return false;
    }
  }
  if (scwin.isSubCompany == false) {
    if (lc_drcrClsCd.getValue() == "D" && ed_acctCd.getValue() == "1110410") {
      // 차변, 외상매출금-일반
      await $c.win.alert($p, "[1110410] 외상매출금-일반 계정을\n[차변]으로 선택할 수 없습니다.");
      ed_acctCd.setValue("");
      ed_acctNm.setValue("");
      ed_mgntNm.setValue(""); // 관리번호명
      scwin.ed_acctCd_hidVal = "";
      scwin.txt_payAcctCd = "";
      udc_acctCd.focus;
      return false;
    }
  }
};

//------------------------------------------------------------------------
// 계정코드, 차/대변을 가지고 채권채무선수금 정리대상 계정인지 체크하는 함수
//------------------------------------------------------------------------
scwin.f_checkSettle = async function (r_acctCd, r_drcrClsCd) {
  console.log("=== ▣ ▣ ▣ ▣  f_checkSettle (채권채무선수금 정리대상 계정여부 체크)  acct[" + r_acctCd + "] drcr[" + r_drcrClsCd + "] ▶▶");

  // ds_settleAccount.DataId = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC"
  // 								     		+ "&queryId=retrieveSettleInfo&param1="+r_acctCd
  // 								     		+ "&param2="+r_drcrClsCd;
  // ds_settleAccount.Reset();

  ds_commonCode.setEmptyValue();
  ds_settleAccount.setJSON([]);
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
  let e = await $c.sbm.execute($p, sbm_checkSettle);

  // console.log("▷ sbm_checkSettle_submitdone (f_checkSettle 후처리 submitdone)");

  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  if (e.responseJSON.GAUCE) {
    ds_settleAccount.setJSON(e.responseJSON.GAUCE);
  }

  //if(ds_settleAccount.NameValue(1,"col1") == "N/A" || typeof(ds_settleAccount.NameValue(1,"col1")) == "undefined"){
  if (ds_settleAccount.getCellData(0, "col1") == "N/A" || typeof ds_settleAccount.getCellData(0, "col1") == "undefined" || $c.gus.cfIsNull($p, ds_settleAccount.getCellData(0, "col1"))) {
    //		txt_settleClsCd.value = "0";
    //		txt_method.value 	  = "";
    scwin.txt_settleClsCd = "0";
    scwin.txt_method = "";

    //ds_slipcontents.NameValue(ds_slipcontents.RowPosition,"settleClsCd") = txt_settleClsCd.value;  //정리구분 셋팅
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "settleClsCd", scwin.txt_settleClsCd); //정리구분 셋팅

    console.log("=== ▣ ▣  정리대상 아님!!!!   txt_settleClsCd [" + scwin.txt_settleClsCd + "][" + ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "settleClsCd") + "]  txt_method [" + scwin.txt_method + "]  지급수단 = null");

    // console.log("=== f_checkSettle END (false)  지급수단 = null");
    return false;
  } else {
    //txt_settleClsCd.value = ds_settleAccount.NameValue(1,"col3");
    scwin.txt_settleClsCd = ds_settleAccount.getCellData(0, "col3");
    scwin.txt_method = "채권정리";

    //ds_slipcontents.NameValue(ds_slipcontents.RowPosition,"settleClsCd") = txt_settleClsCd.value;  //정리구분 셋팅
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "settleClsCd", scwin.txt_settleClsCd); //정리구분 셋팅

    console.log("=== ▣ ▣  정리대상임 !!!!!!!  txt_settleClsCd [" + scwin.txt_settleClsCd + "][" + ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "settleClsCd") + "]  txt_method [" + scwin.txt_method + "]  지급수단 = 채권정리");
    // console.log("=== f_checkSettle END (true)  지급수단 = 채권정리");
    return true;
  }
};

// retrieveAcctCdInfo
//         , A.MGNT_NO_CD                 AS COL5 /* 05.관리번호코드     */
//         , TO_CHAR(A.CLNT_MGNT_YN    )  AS COL6 /* 06.거래처관리코드   */
//         , TO_CHAR(A.TERM_MGNT_YN    )  AS COL7 /* 07.기간관리여부     */
//         , TO_CHAR(A.EMP_MGNT_YN     )  AS COL8 /* 08.사원관리여부     */
//         , TO_CHAR(A.DT_MGNT_YN      )  AS COL9 /* 09.일자관리여부     */

//-------------------------------------------------------------------------
//  계정조회시화면셋팅
//  r_mgntCd - 관리번호
//  r_clntMgntYn - 거래처여부
//  r_termMgntYn - 기간관리여부
//  r_empMgntYn  - 사원관리여부
//  r_mgntNm     - 관리사원명
//  r_dtMgntYn   - 일자관리여부
//  r_payAcctCd  - 지급계정
//
//
//  - 기존
//  r_mgntCd     - 관리번호
//  r_termMgntYn - 기간관리여부
//  r_clntMgntYn - 거래처여부
//  r_empMgntYn  - 사원관리여부
//  r_mgntNm     - 관리사원명
//  r_dtMgntYn   - 일자관리여부
//-------------------------------------------------------------------------
scwin.f_AcctCd = async function (r_mgntCd, r_clntMgntYn, r_termMgntYn, r_empMgntYn, r_mgntNm, r_dtMgntYn, r_payAcctCd) {
  console.log("=== ▷▷▷ f_AcctCd (계정조회시화면셋팅)  [" + ds_slipcontents.getRowPosition() + "][" + ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "acctCd") + "] ds지급처리여부[" + ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "payProcYn") + "]  *관리번호 [" + r_mgntCd + "] 거래처[" + r_clntMgntYn + "] 기간[" + r_termMgntYn + "] 사원[" + r_empMgntYn + "] *사원명(관리번호명)[" + r_mgntNm + "] 일자[" + r_dtMgntYn + "] 지급계정[" + r_payAcctCd + "]");

  // txt_termMgntYn.value = r_termMgntYn;
  // txt_clntMgntYn.value = r_clntMgntYn;
  // txt_empMgntYn.value  = r_empMgntYn;
  // txt_dtMgntYn.value   = r_dtMgntYn;
  // txt_payAcctCd.value  = r_payAcctCd;

  scwin.txt_termMgntYn = r_termMgntYn;
  scwin.txt_clntMgntYn = r_clntMgntYn;
  scwin.txt_empMgntYn = r_empMgntYn;
  scwin.txt_dtMgntYn = r_dtMgntYn;
  scwin.txt_payAcctCd = r_payAcctCd;
  console.log("      지 급 계 정 (r_payAcctCd)   txt_payAcctCd [" + scwin.txt_payAcctCd + "]");

  // 관리번호가 널 0 이 아니거나, 관리번호명이 널이 아닐 때
  if (r_mgntCd != "" && r_mgntCd != "0" || r_mgntNm != "") {
    // txt_mgntNm.value = r_mgntNm;
    // txt_mgntNo.validExp="관리번호:no:maxByteLength=20";
    ed_mgntNm.setValue(r_mgntNm);
    console.log("   관리번호명에 r_mgntNm [" + r_mgntNm + "] 복사됨.  ed_mgntNm [" + ed_mgntNm.getValue() + "] ");
    ed_mgntNo.setMandatory(false);
    $c.gus.cfEnableObj($p, ed_mgntNo, true);
    $c.gus.cfEnableObj($p, ed_mgntNm, false);
    console.log("  ▣ ▣  f_AcctCd - f_checkSettle 호출");

    //채권채무정리를 위한 추가 2013.10.24
    let rtn1 = await scwin.f_checkSettle(ed_acctCd.getValue(), lc_drcrClsCd.getValue());
    console.log("  ▣ ▣  f_AcctCd - f_checkSettle  rtn1 [" + rtn1 + "]");
    if (rtn1 && ed_acctCd.getValue().trim() != "") {
      //cfEnableObjects([img_setlMthd]);
      $c.gus.cfEnableObjects($p, [btn_resetSettleNo, btn_setlMthd]);
      console.log("  ==--== 활성 (정산방법)");

      //cfDisableObjects([txt_refNo,txt_mgntNm,txt_method,txt_settleClsCd,txt_mgntNo]);
      //$c.gus.cfDisableObjects([ed_refNo,ed_mgntNm,  scwin.txt_method,scwin.txt_settleClsCd,  ed_mgntNo]);  // 전역변수 넣으면 오류 발생 - TypeError: obj.setDisabled is not a function
      $c.gus.cfDisableObjects($p, [ed_refNo, ed_mgntNm, ed_mgntNo]);
      console.log("  ==--== 비활성 ( 참조번호,관리번호명(앞), 관리번호(뒤) ) 전역 scwin.txt_method,scwin.txt_settleClsCd");
    } else {
      //정리대상이 아닌경우 popup에서 내려받은값 초기화
      if (scwin.txt_settleClsCd != "0" || scwin.txt_settleClsCd != "") {
        console.log("    f_AcctCd_초기화 진행!!!");
        //f_initSettle(ds_slipcontents.RowPosition,'2');
        scwin.f_initSettle(ds_slipcontents.getRowPosition(), '2');
      }
      $c.gus.cfEnableObj($p, ed_mgntNo, true);
      console.log("  ==--== 활성 (관리번호(뒤))");
      //cfDisableObjects([txt_refNo,txt_method,img_setlMthd,txt_settleClsCd]);
      $c.gus.cfDisableObjects($p, [ed_mgntNm, ed_refNo, btn_resetSettleNo, btn_setlMthd]);
      console.log("  ==--== 비활성 ( 관리번호명(앞),지급/채권번호돋보기 )  전역 scwin.txt_method,scwin.txt_settleClsCd");
    }
  } else {
    // txt_mgntNo.value = "";
    // txt_mgntNm.value = "";			
    // txt_mgntNo.validExp="관리번호:no:maxByteLength=20"
    // cfEnableObj(txt_mgntNo, false); 
    // cfEnableObj(txt_mgntNm, false); 

    ed_mgntNo.setValue("");
    ed_mgntNm.setValue("");
    //ed_mgntNo.validExp="관리번호:no:maxByteLength=20"
    ed_mgntNo.setMandatory(false);
    $c.gus.cfEnableObj($p, ed_mgntNo, false);
    $c.gus.cfEnableObj($p, ed_mgntNm, false);
    //채권채무정리를 위한 추가 2013.10.24
    //cfDisableObjects([txt_refNo,txt_method,img_setlMthd,txt_settleClsCd]);
    $c.gus.cfDisableObjects($p, [ed_refNo, btn_resetSettleNo, btn_setlMthd]);
    console.log("  ==--== 비활성화 (참조번호,지급/채권번호돋보기 )  전역 scwin.txt_method,scwin.txt_settleClsCd");
  }

  // 거래처여부
  if (r_clntMgntYn == "1") {
    //ed_mgntClntNo.validExp="거래처:yes:format=000000"
    ed_mgntClntNo.setMandatory(true);
    $c.gus.cfEnableObjects($p, [ed_mgntClntNo, btn_mgntClntNo]);
    console.log("  ==--== 활성 ( 거래처번호,거래처번호돋보기 )");
    ed_mgntClntNo.setMandatory(true);
  }
  // 20110704 거래처여부 예외처리 by kimseok 
  // 예외적 상황으로, 계정이 가지급 에 해당하는 경우는 거래처 항목을 활성화 
  // 가지급 경우( 계정번호:명칭 1110530:단기대여금-업무가지급금(일반),1110531:단기대여금-업무가지급금(급여), 1110540:단기대여금-매표가지급금 )
  else if (ed_acctCd.getValue() == '1110530' || ed_acctCd.getValue() == '1110531' || ed_acctCd.getValue() == '1110540') {
    //cfEnableObjects([ed_mgntClntNo, img_mgntClntNo, ed_mgntEmpNo]);
    $c.gus.cfEnableObjects($p, [ed_mgntClntNo, btn_mgntClntNo, ed_mgntEmpNo]);
    console.log("  ==--== 활성 ( 거래처번호, 거래처번호돋보기, 사원번호 )");
  } else {
    //ed_mgntClntNo.text="";
    //txt_mgntClntNm.value="";
    //ed_mgntClntNo.validExp="거래처:no:format=000000"
    ed_mgntClntNo.setMandatory(false);

    //cfDisableObjects([ed_mgntClntNo, img_mgntClntNo]);
    $c.gus.cfDisableObjects($p, [ed_mgntClntNo, btn_mgntClntNo]);
    console.log("  ==--== 비활성 ( 거래처번호, 거래처번호돋보기 )");
  }

  // 사원관리여부
  if (r_empMgntYn == "1") {
    //			ed_mgntEmpNo.validExp="사원번호:yes:format=000000"
    //cfEnableObjects([ed_mgntEmpNo, img_mgntEmpNo]);
    ed_mgntEmpNo.setMandatory(true);
    cfEnableObjects([ed_mgntEmpNo, btn_mgntEmpNo]);
    console.log("  ==--== 활성 (사원번호,사원번호돋보기)");
  }
  // 20110704 거래처여부 예외처리 by kimseok 
  // 예외적 상황으로, 계정이 가지급 에 해당하는 경우는 사원번호  항목을 활성화 
  // 가지급 경우( 계정번호:명칭 1110530:단기대여금-업무가지급금(일반),1110531:단기대여금-업무가지급금(급여), 1110540:단기대여금-매표가지급금 )
  else if (ed_acctCd.getValue() == '1110530' || ed_acctCd.getValue() == '1110531' || ed_acctCd.getValue() == '1110540') {
    //cfEnableObjects([ed_mgntEmpNo, img_mgntEmpNo]);
    $c.gus.cfEnableObjects($p, [ed_mgntEmpNo, btn_mgntEmpNo]);
    console.log("  ==--== 활성화 (사원번호,사원번호돋보기)");
  } else {
    // ed_mgntEmpNo.text="";
    // txt_mgntEmpNm.value="";
    // ed_mgntEmpNo.validExp="사원번호:no:format=000000"
    // cfDisableObjects([ed_mgntEmpNo, img_mgntEmpNo]);
    ed_mgntEmpNo.setValue("");
    ed_mgntEmpNm.setValue("");
    ed_mgntEmpNo.setMandatory(false);
    $c.gus.cfDisableObjects($p, [ed_mgntEmpNo, btn_mgntEmpNo]);
    console.log("  ==--== 비활성 (사원번호,사원번호돋보기 )");
  }

  // 일자관리여부  	
  //alert(parseInt(r_dtMgntYn));
  if (parseInt(r_dtMgntYn) == "1") {
    //ed_mgntDt.validExp="관리일자:yes:date=YYYYMMDD";  // 원래 삭제
    // cfEnableObjects([ed_mgntDt, img_mgntDt]);
    ica_mgntDt.setMandatory(true);
    $c.gus.cfEnableObjects($p, [ica_mgntDt]);
    console.log("  ==--== 활성 (관리일자 )");
  } else {
    ica_mgntDt.setValue("");
    //	ed_mgntDt.validExp="관리일자:no:date=YYYYMMDD";  // 원래 삭제
    // cfDisableObjects([ed_mgntDt, img_mgntDt]);
    ica_mgntDt.setMandatory(false);
    $c.gus.cfDisableObjects($p, [ica_mgntDt]);
    console.log("  ==--== 비활성 (관리일자)");
  }

  // 외상매출금 1110410, 차변 DEBIT
  //	if (ed_acctCd.Text == '<%=ACConstants.ACCTCD_TRUST_SELL%>' && lc_drcrClsCd.BindColVal == '<%=ACConstants.DEBIT%>' ) {
  if (ed_acctCd.getValue() == ACConstants.ACCTCD_TRUST_SELL && lc_drcrClsCd.getValue() == ACConstants.DEBIT) {
    $c.gus.cfEnableObjects($p, [cbx_recvProcYn]);
    console.log("  ==--== 활성 (채권체크박스)");
    // cbx_recvProcYn.checkAll(true);
    cbx_recvProcYn.setValue(1);
    ds_slipcontents.setCellData(row, "recvProcYn", 1);
    // ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(),"recvProcYn", 1);

    console.log("   f_AcctCd --==-- 채권체크박스 체크인 !!!!  - 외상매출금 1110410, 차변 DEBIT");
  } else {
    $c.gus.cfDisableObjects($p, [cbx_recvProcYn]);
    console.log("  ==--== 비활성 (채권체크박스)");
  }
  console.log("   f_AcctCd - f_PayYn");

  // 지급계정셋팅 - 지급처리여부셋팅
  let rtn = await scwin.f_PayYn();

  // KYU_NEW
  if (!rtn) return false;
  console.log("=== ▷▷▷ f_AcctCd (계정조회시화면셋팅)  END ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
};

//-------------------------------------------------------------------------
// f_initSettle
//-------------------------------------------------------------------------
scwin.f_initSettle = async function (RowPos, flag) {
  console.log("=== f_initSettle (정리방법 초기화)");
  var printMsg = "";
  await scwin.f_resetSettleNo();

  // txt_method.value 		= ""; //정리방법표시 초기화
  // txt_settleClsCd.value 	= "0";
  // printMsg = flag == "1" ? "차/대변" : "계정";

  scwin.txt_method = ""; // 정리방법표시 초기화
  scwin.txt_settleClsCd = "0";
  printMsg = flag == "1" ? "차/대변" : "계정";
};

//-------------------------------------------------------------------------
// f_resetSettleNo
//-------------------------------------------------------------------------
scwin.f_resetSettleNo = async function () {
  console.log("=== f_resetSettleNo (정산자료 초기화 - stl...)");

  // 정리참조번호 세팅후 삭제시 이벤트 처리
  if (ds_slipcontents.getCellData(ds_slipcontents.getRowPosition(), "stlOutbrNo") != "") {
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlOutbrNo", "");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlSlipNo", "");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlOutbrNo", "");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlClntNo", "");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlClntNm", "");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlAcctDeptCd", "");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlAcctDeptNm", "");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlAcctCd", "");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlAcctNm", "");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlAmt", "");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlRamt", "");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlAmtFcrc", "");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlRamtFcrc", "");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlCrcCd", "");
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "stlExchRt", "");
    ed_refNo.setValue("");
  }
};

// @@ ====== 저장 ============================================================================== //

//-------------------------------------------------------------------------
// 발행 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  console.log("=== f_Save (발행) ==================================================");

  // if(ds_slip.isUpdated==false && ds_slipcontents.isUpdated==false){

  if (ds_slip.getModifiedIndex().length == 0 && ds_slipcontents.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return false;
  }
  var CountRow = ds_slipcontents.getTotalRow();

  // if(ds_slipcontents.CountRow==0){
  if (CountRow == 0) {
    await $c.win.alert($p, "데이타가 없습니다.");
    return;
  }
  var countAcctCd1 = 0;
  var countAcctCd2 = 0;

  //for(var i = 1;i<=ds_slipcontents.CountRow;i++){
  for (var i = 0; i < CountRow; i++) {
    var k = i + 1; // 문구용 순번

    // 통장번호 필수 입력 체크(2017.02.27 추가)
    //if(ds_slipcontents.NameValue(i,"mgntNo") == "" && ds_slipcontents.NameValue(i,"mgntNm") == "통장번호"){
    if (ds_slipcontents.getCellData(i, "mgntNo") == "" && ds_slipcontents.getCellData(i, "mgntNm") == "통장번호") {
      await $c.win.alert($p, "통장번호는 필수로 입력 하여야 합니다");
      //txt_mgntNo.focus();
      ed_mgntNo.focus;
      return;
    }

    // 부가세 대급금이면서 차변이거나, 부가세예수금이면서 대변일 경우 이 체크로직을 탄다.
    if (ds_slipcontents.getCellData(i, "acctCd") == "1111210" && ds_slipcontents.getCellData(i, "drcrClsCd") == "D" || ds_slipcontents.getCellData(i, "acctCd") == "2100710" && ds_slipcontents.getCellData(i, "drcrClsCd") == "C") {
      // 1111210 : 부가세대급금-일반, 2100710 : 부가세예수금-일반

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
        await $c.win.alert($p, "부가세귀속부서 : " + ds_slipcontents.getCellData(i, "vatDeclarAcctDeptCd") + "   귀속부서 : " + ds_slipcontents.getCellData(i, "acctDeptCd"));
        await $c.win.alert($p, "부가세 계정일때는 부가세귀속부서와 귀속부서가 동일해야 합니다.");
        return;
      }
      if (ds_slipcontents.getCellData(i, "taxinvcDt") == "") {
        await $c.win.alert($p, "부가세 계정일때는 세금계산서일자를 선택하여야 합니다");
        return;
      }

      // 2025-11-05 : 필요코드 모음
      // TB_FI010 (증빙구분) 의 EVID_CLS_CD (증빙구분코드) - 10: 세금계산서, 11: 세금계산서기타, 12: 고속면세매출, 20: 영세율세금계산서, 30: 계산서, 40: 법인카드, 41: 신용카드, 50: 개인카드
      //                                                  , 60: 현금영수증, 70: 영수증, 80: 내부매출, 99: 기타
      // FI005(공제구분) - 1: 공제, 2: 불공제

      // 부가세금액 필드추가 및 부가세 관련 개선에 대해 체크로직 추가
      // 전표발행금액 필수 :  세금계산서-공제,  법인카드-공제,  개인카드-공제,  현금영수증-공제
      if ((ds_slipcontents.getCellData(i, "evidClsCd") == "10" || ds_slipcontents.getCellData(i, "evidClsCd") == "11" || ds_slipcontents.getCellData(i, "evidClsCd") == "40" || ds_slipcontents.getCellData(i, "evidClsCd") == "50" || ds_slipcontents.getCellData(i, "evidClsCd") == "60") && ds_slipcontents.getCellData(i, "deductClsCd") == "1") {
        if (ds_slipcontents.getCellData(i, "amt") == 0) {
          // 전표발행금액
          await $c.gus.cfAlertMsg($p, "금액을 입력해주세요.");
          return false;
        }
      }

      // 금액 0원필수 : 세금계산서-불공제, 영세율세금계산서, 계산서, 법인카드-불공제, 개인카드-불공제, 현금영수증-불공제, 영수증, 기타
      if (ds_slipcontents.getCellData(i, "evidClsCd") == "10" && ds_slipcontents.getCellData(i, "deductClsCd") == "2" || ds_slipcontents.getCellData(i, "evidClsCd") == "11" && ds_slipcontents.getCellData(i, "deductClsCd") == "2" || ds_slipcontents.getCellData(i, "evidClsCd") == "20" || ds_slipcontents.getCellData(i, "evidClsCd") == "30" || ds_slipcontents.getCellData(i, "evidClsCd") == "40" && ds_slipcontents.getCellData(i, "deductClsCd") == "2" || ds_slipcontents.getCellData(i, "evidClsCd") == "50" && ds_slipcontents.getCellData(i, "deductClsCd") == "2" || ds_slipcontents.getCellData(i, "evidClsCd") == "60" && ds_slipcontents.getCellData(i, "deductClsCd") == "2" || ds_slipcontents.getCellData(i, "evidClsCd") == "70" || ds_slipcontents.getCellData(i, "evidClsCd") == "99") {
        if (ds_slipcontents.getCellData(i, "amt") != 0) {
          // 전표발행금액
          await $c.gus.cfAlertMsg($p, k + "행의 " + ds_slipcontents.getCellData(i, "acctCd") + "계정의 금액은 0원이어야 합니다.");
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
          await $c.gus.cfAlertMsg($p, i + "행의 " + ds_slipcontents.getCellData(i, "acctCd") + "계정의 부가세금액은 0원이어야 합니다.");
          return false;
        }
      }

      // 영세율세금계산서 일때 영세구분 필수
      if (ds_slipcontents.getCellData(i, "evidClsCd") == "20" && ds_slipcontents.getCellData(i, "zeroTaxClsCd") == "") {
        await $c.gus.cfAlertMsg($p, k + "행의 증빙종류가 영세율세금계산서 일때 영세구분을 선택해주세요.");
        return false;
      }

      //국제물류 세금계간서서 비고란 변경을 위해 부가세 계정 적용 변경
      if (scwin.txt_taxInvcRmk2 != "") {
        //ds_slipcontents.nameValue(i, "summary") = txt_taxInvcRmk2.value;
        ds_slipcontents.setCellData(i, "summary", scwin.txt_taxInvcRmk2);
      } else {
        if (scwin.txt_taxInvcRmk1 != "") {
          //ds_slipcontents.nameValue(i, "summary") = txt_taxInvcRmk1.value;
          ds_slipcontents.setCellData(i, "summary", scwin.txt_taxInvcRmk1);
        }
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

    //외상매입금 대변 지급 체크 누락 확인
    if (ds_slipcontents.getCellData(i, "acctCd") == "2100110" && ds_slipcontents.getCellData(i, "drcrClsCd") == "C") {
      // 외상매입금-일반

      // KYU_TEST : 지급체크여부 직접 비교
      // if (chb_payProcYn.checked) {
      // if (cbx_payProcYn.getValue() == 1 ) {

      console.log("   f_Save --  지급처리여부 [" + i + "] payProcYn [" + ds_slipcontents.getCellData(i, "payProcYn") + "]");
      if (ds_slipcontents.getCellData(i, "payProcYn") == 1) {
        console.log("    외상매입금 대변 지급 체크 누락 확인 pass ....");
      } else {
        // if( cfConfirmMsg("외상매입금 계정에 대해 지급이 체크되지 않았습니다. 체크 누락 시 지급내역이 생성되지 않습니다. 이대로 진행 할까요?") == true ) {

        let rtn = await $c.win.confirm($p, "외상매입금 계정에 대해 지급이 체크되지 않았습니다. 체크 누락 시 지급내역이 생성되지 않습니다. 이대로 진행 할까요?");
        if (rtn) {} else {
          return false;
        }
      }
    }
  }
  if (countAcctCd1 > 0 && countAcctCd2 > 0) {} else {
    if (countAcctCd1 > 0) {
      // if( cfConfirmMsg("선급법인세-법인세분과 선급법인세-지방소득세분 중 한 계정만 선택하셨습니다. 이대로 진행할까요?")==true) {

      let rtn = await $c.win.confirm($p, "선급법인세-법인세분과 선급법인세-지방소득세분 중 한 계정만 선택하셨습니다. 이대로 진행할까요?");
      if (rtn) {} else {
        return false;
      }
    } else if (countAcctCd2 > 0) {
      // if( cfConfirmMsg("선급법인세-법인세분과 선급법인세-지방소득세분 중 한 계정만 선택하셨습니다. 이대로 진행할까요?")==true) {

      let rtn = await $c.win.confirm($p, "선급법인세-법인세분과 선급법인세-지방소득세분 중 한 계정만 선택하셨습니다. 이대로 진행할까요?");
      if (rtn) {} else {
        return false;
      }
    }
  }

  // 필수 입력사항 체크
  // if (!cfCheckMandatory())
  //     return;
  let rtnv = await scwin.f_Validation();
  if (rtnv) {
    // 차변,대변 체크
    var Dsum = 0;
    var Csum = 0;
    var adjmClsCnt = 0;

    //for(i=1; i<=ds_slipcontents.CountRow; i++){
    for (i = 0; i < ds_slipcontents.getTotalRow(); i++) {
      if (ds_slipcontents.getCellData(i, "drcrClsCd") == "D") {
        Dsum = Dsum + parseInt(ds_slipcontents.getCellData(i, "amt"));
      }
      if (ds_slipcontents.getCellData(i, "drcrClsCd") == "C") {
        Csum = Csum + parseInt(ds_slipcontents.getCellData(i, "amt"));
      }
      if (ds_slipcontents.getCellData(i, "adjmClsCd") == "4") {
        adjmClsCnt = adjmClsCnt + 1;
      }
    }
    console.log("  --- Dsum(차변합계) [" + Dsum + "] Csum(대변합계) [" + Csum + "]");
    if (Math.round(Dsum) != Math.round(Csum)) {
      //cfAlertMsg(MSG_CM_ERR_055,Array("차변과 대변금액"));
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "차변과 대변금액"));
      ed_amt.focus();
      return;
    }

    //if (adjmClsCnt > 0 && ds_provHeader.CountRow <= 0){
    if (adjmClsCnt > 0 && ds_provHeader.getTotalRow() <= 0) {
      await $c.win.alert($p, "가지급정리내역이 없습니다. 정리금액을 입력하세요.");
      return false;
    }
    var chkPayAmt = 0;
    var chkSuspenseAmt = 0;
    var payAmt = 0;
    var suspenseAmt = 0;

    // ------------------------------		
    // var slipDate = new Date(ed_slipDt.text.substring(0, 4), ed_slipDt.text.substring(4, 6), ed_slipDt.text.substring(6, 8));
    // slipDate : Wed Oct 29 00:00:00 UTC+0900 2025
    // var slipBfLast = new Date( slipDate.getFullYear(),  (slipDate.getMonth() - 1), 0);
    // slipBfLast : Sun Aug 31 00:00:00 UTC+0900 2025

    // slipBfMm : 08

    // slipBfMm += 1;			
    // slipBfMm = slipBfMm < 10 ? "0" + slipBfMm : slipBfMm;
    // var slipBfDd = slipBfLast.getDate() < 10 ? "0" + slipBfLast.getDate() : slipBfLast.getDate();
    //var lastDate = String(slipBfLast.getFullYear()) + slipBfMm + slipBfDd;

    // lastDate : 20250831  (이전달 말일 추출)

    // getLastDateOfMonth 사용
    // ------------------------------

    var slipDate = ica_slipDt.getValue();

    //var lastDate = slipDate.substring(0, 6) + new Date(scwin.slipDt.substring(0,4),scwin.slipDt.substring(4,2),0).getDate();
    var lastDate = $c.date.getDateAddMonthDirection($p, slipDate, -1, "L");
    var lastDateTemp = $c.date.getDateAddMonthDirection($p, slipDate, -1, "L");
    var lastDate = lastDateTemp.substr(0, 4);
    console.log("  ------- slipDate :" + slipDate + "  lastDate :" + lastDate);
    var bfMmDay = 0;
    var fullDay = 0;

    //for(i=1;i<=ds_slipcontents.CountRow;i++) {
    for (i = 0; i < ds_slipcontents.getTotalRow(); i++) {
      stDate = ds_slipcontents.getCellData(i, "mgntTermStDt");
      endDate = ds_slipcontents.getCellData(i, "mgntTermEndDt");
      if (!$c.gus.cfIsNull($p, ds_slipcontents.getCellData(i, "mgntTermStDt")) || !$c.gus.cfIsNull($p, ds_slipcontents.getCellData(i, "mgntTermEndDt"))) {
        bfMmDay = parseInt($c.date.diffDate($p, stDate, lastDate)) + 1;
        fullDay = parseInt($c.date.diffDate($p, stDate, endDate)) + 1;
        if (parseInt($c.date.diffDate($p, stDate, lastDate)) > 0) {
          payAmt = Math.round(bfMmDay / fullDay * ds_slipcontents.getCellData(i, "amt"));
          suspenseAmt = parseInt(ds_slipcontents.getCellData(i, "amt")) - payAmt;
          chkPayAmt += payAmt;
          chkSuspenseAmt += suspenseAmt;
        } else {
          // 선급비용 여부 체크
          let rtn1 = scwin.f_suspenseCheck(ds_slipcontents.getCellData(i, "mgntTermStDt"), ds_slipcontents.getCellData(i, "mgntTermEndDt"), ica_slipDt.getValue());
          console.log("    [" + i + "]  f_suspenseCheck (선급비용 여부 체크) rtn1 [" + rtn1 + "]");

          // if ( scwin.f_suspenseCheck(ds_slipcontents.getCellData(i,"mgntTermStDt"), ds_slipcontents.getCellData(i,"mgntTermEndDt"), ica_slipDt.getValue()))
          if (rtn1 == true) {
            chkSuspenseAmt += parseInt(ds_slipcontents.getCellData(i, "amt"));
          } else {
            chkPayAmt += parseInt(ds_slipcontents.getCellData(i, "amt"));
          }
        }
      }
    } // end of for

    var chkConfirm = "";
    if (chkSuspenseAmt == 0 && chkPayAmt == 0) {
      chkConfirm = "발행하시겠습니까?";
    } else {
      chkConfirm = "- 당월 비용 " + chkPayAmt + "원," + "\n" + "- 선급 비용 " + chkSuspenseAmt + "원으로 전표 발행됩니다." + "\n" + "발행하시겠습니까?";
    }
    console.log("   chkSuspenseAmt [" + chkSuspenseAmt + "]  chkPayAmt [" + chkPayAmt + "]  chkConfirm [" + chkConfirm + "]");
    let rtnv = await $c.gus.cfValidate($p, [gr_slipcontents]);
    if (rtnv) {
      //	if(confirm(clntCrnChk + chkConfirm)==true){

      var CountRowP = ds_prov.getTotalRow();
      var CountRowH = ds_provHeader.getTotalRow();

      // 가지급금 적요,정리일자
      // for(i=1;i<=ds_prov.CountRow; i++) {
      // 	for(j=1;j<=ds_provHeader.CountRow; j++) {
      for (i = 0; i < CountRowP; i++) {
        for (j = 0; j < CountRowH; j++) {
          // if(ds_prov.NameString(i,"rltSeq")==ds_provHeader.NameString(j,"rltSeq")){
          // 	ds_prov.NameString(i,"summary")=ds_provHeader.NameString(j,"summary");
          // 	ds_prov.NameString(i,"setlDt")=ds_provHeader.NameString(j,"setlDt");
          // 	ds_prov.NameString(i,"bankbookNo")=ds_provHeader.NameString(j,"bankbookNo");

          if (ds_prov.getCellData(i, "rltSeq") == ds_provHeader.getCellData(j, "rltSeq")) {
            ds_prov.setCellData(i, "summary", ds_provHeader.getCellData(j, "summary"));
            ds_prov.setCellData(i, "setlDt", ds_provHeader.getCellData(j, "setlDt"));
            ds_prov.setCellData(i, "bankbookNo", ds_provHeader.getCellData(j, "bankbookNo"));
            break;
          }
        }
      }

      //지급방법이 지로납부이면 alert띄움
      //for(i=1;i<=ds_slipcontents.CountRow;i++) {
      for (i = 0; i < ds_slipcontents.getTotalRow(); i++) {
        if (ds_slipcontents.getCellData(i, "reqPayMthdCd") == scwin.GIRO) {
          await $c.win.alert($p, "지로를 재경팀으로 송부하시기 바랍니다.");
        }
      }
      //tr_save.Post();

      // KYU_ISSUE : retrieveSubWkPlaceNo 오류 방지
      ds_slip.setCellData(0, "spplyDt", ica_slipDt.getValue());
      var dc = ds_slip.getAllArray();
      console.log("  *** ds_slip (" + ds_slip.getTotalRow() + ") : " + JSON.stringify(dc));
      console.log("");
      dc = ds_slipcontents.getAllArray();
      console.log("  *** ds_slipcontents (" + ds_slipcontents.getTotalRow() + ") : " + JSON.stringify(dc));
      console.log("");
      dc = ds_prov.getAllArray();
      console.log("  *** ds_prov (" + ds_prov.getTotalRow() + ") : " + JSON.stringify(dc));
      console.log("");
      $c.sbm.execute($p, sbm_save);
      //}
    }
  }
}; // end of f_Save

//-------------------------------------------------------------------------
// 발행 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  console.log("▷ sbm_save_submitdone (발행 submitdone)");
  /*
  language=JavaScript for=tr_save event=OnSuccess()>
  	//cfAlertMsg(MSG_CM_INF_001);	// 성공적으로 저장하였습니다 
  	if(ds_retSlip.NameValue(1,"slipNo") !=""){
  		f_updateSlipNo(ds_retSlip.NameValue(1,"slipNo"));
  		cfShowSlipInfo(ds_retSlip.NameValue(1,"slipNo"));
  	}
  	var opener=window.dialogArguments;
  	var rtrValue = new Object();
  	
  	rtrValue.SlipNo = "Y";
  	window.returnValue = rtrValue;
  	window.close();
  */
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  if (ds_retSlip.getCellData(0, "slipNo") != "") {
    await scwin.f_updateSlipNo(ds_retSlip.getCellData(0, "slipNo"));
    $c.gus.cfShowSlipInfo($p, ds_retSlip.getCellData(0, "slipNo"));
  }
  // var opener=window.dialogArguments;
  // var rtrValue = new Object();

  // rtrValue.SlipNo = "Y";
  // window.returnValue = rtrValue;
  // window.close();

  var arrRtnVal = new Array();
  arrRtnVal.SlipNo = "Y";
  let rt = [arrRtnVal.SlipNo];
  $c.win.closePopup($p, rt);
};

//-------------------------------------------------------------------------
// 전표발행후 BIDC interface 테이블 전표번호 업데이트
//-------------------------------------------------------------------------
scwin.f_updateSlipNo = async function (rtnSlipNo) {
  console.log("=== f_updateSlipNo (전표발행후 BIDC interface 테이블에 전표번호 업데이트)");

  // ds_slip.ClearData();
  // ds_slip.AddRow();
  ds_slip.setJSON([]);
  ds_slip.insertRow();
  // ds_slip.setRowPosition(0);

  // <C> Col=slipDt                 Ctrl=ed_slipDt                 Param=text				</C> <!-- 전표일자 -->
  // <C> Col=slipAcctDeptCd         Ctrl=ed_slipAcctDeptCd         Param=text    		</C> <!-- 전표귀속부서코드 -->
  // <C> Col=slipAcctDeptNm         Ctrl=txt_slipAcctDeptNm        Param=value   		</C> <!-- 전표귀속부서명 -->
  // <C> Col=slipKndCd			         Ctrl=lc_slipKndCd			        Param=BindColVal	</C> <!-- 전표귀속부서명 -->

  ds_slip.setCellData(0, "slipDt", ica_slipDt.getValue());
  ds_slip.setCellData(0, "slipNo", rtnSlipNo);
  ds_slip.setCellData(0, "loexSlipNo", scwin.pLoexSlipNo);
  ds_slip.setCellData(0, "slipKndCd", lc_slipKndCd.getValue());

  //tr_updateSlipNo.Post();
  let e = await $sbm.execute(sbm_updateSlipNo);
  console.log("▷ sbm_updateSlipNo_submitdone (BIDC interface 전표번호 업데이트 submitdone)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;
  console.log("▷▷▷▷ BIDC interface 전표번호 업데이트");
};

//-------------------------------------------------------------------------
// 선급비용 여부 체크 2016.11.02
//-------------------------------------------------------------------------
scwin.f_suspenseCheck = async function (FromDt, ToDt, SlipDt) {
  console.log("=== f_suspenseCheck (선급비용 여부 체크)");
  if (SlipDt.substring(0, 6) < FromDt.substring(0, 6)) return true;
  if (FromDt.substring(0, 6) < ToDt.substring(0, 6)) return true;
  return parseInt($c.date.diffDate($p, FromDt, ToDt)) + 1 >= 31;
};

// @@ ====== 미사용 ============================================================================ //

//-------------------------------------------------------------------------
// damtExp 차변금액 custom : 미사용
//-------------------------------------------------------------------------
scwin.damtExp = function (data, formatData, rowIdx, colIdx) {
  //pmntSlipNoExp
  console.log("  damtExp - data [" + data + "]  rowIdx [" + rowIdx + "]");
  // if (!data) return ""; // 데이터가 없으면 빈 문자열 반환

  let drcrClsCd = ds_slipcontents.getCellData(rowIdx, "drcrClsCd"); // 대변차대구분코드
  let amt = ds_slipcontents.getCellData(rowIdx, "amt"); // 금액

  return $c.gus.decode($p, drcrClsCd, "D", WebSquare.util.setNumber(amt, "#,##0"), "C", 0, "", 0);
};

//-------------------------------------------------------------------------
// camtExp 대변금액 custom : 미사용
//-------------------------------------------------------------------------
scwin.camtExp = function (data, formatData, rowIdx, colIdx) {
  //pmntSlipNoExp
  console.log("  camtExp - data [" + data + "]  rowIdx [" + rowIdx + "]");
  // if (!data) return ""; // 데이터가 없으면 빈 문자열 반환

  let drcrClsCd = ds_slipcontents.getCellData(rowIdx, "drcrClsCd"); // 대변차대구분코드
  let amt = ds_slipcontents.getCellData(rowIdx, "amt"); // 금액

  return $c.gus.decode($p, drcrClsCd, "C", WebSquare.util.setNumber(amt, "#,##0"), "D", 0, "", 0);
};

//-------------------------------------------------------------------------
// 예산실적조회 (예산체크) - 호출부 없음
//
// KYU_TEST : 2025-09-25 : 권정민 책임 - 추후 기능사용이 가능하여 구현 필요. 기존 호출안함.
//-------------------------------------------------------------------------
scwin.f_BudgetCheck = function () {
  console.log("===== f_BudgetCheck (예산실적조회) - 행복사 이전");

  // <C> Col=budgetYm									Ctrl=ed_slipDt						Param=text	</C>
  // <C> Col=acctDeptCd								Ctrl=ed_acctDeptCd				Param=text	</C>
  // <C> Col=acctCd										Ctrl=ed_acctCd						Param=text	</C>
  // <C> Col=budgetRsltsAmt						Ctrl=ed_amt								Param=text	</C>

  ds_budgetCheck.set("budgetYm", ica_slipDt.getValue());
  ds_budgetCheck.set("acctDeptCd", ed_acctDeptCd.getValue());
  ds_budgetCheck.set("acctCd", ed_acctCd.getValue());
  ds_budgetCheck.set("budgetRsltsAmt", ed_amt.getValue());

  //ds_budgetCheck.UseChangeInfo = false;
  //tr_budgetRt.Post();
  $c.sbm.execute($p, sbm_budgetRt);
};

//-------------------------------------------------------------------------
// 예산실적조회 submitdone (행복사 처리)
//-------------------------------------------------------------------------
scwin.sbm_budgetRt_submitdone = async function (e) {
  console.log("▷ sbm_budgetRt_submitdone (예산실적조회 submitdone) 행복사 처리");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // <!-- 예산 DataSet -->			
  //  language=JavaScript for=tr_budgetRt event=OnSuccess()>

  if (ds_budget.getCellData(0, "cntlUnitClsCd") == "T") {
    if (scwin.rowCopyYn == 0) {
      // 행복사여부
      scwin.f_Add();
    } else {
      //ds_slipcontents.ImportData(ds_slipcontents.ExportData(ds_slipcontents.RowPosition,1,true));

      ds_slipcontents.setJSON(ds_slipcontents.getRowJSON(ds_slipcontents.getRowPosition()), true); // append
    }
  } else {
    await $c.gus.cfAlertMsg($p, "예산잔액이 부족합니다. 예산잔액을 확인하시기 바랍니다." + "\n부서:" + ds_budget.getCellData(0, "acctDeptNm") + "\n계정:" + ds_budget.getCellData(0, "acctCd") + "\n남은예산금액:" + ds_budget.getCellData(0, "budgetRsltsAmt") + "\n사용요청금액:" + ds_budget.getCellData(0, "budgetRsltsSettAmt"));
  }
  scwin.rowCopyYn = 0;
};

//-------------------------------------------------------------------------
// Enable/Disable (조회부 활성/비활성)  호출안함
//-------------------------------------------------------------------------
scwin.f_EnableYn = function (str) {
  if (str == 1) {
    // 작성일자, 발행부서
    $c.gus.cfEnableObjects($p, [ica_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm, btn_slipAcctDeptCd]);
    console.log("  ==--== 활성 ( 작성일자, 발행부서코드, 발행부서명, 귀속부서돋보기 )");
  } else {
    $c.gus.cfDisableObjects($p, [ica_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm, btn_slipAcctDeptCd]);
    console.log("  ==--== 비활성 ( 작성일자, 발행부서코드, 발행부서명, 귀속부서돋보기 )");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_slipKndCd',style:'width: 150px;',submenuSize:'auto',ref:'data:ds_slip.slipKndCd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K15'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_slipDt',style:'',objType:'data',ref:'data:ds_slip.slipDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'발행부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctDeptCdInfo3popup',onloadCallbackFunc:'',selectID:'retrieveAcctDeptCdInfo3',codeId:'ed_slipAcctDeptCd',popupTitle:'',nameId:'ed_slipAcctDeptNm',style:'',id:'udc_slipAcctDeptCd',refDataCollection:'ds_slip',allowCharCode:'0-9',maxlengthCode:'5',code:'slipAcctDeptCd',name:'slipAcctDeptNm',objTypeCode:'key',objTypeName:'key','ev:onclickEvent':'scwin.udc_slipAcctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_slipAcctDeptCd_onblurCodeEvent',maxlengthName:'20',btnId:'btn_slipAcctDeptCd',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''}}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'차세대 물류 전표내역',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'귀속부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'retrieveAcctDeptCdInfo3',codeId:'ed_acctDeptCd',popupID:'retrieveAcctDeptCdInfo3popup',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_acctDeptNm',style:'',code:'acctDeptCd',name:'acctDeptNm',refDataCollection:'ds_slipcontents',id:'udc_acctDeptCd',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',objTypeName:'data',maxlengthName:'50','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',btnId:'btn_acctDeptCd',objType:'data',mandatoryCode:'true',validTitle:'귀속부서','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'부가세관리부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_vatDeclarAcctDeptCd',selectID:'retrieveVatDeclarAcctDeptCd',popupID:'retrieveVatDeclarAcctDeptCdpopup',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_vatDeclarAcctDeptNm',style:'',class:'w300',code:'code',name:'name',refDataCollection:'ds_slipcontents',id:'udc_vatDeclarAcctDeptCd',allowCharCode:'0-9',objTypeCode:'data',maxlengthCode:'5',maxlengthName:'20',objTypeName:'data',objType:'data',btnId:'btn_vatDeclarAcctDeptCd','ev:onclickEvent':'scwin.udc_vatDeclarAcctDeptCd_onclickEvent',mandatoryCode:'true',validTitle:'부가세관리부서',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'차대구분',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'lc_drcrClsCd',class:'form-control w150',direction:'auto',objType:'data',ref:'data:ds_slipcontents.drcrClsCd','ev:onblur':'scwin.lc_drcrClsCd_onblur','ev:onviewchange':'scwin.lc_drcrClsCd_onviewchange',title:'차대구분'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계정',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td form-group'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctCd',selectID:'retrieveTransferAcctCdInfo',popupID:'retrieveTransferAcctCdInfopopup',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_acctNm',style:'',id:'udc_acctCd',code:'acctCd',name:'acctNm',refDataCollection:'ds_slipcontents',allowCharCode:'0-9',objTypeCode:'data',maxlengthCode:'7',objTypeName:'data',maxlengthName:'20','ev:onclickEvent':'scwin.udc_acctCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_acctCd_onblurCodeEvent',btnId:'btn_acctCd',objType:'data',mandatoryCode:'true',validTitle:'계정'}},{T:1,N:'xf:select',A:{ref:'data:ds_slipcontents.payProcYn',appearance:'full',style:'',id:'cbx_payProcYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',title:'지급처리여부','ev:onchange':'scwin.f_CheckPayYn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지급'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'cbx_recvProcYn',ref:'data:ds_slipcontents.recvProcYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',title:'채권처리여부'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'채권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'통화코드/환율 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_group2',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'lc_crcCd',class:'form-control w150',direction:'auto',objType:'data',ref:'data:ds_slipcontents.crcCd','ev:onchange':'scwin.crcCdChange',title:'통화코드',mandatory:'true',emptyItem:'true'}},{T:1,N:'xf:input',A:{style:';text-align:right;',id:'ed_adjustExchRt',class:'form-control w150',dataType:'float',displayFormat:'#,##0.##',ref:'data:ds_slipcontents.exchRt',title:'환율',allowChar:'0-9.',maxlength:'7.2'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'외화금액',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;text-align:right;',id:'ed_amtFcrc',class:'form-control w150',dataType:'float',displayFormat:'#,##0.##',objType:'data',ref:'data:ds_slipcontents.amtFcrc',title:'외화금액',allowChar:'0-9.',maxlength:'13.2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'금액',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;text-align:right;',id:'ed_amt',class:'form-control w150',dataType:'number',displayFormat:'#,##0',objType:'data',ref:'data:ds_slipcontents.amt','ev:onblur':'scwin.ed_amt_onblur',title:'금액',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'관리번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_group4',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_mgntNm',class:'form-control w150',objType:'data',ref:'data:ds_slipcontents.mgntNm',title:'관리번호명'}},{T:1,N:'xf:input',A:{style:'',id:'ed_mgntNo',class:'form-control w250',objType:'data',ref:'data:ds_slipcontents.mgntNo',title:'관리번호'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'증빙종류',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td form-group'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_evidClsCd',class:'form-control w150',direction:'auto',objType:'data',ref:'data:ds_slipcontents.evidClsCd',title:'증빙종류',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_evidClsCd'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'',allOption:'false',id:'lc_deductClsCd',class:'form-control w150',direction:'auto',objType:'data',ref:'data:ds_slipcontents.deductClsCd',title:'공제구분',emptyItem:'true'}},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'',allOption:'',id:'lc_zeroTaxClsCd',class:'form-control w150',direction:'auto',objType:'data',ref:'data:ds_slipcontents.zeroTaxClsCd',chooseOptionLabel:'없음',title:'영세율구분',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업자번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_crn',selectID:'retrieveCrnInfo',popupID:'retrieveCrnInfopopup',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_crnNm',style:'',class:'w300',id:'udc_crn',code:'crn',name:'crnNm',refDataCollection:'ds_slipcontents',allowCharCode:'A-Za-z0-9',maxlengthCode:'13',objTypeCode:'data',objTypeName:'data',maxlengthName:'20','ev:onclickEvent':'scwin.udc_crn_onclickEvent','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent',btnId:'btn_crn',objType:'data',validTitle:'사업자번호',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'branchTr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지점',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_branchCd',selectID:'retrieveBranchCodeList',popupID:'retrieveBranchCodeListpopup',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_branchNm',style:'',id:'udc_branchCd',allowCharCode:'0-9',maxlengthCode:'6',maxlengthName:'20',objType:'data',btnId:'btn_branchCd',validTitle:'지점','ev:onclickEvent':'scwin.udc_branchCd_onclickEvent',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'매입항목코드',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_pchsItemCd',selectID:'retrieveRcSelpchItemCd',popupID:'retrieveRcSelpchItemCdpopup',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_pchsItemNm',style:'',class:'w300',id:'udc_pchsItemCd',allowCharCode:'0-9',maxlengthName:'20','ev:onclickEvent':'scwin.udc_pchsItemCd_onclickEvent',objType:'data',btnId:'btn_pchsItemCd',validTitle:'매입항목코드',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'관리일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_mgntDt',class:'form-control cal',calendarValueType:'yearMonthDate',objType:'data',ref:'data:ds_slipcontents.mgntDt',calendarDisplayFormat:'yyyy/MM/dd',title:'관리일자'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'관리기간',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'mgntTermStDt',refDataMap:'ds_slipcontents',style:'',id:'udc_mgntTermDt',refEdDt:'mgntTermEndDt',edFromId:'ed_mgntTermStDt',edToId:'ed_mgntTermEndDt',objType:'data',titleFrom:'관리기간From',titleTo:'관리기간To',mandatoryFrom:'false',mandatoryTo:'false'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사원번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_mgntEmpNo',selectID:'retrieveAcEmpInfo',popupID:'retrieveAcEmpInfopopup',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_mgntEmpNm',style:'',id:'udc_mgntEmpNo',code:'mgntEmpNo',name:'mgntEmpNm',refDataCollection:'ds_slipcontents',allowCharCode:'0-9',objTypeCode:'data',objTypeName:'data',maxlengthName:'20','ev:onclickEvent':'scwin.udc_mgntEmpNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_mgntEmpNo_onblurCodeEvent',objType:'data',btnId:'btn_mgntEmpNo',maxlengthCode:'6',validTitle:'사원번호',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_mgntClntNo',selectID:'retrieveAcEmpInfo',popupID:'retrieveAcEmpInfopopup',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_mgntClntNm',style:'',class:'w300',code:'mgntClntNo',name:'mgntClntNm',id:'udc_mgntClntNo',refDataCollection:'ds_slipcontents',allowCharCode:'0-9',maxlengthCode:'6',objTypeCode:'data',objTypeName:'data',maxlengthName:'30','ev:onclickEvent':'scwin.udc_mgntClntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_mgntClntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_mgntClntNo_onblurNameEvent',btnId:'btn_mgntClntNo',objType:'data',validTitle:'거래처',skipOnBlurCodeValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지급일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_reqDt',class:'',calendarValueType:'yearMonthDate',ref:'data:ds_slipcontents.reqDt',displayFormat:'yyyy/MM/dd',calendarDisplayFormat:'yyyy/MM/dd',objType:'data',title:'지급일자'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지급방법',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_reqPayMthdCd',class:'form-control w150',direction:'auto',objType:'data',ref:'data:ds_slipcontents.reqPayMthdCd','ev:onviewchange':'scwin.lc_reqPayMthdCd_onviewchange',title:'지급방법',emptyItem:'true',sortMethod:'ascending',sortOption:'value'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'어음일수',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'text-align:right;',id:'ed_draftDdCntCd',class:'form-control w150',objType:'data',ref:'data:ds_slipcontents.draftDdCntCd',title:'어음일수',maxlength:'3',allowChar:'0-9',displayFormat:'##0',dataType:'number'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'세금계산서일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_taxinvcDt',class:'form-control cal',calendarValueType:'yearMonthDate',objType:'data',ref:'data:ds_slipcontents.taxinvcDt',calendarDisplayFormat:'yyyy/MM/dd',title:'세금계산서일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'정산방법',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'',allOption:'',id:'lc_adjmClsCd',class:'form-control w150',direction:'auto',ref:'data:ds_slipcontents.adjmClsCd',objType:'data',title:'정산방법',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'없음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가지급금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_adjmClsCd',type:'button',class:'btn ico sch','ev:onclick':'scwin.f_Prepay()',objType:'data'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적요',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_summary',class:'form-control ',objType:'data',ref:'data:ds_slipcontents.summary',title:'적요'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'공급금액',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;text-align:right;',id:'ed_spplyAmt',class:'form-control w150',objType:'data',ref:'data:ds_slipcontents.spplyAmt',dataType:'number',displayFormat:'#,##0',title:'공급금액',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'부가세금액',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;text-align:right;',id:'ed_vatAmt',class:'form-control w150',objType:'data',ref:'data:ds_slipcontents.vatAmt',dataType:'number',displayFormat:'#,##0',title:'부가세금액',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지로납부기한',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ica_paymentPrd',class:'form-control cal',calendarValueType:'yearMonthDate',objType:'data',ref:'data:ds_slipcontents.paymentPrd',displayFormat:'yyyy/MM/dd',calendarDisplayFormat:'yyyy/MM/dd',title:'지로납부기한'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지급/채권번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w100',id:'ed_refNo',placeholder:'',style:'',objType:'data',ref:'data:ds_slipcontents.refNo',title:'지급/채권번호'}},{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_resetSettleNo',style:'',type:'button',objType:'data'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_setlMthd',style:'',type:'button','ev:onclick':'scwin.f_setlMthd',objType:'data'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상대계정',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_opntAcctCd',selectID:'retrieveTransferAcctCdInfo',popupID:'retrieveTransferAcctCdInfopopup',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_opntAcctNm',style:'',id:'udc_opntAcctCd',code:'opntAcctCd',name:'opntAcctNm','ev:onclickEvent':'scwin.udc_opntAcctCd_onclickEvent',maxlengthCode:'7',allowCharCode:'0-9',objTypeCode:'data',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_opntAcctCd_onblurCodeEvent',refDataCollection:'ds_slipcontents',objType:'data',btnId:'btn_opntAcctCd',maxlengthName:'50',validTitle:'상대계정',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'발행비고',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_taxInvcText',class:'form-control ',objType:'data',ref:'data:ds_slipcontents.taxInvcText',title:'발행비고'}}]}]}]}]},{T:1,N:'xf:group',A:{class:' row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전표분개내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_gridMain',btnPlusYn:'Y',btnUser:'N',gridDownYn:'N',gridUpYn:'N',templateYn:'N',gridID:'gr_slipcontents'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_slipcontents',focusMode:'cell',id:'gr_slipcontents',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNumFix:'false',rowNumVisible:'true',rowStatusHeaderValue:'No',rowNumHeaderValue:'No'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',style:'',value:'계산서일자',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',style:'',value:'공급금액',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',style:'',value:'귀속부서',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column39',inputType:'text',style:'',value:'부서명',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column37',inputType:'text',style:'',value:'계정',width:'70',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column35',inputType:'text',style:'',value:'계정명',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',style:'',value:'거래처코드',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'차변금액',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'대변금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'통화코드',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'환율',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'외화금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column47',value:'차변외화금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column49',value:'대변외화금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column71',value:'적요',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column69',value:'사업자번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'전표분할구분',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'전표종류',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column61',value:'전표작성부서',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column63',value:'전표작성자',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column85',value:'지급처리여부',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'지급일자',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'관리사원',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'상대계정',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column73',value:'부가세제외여부',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column89',value:'증빙구분',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column109',value:'영수구분',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column107',value:'공제구분',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column105',value:'잔액(원)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column101',value:'잔액(외화)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column103',value:'정리구분',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'taxinvcDt',inputType:'text',style:';text-align:center;',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',textAlign:'left',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true',dataType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNo',inputType:'text',style:'',textAlign:'center',value:'',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'100',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cAmt',textAlign:'right',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'crcCd',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'exchRt',value:'',displayMode:'label',displayFormat:'#,##0.##',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amtFcrc',textAlign:'right',value:'',displayMode:'label',displayFormat:'#,###.#0',dataType:'float',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'dAmtFcrc',textAlign:'right',value:'',displayMode:'label',displayFormat:'#,##0.00',dataType:'float',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'cAmtFcrc',textAlign:'right',value:'',displayMode:'label',displayFormat:'#,##0.00',dataType:'float',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipDivideNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipKndCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'drawAcctDeptCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'drawEmpNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'payProcYn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';text-align:center;',id:'reqDt',value:'',displayMode:'label',displayFormat:'yyyyMMdd',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mgntEmpNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'opntAcctCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'vatPassClsCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'evidClsCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'zeroTaxClsCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'deductClsCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'stlRamt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'stlRamtFcrc',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'settleClsCd',value:'',displayMode:'label',textAlign:'right',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column151',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column150',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column149',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column148',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column147',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column146',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column145',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column143',value:'',displayMode:'label',dataType:'number',expression:'sum(\'dAmt\')',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column142',value:'',displayMode:'label',dataType:'number',expression:'sum(\'cAmt\')',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column141',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column140',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column139',value:'',displayMode:'label',displayFormat:'#,##0.00',dataType:'float',expression:'sum(\'amtFcrc\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column138',value:'',displayMode:'label',dataType:'float',expression:'sum(\'dAmtFcrc\')',displayFormat:'#,##0.00',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column137',value:'',displayMode:'label',dataType:'float',expression:'sum(\'cAmtFcrc\')',displayFormat:'#,##0.00',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column136',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column135',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column134',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column132',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column131',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column130',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column129',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column127',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column126',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column125',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column124',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column116',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column115',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column114',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column113',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column112',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column111',value:'',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발행'}]}]}]}]}]}]}]})