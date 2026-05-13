/*amd /ui/ac/fm/paymgnt/paymgnt/fm_301_02_01b.xml 85134 a8c44973ec50622a41587bd0925c7e6c68149f5dc60ea02d9d828365e8c88677 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'payMthdCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payStsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqDept',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEndDt',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqBankCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payDecideStsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outbrSlipNo',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvReqNo',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'payCrcCd',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dtClsCd',name:'name15',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipKndCd',name:'name16',dataType:'text'}},{T:1,N:'w2:key',A:{id:'status',name:'name17',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name18',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name19',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntLupCond',name:'name20',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'name21',dataType:'text'}},{T:1,N:'w2:key',A:{id:'delYn',name:'name22',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqAmt',name:'name23',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_decide',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'payNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payStsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befPayStsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payMthdCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSlipNo',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptCd',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrAcctDeptNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankCd',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankAcntNo',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnDt',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnEmpNo',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paySlipNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqExchRt',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAmt',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payExchRt',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmtFcrc',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addupDivsCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refPayNo',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'firmBankYn',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'name33',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'name34',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'name35',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtDt',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckAmt',name:'name38',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rate',name:'name39',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sql',name:'name41',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name42',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'name44',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueBankCd',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardNo',name:'name46',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'name47',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndCd',name:'name48',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refSlipNo',name:'name49',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name50',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtClntNo',name:'name51',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setlClsCd',name:'name52',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffYn',name:'name53',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNo',name:'name54',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitEmpNm',name:'name55',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitDt',name:'name56',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitCnclDt',name:'name57',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trustAmt',name:'name58',dataType:'text'}},{T:1,N:'w2:column',A:{id:'faultRate',name:'name59',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cashAmt',name:'name60',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftAmt',name:'name61',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'name62',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'name63',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'name64',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'name65',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalCloseYm',name:'name66',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'name67',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDocOvrDd',name:'name68',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctDeptCd',name:'name69',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrAcctCd',name:'name70',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClntNo',name:'name71',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'name72',dataType:'text'}},{T:1,N:'w2:column',A:{id:'checkNum',name:'name73',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reserRsn',name:'name74',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclRsn',name:'name75',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqEmpNo',name:'name76',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqAcctDeptCd',name:'name77',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'name78',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitDt',name:'name79',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnclAdmitEmpNo',name:'name80',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectDt',name:'name81',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectEmpNo',name:'name82',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reserApprvReqNo',name:'name83',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reserApprvStsCd',name:'name84',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNo',name:'name85',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'name86',dataType:'text'}},{T:1,N:'w2:column',A:{id:'approveDate',name:'name87',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCollectionNum',name:'name88',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidenceCnt',name:'name89',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt2',name:'name90',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId2',name:'name91',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'name92',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm2',name:'name93',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'name94',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count1',name:'name95',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count2',name:'name96',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count3',name:'name97',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count4',name:'name98',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count5',name:'name99',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count6',name:'name100',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count7',name:'name101',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count8',name:'name102',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count9',name:'name103',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count10',name:'name104',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count11',name:'name105',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count12',name:'name106',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count13',name:'name107',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count14',name:'name108',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interDataYn',name:'name109',dataType:'text'}},{T:1,N:'w2:column',A:{id:'interPayDt',name:'name110',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueSlipNo',name:'name111',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exceptSlipYn',name:'name112',dataType:'text'}},{T:1,N:'w2:column',A:{id:'autoSlipYn',name:'name113',dataType:'text'}},{T:1,N:'w2:column',A:{id:'companyCardYn',name:'name114',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxInvoiceYn',name:'name115',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxInvoiceNormalYn',name:'name116',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zeroTaxInvoiceEtcYn',name:'name117',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billYn',name:'name118',dataType:'text'}},{T:1,N:'w2:column',A:{id:'otherEvidYn',name:'name119',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paperTaxInvoiceYn',name:'name120',dataType:'text'}},{T:1,N:'w2:column',A:{id:'invoiceYn',name:'name121',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paperBillYn',name:'name122',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eseroRegYn',name:'name123',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receptYn',name:'name124',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totalEvidCount',name:'name125',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'name126',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errCont',name:'name127',dataType:'text'}},{T:1,N:'w2:column',A:{id:'errYn',name:'name128',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchStDate',name:'name129',dataType:'text'}},{T:1,N:'w2:column',A:{id:'queryDeptSearchEndDate',name:'name130',dataType:'text'}},{T:1,N:'w2:column',A:{id:'beClntNm',name:'name131',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecvMgntNo',name:'name132',dataType:'text'}},{T:1,N:'w2:column',A:{id:'befPaySlipNo',name:'name133',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag',name:'name134',dataType:'text'}},{T:1,N:'w2:column',A:{id:'originSlipKndCd',name:'name135',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDd',name:'name136',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'name137',dataType:'text'}},{T:1,N:'w2:column',A:{id:'writeDt',name:'name138',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bankcd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCdNm',name:'은행명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_delAdminSearch',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payMthdCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'20'}]},{T:1,N:'name',E:[{T:4,cdata:'경비이체'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'30'}]},{T:1,N:'name',E:[{T:4,cdata:'전자결제-현금'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'40'}]},{T:1,N:'name',E:[{T:4,cdata:'전자어음'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'50'}]},{T:1,N:'name',E:[{T:4,cdata:'실물어음'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'60'}]},{T:1,N:'name',E:[{T:4,cdata:'당좌수표'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'70'}]},{T:1,N:'name',E:[{T:4,cdata:'급여이체'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'86'}]},{T:1,N:'name',E:[{T:4,cdata:'받을어음'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'90'}]},{T:1,N:'name',E:[{T:4,cdata:'자동이체'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'95'}]},{T:1,N:'name',E:[{T:4,cdata:'지로납부'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrievePayDecide',action:'/ac.fm.paymgnt.paymgnt.RetrievePaymentContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_decide","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_decide","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrievePayDecide_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_savePayDecide',action:'/ac.fm.paymgnt.paymgnt.PayDeterminationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_decide","key":"IN_DS1"},{"id":"dma_condition","key":"IN_DS2"}]',target:'',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_savePayDecide_submitdone','ev:submiterror':'scwin.sbm_savePayDecide_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_mail',action:'/ac.fi.electaxinvc.AutoReturnMailSendProcessCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_condition","key":"IN_DS1"}',target:'',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_mail_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_bankcd_Retrieve',action:'/ac.fm.stdinfomgnt.RetrieveBankCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_bankcd_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delAdminSearch',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delAdminSearch_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = $c.data.getMemInfo($p);
scwin.privAdmin = scwin.login.privAdmin;
scwin.sysAdminYn = scwin.login.sysAdminYn;
scwin.vUserHomeClsCd = scwin.login.userHomeClsCd;
scwin.vLoginCoCd = scwin.login.coCd;
scwin.vLoginCoClsCd = scwin.login.coClsCd;
scwin.vLoginCoCd2 = "";
scwin.isSubCompany = false;
scwin.sUserId = scwin.login.userId;
scwin.sAcctDeptCd = scwin.login.acctDeptCd;
scwin.sAppDeptNm = scwin.login.acctDeptNm;
scwin.sEmpNo = scwin.login.empNo;
scwin.isFirst = true;

// hidden 컴포넌트
scwin.txtCoClsCd;

// 상태코드 상수
scwin.PREPARESTS = "00"; // 준비
scwin.RESERVESTS = "10"; // 보류
scwin.SEIZURESTS = "15"; // 가압류
scwin.WAITSTS = "20"; // 대기
scwin.CANCLESTS = "21"; // 보류해제로 대기로 넘어감.
scwin.COLLMONEYWAIT = "25"; // 대기
scwin.NONEVDMGNT = "25"; // 무증빙
scwin.DECIDESTS = "30"; // 결정
scwin.DECISIONSTS = "40"; // 확정
scwin.COMPLETE = "50"; // 완료
scwin.RESERVESTSLONG = "11"; // 장기보류
scwin.TRANSFER = "33"; // 택배이관

// 지급방법 상수
scwin.APPROVE = "30"; // 결재

// 상태코드 flag
scwin.bRESERVE = false; // 보류
scwin.bRESERVELONG = false; // 장기보류
scwin.bWAITSTS = false; // 대기
scwin.bNONEVDMGNT = false; // 무증
scwin.bCOLLMONEYWAIT = false; // 상계대기
scwin.bDECIDE = false; // 결정
scwin.bSEIZURE = false; // 가압류

scwin.g_sCurrDate = WebSquare.date.getCurrentServerDate();
scwin.onpageload = async function () {
  const codeOptions = [{
    grpCd: "FM017",
    compID: "acb_payStsCd,gr_paymgnt:payStsCd",
    opt: {
      "range": "1,30"
    }
  }, {
    grpCd: "FM063",
    compID: "acb_reqBankCd"
  },
  // { grpCd: "FM018", compID: "acb_payMthdCd,acb_payMthdCd2,gr_paymgnt:payMthdCd", opt: { "range": "2,20" } },
  {
    grpCd: "ZZ006",
    compID: "acb_payCrcCd"
  }, {
    grpCd: "FM116",
    compID: "acb_acctCd"
  }];
  await $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = function () {
  acb_payMthdCd.setSelectedIndex(0);
  acb_payStsCd.setValue("20");
  ed_reqStartDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_reqEndDt.setValue(scwin.g_sCurrDate);
  ed_reqAcqDt.setValue(scwin.g_sCurrDate);
  acb_payCrcCd.setSelectedIndex(0);
  acb_dt_cls.setSelectedIndex(0);
  lux_clntLupCond.setSelectedIndex(0);
};
scwin.onUdcCompleted = async function () {
  // f_HeaderCreate();
  scwin.f_setCompanyInfo();
  scwin.f_bankcd_Retrieve();
  scwin.f_DelAdminSearch(scwin.sUserId);
  $c.gus.cfDisableObjects($p, [btn_cancel, btn_division, btn_reserve, btn_decide, btn_seizure, btn_delete, btn_batchjob]);
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
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  scwin.pWinClose = pWinCloseTF;
  var rtnList = udc_companyInfo.cfCommonPopUp(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_coCd_callBackFunc = function (rtnList) {
  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    ed_coCd.options.hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분  
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
  if (scwin.isFirst == true) {
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
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_bankcd_Retrieve = function () {
  $c.sbm.execute($p, sbm_bankcd_Retrieve);
};
scwin.sbm_bankcd_Retrieve_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    if (e.responseJSON.GAUCE) {
      ds_bankcd.setJSON(e.responseJSON.GAUCE);
    }
  } catch (e) {
    console.log("sbm_bankcd_Retrieve_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 취소함수
//-------------------------------------------------------------------------
scwin.f_Cancel = async function () {
  var i = 0;
  var cnt = 0;
  if ((await scwin.f_AllProcess("취소")) == false) {
    return false;
  }
  if (ds_decide.getModifiedIndex().length <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("자료"));
    return false;
  } else {
    if (await $c.gus.cfValidate($p, [gr_paymgnt])) {
      for (i = 0; i < ds_decide.getTotalRow(); i++) {
        if (ds_decide.getCellData(i, "selYn") != "0" && ds_decide.getCellData(i, "selYn") == "1") {
          cnt++;
        }
      }
      if (cnt <= 0) {
        await $c.win.alert($p, "취소할 자료가 존재하지않습니다");
        return false;
      }
      if ((await $c.win.confirm($p, "취소하시겠습니까?")) == true) {
        for (i = 0; i < ds_decide.getTotalRow(); i++) {
          //
          if (ds_decide.getCellData(i, "selYn") != "0" && ds_decide.getCellData(i, "selYn") == "1") {
            cnt++;
            if (scwin.bSEIZURE == true || scwin.bCOLLMONEYWAIT == true || scwin.bNONEVDMGNT == true) {
              // 가압류, 상계대기, 무증빙
              ds_decide.setCellData(i, "payStsCd", scwin.WAITSTS); //대기
            } else if (scwin.bWAITSTS == true) {
              //대기
              ds_decide.setCellData(i, "payStsCd", scwin.RESERVESTS); //보류
            } else if (scwin.bDECIDE == true) {
              //결정
              ds_decide.setCellData(i, "payStsCd", scwin.WAITSTS); //대기
              ds_decide.setCellData(i, "payMthdCd", ds_decide.getCellData(i, "reqPayMthdCd"));
              // 문의
              ds_decide.setCellData(i, "dcsnDt", ds_decide.getCellData(i, "payDt"));
            } else if (scwin.bRESERVE == true) {
              //대기
              ds_decide.setCellData(i, "payStsCd", scwin.CANCLESTS); //보류해제로 대기로 넘어
              ds_decide.setCellData(i, "reqDt", scwin.g_sCurrDate);
              ds_decide.setCellData(i, "reqAcctDeptCd", scwin.sAcctDeptCd);
              ds_decide.setCellData(i, "reqEmpNo", scwin.sEmpNo);
            }
          }
        }

        /*
        //보류취소시 자회사 구분  20120307 추가       
        if(txtCoClsCd.value == "0" && ed_coCd.text == "000"){
         tr_savePayDecide.Action = "/ac.fm.paymgnt.paymgnt.ProcessPaymentDecideCMD.do"			  		  
        }else {
         tr_savePayDecide.Action = "/ac.fm.paymgnt.paymgnt.ProcessTransferReserveCancelCMD.do"
        }
        */

        sbm_savePayDecide.action = "/ac.fm.paymgnt.paymgnt.ProcessPaymentDecideCMD.do"; //2016.11.11 통합 
        $c.sbm.execute($p, sbm_savePayDecide);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 삭제함수
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  var i = 0;
  var cnt = 0;
  if ((await scwin.f_AllProcess("삭제")) == false) {
    return false;
  }
  if (ds_decide.getModifiedIndex().length <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("자료"));
    return false;
  } else {
    if (await $c.gus.cfValidate($p, [gr_paymgnt])) {
      for (i = 0; i < ds_decide.getTotalRow(); i++) {
        if (ds_decide.getCellData(i, "selYn") != "0" && ds_decide.getCellData(i, "selYn") == "1") {
          cnt++;
        }
      }
      if (cnt <= 0) {
        await $c.win.alert($p, "삭제할 자료가 존재하지않습니다");
        return false;
      }
      if ((await $c.win.confirm($p, "삭제하시겠습니까?")) == true) {
        for (i = 0; i < ds_decide.getTotalRow(); i++) {
          if (ds_decide.getCellData(i, "selYn") != "0" && ds_decide.getCellData(i, "selYn") == "1") {
            ds_decide.setCellData(i, "delYn", 2);
          }
        }
        sbm_savePayDecide.action = "/ac.fm.paymgnt.paymgnt.ProcessPaymentDecideCMD.do";
        $c.sbm.execute($p, sbm_savePayDecide);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 일괄처리함수
//-------------------------------------------------------------------------
scwin.f_Batchjob = async function () {
  var i = 0;
  var cnt = 0;
  var payMthdCnt = 0;
  var payCrcCdCnt = 0;
  if ((await scwin.f_AllProcess("일괄")) == false) {
    return false;
  }
  if (ds_decide.getModifiedIndex().length <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("자료"));
    return false;
  }
  if (await $c.gus.cfValidate($p, [gr_paymgnt])) {
    for (i = 0; i < ds_decide.getTotalRow(); i++) {
      if (ds_decide.getRowStatus(i) != "R" && ds_decide.getCellData(i, "selYn") == "1") {
        cnt++;
      }
      if (ds_decide.getRowStatus(i) != "R" && ds_decide.getCellData(i, "selYn") == "1" && ds_decide.getCellData(i, "payMthdCd") != "20") {
        payMthdCnt++;
      }
      if (ds_decide.getRowStatus(i) != "R" && ds_decide.getCellData(i, "selYn") == "1" && ds_decide.getCellData(i, "payCrcCd") != "KRW") {
        payCrcCdCnt++;
      }
    }
    if (cnt <= 0) {
      await $c.win.alert($p, "일괄처리 할 자료가 존재하지않습니다");
      return false;
    }
    if (payMthdCnt > 0) {
      await $c.win.alert($p, "경비이체건만 일괄처리 가능합니다");
      return false;
    }
    if (payCrcCdCnt > 0) {
      await $c.win.alert($p, "원화건만 일괄처리 가능합니다");
      return false;
    }
    if ((await $c.win.confirm($p, "일괄처리하시겠습니까?")) == true) {
      for (i = 0; i < ds_decide.getTotalRow(); i++) {
        if (ds_decide.getRowStatus(i) != "R" && ds_decide.getCellData(i, "selYn") == "1") {
          cnt++;
          ds_decide.setCellData(i, "status", "Y");
        }
      }
      sbm_savePayDecide.action = "/ac.fm.paymgnt.paymgnt.ProcessAllPaymentDecideCMD.do";
      $c.sbm.execute($p, sbm_savePayDecide);
    }
  }
};

//-------------------------------------------------------------------------
// 일괄처리 여부 체크함수
//-------------------------------------------------------------------------
scwin.f_AllProcess = async function (msg) {
  for (i = 0; i < ds_decide.getTotalRow(); i++) {
    if (ds_decide.getCellData(i, "status") == "Y" && ds_decide.getRowStatus(i) != "R" && ds_decide.getCellData(i, "selYn") == "1") {
      await $c.win.alert($p, "일괄처리 대상은 " + msg + " 처리 할 수 없습니다. ");
      return false;
    }
  }
};

//-------------------------------------------------------------------------
// 지급결정함수
//-------------------------------------------------------------------------
scwin.f_PayDetermination = async function () {
  var i = 0;
  var cnt = 0;
  if ((await scwin.f_AllProcess("결정")) == false) {
    return false;
  }

  // 필수 입력 여부 Check(부서 날짜 검색시 이용됨)
  if (!(await $c.gus.cfValidate($p, [ed_reqStartDt, ed_reqEndDt]))) {
    return false;
  }
  if (ds_decide.getModifiedIndex().length <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("자료"));
    return false;
  }
  if (await $c.gus.cfValidate($p, [gr_paymgnt])) {
    for (i = 0; i < ds_decide.getTotalRow(); i++) {
      if (ds_decide.getCellData(i, "selYn") != "0" && ds_decide.getCellData(i, "selYn") == "1") {
        cnt++;
      }
    }
    if (cnt <= 0) {
      await $c.win.alert($p, "결정할 자료가 존재하지않습니다");
      return false;
    }
    if ((await $c.win.confirm($p, "결정하시겠습니까?")) == true) {
      for (i = 0; i < ds_decide.getTotalRow(); i++) {
        if (ds_decide.getCellData(i, "selYn") != "0") {
          ds_decide.setCellData(i, "payStsCd", scwin.DECIDESTS);
        }
      }
      //밑에 있는 액션 지우자. bonobono => ac.fm.paymgnt.paymgnt.PayDeterminationCMD.do
      sbm_savePayDecide.action = "/ac.fm.paymgnt.paymgnt.ProcessPaymentDecideCMD.do";
      $c.sbm.execute($p, sbm_savePayDecide);
    }
  }
  // ds_decide.UseChangeInfo = true;
};

//-------------------------------------------------------------------------
// 보류함수
//-------------------------------------------------------------------------
scwin.f_Reserve = async function () {
  var i = 0;
  var cnt = 0;
  if ((await scwin.f_AllProcess("보류")) == false) {
    return false;
  }
  if (ds_decide.getModifiedIndex().length <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("자료"));
    return false;
  }
  if (await $c.gus.cfValidate($p, [gr_paymgnt])) {
    for (i = 0; i < ds_decide.getTotalRow(); i++) {
      if (ds_decide.getRowStatus(i) != "R" && ds_decide.getCellData(i, "selYn") == "1") {
        cnt++;
      }
    }
    if (cnt <= 0) {
      await $c.win.alert($p, "보류할 자료가 존재하지않습니다");
      return false;
    }
    if ((await $c.win.confirm($p, "보류하시겠습니까?")) == true) {
      for (i = 0; i < ds_decide.getTotalRow(); i++) {
        if (ds_decide.getRowStatus(i) != "R" && ds_decide.getCellData(i, "selYn") == "1") {
          cnt++;
          ds_decide.setCellData(i, "payStsCd", scwin.RESERVESTS);
          ds_decide.setCellData(i, "reqDt", scwin.g_sCurrDate);
          ds_decide.setCellData(i, "reqAcctDeptCd", scwin.sAcctDeptCd);
          ds_decide.setCellData(i, "reqEmpNo", scwin.sEmpNo);
        }
      }
      /*
      //보류시 자회사 구분  20120307 추가      
      if(txtCoClsCd.value == "0" && ed_coCd.text == "000"){
          tr_savePayDecide.Action = "/ac.fm.paymgnt.paymgnt.ProcessPaymentDecideCMD.do" 
                }else {		   	 	 
          tr_savePayDecide.Action = "/ac.fm.paymgnt.paymgnt.ProcessTransferReserveCMD.do";		   	 
      }
      */
      sbm_savePayDecide.action = "/ac.fm.paymgnt.paymgnt.ProcessPaymentDecideCMD.do"; //2016.11.11 통합
      $c.sbm.execute($p, sbm_savePayDecide);
    }
  }
  // ds_decide.UseChangeInfo = true;
};

