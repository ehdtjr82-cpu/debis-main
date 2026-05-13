/*amd /ui/cm/bc/clnt/clntmgnt/zz_210_02_05b.xml 159371 82100d1bcda6c192c179d60b47c1b9392f13ac7117d564702cf1288a43999ec9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCls',name:'sysCls',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCntn',name:'qryCntn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntLupCond',name:'clntLupCond',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntDelYn',name:'clntDelYn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'coCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'coClsCd',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_accountCustomer',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_accountCustomer_onbeforerowpositionchange','ev:onrowpositionchange':'scwin.ds_accountCustomer_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fncInstCd',name:'금융기관코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fncInstNm',name:'금융기관명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperClntNo',name:'상위거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'originalCrn',name:'originalCrn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntBusiClsCd',name:'거래처사업자구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntKndCd',name:'거래처종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntDeptNm',name:'거래처부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPersPstNm',name:'거래처직원직위명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPersNm',name:'거래처직원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntTelNo',name:'거래처전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMpNo',name:'거래처핸드폰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntEmail',name:'거래처EMAIL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntFaxNo',name:'거래처팩스번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomPicEmpNo',name:'당사담당자사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomPicEmpNm',name:'당사담당자사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntYn',name:'매입구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntYn',name:'매출구분코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiAddr',name:'사업자주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'accountClntKndCd',name:'회계거래처종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'대표자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiClsNm',name:'사업자구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'biztypeNm',name:'업종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcondNm',name:'업태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntDelYn',name:'거래처삭제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'modId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCdNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiZip',name:'사업자 우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiAddr1',name:'사업자 주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiAddr2',name:'사업자 주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntTyp',name:'BIDC전용 거래처타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNationCd',name:'거래처 nation 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNationNm',name:'거래처 nation 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'engAddr1',name:'영문주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'engAddr2',name:'영문주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'engAddr3',name:'영문주소3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'engAddr4',name:'영문주소4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntEngNm',name:'거래처영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opusClntNo',name:'LA법인전용 OPUS거래처코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dam_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bizType',name:'bizType',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_collMoneyCond',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_collMoneyCond_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCd',name:'수금귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptNm',name:'수금귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtPrdClsCd',name:'결재조건-구분(구:수금주기코드)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stmtPrdDd',name:'결재조건-결재기한(구:수금일)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyCntShtCd',name:'수금수단코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCnt',name:'어음일수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyCrcCd',name:'수금통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyBankbookNo',name:'수금통장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmYn',name:'확인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payCond',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_payCond_oncelldatachange','ev:onrowpositionchange':'scwin.ds_payCond_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAcctDeptCd',name:'지급귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAcctDeptNm',name:'계약부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mbssysVehclYn',name:'회원제차량여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtClntNo',name:'화주거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCycCd',name:'지급주기코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payDd',name:'지급일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCntShtCd',name:'지급수단코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cashRt',name:'적용비율(현금)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftRt',name:'적용비율(어음)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmYn',name:'확인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_payAcnt',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_payAcnt_oncelldatachange','ev:onrowpositionchange':'scwin.ds_payAcnt_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payClsCd',name:'지급구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpstrNm',name:'예금주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transfCmisDeductYn',name:'이체수수료공제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmYn',name:'확인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'elecStmtBankCd',name:'전자결제은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payCrcCd',name:'지급화폐코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchase',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntClsCd',name:'매입거래처구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_contractFileDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regSeq',name:'등록순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtFileNm',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClsCd',name:'등록구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtFilePath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtType',name:'계약서구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtFromDt',name:'계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'등록자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_rcptDca',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'은행코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptDca',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_judge',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'col1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'col2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'col3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col4',name:'col4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col5',name:'col5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col6',name:'col6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col7',name:'col7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col8',name:'col8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col9',name:'col9'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col10',name:'col10'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_payCycCd',repeatNode:'map',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdDesc',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdEngNm',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdEngNmAbbr',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNmAbbr',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd1',name:'name7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd2',name:'name8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd3',name:'name9'}},{T:1,N:'w2:column',A:{dataType:'text',id:'grpCd',name:'name10'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modDtm',name:'name11'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modId',name:'name12'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regDtm',name:'name13'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regId',name:'name14'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sortSeq',name:'name15'}},{T:1,N:'w2:column',A:{dataType:'text',id:'upperCd',name:'name16'}},{T:1,N:'w2:column',A:{dataType:'text',id:'upperCdNm',name:'name17'}},{T:1,N:'w2:column',A:{dataType:'text',id:'useYn',name:'name18'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_payDd',repeatNode:'map',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'grpCd',name:'grpCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'cd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'cdNm'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd1',name:'fltrCd1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd2',name:'fltrCd2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd3',name:'fltrCd3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sortSeq',name:'sortSeq'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_commonCodeZZ018',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdDesc',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cdNm',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd1',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd2',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fltrCd3',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'grpCd',name:'name7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rowStatus',name:'name8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sortSeq',name:'name9'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_accountCustomer',action:'/cm.bc.clnt.clntmgnt.RetrieveAccountCustomerListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_accountCustomer","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_accountCustomer","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_accountCustomer_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveAccountCustomerList',action:'/cm.bc.clnt.clntmgnt.RetrieveCollMoneyPayCondAcntListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dam_search","key":"IN_DS1"},{"id":"ds_collMoneyCond","key":"OUT_DS1"},{"id":"ds_payCond","key":"OUT_DS2"},{"id":"ds_payAcnt","key":"OUT_DS3"},{"id":"ds_purchase","key":"O:OUT_DS4"},{"id":"ds_contractFileDetail","key":"OUT_DS6"},{"id":"ds_rcptDca","key":"OUT_DS7"}]',target:'data:json,[{"id":"ds_collMoneyCond","key":"OUT_DS1"},{"id":"ds_payCond","key":"OUT_DS2"},{"id":"ds_payAcnt","key":"OUT_DS3"},{"id":"ds_purchase","key":"OUT_DS4"},{"id":"ds_contractFileDetail","key":"OUT_DS6"},{"id":"ds_rcptDca","key":"OUT_DS7"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveAccountCustomerList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveAccountCustomer',action:'/cm.bc.clnt.clntmgnt.SaveAccountCustomerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_accountCustomer","key":"IN_DS1"},{"action":"modified","id":"ds_payCond","key":"IN_DS2"},{"action":"modified","id":"ds_payAcnt","key":"IN_DS3"},{"action":"modified","id":"ds_collMoneyCond","key":"IN_DS4"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveAccountCustomer_submitdone','ev:submiterror':'scwin.sbm_saveAccountCustomer_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_judge',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_judge","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_judge_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_payCycCd',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_payCycCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_payDd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_payDd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_payDd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.userHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.sysAdminYn = scwin.memJson.sysAdminYn;
scwin.lobranCd = scwin.memJson.lobranCd;
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.params = $c.data.getParameter($p);
if (scwin.params != "" && scwin.params != undefined) {
  scwin.callCnstNo = scwin.params["callCnstNo"] == null ? "" : scwin.params["callCnstNo"];
  scwin.clntNo = scwin.params["clntNo"] == null ? "" : scwin.params["clntNo"];
  scwin.clntNm = scwin.params["clntNm"] == null ? "" : scwin.params["clntNm"];
}
scwin.pos_clnt = 0;
scwin.gJudgeYn = "0";
scwin.g_sLoginDept = scwin.memJson.acctDeptCd;
scwin.g_sLobranCd = scwin.memJson.lobranCd;
scwin.vLoginCoCd = scwin.memJson.coCd; // 소속 자회사  
scwin.vLoginCoClsCd = scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드 
scwin.vCoCd = scwin.memJson.coCd; // 회사코드
scwin.isSubCompany = false;

//hidden 
scwin.txt_clntNoValChk = "";
scwin.txt_clntNo = "0";
scwin.txt_clntLupCond = "0";
scwin.txt_sysCls = "0";
scwin.txt_payIdx = "";
scwin.txt_createYn = "0";
scwin.txt_updateYn = "0";
scwin.txt_rowCount = "-1";
scwin.txt_saveType = "-1";
scwin.txt_payCondRowCount = "0";
scwin.txt_payAcntRowCount = "0";
scwin.txtCoClsCd = "";
scwin.idx = 1;
scwin.txt_originalCrn = "";
scwin.originalCrn = "";

//-------------------------------------------------------------------------
// Dataset DEBUG
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ018",
    compID: "lc_sysCls,lc_accountClntKndCd"
  }, {
    grpCd: "FI018",
    compID: "lc_clntBusiClsCd"
  }, {
    grpCd: "SD020",
    compID: "gr_tb_Grid1:stmtPrdClsCd"
  }, {
    grpCd: "SD010",
    compID: "gr_tb_Grid1:collMoneyCntShtCd"
  }, {
    grpCd: "ZZ006",
    compID: "gr_tb_Grid1:collMoneyCrcCd, gr_tb_Grid2:payCrcCd, gr_tb_Grid3:payCrcCd"
  }, {
    grpCd: "FM041",
    compID: "gr_tb_Grid2:payCycCd"
  }, {
    grpCd: "FM018",
    compID: "gr_tb_Grid2:payCntShtCd",
    opt: {
      'range': '3,99'
    }
  }, {
    grpCd: "FM019",
    compID: "gr_tb_Grid3:payClsCd"
  }, {
    grpCd: "FM063",
    compID: "gr_tb_Grid3:elecStmtBankCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

/**
 * UDC 셋팅이 이후..
 */
scwin.onUdcCompleted = function () {};

// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
scwin.ondataload = function () {
  scwin.txt_payIdx = "1";
  scwin.f_retrieveJudge();
  scwin.f_ContentsDisable();
  let dltStr = "dlt_commonCodeZZ018";
  let dlt = $c.gus.object($p, dltStr);
  ds_commonCodeZZ018.setJSON(dlt.getAllJSON());
  lc_accountClntKndCd.setNodeSet('data:ds_commonCodeZZ018');
  lc_sysCls.addItem("0", "전체", 0);
  lc_sysCls.setSelectedIndex(3);
  scwin.gJudgeYn = "0";
  for (let i = 0; i < ds_judge.getRowCount(); i++) {
    if (scwin.g_sLoginDept == ds_judge.getCellData(i, "col1")) {
      scwin.gJudgeYn = "1";
    }
  }
  ed_qryCntn.focus();
  scwin.f_setCompanyInfo();
  $c.gus.cfDisableBtn($p, [btn_Update, btn_Cancel, btn_Save, btn_Update2, btn_Cancel2, btn_Save2, btn_AddRow1, btn_DeleteRow1, btn_CancelRow1, btn_AddRow2, btn_DeleteRow2, btn_CancelRow2, btn_AddRow3, btn_DeleteRow3, btn_CancelRow3, btn_AddRow4, btn_DeleteRow4, btn_CancelRow4]);
  cbx_printCheck.checkAll(true);
};

//-------------------------------------------------------------------------
// 회계 거래처 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  scwin.txt_saveType = "2"; // 0:신규, 1:수정, 2:조회
  scwin.txt_payIdx = "1";
  tac_tab.setSelectedTabIndex(0);
  scwin.f_ContentsDisable();
  let txt_qryCntn = ed_qryCntn.getValue().trimAll();
  if (scwin.bytelength(txt_qryCntn) < 2) {
    msgArr = new Array(2);
    msgArr[0] = "검색어";
    msgArr[1] = "글자(숫자) 한(두)";
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_011, msgArr);
    ed_qryCntn.focus();
    return false;
  }
  let vClntDelYn = "0";
  if (cbx_clntDelYn.getValue()) {
    vClntDelYn = "1";
  }
  let condition = {
    "sysCls": lc_sysCls.getValue(),
    "qryCntn": ed_qryCntn.getValue(),
    "clntLupCond": lc_clntLupCond.getValue(),
    "clntDelYn": vClntDelYn,
    "coCd": ed_coCd.getValue(),
    "coClsCd": scwin.txtCoClsCd
  };
  dma_condition.setJSON(condition);
  $c.sbm.execute($p, sbm_accountCustomer);
};
scwin.sbm_judge_submitdone = function (e) {
  scwin.gJudgeYn = "0";
  for (let i = 0; i < ds_judge.getRowCount(); i++) {
    if (scwin.g_sLoginDept == ds_judge.getCellAllData(i, "col1")) {
      scwin.gJudgeYn = "1";
    }
  }
};

//-------------------------------------------------------------------------
// 수금, 지급조건, 지급계좌 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveCollPayAcnt = function () {
  dam_search.set("clntNo", scwin.txt_clntNo);
  $c.sbm.execute($p, sbm_RetrieveAccountCustomerList);
};

//-------------------------------------------------------------------------
// 항목 Enable
//-------------------------------------------------------------------------
scwin.f_ContentsEnable = function () {
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableObj($p, btn_crn_search, true); // 사업자등록번호 이미지 활성화
  $c.gus.cfEnableObj($p, btn_zip_search, true); // 우편번호찾기 이미지 활성화
  $c.gus.cfEnableObj($p, btn_bank_search, true); // 은행팝업 이미지 활성화
  $c.gus.cfEnableObj($p, btn_emp_search, true); // 사원팝업 이미지 활성화
  $c.gus.cfEnableObj($p, btn_mcomPicEmp_search, true); // 담당자팝업 이미지 활성화

  $c.gus.cfEnableObj($p, lc_clntBusiClsCd, false); // 거래처사업자구분코드
  $c.gus.cfEnableObj($p, lc_accountClntKndCd, true); // 회계거래처 종류 활성화
  $c.gus.cfEnableObj($p, ed_zip, true); // 우편번호

  gr_tb_Grid1.setReadOnly("grid", false);
  gr_tb_Grid2.setReadOnly("grid", false);
  gr_tb_Grid3.setReadOnly("grid", false);
  gr_tb_Grid4.setReadOnly("grid", false);
};

