/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_13b.xml 108835 9578ddd4c57387d93c72b6b714760ae1ec135af132717adb04dd00b470acca1d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipKndCd',dataType:'text',name:'전표종류'}},{T:1,N:'w2:key',A:{id:'schKndCd',dataType:'text',name:'등록/전표일자'}},{T:1,N:'w2:key',A:{id:'schDateFrom',dataType:'text',name:''}},{T:1,N:'w2:key',A:{id:'schDateTo',dataType:'text',name:''}},{T:1,N:'w2:key',A:{id:'acctDeptCd',dataType:'text',name:'귀속부서'}},{T:1,N:'w2:key',A:{id:'slipYn',dataType:'text',name:'전표여부'}},{T:1,N:'w2:key',A:{id:'ioKndCd',dataType:'text',name:'입/출고일자'}},{T:1,N:'w2:key',A:{id:'ioDateFrom',dataType:'text',name:''}},{T:1,N:'w2:key',A:{id:'ioDateTo',dataType:'text',name:''}},{T:1,N:'w2:key',A:{id:'productNo',dataType:'text',name:'제품번호'}},{T:1,N:'w2:key',A:{id:'slipNo',dataType:'text',name:'전표번호'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',dataType:'text',name:'청구거래처코드'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',dataType:'text',name:'하불거래처코드'}},{T:1,N:'w2:key',A:{id:'wrkNm',dataType:'text',name:'구분'}},{T:1,N:'w2:key',A:{id:'regId',dataType:'text',name:'등록자ID'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_excel',baseNode:'list',repeatNode:'map','ev:ondataload':'scwin.ds_excel_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',dataType:'text',name:'구분'}},{T:1,N:'w2:column',A:{id:'col2',dataType:'text',name:'입고일자'}},{T:1,N:'w2:column',A:{id:'col3',dataType:'text',name:'출고일자'}},{T:1,N:'w2:column',A:{id:'col4',dataType:'text',name:'출발지'}},{T:1,N:'w2:column',A:{id:'col5',dataType:'text',name:'청구목적지'}},{T:1,N:'w2:column',A:{id:'col6',dataType:'text',name:'하불목적지'}},{T:1,N:'w2:column',A:{id:'col7',dataType:'text',name:'제품번호'}},{T:1,N:'w2:column',A:{id:'col8',dataType:'text',name:'두께'}},{T:1,N:'w2:column',A:{id:'col9',dataType:'text',name:'폭'}},{T:1,N:'w2:column',A:{id:'col10',dataType:'text',name:'길이'}},{T:1,N:'w2:column',A:{id:'col11',dataType:'text',name:'중량'}},{T:1,N:'w2:column',A:{id:'col12',dataType:'text',name:'단위'}},{T:1,N:'w2:column',A:{id:'col13',dataType:'text',name:'청구단가'}},{T:1,N:'w2:column',A:{id:'col14',dataType:'text',name:'하불단가'}},{T:1,N:'w2:column',A:{id:'col15',dataType:'text',name:'청구금액'}},{T:1,N:'w2:column',A:{id:'col16',dataType:'text',name:'하불금액'}},{T:1,N:'w2:column',A:{id:'col17',dataType:'text',name:'청구거래처'}},{T:1,N:'w2:column',A:{id:'col18',dataType:'text',name:'차량번호'}},{T:1,N:'w2:column',A:{id:'col19',dataType:'text',name:'하불거래처'}},{T:1,N:'w2:column',A:{id:'col20',dataType:'text',name:'귀속부서'}},{T:1,N:'w2:column',A:{id:'col21',dataType:'text',name:'지급일자'}},{T:1,N:'w2:column',A:{id:'col22',dataType:'text',name:'산재보험료'}},{T:1,N:'w2:column',A:{id:'col23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col27',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_temp',baseNode:'list',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkNm',dataType:'text',name:'구분'}},{T:1,N:'w2:column',A:{id:'inDt',dataType:'text',name:'입고일자'}},{T:1,N:'w2:column',A:{id:'outDt',dataType:'text',name:'출고일자'}},{T:1,N:'w2:column',A:{id:'startNm',dataType:'text',name:'출발지'}},{T:1,N:'w2:column',A:{id:'bilgStopNm',dataType:'text',name:'청구목적지'}},{T:1,N:'w2:column',A:{id:'pchsStopNm',dataType:'text',name:'하불목적지'}},{T:1,N:'w2:column',A:{id:'productNo',dataType:'text',name:'제품번호'}},{T:1,N:'w2:column',A:{id:'thick',dataType:'text',name:'두께'}},{T:1,N:'w2:column',A:{id:'width',dataType:'text',name:'폭'}},{T:1,N:'w2:column',A:{id:'len',dataType:'text',name:'길이'}},{T:1,N:'w2:column',A:{id:'wt',dataType:'text',name:'중량'}},{T:1,N:'w2:column',A:{id:'unit',dataType:'text',name:'단위'}},{T:1,N:'w2:column',A:{id:'bilgUpr',dataType:'text',name:'청구단가'}},{T:1,N:'w2:column',A:{id:'pchsUpr',dataType:'text',name:'하불단가'}},{T:1,N:'w2:column',A:{id:'bilgAmt',dataType:'text',name:'청구금액'}},{T:1,N:'w2:column',A:{id:'pchsAmt',dataType:'text',name:'하불금액'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',dataType:'text',name:'청구거래처'}},{T:1,N:'w2:column',A:{id:'vehclNo',dataType:'text',name:'차량번호'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',dataType:'text',name:'하불거래처'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',dataType:'text',name:'귀속부서'}},{T:1,N:'w2:column',A:{id:'reqDt',dataType:'text',name:'지급일자'}},{T:1,N:'w2:column',A:{id:'insAmt',dataType:'text',name:'산재보험료'}},{T:1,N:'w2:column',A:{id:'stopNm',dataType:'text',name:''}},{T:1,N:'w2:column',A:{id:'upr',dataType:'text',name:''}},{T:1,N:'w2:column',A:{id:'amt',dataType:'text',name:''}},{T:1,N:'w2:column',A:{id:'clntNo',dataType:'text',name:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtChk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outDt',name:'출고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgStopNm',name:'청구목적지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsStopNm',name:'하불목적지',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'productNo',name:'제품번호',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'thick',name:'두께',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'width',name:'폭',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'len',name:'길이',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'unit',name:'단위',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'bilgUpr',name:'청구단가',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pchsUpr',name:'하불단가',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'하불금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'하불거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stopNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upr',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insAmt',name:'산재보험료',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bilgSlipNo',name:'매출전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSlipNo',name:'매입전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'하불거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'지급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uploadDt',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'name70',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rowStatus',name:'name72',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'name39',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_txn'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipDt',name:'전표일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'전표종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCd',name:'전표귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptNm',name:'전표귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'작성사원번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptCd',name:'작성귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reverseTxnNo',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txnCreatDt',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'name15',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'regId',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtm',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modId',name:'name18',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modDtm',name:'name19',dataType:'text'}},{T:1,N:'w2:key',A:{id:'postReqDt',name:'name20',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'name21',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'ds_txncontents',baseNode:'list',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipDt',dataType:'text',name:'전표일자'}},{T:1,N:'w2:column',A:{id:'slipNo',dataType:'text',name:'전표번호'}},{T:1,N:'w2:column',A:{id:'txnNo',dataType:'text',name:'거래번호'}},{T:1,N:'w2:column',A:{id:'txnContSeq',dataType:'number',name:'거래내역순번',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'slipKndCd',dataType:'text',name:'전표종류코드'}},{T:1,N:'w2:column',A:{id:'evidClsCd',dataType:'text',name:'증빙구분코드'}},{T:1,N:'w2:column',A:{id:'evidClsNm',dataType:'text',name:'증빙구분명'}},{T:1,N:'w2:column',A:{id:'deductClsCd',dataType:'text',name:'공제구분코드'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',dataType:'text',name:'관리거래처번호'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',dataType:'text',name:'관리거래처명'}},{T:1,N:'w2:column',A:{id:'crn',dataType:'text',name:'사업자등록번호'}},{T:1,N:'w2:column',A:{id:'crnNm',dataType:'text',name:'사업자등록명'}},{T:1,N:'w2:column',A:{id:'acctCd',dataType:'text',name:'계정코드'}},{T:1,N:'w2:column',A:{id:'acctNm',dataType:'text',name:'계정이름'}},{T:1,N:'w2:column',A:{id:'txnDt',dataType:'text',name:'거래일자'}},{T:1,N:'w2:column',A:{id:'mgntNo',dataType:'text',name:'관리번호'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',dataType:'text',name:'관리사원번호'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',dataType:'text',name:'관리사원명'}},{T:1,N:'w2:column',A:{id:'mgntDt',dataType:'text',name:'관리일자'}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',dataType:'text',name:'관리기간시작일자'}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',dataType:'text',name:'관리기간종료일자'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',dataType:'text',name:'귀속부서코드'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',dataType:'text',name:'귀속부서명'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',dataType:'text',name:'부가세신고코드'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',dataType:'text',name:'부가세신고명'}},{T:1,N:'w2:column',A:{id:'vatCrn',dataType:'text',name:'부가세사업자번호'}},{T:1,N:'w2:column',A:{id:'amt',dataType:'number',name:'금액',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'spplyAmt',dataType:'text',name:'공급금액'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',dataType:'text',name:'공급금액_외화'}},{T:1,N:'w2:column',A:{id:'crcCd',dataType:'text',name:'통화코드'}},{T:1,N:'w2:column',A:{id:'exchRt',dataType:'number',name:'환율',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vatAmt',dataType:'text',name:'부가세금액'}},{T:1,N:'w2:column',A:{id:'frchCrn',dataType:'text',name:'가맹점사업자등록번호'}},{T:1,N:'w2:column',A:{id:'frchNm',dataType:'text',name:'가맹점명'}},{T:1,N:'w2:column',A:{id:'acctDistYn',dataType:'number',name:'계정배부여부',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cardNo',dataType:'text',name:'카드번호'}},{T:1,N:'w2:column',A:{id:'cardNm',dataType:'text',name:'카드이름'}},{T:1,N:'w2:column',A:{id:'adjmAcctDeptCd',dataType:'text',name:'정산귀속부서코드'}},{T:1,N:'w2:column',A:{id:'adjmAcctDeptNm',dataType:'text',name:'정산귀속부서명'}},{T:1,N:'w2:column',A:{id:'adjmClntNo',dataType:'text',name:'정산거래처번호'}},{T:1,N:'w2:column',A:{id:'adjmClntNm',dataType:'text',name:'정산거래처명'}},{T:1,N:'w2:column',A:{id:'summary',dataType:'text',name:'적요'}},{T:1,N:'w2:column',A:{id:'rltSeq',dataType:'text',name:'구분'}},{T:1,N:'w2:column',A:{id:'termMgntYn',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'empMgntYn',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dtMgntYn',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bizMgntYn',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vatYn',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cardNoYn',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'frchNoYn',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'deductClsYn',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'limitAmt',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cardKndCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntYn',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',dataType:'text',name:'전표귀속부서코드'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',dataType:'text',name:'전표귀속부서명'}},{T:1,N:'w2:column',A:{id:'coClsCd',dataType:'text',name:'회계_회사구분(\'CO035\')'}},{T:1,N:'w2:column',A:{id:'coCd',dataType:'text',name:'소속 자회사'}},{T:1,N:'w2:column',A:{id:'taxnCls',dataType:'text',name:'사업자 과세유형코드'}},{T:1,N:'w2:column',A:{id:'adjmClsCd',dataType:'text',name:'정산구분코드'}},{T:1,N:'w2:column',A:{id:'insAmt',dataType:'text',name:'산재보험료'}},{T:1,N:'w2:column',A:{id:'repstNm',dataType:'text',name:'대표자명'}},{T:1,N:'w2:column',A:{id:'declarExceptYn',name:'name65',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'giroYn',name:'name66',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'busiCarYn',name:'name67',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'etcAmt1',name:'name68',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'etcAmt2',name:'name69',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dcAmt',name:'name71',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'serviceCharge',name:'name72',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'delYn',name:'name73',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'regId',name:'name125',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name126',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name127',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name128',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxInvcNo',name:'name134',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'name138',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCollectionNum',name:'name139',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchCd',name:'name140',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemCd',name:'name141',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchNm',name:'name142',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemNm',name:'name143',dataType:'text'}},{T:1,N:'w2:column',A:{id:'corCardDeductYn',name:'name147',dataType:'text'}},{T:1,N:'w2:column',A:{id:'advcdCntlYn',name:'name148',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'name149',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'name150',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paymentPrd',name:'name152',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expenseCd',name:'name154',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehcleNo',name:'name155',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAcctCd1',name:'name157',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcSummary1',name:'name159',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAcctCd2',name:'name160',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcSummary2',name:'name162',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'name163',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxClsCd',name:'name164',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'name166',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'name167',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slip'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipKndCd',name:'전표종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkNm',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'productNo',name:'제품번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_getMaxCloseYm'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'',dataType:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_slipNo',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'',dataType:''}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modPsblYn',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipCreatDt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoSlipYn',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnNo',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postYn',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postAcctDeptCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postAcctDeptNm',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postNo',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postEmpNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postActDt',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtCnt',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkYn',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsum',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csum',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkModDtm',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reverseSlipNo',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrlSlipYn',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reversePsblYn',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reverseAutoSlipYn',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNoCheck',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postProcess',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hpostDt',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecApprvTrgtYn',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postReqDt',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecStmtTrgtYn',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipSeq',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm2',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvEmpNm',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalCloseYm',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxClsCd',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClsCd',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsEvidNo',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chargeAmt',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msg',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecApprvInfoYn',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetApprvYn',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetApprvId',name:'name66',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetApprvNm',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drSum',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crSum',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'name70',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fiSlipNo',name:'name71',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'name72',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperBizDomCd',name:'name73',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'name74',dataType:'text'}},{T:1,N:'w2:column',A:{id:'corRegNoChk',name:'name75',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'name76',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'name77',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expenseCd',name:'name78',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehcleNo',name:'name79',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiCarYn',name:'name80',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cancelYn',name:'name81',dataType:'text'}},{T:1,N:'w2:column',A:{id:'util',name:'name82',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ifSlipNo',name:'name83',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDt',name:'name84',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'name85',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveDonghwaSettlementListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.gnrlaccount.slipmgnt.SaveDonghwaSettlementCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_process',action:'/ac.fi.gnrlaccount.slipmgnt.ProcessDonghwaSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_txn","key":"IN_DS1"},{"action":"modified","id":"ds_txncontents","key":"IN_DS2"},{"action":"modified","id":"ds_slip","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_updateSlipNo',action:'/ac.fi.gnrlaccount.slipmgnt.UpdateDonghwaSettlementSlipNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_slip","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"dma_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"dma_getMaxCloseYm","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DFWConstants.js',type:'text/javascript',scopeVariable:'DFWConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = function () {};

/**
 * @event 
 * @name onUdcCompleted 
 * @description UDC 완료
 */
scwin.onUdcCompleted = function () {};

/**
 * @event 
 * @name ondataload 
 * @description 코드 완료
 */
scwin.ondataload = function () {
  scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  scwin.login = $c.data.getMemInfo($p); // 로그인 정보를 가져온다.

  scwin.strToDay = $c.date.getServerDateTime($p, 'yyyyMMdd'); // 현재년월일을 구한다.
  const yaerMonth = scwin.strToDay.slice(0, 6);
  scwin.strFromDate = yaerMonth + "01";
  scwin.strToDate = yaerMonth + $c.date.getLastDateOfMonth($p, yaerMonth);

  // todo - 사용되는지 확인 필요
  // systemPathKey = DFWConstants.FILE_UPLOAD_SYSTEM_PATH;
  // systemPathVal = "common/csv/uploadTemp";
  // path = "/WEB-INF/struts_config/pt/co.xml";

  // 전역변수 선언
  scwin.check_select = true; // 전표종류  false일 경우는 재조회 및 엑셀파일 재 Import하여야 함.
  scwin.vCoCd = scwin.login.coCd ?? ''; // 회사코드 // 소속 자회사
  scwin.vCoClsCd = scwin.login.coClsCd ?? ''; //회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.chkSpplyAmt = 0;
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  chb_printCheck.setValue(1);
  rd_upload.setValue(0);
  dma_search2.set('coCd', scwin.vCoCd);
  ed_schDateFrom.setValue(scwin.strFromDate);
  ed_schDateTo.setValue(scwin.strToDay);
  ed_slipDt.setValue(scwin.strToDate);
  $c.gus.cfDisableKey($p);
  lc_schKndCd.setSelectedIndex(0);
  lc_ioKndCd.setSelectedIndex(0);
  scwin.chkSpplyAmt = 0;
  hid_slipKndCd.setValue(lc_slipKndCd.getValue());
  scwin.f_ChgSlipKnd();

  // test data 
  // ed_schDateFrom.setValue('20250101');
  // ed_schDateTo.setValue('20250110');
};

/**
 * @method 
 * @name f_Retrieve 
 * @description 조회
 */
scwin.f_Retrieve = async function () {
  const validSchDate = await $c.gus.cfValidate($p, [ed_schDateFrom, ed_schDateTo]);
  if (!validSchDate) return true;
  const schFromDate = ed_schDateFrom.getValue().trim();
  const schToDate = ed_schDateTo.getValue().trim();
  const ioFromDate = ed_ioDateFrom.getValue().trim();
  const ioToDate = ed_ioDateTo.getValue().trim();
  if (schFromDate == "" || schToDate == "") {
    await $c.gus.cfAlertMsg($p, "일자는 필수 입력 항목입니다.");
    return;
  }
  ;
  if (!$c.gus.cfIsAfterDate($p, schFromDate, schToDate)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_schDateFrom.focus();
    return false;
  }
  ;

  // todo - asis는 from 같은 값을 비교하고 있음
  if (!$c.gus.cfIsAfterDate($p, ioFromDate, ioFromDate)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_ioDateFrom.focus();
    return false;
  }
  ;
  scwin.f_ChgSlipKnd();
  await scwin.submitExcute(sbm_search);
};

/**
 * @method 
 * @name f_Save 
 * @description 저장시
 */
scwin.f_Save = async function () {
  //	필수입력사항 확인
  const validMasterGrid = await $c.gus.cfValidate($p, [gr_master]);
  if (!validMasterGrid) return;

  //	변경된 사항이 있는지 확인.
  if (ds_master.getModifiedIndex().length <= 0) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }
  ;
  let msg = "";
  switch (lc_slipKndCd.getValue()) {
    case "K16":
      msg = "청구내역을 저장하시겠습니까?";
      break;
    case "K17":
      msg = "하불내역을 저장하시겠습니까?";
      break;
  }
  ;
  const retConfirm = await $c.win.confirm($p, msg);
  if (!retConfirm) return;
  await scwin.submitExcute(sbm_save);
};

/**
 * @method 
 * @name f_Delete 
 * @description 삭제시
 */
scwin.f_Delete = async function () {
  if (ds_master.getModifiedIndex().length <= 0) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_056, ["데이타"]));
    return;
  }
  ;
  let msg = "번째 데이타는 전표내역이 있어 삭제할 수 없습니다.";

  // 이미 발행된건 삭제하지 않는다.
  const masterRowCnt = ds_master.getRowCount();
  for (i = 0; i < masterRowCnt; i++) {
    if (ds_master.getRowStatusValue(i) != 3) continue;
    const rowData = ds_master.getRowJSON(i);
    const cntRowNum = i + 1;
    switch (rowData["slipKndCd"]) {
      // 매출
      case "K16":
        if (rowData["bilgSlipNo"] != "") {
          await $c.gus.cfAlertMsg($p, cntRowNum + msg);
          return;
        }
        ;
        break;

      // 매입
      case "K17":
        if (rowData["pchsSlipNo"] != "") {
          await $c.gus.cfAlertMsg($p, i + msg);
          return;
        }
        ;
        break;
      default:
        if (rowData["bilgSlipNo"] != "" && rowData["pchsSlipNo"] != "") {
          await $c.gus.cfAlertMsg($p, i + msg);
          return;
        }
        break;
    }
  }
  const retConfirm = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_008, ["선택하신 데이타"]));
  if (!retConfirm) return;
  $c.data.deleteRows($p, gr_master, 'chk');
  await scwin.submitExcute(sbm_save);
};

