/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_09_02p.xml 181193 4f56ba131a175d8e9bed061a51fbf62b649e435b3f253460bef0990894e102f5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_txncontents',repeatNode:'map',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_txncontents_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnContSeq',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsNm',name:'증빙',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crnNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnDt',name:'계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDt',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptNm',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatCrn',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급가액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'name27',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'name29',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'frchCrn',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchNm',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDistYn',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNo',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNm',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClsCd',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmAcctDeptCd',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmAcctDeptNm',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClntNo',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adjmClntNm',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termMgntYn',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empMgntYn',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtMgntYn',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizMgntYn',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatYn',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNoYn',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frchNoYn',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsYn',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'limitAmt',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcAmt',name:'할인금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardKndCd',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntYn',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchCd',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemCd',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchNm',name:'지점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemNm',name:'매입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAmt1',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAcctCd1',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcSummary1',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAmt2',name:'name66',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAcctCd2',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcSummary2',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'name70',dataType:'text'}},{T:1,N:'w2:column',A:{id:'giroYn',name:'name71',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paymentPrd',name:'name72',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductfixClsCd',name:'name73',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnCls',name:'name74',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCollectionNum',name:'name75',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rowNum',name:'name76',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehcleNo',name:'name77',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiCarYn',name:'name78',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expenseCd',name:'name79',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAcctNm1',name:'name80',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etcAcctNm2',name:'name81',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntCrn',name:'name82',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxClsCd',name:'name83',dataType:'text'}},{T:1,N:'w2:column',A:{id:'serviceCharge',name:'봉사료',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_exchRtSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crcCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_txn'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptNm',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawEmpNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drawAcctDeptCd',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_budgetCheck'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'budgetYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'budgetRsltsAmt',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_tmp',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'pchsNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeqStr',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_acctCd',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_code'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cdNm',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_editAuth',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col11',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col12',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ds_slipNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exchRt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdExchRt',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_budget',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntlUnitClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetRsltsAmt',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetRsltsSettAmt',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_budget_temp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_chk'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acctCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'corCardDeductYn',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_corCardDeductYn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_getMaxCloseYm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_prov',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlIntendDt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlAmtFcrc',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postSetlAmt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postSetlAmtFcrc',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susPayClsCd',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptAmt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptAmtFcrc',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlDt',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlIntendAmt',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlIntendAmtFcrc',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlCompleteYn',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postYn',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setexchRt',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name30',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_provHeader',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'summary',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlDt',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'susPayClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawAcctDeptCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookKndNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankbookNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptNm',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_evidac',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'branchCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnNo',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnContSeq',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidEchAcctSeq',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'name18',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exclusionOfTaxtation',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_card',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'checkYn',name:'체크여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'transDate',name:'전송일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gubun',name:'구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cardNum',name:'카드번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'buyCollectionNum',name:'매입추신번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'approveDate',name:'승인일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'approveTime',name:'승인시간'}},{T:1,N:'w2:column',A:{dataType:'text',id:'buyDate',name:'매입일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chargeDate',name:'청구일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'approveNum',name:'승인번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dealDate',name:'원)거래일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'currency',name:'CURRENCY'}},{T:1,N:'w2:column',A:{dataType:'text',id:'approveAmt',name:'승인금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'tax',name:'세금'}},{T:1,N:'w2:column',A:{dataType:'text',id:'serviceCharge',name:'봉사료'}},{T:1,N:'w2:column',A:{dataType:'text',id:'approveTotal',name:'승인합계'}},{T:1,N:'w2:column',A:{dataType:'text',id:'buyExchangeRate',name:'매입시적용환율'}},{T:1,N:'w2:column',A:{dataType:'text',id:'usdAmt',name:'US$ 금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'krwAmt',name:'원화환산금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'payDate',name:'결제일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'useType',name:'상품구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'payTotal',name:'결제총금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'payAmt',name:'결제원금'}},{T:1,N:'w2:column',A:{dataType:'text',id:'payInterest',name:'결제이자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fee',name:'수수료'}},{T:1,N:'w2:column',A:{dataType:'text',id:'membershipFee',name:'연회비'}},{T:1,N:'w2:column',A:{dataType:'text',id:'installmentMonths',name:'할부개월수'}},{T:1,N:'w2:column',A:{dataType:'text',id:'remainInstallmentMonths',name:'잔여할부개월수'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vendorNum',name:'가맹점번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'abroadUse',name:'해외사용여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'abroadCurrency',name:'해외사용통화코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vendorTaxNum',name:'가맹점사업자번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vendorName',name:'가맹점명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vendorPerson',name:'가맹점대표자명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vendorTel',name:'가맹점전화번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vendorAddress1',name:'가맹점주소1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vendorAddress2',name:'가맹점주소2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vendorCloseInfo',name:'가맹점휴폐업정보'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mmcCode',name:'업종코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mmcName',name:'업종명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vendorZipCode',name:'가맹점우편번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'actualPlaceAmt',name:'현지금액'}},{T:1,N:'w2:column',A:{dataType:'text',id:'taxGubun',name:'과세유형'}},{T:1,N:'w2:column',A:{dataType:'text',id:'taxGubunName',name:'과세유형명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bizRegDate',name:'휴폐업일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'taxDate',name:'세무일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'updateDate',name:'업데이트일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipNo',name:'DEBIS전표번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'delYn',name:'삭제여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'address',name:'주소'}},{T:1,N:'w2:column',A:{dataType:'text',id:'taxnCls',name:'과세구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'apprvGbn',name:'승인구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctCd',name:'계정코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctNm',name:'계정명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'summary',name:'적요'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_chkNonDeductYnCrn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_chkNonDeductYnCrn_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exclusionOfbusiness',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'COL1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_acctCd_in'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'name12',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_code',action:'/cm.zz.RetrieveEditAuthCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_code","key":"IN_DS1"},{"id":"ds_editAuth","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_editAuth","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_code_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.gnrlaccount.slipmgnt.ProcessExpenseSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_txn","key":"IN_DS1"},{"id":"ds_txncontents","key":"IN_DS2"},{"id":"ds_prov","key":"IN_DS3"},{"id":"ds_evidac","key":"IN_DS4"},{"id":"ds_tmp","key":"IN_DS5"},{"id":"ds_slipNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipNo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_exchRt',action:'/ac.fm.stdinfomgnt.RetrieveExchangeRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_exchRtSearch","key":"IN_DS1"},{"id":"ds_exchRt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_exchRt","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous'}},{T:1,N:'xf:submission',A:{id:'sbm_budgetRt',action:'/ac.co.budgetmgnt.ValidateBudgetRemainAmtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_budgetCheck","key":"IN_DS1"},{"id":"ds_budget","key":"OUT_DS1"},{"id":"ds_budget_temp","key":"OUT_DS2"}]',target:'data:json,{"id":"ds_budget","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_budgetRt_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_acctCdRetreive',action:'/ac.fi.gnrlaccount.slipmgnt.RetreiveCorCardDeductYnCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_chk","key":"IN_DS1"},{"id":"ds_corCardDeductYn","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_corCardDeductYn","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous'}},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_getMaxCloseYm","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_getMaxCloseYm_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_acctCd',action:'/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=retrieveExpenseAcctCdInfo&param10=F',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_acctCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_evidClsCd',action:'/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=retrieveEvidInfo&param3=PCHS',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_evidClsCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_evidClsCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_exclusionOfTaxtation',action:'/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=getCommonCodeInfomation&param1=FI096',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_exclusionOfTaxtation","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_exclusionOfbusiness',action:'/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=getCommonCodeInfomation&param1=FI093',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_exclusionOfbusiness","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_chkNonDeductYnCrn',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_chkNonDeductYnCrn_condition',target:'data:json,{"id":"ds_chkNonDeductYnCrn","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수 ㅁ
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.sysAdminYn = scwin.login.sysAdminYn;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.vLoginCoCd2 = "";
scwin.isSubCompany = false;
scwin.user_id = $c.data.getMemInfo($p, "userId");
scwin.slipKndCd = ACConstants.SLIPKNDCD_PERSONAL_CORP_CARD_ADJM;
scwin.slipKndNm = "경비전표";
scwin.slipDt = WebSquare.date.getCurrentServerDate();
scwin.vUpperAcctDeptCd = "";
scwin.vBizDomCd = "";
// 변동비구분
scwin.varCostClsCd = "";
// 소속구분
scwin.gBizDomCdClsCd = "";
// 구분값
scwin.rltSeq = 0;
// 행복사여부
scwin.rowCopyYn = 0;
scwin.ds_parent = "";
scwin.txtCoCd;
scwin.txtCoClsCd;
scwin.isFirst = true;
scwin.isFirst2 = true;
scwin.firstAdjmClntNm;
scwin.firstAcctCd;
scwin.firstAcctNm;
scwin.check = 0;
scwin.onpageload = function () {
  console.log("====== onpageload ==================v 1.02");
  scwin.ds_parent = $c.data.getParameter($p, "ds_card_dump");
};
scwin.onUdcCompleted = async function () {
  console.log("==-==-== onUdcCompleted");
  const codeOptions = [{
    grpCd: "FI005",
    compID: "acb_deductClsCd"
  }, {
    grpCd: "FI069",
    compID: "acb_taxnCls"
  }, {
    grpCd: "ZZ006",
    compID: "acb_crcCd",
    opt: {
      "range": "1"
    }
  }, {
    grpCd: "FI003",
    compID: "acb_adjmClsCd",
    opt: {
      "range": "3,2"
    }
  }, {
    grpCd: "FI114",
    compID: "acb_expenseCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  // ed_exchRt.setValue(0)
  scwin.f_Header();
  dma_search2.set("coCd", scwin.vCoCd); //증빙배부 버튼 권한

  //투입불가계정 조회
  $c.sbm.execute($p, sbm_acctCd);

  //증빙종류 조회
  $c.sbm.execute($p, sbm_evidClsCd);

  //  매입세액불공제 처리 대상 과세유형 DataSet Road 20120629 BY KIMSEOK
  $c.sbm.execute($p, sbm_exclusionOfTaxtation);

  //  매입세액불공제 처리 대상 업종코드 DataSet Road 20120629 BY KIMSEOK  
  $c.sbm.execute($p, sbm_exclusionOfbusiness);

  // KYU_TEST : gauceUtil 하드 코딩 제거
  // console.log( " 국세청과세유형     gauceUtil 테스트 FI069  [02]["+scwin.getCommonCodename("02", "FI069") +"]");
  // console.log( " 불공제대상업종코드 gauceUtil 테스트 FI093  [1207]["+scwin.getCommonCodename("1207", "FI093") +"]");
  // console.log( " 증빙유형          코드명 테스트 evidClsCd  [40]["+scwin.getCommonCodename("40", "evidClsCd") +"]");
};
scwin.ondataload = async function () {
  ds_txncontents.setRowPosition(0);
  ed_slipAcctDeptCd.options.hidVal = "";
  scwin.f_checkPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, '1');

  // $c.gus.cfCopyDataSet(scwin.ds_parent, ds_card, "copyHeader=yes");
  // $c.gus.cfCopyDataSetHeader(ds_card, ds_parent);    
  ds_card.setJSON($c.data.getParameter($p, "ds_card_dump"));

  // 콘트롤 활성화유무 기본값 설정 작성일자/발행부서/계정코드/귀속부서/적요를 제외하고 전체 비활성화 한다. 
  $c.gus.cfDisableObjects($p, [ed_cardNo, ed_adjmClntNo, img_adjmClntNo, ed_txnDt, ed_vatAmt, acb_crcCd, ed_vatDeclarAcctDeptCd, ed_crn, ed_spplyAmtFcrc, ed_exchRt, acb_evidClsCd, ed_crnNm, acb_taxnCls, ed_opntAcctCd, ed_opntAcctNm, img_vatDeclarAcctDeptCd, img_crn, ed_vehcleNo, ed_vehcleNm, acb_expenseCd, img_vehcleNo]);
  scwin.f_setCompanyInfo();

  // 데이터 세팅
  //alert("ds_card.CountRow >>> " + ds_card.CountRow);

  for (i = 0; i < ds_card.getTotalRow(); i++) {
    //alert("i => " + i + "\n" + "ds_card.CountRow=>"+ds_card.CountRow);
    await scwin.f_OnLoadSet(i);
  }
  scwin.getMaxCloseYm(); //마감년월 가져오기 

  if (scwin.vCoCd == "023") {
    //BIDC인경우login.getUserNm()
    ds_txncontents.setCellData(0, "adjmClntNm", "하나카드"); // 하나카드로 매핑 요청
    ed_adjmClntNm.setValue("하나카드");
  } else if (scwin.vCoCd == "024") {
    //동화인경우
    ds_txncontents.setCellData(0, "adjmClntNm", "롯데카드"); // 신한카드로 매핑 요청
    ed_adjmClntNm.setValue("롯데카드");
  } else if (scwin.vCoCd == "029") {
    //넥스트로인경우
    if (ds_card.getCellData(0, "cardNum") == "4025960071700304") {
      ds_txncontents.setCellData(0, "adjmClntNm", "현대카드"); // 현대카드로 매핑 요청
    } else {
      ds_txncontents.setCellData(0, "adjmClntNm", $c.data.getMemInfo($p, "userNm")); // 정산거래처번호
    }
  } else {
    ds_txncontents.setCellData(0, "adjmClntNm", $c.data.getMemInfo($p, "userNm")); // 정산거래처번호
    // await scwin.f_openPopUp('9', 'T'); // 초기 거래처 팝업
    // ds_txncontents.setCellData(0, "adjmClntNm", $c.data.getMemInfo("userNm")); // 정산거래처번호
  }

  // ds_txncontents.NameValue(1,"adjmClntNm") = "<%=login.getUserNm()%>"; // 정산거래처번호

  // txt_adjmClntNm.value = "김경주";
  // ed_adjmClntNo.text = "708438";    

  // 초기 거래처 팝업
  await scwin.f_openPopUp('9', 'T');
  scwin.f_getEditAuth(); //증빙배부 버튼 권한

  acb_adjmClsCd.setSelectedIndex(0);

  // scwin.ds_txncontents_onrowpositionchange()
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = async function () {
  // 사용자 구분이 자회사('SA')인 경우
  if (scwin.vUserHomeClsCd == ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.isSubCompany = true;
  } else {
    // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
    scwin.vCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.txtCoCd = scwin.vCoCd;
  scwin.txtCoClsCd = scwin.vCoClsCd;
};

//-------------------------------------------------------------------------
// 전월 마감여부 
//-------------------------------------------------------------------------
scwin.getMaxCloseYm = function () {
  $c.sbm.execute($p, sbm_getMaxCloseYm);
};
scwin.sbm_getMaxCloseYm_submitdone = function (e) {
  var thisYm = WebSquare.date.getCurrentServerDate(); // 오늘일자 가져오기
  //최소 미마감월이 당월이 아닐때
  if (ds_getMaxCloseYm.getCellData(0, "closeYm") != thisYm.substr(0, 6)) {
    var closeYm = ds_getMaxCloseYm.getCellData(0, "closeYm");
    var firstDay = closeYm.substr(0, 4) + "/" + closeYm.substr(4, 2) + "/" + "01"; // 1일
    let lastDD = $c.date.getLastDateOfMonth($p, closeYm);
    // var lastDay =  closeYm.substr(0,4)+"/"+closeYm.substr(4,2)+"/" + new Date(closeYm.substr(0,4),closeYm.substr(4,2),0).getDate(); // 마지막날
    ed_slipDt.setValue(closeYm + lastDD);
  } else {
    // var firstDay = thisYm.substr(0,4)+"/"+thisYm.substr(4,2)+"/"+"01";  //당월 1일
    // let lastDD    = $c.date.getLastDateOfMonth(thisYm.substr(0,6));
    // // var lastDay = thisYm.substr(0,4)+"/"+thisYm.substr(4,2)+"/"+ new Date(thisYm.substr(0,4),thisYm.substr(4,2),0).getDate(); //당월 마지막날
    // ica_postDt.setValue(lastDD);;
  }
};

//-------------------------------------------------------------------------
// 증빙배부 버튼 권한 - 공통코드 추가
//-------------------------------------------------------------------------
scwin.f_getEditAuth = function () {
  //공통코드 조회
  dma_code.set("grpCd", "FI092");
  dma_code.set("cd", $c.data.getMemInfo($p, "empNo"));
  dma_code.set("cdNm", $c.data.getMemInfo($p, "userNm"));
  $c.sbm.execute($p, sbm_code);

  //alert(ds_editAuth.NameValue(1,"cd") + ds_editAuth.NameValue(1,"useYn"));
};
scwin.sbm_code_submitdone = function (e) {
  if (scwin.slipKndCd == ACConstants.SLIPKNDCD_PERSONAL_CORP_CARD_ADJM) {
    if ($c.gus.cfIsNull($p, ds_editAuth.getCellData(0, "cd")) && scwin.sysAdminYn == '0') {
      $c.gus.cfDisableObjects($p, [btn_pu_evid]);
    } else {
      if (ds_editAuth.getCellData(0, "useYn") == "0") {
        $c.gus.cfDisableObjects($p, [btn_pu_evid]);
      } else if (ds_editAuth.getCellData(0, "useYn") == "1") {
        $c.gus.cfEnableObjects($p, [btn_pu_evid]);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 해당 사업자가 불공제 사업자 인지 여부 확인
//-------------------------------------------------------------------------
scwin.f_chkNonDeductYn = async function (chkCrn) {
  const strParam = {
    sysCd: "CommonEBC" // 시스템코드
    ,

    queryId: "chkNonDeductYnCrn" // 쿼리ID
    ,

    param1: chkCrn // SELECT
    ,

    param2: "" // 대상테이블
    ,

    param3: "" // 조건절
    ,

    param4: "" // CD
  };
  //데이터셋에 정보설정
  ds_chkNonDeductYnCrn_condition.setJSON(strParam);
  await $c.sbm.execute($p, sbm_chkNonDeductYnCrn);
};

//-------------------------------------------------------------------------
// DATA SETTING생성
//-------------------------------------------------------------------------
scwin.f_OnLoadSet = async function (i) {
  // 해당 사업자가 불공제 사업자 인지 여부 확인
  var chkCrn = ds_card.getCellData(i, "vendorTaxNum");
  await scwin.f_chkNonDeductYn(chkCrn);
  var chkNonDeductYn = ds_chkNonDeductYnCrn.getCellData(0, "col1");

  // 증빙종류 확정유무 구분코드 (확정:1/미확정:0)
  // 사업자번호의 과세유형구분코드 또는 여타 이유들로 인해,
  // 증빙종류의 공제/불공제유무가 확정인 경우엔 다른 조건에 의해서도 이를 변경하지 못하도록 구분하기 위한 변수

  var deductfixClsCd = 0;
  var insertRow = ds_txncontents.insertRow();
  ds_txncontents.setRowPosition(insertRow);
  ds_txncontents.setCellData(i, "evidClsCd", "40"); // 증빙구분코드
  ds_txncontents.setCellData(i, "deductClsCd", "2"); // 공제구분코드
  ds_txncontents.setCellData(i, "taxnCls", ds_card.getCellData(i, "taxnCls")); //과세유형 2012.07.03

  ds_txncontents.setCellData(i, "dcAmt", 0);
  scwin.acb_evidClsCd_onchange();
  /*
  --------------------------------------20120628 by KIMSEOK----------------------------------------------
  사업자등록번호 입력시,해당 사업자 번호의 과세유형구분코드에 따라 증빙종류를 공제/불공제 유무를 정해준다. 
  => 과세유형구분이 02:간이,03:면세,05:휴업,06:폐업인 경우에는 불공제 처리하고 그외의 경우는 공제처리한다. 
  [공통코드 FI096]
  -------------------------------------------------------------------------------------------------------
  */

  // 과세유형구분코드
  var taxnCls = ds_card.getCellData(i, "taxnCls");

  // 증빙종류 기본값:공제[1]
  var deductClsCd = "1";
  ds_txncontents.setCellData(i, "deductClsCd", "1");

  // 사업자번호를 조회하고, 해당 사업자번호의 과세유형코드를 나타내준다.
  acb_taxnCls.setValue(taxnCls);
  // 불공제가 아닐 경우 공통코드에 등록 되어 있는 과세유형, 업종/업태를 확인
  if (chkNonDeductYn == 'N') {
    for (var a = 0; a < ds_exclusionOfTaxtation.getTotalRow(); a++) {
      if (taxnCls == ds_exclusionOfTaxtation.getCellData(a, "col1")) {
        await $c.gus.cfAlertMsg($p, "사업자  => " + ds_card.getCellData(i, "vendorName") + "[" + ds_card.getCellData(i, "vendorTaxNum") + "]는" + "\n" + "과세유형구분이 => [" + taxnCls + "-" + scwin.getCommonCodename(taxnCls, "FI069") + "]" + "\n" + "이라서 확정_불공제 처리합니다~!!");

        // 증빙종류 공제유무값 불공제[2] 처리 
        deductClsCd = "2";
        // 증빙종류 공제유무값 불공제 확정처리 
        deductfixClsCd = 1;
        // 루프를종료한다.
        a = ds_exclusionOfTaxtation.getTotalRow() + 1;
      }
    }

    /* 
    --------------------------------------20120628 by KIMSEOK----------------------------------------------
    업종,업태가 특정코드[공통코드 FI093]인 경우, 전부 불공제 처리하고 그외의 경우에는 전부 공제처리 한다. 
    -------------------------------------------------------------------------------------------------------
    */

    var MMC_CODE = ds_card.getCellData(i, "mmcCode");
    for (var b = 0; b < ds_exclusionOfbusiness.getTotalRow(); b++) {
      if (MMC_CODE == ds_exclusionOfbusiness.getCellData(b, "COL1")) {
        await $c.gus.cfAlertMsg($p, "사업자  => " + ds_card.getCellData(i, "vendorName") + "[" + ds_card.getCellData(i, "vendorTaxNum") + "]는" + "\n" + "업종/업태가 불공제대상업종코드 => [" + MMC_CODE + "-" + scwin.getCommonCodename(MMC_CODE, "FI093") + "]" + "\n" + "이라서 불공제 처리합니다~!!");

        // 증빙종류 공제유무값 불공제[2] 처리 	            
        deductClsCd = "2";
        // 증빙종류 공제유무값 불공제 확정처리
        deductfixClsCd = 1;
        // 루프를종료한다.	                
        b = ds_exclusionOfbusiness.getTotalRow() + 1;
      }
    }
  }

  // 불공제일 경우 바로 불공제 처리
  else if (chkNonDeductYn == 'Y') {
    await $c.gus.cfAlertMsg($p, "사업자  => " + ds_card.getCellData(i, "vendorName") + "[" + ds_card.getCellData(i, "vendorTaxNum") + "]는" + "\n" + "불공제사업자 이므로 불공제 처리 합니다." + "\n\n" + "(사업자번호 화면에서 해당 사업자번호로 불공제여부 확인 가능)");

    // 증빙종류 공제유무값 불공제[2] 처리 	            
    deductClsCd = "2";
    // 증빙종류 공제유무값 불공제 확정처리 
    deductfixClsCd = 1;
  }

  // ---------------------20120711 by KIMSEOK------------------------------------------
  // 사업자번호가 없는 외국업체일 경우 확정불공제 처리한다.
  // ----------------------------------------------------------------------------------

  // 외국업체일경우 
  if (ds_card.getCellData(i, "abroadUse") == "2") {
    // 외국업체 공통 사업자번호[7808181111]를 입력한다. 
    ds_txncontents.setCellData(i, "crn", "7808181111");
    // 증빙종류 공제유무값 불공제[2] 처리 	            
    deductClsCd = "2";
    // 증빙종류 공제유무값 불공제 확정처리 
    deductfixClsCd = 1;
    await $c.gus.cfAlertMsg($p, "사업자 => [" + ds_card.getCellData(i, "vendorName") + "]는" + "\n" + "사업자 번호가 없는 외국업체임으로 확정 불공제 처리합니다~!!");
  } else {
    // 그외는 사업자 번호를 입력한다. 
    ds_txncontents.setCellData(i, "crn", ds_card.getCellData(i, "vendorTaxNum"));
  }

  // ed_crn.setValue(ds_txncontents.getCellData(0, "crn") || ""); // 사업자등록번호
  // ed_crnNm.setValue(ds_txncontents.getCellData(0, "crnNm") || ""); // 사업자명

  await scwin.f_openPopUp('7', 'T'); // 사업자번호 검색 팝업 : 팝업으로 하여금 해당되는 코드 유무를 검증한다. 

  ds_txncontents.setCellData(i, "txnDt", ds_card.getCellData(i, "dealDate")); // 거래일자
  ds_txncontents.setCellData(i, "acctDeptCd", $c.data.getMemInfo($p, "acctDeptCd")); // 귀속부서코드
  ed_acctDeptCd.setValue(ds_txncontents.getCellData(0, "acctDeptCd") || ""); // 귀속부서코드
  ed_acctDeptNm.setValue(ds_txncontents.getCellData(0, "acctDeptNm") || ""); // 귀속부서명
  ed_slipDt.setValue(scwin.slipDt);

  // 초기 부가세관리 팝업
  await scwin.f_openPopUp('4', 'T'); // 부서코드 검색 팝업  : 팝업으로 하여금 해당되는 코드 유무를 검증한다. 
  await scwin.f_VatDeclarAcctDeptCd('3');
  // scwin.f_checkPopEd(ed_acctDeptCd, ed_acctDeptNm, '4') ;

  // ---------------------20120628 by KIMSEOK------------------------------------------
  // 과세유형구분코드/업종,업테 코드/외국업체유무로 결정된 불공제 유무 및 공제확정여부를 반영한다. 
  // ----------------------------------------------------------------------------------

  // 값입력
  ds_txncontents.setCellData(i, "deductClsCd", deductClsCd);
  ds_txncontents.setCellData(i, "deductfixClsCd", deductfixClsCd);
  // 공제여부확정 코드가 확정[1] 이면, 공제 불공제 콘트롤을 비활성화 한다. 
  if (deductfixClsCd == "1") {
    $c.gus.cfDisableObjects($p, [acb_deductClsCd]);
  } else {
    $c.gus.cfEnableObjects($p, [acb_deductClsCd]);
  }

  /*
  if (ds_card.NameValue(i,"gubun") == "03"){
      ds_txncontents.NameValue(i,"spplyAmt") = ds_card.NameValue(i,"approveAmt"   );      //공급금액     
      ds_txncontents.NameValue(i,"vatAmt"  ) = ds_card.NameValue(i,"tax"          );      //부가세금액
      ds_txncontents.NameValue(i,"dcAmt"   ) = ds_card.NameValue(i,"serviceCharge");      //봉사료
  } else {
      ds_txncontents.NameValue(i,"spplyAmt") = ds_card.NameValue(i,"approveTotal" ) * -1; //공급금액     
  }
  */

  // 개인형법인카드승인내역의 구분값이 매입:03 일 경우 
  if (ds_card.getCellData(i, "gubun") == "03") {
    // 과세유형구분이 일반:01 일 경우
    if (ds_card.getCellData(i, "taxnCls") == "01") {
      // 부가세 금액이 0 인경우 
      if (ds_card.getCellData(i, "tax") == 0) {
        // 공급금액   = 개인형법인카드승인내역: 승인총액 - 부가세액:[공급금액-( 공급금액 / 1.1 )]) - 봉사료
        ds_txncontents.setCellData(i, "spplyAmt", Number(ds_card.getCellData(i, "approveTotal")) - (Number(ds_card.getCellData(i, "approveAmt")) - Math.round(Number(ds_card.getCellData(i, "approveAmt")) / 1.1)) - Number(ds_card.getCellData(i, "serviceCharge")));

        // 부가세금액 = 개인형법인카드승인내역: 공급금액 - ( 공급금액 / 1.1 )\
        ds_txncontents.setCellData(i, "vatAmt", Number(ds_card.getCellData(i, "approveAmt")) - Math.round(Number(ds_card.getCellData(i, "approveAmt")) / 1.1));
        //봉사료
        ds_txncontents.setCellData(i, "serviceCharge", Number(ds_card.getCellData(i, "serviceCharge")));

        // 부가세 금액이 0가 아니면     
      } else {
        // 20121226 김석 - 나영식대리요청 
        // 부가세 금액이 오차범위 (공급금액/10) +-50원이 아니면 
        // 부가세를 재계산하여, 입력해준다. 
        // ((공급금액/10)-50) <= 부가세 <= ((공급금액/10)+50)
        if (Number(ds_card.getCellData(i, "approveAmt")) / 10 - 51 >= Number(ds_card.getCellData(i, "tax")) // 부가세 >=(공급금액/10)-50
        || Number(ds_card.getCellData(i, "approveAmt")) / 10 + 51 <= Number(ds_card.getCellData(i, "tax")) // 부가세 <=(공급금액/10)+50
        ) {
          var v_approveTotal = Number(ds_card.getCellData(i, "approveTotal"));
          var v_approveAmt = Number(ds_card.getCellData(i, "approveAmt"));
          var v_tax = Number(ds_card.getCellData(i, "tax"));
          var v_serviceCharge = Number(ds_card.getCellData(i, "serviceCharge"));

          // 부가세금액이 잘못계산된 경우, 승인총액에 승인금액,부가세액,봉사료를 합치고
          //                           승인금액에 승인금액,부가세액을 합쳐서 재계산한다.
          v_approveTotal = v_approveAmt + v_tax + v_serviceCharge;
          v_approveAmt = v_approveAmt + v_tax;
          v_tax = 0;

          /*
          alert("부가세금액이 이상합니다. 재계산함"
              +"\n"+"ds_card.NameValue(i,'approveTotal'  ) =>" + ds_card.NameValue(i,"approveTotal")
              +"\n"+"ds_card.NameValue(i,'approveAmt'    ) =>" + ds_card.NameValue(i,"approveAmt")
              +"\n"+"ds_card.NameValue(i,'tax'           ) =>" + ds_card.NameValue(i,"tax")	                    
              +"\n"+"ds_card.NameValue(i,'serviceCharge' ) =>" + ds_card.NameValue(i,"serviceCharge")
              +"\n"+"v_approveTotal                        =>" + v_approveTotal
              +"\n"+"v_approveAmt                          =>" + v_approveAmt
              +"\n"+"v_tax                                 =>" + v_tax
              +"\n"+"v_serviceCharge                       =>" + v_serviceCharge
              );
          */

          // 공급금액   = 개인형법인카드승인내역: 승인총액 - 부가세액:[공급금액-( 공급금액 / 1.1 )]) - 봉사료
          ds_txncontents.setCellData(i, "spplyAmt", v_approveTotal - (v_approveAmt - Math.round(v_approveAmt / 1.1)) - v_serviceCharge);

          // 부가세금액 = 개인형법인카드승인내역: 공급금액 - ( 공급금액 / 1.1 ) 
          ds_txncontents.setCellData(i, "vatAmt", v_approveAmt - Math.round(v_approveAmt / 1.1));
          //봉사료
          ds_txncontents.setCellData(i, "serviceCharge", v_serviceCharge);
        } else {
          // 그외 정상적인 부가세의 경우 	                     	            
          ds_txncontents.setCellData(i, "spplyAmt", ds_card.getCellData(i, "approveAmt")); //공급금액 

          ds_txncontents.setCellData(i, "vatAmt", ds_card.getCellData(i, "tax")); //부가세금액
          ds_txncontents.setCellData(i, "serviceCharge", ds_card.getCellData(i, "serviceCharge")); //봉사료  추가
        }
      }

      // 과세유형구분이 일반이 아니면
    } else {
      // 공급금액 = 개인형법인카드승인내역: 공급금액 + 부가세액
      ds_txncontents.setCellData(i, "spplyAmt", Number(ds_card.getCellData(i, "approveAmt")) + Number(ds_card.getCellData(i, "tax")));
      // 부가세금액 = 0
      ds_txncontents.setCellData(i, "vatAmt", 0);
      // 봉사료
      ds_txncontents.setCellData(i, "serviceCharge", ds_card.getCellData(i, "serviceCharge"));
    }
    //ds_txncontents.NameValue(i,"dcAmt") = ds_card.NameValue(i,"serviceCharge");   //봉사료
  } else {
    ds_txncontents.setCellData(i, "spplyAmt", Number(ds_card.getCellData(i, "approveTotal")) * -1); //공급금액     
  }
  ds_txncontents.setCellData(i, "crcCd", ACConstants.KOREA_WON); // 통화코드
  ds_txncontents.setCellData(i, "cardNo", ds_card.getCellData(i, "cardNum")); // 카드번호

  ds_txncontents.setCellData(i, "acctCd", ds_card.getCellData(i, "acctCd")); // 계정코드
  ds_txncontents.setCellData(i, "acctNm", ds_card.getCellData(i, "acctNm")); // 계정명
  ds_txncontents.setCellData(i, "summary", ds_card.getCellData(i, "summary")); // 적요

  // 초기 계정팝업
  await scwin.f_openPopUp('3', 'T');
  await scwin.f_openPopUp('6', 'T');
  ds_txncontents.setCellData(i, "adjmClsCd", "0"); // 정산구분코드  미지급비용-개인형법인카드정산 
  ds_txncontents.setCellData(i, "rltSeq", i); // 구분
  ed_slipDt.setValue(scwin.slipDt);
};

//-------------------------------------------------------------------------
// 공통코드 코드명 검색 함수 
//-------------------------------------------------------------------------
scwin.getCommonCodename = function (code, codetype) {
  var CodeData;
  switch (codetype) {
    case "FI069":
      // 국세청과세유형
      // <%= GauceUtil.getCodeList("FI069") %>

      CodeData = $c.gus.gauceUtil($p, "getCodeList", "FI069");
      console.log(" CodeData [" + JSON.stringify(CodeData) + "]  length : " + CodeData.length);

      // CodeData = '01^일반과세,02^간이과세,03^면세,04^비영리,05^휴업,06^폐업,07^미등록,99^';  // FI096:과세유형구분코드 
      break;
    case "FI093":
      // 불공제대상업종코드
      // <%= GauceUtil.getCodeList("FI093") %>

      CodeData = $c.gus.gauceUtil($p, "getCodeList", "FI093");

      // CodeData = '1206^택시,1207^기타교통,122^항공사,123^고속버스,124^철도,192^하이패스,222^면세점,271^상품권판매,3000^교통/항공,3020^교통/항공,3099^교통/항공,3182^교통/항공,3217^교통/항공,4011^교통/항공,4111^교통/항공,4121^택시회사,4131^고속버스,4511^항공사,4722^교통/항공,4789^교통/항공,5399^상품권,6051^상품권전문판매,7297^안마시술소,7301^주유소,941^주유소,942^LPG가스';  // FI093:불공제대상업종코드
      break;
    case "evidClsCd":
      // 증빙종류
      CodeData = '40^법인카드,50^개인카드';
      var CodeList = CodeData.split(",");
      for (var ii = 0; ii < CodeList.length; ii++) {
        var CodeListDetail = CodeList[ii].split("^");
        if (CodeListDetail[0].trim() == code) {
          $c.gus.cfEnableObjects($p, [ed_opntAcctCd]);
          return CodeListDetail[1].trim();
        }
      }
      break;
    default:
      break;
  }
  for (var i = 0; i < CodeData.length; i++) {
    var admin = CodeData[i].code;
    if (code == admin) {
      console.log("  " + codetype + "  [" + i + "] return [" + CodeData[i].name.trim() + "]");
      return CodeData[i].name.trim();
    }
  }
};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  ds_txn.set("slipDt", WebSquare.date.getCurrentServerDate());
  // Session 이용
  ds_txn.set("slipAcctDeptCd", $c.data.getMemInfo($p, "acctDeptCd"));
  ds_txn.set("slipAcctDeptNm", $c.data.getMemInfo($p, "acctDeptNm"));
  // 로그인사번,부서
  ds_txn.set("drawEmpNo", $c.data.getMemInfo($p, "empNo"));
  ds_txn.set("drawAcctDeptCd", $c.data.getMemInfo($p, "acctDeptCd"));
  ed_slipAcctDeptCd.options.hidVal = ds_txn.get("slipAcctDeptCd");

  //alert(ds_txncontents.text);

  // Session 이용
  ds_provHeader.setCellData(0, "reqAcctDeptCd", $c.data.getMemInfo($p, "acctDeptCd"));
  // 로그인사번,부서
  ds_provHeader.setCellData(0, "drawEmpNo", $c.data.getMemInfo($p, "empNo"));
  ds_provHeader.setCellData(0, "drawAcctDeptCd", $c.data.getMemInfo($p, "acctDeptCd"));
  // $c.gus.cfSetIMEModeActiveObjects([ed_summary]);
};

//-------------------------------------------------------------------------
// Enable/Disable
//-------------------------------------------------------------------------
scwin.f_EnableYn = function (str) {
  //    alert(str);
  if (str == 1) {
    $c.gus.cfEnableObjects($p, [ed_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm, img_slipAcctDeptCd, ed_acctCd, img_acctCd, ed_acctNm]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm, img_slipAcctDeptCd, ed_acctCd, img_acctCd, ed_acctNm]);
  }
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (flag, check) {
  var rtnList = new Array();
  switch (flag) {
    case '1':
      // 부서
      var param = ed_slipDt.getValue().trim() + ",,,,";
      if (scwin.isSubCompany) {
        param = ed_slipDt.getValue().trim() + ",," + scwin.txtCoCd + "," + scwin.txtCoClsCd;
      }
      rtnList = udc_retrieveAcctDept.cfCommonPopUp(scwin.udc_retrieveAcctDept_callbackfunc, ed_slipAcctDeptCd.getValue().trim(), ed_slipAcctDeptNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;

    // 계정조회       
    case '3':
      // 귀속부서에 입력값이 없으면 에러메세지 출력 
      if (scwin.isFirst == true) {
        scwin.firstAcctCd = ed_acctCd.getValue();
        scwin.firstAcctNm = ed_acctNm.getValue();
      }
      if (ed_acctDeptCd.getValue() == "") {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "귀속부서"));
        ed_acctDeptCd.focus();
        return;
      }

      // 비용구분 : 01^원가,02^판관비,03^원가+판관비
      if (ed_costClsCd.getValue() == "") {
        ed_costClsCd.setValue("04");
      }

      // 팝업파라미터 정의 
      var param = "T" // 01. 추가 WHERE 조건절 PARAM3
      + "," + ed_slipDt.getValue().trim() // 02. 추가 WHERE 조건절 PARAM4   // 전표일자 
      + "," // 03. 추가 WHERE 조건절 PARAM5
      + "," // 04. 추가 WHERE 조건절 PARAM6
      + "," // 05. 추가 WHERE 조건절 PARAM7
      + "," + ed_costClsCd.getValue() // 06. 추가 WHERE 조건절 PARAM8   // 비용구분코드 
      + "," + ed_bizDomCd.getValue() // 07. 추가 WHERE 조건절 PARAM9   // 사업영역코드 
      + "," // 08. 추가 WHERE 조건절 PARAM10  // 렌터카 고속일경우는 변고정비 다조회되도록 수정 - 08.04.21-신종민
      ;

      //var pSqlId = "retrieveAcctCdInfo";
      var pSqlId = "retrieveExpenseAcctCdInfo2"; // 20120703 계정코드 팝업 사용중 계정정보테이블[TB_FI001]의 매입세액공제여부[PCHS_TAX_AMT_DEDUCT_YN] 항목으로
      // 법인카드 공제/불공제를 사용하게 되어, 새로운 쿼리를 추가하여 사용 
      // 기존에 4번째 결과값 차대구분[DRCR_CLS_CD]을 이 팝업에서는 사용하지 않아. 삭제하고, 
      // 자리에 매입세액공제여부[PCHS_TAX_AMT_DEDUCT_YN] 컬럼으로 대체
      // 팝업조회시 매입세액공제여부 값들중 비대상[5]에 해당하는값은 제외하고 조회한다. 

      await udc_retrieveExpense.cfCommonPopUpAsync(scwin.udc_retrieveExpense_callbackfunc // 01.pSelectID     XML상의 SELECT ID                                                    
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
      break;
    case '4':
      // 부서
      // var param = ","+ed_slipDt.text.trim()+",0";
      // var  param_yy  =  ed_slipDt.text.trim() ; 

      //if(isSubCompany)  {  
      param = ed_slipDt.getValue().trim() + ",,," + scwin.txtCoCd;
      // param = ed_slipDt.getValue().trim() + ",,," + "000";
      //}
      //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo2',ed_acctDeptCd.text.trim(),txt_acctDeptNm.value,check,null,null,null,null,param,null,null,null,null); 

      await udc_retrieveCrnInfo2.cfCommonPopUpAsync(scwin.udc_retrieveCrnInfo2_callbackfunc, ed_acctDeptCd.getValue().trim(), ed_acctDeptNm.getValue(), check, null, null, null, null, param, ",,,,,,1", "450", "500", null, null); // 귀속부서

      break;

    //case '5':

    // 부가세관리부서
    // f_VatDeclarAcctDeptCd(check);
    // break;

    case '6':
      // 카드번호
      var cardCd = "";
      if (acb_evidClsCd.getValue() == "40") {
        cardCd = "1";
      } else if (acb_evidClsCd.getValue() == "50") {
        cardCd = "2";
      }
      await udc_retrieveVat.cfCommonPopUpAsync(scwin.udc_retrieveVat_callbackfunc, ed_cardNo.getValue().trim().replace('-', ''), '', check, null, null, null, null, cardCd, null, null, null, null);
      break;
    case '7':
      // 사업자번호

      await udc_retrieveCrnInfo.cfCommonPopUpAsync(scwin.udc_retrieveCrnInfo_callbackfunc, ed_crn.getValue().trim(), ed_crnNm.getValue(), check, null, null, null, null, null, null, null, null, null);
      break;
    case '8':
      // 거래처
      var param = scwin.txtCoCd + "," + scwin.txtCoClsCd;
      rtnList = udc_retrieveAcEmpInfo.cfCommonPopUp(scwin.udc_retrieveAcEmpInfo_callbackfunc, ed_mgntEmpNo.getValue().trim(), ed_mgntEmpNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '9':
      // 정산처
      var param = ",,," + scwin.txtCoCd;
      if (scwin.vCoCd == "011") {
        check = "F";
      } else {
        check = "T";
      }
      if (scwin.isFirst2 == true) {
        scwin.firstAdjmClntNm = ed_adjmClntNm.getValue();
      }
      await udc_retrieveClntList3.cfCommonPopUpAsync(scwin.udc_retrieveClntList3_callbackfunc, ed_adjmClntNo.getValue().trim(), ed_adjmClntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '10':
      // 거래처
      var param = ",,," + scwin.txtCoCd;
      await udc_retrieveClntList.cfCommonPopUpAsync(scwin.udc_retrieveClntList_callbackfunc, ed_mgntClntNo.getValue().trim(), ed_mgntClntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    case '11':
      // 상대계정조회
      var temp = "T," + ed_slipDt.getValue().trim() + ",6";
      await udc_retrieveExpense2.cfCommonPopUpAsync(scwin.udc_retrieveExpense2_callbackfunc, ed_opntAcctCd.getValue().trim(), ed_opntAcctNm.getValue(), check, null, null, null, null, temp, null, null, null, null, null, "T");
    case '12':
      //매출입항목코드 조회
      if (ed_acctDeptCd.getValue() == "") {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "귀속부서"));
        ed_acctDeptCd.focus();
        return;
      }
      var pCode = "";
      var pName = "";
      var pWhere = "";
      var rtnList = new Array();
      pCode = "";
      pName = "";
      var pWhere = "1," + ed_slipDt.getValue().trim() + "," + ed_slipAcctDeptCd.getValue().trim() + ",";
      pTitle = "매입항목코드,매입항목명";
      pWindowTitle = "매입항목코드조회,매입항목코드,매입항목명";
      rtnList = udc_branchCd.cfCommonPopUp(scwin.udc_branchCd_callbackfunc // XML상의 SELECT ID  
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , check // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , '2' // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , pTitle // Title순서  
      , '150,210' // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , pWhere // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , '440' // POP-UP뛰을때 원도우의   사용자 정의  폭
      , '500' // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , 'F' // 전체검색허용여부 ("F")
      , pWindowTitle // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case '13':
      // //지점코드 조회
      // var returnObject = RcfBranchAcctDeptPop(ed_branchCd, txt_branchNm,'IMG','0','전체','D', '');      
      // if (returnObject != null){
      //     ed_acctDeptCd.text = returnObject.shtTermAcctDeptCd ;
      //     txt_acctDeptNm.value = returnObject.shtTermAcctDeptNm   ;
      //     ed_branchCd.text   = returnObject.branchCd  ;
      //     ed_branchCd.hidVal = returnObject.branchCd  ;
      //     txt_branchNm.value   = returnObject.branchNm    ;
      //     f_checkPopEd(ed_acctDeptCd,txt_acctDeptNm,'4');
      //     ed_acctDeptCd.hidVal = returnObject.shtTermAcctDeptCd   ;               
      // }else{
      //     ed_acctDeptCd.text = "" ;
      //     ed_acctDeptCd.hidVal = ""   ;               
      //     txt_acctDeptNm.text = ""    ;
      //     ed_branchCd.text   = "" ;
      //     ed_branchCd.hidVal = "" ;               
      //     txt_branchNm.text   = ""    ;
      // }
      break;

    // 차량팝업- 렌트카 팝업 추가 2014. 04. 09
    // 매입번호와 금액을 가져온다
    case '14':
      let data = {
        prov: ds_tmp
      };
      let win_url = "/ui/ps/rc/comnmgnt/prflosmgnt/rc_510_02_03p.xml";
      let opts = {
        id: "smpPop",
        popupName: "원가전표생성대상",
        modal: true,
        type: "browserPopup",
        width: 1180,
        height: 600,
        title: "원가전표생성대상"
      };
      let returnValue = await $c.win.openPopup($p, win_url, opts, data);

      // 팝업에서 데이터셋 ds_tmp를 내려받는다 - 기존 선택내역이 있었다면 추가된다
      if (ds_tmp != null) {
        // var pchsAmt_Sum = ds_tmp.NameSum("pchsAmt", 0, ds_tmp.CountRow); 
        var pchsAmt_Sum = scwin.sumCol(ds_tmp, "pchsAmt");

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
        ed_pchsAmtSum.setValue(rtnStr);
        numStr_hidden.setValue(numStr);
      }
      break;
    case '15':
      //요청거래처
      var param = ",,," + scwin.txtCoCd;
      rtnList = udc_retrieveClntList4.cfCommonPopUp(scwin.udc_retrieveClntList4_callbackfunc, ed_reqClntNo.getValue().trim(), ed_reqClntNm.getValue(), check, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //

scwin.udc_retrieveAcctDept_callbackfunc = async function (rtnList) {
  scwin.f_resultPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, rtnList);
  if (rtnList != null) {
    if (rtnList[2] == "00130") {
      $c.gus.cfDisableObjects($p, [ed_acctCd, ed_acctNm, ed_acctDeptCd, ed_acctDeptNm, img_acctCd, img_acctDeptCd]);
      $c.gus.cfEnableObjects($p, [ed_pchsItemCd, ed_branchCd, ed_pchsItemNm, ed_branchNm, img_pchsItemCd, img_branchCd]);
      branchTr.show("");
      // branchTr.style.display="inline"
    } else {
      $c.gus.cfEnableObjects($p, [ed_acctCd, ed_acctNm, ed_acctDeptCd, ed_acctDeptNm, img_acctCd, img_acctDeptCd]);
      $c.gus.cfDisableObjects($p, [ed_pchsItemCd, ed_branchCd, ed_pchsItemNm, ed_branchNm, img_pchsItemCd, img_branchCd]);
      branchTr.hide("");
      // branchTr.style.display="none"           
      ed_pchsItemCd.setValue("");
      ed_pchsItemNm.setValue("");
      ed_branchCd.setValue("");
      ed_branchNm.setValue("");
    }
    if (scwin.vBizDomCd == null || scwin.vBizDomCd == "") {
      if (rtnList[3] == "210" || rtnList[3] == "220") {
        scwin.gBizDomCdClsCd = "1";
      } else {
        scwin.gBizDomCdClsCd = "0";
      }
    } else {
      if (!(ed_acctCd.getValue() == null || ed_acctCd.getValue() == "")) {
        await $c.gus.cfAlertMsg($p, "발행부서를 수정할 경우에는 계정코드를 재입력하셔야 합니다.");
        ed_acctCd.setValue("");
        ed_acctCd.options.hidVal = "";
        ed_acctNm.setValue("");
        ed_pchsItemCd.setValue("");
        ed_pchsItemCd.options.hidVal = "";
        ed_pchsItemNm.setValue("");
      }
    }
    scwin.vUpperAcctDeptCd = rtnList[2];
    scwin.vBizDomCd = rtnList[3];
    scwin.varCostClsCd = "";
  }
  scwin.f_SetGridFormat();
};
scwin.udc_retrieveExpense_callbackfunc = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      if (scwin.isFirst == true) {
        ed_acctCd.setValue(scwin.firstAcctCd);
        ed_acctNm.setValue(scwin.firstAcctNm);
        // ds_txncontents.setCellData(0, "adjmClntNm", $c.data.getMemInfo($p, "userNm"));
        // await scwin.f_openPopUp('9', 'T');
        scwin.isFirst = false;
      }
      return;
    }

    // 접대비 법인카드로만 입력 가능하게 수정 2009.01.29 박범민
    if (rtnList[0] == '5000820' // 판)접대비-개인카드
    || rtnList[0] == '5000830' // 판)접대비-현금영수증
    || rtnList[0] == '5000840' // 판)접대비-기타
    || rtnList[0] == '5002920' // 판)해외시장개척비-접대비
    || rtnList[0] == '4200920' // 원)접대비-개인카드
    || rtnList[0] == '4200930' // 원)접대비-현금영수증
    || rtnList[0] == '4200940' // 원)접대비-기타
    || rtnList[0] == '4204732' // 원)창업비-접대비
    ) {
      await $c.gus.cfAlertMsg($p, "접대비는 접대비-법인카드만 입력 할 수 있습니다..");
      ed_acctCd.setValue("");
      ed_acctNm.setValue("");
      return;
    }
    //결과값 바인드
    ed_acctCd.setValue(rtnList[0]); // 계정코드
    ed_acctNm.setValue(rtnList[1]); // 계정명
    ed_acctCd.options.hidVal = rtnList[0]; // 히든값
    ed_acctClsCd.setValue(rtnList[2]); // 계정구분

    //r_empMgntYn,r_termMgntYn,r_dtMgntYn,r_clntMgntYn
    await scwin.f_AcctCd(rtnList[7] //r_termMgntYn - 기간관리여부
    , rtnList[6] //r_empMgntYn  - 사원관리여부 
    , rtnList[8] //r_dtMgntYn   - 일자관리여부
    , rtnList[5] //r_clntMgntYn - 거래처여부
    );

    // 법인카드 공제여부 조회값 리턴            
    // ds_chk.UseChangeInfo = "false";            
    dma_chk.set("acctCd", rtnList[0]);
    scwin.varCostClsCd = rtnList[9];
    var pchsTaxAmtDeductYn = rtnList[3]; //매입세엑공제여부
    var deductClsCd;

    // 공제가 확정되지 않았다면 
    var row = 0;
    if (!$c.gus.cfIsNull($p, ds_txncontents.getRowPosition())) {
      row = ds_txncontents.getRowPosition();
    }
    if (ds_txncontents.getCellData(row, "deductfixClsCd") == "0") {
      // 증빙종류가 법인카드이고, 확정되지 않은거라면 
      if (acb_evidClsCd.getValue() == "40") {
        switch (pchsTaxAmtDeductYn) {
          case '1':
            // 1:우선_공제
            await $c.gus.cfAlertMsg($p, "선택하신 계정코드는 우선_공제 대상입니다");
            $c.gus.cfEnableObjects($p, [acb_deductClsCd]);
            deductClsCd = "1";
            break;
          case '2':
            // 2:우선_불공제
            await $c.gus.cfAlertMsg($p, "선택하신 계정코드는 우선_불공제 대상입니다");
            $c.gus.cfEnableObjects($p, [acb_deductClsCd]);
            deductClsCd = "2";
            break;
          case '3':
            // 3:확정_공제
            await $c.gus.cfAlertMsg($p, "선택하신 계정코드는 확정_공제 대상입니다");
            $c.gus.cfDisableObjects($p, [acb_deductClsCd]);
            deductClsCd = "1";
            ds_txncontents.setCellData(row, "deductfixClsCd", "1");
            break;
          case '4':
            // 4:확정_불공제
            await $c.gus.cfAlertMsg($p, "선택하신 계정코드는 확정_불공제 대상입니다");
            $c.gus.cfDisableObjects($p, [acb_deductClsCd]);
            deductClsCd = "2";
            ds_txncontents.setCellData(row, "deductfixClsCd", "1");
            break;
          default:
            await $c.gus.cfAlertMsg($p, "선택하신 계정코드는 공제구분값이 명확하지 않습니다.\n증빙종류의 확정/미확정값을 선택해주세요.");
            //cfEnableObjects(lc_deductClsCd);
            //lc_deductClsCd.BindColVal = "1";                 		
            break;
        }
        acb_deductClsCd.setValue(deductClsCd);
      }
    } else {
      await $c.gus.cfAlertMsg($p, "공제여부가 확정된 내역입니다~!");
      switch (pchsTaxAmtDeductYn) {
        case '1':
          // 1:우선_공제
          await $c.gus.cfAlertMsg($p, "선택하신 계정코드는 우선_공제 대상입니다");
          deductClsCd = "1";
          if (rtnList[0] == "4201740") {
            $c.gus.cfEnableObjects($p, [acb_deductClsCd]);
          }
          break;
        case '2':
          // 2:우선_불공제
          await $c.gus.cfAlertMsg($p, "선택하신 계정코드는 우선_불공제 대상입니다");
          deductClsCd = "2";
          break;
        case '3':
          // 3:확정_공제
          await $c.gus.cfAlertMsg($p, "선택하신 계정코드는 확정_공제 대상입니다");
          deductClsCd = "1";
          ds_txncontents.setCellData(row, "deductfixClsCd", "1");
          break;
        case '4':
          // 4:확정_불공제
          await $c.gus.cfAlertMsg($p, "선택하신 계정코드는 확정_불공제 대상입니다");
          deductClsCd = "2";
          ds_txncontents.setCellData(row, "deductfixClsCd", "1");
          break;
        default:
          await $c.gus.cfAlertMsg($p, "선택하신 계정코드는 공제구분값이 명확하지 않습니다.\n증빙종류의 확정/미확정값을 선택해주세요.");
          //lc_deductClsCd.BindColVal = "1";                 		
          break;
      }
    }

    // 여기서 비교 해야 되는데...
    var temp2 = '1^4202480,2^4202481,3^1120130'; // <%= GauceUtil.getCodeList("FI055") %>
    var tempList2 = temp2.split(",");
    for (var ii = 0; ii < tempList2.length; ii++) {
      var checkList2 = tempList2[ii].split("^");
      //alert(checkList2[1].trim());  //"4202480"
      if (ed_acctCd.getValue().trim() == checkList2[1].trim()) {
        $c.gus.cfEnableObjects($p, [ed_opntAcctCd]);
        return;
      } else {
        ed_opntAcctCd.setValue("");
        ed_opntAcctNm.setValue("");
        $c.gus.cfDisableObjects($p, [ed_opntAcctCd]);
      }
    }
    if (ed_pchsItemCd.getValue() == null || ed_pchsItemCd.getValue() == "") {
      if (scwin.varCostClsCd == null || scwin.varCostClsCd == "") {
        scwin.varCostClsCd = rtnList[9];
      } else {
        if (ds_txncontents.getTotalRow() > 1) {
          if (scwin.varCostClsCd.trim() == "1") {
            if (scwin.varCostClsCd.trim() != rtnList[9].trim()) {
              await $c.gus.cfAlertMsg($p, "변동비계정항목과 고정비계정항목을 같이 입력을 할 수 없습니다.");
              ed_branchCd.setValue("");
              ed_branchNm.setValue("");
              ed_acctCd.setValue("");
              ed_acctCd.options.hidVal = "";
              ed_acctNm.setValue("");
              return false;
            }
          } else {
            if (rtnList[9].trim() == "1") {
              await $c.gus.cfAlertMsg($p, "변동비계정항목과 고정비계정항목을 같이 입력을 할 수 없습니다.");
              ed_branchCd.setValue("");
              ed_branchNm.setValue("");
              ed_acctCd.setValue("");
              ed_acctCd.options.hidVal = "";
              ed_acctNm.setValue("");
              return false;
            }
          }
          scwin.varCostClsCd = rtnList[9];
        }
      }
      // alert(varCostClsCd);
      if (scwin.varCostClsCd == "1") {
        if (scwin.vBizDomCd == "210") {
          // slipKndCd = "<%=ACConstants.SLIPKNDCD_EXPENSE_TR_VAR%>"  
          scwin.slipKndCd = ACConstants.SLIPKNDCD_PERSONAL_CORP_CARD_ADJM; // 20121213
        } else if (scwin.vBizDomCd == "220") {
          // slipKndCd = "<%=ACConstants.SLIPKNDCD_EXPENSE_RC_VAR%>"   // 20121213
          scwin.slipKndCd = ACConstants.SLIPKNDCD_PERSONAL_CORP_CARD_ADJM;
        } else {
          // 원)경유비-기타  전표생성 가능하도록 수정 2021.12.21 (정규직 대리 요청)
          // 원)안전보건관리비-용품비  전표생성 가능하도록 수정 2022.03.15 (송윤호과장 요청)
          if (rtnList[0] == "4201740" || rtnList[0] == "4207010") {
            $c.gus.cfEnableObjects($p, [acb_deductClsCd]);
          } else {
            await $c.gus.cfAlertMsg($p, "변동비계정으로 전표생성을 할 수 없습니다.");
            ed_acctCd.setValue("");
            ed_acctNm.setValue("");
            ed_acctCd.options.hidVal = "";
            ed_opntAcctCd.setValue("");
            ed_opntAcctNm.setValue("");
            ed_opntAcctCd.options.hidVal = "";
            return false;
          }
        }
      } else {
        scwin.slipKndCd = ACConstants.SLIPKNDCD_PERSONAL_CORP_CARD_ADJM;
      }
    }
  } else {
    ed_acctCd.setValue("");
    ed_acctNm.setValue("");
    ed_acctCd.options.hidVal = "";
    ed_acctClsCd.setValue("");
  }
  if (scwin.isFirst == true) {
    // await scwin.f_openPopUp('9', 'T');
    scwin.isFirst = false;
  }
};
scwin.udc_retrieveCrnInfo2_callbackfunc = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_acctDeptCd.setValue(rtnList[0]); //부서코드
    ed_acctDeptNm.setValue(rtnList[1]); //부서명
    ed_acctDeptCd.options.hidVal = rtnList[0]; // 히든값
    ed_adjmAcctDeptCd.setValue(rtnList[5]); //전도금집행부서
    $c.gus.cfEnableObjects($p, [ed_vatDeclarAcctDeptCd, img_vatDeclarAcctDeptCd]);
    ed_costClsCd.setValue(rtnList[9]); //비용구분코드
    ed_bizDomCd.setValue(rtnList[3]); //사업영역코드 (변동비 계정 조회안되도록 수정-06.12.22-박병길)

    // f_VatDeclarAcctDeptCd('2');
    // 2009년 3월 18일, 법인카드 선택시는 부가세관리부서를 재경팀으로 세팅
    if (acb_evidClsCd.getValue() == "40") {
      //f_VatDeclarAcctDeptCd('2');
      ed_vatDeclarAcctDeptCd.setValue(rtnList[7]); //부가세관리부서
      // ed_vatDeclarAcctDeptCd.text = "00009";
      // txt_vatDeclarAcctDeptNm.value = "재경";

      // 귀속부서에 해당하는 신고부서가 아닌 재경에 해당하는 신고부서를 가져감
      if (scwin.isFirst == false) {
        // await scwin.f_VatDeclarAcctDeptCd('1');
        await scwin.f_VatDeclarAcctDeptCd('3');
      }
    } else {
      if (scwin.isFirst == false) {
        await scwin.f_VatDeclarAcctDeptCd('2');
      }
    }
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
    ed_acctDeptCd.options.hidVal = "";
    ed_adjmAcctDeptCd.setValue("");
    ed_costClsCd.setValue("");
    ed_bizDomCd.setValue(""); //사업영역코드 (변동비 계정 조회안되도록 수정-06.12.22-박병길
  }
};
scwin.udc_retrieveVat_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_cardNo.setValue(rtnList[0]); //카드번호
    ed_cardNm.setValue(rtnList[1] + "/" + rtnList[2]); //카드명
    ed_cardNo.options.hidVal = rtnList[0]; // 히든값

    if (acb_evidClsCd.getValue() == "40") {
      //ed_adjmClntNo.text = rtnList[6];  //카드발급처
      //txt_adjmClntNm.value = rtnList[7];    //카드발급명
    }
  } else {
    ed_cardNo.setValue("");
    ed_cardNm.setValue("");
    ed_cardNo.options.hidVal = "";
    if (acb_evidClsCd.getValue() == "40") {
      ed_adjmClntNo.setValue("");
      ed_adjmClntNm.setValue("");
    }
  }
};
scwin.udc_retrieveCrnInfo_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_crn.setValue(rtnList[0]); //사업자번호
    ed_crnNm.setValue(rtnList[1]); //사업자명
    ed_crn.options.hidVal = rtnList[0]; // 히든값
    if (ed_frchNoYn.getValue() == "1") {
      ed_frchCrn.setValue(ed_crn.getValue().trim());
      ed_frchNm.setValue(ed_crnNm.getValue().trim());
    } else {
      ed_frchCrn.setValue("");
      ed_frchNm.setValue("");
    }
  } else {
    ed_crn.setValue("");
    ed_crnNm.setValue("");
    ed_crn.options.hidVal = "";
  }
};
scwin.udc_retrieveAcEmpInfo_callbackfunc = function (rtnList) {
  scwin.f_resultPopEd(ed_mgntEmpNo, ed_mgntEmpNm, rtnList);
};
scwin.udc_retrieveClntList3_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    // scwin.f_resultPopEd(ed_adjmClntNo, ed_adjmClntNm, rtnList);
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        if (scwin.isFirst2 == true) {
          ed_adjmClntNm.setValue(scwin.firstAdjmClntNm);
          scwin.isFirst2 = false;
        }
        return;
      }
      ed_adjmClntNo.setValue(rtnList[0]); // 코드
      ed_adjmClntNm.setValue(rtnList[1]); // 명
      ed_adjmClntNo.options.hidVal = rtnList[0]; // 히든값
    } else {
      ed_adjmClntNo.setValue("");
      ed_adjmClntNm.setValue("");
      ed_adjmClntNo.options.hidVal = "";
    }
    if (ds_txncontents.getTotalRow() > 1) {
      var row = 0;
      if (!$c.gus.cfIsNull($p, ds_txncontents.getRowPosition())) {
        row = ds_txncontents.getRowPosition();
      }
      for (i = 0; i < ds_txncontents.getTotalRow() - 1; i++) {
        ds_txncontents.setCellData(i, "adjmClntNo", ds_txncontents.getCellData(row, "adjmClntNo"));
        ds_txncontents.setCellData(i, "adjmClntNm", ds_txncontents.getCellData(row, "adjmClntNm"));
      }
    }
  }
};
scwin.udc_retrieveClntList_callbackfunc = function (rtnList) {
  scwin.f_resultPopEd(ed_mgntClntNo, ed_mgntClntNm, rtnList);
};
scwin.udc_retrieveExpense2_callbackfunc = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_opntAcctCd.setValue(rtnList[0]); //계정코드
    ed_opntAcctNm.setValue(rtnList[1]); //계정명
    ed_opntAcctCd.options.hidVal = rtnList[0]; // 히든값

    //r_empMgntYn,r_termMgntYn,r_dtMgntYn,r_clntMgntYn
    await scwin.f_AcctCd(rtnList[7], rtnList[6], rtnList[8], rtnList[5]);
  } else {
    ed_opntAcctCd.setValue("");
    ed_adjmAcctDeptCd_opntAcctNm.setValue("");
    ed_opntAcctCd.options.hidVal = "";
    ed_opntAcctNm.setValue("");
  }
};
scwin.udc_branchCd_callbackfunc = async function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_pchsItemCd, ed_pchsItemNm);
    ed_acctCd.setValue(rtnList[3]);
    ed_acctNm.setValue(rtnList[4]);
    if (scwin.varCostClsCd == null || scwin.varCostClsCd == "") {
      scwin.varCostClsCd = rtnList[9];
    } else {
      if (ds_txncontents.getTotalRow() > 1) {
        if (scwin.varCostClsCd.trim() == "1") {
          if (scwin.varCostClsCd.trim() != rtnList[9].trim()) {
            await $c.gus.cfAlertMsg($p, "변동비계정항목과 고정비계정항목을 같이 입력을 할 수 없습니다.");
            ed_branchCd.setValue("");
            ed_branchNm.setValue("");
            ed_acctCd.setValue("");
            ed_acctCd.options.hidVal = "";
            ed_acctNm.setValue("");
            return false;
          }
        } else {
          if (rtnList[9].trim() == "1") {
            await $c.gus.cfAlertMsg($p, "변동비계정항목과 고정비계정항목을 같이 입력을 할 수 없습니다.");
            ed_branchCd.setValue("");
            ed_branchNm.setValue("");
            ed_acctCd.setValue("");
            ed_acctCd.options.hidVal = "";
            ed_acctNm.setValue("");
            return false;
          }
        }
        scwin.varCostClsCd = rtnList[9];
      }
    }
    if (scwin.varCostClsCd == "1") {
      if (scwin.vBizDomCd == "210") {
        // slipKndCd = "<%=ACConstants.SLIPKNDCD_EXPENSE_TR_VAR%>"
        scwin.slipKndCd = ACConstants.SLIPKNDCD_PERSONAL_CORP_CARD_ADJM; // 20121213              
      } else if (vBizDomCd == "220") {
        // slipKndCd = "<%=ACConstants.SLIPKNDCD_EXPENSE_RC_VAR%>" 
        scwin.slipKndCd = ACConstants.SLIPKNDCD_PERSONAL_CORP_CARD_ADJM; // 20121213                
      } else {
        await $c.gus.cfAlertMsg($p, "변동비계정으로 전표생성을 할 수 없습니다.");
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        ed_acctCd.options.hidVal = "";
        ed_opntAcctCd.setValue("");
        ed_opntAcctNm.setValue("");
        ed_opntAcctCd.options.hidVal = "";
        return false;
      }
    } else {
      scwin.slipKndCd = ACConstants.SLIPKNDCD_PERSONAL_CORP_CARD_ADJM;
    }
    scwin.f_checkPopEd(ed_acctCd, ed_acctNm, '3');
    ed_acctCd.options.hidVal = rtnList[3];
  } else {
    ed_acctCd.setValue("");
    ed_acctCd.options.hidVal = "";
    ed_acctNm.setValue("");
  }
};
scwin.udc_retrieveClntList4_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    scwin.f_resultPopEd(ed_reqClntNo, ed_reqClntNm, rtnList);
  }
};