//-------------------------------------------------------------------------
// 항목 Disable
//-------------------------------------------------------------------------
scwin.f_ContentsDisable = function () {
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableObj($p, btn_crn_search, false); // 사업자등록번호 이미지 비활성화
  $c.gus.cfEnableObj($p, btn_zip_search, false); // 우편번호찾기 이미지 비활성화
  $c.gus.cfEnableObj($p, btn_bank_search, false); // 은행팝업 이미지 비활성화
  $c.gus.cfEnableObj($p, btn_emp_search, false); // 사원팝업 이미지 비활성화
  $c.gus.cfEnableObj($p, btn_mcomPicEmp_search, false); // 사원팝업 이미지 비활성화

  $c.gus.cfEnableObj($p, lc_accountClntKndCd, false); // 회계거래처 종류 비활성화
  $c.gus.cfEnableObj($p, lc_clntBusiClsCd, false); // 거래처사업자구분코드
  $c.gus.cfEnableObj($p, ed_zip, false); // 우편번호
  $c.gus.cfEnableObj($p, rd_clntDelYn, false); // 거래사용여부

  $c.gus.cfEnableObj($p, ed_clntNo, false);
  $c.gus.cfEnableObj($p, ed_crn, false);
  $c.gus.cfEnableObj($p, ed_bizcondNm, false);
  $c.gus.cfEnableObj($p, ed_biztypeNm, false);
  $c.gus.cfEnableObj($p, ed_repstNm, false);
  $c.gus.cfEnableObj($p, ed_fncInstCd, false);
  $c.gus.cfEnableObj($p, ed_fncInstNm, false);
  $c.gus.cfEnableObj($p, ed_empNo, false);
  $c.gus.cfEnableObj($p, ed_empNm, false);
  $c.gus.cfEnableObj($p, ed_addr1, false);
  $c.gus.cfEnableObj($p, ed_busiAddr, false);
  $c.gus.cfEnableObj($p, ed_deptNm, false);
  $c.gus.cfEnableObj($p, ed_regId, false);
  $c.gus.cfEnableObj($p, ed_regDtm, false);
  $c.gus.cfEnableObj($p, ed_modId, false);
  $c.gus.cfEnableObj($p, ed_modDtm, false);
  gr_tb_Grid1.setReadOnly("grid", true);
  gr_tb_Grid2.setReadOnly("grid", true);
  gr_tb_Grid3.setReadOnly("grid", true);
  gr_tb_Grid4.setReadOnly("grid", true);
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  scwin.f_ContentsEnable();
  let rowIndex = ds_accountCustomer.insertRow();
  gr_accountCustomer.setFocusedCell(rowIndex, 0);
  ds_accountCustomer.setCellData(rowIndex, "clntKndCd", "AC");
  $c.gus.cfEnableObj($p, btn_emp_search, false); // 사원팝업 이미지 비활성화
  $c.gus.cfEnableObj($p, btn_bank_search, false); // 은행팝업 이미지 비활성화

  // clntBusiClsCd.Index = 0;
  // accountClntKndCd.Index =2;
  // clntDelYn.CodeValue = 0;

  lc_clntBusiClsCd.setSelectedIndex(0);
  lc_accountClntKndCd.setSelectedIndex(2);
  rd_clntDelYn.setValue("0");
  scwin.txt_createYn = "1";
  scwin.txt_updateYn = "0";
  scwin.txt_saveType = "0"; // 0:신규, 1:수정, 2:조회, 3:저장, 4:취소

  gr_tb_Grid1.setReadOnly("grid", false);
  gr_tb_Grid2.setReadOnly("grid", false);
  gr_tb_Grid3.setReadOnly("grid", false);
  gr_tb_Grid4.setReadOnly("grid", false);
  $c.gus.cfDisableBtn($p, [btn_Create, btn_Update, btn_Create2, btn_Update2]);
  if (scwin.g_sLoginDept != "00009") {
    //채권팀
    $c.gus.cfEnableObj($p, cbx_sellClntYn, false); // 매출 비활성화
    $c.gus.cfDisableBtnOnly($p, [, btn_AddRow1, btn_DeleteRow1, btn_CancelRow1, btn_AddRow2, btn_DeleteRow2, btn_CancelRow2, btn_AddRow3, btn_DeleteRow3, btn_CancelRow3, btn_AddRow4, btn_DeleteRow4, btn_CancelRow4]);
  }
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  let vSellClntYn = cbx_sellClntYn.getValue(); // 매출
  let vPchsClntYn = cbx_pchsClntYn.getValue(); // 매입
  // disable 처리
  scwin.f_ContentsEnable();
  scwin.txt_createYn = "0";
  scwin.txt_updateYn = "1"; // 수정인경우
  scwin.txt_saveType = "1"; // 0:신규, 1:수정, 2:조회, 3:저장, 4:취소

  $c.gus.cfDisableBtn($p, [btn_Create, btn_Update, btn_Create2, btn_Update2]);
  if (scwin.g_sLoginDept != "00009") {
    //채권팀
    // tb_Grid1.Editable = false;
    gr_tb_Grid1.setReadOnly("grid", true);
    $c.gus.cfEnableObj($p, cbx_sellClntYn, false); // 매출 비활성화
    if (scwin.txt_payIdx == "1") {
      //수금조건
      $c.gus.cfDisableBtnOnly($p, [, btn_AddRow1, btn_DeleteRow1, btn_CancelRow1, btn_AddRow2, btn_DeleteRow2, btn_CancelRow2, btn_AddRow3, btn_DeleteRow3, btn_CancelRow3, btn_AddRow4, btn_DeleteRow4, btn_CancelRow4]);
    }
    if (vSellClntYn == 1 && vPchsClntYn == 1 || vSellClntYn == 0 && vPchsClntYn == 1) {
      $c.gus.cfEnableObj($p, rd_clntDelYn, true); // 거래사용여부
    } else if (vSellClntYn == 1 && vPchsClntYn == 0) {
      $c.gus.cfEnableObj($p, rd_clntDelYn, false); // 거래사용여부
    }
  } else {
    $c.gus.cfEnableObj($p, rd_clntDelYn, true); // 거래사용여부
  }

  //사업자번호 관련 수정 Disable
  $c.gus.cfEnableObj($p, btn_crn_search, false);
  $c.gus.cfEnableObj($p, ed_crn, false);
};

//-------------------------------------------------------------------------
// 거래처 등록, 수정 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  scwin.txt_saveType = "4"; // 0:신규, 1:수정, 2:조회, 3:저장, 4:취소
  scwin.txt_createYn = "0";
  scwin.txt_updateYn = "0";

  // 취소 확인
  if (ds_accountCustomer.getModifiedIndex().length != 0) {
    $c.data.undoRow($p, ds_accountCustomer, "Y");
  }
  $c.data.undoAll($p, ds_collMoneyCond);
  $c.data.undoAll($p, ds_payCond);
  $c.data.undoAll($p, ds_payAcnt);
  scwin.f_ContentsDisable();
  let vAccountCustomerCount = ds_accountCustomer.getRowCount();
  if (vAccountCustomerCount > 0) {
    $c.gus.cfDisableBtn($p, [btn_Cancel, btn_Save, btn_Cancel2, btn_Save2, btn_AddRow1, btn_DeleteRow1, btn_CancelRow1, btn_AddRow2, btn_DeleteRow2, btn_CancelRow2, btn_AddRow3, btn_DeleteRow3, btn_CancelRow3, btn_AddRow4, btn_DeleteRow4, btn_CancelRow4]);
  } else {
    $c.gus.cfDisableBtn($p, [btn_Cancel, btn_Update, btn_Save, btn_Cancel2, btn_Update2, btn_Save2, btn_AddRow1, btn_DeleteRow1, btn_CancelRow1, btn_AddRow2, btn_DeleteRow2, btn_CancelRow2, btn_AddRow3, btn_DeleteRow3, btn_CancelRow3, btn_AddRow4, btn_DeleteRow4, btn_CancelRow4]);
  }
};

//-------------------------------------------------------------------------
// 거래처 복사
//-------------------------------------------------------------------------
scwin.f_Copy = async function () {
  let vCountRow = ds_accountCustomer.getRowCount();
  let vCurrentRow = ds_accountCustomer.getRowPosition();
  if (vCountRow < 1) {
    await $c.win.alert($p, "복사할 거래처를 먼저 조회해주시기 바랍니다.");
    qryCntn.focus();
    return;
  }
  if (ds_accountCustomer.getCellData(vCurrentRow, "clntNo") > "999900") {
    await $c.win.alert($p, "해당거래처는  복사를 할 수 없습니다..");
    return;
  }
  let vCopyConfirm = await $c.win.confirm($p, "선택하신 거래처를 복사 하시겠습니까?");
  if (vCopyConfirm) {
    let vClntNm = ds_accountCustomer.getCellData(vCurrentRow, "clntNm");
    let vClntBusiClsCd = ds_accountCustomer.getCellData(vCurrentRow, "clntBusiClsCd");
    let vClntTelNo = ds_accountCustomer.getCellData(vCurrentRow, "clntTelNo");
    let vClntMpNo = ds_accountCustomer.getCellData(vCurrentRow, "clntMpNo");
    let vClntEmail = ds_accountCustomer.getCellData(vCurrentRow, "clntEmail");
    let vClntFaxNo = ds_accountCustomer.getCellData(vCurrentRow, "clntFaxNo");
    let vClntDeptNm = ds_accountCustomer.getCellData(vCurrentRow, "clntDeptNm");
    let vClntPersPstNm = ds_accountCustomer.getCellData(vCurrentRow, "clntPersPstNm");
    let vClntPersNm = ds_accountCustomer.getCellData(vCurrentRow, "clntPersNm");
    let vMcomPicEmpNo = ds_accountCustomer.getCellData(vCurrentRow, "mcomPicEmpNo");
    let vMcomPicEmpNm = ds_accountCustomer.getCellData(vCurrentRow, "mcomPicEmpNm");
    let vDeptNm = ds_accountCustomer.getCellData(vCurrentRow, "deptNm");
    let vRepstNm = ds_accountCustomer.getCellData(vCurrentRow, "repstNm");
    let vCrn = ds_accountCustomer.getCellData(vCurrentRow, "crn");
    let vOriginalCrn = ds_accountCustomer.getCellData(vCurrentRow, "originalCrn");
    let vZip = ds_accountCustomer.getCellData(vCurrentRow, "zip");
    let vAddr1 = ds_accountCustomer.getCellData(vCurrentRow, "addr1");
    let vAddr2 = ds_accountCustomer.getCellData(vCurrentRow, "addr2");
    let vBusiAddr = ds_accountCustomer.getCellData(vCurrentRow, "busiAddr");
    let vAccountClntKndCd = ds_accountCustomer.getCellData(vCurrentRow, "accountClntKndCd");
    let vBiztypeNm = ds_accountCustomer.getCellData(vCurrentRow, "biztypeNm");
    let vBizcondNm = ds_accountCustomer.getCellData(vCurrentRow, "bizcondNm");
    let vFncInstCd = ds_accountCustomer.getCellData(vCurrentRow, "fncInstCd");
    let vFncInstNm = ds_accountCustomer.getCellData(vCurrentRow, "fncInstNm");
    let vEmpNo = ds_accountCustomer.getCellData(vCurrentRow, "empNo");
    let vEmpNm = ds_accountCustomer.getCellData(vCurrentRow, "empNm");
    let vClntDelYn = ds_accountCustomer.getCellData(vCurrentRow, "clntDelYn");
    let vSellClntYn = ds_accountCustomer.getCellData(vCurrentRow, "sellClntYn");
    let vPchsClntYn = ds_accountCustomer.getCellData(vCurrentRow, "pchsClntYn");
    scwin.f_ContentsEnable();
    let rowIndex = ds_accountCustomer.getRowCount();
    ds_accountCustomer.insertRow(rowIndex);
    gr_accountCustomer.setFocusedCell(rowIndex, 0);
    gr_tb_Grid1.setReadOnly("grid", false);
    gr_tb_Grid2.setReadOnly("grid", false);
    gr_tb_Grid3.setReadOnly("grid", false);
    gr_tb_Grid4.setReadOnly("grid", false);
    scwin.txt_createYn = "1";
    scwin.txt_updateYn = "0";
    scwin.txt_saveType = "0"; // 0:신규, 1:수정, 2:조회, 3:저장, 4:취소
    // clntDelYn.CodeValue = 0;
    rd_clntDelYn.setValue("0");

    // 현재 로우의 값을 복사
    ds_accountCustomer.setCellData(rowIndex, "clntNm", vClntNm);
    ds_accountCustomer.setCellData(rowIndex, "clntBusiClsCd", vClntBusiClsCd);
    ds_accountCustomer.setCellData(rowIndex, "clntTelNo", vClntTelNo);
    ds_accountCustomer.setCellData(rowIndex, "clntMpNo", vClntMpNo);
    ds_accountCustomer.setCellData(rowIndex, "clntEmail", vClntEmail);
    ds_accountCustomer.setCellData(rowIndex, "clntFaxNo", vClntFaxNo);
    ds_accountCustomer.setCellData(rowIndex, "clntDeptNm", vClntDeptNm);
    ds_accountCustomer.setCellData(rowIndex, "clntPersPstNm", vClntPersPstNm);
    ds_accountCustomer.setCellData(rowIndex, "clntPersNm", vClntPersNm);
    ds_accountCustomer.setCellData(rowIndex, "mcomPicEmpNo", vMcomPicEmpNo);
    ds_accountCustomer.setCellData(rowIndex, "mcomPicEmpNm", vMcomPicEmpNm);
    ds_accountCustomer.setCellData(rowIndex, "deptNm", vDeptNm);
    ds_accountCustomer.setCellData(rowIndex, "repstNm", vRepstNm);
    ds_accountCustomer.setCellData(rowIndex, "crn", vCrn);
    ds_accountCustomer.setCellData(rowIndex, "originalCrn", vOriginalCrn);
    ds_accountCustomer.setCellData(rowIndex, "zip", vZip);
    ds_accountCustomer.setCellData(rowIndex, "addr1", vAddr1);
    ds_accountCustomer.setCellData(rowIndex, "addr2", vAddr2);
    ds_accountCustomer.setCellData(rowIndex, "busiAddr", vBusiAddr);
    ds_accountCustomer.setCellData(rowIndex, "accountClntKndCd", vAccountClntKndCd);
    ds_accountCustomer.setCellData(rowIndex, "biztypeNm", vBiztypeNm);
    ds_accountCustomer.setCellData(rowIndex, "bizcondNm", vBizcondNm);
    ds_accountCustomer.setCellData(rowIndex, "fncInstCd", vFncInstCd);
    ds_accountCustomer.setCellData(rowIndex, "fncInstNm", vFncInstNm);
    ds_accountCustomer.setCellData(rowIndex, "empNo", vEmpNo);
    ds_accountCustomer.setCellData(rowIndex, "empNm", vEmpNm);
    ds_accountCustomer.setCellData(rowIndex, "clntDelYn", vClntDelYn);
    ds_accountCustomer.setCellData(rowIndex, "clntKndCd", "AC");
    ds_accountCustomer.setCellData(rowIndex, "sellClntYn", vSellClntYn);
    ds_accountCustomer.setCellData(rowIndex, "pchsClntYn", vPchsClntYn);
    $c.gus.cfDisableBtn($p, [btn_Create, btn_Update, btn_Create2, btn_Update2]);
  } else {
    return false;
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  // 매출입구분
  let vSellClntYn = cbx_sellClntYn.getValue(); // 매출
  let vPchsClntYn = cbx_pchsClntYn.getValue(); // 매입

  if (scwin.g_sLoginDept != "00009") {
    //채권팀
    if (scwin.txt_saveType == "0") {
      if (vSellClntYn == "1") {
        await $c.win.alert($p, "매출거래처는 신규저장을 할수 없습니다. 전자결재를 이용해 결재요청을 하시기바랍니다.");
        return;
      }
    }
  }

  // 결제구분은 Bill 수령후를 선택할 수 없게함
  if (ds_collMoneyCond.getCellData(1, 'stmtPrdClsCd') == "02") {
    await $c.win.alert($p, "결제 구분은 Bill 수령후를 선택하실 수 없습니다.");
    return;
  }

  // 수정시에는 삭제여부가 1(True)인경우는 체크하지 않음.
  if (rd_clntDelYn.getValue() == "0") {
    if (!(await $c.gus.cfValidate($p, [chkRegistInfo]))) {
      return;
    }
  }

  // 수금조건 필수항목 체크
  let oValidExp1 = {
    dataName: "수금조건",
    validExp: `adptDt:적용일자:yes::key,
                                  stmtPrdClsCd:결제구분:yes::key,
                                  stmtPrdDd:yes:maxNumber=60::key`
  };
  $c.gus.setValidExp($p, gr_tb_Grid1, oValidExp1);
  if (!(await $c.gus.cfValidate($p, [gr_tb_Grid1], null, true))) {
    return;
  }

  // 지급조건 필수항목 체크
  let oValidExp2 = {
    dataName: "지급조건",
    validExp: `adptDt:적용일자:yes::key,
                                  payCycCd:지급주기:yes::key,
                                  payCntShtCd:지급수단:yes::key`
  };
  $c.gus.setValidExp($p, gr_tb_Grid2, oValidExp2);
  if (!(await $c.gus.cfValidate($p, [gr_tb_Grid2], null, true))) {
    return;
  }
  let ret;
  // 수정시에는 삭제여부가 1(True)인경우는 체크하지 않음.
  if (rd_clntDelYn.getValue() == "0") {
    ret = await $c.gus.cfValidate($p, [chkRegistInfo]);
    if (!ret) {
      return false;
    }
  }
  if (!$c.gus.cfIsNull($p, ed_clntMpNo.getValue())) {
    if (!scwin.covTelNumberValidator_validate(ed_clntMpNo.getValue())) {
      return false;
    }
  }
  if (!$c.gus.cfIsNull($p, ed_clntTelNo.getValue())) {
    if (!scwin.covTelNumberValidator_validate(ed_clntTelNo.getValue())) {
      return false;
    }
  }
  if (!$c.gus.cfIsNull($p, ed_clntFaxNo.getValue())) {
    if (!scwin.covTelNumberValidator_validate(ed_clntFaxNo.getValue())) {
      return false;
    }
  }
  if (ds_accountCustomer.getCellAllData(ds_accountCustomer.getRowPosition(), "accountClntKndCd") != "EM") {
    if (scwin.txt_createYn == "1" && vSellClntYn == "1") {
      if (ds_collMoneyCond.getRowCount() == 0) {
        await $c.win.alert($p, "거래처를 신규로 등록시 수금조건은 필수입력사항입니다.");
        return false;
      }
    }

    // 매출입구분 항목 체크
    if (vSellClntYn != "1" && vPchsClntYn != "1") {
      await $c.win.alert($p, "매출입구분은 필수입력 사항입니다.");
      return false;
    }
  }

  // 지급수단 실물어음,전자결재일경우 어음일수 필수입력 체크
  let payCondRowPosi = ds_payCond.getRowPosition();
  let payCntShtCd = ds_payCond.getCellData(payCondRowPosi, "payCntShtCd");
  let cashRt = ds_payCond.getCellData(payCondRowPosi, "cashRt");
  let vDraftDdCntCd = ds_payCond.getCellData(payCondRowPosi, "draftDdCntCd");
  let vCashRt = ds_payCond.getCellData(payCondRowPosi, "cashRt");
  if (payCntShtCd == "50" && vDraftDdCntCd == "") {
    $c.win.alert($p, "지급수단 실물어음,전자결제일경우 어음일수를 입력하셔야 합니다.");
    return false;
  }
  if (payCntShtCd == "25" && vDraftDdCntCd == "" && vCashRt != "100") {
    $c.win.alert($p, "지급수단 실물어음,전자결제일경우 어음일수를 입력하셔야 합니다.");
    return false;
  }

  // 지급계좌 필수항목 체크
  let oValidExp3 = {
    dataName: "지급계좌",
    validExp: `adptDt:적용일자:yes::key,
                                  payClsCd:지급구분:yes::key,
                                  bankCd:은행명:yes,::key,
                                  bankAcntNo:계좌번호:yes::key`
  };
  $c.gus.setValidExp($p, gr_tb_Grid3, oValidExp3);
  if (!(await $c.gus.cfValidate($p, [gr_tb_Grid3], null, true))) {
    return false;
  }

  // 거래처번호, 사업자번호 체크 	
  let vCrn = ed_crn.getValue().trimAll();

  // 사원거래처 인경우 사원번호를 입력했는지 체크
  let accountClntKndCode = lc_accountClntKndCd.getValue();
  let vEmpNo = ed_empNo.getValue().trimAll();
  if (accountClntKndCode == "EM" && vEmpNo == "") {
    $c.win.alert($p, "거래처종류가 사원인 경우 사원번호를 입력하셔야 합니다.");
    f_openEmpPopUp('0');
    return false;
  }

  // 은행인경우 은행코드 선택 체크
  let vFncInstCd = ed_fncInstCd.getValue().trimAll();
  if (accountClntKndCode == "BK" && vFncInstCd == "") {
    $c.win.alert($p, "거래처종류가 금융인 경우 경우 금융기관을 선택하셔야 합니다.");
    f_openGridBankPopUp();
    return false;
  }

  // 수금조건 중복데이터 조회
  let vCollMoneyCondCount = scwin.f_CompareCollMoneyPayCondAcnt("ds_collMoneyCond");
  let vPayCondCount = scwin.f_CompareCollMoneyPayCondAcnt("ds_payCond");
  let vPayAcntCount = scwin.f_CompareCollMoneyPayCondAcnt("ds_payAcnt");
  if (vCollMoneyCondCount > 0) {
    $c.win.alert($p, "동일한 수금조건정보가 있습니다.");
    // mxTab.ActiveIndex = 1; 
    tac_tab.setSelectedTabIndex(0);
    return false;
  }
  if (vPayCondCount > 0) {
    $c.win.alert($p, "동일한 지급조건정보가 있습니다.");
    // mxTab.ActiveIndex = 2;
    tac_tab.setSelectedTabIndex(1);
    return false;
  }
  if (vPayAcntCount > 0) {
    $c.win.alert($p, "동일한 지급계좌정보가 있습니다.");
    // mxTab.ActiveIndex = 3;
    tac_tab.setSelectedTabIndex(2);
    return false;
  }
  if (scwin.txt_createYn == "1") {
    // lux_sysCls.Index = 0;
    lc_sysCls.setSelectedIndex(0);
    lc_clntLupCond.setSelectedIndex(0);
    ed_qryCntn.setValue(ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "clntNm"));
  }
  if (lc_clntBusiClsCd.getValue() == 0) {
    $c.win.alert($p, "사업자구분이 설정되지 않았습니다. 사업자등록번호 란의 등록 버튼을 눌러 사업자정보를 새로 등록해주십시오.");
    return false;
  }

  //변경한 데이터가 있는지 체크한다.
  if (ds_accountCustomer.getModifiedIndex().length == 0 && ds_payCond.getModifiedIndex().length == 0 && ds_payAcnt.getModifiedIndex().length == 0 && ds_collMoneyCond.getModifiedIndex().length == 0) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }

  // 매출입구분 항목 체크 (공통거래처)
  // if(vSellClntYn==true && vPchsClntYn==true){
  if (vSellClntYn == "1" && vPchsClntYn == "1") {
    // 수금조건 추가시 팝업창 출력
    let vSysCount = 0;
    for (let i = 0; i < ds_collMoneyCond.getRowCount(); i++) {
      if (ds_collMoneyCond.getRowStatus(ds_collMoneyCond.getRowPosition()) == "C") {
        vSysCount++;
      }
    }
    if (vSysCount > 0) {
      $c.win.alert($p, "공통거래처 가상계좌 발급은 재경팀에 요청하세요");
    }
  }

  // GAUCE - 0: Normal, 1: Insert, 2: Delete, 3: Update, 4: Logical
  // WebSquare - 초기상태:0, 갱신:1, 삽입:2, 삭제:3, 삽입 후 삭제:4
  // WebSquare - 초기상태:R, 갱신:U, 삽입:C, 삭제:D, 삽입 후 삭제:V

  //지급계좌 외화시 지급화폐구분 체크
  // if(ds_payAcnt.IsUpdated==true){
  if (ds_payAcnt.getModifiedIndex().length > 0) {
    for (let i = 0; i < ds_payAcnt.getRowCount(); i++) {
      // if(ds_payAcnt.getCellData(i,"payClsCd") == "60"&&(ds_payAcnt.RowStatus(i)=="1"||ds_payAcnt.RowStatus(i)=="3")){
      if (ds_payAcnt.getCellData(i, "payClsCd") == "60" && (ds_payAcnt.getRowStatus(i) == "C" || ds_payAcnt.getRowStatus(i) == "D")) {
        if (ds_payAcnt.getCellData(i, "payCrcCd") == "KRW") {
          $c.win.alert($p, i + "행 : 지급구분이 외화일경우 지급화폐는 원화(KRW)가 아닌값으로 입력하여 주세요.");
          return false;
        }
        if (ds_payAcnt.getCellData(i, "payCrcCd") == "") {
          $c.win.alert($p, i + "행 : 지급구분이 외화일경우 지급화폐는 필수입력 입니다.");
          return false;
        }
        // }else if (ds_payAcnt.getCellData(i,"payClsCd") != "60"&&(ds_payAcnt.RowStatus(i)=="1"||ds_payAcnt.RowStatus(i)=="3")){
      } else if (ds_payAcnt.getCellData(i, "payClsCd") != "60" && (ds_payAcnt.getRowStatus(i) == "C" || ds_payAcnt.getRowStatus(i) == "D")) {
        if (ds_payAcnt.getCellData(i, "payCrcCd") != "KRW" && ds_payAcnt.getCellData(i, "payCrcCd") != "") {
          $c.win.alert($p, i + "행 : 지급구분이 외화가 아닐경우 지급화폐는 원화(KRW)로 입력하여 주세요.");
          return false;
        }
      }
    }
  }

  // 저장확인 
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmResult) {
    scwin.pos_clnt = ds_accountCustomer.getRowPosition();
    if (ed_qryCntn.getValue().trimAll() == "") {
      ed_qryCntn.setValue(ed_clntNm.getValue());
    }
    scwin.txt_saveType = "3"; // 타입이 저장
    $c.sbm.execute($p, sbm_saveAccountCustomer);
  } else {
    $c.gus.cfDisableBtn($p, [btn_Create, btn_Update, btn_Create2, btn_Update2]);
  }

  // f_Retrieve();
};