/**
 * @method 
 * @name f_Process 
 * @description 전표발행시
 */
scwin.f_Process = async function () {
  if (ed_slipDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "작성일자는 필수 입력 항목입니다.");
    return;
  }
  if (ed_summary.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "적요는 필수 입력 항목입니다.");
    return;
  }
  ;

  //	변경된 사항이 있는지 확인.
  if (ds_master.getModifiedIndex().length <= 0) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }
  ;
  let msg = lc_slipKndCd.getText(true) + " 발행하시겠습니까?";
  const retConfirm = await $c.win.confirm($p, msg);
  if (!retConfirm) return;
  scwin.f_SlipCreate();
};

/**
 * @method 
 * @name f_SlipCreate 
 * @description 전표내역 생성
 */
scwin.f_SlipCreate = async function () {
  //전표헤더
  dma_txn.setEmptyValue();
  jsonData = {
    "slipDt": ed_slipDt.getValue(),
    // Session 이용
    "slipAcctDeptCd": scwin.login.acctDeptCd,
    "slipAcctDeptNm": scwin.login.acctDeptNm,
    // 로그인사번,부서
    "drawEmpNo": scwin.login.empNo,
    "drawAcctDeptCd": scwin.login.acctDeptCd
  };
  dma_txn.setJSON(jsonData);

  //전표내역
  // dma_txncontents.setEmptyValue();
  // dma_txncontents.set("slipDt", ed_slipDt.getValue());	//작성일자

  ds_txncontents.removeAll();
  const insertRow = ds_txncontents.insertRow();
  ds_txncontents.setCellData(insertRow, "slipDt", ed_slipDt.getValue()); //작성일자

  let _acctDeptCd = "",
    //귀속부서
    _clntNo = "",
    //거래처
    _crn = "",
    //사업자번호
    _reqDt = "",
    //지급일자
    _spplyAmt = 0,
    //공급가액
    _vatAmt = 0,
    //부가세액
    _insAmt = 0,
    //산재보험료
    _vatDeclarAcctDeptCd = "",
    //부가세신고부서
    _repstNm = ""; //대표명
  _reqClntNo = ""; //요청거래처(청구거래처) 

  // 선택한 내역이 동일한 건인지 확인
  let chkAcctDeptCD = true;
  let chkClntNo = true;
  let chkReqDt = true;
  let chkReqClntNo = true; //요청거래처(하불거래처의 청구처 체크 추가 2026.04.03)

  // 전표발행 후 업로드테이블 전표Update 필요
  ds_slip.removeAll();
  let chkCnt = 0;
  const rowCnt = ds_master.getRowCount();
  for (i = 0; i < rowCnt; i++) {
    let rowData = ds_master.getRowJSON(i);
    if (rowData["chk"] == "T") {
      chkCnt++;

      //매입
      if (rowData["slipKndCd"] == "K17") {
        //2건 이상 선택 시 지급일자 동일한 내용인지 확인
        if (chkCnt > 1) {
          if (_reqDt != rowData["reqDt"]) chkReqDt = false;
          if (_reqClntNo != rowData["bilgClntNo"]) chkReqClntNo = false;
        }
        ;
        _reqDt = rowData["reqDt"];
        _reqClntNo = rowData["bilgClntNo"];
      }
      ;

      //2건 이상 선택 시 귀속부서, 거래처 동일한 내용인지 확인
      if (chkCnt > 1) {
        if (_acctDeptCd != rowData["acctDeptCd"]) chkAcctDeptCD = false;
        if (_clntNo != rowData["clntNo"]) chkClntNo = false;
      }
      ;
      _spplyAmt = $c.num.parseInt($p, _spplyAmt, 0) + $c.num.parseInt($p, rowData["amt"], 0);
      _acctDeptCd = rowData["acctDeptCd"];
      _clntNo = rowData["clntNo"];
      _crn = rowData["crn"];
      _insAmt = $c.num.parseInt($p, _insAmt, 0) + $c.num.parseInt($p, rowData["insAmt"], 0);
      _repstNm = rowData["repstNm"];
      let insertIdx = ds_slip.insertRow();
      let insertData = {
        "wrkNm": rowData["wrkNm"],
        "clntNo": rowData["clntNo"],
        "slipKndCd": rowData["slipKndCd"],
        "productNo": rowData["productNo"],
        "reqClntNo": rowData["bilgClntNo"]
      };
      ds_slip.setRowJSON(insertIdx, insertData, true);
    }
    ;
  }
  ;
  if (_clntNo == "") {
    await $c.win.alert($p, "선택한 내역의 거래처가 존재하지 않습니다.");
    return;
  }
  ;
  if (!chkClntNo) {
    await $c.win.alert($p, "선택한 내역중 거래처가 다른건이 존재합니다.");
    return;
  }
  ;
  if (_acctDeptCd == "") {
    await $c.win.alert($p, "선택한 내역의 귀속부서가 존재하지 않습니다.");
    return;
  }
  ;
  if (!chkAcctDeptCD) {
    await $c.win.alert($p, "선택한 내역중 귀속부서가 다른건이 존재합니다.");
    return;
  }
  ;
  _vatDeclarAcctDeptCd = await scwin.f_VatDeclarAcctDeptCd(_acctDeptCd);
  if (_vatDeclarAcctDeptCd == "") {
    await $c.win.alert($p, "선택한 내역의 귀속부서에 해당하는 부가세신고부서가 없습니다.");
    return;
  }
  ;
  if (_spplyAmt == 0) {
    await $c.win.alert($p, "선택한 내역의 금액이 0원입니다. 전표발행 불가합니다.");
    return;
  }
  ;

  //매입
  if (lc_slipKndCd.getValue() == "K17") {
    if (!chkReqDt) {
      await $c.win.alert($p, "선택한 내역중 지급일자가 다른건이 존재합니다.");
      return;
    }
    ;
    if (_reqClntNo == "") {
      await $c.win.alert($p, "선택한 내역의 청구(요청)거래처가 존재하지 않습니다.");
      return;
    } else if (!chkReqClntNo) {
      await $c.win.alert($p, "선택한 내역중 청구(요청)거래처가 다른건이 존재합니다.");
      return;
    }
  }
  ;
  const slipKndCd = lc_slipKndCd.getValue();
  dma_txn.set("slipKndCd", slipKndCd);
  let acctCd = '',
    deductClsCd = '',
    taxnCls = '',
    mgntDt = '',
    adjmClsCd = '',
    adjmClntNo = '',
    vatyn = '',
    insAmt = '',
    repstNm = '',
    reqClntNo = '';
  switch (slipKndCd) {
    case "K16":
      //매출
      acctCd = "4101010";
      deductClsCd = "2"; // 불공제
      break;
    case "K17":
      //매입
      acctCd = "4201310";
      deductClsCd = "1"; // 공제
      taxnCls = "01";
      mgntDt = _reqDt;
      adjmClsCd = "2";
      adjmClntNo = _clntNo;
      vatyn = 1; // 반영확인
      insAmt = _insAmt;
      repstNm = _repstNm;
      reqClntNo = _reqClntNo; //요청거래처
      break;
  }
  ;
  const txnContentData = {
    "crn": _crn,
    //사업자번호
    "evidClsCd": "10",
    //증빙종류 - 세금계산서
    "crcCd": "KRW",
    //통화코드
    "exchRt": "0",
    //환율
    "txnDt": ed_slipDt.getValue(),
    "spplyAmt": _spplyAmt,
    //공급가액
    "spplyAmtFcrc": 0,
    "vatAmt": $c.num.parseFloat($p, ed_vatAmt.getValue(), 0),
    //부가세
    "mgntEmpNo": "",
    //사원번호
    "acctDeptCd": _acctDeptCd,
    //귀속부서
    "vatDeclarAcctDeptCd": _vatDeclarAcctDeptCd,
    //부가세신고부서
    "mgntClntNo": _clntNo,
    //거래처
    "acctCd": acctCd,
    //일반매출
    "slipKndCd": slipKndCd,
    //전표종류
    "deductClsCd": deductClsCd,
    //공제구분코드
    "taxnCls": taxnCls,
    // 사업자과세유형코드_일반과세
    "mgntDt": mgntDt,
    // 관리일자   
    "adjmClsCd": adjmClsCd,
    // 정산구분-미지급금  
    "adjmClntNo": adjmClntNo,
    // 정산거래처번호 
    "vatYn": vatyn,
    // 부가세여부
    "insAmt": insAmt,
    // 산재보험료
    "repstNm": repstNm,
    // 대표자명
    "reqClntNo": reqClntNo,
    // 요청거래처
    "summary": ed_summary.getValue(),
    // 적요
    "coClsCd": scwin.vCoClsCd,
    // 회계_회사구분('CO035')
    "coCd": scwin.vCoCd // 소속 자회사
  };

  // dma_txncontents.setJSON(txnContentData);
  ds_txncontents.setRowJSON(0, txnContentData, true);
  dma_txn.set("slipKndCd", slipKndCd);
  await scwin.submitExcute(sbm_process);
};