//-------------------------------------------------------------------------
// 부가세귀속부서popup
//-------------------------------------------------------------------------
scwin.f_VatDeclarAcctDeptCd = async function (str) {
  if (ed_acctDeptCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "귀속부서"));
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_acctDeptCd.focus();
    return;
  }
  ed_vatCrn.setValue("");
  var temp = "," + ed_acctDeptCd.getValue() + ",1";
  var sqlID = "";
  var check = "";
  var popTemp = "";
  // popup 버튼 눌렀을경우
  if (str == "1") {
    temp = "," + ed_acctDeptCd.getValue() + ",1," + scwin.vCoCd + "," + scwin.vCoClsCd + "," + ed_txnDt.getValue().substring(0, 4);
    check = "F";
    sqlID = "retrieveVatDeclarAcctDeptCd";
    popTemp = "";
    // 부서에서 넘어왔을 경우
  } else if (str == "2") {
    temp = "," + ed_acctDeptCd.getValue() + "," + scwin.vCoCd + "," + scwin.vCoClsCd + "," + ed_txnDt.getValue().substring(0, 4);
    check = "T";
    ed_vatDeclarAcctDeptCd.setValue("");
    sqlID = "retrieveVatDeclarAcctDeptCdAcctDeptCd";
    popTemp = "ZZ";
    // 부가세관리부서에 값을넣고 명을 찾을 경우
  } else if (str == "3") {
    temp = "," + ed_acctDeptCd.getValue() + ",1," + scwin.vCoCd + "," + scwin.vCoClsCd + "," + ed_txnDt.getValue().substring(0, 4);
    check = "T";
    sqlID = "retrieveVatDeclarAcctDeptCd";
    popTemp = "";
  }
  udc_retrieveVatDeclar.setSelectId(sqlID);
  await udc_retrieveVatDeclar.cfCommonPopUpAsync(scwin.udc_retrieveVatDeclar_callbackfunc, ed_vatDeclarAcctDeptCd.getValue().trim(), popTemp, check, null, null, null, null, temp, null, null, null, null);
  // scwin.f_VatDeclarAcctDeptCd('3');
};
scwin.udc_retrieveVatDeclar_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_vatDeclarAcctDeptCd.setValue(rtnList[2]); //부가세부서코드
    ed_vatDeclarAcctDeptNm.setValue(rtnList[3]); //부가세부서명
    ed_vatCrn.setValue(rtnList[5]); //부가세사업자번호
    ed_vatDeclarAcctDeptCd.options.hidVal = rtnList[2]; //히든값
  } else {
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    ed_vatCrn.setValue("");
    ed_vatDeclarAcctDeptCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------
scwin.f_checkPopEd = async function (strCd, strNm, flag) {
  if (strCd.getValue().trim() == strCd.options.hidVal) return;
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") await scwin.f_openPopUp(flag, 'T');
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명
    strCd.options.hidVal = rtnList[0]; // 히든값
  } else {
    strCd.setValue("");
    strNm.setValue("");
    strCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
//  증빙구분조회시화면셋팅
//  r_bizMgntYn - 거래처관리여부=>사업자관리여부
//  r_vatYn - 부가세여부
//  r_cardNoYn - 카드번호여부
//  r_frchNoYn - 가맹점번호여부
//  r_deductClsYn - 공제구분여부
//  r_limitAmt - 한도금액
//-------------------------------------------------------------------------
scwin.f_EvidClsCd = function (r_bizMgntYn, r_vatYn, r_cardNoYn, r_frchNoYn, r_deductClsYn, r_limitAmt) {
  ed_bizMgntYn.setValue(r_bizMgntYn);
  if (acb_crcCd.getValue() == ACConstants.KOREA_WON) {
    ed_vatYn.setValue(r_vatYn);
  } else {
    ed_vatYn.setValue(0);
  }
  ed_cardNoYn.setValue(r_cardNoYn);
  ed_frchNoYn.setValue(r_frchNoYn);
  ed_deductClsYn.setValue(r_deductClsYn);
  ed_limitAmt.setValue(r_limitAmt);

  // 공제구분여부
  if (r_deductClsYn == "1") {
    acb_deductClsCd.options.validExp = "공제구분:yes";
    $c.gus.cfEnableObjects($p, [acb_deductClsCd]);
    if (acb_deductClsCd.getValue() == "") {
      acb_deductClsCd.setSelectedIndex(0);
    }
  } else {
    acb_deductClsCd.setValue("");
    acb_deductClsCd.validExp = "공제구분:no";
    $c.gus.cfDisableObjects($p, [acb_deductClsCd]);
  }

  // 부가세여부
  if (r_vatYn == "1") {
    ed_vatAmt.options.validExp = "부가세액:yes";
    $c.gus.cfEnableObjects($p, [ed_vatAmt]);
    //setAmt();
    //setSupplyAmt();
  } else {
    ed_vatAmt.setValue(0);
    ed_vatAmt.options.validExp = "부가세액:no";
    $c.gus.cfDisableObjects($p, [ed_vatAmt]);
    //setAmt();
  }

  // 카드번호여부
  if (r_cardNoYn == "1") {
    ed_cardNo.options.validExp = "카드번호:yes:format=0000000000000000";
    $c.gus.cfEnableObjects($p, [ed_cardNo, img_cardNo]);
  } else {
    ed_cardNo.setValue("");
    ed_cardNm.setValue("");
    ed_cardNo.options.validExp = "카드번호:no:format=0000000000000000";
    $c.gus.cfDisableObjects($p, [ed_cardNo, img_cardNo]);
  }

  // 사업자번호
  if (r_frchNoYn == "1" && r_bizMgntYn == "1" || r_frchNoYn == "0" && r_bizMgntYn == "1") {
    ed_frchCrn.setValue(ed_crn.getValue().trim());
    ed_frchNm.setValue(ed_crnNm.getValue().trim());
    // img_crn.style.display = "inline";
    ed_crn.options.validExpCode = "사업자번호:yes";
    ed_crnNm.options.validExpName = "사업자명:yes:maxByteLength=50";
    $c.gus.cfEnableObjects($p, [ed_crn, img_crn]);
    $c.gus.cfDisableObjects($p, [ed_crnNm]);
  }
  if (r_frchNoYn == "1" && r_bizMgntYn == "0") {
    // img_crn.style.display = "none";
    ed_frchCrn.setValue(ed_crn.getValue().trim());
    ed_frchNm.setValue(ed_crnNm.getValue().trim());
    ed_crn.options.validExpCode = "사업자번호:yes";
    ed_crnNm.options.validExpName = "사업자명:yes:maxByteLength=50";
    $c.gus.cfEnableObjects($p, [ed_crn, ed_crnNm]);
  }
  if (r_frchNoYn == "0" && r_bizMgntYn == "0") {
    // img_crn.style.display = "none";
    ed_crn.setValue("");
    ed_crnNm.setValue("");
    ed_frchCrn.setValue("");
    ed_frchNm.setValue("");
    ed_crn.options.validExpCode = "사업자번호:no";
    ed_crnNm.options.validExpName = "사업자명:no:maxByteLength=50";
    $c.gus.cfDisableObjects($p, [ed_crn, img_crn, ed_crnNm]);
  }
};

//-------------------------------------------------------------------------
//  사업자번호 체크
//-------------------------------------------------------------------------
scwin.f_BizCheck = function () {
  var r_bizMgntYn = ed_bizMgntYn.getValue();
  var r_frchNoYn = ed_frchNoYn.getValue();
  var r_crnLen = ed_crn.getValue().length;
  if (r_frchNoYn == "1" && r_bizMgntYn == "1" || r_frchNoYn == "0" && r_bizMgntYn == "1") {
    ed_crn.options.validExpCode = "사업자번호:yes";
  }
  if (r_frchNoYn == "1" && r_bizMgntYn == "0") {
    if (r_crnLen == 13) {
      ed_crn.options.validExpCode = "사업자번호:yes:ssn";
    } else if (r_crnLen == 10) {
      ed_crn.options.validExpCode = "사업자번호:yes:csn";
    }
  }
  if (r_frchNoYn == "0" && r_bizMgntYn == "0") {
    ed_crn.options.validExpCode = "사업자번호:no";
  }
};

//-------------------------------------------------------------------------
//  계정조회시화면셋팅
//  r_termMgntYn - 기간관리여부
//  r_empMgntYn - 사원관리여부
//  r_dtMgntYn - 일자관리여부
//  r_clntMgntYn - 거래처여부
//-------------------------------------------------------------------------
scwin.f_AcctCd = async function (r_empMgntYn, r_termMgntYn, r_dtMgntYn, r_clntMgntYn) {
  ed_empMgntYn.setValue(r_empMgntYn);
  ed_termMgntYn.setValue(r_termMgntYn);
  ed_dtMgntYn.setValue(r_dtMgntYn);
  ed_clntMgntYn.setValue(r_clntMgntYn);

  // 사원번호여부
  if (r_empMgntYn == "1") {
    // udc_retrieveAcEmpInfo.options.mandatoryCode = "true"
    $c.gus.cfEnableObjects($p, [ed_mgntEmpNo, img_mgntEmpNo]);
  } else {
    ed_mgntEmpNo.setValue("");
    ed_mgntEmpNm.setValue("");
    // udc_retrieveAcEmpInfo.options.mandatoryCode = ""
    $c.gus.cfDisableObjects($p, [ed_mgntEmpNo, img_mgntEmpNo]);
  }

  // 기간관리여부
  if (r_termMgntYn == "1") {
    // ed_mgntTermStDt.validExp="경비기간:yes:date=YYYYMMDD"
    // ed_mgntTermEndDt.validExp="경비기간:yes:date=YYYYMMDD"
    $c.gus.cfEnableObjects($p, [udc_fromToCalendar1]);
  } else {
    ed_mgntTermStDt.setValue("");
    ed_mgntTermEndDt.setValue("");
    // ed_mgntTermStDt.validExp="경비기간:no:date=YYYYMMDD
    // ed_mgntTermEndDt.validExp="경비기간:no:date=YYYYMMDD"
    $c.gus.cfDisableObjects($p, [udc_fromToCalendar1]);
  }

  // 거래처여부
  if (r_clntMgntYn == "1") {
    ed_mgntClntNo.options.validExpCode = "거래처:yes:format=000000";
    $c.gus.cfEnableObjects($p, [ed_mgntClntNo, img_mgntClntNo]);
    if (scwin.vCoCd == "023") {
      ed_mgntClntNo.setValue("907384");
    } else if (scwin.vCoCd == "011") {
      ed_mgntClntNo.setValue("907648");
    } else if (scwin.vCoCd == "029") {
      ed_mgntClntNo.setValue("999921");
    } else {
      ed_mgntClntNo.setValue("999909");
    }
    await scwin.f_checkPopEd(ed_mgntClntNo, ed_mgntClntNm, '10');
  } else {
    ed_mgntClntNo.setValue("");
    ed_mgntClntNm.setValue("");
    ed_mgntClntNo.options.validExpCode = "거래처:no:format=000000";
    $c.gus.cfDisableObjects($p, [ed_mgntClntNo, img_mgntClntNo]);
    ed_mgntClntNo.options.hidVal = "";
  }

  // 일자관리여부   
  if (parseInt(r_dtMgntYn) == "1") {
    // ed_mgntDt.validExp="관리일자:yes:date=YYYYMMDD";
    $c.gus.cfEnableObjects($p, [ed_mgntDt]);
  } else {
    ed_mgntDt.setValue("");
    // ed_mgntDt.validExp="관리일자:no:date=YYYYMMDD";
    $c.gus.cfDisableObjects($p, [ed_mgntDt]);
  }
};

//-------------------------------------------------------------------------
// 그리드 포맷설정
//-------------------------------------------------------------------------
scwin.f_SetGridFormat = function () {
  if (scwin.vUpperAcctDeptCd == "00130") {
    gr_txncontents.setColumnVisible("serviceCharge", false);
  } else {
    gr_txncontents.setColumnVisible("pchsItemNm", false);
    gr_txncontents.setColumnVisible("branchNm", false);
    gr_txncontents.setColumnVisible("dcAmt", false);
  }

  // if ( scwin.vUpperAcctDeptCd == "00130" ){
  //     gr_txncontents.Format =''+
  //     ' <C> id=row          value={currow}                 width=20   align=center                    </C>'+
  //     ' <C> id=evidClsNm    name=증빙                      width=70   align=left                      </C>'+
  //     ' <C> id=txnDt        name=계산서일자                width=80   align=center  Mask="XXXX/XX/XX" </C>'+
  //     ' <c> id=pchsItemNm   name=매입항목명     sort=true  width=70   align=center  Edit="none"       </c>'+                                          
  //     ' <C> id=acctCd       name=계정                      width=60   align=center                    </C>'+
  //     ' <C> id=acctNm       name=계정명                    width=100  align=left                      </C>'+
  //     ' <c> id=branchNm     name=지점명         sort=true  width=70   align=center  Edit="none"       </c>'+
  //     ' <C> id=acctDeptNm   name=귀속부서                  width=80   align=left                      </C>'+
  //     ' <C> id=spplyAmt     name=공급가액                  width=70   align=right   sumtext=@sum      </C>'+
  //     ' <C> id=vatAmt       name=부가세액                  width=70   align=right   sumtext=@sum      </C>'+
  //     ' <C> id=dcAmt        name=할인금액                  width=70   align=right   sumtext=@sum      </C>'+
  //     ' <C> id=summary      name=적요                      width=139  align=left                      </C>'+
  //     ' <H> id=evidClsCd                                                                              </H>'+
  //     ' <H> id=vatDeclarAcctDeptCd                                                                    </H>'
  //     ;                                                         
  // }else{
  //     ' <C> id=row           value={currow}      width=20   align=center                               </C> '+
  //     ' <C> id=evidClsNm     name=증빙           width=70   align=left                                 </C> '+
  //     ' <C> id=txnDt         name=계산서일자     width=80   align=center Mask="XXXX/XX/XX"             </C> '+
  //     ' <C> id=acctCd        name=계정           width=60   align=center                               </C> '+
  //     ' <C> id=acctNm        name=계정명         width=100  align=left                                 </C> '+
  //     ' <C> id=acctDeptNm    name=귀속부서       width=80   align=left                                 </C> '+
  //     ' <C> id=spplyAmt      name=공급가액       width=70   align=right   sumtext=@sum                 </C> '+
  //     ' <C> id=vatAmt        name=부가세액       width=70   align=right   sumtext=@sum                 </C> '+
  //     ' <C> id=dcAmt         name=할인금액       width=70   align=right   sumtext=@sum show=false      </C> '+
  //     ' <C> id=serviceCharge name=봉사료         width=70   align=right   sumtext=@sum                 </C> '+                                      
  //     ' <C> id=summary       name=적요           width=139  align=left                                 </C> '+
  //     ' <H> id=evidClsCd                                                                              </H> '+
  //     ' <H> id=vatDeclarAcctDeptCd                                                                    </H> '+
  //     ' <H> id=reqClntNo                                                                             </H> '+
  //     ' <H> id=reqClntNm                                                                   </H> ';
  // }       

  // cfStyleGrid(gr_txncontents,className);
};

//-------------------------------------------------------------------------
//  증빙별계정 화면
//-------------------------------------------------------------------------
scwin.f_Evidac = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_slipDt, ed_spplyAmt]))) return false;
  var sum = 0;
  // 공제,불공제 구분에따라 금액이 달라짐
  if (acb_deductClsCd.getValue() == "2") {
    sum = Number(ed_spplyAmt.getValue().trim()) + Number(ed_vatAmt.getValue().trim());
  } else {
    sum = Number(ed_spplyAmt.getValue().trim());
  }
  let data = {
    rltSeq: ed_rltSeq.getValue().trim(),
    slipDt: ed_slipDt.getValue().trim(),
    sum: sum
  };
  let win_url = "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_02p.xml";
  let opts = {
    id: "smpPop",
    popupName: "증빙배부",
    modal: true,
    type: "browserPopup",
    width: 1180,
    height: 600,
    title: "증빙배부"
  };
  let returnValue = await $c.win.openPopup($p, win_url, opts, data);

  // todo returnValue 확인

  if (returnValue != null) {
    ds_evidac.removeAll();
    ds_evidac.setJSON(returnValue);
  }
};