//-------------------------------------------------------------------------
// 지급조건, 지급계좌 신규
//-------------------------------------------------------------------------
scwin.f_AddRow = async function () {
  if (scwin.txt_createYn == "0" && scwin.txt_updateYn == "0") {
    $c.win.alert($p, "추가하시기전 신규등록모드나 수정모드로 전환하십시오.");
    return;
  }
  idx = scwin.txt_payIdx;
  if (idx == 1) {
    scwin.txt_payIdx = "1";
    let rowIndex = ds_collMoneyCond.insertRow();

    // 지급조건과 지급계약에 거래처번호와 SEQ 할당
    let collMoneyCondRowPos = rowIndex;
    ds_collMoneyCond.setCellData(collMoneyCondRowPos, "clntNo", ed_clntNo.getValue());

    // if(collMoneyCondRowPos==1){
    if (collMoneyCondRowPos == 0) {
      ds_collMoneyCond.setCellData(collMoneyCondRowPos, "seq", 1);
    } else {
      ds_collMoneyCond.setCellData(collMoneyCondRowPos, "seq", scwin.f_SetSEQ());
    }
    ds_collMoneyCond.setCellData(collMoneyCondRowPos, "collMoneyCrcCd", "KRW");
    ds_collMoneyCond.setCellData(collMoneyCondRowPos, "confirmYn", "0");
    gr_tb_Grid1.setFocusedCell(rowIndex, 0);
  } else if (idx == 2) {
    // ds_payCond.AddRow();		
    let rowIndex = ds_payCond.insertRow();

    // 지급조건과 지급계약에 거래처번호와 SEQ 할당
    let payCondRowPos = rowIndex;
    ds_payCond.setCellData(payCondRowPos, "clntNo", ed_clntNo.getValue());
    ds_payCond.setCellData(payCondRowPos, "cashRt", "100");
    if (payCondRowPos == 0) {
      ds_payCond.setCellData(payCondRowPos, "seq", 1);
    } else {
      ds_payCond.setCellData(payCondRowPos, "seq", scwin.f_SetSEQ());
    }
    ds_payCond.setCellData(payCondRowPos, "payCrcCd", "KRW");
    ds_payCond.setCellData(payCondRowPos, "confirmYn", "0");
    let info = {
      inputType: "select",
      options: {
        selectedData: false
      },
      itemSet: {
        nodeset: "data:ds_payDd",
        label: "cdNm",
        value: "cd"
      }
    };
    gr_tb_Grid2.setCellInputType(payCondRowPos, "payDd", info);
    gr_tb_Grid2.setFocusedCell(rowIndex, 0);
  } else if (idx == 3) {
    let rowIndex = ds_payAcnt.insertRow();
    let payAcntRowPos = rowIndex;
    ds_payAcnt.setCellData(payAcntRowPos, "clntNo", ed_clntNo.getValue());

    // if(payAcntRowPos==1){
    if (payAcntRowPos == 0) {
      // ds_payAcnt.NameValue(payAcntRowPos, "seq")= 1;
      ds_payAcnt.setCellData(payAcntRowPos, "seq", 1);
    } else {
      // ds_payAcnt.NameValue(payAcntRowPos, "seq")= f_SetSEQ();
      ds_payAcnt.setCellData(payAcntRowPos, "seq", scwin.f_SetSEQ());
    }
    ds_payAcnt.setCellData(payAcntRowPos, "confirmYn", "0");
    gr_tb_Grid3.setFocusedCell(rowIndex, 0);
  }
  $c.gus.cfEnableKeyData($p);
  // $c.gus.cfDisableBtnOnly([btn_Create, btn_Create2]);
  $c.gus.cfDisableBtnOnly($p, [btn_Create]);
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_delMarked = async function () {
  if (scwin.txt_payIdx == "1") {
    if (ds_collMoneyCond.getCellData(ds_collMoneyCond.getRowPosition(), "confirmYn") == "1") $c.gus.cfAlertMsg($p, "확인된 건은 삭제 할 수 없습니다.");else $c.data.deleteRow($p, ds_collMoneyCond);
  } else if (scwin.txt_payIdx == "2") {
    if (ds_payCond.getCellData(ds_payCond.getRowPosition(), "confirmYn") == "1") $c.gus.cfAlertMsg($p, "확인된 건은 삭제 할 수 없습니다.");else $c.data.deleteRow($p, ds_payCond);
  } else if (scwin.txt_payIdx == 3) {
    if (ds_payAcnt.getCellData(ds_payAcnt.getRowPosition(), "confirmYn") == "1") $c.gus.cfAlertMsg($p, "확인된 건은 삭제 할 수 없습니다.");else $c.data.deleteRow($p, ds_payAcnt);
  }
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  if (scwin.txt_payIdx == 1) {
    $c.data.undoRow($p, ds_collMoneyCond, "Y");
  } else if (scwin.txt_payIdx == 2) {
    $c.data.undoRow($p, ds_payCond, "Y");
  } else if (scwin.txt_payIdx == 3) {
    $c.data.undoRow($p, ds_payAcnt, "Y");
  }
};

//-------------------------------------------------------------------------
// 지급조건 수정
//-------------------------------------------------------------------------
scwin.f_RowUpdate = function () {
  // disable 처리
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtnOnly($p, [btn_Create, btn_Create2]);
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = function () {
  // if(ds_emp.RowStatus(ds_emp.RowPosition)==1){
  //     $c.win.alert("저장되지 않은 건입니다.");
  // }else{
  //     if(confirm("삭제하시겠습니까?")==true){
  //         ds_emp.DeleteRow(ds_emp.RowPosition);

  //         $c.gus.cfDisableKeyData();
  //         $c.gus.cfDisableBtnOnly([btn_Save, btn_Save2]);
  //     }
  // }
};

//-------------------------------------------------------------------------
// 바이트 크기 체크
//-------------------------------------------------------------------------
scwin.bytelength = function (bstr) {
  len = bstr.length;
  for (ii = 0; ii < bstr.length; ii++) {
    xx = bstr.substr(ii, 1).charCodeAt(0);
    if (xx > 127) {
      len++;
    }
  }
  return len;
};

//-------------------------------------------------------------------------
// 그리드 높이 늘리기
//-------------------------------------------------------------------------
scwin.f_grdHeiht = function (size) {};

//-------------------------------------------------------------------------
// 엑셀 다운 gr_tb_Grid1
//-------------------------------------------------------------------------
scwin.f_downExcelSheet_Grid1 = function () {
  if (ds_collMoneyCond.getRowCount() == 0) {
    $c.win.alert($p, "수금조건내역이 없습니다.");
    return false;
  }
  let options = {
    fileName: "수금조건.xlsx",
    sheetName: "수금조건"
  };
  let infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_tb_Grid1, options, infoArr);
};
scwin.f_downExcelSheet_Grid2 = function () {
  if (ds_payCond.getRowCount() == 0) {
    $c.win.alert($p, "지급조건내역이 없습니다.");
    return false;
  }
  let options = {
    fileName: "지급조건.xlsx",
    sheetName: "지급조건"
  };
  let infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_tb_Grid2, options, infoArr);
};
scwin.f_downExcelSheet_Grid3 = function () {
  if (ds_payAcnt.getRowCount() == 0) {
    $c.win.alert($p, "지급계좌내역이 없습니다.");
    return false;
  }
  let options = {
    fileName: "지급계좌.xlsx",
    sheetName: "지급계좌"
  };
  let infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_tb_Grid3, options, infoArr);
};