/**
 * @method 
 * @name f_Upload 
 * @description 엑셀 Upload
 */
scwin.f_Upload = async function () {
  // ds_master.setBroadcast(false);

  ds_excel.removeAll();
  ds_temp.removeAll();
  let options = {
    "startRowIndex": 1
  };
  switch (rd_upload.getValue()) {
    // xlsx
    case '0':
      await $c.data.uploadGridViewExcel($p, gr_excel, options);
      break;
    // csv
    case '1':
      await $c.data.uploadGridViewCSV($p, gr_excel, options);
      break;
  }
};

/**
 * @method 
 * @name f_upload1 
 * @description 엑셀 Upload
 */
scwin.f_upload1 = async function () {
  if (lc_slipKndCd.getValue() == "") {
    $c.gus.cfProgressWinClose($p);
    await $c.gus.cfAlertMsg($p, "전표종류를 선택하시기 바랍니다.");
    lc_slipKndCd.focus();
    return;
  }
  ;
  if (ds_excel.getRowCount() == 0) {
    $c.gus.cfProgressWinClose($p);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  ;

  // 로드된 엑셀 데이터 기본검증 /////////////////////////////////////////////////////////////////////////////////
  // 로드된 엑셀 데이터의 열값이 21개가 아니면 프로그램 종료
  // 첫번째 행에 헤더값이 아닌 다른 값이 있으면, 경고 메세지 출력후 종료 
  // 그리드 양식에서 전표번호는 체크안함 (RPA 업로드 양식 21개 지정)
  const colData = ds_excel.getColData('col23');
  let chkOver = false;
  for (let i = 0; i < colData.length; i++) {
    if (colData[i] != "") chkOver = true;
  }
  const colCnt = ds_excel.getTotalCol();
  if (chkOver) {
    $c.gus.cfProgressWinClose($p);
    $c.gus.cfAlertMsg($p, "업로드 cvs 파일의 형식이 잘못되었습니다." + "\n엑셀 업로드 기본양식은 엑셀다운로드후," + "\n첫번째 타이틀 행, 두번째 공백행, 마지막 합계행  제거,  " + "\n첫번째, 두번 째 및 전표번호 항목을 제거 하고," + "\n사용하시면 됩니다. 파일형식을 확인후 다시 업로드하시길 바랍니다." + "\n컬럼값이 상이합니다. [형식=22개] 입력한값 => " + colCnt);
    return;
  }
  ;

  // 파일의 마지막 행에 합계행이 있을경우 삭제 경고 메세지 출력후 종료 
  if (gr_excel.getFooterData('totalTxt') == "합계") {
    $c.gus.cfProgressWinClose($p);
    $c.gus.cfAlertMsg($p, "업로드 CVS 파일의 형식이 잘못되었습니다." + "\n사용하신 CVS파일의 마지막 합계행을 제거하고," + "\n다시 사용하시길 바랍니다.");
    return;
  }
  ;
  const rowCnt = ds_excel.getRowCount();
  for (i = 0; i < rowCnt; i++) {
    let rowData = ds_excel.getRowJSON(i);

    // 날짜에 '-' 값이 있을경우 제거 (2~3)
    rowData["col2"] = rowData["col2"].replace(/-/gi, "");
    rowData["col3"] = rowData["col3"].replace(/-/gi, "");

    // 금액에 ',', ' ' 값이 있을경우 제거 청구단가/하불단가/청구금액/하불금액 (13~16)
    const numColIds = ["col13", "col14", "col15", "col16", "col22"];
    numColIds.forEach(colId => {
      replaceNum = rowData[colId].replace(/,/gi, "").replace(/ /gi, "");
      rowData[colId] = replaceNum;
    });
    // rowData["col13"] = rowData["col13"].replace(/,/gi, "").replace(/ /gi, "");
    // rowData["col14"] = rowData["col14"].replace(/,/gi, "").replace(/ /gi, "");
    // rowData["col15"] = rowData["col15"].replace(/,/gi, "").replace(/ /gi, "");
    // rowData["col16"] = rowData["col16"].replace(/,/gi, "").replace(/ /gi, "");
    // rowData["col22"] = rowData["col22"].replace(/,/gi, "").replace(/ /gi, "");

    // 각값에 null이나 공백이 있을경우 경고메세지 출력후 종료 
    for (let j = 0; j < colCnt; j++) {
      if (j == 6 || j == 19) {
        // 제품번호, 귀속부서 null 체크
        let colNum = j + 1;
        if (rowData['col' + colNum] == "" || rowData['col' + colNum] == null) {
          $c.gus.cfProgressWinClose($p);
          $c.gus.cfAlertMsg($p, "업로드 cvs 파일의 데이터가 잘못되었습니다." + "\n[" + (i + 1) + "] 번째 행의 [" + gr_excel.getHeaderValue('col' + colNum) + "] 값이 없습니다." + "\n사용하신 CVS파일의 데이터를 확인 후,\n다시 업로드하시길 바랍니다.");
          return;
        }
        ;
      }
      ;
    }
    ;
    ds_excel.setRowJSON(i, rowData, true);
  }
  ;
  if (scwin.f_AddRowUploaded()) {
    $c.gus.cfProgressWinClose($p);
    $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
  }
  ;
};

/**
 * @method 
 * @name f_Upload 
 * @description 업로드 자료 추가
 */
scwin.f_AddRowUploaded = function () {
  // ds_temp에 ds_excel의 데이터를 받아서 수입한다. 1부터 엑셀의 총 행수까지 받아라
  const allData = ds_excel.getAllJSON();
  for (let i = 0; i < allData.length; i++) {
    let rowData = allData[i];
    let insertIdx = ds_temp.insertRow();
    let insertData = {
      "wrkNm": rowData["col1"].trim(),
      "inDt": rowData["col2"].trim(),
      "outDt": rowData["col3"].trim(),
      "startNm": rowData["col4"].trim(),
      "bilgStopNm": rowData["col5"].trim(),
      "pchsStopNm": rowData["col6"].trim(),
      "productNo": rowData["col7"].trim(),
      "thick": rowData["col8"].trim(),
      "width": rowData["col9"].trim(),
      "len": rowData["col10"].trim(),
      "wt": rowData["col11"].trim(),
      "unit": rowData["col12"].trim(),
      "bilgUpr": rowData["col13"].trim(),
      "pchsUpr": rowData["col14"].trim(),
      "bilgAmt": rowData["col15"].trim(),
      "pchsAmt": rowData["col16"].trim(),
      "bilgClntNm": rowData["col17"].trim(),
      "vehclNo": rowData["col18"].trim(),
      "pchsClntNm": rowData["col19"].trim(),
      "acctDeptNm": rowData["col20"].trim(),
      "reqDt": rowData["col21"].trim(),
      "insAmt": rowData["col22"].trim()
    };
    ds_temp.setRowJSON(insertIdx, insertData, true);
  }
  ;

  // ds_temp에 수입받은 총 데이터 행수가 0보다 크면
  const tempRowCnt = ds_temp.getRowCount();
  if (tempRowCnt > 0) {
    // 구분,입고일자,출고일자,출발지,청구목적지,하불목적지,제품번호,두께,폭,길이,중량,단위,청구단가,하불단가,청구금액,하불금액,청구거래처번호,차량번호,하불거래처번호,귀속부서,지급일자
    ds_master.removeAll();
    for (i = 0; i < tempRowCnt; i++) {
      let slipKndCd = lc_slipKndCd.getValue();
      let tempData = ds_temp.getRowJSON(i);
      let insertIdx = ds_master.insertRow();
      let insertData = {
        "wrkNm": tempData["wrkNm"],
        //구분
        "inDt": tempData["inDt"],
        //입고일자
        "outDt": tempData["outDt"],
        //출고일자
        "startNm": tempData["startNm"],
        //출발지
        "bilgStopNm": tempData["bilgStopNm"],
        //청구목적지
        "pchsStopNm": tempData["pchsStopNm"],
        //하불목적지
        "productNo": tempData["productNo"],
        //제품번호
        "thick": tempData["thick"],
        //두께
        "width": tempData["width"],
        //폭
        "len": tempData["len"],
        //길이
        "wt": tempData["wt"],
        //중량
        "unit": tempData["unit"],
        //단위
        "bilgUpr": tempData["bilgUpr"],
        //청구단가
        "pchsUpr": tempData["pchsUpr"],
        //하불단가
        "bilgAmt": tempData["bilgAmt"],
        //청구금액
        "pchsAmt": tempData["pchsAmt"],
        //하불금액
        "bilgClntNm": tempData["bilgClntNm"],
        //청구거래처
        "vehclNo": tempData["vehclNo"],
        //차량번호
        "pchsClntNm": tempData["pchsClntNm"],
        //하불거래처
        "acctDeptNm": tempData["acctDeptNm"],
        //귀속부서
        "acctDeptCd": tempData["acctDeptNm"],
        "bilgClntNo": tempData["bilgClntNm"],
        "pchsClntNo": tempData["pchsClntNm"],
        "slipKndCd": slipKndCd
      };
      switch (slipKndCd) {
        case "K16":
          // 매출
          insertData["stopNm"] = tempData["bilgStopNm"]; //청구목적지
          insertData["upr"] = tempData["bilgUpr"]; //청구단가
          insertData["amt"] = tempData["bilgAmt"]; //청구금액
          insertData["clntNo"] = tempData["bilgClntNm"];
          break;
        case "K17":
          // 매입
          insertData["stopNm"] = tempData["pchsStopNm"]; //하불목적지
          insertData["upr"] = tempData["pchsUpr"]; //하불단가
          insertData["amt"] = tempData["pchsAmt"]; //하불금액
          insertData["clntNo"] = tempData["pchsClntNm"];
          insertData["reqDt"] = tempData["reqDt"]; //지급일자
          insertData["insAmt"] = tempData["insAmt"]; //산재보험료
          insertData["reqClntNo"] = tempData["bilgClntNm"]; //산재보험료
          break;
      }
      ;
      ds_master.setRowJSON(insertIdx, insertData, true);
    }
    ;
  }
  ;
  ed_totalRows.setValue(ds_master.getRowCount());
  return true;
};

/**
 * @method 
 * @name f_Excel 
 * @description 엑셀 Download
 */
scwin.f_Excel = async function () {
  if (ds_master.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  ;
  const fileName = "정산처리 내역";
  let options = {
    sheetName: fileName,
    fileName: fileName + ".xlsx",
    startRowIndex: 2,
    useHeaderCheckBoxLabel: true
  };
  let visibleColCnt = 0;
  let totalColCnt = gr_master.getTotalCol();
  for (let i = 0; i < totalColCnt; i++) {
    if (gr_master.getColumnVisible(i)) visibleColCnt++;
  }
  ;
  let infoArr = [{
    text: fileName,
    rowIndex: 0,
    colSpan: visibleColCnt,
    textAlign: 'center',
    fontSize: '18px',
    fontName: '돋움체',
    color: 'black',
    bgColor: '#ffffff',
    wordWrap: true
  }];
  $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};

/**
 * @method 
 * @name f_openPopUp 
 * @description 각 Argument에 따른 PopUp을 호출 한다.
 */
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, sFlag) {
  // 1:조회->부서 , 2:조회->거래처
  // 3:입력->부서 , 4:입력->거래처 , 5:입력->계정
  // code변수는 각 항목별 검색요청 값이다.
  let retrunRtnList;
  let param = '';
  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  if (sFlag != "SKIP") {
    codeVal = orgObjCd.getValue();
    nameVal = orgObjNm.getValue();
  } else {
    codeVal = orgObjCd;
    nameVal = orgObjNm;
  }
  switch (select_code) {
    case '1':
      udc_comPopup.setSelectId("retrieveAcctDeptCdInfo6");
      param = "," + scwin.vCoCd + "," + scwin.vCoClsCd + ",0";
      await udc_comPopup.cfCommonPopUpAsync(async rtnList => {
        await scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnList);
      }, codeVal, nameVal, sFlag, null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    case '2':
      udc_comPopup.setSelectId("retrieveClntList");
      param = ",,," + scwin.vCoCd;
      await udc_comPopup.cfCommonPopUpAsync(async rtnList => {
        await scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnList);
      }, codeVal, nameVal, sFlag, null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    case '3':
      udc_comPopup.setSelectId("retrieveClntList");
      param = ",,," + scwin.vCoCd;
      await udc_comPopup.cfCommonPopUpAsync(async rtnList => {
        await scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnList);
      }, codeVal, nameVal, sFlag, null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    case '4':
      udc_comPopup.setSelectId("retrieveClntList");
      param = ",,," + scwin.vCoCd;
      await udc_comPopup.cfCommonPopUpAsync(async rtnList => {
        retrunRtnList = rtnList;
      }, codeVal, nameVal, sFlag, null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    case '5':
      udc_comPopup.setSelectId("retrieveClntList");
      param = ",,," + scwin.vCoCd;
      await udc_comPopup.cfCommonPopUpAsync(async rtnList => {
        retrunRtnList = rtnList;
      }, codeVal, nameVal, sFlag, null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    case '6':
      udc_comPopup.setSelectId("retrieveAcctDeptCdInfo6");
      param = "," + scwin.vCoCd + "," + scwin.vCoClsCd + ",0";
      await udc_comPopup.cfCommonPopUpAsync(async rtnList => {
        retrunRtnList = rtnList;
      }, codeVal, nameVal, sFlag, null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
    case '7':
      udc_comPopup.setSelectId("retrieveAcEmpInfo");
      param = scwin.vCoCd + "," + scwin.vCoClsCd;
      await udc_comPopup.cfCommonPopUpAsync(async rtnList => {
        await scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnList);
      }, codeVal, nameVal, sFlag, null, null, null, null, param, null, null, null, null, null, "F", null, null);
      break;
  }
  ;
  return retrunRtnList;
};

/**
 * @method 
 * @name f_CheckPopUp 
 * @description PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 
 * 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
 * flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
 */
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  const codeVal = orgObjCd.getValue();
  const nameVal = orgObjNm.getValue();
  if (flag == "CD") {
    if (codeVal == orgObjCd.options.hidVal) return;
    orgObjNm.setValue("");
  } else {
    if (orgObjNm.getValue() == orgObjNm.options.hidVal) return;
    orgObjCd.setValue("");
  }
  ;
  if (codeVal.trim() == "" && flag != "NM") {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
    return;
  }
  ;
  if (orgObjNm.getValue().trim() != "" || flag == "CD") {
    orgObjCd.setValue(codeVal.trim());
    orgObjNm.setValue(orgObjNm.getValue().trim());
    scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
  }
  ;
};

/**
 * @method 
 * @name f_resultPopUp 
 * @description 팝업결과
 */
scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList) {
  if (rtnList != null && rtnList[0] == "N/A") return;
  if (rtnList == null) {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
    orgObjCd.options.hidVal = "";
    orgObjNm.options.hidVal = "";
  }
  ;
  orgObjCd.setValue(rtnList[0]); // 코드값
  orgObjNm.setValue(rtnList[1]); // 코드명
  orgObjCd.options.hidVal = rtnList[0]; // HIDDEN 코드값
  orgObjNm.options.hidVal = rtnList[1]; // HIDDEN 코드명
};

/**
 * @method 
 * @name f_ChgSlipKnd 
 * @description 전표종류 변경시
 */
scwin.f_ChgSlipKnd = function () {
  const targetArray = [btn_Save, btn_Pro, btn_AddRow, btn_UndoRow];
  switch (lc_slipKndCd.getValue()) {
    case "K16":
    case "K17":
      $c.gus.cfEnableObjects($p, targetArray);
      break;
    default:
      $c.gus.cfDisableObjects($p, targetArray);
      break;
  }
  ;
};

/**
 * @method 
 * @name f_updateSlipNo 
 * @description 전표발행후 interface 테이블에 전표번호 업데이트
 */
scwin.f_updateSlipNo = async function (rtnSlipNo) {
  const rowCnt = ds_slip.getRowCount();
  for (i = 0; i < rowCnt; i++) {
    ds_slip.setCellData(i, "slipNo", rtnSlipNo);
  }
  ;
  await scwin.submitExcute(sbm_updateSlipNo);
};

/**
 * @method 
 * @name f_ChgGridView 
 * @description 전표발행유무에 따라 그리드 수정 가능여부
 */
scwin.f_ChgGridView = function (_slipNoYn) {
  const readOnly = _slipNoYn == "Y";
  targetColumns = ["inDt", "outDt", "startNm", "thick", "width", "len", "wt", "unit", "vehclNo", "acctDeptNm", "insAmt"];
  targetColumns.forEach(column => {
    gr_master.setColumnReadOnly(column, readOnly);
  });

  // Y인 경우에만 컨트롤하는 컬럼
  if (_slipNoYn != "Y") return;
  extraColumns = ["bilgStopNm", "pchsStopNm", "bilgUpr", "pchsUpr", "bilgAmt", "pchsAmt", "reqDt"];
  extraColumns.forEach(column => {
    gr_master.setColumnReadOnly(column, readOnly);
  });
};

/**
 * @method 
 * @name f_VatDeclarAcctDeptCd 
 * @description 전표발행유무에 따라 그리드 수정 가능여부
 */
scwin.f_VatDeclarAcctDeptCd = async function (_acctDeptCd) {
  let param = "," + _acctDeptCd + "," + scwin.vCoCd + "," + scwin.vCoClsCd + "," + ed_slipDt.getValue().slice(0, 4);
  let check = "T";
  let sqlID = "retrieveVatDeclarAcctDeptCdAcctDeptCd";
  let popTemp = "ZZ";
  let vatDeclarAcctDeptCd = '';

  // 부가세신고부서에 값을넣고 명을 찾을 경우
  udc_comPopup.setSelectId(sqlID);
  await udc_comPopup.cfCommonPopUpAsync(rtnList => {
    if (rtnList == null) return;
    if (rtnList[0] == "N/A") return;
    vatDeclarAcctDeptCd = rtnList[2]; //부가세부서코드;
  }, "", popTemp, check, null, null, null, null, param, null, null, null, null, null, null, null, 'T');
  return vatDeclarAcctDeptCd;
};

/**
 * @method 
 * @name f_Print 
 * @description 거래명세서 출력(전표번호) 
 */
scwin.f_Print = async function () {
  let param = "";
  let printCnt = 0;
  const rowCnt = ds_master.getRowCount();
  if (rowCnt <= 0) return;
  for (i = 0; i < rowCnt; i++) {
    let rowData = ds_master.getRowJSON(i);
    if (rowData["prtChk"] != "T") continue;
    printCnt++;
    param = param + "," + rowData["pchsSlipNo"]; // 전표번호
  }
  ;
  if (printCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["발행할 거래명세서"]); // @을(를) 선택하십시오.
    return;
  }
  ;
  let odiName = "fs_403_01_01p";
  let reportName = "/ds/fs/fs_403_01_01p.ozr";

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  let odiParam = {};
  odiParam.slipNo = param.slice(1);

  // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  let viewerParam = {};
  viewerParam.mode = chb_printCheck.getValue() == 1 ? "print" : "preview"; // 미리보기

  // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  let formParam = {};
  const data = {
    odiName: odiName,
    reportName: reportName,
    odiParam: odiParam,
    viewerParam: viewerParam,
    formParam: formParam
  };
  let options = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", options, data);
};

