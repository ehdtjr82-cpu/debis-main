/*amd /ui/ac/fm/paymgnt/paymgnt/fm_301_02_03b.xml 86064 6c389418b1b116baa0be35954214760094d97c8dfe8377ee4077b7057f6ce18e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'payStsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payMthdCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDept',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outbrSlipNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvReqNo',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'name11',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_division',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_division_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'payNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befPayStsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnEmpNo',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqExchRt',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addupDivsCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refPayNo',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firmBankYn',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtDt',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckAmt',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rate',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueBankCd',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNo',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refSlipNo',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtClntNo',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlClsCd',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffYn',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNo',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNm',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitCnclDt',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustAmt',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'faultRate',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cashAmt',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftAmt',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalCloseYm',name:'name66',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDocOvrDd',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctDeptCd',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctCd',name:'name70',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClntNo',name:'name71',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'name72',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'name73',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reserRsn',name:'name74',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclRsn',name:'name75',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNo',name:'name76',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'name77',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'name78',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitDt',name:'name79',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitEmpNo',name:'name80',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectDt',name:'name81',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectEmpNo',name:'name82',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reserApprvReqNo',name:'name83',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reserApprvStsCd',name:'name84',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'name85',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'name86',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveDate',name:'name87',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCollectionNum',name:'name88',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'name89',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt2',name:'name90',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId2',name:'name91',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'name92',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm2',name:'name93',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name94',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count1',name:'name95',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count2',name:'name96',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count3',name:'name97',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count4',name:'name98',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count5',name:'name99',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count6',name:'name100',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count7',name:'name101',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count8',name:'name102',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count9',name:'name103',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count10',name:'name104',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count11',name:'name105',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count12',name:'name106',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count13',name:'name107',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count14',name:'name108',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interDataYn',name:'name109',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interPayDt',name:'name110',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueSlipNo',name:'name111',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exceptSlipYn',name:'name112',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoSlipYn',name:'name113',dataType:'text'}},{T:1,N:'w2:column',A:{id:'companyCardYn',name:'name114',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxInvoiceYn',name:'name115',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxInvoiceNormalYn',name:'name116',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxInvoiceEtcYn',name:'name117',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billYn',name:'name118',dataType:'text'}},{T:1,N:'w2:column',A:{id:'otherEvidYn',name:'name119',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paperTaxInvoiceYn',name:'name120',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invoiceYn',name:'name121',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paperBillYn',name:'name122',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroRegYn',name:'name123',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receptYn',name:'name124',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalEvidCount',name:'name125',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'name126',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errCont',name:'name127',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errYn',name:'name128',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchStDate',name:'name129',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchEndDate',name:'name130',dataType:'text'}},{T:1,N:'w2:column',A:{id:'beClntNm',name:'name131',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'name132',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befPaySlipNo',name:'name133',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag',name:'name134',dataType:'text'}},{T:1,N:'w2:column',A:{id:'originSlipKndCd',name:'name135',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDd',name:'name136',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'name137',dataType:'text'}},{T:1,N:'w2:column',A:{id:'writeDt',name:'name138',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payment',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'payNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befPayStsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnEmpNo',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqExchRt',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addupDivsCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refPayNo',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firmBankYn',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtDt',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckAmt',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rate',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueBankCd',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNo',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refSlipNo',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtClntNo',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlClsCd',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffYn',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNo',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNm',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitCnclDt',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustAmt',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'faultRate',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cashAmt',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftAmt',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalCloseYm',name:'name66',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDocOvrDd',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctDeptCd',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctCd',name:'name70',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClntNo',name:'name71',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'name72',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'name73',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reserRsn',name:'name74',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclRsn',name:'name75',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNo',name:'name76',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'name77',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'name78',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitDt',name:'name79',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitEmpNo',name:'name80',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectDt',name:'name81',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectEmpNo',name:'name82',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reserApprvReqNo',name:'name83',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reserApprvStsCd',name:'name84',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'name85',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'name86',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveDate',name:'name87',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCollectionNum',name:'name88',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'name89',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt2',name:'name90',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId2',name:'name91',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'name92',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm2',name:'name93',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name94',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count1',name:'name95',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count2',name:'name96',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count3',name:'name97',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count4',name:'name98',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count5',name:'name99',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count6',name:'name100',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count7',name:'name101',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count8',name:'name102',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count9',name:'name103',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count10',name:'name104',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count11',name:'name105',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count12',name:'name106',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count13',name:'name107',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count14',name:'name108',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interDataYn',name:'name109',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interPayDt',name:'name110',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueSlipNo',name:'name111',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exceptSlipYn',name:'name112',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoSlipYn',name:'name113',dataType:'text'}},{T:1,N:'w2:column',A:{id:'companyCardYn',name:'name114',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxInvoiceYn',name:'name115',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxInvoiceNormalYn',name:'name116',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxInvoiceEtcYn',name:'name117',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billYn',name:'name118',dataType:'text'}},{T:1,N:'w2:column',A:{id:'otherEvidYn',name:'name119',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paperTaxInvoiceYn',name:'name120',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invoiceYn',name:'name121',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paperBillYn',name:'name122',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroRegYn',name:'name123',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receptYn',name:'name124',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalEvidCount',name:'name125',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'name126',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errCont',name:'name127',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errYn',name:'name128',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchStDate',name:'name129',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchEndDate',name:'name130',dataType:'text'}},{T:1,N:'w2:column',A:{id:'beClntNm',name:'name131',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'name132',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befPaySlipNo',name:'name133',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag',name:'name134',dataType:'text'}},{T:1,N:'w2:column',A:{id:'originSlipKndCd',name:'name135',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDd',name:'name136',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'name137',dataType:'text'}},{T:1,N:'w2:column',A:{id:'writeDt',name:'name138',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'refPayNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqAmt',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payMthdCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'70'}]},{T:1,N:'name',E:[{T:4,cdata:'급여이체'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'80'}]},{T:1,N:'name',E:[{T:4,cdata:'상계처리'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'86'}]},{T:1,N:'name',E:[{T:4,cdata:'받을어음'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'90'}]},{T:1,N:'name',E:[{T:4,cdata:'자동이체'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'20'}]},{T:1,N:'name',E:[{T:4,cdata:'경비이체'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'30'}]},{T:1,N:'name',E:[{T:4,cdata:'전자결제-현금'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'40'}]},{T:1,N:'name',E:[{T:4,cdata:'전자어음'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'50'}]},{T:1,N:'name',E:[{T:4,cdata:'실물어음'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'60'}]},{T:1,N:'name',E:[{T:4,cdata:'당좌수표'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'95'}]},{T:1,N:'name',E:[{T:4,cdata:'지로납부'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrievePayment',action:'/ac.fm.paymgnt.paymgnt.RetrievePaymentContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_payment","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_payment","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrievePayment_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDetail',action:'/ac.fm.paymgnt.paymgnt.RetrievePaymentContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_division","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_division","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieveDetail_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_saveDivision',action:'/ac.fm.paymgnt.paymgnt.ProcessPaymentDivisionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_payment","key":"IN_DS1"},{"action":"modified","id":"ds_division","key":"IN_DS2"}]',target:'',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_saveDivision_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.sysAdminYn = scwin.login.sysAdminYn;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.isSubCompany = false;
scwin.vEmpNo = $c.data.getMemInfo($p, "empNo");

// 상태코드 상수
scwin.PREPARESTS = "00"; // 준비
scwin.RESERVESTS = "10"; // 보류
scwin.WAITSTS = "20"; // 대기
scwin.DECIDESTS = "30"; // 결정
scwin.DECISIONSTS = "40"; // 확정
scwin.COMPLETE = "50"; // 완료

scwin.DIVISIONCD = "S"; // 분할
scwin.sCrcCdFlag = "0";
scwin.g_sCurrDate = WebSquare.date.getCurrentServerDate();
scwin.isSubCompany = false;
scwin.txtCoClsCd = "";
scwin.param = "";
scwin.isFirst = true;
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FM017",
    compID: "gr_division:payStsCd"
  }
  // { grpCd: "FM018", compID: "gr_paymgnt:payMthdCd"},
  ];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = async function () {
  // f_HeaderCreate();
  // f_HeaderCreate2();

  scwin.f_setCompanyInfo();
  ed_reqStartDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_reqEndDt.setValue(scwin.g_sCurrDate);
  $c.gus.cfDisableAllBtn($p);
  acb_payMthdCd.setSelectedIndex(0);
  $c.gus.cfDisableObjects($p, [udc_downBtn]);
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function (e) {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  scwin.pWinClose = pWinCloseTF;
  var rtnList = udc_companyInfo.cfCommonPopUp(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_coCd_callBackFunc = function (rtnList) {
  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (ed_coCd.options.hidVal != rtnList[0]) scwin.f_initObj();
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    ed_coCd.options.hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분  

    $c.gus.cfInitObjects($p, [ed_reqAcctDeptCd, ed_reqAcctDeptNm]); // 조회조건 - 귀속부서 
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isFirst) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
    scwin.isFirst = false;
  }
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_reqAcctDeptCd, ed_reqAcctDeptNm]); //  귀속부서      
  $c.gus.cfInitObjects($p, [ed_clntNo, ed_clntNm]); //거래처  

  if (scwin.param != "1") {
    ds_payment.removeAll();
  }
  scwin.param = "";
};

//-------------------------------------------------------------------------
// 분할
//-------------------------------------------------------------------------
scwin.f_Division = async function () {
  var bRet = false;
  var pos_groupCode = 0;

  // bRet = await scwin.f_CompareWithReqAmt();   // 금액비교

  if ((await scwin.f_CompareWithReqAmt()) == false) {
    return;
  }

  /////////////////////////////////////////////////////////////////////////
  ///////// 지급내역의 요청금액, 분할내역의 요청 금액이 같은지 아닌지 체크 ///////
  /////////////////////////////////////////////////////////////////////////

  var fisrtSum = ds_payment.getCellData(ds_payment.getRowPosition(), "reqAmt");
  var secondSum = 0;
  var reqExchRt = 0;
  var checkReqAmt1 = 0;
  var checkReqAmt2 = 0;
  var checkReqAmt3 = 0;
  var checkMinus10 = 0;
  var checkPlus10 = 0;
  var rowPostion = 0;
  if (!$c.gus.cfIsNull($p, ds_payment.getRowPosition())) {
    rowPostion = ds_payment.getRowPosition();
  }

  /*
  if ( ds_division.NameValue(ds_division.CountRow,"payCrcCd") == "<%=ACConstants.JPY%>" )
  { // 통화코드가 엔화일경우	
      ds_division.NameValue(ds_division.CountRow,"reqAmt") = Math.round( ds_division.NameValue(ds_division.CountRow,"payAmtFcrc") * ds_division.NameValue(ds_division.CountRow,"reqExchRt") / 100);
  } 
  else 
  {
          ds_division.NameValue(ds_division.CountRow,"reqAmt") = Math.floor( ds_division.NameValue(ds_division.CountRow,"payAmtFcrc") * ds_division.NameValue(ds_division.CountRow,"reqExchRt"));
  }
  */

  if (ds_division.getCellData(ds_division.getTotalRow() - 1, "payCrcCd") != ACConstants.KRW) {
    for (j = 0; j < ds_division.getTotalRow(); j++) {
      reqExchRt = Number(ds_division.getCellData(j, "reqExchRt")); // 환율
      checkReqAmt1 = Number(ds_division.getCellData(j, "payAmtFcrc")); // 외화금액
      checkReqAmt2 = Number(ds_division.getCellData(j, "reqAmt")); // 요청금액

      if (ds_division.getCellData(ds_division.getTotalRow() - 1, "payCrcCd") == ACConstants.JPY) {
        checkReqAmt3 = Math.round(checkReqAmt1 * reqExchRt / 100);
      } else {
        checkReqAmt3 = Math.round(checkReqAmt1 * reqExchRt);
      }
      checkMinus10 = checkReqAmt3 - 100;
      checkPlus10 = checkReqAmt3 + 100;
      var num_str1 = checkReqAmt2.toString();
      var num_str2 = checkPlus10.toString();
      var num_str3 = checkMinus10.toString();
      var result1 = '';
      var result2 = '';
      var result3 = '';
      for (var i = 0; i < num_str1.length; i++) {
        var tmp1 = num_str1.length - (i + 1);
        if (i % 3 == 0 && i != 0) {
          result1 = ',' + result1;
        }
        result1 = num_str1.charAt(tmp1) + result1;
      }
      for (var i = 0; i < num_str2.length; i++) {
        var tmp2 = num_str2.length - (i + 1);
        if (i % 3 == 0 && i != 0) {
          result2 = ',' + result2;
        }
        result2 = num_str2.charAt(tmp2) + result2;
      }
      for (var i = 0; i < num_str3.length; i++) {
        var tmp3 = num_str3.length - (i + 1);
        if (i % 3 == 0 && i != 0) {
          result3 = ',' + result3;
        }
        result3 = num_str3.charAt(tmp3) + result3;
      }
      if (checkReqAmt2 > checkPlus10 || checkReqAmt2 < checkMinus10) {
        await $c.win.alert($p, "분할내역의 " + j + 1 + "번째 행을 확인 하세요!!\n\n" + "환율*요청금액(외화) 값이 입력 요청금액 +,- 100원 이내 여야 합니다." + "\n입력 요청금액 : " + result1 + "원" + "\n요청금액 +100원 : " + result2 + "원" + "\n요청금액 -100원 : " + result3 + "원");
        return;
      }
    }
  }
  for (i = 0; i < ds_division.getTotalRow(); i++) {
    secondSum = secondSum + Number(ds_division.getCellData(i, "reqAmt"));
    //alert(ds_division.NameValue(i,"reqAmt"));
  }
  var num_str4 = fisrtSum.toString();
  var num_str5 = secondSum.toString();
  var result4 = '';
  var result5 = '';
  for (var i = 0; i < num_str4.length; i++) {
    var tmp4 = num_str4.length - (i + 1);
    if (i % 3 == 0 && i != 0) {
      result4 = ',' + result4;
    }
    result4 = num_str4.charAt(tmp4) + result4;
  }
  for (var i = 0; i < num_str5.length; i++) {
    var tmp5 = num_str5.length - (i + 1);
    if (i % 3 == 0 && i != 0) {
      result5 = ',' + result5;
    }
    result5 = num_str5.charAt(tmp5) + result5;
  }
  if (fisrtSum != secondSum) {
    await $c.win.alert($p, "지급내역의 요청금액과 분할내역의 요청 금액이 같지 않습니다.\n\n지급내역의 요청금액 : " + result4 + "원\n분할내역의 요청금액 : " + result5 + "원");
    return;
  }

  /////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////

  // if (bRet == false) {
  //     return false
  // }
  if (await $c.gus.cfValidate($p, [gr_division])) {
    if ((await $c.win.confirm($p, "분할처리하시겠습니까?")) == false) {
      return false;
    }
  } else {
    return false;
  }
  if (ds_payment.getTotalRow() <= 0 || ds_division.getTotalRow() <= 0) {
    await $c.win.alert($p, "분할할 자료가 없습니다.");
    return false;
  }
  ds_payment.setCellData(rowPostion, "addupDivsCd", scwin.DIVISIONCD); // 분할코드 세팅 

  // tr_saveDivision.KeyValue = "Servlet(I:IN_DS1=ds_payment,I:IN_DS2=ds_division)"
  // tr_saveDivision.Action = "/ac.fm.paymgnt.paymgnt.ProcessPaymentDivisionCMD.do";
  // tr_saveDivision.post();
  sbm_saveDivision.action = "/ac.fm.paymgnt.paymgnt.ProcessPaymentDivisionCMD.do";
  $c.sbm.execute($p, sbm_saveDivision);
  pos_groupCode = rowPostion;
  $c.gus.cfGoPrevPosition($p, ds_payment, pos_groupCode);
};