//-------------------------------------------------------------------------
// 통장번호팝업
//-------------------------------------------------------------------------
scwin.f_openBankBookPopUp = async function () {
  await udc_BankBookCdInfo.cfCommonPopUp(scwin.udc_BankBookCdInfo_callBackFunc, '', '', "T", null, null, "80,10,128,100,120,60,120,100,60,70", "2,4,6,9,10", null, null, null, null, null, null, null, null, null); //  
};
scwin.udc_BankBookCdInfo_callBackFunc = function (rtnList) {
  let rowIndex = ds_collMoneyCond.getRowPosition();
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_collMoneyCond.setCellData(rowIndex, "collMoneyBankbookNo", rtnList[0]);
  } else {
    ds_collMoneyCond.setCellData(rowIndex, "collMoneyBankbookNo", "");
  }
};

//-------------------------------------------------------------------------
// GRID은행팝업
//-------------------------------------------------------------------------
scwin.f_openGridBankPopUp = async function () {
  await udc_BankCdInfo.cfCommonPopUp(scwin.udc_gridBankCdInfo_callBackFunc, '', '', "T", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, null); //  은행
};
scwin.udc_gridBankCdInfo_callBackFunc = function (rtnList) {
  let rowIndex = ds_payAcnt.getRowPosition();
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_payAcnt.setCellData(rowIndex, "bankCd", rtnList[0]);
    ds_payAcnt.setCellData(rowIndex, "bankNm", rtnList[1]);
  } else {
    ds_payAcnt.setCellData(rowIndex, "bankCd", "");
    ds_payAcnt.setCellData(rowIndex, "bankNm", "");
  }
};

//-------------------------------------------------------------------------
// 귀속부서팝업
//-------------------------------------------------------------------------
scwin.f_openDeptPopUp = async function (idx) {
  scwin.idx = idx;
  let vTitle = "수금부서, 수금부서코드, 수금부서명";
  if (idx == "2") {
    vTitle = "지급부서, 지급부서코드, 지급부서명";
  }
  udc_AcctDeptCdInfo.setSelectId("retrieveAcctDeptCdInfo");
  await udc_AcctDeptCdInfo.cfCommonPopUp(scwin.udc_AcctDeptCdInfo_callBackFunc, '', '', "T", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, vTitle, null); //  
};
scwin.udc_AcctDeptCdInfo_callBackFunc = function (rtnList) {
  let rowIndex;
  if (scwin.idx == "1") {
    rowIndex = ds_collMoneyCond.getRowPosition();
  } else if (scwin.idx == "2") {
    rowIndex = ds_payCond.getRowPosition();
  }
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (scwin.idx == "1") {
      ds_collMoneyCond.setCellData(rowIndex, "collMoneyAcctDeptCd", rtnList[0]);
      ds_collMoneyCond.setCellData(rowIndex, "collMoneyAcctDeptNm", rtnList[1]);
    } else if (scwin.idx == "2") {
      ds_payCond.setCellData(rowIndex, "payAcctDeptCd", rtnList[0]);
      ds_payCond.setCellData(rowIndex, "payAcctDeptNm", rtnList[1]);
    }
  } else {
    if (scwin.idx == "1") {
      ds_collMoneyCond.setCellData(rowIndex, "collMoneyAcctDeptCd", "");
      ds_collMoneyCond.setCellData(rowIndex, "collMoneyAcctDeptNm", "");
    } else if (scwin.idx == "2") {
      ds_payCond.setCellData(rowIndex, "payAcctDeptCd", "");
      ds_payCond.setCellData(rowIndex, "payAcctDeptNm", "");
    }
  }
};
scwin.udc_zip_onclickEvent = function (e) {
  scwin.f_openZipPopUp();
};

// 우편번호 입력시
// language=JavaScript for=zip event=onKillFocus()>
scwin.udc_zip_onblurCodeEvent = function (e) {
  let vZip = ed_zip.getValue();
  if (vZip.trim() != "") {
    scwin.f_openZipPopUp();
  }
};

//-------------------------------------------------------------------------
// 우편번호 코드조회 팝업
//-------------------------------------------------------------------------
scwin.f_openZipPopUp = async function () {
  let data = {};
  let popupResult;
  let options = {
    id: "newzipcodePopup",
    type: "popup",
    modal: true,
    popupName: "우편번호 검색"
  };
  popupResult = await $c.win.openPopup($p, "/ui/cm/zz/newzipcodePopup.xml", options, data);
  if (popupResult != null) {
    ed_zip.setValue(popupResult.zip);
    ed_addr1.setValue(popupResult.addr1);
    ed_addr2.focus();
  } else {
    ed_zip.setValue("");
    ed_addr1.setValue("");
    ed_addr2.setValue("");
    ed_zip.focus();
  }
};

//-------------------------------------------------------------------------
// 사업자등록정보 공통팝업
//-------------------------------------------------------------------------
// scwin.f_openPopUp = function() {
scwin.f_openPopUp = function (e) {
  //법인사업자
  let vClntBusiClsCd = lc_clntBusiClsCd.getValue(); // 사업자구분코드

  udc_CrnInfo.setSelectId("retrieveCrnInfo");
  udc_CrnInfo.cfCommonPopUp(scwin.udc_CrnInfo_callbackfunc, '', '', "F", null, null, null, null, null, null, null, null, null, null, null, null, null); //  사업자등록번호
  // udc_crn.setSelectId("retrieveCrnInfo");
  // udc_crn.cfCommonPopUp(scwin.udc_crn_callbackfunc,'','',"F",null,null,null,"3,4,5,6,7,8,9,10", null,null,null,null,null,null,null,null); //  사업자등록번호
};
scwin.udc_CrnInfo_callbackfunc = async function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    let vCrn = ed_crn.getValue();
    let vClntNm = ed_clntNm.getValue();
    let vZip = "";
    let vBusiAddr = "";
    let vTmpZip = ed_zip.getValue();
    let vTmpAddr1 = ed_addr1.getValue();
    let vTmpAddr2 = ed_addr1.getValue();
    ed_crn.setValue(rtnList[0]); //사업자등록번호
    scwin.originalCrn = rtnList[0]; //사업자등록번호//
    ds_accountCustomer.setCellData(ds_accountCustomer.getRowPosition(), "originalCrn", rtnList[0]);
    if (vClntNm.trimAll() == "") {
      ed_clntNm.setValue(rtnList[1]); //사업자명
    }
    lc_clntBusiClsCd.setValue(rtnList[2]);
    ed_repstNm.setValue(rtnList[3]);
    ed_bizcondNm.setValue(rtnList[4]); //업태
    ed_biztypeNm.setValue(rtnList[5]); //업종

    if (vTmpZip.trim() == "" && vTmpAddr1.trim() == "" && vTmpAddr2.trim() == "") {
      ed_zip.setValue(rtnList[6]);
      ed_addr1.setValue(rtnList[7]);
      ed_addr2.setValue(rtnList[8]);
    }
    if (rtnList[6] != "" && rtnList[6].length > 5) {
      vZip = "(" + rtnList[6].substr(0, 3) + "-" + rtnList[6].substr(3, 6) + ") ";
    }
    vBusiAddr = vZip + rtnList[7] + "  " + rtnList[8];
    ed_busiAddr.setValue(vBusiAddr);

    // 사업자등록번호가 거래처로 등록여부에 대한 메시지
    udc_ClntCrnInfo.setSelectId("retrieveClntCrnInfo");
    // udc_ClntCrnInfo.cfCommonPopUp(scwin.udc_ClntCrnInfo_callbackfunc
    // ,ed_crn.getValue(),'',null,null,null,null,null,null,null,null,null,null,"T",null,null); //  거래처정보
    let res = await udc_ClntCrnInfo.cfCommonPopUpAsync(scwin.udc_ClntCrnInfo_callbackfunc, ed_crn.getValue(), '', null, null, null, null, null, null, null, null, null, null, "T", null, null); //  거래처정보
    if (res > 0) {
      await $c.win.alert($p, "사업자등록번호가 이미 다른 거래처에 등록되어 있습니다.");
    }
  }
};
scwin.udc_ClntCrnInfo_callbackfunc = async function (rtnList) {
  // if (rtnList != null ) {
  //     if(rtnList[0] == "N/A") return false;
  //     await $c.win.alert("사업자등록번호가 이미 다른 거래처에 등록되어 있습니다.");
  // }
};
scwin.udc_BankCdInfo_onclickEvent = function (e) {
  scwin.f_openBankPopUp(1);
};

//-------------------------------------------------------------------------
// 은행팝업
//-------------------------------------------------------------------------
scwin.f_openBankPopUp = async function (idx) {
  // let rtnList = new Array();
  // rtnList = cfCommonPopUp('retrieveBankCdInfo'
  udc_BankCdInfo.setSelectId("retrieveBankCdInfo");
  if (idx == 1) {
    await udc_BankCdInfo.cfCommonPopUp(scwin.udc_BankCdInfo_callBackFunc1, '', '', "T", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, null, null); //  은행코드
  } else {
    await udc_BankCdInfo.cfCommonPopUp(scwin.udc_BankCdInfo_callBackFunc, '', '', "T", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, null, null); //  은행코드
  }
};
scwin.udc_BankCdInfo_callBackFunc1 = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_fncInstCd.setValue(rtnList[0]);
    ed_fncInstNm.setValue(rtnList[1]);
  }
};
scwin.udc_BankCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    let rowIndex = ds_payAcnt.getRowPosition();
    ds_payAcnt.setCellData(rowIndex, "bankCd", rtnList[0]); //은행코드
    ds_payAcnt.setCellData(rowIndex, "bankNm", rtnList[1]); //은행명
  }
};
scwin.udc_empNo_onclickEvent = function (e) {
  scwin.f_openEmpPopUp(0);
};
scwin.udc_mcomPicEmpNo_onclickEvent = function (e) {
  scwin.f_openEmpPopUp(1);
};

//-------------------------------------------------------------------------
// 사원팝업
//-------------------------------------------------------------------------
scwin.f_openEmpPopUp = async function (idx) {
  udc_EmpNoDeptInfo.setSelectId("retrieveEmpNoDeptInfo");
  if (idx == 1) {
    await udc_EmpNoDeptInfo.cfCommonPopUp(scwin.udc_EmpNoDeptInfo_callBackFunc1, '', '', "T", null, null, "100,100,0,130", "3,5,6,7,8,9,10", null, null, null, null, null, null, null, null, null); //  사원코드
  } else {
    await udc_EmpNoDeptInfo.cfCommonPopUp(scwin.udc_EmpNoDeptInfo_callBackFunc0, '', '', "T", null, null, "100,100,0,130", "3,5,6,7,8,9,10", null, null, null, null, null, null, null, null, null); //  사원코드
  }
};
scwin.udc_EmpNoDeptInfo_callBackFunc0 = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_empNo.setValue(rtnList[0]);
    ed_empNm.setValue(rtnList[1]);
  }
};
scwin.udc_EmpNoDeptInfo_callBackFunc1 = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_mcomPicEmpNo.setValue(rtnList[0]);
    ed_mcomPicEmpNm.setValue(rtnList[1]);
  }
};

//-------------------------------------------------------------------------
// 거래처정보 중복확인
//-------------------------------------------------------------------------
//다시확인
scwin.f_openClntNoDupPopUp = function () {
  let vClntNo = ed_clntNo.getValue().trimAll();
  if (vClntNo == "") {
    let msgArr = new Array(1);
    msgArr[0] = "거래처번호";
    $c.win.alert($p, MSG_CM_ERR_002, msgArr);
    ed_clntNo.focus();
    return false;
  }
  let txtClntNo = vClntNo.length < 6 ? $c.gus.cfGetLeftPad($p, vClntNo, 6) : vClntNo;
  rtnList = cfCommonPopUp('retrieveClntList', txtClntNo, '', null, null, null, null, null, null, null, null, null, null, "T", null, null); //  거래처정보

  let msgClntDupArr = new Array(1);
  msgClntDupArr[0] = "거래처번호";
  if (rtnList > 0) {
    //사업자등록번호 중복체크결과 , 0: 중복없음, 1이상: 중복
    $c.win.alert($p, MSG_CM_WRN_011, msgClntDupArr);
    txt_clntNoValChk.value = "1";
    clntNo.Focus();
  } else {
    $c.win.alert($p, "등록가능한 거래처번호입니다.");
    txt_clntNoValChk.value = "0";
    clntNo.Text = txtClntNo;
    clntNm.focus();
  }
};
scwin.btn_crn_regist_onclick = function (e) {
  scwin.f_registCrn("Y");
};

//-------------------------------------------------------------------------
// 사업자등록정보 등록팝업
//-------------------------------------------------------------------------
scwin.f_registCrn = function (param) {
  $c.gus.cfShowCrnInfo($p, param);
};

//-------------------------------------------------------------------------
// 지급조건 지급계좌 순번할당..
//-------------------------------------------------------------------------
scwin.f_SetSEQ = function () {
  let vTabIndex = scwin.txt_payIdx;
  let vTmpSeq = 0;
  let vTmpVal;
  let vObjGrd;
  // let vPayCountRow=0;

  if (vTabIndex == 1) {
    vObjGrd = "ds_collMoneyCond";
  } else if (vTabIndex == 2) {
    vObjGrd = "ds_payCond";
  } else if (vTabIndex == 3) {
    vObjGrd = "ds_payAcnt";
  }
  let objDataSet = eval(vObjGrd);
  let vPayCountRow = objDataSet.getRowCount();
  if (vPayCountRow > 0) {
    for (i = 0; i < vPayCountRow; i++) {
      vTmpVal = objDataSet.getCellData(i, "seq");
      if (vTmpVal > vTmpSeq) {
        vTmpSeq = vTmpVal;
      }
    }
  }
  return Number(vTmpSeq) + 1;
};

//-------------------------------------------------------------------------
// 수금조건, 지급조건, 지급계좌 전체 데이터 비교
//-------------------------------------------------------------------------
scwin.f_CompareCollMoneyPayCondAcnt = function (pDataSet) {
  let vDataSet = eval(pDataSet);
  let vCountRow = vDataSet.getRowCount();
  let vReturnCount = 0;
  let vSize = 0;
  if (pDataSet == "ds_collMoneyCond") vSize = 8;
  if (pDataSet == "ds_payCond") vSize = 9;
  if (pDataSet == "ds_payAcnt") vSize = 7;
  for (let h = 0; h < vCountRow; h++) {
    let tmpReturnVal = scwin.f_RowCompareCollMoneyPayCondAcnt(pDataSet, h, vSize);
    if (tmpReturnVal > 0) vReturnCount++;
  }
  return vReturnCount;
};