/**
 * @method 
 * @name moveRowPosition 
 * @description 포지션 이동 시 동작 제어
 */
scwin.moveRowPosition = function (rowIndex, targetGrid) {
  // 첫번째 visible 되어있는 컬럼 확인
  const totalCol = targetGrid.getTotalCol();
  let firstVisibleColIdx = 0;
  for (let i = 0; i < totalCol; i++) {
    if (targetGrid.getColumnVisible(i)) {
      firstVisibleColIdx = i;
      break;
    }
    ;
  }
  ;

  // 기존 포커스 된 컬럼 확인
  const focusedColIdx = targetGrid.getFocusedColumnIndex() ?? -1;
  const newColIdx = focusedColIdx < 0 ? firstVisibleColIdx : focusedColIdx;
  const newRowIdx = rowIndex < 0 ? 0 : rowIndex;

  // 실제 포커스
  targetGrid.setFocusedCell(newRowIdx, newColIdx);
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    if (e.responseJSON.resultDataSet[0].Code == -1) return;
    await scwin.submitdone(e);
  }
  ;
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @method 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    // 조회
    case sbm_search:
      gr_master.setFocusedCell(0, 0);

      // for=tr_search event=OnSuccess()
      gr_master.setHeaderValue('chk', 'F');
      ed_vatAmt.setValue(0);
      scwin.chkSpplyAmt = 0;
      scwin.ds_master_OnLoadCompleted();
      break;

    // 저장/삭제
    case sbm_save:
      // for=tr_save event=OnSuccess()
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
      scwin.f_Retrieve();
      break;

    // 전표발행
    case sbm_process:
      // for=tr_process event=OnSuccess()
      const slipNo = ds_slipNo.getCellData(0, "slipNo");
      if (slipNo != "") {
        await scwin.f_updateSlipNo(slipNo);
        await $c.gus.cfShowSlipInfo($p, slipNo);
        scwin.f_Retrieve();
      }
      break;
  }
  ;
};

