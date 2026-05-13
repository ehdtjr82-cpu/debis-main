/*amd /ui/ac/fm/paymgnt/paymgnt/fm_301_02_04b.xml 72614 846f81e876ab459bf0c752e7bc1c760e73a5f3c240f6bc28e154ef678a07e812 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'payStsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payMthdCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDept',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outbrSlipNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvReqNo',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'addupDivsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitCnclDt',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'지불방법',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNm',name:'요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNo',name:'요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveDate',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'요청금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'보류사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'beClntNm',name:'해제사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befPayStsCd',name:'계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'전표적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNo',name:'요청사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclRsn',name:'요청부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitDt',name:'해제일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'해제사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDocOvrDd',name:'지급번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'지급등록 기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnEmpNo',name:'지급계좌',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'어음수표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctDeptCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClntNo',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errCont',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errYn',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firmBankYn',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interDataYn',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interPayDt',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctCd',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col47',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankCd',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payNo',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt2',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refPayNo',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId2',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'name66',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm2',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col70',name:'name70',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col71',name:'name71',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqExchRt',name:'name72',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'name73',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reserRsn',name:'name74',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'name75',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffYn',name:'name76',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'name77',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'name78',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'name79',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name80',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'name81',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col82',name:'name82',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col83',name:'name83',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col84',name:'name84',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col85',name:'name85',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col86',name:'name86',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col87',name:'name87',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col88',name:'name88',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col89',name:'name89',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col90',name:'name90',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col91',name:'name91',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col92',name:'name92',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col93',name:'name93',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col94',name:'name94',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col95',name:'name95',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col96',name:'name96',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col97',name:'name97',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col98',name:'name98',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col99',name:'name99',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col100',name:'name100',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col101',name:'name101',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col102',name:'name102',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col103',name:'name103',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col104',name:'name104',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col105',name:'name105',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col106',name:'name106',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col107',name:'name107',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col108',name:'name108',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col109',name:'name109',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col110',name:'name110',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col111',name:'name111',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col112',name:'name112',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col113',name:'name113',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col114',name:'name114',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col115',name:'name115',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col116',name:'name116',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtDt',name:'name117',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col118',name:'name118',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckAmt',name:'name119',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rate',name:'name120',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col121',name:'name121',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col122',name:'name122',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col123',name:'name123',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col124',name:'name124',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col125',name:'name125',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueBankCd',name:'name126',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNo',name:'name127',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col128',name:'name128',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col129',name:'name129',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refSlipNo',name:'name130',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name131',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtClntNo',name:'name132',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlClsCd',name:'name133',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col134',name:'name134',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col135',name:'name135',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col136',name:'name136',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col137',name:'name137',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col138',name:'name138',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustAmt',name:'name139',dataType:'text'}},{T:1,N:'w2:column',A:{id:'faultRate',name:'name140',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cashAmt',name:'name141',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftAmt',name:'name142',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col143',name:'name143',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'name144',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'name145',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col146',name:'name146',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalCloseYm',name:'name147',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col148',name:'name148',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col149',name:'name149',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col150',name:'name150',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col151',name:'name151',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col152',name:'name152',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col153',name:'name153',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col154',name:'name154',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col155',name:'name155',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col156',name:'name156',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col157',name:'name157',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col158',name:'name158',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col159',name:'name159',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col160',name:'name160',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitEmpNo',name:'name161',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectDt',name:'name162',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectEmpNo',name:'name163',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reserApprvReqNo',name:'name164',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reserApprvStsCd',name:'name165',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col166',name:'name166',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col167',name:'name167',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col168',name:'name168',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCollectionNum',name:'name169',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col170',name:'name170',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col171',name:'name171',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col172',name:'name172',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'name173',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col174',name:'name174',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col175',name:'name175',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count1',name:'name176',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count2',name:'name177',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count3',name:'name178',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count4',name:'name179',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count5',name:'name180',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count6',name:'name181',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count7',name:'name182',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count8',name:'name183',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count9',name:'name184',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count10',name:'name185',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count11',name:'name186',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count12',name:'name187',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count13',name:'name188',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count14',name:'name189',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col190',name:'name190',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col191',name:'name191',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueSlipNo',name:'name192',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exceptSlipYn',name:'name193',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoSlipYn',name:'name194',dataType:'text'}},{T:1,N:'w2:column',A:{id:'companyCardYn',name:'name195',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxInvoiceYn',name:'name196',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxInvoiceNormalYn',name:'name197',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxInvoiceEtcYn',name:'name198',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billYn',name:'name199',dataType:'text'}},{T:1,N:'w2:column',A:{id:'otherEvidYn',name:'name200',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paperTaxInvoiceYn',name:'name201',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invoiceYn',name:'name202',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paperBillYn',name:'name203',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroRegYn',name:'name204',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receptYn',name:'name205',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalEvidCount',name:'name206',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col207',name:'name207',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col208',name:'name208',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col209',name:'name209',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchStDate',name:'name210',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchEndDate',name:'name211',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col212',name:'name212',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col213',name:'name213',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befPaySlipNo',name:'name214',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag',name:'name215',dataType:'text'}},{T:1,N:'w2:column',A:{id:'originSlipKndCd',name:'name216',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDd',name:'name217',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'name218',dataType:'text'}},{T:1,N:'w2:column',A:{id:'writeDt',name:'name219',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_approve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprvDocKndCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqUserId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'epUserId',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvTitle',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDtlInfo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'OilunitPriceList',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifylines',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifybody',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bmodifyattach',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ReserCancleList',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payMthdCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'85'}]},{T:1,N:'name',E:[{T:4,cdata:'대체전표'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'20'}]},{T:1,N:'name',E:[{T:4,cdata:'경비이체'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'21'}]},{T:1,N:'name',E:[{T:4,cdata:'경비이체(외화)'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'25'}]},{T:1,N:'name',E:[{T:4,cdata:'전자결제'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'30'}]},{T:1,N:'name',E:[{T:4,cdata:'전자결제-현금'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'40'}]},{T:1,N:'name',E:[{T:4,cdata:'전자어음'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'50'}]},{T:1,N:'name',E:[{T:4,cdata:'실물어음'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'60'}]},{T:1,N:'name',E:[{T:4,cdata:'당좌수표'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'70'}]},{T:1,N:'name',E:[{T:4,cdata:'급여이체'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'80'}]},{T:1,N:'name',E:[{T:4,cdata:'상계처리'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'86'}]},{T:1,N:'name',E:[{T:4,cdata:'받을어음'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'90'}]},{T:1,N:'name',E:[{T:4,cdata:'자동이체'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'95'}]},{T:1,N:'name',E:[{T:4,cdata:'지로납부'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'40'}]},{T:1,N:'name',E:[{T:4,cdata:'전자어음'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'50'}]},{T:1,N:'name',E:[{T:4,cdata:'실물어음'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'60'}]},{T:1,N:'name',E:[{T:4,cdata:'당좌수표'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.paymgnt.paymgnt.RetrievePaymentContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_savePayDecide',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_master","key":"IN_DS1"},{"id":"dma_condition","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_savePayDecide_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.sysAdminYn = scwin.login.sysAdminYn;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.isSubCompany = false;
scwin.sEmpNo = $c.data.getMemInfo($p, "empNo");
scwin.sAcctDeptCd = scwin.login.acctDeptCd;

// 상태코드 상수
scwin.PREPARESTS = "00"; // 준비
scwin.RESERVESTSLONG = "11"; // 장기보류
scwin.RESERVESTS = "10"; // 보류
scwin.SEIZURESTS = "15"; // 가압류
scwin.WAITSTS = "20"; // 대기
scwin.COLLMONEYWAIT = "25"; // 상계대기
scwin.CANCLESTS = "21"; // 보류해제로 대기로 넘어감.
scwin.DECIDESTS = "30"; // 결정
scwin.DECISIONSTS = "40"; // 확정
scwin.COMPLETE = "50"; // 완료

// 지급방법 상수
scwin.APPROVE = "30"; // 결재

// 상태코드 flag
scwin.bRESERVE = false; // 보류
scwin.bRESERVELONG = false;
scwin.bWAITSTS = false; // 대기
scwin.bCOLLMONEYWAIT = false; //상계대기
scwin.bDECIDE = false; // 결정
scwin.bSEIZURE = false; // 가압류

scwin.txtCoClsCd;
scwin.isFirst = true;
scwin.g_sCurrDate = WebSquare.date.getCurrentServerDate();
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FM115",
    compID: "acb_payStsCd",
    opt: {
      "range": "1,1"
    }
  }, {
    grpCd: "FM018",
    compID: "acb_payMthdCd"
  }, {
    grpCd: "FM017",
    compID: "gr_master:payStsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.fn_setCommboDataFilter);
};
scwin.onUdcCompleted = async function () {};
scwin.ondataload = async function () {
  // scwin.f_HeaderCreate();
  scwin.f_setCompanyInfo();
  acb_payStsCd.setValue("20");
  ed_reqStartDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_reqEndDt.setValue(scwin.g_sCurrDate);
  $c.gus.cfDisableObjects($p, [btn_reserve, btn_reserveLong, acb_payMthdCd, btn_reserveCancel]);
};
scwin.fn_setCommboDataFilter = function () {
  //^선택,<%= GauceUtil.getCodeList("FM018",2,"10") %>,<%= GauceUtil.getCodeList("FM018",2,"20") %>">
  $c.data.dataListFilter($p, dlt_commonCodeFM018, "fltrCd2 == '10' || fltrCd2 == '20'");
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

//-------------------------------------------------------------------------
// 보류함수
//-------------------------------------------------------------------------
scwin.f_Reserve = async function () {
  var i = 0;
  var cnt = 0;
  if (ds_master.getModifiedIndex().length == 0) {
    // await $c.gus.cfAlertMsg(MSG_CM_ERR_049, ["자료"]);
    await $c.win.alert($p, "보류할 자료가 존재하지않습니다");
    return false;
  }
  if (await $c.gus.cfValidate($p, [gr_master])) {
    for (i = 0; i < ds_master.getTotalRow(); i++) {
      if (ds_master.getRowStatus(i) != "R" && ds_master.getCellData(i, "selYn") == "1") {
        cnt++;
        if (ds_master.getCellData(i, "reserRsn") == "" || ds_master.getCellData(i, "reserRsn") == null) {
          await $c.win.alert($p, "보류사유는 필수입력입니다.");
          return false;
        }
      }
    }
    if (cnt <= 0) {
      await $c.win.alert($p, "보류할 자료가 존재하지않습니다");
      return false;
    }
    if ((await $c.win.confirm($p, "보류하시겠습니까?")) == true) {
      for (i = 0; i < ds_master.getTotalRow(); i++) {
        if (ds_master.getRowStatus(i) != "R" && ds_master.getCellData(i, "selYn") == "1") {
          cnt++;
          ds_master.setCellData(i, "payStsCd", scwin.RESERVESTS);
          ds_master.setCellData(i, "reqDt", scwin.g_sCurrDate);
          ds_master.setCellData(i, "reqAcctDeptCd", scwin.sAcctDeptCd);
          ds_master.setCellData(i, "reqEmpNo", scwin.sEmpNo);
        }
      }
      sbm_savePayDecide.action = "/ac.fm.paymgnt.paymgnt.ProcessPaymentDecideCMD.do";
      $c.sbm.execute($p, sbm_savePayDecide);
    }
  }
};

//-------------------------------------------------------------------------
// 장기보류
//-------------------------------------------------------------------------
scwin.f_ReserveLong = async function () {
  var i = 0;
  var cnt = 0;
  if (ds_master.getModifiedIndex().length == 0) {
    // await $c.gus.cfAlertMsg(MSG_CM_ERR_049, ["자료"]);
    await $c.win.alert($p, "장기보류할 자료가 존재하지않습니다");
    return false;
  }
  if (await $c.gus.cfValidate($p, [gr_master])) {
    for (i = 0; i < ds_master.getTotalRow(); i++) {
      if (ds_master.getRowStatus(i) != "R" && ds_master.getCellData(i, "selYn") == "1") {
        cnt++;
        if (ds_master.getCellData(i, "reserRsn") == "" || ds_master.getCellData(i, "reserRsn") == null) {
          await $c.win.alert($p, "보류사유는 필수입력입니다.");
          return false;
        }
      }
    }
    if (cnt <= 0) {
      await $c.win.alert($p, "장기보류할 자료가 존재하지않습니다");
      return false;
    }
    if ((await $c.win.confirm($p, "장기보류하시겠습니까?")) == true) {
      for (i = 0; i < ds_master.getTotalRow(); i++) {
        if (ds_master.getRowStatus(i) != "R" && ds_master.getCellData(i, "selYn") == "1") {
          cnt++;
          ds_master.setCellData(i, "payStsCd", scwin.RESERVESTSLONG);
          ds_master.setCellData(i, "reqDt", scwin.g_sCurrDate);
          ds_master.setCellData(i, "reqAcctDeptCd", scwin.sAcctDeptCd);
          ds_master.setCellData(i, "reqEmpNo", scwin.sEmpNo);
        }
      }
      sbm_savePayDecide.action = "/ac.fm.paymgnt.paymgnt.ProcessPaymentDecideCMD.do";
      $c.sbm.execute($p, sbm_savePayDecide);
    }
  }
};

//-------------------------------------------------------------------------
// 취소함수
//-------------------------------------------------------------------------
scwin.f_Cancel = async function () {
  var i = 0;
  var cnt = 0;
  if (ds_master.getModifiedIndex().length == 0) {
    // await $c.gus.cfAlertMsg(MSG_CM_ERR_049, ["자료"]);
    await $c.win.alert($p, "해제할 자료가 존재하지않습니다");
    return false;
  } else {
    if (await $c.gus.cfValidate($p, [gr_master])) {
      for (i = 0; i < ds_master.getTotalRow(); i++) {
        if (ds_master.getRowStatus(i) != "R" && ds_master.getCellData(i, "selYn") == "1") {
          cnt++;
          if (ds_master.getCellData(i, "cnclRsn") == "" || ds_master.getCellData(i, "cnclRsn") == null) {
            await $c.win.alert($p, "해제사유는 필수입력입니다.");
            return false;
          }
        }
      }
      if (cnt <= 0) {
        await $c.win.alert($p, "해제할 자료가 존재하지않습니다");
        return false;
      }
      //전자결재 로직.
      scwin.f_RequestElectronicApprove();
    }
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
  var code = "";
  var Name = "";
  if (!$c.gus.cfIsNull($p, txtCode)) {
    code = txtCode.getValue();
  }
  Name = txtName.getValue();
  if (select_code == '1' || select_code == '2') {
    //자회사 회계시스템 추가사항 - 부서,거래처 선택시 회사코드 필수( 2016.09.21)
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
    // 사업자번호 PopUp 호출 	
    case '3':
      sCmdName = "retrieveCrnInfo";
      rtnList = udc_payCrn.cfCommonPopUp(scwin.udc_payCrn_callBack, code, Name, sFlag, null, null, null, null, null, null, null, null, null, null, "F", null, null); // 사업자번호
      break;
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
scwin.udc_payCrn_callBack = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_payCrn.setValue(rtnList[0]); // 코드
    txt_payCrn.setValue(rtnList[1]); // 코드명
    ed_payCrn.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_payCrn.setValue(""); // 코드
    txt_payCrn.setValue(""); // 코드명
    ed_payCrn.options.hidVal = ""; // 코드
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
      orgObjNm.setValue("");
    }
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if ((await $c.gus.cfValidate($p, [ed_coCd, ed_reqStartDt])) == true && (await $c.gus.cfValidate($p, [ed_reqEndDt])) == true) {
    dma_condition.set("scClsCd", "1");
    dma_condition.set("payStsCd", acb_payStsCd.getValue());
    dma_condition.set("payMthdCd", acb_payMthdCd.getValue());
    dma_condition.set("outbrSlipNo", ed_outbrSlipNo.getValue());
    dma_condition.set("apprvReqNo", ed_apprvReqNo.getValue());
    dma_condition.set("coClsCd", scwin.txtCoClsCd);
    $c.sbm.execute($p, sbm_retrieve);
  }
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

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_master.getTotalRow() <= 0) {
    await $c.win.alert($p, "지급내역이 존재하지않습니다.");
    return false;
  }
  let options = {
    fileName: "지급조회.xlsx",
    sheetName: "지급조회회"
  };
  let infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_reqAcctDeptCd, ed_reqAcctDeptNm]); //  귀속부서      
  $c.gus.cfInitObjects($p, [ed_clntNo, ed_clntNm]); //거래처  
};

//-------------------------------------------------------------------------
// 전자결재를 위한 보류해제리스트를 리턴한다.
//-------------------------------------------------------------------------
scwin.f_getFineItemList = async function () {
  var oResult = new Object();
  oResult.itemList = '';
  oResult.itemSize = 0;
  oResult.itemTotal = 0;
  for (var i = 0; i < ds_master.getTotalRow(); i++) {
    if (ds_master.getCellData(i, "selYn") == "1") {
      if (oResult.itemList == "") {
        oResult.itemList += ds_master.getCellData(i, "payNo");
      } else {
        oResult.itemList += "," + ds_master.getCellData(i, "payNo");
      }
      oResult.itemSize += 1;
      oResult.itemTotal += 1;
    }
  }
  return oResult;
};

//-------------------------------------------------------------------------
// 전자결재요청
//-------------------------------------------------------------------------
scwin.f_RequestElectronicApprove = async function () {
  var vReqApprvDocKndCd = "023"; // 결재문서종류 -- FMS AP단가 내역
  var vReqUserId = scwin.login.userId; // 결재요청자 ID
  var vEpUsrId = scwin.login.epId; // EP사용자 ID

  var toDay = WebSquare.date.getCurrentServerDate();
  var fineInfo = await scwin.f_getFineItemList(); // 결재대상 (유류단가 정보)

  //alert("결제요청자 ID : "+vReqUserId+"/ EP사용자ID : "+vEpUsrId);

  if (vEpUsrId == "") {
    await $c.gus.cfAlertMsg($p, " EP사용자 ID정보가 없습니다.");
    return false;
  }
  if ((await $c.win.confirm($p, "해제요청 전자결재 요청하시겠습니까?")) != true) {
    return;
  }

  //결재요청내역 START>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  var vReqApprvTitle = ""; //결재제목 
  var styleTb = 'class=tb';
  var vApprvDtlInfo = '<head>';
  vApprvDtlInfo += '<style type=text/css>';
  vApprvDtlInfo += '	.tb { ';
  vApprvDtlInfo += '		border-top:solid 1px #000000;';
  vApprvDtlInfo += '		border-right:solid 1px #000000;';
  vApprvDtlInfo += '		border-left:solid 1px #000000; ';
  vApprvDtlInfo += '		border-bottom:solid 1px #000000;';
  vApprvDtlInfo += '	}';
  vApprvDtlInfo += '</style>';
  vApprvDtlInfo += '</head>';
  vApprvDtlInfo += '<body align=center>';
  vApprvDtlInfo += '<table width=1000 cellspacing=0 cellpadding=0 border=1 ' + styleTb + '>';
  vApprvDtlInfo += '	<tr>';
  vApprvDtlInfo += '		<td height=35 align=center ' + styleTb + '>제 목</td>';
  vApprvDtlInfo += '		<td ' + styleTb + '><b>보류해제 승인요청 -  (' + toDay + ')</b></td>';
  vApprvDtlInfo += '	</tr>';
  vApprvDtlInfo += '	<tr>';
  vApprvDtlInfo += '		<td colspan=2 ' + styleTb + '>';
  vApprvDtlInfo += '			<table width=1200 border=0>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td colspan=2 height=10 align=center>&nbsp;</td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td><font face=굴림><b>1. 보류해제상세내역</b></font></td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td colspan=2 align=right>';
  vApprvDtlInfo += '						<table cellspacing=0 border=1 ' + styleTb + '>';
  vApprvDtlInfo += '							<col width=30 align=left></col>'; //선택
  vApprvDtlInfo += '							<col width=60 align=left></col>'; //상태
  vApprvDtlInfo += '							<col width=75 align=left></col>'; //지불방법
  vApprvDtlInfo += '							<col width=75 align=right></col>'; //요청일자
  vApprvDtlInfo += '							<col width=75 align=right></col>'; //요청번호
  vApprvDtlInfo += '							<col width=100 align=right></col>'; //거래처명
  vApprvDtlInfo += '							<col width=80 align=right></col>'; //요청금액
  vApprvDtlInfo += '							<col width=90 align=right></col>'; //귀속부서
  vApprvDtlInfo += '							<col width=75 align=right></col>'; //전표번호
  vApprvDtlInfo += '							<col width=75 align=right></col>'; //거래처번호
  vApprvDtlInfo += '							<col width=75 align=right></col>'; //사업자번호
  vApprvDtlInfo += '							<col width=200 align=right></col>'; //전표적요
  vApprvDtlInfo += '							<col width=200 align=right></col>'; //해제사유

  vApprvDtlInfo += '							<tr>';
  vApprvDtlInfo += '								<td ' + styleTb + ' height=30 align=center><font size=2 face=굴림><b>선택</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>상태</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>지불방법</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>요청일자</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>요청번호</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>거래처명</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>요청금액</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>귀속부서</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>전표번호</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>거래처번호</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>사업자번호</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>전표적요</b></font></td>';
  vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림><b>해제사유</b></font></td>';
  vApprvDtlInfo += '							</tr>';
  var reserCount = 0;
  for (var i = 0; i < ds_master.getTotalRow(); i++) {
    vApprvDtlInfo += '							<tr>';
    var selYn = "";
    if (ds_master.getCellData(i, "selYn") == "1") {
      selYn = "V";
    } else if (ds_master.getCellData(i, "selYn") == "0") {
      selYn = "";
    }
    var payStsCd = "";
    if (ds_master.getCellData(i, "payStsCd") == "10") {
      payStsCd = "보류";
    } else if (ds_master.getCellData(i, "payStsCd") == "11") {
      payStsCd = "장기보류";
    } else if (ds_master.getCellData(i, "payStsCd") == "20") {
      payStsCd = "대기";
    }
    var payMthdCd = "";
    if (ds_master.getCellData(i, "payMthdCd") == "20") {
      payMthdCd = "경비이체";
    } else if (ds_master.getCellData(i, "payMthdCd") == "30") {
      payMthdCd = "전자결제-현금";
    } else if (ds_master.getCellData(i, "payMthdCd") == "70") {
      payMthdCd = "급여이체";
    } else if (ds_master.getCellData(i, "payMthdCd") == "90") {
      payMthdCd = "자동이체";
    } else if (ds_master.getCellData(i, "payMthdCd") == "95") {
      payMthdCd = "지로납부";
    }
    var dcsnDt = ds_master.getCellData(i, "dcsnDt");
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>&nbsp;' + selYn + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + payStsCd + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + payMthdCd + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + dcsnDt.substring(0, 4) + '/' + dcsnDt.substring(4, 6) + '/' + dcsnDt.substring(6, 8) + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>&nbsp;' + ds_master.getCellData(i, "apprvReqNo") + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=left>  <font size=2 face=굴림>' + ds_master.getCellData(i, "clntNm") + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=right> <font size=2 face=굴림>' + $c.gus.cfInsertComma($p, Number(ds_master.getCellData(i, "reqAmt"))) + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=left>  <font size=2 face=굴림>' + ds_master.getCellData(i, "outbrAcctDeptNm") + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + ds_master.getCellData(i, "outbrSlipNo") + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + ds_master.getCellData(i, "clntNo") + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=center><font size=2 face=굴림>' + ds_master.getCellData(i, "crn") + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=left>  <font size=2 face=굴림>' + ds_master.getCellData(i, "outbrSummary") + '</font></td>';
    vApprvDtlInfo += '								<td ' + styleTb + ' align=left>  <font size=2 face=굴림>&nbsp;' + ds_master.getCellData(i, "cnclRsn") + '</font></td>';
    vApprvDtlInfo += '							</tr>';
    reserCount++;
  }
  vApprvDtlInfo += '						</table>';
  vApprvDtlInfo += '					</td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '				<tr>';
  vApprvDtlInfo += '					<td align=right colspan=2><font size=3 face=굴림><b>이상 ' + reserCount + '건</b></font></td>';
  vApprvDtlInfo += '				</tr>';
  vApprvDtlInfo += '			</table>';
  vApprvDtlInfo += '		</td>';
  vApprvDtlInfo += '	</tr>';
  vApprvDtlInfo += '</table>';
  vApprvDtlInfo += '</body>';
  //결재요청내역 END>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  //보류내역 (TB_FM205내역 INSERT_ 해제요청상태로 입력된다.
  var i = 0;
  for (i = 0; i < ds_master.getTotalRow(); i++) {
    if (ds_master.getCellData(i, "selYn") != "0" && ds_master.getCellData(i, "selYn") == "1") {
      if (scwin.bRESERVE == true || scwin.bRESERVELONG == true)
        // ds_master.setCellData(i, "payStsCd", scwin.CANCLESTS);
        ds_master.setCellData(i, "payStsCd", "10");
      ds_master.setCellData(i, "reqDt", scwin.g_sCurrDate);
      ds_master.setCellData(i, "reqAcctDeptCd", scwin.sAcctDeptCd);
      ds_master.setCellData(i, "reqEmpNo", scwin.sEmpNo);
    }
  }
  const params = {
    apprvDocKndCd: vReqApprvDocKndCd,
    reqUserId: vReqUserId,
    epUserId: vEpUsrId,
    apprvTitle: vReqApprvTitle,
    apprvDtlInfo: vApprvDtlInfo,
    ReserCancleList: fineInfo.itemList,
    bmodifyattach: "Y"
  };

  // DataMap에 세팅
  dma_approve.setJSON(params);
  // 여기부터가 핵심: f_aprv처럼 팝업 + POST submit
  let url = "/ac.fm.paymgnt.RequestReserCancleApproveCMD.do";
  let targetName = "aprvPopup"; // 고정 이름 재사용

  var data = dma_approve.getJSON() || {};
  const form = document.createElement("form");
  form.method = "POST";
  form.action = url;
  form.target = targetName;

  // 팝업 차단 회피: 사용자 confirm 이후 즉시 open
  const win = window.open("", targetName);
  if (!win) {
    console.warn("Popup blocked");
    // 필요하면 여기서 alert 처리
    // $c.win.alert("팝업이 차단되었습니다. 팝업 허용 후 다시 시도해 주세요.");
  }
  Object.keys(data).forEach(key => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;

    // 배열/객체는 서버가 JSON 문자열로 받는 구조인지 확인 필요.
    // 보통은 stringify 해서 보내는 게 안전함.
    const val = data[key];
    input.value = val && typeof val === "object" ? JSON.stringify(val) : (val ?? "").toString();
    form.appendChild(input);
  });
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);

  // sbm_savePayDecide.action = "/ac.fm.paymgnt.paymgnt.ProcessPaymentDecideCMD.do";
  // $c.sbm.execute(sbm_savePayDecide);
  scwin.f_Retrieve();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    if ((await $c.gus.cfCheckCreateFlag($p)) == true) {
      await $c.gus.cfTurnCreateFlag($p, false);
    } else {
      if (ds_master.getTotalRow() == 0) {
        await $c.win.alert($p, MSG_CM_WRN_002);
        $c.gus.cfDisableObjects($p, [btn_reserve, btn_reserveLong, btn_reserveCancel]);
      } else {
        ds_master.sort("outbrSlipNo", 0);
        // 보류/장기보류인경우 해제요청만 버튼 enable
        if (acb_payStsCd.getValue() == scwin.RESERVESTS || acb_payStsCd.getValue() == scwin.RESERVESTSLONG) {
          scwin.bRESERVE = true;
          scwin.bRESERVELONG = true;
          scwin.bSEIZURE = false;
          scwin.bWAITSTS = false;
          scwin.bCOLLMONEYWAIT = false;
          scwin.bDECIDE = false;
          //해제요청 버튼은 추후 전자결재로직 추가되면 그때 활성화되도록 - 
          $c.gus.cfEnableObjects($p, [btn_reserveCancel]);
          $c.gus.cfDisableObjects($p, [btn_reserve, btn_reserveLong]);
          gr_master.setColumnVisible("reserRsn", false);
          gr_master.setColumnVisible("cnclRsn", true);

          // 대기인경우 보류,장기보류만 버튼 enable
        } else if (acb_payStsCd.getValue() == scwin.WAITSTS) {
          scwin.bRESERVE = false;
          scwinbRESERVELONG = false;
          scwinbWAITSTS = true;
          scwinbCOLLMONEYWAIT = true;
          scwinbSEIZURE = false;
          scwinbDECIDE = false;
          $c.gus.cfEnableObjects($p, [btn_reserve, btn_reserveLong]);
          $c.gus.cfDisableObjects($p, [btn_reserveCancel]);
          gr_master.setColumnVisible("reserRsn", true);
          gr_master.setColumnVisible("cnclRsn", false);
        } else {
          $c.gus.cfDisableObjects($p, [btn_reserve, btn_reserveLong, btn_reserveCancel]);
          gr_master.setColumnVisible("reserRsn", false);
          gr_master.setColumnVisible("cnclRsn", true);
        }
      }
      ed_totoalRow.setValue(ds_master.getTotalRow());
    }
  }
};
scwin.sbm_savePayDecide_submitdone = async function (e) {
  //저장 후, 

  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    var cancleCheck = 0;
    var reserveCheck = 0;
    for (i = 0; i < ds_master.getTotalRow(); i++) {
      if (ds_master.getCellData(i, "selYn") != "0" && ds_master.getCellData(i, "selYn") == "1") {
        if (ds_master.getCellData(i, "payStsCd") == scwin.CANCLESTS) {
          cancleCheck++;
        } else {
          reserveCheck++;
        }
      }
    }
    if (cancleCheck > 0) {
      // frmReqApprove.submit();
      // document.body.appendChild(form);
      // form.submit();
      // document.body.removeChild(form);
    } else if (reserveCheck > 0) {
      await $c.win.alert($p, MSG_CM_INF_001);
    }
    scwin.f_Retrieve();
    //    cfDisableAllBtn();
  }
};
scwin.gr_master_oncellclick = function (Row, columnIndex, Colid) {
  if (Colid == "outbrSlipNo") {
    $c.gus.cfShowSlipInfo($p, ds_master.getCellData(Row, "outbrSlipNo"));
  }
  if (Colid == "reserRsn") {
    if (ds_master.getCellData(Row, "selYn") == "1") {
      gr_master.setCellReadOnly(Row, "reserRsn", false);
      gr_master.setCellReadOnly(Row, "cnclRsn", true);
    } else {
      gr_master.setCellReadOnly(Row, "reserRsn", true);
      gr_master.setCellReadOnly(Row, "cnclRsn", true);
    }
  } else if (Colid == "cnclRsn") {
    if (ds_master.getCellData(Row, "selYn") == "1") {
      gr_master.setCellReadOnly(Row, "reserRsn", true);
      gr_master.setCellReadOnly(Row, "cnclRsn", false);
    } else {
      gr_master.setCellReadOnly(Row, "reserRsn", true);
      gr_master.setCellReadOnly(Row, "cnclRsn", true);
    }
  }
  if (Colid == "selYn") {
    if (ds_master.getCellData(Row, "selYn") == "0") {
      ds_master.setCellData(Row, "reserRsn", "");
      ds_master.setCellData(Row, "cnclRsn", "");
    } else {}
  }
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_companyInfo_onviewchangeNameEvent = function (info) {
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue('');
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_retrieveClntList_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_clntNo, ed_clntNm);
};
scwin.udc_retrieveClntList_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp('2', "", ed_clntNm, 'F');
};
scwin.udc_retrieveClntList_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '2');
};
scwin.udc_retrieveAcctDept_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_reqAcctDeptCd, ed_reqAcctDeptNm);
};
scwin.udc_retrieveAcctDept_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp('1', "", ed_reqAcctDeptNm, 'F');
};
scwin.udc_retrieveAcctDept_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_reqAcctDeptCd, ed_reqAcctDeptNm, '1');
};
scwin.udc_payCrn_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_payCrn, txt_payCrn, 'F');
};
scwin.udc_payCrn_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp('3', "", txt_payCrn, 'F');
};
scwin.udc_payCrn_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_payCrn, txt_payCrn, '3');
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_reserve_onclick = function (e) {
  scwin.f_Reserve();
};
scwin.btn_reserveLong_onclick = function (e) {
  scwin.f_ReserveLong();
};
scwin.btn_reserveCancel_onclick = function (e) {
  scwin.f_Cancel();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90.00px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm',style:'',code:'coCd',refDataCollection:'dma_condition',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',maxlengthName:'65',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드','ev:onviewchangeNameEvent':'scwin.udc_companyInfo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_payStsCd',style:'width: 100px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급방법',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_payMthdCd',style:'width: 100px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요청일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'qryStDt',refDataMap:'dma_condition',style:'',id:'udc_fromToCalendar1',refEdDt:'qryEndDt',edFromId:'ed_reqStartDt',edToId:'ed_reqEndDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_outbrSlipNo',style:'width: 100px;',maxlength:'10',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_apprvReqNo',style:'width: 100px;',allowChar:'0-9',maxlength:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList',codeId:'ed_clntNo',validTitle:'거래처명',nameId:'ed_clntNm',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_retrieveClntList',mandatoryCode:'true',refDataCollection:'dma_condition',code:'clntNo',name:'',objTypeName:'data',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onclickEvent':'scwin.udc_retrieveClntList_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_retrieveClntList_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_retrieveClntList_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo6',codeId:'ed_reqAcctDeptCd',validTitle:'귀속부서명',nameId:'ed_reqAcctDeptNm',style:'',objTypeCode:'data',allowCharCode:'0-9',id:'udc_retrieveAcctDept',mandatoryCode:'true',refDataCollection:'dma_condition',code:'reqDept',name:'',objTypeName:'data',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onclickEvent':'scwin.udc_retrieveAcctDept_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_retrieveAcctDept_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_retrieveAcctDept_onblurCodeEvent',maxlengthCode:'5'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCrnInfo',codeId:'ed_payCrn',validTitle:'사업자번호',nameId:'txt_payCrn',style:'',objTypeCode:'data',allowCharCode:'0-9',id:'udc_payCrn',mandatoryCode:'true',refDataCollection:'dma_condition',code:'crn',name:'',objTypeName:'data',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onclickEvent':'scwin.udc_payCrn_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_payCrn_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_payCrn_onblurCodeEvent',maxlengthCode:'13'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_GridToExcel',gridID:'gr_master',gridUpYn:'N',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_master_oncellclick',fixedColumn:'7',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'col1',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col2',inputType:'text',style:'',value:'상태',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col3',inputType:'text',style:'',value:'지불방법',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col4',inputType:'text',style:'',value:'요청일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col5',inputType:'text',style:'',value:'요청번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col6',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col7',inputType:'text',style:'',value:'요청금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col8',inputType:'text',style:'',value:'보류사유',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'col9',inputType:'text',style:'',value:'해제사유',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col10',value:'계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col11',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col12',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'col13',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'col14',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col15',value:'전표적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col16',value:'요청사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col17',value:'요청부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col18',value:'요청일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col19',value:'해제일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col20',value:'해제사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col21',value:'지급번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col22',value:'지급등록</br>기준일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col23',value:'지급계좌',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'col24',value:'어음수표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col25',value:'통화코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col26',value:'환율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col27',value:'외화',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payStsCd',inputType:'select',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payMthdCd',inputType:'select',style:'',value:'',width:'100',readOnly:'true',allOption:'',chooseOption:'',ref:'',selectedData:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_payMthdCd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcsnDt',inputType:'text',style:'',value:'',width:'100',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvReqNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqAmt',inputType:'text',style:'',value:'',width:'100',readOnly:'true',displayFormat:'#,###',dataType:'number',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reserRsn',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnclRsn',inputType:'text',style:'',value:'',width:'100',readOnly:'true',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'outbrAcctNm',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outbrAcctDeptNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',style:'',id:'outbrSlipNo',value:'',displayMode:'label',readOnly:'true',class:'linktype'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outbrSummary',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqEmpNo',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqAcctDeptCd',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqDt',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cnclAdmitDt',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cnclAdmitEmpNo',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payNo',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'interPayDt',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payBankAcntNo',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'draftCheckNo',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payCrcCd',value:'',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'payExchRt',value:'',displayMode:'label',readOnly:'true',hidden:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'payAmtFCrc',value:'',displayMode:'label',readOnly:'true',hidden:'true',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',expression:'sum(\'reqAmt\')',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column111',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totoalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{class:'txt-dot',id:'',label:'보류/장기보류 버튼은 대기로 조회 시, 해체요청 버튼은 보류나 장기보류로 조회시에 활성화 됩니다. ',style:''}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_reserve',type:'button',class:'btn',userAuth:'U','ev:onclick':'scwin.btn_reserve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보류'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_reserveLong',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_reserveLong_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장기보류'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_reserveCancel',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_reserveCancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'해제요청'}]}]}]}]}]}]}]}]})