//-------------------------------------------------------------------------
// 수금조건, 지급조건, 지급계좌 한로우 데이터 비교
//-------------------------------------------------------------------------
scwin.f_RowCompareCollMoneyPayCondAcnt = function (pDataSet, pRow, pSize) {
  let vDataSet = eval(pDataSet);
  let vCountRow = vDataSet.getRowCount();
  let vCol = new Array(pSize);
  let vTmpCol = new Array(pSize);
  if (pDataSet == "ds_collMoneyCond") {
    // 수금조건
    vCol[0] = ds_collMoneyCond.getCellData(pRow, "adptDt");
    vCol[1] = ds_collMoneyCond.getCellData(pRow, "collMoneyAcctDeptCd");
    vCol[2] = ds_collMoneyCond.getCellData(pRow, "stmtPrdClsCd");
    vCol[3] = ds_collMoneyCond.getCellData(pRow, "stmtPrdDd");
    vCol[4] = ds_collMoneyCond.getCellData(pRow, "collMoneyCntShtCd");
    vCol[5] = ds_collMoneyCond.getCellData(pRow, "draftDdCnt");
    vCol[6] = ds_collMoneyCond.getCellData(pRow, "collMoneyCrcCd");
    vCol[7] = ds_collMoneyCond.getCellData(pRow, "collMoneyBankbookNo");
  } else if (pDataSet == "ds_payCond") {
    // 지급조건
    vCol[0] = ds_payCond.getCellData(pRow, "adptDt");
    vCol[1] = ds_payCond.getCellData(pRow, "payAcctDeptCd");
    vCol[2] = ds_payCond.getCellData(pRow, "payCycCd");
    vCol[3] = ds_payCond.getCellData(pRow, "payDd");
    vCol[4] = ds_payCond.getCellData(pRow, "payCntShtCd");
    vCol[5] = ds_payCond.getCellData(pRow, "draftDdCntCd");
    vCol[6] = ds_payCond.getCellData(pRow, "payCrcCd");
    vCol[7] = ds_payCond.getCellData(pRow, "cashRt");
    vCol[8] = ds_payCond.getCellData(pRow, "draftRt");
  } else {
    // 지급계좌
    vCol[0] = ds_payAcnt.getCellData(pRow, "adptDt");
    vCol[1] = ds_payAcnt.getCellData(pRow, "payClsCd");
    vCol[2] = ds_payAcnt.getCellData(pRow, "bankCd");
    vCol[3] = ds_payAcnt.getCellData(pRow, "bankAcntNo");
    vCol[4] = ds_payAcnt.getCellData(pRow, "dpstrNm");
    vCol[5] = ds_payAcnt.getCellData(pRow, "elecStmtBankCd");
    vCol[6] = ds_payAcnt.getCellData(pRow, "transfCmisDeductYn");
  }
  let vDuplCount = 0;
  for (let i = 0; i < vCountRow; i++) {
    if (pRow == i) continue;
    if (pDataSet == "ds_collMoneyCond") {
      // 수금조건
      vTmpCol[0] = ds_collMoneyCond.getCellData(i, "adptDt");
      vTmpCol[1] = ds_collMoneyCond.getCellData(i, "collMoneyAcctDeptCd");
      vTmpCol[2] = ds_collMoneyCond.getCellData(i, "stmtPrdClsCd");
      vTmpCol[3] = ds_collMoneyCond.getCellData(i, "stmtPrdDd");
      vTmpCol[4] = ds_collMoneyCond.getCellData(i, "collMoneyCntShtCd");
      vTmpCol[5] = ds_collMoneyCond.getCellData(i, "draftDdCnt");
      vTmpCol[6] = ds_collMoneyCond.getCellData(i, "collMoneyCrcCd");
      vTmpCol[7] = ds_collMoneyCond.getCellData(i, "collMoneyBankbookNo");
    } else if (pDataSet == "ds_payCond") {
      // 지급조건
      vTmpCol[0] = ds_payCond.getCellData(i, "adptDt");
      vTmpCol[1] = ds_payCond.getCellData(i, "payAcctDeptCd");
      vTmpCol[2] = ds_payCond.getCellData(i, "payCycCd");
      vTmpCol[3] = ds_payCond.getCellData(i, "payDd");
      vTmpCol[4] = ds_payCond.getCellData(i, "payCntShtCd");
      vTmpCol[5] = ds_payCond.getCellData(i, "draftDdCntCd");
      vTmpCol[6] = ds_payCond.getCellData(i, "payCrcCd");
      vTmpCol[7] = ds_payCond.getCellData(i, "cashRt");
      vTmpCol[8] = ds_payCond.getCellData(i, "draftRt");
    } else {
      // 지급계좌
      vTmpCol[0] = ds_payAcnt.getCellData(i, "adptDt");
      vTmpCol[1] = ds_payAcnt.getCellData(i, "payClsCd");
      vTmpCol[2] = ds_payAcnt.getCellData(i, "bankCd");
      vTmpCol[3] = ds_payAcnt.getCellData(i, "bankAcntNo");
      vTmpCol[4] = ds_payAcnt.getCellData(i, "dpstrNm");
      vTmpCol[5] = ds_payAcnt.getCellData(i, "elecStmtBankCd");
      vTmpCol[6] = ds_payAcnt.getCellData(i, "transfCmisDeductYn");
    }
    let vColEqual = 0;
    for (let j = 0; j < pSize; j++) {
      if (vCol[j] == vTmpCol[j]) {
        vColEqual++;
      }
    }
    if (vColEqual == pSize) vDuplCount++;
  }
  return vDuplCount;
};

//-------------------------------------------------------------------------
// 전화번호 유효성 체크
//-------------------------------------------------------------------------
scwin.f_CheckTelNumber = async function (vIndex) {
  let vTelNo = "";
  let vAlertMsg = "";
  let vRtrurnId = "";
  if (vIndex == "1") {
    // 휴대폰번호
    vTelNo = ed_clntMpNo.getValue();
    vAlertMsg = "휴대폰전화번호를 정확하게 입력해 주십시오.";
    vRtrurnId = "ed_clntMpNo";
  } else if (vIndex == "2") {
    // 유선전화
    vTelNo = ed_clntTelNo.getValue();
    vAlertMsg = "유선전화번호를 정확하게 입력해 주십시오.";
    vRtrurnId = "ed_clntTelNo";
  } else {
    // FAX
    vTelNo = ed_clntFaxNo.getValue();
    vAlertMsg = "FAX번호를 정확하게 입력해 주십시오.";
    vRtrurnId = "ed_clntFaxNo";
  }
  if (vTelNo.trim() != "") {
    // let vValidTelNumber = covTelNumberValidator_validate(vTelNo);
    let vValidTelNumber = $c.str.isPhone($p, vTelNo);
    if (!vValidTelNumber) {
      await $c.win.alert($p, vAlertMsg);
      // vId = eval(vRtrurnId);
      // vId.focus();
      let vId = $p.getComponentById(vRtrurnId);
      vId.focus();
      return;
    }
  }
};

//사업자번호//
scwin.f_move1 = async function () {
  let data = {};
  let popupResult;
  if (ds_accountCustomer.getRowCount() > 0) {
    data.flag = "N";
    data.crn = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "originalCrn");
    data.compNm = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "clntNm");
  } else {
    data.flag = "";
    data.crn = "";
    data.compNm = "";
  }
  let win_url = "/ui/ac/fi/stdinfomgnt/fi_100_02_01b.xml";
  let options = {
    id: "f_move1Popup",
    popupName: "사업자번호",
    modal: true,
    type: "browserPopup",
    width: 1450,
    height: 750,
    scrollbars: true,
    title: "사업자번호"
  };
  popupResult = await $c.win.openPopup($p, win_url, options, data);
};

//거래처정보관리//
scwin.f_move2 = async function () {
  let data = {};
  let popupResult;
  if (ds_accountCustomer.getRowCount() > 0) {
    data.flag = "Y";
    // data.crn	 = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "crn");
    data.crn = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "originalCrn");
    data.compNm = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "clntNm");
    data.busiNm = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "busiNm");
  } else {
    data.flag = "";
    data.crn = "";
    data.compNm = "";
    data.busiNm = "";
  }
  let win_url = "/ui/ac/fi/electaxinvc/fi_900_01_02b.xml";
  let options = {
    popupName: "전자세금계산서거래처정보관리",
    modal: true,
    type: "browserPopup",
    width: 1450,
    height: 750,
    scrollbars: true,
    title: "전자세금계산서 거래처정보관리"
  };
  popupResult = await $c.win.openPopup($p, win_url, options, data);
};

//사업자별 여신한도 조회//
scwin.f_move3 = async function () {
  let data = {};
  let popupResult;
  if (ds_accountCustomer.getRowCount() > 0) {
    data.flag = "Y";
    // data.crn	 = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "crn");
    data.crn = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "originalCrn");
    data.compNm = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "clntNm");
    data.busiNm = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "busiNm");
  } else {
    data.flag = "";
    data.crn = "";
    data.compNm = "";
    data.busiNm = "";
  }
  let win_url = "/ui/ac/fm/acctrecvmgnt/crdtmgnt/fm_604_02_01b.xml";
  let options = {
    id: "f_move3Popup",
    popupName: "사업자별 여신한도 조회",
    modal: true,
    type: "browserPopup",
    width: 1400,
    height: 750,
    scrollbars: true,
    title: "사업자별 여신한도 조회"
  };
  popupResult = await $c.win.openPopup($p, win_url, options, data);
};

//관리거래처대상등록//
scwin.f_move4 = async function () {
  let data = {};
  let popupResult;
  if (ds_accountCustomer.getRowCount() > 0) {
    data.flag = "Y";
    // data.crn	 = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "crn");
    data.crn = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "originalCrn");
    data.clntNo = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "clntNo");
    data.clntNm = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "clntNm");
    data.busiNm = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "busiNm");
  } else {
    data.flag = "";
    data.crn = "";
    data.clntNo = "";
    data.clntNm = "";
    data.busiNm = "";
  }
  let win_url = "/ui/ac/fm/acctrecvmgnt/pooracctrecv/fm_602_04_01b.xml";
  let options = {
    id: "f_move4Popup",
    popupName: "관리거래처대상등록",
    modal: true,
    type: "browserPopup",
    width: 1410,
    height: 750,
    scrollbars: true,
    title: "관리거래처대상등록"
  };
  popupResult = await $c.win.openPopup($p, win_url, options, data);
};

//채권현황조회//
scwin.f_move5 = async function () {
  let data = {};
  let popupResult;
  if (ds_accountCustomer.getRowCount() > 0) {
    data.flag = "Y";
    // data.crn	 = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "crn");
    data.crn = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "originalCrn");
    data.compNm = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "clntNm");
    data.busiNm = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "busiNm");
  } else {
    data.flag = "";
    data.crn = "";
    data.compNm = "";
    data.busiNm = "";
  }
  let win_url = "/ui/ac/fm/acctrecvmgnt/acctrecvcontmgnt/fm_603_01_01b.xml";
  let options = {
    id: "f_move5Popup",
    popupName: "채권현황조회",
    modal: true,
    type: "browserPopup",
    width: 1410,
    height: 750,
    scrollbars: true,
    title: "채권현황조회"
  };
  popupResult = await $c.win.openPopup($p, win_url, options, data);
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.(그리드용)
//-------------------------------------------------------------------------
scwin.f_retrieveJudge = function () {
  let arrJson = {
    sysCd: "CommonEBC",
    queryId: "retrieveBorrowAcqKindInfo",
    param1: "ZZ023"
  };
  $c.sbm.execute($p, sbm_judge, arrJson);
};

//-----------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = async function (letGrNm) {
  if (ds_accountCustomer.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  let result = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (!result) {
    return;
  }
  const options = {
    fileName: "회계거래처.xlsx",
    sheetName: "회계거래처"
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_accountCustomer, options, infoArr);
};

//-------------------------------------------
// 휴대전화번호 입력 : '숫자', '-'
//-------------------------------------------
scwin.f_checkCharacter = function () {
  let key = e.keyCode;

  // 숫자(48~57), 하이픈(45) 외 입력 차단
  if (key !== 45 && (key < 48 || key > 57)) {
    $c.win.alert($p, "휴대전화번호는 '숫자', '-' 만 입력 가능합니다.");
    e.preventDefault(); // WebSquare 방식 차단
  }
};

//-----------------------------------------------------------------------------
//  지급주기 조회.
//-----------------------------------------------------------------------------
scwin.f_payCycCdDsSet = function (grpCd) {
  // let arrJson = { grpCd: grpCd
  //               , cd: ""
  //               , cdNm: ""
  //               };
  // $c.sbm.execute(sbm_payCycCd, arrJson);        
};

//-----------------------------------------------------------------------------
//  지급일자 조회.
//-----------------------------------------------------------------------------
scwin.f_payDdDsSet = function (grpCd) {
  // 상의 하의 일체형 구분 별로 사이즈  조회.
  let arrJson = {
    grpCd: grpCd,
    cd: "",
    cdNm: ""
  };
  $c.sbm.execute($p, sbm_payDd, arrJson);
};

//-------------------------------------------------------------------------
// 오즈 출력
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  let data = {
    odiName: "fm_100_08_01",
    reportName: "/ac/fm/stdinfomgnt/fm_100_08_01.ozr",
    odiParam: {
      P_CLNT_NO: ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "clntNo")
    },
    viewerParam: {
      viewer: 100,
      useprogressbar: false
    },
    formParam: {}
  };
  if (cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "0") {
    let opts = {
      type: 'print',
      // viewer, print, download
      printMode: 'view' // silent, view
    };
    $c.ext.printOzReport($p, data, opts);
  } else if (cbx_printCheck.getValue() == "0" && cbx_previewCheck.getValue() == "1" || cbx_printCheck.getValue() == "1" && cbx_previewCheck.getValue() == "1") {
    let opts = {
      type: 'viewer',
      // viewer, print, download
      printMode: 'view' // silent, view
    };
    $c.ext.openOzReport($p, data, opts);
  } else {
    let opts = {
      filename: 'fm_100_08_01',
      exportMode: 'view'
    };
    $c.ext.downloadOzReport($p, data, opts);
  }
};

// 자회사 회계 시스템 추가에 따른 설정 
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
  if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
  }
};

// 회사 입력 팝업 
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_coCd.setSelectId("retrieveDongbuGroupCompanyInfo");
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_coCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]);
    ed_coNm.setValue(rtnList[5]);
    scwin.txtCoClsCd = rtnList[1];
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};

//-----------------------------------------------------------------------------
//    C O M P O N E N T' S   E V E N T S  
//------------------------------------------------------------------------------

// 수금수단 Combo 선택
//  language=JavaScript for=tb_Grid1 event=OnCloseUp(row,colid)>
scwin.gr_tb_Grid1_oneditend = function (rowIndex, columnIndex, value) {
  let row = rowIndex;
  let colid = gr_tb_Grid1.getColumnID(columnIndex);
  let vCollMoneyCntShtCd = ds_collMoneyCond.getCellData(row, "collMoneyCntShtCd"); // 수금수단

  if (colid == "collMoneyCntShtCd") {
    if (vCollMoneyCntShtCd == "20") {
      // 수금수단이 어음인 경우
      ds_collMoneyCond.setCellAllData(row, "draftDdCnt", 0);
      gr_tb_Grid1.setCellReadOnly(row, "draftDdCnt", false);
    } else {
      // 수금수단이 현금인 경우
      ds_collMoneyCond.setCellAllData(row, "draftDdCnt", 0);
      gr_tb_Grid1.setCellReadOnly(row, "draftDdCnt", true);
    }
  } else if (colid == "stmtPrdClsCd") {
    let vstmtPrdClsCd = ds_collMoneyCond.getCellData(row, "stmtPrdClsCd");
    gr_tb_Grid1.setCellReadOnly(row, "stmtPrdDd", false);
    ds_collMoneyCond.setCellData(row, "stmtPrdDd", 30);
  }

  // 수금일 입력시
  let vTmpData = "30";
  let vstmtPrdClsCd = ds_collMoneyCond.getCellData(row, "stmtPrdClsCd"); // 수금수단

  if (value != "") vTmpData = value;
  if (colid == "stmtPrdDd") {
    let vstmtPrdDd = ds_collMoneyCond.getCellData(row, "stmtPrdDd");

    // 결제조건 구분선택시 결제기한은 필수
    //if(vstmtPrdClsCd!=0){
    if (vstmtPrdDd.trim() == "") {
      $c.win.alert($p, "결제조건 선택 시 결제일자는 필수입력사항입니다.");
      ds_collMoneyCond.setCellData(row, "stmtPrdDd", vTmpData);
      gr_tb_Grid1.setFocusedCell(row, "stmtPrdDd");
    }
    //}

    if (vstmtPrdDd < 1 || vstmtPrdDd > 30 && gJudgeYn == "0") {
      $c.win.alert($p, "결제기한을 정확하게 입력해주십시오(1일 초과 및 30일 이하만 가능) 재무팀에게 결제기한 요청하십시오.");
      ds_collMoneyCond.setCellData(row, "stmtPrdDd", vTmpData);
      gr_tb_Grid1.setFocusedCell(row, "stmtPrdDd");
    }
  } else if (colid == "adptDt") {
    for (let i = 0; i < ds_collMoneyCond.getRowCount(); i++) {
      if (row != i && ds_collMoneyCond.getCellData(row, "adptDt") == ds_collMoneyCond.getCellData(i, "adptDt")) {
        $c.win.alert($p, "선택하신 적용일자가 이미 입력이 되어있습니다.");
        ds_collMoneyCond.setCellData(row, "adptDt", "");
      }
    }
  }
};