/**
 * @method 
 * @name ds_master_OnLoadCompleted 
 * @description
 * @asis for=ds_master event=OnLoadCompleted(rowCnt)
 */
scwin.ds_master_OnLoadCompleted = async function () {
  const rowCnt = ds_master.getRowCount();

  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  ed_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
  ;

  // 저장가능상태로 Flag변경함.
  scwin.check_select = true;
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name lc_slipKndCd_onchange 
 * @description 전표종류 선택항목 변경 시 발생
 * @asis for=lc_slipKndCd event=OnCloseUp()
 */
scwin.lc_slipKndCd_onchange = function (info) {
  if (info.newValue == info.oldValue) return;
  scwin.check_select = false;
};

/**
 * @event 
 * @name udc_acctDeptCd_onblurCodeEvent 
 * @description 귀속부서) code 포커스를 잃었을 때 발생한다.
 * @asis for=ed_acctDeptCd event=OnKillFocus()
 */
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '1', 'CD');
};

/**
 * @event 
 * @name udc_acctDeptCd_onblurNameEvent 
 * @description 귀속부서) name 포커스를 잃었을 때 발생한다.
 * @asis for=ed_acctDeptNm event=OnKillFocus()
 */
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '1', 'NM');
};

/**
 * @event 
 * @name udc_acctDeptCd_onclickEvent 
 * @description 귀속부서) 검색버튼 클릭 시 발생
 */
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_acctDeptCd, ed_acctDeptNm, '1', 'T');
};

