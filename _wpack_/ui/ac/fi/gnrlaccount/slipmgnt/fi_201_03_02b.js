/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_03_02b.xml 176430 9d0586e376b32aeaffeacc4c12793544092f81b2ee327e9bb45553317bc56e1e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dma_budget'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntlUnitClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetRsltsAmt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetRsltsSettAmt',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_budgetCheck'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'budgetYm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetRsltsAmt',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_budget'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntlUnitClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetRsltsAmt',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetRsltsSettAmt',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_getMaxCloseYm'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeYm',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retSlip'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_exchRtSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crcCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stdDt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_exchRt'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crcCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdExchRt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsExchRt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellovExchRt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_budget'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntlUnitClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'budgetRsltsAmt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'budgetRsltsSettAmt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_budget_temp'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntlUnitClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'budgetRsltsAmt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'budgetRsltsSettAmt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_budgetCheck'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'budgetYm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'budgetRsltsAmt',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_slip'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipAcctDeptNm',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retSlip',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vatPassClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipcontents',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_slipcontents_onrowpositionchange','ev:oncelldatachange':'scwin.ds_slipcontents_oncelldatachange','ev:onbeforerowpositionchange':'scwin.ds_slipcontents_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizdivCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termMgntYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empMgntYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtMgntYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNoCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'taxinvcDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payProcYn',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'payAcctCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'coCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDivideNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'paymentPrd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatPassClsCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recvProcYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dAmtFcrc',name:'name49',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dAmt',name:'name50',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cAmtFcrc',name:'name51',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cAmt',name:'name52',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'crnNm',name:'사업자명',dataType:'text'}}]},{T:1,N:'w2:data'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_temp',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'slipNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipSeq'}},{T:1,N:'w2:column',A:{dataType:'text',id:'drcrClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'amt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crcCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'exchRt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'amtFcrc'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntEmpNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntEmpNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntClntNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntTermStDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntTermEndDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'opntAcctCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'opntAcctNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bizdivCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bizDomCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'summary'}},{T:1,N:'w2:column',A:{dataType:'text',id:'termMgntYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntMgntYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'empMgntYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dtMgntYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntNoCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqPayMthdCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'draftDdCntCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'taxinvcDt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'payProcYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'payAcctCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'evidClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'deductClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'spplyAmt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'coClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipDivideNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'paymentPrd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vatPassClsCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'recvProcYn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqClntNo'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqClntNm'}},{T:1,N:'w2:column',A:{id:'dAmt',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cAmt',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dAmtFcrc',name:'',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cAmtFcrc',name:'',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_budget_temp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntlUnitClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actAddAmt',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetRsltsSettAmt',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'budgetRsltsAmt',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'remainAmt',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_acctCd',action:'/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=retrieveTransferAcctCdInfo&param5=N',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_acctCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_budgetRt',action:'/ac.co.budgetmgnt.ValidateBudgetRemainAmtCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_budget","key":"OUT_DS1"},{"id":"ds_budget_temp","key":"OUT_DS2"},{"id":"ds_budgetCheck","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_budget","key":"OUT_DS1"},{"id":"ds_budget_temp","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_budgetRt_submitdone','ev:submiterror':'scwin.sbm_budgetRt_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_evidClsCd',action:'/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=retrieveEvidInfo&param3=PCHS',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_evidClsCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_vatPassClsCd',action:'/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=slipmgntGetCommonCodeInfo&param1=FI622&param2=',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_vatPassClsCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getMaxCloseYm',action:'/cm.bc.comnmgnt.closemgnt.RetrieveMaxCloseYmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_search2","key":"IN_DS1"}, {"id":"ds_getMaxCloseYm","key":"OUT_DS1"}',target:'data:json,{"id":"dma_search2","key":"IN_DS1"}, {"id":"ds_getMaxCloseYm","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_getMaxCloseYm_submitdone','ev:submiterror':'scwin.sbm_getMaxCloseYm_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_exchRt',action:'/ac.fm.stdinfomgnt.RetrieveExchangeRateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_exchRtSearch","key":"IN_DS1"}, {"id":"ds_exchRt","key":"OUT_DS1"}',target:'data:json,{"id":"dma_exchRtSearch","key":"IN_DS1"}, {"id":"ds_exchRt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_exchRt_submitdone','ev:submiterror':'scwin.sbm_exchRt_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.gnrlaccount.slipmgnt.ProcessOsideJournalizeSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_slip","key":"IN_DS1"},{"id":"ds_slipcontents","key":"IN_DS2"},{"id":"ds_retSlip","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retSlip","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_201_03_02b
// 이름     : 대체전표입력(업로드)
// 경로     : 회계/재무회계/일반회계/전표관리/
// 작 성 자 : 오영재
// 작 업 일 : 
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

//hidden
scwin.txt_evidClsNm = "";
scwin.systemPathKey;
scwin.txtCoCd = "";
scwin.txtCoClsCd = "";
scwin.txt_opntAcctCostClsCd = "";
scwin.txt_vatPassClsCd = "";
scwin.txt_bizdivCd = "";
scwin.txt_bizDomCd = "";
scwin.txt_termMgntYn = "";
scwin.txt_clntMgntYn = "";
scwin.txt_empMgntYn = "";
scwin.txt_dtMgntYn = "";
scwin.txt_payAcctCd = "";
scwin.txt_tempCostClsCd = "";
scwin.txt_costClsCd = "";
scwin.txt_opntAcctCd = "";
scwin.txt_opntAcctCostClsCd = "";
scwin.txt_tempOpntAcctCostClsCd = "";
scwin.txt_costClsCdCheck = "";
scwin.vCheckStatusUpload;
scwin.privAdmin = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "privAdmin")) ? '' : $c.data.getMemInfo($p, "privAdmin");
scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.today = $c.date.getServerDateTime($p, "yyyyMMdd");

//scwin.systemPathKey =  DFWConstants.FILE_UPLOAD_SYSTEM_PATH ;
//scwin.systemPathVal =  "common/csv/uploadTemp";
//scwin.path = "/WEB-INF/struts_config/pt/co.xml";

scwin.state = "Y";
scwin.delflag = "N";
scwin.ELECTRONICDRAFT = "40"; // 전자어음
scwin.DRAFTCHECK = "50"; // 약속어음
scwin.TRANSFER = "20"; // 이체
scwin.ELECTRIC_CASH = "30"; // 전자결재현금
scwin.vCoCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd"); // 소속 자회사
scwin.vCoClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd"); //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드   
scwin.isSubCompany = false;
scwin.loginCoCd = scwin.vCoCd;
scwin.userId = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "userId")) ? '' : $c.data.getMemInfo($p, "userId");
scwin.userEmpNo = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "empNo")) ? '' : $c.data.getMemInfo($p, "empNo"); // 사용자 사번
scwin.acctDeptCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "acctDeptCd")) ? '' : $c.data.getMemInfo($p, "acctDeptCd");
scwin.acctDeptNm = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "acctDeptNm")) ? '' : $c.data.getMemInfo($p, "acctDeptNm");
scwin.chkExcel = "1";