// 지급주기 Combo 선택
//  language=JavaScript for=tb_Grid2 event=OnDropDown(row,colid)>
scwin.gr_tb_Grid2_onbeforeedit = function (rowIndex, columnIndex, value) {
  // let row = rowIndex;
  // let colid = gr_tb_Grid2.getColumnID(columnIndex);
  // let checkNum = 0;
  // let payCycCd = ds_payCond.getCellData(row, "payCycCd");

  // if(colid == "payDd"){
  // 	scwin.f_payCycCdDsSet("FM041");

  // 	for(i=0; i < ds_payCycCd.getRowCount(); i++)
  // 	{
  // 		if(payCycCd == ds_payCycCd.getCellData(row, "cd"))
  // 		{
  // 			checkNum = ds_payCycCd.getCellData(i,"fltrCd1");
  // 		}
  // 	}

  // 	if(checkNum == 1){
  // 		scwin.f_payDdDsSet("ZZ522");
  // 	}
  // 	else if(checkNum ==2){
  // 		scwin.f_payDdDsSet("ZZ548");
  // 	}
  // }
};

// 

// 지급일 Combo 선택
//  language=JavaScript for=tb_Grid2 event=OnCloseUp(row,colid)>
scwin.gr_tb_Grid2_oneditend = function (rowIndex, columnIndex, value) {
  let colid = gr_tb_Grid2.getColumnID(columnIndex);
  let checkNum = 0;

  // 지급주기, 주기일콤보를 여는 경우
  if (colid == "payCycCd") {
    ds_payDd.setJSON([]);
    if (value == 0) {
      // 수시인 경우
      gr_tb_Grid2.setCellReadOnly(rowIndex, "payDd", true);
      ds_payCond.setCellData(rowIndex, "payDd", "");
    } else {
      for (let i = 0; i < dlt_commonCodeFM041.getRowCount(); i++) {
        if (value == dlt_commonCodeFM041.getCellData(i, "cd")) {
          checkNum = dlt_commonCodeFM041.getCellData(i, "fltrCd1");
        }
      }
      if (checkNum == 1) {
        scwin.f_payDdDsSet("ZZ522");
      } else if (checkNum == 2) {
        scwin.f_payDdDsSet("ZZ548");
      }
    }
  } else if (colid == "payCntShtCd") {
    if (value == "25" || value == "50") {
      // 전자결재(25)이나 실물어음(50)인 경우
      gr_tb_Grid2.setCellReadOnly(rowIndex, "draftDdCntCd", false);
    } else {
      gr_tb_Grid2.setCellReadOnly(rowIndex, "draftDdCntCd", true);
      ds_payCond.setCellData(rowIndex, "draftDdCntCd", "");
    }
  }
};

// 현금과 어음비율 값 입력
//  language="javascript"  for=ds_payCond  event=onColumnChanged(row,colid)>
// 	let cashRt = ds_payCond.NameValue(row,"cashRt");
// 	let draftRt = ds_payCond.NameValue(row,"draftRt");
scwin.ds_payCond_oncelldatachange = function (info) {
  let row = info.rowIndex;
  let colid = info.colID;
  let cashRt = ds_payCond.getCellData(row, "cashRt");
  let draftRt = ds_payCond.getCellData(row, "draftRt");

  // 현금과 어음 비율을 100으로
  if (colid == "cashRt") {
    if (cashRt >= 0 && cashRt <= 100) {
      draftVal = 100 - cashRt;
      ds_payCond.setCellData(row, "draftRt", draftVal);
    } else {
      $c.win.alert($p, "현금비율은 입력값이 100보다 클 수 없습니다.");
      ds_payCond.setCellData(row, "cashRt", 100 - ds_payCond.getCellData(row, "draftRt"));
    }
  }
  if (colid == "draftRt") {
    if (draftRt >= 0 && draftRt <= 100) {
      cashVal = 100 - draftRt;
      ds_payCond.setCellData(row, "cashRt", cashVal);
    } else {
      $c.win.alert($p, "어음비율은 입력값이 100보다 클 수 없습니다.");
      ds_payCond.setCellData(row, "draftRt", 100 - ds_payCond.getCellData(row, "cashRt"));
    }
  }
};

// 지급계좌 수정 체크
//  language="javascript"  for=ds_payAcnt  event=onColumnChanged(row,colid)>
scwin.ds_payAcnt_oncelldatachange = function (info) {
  let row = info.rowIndex;
  let colid = info.colID;
  if (colid == "payClsCd") {
    if (ds_payAcnt.getCellData(row, "payClsCd") != "60") {
      ds_payAcnt.setCellData(row, "payCrcCd", "KRW");
    } else {
      ds_payAcnt.setCellData(row, "payCrcCd", "USD");
    }
  }
  if (colid == "payCrcCd") {
    if (ds_payAcnt.getCellData(row, "payCrcCd") == "KRW" && ds_payAcnt.getCellData(row, "payClsCd") == "60") {
      $c.win.alert($p, "지급구분이 외화인경우 지급화폐를 원화(KRW)로 선택할 수 없습니다.");
      ds_payAcnt.setCellData(row, "payCrcCd", "USD");
    }
  }
};

// 수금조건 PopUp 호출 
//  language=JavaScript for=tb_Grid1 event=OnPopup(Row,Colid,data)>
scwin.gr_tb_Grid1_ontextimageclick = function (rowIndex, columnIndex) {
  let Colid = gr_tb_Grid1.getColumnID(columnIndex);
  let Row = rowIndex;
  if (Colid == "adptDt") {
    //cfOpenCalendar(tb_Grid1, Row, Colid); // 달력팝업
    for (let i = 0; i < ds_collMoneyCond.getRowCount(); i++) {
      if (Row != i && ds_collMoneyCond.getCellData(Row, "adptDt") == ds_collMoneyCond.getCellData(i, "adptDt")) {
        $c.win.alert($p, "선택하신 적용일자가 이미 입력이 되어있습니다.");
        ds_collMoneyCond.setCellData(Row, "adptDt", "");
        return;
      }
    }
  } else if (Colid == "collMoneyAcctDeptNm") {
    scwin.f_openDeptPopUp('1'); // 귀속부서팝업
  } else if (Colid == "collMoneyBankbookNo") {
    scwin.f_openBankBookPopUp(); // 통장번호팝업
  }
};

// 지급조건 PopUp 호출 
//  language=JavaScript for=tb_Grid2 event=OnPopup(Row,Colid,data)>
scwin.gr_tb_Grid2_ontextimageclick = function (rowIndex, columnIndex) {
  let Colid = gr_tb_Grid2.getColumnID(columnIndex);
  let Row = rowIndex;
  if (Colid == "adptDt") {
    // cfOpenCalendar(tb_Grid2, Row, Colid); // 달력팝업
  } else if (Colid == "payAcctDeptNm") {
    scwin.f_openDeptPopUp('2'); // 귀속부서팝업
  }
};

// 지급계좌 PopUp 호출 
//  language=JavaScript for=tb_Grid3 event=OnPopup(Row,Colid,data)>
scwin.gr_tb_Grid3_ontextimageclick = function (rowIndex, columnIndex) {
  let Colid = gr_tb_Grid3.getColumnID(columnIndex);
  let Row = rowIndex;
  if (Colid == "adptDt") {
    // cfOpenCalendar(tb_Grid3, Row, Colid); // 달력팝업
  } else if (Colid == "bankNm") {
    scwin.f_openBankPopUp(); // 은행코드팝업
  }
};

// Gauce Tab선택시 행추가, 행수정, 행삭제 버튼 활성화 비활성화 
//  language=JavaScript for=mxTab event=OnSelChanged(index)>
scwin.tac_tab_onchange = function (tabId, index, userTabId) {
  if (index == 0) {
    scwin.txt_payIdx = "1";
    if (scwin.txt_saveType == "0" || scwin.txt_saveType == "1") {
      // 0:신규, 1:수정, 2:조회, 3:저장
      $c.gus.cfEnableBtnOnly($p, [btn_AddRow1, btn_DeleteRow1, btn_CancelRow1]);
    }
    if (scwin.g_sLoginDept != "00009") {
      //채권팀
      $c.gus.cfDisableBtnOnly($p, [btn_AddRow1, btn_DeleteRow1, btn_CancelRow1]);
    }
  } else if (index == 1) {
    scwin.txt_payIdx = "2";
    if (scwin.txt_saveType == "0" || scwin.txt_saveType == "1") {
      // 0:신규, 1:수정, 2:조회, 3:저장
      $c.gus.cfEnableBtnOnly($p, [btn_AddRow2, btn_DeleteRow2, btn_CancelRow2]);
    }
  } else if (index == 2) {
    scwin.txt_payIdx = "3";
    if (scwin.txt_saveType == "0" || scwin.txt_saveType == "1") {
      $c.gus.cfEnableBtnOnly($p, [btn_AddRow3, btn_DeleteRow3, btn_CancelRow3]);
    }
  } else if (index == 3) {
    scwin.txt_payIdx = "4";
    if (scwin.txt_saveType == "0" || scwin.txt_saveType == "1") {
      $c.gus.cfEnableBtnOnly($p, [btn_AddRow4, btn_DeleteRow4, btn_CancelRow4]);
    }
  }
};

// LuxCombo 조회조건 선택 
scwin.lc_sysCls_onchange = function (info) {
  scwin.txt_sysCls = lc_sysCls.getSelectedIndex();
};

// LuxCombo 조회조건2 선택 
scwin.lc_clntLupCond_onchange = function (info) {
  scwin.txt_clntLupCond = lc_clntLupCond.getSelectedIndex();
};

// 회계거래처 등록이 성공했을 경우
// 저장 TR         
scwin.sbm_saveAccountCustomer_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    scwin.f_Retrieve();
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    let vCreateYn = scwin.txt_createYn;
    scwin.f_ContentsDisable();
    $c.gus.cfDisableBtn($p, [btn_Cancel, btn_Save, btn_Cancel2, btn_Save2
    // , btn_AddRow1, btn_DeleteRow1, btn_CancelRow1
    // , btn_AddRow2, btn_DeleteRow2, btn_CancelRow2
    // , btn_AddRow3, btn_DeleteRow3, btn_CancelRow3
    ]);

    // if(vCreateYn=="1"){
    ds_accountCustomer.removeAll();
    scwin.f_Retrieve();
    // }
  }
  scwin.txt_createYn = "0";
  scwin.txt_updateYn = "0";
};
scwin.sbm_saveAccountCustomer_submiterror = function (e) {
  scwin.txt_createYn = "0";
  scwin.txt_updateYn = "0";
};
scwin.sbm_accountCustomer_submitdone = function (e) {
  let rowCnt = ds_accountCustomer.getRowCount();
  spanTotal.setLabel(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    ed_qryCntn.focus();
    scwin.f_ContentsDisable();
  } else {
    scwin.txt_clntNo = ds_accountCustomer.getCellData(0, "clntNo");
    scwin.txt_rowCount = rowCnt;
  }

  // 조회후 버튼 Enable, Disable
  if (rowCnt < 1) {
    $c.gus.cfDisableBtn($p, [btn_Update, btn_Cancel, btn_Save, btn_Update2, btn_Cancel2, btn_Save2, btn_AddRow1, btn_DeleteRow1, btn_CancelRow1, btn_AddRow2, btn_DeleteRow2, btn_CancelRow2, btn_AddRow3, btn_DeleteRow3, btn_CancelRow3, btn_AddRow4, btn_DeleteRow4, btn_CancelRow4]);
  } else {
    $c.gus.cfDisableBtn($p, [btn_Cancel, btn_Save, btn_Cancel2, btn_Save2, btn_AddRow1, btn_DeleteRow1, btn_CancelRow1, btn_AddRow2, btn_DeleteRow2, btn_CancelRow2, btn_AddRow3, btn_DeleteRow3, btn_CancelRow3, btn_AddRow4, btn_DeleteRow4, btn_CancelRow4]);
  }
  $c.gus.cfGoPrevPosition($p, gr_accountCustomer, scwin.pos_clnt); // 저장 이전 로우

  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  // $c.gus.cfShowTotalRows(totalRows,rowCnt);

  let focusedRow = gr_accountCustomer.getFocusedRowIndex();
  if (focusedRow < 0) {
    gr_accountCustomer.setFocusedCell(0, 0);
  }
  scwin.txt_createYn = "0";
  scwin.txt_updateYn = "0";

  // gr_accountCustomer.setFocusedCell(0, 0);
};
scwin.ds_accountCustomer_onbeforerowpositionchange = function (info) {
  if (scwin.txt_saveType == 0 || scwin.txt_saveType == 1) {
    $c.win.alert($p, "거래처 신규등록이나 변경사항을 저장하신 후에 다른 거래처정보로 이동하실수 있습니다.");
    return false;
  }
  return true;
};
scwin.ds_accountCustomer_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  let vCountRow = ds_accountCustomer.getRowCount();
  scwin.txt_clntNo = ds_accountCustomer.getCellData(row, "clntNo");
  let vClntKndCd = ds_accountCustomer.getCellData(row, "clntKndCd"); // 업무구분
  let vRowStatus = ds_accountCustomer.getRowStatus(row); // 현재 row 상태 (입력,삭제 등)

  if (vRowStatus == "R") {
    scwin.f_ContentsDisable();
    // $c.gus.cfDisableBtn([btn_Cancel, btn_Save, btn_Cancel2, btn_Save2, bAddRow, bUndoRow, bDeleteRow]);
    $c.gus.cfDisableBtn($p, [btn_Cancel, btn_Save, btn_Cancel2, btn_Save2, btn_AddRow1, btn_DeleteRow1, btn_CancelRow1, btn_AddRow2, btn_DeleteRow2, btn_CancelRow2, btn_AddRow3, btn_DeleteRow3, btn_CancelRow3, btn_AddRow4, btn_DeleteRow4, btn_CancelRow4]);
  } else {
    scwin.f_ContentsEnable();
    $c.gus.cfDisableBtn($p, [btn_Create, btn_Update, btn_Create2, btn_Update2]);
  }
  if (vClntKndCd == "AC") {
    gr_tb_Grid1.setGridReadOnly(false);
    gr_tb_Grid2.setGridReadOnly(false);
    gr_tb_Grid3.setGridReadOnly(false);
    gr_tb_Grid4.setGridReadOnly(false);
  } else {
    gr_tb_Grid1.setGridReadOnly(true);
    gr_tb_Grid2.setGridReadOnly(true);
    gr_tb_Grid3.setGridReadOnly(true);
    gr_tb_Grid4.setGridReadOnly(true);
    // $c.gus.cfDisableBtn([btn_Update, btn_Cancel, btn_Save, btn_Update2, btn_Cancel2, btn_Save2, bAddRow, bUndoRow, bDeleteRow]);
    $c.gus.cfDisableBtn($p, [btn_Update, btn_Cancel, btn_Save, btn_Update2, btn_Cancel2, btn_Save2, btn_AddRow1, btn_DeleteRow1, btn_CancelRow1, btn_AddRow2, btn_DeleteRow2, btn_CancelRow2, btn_AddRow3, btn_DeleteRow3, btn_CancelRow3, btn_AddRow4, btn_DeleteRow4, btn_CancelRow4]);
  }
  if (vCountRow > 0) scwin.f_RetrieveCollPayAcnt();
  if (scwin.g_sLoginDept != "00009") {//채권팀
    // $c.gus.cfDisableBtnOnly([bAddRow, bUndoRow, bDeleteRow]);
  }
};

// 거래처 번호 입력시
//  language=JavaScript for=clntNo event=OnKillFocus()>
//     clntNo.Text = $c.gus.cfGetLeftPad(clntNo.Text,'6');
scwin.ed_cLntNo_onblur = function (e) {
  ed_clntNo.setValue($c.gus.cfGetLeftPad($p, ed_clntNo.getValue(), '6'));
};