/**
 * @event 
 * @name udc_acctDeptCd_onblurCodeEvent 
 * @description 청구거래처) code 포커스를 잃었을 때 발생한다.
 * @asis for=ed_acctDeptCd event=OnKillFocus()
 */
scwin.udc_bilgClntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_bilgClntNo, ed_bilgClntNm, '2', 'CD');
};

/**
 * @event 
 * @name udc_acctDeptCd_onblurNameEvent 
 * @description 청구거래처) name 포커스를 잃었을 때 발생한다.
 * @asis for=ed_acctDeptNm event=OnKillFocus()
 */
scwin.udc_bilgClntNo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_bilgClntNo, ed_bilgClntNm, '2', 'NM');
};

/**
 * @event 
 * @name udc_bilgClntNo_onclickEvent  
 * @description 청구거래처) 검색버튼 클릭 시 발생
 */
scwin.udc_bilgClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_bilgClntNo, ed_bilgClntNm, '2', 'F');
};

/**
 * @event 
 * @name udc_pchsClntNo_onblurCodeEvent  
 * @description 하불거래처) code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_pchsClntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_pchsClntNo, ed_pchsClntNm, '3', 'CD');
};

/**
 * @event 
 * @name udc_pchsClntNo_onblurNameEvent  
 * @description 하불거래처) name 포커스를 잃었을 때 발생한다.
 */
scwin.udc_pchsClntNo_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_pchsClntNo, ed_pchsClntNm, '3', 'NM');
};

/**
 * @event 
 * @name udc_pchsClntNo_onclickEvent 
 * @description 하불거래처) 검색버튼 클릭 시 발생
 */
scwin.udc_pchsClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_pchsClntNo, ed_pchsClntNm, '3', 'F');
};

/**
 * @event 
 * @name udc_regId_onblurCodeEvent  
 * @description 등록자) code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_regId_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_regId, ed_regNm, '7', 'CD');
};

/**
 * @event 
 * @name udc_regId_onblurNameEvent  
 * @description 등록자) name 포커스를 잃었을 때 발생한다.
 */
scwin.udc_regId_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_regId, ed_regNm, '7', 'NM');
};

/**
 * @event 
 * @name udc_regId_onclickEvent 
 * @description 등록자) 검색버튼 클릭 시 발생
 */
scwin.udc_regId_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_regId, ed_regNm, '7', 'F');
};

/**
 * @event 
 * @name gr_master_onheaderclick 
 * @description 헤더가 클릭된 경우 발생
 * @asis for=gr_master event=OnHeadCheckClick(Col, Colid, bCheck)
 */
scwin.gr_master_onheaderclick = function (headerId) {
  if (headerId != 'chk') return;

  // 전체체크박스체크시
  const bCheck = gr_master.getHeaderValue(headerId);
  const rowCnt = ds_master.getRowCount();
  switch (bCheck) {
    case true:
      scwin.chkSpplyAmt = 0;

      // 이미 발행된건 삭제하지 않는다.
      for (let i = 0; i < rowCnt; i++) {
        let rowData = ds_master.getRowJSON(i);
        let nSpplyAmt = $c.num.parseInt($p, scwin.chkSpplyAmt, 0);
        let nAmt = $c.num.parseInt($p, rowData["amt"], 0);
        ds_master.setCellData(i, "chk", "F");
        switch (rowData['slipKndCd']) {
          case "K16":
            // 매출
            if (rowData["bilgSlipNo"] == "") {
              ds_master.setCellData(i, "chk", "T");
              scwin.chkSpplyAmt = nSpplyAmt + nAmt;
            }
            break;
          case "K17":
            // 매입
            if (rowData["pchsSlipNo"] == "") {
              ds_master.setCellData(i, "chk", "T");
              scwin.chkSpplyAmt = nSpplyAmt + nAmt;
            }
            ;
            break;
          default:
            if (rowData["bilgSlipNo"] == "" || rowData["pchsSlipNo"] == "") {
              ds_master.setCellData(i, "chk", "T");
              scwin.chkSpplyAmt = 0;
            }
            break;
        }
        ;
      }
      break;
    default:
      for (i = 0; i < rowCnt; i++) {
        ds_master.setCellData(i, "chk", "F");
        scwin.chkSpplyAmt = 0;
      }
      ;
      break;
  }
  ;
  if (scwin.chkSpplyAmt == 0) {
    ed_vatAmt.setValue(0);
  } else {
    ed_vatAmt.setValue(Math.round($c.num.parseInt($p, scwin.chkSpplyAmt, 0) * 0.1)); //반올림
  }
  ;
};

/**
 * @event 
 * @name gr_master_oncellclick 
 * @description 셀이 클릭된 경우 발생
 */
scwin.gr_master_oncellclick = async function (rowIndex, columnIndex, columnId) {
  const rowData = ds_master.getRowJSON(rowIndex);
  switch (columnId) {
    case "chk":
      _onCheckClick();
      break;
    case "prtChk":
      _onPrtCheckClick();
      break;
    case "bilgSlipNo":
      _bilgSlipNo();
      break;
    case "pchsSlipNo":
      _pchsSlipNo();
      break;
    default:
      return;
  }
  ;

  // for=gr_master event=OnCheckClick(Row, Colid, Check)
  // chk
  async function _onCheckClick() {
    const Check = rowData['chk'];
    const msg = "전표가 이미 발행 된 상태입니다.";
    const nSpplyAmt = $c.num.parseInt($p, scwin.chkSpplyAmt, 0);
    const nAmt = $c.num.parseInt($p, rowData["amt"]);
    switch (rowData["slipKndCd"]) {
      case "K16":
        if (rowData["bilgSlipNo"] != "") {
          await $c.win.alert($p, "매출" + msg);
          ds_master.setCellData(rowIndex, "chk", "F");
        } else {
          if (Check == "T") {
            scwin.chkSpplyAmt = nSpplyAmt + nAmt;
          } else {
            scwin.chkSpplyAmt = nSpplyAmt - nAmt;
          }
        }
        break;
      case "K17":
        if (rowData["pchsSlipNo"] != "") {
          await $c.win.alert($p, "매입" + msg);
          ds_master.setCellData(rowIndex, "chk", "F");
        } else {
          if (Check == "T") {
            scwin.chkSpplyAmt = nSpplyAmt + nAmt;
          } else {
            scwin.chkSpplyAmt = nSpplyAmt - nAmt;
          }
        }
        ;
        break;
      default:
        if (rowData["bilgSlipNo"] != "" && rowData["pchsSlipNo"] != "") {
          await $c.win.alert($p, msg);
          ds_master.setCellData(rowIndex, "chk", "F");
          scwin.chkSpplyAmt = 0;
        }
        ;
        break;
    }
    ;
    if (scwin.chkSpplyAmt <= 0) {
      ed_vatAmt.setValue(0);
      scwin.chkSpplyAmt = 0;
    } else {
      ed_vatAmt.setValue(Math.round($c.num.parseInt($p, scwin.chkSpplyAmt, 0) * 0.1)); //반올림
    }
  }
  ;

  // prtChk
  async function _onPrtCheckClick() {
    if (rowData["pchsSlipNo"] != "") return;

    // 매입전표만 거래명세서 출력 가능
    await $c.win.alert($p, "매입전표 미 발행건입니다.");
    ds_master.setCellData(rowIndex, "prtChk", "F");
  }
  ;

  // for=gr_master event=OnClick(row, colid) >
  // 전표번호
  function _bilgSlipNo() {
    if (rowData["bilgSlipNo"] == '') return;
    $c.gus.cfShowSlipInfo($p, rowData["bilgSlipNo"]);
  }
  ;
  function _pchsSlipNo() {
    if (rowData["pchsSlipNo"] == '') return;
    $c.gus.cfShowSlipInfo($p, rowData["pchsSlipNo"]);
  }
  ;

  // readOnly 관련은 gr_master_oncellindexchange 이동
};

/**
 * @event 
 * @name gr_master_oncellindexchange 
 * @description 방향키 또는 마우스를 이용해 선택한 셀이 변경되거나, 
 * API를 이용하여 셀에 포커스를 적용해 선택된 셀이 변경되었을 때 발생
 */