/* 업로드중 포지션 체인지 이벤트를 막아야 한다. 
1. ds에 행을 인서트 한다.
2. 행의 포지션을 잡는다.
3. 이순간 유효성이 걸린다. 
4. 당연히 값이 없고 안된다.
5. 유효성에 걸리는 값이 있건 없건 업로드는 멈추지 않는다.<- AsIs
*/
scwin.uploadProgressFlag = false;
scwin.onpageload = async function () {
  const codeOptions = [{
    grpCd: "FI002",
    compID: "lc_drcrClsCd"
  }, {
    grpCd: "ZZ006",
    compID: "lc_crcCd"
  }, {
    grpCd: "FI005",
    compID: "lc_deductClsCd"
  },
  //{ grpCd: "FM018", compID: "lc_reqPayMthdCd", opt: { "range": "2,10,20" } }
  {
    grpCd: "FM018",
    compID: "lc_reqPayMthdCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = async function () {
  scwin.f_setCompanyInfo();
  scwin.state = "Y";
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableObjects($p, [btn_mgntClntNo, btn_mgntEmpNo, btn_acctDeptCd, btn_acctCd, chb_payProcYn, chb_recvProcYn, ed_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd]);
};
scwin.ondataload = async function () {
  let dltStr1 = "dlt_commonCodeFM018"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  let dlt2 = $c.gus.object($p, "dlt_commonCodeFM018"); // 객체화
  $c.data.dataListFilter($p, dlt2, "fltrCd2 == '10' || fltrCd2 == '20'"); //$c.data.dataListFilter 함수를 이용해서 필터

  scwin.f_Header();

  //scwin.getMaxCloseYm(); //마감년월 가져오기   (f_Header에서 일자 생성을 하는관계로 위치변경함.) 
  dma_search2.set("coCd", scwin.vCoCd);
  $c.sbm.execute($p, sbm_getMaxCloseYm); //asynchronous -> synchronous 로 변경

  var pCode = dma_slip.get('slipAcctDeptCd');
  var pName = dma_slip.get('slipAcctDeptNm');
  ed_slipAcctDeptCd.setValue(pCode);
  ed_slipAcctDeptNm.setValue(pName);

  //scwin.f_openCommonPopUp(1, ed_slipAcctDeptCd.getValue(), ed_slipAcctDeptNm.getValue(), 'T', 'T');
  //var rtnList = new Array(); 

  let dltStr = "dlt_commonCodeFI002"; // "dlt_commonCode" + 그룹코드값으로 데이터리스트 조합
  let dlt = $c.gus.object($p, dltStr); // 데이터 리스트 객체
  dlt.sort('cd', 0);
  var param = ed_slipDt.getValue().trim() + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;
  udc_slipAcctDeptCd.setSelectId("retrieveAcctDeptCdInfo3");
  await udc_slipAcctDeptCd.cfCommonPopUpAsync(scwin.udc_init_slipAcctDeptCd_cb, pCode, pName, 'T', null, null, null, null, param, null, null, null, null);

  /**
  scwin.f_AddRow();
  //scwin.getMaxCloseYm(); //마감년월 가져오기    
  dma_search2.set("coCd", scwin.vCoCd);
  $c.sbm.execute(sbm_getMaxCloseYm);
  */
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (dma_slip.getModifiedIndex().length == 0 && ds_slipcontents.getModifiedIndex().length == 0) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (ds_slipcontents.getRowCount() == 0) {
    $c.win.alert($p, "데이타가 없습니다.");
    return;
  }
  let countAcctCd1 = 0;
  let countAcctCd2 = 0;
  let ret;
  for (let i = 0; i < ds_slipcontents.getRowCount(); i++) {
    // 2014 05 30 부가세처리제외여부 체크 추가
    // 부가세처리제외여부 공통코드 검색 값이 YES : 부가세처리제외여부 구분값 체크
    if (ds_vatPassClsCd.getRowCount() > 0) {
      // 부가세처리제외여부 구분값 체크 YES : 
      if (ds_slipcontents.getCellData(i, "vatPassClsCd") == "1") {
        // [1111210 부가세대급금-일반] or [2100710 부가세예수금-일반] 여부 YES : 그대로 진행
        if (ds_slipcontents.getCellData(i, "acctCd") == "1111210" || ds_slipcontents.getCellData(i, "acctCd") == "2100710") {
          // [1111210 부가세대급금-일반] or [2100710 부가세예수금-일반] 여부 NO : 부가세처리제외여부 구분값 체크 해제		
        } else {
          ds_slipcontents.setCellData(i, "vatPassClsCd", "0");
        }
        // else 부가세처리제외여부 구분값 체크 NO : 그대로 진행
      } else {
        ds_slipcontents.setCellData(i, "vatPassClsCd", "0");
      }
      // 부가세처리제외여부 공통코드 검색 값이 NO : 부가세처리제외여부 구분값 체크 해제
    } else {
      ds_slipcontents.setCellData(i, "vatPassClsCd", "0");
    }

    // 통장번호 필수 입력 체크(2017.02.27 추가)
    if (ds_slipcontents.getCellData(i, "mgntNo") == "" && ds_slipcontents.getCellData(i, "mgntNm") == "통장번호") {
      $c.win.alert($p, "통장번호는 필수로 입력 하여야 합니다");
      ed_mgntNo.focus();
      return;
    }

    // 부가세처리제외여부 체크안된것만 부가세 체크로직
    if (ds_slipcontents.getCellData(i, "vatPassClsCd") != "" && ds_slipcontents.getCellData(i, "vatPassClsCd") != "1" || ds_slipcontents.getCellData(i, "vatPassClsCd") == "") {
      // 부가세 대급금이면서 대변이 아니거나, 부가세예수금이면서 차변이 아닐경우 이 체크로직을 탄다.
      /*
      if(  (ds_slipcontents.nameValue(i, "acctCd") =="1111210" && ds_slipcontents.nameValue(i, "drcrClsCd") !="C" ) ||  
              (ds_slipcontents.nameValue(i, "acctCd") =="2100710"  && ds_slipcontents.nameValue(i, "drcrClsCd") !="D")  ){              // 1111210 : 부가세대급금-일반, 2100710 : 부가세예수금-일반 
      */
      if (ds_slipcontents.getCellData(i, "acctCd") == "1111210" || ds_slipcontents.getCellData(i, "acctCd") == "2100710") {
        // 1111210 : 부가세대급금-일반, 2100710 : 부가세예수금-일반
        // 부가세 증빙구분 체크
        if (ds_slipcontents.getCellData(i, "evidClsCd") == "" || ds_slipcontents.getCellData(i, "evidClsCd") == null) {
          $c.win.alert($p, i + 1 + "행의 증빙종류가 설정되지 않았습니다.");
          return false;
        }
        if (ds_slipcontents.getCellData(i, "crn") == "") {
          $c.win.alert($p, "부가세 계정일때는 사업자번호를 선택하여야 합니다");
          return;
        }
        if (ds_slipcontents.getCellData(i, "taxinvcDt") == "") {
          $c.win.alert($p, "부가세 계정일때는 세금계산서일자를 선택하여야 합니다");
          return;
        }
        if (ds_slipcontents.getCellData(i, "spplyAmt") == "") {
          $c.win.alert($p, "부가세 계정일때는 공금액을 입력하여야 합니다");
          return;
        }
      } else {
        ds_slipcontents.setCellData(i, "vatPassClsCd", "0");
      }

      //세금계산서일자 형식 체크(2015.04.22 권정민)
      if (ed_taxinvcDt.getValue() != null || ed_taxinvcDt.getValue() != "") {
        ret = await $c.gus.cfValidate($p, [ed_taxinvcDt]);
        if (!ret) return false;
      }
    }
    if (ds_slipcontents.getCellData(i, "acctCd") == "1111310") {
      countAcctCd1++;
    }
    if (ds_slipcontents.getCellData(i, "acctCd") == "1111320") {
      countAcctCd2++;
    }
  }
  if (countAcctCd1 > 0 && countAcctCd2 > 0) {} else {
    if (countAcctCd1 > 0) {
      ret = await $c.win.confirm($p, "선급법인세-법인세분과 선급법인세-지방소득세분 중 한 계정만 선택하셨습니다. 이대로 진행할까요?");
      if (ret == true) {} else {
        return false;
      }
    } else if (countAcctCd2 > 0) {
      ret = await $c.win.confirm($p, "선급법인세-법인세분과 선급법인세-지방소득세분 중 한 계정만 선택하셨습니다. 이대로 진행할까요?");
      if (ret == true) {} else {
        return false;
      }
    }
  }

  // 투입불가 계정이 들어갔는지 체크.
  for (i = 0; i < ds_slipcontents.getRowCount(); i++) {
    for (j = 0; j < ds_acctCd.getRowCount(); j++) {
      if (ds_slipcontents.getCellData(i, "acctCd") == ds_acctCd.getCellData(j, "col1")) {
        $c.win.alert($p, i + 1 + "행에 입력한 계정(" + ds_slipcontents.getCellData(i, "acctCd") + ")은 투입불가 계정입니다.");
        return;
      }
    }
  }

  // 필수 입력사항 체크
  // if (!cfCheckMandatory())
  //     return;

  ret = await scwin.f_Validation();
  if (ret == true) {
    // 차변,대변 체크
    let Dsum = 0;
    let Csum = 0;
    for (i = 0; i < ds_slipcontents.getRowCount(); i++) {
      // 2014 08 05 이경희 : 대체전표입력화면에서 업무가지급발생 차단, 가지급신청(가지급선급금입력) 화면에서 처리하기로 함
      if (scwin.isSubCompany == false) {
        if (ds_slipcontents.getCellData(i, "acctCd") == "1110530" && ds_slipcontents.getCellData(i, "drcrClsCd") == "D") {
          $c.win.alert($p, "[1110530] 단기대여금-업무가지급금(일반)\n계정을 선택할 수 없습니다. \n가지급금선급금입력 화면에서 신청하세요.");
          return;
        }
      }
      if (ds_slipcontents.getCellData(i, "drcrClsCd") == "D") {
        Dsum = Dsum + Number(ds_slipcontents.getCellData(i, "amt"));
      }
      if (ds_slipcontents.getCellData(i, "drcrClsCd") == "C") {
        Csum = Csum + Number(ds_slipcontents.getCellData(i, "amt"));
      }
    }
    if (Dsum != Csum) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, Array("차변과 대변금액"));
      ed_amt.focus();
      return;
    }
    let chkPayAmt = 0;
    let chkSuspenseAmt = 0;
    let payAmt = 0;
    let suspenseAmt = 0;

    //let slipDate = new Date(ed_slipDt.getValue().substring(0, 4), ed_slipDt.getValue().substring(4, 6), ed_slipDt.getValue().substring(6, 8));
    //let slipBfLast = new Date( slipDate.getFullYear(),  (slipDate.getMonth() - 1), 0);
    //let slipBfMm = slipBfLast.getMonth();
    //slipBfMm += 1;			
    //slipBfMm = slipBfMm < 10 ? "0" + slipBfMm : slipBfMm;
    //let slipBfDd = slipBfLast.getDate() < 10 ? "0" + slipBfLast.getDate() : slipBfLast.getDate();
    //let lastDate = String(slipBfLast.getFullYear()) + slipBfMm + slipBfDd;
    //let lastDate = scwin.today.substring(0, 4) + scwin.today.substring(4, 6) + new Date(scwin.today.substring(0, 4), scwin.today.substring(4, 6), 0).getDate(); // 마지막날

    // 전달의 마지막이다 이번달이 아니다. 그리고 오늘 기준이 아니다.
    let lastDate = $c.date.getDateAddMonthDirection($p, ed_slipDt.getValue(), '-1', 'L');
    let bfMmDay = 0;
    let fullDay = 0;
    for (i = 0; i < ds_slipcontents.getRowCount(); i++) {
      stDate = ds_slipcontents.getCellData(i, "mgntTermStDt");
      endDate = ds_slipcontents.getCellData(i, "mgntTermEndDt");
      if (!$c.gus.cfIsNull($p, ds_slipcontents.getCellData(i, "mgntTermStDt")) || !$c.gus.cfIsNull($p, ds_slipcontents.getCellData(i, "mgntTermEndDt"))) {
        bfMmDay = parseInt($c.date.diffDate($p, stDate, lastDate)) + 1;
        fullDay = parseInt($c.date.diffDate($p, stDate, endDate)) + 1;
        if (parseInt($c.date.diffDate($p, stDate, lastDate)) > 0) {
          payAmt = Math.round(bfMmDay / fullDay * Number(ds_slipcontents.getCellData(i, "amt")));
          suspenseAmt = Number(ds_slipcontents.getCellData(i, "amt")) - payAmt;
          chkPayAmt += payAmt;
          chkSuspenseAmt += suspenseAmt;
        } else {
          if (scwin.f_suspenseCheck(ds_slipcontents.getCellData(i, "mgntTermStDt"), ds_slipcontents.getCellData(i, "mgntTermEndDt"), ed_slipDt.getValue())) {
            chkSuspenseAmt += Number(ds_slipcontents.getCellData(i, "amt"));
          } else {
            chkPayAmt += Number(ds_slipcontents.getCellData(i, "amt"));
          }
        }
      }
    }

    //alert("chkSuspenseAmt : " + chkSuspenseAmt + "/ chkPayAmt " + chkPayAmt);
    let chkConfirm = "";
    if (chkSuspenseAmt == 0 && chkPayAmt == 0) {
      chkConfirm = "발행하시겠습니까?";
    } else {
      chkConfirm = "- 당월 비용 " + chkPayAmt + "원," + "\n" + "- 선급 비용 " + chkSuspenseAmt + "원으로 전표 발행됩니다." + "\n" + "발행하시겠습니까?";
    }
    for (i = 0; i < ds_slipcontents.getRowCount(); i++) {
      if (scwin.isSubCompany == false || scwin.vCoCd == "029") {
        if ((ds_slipcontents.getCellData(i, "acctCd") == "2100110" || ds_slipcontents.getCellData(i, "acctCd") == "2100410" || ds_slipcontents.getCellData(i, "acctCd") == "2100810" || ds_slipcontents.getCellData(i, "acctCd") == "2100820" || ds_slipcontents.getCellData(i, "acctCd") == "2100830" || ds_slipcontents.getCellData(i, "acctCd") == "2100890") && ds_slipcontents.getCellData(i, "drcrClsCd") == "C" && ds_slipcontents.getCellData(i, "payProcYn") == 0) {
          ret = await $c.win.confirm($p, i + 1 + " 행 대변 계정에 지급체크가 되어있지 않습니다. 이대로 전표를 발행하시겠습니까?");
          if (ret == true) {} else {
            return false;
          }
        }
      }
    }
    ret = await $c.gus.cfValidate($p, [gr_slipcontents]);
    if (ret) {
      ret = await $c.win.confirm($p, chkConfirm);
      if (ret == true) {
        //tr_save.Post();      
        $c.sbm.execute($p, sbm_save);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 선급비용 여부 체크 2016.11.02
//-------------------------------------------------------------------------   
scwin.f_suspenseCheck = function (FromDt, ToDt, SlipDt) {
  if (SlipDt.substring(0, 6) < FromDt.substring(0, 6)) return true;
  if (FromDt.substring(0, 6) < ToDt.substring(0, 6)) return true;
  return parseInt($c.date.diffDate($p, FromDt, ToDt)) + 1 >= 31;
};
scwin.udc_init_slipAcctDeptCd_cb = async function (rtnList) {
  try {
    // 기본 콜백 로직
    scwin.f_resultPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, rtnList);

    //회사 정보 set
    if (rtnList != null) {
      scwin.txtCoCd = rtnList[8]; //회사코드 
      scwin.txtCoClsCd = rtnList[9]; //회사구분코드	
    }
    scwin.f_setInitObj();

    //초기 설정
    lc_reqPayMthdCd.setValue("");

    //투입불가계정 조회
    await $c.sbm.execute($p, sbm_acctCd);

    //증빙종류 조회
    await $c.sbm.execute($p, sbm_evidClsCd);

    // 부가세처리제외여부 공통코드 조회
    sbm_vatPassClsCd.action = "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=slipmgntGetCommonCodeInfo&param1=FI622&param2=" + scwin.userEmpNo;
    await $c.sbm.execute($p, sbm_vatPassClsCd);
    $c.gus.cfDisableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
    let ret;
    ret = await $c.gus.cfValidate($p, [ed_slipDt, ed_slipAcctDeptCd]);
    if (!ret) return;
    if (!scwin.f_HiddenCheck(ed_slipAcctDeptCd, "발행부서")) return;
    scwin.f_AcctCdCheck();
    if (scwin.state != "Y") {
      ret = await scwin.f_Validation();
      if (ret != true) return;
    }

    // 예산체크
    if (ds_slipcontents.getRowCount() > 0 && scwin.isSubCompany != true) {
      scwin.f_BudgetCheck();
    } else {
      scwin.f_AcctCdCheck();
      //월요일에 다시 체크해보자.
      scwin.state = "N";
      scwin.delflag = "N";
      let row = ds_slipcontents.insertRow();
      ds_slipcontents.setRowPosition(row);
      gr_slipcontents.setFocusedCell(0, 0, false);
      //ds_slipcontents.reform();
      ds_slipcontents.setCellData(row, "dtMgntYn", "1");
      //lc_crcCd.index=0;

      lc_drcrClsCd.setSelectedIndex(1);
      chb_payProcYn.setValue(0);
      scwin.f_EnableYn(ds_slipcontents.getRowCount());
      $c.gus.cfEnableObjects($p, [btn_acctDeptCd, btn_acctCd]);
      $c.gus.cfEnableKeyData($p);
      $c.gus.cfEnableBtnOnly($p, [btn_save]);
      $c.gus.cfEnableObj($p, ed_amtFcrc, false);
      scwin.f_AcctCd('', 0, 0, 0, '', 0, '');
      scwin.f_ReadOnly();
      $c.gus.cfDisableObjects($p, [ed_acctNm, ed_acctDeptNm, ed_mgntClntNm, ed_mgntEmpNm, chb_payProcYn, chb_recvProcYn, ed_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd]);
      $c.gus.cfDisableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
      $c.gus.cfEnableObjects($p, [ed_taxinvcDt, ed_mgntDt]);

      //cfSetIMEModeActiveObjects([txt_summary]);
      lc_reqPayMthdCd.setValue("");
      ed_crnNm.setValue("");
      lc_drcrClsCd.focus();
    }
  } catch (e) {}
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_Add = async function () {
  scwin.f_AcctCdCheck();
  scwin.state = "N";
  scwin.delflag = "N";
  let row;
  row = ds_slipcontents.insertRow();
  ds_slipcontents.setRowPosition(row);
  ds_slipcontents.setCellData(row, "dtMgntYn", "1");
  $c.gus.cfGoPrevPosition($p, gr_slipcontents, row);
  //lc_crcCd.index=0;
  lc_drcrClsCd.setSelectedIndex(1);
  chb_payProcYn.setValue(0);
  scwin.f_EnableYn(ds_slipcontents.getRowCount());
  $c.gus.cfEnableObjects($p, [btn_acctDeptCd, btn_acctCd]);
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
  $c.gus.cfEnableObj($p, ed_amtFcrc, false);
  scwin.f_AcctCd('', 0, 0, 0, '', 0, '');
  scwin.f_ReadOnly();
  $c.gus.cfDisableObjects($p, [ed_acctNm, ed_acctDeptNm, ed_mgntClntNm, ed_mgntEmpNm, chb_payProcYn, chb_recvProcYn, ed_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd]);
  $c.gus.cfDisableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
  $c.gus.cfEnableObjects($p, [ed_taxinvcDt, ed_mgntDt]);

  //cfSetIMEModeActiveObjects([txt_summary]);
  lc_reqPayMthdCd.setValue("");
  ed_crnNm.setValue("");
  lc_drcrClsCd.focus();
};

//-------------------------------------------------------------------------
// readOnly 로처리
//-------------------------------------------------------------------------

scwin.f_ReadOnly = function () {
  // txt_mgntNo.readOnly = true;
  // txt_exchRt.readOnly = true;  
  ed_mgntNm.setReadOnly(true);
};

//-------------------------------------------------------------------------
//  계정조회시화면셋팅
//  r_mgntCd - 관리번호
//  r_termMgntYn - 기간관리여부
//  r_clntMgntYn - 거래처여부
//  r_empMgntYn - 사원관리여부
//  r_mgntNm - 관리사원명
//  r_dtMgntYn - 일자관리여부
//-------------------------------------------------------------------------
scwin.f_AcctCd = function (r_mgntCd, r_clntMgntYn, r_termMgntYn, r_empMgntYn, r_mgntNm, r_dtMgntYn, r_payAcctCd) {
  scwin.txt_termMgntYn = r_termMgntYn;
  scwin.txt_clntMgntYn = r_clntMgntYn;
  scwin.txt_empMgntYn = r_empMgntYn;
  scwin.txt_dtMgntYn = r_dtMgntYn;
  scwin.txt_payAcctCd = r_payAcctCd;
  var rp = ds_slipcontents.getRowPosition();
  if (r_mgntCd != "" && r_mgntCd != "0" || r_mgntNm != "") {
    //txt_mgntNo.value = "";
    ed_mgntNm.setValue(r_mgntNm);
    //ds_slipcontents.setCellData(rp, "mgntNm", r_mgntNm); // 이거 이벤트 호출이 포지션 체인지다 = component는 값이 바뀌기 전이다
    ed_mgntNo.validExp = "관리번호:no:maxByteLength=20";
    $c.gus.cfEnableObj($p, ed_mgntNo, true);
    $c.gus.cfEnableObj($p, ed_mgntNm, false);
  } else {
    ed_mgntNo.setValue("");
    ed_mgntNm.setValue("");
    //ds_slipcontents.setCellData(rp, "mgntNm", "");
    //ds_slipcontents.setCellData(rp, "mgntNo", "");
    ed_mgntNo.validExp = "관리번호:no:maxByteLength=20";
    $c.gus.cfEnableObj($p, ed_mgntNo, false);
    $c.gus.cfEnableObj($p, ed_mgntNm, false);
  }

  // 기간관리여부
  if (r_termMgntYn == "1") {
    ed_mgntTermStDt.validExp = "관리기간:yes:date=YYYYMMDD";
    ed_mgntTermEndDt.validExp = "관리기간:yes:date=YYYYMMDD";
    ed_mgntTermStDt.options.mandatory = true;
    ed_mgntTermEndDt.options.mandatory = true;
    $c.gus.cfEnableObjects($p, [udc_mgntTerm]);
  } else {
    ed_mgntTermStDt.setValue("");
    ed_mgntTermEndDt.setValue("");
    //ds_slipcontents.setCellData(rp, "mgntTermStDt", "");
    //ds_slipcontents.setCellData(rp, "mgntTermEndDt", "");
    ed_mgntTermStDt.validExp = "관리기간:no:date=YYYYMMDD";
    ed_mgntTermEndDt.validExp = "관리기간:no:date=YYYYMMDD";
    ed_mgntTermStDt.options.mandatory = false;
    ed_mgntTermEndDt.options.mandatory = false;
    $c.gus.cfDisableObjects($p, [udc_mgntTerm]);
  }

  // 사원관리여부
  if (r_empMgntYn == "1") {
    ed_mgntEmpNo.validExp = "사원번호:yes:format=000000";
    ed_mgntEmpNo.options.mandatory = true;
    $c.gus.cfEnableObjects($p, [ed_mgntEmpNo, btn_mgntEmpNo]);
  } else {
    ed_mgntEmpNo.setValue("");
    ed_mgntEmpNm.setValue("");
    //ds_slipcontents.setCellData(rp, "mgntEmpNo", "");
    //ds_slipcontents.setCellData(rp, "mgntEmpNm", "");
    ed_mgntEmpNo.validExp = "사원번호:no:format=000000";
    ed_mgntEmpNo.options.mandatory = false;
    $c.gus.cfDisableObjects($p, [ed_mgntEmpNo, btn_mgntEmpNo]);
  }
  ed_mgntDt.validExp = "관리일자:yes:date=YYYYMMDD";
  /** 
  if (ed_taxinvcDt.getValue() == null || ed_taxinvcDt.getValue() == "") {
      //포지션 이동시 값 못 읽는 부분2
      //ed_taxinvcDt.setValue(ed_mgntDt.getValue());
      var tmpMgntDt = ds_slipcontents.getCellData(rp, "mgntDt");
      ds_slipcontents.setCellData(rp, "taxinvcDt", tmpMgntDt);
  }
  */

  if (ds_slipcontents.getCellData(rp, "taxinvcDt") == null || ds_slipcontents.getCellData(rp, "taxinvcDt") == "") {
    //포지션 이동시 값 못 읽는 부분2
    //ed_taxinvcDt.setValue(ed_mgntDt.getValue());
    var tmpMgntDt = ds_slipcontents.getCellData(rp, "mgntDt");
    ds_slipcontents.setCellData(rp, "taxinvcDt", tmpMgntDt);
  }
  $c.gus.cfEnableObjects($p, [ed_mgntDt]);
  if (ed_acctCd.getValue() == "2100710" || ed_acctCd.getValue() == "4101180" || ed_acctCd.getValue() == "1110413") {
    ed_mgntClntNo.validExp = "거래처:yes:format=000000";
    ed_mgntClntNo.options.mandatory = true;
  }

  // 지급계정셋팅
  scwin.f_PayYn();
  if (ed_acctCd.getValue() == ACConstants.ACCTCD_TRUST_SELL && lc_drcrClsCd.getValue() == ACConstants.DEBIT) {
    $c.gus.cfEnableObjects($p, [chb_recvProcYn]);
  } else {
    $c.gus.cfDisableObjects($p, [chb_recvProcYn]);
  }
};

//-------------------------------------------------------------------------
// 지급처리여부셋팅
//------------------------------------------------------------------------- 
scwin.f_PayYn = function () {
  // 지급처리계정 추가(20060411)

  // 클릭 포지션 이동시 셀렉트 값 변경이벤트 보다 먼저 타서 값비교를 이전 값과 하게 되서 ds 값으로 처리
  var rp = ds_slipcontents.getRowPosition();
  var tmpDrcrClsCd = ds_slipcontents.getCellData(rp, 'drcrClsCd');
  tmpDrcrClsCd = !$c.gus.cfIsNull($p, tmpDrcrClsCd) ? tmpDrcrClsCd : lc_drcrClsCd.getValue();

  // if (scwin.txt_payAcctCd != "" &&  lc_drcrClsCd.getValue() == ACConstants.CREDIT && ed_acctCd.getValue() != "1110710") {
  if (scwin.txt_payAcctCd != "" && tmpDrcrClsCd == ACConstants.CREDIT && ed_acctCd.getValue() != "1110710") {
    ed_mgntClntNo.validExp = "거래처:yes:format=000000";
    ed_mgntClntNo.options.mandatory = true;
    $c.gus.cfEnableObjects($p, [ed_mgntClntNo, btn_mgntClntNo]);
    $c.gus.cfEnableObjects($p, [chb_payProcYn]);
    // } else if (scwin.txt_payAcctCd != "" && lc_drcrClsCd.getValue() == ACConstants.DEBIT && ed_acctCd.getValue() == "1110710") {
  } else if (scwin.txt_payAcctCd != "" && tmpDrcrClsCd == ACConstants.DEBIT && ed_acctCd.getValue() == "1110710") {
    $c.gus.cfEnableObjects($p, [chb_payProcYn]);
  } else {
    ds_slipcontents.setCellData(ds_slipcontents.getRowPosition(), "payProcYn", 0);
    // chb_payProcYn.setValue(0);
    $c.gus.cfDisableObjects($p, [chb_payProcYn, ed_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd]);
  }
};
scwin.f_Header = function () {
  //dma_slip.set("slipDt", scwin.today);

  dma_slip.set("slipAcctDeptCd", scwin.acctDeptCd);
  dma_slip.set("slipAcctDeptNm", scwin.acctDeptNm);

  //마감일자 체크시 마감일자가 현재년월인경우 slipDt가 사라지지 않도록 ASIS처럼 수정
  dma_slip.set("slipDt", $c.date.getServerDateTime($p, "yyyyMMdd"));
  lc_crcCd.setValue(ACConstants.KOREA_WON);
  /** 
      const dcoptions = {
          baseNode: "list",
          repeatNode: "map",
          saveRemovedData: "true"
      };
  
      const excelCols = [
          "acctCd",
          "acctNm",
          "payProcYn",
          "recvProcYn",
          "crcCd",
          "exchRt",
          "dAmt",
          "cAmt",
          "dAmtFcrc",
          "cAmtFcrc",
          "mgntNo",
          "acctDeptCd",
          "mgntClntNo",
          "mgntDt",
          "mgntTermStDt",
          "mgntTermEndDt",
          "mgntEmpNo",
          "summary",
          "reqDt",
          "reqPayMthdCd",
          "draftDdCntCd",
          "taxinvcDt",
          "evidClsCd",
          "deductClsCd",
          "crn",
          "spplyAmt",
          "slipDivideNo",
          "opntAcctCd",
          "vatPassClsCd",
          "reqClntNo"
      ];
  
      const excelCols1 = [
          "drcrClsCd",
          "acctCd",
          "payProcYn",
          "crcCd",
          "exchRt",
          "amtFcrc",
          "amt",
          "mgntNo",
          "acctDeptCd",
          "mgntClntNo",
          "mgntDt",
          "mgntTermStDt",
          "mgntTermEndDt",
          "mgntEmpNo",
          "summary",
          "reqDt",
          "reqPayMthdCd",
          "draftDdCntCd",
          "taxinvcDt",
          "evidClsCd",
          "deductClsCd",
          "crn",
          "spplyAmt",
          "slipDivideNo",
          "opntAcctCd",
          "vatPassClsCd",
          "reqClntNo"
      ];
  
      let excelTypes = new Array(excelCols.length).fill("text");
      let excelTypes1 = new Array(excelCols1.length).fill("text");
  
      if (scwin.chkExcel == "0") {
          $c.data.createDataList("ds_excel", excelCols, excelTypes, dcoptions);
          $c.data.createDataList("ds_temp", excelCols, excelTypes, dcoptions);
      } else {
          $c.data.createDataList("ds_excel", excelCols1, excelTypes1, dcoptions);
          $c.data.createDataList("ds_temp", excelCols1, excelTypes1, dcoptions);
      }
      */
};

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
// 업로드 자료 추가
//-------------------------------------------------------------------------
/** 
scwin.f_AddRowUploaded = function () {

    //ds_temp.ImportData(ds_excel.ExportData(1,ds_excel.CountRow,true));
    ds_temp.ImportData(ds_excel.ExportData(1, ds_excel.getRowCount(), true));


    if (ds_temp.getRowCount() > 0) {
        ds_slipcontents.removeAll();

        for (var i = 0; i < ds_temp.getRowCount(); i++) {
            let row = ds_slipcontents.insertRow();
            ds_slipcontents.setRowPosition(row); 포지션 셋팅을 안한다 = 업로드는 변경 이벤트를 안태운다.
            //row = ds_slipcontents.CountRow;
            i = i++;

            //debug
            // alert( "acctCd :" + ds_temp.getCellData(i,"acctCd") + "/ acctNm:" + ds_temp.getCellData(i,"acctNm") + "/ payProcYn:" + ds_temp.getCellData(i,"dpayProcYnAmt")+ "/ recvProcYn:" + ds_temp.getCellData(i,"recvProcYn")
            // 	   + "/ crcCd:" + ds_temp.getCellData(i,"crcCd")+ "/ exchRt:" + ds_temp.getCellData(i,"exchRt")+ "/ dAmt:" + ds_temp.getCellData(i,"dAmt")+ "/ cAmt:" + ds_temp.getCellData(i,"cAmt")
            // 	   + "/ dAmtFcrc:" + ds_temp.getCellData(i,"dAmtFcrc")+ "/ cAmtFcrc:" + ds_temp.getCellData(i,"cAmtFcrc")+ "/ mgntNo:" + ds_temp.getCellData(i,"mgntNo")+ "/ acctDeptCd:" + ds_temp.getCellData(i,"acctDeptCd")
            // 	   + "/ mgntClntNo:" + ds_temp.getCellData(i,"mgntClntNo")+ "/ mgntDt:" + ds_temp.getCellData(i,"mgntDt")+ "/ mgntTermStDt:" + ds_temp.getCellData(i,"mgntTermStDt")+ "/ mgntTermEndDt:" + ds_temp.getCellData(i,"mgntTermEndDt")
            // 	   + "/ mgntEmpNo:" + ds_temp.getCellData(i,"mgntEmpNo")+ "/ summary:" + ds_temp.getCellData(i,"summary")+ "/ reqDt:" + ds_temp.getCellData(i,"reqDt")+ "/ reqPayMthdCd:" + ds_temp.getCellData(i,"reqPayMthdCd")
            // 	   + "/ draftDdCntCd:" + ds_temp.getCellData(i,"draftDdCntCd")+ "/ taxinvcDt:" + ds_temp.getCellData(i,"taxinvcDt")+ "/ evidClsCd:" + ds_temp.getCellData(i,"evidClsCd")
            // 	   + "/ deductClsCd:" + ds_temp.getCellData(i,"deductClsCd")+ "/ crn:" + ds_temp.getCellData(i,"crn")+ "/ spplyAmt:" + ds_temp.getCellData(i,"spplyAmt")+ "/ slipDivideNo:" + ds_temp.getCellData(i,"slipDivideNo")
            // 	   + "/ opntAcctCd:" + ds_temp.getCellData(i,"opntAcctCd")+ "/ vatPassClsCd:" + ds_temp.getCellData(i,"vatPassClsCd"));

            if (scwin.chkExcel == "1") {
                ds_slipcontents.setCellData(row, "drcrClsCd", ds_temp.getCellData(i, "drcrClsCd"));
                ds_slipcontents.setCellData(row, "amtFcrc", ds_temp.getCellData(i, "amtFcrc"));    		// 금액_외화
                ds_slipcontents.setCellData(row, "amt", ds_temp.getCellData(i, "amt"));

            } else {
                if (ds_temp.getCellData(i, "dAmt") != 0 && ds_temp.getCellData(i, "cAmt") != 0) {
                    $c.gus.cfAlertMsg("차변, 대변금액 둘다 입력할 수 없습니다.");
                    return false;
                }

                if (ds_temp.getCellData(i, "dAmt") != 0) {
                    ds_slipcontents.setCellData(row, "drcrClsCd", "D");
                    ds_slipcontents.setCellData(row, "amtFcrc", ds_temp.getCellData(i, "dAmtFcrc"));    		// 금액_외화
                    ds_slipcontents.setCellData(row, "amt", ds_temp.getCellData(i, "dAmt"));      		// 금액
                } else {
                    ds_slipcontents.setCellData(row, "drcrClsCd", "C");
                    ds_slipcontents.setCellData(row, "amtFcrc", ds_temp.getCellData(i, "cAmtFcrc"));    		// 금액_외화
                    ds_slipcontents.setCellData(row, "amt", ds_temp.getCellData(i, "cAmt"));      		// 금액
                }
            }

            let checkAcctCd = ds_temp.getCellData(row, "acctCd").replace(/ /gi, "");

            if (checkAcctCd == '4203417') {
                $c.win.alert("csv 파일의 " + row + "번째 계정코드 원)세금과공과-과징금(4203417) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
                ed_acctCd.setValue("");
                ed_acctNm.setValue("");
                return;
            } else if (checkAcctCd == '5001917') {
                $c.win.alert("csv 파일의 " + row + "번째 계정코드 판)세금과공과-과징금(5001917) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
                ed_acctCd.setValue("");
                ed_acctNm.setValue("");
                return;
            }

            // 각 항목 공백 검사 시작
            ds_temp.setCellData(i, "acctCd", ds_temp.getCellData(row, "acctCd").replace(/ /gi, ""));
            ds_temp.setCellData(i, "acctDeptCd", ds_temp.getCellData(row, "acctDeptCd").replace(/ /gi, ""));
            ds_temp.setCellData(i, "mgntClntNo", ds_temp.getCellData(row, "mgntClntNo").replace(/ /gi, ""));
            ds_temp.setCellData(i, "mgntDt", ds_temp.getCellData(row, "mgntDt").replace(/ /gi, ""));
            ds_temp.setCellData(i, "crn", ds_temp.getCellData(row, "crn").replace(/ /gi, ""));
            ds_temp.setCellData(i, "reqDt", ds_temp.getCellData(row, "reqDt").replace(/ /gi, ""));
            ds_temp.setCellData(i, "taxinvcDt", ds_temp.getCellData(row, "taxinvcDt").replace(/ /gi, ""));
            ds_temp.setCellData(i, "mgntNo", ds_temp.getCellData(row, "mgntNo").replace(/ /gi, ""));
            ds_temp.setCellData(i, "mgntTermStDt", ds_temp.getCellData(row, "mgntTermStDt").replace(/ /gi, ""));
            ds_temp.setCellData(i, "mgntTermEndDt", ds_temp.getCellData(row, "mgntTermEndDt").replace(/ /gi, ""));
            ds_temp.setCellData(i, "mgntEmpNo", ds_temp.getCellData(row, "mgntEmpNo").replace(/ /gi, ""));
            ds_temp.setCellData(i, "opntAcctCd", ds_temp.getCellData(row, "opntAcctCd").replace(/ /gi, ""));
            ds_temp.setCellData(i, "vatPassClsCd", ds_temp.getCellData(row, "vatPassClsCd").replace(/ /gi, ""));
            ds_temp.setCellData(i, "reqClntNo", ds_temp.getCellData(row, "reqClntNo").replace(/ /gi, ""));


            // 공백이 제거된 ds_temp의 길이를 측정
            let lengthOfAcctCd = ds_temp.getCellData(row, "acctCd").length;			// 계정코드 자릿수 검사
            let lengthOfAcctDeptCd = ds_temp.getCellData(row, "acctDeptCd").length;		// 귀속부서 자릿수 검사
            let lengthOfMgntClntNo = ds_temp.getCellData(row, "mgntClntNo").length;		// 거래처코드 자릿수 검사
            let lengthOfMgntDt = ds_temp.getCellData(row, "mgntDt").length;			// 관리일자 자릿수 검사
            let lengthOfCrn = ds_temp.getCellData(row, "crn").length;				// 사업자번호 자릿수 검사				
            let lengthOfReqDt = ds_temp.getCellData(row, "reqDt").length;			// 지급일자 자릿수 검사
            let lengthOfTaxinvcDt = ds_temp.getCellData(row, "taxinvcDt").length;		// 세금계산서일자 자릿수 검사				
            let lengthOfMgntNo = ds_temp.getCellData(row, "mgntNo").length;			// 관리번호 자릿수 검사				
            let lengthOfMgntTermStDt = ds_temp.getCellData(row, "mgntTermStDt").length;		// 관리기간시작일자 자릿수 검사
            let lengthOfMgntTermEndDt = ds_temp.getCellData(row, "mgntTermEndDt").length;	// 관리기간종료일자 자릿수 검사				
            let lengthOfMgntEmpNo = ds_temp.getCellData(row, "mgntEmpNo").length;		// 관리사원번호 자릿수 검사
            let lengthOfOpntAcctCd = ds_temp.getCellData(row, "opntAcctCd").length;		// 상대계정코드 자릿수 검사
            let lengthOfVatPassClsCd = ds_temp.getCellData(row, "vatPassClsCd").length;		// 부가세처리제외여부 구분코드 자릿수 검사
            let lengthOfReqClntNo = ds_temp.getCellData(row, "reqClntNo").length;		// 요청거래처코드 자릿수 검사


            // 부가세처리제외여부 구분코드 자릿수 검사
            if (ds_temp.getCellData(i, "vatPassClsCd") == "") {
                ds_slipcontents.setCellData(row, "vatPassClsCd", "0");
            } else {
                ds_slipcontents.setCellData(row, "vatPassClsCd", ds_temp.getCellData(i, "vatPassClsCd").substring(0, 1));
            }

            // 계정코드 자릿수 검사
            if (lengthOfAcctCd > 7) {
                //cfAlertMsg(i+" 번째 줄 계정 항목의 자릿수를 확인하세요.(7자리)");
                //return false;
                ds_slipcontents.setCellData(row, "acctCd", ds_temp.getCellData(i, "acctCd").substring(0, 7));
                a = ds_slipcontents.getCellData(row, "acctCd");
                //alert(a);					
            } else {
                ds_slipcontents.setCellData(row, "acctCd", ds_temp.getCellData(i, "acctCd"));
            }

            // 상대계정코드 자릿수 검사
            if (lengthOfOpntAcctCd > 7) {
                ds_slipcontents.setCellData(row, "opntAcctCd", ds_temp.getCellData(i, "opntAcctCd").substring(0, 7));
            } else {
                ds_slipcontents.setCellData(row, "opntAcctCd", ds_temp.getCellData(i, "opntAcctCd"));
            }

            // 귀속부서 자릿수 검사
            if (lengthOfAcctDeptCd == 5) {
                ds_slipcontents.setCellData(row, "acctDeptCd", ds_temp.getCellData(i, "acctDeptCd"));
            } else if (lengthOfAcctDeptCd == 4) {
                ds_slipcontents.setCellData(row, "acctDeptCd", "0" + ds_temp.getCellData(i, "acctDeptCd"));
            } else if (lengthOfAcctDeptCd == 3) {
                ds_slipcontents.setCellData(row, "acctDeptCd", "00" + ds_temp.getCellData(i, "acctDeptCd"));
            } else if (lengthOfAcctDeptCd == 2) {
                ds_slipcontents.setCellData(row, "acctDeptCd", "000" + ds_temp.getCellData(i, "acctDeptCd"));
            } else if (lengthOfAcctDeptCd == 1) {
                ds_slipcontents.setCellData(row, "acctDeptCd", "0000" + ds_temp.getCellData(i, "acctDeptCd"));
            } else { //(lengthOfAcctDeptCd > 5)
                ds_slipcontents.setCellData(row, "acctDeptCd", ds_temp.getCellData(i, "acctDeptCd").substring(0, 5));
            }

            // 거래처코드 자릿수 검사
            if (lengthOfMgntClntNo > 6) {
                ds_slipcontents.setCellData(row, "mgntClntNo", ds_temp.getCellData(i, "mgntClntNo").substring(0, 6));
            } else {
                ds_slipcontents.setCellData(row, "mgntClntNo", ds_temp.getCellData(i, "mgntClntNo"));
            }

            if (!(ds_slipcontents.getCellData(row, "mgntClntNo") == null || ds_slipcontents.getCellData(row, "mgntClntNo") == ""))
                ds_slipcontents.setCellData(row, "clntMgntYn", "1");


            if (ds_slipcontents.getCellData(row, "mgntClntNo") != "") { //거래처
                scwin.f_openCommonPopUp(4, ed_mgntClntNo.getValue(), '', 'T', 'T');
            }

            // 요청거래처코드 자릿수 검사
            if (lengthOfReqClntNo > 6) {
                ds_slipcontents.setCellData(row, "reqClntNo", ds_temp.getCellData(i, "reqClntNo").substring(0, 6));
            } else {
                ds_slipcontents.setCellData(row, "reqClntNo", ds_temp.getCellData(i, "reqClntNo"));
            }

            if (ds_slipcontents.getCellData(row, "reqClntNo") != "") { //요청거래처
                scwin.f_openCommonPopUp(8, ed_reqClntNo.getValue(), '', 'T', 'T');
            }

            // 관리일자 자릿수 검사
            if (lengthOfMgntDt > 8) {
                //alert("관리일자 길이가 8보다 더 크네");
                ds_slipcontents.setCellData(row, "mgntDt", ds_temp.getCellData(i, "mgntDt").substring(0, 8));
            } else {
                ds_slipcontents.setCellData(row, "mgntDt", ds_temp.getCellData(i, "mgntDt"));
            }

            //  if ( !(ds_slipcontents.NameValue(row,"mgntDt") == null || ds_slipcontents.NameValue(row,"mgntDt") == "" ) )	
            ds_slipcontents.setCellData(row, "dtMgntYn", "1");		//관리일자여부			

            // 사업자번호 자릿수 검사
            if (lengthOfCrn > 13) {
                ds_slipcontents.setCellData(row, "crn", ds_temp.getCellData(i, "mgntcrnDt").substring(0, 13));
            } else {
                ds_slipcontents.setCellData(row, "crn", ds_temp.getCellData(i, "crn"));
            }

            // 지급일자 자릿수 검사
            if (lengthOfReqDt > 8) {
                ds_slipcontents.setCellData(row, "reqDt", ds_temp.getCellData(i, "reqDt").substring(0, 8));
            } else {
                ds_slipcontents.setCellData(row, "reqDt", ds_temp.getCellData(i, "reqDt"));
            }

            // 세금계산서일자 자릿수 검사
            if (lengthOfTaxinvcDt > 8) {
                ds_slipcontents.setCellData(row, "taxinvcDt", ds_temp.getCellData(i, "taxinvcDt").substring(0, 8));
            } else {
                ds_slipcontents.setCellData(row, "taxinvcDt", ds_temp.getCellData(i, "taxinvcDt"));
            }

            // 관리번호 자릿수 검사
            if (lengthOfMgntNo > 25) {
                ds_slipcontents.setCellData(row, "mgntNo", ds_temp.getCellData(i, "mgntNo").substring(0, 25));
            } else {
                ds_slipcontents.setCellData(row, "mgntNo", ds_temp.getCellData(i, "mgntNo"));
            }

            if ((ds_slipcontents.getCellData(row, "acctCd") == "1210710" || ds_slipcontents.getCellData(row, "acctCd") == "1210110" || ds_slipcontents.getCellData(row, "acctCd") == "1110133"
                || ds_slipcontents.getCellData(row, "acctCd") == "1110140" || ds_slipcontents.getCellData(row, "acctCd") == "1110150" || ds_slipcontents.getCellData(row, "acctCd") == "1110160"
                || ds_slipcontents.getCellData(row, "acctCd") == "1110260" || ds_slipcontents.getCellData(row, "acctCd") == "1110270" || ds_slipcontents.getCellData(row, "acctCd") == "1110280"
                || ds_slipcontents.getCellData(row, "acctCd") == "1110121" || ds_slipcontents.getCellData(row, "acctCd") == "1110210" || ds_slipcontents.getCellData(row, "acctCd") == "1110220"
                || ds_slipcontents.getCellData(row, "acctCd") == "1110230" || ds_slipcontents.getCellData(row, "acctCd") == "1110250" || ds_slipcontents.getCellData(row, "acctCd") == "1110271")
                && ds_slipcontents.getCellData(row, "mgntNo") != "") {
                ds_slipcontents.setCellData(row, "mgntNm", "통장번호");
            }

            // 관리기간시작일자 자릿수 검사
            if (lengthOfMgntTermStDt > 8) {
                ds_slipcontents.setCellData(row, "mgntTermStDt", ds_temp.getCellData(i, "mgntTermStDt").substring(0, 8));
            } else {
                ds_slipcontents.setCellData(row, "mgntTermStDt", ds_temp.getCellData(i, "mgntTermStDt"));
            }

            // 관리기간종료일자 자릿수 검사
            if (lengthOfMgntTermEndDt > 8) {
                ds_slipcontents.setCellData(row, "mgntTermEndDt", ds_temp.getCellData(i, "mgntTermEndDt").substring(0, 8));
            } else {
                ds_slipcontents.setCellData(row, "mgntTermEndDt", ds_temp.getCellData(i, "mgntTermEndDt"));
            }

            // 관리사원번호 자릿수 검사
            if (lengthOfMgntEmpNo > 6) {
                ds_slipcontents.setCellData(row, "mgntEmpNo", ds_temp.getCellData(i, "mgntEmpNo").substring(0, 6));
            } else {
                ds_slipcontents.setCellData(row, "mgntEmpNo", ds_temp.getCellData(i, "mgntEmpNo"));
            }

            //여기서 부터 있는 애들은 위에서 자릿수 검사 안한 애들
            ds_slipcontents.setCellData(row, "summary", ds_temp.getCellData(i, "summary"));		// 적요
            ds_slipcontents.setCellData(row, "reqPayMthdCd", ds_temp.getCellData(i, "reqPayMthdCd"));		// 지급방법
            ds_slipcontents.setCellData(row, "evidClsCd", ds_temp.getCellData(i, "evidClsCd"));   		// 증빙구분코드
            ds_slipcontents.setCellData(row, "deductClsCd", ds_temp.getCellData(i, "deductClsCd"));		// 공제구분
            ds_slipcontents.setCellData(row, "crcCd", ds_temp.getCellData(i, "crcCd"));      		// 통화코드
            ds_slipcontents.setCellData(row, "exchRt", ds_temp.getCellData(i, "exchRt"));     		// 환율
            ds_slipcontents.setCellData(row, "spplyAmt", ds_temp.getCellData(i, "spplyAmt"));			// 공급금액
            ds_slipcontents.setCellData(row, "slipDivideNo", ds_temp.getCellData(i, "slipDivideNo"));		// 전표분할구분								
            ds_slipcontents.setCellData(row, "payProcYn", ds_temp.getCellData(i, "payProcYn"));		// 지급처리여부
            ds_slipcontents.setCellData(row, "draftDdCntCd", ds_temp.getCellData(i, "draftDdCntCd"));		// 어음일수
            ds_slipcontents.setCellData(row, "recvProcYn", ds_temp.getCellData(i, "recvProcYn"));		// 지급처리여부

            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////					

            if (!(ds_slipcontents.getCellData(row, "mgntTermStDt").trim() == null || ds_slipcontents.getCellData(row, "mgntTermStDt").trim() == "")) {
                ds_slipcontents.setCellData(row, "termMgntYn", "1");										// 기간관리여부
            } else {
                ds_slipcontents.setCellData(row, "termMgntYn", "0");
            }

            if (!(ds_slipcontents.getCellData(row, "mgntEmpNo") == null || ds_slipcontents.getCellData(row, "mgntEmpNo") == "")) {
                ds_slipcontents.setCellData(row, "empMgntYn", "1");										// 사원관리여부
            }

            if (ds_slipcontents.getCellData(row, "payProcYn") == "1") {
                ds_slipcontents.setCellData(row, "payAcctCd", "1");										// 지급계정코드
            }

            ds_slipcontents.setCellData(row, "coCd", scwin.vCoCd);
            ds_slipcontents.setCellData(row, "coClsCd", scwin.vCoClsCd);

            ed_acctCd.options.hidVal = ds_slipcontents.getCellData(row, "acctCd");
            ed_acctDeptCd.options.hidVal = ds_slipcontents.getCellData(row, "acctDeptCd");
            ed_mgntClntNo.options.hidVal = ds_slipcontents.getCellData(row, "mgntClntNo");
            ed_mgntEmpNo.options.hidVal = ds_slipcontents.getCellData(row, "mgntEmpNo");

            // 20120927 by kimseok 지로납부일자항목 추가 
            // 지급일자 항목을 추가한다. 				
            ds_slipcontents.setCellData(row, "paymentPrd", ds_slipcontents.getCellData(row, "reqDt"));


            if (ds_slipcontents.getCellData(row, "acctCd") == "2100850" && ds_slipcontents.getCellData(row, "payProcYn") == 1) {
                $c.win.alert(ds_slipcontents.getRowPosition() + "행의 계정(" + ed_acctCd.getValue() + ")은 지급처리가 불가능한 계정입니다. 지급처리 체크가 해제됩니다.");
                chb_payProcYn.setValue(false);
                lc_reqPayMthdCd.setValue("");
                ed_reqDt.setValue("");
                ed_draftDdCntCd.setValue("");
            }

            scwin.f_checkDeptAcctCd(ed_acctCd.options.hidVal, ed_acctDeptCd.options.hidVal);
        }
    }
    //cfShowTotalRows(totalRows, ds_slipcontents.CountRow);
    ed_totalRows.setValue(ds_slipcontents.getRowCount());
    return true;
}
*/

scwin.udc_acctDeptCd_cb = async function (rtnList1) {
  if (rtnList1 != null) {
    if (rtnList1[0] == "N/A") {
      scwin.vCheckStatusUpload = "true";
      return;
    }
    scwin.txt_tempCostClsCd = rtnList1[9]; //비용구분코드비교값
  } else {
    scwin.vCheckStatusUpload = "true";
  }

  //let txt_costClsCdCheck = "";
  // 비용구분 : 01^원가,02^판관비,03^원가+판관비,04^판관비제외,05^원가제외

  scwin.txt_costClsCdCheck = "04"; // 전체조회

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
// Enable/Disable
//-------------------------------------------------------------------------
scwin.f_checkDeptAcctCd = async function (ed_acctCd, ed_acctDeptCd) {
  scwin.vCheckStatusUpload = "false";
  let param = "";
  if (ed_acctDeptCd != null) {
    param = ed_slipDt.getValue().trim() + ",,,,";
    if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
      // 자회사 회계 시스템
      param = ed_slipDt.getValue().trim() + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;
    }
    udc_acctDeptCd.setSelectId("retrieveAcctDeptCdInfo3");
    //rtnList1 = cfCommonPopUp('retrieveAcctDeptCdInfo3',ed_acctDeptCd,'','T',null,null,null,null,param,null,null,null,null); 
    await udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_cb, ed_acctDeptCd, '', 'T', null, null, null, null, param, null, null, null, null);

    //임시로 원가, 판관비 모두 조회되도록.. 작업 끝나면 다시 막아야 됨
    /*
    if(userId == '021169' || userId == 'seok4361' || userId == '120494'){
    //alert("userId : " + userId);
    txt_costClsCdCheck = "04";		// 전체조회
    }
    */

    let where = "";
    where = ed_slipDt.getValue().trim() + "," + scwin.txt_costClsCdCheck + ",Y";

    // 계정조회
    udc_acctCd.setSelectId("retrieveTransferAcctCdInfo");
    //rtnList2 = cfCommonPopUp('retrieveTransferAcctCdInfo',ed_acctCd,'' ,'T',null,null,null,null,where,null,null,null,null); 
    var rtnList = await udc_acctCd.cfCommonPopUpAsync(scwin.udc_acctCd_cb2, ed_acctCd.getValue(), '', 'T', null, null, null, null, where, null, null, null, null);
    if (rtnList != null) {
      if (rtnList2[0] == "N/A") {
        scwin.vCheckStatusUpload = "true";
      }
    } else {
      scwin.vCheckStatusUpload = "true";
    }
  }
  if (scwin.vCheckStatusUpload == "true") {
    $c.win.alert($p, "판관비/원가 부서 구분에 맞는 계정이 upload 자료에 세팅되어야 합니다. 확인하시고 다시 upload 하시기 바랍니다.(" + ed_acctCd + " , " + ed_acctDeptCd + ")");
    //ds_slipcontents.ClearData();
    //ds_temp.ClearData();
    ds_slipcontents.removeAll();
    ds_temp.removeAll();
    return false;
  }
};

//-------------------------------------------------------------------------
// Enable/Disable
//-------------------------------------------------------------------------
scwin.f_EnableYn = function (str) {
  if (str == 1) {
    $c.gus.cfEnableObjects($p, [ed_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm, btn_slipAcctDeptCd]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_slipDt, ed_slipAcctDeptCd, ed_slipAcctDeptNm, btn_slipAcctDeptCd]);
  }
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = function () {
  scwin.state = "Y";
  scwin.delflag = "Y";
  //ds_slipcontents.RowPosition = ds_slipcontents.CountRow;
  //ds_slipcontents.DeleteMarked();
  //$c.data.deleteRow(ds_slipcontents);

  let rp = ds_slipcontents.getRowPosition();
  ds_slipcontents.removeRow(rp);
  ds_slipcontents.setRowPosition(0);
  $c.gus.cfGoPrevPosition($p, gr_slipcontents, 0);
  scwin.f_EnableYn(ds_slipcontents.getRowCount());
  //cfInitHidVal([tbl_id1,tbl_id1]);
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_CancelRow = function () {
  scwin.state = "Y";
  scwin.delflag = "Y";
  //ds_slipcontents.UndoMarked();
  //ds_slipcontents.undoAll();
  let rp = ds_slipcontents.getRowPosition();
  ds_slipcontents.removeRow(rp);
  ds_slipcontents.setRowPosition(0);
  $c.gus.cfGoPrevPosition($p, gr_slipcontents, 0);
  scwin.f_EnableYn(ds_slipcontents.getRowCount());
  //alert(" 12 345 678 90 ".replace(/ /gi, ""));
};

//-------------------------------------------------------------------------
// 히든값체크
//-------------------------------------------------------------------------
scwin.f_HiddenCheck = function (str, msg) {
  //alert(str.text.trim());
  //alert(str.hidVal);
  if (str.getValue().trim() == "") return true;
  if (str.getValue().trim() != str.options.hidVal) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, [msg]);
    //str.SelectAll = "true";
    str.focus();
    return false;
  } else {
    return true;
  }
};

//-------------------------------------------------------------------------
// 대체전표입력화면에서 1110530-업무가지급발생(차변)차단, 
// 가지급신청(가지급선급금입력) 화면에서 처리하기로 함 - 2014 08 05 이경희
//-------------------------------------------------------------------------
scwin.f_AcctCdCheck = function () {
  if (scwin.isSubCompany == false) {
    if (ed_acctCd.getValue() == "1110530") {
      $c.win.alert($p, "[1110530] 단기대여금-업무가지급금(일반)\n계정을 선택할 수 없습니다. \n가지급금선급금입력 화면에서 신청하세요.");
      ed_acctCd.setValue("");
      ed_acctNm.setValue("");
      ed_mgntNm.setValue("");
      ed_acctCd.options.hidVal = "";
      //ed_payAcctCd.setValue("");
      scwin.txt_payAcctCd = "";
      ed_acctCd.focus();
      return false;
    }
  }
  if (scwin.isSubCompany == false) {
    if (lc_drcrClsCd.getValue() == "D" && ed_acctCd.getValue() == "1110410") {
      $c.win.alert($p, "[1110410] 외상매출금-일반 계정을\n[차변]으로 선택할 수 없습니다.");
      ed_acctCd.setValue("");
      ed_acctNm.setValue("");
      ed_mgntNm.setValue("");
      ed_acctCd.options.hidVal = "";
      //ed_payAcctCd.setValue("");
      scwin.txt_payAcctCd = "";
      ed_acctCd.focus();
      return false;
    }
  }
};

//-------------------------------------------------------------------------
//  사업자번호 체크
//-------------------------------------------------------------------------
scwin.f_BizCheck = function () {
  if (ed_crn.getValue().length == 13) {
    ed_crn.validExp = "사업자번호:yes:ssn";
    ed_crn.options.mandatory = true;
  } else if (ed_crn.getValue().length == 10) {
    ed_crn.validExp = "사업자번호:yes:csn";
    ed_crn.options.mandatory = true;
  }
};

//-------------------------------------------------------------------------
// 체크
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  //행이 하나도 없는경우 체크되지 않도록 수정
  if (ds_slipcontents.getRowCount() == 0) return false;
  scwin.f_BizCheck();
  // 자산매각관련하여 금액 0 입력 가능하도록 풀어줌!!!
  // 	    if (!cfValidate([lc_drcrClsCd,lc_crcCd,txt_mgntNo,ed_slipDt,ed_slipAcctDeptCd,lc_drcrClsCd,ed_amt,

  let ret;

  //TOBE 거래처 필수입력에 대한 체크 분기
  if (ed_mgntClntNo.options.mandatory == true) {
    ret = await $c.gus.cfValidate($p, [lc_drcrClsCd, lc_crcCd, ed_mgntNo, ed_slipDt, ed_slipAcctDeptCd, lc_drcrClsCd, ed_acctCd, ed_acctDeptCd, ed_mgntNo, ed_mgntClntNo, ed_mgntDt, ed_mgntTermStDt, ed_mgntTermEndDt, ed_mgntEmpNo, ed_summary, ed_amtFcrc]);
  } else {
    ret = await $c.gus.cfValidate($p, [lc_drcrClsCd, lc_crcCd, ed_mgntNo, ed_slipDt, ed_slipAcctDeptCd, lc_drcrClsCd, ed_acctCd, ed_acctDeptCd, ed_mgntNo, ed_mgntDt, ed_mgntTermStDt, ed_mgntTermEndDt, ed_mgntEmpNo, ed_summary, ed_amtFcrc]);
  }
  if (!ret) {
    return false;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_mgntTermStDt.getValue().trim(), ed_mgntTermEndDt.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_mgntTermStDt.focus();
    return false;
  }

  // 지급처리여부체크
  if (chb_payProcYn.getValue() == 1) {
    if (ed_reqDt.getValue().trim() != "" && lc_reqPayMthdCd.getValue().trim() == "") {
      await $c.gus.cfAlertMsg($p, "지급일자를 입력하면 지급방법은 필수 항목입니다.");
      lc_reqPayMthdCd.focus();
      return false;
    }
    if (ed_reqDt.getValue().trim() == "" && lc_reqPayMthdCd.getValue().trim() != "") {
      await $c.gus.cfAlertMsg($p, "지급방법을 입력하면 지급일자는 필수 항목입니다.");
      ed_reqDt.focus();
      return false;
    }
    if (ed_reqDt.getValue().trim() == "" && ed_taxinvcDt.getValue().trim() == "") {
      await $c.gus.cfAlertMsg($p, "지급일자를 입력하지 않으면 세금계산서 일자는 필수 항목입니다.");
      ed_taxinvcDt.focus();
      return false;
    }
    if (lc_reqPayMthdCd.getValue() == scwin.ELECTRONICDRAFT || lc_reqPayMthdCd.getValue() == scwin.DRAFTCHECK) {
      let ret;
      ret = await $c.gus.cfValidate($p, [ed_draftDdCntCd]);
      if (!ret) return false;
    }
  }
  if (!scwin.f_HiddenCheck(ed_slipAcctDeptCd, "발행부서")) return false;
  if (!scwin.f_HiddenCheck(ed_acctCd, "계정")) return false;
  if (!scwin.f_HiddenCheck(ed_acctDeptCd, "귀속부서")) return false;
  //if(!f_HiddenCheck(ed_mgntClntNo,"거래처")) return false;
  if (!scwin.f_HiddenCheck(ed_mgntEmpNo, "사원번호")) return false;
  return true;
};

//-------------------------------------------------------------------------
// 행추가체크
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  let ret;
  ret = await $c.gus.cfValidate($p, [ed_slipDt, ed_slipAcctDeptCd]);
  if (!ret) return;
  if (!scwin.f_HiddenCheck(ed_slipAcctDeptCd, "발행부서")) return;
  scwin.f_AcctCdCheck();
  if (scwin.state != "Y") {
    ret = await scwin.f_Validation();
    if (ret != true) return;
  }

  // 예산체크
  if (ds_slipcontents.getRowCount() > 0 && scwin.isSubCompany != true) {
    scwin.f_BudgetCheck();
  } else {
    scwin.f_Add();
  }
};