//-------------------------------------------------------------------------
//  예산실적
//-------------------------------------------------------------------------
scwin.f_Budget = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_acctDeptCd, ed_acctCd, ed_slipDt]))) return false;
  let data = {
    slipAcctDeptCd: ed_acctDeptCd.getValue().trim(),
    slipAcctDeptNm: ed_acctDeptNm.getValue().trim(),
    acctCd: ed_acctCd.getValue().trim(),
    acctNm: ed_acctNm.getValue().trim(),
    slipDt: ed_slipDt.getValue().trim()
  };
  let win_url = "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_03p.xml";
  let opts = {
    id: "smpPop",
    popupName: "증빙배부",
    modal: true,
    type: "browserPopup",
    width: 1180,
    height: 600,
    title: "증빙배부"
  };
  let returnValue = await $c.win.openPopup($p, win_url, opts, data);
};

//-------------------------------------------------------------------------
//  부가세액 셋팅
//-------------------------------------------------------------------------
scwin.setAmt = function () {
  // 부가세여부가 셋팅시
  //  alert("부가세여부 : "+txt_vatYn.value);
  if (ed_vatYn.getValue() == "1") {
    //ed_vatAmt.text = Math.floor(ed_spplyAmt.text.trim() *(0.1/1));
    ed_vatAmt.setValue(Math.round(ed_spplyAmt.getValue().trim() * 0.1)); //버림->반올림 2012.07.10
  } else {
    ed_vatAmt.setValue(0);
  }
};