// 수금조건 그리드 컬럼 선택시 이미지변경 
//  language="javascript"  for=tb_Grid1  event=OnColumnPosChanged(Row,Colid)>
//   switch (Colid) {
//     case "collMoneyAcctDeptNm":
//       tb_Grid1.UrlImages = SEARCH_BTN; break;
// 	case "collMoneyBankbookNo":
//       tb_Grid1.UrlImages = SEARCH_BTN; break;
//     case "adptDt":
//       tb_Grid1.UrlImages = CALENDAR_BTN; break;
//   } 
// 
scwin.gr_tb_Grid1_onaftercolumnmove = function (info) {};
scwin.gr_tb_Grid2_onaftercolumnmove = function (info) {};
scwin.gr_tb_Grid3_onaftercolumnmove = function (info) {};

// 지급조건 로드종료 

// 지급계좌 로드종료 

// 거래처 종류 선택 
scwin.lc_accountClntKndCd_onchange = function (info) {
  // 사원거래처 인경우 사원번호를 입력했는지 체크
  let vAccountClntKndCode = info.newValue; //accountClntKndCd.ValueOfIndex("code", accountClntKndCd.Index);
  if (vAccountClntKndCode == "BK") {
    //금융기관인 경우
    $c.gus.cfEnableObj($p, btn_bank_search, true); // 은행팝업 이미지 활성화
    $c.gus.cfEnableObj($p, btn_emp_search, false); // 사원팝업 이미지 비활성화

    // ed_empNo.setValue("");
    // ed_empNm.setValue("");

    ed_crn.setMandatory("true");
    titile_ed_crn.addClass("req");
    ed_fncInstCd.setMandatory("true");
    titile_ed_fncInstCd.addClass("req");
    ed_empNo.setMandatory("false");
    titile_ed_empNo.addClass("");

    // $c.gus.cfRefreshMandSign();	
  } else if (vAccountClntKndCode == "EM") {
    //사원인 경우
    $c.gus.cfEnableObj($p, btn_bank_search, false); // 은행팝업 이미지 비활성화
    $c.gus.cfEnableObj($p, btn_emp_search, true); // 사원팝업 이미지 활성화

    // ed_fncInstCd.setValue("");
    // ed_fncInstNm.setValue("");

    ed_crn.setMandatory("false");
    titile_ed_crn.addClass("");
    ed_fncInstCd.setMandatory("false");
    titile_ed_fncInstCd.addClass("");
    ed_empNo.setMandatory("true");
    titile_ed_empNo.addClass("req");

    // $c.gus.cfRefreshMandSign();
  } else if (vAccountClntKndCode == "GR") {
    $c.gus.cfEnableObj($p, btn_bank_search, false); // 은행팝업 이미지 비활성화
    $c.gus.cfEnableObj($p, btn_emp_search, false); // 사원팝업 이미지 비활성화

    // ed_fncInstCd.setValue("");
    // ed_fncInstNm.setValue("");
    // ed_empNo.setValue("");
    // ed_empNm.setValue("");

    ed_crn.setMandatory("true");
    titile_ed_crn.addClass("req");
    ed_fncInstCd.setMandatory("false");
    titile_ed_fncInstCd.addClass("");
    ed_empNo.setMandatory("false");
    titile_ed_empNo.addClass("");

    // $c.gus.cfRefreshMandSign();
  }
};

// 사업자구분 선택시
scwin.lc_clntBusiClsCd_onchange = function (info) {
  let vClntBusiClsCdIndex = lc_clntBusiClsCd.getSelectedIndex();
  let vClntNo = ds_accountCustomer.getCellData(ds_accountCustomer.getRowPosition(), "clntNo");
  if (vClntBusiClsCdIndex == 0) {
    //법인사업자
    ed_crn.setMandatory("true");
    titile_ed_crn.addClass("req");
  } else if (vClntBusiClsCdIndex == 1) {
    //개인사업자
    ed_crn.setMandatory("true");
    titile_ed_crn.addClass("req");
  } else if (vClntBusiClsCdIndex == 2 || vClntBusiClsCdIndex == 3) {
    ed_crn.setMandatory("false");
    titile_ed_crn.addClass("");
    // cfRefreshMandSign();
    // 오브젝트가 mandatory이면 mandatory 표시를 하고, 아니면 표시를 지운다
  }
};

// 수금조건로우 선택시
//  language=JavaScript for=ds_collMoneyCond event=OnRowPosChanged(row)>
scwin.ds_collMoneyCond_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  let vConfirmYn = ds_collMoneyCond.getCellData(row, "confirmYn");
  if (vConfirmYn == "1") {
    gr_tb_Grid1.setReadOnly("column", "adptDt", true);
    gr_tb_Grid1.setReadOnly("column", "collMoneyAcctDeptNm", true);
    gr_tb_Grid1.setReadOnly("column", "stmtPrdClsCd", true);
    gr_tb_Grid1.setReadOnly("column", "stmtPrdDd", true);
    gr_tb_Grid1.setReadOnly("column", "collMoneyCntShtCd", true);
    gr_tb_Grid1.setReadOnly("column", "draftDdCnt", true);
    gr_tb_Grid1.setReadOnly("column", "collMoneyCrcCd", true);
    gr_tb_Grid1.setReadOnly("column", "collMoneyBankbookNo", true);
    gr_tb_Grid1.setReadOnly("column", "regId", true);
    gr_tb_Grid1.setReadOnly("column", "modId", true);
  } else {
    if (ds_collMoneyCond.getRowStatus(row) != "R") gr_tb_Grid1.setReadOnly("column", "adptDt", false);else gr_tb_Grid1.setReadOnly("column", "adptDt", true);
    gr_tb_Grid1.setReadOnly("column", "collMoneyAcctDeptNm", true);
    gr_tb_Grid1.setReadOnly("column", "stmtPrdClsCd", false);
    gr_tb_Grid1.setReadOnly("column", "stmtPrdDd", false);
    gr_tb_Grid1.setReadOnly("column", "collMoneyCntShtCd", false);
    gr_tb_Grid1.setReadOnly("column", "draftDdCnt", "Edit", false);
    gr_tb_Grid1.setReadOnly("column", "collMoneyCrcCd", false);
    gr_tb_Grid1.setReadOnly("column", "collMoneyBankbookNo", false);
    gr_tb_Grid1.setReadOnly("column", "regId", true);
    gr_tb_Grid1.setReadOnly("column", "modId", true);
  }
};

// 지급조건로우 선택시
scwin.ds_payCond_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  let vConfirmYn = ds_payCond.getCellData(row, "confirmYn");
  if (vConfirmYn == "1") {
    gr_tb_Grid2.setReadOnly("column", "adptDt", true);
    gr_tb_Grid2.setReadOnly("column", "payAcctDeptNm", true);
    gr_tb_Grid2.setReadOnly("column", "payCycCd", true);
    gr_tb_Grid2.setReadOnly("column", "payDd", true);
    gr_tb_Grid2.setReadOnly("column", "payCntShtCd", true);
    gr_tb_Grid2.setReadOnly("column", "draftDdCntCd", true);
    gr_tb_Grid2.setReadOnly("column", "payCrcCd", true);
    gr_tb_Grid2.setReadOnly("column", "cashRt", true);
    gr_tb_Grid2.setReadOnly("column", "draftRt", true);
  } else {
    if (ds_payCond.getRowStatus(row) != "R") {
      gr_tb_Grid2.setReadOnly("column", "adptDt", false); // ANY
    } else {
      gr_tb_Grid2.setReadOnly("column", "adptDt", true); // None
    }
    gr_tb_Grid2.setReadOnly("column", "payAcctDeptNm", false);
    gr_tb_Grid2.setReadOnly("column", "payCycCd", false);
    gr_tb_Grid2.setReadOnly("column", "payDd", false);
    gr_tb_Grid2.setReadOnly("column", "payCntShtCd", false);
    gr_tb_Grid2.setReadOnly("column", "draftDdCntCd", false);
    gr_tb_Grid2.setReadOnly("column", "payCrcCd", false);
    gr_tb_Grid2.setReadOnly("column", "cashRt", false);
    gr_tb_Grid2.setReadOnly("column", "draftRt", false);
  }
};

// 지급계좌로우 선택시
scwin.ds_payAcnt_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  let vConfirmYn = ds_payAcnt.getCellData(row, "confirmYn");
  if (vConfirmYn == "1") {
    gr_tb_Grid3.setReadOnly("column", "adptDt", true);
    gr_tb_Grid3.setReadOnly("column", "payClsCd", true);
    gr_tb_Grid3.setReadOnly("column", "bankNm", true);
    gr_tb_Grid3.setReadOnly("column", "bankAcntNo", true);
    gr_tb_Grid3.setReadOnly("column", "dpstrNm", true);
    gr_tb_Grid3.setReadOnly("column", "transfCmisDeductYn", true);
    gr_tb_Grid3.setReadOnly("column", "elecStmtBankCd", true);
  } else {
    if (ds_payAcnt.getRowStatus(row) != "R") {
      gr_tb_Grid3.setReadOnly("column", "adptDt", false); // ANY
    } else {
      gr_tb_Grid3.setReadOnly("column", "adptDt", true); // None
    }
    gr_tb_Grid3.setReadOnly("column", "payClsCd", false);
    gr_tb_Grid3.setReadOnly("column", "bankNm", false);
    gr_tb_Grid3.setReadOnly("column", "bankAcntNo", false);
    gr_tb_Grid3.setReadOnly("column", "dpstrNm", false);
    gr_tb_Grid3.setReadOnly("column", "transfCmisDeductYn", false);
    gr_tb_Grid3.setReadOnly("column", "elecStmtBankCd", false);
  }
};
scwin.udc_CrnInfo_onclickEvent = function (e) {
  scwin.f_openPopUp();
};
scwin.udc_zip_onclickEvent = function (e) {
  scwin.f_openZipPopUp();
};

// 청구처우편번호 입력시
scwin.udc_zip_onblurCodeEvent = function (e) {
  let vZip = ed_zip.getValue();
  if (vZip.trim() != "") {
    scwin.f_openZipPopUp();
  }
};