//-------------------------------------------------------------------------
// 가압류함수
//-------------------------------------------------------------------------
scwin.f_Seizure = async function () {
  var i = 0;
  var cnt = 0;
  if ((await scwin.f_AllProcess("가압류")) == false) {
    return false;
  }
  if (ds_decide.getModifiedIndex().length <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("자료"));
    return false;
  }
  if (await $c.gus.cfValidate($p, [gr_paymgnt])) {
    for (i = 0; i < ds_decide.getTotalRow(); i++) {
      if (ds_decide.getRowStatus(i) != "R" && ds_decide.getCellData(i, "selYn") == "1") {
        cnt++;
      }
    }
    if (cnt <= 0) {
      await $c.win.alert($p, "가압류할 자료가 존재하지않습니다");
      return false;
    }
    if ((await $c.win.confirm($p, "가압류하시겠습니까?")) == true) {
      for (i = 0; i < ds_decide.getTotalRow(); i++) {
        if (ds_decide.getRowStatus(i) != "R" && ds_decide.getCellData(i, "selYn") == "1") {
          cnt++;
          ds_decide.setCellData(i, "payStsCd", scwin.SEIZURESTS);
        }
      }
      sbm_savePayDecide.action = "/ac.fm.paymgnt.paymgnt.ProcessPaymentDecideCMD.do";
      $c.sbm.execute($p, sbm_savePayDecide);
    }
  }
  // ds_decide.UseChangeInfo = true;
};