//-------------------------------------------------------------------------
//  공급금액 셋팅
//-------------------------------------------------------------------------
scwin.setSupplyAmt = function () {
  // 부가세여부가 셋팅시
  if (ed_vatYn.getValue() == "1") {
    ed_spplyAmt.setValue(Math.floor(ed_vatAmt.getValue().trim() * 10));
  }
};

//-------------------------------------------------------------------------
//  사업자명 입력시
//-------------------------------------------------------------------------
scwin.SetCrnNm = function () {
  if (ed_frchNoYn.getValue() == "1") {
    ed_frchNm.setValue(ed_crnNm.getValue().trim());
  }
};
scwin.f_CrnNm = function (row) {
  if (ed_crnNm.getValue() == "" && typeof ds_txncontents.getCellData(row, "frchNm") != "undefined") {
    ed_crnNm.setValue(ds_txncontents.getCellData(row, "frchNm"));
  }
};
scwin.f_BizCheckFocus = async function () {
  if (ed_crn.getValue() != "") {
    ed_crn.options.validExpCode = "사업자번호:yes:csn";
    if (!(await $c.gus.cfValidate($p, [ed_crn]))) {
      return false;
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 콤보데이터 검증
//------------------------------------------------------------------------- 
scwin.f_CheckComboData = function (objCombo, comboTitle) {
  // if (objCombo.Index == -1 && cfIsNull(objCombo.text) == false) {
  //     objCombo.Index = objCombo.IndexOfColumn(objCombo.SearchColumn, objCombo.text);

  //     if (objCombo.Index == -1) {
  //         cfAlertMsg(MSG_CM_ERR_038, [comboTitle + "코드"]);
  //         objCombo.Focus();
  //     }
  // }
};

//-------------------------------------------------------------------------
//  통화코드변경시
//-------------------------------------------------------------------------
scwin.crcCdChange = async function () {
  //alert(lc_crcCd.BindColVal);
  if (acb_crcCd.getValue() == "" || acb_crcCd.getValue() == ACConstants.KOREA_WON) {
    $c.gus.cfDisableObjects($p, [ed_spplyAmtFcrc]);
    $c.gus.cfEnableObjects($p, [ed_spplyAmt, ed_vatAmt, ed_serviceCharge, btn_pu_evid]);
    ed_exchRt.setValue(0);
    ed_spplyAmtFcrc.setValue(0);
    ed_spplyAmtFcrc.options.validExp = "외화금액:no:maxLength=13";
    //ed_amt.focus();
  } else {
    // 자금의 환율테이블 조회(통화코드,작성일자)
    // 통화코드가 외화일경우 외화금액 필수
    ed_spplyAmtFcrc.options.validExp = "외화금액:yes:notAllowed=0&maxLength=13";
    $c.gus.cfEnableObjects($p, [ed_spplyAmtFcrc]);
    $c.gus.cfDisableObjects($p, [ed_spplyAmt, ed_vatAmt, ed_serviceCharge, btn_pu_evid]);
    ed_vatAmt.setValue(0);
    dma_exchRtSearch.set("crcCd", acb_crcCd.getValue());
    dma_exchRtSearch.set("stdDt", ed_slipDt.getValue());
    await $c.sbm.execute($p, sbm_exchRt);
  }
};

//-------------------------------------------------------------------------
// 차량조회팝업
//-------------------------------------------------------------------------
scwin.f_vehclNoPopup = function (cd, nm) {
  var vehcleNo = cd;
  var vehcleNm = nm;
  var rtnList = new Array();

  //차량조회 업무용차량 팝업으로 변경 (2017.12.19)
  if (acb_busiCarYn.getValue() == 1) {
    //차량조회 팝업
    udc_retrieveWorkVehclInfo.setSelectId("retrieveWorkVehclInfo");
    rtnList = udc_retrieveWorkVehclInfo.cfCommonPopUp(scwin.udc_retrieveWorkVehclInfo_callbackfunc, vehcleNo, vehcleNm, "T", null, null, null, null, null, ",,,,,,", "450", "500", null, null);
  } else if (acb_busiCarYn.getValue() == 3) {
    //개인차량 팝업
    udc_retrieveWorkVehclInfo.setSelectId("retrievePersonVehclInfo");
    rtnList = udc_retrieveWorkVehclInfo.cfCommonPopUp(scwin.udc_retrieveWorkVehclInfo_callbackfunc2, vehcleNo, vehcleNm, "T", null, null, null, null, null, ",,,,,,", "450", "500", null, null);
  }
};
scwin.udc_retrieveWorkVehclInfo_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    ed_vehcleNo.setValue(rtnList[0]); // 단축코드
    ed_vehcleNm.setValue(rtnList[1]); // 차량번호
  } else {
    ed_vehcleNo.setValue("");
    ed_vehcleNm.setValue("");
  }
};
scwin.udc_retrieveWorkVehclInfo_callbackfunc2 = function (rtnList) {
  if (rtnList != null) {
    ed_vehcleNo.setValue(rtnList[0]); // 단축코드
    ed_vehcleNm.setValue(rtnList[1]); // 차량번호
  } else {
    ed_vehcleNo.setValue("");
    ed_vehcleNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 업무용차량여부 체크
//-------------------------------------------------------------------------
scwin.f_chk_busiCarYn = function () {
  if (acb_busiCarYn.getValue() == 1 || acb_busiCarYn.getValue() == 3) {
    $c.gus.cfEnableObjects($p, [acb_expenseCd, ed_vehcleNo, img_vehcleNo]);
  } else {
    $c.gus.cfDisableObjects($p, [acb_expenseCd, ed_vehcleNo, ed_vehcleNm, img_vehcleNo]);
    acb_expenseCd.setValue("");
    ed_vehcleNo.setValue("");
    ed_vehcleNm.setValue("");
  }
};
scwin.udc_retrieveAcctDept_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};
scwin.udc_retrieveAcctDept_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, '1');
};
scwin.udc_retrieveCrnInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('7', 'F');
};
scwin.udc_retrieveCrnInfo_onblurCodeEvent = function (e) {
  if (ed_crn.getValue().trim() == ed_crn.options.hidVal) return;
  if (ed_frchNoYn.getValue() == "1") {
    ed_frchCrn.setValue(ed_crn.getValue().trim());
  } else {
    ed_frchCrn.setValue("");
  }
  if (ed_clntMgntYn.getValue() != "1" && ed_frchNoYn.getValue() == "1") {
    ed_crn.options.hidVal = ed_crn.getValue().trim();
  } else {
    ed_crnNm.setValue("");
    ed_crn.options.hidVal = "";
    if (ed_crn.getValue().trim() != "") scwin.f_openPopUp('7', 'T');
  }
};
scwin.udc_retrieveCrnInfo_onblurNameEvent = function (e) {
  scwin.SetCrnNm();
};
scwin.udc_branchCd2_onclickEvent = function (e) {
  scwin.f_openPopUp('13', 'F');
};
scwin.udc_branchCd2_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp('13', 'F');
};
scwin.udc_branchCd2_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_branchCd, ed_branchNm, '13');
};
scwin.udc_branchCd_onclickEvent = function (e) {
  scwin.f_openPopUp('12', 'F');
};
scwin.udc_branchCd_onblurNameEvent = function (e) {
  scwin.f_checkPopEd(ed_pchsItemCd, ed_pchsItemNm, '12');
};
scwin.udc_retrieveCrnInfo2_onclickEvent = function (e) {
  scwin.f_openPopUp('4', 'F');
};
scwin.udc_retrieveCrnInfo2_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_acctDeptCd, ed_acctDeptNm, '4');
};
scwin.udc_retrieveVatDeclar_onclickEvent = function (e) {
  scwin.f_VatDeclarAcctDeptCd('1');
};
scwin.udc_retrieveVatDeclar_onblurCodeEvent = function (e) {
  if (ed_vatDeclarAcctDeptCd.getValue().trim() == ed_vatDeclarAcctDeptCd.options.hidVal) return;
  ed_vatDeclarAcctDeptNm.setValue("");
  ed_vatCrn.setValue("");
  ed_vatDeclarAcctDeptCd.options.hidVal = "";
  if (ed_vatDeclarAcctDeptCd.getValue().trim() != "") scwin.f_VatDeclarAcctDeptCd('3');
};
scwin.udc_retrieveVat_onclickEvent = function (e) {
  scwin.f_openPopUp('6', 'F');
};
scwin.udc_retrieveVat_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_cardNo, ed_cardNm, '6');
};
scwin.udc_retrieveExpense_onclickEvent = function (e) {
  scwin.f_openPopUp('3', 'F');
};
scwin.udc_retrieveExpense_onblurCodeEvent = function (e) {
  if (ed_acctCd.getValue() == "") {
    ed_acctNm.setValue("");
    ed_acctCd.options.hidVal = "";
  } else {
    scwin.f_checkPopEd(ed_acctCd, ed_acctNm, '3');
  }
};
scwin.udc_retrieveClntList_onclickEvent = function (e) {
  scwin.f_openPopUp('10', 'F');
};
scwin.udc_retrieveClntList_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_mgntClntNo, ed_mgntClntNm, '10');
};
scwin.udc_retrieveAcEmpInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('8', 'F');
};
scwin.udc_retrieveAcEmpInfo_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_mgntEmpNo, ed_mgntEmpNm, '8');
};
scwin.udc_retrieveClntList3_onclickEvent = function (e) {
  scwin.f_openPopUp('9', 'T');
};
scwin.udc_retrieveClntList3_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_adjmClntNo, ed_adjmClntNm, '9');
};
scwin.udc_retrieveExpense2_onclickEvent = function (e) {
  scwin.f_openPopUp('11', 'F');
};
scwin.img_opntAcctCd_onclick = function (e) {
  scwin.f_openPopUp('14', 'F');
};
scwin.udc_retrieveClntList4_onclickEvent = function (e) {
  scwin.f_openPopUp('15', 'T');
};
scwin.udc_retrieveClntList4_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_reqClntNo, ed_reqClntNm, '15');
};
scwin.udc_retrieveWorkVehclInfo_onclickEvent = function (e) {
  scwin.f_vehclNoPopup(ed_vehcleNo.getValue(), ed_vehcleNm.getValue());
};
scwin.udc_retrieveWorkVehclInfo_onblurCodeEvent = function (e) {
  scwin.f_vehclNoPopup(ed_vehcleNo.ed, "");
};
scwin.btn_Division_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_pu_evid_onclick = function (e) {
  scwin.f_Evidac();
};