//-------------------------------------------------------------------------
// 분할취소
//-------------------------------------------------------------------------
scwin.f_Cancel = async function () {
  var i = 0;
  var pos_groupCode = 0;
  var rowPostion = 0;
  if (!$c.gus.cfIsNull($p, ds_payment.getRowPosition())) {
    rowPostion = ds_payment.getRowPosition();
  }
  if (ds_payment.getTotalRow() <= 0 || ds_division.getTotalRow() <= 0) {
    await $c.win.alert($p, "분할취소할 자료가 없습니다.");
    return false;
  }
  for (i = 0; i < ds_division.getTotalRow(); i++) {
    if (ds_division.getCellData(i, "payStsCd") != scwin.WAITSTS) {
      await $c.gus.cfAlertMsg($p, "지급상태가 대기일경우만 취소할 수 있습니다");
      return false;
    }
    if (!(ds_division.getCellData(i, "addupDivsCd") == null || ds_division.getCellData(i, "addupDivsCd") == "")) {
      await $c.gus.cfAlertMsg($p, "지급번호 (" + ds_division.NameValue(i, "payNo") + ") 의 지급내역을 먼저 분할취소하십시오.");
      return false;
    }
  }
  if (await $c.gus.cfValidate($p, [gr_division])) {
    if ((await $c.win.alert($p, "분할취소하시겠습니까?")) == false) {
      return false;
    }
    for (i = 0; i < ds_division.getTotalRow(); i++) {
      ds_division.setCellData(i, "delYn", 1);
    }
  } else {
    return false;
  }
  ds_payment.setCellData(rowPostion, "addupDivsCd", ""); // 분할코드 세팅 

  // tr_saveDivision.KeyValue = "Servlet(I:IN_DS1=ds_payment,I:IN_DS2=ds_division)"
  // tr_saveDivision.Action = "/ac.fm.paymgnt.paymgnt.DeletePaymentDivisionCMD.do";
  // tr_saveDivision.post();

  sbm_saveDivision.action = "/ac.fm.paymgnt.paymgnt.DeletePaymentDivisionCMD.do";
  $c.sbm.execute($p, sbm_saveDivision);
  pos_groupCode = rowPostion;
  // $c.gus.cfGoPrevPosition(ds_payment, pos_groupCode);
};