//-------------------------------------------------------------------------
// 분할버튼처리 함수
//-------------------------------------------------------------------------
scwin.f_Division = async function () {
  if ((await scwin.f_AllProcess("분할")) == false) {
    return false;
  }
  if (ds_decide.getModifiedIndex().length <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, Array("자료"));
    return false;
  }
  await $c.win.getParent($p).tac_tabControl1.setSelectedTabIndex(1);
  $c.win.getParent($p).tac_tabControl1.childControlList[1].scope.scwin.param = "1";
  $c.win.getParent($p).tac_tabControl1.childControlList[1].scope.scwin.onpageload();
  for (i = 0; i < ds_decide.getTotalRow(); i++) {
    if (ds_decide.getCellData(i, "selYn") == "1") {
      $c.win.getParent($p).tac_tabControl1.childControlList[1].scope.ds_payment.setJSON([ds_decide.getRowJSON(i)], true);
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
    // 사업자번호 PopUp 호출 	
    case '3':
      sCmdName = "retrieveCrnInfo";
      rtnList = udc_retrieveCrnInfo.cfCommonPopUp(scwin.udc_retrieveCrnInfo_callBack, code, Name, sFlag, null, null, null, null, null, null, null, null, null, null, "F", null, null); // 사업자번호
      break;
    case '4':
      // 전표종류
      sCmdName = "retrieveSlipKndCd";
      rtnList = udc_retrieveSlipKndCd.cfCommonPopUp(scwin.udc_retrieveSlipKndCd_callBack, code, Name, sFlag, null, null, null, null, null, null, null, null, null, null, "F", null, null);
      break;
    default:
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
scwin.udc_retrieveCrnInfo_callBack = function (rtnList) {
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
scwin.udc_retrieveSlipKndCd_callBack = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_slipKndCd.setValue(rtnList[0]); // 코드
    ed_slipKndNm.setValue(rtnList[1]); // 코드명
    ed_slipKndCd.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_slipKndCd.setValue(""); // 코드
    ed_slipKndNm.setValue(""); // 코드명
    ed_slipKndCd.options.hidVal = ""; // 코드
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
scwin.f_openPopUpNm = function (select_code, txtCode, txtName, sFlag) {
  var sCmdName = "";
  var param = '';
  code = "";
  Name = txtName.getValue();
  if (select_code == '1' || select_code == '2') {
    //자회사 회계시스템 추가사항 - 부서,거래처 선택시 회사코드 필수( 2016.09.20)
    if (!cfValidate([ed_coCd])) {
      return;
    }
  }
  var rtnList = new Array();
  switch (select_code) {
    // 관리부서 PopUp 호출
    case '1':
      sCmdName = "retrieveAcctDeptCdInfo6";
      param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd; //자회사 회계시스템 추가사항
      rtnList = udc_retrieveAcctDept.cfCommonPopUp(scwin.udc_retrieveAcctDept_callBack2, code, Name, sFlag, null, null, null, null, param, null, null, null, null, null, null, null, null); // 부서
      break;
    // 거래처 PopUp 호출
    case '2':
      sCmdName = "retrieveClntList";
      param = ",,," + ed_coCd.getValue(); //자회사 회계시스템 추가사항
      rtnList = udc_retrieveClntList.cfCommonPopUp(scwin.udc_retrieveClntList_callBack2, code, Name, sFlag, null, null, null, null, param, null, null, null, null, null, "F", null, null); // 거래처
      break;
    // 사업자번호 PopUp 호출 	
    case '3':
      sCmdName = "retrieveCrnInfo";
      rtnList = udc_retrieveCrnInfo.cfCommonPopUp(scwin.udc_retrieveCrnInfo_callBack2, code, Name, sFlag, null, null, null, null, null, null, null, null, null, null, "F", null, null); // 사업자번호
      break;
    case '4':
      // 전표종류
      sCmdName = "retrieveSlipKndCd";
      rtnList = udc_retrieveSlipKndCd.fCommonPopUp(scwin.udc_retrieveSlipKndCd_callBack2, code, Name, sFlag, null, null, null, null, null, null, null, null, null, null, "F", null, null);
      break;
    default:
      break;
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
    ;
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
      return;
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
scwin.udc_retrieveCrnInfo_callBack2 = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ed_payCrn.setValue(""); // 코드
      txt_payCrn.setValue(""); // 코드명
      ed_payCrn.options.hidVal = ""; // 코드
      return;
    }
    ed_payCrn.setValue(rtnList[0]); // 코드
    txt_payCrn.setValue(rtnList[1]); // 코드명
    ed_payCrn.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_payCrn.setValue(""); // 코드
    txt_payCrn.setValue(""); // 코드명
    ed_payCrn.options.hidVal = ""; // 코드
  }
};
scwin.udc_retrieveSlipKndCd_callBack2 = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ed_slipKndCd.setValue(""); // 코드
      ed_slipKndNm.setValue(""); // 코드명
      ed_slipKndCd.options.hidVal = ""; // 코드
      return;
    }
    ed_slipKndCd.setValue(rtnList[0]); // 코드
    ed_slipKndNm.setValue(rtnList[1]); // 코드명
    ed_slipKndCd.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_slipKndCd.setValue(""); // 코드
    ed_slipKndNm.setValue(""); // 코드명
    ed_slipKndCd.options.hidVal = ""; // 코드
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (chk_delYn.getValue() == "1") {
    dma_condition.set("delYn", "2");
  } else {
    dma_condition.set("delYn", "0");
  }
  dma_condition.set("reqAmt", "0.0");
  dma_condition.set("payMthdCd", acb_payMthdCd.getValue());
  dma_condition.set("payStsCd", acb_payStsCd.getValue());
  // dma_condition.set("payDt",ed_dcsnDt.getValue());
  dma_condition.set("qryStDt", ed_reqStartDt.getValue());
  dma_condition.set("qryEndDt", ed_reqEndDt.getValue());
  dma_condition.set("reqBankCd", acb_reqBankCd.getValue());
  dma_condition.set("payDecideStsCd", acb_payStsCd.getValue());
  dma_condition.set("outbrSlipNo", ed_outbrSlipNo.getValue());
  dma_condition.set("apprvReqNo", ed_apprvReqNo.getValue());
  dma_condition.set("payCrcCd", acb_payCrcCd.getValue());
  dma_condition.set("acctCd", acb_acctCd.getValue());
  dma_condition.set("dtClsCd", acb_dt_cls.getValue());
  dma_condition.set("status", acb_status.getValue());
  dma_condition.set("acctCd", acb_acctCd.getValue());
  dma_condition.set("coClsCd", scwin.txtCoClsCd);
  dma_condition.set("clntLupCond", lux_clntLupCond.getValue());
  if (dma_condition.get("clntLupCond") == "1" && ds_condition.get("clntNo") == '') {
    await $c.win.alert($p, "소속거래처로 검색시 거래처번호는 필수입니다");
    return;
  }
  if ((await $c.gus.cfValidate($p, [ed_coCd])) == true && (await $c.gus.cfValidate($p, [ed_reqStartDt])) == true && (await $c.gus.cfValidate($p, [ed_reqEndDt])) == true) {
    /* 자회사 회계시스템 추가사항 : 불필요함. 필요데이터 바인딩처리했음.( 2016.09.20)
    if(sCoClsCd != "000" && sCoCd != "0"){ //bonobono
        ds_condition.NameValue(1,"coCd") = sCoCd;
        ds_condition.NameValue(1,"coClsCd") = sCoClsCd;
    }
    */
    //alert(lc_payCrcCd.BindColVal);
    // ds_condition.UseChangeInfo = false 
    dma_condition.set("scClsCd", "1");
    //ds_condition.NameValue(1,"payStsCd") = "";
    //ds_condition.NameValue(1,"payDecideStsCd") = "10";
    $c.sbm.execute($p, sbm_retrievePayDecide);
  }
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, table1, null);
  acb_payStsCd.setSelectedIndex(2);
  ed_reqStartDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_reqEndDt.setValue(scwin.g_sCurrDate);
  scwin.f_setCompanyInfo();
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_decide.getTotalRow() <= 0) {
    await $c.win.alert($p, "지급내역이 존재하지않습니다.");
    return false;
  }
  var options = {
    fileName: "지급결정.xlsx",
    sheetName: "지급결정정",
    "useSubTotal": "true",
    "useSubTotalData": "true",
    startRowIndex: 0,
    startColumnIndex: 0,
    type: 1
  };
  $c.data.downloadGridViewExcel($p, gr_paymgnt, options);
};