//-------------------------------------------------------------------------
// 예산실적 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_pu_budget_onclick = function (e) {
  scwin.f_Budget();
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    //cfAlertMsg(MSG_CM_INF_001);   // 성공적으로 저장하였습니다
    //alert(ds_slipNo.text);
    if (ds_slipNo.getCellData(0, "slipNo") != "") {
      $c.gus.cfShowSlipInfo($p, ds_slipNo.getCellData(0, "slipNo"));
    }
    ds_txncontents.removeAll();
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfEnableAllBtn($p);
    scwin.slipDt = ed_slipDt.getValue();
    $c.win.closePopup($p);
  }
};

//-------------------------------------------------------------------------
// row position 변경됨  ds_txncontents_onrowpositionchange  @@
//-------------------------------------------------------------------------
scwin.ds_txncontents_onrowpositionchange = function (info) {
  var row = 0;
  var row = ds_txncontents.getRowPosition();
  console.log("=== ds_txncontents_onrowpositionchange row [" + row + "]");

  //f_EvidClsCd(ds_txncontents.NameString(row,"bizMgntYn"),ds_txncontents.NameString(row,"vatYn"),ds_txncontents.NameString(row,"cardNoYn"),
  //          ds_txncontents.NameString(row,"frchNoYn"),ds_txncontents.NameString(row,"deductClsYn"),ds_txncontents.NameString(row,"limitAmt")) ;
  scwin.f_AcctCd(ds_txncontents.getCellData(row, "empMgntYn"), ds_txncontents.getCellData(row, "termMgntYn"), ds_txncontents.getCellData(row, "dtMgntYn"), ds_txncontents.getCellData(row, "clntMgntYn"));
  $c.gus.cfDisableObjects($p, [ed_cardNm, ed_acctNm, ed_acctDeptNm, ed_vatDeclarAcctDeptNm, ed_mgntEmpNm, ed_adjmClntNm, ed_vatCrn, ed_mgntClntNm]);
  scwin.f_CrnNm(row);
  //if (ds_txncontents.NameValue(row,"acctCd") == "4200910" || ds_txncontents.NameValue(row,"acctCd") == "5000810"){
  //  cfDisableObjects([ed_acctCd,img_acctCd]);
  //} else {
  //  cfEnableObjects([ed_acctCd,img_acctCd]);
  //}
  ed_slipAcctDeptCd.options.hidVal = ds_txn.get("slipAcctDeptCd");
  ed_crn.options.hidVal = ds_txncontents.getCellData(row, "crn");
  ed_cardNo.options.hidVal = ds_txncontents.getCellData(row, "cardNo");
  ed_acctCd.options.hidVal = ds_txncontents.getCellData(row, "acctCd");
  ed_acctDeptCd.options.hidVal = ds_txncontents.getCellData(row, "acctDeptCd");
  ed_vatDeclarAcctDeptCd.options.hidVal = ds_txncontents.getCellData(row, "vatDeclarAcctDeptCd");
  ed_mgntEmpNo.options.hidVal = ds_txncontents.getCellData(row, "mgntEmpNo");
  ed_adjmClntNo.options.hidVal = ds_txncontents.getCellData(row, "adjmClntNo");
  ed_mgntClntNo.options.hidVal = ds_txncontents.getCellData(row, "mgntClntNo");
  ed_slipAcctDeptCd.setValue(ds_txn.get("slipAcctDeptCd"));
  ed_crn.setValue(ds_txncontents.getCellData(row, "crn"));
  ed_cardNo.setValue(ds_txncontents.getCellData(row, "cardNo"));
  ed_acctCd.setValue(ds_txncontents.getCellData(row, "acctCd"));
  ed_acctDeptCd.setValue(ds_txncontents.getCellData(row, "acctDeptCd"));
  ed_vatDeclarAcctDeptCd.setValue(ds_txncontents.getCellData(row, "vatDeclarAcctDeptCd"));
  ed_mgntEmpNo.setValue(ds_txncontents.getCellData(row, "mgntEmpNo"));
  ed_adjmClntNo.setValue(ds_txncontents.getCellData(row, "adjmClntNo"));
  ed_adjmClntNm.setValue(ds_txncontents.getCellData(row, "adjmClntNm"));
  ed_mgntClntNo.setValue(ds_txncontents.getCellData(row, "mgntClntNo"));
  ed_mgntClntNm.setValue(ds_txncontents.getCellData(row, "mgntClntNm"));
  ed_reqClntNo.setValue(ds_txncontents.getCellData(row, "reqClntNo"));
  ed_reqClntNm.setValue(ds_txncontents.getCellData(row, "reqClntNm"));

  // 공제확정유무값에 따라 공제유무 콘트롤을 활성화/비활성화 한다. 
  if (ds_txncontents.getCellData(0, "deductfixClsCd") == "1") {
    $c.gus.cfDisableObjects($p, [acb_deductClsCd]);
  } else {
    $c.gus.cfEnableObjects($p, [acb_deductClsCd]);
  }
};
scwin.acb_evidClsCd_onchange = function (info) {
  // var row = ds_evidClsCd.getCellData("COL1", acb_evidClsCd.ValueOfIndex("COL1", acb_evidClsCd.Index));
  var row = ds_evidClsCd.getMatchedIndex("col1", acb_evidClsCd.getValue());
  ds_txncontents.setCellData(row, "evidClsNm", ds_evidClsCd.getCellData(row, "col2"));
  ed_evidClsNm.setValue(ds_evidClsCd.getCellData(row, "col2")); //증빙명
  scwin.f_EvidClsCd(ds_evidClsCd.getCellData(row, "col3"), ds_evidClsCd.getCellData(row, "col4"), ds_evidClsCd.getCellData(row, "col5"), ds_evidClsCd.getCellData(row, "col6"), ds_evidClsCd.getCellData(row, "col7"), ds_evidClsCd.getCellData(row, "col9"));
  acb_evidClsCd.setSelectedIndex(3);
  //lc_deductClsCd.BindColVal = "2";
};
scwin.acb_busiCarYn_onchange = function (info) {
  if (acb_busiCarYn.getValue() == 1 || acb_busiCarYn.getValue() == 3) {
    $c.gus.cfEnableObjects($p, [acb_expenseCd, ed_vehcleNo, img_vehcleNo]);
  } else {
    $c.gus.cfDisableObjects($p, [acb_expenseCd, ed_vehcleNo, ed_vehcleNm, img_vehcleNo]);
    acb_expenseCd.setValue("");
    ed_vehcleNo.setValue("");
    ed_vehcleNm.setValue("");
  }
};
scwin.ed_spplyAmtFcrc_onblur = function (e) {
  ed_spplyAmt.setValue(Math.floor(ed_spplyAmtFcrc.getValue().trim() * ed_exchRt.getValue().trim()));
};
scwin.acb_crcCd_onchange = function (info) {
  scwin.crcCdChange();
  if (acb_crcCd.getValue() == "" || acb_crcCd.getValue() == ACConstants.KOREA_WON) {
    $c.gus.cfDisableObjects($p, [ed_spplyAmtFcrc, ed_exchRt]);
    $c.gus.cfEnableObjects($p, [ed_spplyAmt, btn_pu_evid]);
  } else {
    $c.gus.cfEnableObjects($p, [ed_spplyAmtFcrc, ed_exchRt]);
    $c.gus.cfDisableObjects($p, [ed_spplyAmt, btn_pu_evid]);
  }
};
scwin.ed_txnDt_onblur = function (e) {
  if (ed_vatDeclarAcctDeptCd.getValue() == null || ed_vatDeclarAcctDeptCd.getValue() == "") {
    ed_vatDeclarAcctDeptCd.options.hidVal = '';
    ed_vatDeclarAcctDeptCd.setValue("");
    ed_vatDeclarAcctDeptNm.setValue("");
    ed_vatCrn.setValue("");
  } else {
    scwin.f_VatDeclarAcctDeptCd('2');
  }
};