//-------------------------------------------------------------------------
// 예산체크
//-------------------------------------------------------------------------
scwin.f_BudgetCheck = function () {
  //alert("예산체크");
  //alert(ds_budgetCheck.text);
  //ds_budgetCheck.UseChangeInfo = false;
  //tr_budgetRt.Post();	 
  //toBe 멀티 바인딩이 안된다
  /**
   * <C> Col=budgetYm                   Ctrl=ed_slipDt                      Param=text  	       </C> 
   * <C> Col=acctDeptCd                 Ctrl=ed_acctDeptCd                  Param=text  	       </C> 
   * <C> Col=acctCd         		  	   Ctrl=ed_acctCd         		 	   Param=text         </C> 
   * <C> Col=budgetRsltsAmt         	   Ctrl=ed_amt         		 		   Param=text         </C>
   */
  ds_budgetCheck.setJSON([{
    "budgetYm": ed_slipDt.getValue(),
    "acctDeptCd": ed_acctDeptCd.getValue(),
    "acctCd": ed_acctCd.getValue(),
    "budgetRsltsAmt": ed_amt.getValue()
  }]);
  $c.sbm.execute($p, sbm_budgetRt);
};
scwin.sbm_budgetRt_submitdone = function (e) {
  if (ds_budget.getCellAllData(0, "cntlUnitClsCd") == "T") {
    scwin.f_Add();
  } else {
    $c.gus.cfAlertMsg($p, "예산잔액이 부족합니다. 예산잔액을 확인하시기 바랍니다.\n부서:" + ds_budget.getCellAllData(0, "acctDeptNm") + "\n계정:" + ds_budget.getCellAllData(0, "acctCd") + "\n남은예산금액:" + ds_budget.getCellAllData(0, "budgetRsltsAmt") + "\n사용요청금액:" + ds_budget.getCellAllData(0, "budgetRsltsSettAmt"));
  }
};
scwin.sbm_budgetRt_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg == "SUCC") {
    //cfAlertMsg(MSG_CM_INF_001);	// 성공적으로 저장하였습니다 
    if (ds_retSlip.getCellData(0, "slipNo") != "") {
      //cfShowSlipInfo(ds_retSlip.NameValue(1,"slipNo"));
      await $c.win.alert($p, "생성된 전표가 모두 " + ds_retSlip.getRowCount() + " 개 입니다.\n\n전표번호[" + ds_retSlip.getCellData(0, "slipNo") + " ~ " + ds_retSlip.getCellData(ds_retSlip.getRowCount() - 1, "slipNo") + "] 전표가 생성되었습니다.");
    }
    scwin.state = "Y";
    scwin.delflag = "N";
    ds_slipcontents.removeAll();
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfEnableAllBtn($p);

    //onLoad 대체하여 openMenu로 사용 기본 UDC 등 후속 처리가 안되어 대체함.
    strPath = "/ui/ac/fi/gnrlaccount/slipmgnt/fi_201_03_02b.xml";
    menuNm = "대체전표입력(업로드)";
    menuId = "fi_201_03_02b";
    paramObj = {};
    $c.win.openMenu($p, menuNm, strPath, menuId, paramObj, {
      openAction: "exist"
    });
    $c.gus.cfEnableObj($p, ed_slipDt, true);
    $c.gus.cfEnableObj($p, ed_slipAcctDeptCd, true);
    $c.gus.cfEnableObj($p, ed_slipAcctDeptNm, true);
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.sbm_exchRt_submitdone = function (e) {
  ed_exchRt.setValue(ds_exchRt.getCellData(0, "stdExchRt"));
  $c.gus.cfEnableObj($p, ed_amtFcrc, true);
  ed_amtFcrc.focus();
};
scwin.sbm_exchRt_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.lc_crcCd_onchange = function (info) {
  scwin.crcCdChange();
};

//-------------------------------------------------------------------------
//  통화코드변경시
//-------------------------------------------------------------------------
scwin.crcCdChange = function () {
  //alert(lc_crcCd.BindColVal);
  if (lc_crcCd.getValue() == "" || lc_crcCd.getValue() == ACConstants.KOREA_WON) {
    ed_exchRt.setValue("");
    ed_amtFcrc.setValue("");
    $c.gus.cfEnableObj($p, ed_amtFcrc, false);
    lc_crcCd.setValue(ACConstants.KOREA_WON);
    //ed_amtFcrc.validExp="외화금액:no:maxLength=13";
    //ed_amt.focus();
  } else {
    // 자금의 환율테이블 조회(통화코드,작성일자)
    // 통화코드가 외화일경우 외화금액 필수
    //ed_amtFcrc.validExp="외화금액:yes:notAllowed=0&maxLength=13";
    //tr_exchRt.Post();
    dma_exchRtSearch.set("crcCd", lc_crcCd.getValue());
    dma_exchRtSearch.set("stdDt", ed_slipDt.getValue());
    $c.sbm.execute($p, sbm_exchRt);
  }
};
scwin.lc_drcrClsCd_onblur = function (e) {
  //f_CheckComboData(this, "차대구분");
  scwin.f_AcctCdCheck();
};
scwin.ed_amt_onblur = function (e) {
  if (ed_acctCd.getValue() == "1111210" || ed_acctCd.getValue() == "2100710") {
    ed_spplyAmt.setValue(ed_amt.getValue() * 10);
  }
};
scwin.lc_reqPayMthdCd_onchange = function (info) {
  if (lc_reqPayMthdCd.getValue() == scwin.ELECTRONICDRAFT || lc_reqPayMthdCd.getValue() == scwin.DRAFTCHECK) {
    $c.gus.cfEnableObjects($p, [ed_draftDdCntCd]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_draftDdCntCd]);
  }
  if (lc_reqPayMthdCd.getValue() == scwin.ELECTRIC_CASH || lc_reqPayMthdCd.getValue() == scwin.TRANSFER) {
    $c.gus.cfEnableObjects($p, [lc_crcCd]);
  } else {
    $c.gus.cfDisableObjects($p, [lc_crcCd]);
  }
  ed_draftDdCntCd.setValue(0);
};