//-------------------------------------------------------------------------
// 행추가함수
//-------------------------------------------------------------------------
scwin.f_RowAdd = async function () {
  var dReqAmt = 0;
  var dPayAmt = 0;
  var rowPostion = 0;
  if (!$c.gus.cfIsNull($p, ds_payment.getRowPosition())) {
    rowPostion = ds_payment.getRowPosition();
  }
  if (ds_division.getTotalRow() > 0) {
    var sUseYn = ds_division.getCellData(0, "useYn") + "";
    if (sUseYn == "0") {
      await $c.win.alert($p, "이미 분할된 내역입니다");
      return false;
    } else {
      ds_division.setJSON([ds_division.getRowJSON(0)], true);
      // ds_division.ImportData(ds_division.ExportData(1, 1, true));
      if (ds_division.getCellData(ds_division.getTotalRow() - 1, "payCrcCd") == ACConstants.KRW) {
        // 통화코드가 원화일경우	
        ds_division.setCellData(ds_division.getTotalRow() - 1, "reqAmt", 0);
        if (ds_division.getTotalRow() >= 2) {
          dPayAmt = Number(ds_payment.getCellData(rowPostion, "reqAmt"));
          for (var i = 0; i < ds_division.getTotalRow() - 1; i++) {
            dReqAmt = dReqAmt + Number(ds_division.getCellData(i, "reqAmt"));
          }
          if (dPayAmt - dReqAmt < 0) {
            await $c.win.alert($p, "입력하신 금액이 요청금액을 초과하였습니다.");
            ds_division.setCellData(ds_division.getTotalRow() - 1, "reqAmt", 0);
            return false;
          }
          ds_division.setCellData(ds_division.getTotalRow() - 1, "reqAmt", dPayAmt - dReqAmt);
        }
      } else {
        ds_division.setCellData(ds_division.getTotalRow() - 1, "payAmtFcrc", 0);
        if (ds_division.getTotalRow() >= 2) {
          dPayAmt = Number(ds_payment.getCellData(rowPostion, "payAmtFcrc"));
          for (var i = 0; i < ds_division.getTotalRow() - 1; i++) {
            dReqAmt = dReqAmt + Number(ds_division.getCellData(i, "payAmtFcrc"));
          }
          if (dPayAmt - dReqAmt < 0) {
            await $c.win.alert($p, "입력하신 금액이 요청금액을 초과하였습니다.");
            ds_division.setCellData(ds_division.getTotalRow() - 1, "payAmtFcrc", 0);
            return false;
          }
          ds_division.setCellData(ds_division.getTotalRow() - 1, "payAmtFcrc", dPayAmt - dReqAmt);
          if (ds_division.getCellData(ds_division.getTotalRow() - 1, "payCrcCd") == ACConstants.JPY) {
            // 통화코드가 엔화일경우	
            ds_division.setCellData(ds_division.getTotalRow() - 1, "reqAmt", Math.round(Number(ds_division.getCellData(ds_division.getTotalRow(), "payAmtFcrc")) * Number(ds_division.getCellData(ds_division.CountRow, "reqExchRt")) / 100));
          } else {
            ds_division.setCellData(ds_division.getTotalRow() - 1, "reqAmt", Math.floor(Number(ds_division.getCellData(ds_division.getTotalRow(), "payAmtFcrc")) * Number(ds_division.getCellData(ds_division.CountRow, "reqExchRt"))));
          }
        }
      }
    }
  } else {
    if (ds_payment.getTotalRow() <= 0) {
      await $c.win.alert($p, "분할할 내역이 존재하지 않습니다.");
      return false;
    }
    ds_division.setJSON([ds_payment.getRowJSON(rowPostion)], true);
    ds_division.setCellData(ds_division.getTotalRow() - 1, "refPayNo", ds_payment.getCellData(rowPostion, "payNo")); // 원지급내역의 지급번호 참조지급번호에 세팅
  }
  if (ds_payment.getCellData(rowPostion, "payCrcCd") != ACConstants.KRW) {
    if (ds_division.getTotalRow() == 1) {
      //alert("ds_division.CountRow >> " + ds_division.CountRow);
      checkExchRt = ds_division.getCellData(ds_division.getRowPosition(), "reqExchRt");
      //ds_payment.NameValue(ds_payment.RowPosition,"reqExchRt")) = checkExchRt;
      //alert(checkExchRt);
    }
  }
};