// @@ ====== 저장 ============================================================================== //

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_txncontents.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, "데이타가 없습니다.");
    return;
  }
  if (!(await scwin.f_Validation())) return;

  // 전표 내역중 전표칠 대상 데이터[ds_txncontents]의 공급급액+부가세액+봉사료 금액이 
  // 개인형법인카드 정산내역[ds_card]의 공급금액+부가세액+봉사료 금액이 초과하는지 확인 
  // ** 예외사항! 원)여비교통비-국내출장비, 원)여비교통비-해외출장비, 판)여비교통비-국내출장비, 판)여비교통비-해외출장비  
  //             계정의 경우 전표발행금액이 더 적은 경우에도 전표투입이 가능함
  var ds_txncontents_approveAmt = 0;
  var ds_txncontents_tax = 0;
  var ds_txncontents_serviceCharge = 0;
  var ds_card_approveAmt = 0;
  var ds_card_tax = 0;
  var ds_card_serviceCharge = 0;
  var ds_chk = 0;
  var temp4 = '1^4200820,2^4200830,3^5000720,4^5000730,5^5000625,6^5001350'; //제외계정코드(공통코드) <%= GauceUtil.getCodeList("FI098") %>
  var tempList4 = temp4.split(",");
  var acctList = "";
  var chkPayAmt = 0;
  var chkSuspenseAmt = 0;
  var payAmt = 0;
  var suspenseAmt = 0;

  // todo new Date 확인
  var slipDate = new Date(ed_slipDt.getValue().substring(0, 4), ed_slipDt.getValue().substring(4, 6), ed_slipDt.getValue().substring(6, 8));
  var slipBfLast = new Date(slipDate.getFullYear(), slipDate.getMonth() - 1, 0);
  var slipBfMm = slipBfLast.getMonth();
  slipBfMm += 1;
  slipBfMm = slipBfMm < 10 ? "0" + slipBfMm : slipBfMm;
  var slipBfDd = slipBfLast.getDate() < 10 ? "0" + slipBfLast.getDate() : slipBfLast.getDate();
  var lastDate = String(slipBfLast.getFullYear()) + slipBfMm + slipBfDd;
  var bfMmDay = 0;
  var fullDay = 0;
  var summary_temp = "";
  var acctCd_temp = "";
  var acctNm_temp = "";
  var search_str = ["접대", "접식", "거래처"];
  var acct_cnt1 = 0; //통제성계정 여부
  var acct_cnt2 = 0; //비통제성계정 여부

  for (var i = 0; i < ds_txncontents.getTotalRow(); i++) {
    summary_temp = ds_txncontents.getCellData(i, 'summary');
    acctCd_temp = ds_txncontents.getCellData(i, 'acctCd');
    acctNm_temp = ds_txncontents.getCellData(i, 'acctNm');
    ds_chk = 0;
    ds_txncontents_spplyAmt = Number(ds_txncontents.getCellData(i, 'spplyAmt')); // 경비전표입력팝업 공급금액
    ds_txncontents_vatAmt = Number(ds_txncontents.getCellData(i, 'vatAmt')); // 경비전표입력팝업 부가세액
    ds_txncontents_serviceCharge = Number(ds_txncontents.getCellData(i, 'serviceCharge') || ""); // 경비전표입력팝업 봉사료

    ds_card_approveAmt = Number(ds_card.getCellData(i, 'approveAmt')); // 개인형법인카드정산 공금금액
    ds_card_tax = Number(ds_card.getCellData(i, 'tax')); // 개인형법인카드정산 부가세액
    ds_card_serviceCharge = Number(ds_card.getCellData(i, 'serviceCharge')); // 개인형법인카드정산 봉사료 			
    ds_txncontents_acctCd = ds_txncontents.getCellData(i, 'acctCd'); // 경비전표입력팝업 계정코드

    ds_txncontents.setCellData(i, "coCd", scwin.txtCoCd);
    ds_txncontents.setCellData(i, "coClsCd", scwin.txtCoClsCd);
    var spplayAmt = 0;
    var dcAmt = 0;
    var evidSum = 0;
    var vatAmt = 0;

    // 상대계정입력이 필요한계정인것은 상대계정입력  필수확인 
    var temp3 = '1^4202480,2^4202481,3^1120130'; // <%= GauceUtil.getCodeList("FI055") %>
    var tempList3 = temp3.split(",");
    for (var j = 0; j < search_str.length; j++) {
      // 적요에 접대,접식 단어가 있는데,
      if (summary_temp.search(search_str[j]) >= 0) {
        // 계정코드가 접대비계정코드가 아니라면, 
        if (acctCd_temp != '4200900' && acctCd_temp != '4200910' && acctCd_temp != '4200920' && acctCd_temp != '4200930' && acctCd_temp != '5000800' && acctCd_temp != '5000810' && acctCd_temp != '5000820' && acctCd_temp != '5000830' && acctCd_temp != '4204732' && acctCd_temp != '4200950' && acctCd_temp != '5000850' && acctCd_temp != '5002920' && acctCd_temp != '4200940' && acctCd_temp != '5000840') {
          await $c.gus.cfAlertMsg($p, "[" + (i + 1) + "] 행의 적요에 [" + search_str[j] + "] 라는 단어가 있는데," + "\n접대비 계정코드를 사용하지 않았습니다." + "\n확인하시고, 다시 입력해주세요." + "\n사용한 계정코드 => " + acctNm_temp + "[" + acctCd_temp + "]" + "\n적요            => " + summary_temp);
          return false;
        }
      }
    }

    // 통제성계정과 비통제성 계정 같은 전표로 발행 못하도록 요청, 계정에따라 전표종류 분리  
    // 비통제성계정
    if (acctCd_temp != "4203610" && acctCd_temp != "4200611" && acctCd_temp != "4200910" && acctCd_temp != "4201010" && acctCd_temp != "4203110" && acctCd_temp != "4200810" && acctCd_temp != "4202810" && acctCd_temp != "4203010" && acctCd_temp != "4203620" && acctCd_temp != "4200612" && acctCd_temp != "4200920" && acctCd_temp != "5000910" && acctCd_temp != "4203120" && acctCd_temp != "5000710" && acctCd_temp != "4202820" && acctCd_temp != "5001610" && acctCd_temp != "4203630" && acctCd_temp != "4200625" && acctCd_temp != "4200930" && acctCd_temp != "4203130" && acctCd_temp != "4202830" && acctCd_temp != "4203640" && acctCd_temp != "4200629" && acctCd_temp != "4200940" && acctCd_temp != "4203140" && acctCd_temp != "4202840" && acctCd_temp != "4203650" && acctCd_temp != "5000611" && acctCd_temp != "4200950" && acctCd_temp != "4203150" && acctCd_temp != "4202850" && acctCd_temp != "4203660" && acctCd_temp != "5000612" && acctCd_temp != "4204732" && acctCd_temp != "4203160" && acctCd_temp != "5001410" && acctCd_temp != "5002110" && acctCd_temp != "5000623" && acctCd_temp != "5000810" && acctCd_temp != "4203170" && acctCd_temp != "5001420" && acctCd_temp != "5002120" && acctCd_temp != "5000627" && acctCd_temp != "5000820" && acctCd_temp != "5001710" && acctCd_temp != "5001430" && acctCd_temp != "5002130" && acctCd_temp != "5000830" && acctCd_temp != "5001720" && acctCd_temp != "5001440" && acctCd_temp != "5002140" && acctCd_temp != "5000840" && acctCd_temp != "5001730" && acctCd_temp != "5001450" && acctCd_temp != "5002150" && acctCd_temp != "5000850" && acctCd_temp != "5001740" && acctCd_temp != "5002160" && acctCd_temp != "5002920" && acctCd_temp != "5001750" && acctCd_temp != "5001760") {
      acct_cnt1++;
      if (acctList == "") {
        acctList = acctNm_temp;
      } else {
        acctList = acctList + ", " + acctNm_temp;
      }
    } else {
      acct_cnt2++;
    }

    // 제외대상 계정 체크 
    for (var j = 0; j < tempList4.length; j++) {
      var checkList4 = tempList4[j].split("^");
      if (ds_txncontents_acctCd == checkList4[1].trim()) {
        ds_chk = 1;
        j = tempList4.length;
      }
    }

    // 제외대상 계정 코드인 경우 전표금액 초과하는지 확인
    if (ds_chk == 1) {
      if (ds_txncontents_spplyAmt + ds_txncontents_vatAmt + ds_txncontents_serviceCharge > ds_card_approveAmt + ds_card_tax + ds_card_serviceCharge) {
        await $c.gus.cfAlertMsg($p, "[" + (i + 1) + "] 행의 전표내역의 합산금액[공급금액+부가세액+봉사료]이(" + (ds_txncontents_spplyAmt + ds_txncontents_vatAmt + ds_txncontents_serviceCharge) + ")" + "\n" + "개인형법인카드 정산내역의 합산금액[공급금액+부가세액+봉사료]보다 (" + (ds_card_approveAmt + ds_card_tax + ds_card_serviceCharge) + ") 큽니다.");
        i = ds_txncontents.getTotalRow();
        return false;
      }
    } else {
      // 제외대상 계정 코드가 아닌 경우 전표금액 맞는지 확인	 			
      if (ds_txncontents_spplyAmt + ds_txncontents_vatAmt + ds_txncontents_serviceCharge != ds_card_approveAmt + ds_card_tax + ds_card_serviceCharge) {
        // 특정대상자가 실제 사용금액보다 적게 전표를 요청할경우, 아래 user_id IF 구문에 사용자 ID를 추가하면 된다. 
        if (scwin.user_id == "누구면") {} else {
          await $c.gus.cfAlertMsg($p, "[" + (i + 1) + "] 행의 전표내역의 합산금액[공급금액+부가세액+봉사료]은(" + (ds_txncontents_spplyAmt + ds_txncontents_vatAmt + ds_txncontents_serviceCharge) + ")" + "\n" + "개인형법인카드 정산내역의 합산금액[공급금액+부가세액+봉사료]과 (" + (ds_card_approveAmt + ds_card_tax + ds_card_serviceCharge) + ") 상이할 수 없습니다." + "\n" + "확인하시고 다시 입력해주십시오.");
          i = ds_txncontents.getTotalRow();
          return false;
        }
      }
    }

    //증빙별금액체크
    // 2009년 10월28일 정산처를 입력안하고 팝업누를경우 거래처가 없다...라고 메시지가 나와서 화면에서 제어함(송영심, 박종삼)
    // 정산처팝업이 뜨는데 그냥 닫고 발행하면 거래처값이 안들어감, 이때 화면에서 정산처명은 있는데 코드가 없는값을 제어함
    if (ed_adjmClntNm.getValue() != "") {
      if (ed_adjmClntNo.getValue() == "") {
        await $c.gus.cfAlertMsg($p, "정산처를 선택하지 않으셨습니다. 새로 입력하십시오");
        return;
      }
    }
    for (j = 0; j < ds_evidac.getTotalRow(); j++) {
      if (ds_txncontents.getCellData(i, "rltSeq") == ds_evidac.getCellData(j, "rltSeq")) {
        evidSum = evidSum + Number(ds_evidac.getCellData(j, "amt"));
        spplyAmt = Number(ds_txncontents.getCellData(i, "spplyAmt"));
        vatAmt = Number(ds_txncontents.getCellData(i, "vatAmt"));
        //dcAmt = ds_txncontents.NameValue(i,"dcAmt");
      }
    }

    //alert(" tempList"+tempList.length);
    for (var j = 0; j < tempList3.length; j++) {
      var checkList3 = tempList3[j].split("^");
      //alert(checkList[1].trim());  //"4202480"
      if (ed_acctCd.getValue().trim() == checkList3[1].trim()) {
        if (ed_opntAcctCd.getValue().trim() == null || ed_opntAcctCd.getValue().trim() == "") {
          await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "상대계정"));
          return;
        }
      }
    }
    var deductSum = 0;
    if (evidSum != 0) {
      // 공제,불공제 구분에따라 금액이 달라짐
      if (acb_deductClsCd.getValue() == "2") {
        deductSum = Number(spplyAmt + vatAmt);
      } else {
        deductSum = Number(spplyAmt);
      }
      // alert(evidSum);
      // alert(deductSum);
      if (Number(deductSum) != evidSum) {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "증빙별 금액"));
        return;
      }
    }

    // 가지급금금액체크
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
    if (ds_txncontents.getCellData(i, "adjmClsCd") == ACConstants.ADJM_MTHDCD_SUSPAY || ds_txncontents.getCellData(i, "adjmClsCd") == ACConstants.ADJM_MTHDCD_PREPAY) {
      for (j = 0; j < ds_prov.getTotalRow(); j++) {
        if (ds_txncontents.getCellData(i, "rltSeq") == ds_prov.getCellData(j, "rltSeq")) {
          amtSum = Number(ds_txncontents.getCellData(i, "spplyAmt")) + Number(ds_txncontents.getCellData(i, "vatAmt")) - Number(ds_txncontents.getCellData(i, "dcAmt"));
          amtSumFcrc = Number(ds_txncontents.getCellData(i, "spplyAmtFcrc"));
          prepaySum = prepaySum + Number(ds_prov.getCellData(j, "setlIntendAmt"));
          prepaySumFcrc = prepaySumFcrc + Number(ds_prov.getCellData(j, "setlIntendAmtFcrc"));
        }
      } // for end

      //alert(amtSum);
      //alert(prepaySum);
      if (prepaySum == 0 && acb_crcCd.getValue() == ACConstants.KOREA_WON) {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "정리금액"));
        return;
      }
      if (amtSum != prepaySum && acb_crcCd.getValue() == ACConstants.KOREA_WON) {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "정리금액"));
        return;
      }
      if (prepaySumFcrc == 0 && acb_crcCd.getValue() != ACConstants.KOREA_WON) {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "정리외화금액"));
        return;
      }
      if (amtSumFcrc != prepaySumFcrc && acb_crcCd.getValue() != ACConstants.KOREA_WON) {
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "정리외화금액"));
        return;
      }
    } // if end			

    stDate = ds_txncontents.getCellData(i, "mgntTermStDt");
    endDate = ds_txncontents.getCellData(i, "mgntTermEndDt");
    if (!$c.gus.cfIsNull($p, ds_txncontents.getCellData(i, "mgntTermStDt")) || !$c.gus.cfIsNull($p, ds_txncontents.getCellData(i, "mgntTermEndDt"))) {
      bfMmDay = parseInt(WebSquare.date.dateDiff(stDate, lastDate)) + 1;
      fullDay = parseInt(WebSquare.date.dateDiff(stDate, endDate)) + 1;
      if (parseInt(WebSquare.date.dateDiff(stDate, lastDate)) > 0) {
        payAmt = Math.round(bfMmDay / fullDay * Number(ds_txncontents.getCellData(i, "spplyAmt")));
        suspenseAmt = Number(ds_txncontents.getCellData(i, "spplyAmt")) - payAmt;
        chkPayAmt += payAmt;
        chkSuspenseAmt += suspenseAmt;
      } else {
        if (scwin.f_suspenseCheck(ds_txncontents.getCellData(i, "mgntTermStDt"), ds_txncontents.getCellData(i, "mgntTermEndDt"), ed_slipDt.text)) {
          chkSuspenseAmt += Number(ds_txncontents.getCellData(i, "spplyAmt"));
        } else {
          chkPayAmt += Number(ds_txncontents.getCellData(i, "spplyAmt"));
        }
      }
    }
  }

  /*
  if(vCoCd=="000"||vCoCd=="024"||vCoCd=="028"||vCoCd=="011"){ //동원로엑스 계정별 전표종류 분개
      if(acct_cnt1!=0&&acct_cnt2!=0){
          alert("접대비, 회의비, 복후비-식대, 복후비-음료수대금, 복후비-기타, 여비교통비-시내교통비, 도서인쇄비, 사무용품비 계정은 다른 계정과 발행이 불가능합니다. 따로 발행하시기 바랍니다.")
          return;
      }
  }
  */

  // 투입불가 계정이 들어갔는지 체크.
  if (scwin.isSubCompany == false) {
    //자회사 여부
    for (i = 0; i < ds_txncontents.getTotalRow(); i++) {
      for (j = 0; j < ds_acctCd.getTotalRow(); j++) {
        if (ds_txncontents.getCellData(i, "acctCd") == ds_acctCd.getCellData(j, "col1")) {
          await $c.gus.cfAlertMsg($p, i + 1 + "행에 입력한 계정(" + ds_txncontents.getCellData(i, "acctCd") + ")은 투입불가 계정입니다.");
          return;
        }
      }
    }
  }

  /*  현업 담당자 결재 혼란의 이유로 로직 수정 요청(2025.01.06  이정현 사원)
  if(vCoCd=="000"||vCoCd=="024"||vCoCd=="028"||vCoCd=="011"){ //동원로엑스 계정별 전표종류 분개
      //계정별 전표종류 분개
      if((acct_cnt1!=0&&acct_cnt2==0)||(acct_cnt1!=0&&acct_cnt2!=0)){ //비통제성 계정
          if(confirm("비통제성 계정이 포함되어있어 재경팀 상신 대상전표(개인형법인카드정산)로 발행됩니다."+"\n"
                      +"발행하시겠습니까?"+"\n"
                      +"(비통제성 계정 : "+acctList+")")==true){
              slipKndCd = "A17"; //개인형법인카드 정산
          }else{
              return;
          }
      }else if(acct_cnt1==0&&acct_cnt2!=0){ //통제성 계정
          slipKndCd =  "A26"; //개인형법인카드 정산(통제성)
          
      }
  }
  */

  //alert("chkSuspenseAmt : " + chkSuspenseAmt + "/ chkPayAmt " + chkPayAmt);
  var chkConfirm = "";
  if (chkSuspenseAmt == 0 && chkPayAmt == 0) {
    chkConfirm = "발행하시겠습니까?";
  } else {
    chkConfirm = "- 당월 비용 " + chkPayAmt + "원," + "\n" + "- 선급 비용 " + chkSuspenseAmt + "원으로 전표 발행됩니다." + "\n" + "발행하시겠습니까?";
  }
  debugger;
  var test = await $c.gus.cfValidate($p, [gr_txncontents, null, true]);
  if (test) {
    if ((await $c.win.confirm($p, chkConfirm)) == true) {
      // 증빙별계정구분 
      for (i = 0; i < ds_txncontents.getTotalRow(); i++) {
        ds_txncontents.setCellData(i, "buyCollectionNum", ds_card.getCellData(i, "buyCollectionNum"));
        if (ds_evidac.getTotalRow() == 0) {
          ds_txncontents.setCellData(i, "acctDistYn", "0");
        } else {
          for (j = 0; j < ds_evidac.getTotalRow(); j++) {
            if (ds_txncontents.getCellData(i, "rltSeq") == ds_evidac.getCellData(j, "rltSeq")) {
              ds_txncontents.setCellData(i, "acctDistYn", "1");
              break;
            } else {
              ds_txncontents.setCellData(i, "acctDistYn", "0");
            }
          }
        }
      }

      // 가지급금 적요,정리일자
      for (i = 0; i < ds_prov.getTotalRow(); i++) {
        for (j = 0; j < ds_provHeader.getTotalRow(); j++) {
          if (ds_prov.getCellData(i, "rltSeq") == ds_provHeader.getCellData(j, "rltSeq")) {
            ds_prov.setCellData(i, "summary", ds_provHeader.getCellData(j, "summary"));
            ds_prov.setCellData(i, "setlDt", ds_provHeader.getCellData(j, "setlDt"));
            ds_prov.setCellData(i, "bankbookNo", ds_provHeader.getCellData(j, "bankbookNo"));
            break;
          }
        }
      }

      // 차량별실적 필드 검사
      if (ds_tmp.getTotalRow() != 0) {
        var ds_txncontentsNum = 0;
        if (ds_txncontents.getTotalRow() != 0) {
          ds_txncontentsNum = ds_txncontentsNum + scwin.sumCol(ds_txncontents, "spplyAmt"); // Number(ds_txncontents.NameSum("spplyAmt", 0, ds_txncontents.CountRow));
          ds_txncontentsNum = ds_txncontentsNum + scwin.sumCol(ds_txncontents, "vatAmt"); // Number(ds_txncontents.NameSum("vatAmt", 0, ds_txncontents.CountRow));
        }
        if (Number(numStr_hidden.getValue()) != Number(ds_txncontentsNum)) {
          await $c.gus.cfAlertMsg($p, "차량별실적 금액과 공급금액과 부가세액의 합이 같지 않습니다.");
          return;
        }
      }
      ds_txn.set("slipKndCd", scwin.slipKndCd);

      // dataSetDebug(ds_txncontents, false);

      ds_txn.set("slipDt", ed_slipDt.getValue());
      $c.sbm.execute($p, sbm_save);
    }
  }
};