/*
<!-- 계정구분변경시 -->
<script language=JavaScript for=lc_drcrClsCd event=onSelChange()>
*/
scwin.lc_drcrClsCd_onviewchange = function (info) {
  scwin.f_PayYn();
  var rp = ds_slipcontents.getRowPosition();
  var tmpAcctCd = ds_slipcontents.getCellData(rp, "acctCd");
  var tmpDrcrClsCd = ds_slipcontents.getCellData(rp, "drcrClsCd");
  if (ed_acctCd.getValue() == ACConstants.ACCTCD_TRUST_SELL && lc_drcrClsCd.getValue() == ACConstants.DEBIT) {
    //if ( tmpAcctCd == ACConstants.ACCTCD_TRUST_SELL && tmpDrcrClsCd == ACConstants.DEBIT) {
    $c.gus.cfEnableObjects($p, [chb_recvProcYn]);
  } else {
    chb_recvProcYn.setValue(0);
    $c.gus.cfDisableObjects($p, [chb_recvProcYn]);
  }
};

/*
<!-- 데이타셋 속성제어-->
<script language=JavaScript for=ds_slipcontents event=OnRowPosChanged(row)>
*/
scwin.ds_slipcontents_onrowpositionchange = function (info) {
  if ($c.gus.cfIsNull($p, info.oldRowIndex) || $c.gus.cfIsNull($p, info.newRowIndex)) {
    return false;
  }
  let row = info.newRowIndex;
  scwin.crcCdChange();
  scwin.txt_payAcctCd = ds_slipcontents.getCellData(row, "payAcctCd");
  scwin.f_AcctCd(ds_slipcontents.getCellData(row, "mgntNo"), ds_slipcontents.getCellData(row, "clntMgntYn"), ds_slipcontents.getCellData(row, "termMgntYn"), ds_slipcontents.getCellData(row, "empMgntYn"), ds_slipcontents.getCellData(row, "mgntNm"), ds_slipcontents.getCellData(row, "dtMgntYn"), ds_slipcontents.getCellData(row, "payAcctCd"));
  $c.gus.cfDisableObjects($p, [ed_acctNm, ed_acctDeptNm, ed_mgntClntNm, ed_mgntEmpNm]);
  ed_slipAcctDeptCd.options.hidVal = dma_slip.get("slipAcctDeptCd");
  ed_acctCd.options.hidVal = ds_slipcontents.getCellData(row, "acctCd");
  ed_acctDeptCd.options.hidVal = ds_slipcontents.getCellData(row, "acctDeptCd");
  ed_mgntClntNo.options.hidVal = ds_slipcontents.getCellData(row, "mgntClntNo");
  ed_mgntEmpNo.options.hidVal = ds_slipcontents.getCellData(row, "mgntEmpNo");

  // 선급비용-일반 계정일때 상대계정필드 활성화
  if (ds_slipcontents.getCellData(row, "acctCd") == "1111110") {
    $c.gus.cfEnableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
  }
  if (ds_slipcontents.getCellData(row, "acctCd") == "2100850" && ds_slipcontents.getCellData(row, "payProcYn") == 1) {
    $c.win.alert($p, ds_slipcontents.getRowPosition() + 1 + "행의 계정(" + ed_acctCd.getValue() + ")은 지급처리가 불가능한 계정입니다. 지급처리 체크가 해제됩니다.");
    chb_payProcYn.setValue(0);
    lc_reqPayMthdCd.setValue("");
    ed_reqDt.setValue("");
    ed_draftDdCntCd.setValue("");
    $c.gus.cfDisableObjects($p, [chb_payProcYn, ed_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd]);
  }
  if (ds_slipcontents.getCellData(row, "acctCd") == "2100850") {
    chb_payProcYn.setValue(0);
    lc_reqPayMthdCd.setValue("");
    ed_reqDt.setValue("");
    ed_draftDdCntCd.setValue("");
    $c.gus.cfDisableObjects($p, [chb_payProcYn, ed_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd]);
  }
};