//-------------------------------------------------------------------------
// 금액비교함수
//-------------------------------------------------------------------------
scwin.f_CompareWithReqAmt = async function () {
  var sumReqAmt = 0;
  var reqAmt = 0;
  var rowPostion = 0;
  if (!$c.gus.cfIsNull($p, ds_payment.getRowPosition())) {
    rowPostion = ds_payment.getRowPosition();
  }
  if (ds_division.getTotalRow() == 1) {
    await $c.win.alert($p, "로우수가 한개일경우는 분할할 수 없습니다.");
    return false;
  }
  if (ds_division.getCellData(ds_division.getTotalRow() - 1, "payCrcCd") == ACConstants.KRW) {
    // 통화코드가 원화일경우	
    sumReqAmt = gr_division.getFooterData("sumReq");
    reqAmt = ds_payment.getCellData(rowPostion, "reqAmt");
    if (sumReqAmt != reqAmt) {
      await $c.win.alert($p, "원화총금액과 일치하지않습니다");
      ds_division.setCellData(ds_division.getRowPosition(), "reqAmt", 0);
      return false;
    }
    for (i = 0; i < ds_division.getTotalRow(); i++) {
      if (ds_division.getCellData(i, "reqAmt") == 0) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, Array("요청금액", "0"));
        return false;
      }
    }
    return true;
  } else {
    // 통화코드가 외화일경우
    sumReqAmt = gr_division.getFooterData("sumPayAmtFcrc");
    reqAmt = ds_payment.getCellData(rowPostion, "payAmtFcrc");
    if (sumReqAmt != reqAmt) {
      await $c.win.alert($p, "원화총금액과 일치하지않습니다");
      ds_division.setCellData(ds_division.getRowPosition(), "payAmtFcrc", 0);
      return false;
    }
    for (i = 0; i < ds_division.getTotalRow(); i++) {
      if (ds_division.getCellData(i, "payAmtFcrc") == 0) {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_057, Array("요청금액", "0"));
        return false;
      }
    }
    return true;
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (select_code, txtCode, txtName, sFlag) {
  var rtnList = null;
  var sCmdName = "";
  var param = '';
  code = txtCode.getValue();
  Name = txtName.getValue();
  if (select_code == '1' || select_code == '2') {
    //자회사 회계시스템 추가사항 - 부서,거래처 선택시 회사코드 필수( 2016.09.20)
    if (!(await $c.gus.cfValidate($p, [ed_coCd]))) {
      return;
    }
  }
  switch (select_code) {
    // 관리부서 PopUp 호출
    case '1':
      sCmdName = "retrieveAcctDeptCdInfo6";
      param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd; //자회사 회계시스템 추가사항
      rtnList = udc_retrieveAcctDept.cfCommonPopUp(scwin.udc_retrieveAcctDept_callBack, code, Name, sFlag, null, null, null, null, param, null, null, null, null, null, null, null, null); // 부서
      break;
    // 거래처 PopUp 호출
    case '2':
      sCmdName = "retrieveClntList";
      param = ",,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항
      rtnList = udc_retrieveClntList.cfCommonPopUp(scwin.udc_retrieveClntList_callBack, code, Name, sFlag, null, null, null, null, param, null, null, null, null, null, "F", null, null); // 거래처
      break;
  }
};
scwin.f_openPopUpNm = async function (select_code, txtCode, txtName, sFlag) {
  var rtnList = null;
  var sCmdName = "";
  var param = '';
  code = "";
  Name = txtName.getValue();
  if (select_code == '1' || select_code == '2') {
    //자회사 회계시스템 추가사항 - 부서,거래처 선택시 회사코드 필수( 2016.09.20)
    if (!(await $c.gus.cfValidate($p, [ed_coCd]))) {
      return;
    }
  }
  switch (select_code) {
    // 관리부서 PopUp 호출
    case '1':
      sCmdName = "retrieveAcctDeptCdInfo6";
      param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd; //자회사 회계시스템 추가사항
      rtnList = udc_retrieveAcctDept.cfCommonPopUp(scwin.udc_retrieveAcctDept_callBack2, code, Name, sFlag, null, null, null, null, param, null, null, null, null); // 관리부서
      break;
    // 거래처 PopUp 호출
    case '2':
      sCmdName = "retrieveClntList";
      param = ",,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항
      rtnList = udc_retrieveClntList.cfCommonPopUp(scwin.udc_retrieveClntList_callBack2, code, Name, sFlag, null, null, null, null, param, null, null, null, null, null, "F", null, null); // 거래처
      break;
  }
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      txtCode.Text = ""; // 코드
      txtName.value = ""; // 코드명
      txtCode.hidVal = ""; // 코드
      return;
    }
    txtCode.Text = rtnList[0]; // 코드
    txtName.value = rtnList[1]; // 코드명
    txtCode.hidVal = rtnList[0]; // 코드
  } else {
    txtCode.Text = ""; // 코드
    txtName.value = ""; // 코드명
    txtCode.hidVal = ""; // 코드
  }
};
scwin.udc_retrieveAcctDept_callBack = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_reqAcctDeptCd.setValue(rtnList[0]); // 코드
    ed_reqAcctDeptNm.setValue(rtnList[1]); // 코드명
    ed_reqAcctDeptCd.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_reqAcctDeptCd.setValue(""); // 코드
    ed_reqAcctDeptNm.setValue(""); // 코드명
    ed_reqAcctDeptCd.options.hidVal = ""; // 코드
  }
};
scwin.udc_retrieveClntList_callBack = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]); // 코드
    ed_clntNm.setValue(rtnList[1]); // 코드명
    ed_clntNo.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_clntNo.setValue(""); // 코드
    ed_clntNm.setValue(""); // 코드명
    ed_clntNo.options.hidVal = ""; // 코드
  }
};
scwin.udc_retrieveAcctDept_callBack2 = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ed_reqAcctDeptCd.setValue(""); // 코드
      ed_reqAcctDeptNm.setValue(""); // 코드명
      ed_reqAcctDeptCd.options.hidVal = ""; // 코드
      return;
    }
    ed_reqAcctDeptCd.setValue(rtnList[0]); // 코드
    ed_reqAcctDeptNm.setValue(rtnList[1]); // 코드명
    ed_reqAcctDeptCd.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_reqAcctDeptCd.setValue(""); // 코드
    ed_reqAcctDeptNm.setValue(""); // 코드명
    ed_reqAcctDeptCd.options.hidVal = ""; // 코드
  }
};
scwin.udc_retrieveClntList_callBack2 = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ed_clntNo.setValue(""); // 코드
      ed_clntNm.setValue(""); // 코드명
      ed_clntNo.options.hidVal = ""; // 코드
    }
    ed_clntNo.setValue(rtnList[0]); // 코드
    ed_clntNm.setValue(rtnList[1]); // 코드명
    ed_clntNo.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_clntNo.setValue(""); // 코드
    ed_clntNm.setValue(""); // 코드명
    ed_clntNo.options.hidVal = ""; // 코드
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd.getValue() != orgObjCd.options.hidVal) {
    orgObjNm.setValue("");
  }
  if (orgObjCd.getValue().trim() != "") {
    scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, "T");
  } else {
    if (!orgObjNm == null) {
      orgObjNm.value = "";
    }
    orgObjCd.value = "";
    orgObjCd.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if ((await $c.gus.cfValidate($p, [ed_coCd])) == true && (await $c.gus.cfValidate($p, [ed_reqStartDt])) == true && (await $c.gus.cfValidate($p, [ed_reqEndDt])) == true) {
    /* 자회사 회계시스템 추가사항 : 불필요함. 필요데이터 바인딩처리했음.( 2016.09.20)
    if(sCoClsCd != "000" && sCoCd != "0"){ //자회사 구분하기 위해 추가. 20120308
    ds_search.NameValue(1,"coCd") = sCoCd;
    ds_search.NameValue(1,"coClsCd") = sCoClsCd;
    }
    */

    dma_search.set("scClsCd", "2");
    // dma_search.set("payStsCd", acb_payStsCd.getValue());
    dma_search.set("payMthdCd", acb_payMthdCd.getValue());
    dma_search.set("outbrSlipNo", ed_outbrSlipNo.getValue());
    dma_search.set("apprvReqNo", ed_apprvReqNo.getValue());
    dma_search.set("coClsCd", scwin.txtCoClsCd);
    $c.sbm.execute($p, sbm_retrievePayment);
  }
};