// 합계 계산(원본 NameSum 대체)
scwin.sumCol = function (ds, colId) {
  var sum = 0;
  for (var r = 0; r < ds.getRowCount(); r++) {
    sum += Number(ds.getCellData(r, colId) || 0);
  }
  return sum;
};

//-------------------------------------------------------------------------
// 히든값체크
//-------------------------------------------------------------------------
scwin.f_HiddenCheck = async function (str, msg) {
  debugger;
  //alert(str.text.trim());
  //alert(str.hidVal);

  if (str.getValue().trim() == "") return true;
  if (str.getValue().trim() != str.options.hidVal) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_038, [msg]));
    // str.SelectAll = "true";
    str.focus();
    return false;
  } else {
    return true;
  }
};

//-------------------------------------------------------------------------
// 선급비용 여부 체크 2016.11.02
//-------------------------------------------------------------------------   
scwin.f_suspenseCheck = function (FromDt, ToDt, SlipDt) {
  if (SlipDt.substring(0, 6) < FromDt.substring(0, 6)) return true;
  if (FromDt.substring(0, 6) < ToDt.substring(0, 6)) return true;
  return parseInt(WebSquare.date.dateDiff(FromDt, ToDt)) + 1 >= 31;
};

//-------------------------------------------------------------------------
// 체크
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  // 사업자번호 체크
  scwin.f_BizCheck();
  if (!(await $c.gus.cfValidate($p, [acb_evidClsCd, acb_deductClsCd, acb_adjmClsCd, ed_slipDt, ed_slipAcctDeptCd, ed_serviceCharge, ed_acctCd, ed_acctDeptCd, ed_summary, ed_spplyAmt, ed_vatAmt, ed_crn, ed_txnDt, ed_crnNm, ed_vatDeclarAcctDeptCd]))) return false;
  if (ed_empMgntYn.getValue() == "1") {
    if (!(await $c.gus.cfValidate($p, [ed_mgntEmpNo]))) return false;
  }
  if (ed_termMgntYn.getValue() == "1") {
    if (!(await $c.gus.cfValidate($p, [ed_mgntTermEndDt, ed_mgntTermStDt]))) return false;
  }
  if (ed_clntMgntYn.getValue() == "1") {
    if (!(await $c.gus.cfValidate($p, [ed_mgntClntNo]))) return false;
  }
  if (ed_dtMgntYn.getValue() == "1") {
    if (!(await $c.gus.cfValidate($p, [ed_mgntDt]))) return false;
  }

  //
  //if(ed_crn.text.trim()!="" && (ed_crn.text.trim().length!=13 && ed_crn.text.trim().length!=10)
  // && (lc_evidClsCd.BindColVal=="40" || lc_evidClsCd.BindColVal=="50" || lc_evidClsCd.BindColVal=="60" || lc_evidClsCd.BindColVal=="70")){
  //       cfAlertMsg("사업자번호는 13자리나 10자리여야 합니다");
  //       ed_crn.focus();
  //       return false;
  //}
  if (!(await scwin.f_HiddenCheck(ed_slipAcctDeptCd, "발행부서"))) return false;
  if (!(await scwin.f_HiddenCheck(ed_crn, "사업자번호"))) return false;
  if (!(await scwin.f_HiddenCheck(ed_cardNo, "카드번호"))) return false;
  if (!(await scwin.f_HiddenCheck(ed_acctCd, "계정"))) return false;
  if (!(await scwin.f_HiddenCheck(ed_acctDeptCd, "귀속부서"))) return false;
  if (!(await scwin.f_HiddenCheck(ed_vatDeclarAcctDeptCd, "부가세관리부서"))) return false;
  if (!(await scwin.f_HiddenCheck(ed_mgntEmpNo, "사원번호"))) return false;
  if (!(await scwin.f_HiddenCheck(ed_mgntClntNo, "거래처"))) return false;

  // 법인카드나 개인카드 시  카드번호 정산처필수
  if (acb_evidClsCd.getValue() == "40" || acb_evidClsCd.getValue() == "50") {
    if (!(await $c.gus.cfValidate($p, [ed_cardNo]))) return false;
  }

  //증빙구분이 세금계산서일때 거래처 필수
  if (acb_evidClsCd.getValue() == "10") {
    if (!(await $c.gus.cfValidate($p, [ed_mgntEmpNo]))) return false;
  }

  // 미지급이나 법인카드시 정산처 필수,외상매입금도 추가 ( 2007.02.05 법인카드일때 정산처 필수 )
  if ((acb_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_NOPAY_COST || acb_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_AP || acb_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_COR_CARD) && ed_adjmClntNo.getValue().trim() == "") {
    $c.gus.cfEnableObjects($p, [ed_adjmClntNo]);
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "정산처"));
    if (!scwin.f_HiddenCheck(ed_adjmClntNo, "정산처")) return false;
    ed_adjmClntNo.focus();
    return false;
  }

  // 전도금일경우 전도금 집행부서는 필수
  if (acb_adjmClsCd.getValue() == ACConstants.ADJM_MTHDCD_ADVANCED && ed_adjmAcctDeptCd.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "정산방법이 전도금일 경우 귀속부서의 전도금 집행부서"));
    ed_acctDeptCd.focus();
    return false;
  }

  // if (!$c.gus.cfIsAfterDate(ed_mgntTermStDt.getValue().trim(), ed_mgntTermEndDt.getValue().trim())) {
  //     await $c.gus.cfAlertMsg(MSG_CM_ERR_039);
  //     ed_mgntTermStDt.focus();
  //     return false;
  // }

  //금액체크(금액=공급금액+부가세액)
  var amt = 0;
  amt = Number(Number(ed_spplyAmt.getValue().trim()) + Number(ed_vatAmt.getValue().trim()));

  //alert( Number(ed_spplyAmt.text.trim()));
  //alert(Number(ed_vatAmt.text.trim()));
  //alert(amt);
  if (Number(amt) > Number(ed_limitAmt.getValue())) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_048, "금액(공급금액+부가세액)", "한도액(" + ed_limitAmt.getValue() + ") "));
    ed_spplyAmt.focus();
    return false;
  }

  // 계정코드와 부서체크
  // 1^자산,2^부채,3^자본,4^수익,5^비용,6^원가
  // 비용구분 : 01^원가,02^판관비,03^원가+판관비
  if (ed_costClsCd.getValue() == "") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_WRN_018, "부서에 따른 비용구분코드", "비용구분코드를 등록"));
    ed_acctDeptCd.focus();
    return false;
  }
  if (ed_costClsCd.getValue().trim() == "01" && ed_acctClsCd.getValue().trim() != "6") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "원가부서", "원가계정"));
    ed_acctCd.focus();
    return false;
  }
  if (ed_costClsCd.getValue() == "02" && ed_acctClsCd.getValue().trim() != "5") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "판관비부서", "비용계정"));
    ed_acctCd.focus();
    return false;
  }
  if (ed_costClsCd.getValue() == "03" && ed_acctClsCd.getValue().trim() != "6" && ed_acctClsCd.getValue().trim() != "5") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "부서와 계정"));
    ed_acctCd.focus();
    return false;
  }

  // 차량 유지비 계정일 경우 업무용차량구분 필수
  if (ed_acctCd.getValue() == '4203600' || ed_acctCd.getValue() == '4203610' || ed_acctCd.getValue() == '4203620' || ed_acctCd.getValue() == '4203640' || ed_acctCd.getValue() == '4203660' || ed_acctCd.getValue() == '5002100' || ed_acctCd.getValue() == '5002110' || ed_acctCd.getValue() == '5002120' || ed_acctCd.getValue() == '5002140' || ed_acctCd.getValue() == '5002160') {
    if (acb_busiCarYn.getValue() == 0) {
      await $c.gus.cfAlertMsg($p, "계정코드가 차량유지비 계정일 경우 업무용차량여부를 'Y' 또는 'N'  또는  '개인차량' 을 선택하십시오.");
      acb_busiCarYn.focus();
      return false;
    }
  }

  //업무용차량여부 체크
  if (acb_busiCarYn.getValue() == 1 || acb_busiCarYn.getValue() == 3) {
    if (acb_expenseCd.getValue() == "") {
      await $c.gus.cfAlertMsg($p, "비용구분을 선택하여 주십시오.");
      acb_expenseCd.focus();
      return false;
    }
    if (ed_vehcleNm.getValue() == "") {
      await $c.gus.cfAlertMsg($p, "차량번호를 선택하여 주십시오.");
      //txt_vehcleNm.Focus();
      return false;
    }
  }
  return true;
};