/*
<!-- 그리드 로우를 변경하려고 할 경우 - 필수항목 체크-->
<script language=JavaScript for=ds_slipcontents event=CanRowPosChange(row)>
*/
scwin.ds_slipcontents_onbeforerowpositionchange = async function (info) {
  if ($c.gus.cfIsNull($p, info.oldRowIndex) || $c.gus.cfIsNull($p, info.newRowIndex) || scwin.uploadProgressFlag) {
    return false;
  }
  if (scwin.delflag == "N") {
    scwin.state = "N";
    scwin.delflag = "N";
    let ret;
    ret = await scwin.f_Validation(info.oldRowIndex);
    if (!ret) {
      return false;
    } else {
      return true;
    }
  } else {
    scwin.state = "N";
    scwin.delflag = "N";
    return true;
  }

  /*
  let ret;
  ret = await scwin.f_Validation();
  if (ds_slipcontents.getRowCount() != 0 && scwin.delflag == "N" && !ret) {
      scwin.state = "N";
      scwin.delflag = "N";
      ds_slipcontents.setRowPosition(info.oldRowIndex);
      gr_slipcontents.setFocusedCell(info.oldRowIndex, 0, false);
      return false;
  } else {
      scwin.state = "N";
      scwin.delflag = "N";
      return true;
  }
  */
};
scwin.udc_slipAcctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_slipAcctDeptCd.getValue(), ed_slipAcctDeptNm.getValue(), 'T', 'T');
};
scwin.udc_acctCd_onblurCodeEvent = function (e) {
  // 결과값 가지고 왔을때 원)세금과공과-과징금(4203417), 판)세금과공과-과징금(5001917) 계정일 경우
  // 잡손실(6120220)계정으로 작성해 주시기 바랍니다. 라는 메시지 출력해 준다.
  if (ed_acctCd.getValue() == '4203417') {
    $c.win.alert($p, "원)세금과공과-과징금(4203417) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
    ed_acctCd.setValue("");
    ed_acctNm.setValue("");
    return;
  } else if (ed_acctCd.getValue() == '5001917') {
    $c.win.alert($p, "판)세금과공과-과징금(5001917) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
    ed_acctCd.setValue("");
    ed_acctNm.setValue("");
    return;
  }
  if (ed_acctCd.getValue().trim() == "") ed_mgntNm.setValue("");
  scwin.f_AcctCdCheck();

  // f_chkOpenCommonPopUp(this, txt_acctNm, 2,true);
  scwin.f_openCommonPopUp(2, ed_acctCd.getValue(), ed_acctNm.getValue(), 'T', 'T');
  // 계정코드가 외상매입 , 미지급비용(거래처) , 미지급비용(사원) 일경우 지급처리여부 Enable
  if (ed_acctCd.getValue() == "2100110" || ed_acctCd.getValue() == "2100810" || ed_acctCd.getValue() == "2100820") {
    chb_payProcYn.setDisabled(false);
  } else {
    chb_payProcYn.setDisabled(true);
  }
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

/*
* 자회사 회계 시스템 추가에 따라 회사 코드가 변경되면 reset
*/
scwin.f_setInitObj = function () {
  $c.gus.cfInitObjects($p, [ed_crn, ed_crnNm]); // Grid- 사업자번호 
  $c.gus.cfInitObjects($p, [ed_acctDeptCd, ed_acctDeptNm]); // Grid- 귀속부서     
  $c.gus.cfInitObjects($p, [ed_mgntClntNo, ed_mgntClntNm]); // Grid- 거래처 
  $c.gus.cfInitObjects($p, [ed_mgntEmpNo, ed_mgntEmpNm]); // Grid- 사원번호 
  $c.gus.cfInitObjects($p, [ed_reqClntNo, ed_reqClntNm]); // Grid- 요청거래처 
};
scwin.udc_slipAcctDeptCd_cb = function (rtnList) {
  scwin.f_resultPopEd(ed_slipAcctDeptCd, ed_slipAcctDeptNm, rtnList);

  //회사 정보 set
  if (rtnList != null) {
    scwin.txtCoCd = rtnList[8]; //회사코드 
    scwin.txtCoClsCd = rtnList[9]; //회사구분코드	
  }
  scwin.f_setInitObj();
};

//클릭과 블러 일떄는 계정셋팅이 있고 아닐때는 없다.
scwin.udc_acctCd_cb = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_acctCd.setValue(rtnList[0]); //계정코드
    ed_acctNm.setValue(rtnList[1]); //계정명
    ed_acctCd.options.hidVal = rtnList[0]; // 히든값

    scwin.f_AcctCdCheck();

    // 계정셋팅
    scwin.f_AcctCd(rtnList[4], rtnList[5], rtnList[6], rtnList[7], rtnList[8], rtnList[9], rtnList[10]);
  } else {
    ed_acctCd.setValue("");
    ed_acctNm.setValue("");
    ed_mgntNm.setValue("");
    ed_acctCd.options.hidVal = "";
    //ed_payAcctCd.setValue("");
    scwin.txt_payAcctCd = "";
  }
};

//이게 콜백을 안하면 우린 값이 사라진다..
scwin.udc_acctCd_cb2 = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_acctCd.setValue(rtnList[0]); //계정코드
    ed_acctNm.setValue(rtnList[1]); //계정명
    ed_acctCd.options.hidVal = rtnList[0]; // 히든값
  } else {
    ed_acctCd.setValue("");
    ed_acctNm.setValue("");
    ed_mgntNm.setValue("");
    ed_acctCd.options.hidVal = "";
    //ed_payAcctCd.setValue("");
    scwin.txt_payAcctCd = "";
  }
};
scwin.udc_acctDeptCd_cb = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_acctDeptCd.setValue(rtnList[0]); //부서코드 --
    ed_acctDeptNm.setValue(rtnList[1]); //부서명-- 
    //	txt_bizdivCd.value   = rtnList[2];	//사업부코드
    scwin.txt_bizDomCd = rtnList[3]; //사업영역코드 --
    ed_acctDeptCd.options.hidVal = rtnList[0]; // 히든값
    scwin.txtCoCd = rtnList[4]; //회사코드 --
    scwin.txtCoClsCd = rtnList[5]; // 회사구분	--
    scwin.txt_tempCostClsCd = rtnList[9]; //비용구분코드비교값
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
    scwin.txt_bizdivCd = "";
    scwin.txt_bizDomCd = "";
    ed_acctDeptCd.options.hidVal = "";
  }
};
scwin.udc_mgntClntNo_cb = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_mgntClntNo.setValue(rtnList[0]); //거래처코드
    ed_mgntClntNm.setValue(rtnList[1]); //거래처명명
    ed_mgntClntNo.options.hidVal = rtnList[0]; // 히든값
    // 사원거래처일경우 사번셋팅(수정 20060412)

    if (ed_mgntEmpNo.getDisabled() == false && rtnList[10] == "EM") {
      ed_mgntEmpNo.setValue(rtnList[11]);
      ed_mgntEmpNm.setValue(rtnList[12]);
      ed_mgntEmpNo.options.hidVal = rtnList[11];
    }
  } else {
    ed_mgntClntNo.setValue("");
    ed_mgntClntNm.setValue("");
    ed_mgntClntNo.options.hidVal = "";
  }
};
scwin.udc_mgntEmpNo_cb = function (rtnList) {
  scwin.f_resultPopEd(ed_mgntEmpNo, ed_mgntEmpNm, rtnList);
};
scwin.udc_crn_cb = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_crn.setValue(rtnList[0]); //거래처코드
    ed_crnNm.setValue(rtnList[1]); //거래처명명
    ed_crn.options.hidVal = rtnList[0]; // 히든값
  } else {
    ed_crn.setValue(""); //거래처코드
    ed_crnNm.setValue(""); //거래처명명
    ed_crn.options.hidVal = ""; // 히든값
  }
};
scwin.udc_opntAcctCd_cb = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_opntAcctCd.setValue(rtnList[0]); //상대계정코드
    ed_opntAcctNm.setValue(rtnList[1]); //상대계정명
    ed_opntAcctCd.options.hidVal = rtnList[0]; // 히든값
  } else {
    ed_opntAcctCd.setValue("");
    ed_opntAcctNm.setValue("");
    ed_opntAcctCd.options.hidVal = "";
  }
};
scwin.udc_reqClntNo_cb = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    ed_reqClntNo.setValue(rtnList[0]); //거래처코드
    ed_reqClntNm.setValue(rtnList[1]); //거래처명명
  } else {
    ed_reqClntNo.setValue("");
    ed_reqClntNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 팝업
//------------------------------------------------------------------------- 
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  //var rtnList = new Array(); 

  switch (disGubun) {
    case 1:
      // 부서		 
      //var param = ed_slipDt.text.trim()+",,,,"; 
      // 자회사 회계 시스템인 경우,  
      //if(isSubCompany)  {  
      param = ed_slipDt.getValue().trim() + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;

      //}
      udc_slipAcctDeptCd.setSelectId("retrieveAcctDeptCdInfo3");
      udc_slipAcctDeptCd.cfCommonPopUp(scwin.udc_slipAcctDeptCd_cb, pCode, pName, pClose, null, null, null, null, param, null, null, null, null);
      break;

    // 계정
    case 2:
      if (ed_acctDeptCd.getValue() == "") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, Array("귀속부서"));
        ed_acctDeptCd.focus();
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        return;
      }

      // 비용구분 : 01^원가,02^판관비,03^원가+판관비,04^판관비제외,05^원가제외
      if (scwin.txt_tempCostClsCd == "" || scwin.txt_tempCostClsCd == "03") {
        scwin.txt_costClsCd = "04"; // 전체조회
      } else if (scwin.txt_tempCostClsCd == "01") {
        scwin.txt_costClsCd = "05"; // 원가
      } else if (scwin.txt_tempCostClsCd == "02") {
        scwin.txt_costClsCd = "06"; // 판관비
      } else {
        scwin.txt_costClsCd = "";
      }
      let where = "";
      where = ed_slipDt.getValue().trim() + "," + scwin.txt_costClsCd + ",Y";

      // 계정조회
      if (scwin.isSubCompany == false) {
        //동부익스프레스, 자회사 구분으로 계정 팝업창 틀림 
        where = ed_slipDt.getValue().trim() + "," + scwin.txt_costClsCd + ",Y";
        udc_acctCd.setSelectId("retrieveTransferAcctCdInfo");
        udc_acctCd.cfCommonPopUp(scwin.udc_acctCd_cb, pCode, pName, pClose, null, null, null, null, where, null, null, null, null);
      } else {
        where = ed_slipDt.getValue().trim() + "," + scwin.txt_costClsCd;
        udc_acctCd.setSelectId("retrieveTransferAcctCdInfo2");
        udc_acctCd.cfCommonPopUp(scwin.udc_acctCd_cb, pCode, pName, pClose, null, null, null, null, where, null, null, null, null);
      }

      // 결과값 가지고 왔을때 원)세금과공과-과징금(4203417), 판)세금과공과-과징금(5001917) 계정일 경우
      // 잡손실(6120220)계정으로 작성해 주시기 바랍니다. 라는 메시지 출력해 준다.
      if (ed_acctCd.getValue() == '4203417') {
        $c.win.alert($p, "원)세금과공과-과징금(4203417) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        return;
      } else if (ed_acctCd.getValue() == '5001917') {
        $c.win.alert($p, "판)세금과공과-과징금(5001917) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        return;
      }

      // 계정이 선급비용-일반일 경우 상대계정필드 활성화
      if (ed_acctCd.getValue() == "1111110") {
        $c.gus.cfEnableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
      } else {
        ed_opntAcctCd.setValue("");
        ed_opntAcctNm.setValue("");
        ed_opntAcctCd.options.hidVal = "";
        $c.gus.cfDisableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
      }
      break;
    case 3:
      // 부서		 
      //var param = ed_slipDt.text.trim()+",,,,"; 
      // 자회사 회계 시스템인 경우,  
      //if(isSubCompany)  {  
      param = ed_slipDt.getValue().trim() + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;
      //}
      udc_acctDeptCd.setSelectId("retrieveAcctDeptCdInfo3");
      udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_cb, ed_acctDeptCd.getValue().trim(), ed_acctDeptNm.getValue(), 'F', null, null, null, null, param, null, null, null, null);
      break;
    case 4:
      // 거래처
      var param = '';
      param = scwin.vCoCd;
      udc_mgntClntNo.setSelectId("retrieveClntEmpNoList");
      udc_mgntClntNo.cfCommonPopUp(scwin.udc_mgntClntNo_cb, pCode, pName, pClose, null, null, null, null, param, null, null, pAllSearch, null);
      break;
    case 5:
      // 사번
      param = '';
      if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
        // 자회사 회계 시스템
        param = scwin.txtCoCd;
      }
      udc_mgntEmpNo.setSelectId("retrieveAcEmpInfo");
      udc_mgntEmpNo.cfCommonPopUp(scwin.udc_mgntEmpNo_cb, pCode, pName, pClose, null, null, null, null, param, null, null, pAllSearch, null);
      break;
    case 6:
      // 사업자번호
      param = '';
      selectID = 'retrieveCrnInfo';
      udc_crn.setSelectId(selectID);

      /*
      // 자회사도 사업자번호팝업은 똑같이 떠야한다고 해서 바꿨음
      if(txtCoClsCd.value > '<%=ACConstants.CO_CLS_CD_DONGBU%>') { // 자회사 회계 시스템
          selectID= 'retrieveCrnClntInfo';
          param = ","+txtCoCd.value;
      }  
      */

      udc_crn.cfCommonPopUp(scwin.udc_crn_cb, pCode, pName, pClose, null, null, null, null, param, null, null, pAllSearch, null);
      break;

    // 상대계정조회
    case 7:
      // 2014 05 15 선급비용 처리분에 선급비용-일반 계정이 추가됨으로 인한 상대계정 입력필드 추가
      // 비용구분 : 01^원가,02^판관비,03^원가+판관비,04^판관비제외,05^원가제외
      if (scwin.txt_tempOpntAcctCostClsCd == "" || scwin.txt_tempOpntAcctCostClsCd == "03") {
        scwin.txt_opntAcctCostClsCd = "04"; // 전체조회
      } else if (scwin.txt_tempOpntAcctCostClsCd == "01") {
        scwin.txt_opntAcctCostClsCd = "05"; // 원가
      } else if (scwin.txt_tempOpntAcctCostClsCd == "02") {
        scwin.txt_opntAcctCostClsCd = "06"; // 판관비
      } else {
        scwin.txt_opntAcctCostClsCd = "";
      }
      where = "";
      where = ed_slipDt.getValue().trim() + "," + scwin.txt_opntAcctCostClsCd + ",Y";
      if (scwin.isSubCompany == false) {
        //동부익스프레스, 자회사 구분으로 계정 팝업창 틀림 
        where = ed_slipDt.getValue().trim() + "," + scwin.txt_costClsCd + ",Y";
        udc_opntAcctCd.setSelectId("retrieveTransferAcctCdInfo");
        udc_opntAcctCd.cfCommonPopUp(scwin.udc_opntAcctCd_cb, pCode, pName, pClose, null, null, null, null, where, null, null, null, null);
      } else {
        where = ed_slipDt.getValue().trim() + "," + scwin.txt_costClsCd;
        udc_opntAcctCd.setSelectId("retrieveTransferAcctCdInfo2");
        udc_opntAcctCd.cfCommonPopUp(scwin.udc_opntAcctCd_cb, pCode, pName, pClose, null, null, null, null, where, null, null, null, null);
      }
      break;
    case 8:
      // 요청거래처
      param = ACConstants.CO_CD_DONGBU;
      udc_reqClntNo.setSelectId("retrieveClntEmpNoList");
      udc_reqClntNo.cfCommonPopUp(scwin.udc_reqClntNo_cb, pCode, pName, pClose, null, null, null, null, param, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업체크
//------------------------------------------------------------------------- 
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  //if (!cfCanOpenPopup(inObj, pairObj))
  //return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.udc_opntAcctCd_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_opntAcctCd.getValue(), ed_opntAcctNm.getValue(), 'T', 'T');
};
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'T');
};
scwin.udc_mgntClntNo_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_mgntClntNo.getValue(), ed_mgntClntNm.getValue(), 'F', 'T');
};
scwin.udc_mgntEmpNo_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_mgntEmpNo.getValue(), ed_mgntEmpNm.getValue(), 'F', 'T');
};
scwin.udc_crn_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_crn.getValue(), ed_crnNm.getValue(), 'F', 'T');
};
scwin.udc_reqClntNo_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(8, ed_reqClntNo.getValue(), ed_reqClntNm.getValue(), 'F', 'T');
};