scwin.gr_master_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  const rowStatus = ds_master.getRowStatusValue(rowIndex);
  const rowData = ds_master.getRowJSON(rowIndex);
  const colId = gr_master.getColumnID(columnIndex);

  // 1. 전표번호 클릭 처리 (상단 return 로직)
  if (rowStatus != 2) {
    // 신규가 아닐 때만 체크하는 것이 일반적
    if (colId == "bilgSlipNo" && rowIndex > 0 && rowData["bilgSlipNo"] != "") {
      scwin.cfShowSlipInfo(rowData["bilgSlipNo"]);
      return;
    } else if (colId == "pchsSlipNo" && rowIndex > 0 && rowData["pchsSlipNo"] != "") {
      scwin.cfShowSlipInfo(rowData["pchsSlipNo"]);
      return;
    }
  }

  // 2. RowStatus에 따른 편집 제어
  if (rowStatus == 0) {
    // 조회상태
    gr_master.setColumnReadOnly("inDt", true);
    gr_master.setColumnReadOnly("outDt", true);
    gr_master.setColumnReadOnly("reqDt", true);
  }
  if (rowStatus != 2) {
    // 신규가 아닐 경우
    gr_master.setColumnReadOnly("wrkNm", true);
    gr_master.setColumnReadOnly("productNo", true);
    gr_master.setColumnReadOnly("bilgClntNm", true);
    gr_master.setColumnReadOnly("pchsClntNm", true);
    gr_master.setColumnReadOnly("acctDeptNm", true);
  } else {
    // 신규일 경우
    gr_master.setColumnReadOnly("wrkNm", false);
    gr_master.setColumnReadOnly("productNo", false);
    if (rowData["slipKndCd"] == "K16") {
      gr_master.setColumnReadOnly("bilgClntNm", false);
      gr_master.setColumnReadOnly("pchsClntNm", true);
    } else if (rowData["slipKndCd"] == "K17") {
      gr_master.setColumnReadOnly("bilgClntNm", false); //(요청거래처 사용을 위해) NONE > ANY변경 2026.04.03
      gr_master.setColumnReadOnly("pchsClntNm", false);
    }
  }

  // 3. 매출/매입 및 전표번호 유무에 따른 상세 제어
  if (rowData["slipKndCd"] == "K16") {
    // 매출
    if (rowData["bilgSlipNo"] == "") {
      scwin.f_ChgGridView("N");
      gr_master.setColumnReadOnly("bilgStopNm", false);
      gr_master.setColumnReadOnly("pchsStopNm", true);
      gr_master.setColumnReadOnly("bilgUpr", false);
      gr_master.setColumnReadOnly("pchsUpr", true);
      gr_master.setColumnReadOnly("bilgAmt", false);
      gr_master.setColumnReadOnly("pchsAmt", true);
      gr_master.setColumnReadOnly("reqDt", true);
    } else {
      scwin.f_ChgGridView("Y");
    }
  } else if (rowData["slipKndCd"] == "K17") {
    // 매입
    if (rowData["pchsSlipNo"] == "") {
      scwin.f_ChgGridView("N");
      gr_master.setColumnReadOnly("bilgStopNm", true);
      gr_master.setColumnReadOnly("pchsStopNm", false);
      gr_master.setColumnReadOnly("bilgUpr", true);
      gr_master.setColumnReadOnly("pchsUpr", false);
      gr_master.setColumnReadOnly("bilgAmt", true);
      gr_master.setColumnReadOnly("pchsAmt", false);
      gr_master.setColumnReadOnly("reqDt", false);
    } else {
      scwin.f_ChgGridView("Y");
    }
  }
};

/**
 * @event 
 * @name gr_master_ontextimageclick 
 * @description inputType이 textImage인 경우 이미지가 클릭됐을 때 발생
 * @asis for=gr_master event=OnPopup(row, colid, data)
 */
scwin.gr_master_ontextimageclick = async function (rowIndex, columnIndex) {
  let gacctDeptCd = "";
  let gacctDeptNm = "";
  let rtnList = [];
  const colID = gr_master.getColumnID(columnIndex);
  switch (colID) {
    case "bilgClntNm":
      _bilgClntNm();
      break;
    case "pchsClntNm":
      _pchsClntNm();
      break;
    case "acctDeptNm":
      _acctDeptNm();
      break;
    default:
      return;
  }
  ;

  //청구거래처
  async function _bilgClntNm() {
    rtnList = await scwin.f_openPopUp(gacctDeptCd, gacctDeptNm, '4', 'SKIP');
    if (rtnList == null) {
      ds_master.setCellData(rowIndex, "bilgClntNo", "");
      ds_master.setCellData(rowIndex, "bilgClntNm", "");
      ds_master.setCellData(rowIndex, "clntNo", "");
      ds_master.setCellData(rowIndex, "reqClntNo", "");
      return;
    }
    ;
    if (rtnList[0] == "N/A") return;
    ds_master.setCellData(rowIndex, "bilgClntNo", rtnList[0]);
    ds_master.setCellData(rowIndex, "bilgClntNm", rtnList[1]);
    const colId = "";
    switch (ds_master.getCellData(rowIndex, "slipKndCd")) {
      //매출
      case "K16":
        colId = "clntNo";
        break;
      //매입
      case "K17":
        colId = "reqClntNo";
        break;
      default:
        return;
    }
    ds_master.setCellData(rowIndex, colId, rtnList[0]);
  }
  ;

  //하불거래처
  async function _pchsClntNm() {
    rtnList = await scwin.f_openPopUp(gacctDeptCd, gacctDeptNm, '5', 'SKIP');
    if (rtnList == null) {
      ds_master.setCellData(rowIndex, "pchsClntNo", "");
      ds_master.setCellData(rowIndex, "pchsClntNm", "");
      ds_master.setCellData(rowIndex, "clntNo", "");
      return;
    }
    ;
    if (rtnList[0] == "N/A") return;
    ds_master.setCellData(rowIndex, "pchsClntNo", rtnList[0]);
    ds_master.setCellData(rowIndex, "pchsClntNm", rtnList[1]);
    ds_master.setCellData(rowIndex, "clntNo", rtnList[0]);
  }
  ;

  // 귀속부서
  async function _acctDeptNm() {
    rtnList = await scwin.f_openPopUp(gacctDeptCd, gacctDeptNm, '6', 'SKIP');
    if (rtnList == null) {
      ds_master.setCellData(rowIndex, "acctDeptCd", "");
      ds_master.setCellData(rowIndex, "acctDeptNm", "");
      return;
    }
    ;
    if (rtnList[0] == "N/A") return;
    ds_master.setCellData(rowIndex, "acctDeptCd", rtnList[0]);
    ds_master.setCellData(rowIndex, "acctDeptNm", rtnList[1]);
  }
  ;
};

/**
 * @event 
 * @name gr_master_oneditend 
 * @description 셀의 편집이 끝난 경우 발생하며, onafteredit보다 먼저 발생
 * @asis for=gr_master event=OnExit(row, colid, olddata)
 */
scwin.gr_master_oneditend = function (rowIndex, columnIndex, value) {
  const colId = gr_master.getColumnID(columnIndex);
  let targetColId = '';
  switch (colId) {
    case "bilgStopNm": // 청구목적지
    case "pchsStopNm":
      // 하불목적지
      targetColId = "stopNm";
      break;
    case "bilgUpr": // 청구단가
    case "pchsUpr":
      // 하불단가
      targetColId = "upr";
      break;
    case "bilgAmt": // 청구금액
    case "pchsAmt":
      // 하불금액
      targetColId = "amt";
      break;
    default:
      return;
  }
  ;
  ds_master.setCellData(rowIndex, targetColId, value);
};

/**
 * @event 
 * @name btn_reset_onclick 
 * @description 검색 초기화 버튼 클릭 시 발생
 */
scwin.btn_reset_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1);
};

/**
 * @event 
 * @name btn_search_onclick 
 * @description 조회 버튼 클릭 시 발생
 */
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};

/**
 * @event 
 * @name btn_Pro_onclick 
 * @description 전표발행 버튼 클릭 시 발생
 */
scwin.btn_Pro_onclick = function (e) {
  scwin.f_Process();
};

/**
 * @event 
 * @name f_AddRow 
 * @description 행추가 버튼 클릭 시 발생
 */
scwin.f_AddRow = function () {
  const insertIdx = ds_master.insertRow();
  ds_master.setCellData(insertIdx, "slipKndCd", lc_slipKndCd.getValue());
  scwin.moveRowPosition(insertIdx, gr_master);
};

/**
 * @event 
 * @name f_UndoRow 
 * @description 취소 버튼 클릭 시 발생
 */
scwin.f_UndoRow = function () {
  const focusedIdx = ds_master.getRowPosition();
  $c.data.undoRow($p, gr_master);
  scwin.moveRowPosition(focusedIdx - 1, gr_master);
};

/**
 * @event 
 * @name btn_Print_onclick 
 * @description 거래명세서 출력 버튼 클릭 시 발생
 */
scwin.btn_Print_onclick = function (e) {
  scwin.f_Print();
};

/**
 * @event 
 * @name btn_Save_onclick 
 * @description 저장 버튼 클릭 시 발생
 */
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};

/**
 * @event 
 * @name btn_Delete_onclick 
 * @description 삭제 버튼 클릭 시 발생
 */
scwin.btn_Delete_onclick = function (e) {
  scwin.f_Delete();
};

/**
 * @event 
 * @name inputF_onclick 
 * @description 엑셀업로드(CSV) 버튼 클릭 시 발생
 */
scwin.inputF_onclick = function (e) {
  scwin.f_Upload();
};

/**
 * @event 
 * @name ds_excel_ondataload 
 * @description DataList의 데이터가 전체적으로 변경(set)되는 경우 발생
 */