// @@ ====== 미사용 ============================================================================ //

// 미사용 : f_AddRow (행추가 체크에서 호출하나 행추가 자체가 없음)
scwin.sbm_budgetRt_submitdone = async function (e) {
  if (ds_budget.getCellData(0, "cntlUnitClsCd") == "T") {
    if (scwin.rowCopyYn == 0) {
      scwin.f_Add();
    } else {
      ds_txncontents.ImportData(ds_txncontents.ExportData(ds_txncontents.getRowPosition(), 1, true));
    }
  } else {
    await $c.gus.cfAlertMsg($p, "예산잔액이 부족합니다. 예산잔액을 확인하시기 바랍니다.\n부서:" + ds_budget.getCellData(1, "acctDeptNm") + "\n계정:" + ds_budget.getCellData(1, "acctCd") + "\n남은예산금액:" + ds_budget.getCellData(1, "budgetRsltsAmt") + "\n사용요청금액:" + ds_budget.getCellData(1, "budgetRsltsSettAmt"));
  }
  scwin.rowCopyYn = 0;
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_Add = function () {
  if (ds_txncontents.getCellData(ds_txncontents.getTotalRow(), "rltSeq") != 0 && ds_txncontents.getCellData(ds_txncontents.getTotalRow(), "rltSeq") != null) {
    scwin.rltSeq = parseInt(ds_txncontents.getCellData(ds_txncontents.getTotalRow(), "rltSeq")) + 1;
  } else {
    scwin.rltSeq = scwin.rltSeq + 1;
  }
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableBtnOnly($p, [btn_bSave]);
  $c.gus.cfDisableObjects($p, [acb_deductClsCd, ed_vatAmt, ed_vatDeclarAcctDeptNm, ed_cardNo, ed_cardNm, ed_crn, ed_crnNm, udc_fromToCalendar1, acb_evidClsCd, ed_mgntDt, ed_mgntEmpNo, ed_mgntEmpNm, ed_vatCrn, ed_mgntClntNo, ed_mgntClntNm]);
  $c.gus.cfEnableObjects($p, [img_txnDt, img_acctCd, img_acctDeptCd, img_adjmClntNo, img_vatDeclarAcctDeptCd, btn_pu_evid, btn_pu_budget]);
  ds_txncontents.insertRow();
  scwin.f_EnableYn(ds_txncontents.getTotalRow());
  acb_adjmClsCd.setSelectedIndex(0);
  acb_crcCd.setValue("KRW");
  ed_vatYn.setValue(1);
  ed_rltSeq.setValue(scwin.rltSeq);
  if (scwin.vUpperAcctDeptCd == "00130") {
    $c.gus.cfDisableObjects($p, [ed_acctCd, ed_acctNm, ed_acctDeptCd, ed_acctDeptNm, img_acctCd, img_acctDeptCd]);
    $c.gus.cfEnableObjects($p, [ed_pchsItemCd, ed_branchCd, ed_pchsItemNm, ed_branchNm, img_pchsItemCd, img_branchCd]);
  } else {
    $c.gus.cfEnableObjects($p, [ed_acctCd, ed_acctNm, ed_acctDeptCd, ed_acctDeptNm, img_acctCd, img_acctDeptCd]);
    $c.gus.cfDisableObjects($p, [ed_pchsItemCd, ed_branchCd, ed_pchsItemNm, ed_branchNm, img_pchsItemCd, img_branchCd]);
  }
  scwin.f_SetGridFormat();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_slipDt',style:'',mandatory:'true',title:'작성일자',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'발행부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo3',codeId:'ed_slipAcctDeptCd',validTitle:'',nameId:'ed_slipAcctDeptNm',style:'',objTypeCode:'key',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_retrieveAcctDept',maxlengthName:'30',btnId:'btn_PopUp3',mandatoryCode:'true',objTypeName:'key','ev:onclickEvent':'scwin.udc_retrieveAcctDept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveAcctDept_onblurCodeEvent',refDataCollection:'ds_txn',code:'slipAcctDeptCd',name:'slipAcctDeptNm',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',disabled:'',escape:'false',id:'btn_pu_evid',style:'',type:'button','ev:onclick':'scwin.btn_pu_evid_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'증빙배부'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',disabled:'',escape:'false',id:'btn_pu_budget',style:'',type:'button','ev:onclick':'scwin.btn_pu_budget_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예산실적'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'증빙종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 150px;',allOption:'',id:'acb_evidClsCd',class:'',direction:'auto','ev:onchange':'scwin.acb_evidClsCd_onchange',displayMode:'value delim label','ev:onviewchange':'scwin.acb_evidClsCd_onchange',ref:'ds_txncontents.evidClsCd'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_evidClsCd'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 150px;',allOption:'false',id:'acb_deductClsCd',class:'',direction:'auto',validExp:'',displayMode:'value delim label',ref:'data:ds_txncontents.deductClsCd'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCrnInfo',codeId:'ed_crn',validTitle:'',nameId:'ed_crnNm',style:'',objTypeCode:'key',allowCharCode:'0-9',id:'udc_retrieveCrnInfo',mandatoryCode:'true',objTypeName:'key',btnId:'img_crn','ev:onclickEvent':'scwin.udc_retrieveCrnInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveCrnInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_retrieveCrnInfo_onblurNameEvent',refDataCollection:'ds_txncontents',code:'crn',name:'crnNm',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 150px;',allOption:'false',id:'acb_taxnCls',class:'',direction:'auto',displayMode:'value delim label',ref:'data:ds_txncontents.taxnCls'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'통화코드/환율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_crcCd',style:'width: 150px;',submenuSize:'fixed',title:'통화코드','ev:onchange':'scwin.acb_crcCd_onchange',displayMode:'value delim label',ref:'data:ds_txncontents.crcCd'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_exchRt',style:'width: 150px;',title:'외화금액',dataType:'number',ref:'data:ds_txncontents.exchRt',initValue:'0',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'외화금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_spplyAmtFcrc',style:'width: 200px;',title:'외화금액',validExp:'',dataType:'number',displayFormat:'#,###','ev:onblur':'scwin.ed_spplyAmtFcrc_onblur',ref:'data:ds_txncontents.spplyAmtFcrc',initValue:'0',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계산서일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_txnDt',style:'',displayFormat:'yyyy/MM/dd',mandatory:'true',title:'계산서일자',ref:'data:ds_txncontents.txnDt','ev:onblur':'scwin.ed_txnDt_onblur'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공급금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_spplyAmt',style:'width: 200px;',title:'공급금액',mandatory:'true',dataType:'number',displayFormat:'#,###',ref:'data:ds_txncontents.spplyAmt',initValue:'0',allowChar:'0-9',notAllowed:'0'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부가세액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_vatAmt',style:'width: 200px;',maxByteLength:'20',validExp:'',dataType:'number',displayFormat:'#,###',ref:'data:ds_txncontents.vatAmt',title:'부가세액',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'봉사료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_serviceCharge',style:'width: 200px;',maxByteLength:'13',dataType:'number',displayFormat:'#,###',ref:'data:ds_txncontents.serviceCharge',initValue:'0',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'branchTr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지점',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_branchCd',validTitle:'지점',nameId:'ed_branchNm',style:'',objTypeCode:'key',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_branchCd2',maxlengthName:'30',mandatoryCode:'true',objTypeName:'key','ev:onclickEvent':'scwin.udc_branchCd2_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_branchCd2_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_branchCd2_onblurCodeEvent',btnId:'img_branchCd',refDataCollection:'ds_txncontents',code:'branchCd',name:'branchNm',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입항목코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveRcSelpchItemCd',codeId:'ed_pchsItemCd',validTitle:'',nameId:'ed_pchsItemNm',style:'',objTypeCode:'key',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_branchCd',maxlengthName:'30',mandatoryCode:'true',objTypeName:'key','ev:onclickEvent':'scwin.udc_branchCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_branchCd_onblurNameEvent',btnId:'img_pchsItemCd',refDataCollection:'ds_txncontents',code:'pchsItemCd',name:'pchsItemNm',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo8',codeId:'ed_acctDeptCd',validTitle:'귀속부서',nameId:'ed_acctDeptNm',style:'',objTypeCode:'key',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_retrieveCrnInfo2',maxlengthName:'30',mandatoryCode:'true',objTypeName:'key','ev:onclickEvent':'scwin.udc_retrieveCrnInfo2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveCrnInfo2_onblurCodeEvent',refDataCollection:'ds_txncontents',code:'acctDeptCd',name:'acctDeptNm',btnId:'img_acctDeptCd',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부가세관리부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveVatDeclarAcctDeptCd',codeId:'ed_vatDeclarAcctDeptCd',validTitle:'부가세관리부서',nameId:'ed_vatDeclarAcctDeptNm',style:'',objTypeCode:'key',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_retrieveVatDeclar',maxlengthName:'30',mandatoryCode:'true',objTypeName:'key','ev:onclickEvent':'scwin.udc_retrieveVatDeclar_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveVatDeclar_onblurCodeEvent',btnId:'img_vatDeclarAcctDeptCd',code:'vatDeclarAcctDeptCd',name:'vatDeclarAcctDeptNm',refDataCollection:'ds_txncontents',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_vatCrn',class:'',ref:'data:ds_txncontents.vatCrn'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'카드번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCardInfo',codeId:'ed_cardNo',validTitle:'카드번호',nameId:'ed_cardNm',style:'',objTypeCode:'key',allowCharCode:'0-9',id:'udc_retrieveVat',maxlengthName:'30',mandatoryCode:'true',objTypeName:'key',btnId:'img_cardNo','ev:onclickEvent':'scwin.udc_retrieveVat_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveVat_onblurCodeEvent',refDataCollection:'ds_txncontents',name:'cardNm',code:'cardNo',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',codeDisplayFormat:'####-####-####-####',codeWidth:'130'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveExpenseAcctCdInfo2',codeId:'ed_acctCd',validTitle:'계정코드',nameId:'ed_acctNm',style:'',objTypeCode:'key',allowCharCode:'0-9',id:'udc_retrieveExpense',maxlengthName:'30',mandatoryCode:'true',objTypeName:'key','ev:onclickEvent':'scwin.udc_retrieveExpense_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveExpense_onblurCodeEvent',btnId:'img_acctCd',refDataCollection:'ds_txncontents',code:'acctCd',name:'acctNm',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList',codeId:'ed_mgntClntNo',validTitle:'거래처',nameId:'ed_mgntClntNm',style:'',objTypeCode:'key',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_retrieveClntList',maxlengthName:'30',mandatoryCode:'true',objTypeName:'key','ev:onclickEvent':'scwin.udc_retrieveClntList_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveClntList_onblurCodeEvent',btnId:'img_mgntClntNo',refDataCollection:'ds_txncontents',code:'mgntClntNo',name:'mgntClntNm',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사원번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcEmpInfo',codeId:'ed_mgntEmpNo',validTitle:'사원번호',nameId:'ed_mgntEmpNm',style:'',objTypeCode:'key',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_retrieveAcEmpInfo',maxlengthName:'30',mandatoryCode:'true',objTypeName:'key','ev:onclickEvent':'scwin.udc_retrieveAcEmpInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveAcEmpInfo_onblurCodeEvent',btnId:'img_mgntEmpNo',refDataCollection:'ds_txncontents',code:'mgntEmpNo',name:'mgntEmpNm',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'경비기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'mgntTermStDt',refDataMap:'ds_txncontents',style:'',id:'udc_fromToCalendar1',refEdDt:'mgntTermEndDt',edFromId:'ed_mgntTermStDt',edToId:'ed_mgntTermEndDt',mandatoryTo:'true',mandatoryFrom:'true',titleTo:'경비기간',titleFrom:'경비기간'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_mgntDt',style:'',displayFormat:'yyyy/MM/dd',ref:'data:ds_txncontents.mgntDt',title:'관리일자',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정산방법',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_adjmClsCd',style:'width:200px;',submenuSize:'fixed',displayMode:'value delim label'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정산처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList',codeId:'ed_adjmClntNo',validTitle:'',nameId:'ed_adjmClntNm',style:'',objTypeCode:'key',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_retrieveClntList3',maxlengthName:'30',mandatoryCode:'true',objTypeName:'key',btnId:'img_adjmClntNo','ev:onclickEvent':'scwin.udc_retrieveClntList3_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveClntList3_onblurCodeEvent',code:'adjmClntNo',name:'adjmClntNm',validExpName:'정산처',validExpCode:'정산처',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N',refDataCollection:'ds_txncontents'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_summary',style:'',mandatory:'true',title:'적요',maxlength:'100',ref:'data:ds_txncontents.summary'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상대계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveExpenseAcctCdInfo',codeId:'ed_opntAcctCd',validTitle:'',nameId:'ed_opntAcctNm',style:'',objTypeCode:'key',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_retrieveExpense2',maxlengthName:'30',mandatoryCode:'true',objTypeName:'key',btnId:'img_opntAcctCd','ev:onclickEvent':'scwin.udc_retrieveExpense2_onclickEvent',refDataCollection:'ds_txncontents',code:'opntAcctCd',name:'opntAcctNm',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량별실적',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{id:'ed_pchsAmtSum',style:'width:200px;',ref:'data:ds_txncontents.pchsAmtSum'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'img_opntAcctCd',style:'display: none;',type:'button','ev:onclick':'scwin.img_opntAcctCd_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList',codeId:'ed_reqClntNo',validTitle:'',nameId:'ed_reqClntNm',style:'',objTypeCode:'key',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_retrieveClntList4',maxlengthName:'30',mandatoryCode:'true',objTypeName:'key','ev:onclickEvent':'scwin.udc_retrieveClntList4_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveClntList4_onblurCodeEvent',btnId:'img_reqClntNo',refDataCollection:'ds_txncontents',code:'reqClntNo',name:'reqClntNm',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업무용차량여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 150px;',allOption:'',id:'acb_busiCarYn',class:'',direction:'auto',ref:'data:ds_txncontents.busiCarYn','ev:onchange':'scwin.acb_busiCarYn_onchange',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'개인차량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'비용구분 ',class:''}},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 150px;',allOption:'',id:'acb_expenseCd',class:'',direction:'auto',displayMode:'value delim label',chooseOptionLabel:' ',ref:'data:ds_txncontents.expenseCd',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_vehcleNo',validTitle:'',nameId:'ed_vehcleNm',style:'',objTypeCode:'key',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_retrieveWorkVehclInfo',maxlengthName:'30',mandatoryCode:'true',objTypeName:'key',btnId:'img_vehcleNo','ev:onclickEvent':'scwin.udc_retrieveWorkVehclInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveWorkVehclInfo_onblurCodeEvent',refDataCollection:'ds_txncontents',code:'vehcleNo',name:'vehcleNm',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_txncontents',gridUpYn:'N',gridDownYn:'N',id:'udc_topBtn',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox gvwfix'},E:[{T:1,N:'w2:gridView',A:{focusMode:'row',dataList:'data:ds_txncontents',style:'',id:'gr_txncontents',visibleRowNum:'6',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',rowNumVisible:'true',autoFit:'allColumn',validExp:'evidClsCd:증빙종류:yes,txnDt:계산서일자:yes,spplyAmt:금액:yes:notAllowed=0,acctCd:계정:yes,acctDeptCd:귀속부서:yes,vatDeclarAcctDeptCd:부가세관리부서:yes,summary:적요:yes',dataName:'경비전표',mandatory:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column12',value:'증빙',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'154',inputType:'text',id:'column11',value:'계산서일자',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column30',value:'매입항목명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'지점명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column18',value:'공급가액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'부가세액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'할인금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'봉사료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'적요',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'',id:'evidClsNm',blockSelect:'false',displayMode:'label',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_evidClsCd'},E:[{T:1,N:'w2:label',A:{ref:'col2'}},{T:1,N:'w2:value',A:{ref:'col1'}}]}]}]},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'154',inputType:'text',id:'txnDt',blockSelect:'false',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'pchsItemNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'acctCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'branchNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'spplyAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'vatAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',style:'',id:'dcAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'serviceCharge',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',readOnly:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',readOnly:'true',mandatory:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'154',inputType:'text',style:'',id:'column13',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column32',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column20',value:'0',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'sum(\'spplyAmt\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column41',value:'0',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'sum(\'vatAmt\')'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'expression',style:'',id:'column38',value:'0',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'sum(\'dcAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column44',value:'0',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'sum(\'serviceCharge\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left',style:'display: none;'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Division',style:'',type:'button','ev:onclick':'scwin.btn_Division_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발행'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'hiddenGroup',style:'display: none;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_rltSeq',style:'',ref:'data:ds_txncontents.rltSeq'}},{T:1,N:'xf:input',A:{class:'',id:'ed_vatYn',style:'',ref:'data:ds_txncontents.vatYn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_cardNoYn',style:'',ref:'data:ds_txncontents.cardNoYn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_frchNoYn',style:'',ref:'data:ds_txncontents.frchNoYn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_deductClsYn',style:'',ref:'data:ds_txncontents.deductClsYn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_limitAmt',style:'',ref:'data:ds_txncontents.limitAmt'}},{T:1,N:'xf:input',A:{class:'',id:'ed_frchCrn',style:'',ref:'data:ds_txncontents.frchCrn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_frchNm',style:'',ref:'data:ds_txncontents.frchNm'}},{T:1,N:'xf:input',A:{class:'',id:'ed_termMgntYn',style:'',ref:'data:ds_txncontents.termMgntYn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_clntMgntYn',style:'',ref:'data:ds_txncontents.clntMgntYn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_dtMgntYn',style:'',ref:'data:ds_txncontents.dtMgntYn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_bizMgntYn',style:'',ref:'data:ds_txncontents.bizMgntYn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_amt',style:'',ref:'data:ds_txncontents.amt'}},{T:1,N:'xf:input',A:{class:'',id:'ed_empMgntYn',style:'',ref:'data:ds_txncontents.empMgntYn'}},{T:1,N:'xf:input',A:{class:'',id:'ed_adjmAcctDeptCd',style:'',ref:'data:ds_txncontents.adjmAcctDeptCd'}},{T:1,N:'xf:input',A:{class:'',id:'ed_costClsCd',style:'',ref:'data:ds_txncontents.costClsCd'}},{T:1,N:'xf:input',A:{class:'',id:'ed_acctClsCd',style:'',ref:'data:ds_txncontents.acctClsCd'}},{T:1,N:'xf:input',A:{class:'',id:'ed_bizDomCd',style:'',ref:'data:ds_txncontents.bizDomCd'}},{T:1,N:'xf:input',A:{class:'',id:'numStr_hidden',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_evidClsNm',style:'',ref:'data:ds_txncontents.evidClsNm'}}]}]}]}]}]})