/*
<!-- 그리드클릭 이벤트처리() -->
<script language=JavaScript for=gr_slipcontents event=OnClick(row,colid)>
*/
scwin.gr_slipcontents_oncellclick = function (rowIndex, columnIndex, columnId) {
  // 계정이 선급비용-일반일 경우 상대계정필드 활성화
  if (ed_acctCd.getValue() == "1111110") {
    $c.gus.cfEnableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
  } else {
    //ed_opntAcctCd.text  = "";
    //txt_opntAcctNm.value = "";
    //ed_opntAcctCd.hidVal ="";
    $c.gus.cfDisableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
  }
  if (ed_crn.getValue() == "") {
    ed_crnNm.setValue(""); //거래처명명
    ed_crn.options.hidVal = ""; // 히든값
  } else {
    scwin.f_chkOpenCommonPopUp(ed_crn, ed_crnNm, 6, true);
  }
  //ed_crn.text  = ""	//거래처코드	 
};
scwin.sbm_getMaxCloseYm_submitdone = function (e) {
  let thisYm = scwin.strToDate; // 오늘일자 가져오기
  //최소 미마감월이 당월이 아닐때
  if (ds_getMaxCloseYm.getCellData(0, "closeYm") != thisYm.substr(0, 6)) {
    let closeYm = ds_getMaxCloseYm.getCellData(0, "closeYm");
    let firstDay = closeYm.substr(0, 4) + "/" + closeYm.substr(4, 2) + "/" + "01"; // 1일
    let lastDay = closeYm.substr(0, 4) + closeYm.substr(4, 2) + new Date(closeYm.substr(0, 4), closeYm.substr(4, 2), 0).getDate(); // 마지막날
    ed_slipDt.setValue(lastDay); //작성일자 셋팅
  } else {
    //var firstDay = thisYm.substr(0,4)+"/"+thisYm.substr(4,2)+"/"+"01";  //당월 1일
    //var lastDay = thisYm.substr(0,4)+"/"+thisYm.substr(4,2)+"/"+ new Date(thisYm.substr(0,4),thisYm.substr(4,2),0).getDate(); //당월 마지막날
    //ed_slipDt.text = lastDay; //작성일자 셋팅
  }
};
scwin.sbm_getMaxCloseYm_submiterror = function (e) {};
scwin.udc_slipAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_slipAcctDeptCd.getValue(), ed_slipAcctDeptNm.getValue(), 'T', 'T');
};
scwin.udc_acctCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_acctCd.getValue(), ed_acctNm.getValue(), 'T', 'T');
};
scwin.f_CheckPayYn = function () {
  if (chb_payProcYn.getValue() == "1") {
    $c.gus.cfEnableObjects($p, [ed_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd, ed_taxinvcDt]);
  } else {
    ed_reqDt.setValue("");
    lc_reqPayMthdCd.setValue("");
    ed_draftDdCntCd.setValue("");
    $c.gus.cfDisableObjects($p, [ed_reqDt, lc_reqPayMthdCd, ed_draftDdCntCd]);
  }
};
scwin.udc_crn_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_crn.getValue(), ed_crnNm.getValue(), 'F', 'T');
};
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'T');
};
scwin.udc_mgntClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_mgntClntNo.getValue(), ed_mgntClntNm.getValue(), 'F', 'T');
};
scwin.udc_mgntEmpNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_mgntEmpNo.getValue(), ed_mgntEmpNm.getValue(), 'F', 'T');
};
scwin.udc_opntAcctCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_opntAcctCd.getValue(), ed_opntAcctNm.getValue(), 'T', 'T');
};
scwin.udc_reqClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(8, ed_reqClntNo.getValue(), ed_reqClntNm.getValue(), 'T', 'T');
};

//분개장
scwin.btn_jo_onclick = function (e) {
  scwin.f_fileUp0();
};

//엑셀
scwin.btn_up_onclick = function (e) {
  scwin.f_fileUp1();
};

//분개장
scwin.f_fileUp0 = async function () {
  scwin.chkExcel = "0";
  ds_temp.removeAll();

  //udc_grd_up_btns
  /*var idx = btn_upload_type.getSelectedIndex();
  if (idx == 1) {
      await $c.data.uploadGridViewCSV(gr_excel0,  options);
  } else {
      await $c.data.uploadGridViewExcel(gr_excel0, options);
  }*/
  if (btn_upload_type.getValue() == "1") {
    // csv
    let options = {
      "fileName": "gridDataUpload0.csv",
      "status": "C",
      "header": 1,
      "useMaxByteLength": ",",
      "type": "1",
      "startRowIndex": 0,
      "footerExist": "0"
    };
    await $c.data.uploadGridViewCSV($p, gr_excel0, options);
  } else {
    // 엑셀
    let options = {
      "fileName": "gridDataUpload0.xlsx",
      "status": "C",
      "headerExist": 1,
      //excel 헤더
      "header": 1,
      //csv 헤더
      "useMaxByteLength": ",",
      "type": "1",
      "startRowIndex": 0,
      "footerExist": 0
    };
    await $c.data.uploadGridViewExcel($p, gr_excel0, options);
  }
};

//엑셀
scwin.f_fileUp1 = async function () {
  /*let options = {
      "fileName": "gridDataUpload1.xlsx",
      "status": "C",
      "headerExist": 1,
      "header": 1, //csv 헤더
      "useMaxByteLength": ",",
      "type": "1",
      "startRowIndex": 0,
      "footerExist": 0,
  };*/
  scwin.chkExcel = "1";
  ds_temp.removeAll();

  /*var idx = btn_upload_type.getSelectedIndex();
   if (idx == 1) {
      await $c.data.uploadGridViewCSV(gr_excel1,  options);
  } else {
      await $c.data.uploadGridViewExcel(gr_excel1, options);
  }*/

  if (btn_upload_type.getValue() == "1") {
    // csv
    let options = {
      "fileName": "gridDataUpload1.csv",
      "status": "C",
      "header": 1,
      "useMaxByteLength": ",",
      "type": "1",
      "startRowIndex": 0,
      "footerExist": "0"
    };
    await $c.data.uploadGridViewCSV($p, gr_excel1, options);
  } else {
    // 엑셀
    let options = {
      "fileName": "gridDataUpload1.xlsx",
      "status": "C",
      "headerExist": 1,
      "header": 1,
      //csv 헤더
      "useMaxByteLength": ",",
      "type": "1",
      "startRowIndex": 0,
      "footerExist": 0
    };
    await $c.data.uploadGridViewExcel($p, gr_excel1, options);
  }
};