//-------------------------------------------------------------------------
// 일괄적용함수
//-------------------------------------------------------------------------	
scwin.f_WholeAdoption = async function () {
  var cnt = 0;
  if (ds_decide.getTotalRow() <= 0) {
    await $c.win.alert($p, "자료가 존재하지 않습니다.");
    return false;
  }
  for (var i = 0; i < ds_decide.getTotalRow(); i++) {
    if (ds_decide.getCellData(i, "selYn") == "1") {
      ds_decide.setCellData(i, "dcsnDt", ed_reqAcqDt.getValue());
      ds_decide.setCellData(i, "payMthdCd", acb_payMthdCd2.getValue()); //지불방법 추가 2009.01.16 서주희
    }
  }
};

//-------------------------------------------------------------------------
// 삭제권한관리자 조회함수
//-------------------------------------------------------------------------	
scwin.f_DelAdminSearch = function (sUserId) {
  sbm_delAdminSearch.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC" + "&queryId=retrieveBorrowAcqKindInfo&param1=FM082&param2=" + sUserId;
  $c.sbm.execute($p, sbm_delAdminSearch);
};
scwin.sbm_delAdminSearch_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    if (e.responseJSON.GAUCE) {
      ds_delAdminSearch.setJSON(e.responseJSON.GAUCE);
    }
  } catch (e) {
    console.log("sbm_bankcd_Retrieve_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 승인일자 선택시
//-------------------------------------------------------------------------

scwin.f_ApproveDate = function () {
  //alert(lc_dt_cls.BindColVal);
  if (acb_dt_cls.getValue() == "5") {
    //ed_slipKndCd.text = "A17";
  } else {
    ed_slipKndCd.setValue("");
  }
};
scwin.f_mail = async function () {
  await $c.win.alert($p, "메일발송");
  dma_condition.set("payMthdCd", acb_payMthdCd.getValue());
  dma_condition.set("payStsCd", acb_payStsCd.getValue());
  // dma_condition.set("payDt",ed_dcsnDt.getValue());
  dma_condition.set("qryStDt", ed_reqStartDt.getValue());
  dma_condition.set("qryEndDt", ed_reqEndDt.getValue());
  dma_condition.set("reqBankCd", acb_reqBankCd.getValue());
  dma_condition.set("payDecideStsCd", acb_payStsCd.getValue());
  dma_condition.set("outbrSlipNo", ed_outbrSlipNo.getValue());
  dma_condition.set("apprvReqNo", ed_apprvReqNo.getValue());
  dma_condition.set("payCrcCd", acb_payCrcCd.getValue());
  dma_condition.set("acctCd", acb_acctCd.getValue());
  dma_condition.set("dtClsCd", acb_dt_cls.getValue());
  dma_condition.set("status", acb_status.getValue());
  dma_condition.set("acctCd", acb_acctCd.getValue());
  dma_condition.set("coClsCd", scwin.txtCoClsCd);
  dma_condition.set("clntLupCond", lux_clntLupCond.getValue());
  $c.sbm.execute($p, sbm_mail);
};
scwin.udc_companyInfo_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_companyInfo_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_retrieveCrnInfo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_payCrn, txt_payCrn, 'F');
};
scwin.udc_retrieveCrnInfo_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpNm('3', ed_payCrn, txt_payCrn, 'F');
};
scwin.udc_retrieveCrnInfo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_payCrn, txt_payCrn, '3');
};
scwin.udc_retrieveAcctDept_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_reqAcctDeptCd, ed_reqAcctDeptNm);
};
scwin.udc_retrieveAcctDept_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpNm('1', ed_reqAcctDeptCd, ed_reqAcctDeptNm, 'F');
};
scwin.udc_retrieveAcctDept_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_reqAcctDeptCd, ed_reqAcctDeptNm, '1');
};
scwin.udc_retrieveClntList_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_clntNo, ed_clntNm);
};
scwin.udc_retrieveClntList_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUpNm('2', ed_clntNo, ed_clntNm, 'F');
};
scwin.udc_retrieveClntList_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '2');
};
scwin.udc_retrieveSlipKndCd_onclickEvent = function (e) {
  scwin.f_openPopUp('4', ed_slipKndCd, ed_slipKndNm);
};
scwin.udc_retrieveSlipKndCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_slipKndCd, ed_slipKndNm, '4');
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_mail_onclick = function (e) {
  scwin.f_mail();
};
scwin.btn_batchjob_onclick = function (e) {
  scwin.f_Batchjob();
};
scwin.btn_division_onclick = function (e) {
  scwin.f_Division();
};
scwin.btn_cancel_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.btn_reserve_onclick = function (e) {
  scwin.f_Reserve();
};
scwin.btn_seizure_onclick = function (e) {
  scwin.f_Seizure();
};
scwin.btn_decide_onclick = function (e) {
  scwin.f_PayDetermination();
};
scwin.btn_delete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.sbm_retrievePayDecide_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      if (ds_decide.getTotalRow() == 0) {
        await $c.win.alert($p, MSG_CM_WRN_002);
        $c.gus.cfDisableObjects($p, [btn_cancel, btn_division, btn_reserve, btn_decide, btn_seizure, btn_delete, btn_batchjob]);
      } else {
        // 보류인경우 취소만 버튼 enable
        if (acb_payStsCd.getValue() == scwin.RESERVESTS || acb_payStsCd.getValue() == scwin.RESERVESTSLONG) {
          //보류, 장기보류
          scwin.bRESERVE = true; //보류
          scwin.bSEIZURE = false; //가압류						
          scwin.bWAITSTS = false; //대기
          scwin.bNONEVDMGNT = false; //무증빙
          scwin.bCOLLMONEYWAIT = false; //상계대기
          scwin.bDECIDE = false; //결정
          $c.gus.cfEnableObjects($p, [btn_cancel]);
          $c.gus.cfDisableObjects($p, [btn_division, btn_reserve, btn_decide, btn_seizure, btn_delete, btn_batchjob]);
        } // 상계대기 인경우 분할,결정,보류,가압류,삭제만 버튼 enable
        else if (acb_payStsCd.getValue() == scwin.COLLMONEYWAIT) {
          //상계대기
          scwin.bRESERVE = false;
          scwin.bWAITSTS = true;
          scwin.bCOLLMONEYWAIT = true;
          scwin.bNONEVDMGNT = true;
          scwin.bSEIZURE = false;
          scwin.bDECIDE = true;
          $c.gus.cfEnableObjects($p, [btn_cancel, btn_decide]);
          $c.gus.cfDisableObjects($p, [btn_division, btn_reserve, btn_seizure, btn_delete, btn_batchjob]);
          if (ds_delAdminSearch.getTotalRow <= 0) {
            $c.gus.cfDisableObjects($p, [btn_delete, btn_seizure]);
          } else {
            $c.gus.cfEnableObjects($p, [btn_delete]);
          }
        }

        // 무증빙 인경우 삭제만 버튼 enable
        else if (acb_payStsCd.getValue() == '26') {
          scwin.bNONEVDMGNT = true;
          scwin.bRESERVE = false;
          scwin.bWAITSTS = true;
          scwin.bCOLLMONEYWAIT = true;
          scwin.bSEIZURE = false;
          scwin.bDECIDE = true;
          $c.gus.cfEnableObjects($p, [btn_cancel, btn_decide]);
          $c.gus.cfDisableObjects($p, [btn_division, btn_reserve, btn_seizure, btn_delete]);
          if (ds_delAdminSearch.getTotalRow() <= 0) {
            $c.gus.cfDisableObjects($p, [btn_delete, btn_seizure]);
          } else {
            $c.gus.cfEnableObjects($p, [btn_delete]);
          }
        }

        // 대기인경우 분할,결정,보류,가압류,삭제만 버튼 enable
        else if (acb_payStsCd.getValue() == scwin.WAITSTS) {
          scwin.bRESERVE = false;
          scwin.bWAITSTS = true;
          scwin.bCOLLMONEYWAIT = true;
          scwin.bSEIZURE = false;
          scwin.bNONEVDMGNT = true;
          scwin.bDECIDE = false;
          $c.gus.cfEnableObjects($p, [btn_division, btn_reserve, btn_decide, btn_batchjob]);
          $c.gus.cfDisableObjects($p, [btn_cancel]);
          if (ds_delAdminSearch.getTotalRow() <= 0) {
            $c.gus.cfDisableObjects($p, [btn_delete, btn_seizure]);
          } else {
            $c.gus.cfEnableObjects($p, [btn_delete, btn_seizure]);
          }
        }
        // 결정인경우 취소만 버튼 enable
        else if (acb_payStsCd.getValue() == scwin.DECIDESTS) {
          scwin.bRESERVE = false;
          scwin.bWAITSTS = false;
          scwin.bCOLLMONEYWAIT = false;
          scwin.bSEIZURE = false;
          scwin.bNONEVDMGNT = false;
          scwin.bDECIDE = true;
          $c.gus.cfEnableObjects($p, [btn_cancel]);
          $c.gus.cfDisableObjects($p, [btn_division, btn_reserve, btn_decide, btn_delete, btn_seizure, btn_batchjob]);
        }
        // 가압류인경우 취소만 버튼 enable
        else if (acb_payStsCd.getValue() == scwin.SEIZURESTS) {
          scwin.bRESERVE = false;
          scwin.bWAITSTS = false;
          scwin.bCOLLMONEYWAIT = false;
          scwin.bDECIDE = false;
          scwin.bNONEVDMGNT = false;
          scwin.bSEIZURE = true;
          $c.gus.cfEnableObjects($p, [btn_cancel]);
          $c.gus.cfDisableObjects($p, [btn_division, btn_reserve, btn_decide, btn_seizure, btn_delete, btn_batchjob]);
        } else {
          $c.gus.cfDisableObjects($p, [btn_cancel, btn_division, btn_reserve, btn_decide, btn_seizure, btn_delete, btn_batchjob]);
        }
      }
      ed_totalRow.setValue(ds_decide.getTotalRow());
      // $c.gus.cfShowTotalRows(totalRows,ds_decide.CountRow) ;
    }
    // gr_paymgnt.ColumnProp('selYn', 'HeadCheck') = "FALSE";
  }
};
scwin.sbm_savePayDecide_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.win.alert($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};
scwin.sbm_mail_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.win.alert($p, MSG_CM_INF_001);
  }
};
scwin.gr_paymgnt_oncellclick = async function (Row, columnIndex, Colid) {
  if (Colid == "outbrSlipNo") {
    $c.gus.cfShowSlipInfo($p, ds_decide.getCellData(Row, "outbrSlipNo"));
  }
  if (Colid == "selYn") {
    if (ds_decide.getCellData(Row, "selYn") == "1") {
      if (ds_decide.getCellData(Row, "payStsCd") == "33") {
        await $c.win.alert($p, "택배이관된 건 입니다.");
        ds_decide.undoRow(Row);
        return false;
      }
      if (ds_decide.getCellData(Row, "status") == "Y") {
        ds_decide.undoRow(Row);
        return false;
      }
    }
  }
};