//-------------------------------------------------------------------------
// 분할내역상세조회
//-------------------------------------------------------------------------
scwin.f_Retrieve_Detail = function (sRefPayNo) {
  dma_search2.set("refPayNo", sRefPayNo);
  dma_search2.set("scClsCd", "3");

  /* 자회사 회계시스템 추가사항 : 바인딩 되어있는 데이터를 담아 이용( 2016.09.20)
  if(sCoClsCd != "000" && sCoCd != "0"){ ////자회사 구분하기 위해 추가. 20120308
          ds_search2.NameValue(1,"coCd") = sCoCd;
          ds_search2.NameValue(1,"coClsCd") = sCoClsCd;
  }
  */
  var row = 0;
  if (!$c.gus.cfIsNull($p, ds_payment.getRowPosition())) {
    row = ds_payment.getRowPosition();
  }
  if (ds_payment.getCellData(row, "payCrcCd") == "KRW") {
    gr_division.setColumnVisible("reqExchRt", false);
    gr_division.setColumnVisible("payAmtFcrc", false);
    gr_division.setHeaderClass("column28", "txt-red");
  } else {
    gr_division.setColumnVisible("reqExchRt", true);
    gr_division.setColumnVisible("payAmtFcrc", true);
    gr_division.removeHeaderClass("column28", "txt-red");
  }
  dma_search2.set("coCd", ds_payment.getCellData(row, "coCd"));
  dma_search2.set("coClsCd", ds_payment.getCellData(row, "coClsCd"));
  dma_search2.set("reqAmt", 0.0);
  dma_search2.set("delYn", 0);

  //tr_retrieveDetail.KeyValue="Servlet(I:IN_DS1=ds_search,OUT:OUT_DS1=ds_division)"
  $c.sbm.execute($p, sbm_retrieveDetail);
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, table1, null);
  ed_reqStartDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_reqEndDt.setValue(scwin.g_sCurrDate);
  scwin.f_setCompanyInfo();
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_retrieveAcctDept_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_reqAcctDeptCd, ed_reqAcctDeptNm, 'F');
};
scwin.udc_retrieveAcctDept_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpNm('1', ed_reqAcctDeptCd, ed_reqAcctDeptNm, 'T');
};
scwin.udc_retrieveAcctDept_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_reqAcctDeptCd, ed_reqAcctDeptNm, '1');
};
scwin.udc_retrieveClntList_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_clntNo, ed_clntNm, 'F');
};
scwin.udc_retrieveClntList_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpNm('2', ed_clntNo, ed_clntNm, 'T');
};
scwin.udc_retrieveClntList_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '2');
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_retrievePayment_submitdone = async function (e) {
  var rowcnt = ds_payment.getTotalRow();
  if (rowcnt == 0) {
    $c.gus.cfDisableAllBtn($p);
    ds_division.removeAll();
    await $c.gus.alert($p, MSG_CM_WRN_002);
  } else {
    $c.gus.cfEnableAllBtn($p);
    ed_totalRow.setValue(rowcnt);
    scwin.f_Retrieve_Detail(ds_payment.getCellData(0, "payNo"));
  }
};
scwin.sbm_retrieveDetail_submitdone = function (e) {
  var rowcnt = ds_division.getTotalRow();
  if (rowcnt > 0) {
    $c.gus.cfEnableBtnOnly($p, [btn_cancle]);
    $c.gus.cfDisableBtn($p, [btn_Division]);
    $c.gus.cfDisableObjects($p, [udc_downBtn]);
  } else {
    $c.gus.cfEnableBtnOnly($p, [btn_Division]);
    $c.gus.cfDisableBtn($p, [btn_cancle]);
    $c.gus.cfEnableObjects($p, [udc_downBtn]);
  }
  ed_totalRow2.setValue(rowcnt);
};
scwin.ds_division_oncelldatachange = async function (info) {
  var dReqAmt = 0;
  var dPayAmt = 0;
  var reqExchRt = 0;
  var checkReqAmt1 = 0;
  var checkReqAmt2 = 0;
  var checkReqAmt3 = 0;
  var colid = info.colID;
  var row = info.rowIndex;
  var rowPostion = 0;
  if (!$c.gus.cfIsNull($p, ds_payment.getRowPosition())) {
    rowPostion = ds_payment.getRowPosition();
  }
  if (colid == "reqAmt") {
    if (ds_division.getCellData(ds_division.getTotalRow() - 1, "payCrcCd") == ACConstants.KRW) {
      // 통화코드가 원화일경우		
      if (ds_division.getTotalRow() >= 2) {
        dPayAmt = Number(ds_payment.getCellData(rowPostion, "reqAmt"));
        for (var i = 0; i < ds_division.getTotalRow() - 1; i++) {
          dReqAmt = dReqAmt + Number(ds_division.getCellData(i, colid));
        }
        if (dPayAmt - dReqAmt < 0) {
          await $c.win.alert($p, "입력하신 금액이 요청금액을 초과하였습니다.");
          ds_division.setCellData(row, "reqAmt", 0);
          return false;
        }
        if (row == ds_division.getTotalRow() - 1) {
          ds_division.setCellData(row, "reqAmt", dPayAmt - dReqAmt);
        } else {
          ds_division.setCellData(row + 1, "reqAmt", dPayAmt - dReqAmt);
        }
      }
    } else {
      // 통화코드가 외화일 경우

      reqExchRt = Number(ds_division.getCellData(row, "reqExchRt"));
      if (ds_division.getCellData(ds_division.getTotalRow() - 1, "payCrcCd") == ACConstants.JPY) {
        checkReqAmt1 = Math.round(reqExchRt * Number(ds_division.getCellData(row, "payAmtFcrc")) / 100) + 100;
        checkReqAmt2 = Math.round(reqExchRt * Number(ds_division.getCellData(row, "payAmtFcrc")) / 100) - 100;
      } else {
        checkReqAmt1 = Math.round(reqExchRt * Number(ds_division.getCellData(row, "payAmtFcrc"))) + 100;
        checkReqAmt2 = Math.round(reqExchRt * Number(ds_division.getCellData(row, "payAmtFcrc"))) - 100;
      }
      checkReqAmt3 = Number(ds_division.getCellData(row, "reqAmt")); // 해당 row에 입력된 요청금액

      if (checkReqAmt3 > checkReqAmt1 || checkReqAmt3 < checkReqAmt2) {
        var num_str1 = checkReqAmt1.toString();
        var num_str2 = checkReqAmt2.toString();
        var num_str3 = checkReqAmt3.toString();
        var result1 = '';
        var result2 = '';
        var result3 = '';
        for (var i = 0; i < num_str1.length; i++) {
          var tmp1 = num_str1.length - (i + 1);
          if (i % 3 == 0 && i != 0) {
            result1 = ',' + result1;
          }
          result1 = num_str1.charAt(tmp1) + result1;
        }
        for (var i = 0; i < num_str2.length; i++) {
          var tmp2 = num_str2.length - (i + 1);
          if (i % 3 == 0 && i != 0) {
            result2 = ',' + result2;
          }
          result2 = num_str2.charAt(tmp2) + result2;
        }
        for (var i = 0; i < num_str3.length; i++) {
          var tmp3 = num_str3.length - (i + 1);
          if (i % 3 == 0 && i != 0) {
            result3 = ',' + result3;
          }
          result3 = num_str3.charAt(tmp3) + result3;
        }
        await $c.win.alert($p, "환율*요청금액(외화) 값이 입력 요청금액 +,- 100원 이내 여야 합니다." + "\n입력 요청금액 : " + result3 + "원" + "\n요청금액 +100원 : " + result1 + "원" + "\n요청금액 -100원 : " + result2 + "원");
        if (ds_division.getCellData(ds_division.getTotalRow() - 1, "payCrcCd") == ACConstants.JPY) {
          ds_division.setCellData(row, "reqAmt", Math.round(reqExchRt * Number(ds_division.getCellData(row, "payAmtFcrc")) / 100));
        } else {
          ds_division.setCellData(row, "reqAmt", Math.round(reqExchRt * Number(ds_division.getCellData(row, "payAmtFcrc"))));
        }
        return;
      }
    }
  } else if (colid == "reqExchRt") {
    if (ds_division.getCellData(ds_division.getTotalRow() - 1, "payCrcCd") != ACConstants.KRW) {
      //for(i = 1; i<= ds_division.CountRow; i++)
      //{
      //	ds_division.NameValue(i, "reqExchRt") = ds_division.NameValue(row, "reqExchRt");	

      if (ds_division.getCellData(row, "payCrcCd") == ACConstants.JPY) {
        // 통화코드가 엔화일경우	
        ds_division.setCellData(row, "reqAmt", Math.round(Number(ds_division.getCellData(row, "payAmtFcrc")) * Number(ds_division.getCellData(ds_division.getTotalRow() - 1), "reqExchRt") / 100));
      } else {
        ds_division.setCellData(row, "reqAmt", Math.floor(Number(ds_division.getCellData(row, "payAmtFcrc")) * Number(ds_division.getCellData(row, "reqExchRt"))));
      }
      //}
    }
  } else if (colid == "payAmtFcrc") {
    if (ds_division.getCellData(ds_division.getTotalRow() - 1, "payCrcCd") != ACConstants.KRW) {
      // 통화코드가 외화일경우	
      if (ds_division.getTotalRow() >= 2) {
        dPayAmt = Number(ds_payment.getCellData(rowPostion, "payAmtFcrc"));
        for (var i = 0; i < ds_division.getTotalRow() - 1; i++) {
          dReqAmt = dReqAmt + Number(ds_division.getCellData(i, colid));
        }
        if (dPayAmt - dReqAmt < 0) {
          await $c.win.alert($p, "입력하신 금액이 요청금액을 초과하였습니다.");
          ds_division.setCellData(row, "payAmtFcrc", 0);
          return false;
        }
        if (row == ds_division.getTotalRow() - 1) {
          ds_division.setCellData(row, "payAmtFcrc", dPayAmt - dReqAmt);
        } else {
          ds_division.setCellData(row + 1, "payAmtFcrc", dPayAmt - dReqAmt);
        }
      }
      for (var i = 0; i < ds_division.getTotalRow(); i++) {
        if (ds_division.getCellData(i, "payCrcCd") == ACConstants.JPY) {
          ds_division.setCellData(i, "reqAmt", Math.round(Number(ds_division.getCellData(i, "payAmtFcrc")) * Number(ds_division.getCellData(i, "reqExchRt")) / 100));
        } else {
          ds_division.setCellData(i, "reqAmt", Math.floor(Number(ds_division.getCellData(i, "payAmtFcrc")) * Number(ds_division.getCellData(i, "reqExchRt"))));
        }
      }
    }
  }
};
scwin.sbm_saveDivision_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.win.alert($p, MSG_CM_INF_001);
    $c.gus.cfDisableAllBtn($p);
    scwin.f_Retrieve(); // 재조회
    // parent.iFrame1.f_Retrieve()
  }
};
scwin.gr_paymgnt_oncellclick = function (Row, columnIndex, Colid) {
  if (Colid == "outbrSlipNo") {
    if (!(ds_payment.getCellData(Row, "outbrSlipNo") == null || ds_payment.getCellData(Row, "outbrSlipNo") == "")) {
      $c.gus.cfShowSlipInfo($p, ds_payment.getCellData(Row, "outbrSlipNo"));
    }
  } else {
    // cfStyleGrid(gr_division,className);
    scwin.f_Retrieve_Detail(ds_payment.getCellData(Row, "payNo"));
  }
};
scwin.gr_division_oncellclick = function (rowIndex, columnIndex, Colid) {
  if (Colid == "outbrSlipNo") {
    if (!(ds_division.getCellData(Row, "outbrSlipNo") == null || ds_division.getCellData(Row, "outbrSlipNo") == "")) {
      $c.gus.cfShowSlipInfo($p, ds_division.getCellData(Row, "outbrSlipNo"));
    }
  }
};
scwin.btn_Division_onclick = function (e) {
  scwin.f_Division();
};
scwin.btn_cancle_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.f_Cancle = function () {
  ds_division.removeRow(ds_division.getRowPosition());
};
scwin.f_RowDel = function () {
  ds_division.removeRow(ds_division.getRowPosition());
};
scwin.ds_division_ondataload = function (info) {};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm',style:'',code:'coCd',refDataCollection:'dma_search',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',maxlengthName:'65',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급방법 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_payMthdCd',style:'width: 150px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'',sortMethod:'ascending',sortOption:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'경비이체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전자결제-현금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'30'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전자어음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'40'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실물어음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'50'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당좌수표'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'60'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'급여이체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'70'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'받을어음'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'86'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자동이체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'90'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지로납부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'95'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요청일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'qryStDt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar1',refEdDt:'qryEndDt',mandatoryFrom:'true',mandatoryTo:'true',edFromId:'ed_reqStartDt',edToId:'ed_reqEndDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo6',codeId:'ed_reqAcctDeptCd',validTitle:'거래처명',nameId:'ed_reqAcctDeptNm',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'5',id:'udc_retrieveAcctDept',mandatoryCode:'true',refDataCollection:'dma_search',code:'reqDept',name:'',objTypeName:'data',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onclickEvent':'scwin.udc_retrieveAcctDept_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_retrieveAcctDept_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_retrieveAcctDept_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_outbrSlipNo',style:'width: 150px;',maxlength:'10',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_apprvReqNo',style:'width: 150px;',maxlength:'15',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList',codeId:'ed_clntNo',validTitle:'거래처명',nameId:'ed_clntNm',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_retrieveClntList',mandatoryCode:'true',refDataCollection:'dma_search',code:'clntNo',name:'',objTypeName:'data',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onclickEvent':'scwin.udc_retrieveClntList_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_retrieveClntList_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_retrieveClntList_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'지급내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_paymgnt',gridUpYn:'N',gridDownYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_payment',id:'gr_paymgnt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'4',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_paymgnt_oncellclick',fixedColumn:'7',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'상태',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'지급방법',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'요청일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'요청번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'거래처',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'요청금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'계정',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'지급번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'지급등록</br>기준일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'지급계좌',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'지급은행',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'전표적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'회사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column66',value:'회사구분코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'payStsCd',inputType:'autoComplete',style:'',value:'',width:'70',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'준비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'00'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'보류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'장기보류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'가압류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'15'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'대기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'상계대기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'25'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'무증빙'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'26'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'결정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'30'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'택배이관'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'33'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'40'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'역전표'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'60'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'payMthdCd',inputType:'autoComplete',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:'',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'경비이체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전자결제-현금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'30'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전자어음'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'40'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'실물어음'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'50'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'당좌수표'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'60'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'급여이체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'70'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'받을어음'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'86'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자동이체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'90'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지로납부'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'95'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'payDt',inputType:'text',style:'',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvReqNo',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'payCrcCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrAcctNm',inputType:'text',style:'',value:'',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrAcctDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrSlipNo',inputType:'link',style:'',value:'',width:'100',class:'linktype',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'interPayDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payBankAcntNo',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bankNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'addupDivsCd',value:'',displayMode:'label',readOnly:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'분할'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'교환'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'T'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outbrSummary',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'coCd',value:'',displayMode:'label',textAlign:'left',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'coClsCd',value:'',displayMode:'label',textAlign:'left',readOnly:'true',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'분할내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownYn:'N',gridUpYn:'N',templateYn:'N',gridID:'gr_division'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_division',id:'gr_division',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'3',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_division_oncellclick',fixedColumnNoMove:'true',fixedColumn:'8'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'상태',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'지급방법',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'요청일자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'요청번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'요청금액',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column92',value:'환율',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column89',value:'요청금액(외화)',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'계정',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'귀속부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column50',inputType:'text',style:'',value:'지급번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',inputType:'text',style:'',value:'지급등록</br>기준일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',style:'',value:'지급은행',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'text',style:'',value:'지급계좌',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column40',inputType:'text',style:'',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',style:'',value:'거래처번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column62',inputType:'text',style:'',value:'전표적요',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'국제여부',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column64',inputType:'text',style:'',value:'회사코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column66',inputType:'text',style:'',value:'회사구분코드',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'payStsCd',inputType:'autoComplete',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payMthdCd',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:'',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_payMthdCd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'payDt',inputType:'calendar',style:'',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvReqNo',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'reqExchRt',value:'',displayMode:'label',textAlign:'right',dataType:'float',hidden:'true',maxLength:'5.4',displayFormat:'#,###.0000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payAmtFcrc',value:'',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.00',hidden:'true',maxLength:'13.2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrAcctNm',inputType:'text',style:'',value:'',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrAcctDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrSlipNo',inputType:'link',style:'',value:'',width:'100',readOnly:'true',class:'linktype'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'interPayDt',inputType:'text',style:'',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payBankAcntNo',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addupDivsCd',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrSummary',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'interDataYn',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coCd',inputType:'text',style:'',value:'',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coClsCd',inputType:'text',style:'',value:'',width:'120',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column88',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column86',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'Total',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'sumReq',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'sum(\'reqAmt\')'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column94',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'sumPayAmtFcrc',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'sum(\'payAmtFcrc\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column82',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRow2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnRowAddYn:'Y',EngYn:'N',btnRowDelYn:'Y',gridID:'gr_division',id:'udc_downBtn',rowAddFunction:'scwin.f_RowAdd',rowDelFunction:'scwin.f_RowDel',cancelFunction:'scwin.f_Cancle',btnCancelYn:'Y',btnDelYn:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_Division',type:'button',class:'btn','ev:onclick':'scwin.btn_Division_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'분할'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_cancle',type:'button',class:'btn','ev:onclick':'scwin.btn_cancle_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'분할취소'}]}]}]}]}]}]}]}]})