//-------------------------------------------------------------------------
// 업로드 자료 추가
//-------------------------------------------------------------------------
scwin.f_AddRowUploaded = async function () {
  scwin.uploadProgressFlag = true;
  scwin.vCheckStatusUpload = "false";
  if (ds_temp.getRowCount() > 0) {
    ds_slipcontents.removeAll();
    for (var i = 0; i < ds_temp.getRowCount(); i++) {
      row = ds_slipcontents.insertRow();
      ds_slipcontents.setRowPosition(row);
      gr_slipcontents.setFocusedCell(row, 0, false);
      if (scwin.chkExcel == "1") {
        ds_slipcontents.setCellData(row, "drcrClsCd", ds_temp.getCellData(i, "drcrClsCd"));
        ds_slipcontents.setCellData(row, "amtFcrc", ds_temp.getCellData(i, "amtFcrc")); // 금액_외화
        ds_slipcontents.setCellData(row, "amt", ds_temp.getCellData(i, "amt"));
        if (ds_temp.getCellData(i, "drcrClsCd") == 'D') {
          ds_slipcontents.setCellData(row, "dAmtFcrc", ds_temp.getCellData(i, "amtFcrc")); // 금액_외화
          ds_slipcontents.setCellData(row, "dAmt", ds_temp.getCellData(i, "amt"));
        } else {
          ds_slipcontents.setCellData(row, "cAmtFcrc", ds_temp.getCellData(i, "amtFcrc")); // 금액_외화
          ds_slipcontents.setCellData(row, "cAmt", ds_temp.getCellData(i, "amt"));
        }
      } else {
        if (ds_temp.getCellData(i, "dAmt") != 0 && ds_temp.getCellData(i, "cAmt") != 0) {
          await $c.win.alert($p, "차변, 대변금액 둘다 입력할 수 없습니다.");
          return false;
        }
        if (ds_temp.getCellData(i, "dAmt") != 0) {
          ds_slipcontents.setCellData(row, "drcrClsCd", "D");
          ds_slipcontents.setCellData(row, "amtFcrc", ds_temp.getCellData(i, "dAmtFcrc")); // 금액_외화
          ds_slipcontents.setCellData(row, "amt", ds_temp.getCellData(i, "dAmt")); // 금액
          ds_slipcontents.setCellData(row, "dAmtFcrc", ds_temp.getCellData(i, "dAmtFcrc")); // 금액_외화
          ds_slipcontents.setCellData(row, "dAmt", ds_temp.getCellData(i, "dAmt")); // 금액
        } else {
          ds_slipcontents.setCellData(row, "drcrClsCd", "C");
          ds_slipcontents.setCellData(row, "amtFcrc", ds_temp.getCellData(i, "cAmtFcrc")); // 금액_외화
          ds_slipcontents.setCellData(row, "amt", ds_temp.getCellData(i, "cAmt")); // 금액
          ds_slipcontents.setCellData(row, "cAmtFcrc", ds_temp.getCellData(i, "cAmtFcrc")); // 금액_외화
          ds_slipcontents.setCellData(row, "cAmt", ds_temp.getCellData(i, "cAmt")); // 금액
        }
      }
      var checkAcctCd = ds_temp.getCellData(row, "acctCd").replace(/ /gi, "");
      if (checkAcctCd == '4203417') {
        await $c.win.alert($p, "csv 파일의 " + row + "번째 계정코드 원)세금과공과-과징금(4203417) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        return;
      } else if (checkAcctCd == '5001917') {
        await $c.win.alert($p, "csv 파일의 " + row + "번째 계정코드 판)세금과공과-과징금(5001917) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        return;
      }

      // 각 항목 공백 검사 시작
      ds_temp.setCellData(i, "acctCd", ds_temp.getCellData(row, "acctCd").replace(/ /gi, ""));
      ds_temp.setCellData(i, "acctDeptCd", ds_temp.getCellData(row, "acctDeptCd").replace(/ /gi, ""));
      ds_temp.setCellData(i, "mgntClntNo", ds_temp.getCellData(row, "mgntClntNo").replace(/ /gi, ""));
      ds_temp.setCellData(i, "mgntDt", ds_temp.getCellData(row, "mgntDt").replace(/ /gi, ""));
      ds_temp.setCellData(i, "crn", ds_temp.getCellData(row, "crn").replace(/ /gi, ""));
      ds_temp.setCellData(i, "reqDt", ds_temp.getCellData(row, "reqDt").replace(/ /gi, ""));
      ds_temp.setCellData(i, "taxinvcDt", ds_temp.getCellData(row, "taxinvcDt").replace(/ /gi, ""));
      ds_temp.setCellData(i, "mgntNo", ds_temp.getCellData(row, "mgntNo").replace(/ /gi, ""));
      ds_temp.setCellData(i, "mgntTermStDt", ds_temp.getCellData(row, "mgntTermStDt").replace(/ /gi, ""));
      ds_temp.setCellData(i, "mgntTermEndDt", ds_temp.getCellData(row, "mgntTermEndDt").replace(/ /gi, ""));
      ds_temp.setCellData(i, "mgntEmpNo", ds_temp.getCellData(row, "mgntEmpNo").replace(/ /gi, ""));
      ds_temp.setCellData(i, "opntAcctCd", ds_temp.getCellData(row, "opntAcctCd").replace(/ /gi, ""));
      ds_temp.setCellData(i, "vatPassClsCd", ds_temp.getCellData(row, "vatPassClsCd").replace(/ /gi, ""));
      ds_temp.setCellData(i, "reqClntNo", ds_temp.getCellData(row, "reqClntNo").replace(/ /gi, ""));

      // 공백이 제거된 ds_temp의 길이를 측정
      lengthOfAcctCd = ds_temp.getCellData(row, "acctCd").length; // 계정코드 자릿수 검사
      lengthOfAcctDeptCd = ds_temp.getCellData(row, "acctDeptCd").length; // 귀속부서 자릿수 검사
      lengthOfMgntClntNo = ds_temp.getCellData(row, "mgntClntNo").length; // 거래처코드 자릿수 검사
      lengthOfMgntDt = ds_temp.getCellData(row, "mgntDt").length; // 관리일자 자릿수 검사
      lengthOfCrn = ds_temp.getCellData(row, "crn").length; // 사업자번호 자릿수 검사				
      lengthOfReqDt = ds_temp.getCellData(row, "reqDt").length; // 지급일자 자릿수 검사
      lengthOfTaxinvcDt = ds_temp.getCellData(row, "taxinvcDt").length; // 세금계산서일자 자릿수 검사				
      lengthOfMgntNo = ds_temp.getCellData(row, "mgntNo").length; // 관리번호 자릿수 검사				
      lengthOfMgntTermStDt = ds_temp.getCellData(row, "mgntTermStDt").length; // 관리기간시작일자 자릿수 검사
      lengthOfMgntTermEndDt = ds_temp.getCellData(row, "mgntTermEndDt").length; // 관리기간종료일자 자릿수 검사				
      lengthOfMgntEmpNo = ds_temp.getCellData(row, "mgntEmpNo").length; // 관리사원번호 자릿수 검사
      lengthOfOpntAcctCd = ds_temp.getCellData(row, "opntAcctCd").length; // 상대계정코드 자릿수 검사
      lengthOfVatPassClsCd = ds_temp.getCellData(row, "vatPassClsCd").length; // 부가세처리제외여부 구분코드 자릿수 검사
      lengthOfReqClntNo = ds_temp.getCellData(row, "reqClntNo").length; // 요청거래처코드 자릿수 검사

      // 부가세처리제외여부 구분코드 자릿수 검사
      if (ds_temp.getCellData(i, "vatPassClsCd") == "") {
        ds_slipcontents.setCellData(row, "vatPassClsCd", "0");
      } else {
        ds_slipcontents.setCellData(row, "vatPassClsCd", ds_temp.getCellData(i, "vatPassClsCd").substring(0, 1));
      }

      // 계정코드 자릿수 검사
      if (lengthOfAcctCd > 7) {
        ds_slipcontents.setCellData(row, "acctCd", ds_temp.getCellData(i, "acctCd").substring(0, 7));
      } else {
        ds_slipcontents.setCellData(row, "acctCd", ds_temp.getCellData(i, "acctCd"));
      }

      // 상대계정코드 자릿수 검사
      if (lengthOfOpntAcctCd > 7) {
        ds_slipcontents.setCellData(row, "opntAcctCd", ds_temp.getCellData(i, "opntAcctCd").substring(0, 7));
      } else {
        ds_slipcontents.setCellData(row, "opntAcctCd", ds_temp.getCellData(i, "opntAcctCd"));
      }
      // 귀속부서 자릿수 검사
      if (lengthOfAcctDeptCd == 5) {
        ds_slipcontents.setCellData(row, "acctDeptCd", ds_temp.getCellData(i, "acctDeptCd"));
      } else if (lengthOfAcctDeptCd == 4) {
        ds_slipcontents.setCellData(row, "acctDeptCd", "0" + ds_temp.getCellData(i, "acctDeptCd"));
      } else if (lengthOfAcctDeptCd == 3) {
        ds_slipcontents.setCellData(row, "acctDeptCd", "00" + ds_temp.getCellData(i, "acctDeptCd"));
      } else if (lengthOfAcctDeptCd == 2) {
        ds_slipcontents.setCellData(row, "acctDeptCd", "000" + ds_temp.getCellData(i, "acctDeptCd"));
      } else if (lengthOfAcctDeptCd == 1) {
        ds_slipcontents.setCellData(row, "acctDeptCd", "0000" + ds_temp.getCellData(i, "acctDeptCd"));
      } else {
        //(lengthOfAcctDeptCd > 5)
        ds_slipcontents.setCellData(row, "acctDeptCd", ds_temp.getCellData(i, "acctDeptCd").substring(0, 5));
      }

      // 거래처코드 자릿수 검사
      if (lengthOfMgntClntNo > 6) {
        ds_slipcontents.setCellData(row, "mgntClntNo", ds_temp.getCellData(i, "mgntClntNo").substring(0, 6));
      } else {
        ds_slipcontents.setCellData(row, "mgntClntNo", ds_temp.getCellData(i, "mgntClntNo"));
      }
      if (!(ds_slipcontents.getCellData(row, "mgntClntNo") == null || ds_slipcontents.getCellData(row, "mgntClntNo") == "")) ds_slipcontents.setCellData(row, "clntMgntYn", "1"); //거래처 관리 여부

      if (ds_slipcontents.getCellData(row, "mgntClntNo") != "") {
        //거래처
        var rtnList = await scwin.f_openCommonPopUpAsync(4, ds_slipcontents.getCellData(row, "mgntClntNo"), '', 'T', 'F');
      }

      // 요청거래처코드 자릿수 검사
      if (lengthOfReqClntNo > 6) {
        ds_slipcontents.setCellData(row, "reqClntNo", ds_temp.getCellData(i, "reqClntNo").substring(0, 6));
      } else {
        ds_slipcontents.setCellData(row, "reqClntNo", ds_temp.getCellData(i, "reqClntNo"));
      }
      if (ds_slipcontents.getCellData(row, "reqClntNo") != "") {
        //요청거래처
        await scwin.f_openCommonPopUpAsync(8, ed_reqClntNo.getValue(), '', 'T', 'F');
      }

      // 관리일자 자릿수 검사
      if (lengthOfMgntDt > 8) {
        //alert("관리일자 길이가 8보다 더 크네");
        ds_slipcontents.setCellData(row, "mgntDt", ds_temp.getCellData(i, "mgntDt").substring(0, 8));
      } else {
        ds_slipcontents.setCellData(row, "mgntDt", ds_temp.getCellData(i, "mgntDt"));
      }

      //  if ( !(ds_slipcontents.NameValue(row,"mgntDt") == null || ds_slipcontents.NameValue(row,"mgntDt") == "" ) )	
      ds_slipcontents.setCellData(row, "dtMgntYn", "1"); //관리일자여부			

      // 사업자번호 자릿수 검사
      if (lengthOfCrn > 13) {
        ds_slipcontents.setCellData(row, "crn", ds_temp.getCellData(i, "mgntcrnDt").substring(0, 13));
      } else {
        ds_slipcontents.setCellData(row, "crn", ds_temp.getCellData(i, "crn"));
      }
      if (ds_slipcontents.getCellData(row, "crn") != "") {
        //사업자번호
        var rtnList = await scwin.f_openCommonPopUpAsync(6, ds_slipcontents.getCellData(row, "crn"), '', 'T', 'F');
      }

      // 지급일자 자릿수 검사
      if (lengthOfReqDt > 8) {
        ds_slipcontents.setCellData(row, "reqDt", ds_temp.getCellData(i, "reqDt").substring(0, 8));
      } else {
        ds_slipcontents.setCellData(row, "reqDt", ds_temp.getCellData(i, "reqDt"));
      }

      // 세금계산서일자 자릿수 검사
      if (lengthOfTaxinvcDt > 8) {
        ds_slipcontents.setCellData(row, "taxinvcDt", ds_temp.getCellData(i, "taxinvcDt").substring(0, 8));
      } else {
        ds_slipcontents.setCellData(row, "taxinvcDt", ds_temp.getCellData(i, "taxinvcDt"));
      }

      // 관리번호 자릿수 검사
      if (lengthOfMgntNo > 25) {
        ds_slipcontents.setCellData(row, "mgntNo", ds_temp.getCellData(i, "mgntNo").substring(0, 25));
      } else {
        ds_slipcontents.setCellData(row, "mgntNo", ds_temp.getCellData(i, "mgntNo"));
      }
      if ((ds_slipcontents.getCellData(row, "acctCd") == "1210710" || ds_slipcontents.getCellData(row, "acctCd") == "1210110" || ds_slipcontents.getCellData(row, "acctCd") == "1110133" || ds_slipcontents.getCellData(row, "acctCd") == "1110140" || ds_slipcontents.getCellData(row, "acctCd") == "1110150" || ds_slipcontents.getCellData(row, "acctCd") == "1110160" || ds_slipcontents.getCellData(row, "acctCd") == "1110260" || ds_slipcontents.getCellData(row, "acctCd") == "1110270" || ds_slipcontents.getCellData(row, "acctCd") == "1110280" || ds_slipcontents.getCellData(row, "acctCd") == "1110121" || ds_slipcontents.getCellData(row, "acctCd") == "1110210" || ds_slipcontents.getCellData(row, "acctCd") == "1110220" || ds_slipcontents.getCellData(row, "acctCd") == "1110230" || ds_slipcontents.getCellData(row, "acctCd") == "1110250" || ds_slipcontents.getCellData(row, "acctCd") == "1110271") && ds_slipcontents.getCellData(row, "mgntNo") != "") {
        ds_slipcontents.setCellData(row, "mgntNm", "통장번호");
      }

      // 관리기간시작일자 자릿수 검사
      if (lengthOfMgntTermStDt > 8) {
        ds_slipcontents.setCellData(row, "mgntTermStDt", ds_temp.getCellData(i, "mgntTermStDt").substring(0, 8));
      } else {
        ds_slipcontents.setCellData(row, "mgntTermStDt", ds_temp.getCellData(i, "mgntTermStDt"));
      }

      // 관리기간종료일자 자릿수 검사
      if (lengthOfMgntTermEndDt > 8) {
        ds_slipcontents.setCellData(row, "mgntTermEndDt", ds_temp.getCellData(i, "mgntTermEndDt").substring(0, 8));
      } else {
        ds_slipcontents.setCellData(row, "mgntTermEndDt", ds_temp.getCellData(i, "mgntTermEndDt"));
      }

      // 관리사원번호 자릿수 검사
      if (lengthOfMgntEmpNo > 6) {
        ds_slipcontents.setCellData(row, "mgntEmpNo", ds_temp.getCellData(i, "mgntEmpNo").substring(0, 6));
      } else {
        ds_slipcontents.setCellData(row, "mgntEmpNo", ds_temp.getCellData(i, "mgntEmpNo"));
      }

      //여기서 부터 있는 애들은 위에서 자릿수 검사 안한 애들
      ds_slipcontents.setCellData(row, "summary", ds_temp.getCellData(i, "summary")); // 적요
      ds_slipcontents.setCellData(row, "reqPayMthdCd", ds_temp.getCellData(i, "reqPayMthdCd")); // 지급방법
      ds_slipcontents.setCellData(row, "evidClsCd", ds_temp.getCellData(i, "evidClsCd")); // 증빙구분코드
      ds_slipcontents.setCellData(row, "deductClsCd", ds_temp.getCellData(i, "deductClsCd")); // 공제구분
      ds_slipcontents.setCellData(row, "crcCd", ds_temp.getCellData(i, "crcCd")); // 통화코드

      //if 부분 AsIs 와 ToBe 데이터가 달라지는 부분 환율 AsIs 0 안박힘
      //어음일수 0 박힘

      if (!ds_slipcontents.getCellData(row, "crcCd") == ACConstants.KOREA_WON) {
        // 원화가 아닐떄 넣어 줍시다.
        ds_slipcontents.setCellData(row, "exchRt", ds_temp.getCellData(i, "exchRt")); // 환율
      }
      if ($c.gus.cfIsNull($p, ds_temp.getCellData(i, "spplyAmt"))) {
        //공급금액 0 처리
        ds_temp.setCellData(i, "spplyAmt", 0);
      }
      ds_slipcontents.setCellData(row, "spplyAmt", ds_temp.getCellData(i, "spplyAmt")); // 공급금액
      ds_slipcontents.setCellData(row, "slipDivideNo", ds_temp.getCellData(i, "slipDivideNo")); // 전표분할구분								
      ds_slipcontents.setCellData(row, "payProcYn", ds_temp.getCellData(i, "payProcYn")); // 지급처리여부
      var tmpDraftDdCntCd = ds_temp.getCellData(i, "draftDdCntCd");
      if (!$c.gus.cfIsNull($p, tmpDraftDdCntCd)) {
        ds_slipcontents.setCellData(row, "draftDdCntCd", tmpDraftDdCntCd); // 어음일수
      }
      ds_slipcontents.setCellData(row, "recvProcYn", ds_temp.getCellData(i, "recvProcYn")); // 지급처리여부

      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////					
      if (!(ds_slipcontents.getCellData(row, "mgntTermStDt").trim() == null || ds_slipcontents.getCellData(row, "mgntTermStDt").trim() == "")) {
        ds_slipcontents.setCellData(row, "termMgntYn", "1"); // 기간관리여부
      } else {
        ds_slipcontents.setCellData(row, "termMgntYn", "0");
      }
      if (!(ds_slipcontents.getCellData(row, "mgntEmpNo") == null || ds_slipcontents.getCellData(row, "mgntEmpNo") == "")) {
        ds_slipcontents.setCellData(row, "empMgntYn", "1"); // 사원관리여부
      }
      if (ds_slipcontents.getCellData(row, "payProcYn") == "1") {
        ds_slipcontents.setCellData(row, "payAcctCd", "1"); // 지급계정코드
      }
      ds_slipcontents.setCellData(row, "coCd", scwin.vCoCd);
      ds_slipcontents.setCellData(row, "coClsCd", scwin.vCoClsCd);
      ed_acctCd.options.hidVal = ds_slipcontents.getCellData(row, "acctCd");
      ed_acctDeptCd.options.hidVal = ds_slipcontents.getCellData(row, "acctDeptCd");
      ed_mgntClntNo.options.hidVal = ds_slipcontents.getCellData(row, "mgntClntNo");
      ed_mgntEmpNo.options.hidVal = ds_slipcontents.getCellData(row, "mgntEmpNo");

      // 20120927 by kimseok 지로납부일자항목 추가 
      // 지급일자 항목을 추가한다. 				
      ds_slipcontents.setCellData(row, "paymentPrd", ds_slipcontents.getCellData(row, "reqDt"));
      if (ds_slipcontents.getCellData(row, "acctCd") == "2100850" && ds_slipcontents.getCellData(row, "payProcYn") == 1) {
        await $c.win.alert($p, ds_slipcontents.getRowPosition() + 1 + "행의 계정(" + ed_acctCd.getValue() + ")은 지급처리가 불가능한 계정입니다. 지급처리 체크가 해제됩니다.");
        chb_payProcYn.setValue(0);
        lc_reqPayMthdCd.setValue("");
        ed_reqDt.setValue("");
        ed_draftDdCntCd.setValue("");
      }
      await scwin.f_checkDeptAcctCdAsync(ed_acctCd.options.hidVal, ed_acctDeptCd.options.hidVal);
    }
  }
  //cfShowTotalRows(totalRows, ds_slipcontents.CountRow);

  ed_totalRows.setValue(ds_slipcontents.getRowCount());
  scwin.uploadProgressFlag = false;
  return true;
};
scwin.gr_excel0_onfilereadend = function (value) {
  scwin.f_Upload_0();
};
scwin.gr_excel1_onfilereadend = function (value) {
  scwin.f_Upload_1();
};

//분개장
scwin.f_Upload_0 = async function () {
  scwin.chkExcel = '0';
  if (await scwin.f_AddRowUploaded()) {
    //ASIS 이유는 모르겠지만 업로드 되면서 작성일자가 현재일자로 바뀌고 있어 하단정보를 추가함
    ed_slipDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd")); //작성일자 셋팅
    $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
  }
};

//엑셀
scwin.f_Upload_1 = async function () {
  scwin.chkExcel = '1';
  if (await scwin.f_AddRowUploaded()) {
    //ASIS 이유는 모르겠지만 업로드 되면서 작성일자가 현재일자로 바뀌고 있어 하단정보를 추가함
    ed_slipDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd")); //작성일자 셋팅
    $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
  }
};

//-------------------------------------------------------------------------
// Enable/Disable
//-------------------------------------------------------------------------
scwin.f_checkDeptAcctCdAsync = async function (ed_acctCd, ed_acctDeptCd) {
  scwin.vCheckStatusUpload = "false";
  let param = "";
  //var rtnList1 = new Array(); 
  //var rtnList2 = new Array(); 	

  if (ed_acctDeptCd != null) {
    param = ed_slipDt.getValue().trim() + ",,,,";
    if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
      // 자회사 회계 시스템
      param = ed_slipDt.getValue().trim() + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;
    }
    udc_acctDeptCd.setSelectId("retrieveAcctDeptCdInfo3");

    //rtnList1 = cfCommonPopUp('retrieveAcctDeptCdInfo3',ed_acctDeptCd,'','T',null,null,null,null,param,null,null,null,null); 
    var resAcctDeptCd = await udc_acctDeptCd.cfCommonPopUpAsync(scwin.udc_acctDeptCd_cb, ed_acctDeptCd, '', 'T', null, null, null, null, param, null, null, null, null);

    //임시로 원가, 판관비 모두 조회되도록.. 작업 끝나면 다시 막아야 됨
    /*
    if(userId == '021169' || userId == 'seok4361' || userId == '120494'){
    //alert("userId : " + userId);
    txt_costClsCdCheck = "04";		// 전체조회
    }
    */

    let where = "";
    where = ed_slipDt.getValue().trim() + "," + scwin.txt_costClsCdCheck + ",Y";

    // 계정조회
    udc_acctCd.setSelectId("retrieveTransferAcctCdInfo");
    //rtnList2 = cfCommonPopUp('retrieveTransferAcctCdInfo',ed_acctCd,'' ,'T',null,null,null,null,where,null,null,null,null); 

    var resAcctCd = await udc_acctCd.cfCommonPopUpAsync(scwin.udc_acctCd_cb2, ed_acctCd, '', 'T', null, null, null, null, where, null, null, null, null);
    if (resAcctCd != null) {
      if (resAcctCd[0] == "N/A") {
        scwin.vCheckStatusUpload = "true";
      }
    } else {
      scwin.vCheckStatusUpload = "true";
    }
  }
  if (scwin.vCheckStatusUpload == "true") {
    $c.win.alert($p, "판관비/원가 부서 구분에 맞는 계정이 upload 자료에 세팅되어야 합니다. 확인하시고 다시 upload 하시기 바랍니다.(" + ed_acctCd + " , " + ed_acctDeptCd + ")");
    //ds_slipcontents.ClearData();
    //ds_temp.ClearData();
    ds_slipcontents.removeAll();
    ds_temp.removeAll();
    return false;
  } else {
    //ToBe 초기 포커스를 수작업으로 넣어 줘야 한다.
    var idx = ds_slipcontents.getRowCount() - 1;
    ds_slipcontents.setRowPosition(idx);
    gr_slipcontents.setFocusedCell(idx, 0, false);
  }
};

//-------------------------------------------------------------------------
// 팝업
//------------------------------------------------------------------------- 
scwin.f_openCommonPopUpAsync = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  //var rtnList = new Array(); 

  switch (disGubun) {
    case 1:
      // 부서		 
      //var param = ed_slipDt.text.trim()+",,,,"; 
      // 자회사 회계 시스템인 경우,  
      //if(isSubCompany)  {  
      param = ed_slipDt.getValue().trim() + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;

      //}
      udc_slipAcctDeptCd.setSelectId("retrieveAcctDeptCdInfo3");
      await udc_slipAcctDeptCd.cfCommonPopUpAsync(scwin.udc_slipAcctDeptCd_cb, pCode, pName, pClose, null, null, null, null, param, null, null, null, null);
      break;

    // 계정
    case 2:
      if (ed_acctDeptCd.getValue() == "") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, Array("귀속부서"));
        ed_acctDeptCd.focus();
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        return;
      }

      // 비용구분 : 01^원가,02^판관비,03^원가+판관비,04^판관비제외,05^원가제외
      if (scwin.txt_tempCostClsCd == "" || scwin.txt_tempCostClsCd == "03") {
        scwin.txt_costClsCd = "04"; // 전체조회
      } else if (scwin.txt_tempCostClsCd == "01") {
        scwin.txt_costClsCd = "05"; // 원가
      } else if (scwin.txt_tempCostClsCd == "02") {
        scwin.txt_costClsCd = "06"; // 판관비
      } else {
        scwin.txt_costClsCd = "";
      }
      let where = "";
      where = ed_slipDt.getValue().trim() + "," + scwin.txt_costClsCd + ",Y";

      // 계정조회
      if (scwin.isSubCompany == false) {
        //동부익스프레스, 자회사 구분으로 계정 팝업창 틀림 
        where = ed_slipDt.getValue().trim() + "," + scwin.txt_costClsCd + ",Y";
        udc_acctCd.setSelectId("retrieveTransferAcctCdInfo");
        await udc_acctCd.cfCommonPopUpAsync(scwin.udc_acctCd_cb2, pCode, pName, pClose, null, null, null, null, where, null, null, null, null);
      } else {
        where = ed_slipDt.getValue().trim() + "," + scwin.txt_costClsCd;
        udc_acctCd.setSelectId("retrieveTransferAcctCdInfo2");
        await udc_acctCd.cfCommonPopUpAsync(scwin.udc_acctCd_cb2, pCode, pName, pClose, null, null, null, null, where, null, null, null, null);
      }

      // 결과값 가지고 왔을때 원)세금과공과-과징금(4203417), 판)세금과공과-과징금(5001917) 계정일 경우
      // 잡손실(6120220)계정으로 작성해 주시기 바랍니다. 라는 메시지 출력해 준다.
      if (ed_acctCd.getValue() == '4203417') {
        $c.win.alert($p, "원)세금과공과-과징금(4203417) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        return;
      } else if (ed_acctCd.getValue() == '5001917') {
        $c.win.alert($p, "판)세금과공과-과징금(5001917) 계정을 \n\n잡손실(6120220)계정으로 작성해 주시기 바랍니다.");
        ed_acctCd.setValue("");
        ed_acctNm.setValue("");
        return;
      }

      // 계정이 선급비용-일반일 경우 상대계정필드 활성화
      if (ed_acctCd.getValue() == "1111110") {
        $c.gus.cfEnableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
      } else {
        ed_opntAcctCd.setValue("");
        ed_opntAcctNm.setValue("");
        ed_opntAcctCd.options.hidVal = "";
        $c.gus.cfDisableObjects($p, [ed_opntAcctCd, ed_opntAcctNm, btn_opntAcctCd]);
      }
      break;
    case 3:
      // 부서		 
      //var param = ed_slipDt.text.trim()+",,,,"; 
      // 자회사 회계 시스템인 경우,  
      //if(isSubCompany)  {  
      param = ed_slipDt.getValue().trim() + ",," + scwin.vCoCd + "," + scwin.vCoClsCd;
      //}
      udc_acctDeptCd.setSelectId("retrieveAcctDeptCdInfo3");
      await udc_acctDeptCd.cfCommonPopUpAsync(scwin.udc_acctDeptCd_cb, ed_acctDeptCd.getValue().trim(), ed_acctDeptNm.getValue(), 'F', null, null, null, null, param, null, null, null, null);
      break;
    case 4:
      // 거래처
      var param = '';
      param = scwin.vCoCd;
      udc_mgntClntNo.setSelectId("retrieveClntEmpNoList");
      return await udc_mgntClntNo.cfCommonPopUpAsync(scwin.udc_mgntClntNo_cb, pCode, pName, pClose, null, null, null, null, param, null, null, null, null, null, pAllSearch);
      break;
    case 5:
      // 사번
      param = '';
      if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
        // 자회사 회계 시스템
        param = scwin.txtCoCd;
      }
      udc_mgntEmpNo.setSelectId("retrieveAcEmpInfo");
      await udc_mgntEmpNo.cfCommonPopUpAsync(scwin.udc_mgntEmpNo_cb, pCode, pName, pClose, null, null, null, null, param, null, null, pAllSearch, null);
      break;
    case 6:
      // 사업자번호
      param = '';
      selectID = 'retrieveCrnInfo';
      udc_crn.setSelectId(selectID);

      /*
      // 자회사도 사업자번호팝업은 똑같이 떠야한다고 해서 바꿨음
      if(txtCoClsCd.value > '<%=ACConstants.CO_CLS_CD_DONGBU%>') { // 자회사 회계 시스템
          selectID= 'retrieveCrnClntInfo';
          param = ","+txtCoCd.value;
      }  
      */

      await udc_crn.cfCommonPopUpAsync(scwin.udc_crn_cb, pCode, pName, pClose, null, null, null, null, param, null, null, pAllSearch, null);
      break;

    // 상대계정조회
    case 7:
      // 2014 05 15 선급비용 처리분에 선급비용-일반 계정이 추가됨으로 인한 상대계정 입력필드 추가
      // 비용구분 : 01^원가,02^판관비,03^원가+판관비,04^판관비제외,05^원가제외
      if (scwin.txt_tempOpntAcctCostClsCd == "" || scwin.txt_tempOpntAcctCostClsCd == "03") {
        scwin.txt_opntAcctCostClsCd = "04"; // 전체조회
      } else if (scwin.txt_tempOpntAcctCostClsCd == "01") {
        scwin.txt_opntAcctCostClsCd = "05"; // 원가
      } else if (scwin.txt_tempOpntAcctCostClsCd == "02") {
        scwin.txt_opntAcctCostClsCd = "06"; // 판관비
      } else {
        scwin.txt_opntAcctCostClsCd = "";
      }
      where = "";
      where = ed_slipDt.getValue().trim() + "," + scwin.txt_opntAcctCostClsCd + ",Y";
      if (scwin.isSubCompany == false) {
        //동부익스프레스, 자회사 구분으로 계정 팝업창 틀림 
        where = ed_slipDt.getValue().trim() + "," + scwin.txt_costClsCd + ",Y";
        udc_opntAcctCd.setSelectId("retrieveTransferAcctCdInfo");
        await udc_opntAcctCd.cfCommonPopUpAsync(scwin.udc_opntAcctCd_cb, pCode, pName, pClose, null, null, null, null, where, null, null, null, null);
      } else {
        where = ed_slipDt.getValue().trim() + "," + scwin.txt_costClsCd;
        udc_opntAcctCd.setSelectId("retrieveTransferAcctCdInfo2");
        await udc_opntAcctCd.cfCommonPopUpAsync(scwin.udc_opntAcctCd_cb, pCode, pName, pClose, null, null, null, null, where, null, null, null, null);
      }
      break;
    case 8:
      // 요청거래처
      param = ACConstants.CO_CD_DONGBU;
      udc_reqClntNo.setSelectId("retrieveClntEmpNoList");
      return await udc_reqClntNo.cfCommonPopUpAsync(scwin.udc_reqClntNo_cb, pCode, pName, pClose, null, null, null, null, param, null, null, null, null, null, pAllSearch);
      break;
    default:
      break;
  }
};
scwin.ds_slipcontents_oncelldatachange = function (info) {
  var rowIndex = info.rowIndex;
  var colID = info.colID;
  //    var oldValue = info.oldValue;
  //    var newValue = info.newValue;

  if (colID == "amt" || colID == "drcrClsCd") {
    if (ds_slipcontents.getCellData(rowIndex, "drcrClsCd") == "D") {
      ds_slipcontents.setCellData(rowIndex, "dAmt", ds_slipcontents.getCellData(rowIndex, "amt"));
      ds_slipcontents.setCellData(rowIndex, "cAmt", "0");
    } else {
      ds_slipcontents.setCellData(rowIndex, "cAmt", ds_slipcontents.getCellData(rowIndex, "amt"));
      ds_slipcontents.setCellData(rowIndex, "dAmt", 0);
    }
  }
};
scwin.chb_payProcYn_onviewchange = function (info) {
  scwin.f_CheckPayYn();
};
scwin.gr_slipcontents_onfilereadend = function (value) {};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작성일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_slipDt',style:'',mandatory:'true',title:'작성일자',ref:'data:dma_slip.slipDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'발행부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',onloadCallbackFunc:'',selectID:'',codeId:'ed_slipAcctDeptCd',popupTitle:'',nameId:'ed_slipAcctDeptNm',style:'',id:'udc_slipAcctDeptCd',btnId:'btn_slipAcctDeptCd','ev:onblurCodeEvent':'scwin.udc_slipAcctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_slipAcctDeptCd_onclickEvent',validTitle:'발행부서',mandatoryCode:'true',allowCharCode:'0-9',maxlengthCode:'5'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'대체전표내역입력',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'차대구분',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',style:'width: 150px;',id:'lc_drcrClsCd',class:'',objType:'data',mandatory:'true','ev:onblur':'scwin.lc_drcrClsCd_onblur','ev:onviewchange':'scwin.lc_drcrClsCd_onviewchange',ref:'data:ds_slipcontents.drcrClsCd',title:'차대구분'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계정',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_group6',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctCd',selectID:'',popupID:'',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_acctNm',style:'',class:'',id:'udc_acctCd',btnId:'btn_acctCd',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_acctCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctCd_onclickEvent',validTitle:'계정코드',refDataCollection:'ds_slipcontents',code:'acctCd',name:'acctNm',allowCharCode:'0-9',maxlengthCode:'7'}},{T:1,N:'xf:select',A:{ref:'data:ds_slipcontents.payProcYn',appearance:'full',style:'',id:'chb_payProcYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'chk-grp',cols:'',falseValue:'0',objType:'data','ev:onviewchange':'scwin.chb_payProcYn_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지급'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_recvProcYn',ref:'data:ds_slipcontents.recvProcYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'채권'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'통화코드/환율',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_group3 ',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 150px;',allOption:'false',id:'lc_crcCd',class:'',direction:'auto',objType:'data',mandatory:'true','ev:onchange':'scwin.lc_crcCd_onchange',ref:'data:ds_slipcontents.crcCd',emptyItem:'true',title:'통화코드'}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_exchRt',class:'',objType:'data',ref:'data:ds_slipcontents.exchRt'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'외화금액',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'',id:'ed_amtFcrc',class:' tar',objType:'data',ref:'data:ds_slipcontents.amtFcrc',dataType:'float',displayFormat:'#,###',maxByteLength:'13.2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'금액',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width: 304px;',id:'ed_amt',class:'tar',objType:'data',mandatory:'true','ev:onblur':'scwin.ed_amt_onblur',invalidMessage:'금액',ref:'data:ds_slipcontents.amt',initValue:'0',displayFormat:'#,##0',maxlength:'18',dataType:'number',allowChar:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'관리번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_group5',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:110px;',id:'ed_mgntNm',class:'',objType:'data',ref:'data:ds_slipcontents.mgntNm'}},{T:1,N:'xf:input',A:{style:'',id:'ed_mgntNo',class:'',objType:'data',ref:'data:ds_slipcontents.mgntNo'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'증빙종류',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_group4',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width: 304px;',allOption:'',id:'lc_evidClsCd',class:'',direction:'auto',objType:'data',mandatory:'true',ref:'data:ds_slipcontents.evidClsCd',chooseOptionLabel:'없음',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_evidClsCd'},E:[{T:1,N:'xf:label',A:{ref:'col2'}},{T:1,N:'xf:value',A:{ref:'col1'}}]}]}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width:200px;',allOption:'false',id:'lc_deductClsCd',class:'',direction:'auto',objType:'data',emptyItem:'true',ref:'data:ds_slipcontents.deductClsCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업자번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_crn',selectID:'',popupID:'',onloadCallbackFunc:'',popupTitle:'',nameId:'ed_crnNm',style:'',class:'',btnId:'btn_crn',id:'udc_crn',objTypeCode:'data',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent','ev:onclickEvent':'scwin.udc_crn_onclickEvent',refDataCollection:'ds_slipcontents',code:'crn',maxlengthCode:'13',allowCharCode:'0-9a-zA-Z',UpperFlagCode:'1'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계산서일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_taxinvcDt',style:'',objType:'data',ref:'data:ds_slipcontents.taxinvcDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'공급금액',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_spplyAmt',style:'width: 236px;',objType:'data',mandatory:'true',invalidMessage:'공급금액',ref:'data:ds_slipcontents.spplyAmt',title:'공급금액',dataType:'number',displayFormat:'#,##0',maxlength:'13',initValue:'0',allowChar:'0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'귀속부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'',style:'',id:'udc_acctDeptCd',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true',btnId:'btn_acctDeptCd','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent',refDataCollection:'ds_slipcontents',code:'acctDeptCd',name:'acctDeptNm',allowCharCode:'0-9',maxlengthCode:'5'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',codeId:'ed_mgntClntNo',nameId:'ed_mgntClntNm',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'',style:'',id:'udc_mgntClntNo',objTypeCode:'data',objTypeName:'data',btnId:'btn_mgntClntNo','ev:onblurCodeEvent':'scwin.udc_mgntClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_mgntClntNo_onclickEvent',refDataCollection:'ds_slipcontents',code:'mgntClntNo',name:'mgntClntNm',validTitle:'거래처',skipOnBlurCodeValueEmpty:'N',allowCharCode:'0-9',maxlengthCode:'6'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'관리일자',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_mgntDt',style:'',objType:'data',mandatory:'true',ref:'data:ds_slipcontents.mgntDt',title:'관리일자'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'관리기간',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_mgntTerm',refDataMap:'ds_slipcontents',refEdDt:'mgntTermEndDt',refStDt:'mgntTermStDt',style:'',edFromId:'ed_mgntTermStDt',edToId:'ed_mgntTermEndDt',objTypeFrom:'data',objTypeTo:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사원번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',codeId:'ed_mgntEmpNo',nameId:'ed_mgntEmpNm',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'',style:'',id:'udc_mgntEmpNo',objTypeCode:'data',objTypeName:'data',btnId:'btn_mgntEmpNo','ev:onblurCodeEvent':'scwin.udc_mgntEmpNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_mgntEmpNo_onclickEvent',refDataCollection:'ds_slipcontents',code:'mgntEmpNo',name:'mgntEmpNm',validTitle:'사원번호'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'적요',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_summary',style:'',objType:'data',mandatory:'true',ref:'data:ds_slipcontents.summary',title:'적요'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지급일자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_reqDt',style:'',objType:'data',ref:'data:ds_slipcontents.reqDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지급방법',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_reqPayMthdCd',style:'width: 236px;',submenuSize:'auto',objType:'data','ev:onchange':'scwin.lc_reqPayMthdCd_onchange',ref:'data:ds_slipcontents.reqPayMthdCd',emptyItem:'true',visibleRowNum:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'어음일수',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_draftDdCntCd',style:'width: 120px;',objType:'data',ref:'data:ds_slipcontents.draftDdCntCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상대계정',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',codeId:'ed_opntAcctCd',nameId:'ed_opntAcctNm',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'',style:'',id:'udc_opntAcctCd',objTypeCode:'data',objTypeName:'data',btnId:'btn_opntAcctCd','ev:onblurCodeEvent':'scwin.udc_opntAcctCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_opntAcctCd_onclickEvent',refDataCollection:'ds_slipcontents',code:'opntAcctCd',name:'opntAcctNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청 거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',codeId:'ed_reqClntNo',nameId:'ed_reqClntNm',onloadCallbackFunc:'',popupID:'',popupTitle:'',selectID:'',style:'',id:'udc_reqClntNo',objTypeCode:'data',objTypeName:'data',btnId:'btn_reqClntNo','ev:onblurCodeEvent':'scwin.udc_reqClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_reqClntNo_onclickEvent',refDataCollection:'ds_slipcontents',code:'reqClntNo',name:'reqClntNm',maxlengthCode:'6',allowCharCode:'0-9'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'전표분개내역 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'section col-gap-8'},E:[{T:1,N:'xf:group',A:{id:'group7',class:'inner'},E:[{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'',id:'btn_upload_type',renderType:'radiogroup',rows:'',cols:'',selectedIndex:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'xlsx'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'csv'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_up',style:'',type:'button','ev:onclick':'scwin.btn_up_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_jo',style:'',type:'button','ev:onclick':'scwin.btn_jo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'분개장UP'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'N',btnUser:'N',gridUpYn:'N',templateYn:'N',id:'udc_grd_up_btns'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',rowNumVisible:'true',checkAllType:'false',dataList:'data:ds_slipcontents',style:'',rowNumHeaderValue:'No',autoFit:'lastColumn',id:'gr_slipcontents',visibleRowNum:'7',class:'wq_gvw','ev:oncellclick':'scwin.gr_slipcontents_oncellclick',readOnly:'true',rowStatusVisible:'true','ev:onfilereadend':'scwin.gr_slipcontents_onfilereadend'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column15',value:'지급처리여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column13',value:'계정',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column11',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column3',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column5',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column7',value:'차변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'대변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column52',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column49',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'통화코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'전표<br/>분할구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column40',value:'부가세처리제외여부구분코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'payProcYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'',style:'',id:'dAmt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0.###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'',style:'',id:'cAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crcCd',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'slipDivideNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'vatPassClsCd',value:'',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'150',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'120',inputType:'expression',style:'',id:'column22',value:'0',displayMode:'label',expression:'SUM("dAmt")',displayFormat:'#,##0.###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column21',value:'0',displayMode:'label',textAlign:'right',expression:'SUM("cAmt")',displayFormat:'#,##0.###'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DeleteRow',cancelFunction:'scwin.f_CancelRow',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]},{T:1,N:'xf:group',A:{class:'left',id:'',style:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',type:'button',class:'btn',userAuth:'U','ev:onclick':'scwin.btn_save_onclick',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발행'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8 dsN',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'group10',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_temp','ev:oncellclick':'scwin.gr_slipcontents_oncellclick',id:'gr_excel0',readOnly:'true',rowNumHeaderValue:'No',rowNumVisible:'true',style:'',visibleRowNum:'7',visibleRowNumFix:'true','ev:onfilereadend':'scwin.gr_excel0_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'계정코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'계정명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'지급처리여부',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'채권처리여부',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'통화코드',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'환율',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'차변금액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column52',inputType:'text',value:'대변금액',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',value:'차변_외화',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',value:'대변_외화',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',value:'관리번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column40',inputType:'text',value:'귀속부서코드',width:'180'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column55',value:'관리거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column58',value:'관리일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column61',value:'관리기간시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column64',value:'관리기간종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column67',value:'관리사원번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column70',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column73',value:'지급일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column76',value:'요청방법코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column79',value:'일수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column82',value:'세금계산서일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column85',value:'증빙구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column88',value:'공제여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column91',value:'사업자번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column94',value:'공급금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column97',value:'전표분할구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column100',value:'상대계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column103',value:'부가세처리제외여부구분코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctNm',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payProcYn',inputType:'text',textAlign:'right',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'recvProcYn',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',textAlign:'left',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'exchRt',inputType:'text',textAlign:'right',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dAmt',inputType:'text',textAlign:'right',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cAmt',inputType:'text',textAlign:'left',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dAmtFcrc',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cAmtFcrc',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',width:'180'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mgntClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mgntDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mgntTermStDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mgntTermEndDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mgntEmpNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'summary',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'reqDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'reqPayMthdCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'draftDdCntCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'taxinvcDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'evidClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'deductClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'spplyAmt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'slipDivideNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'opntAcctCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vatPassClsCd',displayMode:'label'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8 dsN',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'group11',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_temp','ev:oncellclick':'scwin.gr_slipcontents_oncellclick',id:'gr_excel1',readOnly:'true',rowNumHeaderValue:'No',rowNumVisible:'true',style:'',visibleRowNum:'7',visibleRowNumFix:'true','ev:onfilereadend':'scwin.gr_excel1_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'차대구분코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'계정코드',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'지급처리여부',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'통화코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'환율',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'금액_외화',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'금액',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column52',inputType:'text',value:'관리번호',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',value:'귀속부서코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column46',inputType:'text',value:'관리거래처번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',value:'관리일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column40',inputType:'text',value:'관리기간시작일자',width:'180'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column55',displayMode:'label',value:'관리기간종료일자'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column58',displayMode:'label',value:'관리사원번호'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column61',displayMode:'label',value:'적요'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column64',displayMode:'label',value:'지급일자'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column67',displayMode:'label',value:'요청방법코드'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column70',displayMode:'label',value:'일수'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column73',displayMode:'label',value:'세금계산서일자'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column76',displayMode:'label',value:'증빙구분코드'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column79',displayMode:'label',value:'공제여부'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column82',displayMode:'label',value:'사업자번호'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column85',displayMode:'label',value:'공급금액'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column88',displayMode:'label',value:'전표분할구분'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column91',displayMode:'label',value:'상대계정코드'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column94',displayMode:'label',value:'부가세처리제외여부구분코드'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column97',value:'요청거래처번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'drcrClsCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctCd',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payProcYn',inputType:'text',textAlign:'right',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'exchRt',inputType:'text',textAlign:'left',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtFcrc',inputType:'text',textAlign:'right',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',textAlign:'right',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntNo',inputType:'text',textAlign:'left',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntClntNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntDt',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mgntTermStDt',inputType:'text',width:'180'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mgntTermEndDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mgntEmpNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'summary',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'reqDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'reqPayMthdCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'draftDdCntCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'taxinvcDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'evidClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'deductClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'spplyAmt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'slipDivideNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'opntAcctCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vatPassClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reqClntNo',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',textAlign:'right',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',textAlign:'right',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',textAlign:'right',value:'0',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',textAlign:'right',value:'0',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column54',inputType:'text',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',width:'180'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column84',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column87',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column90',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column93',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column96',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}}]}]}]}]}]}]}]}]}]}]})