// scwin.gr_paymgnt_onheaderclick = async function (headerId) {
//     if (headerId == "checkHeader") {
//         if (ds_decide.NameValue(i, "payStsCd") != "33" && ds_decide.NameValue(i, "status") != "Y") {
//             ds_decide.NameValue(i, "selYn") = 1;
//         }
//     }
// };

scwin.acb_payMthdCd_onchange = function (info) {
  if (acb_payMthdCd.getValue() != scwin.APPROVE) {
    acb_reqBankCd.setSelectedIndex(0);
    //lc_reqBankCd.Enable = false;
  } else {
    acb_reqBankCd.setDisabled(false);
  }
};
scwin.acb_dt_cls_onchange = function (info) {
  scwin.f_ApproveDate();
};
scwin.btn_clear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_trigger2_onclick = function (e) {
  scwin.f_WholeAdoption();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'table1',class:'w2tb '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:105px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:60px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th '},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'회사코드 ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'popupMgntClntNo',onloadCallbackFunc:'',selectID:'retrieveDongbuGroupCompanyInfo',codeId:'ed_coCd',popupTitle:'회사조회,회사코드,법인명',nameId:'ed_coNm',style:'',code:'coCd',refDataCollection:'dma_condition',btnId:'btn_company',id:'udc_companyInfo',popupGridHeadTitle:'회사코드,temp,temp,temp,temp,회사명',allowCharCode:'0-9',UpperFlagCode:'1',maxlengthCode:'3',mandatoryCode:'true',objTypeCode:'data',maxlengthName:'65',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent',popupGridHiddenColumn:'2,3,4,5,7,8,9,10',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'상태',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width: 150px;',allOption:'',id:'acb_payStsCd',class:'',direction:'auto',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급은행',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_reqBankCd',ref:'',style:'width: 110px;',submenuSize:'fixed'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'지급방법',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width: 204px;',allOption:'',id:'acb_payMthdCd',class:'',direction:'auto',chooseOptionLabel:'전체',ref:'','ev:onchange':'scwin.acb_payMthdCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_payMthdCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'통화 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width: 150px;',allOption:'',id:'acb_payCrcCd',class:'',direction:'auto',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'계정 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width: 150px;',allOption:'',id:'acb_acctCd',class:'',direction:'auto',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chk_delYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'flex-row',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 136px;',allOption:'',id:'acb_dt_cls',class:'req',direction:'auto',ref:'','ev:onchange':'scwin.acb_dt_cls_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'요청일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'회계처리일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'카드승인일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지급등록기준일자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'6'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar2',refEdDt:'',class:'',edFromId:'ed_reqStartDt',edToId:'ed_reqEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'요청번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_apprvReqNo',class:'',maxlength:'8',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'전표번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_outbrSlipNo',class:'',maxlength:'10',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일괄처리',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_status',ref:'',style:'width: 110px;',submenuSize:'fixed'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄처리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미처리'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사업자번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCrnInfo',codeId:'ed_payCrn',validTitle:'',nameId:'txt_payCrn',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'13',id:'udc_retrieveCrnInfo',refDataCollection:'dma_condition',maxlengthName:'50',code:'crn','ev:onclickEvent':'scwin.udc_retrieveCrnInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveCrnInfo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N','ev:onviewchangeNameEvent':'scwin.udc_retrieveCrnInfo_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'귀속부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo6',codeId:'ed_reqAcctDeptCd',validTitle:'',nameId:'ed_reqAcctDeptNm',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'5',id:'udc_retrieveAcctDept',refDataCollection:'dma_condition',maxlengthName:'50',code:'reqDept',skipOnBlurCodeValueEmpty:'N','ev:onclickEvent':'scwin.udc_retrieveAcctDept_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_retrieveAcctDept_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_retrieveAcctDept_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 100px;',allOption:'',id:'lux_clntLupCond',class:'',direction:'auto',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'소속거래처'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList',codeId:'ed_clntNo',validTitle:'거래처명',nameId:'ed_clntNm',style:'',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'6',id:'udc_retrieveClntList',mandatoryCode:'true',refDataCollection:'dma_condition',code:'clntNo',objTypeName:'data','ev:onclickEvent':'scwin.udc_retrieveClntList_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_retrieveClntList_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_retrieveClntList_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표종류',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_slipKndCd',nameId:'ed_slipKndNm',popupID:'',selectID:'retrieveSlipKndCd',style:'',validTitle:'거래처명',id:'udc_retrieveSlipKndCd',btnId:'',refDataCollection:'dma_condition',code:'slipKndCd',objTypeName:'data',objTypeCode:'data','ev:onclickEvent':'scwin.udc_retrieveSlipKndCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveSlipKndCd_onblurCodeEvent',UpperFlagCode:'1',afterAllowCharCode:'0-9',allowCharCode:'A-Za-z0-9',allowCharCodeLength:'1',beforeAllowCharCode:'A-Za-z',maxlengthCode:'3',skipOnBlurCodeValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_clear_onclick',style:'',id:'btn_clear',type:'button',class:'btn ico refresh'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_search',type:'button',class:'btn sch',escape:'false','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'지불방법 ',class:''}},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 150px;',allOption:'',id:'acb_payMthdCd2',class:'',direction:'auto',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_payMthdCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'요청일자',class:''}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_reqAcqDt',class:'',calendarValueType:'yearMonthDate',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger2',type:'button',class:'btn','ev:onclick':'scwin.btn_trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄적용'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_paymgnt',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',fixedColumn:'10',dataList:'data:ds_decide',scrollByColumn:'false',style:'',autoFit:'none',id:'gr_paymgnt',visibleRowNum:'9',class:'wq_gvw',checkReadOnlyOnPasteEnable:'','ev:oncellclick':'scwin.gr_paymgnt_oncellclick',rowStatusVisible:'true',fixedColumnNoMove:'true','ev:onheaderclick':'scwin.gr_paymgnt_onheaderclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'checkHeader',value:'',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'일괄</br>처리',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'color:red',id:'column61',value:'지불</br>방법',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'color: red;',id:'column58',value:'요청일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'회계</br>처리일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'카드</br>승인일자 ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column142',value:'요청</br>번호 ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column139',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column136',value:'요청금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column133',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column130',value:'전표종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column127',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column124',value:'거래처</br>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column121',value:'전표적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column118',value:'사업자</br>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column115',value:'계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column112',value:'지급번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column109',value:'지급등록</br>기준일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column106',value:'지급은행',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column103',value:'지급계좌',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column100',value:'어음수표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column97',value:'통화코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column94',value:'환율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column91',value:'외화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column88',value:'국제여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'오류내역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column82',value:'회사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column79',value:'회사구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column73',value:'소속거래처',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'selYn',value:'',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'autoComplete',style:'',id:'payStsCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'status',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'payMthdCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_payMthdCd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'dcsnDt',value:'',displayMode:'label',mandatory:'true',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'postDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'approveDate',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'apprvReqNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'reqAmt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outbrAcctDeptNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'',style:'',id:'slipKndNm',value:'',displayMode:'label',class:'',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',style:'',id:'outbrSlipNo',value:'',displayMode:'label',class:'linktype',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outbrSummary',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'outbrAcctNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'interPayDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'payBankCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_bankcd'},E:[{T:1,N:'w2:label',A:{ref:'bankCdNm'}},{T:1,N:'w2:value',A:{ref:'bankCd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payBankAcntNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'draftCheckNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'payCrcCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'payExchRt',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',displayFormat:'#,##0.0000',excelFormat:'#,##0.0000',excelCellType:'bigDecimal'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'payAmtFcrc',value:'',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',displayFormat:'#,###.00',excelCellType:'bigDecimal',excelFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'interDataYn',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'errCont',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'coCd',value:'',displayMode:'label',textAlign:'left',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'coClsCd',value:'',displayMode:'label',textAlign:'left',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'beClntNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column144',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column141',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column138',value:'',displayMode:'label',expression:'sum(\'reqAmt\')',textAlign:'right',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column135',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column132',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column129',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column126',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column123',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column120',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column117',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column114',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column111',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column108',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column105',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column102',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column93',value:'',displayMode:'label',expression:'sum(\'payAmtFcrc\')',textAlign:'right',dataType:'float',displayFormat:'#,###.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRow',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_mail',type:'button',class:'btn','ev:onclick':'scwin.btn_mail_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'메일'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_batchjob',type:'button',class:'btn','ev:onclick':'scwin.btn_batchjob_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄처리'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_division',type:'button',class:'btn','ev:onclick':'scwin.btn_division_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'분할'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_cancel',type:'button',class:'btn','ev:onclick':'scwin.btn_cancel_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_reserve',type:'button',class:'btn','ev:onclick':'scwin.btn_reserve_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보류'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_seizure',type:'button',class:'btn','ev:onclick':'scwin.btn_seizure_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가압류'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_decide',type:'button',class:'btn','ev:onclick':'scwin.btn_decide_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'결정'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_delete',type:'button',class:'btn','ev:onclick':'scwin.btn_delete_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]})