// 수금일 입력시
scwin.gr_tb_Grid1_oncellindexchange = async function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  let row = rowIndex;
  let vTmpData = "30";
  let vstmtPrdClsCd = ds_collMoneyCond.getCellData(row, "stmtPrdClsCd");
  let colid = gr_tb_Grid1.getColumnID(columnIndex);
  if (colid == "stmtPrdDd") {
    let olddata = ds_collMoneyCond.getCellData(oldRow, colid);
    if (olddata != "") vTmpData = olddata;
    let vstmtPrdDd = ds_collMoneyCond.getCellData(row, "stmtPrdDd");

    // 결제조건 구분선택시 결제기한은 필수
    //if(vstmtPrdClsCd!=0){
    if (vstmtPrdDd.trim() == "") {
      await $c.win.alert($p, "결제조건 선택 시 결제일자는 필수입력사항입니다");
      gr_tb_Grid1.setFocusedCell(row, "stmtPrdDd");
      ds_collMoneyCond.setCellData(row, "stmtPrdDd", vTmpData);
      return false;
    }
    //}

    if (vstmtPrdDd < 1 || vstmtPrdDd > 30 && scwin.gJudgeYn == "0") {
      await $c.win.alert($p, "결제기한을 정확하게 입력해주십시오(1일 초과 및 30일 이하만 가능). 재무팀에게 결제기한 요청하십시오.");
      ds_collMoneyCond.setCellData(row, "stmtPrdDd", vTmpData);
      gr_tb_Grid1.setFocusedCell(row, "stmtPrdDd");
      return false;
    }
  } else if (colid == "adptDt") {
    for (let i = 0; i < ds_collMoneyCond.getRowCount(); i++) {
      if (row != i && ds_collMoneyCond.getCellData(row, "adptDt") == ds_collMoneyCond.getCellData(i, "adptDt")) {
        await $c.win.alert($p, "선택하신 적용일자가 이미 입력이 되어있습니다.");
        ds_collMoneyCond.setCellData(row, "adptDt", "");
        return false;
      }
    }
  }
};
scwin.btn_search1_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
};
scwin.udc_coCd_onclickEvent = function (e) {
  if (ed_coCd.hidVal != ed_coCd.getValue()) {
    ed_coNm.setValue("");
  }
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_coCd_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_coCd_onviewchangeCodeEvent = function (info) {
  ed_coNm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_coCd.getValue())) {
    scwin.f_PopUpCompanyInfo('T');
  }
};
scwin.ed_qryCntn_onkeypress = function (e) {
  if (e.keyCode == 13) {
    //엔터
    scwin.f_Retrieve();
  }
};
scwin.sbm_payDd_submitdone = function (e) {
  let rowIndex = ds_payCond.getRowPosition();
  ds_payCond.setCellData(rowIndex, "payDd", "60");
};
scwin.covTelNumberValidator_validate = function (value) {
  var format = /^0[0-9]{1,2}-\d{1,4}-\d\d\d\d/g; //국내전화
  var nCnt = 0;
  for (var i = 0; i < value.length; i++) {
    var c = value.charAt(i);
    if (c == "-") nCnt++;
  }
  if (nCnt == 3) format = /^[1-9]{1,2}-\d{1,4}-\d{1,4}-\d\d\d\d/g; // 국제전화

  if (value.search(format) == -1) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_038, [" 전화 번호 "]));
    return false;
  }
  return true;
};
scwin.sbm_RetrieveAccountCustomerList_submitdone = function (e) {
  spanTotal_Grid1.setLabel(ds_collMoneyCond.getRowCount());
  spanTotal_Grid2.setLabel(ds_payCond.getRowCount());
  spanTotal_Grid3.setLabel(ds_payAcnt.getRowCount());
  spanTotal_Grid4.setLabel(ds_rcptDca.getRowCount());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'회계거래처관리',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_coCd',code:'coCd',codeId:'ed_coCd',editTypeName:'focus',id:'udc_coCd',maxlengthCode:'5',maxlengthName:'30',name:'coNm',nameId:'ed_coNm',onloadCallbackFunc:'',popupGridHeadTitle:'귀속코드,부서명',popupID:'',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'회사코드:yes',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onviewchangeCodeEvent':'scwin.udc_coCd_onviewchangeCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_clntDelYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'시스템',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:select1',A:{appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_sysCls',ref:'data:dma_condition.sysCls',style:'width: 100px;',submenuSize:'fixed','ev:onchange':'scwin.lc_sysCls_onchange'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_clntLupCond',ref:'data:dma_condition.clntLupCond',style:'width: 120px;',submenuSize:'fixed'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대표자명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업자번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'xf:input',A:{id:'ed_qryCntn',style:'width: 200px;',ref:'data:dma_condition.qryCntn',class:'','ev:onkeypress':'scwin.ed_qryCntn_onkeypress'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 600px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'회계거래처',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',gridUpYn:'N',gridDownFn:'scwin.f_runExcel',gridID:'gr_accountCustomer',id:'udc_gr_accountCustomer',btnPlusYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox ',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_accountCustomer',focusMode:'cell',id:'gr_accountCustomer',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',rowStatusVisible:'true',rowStatusWidth:'30',readOnly:'true',visibleRowNum:'17'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'거래처번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'거래처명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'부서명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',style:'',value:'담당자',width:'80'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntDeptNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntPersNm',inputType:'text',style:'',value:'',width:'80'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래처정보',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{id:'',class:'right btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{userAuth:'C',style:'',id:'btn_Copy2',type:'button',class:'btn',objType:'ctrlBtn','ev:onclick':'scwin.f_Copy'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복사'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'C',style:'',id:'btn_Create2',type:'button',class:'btn',objType:'ctrlBtn','ev:onclick':'scwin.f_Create'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'U',style:'',id:'btn_Update2',type:'button',class:'btn',objType:'ctrlBtn','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_Cancel2',type:'button',class:'btn',objType:'ctrlBtn','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'U',style:'',id:'btn_Save2',type:'button',class:'btn',objType:'ctrlBtn','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'chkRegistInfo',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_clntNo',style:'width: 100px;',ref:'data:ds_accountCustomer.clntNo'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(자동부여)',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'ed_clntNm',style:'width: 150px;',mandatory:'true',objType:'data',ref:'data:ds_accountCustomer.clntNm',title:'거래처명'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'titile_ed_crn',label:'사업자번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_crn_search',codeId:'ed_crn',codeWidth:'100','ev:onclickEvent':'scwin.udc_CrnInfo_onclickEvent',hideName:'true',id:'udc_CrnInfo',maxlengthCode:'13',nameId:'',objType:'data',objTypeCode:'data',onloadCallbackFunc:'',popupGridHeadTitle:'사업자번호,사업자명',popupID:'',popupTitle:'사업자번호조회,사업자번호,사업자명',refDataCollection:'ds_accountCustomer',selectID:'retrieveCrnInfo',style:'width: 144px;',readOnlyCode:'true',code:'crn',validTitle:'사업자번호'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_crn_regist',style:'',type:'button',tooltip:'왼쪽 사업자번호 검색 버튼을 클릭하여 조회후 없을경우에만 신규등록하세요"','ev:onclick':'scwin.btn_crn_regist_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOptionValue:'$blank',class:'',editType:'select','ev:onchange':'scwin.lc_clntBusiClsCd_onchange',id:'lc_clntBusiClsCd',mandatory:'true',ref:'data:ds_accountCustomer.clntBusiClsCd',search:'start',sortOption:'value',style:'width:150px;',submenuSize:'auto',visibleRowNum:'15',chooseOptionLabel:'선택',chooseOption:'true'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출입구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_sellClntYn',ref:'data:ds_accountCustomer.sellClntYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_pchsClntYn',ref:'data:ds_accountCustomer.pchsClntYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업태',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_bizcondNm',style:'width: 200px;',ref:'data:ds_accountCustomer.bizcondNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_biztypeNm',style:'width: 200px;',ref:'data:ds_accountCustomer.biztypeNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_repstNm',style:'width: 100px;',ref:'data:ds_accountCustomer.repstNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_accountClntKndCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_accountCustomer.accountClntKndCd','ev:onchange':'scwin.lc_accountClntKndCd_onchange',emptyItem:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'titile_ed_fncInstCd',label:'은행코드',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_bank_search',code:'fncInstCd',codeId:'ed_fncInstCd',editTypeCode:'focus',id:'udc_fncInstCd',maxlengthCode:'10',maxlengthName:'30',name:'fncInstNm',nameId:'ed_fncInstNm',popupID:'popupCocd',refDataCollection:'ds_accountCustomer',selectID:'',style:'',validExpCode:'은행코드',validTitle:'은행코드','ev:onclickEvent':'scwin.udc_BankCdInfo_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'titile_ed_empNo',label:'사원',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_emp_search',code:'empNo',codeId:'ed_empNo',editTypeCode:'focus',id:'udc_EmpNoDeptInfo',maxlengthCode:'6',maxlengthName:'30',name:'empNm',nameId:'ed_empNm',popupID:'popupCocd',refDataCollection:'ds_accountCustomer',selectID:'retrieveEmpNoDeptInfo',style:'width: 250px;',validExpCode:'사원코드',validTitle:'사원번호','ev:onclickEvent':'scwin.udc_empNo_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처부서',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'ed_clntDeptNm',style:'width: 150px;',ref:'data:ds_accountCustomer.clntDeptNm',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처직원직위',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'ed_clntPersPstNm',style:'width: 150px;',ref:'data:ds_accountCustomer.clntPersPstNm',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처직원명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'ed_clntPersNm',style:'width: 150px;',ref:'data:ds_accountCustomer.clntPersNm',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'유선전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_clntTelNo',style:'width: 150px;',ref:'data:ds_accountCustomer.clntTelNo',objType:'data',allowChar:'0-9-',maxlength:'20'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(\'-\' 포함)',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'휴대전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_clntMpNo',style:'width: 150px;',ref:'data:ds_accountCustomer.clntMpNo',objType:'data',allowChar:'0-9-',maxlength:'20'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(\'-\' 포함)',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'FAX번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_clntFaxNo',style:'width: 150px;',ref:'data:ds_accountCustomer.clntFaxNo',objType:'data',allowChar:'0-9-',maxlength:'20'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(\'-\' 포함)',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'E-mail',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_clntEmail',style:'width: 200px;',ref:'data:ds_accountCustomer.clntEmail',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_clntDelYn',ref:'data:ds_accountCustomer.clntDelYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업장주소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_busiAddr',style:'',ref:'data:ds_accountCustomer.busiAddr'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처주소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_zip_search',code:'zip',codeId:'ed_zip',editTypeCode:'focus',id:'udc_zip',maxlengthName:'30',name:'addr1',nameId:'ed_addr1',popupID:'popupCocd',refDataCollection:'ds_accountCustomer',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validExpCode:'우편번호',validTitle:'우편번호조회',maxlengthCode:'6','ev:onblurCodeEvent':'scwin.udc_zip_onblurCodeEvent','ev:onclickEvent':'scwin.udc_zip_onclickEvent'}},{T:1,N:'xf:input',A:{id:'ed_addr2',style:'width: 300px;',ref:'data:ds_accountCustomer.addr2',objType:'data'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'담당정보',style:'',tagname:'h4'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자부서/직위',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_deptNm',style:'width: 200px;',ref:'data:ds_accountCustomer.deptNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_mcomPicEmp_search',code:'mcomPicEmpNo',codeId:'ed_mcomPicEmpNo',editTypeCode:'focus',id:'udc_mcomPicEmpNo',maxlengthCode:'10',maxlengthName:'10',name:'mcomPicEmpNm',nameId:'ed_mcomPicEmpNm',popupID:'popupCocd',refDataCollection:'ds_accountCustomer',selectID:'retrieveEmpNoDeptInfo',style:'width: 250px;',validExpCode:'담당자코드',validTitle:'담당자조회',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_mcomPicEmpNo_onclickEvent'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'변경정보',style:'',tagname:'h4'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_regId',style:'width:150px;',ref:'data:ds_accountCustomer.regId'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_regDtm',style:'width:150px;',ref:'data:ds_accountCustomer.regDtm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수정자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_modId',style:'width:150px;',ref:'data:ds_accountCustomer.modId'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수정일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_modDtm',style:'width:150px;',ref:'data:ds_accountCustomer.modDtm'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tabbox '},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',style:'',id:'tac_tab',class:'wq_tab','ev:onchange':'scwin.tac_tab_onchange'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs1',label:'수금조건'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs2',label:'지급조건'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs3',label:'지급계좌'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs6',label:'가상계좌'}},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'height: auto;',id:'content1'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_tb_Grid1',gridDownYn:'Y',gridUpYn:'N',gridDownFn:'scwin.f_downExcelSheet_Grid1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_collMoneyCond',style:'',autoFit:'allColumn',id:'gr_tb_Grid1',visibleRowNum:'4',class:'wq_gvw','ev:oneditend':'scwin.gr_tb_Grid1_oneditend','ev:ontextimageclick':'scwin.gr_tb_Grid1_ontextimageclick',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption4',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'true',colSpan:'',width:'120',inputType:'text',style:'',id:'column1',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column15',class:'txt-red',value:'번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column55',class:'txt-red',value:'적용일자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'true',colSpan:'',width:'120',inputType:'text',style:'',id:'column58',value:'등록부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'150',inputType:'text',style:'',id:'column52',value:'등록부서',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'2',width:'170',inputType:'text',style:'',id:'column49',value:'결제조건',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'2',width:'170',inputType:'text',style:'',id:'column43',value:'결제방식',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column37',value:'화폐',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column34',value:'등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column31',value:'수정자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column13',value:'확인',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',class:'txt-red',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',class:'txt-red',value:'결제기한',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',class:'txt-blue',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',class:'txt-blue',value:'지급기한',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'adptDt',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'collMoneyAcctDeptCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',inputType:'text',style:'',id:'collMoneyAcctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'stmtPrdClsCd',value:'',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'stmtPrdDd',value:'',displayMode:'label',maxLength:'3',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'collMoneyCntShtCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'draftDdCnt',value:'',displayMode:'label',maxLength:'3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'collMoneyCrcCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',style:'',id:'regId',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',style:'',id:'modId',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'confirmYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spanTotal_Grid1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelObj:'btn_CancelRow1',btnCancelYn:'Y',btnDelYn:'N',btnRowAddObj:'btn_AddRow1',btnRowAddYn:'Y',btnRowDelObj:'btn_DeleteRow1',btnRowDelYn:'Y',cancelFunction:'scwin.f_Undo',cancelObjType:'ctrlBtn',gridID:'gr_tb_Grid1',rowAddFunction:'scwin.f_AddRow',rowAddObjType:'ctrlBtn',rowDelFunction:'scwin.f_delMarked',rowDelObjType:'ctrlBtn',style:'',rowDelUserAuth:'D',rowAddUserAuth:'C',cancelUserAuth:'D'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content2'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridID:'gr_tb_Grid2',gridDownFn:'scwin.f_downExcelSheet_Grid2',gridDownYn:'Y',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_payCond',style:'',autoFit:'allColumn',id:'gr_tb_Grid2',visibleRowNum:'4',class:'wq_gvw','ev:oneditend':'scwin.gr_tb_Grid2_oneditend','ev:onbeforeedit':'scwin.gr_tb_Grid2_onbeforeedit','ev:ontextimageclick':'scwin.gr_tb_Grid2_ontextimageclick',setCellInputTypeCustom:'true',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption5',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'true',colSpan:'',width:'70',inputType:'text',style:'',id:'column108',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column17',class:'txt-red',value:'번호',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column75',class:'txt-red',value:'적용일자',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'true',colSpan:'',width:'120',inputType:'text',style:'',id:'column105',value:'지급부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'150',inputType:'text',style:'',id:'column69',value:'계약부서',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column93',value:'지급주기',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column90',value:'지급일',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column87',value:'지급수단',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column84',value:'어음일수',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'100',inputType:'text',style:'',id:'column78',value:'지급화폐',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'2',width:'140',inputType:'text',style:'',id:'column81',value:'적용비율(%)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{rowSpan:'2',colSpan:'',width:'70',inputType:'text',style:'',id:'column96',value:'확인',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column82',value:'현금',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column103',value:'어음',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label',readOnly:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'adptDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'payAcctDeptCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',inputType:'textImage',style:'',id:'payAcctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'payCycCd',value:'',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'custom',style:'',id:'payDd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'payCntShtCd',value:'',displayMode:'label',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'draftDdCntCd',value:'',displayMode:'label',maxLength:'3'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'payCrcCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',style:'',id:'cashRt',value:'',displayMode:'label',maxLength:'3'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',style:'',id:'draftRt',value:'',displayMode:'label',maxLength:'3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'confirmYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spanTotal_Grid2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelObj:'btn_CancelRow2',btnCancelYn:'Y',btnDelYn:'N',btnRowAddObj:'btn_AddRow2',btnRowAddYn:'Y',btnRowDelObj:'btn_DeleteRow2',btnRowDelYn:'Y',cancelFunction:'scwin.f_Undo',cancelObjType:'ctrlBtn',gridID:'gr_tb_Grid2',rowAddFunction:'scwin.f_AddRow',rowAddObjType:'ctrlBtn',rowDelFunction:'scwin.f_delMarked',rowDelObjType:'ctrlBtn',style:'',rowAddUserAuth:'C',cancelUserAuth:'D',rowDelUserAuth:'D'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content3'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section4',style:'',gridID:'gr_tb_Grid3',gridDownFn:'scwin.f_downExcelSheet_Grid3',gridDownYn:'Y',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section4',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_payAcnt',style:'',autoFit:'allColumn',id:'gr_tb_Grid3',visibleRowNum:'5',class:'wq_gvw','ev:ontextimageclick':'scwin.gr_tb_Grid3_ontextimageclick',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption8',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',style:'',id:'column126',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column103',class:'txt-red',value:'번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column124',class:'txt-red',value:'적용일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column122',class:'txt-red',value:'지급구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column120',value:'지급화폐',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column118',value:'은행코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column116',class:'txt-red',value:'은행명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column114',class:'txt-red',value:'계좌번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column112',value:'예금주',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'130',inputType:'text',style:'',id:'column106',value:'전자결제은행',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column108',value:'수수료공제',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column110',value:'확인',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label',readOnly:'true',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'adptDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'payClsCd',value:'',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'payCrcCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'bankCd',value:'',displayMode:'label',mandatory:'true',readOnly:'true',hidden:' '}},{T:1,N:'w2:column',A:{textAlign:'left',width:'200',inputType:'textImage',style:'',id:'bankNm',value:'',displayMode:'label',maxLength:'30',mandatory:'true',skipKeyMoveEditMode:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'bankAcntNo',value:'',displayMode:'label',textAlign:'left',maxLength:'30',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dpstrNm',value:'',displayMode:'label',textAlign:'left',maxLength:'30'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'elecStmtBankCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transfCmisDeductYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'confirmYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:'',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spanTotal_Grid3',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelObj:'btn_CancelRow3',btnCancelYn:'Y',btnDelYn:'N',btnRowAddObj:'btn_AddRow3',btnRowAddYn:'Y',btnRowDelObj:'btn_DeleteRow3',btnRowDelYn:'Y',cancelFunction:'scwin.f_Undo',cancelObjType:'ctrlBtn',gridID:'gr_tb_Grid3',rowAddFunction:'scwin.f_AddRow',rowAddObjType:'ctrlBtn',rowDelFunction:'scwin.f_delMarked',rowDelObjType:'ctrlBtn',style:'',cancelUserAuth:'D',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',style:'',id:'content6'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section5',style:'',gridDownYn:'N',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section5',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_rcptDca',style:'',autoFit:'allColumn',id:'gr_tb_Grid4',visibleRowNum:'5',class:'wq_gvw',rowStatusVisible:'true',rowStatusWidth:'10'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column1',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'은행',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column15',value:'계좌번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'clntNo',displayMode:'label',colMerge:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'bankCd',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'200',inputType:'text',id:'rcptDca',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spanTotal_Grid4',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelObj:'btn_CancelRow4',btnCancelYn:'Y',btnDelYn:'N',btnRowAddObj:'btn_AddRow4',btnRowAddYn:'Y',btnRowDelObj:'btn_DeleteRow4',btnRowDelYn:'Y',cancelObjType:'ctrlBtn',gridID:'gr_tb_Grid4',rowAddObjType:'ctrlBtn',rowDelObjType:'ctrlBtn',style:'',cancelUserAuth:'D',rowAddUserAuth:'C',rowDelUserAuth:'D',cancelFunction:'scwin.f_Undo',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_delMarked'}}]}]}]}]}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수금조건/지급조건/지급계좌 수정은 "수정"버튼 후 행추가하여 등록하셔야 합니다. ',class:'txt-dot txt-red'}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_OzReport',style:'',type:'button',userAuth:'P',objType:'bSave','ev:onclick':'scwin.f_OzReport'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력'}]}]},{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_printCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Copy',style:'',type:'button',objType:'ctrlBtn',userAuth:'C','ev:onclick':'scwin.f_Copy'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복사'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',style:'',type:'button',objType:'ctrlBtn',userAuth:'C','ev:onclick':'scwin.f_Create'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Cancel',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_move1',style:'',type:'button',objType:'ctrlBtn',userAuth:'C','ev:onclick':'scwin.f_move1'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업자번호'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_move2',style:'',type:'button',objType:'ctrlBtn',userAuth:'C','ev:onclick':'scwin.f_move2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세금계산서거래처정보'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_move3',style:'',type:'button',objType:'ctrlBtn',userAuth:'C','ev:onclick':'scwin.f_move3'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업자별여신한도조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_move4',style:'',type:'button',objType:'ctrlBtn',userAuth:'C','ev:onclick':'scwin.f_move4'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'관리거래처대상등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_move5',style:'',type:'button',objType:'ctrlBtn',userAuth:'C','ev:onclick':'scwin.f_move5'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'채권현황조회'}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'visibility:hidden;display:none;',id:'udc_ClntCrnInfo'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'visibility:hidden;display:none;',id:'udc_BankBookCdInfo'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'visibility:hidden;display:none;',id:'udc_BankCdInfo'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'visibility:hidden;display:none;',id:'udc_AcctDeptCdInfo'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'visibility:hidden;display:none;',id:'udc_setoffRepBusiNo'}}]}]}]}]}]})