scwin.ds_excel_ondataload = function () {
  scwin.f_upload1();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전표종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_slipKndCd',style:'width:150px;',submenuSize:'fixed',ref:'data:dma_search.slipKndCd',objType:'data','ev:onchange':'scwin.lc_slipKndCd_onchange',displayMode:'value delim label',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K16'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입전표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'K17'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'req',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_schKndCd',style:'width:100px;',submenuSize:'fixed',ref:'data:dma_search.schKndCd',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'등록'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'전표'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'schDateFrom',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar3',refEdDt:'schDateTo',edFromId:'ed_schDateFrom',edToId:'ed_schDateTo',objTypeFrom:'data',objTypeTo:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'',selectID:'',style:'',validTitle:'귀속부서',btnId:'btn_acctDeptCd',id:'udc_acctDeptCd',objTypeCode:'data',objTypeName:'data',allowCharCode:'0-9',maxlengthCode:'5','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',refDataCollection:'dma_search',code:'acctDeptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_wrkNm',style:'width: 150px;',objType:'data',ref:'data:dma_search.wrkNm'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_slipYn',style:'width:150px;',submenuSize:'fixed',ref:'data:dma_search.slipYn',objType:'data',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_ioKndCd',style:'width:100px;',submenuSize:'fixed',ref:'data:dma_search.ioKndCd',objType:'data',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'입고일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'입고'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출고일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'출고'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar4',refDataMap:'dma_search',refEdDt:'ioDateTo',refStDt:'ioDateFrom',style:'',edFromId:'ed_ioDateFrom',edToId:'ed_ioDateTo',objTypeFrom:'data',objTypeTo:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'제품번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_productNo',style:'width: 150px;',objType:'data',maxlength:'20','ev:onkeyup':'scwin.upperFlag',allowChar:'a-zA-Z0-9',ref:'data:dma_search.productNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_slipNo',style:'width: 150px;',objType:'data',allowChar:'0-9',maxlength:'10',ref:'data:dma_search.slipNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구거래처 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_bilgClntNo',validTitle:'',nameId:'ed_bilgClntNm',style:'',id:'udc_bilgClntNo',objTypeCode:'data',objTypeName:'data',maxlengthCode:'6',allowCharCode:'0-9','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent',refDataCollection:'dma_search',code:'bilgClntNo','ev:onblurCodeEvent':'scwin.udc_bilgClntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bilgClntNo_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'하불거래처 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_pchsClntNo',nameId:'ed_pchsClntNm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_pchsClntNo',objTypeCode:'data',objTypeName:'data',maxlengthCode:'6',allowCharCode:'0-9','ev:onclickEvent':'scwin.udc_pchsClntNo_onclickEvent',refDataCollection:'dma_search',code:'pchsClntNo','ev:onblurCodeEvent':'scwin.udc_pchsClntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_pchsClntNo_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_regId',nameId:'ed_regNm',popupID:'',selectID:'',style:'',validTitle:'등록자',id:'udc_regId',objTypeCode:'data',objTypeName:'data',maxlengthCode:'6',allowCharCode:'0-9','ev:onclickEvent':'scwin.udc_regId_onclickEvent',code:'regId',refDataCollection:'dma_search','ev:onblurCodeEvent':'scwin.udc_regId_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_regId_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 정산처리 내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'작성일자 ',class:''}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_slipDt',class:'',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd',objType:'data',mandatory:'true',title:'작성일자'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세금액 ',style:''}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_vatAmt',style:'width: 150px;',objType:'data',dataType:'number',displayFormat:'#,###'}}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적요 ',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_summary',style:'width: 150px;',maxlength:'100'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Pro',style:'',type:'button','ev:onclick':'scwin.btn_Pro_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표발행'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_Excel',gridDownUserAuth:'X',btnPlusYn:'Y',btnUser:'N',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_master'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'12',visibleRowNumFix:'true','ev:onheaderclick':'scwin.gr_master_onheaderclick','ev:oncellclick':'scwin.gr_master_oncellclick','ev:ontextimageclick':'scwin.gr_master_ontextimageclick','ev:oneditend':'scwin.gr_master_oneditend',fixedColumn:'9',fixedColumnNoMove:'true','ev:oncellindexchange':'scwin.gr_master_oncellindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true',valueType:'other',falseValue:'F',trueValue:'T'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'출력',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'입고일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'출고일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'출발지',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'청구목적지',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'하불목적지',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'제품번호',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column56',value:'두께',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column54',value:'폭',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column52',value:'길이',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column50',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'청구단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'하불단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',value:'청구금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',value:'하불금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column62',value:'청구거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column58',value:'하불거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column74',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',value:'지급일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column70',value:'산재보험료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column68',value:'매출전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column66',value:'매입전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column44',value:'청구거래처',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column76',value:'하불거래처',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column78',value:'귀속부서',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true',trueValue:'T',valueType:'other',falseValue:'F',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prtChk',inputType:'checkbox',width:'70',falseValue:'F',trueValue:'T',valueType:'other',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkNm',inputType:'text',width:'70',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inDt',inputType:'calendar',width:'100',displayFormat:'yyyy/MM/dd',dataType:'date',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outDt',inputType:'calendar',width:'100',displayFormat:'yyyy/MM/dd',dataType:'date',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'startNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgStopNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsStopNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'productNo',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'thick',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0.00',excelCellType:'number',maxByteLength:'3',byteCheckIgnoreChar:'.'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'width',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'len',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'unit',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgUpr',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsUpr',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgAmt',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'bilgClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'pchsClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'acctDeptNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'reqDt',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'insAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'link',id:'bilgSlipNo',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'link',id:'pchsSlipNo',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgClntNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'pchsClntNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctDeptCd',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'totalTxt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column107',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column106',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column105',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column104',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column103',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column102',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column101',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column100',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column99',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column98',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column97',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column96',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column95',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column94',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column93',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column92',displayMode:'label',textAlign:'right',expression:'SUM(\'bilgAmt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column91',displayMode:'label',expression:'sum(\'pchsAmt\')',displayFormat:'##,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column90',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column89',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column88',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column87',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column86',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column85',displayMode:'label',textAlign:'right',expression:'sum(\'insAmt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column84',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column83',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column82',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column80',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'N',btnRowAddObj:'btn_AddRow',btnCancelObj:'btn_UndoRow',rowAddFunction:'scwin.f_AddRow',cancelFunction:'scwin.f_UndoRow',rowAddUserAuth:'C'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'inputF',style:'',type:'button','ev:onclick':'scwin.inputF_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀업로드'}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_Cd',id:'udc_comCode_Grid',nameId:'',popupID:'',selectID:'',style:'display:none;',validTitle:'',code:'gridCode',name:'gridCodeNm',btnId:'btn_comCode_Grid'}},{T:1,N:'xf:select1',A:{appearance:'full',cols:'',id:'rd_upload',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'xlsx'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'csv'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Print',style:'',type:'button','ev:onclick':'scwin.btn_Print_onclick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래명세서 출력'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',objType:'bSave',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.btn_Delete_onclick',objType:'bSave',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]},{T:1,N:'xf:group',A:{class:'left row-gap-8',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'삭제: DEBIS 전표가 생성되지 않은 건에 대해서 업로드된 내역을 삭제',style:''}}]}]}]},{T:1,N:'xf:group',A:{id:'hide_group',style:'display: none;'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'',codeId:'',popupID:'',validTitle:'',nameId:'',style:'',skipOnBlurCodeValueEmpty:'Y',id:'udc_comPopup',skipOnBlurNameValueEmpty:'Y'}},{T:1,N:'xf:input',A:{style:'width:144px; height:21px; ',id:'hid_slipKndCd'}},{T:1,N:'w2:gridView',A:{'ev:oneditend':'scwin.gr_master_oneditend','ev:oncellclick':'scwin.gr_master_oncellclick','ev:onrowindexchange':'scwin.gr_master_onrowindexchange',fixedColumnNoMove:'true',scrollByColumnAdaptive:'false','ev:ontextimageclick':'scwin.gr_master_ontextimageclick',scrollByColumn:'false','ev:onheaderclick':'scwin.gr_master_onheaderclick',checkReadOnlyOnPasteEnable:'',focusMode:'cell',fixedColumn:'9',visibleRowNumFix:'true',dataList:'data:ds_excel',style:'',autoFit:'none',id:'gr_excel',visibleRowNum:'15',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col1',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col2',value:'입고일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col3',value:'출고일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col4',value:'출발지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'col5',value:'청구목적지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'col6',value:'하불목적지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col7',value:'제품번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col8',value:'두께',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col9',value:'폭',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col10',value:'길이',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col11',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col12',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col13',value:'청구단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col14',value:'하불단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col15',value:'청구금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col16',value:'하불금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'col17',value:'청구거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col18',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'col19',value:'하불거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col20',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col21',value:'지급일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'col22',value:'산재보험료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column107',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',id:'col1'}},{T:1,N:'w2:column',A:{width:'100',id:'col2'}},{T:1,N:'w2:column',A:{width:'100',id:'col3'}},{T:1,N:'w2:column',A:{width:'100',id:'col4'}},{T:1,N:'w2:column',A:{width:'120',id:'col5'}},{T:1,N:'w2:column',A:{width:'120',id:'col6'}},{T:1,N:'w2:column',A:{width:'100',id:'col7'}},{T:1,N:'w2:column',A:{width:'70',id:'col8'}},{T:1,N:'w2:column',A:{width:'70',id:'col9'}},{T:1,N:'w2:column',A:{width:'70',id:'col10'}},{T:1,N:'w2:column',A:{width:'70',id:'col11'}},{T:1,N:'w2:column',A:{width:'70',id:'col12'}},{T:1,N:'w2:column',A:{width:'100',id:'col13'}},{T:1,N:'w2:column',A:{width:'100',id:'col14'}},{T:1,N:'w2:column',A:{width:'100',id:'col15'}},{T:1,N:'w2:column',A:{width:'100',id:'col16'}},{T:1,N:'w2:column',A:{width:'120',id:'col17'}},{T:1,N:'w2:column',A:{width:'100',id:'col18'}},{T:1,N:'w2:column',A:{width:'120',id:'col19'}},{T:1,N:'w2:column',A:{width:'100',id:'col20'}},{T:1,N:'w2:column',A:{width:'100',id:'col21'}},{T:1,N:'w2:column',A:{width:'120',id:'col22'}},{T:1,N:'w2:column',A:{width:'70',id:'col23'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col3'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col4'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'col5'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'col6'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col7'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col8'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col9'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col10'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col11'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col12'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col13'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col14'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col15'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col16'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'col17'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col18'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'col19'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col20'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col21'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'col22'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col23'}}]}]}]}]}]}]}]})